'use strict';

angular.module('frontendApp')
    .service('bundleService', function ($http, apiService) {
        return {
            
            get: function () {
                return apiService.get("rest/event/events");
            }

        };
    });