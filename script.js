const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'dark-mode' : 'light-mode');
    }
    

    updateAriaPressed();
}


function updateAriaPressed() {
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.setAttribute('aria-pressed', isDarkMode);
}


themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    

    updateAriaPressed();
});


initTheme();


const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const servicesGrid = document.getElementById('services-grid');
const serviceCards = Array.from(servicesGrid.querySelectorAll('.service-card'));


function filterServices() {
    const selectedCategory = categoryFilter.value;
    
    serviceCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
  
    sortServices();
}


function sortServices() {
    const sortBy = sortFilter.value;
    const visibleCards = serviceCards.filter(card => !card.classList.contains('hidden'));
    
    let sortedCards;
    
    switch(sortBy) {
        case 'price-low':
            sortedCards = visibleCards.sort((a, b) => {
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            });
            break;
        case 'price-high':
            sortedCards = visibleCards.sort((a, b) => {
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            });
            break;
        case 'name':
        default:
            sortedCards = visibleCards.sort((a, b) => {
                const nameA = a.querySelector('h4').textContent;
                const nameB = b.querySelector('h4').textContent;
                return nameA.localeCompare(nameB);
            });
            break;
    }
    
    
    sortedCards.forEach(card => {
        servicesGrid.appendChild(card);
    });
}


categoryFilter.addEventListener('change', filterServices);
sortFilter.addEventListener('change', sortServices);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


serviceCards.forEach(card => {
    const selectButton = card.querySelector('.select-button');
    
    selectButton.addEventListener('click', function() {
        const serviceName = card.querySelector('h4').textContent;
        const price = card.querySelector('.price').textContent;
        
       
        this.textContent = 'Selected!';
        this.style.backgroundColor = 'var(--color-accent-hover)';
        
       
        setTimeout(() => {
            this.textContent = 'Select Plan';
            this.style.backgroundColor = '';
        }, 1500);
        
        
        console.log(`Selected: ${serviceName} at ${price}/month`);
    });
});


 const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {

        const clickedFaqItem = question.closest(".faq-item");


        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== clickedFaqItem && item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });

        clickedFaqItem.classList.toggle("active");
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('open');
});

const observerCallback = function (entries) {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add("animate-in");
    observer.unobserve(entry.target);
    }
});
};

const observer = new IntersectionObserver(observerCallback);
const elements = document.querySelectorAll(".service-card");
elements.forEach((el) => observer.observe(el));


window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-content');
    hero.classList.add('animate-in');
});

const observerCallback3 = function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
        observer3.unobserve(entry.target);
        const img = entry.target;
        const dataSrc = img.dataset.src;
        img.src = dataSrc;
        }
    });
    };
    const lazyLoadOptions = {
    rootMargin: "50px",
    threshold: 0,
    };

    const observer3 = new IntersectionObserver(
    observerCallback3,
    lazyLoadOptions
    );
const elements3 = document.querySelectorAll(".gallery-item img[data-src]");
    elements3.forEach((el) => observer3.observe(el));
