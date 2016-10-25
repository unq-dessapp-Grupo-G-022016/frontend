'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DeavCtrl', function ($scope) {

    $scope.fst = "testBind";
    $scope.display = "display";

    $scope.newVar = {
      brand: '',
      capacity: 2
    };

    $scope.show = function (varr) {

      $scope.display = "show ok";
      $scope.fst = varr;
    }

    $scope.cancel = function () {

      $scope.display = "display";
      $scope.fst = "  testBind";
    }



    $scope.save = function (event) {
      EventService.save(event).then(function (response) {
        $window.location.assign('/#/event/' + response.data.id);
      },
        function (error) {
          console.log(error);
        });
    };

    /*
          location.assign("http://www.asd.com");
    */

    $scope.save = function (varr) {
      VehicleService.save(varr).then(function (response) {


        $scope.display = "ok";
        $scope.fst = vehicle;
      },
        function (error) {
          $scope.display = "not ok";
          console.log(error);
        });
    };
  });