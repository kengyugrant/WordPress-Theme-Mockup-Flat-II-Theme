module.exports = function(grunt) {

  //load task plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {

      my_target:{

        files: {

          '_/js/script.js':['_/components/js/*.js']

        } //files

      } //target

    }, //uglify

    compass: {

      dev: {

        options: {

          config: 'config.rb'

        }//options
      
      }//dev
    
    },//compass

    watch: {
      
      options: { livereload: true },
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //scripts
      html: {
        files: ['*.html']
      }, //html
      sass: {
        files: ['_/components/scss/*.scss'],
        tasks: ['compass:dev']
      }//sass
    } //watch

  });

  

  // Default task(s).
  grunt.registerTask('default', 'watch');

};