const chalk = require("chalk");
const inquirer = require("inquirer");
const package = require("./package.json");

const client = require("./client");
const match = require("./server");

console.clear();
console.log(`--- ${chalk.yellow("Pokèmon")} ${chalk.red("ONLINE")} ---`);
console.log(` ${chalk.green("Node Edition")} v${package.version}`);

inquirer.prompt([{
    type: "number",
    name: "match",
    message: `Enter a match code to connect: ${chalk.dim("(Leave blank to create one)")}`
}]).then((data) => {
    let matchName = data.match;
    if (isNaN(matchName)) {
        match();
    } else {
        client(matchName);
    }
});