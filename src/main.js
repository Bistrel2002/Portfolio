let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});


const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const text = box.querySelector('.text');
    const counter = text.querySelector('.counter');
    const target = +counter.getAttribute('data-target');

    // Create blocks for the background up to 100
    for (let i = 0; i < target; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.transform = `rotate(${3.6 * i}deg)`;
        block.style.animationDelay = `${i / 50}s`;
        text.appendChild(block);
    }

    counter.innerText = 0;

    // Animate the blocks up to the target
    const numberCount = () => {
        counter.innerText = 0;
        const animateCount = () => {
            const value = +counter.innerText;
            if (value < target) {
                counter.innerText = Math.ceil(value + 1);
                setTimeout(animateCount, 20);
            }
        };
        animateCount();
    };

    numberCount();
    setInterval(numberCount, 7000);
});

// Theme toggle functionality
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;
const html = document.documentElement;

// Function to set theme
function setTheme(theme) {
    if (theme === 'light') {
        html.classList.add('light-theme');
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.remove('light-theme');
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Check user's system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});