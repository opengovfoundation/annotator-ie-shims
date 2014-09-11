/*
 * Patch to make console.log, console.warn, etc work in IE8 & 9
 */

 // Default list of functions for console.
var logFns = ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"];

// Define console.
if (typeof console == 'undefined') {
    console = {};
}

// Define all of our methods that are missing.
// They will do nothing, but that's better than throwing an error.
for(var i in logFns) {
    var method = logFns[i];
    if(typeof console[method] == 'undefined') {
        console[method] = function () {};
    }
}

/*
 * Wrap any methods that exist into objects.  Allows .apply() binding later.
 * Based on https://gist.github.com/nicjansma/4666076
 */
if (Function.prototype.bind && typeof console == "object" && typeof console.log == "object") {
    for(var i in logFns) {
        var method = logFns[i];
        console[method] = Function.prototype.call.bind(console[method], console);
    }
}

/*
 * Patch for missing Node object
 */

// Fill in a lot of W3 Node constants.
var Node = Node || {
  // NodeType
  // http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
  ELEMENT_NODE                   : 1,
  ATTRIBUTE_NODE                 : 2,
  TEXT_NODE                      : 3,
  CDATA_SECTION_NODE             : 4,
  ENTITY_REFERENCE_NODE          : 5,
  ENTITY_NODE                    : 6,
  PROCESSING_INSTRUCTION_NODE    : 7,
  COMMENT_NODE                   : 8,
  DOCUMENT_NODE                  : 9,
  DOCUMENT_TYPE_NODE             : 10,
  DOCUMENT_FRAGMENT_NODE         : 11,
  NOTATION_NODE                  : 12,
  // DocumentPosition
  // http://www.w3.org/TR/CR-DOM-Level-3-Core-20031107/core.html#ID-1950641247
  DOCUMENT_POSITION_DISCONNECTED : 1,
  DOCUMENT_POSITION_PRECEDING    : 2,
  DOCUMENT_POSITION_FOLLOWING    : 4,
  DOCUMENT_POSITION_CONTAINS     : 8,
  DOCUMENT_POSITION_CONTAINED_BY : 16
};
