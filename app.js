angular.module('eng.main', ['ui.bootstrap']);

angular.module('eng.main')
  .directive("quizWithOptions", ['$compile', function ($compile) {
    return {
      restrict: 'AE',
      link: function (scope, element) {
        scope.foo = 'bar';
        scope.fff = function () {
          console.log('!!!');
        };
        //console.log(element[0].children);
        for (var i = 0; i < element[0].children.length; i++) {
          console.log(element[0].children[i].innerHTML, element[0].children[i].attributes);
        }
        element.html($compile("<a href ng-click='fff()'>{{foo}}</a>")(scope));
      }
    };
  }])
  .controller('GeneralCtrl', [
    function () {

      var self = this;s
    }]);
