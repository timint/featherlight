module.exports = function(grunt) {

	var banner = '/**\n'
	           + ' * <%= pkg.title %>\n'
	           + ' * Version <%= pkg.version %> - <%= pkg.homepage %>\n'
	           + ' *\n'
	           + ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> (<%= pkg.author.url %>)\n'
	           + ' * MIT Licensed.\n'
	           + '**/';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		replace: {
			src: {
				src: ['./README.md','./src/*.*','bower.json'],
				overwrite: true,
				replacements: [
					{
						from: /Copyright\s[0-9]{4}/g,
						to: 'Copyright <%= grunt.template.today("yyyy") %>'
					},
					{
						from: /\*\sVersion\s[0-9]+[.]{1}[0-9]+[.]{1}[0-9]+/g,
						to: '* Version <%= pkg.version %>'
					},
					{
						from: /Current\sRelease\s[0-9]+[.]{1}[0-9]+[.]{1}[0-9]+/g,
						to: 'Current Release <%= pkg.version %>'
					},
					{
						from: /archive\/[0-9]+[.]{1}[0-9]+[.]{1}[0-9]+/g,
						to: 'archive/<%= pkg.version %>'
					},
					{
						from: /noelboss\/featherlight\/[0-9]+[.]{1}[0-9]+[.]{1}[0-9]+/g,
						to: 'noelboss/featherlight/<%= pkg.version %>'
					},
					{
						from: /"version": "[0-9]+[.]{1}[0-9]+[.]{1}[0-9]+"/g,
						to: '"version": "<%= pkg.version %>"'
					},
					{
						from: /\([0-9]+[.]{1}[0-9]+[.]{1}[0-9]+\)/g,
						to: '(<%= pkg.version %>)'
					}
				]
			},
		},

		less: {
			featherlight: {
				options: {
					compress: true,
					sourceMap: true,
					sourceMapBasepath: 'src/',
					sourceMapRootpath: './',
					sourceMapURL: function(path) { return path.replace(/.*\//, '') + '.map'; },
					relativeUrls: true
				},
				files: {
					'dist/featherlight.min.css'			 : 'src/featherlight.less'
				}
			},
		},

		uglify: {
			featherlight: {
				options: {
					banner: banner+'\n',
					sourceMap: true,
				},
				files: {
					'dist/featherlight.min.js'	 : ['src/featherlight.js']
				}
			}
		},

		watch: {
			replace: {
				files: [
					'package.json',
				],
				tasks: ['replace']
			},
			less: {
				files: [
					'src/featherlight.less',
				],
				tasks: ['less']
			}
		},

		jshint: {
			options: {
				laxbreak: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				reporterOutput: "",
				globals: {
					jQuery: true,
					Hammer: true,
					el: true
				},
			},
			uses_defaults: ['src/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['replace', 'less', 'uglify']);
	grunt.registerTask('test', ['jshint']);
};
