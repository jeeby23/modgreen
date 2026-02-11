(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>bind
]);
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
"use strict";
;
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!isObject(val) || isBuffer(val)) {
        return false;
    }
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Buffer check
        if (isBuffer(obj)) {
            return;
        }
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    if (isBuffer(obj)) {
        return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        // Skip dangerous property names to prevent prototype pollution
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return;
        }
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else if (!skipUndefined || !isUndefined(val)) {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            Object.defineProperty(a, key, {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(val, thisArg),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            Object.defineProperty(a, key, {
                value: val,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xfeff) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    Object.defineProperty(constructor.prototype, "constructor", {
        value: constructor,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype)
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error("Can not rewrite read-only method '" + name + "'");
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            //Buffer check
            if (isBuffer(source)) {
                return source;
            }
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) {
        return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
            }
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === "function", isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick || _setImmediate;
// *********************
const isIterable = (thing)=>thing != null && isFunction(thing[iterator]);
const __TURBOPACK__default__export__ = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
class AxiosError extends Error {
    static from(error, code, config, request, response, customProps) {
        const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
    }
    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */ constructor(message, code, config, request, response){
        super(message);
        this.name = 'AxiosError';
        this.isAxiosError = true;
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        if (response) {
            this.response = response;
            this.status = response.status;
        }
    }
    toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
}
// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
const __TURBOPACK__default__export__ = AxiosError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line strict
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
'use strict';
;
;
;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(thing) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('target must be an object');
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(formData);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
        if (value === null) return '';
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isDate(value)) {
            return value.toISOString();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBoolean(value)) {
            return value.toString();
        }
        if (!useBlob && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Blob is not supported. Use a Buffer instead.');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(value) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isTypedArray(value)) {
            return useBlob && typeof Blob === 'function' ? new Blob([
                value
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) && isFlatArray(value) || (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(value) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]')) && (arr = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error('Circular reference detected in ' + path.join('.'));
        }
        stack.push(value);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(value, function each(el, key) {
            const result = !(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
}
const __TURBOPACK__default__export__ = toFormData;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
const __TURBOPACK__default__export__ = AxiosURLSearchParams;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
;
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function buildURL(url, params, options) {
    if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    const _options = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(options) ? {
        serialize: options
    } : options;
    const serializeFn = _options && _options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, _options);
    } else {
        serializedParams = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(params) ? params.toString() : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params, _options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const __TURBOPACK__default__export__ = InterceptorManager;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
const __TURBOPACK__default__export__ = typeof URLSearchParams !== 'undefined' ? URLSearchParams : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof FormData !== 'undefined' ? FormData : null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof Blob !== 'undefined' ? Blob : null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    isBrowser: true,
    classes: {
        URLSearchParams: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasBrowserEnv",
    ()=>hasBrowserEnv,
    "hasStandardBrowserEnv",
    ()=>hasStandardBrowserEnv,
    "hasStandardBrowserWebWorkerEnv",
    ()=>hasStandardBrowserWebWorkerEnv,
    "navigator",
    ()=>_navigator,
    "origin",
    ()=>origin
]);
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toURLEncodedForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
'use strict';
;
;
;
function toURLEncodedForm(data, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNode && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target) ? target.length : name;
        if (isLast) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(formData) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(formData.entries)) {
        const obj = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
const __TURBOPACK__default__export__ = formDataToJSON;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(data);
            if (isObjectPayload && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)) : data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isStream(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFile(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(data)) {
                return data.buffer;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, this.formSerializer).toString();
                }
                if ((isFileList = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isResponse(data) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (data && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, this.parseReviver);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.FormData,
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    defaults.headers[method] = {};
});
const __TURBOPACK__default__export__ = defaults;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
const __TURBOPACK__default__export__ = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === 'set-cookie') {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
const $internals = Symbol('internals');
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(value)) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error('header name must be a non-empty string');
            }
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(header), valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(header) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(entry)) {
                    throw TypeError('Object iterator must return a key-value pair');
                }
                obj[key = entry[0]] = (dest = obj[key]) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self[header];
            }
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].freezeMethods(AxiosHeaders);
const __TURBOPACK__default__export__ = AxiosHeaders;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>transformData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
;
function transformData(fns, response) {
    const config = this || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const context = response || config;
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(context.headers);
    let data = context.data;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isCancel
]);
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
class CanceledError extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */ constructor(message, config, request){
        super(message == null ? 'canceled' : message, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_CANCELED, config, request);
        this.name = 'CanceledError';
        this.__CANCEL__ = true;
    }
}
const __TURBOPACK__default__export__ = CanceledError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>settle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request failed with status code ' + response.status, [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>parseProtocol
]);
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
const __TURBOPACK__default__export__ = speedometer;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
            invoke(args, now);
        } else {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(()=>{
                    timer = null;
                    invoke(lastArgs);
                }, threshold - passed);
            }
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
const __TURBOPACK__default__export__ = throttle;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asyncDecorator",
    ()=>asyncDecorator,
    "progressEventDecorator",
    ()=>progressEventDecorator,
    "progressEventReducer",
    ()=>progressEventReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(50, 250);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(()=>fn(...args));
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator && /(msie|trident)/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator.userAgent)) : ()=>true;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;
        const cookie = [
            `${name}=${encodeURIComponent(value)}`
        ];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNumber(expires)) {
            cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(path)) {
            cookie.push(`path=${path}`);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(domain)) {
            cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
            cookie.push('secure');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(sameSite)) {
            cookie.push(`SameSite=${sameSite}`);
        }
        document.cookie = cookie.join('; ');
    },
    read (name) {
        if (typeof document === 'undefined') return null;
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000, '/');
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAbsoluteURL
]);
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    if (typeof url !== 'string') {
        return false;
    }
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>combineURLs
]);
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildFullPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)");
'use strict';
;
;
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseURL, requestedURL);
    }
    return requestedURL;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
