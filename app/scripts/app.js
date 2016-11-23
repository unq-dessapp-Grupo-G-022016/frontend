'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'ngMaterial',
    'ngMessages',
    'ngMaterialDatePicker',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'ngMap',
    'angularUtils.directives.dirPagination',
    'socialLogin',
    'ngFlash',
    'auth0'
  ])
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/)
  .constant('LOCALES', {
    'locales': {
      //'ru_RU': 'Русский',
      'es_ES': 'Español',
      'en_US': 'English'
    },
    'preferredLocale': 'en_US'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tripSelection', {
        templateUrl: 'views/tripSelection.html',
        controller: 'TripSelectionCtrl',
        controllerAs: 'tripSelection'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login2', {
        templateUrl: 'views/login2.html',
        //controller: 'LoginCtrl',
        //controllerAs: 'login'
      })
      .when('/bundle', {
        templateUrl: 'views/bundle.html',
        controller: 'BundleCtrl',
        controllerAs: 'bundle'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      }).
      when('/deadLink', {
        templateUrl: 'views/deadLink.html',
        controller: 'DeadLinkCtrl',
        controllerAs: 'deadLink'
      })
      .
      when('/createEvent', {
        templateUrl: 'views/createEvent.html',
        controller: 'CreateEventCtrl',
        controllerAs: 'createEvent'
      })

      .
      when('/createUser', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl',
        controllerAs: 'createUser'
      })
      .
      when('/dev', {
        templateUrl: 'views/dev.html',
        controller: 'DevCtrl',
        controllerAs: 'dev'
      })
      .otherwise({
        redirectTo: '/deadLink'
      });
  })// Angular debug info
  .config(function ($compileProvider, DEBUG_MODE) {
    if (!DEBUG_MODE) {
      $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
    }
  })//md datePicker config 
  .config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {

      var format = 'YYYY-MM-DD';

      if (document.documentElement.lang === 'es_ES') {
        format = 'DD-MM-YYYY';
      }
      if (document.documentElement.lang === 'en_US') {
        format = 'MM-DD-YYYY';
      }
      return moment(date).format(format);
    };
  })





  /*
    .config(function (authProvider) {
  
      // routing configuration and other stuff
      // ...
  
      authProvider.init({
        domain: 'leog91.auth0.com',
        clientID: 'Mo2QtJnd5jzZ1NVldzRiUOlwSGmkdEM4',
        loginUrl: '/login'
      });
    })
    .run(function (auth) {
      auth.hookEvents();
    })
  */





  /*
    //angular-google-plus auth 
    .config(['GooglePlusProvider', function (GooglePlusProvider) {
      GooglePlusProvider.init({
        clientId: '938236716494-52clc04blo96trmo3l3lktrv6qi82eiv.apps.googleusercontent.com',
        apiKey: 'AIzaSyCcC89qple1Ln_O5LC82_pTVR3C9mFXihs'
      });
    }])
  
  */





  .config(function (socialProvider) {
    socialProvider.setGoogleKey("938236716494-52clc04blo96trmo3l3lktrv6qi82eiv.apps.googleusercontent.com");
    socialProvider.setFbKey({ appId: "376146619443410", apiVersion: "v2.8" });
  })

  /*
    .run(function ($rootScope) {
      $rootScope.$on('event:social-sign-in-success', function (event, user) {
  
        $rootScope.currentUser = user;
      });
  
  
    })
  
  */






  // Angular Translate
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
    }

    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
  })
  // Angular Dynamic Locale
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });