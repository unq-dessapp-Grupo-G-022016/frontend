'use strict';


angular.module('frontendApp')
    .controller('CreateUserCtrl', function ($scope, $rootScope, createUserService, $window) {




        $scope.event = "asdasd";

        /*  $scope.newUser =
              {
                  userName: "",
                  attendedEvents: [],
                  personalEvent: [],
                  profile: { categories: [] },
                  friends: { friends: [] },
                  lowCostTrip: { ammount: "" }
              };*/

        $scope.newUser = {
            "userName": "momo24",
            "attendedEvents": [],
            "personalEvent": [],
            "profile": { "categories": [] },
            "friends": { "friends": [] },
            "lowCostTrip": { "ammount": 50 }
        };



        $scope.save = function (user) {
            var juser = JSON.stringify(user);
            createUserService.save(juser).then(function (response) {
                // $scope.notif = ok;
                //$window.location.href = '/#/user/' + $scope.newUser.userName;
                //$window.location.href = '/#/home/' ;

            },
                function (error) {
                    // $scope.notif = ok;
                    console.log(error);
                });
        };



    });
