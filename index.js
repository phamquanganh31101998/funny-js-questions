#!/home/quanganh/.nvm/versions/node/v16.17.1/bin/node
import { welcome } from "./display/welcome.js";
import { askName } from "./display/askName.js";
import { question1 } from "./questions/question.js";
import { winner } from "./display/winner.js";

async function main() {
  await welcome()

  const playerName = await askName()

  await question1()

  await winner(playerName)
}

await main()


