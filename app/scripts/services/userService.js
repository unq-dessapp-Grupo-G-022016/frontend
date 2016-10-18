'use strict';

angular.module('frontendApp')
  .service('userService', function($http, apiService ) {
    return {
        get: function(id){
            return $http({
                method: 'get',
                //url: apiService.url + 'user/' + id
                url: "https://jsonplaceholder.typicode.com/posts?userId=1"
       //         url: "http://my-app-grupog.herokuapp.com/rest/user/read/momo24"
            });
        }
      
      
       
    };
});