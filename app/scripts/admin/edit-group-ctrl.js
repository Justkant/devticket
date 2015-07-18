'use strict';

angular.module('workingRoom')
    .controller('EditGroupCtrl', function (Group, $mdDialog) {
        var vm = this;

        vm.group = {
            name: Group.name
        };

        vm.hide = $mdDialog.hide;
        vm.cancel = $mdDialog.cancel;
    });