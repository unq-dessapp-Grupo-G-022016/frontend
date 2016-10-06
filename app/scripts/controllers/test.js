'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')

  


.controller('mainCtrl', function ($scope, Calculator) { 
    $scope.values = {
        first: 0,
        second: 0
    };
    $scope.sign = '+';
    $scope.result = 0;
    
    $scope.doCalculations = function(sign, a, b){
        switch(sign){
            case '+': $scope.result = Calculator.add(a, b); break;
            case '-': $scope.result = Calculator.subtract(a, b); break;
            case '*': $scope.result = Calculator.multiply(a, b); break;
            case '/': $scope.result = Calculator.divide(a, b); break;
        }
    };

});

app.service('Calculator', function(){

    this.add = function(a, b){
        return a + b;
    };
    
    this.subtract = function(a, b){
        return a - b;
    };
    
    this.multiply = function(a, b){
        return a * b;
    };
    
    this.divide = function(a, b){
        return a / b;
    };

});