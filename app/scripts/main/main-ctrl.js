'use strict';

angular.module('workingRoom')
  .controller('MainCtrl', function(Auth, $mdDialog, User, Modules, ModulesList, $rootScope, $state) {
    var vm = this;

    console.log(User);
    console.log(ModulesList);

    vm.openCreateModule = openCreateModule;
    vm.unauth = Auth.saveDisconnect;
    vm.modules = ModulesList;

    showFab($state.current.name);

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      showFab(toState.name);
    });

    function showFab(state) {
      switch (state) {
        case 'main.admin':
          vm.showFab = true;
          break;
        default:
          vm.showFab = false;
      }
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
