angular.module('eng.main', ['ngMaterial']);

angular.module('eng.main')
  .directive('drill', ['$compile', 'drills', function ($compile, drills) {
    return {
      restrict: 'AE',
      link: function (scope, element, attr) {
        if (!attr.set || !drills[attr.set]) {
          console.log('Wrong set: ' + attr.set);
          return;
        }

        scope.start = function start() {
          for (var i = 0; i < drills[attr.set].length; i++) {
            drills[attr.set][i].result = '';
          }
        };

        scope.check = function check() {
          for (var i = 0; i < drills[attr.set].length; i++) {
            for (var j = 0; j < drills[attr.set][i].answers.length; j++) {
              if (drills[attr.set][i].result && drills[attr.set][i].result.length > 0) {
                drills[attr.set][i].answers[j].name +=
                  drills[attr.set][i].answers[j].right === true &&
                  drills[attr.set][i].result === drills[attr.set][i].answers[j].name ?
                    '[ok]' : '';
              }
            }
          }
        };

        scope.drills = drills;
        var content = '';
        
        for (var i = 0; i < drills[attr.set].length; i++) {
          var item = drills[attr.set][i];
          content += '<h4>' + item.question + '</h4>' +
          '<md-radio-group ng-change="check()" ng-model="drills.' + attr.set + '[' + i + '].result">';
          for (var j = 0; j < item.answers.length; j++) {
            var answer = item.answers[j];
            content += '<md-radio-button ng-disabled="drills.' + attr.set + '[' + i +
            '].result !== \'\'" value="' + answer.name + '">{{ drills.' + attr.set + '[' + i + '].answers[' + j + '].name }}</md-radio-button>';
          }
          content += '</md-radio-group>';

          if (i < drills[attr.set].length - 1) {
            content += '<hr />';
          }
        }

        element.append($compile(content)(scope));
      }
    };
  }])
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
  .controller('GeneralCtrl', ['drills',
    function (drills) {
      var self = this;
      self.tabs = {
        selectedIndex: 0
      };
      self.data = drills;
    }]);
