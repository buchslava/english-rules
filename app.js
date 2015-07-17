angular.module('eng.main', ['ui.bootstrap']);

angular.module('eng.main')
.controller('GeneralCtrl', [
  function() {

    var self = this;

    this.arrSliceToStr = function arrSliceToStr(arr, name, div) {
      return _.pluck(arr, name).join(div || ' ');
    };

    this.terms = {
      partsOfSpeech: {
        noun: {
          ru: 'существительное',
          desc: 'кто/что'
        },
        pronoun: {
          ru: 'местоимение',
          desc: 'кто/что'
        },
        verb: {
          ru: 'глагол',
          desc: 'что делать'
        },
        adverb: {
          ru: 'наречие',
          desc: 'как где куда зачем почему'
        },
        article: {
          ru: 'артикль',
          desc: 'a the'
        },
        preposition: {
          ru: 'предлог',
          desc: 'on to in'
        },
        numerals: {
          ru: 'числительные',
          desc: 'порядковые количественные'
        }
      }
    };

    this.values = {
      i: {name: 'I'},
      you: {name: 'you'},
      he: {name: 'he'},
      she: {name: 'she'},
      it: {name: 'it'},
      we: {name: 'we'},
      they: {name: 'they'},
      am: {name: 'am'},
      is: {name: 'is'},
      are: {name: 'are'}
    };

    this.rule = {
      subjectPronouns: {
        first: function () {
          return {
            singular: function () {
              return self.values.i;
            },
            plural: function () {
              return self.values.we;
            }
          };
        },
        second: function () {
          return self.values.you;
        },
        third: function () {
          return {
            singular: function () {
              return {
                male: function () {
                  return self.values.he;
                },
                female: function () {
                  return self.values.she
                },
                inanimate: function () {
                  return self.values.it;
                }
              };
            },
            plural: function () {
              return self.values.it;
            }
          };
        }
      },
      tobe: {
        i: function () {
          return self.values.am;
        },
        you: function () {
          return self.values.are;
        },
        he: function () {
          return self.values.is;
        },
        she: function () {
          return self.values.is;
        },
        it: function () {
          return self.values.is;
        },
        we: function () {
          return self.values.are;
        },
        they: function () {
          return self.values.are;
        },
        am: function () {
          return [self.values.i];
        },
        is: function () {
          return [self.values.he, self.values.she, self.values.it];
        },
        are: function () {
          return [self.values.you, self.values.we, self.values.they];
        }
      }
    };

    this.toBeEx = {
      positive: 'I'
    }
  }]);
