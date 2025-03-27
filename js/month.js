// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language and dark mode
    initializePage();
    
    // Load and display month data
    fetchMonthData();
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
}

function fetchMonthData() {
    fetch('data/months.json')
        .then(response => response.json())
        .then(data => {
            displayMonths(data);
            setupModal();
        })
        .catch(error => console.error('Error loading months data:', error));
}

function displayMonths(monthsData) {
    const monthsGrid = document.getElementById('monthsGrid');
    monthsGrid.innerHTML = ''; // Clear existing content
    
    const currentLanguage = localStorage.getItem('language') || 'english';
    
    monthsData.forEach(month => {
        const monthCard = document.createElement('div');
        monthCard.className = 'card';
        monthCard.innerHTML = `
            <h3>${month.name[currentLanguage]}</h3>
            <p>${month.dates[currentLanguage]}</p>
        `;
        monthCard.addEventListener('click', () => openModal(month));
        monthsGrid.appendChild(monthCard);
    });
}

function setupModal() {
    const modal = document.getElementById('monthModal');
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

function openModal(month) {
    const modal = document.getElementById('monthModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const currentLanguage = localStorage.getItem('language') || 'english';
    
    modalImage.src = `images/months/${month.image}`;
    modalImage.alt = month.name[currentLanguage];
    modalTitle.textContent = month.name[currentLanguage];
    modalDescription.textContent = month.description[currentLanguage];
    
    modal.style.display = 'block';
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'hindi' ? 'hi' : 'en';
    document.body.classList.toggle('hindi', lang === 'hindi');
    fetchMonthData();
}