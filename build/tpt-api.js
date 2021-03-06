(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("flat-file-db"), require("dotenv"));
	else if(typeof define === 'function' && define.amd)
		define(["axios", "flat-file-db", "dotenv"], factory);
	else if(typeof exports === 'object')
		exports["Tpt"] = factory(require("axios"), require("flat-file-db"), require("dotenv"));
	else
		root["Tpt"] = factory(root["axios"], root["flat-file-db"], root["dotenv"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_60__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(42);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(48);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6),
    getRawTag = __webpack_require__(20),
    objectToString = __webpack_require__(21);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(19);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(29),
    getValue = __webpack_require__(34);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _flatFileDb = __webpack_require__(13);

var _flatFileDb2 = _interopRequireDefault(_flatFileDb);

var _has = __webpack_require__(14);

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (process.env.NODE_ENV !== 'production') {
  __webpack_require__(60).config();
}

var dbName = process.env.TPT_ENDPOINT === 'https://api.thirdparty.com' ? 'production-tpt-token' : 'development-tpt-token';

var db = _flatFileDb2.default.sync('/tmp/' + dbName + '.db');
var MINUTE = 1000 * 60;

var request = _axios2.default.create({
  validateStatus: function validateStatus(status) {
    return true;
  },
  headers: {
    'Content-Type': 'application/json'
  }
});

var ObjectList = function () {
  function ObjectList() {
    _classCallCheck(this, ObjectList);

    this.items = [];
    this.endpoint = process.env.TPT_ENDPOINT;
  }

  _createClass(ObjectList, [{
    key: 'list',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path) {
        var response, hasTail, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return request.get(path);

              case 3:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return');

              case 6:
                this.items = [].concat(_toConsumableArray(this.items), _toConsumableArray(response.data.items));
                hasTail = (0, _has2.default)(response.data, '_tail');

                if (!(!hasTail || response.data.items.length < 10)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt('return');

              case 12:
                url = '' + process.env.TPT_ENDPOINT + response.data._tail;
                _context.next = 15;
                return this.list(url);

              case 15:
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](0);

                console.warn(_context.t0);
                return _context.abrupt('return', []);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 17]]);
      }));

      function list(_x) {
        return _ref.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return ObjectList;
}();

