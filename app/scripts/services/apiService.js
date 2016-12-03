
'use strict';


angular.module('frontendApp')
    .service('apiService', function ($http) {
        return {
            url: function () {
                return "http://my-app-grupog.herokuapp.com/";
                //                return "http://localhost:8080/";
            },

            get: function (route) {
                return $http({
                    method: 'get',
                    url: this.url() + route
                });
            },

            eventAssist: function (id, user) {
                return $http({
                    method: 'put',
                    url: this.url() + "rest/event/attend/" + id + "/" + user
                });
            },

            addFriend: function (myUserName, friendUsername) {
                return $http({
                    method: 'put',
                    url: this.url() + "rest/user/addFriend/" + myUserName + "/" + friendUsername
                });
            },


            //get!
            addUserCategory: function (myUserName, category) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/user/addCategory/" + myUserName + "/" + category
                });
            },

            setPrice: function (myUserName, price) {
                return $http({
                    method: 'put',
                    url: this.url() + "rest/user/updatepricedto/" + myUserName + "/" + price
                });
            },


            getEventDto: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/event/readdto/" + id
                });
            },


            getEvent: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/event/read/" + id
                });
            },


            //tripManager

            cheap: function (myUserName, date) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/event/cheap/" + date + "/" + myUserName
                });
            },

            friendly: function (myUserName, date) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/event/friendly/" + date + "/" + myUserName
                });
            },

            surprice: function (myUserName, date) {
                return $http({
                    method: 'get',
                    url: this.url() + "rest/event/surprise/" + date + "/" + myUserName
                });
            },


            personalEvent: function (myUserName, id) {
                return $http({
                    method: 'put',
                    url: this.url() + "rest/user/personalEvent/" + myUserName + "/" + id
                });
            },




        };
    });