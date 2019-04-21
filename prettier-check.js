const glob = require('glob');
const fs = require('fs');
const prettier = require('prettier');

const prettierrc = require('./.prettierrc.json');

const prettierignore = fs
  .readFileSync('./.prettierignore')
  .toString()
  .split('\n')
  .filter(Boolean)
  .map(dir => dir + '/**');

const files = process.argv.slice(2).reduce((files, g) => {
  return files.concat(glob.sync(g, { ignore: prettierignore }));
}, []);

Promise.all(
  files.map(filepath => {
    return readFile(filepath).then(data => {
      if (
        !prettier.check(
          data.toString(),
          Object.assign({ filepath }, prettierrc)
        )
      ) {
        return Promise.reject();
      }
    });
  })
).catch(() => {
  // eslint-disable-next-line no-console
  console.error('Please run prettier: `npm run prettier`\n');
  process.exit(1);
});

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
