const env = require('./env-config.js')

const presets = [
  'next/babel',
  '@emotion/babel-preset-css-prop',
  '@zeit/next-typescript/babel',
]

module.exports = {
  // env: {
  //   development: { presets },
  //   production: { presets },
  //   test: {
  //     presets: [
  //       'next/babel',
  //       '@zeit/next-typescript/babel',
  //       '@zeit/next-typescript/babel',
  //       { 'preset-env': { modules: 'commonjs' } },
  //     ],
  //   },
  // },
  presets,
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
          static: './static',
          utils: './utils',
        },
      },
    ],
  ],
}
