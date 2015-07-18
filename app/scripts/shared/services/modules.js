'use strict';

angular.module('workingRoom')
    .factory('Modules', function (Ref, $firebaseObject, $firebaseArray) {
        var ref = Ref.child('modules');
        //var modulesForUser = [];
        var modules = null;
        var m = null;

        function destroyIfExist() {
            if (m) {
                m.$destroy();
                m = null;
            }
        }

        return {
            all: function () {
                if (!modules) {
                    modules = $firebaseArray(ref);
                }
                return modules;
            },
            get: function () {
                destroyIfExist();
                m = $firebaseObject(ref.child(id));
                return m;
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
                destroyIfExist();
                if (modules) {
                    modules.$destroy();
                    modules = null;
                }
            }
        };
    });
