/////////////////blog
(function(module) {
  const homePage = {};
  homePage.show = () => {
      // $("#top").show();
      
      $("section:hidden").show();
      $("#projectSection").hide();

  };


  module.homePage = homePage;
})(window);
