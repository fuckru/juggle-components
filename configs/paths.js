var path = require('path');

var basePath = path.resolve(__dirname, '..');
var src = path.resolve(basePath, './src');

module.exports = {
  src: src,
  dist: path.resolve(basePath, 'dist'),
  configs: path.resolve(basePath, 'configs'),
  docs: path.resolve(basePath, 'docs'),
  components: path.resolve(src, 'components'),
  libs: path.resolve(src, 'libs'),
  styles: path.resolve(src, 'styles'),
  index: path.resolve(src, 'index.js'),
  pkg: path.resolve(basePath, 'package.json'),
};