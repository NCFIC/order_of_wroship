// webpack.config.js

module.exports = {
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', { modules: false }],
          ],
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};