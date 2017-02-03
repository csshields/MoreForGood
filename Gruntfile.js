/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      watch: {
        js: {
          files: [
            'src/main.js',
            'Gruntfile.js'
          ],
          tasks: ['jshint']
        },
        sass: {
          // We watch and compile sass files as normal but don't live reload here
          files: ['src/*.scss'],
          tasks: ['sass'],
        }
      },

      jshint: {
        options: {
          jshintrc: '.jshintrc',
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        },
        all: ['Gruntfile.js', 'src/*.js']
      },

      sass: {
        dev: {
          src: ['src/*.scss'],
          dest: 'public/css/styles.css',
        },

      },

  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');


  // Register the default tasks.
  grunt.registerTask('default', ['watch', 'jshint', 'sass']);

};