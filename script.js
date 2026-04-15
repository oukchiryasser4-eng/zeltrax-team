document.addEventListener('DOMContentLoaded', () => {
    // Navigation routing logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Handle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Handle Navigation Clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            navigateTo(targetId);
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Check hash on load
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (document.getElementById(hash)) {
            navigateTo(hash);
        }
    }
});

// Global navigation function
function navigateTo(targetId) {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    // Update Nav active states
    navItems.forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('href') === `#${targetId}`) {
            nav.classList.add('active');
        }
    });

    // Show target section, hide others
    sections.forEach(section => {
        section.classList.remove('active-page');
        if (section.id === targetId) {
            section.classList.add('active-page');
            window.scrollTo(0,0);
        }
    });

    // Update URL hash without jumping
    history.replaceState(null, null, `#${targetId}`);
}

// Modal handling
function openTourneyModal(tournamentName) {
    const modal = document.getElementById('tourney-modal');
    const title = document.getElementById('modal-t-title');
    title.innerText = `Inscription : ${tournamentName}`;
    modal.style.display = 'flex';
}

function openPlayerModal(name, role, stats, imgUrl) {
    const modal = document.getElementById('player-modal');
    
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-role').innerText = role;
    document.getElementById('p-stats').innerText = stats;
    
    const headerBg = document.getElementById('p-modal-header-bg');
    if(imgUrl) {
        // Strip out the file:/// for background image if needed, or just use it
        headerBg.style.backgroundImage = `url('${imgUrl.replace('file:///', '')}')`;
    } else {
        headerBg.style.backgroundImage = "url('https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?q=80&w=800&auto=format&fit=crop')";
    }

    modal.style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Form Handlers
function handleRegistration(e) {
    e.preventDefault();
    alert("Inscription réussie ! Vous recevrez un email de confirmation de la part de l'équipe Zeltrax.");
    closeModal('tourney-modal');
    e.target.reset();
}
document.addEventListener('DOMContentLoaded', () => {
    // Navigation routing logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Handle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Handle Navigation Clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            navigateTo(targetId);
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Check hash on load
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (document.getElementById(hash)) {
            navigateTo(hash);
        }
    }
});

// Global navigation function
function navigateTo(targetId) {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    // Update Nav active states
    navItems.forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('href') === `#${targetId}`) {
            nav.classList.add('active');
        }
    });

    // Show target section, hide others
    sections.forEach(section => {
        section.classList.remove('active-page');
        if (section.id === targetId) {
            section.classList.add('active-page');
            window.scrollTo(0,0);
        }
    });

    // Update URL hash without jumping
    history.replaceState(null, null, `#${targetId}`);
}

// Modal handling
function openTourneyModal(tournamentName) {
    const modal = document.getElementById('tourney-modal');
    const title = document.getElementById('modal-t-title');
    title.innerText = `Inscription : ${tournamentName}`;
    modal.style.display = 'flex';
}

function openPlayerModal(name, role, stats, imgUrl) {
    const modal = document.getElementById('player-modal');
    
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-role').innerText = role;
    document.getElementById('p-stats').innerText = stats;
    
    const headerBg = document.getElementById('p-modal-header-bg');
    if(imgUrl) {
        // Strip out the file:/// for background image if needed, or just use it
        headerBg.style.backgroundImage = `url('${imgUrl.replace('file:///', '')}')`;
    } else {
        headerBg.style.backgroundImage = "url('https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?q=80&w=800&auto=format&fit=crop')";
    }

    modal.style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Form Handlers
function handleRegistration(e) {
    e.preventDefault();
    alert("Inscription réussie ! Vous recevrez un email de confirmation de la part de l'équipe Zeltrax.");
    closeModal('tourney-modal');
    e.target.reset();
}

let cart = [];

function addToCart(name, price){
    cart.push({name, price});
    alert(name + " ajouté au panier 🛒");
    console.log(cart);
}


function handleContact(e) {
    e.preventDefault();
    alert("Message envoyé ! Merci pour votre soutien à Zeltrax Team.");
    e.target.reset();
}
