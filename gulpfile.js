/**
 * Module dependencies
 */

var gulp    = require('gulp');
var browser = require('browser-sync');
var ghPages = require('gulp-gh-pages');
var reload  = require('browser-sync').reload;

/**
 * Default task
 */

gulp.task('default', ['server', 'watch']);

/**
 * Watch task
 */

gulp.task('watch', function() {
  gulp.watch('./**/*.html', ['reload']);
});

/**
 * Server task
 */

gulp.task('server', function() {
  browser({
    server: {
      baseDir: '.',
      index: 'demo/index.html'
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
