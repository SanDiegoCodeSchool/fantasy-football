const path = require('path');

const config = {
devtool:'source-map',
  entry: [
      path.resolve(__dirname, 'client', 'src', 'index.js'), 
      path.resolve(__dirname, 'client', 'src', 'styles.scss')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules : [
       path.resolve("./src"),
       path.resolve("./node_modules")
    ],
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    }, {
      // Match woff2 in addition to patterns like .woff?v=1.1.1.
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          name: './fonts/[name].[ext]',
        },
      },
    }],
  },
};

module.exports = config;