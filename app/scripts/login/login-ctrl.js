'use strict';

angular.module('workingRoom')
  .controller('LoginCtrl', function (Auth, $state) {
    var vm = this;

    if (Auth.$getAuth()) {
      $state.go('main');
    }

    vm.resendEmail = null;
    vm.passwordReset = passwordReset;
    vm.passwordLogin = passwordLogin;

    function passwordLogin() {
      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }, {
        rememberMe: true
      }).then(function () {
        console.log('goo');
        $state.go('main');
      }, function (error) {
        console.log(error);
      });
    }

    function passwordReset() {
      $('#passwordLost').closeModal();
      Auth.$resetPassword({
        email: vm.resetEmail
      }).then(function () {
        console.info('Email de récupération envoyé');
        vm.resendEmail = null;

      }).catch(function (error) {
        console.log(error);
      });
    }
  });
