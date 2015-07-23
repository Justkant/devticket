'use strict';

angular.module('workingRoom')
    .factory('Users', function (Ref, $firebaseArray, $firebaseObject, $q, Toasts, Auth) {
        var ref = Ref.child('users');
        var users = null;
        var usersList = {};

        return {
            all: function () {
                if (!users) {
                    users = $firebaseArray(ref);
                }
                return users;
            },
            get: function (id) {
                if (!usersList[id]) {
                    usersList[id] = $firebaseObject(ref.child(id));
                }
                return usersList[id].$loaded();
            },
            add: function (user) {
                var def = $q.defer();

                Ref.createUser({
                    email: user.email,
                    password: 'workingRoom'
                }, function (error, userData) {
                    if (error) {
                        Toasts.error(error);
                    } else {
                        ref.child(userData.uid).set({
                            id: userData.uid.split(':')[1],
                            email: user.email,
                            name: user.name,
                            type: user.type
                        }, function (err) {
                            if (err) {
                                Toasts.error(err);
                                def.reject(err);
                            } else {
                                def.resolve(ref.child(userData.uid));
                            }
                        });

                    }
                });
                return def.promise;
            },
            delete: function () {

            },
            destroy: function () {
                for (var userId in usersList) {
                    usersList[userId].$destroy();
                    usersList[userId] = null;
                }
                if (users) {
                    users.$destroy();
                    users = null;
                }
            }
        };
    });
