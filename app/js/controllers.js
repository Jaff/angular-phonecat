'use strict';

/* Controllers */

var teamcityControllers = angular.module('teamcityControllers', []);

teamcityControllers.controller('ProjectListCtrl', function($scope, $http) {
        
		$scope.status="Loading";
  // http://www.listingsearch.com/service/test_function  please check its returns one onject 
  
		$http({method:'GET', url:'http://teamcity.corporate.local/guestAuth/app/rest/projects'}).success(function(data) {
 $scope.projects = data.project; // response data
	$scope.status="Loaded";
 
})});

teamcityControllers.controller('ProjectBuildTypesCtrl', function($scope, $http, $id) {
        
		$scope.status="Loading";
  // http://www.listingsearch.com/service/test_function  please check its returns one onject 
  
		$http({method:'GET', url:'http://teamcity.corporate.local/guestAuth/app/rest/projects/id:$id/buildTypes'}).success(function(data) {
 $scope.buildTypes = data.buildTypes; // response data
	$scope.status="Loaded";

})});

teamcityControllers.controller('BuildsController', function($scope, $http, $id) {
        
		$scope.status="Loading";
  // http://www.listingsearch.com/service/test_function  please check its returns one onject 
  
		$http({method:'GET', url:'http://teamcity.corporate.local/guestAuth/app/rest/builds/id:$id/buildTypes'}).success(function(data) {
 $scope.buildTypes = data.buildTypes; // response data
	$scope.status="Loaded";

})});