"use strict";
;
;
const headersToObject = (thing)=>thing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(target) && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
                caseless
            }, target, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge({}, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(source)) {
            return source.slice();
        }
        return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a, prop, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
        const merge = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (config)=>{
    const newConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(headers);
    newConfig.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) {
        headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(undefined); // browser handles it
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(data.getHeaders)) {
            // Node.js FormData (like form-data package)
            const formHeaders = data.getHeaders();
            // Only set safe headers to avoid overwriting security headers
            const allowedHeaders = [
                'content-type',
                'content-length'
            ];
            Object.entries(formHeaders).forEach(([key, val])=>{
                if (allowedHeaders.includes(key.toLowerCase())) {
                    headers.set(key, val);
                }
            });
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv) {
        withXSRFToken && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].read(xsrfCookieName);
            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
        }
    }
    return newConfig;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
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
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const __TURBOPACK__default__export__ = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let requestData = _config.data;
        const requestHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request aborted', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](msg, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = _config.responseType;
        }
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
            }
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_config.url);
        if (protocol && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].protocols.indexOf(protocol) === -1) {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unsupported protocol ' + protocol + ':', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? err : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`timeout of ${timeout}ms exceeded`, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(unsubscribe);
        return signal;
    }
};
const __TURBOPACK__default__export__ = composeSignals;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readBytes",
    ()=>readBytes,
    "streamChunk",
    ()=>streamChunk,
    "trackStream",
    ()=>trackStream
]);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable)){
        yield* streamChunk(chunk, chunkSize);
    }
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFetch",
    ()=>getFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const globalFetchAPI = (({ Request, Response })=>({
        Request,
        Response
    }))(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global);
