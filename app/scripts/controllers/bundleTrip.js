'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BundleTripCtrl', function($scope, dataService, apiService, $window, $location, Flash) {

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.Assist = function(id) {
            $scope.idd = id;
            var user = dataService.getUserEmail();
            var firstEvent = dataService.getBundle().data[id][0].id;
            var secondEvent = dataService.getBundle().data[id][1].id;

            apiService.eventAssist(firstEvent, user).then(function(response) {
                console.log("fst event ok");
                var message = '<strong>Well done!</strong> First Event Assist Ok.';
                Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);
            },
                function(error) {
                    var message = '<strong>Ups!</strong> First Event Assist Fail. Try again';
                    Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);
                    console.log("fst event fail");
                });

            apiService.eventAssist(secondEvent, user).then(function(response) {
                console.log("snd event ok");
                var message = '<strong>Well done!</strong> Second Event Assist Ok.';
                Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);
            },
                function(error) {
                    var message = '<strong>Ups!</strong> Second Event Assist Fail. Try again';
                    Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);
                    console.log("snd event fail");
                });
        };


        $scope.ViewInfo = function(id) {
            $window.location.href = '/#/event/' + id;
        }


        $scope.bundle = dataService.getBundle().data;


    });
