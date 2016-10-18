'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UserCtrl', function ($scope, userService, $routeParams, apiService) {


    /*
    http 
    
      $http.get("http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D")
                      .then(function(response){
                          $scope.userName =   "(1)" + response.data.object_or_array + "    seconds   " + response.data.parse_time_nanoseconds ;
                      });


      $scope.categories = apiService.url();
$scope.lowCostTrip = apiService.get();
      */



    userService.get($routeParams.id).then(function (response) {
      //var user = response.data;

      //$scope.userName = user;

      $scope.userName = response.data.userName;
      $scope.categories = response.data.profile.categories;
      $scope.lowCostTrip = response.data.lowCostTrip.ammount;
      $scope.friends = response.data.friends;
      $scope.personalEvents = response.data.personalEvent;
      $scope.attendedEvents = response.data.attendedEvents;


       //$scope.userName = response.data;

      //$scope.userName = user.username;
      //$scope.address = user.address;
    },
      function (error) {

        //  user.userName = "";

        console.log(error);
      });

  });


