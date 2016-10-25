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

            save: function (newVehicle) {
                return $http({
                    method: 'post',
                    url: ENV.apiEndpoint + 'event/create',
                    data: newVehicle
                });
            }

        };
    });