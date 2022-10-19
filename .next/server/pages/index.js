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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGFmb3JtYS8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3M/ZjU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVCdXR0b25cIjogXCJzdHlsZXNfc3Vic2NyaWJlQnV0dG9uX181MmM2dVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGFmb3JtYS8uL3NyYy9wYWdlcy9ob21lLm1vZHVsZS5zY3NzPzY0NWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcImhvbWVfY29udGVudENvbnRhaW5lcl9fSFl1TjhcIixcblx0XCJoZXJvXCI6IFwiaG9tZV9oZXJvX19saHBXU1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\");\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push(\"/posts\");\n            return;\n            return;\n        }\n        //crianção da checkout session\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId: sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Inscreva-Se Agora\"\n    }, void 0, false, {\n        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFDYjtBQUNDO0FBQ2M7QUFDZDtBQU1sQyxTQUFVTSxlQUFlLENBQUUsRUFBRUMsT0FBTyxHQUF3QixFQUFFO0lBQ25FLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR1QsMkRBQVUsRUFBRTtJQUN0QyxNQUFNVSxNQUFNLEdBQUdSLHNEQUFTLEVBQUc7SUFFM0IsZUFBZVMsZUFBZSxHQUFFO1FBQzlCLElBQUksQ0FBQ0YsT0FBTyxFQUFDO1lBQ1hSLHVEQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSVEsT0FBTyxDQUFDRyxrQkFBa0IsRUFBRTtZQUU5QkYsTUFBTSxDQUFDRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUVQLE9BQU87U0FDUjtRQUVDLDhCQUE4QjtRQUNoQyxJQUFHO1lBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1YLG1EQUFRLENBQUMsWUFBWSxDQUFDO1lBQzdDLE1BQU0sRUFBRWEsU0FBUyxHQUFFLEdBQUdGLFFBQVEsQ0FBQ04sSUFBSTtZQUVuQyxNQUFNUyxNQUFNLEdBQUcsTUFBTWIsZ0VBQVcsRUFBRTtZQUVsQyxNQUFNYSxNQUFNLENBQUNDLGtCQUFrQixDQUFDO2dCQUFFRixTQUFTLEVBQUVBLFNBQVM7YUFBQyxDQUFDO1NBQ3pELENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0MsSUFBSSxFQUFDLFFBQVE7UUFDckJDLFNBQVMsRUFBRW5CLDRFQUFzQjtRQUNqQ3FCLE9BQU8sRUFBRWYsZUFBZTtrQkFDdkIsbUJBRUQ7Ozs7O1lBQVMsQ0FDVDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGFmb3JtYS8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBTdWJzY3JpYmVCdXR0b25Qcm9wc3tcbnByaWNlSWQ6IFN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICBTdWJzY3JpYmVCdXR0b24gKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyICgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCl7XG4gICAgaWYgKCFzZXNzaW9uKXtcbiAgICAgIHNpZ25JbignZ29vZ2xlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlc3Npb24uYWN0aXZlU3Vic2NyaXB0aW9uKSB7XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvcG9zdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICAgLy9jcmlhbsOnw6NvIGRhIGNoZWNrb3V0IHNlc3Npb25cbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcbiAgICAgIGNvbnN0IHsgc2Vzc2lvbklkIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpXG5cbiAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQ6IHNlc3Npb25JZH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn1cbiAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPlxuICAgICAgSW5zY3JldmEtU2UgQWdvcmFcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInVzZVJvdXRlciIsImFwaSIsImdldFN0cmlwZUpzIiwic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwiaGFuZGxlU3Vic2NyaWJlIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwicHVzaCIsInJlc3BvbnNlIiwicG9zdCIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | Brain 86\"\n                }, void 0, false, {\n                    fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Bem-Vindo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Tenha ajuda de outros \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"alunos \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 35\n                                    }, this),\n                                    \"Entre no Brain 86\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Cadastre-se e tenha acesso a plataforma\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 50\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"por \",\n                                            product.amount,\n                                            \" mensal\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Garota Estudando\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diegocpc/Desktop/brain86/plataforma/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1LZdRYCeGulJHQeQrsgUt5cf\", {\n        expand: [\n            \"product\"\n        ]\n    });\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"pt-BR\", {\n            style: \"currency\",\n            currency: \"BRL\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUVtQztBQUNwQjtBQUVIO0FBUzFCLFNBQVNJLElBQUksQ0FBQyxFQUFDQyxPQUFPLEdBQVksRUFBQztJQUNoRCxxQkFDRTs7MEJBQ0EsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLGlCQUFlOzs7Ozt3QkFBUTs7Ozs7b0JBQ3ZCOzBCQUVULDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7a0NBQ3RDLDhEQUFDTyxTQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzswQ0FDN0IsOERBQUNTLE1BQUk7MENBQUMsd0JBQVc7Ozs7O29DQUFPOzBDQUN4Qiw4REFBQ0MsSUFBRTs7b0NBQUMsd0JBQXNCO2tEQUFBLDhEQUFDRCxNQUFJO2tEQUFDLFNBQU87Ozs7OzRDQUFPO29DQUFBLG1CQUFpQjs7Ozs7O29DQUFLOzBDQUNwRSw4REFBQ0UsR0FBQzs7b0NBQUMseUNBQ3NDO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzRDQUFFO2tEQUM5Qyw4REFBQ0gsTUFBSTs7NENBQUMsTUFBSTs0Q0FBQ1AsT0FBTyxDQUFDVyxNQUFNOzRDQUFDLFNBQU87Ozs7Ozs0Q0FBTzs7Ozs7O29DQUNwQzswQ0FDSiw4REFBQ2Ysd0VBQWU7Z0NBQUNnQixPQUFPLEVBQUVaLE9BQU8sQ0FBQ1ksT0FBTzs7Ozs7b0NBQUk7Ozs7Ozs0QkFDckM7a0NBRVYsOERBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxvQkFBb0I7d0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xEOztvQkFFSixDQUNKO0NBQ0Y7QUFFTSxNQUFNQyxjQUFjLEdBQW1CLFVBQVk7SUFDeEQsTUFBTUMsS0FBSyxHQUFHLE1BQU1wQixvRUFBc0IsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUMzRXVCLE1BQU0sRUFBRTtZQUFDLFNBQVM7U0FBQztLQUNwQixDQUFDO0lBQ0YsTUFBTXBCLE9BQU8sR0FBRztRQUNkWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0ksRUFBRTtRQUNqQlYsTUFBTSxFQUFFLElBQUlXLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBQztZQUNwQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLLENBQUNVLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDbkM7SUFFRCxPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNMNUIsT0FBTztTQUNSO1FBQ0Q2QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQzNCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0YWZvcm1hLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnOyBcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5cbmltcG9ydCAgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogU3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwcm9kdWN0fTogSG9tZVByb3BzKXtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWUgfCBCcmFpbiA4NjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICA8c3Bhbj7wn5GPIEJlbS1WaW5kbzwvc3Bhbj5cbiAgICAgICAgPGgxPlRlbmhhIGFqdWRhIGRlIG91dHJvcyA8c3Bhbj5hbHVub3MgPC9zcGFuPkVudHJlIG5vIEJyYWluIDg2PC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FkYXN0cmUtc2UgZSB0ZW5oYSBhY2Vzc28gYSBwbGF0YWZvcm1hPGJyLz5cbiAgICAgICAgPHNwYW4+cG9yIHtwcm9kdWN0LmFtb3VudH0gbWVuc2FsPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdhcm90YSBFc3R1ZGFuZG9cIiAvPlxuICAgIDwvbWFpbj5cbiAgICBcbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFMWmRSWUNlR3VsSkhRZVFyc2dVdDVjZicsIHtcbiAgICBleHBhbmQ6IFsncHJvZHVjdCddXG4gIH0pXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJyx7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnQlJMJ1xuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2R1Y3QsXG4gICAgICB9LFxuICAgICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTdWJzY3JpYmVCdXR0b24iLCJzdHJpcGUiLCJzdHlsZXMiLCJIb21lIiwicHJvZHVjdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRlbnRDb250YWluZXIiLCJzZWN0aW9uIiwiaGVybyIsInNwYW4iLCJoMSIsInAiLCJiciIsImFtb3VudCIsInByaWNlSWQiLCJpbWciLCJzcmMiLCJhbHQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJleHBhbmQiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVsQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0YWZvcm1hLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICcvYXBpJ1xufSkiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51LZdPWCeGulJHQeQC51lMSpvZyTiMX03vfK7IQbChq9C02Lz1SGynkmeU3TVXbRPCtAPlBN1aNa9ZdynuS56ReCL001mh8dZH0\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUc7SUFDbEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0YWZvcm1hLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS1qcy50cz81OThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCkge1xuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpXG5cbiAgcmV0dXJuIHN0cmlwZUpzXG59Il0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2022-08-01\",\n    appInfo: {\n        name: \"plataforma\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVwQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0VDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFlBQVk7S0FFbkI7Q0FFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGFmb3JtYS8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/YWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSdcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjItMDgtMDEnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6ICdwbGF0YWZvcm1hJyxcbiAgICBcbiAgICB9LFxuICBcbiAgfSkiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();