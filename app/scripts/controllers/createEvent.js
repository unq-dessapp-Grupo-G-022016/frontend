'use strict';


angular.module('frontendApp')
    .controller('CreateEventCtrl', function($scope, createEventService, $window, apiService, Flash, dataService) {


        $scope.time = new Date();
        $scope.myDate = new Date();

        $scope.cat = "";

        $scope.newEvent =
            {
                address: "",
                name: "",
                price: { ammount: 0 },
                endTime: "2016-11-04T15:33:19.432",
                attenders: { maxCapacity: 0, recommendedMinGroup: 0, recommendedMaxGroup: 0 },
                details: "",
                profile: {
                    categories: [{ name: "" }]
                },
                startTime: "2016-11-04T15:33:19.432",
                strictSchedule: true
            };

        $scope.save = function(event) {

            var time = JSON.stringify($scope.time);
            var date = JSON.stringify($scope.myDate);

            $scope.newEvent.startTime = date.slice(1, 11) + "T" + time.slice(12, 24);
            $scope.newEvent.endTime = date.slice(1, 11) + "T" + time.slice(12, 24);

            $scope.newEvent.profile.categories[0].name = $scope.cat;

            createEventService.save(event).then(function(response) {
                var message = '<strong>Well done!</strong> Event created successfully.';
                Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);

                console.log("createEvent Ok");
                apiService.personalEvent(dataService.getUserEmail(), response.data)
                    .then(function(response) {
                        console.log("personalEvent OK");
                    },
                    function(error) {
                        // $scope.notif = ok;
                        console.log("personalEvent Fail");
                    });
            },
                function(error) {
                    // $scope.notif = ok;
                    var message = '<strong>Ups!</strong> Try again.';
                    Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);

                    console.log("createEvent fail");
                });
        };



    });
