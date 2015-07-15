angular.module('eng.main', []);

angular.module('eng.main')
.controller('GeneralCtrl', [
  function() {
    var subjectPronounsData = {
      first: {
        singular: values.i,
        plural: values.we
      },
      second: {
        singular: values.you,
        plural: values.you
      },
      third: {
        singular: {
          male: values.he,
          female: values.she,
          inanimate: values.it
        },
        plural: {
          values.it
        }
      }
    };

    this.rules = [
      {
        name: 'Subject pronouns',
        values: {
          i: {name: 'I'},
          you: {name: 'you'},
          he: {name: 'he'},
          she: {name: 'she'},
          it: {name: 'it'},
          we: {name: 'we'},
          they: {name: 'they'}
        },
        one: function (params) {

        }
      }
    ];



    this.foo = this.rules[0].one(['singular', 'male', 'third']);
  }]);
