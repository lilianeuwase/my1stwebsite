const gulp = require('gulp');

gulp.task('message', function(){
    return console.log('Gulp is running...');
});

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});