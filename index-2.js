import prompts from "prompts"
import inquirer from "inquirer";

// use this to store userinfo
const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
    validate: (age) => age < 18 ? "Only fans" : true
  },
  {
    type: 'password',
    name: 'secret',
    message: 'Tell me a secret',
    initial: 'My crush name is...'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  },
  {
    type: 'confirm',
    name: 'confirmed',
    message: 'Can you confirm?'
  },
  {
    type: prev => prev && 'toggle',
    name: 'confirmtoggle',
    message: 'Can you confirm again?',
    active: 'yes',
    inactive: 'no'
  },
];

const p = async () => {
  const response = await prompts(questions)
  console.log(response)
  inquirer
    .prompt([
      {
        name: 'faveReptile',
        message: 'What is your favorite reptile?',
        default: 'Alligators'
      },
      {
        name: 'faveColor',
        message: 'What is your favorite color?',
        default: '#008f68'
      },
      {
        type: 'list',
        name: 'reptile-1',
        message: 'Which is better?',
        choices: ['alligator', 'crocodile'],
      },
      {
        type: 'rawlist',
        name: 'reptile-2',
        message: 'Which is better?',
        choices: ['alligator', 'crocodile'],
      },
      {
        type: 'checkbox',
        name: 'reptiles-3',
        message: 'Which reptiles do you love?',
        choices: [
          'Alligators', 'Snakes', 'Turtles', 'Lizards',
        ],
      },
    ])
    .then(answers => {
      console.info('Answer:', answers);
    });
}

p()