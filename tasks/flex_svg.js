// grunt-flex-svg
// Copyright (c) 2014 Shinnosuke Watanabe
// Licensed under the MIT license

'use strict';

var fs = require('fs');
var flexSvg = require('flex-svg');
var eachAsync = require('each-async');

module.exports = function (grunt) {
  grunt.registerMultiTask(
    'flex_svg',
    'Create SVG with flexible size.',
    function flexSvgTask() {
      var readOption = {encoding: grunt.file.defaultEncoding};
      var options = this.options();
    
      eachAsync(this.files, function (map, index, next) {
        fs.readFile(map.src[0], readOption, function(readError, data) {
          if (readError) {
            grunt.log.warn('Source file "' + map.src + '" not found.');
            next();
          }
          flexSvg(data, function (parseError, data) {
            if (parseError) {
              grunt.warn('Error parsing svg: ' + parseError);
            } else {
              grunt.file.write(map.dest, data);
              grunt.log.writeln('File "' + map.dest + '" created.');
            }
            next();
          });
        });
      }, this.async());
    }
  );
};
