'use strict';
// generated on 2014-09-12 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');

var DIST = '../../designit';

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src(['app/styles/critical.scss', 'app/styles/non-critical.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 4
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('scripts', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function() {
    var assets = $.useref.assets({
        searchPath: ['.tmp', 'app']
    });

    return gulp.src('app/*.html')
        .pipe($.inlineSource('./.tmp'))
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.autoprefixer()))
        .pipe($.if('*.css', $.combineMediaQueries()))
        .pipe($.if('*.css', $.csso()))
        .pipe(gulp.dest(DIST))
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.replace('<script src="scripts/main.js">', '<script src="scripts/main.js" defer>')))
        .pipe($.if('*.html', $.replace('<script src="scripts/enhancement.js">', '<script src="scripts/enhancement.js" defer>')))
        .pipe($.revReplace())
        .pipe($.if('*.html', $.minifyHtml()))
        .pipe(gulp.dest(DIST))
        .pipe($.size());
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(DIST + '/images'))
        .pipe($.size());
});

gulp.task('extras', function() {
    return gulp
        .src(['app/*.*', '!app/*.html'], {
            dot: true
        })
        .pipe(gulp.dest(DIST));
});

gulp.task('more-extras', function() {
    return gulp
        .src(['app/bower_components/picturefill/dist/picturefill.min.js'], {
            dot: true
        })
        .pipe(gulp.dest(DIST + '/bower_components/picturefill/dist/'));
});

gulp.task('clean', function() {
    return gulp.src(['.tmp', DIST], {
        read: false
    }).pipe($.clean({
        force: true
    }));
});

gulp.task('build', ['html', 'images', 'extras', 'more-extras']);

gulp.task('deploy', ['clean'], function() {
    return gulp.start('build');
});

gulp.task('server', function(next) {
    var connect = require('connect');
    var serveStatic = require('serve-static');

    connect()
        .use(serveStatic('app'))
        .use(serveStatic('.tmp'))
        .listen(9000, next);
});

gulp.task('serve', function() {
    var connect = require('connect');
    var serveStatic = require('serve-static');

    connect()
        .use(serveStatic(DIST))
        .listen(8000);

    require('opn')('http://localhost:8000');
});

gulp.task('watch', ['styles', 'scripts', 'images', 'server'], function() {
    $.livereload.listen();
    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', $.livereload.changed);

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);

    require('opn')('http://localhost:9000');
});
