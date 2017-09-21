const path = require('path')
const gulp = require('gulp')
const sequence = require('run-sequence')
require('./task/clean')
require('./task/webpack')
require('./task/rev')
require('./task/minify')

gulp.task('dev', function() {
	return sequence('clean', 'webpack-dev')
})

/*gulp.task('build', function() {
	return sequence('clean', 'rev', 'minify')
})*/

gulp.task('default', ['dev', 'connect', 'watch']);
