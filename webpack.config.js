const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    },
    mode: 'development',
    devServer: {
      static: [
        { directory: path.resolve(__dirname, './dist') },
        { directory: path.resolve(__dirname, './src/images') }, 
      ],
      compress: true, 
      port: 8080, 
      open: true 
    },
    module: {
        rules: [ 
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
          },
          {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'postcss-loader']
            },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' 
          }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
      ]
};
