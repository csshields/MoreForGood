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
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded',
              loadPath: ['node_modules/foundation-sites/scss']
            },
            files: {                         // Dictionary of files
              'public/css/styles.css': 'src/styles.scss',       // 'destination': 'source'
            }
          }

      },

  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  


  // Register the default tasks.
  grunt.registerTask('default', ['watch', 'sass']);

};