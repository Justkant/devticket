'use strict';

angular.module('workingRoom')
    .controller('ModulesSearchCtrl', function (Module, TicketsList, $filter, $scope, $state) {
        var vm = this;

        vm.ticket = {};
        vm.moduleId = Module.$id;
        vm.module = Module;
        vm.searchTickets = searchTickets;
        searchTickets();

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

        vm.exportExcel = function () {
            var str = convertToCsv($scope.$parent.vm.tickets);
            var blob = new Blob([str], {type: "text/plain;charset=utf-8"});
            saveAs(blob, [Module.name + '_tickets.csv']);
        };

        vm.back = function () {
            $scope.$parent.vm.filterTickets();
            $state.go('^');
        };

        function searchTickets() {
            $scope.$parent.vm.currentFilter = vm.ticket;
        }

        //TODO: finir la function afin de gerer les champs spéciaux comme les dropdowns ou autre
        function convertToCsv(array) {
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ',';

                    if (array[i].hasOwnProperty(index)) {
                        line += array[i][index];
                    }
                }

                str += line + '\r\n';
            }

            return str;
        }
    });