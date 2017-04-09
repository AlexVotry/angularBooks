(function() {
  'use strict';

  angular.module('login')
  .controller('LoginController', LoginController);

  function LoginController($rootScope) {
    let vm = this;
    vm.newWord = "log in controller variable..."

    // vm.credentials = {
    //   username: '',
    //   password: ''
    // };
    //
    // vm.login = login;
    // vm.success = false;

    // function login(credentials) {
    //   var request = {
    //     method: 'POST',
    //     url: config.url + config.endpoint,
    //     data: { credentials: credentials }
    //
    //   return $http(request).then(function(response) {
    //     var token = response.data.token;
    //     AuthToken.save(token);
    //
    //     return true;
    //   });
    // }
    //
    // function login() {
    //   vm.credentials = {
    //     username: username,
    //     password: password
    //   }
    // }

  }
}());
