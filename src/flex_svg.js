// grunt-flex-svg
// Copyright (c) 2014 Shinnosuke Watanabe
// Licensed under the MIT license

'use strict';

var fs = require('fs');
var flexSvg = require('flex-svg');
var eachAsync = require('each-async');
var chalk = require('chalk');

module.exports = grunt => {
  grunt.registerMultiTask(
    'flex_svg',
    'Create SVG with flexible size.',
    function flexSvgTask() {
      var readOption = {encoding: grunt.file.defaultEncoding};

      eachAsync(this.files, (map, index, next) => {
        var src = map.src[0];

        if (!src) {
          grunt.log.warn(`Destination ${
            chalk.cyan(map.dest)
          } not written because src files were empty.`);
          return next();
        }

        fs.readFile(src, readOption, (readError, data) => {
          if (readError) {
            grunt.log.warn(`Source file "${ map.src }" not found.`);
            return next();
          }
          flexSvg(data, (parseError, result) => {
            if (parseError) {
              grunt.warn('Error parsing svg: ' + parseError);
            } else {
              grunt.file.write(map.dest, result);
              grunt.log.writeln(`File ${ chalk.cyan(map.dest) } created.`);
            }
            next();
          });
        });
      }, this.async());
    }
  );
};
