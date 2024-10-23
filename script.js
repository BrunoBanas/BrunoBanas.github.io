// Wait for the document to load before running the script 
(function ($) {
  
  // Handle URL hash navigation and hide/show content
  $(window).on('load hashchange', function () {
    $('.content-region').hide(); // Hide all content regions
    var region = location.hash.toString() || $('.main-menu a:first').attr('href'); // Default to first menu item
    $(region).show(); // Show the selected region

    // Highlight the menu link associated with this region
    $('.main-menu a').removeClass('active'); // Remove active classes
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // Handle main menu link click
  $('.main-menu a.menu-link').on('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    var targetSection = $(this.getAttribute('href'));
    $('.content-region').hide(); // Hide all sections
    targetSection.show(); // Show the selected section
  });

  // Smooth scrolling for subsection links
  $('a[href^="#research-subsection"], a[href^="#interest-subsection"], a[href^="#dofe-subsection"]').on('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    var target = $(this.getAttribute('href'));

    // Ensure the parent section is shown when a subsection is clicked
    var parentSection = target.closest('.content-region');
    $('.content-region').hide(); // Hide all sections
    parentSection.show(); // Show the section containing the clicked subsection

    // Show all subsections of the parent section
    parentSection.find('.sub-content').show(); // Ensure subsections are visible

    // Smooth scroll to the clicked subsection
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - $('header').outerHeight() // Adjust for fixed header
      }, 500); // Smooth scroll duration (800 ms)
    }
  });

})(jQuery);

