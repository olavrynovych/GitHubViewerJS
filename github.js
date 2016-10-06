(function() {

  var github = function($http) {
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(responce) {
          return responce.data;
        });
    };
    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(responce) {
          return responce.data;
        });
    };
    var getRepoDetails = function(username, reponame){
      var repo;
      var access_token="token 2d0138a59f245e31c74e0ca399f902be5a85fc49";
      
      var repoUrl = "https://api.github.com/"+"repos/" + username+"/"+reponame;
      var options = { headers: {'Authorization': access_token}};
      return $http.get(repoUrl)
            .then(function(responce){
                    repo = responce.data;
                  return $http.get(repoUrl+"/contributors", options)
                            .then(function(responce){
                                  repo.collaborators = responce.data;
                                  return repo; 
                            });
            });
    };
    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
  };
  var module = angular.module("githubViewer");
  module.factory("github", github);

}());