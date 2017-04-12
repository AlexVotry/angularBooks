(function() {
  'use strict';

  angular
    .module('modal')
    .controller('ModalController', ModalController)
    

    function ModalController($uibModal, $rootScope) {
      var vm = this;
      vm.cred = ['super', 'item2', 'item3'];
      vm.tester = "modal controller variable";
      vm.animationsEnabled = true;
      var url;

      vm.open = function (route, size, parentSelector) {
        url = route;
        var parentElem = parentSelector ?
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: `${route}/${route}.modal.html`,
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
          size: size,
          appendTo: parentElem,
          resolve: {
            cred: function () {
              return vm.cred;
            },
            tester: function () {
              return vm.tester;
            },
            url: function () {
              return route;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          vm.selected = selectedItem;
        });
      };

      vm.toggleAnimation = function () {
        vm.animationsEnabled = !vm.animationsEnabled;
      };
  };

}());
