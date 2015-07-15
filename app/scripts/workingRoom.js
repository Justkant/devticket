'use strict';

angular.module('workingRoom', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngMessages',
  'firebase',
  'ngResource',
  'ngMaterial',
  'ui.router',
  'md.data.table'
]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('main', {
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl as vm',
      resolve: {
        User: function($q, Auth, Users) {
          return $q(function(resolve, reject) {
            Auth.$requireAuth().then(function(user) {
              Users.get(user.uid).$loaded().then(function(user) {
                resolve(user);
              }, function(error) {
                reject(error);
              })
            }, function() {
              reject('AUTH_REQUIRED');
            });
          })
        },
        ModulesList: function(Modules) {
          return Modules.all().$loaded();
        }
      }
    })
    .state('main.modules', {
      url: 'modules/:id',
      templateUrl: 'partials/modules.html',
      controller: 'ModulesCtrl as vm',
      resolve: {
        moduleId: function($stateParams) {
          return $stateParams.id;
        },
        TicketsList: function(Tickets, moduleId) {
          return Tickets.get(moduleId);
        }
      }
    })
    .state('main.profile', {
      url: 'profile/:id',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl as vm'
    })
    .state('main.admin', {
      url: 'admin',
      templateUrl: 'partials/admin.html',
      controller: 'AdminCtrl as vm',
      resolve: {
        ModulesList: function(ModulesList) {
          return ModulesList;
        }
      }
    })
    .state('main.admin.modules', {
      url: '/modules/:id',
      templateUrl: 'partials/admin-modules.html',
      controller: 'AdminModulesCtrl as vm'
    });
}).run(function($rootScope, $state, Auth, loginRedirectPath) {
  Auth.$onAuth(function(user) {
    if (!user) {
      $state.go(loginRedirectPath);
    }
  });

  $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        event.preventDefault();
        $state.go(loginRedirectPath);
      }
    }
  );
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['workingRoom']);
});
