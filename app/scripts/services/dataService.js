'use strict';

angular.module('frontendApp')
    .service('dataService', function ($http, apiService) {
        var Product = {

            name: '',

            price: ''

        };
        return {
           
            getData: function () {
                return Product;
            },

           
            get: function () {
                return $http({
                    method: 'get',
                    url: apiService.url + 'event/' 
                });
            },

            save: function (newEvent) {
                return $http({
                    method: 'post',
                    //url:  'http://localhost:8080/rest/event/create/',
                    //url: 'http://localhost:9000/rest/event/create/',
                    url: 'http://my-app-grupog.herokuapp.com/rest/event/create/',
                    data: newEvent
                });
            }

        };
    });

