'use strict';

angular.module('workingRoom')
    .controller('CreateTicketCtrl', function ($mdDialog, Module, User) {
        var vm = this;

        var defaultStatus = getDefaultStatus();
        vm.ticket = {
            user: {
                id: User.$id,
                name: User.name
            },
            status: defaultStatus
        };
        vm.module = Module;

        vm.cancel = $mdDialog.cancel;
        vm.hide = $mdDialog.hide;
        vm.upload = upload;

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

        function getDefaultStatus() {
            for (var i = 0; i < Module.status.length; i++) {
                if (Module.status.default) {
                    return Module.status.name;
                }
            }
            return Module.status[0] ? Module.status[0].name : 'A traiter';
        }

        function upload(file) {
            if (file) {
                var reader = new FileReader();

                reader.onload = function(readerEvt) {
                    var binaryString = readerEvt.target.result;
                    vm.ticket.file = {
                        name: file.name,
                        data: 'data:' + file.type + ';base64,' + binaryString.substr(binaryString.indexOf('base64,') + 'base64,'.length)
                    };
                };

                reader.readAsDataURL(file);
            }
        }
    });
