
function convertLocators(code){

code = code.replace(/By.id\("(.*?)"\)/g,"locator('#$1')");

code = code.replace(/By.name\("(.*?)"\)/g,"locator('[name=\"$1\"]')");

code = code.replace(/By.xpath\("(.*?)"\)/g,"locator('xpath=$1')");

return code;

}

module.exports = { convertLocators };