const { ReadableStream, TextEncoder } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global;
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const factory = (env)=>{
    env = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
        skipUndefined: true
    }, globalFetchAPI, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
    const isRequestSupported = isFunction(Request);
    const isResponseSupported = isFunction(Response);
    if (!isFetchSupported) {
        return false;
    }
    const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
    const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(()=>{
        let duplexAccessed = false;
        const hasContentType = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) {
                    return method.call(res);
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Response type '${type}' is not supported`, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) {
            return 0;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(body)) {
            return body.size;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(body)) {
            const _request = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
                method: 'POST',
                body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(body) || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(body)) {
            return body.byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(body)) {
            body = body + '';
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(body)) {
            return (await encodeText(body)).byteLength;
        }
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                });
                let contentTypeHeader;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
                    headers.setContentType(contentTypeHeader);
                }
                if (_request.body) {
                    const [onProgress, flush] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(requestContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onUploadProgress)));
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(withCredentials)) {
                withCredentials = withCredentials ? 'include' : 'omit';
            }
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(responseContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onDownloadProgress), true)) || [];
                response = new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(resolvers, responseType) || 'text'](response, config);
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolve, reject, {
                    data: responseData,
                    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
                throw Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Network Error', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request, err && err.response), {
                    cause: err.cause || err
                });
            }
            throw __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(err, err && err.code, config, request, err && err.response);
        }
    };
};
const seedCache = new Map();
const getFetch = (config)=>{
    let env = config && config.env || {};
    const { fetch: fetch1, Request, Response } = env;
    const seeds = [
        Request,
        Response,
        fetch1
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : factory(env));
        map = target;
    }
    return target;
};
const adapter = getFetch();
const __TURBOPACK__default__export__ = adapter;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 * 
 * @type {Object<string, Function|Object>}
 */ const knownAdapters = {
    http: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    xhr: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fetch: {
        get: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFetch"]
    }
};
// Assign adapter names for easier debugging and identification
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value
        });
    }
});
/**
 * Render a rejection reason string for unknown or unsupported adapters
 * 
 * @param {string} reason
 * @returns {string}
 */ const renderReason = (reason)=>`- ${reason}`;
/**
 * Check if the adapter is resolved (function, null, or false)
 * 
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */ const isResolvedHandle = (adapter)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || adapter === null || adapter === false;
/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 * 
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */ function getAdapter(adapters, config) {
    adapters = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(adapters) ? adapters : [
        adapters
    ];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for(let i = 0; i < length; i++){
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Unknown adapter '${id}'`);
            }
        }
        if (adapter && (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || (adapter = adapter.get(config)))) {
            break;
        }
        rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
        let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
}
const __TURBOPACK__default__export__ = {
    /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */ getAdapter,
    /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */ adapters: knownAdapters
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dispatchRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config);
    }
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(config.headers);
    // Transform request data
    config.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter(config.adapter || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, response);
        response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, reason.response);
                reason.response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/env/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = "1.13.5";
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
;
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"] + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('options must be an object', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('option ' + opt + ' must be ' + result, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unknown option ' + opt, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION);
        }
    }
}
const __TURBOPACK__default__export__ = {
    assertOptions,
    validators
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
;
const validators = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](),
            response: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) {
                        err.stack = stack;
                    // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                        err.stack += '\n' + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean),
                legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) {
        // do nothing
        } else if (this.defaults.allowAbsoluteUrls !== undefined) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
            config.allowAbsoluteUrls = true;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(config, {
            baseUrl: validators.spelling('baseURL'),
            withXsrfToken: validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge(headers.common, headers[config.method]);
        headers && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            const transitional = config.transitional || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            const legacyInterceptorReqResOrdering = transitional && transitional.legacyInterceptorReqResOrdering;
            if (legacyInterceptorReqResOrdering) {
                requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            } else {
                requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            }
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len){
                promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const fullPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
const __TURBOPACK__default__export__ = Axios;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
'use strict';
;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const __TURBOPACK__default__export__ = CancelToken;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>spread
]);
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAxiosError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
function isAxiosError(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(payload) && payload.isAxiosError === true;
}
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const __TURBOPACK__default__export__ = HttpStatusCode;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)");
'use strict';
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
;
;
;
;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultConfig);
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.request, context);
    // Copy axios.prototype to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Expose Axios class to allow class inheritance
axios.Axios = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose Cancel & CancelToken
axios.CanceledError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.CancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.isCancel = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"];
axios.toFormData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose AxiosError class
axios.AxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose isAxiosError
axios.isAxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose mergeConfig
axios.mergeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.AxiosHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.formToJSON = (thing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter;
axios.HttpStatusCode = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.default = axios;
const __TURBOPACK__default__export__ = axios;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/async-token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>asyncToken
]);
function asyncToken(instance, getToken) {
    instance.interceptors.request.use({
        "asyncToken.use": function(config) {
            return getToken().then({
                "asyncToken.use": (accessToken)=>{
                    config.headers.set('Authorization', `Bearer ${accessToken}`);
                    return config;
                }
            }["asyncToken.use"]);
        }
    }["asyncToken.use"]);
}
;
 //# sourceMappingURL=async-token.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/process/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len){
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(var i = 1; i < arguments.length; i++){
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/process/browser.js [app-client] (ecmascript)");
;
function isNode() {
    /**
     * Polyfills of 'process' might set process.browser === true
     *
     * See:
     * https://github.com/webpack/node-libs-browser/blob/master/mock/process.js#L8
     * https://github.com/defunctzombie/node-process/blob/master/browser.js#L156
     **/ return typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].browser;
}
function isReactNative() {
    return typeof window !== 'undefined' && 'navigator' in window && 'product' in window.navigator && window.navigator.product === 'ReactNative';
}
function getNodeVersion() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node ? `v${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node}` : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-client] (ecmascript)");
;
const delay = (ms)=>new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
const defaultWait = (attempts)=>{
    return Math.pow(Math.SQRT2, attempts);
};
function rateLimit(instance, maxRetry = 5) {
    const { responseLogger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"], requestLogger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"] } = instance.defaults;
    instance.interceptors.request.use({
        "rateLimit.use": function(config) {
            requestLogger(config);
            return config;
        }
    }["rateLimit.use"], {
        "rateLimit.use": function(error) {
            requestLogger(error);
            return Promise.reject(error);
        }
    }["rateLimit.use"]);
    instance.interceptors.response.use({
        "rateLimit.use": function(response) {
            // we don't need to do anything here
            responseLogger(response);
            return response;
        }
    }["rateLimit.use"], {
        "rateLimit.use": async function(error) {
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
                return delay(wait).then({
                    "rateLimit.use": ()=>instance(config)
                }["rateLimit.use"]);
            }
            return Promise.reject(error);
        }
    }["rateLimit.use"]);
}
;
 //# sourceMappingURL=rate-limit.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
