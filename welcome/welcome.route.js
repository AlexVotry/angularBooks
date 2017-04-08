(function() {
  'use strict';

  angular
    .module('welcome')
    .config(config);

    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/welcome');
      $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'welcome/index.html',
        controller: 'WelcomeController',
        controllerAs: 'welcome'
      });
    }

}());
