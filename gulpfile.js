
const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')


gulp.task('cssmin',function(){
    gulp.src('./src/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('htmlmin',function(){
    gulp.src('./src/*.html')
    .pipe(htmlmin({
        removeComments:true,
        collapseWhitespace:true,
        removeEmptyAttributes:true,
        collapseInlineTagWhitespace:true
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('minZepto',function(){
    gulp.src(['./src/js/lib/zepto.min.js','./src/js/lib/touch.js','./src/js/lib/ajax.js'])
    .pipe(concat('zepto.all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/lib'))
})

gulp.task('jsmin',function(){
    gulp.src(['./src/js/kinerLottery.js','./src/js/index.js'])
    .pipe(concat('index.all.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})

// gulp.task('allmin',function(){
//     gulp.src('./dist/js/index.all.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
// })

