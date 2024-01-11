const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() { 
    return gulp.src('./src/styles/*.scss') // onde vamos pegar os arquivos fontes
        .pipe(sass({outputStyle: 'compressed'})) // os estilos css serão comprimidos
        .pipe(gulp.dest('./dist/css')); // pasta de destino
}

exports.default = styles; // invocar a função
exports.watch = function() { // para não ter que ficar colocando o tempo todo o npm rum build
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}