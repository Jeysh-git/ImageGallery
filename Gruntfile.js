module.exports = function(grunt) {
    const sass = require('node-sass')
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              sourcemap: true,
              implementation:sass,  
              compress: true,
    compass:true,
              yuicompress: true,
              style: 'expanded',
            },
            files: {
             'imageGal1.css' : 'imageGal1.scss'
            }
          },
        },
        watch: {
          css: {
            files: 'imageGal1.css',
            tasks: ['sass']
          }
        }
      });
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-sass');

      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('default',['watch']);
    }