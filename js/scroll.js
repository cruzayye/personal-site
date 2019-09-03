
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#nav'    // the scene should last for a scroll distance of 100px
        // offset: 50    // start this scene after scrolling for 50px
    })
    .setClassToggle(".dropShadow", 'show') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

var about = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#cookbook'    // the scene should last for a scroll distance of 100px
        // offset: 50    // start this scene after scrolling for 50px
    })
    .setClassToggle(".hideAbout", 'show') // pins the element for the the scene's duration
    .addTo(about); // assign the scene to the controller








$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
        //   $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          };
        });
      }
    }
  });

