'use strict';

angular.module('workingRoom')
  .factory('Users', function (Ref, $firebaseArray, $firebaseObject) {
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
      create: function (uid, email, name, admin) {
        var def = $q.defer();

        ref.child(uid).set({
          email: email,
          name: name,
          admin: admin
        }, function (err) {
          if (err) {
            def.reject(err);
          } else {
            def.resolve(ref.child(uid));
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
