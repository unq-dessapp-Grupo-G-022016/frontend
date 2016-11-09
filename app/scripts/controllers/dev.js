'use strict';

/**
 * date formater
 * pagination
 * responsive
 * oauth
 * Asistire
 * circulo amistad  addFriend/user/friend 
 * login logout
 * crud user


 */
angular.module('frontendApp')
  .controller('DevCtrl', function ($scope, devService, $http) {

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



    /*
    
        $scope.newUser =
          {
            userName: "momo24",
            attendedEvents: [],
            personalEvent: [],
            profile: { categories: [] },
            friends: { friends: [] },
            lowCostTrip: { ammount: 50 }
          };
    
    
    
        $scope.newUserWithEvent =
          {
            userName: "momo24",
            attendedEvents: [{
              id: 1, startTime: "2011-12-03T10:15:30",
              category: { name: "warm places" }, endTime: "2011-12-03T10:15:30",
              price: { ammount: 20 },
              attenders: [],
              details: "Devils house",
              address: "666",
              name: "goingToHell"
            }],
            personalEvent: [],
            profile: { categories: [] },
            friends: { friends: [] },
            lowCostTrip: { ammount: 50000 }
          };
    */


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



    $http({
      method: 'get',
      //url: "http://my-app-grupog.herokuapp.com/rest/event/events"
       url: "https://jsonplaceholder.typicode.com/comments"
      // url: apiService.url + 'bundle/' + 
    })
      .then(function (response) {
        var jsonBundle = response.data;
        //$scope.bundleee = jsonBundle[0].id;
        $scope.bundleee = "event0Name :=" + jsonBundle[0].name;

        //$scope.bundle = jsonBundle;

        $scope.item = jsonBundle;


        //$scope.bundleStartTime
        // $scope.eventName = event.eventName;
      },
      function (error) {

        console.log(error);
      });



  });



  /**  session cookie   userId */