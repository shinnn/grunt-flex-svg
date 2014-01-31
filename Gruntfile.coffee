# grunt-flex-svg
# Copyright (c) 2014 Shinnosuke Watanabe
# Licensed under the MIT license.

module.exports = (grunt) ->
  'use strict'
  
  require('load-grunt-tasks') grunt
    
  grunt.initConfig
    jshint:
      options:
        camelcase: true
        trailing: true
        indent: 2
        node: true
        reporter: require 'jshint-stylish'
      all: ['tasks/*.js']
      
    flex_svg:
      test:
        files: [
          expand: true
          cwd: 'test/fixture'
          src: ['*.svg']
          dest: 'test/actual'
        ]

    clean:
      tests: ['test/actual/*']
          
    mochaTest:
      test:
        options:
          reporter: 'spec'
        src: ['test/*.coffee']

    release:
      options: {}
    
  # Actually load this plugin's task
  grunt.loadTasks 'tasks'
  
  grunt.registerTask 'test', [
    'clean'
    'jshint'
    'flex_svg'
    'mochaTest'
  ]
  
  grunt.registerTask 'default', ['test']