const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Simple Random Password Generator").

program
    .option("-l, --length <number>", "length of password", "8")
    .option("-s, --save", "save password to passwords.txt")
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns, --no-symbols", "remove symbols")
    .parse();

const {length, save, numbers, symbols} = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
console.log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));

// Copy password to clipboard
clipboardy.writeSync(generatedPassword);
console.log(chalk.yellow("Password copied to clipboard"));

// Save password to a file
if (save) {
    savePassword(generatedPassword);
}