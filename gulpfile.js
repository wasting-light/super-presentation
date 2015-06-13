/**
 * Module dependencies
 */

var gulp    = require('gulp');
var browser = require('browser-sync');
var reload  = require('browser-sync').reload;

/**
 * Default task
 */

gulp.task('default', ['server', 'watch']);

/**
 * Watch task
 */

gulp.task('watch', function() {
  gulp.watch('app/**/*.html', ['reload']);
});

/**
 * Server task
 */

gulp.task('server', function() {
  browser({
    server: {
      baseDir: './app'
    },

    port: 4000
  });
});

/**
 * Reload task
 */

gulp.task('reload', function() {
  reload();
});
