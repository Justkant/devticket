'use strict';

angular.module('workingRoom')
  .controller('CreateTicketCtrl', function ($mdDialog) {
    var vm = this;

    vm.ticket = {};

    vm.cancel = $mdDialog.cancel;
    vm.hide = $mdDialog.hide;
  });
