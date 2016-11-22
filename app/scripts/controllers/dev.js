'use strict';

/**
 * Done - date formater  
 *     -  Improves -> moment.locale('en'); // 'en'
 * Done - pagination
 *      - Improves -> hybrid
 * Done - responsive
 * oauth
 * Asistire
 * circulo amistad  addFriend/user/friend 
 * login logout
 * crud user
 * fully translate


 */
angular.module('frontendApp')
  .controller('DevCtrl', function ($scope, devService, $http, dataService, NgMap) {

    $scope.fst = "testBind";
    $scope.display = "display";



    //this.address = "Toronto Canada";
    //this.address = "Roque Sáenz Peña Bernal";
    
    

    //$scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBdJr6OdzQABIXp9IZjnAimdfuqchQCF6o";

    //"AIzaSyBdJr6OdzQABIXp9IZjnAimdfuqchQCF6o"

    NgMap.getMap().then(function (map) {
      console.log(map.getCenter());
      map.address ="Roque Sáenz Peña Bernal";
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

    $scope.uuser = dataService.getUser();

    $scope.img = dataService.getUser().imageUrl;

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
        address: "",
        name: "",
        id: 2,
        price: { ammount: "" },
        endTime: "2016-11-04T15:33:19.432",
        attenders: { maxCapacity: "", recommendedMinGroup: "", recommendedMaxGroup: "" },
        details: "",
        profile: { id: 1, categories: [{ name: "" }] },
        day: 20161104,
        startTime: "2016-11-04T15:33:19.432"
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

        $scope.items = jsonBundle;


        //$scope.bundleStartTime
        // $scope.eventName = event.eventName;
      },
      function (error) {

        console.log(error);
      });




    var x = document.documentElement.lang;

    $scope.lang = x;





  });



  /**  session cookie   userId */