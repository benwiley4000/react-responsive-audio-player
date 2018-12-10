var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var path = require('path');

var OUTPUT_DIR = './dist';

function babelConfig(esmodules, minimize) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true,
          targets: esmodules ? { esmodules: true } : undefined
        }
      ],
      '@babel/react'
    ],
    plugins: minimize
      ? [
          '@babel/plugin-proposal-object-rest-spread',
          [
            'transform-react-remove-prop-types',
            { mode: 'remove', removeImport: true }
          ]
        ]
      : ['@babel/plugin-proposal-object-rest-spread']
  };
}

const packages = {
  '@cassette/core': {
    library: 'cassetteCore',
    file: 'cassette-core'
  },
  '@cassette/components': {
    library: 'cassetteComponents',
    file: 'cassette-components'
  },
  '@cassette/player': {
    library: 'cassettePlayer',
    file: 'cassette-player'
  }
};

const externals = {
  'prop-types': {
    root: 'PropTypes',
    commonjs: 'prop-types',
    commonjs2: 'prop-types',
    amd: 'prop-types'
  },
  react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react'
  },
  'resize-observer-polyfill': {
    root: 'ResizeObserver',
    commonjs: 'resize-observer-polyfill',
    commonjs2: 'resize-observer-polyfill',
    amd: 'resize-observer-polyfill'
  }
};

for (const packageName of Object.keys(packages)) {
  externals[packageName] = {
    root: packages[packageName].library,
    commonjs: packageName,
    commonjs2: packageName,
    amd: packageName
  };
}

const styleLoaders = [
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  },
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
];

const stylePlugins = [
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    path: path.join(process.cwd(), OUTPUT_DIR, 'css')
  }),
  new OptimizeCSSAssetsPlugin({
    assetNameRegExp: /\.min\.css$/
  })
];

function webpackConfig({
  esmodules,
  minimize,
  hasStyles,
  packageName,
  entrySrc
}) {
  return {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      [minimize
        ? `${packages[packageName].file}.min`
        : packages[packageName].file]: entrySrc
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      path: path.join(process.cwd(), OUTPUT_DIR),
      publicPath: '/dist',
      libraryTarget: 'umd',
      library: packages[packageName].library,
      filename: `${esmodules ? 'esm/' : 'es5/'}[name].js`,
      globalObject: '(typeof self !== "undefined" ? self : this)'
    },
    module: {
      rules: [
        ...(hasStyles ? styleLoaders : []),
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelConfig(esmodules)
          }
        }
      ]
    },
    externals,
    devtool: 'source-map',
    plugins: [...(hasStyles ? stylePlugins : []), new CompressionPlugin()],
    optimization: {
      noEmitOnErrors: true,
      minimize
    }
  };
}

function getPackageWebpackConfig({ packageName, hasStyles, entrySrc }) {
  switch (process.env.BUILD_MODE) {
    case 'minimize':
      return [
        webpackConfig({
          esmodules: true,
          minimize: true,
          hasStyles,
          packageName,
          entrySrc
        }),
        webpackConfig({
          esmodules: false,
          minimize: true,
          hasStyles,
          packageName,
          entrySrc
        })
      ];
    case 'unminimized':
      return [
        webpackConfig({
          esmodules: true,
          minimize: false,
          hasStyles,
          packageName,
          entrySrc
        }),
        webpackConfig({
          esmodules: false,
          minimize: false,
          hasStyles,
          packageName,
          entrySrc
        })
      ];
    case 'all':
    default:
      return [
        webpackConfig({
          esmodules: true,
          minimize: true,
          hasStyles,
          packageName,
          entrySrc
        }),
        webpackConfig({
          esmodules: false,
          minimize: true,
          hasStyles,
          packageName,
          entrySrc
        }),
        webpackConfig({
          esmodules: true,
          minimize: false,
          hasStyles,
          packageName,
          entrySrc
        }),
        webpackConfig({
          esmodules: false,
          minimize: false,
          hasStyles,
          packageName,
          entrySrc
        })
      ];
  }
}

module.exports = getPackageWebpackConfig;
