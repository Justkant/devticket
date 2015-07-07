'use strict';

angular.module('workingRoom')
  .controller('CreateTicketCtrl', function ($mdDialog) {
    var vm = this;

    vm.ticket = {
      blabla: 'truc'
    };

    vm.hide = $mdDialog.hide;
  });
