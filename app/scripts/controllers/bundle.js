'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BundleCtrl', function ($scope, bundleService, $routeParams) {



        bundleService.get().then(function (response) {
            var jsonBundle = response.data;
            $scope.bundleee = jsonBundle[1];

            $scope.bundle = jsonBundle;


            //$scope.bundleStartTime
            // $scope.eventName = event.eventName;
        },
            function (error) {

                console.log(error);
            });

    });


