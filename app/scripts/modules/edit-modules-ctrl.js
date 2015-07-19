'use strict';

angular.module('workingRoom')
    .controller('EditModulesCtrl', function (Module, Toasts, $state) {
        var vm = this;

        vm.module = {
            name: Module.name
        };
        vm.saveModule = saveModule;

        function saveModule() {
            if (vm.module.name.length > 0) {
                Module.name = vm.module.name;
                Module.$save().then(function () {
                    Toasts.simple('Sauvegarde réussie');
                    $state.go('^');
                }, function (error) {
                    Toasts.error(error);
                });
            }
        }
    });
