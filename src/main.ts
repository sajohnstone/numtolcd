import { bgBlue, red, bold } from "https://raw.githubusercontent.com/denoland/deno/master/std/fmt/colors.ts";

const sayHello = (name: string = "world") => {
  console.log(bgBlue(red(bold(`Welcome to Deno 🦕 ${name}!`))));
  return `Welcome to Deno 🦕 ${name}!`
}

sayHello();
sayHello("Conlin");

export default sayHello;