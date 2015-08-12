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
            vm.ticketsDouble = TicketsList.filter(function (ticket) {
                return ticket.status === 'Doublon';
            });
            vm.ticketsCurrent = TicketsList.filter(function (ticket) {
                return ticket.status === 'En cours';
            });
            vm.ticketsClimb = TicketsList.filter(function (ticket) {
                return ticket.status === 'Escaladé';
            });
            vm.ticketsDCNo = TicketsList.filter(function (ticket) {
                return ticket.status === 'Traité sans résolution DC';
            });
            vm.ticketsDCYes = TicketsList.filter(function (ticket) {
                return ticket.status === 'Traité avec résolution DC';
            });
            vm.ticketsNoCPM = TicketsList.filter(function (ticket) {
                return ticket.status === 'Demande hors procédure CPM';
            });
            vm.ticketsNotRead = TicketsList.filter(function (ticket) {
                return !ticket.lastResponse;
            });
        });
        vm.module = Module;
    });
