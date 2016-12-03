'use strict';


angular.module('frontendApp')
    .controller('CreateEventCtrl', function ($scope, createEventService, $window, apiService, dataService) {


        $scope.time = new Date();
        $scope.myDate = new Date();

        $scope.event = "asdasd";

        $scope.cat = "";



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
                    categories: [{ name: "" }]
                },
                //day: 20161104,
                startTime: "2016-11-04T15:33:19.432",
                strictSchedule: true
            };



        $scope.show = function (ev) {

            $scope.newEvent.profile.categories[0].name = $scope.cat;

            //$scope.newEvent.profile.categories.push($scope.cat);
            $scope.evvv = $scope.newEvent;


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
            $scope.newEvent.endTime = date.slice(1, 11) + "T" + time.slice(12, 24);

            $scope.newEvent.profile.categories[0].name = $scope.cat;

            createEventService.save(event).then(function (response) {

                console.log(response);



                apiService.personalEvent(dataService.getUserEmail(), response.data)
                    .then(function (response) {

                        console.log("personalEvent OK");

                    },
                    function (error) {
                        // $scope.notif = ok;
                        console.log("personalEvent Fail");
                    });



            },
                function (error) {
                    // $scope.notif = ok;
                    console.log("createEvent fail");
                });
        };



    });
