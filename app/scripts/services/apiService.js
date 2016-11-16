
'use strict';


angular.module('frontendApp')
    .service('apiService', function ($http) {
        return {
            url: function () {
                return "http://my-app-grupog.herokuapp.com/";
            },

            get: function (route) {
                return $http({
                    method: 'get',
                    url: this.url() + route
                });
            },

            eventAssist: function (id, user) {
                return $http({
                    method: 'put',
                    url: this.url() + id + "/" + user
                });
            },

            addFriend: function (myUserName, friendUsername) {
                return $http({
                    method: 'put',
                    url: this.url() + "user/addFriend" + myUserName + friendUsername
                });
            },




        };
    });