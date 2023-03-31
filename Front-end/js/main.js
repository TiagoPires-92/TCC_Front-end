(function () {
  "use strict";

  const select = (el, all = false) => {
      el = el.trim()
      if (all) {
          return [...document.querySelectorAll(el)]
      } else {
          return document.querySelector(el)
      }
  }

  const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
          if (all) {
              selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
              selectEl.addEventListener(type, listener)
          }
      }
  }

  const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
  }


  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              navbarlink.classList.add('active')
          } else {
              navbarlink.classList.remove('active')
          }
      })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight

      if (!header.classList.contains('header-scrolled')) {
          offset -= 16
      }

      let elementPos = select(el).offsetTop
      window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
      })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
      }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
      if (select(this.hash)) {
          e.preventDefault()

          let navbar = select('#navbar')
          if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile')
              let navbarToggle = select('.mobile-nav-toggle')
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
      }
  }, true)

  /**
   * Testimonials slider
   */
  new Swiper('.services-slider', {
      speed: 600,
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
      },
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1200: {
              slidesPerView: 4,
              spaceBetween: 20
          }
      }
  });

})()