 // Show/hide the button
  window.addEventListener('scroll', function () {
    const btn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // Scroll to top smoothly
  document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



    let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scroll Down
      navbar.classList.add('hidden');
    } else {
      // Scroll Up
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });




   document.addEventListener('DOMContentLoaded', () => {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(res => res.json())
      .then(data => {
        const country = data?.name || '';
        const el = document.getElementById("user-country");
        if (el) {
          el.textContent = country
            ? `Language: English (${country})`
            : "Language: English";
        }
      })
      .catch(() => {
        const el = document.getElementById("user-country");
        if (el) el.textContent = "Language: English";
      });
  });





    window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress-bar').style.width = scrolled + '%';
  });