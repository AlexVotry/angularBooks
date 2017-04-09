(function() {
  'use strict';

  angular
  .module('signup')
  .factory('SignupService', SignupService);

  function SignupService($window) {
    var storage = $window.localStorage;
    var myKey = "userToken";


    function save(credentials) {
      storage.setItem(myKey, JSON.stringify(credentials));
    };

    function read() {
      var cred = storage.getItem(myKey);
      return JSON.parse(cred);
    }

    function erase() {
      storage.removeItem(myKey);
    }
    return {
      save: save,
      read: read,
      erase: erase
    };
  }
}());
