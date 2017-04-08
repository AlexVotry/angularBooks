(function() {
  'use strict';

  angular.module('login')
  .controller('LoginController', LoginController);

  function LoginController($rootScope) {
    let vm = this;
    vm.newWord = "Got it!"

  }
}());
