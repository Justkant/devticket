'use strict';

angular.module('workingRoom')
  .directive('fixBottom', function ($window, $document) {
    return {
      restrict: 'E',
      scope: {
        updateFunc: '='
      },
      link: function (scope, element) {
        var watcher = scope.$watch('updateFunc', function () {
          if (scope.updateFunc) {
            scope.updateFunc.updateFunc = function () {
              var rect = element.getBoundingClientRect();

              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= ($window.innerHeight || $document.documentElement.clientHeight) &&
                rect.right <= ($window.innerWidth || $document.documentElement.clientWidth)
              );
            };
            watcher();
          }
        });
      }
    };
  });
