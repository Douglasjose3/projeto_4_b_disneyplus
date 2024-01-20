const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() { 
    return gulp.src('./src/styles/*.scss') // onde vamos pegar os arquivos fontes
        .pipe(sass({outputStyle: 'compressed'})) // os estilos css serão comprimidos
        .pipe(gulp.dest('./dist/css')); // pasta de destino
}

function images() {
    return gulp.src('./src/images/**/*') // para pegar todas as imagens
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images); // invocar as funções
exports.watch = function() { // para não ter que ficar colocando o tempo todo o npm rum build
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}