// (function() {
//   'use strict';
//
//
//     angular
//       .module('modal')
//       .controller('ModalController', ModalController);
//
//
//       function ModalController($uibModal, $log, $document, $rootScope) {
//         var vm = this;
//         vm.items = ['item1', 'item2', 'item3'];
//         vm.tester = "modal controller variable";
//         vm.animationsEnabled = true;
//
//         vm.open = function (size, parentSelector) {
//           // console.log("items: ", items[0]);
//           var parentElem = parentSelector ?
//             angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
//             console.log('parent: ', parentSelector);
//           var modalInstance = $uibModal.open({
//             animation: vm.animationsEnabled,
//             ariaLabelledBy: 'modal-title',
//             ariaDescribedBy: 'modal-body',
//             templateUrl: 'signup/signup.modal.html',
//             controller: 'ModalInstanceCtrl',
//             controllerAs: 'modal',
//             size: size,
//             appendTo: parentElem,
//             resolve: {
//               items: function () {
//                 return vm.items;
//               }
//             }
//           });
//
//           modalInstance.result.then(function (selectedItem) {
//             vm.selected = selectedItem;
//           }, function () {
//             $log.info('Modal dismissed at: ' + new Date());
//           });
//         };
// 
//         vm.openComponentModal = function () {
//           var modalInstance = $uibModal.open({
//             animation: vm.animationsEnabled,
//             component: 'modalComponent',
//             resolve: {
//               items: function () {
//                 return vm.items;
//               }
//             }
//           });
//
//           modalInstance.result.then(function (selectedItem) {
//             vm.selected = selectedItem;
//           }, function () {
//             $log.info('modal-component dismissed at: ' + new Date());
//           });
//         };
//
//         vm.toggleAnimation = function () {
//           vm.animationsEnabled = !vm.animationsEnabled;
//         };
//     };
// }());
