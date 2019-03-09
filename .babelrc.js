const env = require('./env-config.js')

module.exports = {
  env: {
    development: {
      presets: ['next/babel', '@emotion/babel-preset-css-prop'],
    },
    production: {
      presets: ['next/babel', '@emotion/babel-preset-css-prop'],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
    },
  },
  plugins: [
    ['dynamic-import-node'],
    ['transform-define', env],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './components',
          pages: './pages',
          utils: './utils',
        },
      },
    ],
  ],
}
