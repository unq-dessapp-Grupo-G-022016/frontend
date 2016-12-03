'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BundleTripCtrl', function ($scope, dataService, apiService, $window, $location) {

        $scope.asd = "bindTest";

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.Assist = function (id) {
            $scope.idd = id;
            var user = dataService.getUserEmail();
            //$scope.asd = dataService.getBundle().data[id][1];
            var firstEvent = dataService.getBundle().data[id][0].id;
            var secondEvent = dataService.getBundle().data[id][1].id;

            apiService.eventAssist(firstEvent, user).then(function (response) {
                console.log("fst event ok");
            },
                function (error) {
                    console.log("fst event fail");
                });

            apiService.eventAssist(secondEvent, user).then(function (response) {
                console.log("snd event ok");
            },
                function (error) {
                    console.log("snd event fail");
                });

        };


        $scope.bundle = dataService.getBundle().data;


    });
