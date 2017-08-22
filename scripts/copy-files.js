const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const SOURCE = path.join(__dirname, '..', 'dist');
const filenames = fs.readdirSync(SOURCE).map(name => name);

function copyFile(file) {
  const sourcePath = filename => path.join(SOURCE, filename);
  const buildPath = path.resolve(__dirname, '..', path.basename(file));
  return new Promise((resolve) => {
    fse.copy(sourcePath(file), buildPath, (err) => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${buildPath}`));
}

filenames.map(filename => copyFile(filename));
