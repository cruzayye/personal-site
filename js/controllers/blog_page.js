/////////////////blog
(function(module) {
  const blogPage = {};

  blogPage.show = () => {
      $("main > section").hide();
      $(".blogSpot").fadeIn();


  };



  module.blogPage = blogPage;
})(window);

