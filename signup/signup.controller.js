(function() {
  'use strict';

  angular
    .module('signup')
    .controller('SignupController', SignupController);

    function SignupController($uibModal, $log, $document, $rootScope) {
    var vm = this;
    vm.items = ['item1', 'item2', 'item3'];
    vm.tester = "found it";
    vm.animationsEnabled = true;

  };

}());
