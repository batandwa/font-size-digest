module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'assets/js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      },
      mainjs:{
        files: [
          'fontsize.js',
          'Gruntfile.js'
        ],
        js: ['fontsize.js'],
        // jsIds: ['jquery-min','jquery'],
        // css: ['http://static.jquery.com/files/rocker/css/reset.css'],
        // body: 'test.js',
        out: 'bookmarklet.js',
        amdify: true,
        jshint: true,
        timestamp: true
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'assets/js/*.js']
    }
  });

  // Load the Grunt plugins.
  // grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bookmarklet-thingy');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};
