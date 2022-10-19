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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session  }) {\n            try {\n                const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_user_ref\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))),\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_status\"), \"active\")\n                ])));\n                return {\n                    ...session,\n                    activeSubscription: userActiveSubscription\n                };\n            } catch  {\n                return {\n                    ...session,\n                    activeSubscription: null\n                };\n            }\n        },\n        async signIn (params) {\n            const { email  } = params.user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNKO0FBQ3VCO0FBQ1I7QUFFaEQsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQy9DLENBQUM7S0FDSDtJQUVEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUUsRUFBQ0EsT0FBTyxHQUFDLEVBQUU7WUFDeEIsSUFBSTtnQkFDRixNQUFNQyxzQkFBc0IsR0FBRyxNQUFNVix3REFBVyxDQUM5Q0gsOENBQUssQ0FDSEEsdURBQWMsQ0FBQztvQkFDYkEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUNuQ0EsaURBQVEsQ0FDTixLQUFLLEVBQ0xBLDhDQUFLLENBQ0hBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZUFBZSxDQUFDLEVBQ3hCQSxtREFBVSxDQUFDWSxPQUFPLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQy9CLENBQ0YsQ0FDRixDQUNGO29CQUNEckIsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUNqQyxRQUFRLENBQ1Q7aUJBQ0EsQ0FBQyxDQUNMLENBQ0Y7Z0JBRUQsT0FBTztvQkFDTCxHQUFHWSxPQUFPO29CQUNWVSxrQkFBa0IsRUFBRVQsc0JBQXNCO2lCQUMzQzthQUNGLENBQUMsT0FBTTtnQkFDTixPQUFPO29CQUNMLEdBQUdELE9BQU87b0JBQ1ZVLGtCQUFrQixFQUFFLElBQUk7aUJBQ3pCO2FBQ0Y7U0FDRjtRQUVELE1BQU1DLE1BQU0sRUFBQ0MsTUFBTSxFQUFFO1lBQ25CLE1BQU0sRUFBRUgsS0FBSyxHQUFFLEdBQUdHLE1BQU0sQ0FBQ0osSUFBSTtZQUU3QixJQUFJO2dCQUNGLE1BQU1qQix3REFBVyxDQUNmSCw2Q0FBSSxDQUNGQSw4Q0FBSyxDQUNIQSxpREFBUSxDQUNMQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGVBQWUsQ0FBQyxFQUN6QkEsbURBQVUsQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDeEIsRUFDRHJCLGlEQUFRLENBQ0xBLHFEQUFZLENBQ1YsT0FBTyxDQUFDLEVBQ1Q7b0JBQUU4QixJQUFJLEVBQUU7d0JBQUVULEtBQUs7cUJBQUU7aUJBQUUsQ0FBQyxFQUN4QnJCLDhDQUFLLENBQ0ZBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZUFBZSxDQUFDLEVBQ3ZCQSxtREFBVSxDQUFDcUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUMxQixDQUNGLENBQUM7Z0JBRUYsT0FBTyxJQUFJLENBQUM7YUFDYixDQUFDLE9BQU07Z0JBQ04sT0FBTyxLQUFLLENBQUM7YUFDZDtTQUdGO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0YWZvcm1hLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSlcbiAgXSxcbiAgXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24gKHtzZXNzaW9ufSkge1xuICAgICAgdHJ5IHsgXG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgIHEuSW50ZXJzZWN0aW9uKFtcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWYnKSxcbiAgICAgICAgICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfc3RhdHVzJyksXG4gICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uLFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBzaWduSW4ocGFyYW1zKSB7XG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSBwYXJhbXMudXNlcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5JZihcbiAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICBxLkV4aXN0c1xuICAgICAgICAgICAgICAgIChxLk1hdGNoXG4gICAgICAgICAgICAgICAgICAocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKSkpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcS5DcmVhdGVcbiAgICAgICAgICAgICAgKHEuQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgIChcInVzZXJzXCIpLFxuICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH0pLFxuICAgICAgICAgICAgcS5HZXRcbiAgICAgICAgICAgICAgKHEuTWF0Y2hcbiAgICAgICAgICAgICAgICAocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgXG4gICAgfSxcbiAgfSxcbn0pOyJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsIkdldCIsIkludGVyc2VjdGlvbiIsIk1hdGNoIiwiSW5kZXgiLCJTZWxlY3QiLCJDYXNlZm9sZCIsInVzZXIiLCJlbWFpbCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInNpZ25JbiIsInBhcmFtcyIsIklmIiwiTm90IiwiRXhpc3RzIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

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