'use strict';

angular.module('workingRoom')
    .factory('Groups', function (Ref, $firebaseObject, $firebaseArray) {
        var ref = Ref.child('groups');
        //var groupsForUser = [];
        var groups = null;
        var group = null;

        function destroyIfExist() {
            if (group) {
                group.$destroy();
                group = null;
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
                destroyIfExist();
                group = $firebaseObject(ref.child(id));
                return group;
            },
            /*getForUser: function (user) {
                if (groupsForUser.length === 0) {
                    var dfds = [];
                    user.groups.forEach(function (group) {
                        var obj = $firebaseObject(ref.child(group));
                        groupsForUser.push(obj);
                        dfds.push(obj.$loaded);
                    });
                    return $q.all(dfds);
                } else {
                    return $q(function (resolve) {
                        resolve(groupsForUser);
                    });
                }
            },*/
            add: function (group) {
                return groups.$add(group);
            },
            save: function (group) {
                return groups.$save(group);
            },
            delete: function (item) {
                return groups.$remove(item);
            },
            destroy: function () {
                destroyIfExist();
                if (groups) {
                    groups.$destroy();
                    groups = null;
                }
            }
        }
    });
