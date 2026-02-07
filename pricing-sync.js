/**
 * ABC Scan Dynamic Pricing Sync
 * Handles IP-based country detection and Google Sheets data fetching via Query API (JSONP).
 * Privacy-First: Fetches ONLY the specific row for the user's country.
 * Version 1.4: Vertical alignment refinement for currency symbol
 */

// --- CONFIGURATION ---
// PASTE YOUR FULL GOOGLE SHEET URL HERE
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1AyiDa-n35NMu_8c3Wa8SnHW53Hv3J0b8YJLleHRKU88/edit?usp=sharing';

// Default values (Fallback)
let CURRENT_PRICING = {
    monthly: {
        starter: "Free",
        premium: `<span class="flex items-center"><span class="text-2xl lg:text-3xl mr-1.5 opacity-80 font-bold">$</span>4.99</span>`,
        premiumSuffix: "/mo",
        currency: "USD"
    },
    yearly: {
        starter: "Free",
        premium: `<span class="flex items-center"><span class="text-2xl lg:text-3xl mr-1.5 opacity-80 font-bold">$</span>39.99</span>`,
        premiumSuffix: "/yr",
        currency: "USD"
    }
};

/**
 * Detect user's country code via IP (Redundant Strategy)
 */
async function detectCountry() {
    // 1. Primary: ipapi.co
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Primary API failed');
        const data = await response.json();
        console.log('Primary Detection (ipapi):', data.country_code);
        return data.country_code;
    } catch (e) {
        console.warn('Primary IP detection failed, trying backup...', e);
    }

    // 2. Backup: api.country.is (Fast, Free)
    try {
        const response = await fetch('https://api.country.is');
        if (!response.ok) throw new Error('Backup API failed');
        const data = await response.json();
        console.log('Backup Detection (country.is):', data.country);
        return data.country;
    } catch (e) {
        console.warn('All IP detection failed. Defaulting to OTHERS.');
        return 'OTHERS';
    }
}

/**
 * Extract Sheet ID from URL
 */
function getSheetId(url) {
    const matches = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    return matches ? matches[1] : null;
}

/**
 * Fetch data using Google Visualization Query API via JSONP
 * bypassing CORS issues.
 */
function fetchPriceRowJSONP(sheetId, countryCode) {
    return new Promise((resolve, reject) => {
        const callbackName = 'gviz_callback_' + Math.floor(Math.random() * 100000);

        window[callbackName] = function (data) {
            delete window[callbackName];
            try {
                const script = document.getElementById('gviz-script');
                if (script) document.body.removeChild(script);
            } catch (e) { }

            if (data.status === 'error') {
                console.error('Sheet Query Error:', data.errors);
                resolve(null);
                return;
            }

            if (!data.table || data.table.rows.length === 0) {
                resolve(null);
                return;
            }

            // Extract values: B=Monthly, C=Yearly, D=Symbol, E=CurrencyUnit
            const row = data.table.rows[0].c;
            resolve({
                monthly: row[0]?.v || 9.99,
                yearly: row[1]?.v || 89.99,
                symbol: row[2]?.v || '$',
                currency: row[3]?.v || 'USD' // Column E
            });
        };

        // Query: Select B, C, D, E WHERE A = 'CountryCode'
        const query = `SELECT B, C, D, E WHERE A = '${countryCode}'`;
        const encodedQuery = encodeURIComponent(query);
        const scriptUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tq=${encodedQuery}&tqx=responseHandler:${callbackName}`;

        const script = document.createElement('script');
        script.id = 'gviz-script';
        script.src = scriptUrl;
        script.onerror = () => {
            console.error('Failed to load Google Sheets script');
            resolve(null);
        };
        document.body.appendChild(script);
    });
}

/**
 * Main Sync Function
 */
async function syncPricing() {
    const sheetId = getSheetId(GOOGLE_SHEET_URL);

    if (!sheetId || GOOGLE_SHEET_URL.includes('PASTE_YOUR')) {
        console.warn('Invalid Sheet URL');
        applyPricing(CURRENT_PRICING);
        return;
    }

    const countryCode = await detectCountry();
    let priceData = null;

    try {
        // 1. Try Specific Country
        if (countryCode && countryCode !== 'OTHERS') {
            console.log(`Fetching pricing for: ${countryCode}...`);
            priceData = await fetchPriceRowJSONP(sheetId, countryCode);
        }

        // 2. Fallback to OTHERS
        if (!priceData) {
            console.log(`No match for ${countryCode}, fetching OTHERS...`);
            priceData = await fetchPriceRowJSONP(sheetId, 'OTHERS');
        }

        // Dispatch Event for i18n
        window.USER_COUNTRY = countryCode; // Expose globally
        window.dispatchEvent(new CustomEvent('countryDetected', { detail: { country: countryCode } }));

        if (priceData) {
            // Apply HTML formatting for the symbol to make it centered/professional
            const formatPrice = (symbol, amount) => {
                const cleanSymbol = symbol.replace(/[A-Z]/g, '').trim();
                return `<span class="flex items-center"><span class="text-2xl lg:text-3xl mr-1.5 opacity-80 font-bold">${cleanSymbol}</span>${amount}</span>`;
            };

            const lang = document.documentElement.lang || 'en';
            const t = translations[lang].pricing;

            CURRENT_PRICING = {
                monthly: {
                    starter: t.price_free || "Free",
                    premium: formatPrice(priceData.symbol, priceData.monthly),
                    premiumSuffix: t.price_mo || "/mo",
                    currency: priceData.currency
                },
                yearly: {
                    starter: t.price_free || "Free",
                    premium: formatPrice(priceData.symbol, priceData.yearly),
                    premiumSuffix: t.price_yr || "/yr",
                    currency: priceData.currency
                }
            };
            console.log('Price Applied:', CURRENT_PRICING);
            applyPricing(CURRENT_PRICING);
        } else {
            console.warn('No pricing found. Using defaults.');
            applyPricing(CURRENT_PRICING);
        }

    } catch (error) {
        console.error('Sync Error:', error);
        applyPricing(CURRENT_PRICING);
    }
}

/**
 * Apply the fetched pricing to the UI
 */
function applyPricing(config) {
    if (window.PRICING_CONFIG) {
        window.PRICING_CONFIG = config;
    }

    // Trigger update if toggle exists
    if (typeof window.togglePricing === 'function') {
        const slider = document.getElementById('toggle-slider');
        const isYearly = slider && slider.style.transform === 'translateX(100%)';
        window.togglePricing(isYearly);
    }
}

// Initial Sync
document.addEventListener('DOMContentLoaded', syncPricing);
