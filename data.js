angular.module('eng.main')
  .constant('drills', {
    first: [
      {
        question: 'Где ты?',
        answers: [
          {name: 'Where are you?', right: true},
          {name: 'Where is you?'},
          {name: 'Where is they?'},
          {name: 'Where I am?'}
        ]
      }, {
        question: 'Когда она "бывает"?',
        answers: [
          {name: 'When is she?', right: true},
          {name: 'When are she?'},
          {name: 'Where are she?'},
          {name: 'Where she are?'},
          {name: 'When she is?'}
        ]
      }, {
        question: 'Кто "бывает"?',
        answers: [
          {name: 'Who is?', right: true},
          {name: 'Who are?'}
        ]
      }, {
        question: 'Где они "бывают"?',
        answers: [
          {name: 'Where are they?', right: true},
          {name: 'Where are them?'},
          {name: 'Where is they?'},
          {name: 'When are they?'},
          {name: 'When is they?'}
        ]
      }, {
        question: 'Когда они там "бывают"?',
        answers: [
          {name: 'Where are they their?', right: true},
          {name: 'Where are they?'},
          {name: 'Where is they?'},
          {name: 'Where are them their?'},
          {name: 'Where is their?'}
        ]
      }, {
        question: 'Кто там?',
        answers: [
          {name: 'Who is there?', right: true},
          {name: 'Who are there?'},
          {name: 'Who are them?'},
          {name: 'Whose is there?'},
          {name: 'Whose are there?'}
        ]
      }, {
        question: 'Где она?',
        answers: [
          {name: 'Where is she?', right: true},
          {name: 'Where are she?'},
          {name: 'When are she?'},
          {name: 'When is she?'},
          {name: 'Where she is?'}
        ]
      }, {
        question: 'Она не "бывает".',
        answers: [
          {name: 'She isn\'t.', right: true},
          {name: 'Isn\'t she.'}
        ]
      }, {
        question: 'А он "бывает"?',
        answers: [
          {name: 'Is he?', right: true},
          {name: 'He is?'},
          {name: 'Is it?'}
        ]
      }, {
        question: 'А ты "бываешь"?',
        answers: [
          {name: 'Are you?', right: true},
          {name: 'Is you?'},
          {name: 'You is?'}
        ]
      }, {

        question: 'А вы "бываете"?',
        answers: [
          {name: 'Are you?', right: true},
          {name: 'Is you?'},
          {name: 'You is?'}
        ]
      }, {
        question: 'Мы не "бываем".',
        answers: [
          {name: 'We are not.', right: true},
          {name: 'We not are.'},
          {name: 'We not is.'},
          {name: 'We is not.'},
          {name: 'We not.'}
        ]
      }, {
        question: 'Я не "бываю".',
        answers: [
          {
            name: 'I\'m not.', right: true
          },
          {name: 'Not I.'},
          {name: 'I not.'},
          {
            name: 'I\'m be.'
          },
          {name: 'I not be.'}
        ]
      }, {
        question: 'Где я "бываю"?',
        answers: [
          {name: 'Where am I?', right: true},
          {name: 'When am I?'},
          {name: 'When I am?'},
          {name: 'Where I am?'}
        ]
      }, {

        question: 'Где он "бывает"?',
        answers: [
          {name: 'Where is he?', right: true},
          {name: 'Where is she?'},
          {name: 'When is he?'},
          {name: 'Where he is?'},
          {name: 'When he is?'}
        ]
      }, {
        question: 'Кто здесь?',
        answers: [
          {name: 'Who is here?', right: true},
          {name: 'Who is there?'},
          {name: 'Who are here?'},
          {name: 'What is here?'},
          {name: 'What are here?'}
        ]
      }, {
        question: 'Он здесь?',
        answers: [
          {name: 'Is he here?', right: true},
          {name: 'Are he here?'},
          {name: 'Are he there?'},
          {name: 'He is here?'},
          {name: 'Is he there?'}
        ]
      }, {
        question: 'Он не здесь.',
        answers: [
          {name: 'He is not here.', right: true},
          {name: 'He is not there.'},
          {name: 'It\'s not there.'},
          {name: 'He not there.'},
          {name: 'She not there.'}
        ]
      }, {

        question: 'Почему они не здесь?',
        answers: [
          {name: 'Why are they not here?', right: true},
          {name: 'Why is they not here?'},
          {name: 'What is this not here?'},
          {name: 'Why are they not there?'},
          {name: 'What are they not here?'}
        ]
      }, {
        question: 'Почему она здесь?',
        answers: [
          {name: 'Why is she here?', right: true},
          {name: 'Why is she there?'},
          {name: 'Why are she here?'},
          {name: 'Why is she there?'},
          {name: 'Why is it here?'},
          {name: 'Why it\'s here ? '}
        ]
      }, {
        question: 'Почему вы не "бываете"?',
        answers: [
          {name: 'Why are you not?', right: true},
          {name: 'Why you not are?'},
          {name: 'Why is you not?'},
          {name: 'What are you not?'},
          {name: 'What are not you?'}
        ]
      }, {
        question: 'Почему вы здесь?',
        answers: [
          {name: 'Why are you here?', right: true},
          {name: 'When are you here?'},
          {name: 'Why are they here?'},
          {name: 'Why are they there?'},
          {name: 'Why are you there?'}
        ]
      }, {
        question: 'Почему они там?',
        answers: [
          {name: 'Why are they there?', right: true},
          {name: 'Why are then there?'},
          {name: 'Why are them here?'}
        ]
      }, {
        question: 'Ты не здесь.',
        answers: [
          {name: 'You are not here.', right: true},
          {name: 'You not here.'},
          {name: 'You are not there.'},
          {name: 'I\'m not here.'}
        ]
      }
    ]
  });