module.exports = function(grunt) {

  grunt.initConfig({
    svgstore: {
      options: {
        formatting : {
          indent_size : 2
        }
      },
      default : {
        files: {
          'dist/icons/icons-sprite.svg': ['src/icons/*.svg'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgstore');

};