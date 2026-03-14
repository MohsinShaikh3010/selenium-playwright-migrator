
function generateTest(name, steps){

return `
import { test, expect } from '@playwright/test'

test('${name}', async ({ page }) => {

${steps}

})
`;

}

module.exports = { generateTest };
