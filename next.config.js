require('dotenv').config()
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);

const prodip = "http://vav.research.cs.dal.ca/hrm/";
const devip = "http://localhost:3000/";
const apikey= JSON.stringify(process.env.SHOPIFY_API_KEY);


module.exports = withCSS({

     assetPrefix: prod? '/hrm/':'',
     exportTrailingSlash: true,
     exportPathMap: function() {
     	return {

     		'/': {page: '/'}
     	};

     },
     env: {
      BACKEND: prod ? prodip : devip,

    },
    assetDir: 'static',
  webpack: (config, options) => {
    const env={
      API_KEY:apikey,
    };
    config.plugins.push(new webpack.DefinePlugin(env));
    config.module.rules.push({
      // test: /\.mdx/,
      // use: [
      //   options.defaultLoaders.babel,
      //   {
      //     loader: '@mdx-js/loader',
      //     options: pluginOptions.options,
      //   },
      // ],
      
      rules: [

           // {
           //      test: /\.js$/,
           //      loader: 'ify-loader'
           // },
      // {
      //   test: /\.css$/,
      //   use: [
      //         'style-loader',
      //         'css-loader',
      //       ],
      // },
		   {

		   	test: /\.(png|svg|jpg|gif)$/,
		    use: [{
		        loader: 'file-loader',
		        options: {
		            name:'img/[name]_[hash:7].[ext]',
		        }
		    }]
		   },
		   {
		   	  test: /\.js$/,
		   	  use: [{
		   	  	  loader: 'ify-loader',
		   	  }]
		   },
	    ]
    });
    return config;
  },
  

});