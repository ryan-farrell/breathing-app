const gulp      = require('gulp');
const imagemin  = require('gulp-imagemin');

/**
 * ** 4 BASIC GULP Methods
 * gulp.task    - Define tasks
 * gulp.src     - Point to files to use 
 * gulp.dest    - Points to folder to output
 * gulp.watch   - Watch files and folder for changes 
 */
 
// exports.default = () => (

  
// );


 // Logs Message
 gulp.task('message', done => {
    console.log('Gulp is running ....')
    done();
 });

 // Copy HTML Files to Dist folder
 gulp.task('copyHTML', done => {
     gulp.src('src/*.html')
     .pipe(gulp.dest('dist'));    
     done();
});

 // Minifys Images to Dist Folder
 gulp.task('imageMin', done => {
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    done();
 });
 
 // Minifys JS Files
 gulp.task('minifyJS', done => {
    gulp.src('src/js/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    done();
 });
 
