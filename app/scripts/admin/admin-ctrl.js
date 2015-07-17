'use strict';

angular.module('workingRoom')
  .controller('AdminCtrl', function($mdDialog, $state, Modules, Groups, Users, ModulesList, GroupsList) {
    var vm = this;

    vm.modules = ModulesList;
    vm.groups = GroupsList;
    vm.openCreateModule = openCreateModule;
    vm.openCreateGroup = openCreateGroup;

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

    function openCreateGroup(event) {
      $mdDialog.show({
        controller: 'CreateGroupCtrl as vm',
        templateUrl: 'partials/create-group-modal.html',
        targetEvent: event
      }).then(function(res) {
        Groups.add(res);
      }, function(err) {
        console.log(err);
      });
    }

    function openCreateUser(event) {
      $mdDialog.show({
        controller: 'CreateUserCtrl as vm',
        templateUrl: 'partials/create-user-modal.html',
        targetEvent: event
      }).then(function(res) {
        Users.add(res);
      }, function(err) {
        console.log(err);
      });
    }
  });