module.exports = freeGlobal;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_root.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var freeGlobal = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_root.js [app-client] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_objectToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_objectToString.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), isArray = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isArray.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/pThrottle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit-throttle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rateLimitThrottle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$pThrottle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/pThrottle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-client] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$pThrottle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        limit,
        interval: 1000,
        strict: false
    });
}
var rateLimitThrottle = (axiosInstance, type = 'auto')=>{
    const { logHandler = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"] } = axiosInstance.defaults;
    let limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type) ? calculateLimit(type) : calculateLimit('auto', type);
    let throttle = createThrottle(limit, logHandler);
    let isCalculated = false;
    let requestInterceptorId = axiosInstance.interceptors.request.use({
        "rateLimitThrottle.use[requestInterceptorId]": (config)=>{
            return throttle({
                "rateLimitThrottle.use[requestInterceptorId]": ()=>config
            }["rateLimitThrottle.use[requestInterceptorId]"])();
        }
    }["rateLimitThrottle.use[requestInterceptorId]"], {
        "rateLimitThrottle.use[requestInterceptorId]": function(error) {
            return Promise.reject(error);
        }
    }["rateLimitThrottle.use[requestInterceptorId]"]);
    const responseInterceptorId = axiosInstance.interceptors.response.use({
        "rateLimitThrottle.use[responseInterceptorId]": (response)=>{
            if (!isCalculated && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type) && (type === 'auto' || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers['x-contentful-ratelimit-second-limit']) {
                const rawLimit = parseInt(response.headers['x-contentful-ratelimit-second-limit']);
                const nextLimit = calculateLimit(type, rawLimit);
                if (nextLimit !== limit) {
                    if (requestInterceptorId) {
                        axiosInstance.interceptors.request.eject(requestInterceptorId);
                    }
                    limit = nextLimit;
                    throttle = createThrottle(nextLimit, logHandler);
                    requestInterceptorId = axiosInstance.interceptors.request.use({
                        "rateLimitThrottle.use[responseInterceptorId]": (config)=>{
                            return throttle({
                                "rateLimitThrottle.use[responseInterceptorId]": ()=>config
                            }["rateLimitThrottle.use[responseInterceptorId]"])();
                        }
                    }["rateLimitThrottle.use[responseInterceptorId]"], {
                        "rateLimitThrottle.use[responseInterceptorId]": function(error) {
                            return Promise.reject(error);
                        }
                    }["rateLimitThrottle.use[responseInterceptorId]"]);
                }
                isCalculated = true;
            }
            return response;
        }
    }["rateLimitThrottle.use[responseInterceptorId]"], {
        "rateLimitThrottle.use[responseInterceptorId]": function(error) {
            return Promise.reject(error);
        }
    }["rateLimitThrottle.use[responseInterceptorId]"]);
    return ()=>{
        axiosInstance.interceptors.request.eject(requestInterceptorId);
        axiosInstance.interceptors.response.eject(responseInterceptorId);
    };
};
;
 //# sourceMappingURL=rate-limit-throttle.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
var utilInspect = {};
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
    /* eslint-env browser */ if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-list/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/eval.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/range.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/syntax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/uri.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/max.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/round.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/isNaN.js [app-client] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/gOPD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/gOPD.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/es-define-property/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/shams.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/shams.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/implementation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/implementation.js [app-client] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/reflectApply.js [app-client] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/actualApply.js [app-client] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/dunder-proto/get.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/dunder-proto/get.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-client] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-object-atoms/index.js [app-client] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/index.js [app-client] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/eval.js [app-client] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/range.js [app-client] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/ref.js [app-client] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/syntax.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/uri.js [app-client] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/abs.js [app-client] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/floor.js [app-client] (ecmascript)");
