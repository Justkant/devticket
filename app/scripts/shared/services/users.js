'use strict';

angular.module('workingRoom')
  .factory('Users', function (Ref, $firebaseArray, $firebaseObject, $q, Toasts) {
    var ref = Ref.child('users');
    var users = null;
    var user = null;

    function destroyIfExist() {
      if (user) {
        user.$destroy();
        user = null;
      }
    }

    return {
      all: function () {
        if (!users) {
          users = $firebaseArray(ref);
        }
        return users;
      },
      get: function (uid) {
        destroyIfExist();
        user = $firebaseObject(ref.child(uid));
        return user;
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
      destroy: function () {
        destroyIfExist();
        if (users) {
          users.$destroy();
          users = null;
        }
      }
    };
  });
