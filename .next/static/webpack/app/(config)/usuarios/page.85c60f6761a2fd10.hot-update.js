"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(config)/usuarios/page",{

/***/ "(app-pages-browser)/./app/(config)/usuarios/page.tsx":
/*!****************************************!*\
  !*** ./app/(config)/usuarios/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_componentes_pagina_titulo_paginaTitulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/componentes/pagina_titulo/paginaTitulo */ \"(app-pages-browser)/./app/componentes/pagina_titulo/paginaTitulo.tsx\");\n/* harmony import */ var _app_lib_dataservice_APIService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/dataservice/APIService */ \"(app-pages-browser)/./app/lib/dataservice/APIService.tsx\");\n/* harmony import */ var _app_lib_dialogs_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/dialogs/dialogs */ \"(app-pages-browser)/./app/lib/dialogs/dialogs.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Usuarios() {\n    _s();\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(\"\");\n    const [nombre, setNombre] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(\"\");\n    const [activo, setActivo] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(true);\n    const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(2); //1 admin, 2 usuario \n    const [listaUsuarios, setListaUsuarios] = react__WEBPACK_IMPORTED_MODULE_4___default().useState([]);\n    const apiService = new _app_lib_dataservice_APIService__WEBPACK_IMPORTED_MODULE_2__.ApiService();\n    const dialogos = new _app_lib_dialogs_dialogs__WEBPACK_IMPORTED_MODULE_3__.Dialogo();\n    const obtenerUsuario = async ()=>{\n        try {\n            apiService.CallAPI(\"GET\", \"/api/inventory/lista_usuarios\", {}).then((response)=>{\n                if (response.status === 200) {\n                    setListaUsuarios(response.response.data);\n                }\n            });\n        } catch (error) {\n            dialogos.show_toast(\"Error en el proceso\", \"ERROR\");\n        }\n    };\n    const agregarUsuario = async ()=>{\n        try {\n            apiService.CallAPI(\"POST\", \"/api/inventory/agregar_usuario\", {\n                correo: email,\n                nombre: nombre,\n                usuario: email,\n                activo: activo,\n                role_id: role\n            }).then((response)=>{\n                if (response.status === 200) {\n                    dialogos.show_toast(\"Usuario agregado correctamente\", \"SUCCESS\");\n                }\n            });\n        } catch (error) {\n            dialogos.show_toast(\"Error en el proceso\", \"ERROR\");\n        }\n    };\n    const actualizarUsuario = async ()=>{\n        try {\n            apiService.CallAPI(\"POST\", \"/api/inventory/agregar_usuario\", {\n                correo: email,\n                nombre: nombre,\n                usuario: email,\n                activo: activo,\n                role_id: role\n            }).then((response)=>{\n                if (response.status === 200) {\n                    dialogos.show_toast(\"Usuario agregado correctamente\", \"SUCCESS\");\n                }\n            });\n        } catch (error) {\n            dialogos.show_toast(\"Error en el proceso\", \"ERROR\");\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{\n        obtenerUsuario();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_componentes_pagina_titulo_paginaTitulo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                titulo: \"Administraci\\xf3n de usuarios\"\n            }, void 0, false, {\n                fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 m-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"form-control space-y-8 > * + *\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"label\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    type: \"text\",\n                                    placeholder: \"Email\",\n                                    required: true,\n                                    className: \"input input-bordered input-info w-full\",\n                                    value: email\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"label\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"nombre\",\n                                    type: \"text\",\n                                    placeholder: \"Nombre\",\n                                    required: true,\n                                    className: \"input input-bordered input-info w-full\",\n                                    value: nombre\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control w-52\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"cursor-pointer label\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label-text\",\n                                        children: \"Usuario Activo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: (e)=>setActivo(e.target.checked),\n                                        checked: activo,\n                                        type: \"checkbox\",\n                                        className: \"toggle toggle-primary\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"cursor-pointer label\",\n                                    children: \"Role de usuario\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"select select-bordered w-full\",\n                                    onChange: (e)=>setRole(Number(e.target.value)),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            disabled: true,\n                                            selected: true,\n                                            children: \"Role de usuario\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 3\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: 1,\n                                            children: \"Administrador\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 3\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: 2,\n                                            children: \"Operador\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 3\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center space-x-10 > * + *\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn btn-secondary\",\n                                    onClick: ()=>{\n                                        agregarUsuario();\n                                        obtenerUsuario();\n                                    },\n                                    children: \"Agregar Registro\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 3\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: email === \"\" ? true : false,\n                                    type: \"button\",\n                                    className: \"btn btn-primary\",\n                                    onClick: ()=>{\n                                        actualizarUsuario();\n                                        obtenerUsuario();\n                                    },\n                                    children: \"Actualizar Registro\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 1\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 m-6\"\n            }, void 0, false, {\n                fileName: \"/Users/orlincorea/Documents/TRUESS/SISTEMA_GESTION_INVENTARIOS/sistema/version_2023/app/app_inventory/app/(config)/usuarios/page.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Usuarios, \"IWikMpZVipzEvkSeL+5E7Jb1I+o=\");\n_c = Usuarios;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Usuarios);\nvar _c;\n$RefreshReg$(_c, \"Usuarios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29uZmlnKS91c3Vhcmlvcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUU7QUFDVDtBQUNWO0FBQzNCO0FBRXpCLFNBQVNJOztJQUNMLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCxxREFBYyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTixxREFBYyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUixxREFBYyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHVixxREFBYyxDQUFDLElBQUkscUJBQXFCO0lBRWhFLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLHFEQUFjLENBQU0sRUFBRTtJQUVoRSxNQUFNYSxhQUFhLElBQUlmLHVFQUFVQTtJQUNqQyxNQUFNZ0IsV0FBVyxJQUFJZiw2REFBT0E7SUFHNUIsTUFBTWdCLGlCQUFnQjtRQUVkLElBQUk7WUFDQUYsV0FBV0csT0FBTyxDQUFDLE9BQU0saUNBQWlDLENBQzFELEdBQUdDLElBQUksQ0FBQyxDQUFDQztnQkFDTCxJQUFJQSxTQUFTQyxNQUFNLEtBQUcsS0FBSTtvQkFDdEJQLGlCQUFpQk0sU0FBU0EsUUFBUSxDQUFDRSxJQUFJO2dCQUMzQztZQUVKO1FBRUosRUFBRSxPQUFPQyxPQUFPO1lBQ1pQLFNBQVNRLFVBQVUsQ0FBQyx1QkFBc0I7UUFDOUM7SUFFUjtJQUVBLE1BQU1DLGlCQUFnQjtRQUVsQixJQUFJO1lBQ0NWLFdBQVdHLE9BQU8sQ0FBQyxRQUFPLGtDQUFrQztnQkFDekRRLFFBQVF0QjtnQkFDUkcsUUFBUUE7Z0JBQ1JvQixTQUFRdkI7Z0JBQ1JLLFFBQVFBO2dCQUNSbUIsU0FBU2pCO1lBQ2IsR0FBR1EsSUFBSSxDQUFDLENBQUNDO2dCQUNMLElBQUlBLFNBQVNDLE1BQU0sS0FBRyxLQUFJO29CQUN0QkwsU0FBU1EsVUFBVSxDQUFDLGtDQUFpQztnQkFDekQ7WUFFSjtRQUVKLEVBQUUsT0FBT0QsT0FBTztZQUNaUCxTQUFTUSxVQUFVLENBQUMsdUJBQXNCO1FBQzlDO0lBQ0g7SUFHRCxNQUFNSyxvQkFBbUI7UUFFckIsSUFBSTtZQUNDZCxXQUFXRyxPQUFPLENBQUMsUUFBTyxrQ0FBa0M7Z0JBQ3pEUSxRQUFRdEI7Z0JBQ1JHLFFBQVFBO2dCQUNSb0IsU0FBUXZCO2dCQUNSSyxRQUFRQTtnQkFDUm1CLFNBQVNqQjtZQUNiLEdBQUdRLElBQUksQ0FBQyxDQUFDQztnQkFDTCxJQUFJQSxTQUFTQyxNQUFNLEtBQUcsS0FBSTtvQkFDdEJMLFNBQVNRLFVBQVUsQ0FBQyxrQ0FBaUM7Z0JBQ3pEO1lBRUo7UUFFSixFQUFFLE9BQU9ELE9BQU87WUFDWlAsU0FBU1EsVUFBVSxDQUFDLHVCQUFzQjtRQUM5QztJQUNIO0lBR0F0QixzREFBZSxDQUFDO1FBQ2JlO0lBQ0EsR0FBRyxFQUFFO0lBT1QscUJBR0k7OzBCQUNBLDhEQUFDbEIsbUZBQVlBO2dCQUFDZ0MsUUFBTzs7Ozs7OzBCQUNyQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFLRCxXQUFVOztzQ0FDWiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBTUYsV0FBVTs4Q0FBUTs7Ozs7OzhDQUN6Qiw4REFBQ0c7b0NBQU1DLElBQUc7b0NBQVFDLE1BQUs7b0NBQU9DLGFBQVk7b0NBQzFDQyxRQUFRO29DQUNSUCxXQUFVO29DQUNWUSxPQUFPckM7Ozs7Ozs7Ozs7OztzQ0FFWCw4REFBQzRCOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0U7b0NBQU1GLFdBQVU7OENBQVE7Ozs7Ozs4Q0FDekIsOERBQUNHO29DQUFNQyxJQUFHO29DQUFTQyxNQUFLO29DQUFPQyxhQUFZO29DQUMzQ0MsUUFBUTtvQ0FDUlAsV0FBVTtvQ0FDVlEsT0FBT2xDOzs7Ozs7Ozs7Ozs7c0NBRVgsOERBQUN5Qjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0U7Z0NBQU1GLFdBQVU7O2tEQUNqQiw4REFBQ1M7d0NBQUtULFdBQVU7a0RBQWE7Ozs7OztrREFDN0IsOERBQUNHO3dDQUVHTyxVQUFVLENBQUNDLElBQU1sQyxVQUFVa0MsRUFBRUMsTUFBTSxDQUFDQyxPQUFPO3dDQUMzQ0EsU0FBU3JDO3dDQUNiNkIsTUFBSzt3Q0FBV0wsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzlCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFNRixXQUFVOzhDQUF1Qjs7Ozs7OzhDQUM1Qyw4REFBQ2M7b0NBQU9kLFdBQVU7b0NBQWdDVSxVQUFVLENBQUNDLElBQUloQyxRQUFRb0MsT0FBT0osRUFBRUMsTUFBTSxDQUFDSixLQUFLOztzREFDNUcsOERBQUNROzRDQUFPQyxRQUFROzRDQUFDQyxRQUFRO3NEQUFDOzs7Ozs7c0RBQzFCLDhEQUFDRjs0Q0FBT1IsT0FBTztzREFBRzs7Ozs7O3NEQUNsQiw4REFBQ1E7NENBQU9SLE9BQU87c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJSiw4REFBQ1Q7NEJBQUlDLFdBQVU7OzhDQUM3Qiw4REFBQ21CO29DQUFPZCxNQUFLO29DQUFTTCxXQUFVO29DQUNoQ29CLFNBQVM7d0NBQUs1Qjt3Q0FDZFI7b0NBQ0E7OENBRUU7Ozs7Ozs4Q0FDSiw4REFBQ21DO29DQUFPRixVQUFVOUMsVUFBUSxLQUFJLE9BQUs7b0NBQU9rQyxNQUFLO29DQUFTTCxXQUFVO29DQUFrQm9CLFNBQVM7d0NBQzNGeEI7d0NBQ0FaO29DQUNGOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNSyw4REFBQ2U7Z0JBQUlDLFdBQVU7Ozs7Ozs7O0FBS3ZCO0dBL0lTOUI7S0FBQUE7QUFpSlQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhjb25maWcpL3VzdWFyaW9zL3BhZ2UudHN4P2ZiYmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUGFnaW5hVGl0dWxvIGZyb20gXCJAL2FwcC9jb21wb25lbnRlcy9wYWdpbmFfdGl0dWxvL3BhZ2luYVRpdHVsb1wiXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIkAvYXBwL2xpYi9kYXRhc2VydmljZS9BUElTZXJ2aWNlXCI7XG5pbXBvcnQgeyBEaWFsb2dvIH0gZnJvbSBcIkAvYXBwL2xpYi9kaWFsb2dzL2RpYWxvZ3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5mdW5jdGlvbiBVc3Vhcmlvcygpe1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbYWN0aXZvLCBzZXRBY3Rpdm9dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gUmVhY3QudXNlU3RhdGUoMik7IC8vMSBhZG1pbiwgMiB1c3VhcmlvIFxuXG4gICAgY29uc3QgW2xpc3RhVXN1YXJpb3MsIHNldExpc3RhVXN1YXJpb3NdID0gUmVhY3QudXNlU3RhdGU8YW55PihbXSk7XG5cbiAgICBjb25zdCBhcGlTZXJ2aWNlID0gbmV3IEFwaVNlcnZpY2UoKTtcbiAgICBjb25zdCBkaWFsb2dvcyA9IG5ldyBEaWFsb2dvKCk7XG5cblxuICAgIGNvbnN0IG9idGVuZXJVc3VhcmlvPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXBpU2VydmljZS5DYWxsQVBJKCdHRVQnLCcvYXBpL2ludmVudG9yeS9saXN0YV91c3VhcmlvcycsIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlzdGFVc3VhcmlvcyhyZXNwb25zZS5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZGlhbG9nb3Muc2hvd190b2FzdChcIkVycm9yIGVuIGVsIHByb2Nlc29cIixcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGFncmVnYXJVc3VhcmlvPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICBhcGlTZXJ2aWNlLkNhbGxBUEkoJ1BPU1QnLCcvYXBpL2ludmVudG9yeS9hZ3JlZ2FyX3VzdWFyaW8nLCB7XG4gICAgICAgICAgICAgICAgY29ycmVvOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBub21icmU6IG5vbWJyZSxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOmVtYWlsLFxuICAgICAgICAgICAgICAgIGFjdGl2bzogYWN0aXZvLFxuICAgICAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7IFxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXM9PT0yMDApe1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dvcy5zaG93X3RvYXN0KFwiVXN1YXJpbyBhZ3JlZ2FkbyBjb3JyZWN0YW1lbnRlXCIsXCJTVUNDRVNTXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlhbG9nb3Muc2hvd190b2FzdChcIkVycm9yIGVuIGVsIHByb2Nlc29cIixcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgIH1cblxuXG4gICAgY29uc3QgYWN0dWFsaXphclVzdWFyaW89IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgIGFwaVNlcnZpY2UuQ2FsbEFQSSgnUE9TVCcsJy9hcGkvaW52ZW50b3J5L2FncmVnYXJfdXN1YXJpbycsIHtcbiAgICAgICAgICAgICAgICBjb3JyZW86IGVtYWlsLFxuICAgICAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86ZW1haWwsXG4gICAgICAgICAgICAgICAgYWN0aXZvOiBhY3Rpdm8sXG4gICAgICAgICAgICAgICAgcm9sZV9pZDogcm9sZVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cz09PTIwMCl7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ29zLnNob3dfdG9hc3QoXCJVc3VhcmlvIGFncmVnYWRvIGNvcnJlY3RhbWVudGVcIixcIlNVQ0NFU1NcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaWFsb2dvcy5zaG93X3RvYXN0KFwiRXJyb3IgZW4gZWwgcHJvY2Vzb1wiLFwiRVJST1JcIik7XG4gICAgICAgIH1cbiAgICAgfVxuICAgICAgICBcblxuICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBvYnRlbmVyVXN1YXJpbygpO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgIFxuICAgICAgICA8PlxuICAgICAgICA8UGFnaW5hVGl0dWxvIHRpdHVsbz1cIkFkbWluaXN0cmFjacOzbiBkZSB1c3Vhcmlvc1wiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBtLTVcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBzcGFjZS15LTggPiAqICsgKlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgaW5wdXQtaW5mbyB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+Tm9tYnJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tYnJlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiIFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBpbnB1dC1pbmZvIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9PjwvaW5wdXQ+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB3LTUyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+VXN1YXJpbyBBY3Rpdm88L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFjdGl2byhlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FjdGl2b31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwidG9nZ2xlIHRvZ2dsZS1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbGFiZWxcIj5Sb2xlIGRlIHVzdWFyaW88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC1ib3JkZXJlZCB3LWZ1bGxcIiBvbkNoYW5nZT17KGUpPT5zZXRSb2xlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT5cbiAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD5Sb2xlIGRlIHVzdWFyaW88L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT17MX0+QWRtaW5pc3RyYWRvcjwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPXsyfT5PcGVyYWRvcjwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMCA+ICogKyAqJz5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBcbiAgb25DbGljaz17KCk9PnthZ3JlZ2FyVXN1YXJpbygpO1xuICBvYnRlbmVyVXN1YXJpbygpO1xuICB9XG4gIFxuICB9PkFncmVnYXIgUmVnaXN0cm88L2J1dHRvbj5cbjxidXR0b24gZGlzYWJsZWQ9e2VtYWlsPT09XCJcIiA/dHJ1ZTpmYWxzZX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT57XG4gIGFjdHVhbGl6YXJVc3VhcmlvKClcbiAgb2J0ZW5lclVzdWFyaW8oKTtcbn19PkFjdHVhbGl6YXIgUmVnaXN0cm88L2J1dHRvbj5cbjwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbS02XCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXN1YXJpb3MiXSwibmFtZXMiOlsiUGFnaW5hVGl0dWxvIiwiQXBpU2VydmljZSIsIkRpYWxvZ28iLCJSZWFjdCIsIlVzdWFyaW9zIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiYWN0aXZvIiwic2V0QWN0aXZvIiwicm9sZSIsInNldFJvbGUiLCJsaXN0YVVzdWFyaW9zIiwic2V0TGlzdGFVc3VhcmlvcyIsImFwaVNlcnZpY2UiLCJkaWFsb2dvcyIsIm9idGVuZXJVc3VhcmlvIiwiQ2FsbEFQSSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJlcnJvciIsInNob3dfdG9hc3QiLCJhZ3JlZ2FyVXN1YXJpbyIsImNvcnJlbyIsInVzdWFyaW8iLCJyb2xlX2lkIiwiYWN0dWFsaXphclVzdWFyaW8iLCJ1c2VFZmZlY3QiLCJ0aXR1bG8iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInNwYW4iLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwic2VsZWN0IiwiTnVtYmVyIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJzZWxlY3RlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(config)/usuarios/page.tsx\n"));

/***/ })

});