'use strict';

angular.module('frontendApp')
  .service('userService', function($http, apiService ) {
    return {
        get: function(id){
            return $http({
                method: 'get',
                url: apiService.url + 'user/' + id
            });
        }
      
      
       
    };
});