function Tpt(apiKey, apiSecret, endpoint) {
  var _this = this;

  this.apiKey = apiKey;
  this.apiSecret = apiSecret;
  this.endpoint = endpoint;

  this.fetchToken = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var url, credentials, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = this.endpoint + '/oauth/token';
            credentials = {
              client_id: this.apiKey,
              client_secret: this.apiSecret,
              grant_type: 'client_credentials'
            };
            _context2.next = 5;
            return request.post(url, credentials);

          case 5:
            response = _context2.sent;
            return _context2.abrupt('return', response.data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            console.warn(_context2.t0);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));

  this.getToken = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var token, expiry, fifteenMinutesFromNow, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = db.get('token');
            expiry = db.get('expiry');
            fifteenMinutesFromNow = new Date(new Date().valueOf() + 15 * MINUTE);

            if (!(!token || !expiry || new Date(expiry) < fifteenMinutesFromNow)) {
              _context3.next = 13;
              break;
            }

            _context3.next = 7;
            return this.fetchToken();

          case 7:
            response = _context3.sent;

            db.put('token', response.access_token);
            db.put('expiry', response.expiry);

            return _context3.abrupt('return', {
              token: response.access_token,
              expiry: response.expiry
            });

          case 13:
            return _context3.abrupt('return', { token: token, expiry: expiry });

          case 14:
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3['catch'](0);

            console.warn(_context3.t0);

          case 19:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 16]]);
  }));

  this.formatHeaders = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
    var tokenData, token;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return this.getToken();

          case 3:
            tokenData = _context4.sent;
            token = tokenData.token;
            return _context4.abrupt('return', {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            });

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](0);

            console.warn(_context4.t0);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 8]]);
  }));

  this.prepareHeaders = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
    var headers;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return this.formatHeaders();

          case 2:
            headers = _context5.sent;

            request.defaults.headers = headers;
            // console.log('> prepare headers: ', headers);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  this.accounts = {
    create: function () {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id;
                _context6.next = 6;
                return request.post(url, options.body);

              case 6:
                response = _context6.sent;

                if (!(response.status === 200)) {
                  _context6.next = 11;
                  break;
                }

                return _context6.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context6.abrupt('return', { error: response.statusText });

              case 13:
                _context6.next = 18;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6['catch'](0);

                console.warn(_context6.t0);

              case 18:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this, [[0, 15]]);
      }));

      function create(_x2) {
        return _ref6.apply(this, arguments);
      }

      return create;
    }(),
    get: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id;
                _context7.next = 6;
                return request.get(url);

              case 6:
                response = _context7.sent;

                if (!(response.status === 200)) {
                  _context7.next = 11;
                  break;
                }

                return _context7.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context7.abrupt('return', { error: response.statusText });

              case 13:
                _context7.next = 18;
                break;

              case 15:
                _context7.prev = 15;
                _context7.t0 = _context7['catch'](0);

                console.warn(_context7.t0);

              case 18:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this, [[0, 15]]);
      }));

      function get(_x3) {
        return _ref7.apply(this, arguments);
      }

      return get;
    }(),
    getStatus: function () {
      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/status';
                _context8.next = 6;
                return request.get(url);

              case 6:
                response = _context8.sent;

                if (!(response.status === 200)) {
                  _context8.next = 11;
                  break;
                }

                return _context8.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context8.abrupt('return', { error: response.statusText });

              case 13:
                _context8.next = 18;
                break;

              case 15:
                _context8.prev = 15;
                _context8.t0 = _context8['catch'](0);

                console.warn(_context8.t0);

              case 18:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this, [[0, 15]]);
      }));

      function getStatus(_x4) {
        return _ref8.apply(this, arguments);
      }

      return getStatus;
    }(),
    getApplicant: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/applicants/' + applicant_id;
                _context9.next = 6;
                return request.get(url);

              case 6:
                response = _context9.sent;

                if (!(response.status === 200)) {
                  _context9.next = 11;
                  break;
                }

                return _context9.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context9.abrupt('return', { error: response.statusText });

              case 13:
                _context9.next = 18;
                break;

              case 15:
                _context9.prev = 15;
                _context9.t0 = _context9['catch'](0);

                console.warn(_context9.t0);

              case 18:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this, [[0, 15]]);
      }));

      function getApplicant(_x5) {
        return _ref9.apply(this, arguments);
      }

      return getApplicant;
    }(),
    updateAccount: function () {
      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id;
                _context10.next = 6;
                return request.patch(url, options.body);

              case 6:
                response = _context10.sent;

                if (!(response.status === 200)) {
                  _context10.next = 11;
                  break;
                }

                return _context10.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context10.abrupt('return', { error: error });

              case 14:
                _context10.next = 19;
                break;

              case 16:
                _context10.prev = 16;
                _context10.t0 = _context10['catch'](0);

                console.warn(_context10.t0);

              case 19:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this, [[0, 16]]);
      }));

      function updateAccount(_x6) {
        return _ref10.apply(this, arguments);
      }

      return updateAccount;
    }(),
    updateApplicant: function () {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/applicants/' + options.applicant_id;
                _context11.next = 6;
                return request.patch(url, options.body);

              case 6:
                response = _context11.sent;

                if (!(response.status === 200)) {
                  _context11.next = 11;
                  break;
                }

                return _context11.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context11.abrupt('return', { error: error });

              case 14:
                _context11.next = 19;
                break;

              case 16:
                _context11.prev = 16;
                _context11.t0 = _context11['catch'](0);

                console.warn(_context11.t0);

              case 19:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this, [[0, 16]]);
      }));

      function updateApplicant(_x7) {
        return _ref11.apply(this, arguments);
      }

      return updateApplicant;
    }()
  };

  this.documents = {
    getStatements: function () {
      var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/documents/statements';
                _context12.next = 6;
                return request.get(url);

              case 6:
                response = _context12.sent;

                if (!(response.status === 200)) {
                  _context12.next = 11;
                  break;
                }

                return _context12.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context12.abrupt('return', { error: response.statusText });

              case 13:
                _context12.next = 18;
                break;

              case 15:
                _context12.prev = 15;
                _context12.t0 = _context12['catch'](0);

                console.warn(_context12.t0);

              case 18:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this, [[0, 15]]);
      }));

      function getStatements(_x8) {
        return _ref12.apply(this, arguments);
      }

      return getStatements;
    }(),
    getConfirmations: function () {
      var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/documents/confirmations';
                _context13.next = 6;
                return request.get(url);

              case 6:
                response = _context13.sent;

                if (!(response.status === 200)) {
                  _context13.next = 11;
                  break;
                }

                return _context13.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context13.abrupt('return', { error: response.statusText });

              case 13:
                _context13.next = 18;
                break;

              case 15:
                _context13.prev = 15;
                _context13.t0 = _context13['catch'](0);

                console.warn(_context13.t0);

              case 18:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, _this, [[0, 15]]);
      }));

      function getConfirmations(_x9) {
        return _ref13.apply(this, arguments);
      }

      return getConfirmations;
    }()
  };

  this.transfers = {
    create: function () {
      var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/transfers/' + options.transfer_id;
                _context14.next = 6;
                return request.post(url, options.body);

              case 6:
                response = _context14.sent;

                if (!(response.status === 200)) {
                  _context14.next = 11;
                  break;
                }

                return _context14.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context14.abrupt('return', { error: error });

              case 15:
                _context14.next = 20;
                break;

              case 17:
                _context14.prev = 17;
                _context14.t0 = _context14['catch'](0);

                console.warn(_context14.t0);

              case 20:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, _this, [[0, 17]]);
      }));

      function create(_x10) {
        return _ref14.apply(this, arguments);
      }

      return create;
    }(),
    cancel: function () {
      var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/transfers/' + options.transfer_id;
                _context15.next = 6;
                return request.delete(url);

              case 6:
                response = _context15.sent;

                if (!(response.status === 200)) {
                  _context15.next = 11;
                  break;
                }

                return _context15.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context15.abrupt('return', { error: error });

              case 14:
                _context15.next = 19;
                break;

              case 16:
                _context15.prev = 16;
                _context15.t0 = _context15['catch'](0);

                console.warn(_context15.t0);

              case 19:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, _this, [[0, 16]]);
      }));

      function cancel(_x11) {
        return _ref15.apply(this, arguments);
      }

      return cancel;
    }(),
    get: function () {
      var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/transfers';
                _context16.next = 6;
                return request.get(url, { params: options.params });

              case 6:
                response = _context16.sent;

                if (!(response.status === 200)) {
                  _context16.next = 11;
                  break;
                }

                return _context16.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context16.abrupt('return', { error: response.statusText });

              case 13:
                _context16.next = 18;
                break;

              case 15:
                _context16.prev = 15;
                _context16.t0 = _context16['catch'](0);

                console.warn(_context16.t0);

              case 18:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, _this, [[0, 15]]);
      }));

      function get(_x12) {
        return _ref16.apply(this, arguments);
      }

      return get;
    }(),
    getAll: function () {
      var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(_ref17) {
        var account_id = _ref17.account_id;
        var transferRequest, path, result;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return _this.prepareHeaders();

              case 3:
                transferRequest = new ObjectList();
                path = process.env.TPT_ENDPOINT + '/v1/accounts/' + account_id + '/transfers';
                _context17.next = 7;
                return transferRequest.list(path);

              case 7:
                result = transferRequest.items;
                // console.log('> get all transfers: ', result);

                return _context17.abrupt('return', result);

              case 11:
                _context17.prev = 11;
                _context17.t0 = _context17['catch'](0);

                console.warn(_context17.t0);

              case 14:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, _this, [[0, 11]]);
      }));

      function getAll(_x13) {
        return _ref18.apply(this, arguments);
      }

      return getAll;
    }(),
    find: function () {
      var _ref19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/transfers/' + options.transfer_id;
                _context18.next = 6;
                return request.get(url);

              case 6:
                response = _context18.sent;

                if (!(response.status === 200)) {
                  _context18.next = 11;
                  break;
                }

                return _context18.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context18.abrupt('return', { error: response.statusText });

              case 13:
                _context18.next = 18;
                break;

              case 15:
                _context18.prev = 15;
                _context18.t0 = _context18['catch'](0);

                console.warn(_context18.t0);

              case 18:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, _this, [[0, 15]]);
      }));

      function find(_x14) {
        return _ref19.apply(this, arguments);
      }

      return find;
    }()
  };

  this.sources = {
    create: function () {
      var _ref20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id;
                _context19.next = 6;
                return request.post(url, options.body);

              case 6:
                response = _context19.sent;

                if (!(response.status === 200)) {
                  _context19.next = 11;
                  break;
                }

                return _context19.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context19.abrupt('return', { error: error });

              case 15:
                _context19.next = 20;
                break;

              case 17:
                _context19.prev = 17;
                _context19.t0 = _context19['catch'](0);

                console.warn(_context19.t0);

              case 20:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, _this, [[0, 17]]);
      }));

      function create(_x15) {
        return _ref20.apply(this, arguments);
      }

      return create;
    }(),
    delete: function () {
      var _ref21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id;
                _context20.next = 6;
                return request.delete(url);

              case 6:
                response = _context20.sent;

                if (!(response.status === 200)) {
                  _context20.next = 11;
                  break;
                }

                return _context20.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context20.abrupt('return', { error: error });

              case 14:
                _context20.next = 19;
                break;

              case 16:
                _context20.prev = 16;
                _context20.t0 = _context20['catch'](0);

                console.warn(_context20.t0);

              case 19:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, _this, [[0, 16]]);
      }));

      function _delete(_x16) {
        return _ref21.apply(this, arguments);
      }

      return _delete;
    }(),
    get: function () {
      var _ref22 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources';
                _context21.next = 6;
                return request.get(url, { params: options.params });

              case 6:
                response = _context21.sent;

                if (!(response.status === 200)) {
                  _context21.next = 11;
                  break;
                }

                return _context21.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context21.abrupt('return', { error: response.statusText });

              case 13:
                _context21.next = 18;
                break;

              case 15:
                _context21.prev = 15;
                _context21.t0 = _context21['catch'](0);

                console.warn(_context21.t0);

              case 18:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, _this, [[0, 15]]);
      }));

      function get(_x17) {
        return _ref22.apply(this, arguments);
      }

      return get;
    }(),
    find: function () {
      var _ref23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id;
                _context22.next = 6;
                return request.get(url);

              case 6:
                response = _context22.sent;

                if (!(response.status === 200)) {
                  _context22.next = 11;
                  break;
                }

                return _context22.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context22.abrupt('return', { error: response.statusText });

              case 13:
                _context22.next = 18;
                break;

              case 15:
                _context22.prev = 15;
                _context22.t0 = _context22['catch'](0);

                console.warn(_context22.t0);

              case 18:
              case 'end':
                return _context22.stop();
            }
          }
        }, _callee22, _this, [[0, 15]]);
      }));

      function find(_x18) {
        return _ref23.apply(this, arguments);
      }

      return find;
    }(),
    update: function () {
      var _ref24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id;
                _context23.next = 6;
                return request.patch(url, options.body);

              case 6:
                response = _context23.sent;

                if (!(response.status === 200)) {
                  _context23.next = 11;
                  break;
                }

                return _context23.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context23.abrupt('return', { error: error });

              case 14:
                _context23.next = 19;
                break;

              case 16:
                _context23.prev = 16;
                _context23.t0 = _context23['catch'](0);

                console.warn(_context23.t0);

              case 19:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, _this, [[0, 16]]);
      }));

      function update(_x19) {
        return _ref24.apply(this, arguments);
      }

      return update;
    }(),
    verify: function () {
      var _ref25 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _context24.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id + '/verify';
                _context24.next = 6;
                return request.post(url, options.body);

              case 6:
                response = _context24.sent;

                if (!(response.status === 200)) {
                  _context24.next = 11;
                  break;
                }

                return _context24.abrupt('return', response.data);

              case 11:

                console.warn(response.data);
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context24.abrupt('return', { error: error });

              case 15:
                _context24.next = 20;
                break;

              case 17:
                _context24.prev = 17;
                _context24.t0 = _context24['catch'](0);

                console.warn(_context24.t0);

              case 20:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, _this, [[0, 17]]);
      }));

      function verify(_x20) {
        return _ref25.apply(this, arguments);
      }

      return verify;
    }(),
    reverify: function () {
      var _ref26 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/sources/' + options.source_id + '/reverify';
                _context25.next = 6;
                return request.post(url);

              case 6:
                response = _context25.sent;

                if (!(response.status === 200)) {
                  _context25.next = 11;
                  break;
                }

                return _context25.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context25.abrupt('return', { error: error });

              case 14:
                _context25.next = 19;
                break;

              case 16:
                _context25.prev = 16;
                _context25.t0 = _context25['catch'](0);

                console.warn(_context25.t0);

              case 19:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, _this, [[0, 16]]);
      }));

      function reverify(_x21) {
        return _ref26.apply(this, arguments);
      }

      return reverify;
    }()
  };

  this.orders = {
    create: function () {
      var _ref27 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/orders/' + options.order_id;
                _context26.next = 6;
                return request.post(url, options.body);

              case 6:
                response = _context26.sent;

                if (!(response.status === 200)) {
                  _context26.next = 11;
                  break;
                }

                return _context26.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context26.abrupt('return', { error: error, fullResponse: response.data });

              case 14:
                _context26.next = 19;
                break;

              case 16:
                _context26.prev = 16;
                _context26.t0 = _context26['catch'](0);

                console.warn(_context26.t0);

              case 19:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, _this, [[0, 16]]);
      }));

      function create(_x22) {
        return _ref27.apply(this, arguments);
      }

      return create;
    }(),
    get: function () {
      var _ref29 = _asyncToGenerator(regeneratorRuntime.mark(function _callee27(_ref28) {
        var account_id = _ref28.account_id,
            params = _ref28.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _context27.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + account_id + '/orders';
                _context27.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context27.sent;

                if (!(response.status === 200)) {
                  _context27.next = 11;
                  break;
                }

                return _context27.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context27.abrupt('return', { error: response.statusText });

              case 13:
                _context27.next = 18;
                break;

              case 15:
                _context27.prev = 15;
                _context27.t0 = _context27['catch'](0);

                console.warn(_context27.t0);

              case 18:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, _this, [[0, 15]]);
      }));

      function get(_x23) {
        return _ref29.apply(this, arguments);
      }

      return get;
    }(),
    getAll: function () {
      var _ref31 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(_ref30) {
        var account_id = _ref30.account_id,
            params = _ref30.params;
        var orderRequest, path, result;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return _this.prepareHeaders();

              case 3:
                orderRequest = new ObjectList();
                path = process.env.TPT_ENDPOINT + '/v1/accounts/' + account_id + '/orders?status=filled';
                _context28.next = 7;
                return orderRequest.list(path);

              case 7:
                result = orderRequest.items;
                // console.log('> get all orders: ', result);

                return _context28.abrupt('return', result);

              case 11:
                _context28.prev = 11;
                _context28.t0 = _context28['catch'](0);

                console.warn(_context28.t0);

              case 14:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, _this, [[0, 11]]);
      }));

      function getAll(_x24) {
        return _ref31.apply(this, arguments);
      }

      return getAll;
    }(),
    find: function () {
      var _ref32 = _asyncToGenerator(regeneratorRuntime.mark(function _callee29(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/orders/' + options.order_id;
                _context29.next = 6;
                return request.get(url);

              case 6:
                response = _context29.sent;

                if (!(response.status === 200)) {
                  _context29.next = 11;
                  break;
                }

                return _context29.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context29.abrupt('return', { error: response.statusText });

              case 13:
                _context29.next = 18;
                break;

              case 15:
                _context29.prev = 15;
                _context29.t0 = _context29['catch'](0);

                console.warn(_context29.t0);

              case 18:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, _this, [[0, 15]]);
      }));

      function find(_x25) {
        return _ref32.apply(this, arguments);
      }

      return find;
    }(),
    cancel: function () {
      var _ref33 = _asyncToGenerator(regeneratorRuntime.mark(function _callee30(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                _context30.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/orders/' + options.order_id;
                _context30.next = 6;
                return request.delete(url);

              case 6:
                response = _context30.sent;

                if (!(response.status === 200)) {
                  _context30.next = 11;
                  break;
                }

                return _context30.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context30.abrupt('return', { error: error });

              case 14:
                _context30.next = 19;
                break;

              case 16:
                _context30.prev = 16;
                _context30.t0 = _context30['catch'](0);

                console.warn(_context30.t0);

              case 19:
              case 'end':
                return _context30.stop();
            }
          }
        }, _callee30, _this, [[0, 16]]);
      }));

      function cancel(_x26) {
        return _ref33.apply(this, arguments);
      }

      return cancel;
    }(),
    update: function () {
      var _ref34 = _asyncToGenerator(regeneratorRuntime.mark(function _callee31(options) {
        var url, response, error;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.prev = 0;
                _context31.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/orders/' + options.order_id;
                _context31.next = 6;
                return request.patch(url, options.body);

              case 6:
                response = _context31.sent;

                if (!(response.status === 200)) {
                  _context31.next = 11;
                  break;
                }

                return _context31.abrupt('return', response.data);

              case 11:
                error = response.statusText;

                if (response.data.error) {
                  error = response.data.error;
                }
                return _context31.abrupt('return', { error: error });

              case 14:
                _context31.next = 19;
                break;

              case 16:
                _context31.prev = 16;
                _context31.t0 = _context31['catch'](0);

                console.warn(_context31.t0);

              case 19:
              case 'end':
                return _context31.stop();
            }
          }
        }, _callee31, _this, [[0, 16]]);
      }));

      function update(_x27) {
        return _ref34.apply(this, arguments);
      }

      return update;
    }()
  };

  this.portfolio = {
    getCash: function () {
      var _ref35 = _asyncToGenerator(regeneratorRuntime.mark(function _callee32(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.prev = 0;
                _context32.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/portfolio/cash/USD';
                _context32.next = 6;
                return request.get(url);

              case 6:
                response = _context32.sent;

                if (!(response.status === 200)) {
                  _context32.next = 11;
                  break;
                }

                return _context32.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context32.abrupt('return', { error: response.statusText });

              case 13:
                _context32.next = 18;
                break;

              case 15:
                _context32.prev = 15;
                _context32.t0 = _context32['catch'](0);

                console.warn(_context32.t0);

              case 18:
              case 'end':
                return _context32.stop();
            }
          }
        }, _callee32, _this, [[0, 15]]);
      }));

      function getCash(_x28) {
        return _ref35.apply(this, arguments);
      }

      return getCash;
    }(),
    getEquities: function () {
      var _ref36 = _asyncToGenerator(regeneratorRuntime.mark(function _callee33(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.prev = 0;
                _context33.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + options.account_id + '/portfolio/equities';
                _context33.next = 6;
                return request.get(url, { params: options.params });

              case 6:
                response = _context33.sent;

                if (!(response.status === 200)) {
                  _context33.next = 11;
                  break;
                }

                return _context33.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context33.abrupt('return', { error: response.statusText });

              case 13:
                _context33.next = 18;
                break;

              case 15:
                _context33.prev = 15;
                _context33.t0 = _context33['catch'](0);

                console.warn(_context33.t0);

              case 18:
              case 'end':
                return _context33.stop();
            }
          }
        }, _callee33, _this, [[0, 15]]);
      }));

      function getEquities(_x29) {
        return _ref36.apply(this, arguments);
      }

      return getEquities;
    }(),
    getHistory: function () {
      var _ref38 = _asyncToGenerator(regeneratorRuntime.mark(function _callee34(_ref37) {
        var account_id = _ref37.account_id;
        var historyRequest, path, result;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.prev = 0;
                _context34.next = 3;
                return _this.prepareHeaders();

              case 3:
                historyRequest = new ObjectList();
                path = _this.endpoint + '/v1/accounts/' + account_id + '/portfolio/cash/USD/transactions';
                _context34.next = 7;
                return historyRequest.list(path);

              case 7:
                result = historyRequest.items;
                return _context34.abrupt('return', result);

              case 11:
                _context34.prev = 11;
                _context34.t0 = _context34['catch'](0);

                console.warn(_context34.t0);

              case 14:
              case 'end':
                return _context34.stop();
            }
          }
        }, _callee34, _this, [[0, 11]]);
      }));

      function getHistory(_x30) {
        return _ref38.apply(this, arguments);
      }

      return getHistory;
    }(),
    symbolHistory: function () {
      var _ref40 = _asyncToGenerator(regeneratorRuntime.mark(function _callee35(_ref39) {
        var account_id = _ref39.account_id,
            symbol = _ref39.symbol,
            params = _ref39.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.prev = 0;
                _context35.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/accounts/' + account_id + '/portfolio/equities/' + symbol + '/transactions';
                _context35.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context35.sent;

                if (!(response.status === 200)) {
                  _context35.next = 11;
                  break;
                }

                return _context35.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context35.abrupt('return', { error: response.statusText });

              case 13:
                _context35.next = 18;
                break;

              case 15:
                _context35.prev = 15;
                _context35.t0 = _context35['catch'](0);

                console.warn(_context35.t0);

              case 18:
              case 'end':
                return _context35.stop();
            }
          }
        }, _callee35, _this, [[0, 15]]);
      }));

      function symbolHistory(_x31) {
        return _ref40.apply(this, arguments);
      }

      return symbolHistory;
    }()
  };

  this.market = {
    getSingleQuote: function () {
      var _ref42 = _asyncToGenerator(regeneratorRuntime.mark(function _callee36(_ref41) {
        var symbol = _ref41.symbol,
            params = _ref41.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.prev = 0;
                _context36.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/quote';
                _context36.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context36.sent;

                if (!(response.status === 200)) {
                  _context36.next = 11;
                  break;
                }

                return _context36.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context36.abrupt('return', { error: response.statusText });

              case 13:
                _context36.next = 18;
                break;

              case 15:
                _context36.prev = 15;
                _context36.t0 = _context36['catch'](0);

                console.warn(_context36.t0);

              case 18:
              case 'end':
                return _context36.stop();
            }
          }
        }, _callee36, _this, [[0, 15]]);
      }));

      function getSingleQuote(_x32) {
        return _ref42.apply(this, arguments);
      }

      return getSingleQuote;
    }(),
    getOptionChain: function () {
      var _ref44 = _asyncToGenerator(regeneratorRuntime.mark(function _callee37(_ref43) {
        var symbol = _ref43.symbol,
            params = _ref43.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.prev = 0;
                _context37.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/options';
                _context37.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context37.sent;

                if (!(response.status === 200)) {
                  _context37.next = 11;
                  break;
                }

                return _context37.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context37.abrupt('return', { error: response.statusText });

              case 13:
                _context37.next = 18;
                break;

              case 15:
                _context37.prev = 15;
                _context37.t0 = _context37['catch'](0);

                console.warn(_context37.t0);

              case 18:
              case 'end':
                return _context37.stop();
            }
          }
        }, _callee37, _this, [[0, 15]]);
      }));

      function getOptionChain(_x33) {
        return _ref44.apply(this, arguments);
      }

      return getOptionChain;
    }(),
    getIntraday: function () {
      var _ref46 = _asyncToGenerator(regeneratorRuntime.mark(function _callee38(_ref45) {
        var symbol = _ref45.symbol,
            params = _ref45.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.prev = 0;
                _context38.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/timeseries/intraday';
                _context38.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context38.sent;

                if (!(response.status === 200)) {
                  _context38.next = 11;
                  break;
                }

                return _context38.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context38.abrupt('return', { error: response.statusText });

              case 13:
                _context38.next = 18;
                break;

              case 15:
                _context38.prev = 15;
                _context38.t0 = _context38['catch'](0);

                console.warn(_context38.t0);

              case 18:
              case 'end':
                return _context38.stop();
            }
          }
        }, _callee38, _this, [[0, 15]]);
      }));

      function getIntraday(_x34) {
        return _ref46.apply(this, arguments);
      }

      return getIntraday;
    }(),
    getEndOfDayHistory: function () {
      var _ref48 = _asyncToGenerator(regeneratorRuntime.mark(function _callee39(_ref47) {
        var symbol = _ref47.symbol,
            params = _ref47.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.prev = 0;
                _context39.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/timeseries/eod';
                _context39.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context39.sent;

                if (!(response.status === 200)) {
                  _context39.next = 11;
                  break;
                }

                return _context39.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context39.abrupt('return', { error: response.statusText });

              case 13:
                _context39.next = 18;
                break;

              case 15:
                _context39.prev = 15;
                _context39.t0 = _context39['catch'](0);

                console.warn(_context39.t0);

              case 18:
              case 'end':
                return _context39.stop();
            }
          }
        }, _callee39, _this, [[0, 15]]);
      }));

      function getEndOfDayHistory(_x35) {
        return _ref48.apply(this, arguments);
      }

      return getEndOfDayHistory;
    }(),
    getSplits: function () {
      var _ref50 = _asyncToGenerator(regeneratorRuntime.mark(function _callee40(_ref49) {
        var symbol = _ref49.symbol,
            params = _ref49.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.prev = 0;
                _context40.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/splits';
                _context40.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context40.sent;

                if (!(response.status === 200)) {
                  _context40.next = 11;
                  break;
                }

                return _context40.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context40.abrupt('return', { error: response.statusText });

              case 13:
                _context40.next = 18;
                break;

              case 15:
                _context40.prev = 15;
                _context40.t0 = _context40['catch'](0);

                console.warn(_context40.t0);

              case 18:
              case 'end':
                return _context40.stop();
            }
          }
        }, _callee40, _this, [[0, 15]]);
      }));

      function getSplits(_x36) {
        return _ref50.apply(this, arguments);
      }

      return getSplits;
    }(),
    getDividends: function () {
      var _ref52 = _asyncToGenerator(regeneratorRuntime.mark(function _callee41(_ref51) {
        var symbol = _ref51.symbol,
            params = _ref51.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.prev = 0;
                _context41.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + symbol + '/dividends';
                _context41.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context41.sent;

                if (!(response.status === 200)) {
                  _context41.next = 11;
                  break;
                }

                return _context41.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context41.abrupt('return', { error: response.statusText });

              case 13:
                _context41.next = 18;
                break;

              case 15:
                _context41.prev = 15;
                _context41.t0 = _context41['catch'](0);

                console.warn(_context41.t0);

              case 18:
              case 'end':
                return _context41.stop();
            }
          }
        }, _callee41, _this, [[0, 15]]);
      }));

      function getDividends(_x37) {
        return _ref52.apply(this, arguments);
      }

      return getDividends;
    }(),
    getMultiQuote: function () {
      var _ref54 = _asyncToGenerator(regeneratorRuntime.mark(function _callee42(_ref53) {
        var symbols = _ref53.symbols,
            params = _ref53.params;
        var url, response;
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.prev = 0;
                _context42.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/quote?symbols=' + symbols;
                _context42.next = 6;
                return request.get(url, { params: params });

              case 6:
                response = _context42.sent;

                if (!(response.status === 200)) {
                  _context42.next = 11;
                  break;
                }

                return _context42.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context42.abrupt('return', { error: response.statusText });

              case 13:
                _context42.next = 18;
                break;

              case 15:
                _context42.prev = 15;
                _context42.t0 = _context42['catch'](0);

                console.warn(_context42.t0);

              case 18:
              case 'end':
                return _context42.stop();
            }
          }
        }, _callee42, _this, [[0, 15]]);
      }));

      function getMultiQuote(_x38) {
        return _ref54.apply(this, arguments);
      }

      return getMultiQuote;
    }(),
    getHours: function () {
      var _ref56 = _asyncToGenerator(regeneratorRuntime.mark(function _callee43(_ref55) {
        var date = _ref55.date;
        var url, response;
        return regeneratorRuntime.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.prev = 0;
                _context43.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/hours/' + date;
                _context43.next = 6;
                return request.get(url);

              case 6:
                response = _context43.sent;

                if (!(response.status === 200)) {
                  _context43.next = 11;
                  break;
                }

                return _context43.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context43.abrupt('return', { error: response.statusText });

              case 13:
                _context43.next = 18;
                break;

              case 15:
                _context43.prev = 15;
                _context43.t0 = _context43['catch'](0);

                console.warn(_context43.t0);

              case 18:
              case 'end':
                return _context43.stop();
            }
          }
        }, _callee43, _this, [[0, 15]]);
      }));

      function getHours(_x39) {
        return _ref56.apply(this, arguments);
      }

      return getHours;
    }(),
    getBrokerRatings: function () {
      var _ref57 = _asyncToGenerator(regeneratorRuntime.mark(function _callee44(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.prev = 0;
                _context44.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/ratings';
                _context44.next = 6;
                return request.get(url);

              case 6:
                response = _context44.sent;

                if (!(response.status === 200)) {
                  _context44.next = 11;
                  break;
                }

                return _context44.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context44.abrupt('return', { error: response.statusText });

              case 13:
                _context44.next = 18;
                break;

              case 15:
                _context44.prev = 15;
                _context44.t0 = _context44['catch'](0);

                console.warn(_context44.t0);

              case 18:
              case 'end':
                return _context44.stop();
            }
          }
        }, _callee44, _this, [[0, 15]]);
      }));

      function getBrokerRatings(_x40) {
        return _ref57.apply(this, arguments);
      }

      return getBrokerRatings;
    }(),
    getEarningsEvents: function () {
      var _ref58 = _asyncToGenerator(regeneratorRuntime.mark(function _callee45(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.prev = 0;
                _context45.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/earnings/events';
                _context45.next = 6;
                return request.get(url);

              case 6:
                response = _context45.sent;

                if (!(response.status === 200)) {
                  _context45.next = 11;
                  break;
                }

                return _context45.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context45.abrupt('return', { error: response.statusText });

              case 13:
                _context45.next = 18;
                break;

              case 15:
                _context45.prev = 15;
                _context45.t0 = _context45['catch'](0);

                console.warn(_context45.t0);

              case 18:
              case 'end':
                return _context45.stop();
            }
          }
        }, _callee45, _this, [[0, 15]]);
      }));

      function getEarningsEvents(_x41) {
        return _ref58.apply(this, arguments);
      }

      return getEarningsEvents;
    }(),
    getEarningSurprises: function () {
      var _ref59 = _asyncToGenerator(regeneratorRuntime.mark(function _callee46(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.prev = 0;
                _context46.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/earnings/surprises';
                _context46.next = 6;
                return request.get(url);

              case 6:
                response = _context46.sent;

                if (!(response.status === 200)) {
                  _context46.next = 11;
                  break;
                }

                return _context46.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context46.abrupt('return', { error: response.statusText });

              case 13:
                _context46.next = 18;
                break;

              case 15:
                _context46.prev = 15;
                _context46.t0 = _context46['catch'](0);

                console.warn(_context46.t0);

              case 18:
              case 'end':
                return _context46.stop();
            }
          }
        }, _callee46, _this, [[0, 15]]);
      }));

      function getEarningSurprises(_x42) {
        return _ref59.apply(this, arguments);
      }

      return getEarningSurprises;
    }(),
    getFinancials: function () {
      var _ref60 = _asyncToGenerator(regeneratorRuntime.mark(function _callee47(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.prev = 0;
                _context47.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/financials';
                _context47.next = 6;
                return request.get(url);

              case 6:
                response = _context47.sent;

                if (!(response.status === 200)) {
                  _context47.next = 11;
                  break;
                }

                return _context47.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context47.abrupt('return', { error: response.statusText });

              case 13:
                _context47.next = 18;
                break;

              case 15:
                _context47.prev = 15;
                _context47.t0 = _context47['catch'](0);

                console.warn(_context47.t0);

              case 18:
              case 'end':
                return _context47.stop();
            }
          }
        }, _callee47, _this, [[0, 15]]);
      }));

      function getFinancials(_x43) {
        return _ref60.apply(this, arguments);
      }

      return getFinancials;
    }(),
    getCompanyNews: function () {
      var _ref61 = _asyncToGenerator(regeneratorRuntime.mark(function _callee48(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.prev = 0;
                _context48.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/news';
                _context48.next = 6;
                return request.get(url);

              case 6:
                response = _context48.sent;

                if (!(response.status === 200)) {
                  _context48.next = 11;
                  break;
                }

                return _context48.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context48.abrupt('return', { error: response.statusText });

              case 13:
                _context48.next = 18;
                break;

              case 15:
                _context48.prev = 15;
                _context48.t0 = _context48['catch'](0);

                console.warn(_context48.t0);

              case 18:
              case 'end':
                return _context48.stop();
            }
          }
        }, _callee48, _this, [[0, 15]]);
      }));

      function getCompanyNews(_x44) {
        return _ref61.apply(this, arguments);
      }

      return getCompanyNews;
    }(),
    getCompanyOwnership: function () {
      var _ref62 = _asyncToGenerator(regeneratorRuntime.mark(function _callee49(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.prev = 0;
                _context49.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/ownership';
                _context49.next = 6;
                return request.get(url);

              case 6:
                response = _context49.sent;

                if (!(response.status === 200)) {
                  _context49.next = 11;
                  break;
                }

                return _context49.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context49.abrupt('return', { error: response.statusText });

              case 13:
                _context49.next = 18;
                break;

              case 15:
                _context49.prev = 15;
                _context49.t0 = _context49['catch'](0);

                console.warn(_context49.t0);

              case 18:
              case 'end':
                return _context49.stop();
            }
          }
        }, _callee49, _this, [[0, 15]]);
      }));

      function getCompanyOwnership(_x45) {
        return _ref62.apply(this, arguments);
      }

      return getCompanyOwnership;
    }(),
    getCompanyProfile: function () {
      var _ref63 = _asyncToGenerator(regeneratorRuntime.mark(function _callee50(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.prev = 0;
                _context50.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/profile';
                _context50.next = 6;
                return request.get(url);

              case 6:
                response = _context50.sent;

                if (!(response.status === 200)) {
                  _context50.next = 11;
                  break;
                }

                return _context50.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context50.abrupt('return', { error: response.statusText });

              case 13:
                _context50.next = 18;
                break;

              case 15:
                _context50.prev = 15;
                _context50.t0 = _context50['catch'](0);

                console.warn(_context50.t0);

              case 18:
              case 'end':
                return _context50.stop();
            }
          }
        }, _callee50, _this, [[0, 15]]);
      }));

      function getCompanyProfile(_x46) {
        return _ref63.apply(this, arguments);
      }

      return getCompanyProfile;
    }(),
    getCompanyRatios: function () {
      var _ref64 = _asyncToGenerator(regeneratorRuntime.mark(function _callee51(options) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _context51.prev = 0;
                _context51.next = 3;
                return _this.prepareHeaders();

              case 3:
                url = _this.endpoint + '/v1/market/symbols/' + options.symbol + '/company/ratios';
                _context51.next = 6;
                return request.get(url);

              case 6:
                response = _context51.sent;

                if (!(response.status === 200)) {
                  _context51.next = 11;
                  break;
                }

                return _context51.abrupt('return', response.data);

              case 11:
                console.warn(response.data);
                return _context51.abrupt('return', { error: response.statusText });

              case 13:
                _context51.next = 18;
                break;

              case 15:
                _context51.prev = 15;
                _context51.t0 = _context51['catch'](0);

                console.warn(_context51.t0);

              case 18:
              case 'end':
                return _context51.stop();
            }
          }
        }, _callee51, _this, [[0, 15]]);
      }));

      function getCompanyRatios(_x47) {
        return _ref64.apply(this, arguments);
      }

      return getCompanyRatios;
    }()
  };
};

