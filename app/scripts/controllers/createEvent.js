'use strict';


angular.module('frontendApp')
    .controller('CreateEventCtrl', function ($scope, createEventService, $window) {


        $scope.time = new Date();
        $scope.myDate = new Date();

        $scope.event = "asdasd";

        $scope.newEvent =
            {
                address: "",
                name: "",
                //id: 2,
                price: { ammount: 0 },
                endTime: "2016-11-04T15:33:19.432",
                attenders: { maxCapacity: 0, recommendedMinGroup: 0, recommendedMaxGroup: 0 },
                details: "",
                profile: { //id: 1, 
                    categories: [{ name: "" }] },
                //day: 20161104,
                startTime: "2016-11-04T15:33:19.432"
            };



        $scope.show = function (ev) {

            var time = JSON.stringify($scope.time);
            var date = JSON.stringify($scope.myDate);
            // $scope.event = date.slice(1, 11) + "T" + time.slice(10, 24);
            $scope.preDateF = $scope.newEvent.startTime;

            $scope.newEvent.startTime = date.slice(1, 11) + "T" + time.slice(12, 24);
            $scope.postDatef = $scope.newEvent.endTime;
            //  $scope.event = ev;
        };


        $scope.save = function (event) {


            var time = JSON.stringify($scope.time);
            var date = JSON.stringify($scope.myDate);

            $scope.newEvent.startTime = date.slice(1, 11) + "T" + time.slice(12, 24);

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
