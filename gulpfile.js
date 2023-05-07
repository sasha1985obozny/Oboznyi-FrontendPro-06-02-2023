const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const BUILD_JS_FOLDER = './dist/js';
const BUILD_CSS_FOLDER = './dist/css';
const BUILD_FONTS_FOLDER = './dist/fonts';
const BUILD_IMG_FOLDER = './dist/img';
const BUILD_HTML_FOLDER = './dist/';
const HTML_SRC_FOLDER = './hw-27/*.html';
const SRC_FOLDER = './hw-27/js/*.js';
const FONTS_SRC_FOLDER = './hw-27/fonts/**/*.*';
const IMG_SRC_FOLDER = './hw-27/img/**/*.*';
const SCSS_FOLDER = './hw-27/scss/*.scss';

function watcher() {
  return gulp.watch(SRC_FOLDER, copy);
}

function copy() {
  return gulp.src(SRC_FOLDER)
    .pipe(uglify())
    .pipe(concat("build.js"))
    .pipe(gulp.dest(BUILD_JS_FOLDER));
}

function copyFonts() {
  return gulp.src(FONTS_SRC_FOLDER)
    .pipe(gulp.dest(BUILD_FONTS_FOLDER));
}

function copyImg() {
  return gulp.src(IMG_SRC_FOLDER)
    .pipe(gulp.dest(BUILD_IMG_FOLDER));
}

function copyHtml() {
  return gulp.src(HTML_SRC_FOLDER)
    .pipe(gulp.dest(BUILD_HTML_FOLDER));
}

function scssTask() {
  return gulp.src(SCSS_FOLDER)
    .pipe(scss())
    .pipe(cleanCSS())
    .pipe(concat("style.css"))
    .pipe(gulp.dest(BUILD_CSS_FOLDER));
}

gulp.task(
  "default",
  gulp.series(copy, copyHtml, copyFonts, copyImg, scssTask, watcher)
);