'use strict';

angular
  .module('contactManager', [

      'ngRoute',
      'Server'

    ])
    .config([

      '$routeProvider',

      function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: '/views/allContacts.html',
              controller: 'AllContactsCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
      }
    ])
    .run([
      function () {}
    ]);
