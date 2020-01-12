// Gulp commands go here:

// imports gulp:
const { series, parallel } = require('gulp');
const gulp = require("gulp");
const sass = require("gulp-sass");
const connectPHP = require('gulp-connect-php');
const browserSync = require("browser-sync").create();

// notice how function() is used as callback:

// .pipe zijn concatinations aan de return functie dus je moet het ook lezen als een functie:
// In dit geval wordt deze gulp functie gebruikt om de sass files te compilen naar css file:

function updateStyle(){
    return gulp.src('css/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        // stream changes to all browsers:
        .pipe(browserSync.stream());
}


// To compile css run "gulp sass" in terminal.
// Intialize browserSync: use command "gulp syncFiles"
// Quit browsersync use (Ctlr + C + Y)

function syncFiles(){
    browserSync.init({
        server: {
            baseDir: './',

        }
    })
    gulp.watch('css/scss/**/*.scss', updateStyle);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.php").on('change', browserSync.reload);
}

// Met behulp van exports kan je normale functies binden aan een "gulp keyword"
// ipv gulp tasks te gebruiken kan je dus ook gewoon functies gebruiken

// to call this use "gulp sass"
exports.sass = updateStyle;
exports.syncFiles = syncFiles;






// @info Doesnt work...

// gulp.task('php', function() {
//     connectPHP.server({
//         baseDir: "./",
//         port: 8010,
//         keepalive:true
//     });
// });

// @info try this later

// gulp.task('browser-sync',gulp.series('php'), function() {
//     browserSync.init({
//         proxy: '',
//         open: true,
//         notify: false
//     });
// });




