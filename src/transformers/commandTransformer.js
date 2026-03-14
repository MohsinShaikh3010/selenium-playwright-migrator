
function convertCommands(code){

code = code.replace(/driver.get/g,"await page.goto");

code = code.replace(/sendKeys/g,"fill");

code = code.replace(/click\(\)/g,"click()");

return code;

}

module.exports = { convertCommands };
