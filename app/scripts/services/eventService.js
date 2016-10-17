'use strict';

angular.module('frontendApp')
    .service('eventService', function ($http, apiService) {
        return {
            get: function (id) {
                return $http({
                    method: 'get',
                    url: apiService.url + 'event/' + id
                });
            }



        };
    });