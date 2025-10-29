// === 1. SCROLL-TO-TOP BUTTON FUNCTIONALITY ===
(function () {
  const btn = document.getElementById('scrollToTopBtn');

  // Show/hide the button
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // Scroll to top smoothly
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();


// === 2. HIDING NAVBAR ON SCROLL DOWN (Smart Navbar) ===
(function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll Down: Hide Navbar
        navbar.classList.add('hidden');
      } else {
        // Scroll Up: Show Navbar
        navbar.classList.remove('hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }
})();


// === 3. GEOLOCATION AND LANGUAGE DISPLAY ===
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById("user-country");

  if (el) {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(res => res.json())
      .then(data => {
        const country = data?.name || '';
        el.textContent = country
          ? `Language: English (${country})`
          : "Language: English";
      })
      .catch(() => {
        el.textContent = "Language: English";
      });
  }
});


// === 4. SCROLL PROGRESS BAR ===
window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('scroll-progress-bar');

  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }
});


// === 5. THEME TOGGLE (Dark/Light Mode) ===
(function () {
  const toggle = document.querySelector('#theme-toggle, .theme-toggle-footer');
  const body = document.body;

  if (!toggle) return;

  const updateToggleText = (isDark) => {
    toggle.innerHTML = isDark
      ? '🌙 <span class="theme-label">Dark Mode On</span>'
      : '☀️ <span class="theme-label">Light Mode On</span>';
  };

  // Initial Check (on load)
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark' || savedTheme === null;

  if (isDark) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
  }
  updateToggleText(isDark);

  // Toggle theme on click
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkMode = body.classList.contains('dark-mode');

    updateToggleText(darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  });
})();
