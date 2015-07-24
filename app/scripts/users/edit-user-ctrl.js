'use strict';

angular.module('workingRoom')
    .controller('EditUserCtrl', function (user, GroupsList, $mdDialog, $state, Toasts, User, Users) {
        var vm = this;

        vm.user = {
            name: user.name,
            type: user.type,
            groups: user.groups,
            email: user.email
        };
        if (!vm.user.groups) vm.user.groups = [];
        vm.searchText = null;
        vm.getMatches = getMatches;
        vm.saveUser = saveUser;
        vm.admin = User.type === 'admin';
        vm.changeEmail = changeEmail;
        vm.changePassword = changePassword;

        GroupsList.forEach(function (group) {
            group._lowername = group.name.toLowerCase();
        });

        function saveUser() {
            if (vm.user.name.length > 0) user.name = vm.user.name;
            user.type = vm.user.type;
            user.groups = vm.user.groups;
            user.email = vm.user.email;
            user.$save().then(function () {
                Toasts.simple('Sauvegarde réussie');
                $state.go('^');
            }, function (error) {
                Toasts.error(error);
            });
        }

        function changePassword(event) {
            $mdDialog.show({
                controller: 'ChangePasswordCtrl as vm',
                templateUrl: 'partials/users/change-password-modal.html',
                targetEvent: event,
                resolve: {
                    email: function() {
                        return user.email;
                    }
                }
            }).then(function (res) {
                Users.changePassword(res);
            });
        }

        function changeEmail() {
            $mdDialog.show({
                controller: 'ChangeEmailCtrl as vm',
                templateUrl: 'partials/users/change-email-modal.html',
                targetEvent: event,
                resolve: {
                    email: function() {
                        return user.email;
                    }
                }
            }).then(function (res) {
                Users.changeEmail(res, user);
            });
        }

        function getMatches() {
            return vm.searchText ? GroupsList.filter(filterGroups) : [];
        }

        function filterGroups(group) {
            return group._lowername.indexOf(vm.searchText.toLowerCase()) === 0;
        }
    });