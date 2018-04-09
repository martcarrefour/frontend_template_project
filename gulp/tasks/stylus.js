module.exports = function (){
    $.gulp.task('stylus', function () {
        return $.gulp.src('src/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css':true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 versions']
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};