'use strict';

var myApp = angular.module("myApp", [
    'ngRoute',
    'ui.bootstrap'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'ProjectCtrl'
      }).
      when('/projects/:id', {
        templateUrl: 'partials/project-detail.html',
        controller: 'BuildsCtrl'
      }).
      otherwise({
        redirectTo: '/app'
      });
}]);

    myApp.run(function($rootScope) {
    $rootScope.host = "tul1wwptc1.corporate.local";
    $rootScope.name = "TeamCity Production";
    $rootScope.TCEnv = "Production";
    $rootScope.currentProject = "";
});

    myApp.toggleHost = function() {
        console.log('entering toggleHost, rootScope.TCEnv', $rootScope.TCEnv);
        if ($scope.host === "tul1wwptc1.corporate.local") {
            $scope.host = "tul1wwptc2.corporate.local:8111";
            $scope.name = "TeamCity SandBox";
            $rootScope.TCEnv = "SandBox";
        } else {
            $scope.host = "tul1wwptc1.corporate.local";
            $scope.name = "TeamCity Production";
            $rootScope.TCEnv = "Production";
        }
        console.log('leaving toggleHost, rootScope.TCEnv', $rootScope.TCEnv);
    };

myApp.controller('TCCtrl', function($scope, $http) {
        
     $scope.status="Loading";
  // http://www.listingsearch.com/service/test_function  please check its returns one onject 
  
     $scope.projects = [];
     $http({method:'GET', url:'http://$rootScope.host/guestAuth/app/rest/projects'}).success(function(data) {
     for (var item in data.project) {
          if(item.hasOwnProperty('archived')) {
            delete item.archived;
            } else {
            $scope.projects.push(item);
          }
        }
	$scope.status="Loaded";
 
})});

myApp.controller('ProjectCtrl', function($scope, $http, $id) {
        
    $scope.status="Loading";
    $rootScope.currentProject = "$id";
  // http://www.listingsearch.com/service/test_function  please check its returns one onject 
  
    $scope.buildTypes = [];
    $http({method:'GET', url:'http://$rootScope.host/guestAuth/app/rest/projects/id:$id/buildTypes'}).success(function(data) {
        for (var item in data.buildTypes) {
             if(item.hasOwnProperty('paused')) {
               delete item.paused;
               } else {
               $scope.buildTypes.push(item);
             }
           }
    $scope.buildTypes = data.buildTypes; // response data
    $scope.status="Loaded";

})});

    myApp.controller('BuildsCtrl', function($scope, $http, $id) {
      $scope.status="Loading";
      $scope.builds = [];
      $http({method:'GET', url:'http://$rootScope.host/guestAuth/app/rest/'}).success(function(data) {
      for (var item in data.build) {
            if(item.hasOwnProperty('paused')) {
              delete item.paused;
              } else {
              $scope.builds.push(item);
            }
          }
          $scope.status="Loaded";
          }
)});

    myApp.controller('BuildDetailCtrl', function($scope, $http, $id) {
      $scope.status="Loading";
      $scope.buildDetails = [];
      $http({method:'GET', url:'http://$rootScope.host/guestAuth/app/rest/builds/id:$id'}).success(function(data) {
      for (var item in data.build) {
              $scope.buildDetails.push(item);
          }
          $scope.status="Loaded";
      }
)});
