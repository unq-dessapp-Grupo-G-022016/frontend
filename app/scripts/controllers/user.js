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




    /*
        $scope.AddFriend = function () {
    
    
    
          var myUserName = $rootScope.user.userName;
          var friendUserName = $scope.friend.userName;
          apiService.addFriend(myUserName, friendUserName).then(function (response) {
    
    
            $window.location.href = '/#/user/' + myUserName;
    
          },
            function (error) {
              $window.location.href = '/#/user/' + myUserName;
    
            });
    
        };
    
    */
    $scope.userName = dataService.getUser().email;
    $scope.userImg = dataService.getUser().imageUrl;
    $scope.userRealName = dataService.getUser().name;


    //console.log(dataService.getUser());


    /*
        var userNameWithoutMail = dataService.getUser().email.slice(0, dataService.getUser().email.indexOf("@"));
        $scope.userName = userNameWithoutMail;
    */




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


