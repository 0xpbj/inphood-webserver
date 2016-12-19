var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './assets/js/index',
  ],
  output: {
    //where you want your compiled bundle to be stored
    path: path.resolve('./assets/bundles/'), 
    //naming convention webpack should use for your files
    filename: '[name]-[hash].js', 
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}), 
    //makes jQuery available in every module
    new webpack.ProvidePlugin({ 
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery' 
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        include: path.join(__dirname, 'assets/js/'),
        query: {
            //specify that we will be dealing with React code
            presets: ['react'] 
        }
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
