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


## Notes

When running the unit tests for `Annotator` or `xpath-range`, you'll need
to do a few extra things to make them IE8-compatible:

* Replace the `chai` package with `assertive-chai` and the `assert` library in your
`package.json` file (or just install these manually via `npm`).

    "assert": "git://github.com/Jxck/assert.git#master",
    "assertive-chai": "~1.0.0",

* Replace `chai` with those libraries in your test runner:

    <script src="/node_modules/assert/assert.js"></script>
    <script src="/node_modules/assertive-chai/assertive-chai.js"></script>

* Add the `sinon-ie.js` library that is bundled with sinon:

    <script src="/node_modules/sinon/pkg/sinon.js"></script>
    <!--[if lt IE 9]>
        <script src="/node_modules/sinon/pkg/sinon-ie.js"></script>
    <![endif]-->

