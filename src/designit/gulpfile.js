'use strict';
// generated on 2014-09-12 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');

var DIST = '../../designit';

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src(['app/styles/critical.scss', 'app/styles/non-critical.scss'])
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.combineMediaQueries())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(gulp.dest('app/styles/inline'))
        .pipe($.size());
});

gulp.task('scripts', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size())
        .on('error', $.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'Error running something'
        }));
});

gulp.task('html', ['styles', 'scripts'], function() {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe($.inlineSource('./app'))
        .pipe($.useref.assets({
            searchPath: '{.tmp,app}'
        }))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(gulp.dest(DIST))
        .pipe($.rev())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(DIST))
        .pipe($.size());
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(DIST + '/images'))
        .pipe($.size())
        .on('error', $.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'Error running something'
        }));
});

gulp.task('extras', function() {
    return gulp
        .src(['app/*.*', '!app/*.html'], {
            dot: true
        })
        .pipe(gulp.dest(DIST));
});

gulp.task('clean', function() {
    return gulp.src(['.tmp', DIST], {
        read: false
    }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'extras']);

gulp.task('deploy', ['clean'], function() {
    gulp.start('build');
});

gulp.task('connect', function() {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({
            port: 35729
        }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'styles'], function() {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function() {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function(file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
});

gulp.task('connect-test', function() {
    var connect = require('connect');
    var app = connect()
        .use(connect.static('test'));

    require('http').createServer(app)
        .listen(9001)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9001');
        });
});

gulp.task('test', ['connect-test'], function() {
    require('opn')('http://localhost:9001');
});
