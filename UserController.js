// Code goes here
(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(response) {
      $scope.user = response;
      github.getRepos($scope.user)
        .then(onData, onError);
    };

    var onData = function(data) {
      $scope.repos = data;
    };

    var onError = function(response) {
      $scope.error = "Could not fetch the data.";
    };
    $scope.username = $routeParams.username;
    $scope.tableOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);
}());