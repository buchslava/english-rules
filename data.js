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
  })
  .constant('translations', {
    tr1: [
      {
        question: 'Где твои очки?',
        answer: 'Where are your glasses?'
      },
      {
        question: 'Это очень трудная контрольная работа.',
        answer: 'It\'s a very difficult test.'
      },
      {
        question: 'Это его проблема.',
        answer: 'It\'s his problem.'
      },
      {
        question: 'Где ваши студенты?',
        answer: 'Where are your students?'
      },
      {
        question: 'Скажите это по буквам.',
        answer: 'Spell it'
      },
      {
        question: 'Оставьте это здесь.',
        answer: 'Leave it here'
      },
      {
        question: 'Позвоните ей.',
        answer: 'Call her.'
      },
      {
        question: 'Пожалуйста, подождите меня.',
        answer: 'Please wait for me.'
      },
      {
        question: 'Эти слова трудные?',
        answer: 'Are these words difficult?'
      },
      {
        question: 'Сегодня тепло.',
        answer: 'It\'s warm today.'
      },
      {
        question: 'Это трудно или легко?',
        answer: 'Is it difficult or easy?'
      },
      {
        question: 'Это моя проблема.',
        answer: 'It\'s my problem.'
      },
      {
        question: 'Это его пальто?',
        answer: 'Is it his coat?'
      },
      {
        question: 'Чьи это адреса?',
        answer: 'Whose are these addresses?'
      },
      {
        question: 'Он болен?',
        answer: 'Is he ill?'
      },
      {
        question: 'Не ждите их.',
        answer: 'Don\'t wait for them.'
      },
      {
        question: 'Сегодня солнечно.',
        answer: 'It\'s sunny today.'
      },
      {
        question: 'Позвони мне сегодня.',
        answer: 'Call me today.'
      },
      {
        question: 'Он болен и лежит в постели.',
        answer: 'He is ill and he is in bed.'
      },
      {
        question: 'Ты готов к экзамену?',
        answer: 'Are you ready for the exam?'
      },
      {
        question: 'Твой адрес легкий.',
        answer: 'Your address is easy.'
      },
      {
        question: 'Она замужем?',
        answer: 'Is she married?'
      },
      {
        question: 'Ваш экзамен трудный.',
        answer: 'Your exam is difficult.'
      },
      {
        question: 'Позвоните его маме, пожалуйста.',
        answer: 'Call his mother please.'
      },
      {
        question: 'Где мой галстук?',
        answer: 'Where is my tie?'
      },
      {
        question: 'Встретьте его.',
        answer: 'Meet him.'
      },
      {
        question: 'Найдите его пальто.',
        answer: 'Find his coat.'
      },
      {
        question: 'Найдите их адрес или позвоните им.',
        answer: 'Find their addresses or call them?'
      },
      {
        question: 'Здесь очень жарко.',
        answer: 'It\'s very hot here.'
      },
      {
        question: 'Сегодня ветрено.',
        answer: 'It\'s windy today'
      },
      {
        question: 'Подожди его.',
        answer: 'Wait for him.'
      },
      {
        question: 'Не опаздывайте на экзамен.',
        answer: 'Don\'t late for the exam.'
      },
      {
        question: 'Она учится в университете.',
        answer: 'She is at University.'
      },
      {
        question: 'Сегодня туман.',
        answer: 'It\'s foggy today.'
      },
      {
        question: 'Это их машины?',
        answer: 'Are their cars?'
      },
      {
        question: 'Она лежит в постели?',
        answer: 'Is she in bed?'
      },
      {
        question: 'Позвони тому студенту.',
        answer: 'Call that student.'
      },
      {
        question: 'Он не женат.',
        answer: 'He isn\'t married.'
      },
      {
        question: 'Сегодня не жарко.',
        answer: 'It isn\'t hot today.'
      },
      {
        question: 'Пошлите ему два галстука.',
        answer: 'Send him two ties.'
      },
      {
        question: 'Это нелегко.',
        answer: 'This isn\'t easy.'
      },
      {
        question: 'Оставьте карту здесь.',
        answer: 'Leave the map here.'
      },
      {
        question: 'Расскажи мне об этом.',
        answer: 'Tell me about them.'
      },
      {
        question: 'Это легкая контрольная?',
        answer: 'Is it easy test?'//?
      },
      {
        question: 'Ветра нет. Солнечно.',
        answer: 'It\'s not windy. Sunny.'
      },
      {
        question: 'Открой книгу.',
        answer: 'Open the book.'
      },
      {
        question: 'Познакомьтесь с моим братом. Его зовут Боб.',
        answer: 'Meet my brother. His name is Bob.'
      },
      {
        question: 'Сегодня солнечно и не холодно.',
        answer: 'It\'s sunny and not cold today.'
      },
      {
        question: 'Не посылайте ему книги.',
        answer: 'Don\'t send him books.'
      },
      {
        question: 'Произнесите ваше имя по буквам.',
        answer: 'Spell your name.'
      }
    ],
    tr2: [
      {
        question: 'Вы готовы к контрольной работе?',
        answer: 'Are you ready for the test?'
      },
      {
        question: 'Познакомьтесь с нашим врачом.',
        answer: 'Meet our doctor.'
      },
      {
        question: 'Книга очень легкая.',
        answer: 'Book is very easy.'
      },
      {
        question: 'Где мой галстук?',
        answer: 'Where is my tie?'
      },
      {
        question: 'Произнесите их имена по буквам.',
        answer: 'Spell their names.'
      },
      {
        question: 'Их контрольные не плохи.',
        answer: 'Their tests are not bad.'
      },
      {
        question: 'Тест очень легкий.',
        answer: 'Test is very easy.'
      },
      {
        question: 'Подождите нас в машине.',
        answer: 'Wait for us in the car.'
      },
      {
        question: 'Где.этот человек? Найдите его.',
        answer: 'Where is this man? Find him.'
      },
      {
        question: 'Мы учимся в университете.',
        answer: 'We are at University.'
      },
      {
        question: 'Им тоже жарко?',
        answer: 'Are they hot too?'
      },
      {
        question: 'Не оставляйте здесь эти очки.',
        answer: 'Don\'t leave these glasses here.'
      },
      {
        question: 'Позвоните им и расскажите об этом.',
        answer: 'Call them and tell them about it.'
      },
      {
        question: 'Мы не готовы к этим экзаменам.',
        answer: 'We are not ready for these exams.'
      },
      {
        question: 'Подождите меня здесь.',
        answer: 'Wait for me here.'
      },
      {
        question: 'Это ваша проблема.',
        answer: 'This is your problem'
      },
      {
        question: 'Найдите эту карту и пришлите ее мне.',
        answer: 'Find this map and send it to me.'
      },
      {
        question: 'Сегодня холодно и солнечно.',
        answer: 'It\'s cold and sunny today.'
      },
      {
        question: 'Ее контрольная работа очень трудна.',
        answer: 'Her test is very difficult.'
      },
      {
        question: 'Его пальто большое.',
        answer: 'His coat is big.'
      },
      {
        question: 'У него легкий адрес. Найдите его.',
        answer: 'His address is very easy. Find it.'
      },
      {
        question: 'Оставьте пальто здесь.',
        answer: 'Leave the coat here.'
      },
      {
        question: 'Джо и Питер тоже учатся в университете?',
        answer: 'Are Joe and Peter at University too?'
      },
      {
        question: 'Почему вы опаздываете?',
        answer: 'Why are you late?'
      },
      {
        question: 'Где его квартира?',
        answer: 'Where his house?'
      },
      {
        question: 'Она сегодня болеет. Позвони ей.',
        answer: 'She is ill today. Call her.'
      },
      {
        question: 'Откройте эту книгу. Она об Англии.',
        answer: 'Open this book. It\'s about England.'
      },
      {
        question: 'Пришлите им эти тесты сегодня.',
        answer: 'Send them these tests today.'
      },
      {
        question: 'Готовься к экзаменам. Они трудные.',
        answer: 'Be ready for the exams. They are difficult.'
      },
      {
        question: 'Произнесите слово по буквам.',
        answer: 'Spell the word.'
      },
      {
        question: 'Вы сегодня рано.',
        answer: 'You are early today.'
      },
      {
        question: '— Где его машина? — Она там.',
        answer: '- Where is his car? - It\'s there.'
      },
      {
        question: 'Врач здесь.',
        answer: 'The doctor is here.'
      },
      {
        question: 'Найдите врача. Он болен.',
        answer: 'Find the doctor. He is ill.'
      },
      {
        question: 'Встретьте ее сегодня.',
        answer: 'Meet her today.'
      },
      {
        question: 'Не ждите этого врача здесь.',
        answer: 'Don\'t wait this doctor here.'
      },
      {
        question: 'Мне холодно. Где мое пальто?',
        answer: 'I\'m cold. Where is my coat.'
      },
      {
        question: 'Откройте вашу квартиру. Ключ здесь.',
        answer: 'Open your flat. The key are here.'
      },
      {
        question: 'Та квартира плохая. Найдите хорошую квартиру.',
        answer: 'That flat is bad. Find a good flat.'
      },
      {
        question: 'Как их зовут?',
        answer: 'What are their names?'
      },
      {
        question: 'Этих студентов здесь нет. Найдите их.',
        answer: 'Those students are not here. Find them.'
      },
      {
        question: 'Не опаздывайте сегодня.',
        answer: 'Don\'t be late today.'
      },
      {
        question: 'Сколько им лет?',
        answer: 'How old are they?'
      },
      {
        question: 'Она не замужем.',
        answer: 'SHe is not married.'
      },
      {
        question: 'Этот экзамен трудный, а тот экзамен — легкий.',
        answer: 'This exam is difficult, but that exam is easy.'
      },
      {
        question: 'Почему вы здесь?',
        answer: 'Why are you here?'
      },
      {
        question: 'Найдите этого преподавателя. Он хороший преподаватель.',
        answer: 'Find this teacher. He is a good teacher.'
      },
      {
        question: '— Где мои ключи? — Они в машине.',
        answer: '- Where are my keys? They are in the car.'
      },
      {
        question: 'Позвони мне и жди меня здесь.',
        answer: 'Call me and wait for me here.'
      },
      {
        question: 'Мы из Лондона. Там туман.',
        answer: 'We are from London. It\'s foggy there.'
      }
    ]
  });