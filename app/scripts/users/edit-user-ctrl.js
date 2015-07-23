'use strict';

angular.module('workingRoom')
    .controller('EditUserCtrl', function (user, GroupsList) {
        var vm = this;

        vm.user = user;
        if (!vm.user.groups) vm.user.groups = [];
        vm.searchText = null;
        vm.getMatches = getMatches;

        GroupsList.forEach(function (group) {
            group._lowername = group.name.toLowerCase();
        });

        function getMatches() {
            return vm.searchText ? GroupsList.filter(filterGroups) : [];
        }

        function filterGroups(group) {
            return group._lowername.indexOf(vm.searchText.toLowerCase()) === 0;
        }
    });