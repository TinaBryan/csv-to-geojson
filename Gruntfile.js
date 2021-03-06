/* global module:false */
module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    'gh-pages': {
      options: {},
      src: ['**']
    }
  });

  // Dependencies
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task
  grunt.registerTask('default', []);
  grunt.registerTask('deploy', ['default', 'gh-pages']);
};
