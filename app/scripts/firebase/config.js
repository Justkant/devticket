'use strict';

angular.module('workingRoom')
  .constant('FBURL', 'https://devticket.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])
  .constant('loginRedirectPath', 'login');
