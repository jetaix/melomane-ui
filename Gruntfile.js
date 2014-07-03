'use strict';

module.exports = function (grunt) {

  // Define the configuration for all the tasks
  grunt.initConfig({

	watch: {
		css: {
			files: './styles/sass/*.scss',
			tasks: ['sass'],
			options: {
				livereload: true,
			},
		},
	},
	sass: {
	    dist: {
	      files: {
	        './styles/style.css': [
	        	'./styles/sass/home.scss',
	        	'./styles/sass/font.scss',
	        ]
	      }
	    }
	 }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('css', [
    'sass',
    'watch'
  ]);

};
