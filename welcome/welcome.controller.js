(function() {
  'use strict';

  angular
    .module('welcome')
    .controller('WelcomeController', WelcomeController);

function WelcomeController($rootScope, SignupService) {
  let vm = this;
  vm.test = "what?";
  // SignupService.erase();


}




}());
