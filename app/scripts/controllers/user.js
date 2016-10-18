'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('UserCtrl', function ($scope, userService, $routeParams) {


    /*
    http 
    
      $http.get("http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D")
                      .then(function(response){
                          $scope.userName =   "(1)" + response.data.object_or_array + "    seconds   " + response.data.parse_time_nanoseconds ;
                      });
      */


    userService.get($routeParams.id).then(function (response) {
      var user = response.data;

      $scope.userName = user;
       //$scope.userName = response.data;

      //$scope.userName = user.username;
      //$scope.address = user.address;
    },
      function (error) {

        //  user.userName = "";

        console.log(error);
      });

  });


