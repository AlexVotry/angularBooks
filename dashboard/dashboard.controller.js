(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

    function DashboardController($uibModal, $log, $document, $rootScope, SignupService) {
    var vm = this;
    vm.test = "dashboard controller variable..";
    var credentials = SignupService.read();
    vm.chosen = {
      username: credentials.username,
      url: credentials.url
    }

    vm.animationsEnabled = true;

  };

}());
