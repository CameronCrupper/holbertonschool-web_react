const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        static: ["./dist"]
    },
    output: {
      path: path.resolve('./dist'),
      filename: 'bundle.js',
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [ "style-loader", "css-loader" ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        }
      ],
    },
    // plugins: [
    //   new CleanWebpackPlugin(),
    //   new HtmlWebpackPlugin({
    //     template: path.join(__dirname, "dist", "index.html"),
    //   }),
    // ],
};
