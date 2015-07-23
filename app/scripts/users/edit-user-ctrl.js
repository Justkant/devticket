'use strict';

angular.module('workingRoom')
    .controller('EditUserCtrl', function (user, GroupsList, $state, Toasts, User) {
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

        function changePassword() {

        }

        function changeEmail() {

        }

        function getMatches() {
            return vm.searchText ? GroupsList.filter(filterGroups) : [];
        }

        function filterGroups(group) {
            return group._lowername.indexOf(vm.searchText.toLowerCase()) === 0;
        }
    });