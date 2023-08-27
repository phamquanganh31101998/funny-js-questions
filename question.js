import inquirer from "inquirer";
import { handleAnswer } from "./handleAnswer.js";

export const question1 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Which one is the capital of Vietnam?\n',
    choices: [
      "Hanoi",
      "Beijing",
      "Tokyo",
      "Bangkok"
    ]
  })
  return handleAnswer(answers.question_1 === "Hanoi")
}