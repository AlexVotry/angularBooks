(function() {
  'use strict';

  // angular
  //   .module('signup')
  //   .controller('SignupController', SignupController);
  //
  //   function SignupController($rootScope) {
  //     let vm = this;
  //     vm.newWord = "this is crazy!";
  //
  //   }

  angular
    .module('signup')
    .controller('SignupController', SignupController);

  function SignupController($uibModal, $log, $document, $rootScope) {
  var vm = this;
  vm.items = ['item1', 'item2', 'item3'];
  vm.tester = "found it";
  vm.animationsEnabled = true;

  vm.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      console.log('parent: ', parentSelector);
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'signup/signup.modal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'signup',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return vm.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  vm.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return vm.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };
};

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular
  .module('signup')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ModalInstanceCtrl ($rootScope, $uibModalInstance, items) {

  var vm = this;
  vm.items = items;
  vm.selected = {
    item: vm.items[0]
  };

  vm.ok = function () {
    console.log("clicked", vm.selected.item);
    $uibModalInstance.close(vm.selected.item);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

// Please note that the close and dismiss bindings are from $uibModalInstance.

// angular
//   .module('signup')
//   .component('modalComponent', {
//   templateUrl: 'signup/signup.modal.html',
//   bindings: {
//     resolve: '<',
//     close: '&',
//     dismiss: '&'
//   },
//   controller: function () {
//     var vm = this;
//
//     vm.$onInit = function () {
//       vm.items = vm.resolve.items;
//       vm.selected = {
//         item: vm.items[0]
//       };
//     };
//
//     vm.ok = function () {
//       vm.close({$value: vm.selected.item});
//     };
//
//     vm.cancel = function () {
//       vm.dismiss({$value: 'cancel'});
//     };
//   }
// });
}());
