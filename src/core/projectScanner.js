
const fs = require("fs");
const path = require("path");

function scanProject(dir){

let results = [];

function scan(folder){

fs.readdirSync(folder).forEach(file=>{

const fullPath = path.join(folder,file);

if(fs.statSync(fullPath).isDirectory()){
scan(fullPath);
}
else if(file.endsWith(".java")){
results.push(fullPath);
}

});

}

scan(dir);

return results;

}

module.exports = { scanProject };
