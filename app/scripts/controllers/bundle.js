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


        /*
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
        */

        
$scope.currentPage = 1;
  $scope.pageSize = 10;

        bundleService.get().then(function (response) {
            var jsonBundle = response.data;
            //$scope.bundleee = jsonBundle[0].id;
            $scope.bundleee = "event0Name :="+ jsonBundle[0].name;
            
            $scope.bundle = jsonBundle;


            //$scope.bundleStartTime
            // $scope.eventName = event.eventName;
        },
            function (error) {

                console.log(error);
            });


    });


