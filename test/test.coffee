'use strict'

assert = require 'assert'
grunt = require 'grunt'

describe 'Task', ->
  it 'should create expected svg files.', ->
    actual = [
      grunt.file.read 'test/actual/rect.svg'
      grunt.file.read 'test/actual/rect2.svg'
    ]
    expected = [
      grunt.file.read 'test/expected/rect.svg'
      grunt.file.read 'test/expected/rect2.svg'
    ]
    
    assert.deepEqual actual, expected
    
