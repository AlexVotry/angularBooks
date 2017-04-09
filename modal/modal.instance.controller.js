(function() {
  'use strict';

  angular
  .module('modal')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  function ModalInstanceCtrl ($rootScope, $uibModalInstance, items, tester, url, SignupService, $location) {
    var vm = this;
    vm.title = url;
    vm.items = items;
    vm.tester = tester;
    vm.selected = {
      username: vm.items[0],
      url: vm.title
    };

    vm.ok = function () {
      console.log("modal clicked: ", vm.credentials, "route: ", vm.title, 'signup: ', vm.selected );
      $uibModalInstance.close();
      if(vm.credentials) {
        SignupService.erase();
        vm.credentials.url = url;
        SignupService.save(vm.credentials);
      }
      else {
        SignupService.erase();
        SignupService.save(vm.selected);
      }
      $location.path('/dashboard');
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  };

}());
