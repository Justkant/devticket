'use strict';

angular.module('workingRoom')
    .factory('Groups', function (Ref, $firebaseObject, $firebaseArray, Auth) {
        var ref = Ref.child('groups');
        var groups = null;
        var groupsList = {};

        Auth.$onAuth(function (user) {
            if (!user) {
                destroy();
            }
        });

        function destroy() {
            for (var groupId in groupsList) {
                groupsList[groupId].$destroy();
                groupsList[groupId] = null;
            }
            if (groups) {
                groups.$destroy();
                groups = null;
            }
        }

        return {
            all: function () {
                if (!groups) {
                    groups = $firebaseArray(ref);
                }
                return groups;
            },
            get: function (id) {
                if (!groupsList[id]) {
                    groupsList[id] = $firebaseObject(ref.child(id));
                }
                return groupsList[id].$loaded();
            },
            add: function (group) {
                return groups.$add(group);
            },
            save: function (group) {
                return groups.$save(group);
            },
            delete: function (item) {
                return groups.$remove(item);
            }
        }
    });
