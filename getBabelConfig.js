function getBabelConfig(esmodules, minimize) {
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

module.exports = getBabelConfig;
