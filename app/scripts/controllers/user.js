'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UserCtrl', function ($scope, userService, $routeParams, apiService, $rootScope, $window, $location, dataService) {



    $scope.userName = dataService.getUser().email;
    $scope.userImg = dataService.getUser().imageUrl;
    $scope.userRealName = dataService.getUser().name;


    userService.getDto($routeParams.id).then(function (response) {
      console.log(response);
      $scope.userName = response.data.userName;
      $scope.categories = response.data.profileCategories;
      $scope.lowCostTrip = response.data.lowCostTripAmount;
      $scope.friends = response.data.friendsFriends;
      $scope.personalEvents = response.data.personalEvents;
      $scope.attendedEvents = response.data.attendedEvents;

      console.log("get userDto OK");
    },
      function (error) {
        console.log("get userDto fail");
      });


  });


