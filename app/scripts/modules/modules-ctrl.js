'use strict';

angular.module('workingRoom')
    .controller('ModulesCtrl', function ($scope, $filter, $timeout, TicketsList, Tickets, User, $stateParams, $mdDialog, Toasts, Module, admin) {
        var vm = this;

        vm.moduleId = $stateParams.id;
        vm.module = Module;
        vm.openCreateTicket = openCreateTicket;
        vm.openTicketView = openTicketView;
        vm.filterTickets = filterTickets;
        vm.filterTicketList = filterTicketList;
        vm.admin = admin;

        var defaultStatus = getDefaultStatus();
        vm.currentFilter = {status: defaultStatus};
        vm.status = defaultStatus;
        vm.filter = 'Tickets à traiter';
        vm.filters = [
            'Tickets à traiter',
            'Tickets Non Lus',
            'Tickets par statut',
            'Tous les tickets'
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
            TicketsList.$watch(filterTicketList);
            filterTicketList();
        });

        function filterTicketList() {
             $timeout(function () {
                vm.tickets = $filter('filter')(TicketsList, vm.currentFilter);
            });
        }

        function filterTickets() {
            switch(vm.filter) {
                case 'Tickets à traiter':
                    vm.currentFilter = {status: defaultStatus};
                    break;
                case 'Tickets Non Lus':
                    vm.currentFilter = {lastResponse: '!'};
                    break;
                case 'Tickets par statut':
                    vm.currentFilter = {status: vm.status};
                    break;
                case 'Tous les tickets':
                    vm.currentFilter = {};
                    break;
            }
            filterTicketList();
        }

        function openTicketView(event, id) {
            $mdDialog.show({
                controller: 'ViewTicketCtrl as vm',
                templateUrl: 'partials/modules/view-ticket-modal.html',
                targetEvent: event,
                resolve: {
                    admin: function () {
                        return admin;
                    },
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
            if (Module.status) {
                for (var i = 0; i < Module.status.length; i++) {
                    if (Module.status.default) {
                        return Module.status.name;
                    }
                }
                return Module.status[0] ? Module.status[0].name : 'A traiter';
            }
            return 'A traiter';
        }

    });
