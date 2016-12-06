'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('EditProfileCtrl', function ($scope, apiService, dataService, Flash) {

        $scope.asd = "asddddd";


        $scope.asd = dataService.getUserEmail();

        var userEmail = dataService.getUserEmail();


        $scope.category = "";

        $scope.friend = "";

        $scope.price = "";



        $scope.addCategory = function () {
            apiService.addUserCategory(userEmail, $scope.category)
                .then(function (response) {

                    var message = '<strong>Well done!</strong> Add category success !.';
                    var id = Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("add category ok");
                },
                function (error) {

                    var message = '<strong>Ups!</strong> Add category fail, Try again.';
                    var id = Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("add category fail");
                });
        };



        $scope.setPrice = function () {
            apiService.setPrice(userEmail, $scope.price)
                .then(function (response) {

                    var message = '<strong>Well done!</strong> Set price success.';
                    var id = Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("set price ok");
                },
                function (error) {

                    var message = '<strong>Ups!</strong> Set price fail. Try again';
                    var id = Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("set price fail");
                });
        };





        $scope.addFriend = function () {
            apiService.addFriend(userEmail, $scope.friend)
                .then(function (response) {

                    var message = '<strong>Well done!</strong> add friend ok.';
                    var id = Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("add friend ok");
                },
                function (error) {

                    var message = '<strong>ups!</strong> add friend fail.';
                    var id = Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


                    console.log("add friend fail");
                });
        };




    });
