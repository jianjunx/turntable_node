'use strict'

const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

gulp.task('default',['cssmin','htmlmin','minZepto','jsmin'],()=>{
    console.log("default执行完毕!");
})

gulp.task('cssmin',function(){
    gulp.src('./src/static/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/static/css'))
})

gulp.task('htmlmin',function(){
    gulp.src('./src/**/*.html')
    .pipe(htmlmin({
        removeComments:true,
        collapseWhitespace:true,
        removeEmptyAttributes:true,
        collapseInlineTagWhitespace:true
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('minZepto',function(){
    gulp.src(['./src/static/js/lib/zepto.min.js','./src/js/static/lib/touch.js','./src/js/lib/ajax.js'])
    .pipe(concat('zepto.all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/static/js/lib/'))
})

gulp.task('jsmin',function(){
    gulp.src(['./src/**/**.js','!./src/static/js/lib/**.js'])
    .pipe(babel({"presets": ["es2015"]}))
    // .pipe(concat('index.all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})