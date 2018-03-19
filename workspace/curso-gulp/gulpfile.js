var gulp = require('gulp'); // Procura na pata node-modules  uma pasta chamada gulp
    imagemin = require('gulp-imagemin'); // Procura na pata node-modules  uma pasta chamada gulp
    cleanCss = require('gulp-clean-css');

    gulp.task('build-img', function() {

        gulp.src('dist/img/**/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('dist/img'));
    });


    gulp.task('copy', function(){

    gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
        
    });
    // gulp.task('clean-css', function(){
    // gulp.src('src/css/**/*')
    // .pipe(cleanCss())
    // .pipe(gulp.dest('src/css'));
    

    // });
