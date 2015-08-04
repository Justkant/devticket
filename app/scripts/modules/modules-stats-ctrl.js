'use strict';

angular.module('workingRoom')
    .controller('ModulesStatsCtrl', function (Module, TicketsList) {
        var vm = this;

        vm.tickets = TicketsList;
        vm.module = Module;
    });