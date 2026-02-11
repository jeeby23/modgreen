module.exports = [
"[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce);
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData.prototype, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyStrict",
    ()=>copyStrict,
    "createCopier",
    ()=>createCopier,
    "createStrictCopier",
    ()=>createStrictCopier,
    "default",
    ()=>index
]);
var toStringFunction = Function.prototype.toString;
var create = Object.create;
var toStringObject = Object.prototype.toString;
/**
 * @classdesc Fallback cache for when WeakMap is not natively supported
 */ var LegacyCache = function() {
    function LegacyCache() {
        this._keys = [];
        this._values = [];
    }
    LegacyCache.prototype.has = function(key) {
        return !!~this._keys.indexOf(key);
    };
    LegacyCache.prototype.get = function(key) {
        return this._values[this._keys.indexOf(key)];
    };
    LegacyCache.prototype.set = function(key, value) {
        this._keys.push(key);
        this._values.push(value);
    };
    return LegacyCache;
}();
function createCacheLegacy() {
    return new LegacyCache();
}
function createCacheModern() {
    return new WeakMap();
}
/**
 * Get a new cache object to prevent circular references.
 */ var createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;
/**
 * Get an empty version of the object with the same prototype it has.
 */ function getCleanClone(prototype) {
    if (!prototype) {
        return create(null);
    }
    var Constructor = prototype.constructor;
    if (Constructor === Object) {
        return prototype === Object.prototype ? {} : create(prototype);
    }
    if (Constructor && ~toStringFunction.call(Constructor).indexOf('[native code]')) {
        try {
            return new Constructor();
        } catch (_a) {}
    }
    return create(prototype);
}
function getRegExpFlagsLegacy(regExp) {
    var flags = '';
    if (regExp.global) {
        flags += 'g';
    }
    if (regExp.ignoreCase) {
        flags += 'i';
    }
    if (regExp.multiline) {
        flags += 'm';
    }
    if (regExp.unicode) {
        flags += 'u';
    }
    if (regExp.sticky) {
        flags += 'y';
    }
    return flags;
}
function getRegExpFlagsModern(regExp) {
    return regExp.flags;
}
/**
 * Get the flags to apply to the copied regexp.
 */ var getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;
function getTagLegacy(value) {
    var type = toStringObject.call(value);
    return type.substring(8, type.length - 1);
}
function getTagModern(value) {
    return value[Symbol.toStringTag] || getTagLegacy(value);
}
/**
 * Get the tag of the value passed, so that the correct copier can be used.
 */ var getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;
var defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
var SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === 'function';
function getStrictPropertiesModern(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Get the properites used when copying objects strictly. This includes both keys and symbols.
 */ var getStrictProperties = SUPPORTS_SYMBOL ? getStrictPropertiesModern : getOwnPropertyNames;
/**
 * Striclty copy all properties contained on the object.
 */ function copyOwnPropertiesStrict(value, clone, state) {
    var properties = getStrictProperties(value);
    for(var index = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index < length_1; ++index){
        property = properties[index];
        if (property === 'callee' || property === 'caller') {
            continue;
        }
        descriptor = getOwnPropertyDescriptor(value, property);
        if (!descriptor) {
            // In extra edge cases where the property descriptor cannot be retrived, fall back to
            // the loose assignment.
            clone[property] = state.copier(value[property], state);
            continue;
        }
        // Only clone the value if actually a value, not a getter / setter.
        if (!descriptor.get && !descriptor.set) {
            descriptor.value = state.copier(descriptor.value, state);
        }
        try {
            defineProperty(clone, property, descriptor);
        } catch (error) {
            // Tee above can fail on node in edge cases, so fall back to the loose assignment.
            clone[property] = descriptor.value;
        }
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array.
 */ function copyArrayLoose(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    for(var index = 0, length_2 = array.length; index < length_2; ++index){
        clone[index] = state.copier(array[index], state);
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array, as well as any custom properties.
 */ function copyArrayStrict(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    return copyOwnPropertiesStrict(array, clone, state);
}
/**
 * Copy the contents of the ArrayBuffer.
 */ function copyArrayBuffer(arrayBuffer, _state) {
    return arrayBuffer.slice(0);
}
/**
 * Create a new Blob with the contents of the original.
 */ function copyBlob(blob, _state) {
    return blob.slice(0, blob.size, blob.type);
}
/**
 * Create a new DataView with the contents of the original.
 */ function copyDataView(dataView, state) {
    return new state.Constructor(copyArrayBuffer(dataView.buffer));
}
/**
 * Create a new Date based on the time of the original.
 */ function copyDate(date, state) {
    return new state.Constructor(date.getTime());
}
/**
 * Deeply copy the keys and values of the original.
 */ function copyMapLoose(map, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(map, clone);
    map.forEach(function(value, key) {
        clone.set(key, state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the keys and values of the original, as well as any custom properties.
 */ function copyMapStrict(map, state) {
    return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);
}
function copyObjectLooseLegacy(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for(var key in object){
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    return clone;
}
function copyObjectLooseModern(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for(var key in object){
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    var symbols = getOwnPropertySymbols(object);
    for(var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index){
        symbol = symbols[index];
        if (propertyIsEnumerable.call(object, symbol)) {
            clone[symbol] = state.copier(object[symbol], state);
        }
    }
    return clone;
}
/**
 * Deeply copy the properties (keys and symbols) and values of the original.
 */ var copyObjectLoose = SUPPORTS_SYMBOL ? copyObjectLooseModern : copyObjectLooseLegacy;
/**
 * Deeply copy the properties (keys and symbols) and values of the original, as well
 * as any hidden or non-enumerable properties.
 */ function copyObjectStrict(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    return copyOwnPropertiesStrict(object, clone, state);
}
/**
 * Create a new primitive wrapper from the value of the original.
 */ function copyPrimitiveWrapper(primitiveObject, state) {
    return new state.Constructor(primitiveObject.valueOf());
}
/**
 * Create a new RegExp based on the value and flags of the original.
 */ function copyRegExp(regExp, state) {
    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
    clone.lastIndex = regExp.lastIndex;
    return clone;
}
/**
 * Return the original value (an identity function).
 *
 * @note
 * THis is used for objects that cannot be copied, such as WeakMap.
 */ function copySelf(value, _state) {
    return value;
}
/**
 * Deeply copy the values of the original.
 */ function copySetLoose(set, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(set, clone);
    set.forEach(function(value) {
        clone.add(state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the values of the original, as well as any custom properties.
 */ function copySetStrict(set, state) {
    return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);
}
var isArray = Array.isArray;
var assign = Object.assign;
var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
};
var DEFAULT_LOOSE_OPTIONS = {
    array: copyArrayLoose,
    arrayBuffer: copyArrayBuffer,
    blob: copyBlob,
    dataView: copyDataView,
    date: copyDate,
    error: copySelf,
    map: copyMapLoose,
    object: copyObjectLoose,
    regExp: copyRegExp,
    set: copySetLoose
};
var DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {
    array: copyArrayStrict,
    map: copyMapStrict,
    object: copyObjectStrict,
    set: copySetStrict
});
/**
 * Get the copiers used for each specific object tag.
 */ function getTagSpecificCopiers(options) {
    return {
        Arguments: options.object,
        Array: options.array,
        ArrayBuffer: options.arrayBuffer,
        Blob: options.blob,
        Boolean: copyPrimitiveWrapper,
        DataView: options.dataView,
        Date: options.date,
        Error: options.error,
        Float32Array: options.arrayBuffer,
        Float64Array: options.arrayBuffer,
        Int8Array: options.arrayBuffer,
        Int16Array: options.arrayBuffer,
        Int32Array: options.arrayBuffer,
        Map: options.map,
        Number: copyPrimitiveWrapper,
        Object: options.object,
        Promise: copySelf,
        RegExp: options.regExp,
        Set: options.set,
        String: copyPrimitiveWrapper,
        WeakMap: copySelf,
        WeakSet: copySelf,
        Uint8Array: options.arrayBuffer,
        Uint8ClampedArray: options.arrayBuffer,
        Uint16Array: options.arrayBuffer,
        Uint32Array: options.arrayBuffer,
        Uint64Array: options.arrayBuffer
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed.
 */ function createCopier(options) {
    var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);
    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
    var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;
    function copier(value, state) {
        state.prototype = state.Constructor = undefined;
        if (!value || typeof value !== 'object') {
            return value;
        }
        if (state.cache.has(value)) {
            return state.cache.get(value);
        }
        state.prototype = getPrototypeOf(value);
        state.Constructor = state.prototype && state.prototype.constructor;
        // plain objects
        if (!state.Constructor || state.Constructor === Object) {
            return object(value, state);
        }
        // arrays
        if (isArray(value)) {
            return array(value, state);
        }
        var tagSpecificCopier = tagSpecificCopiers[getTag(value)];
        if (tagSpecificCopier) {
            return tagSpecificCopier(value, state);
        }
        return typeof value.then === 'function' ? value : object(value, state);
    }
    return function copy(value) {
        return copier(value, {
            Constructor: undefined,
            cache: createCache(),
            copier: copier,
            prototype: undefined
        });
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed, defaulting to the
 * same internals as `copyStrict`.
 */ function createStrictCopier(options) {
    return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));
}
/**
 * Copy an value deeply as much as possible, where strict recreation of object properties
 * are maintained. All properties (including non-enumerable ones) are copied with their
 * original property descriptors on both objects and arrays.
 */ var copyStrict = createStrictCopier({});
/**
 * Copy an value deeply as much as possible.
 */ var index = createCopier({});
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/async-token.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>asyncToken
]);
function asyncToken(instance, getToken) {
    instance.interceptors.request.use(function(config) {
        return getToken().then((accessToken)=>{
            config.headers.set('Authorization', `Bearer ${accessToken}`);
            return config;
        });
    });
}
;
 //# sourceMappingURL=async-token.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNodeVersion",
    ()=>getNodeVersion,
    "getWindow",
    ()=>getWindow,
    "isNode",
    ()=>isNode,
    "isReactNative",
    ()=>isReactNative,
    "noop",
    ()=>noop
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
;
function isNode() {
    /**
     * Polyfills of 'process' might set process.browser === true
     *
     * See:
     * https://github.com/webpack/node-libs-browser/blob/master/mock/process.js#L8
     * https://github.com/defunctzombie/node-process/blob/master/browser.js#L156
     **/ return typeof __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"] !== 'undefined' && !__TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].browser;
}
function isReactNative() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'navigator' in window && 'product' in window.navigator && window.navigator.product === 'ReactNative';
}
function getNodeVersion() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].versions && __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].versions.node ? `v${__TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].versions.node}` : __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].version;
}
function getWindow() {
    return window;
}
function noop() {
    return undefined;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-ssr] (ecmascript)");
;
const delay = (ms)=>new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
const defaultWait = (attempts)=>{
    return Math.pow(Math.SQRT2, attempts);
};
function rateLimit(instance, maxRetry = 5) {
    const { responseLogger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"], requestLogger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"] } = instance.defaults;
    instance.interceptors.request.use(function(config) {
        requestLogger(config);
        return config;
    }, function(error) {
        requestLogger(error);
        return Promise.reject(error);
    });
    instance.interceptors.response.use(function(response) {
        // we don't need to do anything here
        responseLogger(response);
        return response;
    }, async function(error) {
        const { response } = error;
        const { config } = error;
        responseLogger(error);
        // Do not retry if it is disabled or no request config exists (not an axios error)
        if (!config || !instance.defaults.retryOnError) {
            return Promise.reject(error);
        }
        // Retried already for max attempts
        const doneAttempts = config.attempts || 1;
        if (doneAttempts > maxRetry) {
            error.attempts = config.attempts;
            return Promise.reject(error);
        }
        let retryErrorType = null;
        let wait = defaultWait(doneAttempts);
        // Errors without response did not receive anything from the server
        if (!response) {
            retryErrorType = 'Connection';
        } else if (response.status >= 500 && response.status < 600) {
            // 5** errors are server related
            retryErrorType = `Server ${response.status}`;
        } else if (response.status === 429) {
            // 429 errors are exceeded rate limit exceptions
            retryErrorType = 'Rate limit';
            // all headers are lowercased by axios https://github.com/mzabriskie/axios/issues/413
            if (response.headers && error.response.headers['x-contentful-ratelimit-reset']) {
                wait = response.headers['x-contentful-ratelimit-reset'];
            }
        }
        if (retryErrorType) {
            // convert to ms and add jitter
            wait = Math.floor(wait * 1000 + Math.random() * 200 + 500);
            instance.defaults.logHandler('warning', `${retryErrorType} error occurred. Waiting for ${wait} ms before retrying...`);
            // increase attempts counter
            config.attempts = doneAttempts + 1;
            /* Somehow between the interceptor and retrying the request the httpAgent/httpsAgent gets transformed from an Agent-like object
             to a regular object, causing failures on retries after rate limits. Removing these properties here fixes the error, but retry
             requests still use the original http/httpsAgent property */ delete config.httpAgent;
            delete config.httpsAgent;
            return delay(wait).then(()=>instance(config));
        }
        return Promise.reject(error);
    });
}
;
 //# sourceMappingURL=rate-limit.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/pThrottle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortError",
    ()=>AbortError,
    "default",
    ()=>pThrottle
]);
class AbortError extends Error {
    name = 'AbortError';
    constructor(){
        super('Throttled function aborted');
    }
}
/**
 * Throttle promise-returning/async/normal functions.
 *
 * It rate-limits function calls without discarding them, making it ideal for external API interactions where avoiding call loss is crucial.
 *
 * @returns A throttle function.
 *
 * Both the `limit` and `interval` options must be specified.
 *
 * @example
 * ```
 * import pThrottle from './PThrottle';
 *
 * const now = Date.now();
 *
 * const throttle = pThrottle({
 *   limit: 2,
 *   interval: 1000
 * });
 *
 * const throttled = throttle(async index => {
 *   const secDiff = ((Date.now() - now) / 1000).toFixed();
 *   return `${index}: ${secDiff}s`;
 * });
 *
 * for (let index = 1; index <= 6; index++) {
 *   (async () => {
 *     console.log(await throttled(index));
 *   })();
 * }
 * //=> 1: 0s
 * //=> 2: 0s
 * //=> 3: 1s
 * //=> 4: 1s
 * //=> 5: 2s
 * //=> 6: 2s
 * ```
 */ function pThrottle({ limit, interval, strict, onDelay }) {
    if (!Number.isFinite(limit)) {
        throw new TypeError('Expected `limit` to be a finite number');
    }
    if (!Number.isFinite(interval)) {
        throw new TypeError('Expected `interval` to be a finite number');
    }
    const queue = new Map();
    let currentTick = 0;
    let activeCount = 0;
    function windowedDelay() {
        const now = Date.now();
        if (now - currentTick > interval) {
            activeCount = 1;
            currentTick = now;
            return 0;
        }
        if (activeCount < limit) {
            activeCount++;
        } else {
            currentTick += interval;
            activeCount = 1;
        }
        return currentTick - now;
    }
    const getDelay = windowedDelay;
    return function(function_) {
        const throttled = function(...arguments_) {
            if (!throttled.isEnabled) {
                return (async ()=>function_.apply(this, arguments_))();
            }
            let timeoutId;
            return new Promise((resolve, reject)=>{
                const execute = ()=>{
                    resolve(function_.apply(this, arguments_));
                    queue.delete(timeoutId);
                };
                const delay = getDelay();
                if (delay > 0) {
                    timeoutId = setTimeout(execute, delay);
                    queue.set(timeoutId, reject);
                    onDelay?.();
                } else {
                    execute();
                }
            });
        };
        throttled.abort = ()=>{
            for (const timeout of queue.keys()){
                clearTimeout(timeout);
                queue.get(timeout)(new AbortError());
            }
            queue.clear();
        };
        throttled.isEnabled = true;
        Object.defineProperty(throttled, 'queueSize', {
            get () {
                return queue.size;
            }
        });
        return throttled;
    };
}
;
 //# sourceMappingURL=pThrottle.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit-throttle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rateLimitThrottle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isString.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$pThrottle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/pThrottle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-ssr] (ecmascript)");
;
;
;
const PERCENTAGE_REGEX = /(?<value>\d+)(%)/;
function calculateLimit(type, max = 7) {
    let limit = max;
    if (PERCENTAGE_REGEX.test(type)) {
        const groups = type.match(PERCENTAGE_REGEX)?.groups;
        if (groups && groups.value) {
            const percentage = parseInt(groups.value) / 100;
            limit = Math.round(max * percentage);
        }
    }
    return Math.min(30, Math.max(1, limit));
}
function createThrottle(limit, logger) {
    logger('info', `Throttle request to ${limit}/s`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$pThrottle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        limit,
        interval: 1000,
        strict: false
    });
}
var rateLimitThrottle = (axiosInstance, type = 'auto')=>{
    const { logHandler = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"] } = axiosInstance.defaults;
    let limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(type) ? calculateLimit(type) : calculateLimit('auto', type);
    let throttle = createThrottle(limit, logHandler);
    let isCalculated = false;
    let requestInterceptorId = axiosInstance.interceptors.request.use((config)=>{
        return throttle(()=>config)();
    }, function(error) {
        return Promise.reject(error);
    });
    const responseInterceptorId = axiosInstance.interceptors.response.use((response)=>{
        if (!isCalculated && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(type) && (type === 'auto' || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers['x-contentful-ratelimit-second-limit']) {
            const rawLimit = parseInt(response.headers['x-contentful-ratelimit-second-limit']);
            const nextLimit = calculateLimit(type, rawLimit);
            if (nextLimit !== limit) {
                if (requestInterceptorId) {
                    axiosInstance.interceptors.request.eject(requestInterceptorId);
                }
                limit = nextLimit;
                throttle = createThrottle(nextLimit, logHandler);
                requestInterceptorId = axiosInstance.interceptors.request.use((config)=>{
                    return throttle(()=>config)();
                }, function(error) {
                    return Promise.reject(error);
                });
            }
            isCalculated = true;
        }
        return response;
    }, function(error) {
        return Promise.reject(error);
    });
    return ()=>{
        axiosInstance.interceptors.request.eject(requestInterceptorId);
        axiosInstance.interceptors.response.eject(responseInterceptorId);
    };
};
;
 //# sourceMappingURL=rate-limit-throttle.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createDefaultOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/index.js [app-ssr] (ecmascript)");
;
// Matches 'sub.host:port' or 'host:port' and extracts hostname and port
// Also enforces toplevel domain specified, no spaces and no protocol
const HOST_REGEX = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/;
/**
 * Create default options
 * @private
 * @param {CreateHttpClientParams} options - Initialization parameters for the HTTP client
 * @return {DefaultOptions} options to pass to axios
 */ function createDefaultOptions(options) {
    const defaultConfig = {
        insecure: false,
        retryOnError: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        logHandler: (level, data)=>{
            if (level === 'error' && data) {
                const title = [
                    data.name,
                    data.message
                ].filter((a)=>a).join(' - ');
                console.error(`[error] ${title}`);
                console.error(data);
                return;
            }
            console.log(`[${level}] ${data}`);
        },
        // Passed to axios
        headers: {},
        httpAgent: false,
        httpsAgent: false,
        timeout: 30000,
        throttle: 0,
        basePath: '',
        adapter: undefined,
        maxContentLength: 1073741824,
        maxBodyLength: 1073741824
    };
    const config = {
        ...defaultConfig,
        ...options
    };
    if (!config.accessToken) {
        const missingAccessTokenError = new TypeError('Expected parameter accessToken');
        config.logHandler('error', missingAccessTokenError);
        throw missingAccessTokenError;
    }
    // Construct axios baseURL option
    const protocol = config.insecure ? 'http' : 'https';
    const space = config.space ? `${config.space}/` : '';
    let hostname = config.defaultHostname;
    let port = config.insecure ? 80 : 443;
    if (config.host && HOST_REGEX.test(config.host)) {
        const parsed = config.host.split(':');
        if (parsed.length === 2) {
            [hostname, port] = parsed;
        } else {
            hostname = parsed[0];
        }
    }
    // Ensure that basePath does start but not end with a slash
    if (config.basePath) {
        config.basePath = `/${config.basePath.split('/').filter(Boolean).join('/')}`;
    }
    const baseURL = options.baseURL || `${protocol}://${hostname}:${port}${config.basePath}/spaces/${space}`;
    if (!config.headers.Authorization && typeof config.accessToken !== 'function') {
        config.headers.Authorization = 'Bearer ' + config.accessToken;
    }
    const axiosOptions = {
        // Axios
        baseURL,
        headers: config.headers,
        httpAgent: config.httpAgent,
        httpsAgent: config.httpsAgent,
        proxy: config.proxy,
        timeout: config.timeout,
        adapter: config.adapter,
        maxContentLength: config.maxContentLength,
        maxBodyLength: config.maxBodyLength,
        paramsSerializer: {
            serialize: (params)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stringify(params);
            }
        },
        // Contentful
        logHandler: config.logHandler,
        responseLogger: config.responseLogger,
        requestLogger: config.requestLogger,
        retryOnError: config.retryOnError
    };
    return axiosOptions;
}
;
 //# sourceMappingURL=create-default-options.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createHttpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$async$2d$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/async-token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2d$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit-throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-ssr] (ecmascript)");
;
;
;
;
;
function copyHttpClientParams(options) {
    const copiedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options);
    // httpAgent and httpsAgent cannot be copied because they can contain private fields
    copiedOptions.httpAgent = options.httpAgent;
    copiedOptions.httpsAgent = options.httpsAgent;
    return copiedOptions;
}
/**
 * Create pre-configured axios instance
 * @private
 * @param {AxiosStatic} axios - Axios library
 * @param {CreateHttpClientParams} options - Initialization parameters for the HTTP client
 * @return {AxiosInstance} Initialized axios instance
 */ function createHttpClient(axios, options) {
    const axiosOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options);
    const instance = axios.create(axiosOptions);
    instance.httpClientParams = options;
    /**
     * Creates a new axios instance with the same default base parameters as the
     * current one, and with any overrides passed to the newParams object
     * This is useful as the SDKs use dependency injection to get the axios library
     * and the version of the library comes from different places depending
     * on whether it's a browser build or a node.js build.
     * @private
     * @param {CreateHttpClientParams} newParams - Initialization parameters for the HTTP client
     * @return {AxiosInstance} Initialized axios instance
     */ instance.cloneWithNewParams = function(newParams) {
        return createHttpClient(axios, {
            ...copyHttpClientParams(options),
            ...newParams
        });
    };
    /**
     * Apply interceptors.
     * Please note that the order of interceptors is important
     */ if (options.onBeforeRequest) {
        instance.interceptors.request.use(options.onBeforeRequest);
    }
    if (typeof options.accessToken === 'function') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$async$2d$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(instance, options.accessToken);
    }
    if (options.throttle) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2d$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(instance, options.throttle);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(instance, options.retryLimit);
    if (options.onError) {
        instance.interceptors.response.use((response)=>response, options.onError);
    }
    return instance;
}
;
 //# sourceMappingURL=create-http-client.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createRequestConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
