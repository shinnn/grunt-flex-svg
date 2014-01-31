# [Work in progress] grunt-flex-svg

[![Build Status](https://travis-ci.org/shinnn/grunt-flex-svg.png?branch=master)](https://travis-ci.org/shinnn/grunt-flex-svg)
[![Dependency Status](https://david-dm.org/shinnn/grunt-flex-svg.png)](https://david-dm.org/shinnn/grunt-flex-svg)
[![devDependency Status](https://david-dm.org/shinnn/grunt-flex-svg/dev-status.png)](https://david-dm.org/shinnn/grunt-flex-svg#info=devDependencies)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shinnn/grunt-flex-svg/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Grunt task for creating SVG files with flexible width and height

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-flex-svg --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-flex-svg');
```

## The `flex_svg` task

### Overview
In your project's Gruntfile, add a section named `flex_svg` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  flex_svg: {
    your_target: {
      src: ['path/to/src/fixed.svg']
      dest: 'path/to/dest/flexible.svg'
    }
  }
})
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

Copyright (c) 2013 - 2014 [Shinnosuke Watanabe](https://github.com/shinnn).
Licensed under [the MIT license](./LICENSE).
