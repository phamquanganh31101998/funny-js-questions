#!/home/quanganh/.nvm/versions/node/v16.17.1/bin/node
import { welcome } from "./welcome.js";
import { askName } from "./askName.js";
import { question1 } from "./question.js";
import { winner } from "./winner.js";

async function main() {
  await welcome()

  const playerName = await askName()

  await question1()

  await winner(playerName)
}

await main()