/**
 * Creates request parameters configuration by parsing an existing query object
 * @private
 * @param {Object} query
 * @return {Object} Config object with `params` property, ready to be used in axios
 */ function createRequestConfig({ query }) {
    const config = {};
    delete query.resolveLinks;
    config.params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
    return config;
}
;
 //# sourceMappingURL=create-request-config.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/enforce-obj-path.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>enforceObjPath
]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enforceObjPath(obj, path) {
    if (!(path in obj)) {
        const err = new Error();
        err.name = 'PropertyMissing';
        err.message = `Required property ${path} missing from:

${JSON.stringify(obj)}

`;
        throw err;
    }
    return true;
}
;
 //# sourceMappingURL=enforce-obj-path.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>freezeSys
]);
// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);
    for (const name of propNames){
        const value = object[name];
        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}
function freezeSys(obj) {
    deepFreeze(obj.sys || {});
    return obj;
}
;
 //# sourceMappingURL=freeze-sys.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUserAgentHeader
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-ssr] (ecmascript)");
;
;
function getBrowserOS() {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindow"])();
    if (!win) {
        return null;
    }
    const userAgent = win.navigator.userAgent;
    // TODO: platform is deprecated.
    const platform = win.navigator.platform;
    const macosPlatforms = [
        'Macintosh',
        'MacIntel',
        'MacPPC',
        'Mac68K'
    ];
    const windowsPlatforms = [
        'Win32',
        'Win64',
        'Windows',
        'WinCE'
    ];
    const iosPlatforms = [
        'iPhone',
        'iPad',
        'iPod'
    ];
    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'macOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'Windows';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else if (/Linux/.test(platform)) {
        return 'Linux';
    }
    return null;
}
function getNodeOS() {
    const platform = __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].platform || 'linux';
    const version = __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__["default"].version || '0.0.0';
    const platformMap = {
        android: 'Android',
        aix: 'Linux',
        darwin: 'macOS',
        freebsd: 'Linux',
        linux: 'Linux',
        openbsd: 'Linux',
        sunos: 'Linux',
        win32: 'Windows'
    };
    if (platform in platformMap) {
        return `${platformMap[platform] || 'Linux'}/${version}`;
    }
    return null;
}
function getUserAgentHeader(sdk, application, integration, feature) {
    const headerParts = [];
    if (application) {
        headerParts.push(`app ${application}`);
    }
    if (integration) {
        headerParts.push(`integration ${integration}`);
    }
    if (feature) {
        headerParts.push('feature ' + feature);
    }
    headerParts.push(`sdk ${sdk}`);
    let platform = null;
    try {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactNative"])()) {
            platform = getBrowserOS();
            headerParts.push('platform ReactNative');
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) {
            platform = getNodeOS();
            headerParts.push(`platform node.js/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeVersion"])()}`);
        } else {
            platform = getBrowserOS();
            headerParts.push('platform browser');
        }
    } catch (e) {
        platform = null;
    }
    if (platform) {
        headerParts.push(`os ${platform}`);
    }
    return `${headerParts.filter((item)=>item !== '').join('; ')};`;
}
;
 //# sourceMappingURL=get-user-agent.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)");
;
/**
 * Mixes in a method to return just a plain object with no additional methods
 * @private
 * @param data - Any plain JSON response returned from the API
 * @return Enhanced object with toPlainObject method
 */ function toPlainObject(data) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return Object.defineProperty(data, 'toPlainObject', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this);
        }
    });
}
;
 //# sourceMappingURL=to-plain-object.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>errorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isPlainObject.js [app-ssr] (ecmascript)");
;
function obscureHeaders(config) {
    // Management, Delivery and Preview API tokens
    if (config?.headers?.['Authorization']) {
        const token = `...${config.headers['Authorization'].toString().substr(-5)}`;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Encoded Delivery or Preview token map for Cross-Space References
    if (config?.headers?.['X-Contentful-Resource-Resolution']) {
        const token = `...${config.headers['X-Contentful-Resource-Resolution'].toString().substr(-5)}`;
        config.headers['X-Contentful-Resource-Resolution'] = token;
    }
}
/**
 * Handles errors received from the server. Parses the error into a more useful
 * format, places it in an exception and throws it.
 * See https://www.contentful.com/developers/docs/references/errors/
 * for more details on the data received on the errorResponse.data property
 * and the expected error codes.
 * @private
 */ function errorHandler(errorResponse) {
    const { config, response } = errorResponse;
    let errorName;
    obscureHeaders(config);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config)) {
        throw errorResponse;
    }
    const data = response?.data;
    const errorData = {
        status: response?.status,
        statusText: response?.statusText,
        message: '',
        details: {}
    };
    if (config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config)) {
        errorData.request = {
            url: config.url,
            headers: config.headers,
            method: config.method,
            payloadData: config.data
        };
    }
    if (data && typeof data === 'object') {
        if ('requestId' in data) {
            errorData.requestId = data.requestId || 'UNKNOWN';
        }
        if ('message' in data) {
            errorData.message = data.message || '';
        }
        if ('details' in data) {
            errorData.details = data.details || {};
        }
        errorName = data.sys?.id;
    }
    const error = new Error();
    error.name = errorName && errorName !== 'Unknown' ? errorName : `${response?.status} ${response?.statusText}`;
    try {
        error.message = JSON.stringify(errorData, null, '  ');
    } catch  {
        error.message = errorData?.message ?? '';
    }
    throw error;
}
;
 //# sourceMappingURL=error-handler.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$enforce$2d$obj$2d$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/enforce-obj-path.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-ssr] (ecmascript) <export default as getUserAgentHeader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserAgentHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-ssr] (ecmascript) <export default as createHttpClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript) <export default as createRequestConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequestConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-ssr] (ecmascript) <export default as errorHandler>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-ssr] (ecmascript) <export default as freezeSys>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freezeSys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-ssr] (ecmascript) <export default as toPlainObject>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPlainObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_freeGlobal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
