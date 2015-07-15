'use strict';

angular.module('workingRoom')
  .controller('AdminCtrl', function($mdDialog, $state, Modules, ModulesList) {
    var vm = this;

    vm.modules = ModulesList;
    vm.openCreateModule = openCreateModule;
    vm.goAdminModule = goAdminModule;

    function goAdminModule(moduleId) {
      console.log(moduleId);
      $state.go('main.admin.modules', {
        id: moduleId
      });
    }

    function openCreateModule(event) {
      $mdDialog.show({
        controller: 'CreateModuleCtrl as vm',
        templateUrl: 'partials/create-module-modal.html',
        targetEvent: event
      }).then(function(res) {
        Modules.add(res);
      }, function(err) {
        console.log(err);
      });
    }
  });
