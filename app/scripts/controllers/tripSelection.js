'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TripSelectionCtrl
 * @description
 * # TripSelectionCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp').controller('TripSelectionCtrl', function ($scope) {




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
