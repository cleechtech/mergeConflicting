var gulp = require('gulp'),
  connect = require('gulp-connect');

// random changes on master branch
gulp.src('./client/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./build/templates'))
  .pipe(minify())
  .pipe(gulp.dest('./build/minified_templates'));

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('default', ['webserver']);