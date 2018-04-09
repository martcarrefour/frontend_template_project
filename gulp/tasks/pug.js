module.exports = function (){
    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gp.wiredep({
                directory: './bower_components'
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
};