// snapshots.js
const PercyScript = require('@percy/script');
// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://www.wealthwizards.com/jobs/lead-quality-engineer');
  await percySnapshot('QARole');
// Enter a new to-do.
 
  await percySnapshot('QARole-widths', { widths: [768, 992, 1200] });
});