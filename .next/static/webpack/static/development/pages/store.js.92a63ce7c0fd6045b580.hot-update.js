webpackHotUpdate("static/development/pages/store.js",{

/***/ "./components/ShopMain.js":
false,

/***/ "./components/StoreIndex.js":
/*!**********************************!*\
  !*** ./components/StoreIndex.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
var _jsxFileName = "/Users/user/Desktop/nas_daily/components/StoreIndex.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var StoreIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StoreIndex, _React$Component);

  function StoreIndex() {
    var _this;

    _classCallCheck(this, StoreIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoreIndex).call(this));
    _this.state = {
      openedModal: false,
      showForm: false,
      showTshirtOnMobile: false,
      percent: null,
      tabOnMobile: 'video'
    };
    _this.navigateToSaltyGuys = _this.navigateToSaltyGuys.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBuyButtonClick = _this.onBuyButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setPercent = _this.setPercent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.shareOnFacebook = _this.shareOnFacebook.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(StoreIndex, [{
    key: "navigateToSaltyGuys",
    value: function navigateToSaltyGuys() {
      var percent = this.state.percent;

      if (!percent) {
        return;
      } // window.location.href = `http://shop.nasdaily.com/?percentage=${percent}`

    }
  }, {
    key: "onBuyButtonClick",
    value: function onBuyButtonClick() {
      if (this.formElement) {
        this.formElement.onSubmit({
          preventDefault: function preventDefault() {}
        }) && this.navigateToSaltyGuys();
      } else {
        this.navigateToSaltyGuys();
      }
    }
  }, {
    key: "setPercent",
    value: function setPercent(p) {
      var actualPercent = p && p > 100 ? 100 : p;
      this.setState({
        percent: actualPercent,
        showTshirtOnMobile: true
      });
      isMobile() && scrollTo(0, 0);
    }
  }, {
    key: "shareOnFacebook",
    value: function shareOnFacebook() {
      var percent = this.state.percent;
      var quote = percent || percent === 0 ? "I'm ".concat(percent, "% done with life! Check out your percentage at nasdaily.com/shop") : null; // FB.ui({
      //   method: 'share',
      //   href: 'https://www.nasdaily.com/shop',
      //   hashtag: '#nasdaily',
      //   quote: quote,
      // }, function(response){ console.log(response)});
    }
  }, {
    key: "render",
    value: function render() {
      var showFormOnMobile = this.state.showFormOnMobile;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nd-shop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, this.mainSection, this.videoModal);
    }
  }, {
    key: "videoModal",
    get: function get() {
      var _this2 = this;

      var openedModal = this.state.openedModal;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isOpen: openedModal,
        contentLabel: "Modal",
        onRequestClose: function onRequestClose() {
          _this2.setState({
            openedModal: false
          });

          scrollTo(0, 0);
        },
        style: _constants__WEBPACK_IMPORTED_MODULE_4__["modalStyles"],
        className: "react-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    }
  }, {
    key: "storyLandingSection",
    get: function get() {
      var _this3 = this;

      var videos = this.props.videos; // const tshirtVideo = videos.find(video => video.facebook_id === '877310772421076');

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--left-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "story-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "The"), " Story"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Watch the video behind the story of Nas Daily T-shirts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "shop-cta hide-on-small",
        onClick: function onClick() {
          return _this3.setState({
            openedModal: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Watch now"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tile show-on-small-only",
        onClick: function onClick() {
          return _this3.setState({
            openedModal: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tile__media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tile__details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tile__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))));
    }
  }, {
    key: "tshirtLandingSection",
    get: function get() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--right-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "tshirt-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "The"), " Tshirt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Click below to calculate and buy your new t-shirt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "shop-cta",
        onClick: function onClick() {
          _this4.setState({
            showForm: true
          });

          scrollTo(0, 0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Buy now"));
    }
  }, {
    key: "doneWithLife",
    get: function get() {
      var percent = this.state.percent;

      if (!percent && percent !== 0) {
        return;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "done-with-life",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "You are ", percent, "% done with life");
    }
  }, {
    key: "facebookShareButton",
    get: function get() {
      return (//   <a
        //     className='facebook-share-button'
        //     onClick={this.shareOnFacebook}
        //   >
        //     Share on Facebook
        //   </a>
        ''
      );
    }
  }, {
    key: "buyButton",
    get: function get() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "buy-button",
        onClick: this.onBuyButtonClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Buy T-shirt");
    }
  }, {
    key: "tshirtWithProgressBar",
    get: function get() {
      var _this5 = this;

      var percent = this.state.percent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--right-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tshirt-display-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this5.setState({
            percent: null,
            showTshirtOnMobile: false
          });
        },
        className: "arrow-back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        publicId: "arrow_back_ekioqi.svg",
        className: "arrow-back-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          fontSize: '40px',
          marginBottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "yellow-color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Result")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tshirt-images-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/tshirt_life.png",
        className: "tshirt-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), !isNull(percent) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "percentage-bar-image",
        src: "/assets/percentages/".concat(percent, ".png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "percentage-bar-image",
        src: "/assets/percentages/0_no_number.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), this.doneWithLife, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tshirt-cta-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, this.facebookShareButton, this.buyButton)));
    }
  }, {
    key: "form",
    get: function get() {
      var _this6 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopTabForm, {
        ref: function ref(r) {
          return _this6.formElement = r;
        },
        setPercent: this.setPercent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }));
    }
  }, {
    key: "leftSection",
    get: function get() {
      var showForm = this.state.showForm;

      if (showForm) {
        return this.form;
      }

      return this.storyLandingSection;
    }
  }, {
    key: "tshirtTab",
    get: function get() {
      var _this$state = this.state,
          showForm = _this$state.showForm,
          showTshirtOnMobile = _this$state.showTshirtOnMobile;

      if (showTshirtOnMobile) {
        return this.tshirtWithProgressBar;
      } else {
        return this.form;
      }
    }
  }, {
    key: "mainSection",
    get: function get() {
      var _this7 = this;

      var _this$state2 = this.state,
          showForm = _this$state2.showForm,
          tabOnMobile = _this$state2.tabOnMobile;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "show-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, tabOnMobile === 'video' ? this.storyLandingSection : this.tshirtTab), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('landing hide-on-small', {
          'show-form': showForm
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--left-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), this.leftSection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing--right-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), showForm ? this.tshirtWithProgressBar : this.tshirtLandingSection)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs-container show-on-small-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('tab', {
          active: tabOnMobile === 'video'
        }),
        onClick: function onClick() {
          _this7.setState({
            tabOnMobile: 'video'
          });

          scroll(0, 0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "The Story"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('tab', {
          active: tabOnMobile !== 'video'
        }),
        onClick: function onClick() {
          _this7.setState({
            tabOnMobile: 'calculator'
          });

          scroll(0, 0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "The T-shirt")));
    }
  }]);

  return StoreIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/store.js":
/*!************************!*\
  !*** ./pages/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_StoreIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StoreIndex */ "./components/StoreIndex.js");
var _jsxFileName = "/Users/user/Desktop/nas_daily/pages/store.js";




var Store = function Store() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/store")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=store.js.92a63ce7c0fd6045b580.hot-update.js.map