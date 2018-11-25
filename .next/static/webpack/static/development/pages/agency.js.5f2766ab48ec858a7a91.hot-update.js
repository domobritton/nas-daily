webpackHotUpdate("static/development/pages/agency.js",{

/***/ "./components/AgencyIndex.js":
/*!***********************************!*\
  !*** ./components/AgencyIndex.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgencyIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
var _jsxFileName = "/Users/user/Desktop/nas_daily/components/AgencyIndex.js";


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



var AgencyIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AgencyIndex, _React$Component);

  function AgencyIndex() {
    var _this;

    _classCallCheck(this, AgencyIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AgencyIndex).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showVideo", function (videoId) {
      _this.setState({
        videoId: videoId
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
      _this.setState({
        videoId: null
      });
    });

    _this.state = {
      videoId: null
    };
    return _this;
  }

  _createClass(AgencyIndex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "nd-agency-intro-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Nas Daily ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Agency")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "nd-agency-intro-subheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "People best connect with People.\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), "We tell the story of your brand through your community.\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-intro-cards-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-intro-card card-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agency-card-icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/agency/card-icon-1.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "agency-card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Less than ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "$100K"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-intro-card card-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agency-card-icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/agency/card-icon-2.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "agency-card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Less than ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "30"), " days")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-intro-card card-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agency-card-icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/agency/card-icon-3.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "agency-card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "More than ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "1,000,000"), " reach")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-featured-videos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "nd-agency-videos-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Featured Videos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "nd-agency-videos-subheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Stories that matter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-videos-tabs-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Tech")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Travel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Food & Drink")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Lifestyle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Social Enterprise"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-agency-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "nd-agency-contact-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "nd-agency-contact-subheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Drop us an enquiry or just say hello!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "messenger-button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "messenger-button",
        href: "https://m.me/nasdaily",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Connect Instantly"))), this.modal);
    }
  }, {
    key: "modal",
    get: function get() {
      var videoId = this.state.videoId; // const { videos } = this.props;

      var videos = [];
      return (//   <Modal
        //     onClose={this.closeModal}
        //     videoId={videoId}
        //     videos={videos}
        //   />
        ''
      );
    }
  }]);

  return AgencyIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=agency.js.5f2766ab48ec858a7a91.hot-update.js.map