import inquirer from "inquirer";

export const askName = async (message = 'Tell us your name?', defaultName = 'Anonymous') => {
  const answers = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message,
    default() {
      return defaultName
    }
  })
  return answers.name
}
