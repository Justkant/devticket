'use strict';

angular.module('workingRoom')
  .controller('FabCtrl', function ($mdDialog) {
    var vm = this;

    vm.openModal = openModal;

    function openModal(event) {
      $mdDialog.show({
        controller: 'CreateTicketCtrl as vm',
        templateUrl: 'partials/create-ticket-modal.html',
        targetEvent: event,
      }).then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    }
  });
