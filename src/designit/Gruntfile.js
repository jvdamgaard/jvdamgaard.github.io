'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.initConfig({
        responsive_images: {
            options: {
                newFilesOnly: true
            },
            banners: {
                options: {
                    aspectRatio: false,
                    sizes: [{
                        width: 320,
                        height: 320,
                        quality: 80
                    }, {
                        width: 500,
                        height: 500,
                        quality: 80
                    }, {
                        width: 640,
                        height: 640,
                        quality: 80
                    }, {
                        width: 750,
                        height: 750,
                        quality: 80
                    }, {
                        width: 1000,
                        height: 1000,
                        quality: 80
                    }, {
                        width: 1500,
                        height: 1000,
                        quality: 80
                    }, {
                        width: 2000,
                        height: 1333,
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'app/images/raw/banners',
                    src: '*.jpg',
                    dest: 'app/images/banners'
                }]
            }
        },
    });
};
