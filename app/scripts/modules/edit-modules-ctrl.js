'use strict';

angular.module('workingRoom')
    .controller('EditModulesCtrl', function (Module, Toasts, $state) {
        var vm = this;

        vm.module = {
            name: Module.name
        };
        vm.saveModule = saveModule;

        function saveModule() {
            Module.$save(vm.module).then(function () {
                Toasts.simple('Sauvegarde réussie');
                $state.go('^');
            }, function (error) {
                Toasts.error(error);
            });
        }
    });
