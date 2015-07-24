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

        vm.getSubCat = function (cat, subcats) {
            var ret = [];
            if (cat) {
                for (var i = 0, len = subcats.length; i < len; i++) {
                    if (subcats[i].name === cat) {
                        ret = subcats[i].data;
                        break;
                    }
                }
            }
            return ret;
        };
    });
