'use strict';


angular.module('frontendApp')
    .controller('CreateEventCtrl', function ($scope, createEventService, $window) {




        $scope.event = "asdasd";

        $scope.newEvent =
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

        $scope.show = function (ev) {
            $scope.event = ev;
        };


        $scope.save = function (event) {
            createEventService.save(event).then(function (response) {
                // $scope.notif = ok;
                //$window.location.href = '/#/user/adasdd' ;

            },
                function (error) {
                    // $scope.notif = ok;
                    console.log(error);
                });
        };



    });
