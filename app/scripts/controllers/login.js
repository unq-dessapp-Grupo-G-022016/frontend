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
    $scope.aaa = "aaaasdasdaa";

    $scope.bbb = $rootScope.currentUser;

    $scope.qqq = "asda";

    //    var userr;

    //$scope.user = "lksñlka";

    //$rootScope.user.userName = "asdas";

    $scope.Logging = function () {

      var userNameVar = $scope.userr.userName;

      //$scope.www = userName;

      userService.get(userNameVar).then(function (response) {

        //$rootScope.user.userName = userNameVar;


        $rootScope.user.userName = "momo1";


        $window.location.href = '/#/user/' + userNameVar;

      },
        function (error) {
          $window.location.href = '/#/createUser';

        });

    };


    /* //WORKING
        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
          $scope.qqq = userDetails;
          $rootScope.usuario = userDetails;
          dataService.userSave(userDetails);
          console.log(userDetails);
          console.log(event);
          console.log("biffff");
          console.log(dataService.getUser());
          $window.location.href = '/#/dev';
    
        })
    */
    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
      dataService.userSave(userDetails);
      var userName = dataService.getUser().email;
      userService.get(userName).then(function (response) {
        console.log("get ok");
        $window.location.href = '/#/';
      },
        function (error) {
          console.log("user not found")
          userService.saveDto(userName).then(function (response) {
            console.log("get createdDto ok");
            $window.location.href = '/#/';
          },
            function (error) {
              console.log("create userDto fail");
            });

          ;
          // userService.save(userName);
          //userService       @Path("/createdto/{userName}")

        });
    });







    //$scope.bbb = $rootScope.googleUser.email;
    //console.log($rootScope.googleUser.email);


    //$scope.bbb =$rootScope.profile;


    //$scope.bbb =$rootScope.idToken;


    // $scope.bbb = $rootScope.userDetails;


    $scope.logout = function () {
      socialLoginService.logout();
    };

    //    socialLoginService.logout() ;

    /*
        $scope.signin = function () {
          auth.signin({
            authParams: {
              scope: 'openid name email' // Specify the scopes you want to retrieve
            }
          }, function (profile, idToken, accessToken, state, refreshToken) {
            $location.path('/home')
          }, function (err) {
            console.log("Error :(", err);
          });
        };
    
    */



    /*
        auth.profilePromise.then(function (profile) {
          $scope.profile = profile;
        });
        // Or using the object
        $scope.profile = auth.profile;
    */

    /*

     function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };


*/



  });
