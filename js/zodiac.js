// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language and dark mode
    initializePage();
    
    // Load and display zodiac data
    fetchZodiacData();
});

function initializePage() {
    const currentLanguage = localStorage.getItem('language') || 'english';
    document.documentElement.lang = currentLanguage === 'hindi' ? 'hi' : 'en';
    
    // Set up dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
    });
    
    // Set up language buttons
    const englishBtn = document.getElementById('englishBtn');
    const hindiBtn = document.getElementById('hindiBtn');
    
    if (currentLanguage === 'hindi') {
        englishBtn.classList.remove('active');
        hindiBtn.classList.add('active');
    }
    
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
    
    // Apply Hindi font if needed
    document.body.classList.toggle('hindi', currentLanguage === 'hindi');
    
    // Set title translation
    document.querySelector('h2').textContent = translations[currentLanguage].zodiacTitle;
}

function fetchZodiacData() {
    fetch('data/zodiacs.json')
        .then(response => response.json())
        .then(data => {
            displayZodiacs(data);
            setupModal();
        })
        .catch(error => console.error('Error loading zodiac data:', error));
}

function displayZodiacs(zodiacsData) {
    const zodiacsGrid = document.getElementById('zodiacsGrid');
    zodiacsGrid.innerHTML = ''; // Clear existing content
    
    const currentLanguage = localStorage.getItem('language') || 'english';
    
    zodiacsData.forEach(zodiac => {
        const zodiacCard = document.createElement('div');
        zodiacCard.className = 'card';
        zodiacCard.innerHTML = `
            <h3>${zodiac.name[currentLanguage]}</h3>
            <p>${zodiac.dates[currentLanguage]}</p>
        `;
        zodiacCard.addEventListener('click', () => openModal(zodiac));
        zodiacsGrid.appendChild(zodiacCard);
    });
}

function setupModal() {
    const modal = document.getElementById('zodiacModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openModal(zodiac) {
    const modal = document.getElementById('zodiacModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const currentLanguage = localStorage.getItem('language') || 'english';
    
    modalImage.src = `data/zodiacim/${zodiac.image}`;
    modalImage.alt = zodiac.name[currentLanguage];
    modalTitle.textContent = zodiac.name[currentLanguage];
    modalDescription.textContent = zodiac.description[currentLanguage];
    modalPoints.innerHTML=zodiac.points[currentLanguage].map(point =>
        `<li>${point}</li>`
    ).join('');
    modal.style.display = 'block';
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'hindi' ? 'hi' : 'en';
    document.body.classList.toggle('hindi', lang === 'hindi');
    document.querySelector('h2').textContent = translations[lang].zodiacTitle;
    fetchZodiacData();
}

// Shared translations
const translations = {
    english: {
        zodiacTitle: "Indian Sun Signs"
    },
    hindi: {
        zodiacTitle: "भारतीय राशियाँ"
    }
};
