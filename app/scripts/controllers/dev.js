'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DevCtrl', function ($scope, devService) {

    $scope.fst = "testBind";
    $scope.display = "display";

    /*
        $scope.newVar = {
          brand: '',
          capacity: 2
        };
    
    */

    /*
        $scope.newVar =
          {
            "startTime": "2011-12-03T10:15:30",
            "category": { "name": "warm places" },
            "endTime": "2011-12-03T10:15:30",
            "price": { "ammount": 20 },
            "attenders": [], "details": "Devils house",
            "address": "666",
            "name": "goingToHell"
          };
    */


    $scope.newVar =
      {
        startTime: "2011-12-03T10:15:30",
        category: { name: "warm places" },
        endTime: "2011-12-03T10:15:30",
        price: { ammount: 20 },
        attenders: [],
        details: "Devils house",
        address: "666",
        name: "goingToHell"
      };




    $scope.show = function (varr) {

      $scope.display = "show ok";
      $scope.fst = varr;
    };

    $scope.cancel = function () {

      $scope.display = "display";
      $scope.fst = "  testBind";
    };



    $scope.save = function (event) {
      devService.save(event).then(function (response) {
        $scope.fst = "saveOk";
        $scope.display = "saveOk";

      },
        function (error) {
          $scope.fst = "saveFail";
          $scope.display = "saveFail";
          console.log(error);
        });
    };




  });



  /**  session cookie   userId */