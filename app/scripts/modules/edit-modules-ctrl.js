'use strict';

angular.module('workingRoom')
    .controller('EditModulesCtrl', function (Module, Toasts, $state, $mdDialog) {
        var vm = this;

        vm.moduleId = Module.$id;
        vm.module = {
            name: Module.name,
            description: Module.description,
            ticketFields: Module.ticketFields ? Module.ticketFields.slice(0) : []
        };
        vm.newTicketField = '';
        vm.saveModule = saveModule;
        vm.addTicketField = addTicketField;
        vm.openEditTicketField = openEditTicketField;
        vm.openDeleteField = openDeleteField;

        function addTicketField() {
            $mdDialog.show({
                controller: 'NewTicketFieldCtrl as vm',
                templateUrl: 'partials/modules/new-ticket-field.html',
                targetEvent: event
            }).then(function (ticketField) {
                vm.module.ticketFields.push(ticketField);
            });
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

        function openDeleteField(event, key) {
            event.stopPropagation();
            var confirm = $mdDialog.confirm()
                .title('Attention')
                .content('Voulez-vous vraiment supprimer ce champ ?')
                .ariaLabel('confirm delete')
                .ok('Oui')
                .cancel('Non')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function () {
                for (var i = 0; i < vm.module.ticketFields.length; i++) {
                    if (i === key) {
                        vm.module.ticketFields.splice(i, 1);
                        break;
                    }
                }
            });
        }

        function saveModule() {
            if (vm.module.name.length > 0) {
                Module.name = vm.module.name;
                Module.description = vm.module.description;
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
