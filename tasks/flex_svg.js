// grunt-merge-data
// Copyright (c) 2014 Shinnosuke Watanabe
// Licensed under the MIT license

'use strict';

var flexSvg = require('flex-svg');
var async = require('async');

module.exports = function (grunt) {
  grunt.registerMultiTask(
    'flex_svg',
    'Merge multiple data into a file or Grint config.',
    function flexSvgTask() {
      // Merge task-specific and/or target-specific options with these defaults
      var options = this.options();
    
      async.each(this.files, function (map, next) {
        var svgString = grunt.file.read(map.src);
        flexSvg(svgString, function (err, data) {
          if (err) {
            grunt.warn('Error parsing svg: ' + err);
          } else {
            grunt.file.write(map.dest, data);
            grunt.log.writeln('File "' + map.dest + '" created.');
          }
          next();
        });
      }, this.async());
    }
  );
};
