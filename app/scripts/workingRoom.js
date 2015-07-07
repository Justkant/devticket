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
]).config(function ($stateProvider, SECURED_ROUTES) {
  $stateProvider.stateAuthenticated = function (name, opts) {
    opts.resolve = opts.resolve || {};
    opts.resolve.user = ['Auth', function (Auth) {
      return Auth.$requireAuth();
    }];
    $stateProvider.state(name, opts);
    SECURED_ROUTES[name] = true;
    return $stateProvider;
  };
}).config(function ($stateProvider, $urlRouterProvider, $mdIconProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl as vm'
    })
    .stateAuthenticated('main', {
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl as vm'
    })
    .stateAuthenticated('main.group', {
      url: 'group/:id',
      templateUrl: 'partials/group.html',
      controller: 'GroupCtrl as vm'
    })
    .stateAuthenticated('main.profile', {
      url: 'profile/:id',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl as vm'
    });

  $mdIconProvider
    .defaultFontSet('material-icons');
}).run(function ($rootScope, $state, Auth, SECURED_ROUTES, loginRedirectPath) {
  Auth.$onAuth(check);

  $rootScope.$on('$stateChangeError', function (e, next, prev, params, err, last) {
    if (angular.isObject(err) && last === 'AUTH_REQUIRED') {
      $state.go(loginRedirectPath);
    }
  });

  function check(user) {
    if (!user && authRequired($state.current.name)) {
      $state.go(loginRedirectPath);
    }
  }

  function authRequired(path) {
    return SECURED_ROUTES.hasOwnProperty(path);
  }
}).constant('SECURED_ROUTES', {});

angular.element(document).ready(function () {
  angular.bootstrap(document, ['workingRoom']);
});
