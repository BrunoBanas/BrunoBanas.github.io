// Wait for the document to load before running the script 
(function ($) {

  // Hide all content regions except for the one specified in the URL hash
  $(window).on('load hashchange', function () {
    $('.content-region').hide(); // Hide all content regions
    var region = location.hash.toString() || $('.main-menu a:first').attr('href'); // Default to first menu item
    $(region).show(); // Show the selected region

    // Highlight the menu link associated with this region
    $('.main-menu a').removeClass('active'); // Remove active classes
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // Show the corresponding main section when a main menu link is clicked
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
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800); // Smooth scroll duration (800 ms)

      // Ensure the parent section is shown when a subsection is clicked
      var parentSection = target.closest('.content-region');
      $('.content-region').hide(); // Hide all sections
      parentSection.show(); // Show the section of the clicked subsection
    }
  });

})(jQuery);
