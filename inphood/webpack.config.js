var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './assets/js/index'
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel-loader'],
        // loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015', 'stage-0'],
        //   plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        // }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }, 
      { 
        test: /\.svg$/, 
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react' 
      },
    ]
  },
  resolve: {
      //tells webpack where to look for modules
      modulesDirectories: ['node_modules'],
      //extensions that should be used to resolve modules
      extensions: ['', '.js', '.jsx'] 
  }  
};