module.exports = freeGlobal;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_root.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var freeGlobal = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_freeGlobal.js [app-ssr] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getRawTag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_objectToString.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getRawTag.js [app-ssr] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_objectToString.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isArray.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isString.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var stringTag = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
module.exports = isString;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_overArg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var overArg = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_overArg.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isPlainObject.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/util.inspect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/util.inspect.js [app-ssr] (ecmascript)");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof globalThis !== 'undefined' && obj === globalThis || ("TURBOPACK compile-time value", "object") !== 'undefined' && obj === /*TURBOPACK member replacement*/ __turbopack_context__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-list/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
                // eslint-disable-next-line no-extra-parens
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
            }
            return curr;
        }
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) {
        return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) {
        return false;
    }
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) {
        return listGetNode(objects, key, true);
    }
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
                $o = void undefined;
            }
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) {
                // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    next: void undefined
                };
            }
            // eslint-disable-next-line no-extra-parens
            listSet($o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) {
                    $m = void undefined;
                }
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) {
                return $mapGet($m, key);
            }
        },
        has: function(key) {
            if ($m) {
                return $mapHas($m, key);
            }
            return false;
        },
        set: function(key, value) {
            if (!$m) {
                // @ts-expect-error TS can't handle narrowing a variable inside a closure
                $m = new $Map();
            }
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-weakmap/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapDelete($wm, key);
                }
            } else if (getSideChannelMap) {
                if ($m) {
                    return $m['delete'](key);
                }
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) {
                    $m = getSideChannelMap();
                }
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-ssr] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-list/index.js [app-ssr] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-ssr] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-weakmap/index.js [app-ssr] (ecmascript)");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) {
                $channelData = makeChannel();
            }
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
// Track objects created from arrayLimit overflow using side-channel
// Stores the current max numeric index for O(1) lookup
var overflowChannel = getSideChannel();
var markOverflow = function markOverflow(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
};
var isOverflow = function isOverflow(obj) {
    return overflowChannel.has(obj);
};
var getMaxIndex = function getMaxIndex(obj) {
    return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
};
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? {
        __proto__: null
    } : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object' && typeof source !== 'function') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if (isOverflow(target)) {
                // Add at next numeric index for overflow objects
                var newIndex = getMaxIndex(target) + 1;
                target[newIndex] = source;
                setMaxIndex(target, newIndex);
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        if (isOverflow(source)) {
            // Create new object with target at 0, source values shifted by 1
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? {
                __proto__: null,
                0: target
            } : {
                0: target
            };
            for(var m = 0; m < sourceKeys.length; m++){
                var oldKey = parseInt(sourceKeys[m], 10);
                result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
        }
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
    // If 'a' is already an overflow object, add to it
    if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
    }
    var result = [].concat(a, b);
    if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, {
            plainObjects: plainObjects
        }), result.length - 1);
    }
    return result;
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isOverflow: isOverflow,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-ssr] (ecmascript)");
var utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    filter: void undefined,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + '[]';
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && key && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = defaults.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
            continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-ssr] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
    if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
    }
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            if (key !== null) {
                val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                });
            }
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(String(val));
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && options.duplicates === 'combine') {
                obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
            } else if (!existing || options.duplicates === 'last') {
                obj[key] = val;
            }
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
        var parentKey = chain.slice(0, -1).join('');
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
                // leaf is already an overflow object, preserve it
                obj = leaf;
            } else {
                obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
            }
        } else {
            obj = options.plainObjects ? {
                __proto__: null
            } : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== '__proto__') {
                obj[decodedRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        return [
            key
        ];
    }
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    var i = 0;
    while((segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    if (segment) {
        if (options.strictDepth === true) {
            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        }
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return keys;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    var keys = splitKeyIntoSegments(givenKey, options);
    if (!keys) {
        return;
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
        throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? {
            __proto__: null
        } : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? {
        __proto__: null
    } : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/stringify.js [app-ssr] (ecmascript)");
var parse = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/parse.js [app-ssr] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-ssr] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGlobalOptions",
    ()=>createGlobalOptions
]);
/**
 * @param globalSettings - Global library settings
 * @returns getGlobalSettings - Method returning client settings
 * @category Client
 */ function createGlobalOptions(globalSettings) {
    /**
     * Method merging pre-configured global options and provided local parameters
     * @param query - regular query object used for collection endpoints
     * @param query.environment - optional name of the environment
     * @param query.space - optional space ID
     * @param query.spaceBaseUrl - optional base URL for the space
     * @param query.environmentBaseUrl - optional base URL for the environment
     * @returns global options
     */ return function getGlobalOptions(query) {
        return Object.assign({}, globalSettings, query);
    };
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mixinStringifySafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-ssr] (ecmascript)");
;
function mixinStringifySafe(data) {
    return Object.defineProperty(data, 'stringifySafe', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(serializer = null, indent = '') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, serializer, indent, (key, value)=>{
                return {
                    sys: {
                        type: 'Link',
                        linkType: 'Entry',
                        id: value.sys.id,
                        circular: true
                    }
                };
            });
        }
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/paged-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pagedSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__freezeSys$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-ssr] (ecmascript) <export default as freezeSys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-ssr] (ecmascript) <export default as toPlainObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript) <export default as createRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Retrieves all the available pages for a sync operation
 */ async function pagedSync(http, query, options) {
    if (!query || !query.initial && !query.nextSyncToken && !query.nextPageToken) {
        throw new Error('Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing');
    }
    if (query['content_type'] && !query.type) {
        query.type = 'Entry';
    } else if (query['content_type'] && query.type && query.type !== 'Entry') {
        throw new Error('When using the `content_type` filter your `type` parameter cannot be different from `Entry`.');
    }
    const defaultOptions = {
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false,
        paginate: true
    };
    const { withoutLinkResolution, withoutUnresolvableLinks, paginate } = Object.assign(Object.assign({}, defaultOptions), options);
    const response = await getSyncPage(http, [], query, {
        paginate
    });
    // clones response.items used in includes because we don't want these to be mutated
    if (!withoutLinkResolution) {
        response.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response, {
            removeUnresolved: withoutUnresolvableLinks,
            itemEntryPoints: [
                'fields'
            ]
        });
    }
    // maps response items again after getters are attached
    const mappedResponseItems = mapResponseItems(response.items);
    if (response.nextSyncToken) {
        mappedResponseItems.nextSyncToken = response.nextSyncToken;
    }
    if (response.nextPageToken) {
        mappedResponseItems.nextPageToken = response.nextPageToken;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__freezeSys$3e$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__["toPlainObject"])(mappedResponseItems)));
}
/**
 * @private
 * @param items
 * @returns Entities mapped to an object for each entity type
 */ function mapResponseItems(items) {
    const reducer = (type)=>{
        return (accumulated, item)=>{
            if (item.sys.type === type) {
                accumulated.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__["toPlainObject"])(item));
            }
            return accumulated;
        };
    };
    return {
        entries: items.reduce(reducer('Entry'), []),
        assets: items.reduce(reducer('Asset'), []),
        deletedEntries: items.reduce(reducer('DeletedEntry'), []),
        deletedAssets: items.reduce(reducer('DeletedAsset'), [])
    };
}
function createRequestQuery(originalQuery) {
    if (originalQuery.nextPageToken) {
        return {
            sync_token: originalQuery.nextPageToken
        };
    }
    if (originalQuery.nextSyncToken) {
        return {
            sync_token: originalQuery.nextSyncToken
        };
    }
    if (originalQuery.sync_token) {
        return {
            sync_token: originalQuery.sync_token
        };
    }
    return originalQuery;
}
/**
 * If the response contains a nextPageUrl, extracts the sync token to get the
 * next page and calls itself again with that token.
 * Otherwise, if the response contains a nextSyncUrl, extracts the sync token
 * and returns it.
 * On each call of this function, any retrieved items are collected in the
 * supplied items array, which gets returned in the end.
 */ async function getSyncPage(http, items, query, { paginate }) {
    const requestQuery = createRequestQuery(query);
    const response = await http.get('sync', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
        query: requestQuery
    }));
    const data = response.data || {};
    items = items.concat(data.items || []);
    if (data.nextPageUrl) {
        if (paginate) {
            delete requestQuery.initial;
            requestQuery.sync_token = getToken(data.nextPageUrl);
            return getSyncPage(http, items, requestQuery, {
                paginate
            });
        }
        return {
            items,
            nextPageToken: getToken(data.nextPageUrl)
        };
    } else if (data.nextSyncUrl) {
        return {
            items,
            nextSyncToken: getToken(data.nextSyncUrl)
        };
    } else {
        return {
            items: []
        };
    }
}
/**
 * Extracts token out of an url
 * @private
 */ function getToken(url) {
    const urlParts = url.split('?');
    return urlParts.length > 0 ? urlParts[1].replace('sync_token=', '') : '';
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-search-parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>normalizeSearchParameters
]);
function normalizeSearchParameters(query) {
    const convertedQuery = {};
    let hasConverted = false;
    for(const key in query){
        // We allow multiple values to be passed as arrays
        // which have to be converted to comma-separated strings before being sent to the API
        if (Array.isArray(query[key])) {
            convertedQuery[key] = query[key].join(',');
            hasConverted = true;
        }
    }
    if (hasConverted) {
        return Object.assign(Object.assign({}, query), convertedQuery);
    }
    return query;
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getQuerySelectionSet
]);
function getQuerySelectionSet(query) {
    if (!query.select) {
        return new Set();
    }
    // The selection of fields for the query is limited
    // Get the different parts that are listed for selection
    const allSelects = Array.isArray(query.select) ? query.select : query.select.split(',').map((q)=>q.trim());
    // Move the parts into a set for easy access and deduplication
    return new Set(allSelects);
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>normalizeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-ssr] (ecmascript)");
;
/*
 * sdk relies heavily on sys metadata
 * so we cannot omit the sys property on sdk level entirely
 * and we have to ensure that at least `id` and `type` are present
 * */ function normalizeSelect(query) {
    if (!query.select) {
        return query;
    }
    const selectedSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
    // If we already select all of `sys` we can just return
    // since we're anyway fetching everything that is needed
    if (selectedSet.has('sys')) {
        return query;
    }
    // We don't select `sys` so we need to ensure the minimum set
    selectedSet.add('sys.id');
    selectedSet.add('sys.type');
    // Reassign the normalized sys properties
    return Object.assign(Object.assign({}, query), {
        select: [
            ...selectedSet
        ].join(',')
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/resolve-circular.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveCircular
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-ssr] (ecmascript)");
;
;
function resolveCircular(data, { resolveLinks, removeUnresolved }) {
    const wrappedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data);
    if (resolveLinks) {
        wrappedData.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(wrappedData, {
            removeUnresolved,
            itemEntryPoints: [
                'fields'
            ]
        });
    }
    return wrappedData;
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError
]);
class ValidationError extends Error {
    constructor(name, message){
        super(`Invalid "${name}" provided, ` + message);
        this.name = 'ValidationError';
    }
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-timestamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>validateTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-ssr] (ecmascript)");
;
function validateTimestamp(name, timestamp, options) {
    options = options || {};
    if (typeof timestamp !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"](name, `only numeric values are allowed for timestamps, provided type was "${typeof timestamp}"`);
    }
    if (options.maximum && timestamp > options.maximum) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"](name, `value (${timestamp}) cannot be further in the future than expected maximum (${options.maximum})`);
    }
    if (options.now && timestamp < options.now) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"](name, `value (${timestamp}) cannot be in the past, current time was ${options.now}`);
    }
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimelinePreviewParams",
    ()=>getTimelinePreviewParams,
    "isValidTimelinePreviewConfig",
    ()=>isValidTimelinePreviewConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-ssr] (ecmascript)");
