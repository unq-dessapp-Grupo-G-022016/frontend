'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TripSelectionCtrl
 * @description
 * # TripSelectionCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp').controller('TripSelectionCtrl', function ($scope, dataService, apiService, Flash, $window, $location) {


  var dateee = "20161203";
  //picker

  var userEmail = dataService.getUserEmail();

  $scope.cheap = function () {
    var personalDate = JSON.stringify($scope.myDate);
    $scope.dtoDate = personalDate.slice(1, 5) + personalDate.slice(6, 8) + personalDate.slice(9, 11);

    apiService.cheap(userEmail, $scope.dtoDate)
      .then(function (response) {

        dataService.saveBundle(response);
        $window.location.href = '/#/bundleTrip';

        var message = '<strong>Well done!</strong> Cheap Trip found.';
        Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);

        console.log("cheapTrip ok");
      },
      function (error) {

        var message = '<strong>ups!</strong> Cheap Trip fail, try later.';
        Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);

        console.log("cheapTrip fail");
      });
  };



  $scope.friends = function () {
    var personalDate = JSON.stringify($scope.myDate);
    $scope.dtoDate = personalDate.slice(1, 5) + personalDate.slice(6, 8) + personalDate.slice(9, 11);

    apiService.friendly(userEmail, $scope.dtoDate)
      .then(function (response) {

        dataService.saveBundle(response);
        $window.location.href = '/#/bundleTrip';

        var message = '<strong>Well done!</strong> Friendly Trip fround.';
        Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


        console.log("friendlyTrip ok");
      },
      function (error) {

        var message = '<strong>ups!</strong> Friendly trip fail, try later.';
        Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


        console.log("friendlyTrip fail");
      });
  };


  $scope.surprice = function () {
    var personalDate = JSON.stringify($scope.myDate);
    $scope.dtoDate = personalDate.slice(1, 5) + personalDate.slice(6, 8) + personalDate.slice(9, 11);

    apiService.surprice(userEmail, $scope.dtoDate)
      .then(function (response) {

        dataService.saveBundle(response);
        $window.location.href = '/#/bundleTrip';

        var message = '<strong>Well done!</strong> Surprice Trip found.';
        Flash.create('success', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


        console.log("surpriceTrip ok");
      },
      function (error) {

        var message = '<strong>ups!</strong> Surprice trip fail, try later.';
        Flash.create('danger', message, 4000, { class: 'custom-class', id: 'custom-id' }, true);


        console.log("surpriceTrip fail");
      });
  };



  /*
  
  
  
    $scope.saturdayNightFever = function () {
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
  
  
  
  
  
  
  
    $scope.couple = function () {
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
  
  
  
  
  
  
  
  
  
  */








  $scope.myDate = new Date();

  $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());

  $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 2,
    $scope.myDate.getDate());

  $scope.onlyWeekendsPredicate = function (date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };



  $scope.date = new Date();
  $scope.time = new Date();
  $scope.dateTime = new Date();
  $scope.minDate = moment().subtract(1, 'month');
  $scope.maxDate = moment().add(1, 'month');






});
