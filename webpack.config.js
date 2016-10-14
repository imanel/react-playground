module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react'],
          plugins: ['transform-object-rest-spread'],
        }
      }
    ]
  }
}
