document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(
    '.hamburger, #hamburger, [data-menu-toggle], .menu-toggle, #mobile-menu-btn'
  );
  const mobileMenu = document.querySelector(
    '.mobile-menu, #mobile-menu, .nav-overlay, #nav-overlay, #mobile-menu-overlay'
  );
  const closeBtn = document.querySelector(
    '.close-menu, #close-menu, .menu-close, #menu-close, #mobile-menu-close'
  );
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      
      // Handle visibility classes for Tailwind compatibility
      if (mobileMenu.classList.contains('active') || mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100');
        document.body.style.overflow = '';
      }
    });
  }
  
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu when any link is tapped
  document.querySelectorAll('.mobile-menu a, #mobile-menu-overlay a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100');
        document.body.style.overflow = '';
      }
    });
  });

  // Inner pages base path anchor link replacement
  const path = window.location.pathname;
  const isHomepage = path === '/' || path === '/index.html' || path.endsWith('/') || path.endsWith('/index.html');

  if (!isHomepage) {
    const baseUrl = 'https://scotland247taxi.co.uk';
    document.querySelectorAll('.mobile-menu a[href="#fleet"], #mobile-menu-overlay a[href="#fleet"]').forEach(function(a) {
      a.href = baseUrl + '/#fleet';
    });
    document.querySelectorAll('.mobile-menu a[href="#reviews"], #mobile-menu-overlay a[href="#reviews"]').forEach(function(a) {
      a.href = baseUrl + '/#reviews';
    });
    document.querySelectorAll('.mobile-menu a[href="#faq"], #mobile-menu-overlay a[href="#faq"]').forEach(function(a) {
      a.href = baseUrl + '/#faq';
    });
    document.querySelectorAll('.mobile-menu a[href="#contact"], #mobile-menu-overlay a[href="#contact"]').forEach(function(a) {
      a.href = baseUrl + '/#contact';
    });
  }
});
