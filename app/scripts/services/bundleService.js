'use strict';

angular.module('frontendApp')
    .service('bundleService', function ($http, apiService) {
        return {
            get: function () {
                return $http({
                    method: 'get',
                    url: "http://my-app-grupog.herokuapp.com/rest/event/events"
                    // url: "https://jsonplaceholder.typicode.com/posts?userId=1"
                    // url: apiService.url + 'bundle/' + 
                });
            }

            /*
            get: function () {
                return apiService.get("rest/event/events");
            }
*/

        };
    });