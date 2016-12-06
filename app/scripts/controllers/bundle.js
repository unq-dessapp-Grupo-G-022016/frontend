'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BundleCtrl', function ($scope, dataService, bundleService, $routeParams, apiService, $window, $location) {

        $scope.idd = "prev";

        var user = dataService.getUserEmail();

        $scope.Assist = function (id) {
            $scope.idd = id;
            apiService.eventAssist(id, user).then(function (response) {
                $window.location.href = '/#/bundle';

            },
                function (error) {
                    $window.location.href = '/#/home';
                    console.log(error);
                });
        };


        $scope.ViewInfo = function (id) {
            $window.location.href = '/#/event/' + id;
        }


        $scope.currentPage = 1;
        $scope.pageSize = 10;

        bundleService.get().then(function (response) {
            var jsonBundle = response.data;
            $scope.bundleee = "event0Name :=" + jsonBundle[0].name;
            $scope.bundle = jsonBundle;
        },
            function (error) {
                console.log("getBundleFail");
            });


    });


