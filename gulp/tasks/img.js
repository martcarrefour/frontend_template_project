module.exports = function (){
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img'));

    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('5IzHxHgx0U4wCtvT4ci98cF_SBDc0j5Y'))
            .pipe($.gulp.dest('build/static/img'));
    });

};