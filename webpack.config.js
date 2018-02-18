const path = require('path');

module.exports = {
  entry: "./src/containers/Provider.js", 
  output: {
    path: path.join(__dirname, 'build'), 
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
        query: { presets: ['es2015', 'react']}
      }
    ]
  }
};