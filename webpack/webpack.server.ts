import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';

import common from './common';

const isPROD = process.env.NODE_ENV === 'production';

export default merge({}, common, {
  name: 'server',
  entry: './server',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: common.output.publicPath,
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      CLIENT_BUNDLE: JSON.stringify(
        isPROD
          ? require('../build/assets.json').client.js
          : '/assets/client.js'),
      VENDOR_BUNDLE: JSON.stringify(
        isPROD
          ? require('../build/assets.json').vendor.js
          : '/assets/vendor.js'),
    }),
  ],
  externals: [
    nodeExternals(),
  ],
});
