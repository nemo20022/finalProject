// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'dark-mode' : 'light-mode');
    }
}

// Toggle theme and save preference
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
});

// Initialize theme on page load
initTheme();

// Filter and sort functionality
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const servicesGrid = document.getElementById('services-grid');
const serviceCards = Array.from(servicesGrid.querySelectorAll('.service-card'));

// Filter services by category
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
    
    // Re-sort after filtering
    sortServices();
}

// Sort services
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
    
    // Reorder the DOM elements
    sortedCards.forEach(card => {
        servicesGrid.appendChild(card);
    });
}

// Add event listeners for filters
categoryFilter.addEventListener('change', filterServices);
sortFilter.addEventListener('change', sortServices);

// Smooth scroll for anchor links
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

// Add click feedback to service cards
serviceCards.forEach(card => {
    const selectButton = card.querySelector('.select-button');
    
    selectButton.addEventListener('click', function() {
        const serviceName = card.querySelector('h4').textContent;
        const price = card.querySelector('.price').textContent;
        
        // Visual feedback
        this.textContent = 'Selected!';
        this.style.backgroundColor = 'var(--color-accent-hover)';
        
        // Reset after a delay
        setTimeout(() => {
            this.textContent = 'Select Plan';
            this.style.backgroundColor = '';
        }, 1500);
        
        // Log selection (in a real app, this would trigger further actions)
        console.log(`Selected: ${serviceName} at ${price}/month`);
    });
});
