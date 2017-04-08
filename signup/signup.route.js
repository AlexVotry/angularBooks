(function() {
  'use strict';

  angular
    .module('signup')
    .config(config);

    function config($stateProvider) {
      $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'signup/index.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      });

    }
}());
