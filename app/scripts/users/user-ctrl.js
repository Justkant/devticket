'use strict';

angular.module('workingRoom')
    .controller('UserCtrl', function ($mdDialog, user, admin, Users, GroupsList) {
        var vm = this;

        vm.deleteUser = deleteUser;
        vm.user = user;
        vm.admin = admin;

        function deleteUser(event) {
            $mdDialog.show({
                controller: 'DeleteUserModal as vm',
                templateUrl: 'users/delete-user-modal.html',
                targetEvent: event
            }).then(function (res) {
                Users.delete(res, user);
            });
        }
    });
