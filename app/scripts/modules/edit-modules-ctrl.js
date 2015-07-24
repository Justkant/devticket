'use strict';

angular.module('workingRoom')
    .controller('EditModulesCtrl', function (Module, Toasts, $state, $mdDialog) {
        var vm = this;

        vm.moduleId = Module.$id;
        vm.module = {
            name: Module.name,
            ticketFields: Module.ticketFields || []
        };
        vm.newTicketField = '';
        vm.saveModule = saveModule;
        vm.addTicketField = addTicketField;
        vm.openEditTicketField = openEditTicketField;

        function addTicketField() {
            if (vm.newTicketField.length > 0) {
                vm.module.ticketFields.push({
                    name: vm.newTicketField,
                    data: [],
                    required: true,
                    showInTable: true
                });

                vm.newTicketField = '';
            }
        }

        function openEditTicketField(event, field) {
            $mdDialog.show({
                controller: 'EditTicketFieldCtrl as vm',
                templateUrl: 'partials/modules/edit-ticket-field.html',
                targetEvent: event,
                resolve: {
                    field: function () {
                        return field;
                    }
                }
            });
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
