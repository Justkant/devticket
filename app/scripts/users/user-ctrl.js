'use strict';

angular.module('workingRoom')
    .controller('UserCtrl', function ($mdDialog, user) {
        var vm = this;

        vm.deleteProfile = deleteProfile;
        vm.user = user;

        function deleteProfile(event) {
            var confirm = $mdDialog.confirm()
                .title('Attention')
                .content('Voulez-vous vraiment supprimer cet utilisateur ?')
                .ariaLabel('confirm delete')
                .ok('Oui')
                .cancel('Non')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function () {
                //Users.delete(user);
            });
        }
    });
