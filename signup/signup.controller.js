(function() {
  'use strict';

  angular
    .module('signup')
    .controller('SignupController', SignupController);

    function SignupController($uibModal, $log, $document, $rootScope, SignupService) {
    var vm = this;
    vm.test = "signup controller variable";
    var stored = SignupService.read();
    vm.credentials = {
      username: stored.username,
      url: stored.url
    }
    vm.animationsEnabled = true;

  };

}());
