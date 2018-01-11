const path = require('path');

module.exports = {
  entry: './app/ts/index.tsx',
  output: {
    path: path.resolve(__dirname, './app/build/js/'),
    filename: 'bundle.js'
  },
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app/ts'),
      path.resolve(__dirname, 'app/sass')
    ],
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css']
  }
}