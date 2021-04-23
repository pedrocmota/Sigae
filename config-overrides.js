const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new DuplicatePackageCheckerPlugin()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}