
const fs = require("fs");

function createFramework(output){

fs.mkdirSync(`${output}/tests`,{recursive:true});
fs.mkdirSync(`${output}/pages`,{recursive:true});

fs.writeFileSync(`${output}/playwright.config.ts`,
`import { defineConfig } from '@playwright/test'
export default defineConfig({})
`);

}

module.exports = { createFramework };
