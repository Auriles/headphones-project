const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('sass/main.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('css', { sourcemaps: '.' }));
}

// JavaScript Task
// function jsTask() {
//     return src('src/pages/index.js', { sourcemaps: true })
//         .pipe(terser())
//         .pipe(dest('js', { sourcemaps: '.' }));
// }

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        port: 4000
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch('*.js', browsersyncReload);
    watch(['css/main.css'], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
    scssTask,
    browsersyncServe,
    watchTask
);