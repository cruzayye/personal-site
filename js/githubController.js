(function(module){
    const githubController ={};

    githubController.index = () =>{
        $("main > section").hide(); 
        $('#leggo').fadeIn();
    //    const githubList = github.requestgit(githubView.index);
       github.requestgit(githubView.index);
    //    $(githubList).show();

    }

    module.githubController = githubController;

})(window);
