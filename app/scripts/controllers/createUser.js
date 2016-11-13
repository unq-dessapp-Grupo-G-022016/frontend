'use strict';


angular.module('frontendApp')
    .controller('CreateUserCtrl', function ($scope, createUserService, $window) {




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
            createUserService.save(user).then(function (response) {
                // $scope.notif = ok;
                //$window.location.href = '/#/user/' + $scope.newUser.userName;
                $window.location.href = '/#/home/' ;

            },
                function (error) {
                    // $scope.notif = ok;
                    //console.log(error);
                });
        };



    });
