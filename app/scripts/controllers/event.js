'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EventCtrl', function ($scope, eventService, $routeParams, apiService, NgMap) {


    $scope.test = "bind";

    var addr;


    $scope.test = $routeParams.id;

    apiService.getEventDto($routeParams.id).then(function (response) {
      $scope.edto = response.data;
      //$scope.eventName = event.eventName;
      console.log("get eventdto ok");
      console.log(response);
    },
      function (error) {
        console.log("get Eventdto fail");
      });

    apiService.getEvent($routeParams.id).then(function (response) {
      $scope.e = response.data;
      //$scope.eventName = event.eventName;
      addr = response.data.address;
      console.log("get event ok");
      console.log(response);
    },
      function (error) {
        console.log("get Event fail");
      });


    NgMap.getMap().then(function (map) {
      console.log(map.getCenter());
      map.address = addr;
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });


    /*
        eventService.get($routeParams.id).then(function (response) {
          event = response.data;
          $scope.eventName = event.eventName;
        },
          function (error) {
            console.log(error);
          });
    
    */




  });


