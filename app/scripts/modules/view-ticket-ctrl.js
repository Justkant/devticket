'use strict';

angular.module('workingRoom')
    .controller('ViewTicketCtrl', function ($state, $mdDialog, ticket, User, $stateParams, Tickets, module) {
        var vm = this;

        vm.module = module;
        vm.ticket = ticket;
        vm.newMessage = '';
        vm.newStatus = null;
        vm.newFile = {};
        vm.sendMessage = sendMessage;
        vm.upload = upload;

        vm.cancel = $mdDialog.hide;

        function sendMessage() {
            if (vm.newMessage.length > 0) {
                if (vm.newStatus) ticket.status = vm.newStatus;
                if (!ticket.messages) ticket.messages = [];
                ticket.messages.push({
                    date: Date.now(),
                    author: {id: User.$id, name: User.name},
                    content: vm.newMessage,
                    file: vm.newFile
                });
                ticket.lastResponse = User.name;
                Tickets.save($stateParams.id, ticket);
                vm.newMessage = '';
                $mdDialog.hide();
            }
        }

        function upload(file) {
            if (file) {
                var reader = new FileReader();

                reader.onload = function(readerEvt) {
                    var binaryString = readerEvt.target.result;
                    vm.newFile = {
                        name: file.name,
                        data: 'data:' + file.type + ';base64,' + binaryString.substr(binaryString.indexOf('base64,') + 'base64,'.length)
                    };
                };

                reader.readAsDataURL(file);
            }
        }
    });
