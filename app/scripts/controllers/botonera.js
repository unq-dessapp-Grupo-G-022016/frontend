'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BotoneraCtrl', function ($scope, bundleService, apiService, dataService, $window, $location) {




        $scope.test = "bind";

        $scope.addUsers = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/user/addUsers';
        };

        $scope.viewUsers = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/user/users';
        };

        $scope.viewEvents = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/event/events';
        };

        $scope.addEvents = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/event/addEvents';
        };



        /*
                $scope.viewEventsJSON = function () {
                    bundleService.get().then(function (response) {
                        var jsonBundle = response.data;
                        $scope.datta = jsonBundle;
                    },
                        function (error) {
                            console.log(error);
                        });
                };
        */







    });
