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

  // Reviews and FAQ links redirect and auto-close logic
  const isHome = 
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html' ||
    window.location.pathname.endsWith('/') ||
    window.location.pathname.endsWith('/index.html');
  
  const base = 'https://scotland247taxi.co.uk';
  
  if (!isHome) {
    const reviewLinks = document.querySelectorAll(
      '.mobile-menu a[href="#reviews"], .nav-overlay a[href="#reviews"], #mobile-menu-overlay a[href="#reviews"]'
    );
    reviewLinks.forEach(function(a) {
      a.href = base + '/#reviews';
    });
    
    const faqLinks = document.querySelectorAll(
      '.mobile-menu a[href="#faq"], .nav-overlay a[href="#faq"], #mobile-menu-overlay a[href="#faq"]'
    );
    faqLinks.forEach(function(a) {
      a.href = base + '/#faq';
    });
  }
  
  document.querySelectorAll(
    '.mobile-menu a, .nav-overlay a, #mobile-menu-overlay a, #mobile-services-submenu a'
  ).forEach(function(link) {
    link.addEventListener('click', function() {
      const menu = document.querySelector(
        '.mobile-menu, .nav-overlay, #mobile-menu, #nav-overlay, #mobile-menu-overlay'
      );
      if (menu) {
        menu.classList.remove('active','open');
        menu.classList.add('opacity-0', 'pointer-events-none');
        menu.classList.remove('opacity-100');
      }
      const submenu = document.getElementById('mobile-services-submenu');
      if (submenu) {
        submenu.classList.add('translate-x-full');
        submenu.classList.remove('translate-x-0');
      }
      document.body.style.overflow = '';
    });
  });
});
