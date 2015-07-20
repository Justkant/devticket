'use strict';

angular.module('workingRoom')
    .controller('CreateTicketCtrl', function ($mdDialog, Module, User) {
        var vm = this;

        vm.ticket = {
            user: {
                id: User.$id,
                name: User.name
            }
        };
        vm.module = Module;

        vm.cancel = $mdDialog.cancel;
        vm.hide = $mdDialog.hide;
    });
