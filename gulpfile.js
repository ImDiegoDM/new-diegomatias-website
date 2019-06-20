const { watch,src,series, dest, parallel } = require('gulp');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon')

const webpackConfig = require('./webpack.config.js')
const del = require('del');

function build(){
  return src('./src/app.ts')
    .pipe(webpack(webpackConfig)).pipe(dest("./dist"))
}

function watchBuild(){
  return watch(['./src/**/*.ts','./src/**/*.tsx'],build)
}

function clean(){
  return del('./dist')
}

function start(){
  return nodemon({
    script:'./dist/app.js'
  })
}

exports.build = build
exports.clean = clean
exports.start = series(clean,build,parallel(watchBuild,start))
exports.default = series(clean,build)

