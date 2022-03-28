module.exports = function(grunt) {
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              sourcemap: false,
              compress: false,
              yuicompress: false,
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
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('default',['watch']);
    }