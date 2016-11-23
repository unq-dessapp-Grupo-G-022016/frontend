'use strict';

angular.module('frontendApp')
    .service('userService', function ($http, apiService) {
        return {
            get: function (id) {
                return $http({
                    method: 'get',
                    //        url: apiService.url + "rest/user/read/" + id
                    url: "http://my-app-grupog.herokuapp.com/rest/user/read/" + id

                    //url: "https://jsonplaceholder.typicode.com/posts?userId=1"
                    //       url: "http://my-app-grupog.herokuapp.com/rest/user/users"
                });
            },
            getDto: function (userName) { 
                return $http({
                    method: 'get',
                    //        url: apiService.url + "rest/user/read/" + id
                    url: "http://my-app-grupog.herokuapp.com/rest/user/read/" + userName

                    //url: "https://jsonplaceholder.typicode.com/posts?userId=1"
                    //       url: "http://my-app-grupog.herokuapp.com/rest/user/users"
                });
            },
            saveDto: function (userName) { 
                return $http({
                    method: 'post',
                    //        url: apiService.url + "rest/user/read/" + id
                    url: "http://my-app-grupog.herokuapp.com/rest/user/createdto/" + userName

                    //url: "https://jsonplaceholder.typicode.com/posts?userId=1"
                    //       url: "http://my-app-grupog.herokuapp.com/rest/user/users"
                });
            },

            save: function (newUser) {
                return $http({
                    method: 'post',
                    url: 'http://my-app-grupog.herokuapp.com/rest/user/create',
                    data: newUser
                });
            }

        };
    });