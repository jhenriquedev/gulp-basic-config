const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const gsass = require('gulp-sass');
const nsass = require('sass');
const sass = gsass(nsass);

const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');


function uglifyCode(){
    return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'))
}


function workflow(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(concat("bundle.min.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
}

function watch(){
    gulp.watch('./src/sass/**/*.scss', workflow);
    gulp.watch('./src/js/**/*.js', uglifyCode);
}

gulp.task('default', watch);