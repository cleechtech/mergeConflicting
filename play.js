var gulp = require('gulp'),
  connect = require('gulp-connect');

// we resolved the merge conflict and now I'm adding a comment
gulp.src('client/js/**/*.js')
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