;
;
function isValidRelease(release) {
    return !!(release && typeof release === 'object' && typeof release.lte === 'string');
}
function isValidTimestamp(timestamp) {
    return !!(timestamp && typeof timestamp === 'object' && (typeof timestamp.lte === 'string' || timestamp.lte instanceof Date));
}
const isValidTimelinePreviewConfig = (timelinePreview)=>{
    if (typeof timelinePreview !== 'object' || timelinePreview === null || Array.isArray(timelinePreview)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' parameter must be an object.`);
    }
    const hasRelease = isValidRelease(timelinePreview.release);
    const hasTimestamp = isValidTimestamp(timelinePreview.timestamp);
    if (!hasRelease && !hasTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' object must have at least one of 'release' or 'timestamp' with a valid 'lte' property.`);
    }
    return hasRelease || hasTimestamp;
};
const getTimelinePreviewParams = (params)=>{
    var _a, _b;
    const host = params === null || params === void 0 ? void 0 : params.host;
    const timelinePreview = (_a = params === null || params === void 0 ? void 0 : params.timelinePreview) !== null && _a !== void 0 ? _a : (_b = params === null || params === void 0 ? void 0 : params.alphaFeatures) === null || _b === void 0 ? void 0 : _b.timelinePreview;
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkEnableTimelinePreviewIsAllowed"])(host, timelinePreview);
    return {
        enabled,
        timelinePreview
    };
};
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEnableTimelinePreviewIsAllowed",
    ()=>checkEnableTimelinePreviewIsAllowed,
    "checkIncludeContentSourceMapsParamIsAllowed",
    ()=>checkIncludeContentSourceMapsParamIsAllowed,
    "validateLocaleParam",
    ()=>validateLocaleParam,
    "validateRemoveUnresolvedParam",
    ()=>validateRemoveUnresolvedParam,
    "validateResolveLinksParam",
    ()=>validateResolveLinksParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-ssr] (ecmascript)");
