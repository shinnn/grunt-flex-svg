# grunt-flex-svg
# Copyright (c) 2014 Shinnosuke Watanabe
# Licensed under the MIT license.

module.exports = (grunt) ->
  'use strict'
  
  require('time-grunt') grunt
  require('jit-grunt') grunt, {
    es6transpiler: 'grunt-es6-transpiler'
  }
  
  grunt.initConfig
    jshint:
      options:
        jshintrc: '.jshintrc'
        reporter: require 'jshint-stylish'
      all: ['tasks/*.js']
    
    es6transpiler:
      options:
        globals:
          describe: false
          it: false
      task:
        src: ['src/flex_svg.js']
        dest: 'tasks/flex_svg.js'
      tests:
        src: ['test/*.js']
        dest: 'tmp/test-es5.js'
    
    flex_svg:
      no_write:
        src: ['foo.svg']
        dest: 'foo.svg'
      test:
        files: [
          expand: true
          cwd: 'test/fixtures'
          src: ['*.svg']
          dest: 'test/actual'
        ]

    clean:
      tasks: ['tasks']
      tests: ['test/actual/*', '<%= es6transpiler.tests.dest %>']

    mochaTest:
      test:
        options:
          reporter: 'spec'
        src: ['tmp/*.js']

    release: {}
  
  grunt.registerTask 'loadTasks', grunt.loadTasks

  grunt.registerTask 'build', [
    'clean'
    'jshint'
    'es6transpiler'
    'loadTasks:tasks'
  ]
  
  grunt.registerTask 'test', [
    'flex_svg'
    'mochaTest'
  ]
  
  grunt.registerTask 'default', ['build', 'test']
