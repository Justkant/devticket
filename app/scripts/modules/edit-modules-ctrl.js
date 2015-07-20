'use strict';

angular.module('workingRoom')
    .controller('EditModulesCtrl', function (Module, Toasts, $state) {
        var vm = this;

        vm.moduleId = Module.$id;
        vm.module = {
            name: Module.name,
            ticketFields: Module.ticketFields || []
        };
        vm.newTicketField = '';
        vm.saveModule = saveModule;
        vm.addTicketField = addTicketField;

        function addTicketField() {
            if (vm.newTicketField.length > 0) {
                vm.module.ticketFields.push({
                    name: vm.newTicketField,
                    required: true,
                    showInTable: true
                });

                vm.newTicketField = '';
            }
        }

        function saveModule() {
            if (vm.module.name.length > 0) {
                Module.name = vm.module.name;
                Module.ticketFields = vm.module.ticketFields;
                Module.$save().then(function () {
                    Toasts.simple('Sauvegarde réussie');
                    $state.go('^');
                }, function (error) {
                    Toasts.error(error);
                });
            }
        }
    });
