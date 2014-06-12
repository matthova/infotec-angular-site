'use strict';

/* Controllers */

angular.module('InfotecApp.controllers', [])
.controller('HomeController', function($scope) {
  
})
.controller('TracksController', function($scope, TrackService) {    
  $scope.tracks = [];
  TrackService.getTracks()
    .success(function(data){
      $scope.tracks = data.entries;
    })
    .error(function(){
      alert("oh noes!");
    })
  ;
})
.controller('ContactController', function($scope) {
  
})
.controller('SessionsController', function($scope, $routeParams, TrackService) {
  $("input").focus();
  
  $scope.sessions = [];
  TrackService.getSessions($routeParams.id)
    .success(function(data){
      $scope.sessions = data.entries;
    })
    .error(function(){
      alert("oh noes!");
    })
  ;
})
.controller('HeaderController', function($scope, $location) {
  $(".navbar-collapse li a").click(function(){
    $(".collapse").collapse("hide");
  });

  $scope.isActive = function(url){
    return url == $location.path();
  }
});
