var getPackageWebpackConfig = require('../../getPackageWebpackConfig');

module.exports = getPackageWebpackConfig({
  packageName: '@cassette/player',
  hasStyles: true,
  entrySrc: './src/index.js'
});
