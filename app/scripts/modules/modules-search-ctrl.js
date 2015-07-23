'use strict';

angular.module('workingRoom')
    .controller('ModulesSearchCtrl', function (Module) {
        var vm = this;

        vm.moduleId = Module.$id;
    });