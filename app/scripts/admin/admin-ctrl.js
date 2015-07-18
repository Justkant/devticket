'use strict';

angular.module('workingRoom')
    .controller('AdminCtrl', function ($mdDialog, $state, Modules, Groups, Users, Tickets, ModulesList, GroupsList, UsersList) {
        var vm = this;

        vm.modules = ModulesList;
        vm.groups = GroupsList;
        vm.users = UsersList;
        vm.openCreateModule = openCreateModule;
        vm.openDeleteModule = openDeleteModule;
        vm.openCreateGroup = openCreateGroup;
        vm.openEditGroup = openEditGroup;
        vm.openDeleteGroup = openDeleteGroup;
        vm.openCreateUser = openCreateUser;

        vm.label = {
            text: 'Utilisateurs par page',
            of: 'sur'
        };

        vm.query = {
            limit: 10,
            page: 1,
            rowSelect: [10, 20, 50, 100, 200, 500]
        };

        function openCreateModule(event) {
            $mdDialog.show({
                controller: 'CreateModuleCtrl as vm',
                templateUrl: 'partials/admin/create-module-modal.html',
                targetEvent: event
            }).then(function (res) {
                Modules.add(res);
            });
        }

        function openDeleteModule(event, module) {
            var confirm = $mdDialog.confirm()
                .title('Attention')
                .content('Voulez-vous vraiment supprimer ce module ?')
                .ariaLabel('confirm delete')
                .ok('Oui')
                .cancel('Non')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function () {
                Tickets.delete(module.$id);
                Modules.delete(module);
            });
        }

        function openCreateGroup(event) {
            $mdDialog.show({
                controller: 'CreateGroupCtrl as vm',
                templateUrl: 'partials/admin/create-group-modal.html',
                targetEvent: event
            }).then(function (res) {
                Groups.add(res);
            });
        }

        function openEditGroup(event, group) {
            //noinspection JSUnusedGlobalSymbols
            $mdDialog.show({
                controller: 'EditGroupCtrl as vm',
                templateUrl: 'partials/admin/edit-group-modal.html',
                targetEvent: event,
                resolve: {
                    Group: function() {
                        return group;
                    }
                }
            }).then(function (res) {
                if (res.name.length > 0) {
                    group.name = res.name;
                    Groups.save(group);
                }
            });
        }

        function openDeleteGroup(event, group) {
            var confirm = $mdDialog.confirm()
                .title('Attention')
                .content('Voulez-vous vraiment supprimer ce groupe ?')
                .ariaLabel('confirm delete')
                .ok('Oui')
                .cancel('Non')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function () {
                Groups.delete(group);
            });
        }

        function openCreateUser(event) {
            $mdDialog.show({
                controller: 'CreateUserCtrl as vm',
                templateUrl: 'partials/admin/create-user-modal.html',
                targetEvent: event
            }).then(function (res) {
                Users.add(res);
            });
        }
    });
