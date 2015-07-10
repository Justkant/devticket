'use strict';

angular.module('workingRoom')
  .controller('ViewTicketCtrl', function($mdDialog, ticket) {
    var vm = this;

    vm.ticket = ticket;

    vm.cancel = $mdDialog.hide;
  });
