const withPlugins = require('next-compose-plugins')
const purgeCss = require('next-purgecss')
// const size = require('next-size')
// const images = require('next-images')
const offline = require('next-offline')
const optimizedImages = require('next-optimized-images')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const typescript = require('@zeit/next-typescript')
const sourceMaps = require('@zeit/next-source-maps')
const bundleAnalyzer = require('@next/bundle-analyzer')
const sass = require('@zeit/next-sass')

dotenvLoad()

const nextConfig = {}
module.exports = withPlugins(
  [
    nextEnv,
    // images,
    // size,
    [offline, { dontAutoRegisterSw: true }],
    [optimizedImages, { optimizeImagesInDev: true }],
    sass,
    purgeCss,
    sourceMaps,
    typescript,
    [bundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }],
  ],
  nextConfig,
)
