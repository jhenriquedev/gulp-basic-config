var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var rename   = require('gulp-rename');
 
// Source Path
var js_src   = "./src/js/*.js";
 
// Dist Path
var js_dist  = "./js/";
var js_dist_name = "scripts.js";
 
// Minify e Concat Scripts
gulp.task('scripts', function() {
	return gulp.src(js_src)
        .pipe(plumber())
	    .pipe(uglify())
		.pipe(concat(js_dist_name))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});

// Watch
gulp.task('watch', function() {
	gulp.watch([js_src], ['scripts']);
});

// Default
gulp.task('default', ['scripts']);