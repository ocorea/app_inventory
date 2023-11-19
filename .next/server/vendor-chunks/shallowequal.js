"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallowequal";
exports.ids = ["vendor-chunks/shallowequal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n    if (ret !== void 0) {\n        return !!ret;\n    }\n    if (objA === objB) {\n        return true;\n    }\n    if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n        return false;\n    }\n    var keysA = Object.keys(objA);\n    var keysB = Object.keys(objB);\n    if (keysA.length !== keysB.length) {\n        return false;\n    }\n    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n    // Test for A's keys different from B.\n    for(var idx = 0; idx < keysA.length; idx++){\n        var key = keysA[idx];\n        if (!bHasOwnProperty(key)) {\n            return false;\n        }\n        var valueA = objA[key];\n        var valueB = objB[key];\n        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n        if (ret === false || ret === void 0 && valueA !== valueB) {\n            return false;\n        }\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLEVBQUU7O0FBRUZBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxhQUFhQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxjQUFjO0lBQ3hFLElBQUlDLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCSCxNQUFNQyxRQUFRLEtBQUs7SUFFcEUsSUFBSUcsUUFBUSxLQUFLLEdBQUc7UUFDbEIsT0FBTyxDQUFDLENBQUNBO0lBQ1g7SUFFQSxJQUFJSixTQUFTQyxNQUFNO1FBQ2pCLE9BQU87SUFDVDtJQUVBLElBQUksT0FBT0QsU0FBUyxZQUFZLENBQUNBLFFBQVEsT0FBT0MsU0FBUyxZQUFZLENBQUNBLE1BQU07UUFDMUUsT0FBTztJQUNUO0lBRUEsSUFBSUssUUFBUUMsT0FBT0MsSUFBSSxDQUFDUjtJQUN4QixJQUFJUyxRQUFRRixPQUFPQyxJQUFJLENBQUNQO0lBRXhCLElBQUlLLE1BQU1JLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUVBLElBQUlDLGtCQUFrQkosT0FBT0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ2I7SUFFM0Qsc0NBQXNDO0lBQ3RDLElBQUssSUFBSWMsTUFBTSxHQUFHQSxNQUFNVCxNQUFNSSxNQUFNLEVBQUVLLE1BQU87UUFDM0MsSUFBSUMsTUFBTVYsS0FBSyxDQUFDUyxJQUFJO1FBRXBCLElBQUksQ0FBQ0osZ0JBQWdCSyxNQUFNO1lBQ3pCLE9BQU87UUFDVDtRQUVBLElBQUlDLFNBQVNqQixJQUFJLENBQUNnQixJQUFJO1FBQ3RCLElBQUlFLFNBQVNqQixJQUFJLENBQUNlLElBQUk7UUFFdEJaLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCYyxRQUFRQyxRQUFRRixPQUFPLEtBQUs7UUFFekUsSUFBSVosUUFBUSxTQUFVQSxRQUFRLEtBQUssS0FBS2EsV0FBV0MsUUFBUztZQUMxRCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcF9pbnZlbnRvcnkvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzPzcxODEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaGFsbG93RXF1YWwiLCJvYmpBIiwib2JqQiIsImNvbXBhcmUiLCJjb21wYXJlQ29udGV4dCIsInJldCIsImNhbGwiLCJrZXlzQSIsIk9iamVjdCIsImtleXMiLCJrZXlzQiIsImxlbmd0aCIsImJIYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiYmluZCIsImlkeCIsImtleSIsInZhbHVlQSIsInZhbHVlQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallowequal/index.js\n");

/***/ })

};
;