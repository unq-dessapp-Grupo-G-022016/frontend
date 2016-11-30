'use strict';

angular.module('frontendApp')
    .service('dataService', function ($http, apiService) {

        var auth = {};


        var bundle = {};



        return {


            userSave: function (data) {
                auth = data;
            },

            getUser: function () {
                return auth;
            },

            getUserEmail: function () {
                return auth.email;
            },

            saveBundle: function (data) {
                bundle = data;
            },

            getBundle: function () {
                return bundle;
            },

            get: function () {
                return $http({
                    method: 'get',
                    url: apiService.url() + 'event/'
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

