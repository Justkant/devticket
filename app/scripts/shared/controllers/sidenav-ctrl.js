'use strict';

angular.module('workingRoom')
  .controller('SidenavCtrl', function ($state, $rootScope, Auth) {
    var vm = this;

    vm.unauth = unauth;
    vm.groups = [{
      name: 'all'
    }];

    switchSidenav($state.current.name);

    $rootScope.$on('$stateChangeSuccess', function (e, toState) {
      switchSidenav(toState.name);
    });

    function unauth() {
      Auth.$unauth();
    }

    function switchSidenav(stateName) {
      switch (stateName) {
        case 'login':
          $rootScope.lockSidenav = false;
          break;
        default:
          $rootScope.lockSidenav = true;
      }
    }
  });
