'use strict';

angular.module('frontendApp')
    .service('createUserService', function ($http, apiService) {
        return {
            get: function (id) {
                return $http({
                    method: 'get',
                    url: apiService.url + 'user/' + id
                });
            },

            save: function (newUser) {
                return $http({
                    method: 'post',
                 //   url: 'http://my-app-grupog.herokuapp.com/rest/user/create',
                    url: apiService.url() + 'rest/user/create',                 
                    data: newUser
                });
            }

        };
    });

