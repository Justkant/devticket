'use strict';

angular.module('workingRoom')
    .controller('ModulesCtrl', function ($scope, TicketsList, Tickets, User, $stateParams, $mdDialog, Toasts, Module, admin) {
        var vm = this;

        var defaultStatus = getDefaultStatus();
        vm.moduleId = $stateParams.id;
        vm.module = Module;
        vm.openCreateTicket = openCreateTicket;
        vm.openTicketView = openTicketView;
        vm.filterTickets = filterTickets;
        vm.admin = admin;

        vm.status = Module.status[0].name;
        vm.filter = 'Tickets à traiter';
        vm.filters = [
            'Tickets à traiter',
            'Tickets Non Lus',
            'Tickets par statut'
        ];

        vm.label = {
            text: 'Tickets par page',
            of: 'sur'
        };

        vm.query = {
            order: '-id',
            limit: 10,
            page: 1,
            rowSelect: [10, 20, 50, 100, 200, 500]
        };

        vm.tickets = null;
        TicketsList.$loaded().then(function () {
            filterTickets();
        });

        function ticketToDeal(ticket) {
            return ticket.status === defaultStatus;
        }

        function ticketNotRead(ticket) {
            return !ticket.lastResponse;
        }

        function ticketByStatus(ticket) {
            return ticket.status === vm.status;
        }

        function filterTickets() {
            switch(vm.filter) {
                case 'Tickets à traiter':
                    vm.tickets = TicketsList.filter(ticketToDeal);
                    break;
                case 'Tickets Non Lus':
                    vm.tickets = TicketsList.filter(ticketNotRead);
                    break;
                case 'Tickets par statut':
                    vm.tickets = TicketsList.filter(ticketByStatus);
                    break;
            }
        }

        function openTicketView(event, id) {
            $mdDialog.show({
                controller: 'ViewTicketCtrl as vm',
                templateUrl: 'partials/modules/view-ticket-modal.html',
                targetEvent: event,
                resolve: {
                    User: function () {
                        return User;
                    },
                    module: function () {
                        return Module;
                    },
                    ticket: function (Tickets) {
                        return Tickets.getTicket($stateParams.id, id);
                    }
                }
            });
        }

        function openCreateTicket(event) {
            $mdDialog.show({
                controller: 'CreateTicketCtrl as vm',
                templateUrl: 'partials/modules/create-ticket-modal.html',
                targetEvent: event,
                resolve: {
                    Module: function () {
                        return Module;
                    },
                    User: function () {
                        return User;
                    }
                }
            }).then(function (res) {
                Tickets.add($stateParams.id, res).then(function () {
                    Toasts.simple('Ticket créé');
                }, function (error) {
                    Toasts.error(error);
                });
            });
        }

        function getDefaultStatus() {
            for (var i = 0; i < Module.status.length; i++) {
                if (Module.status.default) {
                    return Module.status.name;
                }
            }
            return Module.status[0] ? Module.status[0].name : 'A traiter';
        }

    });
