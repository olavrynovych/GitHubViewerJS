// Code goes here
(function() {

  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval,$location) {

    $scope.search = function(username) {
      if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
          $scope.notification = null;
      }
      $location.path("/user/"+ username);
    };
    
  
    $scope.notification = null;
    var decrement = function() {
        $scope.countdown--;
        if ($scope.countdown < 1 && $scope.username) {
            $scope.search($scope.username);
          return;
        } else if ($scope.countdown < 1) {
            $scope.notification = "Please enter valid username.";
            $scope.countdown = null;
      }
    };

    var countdownInterval = null;
    var startCount = function() {
      countdownInterval = $interval(decrement, 1000, $scope.countdown);
    };

   
    $scope.username = "angular";
    $scope.countdown = 8;
    
    startCount();
  };

  app.controller("MainController", MainController);
}());