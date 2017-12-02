const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('build', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['ie > 8', 'safari > 8', 'last 5 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('../lib/theme-default'));
});
