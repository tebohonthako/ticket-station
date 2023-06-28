class SmoothScroll {
  constructor() {
    this.navbarCollapse = $('.navbar-collapse');  // Selecting the navbar collapse element
    this.smoothScrollLinks = $('.smoothscroll'); // Selecting the smooth scroll links
    this.navbar = $('.navbar'); // Selecting the navbar element
    
    this.setupEventHandlers(); // Setting up event handlers
  }

  setupEventHandlers() {
    const self = this; // Storing a reference to the class instance

    // MENU
    this.navbarCollapse.find('a').on('click', function() {
      self.collapseNavbar(); // Collapsing the navbar when a menu item is clicked
    });

    // CUSTOM LINK
    this.smoothScrollLinks.on('click', function() {
      const target = $(this).attr('href'); // Getting the target element from the link's href attribute
      const targetElement = $(target); // Selecting the target element
      const headerHeight = self.navbar.height(); // Getting the height of the navbar

      self.scrollToElement(targetElement, headerHeight); // Scrolling to the target element
      return false; // Preventing the default link behavior
    });
  }

  collapseNavbar() {
    this.navbarCollapse.collapse('hide'); // Hiding the navbar when called
  }

  scrollToElement(element, navHeight) {
    const offset = element.offset(); // Getting the offset of the target element
    const offsetTop = offset.top; // Extracting the top offset value
    const totalScroll = offsetTop - navHeight; // Calculating the total scroll position

    $('body,html').animate({
      scrollTop: totalScroll // Animating the scroll position to the desired element
    }, 300);
  }
}

// Create an instance of the SmoothScroll class
const smoothScroll = new SmoothScroll();
