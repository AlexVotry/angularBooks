(function() {
  'use strict';

  angular
  .module('modal')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  function ModalInstanceCtrl ($rootScope, $uibModalInstance, cred, tester, url, SignupService, $location) {

    var vm = this;
    vm.title = url;
    vm.items = cred;
    vm.tester = tester;
    vm.selected = {
      item: vm.items[0]
    };

    vm.ok = function () {
      console.log("modal clicked", vm.selected.item, "route: ", url);
      $uibModalInstance.close(vm.selected.item);
      SignupService.save(vm.selected.item);
      $location.path('/dashboard');
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  };

}());
