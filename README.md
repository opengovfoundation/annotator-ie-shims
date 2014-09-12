annotator-ie
============

## Cross-browser shims for Annotator

This package provides support for older browsers working with Annotator,
focusing on adding support for Internet Explorer back to version 8.

## License

Annotator is free software, and you may use it under the terms of either the
MIT or the GNU GPL licenses.

## Installation

This package uses the standard `npm` installation:

  `npm install annotator-ie`

## Usage

There are several ways of using this package.

### Individual scripts using cdnjs

Most of the files provided here are available from [cdnjs](http://www.cdnjs.com/),
but not *all* of them are. To use the CDN versions of what's available with the
local file (currently < 1k) for the rest:

    <!--[if lte IE 9]>
        <script src="/node_modules/annotator-ie/pkg/annotator-ie.min.js"></script>
    <![endif]-->

    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.0/es5-shim.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/rangy/1.2.3/rangy-core.js"></script>
    <![endif]-->

### Using the local bundle

Alternately, you can use the prepared bundle (currently ~65k) of all of these scripts:

   	<!--[if lte IE 9]>
        <script src="/node_modules/annotator-ie/pkg/annotator-ie-bundle.js"></script>
    <![endif]-->
