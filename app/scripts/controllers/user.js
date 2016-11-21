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


    $scope.userName = dataService.getUser().email;


/*
    var userNameWithoutMail = dataService.getUser().email.slice(0, dataService.getUser().email.indexOf("@"));
    $scope.userName = userNameWithoutMail;
*/

    //get,  completar usuario 



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



      // $scope.userName = response.data.userName;
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


