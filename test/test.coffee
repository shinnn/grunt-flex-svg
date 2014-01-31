'use strict'

assert = require 'assert'
grunt = require 'grunt'

describe 'Task', ->
  it 'should create expected svg files.', ->
    actual = [
      grunt.file.read 'test/actual/rect.min.svg'
      grunt.file.read 'test/actual/rect2.min.svg'
    ]
    expected = [
      grunt.file.read 'test/expected/rect.min.svg'
      grunt.file.read 'test/expected/rect2.min.svg'
    ]
    
    assert.deepEqual actual, expected
    
