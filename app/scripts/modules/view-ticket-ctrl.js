'use strict';

angular.module('workingRoom')
    .controller('ViewTicketCtrl', function ($state, $mdDialog, ticket, User, $stateParams, Tickets) {
        var vm = this;

        vm.ticket = ticket;
        vm.newMessage = '';
        vm.sendMessage = sendMessage;

        vm.cancel = $mdDialog.hide;

        function sendMessage() {
            if (vm.newMessage.length > 0) {
                if (!ticket.messages) ticket.messages = [];
                ticket.messages.push({
                    author: {id: User.$id, name: User.name},
                    content: vm.newMessage
                });
                Tickets.save($stateParams.id, ticket);
                vm.newMessage = '';
            }
        }
    });
