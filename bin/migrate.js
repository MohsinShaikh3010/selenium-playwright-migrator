
#!/usr/bin/env node

const { cloneRepo } = require("../src/core/repoCloner");
const { scanProject } = require("../src/core/projectScanner");
const { convertCommands } = require("../src/transformers/commandTransformer");
const fs = require("fs");

const repo = process.argv[2];
const output = process.argv[3] || "./playwright-project";

async function migrate(){

console.log("Starting Selenium → Playwright migration");

await cloneRepo(repo,"./selenium-project");

const files = scanProject("./selenium-project");

console.log("Found Selenium files:",files.length);

files.forEach(file=>{

let code = fs.readFileSync(file,"utf8");

code = convertCommands(code);

console.log("Converted:",file);

});

}

migrate();
