'use strict';

/* App Module */

var teamcityApp = angular.module('teamcityApp', [
  'ngRoute',
  'teamcityAnimations',

  'teamcityControllers',
  'teamcityFilters',
  'teamcityServices'
])
.run(function($rootScope) {
    $rootScope.host = "tul1wwptc1.corporate.local";
    $rootScope.name = "TeamCity Production";
});

teamcityApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'projectListCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'projectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  }]);
