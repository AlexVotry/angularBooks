(function() {
  'use strict';

  angular
    .module('signup')
    .controller('SignupController', SignupController);

    function SignupController($uibModal, $log, $document, $rootScope, SignupService) {
    var vm = this;
    vm.test = "this is a test";
    vm.credentials = {
      username: SignupService.read()
    }
    vm.animationsEnabled = true;

  };

}());
