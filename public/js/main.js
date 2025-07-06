function setTheme(theme) {
    if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        localStorage.setItem('theme', 'system');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}

function getPreferredTheme() {
    return localStorage.getItem('theme') || 'system';
}

function updateToggleButton(theme, toggleBtn) {
    if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'system' ? '🌓' : theme === 'dark' ? '🌙' : '☀️';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const preferredTheme = getPreferredTheme();
    updateToggleButton(preferredTheme, toggleBtn); // Update button text only (theme already set)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        if (getPreferredTheme() === 'system') {
            setTheme('system');
            updateToggleButton('system', toggleBtn);
        }
    });

    // Toggle button cycles through system, light, and dark
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = getPreferredTheme();
            const newTheme = currentTheme === 'system' ? 'light' : currentTheme === 'light' ? 'dark' : 'system';
            setTheme(newTheme);
            updateToggleButton(newTheme, toggleBtn);
        });
    }

    // Menu toggle logic (unchanged)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            navMenu.classList.toggle('active');
            menuToggle.textContent = navMenu.classList.contains('active') ? '⊗' : '☰';
        });
        document.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }

    // Update year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});