(function() {
  'use strict';

  angular
    .module('modal')
    .controller('ModalController', ModalController)


    function ModalController($uibModal, $rootScope) {
      var vm = this;
      vm.vapid = "stupid";
      vm.items = ['John', 'Fred', 'Toby'];
      vm.tester = "modal controller variable";
      vm.animationsEnabled = true;
      var url;

      vm.open = function (route, size) {
        url = route;

        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: `${route}/${route}.modal.html`,
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
          size: size,
          resolve: {
            items: function () {
              return vm.items;
            },
            tester: function () {
              return vm.tester;
            },
            url: function () {
              return route;
            }
          }
        });
      };

      vm.toggleAnimation = function () {
        vm.animationsEnabled = !vm.animationsEnabled;
      };
  };

}());
