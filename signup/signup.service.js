(function() {
  'use strict';

  angular
  .module('signup')
  .factory('SignupService', SignupService);

  function SignupService($window) {
      var storage = $window.localStorage;
      var myKey = "user";


      function save(credentials) {
          storage.setItem(myKey, credentials);
          console.log(credentials);
      };

      function read() {
        return storage.getItem(myKey);
      }

      function erase() {
        storage.removeItem(myKey);
      }
      return {
        save: save,
        read: read,
        erase: erase
      };

        // return $http(request)
        //   .then(function(response) {
        //     var token = response.data.token;
        //     AuthToken.save(token);
        //
        //     return true;
        //   }, function(response) {
        //     return $q.reject(response.data.error);
        //   });
      }
}());
