(function(module){
    const githubView ={};

    const render = Handlebars.compile($("#github-template").text());


githubView.index = function () {
    $('#leggo').append(
        github.with('name').map(render) 
      );


};



module.githubView = githubView;

})(window);




///this is where the view portion of the MVC model. 