var max = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/max.js [app-client] (ecmascript)");
var min = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/min.js [app-client] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/pow.js [app-client] (ecmascript)");
var round = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/round.js [app-client] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/math-intrinsics/sign.js [app-client] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/gopd/index.js [app-client] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-define-property/index.js [app-client] (ecmascript)");
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
var hasSymbols = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/has-symbols/index.js [app-client] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/index.js [app-client] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Object.getPrototypeOf.js [app-client] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-proto/Reflect.getPrototypeOf.js [app-client] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionApply.js [app-client] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/functionCall.js [app-client] (ecmascript)");
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
var bind = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/function-bind/index.js [app-client] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/hasown/index.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bind-apply-helpers/index.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-weakmap/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/get-intrinsic/index.js [app-client] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/call-bound/index.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-client] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/es-errors/type.js [app-client] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/object-inspect/index.js [app-client] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-list/index.js [app-client] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-map/index.js [app-client] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel-weakmap/index.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/side-channel/index.js [app-client] (ecmascript)");
var utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-client] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/utils.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/stringify.js [app-client] (ecmascript)");
var parse = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/parse.js [app-client] (ecmascript)");
var formats = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/formats.js [app-client] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createDefaultOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/qs/lib/index.js [app-client] (ecmascript)");
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stringify(params);
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createHttpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$async$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/async-token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2d$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/rate-limit-throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-client] (ecmascript)");
;
;
;
;
;
function copyHttpClientParams(options) {
    const copiedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options);
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
    const axiosOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$async$2d$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(instance, options.accessToken);
    }
    if (options.throttle) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2d$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(instance, options.throttle);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$rate$2d$limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(instance, options.retryLimit);
    if (options.onError) {
        instance.interceptors.response.use({
            "createHttpClient.use": (response)=>response
        }["createHttpClient.use"], options.onError);
    }
    return instance;
}
;
 //# sourceMappingURL=create-http-client.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createRequestConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)");
;
/**
 * Creates request parameters configuration by parsing an existing query object
 * @private
 * @param {Object} query
 * @return {Object} Config object with `params` property, ready to be used in axios
 */ function createRequestConfig({ query }) {
    const config = {};
    delete query.resolveLinks;
    config.params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
    return config;
}
;
 //# sourceMappingURL=create-request-config.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/enforce-obj-path.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUserAgentHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/process/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/utils.js [app-client] (ecmascript)");
