#!/usr/bin/env node

import {
  bold,
  foregroundBlue,
  foregroundCyan,
  foregroundRed,
  foregroundYellow,
  mix,
  underlined,
} from "@vangware/ansi";
import boxen from "boxen";
import clear from "clear";

const link = mix([foregroundCyan, underlined]);
const name = mix([foregroundCyan, bold]);
const isWindows = process.platform === "win32";

const message = `
Hello there!

I'm ${name`Florencia Gonzalez`} / ${name`@rightonhana`}

${(isWindows
  ? [
      "  ▐▀▄      ▄▀▌    ▄▄▄▄▄▄▄",
      "  ▌▒▒▀▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄",
      " ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄",
      " ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄",
      "▀█▒▒█▌▒▒█▒▒▐█▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌",
      "▀▌▒▒▒▒▒▀▒▀▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐ ▄▄",
      "▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄█▒█",
      "▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀",
      " ▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌",
      "     ▀▄▄▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀▀▀▀▀▀▄▄▀",
    ]
  : [
      "⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻⣿⣿",
      "⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿⣿",
      "⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿⣿",
      "⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿⣿",
      "⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻",
      "⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼",
      "⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿",
      "⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿⣿",
      "⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿",
      "⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿",
      "⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿",
      "⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿",
      "⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⢸⣿",
      "⡏⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿",
    ]
)
  .map(foregroundCyan)
  .join("\n")}

I'm a Front-end Developer with experience in Angular, React and Svelte.
I love cats and my hobbies are playing games and learn new technologies.
I'm from ${foregroundCyan`Ar`}ge${foregroundYellow`n`}ti${foregroundCyan`na`} but I'm currently living in the ${foregroundRed`U`}${foregroundBlue`S`}A.

${bold`Pronouns`}: She / Her


If you want to know more about me:

${bold`Github`}: ${link`https://github.com/rightonhana`}
${bold`NPM`}: ${link`https://www.npmjs.com/~rightonhana`}
${bold`Website`}: ${link`https://rightonhana.me/`}
`;

export default [
  clear(),
  console.log(
    boxen(message, {
      align: "center",
      borderColor: "cyan",
      borderStyle: "double",
      float: "center",
      padding: 1,
    })
  ),
];
