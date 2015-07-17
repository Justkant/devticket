'use strict';

angular.module('workingRoom')
  .factory('Tickets', function(Ref, $firebaseObject, $firebaseArray, $q) {
    var ref = Ref.child('tickets');
    var ticketsForModule = {};
    var tickets = null;
    var ticket = null;

    return {
      all: function() {
        if (!tickets) {
          tickets = $firebaseArray(ref);
        }
        return tickets
      },
      get: function(id) {
        if (!ticketsForModule[id]) {
          ticketsForModule[id] = $firebaseArray(ref.child(id));
        }
        return ticketsForModule[id];
      },
      add: function(id, obj) {
        if (ticketsForModule[id]) {
          ticketsForModule[id].$add(obj);
        }
      },
      save: function(moduleId, obj) {
        if (ticketsForModule[moduleId]) {
          ticketsForModule[moduleId].$save(obj);
        }
      },
      getTicket: function(moduleId, ticketId) {
        return $q(function(resolve, reject) {
          if (ticketsForModule[moduleId]) {
            resolve(ticketsForModule[moduleId].$getRecord(ticketId));
          }
          reject();
        });
      },
      destroy: function() {
        for (var moduleId in ticketsForModule) {
          ticketsForModule[moduleId].$destroy();
        }
        ticketsForModule = {};
      }
    }
  });
