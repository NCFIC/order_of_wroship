// project paths are set in package.json
const paths = require("./package.json").paths;

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssimport = require("gulp-cssimport");
const babel = require("gulp-babel");
const minify = require("gulp-minify");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');


// compiling tailwind CSS
gulp.task("css", () => {
  return gulp
    .src(paths.src.css + "*.css")
    .pipe(cssimport())
    .pipe(
      postcss([tailwindcss(paths.config.tailwind), require("autoprefixer")])
    )
    .pipe(gulp.dest(paths.dist.css));
});

// browser-sync dev server
gulp.task("serve", ["css", "import-js", "addon-js", "js"], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    ghostMode: false
  });

  gulp.watch(paths.src.css + "*.css", ["css"]).on("change", browserSync.reload);
  gulp.watch(paths.src['custom-css'] + "*.css", ["css"]).on("change", browserSync.reload);
  gulp.watch(paths.src.js + "*.js", ["js"]).on("change", browserSync.reload);
  gulp.watch(paths.src['addon-js'] + "**/*", ["addon-js"]).on("change", browserSync.reload);
  gulp.watch(paths.config.tailwind, ["css"]);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js", ["import-js"]).on("change", browserSync.reload);
});

// @Import JS files
gulp.task('import-js', () => {
  gulp.src('index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});

// Moving Addon JS
gulp.task("addon-js", () => {
  return gulp
    .src(paths.src['addon-js'] + "**/*")
    .pipe(gulp.dest(paths.dist.js));
});

// compiling Custom JS
gulp.task("js", () => {
  return gulp
    .src(paths.src.js + "*.js")
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest(paths.dist.js));
});

// Build
gulp.task("build", ["css", "import-js", "addon-js", "js"]);

// default task
gulp.task("default", ["serve"]);
