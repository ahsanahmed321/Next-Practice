module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./Store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: GET_ERRORS, SET_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
const GET_ERRORS = "GET_ERRORS";
const SET_CURRENT_USER = "SET_CURRENT_USER";

/***/ }),

/***/ "./Store/actions/authActions.js":
/*!**************************************!*\
  !*** ./Store/actions/authActions.js ***!
  \**************************************/
/*! exports provided: registerUser, loginUser, setCurrentUSer, logoutCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUSer", function() { return setCurrentUSer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCurrentUser", function() { return logoutCurrentUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./Store/actions/actionTypes.js");
/* harmony import */ var _utils_set_auth_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/set-auth-token */ "./utils/set-auth-token.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);



 //  Register Users

const registerUser = (userData, history) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/register", userData).then(res => history.push("/Auth/login")).catch(err => dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_ERRORS"],
    payload: err.response.data
  }));
}; // Login User and Get Token

const loginUser = userData => dispatch => {
  console.log("Hi");
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:5000/auth/signin", userData).then(res => {
    console.log("bye"); // get token

    console.log(res.data);
    const token = "bearer " + res.data; // save token to loacal storage

    localStorage.setItem("token", token); // set token to Auth Header

    Object(_utils_set_auth_token__WEBPACK_IMPORTED_MODULE_2__["default"])(token); //decode token to get user data

    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token); // set current user

    dispatch(setCurrentUSer(decoded));
  }).catch(err => dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_ERRORS"],
    payload: err.response.data
  }));
}; // set logged in user

const setCurrentUSer = decoded => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"],
    payload: decoded
  };
}; //logout current user

const logoutCurrentUser = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem("jwtToken"); //Remove auth Header

  Object(_utils_set_auth_token__WEBPACK_IMPORTED_MODULE_2__["default"])(false); // set current user to {}

  dispatch(setCurrentUSer({}));
};

/***/ }),

/***/ "./pages/auth2.js":
/*!************************!*\
  !*** ./pages/auth2.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/actions/authActions */ "./Store/actions/authActions.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Next Projects\\first-project\\pages\\auth2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});

    _defineProperty(this, "onChangeAddHandler", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    {
      console.log(this.state);
    }
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Username"), __jsx("input", {
      name: "username",
      onChange: e => this.onChangeAddHandler(e),
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Password"), __jsx("input", {
      name: "password",
      onChange: e => this.onChangeAddHandler(e),
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("button", {
      onClick: () => this.props.loginUser(this.state),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "sign in"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "hello"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, this.props.counter));
  }

}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loginUser: _Store_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["loginUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./utils/set-auth-token.js":
/*!*********************************!*\
  !*** ./utils/set-auth-token.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = token;
  } else {
    //delete axios header
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/auth2.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Next Projects\first-project\pages\auth2.js */"./pages/auth2.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=auth2.js.map