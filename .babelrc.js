const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
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
