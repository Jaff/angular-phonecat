'use strict';

/* Services */

var teamcityServices = angular.module('teamcityServices', ['ngResource']);

teamcityServices.factory('project', ['$resource',
  function($resource){
    return $resource('http://{{rootScope.host}}/guestAuth/app/rest/projects/', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);
