'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')


  .controller('MainCtrl', function ($scope, $http, apiService) {
            $http.get("http://www.w3schools.com/angular/customers.php")
                .then(function(response){
                $scope.myWelcome = response.data;
                $scope.myData = response.data.records;
                $scope.text = "texxxt";


            });
                      $http.get("http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D")
                      .then(function(response){
                          $scope.moreJson = apiService.url +  "(1)" + response.data.object_or_array + "    seconds   " + response.data.parse_time_nanoseconds ;
                      });




                   /*   then(function(response){
                $scope.content = response.data;
                }, function(response){
                $scope.content = "error";
    }
        );*/
    
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
