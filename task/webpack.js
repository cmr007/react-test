const _ = require('lodash')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const plumber = require('gulp-plumber')
const config = require('./webpack.config.js')
const connect = require('gulp-connect')
gulp.task('webpack-dev', function() {
  const pack = webpack(_.defaultsDeep({
    watch: true,
    output: {
      chunkFilename: 'chunk/[name].js',
    }
  }, config()))
  pack.on('error', function(err) {
    console.log('[webpack error] %s', err)
  })

  return gulp.src('../package.json') // whatever sources
    .pipe(plumber())
    .pipe(pack)
    .pipe(gulp.dest('./build/static/webapps'))
})
gulp.task('connect', function() {
  connect.server({
    root: ['build/static/page','build/static/webapps'],
    port: 8080
  });
});
 
gulp.task('html', function () {
  gulp.src('./build/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./build/*.html'], ['html']);
});
