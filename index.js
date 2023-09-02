#!/home/quanganh/.nvm/versions/node/v16.17.1/bin/node
import { welcome } from "./display/welcome.js";
import { askName } from "./display/askName.js";
import { question1 } from "./questions/question.js";
import { winner } from "./display/winner.js";
import dotenv from "dotenv";

// Can use in command like this: node -r dotenv/config index.js
dotenv.config()

process.on('exit', () => {
  console.log('Bye bye!')
})

async function main() {
  try {
    console.log(process.env.NODE_ENV)

    console.log(process.env.PORT)

    console.log("--------------------------------")

    await welcome()

    const playerName = await askName()

    await question1()

    await winner(playerName)

    process.exitCode = 0
  } catch (e) {
    console.error(e)
    process.exitCode = 1
  }
}

// await main()


