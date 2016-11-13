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
                    //url:  'http://localhost:8080/rest/event/create/',
                    //url: 'http://localhost:9000/rest/event/create/',
                    url: 'http://my-app-grupog.herokuapp.com/rest/user/create',
                    data: newUser
                });
            }

        };
    });

