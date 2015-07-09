'use strict';

angular.module('workingRoom')
  .controller('MainCtrl', function(Auth, $mdDialog, User) {
    var vm = this;

    console.log(User);

    vm.unauth = Auth.saveDisconnect;
    vm.modules = [{
      name: 'CPM'
    }, {
      name: 'Escalade'
    }, {
      name: 'Voyage'
    }];

    vm.openCreateTicket = openCreateTicket;

    function openCreateTicket(event) {
      $mdDialog.show({
        controller: 'CreateTicketCtrl as vm',
        templateUrl: 'partials/create-ticket-modal.html',
        targetEvent: event,
      }).then(function(res) {
        console.log(res);
      }, function(err) {
        console.log(err);
      });
    }

  });
