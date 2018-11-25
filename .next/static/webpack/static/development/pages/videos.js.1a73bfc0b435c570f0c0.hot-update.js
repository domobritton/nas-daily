webpackHotUpdate("static/development/pages/videos.js",{

/***/ "./components/LoadVideos.js":
false,

/***/ "./components/VideosIndex.js":
/*!***********************************!*\
  !*** ./components/VideosIndex.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideosIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/user/Desktop/nas_daily/components/VideosIndex.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import LoadVideos from './LoadVideos';



var VideosIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideosIndex, _React$Component);

  function VideosIndex(props) {
    var _this;

    _classCallCheck(this, VideosIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideosIndex).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (value) {
      _this.setState({
        inputValue: value
      });

      _this.asyncOnChange(value);
    });

    _this.state = {
      videoId: null,
      videos: props.videos,
      resetMaxVideos: true,
      inputValue: ''
    };
    _this.asyncOnChange = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(_this.asyncOnChange, 200);
    return _this;
  } //   componentWillReceiveProps(nextProps) {
  //     this.setState({
  //       videos: nextProps.videos,
  //       resetMaxVideos: false
  //     });
  //   }


  _createClass(VideosIndex, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.videos !== this.props.videos) {
        //Perform some operation here
        this.setState({
          videos: this.props.videos,
          resetMaxVideos: false
        });
        this.classMethod();
      }
    }
  }, {
    key: "asyncOnChange",
    value: function asyncOnChange(value) {
      if (value === '') {
        this.setState({
          videos: this.props.videos,
          resetMaxVideos: true
        });
      } else {
        var sortOptions = {
          threshold: 0.3,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ['title', 'content_tags']
        };
        var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.props.videos, sortOptions);
        this.setState({
          videos: fuse.search(value),
          resetMaxVideos: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.search, this.videos);
    }
  }, {
    key: "search",
    get: function get() {
      var _this2 = this;

      var inputValue = this.state.inputValue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          e.persist();

          _this2.onInputChange(e.target.value);
        },
        onKeyPress: function onKeyPress(e) {
          e.key === 'Enter' && _this2.searchInput.blur();
        },
        placeholder: "Search videos...",
        tabIndex: "1",
        ref: function ref(_ref) {
          return _this2.searchInput = _ref;
        },
        value: inputValue,
        spellCheck: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, inputValue.replace(/ /g, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('cancel-input', {
          active: inputValue.length > 0
        }),
        onClick: function onClick() {
          return _this2.onInputChange('');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "x")));
    }
  }, {
    key: "videos",
    get: function get() {
      var _this$state = this.state,
          videos = _this$state.videos,
          videoId = _this$state.videoId,
          resetMaxVideos = _this$state.resetMaxVideos;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-videos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "videos-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Videos (".concat(videos ? videos.length : '0', ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadVideos, {
        videos: videos,
        resetMaxVideos: resetMaxVideos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.videos !== prevState.videos) {
        return {
          videos: nextProps.videos
        };
      } else return null;
    }
  }]);

  return VideosIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/react-preload/lib/ImageCache.js":
false,

/***/ "./node_modules/react-preload/lib/ImageHelper.js":
false,

/***/ "./node_modules/react-preload/lib/Preload.js":
false,

/***/ "./node_modules/react-preload/lib/index.js":
false

})
//# sourceMappingURL=videos.js.1a73bfc0b435c570f0c0.hot-update.js.map