;
;
function checkLocaleParamIsAll(query) {
    if (query.locale === '*') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('locale', `The use of locale='*' is no longer supported.To fetch an entry in all existing locales,
      use client.withAllLocales instead of the locale='*' parameter.`);
    }
}
function checkLocaleParamExists(query) {
    if (query.locale) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('locale', 'The `locale` parameter is not allowed');
    }
}
function validateLocaleParam(query, isWithAllLocalesClient) {
    if (isWithAllLocalesClient) {
        checkLocaleParamExists(query);
    } else {
        checkLocaleParamIsAll(query);
    }
    return;
}
function validateResolveLinksParam(query) {
    if ('resolveLinks' in query) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('resolveLinks', `The use of the 'resolveLinks' parameter is no longer supported. By default, links are resolved.
      If you do not want to resolve links, use client.withoutLinkResolution.`);
    }
    return;
}
function validateRemoveUnresolvedParam(query) {
    if ('removeUnresolved' in query) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('removeUnresolved', `The use of the 'removeUnresolved' parameter is no longer supported. By default, unresolved links are kept as link objects.
      If you do not want to include unresolved links, use client.withoutUnresolvableLinks.`);
    }
    return;
}
function checkIncludeContentSourceMapsParamIsAllowed(host, includeContentSourceMaps) {
    if (includeContentSourceMaps === undefined) {
        return false;
    }
    if (typeof includeContentSourceMaps !== 'boolean') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('includeContentSourceMaps', `The 'includeContentSourceMaps' parameter must be a boolean.`);
    }
    const includeContentSourceMapsIsAllowed = typeof host === 'string' && host.startsWith('preview');
    if (includeContentSourceMaps && !includeContentSourceMapsIsAllowed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('includeContentSourceMaps', `The 'includeContentSourceMaps' parameter can only be used with the CPA. Please set host to 'preview.contentful.com' or 'preview.eu.contentful.com' to include Content Source Maps.
      `);
    }
    return includeContentSourceMaps;
}
function checkEnableTimelinePreviewIsAllowed(host, timelinePreview) {
    if (timelinePreview === undefined) {
        return false;
    }
    const isValidConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimelinePreviewConfig"])(timelinePreview);
    const isValidHost = typeof host === 'string' && host.startsWith('preview');
    if (isValidConfig && !isValidHost) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' parameter can only be used with the CPA. Please set host to 'preview.contentful.com' or 'preview.eu.contentful.com' to enable Timeline Preview.
      `);
    }
    return true;
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-search-parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>validateSearchParameters
]);
function validateSearchParameters(query) {
    for(const key in query){
        const value = query[key];
        // We don’t allow any objects as values for query parameters
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            throw new Error(`Objects are not supported as value for the "${key}" query parameter.`);
        }
    }
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeCursorPaginationParameters",
    ()=>normalizeCursorPaginationParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function normalizeCursorPaginationParameters(query) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cursor, pagePrev, pageNext, skip } = query, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(query, [
        "cursor",
        "pagePrev",
        "pageNext",
        "skip"
    ]);
    return Object.assign(Object.assign(Object.assign(Object.assign({}, rest), {
        cursor: true
    }), !!pagePrev && {
        pagePrev
    }), !!pageNext && {
        pageNext
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-response.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeCursorPaginationResponse",
    ()=>normalizeCursorPaginationResponse
]);
function extractQueryParam(key, url) {
    const queryString = url === null || url === void 0 ? void 0 : url.split('?')[1];
    if (!queryString) {
        return;
    }
    return new URLSearchParams(queryString).get(key);
}
const Pages = {
    prev: 'pagePrev',
    next: 'pageNext'
};
function normalizeCursorPaginationResponse(response) {
    const pages = {};
    for (const [responseKey, queryKey] of Object.entries(Pages)){
        const cursorToken = extractQueryParam(queryKey, response.pages[responseKey]);
        if (cursorToken) {
            pages[responseKey] = cursorToken;
        }
    }
    return Object.assign(Object.assign({}, response), {
        pages
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-contentful-api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createContentfulApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f40$contentful$2f$content$2d$source$2d$maps$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/@contentful/content-source-maps/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-ssr] (ecmascript) <export default as createRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-ssr] (ecmascript) <export default as errorHandler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$paged$2d$sync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/paged-sync.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-search-parameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/resolve-circular.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-timestamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-search-parameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-parameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-response.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Contentful Delivery API Client. Contains methods which allow access to the
 * different kinds of entities present in Contentful (Entries, Assets, etc).
 */ const ASSET_KEY_MAX_LIFETIME = 48 * 60 * 60;
class NotFoundError extends Error {
    constructor(id, environment, space){
        super('The resource could not be found.');
        this.sys = {
            type: 'Error',
            id: 'NotFound'
        };
        this.details = {
            type: 'Entry',
            id,
            environment,
            space
        };
    }
}
function createContentfulApi({ http, getGlobalOptions }, options) {
    const notFoundError = (id = 'unknown')=>{
        return new NotFoundError(id, getGlobalOptions().environment, getGlobalOptions().space);
    };
    const getBaseUrl = (context)=>{
        let baseUrl = context === 'space' ? getGlobalOptions().spaceBaseUrl : getGlobalOptions().environmentBaseUrl;
        if (!baseUrl) {
            throw new Error('Please define baseUrl for ' + context);
        }
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        return baseUrl;
    };
    function maybeEnableSourceMaps(query = {}) {
        var _a, _b;
        const params = http.httpClientParams;
        const includeContentSourceMaps = (_a = params === null || params === void 0 ? void 0 : params.includeContentSourceMaps) !== null && _a !== void 0 ? _a : (_b = params === null || params === void 0 ? void 0 : params.alphaFeatures) === null || _b === void 0 ? void 0 : _b.includeContentSourceMaps;
        const host = params === null || params === void 0 ? void 0 : params.host;
        const areAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkIncludeContentSourceMapsParamIsAllowed"])(host, includeContentSourceMaps);
        if (areAllowed) {
            query.includeContentSourceMaps = true;
            // Ensure that content source maps and required attributes are selected
            if (query.select) {
                const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
                selection.add('sys');
                query.select = Array.from(selection).join(',');
            }
        }
        return query;
    }
    function maybeEnableTimelinePreview(path) {
        const { enabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimelinePreviewParams"])(http.httpClientParams);
        return enabled ? `timeline/${path}` : path;
    }
    function maybeAddTimelinePreviewConfigToQuery(query) {
        const { enabled, timelinePreview } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimelinePreviewParams"])(http.httpClientParams);
        if (enabled) {
            if (timelinePreview === null || timelinePreview === void 0 ? void 0 : timelinePreview.release) {
                query.release = timelinePreview.release;
            }
            if (timelinePreview === null || timelinePreview === void 0 ? void 0 : timelinePreview.timestamp) {
                query.timestamp = timelinePreview.timestamp;
            }
        }
        return query;
    }
    function maybeEncodeCPAResponse(data, config) {
        var _a;
        const includeContentSourceMaps = (_a = config === null || config === void 0 ? void 0 : config.params) === null || _a === void 0 ? void 0 : _a.includeContentSourceMaps;
        if (includeContentSourceMaps) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f40$contentful$2f$content$2d$source$2d$maps$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCPAResponse"])(data);
        }
        return data;
    }
    async function get({ context, path, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.get(baseUrl + path, config);
            return maybeEncodeCPAResponse(response.data, config);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function post({ context, path, data, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.post(baseUrl + path, data, config);
            return response.data;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function getSpace() {
        return get({
            context: 'space',
            path: ''
        });
    }
    async function getContentType(id) {
        return get({
            context: 'environment',
            path: `content_types/${id}`
        });
    }
    async function getContentTypes(query = {}) {
        return get({
            context: 'environment',
            path: 'content_types',
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                query
            })
        });
    }
    async function getEntry(id, query = {}) {
        return makeGetEntry(id, query, options);
    }
    async function getEntries(query = {}) {
        return makeGetEntries(query, options);
    }
    async function getEntriesWithCursor(query = {}) {
        const response = await makeGetEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeCursorPaginationParameters"])(query), options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeCursorPaginationResponse"])(response);
    }
    async function makeGetEntry(id, query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        return internalGetEntry(id, withAllLocales ? Object.assign(Object.assign({}, query), {
            locale: '*'
        }) : query, options);
    }
    async function internalGetEntry(id, query, options) {
        if (!id) {
            throw notFoundError(id);
        }
        try {
            const response = await internalGetEntries(Object.assign({
                'sys.id': id
            }, maybeEnableSourceMaps(query)), options);
            if (response.items.length > 0) {
                return response.items[0];
            } else {
                throw notFoundError(id);
            }
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function makeGetEntries(query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        return internalGetEntries(withAllLocales ? Object.assign(Object.assign({}, query), {
            locale: '*'
        }) : query, options);
    }
    function prepareQuery(query) {
        // First, add timeline preview config if enabled
        const withTimelinePreview = maybeAddTimelinePreviewConfigToQuery(Object.assign({}, query));
        // Then, apply source maps and other normalizations
        return maybeEnableSourceMaps((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(withTimelinePreview)));
    }
    async function internalGetEntries(query, options) {
        const { withoutLinkResolution, withoutUnresolvableLinks } = options;
        try {
            const entries = await get({
                context: 'environment',
                path: maybeEnableTimelinePreview('entries'),
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(entries, {
                resolveLinks: !withoutLinkResolution,
                removeUnresolved: withoutUnresolvableLinks !== null && withoutUnresolvableLinks !== void 0 ? withoutUnresolvableLinks : false
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function getAsset(id, query = {}) {
        return makeGetAsset(id, query, options);
    }
    async function getAssets(query = {}) {
        return makeGetAssets(query, options);
    }
    async function getAssetsWithCursor(query = {}) {
        const response = await makeGetAssets((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeCursorPaginationParameters"])(query), options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeCursorPaginationResponse"])(response);
    }
    async function makeGetAssets(query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        const localeSpecificQuery = withAllLocales ? Object.assign(Object.assign({}, query), {
            locale: '*'
        }) : query;
        return internalGetAssets(localeSpecificQuery);
    }
    async function internalGetAsset(id, query) {
        try {
            return get({
                context: 'environment',
                path: maybeEnableTimelinePreview(`assets/${id}`),
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function makeGetAsset(id, query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        const localeSpecificQuery = withAllLocales ? Object.assign(Object.assign({}, query), {
            locale: '*'
        }) : query;
        return internalGetAsset(id, localeSpecificQuery);
    }
    async function internalGetAssets(query) {
        try {
            return get({
                context: 'environment',
                path: maybeEnableTimelinePreview('assets'),
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function getTag(id) {
        return get({
            context: 'environment',
            path: `tags/${id}`
        });
    }
    async function getTags(query = {}) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        return get({
            context: 'environment',
            path: 'tags',
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
            })
        });
    }
    async function createAssetKey(expiresAt) {
        try {
            const now = Math.floor(Date.now() / 1000);
            const currentMaxLifetime = now + ASSET_KEY_MAX_LIFETIME;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('expiresAt', expiresAt, {
                maximum: currentMaxLifetime,
                now
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
        return post({
            context: 'environment',
            path: 'asset_keys',
            data: {
                expiresAt
            }
        });
    }
    async function getLocales(query = {}) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query);
        return get({
            context: 'environment',
            path: 'locales',
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query)
            })
        });
    }
    async function sync(query, syncOptions = {
        paginate: true
    }) {
        return makePagedSync(query, syncOptions, options);
    }
    async function makePagedSync(query, syncOptions, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        const combinedOptions = Object.assign(Object.assign({}, syncOptions), options);
        switchToEnvironment(http);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$paged$2d$sync$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(http, query, combinedOptions);
    }
    function parseEntries(data) {
        return makeParseEntries(data, options);
    }
    function makeParseEntries(data, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        return internalParseEntries(data, options);
    }
    function internalParseEntries(data, options) {
        const { withoutLinkResolution, withoutUnresolvableLinks } = options;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data, {
            resolveLinks: !withoutLinkResolution,
            removeUnresolved: withoutUnresolvableLinks !== null && withoutUnresolvableLinks !== void 0 ? withoutUnresolvableLinks : false
        });
    }
    function getConceptScheme(id, query = {}) {
        return internalGetConceptScheme(id, query);
    }
    async function internalGetConceptScheme(id, query = {}) {
        try {
            return get({
                context: 'environment',
                path: `taxonomy/concept-schemes/${id}`,
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    function getConceptSchemes(query = {}) {
        return internalGetConceptSchemes(query);
    }
    async function internalGetConceptSchemes(query = {}) {
        try {
            return get({
                context: 'environment',
                path: 'taxonomy/concept-schemes',
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    function getConcept(id, query = {}) {
        return internalGetConcept(id, query);
    }
    async function internalGetConcept(id, query = {}) {
        try {
            return get({
                context: 'environment',
                path: `taxonomy/concepts/${id}`,
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    function getConcepts(query = {}) {
        return internalGetConcepts(query);
    }
    async function internalGetConcepts(query = {}) {
        try {
            return get({
                context: 'environment',
                path: 'taxonomy/concepts',
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    function getConceptAncestors(id, query = {}) {
        return internalGetConceptAncestors(id, query);
    }
    async function internalGetConceptAncestors(id, query = {}) {
        try {
            return get({
                context: 'environment',
                path: `taxonomy/concepts/${id}/ancestors`,
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    function getConceptDescendants(id, query = {}) {
        return internalGetConceptDescendants(id, query);
    }
    async function internalGetConceptDescendants(id, query = {}) {
        try {
            return get({
                context: 'environment',
                path: `taxonomy/concepts/${id}/descendants`,
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    /*
     * Switches BaseURL to use /environments path
     * */ function switchToEnvironment(http) {
        http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
    }
    return {
        version: "0.0.0-determined-by-semantic-release",
        getSpace,
        getContentType,
        getContentTypes,
        getAsset,
        getAssets,
        getAssetsWithCursor,
        getTag,
        getTags,
        getLocales,
        parseEntries,
        sync,
        getEntry,
        getEntries,
        getEntriesWithCursor,
        getConceptScheme,
        getConceptSchemes,
        getConcept,
        getConcepts,
        getConceptAncestors,
        getConceptDescendants,
        createAssetKey
    };
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/make-client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeClient",
    ()=>makeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-contentful-api.js [app-ssr] (ecmascript)");
;
function create({ http, getGlobalOptions }, options, makeInnerClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        http,
        getGlobalOptions
    }, options);
    const response = client ? client : {};
    Object.defineProperty(response, 'withAllLocales', {
        get: ()=>makeInnerClient(Object.assign(Object.assign({}, options), {
                withAllLocales: true
            }))
    });
    Object.defineProperty(response, 'withoutLinkResolution', {
        get: ()=>makeInnerClient(Object.assign(Object.assign({}, options), {
                withoutLinkResolution: true
            }))
    });
    Object.defineProperty(response, 'withoutUnresolvableLinks', {
        get: ()=>makeInnerClient(Object.assign(Object.assign({}, options), {
                withoutUnresolvableLinks: true
            }))
    });
    return Object.create(response);
}
const makeClient = ({ http, getGlobalOptions })=>{
    function makeInnerClient(options) {
        return create({
            http,
            getGlobalOptions
        }, options, makeInnerClient);
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        http,
        getGlobalOptions
    }, {
        withoutLinkResolution: false,
        withAllLocales: false,
        withoutUnresolvableLinks: false
    });
    return Object.assign(Object.assign({}, client), {
        get withAllLocales () {
            return makeInnerClient({
                withAllLocales: true,
                withoutLinkResolution: false,
                withoutUnresolvableLinks: false
            });
        },
        get withoutLinkResolution () {
            return makeInnerClient({
                withAllLocales: false,
                withoutLinkResolution: true,
                withoutUnresolvableLinks: false
            });
        },
        get withoutUnresolvableLinks () {
            return makeInnerClient({
                withAllLocales: false,
                withoutLinkResolution: false,
                withoutUnresolvableLinks: true
            });
        }
    });
};
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/contentful.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getUserAgentHeader$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-ssr] (ecmascript) <export default as getUserAgentHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createHttpClient$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-ssr] (ecmascript) <export default as createHttpClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$make$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/make-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * Contentful Delivery API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Delivery API.
 */ /**
 * Create a client instance
 * @param params - Client initialization parameters
 * @category Client
 * @example
 * ```typescript
 * const contentful = require('contentful')
 * const client = contentful.createClient({
 *   accessToken: 'myAccessToken',
 *   space: 'mySpaceId'
 * })
 * ```
 */ function createClient(params) {
    if (!params.accessToken) {
        throw new TypeError('Expected parameter accessToken');
    }
    if (!params.space) {
        throw new TypeError('Expected parameter space');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(params);
    const defaultConfig = {
        resolveLinks: true,
        removeUnresolved: false,
        defaultHostname: 'cdn.contentful.com',
        environment: 'master'
    };
    const config = Object.assign(Object.assign({}, defaultConfig), params);
    const userAgentHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getUserAgentHeader$3e$__["getUserAgentHeader"])(`contentful.js/${"0.0.0-determined-by-semantic-release"}`, config.application, config.integration);
    config.headers = Object.assign(Object.assign({}, config.headers), {
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': userAgentHeader
    });
    const http = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createHttpClient$3e$__["createHttpClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], config);
    if (!http.defaults.baseURL) {
        throw new Error('Please define a baseURL');
    }
    const getGlobalOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobalOptions"])({
        space: config.space,
        environment: config.environment,
        spaceBaseUrl: http.defaults.baseURL,
        environmentBaseUrl: `${http.defaults.baseURL}environments/${config.environment}`
    });
    // Append environment to baseURL
    http.defaults.baseURL = getGlobalOptions({}).environmentBaseUrl;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$make$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeClient"])({
        http,
        getGlobalOptions
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$contentful$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/contentful.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/@contentful/content-source-maps/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPPORTED_WIDGETS",
    ()=>ce,
    "clone",
    ()=>Q,
    "combine",
    ()=>w,
    "createSourceMapMetadata",
    ()=>C,
    "decode",
    ()=>ae,
    "encode",
    ()=>ie,
    "encodeCPAResponse",
    ()=>le,
    "encodeField",
    ()=>P,
    "encodeGraphQLResponse",
    ()=>fe,
    "encodeRichTextValue",
    ()=>oe,
    "isBuiltinNamespace",
    ()=>B,
    "isSupportedWidget",
    ()=>D,
    "splitEncoding",
    ()=>ue
]);
var W = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}, L = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}, j = new Array(4).fill(String.fromCodePoint(L[0])).join(""), V = "\0";
function U(t) {
    let n = JSON.stringify(t);
    return `${j}${Array.from(n).map((o)=>{
        let e = o.charCodeAt(0);
        if (e > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${o} (${e})`);
        return Array.from(e.toString(4).padStart(4, "0")).map((r)=>String.fromCodePoint(L[r])).join("");
    }).join("")}`;
}
function Z(t) {
    return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? !1 : !!Date.parse(t);
}
function q(t) {
    try {
        new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
    } catch (n) {
        return !1;
    }
    return !0;
}
function G(t, n, o = "auto") {
    return o === !0 || o === "auto" && (Z(t) || q(t)) ? t : `${t}${U(n)}`;
}
var H = Object.fromEntries(Object.entries(L).map((t)=>t.reverse())), F = Object.fromEntries(Object.entries(W).map((t)=>t.reverse())), K = `${Object.values(W).map((t)=>`\\u{${t.toString(16)}}`).join("")}`, O = new RegExp(`[${K}]{4,}`, "gu");
function X(t) {
    let n = t.match(O);
    if (n) return Y(n[0], !0)[0];
}
function Y(t, n = !1) {
    let o = Array.from(t);
    if (o.length % 2 === 0) {
        if (o.length % 4 || !t.startsWith(j)) return ee(o, n);
    } else throw new Error("Encoded data has invalid length");
    let e = [];
    for(let r = o.length * 0.25; r--;){
        let s = o.slice(r * 4, r * 4 + 4).map((c)=>H[c.codePointAt(0)]).join("");
        e.unshift(String.fromCharCode(parseInt(s, 4)));
    }
    if (n) {
        e.shift();
        let r = e.indexOf(V);
        return r === -1 && (r = e.length), [
            JSON.parse(e.slice(0, r).join(""))
        ];
    }
    return e.join("").split(V).filter(Boolean).map((r)=>JSON.parse(r));
}
function ee(t, n) {
    var o;
    let e = [];
    for(let i = t.length * 0.5; i--;){
        let u = `${F[t[i * 2].codePointAt(0)]}${F[t[i * 2 + 1].codePointAt(0)]}`;
        e.unshift(String.fromCharCode(parseInt(u, 16)));
    }
    let r = [], s = [
        e.join("")
    ], c = 10;
    for(; s.length;){
        let i = s.shift();
        try {
            if (r.push(JSON.parse(i)), n) return r;
        } catch (u) {
            if (!c--) throw u;
            let a = +((o = u.message.match(/\sposition\s(\d+)$/)) == null ? void 0 : o[1]);
            if (!a) throw u;
            s.unshift(i.substring(0, a), i.substring(a));
        }
    }
    return r;
}
function te(t) {
    var n;
    return {
        cleaned: t.replace(O, ""),
        encoded: ((n = t.match(O)) == null ? void 0 : n[0]) || ""
    };
}
function w(t, n) {
    return G(t, n);
}
function ie(t) {
    return U(t);
}
function ae(t) {
    return X(t);
}
function ue(t) {
    return te(t);
}
var x, k;
function ne() {
    if (k) return x;
    k = 1;
    var t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
    return x = function(e, r, s) {
        if (n.call(r) !== "[object Function]") throw new TypeError("iterator must be a function");
        var c = e.length;
        if (c === +c) for(var i = 0; i < c; i++)r.call(s, e[i], i, e);
        else for(var u in e)t.call(e, u) && r.call(s, e[u], u, e);
    }, x;
}
var I, _;
function re() {
    if (_) return I;
    _ = 1;
    var t = ne();
    I = n;
    function n(o, e, r) {
        if (arguments.length === 3) return n.set(o, e, r);
        if (arguments.length === 2) return n.get(o, e);
        var s = n.bind(n, o);
        for(var c in n)n.hasOwnProperty(c) && (s[c] = n[c].bind(s, o));
        return s;
    }
    return n.get = function(e, r) {
        for(var s = Array.isArray(r) ? r : n.parse(r), c = 0; c < s.length; ++c){
            var i = s[c];
            if (!(typeof e == "object" && i in e)) throw new Error("Invalid reference token: " + i);
            e = e[i];
        }
        return e;
    }, n.set = function(e, r, s) {
        var c = Array.isArray(r) ? r : n.parse(r), i = c[0];
        if (c.length === 0) throw Error("Can not set the root object");
        for(var u = 0; u < c.length - 1; ++u){
            var a = c[u];
            typeof a != "string" && typeof a != "number" && (a = String(a)), !(a === "__proto__" || a === "constructor" || a === "prototype") && (a === "-" && Array.isArray(e) && (a = e.length), i = c[u + 1], a in e || (i.match(/^(\d+|-)$/) ? e[a] = [] : e[a] = {}), e = e[a]);
        }
        return i === "-" && Array.isArray(e) && (i = e.length), e[i] = s, this;
    }, n.remove = function(o, e) {
        var r = Array.isArray(e) ? e : n.parse(e), s = r[r.length - 1];
        if (s === void 0) throw new Error('Invalid JSON pointer for remove: "' + e + '"');
        var c = n.get(o, r.slice(0, -1));
        if (Array.isArray(c)) {
            var i = +s;
            if (s === "" && isNaN(i)) throw new Error('Invalid array index: "' + s + '"');
            Array.prototype.splice.call(c, i, 1);
        } else delete c[s];
    }, n.dict = function(e, r) {
        var s = {};
        return n.walk(e, function(c, i) {
            s[i] = c;
        }, r), s;
    }, n.walk = function(e, r, s) {
        var c = [];
        s = s || function(i) {
            var u = Object.prototype.toString.call(i);
            return u === "[object Object]" || u === "[object Array]";
        }, function i(u) {
            t(u, function(a, l) {
                c.push(String(l)), s(a) ? i(a) : r(a, n.compile(c)), c.pop();
            });
        }(e);
    }, n.has = function(e, r) {
        try {
            n.get(e, r);
        } catch (s) {
            return !1;
        }
        return !0;
    }, n.escape = function(e) {
        return e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
    }, n.unescape = function(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
    }, n.parse = function(e) {
        if (e === "") return [];
        if (e.charAt(0) !== "/") throw new Error("Invalid JSON pointer: " + e);
        return e.substring(1).split(/\//).map(n.unescape);
    }, n.compile = function(e) {
        return e.length === 0 ? "" : "/" + e.map(n.escape).join("/");
    }, I;
}
var p = re();
const oe = ({ pointer: t, mappings: n, data: o, hiddenStrings: e })=>{
    const r = n[t];
    if (r) {
        delete n[t];
        const s = b(o, t);
        for (const c of s){
            n[c] = r;
            const i = p.get(o, c), u = w(i, e);
            p.set(o, c, u);
        }
    } else {
        const s = b(o, t);
        for (const c of s){
            const i = p.get(o, c), u = w(i, e);
            p.set(o, c, u);
        }
    }
};
function se(t) {
    return "content" in t && !!t.content;
}
const b = (t, n = "")=>{
    const o = [], e = p.get(t, n);
    if (se(e)) for(let r = 0; r < e.content.length; r++)e.content[r].nodeType === "text" ? o.push(`${n}/content/${r}/value`) : o.push(...b(t, `${n}/content/${r}`));
    return o;
}, C = ({ entityId: t, entityType: n, space: o, environment: e, field: r, locale: s, editorInterface: c, fieldType: i, targetOrigin: u, platform: a })=>{
    const d = {
        origin: "contentful.com",
        href: `${`${u || "https://app.contentful.com"}/spaces/${o}/environments/${e}`}/${n === "Entry" ? "entries" : "assets"}/${t}/?focusedField=${r}&focusedLocale=${s}&source=vercel-content-link`,
        contentful: {
            editorInterface: c,
            fieldType: i
        }
    };
    return a === "vercel" && delete d.contentful, d;
}, B = (t)=>[
        "builtin",
        "sidebar-builtin",
        "editor-builtin"
    ].includes(t), D = (t)=>ce.includes(t);
function Q(t) {
    if (typeof structuredClone == "function") return structuredClone(t);
    try {
        return JSON.parse(JSON.stringify(t));
    } catch (n) {
        return console.warn("Failed to clone data:", t, n), t;
    }
}
const ce = [
    "singleLine",
    "tagEditor",
    "listInput",
    "checkbox",
    "richTextEditor",
    "multipleLine"
];
function P(t, n, o, e, r, s, c) {
    const i = c ? n[c] : n;
    switch(t){
        case "Symbol":
            {
                const u = w(i, o);
                p.set(e, r, u);
                break;
            }
        case "Text":
            {
                const u = w(i, o);
                p.set(e, r, u);
                break;
            }
        case "RichText":
            {
                oe({
                    pointer: "",
                    mappings: s,
                    data: i,
                    hiddenStrings: o
                });
                break;
            }
        case "Array":
            {
                const u = i.map((a)=>typeof a == "string" ? w(a, o) : a);
                p.set(e, r, u);
                break;
            }
    }
}
const fe = (t, n, o)=>{
    if (!t || !t.extensions || !t.extensions.contentSourceMaps) return console.error("GraphQL response does not contain Content Source Maps information.", t), t;
    const e = Q(t), { spaces: r, environments: s, editorInterfaces: c, fields: i, locales: u, entries: a, assets: l, mappings: m, fieldTypes: v } = e.extensions.contentSourceMaps, y = e;
    for(const d in m){
        const { source: f } = m[d], h = "entry" in f ? a[f.entry] : l[f.asset], M = "entry" in f ? "Entry" : "Asset";
        if (!h) return e;
        const g = r[h.space], A = s[h.environment], E = h.id, S = i[f.field], T = u[f.locale], N = c[f.editorInterface], J = v[f.fieldType];
        if (!(B(N.widgetNamespace) && !D(N.widgetId)) && p.has(y, d)) {
            const R = p.get(y, d);
            if (R !== null) {
                const z = C({
                    entityId: E,
                    entityType: M,
                    space: g,
                    environment: A,
                    field: S,
                    locale: T,
                    editorInterface: N,
                    fieldType: J,
                    targetOrigin: n,
                    platform: o
                });
                P(J, R, z, y, d, m);
            }
        }
    }
    return e;
}, $ = (t, n, o, e, r)=>{
    if (!t.fields) return;
    const { contentSourceMaps: s } = t.sys;
    if (!s) return;
    const { mappings: c } = s;
    for(const i in c){
        const { source: u } = c[i], a = t.sys.space.sys.id, l = t.sys.environment.sys.id, m = t.sys.id, v = t.sys.type, y = n[u.fieldType], d = o[u.editorInterface];
        if (B(d.widgetNamespace) && !D(d.widgetId)) continue;
        const f = i.startsWith("/") ? i : `/${i}`;
        if (p.has(t, f)) {
            const h = p.get(t, f);
            if (h === null) return;
            const g = f.split("/").pop();
            if (!g) {
                console.error("Field name could not be extracted from the pointer", f);
                return;
            }
            const A = t.sys.locale;
            if (A) {
                const E = C({
                    entityId: m,
                    entityType: v,
                    space: a,
                    environment: l,
                    field: g,
                    locale: A,
                    editorInterface: d,
                    fieldType: y,
                    targetOrigin: e,
                    platform: r
                });
                P(y, h, E, t, f, c);
            } else Object.keys(h).forEach((S)=>{
                const T = C({
                    entityId: m,
                    entityType: v,
                    space: a,
                    environment: l,
                    field: g,
                    locale: S,
                    editorInterface: d,
                    fieldType: y,
                    targetOrigin: e,
                    platform: r
                });
                P(y, h, T, t, `${f}/${S}`, c, S);
            });
        }
    }
}, le = (t, n, o)=>{
    var r;
    const e = Q(t);
    if (e.sys && "items" in e) {
        const s = e;
        if (!((r = s.sys) != null && r.contentSourceMapsLookup)) return s;
        const { contentSourceMapsLookup: { fieldTypes: c, editorInterfaces: i } } = s.sys, { items: u, includes: a } = s;
        u.forEach((l)=>$(l, c, i, n, o)), a && a.Entry && a.Entry.forEach((l)=>$(l, c, i, n, o)), a && a.Asset && a.Asset.forEach((l)=>$(l, c, i, n, o));
    } else {
        const s = e;
        if (!s.sys.contentSourceMapsLookup) return console.error("Content source maps lookup data is missing"), s;
        $(s, s.sys.contentSourceMapsLookup.fieldTypes, s.sys.contentSourceMapsLookup.editorInterfaces, n, o);
    }
    return e;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-ssr] (ecmascript)");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
;
var UNRESOLVED_LINK = {}; // unique object to avoid polyfill bloat using Symbol()
/**
 * isLink Function
 * Checks if the object has sys.type "Link"
 * @param object
 */ var isLink = function isLink(object) {
    return object && object.sys && object.sys.type === 'Link';
};
/**
 * isResourceLink Function
 * Checks if the object has sys.type "ResourceLink"
 * @param object
 */ var isResourceLink = function isResourceLink(object) {
    return object && object.sys && object.sys.type === 'ResourceLink';
};
/**
 * Creates a key with spaceId and a key without for entityMap
 *
 * @param {*} sys
 * @param {String} sys.type
 * @param {String} sys.id
 * @param {*} sys.space
 * @param {*} sys.space.sys
 * @param {String} sys.space.id
 * @return {string[]}
 */ var makeEntityMapKeys = function makeEntityMapKeys(sys) {
    if (sys.space && sys.environment) {
        return [
            sys.type + '!' + sys.id,
            sys.space.sys.id + '!' + sys.environment.sys.id + '!' + sys.type + '!' + sys.id
        ];
    }
    return [
        sys.type + '!' + sys.id
    ];
};
/**
 * Looks up in entityMap
 *
 * @param entityMap
 * @param {*} linkData
 * @param {String} linkData.type
 * @param {String} linkData.linkType
 * @param {String} linkData.id
 * @param {String} linkData.urn
 * @return {String}
 */ var lookupInEntityMap = function lookupInEntityMap(entityMap, linkData) {
    var entryId = linkData.entryId, linkType = linkData.linkType, spaceId = linkData.spaceId, environmentId = linkData.environmentId;
    if (spaceId && environmentId) {
        return entityMap.get(spaceId + '!' + environmentId + '!' + linkType + '!' + entryId);
    }
    return entityMap.get(linkType + '!' + entryId);
};
var getIdsFromUrn = function getIdsFromUrn(urn) {
    var regExp = /.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;
    if (!regExp.test(urn)) {
        return undefined;
    }
    // eslint-disable-next-line no-unused-vars
    var _urn$match = urn.match(regExp), _urn$match2 = _slicedToArray(_urn$match, 4), _ = _urn$match2[0], spaceId = _urn$match2[1], _urn$match2$ = _urn$match2[2], environmentId = _urn$match2$ === undefined ? 'master' : _urn$match2$, entryId = _urn$match2[3];
    return {
        spaceId: spaceId,
        environmentId: environmentId,
        entryId: entryId
    };
};
/**
 * getResolvedLink Function
 *
 * @param entityMap
 * @param link
 * @return {undefined}
 */ var getResolvedLink = function getResolvedLink(entityMap, link) {
    var _link$sys = link.sys, type = _link$sys.type, linkType = _link$sys.linkType;
    if (type === 'ResourceLink') {
        if (!linkType.startsWith('Contentful:')) {
            return link;
        }
        var urn = link.sys.urn;
        var _getIdsFromUrn = getIdsFromUrn(urn), spaceId = _getIdsFromUrn.spaceId, environmentId = _getIdsFromUrn.environmentId, _entryId = _getIdsFromUrn.entryId;
        var extractedLinkType = linkType.split(':')[1];
        return lookupInEntityMap(entityMap, {
            linkType: extractedLinkType,
            entryId: _entryId,
            spaceId: spaceId,
            environmentId: environmentId
        }) || UNRESOLVED_LINK;
    }
    var entryId = link.sys.id;
    return lookupInEntityMap(entityMap, {
        linkType: linkType,
        entryId: entryId
    }) || UNRESOLVED_LINK;
};
/**
 * cleanUpLinks Function
 * - Removes unresolvable links from Arrays and Objects
 *
 * @param {Object[]|Object} input
 */ var cleanUpLinks = function cleanUpLinks(input) {
    if (Array.isArray(input)) {
        return input.filter(function(val) {
            return val !== UNRESOLVED_LINK;
        });
    }
    for(var key in input){
        if (input[key] === UNRESOLVED_LINK) {
            delete input[key];
        }
    }
    return input;
};
/**
 * walkMutate Function
 * @param input
 * @param predicate
 * @param mutator
 * @param removeUnresolved
 * @return {*}
 */ var walkMutate = function walkMutate(input, predicate, mutator, removeUnresolved) {
    if (predicate(input)) {
        return mutator(input);
    }
    if (input && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
        for(var key in input){
            // eslint-disable-next-line no-prototype-builtins
            if (input.hasOwnProperty(key)) {
                input[key] = walkMutate(input[key], predicate, mutator, removeUnresolved);
            }
        }
        if (removeUnresolved) {
            input = cleanUpLinks(input);
        }
    }
    return input;
};
var normalizeLink = function normalizeLink(entityMap, link, removeUnresolved) {
    var resolvedLink = getResolvedLink(entityMap, link);
    if (resolvedLink === UNRESOLVED_LINK) {
        return removeUnresolved ? resolvedLink : link;
    }
    return resolvedLink;
};
var makeEntryObject = function makeEntryObject(item, itemEntryPoints) {
    if (!Array.isArray(itemEntryPoints)) {
        return item;
    }
    var entryPoints = Object.keys(item).filter(function(ownKey) {
        return itemEntryPoints.indexOf(ownKey) !== -1;
    });
    return entryPoints.reduce(function(entryObj, entryPoint) {
        entryObj[entryPoint] = item[entryPoint];
        return entryObj;
    }, {});
};
/**
 * resolveResponse Function
 * Resolves contentful response to normalized form.
 * @param {Object} response Contentful response
 * @param {{removeUnresolved: Boolean, itemEntryPoints: Array<String>}|{}} options
 * @param {Boolean} options.removeUnresolved - Remove unresolved links default:false
 * @param {Array<String>} options.itemEntryPoints - Resolve links only in those item properties
 * @return {Object}
 */ var resolveResponse = function resolveResponse(response, options) {
    options = options || {};
    if (!response.items) {
        return [];
    }
    var responseClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response);
    var allIncludes = Object.keys(responseClone.includes || {}).reduce(function(all, type) {
        return [].concat(_toConsumableArray(all), _toConsumableArray(response.includes[type]));
    }, []);
    var allEntries = [].concat(_toConsumableArray(responseClone.items), _toConsumableArray(allIncludes)).filter(function(entity) {
        return Boolean(entity.sys);
    });
    var entityMap = new Map(allEntries.reduce(function(acc, entity) {
        var entries = makeEntityMapKeys(entity.sys).map(function(key) {
            return [
                key,
                entity
            ];
        });
        acc.push.apply(acc, _toConsumableArray(entries));
        return acc;
    }, []));
    allEntries.forEach(function(item) {
        var entryObject = makeEntryObject(item, options.itemEntryPoints);
        Object.assign(item, walkMutate(entryObject, function(x) {
            return isLink(x) || isResourceLink(x);
        }, function(link) {
            return normalizeLink(entityMap, link, options.removeUnresolved);
        }, options.removeUnresolved));
    });
    return responseClone.items;
};
const __TURBOPACK__default__export__ = resolveResponse;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports = module.exports = stringify;
exports.getSerialize = serializer;
function stringify(obj, replacer, spaces, cycleReplacer) {
    return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}
function serializer(replacer, cycleReplacer) {
    var stack = [], keys = [];
    if (cycleReplacer == null) cycleReplacer = function(key, value) {
        if (stack[0] === value) return "[Circular ~]";
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
    return function(key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
        } else stack.push(value);
        return replacer == null ? value : replacer.call(this, key, value);
    };
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
];

//# sourceMappingURL=e1ddf_88ae376a._.js.map