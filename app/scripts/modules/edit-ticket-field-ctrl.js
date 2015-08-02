'use strict';

angular.module('workingRoom')
    .controller('EditTicketFieldCtrl', function ($scope, field, $mdDialog) {
        var vm = this;

        vm.field = {
            name: field.name,
            type: field.type || 'text',
            data: field.data ? field.data.slice(0) : []
        };

        vm.hide = hide;
        vm.saveField = saveField;
        vm.appendDouble = appendDouble;

        function appendDouble(chip) {
            return {
                name: chip,
                data: []
            };
        }

        function hide(event) {
            event.preventDefault();
            $mdDialog.hide();
        }

        function saveField() {
            if (vm.field.name.length > 0) field.name = vm.field.name;
            field.type = vm.field.type;
            field.data = vm.field.data;
            $mdDialog.hide(field);
        }
    });