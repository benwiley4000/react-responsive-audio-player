var getPackageWebpackConfig = require('../../getPackageWebpackConfig');

module.exports = getPackageWebpackConfig({
  packageName: '@cassette/components',
  hasStyles: false,
  entrySrc: './src/index.js'
});
