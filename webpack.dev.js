// const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   entry: ['./src/deepstream'],
//   output: {
//     path: __dirname,
//     filename: './dist/bundle/ds.js',
//     library: 'DeepstreamClient',
//     libraryTarget: 'module',
//     globalObject: 'this'
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   module: {
//     rules: [{
//       test: /\.ts$/,
//       loader: 'ts-loader',
//       exclude: /node_modules/
//     }],
//   },
//   plugins: [
//     new webpack.IgnorePlugin(/url/),
//     new webpack.IgnorePlugin(/ws/),
//   ],
//   node: {
//     fs: 'empty',
//     module: 'empty',
//     url: 'empty',
//   },
//   experiments: {
//     // asyncWebAssembly: true,
//     // buildHttp: true,
//     // layers: true,
//     // lazyCompilation: true,
//     outputModule: true,
//     // syncWebAssembly: true,
//     // topLevelAwait: true,
//   },
// };


const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: __dirname,
    filename: './dist/bundle/lib.js',
    library: 'Libname',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }],
  },
  // plugins: [
  //   new webpack.IgnorePlugin(/url/),
  //   new webpack.IgnorePlugin(/ws/),
  // ],
  // node: {
  //   fs: 'empty',
  //   module: 'empty',
  //   url: 'empty',
  // }
};
