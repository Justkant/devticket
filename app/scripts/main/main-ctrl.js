'use strict';

angular.module('workingRoom')
  .controller('MainCtrl', function($rootScope, $state, $mdSidenav, Auth, User, ModulesList, Users, Modules, Groups, Tickets) {
    var vm = this;

    vm.currentState = $state.current.name;
    vm.toggleSidenav = toogleSidenav;
    vm.modules = ModulesList;
    vm.showModulesGrid = true;

    updateState();
    checkModulesState($state.params);

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      closeSidenav();
      vm.currentState = toState.name;

      updateState();
      checkModulesState(toParams);
    });

    function toogleSidenav() {
      $mdSidenav('left').toggle();
    }

    function closeSidenav() {
      $mdSidenav('left').close();
    }

    function checkModulesState(params) {
      vm.modulesState = {};
      if (vm.currentState === 'main.modules') vm.modulesState[params.id] = true;
    }

    function updateState() {
      switch (vm.currentState) {
        case 'main':
          vm.toolbarTitle = 'Modules';
          break;
        case 'main.modules':
          vm.toolbarTitle = 'Module';
          break;
        case 'main.admin':
          vm.toolbarTitle = 'Administration';
          break;
        case 'main.profile':
          vm.toolbarTitle = 'Profil'
          break;
        default:
          vm.toolbarTitle = 'Modules'
      }

      function logout()  {
        Groups.destroy();
        Users.destroy();
        Modules.destroy();
        Tickets.destroy();
        Auth.saveDisconnect();
      }

      vm.unauth = logout;
    }
  });
