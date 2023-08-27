import { createSpinner } from "nanospinner";
import { sleep } from "../utils/index.js";

export async function handleAnswer(isCorrect) {
  const spinner = createSpinner('I wonder if you are correct...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({text: 'Good job! You are correct'})
  } else {
    spinner.error({text: 'Idiot! That is an incorrect answer. Never see you again!'})
    process.exit(1)
  }
}