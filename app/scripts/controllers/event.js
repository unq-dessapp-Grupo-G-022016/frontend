'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EventCtrl', function ($scope, eventService, $routeParams, apiService) {


    $scope.test = "bind";

    eventService.get($routeParams.id).then(function (response) {
      event = response.data;
      $scope.eventName = event.eventName;
    },
      function (error) {
        console.log(error);
      });






  });


