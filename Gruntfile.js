/*
 * Generated on 2015-01-06
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'www'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/content/**/*.{hbs,yml}', '<%= config.src %>/data/**/*.{hbs,yml}', '<%= config.src %>/layouts/**/*.{hbs,yml}', '<%= config.src %>/partials/**/*.{hbs,yml}'],
        tasks: ['assemble:pages', 'assemble:style_guide']
      },
      pages: {
        files: ['<%= config.src %>/pages/**/*.{hbs,yml}'],
        tasks: ['assemble:pages']
      },
      style_guide: {
        files: ['<%= config.src %>/style-guide/**/*.{hbs,yml}'],
        tasks: ['assemble:style_guide']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    compass: {
      options: {
        sassDir: '<%= config.dist %>/assets/sass/',
        cssDir: '<%= config.dist %>/assets/css',
        imagesDir: '<%= config.dist %>/assets/img',
        javascriptsDir: '<%= config.dist %>/assets/js',
        fontsDir: '<%= config.dist %>/assets/fonts',
        httpImagesPath: '/assets/img',
        httpFontsPath: '/assets/fonts',
        httpGeneratedImagesPath: '/assets/img',
        relativeAssets: false,
        assetCacheBuster: false,
        outputStyle: 'expanded',
        noLineComments: true,
        sourcemap:true,
        require: ['sass-globbing']
      },
      dist:{},
      watch:{
        options:{
          watch: true
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        layoutdir: '<%= config.src %>/layouts',
        layout: 'default.hbs',
        data: '<%= config.src %>/data/*.{json,yml}',
        partials: '<%= config.src %>/partials/**/*.hbs',
        prettify: {
          "mode": 'html',
          "brace_style": "collapse",
          "indent_handlebars": true,
          "indent_inner_html": false,
          "unformatted": ["a", "sub", "sup", "b", "i", "u", "code", "pre"],
          "wrap_line_length": 32786,
          "condense": true,
          "padcomments": true
        },
        helpers: ['./helpers/for-helper.js', 'prettify']
      },
      pages: {
        expand: true,
        cwd: '<%= config.src %>/pages',
        src: ['**/*.hbs'],
        dest: '<%= config.dist %>/'
      },
      style_guide:{
        options:{
          layout: 'style-guide.hbs',
        },
        expand: true,
        cwd: '<%= config.src %>/style-guide',
        src: ['**/*.hbs'],
        dest: '<%= config.dist %>/style-guide/'
      }
    },

    copy: {
      // jquery:{
      //   expand: true,
      //   cwd: 'bower_components/jquery/dist',
      //   src: 'jquery.min.*',
      //   dest: '<%= config.dist %>/assets/js'
      // }
    },

    requirejs: {
      options: {
        baseUrl: '<%= config.dist %>/assets/js/libs',
        name : '../main',
        mainConfigFile : '<%= config.dist %>/assets/js/main.js'
      },
      dist: {
        options: {
          optimize: 'uglify2',
          preserveLicenseComments: false,
          generateSourceMaps: false,
          compress: {
            dead_code: true,
            unused: true
          },
          out: '<%= config.dist %>/assets/js/app.min.js'
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/**/*.html',
            '!<%= config.dist %>/assets',
          ]
        }]
      }
    }

  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    // 'copy',
    'assemble',
    'compass:dist'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