;
;
function getBrowserOS() {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])();
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
    const platform = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform || 'linux';
    const version = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$process$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version || '0.0.0';
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactNative"])()) {
            platform = getBrowserOS();
            headerParts.push('platform ReactNative');
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])()) {
            platform = getNodeOS();
            headerParts.push(`platform node.js/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeVersion"])()}`);
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)");
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this);
        }
    });
}
;
 //# sourceMappingURL=to-plain-object.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_overArg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var overArg = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_overArg.js [app-client] (ecmascript)");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/_getPrototype.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>errorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config)) {
        throw errorResponse;
    }
    const data = response?.data;
    const errorData = {
        status: response?.status,
        statusText: response?.statusText,
        message: '',
        details: {}
    };
    if (config && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config)) {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$enforce$2d$obj$2d$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/enforce-obj-path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$default$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-default-options.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-client] (ecmascript) <export default as getUserAgentHeader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserAgentHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-client] (ecmascript) <export default as createHttpClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/@contentful/content-source-maps/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript) <export default as createRequestConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequestConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-client] (ecmascript) <export default as errorHandler>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/fast-copy/dist/esm/index.mjs [app-client] (ecmascript)");
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
    var responseClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$fast$2d$copy$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response);
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-client] (ecmascript) <export default as freezeSys>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freezeSys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-client] (ecmascript) <export default as toPlainObject>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPlainObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-client] (ecmascript)");
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mixinStringifySafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-client] (ecmascript)");
;
function mixinStringifySafe(data) {
    return Object.defineProperty(data, 'stringifySafe', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(serializer = null, indent = '') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, serializer, indent, (key, value)=>{
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/paged-sync.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pagedSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__freezeSys$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/freeze-sys.js [app-client] (ecmascript) <export default as freezeSys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/to-plain-object.js [app-client] (ecmascript) <export default as toPlainObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript) <export default as createRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-client] (ecmascript)");
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
        response.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(response, {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$freeze$2d$sys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__freezeSys$3e$__["freezeSys"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__["toPlainObject"])(mappedResponseItems)));
}
/**
 * @private
 * @param items
 * @returns Entities mapped to an object for each entity type
 */ function mapResponseItems(items) {
    const reducer = (type)=>{
        return (accumulated, item)=>{
            if (item.sys.type === type) {
                accumulated.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$to$2d$plain$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toPlainObject$3e$__["toPlainObject"])(item));
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
    const response = await http.get('sync', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-search-parameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>normalizeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-client] (ecmascript)");
;
/*
 * sdk relies heavily on sys metadata
 * so we cannot omit the sys property on sdk level entirely
 * and we have to ensure that at least `id` and `type` are present
 * */ function normalizeSelect(query) {
    if (!query.select) {
        return query;
    }
    const selectedSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/resolve-circular.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveCircular
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/mixins/stringify-safe.js [app-client] (ecmascript)");
;
;
function resolveCircular(data, { resolveLinks, removeUnresolved }) {
    const wrappedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$mixins$2f$stringify$2d$safe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data);
    if (resolveLinks) {
        wrappedData.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(wrappedData, {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-timestamp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>validateTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-client] (ecmascript)");
;
function validateTimestamp(name, timestamp, options) {
    options = options || {};
    if (typeof timestamp !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"](name, `only numeric values are allowed for timestamps, provided type was "${typeof timestamp}"`);
    }
    if (options.maximum && timestamp > options.maximum) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"](name, `value (${timestamp}) cannot be further in the future than expected maximum (${options.maximum})`);
    }
    if (options.now && timestamp < options.now) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"](name, `value (${timestamp}) cannot be in the past, current time was ${options.now}`);
    }
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimelinePreviewParams",
    ()=>getTimelinePreviewParams,
    "isValidTimelinePreviewConfig",
    ()=>isValidTimelinePreviewConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-client] (ecmascript)");
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' parameter must be an object.`);
    }
    const hasRelease = isValidRelease(timelinePreview.release);
    const hasTimestamp = isValidTimestamp(timelinePreview.timestamp);
    if (!hasRelease && !hasTimestamp) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' object must have at least one of 'release' or 'timestamp' with a valid 'lte' property.`);
    }
    return hasRelease || hasTimestamp;
};
const getTimelinePreviewParams = (params)=>{
    var _a, _b;
    const host = params === null || params === void 0 ? void 0 : params.host;
    const timelinePreview = (_a = params === null || params === void 0 ? void 0 : params.timelinePreview) !== null && _a !== void 0 ? _a : (_b = params === null || params === void 0 ? void 0 : params.alphaFeatures) === null || _b === void 0 ? void 0 : _b.timelinePreview;
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEnableTimelinePreviewIsAllowed"])(host, timelinePreview);
    return {
        enabled,
        timelinePreview
    };
};
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validation-error.js [app-client] (ecmascript)");
;
;
function checkLocaleParamIsAll(query) {
    if (query.locale === '*') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('locale', `The use of locale='*' is no longer supported.To fetch an entry in all existing locales,
      use client.withAllLocales instead of the locale='*' parameter.`);
    }
}
function checkLocaleParamExists(query) {
    if (query.locale) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('locale', 'The `locale` parameter is not allowed');
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('resolveLinks', `The use of the 'resolveLinks' parameter is no longer supported. By default, links are resolved.
      If you do not want to resolve links, use client.withoutLinkResolution.`);
    }
    return;
}
function validateRemoveUnresolvedParam(query) {
    if ('removeUnresolved' in query) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('removeUnresolved', `The use of the 'removeUnresolved' parameter is no longer supported. By default, unresolved links are kept as link objects.
      If you do not want to include unresolved links, use client.withoutUnresolvableLinks.`);
    }
    return;
}
function checkIncludeContentSourceMapsParamIsAllowed(host, includeContentSourceMaps) {
    if (includeContentSourceMaps === undefined) {
        return false;
    }
    if (typeof includeContentSourceMaps !== 'boolean') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('includeContentSourceMaps', `The 'includeContentSourceMaps' parameter must be a boolean.`);
    }
    const includeContentSourceMapsIsAllowed = typeof host === 'string' && host.startsWith('preview');
    if (includeContentSourceMaps && !includeContentSourceMapsIsAllowed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('includeContentSourceMaps', `The 'includeContentSourceMaps' parameter can only be used with the CPA. Please set host to 'preview.contentful.com' or 'preview.eu.contentful.com' to include Content Source Maps.
      `);
    }
    return includeContentSourceMaps;
}
function checkEnableTimelinePreviewIsAllowed(host, timelinePreview) {
    if (timelinePreview === undefined) {
        return false;
    }
    const isValidConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimelinePreviewConfig"])(timelinePreview);
    const isValidHost = typeof host === 'string' && host.startsWith('preview');
    if (isValidConfig && !isValidHost) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validation$2d$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('timelinePreview', `The 'timelinePreview' parameter can only be used with the CPA. Please set host to 'preview.contentful.com' or 'preview.eu.contentful.com' to enable Timeline Preview.
      `);
    }
    return true;
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-search-parameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-parameters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeCursorPaginationParameters",
    ()=>normalizeCursorPaginationParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function normalizeCursorPaginationParameters(query) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cursor, pagePrev, pageNext, skip } = query, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(query, [
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-response.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-contentful-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createContentfulApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f40$contentful$2f$content$2d$source$2d$maps$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/@contentful/content-source-maps/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-request-config.js [app-client] (ecmascript) <export default as createRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/error-handler.js [app-client] (ecmascript) <export default as errorHandler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$paged$2d$sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/paged-sync.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-search-parameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/resolve-circular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/query-selection-set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-search-parameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/timeline-preview-helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-parameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/normalize-cursor-pagination-response.js [app-client] (ecmascript)");
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
        const areAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkIncludeContentSourceMapsParamIsAllowed"])(host, includeContentSourceMaps);
        if (areAllowed) {
            query.includeContentSourceMaps = true;
            // Ensure that content source maps and required attributes are selected
            if (query.select) {
                const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$query$2d$selection$2d$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
                selection.add('sys');
                query.select = Array.from(selection).join(',');
            }
        }
        return query;
    }
    function maybeEnableTimelinePreview(path) {
        const { enabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimelinePreviewParams"])(http.httpClientParams);
        return enabled ? `timeline/${path}` : path;
    }
    function maybeAddTimelinePreviewConfigToQuery(query) {
        const { enabled, timelinePreview } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$timeline$2d$preview$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimelinePreviewParams"])(http.httpClientParams);
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f40$contentful$2f$content$2d$source$2d$maps$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeCPAResponse"])(data);
        }
        return data;
    }
    async function get({ context, path, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.get(baseUrl + path, config);
            return maybeEncodeCPAResponse(response.data, config);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function post({ context, path, data, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.post(baseUrl + path, data, config);
            return response.data;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
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
        const response = await makeGetEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCursorPaginationParameters"])(query), options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCursorPaginationResponse"])(response);
    }
    async function makeGetEntry(id, query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function makeGetEntries(query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        return internalGetEntries(withAllLocales ? Object.assign(Object.assign({}, query), {
            locale: '*'
        }) : query, options);
    }
    function prepareQuery(query) {
        // First, add timeline preview config if enabled
        const withTimelinePreview = maybeAddTimelinePreviewConfigToQuery(Object.assign({}, query));
        // Then, apply source maps and other normalizations
        return maybeEnableSourceMaps((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(withTimelinePreview)));
    }
    async function internalGetEntries(query, options) {
        const { withoutLinkResolution, withoutUnresolvableLinks } = options;
        try {
            const entries = await get({
                context: 'environment',
                path: maybeEnableTimelinePreview('entries'),
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entries, {
                resolveLinks: !withoutLinkResolution,
                removeUnresolved: withoutUnresolvableLinks !== null && withoutUnresolvableLinks !== void 0 ? withoutUnresolvableLinks : false
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function getAsset(id, query = {}) {
        return makeGetAsset(id, query, options);
    }
    async function getAssets(query = {}) {
        return makeGetAssets(query, options);
    }
    async function getAssetsWithCursor(query = {}) {
        const response = await makeGetAssets((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCursorPaginationParameters"])(query), options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$cursor$2d$pagination$2d$response$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCursorPaginationResponse"])(response);
    }
    async function makeGetAssets(query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function makeGetAsset(id, query, options = {
        withAllLocales: false,
        withoutLinkResolution: false,
        withoutUnresolvableLinks: false
    }) {
        const { withAllLocales } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLocaleParam"])(query, withAllLocales);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: prepareQuery(query)
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
        }
    }
    async function getTag(id) {
        return get({
            context: 'environment',
            path: `tags/${id}`
        });
    }
    async function getTags(query = {}) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        return get({
            context: 'environment',
            path: 'tags',
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
            })
        });
    }
    async function createAssetKey(expiresAt) {
        try {
            const now = Math.floor(Date.now() / 1000);
            const currentMaxLifetime = now + ASSET_KEY_MAX_LIFETIME;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('expiresAt', expiresAt, {
                maximum: currentMaxLifetime,
                now
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query);
        return get({
            context: 'environment',
            path: 'locales',
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query)
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(query);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(query);
        const combinedOptions = Object.assign(Object.assign({}, syncOptions), options);
        switchToEnvironment(http);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$paged$2d$sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(http, query, combinedOptions);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$resolve$2d$circular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, {
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
                config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$request$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createRequestConfig$3e$__["createRequestConfig"])({
                    query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$search$2d$parameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$normalize$2d$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query))
                })
            });
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$error$2d$handler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__errorHandler$3e$__["errorHandler"])(error);
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/make-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeClient",
    ()=>makeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-contentful-api.js [app-client] (ecmascript)");
;
function create({ http, getGlobalOptions }, options, makeInnerClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
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
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$contentful$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
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
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/contentful.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getUserAgentHeader$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/get-user-agent.js [app-client] (ecmascript) <export default as getUserAgentHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createHttpClient$3e$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-sdk-core/dist/create-http-client.js [app-client] (ecmascript) <export default as createHttpClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$make$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/make-client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/utils/validate-params.js [app-client] (ecmascript)");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateResolveLinksParam"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$utils$2f$validate$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRemoveUnresolvedParam"])(params);
    const defaultConfig = {
        resolveLinks: true,
        removeUnresolved: false,
        defaultHostname: 'cdn.contentful.com',
        environment: 'master'
    };
    const config = Object.assign(Object.assign({}, defaultConfig), params);
    const userAgentHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$get$2d$user$2d$agent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__getUserAgentHeader$3e$__["getUserAgentHeader"])(`contentful.js/${"0.0.0-determined-by-semantic-release"}`, config.application, config.integration);
    config.headers = Object.assign(Object.assign({}, config.headers), {
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': userAgentHeader
    });
    const http = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$sdk$2d$core$2f$dist$2f$create$2d$http$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createHttpClient$3e$__["createHttpClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], config);
    if (!http.defaults.baseURL) {
        throw new Error('Please define a baseURL');
    }
    const getGlobalOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobalOptions"])({
        space: config.space,
        environment: config.environment,
        spaceBaseUrl: http.defaults.baseURL,
        environmentBaseUrl: `${http.defaults.baseURL}environments/${config.environment}`
    });
    // Append environment to baseURL
    http.defaults.baseURL = getGlobalOptions({}).environmentBaseUrl;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$make$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeClient"])({
        http,
        getGlobalOptions
    });
}
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$contentful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/contentful.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2f$dist$2f$esm$2f$create$2d$global$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful/dist/esm/create-global-options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$json$2d$stringify$2d$safe$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/json-stringify-safe/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$contentful$2d$resolve$2d$response$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/contentful-resolve-response/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    maximumResponseBody: 50000000,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        const deploymentId = (0, _deploymentid.getDeploymentId)();
        if (src.startsWith('/') && !src.startsWith('//') && deploymentId) {
            const sep = src.includes('?') ? '&' : '?';
            src = `${src}${sep}dpl=${deploymentId}`;
        }
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = entry?.element?.src || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && lcpImage.loading === 'lazy' && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                loading: loadingFinal,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = 'RouterContext';
} //# sourceMappingURL=router-context.shared-runtime.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    let deploymentId = (0, _deploymentid.getDeploymentId)();
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/') && deploymentId ? `&dpl=${deploymentId}` : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70),
        ("TURBOPACK compile-time value", 70)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "protocol": ("TURBOPACK compile-time value", "https"),
            "hostname": ("TURBOPACK compile-time value", "images.ctfassets.net"),
            "port": ("TURBOPACK compile-time value", ""),
            "pathname": ("TURBOPACK compile-time value", "/**")
        })
    ]),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: typeof window === 'undefined' ? configContext?.localPatterns : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$AMG$2d$mODEL$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70),
                ("TURBOPACK compile-time value", 70)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "images.ctfassets.net"),
                    "port": ("TURBOPACK compile-time value", ""),
                    "pathname": ("TURBOPACK compile-time value", "/**")
                })
            ]),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Documents/AMG-mODEL/my-app/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/AMG-mODEL/my-app/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=e1ddf_c9605893._.js.map