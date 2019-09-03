(function (module){
    const github = {};

    github.all = [];

    github.requestgit = function(callback) {
        $.getJSON('https://api.github.com/users/cruzayye /repos')
        .then(data => {
            github.all = data;
            console.log( github);
            console.log(github.all);
            // github.map(github =>)
            
        })
        .then(callback);
        
    }
    github.with = attr => github.all.filter(repo => repo[attr]);

    module.github = github;
    
})(window);