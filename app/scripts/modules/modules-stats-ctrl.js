'use strict';

angular.module('workingRoom')
    .controller('ModulesStatsCtrl', function (Module, TicketsList) {
        var vm = this;

        vm.tickets = null;
        TicketsList.$loaded().then(function () {
            vm.tickets = TicketsList;
            vm.ticketsToDeal = TicketsList.filter(function (ticket) {
                return ticket.status === 'A traiter';
            });
            vm.ticketsNotRead = TicketsList.filter(function (ticket) {
                return !ticket.lastResponse;
            });
        });
        vm.module = Module;
    });