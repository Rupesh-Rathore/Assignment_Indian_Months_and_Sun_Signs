// Shared translations for UI elements
const translations = {
    english: {
        title: "Nakshtra Nexus",
        monthsBtn: "Indian Months",
        zodiacsBtn: "Indian Sun Signs",
        monthsTitle: "Indian Months",
        zodiacTitle: "Indian Sun Signs"
    },
    hindi: {
        title: "Nakshtra Nexus",
        monthsBtn: "भारतीय महीने",
        zodiacsBtn: "भारतीय राशियाँ",
        monthsTitle: "भारतीय महीने",
        zodiacTitle: "भारतीय राशियाँ"
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    const currentLanguage = localStorage.getItem('language') || 'english';
    document.documentElement.lang = currentLanguage === 'hindi' ? 'hi' : 'en';
    
    // Set up dark mode toggle
    setupDarkMode();
    
    // Set up language buttons
    setupLanguageButtons();
    
    // Apply translations
    applyLanguage();
});

function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Set initial state
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Add event listener
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
    });
}

function setupLanguageButtons() {
    const englishBtn = document.getElementById('englishBtn');
    const hindiBtn = document.getElementById('hindiBtn');
    const currentLanguage = localStorage.getItem('language') || 'english';
    
    // Set initial active button
    if (currentLanguage === 'hindi') {
        englishBtn.classList.remove('active');
        hindiBtn.classList.add('active');
    }
    
    // Add event listeners
    englishBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            hindiBtn.classList.remove('active');
            changeLanguage('english');
        }
    });
    
    hindiBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            englishBtn.classList.remove('active');
            changeLanguage('hindi');
        }
    });
}

function applyLanguage() {
    const lang = localStorage.getItem('language') || 'english';
    
    // Update UI elements
    document.querySelector('h1').textContent = translations[lang].title;
    
    // Update buttons if they exist on the page
    const monthsBtn = document.querySelectorAll('.nav-button')[0];
    const zodiacsBtn = document.querySelectorAll('.nav-button')[1];
    
    if (monthsBtn) monthsBtn.textContent = translations[lang].monthsBtn;
    if (zodiacsBtn) zodiacsBtn.textContent = translations[lang].zodiacsBtn;
    
    // Update titles if they exist
    const monthsTitle = document.querySelector('h2');
    if (monthsTitle && window.location.pathname.includes('month.html')) {
        monthsTitle.textContent = translations[lang].monthsTitle;
    }
    
    const zodiacTitle = document.querySelector('h2');
    if (zodiacTitle && window.location.pathname.includes('zodiac.html')) {
        zodiacTitle.textContent = translations[lang].zodiacTitle;
    }
    
    // Add/remove Hindi class for font styling
    document.body.classList.toggle('hindi', lang === 'hindi');
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'hindi' ? 'hi' : 'en';
    
    // Apply translations
    applyLanguage();
    
    // Reload data if on months or zodiac page
    if (window.location.pathname.includes('month.html') && typeof fetchMonthData === 'function') {
        fetchMonthData();
    } else if (window.location.pathname.includes('zodiac.html') && typeof fetchZodiacData === 'function') {
        fetchZodiacData();
    }
}
