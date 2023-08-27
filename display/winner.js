import figlet from "figlet";
import gradient from "gradient-string";

export const winner = (playerName = '') => {
  console.clear();
  const msg = `Congrats, ${playerName}!\n 1.000.000 VND`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data))
  })
}