var getPackageWebpackConfig = require('../../getPackageWebpackConfig');

module.exports = getPackageWebpackConfig({
  packageName: '@cassette/core',
  hasStyles: false,
  entrySrc: './src/index.js'
});
