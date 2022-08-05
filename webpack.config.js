const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',//输出编译完的文件的名字
        path: path.resolve(__dirname, 'dist')
    },
  };