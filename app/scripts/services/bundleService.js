'use strict';

angular.module('frontendApp')
    .service('bundleService', function ($http, apiService) {
        return {
            get: function () {
                return $http({
                    method: 'get',
                    url: "https://jsonplaceholder.typicode.com/posts?userId=1"
                    // url: apiService.url + 'bundle/' + 
                });
            }



        };
    });