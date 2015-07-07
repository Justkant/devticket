'use strict';

angular.module('workingRoom')
  .factory('User', function (Ref, $firebaseArray, $firebaseObject) {
    var ref = Ref.child('users');
    var users = null;
    var user = null;

    function destroyIfExist() {
      if (user) {
        user.$destroy();
        user = null;
      }
    }

    // Public API here
    return {
      all: function () {
        if (!users) {
          users = $firebaseArray(usersRef);
        }
        return users;
      },
      get: function (uid) {
        destroyIfExist();
        user = $firebaseObject(usersRef.child(uid));
        return user;
      },
      create: function (uid, email, name, admin) {
        var ref = usersRef.child(uid),
          def = $q.defer();
        ref.set({
          email: email,
          name: name,
          admin: admin
        }, function (err) {
          $timeout(function () {
            if (err) {
              def.reject(err);
            } else {
              def.resolve(ref);
            }
          });
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
