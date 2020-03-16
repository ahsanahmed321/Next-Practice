webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./Store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./Store/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./Store/actions/actionTypes.js");
/* harmony import */ var _utils_is_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/is-empty */ "./utils/is-empty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  isAuthenticated: false,
  user: {}
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"]:
      return _objectSpread({}, state, {
        isAuthenticated: !Object(_utils_is_empty__WEBPACK_IMPORTED_MODULE_2__["default"])(action.payload),
        user: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./utils/is-empty.js":
/*!***************************!*\
  !*** ./utils/is-empty.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ })

})
//# sourceMappingURL=_app.js.664127524e3a54bb14f3.hot-update.js.map