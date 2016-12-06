'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $rootScope, socialLoginService, dataService, userService, $window, $location, $log) {
    
    

    $scope.Logging = function () {

      var userNameVar = $scope.userr.userName;

      userService.get(userNameVar).then(function (response) {
 
        $window.location.href = '/#/user/' + userNameVar;

      },
        function (error) {
          $window.location.href = '/#/createUser';

        });

    };

    
    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
      dataService.userSave(userDetails);
      var userName = dataService.getUser().email;
      userService.get(userName).then(function (response) {
        console.log("get ok");
        $window.location.href = '/#/home';
      },
        function (error) {
          console.log("user not found")
          userService.saveDto(userName).then(function (response) {
            console.log("get createdDto ok");
            $window.location.href = '/#/editProfile';
          },
            function (error) {
              console.log("create userDto fail");
            });

          ;
         

        });
    });



    $scope.logout = function () {
      socialLoginService.logout();
    };

   



  });
