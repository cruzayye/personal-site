(function(module) {
  const projectPage = {};
  projectPage.show = () => {
      $("main > section").hide();
      $("#project-list").fadeIn();

  };


  module.projectPage = projectPage;
  // history.pushState(projectPage, "page 2", "/projects");
})(window);







