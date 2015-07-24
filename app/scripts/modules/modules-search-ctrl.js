'use strict';

angular.module('workingRoom')
    .controller('ModulesSearchCtrl', function (Module, TicketsList, $filter, $scope, $state) {
        var vm = this;

        vm.ticket = {};
        vm.moduleId = Module.$id;
        vm.module = Module;

        vm.getSubCat = function (cat, subcats) {
            var ret = [];
            if (cat) {
                for (var i = 0, len = subcats.length; i < len; i++) {
                    if (subcats[i].name === cat) {
                        ret = subcats[i].data;
                        break;
                    }
                }
            }
            return ret;
        };

        vm.back = function () {
            $scope.$parent.vm.tickets = TicketsList;
            $state.go('^');
        };

        vm.searchTickets = function () {
            $scope.$parent.vm.tickets = $filter('filter')(TicketsList, vm.ticket);
        };
    });