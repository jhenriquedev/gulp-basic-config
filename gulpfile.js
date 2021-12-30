const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const gsass = require('gulp-sass');
const nsass = require('sass');
const sass = gsass(nsass);

function workflow(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
}

function watch(){
    gulp.watch('./src/sass/**/*.scss', workflow);
}

gulp.task('default', watch);