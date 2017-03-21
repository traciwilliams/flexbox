var gulp = require ('gulp');
var autoprefixer = require ('gulp-autoprefixer');


gulp.task('styles', function(){
  return   gulp.src('styles/main.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

