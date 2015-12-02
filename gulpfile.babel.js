const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('default', function(){
    return gulp.src('index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./lib/'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/'))
});
