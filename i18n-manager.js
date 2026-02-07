// i18n-manager.js
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en';
    const supportedLangs = Object.keys(translations);

    // 1. Resolve Language (Preference > Auto-Detect > Browser > Default)
    let savedLang = localStorage.getItem('abcscan_lang');

    if (savedLang && translations[savedLang]) {
        // User has explicit preference
        setLanguage(savedLang);
    } else {
        // Initial load: Try browser first, then wait for IP
        let browserLang = navigator.language;
        if (browserLang === 'zh-TW' || browserLang === 'zh-HK') {
            setLanguage('zh-TW');
        } else if (browserLang.startsWith('es')) {
            setLanguage('es');
        } else if (browserLang.startsWith('zh')) {
            setLanguage('zh-TW'); // Fallback for broadly Chinese browsers to TW
        } else {
            setLanguage(defaultLang);
        }
    }

    // 2. Listen for IP Country Detection (from pricing-sync.js)
    function handleCountryDetection(country) {
        if (localStorage.getItem('abcscan_lang')) return; // Don't override manual choice

        console.log('i18n: Processing country detection:', country);

        if (['TW', 'HK', 'MO'].includes(country)) {
            setLanguage('zh-TW');
        } else if (['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'].includes(country)) {
            setLanguage('es');
        } else {
            // Default stays as set in section 1
        }
    }

    // Immediate check if pricing-sync already finished
    if (window.USER_COUNTRY) {
        handleCountryDetection(window.USER_COUNTRY);
    }

    // Listen for future detection event
    window.addEventListener('countryDetected', (e) => {
        handleCountryDetection(e.detail.country);
    });

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
    };

    window.closeLanguageDrawer = function () {
        document.getElementById('lang-drawer').classList.add('translate-x-full');
        document.getElementById('lang-overlay').classList.add('opacity-0', 'pointer-events-none');
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
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    }
});
