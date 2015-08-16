angular.module('eng.main', ['ngMaterial']);

angular.module('eng.main')
  .directive('drill', ['$compile', '$interval', '$filter', 'drills',
    function ($compile, $interval, $filter, drills) {
      return {
        restrict: 'AE',
        link: function (scope, element, attr) {
          if (!attr.set || !drills[attr.set]) {
            console.log('Wrong set: ' + attr.set);
            return;
          }

          scope.expectedSet = _.clone(drills[attr.set]);

          var timer = null;
          var startTime = null;

          function startTimer() {
            scope.message = '';

            startTime = new Date();
            go();

            function go() {
              var currentTime = new Date();
              var time = $filter('date')(new Date(currentTime - startTime), 'mm:ss');
              scope.message = time;
            }

            timer = $interval(go, 1000);
          }

          function stopTimer() {
            if (angular.isDefined(timer)) {
              $interval.cancel(timer);
            }
          }

          function isRight() {
            var correctWay = _.findWhere(this.answers, {right: true});
            return correctWay && this.result && this.result === correctWay.name;
          }

          scope.start = function start() {
            var _expectedSet = _.clone(drills[attr.set]);

            for (var i = 0; i < scope.expectedSet.length; i++) {
              _expectedSet[i].answers = _.shuffle(_expectedSet[i].answers);
              _expectedSet[i].result = '';
              _expectedSet[i].isRight = isRight;
            }

            scope.expectedSet = _expectedSet;
            render();
            startTimer();
          };

          scope.check = function check() {
            var processed = 0;
            var fail = false;
            for (var i = 0; i < scope.expectedSet.length; i++) {
              if (scope.expectedSet[i].result) {
                processed++;
              }

              if (!scope.expectedSet[i].isRight() && scope.expectedSet[i].result) {
                fail = true;
                break;
              }
            }

            if (fail || processed >= scope.expectedSet.length) {
              stopTimer();
            }
          };

          render();

          function render() {
            var content = '';

            for (var i = 0; i < scope.expectedSet.length; i++) {
              var item = scope.expectedSet[i];
              content += '<h4 ng-class="{\'ok\': expectedSet[' + i +
              '].isRight() && expectedSet[' + i + '].result, \'notOk\': !expectedSet[' + i + '].isRight() && ' +
              'expectedSet[' + i + '].result}">' +
              item.question + '</h4><div>{{message}}</div>' +
              '<md-radio-group ng-change="check()" ng-model="expectedSet[' + i + '].result">';
              for (var j = 0; j < item.answers.length; j++) {
                var answer = item.answers[j];
                content += '<md-radio-button ng-disabled="expectedSet[' + i +
                '].result !== \'\'" value="' + answer.name + '">' +
                '<span ng-class="{\'okResult\': expectedSet[' + i +
                '].result && expectedSet[' + i + '].answers[' + j + '].right === true}">{{ expectedSet['
                + i + '].answers[' + j + '].name }}{{expectedSet['
                + i + '].answers[' + j + '].right}}</span></md-radio-button>';
              }
              content += '</md-radio-group>';

              if (i < scope.expectedSet.length - 1) {
                content += '<hr />';
              }
            }

            element.empty();
            element.append($compile(content)(scope));
          }

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
