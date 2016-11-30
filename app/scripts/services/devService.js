'use strict';

angular.module('frontendApp')
    .service('devService', function ($http, apiService) {
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
                    // url: 'http://my-app-grupog.herokuapp.com/rest/event/create/',
                    url: apiService.url() + 'rest/event/create/',
                    data: newEvent
                });
            }

        };
    });

