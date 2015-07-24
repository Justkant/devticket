'use strict';

angular.module('workingRoom')
    .factory('Modules', function (Ref, $firebaseObject, $firebaseArray, Auth) {
        var ref = Ref.child('modules');
        var modulesList = {};
        var modules = null;

        Auth.$onAuth(function (user) {
            if (!user) {
                destroy();
            }
        });

        function destroy() {
            for (var moduleId in modulesList) {
                modulesList[moduleId].$destroy();
                modulesList[moduleId] = null;
            }
            if (modules) {
                modules.$destroy();
                modules = null;
            }
        }

        return {
            all: function () {
                if (!modules) {
                    modules = $firebaseArray(ref);
                }
                return modules;
            },
            get: function (id) {
                if (!modulesList[id]) {
                    modulesList[id] = $firebaseObject(ref.child(id));
                }
                return modulesList[id].$loaded();
            },
            add: function (obj) {
                return modules.$add(obj);
            },
            save: function (obj) {
                return modules.save(obj);
            },
            delete: function (item) {
                return modules.$remove(item);
            }
        };
    });
