
function convertWaits(code){

return code.replace(/Thread.sleep\((\d+)\)/g,
"await page.waitForTimeout($1)");

}

module.exports = { convertWaits };
