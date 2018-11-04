const env = require('./env-config.js')

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
    },
    production: {
      presets: ['next/babel'],
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
