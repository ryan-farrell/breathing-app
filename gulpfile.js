const { src, dest, series, watch } = require('gulp');
const imagemin	= require('gulp-imagemin');
const rename    = require('gulp-rename');
const uglify    = require('gulp-uglify-es').default;
const less      = require('gulp-less');
const cleanCSS 	= require('gulp-clean-css');
const concat 	= require('gulp-concat');

/**
 * ** 4 BASIC GULP Methods
 * gulp.task    - Define tasks
 * gulp.src     - Point to files to use 
 * gulp.dest    - Points to folder to output
 * gulp.watch   - Watch files and folder for changes 
 */

// Logs Message
function message(cb) {
    console.log('Gulp has started ....')
    cb();
}

// Copy files to dist folder
function copy(cb) {
    src('src/*.html')
    .pipe(dest('dist/public'));
    cb();    
}

// Copy Audio files to dist folder
function copyAudio(cb) {
    src('src/audio/*')
    .pipe(dest('dist/public/audio'));    
    cb();
}

// Minifys images to dist folder
function imageMin(cb) {
    src('src/img/*')
    .pipe(imagemin())
    .pipe(dest('dist/public/img'))
    cb();
}

// Minifys all JS files and concat into 1 js file
function minifyJS(cb) {
	src('src/js/*')
	.pipe(concat('bundle.min.js'))
    .pipe(uglify(/* options */))
    .pipe(dest('dist/public/js'));
    cb();
}

// Compiles all LESS files and concat into 1 css file
function lessCompileAndMin(cb) {
	src('src/less/*.less')
	.pipe(concat('bundle.min.css'))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(dest('dist/public/css'));
    cb();
}

exports.build = series( copy,
                        copyAudio,
                        imageMin,
                        minifyJS,
                        lessCompileAndMin
                    );

exports.watch = function() {
	// Two watch tasks setup looking at less & js files respectively 
	watch('src/less/*.less', lessCompileAndMin);
	watch('src/js/*.js', minifyJS);
};