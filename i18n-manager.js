// i18n-manager.js
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en';
    const supportedLangs = Object.keys(translations);
    let hasRevealed = false;

    function revealPage() {
        if (!hasRevealed) {
            document.documentElement.style.visibility = 'visible';
            hasRevealed = true;
        }
    }

    // 1. IP Country Detection Handler (from pricing-sync.js)
    function handleCountryDetection(country) {
        if (localStorage.getItem('abcscan_lang')) {
            revealPage();
            return; // Don't override manual choice
        }

        console.log('i18n: Processing country detection:', country);
        let targetLang = null;

        if (['TW', 'HK', 'MO'].includes(country)) targetLang = 'zh-TW';
        else if (['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'].includes(country)) targetLang = 'es';
        else if (['SA', 'AE', 'EG', 'QA', 'KW', 'OM', 'BH', 'JO', 'LB', 'LY', 'DZ', 'MA', 'TN', 'YE', 'IQ'].includes(country)) targetLang = 'ar';
        else if (['DE', 'AT', 'CH', 'LI'].includes(country)) targetLang = 'de';
        else if (['FR', 'BE', 'LU', 'MC'].includes(country)) targetLang = 'fr';
        else if (country === 'IN') targetLang = 'hi';
        else if (country === 'JP') targetLang = 'ja';
        else if (country === 'KR') targetLang = 'ko';
        else if (['PT', 'BR', 'AO', 'MZ'].includes(country)) targetLang = 'pt';

        if (targetLang) {
            setLanguage(targetLang);
        }
        revealPage();
    }

    // 2. Resolve Language (Preference > Auto-Detect > Browser > Default)
    let savedLang = localStorage.getItem('abcscan_lang');

    if (savedLang && translations[savedLang]) {
        // User has explicit preference
        setLanguage(savedLang);
        revealPage();
    } else {
        // Initial load: Prep DOM with browser language just in case IP fails
        let browserLang = navigator.language;
        let initialLang = defaultLang;

        if (browserLang === 'zh-TW' || browserLang === 'zh-HK') initialLang = 'zh-TW';
        else if (browserLang.startsWith('es')) initialLang = 'es';
        else if (browserLang.startsWith('ar')) initialLang = 'ar';
        else if (browserLang.startsWith('de')) initialLang = 'de';
        else if (browserLang.startsWith('fr')) initialLang = 'fr';
        else if (browserLang.startsWith('hi')) initialLang = 'hi';
        else if (browserLang.startsWith('ja')) initialLang = 'ja';
        else if (browserLang.startsWith('ko')) initialLang = 'ko';
        else if (browserLang.startsWith('pt')) initialLang = 'pt';
        else if (browserLang.startsWith('zh')) initialLang = 'zh-TW';

        setLanguage(initialLang);

        // Fallback: If IP detection takes too long or fails, reveal after 1000ms
        setTimeout(revealPage, 1000);
    }

    // Immediate check if pricing-sync already finished before DOMContentLoaded
    if (window.USER_COUNTRY) {
        handleCountryDetection(window.USER_COUNTRY);
    } else {
        // Listen for future detection event
        window.addEventListener('countryDetected', (e) => {
            handleCountryDetection(e.detail.country);
        });
    }

    // 3. Expose Global Switcher
    window.switchLanguage = function (lang) {
        if (!translations[lang]) return;
        setLanguage(lang);
        localStorage.setItem('abcscan_lang', lang);
        closeLanguageDrawer();
    };

    // 4. Drawer Control
    window.openLanguageDrawer = function () {
        document.getElementById('lang-drawer').classList.remove('translate-x-full');
        document.getElementById('lang-overlay').classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    };

    window.closeLanguageDrawer = function () {
        document.getElementById('lang-drawer').classList.add('translate-x-full');
        document.getElementById('lang-overlay').classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    };

    function setLanguage(lang) {
        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        // Update Visual State
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('bg-white/10', 'text-cyan-400', 'border-cyan-500/50');
                btn.classList.remove('border-transparent', 'text-gray-400');
            } else {
                btn.classList.remove('bg-white/10', 'text-cyan-400', 'border-cyan-500/50');
                btn.classList.add('border-transparent', 'text-gray-400');
            }
        });

        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        // Update SEO Metadata (Title & Meta Tags)
        const seoData = translations[lang].seo;
        if (seoData) {
            if (seoData.title) document.title = seoData.title;

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && seoData.description_short) metaDescription.content = seoData.description_short;

            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords && seoData.keywords) metaKeywords.content = seoData.keywords;

            // OG Tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle && seoData.title) ogTitle.content = seoData.title;

            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription && seoData.description_long) ogDescription.content = seoData.description_long;

            const twDescription = document.querySelector('meta[property="twitter:description"]');
            if (twDescription && seoData.description_long) twDescription.content = seoData.description_long;
        }
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    }
});
