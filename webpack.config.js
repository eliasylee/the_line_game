let path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/the_line_game.jsx",
  output: {
    path: './',
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
