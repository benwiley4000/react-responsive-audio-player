var getPackageWebpackConfig = require('../../getPackageWebpackConfig');

module.exports = getPackageWebpackConfig({
  packageName: '@cassette/hooks',
  hasStyles: false,
  entrySrc: './src/index.js'
});
