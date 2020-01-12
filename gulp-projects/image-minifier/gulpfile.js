// Gulp commands go here:

// imports gulp:
var gulp = require("gulp");
var sass = require("gulp-sass");

// notice how function() is used as callback:

// .pipe zijn concatinations aan de return functie dus je moet het ook lezen als een functie:
// In dit geval wordt deze gulp functie gebruikt om de sass files te compilen naar css file:

gulp.task('sass', function(){
    return gulp.src('css/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/css'))
});

