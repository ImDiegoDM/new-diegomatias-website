const path = require('path');

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  mode:process.env.NODE_ENV || "development",
  target:"node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};