const gulp = require('gulp')
const uglify = require('gulp-uglify')

gulp.task('uglify', function () {
	return gulp.src('./build/static/**/*.js',{
		base: './build',
	})
	.pipe(uglify())
	.pipe(gulp.dest('./build'))
})
gulp.task('minify',['uglify'])