// let t = new Tpt(process.env.TPT_API_KEY, process.env.TPT_API_SECRET, process.env.TPT_ENDPOINT);
// let account_id = 'b11b3629-aed8-41ca-b916-16bc2a097369';
//
// t.transfers.getAll({ account_id });

exports.default = Tpt;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("flat-file-db");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(15),
    hasPath = __webpack_require__(16);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(17),
    isArguments = __webpack_require__(55),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(57),
    isLength = __webpack_require__(58),
    toKey = __webpack_require__(59);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(18),
    stringToPath = __webpack_require__(22),
    toString = __webpack_require__(52);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(4);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(23);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(24);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(25);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(26),
    mapCacheDelete = __webpack_require__(47),
    mapCacheGet = __webpack_require__(49),
    mapCacheHas = __webpack_require__(50),
    mapCacheSet = __webpack_require__(51);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(27),
    ListCache = __webpack_require__(39),
    Map = __webpack_require__(46);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(28),
    hashDelete = __webpack_require__(35),
    hashGet = __webpack_require__(36),
    hashHas = __webpack_require__(37),
    hashSet = __webpack_require__(38);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(30),
    isMasked = __webpack_require__(31),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(33);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(10);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(32);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(40),
    listCacheDelete = __webpack_require__(41),
    listCacheGet = __webpack_require__(43),
    listCacheHas = __webpack_require__(44),
    listCacheSet = __webpack_require__(45);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(53);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(6),
    arrayMap = __webpack_require__(54),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(4);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(56),
    isObjectLike = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(4);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })
/******/ ]);
});
//# sourceMappingURL=tpt-api.js.map