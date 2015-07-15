angular.module('eng.main', []);

angular.module('eng.main')
.controller('GeneralCtrl', [
  function() {

    var model = {
      subjectPronouns: {
        data: {
          first: {
            singular: this.values.i, plural: this.values.we
          },
          second: {
            singular: values.you, plural: values.you
          },
          third: {
            singular: {
              male: this.values.he,
              female: this.values.she,
              inanimate: this.values.it
            },
            plural: values.it
          }
        },
        params: [
          {name: 'sort', cases: ['first', 'second', 'third']},
          {name: 'tally', cases: ['singular', 'plural']},
          {name: 'kind', cases: ['male', 'female', 'inanimate']}
        ],
        values: {
          i: {name: 'I'},
          you: {name: 'you'},
          he: {name: 'he'},
          she: {name: 'she'},
          it: {name: 'it'},
          we: {name: 'we'},
          they: {name: 'they'}
        }
      }
    };

    function one(modelKey, descriptor) {
      for (var i = 0; i < model[modelKey].params.length; i++) {
        if (typeof model[modelKey].params[i] === 'object') {

        }
      }
    }

    this.foo = one('subjectPronouns', {tally: 'singular', kind: 'male', sort: 'third'});
  }]);
