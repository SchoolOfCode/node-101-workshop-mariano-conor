// let myCollection = [
//     {
//       name: "School of Code mug",
//       count: 1,
//       whatILike: "It has my cute pixel character on it!"
//     },
//     {
//       name: "School of Code hat",
//       count: 2,
//       whatILike: "An often overlooked fashion accessory"
//     },
//     {
//       name: "School of Code pillow",
//       count: 1,
//       whatILike: "Eat. Sleep. Code. Repeat :)"
//     }
//   ];

import { collection } from "./collection.js"
import chalk from 'chalk';

function describeItem(item){
    if(item.count === 1){
        console.log(`We have a ${chalk.cyan.bold(item.name)}. Here's what I like about it: ${chalk.green.underline(item.whatILike)}`)
    } else {
        console.log(chalk.bgRed(`We have ${chalk.yellow.bold(item.count)} ${chalk.cyan.bold(item.name)}s. Here's what I like about them: ${chalk.green.underline(item.whatILike)}`))
    }
    
}

function describeCollection(array){
  array.forEach(describeItem)
}

describeCollection(collection);


