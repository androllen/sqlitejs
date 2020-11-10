const fs = require('fs');
const { join, dirname } = require('path');

export async function getShell() {

  console.log('dirname', __dirname);
  let fileLocation = join(dirname(__dirname), 'TXThrift', 'myText.txt');
  console.log(fileLocation);

  let newDate = new Date().toLocaleString();

  await fs.writeFileSync(fileLocation, newDate)
  // const extraContents = fs.readFileSync(fileLocation, 'utf8');
}