$(document).ready(function () {
  // navbar style while scrolling
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav").addClass("scrolling");
    } else {
      $(".nav").removeClass("scrolling");
    }
  });
  // btn clicking action
  $(".sections-btn").click(function () {
    $(".nav .sections").toggleClass("active");
    $(".sections-btn i").toggleClass("active");
  });
  // typing animation
  var typed = new Typed(".description", {
    strings: ["a Full Stack Developer","a Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
});
