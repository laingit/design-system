const path = require('path');
const visit = require('unist-util-visit');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: devMode ? '[name]XXX.css' : '[name]XXX.[hash].css',
      chunkFilename: devMode ? '[id]XXX.css' : '[id]XXX.[hash].css'
    })
  );

  defaultConfig.module.rules.push(
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, '../ui'),
        path.resolve(__dirname, '../.storybook'),
        path.resolve(__dirname, '../shared'),
        path.resolve(__dirname, '../assets')
      ],
      use: [
        {
          loader: path.resolve(
            __dirname,
            '../scripts/compile/sldswc-style-loader.js'
          )
        },
        // {
        //   loader: MiniCssExtractPlugin.loader
        // },
        // 'style-loader',
        // 'css-to-string-loader',
        // {
        //   loader: 'style-loader',
        //   options: { insertInto: () => { console.log("@@@ Inside style-loader"); return document.body; } }
        // },
        {
          loader: 'css-loader',
          options: { importLoaders: 2 }
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'resolve-url-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true, outputStyle: 'compressed' }
        },
        // Reads Sass vars from files or inlined in the options property
        // needed to reset the asset paths for webpack to load them, as we
        //  assume we're loading from the assets folder with a relitive path
        // from the compile css monolith to the assets, like fonts
        {
          loader: '@epegzz/sass-vars-loader',
          options: {
            syntax: 'scss',
            files: [path.resolve(__dirname, './scss/framework/config.scss')]
          }
        }
      ]
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, '../ui'),
      use: [
        'raw-loader'
        // {
        //   loader: "css-loader",
        //   options: { importLoaders: 1 }
        // },
        // 'postcss-loader'
      ]
    },
    {
      test: /\.mdx$/,
      include: [path.resolve(__dirname, '../ui')],
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@mdx-js/loader',
          options: {
            hastPlugins: [
              // Custom hast plugin to add 'doc' classname to each node from the mdx parser.
              () => tree =>
                visit(tree, 'element', node => {
                  node.properties.className = ['doc'];
                })
            ]
          }
        }
      ]
    }
    // ,
    // {
    //   test: /\.jsx$/,
    //   include: [path.resolve(__dirname, '../ui/modules')],
    //   use: [
    //     { loader: path.resolve(__dirname, '../scripts/compile/my-loader.js') }
    //     // { loader: 'sass-loader' }
    //   ]
    // }
  );

  return defaultConfig;
};
