"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(config)/sucursales/page",{

/***/ "(app-pages-browser)/./app/lib/dataservice/APIService.tsx":
/*!********************************************!*\
  !*** ./app/lib/dataservice/APIService.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiService: function() { return /* binding */ ApiService; }\n/* harmony export */ });\n/* harmony import */ var _dialogs_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/dialogs */ \"(app-pages-browser)/./app/lib/dialogs/dialogs.tsx\");\n\nclass ApiService {\n    async CallAPI(method, url, payload) {\n        let parameters = {};\n        if (method !== \"GET\") {\n            parameters = {\n                method: method,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            };\n        } else {\n            parameters = {\n                method: method,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            };\n        }\n        const res = await fetch(this.url_base + url, parameters);\n        console.log(res);\n        //check the status of the response\n        if (res.status === 200) {\n            return {\n                \"status\": 200,\n                \"response\": await res.json()\n            };\n        } else {\n            if (res.status === 500) {\n                console.log(res);\n                this.dialogoService.show_toast(\"Error en el proceso, favor contacto a su administrador\", \"ERROR\");\n                return {\n                    \"status\": res.status,\n                    \"response\": await res.text()\n                };\n            }\n            this.dialogoService.show_toast(\"Operaci\\xf3n no completada:\" + res.text(), \"INFO\");\n            return {\n                \"status\": res.status,\n                \"response\": await res.text()\n            };\n        //throw new Error(await res.text());\n        }\n    }\n    constructor(){\n        this.dialogoService = new _dialogs_dialogs__WEBPACK_IMPORTED_MODULE_0__.Dialogo();\n        this.url_base = \"http://localhost:8000\";\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvZGF0YXNlcnZpY2UvQVBJU2VydmljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFVdEMsTUFBTUM7SUFhYixNQUFNQyxRQUFRQyxNQUFhLEVBQUNDLEdBQVUsRUFBQ0MsT0FBVyxFQUNqRDtRQUNHLElBQUlDLGFBQVcsQ0FBQztRQUVoQixJQUFJSCxXQUFXLE9BQU87WUFDbEJHLGFBQVc7Z0JBQ1BILFFBQVFBO2dCQUNSSSxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7WUFDN0I7UUFFQSxPQUFLO1lBQ0RDLGFBQVc7Z0JBQ1BILFFBQVFBO2dCQUNSSSxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtRQUNKO1FBS0EsTUFBTUksTUFBTSxNQUFNQyxNQUFNLElBQUksQ0FBQ0MsUUFBUSxHQUFHVCxLQUFJRTtRQUU1Q1EsUUFBUUMsR0FBRyxDQUFDSjtRQUtaLGtDQUFrQztRQUNsQyxJQUFJQSxJQUFJSyxNQUFNLEtBQUssS0FBSztZQUNwQixPQUFPO2dCQUFDLFVBQVU7Z0JBQUssWUFBWSxNQUFNTCxJQUFJTSxJQUFJO1lBQUc7UUFDeEQsT0FBTztZQUNILElBQUlOLElBQUlLLE1BQU0sS0FBSyxLQUFLO2dCQUNwQkYsUUFBUUMsR0FBRyxDQUFDSjtnQkFDWixJQUFJLENBQUNPLGNBQWMsQ0FBQ0MsVUFBVSxDQUFDLDBEQUUvQjtnQkFDQSxPQUFPO29CQUFDLFVBQVVSLElBQUlLLE1BQU07b0JBQUUsWUFBVyxNQUFNTCxJQUFJUyxJQUFJO2dCQUFFO1lBQzdEO1lBQ0EsSUFBSSxDQUFDRixjQUFjLENBQUNDLFVBQVUsQ0FBQyxnQ0FBNkJSLElBQUlTLElBQUksSUFBTztZQUUzRSxPQUFPO2dCQUFDLFVBQVVULElBQUlLLE1BQU07Z0JBQUUsWUFBVyxNQUFNTCxJQUFJUyxJQUFJO1lBQUU7UUFDekQsb0NBQW9DO1FBSTVDO0lBQ0M7SUE1REdDLGFBQWM7YUFLTkgsaUJBQWlCLElBQUlsQixxREFBT0E7UUFKaEMsSUFBSSxDQUFDYSxRQUFRLEdBQUc7SUFFcEI7QUEwREoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9kYXRhc2VydmljZS9BUElTZXJ2aWNlLnRzeD9jOTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpYWxvZ28gfSBmcm9tIFwiLi4vZGlhbG9ncy9kaWFsb2dzXCI7XG5cbi8vbGlzdCBvZiBmdW5jdGlvbnMgdG8gbWFrZSBjYWxsIG9mIHRoZSBhcGlzIHJlYWRpbmcgdGhlIGNvbmZpZyBmaWxlXG5pbnRlcmZhY2UgYXBpX2NhbGxfcGFyYW1ldGVyICB7XG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOnN0cmluZyxcbiAgICBwYXlsb2FkOiBhbnlcblxufVxuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZXtcblxuICAgXG4gICAgcHJpdmF0ZSB1cmxfYmFzZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVybF9iYXNlID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaWFsb2dvU2VydmljZSA9IG5ldyBEaWFsb2dvKCk7XG5cblxuXG5hc3luYyBDYWxsQVBJKG1ldGhvZDpzdHJpbmcsdXJsOnN0cmluZyxwYXlsb2FkOmFueSkgXG4ge1xuICAgIGxldCBwYXJhbWV0ZXJzPXt9XG5cbiAgICBpZiAobWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICBwYXJhbWV0ZXJzPXtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICB9ICAgIFxuICAgICAgICAgICBcbiAgICB9ZWxzZXtcbiAgICAgICAgcGFyYW1ldGVycz17XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gIFxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy51cmxfYmFzZSArIHVybCxwYXJhbWV0ZXJzICk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpXG5cblxuICAgIFxuXG4gICAgLy9jaGVjayB0aGUgc3RhdHVzIG9mIHRoZSByZXNwb25zZVxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHsnc3RhdHVzJzogMjAwLCAncmVzcG9uc2UnOiBhd2FpdCByZXMuanNvbigpIH0gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nb1NlcnZpY2Uuc2hvd190b2FzdChcIkVycm9yIGVuIGVsIHByb2Nlc28sIGZhdm9yIGNvbnRhY3RvIGEgc3UgYWRtaW5pc3RyYWRvclwiICAsICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXCJFUlJPUlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7J3N0YXR1cyc6IHJlcy5zdGF0dXMsICdyZXNwb25zZSc6YXdhaXQgcmVzLnRleHQoKX1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZ29TZXJ2aWNlLnNob3dfdG9hc3QoXCJPcGVyYWNpw7NuIG5vIGNvbXBsZXRhZGE6XCIgKyByZXMudGV4dCgpICwgICBcIklORk9cIikgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIHJldHVybiB7J3N0YXR1cyc6IHJlcy5zdGF0dXMsICdyZXNwb25zZSc6YXdhaXQgcmVzLnRleHQoKX1cbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgXG5cbiAgICBcbn1cbiB9XG59XG5cblxuIl0sIm5hbWVzIjpbIkRpYWxvZ28iLCJBcGlTZXJ2aWNlIiwiQ2FsbEFQSSIsIm1ldGhvZCIsInVybCIsInBheWxvYWQiLCJwYXJhbWV0ZXJzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiZmV0Y2giLCJ1cmxfYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZGlhbG9nb1NlcnZpY2UiLCJzaG93X3RvYXN0IiwidGV4dCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/dataservice/APIService.tsx\n"));

/***/ })

});