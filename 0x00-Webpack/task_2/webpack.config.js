const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  
  module: {
    rules: [
			{
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  mode: "production",

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}

};
