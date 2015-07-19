'use strict';

angular.module('workingRoom')
    .controller('ModulesCtrl', function ($scope, TicketsList, Tickets, $stateParams, $mdDialog) {
        var vm = this;

        vm.moduleId = $stateParams.id;
        vm.openCreateTicket = openCreateTicket;
        vm.openTicketView = openTicketView;

        vm.filter = 'Tickets à traiter';
        vm.filters = [
            'Tickets à traiter',
            'Tickets Non Lus',
            'Tickets par statut',
            'Tickets "A relancer"'
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

        vm.tickets = TicketsList;

        /*function Ticket(obj, i) {
         this.id = i; //Math.round(Math.random() * 1000) + 1;
         this.user = obj.user;
         this.subject = obj.subject;
         this.priority = obj.priority;
         this.sale = obj.sale;
         this.category = obj.category;
         this.subCategory = obj.subCategory;
         this.commandNb = Math.round(Math.random() * 1000) + 1;
         this.saleNb = Math.round(Math.random() * 1000) + 1;
         this.refSRP = Math.round(Math.random() * 1000) + 1;
         this.created = obj.created;
         this.status = obj.status;
         this.salePrice = obj.salePrice;
         this.lastResponse = obj.lastResponse;
         }*/

        function openTicketView(event, id) {
            $mdDialog.show({
                controller: 'ViewTicketCtrl as vm',
                templateUrl: 'partials/modules/view-ticket-modal.html',
                targetEvent: event,
                resolve: {
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
                targetEvent: event
            }).then(function (res) {
                Tickets.add($stateParams.id, res);
            });
        }
    });
