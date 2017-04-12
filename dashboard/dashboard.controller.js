(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

    function DashboardController($uibModal, $log, $document, $rootScope, SignupService) {
    var vm = this;
    vm.test = "dashboard controller variable..";
    vm.credentials = {
      username: SignupService.read()
    }
    vm.animationsEnabled = true;

  };

}());
