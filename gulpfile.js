
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');

/*
* Variables
*/

// SassSource
var scssFiles = './src/scss/style.scss';

// CSS destination
var cssDest = './css';

// Options for development
var sassDevOptions = {
    outputStyle: 'expanded'
}

// options for production
var sassProdOptions ={
    outputStyle: 'compressed'
}

// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.mim.css'))
    .pipe(gulp.dest(cssMinDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function(){
    gulp.watch(scssFiles, ['sassdev'], ['sassprod']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);