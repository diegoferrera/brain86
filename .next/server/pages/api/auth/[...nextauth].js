"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn (params) {\n            const { email  } = params.user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUVKO0FBQ3VCO0FBQ1I7QUFFaEQsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQy9DLENBQUM7S0FDSDtJQUVEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxNQUFNLEVBQUNDLE1BQU0sRUFBRTtZQUNuQixNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRCxNQUFNLENBQUNFLElBQUk7WUFFN0IsSUFBSTtnQkFDRixNQUFNWix3REFBVyxDQUNmSCw2Q0FBSSxDQUNGQSw4Q0FBSyxDQUNIQSxpREFBUSxDQUNMQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGVBQWUsQ0FBQyxFQUN6QkEsbURBQVUsQ0FBQ2MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUN4QixFQUNEZCxpREFBUSxDQUNMQSxxREFBWSxDQUNWLE9BQU8sQ0FBQyxFQUNUO29CQUFFd0IsSUFBSSxFQUFFO3dCQUFFVixLQUFLO3FCQUFFO2lCQUFFLENBQUMsRUFDeEJkLDhDQUFLLENBQ0ZBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZUFBZSxDQUFDLEVBQ3ZCQSxtREFBVSxDQUFDYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzFCLENBQ0YsQ0FBQztnQkFFRixPQUFPLElBQUksQ0FBQzthQUNiLENBQUMsT0FBTTtnQkFDTixPQUFPLEtBQUssQ0FBQzthQUNkO1NBR0Y7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXRhZm9ybWEvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pXG4gIF0sXG4gIFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4ocGFyYW1zKSB7XG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSBwYXJhbXMudXNlcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5JZihcbiAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICBxLkV4aXN0c1xuICAgICAgICAgICAgICAgIChxLk1hdGNoXG4gICAgICAgICAgICAgICAgICAocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKSkpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcS5DcmVhdGVcbiAgICAgICAgICAgICAgKHEuQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgIChcInVzZXJzXCIpLFxuICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH0pLFxuICAgICAgICAgICAgcS5HZXRcbiAgICAgICAgICAgICAgKHEuTWF0Y2hcbiAgICAgICAgICAgICAgICAocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgXG4gICAgfSxcbiAgfSxcbn0pOyJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJwYXJhbXMiLCJlbWFpbCIsInVzZXIiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiR2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.us.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzlCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0lBQy9CQyxNQUFNLEVBQUUsaUJBQWlCO0NBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0YWZvcm1hLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzMyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnZmF1bmFkYic7XG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICBkb21haW46IFwiZGIudXMuZmF1bmEuY29tXCIsXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSIsImRvbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();