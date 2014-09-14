'use strict';
// generated on 2014-09-12 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var critical = require('critical');
var runSequence = require('run-sequence');

var DIST = '../../designit';

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('copystyles', function() {
    return gulp.src([DIST + '/styles/main.css'])
        .pipe($.rename({
            basename: 'critical' // site.css
        }))
        .pipe(gulp.dest(DIST + '/styles'));
});

gulp.task('scripts', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('templates', function() {
    return gulp.src('app/templates/**/*.hbs')
        .pipe($.handlebars())
        .pipe($.defineModule('plain'))
        .pipe($.declare({
            namespace: 'MyApp.templates' // change this to whatever you want
        }))
        .pipe(gulp.dest('.tmp/templates'));
});

gulp.task('html', ['styles', 'scripts', 'templates'], function() {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
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
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(DIST + '/images'))
        .pipe($.size());
});

gulp.task('fonts', function() {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(DIST + '/fonts'))
        .pipe($.size());
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

gulp.task('critical', function() {
    critical.generateInline({
        base: DIST + '/',
        src: 'index.html',
        styleTarget: 'styles/main.css',
        htmlTarget: 'index.html',
        width: 320,
        height: 480,
        minify: true
    }, function(err) {
        if (err) {
            $.util.log(err);
        }
    });
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

gulp.task('deploy', function(done) {
    runSequence(
        'clean',
        'build',
        // 'copystyles',
        // 'critical',
        done
    );
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

// inject bower components
gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['connect', 'serve', 'templates'], function() {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        '.tmp/templates/**/*.js',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function(file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/templates/**/*.hbs', ['templates']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
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
