
const { execSync } = require("child_process");

async function cloneRepo(repoUrl, outputFolder){

console.log("Cloning repository...");

execSync(`git clone ${repoUrl} ${outputFolder}`,{stdio:"inherit"});

}

module.exports = { cloneRepo };
