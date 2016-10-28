'use strict';

angular.module('frontendApp')
    .service('devtService', function ($http, apiService) {
        return {
            get: function (id) {
                return $http({
                    method: 'get',
                    url: apiService.url + 'event/' + id
                });
            },

            save: function (newEvent) {
                return $http({
                    method: 'post',
                    url:  'http://localhost:8080/rest/event/create/',
                    data: newEvent
                });
            }

        };
    });