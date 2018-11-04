module.exports = {
  coverageDirectory: './coverage',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/*.js',
    '!*.js',
    '!.*.js',
    '!**/__tests__/**',
    '!coverage/**',
    '!test/**',
    '!**/node_modules/**',
  ],
  projects: ['./'],
}
