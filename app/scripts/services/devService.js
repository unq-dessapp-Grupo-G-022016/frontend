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
                    //url:  'http://localhost:8080/rest/event/create/',
                    //url: 'http://localhost:9000/rest/event/create/',
                    url: 'http://my-app-grupog.herokuapp.com/rest/event/create/',
                    data: newEvent
                });
            }

        };
    });

