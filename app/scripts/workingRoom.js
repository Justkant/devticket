'use strict';

angular.module('workingRoom', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngMessages',
  'ngTouch',
  'firebase',
  'ngResource',
  'ngMaterial',
  'ui.router',
  'md.data.table'
]).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.definePalette('workingRoomPrimary', {
    "50": "#f2f2f2",
    "100": "#d9d9d9",
    "200": "#c0c0c0",
    "300": "#aaaaaa",
    "400": "#959595",
    "500": "#808080",
    "600": "#707070",
    "700": "#606060",
    "800": "#505050",
    "900": "#404040",
    "A100": "#d9d9d9",
    "A200": "#c0c0c0",
    "A400": "#959595",
    "A700": "#606060",
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', 'A100', 'A200']
  });

  $mdThemingProvider.definePalette('workingRoomAccent', {
    "50": "#fce7f8",
    "100": "#f5b6e9",
    "200": "#ee86da",
    "300": "#e85dcd",
    "400": "#e334c0",
    "500": "#dd0cb4",
    "600": "#c10b9e",
    "700": "#a60987",
    "800": "#8a0871",
    "900": "#6f065a",
    "A100": "#f5b6e9",
    "A200": "#ee86da",
    "A400": "#e334c0",
    "A700": "#a60987",
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', 'A100']
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('workingRoomPrimary', {
      default: '500'
    })
    .accentPalette('workingRoomAccent', {
      default: '500'
    });

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
        GroupsList: function(Groups) {
          return Groups.all().$loaded();
        },
        ModulesList: function(Groups, Modules) {
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
    .state('main.modules.edit', {
      url: '/edit',
      templateUrl: 'partials/edit-modules.html',
      controller: 'EditModulesCtrl as vm'
    })
    .state('main.profile', {
      url: 'profile/:id',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl as vm'
    })
    .state('main.profile.edit', {
      url: '/edit',
      templateUrl: 'partials/edit-profile.html',
      controller: 'EditProfileCtrl as vm'
    })
    .state('main.admin', {
      url: 'admin',
      templateUrl: 'partials/admin.html',
      controller: 'AdminCtrl as vm'
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
