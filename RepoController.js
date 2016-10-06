(function() {

  var module = angular.module("githubViewer");

  var RepoController = function($scope, $routeParams, github) {
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;

    var onRepo = function(data) {
      console.log("Getting repo name: "+data.name);
      $scope.repo = data;
    };
    var onError = function(reason) {
      $scope.repoError = reason;
    };
    
     github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
    
  };
  

  module.controller("RepoController", RepoController);

}());