'use strict';

angular.module('workingRoom')
    .controller('EditTicketFieldCtrl', function (field, $mdDialog) {
        var vm = this;

        vm.field = field;
        vm.hide = $mdDialog.hide;
        vm.saveField = saveField;


        function saveField() {

        }
    });