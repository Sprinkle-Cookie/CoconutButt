/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern -d -o ./index.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '3.10.1';

  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128,
      REARG_FLAG = 256;

  /** Used as default options for `_.trunc`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect when a function becomes hot. */
  var HOT_COUNT = 150,
      HOT_SPAN = 16;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
      reUnescapedHtml = /[&<>"'`]/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

  /**
   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
   */
  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);

  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect hexadecimal string values. */
  var reHasHexPrefix = /^0[xX]/;

  /** Used to detect host constructors (Safari > 5). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^\d+$/;

  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to match words to create compound words. */
  var reWords = (function() {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  }());

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
  cloneableTags[dateTag] = cloneableTags[float32Tag] =
  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[stringTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[mapTag] = cloneableTags[setTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map latin-1 supplementary letters to basic latin letters. */
  var deburredLetters = {
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`'
  };

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used to escape characters for inclusion in compiled regexes. */
  var regexpEscapes = {
    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `compareAscending` which compares values and
   * sorts them in ascending order without guaranteeing a stable sort.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function baseCompareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;

      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;

      if ((value > other && !othIsNull) || !valIsReflexive ||
          (valIsNull && !othIsUndef && othIsReflexive) ||
          (valIsUndef && othIsReflexive)) {
        return 1;
      }
      if ((value < other && !valIsNull) || !othIsReflexive ||
          (othIsNull && !valIsUndef && valIsReflexive) ||
          (othIsUndef && valIsReflexive)) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without support for binary searches.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isFunction` without support for environments
   * with incorrect `typeof` results.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   */
  function baseIsFunction(value) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
    return typeof value == 'function' || false;
  }

  /**
   * Converts `value` to a string if it's not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    return value == null ? '' : (value + '');
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the first character not found in `chars`.
   */
  function charsLeftIndex(string, chars) {
    var index = -1,
        length = string.length;

    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the last character not found in `chars`.
   */
  function charsRightIndex(string, chars) {
    var index = string.length;

    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.sortBy` to compare transformed elements of a collection and stable
   * sort them in ascending order.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareAscending(object, other) {
    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
  }

  /**
   * Used by `_.sortByOrder` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
   * a value is sorted in ascending order if its corresponding order is "asc", and
   * descending if "desc".
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;

    while (++index < length) {
      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * ((order === 'asc' || order === true) ? 1 : -1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  /**
   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeHtmlChar(chr) {
    return htmlEscapes[chr];
  }

  /**
   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @param {string} leadingChar The capture group for a leading character.
   * @param {string} whitespaceChar The capture group for a whitespace character.
   * @returns {string} Returns the escaped character.
   */
  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
    if (leadingChar) {
      chr = regexpEscapes[chr];
    } else if (whitespaceChar) {
      chr = stringEscapes[chr];
    }
    return '\\' + chr;
  }

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
   * character code is whitespace.
   *
   * @private
   * @param {number} charCode The character code to inspect.
   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
   */
  function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }

  /**
   * An implementation of `_.uniq` optimized for sorted arrays without support
   * for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The function invoked per iteration.
   * @returns {Array} Returns the new duplicate-value-free array.
   */
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;

      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the first non-whitespace character.
   */
  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;

    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedRightIndex(string) {
    var index = string.length;

    while (index-- && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  function unescapeHtmlChar(chr) {
    return htmlUnescapes[chr];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the given `context` object.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // using `context` to mock `Date#getTime` use in `_.now`
   * var mock = _.runInContext({
   *   'Date': function() {
   *     return { 'getTime': getTimeMock };
   *   }
   * });
   *
   * // or creating a suped-up `defer` in Node.js
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See https://es5.github.io/#x11.1.5 for more details.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for native method references. */
    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        stringProto = String.prototype;

    /** Used to resolve the decompiled source of functions. */
    var fnToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objToString = objectProto.toString;

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Native method references. */
    var ArrayBuffer = context.ArrayBuffer,
        clearTimeout = context.clearTimeout,
        parseFloat = context.parseFloat,
        pow = Math.pow,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        Set = getNative(context, 'Set'),
        setTimeout = context.setTimeout,
        splice = arrayProto.splice,
        Uint8Array = context.Uint8Array,
        WeakMap = getNative(context, 'WeakMap');

    /* Native method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeCreate = getNative(Object, 'create'),
        nativeFloor = Math.floor,
        nativeIsArray = getNative(Array, 'isArray'),
        nativeIsFinite = context.isFinite,
        nativeKeys = getNative(Object, 'keys'),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = getNative(Date, 'now'),
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used as references for `-Infinity` and `Infinity`. */
    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

    /** Used as references for the maximum length and index of an array. */
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

    /**
     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
     * of an array-like value.
     */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
     * Methods that operate on and return arrays, collections, and functions can
     * be chained together. Methods that retrieve a single value or may return a
     * primitive value will automatically end the chain returning the unwrapped
     * value. Explicit chaining may be enabled using `_.chain`. The execution of
     * chained methods is lazy, that is, execution is deferred until `_#value`
     * is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
     * fusion is an optimization strategy which merge iteratee calls; this can help
     * to avoid the creation of intermediate data structures and greatly reduce the
     * number of iteratee executions.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
     * `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
     * and `where`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
     * `unescape`, `uniqueId`, `value`, and `words`
     *
     * The wrapper method `sample` will return a wrapped value when `n` is provided,
     * otherwise an unwrapped value is returned.
     *
     * @name _
     * @constructor
     * @category Chain
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(total, n) {
     *   return total + n;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(n) {
     *   return n * n;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The function whose prototype all chaining wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
     */
    function LodashWrapper(value, chainAll, actions) {
      this.__wrapped__ = value;
      this.__actions__ = actions || [];
      this.__chain__ = !!chainAll;
    }

    /**
     * An object environment feature flags.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB). Change the following template settings to use
     * alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = POSITIVE_INFINITY;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = arrayCopy(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = arrayCopy(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = arrayCopy(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a cache object to store key/value pairs.
     *
     * @private
     * @static
     * @name Cache
     * @memberOf _.memoize
     */
    function MapCache() {
      this.__data__ = {};
    }

    /**
     * Removes `key` and its value from the cache.
     *
     * @private
     * @name delete
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
     */
    function mapDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    /**
     * Gets the cached value for `key`.
     *
     * @private
     * @name get
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the cached value.
     */
    function mapGet(key) {
      return key == '__proto__' ? undefined : this.__data__[key];
    }

    /**
     * Checks if a cached value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapHas(key) {
      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
    }

    /**
     * Sets `value` to `key` of the cache.
     *
     * @private
     * @name set
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to cache.
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache object.
     */
    function mapSet(key, value) {
      if (key != '__proto__') {
        this.__data__[key] = value;
      }
      return this;
    }

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates a cache object to store unique values.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var length = values ? values.length : 0;

      this.data = { 'hash': nativeCreate(null), 'set': new Set };
      while (length--) {
        this.push(values[length]);
      }
    }

    /**
     * Checks if `value` is in `cache` mimicking the return signature of
     * `_.indexOf` by returning `0` if the value is found, else `-1`.
     *
     * @private
     * @param {Object} cache The cache to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns `0` if `value` is found, else `-1`.
     */
    function cacheIndexOf(cache, value) {
      var data = cache.data,
          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

      return result ? 0 : -1;
    }

    /**
     * Adds `value` to the cache.
     *
     * @private
     * @name push
     * @memberOf SetCache
     * @param {*} value The value to cache.
     */
    function cachePush(value) {
      var data = this.data;
      if (typeof value == 'string' || isObject(value)) {
        data.set.add(value);
      } else {
        data.hash[value] = true;
      }
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a new array joining `array` with `other`.
     *
     * @private
     * @param {Array} array The array to join.
     * @param {Array} other The other array to join.
     * @returns {Array} Returns the new concatenated array.
     */
    function arrayConcat(array, other) {
      var index = -1,
          length = array.length,
          othIndex = -1,
          othLength = other.length,
          result = Array(length + othLength);

      while (++index < length) {
        result[index] = array[index];
      }
      while (++othIndex < othLength) {
        result[index++] = other[othIndex];
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function arrayCopy(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.forEachRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEachRight(array, iteratee) {
      var length = array.length;

      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.every` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     */
    function arrayEvery(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
     * with one argument: (value).
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function arrayExtremum(array, iteratee, comparator, exValue) {
      var index = -1,
          length = array.length,
          computed = exValue,
          result = computed;

      while (++index < length) {
        var value = array[index],
            current = +iteratee(value);

        if (comparator(current, computed)) {
          computed = current;
          result = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.filter` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.map` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the first element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initFromArray) {
      var index = -1,
          length = array.length;

      if (initFromArray && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.reduceRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the last element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
      var length = array.length;
      if (initFromArray && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.some` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    /**
     * A specialized version of `_.sum` for arrays without support for callback
     * shorthands and `this` binding..
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function arraySum(array, iteratee) {
      var length = array.length,
          result = 0;

      while (length--) {
        result += +iteratee(array[length]) || 0;
      }
      return result;
    }

    /**
     * Used by `_.defaults` to customize its `_.assign` use.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : objectValue;
    }

    /**
     * Used by `_.template` to customize its `_.assign` use.
     *
     * **Note:** This function is like `assignDefaults` except that it ignores
     * inherited property values when checking if a property is `undefined`.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @param {string} key The key associated with the object and source values.
     * @param {Object} object The destination object.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignOwnDefaults(objectValue, sourceValue, key, object) {
      return (objectValue === undefined || !hasOwnProperty.call(object, key))
        ? sourceValue
        : objectValue;
    }

    /**
     * A specialized version of `_.assign` for customizing assigned values without
     * support for argument juggling, multiple sources, and `this` binding `customizer`
     * functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     */
    function assignWith(object, source, customizer) {
      var index = -1,
          props = keys(source),
          length = props.length;

      while (++index < length) {
        var key = props[index],
            value = object[key],
            result = customizer(value, source[key], key, object, source);

        if ((result === result ? (result !== value) : (value === value)) ||
            (value === undefined && !(key in object))) {
          object[key] = result;
        }
      }
      return object;
    }

    /**
     * The base implementation of `_.assign` without support for argument juggling,
     * multiple sources, and `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return source == null
        ? object
        : baseCopy(source, keys(source), object);
    }

    /**
     * The base implementation of `_.at` without support for string collections
     * and individual key arguments.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {number[]|string[]} props The property names or indexes of elements to pick.
     * @returns {Array} Returns the new array of picked elements.
     */
    function baseAt(collection, props) {
      var index = -1,
          isNil = collection == null,
          isArr = !isNil && isArrayLike(collection),
          length = isArr ? collection.length : 0,
          propsLength = props.length,
          result = Array(propsLength);

      while(++index < propsLength) {
        var key = props[index];
        if (isArr) {
          result[index] = isIndex(key, length) ? collection[key] : undefined;
        } else {
          result[index] = isNil ? undefined : collection[key];
        }
      }
      return result;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property names to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @returns {Object} Returns `object`.
     */
    function baseCopy(source, props, object) {
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        object[key] = source[key];
      }
      return object;
    }

    /**
     * The base implementation of `_.callback` which supports specifying the
     * number of arguments to provide to `func`.
     *
     * @private
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function baseCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (type == 'function') {
        return thisArg === undefined
          ? func
          : bindCallback(func, thisArg, argCount);
      }
      if (func == null) {
        return identity;
      }
      if (type == 'object') {
        return baseMatches(func);
      }
      return thisArg === undefined
        ? property(func)
        : baseMatchesProperty(func, thisArg);
    }

    /**
     * The base implementation of `_.clone` without support for argument juggling
     * and `this` binding `customizer` functions.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The object `value` belongs to.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return arrayCopy(value, result);
        }
      } else {
        var tag = objToString.call(value),
            isFunc = tag == funcTag;

        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return baseAssign(result, value);
          }
        } else {
          return cloneableTags[tag]
            ? initCloneByTag(value, tag, isDeep)
            : (object ? value : {});
        }
      }
      // Check for circular references and return its corresponding clone.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      // Add the source value to the stack of traversed objects and associate it with its clone.
      stackA.push(value);
      stackB.push(result);

      // Recursively populate clone (susceptible to call stack limits).
      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
      });
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          object.prototype = prototype;
          var result = new object;
          object.prototype = undefined;
        }
        return result || {};
      };
    }());

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts an index
     * of where to slice the arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Object} args The arguments provide to `func`.
     * @returns {number} Returns the timer id.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of `_.difference` which accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values) {
      var length = array ? array.length : 0,
          result = [];

      if (!length) {
        return result;
      }
      var index = -1,
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
          valuesLength = values.length;

      if (cache) {
        indexOf = cacheIndexOf;
        isCommon = false;
        values = cache;
      }
      outer:
      while (++index < length) {
        var value = array[index];

        if (isCommon && value === value) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === value) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (indexOf(values, value, 0) < 0) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * Gets the extremum value of `collection` invoking `iteratee` for each value
     * in `collection` to generate the criterion by which the value is ranked.
     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(collection, iteratee, comparator, exValue) {
      var computed = exValue,
          result = computed;

      baseEach(collection, function(value, index, collection) {
        var current = +iteratee(value, index, collection);
        if (comparator(current, computed) || (current === exValue && current === result)) {
          computed = current;
          result = value;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : (end >>> 0);
      start >>>= 0;

      while (start < length) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
     * without support for callback shorthands and `this` binding, which iterates
     * over `collection` using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @param {boolean} [retKey] Specify returning the key of the found element
     *  instead of the element itself.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFind(collection, predicate, eachFunc, retKey) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = retKey ? key : value;
          return false;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with added support for restricting
     * flattening and specifying the start index.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, isDeep, isStrict, result) {
      result || (result = []);

      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) &&
            (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, isDeep, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForIn` and `baseForOwn` which iterates
     * over `object` properties returned by `keysFunc` invoking `iteratee` for
     * each property. Iteratee functions may exit iteration early by explicitly
     * returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forIn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForIn(object, iteratee) {
      return baseFor(object, iteratee, keysIn);
    }

    /**
     * The base implementation of `_.forOwn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from those provided.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the new array of filtered property names.
     */
    function baseFunctions(object, props) {
      var index = -1,
          length = props.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var key = props[index];
        if (isFunction(object[key])) {
          result[++resIndex] = key;
        }
      }
      return result;
    }

    /**
     * The base implementation of `get` without support for string paths
     * and default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path of the property to get.
     * @param {string} [pathKey] The key representation of path.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path, pathKey) {
      if (object == null) {
        return;
      }
      if (pathKey !== undefined && pathKey in toObject(object)) {
        path = [pathKey];
      }
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `_.isEqual` without support for `this` binding
     * `customizer` functions.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = objToString.call(object);
        if (objTag == argsTag) {
          objTag = objectTag;
        } else if (objTag != objectTag) {
          objIsArr = isTypedArray(object);
        }
      }
      if (!othIsArr) {
        othTag = objToString.call(other);
        if (othTag == argsTag) {
          othTag = objectTag;
        } else if (othTag != objectTag) {
          othIsArr = isTypedArray(other);
        }
      }
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
      }
      if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
      }
      if (!isSameTag) {
        return false;
      }
      // Assume cyclic values are equal.
      // For more information on detecting circular references see https://es5.github.io/#JO.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == object) {
          return stackB[length] == other;
        }
      }
      // Add `object` and `other` to the stack of traversed objects.
      stackA.push(object);
      stackB.push(other);

      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

      stackA.pop();
      stackB.pop();

      return result;
    }

    /**
     * The base implementation of `_.isMatch` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} matchData The propery names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = toObject(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.map` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which does not clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        var key = matchData[0][0],
            value = matchData[0][1];

        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === value && (value !== undefined || (key in toObject(object)));
        };
      }
      return function(object) {
        return baseIsMatch(object, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to compare.
     * @returns {Function} Returns the new function.
     */
    function baseMatchesProperty(path, srcValue) {
      var isArr = isArray(path),
          isCommon = isKey(path) && isStrictComparable(srcValue),
          pathKey = (path + '');

      path = toPath(path);
      return function(object) {
        if (object == null) {
          return false;
        }
        var key = pathKey;
        object = toObject(object);
        if ((isArr || !isCommon) && !(key in object)) {
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          if (object == null) {
            return false;
          }
          key = last(path);
          object = toObject(object);
        }
        return object[key] === srcValue
          ? (srcValue !== undefined || (key in object))
          : baseIsEqual(srcValue, object[key], undefined, true);
      };
    }

    /**
     * The base implementation of `_.merge` without support for argument juggling,
     * multiple sources, and `this` binding `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {Object} Returns `object`.
     */
    function baseMerge(object, source, customizer, stackA, stackB) {
      if (!isObject(object)) {
        return object;
      }
      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
          props = isSrcArr ? undefined : keys(source);

      arrayEach(props || source, function(srcValue, key) {
        if (props) {
          key = srcValue;
          srcValue = source[key];
        }
        if (isObjectLike(srcValue)) {
          stackA || (stackA = []);
          stackB || (stackB = []);
          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
        }
        else {
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = result === undefined;

          if (isCommon) {
            result = srcValue;
          }
          if ((result !== undefined || (isSrcArr && !(key in object))) &&
              (isCommon || (result === result ? (result !== value) : (value === value)))) {
            object[key] = result;
          }
        }
      });
      return object;
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
      var length = stackA.length,
          srcValue = source[key];

      while (length--) {
        if (stackA[length] == srcValue) {
          object[key] = stackB[length];
          return;
        }
      }
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;

      if (isCommon) {
        result = srcValue;
        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
          result = isArray(value)
            ? value
            : (isArrayLike(value) ? arrayCopy(value) : []);
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          result = isArguments(value)
            ? toPlainObject(value)
            : (isPlainObject(value) ? value : {});
        }
        else {
          isCommon = false;
        }
      }
      // Add the source value to the stack of traversed objects and associate
      // it with its merged value.
      stackA.push(srcValue);
      stackB.push(result);

      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
      } else if (result === result ? (result !== value) : (value === value)) {
        object[key] = result;
      }
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new function.
     */
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     */
    function basePropertyDeep(path) {
      var pathKey = (path + '');
      path = toPath(path);
      return function(object) {
        return baseGet(object, path, pathKey);
      };
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * index arguments and capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0;
      while (length--) {
        var index = indexes[length];
        if (index != previous && isIndex(index)) {
          var previous = index;
          splice.call(array, index, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for argument juggling
     * and returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns the random number.
     */
    function baseRandom(min, max) {
      return min + nativeFloor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.reduce` and `_.reduceRight` without support
     * for callback shorthands and `this` binding, which iterates over `collection`
     * using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initFromCollection Specify using the first or last element
     *  of `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
      eachFunc(collection, function(value, index, collection) {
        accumulator = initFromCollection
          ? (initFromCollection = false, value)
          : iteratee(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `setData` without support for hot loop detection.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortBy` which uses `comparer` to define
     * the sort order of `array` and replaces criteria objects with their
     * corresponding values.
     *
     * @private
     * @param {Array} array The array to sort.
     * @param {Function} comparer The function to define sort order.
     * @returns {Array} Returns `array`.
     */
    function baseSortBy(array, comparer) {
      var length = array.length;

      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }

    /**
     * The base implementation of `_.sortByOrder` without param guards.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseSortByOrder(collection, iteratees, orders) {
      var callback = getCallback(),
          index = -1;

      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

      var result = baseMap(collection, function(value) {
        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.sum` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function baseSum(collection, iteratee) {
      var result = 0;
      baseEach(collection, function(value, index, collection) {
        result += +iteratee(value, index, collection) || 0;
      });
      return result;
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The function invoked per iteration.
     * @returns {Array} Returns the new duplicate-value-free array.
     */
    function baseUniq(array, iteratee) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array.length,
          isCommon = indexOf == baseIndexOf,
          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
          seen = isLarge ? createCache() : null,
          result = [];

      if (seen) {
        indexOf = cacheIndexOf;
        isCommon = false;
      } else {
        isLarge = false;
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;

        if (isCommon && value === value) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (indexOf(seen, computed, 0) < 0) {
          if (iteratee || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
      var index = -1,
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /**
     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
     * and `_.takeWhile` without support for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to peform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      var index = -1,
          length = actions.length;

      while (++index < length) {
        var action = actions[index];
        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
      }
      return result;
    }

    /**
     * Performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndex(array, value, retHighest) {
      var low = 0,
          high = array ? array.length : low;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return binaryIndexBy(array, value, identity, retHighest);
    }

    /**
     * This function is like `binaryIndex` except that it invokes `iteratee` for
     * `value` and each element of `array` to compute their sort ranking. The
     * iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array ? array.length : 0,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsUndef = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            isDef = computed !== undefined,
            isReflexive = computed === computed;

        if (valIsNaN) {
          var setLow = isReflexive || retHighest;
        } else if (valIsNull) {
          setLow = isReflexive && isDef && (retHighest || computed != null);
        } else if (valIsUndef) {
          setLow = isReflexive && (retHighest || isDef);
        } else if (computed == null) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * A specialized version of `baseCallback` which only supports `this` binding
     * and specifying the number of arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function bindCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      if (thisArg === undefined) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
        case 5: return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
      }
      return function() {
        return func.apply(thisArg, arguments);
      };
    }

    /**
     * Creates a clone of the given array buffer.
     *
     * @private
     * @param {ArrayBuffer} buffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function bufferClone(buffer) {
      var result = new ArrayBuffer(buffer.byteLength),
          view = new Uint8Array(result);

      view.set(new Uint8Array(buffer));
      return result;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders) {
      var holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          leftIndex = -1,
          leftLength = partials.length,
          result = Array(leftLength + argsLength);

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
      while (argsLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders) {
      var holdersIndex = -1,
          holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          rightIndex = -1,
          rightLength = partials.length,
          result = Array(argsLength + rightLength);

      while (++argsIndex < argsLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
      return result;
    }

    /**
     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
     *
     * @private
     * @param {Function} setter The function to set keys and values of the accumulator object.
     * @param {Function} [initializer] The function to initialize the accumulator object.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee, thisArg) {
        var result = initializer ? initializer() : {};
        iteratee = getCallback(iteratee, thisArg, 3);

        if (isArray(collection)) {
          var index = -1,
              length = collection.length;

          while (++index < length) {
            var value = collection[index];
            setter(result, value, iteratee(value, index, collection), collection);
          }
        } else {
          baseEach(collection, function(value, key, collection) {
            setter(result, value, iteratee(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return restParam(function(object, sources) {
        var index = -1,
            length = object == null ? 0 : sources.length,
            customizer = length > 2 ? sources[length - 2] : undefined,
            guard = length > 2 ? sources[2] : undefined,
            thisArg = length > 1 ? sources[length - 1] : undefined;

        if (typeof customizer == 'function') {
          customizer = bindCallback(customizer, thisArg, 5);
          length -= 2;
        } else {
          customizer = typeof thisArg == 'function' ? thisArg : undefined;
          length -= (customizer ? 1 : 0);
        }
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        var length = collection ? getLength(collection) : 0;
        if (!isLength(length)) {
          return eachFunc(collection, iteratee);
        }
        var index = fromRight ? length : -1,
            iterable = toObject(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var iterable = toObject(object),
            props = keysFunc(object),
            length = props.length,
            index = fromRight ? length : -1;

        while ((fromRight ? index-- : ++index < length)) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with the `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new bound function.
     */
    function createBindWrapper(func, thisArg) {
      var Ctor = createCtorWrapper(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(thisArg, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a `Set` cache object to optimize linear searches of large arrays.
     *
     * @private
     * @param {Array} [values] The values to cache.
     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
     */
    function createCache(values) {
      return (nativeCreate && Set) ? new SetCache(values) : null;
    }

    /**
     * Creates a function that produces compound words out of the words in a
     * given string.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        var index = -1,
            array = words(deburr(string)),
            length = array.length,
            result = '';

        while (++index < length) {
          result = callback(result, array[index], index);
        }
        return result;
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtorWrapper(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors.
        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a `_.curry` or `_.curryRight` function.
     *
     * @private
     * @param {boolean} flag The curry bit flag.
     * @returns {Function} Returns the new curry function.
     */
    function createCurry(flag) {
      function curryFunc(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = undefined;
        }
        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
        result.placeholder = curryFunc.placeholder;
        return result;
      }
      return curryFunc;
    }

    /**
     * Creates a `_.defaults` or `_.defaultsDeep` function.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Function} Returns the new defaults function.
     */
    function createDefaults(assigner, customizer) {
      return restParam(function(args) {
        var object = args[0];
        if (object == null) {
          return object;
        }
        args.push(customizer);
        return assigner.apply(undefined, args);
      });
    }

    /**
     * Creates a `_.max` or `_.min` function.
     *
     * @private
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {Function} Returns the new extremum function.
     */
    function createExtremum(comparator, exValue) {
      return function(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = undefined;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        if (iteratee.length == 1) {
          collection = isArray(collection) ? collection : toIterable(collection);
          var result = arrayExtremum(collection, iteratee, comparator, exValue);
          if (!(collection.length && result === exValue)) {
            return result;
          }
        }
        return baseExtremum(collection, iteratee, comparator, exValue);
      };
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFind(eachFunc, fromRight) {
      return function(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        if (isArray(collection)) {
          var index = baseFindIndex(collection, predicate, fromRight);
          return index > -1 ? collection[index] : undefined;
        }
        return baseFind(collection, predicate, eachFunc);
      };
    }

    /**
     * Creates a `_.findIndex` or `_.findLastIndex` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFindIndex(fromRight) {
      return function(array, predicate, thisArg) {
        if (!(array && array.length)) {
          return -1;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFindIndex(array, predicate, fromRight);
      };
    }

    /**
     * Creates a `_.findKey` or `_.findLastKey` function.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new find function.
     */
    function createFindKey(objectFunc) {
      return function(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, objectFunc, true);
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return function() {
        var wrapper,
            length = arguments.length,
            index = fromRight ? length : -1,
            leftIndex = 0,
            funcs = Array(length);

        while ((fromRight ? index-- : ++index < length)) {
          var func = funcs[leftIndex++] = arguments[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
            wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? -1 : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      };
    }

    /**
     * Creates a function for `_.forEach` or `_.forEachRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createForEach(arrayFunc, eachFunc) {
      return function(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee)
          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
      };
    }

    /**
     * Creates a function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForIn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee, keysIn);
      };
    }

    /**
     * Creates a function for `_.forOwn` or `_.forOwnRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForOwn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee);
      };
    }

    /**
     * Creates a function for `_.mapKeys` or `_.mapValues`.
     *
     * @private
     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
     * @returns {Function} Returns the new map function.
     */
    function createObjectMapper(isMapKeys) {
      return function(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);

        baseForOwn(object, function(value, key, object) {
          var mapped = iteratee(value, key, object);
          key = isMapKeys ? mapped : key;
          value = isMapKeys ? value : mapped;
          result[key] = value;
        });
        return result;
      };
    }

    /**
     * Creates a function for `_.padLeft` or `_.padRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify padding from the right.
     * @returns {Function} Returns the new pad function.
     */
    function createPadDir(fromRight) {
      return function(string, length, chars) {
        string = baseToString(string);
        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
      };
    }

    /**
     * Creates a `_.partial` or `_.partialRight` function.
     *
     * @private
     * @param {boolean} flag The partial bit flag.
     * @returns {Function} Returns the new partial function.
     */
    function createPartial(flag) {
      var partialFunc = restParam(function(func, partials) {
        var holders = replaceHolders(partials, partialFunc.placeholder);
        return createWrapper(func, flag, undefined, partials, holders);
      });
      return partialFunc;
    }

    /**
     * Creates a function for `_.reduce` or `_.reduceRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createReduce(arrayFunc, eachFunc) {
      return function(collection, iteratee, accumulator, thisArg) {
        var initFromArray = arguments.length < 3;
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with optional `this`
     * binding of, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG,
          isBind = bitmask & BIND_FLAG,
          isBindKey = bitmask & BIND_KEY_FLAG,
          isCurry = bitmask & CURRY_FLAG,
          isCurryBound = bitmask & CURRY_BOUND_FLAG,
          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
          Ctor = isBindKey ? undefined : createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it to other functions.
        var length = arguments.length,
            index = length,
            args = Array(length);

        while (index--) {
          args[index] = arguments[index];
        }
        if (partials) {
          args = composeArgs(args, partials, holders);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight);
        }
        if (isCurry || isCurryRight) {
          var placeholder = wrapper.placeholder,
              argsHolders = replaceHolders(args, placeholder);

          length -= argsHolders.length;
          if (length < arity) {
            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                newArity = nativeMax(arity - length, 0),
                newsHolders = isCurry ? argsHolders : undefined,
                newHoldersRight = isCurry ? undefined : argsHolders,
                newPartials = isCurry ? args : undefined,
                newPartialsRight = isCurry ? undefined : args;

            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

            if (!isCurryBound) {
              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
            }
            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                result = createHybridWrapper.apply(undefined, newData);

            if (isLaziable(func)) {
              setData(result, newData);
            }
            result.placeholder = placeholder;
            return result;
          }
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        if (argPos) {
          args = reorder(args, argPos);
        }
        if (isAry && ary < args.length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtorWrapper(func);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates the padding required for `string` based on the given `length`.
     * The `chars` string is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {string} string The string to create padding for.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the pad for `string`.
     */
    function createPadding(string, length, chars) {
      var strLength = string.length;
      length = +length;

      if (strLength >= length || !nativeIsFinite(length)) {
        return '';
      }
      var padLength = length - strLength;
      chars = chars == null ? ' ' : (chars + '');
      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
    }

    /**
     * Creates a function that wraps `func` and invokes it with the optional `this`
     * binding of `thisArg` and the `partials` prepended to those provided to
     * the wrapper.
     *
     * @private
     * @param {Function} func The function to partially apply arguments to.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to the new function.
     * @returns {Function} Returns the new bound function.
     */
    function createPartialWrapper(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it `func`.
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength);

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        precision = precision === undefined ? 0 : (+precision || 0);
        if (precision) {
          precision = pow(10, precision);
          return func(number * precision) / precision;
        }
        return func(number);
      };
    }

    /**
     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
     *
     * @private
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {Function} Returns the new index function.
     */
    function createSortedIndex(retHighest) {
      return function(array, value, iteratee, thisArg) {
        var callback = getCallback(iteratee);
        return (iteratee == null && callback === baseCallback)
          ? binaryIndex(array, value, retHighest)
          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags.
     *  The bitmask may be composed of the following flags:
     *     1 - `_.bind`
     *     2 - `_.bindKey`
     *     4 - `_.curry` or `_.curryRight` of a bound function
     *     8 - `_.curry`
     *    16 - `_.curryRight`
     *    32 - `_.partial`
     *    64 - `_.partialRight`
     *   128 - `_.rearg`
     *   256 - `_.ary`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      length -= (holders ? holders.length : 0);
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func),
          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

      if (data) {
        mergeData(newData, data);
        bitmask = newData[1];
        arity = newData[9];
      }
      newData[9] = arity == null
        ? (isBindKey ? 0 : func.length)
        : (nativeMax(arity - length, 0) || 0);

      if (bitmask == BIND_FLAG) {
        var result = createBindWrapper(newData[0], newData[2]);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
        result = createPartialWrapper.apply(undefined, newData);
      } else {
        result = createHybridWrapper.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setter(result, newData);
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing arrays.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var index = -1,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
        return false;
      }
      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index],
            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

        if (result !== undefined) {
          if (result) {
            continue;
          }
          return false;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isLoose) {
          if (!arraySome(other, function(othValue) {
                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
              })) {
            return false;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag) {
      switch (tag) {
        case boolTag:
        case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
          return +object == +other;

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return (object != +object)
            ? other != +other
            : object == +other;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings primitives and string
          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
          return object == (other + '');
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isLoose) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var skipCtor = isLoose;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key],
            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

        // Recursively compare objects (susceptible to call stack limits).
        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
          return false;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (!skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Gets the appropriate "callback" function. If the `_.callback` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseCallback` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function} Returns the chosen function or its result.
     */
    function getCallback(func, thisArg, argCount) {
      var result = lodash.callback || callback;
      result = result === callback ? baseCallback : result;
      return argCount ? result(func, thisArg, argCount) : result;
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = func.name,
          array = realNames[result],
          length = array ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseIndexOf` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function|number} Returns the chosen function or its result.
     */
    function getIndexOf(collection, target, fromIndex) {
      var result = lodash.indexOf || indexOf;
      result = result === indexOf ? baseIndexOf : result;
      return collection ? result(collection, target, fromIndex) : result;
    }

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
     * that affects Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    /**
     * Gets the propery names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = pairs(object),
          length = result.length;

      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object == null ? undefined : object[key];
      return isNative(value) ? value : undefined;
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add array properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      var Ctor = object.constructor;
      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
        Ctor = Object;
      }
      return new Ctor;
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return bufferClone(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          var buffer = object.buffer;
          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          var result = new Ctor(object.source, reFlags.exec(object));
          result.lastIndex = object.lastIndex;
      }
      return result;
    }

    /**
     * Invokes the method at `path` on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function invokePath(object, path, args) {
      if (object != null && !isKey(path, object)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        path = last(path);
      }
      var func = object == null ? object : object[path];
      return func == null ? undefined : func.apply(object, args);
    }

    /**
     * Checks if `value` is array-like.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     */
    function isArrayLike(value) {
      return value != null && isLength(getLength(value));
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }

    /**
     * Checks if the provided arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)) {
        var other = object[index];
        return value === value ? (value === other) : (other !== other);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      var type = typeof value;
      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
        return true;
      }
      if (isArray(value)) {
        return false;
      }
      var result = !reIsDeepProp.test(value);
      return result || (object != null && value in toObject(object));
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func);
      if (!(funcName in LazyWrapper.prototype)) {
        return false;
      }
      var other = lodash[funcName];
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     */
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers required to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
     * augment function arguments, making the order in which they are executed important,
     * preventing the merging of metadata. However, we make an exception for a safe
     * common case where curried functions have `_.ary` and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < ARY_FLAG;

      var isCombo =
        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = arrayCopy(value);
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function mergeDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties specified
     * by `props`.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property names to pick.
     * @returns {Object} Returns the new object.
     */
    function pickByArray(object, props) {
      object = toObject(object);

      var index = -1,
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties `predicate`
     * returns truthy for.
     *
     * @private
     * @param {Object} object The source object.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Object} Returns the new object.
     */
    function pickByCallback(object, predicate) {
      var result = {};
      baseForIn(object, function(value, key, object) {
        if (predicate(value, key, object)) {
          result[key] = value;
        }
      });
      return result;
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = arrayCopy(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity function
     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = (function() {
      var count = 0,
          lastCalled = 0;

      return function(key, value) {
        var stamp = now(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return key;
          }
        } else {
          count = 0;
        }
        return baseSetData(key, value);
      };
    }());

    /**
     * A fallback implementation of `Object.keys` which creates an array of the
     * own enumerable property names of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function shimKeys(object) {
      var props = keysIn(object),
          propsLength = props.length,
          length = propsLength && object.length;

      var allowIndexes = !!length && isLength(length) &&
        (isArray(object) || isArguments(object));

      var index = -1,
          result = [];

      while (++index < propsLength) {
        var key = props[index];
        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to an array-like object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array|Object} Returns the array-like object.
     */
    function toIterable(value) {
      if (value == null) {
        return [];
      }
      if (!isArrayLike(value)) {
        return values(value);
      }
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to an object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Object} Returns the object.
     */
    function toObject(value) {
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to property path array if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array} Returns the property path array.
     */
    function toPath(value) {
      if (isArray(value)) {
        return value;
      }
      var result = [];
      baseToString(value).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      return wrapper instanceof LazyWrapper
        ? wrapper.clone()
        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `collection` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new array containing chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
      } else {
        size = nativeMax(nativeFloor(size) || 1, 1);
      }
      var index = 0,
          length = array ? array.length : 0,
          resIndex = -1,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[++resIndex] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * Creates an array of unique `array` values not included in the other
     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3], [4, 2]);
     * // => [1, 3]
     */
    var difference = restParam(function(array, values) {
      return (isObjectLike(array) && isArrayLike(array))
        ? baseDifference(array, baseFlatten(values, false, true))
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that match the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [1]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
     * // => ['barney']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropWhile(users, 'active', false), 'user');
     * // => ['pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8], '*', 1, 2);
     * // => [4, '*', 8]
     */
    function fill(array, value, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(chr) {
     *   return chr.user == 'barney';
     * });
     * // => 0
     *
     * // using the `_.matches` callback shorthand
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findIndex(users, 'active', false);
     * // => 0
     *
     * // using the `_.property` callback shorthand
     * _.findIndex(users, 'active');
     * // => 2
     */
    var findIndex = createFindIndex();

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(chr) {
     *   return chr.user == 'pebbles';
     * });
     * // => 2
     *
     * // using the `_.matches` callback shorthand
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastIndex(users, 'active', false);
     * // => 2
     *
     * // using the `_.property` callback shorthand
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    var findLastIndex = createFindIndex(true);

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias head
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([]);
     * // => undefined
     */
    function first(array) {
      return array ? array[0] : undefined;
    }

    /**
     * Flattens a nested array. If `isDeep` is `true` the array is recursively
     * flattened, otherwise it is only flattened a single level.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, 3, [4]]]);
     * // => [1, 2, 3, [4]]
     *
     * // using `isDeep`
     * _.flatten([1, [2, 3, [4]]], true);
     * // => [1, 2, 3, 4]
     */
    function flatten(array, isDeep, guard) {
      var length = array ? array.length : 0;
      if (guard && isIterateeCall(array, isDeep, guard)) {
        isDeep = false;
      }
      return length ? baseFlatten(array, isDeep) : [];
    }

    /**
     * Recursively flattens a nested array.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to recursively flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, 3, [4]]]);
     * // => [1, 2, 3, 4]
     */
    function flattenDeep(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, true) : [];
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
     * performs a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // using `fromIndex`
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     *
     * // performing a binary search
     * _.indexOf([1, 1, 2, 2], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      if (typeof fromIndex == 'number') {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
      } else if (fromIndex) {
        var index = binaryIndex(array, value);
        if (index < length &&
            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
          return index;
        }
        return -1;
      }
      return baseIndexOf(array, value, fromIndex || 0);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      return dropRight(array, 1);
    }

    /**
     * Creates an array of unique values that are included in all of the provided
     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of shared values.
     * @example
     * _.intersection([1, 2], [4, 2], [2, 1]);
     * // => [2]
     */
    var intersection = restParam(function(arrays) {
      var othLength = arrays.length,
          othIndex = othLength,
          caches = Array(length),
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          result = [];

      while (othIndex--) {
        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
      }
      var array = arrays[0],
          index = -1,
          length = array ? array.length : 0,
          seen = caches[0];

      outer:
      while (++index < length) {
        value = array[index];
        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
          var othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(value);
          }
          result.push(value);
        }
      }
      return result;
    });

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
     *  or `true` to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // using `fromIndex`
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     *
     * // performing a binary search
     * _.lastIndexOf([1, 1, 2, 2], 2, true);
     * // => 3
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
      } else if (fromIndex) {
        index = binaryIndex(array, value, true) - 1;
        var other = array[index];
        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      if (value !== value) {
        return indexOfNaN(array, index, true);
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     *
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull() {
      var args = arguments,
          array = args[0];

      if (!(array && array.length)) {
        return array;
      }
      var index = 0,
          indexOf = getIndexOf(),
          length = args.length;

      while (++index < length) {
        var fromIndex = 0,
            value = args[index];

        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * Removes elements from `array` corresponding to the given indexes and returns
     * an array of the removed elements. Indexes may be specified as an array of
     * indexes or as individual arguments.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [5, 10, 15, 20];
     * var evens = _.pullAt(array, 1, 3);
     *
     * console.log(array);
     * // => [5, 15]
     *
     * console.log(evens);
     * // => [10, 20]
     */
    var pullAt = restParam(function(array, indexes) {
      indexes = baseFlatten(indexes);

      var result = baseAt(array, indexes);
      basePullAt(array, indexes.sort(baseCompareAscending));
      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate, thisArg) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getCallback(predicate, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias tail
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     */
    function rest(array) {
      return drop(array, 1);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of `Array#slice` to support node
     * lists in IE < 9 and to ensure dense arrays are returned.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order. If an iteratee
     * function is provided it is invoked for `value` and each element of `array`
     * to compute their sort ranking. The iteratee is bound to `thisArg` and
     * invoked with one argument; (value).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 4, 5, 5], 5);
     * // => 2
     *
     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
     *
     * // using an iteratee function
     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
     *   return this.data[word];
     * }, dict);
     * // => 1
     *
     * // using the `_.property` callback shorthand
     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 1
     */
    var sortedIndex = createSortedIndex();

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 4, 5, 5], 5);
     * // => 4
     */
    var sortedLastIndex = createSortedIndex(true);

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
     * and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [2, 3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
     * // => []
     */
    function takeRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [1, 2]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false},
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeWhile(users, 'active', false), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeWhile(users, 'active'), 'user');
     * // => []
     */
    function takeWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all of the provided arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([1, 2], [4, 2], [2, 1]);
     * // => [1, 2, 4]
     */
    var union = restParam(function(arrays) {
      return baseUniq(baseFlatten(arrays, false, true));
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurence of each element
     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
     * for sorted arrays. If an iteratee function is provided it is invoked for
     * each element in the array to generate the criterion by which uniqueness
     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, array).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {boolean} [isSorted] Specify the array is sorted.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new duplicate-value-free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     *
     * // using `isSorted`
     * _.uniq([1, 1, 2], true);
     * // => [1, 2]
     *
     * // using an iteratee function
     * _.uniq([1, 2.5, 1.5, 2], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => [1, 2.5]
     *
     * // using the `_.property` callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (isSorted != null && typeof isSorted != 'boolean') {
        thisArg = iteratee;
        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
        isSorted = false;
      }
      var callback = getCallback();
      if (!(iteratee == null && callback === baseCallback)) {
        iteratee = callback(iteratee, thisArg, 3);
      }
      return (isSorted && getIndexOf() == baseIndexOf)
        ? sortedUniq(array, iteratee)
        : baseUniq(array, iteratee);
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     *
     * _.unzip(zipped);
     * // => [['fred', 'barney'], [30, 40], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var index = -1,
          length = 0;

      array = arrayFilter(array, function(group) {
        if (isArrayLike(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      var result = Array(length);
      while (++index < length) {
        result[index] = arrayMap(array, baseProperty(index));
      }
      return result;
    }

    /**
     * This method is like `_.unzip` except that it accepts an iteratee to specify
     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee] The function to combine regrouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      iteratee = bindCallback(iteratee, thisArg, 4);
      return arrayMap(result, function(group) {
        return arrayReduce(group, iteratee, undefined, true);
      });
    }

    /**
     * Creates an array excluding all provided values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to filter.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 3], 1, 2);
     * // => [3]
     */
    var without = restParam(function(array, values) {
      return isArrayLike(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the provided arrays.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * _.xor([1, 2], [4, 2]);
     * // => [1, 4]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArrayLike(array)) {
          var result = result
            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
            : array;
        }
      }
      return result ? baseUniq(result) : [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second elements
     * of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    var zip = restParam(unzip);

    /**
     * The inverse of `_.pairs`; this method returns an object composed from arrays
     * of property names and values. Provide either a single two dimensional array,
     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
     * and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Array
     * @param {Array} props The property names.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject([['fred', 30], ['barney', 40]]);
     * // => { 'fred': 30, 'barney': 40 }
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(props, values) {
      var index = -1,
          length = props ? props.length : 0,
          result = {};

      if (length && !values && !isArray(props[0])) {
        values = [];
      }
      while (++index < length) {
        var key = props[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /**
     * This method is like `_.zip` except that it accepts an iteratee to specify
     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee] The function to combine grouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
     * // => [111, 222]
     */
    var zipWith = restParam(function(arrays) {
      var length = arrays.length,
          iteratee = length > 2 ? arrays[length - 2] : undefined,
          thisArg = length > 1 ? arrays[length - 1] : undefined;

      if (length > 2 && typeof iteratee == 'function') {
        length -= 2;
      } else {
        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
        thisArg = undefined;
      }
      arrays.length = length;
      return unzipWith(arrays, iteratee, thisArg);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps `value` with explicit method
     * chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(users)
     *   .sortBy('age')
     *   .map(function(chr) {
     *     return chr.user + ' is ' + chr.age;
     *   })
     *   .first()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor is
     * bound to `thisArg` and invoked with one argument; (value). The purpose of
     * this method is to "tap into" a method chain in order to perform operations
     * on intermediate results within the chain.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor, thisArg) {
      interceptor.call(thisArg, value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor, thisArg) {
      return interceptor.call(thisArg, value);
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(users).first();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(users).chain()
     *   .first()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chained sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Creates a new array joining a wrapped array with any additional arrays
     * and/or values.
     *
     * @name concat
     * @memberOf _
     * @category Chain
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var wrapped = _(array).concat(2, [3], [[4]]);
     *
     * console.log(wrapped.value());
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    var wrapperConcat = restParam(function(values) {
      values = baseFlatten(values);
      return this.thru(function(array) {
        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
      });
    });

    /**
     * Creates a clone of the chained sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).map(function(value) {
     *   return Math.pow(value, 2);
     * });
     *
     * var other = [3, 4];
     * var otherWrapped = wrapped.plant(other);
     *
     * otherWrapped.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * Reverses the wrapped array so the first element becomes the last, the
     * second element becomes the second to last, and so on.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;

      var interceptor = function(value) {
        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
      };
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(interceptor);
    }

    /**
     * Produces the result of coercing the unwrapped value to a string.
     *
     * @name toString
     * @memberOf _
     * @category Chain
     * @returns {string} Returns the coerced string value.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return (this.value() + '');
    }

    /**
     * Executes the chained sequence to extract the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @alias run, toJSON, valueOf
     * @category Chain
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements corresponding to the given keys, or indexes,
     * of `collection`. Keys may be specified as individual arguments or as arrays
     * of keys.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [props] The property names
     *  or indexes of elements to pick, specified individually or in arrays.
     * @returns {Array} Returns the new array of picked elements.
     * @example
     *
     * _.at(['a', 'b', 'c'], [0, 2]);
     * // => ['a', 'c']
     *
     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
     * // => ['barney', 'pebbles']
     */
    var at = restParam(function(collection, props) {
      return baseAt(collection, baseFlatten(props));
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the number of times the key was returned by `iteratee`.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * The predicate is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'active': false },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.every(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.filter([4, 5, 6], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [4, 6]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.filter(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.filter(users, 'active'), 'user');
     * // => ['barney']
     */
    function filter(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.result(_.find(users, function(chr) {
     *   return chr.age < 40;
     * }), 'user');
     * // => 'barney'
     *
     * // using the `_.matches` callback shorthand
     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.result(_.find(users, 'active', false), 'user');
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.result(_.find(users, 'active'), 'user');
     * // => 'barney'
     */
    var find = createFind(baseEach);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(baseEachRight, true);

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning the first element that has equivalent property
     * values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
     * // => 'barney'
     *
     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
     * // => 'fred'
     */
    function findWhere(collection, source) {
      return find(collection, baseMatches(source));
    }

    /**
     * Iterates over elements of `collection` invoking `iteratee` for each element.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early
     * by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length" property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEach(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from left to right and returns the array
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
     *   console.log(n, key);
     * });
     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
     */
    var forEach = createForEach(arrayEach, baseEach);

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEachRight(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from right to left and returns the array
     */
    var forEachRight = createForEach(arrayEachRight, baseEachRight);

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using the `_.property` callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });

    /**
     * Checks if `value` is in `collection` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @alias contains, include
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {*} target The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.includes('pebbles', 'eb');
     * // => true
     */
    function includes(collection, target, fromIndex, guard) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        collection = values(collection);
        length = collection.length;
      }
      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
        fromIndex = 0;
      } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
      }
      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the last element responsible for generating the key. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keyData = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keyData, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return String.fromCharCode(object.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return this.fromCharCode(object.code);
     * }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `methodName` is a function it is
     * invoked for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invoke = restParam(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          isProp = isKey(path),
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
      });
      return result;
    });

    /**
     * Creates an array of values by running each element in `collection` through
     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
     * `sum`, `uniq`, and `words`
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function timesThree(n) {
     *   return n * 3;
     * }
     *
     * _.map([1, 2], timesThree);
     * // => [3, 6]
     *
     * _.map({ 'a': 1, 'b': 2 }, timesThree);
     * // => [3, 6] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee, thisArg) {
      var func = isArray(collection) ? arrayMap : baseMap;
      iteratee = getCallback(iteratee, thisArg, 3);
      return func(collection, iteratee);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, while the second of which
     * contains elements `predicate` returns falsey for. The predicate is bound
     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * _.partition([1, 2, 3], function(n) {
     *   return n % 2;
     * });
     * // => [[1, 3], [2]]
     *
     * _.partition([1.2, 2.3, 3.4], function(n) {
     *   return this.floor(n) % 2;
     * }, Math);
     * // => [[1.2, 3.4], [2.3]]
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * var mapper = function(array) {
     *   return _.pluck(array, 'user');
     * };
     *
     * // using the `_.matches` callback shorthand
     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
     * // => [['pebbles'], ['barney', 'fred']]
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.map(_.partition(users, 'active', false), mapper);
     * // => [['barney', 'pebbles'], ['fred']]
     *
     * // using the `_.property` callback shorthand
     * _.map(_.partition(users, 'active'), mapper);
     * // => [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Gets the property value of `path` from all elements in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|string} path The path of the property to pluck.
     * @returns {Array} Returns the property values.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(users, 'user');
     * // => ['barney', 'fred']
     *
     * var userIndex = _.indexBy(users, 'user');
     * _.pluck(userIndex, 'age');
     * // => [36, 40] (iteration order is not guaranteed)
     */
    function pluck(collection, path) {
      return map(collection, property(path));
    }

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` through `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not provided the first element of `collection` is used as the initial
     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
     * and `sortByOrder`
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.reduce([1, 2], function(total, n) {
     *   return total + n;
     * });
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
     */
    var reduce = createReduce(arrayReduce, baseEach);

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.reject([1, 2, 3, 4], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [1, 3]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.reject(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.reject(users, 'active'), 'user');
     * // => ['barney']
     */
    function reject(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, function(value, index, collection) {
        return !predicate(value, index, collection);
      });
    }

    /**
     * Gets a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {*} Returns the random sample(s).
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
        collection = toIterable(collection);
        var length = collection.length;
        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
      }
      var index = -1,
          result = toArray(collection),
          length = result.length,
          lastIndex = length - 1;

      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
      while (++index < n) {
        var rand = baseRandom(index, lastIndex),
            value = result[rand];

        result[rand] = result[index];
        result[index] = value;
      }
      result.length = n;
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      return sample(collection, POSITIVE_INFINITY);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the size of `collection`.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? getLength(collection) : 0;
      return isLength(length) ? length : keys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * The function returns as soon as it finds a passing value and does not iterate
     * over the entire collection. The predicate is bound to `thisArg` and invoked
     * with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.some(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, thisArg) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through `iteratee`. This method performs
     * a stable sort, that is, it preserves the original sort order of equal elements.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return Math.sin(n);
     * });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return this.sin(n);
     * }, Math);
     * // => [3, 1, 2]
     *
     * var users = [
     *   { 'user': 'fred' },
     *   { 'user': 'pebbles' },
     *   { 'user': 'barney' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.sortBy(users, 'user'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function sortBy(collection, iteratee, thisArg) {
      if (collection == null) {
        return [];
      }
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      var index = -1;
      iteratee = getCallback(iteratee, thisArg, 3);

      var result = baseMap(collection, function(value, key, collection) {
        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
      });
      return baseSortBy(result, compareAscending);
    }

    /**
     * This method is like `_.sortBy` except that it can sort by multiple iteratees
     * or property names.
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
     *  The iteratees to sort by, specified as individual values or arrays of values.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.map(_.sortByAll(users, 'user', function(chr) {
     *   return Math.floor(chr.age / 10);
     * }), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    var sortByAll = restParam(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var guard = iteratees[2];
      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
        iteratees.length = 1;
      }
      return baseSortByOrder(collection, baseFlatten(iteratees), []);
    });

    /**
     * This method is like `_.sortByAll` except that it allows specifying the
     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
     * values are sorted in ascending order. Otherwise, a value is sorted in
     * ascending order if its corresponding order is "asc", and descending if "desc".
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // sort by `user` in ascending order and by `age` in descending order
     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    function sortByOrder(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (guard && isIterateeCall(iteratees, orders, guard)) {
        orders = undefined;
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseSortByOrder(collection, iteratees, orders);
    }

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning an array of all elements that have equivalent
     * property values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
     * // => ['barney']
     *
     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
     * // => ['fred']
     */
    function where(collection, source) {
      return filter(collection, baseMatches(source));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Date
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => logs the number of milliseconds it took for the deferred function to be invoked
     */
    var now = nativeNow || function() {
      return new Date().getTime();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it is called `n` or more times.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'done saving!' after the two async saves have completed
     */
    function after(n, func) {
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      n = nativeIsFinite(n = +n) ? n : 0;
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that accepts up to `n` arguments ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      if (guard && isIterateeCall(func, n, guard)) {
        n = undefined;
      }
      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it is called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery('#add').on('click', _.before(5, addContactToList));
     * // => allows adding up to 4 contacts to the list
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and prepends any additional `_.bind` arguments to those provided to the
     * bound function.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind` this method does not set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var greet = function(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * };
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // using placeholders
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = restParam(function(func, thisArg, partials) {
      var bitmask = BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bind.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all enumerable function
     * properties, own and inherited, of `object` are bound.
     *
     * **Note:** This method does not set the "length" property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} [methodNames] The object method names to bind,
     *  specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs' when the element is clicked
     */
    var bindAll = restParam(function(object, methodNames) {
      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

      var index = -1,
          length = methodNames.length;

      while (++index < length) {
        var key = methodNames[index];
        object[key] = createWrapper(object[key], BIND_FLAG, object);
      }
      return object;
    });

    /**
     * Creates a function that invokes the method at `object[key]` and prepends
     * any additional `_.bindKey` arguments to those provided to the bound function.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist.
     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // using placeholders
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = restParam(function(object, key, partials) {
      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bindKey.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts one or more arguments of `func` that when
     * called either invokes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` may be specified
     * if `func.length` is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    var curry = createCurry(CURRY_FLAG);

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    var curryRight = createCurry(CURRY_RIGHT_FLAG);

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed invocations. Provide an options object to indicate that `func`
     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
     * Subsequent calls to the debounced function return the result of the last
     * `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify invoking on the leading
     *  edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
     *  delayed before it is invoked.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // ensure `batchLog` is invoked once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }));
     *
     * // cancel a debounced call
     * var todoChanges = _.debounce(batchLog, 1000);
     * Object.observe(models.todo, todoChanges);
     *
     * Object.observe(models, function(changes) {
     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
     *     todoChanges.cancel();
     *   }
     * }, ['delete']);
     *
     * // ...at some point `models.todo` is changed
     * models.todo.completed = true;
     *
     * // ...before 1 second has passed `models.todo` is deleted
     * // which cancels the debounced `todoChanges` call
     * delete models.todo;
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = wait < 0 ? 0 : (+wait || 0);
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = !!options.leading;
        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        lastCalled = 0;
        maxTimeoutId = timeoutId = trailingCall = undefined;
      }

      function complete(isCalled, id) {
        if (id) {
          clearTimeout(id);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (isCalled) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = undefined;
          }
        }
      }

      function delayed() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0 || remaining > wait) {
          complete(trailingCall, maxTimeoutId);
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      }

      function maxDelayed() {
        complete(trailing, timeoutId);
      }

      function debounced() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0 || remaining > maxWait;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = undefined;
        }
        return result;
      }
      debounced.cancel = cancel;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    var defer = restParam(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => logs 'later' after one second
     */
    var delay = restParam(function(func, wait, args) {
      return baseDelay(func, wait, args);
    });

    /**
     * Creates a function that returns the result of invoking the provided
     * functions with the `this` binding of the created function, where each
     * successive invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow(_.add, square);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the provided functions from right to left.
     *
     * @static
     * @memberOf _
     * @alias backflow, compose
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight(square, _.add);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is coerced to a string and used as the
     * cache key. The `func` is invoked with the `this` binding of the memoized
     * function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var upperCase = _.memoize(function(string) {
     *   return string.toUpperCase();
     * });
     *
     * upperCase('fred');
     * // => 'FRED'
     *
     * // modifying the result cache
     * upperCase.cache.set('fred', 'BARNEY');
     * upperCase('fred');
     * // => 'BARNEY'
     *
     * // replacing `_.memoize.Cache`
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'barney' };
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'fred' }
     *
     * _.memoize.Cache = WeakMap;
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'barney' }
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new memoize.Cache;
      return memoized;
    }

    /**
     * Creates a function that runs each argument through a corresponding
     * transform function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms] The functions to transform
     * arguments, specified as individual functions or arrays of functions.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var modded = _.modArgs(function(x, y) {
     *   return [x, y];
     * }, square, doubled);
     *
     * modded(1, 2);
     * // => [1, 4]
     *
     * modded(5, 10);
     * // => [25, 20]
     */
    var modArgs = restParam(function(func, transforms) {
      transforms = baseFlatten(transforms);
      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = transforms.length;
      return restParam(function(args) {
        var index = nativeMin(args.length, length);
        while (index--) {
          args[index] = transforms[index](args[index]);
        }
        return func.apply(this, args);
      });
    });

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        return !predicate.apply(this, arguments);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first call. The `func` is invoked
     * with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` invokes `createApplication` once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with `partial` arguments prepended
     * to those provided to the new function. This method is like `_.bind` except
     * it does **not** alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // using placeholders
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = createPartial(PARTIAL_FLAG);

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to those provided to the new function.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // using placeholders
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified indexes where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, 2, 0, 1);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     *
     * var map = _.rearg(_.map, [1, 0]);
     * map(function(n) {
     *   return n * 3;
     * }, [1, 2, 3]);
     * // => [3, 6, 9]
     */
    var rearg = restParam(function(func, indexes) {
      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as an array.
     *
     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.restParam(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function restParam(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            rest = Array(length);

        while (++index < length) {
          rest[index] = args[start + index];
        }
        switch (start) {
          case 0: return func.call(this, rest);
          case 1: return func.call(this, args[0], rest);
          case 2: return func.call(this, args[0], args[1], rest);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = rest;
        return func.apply(this, otherArgs);
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the created
     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
     *
     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * // with a Promise
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function(array) {
        return func.apply(this, array);
      };
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed invocations. Provide an options object to indicate
     * that `func` should be invoked on the leading and/or trailing edge of the
     * `wait` timeout. Subsequent calls to the throttled function return the
     * result of the last `func` call.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify invoking on the leading
     *  edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     *
     * // cancel a trailing throttled call
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Any additional arguments provided to the function are
     * appended to those provided to the wrapper function. The wrapper is invoked
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
     * otherwise they are assigned by reference. If `customizer` is provided it is
     * invoked to produce the cloned values. If `customizer` returns `undefined`
     * cloning is handled by the method instead. The `customizer` is bound to
     * `thisArg` and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var shallow = _.clone(users);
     * shallow[0] === users[0];
     * // => true
     *
     * var deep = _.clone(users, true);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.clone(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, customizer, thisArg) {
      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
        isDeep = false;
      }
      else if (typeof isDeep == 'function') {
        thisArg = customizer;
        customizer = isDeep;
        isDeep = false;
      }
      return typeof customizer == 'function'
        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
        : baseClone(value, isDeep);
    }

    /**
     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
     * to produce the cloned values. If `customizer` returns `undefined` cloning
     * is handled by the method instead. The `customizer` is bound to `thisArg`
     * and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var deep = _.cloneDeep(users);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.cloneDeep(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 20
     */
    function cloneDeep(value, customizer, thisArg) {
      return typeof customizer == 'function'
        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
        : baseClone(value, true);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    function gt(value, other) {
      return value > other;
    }

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    function gte(value, other) {
      return value >= other;
    }

    /**
     * Checks if `value` is classified as an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return isObjectLike(value) && isArrayLike(value) &&
        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(function() { return arguments; }());
     * // => false
     */
    var isArray = nativeIsArray || function(value) {
      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
    };

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
    }

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    function isDate(value) {
      return isObjectLike(value) && objToString.call(value) == dateTag;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
    }

    /**
     * Checks if `value` is empty. A value is considered empty unless it is an
     * `arguments` object, array, string, or jQuery-like collection with a length
     * greater than `0` or an object with own enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
          (isObjectLike(value) && isFunction(value.splice)))) {
        return !value.length;
      }
      return !keys(value).length;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent. If `customizer` is provided it is invoked to compare values.
     * If `customizer` returns `undefined` comparisons are handled by the method
     * instead. The `customizer` is bound to `thisArg` and invoked with three
     * arguments: (value, other [, index|key]).
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. Functions and DOM nodes
     * are **not** supported. Provide a customizer function to extend support
     * for comparing other values.
     *
     * @static
     * @memberOf _
     * @alias eq
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * object == other;
     * // => false
     *
     * _.isEqual(object, other);
     * // => true
     *
     * // using a customizer callback
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqual(array, other, function(value, other) {
     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
     *     return true;
     *   }
     * });
     * // => true
     */
    function isEqual(value, other, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(10);
     * // => true
     *
     * _.isFinite('10');
     * // => false
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite(Object(10));
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in older versions of Chrome and Safari which return 'function' for regexes
      // and Safari 8 equivalents which return 'object' for typed array constructors.
      return isObject(value) && objToString.call(value) == funcTag;
    }

    /**
     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // Avoid a V8 JIT bug in Chrome 19-20.
      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Performs a deep comparison between `object` and `source` to determine if
     * `object` contains equivalent property values. If `customizer` is provided
     * it is invoked to compare values. If `customizer` returns `undefined`
     * comparisons are handled by the method instead. The `customizer` is bound
     * to `thisArg` and invoked with three arguments: (value, other, index|key).
     *
     * **Note:** This method supports comparing properties of arrays, booleans,
     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
     * and DOM nodes are **not** supported. Provide a customizer function to extend
     * support for comparing other values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.isMatch(object, { 'age': 40 });
     * // => true
     *
     * _.isMatch(object, { 'age': 36 });
     * // => false
     *
     * // using a customizer callback
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatch(object, source, function(value, other) {
     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
     * });
     * // => true
     */
    function isMatch(object, source, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      return baseIsMatch(object, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
     * which returns `true` for `undefined` and other non-numeric values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (isFunction(value)) {
        return reIsNative.test(fnToString.call(value));
      }
      return isObjectLike(value) && reIsHostCtor.test(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
     * as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isNumber(8.4);
     * // => true
     *
     * _.isNumber(NaN);
     * // => true
     *
     * _.isNumber('8.4');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * **Note:** This method assumes objects created by the `Object` constructor
     * have no inherited enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      var Ctor;

      // Exit early for non `Object` objects.
      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
        return false;
      }
      // IE < 9 iterates inherited properties before own properties. If the first
      // iterated property is an object's own property then there are no inherited
      // enumerable properties.
      var result;
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      baseForIn(value, function(subValue, key) {
        result = key;
      });
      return result === undefined || hasOwnProperty.call(value, result);
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    function isRegExp(value) {
      return isObject(value) && objToString.call(value) == regexpTag;
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    function isTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    function lt(value, other) {
      return value < other;
    }

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    function lte(value, other) {
      return value <= other;
    }

    /**
     * Converts `value` to an array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * (function() {
     *   return _.toArray(arguments).slice(1);
     * }(1, 2, 3));
     * // => [2, 3]
     */
    function toArray(value) {
      var length = value ? getLength(value) : 0;
      if (!isLength(length)) {
        return values(value);
      }
      if (!length) {
        return [];
      }
      return arrayCopy(value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable
     * properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return baseCopy(value, keysIn(value));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * overwrite property assignments of previous sources. If `customizer` is
     * provided it is invoked to produce the merged values of the destination and
     * source properties. If `customizer` returns `undefined` merging is handled
     * by the method instead. The `customizer` is bound to `thisArg` and invoked
     * with five arguments: (objectValue, sourceValue, key, object, source).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var users = {
     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
     * };
     *
     * var ages = {
     *   'data': [{ 'age': 36 }, { 'age': 40 }]
     * };
     *
     * _.merge(users, ages);
     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
     *
     * // using a customizer callback
     * var object = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var other = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(object, other, function(a, b) {
     *   if (_.isArray(a)) {
     *     return a.concat(b);
     *   }
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
     */
    var merge = createAssigner(baseMerge);

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources overwrite property assignments of previous sources.
     * If `customizer` is provided it is invoked to produce the assigned values.
     * The `customizer` is bound to `thisArg` and invoked with five arguments:
     * (objectValue, sourceValue, key, object, source).
     *
     * **Note:** This method mutates `object` and is based on
     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
     *
     * @static
     * @memberOf _
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using a customizer callback
     * var defaults = _.partialRight(_.assign, function(value, other) {
     *   return _.isUndefined(value) ? other : value;
     * });
     *
     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var assign = createAssigner(function(object, source, customizer) {
      return customizer
        ? assignWith(object, source, customizer)
        : baseAssign(object, source);
    });

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties, guard) {
      var result = baseCreate(prototype);
      if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = undefined;
      }
      return properties ? baseAssign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var defaults = createDefaults(assign, assignDefaults);

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
     * // => { 'user': { 'name': 'barney', 'age': 36 } }
     *
     */
    var defaultsDeep = createDefaults(merge, mergeDefaults);

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // using the `_.matches` callback shorthand
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    var findKey = createFindKey(baseForOwn);

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles` assuming `_.findKey` returns `barney`
     *
     * // using the `_.matches` callback shorthand
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    var findLastKey = createFindKey(baseForOwnRight);

    /**
     * Iterates over own and inherited enumerable properties of an object invoking
     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
     */
    var forIn = createForIn(baseFor);

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
     */
    var forInRight = createForIn(baseForRight);

    /**
     * Iterates over own enumerable properties of an object invoking `iteratee`
     * for each property. The `iteratee` is bound to `thisArg` and invoked with
     * three arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a' and 'b' (iteration order is not guaranteed)
     */
    var forOwn = createForOwn(baseForOwn);

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
     */
    var forOwnRight = createForOwn(baseForOwnRight);

    /**
     * Creates an array of function property names from all enumerable properties,
     * own and inherited, of `object`.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the new array of property names.
     * @example
     *
     * _.functions(_);
     * // => ['after', 'ary', 'assign', ...]
     */
    function functions(object) {
      return baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the property value at `path` of `object`. If the resolved value is
     * `undefined` the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': { 'c': 3 } } };
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b.c');
     * // => true
     *
     * _.has(object, ['a', 'b', 'c']);
     * // => true
     */
    function has(object, path) {
      if (object == null) {
        return false;
      }
      var result = hasOwnProperty.call(object, path);
      if (!result && !isKey(path)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        path = last(path);
        result = hasOwnProperty.call(object, path);
      }
      return result || (isLength(object.length) && isIndex(path, object.length) &&
        (isArray(object) || isArguments(object)));
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite property
     * assignments of previous values unless `multiValue` is `true`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to invert.
     * @param {boolean} [multiValue] Allow multiple values per key.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     *
     * // with `multiValue`
     * _.invert(object, true);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function invert(object, multiValue, guard) {
      if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = undefined;
      }
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index],
            value = object[key];

        if (multiValue) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }
        else {
          result[value] = key;
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      var Ctor = object == null ? undefined : object.constructor;
      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
          (typeof object != 'function' && isArrayLike(object))) {
        return shimKeys(object);
      }
      return isObject(object) ? nativeKeys(object) : [];
    };

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      if (object == null) {
        return [];
      }
      if (!isObject(object)) {
        object = Object(object);
      }
      var length = object.length;
      length = (length && isLength(length) &&
        (isArray(object) || isArguments(object)) && length) || 0;

      var Ctor = object.constructor,
          index = -1,
          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
          result = Array(length),
          skipIndexes = length > 0;

      while (++index < length) {
        result[index] = (index + '');
      }
      for (var key in object) {
        if (!(skipIndexes && isIndex(key, length)) &&
            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * property of `object` through `iteratee`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    var mapKeys = createObjectMapper(true);

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through `iteratee`. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, key, object).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
     *   return n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * // using the `_.property` callback shorthand
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    var mapValues = createObjectMapper();

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable properties of `object` that are not omitted.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to omit, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.omit(object, 'age');
     * // => { 'user': 'fred' }
     *
     * _.omit(object, _.isNumber);
     * // => { 'user': 'fred' }
     */
    var omit = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      if (typeof props[0] != 'function') {
        var props = arrayMap(baseFlatten(props), String);
        return pickByArray(object, baseDifference(keysIn(object), props));
      }
      var predicate = bindCallback(props[0], props[1], 3);
      return pickByCallback(object, function(value, key, object) {
        return !predicate(value, key, object);
      });
    });

    /**
     * Creates a two dimensional array of the key-value pairs for `object`,
     * e.g. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
     */
    function pairs(object) {
      object = toObject(object);

      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates an object composed of the picked `object` properties. Property
     * names may be specified as individual arguments or as arrays of property
     * names. If `predicate` is provided it is invoked for each property of `object`
     * picking the properties `predicate` returns truthy for. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.pick(object, 'user');
     * // => { 'user': 'fred' }
     *
     * _.pick(object, _.isString);
     * // => { 'user': 'fred' }
     */
    var pick = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      return typeof props[0] == 'function'
        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
        : pickByArray(object, baseFlatten(props));
    });

    /**
     * This method is like `_.get` except that if the resolved value is a function
     * it is invoked with the `this` binding of its parent object and its result
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a.b.c', 'default');
     * // => 'default'
     *
     * _.result(object, 'a.b.c', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      var result = object == null ? undefined : object[path];
      if (result === undefined) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          result = object == null ? undefined : object[last(path)];
        }
        result = result === undefined ? defaultValue : result;
      }
      return isFunction(result) ? result.call(object) : result;
    }

    /**
     * Sets the property value of `path` on `object`. If a portion of `path`
     * does not exist it is created.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to augment.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, 'x[0].y.z', 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      if (object == null) {
        return object;
      }
      var pathKey = (path + '');
      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = path[index];
        if (isObject(nested)) {
          if (index == lastIndex) {
            nested[key] = value;
          } else if (nested[key] == null) {
            nested[key] = isIndex(path[index + 1]) ? [] : {};
          }
        }
        nested = nested[key];
      }
      return object;
    }

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own enumerable
     * properties through `iteratee`, with each invocation potentially mutating
     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
     * with four arguments: (accumulator, value, key, object). Iteratee functions
     * may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * });
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     */
    function transform(object, iteratee, accumulator, thisArg) {
      var isArr = isArray(object) || isTypedArray(object);
      iteratee = getCallback(iteratee, thisArg, 4);

      if (accumulator == null) {
        if (isArr || isObject(object)) {
          var Ctor = object.constructor;
          if (isArr) {
            accumulator = isArray(object) ? new Ctor : [];
          } else {
            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
          }
        } else {
          accumulator = {};
        }
      }
      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Creates an array of the own enumerable property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable property values
     * of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Checks if `n` is between `start` and up to but not including, `end`. If
     * `end` is not specified it is set to `start` with `start` then set to `0`.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} n The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     */
    function inRange(value, start, end) {
      start = +start || 0;
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      return value >= nativeMin(start, end) && value < nativeMax(start, end);
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number is returned.
     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      if (floating && isIterateeCall(min, max, floating)) {
        max = floating = undefined;
      }
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (noMax && typeof min == 'boolean') {
          floating = min;
          min = 1;
        }
        else if (typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
        noMax = false;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar');
     * // => 'fooBar'
     *
     * _.camelCase('__foo_bar__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
    });

    /**
     * Capitalizes the first character of `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('fred');
     * // => 'Fred'
     */
    function capitalize(string) {
      string = baseToString(string);
      return string && (string.charAt(0).toUpperCase() + string.slice(1));
    }

    /**
     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = baseToString(string);
      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search from.
     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = baseToString(string);
      target = (target + '');

      var length = string.length;
      position = position === undefined
        ? length
        : nativeMin(position < 0 ? 0 : (+position || 0), length);

      position -= target.length;
      return position >= 0 && string.indexOf(target, position) == position;
    }

    /**
     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
     * their corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional characters
     * use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value.
     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * Backticks are escaped because in Internet Explorer < 9, they can break out
     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
     * for more details.
     *
     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
     * to reduce XSS vectors.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
      string = baseToString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
     */
    function escapeRegExp(string) {
      string = baseToString(string);
      return (string && reHasRegExpChars.test(string))
        ? string.replace(reRegExpChars, escapeRegExpChar)
        : (string || '(?:)');
    }

    /**
     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__foo_bar__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = baseToString(string);
      length = +length;

      var strLength = string.length;
      if (strLength >= length || !nativeIsFinite(length)) {
        return string;
      }
      var mid = (length - strLength) / 2,
          leftLength = nativeFloor(mid),
          rightLength = nativeCeil(mid);

      chars = createPadding('', rightLength, chars);
      return chars.slice(0, leftLength) + string + chars;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padLeft('abc', 6);
     * // => '   abc'
     *
     * _.padLeft('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padLeft('abc', 3);
     * // => 'abc'
     */
    var padLeft = createPadDir();

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padRight('abc', 6);
     * // => 'abc   '
     *
     * _.padRight('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padRight('abc', 3);
     * // => 'abc'
     */
    var padRight = createPadDir(true);

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
     * in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
     * of `parseInt`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
      // Chrome fails to trim leading <BOM> whitespace characters.
      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      string = trim(string);
      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=0] The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n) {
      var result = '';
      string = baseToString(string);
      n = +n;
      if (n < 1 || !string || !nativeIsFinite(n)) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        string += string;
      } while (n);

      return result;
    }

    /**
     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--foo-bar');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__foo_bar__');
     * // => 'Foo Bar'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = baseToString(string);
      position = position == null
        ? 0
        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

      return string.lastIndexOf(target, position) == position;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is provided it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [options.variable] The data object variable name.
     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // using the HTML "escape" delimiter to escape data property values
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // using custom template delimiters
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using backslashes to treat delimiters as plain text
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // using the `imports` option to import `jQuery` as `jq`
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, otherOptions) {
      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
        options = otherOptions = undefined;
      }
      string = baseToString(string);
      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
      }
      chars = (chars + '');
      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimLeft('  abc  ');
     * // => 'abc  '
     *
     * _.trimLeft('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimLeft(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string));
      }
      return string.slice(charsLeftIndex(string, (chars + '')));
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimRight('  abc  ');
     * // => '  abc'
     *
     * _.trimRight('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimRight(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(0, trimmedRightIndex(string) + 1);
      }
      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object|number} [options] The options object or maximum string length.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.trunc('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', 24);
     * // => 'hi-diddly-ho there, n...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function trunc(string, options, guard) {
      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (options != null) {
        if (isObject(options)) {
          var separator = 'separator' in options ? options.separator : separator;
          length = 'length' in options ? (+options.length || 0) : length;
          omission = 'omission' in options ? baseToString(options.omission) : omission;
        } else {
          length = +options || 0;
        }
      }
      string = baseToString(string);
      if (length >= string.length) {
        return string;
      }
      var end = length - omission.length;
      if (end < 1) {
        return omission;
      }
      var result = string.slice(0, end);
      if (separator == null) {
        return result + omission;
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              newEnd,
              substring = string.slice(0, end);

          if (!separator.global) {
            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            newEnd = match.index;
          }
          result = result.slice(0, newEnd == null ? end : newEnd);
        }
      } else if (string.indexOf(separator, end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
     * corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
     * entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = baseToString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      if (guard && isIterateeCall(string, pattern, guard)) {
        pattern = undefined;
      }
      string = baseToString(string);
      return string.match(pattern || reWords) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function} func The function to attempt.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // avoid throwing errors for invalid selectors
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = restParam(function(func, args) {
      try {
        return func.apply(undefined, args);
      } catch(e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and arguments of the created function. If `func` is a property name the
     * created callback returns the property value for a given element. If `func`
     * is an object the created callback returns `true` for elements that contain
     * the equivalent object properties, otherwise it returns `false`.
     *
     * @static
     * @memberOf _
     * @alias iteratee
     * @category Utility
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
     *   if (!match) {
     *     return callback(func, thisArg);
     *   }
     *   return function(object) {
     *     return match[2] == 'gt'
     *       ? object[match[1]] > match[3]
     *       : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(users, 'age__gt36');
     * // => [{ 'user': 'fred', 'age': 40 }]
     */
    function callback(func, thisArg, guard) {
      if (guard && isIterateeCall(func, thisArg, guard)) {
        thisArg = undefined;
      }
      return isObjectLike(func)
        ? matches(func)
        : baseCallback(func, thisArg);
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var getter = _.constant(object);
     *
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that performs a deep comparison between a given object
     * and `source`, returning `true` if the given object has equivalent property
     * values, else `false`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, true));
    }

    /**
     * Creates a function that compares the property value of `path` on a given
     * object to `value`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * _.find(users, _.matchesProperty('user', 'fred'));
     * // => { 'user': 'fred' }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, true));
    }

    /**
     * Creates a function that invokes the method at `path` on a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': _.constant(2) } } },
     *   { 'a': { 'b': { 'c': _.constant(1) } } }
     * ];
     *
     * _.map(objects, _.method('a.b.c'));
     * // => [2, 1]
     *
     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    var method = restParam(function(path, args) {
      return function(object) {
        return invokePath(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path on `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = restParam(function(object, args) {
      return function(path) {
        return invokePath(object, path, args);
      };
    });

    /**
     * Adds all own enumerable function properties of a source object to the
     * destination object. If `object` is a function then methods are added to
     * its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added
     *  are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      if (options == null) {
        var isObj = isObject(source),
            props = isObj ? keys(source) : undefined,
            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

        if (!(methodNames ? methodNames.length : isObj)) {
          methodNames = false;
          options = source;
          source = object;
          object = this;
        }
      }
      if (!methodNames) {
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = true,
          index = -1,
          isFunc = isFunction(object),
          length = methodNames.length;

      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      while (++index < length) {
        var methodName = methodNames[index],
            func = source[methodName];

        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = (function(func) {
            return function() {
              var chainAll = this.__chain__;
              if (chain || chainAll) {
                var result = object(this.__wrapped__),
                    actions = result.__actions__ = arrayCopy(this.__actions__);

                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                result.__chain__ = chainAll;
                return result;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }(func));
        }
      }
      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      root._ = oldDash;
      return this;
    }

    /**
     * A no-operation function that returns `undefined` regardless of the
     * arguments it receives.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that returns the property value at `path` on a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': 2 } } },
     *   { 'a': { 'b': { 'c': 1 } } }
     * ];
     *
     * _.map(objects, _.property('a.b.c'));
     * // => [2, 1]
     *
     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the property value at a given path on `object`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return baseGet(object, toPath(path), path + '');
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. If `end` is not specified it is
     * set to `start` with `start` then set to `0`. If `end` is less than `start`
     * a zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the new array of numbers.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      if (step && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      start = +start || 0;
      step = step == null ? 1 : (+step || 0);

      if (end == null) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Invokes the iteratee function `n` times, returning an array of the results
     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
     * one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) {
     *   mage.castSpell(n);
     * });
     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
     *
     * _.times(3, function(n) {
     *   this.cast(n);
     * }, mage);
     * // => also invokes `mage.castSpell(n)` three times
     */
    function times(n, iteratee, thisArg) {
      n = nativeFloor(n);

      // Exit early to avoid a JSC JIT bug in Safari 8
      // where `Array(0)` is treated as `Array(1)`.
      if (n < 1 || !nativeIsFinite(n)) {
        return [];
      }
      var index = -1,
          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

      iteratee = bindCallback(iteratee, thisArg, 1);
      while (++index < n) {
        if (index < MAX_ARRAY_LENGTH) {
          result[index] = iteratee(index);
        } else {
          iteratee(index);
        }
      }
      return result;
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return baseToString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} augend The first number to add.
     * @param {number} addend The second number to add.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    function add(augend, addend) {
      return (+augend || 0) + (+addend || 0);
    }

    /**
     * Calculates `n` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Calculates `n` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Gets the maximum value of `collection`. If `collection` is empty or falsey
     * `-Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => -Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.max(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using the `_.property` callback shorthand
     * _.max(users, 'age');
     * // => { 'user': 'fred', 'age': 40 }
     */
    var max = createExtremum(gt, NEGATIVE_INFINITY);

    /**
     * Gets the minimum value of `collection`. If `collection` is empty or falsey
     * `Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.min(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // using the `_.property` callback shorthand
     * _.min(users, 'age');
     * // => { 'user': 'barney', 'age': 36 }
     */
    var min = createExtremum(lt, POSITIVE_INFINITY);

    /**
     * Calculates `n` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Gets the sum of the values in `collection`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 6]);
     * // => 10
     *
     * _.sum({ 'a': 4, 'b': 6 });
     * // => 10
     *
     * var objects = [
     *   { 'n': 4 },
     *   { 'n': 6 }
     * ];
     *
     * _.sum(objects, function(object) {
     *   return object.n;
     * });
     * // => 10
     *
     * // using the `_.property` callback shorthand
     * _.sum(objects, 'n');
     * // => 10
     */
    function sum(collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      iteratee = getCallback(iteratee, thisArg, 3);
      return iteratee.length == 1
        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
        : baseSum(collection, iteratee);
    }

    /*------------------------------------------------------------------------*/

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    // Add functions to the `Map` cache.
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;

    // Add functions to the `Set` cache.
    SetCache.prototype.push = cachePush;

    // Assign cache to `_.memoize`.
    memoize.Cache = MapCache;

    // Add functions that return wrapped values when chaining.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.callback = callback;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.modArgs = modArgs;
    lodash.negate = negate;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.restParam = restParam;
    lodash.set = set;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortByAll = sortByAll;
    lodash.sortByOrder = sortByOrder;
    lodash.spread = spread;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.backflow = flowRight;
    lodash.collect = map;
    lodash.compose = flowRight;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.iteratee = callback;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;

    // Add functions to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add functions that return unwrapped values when chaining.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.deburr = deburr;
    lodash.endsWith = endsWith;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.findWhere = findWhere;
    lodash.first = first;
    lodash.floor = floor;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isMatch = isMatch;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.min = min;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padLeft = padLeft;
    lodash.padRight = padRight;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.sum = sum;
    lodash.template = template;
    lodash.trim = trim;
    lodash.trimLeft = trimLeft;
    lodash.trimRight = trimRight;
    lodash.trunc = trunc;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.words = words;

    // Add aliases.
    lodash.all = every;
    lodash.any = some;
    lodash.contains = includes;
    lodash.eq = isEqual;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.head = first;
    lodash.include = includes;
    lodash.inject = reduce;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }()), false);

    /*------------------------------------------------------------------------*/

    // Add functions capable of returning wrapped and unwrapped values when chaining.
    lodash.sample = sample;

    lodash.prototype.sample = function(n) {
      if (!this.__chain__ && n == null) {
        return sample(this.value());
      }
      return this.thru(function(value) {
        return sample(value, n);
      });
    };

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__;
        if (filtered && !index) {
          return new LazyWrapper(this);
        }
        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

        var result = this.clone();
        if (filtered) {
          result.__takeCount__ = nativeMin(result.__takeCount__, n);
        } else {
          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type != LAZY_MAP_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
        var result = this.clone();
        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.first` and `_.last`.
    arrayEach(['first', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
    arrayEach(['initial', 'rest'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
    arrayEach(['pluck', 'where'], function(methodName, index) {
      var operationName = index ? 'filter' : 'map',
          createCallback = index ? baseMatches : property;

      LazyWrapper.prototype[methodName] = function(value) {
        return this[operationName](createCallback(value));
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.reject = function(predicate, thisArg) {
      predicate = getCallback(predicate, thisArg, 1);
      return this.filter(function(value) {
        return !predicate(value);
      });
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = start == null ? 0 : (+start || 0);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = (+end || 0);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
      return this.reverse().takeWhile(predicate, thisArg).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(POSITIVE_INFINITY);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
          retUnwrapped = /^(?:first|last)$/.test(methodName),
          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var args = retUnwrapped ? [1] : arguments,
            chainAll = this.__chain__,
            value = this.__wrapped__,
            isHybrid = !!this.__actions__.length,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var interceptor = function(value) {
          return (retUnwrapped && chainAll)
            ? lodashFunc(value, 1)[0]
            : lodashFunc.apply(undefined, arrayPush([value], args));
        };

        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
            onlyLazy = isLazy && !isHybrid;

        if (retUnwrapped && !chainAll) {
          if (onlyLazy) {
            value = value.clone();
            value.__actions__.push(action);
            return func.call(value);
          }
          return lodashFunc.call(undefined, this.value())[0];
        }
        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push(action);
          return new LodashWrapper(result, chainAll);
        }
        return this.thru(interceptor);
      };
    });

    // Add `Array` and `String` methods to `lodash.prototype`.
    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          return func.apply(this.value(), args);
        }
        return this[chainName](function(value) {
          return func.apply(value, args);
        });
      };
    });

    // Map minified function names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name,
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

    // Add functions to the lazy wrapper.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chaining functions to the `lodash` wrapper.
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.concat = wrapperConcat;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add function aliases to the `lodash` wrapper.
    lodash.prototype.collect = lodash.prototype.map;
    lodash.prototype.head = lodash.prototype.first;
    lodash.prototype.select = lodash.prototype.filter;
    lodash.prototype.tail = lodash.prototype.rest;

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers like r.js check for condition patterns like the following:
  if (true) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports._ = _;
    }
  }
  else {
    // Export for a browser or Rhino.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), __webpack_require__(11)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file is generated by `build.js`


/* Load `trigram-utils`. */
var utilities = __webpack_require__(9);

/* Load `expressions` (regular expressions matching
 * scripts). */
var expressions = __webpack_require__(6);

/* Load `data` (trigram information per language,
 * per script). */
var data = __webpack_require__(5);

/* Expose `detectAll` on `detect`. */
detect.all = detectAll;

/* Expose `detect`. */
module.exports = detect;

/* Maximum sample length. */
var MAX_LENGTH = 2048;

/* Minimum sample length. */
var MIN_LENGTH = 10;

/* The maximum distance to add when a given trigram does
 * not exist in a trigram dictionary. */
var MAX_DIFFERENCE = 300;

/* Construct trigram dictionaries. */
(function () {
  var languages;
  var name;
  var trigrams;
  var model;
  var script;
  var weight;

  for (script in data) {
    languages = data[script];

    for (name in languages) {
      model = languages[name].split('|');

      weight = model.length;

      trigrams = {};

      while (weight--) {
        trigrams[model[weight]] = weight;
      }

      languages[name] = trigrams;
    }
  }
})();

/**
 * Get the most probable language for the given value.
 *
 * @param {string} value - The value to test.
 * @param {Object} options - Configuration.
 * @return {string} The most probable language.
 */
function detect(value, options) {
  return detectAll(value, options)[0][0];
}

/**
 * Get a list of probable languages the given value is
 * written in.
 *
 * @param {string} value - The value to test.
 * @param {Object} options - Configuration.
 * @return {Array.<Array.<string, number>>} An array
 *   containing language--distance tuples.
 */
function detectAll(value, options) {
  var settings = options || {};
  var minLength = MIN_LENGTH;
  var script;

  if (settings.minLength !== null && settings.minLength !== undefined) {
    minLength = settings.minLength;
  }

  if (!value || value.length < minLength) {
    return und();
  }

  value = value.substr(0, MAX_LENGTH);

  /* Get the script which characters occur the most
   * in `value`. */
  script = getTopScript(value, expressions);

  /* One languages exists for the most-used script.
   *
   * If no matches occured, such as a digit only string,
   * exit with `und`. */
  if (!(script[0] in data)) {
    return script[1] === 0 ? und() : singleLanguageTuples(script[0]);
  }

  /* Get all distances for a given script, and
   * normalize the distance values. */
  return normalize(value, getDistances(
    utilities.asTuples(value), data[script[0]], settings
  ));
}

/**
 * Normalize the difference for each tuple in
 * `distances`.
 *
 * @param {string} value - Value to normalize.
 * @param {Array.<Array.<string, number>>} distances
 *   - List of distances.
 * @return {Array.<Array.<string, number>>} - Normalized
 *   distances.
 */
function normalize(value, distances) {
  var min = distances[0][1];
  var max = (value.length * MAX_DIFFERENCE) - min;
  var index = -1;
  var length = distances.length;

  while (++index < length) {
    distances[index][1] = 1 - ((distances[index][1] - min) / max) || 0;
  }

  return distances;
}

/**
 * From `scripts`, get the most occurring expression for
 * `value`.
 *
 * @param {string} value - Value to check.
 * @param {Object.<RegExp>} scripts - Top-Scripts.
 * @return {Array} Top script and its
 *   occurrence percentage.
 */
function getTopScript(value, scripts) {
  var topCount = -1;
  var topScript;
  var script;
  var count;

  for (script in scripts) {
    count = getOccurrence(value, scripts[script]);

    if (count > topCount) {
      topCount = count;
      topScript = script;
    }
  }

  return [topScript, topCount];
}

/**
 * Get the occurrence ratio of `expression` for `value`.
 *
 * @param {string} value - Value to check.
 * @param {RegExp} expression - Code-point expression.
 * @return {number} Float between 0 and 1.
 */
function getOccurrence(value, expression) {
  var count = value.match(expression);

  return (count ? count.length : 0) / value.length || 0;
}

/**
 * Get the distance between an array of trigram--count
 * tuples, and multiple trigram dictionaries.
 *
 * @param {Array.<Array.<string, number>>} trigrams - An
 *   array containing trigram--count tuples.
 * @param {Object.<Object>} languages - multiple
 *   trigrams to test against.
 * @param {Object} options - Configuration.
 * @return {Array.<Array.<string, number>>} An array
 *   containing language--distance tuples.
 */
function getDistances(trigrams, languages, options) {
  var distances = [];
  var whitelist = options.whitelist || [];
  var blacklist = options.blacklist || [];
  var language;

  languages = filterLanguages(languages, whitelist, blacklist);

  for (language in languages) {
    distances.push([
      language,
      getDistance(trigrams, languages[language])
    ]);
  }

  return distances.length ? distances.sort(sort) : und();
}

/**
 * Get the distance between an array of trigram--count
 * tuples, and a language dictionary.
 *
 * @param {Array.<Array.<string, number>>} trigrams - An
 *   array containing trigram--count tuples.
 * @param {Object.<number>} model - Object
 *   containing weighted trigrams.
 * @return {number} - The distance between the two.
 */
function getDistance(trigrams, model) {
  var distance = 0;
  var index = -1;
  var length = trigrams.length;
  var trigram;
  var difference;

  while (++index < length) {
    trigram = trigrams[index];

    if (trigram[0] in model) {
      difference = trigram[1] - model[trigram[0]] - 1;

      if (difference < 0) {
        difference = -difference;
      }
    } else {
      difference = MAX_DIFFERENCE;
    }

    distance += difference;
  }

  return distance;
}

/**
 * Filter `languages` by removing languages in
 * `blacklist`, or including languages in `whitelist`.
 *
 * @param {Object.<Object>} languages - Languages
 *   to filter
 * @param {Array.<string>} whitelist - Whitelisted
 *   languages; if non-empty, only included languages
 *   are kept.
 * @param {Array.<string>} blacklist - Blacklisted
 *   languages; included languages are ignored.
 * @return {Object.<Object>} - Filtered array of
 *   languages.
 */
function filterLanguages(languages, whitelist, blacklist) {
  var filteredLanguages;
  var language;

  if (whitelist.length === 0 && blacklist.length === 0) {
    return languages;
  }

  filteredLanguages = {};

  for (language in languages) {
    if (
      (
        whitelist.length === 0 ||
        whitelist.indexOf(language) !== -1
      ) &&
      blacklist.indexOf(language) === -1
    ) {
      filteredLanguages[language] = languages[language];
    }
  }

  return filteredLanguages;
}

/* Create a single `und` tuple. */
function und() {
  return singleLanguageTuples('und');
}

/* Create a single tuple as a list of tuples from a given
 * language code. */
function singleLanguageTuples(language) {
  return [[language, 1]];
}

/* Deep regular sort on the number at `1` in both objects. */
function sort(a, b) {
  return a[1] - b[1];
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);

var tokenUtils = __webpack_require__(8);

var WORD_BOUNDARY_CHARS = '\t\r\n\u00A0 !\"#$%&()*+,\-.\\/:;<=>?@\[\\\]^_`{|}~';
var WORD_BOUNDARY_REGEX = new RegExp('[' + WORD_BOUNDARY_CHARS + ']');
var SPLIT_REGEX = new RegExp(
    '([^' + WORD_BOUNDARY_CHARS + ']+)');

function Tokenizer(opts) {
    if (!(this instanceof Tokenizer)) return (new Tokenizer(opts));

    this.opts = _.defaults(opts || {}, {
        cacheGet: function(key) { return null; },
        cacheSet: function(key, value) { }
    });

    _.bindAll(this);
}

// Tokenize a text using a transformative function
Tokenizer.prototype.split = function tokenizeSplit(fn, opts) {
    var that = this;

    opts = _.defaults(opts || {}, {
        preserveProperties: true,
        cache: _.constant(null)
    });

    return function(text, tok) {
        // If called as a split function, directly call fn
        if (arguments.length == 6) return fn.apply(null, arguments);

        var prev = undefined;
        var cacheId, cacheValue;

        // if string, convert to one large token
        if (_.isString(text)) {
            text = [
                {
                    value: text,
                    index: 0,
                    offset: text.length
                }
            ];
        } else if (!_.isArray(text)) {
            text = [text];
        }

        cacheId = tokenUtils.tokensId(text, opts.cache());
        if (cacheId) {
            cacheValue = that.opts.cacheGet(cacheId);
            if (cacheValue) {
                return cacheValue;
            }
        }

        return _.chain(text)
            .map(function(token, i) {
                var next = text[i + 1];
                var tokens = fn(
                    // Current text value
                    token.value,

                    // Current complete token
                    _.clone(token),

                    // Previous token
                    prev? _.clone(prev) : null,

                    // Next token
                    next? _.clone(next) : null,

                    // Index in the tokens list
                    i,

                    // List of all tokens
                    text
                ) || [];

                // Normalize tokens and return
                tokens = tokenUtils.normalize(token, tokens);

                // Preserve properties
                if (opts.preserveProperties) {
                    var props = tokenUtils.properties(token);
                    tokens = _.map(tokens, function(_tok) {
                        return _.defaults(_tok, props);
                    });
                }

                // Update reference to prev
                prev = token;

                return tokens;
            })
            .compact()
            .flatten()
            .tap(function(_tokens) {
                if (!cacheId) return;

                that.opts.cacheSet(cacheId, _tokens);
            })
            .value();
    };
};

// Debug a tokenizing flow
Tokenizer.prototype.debug = function tokenizeDebug(prefix) {
    return this.filter(function(text, tok) {
        var props = tokenUtils.properties(tok);

        console.log(
            prefix || '',
            '[' + tok.index + '-' + (tok.index + tok.offset) + ']',
            JSON.stringify(tok.value),
            _.size(props)? JSON.stringify(props) : ''
        );
        return true;
    });
};


// Tokenize a text using a RegExp
Tokenizer.prototype.re = function tokenizeRe(re, opts) {
    opts = _.defaults(opts || {}, {
        split: false
    });

    return this.split(function(text, tok) {
        var originalText = text;
        var tokens = [];
        var match;
        var start = 0;
        var lastIndex = 0;

        while (match = re.exec(text)) {
            // Index in the current text section
            var index = match.index;

            // Index in the original text
            var absoluteIndex = start + index;

            var value = match[0] || "";
            var offset = value.length;

            // If splitting, push missed text
            if (opts.split && start < absoluteIndex) {
                var beforeText = originalText.slice(start, absoluteIndex);
                tokens.push({
                    value: beforeText,
                    index: start,
                    offset: beforeText.length
                });
            }

            tokens.push({
                value: value,
                index: absoluteIndex,
                offset: offset,
                match: match
            });

            text = text.slice(index + offset);
            start = absoluteIndex + offset;
        }

        // If splitting, push left text
        if (opts.split && text) {
            tokens.push({
                value: text,
                index: start,
                offset: text.length
            });
        }

        return tokens;
    }, {
        cache: function() {
            return re.toString();
        }
    });
};

// Split and merge tokens
// Used to split as sentences even if sentences is separated in multiple tokens (ex: markup)
// if fn results contain a 'null', it will split in two tokens
Tokenizer.prototype.splitAndMerge = function tokenizeSplitAndMerge(fn, opts) {
    var that = this;

    opts = _.defaults(opts || {}, {
        mergeWith: ''
    });

    return function(tokens) {
        var result = [];
        var accu = [];

        function pushAccu() {
            if (accu.length == 0) return;

            // Merge accumulator into one token
            var tok = tokenUtils.merge(accu, opts.mergeWith);

            result.push(tok);
            accu = [];
        }

        that.split(function(word, token) {
            var toks = fn.apply(null, arguments);

            // Normalize tokens
            toks = tokenUtils.normalize(token, toks);

            // Accumulate tokens and push to final results
            _.each(toks, function(tok) {
                if (tok === null) {
                    pushAccu();
                } else {
                    accu.push(tok);
                }
            });
        })(tokens);

        // Push tokens left in accumulator
        pushAccu();

        return result;
    };
};

// Filter when tokenising
Tokenizer.prototype.filter = function tokenizeFilter(fn) {
    return this.split(function(text, tok) {
        if (fn.apply(null, arguments)) {
            return {
                value: tok.value,
                index: 0,
                offset: tok.offset
            };
        }
        return undefined;
    });
};

// Extend a token properties
Tokenizer.prototype.extend = function tokenizeExtend(fn) {
    return this.split(function(text, tok) {
        var o = _.isFunction(fn)? fn.apply(null, arguments) : fn;

        return _.extend({
            value: tok.value,
            index: 0,
            offset: tok.offset
        }, o);
    });
};

// Condition for tokenizing flow
// "fns" will be called if condition passed
Tokenizer.prototype.ifthen = function(condition, then) {
    //var fns = _.toArray(arguments).slice(1);
    //var flow = this.flow.apply(this, fns);

    return this.split(function(text, tok) {
        if (condition.apply(null, arguments)) {
            return then.apply(null, arguments);
        }

        return _.omit(tok, 'index');
    });
};

// Filter by testing a regex
Tokenizer.prototype.test = function tokenizeTest(re) {
    return this.filter(function(text, tok) {
        return re.test(text);
    }, {
        cache: re.toString()
    });
};

// Process token by all arguments
Tokenizer.prototype.flow = function tokenizeFlow() {
    var fn = _.flow.apply(_, arguments);
    return this.split(fn);
};

// Group and process a token as a group
Tokenizer.prototype.serie = function tokenizeFlow() {
    var fn = _.flow.apply(_, arguments);
    return fn;
};


// Merge all tokens into one
Tokenizer.prototype.merge = _.partial(Tokenizer.prototype.splitAndMerge, _.identity);


Tokenizer.prototype.sections = _.partial(Tokenizer.prototype.re, /([^\n\.,;!?]+)/i, { split: false });
Tokenizer.prototype.words = _.partial(Tokenizer.prototype.re, SPLIT_REGEX);
Tokenizer.prototype.characters = _.partial(Tokenizer.prototype.re, /[^\s]/);

module.exports = Tokenizer;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Tokenizer = __webpack_require__(2);
var Franc = __webpack_require__(1);
var tokenize = new Tokenizer();
var STOPWORDS_IT = ["ad","al","allo","ai","agli","all","agl","alla","alle","con","col","coi","da","dal","dallo","dai","dagli","dall","dagl","dalla","dalle","di","del","dello","dei","degli","dell","degl","della","delle","in","nel","nello","nei","negli","nell","negl","nella","nelle","su","sul","sullo","sui","sugli","sull","sugl","sulla","sulle","per","tra","contro","io","tu","lui","lei","noi","voi","loro","mio","mia","miei","mie","tuo","tua","tuoi","tue","suo","sua","suoi","sue","nostro","nostra","nostri","nostre","vostro","vostra","vostri","vostre","mi","ti","ci","vi","lo","la","li","le","gli","ne","il","un","uno","una","ma","ed","se","perché","anche","come","dov","dove","che","chi","cui","non","più","quale","quanto","quanti","quanta","quante","quello","quelli","quella","quelle","questo","questi","questa","queste","si","tutto","tutti","a","c","e","i","l","o","ho","hai","ha","abbiamo","avete","hanno","abbia","abbiate","abbiano","avrò","avrai","avrà","avremo","avrete","avranno","avrei","avresti","avrebbe","avremmo","avreste","avrebbero","avevo","avevi","aveva","avevamo","avevate","avevano","ebbi","avesti","ebbe","avemmo","aveste","ebbero","avessi","avesse","avessimo","avessero","avendo","avuto","avuta","avuti","avute","sono","sei","è","siamo","siete","sia","siate","siano","sarò","sarai","sarà","saremo","sarete","saranno","sarei","saresti","sarebbe","saremmo","sareste","sarebbero","ero","eri","era","eravamo","eravate","erano","fui","fosti","fu","fummo","foste","furono","fossi","fosse","fossimo","fossero","essendo","faccio","fai","facciamo","fanno","faccia","facciate","facciano","farò","farai","farà","faremo","farete","faranno","farei","faresti","farebbe","faremmo","fareste","farebbero","facevo","facevi","faceva","facevamo","facevate","facevano","feci","facesti","fece","facemmo","faceste","fecero","facessi","facesse","facessimo","facessero","facendo","sto","stai","sta","stiamo","stanno","stia","stiate","stiano","starò","starai","starà","staremo","starete","staranno","starei","staresti","starebbe","staremmo","stareste","starebbero","stavo","stavi","stava","stavamo","stavate","stavano","stetti","stesti","stette","stemmo","steste","stettero","stessi","stesse","stessimo","stessero","stando"]
var STOPWORDS_HU = ['a', 'ahogy', 'ahol', 'aki', 'akik', 'akkor', 'alatt', 'által', 'általában', 'amely', 'amelyek', 'amelyekben', 'amelyeket', 'amelyet', 'amelynek', 'ami', 'amit', 'amolyan', 'amíg', 'amikor', 'át', 'abban', 'ahhoz', 'annak', 'arra', 'arról', 'az', 'azok', 'azon', 'azt', 'azzal', 'azért', 'aztán', 'azután', 'azonban', 'bár', 'be', 'belül', 'benne', 'cikk', 'cikkek', 'cikkeket', 'csak', 'de', 'e', 'eddig', 'egész', 'egy', 'egyes', 'egyetlen', 'egyéb', 'egyik', 'egyre', 'ekkor', 'el', 'elég', 'ellen', 'elõ', 'elõször', 'elõtt', 'elsõ', 'én', 'éppen', 'ebben', 'ehhez', 'emilyen', 'ennek', 'erre', 'ez', 'ezt', 'ezek', 'ezen', 'ezzel', 'ezért', 'és', 'fel', 'felé', 'hanem', 'hiszen', 'hogy', 'hogyan', 'igen', 'így', 'illetve', 'ill.', 'ill', 'ilyen', 'ilyenkor', 'ison', 'ismét', 'itt', 'jó', 'jól', 'jobban', 'kell', 'kellett', 'keresztül', 'keressünk', 'ki', 'kívül', 'között', 'közül', 'legalább', 'lehet', 'lehetett', 'legyen', 'lenne', 'lenni', 'lesz', 'lett', 'maga', 'magát', 'majd', 'majd', 'már', 'más', 'másik', 'meg', 'még', 'mellett', 'mert', 'mely', 'melyek', 'mi', 'mit', 'míg', 'miért', 'milyen', 'mikor', 'minden', 'mindent', 'mindenki', 'mindig', 'mint', 'mintha', 'mivel', 'most', 'nagy', 'nagyobb', 'nagyon', 'ne', 'néha', 'nekem', 'neki', 'nem', 'néhány', 'nélkül', 'nincs', 'olyan', 'ott', 'össze', 'õ', 'õk', 'õket', 'pedig', 'persze', 'rá', 's', 'saját', 'sem', 'semmi', 'sok', 'sokat', 'sokkal', 'számára', 'szemben', 'szerint', 'szinte', 'talán', 'tehát', 'teljes', 'tovább', 'továbbá', 'több', 'úgy', 'ugyanis', 'új', 'újabb', 'újra', 'után', 'utána', 'utolsó', 'vagy', 'vagyis', 'valaki', 'valami', 'valamint', 'való', 'vagyok', 'van', 'vannak', 'volt', 'voltam', 'voltak', 'voltunk', 'vissza', 'vele', 'viszont', 'volna']
var STOPWORDS_AM = ["i","me","my","myself","we","our","ours","ourselves","you","you're","you've","you'll","you'd","your","yours","yourself","yourselves","he","him","his","himself","she","she's","her","hers","herself","it","it's","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","that'll","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","don't","should","should've","now","d","ll","m","o","re","ve","y","ain","aren","aren't","couldn","couldn't","didn","didn't","doesn","doesn't","hadn","hadn't","hasn","hasn't","haven","haven't","isn","isn't","ma","mightn","mightn't","mustn","mustn't","needn","needn't","shan","shan't","shouldn","shouldn't","wasn","wasn't","weren","weren't","won","won't","wouldn","wouldn't"]
var TOP1000_IT = ["non","di","che","è","e","la","il","un","a","per","in","una","mi","sono","ho","ma","l'","lo","ha","le","si","ti","i","con","cosa","se","io","come","da","ci","no","questo","qui","e'","hai","sei","del","bene","tu","sì","me","più","al","mio","c'","perché","lei","solo","te","era","gli","tutto","della","così","mia","ne","questa","fare","quando","ora","fatto","essere","so","mai","chi","o","alla","tutti","molto","dei","anche","detto","quello","va","niente","grazie","lui","voglio","abbiamo","stato","nel","suo","dove","posso","oh","prima","allora","siamo","d'","uno","un'","sua","tuo","hanno","noi","sta","fa","due","vuoi","ancora","qualcosa","vero","casa","sia","su","tua","sempre","forse","dire","vi","loro","i'","altro","sai","stai","devo","quella","vita","quel","delle","tempo","andare","certo","poi","nella","uomo","signore","ad","po'","può","credo","voi","già","adesso","andiamo","anni","all'","visto","fuori","proprio","parte","davvero","vuole","li","dell'","sto","quanto","volta","via","sul","é","dio","sarà","dopo","senza","cose","nessuno","fai","giorno","ed","meglio","padre","puoi","ciao","cos'","devi","ecco","qualcuno","dal","lavoro","sa","ai","vedere","ogni","ii","troppo","posto","cui","tanto","male","dai","ce","bisogno","signor","beh","perchè","vieni","alle","dalla","stata","tra","vai","ehi","miei","amico","dice","sarebbe","avete","altra","deve","sulla","qualche","sembra","gente","dobbiamo","modo","tre","momento","prego","parlare","mamma","guarda","signora","grande","lì","madre","possiamo","avanti","avere","successo","ero","donna","nuovo","ah","faccio","aveva","nostro","degli","questi","siete","forza","piace","bella","dov'","soldi","avevo","favore","fosse","altri","dispiace","subito","dentro","oggi","accordo","tutta","faccia","nome","ok","notte","queste","figlio","mondo","nostra","sapere","vado","tutte","aspetta","amare","moglie","sicuro","suoi","penso","paura","idea","testa","papà","giusto","eh","vorrei","senti","presto","uomini","ll","basta","potrebbe","stesso","avuto","porta","erano","stare","buona","quindi","farlo","appena","abbia","ragione","sentito","ragazzi","domani","ragazza","ragazzo","insieme","sotto","volevo","pronto","nei","ciò","volte","capito","succede","preso","facendo","piacere","morto","tuoi","capitano","letto","storia","caso","trovato","amici","venire","dico","capisco","problema","fino","tipo","là","qua","pensi","aver","giorni","cazzo","okay","nulla","bello","persone","buon","terra","ia","dato","secondo","film","nell'","mano","facciamo","vediamo","vedo","stanno","avrei","prendere","dici","serve","morte","meno","città","occhi","fine","sig","ê","tesoro","scusi","primo","credi","salve","nave","stiamo","sera","piano","sento","macchina","vostro","mani","neanche","dall'","dottore","quale","abbastanza","tardi","bel","cuore","famiglia","far","stati","aiuto","diavolo","nostri","col","quasi","polizia","capo","avrebbe","quei","mie","tornare","però","contro","viene","mentre","scusa","sola","spero","quelle","trovare","giro","anch'","guerra","sue","bambino","strada","vecchio","fratello","acqua","stasera","pensavo","chiama","persona","vedi","fu","anno","vostra","veramente","finito","marito","minuti","giù","donne","bravo","bambini","ricordi","quelli","state","ore","stavo","dovuto","nemmeno","venuto","indietro","stessa","importa","nessun","punto","invece","perso","possibile","ucciso","forte","pensato","dovrebbe","pensa","poco","parla","farò","cercando","l","verità","andato","quell'","re","fanno","potrei","importante","quest'","amo","chiesto","cosi","nelle","felice","piedi","merda","piccolo","prendi","dietro","sapevo","buongiorno","passato","dollari","com'","pure","pensare","cinque","vicino","uscire","conosco","verso","altre","quattro","morire","sangue","john","eri","almeno","dica","lascia","vivere","colpa","portato","entrare","ricordo","pace","roba","jack","migliore","fate","difficile","settimana","ultima","dovrei","fatta","conto","stanza","fra","comunque","sentire","numero","parlato","mente","messo","strano","fortuna","perdere","tue","né","figlia","molti","volete","dottor","parola","signori","andata","vista","vede","nessuna","finché","dare","dammi","mr","mesi","fuoco","voleva","mangiare","lasciato","figli","serio","paese","farà","capire","mezzo","prova","cara","perche'","cane","dimmi","fossi","senso","james","riesco","ieri","possa","potuto","scuola","s","possono","lavorare","significa","resto","vada","piccola","pare","bere","ben","cena","giovane","problemi","quanti","gran","attimo","ascolta","agli","dovresti","corpo","musica","gioco","qual","aria","sarò","farmi","magari","davanti","new","chiamo","genere","libro","domanda","chiamato","passare","dalle","campo","lungo","torna","paio","stava","finita","saranno","vogliono","hey","cielo","parole","auto","sorella","nuova","stia","signorina","festa","spiace","sopra","bisogna","vuol","telefono","affari","facile","parlando","caro","sui","pronti","restare","attenzione","crede","nostre","controllo","molte","unica","dovremmo","farti","soltanto","piu'","buono","puttana","vivo","sappiamo","luce","generale","qualsiasi","vogliamo","ultimo","dicono","benissimo","harry","foto","unico","onore","ragazze","scritto","andate","tieni","siano","ufficio","entra","chiedo","coraggio","andando","venga","dieci","credevo","voglia","potremmo","esatto","credere","tratta","eravamo","arrivato","bambina","pistola","voce","dormire","lasci","avessi","chiaro","aspetto","squadra","attento","cerca","ordine","joey","arrivederci","arriva","armi","sulle","ormai","maggiore","fretta","sarai","sacco","fatti","york","parli","colpo","sarei","m'","caffè","capisci","dicendo","vostri","camera","alcuni","cercare","arrivo","aspettare","situazione","faremo","deciso","esattamente","dev'","addio","scena","inglese","perfetto","potete","fammi","alto","dello","prendo","conosci","be'","sapete","pazzo","chiami","tornato","sicura","lasciare","capelli","potere","avevi","morti","avrà","fantastico","matrimonio","passo","portare","aspetti","torno","arrivare","guai","trova","motivo","resta","inizio","smettila","diventare","potresti","n'","voluto","vanno","disse","morta","de","bagno","zio","futuro","sbagliato","guardi","cosi'","sicurezza","pezzo","devono","venuta","allo","tenente","silenzio","porto","uccidere","odio","sull'","giocare","lontano","durante","segreto","sole","mettere","venite","dirmi","sistema","viaggio","causa","r","comandante","settimane","semplice","minuto","divertente","avresti","grandi","presidente","bocca","permesso","vecchia","culo","sogno","glielo","c","guardare","probabilmente","vengo","lasciami","ie","negli","do","fermo","zitto","vera","tante","ln","colonnello","stupido","cristo","conosce","fame","cura","prigione","finire","farai","d","buonanotte","tom","prossima","brava","specie","prende","piacerebbe","circa","funziona","dovete","brutto","vattene","sente","cavallo","peccato","mattina","consiglio","cambiare","saperlo","usare","naturalmente","continua","scelta","possibilità","spesso","dà","dirti","piuttosto","trovo","fondo","ricorda","guardate","ospedale","qualunque","maria","andrà","legge","agente","oltre","avesse","servizio","tanti","messaggio","giornata","faceva","energia","incredibile","sala","mandato","chiamare","doveva","libero","aereo","ricevuto","porti","preoccuparti","uh","finalmente","quali","stronzo","mostro","sette","pronta","metti","henry","programma","poteva","parti","saputo","partita","gentile","poter","freddo","s'","piacciono","clark","vederti","domande","peggio","sanno","genitori","amica","solito","anima","terribile","buonasera","oro","occhio","si'","radio","quante","pieno","rapporto","avrai","alcune","provare","carino","scoperto","america","denaro","compagnia","interessante","avvocato","t'","vestito","ottimo","avevano","esercito","vestiti","treno","succedendo","mese","impossibile","chiunque","vale","nello","milioni","cibo","tempi","jim","piu","laggiù","intorno","servono","chiave","coi","diritto","dimenticato","ve","natale","calma","altrimenti","t","miss","provato","dirlo","cinema","chiedere","ritardo","realtà","mare","maestro","tv","pagare","pianeta","fronte","addosso","entrambi","dia","cambiato","interessa","assolutamente","risposta","rispetto","pena","gesù","michael","incontro","cercato","occhiata","pensando","cioè","the","notizie","sorpresa","bastardo","salute","lettera","incidente","grosso","soli","mica","sembrava","grado","aiutare","sinistra","dovevo","contento","canzone","sapeva","santo","verrà","saremo","speciale","diceva","posizione","gruppo","giuro" ]
var TOP1000_HU = ["a","nem","az","hogy","és","egy","van","ez","is","meg","de","csak","mi","én","ha","azt","vagy","itt","igen","volt","ne","el","már","te","kell","még","ki","mit","jó","vagyok","ezt","most","mint","tudom","miért","úgy","akkor","ő","jól","nagyon","lesz","nincs","minden","be","sem","le","olyan","rendben","ott","mert","így","nekem","fel","amit","tudod","volna","majd","maga","hát","köszönöm","hol","valami","lehet","gyerünk","mindig","uram","kis","semmi","hé","oké","talán","ide","neked","aki","ó","neki","gyere","nagy","amikor","vissza","mr","hiszem","valamit","ember","őket","milyen","ma","elég","egész","fog","ilyen","tudja","rá","vagyunk","ami","vannak","igaz","lenne","biztos","tényleg","vele","szóval","két","persze","na","nos","sok","túl","mikor","t","sajnálom","aztán","történt","azért","engem","értem","ahogy","velem","kicsit","valaki","mondta","kérem","se","mondtam","nézd","akarsz","menj","ugye","pedig","szia","mindent","e","voltam","soha","semmit","arra","más","új","szép","akarok","jobb","erre","veled","baj","mindenki","nap","senki","kérlek","legyen","rám","akarom","benne","ezért","akar","ezek","őt","kellett","több","oh","innen","magát","ön","át","emberek","kéne","úr","istenem","várj","minket","rossz","első","oda","láttam","este","téged","egyszer","mondja","miatt","isten","igazán","után","tudok","tessék","mondd","együtt","mintha","hogyan","szerintem","megyek","pár","ja","érted","sosem","apa","tudtam","jön","róla","rajta","másik","figyelj","újra","dolog","elnézést","három","szerint","magad","magam","megy","mind","inkább","jobban","néhány","menjünk","lenni","micsoda","annyira","saját","lett","kellene","alatt","tud","amíg","egyik","teljesen","ebben","holnap","hittem","akartam","gondoltam","vége","anya","ezzel","legjobb","hozzá","egyetlen","tovább","egyedül","hadd","épp","haver","akarod","csinálsz","ők","mire","gyorsan","honnan","voltál","i","akik","mondani","nekünk","hagyd","megint","ahol","nő","idő","azok","látni","lány","szó","voltak","nélkül","egyet","előtt","szeretném","mondom","látom","remélem","mielőtt","ti","kedves","áll","jött","tudsz","leszek","francba","haza","először","rád","kész","igazi","menni","kösz","fogok","ennek","tűnik","add","állj","pontosan","komolyan","nekik","sokat","ben","akarja","később","abba","helló","fogja","szeretnék","pont","tetszik","utolsó","azonnal","beszélni","tehát","hallottam","dr","össze","megvan","ugyan","tudni","nehéz","csinálni","fiam","nagyszerű","ezen","férfi","mégis","remek","pénzt","magának","erről","ennyi","örülök","látod","ok","sincs","többet","azzal","fogsz","hanem","apám","néha","szeretlek","fiú","fogom","reggel","boldog","s","jöjjön","öt","érzem","világ","legalább","bele","fontos","végre","mrs","éve","mennem","tudjuk","hova","meghalt","érdekel","viszlát","szeretem","hová","többé","öreg","halott","es","kurva","éves","összes","ideje","hello","perc","néz","sokkal","mondtad","miről","megyünk","azon","srácok","szabad","fiúk","gondolom","hely","vagytok","tenni","drágám","akit","miss","beszélsz","annak","mindjárt","éppen","mivel","gyönyörű","légy","tedd","ezeket","enyém","kibaszott","tegnap","hülye","maradj","vigyázz","mész","attól","barátom","beszél","nézze","nézz","ment","múlva","hozzám","aha","ban","szükségem","gond","fogd","velünk","óra","valaha","nak","következő","élet","kérek","arról","történik","fél","találkozunk","míg","régi","egyáltalán","lgen","neve","négy","majdnem","között","mennyi","nek","óta","éjjel","napot","pénz","helyzet","gondolsz","the","biztosan","leszel","képes","ellen","dolgot","mondott","john","emlékszel","jelent","érte","jöttem","abban","vedd","uraim","nyugi","ég","menjen","akár","számít","király","jövök","év","jack","gondolod","mond","csinál","valakit","kapitány","folyik","tőle","emlékszem","előbb","természetesen","reggelt","addig","embert","fickó","főnök","tőlem","fognak","segíteni","szépen","new","beszélek","valóban","halló","bár","bocsánat","fenébe","készen","fogunk","ahhoz","anyám","gyerek","sose","otthon","vicces","tiszta","való","jaj","dolgok","elment","hosszú","helyet","hét","munka","mondod","egyszerűen","teljes","pillanat","velük","ilyet","szerinted","bármit","dolgokat","hat","annyi","köszi","fehér","helyes","you","úgyhogy","tudják","amint","amerikai","eddig","nevem","tettem","jössz","utána","jár","csináld","szól","csodálatos","bocs","életben","rohadt","segítség","mást","aggódj","tökéletes","hiszed","belőle","vár","gyerekek","várjon","ajtót","tart","sikerült","mennyire","kettő","fogod","felé","mozgás","mióta","akart","édes","szar","marad","vettem","él","érti","szüksége","egymást","melyik","valójában","fekete","végül","ebből","önnek","hamarosan","ismerem","elő","többi","fiatal","őrült","ezelőtt","láttad","előre","tudta","mondják","bármi","minek","nézel","közel","életem","különben","hívják","segíts","miután","szent","et","adj","igaza","belül","furcsa","ért","magával","hány","alá","rólam","sokáig","jelenti","beteg","alig","tett","maguk","jönni","ötlet","ehhez","hatalmas","maradt","egyszerű","doktor","egyre","látta","rosszul","frank","gondolja","asszonyom","jézusom","legnagyobb","apád","kicsi","voltunk","találtam","békén","szívem","tette","akarnak","gyertek","mellett","második","munkát","lennék","félek","srác","tíz","annyit","érdekes","szívesen","szegény","muszáj","mindegy","nincsenek","azokat","valahol","erős","viszont","valószínűleg","jönnek","bennem","nálam","éjszaka","embereket","élni","fene","tele","számára","mindenkinek","különleges","igazság","kit","percet","úton","dollár","halál","rendőrség","kérdés","igazad","adja","komoly","egészen","múlt","működik","időt","látja","máris","keresztül","mama","tőled","lennie","mondok","könnyű","tiéd","köszönjük","ház","dolgozni","szót","ér","tudunk","jézus","út","lesznek","szörnyű","nagyobb","héten","csináltam","estét","szemét","ülj","leszünk","probléma","kölyök","akinek","hagyja","lányok","például","hangzik","ügy","éjt","kaptam","kint","merre","rögtön","kifelé","dolgozik","hiszi","hisz","tom","and","apja","bent","magukat","körül","tesz","apu","víz","picsába","dehogy","közben","hozzád","utat","jót","anyu","feleségem","charlie","george","sam","szerelem","ennyire","joe","látszik","fáj","onnan","édesem","venni","igazából","amire","ot","szereti","anyád","évvel","ránk","ketten","kicsim","lassan","régen","bébi","tartsd","nyisd","seggfej","veszélyes","tartani","adni","háború","kinek","város","üdv","eltűnt","re","bárki","mondták","kívül","meleg","emberi","fogják","david","felejtsd","jöttél","ölni","michael","mennünk","kemény","mindenkit","kor","beszélj","hölgyem","ezer","aludni","lássuk","fogjuk","szükségünk","drága","as","elnök","esetleg","millió","mai","hölgyeim","föld","szükség","sajnos","siess","ismered","esküszöm","lányt","senkit","fegyvert","mindannyian","része","éreztem","mike","ba","hátra","mondtál","akarta","hihetetlen","vajon","elmegyek","kerül","szart","késő","ismeri","gondol","tudjátok","kislány","mondjuk","lehetne","nektek","gyilkos","messze","végig","vagyis","ettől","kik","segít","látok","ra","kapcsolatban","helyen","lehetséges","nyomás","érzed","kedvesem","korábban","tűz","hagyj","hallgass","hallani","napon","bizony","harry","óh","valahogy","újabb","keres","szeret","igazat","felesége","tábornok","titeket","kérsz","találkoztunk","játszani","hallom","mindketten","hirtelen","to","tegye","itthon","fia","szállj","mögött","lehetett","val","gondolok","adott","napja","beszéltem","hozott","á","távol","végén","egyébként","idióta","paul","maradjon","kutya","vidd","lehetetlen","család","véget","beszélt","hozd","magára","közül","halt","adok","óvatosan","segíthetek","senkinek","bolond","hoztam","ám","városban","rengeteg","rólad","egészet","hadnagy","világon","ugyanaz","ltt","életet","bárcsak","menjetek","okos","hideg","amiért","jövő","szeretne","rég","önt","tudtad","nézzétek","bajod","járt","ezredes","nyugalom","bassza","szereted","gonosz","hoz","miféle","szükséged","papa","tűnt","kapott","szerencsét","került","fasz","szét","nyugodtan","engedd","érzés","annál","baszd","hiszen","nevét","sötét","bob","éjszakát","barátja","hagyjuk","nők","szerelmes","hmm","barátok","éhes","vizet","gratulálok","folyton","legyek","tartok","csinálja","ennél","tudnak","csodás","it","számomra","valakinek","nézzük","játék","csinált","azóta","benned","nőt","csapat","amely","kisasszony","időben","mondanom","azután","értettem","szeretnél","orvos","teszi","dolgom","keresel","egyes","csinálok","házban","bizonyos","világos","mutasd","amiket","james","értelme","sohasem","legyél"]


browser.browserAction.onClicked.addListener((tab) => {
    console.log(tab.url);
    browser.tabs.query({ currentWindow: true, active: true}).then(sendMessageToTabs).catch(onError);
});

function sendMessageToTabs(tabsData){
    browser.tabs.sendMessage(tabsData[0]['id'], {"func": "text"});
}

browser.runtime.onMessage.addListener(sendColorWords);

function sendColorWords(payload, sender){
	//console.log('text is ', payload);
    //var lang = payload['lang'];
	var text = payload['text'];
    // language detector
    var sample = text.slice(0,1000);
    var lang_det = Franc(sample).slice(0,2);
    console.log("detected language is ", lang_det);
	var offset_tokens = tokenize.words()(text);
	//console.log('tokens are', tokens);
	var tokens = offset_tokens.map(x => x['value']);
    var tokens_nonums = tokens.filter(x => (!/[^a-zA-ZÀ-ÿ]/.test(x)));
    console.log("tokens_nonums",tokens_nonums);
    var tokens_noproper = removeProperNouns(tokens_nonums);
    console.log("tokens_noproper",tokens_noproper);
    var clean_tokens = filterStopWords(tokens_noproper.map(x => x.toLowerCase()),lang_det);
	console.log("clean_tokens",clean_tokens);
	var counts = createCounts(clean_tokens);
    console.log("counds",counts);
	var sorted_counts = sortedDict(counts);
    console.log("sorted_counts",sorted_counts);
	var words = atLeast3Occur(sorted_counts);
    console.log("words",words);
	console.log('sender is ' , sender);
//	var words = ['Donald', 'figlio'];
    browser.tabs.sendMessage(sender['tab']['id'], words.slice(0,100));
}

function filterStopWords(words, lang){
    var STOPWORD = {
                            "it": STOPWORDS_IT,
                            "hu": STOPWORDS_HU,
                            //"en": STOPWORDS_AM,
                    };
    var TOP1000 = {
                            "it": TOP1000_IT,
                            "hu": TOP1000_HU,
    };

    if(lang == ''){ lang = 'hu'; }
    console.log("Language is", lang);
    var language = lang.toLowerCase().slice(0,2);
	return words.filter(x => !(STOPWORD[language].includes(x)|STOPWORDS_AM.includes(x)|TOP1000[language].includes(x)|x.length < 3));
}

function createCounts(arr){
	var counts = {};

	for (var i = 0; i < arr.length; i++) {
	  var num = arr[i];
	  counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	return counts;
}

function removeProperNouns(tokens){
    var fracts = {};

    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i].toLowerCase();
        var first = tokens[i][0];
        if(first == first.toUpperCase()){
            fracts[word] = fracts[word] ? add1both(fracts[word]) : new Array(1, 1);
        }else {
            fracts[word] = fracts[word] ? add1one(fracts[word]) : new Array(0, 1);
        }
    }

    // return only keys of fracts with fract < 0.9
    tokens_no_props = new Array();
    for (var key in fracts){
        if( fracts[key][0]/fracts[key][1] < 0.9){
            tokens_no_props.push(key);
        }
    }
    return tokens.filter(x => tokens_no_props.includes(x.toLowerCase()));
}

function add1both(array2){
    return [array2[0] + 1, array2[1] +1];
}

function add1one(array2){
    return [array2[0], array2[1] +1];
}

function sortedDict(dict){
	var sortable = [];
	for (var key in dict) {
		sortable.push([key, dict[key]]);
	}
	sortable.sort(function(a, b) {
		return b[1] - a[1];
	});
	return sortable;
}

function atLeast3Occur(sorted_counts){
	return sorted_counts.filter(x => x[1] > 2).map(x => x[0]);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse;

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ');
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"Latin":{"spa":" de|os |de | la|la | y | a |es |ón |ión|rec|ere|der| co|e l|el |en |ien|cho|ent|ech|ció|aci|o a|a p| el|a l|al |as |e d| en|na |ona|s d|da |nte| to|ad |ene|con| pr| su|tod| se|ho |los| pe|per|ers| lo|o d| ti|cia|n d|cio| es|ida|res|a t|tie|ion|rso|te |do | in|son| re| li|to |dad|tad|e s|est|pro|que|men| po|a e|oda|nci| qu| un|ue |ne |n e|s y|lib|su | na|s e|nac|ia |e e|tra| pa|or |ado|a d|nes|ra |se |ual|a c|er |por|com|nal|rta|a s|ber| o |one|s p|dos|rá |sta|les|des|ibe|ser|era|ar |ert|ter| di|ale|l d|nto|hos|del|ica|a a|s n|n c|oci|imi|io |o e|re |y l|e c|ant|cci| as|las|par|ame| cu|ici|ara|enc|s t|ndi| so|o s|mie|tos|una|bre|dic|cla|s l|e a|l p|pre|ntr|o t|ial|y a|nid|n p|a y|man|omo|so |n l| al|ali|s a|no | ig|s s|e p|nta|uma|ten|gua|ade|y e|soc|mo | fu|igu|o p|n t|hum|d d|ran|ria|y d|ada|tiv|l e|cas| ca|vid|l t|s c|ido|das|dis|s i| hu|s o|nad|fun| ma|rac|nda|eli|sar|und| ac|uni|mbr|a u|die|e i|qui|a i| ha|lar| tr|odo|ca |tic|o y|cti|lid|ori|ndo|ari| me|ta |ind|esa|cua|un |ier|tal|esp|seg|ele|ons|ito|ont|iva|s h|d y|nos|ist|rse| le|cie|ide|edi|ecc|ios|l m|r e|med|tor|sti|n a|rim|uie|ple|tri|ibr|sus|lo |ect|pen|y c|an |e h|n s|ern|tar|l y|egu|gur|ura|int|ond|mat|l r|r a|isf|ote","eng":" th|the| an|he |nd |and|ion| of|of |tio| to|to |on | in|al |ati|igh|ght|rig| ri|or |ent|as |ed |is |ll |in | be|e r|ne |one|ver|all|s t|eve|t t| fr|s a| ha| re|ty |ery| or|d t| pr|ht | co| ev|e h|e a|ng |ts |his|ing|be |yon| sh|ce |ree|fre|ryo|n t|her|men|nat|sha|pro|nal|y a|has|es |for| hi|hal|f t|n a|n o|nt | pe|s o| fo|d i|nce|er |ons|res|e s|ect|ity|ly |l b|ry |e e|ers|e i|an |e o| de|cti|dom|edo|eed|hts|ter|ona|re | no| wh| a | un|d f| as|ny |l a|e p|ere| en| na| wi|nit|nte|d a|any|ted| di|ns |sta|th |per|ith|e t|st |e c|y t|om |soc| ar|ch |t o|d o|nti|s e|equ|ve |oci|man| fu|ote|oth|ess| al| ac|wit|ial| ma|uni| se|rea| so| on|lit|int|r t|y o|enc|thi|ual|t a| eq|tat|qua|ive| st|ali|e w|l o|are|f h|con|te |led| is|und|cia|e f|le | la|y i|uma|by | by|hum|f a|ic | hu|ave|ge |r a| wo|o a|ms |com| me|eas|s d|tec| li|n e|en |rat|tit|ple|whe|ate|o t|s r|t f|rot| ch|cie|dis|age|ary|o o|anc|eli|no | fa| su|son|inc|at |nda|hou|wor|t i|nde|rom|oms| ot|g t|eme|tle|iti|gni|s w|itl|duc|d w|whi|act|hic|aw |law| he|ich|min|imi|ort|o s|se |e b|ntr|tra|edu|oun|tan|e d|nst|l p|d n|ld |nta|s i|ble|n p| pu|n s| at|ily|rth|tho|ful|ssi|der|o e|cat|uca|unt|ien| ed|o p|h a|era|ind|pen|sec|n w|omm|r s","por":"os |de | de| a | e |o d|to |ão | di|ent|da |ito|em | co|eit|as |dir|es |ire|rei| se|ção|ade|a p|dad|e d|s d|men|nte|do |s e| pr| pe|dos| to| da|a a|o e| o |o a|ess|con|tod|que| qu|te |e a| do|al |res|ida|m d| in| ou|er |sso| na| re| po|a s| li|uma|cia|ar |pro|e e|a d| te|açã|a t| es| su|ou |ue |s p|tos|a e|des|ra |com|no |ame|ia |e p|tem|nto| pa|is |est|tra|ões|na |s o|oda|das|ser|soa|s n|pes|o p|s a|o s|e o| em| as| à |o o|ais|ber|ado|oa |o t|e s|man|sua|ua | no| os|a c|ter|çõe|erd|lib|rda|s s|nci|ibe|e n|ica|odo|so |nal|ntr|s t|hum|ura| ao|ona|ual| so|or |ma |sta|o c|a n|pre|ara|era|ons|e t|r a|par|o à| hu|ind|por|cio|ria|m a|s c| um|a l|gua|ran| en|ndi|o i|e c|raç|ion|nid|aci|ano|soc|e r|oci| ac|und|sen|nos|nsi|rec|ime|ali|int|um |per|nac| al|m o|r p| fu|ndo|ont|açõ| ig|igu|fun|nta| ma|uni|cçã|ere| ex|a i| me|ese|rio|l d|a o|s h|pel|ada|pri|ide|am |m p|pod|s f|ém |a f|io |ode|ca |ita|lid|tiv|e f|vid|r e|esp|nda|omo|e l|naç|o r|ant|a q|tad|lic|iva| fa|ver|s l|ial|cla|ngu|ing| ca|mo |der| vi|eli|ist|ta |se |ati|ios|ido|r o|eci|dis| un|e i|r d|ecç|o q|s i|qua|ênc|a m|seu|sti|nin|uer|rar|cas|aos|ens|gué|ias|sid|uém|tur|dam|sse|ao |ela|l e|for|tec|ote| pl|ena| tr|m c|tro| ni|ico|rot","ind":"an |ang| da|ng | pe|ak | ke| me|ata| se|dan|kan| di| be|hak|ber|per|ran|nga|yan|eng| ya| ha|asa|gan|men|ara|nya|n p|n d|n k|a d|tan| at|at |ora|ala|san| ba|ap |erh|n b|rha|ya | ma|g b|a s|pen|eba|as |aan|uk |ntu| or|eti|tas|aka|tia|ban|set| un|n s|ter|n y| te|k m|tuk|bas|iap|lam|beb|am | de|k a|keb|n m|i d|unt|ama|dal|ah |ika|dak|ebe|p o|sa |pun|mem|n h|end|den|ra |ela|ri |nda| sa|di |ma |a m|n t|k d|n a|ngg|tau|man|gar|eri|asi| ti|un |al |ada|um |a p|lak|ari|au | ne|neg|a b|ngs|ta |ole|leh|ert|ers|ida|k h|ana|gsa|dar|uka|tid|bat|sia|era|eh |dap|ila|dil|h d|atu|sam|ia |i m| in|lan|aha|uan|tu |ai |t d|a a|g d|har|sem|na |apa|ser|ena|kat|uat|erb|erl|mas|rta|ega|ung|nan|emp|n u|kum|l d|g s| hu|ka |ent|pat|mba|aga|nta|adi| su|eni|uku|n i|huk|ind|ar |rga|i s|aku|ndi|sua|ni |rus|han|si |car|nny| la|in |u d|ik |ua |lah|rik|usi|emb|ann|mer|ian|gga|lai|min|a u|lua|ema|emu|arg|dun|dip|a t|mat|aya|rbu|aru|erk|rka|ini|eka|a k|rak|kes|yat|iba|nas|rma|ern|ese|s p|nus| pu|anu|ina| ta|mel|mua|kel|k s|us |ndu|nak|da |sya|das|pem|lin|ut |yar|ami|upu|seo|aik|eor|iny|aup|tak|ipe|ing|tin| an|dik|uar|ili|g t|rse|sar|ant|g p|a n|aks|ain| ja|t p| um|g m|dir|ksa|umu|kep|mum|i k|eca|rat|m p|h p|aba|ses|m m","fra":" de|es |de |ion|nt |et |tio| et|ent| la|la |e d|on |ne |oit|e l|le | le|s d|e p|t d|ati|roi| dr|dro|it | à | co|té |ns |te |e s|men|re | to|con| l’|tou|que| qu|les| so|des|son| pe|ons| un|s l|s e| pr|ue | pa|e c|t l|ts |onn| au|e a|eme|e e| li|ont|ant|out|ute|t à|res|ers| sa|ce | a |tre|per|a d|cti|er |lib|ité| en|ux | re|en |rso|à l| ou| in|lle|un |nat|ou |nne|n d|une| d’| se|par|nte|us |ur |s s|ans|dan|a p|r l|pro|its|és |t p|ire|e t|s p|sa | dé|ond|é d|a l|nce|ert|aux|omm|nal|me | na| fo|iqu| ce|rté|ect|ale|ber|t a|s a| da|mme|ibe|san|e r| po|com|al |s c|qui|our|t e| ne|e n|ous|r d|ali|ter| di|fon|e o|au | ch|air|ui |ell| es|lit|s n|iss|éra|tes|soc|aut|oci|êtr|ien|int|du |est|été|tra|pou| pl|rat|ar |ran|rai|s o|ona|ain|cla|éga|anc|rs |eur|pri|n c|e m|s t|à u| do|ure|bre|ut | êt|age| ét|nsi|sur|ein|sen|ser|ndi|ens|ess|ntr|ir | ma|cia|n p|st |a c| du|l e| su|bli|ge |rés| ré|e q|ass|nda|peu|ée |l’a| te|a s|tat|il |tés|ais|u d|ine|ind|é e|qu’| ac|s i|n t|t c|n a|l’h|t q|soi|t s|cun|rit| ég|oir|’en|nta|hom| on|n e| mo|ie |ign|rel|nna|t i|l n| tr|ill|ple|s é|l’e|rec|a r|ote|sse|uni|idé|ive|s u|t ê|ins|act| fa|n s| vi|gal| as|lig|ssa|pré|leu|e f|lic|dis|ver| nu|ten|ssi|rot|tec|s m|abl","deu":"en |er |der| un|nd |und|ein|ung|cht| de|ich|sch|ng | ge|ie |che|ech| di|die|rec|gen|ine|eit| re|ch | da|n d|ver|hen| zu|t d| au|ht | ha|lic|it |ten|rei| be|in | ve| in| ei|nde|auf|den|ede|zu |n s|uf |fre|ne |ter|es | je|jed|n u| an|sei|and| fr|run|at | se|e u|das|hei|s r|hte|hat|nsc|nge|r h|as |ens| al|ere|lle|t a| we|n g|rde|nte|ese|men| od|ode|ner|g d|all|t u|ers|te |nen| so|d d|n a|ben|lei| gr| vo|wer|e a|ege|ion| st|ige|le |cha| me|haf|aft|n j|ren| er|erk|ent|bei| si|eih|ihe|kei|erd|tig|n i|on |lun|r d|len|gem|ies|gru|tli|unt|chu|ern|ges|end|e s|ft |st |ist|tio|ati| gl|sta|gun|mit|sen|n n| na|n z|ite| wi|r g|eic|e e|ei |lie|r s|n w|gle|mei|de |uch|em |chl|nat|rch|t w|des|n e|hre|ale|spr|d f|ach|sse|r e| sc|urc|r m|nie|e f|fen|e g|e d| ni|dur|dar|int| du|geh|ied|t s| mi|alt|her|hab|f g|sic|ste|taa|aat|he |ang|ruc|hli|tz |eme|abe|h a|n v|nun|geg|arf|rf |ehe|pru| is|erf|e m|ans|ndl|e b|tun|n o|d g|n r|r v|wie|ber|r a|arb|bes|t i|h d|r w|r b| ih|d s|igk|gke|nsp|dig|ema|ell|eru|n f|ins|rbe|ffe|esc|igu|ger|str|ken|e v|gew|han|ind|rt | ar|ieß|n h|rn |man|r i|hut|utz|d a|ls |ebe|von|lte|r o|rli|etz|tra|aus|det|hul|e i|one|nne|isc|son|sel|et |ohn|t g|sam| fa|rst|rkl|ser|iem|g v|t z|err","jav":"ng |an |ang| ka|ing|kan| sa|ak |lan| la|hak| ha| pa| ma|ngg|ara|sa |abe|ne | in|n k|ant| ng|tan|nin| an|nga|ata|en |ran| ba|man|ban|ane|hi |n u|ong|ra |nth|ake|ke |thi| da|won|uwo|ung|ngs| uw|asa|gsa|ben|sab|ana|aka|beb|a k|g p|nan|nda|adi|at |awa|san|ni |dan|g k|pan|eba| be|e k|g s|ani|bas| pr|dha|aya|gan|ya |wa |di |mar|n s| wa|ta |a s|g u| na|e h|arb|a n|a b|a l|n n| ut|yan|n p|asi|g d|han|ah |g n| tu| um|as |wen|dak|rbe|dar| di|ggo|sar|mat|k h|a a|iya| un|und|eni|kab|be |art|ka |uma|ora|n b|ala|n m|ngk|rta|i h| or|gar|yat|kar|al |a m|n i|na |g b|ega|pra|ina|kak|g a|a p|tum|nya|kal|ger|gge| ta|kat|i k|ena|oni|kas| pe|dad|aga|g m|duw|k k|uta|uwe| si| ne|adh|pa |n a|go |and|i l| ke|nun|nal|ngu|uju|apa|a d|t m|i p|min|iba|er | li|anu|sak|per|ama|gay|war|pad|ggu|ha |ind|taw|ras|n l|ali|eng|awi|a u| bi|we |bad|ndu|uwa|awe|bak|ase|eh | me|neg|pri| ku|ron|ih |g t|bis|iji|i t|e p| pi|aba|isa|mba|ini|a w|g l|ika|n t|ebu|ndh|ar |sin|lak|ur |mra|men|ku | we|e s|a i|liy| ik|ayo|rib|ngl|ami|arg|nas|yom|wae|ut |kon|ae |rap|aku| te|dil|tin|rga|jud|umu| as|rak|bed|k b|il |kap|h k|jin|k a| nd|e d|i s| lu|i w|eka|mum|um |uha|ate| mi|k p|gon|eda| ti|but|n d|r k|ona|uto|tow|wat|gka|si |umr|k l|oma","vie":"ng |̣c |́c | qu| th|à |nh | ng|̣i | nh|và| va|̀n |uyê| ph| ca|quy|ền|yề|̀i | ch|̀nh| tr| cu|ngư|i n|gươ|ườ|́t |ời| gi|ác| co|̣t |ó |c t|ự |n t|cá|ông| kh|ượ|ợc| tư| đư|iệ|đươ|ìn|́i | ha|có|i đ|gia| đê|pha| mo|ọi|mọ|như|n n|củ| ba|̣n |̉a |ủa|n c|̀u |̃ng|ân |ều|ất| bi|tự|hôn| vi|g t| la|n đ|đề|nhâ| ti|t c| đô|ên |bả|hiê|u c| tô|do |hân| do|ch |́ q|̀ t| na|́n |ay | hi|àn|̣ d|ới|há| đi|hay|g n| mô|ốc|uố|n v|ội|hữ|thư|́p |quô| ho|̣p |nà|ào|̀ng|̉n |ị |́ch|ôn |̀o |khô|c h|i c|c đ| hô|i v|tro| đa|́ng|mộ|i t|ột|g v|ia |̣ng|ản|ướ|ữn|̉ng|h t|hư |ện|n b|ộc|ả |là|c c|g c| đo|̉ c|n h|hà|hộ| bâ|ã |̀y | vơ|̣ t|̉i |iế| cô|t t|g đ|ức|iên| vê|viê|vớ|h v|ớc|ực|ật|tha|̉m |ron|ong|áp|g b|hươ| sư|a c|sự|̉o |ảo|h c|ể |o v|uậ|a m|ế |iá|̀ c|cho|qua|hạ|ục| mi|̀ n|phâ|c q|côn|o c|á |i h|ại| hơ|̃ h| cư|n l|bị| lu|bấ|cả|ín|h đ| xa|độ|g h|c n|c p|thu|ải|ệ | hư|́ c|o n| nư|ốn|́o |áo|xã|oà|y t|hả|tộ|̣ c| tâ|thô| du|m v|mì|ho |hứ|ệc|́ t|hợ|án|n p|cũ|ũn|iể|ối|tiê|ề |hấ|ợp|hoa|y đ|chi|o h|ở |ày|̉ t|đó|c l|về|̀ đ|i b|kha|c b| đâ|luâ|ai |̉ n|đố|ết|hự|tri|p q|nươ|dụ|hí|g q|yên|họ|́nh| ta| bă|c g|n g|thê|o t|c v|am |c m|an ","ita":" di|to | de|ion| in|la |e d|di |ne | e |zio|re |le |ni |ell|one|lla|rit|a d|o d|del|itt|iri|dir| co|ti |ess|ent| al|azi|tto|te |i d|i i|ere|tà | pr|ndi|e l|ale|o a|ind|e e|e i|gni|nte|con|i e|li |a s| un|men|ogn| ne|uo | og|idu|e a|ivi|duo|vid| es|tti| ha|div| li|a p|no |all|pro|za |ato|per|sse|ser| so|i s| la| su|e p| pe|ibe|na |a l| il|ber|e n|il |ali|lib|ha |che|in |o s|e s| qu|o e|ia |e c| ri|nza|ta |nto|he |oni|o i| o |sta|o c|nel| a |o p|naz|e o|so | po|o h|gli|i u|ond|i c|ers|ame|i p|lle|un |era|ri |ver|ro |el |una|a c| ch|ert|ua |i a|ssi|rtà|a e|ei |dis|ant| l |tat|a a|ona|ual| le|ità|are|ter| ad|nit| da|pri|dei|à e|cia| st| si|nal|est|tut|ist|com|uni| ed|ono| na|sua|al |si |anz| pa| re|raz|gua|ita|res|der|soc|man|o o|ad |i o|ese|que|enz|ed | se|io |ett|on | tu|dic|à d|sia|i r|rso|oci|rio|ari|qua|ial|pre|ich|rat|ien|tra|ani|uma|se |ll |eri|a n|o n| um|do |ara|a t|zza|er |tri|att|ico|pos|sci|i l|son|nda|par|e u|fon| fo|nti|uzi|str|utt|ati|sen|int|nes|iar| i |hia|n c|sti|chi|ann|ra | eg|egu|isp|bil|ont|a r| no|rop| me|opr|ost| ma|ues|ica|sso|tal|cie|sun|lit|ore|ina|ite|tan| ra|non|gio|d a|e r|dev|i m|l i|ezz|izi| cu|nno|rà |a i|tta|ria|lia|cos|ssu|dal|l p| as|ass|opo|ve |eve","tur":" ve| ha|ve |ler|lar|ir |in |hak| he|her|bir|er |an |arı|eri|ya | bi|ak |r h|eti|ın |iye|yet| ka|ası|ını| ol|tle|eya|kkı|ara|akk|etl|sın|esi|na |de |ek | ta|nda|ini| bu|ile|rın|rin|vey|ne |kla|e h|ine|ır |ere|ama|dır|n h| sa|ına|sin|e k|le | ge|mas|ınd|nın|ı v| va|lan|lma|erk|rke|nma|tin|rle| te|nin|akl|a v|da | de|let|ill|e m|ard|en |riy|aya|nı | hü| şa|e b|k v|kın|k h| me|mil|san| il|si |rdı|e d|dan|hür|var|ana|e a|kes|et |mes|şah|dir| mi|ret|rri| se|ola|ürr|irl|bu |mak| ma|mek|n e|kı |n v|n i|lik|lle| ed| hi|n b|a h| ba|nsa| iş|eli|kar| iç|ı h|ala|li |ulu|rak|evl|e i|ni |re |r ş|eme|etm|e t|ik |e s|a b|iş |n k|hai|nde|aiz| eş|izd|un |olm|hiç|zdi|ar |unm|ma | gö|ilm|lme|im |n t|tir|dil|mal|e g|i v| ko|lun|e e|mel|ket|ık |n s|ele|la |el |r v|ede|şit|ili|eşi|yla|a i| an|anı| et|rı |ahs| ya|sı |edi|siy|t v|i b|se |içi|çin|bul|ame| da|miş|may|tim|a k|tme|r b|ins|yan|nla|mle| di|eye|ger|ye |uğu|erd|din|ser| mü|mem|vle| ke|nam|ind|len|eke|es | ki|n m|it | in| ku|rşı|a s|arş| ay|eml|lek|oru|rme|kor|rde|i m| so|tür|al |lam|eni|nun| uy|ken|hsı|i i|a d|ri |dev|ün |a m|r a|mey|cak|ıyl|maz|e v|ece|ade|iç |şma|mse|te |tün|ims|kim|e y|şı |end|k g|ndi|alı| ce|lem|öğr|ütü|k i|r t| öğ|büt|anl| bü","pol":" pr|nie| i |ie |pra| po|ani|raw|ia |nia|wie|go | do|ch |ego|iek|owi| ni|ści|ci |a p|do |awo| cz|ośc|ych| ma|ek |rze| na|prz| w |wo |ej | za|noś|czł|zło|eni|wa | je|łow|i p|wol|oln| lu|rod| ka| wo|lno|wsz|y c|ma |ny |każ|ażd|o d|stw|owa|dy |żdy| wy|rzy|sta|ecz| sw|dzi|i w|e p|czn|twa|na |zys|ów |szy|ub |lub|a w|est|kie|k m|wan| sp|ają| ws|e w|pow|pos|nyc|rac|spo|ać |a i|cze|sze|neg|yst|jak| ja|o p|pod|acj|ne |ńst|aro|mi | z |i i|nar| ko|obo|awa| ro|i n|jąc|zec|zne|zan|dow| ró|iej|zy |zen|nic|ony|aw |i z|czy|no |nej|o s|rów|odn|cy |ówn|odz|o w|o z|jeg|edn|o o|aki|mie|ien|kol| in|zie|bez|ami|eńs|owo|dno| ob| or| st|a s|ni |orz|o u|ym |stę|tęp|łec|jed|i k| os|w c|lwi|ez |olw|ołe|poł|cji|y w|o n|wia| be|któ|a j|zna|zyn|owe|wob|ka |wyc|owy|ji | od|aln|inn|jes|icz|h p|i s|się|a o|ją |ost|kra|st |sza|swo|war|cza|roz|y s|raz|nik|ara|ora|lud|i o|a z|zes| kr|ran|ows|ech|w p|dów|ą p|pop|a n|tki|stk|gan|zon|raj|e o|iec|i l| si|że |eka| kt| de|em |tór|ię |wni|lni|ejs|ini|odo|dni|ełn|kow|peł|a d|ron|dek|pie|udz|bod|nan|h i|dst|ieg|taw|z p|z w|zeń|god|iu |ano|lar| to|y z|a k|ale|kla|trz|zaw|ich|e i|ier|iko|dzy|chn|w z|by |ków|adz|ekl|ywa|ju |och|kor|sob|ocz|oso|u p|du |tyc|tan|ędz| mi|e s| ta|ki ","gax":"aa |an |uu | ka|ni |aan|umm|ii |mma|maa| wa|ti |nam| fi|ta |tti| na|saa|fi | mi|rga|i k|a n| qa|dha|iyy|oot|in |mir|irg|raa|qab|a i|a k|kan|akk|isa|chu|amu|a f|huu|aba|kka| ta|kam|a a| is|amn|ami|att|ach|mni|yaa| bi|yuu|yyu|ee |wal|miy|waa|ga |ata|aat|tii|oo |a e|moo| ni| ee|ba | ak|ota|a h|i q| ga| dh|daa|haa|a m|ama|yoo|a b|i a|ka |kaa| hi|sum|aas|arg|man| hu| uu|u n| yo| ar| ke| ha|ees| ba|uf |i i|taa|uuf|iin|ada|a w|i f|ani|rra|na |isu| ad|i w|a u|nya|irr|da |hun|hin|ess| ho| ma|i m|und|i b|bar|ana|een|mu |is |bu |f m| ir| sa|u a|add|aad| la|i d|n h|eeg|i h|sa |hoj|abu| ya|kee|al |udh|ook|goo|ala|ira|nda|itt|gac|as |n k|mum|see|rgo|uum|ra |n t|n i|ara|muu|ums|mat|nii|sii|ssa|a d|a q| da|haw|a g|yya|asu|eef|u h|tum|biy| mo|a t|ati|eny|gam|abs|awa|roo|uma|n b|n m|u y|a s|sat|baa|gar|n a|mmo|nis| qo|nna| ku|eer| to|kko|bil|ili|lis|bir|otu|tee|ya |msa|aaf|suu|n d|jii|n w|okk|rka|gaa|ald|un |rum| ye|ame| fu|mee|yer|ero|amm|era|kun|i y|oti|tok|ant|ali|nni| am|lda|lii|n u|lee|ura|lab|aal|tan|laa|i g|ila|ddu|aru|u m|oji|gum|han|ega| se|ffa|dar|faa|ark|n y|hii|qix|gal|ndi| qi|asa|art|ef |uud| bu|jir| ji|arb|n g|chi|tam|u b|dda|bat|di |kar|lam|a l| go|bsi|sad|oka|a j|egu|u t|bee|u f|uun","swh":"a k|wa |na | ya| ku|ya | na| wa|a m| ha|i y|a h|a n|ana|ki |aki|kwa| kw|hak| ka| ma|la |a w|tu |li |a u|ni |i k|a a|ila| ki|ali|a y|ati|za |ili|ifa| mt|ke | an|kil|kat|mtu|ake|ote|te |ka |ika|ma |we |a s|yo |fa |i n|ata|e k|ama|zi |amb|u a|ia |u w| yo|azi|kut|ina|i z|asi| za|o y|uhu|yak|au |ish|mba|e a|u k|hur|ha |tik|wat| au|uru| bi|sha|mu |ara|u n| as|hi | hi|ru |aif|tai|cha|ayo|a b|hal| uh| ch|yot|i h| zi|awa|chi|atu|e n|ngi|u y|mat|shi|ani|eri| am|uli|ele|sa |ja |e y|a t|oja|o k|nch|i a|a j| nc|ima| sh|ami| ta|end|any|moj|i w|ari|ham|uta|ii |iki|ra |ada|wan|wak|nay|ye |uwa| la|ti |eza|o h|iri|iwa|kuw|iwe| wo|fan| sa|she|bu |kan|ao |jam|wen|lim|i m|her|uto|ria| ja| ni|kam|di | hu|zo |a l|da |kaz|ahi|amu|wot|o w|si |dha|bin|ing|adh|a z|bil|e w|nya|kup|har|ri |ang|aka|sta|aji|ne |kus|e m|zim|ini|ind|lin|kul|agu|kuf|ita|bar|o n|uu |iyo|u h|nad|maa|mwe|ine|gin|nye|nde|dam|ta | nd|ndi|rik|asa| ba|rif|uni|nga|hii|lez|bo |azo|uzi|mbo|sil|ush|tah|wam|ibu|uba|imu| ye|esh| ut|taa|aar|wez|i s|e b| si|ala|dhi|eng|aza|tak|hir|saw|izo|kos|tok|oka|yan|a c|wal|del|i b|pat| um|ndo|zwa|mam|a i|guz|ais|eli|mai|laz|ian|aba|man|ten|zin|ba |nda|oa |u m|uku|ufu| mw|liw|aha|ndw|kuh|ua |upa| el|umi|sia","sun":"an |na |eun| ka|ng | sa|ana|ang| di|ak | ha|nga|hak|un |ung|keu|anu| ba| an|nu |a b| bo| je|a h|ata|asa|jeu|ina| ng|ara|nan|awa|gan|ah |sa |a k| na|n k|kan|aha|a p|a s|ga |ban| ma|a n|ing|oga|bog|sar| pa| ku|man|a a|ha |san|ae |bae|din|g s|aga|sah|ra |tan|n s| pe|ala| si|kat|ma |per| ti|aya|sin| at| pi| te|n a|aan|lah|pan|gar|n n|u d|ta |eu |ari|kum|ngs|a m|n b|n d|ran|a d|gsa|wa |taw|k h|ama|ku |ike|n p|eba|bas| ja|al |a t|ika|at |beb|kab|pik|asi|atu|nda|una|a j|nag|e b|n h|en |g k|oh |aba|ila|rta|aku|boh|ngg|abe|art|ar |n j|di |ima|um |ola|geu|usa|aca|sak|adi|k a|udu|teu|car|tin| me| ay|h k| po|eh |u s|aka|rim|ti |sac|k n|ngt|jen|awe|ent|u a|uma|teh|law|ur |h s|dan|bar|uku|gaw|aru|ate|iba|dil|pol|aja|ieu|ere|jal|nar| hu|n t|nya|pa |are|upa|mas|ake|ut |wan| ge|kal|nus| so|ngk|ya |yan|huk| du|tun| mi|mpa|isa|lan|ura|u m|uan|ern|ena|nte|rup|tay|n m| ke|ka |han|und|us |h b|kud|ula|tut| tu| ie|hna|kaw|u k|lak|gam|mna|umn|g d| nu|yun|ri |ayu|wat| wa|eri|g n|a u|i m|u p| ta|du |dit|umu|k k|ren|mba|rik|gta| be|ali|h p|h a|eus|u n|alm|il | da|sas|ami|min|lma|ngu|nas|yat|rak|amp|mer|k j|sab|mum| ra|rua|ame|ua |ter|sal|ksa|men|kas|nge|k d|ona| bi|bis|sio|ion|nal|taa| de|uh |gal|dip|we |bad","ron":" de|și | și|re | în|are|te |de |ea |ul |rep|le |ept|dre|e d| dr|ie |în |e a|ate|ptu| sa|tul| pr|or |e p| pe|la |e s|ori| la| co|lor| or|ii |rea|ce |au |tat|ați| a | ca|ent| fi|ale|ă a|a s| ar|ers|per|ice| li|uri|a d|al | re|e c|ric|nă |i s|e o|ei |tur| să|lib|con|men|ibe|ber|rso|să |tăț|sau| ac|ilo|pri|ăți|i a|i l|car|l l|ter| in|ție|că |soa|oan|ții|lă |tea|ri |a p| al|ril|e ș|ană|in |nal|pre|i î|uni|ui |se |e f|ere|i d|e î|ita| un|ert|ile|tă |a o| se|i ș|pen|ia |ele|fie|i c|a l|ace|nte|ntr|eni| că|ală| ni|ire|ă d|pro|est|a c| cu| nu|n c|lui|eri|ona| as|sal|ând|naț|ecu|i p|rin|inț| su|ră |e n| om|ici|nu |i n|oat|ări|l d| to|tor| di| na|iun| po|oci|tre|ni |ste|soc|ega|i o|gal| so| tr|ă p|a a|n m|sta|va |ă î|fi |res|rec|ulu|nic|din|sa |cla|nd | mo| ce| au|ara|lit|int|i e|ces|uie|at |rar|rel|iei|ons|e e|leg|nit|ă f| îm|a î|act|e l|ru |u d|nta|a f|ial|ra |ă c| eg|ță | fa|i f|rtă|tru|tar|ți |ă ș|ion|ntu|dep|ame|i i|reb|ect|ali|l c|eme|nde|n a|ite|ebu|bui|ât |ili|toa|dec| o |pli|văț|nt |e r|u c|ța |t î|l ș|cu |rta|cia|ane|țio|ca |ită|poa|cți|împ|bil|r ș| st|omu|ăță|țiu|rie|uma|mân| ma|ani|nța|cur|era|u a|tra|oar| ex|t s|iil|ta |rit|rot|mod|tri|riv|od |lic|rii|eze|man|înv|ne |nvă|a ș|cti","hau":"da | da|in |a k|ya |an |a d|a a| ya| ko| wa| a |sa |na | ha|a s|ta |kin|wan|wa | ta| ba|a y|a h|n d|n a|iya|ko |a t|ma |ar | na|yan|ba | sa|asa| za| ma|a w|hak|ata| ka|ama|akk|i d|a m| mu|su |owa|a z|iki|a b|nci| ƙa| ci| sh|ai |kow|anc|nsa|a ƙ|a c| su|shi|ka | ku| ga|ci |ne |ani|e d|uma|‘ya|cik|kum|uwa|ana| du| ‘y|ɗan|ali|i k| yi|ada|ƙas|aka|kki|utu|n y|a n|hi | ra|mut| do| ad|tar| ɗa|nda| ab|man|a g|nan|ars|and|cin|ane|i a|yi |n k|min|sam|ke |a i|ins|yin|ki |nin|aɗa|ann|ni |tum|za |e m|ami|dam|kan|yar|en |um |n h|oka|duk|mi | ja|ewa|abi|kam|i y|dai|mat|nna|waɗ|n s|ash|ga |kok|oki|re |am |ida|sar|awa|mas|abu|uni|n j|una|ra |i b| ƙu|dun|a ‘|cew|a r|aba|ƙun|ce |e s|a ɗ|san|she|ara|li |kko|ari|n w|m n|buw|aik|u d|kar| ai|niy| ne|hal|rin|bub|zam|omi| la|rsa|ubu|han|are|aya|a l|i m|zai|ban|o n|add|n m|i s| fa|bin|r d|ake|n ‘|uns|sas|tsa|dom| ce|ans| hu|me |kiy|ƙar| am|ɗin| an|ika|jam|i w|wat|n t|yya|ame|n ƙ|abb|bay|har|din|hen|dok|yak|n b|nce|ray|gan|fa |on | ki|aid| ts|rsu| al|aye| id|n r|u k|ili|nsu|bba|aur|kka|ayu|ant|aci|dan|ukk|ayi|tun|aga|fan|unc| lo|o d|lok|sha|un |lin|kac|aɗi|fi |gam|i i|yuw|sun|aif|aja| ir|yay|imi|war| iy|riy|ace|nta|uka|o a|bat|mar|bi |sak|n i| ak|tab|afi|sab","fuv":"de | e |e n|nde| ha|la |e e| ka|akk| nd| wa|ina|al |hak|na | in|ndi|kke|ɗo |di |ii |ade|aad|um |ko |i h|ala| mu| ne|lla|mum|ji |wal| jo| fo|all|eɗɗ| le|neɗ|e h|kal| ko|taa|re | ng|aaw|e k|aa |jog|e w|ley|ee |ke |laa|e m|eed|e l|nnd|aag|ɗɗo|ol | ta|o k|gu |kee|le |waa|ond|gal|a j|ogi|am |eji|dee|m e|ti |nga|e d|ɗe |awa|ɓe | wo|gii|eej|ede|gol|aan| re| go|i e|agu|e t|ann|fot|eyd|oti|ɗee|pot| po|maa|naa|oto|ydi| he|i n|ni |taw|enn|een|dim|to |a i|e f|e j|goo|a k|der| fa| aa|ele| de|o n|dir| ba|er |ngu|oot|ndo|i k|ota|ima| sa|won|ay |ka |a n|oor|a f|ngo|tee| ja|i f| to|o f|e ɓ|i w|wa |ren|a e|nan|kam|hay|ma |eyɗ|o t|awi|yɗe|ore|o e|too|and|fof|i m|a w|ñaa|e y|hee| do|eel|ira|nka|aak|e g|e s|l e|of |aar| ɓe|dii| la|ani|e p|tin|a t| te| na|e i| so|o w|ral|e r|are|ooj|awo|woo|gaa| ma|u m|kaa|faw| ña|dow| mo|oo | ya|aam|nge|nng| yi|und| ho|en |i l|so | mb| li|o i|e a| nj| o |ude|e b|o h|igg|ɗi |lig|nda|ita|baa| di|iin| fe|iti|aaɗ|ama|inn|haa|iiɗ|a h| no|tii|den|tal| tu|tuu|yan|l n|yim|do |non|imɓ|bel| je|ine| hu|njo|ugn|guu|no | da|edd|uug|mii|nee|jey|a d|ano| ke|lit|lli|go |je |ank|tde|amt|ent|eɗe|ɓam| ɓa|mɓe|y g|aga|alt|ɗɗa|ind|wit| su|nna| ɗe|ree|ŋde|i a|m t|aŋd|l h|jaŋ|ago|ow |ete| ɗu","bos":" pr| i |je |rav| na|pra|na |da |ma |ima| sv|a s|nje|a p| da| po|anj|a i|vo |va |ko |ja | u |ako|o i|no | za|e s|ju |avo| im|ti |sva|ava|i p|o n|li |ili|i s|van|ost| ko|vak|ih |ne |a u| sl|nja|koj| dr| ne|jed| bi|i d|ije|stv|u s|lob|im |slo| il|bod|obo| ra|sti|pri| je| su|vje|om |a d|se |e i| ob|a n|i i| se|dru|enj| os|voj|cij|e p|a b|su |o d|uje|u p|raz|i n|a o| od|lo |u o|ova|u i|edn|i u| nj|ovo|jen|lju|ni |oje|nos|a k|ran|dje|iti|o p|aci|žav|a j|i o|e o|pre|pro|bra|nih|ji | ka|e d|jeg|og |sta| tr|tre|bud|u n|drž|u z|rža|bit|svo|ija|elj|reb|e b|mij|jem|avn|pos| bu|ka |aju| iz|ba |ve |rod|de |aro|e u|iva|a z|em |šti|ilo|eni|lje|ći |red|bil|jel|jer| ni|odn|m i|du |tva|nar|gov| sa|oji| do|tu |vim|u d| st|o k|e n|a t|za |nim| dj| sm|ući|ičn|dna|i m|oda|vno|eba|ist|nac|e k|čno|nak|ave|tiv|eđu|nov|olj|sno|ani|aln|an |nom|i b|stu|nst|eno|oj |osn|a r|ovj|nap|smi|nog|čov|oja|nju|ara|nu |dno|ans|ovi|jan|edi|m s| kr|h p|tup| op| čo|iko|jek|tvo| vj| mi|tel|vu |obr|živ|tit|o o|una|odu| mo| ov|kri|ego|din|rug|nik|rad|pod|nji|sam|sto|lja|dst|rim|ite|riv| te|m n|vol|i v|e t|vni|akv|itu|g p| ta|ašt|zaš|svi|ao |te |o s|ak |mje|a č|odr|udu|kla|i t|avi|tno|nič| vr|nic|dni|u u|ina| de|oba|od |jih|st ","hrv":" pr| i |je |rav|pra|ma | na|ima| sv|na |ti |a p|nje| po|a s|anj|a i|vo |ko |da |vat|va |no | za|i s|o i|ja |avo| u | im|sva|i p| bi|e s|ju |tko|o n|li |ili|van|ava| sl|ih |ne |ost| dr|ije| ne|jed|slo| ra|u s|lob|obo| os|bod| da| ko|ova|nja|koj|i d|atk|iti| il|stv|pri|om |im | je| ob| su| ka|i i|i n|e i|vje|i u|se |dru|bit|voj|ati|i o|ćen|a o|o p|a b|a n|ući| se|enj|sti|a u|edn|dje|lo |ćav| mo|raz|u p| od|ran|ni |rod|a k|su |aro|drć|svo|ako|u i|rća|a j|mij|ji |nih|eni|e n|e o| nj|pre|pos|ćiv|oje|eno|e p|nar|oda|nim|ovo|aju|ra |ći |og |nov|iva|a d|nos|bra|bil|i b|avn|a z|jen|e d|ve |ora|tva|jel|sta|mor|u o|cij|pro|ovi|za |jer|ka |sno|ilo|jem|red|em |lju|osn|oji| iz|aci| do|lje|i m| ni|odn|nom|jeg| dj|vno|vim|elj|u z|o d|rad|o o|m i|du |uje| sa|nit|e b| st|oj |tit|a ć|dno|e u|o s|u d|eću|ani|dna|nak|nst|stu| sm|e k|u u|an |gov|nju|juć|aln|m s|tu |a r|ćov|jan|u n|o k|ist|ću |te |tvo|ans|šti|nu |ara|nap|m p|nić|olj|bud| bu|edi|ovj|i v|pod|sam|obr|tel| mi|ina|zaš|e m|ašt| vj|ona|nji|jek| ta|duć|ija| ćo|tup|h p|oja|smi|ada| op|oso|una|sob|odu|dni|rug|udu|ao |di |avi|tno|jim|itu|itk|će |odr|ave|meć|nog|din|svi| ći|kak|kla|rim|akv|elo|štv|ite|vol|jet|opć|pot|tan|ak |nic|nac|uće| sk| me|ven","nld":"en |de |an | de|van| va| en| he|ing|cht|der|ng |n d|n v|et |een| ge|ech|n e|ver|rec|nde| ee| re| be|ede|er |e v|gen|den|het|ten| te| in| op|n i| ve|lij| zi|ere|eli|zij|ijk|te |oor|ht |ens|n o|and|t o|ijn|ied|ke | on|eid|op | vo|jn |id |ond|in |sch| vr|aar|n z|aan| ie|rde|rij|men|ren|ord|hei|hte| we|eft|n g|ft |n w|or |n h|eef|vri|wor| me|hee|al |t r|of |le | of|ati|g v|e b|eni| aa|lle| wo|n a|e o|nd |r h|voo| al|ege|n t|erk| da| na|t h|sta|jke|at |nat|nge|e e|end| st|om |e g|tie|n b|ste|die|e r|erw|wel|e s|r d| om|ij |dig|t e|ige|ter|ie |gel|re |jhe|t d| za|e m|ers|ijh|nig|zal|nie|d v|ns |d e|e w|e n|est|ele|bes| do|g e|che|vol|ge |eze|e d|ig |gin|dat|hap|cha|eke| di|ona|e a|lke|nst|ard| gr|tel|min| to|waa|len|elk|lin|eme|jk |n s|del|str|han|eve|gro|ich|ven|doo| wa|t v|it |ove|rin|aat|n n|wet|uit|ijd|ze | zo|ion| ov|dez|gem|met|tio|bbe|ach| ni|hed|st |all|ies|per|heb|ebb|e i|toe|es |taa|n m|nte|ien|el |nin|ale|ben|daa|sti| ma|mee|kin|pen|e h|wer|ont|iet|tig|g o|s e| er|igd|ete|ang|lan|nsc|ema|man|t g|is |beg|her|esc|bij|d o|ron|tin|nal|eer|p v|edi|erm|ite|t w|t a| hu|rwi|wij|ijs|r e|weg|js |rmi|naa|t b|app|rwe| bi|t z|ker|ame|eri|ken| an|ar | la|tre|ger|rdi|tan|eit|gde|g i|d z|oep","srp":" pr| i |rav|pra| na|na |ma | po|je | sv|da |a p|ima|ja |a i|vo |nje|va |ko |anj|ti |i p| u |ako|a s| da|avo|i s|ju |ost| za|sva|o i|vak| im|e s|o n|ava| sl|nja| ko|no |ne |li |om | ne|ili| dr|u s|slo|koj|a n|obo|ih |lob|bod|im |sti|stv|a o| bi| il| ra|pri|a u|og | je|jed|e p|enj|ni |van|u p|nos|a d|iti|a k|edn|i u|pro|o d|ova| su|ran|cij|i i|sta|se | os|e i|dru| ob|i o|rod|aju|ove| de|i n| ka|aci|e o| ni| od|ovo|i d|ve | se|eni|voj|ija|su |u i|žav|avn|uje| st|red|m i|dna|a b|odi|ara|drž|ji |nov|lju|e b|rža|tva|što|u o|oja| ov|a j|odn|u u|jan|poš|jen| nj|nim|ka |ošt|du |raz|a z| iz|sno|o p|vu |u n|u d|šti|osn|e d|pre|u z|de |ave|nih|bit|aro|oji|bez|tu |gov|lje|ičn| sa|lja|svo|lo |za |vno|e n|eđu| tr|nar| me|vim|čno|oda|ani|đen|nac|nak|an |to |tre|ašt| kr|stu|nog|o k|m s|tit|aln|nom|oj |pos|e u|reb| vr|olj|dno|iko|ku |me |nik| do|ika|e k|jeg|nst|tav|em |i m|sme|o s|dni|bra|nju|šen|ovi|tan|te |avi|vol| li|zaš|ilo|rug|var|kao|ao |riv|tup|st |živ|ans|eno|čov|štv|kla|vre|bud|ena| ve|ver|odu|međ|oju|ušt| bu|kom|kri|pod|ruš|m n|i b|ba |a t|ugi|edi| mo|la |u v|kak| sm|ego|akv|o j|rad|dst|jav|del|tvo| op|nu |por|vlj|avl|m p|od |jem|oje| čo|a r|sam|i v|ere|pot|o o|šte|rem|vek|svi| on|rot|e r","ckb":" he| û |ên | bi| ma|in |na | di|maf|an |ku | de| ku| ji|xwe|her| xw|iya|ya |kes|kir|rin|iri| ne|ji |bi |yên|afê|e b|de |tin|e h|iyê|ke |es |ye | we|er |di |we |ê d|i b| be|erk|ina| na| an|î û|yê |eye|î y|kî |rke|nê |diy|ete|eke|ber|hem|hey| li| ci|wek|li |n d|fê | bê| te|ne |yî | se|net|rî |tew|yek|sti|af | ki|re |yan|n b|kar|hev|e k|aza|n û|wî | ew|i h|n k|û b|î b| mi| az|dan| wî|ekî|î a|a m|zad|e d|mir|bin|est|ara|iro|nav|ser|a w|adi|rov|n h|anê|tê |ewe|be |ewl|ev |mû | ya|tî |ta |emû| yê|ast|wle| tê|n m| bo|wey|s m|bo | tu|n j|ras| da| me|din|î d|ê h|n n|n w|ing|st | ke| ge|în |ar | pê|iye|îna|bat|r k|ema|cih|ê b|wed|û m|dî |û a|vak|ê t|ekh|par| ye|vî |civ|n e|ana|î h|ê k|khe|geh|nge|ûna|fên|ane|av |î m|bik|eyê|eyî|e û| re|man|erb|a x|vê |ê m|iva|e n|hî |bûn|kê | pa|erî|jî |end| ta|ela|nên|n x|a k|ika|f û|f h|î n|ari|mî |a s|e j|eza|tên|nek| ni|ra |ehî|tiy|n a|bes|rbe|û h|rwe|zan| a |erw|ov |inê|ama|ek |nîn|bê |ovî|ike|a n| ra|riy|i d|anî|û d|e e|etê|ê x|yet|aye|ê j|tem|e t|erd|i n|eta|ibe|a g|u d|xeb|atê|i m|tu | wi|dew|mal|let|nda|ewa| ên|awa|e m|a d|mam|han|u h|a b|pêş|ere| ba|lat|ist| za|bib|uke|tuk|are|asî|rti|arî|i a|hîn| hî|edi|nûn|anû|qan| qa| hi| şe|ine|n l|mên|ûn |e a","yor":"ti | ní|ó̩ | è̩|ní | lá|̩n |o̩n|é̩ |wo̩|àn | e̩|kan|an |tí | tí|tó̩| kò|ò̩ |̩tó| àw| àt|è̩ |è̩t|e̩n|bí |àti|lát|áti| gb|lè̩|s̩e| ló| ó |àwo|gbo|̩nì|n l| a | tó|í è|ra | s̩|n t|ò̩k|sí |tó |̩ka|kò̩|ìyà|o̩ | sí|ílè|orí|ni |yàn|dè |̩‐è|ì k|̩ à|èdè| or|ún |ríl|è̩‐|í à|jé̩|‐èd|àbí|̩ò̩|ò̩ò|tàb|nì |í ó|n à| tà|̩ l|jo̩| ti|̩e |̩ t| wo|nìy|í ì|ó n| jé| sì|ló |kò |n è|wó̩| bá|n n|sì | fú|̩ s|í a|rè̩|fún| pé| òm|̩ni|gbà| kí| èn|ènì|in |òmì|ìí |ba |nir|pé |ira|mìn|ìni|n o|ràn|ìgb| ìg|bá |e̩ | rè|̩ n|kí |n e|un |gba|̩ p|í ò|nú | o̩|nín|gbé|yé | ka|ínú|a k|fi | fi|mo̩|bé̩|o̩d|dò̩|̩dò|ó s|i l|̩ o|̩ ì|wà |í i|i ì|hun|bò |i ò|dá |bo̩|o̩m|̩mo|̩wó|bo |áà |̩ k|ó j|ló̩|àgb|ohu| oh| bí| ò̩|bà |ara|yìí|ogb|írà|n s|ú ì| ìb|pò̩|í k| lè|bog|i t|à t|óò |yóò|kó̩|gé̩|à l|ó̩n|rú |lè | yó|̩ ò|̩ e|a w|̩ y|ò̩r|̩ f| wà|ò l|í t|ó b|i n|ó̩w|̩gb|yí |í w|ìké|̩ a|láà|wùj|àbò|i è|ùjo|fin|é̩n|n k|í e|i j|ú à| ìk|òfi| òf| ar|i s|mìí|ìír| mì| ir|rin|náà| ná|jú |̩ b| yì|ó t|̩é̩| i |̩ m|fé̩|kàn|rí |ú è|à n|wù |s̩é|é à| mú| èt|áyé|í g|̩kó|̩dá|è̩d|àwù|è̩k| ìd|irú|í o|i o|i à|láì|í n|ípa| kú|níp| ìm|a l|ké̩|bé |i g|de |ábé|ìn |báy|̩è̩|ígb|wò̩|níg|mú |láb| àà|n f|è̩s|̩ w|ùn |i a|ayé|èyí| èy|mó̩|á è| ni|n b| wó|je̩| ìj|gbá|ò̩n|ó̩g","uzn":"lar|ish|an |ga |ar | va| bi|da |va |ir | hu|iga|sh |uqu|shi|bir|quq|huq|gan| bo| ha|ini|ng |a e|r b| ta|lis|ni |ing|lik|ida|oʻl|ili|ari|nin|on |ins| in|adi|nso|son|iy | oʻ|lan| ma|dir|hi |kin|har|i b|ash| yo|boʻ| mu|dan|uqi|ila|ega|qla|r i|qig|oʻz| eg|kla|a b|qil|erk|ki | er|oli|nli|at | ol|gad|lga|rki|oki|i h|a o| qa|yok|lig|osh|igi|ib |las|n b|atl|n m| ba|ara| qi|ri | sh|iya|ala|lat|in |ham|bil|a t|a y|bos|r h|siy|n o|yat|inl|ik |a q|cha|a h| et|eti|nis|a s|til|ani|h h|i v|mas|tla|osi|asi| qo|ʻli|ati|i m|rni|im |uql|arn|ris|qar|a i|gi | da|n h|ha |sha|i t|mla|rch| xa|i o|li |hun|bar|lin|ʻz |arc|rla| bu|a m|a a| as|mum| be| tu|aro|r v|ikl|lib|taʼ|h v|tga|tib|un |lla|mda| ke|shg| to|n q|sid|n e|mat|amd|shu|hga| te|tas|ali|umk|oya|hla|ola|aml|iro|ill|tis|iri|rga|mki|irl| ya|xal|dam| de|gin|eng|rda|tar|ush|rak|ayo| eʼ| so|ten|alq| sa|ur | is|imo|r t| ki|mil| mi|era|zar|hqa|aza|k b| si|nda|hda|kat|ak |oʻr|n v|a k|or |rat|ada|ʻlg|miy|tni|i q|shq|oda|shl|bu |dav|nid|y t|ch |asl|sos|ilg|aso|n t|atn|sin|am |ti |as |ana|rin|siz|yot|lim|uni|nga|lak|n i|a u|qon|i a|h k|vla|avl|ami|dek| ja|ema|a d|na | em|ekl|gʻi|si |i e|ino| ka|uch|bor|ker| ch|lma|liy|a v|ʼti|lli|aka|muh|rig|ech|i y|uri|ror","zlm":"an |ang| ke| se|ng | da|dan|ada|ara| pe|ak | be|ran|ber| me|ah |nya|hak|per|n s|ata|ala|ya |a s|kan|asa|n k|lah| di|da |aan|gan|nga|dal| ma|n d|erh|eba|rha|a p| ha|kep|pad|yan| ya|ap |ama| ba|nda| te|ra |tia|man|eng|a b|a d|ora|men|n p|ter|iap|san|epa| or|pen|eti| ad| at|a a|n a|set|tan|h b|tau|sia|n t|apa|dak|pa |sa |au |ta |ela|bas|at | sa|n b|beb|n m|keb|h d|p o|end|ega|aka|a k|am |sam|gar|ana|leh|lam|ole| un|neg|k k|ban|g a|di |n y|eh |a m|eri|aha|han| ti|a t|ma |any|uan|seb|ebe|ngs|atu|mas|bag|car|mem|ing|ian| ne|kes|i d|gsa|ia |ika|mat|agi|ert| de| la|emb|und|nan|asi|emu|ers|epe|na |anu|gi |ung|erk|n h|ngg|tu |ind|pem|i m|g b|kla| in|iha|pun|i s|erl|akl|era|as |dap|eca|sec|al |k m|bar|nus|usi|lan|tin|si |awa|nny| su|bol|sas| as|ini|rta|rat|ena|sem|aya|ni |den|g m|g t|kem|i k|adi|ai |ti | ap| ta|in | he| bo|had|uka|tar| an|hen|ann|ain|ka |rka|ri |ema|k h|n i|g s|dia|dun|ira|rsa|elu|nta|a n|mel|iad|uk |mpu|ua |har|kat|aga|lai|enu|ses|emp|ntu|k d|ent|un |mba|rma|jua|uat|k a|mar|rak|h m|ila|lua|i a|aja|ker|dil|g d|uma|rli|lin|esi|sua|nak|ndu|l d| pu|t d|erm|ser|ar |ese|ati|tuk|rga|i p|dar|esa|bah| ol|ari|ngk|ant|sek|gam|raa|mbe|ida|sat|iri|kea|i b|saa|dir|g u|erj|tik|unt|eka|rja","ibo":"a n|e n|ke | na|na | ọ | bụ| n |nwe|ere|ọ b|re |nye| nk|ya |la | nw| ik| ma|ye |e ọ|ike|a o|nke|a m|ụ n| ya|a ọ|ma |bụl|ụla| on| a |e i|kik|iki|ka |ony|ta |bụ |kwa| nd|a i|i n|di |a a|wa |wer|do | mm|dụ |e a|ha | ga|any| ob|ndi| ok|he |e m|e o|a e|ọ n|ite|rụ |hi |mma|ga‐|wu |ara| dị|aka|che|oke|we |o n| ih|n o|adụ|mad|obo|bod|a g|odo| ka| ez|te |hị |be |ụta|dị | an|zi | oh|a‐e|akw|gba|i m|me | ak|u n|nya|ihe|ala|ohe|ghi|ri | ọz|her|ra |weg| nt| iw| mb|ba |pụt| si|ro |oro|iwu|chi|a‐a|rị |ụ i|ụ ọ| eb|iri|ebe|ụrụ|zọ | in|a y|ezi|e ị|kpa|le |ile|ịrị|n e|kpe|mba| ha|bi |sit|e e|inw|nil|asị| en|mak|a u| ni|apụ|chị|i i|ghị|i ọ|i o|si | e |ide|o i|e y|ụ m|a s|u o|kwu|ozu|yer|ru |enw|ụ o|ọzọ|gid|hụ |n a|ahụ|nkw|sor|egh|edo|a ụ|tar|n i|toz|ị o|pa |i a| me|ime|uru|kwe| mk|tu |ama|eny|uso|de | im|ọ d|osi|hed|a d| kw|mkp|wet| ọr| ọn|obi|ọrụ| ịk| to|gas| ch|ịch|nha|ọnọ|nọd| nc| al|n ụ|ị m| us|nọ |u ọ|nch| o |eta|n u| ot|otu|sir|sịr| nh|a k|ali|o m| ag| gb|e s|ọta|nwa|ị n|lit|ega|ji |ọdụ|e k|ban|e g|ị k|esi|agb|eme|hu |ikp|zu |pe |nta|na‐|chọ|u a|a b|uch|n ọ|onw|ram|kwụ|ekọ|i e| nọ| ug|ọch|u m|gwu|a h|zụz|ugw|meg|ị e|nat|e h|dịg|o y|kpu|pụr|cha|zụ |hịc|ich| ng|ach| og|wap|wan|ịgh|uwa| di| nn|i ị","ceb":"sa | sa|ng |ang| ka|an | pa|ga | ma|nga|pag| ng|a p|on |kat|a k|ug |od | ug|g m| an|ana|n s|ay |ung|ata|ngo|a m|atu|ala|san|ag |tun|g s|g k|god|d s|a s|ong|mga| mg|g p|n u|yon|a a|pan|ing|usa|tan|tag|una|aga|mat|ali|g u|han|nan| us|man|y k|ina|non|kin| na|syo|lan|a b|asa|nay|n n|a i|awa| ta|taw|gaw|nsa|a n|nas| o |ban|agp|isa|dun|was|iya| gi|asy|adu|ini|bis| ad|ili|o s| bi|g a|nah|nag|a t| ki|lin|lay|ahi|sam|al |wal| di|nal|asu| ba|ano|agt| wa|ama|yan|a u| iy|kan|him|n k|gan|ags|n a|kag| un|ya |kas|gpa|g t| su|aha|wha|agk|awh|gka|a g|kal|l n|gla|gsa|sud|gal|imo|ud |d u|ran|uka|ig |aka|aba|ika|g d|ara|ipo|ngl|g n|uns|n o|kau|i s|y s|og |uta|d n|li | si|gik|g i|mta|ot |iin| la| og|o a|ayo|ok |awo|aki|kab|aho|n m|hat|o p|gpi|a w|apa|lip|ip | hu| ga|a h|uba|na | ti|bal|gon|la |ati|wo |ad |hin|sal|gba|buh| bu| ub|uha|agb|hon|ma |nin|uga|t n|ihi| pi|may| pu|mak|ni | ni|d a|pin|abu|agh|ahu|uma|as |dil|say| in|at |ins|lak|hun|ila|mo |s s|sak|amt|o u|pod|ngp|tin|a d|but|ura|lam|aod|t s|bah|ami|aug|mal|sos|os |k s| il|tra| at|gta|bat|aan|ulo|iha|ha |n p| al|g b|lih|kar|lao|agi|amb|mah|ho |sya|ona|aya|ngb|in |inu|a l| hi|mag|iko|it |agl|mbo|oon|tar|o n|til|ghi|rab|y p| re|yal|aw |nab|osy|dan","tgl":"ng |ang| pa|an |sa | sa|at | ka| ng| ma|ala|g p|apa| na|ata|pag|pan| an| at|ay |ara|ga |a p|tan|g m|mga| mg|n n|pat| ba|n a|aya|na |ama|g k|awa|kar|a k|lan|rap|gka|nga|n s|g n|aha|g b|a a| ta|agk|gan|tao|asa|aka|yan|ao |a m|may|man|kal|ing|a s|nan|aga| la|ban|ali|g a|ana|y m|kat|san|kan|g i|ong|pam|mag|a n|o a|baw|isa|wat| y |lay|g s|y k|in |ila|t t| ay|aan|o y|kas|ina|t n|ag |t p|wal|una|yon| o | it|nag|lal|tay|pin|ili|ans|ito|nsa|lah|kak|any|a i|nta|nya|to |hay|gal|mam|aba|ran|ant|agt|on |t s|agp| wa| ga|gaw|han|kap|o m|lip|ya |as |g t|hat|y n|ngk|ung|no |g l|gpa|wa |lag|gta|t m|kai|yaa|sal|ari|lin|a l|pap|ahi| is| di|ita| pi|pun|agi|ipi|mak|a b|y s|bat|yag|ags|o n|aki|tat|pah|la |gay|hin| si|di |i n|sas|iti|a t|t k|mal|ais|s n|t a|al |ipu|ika|lit|gin| ip|ano|gsa|alo|nin|uma|hal|ira|ap |ani|od |i a|gga|y p|par|tas|ig |sap|ihi|nah|ini| bu|ngi|syo|o s|nap|o p|a g| ha|uka|a h|aru|a o|mah|iba|asy|li |usa|g e|uha|ipa|mba|lam|kin|kil|duk|n o|iga| da|dai|aig|igd|gdi|pil|dig|pak| tu|d n|sam|nas|nak|ba |ad |lim|sin|buh|ri |lab|it |tag|g g|lun|ain|and|nda|pas|kab|aho|lig|nar|ula| ed|edu| ib|git|ma |mas|agb|ami|agg|gi |sar|i m|siy|g w|api|pul|iya|amb|nil|agl|sta|uli|ino|abu|aun|ayu| al|iyo","hun":" sz| a |en | va|és | és|min|ek | mi| jo|jog|ind|an |nek|sze|ság| az|gy |sza|nde|ala|az |den|a v|val|ele| el|oga|mél|egy| eg|n a|ga |zab| me|zem|emé|aba|int|van|bad|tel|tet| te|ak |tás|ény|t a| ne|gye|ély|tt |n s|ben|ség|zet|lam|meg|nak|ni | se|ete|sen|agy|let|lyn|s a|yne|ra |z e|et | al|mel|kin|k j|eté|ok |tek| ki|vag|re |n m|oz |hoz|ez |s s|ett|gok|ogy| kö|mbe|es |em |nem|ely| le|ell|emb|hog|k a|atá|köz|nt | ho|yen|hez|el |z a|len|dsá|ásá|tés|ads|k m| ál| em|a s|nte|a m|szt|a t|áll|ás |y a|ogo|sem|a h|enk|nye|ese|nki|ágo|t s|lap|ame|ber|ló |k é|nyi|ban|mén|s e|i m|t m| vé|lla|ly |ébe|lat|ág |ami|on |mze|n v|emz|fel|a n|lő |a a|eki|eri|yes| cs|lle|tat|elő|nd |i é|ég |ésé|lis|yil|vet|át |kül|ért| ke|éte|rés|l a|het|szo|art|alá| ny|tar|koz| am|a j|ész|enl|elé|ól |s k|tár|s é|éle|s t|lem|sít|ges|ott| fe|n k|tko|zás|t é|kel|ja | ha|aló|zés|nlő|ése|ot |ri |lek|más|tő |vel|i j|se |ehe|tes|eve|ssá|tot|t k|olg|eze|i v|áza|leh|n e|ül |tte|os |ti |atk|zto|e a|tos|ány|ána|zte|fej|del|árs|k k|kor|ége|szá|t n| bi|zat|véd|nev|elm|éde|zer|téb|biz|rra|ife|izt|ere|at |ll |k e|ny |sel| né|ába|lt |ai |sül|ház|kif|t e| ar|leg|d a|is |i e|arr|t t|áso|it |ető|al | má|t v| bá|bár|a é|esü|lye|m l| es|nyo","azj":" və|və |ər |lar| hə|in |ir | ol| hü| bi|hüq|üqu|quq|na |lər|də |hər| şə|bir|an |lik| tə|r b|mal|lma|ası|ini|r h|əxs|şəx|ən |arı|qla|a m|dir|aq |uqu|ali| ma|una|ilə|ın |yət| ya|ara|ikd|əri|ar |əsi|əti|r ş|rin|yyə|n h| az|dən|nin|ərə|tin|iyy|mək|zad| mü|sin| mə|ni |nda|ət |ndə|aza|rın|ün |ını|ə a|i v|nın|olu|qun| qa| et|ilm|lıq|ə y|ək |lmə|lə |kdi|ind|ına|olm|lun|mas|xs |sın|ə b| in|n m|q v|nə |əmi|n t|ya |da | bə|tmə|dlı|adl|bər| on|əya|ə h|sı |nun|maq|dan|inə|etm|un |ə v|rlə|n b|si |raq| va|ə m|n a|ınd|rı |anı| öz|əra|nma|n i|ama|a b|irl|ala|li |ins|bil|ik | al| di|ığı|ə d|lət|il |ələ|ə i|ıq |nı |nla|dil|müd|n v|ə e|unm|alı| sə|xsi|ə o|uq |uql|nsa|ətl| də|ili|üda|asi| he|ola|san|əni|məs| da|lan| bu|tər|həm|dır|kil|iş |u v| ki|min|eyn|mi |yin| ha|sos|heç|bu |eç | ed|kim|lığ|alq|xal| as|sia|osi|r v|q h|rə |yan|i s| əs|daf|afi| iş|ı h|fiə| ta|ə q|ıql|a q|yar|sas|lı |ill|mil|əsa|liy|tlə|siy|a h|məz|tün|ə t| is|ist|iyi| so|n ə|al |ifa|ina|lıd|ı o|ıdı|əmə|ır |ədə|ial| mi|əyi|miy|çün|n e|iya|edi| cə| bü|büt|ütü|xil|üçü|mən|adə|t v|a v|axi|dax|r a|onu| üç|seç| nə| se|man|ril|sil|əz |iə |öz |ılı|aya|qan|i t|şər|təm|ulm|rəf|məh| xa|ğın| dö| ni|sti|ild|amə|qu |nam|n o|n d|var|ad |zam|tam|təh","ces":" pr| a |ní | ne|prá|ráv|ost| sv| po|na |ch |ho | na|nos|o n| ro|ání|ti |vo |neb|ávo|má |bo |ebo| má|kaž| ka|ou |ažd| za| je|dý |svo|ždý| př|a s| st|sti|á p| v |obo|vob| sp|bod| zá|ých|pro|rod|ván|ení|né |ý m|ého| by| ná|spo|ně |o p|mi |í a|ter|roz|ová|to | ja| li|áro|nár|by |jak|a p|a z|ny | vš|kte|i a|lid|ím |o v|í p|u p|mu |at | vy|odn| so| ma|a v| kt|í n|zák|li |oli|ví |kla|tní|pod|stá|en |do |t s|mí |je |em |áva| do|byl| se|být|í s|rov| k |čin| ve|ýt |í b|it |dní|vše|pol|o s| bý|tví|nýc|stn|nou|ejn|sou|ran|ci |vol|se |nes|a n|pří|eho|ným|tát|va |ním|mez|ají|i s|stv|ké |ích|ečn|žen|e s|vé |ova|své|ým |kol|du |u s|jeh|kon|ave|ech|eré|nu | ze|i v|o d|í v|hra|ids|m p|ému|ole|y s| i |maj|o z| to|aby|sta| ab|m a|pra| ta|chn| ni|že |ovn|ako|néh|len|dsk|rac|lad|chr| že|vat| os|sob|aké|i p|smí|esm|st |i n|m n|a m|lně|lní|při|bez|dy |áln|ens|zem|t v|čen|leč|kdo|ými| ji|oci|i k| s |í m|jí | či|áv |ste|och| oc|vou|ákl| vz|rav|odu|nez|inn|ský|nit|ivo|a j|u k|iál| me|ezi|ské|ven|stu|u a|tej|oln|slu|zen|í z|y b|oko|zac|níc|jin|ky |a o|řís|obe|u v|tak|věd|oje| vý|ikd|h n| od|čno|oso|ciá|h p| de|a t|ům |soc|jíc|odů|něn|adn|tup|dů |děl|jno|kéh|por|ože|hov|aci|nem|é v|rok|i j|u o|od |ího|vin|odi","run":"ra |we |wa | mu|e a|se | n |a k|ira|ntu|tu | ku| um|ko |a i|mu |iri|mun|hir|ye |unt|ing|ash|ere|shi|a n|umu|zwa| bi|gu |ege|a a|za |teg|ama|e k|go |uba|aba|ngo|ora|o a|ish| ba| ar|ung|a m| we|e n|na |sho|ese|nga| ab|e m|mwe|ugu| kw|ndi| gu|ate|kwi|wes|riz|ger|u w| at|di |gih|iza|n u|ngi|ban|yo |ka |e b|a b| am| ca|ara|e i|obo|hob|ri |u b|can|nke|ro |bor| in|bah|ahi|ezw|a u|gir|ke |igi|iki|iwe|rez|ihu|hug|aku|ari|ang|a g|ank|ose|u n|o n|rwa|kan| ak|nta|and|ngu| vy|aka|n i|ran| nt| ub|kun|ata|i n|kur|ana|e u| ko|gin|nye|re | ka|any|ta |uko|amw|iye| zi|ga |ite| ib|aha| ng|era|o b|ako|o i| bu|o k|o u|o z| ig|o m|ho |mak|sha| as| iv|ivy|n a|i b|izw|o y| uk|ubu|aga|ba |kir|vyi|aho| is|nya|gan|uri| it| im|u m|kub|rik|hin|guk|ene|bat|nge|jwe|imi| y |vyo|imw|ani|kug|u a|ina|gek|ham|i i|e c|ze |ush|e y|uru|bur|amb|ibi|agi|uza|zi |eye|u g|gus|i a| nk|no |abi|ha |rah|ber|eme|ras|ura|kiz|ne |tun|ron| zu|ma |gen|wo |zub|w i|kor|zin|wub|ind| gi|y i|ugi|je |iro|mbe| mw|bak| ma|ryo|eka|mat| ic|onk|a z| bo|ika|eko|ihe|ukw|wir|bwa| ry| ha|bwo| ag|umw|yiw|tse| ya|he |eng| ki|nka|bir|ant|aro|gis|ury|twa| yo|bik|rek|ni | ah| bw|uro|mw |tan|i y|nde|ejw| no|zam|puz|ku |y a|a c|bih|ya |mur|utu|eny|uki|bos","plt":"ny |na |ana| ny|y f|a n|sy |aha|ra |a a| fa|n n|y n|a m|an | fi|tra|any| ma|han|nan|ara|y a| am|ka |in |y m|ami|olo| ts|lon|min| mi| sy| na|a t| ol|fan| ha|a i|man|iza| iz|ina|ona|y h|aka|o a|ian|a h|reh|etr|a s|het|on |a f|ire|fah|tsy|mba| ar| hi|zan|ay |ndr|y o|ira|y t| an|ehe|o h|afa|y i|ren|ran| zo|ena|amb|dia|ala|amp|zo |ika| di|tan|y s|y z| az|ia |m p|rin|jo |n j| jo| dr|zy |ry |a d|ao |and|dre|haf|nen|mpi|rah| ka|eo |n d| ir|ho |am |rai|fa |elo|ene|oan|omb| ta| pi| ho|ava|azo|dra|itr|iny|ant|tsi|zon|asa|tsa| to|ari|ha |a k|van|n i|fia|ray| fo|mbe|ony|sa |isy|azy|o f|lal|ly |ova|lom| vo|nat|fir|sam|oto|zay|mis|ham|bel| ra|a r|ban|kan|iha|nin|a e|ary|ito| he| re| no|ita|voa|nam|fit|iar| ko|tok|isa|fot|no |otr|mah|aly|har|y v|y r| sa|o n|ain|kam|aza|n o|oka|ial|ila|ano|atr|oa | la|y l|eri|y d|ata|hev|sia|pia|its|reo| ao|pan|anj|aro|tov|nja|o s|fam|pir| as|ty |nto|oko|y k|sir|air|tin|hia|ais|mit|ba | it| eo|o t|mpa|kon|a z|a v|ity|ton|rak|era|ani|ive|mik|ati|tot|vy |hit|hoa|aho|ank|ame|ver|vah|tao|o m|ino|dy |dri|oni|ori| mo|hah|nao|koa|ato|end|n t| za|eha|nga|jak|bar|lah|mia|lna|aln|va | mb|lan| pa|aov|ama|eve|za |dro|ria|to |nar|izy|ifa|adi|via|aja| va|ind|n k|idi|fiv|rov|vel","qug":"una|ta | ka|na |ka |ash|cha|a k|ari|ish|kun|kta|ana|pak|hka|shk|apa|mi |ach|hay|akt|shp|man|ak | ch| ha|rin|ata|tak|lla|ita|ami|ama|aku|har| pa|pas|ayñ|yñi|ina| ma| ru|uku|sh |hpa|run|all|kuy|aka|an | tu|tuk|yta|chi|chu|a c|ñit|in |nak|a h|nka|ris|tap|kan| ki|ayt|pi | sh|pa |i k|a p|nap|kam|kaw|pay|nam|ayp|aws|iri|wsa|a s|ank|nta|uy |a t|hin|a m|ay | li|ant|lia|kay|nat|a r|shi|iak|lak|uya| wa|yuy|say|kis|y r|ypa|hun|a a| yu|n t|tam| ti|yay|n k| ya|a w|hpi|lli| al|api|yku|un |ipa|a i|iku|ayk|shu| sa|ush|pir|ich|kat|hu |huk| il|ill|kas|a y|rik|yac|a l| ku|kac|hik|tan|wan|ypi|ink|ika| ni|ila|ima|i c|yll|ayl| wi|mac|nis| ta|i y|kus|tin|n s|i p|yan|llu|la |iks|tik|kpi| pi|awa|may|lan|li | ri|kll|yas|kin|kak|aya|ksi|k h|aym|war|ura| ay|lat|ukt|i t|iya|ull|mas|sha|kir|uch|h k|nch|akp|uma|pip|han|kik|iki|riy|aki| ii|i s|n p|h m|kar|nal|y h|tac| su|nac|mak|n m|nki|k a|mam|iwa|k t|k k|i m|yma| ña|wil|asi|nmi|kap|pal|sam|pam|k i|k l|i i|pan|sum|i w| hu|his| mu|iia|mun|k m|u t|pik|was|ik |ma |hat|k r|akl|huc| im|mal|uyk|imi|n y|anc|y k|a n|iñi| iñ|wak|unk|yka| mi|iña|a u|has|ywa| ak|llp|ian|ha |tar|rmi|i a|arm|las|ati|pur|sak|ayw|hap|yar|uti|si |iyt|uri|kim| ar|san|h p|akk|iy |wat|wpa|y i|u k","mad":"an |eng|ban|ng | sa| ka|dha| ba|ren|ak |ang| se| ha|hak| dh|na | pa|se |adh|a s|aba|n s|ara|ngg|are|ha |aga|sa | or|ore|asa|sar|ana| ma|aan|a k|ale|gi | ag|gad|a b|n o|n k|eba|ala|ra |gan| ke|dhu|ota|aja|bas|n b|ka |man|tab|dhi|beb|sab|ama|ako|abb|at |ggu|nga| ta|pan|wi |huw|uwi|eka|ata|a d|san| ot|agi|lak|hal|ba |bba|i h|ong|em |kab|g a|lem|a o| pe| na|ane|par|ngs|nge|gar|a a|tan|gsa|a p|ran|i s|k h|n p|uy |guy|ken|n a|al |ada| ga|apa|pon|e d| e |nek| an|g s|ta |kaa|on |kal|a m|ssa|ona|abe|kat| la|a e|e e|sal|ate|jan|ri |nan|lab|asi|sad|i p|e a|lan|aka|a h|ari| bi|ena|si |daj| ng|ton|e k|har|oss|gen|i k|g k|car|ase|ano|era|kon| be|nya|n d|nag|bad|ar |epo| da|mas| kl| al|n t|mat|nos|n n|ela|g e|a n|k k|uwa|adi|pad|ggi|uan|i d|ne | so|hi |sae|oan|wan|as |le |gap|ter|yat|om |kla|k a|e b|ina|ah |k s|koa|i a|ega|neg|n h|m p|aha| as| ja|abi|ma |kas|bi | mo|aon| di|one| ep|per|aya|e s|nto|te |bat|epa|nda|n e| ca|int|pam|di |ann| ra|aen|k d|amp|a t|nta|and|e p|rga|pen|yar|mpo|ste|dra|ok |oko|ila|g p|k b|i b|set|to |isa|nao|nna|n m|ett| a |bis|hid|bin|i m|nas| ho|kar|t s| po|dil| to|aju|ika|kom|arg|ant|raj|a l|das|tto|ost|mos|lae|ga |rek|idh|tad|hig|en |rny|arn|ndh|eta|adu| dr|jat|jua|gam","nya":"ndi|ali|a k|a m| ku| nd|wa |na |nth| mu| al|yen|thu|se |ra |nse|hu |di |a n|la | pa|mun| wa|nga|unt| la|a u|u a|e a|ons|za | ma| lo|iye|ace|ce |a l|idw|ang| ka|kha|liy|ens|li |ala|ira|ene|pa |i n|we |e m|ana|dwa|era|hal|ulu|lo |ko |dzi| ci|yo |o w|iko|ga |a p|chi| mo|lu |o l|o m|oyo|ufu| um|moy|zik| an|ner|and|umo|ena| uf|dan|iri|ful|a a|ka |to |hit|nch| nc|a c|ito|fun|dwe| da|kuk|wac| dz|e l|a z|ape|kap|u w|e k|ere|ti |lir| za|pen|tha|aye|kut|mu |ro |ofu|ing|lid| zo|amu|o c|i m|mal|kwa|mwa|o a|eza|i p|o n|so |i d|lin|nso| mw|iro|zo | a |ati| li|i l|a d|ri |edw|kul|una|uti|lan|a b|iki|i c|alo|i k| ca|lam|o k|dza|ung|o z|mul|ulo|uni|gan|ant|nzi| na|nkh|e n|san|oli|wir|tsa|u k|ome|ca |gwi|unz|lon|dip|ipo|yan|gwe|pon|akh|uli|aku|mer|ngw|cit| po| ko|kir|mba|ukh|tsi|bun|iya|ope|kup|bvo|han| bu|pan|ame|vom|ama| ya|siy| am|rez|u n|zid|men|osa|ao |pez|i a| kw| on|u o|lac|ezo|aka|nda|hun|u d|ank|diz|ina|its|adz| kh|ne |nik|e p|o o|ku |phu|eka| un|eze|mol|ma | ad|pat|oma|ets|wez|kwe|kho|ya |izo|sa |o p|kus|oci|khu|okh|ans|awi|izi|zi |ndu|iza|no |say| si|i u|aik|jir|ats|ogw|du |mak|ukw|nji|mai|ja |sam|ika|aph|sid|isa|amb|ula|osi|haw|u m| zi|oye|lok|win|lal|ani| ba|si | yo|e o|opa|ha |map|emb","zyb":"bou|aeu|enz|nz |eng|iz |ih |uz |uq |oux|ing| bo| di| ca|z g|dih|ux |ngh|cae|gen|euq|z c|you|ng |ung|ngz|ij | gi| mi|miz|aen| ge|z d| ci|gya| yi| de|ouj|uj | gu|cin|ngj|ien|mbo|dae| mb|zli| se|gij|j g|ang|ouz|z y|j d|nae| cu| ba| da|h g|oz |yin|de |z b|nzl|li |nj |euz|x m| cw|iq | yo|gz |q g|yau|inh|vun|x b|h c| ga|ix |cwy|wyo| ro|rox|oxn|vei|nda|i c| nd|z m|gh |j b|wz | si| gy|hoz|unz|xna|cun|gue| li|ei |z h|yen|bau|can|inz|q c|dan| hi|gj |uh |yie| vu|faz|hin| bi|uek|goz|zci|nh |aej|ya |ej | fa|gun|ciz|au | go| ae|h m|ngq|den|gva|ouq|nq |z s|q d|ekg|q s| do|h d|kgy|eix| wn|ci |az |hu |nhy| ha|j c|u d|j n|z l|auj|gai|gjs|lij|eve|h s|sen|sin|sev|ou |sou|aiq|q y|h y|jso|bin|nei| la|en |ouh|din|uen|enj|enh|i b|z r|awz|q n|vih|j y|anj|bwn|sei|z n| ne|ozc|hye|j s|i d|awj|liz|g g|bae|wng|g b|eiq|bie|enq|zda| ya|n d|h f|x d|gak|hix|z v|h b|oen|anh|u c|in |i g|ghc|zsi|hci|siz|anz|ghg|ez |dun|cou| du|ngg|ngd|j m|cuz| ho|law|eiz|g c| dw|aw |g d|izy|hgy|ak |nde|min|dei|gda|ujc|wn |env|auy|iuz|ai |wnj|a d|hen|ozg|nzg|ek |g y|gzd|gzs|yaw|e c|yuz|daw|giz|jhu|ujh| co|nvi|guh|coz| ve| he|i m|sae|aih|x l|iet|iuj|dwg|iqg|qgy|gih|yai| na| fu|uyu|zbi|zdi|q b|cie|inj|zge|wnh|jsi|uzl| bu| le|eij|izc|aq ","kin":"ra | ku| mu|se |a k|ntu|nga|tu |umu|ye |li | um|mun|unt|a n|ira| n |ere|wa |we | gu|mu |ko |a b|e n|o k|e a|a u|a a|u b|e k|ose|uli|aba|ro | ab|gom|e b|ba |ugu| ag|omb|ang| ib|eng|mba|o a|gu | ub|ama| by| bu|za |ihu|ga |e u|o b| ba|kwi|hug|ash|ren|yo |ndi|e i| ka| ak| cy|iye| bi|ora|re |gih|igi|ban|ubu| nt| kw|di |gan|a g|a m|aka|nta|aga| am|a i|ku |iro|i m|ta |ka |ago|byo|ali|and|ibi|na |uba|ili| bw|sha|cya|u m|yan|o n| ig|ese|no |obo|ana|ish|kan|sho| we|era|ya |aci|wes|ura|i a|uko|e m|n a|o i|kub|uru|hob|ber|ran|bor| im|ure|u w|wo |cir|gac|ani|bur|u a|o m|ush| no|e y| y |rwa|eke|nge|ara|wiy|uga|zo |ne |ho |bwa|yos|anz|aha|ind|mwe|teg|ege|are|ze |n i|rag|ane|u n|ge |mo |u k|bul| uk|bwo|bye|iza|age|ngo|u g|gir|ger|zir|kug|ite|bah| al| ki|uha|go |mul|ugo|n u|tan|guh|y i| ry|gar|bih|iki|atu|ha |mbe|bat|o g|akw|iby|imi|kim|ate|abo|e c|aho|o u|eye|tur|kir| ni|je |bo |ata|u u| ng|shy|a s|gek| ru|iko| bo|bos|i i| gi|nir|i n|gus|eza|nzi|i b|kur| ya|o r|ung|rez|ugi|ngi|nya| se|mat|eko|o y| in|uki| as|any|bis|ako|gaz|imw|rer|bak|ige|mug|ing|byi|kor|eme|nu | at|bit| ik|hin|ire|kar|shi|yem|yam| yi|gen|tse|ets|ihe|hak|ubi|key|rek|icy| na|bag|yer| ic|eze|awe|but|irw| ur|fit|ruk|ubw|rya|uka|afi","zul":"nge|oku|lo | ng|a n|ung|nga|le |lun| no|elo|wa |la |e n|ele|ntu|gel|tu |we |ngo| um|e u|thi|uth|ke |hi |lek|ni |ezi| ku|ma |nom|o n|pha|gok|nke|onk|a u|nel|ulu|oma|o e|o l|kwe|unt|ang|lul|kul| uk|a k|eni|uku|hla| ne| wo|mun| lo|kel|ama|ath|umu|ho |ela|lwa|won|zwe|ban|elw|ule|a i| un|ana|une|lok|ing|elu|wen|aka|tho|aba| kw|gan|ko |ala|enz|o y|khe|akh|thu|u u|na |enk|kho|a e|zin|gen|i n|kun|alu|mal|lel|e k|nku|e a|eko| na|kat|lan|he |hak| ez|o a|kwa|o o|ayo|okw|kut|kub|lwe| em|yo |nzi|ane|obu| ok|eth|het|ise|so |ile|nok| ba|ben|eki|nye|ike|i k|isi| is|aph|esi|nhl|mph| ab|fan|e i|isa| ye|nen|ini|ga |zi |fut| fu|uba|ukh|ka |ant|uhl|hol|ba |and|do |kuk|abe|za |nda| ya|e w|kil|the| im|eke|a a|olo|sa |olu|ith|kuh|o u|ye |nis| in|ekh|e e| ak|i w|any|khu|eng|eli|yok|ne |no |ume|ndl|iph|amb|emp| ko|i i| le|isw|zo |a o|emi|uny|mel|eka|mth|uph|ndo|vik| yo|hlo|alo|kuf|yen|enh|o w|nay|lin|hul|ezw|ind|eze|ebe|kan|kuz|phe|kug|nez|ake|nya|wez|wam|seb|ufa|bo |din|ahl|azw|fun|yez|und|a l|li |bus|ale|ula|kuq|ola|izi|ink|i e|da |nan|ase|phi|ano|nem|hel|a y|hut|kis|kup|swa|han|ili|mbi|kuv|o k|kek|omp|pho|kol|i u|oko|izw|lon|e l| el|uke|kus|kom|ulo|zis|hun|nje|lak|u n|huk|sek|ham| ol|ani|o i|ubu|mba| am","swe":" oc|och|ch |er |ing|för|tt |ar |en |ätt|nde| fö|rät|ill|et |and| rä| en| ti| de|til|het|ll |de |om |var|lig|gen| fr|ell|ska|nin|ng |ter| ha|as | in|ka |att|lle|der|sam| i |und|lla|ghe|fri|all|ens|ete|na |ler| at|ör |den| el|av | av| so|igh|r h|nva|ga |r r|env|la |tig|nsk|iga|har|t a|som|tti| ut|ion|t t|a s|nge|ns |a f|r s|män|a o| sk| si|rna|isk|an | st|är |ra | vi| al|t f| sa|a r|ati| är| me| be|n s| an|tio|nna|lan|ern|t e|med| va|ig |äns| åt|sta|ta |nat| un|kli|ten| gr|vis|äll| la|one|han|änd|t s|stä|t i|ner|ans|gru| ge|ver| må| li|lik|ihe|ers|rih|r a| re|må |sni|n f|t o| mä| na|r e|ri |ad |ent|kla|det| vä|run|rkl|da |h r|upp|dra|rin|igt|dig|n e|erk|kap|tta|ed |d f|ran|e s|tan|uta|nom|lar|gt |s f| på| om|kte|lin|r u|vid|g o|änn|erv|ika|ari|a i|lag|rvi|id |r o|s s|vil|r m|örk|ot |ndl|str|els|ro |a m|mot| mo|i o|på |r d|on |del|isn|sky|e m|ras| hä|r f|i s|a n|nad|n o|gan|tni|era|ärd|a d|täl|ber|nga|r i|enn|nd |n a| up|sin|dd |örs|je |itt|kal|n m|amt|n i|kil|lse|ski|nas|end|s e| så|inn|tat|per|t v|arj|e f|l a|rel|t b|int|tet|g a|öra|l v|kyd|ydd|rje| fa|bet|se |t l|lit|sa |när|häl|l s|ndr|nis|yck|h a|llm|lke|h f|arb|lmä|nda|bar|ckl|v s|rän|gar|tra|re |ege|r g|ara|ess|d e|vär|mt |ap ","lin":"na | na| ya|ya |a m| mo|a b|to | ko| bo|li |o n| li|i n| pe|i y|a y|a n|ngo|ki | ba| ma|kok|pe |la |a l|zal|oki|ali|nso|oto|ala|ons|so |mot|a k|nyo|eng|kol|go |nge| ny|yon|o e|ang|eko|te |o y|oko|olo|ma |iko|a e|e m|e b|lik|ko |o a|ako|ong| ye|mak|ye |isa| ek|si |lo |aza|sal|ama| te|bat|o p|oyo|e n| az|a p|ani|sen|o m|ela|ta |amb|i k|ban|ni | es|yo |mi |mba|osa| oy|aka|lis|i p|eli|a t|mok|i m|ba |mbo| to| mi|isi|bok|lon|ato|ing|o b| nd|ota|bot| ez|ge |nga|eza|o t|nde|ka |bo |gel|kan|e k|lam|sa |ese|koz| po|den|ga |oba|omb|oli|yan|kop|bon|mos|e e|kob|oka|kos|bik|lin|po |e a| lo| bi|kot|’te|ngi|sam| ’t|omi|e y|ti |i b| el|elo|som|lok|esa|gom|ate|kam|i t|ika|a s|ata|kat|ati|wa |ope|oza|iki|i e| ka|bom|tal|o l|bek|zwa|oke|pes| se|bos|o o|ola|bak|lak|mis|omo|oso|nza| at|nda|bal|ndi|mu |mob|osu|e t|asi|bis|ase|i l|ele|sus|usu|su |ozw|and|mol|tel|lib|mbi|ami| nz|ne |ene|kel|aye|emb|yeb|nis|gi |obo|le |kum|mal|wan|a ’|pon| ep|baz|tan|sem|nya|e l| ta|gis|opo|ana|ina|tin|obe| ti|san| ak|mab|bol|oku|u y|mat|oti|bas|ote|mib|ebi|a o|da |bi | mb|lel|tey|ibe|eta|boy|umb|e p|eni|za |be |mbe|bwa|ike|se | et|ibo|eba|ale|yok|kom| en|i a|mik|ben|i o| so|gob|bu |son|sol|sik|ime|eso|abo| as|kon|eya|mel","som":" ka|ay |ka |an |uu |oo |da |yo |aha| iy|ada|aan|iyo|a i| wa| in|sha| ah| u |a a| qo|ama| la|hay|ga |ma |aad| dh| xa|ah |qof|in | da|a d|aa |iya|a s|a w| si| oo|isa|yah|eey|xaq|ku | le|lee| ku|u l|la |taa| ma|q u|dha|y i|ta |aq |eya|sta|ast|a k|of |ha |u x|kas|wux| wu|doo|sa |ara|wax|uxu| am|xuu|inu|nuu|a x|iis|ala|a q|ro |maa|o a| qa|nay|o i| sh| aa|kal|loo| lo|le |a u| xo| xu|o x|f k| ba|ana|o d| uu|iga|a l|yad|dii|yaa|si |a m|gu |ale|u d|ash|ima|adk|do |aas| ca|o m|lag|san|dka|xor|adi|add| so|o k| is|lo | mi|aqa|na | fa|soo|baa| he|kar|mid|dad|rka|had|iin|a o|aro|ado|aar|u k|qaa| ha|ad |nta|o h|har|axa|quu| sa|n k| ay|mad|u s| ga|eed|aga|dda|hii|aal|haa|n l|daa|xuq|o q|o s|uqu|uuq|aya|i k|hel|id |n i| ee|nka| ho|ina|waa|dan|nim|elo|agu|ihi|naa|mar|ark|saa|riy|rri|qda|uqd| bu|ax |a h|o w|ya |ays|gga|ee |ank| no|n s|oon|u h|n a|ab |haq|iri|o l| gu|uur|lka|laa|u a|ida|int|lad|aam|ood|ofk|dhi|dah|orr|eli| xi|ysa|arc|rci|to |yih|ool|kii|h q|a f| ug|ayn|asa| ge|sho|n x|siy|ido|a g|gel|ami|hoo|i a|jee|n q|agg|al | di| ta|e u|o u| ji|goo|a c|sag|alk|aba|sig| mu|caa|aqo|u q|ooc|oob|bar|ii |ra |a b|ago|xir|aaq| ci|dal|oba|mo |iir|hor|fal|qan| du|dar|ari|uma|d k|ban|y d|qar|ugu| ya|xay|a j","hms":"ang|gd |ngd|ib | na|nan|ex |id | ji|ad |eb |nl |b n|d n| li|ud |jid| le|leb| ga|ot |anl|aot|d g|l l|b l| me|ob |x n|gs |ngs|mex|nd |d d| ne|jan|ul | ni|nja| nj| gu| zh|lib|l n|ong| gh|gao|b j|b g|nb |l g|end|gan| ad| je|jex|ngb|gb |han|el | sh| da|ub |d j|d l|t n| nh|nha|b m|is |d z|x g| ya|oul|l j| wu|she|il |nex| ch|b y|d s|gue|gho|uel|wud|d y| gi|d b|hob|nis|s g| zi| yo|lie|es |nx |it |aob|gia|ies| de|eib|you| ba| hu|ian|zib|d m|s j|oud|b d|chu|ol |ut | do|t j|nen|hud|at |s n|hen|iad|ab |enl| go|dao| mi|t g|zha|b z|enb|x j| ze|eit|hei|d c|nt |b s| se|al | xi|inl|hao| re| fa|d h|gua|yad|ren| ho|anb|gx |ngx|ix |nib|x z|and|b h|b w|fal| xa|d x|t l|x m|don|gou|bao|ant|s z|had|d p|yan|anx|l d|zhe|hib| pu|ox | du|hui|sen|uib|uan|lil|dan|s m| di| we|gha|xin|b x|od |zhi|pud| ju| ng|oub|xan| ge|t z|hub|t h|hol|t m|jil|hea|x l| ma|eud|jul|enx|l z|l s|b a| lo| he|nga|d r|zen| yi|did|hon|zho|gt |heb|ngt|os |d a|s l|aos| si|dei|dud|b b|geu|wei|d w|x c|x b|d k|dou|l h|lou| bi|x a|x d|b c| sa|s a| bo|eut|blo| bl|nia|lol|t w|bad|aod| qi|ax |deb| ja|eab| nd|x s|can|pao| pa|gl |ngl|che|sat|s y|l m|t s|b f|heu|s w| to|lia| ca|aox|unb|ghu|ux | cu|d f|inb|iel| pi|jib|t p|x x|zei|eul|l t|l y|min|dad","hnj":"it | zh| ni|ab |at | sh|ang|nit|os | do|uat|ox |ax |nx |ol |ob | nd|t d|x n|nf |zhi|as | ta|tab|ef |if |d n|ad | mu| cu|uax|cua|mua|b n|uf |ib |s d|dos|id |enx|nb |hit| lo|f n|t l|ngd|gd |us |inf|ux |ed | go|she|b d|b z|t n| ho|x z| yi|aob|l n|ong|t z| zi|ix |nda|d z|ut |yao|uab|enb| de|dol|f g| dr|zhe| yo| le|euf|x d|inx|nen|das| ne|dro|gb |ngb|d s| ge|hox|f z|uef|s n|len|b g| ua|ud |nd |gox| na|il | du|x j|oux|f y|f h|ndo|x c|han|of |zha|uad|s z| da| ny| ja| gu|heu| ji|ik | bu|shi|lob|od | ya|gf |t g|hai|ged|ngf|b h|you| hu|ex |bua|out|nil|hen|rou|yin|zhu|ous|nya|enf|f d|is | re|b c|lol|nad|dou|af | xa| id|t s| ha|uk |jai|xan|sha|b y|hua|aib|s s|d d| la| qi|ren|x l|hue|l m|x g|ot | xi| ba| zo| kh| dl|jua| ju|aod|zif|ait|bao| di| ga|x y| nz|b s|x s|xin| li|aof|b b|ngx|gx |eb |b l|x t|x m|hed| be|dax|b t|s t|hef|las|d j|gua| pi|t y|f b|d l|l d|nzh| ib|hif|t h|dus|t r|hou|f l|hun|und|s l|el |aik|d y|aos|f t| mo| bi|hab|ngt|gai| za|uas|x h|gt | zu|ros|aid|zos| gh|end|pin|k n|k z| ao|iao|s b|dex|x b|due|ak |d g| fu|s x|deu|s y|mol|x i|f s|hik| hl| bo|l b|eut|lb |uaf|zho|d b| lb|s m|lan|al |b k|t b| ch|d p|x x|f x|ub |t c|d m| ro| nt|d h|et |uak|aox|gon|tua|yua|t t|zis|deb|d t| we|shu","ilo":"ti |iti|an |nga|ga | ng| pa| it|en | ka| ke| ma|ana| a | ti|pan|ken|agi|ang|a n|a k|aya|gan|n a|int|lin|ali|n t|a m|dag|git|a a|i p|teg|a p| na|nte|man|awa|kal|da |ng |ega|ada|way|nag|n i| da|na |i k|sa |n k|ysa|n n|no |a i|al |add|aba| me|i a|eys|nna|dda|ngg|mey| sa|pag|ann|ya |gal| ba|mai| tu|gga|kad|i s|yan|ung|nak|tun|wen|aan|nan|aka| ad|enn| ag|asa| we|yaw|i n|wan|nno|ata| ta|l m|i t|ami|a t| si|ong|apa|kas|li |i m|ina| an|aki|ay |n d|ala|gpa|a s|g k|ara|et |n p|at |ili|eng|mak|ika|ama|dad|nai|g i|ipa|in | aw|toy|oy |ao |yon|ag |on |aen|ta |ani|ily|bab|tao|ket|lya|sin|aik| ki|bal|oma|agp|ngi|a d|y n|iwa|o k|kin|naa|uma|daa|o t|gil|bae|i i|g a|mil| am| um|aga|kab|pad|ram|ags|syo|ar |ida|yto|i b|gim|sab|ino|n w| wa| de|a b|nia|dey|n m|o n|min|nom|asi|tan|aar|eg |agt|san|pap|eyt|iam|i e|saa|sal|pam|bag|nat|ak |sap|ed |gsa|lak|t n|ari|i u| gi|o p|nay|kan|t k|sia|aw |g n|day|i l|kit|uka|lan|i d|aib|pak|imo|y a|ias|mon|ma | li|den|i g|to |dum|sta|apu|o i|ubo|ged|lub|agb|pul|bia|i w|ita|asy|mid|umi|abi|akd|kar|kap|kai| ar|gin|kni| id|ban|bas|ad |bon|agk|nib|o m|ibi|ing|ran|kda|din|abs|iba|akn|nnu|t i|isu|o a|aip|as |inn|sar| la|maa|nto|amm|idi|g t|ulo|lal|bsa|waw|kip|w k|ura|d n|y i"},"Cyrillic":{"rus":" пр| и |рав|ств| на|пра|го |ени|ове|во | ка|ани|ть | в | по| об|ия |сво| св|лов|на | че|ело|о н| со|ост|чел|ие |ого|ет |ния|ест|аво|ый |ажд| им|ние|век| не|льн|ли |ова|име|ать|при|т п|и п|каж|или|обо| ра|ых |жды| до|дый|воб|ек |бод|ва |й ч|его|ся |и с|ии |аци|еет|но |мее|и и|лен|ой |тва|ных|то | ил|к и|енн| бы|ию | за|ми |тво|и н|о п|ван|о с|сто|аль| вс|ом |о в|ьно|их |ног|и в|нов|ако|про|ий |сти|и о|пол|олж|дол|ое |бра|я в| ос|ным|жен|раз|ти |нос|я и| во|тор|все| ег|ей |тел|не |и р|ред|ель|тве|оди| ко|общ|о и| де|има|а и|чес|ним|сно|как| ли|щес|вле|ься|нны|аст|тьс|нно|осу|е д| от|пре|шен|а с|бще|осн|одн|быт|сов|ыть|лжн|ран|нию|иче|ак |ым |ват|что|сту|чен|е в| ст|рес|оль| ни|ном|род|ля |нар|вен|ду |оже|ны |е и| то|вер|а о|зов|м и|нац|ден|рин|туп|ежд|стр| чт|я п|она|дос|х и|й и|тоя|есп|лич|бес|обр|ото|о б|ьны|ь в|нии|е м|ую | мо|ем | ме|аро| ре|ава|кот|ав | вы|ам |жно|ста|ая |под|и к|ное| к | та| го|гос|суд|еоб|я н|ен |и д|мож|еск|ели|авн|ве |ече|уще|печ|дно|о д|ход|ка | дл|для|ово|ате|льс|ю и|в к|нен|ции|ной|уда|вов| бе|оро|нст|ами|циа|кон|сем|е о|вно| эт|азо|х п|ни |жде|м п|ког|от |дст|вны|сть|ые |о о|пос|сре|тра|ейс|так|и б|дов|му |я к|нал|дру| др|кой|тер|ь п|арс|изн|соц|еди|олн","ukr":"на | пр| і |пра|рав| на|ня |ння| за|ого| по|ти |го |люд| лю|во | ко| ма|льн|юди|их |о н| не|аво|анн|дин| св|сво|ожн|кож|енн|пов|жна| до|ати|ина|ає |а л| бу|аці|не |ува|обо| ос| як|має| ви|них|аль|або|є п| та|ні |ть |ови|бо | ві| аб|ере|і п|а м|вин|без|при|іль|ног|о п|ми |та |ом |ою |бод|ста|воб| бе|до |ва |ті | об|о в|ост| в | що|ий |ся |і с| сп|инн|від|ств|и п|ван|нов|нан|кон| у |ват|она|ії |но |дно|ій |езп|пер| де|ути|ьно|ист|під|сті|бут| мо|и і|ідн|ако|нні|ід |тис|що |род|і в|а з|ава| пе|му |і н|а п|соб|ої |а в|спр|ів |ний|яко|ду |вно|і д|ну |аро|и с| ін|ля |рів|у в| рі|и д|нар|нен|ова|ому|лен|нац|ним|ися|чи |ав |і р|ном| ро|нос|ві |вни|овн| її|ові|мож|віл|у п| пі| су|її |одн| вс|ово|ють|іст|сть|і з| ст|буд| ра|чен|про|роз|івн|оду|а о|ьни|ни |о с|сно|зна|рац|им |о д|ими|я і|ції|х п|дер|чин| со|а с|ерж|и з|и в|е п|ди |заб|осо|у с|е б|сі |тер|ніх|я н|і б|кла|спі|в і| ні|о з|ржа|сту|їх |а н|нна|так|я п|зпе| од|абе|для|ту |і м|печ| дл|же |ки |віт|ніс|гал|ага|е м|ами|зах|рим|ї о|тан|ког|рес|удь| ре|то |ков|тор|ара|сві|тва|а б|оже|соц|оці|ціа|осн|роб|дь‐|ь‐я|‐як|і і|заг|ахи|хис|піл|цій|х в|лив|осв|іал|руч|ь п|інш|в я|ги |аги| ді|ком|ини|а і|оди|нал|тво|кої|всі|я в|ною|об |о у|о о|і о","bos":" пр| и |рав| на|пра|на |да |ма |има| св|а с|а п| да|а и| по|је |во |ко |ва | у |ако|но |о и|е с| за| им|аво|ти |ава|сва|и п|ли |о н|или|и с|их |вак| ко|ост|а у| сл|не |вањ| др|ње | не|кој|ња | би|ије|и д|им |ств|у с|јед|бод|сло|лоб|обо| ил|при| је|ање| ра|а д| об| су|е и|вје|се |ом |и и|сти| се|ју |дру|а б| ос|циј|вој|е п|а н|раз|су |у п|ања|о д|ује|а о|у и| од|и у|ло |ова|дје|жав|оје|а к|ни |ово|едн|ити|аци|у о|о п|нос|и о|бра| ка|шти|а ј|них|е о|пре|про|ржа| бу|буд|тре| тр|ог |држ|бит|е д|у з|ја |ста|авн|ија|е б|миј|и н|реб|сво|ђи |а з|ве |бил|ред|род|аро|ило|ива|ту |пос| ње| из|е у|ају|ба |ка |ем |ени|де |јер|у д|одн|њег|ду |гов|вим|јел|тва|за | до|еђу|ним| са|нар|а т| ни|о к|оји|м и| см| ст|еба|ода|ран|у н|дна|ичн|уђи|ист|вно|алн|и м| дј|нак|нац|сно|нст|тив|ани|ено|е к|е н|аве|ан |чно|и б|ном|сту|нов|ови|чов|нап|ног|м с|ој |ну |а р|еди|овј|оја|сми|осн|анс|ара|дно|х п|под|сам|обр|о о|руг|тво|ји | мо|его|тит|ашт|заш| кр|тељ|ико|уна|ник|рад|оду|туп|жив| ми|јек|кри| ов| вј| чо|ву |г п| оп|међ|њу |рив|нич|ина|одр|е т|уду| те|мје|ење|сви|а ч|у у|ниц|дни| та|и т|тно|ите|и в|дст|акв|те |ао | вр|ра |вољ|рим|ак |иту|ави|кла|вни|амо| он|ада|ере|ена|сто|кон|ст |она|иво|оби|оба|едс|как|љу ","srp":" пр| и |рав|пра| на|на | по|ма | св|да |има|а п|а и|во |ко |ва |ти |и п| у |ако| да|а с|аво|и с|ост| за|о и|сва| им|вак|ава|је |е с| сл| ко|о н|ња |но |не | не|ом |ли | др|или|у с|сло|обо|кој|их |лоб|бод|им |а н|ју | ил|ств| би|сти|а о|при|а у| ра|јед|ог | је|е п|ње |ни |у п|а д|едн|ити|а к|нос|и у|о д|про| су|ање|ова|е и|вањ|и и|циј| ос|се |дру|ста|ају|ања|и о| об|род|ове| ка| де|е о|аци|ја |ово| ни| од|и д| се|ве |ује|ени|ија|авн|жав| ст|у и|м и|дна|су |ред|и н|оја|е б|ара|што|нов|ржа|вој|држ|тва|оди|у о|а б|одн|пош|ошт|ним|а ј|ка |ран|у у| ов|аро|е д|сно|ења|у з|раз| из|осн|а з|о п|аве|пре|де |бит|них|шти|ву |у д|ду |ту | тр|нар| са|гов|за |без|оји|у н|вно|ичн|еђу|ло |ан |чно|ји |нак|ода| ме|вим|то |сво|ани|нац| ње|ник|њег|тит|ој |ме |ном|м с|е у|о к|ку | до|ика|ико|е к|пос|ашт|тре|алн|ног| вр|реб|нст| кр|сту|дно|ем |вар|е н|рив|туп|жив|те |чов|ст |ови|дни|ао |сме|бра|ави| ли|као|вољ|ило|о с|штв|и м|заш|њу |руг|тав|анс|ено|пор|кри|и б|оду|а р|ла | чо|а т|руш|ушт| бу|буд|ављ|уги|м п|ком|оје|вер| ве|под|и в|међ|его|вре|акв|еди|тво| см|од |дел|ена|рад|ба | мо|ну |о ј|дст|кла| оп|как|сам|ере|рим|вич|ива|о о| он|вни|тер|збе|х п|ниц|еба|е р|у в|ист|век|рем|сви|бил|ште|езб|јућ|њен|гла","uzn":"лар|ан |га |ар | ва| би|да |ва |ир | ҳу|ига|уқу|бир|ҳуқ|қуқ|ган| ҳа|ини|нг |р б|иш | та|ни |инг|лик|а э|ида|или|лиш|нин|ари|иши| ин|ади|он |инс|нсо|сон|ий |лан|дир| ма|кин|и б|ши |ҳар| бў|бўл| му|дан|уқи|ила|қла|р и|қиг|эга| эг| ўз|ки |эрк|қил|а б|оли|кла| эр|гад|лга|нли| ол|рки|и ҳ| ёк|ёки| қа|иб |иги|лиг|н б|н м| қи| ба|ара|атл|ри | бо|лат|бил|ин |ҳам|а т|лаш|р ҳ|ала| эт|инл|ик |бош|ниш|ш ҳ|мас|и в|эти|тил|тла|а ҳ|и м|а қ|уқл|қар|ани|арн|рни|им |ат |оси|ўли|ги | да|а и|н ҳ|риш|и т|мла|ли | ха|а м|ият| бу|рла|а а|рча|бар|аси|ўз |арч|ати|лин|ча |либ|мум| ас|аро|а о|ун |таъ| бе| ту|икл|р в|тга|тиб| ке|н э|ш в|мда|амд|али|н қ|мат|шга| те|сид|лла|иро| шу| қо|дам|а ш|ирл|илл|хал|рга| де|ири|тиш|умк|ола|амл|мки|тен|гин|ур |а ў|рак|а ё|имо| эъ|алқ| са|енг|тар|рда|ода| ша|шқа|ўлг|кат|сий|ак |н о|зар|и қ|ор | ми|нда|н в| си|аза|ера|а к|тни|р т|мил| ки|к б|ана|ам |ошқ|рин|сос|ас | со|сиз|асо|нид|асл|н ў|н т|илг|бу |й т|ти |син|дав|шла|на |лим|қон|и а|лак|эма|муҳ|ъти|си |бор|аш |и э|ака|нга|а в|дек|уни|екл|ино|ами| жа|риг|а д| эм|вла|лма|кер| то|лли|авл| ка|ят |н и|аъл|чун|анл|учу| уч|и с|аёт| иш|а у|тда|мия|а с|ра |ўзи|оий|ай |диг|эът|сла|ага|ник|р д|ция| ни|и ў|ада|рор|лад|сит|кда|икд|ким","azj":" вә|вә |әр |лар| һә|ин |ир | ол| һү| би|һүг|үгу|гуг|на |ләр|дә |һәр| шә|бир|ан | тә|лик|р б|мал|лма|асы|ини|р һ|шәх|ән |әхс|ары|гла|дир|а м|али|угу|аг | ма|ын |илә|уна|јәт| ја|икд|ара|ар |әри|әси|рин|әти|р ш|нин|дән|јјә|н һ| аз|ни |әрә| мә|зад|мәк|ијј| мү|син|тин|үн |олу|и в|ндә|гун|рын|аза|нда|ә а|әт |ыны|нын|лыг|илм| га| ет|ә ј|кди|әк |лә |лмә|олм|ына|инд|лун| ин|мас|хс |сын|ә б|г в|н м|адл|ја |тмә|н т|әми|нә |длы|да | бә|нун|бәр|сы | он|әја|ә һ|маг|дан|ун |етм|инә|н а|рлә|си | ва|ә в|раг|н б|ә м|ама|ры |н и|әра|нма|ынд|инс| өз|аны|ала| ал|ик |ә д|ләт|ирл|ил | ди|бил|ығы|ли |а б|әлә|дил|ә е|унм|алы|мүд| сә|ны |ә и|н в|ыг |нла|үда|аси|или| дә|нса|сан|угл|уг |әтл|ә о|хси| һе|ола|кил|ејн|тәр|јин| бу|ми |мәс|дыр|һәм| да|мин|иш | һа| ки|у в|лан|әни| ас|хал|бу |лығ|р в| ед|јан|рә |һеч|алг| та|еч |и с|ы һ|сиа|оси|сос|фиә|г һ|афи|ким|даф| әс|ә г| иш|н ә|ији|ыгл|әмә|ы о|әдә|әса| со|а г|лыд|илл|мил|а һ|ыды|сас|лы |ист| ис|ифа|мәз|ыр |јар|тлә|лиј|түн|ина|ә т|сиј|ал |рил| бү|иә |бүт| үч|үтү|өз |ону| ми|ија| нә|адә|ман|үчү|чүн|сеч|ылы|т в| се|иал|дах|сил|еди|н е|әји|ахи|хил| ҹә|миј|мән|р а|әз |а в|илд|и һ|тәһ|әһс|ы в|һси|вар|шәр|абә|гу |раб|аја|з һ|амә|там|ғын|ад |уғу|н д|мәһ|тәм| ни|и т| ха","koi":"ны |ӧн | бы|да | пр|пра|рав| мо|лӧн| да|быд|лӧ |орт|мор|ӧм |аво|ӧй | ве|ыд | не|нӧй|ыс |ын |сӧ |тӧм|сь |во |эз |льн|ьнӧ|тны|д м| ас|ыны|м п| по|сьӧ| и |то |бы | ӧт| эм| кы|аль|тлӧ|н э| от|вер|эм | кӧ|ртл|ӧ в| ко|воэ|ств|ерм|тшӧ| до|ола|ылӧ|вол|ас |ӧдн|кыт|ісь|ето|нет|тво|ліс|кӧр|ӧс | се|ы с|шӧм|а с|та |злӧ| ме| ол|аци|ӧ к|ӧ д|мед| вы|вны|а в|на |з в| на|ӧ б|лас|ӧрт| во| вӧ| сі|лан|рмӧ|дбы|едб|ыдӧ|оз |ась| оз| сы|ытш|олӧ|оэз|тир|с о| чу|ы а|оти|ция|ись|ӧтл| эт|рты| го|ы п|ы б|кол|тыс|сет| сь|рті|кӧт|о с|н б|дз |н н| мы| ке|кер|тӧн|тӧг|ӧтн|ис |а д|мӧ |ост|ӧ м| со|онд|нац|дӧс|итӧ|ест|выл| ви|сис|эта| уд|суд|нӧ |удж|ӧг |пон|ы н|н п|мӧд|а п|орй|ӧны|ӧмӧ|н м|ть |сыл|ана|ті |нда|рны|сси|рре|укӧ|з к|чук|йын|рез| эз|ысл|ӧр |ьӧр|с с|с д|рт |с в|езл|кин|осу|эзл|й о|отс| тӧ|ы д| ло| об|овн|лӧт|асс|кӧд|с м|ӧ о|нал|быт|она|ӧт |слӧ|скӧ|кон|тӧд|ытӧ|дны|а м|ы м|нек|ы к|ӧ н|асл|дор|ӧ п| де| за|а о| ов|сть|тра| дз|ь к|ӧтч|н к| ст|аса|етӧ|ьны|мӧл|умӧ|сьн| ум|ерн|код| пы|тла|оль|иал|а к|н о| сэ|а н|ь м|кыд|циа|са | ли|а б|езӧ|й д| чт|ськ|эсӧ|ион|еск|ӧ с|оци|что|ан |соц|йӧ |мӧс|тко|зын|нӧя|вес|енн| мӧ|ӧтк|ӧсь|тӧ |рлӧ|ӧя |оля|рйӧ|ӧмы|гос|тсӧ|зак|рст|з д|дек|ннё|уда|пыр|еки|ако|озь| а |исӧ|поз|дар|арс|ы ч","bel":" і | пр|пра|ава| на|на | па|рав|ны |ць |або| аб|ва |ацы|аве|ае | ча|ння|анн|льн| ма| св|сва|ала|не |чал|лав|ня |ай |ых | як|га |век|е п| ад|а н| не|пры|ага| ко|а п| за|кож|ожн|ы ч|бод|дна|жны|ваб|цца|ца | ў |а а|ек |мае|і п|нне|ных|асц|а с|пав|бо |ам |ста| са| вы|ван|ьна| да|ара|дзе|одн|го |наг|він|аць|оўн|цыя|мі |то | ра|і а|тва| ас|ств|лен|аві|ад |і с|енн|і н|аль|най|аво|рац|аро|ці |сці|пад|ама| бы| яг|яго|к м|іх |рым|ым |энн|што|і і|род| та|нан| дз|ні |я а|гэт|нас|ана| гэ|інн|а б|ыць|да |ыі |оў |чын| шт|а ў|цыі|які|дзя|а і|агу|я п|ным|нац| у | ўс|ыя |ьны|оль|нар|ўна|х п|і д|ў і| гр|амі|ымі|ах | ус|адз| ні|эта|ля |воў|ыма|рад|ы п|зна|чэн|нен|аба| ка|ўле|іна|быц|ход| ін|о п| ст|ера|уль|аў |асн|сам|рам|ры | су|нал|ду |ь с|чы |кла|аны|жна|і р|пер|і з|ь у|маю|ако|ыцц|яко|для|ую |гра|ука|е і|нае|адс|і ў|кац|ўны|а з| дл|яўл|а р|аюч|ючы|оду| пе| ро|ы і|вы |і м|аса|е м|аду|х н|ода|адн|нні|кі | шл|але|раз|ада|х і|авя|нав|алі|раб|ы ў|нна|мад|роў|кан|зе |дст|жыц|ані|нст|зяр|ржа|зак|дзі|люб|аюц|бар|ім |ены|бес|тан|м п|дук|е а|гул|я ў| дэ|ве |жав|ацц|ахо|заб|а в|авы|ган|о н|ваг|я і|чна|я я|сац|так|од |ярж|соб|м н|се |чац|ніч|ыял|яль|цця|ь п|о с|вол|дэк| бе|ну |ога| рэ|рас|буд|а т|асо|сно|ейн","bul":" на|на | пр|то | и |рав|да |пра| да|а с|ств|ва |та |а п|ите|но |во |ени|а н|е н| за|о и|ото|ван|не | вс|те |ки | не|о н|ове| по|а и|ава|чов|ни |ане|ия | чо|аво|ие | св|е п|а д| об|век|ест|сво| им|има|ост|и д|и ч|ани|или|все|ли |тво|и с|ние|вот|а в|ват|ма | ра|и п|и н| в |ек |сек|еки|а о| ил|е и|при| се|ова|ето|ата|воб|обо|бод|аци|ат |пре|оди|к и| бъ| съ|раз| ос|ред| ка|а б|о д|се | ко|бъд|лно|ния|о п| от|ъде|о в|за |ята| е | тр|и и|о с|тел|и в|нит|е с|ран| де|от |общ|де |ка |бра|ен |ява|ция|про|алн|и о|ият|ст |нов| до|его|как|ато| из|нег|а т|ден|а к|щес|а р|тря|а ч|ряб|о о|вен|ябв|бва|дър|гов|нац|ено|тве|ърж|е д|нос|ржа|а з|вит|зи |акв|лен| та|ежд|и з|род|е о|обр|нот| ни| с |т с|нар|о т|она|ез |йст|кат|иче| бе|жав|е т|е в|тва|зак|аро|кой|осн| ли|ува|авн|ейс|сно|рес|пол|нен|вни|без|ри |стр| ст|сто|под|чки|вид|ган|си |ди |и к|нст| те|а е|вси|еоб| дъ|сич|ичк|едв|жен|ник|ода|т н|о р|ака|ели|одн|елн|лич| че|чес|бще| ре|и м| ср|сре|и р|са |лни| си|дви|ичн|жда| къ|оет|ира|я н|дей| ме|еди|дру|ход|еме|кри|че |дос|ста|гра| то|ой |тъп|въз|ико|и у|нет| со|ави|той|елс|меж|чит|ита|що |ъм |азо|зов|нич|нал|дно| мо|ине|а у|тно|таз|кон|лит|ан |клю|люч|пос|тви|а м|й н|т и|изв|рез|ази|ра |оят|нео|чре","kaz":"ен |не | құ|тар|ұқы| ба| қа|ға |ада|дам|құқ|ық | бо| ад|ықт|қта|ына|ар | жә|ың |ылы|әне|жән| не|мен|лық|на |р а|де | жа|ін |а қ|ары|ан | әр|қыл|ара|ала| ме|н қ|еме|уға|ның| де|асы|ам |іне|тан|лы |нды|да |әр |ығы|ста|еке| өз|ын |ған|анд|мес| бі| қо|ды |ің |бас|бол|етт|ып |н б|ілі|қық|нде|ері|е қ|алы|нем|се |бір|лар|есе|ы б|тын|а ж| ке|тиі|ост|ге |бар| ти|е б| ар|дық|сы |інд|е а|аты| та| бе|ы т|ік |олы|нда|ғын|ры |иіс|ғы | те|бос|луы|алу|сын|рын|еті|іс |рде|қығ|е ж|рін|дар|іні|н ж|тті|қар|н к|ім | ер|егі|ыры|ыны| са|рға|ген|ынд|аны|уын|ы м|лға|ана|нің|тер|уы |ей |тік|ке |сқа|қа |мыс|тық|м б|ард| от|е н|е т|мны|өзі|нан|гіз|еге| на|ы ә|аза|ң қ|лан|нег|асқ|кін|амн|кет|рал|айд|луғ|аса|ті |рды|і б|а б|ру | же|р м|ді |тта|мет|лік|тыр|ама|жас|н н|лып| мү|дай|өз |ігі| ал|ауд|дей|зін|бер|р б|уда|кел|біл|і т|қор|тең|лге| жү|ден|ы а|елі|дер|ы ж|а т|рқы|рлы|арқ| тү|қам|еле|а о|е ө|тін|ір |ең |уге|е м|лде|ау |ауы|ркі|н а|ы е|оны|н т|рыл|түр|ция|гін| то| ха|жағ|оға|осы|зде| ос|ікт|кті|а д|ұлт|лтт|тты|лім|ғда| ау| да|хал|тте|лма| ұл|амд|құр|ірі|қат|тал|орғ|зі |елг|сіз|ағы| ел|ң б|ыс | ас|імд|оты| әл|н е|ағд|қты|шін|ерк|е д|ек |ені|кім|ылм|шіл|аға|сты|лер|гі |атт|кен| кө|ым‐| кұ|кұқ|ра |рік|н ә| еш"},"Arabic":{"arb":" ال|ية | في|الح|في | وا|وال| أو|ة ا|أو |الم|الت|لحق|حق |لى |كل |ان |ة و|الأ| لك|لكل|ن ا|ها |ق ف|ات |مة |ون |أن |ما |اء |ته |و ا|الع|ي ا|شخص|ي أ| أن|الإ|م ا|حري| عل|ة ل|من |الا|حقو|على|قوق|ت ا|أي |رد | شخ| لل| أي|ق ا|لا |فرد|رية| ول| من|د ا| كا| إل|خص |وق |ا ا|ة أ|ا ي|ل ف|ه ا|نسا|جتم|ن ي|امة|كان|دة | حق|ام |الق|ة م| فر|اية|سان|ل ش|ين |ن ت|إنس|ا ل| لا|ذا |هذا|ن أ|لة |ي ح| دو|ه ل|لك |ترا|لتع|اً |له |إلى| عن|ى ا|ه و|ع ا|ماع|د أ|اسي| حر|ة ع|مع |الد|نون| با|لحر|لعا|ن و|، و|يات|ي ت|الج| هذ|ير |بال|دول|لإن|عية|الف|ص ا| وي|الو|لأس| إن|أسا|ساس|ماي|حما|رام|سية|انو|مل |ي و|عام|ا و|تما| مت|ة ت|علي|ع ب|ك ا| له|ة ف|قان|ى أ|ول |هم |الب|ة ب|ساو|لقا|الر|لجم|ا ك|تمت|ليه|لتم|لمت|انت| قد|اد |ه أ| يج|ريا|ق و|ل ا|ا ب|ال |يه |اعي|لدو|ل و|لإع|لمي|لمج|لأم|تع |دم |تسا|عمل|اته|لاد|رة |اة |غير|قدم|وز |جوز|يجو|عال|لان|متع|مان|فيه|اجت|م و|يد |تعل|ن ل|ر ا| يع| كل|مم |مجت|تمع|دون| مع|تمي|ذلك|كرا|يها| مس|ميع|إعل|علا| تم| عا|ملا|اعا|لاج|ني |ليم|متس|ييز|يم |اعت|الش| تع|ميي|عن |تنا| بح|لما|ي ي|يز |ود |أمم|لات|أسر|شتر|تي | جم|ه ع|ر و|ي إ|تحد|حدة| أس|عة |ي م|ة، |معي|ن م|لمس|م ب|اق |جمي|لي |مية|الض|الس|لضم|ضما|لفر| وس|لحم|امل|ق م|را |ا ح|نت | تن|يته| أم|إلي|واج|د و|لتي| مر|مرا|متح| ذل| وأ| تح|ا ف| به| وم| بم|وية|ولي|لزو","urd":"ور | او|اور|کے | کے| کی|یں | کا|کی | حق|ے ک|کا | کو|یا |نے |سے | اس|ئے |کو |میں| ہے| می|ے ا| کر| ان|وں | ہو|اس |ر ا|شخص|ی ا| شخ| سے| جا|حق |خص |ہر |ام |ے م|ں ک|ہیں| یا|سی | آز|آزا|زاد|ادی|ائے|ا ح|ص ک|ہ ا|ہے |جائ|ت ک|ر ش|کہ |م ک| پر|ی ک|پر |ان |ا ج|۔ہر|س ک|دی |ہے۔|ق ہ|ی ح|ں ا|و ا|ر م|ار |حقو|قوق|ن ک|ری |کسی|ے گ|ی ج| مع| ہی|وق |سان|نی |ر ک|کرن|ی ت| حا| جو|تی |ئی | نہ| کہ|ل ک|اپن|جو |نسا|انس|ہ ک|ے ب|نہ |ہو | مل| اپ|یت |می |ے ہ|رنے|ے ل|ل ہ|ا ا| کس|رے |ی ش| ای|وہ |۔ ا|اصل|نہی|صل |ی م|یں۔|حاص|معا|د ک|انہ|ایس|ی ب|ی ہ|ملک|ق ک|ات | تع|دہ |قوم| قو|ے، |ر ہ|ا م|یہ | دو| من| بن| گا|اشر|کیا|ں م|عاش|وام| عا|اد |قوا|ی س|بر |اقو|انی| جس| لئ|لئے|دار|ر ب|ائی| وہ|ے۔ہ|مل |ے ج|علا|یوں| یہ|ے ح|ہ م|و ت|جس |ا ہ|کر |ر ن|لیم|انو| قا| و |ے۔ | اق|یم |ریق|لک |گی |ی آ|دوس| گی|وئی|ر پ|، ا|نیا|تعل| مس|ر ع|ی، |یر |لاق|خلا| رک|ین | با|ن ا|ی ن|ے پ|پنے|وری|ا س| سک| دی|ون |گا۔|م ا|انے|علی|یاد|قان|نون|س م|اف |رکھ| اع| پو| شا|وسر|ق ح|سب | بر|رتی| بی|اری| بھ|رائ| مم|ر س|یسے|ومی|دگی|ندگ| مر| پی| چا|و گ|نا |ے خ|ہ و|ادا| ہر|ا پ|تما|پور|مام|ے ع|ائد| عل|بھی|ھی |عام| مت| مق|من |د ا| ام|ونک| خل|نکہ|لاف|اعل|کوئ|اں |ریع|ذری| ذر|بنی| لی|و ک|دان|ں، |ے ی|ا ک| مح|، م|ت ا|ال |پنی|ے س|ر آ|ر ح|دیو|غیر| طر|ہوں|ی پ|ِ م|کرے| سا|اسے|رہ |برا","fas":" و | حق| با|که |ند | که| در|در |رد | دا|دار|از | از|هر | هر|یت |ر ک|حق |د ه|ای |د و|ان | را|ین |ود |یا | یا|را |ارد|ی و|کس | کس| بر| آز|باش|ه ب|آزا|د ک| خو|ه ا|د ب|زاد| اس|ار | آن|ق د|شد |حقو|قوق|ی ب|وق |ده |ه د|ید |ی ک|و ا|ور |ر م|رای|اشد|خود|ادی|تما|ری | اج|ام |دی |اید|س ح|است|ر ا|و م| ان|د ا|نه | بی|با | هم| نم|مای| تا|د، |ی ا|انه|ات |ون |ایت|ا ب|ست | کن|برا|انو| بش| مو|این| مر|اسا| مل|وان|ر ب|جتم| شو| اع|ن ا|ورد| می| ای|آن | به|و آ|ملل|ا م|ماع|نی |ت ا|، ا|ت و|ئی |عی |ائی|اجت|و ب|های|ن م|ی ی|بشر|کند|شود| من| زن|ن و|ی، |بای|ی ر| مس|مل |مور|ز آ|توا|دان|اری|علا|گرد|یگر|کار| گر| بد|ن ب|ت ب|ت م|ی م| مق|د آ|شور|یه |اعی| عم|ر خ|ن ح| کش|رند|مین| اح|ن ت|ی د| مت|ه م|د ش| حم|و د|دیگ|لام|کشو|هٔ |ه و|انی|لی |ت ک| مج|ق م|میت| کا| شد|اه |نون| آم|اد |ادا|اعل|د م|ق و|ا ک|می |ی ح|لل |نجا| مح|ساس|یده| قا|بعی|قان|ر ش|مقا|ا د|هد |وی |نوا|گی |ساو|ر ت|بر |اً |نمی|اسی|اده|او | او| دی| هی|هیچ|ه‌ا|‌ها|یر |خوا|د ت|همه|ا ه|تی |حما|دگی|بین|ع ا|سان|ر و|شده|ومی| عق| بع|ز ح|شر |مند| شر|ٔمی|أم|تأ|انت|اند|اوی|مسا|ردد|بهر| بم|ارن|یتو|ل م|ران|و ه|ر د|م م|رار|عقی|سی |و ت|زش | بو|ا ا|ی ن|موم|جا |عمو|رفت|عیت| فر|ندگ|واه|زند|م و|نما|ه ح|ا ر|دیه|جام|مرد|ت، |د ر|مام| تم|ملی|نند|الم|طور|ی ت|تخا|ا ت|امی|امل|دد | شخ|شخص","zlm":" دا|ان |دان| بر| او|ن س| ڤر|له |كن |ن ك|ن ا|دال|ن د|رڠ |يڠ |حق | يڠ|ارا| كڤ|أن |تيا|ڤد |ورڠ|ڠن |ياڤ| تر|اله|ولي|ن ڤ|اور|كڤد|برح|رحق|ين |اڤ |را | ات|ليه|ستي|ه ب|يه |اتا| ست| عد|عدا|ن ب|تاو|ن ت|يبس|ڤ ا|او |بيب|سي | كب|ه د|ن م| سو| من| حق| سا|لم |ق ك|اسا|الم|ن ي| تي| اي|سام|رن |ن، | ما|اتو|باڬ|بسن|سن |نڬا|ڬار|اين| مم|د س| با|كبي|ي د|ڠ ع|چار| سب|ڽ س|اڬي|د ڤ|ندق|سبا|اڽ | د | ڤم|نسي|قله|يند|ڬي |ام |تن |وان|تا |اون|ي ا| نڬ|هن | بو|ا ڤ|أنس|بول| كس| سم| سچ|ڠ ب|سچا|مأن|ا ب|ا س|بڠس| ڤڠ|دڠن|سيا|اسي|ساس| مأ| دڠ| اس|بار|هند|مان|ارڠ|رتا|دقل|تي |ت د| هن|ڤرل|نڽ |ات |ادي|ق م|، ك|تره|رها|هاد| ڤو|ادڤ| لا|ي م|ڤا |يكن|اول|ڤون|، د|ون |ڠسا|٢ د|اي |ق٢ |تو |وق |دڤ |يأن|وين|ن ه|ن٢ |ا د|وڠن|نتو|اكن|وا |ندو|وات|ه م|ي س|ڠ٢ | مڠ| ان|حق٢|يك |اد |مڤو|رات|اس |مرا|برس|ائن| مل| سس|ماس| كو|ري | بي|سوا|ڠ ت|ا، |، ت|ياد|امر|سمو|ڠ م|ڤرا|لوا|ڤري|دوڠ|ي ك|ل د|تار|ريك|تيك|ارك|ونت|لين| سر|رلي|سرت|وند|واس|رسا|ڤمب|ترم|، س|اڬا|يري|رأن| در|ا ا|دير| بڠ|ي ڤ|لائ|سوس|ڠ س|توق|سأن|ورو|جوا|هار|اڤا|وكن| ڤن|٢ ب|موا| كم|ارأ|نن |ندڠ|ا٢ | كأ|دڠ٢|و ك|كرج|وه |ا م|ڤرك|تها|اجر|جرن|ي، |شته| سڤ| به|ندي|ق ا|ڠڬو|بها|ڤ٢ | مر|سات|راس|بوا|ه ا|ا ك|د ك| ڤل|ن ح|لاج|هڽ |ڠ ا|مبي|ينڠ|بس | اڤ|ملا|كور|وار|م ڤ|سسي|نتي|تيڠ| دل|سال|وبو|منو|ڤول|مول|ڠ د|نتا|انت|ال ","skr":"تے |اں | تے|دے |دی |وں | دا| حق| کو|ے ا|کوں| دے|دا | دی|یاں| کی|ے ۔|یں |ہر | ۔ |کیت|ہے | وچ| ہے|وچ | ان| شخ|شخص|ادی|ال | حا|اصل|حق |حاص|ے م|خص |صل |ں د| نا|یا | ای|اتے|ق ح|ل ہ|ے و|ں ک| ات|ہیں|سی | مل|نال|زاد|ازا|ی ت| از|قوق|ار |ا ح|حقو| او|ص ک| ۔ہ|۔ہر|ر ش|دیا|ے ج|وق |ندے| کر|یند| یا|نہ | جو|کہی|ئے |ی د|سان|نسا|وند|ی ا|یتے|انس|ا ا|ملک|ے ح|و ڄ|ے ک|ڻ د| وی|یسی|ے ب|ا و| ہو|ں ا|ئی |ندی|تی |آپڻ|وڻ |ر ک|ن ۔| نہ|انہ|جو | کن| آپ| جی|اون|ویس|ی ن| تھ| کہ|ان |ری |ڻے | ڄئ| ہر|ے ن|دہ |ام |ں م|ے ہ|تھی|ں و|۔ ا|ں ت|ی ۔|کنو|ی ح|ی ک|نوں|رے |ہاں| بچ|ون |ے ت|کو | من|ی ہ|اری|ور |نہا|ہکو|یتا|نی |یاد|ت د|ن د| ون|وام|ی م|قوا|تا |ڄئے|پڻے| ہک|می | قو|ق ت|ے د|لے |اف |ل ک|ل ت| تع|چ ا|ین |خلا|اے |علا| سا|جیا|ئو |کرڻ|ی و|انی|ہو |دار| و |ی ج| اق|ن ا|یت |ارے|ے س|لک |ق د|ہوو| ڋو|ر ت| اے|ے خ| چا| خل|لاف|قنو|نون|پور|ڻ ک| پو|ایہ|بچئ|چئو|ات |الا|ونڄ|وری|این| وس| لو|و ا|ہ د| رک|یب |سیب|وسی|یر |ا ک|قوم|ریا|ں آ| جا|رکھ|مل |کاں|رڻ |اد |او |عزت| قن|ب د|وئی|ے ع| عز| ۔ک| مع|اقو|ایں|م م|زت |ڻی |یوڻ|ر ہ| سم|ں س|لوک| جھ| سی|جھی|ت ت|ل ا|اوڻ|کوئ|ں ج|ہی |حدہ|تعل|ے ذ|وے |تحد|متح|لا |ا ت|کار| اع|ے ر| مت|ر ا|ا م|ھین|ھیو|یہو| مط| سڱ|ی س|ڄے |نڄے|سڱد|لیم|علی|ے ق| ذر|م ت| کھ|ن ک| کم|ہ ا|سار|ائد|ائی|د ا| ہن|ہن |ی، |و ک|ں ب|ھیا|ذری|ں پ|لی "},"Devanagari":{"hin":"के |प्र|और | और| के|ों | का|कार| प्|का | को|या |ं क|ति |ार |को | है|िका|ने |है |्रत|धिक| अध|अधि|की |ा क| कि| की| सम|ें |व्य|्ति|क्त|से | व्|ा अ|्यक|में|मान|ि क| स्| मे|सी |न्त| हो|े क|ता |यक्|क्ष|ै ।|िक |त्य| कर|्य | या|भी | वि|रत्|र स|ी स| जा|स्व|रों|्ये|ेक |येक|त्र|िया|ा ज|क व|र ह|ित |्रा|किस| अन|ा स|िसी|ा ह|ना | से| पर|र क| सा|देश|गा | । | अप|्त्|े स|समा|ान |ी क|्त |वार| ।प|ा प| रा|षा |न क|।प्|ष्ट|था |अन्| मा|्षा|्वा|ारो|तन्|वतन|ट्र|्वत|प्त|ाप्|्ट्|राष|ाष्| इस|े अ| उस| सं|राप|कि |त ह|हो |ं औ|ार्|ा ।|किय|े प| दे| भी|करन|री |जाए|ी प| न |र अ|क स|अपन|े व|ाओं|्तर|ओं | नि|सभी|रा | तथ|तथा|िवा|यों|पर | ऐस|रता|ारा|्री|सम्| द्|ीय |िए |व क|सके|द्व|होग| सभ|ं म|माज|रने|िक्|्या|ा व|र प| जि|ो स|र उ|रक्|े म|पूर| लि|ाएग| भा|इस |त क|ाव |स्थ|पने|ा औ|द्ध|श्य|र्व| घो|घोष|रूप|भाव|ाने|कृत|ो प|े ल|लिए|शिक|ूर्| उन|। इ|ं स|य क|्ध |दी |ी र|र्य|णा |एगा|न्य|रीय|ेश |रति|े ब| रू|ूप |परा|्र |तर्| पा| सु|जिस|तिक|सार|जो |ेशो| शि|ानव|ी अ|चित|े औ| पू|ियो|ा उ|म क|ी भ|शों| बु|म्म|स्त|िश्|्रो|्म |ो क| यह|र द|नव |चार|दिय|े य|र्ण|राध|ोगा|ले |नून|ानू|ोषण|षणा|विश| जन|ारी|परि|गी |वाह|साम|ाना|रका| जो|ाज |ी ज|ध क|बन्|ताओ|ंकि|ूंक|ास |कर |चूं|ी व|य ह|ा ग|य स|न स|त र|कोई|ुक्|ोई | ।क|ं न|हित|निय|याद|ादी|्मा|्था|ामा|ाह |ी म|े ज","mar":"्या|या |त्य|याच|चा | व |ण्य|प्र|कार|ाचा| प्|धिक|िका| अध|अधि|च्य|ार |आहे| आह|ा अ|हे | स्|्रत|्ये|ा क|स्व| कर|्वा|ता |ास |ा स|ा व|त्र| त्|वा |ांच|यां|िक |मान| या|्य | का| अस|रत्|ष्ट|र्य|येक|ल्य|र आ|ाहि|क्ष| को|ामा|कोण| सं|ाच्|ात |ा न| रा|ंत्|ून |ेका| सा|राष|ाष्|चे |्ट्|ट्र|तंत| मा|ने |किं| कि|व्य|वात|े स|करण|ंवा|िंव|ये |क्त| सम|ा प|ना | मि|कास|ातं|्र्|र्व|समा|मिळ| जा|े प|व स|यास|ोणत|रण्|काम|ीय |ा आ| दे|े क|ांन|हि |रां| व्|्यक|ा म|िळण|ही | पा|्षण|ार्|ान |े अ| आप| वि|ळण्|ाही|ची |े व|्रा|मा |ली |ंच्|ारा|ा द| आण| नि|णे |द्ध| नय|ला |ा ह|नये| सर|सर्|्री|बंध|ी प|आपल|ले |ील |माज| हो|्त |त क|ाचे|्व |षण |ंना|लेल|ी अ|देश|आणि|णि |ध्य| शि|ी स|े ज|शिक|रीय|ानव|पाह|हिज|िजे|जे |क स|यक्|न क|व त|ा ज|यात|पल्|न्य|वी |स्थ|ज्य| ज्|े आ|रक्|त स|िक्|ंबं|संब| के|क व|केल|असल|य अ|य क|त व|ीत |णत्|त्व|ाने| उप|्वत|भाव|े त|करत|याह|रता|िष्|व म|कां|साम|रति|सार|ंचा|र व|क आ|याय|ासा|साठ|ाठी|्ती|ठी |ेण्|र्थ|ीने|े य|जाह|ोणा|संर|ायद|च्छ|स स|ंरक|तील|ी व|त आ|ी आ|ंधा|ेशा|ित | अश|हीर| हक|हक्|क्क|य व|शा |व आ|तीन|ण म|ूर्|ेल्|द्य|ेले|ांत|ा य|ा ब|ी म|ंचे|याव|देण|कृत|ारण|ेत |िवा|वस्|स्त|ाची|नवी| अर|थवा|अथव|ा त| अथ|अर्|ती |पूर|इतर|र्ण|ी क|यत्| इत| शा|रका|तिष|ण स|तिक|्रक|्ध |रणा| आल|ेल |ाजि| न्|धात|रून|श्र|असे|ष्ठ|ुक्|ेश |तो |जिक|े म","mai":"ाक |प्र|कार|िका|धिक|ार | आʼ|आʼ |्रत|ेँ |क अ|्यक|िक |्ति| अध|व्य|अधि|क स| प्| व्|क्त|केँ|यक्|तिक|हि | स्|न्त|क व|मे |बाक| सम|मान|त्य|क्ष|छैक| छै|ेक |स्व|रत्|त्र| अप|्ये|ष्ट|येक|र छ|सँ |ित |ैक।| एह| वि|वा | जा|्त्|िके|ति |ट्र|ाष्| हो|्ट्|राष| अन| रा| सा|्य |अपन| कर|कोन|।प्|्वत|क आ|तन्|अछि| अछ|वतन| को|था | वा|ताक| पर|ार्|एहि|नहि|पन |ा आ|रता|समा| मा|्री|नो | नह|्षा|देश|क प| दे| का| कए|रक | नि| सं|न्य|ि क|ोनो|छि |्त |ारक|्वा|ा स|ान्|ल ज|तथा| तथ|ान |करब|ँ क| आ |र आ|ीय |ता |क ह|वार| जे|्या|िवा|जाए|ना |ओर |ानव|ा प|ँ अ|अन्|ारण|माज|स्थ|घोष| आओ|्तर| एक|साम|र्व|आओर|धार|त क|परि|रीय|्रस|कएल|ामा|्रा|रण |ँ स| सभ|द्ध|स्त|एबा|पूर|ʼ स|ा अ| घो|षा |ाहि|ʼ अ|क।प|यक |नक |रक्|रबा|चित|िक्|क ज|ोषण|कर |र प|ेतु|हेत|शिक|एल |सम्| उप|ाधि|एहन|हन |त अ|तु |ूर्|षणा| हे|िमे| अव|ेल |सभ |े स|ि ज|निर| शि|िर्|रति|होए|अनु|र अ|जाह|क क|हो |्ध |रूप|वक |च्छ|प्त|ँ ए| सक|भाव|क उ|ाप्|सभक|त आ|ि आ|र्ण|त स|्रक|एत।|र्य|त ह|जिक| जन|ाजि|चार|ण स|ैक |रा |ि स|ारा|री |िश्|वाध|ा व|ाएत|न अ| ओ |हु |कान|जे |न व|िसँ|रसं|विव|कृत|ि घ|क ब| भा|उद्|ोएत| उद|राप|ʼ प|श्य|न प|्ण |य आ|द्व| द्|िष्| सह|ि द|धक | बी|ेश | पू|षाक|नवा|ास |ामे|ए स|जेँ| कि|कि |क ल| भे|पर |यता| रू|ओ व|ाके| पए|केओ|ेओ |पएब|राज| अथ|अथव|थवा|त्त|विश|्थि|य प|ा क|न क|वास|रिव|क र| दो|सार","bho":" के|के |ार |े क|कार|धिक|िका|ओर |आओर| आओ| अध|अधि|े स|ा क|े अ| हो| सं|र क|र स|ें | मे|में|िक | कर|ा स|र ह| से|से |रा |मान| सम|न क|क्ष|े ब|नो | चा|वे |ता |चाह|ष्ट| रा|ति |्रा|खे |राष|ाष्|प्र| सा| का|ट्र|े आ| प्| सक| मा|्ट्| स्|होख| बा|करे|ि क|ौनो|त क|था |कौन|पन | जा| कौ|रे |ाति|ला | ओक|ेला|तथा|आपन|्त | आप|कर |हवे|र म| हव| तथ|सबह|र आ|ोखे| ह।|िर |े ओ|केल|सके|हे | और|ही |तिर|त्र|जा |ना |बहि|।सब|े च| खा|े म| पर|खात|ान |र ब|न स|ावे| लो|षा |ाहे|ी क|ओकर|ा आ|माज|ित |े ज|ल ज|मिल|संग|्षा|ं क| सब|ा प|और |रक्|वे।|िं |े ह|ंत्|ाज |स्व|हिं|नइख|कान|ो स| जे|समा|क स|लोग|करा|क्त|्रत|ला।| नइ|े। |ानव|िया|हु |इखे|्र |रता|्वत|ानू|े न|ाम |नून|ाही|वतं|पर |ी स| ओ |े उ|े व|्री|रीय|स्थ|तंत|दी |ीय |े त|र अ|र प|्य |साम|बा।| आद|ून |। स|व्य|ा।स|सभे|भे |या | दे|ा म|े ख| वि| सु|केह|प्त|योग|ु क|ोग |े द|चार|ादी|ाप्| दो| या|राप|ल ह|पूर| मि|तिक|खल |यता|्ति| बि|ए क|आदि|दिम| ही|हि |मी | नि|र न| इ |ेहु|नवा|ा ह|री |ले | पा|ाधि| सह| उप|्या| जर|षण | सभ|िमी|देश|े प|म क|जे |ाव | अप|शिक|ाजि|जाद|जिक|े भ|क आ|्तर|िक्|ि म|ेकर|ुक्|वाध|गठन| व्|निय|ठन |।के|ामा|रो | जी|य क|न म|े ल|न ह|ास |ेश | शा|घोष|ंगठ|िल | घो|्षण| पू|े र|ंरक|संर|उपय|पयो|हो |बा |ी ब|्म |सब |दोस|ा। | आज|साथ| शि|आजा| भी| उच|ने |चित| अं|र व|ज क|न आ| ले|नि |ार्|कि |याह|्थि","nep":"को | र |कार|प्र|ार |ने |िका|क्त|धिक|्यक| गर|व्य|्रत| प्|अधि|्ति| अध| व्|यक्|मा |िक |त्य|ाई |लाई|न्त|मान| सम|त्र|गर्|र्न|क व| वा|्ने|वा | स्|रत्|र स|्ये|तिल|येक|ेक |छ ।|ो स|ा स|हरू| वि|क्ष|्त्|िला| । |स्व|हुन|ति | हु|ले | रा| मा|ष्ट|समा|वतन|तन्| छ |र छ| सं|्ट्|ट्र|ाष्|ो अ|राष|्वत|ुने|नेछ|हरु|ान |ता |े अ|्र | का|िने|ाको|गरि|े छ|ना | अन| नि|रता|नै | सा|ित |तिक|क स|र र|रू |ा अ|था |स्त|कुन|ा र|ुनै| छै|्त |छैन|ा प|ार्|वार|ा व| पर|तथा| तथ|का |्या|एको|रु |्षा|माज|रक्|परि|द्ध|। प| ला|सको|ामा| यस|ाहर|ेछ |धार|्रा|ो प|नि |देश|भाव|िवा|्य |र ह|र व|र म|सबै|न अ|े र|न स|रको|अन्|ताक|ंरक|संर|्वा| त्|सम्|री |ो व|ा भ|रहर| कु|्रि|त र|रिन|श्य|पनि|ै व|यस्|ारा|ानव| शि|ा त|लाग|रा |शिक| सब|ाउन|िक्|्न |ारक|ा न|रिय|्यस|द्व|रति|चार| सह|्षण| सु|ारम|ुक्|ुद्|साम|षा |ैन | अप| भए|बाट|ुन | उप|ान्|ो आ|्तर|िय |कान|ि र|रूक|द्द|र प|ाव |ो ल|तो | पन|ैन।| आव|ा ग|।प्|बै |ूर्|िएक|र त|निज|त्प| भे|जिक|ेछ।|िको|्तो|वाह|त स|ाट | अर|ाजि|्ध | उस|रमा|ात्|र्य|नको|ाय |जको|ित्|ागि| अभ|न ग|गि |ा म| आध|स्थ| पा|ारह|घोष|त्व|यता|ा क|र्द| मत|विध| सक|सार|परा|युक|राध| घो|णको|अपर|े स|ारी|।कु| दि| जन|भेद|रिव|उसक|क र|र अ|ि स|ानु|ो ह|रुद| छ।|ूको|रका|नमा| भन|र्म|हित|पूर|न्य|क अ|ा ब|ो भ|राज|अनु|ोषण|षणा|य र| मन| बि|्धा| दे|निर|ताह|र उ|यस |उने|रण |विक"}}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// This file is generated by `build.js`.
module.exports = {
  cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
  Latin: /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/g,
  Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69D\uA69F]/g,
  Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u065F\u066A-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B2\u08E4-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
  ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB]/g,
  Devanagari: /[\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FB]/g,
  jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C\uDC01|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C\uDC00/g,
  kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
  tel: /[\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F]/g,
  tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]/g,
  guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1]/g,
  kan: /[\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2]/g,
  mal: /[\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D75\u0D79-\u0D7F]/g,
  mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
  ori: /[\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]/g,
  pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75]/g,
  amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]/g,
  tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
  sin: /[\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
  ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8C\uDDA0]|\uD834[\uDE00-\uDE45]/g
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = nGram;

nGram.bigram = nGram(2);
nGram.trigram = nGram(3);

/* Factory returning a function that converts a given string
 * to n-grams. */
function nGram(n) {
  if (typeof n !== 'number' || isNaN(n) || n < 1 || n === Infinity) {
    throw new Error('`' + n + '` is not a valid argument for n-gram');
  }

  return grams;

  /* Create n-grams from a given value. */
  function grams(value) {
    var nGrams = [];
    var index;

    if (value === null || value === undefined) {
      return nGrams;
    }

    value = String(value);
    index = value.length - n + 1;

    if (index < 1) {
      return nGrams;
    }

    while (index--) {
      nGrams[index] = value.substr(index, n);
    }

    return nGrams;
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(0);

/*
Token is an object like:

{
    "value": "text content",

    // Position of the index
    "index": 0,

    // Length of the token
    "offset": "text content".length
}
*/

// Return a string ID to represent a list of tokens
function tokensId(tokens, prepend) {
    if (!prepend) return null;

    return _.reduce(tokens, function(prev, token) {
        var tokId = [
            token.index,
            token.offset,
            token.value
        ].join('-');

        return [prev, tokId].join(':');
    }, prepend);
}

// Return properties for a token
function tokenProperties(tok) {
    return _.omit(tok, ['index', 'offset', 'value']);
}

// Normalize and resolve a list of tokens relative to a token
function normalizeTokens(relative, tokens) {
    var _index = 0;

    // Force as an array
    if (!_.isArray(tokens)) tokens = [tokens];

    return _.map(tokens, function(subtoken) {
        if (_.isNull(subtoken)) return null;
        if (_.isString(subtoken)) {
            subtoken = {
                value: subtoken,
                index: _index,
                offset: subtoken.length
            };
        }

        if (_.isObject(subtoken)) {
            subtoken.index = subtoken.index || 0;
            _index = _index + subtoken.index + subtoken.offset;

            // Transform as an absolute token
            subtoken.index = relative.index + subtoken.index;
            subtoken.offset = subtoken.offset || subtoken.value.length;
        }

        return subtoken;
    });
}

// Merge tokens
function mergeTokens(tokens, mergeWith) {
    if (tokens.length == 0) return null;

    var value = '';
    var offset = 0;

    var firstIndex = _.first(tokens).index;

    _.each(tokens, function(token, i) {
        var prev = tokens[i - 1];
        var next = tokens[i + 1];

        var toFill = prev? (token.index + 1 - (prev.index + prev.offset)): 0;
        value = value + new Array(toFill).join(mergeWith) + token.value;

        var absoluteOffset = (token.index - firstIndex) + token.offset;
        if (absoluteOffset > offset) offset = absoluteOffset;
    });

    return {
        // Index equal is the one from the first token
        index: firstIndex,

        value: value,
        offset: Math.max(offset, value.length)
    }
}

module.exports = {
    tokensId: tokensId,
    normalize: normalizeTokens,
    properties: tokenProperties,
    merge: mergeTokens
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trigram = __webpack_require__(7).trigram;
var collapse = __webpack_require__(4);
var trim = __webpack_require__(10);

var has = {}.hasOwnProperty;

exports.clean = clean;
exports.trigrams = getCleanTrigrams;
exports.asDictionary = getCleanTrigramsAsDictionary;
exports.asTuples = getCleanTrigramsAsTuples;
exports.tuplesAsDictionary = getCleanTrigramTuplesAsDictionary;

/* Clean `value`
 * Removed general non-important (as in, for language detection) punctuation
 * marks, symbols, and numbers. */
function clean(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return trim(collapse(String(value).replace(/[\u0021-\u0040]+/g, ' '))).toLowerCase();
}

/* Get clean, padded, trigrams. */
function getCleanTrigrams(value) {
  return trigram(' ' + clean(value) + ' ');
}

/* Get an `Object` with trigrams as its attributes, and
 * their occurence count as their values. */
function getCleanTrigramsAsDictionary(value) {
  var trigrams = getCleanTrigrams(value);
  var index = trigrams.length;
  var dictionary = {};
  var trigram;

  while (index--) {
    trigram = trigrams[index];

    if (has.call(dictionary, trigram)) {
      dictionary[trigram]++;
    } else {
      dictionary[trigram] = 1;
    }
  }

  return dictionary;
}

/* Get an `Array` containing trigram--count tuples from a
 * given value. */
function getCleanTrigramsAsTuples(value) {
  var dictionary = getCleanTrigramsAsDictionary(value);
  var tuples = [];
  var trigram;

  for (trigram in dictionary) {
    tuples.push([trigram, dictionary[trigram]]);
  }

  tuples.sort(sort);

  return tuples;
}

/* Get an `Array` containing trigram--count tuples from a
 * given value. */
function getCleanTrigramTuplesAsDictionary(tuples) {
  var index = tuples.length;
  var dictionary = {};
  var tuple;

  while (index--) {
    tuple = tuples[index];
    dictionary[tuple[0]] = tuple[1];
  }

  return dictionary;
}

/* Deep regular sort on item at `1` in both `Object`s. */
function sort(a, b) {
  return a[1] - b[1];
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);