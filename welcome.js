import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import { sleep } from "./util.js";

export async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Who Wants To Be A Javascript Millionaire? \n");

  await sleep();
  rainbowTitle.stop()

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY?')}
    I am a ${chalk.green('process')} on your computer (not ${chalk.blue('princess')}, ${chalk.green('process')}, please speak correctly)
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `)
}
