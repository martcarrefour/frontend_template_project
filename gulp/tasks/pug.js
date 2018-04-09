module.exports = function (){
    $.gulp.task('pug:dev', function () {
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
    var gulpif = require('gulp-if');
    $.gulp.task('pug:build', function () {
        return $.gulp.src('build/index.html')
            .pipe($.gp.useref())
            .pipe(gulpif('*.js', $.gp.uglify()))
            .pipe(gulpif('*.css', $.gp.minifyCss()))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
};