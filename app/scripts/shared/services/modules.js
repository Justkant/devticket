'use strict';

angular.module('workingRoom')
    .factory('Modules', function (Ref, $firebaseObject, $firebaseArray, $q) {
        var ref = Ref.child('modules');
        //var modulesForUser = [];
        var modulesList = {};
        var modules = null;

        return {
            all: function () {
                if (!modules) {
                    modules = $firebaseArray(ref);
                }
                return modules;
            },
            get: function (id) {
                return $q(function (resolve, reject) {
                    if (!modulesList[id]) {
                        modulesList[id] = $firebaseObject(ref.child(id));
                    }
                    modulesList[id].$loaded().then(function (res) {
                        resolve(res);
                    }, function (error) {
                        reject(error);
                    });
                });
            },
            add: function (obj) {
                return modules.$add(obj);
            },
            save: function (obj) {
                return modules.save(obj);
            },
            delete: function (item) {
                return modules.$remove(item);
            },
            destroy: function () {
                for (var moduleId in modulesList) {
                    modulesList[moduleId].$destroy();
                }
                if (modules) {
                    modules.$destroy();
                    modules = null;
                }
            }
        };
    });
