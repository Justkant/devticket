'use strict';

angular.module('workingRoom')
    .factory('Tickets', function (Ref, $firebaseObject, $firebaseArray, $q) {
        var ref = Ref.child('tickets');
        var ticketsForModule = {};
        var tickets = null;
        //var ticket = null;

        return {
            all: function () {
                if (!tickets) {
                    tickets = $firebaseArray(ref);
                }
                return tickets
            },
            get: function (id) {
                if (!ticketsForModule[id]) {
                    ticketsForModule[id] = $firebaseArray(ref.child(id));
                }
                return ticketsForModule[id];
            },
            add: function (id, obj) {
                if (ticketsForModule[id]) {
                    obj.id = ticketsForModule[id].length + 1;
                    return ticketsForModule[id].$add(obj);
                } else {
                    return $q(function (resolve, reject) { reject(); });
                }
            },
            save: function (moduleId, obj) {
                if (ticketsForModule[moduleId]) {
                    ticketsForModule[moduleId].$save(obj);
                }
            },
            delete: function (moduleId) {
                ref.child(moduleId).remove();
            },
            getTicket: function (moduleId, ticketId) {
                return $q(function (resolve, reject) {
                    if (ticketsForModule[moduleId]) {
                        resolve(ticketsForModule[moduleId].$getRecord(ticketId));
                    }
                    reject();
                });
            },
            destroy: function () {
                for (var moduleId in ticketsForModule) {
                    ticketsForModule[moduleId].$destroy();
                }
                ticketsForModule = {};
            }
        }
    });
