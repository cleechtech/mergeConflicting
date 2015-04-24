var gulp = require('gulp'),
  connect = require('gulp-connect');


gulp.src('client/js/**/*.js') // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
  .pipe(minify())
  .pipe(gulp.dest('build'));  // Writes 'build/somedir/somefile.js'

gulp.src('client/js/**/*.js', { base: 'client' })
  .pipe(minify())
  .pipe(gulp.dest('build'));  // Writes 'build/js/somedir/somefile.js'
  
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('default', ['webserver']);