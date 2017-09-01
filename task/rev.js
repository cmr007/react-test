const gulp = require('gulp')
const rev = require('gulp-rev')
gulp.task('rev', function () {
  return gulp.src('./build/static/webapps/entry/*.js', {
      base: './build',
    })
    .pipe(rev())
    .pipe(gulp.dest('./build'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build'))
})