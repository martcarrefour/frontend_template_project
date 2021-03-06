'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')({lazy:false}),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};
$.path.tasks.forEach(function (taskPath) {
   require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug:dev','stylus','scripts','img:dev'),
    $.gulp.parallel('watch','server')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug:build','stylus','scripts','img:build'),
    $.gulp.parallel('watch','server')
));