'use strict';

var assert = require('assert');
var grunt = require('grunt');

describe('"flex_svg" task', () => {
  it('should create svg files.', () => {
    var actual = [
      grunt.file.read('test/actual/no_attr.svg'),
      grunt.file.read('test/actual/width_and_height.svg')
    ];
    var expected = [
      grunt.file.read('test/expected/no_attr.svg'),
      grunt.file.read('test/expected/width_and_height.svg')
    ];
    assert.deepEqual(actual, expected);
  });
});
