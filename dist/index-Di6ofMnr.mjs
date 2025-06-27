import Tr, { createContext as Sc, useContext as _c, useState as bt, useEffect as ir, useRef as ii, forwardRef as Eu } from "react";
var bo = { exports: {} }, xa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function Bu() {
  if (ec) return xa;
  ec = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, s, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      o = {};
      for (var h in s)
        h !== "key" && (o[h] = s[h]);
    } else o = s;
    return s = o.ref, {
      $$typeof: n,
      type: a,
      key: c,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return xa.Fragment = t, xa.jsx = r, xa.jsxs = r, xa;
}
var La = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Tu() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && function() {
    function n(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === de ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case I:
          return "Fragment";
        case _:
          return "Profiler";
        case F:
          return "StrictMode";
        case he:
          return "Suspense";
        case Le:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case O:
            return "Portal";
          case Z:
            return (D.displayName || "Context") + ".Provider";
          case E:
            return (D._context.displayName || "Context") + ".Consumer";
          case se:
            var be = D.render;
            return D = D.displayName, D || (D = be.displayName || be.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case ie:
            return be = D.displayName || null, be !== null ? be : n(D.type) || "Memo";
          case H:
            be = D._payload, D = D._init;
            try {
              return n(D(be));
            } catch {
            }
        }
      return null;
    }
    function t(D) {
      return "" + D;
    }
    function r(D) {
      try {
        t(D);
        var be = !1;
      } catch {
        be = !0;
      }
      if (be) {
        be = console;
        var w = be.error, j = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return w.call(
          be,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(D);
      }
    }
    function a(D) {
      if (D === I) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === H)
        return "<...>";
      try {
        var be = n(D);
        return be ? "<" + be + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var D = P.A;
      return D === null ? null : D.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(D) {
      if (k.call(D, "key")) {
        var be = Object.getOwnPropertyDescriptor(D, "key").get;
        if (be && be.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function h(D, be) {
      function w() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          be
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: w,
        configurable: !0
      });
    }
    function f() {
      var D = n(this.type);
      return oe[D] || (oe[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function g(D, be, w, j, B, U, q, J) {
      return w = U.ref, D = {
        $$typeof: p,
        type: D,
        key: be,
        props: U,
        _owner: B
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(D, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function b(D, be, w, j, B, U, q, J) {
      var X = be.children;
      if (X !== void 0)
        if (j)
          if (W(X)) {
            for (j = 0; j < X.length; j++)
              y(X[j]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(X);
      if (k.call(be, "key")) {
        X = n(D);
        var T = Object.keys(be).filter(function(we) {
          return we !== "key";
        });
        j = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", $[X + j] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          X,
          T,
          X
        ), $[X + j] = !0);
      }
      if (X = null, w !== void 0 && (r(w), X = "" + w), c(be) && (r(be.key), X = "" + be.key), "key" in be) {
        w = {};
        for (var Ne in be)
          Ne !== "key" && (w[Ne] = be[Ne]);
      } else w = be;
      return X && h(
        w,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), g(
        D,
        X,
        U,
        B,
        s(),
        w,
        q,
        J
      );
    }
    function y(D) {
      typeof D == "object" && D !== null && D.$$typeof === p && D._store && (D._store.validated = 1);
    }
    var N = Tr, p = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), P = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, W = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      "react-stack-bottom-frame": function(D) {
        return D();
      }
    };
    var le, oe = {}, fe = N["react-stack-bottom-frame"].bind(
      N,
      o
    )(), te = z(a(o)), $ = {};
    La.Fragment = I, La.jsx = function(D, be, w, j, B) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return b(
        D,
        be,
        w,
        !1,
        j,
        B,
        U ? Error("react-stack-top-frame") : fe,
        U ? z(a(D)) : te
      );
    }, La.jsxs = function(D, be, w, j, B) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return b(
        D,
        be,
        w,
        !0,
        j,
        B,
        U ? Error("react-stack-top-frame") : fe,
        U ? z(a(D)) : te
      );
    };
  }()), La;
}
var nc;
function Ru() {
  return nc || (nc = 1, process.env.NODE_ENV === "production" ? bo.exports = Bu() : bo.exports = Tu()), bo.exports;
}
var ce = Ru(), Pc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rc = Tr.createContext && /* @__PURE__ */ Tr.createContext(Pc), Du = ["attr", "size", "title"];
function qu(n, t) {
  if (n == null) return {};
  var r = zu(n, t), a, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (s = 0; s < o.length; s++)
      a = o[s], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (r[a] = n[a]);
  }
  return r;
}
function zu(n, t) {
  if (n == null) return {};
  var r = {};
  for (var a in n)
    if (Object.prototype.hasOwnProperty.call(n, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = n[a];
    }
  return r;
}
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
    }
    return n;
  }, Po.apply(this, arguments);
}
function ic(n, t) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Io(n) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ic(Object(r), !0).forEach(function(a) {
      Uu(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ic(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return n;
}
function Uu(n, t, r) {
  return t = Hu(t), t in n ? Object.defineProperty(n, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = r, n;
}
function Hu(n) {
  var t = Vu(n, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vu(n, t) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(n, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Ic(n) {
  return n && n.map((t, r) => /* @__PURE__ */ Tr.createElement(t.tag, Io({
    key: r
  }, t.attr), Ic(t.child)));
}
function st(n) {
  return (t) => /* @__PURE__ */ Tr.createElement(Wu, Po({
    attr: Io({}, n.attr)
  }, t), Ic(n.child));
}
function Wu(n) {
  var t = (r) => {
    var {
      attr: a,
      size: s,
      title: o
    } = n, c = qu(n, Du), h = s || r.size || "1em", f;
    return r.className && (f = r.className), n.className && (f = (f ? f + " " : "") + n.className), /* @__PURE__ */ Tr.createElement("svg", Po({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, c, {
      className: f,
      style: Io(Io({
        color: n.color || r.color
      }, r.style), n.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Tr.createElement("title", null, o), n.children);
  };
  return rc !== void 0 ? /* @__PURE__ */ Tr.createElement(rc.Consumer, null, (r) => t(r)) : t(Pc);
}
function jo(n) {
  return st({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z" }, child: [] }] })(n);
}
function Fo(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(n);
}
function Oo(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(n);
}
function Mo(n) {
  return st({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" }, child: [] }] })(n);
}
function Eo(n) {
  return st({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z" }, child: [] }] })(n);
}
function Bo(n) {
  return st({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(n);
}
function To(n) {
  return st({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" }, child: [] }] })(n);
}
function Ro(n) {
  return st({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(n);
}
function Do(n) {
  return st({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(n);
}
function qo(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" }, child: [] }] })(n);
}
function zo(n) {
  return st({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" }, child: [] }] })(n);
}
function Uo(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" }, child: [] }] })(n);
}
function Ho(n) {
  return st({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" }, child: [] }] })(n);
}
function Vo(n) {
  return st({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" }, child: [] }] })(n);
}
function Wo(n) {
  return st({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }, child: [] }] })(n);
}
function Go(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112m0 0V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160m-64 1V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224m128-80V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" }, child: [] }] })(n);
}
function Yo(n) {
  return st({ attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z", fill: "currentColor" }, child: [] }] })(n);
}
function Jo(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 5 15 L 5 17 L 27 17 L 27 15 Z" }, child: [] }] })(n);
}
function Xo(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.15625 3 C 18.390625 3.003906 17.644531 3.300781 17.09375 3.90625 C 17.085938 3.914063 17.101563 3.929688 17.09375 3.9375 C 15.863281 5.175781 15.386719 6.40625 14.96875 7.5 C 14.789063 7.972656 14.609375 8.417969 14.375 8.875 C 13.914063 8.34375 13.25 8 12.5 8 C 11.132813 8 10 9.132813 10 10.5 C 10 11.867188 11.132813 13 12.5 13 C 13.242188 13 13.882813 12.648438 14.34375 12.125 L 14.40625 12.1875 L 5.28125 21.28125 L 5 21.59375 L 5 25.5625 L 4 26.59375 L 5.40625 28 L 6.4375 27 L 10.40625 27 L 10.71875 26.71875 L 27.28125 10.125 L 27.3125 10.09375 C 28.464844 8.941406 28.464844 7.058594 27.3125 5.90625 L 26.09375 4.6875 C 25.515625 4.109375 24.765625 3.8125 24 3.8125 C 23.285156 3.8125 22.589844 4.089844 22.03125 4.59375 L 21.3125 3.90625 C 20.722656 3.316406 19.933594 2.996094 19.15625 3 Z M 19.1875 5 C 19.433594 5.003906 19.699219 5.105469 19.90625 5.3125 L 20.59375 6 L 14.46875 12.09375 C 15.824219 10.65625 16.421875 9.320313 16.84375 8.21875 C 17.273438 7.09375 17.542969 6.269531 18.5 5.3125 L 18.5625 5.25 C 18.710938 5.082031 18.941406 4.996094 19.1875 5 Z M 24 5.78125 C 24.234375 5.78125 24.464844 5.871094 24.6875 6.09375 L 25.90625 7.3125 C 26.351563 7.757813 26.351563 8.242188 25.90625 8.6875 L 25 9.5625 L 22.4375 7 L 23.21875 6.21875 L 23.3125 6.09375 C 23.535156 5.871094 23.765625 5.78125 24 5.78125 Z M 21 8.4375 L 23.5625 11 L 16 18.5625 L 13.4375 16 Z M 12.5 10 C 12.789063 10 13 10.210938 13 10.5 C 13 10.789063 12.789063 11 12.5 11 C 12.210938 11 12 10.789063 12 10.5 C 12 10.210938 12.210938 10 12.5 10 Z M 12 17.4375 L 14.5625 20 L 9.5625 25 L 7 25 L 7 22.4375 Z" }, child: [] }] })(n);
}
function $o(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 23.8125 4.03125 C 22.722656 4.03125 21.613281 4.449219 20.78125 5.28125 L 11.5 14.5625 L 6.03125 16.65625 L 5.5 16.875 L 5.40625 17.4375 L 4 26.84375 L 3.8125 28.1875 L 5.15625 28 L 14.5625 26.59375 L 15.125 26.5 L 15.34375 25.96875 L 17.3125 20.78125 L 17.8125 20.3125 L 26.8125 11.3125 C 28.425781 9.699219 28.457031 7.109375 26.9375 5.4375 L 26.8125 5.28125 C 25.980469 4.449219 24.902344 4.03125 23.8125 4.03125 Z M 23.8125 6 C 24.375 6 24.9375 6.25 25.40625 6.71875 C 26.34375 7.65625 26.34375 8.96875 25.40625 9.90625 L 20.375 14.9375 L 17.1875 11.75 L 22.21875 6.71875 C 22.6875 6.25 23.25 6 23.8125 6 Z M 15.75 13.1875 L 18.9375 16.375 L 17.125 18.1875 L 13.9375 15 Z M 12.40625 16.34375 L 12.4375 16.34375 L 15.65625 19.5625 L 13.6875 24.71875 L 7.84375 25.5625 L 10.53125 22.875 C 10.585938 22.878906 10.632813 22.90625 10.6875 22.90625 C 11.570313 22.90625 12.3125 22.195313 12.3125 21.3125 C 12.3125 20.429688 11.570313 19.6875 10.6875 19.6875 C 9.804688 19.6875 9.09375 20.429688 9.09375 21.3125 C 9.09375 21.367188 9.121094 21.414063 9.125 21.46875 L 6.4375 24.15625 L 7.28125 18.3125 Z" }, child: [] }] })(n);
}
function Ko(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z" }, child: [] }] })(n);
}
function Zo(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.21875 5.28125 L 17.78125 6.71875 L 24.0625 13 L 11 13 C 7.15625 13 4 16.15625 4 20 L 4 27 L 6 27 L 6 20 C 6 17.246094 8.246094 15 11 15 L 24.0625 15 L 17.78125 21.28125 L 19.21875 22.71875 L 27.21875 14.71875 L 27.90625 14 L 27.21875 13.28125 Z" }, child: [] }] })(n);
}
function Qo(n) {
  return st({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 12.78125 5.28125 L 4.78125 13.28125 L 4.09375 14 L 4.78125 14.71875 L 12.78125 22.71875 L 14.21875 21.28125 L 7.9375 15 L 21 15 C 23.753906 15 26 17.246094 26 20 L 26 27 L 28 27 L 28 20 C 28 16.15625 24.84375 13 21 13 L 7.9375 13 L 14.21875 6.71875 Z" }, child: [] }] })(n);
}
function es(n) {
  return st({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" }, child: [] }] })(n);
}
function ts(n) {
  return st({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }, child: [] }, { tag: "path", attr: { d: "M22 21H7" }, child: [] }, { tag: "path", attr: { d: "m5 11 9 9" }, child: [] }] })(n);
}
function ns(n) {
  return st({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }, child: [] }, { tag: "path", attr: { d: "m14 19.5 3-3 3 3" }, child: [] }, { tag: "path", attr: { d: "M17 22v-5.5" }, child: [] }, { tag: "circle", attr: { cx: "9", cy: "9", r: "2" }, child: [] }] })(n);
}
function rs(n) {
  return st({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, child: [] }, { tag: "path", attr: { d: "M14 14v-8l-2 2" }, child: [] }] })(n);
}
function is(n) {
  return st({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, child: [] }] })(n);
}
function as(n) {
  return st({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" }, child: [] }] })(n);
}
function os(n) {
  return st({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(n);
}
function ss(n) {
  return st({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" }, child: [] }] })(n);
}
function ls(n) {
  return st({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z" }, child: [] }] })(n);
}
function cs(n) {
  return st({ attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M2 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM2 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM8.5 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z" }, child: [] }] })(n);
}
function us(n) {
  return st({ attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329c-1.199 0-2.327.463-3.18 1.304-.027.025-7.967 7.964-7.967 7.964-.373.373-.717.91-.967 1.514-.195.473-1.979 5.863-2.336 6.939-.119.358-.025.754.242 1.021.189.189.445.293.707.293.105 0 .211-.018.314-.051 1.076-.355 6.465-2.141 6.938-2.336.603-.248 1.14-.592 1.515-.967l2.157-2.156.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5c.696-.695.887-1.699.588-2.572.107-.386.18-.783.18-1.195zm-11.864 10.379c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038l3.051 3.051zm-4.097.047l.999.999-1.498.499.499-1.498zm7.698-3.113l-2.42 2.42-.235.18-3.53-3.529.18-.234 7.131-7.131 2.731 2.731-3.69 3.69c-.513.512-.549 1.289-.167 1.873zm6.08-4.959l-4.5 4.5c-.098.099-.226.146-.354.146s-.256-.049-.354-.146c-.195-.194-.195-.512 0-.707l4.5-4.5c.194-.194.512-.194.707 0 .196.195.197.511.001.707zm.107-1.764c-.519-.168-1.108-.062-1.521.35l-.102.102-2.731-2.731.078-.078c.984-.98 2.652-.981 3.608-.023.479.479.743 1.116.743 1.793.001.199-.03.394-.075.587z" }, child: [] }] })(n);
}
function hs(n) {
  return st({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" }, child: [] }] })(n);
}
const Gu = {
  HomeIcon: Bo,
  SettingsIcon: Oo,
  UserIcon: Do,
  HandleIcon: Go,
  PencilOutlineIcon: Wo,
  MemoryPenOutlineIcon: Xo,
  ColorPenOutlineIcon: us,
  PaintPenOutlineIcon: hs,
  PenOutlineIcon: $o,
  FontsIcon: Eo,
  MinusIcon: Jo,
  SquareIcon: Vo,
  EraserIcon: ts,
  PlusIcon: Ko,
  FontBoldIcon: jo,
  FontItalicIcon: To,
  FontUnderlineIcon: Ro,
  CircleOutlineIcon: qo,
  RectangleOutlineIcon: is,
  UndoIcon: Qo,
  RedoIcon: Zo,
  MenuIcon: as,
  CheckIcon: Fo,
  CopyImageIcon: Ho,
  SaveCloudIcon: es,
  ExportIcon: Mo,
  PDFIcon: zo,
  ImageIcon: Uo,
  NextIcon: os,
  MoreIcon: cs,
  MultipleCardsIcon: rs,
  AddBoardIcon: ss,
  DivideIcon: Yo,
  CleanIcon: ls,
  ImageUpIcon: ns
}, Yu = {
  HomeIcon: Bo,
  SettingsIcon: Oo,
  UserIcon: Do,
  HandleIcon: Go,
  PencilOutlineIcon: Wo,
  MemoryPenOutlineIcon: Xo,
  ColorPenOutlineIcon: us,
  PaintPenOutlineIcon: hs,
  PenOutlineIcon: $o,
  FontsIcon: Eo,
  MinusIcon: Jo,
  SquareIcon: Vo,
  EraserIcon: ts,
  PlusIcon: Ko,
  FontBoldIcon: jo,
  FontItalicIcon: To,
  FontUnderlineIcon: Ro,
  CircleOutlineIcon: qo,
  RectangleOutlineIcon: is,
  UndoIcon: Qo,
  RedoIcon: Zo,
  MenuIcon: as,
  CheckIcon: Fo,
  CopyImageIcon: Ho,
  SaveCloudIcon: es,
  ExportIcon: Mo,
  PDFIcon: zo,
  ImageIcon: Uo,
  NextIcon: os,
  MoreIcon: cs,
  MultipleCardsIcon: rs,
  AddBoardIcon: ss,
  DivideIcon: Yo,
  CleanIcon: ls,
  ImageUpIcon: ns
}, Ju = {
  HomeIcon: Bo,
  SettingsIcon: Oo,
  UserIcon: Do,
  HandleIcon: Go,
  PencilOutlineIcon: Wo,
  MemoryPenOutlineIcon: Xo,
  ColorPenOutlineIcon: us,
  PaintPenOutlineIcon: hs,
  PenOutlineIcon: $o,
  FontsIcon: Eo,
  MinusIcon: Jo,
  SquareIcon: Vo,
  EraserIcon: ts,
  PlusIcon: Ko,
  FontBoldIcon: jo,
  FontItalicIcon: To,
  FontUnderlineIcon: Ro,
  CircleOutlineIcon: qo,
  RectangleOutlineIcon: is,
  UndoIcon: Qo,
  RedoIcon: Zo,
  MenuIcon: as,
  CheckIcon: Fo,
  CopyImageIcon: Ho,
  SaveCloudIcon: es,
  ExportIcon: Mo,
  PDFIcon: zo,
  ImageIcon: Uo,
  NextIcon: os,
  MoreIcon: cs,
  MultipleCardsIcon: rs,
  AddBoardIcon: ss,
  DivideIcon: Yo,
  CleanIcon: ls,
  ImageUpIcon: ns
}, Xu = {
  HomeIcon: Bo,
  SettingsIcon: Oo,
  UserIcon: Do,
  HandleIcon: Go,
  PencilOutlineIcon: Wo,
  MemoryPenOutlineIcon: Xo,
  ColorPenOutlineIcon: us,
  PaintPenOutlineIcon: hs,
  PenOutlineIcon: $o,
  FontsIcon: Eo,
  MinusIcon: Jo,
  SquareIcon: Vo,
  EraserIcon: ts,
  PlusIcon: Ko,
  FontBoldIcon: jo,
  FontItalicIcon: To,
  FontUnderlineIcon: Ro,
  CircleOutlineIcon: qo,
  RectangleOutlineIcon: is,
  UndoIcon: Qo,
  RedoIcon: Zo,
  MenuIcon: as,
  CheckIcon: Fo,
  CopyImageIcon: Ho,
  SaveCloudIcon: es,
  ExportIcon: Mo,
  PDFIcon: zo,
  ImageIcon: Uo,
  NextIcon: os,
  MoreIcon: cs,
  MultipleCardsIcon: rs,
  AddBoardIcon: ss,
  DivideIcon: Yo,
  CleanIcon: ls,
  ImageUpIcon: ns
}, rl = {
  default: {
    global: "bg-white text-black text-base font-comic",
    iconSet: Gu,
    components: {
      navbar: "bg-white text-black hover:bg-gray-100",
      button: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      buttonBorder: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100",
      buttonIcon: "bg-transparent !text-blue-500 hover:!bg-blue-100 active:!bg-blue-200"
    }
  },
  light: {
    global: "bg-gray-50 text-gray-900 text-base font-sans",
    iconSet: Yu,
    components: {
      navbar: "bg-white text-gray-800 hover:bg-gray-200",
      button: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
      buttonBorder: "bg-transparent text-green-600 border border-green-600 hover:bg-green-100"
    }
  },
  dark: {
    global: "bg-gray-900 text-white text-base font-mono",
    iconSet: Ju,
    components: {
      navbar: "bg-gray-800 text-white hover:bg-gray-700",
      button: "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
      buttonBorder: "bg-transparent text-indigo-400 hover:bg-indigo-900"
    }
  },
  children: {
    global: "bg-yellow-100 text-yellow-900 text-lg font-vtv323",
    iconSet: Xu,
    components: {
      navbar: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
      button: "bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600",
      buttonBorder: "bg-transparent text-pink-600 border border-pink-600 hover:bg-pink-100",
      buttonIcon: "bg-transparent !text-pink-500  hover:!bg-pink-100 active:!bg-pink-200"
    }
  }
}, kc = Sc(void 0), l2 = ({ children: n }) => {
  const [t, r] = bt("default");
  ir(() => {
    const o = localStorage.getItem("app_theme");
    o && rl[o] && r(o);
  }, []);
  const a = (o, c = !0) => {
    r(o), c && localStorage.setItem("app_theme", o);
  }, s = {
    theme: t,
    config: rl[t],
    setTheme: a,
    iconSet: rl[t].iconSet
  };
  return /* @__PURE__ */ ce.jsx(kc.Provider, { value: s, children: n });
}, zr = () => {
  const n = _c(kc);
  if (!n) throw new Error("useTheme must be used within ThemeProvider");
  return n;
}, mn = ({ Icon: n, isActive: t, onClick: r, title: a, onChange: s }) => {
  const { config: o } = zr(), c = o.components.buttonIcon;
  return /* @__PURE__ */ ce.jsx(
    "button",
    {
      className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${c} ${t ? "!bg-pink-200" : ""}`,
      onClick: r,
      title: a,
      children: /* @__PURE__ */ ce.jsx(n, { className: "w-5 h-5" })
    }
  );
};
function mt(n) {
  "@babel/helpers - typeof";
  return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mt(n);
}
var on = Uint8Array, Nn = Uint16Array, Al = Int32Array, fs = new on([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), ds = new on([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), dl = new on([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Cc = function(n, t) {
  for (var r = new Nn(31), a = 0; a < 31; ++a)
    r[a] = t += 1 << n[a - 1];
  for (var s = new Al(r[30]), a = 1; a < 30; ++a)
    for (var o = r[a]; o < r[a + 1]; ++o)
      s[o] = o - r[a] << 5 | a;
  return { b: r, r: s };
}, jc = Cc(fs, 2), Fc = jc.b, pl = jc.r;
Fc[28] = 258, pl[258] = 28;
var Oc = Cc(ds, 0), $u = Oc.b, ac = Oc.r, gl = new Nn(32768);
for (var At = 0; At < 32768; ++At) {
  var Mr = (At & 43690) >> 1 | (At & 21845) << 1;
  Mr = (Mr & 52428) >> 2 | (Mr & 13107) << 2, Mr = (Mr & 61680) >> 4 | (Mr & 3855) << 4, gl[At] = ((Mr & 65280) >> 8 | (Mr & 255) << 8) >> 1;
}
var or = function(n, t, r) {
  for (var a = n.length, s = 0, o = new Nn(t); s < a; ++s)
    n[s] && ++o[n[s] - 1];
  var c = new Nn(t);
  for (s = 1; s < t; ++s)
    c[s] = c[s - 1] + o[s - 1] << 1;
  var h;
  if (r) {
    h = new Nn(1 << t);
    var f = 15 - t;
    for (s = 0; s < a; ++s)
      if (n[s])
        for (var g = s << 4 | n[s], b = t - n[s], y = c[n[s] - 1]++ << b, N = y | (1 << b) - 1; y <= N; ++y)
          h[gl[y] >> f] = g;
  } else
    for (h = new Nn(a), s = 0; s < a; ++s)
      n[s] && (h[s] = gl[c[n[s] - 1]++] >> 15 - n[s]);
  return h;
}, Dr = new on(288);
for (var At = 0; At < 144; ++At)
  Dr[At] = 8;
for (var At = 144; At < 256; ++At)
  Dr[At] = 9;
for (var At = 256; At < 280; ++At)
  Dr[At] = 7;
for (var At = 280; At < 288; ++At)
  Dr[At] = 8;
var _a = new on(32);
for (var At = 0; At < 32; ++At)
  _a[At] = 5;
var Ku = /* @__PURE__ */ or(Dr, 9, 0), Zu = /* @__PURE__ */ or(Dr, 9, 1), Qu = /* @__PURE__ */ or(_a, 5, 0), e1 = /* @__PURE__ */ or(_a, 5, 1), il = function(n) {
  for (var t = n[0], r = 1; r < n.length; ++r)
    n[r] > t && (t = n[r]);
  return t;
}, Un = function(n, t, r) {
  var a = t / 8 | 0;
  return (n[a] | n[a + 1] << 8) >> (t & 7) & r;
}, al = function(n, t) {
  var r = t / 8 | 0;
  return (n[r] | n[r + 1] << 8 | n[r + 2] << 16) >> (t & 7);
}, Sl = function(n) {
  return (n + 7) / 8 | 0;
}, Mc = function(n, t, r) {
  return (r == null || r > n.length) && (r = n.length), new on(n.subarray(t, r));
}, t1 = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], Vn = function(n, t, r) {
  var a = new Error(t || t1[n]);
  if (a.code = n, Error.captureStackTrace && Error.captureStackTrace(a, Vn), !r)
    throw a;
  return a;
}, n1 = function(n, t, r, a) {
  var s = n.length, o = 0;
  if (!s || t.f && !t.l)
    return r || new on(0);
  var c = !r, h = c || t.i != 2, f = t.i;
  c && (r = new on(s * 3));
  var g = function(we) {
    var ue = r.length;
    if (we > ue) {
      var Ie = new on(Math.max(ue * 2, we));
      Ie.set(r), r = Ie;
    }
  }, b = t.f || 0, y = t.p || 0, N = t.b || 0, p = t.l, O = t.d, I = t.m, F = t.n, _ = s * 8;
  do {
    if (!p) {
      b = Un(n, y, 1);
      var E = Un(n, y + 1, 3);
      if (y += 3, E)
        if (E == 1)
          p = Zu, O = e1, I = 9, F = 5;
        else if (E == 2) {
          var Le = Un(n, y, 31) + 257, ie = Un(n, y + 10, 15) + 4, H = Le + Un(n, y + 5, 31) + 1;
          y += 14;
          for (var ae = new on(H), de = new on(19), P = 0; P < ie; ++P)
            de[dl[P]] = Un(n, y + P * 3, 7);
          y += ie * 3;
          for (var k = il(de), W = (1 << k) - 1, z = or(de, k, 1), P = 0; P < H; ) {
            var le = z[Un(n, y, W)];
            y += le & 15;
            var Z = le >> 4;
            if (Z < 16)
              ae[P++] = Z;
            else {
              var oe = 0, fe = 0;
              for (Z == 16 ? (fe = 3 + Un(n, y, 3), y += 2, oe = ae[P - 1]) : Z == 17 ? (fe = 3 + Un(n, y, 7), y += 3) : Z == 18 && (fe = 11 + Un(n, y, 127), y += 7); fe--; )
                ae[P++] = oe;
            }
          }
          var te = ae.subarray(0, Le), $ = ae.subarray(Le);
          I = il(te), F = il($), p = or(te, I, 1), O = or($, F, 1);
        } else
          Vn(1);
      else {
        var Z = Sl(y) + 4, se = n[Z - 4] | n[Z - 3] << 8, he = Z + se;
        if (he > s) {
          f && Vn(0);
          break;
        }
        h && g(N + se), r.set(n.subarray(Z, he), N), t.b = N += se, t.p = y = he * 8, t.f = b;
        continue;
      }
      if (y > _) {
        f && Vn(0);
        break;
      }
    }
    h && g(N + 131072);
    for (var D = (1 << I) - 1, be = (1 << F) - 1, w = y; ; w = y) {
      var oe = p[al(n, y) & D], j = oe >> 4;
      if (y += oe & 15, y > _) {
        f && Vn(0);
        break;
      }
      if (oe || Vn(2), j < 256)
        r[N++] = j;
      else if (j == 256) {
        w = y, p = null;
        break;
      } else {
        var B = j - 254;
        if (j > 264) {
          var P = j - 257, U = fs[P];
          B = Un(n, y, (1 << U) - 1) + Fc[P], y += U;
        }
        var q = O[al(n, y) & be], J = q >> 4;
        q || Vn(3), y += q & 15;
        var $ = $u[J];
        if (J > 3) {
          var U = ds[J];
          $ += al(n, y) & (1 << U) - 1, y += U;
        }
        if (y > _) {
          f && Vn(0);
          break;
        }
        h && g(N + 131072);
        var X = N + B;
        if (N < $) {
          var T = o - $, Ne = Math.min($, X);
          for (T + N < 0 && Vn(3); N < Ne; ++N)
            r[N] = a[T + N];
        }
        for (; N < X; ++N)
          r[N] = r[N - $];
      }
    }
    t.l = p, t.p = w, t.b = N, t.f = b, p && (b = 1, t.m = I, t.d = O, t.n = F);
  } while (!b);
  return N != r.length && c ? Mc(r, 0, N) : r.subarray(0, N);
}, yr = function(n, t, r) {
  r <<= t & 7;
  var a = t / 8 | 0;
  n[a] |= r, n[a + 1] |= r >> 8;
}, Na = function(n, t, r) {
  r <<= t & 7;
  var a = t / 8 | 0;
  n[a] |= r, n[a + 1] |= r >> 8, n[a + 2] |= r >> 16;
}, ol = function(n, t) {
  for (var r = [], a = 0; a < n.length; ++a)
    n[a] && r.push({ s: a, f: n[a] });
  var s = r.length, o = r.slice();
  if (!s)
    return { t: Bc, l: 0 };
  if (s == 1) {
    var c = new on(r[0].s + 1);
    return c[r[0].s] = 1, { t: c, l: 1 };
  }
  r.sort(function(he, Le) {
    return he.f - Le.f;
  }), r.push({ s: -1, f: 25001 });
  var h = r[0], f = r[1], g = 0, b = 1, y = 2;
  for (r[0] = { s: -1, f: h.f + f.f, l: h, r: f }; b != s - 1; )
    h = r[r[g].f < r[y].f ? g++ : y++], f = r[g != b && r[g].f < r[y].f ? g++ : y++], r[b++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var N = o[0].s, a = 1; a < s; ++a)
    o[a].s > N && (N = o[a].s);
  var p = new Nn(N + 1), O = ml(r[b - 1], p, 0);
  if (O > t) {
    var a = 0, I = 0, F = O - t, _ = 1 << F;
    for (o.sort(function(Le, ie) {
      return p[ie.s] - p[Le.s] || Le.f - ie.f;
    }); a < s; ++a) {
      var E = o[a].s;
      if (p[E] > t)
        I += _ - (1 << O - p[E]), p[E] = t;
      else
        break;
    }
    for (I >>= F; I > 0; ) {
      var Z = o[a].s;
      p[Z] < t ? I -= 1 << t - p[Z]++ - 1 : ++a;
    }
    for (; a >= 0 && I; --a) {
      var se = o[a].s;
      p[se] == t && (--p[se], ++I);
    }
    O = t;
  }
  return { t: new on(p), l: O };
}, ml = function(n, t, r) {
  return n.s == -1 ? Math.max(ml(n.l, t, r + 1), ml(n.r, t, r + 1)) : t[n.s] = r;
}, oc = function(n) {
  for (var t = n.length; t && !n[--t]; )
    ;
  for (var r = new Nn(++t), a = 0, s = n[0], o = 1, c = function(f) {
    r[a++] = f;
  }, h = 1; h <= t; ++h)
    if (n[h] == s && h != t)
      ++o;
    else {
      if (!s && o > 2) {
        for (; o > 138; o -= 138)
          c(32754);
        o > 2 && (c(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (c(s), --o; o > 6; o -= 6)
          c(8304);
        o > 2 && (c(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        c(s);
      o = 1, s = n[h];
    }
  return { c: r.subarray(0, a), n: t };
}, Aa = function(n, t) {
  for (var r = 0, a = 0; a < t.length; ++a)
    r += n[a] * t[a];
  return r;
}, Ec = function(n, t, r) {
  var a = r.length, s = Sl(t + 2);
  n[s] = a & 255, n[s + 1] = a >> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var o = 0; o < a; ++o)
    n[s + o + 4] = r[o];
  return (s + 4 + a) * 8;
}, sc = function(n, t, r, a, s, o, c, h, f, g, b) {
  yr(t, b++, r), ++s[256];
  for (var y = ol(s, 15), N = y.t, p = y.l, O = ol(o, 15), I = O.t, F = O.l, _ = oc(N), E = _.c, Z = _.n, se = oc(I), he = se.c, Le = se.n, ie = new Nn(19), H = 0; H < E.length; ++H)
    ++ie[E[H] & 31];
  for (var H = 0; H < he.length; ++H)
    ++ie[he[H] & 31];
  for (var ae = ol(ie, 7), de = ae.t, P = ae.l, k = 19; k > 4 && !de[dl[k - 1]]; --k)
    ;
  var W = g + 5 << 3, z = Aa(s, Dr) + Aa(o, _a) + c, le = Aa(s, N) + Aa(o, I) + c + 14 + 3 * k + Aa(ie, de) + 2 * ie[16] + 3 * ie[17] + 7 * ie[18];
  if (f >= 0 && W <= z && W <= le)
    return Ec(t, b, n.subarray(f, f + g));
  var oe, fe, te, $;
  if (yr(t, b, 1 + (le < z)), b += 2, le < z) {
    oe = or(N, p, 0), fe = N, te = or(I, F, 0), $ = I;
    var D = or(de, P, 0);
    yr(t, b, Z - 257), yr(t, b + 5, Le - 1), yr(t, b + 10, k - 4), b += 14;
    for (var H = 0; H < k; ++H)
      yr(t, b + 3 * H, de[dl[H]]);
    b += 3 * k;
    for (var be = [E, he], w = 0; w < 2; ++w)
      for (var j = be[w], H = 0; H < j.length; ++H) {
        var B = j[H] & 31;
        yr(t, b, D[B]), b += de[B], B > 15 && (yr(t, b, j[H] >> 5 & 127), b += j[H] >> 12);
      }
  } else
    oe = Ku, fe = Dr, te = Qu, $ = _a;
  for (var H = 0; H < h; ++H) {
    var U = a[H];
    if (U > 255) {
      var B = U >> 18 & 31;
      Na(t, b, oe[B + 257]), b += fe[B + 257], B > 7 && (yr(t, b, U >> 23 & 31), b += fs[B]);
      var q = U & 31;
      Na(t, b, te[q]), b += $[q], q > 3 && (Na(t, b, U >> 5 & 8191), b += ds[q]);
    } else
      Na(t, b, oe[U]), b += fe[U];
  }
  return Na(t, b, oe[256]), b + fe[256];
}, r1 = /* @__PURE__ */ new Al([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Bc = /* @__PURE__ */ new on(0), i1 = function(n, t, r, a, s, o) {
  var c = o.z || n.length, h = new on(a + c + 5 * (1 + Math.ceil(c / 7e3)) + s), f = h.subarray(a, h.length - s), g = o.l, b = (o.r || 0) & 7;
  if (t) {
    b && (f[0] = o.r >> 3);
    for (var y = r1[t - 1], N = y >> 13, p = y & 8191, O = (1 << r) - 1, I = o.p || new Nn(32768), F = o.h || new Nn(O + 1), _ = Math.ceil(r / 3), E = 2 * _, Z = function(Ue) {
      return (n[Ue] ^ n[Ue + 1] << _ ^ n[Ue + 2] << E) & O;
    }, se = new Al(25e3), he = new Nn(288), Le = new Nn(32), ie = 0, H = 0, ae = o.i || 0, de = 0, P = o.w || 0, k = 0; ae + 2 < c; ++ae) {
      var W = Z(ae), z = ae & 32767, le = F[W];
      if (I[z] = le, F[W] = z, P <= ae) {
        var oe = c - ae;
        if ((ie > 7e3 || de > 24576) && (oe > 423 || !g)) {
          b = sc(n, f, 0, se, he, Le, H, de, k, ae - k, b), de = ie = H = 0, k = ae;
          for (var fe = 0; fe < 286; ++fe)
            he[fe] = 0;
          for (var fe = 0; fe < 30; ++fe)
            Le[fe] = 0;
        }
        var te = 2, $ = 0, D = p, be = z - le & 32767;
        if (oe > 2 && W == Z(ae - be))
          for (var w = Math.min(N, oe) - 1, j = Math.min(32767, ae), B = Math.min(258, oe); be <= j && --D && z != le; ) {
            if (n[ae + te] == n[ae + te - be]) {
              for (var U = 0; U < B && n[ae + U] == n[ae + U - be]; ++U)
                ;
              if (U > te) {
                if (te = U, $ = be, U > w)
                  break;
                for (var q = Math.min(be, U - 2), J = 0, fe = 0; fe < q; ++fe) {
                  var X = ae - be + fe & 32767, T = I[X], Ne = X - T & 32767;
                  Ne > J && (J = Ne, le = X);
                }
              }
            }
            z = le, le = I[z], be += z - le & 32767;
          }
        if ($) {
          se[de++] = 268435456 | pl[te] << 18 | ac[$];
          var we = pl[te] & 31, ue = ac[$] & 31;
          H += fs[we] + ds[ue], ++he[257 + we], ++Le[ue], P = ae + te, ++ie;
        } else
          se[de++] = n[ae], ++he[n[ae]];
      }
    }
    for (ae = Math.max(ae, P); ae < c; ++ae)
      se[de++] = n[ae], ++he[n[ae]];
    b = sc(n, f, g, se, he, Le, H, de, k, ae - k, b), g || (o.r = b & 7 | f[b / 8 | 0] << 3, b -= 7, o.h = F, o.p = I, o.i = ae, o.w = P);
  } else {
    for (var ae = o.w || 0; ae < c + g; ae += 65535) {
      var Ie = ae + 65535;
      Ie >= c && (f[b / 8 | 0] = g, Ie = c), b = Ec(f, b + 1, n.subarray(ae, Ie));
    }
    o.i = c;
  }
  return Mc(h, 0, a + Sl(b) + s);
}, Tc = function() {
  var n = 1, t = 0;
  return {
    p: function(r) {
      for (var a = n, s = t, o = r.length | 0, c = 0; c != o; ) {
        for (var h = Math.min(c + 2655, o); c < h; ++c)
          s += a += r[c];
        a = (a & 65535) + 15 * (a >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      n = a, t = s;
    },
    d: function() {
      return n %= 65521, t %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, a1 = function(n, t, r, a, s) {
  if (!s && (s = { l: 1 }, t.dictionary)) {
    var o = t.dictionary.subarray(-32768), c = new on(o.length + n.length);
    c.set(o), c.set(n, o.length), n = c, s.w = o.length;
  }
  return i1(n, t.level == null ? 6 : t.level, t.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + t.mem, r, a, s);
}, Rc = function(n, t, r) {
  for (; r; ++t)
    n[t] = r, r >>>= 8;
}, o1 = function(n, t) {
  var r = t.level, a = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = a << 6 | (t.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, t.dictionary) {
    var s = Tc();
    s.p(t.dictionary), Rc(n, 2, s.d());
  }
}, s1 = function(n, t) {
  return ((n[0] & 15) != 8 || n[0] >> 4 > 7 || (n[0] << 8 | n[1]) % 31) && Vn(6, "invalid zlib data"), (n[1] >> 5 & 1) == 1 && Vn(6, "invalid zlib data: " + (n[1] & 32 ? "need" : "unexpected") + " dictionary"), (n[1] >> 3 & 4) + 2;
};
function vl(n, t) {
  t || (t = {});
  var r = Tc();
  r.p(n);
  var a = a1(n, t, t.dictionary ? 6 : 2, 4);
  return o1(a, t), Rc(a, a.length - 4, r.d()), a;
}
function l1(n, t) {
  return n1(n.subarray(s1(n), -4), { i: 2 }, t, t);
}
var c1 = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), u1 = 0;
try {
  c1.decode(Bc, { stream: !0 }), u1 = 1;
} catch {
}
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 3.0.1 Built on 2025-03-17T14:19:36.873Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
var Je = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function sl() {
  Je.console && typeof Je.console.log == "function" && Je.console.log.apply(Je.console, arguments);
}
var wt = { log: sl, warn: function(n) {
  Je.console && (typeof Je.console.warn == "function" ? Je.console.warn.apply(Je.console, arguments) : sl.call(null, arguments));
}, error: function(n) {
  Je.console && (typeof Je.console.error == "function" ? Je.console.error.apply(Je.console, arguments) : sl(n));
} };
function ll(n, t, r) {
  var a = new XMLHttpRequest();
  a.open("GET", n), a.responseType = "blob", a.onload = function() {
    ni(a.response, t, r);
  }, a.onerror = function() {
    wt.error("could not download file");
  }, a.send();
}
function lc(n) {
  var t = new XMLHttpRequest();
  t.open("HEAD", n, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function yo(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(t);
  }
}
var Sa, bl, ni = Je.saveAs || ((typeof window > "u" ? "undefined" : mt(window)) !== "object" || window !== Je ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, t, r) {
  var a = Je.URL || Je.webkitURL, s = document.createElement("a");
  t = t || n.name || "download", s.download = t, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? lc(s.href) ? ll(n, t, r) : yo(s, s.target = "_blank") : yo(s)) : (s.href = a.createObjectURL(n), setTimeout(function() {
    a.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    yo(s);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, t, r) {
  if (t = t || n.name || "download", typeof n == "string") if (lc(n)) ll(n, t, r);
  else {
    var a = document.createElement("a");
    a.href = n, a.target = "_blank", setTimeout(function() {
      yo(a);
    });
  }
  else navigator.msSaveOrOpenBlob(function(s, o) {
    return o === void 0 ? o = { autoBom: !1 } : mt(o) !== "object" && (wt.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
  }(n, r), t);
} : function(n, t, r, a) {
  if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof n == "string") return ll(n, t, r);
  var s = n.type === "application/octet-stream", o = /constructor/i.test(Je.HTMLElement) || Je.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((c || s && o) && (typeof FileReader > "u" ? "undefined" : mt(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var b = h.result;
      b = c ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = b : location = b, a = null;
    }, h.readAsDataURL(n);
  } else {
    var f = Je.URL || Je.webkitURL, g = f.createObjectURL(n);
    a ? a.location = g : location.href = g, a = null, setTimeout(function() {
      f.revokeObjectURL(g);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function Dc(n) {
  var t;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], a = 0; a < r.length; a++) {
    var s = r[a].re, o = r[a].process, c = s.exec(n);
    c && (t = o(c), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var h = this.r.toString(16), f = this.g.toString(16), g = this.b.toString(16);
    return h.length == 1 && (h = "0" + h), f.length == 1 && (f = "0" + f), g.length == 1 && (g = "0" + g), "#" + h + f + g;
  };
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function cl(n, t) {
  var r = n[0], a = n[1], s = n[2], o = n[3];
  r = en(r, a, s, o, t[0], 7, -680876936), o = en(o, r, a, s, t[1], 12, -389564586), s = en(s, o, r, a, t[2], 17, 606105819), a = en(a, s, o, r, t[3], 22, -1044525330), r = en(r, a, s, o, t[4], 7, -176418897), o = en(o, r, a, s, t[5], 12, 1200080426), s = en(s, o, r, a, t[6], 17, -1473231341), a = en(a, s, o, r, t[7], 22, -45705983), r = en(r, a, s, o, t[8], 7, 1770035416), o = en(o, r, a, s, t[9], 12, -1958414417), s = en(s, o, r, a, t[10], 17, -42063), a = en(a, s, o, r, t[11], 22, -1990404162), r = en(r, a, s, o, t[12], 7, 1804603682), o = en(o, r, a, s, t[13], 12, -40341101), s = en(s, o, r, a, t[14], 17, -1502002290), r = tn(r, a = en(a, s, o, r, t[15], 22, 1236535329), s, o, t[1], 5, -165796510), o = tn(o, r, a, s, t[6], 9, -1069501632), s = tn(s, o, r, a, t[11], 14, 643717713), a = tn(a, s, o, r, t[0], 20, -373897302), r = tn(r, a, s, o, t[5], 5, -701558691), o = tn(o, r, a, s, t[10], 9, 38016083), s = tn(s, o, r, a, t[15], 14, -660478335), a = tn(a, s, o, r, t[4], 20, -405537848), r = tn(r, a, s, o, t[9], 5, 568446438), o = tn(o, r, a, s, t[14], 9, -1019803690), s = tn(s, o, r, a, t[3], 14, -187363961), a = tn(a, s, o, r, t[8], 20, 1163531501), r = tn(r, a, s, o, t[13], 5, -1444681467), o = tn(o, r, a, s, t[2], 9, -51403784), s = tn(s, o, r, a, t[7], 14, 1735328473), r = nn(r, a = tn(a, s, o, r, t[12], 20, -1926607734), s, o, t[5], 4, -378558), o = nn(o, r, a, s, t[8], 11, -2022574463), s = nn(s, o, r, a, t[11], 16, 1839030562), a = nn(a, s, o, r, t[14], 23, -35309556), r = nn(r, a, s, o, t[1], 4, -1530992060), o = nn(o, r, a, s, t[4], 11, 1272893353), s = nn(s, o, r, a, t[7], 16, -155497632), a = nn(a, s, o, r, t[10], 23, -1094730640), r = nn(r, a, s, o, t[13], 4, 681279174), o = nn(o, r, a, s, t[0], 11, -358537222), s = nn(s, o, r, a, t[3], 16, -722521979), a = nn(a, s, o, r, t[6], 23, 76029189), r = nn(r, a, s, o, t[9], 4, -640364487), o = nn(o, r, a, s, t[12], 11, -421815835), s = nn(s, o, r, a, t[15], 16, 530742520), r = rn(r, a = nn(a, s, o, r, t[2], 23, -995338651), s, o, t[0], 6, -198630844), o = rn(o, r, a, s, t[7], 10, 1126891415), s = rn(s, o, r, a, t[14], 15, -1416354905), a = rn(a, s, o, r, t[5], 21, -57434055), r = rn(r, a, s, o, t[12], 6, 1700485571), o = rn(o, r, a, s, t[3], 10, -1894986606), s = rn(s, o, r, a, t[10], 15, -1051523), a = rn(a, s, o, r, t[1], 21, -2054922799), r = rn(r, a, s, o, t[8], 6, 1873313359), o = rn(o, r, a, s, t[15], 10, -30611744), s = rn(s, o, r, a, t[6], 15, -1560198380), a = rn(a, s, o, r, t[13], 21, 1309151649), r = rn(r, a, s, o, t[4], 6, -145523070), o = rn(o, r, a, s, t[11], 10, -1120210379), s = rn(s, o, r, a, t[2], 15, 718787259), a = rn(a, s, o, r, t[9], 21, -343485551), n[0] = Br(r, n[0]), n[1] = Br(a, n[1]), n[2] = Br(s, n[2]), n[3] = Br(o, n[3]);
}
function ps(n, t, r, a, s, o) {
  return t = Br(Br(t, n), Br(a, o)), Br(t << s | t >>> 32 - s, r);
}
function en(n, t, r, a, s, o, c) {
  return ps(t & r | ~t & a, n, t, s, o, c);
}
function tn(n, t, r, a, s, o, c) {
  return ps(t & a | r & ~a, n, t, s, o, c);
}
function nn(n, t, r, a, s, o, c) {
  return ps(t ^ r ^ a, n, t, s, o, c);
}
function rn(n, t, r, a, s, o, c) {
  return ps(r ^ (t | ~a), n, t, s, o, c);
}
function qc(n) {
  var t, r = n.length, a = [1732584193, -271733879, -1732584194, 271733878];
  for (t = 64; t <= n.length; t += 64) cl(a, h1(n.substring(t - 64, t)));
  n = n.substring(t - 64);
  var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (t = 0; t < n.length; t++) s[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
  if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (cl(a, s), t = 0; t < 16; t++) s[t] = 0;
  return s[14] = 8 * r, cl(a, s), a;
}
function h1(n) {
  var t, r = [];
  for (t = 0; t < 64; t += 4) r[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
  return r;
}
Sa = Je.atob.bind(Je), bl = Je.btoa.bind(Je);
var cc = "0123456789abcdef".split("");
function f1(n) {
  for (var t = "", r = 0; r < 4; r++) t += cc[n >> 8 * r + 4 & 15] + cc[n >> 8 * r & 15];
  return t;
}
function d1(n) {
  return String.fromCharCode((255 & n) >> 0, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function yl(n) {
  return qc(n).map(d1).join("");
}
var p1 = function(n) {
  for (var t = 0; t < n.length; t++) n[t] = f1(n[t]);
  return n.join("");
}(qc("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Br(n, t) {
  if (p1) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  return n + t & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function wl(n, t) {
  var r, a, s, o;
  if (n !== r) {
    for (var c = (s = n, o = 1 + (256 / n.length >> 0), new Array(o + 1).join(s)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var b = h[f];
      g = (g + b + c.charCodeAt(f)) % 256, h[f] = h[g], h[g] = b;
    }
    r = n, a = h;
  } else h = a;
  var y = t.length, N = 0, p = 0, O = "";
  for (f = 0; f < y; f++) p = (p + (b = h[N = (N + 1) % 256])) % 256, h[N] = h[p], h[p] = b, c = h[(h[N] + h[p]) % 256], O += String.fromCharCode(t.charCodeAt(f) ^ c);
  return O;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var uc = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ri(n, t, r, a) {
  this.v = 1, this.r = 2;
  var s = 192;
  n.forEach(function(h) {
    if (uc.perm !== void 0) throw new Error("Invalid permission: " + h);
    s += uc[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (t + this.padding).substr(0, 32), c = (r + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, c), this.P = -(1 + (255 ^ s)), this.encryptionKey = yl(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = wl(this.encryptionKey, this.padding);
}
function Di(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var t = "", r = n.length, a = 0; a < r; a++) {
    var s = n.charCodeAt(a);
    s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? t += "#" + ("0" + s.toString(16)).slice(-2) : t += n[a];
  }
  return t;
}
function hc(n) {
  if (mt(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var t = {};
  this.subscribe = function(r, a, s) {
    if (s = s || !1, typeof r != "string" || typeof a != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    t.hasOwnProperty(r) || (t[r] = {});
    var o = Math.random().toString(35);
    return t[r][o] = [a, !!s], o;
  }, this.unsubscribe = function(r) {
    for (var a in t) if (t[a][r]) return delete t[a][r], Object.keys(t[a]).length === 0 && delete t[a], !0;
    return !1;
  }, this.publish = function(r) {
    if (t.hasOwnProperty(r)) {
      var a = Array.prototype.slice.call(arguments, 1), s = [];
      for (var o in t[r]) {
        var c = t[r][o];
        try {
          c[0].apply(n, a);
        } catch (h) {
          Je.console && wt.error("jsPDF PubSub Error", h.message, h);
        }
        c[1] && s.push(o);
      }
      s.length && s.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return t;
  };
}
function ko(n) {
  if (!(this instanceof ko)) return new ko(n);
  var t = "opacity,stroke-opacity".split(",");
  for (var r in n) n.hasOwnProperty(r) && t.indexOf(r) >= 0 && (this[r] = n[r]);
  this.id = "", this.objectNumber = -1;
}
function zc(n, t) {
  this.gState = n, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function ri(n, t, r, a, s) {
  if (!(this instanceof ri)) return new ri(n, t, r, a, s);
  this.type = n === "axial" ? 2 : 3, this.coords = t, this.colors = r, zc.call(this, a, s);
}
function qi(n, t, r, a, s) {
  if (!(this instanceof qi)) return new qi(n, t, r, a, s);
  this.boundingBox = n, this.xStep = t, this.yStep = r, this.stream = "", this.cloneIndex = 0, zc.call(this, a, s);
}
function Ye(n) {
  var t, r = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], s = arguments[2], o = arguments[3], c = [], h = 1, f = 16, g = "S", b = null;
  mt(n = n || {}) === "object" && (r = n.orientation, a = n.unit || a, s = n.format || s, o = n.compress || n.compressPdf || o, (b = n.encryption || null) !== null && (b.userPassword = b.userPassword || "", b.ownerPassword = b.ownerPassword || "", b.userPermissions = b.userPermissions || []), h = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (t = n.precision), n.floatPrecision !== void 0 && (f = n.floatPrecision), g = n.defaultPathOperation || "S"), c = n.filters || (o === !0 ? ["FlateEncode"] : c), a = a || "mm", r = ("" + (r || "P")).toLowerCase();
  var y = n.putOnlyUsedFonts || !1, N = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = hc;
  var O = "1.3", I = p.__private__.getPdfVersion = function() {
    return O;
  };
  p.__private__.setPdfVersion = function(l) {
    O = l;
  };
  var F = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return F;
  };
  var _ = p.__private__.getPageFormat = function(l) {
    return F[l];
  };
  s = s || "a4";
  var E = { COMPAT: "compat", ADVANCED: "advanced" }, Z = E.COMPAT;
  function se() {
    this.saveGraphicsState(), R(new Ge(Ce, 0, 0, -Ce, 0, Lr() * Ce).toString() + " cm"), this.setFontSize(this.getFontSize() / Ce), g = "n", Z = E.ADVANCED;
  }
  function he() {
    this.restoreGraphicsState(), g = "S", Z = E.COMPAT;
  }
  var Le = p.__private__.combineFontStyleAndFontWeight = function(l, v) {
    if (l == "bold" && v == "normal" || l == "bold" && v == 400 || l == "normal" && v == "italic" || l == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (l = v == 400 || v === "normal" ? l === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || l !== "normal" ? (v == 700 ? "bold" : v) + "" + l : "bold"), l;
  };
  p.advancedAPI = function(l) {
    var v = Z === E.COMPAT;
    return v && se.call(this), typeof l != "function" || (l(this), v && he.call(this)), this;
  }, p.compatAPI = function(l) {
    var v = Z === E.ADVANCED;
    return v && he.call(this), typeof l != "function" || (l(this), v && se.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return Z === E.ADVANCED;
  };
  var ie, H = function(l) {
    if (Z !== E.ADVANCED) throw new Error(l + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, ae = p.roundToPrecision = p.__private__.roundToPrecision = function(l, v) {
    var M = t || v;
    if (isNaN(l) || isNaN(M)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return l.toFixed(M).replace(/0+$/, "");
  };
  ie = p.hpf = p.__private__.hpf = typeof f == "number" ? function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ae(l, f);
  } : f === "smart" ? function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ae(l, l > -1 && l < 1 ? 16 : 5);
  } : function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ae(l, 16);
  };
  var de = p.f2 = p.__private__.f2 = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f2");
    return ae(l, 2);
  }, P = p.__private__.f3 = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f3");
    return ae(l, 3);
  }, k = p.scale = p.__private__.scale = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.scale");
    return Z === E.COMPAT ? l * Ce : Z === E.ADVANCED ? l : void 0;
  }, W = function(l) {
    return Z === E.COMPAT ? Lr() - l : Z === E.ADVANCED ? l : void 0;
  }, z = function(l) {
    return k(W(l));
  };
  p.__private__.setPrecision = p.setPrecision = function(l) {
    typeof parseInt(l, 10) == "number" && (t = parseInt(l, 10));
  };
  var le, oe = "00000000000000000000000000000000", fe = p.__private__.getFileId = function() {
    return oe;
  }, te = p.__private__.setFileId = function(l) {
    return oe = l !== void 0 && /^[a-fA-F0-9]{32}$/.test(l) ? l.toUpperCase() : oe.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), b !== null && (Zt = new Ri(b.userPermissions, b.userPassword, b.ownerPassword, oe)), oe;
  };
  p.setFileId = function(l) {
    return te(l), this;
  }, p.getFileId = function() {
    return fe();
  };
  var $ = p.__private__.convertDateToPDFDate = function(l) {
    var v = l.getTimezoneOffset(), M = v < 0 ? "+" : "-", V = Math.floor(Math.abs(v / 60)), ee = Math.abs(v % 60), me = [M, B(V), "'", B(ee), "'"].join("");
    return ["D:", l.getFullYear(), B(l.getMonth() + 1), B(l.getDate()), B(l.getHours()), B(l.getMinutes()), B(l.getSeconds()), me].join("");
  }, D = p.__private__.convertPDFDateToDate = function(l) {
    var v = parseInt(l.substr(2, 4), 10), M = parseInt(l.substr(6, 2), 10) - 1, V = parseInt(l.substr(8, 2), 10), ee = parseInt(l.substr(10, 2), 10), me = parseInt(l.substr(12, 2), 10), Se = parseInt(l.substr(14, 2), 10);
    return new Date(v, M, V, ee, me, Se, 0);
  }, be = p.__private__.setCreationDate = function(l) {
    var v;
    if (l === void 0 && (l = /* @__PURE__ */ new Date()), l instanceof Date) v = $(l);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(l)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = l;
    }
    return le = v;
  }, w = p.__private__.getCreationDate = function(l) {
    var v = le;
    return l === "jsDate" && (v = D(le)), v;
  };
  p.setCreationDate = function(l) {
    return be(l), this;
  }, p.getCreationDate = function(l) {
    return w(l);
  };
  var j, B = p.__private__.padd2 = function(l) {
    return ("0" + parseInt(l)).slice(-2);
  }, U = p.__private__.padd2Hex = function(l) {
    return ("00" + (l = l.toString())).substr(l.length);
  }, q = 0, J = [], X = [], T = 0, Ne = [], we = [], ue = !1, Ie = X, Ue = function() {
    q = 0, T = 0, X = [], J = [], Ne = [], cr = Rt(), Mn = Rt();
  };
  p.__private__.setCustomOutputDestination = function(l) {
    ue = !0, Ie = l;
  };
  var ge = function(l) {
    ue || (Ie = l);
  };
  p.__private__.resetCustomOutputDestination = function() {
    ue = !1, Ie = X;
  };
  var R = p.__private__.out = function(l) {
    return l = l.toString(), T += l.length + 1, Ie.push(l), Ie;
  }, Xe = p.__private__.write = function(l) {
    return R(arguments.length === 1 ? l.toString() : Array.prototype.join.call(arguments, " "));
  }, qe = p.__private__.getArrayBuffer = function(l) {
    for (var v = l.length, M = new ArrayBuffer(v), V = new Uint8Array(M); v--; ) V[v] = l.charCodeAt(v);
    return M;
  }, _e = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return _e;
  };
  var je = n.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(l) {
    return je = Z === E.ADVANCED ? l / Ce : l, this;
  };
  var Be, Oe = p.__private__.getFontSize = p.getFontSize = function() {
    return Z === E.COMPAT ? je : je * Ce;
  }, He = n.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(l) {
    return He = l, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return He;
  };
  var $e, nt = p.__private__.setZoomMode = function(l) {
    var v = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(l)) Be = l;
    else if (isNaN(l)) {
      if (v.indexOf(l) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + l + '" is not recognized.');
      Be = l;
    } else Be = parseInt(l, 10);
  };
  p.__private__.getZoomMode = function() {
    return Be;
  };
  var it, ke = p.__private__.setPageMode = function(l) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(l) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + l + '" is not recognized.');
    $e = l;
  };
  p.__private__.getPageMode = function() {
    return $e;
  };
  var Pe = p.__private__.setLayoutMode = function(l) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(l) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + l + '" is not recognized.');
    it = l;
  };
  p.__private__.getLayoutMode = function() {
    return it;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(l, v, M) {
    return nt(l), Pe(v), ke(M), this;
  };
  var De = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(l) {
    if (Object.keys(De).indexOf(l) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return De[l];
  }, p.__private__.getDocumentProperties = function() {
    return De;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(l) {
    for (var v in De) De.hasOwnProperty(v) && l[v] && (De[v] = l[v]);
    return this;
  }, p.__private__.setDocumentProperty = function(l, v) {
    if (Object.keys(De).indexOf(l) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return De[l] = v;
  };
  var Me, Ce, Tt, at, Kt, dt = {}, xt = {}, Yn = [], ht = {}, Hr = {}, _t = {}, Fn = {}, lr = null, Pt = 0, Ze = [], ft = new hc(p), Vr = n.hotfixes || [], Jt = {}, Jn = {}, Xn = [], Ge = function l(v, M, V, ee, me, Se) {
    if (!(this instanceof l)) return new l(v, M, V, ee, me, Se);
    isNaN(v) && (v = 1), isNaN(M) && (M = 0), isNaN(V) && (V = 0), isNaN(ee) && (ee = 1), isNaN(me) && (me = 0), isNaN(Se) && (Se = 0), this._matrix = [v, M, V, ee, me, Se];
  };
  Object.defineProperty(Ge.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(l) {
    this._matrix[0] = l;
  } }), Object.defineProperty(Ge.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(l) {
    this._matrix[1] = l;
  } }), Object.defineProperty(Ge.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(l) {
    this._matrix[2] = l;
  } }), Object.defineProperty(Ge.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(l) {
    this._matrix[3] = l;
  } }), Object.defineProperty(Ge.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(l) {
    this._matrix[4] = l;
  } }), Object.defineProperty(Ge.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(l) {
    this._matrix[5] = l;
  } }), Object.defineProperty(Ge.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(l) {
    this._matrix[0] = l;
  } }), Object.defineProperty(Ge.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(l) {
    this._matrix[1] = l;
  } }), Object.defineProperty(Ge.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(l) {
    this._matrix[2] = l;
  } }), Object.defineProperty(Ge.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(l) {
    this._matrix[3] = l;
  } }), Object.defineProperty(Ge.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(l) {
    this._matrix[4] = l;
  } }), Object.defineProperty(Ge.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(l) {
    this._matrix[5] = l;
  } }), Object.defineProperty(Ge.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Ge.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Ge.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Ge.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Ge.prototype.join = function(l) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(ie).join(l);
  }, Ge.prototype.multiply = function(l) {
    var v = l.sx * this.sx + l.shy * this.shx, M = l.sx * this.shy + l.shy * this.sy, V = l.shx * this.sx + l.sy * this.shx, ee = l.shx * this.shy + l.sy * this.sy, me = l.tx * this.sx + l.ty * this.shx + this.tx, Se = l.tx * this.shy + l.ty * this.sy + this.ty;
    return new Ge(v, M, V, ee, me, Se);
  }, Ge.prototype.decompose = function() {
    var l = this.sx, v = this.shy, M = this.shx, V = this.sy, ee = this.tx, me = this.ty, Se = Math.sqrt(l * l + v * v), Te = (l /= Se) * M + (v /= Se) * V;
    M -= l * Te, V -= v * Te;
    var Ve = Math.sqrt(M * M + V * V);
    return Te /= Ve, l * (V /= Ve) < v * (M /= Ve) && (l = -l, v = -v, Te = -Te, Se = -Se), { scale: new Ge(Se, 0, 0, Ve, 0, 0), translate: new Ge(1, 0, 0, 1, ee, me), rotate: new Ge(l, v, -v, l, 0, 0), skew: new Ge(1, 0, Te, 1, 0, 0) };
  }, Ge.prototype.toString = function(l) {
    return this.join(" ");
  }, Ge.prototype.inversed = function() {
    var l = this.sx, v = this.shy, M = this.shx, V = this.sy, ee = this.tx, me = this.ty, Se = 1 / (l * V - v * M), Te = V * Se, Ve = -v * Se, tt = -M * Se, Qe = l * Se;
    return new Ge(Te, Ve, tt, Qe, -Te * ee - tt * me, -Ve * ee - Qe * me);
  }, Ge.prototype.applyToPoint = function(l) {
    var v = l.x * this.sx + l.y * this.shx + this.tx, M = l.x * this.shy + l.y * this.sy + this.ty;
    return new wi(v, M);
  }, Ge.prototype.applyToRectangle = function(l) {
    var v = this.applyToPoint(l), M = this.applyToPoint(new wi(l.x + l.w, l.y + l.h));
    return new ta(v.x, v.y, M.x - v.x, M.y - v.y);
  }, Ge.prototype.clone = function() {
    var l = this.sx, v = this.shy, M = this.shx, V = this.sy, ee = this.tx, me = this.ty;
    return new Ge(l, v, M, V, ee, me);
  }, p.Matrix = Ge;
  var On = p.matrixMult = function(l, v) {
    return v.multiply(l);
  }, $n = new Ge(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = $n;
  var un = function(l, v) {
    if (!Hr[l]) {
      var M = (v instanceof ri ? "Sh" : "P") + (Object.keys(ht).length + 1).toString(10);
      v.id = M, Hr[l] = M, ht[M] = v, ft.publish("addPattern", v);
    }
  };
  p.ShadingPattern = ri, p.TilingPattern = qi, p.addShadingPattern = function(l, v) {
    return H("addShadingPattern()"), un(l, v), this;
  }, p.beginTilingPattern = function(l) {
    H("beginTilingPattern()"), Wa(l.boundingBox[0], l.boundingBox[1], l.boundingBox[2] - l.boundingBox[0], l.boundingBox[3] - l.boundingBox[1], l.matrix);
  }, p.endTilingPattern = function(l, v) {
    H("endTilingPattern()"), v.stream = we[j].join(`
`), un(l, v), ft.publish("endTilingPattern", v), Xn.pop().restore();
  };
  var Ut = p.__private__.newObject = function() {
    var l = Rt();
    return bn(l, !0), l;
  }, Rt = p.__private__.newObjectDeferred = function() {
    return q++, J[q] = function() {
      return T;
    }, q;
  }, bn = function(l, v) {
    return v = typeof v == "boolean" && v, J[l] = T, v && R(l + " 0 obj"), l;
  }, si = p.__private__.newAdditionalObject = function() {
    var l = { objId: Rt(), content: "" };
    return Ne.push(l), l;
  }, cr = Rt(), Mn = Rt(), En = p.__private__.decodeColorString = function(l) {
    var v = l.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G")
      v.length === 5 && (v[4] === "k" || v[4] === "K") && (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var M = parseFloat(v[0]);
      v = [M, M, M, "r"];
    }
    for (var V = "#", ee = 0; ee < 3; ee++) V += ("0" + Math.floor(255 * parseFloat(v[ee])).toString(16)).slice(-2);
    return V;
  }, Bn = p.__private__.encodeColorString = function(l) {
    var v;
    typeof l == "string" && (l = { ch1: l });
    var M = l.ch1, V = l.ch2, ee = l.ch3, me = l.ch4, Se = l.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof M == "string" && M.charAt(0) !== "#") {
      var Te = new Dc(M);
      if (Te.ok) M = Te.toHex();
      else if (!/^\d*\.?\d*$/.test(M)) throw new Error('Invalid color "' + M + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof M == "string" && /^#[0-9A-Fa-f]{3}$/.test(M) && (M = "#" + M[1] + M[1] + M[2] + M[2] + M[3] + M[3]), typeof M == "string" && /^#[0-9A-Fa-f]{6}$/.test(M)) {
      var Ve = parseInt(M.substr(1), 16);
      M = Ve >> 16 & 255, V = Ve >> 8 & 255, ee = 255 & Ve;
    }
    if (V === void 0 || me === void 0 && M === V && V === ee) if (typeof M == "string") v = M + " " + Se[0];
    else switch (l.precision) {
      case 2:
        v = de(M / 255) + " " + Se[0];
        break;
      case 3:
      default:
        v = P(M / 255) + " " + Se[0];
    }
    else if (me === void 0 || mt(me) === "object") {
      if (me && !isNaN(me.a) && me.a === 0) return v = ["1.", "1.", "1.", Se[1]].join(" ");
      if (typeof M == "string") v = [M, V, ee, Se[1]].join(" ");
      else switch (l.precision) {
        case 2:
          v = [de(M / 255), de(V / 255), de(ee / 255), Se[1]].join(" ");
          break;
        default:
        case 3:
          v = [P(M / 255), P(V / 255), P(ee / 255), Se[1]].join(" ");
      }
    } else if (typeof M == "string") v = [M, V, ee, me, Se[2]].join(" ");
    else switch (l.precision) {
      case 2:
        v = [de(M), de(V), de(ee), de(me), Se[2]].join(" ");
        break;
      case 3:
      default:
        v = [P(M), P(V), P(ee), P(me), Se[2]].join(" ");
    }
    return v;
  }, Kn = p.__private__.getFilters = function() {
    return c;
  }, An = p.__private__.putStream = function(l) {
    var v = (l = l || {}).data || "", M = l.filters || Kn(), V = l.alreadyAppliedFilters || [], ee = l.addLength1 || !1, me = v.length, Se = l.objectId, Te = function(Qt) {
      return Qt;
    };
    if (b !== null && Se === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    b !== null && (Te = Zt.encryptor(Se, 0));
    var Ve = {};
    M === !0 && (M = ["FlateEncode"]);
    var tt = l.additionalKeyValues || [], Qe = (Ve = Ye.API.processDataByFilters !== void 0 ? Ye.API.processDataByFilters(v, M) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(V) ? V.join(" ") : V.toString());
    if (Ve.data.length !== 0 && (tt.push({ key: "Length", value: Ve.data.length }), ee === !0 && tt.push({ key: "Length1", value: me })), Qe.length != 0) if (Qe.split("/").length - 1 == 1) tt.push({ key: "Filter", value: Qe });
    else {
      tt.push({ key: "Filter", value: "[" + Qe + "]" });
      for (var lt = 0; lt < tt.length; lt += 1) if (tt[lt].key === "DecodeParms") {
        for (var St = [], It = 0; It < Ve.reverseChain.split("/").length - 1; It += 1) St.push("null");
        St.push(tt[lt].value), tt[lt].value = "[" + St.join(" ") + "]";
      }
    }
    R("<<");
    for (var Dt = 0; Dt < tt.length; Dt++) R("/" + tt[Dt].key + " " + tt[Dt].value);
    R(">>"), Ve.data.length !== 0 && (R("stream"), R(Te(Ve.data)), R("endstream"));
  }, Zn = p.__private__.putPage = function(l) {
    var v = l.number, M = l.data, V = l.objId, ee = l.contentsObjId;
    bn(V, !0), R("<</Type /Page"), R("/Parent " + l.rootDictionaryObjId + " 0 R"), R("/Resources " + l.resourceDictionaryObjId + " 0 R"), R("/MediaBox [" + parseFloat(ie(l.mediaBox.bottomLeftX)) + " " + parseFloat(ie(l.mediaBox.bottomLeftY)) + " " + ie(l.mediaBox.topRightX) + " " + ie(l.mediaBox.topRightY) + "]"), l.cropBox !== null && R("/CropBox [" + ie(l.cropBox.bottomLeftX) + " " + ie(l.cropBox.bottomLeftY) + " " + ie(l.cropBox.topRightX) + " " + ie(l.cropBox.topRightY) + "]"), l.bleedBox !== null && R("/BleedBox [" + ie(l.bleedBox.bottomLeftX) + " " + ie(l.bleedBox.bottomLeftY) + " " + ie(l.bleedBox.topRightX) + " " + ie(l.bleedBox.topRightY) + "]"), l.trimBox !== null && R("/TrimBox [" + ie(l.trimBox.bottomLeftX) + " " + ie(l.trimBox.bottomLeftY) + " " + ie(l.trimBox.topRightX) + " " + ie(l.trimBox.topRightY) + "]"), l.artBox !== null && R("/ArtBox [" + ie(l.artBox.bottomLeftX) + " " + ie(l.artBox.bottomLeftY) + " " + ie(l.artBox.topRightX) + " " + ie(l.artBox.topRightY) + "]"), typeof l.userUnit == "number" && l.userUnit !== 1 && R("/UserUnit " + l.userUnit), ft.publish("putPage", { objId: V, pageContext: Ze[v], pageNumber: v, page: M }), R("/Contents " + ee + " 0 R"), R(">>"), R("endobj");
    var me = M.join(`
`);
    return Z === E.ADVANCED && (me += `
Q`), bn(ee, !0), An({ data: me, filters: Kn(), objectId: ee }), R("endobj"), V;
  }, Wr = p.__private__.putPages = function() {
    var l, v, M = [];
    for (l = 1; l <= Pt; l++) Ze[l].objId = Rt(), Ze[l].contentsObjId = Rt();
    for (l = 1; l <= Pt; l++) M.push(Zn({ number: l, data: we[l], objId: Ze[l].objId, contentsObjId: Ze[l].contentsObjId, mediaBox: Ze[l].mediaBox, cropBox: Ze[l].cropBox, bleedBox: Ze[l].bleedBox, trimBox: Ze[l].trimBox, artBox: Ze[l].artBox, userUnit: Ze[l].userUnit, rootDictionaryObjId: cr, resourceDictionaryObjId: Mn }));
    bn(cr, !0), R("<</Type /Pages");
    var V = "/Kids [";
    for (v = 0; v < Pt; v++) V += M[v] + " 0 R ";
    R(V + "]"), R("/Count " + Pt), R(">>"), R("endobj"), ft.publish("postPutPages");
  }, li = function(l) {
    ft.publish("putFont", { font: l, out: R, newObject: Ut, putStream: An }), l.isAlreadyPutted !== !0 && (l.objectNumber = Ut(), R("<<"), R("/Type /Font"), R("/BaseFont /" + Di(l.postScriptName)), R("/Subtype /Type1"), typeof l.encoding == "string" && R("/Encoding /" + l.encoding), R("/FirstChar 32"), R("/LastChar 255"), R(">>"), R("endobj"));
  }, ci = function() {
    for (var l in dt) dt.hasOwnProperty(l) && (y === !1 || y === !0 && N.hasOwnProperty(l)) && li(dt[l]);
  }, ui = function(l) {
    l.objectNumber = Ut();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [ie(l.x), ie(l.y), ie(l.x + l.width), ie(l.y + l.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" });
    var M = l.pages[1].join(`
`);
    An({ data: M, additionalKeyValues: v, objectId: l.objectNumber }), R("endobj");
  }, hi = function() {
    for (var l in Jt) Jt.hasOwnProperty(l) && ui(Jt[l]);
  }, Pa = function(l, v) {
    var M, V = [], ee = 1 / (v - 1);
    for (M = 0; M < 1; M += ee) V.push(M);
    if (V.push(1), l[0].offset != 0) {
      var me = { offset: 0, color: l[0].color };
      l.unshift(me);
    }
    if (l[l.length - 1].offset != 1) {
      var Se = { offset: 1, color: l[l.length - 1].color };
      l.push(Se);
    }
    for (var Te = "", Ve = 0, tt = 0; tt < V.length; tt++) {
      for (M = V[tt]; M > l[Ve + 1].offset; ) Ve++;
      var Qe = l[Ve].offset, lt = (M - Qe) / (l[Ve + 1].offset - Qe), St = l[Ve].color, It = l[Ve + 1].color;
      Te += U(Math.round((1 - lt) * St[0] + lt * It[0]).toString(16)) + U(Math.round((1 - lt) * St[1] + lt * It[1]).toString(16)) + U(Math.round((1 - lt) * St[2] + lt * It[2]).toString(16));
    }
    return Te.trim();
  }, gs = function(l, v) {
    v || (v = 21);
    var M = Ut(), V = Pa(l.colors, v), ee = [];
    ee.push({ key: "FunctionType", value: "0" }), ee.push({ key: "Domain", value: "[0.0 1.0]" }), ee.push({ key: "Size", value: "[" + v + "]" }), ee.push({ key: "BitsPerSample", value: "8" }), ee.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), ee.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), An({ data: V, additionalKeyValues: ee, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: M }), R("endobj"), l.objectNumber = Ut(), R("<< /ShadingType " + l.type), R("/ColorSpace /DeviceRGB");
    var me = "/Coords [" + ie(parseFloat(l.coords[0])) + " " + ie(parseFloat(l.coords[1])) + " ";
    l.type === 2 ? me += ie(parseFloat(l.coords[2])) + " " + ie(parseFloat(l.coords[3])) : me += ie(parseFloat(l.coords[2])) + " " + ie(parseFloat(l.coords[3])) + " " + ie(parseFloat(l.coords[4])) + " " + ie(parseFloat(l.coords[5])), R(me += "]"), l.matrix && R("/Matrix [" + l.matrix.toString() + "]"), R("/Function " + M + " 0 R"), R("/Extend [true true]"), R(">>"), R("endobj");
  }, ms = function(l, v) {
    var M = Rt(), V = Ut();
    v.push({ resourcesOid: M, objectOid: V }), l.objectNumber = V;
    var ee = [];
    ee.push({ key: "Type", value: "/Pattern" }), ee.push({ key: "PatternType", value: "1" }), ee.push({ key: "PaintType", value: "1" }), ee.push({ key: "TilingType", value: "1" }), ee.push({ key: "BBox", value: "[" + l.boundingBox.map(ie).join(" ") + "]" }), ee.push({ key: "XStep", value: ie(l.xStep) }), ee.push({ key: "YStep", value: ie(l.yStep) }), ee.push({ key: "Resources", value: M + " 0 R" }), l.matrix && ee.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" }), An({ data: l.stream, additionalKeyValues: ee, objectId: l.objectNumber }), R("endobj");
  }, fi = function(l) {
    var v;
    for (v in ht) ht.hasOwnProperty(v) && (ht[v] instanceof ri ? gs(ht[v]) : ht[v] instanceof qi && ms(ht[v], l));
  }, Ia = function(l) {
    for (var v in l.objectNumber = Ut(), R("<<"), l) switch (v) {
      case "opacity":
        R("/ca " + de(l[v]));
        break;
      case "stroke-opacity":
        R("/CA " + de(l[v]));
    }
    R(">>"), R("endobj");
  }, vs = function() {
    var l;
    for (l in _t) _t.hasOwnProperty(l) && Ia(_t[l]);
  }, Wi = function() {
    for (var l in R("/XObject <<"), Jt) Jt.hasOwnProperty(l) && Jt[l].objectNumber >= 0 && R("/" + l + " " + Jt[l].objectNumber + " 0 R");
    ft.publish("putXobjectDict"), R(">>");
  }, bs = function() {
    Zt.oid = Ut(), R("<<"), R("/Filter /Standard"), R("/V " + Zt.v), R("/R " + Zt.r), R("/U <" + Zt.toHexString(Zt.U) + ">"), R("/O <" + Zt.toHexString(Zt.O) + ">"), R("/P " + Zt.P), R(">>"), R("endobj");
  }, ka = function() {
    for (var l in R("/Font <<"), dt) dt.hasOwnProperty(l) && (y === !1 || y === !0 && N.hasOwnProperty(l)) && R("/" + l + " " + dt[l].objectNumber + " 0 R");
    R(">>");
  }, ys = function() {
    if (Object.keys(ht).length > 0) {
      for (var l in R("/Shading <<"), ht) ht.hasOwnProperty(l) && ht[l] instanceof ri && ht[l].objectNumber >= 0 && R("/" + l + " " + ht[l].objectNumber + " 0 R");
      ft.publish("putShadingPatternDict"), R(">>");
    }
  }, di = function(l) {
    if (Object.keys(ht).length > 0) {
      for (var v in R("/Pattern <<"), ht) ht.hasOwnProperty(v) && ht[v] instanceof p.TilingPattern && ht[v].objectNumber >= 0 && ht[v].objectNumber < l && R("/" + v + " " + ht[v].objectNumber + " 0 R");
      ft.publish("putTilingPatternDict"), R(">>");
    }
  }, ws = function() {
    if (Object.keys(_t).length > 0) {
      var l;
      for (l in R("/ExtGState <<"), _t) _t.hasOwnProperty(l) && _t[l].objectNumber >= 0 && R("/" + l + " " + _t[l].objectNumber + " 0 R");
      ft.publish("putGStateDict"), R(">>");
    }
  }, jt = function(l) {
    bn(l.resourcesOid, !0), R("<<"), R("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), ka(), ys(), di(l.objectOid), ws(), Wi(), R(">>"), R("endobj");
  }, Ca = function() {
    var l = [];
    ci(), vs(), hi(), fi(l), ft.publish("putResources"), l.forEach(jt), jt({ resourcesOid: Mn, objectOid: Number.MAX_SAFE_INTEGER }), ft.publish("postPutResources");
  }, ja = function() {
    ft.publish("putAdditionalObjects");
    for (var l = 0; l < Ne.length; l++) {
      var v = Ne[l];
      bn(v.objId, !0), R(v.content), R("endobj");
    }
    ft.publish("postPutAdditionalObjects");
  }, Fa = function(l) {
    xt[l.fontName] = xt[l.fontName] || {}, xt[l.fontName][l.fontStyle] = l.id;
  }, Gi = function(l, v, M, V, ee) {
    var me = { id: "F" + (Object.keys(dt).length + 1).toString(10), postScriptName: l, fontName: v, fontStyle: M, encoding: V, isStandardFont: ee || !1, metadata: {} };
    return ft.publish("addFont", { font: me, instance: this }), dt[me.id] = me, Fa(me), me.id;
  }, xs = function(l) {
    for (var v = 0, M = _e.length; v < M; v++) {
      var V = Gi.call(this, l[v][0], l[v][1], l[v][2], _e[v][3], !0);
      y === !1 && (N[V] = !0);
      var ee = l[v][0].split("-");
      Fa({ id: V, fontName: ee[0], fontStyle: ee[1] || "" });
    }
    ft.publish("addFonts", { fonts: dt, dictionary: xt });
  }, Tn = function(l) {
    return l.foo = function() {
      try {
        return l.apply(this, arguments);
      } catch (V) {
        var v = V.stack || "";
        ~v.indexOf(" at ") && (v = v.split(" at ")[1]);
        var M = "Error in function " + v.split(`
`)[0].split("<")[0] + ": " + V.message;
        if (!Je.console) throw new Error(M);
        Je.console.error(M, V), Je.alert && alert(M);
      }
    }, l.foo.bar = l, l.foo;
  }, pi = function(l, v) {
    var M, V, ee, me, Se, Te, Ve, tt, Qe;
    if (ee = (v = v || {}).sourceEncoding || "Unicode", Se = v.outputEncoding, (v.autoencode || Se) && dt[Me].metadata && dt[Me].metadata[ee] && dt[Me].metadata[ee].encoding && (me = dt[Me].metadata[ee].encoding, !Se && dt[Me].encoding && (Se = dt[Me].encoding), !Se && me.codePages && (Se = me.codePages[0]), typeof Se == "string" && (Se = me[Se]), Se)) {
      for (Ve = !1, Te = [], M = 0, V = l.length; M < V; M++) (tt = Se[l.charCodeAt(M)]) ? Te.push(String.fromCharCode(tt)) : Te.push(l[M]), Te[M].charCodeAt(0) >> 8 && (Ve = !0);
      l = Te.join("");
    }
    for (M = l.length; Ve === void 0 && M !== 0; ) l.charCodeAt(M - 1) >> 8 && (Ve = !0), M--;
    if (!Ve) return l;
    for (Te = v.noBOM ? [] : [254, 255], M = 0, V = l.length; M < V; M++) {
      if ((Qe = (tt = l.charCodeAt(M)) >> 8) >> 8) throw new Error("Character at position " + M + " of string '" + l + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      Te.push(Qe), Te.push(tt - (Qe << 8));
    }
    return String.fromCharCode.apply(void 0, Te);
  }, hn = p.__private__.pdfEscape = p.pdfEscape = function(l, v) {
    return pi(l, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Yi = p.__private__.beginPage = function(l) {
    we[++Pt] = [], Ze[Pt] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(l[0]), topRightY: Number(l[1]) } }, Ma(Pt), ge(we[j]);
  }, Oa = function(l, v) {
    var M, V, ee;
    switch (r = v || r, typeof l == "string" && (M = _(l.toLowerCase()), Array.isArray(M) && (V = M[0], ee = M[1])), Array.isArray(l) && (V = l[0] * Ce, ee = l[1] * Ce), isNaN(V) && (V = s[0], ee = s[1]), (V > 14400 || ee > 14400) && (wt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), V = Math.min(14400, V), ee = Math.min(14400, ee)), s = [V, ee], r.substr(0, 1)) {
      case "l":
        ee > V && (s = [ee, V]);
        break;
      case "p":
        V > ee && (s = [ee, V]);
    }
    Yi(s), qa(Ki), R(Rn), Qi !== 0 && R(Qi + " J"), ea !== 0 && R(ea + " j"), ft.publish("addPage", { pageNumber: Pt });
  }, Ls = function(l) {
    l > 0 && l <= Pt && (we.splice(l, 1), Ze.splice(l, 1), Pt--, j > Pt && (j = Pt), this.setPage(j));
  }, Ma = function(l) {
    l > 0 && l <= Pt && (j = l);
  }, Ns = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return we.length - 1;
  }, Ea = function(l, v, M) {
    var V, ee = void 0;
    return M = M || {}, l = l !== void 0 ? l : dt[Me].fontName, v = v !== void 0 ? v : dt[Me].fontStyle, V = l.toLowerCase(), xt[V] !== void 0 && xt[V][v] !== void 0 ? ee = xt[V][v] : xt[l] !== void 0 && xt[l][v] !== void 0 ? ee = xt[l][v] : M.disableWarning === !1 && wt.warn("Unable to look up font label for font '" + l + "', '" + v + "'. Refer to getFontList() for available fonts."), ee || M.noFallback || (ee = xt.times[v]) == null && (ee = xt.times.normal), ee;
  }, As = p.__private__.putInfo = function() {
    var l = Ut(), v = function(V) {
      return V;
    };
    for (var M in b !== null && (v = Zt.encryptor(l, 0)), R("<<"), R("/Producer (" + hn(v("jsPDF " + Ye.version)) + ")"), De) De.hasOwnProperty(M) && De[M] && R("/" + M.substr(0, 1).toUpperCase() + M.substr(1) + " (" + hn(v(De[M])) + ")");
    R("/CreationDate (" + hn(v(le)) + ")"), R(">>"), R("endobj");
  }, Ji = p.__private__.putCatalog = function(l) {
    var v = (l = l || {}).rootDictionaryObjId || cr;
    switch (Ut(), R("<<"), R("/Type /Catalog"), R("/Pages " + v + " 0 R"), Be || (Be = "fullwidth"), Be) {
      case "fullwidth":
        R("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        R("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        R("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        R("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var M = "" + Be;
        M.substr(M.length - 1) === "%" && (Be = parseInt(Be) / 100), typeof Be == "number" && R("/OpenAction [3 0 R /XYZ null null " + de(Be) + "]");
    }
    switch (it || (it = "continuous"), it) {
      case "continuous":
        R("/PageLayout /OneColumn");
        break;
      case "single":
        R("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        R("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        R("/PageLayout /TwoColumnRight");
    }
    $e && R("/PageMode /" + $e), ft.publish("putCatalog"), R(">>"), R("endobj");
  }, Ss = p.__private__.putTrailer = function() {
    R("trailer"), R("<<"), R("/Size " + (q + 1)), R("/Root " + q + " 0 R"), R("/Info " + (q - 1) + " 0 R"), b !== null && R("/Encrypt " + Zt.oid + " 0 R"), R("/ID [ <" + oe + "> <" + oe + "> ]"), R(">>");
  }, _s = p.__private__.putHeader = function() {
    R("%PDF-" + O), R("%ºß¬à");
  }, Ps = p.__private__.putXRef = function() {
    var l = "0000000000";
    R("xref"), R("0 " + (q + 1)), R("0000000000 65535 f ");
    for (var v = 1; v <= q; v++)
      typeof J[v] == "function" ? R((l + J[v]()).slice(-10) + " 00000 n ") : J[v] !== void 0 ? R((l + J[v]).slice(-10) + " 00000 n ") : R("0000000000 00000 n ");
  }, ur = p.__private__.buildDocument = function() {
    Ue(), ge(X), ft.publish("buildDocument"), _s(), Wr(), ja(), Ca(), b !== null && bs(), As(), Ji();
    var l = T;
    return Ps(), Ss(), R("startxref"), R("" + l), R("%%EOF"), ge(we[j]), X.join(`
`);
  }, gi = p.__private__.getBlob = function(l) {
    return new Blob([qe(l)], { type: "application/pdf" });
  }, mi = p.output = p.__private__.output = Tn(function(l, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", l) {
      case void 0:
        return ur();
      case "save":
        p.save(v.filename);
        break;
      case "arraybuffer":
        return qe(ur());
      case "blob":
        return gi(ur());
      case "bloburi":
      case "bloburl":
        if (Je.URL !== void 0 && typeof Je.URL.createObjectURL == "function") return Je.URL && Je.URL.createObjectURL(gi(ur())) || void 0;
        wt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var M = "", V = ur();
        try {
          M = bl(V);
        } catch {
          M = bl(unescape(encodeURIComponent(V)));
        }
        return "data:application/pdf;filename=" + v.filename + ";base64," + M;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Je) === "[object Window]") {
          var ee = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", me = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          v.pdfObjectUrl && (ee = v.pdfObjectUrl, me = "");
          var Se = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + ee + '"' + me + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(v) + ");<\/script></body></html>", Te = Je.open();
          return Te !== null && Te.document.write(Se), Te;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Je) === "[object Window]") {
          var Ve = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', tt = Je.open();
          if (tt !== null) {
            tt.document.write(Ve);
            var Qe = this;
            tt.document.documentElement.querySelector("#pdfViewer").onload = function() {
              tt.document.title = v.filename, tt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(Qe.output("bloburl"));
            };
          }
          return tt;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Je) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var lt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', St = Je.open();
        if (St !== null && (St.document.write(lt), St.document.title = v.filename), St || typeof safari > "u") return St;
        break;
      case "datauri":
      case "dataurl":
        return Je.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }), Ba = function(l) {
    return Array.isArray(Vr) === !0 && Vr.indexOf(l) > -1;
  };
  switch (a) {
    case "pt":
      Ce = 1;
      break;
    case "mm":
      Ce = 72 / 25.4;
      break;
    case "cm":
      Ce = 72 / 2.54;
      break;
    case "in":
      Ce = 72;
      break;
    case "px":
      Ce = Ba("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      Ce = 12;
      break;
    case "ex":
      Ce = 6;
      break;
    default:
      if (typeof a != "number") throw new Error("Invalid unit: " + a);
      Ce = a;
  }
  var Zt = null;
  be(), te();
  var Is = function(l) {
    return b !== null ? Zt.encryptor(l, 0) : function(v) {
      return v;
    };
  }, Ta = p.__private__.getPageInfo = p.getPageInfo = function(l) {
    if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Ze[l].objId, pageNumber: l, pageContext: Ze[l] };
  }, Ke = p.__private__.getPageInfoByObjId = function(l) {
    if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Ze) if (Ze[v].objId === l) break;
    return Ta(v);
  }, ks = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Ze[j].objId, pageNumber: j, pageContext: Ze[j] };
  };
  p.addPage = function() {
    return Oa.apply(this, arguments), this;
  }, p.setPage = function() {
    return Ma.apply(this, arguments), ge.call(this, we[j]), this;
  }, p.insertPage = function(l) {
    return this.addPage(), this.movePage(j, l), this;
  }, p.movePage = function(l, v) {
    var M, V;
    if (l > v) {
      M = we[l], V = Ze[l];
      for (var ee = l; ee > v; ee--) we[ee] = we[ee - 1], Ze[ee] = Ze[ee - 1];
      we[v] = M, Ze[v] = V, this.setPage(v);
    } else if (l < v) {
      M = we[l], V = Ze[l];
      for (var me = l; me < v; me++) we[me] = we[me + 1], Ze[me] = Ze[me + 1];
      we[v] = M, Ze[v] = V, this.setPage(v);
    }
    return this;
  }, p.deletePage = function() {
    return Ls.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(l, v, M, V, ee) {
    var me, Se, Te, Ve, tt, Qe, lt, St, It, Dt = (V = V || {}).scope || this;
    if (typeof l == "number" && typeof v == "number" && (typeof M == "string" || Array.isArray(M))) {
      var Qt = M;
      M = v, v = l, l = Qt;
    }
    if (arguments[3] instanceof Ge ? (H("The transform parameter of text() with a Matrix value"), It = ee) : (Te = arguments[4], Ve = arguments[5], mt(lt = arguments[3]) === "object" && lt !== null || (typeof Te == "string" && (Ve = Te, Te = null), typeof lt == "string" && (Ve = lt, lt = null), typeof lt == "number" && (Te = lt, lt = null), V = { flags: lt, angle: Te, align: Ve })), isNaN(v) || isNaN(M) || l == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (l.length === 0) return Dt;
    var Vt = "", Dn = !1, yn = typeof V.lineHeightFactor == "number" ? V.lineHeightFactor : Yr, tr = Dt.internal.scaleFactor;
    function Ga(Lt) {
      return Lt = Lt.split("	").join(Array(V.TabLen || 9).join(" ")), hn(Lt, lt);
    }
    function aa(Lt) {
      for (var Nt, Ot = Lt.concat(), Ht = [], gr = Ot.length; gr--; ) typeof (Nt = Ot.shift()) == "string" ? Ht.push(Nt) : Array.isArray(Lt) && (Nt.length === 1 || Nt[1] === void 0 && Nt[2] === void 0) ? Ht.push(Nt[0]) : Ht.push([Nt[0], Nt[1], Nt[2]]);
      return Ht;
    }
    function oa(Lt, Nt) {
      var Ot;
      if (typeof Lt == "string") Ot = Nt(Lt)[0];
      else if (Array.isArray(Lt)) {
        for (var Ht, gr, pa = Lt.concat(), ji = [], Ka = pa.length; Ka--; ) typeof (Ht = pa.shift()) == "string" ? ji.push(Nt(Ht)[0]) : Array.isArray(Ht) && typeof Ht[0] == "string" && (gr = Nt(Ht[0], Ht[1], Ht[2]), ji.push([gr[0], gr[1], gr[2]]));
        Ot = ji;
      }
      return Ot;
    }
    var Li = !1, sa = !0;
    if (typeof l == "string") Li = !0;
    else if (Array.isArray(l)) {
      var la = l.concat();
      Se = [];
      for (var Ni, Xt = la.length; Xt--; ) (typeof (Ni = la.shift()) != "string" || Array.isArray(Ni) && typeof Ni[0] != "string") && (sa = !1);
      Li = sa;
    }
    if (Li === !1) throw new Error('Type of text must be string or Array. "' + l + '" is not recognized.');
    typeof l == "string" && (l = l.match(/[\r?\n]/) ? l.split(/\r\n|\r|\n/g) : [l]);
    var Ai = je / Dt.internal.scaleFactor, Si = Ai * (yn - 1);
    switch (V.baseline) {
      case "bottom":
        M -= Si;
        break;
      case "top":
        M += Ai - Si;
        break;
      case "hanging":
        M += Ai - 2 * Si;
        break;
      case "middle":
        M += Ai / 2 - Si;
    }
    if ((Qe = V.maxWidth || 0) > 0 && (typeof l == "string" ? l = Dt.splitTextToSize(l, Qe) : Object.prototype.toString.call(l) === "[object Array]" && (l = l.reduce(function(Lt, Nt) {
      return Lt.concat(Dt.splitTextToSize(Nt, Qe));
    }, []))), me = { text: l, x: v, y: M, options: V, mutex: { pdfEscape: hn, activeFontKey: Me, fonts: dt, activeFontSize: je } }, ft.publish("preProcessText", me), l = me.text, Te = (V = me.options).angle, !(It instanceof Ge) && Te && typeof Te == "number") {
      Te *= Math.PI / 180, V.rotationDirection === 0 && (Te = -Te), Z === E.ADVANCED && (Te = -Te);
      var _i = Math.cos(Te), ca = Math.sin(Te);
      It = new Ge(_i, ca, -ca, _i, 0, 0);
    } else Te && Te instanceof Ge && (It = Te);
    Z !== E.ADVANCED || It || (It = $n), (tt = V.charSpace || yi) !== void 0 && (Vt += ie(k(tt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (St = V.horizontalScale) !== void 0 && (Vt += ie(100 * St) + ` Tz
`), V.lang;
    var fn = -1, Ds = V.renderingMode !== void 0 ? V.renderingMode : V.stroke, ua = Dt.internal.getCurrentPageInfo().pageContext;
    switch (Ds) {
      case 0:
      case !1:
      case "fill":
        fn = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        fn = 1;
        break;
      case 2:
      case "fillThenStroke":
        fn = 2;
        break;
      case 3:
      case "invisible":
        fn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        fn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        fn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        fn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        fn = 7;
    }
    var Ya = ua.usedRenderingMode !== void 0 ? ua.usedRenderingMode : -1;
    fn !== -1 ? Vt += fn + ` Tr
` : Ya !== -1 && (Vt += `0 Tr
`), fn !== -1 && (ua.usedRenderingMode = fn), Ve = V.align || "left";
    var Sn, Pi = je * yn, Ja = Dt.internal.pageSize.getWidth(), Xa = dt[Me];
    tt = V.charSpace || yi, Qe = V.maxWidth || 0, lt = Object.assign({ autoencode: !0, noBOM: !0 }, V.flags);
    var Nr = [], $r = function(Lt) {
      return Dt.getStringUnitWidth(Lt, { font: Xa, charSpace: tt, fontSize: je, doKerning: !1 }) * je / tr;
    };
    if (Object.prototype.toString.call(l) === "[object Array]") {
      var dn;
      Se = aa(l), Ve !== "left" && (Sn = Se.map($r));
      var sn, Ar = 0;
      if (Ve === "right") {
        v -= Sn[0], l = [], Xt = Se.length;
        for (var fr = 0; fr < Xt; fr++) fr === 0 ? (sn = er(v), dn = hr(M)) : (sn = k(Ar - Sn[fr]), dn = -Pi), l.push([Se[fr], sn, dn]), Ar = Sn[fr];
      } else if (Ve === "center") {
        v -= Sn[0] / 2, l = [], Xt = Se.length;
        for (var dr = 0; dr < Xt; dr++) dr === 0 ? (sn = er(v), dn = hr(M)) : (sn = k((Ar - Sn[dr]) / 2), dn = -Pi), l.push([Se[dr], sn, dn]), Ar = Sn[dr];
      } else if (Ve === "left") {
        l = [], Xt = Se.length;
        for (var Ii = 0; Ii < Xt; Ii++) l.push(Se[Ii]);
      } else if (Ve === "justify" && Xa.encoding === "Identity-H") {
        l = [], Xt = Se.length, Qe = Qe !== 0 ? Qe : Ja;
        for (var pr = 0, Ft = 0; Ft < Xt; Ft++) if (dn = Ft === 0 ? hr(M) : -Pi, sn = Ft === 0 ? er(v) : pr, Ft < Xt - 1) {
          var ha = k((Qe - Sn[Ft]) / (Se[Ft].split(" ").length - 1)), ln = Se[Ft].split(" ");
          l.push([ln[0] + " ", sn, dn]), pr = 0;
          for (var _n = 1; _n < ln.length; _n++) {
            var ki = ($r(ln[_n - 1] + " " + ln[_n]) - $r(ln[_n])) * tr + ha;
            _n == ln.length - 1 ? l.push([ln[_n], ki, 0]) : l.push([ln[_n] + " ", ki, 0]), pr -= ki;
          }
        } else l.push([Se[Ft], sn, dn]);
        l.push(["", pr, 0]);
      } else {
        if (Ve !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (l = [], Xt = Se.length, Qe = Qe !== 0 ? Qe : Ja, Ft = 0; Ft < Xt; Ft++) dn = Ft === 0 ? hr(M) : -Pi, sn = Ft === 0 ? er(v) : 0, Ft < Xt - 1 ? Nr.push(ie(k((Qe - Sn[Ft]) / (Se[Ft].split(" ").length - 1)))) : Nr.push(0), l.push([Se[Ft], sn, dn]);
      }
    }
    var $a = typeof V.R2L == "boolean" ? V.R2L : He;
    $a === !0 && (l = oa(l, function(Lt, Nt, Ot) {
      return [Lt.split("").reverse().join(""), Nt, Ot];
    })), me = { text: l, x: v, y: M, options: V, mutex: { pdfEscape: hn, activeFontKey: Me, fonts: dt, activeFontSize: je } }, ft.publish("postProcessText", me), l = me.text, Dn = me.mutex.isHex || !1;
    var fa = dt[Me].encoding;
    fa !== "WinAnsiEncoding" && fa !== "StandardEncoding" || (l = oa(l, function(Lt, Nt, Ot) {
      return [Ga(Lt), Nt, Ot];
    })), Se = aa(l), l = [];
    for (var Kr, Zr, Sr, Qr = 0, Ci = 1, ei = Array.isArray(Se[0]) ? Ci : Qr, _r = "", da = function(Lt, Nt, Ot) {
      var Ht = "";
      return Ot instanceof Ge ? (Ot = typeof V.angle == "number" ? On(Ot, new Ge(1, 0, 0, 1, Lt, Nt)) : On(new Ge(1, 0, 0, 1, Lt, Nt), Ot), Z === E.ADVANCED && (Ot = On(new Ge(1, 0, 0, -1, 0, 0), Ot)), Ht = Ot.join(" ") + ` Tm
`) : Ht = ie(Lt) + " " + ie(Nt) + ` Td
`, Ht;
    }, Pn = 0; Pn < Se.length; Pn++) {
      switch (_r = "", ei) {
        case Ci:
          Sr = (Dn ? "<" : "(") + Se[Pn][0] + (Dn ? ">" : ")"), Kr = parseFloat(Se[Pn][1]), Zr = parseFloat(Se[Pn][2]);
          break;
        case Qr:
          Sr = (Dn ? "<" : "(") + Se[Pn] + (Dn ? ">" : ")"), Kr = er(v), Zr = hr(M);
      }
      Nr !== void 0 && Nr[Pn] !== void 0 && (_r = Nr[Pn] + ` Tw
`), Pn === 0 ? l.push(_r + da(Kr, Zr, It) + Sr) : ei === Qr ? l.push(_r + Sr) : ei === Ci && l.push(_r + da(Kr, Zr, It) + Sr);
    }
    l = ei === Qr ? l.join(` Tj
T* `) : l.join(` Tj
`), l += ` Tj
`;
    var In = `BT
/`;
    return In += Me + " " + je + ` Tf
`, In += ie(je * yn) + ` TL
`, In += Jr + `
`, In += Vt, In += l, R(In += "ET"), N[Me] = !0, Dt;
  };
  var Cs = p.__private__.clip = p.clip = function(l) {
    return R(l === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return Cs("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return R("n"), this;
  };
  var Qn = p.__private__.isValidStyle = function(l) {
    var v = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(l) !== -1 && (v = !0), v;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(l) {
    return Qn(l) && (g = l), this;
  };
  var Ra = p.__private__.getStyle = p.getStyle = function(l) {
    var v = g;
    switch (l) {
      case "D":
      case "S":
        v = "S";
        break;
      case "F":
        v = "f";
        break;
      case "FD":
      case "DF":
        v = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        v = l;
    }
    return v;
  }, Da = p.close = function() {
    return R("h"), this;
  };
  p.stroke = function() {
    return R("S"), this;
  }, p.fill = function(l) {
    return vi("f", l), this;
  }, p.fillEvenOdd = function(l) {
    return vi("f*", l), this;
  }, p.fillStroke = function(l) {
    return vi("B", l), this;
  }, p.fillStrokeEvenOdd = function(l) {
    return vi("B*", l), this;
  };
  var vi = function(l, v) {
    mt(v) === "object" ? Fs(v, l) : R(l);
  }, Xi = function(l) {
    l === null || Z === E.ADVANCED && l === void 0 || (l = Ra(l), R(l));
  };
  function js(l, v, M, V, ee) {
    var me = new qi(v || this.boundingBox, M || this.xStep, V || this.yStep, this.gState, ee || this.matrix);
    me.stream = this.stream;
    var Se = l + "$$" + this.cloneIndex++ + "$$";
    return un(Se, me), me;
  }
  var Fs = function(l, v) {
    var M = Hr[l.key], V = ht[M];
    if (V instanceof ri) R("q"), R(Os(v)), V.gState && p.setGState(V.gState), R(l.matrix.toString() + " cm"), R("/" + M + " sh"), R("Q");
    else if (V instanceof qi) {
      var ee = new Ge(1, 0, 0, -1, 0, Lr());
      l.matrix && (ee = ee.multiply(l.matrix || $n), M = js.call(V, l.key, l.boundingBox, l.xStep, l.yStep, ee).id), R("q"), R("/Pattern cs"), R("/" + M + " scn"), V.gState && p.setGState(V.gState), R(v), R("Q");
    }
  }, Os = function(l) {
    switch (l) {
      case "f":
      case "F":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
        return "W S";
      case "B*":
        return "W* S";
      case "S":
        return "W S";
      case "n":
        return "W n";
    }
  }, $i = p.moveTo = function(l, v) {
    return R(ie(k(l)) + " " + ie(z(v)) + " m"), this;
  }, Gr = p.lineTo = function(l, v) {
    return R(ie(k(l)) + " " + ie(z(v)) + " l"), this;
  }, wr = p.curveTo = function(l, v, M, V, ee, me) {
    return R([ie(k(l)), ie(z(v)), ie(k(M)), ie(z(V)), ie(k(ee)), ie(z(me)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(l, v, M, V, ee) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || isNaN(V) || !Qn(ee)) throw new Error("Invalid arguments passed to jsPDF.line");
    return Z === E.COMPAT ? this.lines([[M - l, V - v]], l, v, [1, 1], ee || "S") : this.lines([[M - l, V - v]], l, v, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(l, v, M, V, ee, me) {
    var Se, Te, Ve, tt, Qe, lt, St, It, Dt, Qt, Vt, Dn;
    if (typeof l == "number" && (Dn = M, M = v, v = l, l = Dn), V = V || [1, 1], me = me || !1, isNaN(v) || isNaN(M) || !Array.isArray(l) || !Array.isArray(V) || !Qn(ee) || typeof me != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for ($i(v, M), Se = V[0], Te = V[1], tt = l.length, Qt = v, Vt = M, Ve = 0; Ve < tt; Ve++) (Qe = l[Ve]).length === 2 ? (Qt = Qe[0] * Se + Qt, Vt = Qe[1] * Te + Vt, Gr(Qt, Vt)) : (lt = Qe[0] * Se + Qt, St = Qe[1] * Te + Vt, It = Qe[2] * Se + Qt, Dt = Qe[3] * Te + Vt, Qt = Qe[4] * Se + Qt, Vt = Qe[5] * Te + Vt, wr(lt, St, It, Dt, Qt, Vt));
    return me && Da(), Xi(ee), this;
  }, p.path = function(l) {
    for (var v = 0; v < l.length; v++) {
      var M = l[v], V = M.c;
      switch (M.op) {
        case "m":
          $i(V[0], V[1]);
          break;
        case "l":
          Gr(V[0], V[1]);
          break;
        case "c":
          wr.apply(this, V);
          break;
        case "h":
          Da();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(l, v, M, V, ee) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || isNaN(V) || !Qn(ee)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return Z === E.COMPAT && (V = -V), R([ie(k(l)), ie(z(v)), ie(k(M)), ie(k(V)), "re"].join(" ")), Xi(ee), this;
  }, p.__private__.triangle = p.triangle = function(l, v, M, V, ee, me, Se) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || isNaN(V) || isNaN(ee) || isNaN(me) || !Qn(Se)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[M - l, V - v], [ee - M, me - V], [l - ee, v - me]], l, v, [1, 1], Se, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(l, v, M, V, ee, me, Se) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || isNaN(V) || isNaN(ee) || isNaN(me) || !Qn(Se)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Te = 4 / 3 * (Math.SQRT2 - 1);
    return ee = Math.min(ee, 0.5 * M), me = Math.min(me, 0.5 * V), this.lines([[M - 2 * ee, 0], [ee * Te, 0, ee, me - me * Te, ee, me], [0, V - 2 * me], [0, me * Te, -ee * Te, me, -ee, me], [2 * ee - M, 0], [-ee * Te, 0, -ee, -me * Te, -ee, -me], [0, 2 * me - V], [0, -me * Te, ee * Te, -me, ee, -me]], l + ee, v, [1, 1], Se, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(l, v, M, V, ee) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || isNaN(V) || !Qn(ee)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var me = 4 / 3 * (Math.SQRT2 - 1) * M, Se = 4 / 3 * (Math.SQRT2 - 1) * V;
    return $i(l + M, v), wr(l + M, v - Se, l + me, v - V, l, v - V), wr(l - me, v - V, l - M, v - Se, l - M, v), wr(l - M, v + Se, l - me, v + V, l, v + V), wr(l + me, v + V, l + M, v + Se, l + M, v), Xi(ee), this;
  }, p.__private__.circle = p.circle = function(l, v, M, V) {
    if (isNaN(l) || isNaN(v) || isNaN(M) || !Qn(V)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(l, v, M, M, V);
  }, p.setFont = function(l, v, M) {
    return M && (v = Le(v, M)), Me = Ea(l, v, { disableWarning: !1 }), this;
  };
  var Ms = p.__private__.getFont = p.getFont = function() {
    return dt[Ea.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var l, v, M = {};
    for (l in xt) if (xt.hasOwnProperty(l)) for (v in M[l] = [], xt[l]) xt[l].hasOwnProperty(v) && M[l].push(v);
    return M;
  }, p.addFont = function(l, v, M, V, ee) {
    var me = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && me.indexOf(arguments[3]) !== -1 ? ee = arguments[3] : arguments[3] && me.indexOf(arguments[3]) == -1 && (M = Le(M, V)), ee = ee || "Identity-H", Gi.call(this, l, v, M, ee);
  };
  var Yr, Ki = n.lineWidth || 0.200025, bi = p.__private__.getLineWidth = p.getLineWidth = function() {
    return Ki;
  }, qa = p.__private__.setLineWidth = p.setLineWidth = function(l) {
    return Ki = l, R(ie(k(l)) + " w"), this;
  };
  p.__private__.setLineDash = Ye.API.setLineDash = Ye.API.setLineDashPattern = function(l, v) {
    if (l = l || [], v = v || 0, isNaN(v) || !Array.isArray(l)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return l = l.map(function(M) {
      return ie(k(M));
    }).join(" "), v = ie(k(v)), R("[" + l + "] " + v + " d"), this;
  };
  var za = p.__private__.getLineHeight = p.getLineHeight = function() {
    return je * Yr;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return je * Yr;
  };
  var Ua = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(l) {
    return typeof (l = l || 1.15) == "number" && (Yr = l), this;
  }, Ha = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Yr;
  };
  Ua(n.lineHeight);
  var er = p.__private__.getHorizontalCoordinate = function(l) {
    return k(l);
  }, hr = p.__private__.getVerticalCoordinate = function(l) {
    return Z === E.ADVANCED ? l : Ze[j].mediaBox.topRightY - Ze[j].mediaBox.bottomLeftY - k(l);
  }, Es = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(l) {
    return ie(er(l));
  }, xr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(l) {
    return ie(hr(l));
  }, Rn = n.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return En(Rn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(l, v, M, V) {
    return Rn = Bn({ ch1: l, ch2: v, ch3: M, ch4: V, pdfColorType: "draw", precision: 2 }), R(Rn), this;
  };
  var Zi = n.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return En(Zi);
  }, p.__private__.setFillColor = p.setFillColor = function(l, v, M, V) {
    return Zi = Bn({ ch1: l, ch2: v, ch3: M, ch4: V, pdfColorType: "fill", precision: 2 }), R(Zi), this;
  };
  var Jr = n.textColor || "0 g", Bs = p.__private__.getTextColor = p.getTextColor = function() {
    return En(Jr);
  };
  p.__private__.setTextColor = p.setTextColor = function(l, v, M, V) {
    return Jr = Bn({ ch1: l, ch2: v, ch3: M, ch4: V, pdfColorType: "text", precision: 3 }), this;
  };
  var yi = n.charSpace, Ts = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(yi || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return yi = l, this;
  };
  var Qi = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(l) {
    var v = p.CapJoinStyles[l];
    if (v === void 0) throw new Error("Line cap style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Qi = v, R(v + " J"), this;
  };
  var ea = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(l) {
    var v = p.CapJoinStyles[l];
    if (v === void 0) throw new Error("Line join style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ea = v, R(v + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(l) {
    if (l = l || 0, isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return R(ie(k(l)) + " M"), this;
  }, p.GState = ko, p.setGState = function(l) {
    (l = typeof l == "string" ? _t[Fn[l]] : Va(null, l)).equals(lr) || (R("/" + l.id + " gs"), lr = l);
  };
  var Va = function(l, v) {
    if (!l || !Fn[l]) {
      var M = !1;
      for (var V in _t) if (_t.hasOwnProperty(V) && _t[V].equals(v)) {
        M = !0;
        break;
      }
      if (M) v = _t[V];
      else {
        var ee = "GS" + (Object.keys(_t).length + 1).toString(10);
        _t[ee] = v, v.id = ee;
      }
      return l && (Fn[l] = v.id), ft.publish("addGState", v), v;
    }
  };
  p.addGState = function(l, v) {
    return Va(l, v), this;
  }, p.saveGraphicsState = function() {
    return R("q"), Yn.push({ key: Me, size: je, color: Jr }), this;
  }, p.restoreGraphicsState = function() {
    R("Q");
    var l = Yn.pop();
    return Me = l.key, je = l.size, Jr = l.color, lr = null, this;
  }, p.setCurrentTransformationMatrix = function(l) {
    return R(l.toString() + " cm"), this;
  }, p.comment = function(l) {
    return R("#" + l), this;
  };
  var wi = function(l, v) {
    var M = l || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return M;
    }, set: function(me) {
      isNaN(me) || (M = parseFloat(me));
    } });
    var V = v || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return V;
    }, set: function(me) {
      isNaN(me) || (V = parseFloat(me));
    } });
    var ee = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return ee;
    }, set: function(me) {
      ee = me.toString();
    } }), this;
  }, ta = function(l, v, M, V) {
    wi.call(this, l, v), this.type = "rect";
    var ee = M || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return ee;
    }, set: function(Se) {
      isNaN(Se) || (ee = parseFloat(Se));
    } });
    var me = V || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return me;
    }, set: function(Se) {
      isNaN(Se) || (me = parseFloat(Se));
    } }), this;
  }, na = function() {
    this.page = Pt, this.currentPage = j, this.pages = we.slice(0), this.pagesContext = Ze.slice(0), this.x = Tt, this.y = at, this.matrix = Kt, this.width = Xr(j), this.height = Lr(j), this.outputDestination = Ie, this.id = "", this.objectNumber = -1;
  };
  na.prototype.restore = function() {
    Pt = this.page, j = this.currentPage, Ze = this.pagesContext, we = this.pages, Tt = this.x, at = this.y, Kt = this.matrix, ra(j, this.width), ia(j, this.height), Ie = this.outputDestination;
  };
  var Wa = function(l, v, M, V, ee) {
    Xn.push(new na()), Pt = j = 0, we = [], Tt = l, at = v, Kt = ee, Yi([M, V]);
  }, Rs = function(l) {
    if (Jn[l]) Xn.pop().restore();
    else {
      var v = new na(), M = "Xo" + (Object.keys(Jt).length + 1).toString(10);
      v.id = M, Jn[l] = M, Jt[M] = v, ft.publish("addFormObject", v), Xn.pop().restore();
    }
  };
  for (var xi in p.beginFormObject = function(l, v, M, V, ee) {
    return Wa(l, v, M, V, ee), this;
  }, p.endFormObject = function(l) {
    return Rs(l), this;
  }, p.doFormObject = function(l, v) {
    var M = Jt[Jn[l]];
    return R("q"), R(v.toString() + " cm"), R("/" + M.id + " Do"), R("Q"), this;
  }, p.getFormObject = function(l) {
    var v = Jt[Jn[l]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, p.save = function(l, v) {
    return l = l || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || !1, v.returnPromise === !1 ? (ni(gi(ur()), l), typeof ni.unload == "function" && Je.setTimeout && setTimeout(ni.unload, 911), this) : new Promise(function(M, V) {
      try {
        var ee = ni(gi(ur()), l);
        typeof ni.unload == "function" && Je.setTimeout && setTimeout(ni.unload, 911), M(ee);
      } catch (me) {
        V(me.message);
      }
    });
  }, Ye.API) Ye.API.hasOwnProperty(xi) && (xi === "events" && Ye.API.events.length ? function(l, v) {
    var M, V, ee;
    for (ee = v.length - 1; ee !== -1; ee--) M = v[ee][0], V = v[ee][1], l.subscribe.apply(l, [M].concat(typeof V == "function" ? [V] : V));
  }(ft, Ye.API.events) : p[xi] = Ye.API[xi]);
  var Xr = p.getPageWidth = function(l) {
    return (Ze[l = l || j].mediaBox.topRightX - Ze[l].mediaBox.bottomLeftX) / Ce;
  }, ra = p.setPageWidth = function(l, v) {
    Ze[l].mediaBox.topRightX = v * Ce + Ze[l].mediaBox.bottomLeftX;
  }, Lr = p.getPageHeight = function(l) {
    return (Ze[l = l || j].mediaBox.topRightY - Ze[l].mediaBox.bottomLeftY) / Ce;
  }, ia = p.setPageHeight = function(l, v) {
    Ze[l].mediaBox.topRightY = v * Ce + Ze[l].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: hn, getStyle: Ra, getFont: Ms, getFontSize: Oe, getCharSpace: Ts, getTextColor: Bs, getLineHeight: za, getLineHeightFactor: Ha, getLineWidth: bi, write: Xe, getHorizontalCoordinate: er, getVerticalCoordinate: hr, getCoordinateString: Es, getVerticalCoordinateString: xr, collections: {}, newObject: Ut, newAdditionalObject: si, newObjectDeferred: Rt, newObjectDeferredBegin: bn, getFilters: Kn, putStream: An, events: ft, scaleFactor: Ce, pageSize: { getWidth: function() {
    return Xr(j);
  }, setWidth: function(l) {
    ra(j, l);
  }, getHeight: function() {
    return Lr(j);
  }, setHeight: function(l) {
    ia(j, l);
  } }, encryptionOptions: b, encryption: Zt, getEncryptor: Is, output: mi, getNumberOfPages: Ns, pages: we, out: R, f2: de, f3: P, getPageInfo: Ta, getPageInfoByObjId: Ke, getCurrentPageInfo: ks, getPDFVersion: I, Point: wi, Rectangle: ta, Matrix: Ge, hasHotfix: Ba }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Xr(j);
  }, set: function(l) {
    ra(j, l);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return Lr(j);
  }, set: function(l) {
    ia(j, l);
  }, enumerable: !0, configurable: !0 }), xs.call(p, _e), Me = "F1", Oa(s, r), ft.publish("initialized"), p;
}
Ri.prototype.lsbFirstWord = function(n) {
  return String.fromCharCode(n >> 0 & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
}, Ri.prototype.toHexString = function(n) {
  return n.split("").map(function(t) {
    return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Ri.prototype.hexToBytes = function(n) {
  for (var t = [], r = 0; r < n.length; r += 2) t.push(String.fromCharCode(parseInt(n.substr(r, 2), 16)));
  return t.join("");
}, Ri.prototype.processOwnerPassword = function(n, t) {
  return wl(yl(t).substr(0, 5), n);
}, Ri.prototype.encryptor = function(n, t) {
  var r = yl(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(a) {
    return wl(r, a);
  };
}, ko.prototype.equals = function(n) {
  var t, r = "id,objectNumber,equals";
  if (!n || mt(n) !== mt(this)) return !1;
  var a = 0;
  for (t in this) if (!(r.indexOf(t) >= 0)) {
    if (this.hasOwnProperty(t) && !n.hasOwnProperty(t) || this[t] !== n[t]) return !1;
    a++;
  }
  for (t in n) n.hasOwnProperty(t) && r.indexOf(t) < 0 && a--;
  return a === 0;
}, Ye.API = { events: [] }, Ye.version = "3.0.1";
var Ct = Ye.API, _l = 1, oi = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, Bi = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, et = function(n) {
  return n.toFixed(2);
}, Er = function(n) {
  return n.toFixed(5);
};
Ct.__acroform__ = {};
var vn = function(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n;
}, fc = function(n) {
  return n * _l;
}, rr = function(n) {
  var t = new Hc(), r = ze.internal.getHeight(n) || 0, a = ze.internal.getWidth(n) || 0;
  return t.BBox = [0, 0, Number(et(a)), Number(et(r))], t;
}, g1 = Ct.__acroform__.setBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n |= 1 << t;
}, m1 = Ct.__acroform__.clearBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n &= ~(1 << t);
}, v1 = Ct.__acroform__.getBit = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return (n & 1 << t) == 0 ? 0 : 1;
}, Mt = Ct.__acroform__.getBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return v1(n, t - 1);
}, Et = Ct.__acroform__.setBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return g1(n, t - 1);
}, Bt = Ct.__acroform__.clearBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return m1(n, t - 1);
}, b1 = Ct.__acroform__.calculateCoordinates = function(n, t) {
  var r = t.internal.getHorizontalCoordinate, a = t.internal.getVerticalCoordinate, s = n[0], o = n[1], c = n[2], h = n[3], f = {};
  return f.lowerLeft_X = r(s) || 0, f.lowerLeft_Y = a(o + h) || 0, f.upperRight_X = r(s + c) || 0, f.upperRight_Y = a(o) || 0, [Number(et(f.lowerLeft_X)), Number(et(f.lowerLeft_Y)), Number(et(f.upperRight_X)), Number(et(f.upperRight_Y))];
}, y1 = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var t = [], r = n._V || n.DV, a = xl(n, r), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(n.scope.__private__.encodeColorString(n.color)), t.push("/" + s + " " + et(a.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(a.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var o = rr(n);
    return o.scope = n.scope, o.stream = t.join(`
`), o;
  }
}, xl = function(n, t) {
  var r = n.fontSize === 0 ? n.maxFontSize : n.fontSize, a = { text: "", fontSize: "" }, s = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  s = n.multiline ? s.map(function(P) {
    return P.split(`
`);
  }) : s.map(function(P) {
    return [P];
  });
  var o = r, c = ze.internal.getHeight(n) || 0;
  c = c < 0 ? -c : c;
  var h = ze.internal.getWidth(n) || 0;
  h = h < 0 ? -h : h;
  var f = function(P, k, W) {
    if (P + 1 < s.length) {
      var z = k + " " + s[P + 1][0];
      return wo(z, n, W).width <= h - 4;
    }
    return !1;
  };
  o++;
  e: for (; o > 0; ) {
    t = "", o--;
    var g, b, y = wo("3", n, o).height, N = n.multiline ? c - o : (c - y) / 2, p = N += 2, O = 0, I = 0, F = 0;
    if (o <= 0) {
      t = `(...) Tj
`, t += "% Width of Text: " + wo(t, n, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var _ = "", E = 0, Z = 0; Z < s.length; Z++) if (s.hasOwnProperty(Z)) {
      var se = !1;
      if (s[Z].length !== 1 && F !== s[Z].length - 1) {
        if ((y + 2) * (E + 2) + 2 > c) continue e;
        _ += s[Z][F], se = !0, I = Z, Z--;
      } else {
        _ = (_ += s[Z][F] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
        var he = parseInt(Z), Le = f(he, _, o), ie = Z >= s.length - 1;
        if (Le && !ie) {
          _ += " ", F = 0;
          continue;
        }
        if (Le || ie) {
          if (ie) I = he;
          else if (n.multiline && (y + 2) * (E + 2) + 2 > c) continue e;
        } else {
          if (!n.multiline || (y + 2) * (E + 2) + 2 > c) continue e;
          I = he;
        }
      }
      for (var H = "", ae = O; ae <= I; ae++) {
        var de = s[ae];
        if (n.multiline) {
          if (ae === I) {
            H += de[F] + " ", F = (F + 1) % de.length;
            continue;
          }
          if (ae === O) {
            H += de[de.length - 1] + " ";
            continue;
          }
        }
        H += de[0] + " ";
      }
      switch (H = H.substr(H.length - 1) == " " ? H.substr(0, H.length - 1) : H, b = wo(H, n, o).width, n.textAlign) {
        case "right":
          g = h - b - 2;
          break;
        case "center":
          g = (h - b) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      t += et(g) + " " + et(p) + ` Td
`, t += "(" + oi(H) + `) Tj
`, t += -et(g) + ` 0 Td
`, p = -(o + 2), b = 0, O = se ? I : I + 1, E++, _ = "";
    }
    break;
  }
  return a.text = t, a.fontSize = o, a;
}, wo = function(n, t, r) {
  var a = t.scope.internal.getFont(t.fontName, t.fontStyle), s = t.scope.getStringUnitWidth(n, { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
  return { height: t.scope.getStringUnitWidth("3", { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: s };
}, w1 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, x1 = function(n, t) {
  var r = { type: "reference", object: n };
  t.internal.getPageInfo(n.page).pageContext.annotations.find(function(a) {
    return a.type === r.type && a.object === r.object;
  }) === void 0 && t.internal.getPageInfo(n.page).pageContext.annotations.push(r);
}, L1 = function(n, t) {
  for (var r in n) if (n.hasOwnProperty(r)) {
    var a = r, s = n[r];
    t.internal.newObjectDeferredBegin(s.objId, !0), mt(s) === "object" && typeof s.putStream == "function" && s.putStream(), delete n[a];
  }
}, N1 = function(n, t) {
  if (t.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (Wn.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(w1)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    _l = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Vc(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(r) {
        r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID, r.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(r) {
        r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var a = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var s in a) if (a.hasOwnProperty(s)) {
          var o = a[s];
          o.objId = void 0, o.hasAnnotation && x1(o, r);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(r) {
        if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        r.internal.write("/AcroForm " + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(r) {
      (function(a, s) {
        var o = !a;
        for (var c in a || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(c)) {
          var h = a[c], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = b1(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), h.DA = ze.createDefaultAppearanceStream(h), mt(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var b = y1(h);
            f.push({ key: "AP", value: "<</N " + b + ">>" }), s.internal.acroformPlugin.xForms.push(b);
          }
          if (h.appearanceStreamContent) {
            var y = "";
            for (var N in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(N)) {
              var p = h.appearanceStreamContent[N];
              if (y += "/" + N + " ", y += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var c in p) if (p.hasOwnProperty(c)) {
                  var O = p[c];
                  typeof O == "function" && (O = O.call(s, h)), y += "/" + c + " " + O + " ", s.internal.acroformPlugin.xForms.indexOf(O) >= 0 || s.internal.acroformPlugin.xForms.push(O);
                }
              } else typeof (O = p) == "function" && (O = O.call(s, h)), y += "/" + c + " " + O, s.internal.acroformPlugin.xForms.indexOf(O) >= 0 || s.internal.acroformPlugin.xForms.push(O);
              y += ">>";
            }
            f.push({ key: "AP", value: `<<
` + y + ">>" });
          }
          s.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), s.internal.out("endobj");
        }
        o && L1(s.internal.acroformPlugin.xForms, s);
      })(r, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, Uc = Ct.__acroform__.arrayToPdfArray = function(n, t, r) {
  var a = function(c) {
    return c;
  };
  if (Array.isArray(n)) {
    for (var s = "[", o = 0; o < n.length; o++) switch (o !== 0 && (s += " "), mt(n[o])) {
      case "boolean":
      case "number":
      case "object":
        s += n[o].toString();
        break;
      case "string":
        n[o].substr(0, 1) !== "/" ? (t !== void 0 && r && (a = r.internal.getEncryptor(t)), s += "(" + oi(a(n[o].toString())) + ")") : s += n[o].toString();
    }
    return s += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, ul = function(n, t, r) {
  var a = function(s) {
    return s;
  };
  return t !== void 0 && r && (a = r.internal.getEncryptor(t)), (n = n || "").toString(), n = "(" + oi(a(n)) + ")";
}, ar = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(n) {
    this._objId = n;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
ar.prototype.toString = function() {
  return this.objId + " 0 R";
}, ar.prototype.putStream = function() {
  var n = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: n, objectId: this.objId }), this.scope.internal.out("endobj");
}, ar.prototype.getKeyValueListForStream = function() {
  var n = [], t = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var r in t) if (Object.getOwnPropertyDescriptor(this, t[r]).configurable === !1) {
    var a = t[r], s = this[a];
    s && (Array.isArray(s) ? n.push({ key: a, value: Uc(s, this.objId, this.scope) }) : s instanceof ar ? (s.scope = this.scope, n.push({ key: a, value: s.objId + " 0 R" })) : typeof s != "function" && n.push({ key: a, value: s }));
  }
  return n;
};
var Hc = function() {
  ar.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var n, t = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return t;
  }, set: function(r) {
    t = r;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(r) {
    n = r.trim();
  }, get: function() {
    return n || null;
  } });
};
vn(Hc, ar);
var Vc = function() {
  ar.call(this);
  var n, t = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return t.length > 0 ? t : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return t;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var r = function(a) {
        return a;
      };
      return this.scope && (r = this.scope.internal.getEncryptor(this.objId)), "(" + oi(r(n)) + ")";
    }
  }, set: function(r) {
    n = r;
  } });
};
vn(Vc, ar);
var Wn = function n() {
  ar.call(this);
  var t = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
    t = _;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(t, 3);
  }, set: function(_) {
    _ ? this.F = Et(t, 3) : this.F = Bt(t, 3);
  } });
  var r = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
    r = _;
  } });
  var a = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (a.length !== 0) return a;
  }, set: function(_) {
    a = _ !== void 0 ? _ : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[0]) ? 0 : a[0];
  }, set: function(_) {
    a[0] = _;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[1]) ? 0 : a[1];
  }, set: function(_) {
    a[1] = _;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[2]) ? 0 : a[2];
  }, set: function(_) {
    a[2] = _;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[3]) ? 0 : a[3];
  }, set: function(_) {
    a[3] = _;
  } });
  var s = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return s;
  }, set: function(_) {
    switch (_) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        s = _;
        break;
      default:
        throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof Co) return;
      o = "FieldObject" + n.FieldNum++;
    }
    var _ = function(E) {
      return E;
    };
    return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + oi(_(o)) + ")";
  }, set: function(_) {
    o = _.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return o;
  }, set: function(_) {
    o = _;
  } });
  var c = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return c;
  }, set: function(_) {
    c = _;
  } });
  var h = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return h;
  }, set: function(_) {
    h = _;
  } });
  var f = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(_) {
    f = _;
  } });
  var g = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return g === void 0 ? 50 / _l : g;
  }, set: function(_) {
    g = _;
  } });
  var b = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return b;
  }, set: function(_) {
    b = _;
  } });
  var y = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!y || this instanceof Co || this instanceof ai)) return ul(y, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), y = _;
  } });
  var N = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (N) return this instanceof Yt ? N : ul(N, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), N = this instanceof Yt ? _ : _.substr(0, 1) === "(" ? Bi(_.substr(1, _.length - 2)) : Bi(_);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Yt ? Bi(N.substr(1, N.length - 1)) : N;
  }, set: function(_) {
    _ = _.toString(), N = this instanceof Yt ? "/" + _ : _;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(_) {
    this.V = _;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof Yt ? p : ul(p, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Yt ? _ : _.substr(0, 1) === "(" ? Bi(_.substr(1, _.length - 2)) : Bi(_);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Yt ? Bi(p.substr(1, p.length - 1)) : p;
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Yt ? "/" + _ : _;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var O, I = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return I;
  }, set: function(_) {
    _ = !!_, I = _;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (O) return O;
  }, set: function(_) {
    O = _;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 1);
  }, set: function(_) {
    _ ? this.Ff = Et(this.Ff, 1) : this.Ff = Bt(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 2);
  }, set: function(_) {
    _ ? this.Ff = Et(this.Ff, 2) : this.Ff = Bt(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 3);
  }, set: function(_) {
    _ ? this.Ff = Et(this.Ff, 3) : this.Ff = Bt(this.Ff, 3);
  } });
  var F = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (F !== null) return F;
  }, set: function(_) {
    if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
    F = _;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var _;
    switch (F) {
      case 0:
      default:
        _ = "left";
        break;
      case 1:
        _ = "center";
        break;
      case 2:
        _ = "right";
    }
    return _;
  }, configurable: !0, enumerable: !0, set: function(_) {
    switch (_) {
      case "right":
      case 2:
        F = 2;
        break;
      case "center":
      case 1:
        F = 1;
        break;
      case "left":
      case 0:
      default:
        F = 0;
    }
  } });
};
vn(Wn, ar);
var zi = function() {
  Wn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var n = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } });
  var t = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Uc(t, this.objId, this.scope);
  }, set: function(r) {
    var a, s;
    s = [], typeof (a = r) == "string" && (s = function(o, c, h) {
      h || (h = 1);
      for (var f, g = []; f = c.exec(o); ) g.push(f[h]);
      return g;
    }(a, /\((.*?)\)/g)), t = s;
  } }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(r) {
    t = r, this.sort && t.sort();
  }, this.addOption = function(r) {
    r = (r = r || "").toString(), t.push(r), this.sort && t.sort();
  }, this.removeOption = function(r, a) {
    for (a = a || !1, r = (r = r || "").toString(); t.indexOf(r) !== -1 && (t.splice(t.indexOf(r), 1), a !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 18);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 18) : this.Ff = Bt(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 19);
  }, set: function(r) {
    this.combo === !0 && (r ? this.Ff = Et(this.Ff, 19) : this.Ff = Bt(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 20);
  }, set: function(r) {
    r ? (this.Ff = Et(this.Ff, 20), t.sort()) : this.Ff = Bt(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 22);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 22) : this.Ff = Bt(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 23);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 23) : this.Ff = Bt(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 27);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 27) : this.Ff = Bt(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
vn(zi, Wn);
var Ui = function() {
  zi.call(this), this.fontName = "helvetica", this.combo = !1;
};
vn(Ui, zi);
var Hi = function() {
  Ui.call(this), this.combo = !0;
};
vn(Hi, Ui);
var No = function() {
  Hi.call(this), this.edit = !0;
};
vn(No, Hi);
var Yt = function() {
  Wn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 15);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 15) : this.Ff = Bt(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 16);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 16) : this.Ff = Bt(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 17);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 17) : this.Ff = Bt(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 26);
  }, set: function(r) {
    r ? this.Ff = Et(this.Ff, 26) : this.Ff = Bt(this.Ff, 26);
  } });
  var n, t = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(o) {
      return o;
    };
    if (this.scope && (r = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
      var a, s = [];
      for (a in s.push("<<"), t) s.push("/" + a + " (" + oi(r(t[a])) + ")");
      return s.push(">>"), s.join(`
`);
    }
  }, set: function(r) {
    mt(r) === "object" && (t = r);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return t.CA || "";
  }, set: function(r) {
    typeof r == "string" && (t.CA = r);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(r) {
    n = "/" + r;
  } });
};
vn(Yt, Wn);
var Ao = function() {
  Yt.call(this), this.pushButton = !0;
};
vn(Ao, Yt);
var Vi = function() {
  Yt.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t !== void 0 ? t : [];
  } });
};
vn(Vi, Yt);
var Co = function() {
  var n, t;
  Wn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(s) {
    n = s;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return t;
  }, set: function(s) {
    t = s;
  } });
  var r, a = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var s = function(h) {
      return h;
    };
    this.scope && (s = this.scope.internal.getEncryptor(this.objId));
    var o, c = [];
    for (o in c.push("<<"), a) c.push("/" + o + " (" + oi(s(a[o])) + ")");
    return c.push(">>"), c.join(`
`);
  }, set: function(s) {
    mt(s) === "object" && (a = s);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return a.CA || "";
  }, set: function(s) {
    typeof s == "string" && (a.CA = s);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(s) {
    r = s;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(s) {
    r = "/" + s;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = ze.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
vn(Co, Wn), Vi.prototype.setAppearance = function(n) {
  if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var r = this.Kids[t];
    r.appearanceStreamContent = n.createAppearanceStream(r.optionName), r.caption = n.getCA();
  }
}, Vi.prototype.createOption = function(n) {
  var t = new Co();
  return t.Parent = this, t.optionName = n, this.Kids.push(t), A1.call(this.scope, t), t;
};
var So = function() {
  Yt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = ze.CheckBox.createAppearanceStream();
};
vn(So, Yt);
var ai = function() {
  Wn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 13);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 13) : this.Ff = Bt(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 21);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 21) : this.Ff = Bt(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 23) : this.Ff = Bt(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 24);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 24) : this.Ff = Bt(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 25);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 25) : this.Ff = Bt(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = Et(this.Ff, 26) : this.Ff = Bt(this.Ff, 26);
  } });
  var n = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(t) {
    Number.isInteger(t) && (n = t);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
vn(ai, Wn);
var _o = function() {
  ai.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Mt(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = Et(this.Ff, 14) : this.Ff = Bt(this.Ff, 14);
  } }), this.password = !0;
};
vn(_o, ai);
var ze = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: ze.CheckBox.YesNormal }, D: { On: ze.CheckBox.YesPushDown, Off: ze.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [], a = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), o = xl(n, n.caption);
  return r.push("0.749023 g"), r.push("0 0 " + et(ze.internal.getWidth(n)) + " " + et(ze.internal.getHeight(n)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + a + " " + et(o.fontSize) + " Tf " + s), r.push("BT"), r.push(o.text), r.push("ET"), r.push("Q"), r.push("EMC"), t.stream = r.join(`
`), t;
}, YesNormal: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, a = n.scope.__private__.encodeColorString(n.color), s = [], o = ze.internal.getHeight(n), c = ze.internal.getWidth(n), h = xl(n, n.caption);
  return s.push("1 g"), s.push("0 0 " + et(c) + " " + et(o) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + et(c - 1) + " " + et(o - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + r + " " + et(h.fontSize) + " Tf " + a), s.push(h.text), s.push("ET"), s.push("Q"), t.stream = s.join(`
`), t;
}, OffPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + et(ze.internal.getWidth(n)) + " " + et(ze.internal.getHeight(n)) + " re"), r.push("f"), t.stream = r.join(`
`), t;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var t = { D: { Off: ze.RadioButton.Circle.OffPushDown }, N: {} };
  return t.N[n] = ze.RadioButton.Circle.YesNormal, t.D[n] = ze.RadioButton.Circle.YesPushDown, t;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [], a = ze.internal.getWidth(n) <= ze.internal.getHeight(n) ? ze.internal.getWidth(n) / 4 : ze.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = ze.internal.Bezier_C, o = Number((a * s).toFixed(5));
  return r.push("q"), r.push("1 0 0 1 " + Er(ze.internal.getWidth(n) / 2) + " " + Er(ze.internal.getHeight(n) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), r.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), r.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), r.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
}, YesPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [], a = ze.internal.getWidth(n) <= ze.internal.getHeight(n) ? ze.internal.getWidth(n) / 4 : ze.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = Number((2 * a).toFixed(5)), o = Number((s * ze.internal.Bezier_C).toFixed(5)), c = Number((a * ze.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Er(ze.internal.getWidth(n) / 2) + " " + Er(ze.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + Er(ze.internal.getWidth(n) / 2) + " " + Er(ze.internal.getHeight(n) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + c + " " + c + " " + a + " 0 " + a + " c"), r.push("-" + c + " " + a + " -" + a + " " + c + " -" + a + " 0 c"), r.push("-" + a + " -" + c + " -" + c + " -" + a + " 0 -" + a + " c"), r.push(c + " -" + a + " " + a + " -" + c + " " + a + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
}, OffPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [], a = ze.internal.getWidth(n) <= ze.internal.getHeight(n) ? ze.internal.getWidth(n) / 4 : ze.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = Number((2 * a).toFixed(5)), o = Number((s * ze.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Er(ze.internal.getWidth(n) / 2) + " " + Er(ze.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
} }, Cross: { createAppearanceStream: function(n) {
  var t = { D: { Off: ze.RadioButton.Cross.OffPushDown }, N: {} };
  return t.N[n] = ze.RadioButton.Cross.YesNormal, t.D[n] = ze.RadioButton.Cross.YesPushDown, t;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [], a = ze.internal.calculateCross(n);
  return r.push("q"), r.push("1 1 " + et(ze.internal.getWidth(n) - 2) + " " + et(ze.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(et(a.x1.x) + " " + et(a.x1.y) + " m"), r.push(et(a.x2.x) + " " + et(a.x2.y) + " l"), r.push(et(a.x4.x) + " " + et(a.x4.y) + " m"), r.push(et(a.x3.x) + " " + et(a.x3.y) + " l"), r.push("s"), r.push("Q"), t.stream = r.join(`
`), t;
}, YesPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = ze.internal.calculateCross(n), a = [];
  return a.push("0.749023 g"), a.push("0 0 " + et(ze.internal.getWidth(n)) + " " + et(ze.internal.getHeight(n)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + et(ze.internal.getWidth(n) - 2) + " " + et(ze.internal.getHeight(n) - 2) + " re"), a.push("W"), a.push("n"), a.push(et(r.x1.x) + " " + et(r.x1.y) + " m"), a.push(et(r.x2.x) + " " + et(r.x2.y) + " l"), a.push(et(r.x4.x) + " " + et(r.x4.y) + " m"), a.push(et(r.x3.x) + " " + et(r.x3.y) + " l"), a.push("s"), a.push("Q"), t.stream = a.join(`
`), t;
}, OffPushDown: function(n) {
  var t = rr(n);
  t.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + et(ze.internal.getWidth(n)) + " " + et(ze.internal.getHeight(n)) + " re"), r.push("f"), t.stream = r.join(`
`), t;
} } }, createDefaultAppearanceStream: function(n) {
  var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color);
  return "/" + t + " " + n.fontSize + " Tf " + r;
} };
ze.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var t = ze.internal.getWidth(n), r = ze.internal.getHeight(n), a = Math.min(t, r);
  return { x1: { x: (t - a) / 2, y: (r - a) / 2 + a }, x2: { x: (t - a) / 2 + a, y: (r - a) / 2 }, x3: { x: (t - a) / 2, y: (r - a) / 2 }, x4: { x: (t - a) / 2 + a, y: (r - a) / 2 + a } };
} }, ze.internal.getWidth = function(n) {
  var t = 0;
  return mt(n) === "object" && (t = fc(n.Rect[2])), t;
}, ze.internal.getHeight = function(n) {
  var t = 0;
  return mt(n) === "object" && (t = fc(n.Rect[3])), t;
};
var A1 = Ct.addField = function(n) {
  if (N1(this, n), !(n instanceof Wn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = n).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Ct.AcroFormChoiceField = zi, Ct.AcroFormListBox = Ui, Ct.AcroFormComboBox = Hi, Ct.AcroFormEditBox = No, Ct.AcroFormButton = Yt, Ct.AcroFormPushButton = Ao, Ct.AcroFormRadioButton = Vi, Ct.AcroFormCheckBox = So, Ct.AcroFormTextField = ai, Ct.AcroFormPasswordField = _o, Ct.AcroFormAppearance = ze, Ct.AcroForm = { ChoiceField: zi, ListBox: Ui, ComboBox: Hi, EditBox: No, Button: Yt, PushButton: Ao, RadioButton: Vi, CheckBox: So, TextField: ai, PasswordField: _o, Appearance: ze }, Ye.AcroForm = { ChoiceField: zi, ListBox: Ui, ComboBox: Hi, EditBox: No, Button: Yt, PushButton: Ao, RadioButton: Vi, CheckBox: So, TextField: ai, PasswordField: _o, Appearance: ze };
Ye.AcroForm;
function Wc(n) {
  return n.reduce(function(t, r, a) {
    return t[r] = a, t;
  }, {});
}
(function(n) {
  n.__addimage__ = {};
  var t = "UNKNOWN", r = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = n.__addimage__.getImageFileTypeByImageData = function(P, k) {
    var W, z, le, oe, fe, te = t;
    if ((k = k || t) === "RGBA" || P.data !== void 0 && P.data instanceof Uint8ClampedArray && "height" in P && "width" in P) return "RGBA";
    if (Le(P)) for (fe in r) for (le = r[fe], W = 0; W < le.length; W += 1) {
      for (oe = !0, z = 0; z < le[W].length; z += 1) if (le[W][z] !== void 0 && le[W][z] !== P[z]) {
        oe = !1;
        break;
      }
      if (oe === !0) {
        te = fe;
        break;
      }
    }
    else for (fe in r) for (le = r[fe], W = 0; W < le.length; W += 1) {
      for (oe = !0, z = 0; z < le[W].length; z += 1) if (le[W][z] !== void 0 && le[W][z] !== P.charCodeAt(z)) {
        oe = !1;
        break;
      }
      if (oe === !0) {
        te = fe;
        break;
      }
    }
    return te === t && k !== t && (te = k), te;
  }, s = function P(k) {
    for (var W = this.internal.write, z = this.internal.putStream, le = (0, this.internal.getFilters)(); le.indexOf("FlateEncode") !== -1; ) le.splice(le.indexOf("FlateEncode"), 1);
    k.objectId = this.internal.newObject();
    var oe = [];
    if (oe.push({ key: "Type", value: "/XObject" }), oe.push({ key: "Subtype", value: "/Image" }), oe.push({ key: "Width", value: k.width }), oe.push({ key: "Height", value: k.height }), k.colorSpace === F.INDEXED ? oe.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (k.palette.length / 3 - 1) + " " + ("sMask" in k && k.sMask !== void 0 ? k.objectId + 2 : k.objectId + 1) + " 0 R]" }) : (oe.push({ key: "ColorSpace", value: "/" + k.colorSpace }), k.colorSpace === F.DEVICE_CMYK && oe.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), oe.push({ key: "BitsPerComponent", value: k.bitsPerComponent }), "decodeParameters" in k && k.decodeParameters !== void 0 && oe.push({ key: "DecodeParms", value: "<<" + k.decodeParameters + ">>" }), "transparency" in k && Array.isArray(k.transparency)) {
      for (var fe = "", te = 0, $ = k.transparency.length; te < $; te++) fe += k.transparency[te] + " " + k.transparency[te] + " ";
      oe.push({ key: "Mask", value: "[" + fe + "]" });
    }
    k.sMask !== void 0 && oe.push({ key: "SMask", value: k.objectId + 1 + " 0 R" });
    var D = k.filter !== void 0 ? ["/" + k.filter] : void 0;
    if (z({ data: k.data, additionalKeyValues: oe, alreadyAppliedFilters: D, objectId: k.objectId }), W("endobj"), "sMask" in k && k.sMask !== void 0) {
      var be = "/Predictor " + k.predictor + " /Colors 1 /BitsPerComponent " + k.bitsPerComponent + " /Columns " + k.width, w = { width: k.width, height: k.height, colorSpace: "DeviceGray", bitsPerComponent: k.bitsPerComponent, decodeParameters: be, data: k.sMask };
      "filter" in k && (w.filter = k.filter), P.call(this, w);
    }
    if (k.colorSpace === F.INDEXED) {
      var j = this.internal.newObject();
      z({ data: H(new Uint8Array(k.palette)), objectId: j }), W("endobj");
    }
  }, o = function() {
    var P = this.internal.collections.addImage_images;
    for (var k in P) s.call(this, P[k]);
  }, c = function() {
    var P, k = this.internal.collections.addImage_images, W = this.internal.write;
    for (var z in k) W("/I" + (P = k[z]).index, P.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", c));
  }, f = function() {
    var P = this.internal.collections.addImage_images;
    return h.call(this), P;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, b = function(P) {
    return typeof n["process" + P.toUpperCase()] == "function";
  }, y = function(P) {
    return mt(P) === "object" && P.nodeType === 1;
  }, N = function(P, k) {
    if (P.nodeName === "IMG" && P.hasAttribute("src")) {
      var W = "" + P.getAttribute("src");
      if (W.indexOf("data:image/") === 0) return Sa(unescape(W).split("base64,").pop());
      var z = n.loadFile(W, !0);
      if (z !== void 0) return z;
    }
    if (P.nodeName === "CANVAS") {
      if (P.width === 0 || P.height === 0) throw new Error("Given canvas must have data. Canvas width: " + P.width + ", height: " + P.height);
      var le;
      switch (k) {
        case "PNG":
          le = "image/png";
          break;
        case "WEBP":
          le = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          le = "image/jpeg";
      }
      return Sa(P.toDataURL(le, 1).split("base64,").pop());
    }
  }, p = function(P) {
    var k = this.internal.collections.addImage_images;
    if (k) {
      for (var W in k) if (P === k[W].alias) return k[W];
    }
  }, O = function(P, k, W) {
    return P || k || (P = -96, k = -96), P < 0 && (P = -1 * W.width * 72 / P / this.internal.scaleFactor), k < 0 && (k = -1 * W.height * 72 / k / this.internal.scaleFactor), P === 0 && (P = k * W.width / W.height), k === 0 && (k = P * W.height / W.width), [P, k];
  }, I = function(P, k, W, z, le, oe) {
    var fe = O.call(this, W, z, le), te = this.internal.getCoordinateString, $ = this.internal.getVerticalCoordinateString, D = f.call(this);
    if (W = fe[0], z = fe[1], D[le.index] = le, oe) {
      oe *= Math.PI / 180;
      var be = Math.cos(oe), w = Math.sin(oe), j = function(U) {
        return U.toFixed(4);
      }, B = [j(be), j(w), j(-1 * w), j(be), 0, 0, "cm"];
    }
    this.internal.write("q"), oe ? (this.internal.write([1, "0", "0", 1, te(P), $(k + z), "cm"].join(" ")), this.internal.write(B.join(" ")), this.internal.write([te(W), "0", "0", te(z), "0", "0", "cm"].join(" "))) : this.internal.write([te(W), "0", "0", te(z), te(P), $(k + z), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + le.index + " Do"), this.internal.write("Q");
  }, F = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var _ = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, E = n.__addimage__.sHashCode = function(P) {
    var k, W, z = 0;
    if (typeof P == "string") for (W = P.length, k = 0; k < W; k++) z = (z << 5) - z + P.charCodeAt(k), z |= 0;
    else if (Le(P)) for (W = P.byteLength / 2, k = 0; k < W; k++) z = (z << 5) - z + P[k], z |= 0;
    return z;
  }, Z = n.__addimage__.validateStringAsBase64 = function(P) {
    (P = P || "").toString().trim();
    var k = !0;
    return P.length === 0 && (k = !1), P.length % 4 != 0 && (k = !1), /^[A-Za-z0-9+/]+$/.test(P.substr(0, P.length - 2)) === !1 && (k = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(P.substr(-2)) === !1 && (k = !1), k;
  }, se = n.__addimage__.extractImageFromDataUrl = function(P) {
    if (P == null || !(P = P.trim()).startsWith("data:")) return null;
    var k = P.indexOf(",");
    return k < 0 ? null : P.substring(0, k).trim().endsWith("base64") ? P.substring(k + 1) : null;
  }, he = n.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  n.__addimage__.isArrayBuffer = function(P) {
    return he() && P instanceof ArrayBuffer;
  };
  var Le = n.__addimage__.isArrayBufferView = function(P) {
    return he() && typeof Uint32Array < "u" && (P instanceof Int8Array || P instanceof Uint8Array || typeof Uint8ClampedArray < "u" && P instanceof Uint8ClampedArray || P instanceof Int16Array || P instanceof Uint16Array || P instanceof Int32Array || P instanceof Uint32Array || P instanceof Float32Array || P instanceof Float64Array);
  }, ie = n.__addimage__.binaryStringToUint8Array = function(P) {
    for (var k = P.length, W = new Uint8Array(k), z = 0; z < k; z++) W[z] = P.charCodeAt(z);
    return W;
  }, H = n.__addimage__.arrayBufferToBinaryString = function(P) {
    for (var k = "", W = Le(P) ? P : new Uint8Array(P), z = 0; z < W.length; z += 8192) k += String.fromCharCode.apply(null, W.subarray(z, z + 8192));
    return k;
  };
  n.addImage = function() {
    var P, k, W, z, le, oe, fe, te, $;
    if (typeof arguments[1] == "number" ? (k = t, W = arguments[1], z = arguments[2], le = arguments[3], oe = arguments[4], fe = arguments[5], te = arguments[6], $ = arguments[7]) : (k = arguments[1], W = arguments[2], z = arguments[3], le = arguments[4], oe = arguments[5], fe = arguments[6], te = arguments[7], $ = arguments[8]), mt(P = arguments[0]) === "object" && !y(P) && "imageData" in P) {
      var D = P;
      P = D.imageData, k = D.format || k || t, W = D.x || W || 0, z = D.y || z || 0, le = D.w || D.width || le, oe = D.h || D.height || oe, fe = D.alias || fe, te = D.compression || te, $ = D.rotation || D.angle || $;
    }
    var be = this.internal.getFilters();
    if (te === void 0 && be.indexOf("FlateEncode") !== -1 && (te = "SLOW"), isNaN(W) || isNaN(z)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var w = ae.call(this, P, k, fe, te);
    return I.call(this, W, z, le, oe, w, $), this;
  };
  var ae = function(P, k, W, z) {
    var le, oe, fe;
    if (typeof P == "string" && a(P) === t) {
      P = unescape(P);
      var te = de(P, !1);
      (te !== "" || (te = n.loadFile(P, !0)) !== void 0) && (P = te);
    }
    if (y(P) && (P = N(P, k)), k = a(P, k), !b(k)) throw new Error("addImage does not support files of type '" + k + "', please ensure that a plugin for '" + k + "' support is added.");
    if (((fe = W) == null || fe.length === 0) && (W = function($) {
      return typeof $ == "string" || Le($) ? E($) : Le($.data) ? E($.data) : null;
    }(P)), (le = p.call(this, W)) || (he() && (P instanceof Uint8Array || k === "RGBA" || (oe = P, P = ie(P))), le = this["process" + k.toUpperCase()](P, g.call(this), W, function($) {
      return $ && typeof $ == "string" && ($ = $.toUpperCase()), $ in n.image_compression ? $ : _.NONE;
    }(z), oe)), !le) throw new Error("An unknown error occurred whilst processing the image.");
    return le;
  }, de = n.__addimage__.convertBase64ToBinaryString = function(P, k) {
    k = typeof k != "boolean" || k;
    var W, z = "";
    if (typeof P == "string") {
      var le;
      W = (le = se(P)) !== null && le !== void 0 ? le : P;
      try {
        z = Sa(W);
      } catch (oe) {
        if (k) throw Z(W) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + oe.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return z;
  };
  n.getImageProperties = function(P) {
    var k, W, z = "";
    if (y(P) && (P = N(P)), typeof P == "string" && a(P) === t && ((z = de(P, !1)) === "" && (z = n.loadFile(P) || ""), P = z), W = a(P), !b(W)) throw new Error("addImage does not support files of type '" + W + "', please ensure that a plugin for '" + W + "' support is added.");
    if (!he() || P instanceof Uint8Array || (P = ie(P)), !(k = this["process" + W.toUpperCase()](P))) throw new Error("An unknown error occurred whilst processing the image");
    return k.fileType = W, k;
  };
})(Ye.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(r) {
    if (r !== void 0 && r != "") return !0;
  };
  Ye.API.events.push(["addPage", function(r) {
    this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(r) {
    for (var a, s, o, c = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(r.objId), g = r.pageContext.annotations, b = !1, y = 0; y < g.length && !b; y++) switch ((a = g[y]).type) {
      case "link":
        (t(a.options.url) || t(a.options.pageNumber)) && (b = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        b = !0;
    }
    if (b != 0) {
      this.internal.write("/Annots [");
      for (var N = 0; N < g.length; N++) {
        a = g[N];
        var p = this.internal.pdfEscape, O = this.internal.getEncryptor(r.objId);
        switch (a.type) {
          case "reference":
            this.internal.write(" " + a.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), F = this.internal.newAdditionalObject(), _ = this.internal.getEncryptor(I.objId), E = a.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + c(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + c(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + p(_(a.contents)) + ")", o += " /Popup " + F.objId + " 0 R", o += " /P " + f.objId + " 0 R", o += " /T (" + p(_(E)) + ") >>", I.content = o;
            var Z = I.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + c(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + c(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + Z, a.open && (o += " /Open true"), o += " >>", F.content = o, this.internal.write(I.objId, "0 R", F.objId, "0 R");
            break;
          case "freetext":
            s = "/Rect [" + c(a.bounds.x) + " " + h(a.bounds.y) + " " + c(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
            var se = a.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(O(a.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + se + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (a.options.name) {
              var he = this.annotations._nameMap[a.options.name];
              a.options.pageNumber = he.page, a.options.top = he.y;
            } else a.options.top || (a.options.top = 0);
            if (s = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", o = "", a.options.url) o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(O(a.options.url)) + ") >>";
            else if (a.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + a.options.top + "]";
                  break;
                case "FitV":
                  a.options.left = a.options.left || 0, o += " /FitV " + a.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var Le = h(a.options.top);
                  a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), o += " /XYZ " + a.options.left + " " + Le + " " + a.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), n.createAnnotation = function(r) {
    var a = this.internal.getCurrentPageInfo();
    switch (r.type) {
      case "link":
        this.link(r.bounds.x, r.bounds.y, r.bounds.w, r.bounds.h, r);
        break;
      case "text":
      case "freetext":
        a.pageContext.annotations.push(r);
    }
  }, n.link = function(r, a, s, o, c) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(r), y: g(a), w: f(r + s), h: g(a + o) }, options: c, type: "link" });
  }, n.textWithLink = function(r, a, s, o) {
    var c, h, f = this.getTextWidth(r), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var b = this.splitTextToSize(r, h).length;
      c = Math.ceil(g * b);
    } else h = f, c = g;
    return this.text(r, a, s, o), s += 0.2 * g, o.align === "center" && (a -= f / 2), o.align === "right" && (a -= f), this.link(a, s - g, h, c, o), f;
  }, n.getTextWidth = function(r) {
    var a = this.internal.getFontSize();
    return this.getStringUnitWidth(r) * a / this.internal.scaleFactor;
  };
}(Ye.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, s = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var o = n.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return t[I.charCodeAt(0)] !== void 0;
  }, c = n.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = n.__arabicParser__.isArabicEndLetter = function(I) {
    return c(I) && o(I) && t[I.charCodeAt(0)].length <= 2;
  }, f = n.__arabicParser__.isArabicAlfLetter = function(I) {
    return c(I) && s.indexOf(I.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return c(I) && o(I) && t[I.charCodeAt(0)].length >= 1;
  };
  var g = n.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return c(I) && o(I) && t[I.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return c(I) && o(I) && t[I.charCodeAt(0)].length >= 3;
  };
  var b = n.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return c(I) && o(I) && t[I.charCodeAt(0)].length == 4;
  }, y = n.__arabicParser__.resolveLigatures = function(I) {
    var F = 0, _ = r, E = "", Z = 0;
    for (F = 0; F < I.length; F += 1) _[I.charCodeAt(F)] !== void 0 ? (Z++, typeof (_ = _[I.charCodeAt(F)]) == "number" && (E += String.fromCharCode(_), _ = r, Z = 0), F === I.length - 1 && (_ = r, E += I.charAt(F - (Z - 1)), F -= Z - 1, Z = 0)) : (_ = r, E += I.charAt(F - Z), F -= Z, Z = 0);
    return E;
  };
  n.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && a[I.charCodeAt(0)] !== void 0;
  };
  var N = n.__arabicParser__.getCorrectForm = function(I, F, _) {
    return c(I) ? o(I) === !1 ? -1 : !g(I) || !c(F) && !c(_) || !c(_) && h(F) || h(I) && !c(F) || h(I) && f(F) || h(I) && h(F) ? 0 : b(I) && c(F) && !h(F) && c(_) && g(_) ? 3 : h(I) || !c(_) ? 1 : 2 : -1;
  }, p = function(I) {
    var F = 0, _ = 0, E = 0, Z = "", se = "", he = "", Le = (I = I || "").split("\\s+"), ie = [];
    for (F = 0; F < Le.length; F += 1) {
      for (ie.push(""), _ = 0; _ < Le[F].length; _ += 1) Z = Le[F][_], se = Le[F][_ - 1], he = Le[F][_ + 1], c(Z) ? (E = N(Z, se, he), ie[F] += E !== -1 ? String.fromCharCode(t[Z.charCodeAt(0)][E]) : Z) : ie[F] += Z;
      ie[F] = y(ie[F]);
    }
    return ie.join(" ");
  }, O = n.__arabicParser__.processArabic = n.processArabic = function() {
    var I, F = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, _ = [];
    if (Array.isArray(F)) {
      var E = 0;
      for (_ = [], E = 0; E < F.length; E += 1) Array.isArray(F[E]) ? _.push([p(F[E][0]), F[E][1], F[E][2]]) : _.push([p(F[E])]);
      I = _;
    } else I = p(F);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  n.events.push(["preProcessText", O]);
}(Ye.API), Ye.API.autoPrint = function(n) {
  var t;
  switch ((n = n || {}).variant = n.variant || "non-conform", n.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + t + " 0 R");
      });
  }
  return this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function() {
    var r = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return r;
    }, set: function(h) {
      r = h;
    } });
    var a = 150;
    Object.defineProperty(this, "width", { get: function() {
      return a;
    }, set: function(h) {
      a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1);
    } });
    var s = 300;
    Object.defineProperty(this, "height", { get: function() {
      return s;
    }, set: function(h) {
      s = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1);
    } });
    var o = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return o;
    }, set: function(h) {
      o = h;
    } });
    var c = {};
    Object.defineProperty(this, "style", { get: function() {
      return c;
    }, set: function(h) {
      c = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(r, a) {
    var s;
    if ((r = r || "2d") !== "2d") return null;
    for (s in a) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = a[s]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
}(Ye.API), function(n) {
  var t = { left: 0, top: 0, bottom: 0, right: 0 }, r = !1, a = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
  }, s = function() {
    this.internal.__cell__.lastCell = new o(), this.internal.__cell__.pages = 1;
  }, o = function() {
    var f = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return f;
    }, set: function(I) {
      f = I;
    } });
    var g = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return g;
    }, set: function(I) {
      g = I;
    } });
    var b = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return b;
    }, set: function(I) {
      b = I;
    } });
    var y = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return y;
    }, set: function(I) {
      y = I;
    } });
    var N = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return N;
    }, set: function(I) {
      N = I;
    } });
    var p = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return p;
    }, set: function(I) {
      p = I;
    } });
    var O = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return O;
    }, set: function(I) {
      O = I;
    } }), this;
  };
  o.prototype.clone = function() {
    return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(f) {
    return a.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, n.getTextDimensions = function(f, g) {
    a.call(this);
    var b = (g = g || {}).fontSize || this.getFontSize(), y = g.font || this.getFont(), N = g.scaleFactor || this.internal.scaleFactor, p = 0, O = 0, I = 0, F = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var _ = g.maxWidth;
    _ > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, _) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(Z, se) {
      return Z.concat(F.splitTextToSize(se, _));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var E = 0; E < f.length; E++) p < (I = this.getStringUnitWidth(f[E], { font: y }) * b) && (p = I);
    return p !== 0 && (O = f.length), { w: p /= N, h: Math.max((O * b * this.getLineHeightFactor() - b * (this.getLineHeightFactor() - 1)) / N, 0) };
  }, n.cellAddPage = function() {
    a.call(this), this.addPage();
    var f = this.internal.__cell__.margins || t;
    return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var c = n.cell = function() {
    var f;
    f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
    var g = this.internal.__cell__.lastCell, b = this.internal.__cell__.padding, y = this.internal.__cell__.margins || t, N = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + y.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = y.top, p && N && (this.printHeaderRow(f.lineNumber, !0), f.y += N[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, r === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - b, f.y + b, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + b, { align: "center", baseline: "top", maxWidth: f.width - b - b }) : this.text(f.text, f.x + b, f.y + b, { align: "left", baseline: "top", maxWidth: f.width - b - b })), this.internal.__cell__.lastCell = f, this;
  };
  n.table = function(f, g, b, y, N) {
    if (a.call(this), !b) throw new Error("No data for PDF table.");
    var p, O, I, F, _ = [], E = [], Z = [], se = {}, he = {}, Le = [], ie = [], H = (N = N || {}).autoSize || !1, ae = N.printHeaders !== !1, de = N.css && N.css["font-size"] !== void 0 ? 16 * N.css["font-size"] : N.fontSize || 12, P = N.margins || Object.assign({ width: this.getPageWidth() }, t), k = typeof N.padding == "number" ? N.padding : 3, W = N.headerBackgroundColor || "#c8c8c8", z = N.headerTextColor || "#000";
    if (s.call(this), this.internal.__cell__.printHeaders = ae, this.internal.__cell__.margins = P, this.internal.__cell__.table_font_size = de, this.internal.__cell__.padding = k, this.internal.__cell__.headerBackgroundColor = W, this.internal.__cell__.headerTextColor = z, this.setFontSize(de), y == null) E = _ = Object.keys(b[0]), Z = _.map(function() {
      return "left";
    });
    else if (Array.isArray(y) && mt(y[0]) === "object") for (_ = y.map(function(D) {
      return D.name;
    }), E = y.map(function(D) {
      return D.prompt || D.name || "";
    }), Z = y.map(function(D) {
      return D.align || "left";
    }), p = 0; p < y.length; p += 1) he[y[p].name] = y[p].width * (19.049976 / 25.4);
    else Array.isArray(y) && typeof y[0] == "string" && (E = _ = y, Z = _.map(function() {
      return "left";
    }));
    if (H || Array.isArray(y) && typeof y[0] == "string") for (p = 0; p < _.length; p += 1) {
      for (se[F = _[p]] = b.map(function(D) {
        return D[F];
      }), this.setFont(void 0, "bold"), Le.push(this.getTextDimensions(E[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), O = se[F], this.setFont(void 0, "normal"), I = 0; I < O.length; I += 1) Le.push(this.getTextDimensions(O[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      he[F] = Math.max.apply(null, Le) + k + k, Le = [];
    }
    if (ae) {
      var le = {};
      for (p = 0; p < _.length; p += 1) le[_[p]] = {}, le[_[p]].text = E[p], le[_[p]].align = Z[p];
      var oe = h.call(this, le, he);
      ie = _.map(function(D) {
        return new o(f, g, he[D], oe, le[D].text, void 0, le[D].align);
      }), this.setTableHeaderRow(ie), this.printHeaderRow(1, !1);
    }
    var fe = y.reduce(function(D, be) {
      return D[be.name] = be.align, D;
    }, {});
    for (p = 0; p < b.length; p += 1) {
      "rowStart" in N && N.rowStart instanceof Function && N.rowStart({ row: p, data: b[p] }, this);
      var te = h.call(this, b[p], he);
      for (I = 0; I < _.length; I += 1) {
        var $ = b[p][_[I]];
        "cellStart" in N && N.cellStart instanceof Function && N.cellStart({ row: p, col: I, data: $ }, this), c.call(this, new o(f, g, he[_[I]], te, $, p + 2, fe[_[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var b = this.internal.__cell__.padding, y = this.internal.__cell__.table_font_size, N = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var O = f[p];
      return this.splitTextToSize(O.hasOwnProperty("text") ? O.text : O, g[p] - b - b);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * y / N + b + b;
    }, this).reduce(function(p, O) {
      return Math.max(p, O);
    }, 0);
  };
  n.setTableHeaderRow = function(f) {
    a.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, n.printHeaderRow = function(f, g) {
    if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var b;
    if (r = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var y = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(y[0], y[1], y[2], y[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var N = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      b = this.internal.__cell__.tableHeaderRow[p].clone(), g && (b.y = this.internal.__cell__.margins.top || 0, N.push(b)), b.lineNumber = f;
      var O = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), c.call(this, b), this.setTextColor(O);
    }
    N.length > 0 && this.setTableHeaderRow(N), this.setFont(void 0, "normal"), r = !1;
  };
}(Ye.API);
var Gc = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Yc = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Ll = Wc(Yc), Jc = [100, 200, 300, 400, 500, 600, 700, 800, 900], S1 = Wc(Jc);
function Nl(n) {
  var t = n.family.replace(/"|'/g, "").toLowerCase(), r = function(o) {
    return Gc[o = o || "normal"] ? o : "normal";
  }(n.style), a = function(o) {
    if (!o) return 400;
    if (typeof o == "number") return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400;
    if (/^\d00$/.test(o)) return parseInt(o);
    switch (o) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(n.weight), s = function(o) {
    return typeof Ll[o = o || "normal"] == "number" ? o : "normal";
  }(n.stretch);
  return { family: t, style: r, weight: a, stretch: s, src: n.src || [], ref: n.ref || { name: t, style: [s, r, a].join(" ") } };
}
function dc(n, t, r, a) {
  var s;
  for (s = r; s >= 0 && s < t.length; s += a) if (n[t[s]]) return n[t[s]];
  for (s = r; s >= 0 && s < t.length; s -= a) if (n[t[s]]) return n[t[s]];
}
var _1 = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, pc = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function gc(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function P1(n, t, r) {
  for (var a = (r = r || {}).defaultFontFamily || "times", s = Object.assign({}, _1, r.genericFontFamilies || {}), o = null, c = null, h = 0; h < t.length; ++h) if (s[(o = Nl(t[h])).family] && (o.family = s[o.family]), n.hasOwnProperty(o.family)) {
    c = n[o.family];
    break;
  }
  if (!(c = c || n[a])) throw new Error("Could not find a font-family for the rule '" + gc(o) + "' and default family '" + a + "'.");
  if (c = function(f, g) {
    if (g[f]) return g[f];
    var b = Ll[f], y = b <= Ll.normal ? -1 : 1, N = dc(g, Yc, b, y);
    if (!N) throw new Error("Could not find a matching font-stretch value for " + f);
    return N;
  }(o.stretch, c), c = function(f, g) {
    if (g[f]) return g[f];
    for (var b = Gc[f], y = 0; y < b.length; ++y) if (g[b[y]]) return g[b[y]];
    throw new Error("Could not find a matching font-style for " + f);
  }(o.style, c), !(c = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var b = S1[f], y = dc(g, Jc, b, f < 400 ? -1 : 1);
    if (!y) throw new Error("Could not find a matching font-weight for value " + f);
    return y;
  }(o.weight, c))) throw new Error("Failed to resolve a font for the rule '" + gc(o) + "'.");
  return c;
}
function mc(n) {
  return n.trimLeft();
}
function I1(n, t) {
  for (var r = 0; r < n.length; ) {
    if (n.charAt(r) === t) return [n.substring(0, r), n.substring(r + 1)];
    r += 1;
  }
  return null;
}
function k1(n) {
  var t = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], n.substring(t[0].length)];
}
var xo, vc, bc, hl = ["times"];
(function(n) {
  var t, r, a, s, o, c, h, f, g, b = function(w) {
    return w = w || {}, this.isStrokeTransparent = w.isStrokeTransparent || !1, this.strokeOpacity = w.strokeOpacity || 1, this.strokeStyle = w.strokeStyle || "#000000", this.fillStyle = w.fillStyle || "#000000", this.isFillTransparent = w.isFillTransparent || !1, this.fillOpacity = w.fillOpacity || 1, this.font = w.font || "10px sans-serif", this.textBaseline = w.textBaseline || "alphabetic", this.textAlign = w.textAlign || "left", this.lineWidth = w.lineWidth || 1, this.lineJoin = w.lineJoin || "miter", this.lineCap = w.lineCap || "butt", this.path = w.path || [], this.transform = w.transform !== void 0 ? w.transform.clone() : new f(), this.globalCompositeOperation = w.globalCompositeOperation || "normal", this.globalAlpha = w.globalAlpha || 1, this.clip_path = w.clip_path || [], this.currentPoint = w.currentPoint || new c(), this.miterLimit = w.miterLimit || 10, this.lastPoint = w.lastPoint || new c(), this.lineDashOffset = w.lineDashOffset || 0, this.lineDash = w.lineDash || [], this.margin = w.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = w.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof w.ignoreClearRect != "boolean" || w.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new y(this), t = this.internal.f2, r = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, c = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new b();
  }]);
  var y = function(w) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var j = w;
    Object.defineProperty(this, "pdf", { get: function() {
      return j;
    } });
    var B = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return B;
    }, set: function(ge) {
      B = !!ge;
    } });
    var U = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return U;
    }, set: function(ge) {
      U = !!ge;
    } });
    var q = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return q;
    }, set: function(ge) {
      isNaN(ge) || (q = ge);
    } });
    var J = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return J;
    }, set: function(ge) {
      isNaN(ge) || (J = ge);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(ge) {
      var R;
      typeof ge == "number" ? R = [ge, ge, ge, ge] : ((R = new Array(4))[0] = ge[0], R[1] = ge.length >= 2 ? ge[1] : R[0], R[2] = ge.length >= 3 ? ge[2] : R[0], R[3] = ge.length >= 4 ? ge[3] : R[1]), g.margin = R;
    } });
    var X = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return X;
    }, set: function(ge) {
      X = ge;
    } });
    var T = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return T;
    }, set: function(ge) {
      T = ge;
    } });
    var Ne = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return Ne;
    }, set: function(ge) {
      Ne = ge;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(ge) {
      ge instanceof b && (g = ge);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(ge) {
      g.path = ge;
    } });
    var we = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return we;
    }, set: function(ge) {
      we = ge;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(ge) {
      var R;
      R = N(ge), this.ctx.fillStyle = R.style, this.ctx.isFillTransparent = R.a === 0, this.ctx.fillOpacity = R.a, this.pdf.setFillColor(R.r, R.g, R.b, { a: R.a }), this.pdf.setTextColor(R.r, R.g, R.b, { a: R.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(ge) {
      var R = N(ge);
      this.ctx.strokeStyle = R.style, this.ctx.isStrokeTransparent = R.a === 0, this.ctx.strokeOpacity = R.a, R.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (R.a, this.pdf.setDrawColor(R.r, R.g, R.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(ge) {
      ["butt", "round", "square"].indexOf(ge) !== -1 && (this.ctx.lineCap = ge, this.pdf.setLineCap(ge));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(ge) {
      isNaN(ge) || (this.ctx.lineWidth = ge, this.pdf.setLineWidth(ge));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(ge) {
      ["bevel", "round", "miter"].indexOf(ge) !== -1 && (this.ctx.lineJoin = ge, this.pdf.setLineJoin(ge));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(ge) {
      isNaN(ge) || (this.ctx.miterLimit = ge, this.pdf.setMiterLimit(ge));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(ge) {
      this.ctx.textBaseline = ge;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(ge) {
      ["right", "end", "center", "left", "start"].indexOf(ge) !== -1 && (this.ctx.textAlign = ge);
    } });
    var ue = null;
    function Ie(ge, R) {
      if (ue === null) {
        var Xe = function(qe) {
          var _e = [];
          return Object.keys(qe).forEach(function(je) {
            qe[je].forEach(function(Be) {
              var Oe = null;
              switch (Be) {
                case "bold":
                  Oe = { family: je, weight: "bold" };
                  break;
                case "italic":
                  Oe = { family: je, style: "italic" };
                  break;
                case "bolditalic":
                  Oe = { family: je, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Oe = { family: je };
              }
              Oe !== null && (Oe.ref = { name: je, style: Be }, _e.push(Oe));
            });
          }), _e;
        }(ge.getFontList());
        ue = function(qe) {
          for (var _e = {}, je = 0; je < qe.length; ++je) {
            var Be = Nl(qe[je]), Oe = Be.family, He = Be.stretch, $e = Be.style, nt = Be.weight;
            _e[Oe] = _e[Oe] || {}, _e[Oe][He] = _e[Oe][He] || {}, _e[Oe][He][$e] = _e[Oe][He][$e] || {}, _e[Oe][He][$e][nt] = Be;
          }
          return _e;
        }(Xe.concat(R));
      }
      return ue;
    }
    var Ue = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Ue;
    }, set: function(ge) {
      ue = null, Ue = ge;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(ge) {
      var R;
      if (this.ctx.font = ge, (R = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ge)) !== null) {
        var Xe = R[1];
        R[2];
        var qe = R[3], _e = R[4];
        R[5];
        var je = R[6], Be = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(_e)[2];
        _e = Math.floor(Be === "px" ? parseFloat(_e) * this.pdf.internal.scaleFactor : Be === "em" ? parseFloat(_e) * this.pdf.getFontSize() : parseFloat(_e) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(_e);
        var Oe = function(De) {
          var Me, Ce, Tt = [], at = De.trim();
          if (at === "") return hl;
          if (at in pc) return [pc[at]];
          for (; at !== ""; ) {
            switch (Ce = null, Me = (at = mc(at)).charAt(0)) {
              case '"':
              case "'":
                Ce = I1(at.substring(1), Me);
                break;
              default:
                Ce = k1(at);
            }
            if (Ce === null || (Tt.push(Ce[0]), (at = mc(Ce[1])) !== "" && at.charAt(0) !== ",")) return hl;
            at = at.replace(/^,/, "");
          }
          return Tt;
        }(je);
        if (this.fontFaces) {
          var He = P1(Ie(this.pdf, this.fontFaces), Oe.map(function(De) {
            return { family: De, stretch: "normal", weight: qe, style: Xe };
          }));
          this.pdf.setFont(He.ref.name, He.ref.style);
        } else {
          var $e = "";
          (qe === "bold" || parseInt(qe, 10) >= 700 || Xe === "bold") && ($e = "bold"), Xe === "italic" && ($e += "italic"), $e.length === 0 && ($e = "normal");
          for (var nt = "", it = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ke = 0; ke < Oe.length; ke++) {
            if (this.pdf.internal.getFont(Oe[ke], $e, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              nt = Oe[ke];
              break;
            }
            if ($e === "bolditalic" && this.pdf.internal.getFont(Oe[ke], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) nt = Oe[ke], $e = "bold";
            else if (this.pdf.internal.getFont(Oe[ke], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              nt = Oe[ke], $e = "normal";
              break;
            }
          }
          if (nt === "") {
            for (var Pe = 0; Pe < Oe.length; Pe++) if (it[Oe[Pe]]) {
              nt = it[Oe[Pe]];
              break;
            }
          }
          nt = nt === "" ? "Times" : nt, this.pdf.setFont(nt, $e);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(ge) {
      this.ctx.globalCompositeOperation = ge;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(ge) {
      this.ctx.globalAlpha = ge;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(ge) {
      this.ctx.lineDashOffset = ge, be.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(ge) {
      this.ctx.lineDash = ge, be.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(ge) {
      this.ctx.ignoreClearRect = !!ge;
    } });
  };
  y.prototype.setLineDash = function(w) {
    this.lineDash = w;
  }, y.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, y.prototype.fill = function() {
    se.call(this, "fill", !1);
  }, y.prototype.stroke = function() {
    se.call(this, "stroke", !1);
  }, y.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, y.prototype.moveTo = function(w, j) {
    if (isNaN(w) || isNaN(j)) throw wt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var B = this.ctx.transform.applyToPoint(new c(w, j));
    this.path.push({ type: "mt", x: B.x, y: B.y }), this.ctx.lastPoint = new c(w, j);
  }, y.prototype.closePath = function() {
    var w = new c(0, 0), j = 0;
    for (j = this.path.length - 1; j !== -1; j--) if (this.path[j].type === "begin" && mt(this.path[j + 1]) === "object" && typeof this.path[j + 1].x == "number") {
      w = new c(this.path[j + 1].x, this.path[j + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new c(w.x, w.y);
  }, y.prototype.lineTo = function(w, j) {
    if (isNaN(w) || isNaN(j)) throw wt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var B = this.ctx.transform.applyToPoint(new c(w, j));
    this.path.push({ type: "lt", x: B.x, y: B.y }), this.ctx.lastPoint = new c(B.x, B.y);
  }, y.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), se.call(this, null, !0);
  }, y.prototype.quadraticCurveTo = function(w, j, B, U) {
    if (isNaN(B) || isNaN(U) || isNaN(w) || isNaN(j)) throw wt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var q = this.ctx.transform.applyToPoint(new c(B, U)), J = this.ctx.transform.applyToPoint(new c(w, j));
    this.path.push({ type: "qct", x1: J.x, y1: J.y, x: q.x, y: q.y }), this.ctx.lastPoint = new c(q.x, q.y);
  }, y.prototype.bezierCurveTo = function(w, j, B, U, q, J) {
    if (isNaN(q) || isNaN(J) || isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U)) throw wt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var X = this.ctx.transform.applyToPoint(new c(q, J)), T = this.ctx.transform.applyToPoint(new c(w, j)), Ne = this.ctx.transform.applyToPoint(new c(B, U));
    this.path.push({ type: "bct", x1: T.x, y1: T.y, x2: Ne.x, y2: Ne.y, x: X.x, y: X.y }), this.ctx.lastPoint = new c(X.x, X.y);
  }, y.prototype.arc = function(w, j, B, U, q, J) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U) || isNaN(q)) throw wt.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (J = !!J, !this.ctx.transform.isIdentity) {
      var X = this.ctx.transform.applyToPoint(new c(w, j));
      w = X.x, j = X.y;
      var T = this.ctx.transform.applyToPoint(new c(0, B)), Ne = this.ctx.transform.applyToPoint(new c(0, 0));
      B = Math.sqrt(Math.pow(T.x - Ne.x, 2) + Math.pow(T.y - Ne.y, 2));
    }
    Math.abs(q - U) >= 2 * Math.PI && (U = 0, q = 2 * Math.PI), this.path.push({ type: "arc", x: w, y: j, radius: B, startAngle: U, endAngle: q, counterclockwise: J });
  }, y.prototype.arcTo = function(w, j, B, U, q) {
    throw new Error("arcTo not implemented.");
  }, y.prototype.rect = function(w, j, B, U) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U)) throw wt.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(w, j), this.lineTo(w + B, j), this.lineTo(w + B, j + U), this.lineTo(w, j + U), this.lineTo(w, j), this.lineTo(w + B, j), this.lineTo(w, j);
  }, y.prototype.fillRect = function(w, j, B, U) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U)) throw wt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var q = {};
      this.lineCap !== "butt" && (q.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (q.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(w, j, B, U), this.fill(), q.hasOwnProperty("lineCap") && (this.lineCap = q.lineCap), q.hasOwnProperty("lineJoin") && (this.lineJoin = q.lineJoin);
    }
  }, y.prototype.strokeRect = function(w, j, B, U) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U)) throw wt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    O.call(this) || (this.beginPath(), this.rect(w, j, B, U), this.stroke());
  }, y.prototype.clearRect = function(w, j, B, U) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U)) throw wt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(w, j, B, U));
  }, y.prototype.save = function(w) {
    w = typeof w != "boolean" || w;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, B = 0; B < this.pdf.internal.getNumberOfPages(); B++) this.pdf.setPage(B + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(j), w) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var U = new b(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = U;
    }
  }, y.prototype.restore = function(w) {
    w = typeof w != "boolean" || w;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, B = 0; B < this.pdf.internal.getNumberOfPages(); B++) this.pdf.setPage(B + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(j), w && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, y.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var N = function(w) {
    var j, B, U, q;
    if (w.isCanvasGradient === !0 && (w = w.getColor()), !w) return { r: 0, g: 0, b: 0, a: 0, style: w };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(w)) j = 0, B = 0, U = 0, q = 0;
    else {
      var J = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(w);
      if (J !== null) j = parseInt(J[1]), B = parseInt(J[2]), U = parseInt(J[3]), q = 1;
      else if ((J = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(w)) !== null) j = parseInt(J[1]), B = parseInt(J[2]), U = parseInt(J[3]), q = parseFloat(J[4]);
      else {
        if (q = 1, typeof w == "string" && w.charAt(0) !== "#") {
          var X = new Dc(w);
          w = X.ok ? X.toHex() : "#000000";
        }
        w.length === 4 ? (j = w.substring(1, 2), j += j, B = w.substring(2, 3), B += B, U = w.substring(3, 4), U += U) : (j = w.substring(1, 3), B = w.substring(3, 5), U = w.substring(5, 7)), j = parseInt(j, 16), B = parseInt(B, 16), U = parseInt(U, 16);
      }
    }
    return { r: j, g: B, b: U, a: q, style: w };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, O = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  y.prototype.fillText = function(w, j, B, U) {
    if (isNaN(j) || isNaN(B) || typeof w != "string") throw wt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (U = isNaN(U) ? void 0 : U, !p.call(this)) {
      var q = te(this.ctx.transform.rotation), J = this.ctx.transform.scaleX;
      k.call(this, { text: w, x: j, y: B, scale: J, angle: q, align: this.textAlign, maxWidth: U });
    }
  }, y.prototype.strokeText = function(w, j, B, U) {
    if (isNaN(j) || isNaN(B) || typeof w != "string") throw wt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!O.call(this)) {
      U = isNaN(U) ? void 0 : U;
      var q = te(this.ctx.transform.rotation), J = this.ctx.transform.scaleX;
      k.call(this, { text: w, x: j, y: B, scale: J, renderingMode: "stroke", angle: q, align: this.textAlign, maxWidth: U });
    }
  }, y.prototype.measureText = function(w) {
    if (typeof w != "string") throw wt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var j = this.pdf, B = this.pdf.internal.scaleFactor, U = j.internal.getFontSize(), q = j.getStringUnitWidth(w) * U / j.internal.scaleFactor, J = function(X) {
      var T = (X = X || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return T;
      } }), this;
    };
    return new J({ width: q *= Math.round(96 * B / 72 * 1e4) / 1e4 });
  }, y.prototype.scale = function(w, j) {
    if (isNaN(w) || isNaN(j)) throw wt.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var B = new f(w, 0, 0, j, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(B);
  }, y.prototype.rotate = function(w) {
    if (isNaN(w)) throw wt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var j = new f(Math.cos(w), Math.sin(w), -Math.sin(w), Math.cos(w), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(j);
  }, y.prototype.translate = function(w, j) {
    if (isNaN(w) || isNaN(j)) throw wt.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var B = new f(1, 0, 0, 1, w, j);
    this.ctx.transform = this.ctx.transform.multiply(B);
  }, y.prototype.transform = function(w, j, B, U, q, J) {
    if (isNaN(w) || isNaN(j) || isNaN(B) || isNaN(U) || isNaN(q) || isNaN(J)) throw wt.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var X = new f(w, j, B, U, q, J);
    this.ctx.transform = this.ctx.transform.multiply(X);
  }, y.prototype.setTransform = function(w, j, B, U, q, J) {
    w = isNaN(w) ? 1 : w, j = isNaN(j) ? 0 : j, B = isNaN(B) ? 0 : B, U = isNaN(U) ? 1 : U, q = isNaN(q) ? 0 : q, J = isNaN(J) ? 0 : J, this.ctx.transform = new f(w, j, B, U, q, J);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  y.prototype.drawImage = function(w, j, B, U, q, J, X, T, Ne) {
    var we = this.pdf.getImageProperties(w), ue = 1, Ie = 1, Ue = 1, ge = 1;
    U !== void 0 && T !== void 0 && (Ue = T / U, ge = Ne / q, ue = we.width / U * T / U, Ie = we.height / q * Ne / q), J === void 0 && (J = j, X = B, j = 0, B = 0), U !== void 0 && T === void 0 && (T = U, Ne = q), U === void 0 && T === void 0 && (T = we.width, Ne = we.height);
    for (var R, Xe = this.ctx.transform.decompose(), qe = te(Xe.rotate.shx), _e = new f(), je = (_e = (_e = (_e = _e.multiply(Xe.translate)).multiply(Xe.skew)).multiply(Xe.scale)).applyToRectangle(new h(J - j * Ue, X - B * ge, U * ue, q * Ie)), Be = F.call(this, je), Oe = [], He = 0; He < Be.length; He += 1) Oe.indexOf(Be[He]) === -1 && Oe.push(Be[He]);
    if (Z(Oe), this.autoPaging) for (var $e = Oe[0], nt = Oe[Oe.length - 1], it = $e; it < nt + 1; it++) {
      this.pdf.setPage(it);
      var ke = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Pe = it === 1 ? this.posY + this.margin[0] : this.margin[0], De = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Me = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Ce = it === 1 ? 0 : De + (it - 2) * Me;
      if (this.ctx.clip_path.length !== 0) {
        var Tt = this.path;
        R = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(R, this.posX + this.margin[3], -Ce + Pe + this.ctx.prevPageLastElemOffset), he.call(this, "fill", !0), this.path = Tt;
      }
      var at = JSON.parse(JSON.stringify(je));
      at = E([at], this.posX + this.margin[3], -Ce + Pe + this.ctx.prevPageLastElemOffset)[0];
      var Kt = (it > $e || it < nt) && I.call(this);
      Kt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ke, Me, null).clip().discardPath()), this.pdf.addImage(w, "JPEG", at.x, at.y, at.w, at.h, null, null, qe), Kt && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(w, "JPEG", je.x, je.y, je.w, je.h, null, null, qe);
  };
  var F = function(w, j, B) {
    var U = [];
    j = j || this.pdf.internal.pageSize.width, B = B || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var q = this.posY + this.ctx.prevPageLastElemOffset;
    switch (w.type) {
      default:
      case "mt":
      case "lt":
        U.push(Math.floor((w.y + q) / B) + 1);
        break;
      case "arc":
        U.push(Math.floor((w.y + q - w.radius) / B) + 1), U.push(Math.floor((w.y + q + w.radius) / B) + 1);
        break;
      case "qct":
        var J = $(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x, w.y);
        U.push(Math.floor((J.y + q) / B) + 1), U.push(Math.floor((J.y + J.h + q) / B) + 1);
        break;
      case "bct":
        var X = D(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x2, w.y2, w.x, w.y);
        U.push(Math.floor((X.y + q) / B) + 1), U.push(Math.floor((X.y + X.h + q) / B) + 1);
        break;
      case "rect":
        U.push(Math.floor((w.y + q) / B) + 1), U.push(Math.floor((w.y + w.h + q) / B) + 1);
    }
    for (var T = 0; T < U.length; T += 1) for (; this.pdf.internal.getNumberOfPages() < U[T]; ) _.call(this);
    return U;
  }, _ = function() {
    var w = this.fillStyle, j = this.strokeStyle, B = this.font, U = this.lineCap, q = this.lineWidth, J = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = w, this.strokeStyle = j, this.font = B, this.lineCap = U, this.lineWidth = q, this.lineJoin = J;
  }, E = function(w, j, B) {
    for (var U = 0; U < w.length; U++) switch (w[U].type) {
      case "bct":
        w[U].x2 += j, w[U].y2 += B;
      case "qct":
        w[U].x1 += j, w[U].y1 += B;
      case "mt":
      case "lt":
      case "arc":
      default:
        w[U].x += j, w[U].y += B;
    }
    return w;
  }, Z = function(w) {
    return w.sort(function(j, B) {
      return j - B;
    });
  }, se = function(w, j) {
    for (var B, U, q = this.fillStyle, J = this.strokeStyle, X = this.lineCap, T = this.lineWidth, Ne = Math.abs(T * this.ctx.transform.scaleX), we = this.lineJoin, ue = JSON.parse(JSON.stringify(this.path)), Ie = JSON.parse(JSON.stringify(this.path)), Ue = [], ge = 0; ge < Ie.length; ge++) if (Ie[ge].x !== void 0) for (var R = F.call(this, Ie[ge]), Xe = 0; Xe < R.length; Xe += 1) Ue.indexOf(R[Xe]) === -1 && Ue.push(R[Xe]);
    for (var qe = 0; qe < Ue.length; qe++) for (; this.pdf.internal.getNumberOfPages() < Ue[qe]; ) _.call(this);
    if (Z(Ue), this.autoPaging) for (var _e = Ue[0], je = Ue[Ue.length - 1], Be = _e; Be < je + 1; Be++) {
      this.pdf.setPage(Be), this.fillStyle = q, this.strokeStyle = J, this.lineCap = X, this.lineWidth = Ne, this.lineJoin = we;
      var Oe = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], He = Be === 1 ? this.posY + this.margin[0] : this.margin[0], $e = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], nt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], it = Be === 1 ? 0 : $e + (Be - 2) * nt;
      if (this.ctx.clip_path.length !== 0) {
        var ke = this.path;
        B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(B, this.posX + this.margin[3], -it + He + this.ctx.prevPageLastElemOffset), he.call(this, w, !0), this.path = ke;
      }
      if (U = JSON.parse(JSON.stringify(ue)), this.path = E(U, this.posX + this.margin[3], -it + He + this.ctx.prevPageLastElemOffset), j === !1 || Be === 0) {
        var Pe = (Be > _e || Be < je) && I.call(this);
        Pe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Oe, nt, null).clip().discardPath()), he.call(this, w, j), Pe && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = T;
    }
    else this.lineWidth = Ne, he.call(this, w, j), this.lineWidth = T;
    this.path = ue;
  }, he = function(w, j) {
    if ((w !== "stroke" || j || !O.call(this)) && (w === "stroke" || j || !p.call(this))) {
      for (var B, U, q = [], J = this.path, X = 0; X < J.length; X++) {
        var T = J[X];
        switch (T.type) {
          case "begin":
            q.push({ begin: !0 });
            break;
          case "close":
            q.push({ close: !0 });
            break;
          case "mt":
            q.push({ start: T, deltas: [], abs: [] });
            break;
          case "lt":
            var Ne = q.length;
            if (J[X - 1] && !isNaN(J[X - 1].x) && (B = [T.x - J[X - 1].x, T.y - J[X - 1].y], Ne > 0)) {
              for (; Ne >= 0; Ne--) if (q[Ne - 1].close !== !0 && q[Ne - 1].begin !== !0) {
                q[Ne - 1].deltas.push(B), q[Ne - 1].abs.push(T);
                break;
              }
            }
            break;
          case "bct":
            B = [T.x1 - J[X - 1].x, T.y1 - J[X - 1].y, T.x2 - J[X - 1].x, T.y2 - J[X - 1].y, T.x - J[X - 1].x, T.y - J[X - 1].y], q[q.length - 1].deltas.push(B);
            break;
          case "qct":
            var we = J[X - 1].x + 2 / 3 * (T.x1 - J[X - 1].x), ue = J[X - 1].y + 2 / 3 * (T.y1 - J[X - 1].y), Ie = T.x + 2 / 3 * (T.x1 - T.x), Ue = T.y + 2 / 3 * (T.y1 - T.y), ge = T.x, R = T.y;
            B = [we - J[X - 1].x, ue - J[X - 1].y, Ie - J[X - 1].x, Ue - J[X - 1].y, ge - J[X - 1].x, R - J[X - 1].y], q[q.length - 1].deltas.push(B);
            break;
          case "arc":
            q.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(q[q.length - 1].abs) && q[q.length - 1].abs.push(T);
        }
      }
      U = j ? null : w === "stroke" ? "stroke" : "fill";
      for (var Xe = !1, qe = 0; qe < q.length; qe++) if (q[qe].arc) for (var _e = q[qe].abs, je = 0; je < _e.length; je++) {
        var Be = _e[je];
        Be.type === "arc" ? H.call(this, Be.x, Be.y, Be.radius, Be.startAngle, Be.endAngle, Be.counterclockwise, void 0, j, !Xe) : W.call(this, Be.x, Be.y), Xe = !0;
      }
      else if (q[qe].close === !0) this.pdf.internal.out("h"), Xe = !1;
      else if (q[qe].begin !== !0) {
        var Oe = q[qe].start.x, He = q[qe].start.y;
        z.call(this, q[qe].deltas, Oe, He), Xe = !0;
      }
      U && ae.call(this, U), j && de.call(this);
    }
  }, Le = function(w) {
    var j = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, B = j * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return w - B;
      case "top":
        return w + j - B;
      case "hanging":
        return w + j - 2 * B;
      case "middle":
        return w + j / 2 - B;
      case "ideographic":
        return w;
      case "alphabetic":
      default:
        return w;
    }
  }, ie = function(w) {
    return w + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  y.prototype.createLinearGradient = function() {
    var w = function() {
    };
    return w.colorStops = [], w.addColorStop = function(j, B) {
      this.colorStops.push([j, B]);
    }, w.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, w.isCanvasGradient = !0, w;
  }, y.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, y.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var H = function(w, j, B, U, q, J, X, T, Ne) {
    for (var we = oe.call(this, B, U, q, J), ue = 0; ue < we.length; ue++) {
      var Ie = we[ue];
      ue === 0 && (Ne ? P.call(this, Ie.x1 + w, Ie.y1 + j) : W.call(this, Ie.x1 + w, Ie.y1 + j)), le.call(this, w, j, Ie.x2, Ie.y2, Ie.x3, Ie.y3, Ie.x4, Ie.y4);
    }
    T ? de.call(this) : ae.call(this, X);
  }, ae = function(w) {
    switch (w) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, de = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, P = function(w, j) {
    this.pdf.internal.out(r(w) + " " + a(j) + " m");
  }, k = function(w) {
    var j;
    switch (w.align) {
      case "right":
      case "end":
        j = "right";
        break;
      case "center":
        j = "center";
        break;
      case "left":
      case "start":
      default:
        j = "left";
    }
    var B = this.pdf.getTextDimensions(w.text), U = Le.call(this, w.y), q = ie.call(this, U) - B.h, J = this.ctx.transform.applyToPoint(new c(w.x, U)), X = this.ctx.transform.decompose(), T = new f();
    T = (T = (T = T.multiply(X.translate)).multiply(X.skew)).multiply(X.scale);
    for (var Ne, we, ue, Ie = this.ctx.transform.applyToRectangle(new h(w.x, U, B.w, B.h)), Ue = T.applyToRectangle(new h(w.x, q, B.w, B.h)), ge = F.call(this, Ue), R = [], Xe = 0; Xe < ge.length; Xe += 1) R.indexOf(ge[Xe]) === -1 && R.push(ge[Xe]);
    if (Z(R), this.autoPaging) for (var qe = R[0], _e = R[R.length - 1], je = qe; je < _e + 1; je++) {
      this.pdf.setPage(je);
      var Be = je === 1 ? this.posY + this.margin[0] : this.margin[0], Oe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], He = this.pdf.internal.pageSize.height - this.margin[2], $e = He - this.margin[0], nt = this.pdf.internal.pageSize.width - this.margin[1], it = nt - this.margin[3], ke = je === 1 ? 0 : Oe + (je - 2) * $e;
      if (this.ctx.clip_path.length !== 0) {
        var Pe = this.path;
        Ne = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(Ne, this.posX + this.margin[3], -1 * ke + Be), he.call(this, "fill", !0), this.path = Pe;
      }
      var De = E([JSON.parse(JSON.stringify(Ue))], this.posX + this.margin[3], -ke + Be + this.ctx.prevPageLastElemOffset)[0];
      w.scale >= 0.01 && (we = this.pdf.internal.getFontSize(), this.pdf.setFontSize(we * w.scale), ue = this.lineWidth, this.lineWidth = ue * w.scale);
      var Me = this.autoPaging !== "text";
      if (Me || De.y + De.h <= He) {
        if (Me || De.y >= Be && De.x <= nt) {
          var Ce = Me ? w.text : this.pdf.splitTextToSize(w.text, w.maxWidth || nt - De.x)[0], Tt = E([JSON.parse(JSON.stringify(Ie))], this.posX + this.margin[3], -ke + Be + this.ctx.prevPageLastElemOffset)[0], at = Me && (je > qe || je < _e) && I.call(this);
          at && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], it, $e, null).clip().discardPath()), this.pdf.text(Ce, Tt.x, Tt.y, { angle: w.angle, align: j, renderingMode: w.renderingMode }), at && this.pdf.restoreGraphicsState();
        }
      } else De.y < He && (this.ctx.prevPageLastElemOffset += He - De.y);
      w.scale >= 0.01 && (this.pdf.setFontSize(we), this.lineWidth = ue);
    }
    else w.scale >= 0.01 && (we = this.pdf.internal.getFontSize(), this.pdf.setFontSize(we * w.scale), ue = this.lineWidth, this.lineWidth = ue * w.scale), this.pdf.text(w.text, J.x + this.posX, J.y + this.posY, { angle: w.angle, align: j, renderingMode: w.renderingMode, maxWidth: w.maxWidth }), w.scale >= 0.01 && (this.pdf.setFontSize(we), this.lineWidth = ue);
  }, W = function(w, j, B, U) {
    B = B || 0, U = U || 0, this.pdf.internal.out(r(w + B) + " " + a(j + U) + " l");
  }, z = function(w, j, B) {
    return this.pdf.lines(w, j, B, null, null);
  }, le = function(w, j, B, U, q, J, X, T) {
    this.pdf.internal.out([t(s(B + w)), t(o(U + j)), t(s(q + w)), t(o(J + j)), t(s(X + w)), t(o(T + j)), "c"].join(" "));
  }, oe = function(w, j, B, U) {
    for (var q = 2 * Math.PI, J = Math.PI / 2; j > B; ) j -= q;
    var X = Math.abs(B - j);
    X < q && U && (X = q - X);
    for (var T = [], Ne = U ? -1 : 1, we = j; X > 1e-5; ) {
      var ue = we + Ne * Math.min(X, J);
      T.push(fe.call(this, w, we, ue)), X -= Math.abs(ue - we), we = ue;
    }
    return T;
  }, fe = function(w, j, B) {
    var U = (B - j) / 2, q = w * Math.cos(U), J = w * Math.sin(U), X = q, T = -J, Ne = X * X + T * T, we = Ne + X * q + T * J, ue = 4 / 3 * (Math.sqrt(2 * Ne * we) - we) / (X * J - T * q), Ie = X - ue * T, Ue = T + ue * X, ge = Ie, R = -Ue, Xe = U + j, qe = Math.cos(Xe), _e = Math.sin(Xe);
    return { x1: w * Math.cos(j), y1: w * Math.sin(j), x2: Ie * qe - Ue * _e, y2: Ie * _e + Ue * qe, x3: ge * qe - R * _e, y3: ge * _e + R * qe, x4: w * Math.cos(B), y4: w * Math.sin(B) };
  }, te = function(w) {
    return 180 * w / Math.PI;
  }, $ = function(w, j, B, U, q, J) {
    var X = w + 0.5 * (B - w), T = j + 0.5 * (U - j), Ne = q + 0.5 * (B - q), we = J + 0.5 * (U - J), ue = Math.min(w, q, X, Ne), Ie = Math.max(w, q, X, Ne), Ue = Math.min(j, J, T, we), ge = Math.max(j, J, T, we);
    return new h(ue, Ue, Ie - ue, ge - Ue);
  }, D = function(w, j, B, U, q, J, X, T) {
    var Ne, we, ue, Ie, Ue, ge, R, Xe, qe, _e, je, Be, Oe, He, $e = B - w, nt = U - j, it = q - B, ke = J - U, Pe = X - q, De = T - J;
    for (we = 0; we < 41; we++) qe = (R = (ue = w + (Ne = we / 40) * $e) + Ne * ((Ue = B + Ne * it) - ue)) + Ne * (Ue + Ne * (q + Ne * Pe - Ue) - R), _e = (Xe = (Ie = j + Ne * nt) + Ne * ((ge = U + Ne * ke) - Ie)) + Ne * (ge + Ne * (J + Ne * De - ge) - Xe), we == 0 ? (je = qe, Be = _e, Oe = qe, He = _e) : (je = Math.min(je, qe), Be = Math.min(Be, _e), Oe = Math.max(Oe, qe), He = Math.max(He, _e));
    return new h(Math.round(je), Math.round(Be), Math.round(Oe - je), Math.round(He - Be));
  }, be = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var w, j, B = (w = this.ctx.lineDash, j = this.ctx.lineDashOffset, JSON.stringify({ lineDash: w, lineDashOffset: j }));
      this.prevLineDash !== B && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = B);
    }
  };
})(Ye.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(o) {
    var c, h, f, g, b, y, N, p, O, I;
    for (h = [], f = 0, g = (o += c = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > f; f += 4) (b = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (y = (b = ((b = ((b = ((b = (b - (I = b % 85)) / 85) - (O = b % 85)) / 85) - (p = b % 85)) / 85) - (N = b % 85)) / 85) % 85, h.push(y + 33, N + 33, p + 33, O + 33, I + 33)) : h.push(122);
    return function(F, _) {
      for (var E = _; E > 0; E--) F.pop();
    }(h, c.length), String.fromCharCode.apply(String, h) + "~>";
  }, r = function(o) {
    var c, h, f, g, b, y = String, N = "length", p = 255, O = "charCodeAt", I = "slice", F = "replace";
    for (o[I](-2), o = o[I](0, -2)[F](/\s/g, "")[F]("z", "!!!!!"), f = [], g = 0, b = (o += c = "uuuuu"[I](o[N] % 5 || 5))[N]; b > g; g += 5) h = 52200625 * (o[O](g) - 33) + 614125 * (o[O](g + 1) - 33) + 7225 * (o[O](g + 2) - 33) + 85 * (o[O](g + 3) - 33) + (o[O](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(_, E) {
      for (var Z = E; Z > 0; Z--) _.pop();
    }(f, c[N]), y.fromCharCode.apply(y, f);
  }, a = function(o) {
    var c = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), c.test(o) === !1) return "";
    for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
    return h;
  }, s = function(o) {
    for (var c = new Uint8Array(o.length), h = o.length; h--; ) c[h] = o.charCodeAt(h);
    return o = (c = vl(c)).reduce(function(f, g) {
      return f + String.fromCharCode(g);
    }, "");
  };
  n.processDataByFilters = function(o, c) {
    var h = 0, f = o || "", g = [];
    for (typeof (c = c || []) == "string" && (c = [c]), h = 0; h < c.length; h += 1) switch (c[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        f = r(f), g.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        f = t(f), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = a(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(b) {
          return ("0" + b.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = s(f), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + c[h] + '" is not implemented');
    }
    return { data: f, reverseChain: g.reverse().join(" ") };
  };
}(Ye.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.loadFile = function(t, r, a) {
    return function(s, o, c) {
      o = o !== !1, c = typeof c == "function" ? c : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, b) {
          var y = new XMLHttpRequest(), N = 0, p = function(O) {
            var I = O.length, F = [], _ = String.fromCharCode;
            for (N = 0; N < I; N += 1) F.push(_(255 & O.charCodeAt(N)));
            return F.join("");
          };
          if (y.open("GET", f, !g), y.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (y.onload = function() {
            y.status === 200 ? b(p(this.responseText)) : b(void 0);
          }), y.send(null), g && y.status === 200) return p(y.responseText);
        }(s, o, c);
      } catch {
      }
      return h;
    }(t, r, a);
  }, n.loadImageFile = n.loadFile;
}(Ye.API), function(n) {
  function t() {
    return (Je.html2canvas ? Promise.resolve(Je.html2canvas) : import("./html2canvas.esm-DgdJBc_o.mjs")).catch(function(c) {
      return Promise.reject(new Error("Could not load html2canvas: " + c));
    }).then(function(c) {
      return c.default ? c.default : c;
    });
  }
  function r() {
    return (Je.DOMPurify ? Promise.resolve(Je.DOMPurify) : import("./purify.es-DHbHSKL1.mjs")).catch(function(c) {
      return Promise.reject(new Error("Could not load dompurify: " + c));
    }).then(function(c) {
      return c.default ? c.default : c;
    });
  }
  var a = function(c) {
    var h = mt(c);
    return h === "undefined" ? "undefined" : h === "string" || c instanceof String ? "string" : h === "number" || c instanceof Number ? "number" : h === "function" || c instanceof Function ? "function" : c && c.constructor === Array ? "array" : c && c.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, s = function(c, h) {
    var f = document.createElement(c);
    for (var g in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) f.style[g] = h.style[g];
    return f;
  }, o = function c(h) {
    var f = Object.assign(c.convert(Promise.resolve()), JSON.parse(JSON.stringify(c.template))), g = c.convert(Promise.resolve(), f);
    return g = (g = g.setProgress(1, c, 1, [c])).set(h);
  };
  (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(c, h) {
    return c.__proto__ = h || o.prototype, c;
  }, o.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, o.prototype.from = function(c, h) {
    return this.then(function() {
      switch (h = h || function(f) {
        switch (a(f)) {
          case "string":
            return "string";
          case "element":
            return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(c)) {
        case "string":
          return this.then(r).then(function(f) {
            return this.set({ src: s("div", { innerHTML: c, dompurify: f }) });
          });
        case "element":
          return this.set({ src: c });
        case "canvas":
          return this.set({ canvas: c });
        case "img":
          return this.set({ img: c });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, o.prototype.to = function(c) {
    switch (c) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, o.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var c = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, b) {
        for (var y = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), N = g.firstChild; N; N = N.nextSibling) b !== !0 && N.nodeType === 1 && N.nodeName === "SCRIPT" || y.appendChild(f(N, b));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (y.width = g.width, y.height = g.height, y.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (y.value = g.value), y.addEventListener("load", function() {
          y.scrollTop = g.scrollTop, y.scrollLeft = g.scrollLeft;
        }, !0)), y;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (c.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = s("div", { className: "html2pdf__container", style: c }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var c = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(c).then(t).then(function(h) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, h(this.prop.container, f);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toContext2d = function() {
    var c = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(c).then(t).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, b = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, y = Object.assign({ async: !0, allowTaint: !0, scale: b, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete y.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = g, g) for (var N = 0; N < g.length; ++N) {
        var p = g[N], O = p.src.find(function(I) {
          return I.format === "truetype";
        });
        O && f.addFont(O.url, p.ref.name, p.ref.style);
      }
      return y.windowHeight = y.windowHeight || 0, y.windowHeight = y.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : y.windowHeight, f.context2d.save(!0), h(this.prop.container, y);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var c = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = c;
    });
  }, o.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, o.prototype.output = function(c, h, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(c, h) : this.outputPdf(c, h);
  }, o.prototype.outputPdf = function(c, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(c, h);
    });
  }, o.prototype.outputImg = function(c) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (c) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + c + '" is not supported.';
      }
    });
  }, o.prototype.save = function(c) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(c ? { filename: c } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, o.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, o.prototype.set = function(c) {
    if (a(c) !== "object") return this;
    var h = Object.keys(c || {}).map(function(f) {
      if (f in o.template.prop) return function() {
        this.prop[f] = c[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, c.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = c.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, c.pageSize);
        default:
          return function() {
            this.opt[f] = c[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, o.prototype.get = function(c, h) {
    return this.then(function() {
      var f = c in o.template.prop ? this.prop[c] : this.opt[c];
      return h ? h(f) : f;
    });
  }, o.prototype.setMargin = function(c) {
    return this.then(function() {
      switch (a(c)) {
        case "number":
          c = [c, c, c, c];
        case "array":
          if (c.length === 2 && (c = [c[0], c[1], c[0], c[1]]), c.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = c;
    }).then(this.setPageSize);
  }, o.prototype.setPageSize = function(c) {
    function h(f, g) {
      return Math.floor(f * g / 72 * 96);
    }
    return this.then(function() {
      (c = c || Ye.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (c.inner = { width: c.width - this.opt.margin[1] - this.opt.margin[3], height: c.height - this.opt.margin[0] - this.opt.margin[2] }, c.inner.px = { width: h(c.inner.width, c.k), height: h(c.inner.height, c.k) }, c.inner.ratio = c.inner.height / c.inner.width), this.prop.pageSize = c;
    });
  }, o.prototype.setProgress = function(c, h, f, g) {
    return c != null && (this.progress.val = c), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(c, h, f, g) {
    return this.setProgress(c ? this.progress.val + c : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(c, h) {
    var f = this;
    return this.thenCore(c, h, function(g, b) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(y) {
        return f.updateProgress(null, g), y;
      }).then(g, b).then(function(y) {
        return f.updateProgress(1), y;
      });
    });
  }, o.prototype.thenCore = function(c, h, f) {
    f = f || Promise.prototype.then, c && (c = c.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), b = f.call(g, c, h);
    return o.convert(b, this.__proto__);
  }, o.prototype.thenExternal = function(c, h) {
    return Promise.prototype.then.call(this, c, h);
  }, o.prototype.thenList = function(c) {
    var h = this;
    return c.forEach(function(f) {
      h = h.thenCore(f);
    }), h;
  }, o.prototype.catch = function(c) {
    c && (c = c.bind(this));
    var h = Promise.prototype.catch.call(this, c);
    return o.convert(h, this);
  }, o.prototype.catchExternal = function(c) {
    return Promise.prototype.catch.call(this, c);
  }, o.prototype.error = function(c) {
    return this.then(function() {
      throw new Error(c);
    });
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Ye.getPageSize = function(c, h, f) {
    if (mt(c) === "object") {
      var g = c;
      c = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", c = ("" + (c || "P")).toLowerCase();
    var b, y = ("" + f).toLowerCase(), N = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        b = 1;
        break;
      case "mm":
        b = 72 / 25.4;
        break;
      case "cm":
        b = 72 / 2.54;
        break;
      case "in":
        b = 72;
        break;
      case "px":
        b = 0.75;
        break;
      case "pc":
      case "em":
        b = 12;
        break;
      case "ex":
        b = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var p, O = 0, I = 0;
    if (N.hasOwnProperty(y)) O = N[y][1] / b, I = N[y][0] / b;
    else try {
      O = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (c === "p" || c === "portrait") c = "p", I > O && (p = I, I = O, O = p);
    else {
      if (c !== "l" && c !== "landscape") throw "Invalid orientation: " + c;
      c = "l", O > I && (p = I, I = O, O = p);
    }
    return { width: I, height: O, unit: h, k: b, orientation: c };
  }, n.html = function(c, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(Nl) : null;
    var f = new o(h);
    return h.worker ? f : f.from(c).doCallback();
  };
}(Ye.API), Ye.API.addJS = function(n) {
  return bc = n, this.internal.events.subscribe("postPutResources", function() {
    xo = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (xo + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), vc = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + bc + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    xo !== void 0 && vc !== void 0 && this.internal.out("/Names <</JavaScript " + xo + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t;
  n.events.push(["postPutResources", function() {
    var r = this, a = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var s = r.outline.render().split(/\r\n/), o = 0; o < s.length; o++) {
      var c = s[o], h = a.exec(c);
      if (h != null) {
        var f = h[1];
        r.internal.newObjectDeferredBegin(f, !1);
      }
      r.internal.write(c);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, b = [];
      for (o = 0; o < g; o++) {
        var y = r.internal.newObject();
        b.push(y);
        var N = r.internal.getPageInfo(o + 1);
        r.internal.write("<< /D[" + N.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = r.internal.newObject();
      for (r.internal.write("<< /Names [ "), o = 0; o < b.length; o++) r.internal.write("(page_" + (o + 1) + ")" + b[o] + " 0 R");
      r.internal.write(" ] >>", "endobj"), t = r.internal.newObject(), r.internal.write("<< /Dests " + p + " 0 R"), r.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var r = this;
    r.outline = { createNamedDestinations: !1, root: { children: [] } }, r.outline.add = function(a, s, o) {
      var c = { title: s, options: o, children: [] };
      return a == null && (a = this.root), a.children.push(c), c;
    }, r.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = r, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, r.outline.genIds_r = function(a) {
      a.id = r.internal.newObjectDeferred();
      for (var s = 0; s < a.children.length; s++) this.genIds_r(a.children[s]);
    }, r.outline.renderRoot = function(a) {
      this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, a)), this.objEnd();
    }, r.outline.renderItems = function(a) {
      for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
        var c = a.children[o];
        this.objStart(c), this.line("/Title " + this.makeString(c.title)), this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), c.children.length > 0 && (this.line("/First " + this.makeRef(c.children[0])), this.line("/Last " + this.makeRef(c.children[c.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, c);
        if (h > 0 && this.line("/Count " + h), c.options && c.options.pageNumber) {
          var f = r.internal.getPageInfo(c.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g]);
    }, r.outline.line = function(a) {
      this.ctx.val += a + `\r
`;
    }, r.outline.makeRef = function(a) {
      return a.id + " 0 R";
    }, r.outline.makeString = function(a) {
      return "(" + r.internal.pdfEscape(a) + ")";
    }, r.outline.objStart = function(a) {
      this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`;
    }, r.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, r.outline.count_r = function(a, s) {
      for (var o = 0; o < s.children.length; o++) a.count++, this.count_r(a, s.children[o]);
      return a.count;
    };
  }]);
}(Ye.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(r, a, s, o, c, h) {
    var f, g = this.decode.DCT_DECODE, b = null;
    if (typeof r == "string" || this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) {
      switch (r = c || r, r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r, (f = function(y) {
        for (var N, p = 256 * y.charCodeAt(4) + y.charCodeAt(5), O = y.length, I = { width: 0, height: 0, numcomponents: 1 }, F = 4; F < O; F += 2) {
          if (F += p, t.indexOf(y.charCodeAt(F + 1)) !== -1) {
            N = 256 * y.charCodeAt(F + 5) + y.charCodeAt(F + 6), I = { width: 256 * y.charCodeAt(F + 7) + y.charCodeAt(F + 8), height: N, numcomponents: y.charCodeAt(F + 9) };
            break;
          }
          p = 256 * y.charCodeAt(F + 2) + y.charCodeAt(F + 3);
        }
        return I;
      }(r = this.__addimage__.isArrayBufferView(r) ? this.__addimage__.arrayBufferToBinaryString(r) : r)).numcomponents) {
        case 1:
          h = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          h = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          h = this.color_spaces.DEVICE_RGB;
      }
      b = { data: r, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: a, alias: s };
    }
    return b;
  };
}(Ye.API);
var Ti, Lo, yc, wc, xc, C1 = function() {
  var n, t, r;
  function a(o) {
    var c, h, f, g, b, y, N, p, O, I, F, _, E, Z;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, y = null; ; ) {
      switch (c = this.readUInt32(), O = (function() {
        var se, he;
        for (he = [], se = 0; se < 4; ++se) he.push(String.fromCharCode(this.data[this.pos++]));
        return he;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(c);
          break;
        case "fcTL":
          y && this.animation.frames.push(y), this.pos += 4, y = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, b = this.readUInt16(), g = this.readUInt16() || 100, y.delay = 1e3 * b / g, y.disposeOp = this.data[this.pos++], y.blendOp = this.data[this.pos++], y.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (O === "fdAT" && (this.pos += 4, c -= 4), o = (y != null ? y.data : void 0) || this.imgData, _ = 0; 0 <= c ? _ < c : _ > c; 0 <= c ? ++_ : --_) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(c), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (E = 0; 0 <= I ? E < I : E > I; 0 <= I ? ++E : --E) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(c)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(c);
          }
          break;
        case "tEXt":
          N = (F = this.read(c)).indexOf(0), p = String.fromCharCode.apply(String, F.slice(0, N)), this.text[p] = String.fromCharCode.apply(String, F.slice(N + 1));
          break;
        case "IEND":
          return y && this.animation.frames.push(y), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (Z = this.colorType) === 4 || Z === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += c;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  a.prototype.read = function(o) {
    var c, h;
    for (h = [], c = 0; 0 <= o ? c < o : c > o; 0 <= o ? ++c : --c) h.push(this.data[this.pos++]);
    return h;
  }, a.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.decodePixels = function(o) {
    var c = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * c), f = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function b(y, N, p, O) {
      var I, F, _, E, Z, se, he, Le, ie, H, ae, de, P, k, W, z, le, oe, fe, te, $, D = Math.ceil((g.width - y) / p), be = Math.ceil((g.height - N) / O), w = g.width == D && g.height == be;
      for (k = c * D, de = w ? h : new Uint8Array(k * be), se = o.length, P = 0, F = 0; P < be && f < se; ) {
        switch (o[f++]) {
          case 0:
            for (E = le = 0; le < k; E = le += 1) de[F++] = o[f++];
            break;
          case 1:
            for (E = oe = 0; oe < k; E = oe += 1) I = o[f++], Z = E < c ? 0 : de[F - c], de[F++] = (I + Z) % 256;
            break;
          case 2:
            for (E = fe = 0; fe < k; E = fe += 1) I = o[f++], _ = (E - E % c) / c, W = P && de[(P - 1) * k + _ * c + E % c], de[F++] = (W + I) % 256;
            break;
          case 3:
            for (E = te = 0; te < k; E = te += 1) I = o[f++], _ = (E - E % c) / c, Z = E < c ? 0 : de[F - c], W = P && de[(P - 1) * k + _ * c + E % c], de[F++] = (I + Math.floor((Z + W) / 2)) % 256;
            break;
          case 4:
            for (E = $ = 0; $ < k; E = $ += 1) I = o[f++], _ = (E - E % c) / c, Z = E < c ? 0 : de[F - c], P === 0 ? W = z = 0 : (W = de[(P - 1) * k + _ * c + E % c], z = _ && de[(P - 1) * k + (_ - 1) * c + E % c]), he = Z + W - z, Le = Math.abs(he - Z), H = Math.abs(he - W), ae = Math.abs(he - z), ie = Le <= H && Le <= ae ? Z : H <= ae ? W : z, de[F++] = (I + ie) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[f - 1]);
        }
        if (!w) {
          var j = ((N + P * O) * g.width + y) * c, B = P * k;
          for (E = 0; E < D; E += 1) {
            for (var U = 0; U < c; U += 1) h[j++] = de[B++];
            j += (p - 1) * c;
          }
        }
        P++;
      }
    }
    return o = l1(o), g.interlaceMethod == 1 ? (b(0, 0, 8, 8), b(4, 0, 8, 8), b(0, 4, 4, 8), b(2, 0, 4, 4), b(0, 2, 2, 4), b(1, 0, 2, 2), b(0, 1, 1, 2)) : b(0, 0, 1, 1), h;
  }, a.prototype.decodePalette = function() {
    var o, c, h, f, g, b, y, N, p;
    for (h = this.palette, b = this.transparency.indexed || [], g = new Uint8Array((b.length || 0) + h.length), f = 0, o = 0, c = y = 0, N = h.length; y < N; c = y += 3) g[f++] = h[c], g[f++] = h[c + 1], g[f++] = h[c + 2], g[f++] = (p = b[o++]) != null ? p : 255;
    return g;
  }, a.prototype.copyToImageData = function(o, c) {
    var h, f, g, b, y, N, p, O, I, F, _;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (_ = this._decodedPalette) != null ? _ : this._decodedPalette = this.decodePalette(), f = 4, h = !0), O = (g = o.data || o).length, y = I || c, b = N = 0, f === 1) for (; b < O; ) p = I ? 4 * c[b / 4] : N, F = y[p++], g[b++] = F, g[b++] = F, g[b++] = F, g[b++] = h ? y[p++] : 255, N = p;
    else for (; b < O; ) p = I ? 4 * c[b / 4] : N, g[b++] = y[p++], g[b++] = y[p++], g[b++] = y[p++], g[b++] = h ? y[p++] : 255, N = p;
  }, a.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var s = function() {
    if (Object.prototype.toString.call(Je) === "[object Window]") {
      try {
        t = Je.document.createElement("canvas"), r = t.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return s(), n = function(o) {
    var c;
    if (s() === !0) return r.width = o.width, r.height = o.height, r.clearRect(0, 0, o.width, o.height), r.putImageData(o, 0, 0), (c = new Image()).src = t.toDataURL(), c;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, a.prototype.decodeFrames = function(o) {
    var c, h, f, g, b, y, N, p;
    if (this.animation) {
      for (p = [], h = b = 0, y = (N = this.animation.frames).length; b < y; h = ++b) c = N[h], f = o.createImageData(c.width, c.height), g = this.decodePixels(new Uint8Array(c.data)), this.copyToImageData(f, g), c.imageData = f, p.push(c.image = n(f));
      return p;
    }
  }, a.prototype.renderFrame = function(o, c) {
    var h, f, g;
    return h = (f = this.animation.frames)[c], g = f[c - 1], c === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, a.prototype.animate = function(o) {
    var c, h, f, g, b, y, N = this;
    return h = 0, y = this.animation, g = y.numFrames, f = y.frames, b = y.numPlays, (c = function() {
      var p, O;
      if (p = h++ % g, O = f[p], N.renderFrame(o, p), g > 1 && h / g < b) return N.animation._timeout = setTimeout(c, O.delay);
    })();
  }, a.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, a.prototype.render = function(o) {
    var c, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, c = o.getContext("2d"), this.animation ? (this.decodeFrames(c), this.animate(c)) : (h = c.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), c.putImageData(h, 0, 0));
  }, a;
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function j1(n) {
  var t = 0;
  if (n[t++] !== 71 || n[t++] !== 73 || n[t++] !== 70 || n[t++] !== 56 || (n[t++] + 1 & 253) != 56 || n[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var r = n[t++] | n[t++] << 8, a = n[t++] | n[t++] << 8, s = n[t++], o = s >> 7, c = 1 << (7 & s) + 1;
  n[t++], n[t++];
  var h = null, f = null;
  o && (h = t, f = c, t += 3 * c);
  var g = !0, b = [], y = 0, N = null, p = 0, O = null;
  for (this.width = r, this.height = a; g && t < n.length; ) switch (n[t++]) {
    case 33:
      switch (n[t++]) {
        case 255:
          if (n[t] !== 11 || n[t + 1] == 78 && n[t + 2] == 69 && n[t + 3] == 84 && n[t + 4] == 83 && n[t + 5] == 67 && n[t + 6] == 65 && n[t + 7] == 80 && n[t + 8] == 69 && n[t + 9] == 50 && n[t + 10] == 46 && n[t + 11] == 48 && n[t + 12] == 3 && n[t + 13] == 1 && n[t + 16] == 0) t += 14, O = n[t++] | n[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((P = n[t++]) >= 0)) throw Error("Invalid block size");
            if (P === 0) break;
            t += P;
          }
          break;
        case 249:
          if (n[t++] !== 4 || n[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = n[t++];
          y = n[t++] | n[t++] << 8, N = n[t++], (1 & I) == 0 && (N = null), p = I >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((P = n[t++]) >= 0)) throw Error("Invalid block size");
            if (P === 0) break;
            t += P;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[t - 1].toString(16));
      }
      break;
    case 44:
      var F = n[t++] | n[t++] << 8, _ = n[t++] | n[t++] << 8, E = n[t++] | n[t++] << 8, Z = n[t++] | n[t++] << 8, se = n[t++], he = se >> 6 & 1, Le = 1 << (7 & se) + 1, ie = h, H = f, ae = !1;
      se >> 7 && (ae = !0, ie = t, H = Le, t += 3 * Le);
      var de = t;
      for (t++; ; ) {
        var P;
        if (!((P = n[t++]) >= 0)) throw Error("Invalid block size");
        if (P === 0) break;
        t += P;
      }
      b.push({ x: F, y: _, width: E, height: Z, has_local_palette: ae, palette_offset: ie, palette_size: H, data_offset: de, data_length: t - de, transparent_index: N, interlaced: !!he, delay: y, disposal: p });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[t - 1].toString(16));
  }
  this.numFrames = function() {
    return b.length;
  }, this.loopCount = function() {
    return O;
  }, this.frameInfo = function(k) {
    if (k < 0 || k >= b.length) throw new Error("Frame index out of range.");
    return b[k];
  }, this.decodeAndBlitFrameBGRA = function(k, W) {
    var z = this.frameInfo(k), le = z.width * z.height, oe = new Uint8Array(le);
    Lc(n, z.data_offset, oe, le);
    var fe = z.palette_offset, te = z.transparent_index;
    te === null && (te = 256);
    var $ = z.width, D = r - $, be = $, w = 4 * (z.y * r + z.x), j = 4 * ((z.y + z.height) * r + z.x), B = w, U = 4 * D;
    z.interlaced === !0 && (U += 4 * r * 7);
    for (var q = 8, J = 0, X = oe.length; J < X; ++J) {
      var T = oe[J];
      if (be === 0 && (be = $, (B += U) >= j && (U = 4 * D + 4 * r * (q - 1), B = w + ($ + D) * (q << 1), q >>= 1)), T === te) B += 4;
      else {
        var Ne = n[fe + 3 * T], we = n[fe + 3 * T + 1], ue = n[fe + 3 * T + 2];
        W[B++] = ue, W[B++] = we, W[B++] = Ne, W[B++] = 255;
      }
      --be;
    }
  }, this.decodeAndBlitFrameRGBA = function(k, W) {
    var z = this.frameInfo(k), le = z.width * z.height, oe = new Uint8Array(le);
    Lc(n, z.data_offset, oe, le);
    var fe = z.palette_offset, te = z.transparent_index;
    te === null && (te = 256);
    var $ = z.width, D = r - $, be = $, w = 4 * (z.y * r + z.x), j = 4 * ((z.y + z.height) * r + z.x), B = w, U = 4 * D;
    z.interlaced === !0 && (U += 4 * r * 7);
    for (var q = 8, J = 0, X = oe.length; J < X; ++J) {
      var T = oe[J];
      if (be === 0 && (be = $, (B += U) >= j && (U = 4 * D + 4 * r * (q - 1), B = w + ($ + D) * (q << 1), q >>= 1)), T === te) B += 4;
      else {
        var Ne = n[fe + 3 * T], we = n[fe + 3 * T + 1], ue = n[fe + 3 * T + 2];
        W[B++] = Ne, W[B++] = we, W[B++] = ue, W[B++] = 255;
      }
      --be;
    }
  };
}
function Lc(n, t, r, a) {
  for (var s = n[t++], o = 1 << s, c = o + 1, h = c + 1, f = s + 1, g = (1 << f) - 1, b = 0, y = 0, N = 0, p = n[t++], O = new Int32Array(4096), I = null; ; ) {
    for (; b < 16 && p !== 0; ) y |= n[t++] << b, b += 8, p === 1 ? p = n[t++] : --p;
    if (b < f) break;
    var F = y & g;
    if (y >>= f, b -= f, F !== o) {
      if (F === c) break;
      for (var _ = F < h ? F : I, E = 0, Z = _; Z > o; ) Z = O[Z] >> 8, ++E;
      var se = Z;
      if (N + E + (_ !== F ? 1 : 0) > a) return void wt.log("Warning, gif stream longer than expected.");
      r[N++] = se;
      var he = N += E;
      for (_ !== F && (r[N++] = se), Z = _; E--; ) Z = O[Z], r[--he] = 255 & Z, Z >>= 8;
      I !== null && h < 4096 && (O[h++] = I << 8 | se, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = F;
    } else h = c + 1, g = (1 << (f = s + 1)) - 1, I = null;
  }
  return N !== a && wt.log("Warning, gif stream shorter than expected."), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function fl(n) {
  var t, r, a, s, o, c = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), b = new Array(64), y = new Array(65535), N = new Array(65535), p = new Array(64), O = new Array(64), I = [], F = 0, _ = 7, E = new Array(64), Z = new Array(64), se = new Array(64), he = new Array(256), Le = new Array(2048), ie = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], H = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], ae = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], de = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], W = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], z = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], le = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function oe(w, j) {
    for (var B = 0, U = 0, q = new Array(), J = 1; J <= 16; J++) {
      for (var X = 1; X <= w[J]; X++) q[j[U]] = [], q[j[U]][0] = B, q[j[U]][1] = J, U++, B++;
      B *= 2;
    }
    return q;
  }
  function fe(w) {
    for (var j = w[0], B = w[1] - 1; B >= 0; ) j & 1 << B && (F |= 1 << _), B--, --_ < 0 && (F == 255 ? (te(255), te(0)) : te(F), _ = 7, F = 0);
  }
  function te(w) {
    I.push(w);
  }
  function $(w) {
    te(w >> 8 & 255), te(255 & w);
  }
  function D(w, j, B, U, q) {
    for (var J, X = q[0], T = q[240], Ne = function(_e, je) {
      var Be, Oe, He, $e, nt, it, ke, Pe, De, Me, Ce = 0;
      for (De = 0; De < 8; ++De) {
        Be = _e[Ce], Oe = _e[Ce + 1], He = _e[Ce + 2], $e = _e[Ce + 3], nt = _e[Ce + 4], it = _e[Ce + 5], ke = _e[Ce + 6];
        var Tt = Be + (Pe = _e[Ce + 7]), at = Be - Pe, Kt = Oe + ke, dt = Oe - ke, xt = He + it, Yn = He - it, ht = $e + nt, Hr = $e - nt, _t = Tt + ht, Fn = Tt - ht, lr = Kt + xt, Pt = Kt - xt;
        _e[Ce] = _t + lr, _e[Ce + 4] = _t - lr;
        var Ze = 0.707106781 * (Pt + Fn);
        _e[Ce + 2] = Fn + Ze, _e[Ce + 6] = Fn - Ze;
        var ft = 0.382683433 * ((_t = Hr + Yn) - (Pt = dt + at)), Vr = 0.5411961 * _t + ft, Jt = 1.306562965 * Pt + ft, Jn = 0.707106781 * (lr = Yn + dt), Xn = at + Jn, Ge = at - Jn;
        _e[Ce + 5] = Ge + Vr, _e[Ce + 3] = Ge - Vr, _e[Ce + 1] = Xn + Jt, _e[Ce + 7] = Xn - Jt, Ce += 8;
      }
      for (Ce = 0, De = 0; De < 8; ++De) {
        Be = _e[Ce], Oe = _e[Ce + 8], He = _e[Ce + 16], $e = _e[Ce + 24], nt = _e[Ce + 32], it = _e[Ce + 40], ke = _e[Ce + 48];
        var On = Be + (Pe = _e[Ce + 56]), $n = Be - Pe, un = Oe + ke, Ut = Oe - ke, Rt = He + it, bn = He - it, si = $e + nt, cr = $e - nt, Mn = On + si, En = On - si, Bn = un + Rt, Kn = un - Rt;
        _e[Ce] = Mn + Bn, _e[Ce + 32] = Mn - Bn;
        var An = 0.707106781 * (Kn + En);
        _e[Ce + 16] = En + An, _e[Ce + 48] = En - An;
        var Zn = 0.382683433 * ((Mn = cr + bn) - (Kn = Ut + $n)), Wr = 0.5411961 * Mn + Zn, li = 1.306562965 * Kn + Zn, ci = 0.707106781 * (Bn = bn + Ut), ui = $n + ci, hi = $n - ci;
        _e[Ce + 40] = hi + Wr, _e[Ce + 24] = hi - Wr, _e[Ce + 8] = ui + li, _e[Ce + 56] = ui - li, Ce++;
      }
      for (De = 0; De < 64; ++De) Me = _e[De] * je[De], p[De] = Me > 0 ? Me + 0.5 | 0 : Me - 0.5 | 0;
      return p;
    }(w, j), we = 0; we < 64; ++we) O[ie[we]] = Ne[we];
    var ue = O[0] - B;
    B = O[0], ue == 0 ? fe(U[0]) : (fe(U[N[J = 32767 + ue]]), fe(y[J]));
    for (var Ie = 63; Ie > 0 && O[Ie] == 0; ) Ie--;
    if (Ie == 0) return fe(X), B;
    for (var Ue, ge = 1; ge <= Ie; ) {
      for (var R = ge; O[ge] == 0 && ge <= Ie; ) ++ge;
      var Xe = ge - R;
      if (Xe >= 16) {
        Ue = Xe >> 4;
        for (var qe = 1; qe <= Ue; ++qe) fe(T);
        Xe &= 15;
      }
      J = 32767 + O[ge], fe(q[(Xe << 4) + N[J]]), fe(y[J]), ge++;
    }
    return Ie != 63 && fe(X), B;
  }
  function be(w) {
    w = Math.min(Math.max(w, 1), 100), o != w && (function(j) {
      for (var B = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], U = 0; U < 64; U++) {
        var q = c((B[U] * j + 50) / 100);
        q = Math.min(Math.max(q, 1), 255), h[ie[U]] = q;
      }
      for (var J = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], X = 0; X < 64; X++) {
        var T = c((J[X] * j + 50) / 100);
        T = Math.min(Math.max(T, 1), 255), f[ie[X]] = T;
      }
      for (var Ne = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], we = 0, ue = 0; ue < 8; ue++) for (var Ie = 0; Ie < 8; Ie++) g[we] = 1 / (h[ie[we]] * Ne[ue] * Ne[Ie] * 8), b[we] = 1 / (f[ie[we]] * Ne[ue] * Ne[Ie] * 8), we++;
    }(w < 50 ? Math.floor(5e3 / w) : Math.floor(200 - 2 * w)), o = w);
  }
  this.encode = function(w, j) {
    j && be(j), I = new Array(), F = 0, _ = 7, $(65496), $(65504), $(16), te(74), te(70), te(73), te(70), te(0), te(1), te(1), te(0), $(1), $(1), te(0), te(0), function() {
      $(65499), $(132), te(0);
      for (var Oe = 0; Oe < 64; Oe++) te(h[Oe]);
      te(1);
      for (var He = 0; He < 64; He++) te(f[He]);
    }(), function(Oe, He) {
      $(65472), $(17), te(8), $(He), $(Oe), te(3), te(1), te(17), te(0), te(2), te(17), te(1), te(3), te(17), te(1);
    }(w.width, w.height), function() {
      $(65476), $(418), te(0);
      for (var Oe = 0; Oe < 16; Oe++) te(H[Oe + 1]);
      for (var He = 0; He <= 11; He++) te(ae[He]);
      te(16);
      for (var $e = 0; $e < 16; $e++) te(de[$e + 1]);
      for (var nt = 0; nt <= 161; nt++) te(P[nt]);
      te(1);
      for (var it = 0; it < 16; it++) te(k[it + 1]);
      for (var ke = 0; ke <= 11; ke++) te(W[ke]);
      te(17);
      for (var Pe = 0; Pe < 16; Pe++) te(z[Pe + 1]);
      for (var De = 0; De <= 161; De++) te(le[De]);
    }(), $(65498), $(12), te(3), te(1), te(0), te(2), te(17), te(3), te(17), te(0), te(63), te(0);
    var B = 0, U = 0, q = 0;
    F = 0, _ = 7, this.encode.displayName = "_encode_";
    for (var J, X, T, Ne, we, ue, Ie, Ue, ge, R = w.data, Xe = w.width, qe = w.height, _e = 4 * Xe, je = 0; je < qe; ) {
      for (J = 0; J < _e; ) {
        for (we = _e * je + J, Ie = -1, Ue = 0, ge = 0; ge < 64; ge++) ue = we + (Ue = ge >> 3) * _e + (Ie = 4 * (7 & ge)), je + Ue >= qe && (ue -= _e * (je + 1 + Ue - qe)), J + Ie >= _e && (ue -= J + Ie - _e + 4), X = R[ue++], T = R[ue++], Ne = R[ue++], E[ge] = (Le[X] + Le[T + 256 >> 0] + Le[Ne + 512 >> 0] >> 16) - 128, Z[ge] = (Le[X + 768 >> 0] + Le[T + 1024 >> 0] + Le[Ne + 1280 >> 0] >> 16) - 128, se[ge] = (Le[X + 1280 >> 0] + Le[T + 1536 >> 0] + Le[Ne + 1792 >> 0] >> 16) - 128;
        B = D(E, g, B, t, a), U = D(Z, b, U, r, s), q = D(se, b, q, r, s), J += 32;
      }
      je += 8;
    }
    if (_ >= 0) {
      var Be = [];
      Be[1] = _ + 1, Be[0] = (1 << _ + 1) - 1, fe(Be);
    }
    return $(65497), new Uint8Array(I);
  }, n = n || 50, function() {
    for (var w = String.fromCharCode, j = 0; j < 256; j++) he[j] = w(j);
  }(), t = oe(H, ae), r = oe(k, W), a = oe(de, P), s = oe(z, le), function() {
    for (var w = 1, j = 2, B = 1; B <= 15; B++) {
      for (var U = w; U < j; U++) N[32767 + U] = B, y[32767 + U] = [], y[32767 + U][1] = B, y[32767 + U][0] = U;
      for (var q = -(j - 1); q <= -w; q++) N[32767 + q] = B, y[32767 + q] = [], y[32767 + q][1] = B, y[32767 + q][0] = j - 1 + q;
      w <<= 1, j <<= 1;
    }
  }(), function() {
    for (var w = 0; w < 256; w++) Le[w] = 19595 * w, Le[w + 256 >> 0] = 38470 * w, Le[w + 512 >> 0] = 7471 * w + 32768, Le[w + 768 >> 0] = -11059 * w, Le[w + 1024 >> 0] = -21709 * w, Le[w + 1280 >> 0] = 32768 * w + 8421375, Le[w + 1536 >> 0] = -27439 * w, Le[w + 1792 >> 0] = -5329 * w;
  }(), be(n);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function Hn(n, t) {
  if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Nc(n) {
  function t(H) {
    if (!H) throw Error("assert :P");
  }
  function r(H, ae, de) {
    for (var P = 0; 4 > P; P++) if (H[ae + P] != de.charCodeAt(P)) return !0;
    return !1;
  }
  function a(H, ae, de, P, k) {
    for (var W = 0; W < k; W++) H[ae + W] = de[P + W];
  }
  function s(H, ae, de, P) {
    for (var k = 0; k < P; k++) H[ae + k] = de;
  }
  function o(H) {
    return new Int32Array(H);
  }
  function c(H, ae) {
    for (var de = [], P = 0; P < H; P++) de.push(new ae());
    return de;
  }
  function h(H, ae) {
    var de = [];
    return function P(k, W, z) {
      for (var le = z[W], oe = 0; oe < le && (k.push(z.length > W + 1 ? [] : new ae()), !(z.length < W + 1)); oe++) P(k[oe], W + 1, z);
    }(de, 0, H), de;
  }
  var f = function() {
    var H = this;
    function ae(e, i) {
      for (var u = 1 << i - 1 >>> 0; e & u; ) u >>>= 1;
      return u ? (e & u - 1) + u : e;
    }
    function de(e, i, u, d, m) {
      t(!(d % u));
      do
        e[i + (d -= u)] = m;
      while (0 < d);
    }
    function P(e, i, u, d, m) {
      if (t(2328 >= m), 512 >= m) var x = o(512);
      else if ((x = o(m)) == null) return 0;
      return function(L, A, S, C, G, ne) {
        var re, Q, xe = A, pe = 1 << S, Y = o(16), K = o(16);
        for (t(G != 0), t(C != null), t(L != null), t(0 < S), Q = 0; Q < G; ++Q) {
          if (15 < C[Q]) return 0;
          ++Y[C[Q]];
        }
        if (Y[0] == G) return 0;
        for (K[1] = 0, re = 1; 15 > re; ++re) {
          if (Y[re] > 1 << re) return 0;
          K[re + 1] = K[re] + Y[re];
        }
        for (Q = 0; Q < G; ++Q) re = C[Q], 0 < C[Q] && (ne[K[re]++] = Q);
        if (K[15] == 1) return (C = new k()).g = 0, C.value = ne[0], de(L, xe, 1, pe, C), pe;
        var ve, Ae = -1, ye = pe - 1, Re = 0, Fe = 1, We = 1, Ee = 1 << S;
        for (Q = 0, re = 1, G = 2; re <= S; ++re, G <<= 1) {
          if (Fe += We <<= 1, 0 > (We -= Y[re])) return 0;
          for (; 0 < Y[re]; --Y[re]) (C = new k()).g = re, C.value = ne[Q++], de(L, xe + Re, G, Ee, C), Re = ae(Re, re);
        }
        for (re = S + 1, G = 2; 15 >= re; ++re, G <<= 1) {
          if (Fe += We <<= 1, 0 > (We -= Y[re])) return 0;
          for (; 0 < Y[re]; --Y[re]) {
            if (C = new k(), (Re & ye) != Ae) {
              for (xe += Ee, ve = 1 << (Ae = re) - S; 15 > Ae && !(0 >= (ve -= Y[Ae])); ) ++Ae, ve <<= 1;
              pe += Ee = 1 << (ve = Ae - S), L[A + (Ae = Re & ye)].g = ve + S, L[A + Ae].value = xe - A - Ae;
            }
            C.g = re - S, C.value = ne[Q++], de(L, xe + (Re >> S), G, Ee, C), Re = ae(Re, re);
          }
        }
        return Fe != 2 * K[15] - 1 ? 0 : pe;
      }(e, i, u, d, m, x);
    }
    function k() {
      this.value = this.g = 0;
    }
    function W() {
      this.value = this.g = 0;
    }
    function z() {
      this.G = c(5, k), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = c(Xt, W);
    }
    function le(e, i, u, d) {
      t(e != null), t(i != null), t(2147483648 > d), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = i, e.pa = u, e.Jd = i, e.Yc = u + d, e.Zc = 4 <= d ? u + d - 4 + 1 : u, J(e);
    }
    function oe(e, i) {
      for (var u = 0; 0 < i--; ) u |= T(e, 128) << i;
      return u;
    }
    function fe(e, i) {
      var u = oe(e, i);
      return X(e) ? -u : u;
    }
    function te(e, i, u, d) {
      var m, x = 0;
      for (t(e != null), t(i != null), t(4294967288 > d), e.Sb = d, e.Ra = 0, e.u = 0, e.h = 0, 4 < d && (d = 4), m = 0; m < d; ++m) x += i[u + m] << 8 * m;
      e.Ra = x, e.bb = d, e.oa = i, e.pa = u;
    }
    function $(e) {
      for (; 8 <= e.u && e.bb < e.Sb; ) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << _i - 8 >>> 0, ++e.bb, e.u -= 8;
      B(e) && (e.h = 1, e.u = 0);
    }
    function D(e, i) {
      if (t(0 <= i), !e.h && i <= Si) {
        var u = j(e) & Ai[i];
        return e.u += i, $(e), u;
      }
      return e.h = 1, e.u = 0;
    }
    function be() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function w() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function j(e) {
      return e.Ra >>> (e.u & _i - 1) >>> 0;
    }
    function B(e) {
      return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > _i;
    }
    function U(e, i) {
      e.u = i, e.h = B(e);
    }
    function q(e) {
      e.u >= ca && (t(e.u >= ca), $(e));
    }
    function J(e) {
      t(e != null && e.oa != null), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(e != null && e.oa != null), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1));
    }
    function X(e) {
      return oe(e, 1);
    }
    function T(e, i) {
      var u = e.Ca;
      0 > e.b && J(e);
      var d = e.b, m = u * i >>> 8, x = (e.I >>> d > m) + 0;
      for (x ? (u -= m, e.I -= m + 1 << d >>> 0) : u = m + 1, d = u, m = 0; 256 <= d; ) m += 8, d >>= 8;
      return d = 7 ^ m + fn[d], e.b -= d, e.Ca = (u << d) - 1, x;
    }
    function Ne(e, i, u) {
      e[i + 0] = u >> 24 & 255, e[i + 1] = u >> 16 & 255, e[i + 2] = u >> 8 & 255, e[i + 3] = u >> 0 & 255;
    }
    function we(e, i) {
      return e[i + 0] << 0 | e[i + 1] << 8;
    }
    function ue(e, i) {
      return we(e, i) | e[i + 2] << 16;
    }
    function Ie(e, i) {
      return we(e, i) | we(e, i + 2) << 16;
    }
    function Ue(e, i) {
      var u = 1 << i;
      return t(e != null), t(0 < i), e.X = o(u), e.X == null ? 0 : (e.Mb = 32 - i, e.Xa = i, 1);
    }
    function ge(e, i) {
      t(e != null), t(i != null), t(e.Xa == i.Xa), a(i.X, 0, e.X, 0, 1 << i.Xa);
    }
    function R() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Xe(e, i, u, d) {
      t(u != null), t(d != null);
      var m = u[0], x = d[0];
      return m == 0 && (m = (e * x + i / 2) / i), x == 0 && (x = (i * m + e / 2) / e), 0 >= m || 0 >= x ? 0 : (u[0] = m, d[0] = x, 1);
    }
    function qe(e, i) {
      return e + (1 << i) - 1 >>> i;
    }
    function _e(e, i) {
      return ((4278255360 & e) + (4278255360 & i) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & i) >>> 0 & 16711935) >>> 0;
    }
    function je(e, i) {
      H[i] = function(u, d, m, x, L, A, S) {
        var C;
        for (C = 0; C < L; ++C) {
          var G = H[e](A[S + C - 1], m, x + C);
          A[S + C] = _e(u[d + C], G);
        }
      };
    }
    function Be() {
      this.ud = this.hd = this.jd = 0;
    }
    function Oe(e, i) {
      return ((4278124286 & (e ^ i)) >>> 1) + (e & i) >>> 0;
    }
    function He(e) {
      return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0;
    }
    function $e(e, i) {
      return He(e + (e - i + 0.5 >> 1));
    }
    function nt(e, i, u) {
      return Math.abs(i - u) - Math.abs(e - u);
    }
    function it(e, i, u, d, m, x, L) {
      for (d = x[L - 1], u = 0; u < m; ++u) x[L + u] = d = _e(e[i + u], d);
    }
    function ke(e, i, u, d, m) {
      var x;
      for (x = 0; x < u; ++x) {
        var L = e[i + x], A = L >> 8 & 255, S = 16711935 & (S = (S = 16711935 & L) + ((A << 16) + A));
        d[m + x] = (4278255360 & L) + S >>> 0;
      }
    }
    function Pe(e, i) {
      i.jd = e >> 0 & 255, i.hd = e >> 8 & 255, i.ud = e >> 16 & 255;
    }
    function De(e, i, u, d, m, x) {
      var L;
      for (L = 0; L < d; ++L) {
        var A = i[u + L], S = A >>> 8, C = A, G = 255 & (G = (G = A >>> 16) + ((e.jd << 24 >> 24) * (S << 24 >> 24) >>> 5));
        C = 255 & (C = (C = C + ((e.hd << 24 >> 24) * (S << 24 >> 24) >>> 5)) + ((e.ud << 24 >> 24) * (G << 24 >> 24) >>> 5)), m[x + L] = (4278255360 & A) + (G << 16) + C;
      }
    }
    function Me(e, i, u, d, m) {
      H[i] = function(x, L, A, S, C, G, ne, re, Q) {
        for (S = ne; S < re; ++S) for (ne = 0; ne < Q; ++ne) C[G++] = m(A[d(x[L++])]);
      }, H[e] = function(x, L, A, S, C, G, ne) {
        var re = 8 >> x.b, Q = x.Ea, xe = x.K[0], pe = x.w;
        if (8 > re) for (x = (1 << x.b) - 1, pe = (1 << re) - 1; L < A; ++L) {
          var Y, K = 0;
          for (Y = 0; Y < Q; ++Y) Y & x || (K = d(S[C++])), G[ne++] = m(xe[K & pe]), K >>= re;
        }
        else H["VP8LMapColor" + u](S, C, xe, pe, G, ne, L, A, Q);
      };
    }
    function Ce(e, i, u, d, m) {
      for (u = i + u; i < u; ) {
        var x = e[i++];
        d[m++] = x >> 16 & 255, d[m++] = x >> 8 & 255, d[m++] = x >> 0 & 255;
      }
    }
    function Tt(e, i, u, d, m) {
      for (u = i + u; i < u; ) {
        var x = e[i++];
        d[m++] = x >> 16 & 255, d[m++] = x >> 8 & 255, d[m++] = x >> 0 & 255, d[m++] = x >> 24 & 255;
      }
    }
    function at(e, i, u, d, m) {
      for (u = i + u; i < u; ) {
        var x = (L = e[i++]) >> 16 & 240 | L >> 12 & 15, L = L >> 0 & 240 | L >> 28 & 15;
        d[m++] = x, d[m++] = L;
      }
    }
    function Kt(e, i, u, d, m) {
      for (u = i + u; i < u; ) {
        var x = (L = e[i++]) >> 16 & 248 | L >> 13 & 7, L = L >> 5 & 224 | L >> 3 & 31;
        d[m++] = x, d[m++] = L;
      }
    }
    function dt(e, i, u, d, m) {
      for (u = i + u; i < u; ) {
        var x = e[i++];
        d[m++] = x >> 0 & 255, d[m++] = x >> 8 & 255, d[m++] = x >> 16 & 255;
      }
    }
    function xt(e, i, u, d, m, x) {
      if (x == 0) for (u = i + u; i < u; ) Ne(d, ((x = e[i++])[0] >> 24 | x[1] >> 8 & 65280 | x[2] << 8 & 16711680 | x[3] << 24) >>> 0), m += 32;
      else a(d, m, e, i, u);
    }
    function Yn(e, i) {
      H[i][0] = H[e + "0"], H[i][1] = H[e + "1"], H[i][2] = H[e + "2"], H[i][3] = H[e + "3"], H[i][4] = H[e + "4"], H[i][5] = H[e + "5"], H[i][6] = H[e + "6"], H[i][7] = H[e + "7"], H[i][8] = H[e + "8"], H[i][9] = H[e + "9"], H[i][10] = H[e + "10"], H[i][11] = H[e + "11"], H[i][12] = H[e + "12"], H[i][13] = H[e + "13"], H[i][14] = H[e + "0"], H[i][15] = H[e + "0"];
    }
    function ht(e) {
      return e == Us || e == Hs || e == ro || e == Vs;
    }
    function Hr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function _t() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function Fn() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Hr(), this.f.kb = new _t(), this.sd = null;
    }
    function lr() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function Pt() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Ze(e) {
      return alert("todo:WebPSamplerProcessPlane"), e.T;
    }
    function ft(e, i) {
      var u = e.T, d = i.ba.f.RGBA, m = d.eb, x = d.fb + e.ka * d.A, L = Cn[i.ba.S], A = e.y, S = e.O, C = e.f, G = e.N, ne = e.ea, re = e.W, Q = i.cc, xe = i.dc, pe = i.Mc, Y = i.Nc, K = e.ka, ve = e.ka + e.T, Ae = e.U, ye = Ae + 1 >> 1;
      for (K == 0 ? L(A, S, null, null, C, G, ne, re, C, G, ne, re, m, x, null, null, Ae) : (L(i.ec, i.fc, A, S, Q, xe, pe, Y, C, G, ne, re, m, x - d.A, m, x, Ae), ++u); K + 2 < ve; K += 2) Q = C, xe = G, pe = ne, Y = re, G += e.Rc, re += e.Rc, x += 2 * d.A, L(A, (S += 2 * e.fa) - e.fa, A, S, Q, xe, pe, Y, C, G, ne, re, m, x - d.A, m, x, Ae);
      return S += e.fa, e.j + ve < e.o ? (a(i.ec, i.fc, A, S, Ae), a(i.cc, i.dc, C, G, ye), a(i.Mc, i.Nc, ne, re, ye), u--) : 1 & ve || L(A, S, null, null, C, G, ne, re, C, G, ne, re, m, x + d.A, null, null, Ae), u;
    }
    function Vr(e, i, u) {
      var d = e.F, m = [e.J];
      if (d != null) {
        var x = e.U, L = i.ba.S, A = L == no || L == ro;
        i = i.ba.f.RGBA;
        var S = [0], C = e.ka;
        S[0] = e.T, e.Kb && (C == 0 ? --S[0] : (--C, m[0] -= e.width), e.j + e.ka + e.T == e.o && (S[0] = e.o - e.j - C));
        var G = i.eb;
        C = i.fb + C * i.A, e = Nt(d, m[0], e.width, x, S, G, C + (A ? 0 : 3), i.A), t(u == S), e && ht(L) && In(G, C, A, x, S, i.A);
      }
      return 0;
    }
    function Jt(e) {
      var i = e.ma, u = i.ba.S, d = 11 > u, m = u == eo || u == to || u == no || u == zs || u == 12 || ht(u);
      if (i.memory = null, i.Ib = null, i.Jb = null, i.Nd = null, !sa(i.Oa, e, m ? 11 : 12)) return 0;
      if (m && ht(u) && Se(), e.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (i.Ib = Ze, e.Kb) {
            if (u = e.U + 1 >> 1, i.memory = o(e.U + 2 * u), i.memory == null) return 0;
            i.ec = i.memory, i.fc = 0, i.cc = i.ec, i.dc = i.fc + e.U, i.Mc = i.cc, i.Nc = i.dc + u, i.Ib = ft, Se();
          }
        } else alert("todo:EmitYUV");
        m && (i.Jb = Vr, d && ee());
      }
      if (d && !Bl) {
        for (e = 0; 256 > e; ++e) mu[e] = 89858 * (e - 128) + ao >> io, yu[e] = -22014 * (e - 128) + ao, bu[e] = -45773 * (e - 128), vu[e] = 113618 * (e - 128) + ao >> io;
        for (e = ma; e < Ys; ++e) i = 76283 * (e - 16) + ao >> io, wu[e - ma] = yn(i, 255), xu[e - ma] = yn(i + 8 >> 4, 15);
        Bl = 1;
      }
      return 1;
    }
    function Jn(e) {
      var i = e.ma, u = e.U, d = e.T;
      return t(!(1 & e.ka)), 0 >= u || 0 >= d ? 0 : (u = i.Ib(e, i), i.Jb != null && i.Jb(e, i, u), i.Dc += u, 1);
    }
    function Xn(e) {
      e.ma.memory = null;
    }
    function Ge(e, i, u, d) {
      return D(e, 8) != 47 ? 0 : (i[0] = D(e, 14) + 1, u[0] = D(e, 14) + 1, d[0] = D(e, 1), D(e, 3) != 0 ? 0 : !e.h);
    }
    function On(e, i) {
      if (4 > e) return e + 1;
      var u = e - 2 >> 1;
      return (2 + (1 & e) << u) + D(i, u) + 1;
    }
    function $n(e, i) {
      return 120 < i ? i - 120 : 1 <= (u = ((u = nu[i - 1]) >> 4) * e + (8 - (15 & u))) ? u : 1;
      var u;
    }
    function un(e, i, u) {
      var d = j(u), m = e[i += 255 & d].g - 8;
      return 0 < m && (U(u, u.u + 8), d = j(u), i += e[i].value, i += d & (1 << m) - 1), U(u, u.u + e[i].g), e[i].value;
    }
    function Ut(e, i, u) {
      return u.g += e.g, u.value += e.value << i >>> 0, t(8 >= u.g), e.g;
    }
    function Rt(e, i, u) {
      var d = e.xc;
      return t((i = d == 0 ? 0 : e.vc[e.md * (u >> d) + (i >> d)]) < e.Wb), e.Ya[i];
    }
    function bn(e, i, u, d) {
      var m = e.ab, x = e.c * i, L = e.C;
      i = L + i;
      var A = u, S = d;
      for (d = e.Ta, u = e.Ua; 0 < m--; ) {
        var C = e.gc[m], G = L, ne = i, re = A, Q = S, xe = (S = d, A = u, C.Ea);
        switch (t(G < ne), t(ne <= C.nc), C.hc) {
          case 2:
            Ya(re, Q, (ne - G) * xe, S, A);
            break;
          case 0:
            var pe = G, Y = ne, K = S, ve = A, Ae = (Ee = C).Ea;
            pe == 0 && (Ds(re, Q, null, null, 1, K, ve), it(re, Q + 1, 0, 0, Ae - 1, K, ve + 1), Q += Ae, ve += Ae, ++pe);
            for (var ye = 1 << Ee.b, Re = ye - 1, Fe = qe(Ae, Ee.b), We = Ee.K, Ee = Ee.w + (pe >> Ee.b) * Fe; pe < Y; ) {
              var ut = We, pt = Ee, ct = 1;
              for (ua(re, Q, K, ve - Ae, 1, K, ve); ct < Ae; ) {
                var ot = (ct & ~Re) + ye;
                ot > Ae && (ot = Ae), (0, Nr[ut[pt++] >> 8 & 15])(re, Q + +ct, K, ve + ct - Ae, ot - ct, K, ve + ct), ct = ot;
              }
              Q += Ae, ve += Ae, ++pe & Re || (Ee += Fe);
            }
            ne != C.nc && a(S, A - xe, S, A + (ne - G - 1) * xe, xe);
            break;
          case 1:
            for (xe = re, Y = Q, Ae = (re = C.Ea) - (ve = re & ~(K = (Q = 1 << C.b) - 1)), pe = qe(re, C.b), ye = C.K, C = C.w + (G >> C.b) * pe; G < ne; ) {
              for (Re = ye, Fe = C, We = new Be(), Ee = Y + ve, ut = Y + re; Y < Ee; ) Pe(Re[Fe++], We), $r(We, xe, Y, Q, S, A), Y += Q, A += Q;
              Y < ut && (Pe(Re[Fe++], We), $r(We, xe, Y, Ae, S, A), Y += Ae, A += Ae), ++G & K || (C += pe);
            }
            break;
          case 3:
            if (re == S && Q == A && 0 < C.b) {
              for (Y = S, re = xe = A + (ne - G) * xe - (ve = (ne - G) * qe(C.Ea, C.b)), Q = S, K = A, pe = [], ve = (Ae = ve) - 1; 0 <= ve; --ve) pe[ve] = Q[K + ve];
              for (ve = Ae - 1; 0 <= ve; --ve) Y[re + ve] = pe[ve];
              Sn(C, G, ne, S, xe, S, A);
            } else Sn(C, G, ne, re, Q, S, A);
        }
        A = d, S = u;
      }
      S != u && a(d, u, A, S, x);
    }
    function si(e, i) {
      var u = e.V, d = e.Ba + e.c * e.C, m = i - e.C;
      if (t(i <= e.l.o), t(16 >= m), 0 < m) {
        var x = e.l, L = e.Ta, A = e.Ua, S = x.width;
        if (bn(e, m, u, d), m = A = [A], t((u = e.C) < (d = i)), t(x.v < x.va), d > x.o && (d = x.o), u < x.j) {
          var C = x.j - u;
          u = x.j, m[0] += C * S;
        }
        if (u >= d ? u = 0 : (m[0] += 4 * x.v, x.ka = u - x.j, x.U = x.va - x.v, x.T = d - u, u = 1), u) {
          if (A = A[0], 11 > (u = e.ca).S) {
            var G = u.f.RGBA, ne = (d = u.S, m = x.U, x = x.T, C = G.eb, G.A), re = x;
            for (G = G.fb + e.Ma * G.A; 0 < re--; ) {
              var Q = L, xe = A, pe = m, Y = C, K = G;
              switch (d) {
                case Qa:
                  dn(Q, xe, pe, Y, K);
                  break;
                case eo:
                  sn(Q, xe, pe, Y, K);
                  break;
                case Us:
                  sn(Q, xe, pe, Y, K), In(Y, K, 0, pe, 1, 0);
                  break;
                case Pl:
                  dr(Q, xe, pe, Y, K);
                  break;
                case to:
                  xt(Q, xe, pe, Y, K, 1);
                  break;
                case Hs:
                  xt(Q, xe, pe, Y, K, 1), In(Y, K, 0, pe, 1, 0);
                  break;
                case no:
                  xt(Q, xe, pe, Y, K, 0);
                  break;
                case ro:
                  xt(Q, xe, pe, Y, K, 0), In(Y, K, 1, pe, 1, 0);
                  break;
                case zs:
                  Ar(Q, xe, pe, Y, K);
                  break;
                case Vs:
                  Ar(Q, xe, pe, Y, K), Lt(Y, K, pe, 1, 0);
                  break;
                case Il:
                  fr(Q, xe, pe, Y, K);
                  break;
                default:
                  t(0);
              }
              A += S, G += ne;
            }
            e.Ma += x;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(e.Ma <= u.height);
        }
      }
      e.C = i, t(e.C <= e.i);
    }
    function cr(e) {
      var i;
      if (0 < e.ua) return 0;
      for (i = 0; i < e.Wb; ++i) {
        var u = e.Ya[i].G, d = e.Ya[i].H;
        if (0 < u[1][d[1] + 0].g || 0 < u[2][d[2] + 0].g || 0 < u[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function Mn(e, i, u, d, m, x) {
      if (e.Z != 0) {
        var L = e.qd, A = e.rd;
        for (t(Ir[e.Z] != null); i < u; ++i) Ir[e.Z](L, A, d, m, d, m, x), L = d, A = m, m += x;
        e.qd = L, e.rd = A;
      }
    }
    function En(e, i) {
      var u = e.l.ma, d = u.Z == 0 || u.Z == 1 ? e.l.j : e.C;
      if (d = e.C < d ? d : e.C, t(i <= e.l.o), i > d) {
        var m = e.l.width, x = u.ca, L = u.tb + m * d, A = e.V, S = e.Ba + e.c * d, C = e.gc;
        t(e.ab == 1), t(C[0].hc == 3), Ja(C[0], d, i, A, S, x, L), Mn(u, d, i, x, L, m);
      }
      e.C = e.Ma = i;
    }
    function Bn(e, i, u, d, m, x, L) {
      var A = e.$ / d, S = e.$ % d, C = e.m, G = e.s, ne = u + e.$, re = ne;
      m = u + d * m;
      var Q = u + d * x, xe = 280 + G.ua, pe = e.Pb ? A : 16777216, Y = 0 < G.ua ? G.Wa : null, K = G.wc, ve = ne < Q ? Rt(G, S, A) : null;
      t(e.C < x), t(Q <= m);
      var Ae = !1;
      e: for (; ; ) {
        for (; Ae || ne < Q; ) {
          var ye = 0;
          if (A >= pe) {
            var Re = ne - u;
            t((pe = e).Pb), pe.wd = pe.m, pe.xd = Re, 0 < pe.s.ua && ge(pe.s.Wa, pe.s.vb), pe = A + iu;
          }
          if (S & K || (ve = Rt(G, S, A)), t(ve != null), ve.Qb && (i[ne] = ve.qb, Ae = !0), !Ae) if (q(C), ve.jc) {
            ye = C, Re = i;
            var Fe = ne, We = ve.pd[j(ye) & Xt - 1];
            t(ve.jc), 256 > We.g ? (U(ye, ye.u + We.g), Re[Fe] = We.value, ye = 0) : (U(ye, ye.u + We.g - 256), t(256 <= We.value), ye = We.value), ye == 0 && (Ae = !0);
          } else ye = un(ve.G[0], ve.H[0], C);
          if (C.h) break;
          if (Ae || 256 > ye) {
            if (!Ae) if (ve.nd) i[ne] = (ve.qb | ye << 8) >>> 0;
            else {
              if (q(C), Ae = un(ve.G[1], ve.H[1], C), q(C), Re = un(ve.G[2], ve.H[2], C), Fe = un(ve.G[3], ve.H[3], C), C.h) break;
              i[ne] = (Fe << 24 | Ae << 16 | ye << 8 | Re) >>> 0;
            }
            if (Ae = !1, ++ne, ++S >= d && (S = 0, ++A, L != null && A <= x && !(A % 16) && L(e, A), Y != null)) for (; re < ne; ) ye = i[re++], Y.X[(506832829 * ye & 4294967295) >>> Y.Mb] = ye;
          } else if (280 > ye) {
            if (ye = On(ye - 256, C), Re = un(ve.G[4], ve.H[4], C), q(C), Re = $n(d, Re = On(Re, C)), C.h) break;
            if (ne - u < Re || m - ne < ye) break e;
            for (Fe = 0; Fe < ye; ++Fe) i[ne + Fe] = i[ne + Fe - Re];
            for (ne += ye, S += ye; S >= d; ) S -= d, ++A, L != null && A <= x && !(A % 16) && L(e, A);
            if (t(ne <= m), S & K && (ve = Rt(G, S, A)), Y != null) for (; re < ne; ) ye = i[re++], Y.X[(506832829 * ye & 4294967295) >>> Y.Mb] = ye;
          } else {
            if (!(ye < xe)) break e;
            for (Ae = ye - 280, t(Y != null); re < ne; ) ye = i[re++], Y.X[(506832829 * ye & 4294967295) >>> Y.Mb] = ye;
            ye = ne, t(!(Ae >>> (Re = Y).Xa)), i[ye] = Re.X[Ae], Ae = !0;
          }
          Ae || t(C.h == B(C));
        }
        if (e.Pb && C.h && ne < m) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && ge(e.s.vb, e.s.Wa);
        else {
          if (C.h) break e;
          L != null && L(e, A > x ? x : A), e.a = 0, e.$ = ne - u;
        }
        return 1;
      }
      return e.a = 3, 0;
    }
    function Kn(e) {
      t(e != null), e.vc = null, e.yc = null, e.Ya = null;
      var i = e.Wa;
      i != null && (i.X = null), e.vb = null, t(e != null);
    }
    function An() {
      var e = new Rs();
      return e == null ? null : (e.a = 0, e.xb = jl, Yn("Predictor", "VP8LPredictors"), Yn("Predictor", "VP8LPredictors_C"), Yn("PredictorAdd", "VP8LPredictorsAdd"), Yn("PredictorAdd", "VP8LPredictorsAdd_C"), Ya = ke, $r = De, dn = Ce, sn = Tt, Ar = at, fr = Kt, dr = dt, H.VP8LMapColor32b = Pi, H.VP8LMapColor8b = Xa, e);
    }
    function Zn(e, i, u, d, m) {
      var x = 1, L = [e], A = [i], S = d.m, C = d.s, G = null, ne = 0;
      e: for (; ; ) {
        if (u) for (; x && D(S, 1); ) {
          var re = L, Q = A, xe = d, pe = 1, Y = xe.m, K = xe.gc[xe.ab], ve = D(Y, 2);
          if (xe.Oc & 1 << ve) x = 0;
          else {
            switch (xe.Oc |= 1 << ve, K.hc = ve, K.Ea = re[0], K.nc = Q[0], K.K = [null], ++xe.ab, t(4 >= xe.ab), ve) {
              case 0:
              case 1:
                K.b = D(Y, 3) + 2, pe = Zn(qe(K.Ea, K.b), qe(K.nc, K.b), 0, xe, K.K), K.K = K.K[0];
                break;
              case 3:
                var Ae, ye = D(Y, 8) + 1, Re = 16 < ye ? 0 : 4 < ye ? 1 : 2 < ye ? 2 : 3;
                if (re[0] = qe(K.Ea, Re), K.b = Re, Ae = pe = Zn(ye, 1, 0, xe, K.K)) {
                  var Fe, We = ye, Ee = K, ut = 1 << (8 >> Ee.b), pt = o(ut);
                  if (pt == null) Ae = 0;
                  else {
                    var ct = Ee.K[0], ot = Ee.w;
                    for (pt[0] = Ee.K[0][0], Fe = 1; Fe < 1 * We; ++Fe) pt[Fe] = _e(ct[ot + Fe], pt[Fe - 1]);
                    for (; Fe < 4 * ut; ++Fe) pt[Fe] = 0;
                    Ee.K[0] = null, Ee.K[0] = pt, Ae = 1;
                  }
                }
                pe = Ae;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            x = pe;
          }
        }
        if (L = L[0], A = A[0], x && D(S, 1) && !(x = 1 <= (ne = D(S, 4)) && 11 >= ne)) {
          d.a = 3;
          break e;
        }
        var yt;
        if (yt = x) t: {
          var vt, rt, qt, pn = d, zt = L, gn = A, gt = ne, xn = u, Ln = pn.m, Wt = pn.s, $t = [null], cn = 1, jn = 0, nr = ru[gt];
          n: for (; ; ) {
            if (xn && D(Ln, 1)) {
              var Gt = D(Ln, 3) + 2, vr = qe(zt, Gt), ti = qe(gn, Gt), Fi = vr * ti;
              if (!Zn(vr, ti, 0, pn, $t)) break n;
              for ($t = $t[0], Wt.xc = Gt, vt = 0; vt < Fi; ++vt) {
                var kr = $t[vt] >> 8 & 65535;
                $t[vt] = kr, kr >= cn && (cn = kr + 1);
              }
            }
            if (Ln.h) break n;
            for (rt = 0; 5 > rt; ++rt) {
              var kt = kl[rt];
              !rt && 0 < gt && (kt += 1 << gt), jn < kt && (jn = kt);
            }
            var Js = c(cn * nr, k), Dl = cn, ql = c(Dl, z);
            if (ql == null) var so = null;
            else t(65536 >= Dl), so = ql;
            var va = o(jn);
            if (so == null || va == null || Js == null) {
              pn.a = 1;
              break n;
            }
            var lo = Js;
            for (vt = qt = 0; vt < cn; ++vt) {
              var zn = so[vt], Oi = zn.G, Mi = zn.H, zl = 0, co = 1, Ul = 0;
              for (rt = 0; 5 > rt; ++rt) {
                kt = kl[rt], Oi[rt] = lo, Mi[rt] = qt, !rt && 0 < gt && (kt += 1 << gt);
                i: {
                  var uo, Xs = kt, ho = pn, ba = va, Au = lo, Su = qt, $s = 0, Cr = ho.m, _u = D(Cr, 1);
                  if (s(ba, 0, 0, Xs), _u) {
                    var Pu = D(Cr, 1) + 1, Iu = D(Cr, 1), Hl = D(Cr, Iu == 0 ? 1 : 8);
                    ba[Hl] = 1, Pu == 2 && (ba[Hl = D(Cr, 8)] = 1);
                    var fo = 1;
                  } else {
                    var Vl = o(19), Wl = D(Cr, 4) + 4;
                    if (19 < Wl) {
                      ho.a = 3;
                      var po = 0;
                      break i;
                    }
                    for (uo = 0; uo < Wl; ++uo) Vl[tu[uo]] = D(Cr, 3);
                    var Ks = void 0, ya = void 0, Gl = ho, ku = Vl, go = Xs, Yl = ba, Zs = 0, jr = Gl.m, Jl = 8, Xl = c(128, k);
                    r: for (; P(Xl, 0, 7, ku, 19); ) {
                      if (D(jr, 1)) {
                        var Cu = 2 + 2 * D(jr, 3);
                        if ((Ks = 2 + D(jr, Cu)) > go) break r;
                      } else Ks = go;
                      for (ya = 0; ya < go && Ks--; ) {
                        q(jr);
                        var $l = Xl[0 + (127 & j(jr))];
                        U(jr, jr.u + $l.g);
                        var Ei = $l.value;
                        if (16 > Ei) Yl[ya++] = Ei, Ei != 0 && (Jl = Ei);
                        else {
                          var ju = Ei == 16, Kl = Ei - 16, Fu = Qc[Kl], Zl = D(jr, Zc[Kl]) + Fu;
                          if (ya + Zl > go) break r;
                          for (var Ou = ju ? Jl : 0; 0 < Zl--; ) Yl[ya++] = Ou;
                        }
                      }
                      Zs = 1;
                      break r;
                    }
                    Zs || (Gl.a = 3), fo = Zs;
                  }
                  (fo = fo && !Cr.h) && ($s = P(Au, Su, 8, ba, Xs)), fo && $s != 0 ? po = $s : (ho.a = 3, po = 0);
                }
                if (po == 0) break n;
                if (co && eu[rt] == 1 && (co = lo[qt].g == 0), zl += lo[qt].g, qt += po, 3 >= rt) {
                  var wa, Qs = va[0];
                  for (wa = 1; wa < kt; ++wa) va[wa] > Qs && (Qs = va[wa]);
                  Ul += Qs;
                }
              }
              if (zn.nd = co, zn.Qb = 0, co && (zn.qb = (Oi[3][Mi[3] + 0].value << 24 | Oi[1][Mi[1] + 0].value << 16 | Oi[2][Mi[2] + 0].value) >>> 0, zl == 0 && 256 > Oi[0][Mi[0] + 0].value && (zn.Qb = 1, zn.qb += Oi[0][Mi[0] + 0].value << 8)), zn.jc = !zn.Qb && 6 > Ul, zn.jc) {
                var mo, br = zn;
                for (mo = 0; mo < Xt; ++mo) {
                  var Fr = mo, Or = br.pd[Fr], vo = br.G[0][br.H[0] + Fr];
                  256 <= vo.value ? (Or.g = vo.g + 256, Or.value = vo.value) : (Or.g = 0, Or.value = 0, Fr >>= Ut(vo, 8, Or), Fr >>= Ut(br.G[1][br.H[1] + Fr], 16, Or), Fr >>= Ut(br.G[2][br.H[2] + Fr], 0, Or), Ut(br.G[3][br.H[3] + Fr], 24, Or));
                }
              }
            }
            Wt.vc = $t, Wt.Wb = cn, Wt.Ya = so, Wt.yc = Js, yt = 1;
            break t;
          }
          yt = 0;
        }
        if (!(x = yt)) {
          d.a = 3;
          break e;
        }
        if (0 < ne) {
          if (C.ua = 1 << ne, !Ue(C.Wa, ne)) {
            d.a = 1, x = 0;
            break e;
          }
        } else C.ua = 0;
        var el = d, Ql = L, Mu = A, tl = el.s, nl = tl.xc;
        if (el.c = Ql, el.i = Mu, tl.md = qe(Ql, nl), tl.wc = nl == 0 ? -1 : (1 << nl) - 1, u) {
          d.xb = hu;
          break e;
        }
        if ((G = o(L * A)) == null) {
          d.a = 1, x = 0;
          break e;
        }
        x = (x = Bn(d, G, 0, L, A, A, null)) && !S.h;
        break e;
      }
      return x ? (m != null ? m[0] = G : (t(G == null), t(u)), d.$ = 0, u || Kn(C)) : Kn(C), x;
    }
    function Wr(e, i) {
      var u = e.c * e.i, d = u + i + 16 * i;
      return t(e.c <= i), e.V = o(d), e.V == null ? (e.Ta = null, e.Ua = 0, e.a = 1, 0) : (e.Ta = e.V, e.Ua = e.Ba + u + i, 1);
    }
    function li(e, i) {
      var u = e.C, d = i - u, m = e.V, x = e.Ba + e.c * u;
      for (t(i <= e.l.o); 0 < d; ) {
        var L = 16 < d ? 16 : d, A = e.l.ma, S = e.l.width, C = S * L, G = A.ca, ne = A.tb + S * u, re = e.Ta, Q = e.Ua;
        bn(e, L, m, x), Ot(re, Q, G, ne, C), Mn(A, u, u + L, G, ne, S), d -= L, m += L * e.c, u += L;
      }
      t(u == i), e.C = e.Ma = i;
    }
    function ci() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function ui() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function hi() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function Pa() {
      this.Yb = function() {
        var e = [];
        return function i(u, d, m) {
          for (var x = m[d], L = 0; L < x && (u.push(m.length > d + 1 ? [] : 0), !(m.length < d + 1)); L++) i(u[L], d + 1, m);
        }(e, 0, [3, 11]), e;
      }();
    }
    function gs() {
      this.jb = o(3), this.Wc = h([4, 8], Pa), this.Xc = h([4, 17], Pa);
    }
    function ms() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function fi() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Ia() {
      this.Na = this.la = 0;
    }
    function vs() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Wi() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function bs() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new fi()), this.Y = 0, this.ya = Array(new Wi()), this.aa = 0, this.l = new di();
    }
    function ka() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function ys() {
      this.cb = this.a = 0, this.sc = "", this.m = new be(), this.Od = new ci(), this.Kc = new ui(), this.ed = new ms(), this.Qa = new hi(), this.Ic = this.$c = this.Aa = 0, this.D = new bs(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = c(8, be), this.ia = 0, this.pb = c(4, vs), this.Pa = new gs(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new ka()), this.Hd = 0, this.rb = Array(new Ia()), this.sb = 0, this.wa = Array(new fi()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Wi()), this.L = this.aa = 0, this.gd = h([4, 2], fi), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function di() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function ws() {
      var e = new ys();
      return e != null && (e.a = 0, e.sc = "OK", e.cb = 0, e.Xb = 0, ga || (ga = Fa)), e;
    }
    function jt(e, i, u) {
      return e.a == 0 && (e.a = i, e.sc = u, e.cb = 0), 0;
    }
    function Ca(e, i, u) {
      return 3 <= u && e[i + 0] == 157 && e[i + 1] == 1 && e[i + 2] == 42;
    }
    function ja(e, i) {
      if (e == null) return 0;
      if (e.a = 0, e.sc = "OK", i == null) return jt(e, 2, "null VP8Io passed to VP8GetHeaders()");
      var u = i.data, d = i.w, m = i.ha;
      if (4 > m) return jt(e, 7, "Truncated header.");
      var x = u[d + 0] | u[d + 1] << 8 | u[d + 2] << 16, L = e.Od;
      if (L.Rb = !(1 & x), L.td = x >> 1 & 7, L.yd = x >> 4 & 1, L.ub = x >> 5, 3 < L.td) return jt(e, 3, "Incorrect keyframe parameters.");
      if (!L.yd) return jt(e, 4, "Frame not displayable.");
      d += 3, m -= 3;
      var A = e.Kc;
      if (L.Rb) {
        if (7 > m) return jt(e, 7, "cannot parse picture header");
        if (!Ca(u, d, m)) return jt(e, 3, "Bad code word");
        A.c = 16383 & (u[d + 4] << 8 | u[d + 3]), A.Td = u[d + 4] >> 6, A.i = 16383 & (u[d + 6] << 8 | u[d + 5]), A.Ud = u[d + 6] >> 6, d += 7, m -= 7, e.za = A.c + 15 >> 4, e.Ub = A.i + 15 >> 4, i.width = A.c, i.height = A.i, i.Da = 0, i.j = 0, i.v = 0, i.va = i.width, i.o = i.height, i.da = 0, i.ib = i.width, i.hb = i.height, i.U = i.width, i.T = i.height, s((x = e.Pa).jb, 0, 255, x.jb.length), t((x = e.Qa) != null), x.Cb = 0, x.Bb = 0, x.Fb = 1, s(x.Zb, 0, 0, x.Zb.length), s(x.Lb, 0, 0, x.Lb);
      }
      if (L.ub > m) return jt(e, 7, "bad partition length");
      le(x = e.m, u, d, L.ub), d += L.ub, m -= L.ub, L.Rb && (A.Ld = X(x), A.Kd = X(x)), A = e.Qa;
      var S, C = e.Pa;
      if (t(x != null), t(A != null), A.Cb = X(x), A.Cb) {
        if (A.Bb = X(x), X(x)) {
          for (A.Fb = X(x), S = 0; 4 > S; ++S) A.Zb[S] = X(x) ? fe(x, 7) : 0;
          for (S = 0; 4 > S; ++S) A.Lb[S] = X(x) ? fe(x, 6) : 0;
        }
        if (A.Bb) for (S = 0; 3 > S; ++S) C.jb[S] = X(x) ? oe(x, 8) : 255;
      } else A.Bb = 0;
      if (x.Ka) return jt(e, 3, "cannot parse segment header");
      if ((A = e.ed).zd = X(x), A.Tb = oe(x, 6), A.wb = oe(x, 3), A.Pc = X(x), A.Pc && X(x)) {
        for (C = 0; 4 > C; ++C) X(x) && (A.vd[C] = fe(x, 6));
        for (C = 0; 4 > C; ++C) X(x) && (A.od[C] = fe(x, 6));
      }
      if (e.L = A.Tb == 0 ? 0 : A.zd ? 1 : 2, x.Ka) return jt(e, 3, "cannot parse filter header");
      var G = m;
      if (m = S = d, d = S + G, A = G, e.Xb = (1 << oe(e.m, 2)) - 1, G < 3 * (C = e.Xb)) u = 7;
      else {
        for (S += 3 * C, A -= 3 * C, G = 0; G < C; ++G) {
          var ne = u[m + 0] | u[m + 1] << 8 | u[m + 2] << 16;
          ne > A && (ne = A), le(e.Jc[+G], u, S, ne), S += ne, A -= ne, m += 3;
        }
        le(e.Jc[+C], u, S, A), u = S < d ? 0 : 5;
      }
      if (u != 0) return jt(e, u, "cannot parse partitions");
      for (u = oe(S = e.m, 7), m = X(S) ? fe(S, 4) : 0, d = X(S) ? fe(S, 4) : 0, A = X(S) ? fe(S, 4) : 0, C = X(S) ? fe(S, 4) : 0, S = X(S) ? fe(S, 4) : 0, G = e.Qa, ne = 0; 4 > ne; ++ne) {
        if (G.Cb) {
          var re = G.Zb[ne];
          G.Fb || (re += u);
        } else {
          if (0 < ne) {
            e.pb[ne] = e.pb[0];
            continue;
          }
          re = u;
        }
        var Q = e.pb[ne];
        Q.Sc[0] = Ws[yn(re + m, 127)], Q.Sc[1] = Gs[yn(re + 0, 127)], Q.Eb[0] = 2 * Ws[yn(re + d, 127)], Q.Eb[1] = 101581 * Gs[yn(re + A, 127)] >> 16, 8 > Q.Eb[1] && (Q.Eb[1] = 8), Q.Qc[0] = Ws[yn(re + C, 117)], Q.Qc[1] = Gs[yn(re + S, 127)], Q.lc = re + S;
      }
      if (!L.Rb) return jt(e, 4, "Not a key frame.");
      for (X(x), L = e.Pa, u = 0; 4 > u; ++u) {
        for (m = 0; 8 > m; ++m) for (d = 0; 3 > d; ++d) for (A = 0; 11 > A; ++A) C = T(x, cu[u][m][d][A]) ? oe(x, 8) : su[u][m][d][A], L.Wc[u][m].Yb[d][A] = C;
        for (m = 0; 17 > m; ++m) L.Xc[u][m] = L.Wc[u][uu[m]];
      }
      return e.kc = X(x), e.kc && (e.Bd = oe(x, 8)), e.cb = 1;
    }
    function Fa(e, i, u, d, m, x, L) {
      var A = i[m].Yb[u];
      for (u = 0; 16 > m; ++m) {
        if (!T(e, A[u + 0])) return m;
        for (; !T(e, A[u + 1]); ) if (A = i[++m].Yb[0], u = 0, m == 16) return 16;
        var S = i[m + 1].Yb;
        if (T(e, A[u + 2])) {
          var C = e, G = 0;
          if (T(C, (re = A)[(ne = u) + 3])) if (T(C, re[ne + 6])) {
            for (A = 0, ne = 2 * (G = T(C, re[ne + 8])) + (re = T(C, re[ne + 9 + G])), G = 0, re = au[ne]; re[A]; ++A) G += G + T(C, re[A]);
            G += 3 + (8 << ne);
          } else T(C, re[ne + 7]) ? (G = 7 + 2 * T(C, 165), G += T(C, 145)) : G = 5 + T(C, 159);
          else G = T(C, re[ne + 4]) ? 3 + T(C, re[ne + 5]) : 2;
          A = S[2];
        } else G = 1, A = S[1];
        S = L + ou[m], 0 > (C = e).b && J(C);
        var ne, re = C.b, Q = (ne = C.Ca >> 1) - (C.I >> re) >> 31;
        --C.b, C.Ca += Q, C.Ca |= 1, C.I -= (ne + 1 & Q) << re, x[S] = ((G ^ Q) - Q) * d[(0 < m) + 0];
      }
      return 16;
    }
    function Gi(e) {
      var i = e.rb[e.sb - 1];
      i.la = 0, i.Na = 0, s(e.zc, 0, 0, e.zc.length), e.ja = 0;
    }
    function xs(e, i) {
      if (e == null) return 0;
      if (i == null) return jt(e, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!e.cb && !ja(e, i)) return 0;
      if (t(e.cb), i.ac == null || i.ac(i)) {
        i.ob && (e.L = 0);
        var u = oo[e.L];
        if (e.L == 2 ? (e.yb = 0, e.zb = 0) : (e.yb = i.v - u >> 4, e.zb = i.j - u >> 4, 0 > e.yb && (e.yb = 0), 0 > e.zb && (e.zb = 0)), e.Va = i.o + 15 + u >> 4, e.Hb = i.va + 15 + u >> 4, e.Hb > e.za && (e.Hb = e.za), e.Va > e.Ub && (e.Va = e.Ub), 0 < e.L) {
          var d = e.ed;
          for (u = 0; 4 > u; ++u) {
            var m;
            if (e.Qa.Cb) {
              var x = e.Qa.Lb[u];
              e.Qa.Fb || (x += d.Tb);
            } else x = d.Tb;
            for (m = 0; 1 >= m; ++m) {
              var L = e.gd[u][m], A = x;
              if (d.Pc && (A += d.vd[0], m && (A += d.od[0])), 0 < (A = 0 > A ? 0 : 63 < A ? 63 : A)) {
                var S = A;
                0 < d.wb && (S = 4 < d.wb ? S >> 2 : S >> 1) > 9 - d.wb && (S = 9 - d.wb), 1 > S && (S = 1), L.dd = S, L.tc = 2 * A + S, L.ld = 40 <= A ? 2 : 15 <= A ? 1 : 0;
              } else L.tc = 0;
              L.La = m;
            }
          }
        }
        u = 0;
      } else jt(e, 6, "Frame setup failed"), u = e.a;
      if (u = u == 0) {
        if (u) {
          e.$c = 0, 0 < e.Aa || (e.Ic = Nu);
          e: {
            u = e.Ic, d = 4 * (S = e.za);
            var C = 32 * S, G = S + 1, ne = 0 < e.L ? S * (0 < e.Aa ? 2 : 1) : 0, re = (e.Aa == 2 ? 2 : 1) * S;
            if ((L = d + 832 + (m = 3 * (16 * u + oo[e.L]) / 2 * C) + (x = e.Fa != null && 0 < e.Fa.length ? e.Kc.c * e.Kc.i : 0)) != L) u = 0;
            else {
              if (L > e.Vb) {
                if (e.Vb = 0, e.Ec = o(L), e.Fc = 0, e.Ec == null) {
                  u = jt(e, 1, "no memory during frame initialization.");
                  break e;
                }
                e.Vb = L;
              }
              L = e.Ec, A = e.Fc, e.Ac = L, e.Bc = A, A += d, e.Gd = c(C, ka), e.Hd = 0, e.rb = c(G + 1, Ia), e.sb = 1, e.wa = ne ? c(ne, fi) : null, e.Y = 0, e.D.Nb = 0, e.D.wa = e.wa, e.D.Y = e.Y, 0 < e.Aa && (e.D.Y += S), t(!0), e.oc = L, e.pc = A, A += 832, e.ya = c(re, Wi), e.aa = 0, e.D.ya = e.ya, e.D.aa = e.aa, e.Aa == 2 && (e.D.aa += S), e.R = 16 * S, e.B = 8 * S, S = (C = oo[e.L]) * e.R, C = C / 2 * e.B, e.sa = L, e.ta = A + S, e.qa = e.sa, e.ra = e.ta + 16 * u * e.R + C, e.Ha = e.qa, e.Ia = e.ra + 8 * u * e.B + C, e.$c = 0, A += m, e.mb = x ? L : null, e.nb = x ? A : null, t(A + x <= e.Fc + e.Vb), Gi(e), s(e.Ac, e.Bc, 0, d), u = 1;
            }
          }
          if (u) {
            if (i.ka = 0, i.y = e.sa, i.O = e.ta, i.f = e.qa, i.N = e.ra, i.ea = e.Ha, i.Vd = e.Ia, i.fa = e.R, i.Rc = e.B, i.F = null, i.J = 0, !Ka) {
              for (u = -255; 255 >= u; ++u) Ht[255 + u] = 0 > u ? -u : u;
              for (u = -1020; 1020 >= u; ++u) gr[1020 + u] = -128 > u ? -128 : 127 < u ? 127 : u;
              for (u = -112; 112 >= u; ++u) pa[112 + u] = -16 > u ? -16 : 15 < u ? 15 : u;
              for (u = -255; 510 >= u; ++u) ji[255 + u] = 0 > u ? 0 : 255 < u ? 255 : u;
              Ka = 1;
            }
            Ii = As, pr = Ls, ha = Ma, ln = Ns, _n = Ea, Ft = Oa, ki = Zi, $a = Jr, fa = Ts, Kr = Qi, Zr = Bs, Sr = yi, Qr = ea, Ci = Va, ei = Ha, _r = er, da = hr, Pn = Es, qn[0] = Qn, qn[1] = Ss, qn[2] = ks, qn[3] = Cs, qn[4] = Ra, qn[5] = vi, qn[6] = Da, qn[7] = Xi, qn[8] = Fs, qn[9] = js, Pr[0] = Ba, Pr[1] = Ps, Pr[2] = ur, Pr[3] = gi, Pr[4] = Zt, Pr[5] = Is, Pr[6] = Ta, mr[0] = wr, mr[1] = _s, mr[2] = Os, mr[3] = $i, mr[4] = Yr, mr[5] = Ms, mr[6] = Ki, u = 1;
          } else u = 0;
        }
        u && (u = function(Q, xe) {
          for (Q.M = 0; Q.M < Q.Va; ++Q.M) {
            var pe, Y = Q.Jc[Q.M & Q.Xb], K = Q.m, ve = Q;
            for (pe = 0; pe < ve.za; ++pe) {
              var Ae = K, ye = ve, Re = ye.Ac, Fe = ye.Bc + 4 * pe, We = ye.zc, Ee = ye.ya[ye.aa + pe];
              if (ye.Qa.Bb ? Ee.$b = T(Ae, ye.Pa.jb[0]) ? 2 + T(Ae, ye.Pa.jb[2]) : T(Ae, ye.Pa.jb[1]) : Ee.$b = 0, ye.kc && (Ee.Ad = T(Ae, ye.Bd)), Ee.Za = !T(Ae, 145) + 0, Ee.Za) {
                var ut = Ee.Ob, pt = 0;
                for (ye = 0; 4 > ye; ++ye) {
                  var ct, ot = We[0 + ye];
                  for (ct = 0; 4 > ct; ++ct) {
                    ot = lu[Re[Fe + ct]][ot];
                    for (var yt = Cl[T(Ae, ot[0])]; 0 < yt; ) yt = Cl[2 * yt + T(Ae, ot[yt])];
                    ot = -yt, Re[Fe + ct] = ot;
                  }
                  a(ut, pt, Re, Fe, 4), pt += 4, We[0 + ye] = ot;
                }
              } else ot = T(Ae, 156) ? T(Ae, 128) ? 1 : 3 : T(Ae, 163) ? 2 : 0, Ee.Ob[0] = ot, s(Re, Fe, ot, 4), s(We, 0, ot, 4);
              Ee.Dd = T(Ae, 142) ? T(Ae, 114) ? T(Ae, 183) ? 1 : 3 : 2 : 0;
            }
            if (ve.m.Ka) return jt(Q, 7, "Premature end-of-partition0 encountered.");
            for (; Q.ja < Q.za; ++Q.ja) {
              if (ve = Y, Ae = (K = Q).rb[K.sb - 1], Re = K.rb[K.sb + K.ja], pe = K.ya[K.aa + K.ja], Fe = K.kc ? pe.Ad : 0) Ae.la = Re.la = 0, pe.Za || (Ae.Na = Re.Na = 0), pe.Hc = 0, pe.Gc = 0, pe.ia = 0;
              else {
                var vt, rt;
                if (Ae = Re, Re = ve, Fe = K.Pa.Xc, We = K.ya[K.aa + K.ja], Ee = K.pb[We.$b], ye = We.ad, ut = 0, pt = K.rb[K.sb - 1], ot = ct = 0, s(ye, ut, 0, 384), We.Za) var qt = 0, pn = Fe[3];
                else {
                  yt = o(16);
                  var zt = Ae.Na + pt.Na;
                  if (zt = ga(Re, Fe[1], zt, Ee.Eb, 0, yt, 0), Ae.Na = pt.Na = (0 < zt) + 0, 1 < zt) Ii(yt, 0, ye, ut);
                  else {
                    var gn = yt[0] + 3 >> 3;
                    for (yt = 0; 256 > yt; yt += 16) ye[ut + yt] = gn;
                  }
                  qt = 1, pn = Fe[0];
                }
                var gt = 15 & Ae.la, xn = 15 & pt.la;
                for (yt = 0; 4 > yt; ++yt) {
                  var Ln = 1 & xn;
                  for (gn = rt = 0; 4 > gn; ++gn) gt = gt >> 1 | (Ln = (zt = ga(Re, pn, zt = Ln + (1 & gt), Ee.Sc, qt, ye, ut)) > qt) << 7, rt = rt << 2 | (3 < zt ? 3 : 1 < zt ? 2 : ye[ut + 0] != 0), ut += 16;
                  gt >>= 4, xn = xn >> 1 | Ln << 7, ct = (ct << 8 | rt) >>> 0;
                }
                for (pn = gt, qt = xn >> 4, vt = 0; 4 > vt; vt += 2) {
                  for (rt = 0, gt = Ae.la >> 4 + vt, xn = pt.la >> 4 + vt, yt = 0; 2 > yt; ++yt) {
                    for (Ln = 1 & xn, gn = 0; 2 > gn; ++gn) zt = Ln + (1 & gt), gt = gt >> 1 | (Ln = 0 < (zt = ga(Re, Fe[2], zt, Ee.Qc, 0, ye, ut))) << 3, rt = rt << 2 | (3 < zt ? 3 : 1 < zt ? 2 : ye[ut + 0] != 0), ut += 16;
                    gt >>= 2, xn = xn >> 1 | Ln << 5;
                  }
                  ot |= rt << 4 * vt, pn |= gt << 4 << vt, qt |= (240 & xn) << vt;
                }
                Ae.la = pn, pt.la = qt, We.Hc = ct, We.Gc = ot, We.ia = 43690 & ot ? 0 : Ee.ia, Fe = !(ct | ot);
              }
              if (0 < K.L && (K.wa[K.Y + K.ja] = K.gd[pe.$b][pe.Za], K.wa[K.Y + K.ja].La |= !Fe), ve.Ka) return jt(Q, 7, "Premature end-of-file encountered.");
            }
            if (Gi(Q), K = xe, ve = 1, pe = (Y = Q).D, Ae = 0 < Y.L && Y.M >= Y.zb && Y.M <= Y.Va, Y.Aa == 0) e: {
              if (pe.M = Y.M, pe.uc = Ae, oa(Y, pe), ve = 1, pe = (rt = Y.D).Nb, Ae = (ot = oo[Y.L]) * Y.R, Re = ot / 2 * Y.B, yt = 16 * pe * Y.R, gn = 8 * pe * Y.B, Fe = Y.sa, We = Y.ta - Ae + yt, Ee = Y.qa, ye = Y.ra - Re + gn, ut = Y.Ha, pt = Y.Ia - Re + gn, xn = (gt = rt.M) == 0, ct = gt >= Y.Va - 1, Y.Aa == 2 && oa(Y, rt), rt.uc) for (Ln = (zt = Y).D.M, t(zt.D.uc), rt = zt.yb; rt < zt.Hb; ++rt) {
                qt = rt, pn = Ln;
                var Wt = ($t = (kt = zt).D).Nb;
                vt = kt.R;
                var $t = $t.wa[$t.Y + qt], cn = kt.sa, jn = kt.ta + 16 * Wt * vt + 16 * qt, nr = $t.dd, Gt = $t.tc;
                if (Gt != 0) if (t(3 <= Gt), kt.L == 1) 0 < qt && _r(cn, jn, vt, Gt + 4), $t.La && Pn(cn, jn, vt, Gt), 0 < pn && ei(cn, jn, vt, Gt + 4), $t.La && da(cn, jn, vt, Gt);
                else {
                  var vr = kt.B, ti = kt.qa, Fi = kt.ra + 8 * Wt * vr + 8 * qt, kr = kt.Ha, kt = kt.Ia + 8 * Wt * vr + 8 * qt;
                  Wt = $t.ld, 0 < qt && ($a(cn, jn, vt, Gt + 4, nr, Wt), Kr(ti, Fi, kr, kt, vr, Gt + 4, nr, Wt)), $t.La && (Sr(cn, jn, vt, Gt, nr, Wt), Ci(ti, Fi, kr, kt, vr, Gt, nr, Wt)), 0 < pn && (ki(cn, jn, vt, Gt + 4, nr, Wt), fa(ti, Fi, kr, kt, vr, Gt + 4, nr, Wt)), $t.La && (Zr(cn, jn, vt, Gt, nr, Wt), Qr(ti, Fi, kr, kt, vr, Gt, nr, Wt));
                }
              }
              if (Y.ia && alert("todo:DitherRow"), K.put != null) {
                if (rt = 16 * gt, gt = 16 * (gt + 1), xn ? (K.y = Y.sa, K.O = Y.ta + yt, K.f = Y.qa, K.N = Y.ra + gn, K.ea = Y.Ha, K.W = Y.Ia + gn) : (rt -= ot, K.y = Fe, K.O = We, K.f = Ee, K.N = ye, K.ea = ut, K.W = pt), ct || (gt -= ot), gt > K.o && (gt = K.o), K.F = null, K.J = null, Y.Fa != null && 0 < Y.Fa.length && rt < gt && (K.J = ia(Y, K, rt, gt - rt), K.F = Y.mb, K.F == null && K.F.length == 0)) {
                  ve = jt(Y, 3, "Could not decode alpha data.");
                  break e;
                }
                rt < K.j && (ot = K.j - rt, rt = K.j, t(!(1 & ot)), K.O += Y.R * ot, K.N += Y.B * (ot >> 1), K.W += Y.B * (ot >> 1), K.F != null && (K.J += K.width * ot)), rt < gt && (K.O += K.v, K.N += K.v >> 1, K.W += K.v >> 1, K.F != null && (K.J += K.v), K.ka = rt - K.j, K.U = K.va - K.v, K.T = gt - rt, ve = K.put(K));
              }
              pe + 1 != Y.Ic || ct || (a(Y.sa, Y.ta - Ae, Fe, We + 16 * Y.R, Ae), a(Y.qa, Y.ra - Re, Ee, ye + 8 * Y.B, Re), a(Y.Ha, Y.Ia - Re, ut, pt + 8 * Y.B, Re));
            }
            if (!ve) return jt(Q, 6, "Output aborted.");
          }
          return 1;
        }(e, i)), i.bc != null && i.bc(i), u &= 1;
      }
      return u ? (e.cb = 0, u) : 0;
    }
    function Tn(e, i, u, d, m) {
      m = e[i + u + 32 * d] + (m >> 3), e[i + u + 32 * d] = -256 & m ? 0 > m ? 0 : 255 : m;
    }
    function pi(e, i, u, d, m, x) {
      Tn(e, i, 0, u, d + m), Tn(e, i, 1, u, d + x), Tn(e, i, 2, u, d - x), Tn(e, i, 3, u, d - m);
    }
    function hn(e) {
      return (20091 * e >> 16) + e;
    }
    function Yi(e, i, u, d) {
      var m, x = 0, L = o(16);
      for (m = 0; 4 > m; ++m) {
        var A = e[i + 0] + e[i + 8], S = e[i + 0] - e[i + 8], C = (35468 * e[i + 4] >> 16) - hn(e[i + 12]), G = hn(e[i + 4]) + (35468 * e[i + 12] >> 16);
        L[x + 0] = A + G, L[x + 1] = S + C, L[x + 2] = S - C, L[x + 3] = A - G, x += 4, i++;
      }
      for (m = x = 0; 4 > m; ++m) A = (e = L[x + 0] + 4) + L[x + 8], S = e - L[x + 8], C = (35468 * L[x + 4] >> 16) - hn(L[x + 12]), Tn(u, d, 0, 0, A + (G = hn(L[x + 4]) + (35468 * L[x + 12] >> 16))), Tn(u, d, 1, 0, S + C), Tn(u, d, 2, 0, S - C), Tn(u, d, 3, 0, A - G), x++, d += 32;
    }
    function Oa(e, i, u, d) {
      var m = e[i + 0] + 4, x = 35468 * e[i + 4] >> 16, L = hn(e[i + 4]), A = 35468 * e[i + 1] >> 16;
      pi(u, d, 0, m + L, e = hn(e[i + 1]), A), pi(u, d, 1, m + x, e, A), pi(u, d, 2, m - x, e, A), pi(u, d, 3, m - L, e, A);
    }
    function Ls(e, i, u, d, m) {
      Yi(e, i, u, d), m && Yi(e, i + 16, u, d + 4);
    }
    function Ma(e, i, u, d) {
      pr(e, i + 0, u, d, 1), pr(e, i + 32, u, d + 128, 1);
    }
    function Ns(e, i, u, d) {
      var m;
      for (e = e[i + 0] + 4, m = 0; 4 > m; ++m) for (i = 0; 4 > i; ++i) Tn(u, d, i, m, e);
    }
    function Ea(e, i, u, d) {
      e[i + 0] && ln(e, i + 0, u, d), e[i + 16] && ln(e, i + 16, u, d + 4), e[i + 32] && ln(e, i + 32, u, d + 128), e[i + 48] && ln(e, i + 48, u, d + 128 + 4);
    }
    function As(e, i, u, d) {
      var m, x = o(16);
      for (m = 0; 4 > m; ++m) {
        var L = e[i + 0 + m] + e[i + 12 + m], A = e[i + 4 + m] + e[i + 8 + m], S = e[i + 4 + m] - e[i + 8 + m], C = e[i + 0 + m] - e[i + 12 + m];
        x[0 + m] = L + A, x[8 + m] = L - A, x[4 + m] = C + S, x[12 + m] = C - S;
      }
      for (m = 0; 4 > m; ++m) L = (e = x[0 + 4 * m] + 3) + x[3 + 4 * m], A = x[1 + 4 * m] + x[2 + 4 * m], S = x[1 + 4 * m] - x[2 + 4 * m], C = e - x[3 + 4 * m], u[d + 0] = L + A >> 3, u[d + 16] = C + S >> 3, u[d + 32] = L - A >> 3, u[d + 48] = C - S >> 3, d += 64;
    }
    function Ji(e, i, u) {
      var d, m = i - 32, x = wn, L = 255 - e[m - 1];
      for (d = 0; d < u; ++d) {
        var A, S = x, C = L + e[i - 1];
        for (A = 0; A < u; ++A) e[i + A] = S[C + e[m + A]];
        i += 32;
      }
    }
    function Ss(e, i) {
      Ji(e, i, 4);
    }
    function _s(e, i) {
      Ji(e, i, 8);
    }
    function Ps(e, i) {
      Ji(e, i, 16);
    }
    function ur(e, i) {
      var u;
      for (u = 0; 16 > u; ++u) a(e, i + 32 * u, e, i - 32, 16);
    }
    function gi(e, i) {
      var u;
      for (u = 16; 0 < u; --u) s(e, i, e[i - 1], 16), i += 32;
    }
    function mi(e, i, u) {
      var d;
      for (d = 0; 16 > d; ++d) s(i, u + 32 * d, e, 16);
    }
    function Ba(e, i) {
      var u, d = 16;
      for (u = 0; 16 > u; ++u) d += e[i - 1 + 32 * u] + e[i + u - 32];
      mi(d >> 5, e, i);
    }
    function Zt(e, i) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += e[i - 1 + 32 * u];
      mi(d >> 4, e, i);
    }
    function Is(e, i) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += e[i + u - 32];
      mi(d >> 4, e, i);
    }
    function Ta(e, i) {
      mi(128, e, i);
    }
    function Ke(e, i, u) {
      return e + 2 * i + u + 2 >> 2;
    }
    function ks(e, i) {
      var u, d = i - 32;
      for (d = new Uint8Array([Ke(e[d - 1], e[d + 0], e[d + 1]), Ke(e[d + 0], e[d + 1], e[d + 2]), Ke(e[d + 1], e[d + 2], e[d + 3]), Ke(e[d + 2], e[d + 3], e[d + 4])]), u = 0; 4 > u; ++u) a(e, i + 32 * u, d, 0, d.length);
    }
    function Cs(e, i) {
      var u = e[i - 1], d = e[i - 1 + 32], m = e[i - 1 + 64], x = e[i - 1 + 96];
      Ne(e, i + 0, 16843009 * Ke(e[i - 1 - 32], u, d)), Ne(e, i + 32, 16843009 * Ke(u, d, m)), Ne(e, i + 64, 16843009 * Ke(d, m, x)), Ne(e, i + 96, 16843009 * Ke(m, x, x));
    }
    function Qn(e, i) {
      var u, d = 4;
      for (u = 0; 4 > u; ++u) d += e[i + u - 32] + e[i - 1 + 32 * u];
      for (d >>= 3, u = 0; 4 > u; ++u) s(e, i + 32 * u, d, 4);
    }
    function Ra(e, i) {
      var u = e[i - 1 + 0], d = e[i - 1 + 32], m = e[i - 1 + 64], x = e[i - 1 - 32], L = e[i + 0 - 32], A = e[i + 1 - 32], S = e[i + 2 - 32], C = e[i + 3 - 32];
      e[i + 0 + 96] = Ke(d, m, e[i - 1 + 96]), e[i + 1 + 96] = e[i + 0 + 64] = Ke(u, d, m), e[i + 2 + 96] = e[i + 1 + 64] = e[i + 0 + 32] = Ke(x, u, d), e[i + 3 + 96] = e[i + 2 + 64] = e[i + 1 + 32] = e[i + 0 + 0] = Ke(L, x, u), e[i + 3 + 64] = e[i + 2 + 32] = e[i + 1 + 0] = Ke(A, L, x), e[i + 3 + 32] = e[i + 2 + 0] = Ke(S, A, L), e[i + 3 + 0] = Ke(C, S, A);
    }
    function Da(e, i) {
      var u = e[i + 1 - 32], d = e[i + 2 - 32], m = e[i + 3 - 32], x = e[i + 4 - 32], L = e[i + 5 - 32], A = e[i + 6 - 32], S = e[i + 7 - 32];
      e[i + 0 + 0] = Ke(e[i + 0 - 32], u, d), e[i + 1 + 0] = e[i + 0 + 32] = Ke(u, d, m), e[i + 2 + 0] = e[i + 1 + 32] = e[i + 0 + 64] = Ke(d, m, x), e[i + 3 + 0] = e[i + 2 + 32] = e[i + 1 + 64] = e[i + 0 + 96] = Ke(m, x, L), e[i + 3 + 32] = e[i + 2 + 64] = e[i + 1 + 96] = Ke(x, L, A), e[i + 3 + 64] = e[i + 2 + 96] = Ke(L, A, S), e[i + 3 + 96] = Ke(A, S, S);
    }
    function vi(e, i) {
      var u = e[i - 1 + 0], d = e[i - 1 + 32], m = e[i - 1 + 64], x = e[i - 1 - 32], L = e[i + 0 - 32], A = e[i + 1 - 32], S = e[i + 2 - 32], C = e[i + 3 - 32];
      e[i + 0 + 0] = e[i + 1 + 64] = x + L + 1 >> 1, e[i + 1 + 0] = e[i + 2 + 64] = L + A + 1 >> 1, e[i + 2 + 0] = e[i + 3 + 64] = A + S + 1 >> 1, e[i + 3 + 0] = S + C + 1 >> 1, e[i + 0 + 96] = Ke(m, d, u), e[i + 0 + 64] = Ke(d, u, x), e[i + 0 + 32] = e[i + 1 + 96] = Ke(u, x, L), e[i + 1 + 32] = e[i + 2 + 96] = Ke(x, L, A), e[i + 2 + 32] = e[i + 3 + 96] = Ke(L, A, S), e[i + 3 + 32] = Ke(A, S, C);
    }
    function Xi(e, i) {
      var u = e[i + 0 - 32], d = e[i + 1 - 32], m = e[i + 2 - 32], x = e[i + 3 - 32], L = e[i + 4 - 32], A = e[i + 5 - 32], S = e[i + 6 - 32], C = e[i + 7 - 32];
      e[i + 0 + 0] = u + d + 1 >> 1, e[i + 1 + 0] = e[i + 0 + 64] = d + m + 1 >> 1, e[i + 2 + 0] = e[i + 1 + 64] = m + x + 1 >> 1, e[i + 3 + 0] = e[i + 2 + 64] = x + L + 1 >> 1, e[i + 0 + 32] = Ke(u, d, m), e[i + 1 + 32] = e[i + 0 + 96] = Ke(d, m, x), e[i + 2 + 32] = e[i + 1 + 96] = Ke(m, x, L), e[i + 3 + 32] = e[i + 2 + 96] = Ke(x, L, A), e[i + 3 + 64] = Ke(L, A, S), e[i + 3 + 96] = Ke(A, S, C);
    }
    function js(e, i) {
      var u = e[i - 1 + 0], d = e[i - 1 + 32], m = e[i - 1 + 64], x = e[i - 1 + 96];
      e[i + 0 + 0] = u + d + 1 >> 1, e[i + 2 + 0] = e[i + 0 + 32] = d + m + 1 >> 1, e[i + 2 + 32] = e[i + 0 + 64] = m + x + 1 >> 1, e[i + 1 + 0] = Ke(u, d, m), e[i + 3 + 0] = e[i + 1 + 32] = Ke(d, m, x), e[i + 3 + 32] = e[i + 1 + 64] = Ke(m, x, x), e[i + 3 + 64] = e[i + 2 + 64] = e[i + 0 + 96] = e[i + 1 + 96] = e[i + 2 + 96] = e[i + 3 + 96] = x;
    }
    function Fs(e, i) {
      var u = e[i - 1 + 0], d = e[i - 1 + 32], m = e[i - 1 + 64], x = e[i - 1 + 96], L = e[i - 1 - 32], A = e[i + 0 - 32], S = e[i + 1 - 32], C = e[i + 2 - 32];
      e[i + 0 + 0] = e[i + 2 + 32] = u + L + 1 >> 1, e[i + 0 + 32] = e[i + 2 + 64] = d + u + 1 >> 1, e[i + 0 + 64] = e[i + 2 + 96] = m + d + 1 >> 1, e[i + 0 + 96] = x + m + 1 >> 1, e[i + 3 + 0] = Ke(A, S, C), e[i + 2 + 0] = Ke(L, A, S), e[i + 1 + 0] = e[i + 3 + 32] = Ke(u, L, A), e[i + 1 + 32] = e[i + 3 + 64] = Ke(d, u, L), e[i + 1 + 64] = e[i + 3 + 96] = Ke(m, d, u), e[i + 1 + 96] = Ke(x, m, d);
    }
    function Os(e, i) {
      var u;
      for (u = 0; 8 > u; ++u) a(e, i + 32 * u, e, i - 32, 8);
    }
    function $i(e, i) {
      var u;
      for (u = 0; 8 > u; ++u) s(e, i, e[i - 1], 8), i += 32;
    }
    function Gr(e, i, u) {
      var d;
      for (d = 0; 8 > d; ++d) s(i, u + 32 * d, e, 8);
    }
    function wr(e, i) {
      var u, d = 8;
      for (u = 0; 8 > u; ++u) d += e[i + u - 32] + e[i - 1 + 32 * u];
      Gr(d >> 4, e, i);
    }
    function Ms(e, i) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += e[i + u - 32];
      Gr(d >> 3, e, i);
    }
    function Yr(e, i) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += e[i - 1 + 32 * u];
      Gr(d >> 3, e, i);
    }
    function Ki(e, i) {
      Gr(128, e, i);
    }
    function bi(e, i, u) {
      var d = e[i - u], m = e[i + 0], x = 3 * (m - d) + qs[1020 + e[i - 2 * u] - e[i + u]], L = Za[112 + (x + 4 >> 3)];
      e[i - u] = wn[255 + d + Za[112 + (x + 3 >> 3)]], e[i + 0] = wn[255 + m - L];
    }
    function qa(e, i, u, d) {
      var m = e[i + 0], x = e[i + u];
      return kn[255 + e[i - 2 * u] - e[i - u]] > d || kn[255 + x - m] > d;
    }
    function za(e, i, u, d) {
      return 4 * kn[255 + e[i - u] - e[i + 0]] + kn[255 + e[i - 2 * u] - e[i + u]] <= d;
    }
    function Ua(e, i, u, d, m) {
      var x = e[i - 3 * u], L = e[i - 2 * u], A = e[i - u], S = e[i + 0], C = e[i + u], G = e[i + 2 * u], ne = e[i + 3 * u];
      return 4 * kn[255 + A - S] + kn[255 + L - C] > d ? 0 : kn[255 + e[i - 4 * u] - x] <= m && kn[255 + x - L] <= m && kn[255 + L - A] <= m && kn[255 + ne - G] <= m && kn[255 + G - C] <= m && kn[255 + C - S] <= m;
    }
    function Ha(e, i, u, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) za(e, i + d, u, m) && bi(e, i + d, u);
    }
    function er(e, i, u, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) za(e, i + d * u, 1, m) && bi(e, i + d * u, 1);
    }
    function hr(e, i, u, d) {
      var m;
      for (m = 3; 0 < m; --m) Ha(e, i += 4 * u, u, d);
    }
    function Es(e, i, u, d) {
      var m;
      for (m = 3; 0 < m; --m) er(e, i += 4, u, d);
    }
    function xr(e, i, u, d, m, x, L, A) {
      for (x = 2 * x + 1; 0 < m--; ) {
        if (Ua(e, i, u, x, L)) if (qa(e, i, u, A)) bi(e, i, u);
        else {
          var S = e, C = i, G = u, ne = S[C - 2 * G], re = S[C - G], Q = S[C + 0], xe = S[C + G], pe = S[C + 2 * G], Y = 27 * (ve = qs[1020 + 3 * (Q - re) + qs[1020 + ne - xe]]) + 63 >> 7, K = 18 * ve + 63 >> 7, ve = 9 * ve + 63 >> 7;
          S[C - 3 * G] = wn[255 + S[C - 3 * G] + ve], S[C - 2 * G] = wn[255 + ne + K], S[C - G] = wn[255 + re + Y], S[C + 0] = wn[255 + Q - Y], S[C + G] = wn[255 + xe - K], S[C + 2 * G] = wn[255 + pe - ve];
        }
        i += d;
      }
    }
    function Rn(e, i, u, d, m, x, L, A) {
      for (x = 2 * x + 1; 0 < m--; ) {
        if (Ua(e, i, u, x, L)) if (qa(e, i, u, A)) bi(e, i, u);
        else {
          var S = e, C = i, G = u, ne = S[C - G], re = S[C + 0], Q = S[C + G], xe = Za[112 + ((pe = 3 * (re - ne)) + 4 >> 3)], pe = Za[112 + (pe + 3 >> 3)], Y = xe + 1 >> 1;
          S[C - 2 * G] = wn[255 + S[C - 2 * G] + Y], S[C - G] = wn[255 + ne + pe], S[C + 0] = wn[255 + re - xe], S[C + G] = wn[255 + Q - Y];
        }
        i += d;
      }
    }
    function Zi(e, i, u, d, m, x) {
      xr(e, i, u, 1, 16, d, m, x);
    }
    function Jr(e, i, u, d, m, x) {
      xr(e, i, 1, u, 16, d, m, x);
    }
    function Bs(e, i, u, d, m, x) {
      var L;
      for (L = 3; 0 < L; --L) Rn(e, i += 4 * u, u, 1, 16, d, m, x);
    }
    function yi(e, i, u, d, m, x) {
      var L;
      for (L = 3; 0 < L; --L) Rn(e, i += 4, 1, u, 16, d, m, x);
    }
    function Ts(e, i, u, d, m, x, L, A) {
      xr(e, i, m, 1, 8, x, L, A), xr(u, d, m, 1, 8, x, L, A);
    }
    function Qi(e, i, u, d, m, x, L, A) {
      xr(e, i, 1, m, 8, x, L, A), xr(u, d, 1, m, 8, x, L, A);
    }
    function ea(e, i, u, d, m, x, L, A) {
      Rn(e, i + 4 * m, m, 1, 8, x, L, A), Rn(u, d + 4 * m, m, 1, 8, x, L, A);
    }
    function Va(e, i, u, d, m, x, L, A) {
      Rn(e, i + 4, 1, m, 8, x, L, A), Rn(u, d + 4, 1, m, 8, x, L, A);
    }
    function wi() {
      this.ba = new Fn(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new Pt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function ta() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function na() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Wa() {
      this.ua = 0, this.Wa = new R(), this.vb = new R(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new z(), this.yc = new k();
    }
    function Rs() {
      this.xb = this.a = 0, this.l = new di(), this.ca = new Fn(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new w(), this.Pb = 0, this.wd = new w(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Wa(), this.ab = 0, this.gc = c(4, na), this.Oc = 0;
    }
    function xi() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new di(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Xr(e, i, u, d, m, x, L) {
      for (e = e == null ? 0 : e[i + 0], i = 0; i < L; ++i) m[x + i] = e + u[d + i] & 255, e = m[x + i];
    }
    function ra(e, i, u, d, m, x, L) {
      var A;
      if (e == null) Xr(null, null, u, d, m, x, L);
      else for (A = 0; A < L; ++A) m[x + A] = e[i + A] + u[d + A] & 255;
    }
    function Lr(e, i, u, d, m, x, L) {
      if (e == null) Xr(null, null, u, d, m, x, L);
      else {
        var A, S = e[i + 0], C = S, G = S;
        for (A = 0; A < L; ++A) C = G + (S = e[i + A]) - C, G = u[d + A] + (-256 & C ? 0 > C ? 0 : 255 : C) & 255, C = S, m[x + A] = G;
      }
    }
    function ia(e, i, u, d) {
      var m = i.width, x = i.o;
      if (t(e != null && i != null), 0 > u || 0 >= d || u + d > x) return null;
      if (!e.Cc) {
        if (e.ga == null) {
          var L;
          if (e.ga = new xi(), (L = e.ga == null) || (L = i.width * i.o, t(e.Gb.length == 0), e.Gb = o(L), e.Uc = 0, e.Gb == null ? L = 0 : (e.mb = e.Gb, e.nb = e.Uc, e.rc = null, L = 1), L = !L), !L) {
            L = e.ga;
            var A = e.Fa, S = e.P, C = e.qc, G = e.mb, ne = e.nb, re = S + 1, Q = C - 1, xe = L.l;
            if (t(A != null && G != null && i != null), Ir[0] = null, Ir[1] = Xr, Ir[2] = ra, Ir[3] = Lr, L.ca = G, L.tb = ne, L.c = i.width, L.i = i.height, t(0 < L.c && 0 < L.i), 1 >= C) i = 0;
            else if (L.$a = A[S + 0] >> 0 & 3, L.Z = A[S + 0] >> 2 & 3, L.Lc = A[S + 0] >> 4 & 3, S = A[S + 0] >> 6 & 3, 0 > L.$a || 1 < L.$a || 4 <= L.Z || 1 < L.Lc || S) i = 0;
            else if (xe.put = Jn, xe.ac = Jt, xe.bc = Xn, xe.ma = L, xe.width = i.width, xe.height = i.height, xe.Da = i.Da, xe.v = i.v, xe.va = i.va, xe.j = i.j, xe.o = i.o, L.$a) e: {
              t(L.$a == 1), i = An();
              t: for (; ; ) {
                if (i == null) {
                  i = 0;
                  break e;
                }
                if (t(L != null), L.mc = i, i.c = L.c, i.i = L.i, i.l = L.l, i.l.ma = L, i.l.width = L.c, i.l.height = L.i, i.a = 0, te(i.m, A, re, Q), !Zn(L.c, L.i, 1, i, null) || (i.ab == 1 && i.gc[0].hc == 3 && cr(i.s) ? (L.ic = 1, A = i.c * i.i, i.Ta = null, i.Ua = 0, i.V = o(A), i.Ba = 0, i.V == null ? (i.a = 1, i = 0) : i = 1) : (L.ic = 0, i = Wr(i, L.c)), !i)) break t;
                i = 1;
                break e;
              }
              L.mc = null, i = 0;
            }
            else i = Q >= L.c * L.i;
            L = !i;
          }
          if (L) return null;
          e.ga.Lc != 1 ? e.Ga = 0 : d = x - u;
        }
        t(e.ga != null), t(u + d <= x);
        e: {
          if (i = (A = e.ga).c, x = A.l.o, A.$a == 0) {
            if (re = e.rc, Q = e.Vc, xe = e.Fa, S = e.P + 1 + u * i, C = e.mb, G = e.nb + u * i, t(S <= e.P + e.qc), A.Z != 0) for (t(Ir[A.Z] != null), L = 0; L < d; ++L) Ir[A.Z](re, Q, xe, S, C, G, i), re = C, Q = G, G += i, S += i;
            else for (L = 0; L < d; ++L) a(C, G, xe, S, i), re = C, Q = G, G += i, S += i;
            e.rc = re, e.Vc = Q;
          } else {
            if (t(A.mc != null), i = u + d, t((L = A.mc) != null), t(i <= L.i), L.C >= i) i = 1;
            else if (A.ic || ee(), A.ic) {
              A = L.V, re = L.Ba, Q = L.c;
              var pe = L.i, Y = (xe = 1, S = L.$ / Q, C = L.$ % Q, G = L.m, ne = L.s, L.$), K = Q * pe, ve = Q * i, Ae = ne.wc, ye = Y < ve ? Rt(ne, C, S) : null;
              t(Y <= K), t(i <= pe), t(cr(ne));
              t: for (; ; ) {
                for (; !G.h && Y < ve; ) {
                  if (C & Ae || (ye = Rt(ne, C, S)), t(ye != null), q(G), 256 > (pe = un(ye.G[0], ye.H[0], G))) A[re + Y] = pe, ++Y, ++C >= Q && (C = 0, ++S <= i && !(S % 16) && En(L, S));
                  else {
                    if (!(280 > pe)) {
                      xe = 0;
                      break t;
                    }
                    pe = On(pe - 256, G);
                    var Re, Fe = un(ye.G[4], ye.H[4], G);
                    if (q(G), !(Y >= (Fe = $n(Q, Fe = On(Fe, G))) && K - Y >= pe)) {
                      xe = 0;
                      break t;
                    }
                    for (Re = 0; Re < pe; ++Re) A[re + Y + Re] = A[re + Y + Re - Fe];
                    for (Y += pe, C += pe; C >= Q; ) C -= Q, ++S <= i && !(S % 16) && En(L, S);
                    Y < ve && C & Ae && (ye = Rt(ne, C, S));
                  }
                  t(G.h == B(G));
                }
                En(L, S > i ? i : S);
                break t;
              }
              !xe || G.h && Y < K ? (xe = 0, L.a = G.h ? 5 : 3) : L.$ = Y, i = xe;
            } else i = Bn(L, L.V, L.Ba, L.c, L.i, i, li);
            if (!i) {
              d = 0;
              break e;
            }
          }
          u + d >= x && (e.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (e.Cc && ((d = e.ga) != null && (d.mc = null), e.ga = null, 0 < e.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return e.nb + u * m;
    }
    function l(e, i, u, d, m, x) {
      for (; 0 < m--; ) {
        var L, A = e, S = i + (u ? 1 : 0), C = e, G = i + (u ? 0 : 3);
        for (L = 0; L < d; ++L) {
          var ne = C[G + 4 * L];
          ne != 255 && (ne *= 32897, A[S + 4 * L + 0] = A[S + 4 * L + 0] * ne >> 23, A[S + 4 * L + 1] = A[S + 4 * L + 1] * ne >> 23, A[S + 4 * L + 2] = A[S + 4 * L + 2] * ne >> 23);
        }
        i += x;
      }
    }
    function v(e, i, u, d, m) {
      for (; 0 < d--; ) {
        var x;
        for (x = 0; x < u; ++x) {
          var L = e[i + 2 * x + 0], A = 15 & (C = e[i + 2 * x + 1]), S = 4369 * A, C = (240 & C | C >> 4) * S >> 16;
          e[i + 2 * x + 0] = (240 & L | L >> 4) * S >> 16 & 240 | (15 & L | L << 4) * S >> 16 >> 4 & 15, e[i + 2 * x + 1] = 240 & C | A;
        }
        i += m;
      }
    }
    function M(e, i, u, d, m, x, L, A) {
      var S, C, G = 255;
      for (C = 0; C < m; ++C) {
        for (S = 0; S < d; ++S) {
          var ne = e[i + S];
          x[L + 4 * S] = ne, G &= ne;
        }
        i += u, L += A;
      }
      return G != 255;
    }
    function V(e, i, u, d, m) {
      var x;
      for (x = 0; x < m; ++x) u[d + x] = e[i + x] >> 8;
    }
    function ee() {
      In = l, Lt = v, Nt = M, Ot = V;
    }
    function me(e, i, u) {
      H[e] = function(d, m, x, L, A, S, C, G, ne, re, Q, xe, pe, Y, K, ve, Ae) {
        var ye, Re = Ae - 1 >> 1, Fe = A[S + 0] | C[G + 0] << 16, We = ne[re + 0] | Q[xe + 0] << 16;
        t(d != null);
        var Ee = 3 * Fe + We + 131074 >> 2;
        for (i(d[m + 0], 255 & Ee, Ee >> 16, pe, Y), x != null && (Ee = 3 * We + Fe + 131074 >> 2, i(x[L + 0], 255 & Ee, Ee >> 16, K, ve)), ye = 1; ye <= Re; ++ye) {
          var ut = A[S + ye] | C[G + ye] << 16, pt = ne[re + ye] | Q[xe + ye] << 16, ct = Fe + ut + We + pt + 524296, ot = ct + 2 * (ut + We) >> 3;
          Ee = ot + Fe >> 1, Fe = (ct = ct + 2 * (Fe + pt) >> 3) + ut >> 1, i(d[m + 2 * ye - 1], 255 & Ee, Ee >> 16, pe, Y + (2 * ye - 1) * u), i(d[m + 2 * ye - 0], 255 & Fe, Fe >> 16, pe, Y + (2 * ye - 0) * u), x != null && (Ee = ct + We >> 1, Fe = ot + pt >> 1, i(x[L + 2 * ye - 1], 255 & Ee, Ee >> 16, K, ve + (2 * ye - 1) * u), i(x[L + 2 * ye + 0], 255 & Fe, Fe >> 16, K, ve + (2 * ye + 0) * u)), Fe = ut, We = pt;
        }
        1 & Ae || (Ee = 3 * Fe + We + 131074 >> 2, i(d[m + Ae - 1], 255 & Ee, Ee >> 16, pe, Y + (Ae - 1) * u), x != null && (Ee = 3 * We + Fe + 131074 >> 2, i(x[L + Ae - 1], 255 & Ee, Ee >> 16, K, ve + (Ae - 1) * u)));
      };
    }
    function Se() {
      Cn[Qa] = fu, Cn[eo] = Fl, Cn[Pl] = du, Cn[to] = Ol, Cn[no] = Ml, Cn[zs] = El, Cn[Il] = pu, Cn[Us] = Fl, Cn[Hs] = Ol, Cn[ro] = Ml, Cn[Vs] = El;
    }
    function Te(e) {
      return e & -16384 ? 0 > e ? 0 : 255 : e >> gu;
    }
    function Ve(e, i) {
      return Te((19077 * e >> 8) + (26149 * i >> 8) - 14234);
    }
    function tt(e, i, u) {
      return Te((19077 * e >> 8) - (6419 * i >> 8) - (13320 * u >> 8) + 8708);
    }
    function Qe(e, i) {
      return Te((19077 * e >> 8) + (33050 * i >> 8) - 17685);
    }
    function lt(e, i, u, d, m) {
      d[m + 0] = Ve(e, u), d[m + 1] = tt(e, i, u), d[m + 2] = Qe(e, i);
    }
    function St(e, i, u, d, m) {
      d[m + 0] = Qe(e, i), d[m + 1] = tt(e, i, u), d[m + 2] = Ve(e, u);
    }
    function It(e, i, u, d, m) {
      var x = tt(e, i, u);
      i = x << 3 & 224 | Qe(e, i) >> 3, d[m + 0] = 248 & Ve(e, u) | x >> 5, d[m + 1] = i;
    }
    function Dt(e, i, u, d, m) {
      var x = 240 & Qe(e, i) | 15;
      d[m + 0] = 240 & Ve(e, u) | tt(e, i, u) >> 4, d[m + 1] = x;
    }
    function Qt(e, i, u, d, m) {
      d[m + 0] = 255, lt(e, i, u, d, m + 1);
    }
    function Vt(e, i, u, d, m) {
      St(e, i, u, d, m), d[m + 3] = 255;
    }
    function Dn(e, i, u, d, m) {
      lt(e, i, u, d, m), d[m + 3] = 255;
    }
    function yn(e, i) {
      return 0 > e ? 0 : e > i ? i : e;
    }
    function tr(e, i, u) {
      H[e] = function(d, m, x, L, A, S, C, G, ne) {
        for (var re = G + (-2 & ne) * u; G != re; ) i(d[m + 0], x[L + 0], A[S + 0], C, G), i(d[m + 1], x[L + 0], A[S + 0], C, G + u), m += 2, ++L, ++S, G += 2 * u;
        1 & ne && i(d[m + 0], x[L + 0], A[S + 0], C, G);
      };
    }
    function Ga(e, i, u) {
      return u == 0 ? e == 0 ? i == 0 ? 6 : 5 : i == 0 ? 4 : 0 : u;
    }
    function aa(e, i, u, d, m) {
      switch (e >>> 30) {
        case 3:
          pr(i, u, d, m, 0);
          break;
        case 2:
          Ft(i, u, d, m);
          break;
        case 1:
          ln(i, u, d, m);
      }
    }
    function oa(e, i) {
      var u, d, m = i.M, x = i.Nb, L = e.oc, A = e.pc + 40, S = e.oc, C = e.pc + 584, G = e.oc, ne = e.pc + 600;
      for (u = 0; 16 > u; ++u) L[A + 32 * u - 1] = 129;
      for (u = 0; 8 > u; ++u) S[C + 32 * u - 1] = 129, G[ne + 32 * u - 1] = 129;
      for (0 < m ? L[A - 1 - 32] = S[C - 1 - 32] = G[ne - 1 - 32] = 129 : (s(L, A - 32 - 1, 127, 21), s(S, C - 32 - 1, 127, 9), s(G, ne - 32 - 1, 127, 9)), d = 0; d < e.za; ++d) {
        var re = i.ya[i.aa + d];
        if (0 < d) {
          for (u = -1; 16 > u; ++u) a(L, A + 32 * u - 4, L, A + 32 * u + 12, 4);
          for (u = -1; 8 > u; ++u) a(S, C + 32 * u - 4, S, C + 32 * u + 4, 4), a(G, ne + 32 * u - 4, G, ne + 32 * u + 4, 4);
        }
        var Q = e.Gd, xe = e.Hd + d, pe = re.ad, Y = re.Hc;
        if (0 < m && (a(L, A - 32, Q[xe].y, 0, 16), a(S, C - 32, Q[xe].f, 0, 8), a(G, ne - 32, Q[xe].ea, 0, 8)), re.Za) {
          var K = L, ve = A - 32 + 16;
          for (0 < m && (d >= e.za - 1 ? s(K, ve, Q[xe].y[15], 4) : a(K, ve, Q[xe + 1].y, 0, 4)), u = 0; 4 > u; u++) K[ve + 128 + u] = K[ve + 256 + u] = K[ve + 384 + u] = K[ve + 0 + u];
          for (u = 0; 16 > u; ++u, Y <<= 2) K = L, ve = A + Tl[u], qn[re.Ob[u]](K, ve), aa(Y, pe, 16 * +u, K, ve);
        } else if (K = Ga(d, m, re.Ob[0]), Pr[K](L, A), Y != 0) for (u = 0; 16 > u; ++u, Y <<= 2) aa(Y, pe, 16 * +u, L, A + Tl[u]);
        for (u = re.Gc, K = Ga(d, m, re.Dd), mr[K](S, C), mr[K](G, ne), Y = pe, K = S, ve = C, 255 & (re = u >> 0) && (170 & re ? ha(Y, 256, K, ve) : _n(Y, 256, K, ve)), re = G, Y = ne, 255 & (u >>= 8) && (170 & u ? ha(pe, 320, re, Y) : _n(pe, 320, re, Y)), m < e.Ub - 1 && (a(Q[xe].y, 0, L, A + 480, 16), a(Q[xe].f, 0, S, C + 224, 8), a(Q[xe].ea, 0, G, ne + 224, 8)), u = 8 * x * e.B, Q = e.sa, xe = e.ta + 16 * d + 16 * x * e.R, pe = e.qa, re = e.ra + 8 * d + u, Y = e.Ha, K = e.Ia + 8 * d + u, u = 0; 16 > u; ++u) a(Q, xe + u * e.R, L, A + 32 * u, 16);
        for (u = 0; 8 > u; ++u) a(pe, re + u * e.B, S, C + 32 * u, 8), a(Y, K + u * e.B, G, ne + 32 * u, 8);
      }
    }
    function Li(e, i, u, d, m, x, L, A, S) {
      var C = [0], G = [0], ne = 0, re = S != null ? S.kd : 0, Q = S ?? new ta();
      if (e == null || 12 > u) return 7;
      Q.data = e, Q.w = i, Q.ha = u, i = [i], u = [u], Q.gb = [Q.gb];
      e: {
        var xe = i, pe = u, Y = Q.gb;
        if (t(e != null), t(pe != null), t(Y != null), Y[0] = 0, 12 <= pe[0] && !r(e, xe[0], "RIFF")) {
          if (r(e, xe[0] + 8, "WEBP")) {
            Y = 3;
            break e;
          }
          var K = Ie(e, xe[0] + 4);
          if (12 > K || 4294967286 < K) {
            Y = 3;
            break e;
          }
          if (re && K > pe[0] - 8) {
            Y = 7;
            break e;
          }
          Y[0] = K, xe[0] += 12, pe[0] -= 12;
        }
        Y = 0;
      }
      if (Y != 0) return Y;
      for (K = 0 < Q.gb[0], u = u[0]; ; ) {
        e: {
          var ve = e;
          pe = i, Y = u;
          var Ae = C, ye = G, Re = xe = [0];
          if ((Ee = ne = [ne])[0] = 0, 8 > Y[0]) Y = 7;
          else {
            if (!r(ve, pe[0], "VP8X")) {
              if (Ie(ve, pe[0] + 4) != 10) {
                Y = 3;
                break e;
              }
              if (18 > Y[0]) {
                Y = 7;
                break e;
              }
              var Fe = Ie(ve, pe[0] + 8), We = 1 + ue(ve, pe[0] + 12);
              if (2147483648 <= We * (ve = 1 + ue(ve, pe[0] + 15))) {
                Y = 3;
                break e;
              }
              Re != null && (Re[0] = Fe), Ae != null && (Ae[0] = We), ye != null && (ye[0] = ve), pe[0] += 18, Y[0] -= 18, Ee[0] = 1;
            }
            Y = 0;
          }
        }
        if (ne = ne[0], xe = xe[0], Y != 0) return Y;
        if (pe = !!(2 & xe), !K && ne) return 3;
        if (x != null && (x[0] = !!(16 & xe)), L != null && (L[0] = pe), A != null && (A[0] = 0), L = C[0], xe = G[0], ne && pe && S == null) {
          Y = 0;
          break;
        }
        if (4 > u) {
          Y = 7;
          break;
        }
        if (K && ne || !K && !ne && !r(e, i[0], "ALPH")) {
          u = [u], Q.na = [Q.na], Q.P = [Q.P], Q.Sa = [Q.Sa];
          e: {
            Fe = e, Y = i, K = u;
            var Ee = Q.gb;
            Ae = Q.na, ye = Q.P, Re = Q.Sa, We = 22, t(Fe != null), t(K != null), ve = Y[0];
            var ut = K[0];
            for (t(Ae != null), t(Re != null), Ae[0] = null, ye[0] = null, Re[0] = 0; ; ) {
              if (Y[0] = ve, K[0] = ut, 8 > ut) {
                Y = 7;
                break e;
              }
              var pt = Ie(Fe, ve + 4);
              if (4294967286 < pt) {
                Y = 3;
                break e;
              }
              var ct = 8 + pt + 1 & -2;
              if (We += ct, 0 < Ee && We > Ee) {
                Y = 3;
                break e;
              }
              if (!r(Fe, ve, "VP8 ") || !r(Fe, ve, "VP8L")) {
                Y = 0;
                break e;
              }
              if (ut[0] < ct) {
                Y = 7;
                break e;
              }
              r(Fe, ve, "ALPH") || (Ae[0] = Fe, ye[0] = ve + 8, Re[0] = pt), ve += ct, ut -= ct;
            }
          }
          if (u = u[0], Q.na = Q.na[0], Q.P = Q.P[0], Q.Sa = Q.Sa[0], Y != 0) break;
        }
        u = [u], Q.Ja = [Q.Ja], Q.xa = [Q.xa];
        e: if (Ee = e, Y = i, K = u, Ae = Q.gb[0], ye = Q.Ja, Re = Q.xa, Fe = Y[0], ve = !r(Ee, Fe, "VP8 "), We = !r(Ee, Fe, "VP8L"), t(Ee != null), t(K != null), t(ye != null), t(Re != null), 8 > K[0]) Y = 7;
        else {
          if (ve || We) {
            if (Ee = Ie(Ee, Fe + 4), 12 <= Ae && Ee > Ae - 12) {
              Y = 3;
              break e;
            }
            if (re && Ee > K[0] - 8) {
              Y = 7;
              break e;
            }
            ye[0] = Ee, Y[0] += 8, K[0] -= 8, Re[0] = We;
          } else Re[0] = 5 <= K[0] && Ee[Fe + 0] == 47 && !(Ee[Fe + 4] >> 5), ye[0] = K[0];
          Y = 0;
        }
        if (u = u[0], Q.Ja = Q.Ja[0], Q.xa = Q.xa[0], i = i[0], Y != 0) break;
        if (4294967286 < Q.Ja) return 3;
        if (A == null || pe || (A[0] = Q.xa ? 2 : 1), L = [L], xe = [xe], Q.xa) {
          if (5 > u) {
            Y = 7;
            break;
          }
          A = L, re = xe, pe = x, e == null || 5 > u ? e = 0 : 5 <= u && e[i + 0] == 47 && !(e[i + 4] >> 5) ? (K = [0], Ee = [0], Ae = [0], te(ye = new w(), e, i, u), Ge(ye, K, Ee, Ae) ? (A != null && (A[0] = K[0]), re != null && (re[0] = Ee[0]), pe != null && (pe[0] = Ae[0]), e = 1) : e = 0) : e = 0;
        } else {
          if (10 > u) {
            Y = 7;
            break;
          }
          A = xe, e == null || 10 > u || !Ca(e, i + 3, u - 3) ? e = 0 : (re = e[i + 0] | e[i + 1] << 8 | e[i + 2] << 16, pe = 16383 & (e[i + 7] << 8 | e[i + 6]), e = 16383 & (e[i + 9] << 8 | e[i + 8]), 1 & re || 3 < (re >> 1 & 7) || !(re >> 4 & 1) || re >> 5 >= Q.Ja || !pe || !e ? e = 0 : (L && (L[0] = pe), A && (A[0] = e), e = 1));
        }
        if (!e || (L = L[0], xe = xe[0], ne && (C[0] != L || G[0] != xe))) return 3;
        S != null && (S[0] = Q, S.offset = i - S.w, t(4294967286 > i - S.w), t(S.offset == S.ha - u));
        break;
      }
      return Y == 0 || Y == 7 && ne && S == null ? (x != null && (x[0] |= Q.na != null && 0 < Q.na.length), d != null && (d[0] = L), m != null && (m[0] = xe), 0) : Y;
    }
    function sa(e, i, u) {
      var d = i.width, m = i.height, x = 0, L = 0, A = d, S = m;
      if (i.Da = e != null && 0 < e.Da, i.Da && (A = e.cd, S = e.bd, x = e.v, L = e.j, 11 > u || (x &= -2, L &= -2), 0 > x || 0 > L || 0 >= A || 0 >= S || x + A > d || L + S > m)) return 0;
      if (i.v = x, i.j = L, i.va = x + A, i.o = L + S, i.U = A, i.T = S, i.da = e != null && 0 < e.da, i.da) {
        if (!Xe(A, S, u = [e.ib], x = [e.hb])) return 0;
        i.ib = u[0], i.hb = x[0];
      }
      return i.ob = e != null && e.ob, i.Kb = e == null || !e.Sd, i.da && (i.ob = i.ib < 3 * d / 4 && i.hb < 3 * m / 4, i.Kb = 0), 1;
    }
    function la(e) {
      if (e == null) return 2;
      if (11 > e.S) {
        var i = e.f.RGBA;
        i.fb += (e.height - 1) * i.A, i.A = -i.A;
      } else i = e.f.kb, e = e.height, i.O += (e - 1) * i.fa, i.fa = -i.fa, i.N += (e - 1 >> 1) * i.Ab, i.Ab = -i.Ab, i.W += (e - 1 >> 1) * i.Db, i.Db = -i.Db, i.F != null && (i.J += (e - 1) * i.lb, i.lb = -i.lb);
      return 0;
    }
    function Ni(e, i, u, d) {
      if (d == null || 0 >= e || 0 >= i) return 2;
      if (u != null) {
        if (u.Da) {
          var m = u.cd, x = u.bd, L = -2 & u.v, A = -2 & u.j;
          if (0 > L || 0 > A || 0 >= m || 0 >= x || L + m > e || A + x > i) return 2;
          e = m, i = x;
        }
        if (u.da) {
          if (!Xe(e, i, m = [u.ib], x = [u.hb])) return 2;
          e = m[0], i = x[0];
        }
      }
      d.width = e, d.height = i;
      e: {
        var S = d.width, C = d.height;
        if (e = d.S, 0 >= S || 0 >= C || !(e >= Qa && 13 > e)) e = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            L = x = m = i = 0;
            var G = (A = S * Rl[e]) * C;
            if (11 > e || (x = (C + 1) / 2 * (i = (S + 1) / 2), e == 12 && (L = (m = S) * C)), (C = o(G + 2 * x + L)) == null) {
              e = 1;
              break e;
            }
            d.sd = C, 11 > e ? ((S = d.f.RGBA).eb = C, S.fb = 0, S.A = A, S.size = G) : ((S = d.f.kb).y = C, S.O = 0, S.fa = A, S.Fd = G, S.f = C, S.N = 0 + G, S.Ab = i, S.Cd = x, S.ea = C, S.W = 0 + G + x, S.Db = i, S.Ed = x, e == 12 && (S.F = C, S.J = 0 + G + 2 * x), S.Tc = L, S.lb = m);
          }
          if (i = 1, m = d.S, x = d.width, L = d.height, m >= Qa && 13 > m) if (11 > m) e = d.f.RGBA, i &= (A = Math.abs(e.A)) * (L - 1) + x <= e.size, i &= A >= x * Rl[m], i &= e.eb != null;
          else {
            e = d.f.kb, A = (x + 1) / 2, G = (L + 1) / 2, S = Math.abs(e.fa), C = Math.abs(e.Ab);
            var ne = Math.abs(e.Db), re = Math.abs(e.lb), Q = re * (L - 1) + x;
            i &= S * (L - 1) + x <= e.Fd, i &= C * (G - 1) + A <= e.Cd, i = (i &= ne * (G - 1) + A <= e.Ed) & S >= x & C >= A & ne >= A, i &= e.y != null, i &= e.f != null, i &= e.ea != null, m == 12 && (i &= re >= x, i &= Q <= e.Tc, i &= e.F != null);
          }
          else i = 0;
          e = i ? 0 : 2;
        }
      }
      return e != 0 || u != null && u.fd && (e = la(d)), e;
    }
    var Xt = 64, Ai = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Si = 24, _i = 32, ca = 8, fn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    je("Predictor0", "PredictorAdd0"), H.Predictor0 = function() {
      return 4278190080;
    }, H.Predictor1 = function(e) {
      return e;
    }, H.Predictor2 = function(e, i, u) {
      return i[u + 0];
    }, H.Predictor3 = function(e, i, u) {
      return i[u + 1];
    }, H.Predictor4 = function(e, i, u) {
      return i[u - 1];
    }, H.Predictor5 = function(e, i, u) {
      return Oe(Oe(e, i[u + 1]), i[u + 0]);
    }, H.Predictor6 = function(e, i, u) {
      return Oe(e, i[u - 1]);
    }, H.Predictor7 = function(e, i, u) {
      return Oe(e, i[u + 0]);
    }, H.Predictor8 = function(e, i, u) {
      return Oe(i[u - 1], i[u + 0]);
    }, H.Predictor9 = function(e, i, u) {
      return Oe(i[u + 0], i[u + 1]);
    }, H.Predictor10 = function(e, i, u) {
      return Oe(Oe(e, i[u - 1]), Oe(i[u + 0], i[u + 1]));
    }, H.Predictor11 = function(e, i, u) {
      var d = i[u + 0];
      return 0 >= nt(d >> 24 & 255, e >> 24 & 255, (i = i[u - 1]) >> 24 & 255) + nt(d >> 16 & 255, e >> 16 & 255, i >> 16 & 255) + nt(d >> 8 & 255, e >> 8 & 255, i >> 8 & 255) + nt(255 & d, 255 & e, 255 & i) ? d : e;
    }, H.Predictor12 = function(e, i, u) {
      var d = i[u + 0];
      return (He((e >> 24 & 255) + (d >> 24 & 255) - ((i = i[u - 1]) >> 24 & 255)) << 24 | He((e >> 16 & 255) + (d >> 16 & 255) - (i >> 16 & 255)) << 16 | He((e >> 8 & 255) + (d >> 8 & 255) - (i >> 8 & 255)) << 8 | He((255 & e) + (255 & d) - (255 & i))) >>> 0;
    }, H.Predictor13 = function(e, i, u) {
      var d = i[u - 1];
      return ($e((e = Oe(e, i[u + 0])) >> 24 & 255, d >> 24 & 255) << 24 | $e(e >> 16 & 255, d >> 16 & 255) << 16 | $e(e >> 8 & 255, d >> 8 & 255) << 8 | $e(e >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var Ds = H.PredictorAdd0;
    H.PredictorAdd1 = it, je("Predictor2", "PredictorAdd2"), je("Predictor3", "PredictorAdd3"), je("Predictor4", "PredictorAdd4"), je("Predictor5", "PredictorAdd5"), je("Predictor6", "PredictorAdd6"), je("Predictor7", "PredictorAdd7"), je("Predictor8", "PredictorAdd8"), je("Predictor9", "PredictorAdd9"), je("Predictor10", "PredictorAdd10"), je("Predictor11", "PredictorAdd11"), je("Predictor12", "PredictorAdd12"), je("Predictor13", "PredictorAdd13");
    var ua = H.PredictorAdd2;
    Me("ColorIndexInverseTransform", "MapARGB", "32b", function(e) {
      return e >> 8 & 255;
    }, function(e) {
      return e;
    }), Me("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(e) {
      return e;
    }, function(e) {
      return e >> 8 & 255;
    });
    var Ya, Sn = H.ColorIndexInverseTransform, Pi = H.MapARGB, Ja = H.VP8LColorIndexInverseTransformAlpha, Xa = H.MapAlpha, Nr = H.VP8LPredictorsAdd = [];
    Nr.length = 16, (H.VP8LPredictors = []).length = 16, (H.VP8LPredictorsAdd_C = []).length = 16, (H.VP8LPredictors_C = []).length = 16;
    var $r, dn, sn, Ar, fr, dr, Ii, pr, Ft, ha, ln, _n, ki, $a, fa, Kr, Zr, Sr, Qr, Ci, ei, _r, da, Pn, In, Lt, Nt, Ot, Ht = o(511), gr = o(2041), pa = o(225), ji = o(767), Ka = 0, qs = gr, Za = pa, wn = ji, kn = Ht, Qa = 0, eo = 1, Pl = 2, to = 3, no = 4, zs = 5, Il = 6, Us = 7, Hs = 8, ro = 9, Vs = 10, Zc = [2, 3, 7], Qc = [3, 3, 11], kl = [280, 256, 256, 256, 40], eu = [0, 1, 1, 1, 0], tu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], nu = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], ru = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], iu = 8, Ws = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], Gs = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ga = null, au = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], ou = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], Cl = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], su = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], lu = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], cu = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], uu = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Pr = [], qn = [], mr = [], hu = 1, jl = 2, Ir = [], Cn = [];
    me("UpsampleRgbLinePair", lt, 3), me("UpsampleBgrLinePair", St, 3), me("UpsampleRgbaLinePair", Dn, 4), me("UpsampleBgraLinePair", Vt, 4), me("UpsampleArgbLinePair", Qt, 4), me("UpsampleRgba4444LinePair", Dt, 2), me("UpsampleRgb565LinePair", It, 2);
    var fu = H.UpsampleRgbLinePair, du = H.UpsampleBgrLinePair, Fl = H.UpsampleRgbaLinePair, Ol = H.UpsampleBgraLinePair, Ml = H.UpsampleArgbLinePair, El = H.UpsampleRgba4444LinePair, pu = H.UpsampleRgb565LinePair, io = 16, ao = 1 << io - 1, ma = -227, Ys = 482, gu = 6, Bl = 0, mu = o(256), vu = o(256), bu = o(256), yu = o(256), wu = o(Ys - ma), xu = o(Ys - ma);
    tr("YuvToRgbRow", lt, 3), tr("YuvToBgrRow", St, 3), tr("YuvToRgbaRow", Dn, 4), tr("YuvToBgraRow", Vt, 4), tr("YuvToArgbRow", Qt, 4), tr("YuvToRgba4444Row", Dt, 2), tr("YuvToRgb565Row", It, 2);
    var Tl = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], oo = [0, 2, 8], Lu = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Nu = 1;
    this.WebPDecodeRGBA = function(e, i, u, d, m) {
      var x = eo, L = new wi(), A = new Fn();
      L.ba = A, A.S = x, A.width = [A.width], A.height = [A.height];
      var S = A.width, C = A.height, G = new lr();
      if (G == null || e == null) var ne = 2;
      else t(G != null), ne = Li(e, i, u, G.width, G.height, G.Pd, G.Qd, G.format, null);
      if (ne != 0 ? S = 0 : (S != null && (S[0] = G.width[0]), C != null && (C[0] = G.height[0]), S = 1), S) {
        A.width = A.width[0], A.height = A.height[0], d != null && (d[0] = A.width), m != null && (m[0] = A.height);
        e: {
          if (d = new di(), (m = new ta()).data = e, m.w = i, m.ha = u, m.kd = 1, i = [0], t(m != null), ((e = Li(m.data, m.w, m.ha, null, null, null, i, null, m)) == 0 || e == 7) && i[0] && (e = 4), (i = e) == 0) {
            if (t(L != null), d.data = m.data, d.w = m.w + m.offset, d.ha = m.ha - m.offset, d.put = Jn, d.ac = Jt, d.bc = Xn, d.ma = L, m.xa) {
              if ((e = An()) == null) {
                L = 1;
                break e;
              }
              if (function(re, Q) {
                var xe = [0], pe = [0], Y = [0];
                t: for (; ; ) {
                  if (re == null) return 0;
                  if (Q == null) return re.a = 2, 0;
                  if (re.l = Q, re.a = 0, te(re.m, Q.data, Q.w, Q.ha), !Ge(re.m, xe, pe, Y)) {
                    re.a = 3;
                    break t;
                  }
                  if (re.xb = jl, Q.width = xe[0], Q.height = pe[0], !Zn(xe[0], pe[0], 1, re, null)) break t;
                  return 1;
                }
                return t(re.a != 0), 0;
              }(e, d)) {
                if (d = (i = Ni(d.width, d.height, L.Oa, L.ba)) == 0) {
                  t: {
                    d = e;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break t;
                      }
                      if (t(d.s.yc != null), t(d.s.Ya != null), t(0 < d.s.Wb), t((u = d.l) != null), t((m = u.ma) != null), d.xb != 0) {
                        if (d.ca = m.ba, d.tb = m.tb, t(d.ca != null), !sa(m.Oa, u, to)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Wr(d, u.width) || u.da) break n;
                        if ((u.da || ht(d.ca.S)) && ee(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && ee()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !Ue(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Bn(d, d.V, d.Ba, d.c, d.i, u.o, si)) break n;
                      m.Dc = d.Ma, d = 1;
                      break t;
                    }
                    t(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (i = e.a);
              } else i = e.a;
            } else {
              if ((e = new ws()) == null) {
                L = 1;
                break e;
              }
              if (e.Fa = m.na, e.P = m.P, e.qc = m.Sa, ja(e, d)) {
                if ((i = Ni(d.width, d.height, L.Oa, L.ba)) == 0) {
                  if (e.Aa = 0, u = L.Oa, t((m = e) != null), u != null) {
                    if (0 < (S = 0 > (S = u.Md) ? 0 : 100 < S ? 255 : 255 * S / 100)) {
                      for (C = G = 0; 4 > C; ++C) 12 > (ne = m.pb[C]).lc && (ne.ia = S * Lu[0 > ne.lc ? 0 : ne.lc] >> 3), G |= ne.ia;
                      G && (alert("todo:VP8InitRandom"), m.ia = 1);
                    }
                    m.Ga = u.Id, 100 < m.Ga ? m.Ga = 100 : 0 > m.Ga && (m.Ga = 0);
                  }
                  xs(e, d) || (i = e.a);
                }
              } else i = e.a;
            }
            i == 0 && L.Oa != null && L.Oa.fd && (i = la(L.ba));
          }
          L = i;
        }
        x = L != 0 ? null : 11 > x ? A.f.RGBA.eb : A.f.kb.y;
      } else x = null;
      return x;
    };
    var Rl = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(H, ae) {
    for (var de = "", P = 0; P < 4; P++) de += String.fromCharCode(H[ae++]);
    return de;
  }
  function b(H, ae) {
    return (H[ae + 0] << 0 | H[ae + 1] << 8 | H[ae + 2] << 16) >>> 0;
  }
  function y(H, ae) {
    return (H[ae + 0] << 0 | H[ae + 1] << 8 | H[ae + 2] << 16 | H[ae + 3] << 24) >>> 0;
  }
  new f();
  var N = [0], p = [0], O = [], I = new f(), F = n, _ = function(H, ae) {
    var de = {}, P = 0, k = !1, W = 0, z = 0;
    if (de.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(j, B, U, q) {
      for (var J = 0; J < q; J++) if (j[B + J] != U.charCodeAt(J)) return !0;
      return !1;
    }(H, ae, "RIFF", 4)) {
      for (y(H, ae += 4), ae += 8; ae < H.length; ) {
        var le = g(H, ae), oe = y(H, ae += 4);
        ae += 4;
        var fe = oe + (1 & oe);
        switch (le) {
          case "VP8 ":
          case "VP8L":
            de.frames[P] === void 0 && (de.frames[P] = {}), (D = de.frames[P]).src_off = k ? z : ae - 8, D.src_size = W + oe + 8, P++, k && (k = !1, W = 0, z = 0);
            break;
          case "VP8X":
            (D = de.header = {}).feature_flags = H[ae];
            var te = ae + 4;
            D.canvas_width = 1 + b(H, te), te += 3, D.canvas_height = 1 + b(H, te), te += 3;
            break;
          case "ALPH":
            k = !0, W = fe + 8, z = ae - 8;
            break;
          case "ANIM":
            (D = de.header).bgcolor = y(H, ae), te = ae + 4, D.loop_count = (be = H)[(w = te) + 0] << 0 | be[w + 1] << 8, te += 2;
            break;
          case "ANMF":
            var $, D;
            (D = de.frames[P] = {}).offset_x = 2 * b(H, ae), ae += 3, D.offset_y = 2 * b(H, ae), ae += 3, D.width = 1 + b(H, ae), ae += 3, D.height = 1 + b(H, ae), ae += 3, D.duration = b(H, ae), ae += 3, $ = H[ae++], D.dispose = 1 & $, D.blend = $ >> 1 & 1;
        }
        le != "ANMF" && (ae += fe);
      }
      var be, w;
      return de;
    }
  }(F, 0);
  _.response = F, _.rgbaoutput = !0, _.dataurl = !1;
  var E = _.header ? _.header : null, Z = _.frames ? _.frames : null;
  if (E) {
    E.loop_counter = E.loop_count, N = [E.canvas_height], p = [E.canvas_width];
    for (var se = 0; se < Z.length && Z[se].blend != 0; se++) ;
  }
  var he = Z[0], Le = I.WebPDecodeRGBA(F, he.src_off, he.src_size, p, N);
  he.rgba = Le, he.imgwidth = p[0], he.imgheight = N[0];
  for (var ie = 0; ie < p[0] * N[0] * 4; ie++) O[ie] = Le[ie];
  return this.width = p, this.height = N, this.data = O, this;
}
(function(n) {
  var t = function() {
    return typeof vl == "function";
  }, r = function(N, p, O, I) {
    var F = 4, _ = c;
    switch (I) {
      case n.image_compression.FAST:
        F = 1, _ = o;
        break;
      case n.image_compression.MEDIUM:
        F = 6, _ = h;
        break;
      case n.image_compression.SLOW:
        F = 9, _ = f;
    }
    N = a(N, p, O, _);
    var E = vl(N, { level: F });
    return n.__addimage__.arrayBufferToBinaryString(E);
  }, a = function(N, p, O, I) {
    for (var F, _, E, Z = N.length / p, se = new Uint8Array(N.length + Z), he = b(), Le = 0; Le < Z; Le += 1) {
      if (E = Le * p, F = N.subarray(E, E + p), I) se.set(I(F, O, _), E + Le);
      else {
        for (var ie, H = he.length, ae = []; ie < H; ie += 1) ae[ie] = he[ie](F, O, _);
        var de = y(ae.concat());
        se.set(ae[de], E + Le);
      }
      _ = F;
    }
    return se;
  }, s = function(N) {
    var p = Array.apply([], N);
    return p.unshift(0), p;
  }, o = function(N, p) {
    var O, I = [], F = N.length;
    I[0] = 1;
    for (var _ = 0; _ < F; _ += 1) O = N[_ - p] || 0, I[_ + 1] = N[_] - O + 256 & 255;
    return I;
  }, c = function(N, p, O) {
    var I, F = [], _ = N.length;
    F[0] = 2;
    for (var E = 0; E < _; E += 1) I = O && O[E] || 0, F[E + 1] = N[E] - I + 256 & 255;
    return F;
  }, h = function(N, p, O) {
    var I, F, _ = [], E = N.length;
    _[0] = 3;
    for (var Z = 0; Z < E; Z += 1) I = N[Z - p] || 0, F = O && O[Z] || 0, _[Z + 1] = N[Z] + 256 - (I + F >>> 1) & 255;
    return _;
  }, f = function(N, p, O) {
    var I, F, _, E, Z = [], se = N.length;
    Z[0] = 4;
    for (var he = 0; he < se; he += 1) I = N[he - p] || 0, F = O && O[he] || 0, _ = O && O[he - p] || 0, E = g(I, F, _), Z[he + 1] = N[he] - E + 256 & 255;
    return Z;
  }, g = function(N, p, O) {
    if (N === p && p === O) return N;
    var I = Math.abs(p - O), F = Math.abs(N - O), _ = Math.abs(N + p - O - O);
    return I <= F && I <= _ ? N : F <= _ ? p : O;
  }, b = function() {
    return [s, o, c, h, f];
  }, y = function(N) {
    var p = N.map(function(O) {
      return O.reduce(function(I, F) {
        return I + Math.abs(F);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  n.processPNG = function(N, p, O, I) {
    var F, _, E, Z, se, he, Le, ie, H, ae, de, P, k, W, z, le = this.decode.FLATE_DECODE, oe = "";
    if (this.__addimage__.isArrayBuffer(N) && (N = new Uint8Array(N)), this.__addimage__.isArrayBufferView(N)) {
      if (N = (E = new C1(N)).imgData, _ = E.bits, F = E.colorSpace, se = E.colors, [4, 6].indexOf(E.colorType) !== -1) {
        if (E.bits === 8) {
          H = (ie = E.pixelBitlength == 32 ? new Uint32Array(E.decodePixels().buffer) : E.pixelBitlength == 16 ? new Uint16Array(E.decodePixels().buffer) : new Uint8Array(E.decodePixels().buffer)).length, de = new Uint8Array(H * E.colors), ae = new Uint8Array(H);
          var fe, te = E.pixelBitlength - E.bits;
          for (W = 0, z = 0; W < H; W++) {
            for (k = ie[W], fe = 0; fe < te; ) de[z++] = k >>> fe & 255, fe += E.bits;
            ae[W] = k >>> fe & 255;
          }
        }
        if (E.bits === 16) {
          H = (ie = new Uint32Array(E.decodePixels().buffer)).length, de = new Uint8Array(H * (32 / E.pixelBitlength) * E.colors), ae = new Uint8Array(H * (32 / E.pixelBitlength)), P = E.colors > 1, W = 0, z = 0;
          for (var $ = 0; W < H; ) k = ie[W++], de[z++] = k >>> 0 & 255, P && (de[z++] = k >>> 16 & 255, k = ie[W++], de[z++] = k >>> 0 & 255), ae[$++] = k >>> 16 & 255;
          _ = 8;
        }
        I !== n.image_compression.NONE && t() ? (N = r(de, E.width * E.colors, E.colors, I), Le = r(ae, E.width, 1, I)) : (N = de, Le = ae, le = void 0);
      }
      if (E.colorType === 3 && (F = this.color_spaces.INDEXED, he = E.palette, E.transparency.indexed)) {
        var D = E.transparency.indexed, be = 0;
        for (W = 0, H = D.length; W < H; ++W) be += D[W];
        if ((be /= 255) === H - 1 && D.indexOf(0) !== -1) Z = [D.indexOf(0)];
        else if (be !== H) {
          for (ie = E.decodePixels(), ae = new Uint8Array(ie.length), W = 0, H = ie.length; W < H; W++) ae[W] = D[ie[W]];
          Le = r(ae, E.width, 1);
        }
      }
      var w = function(j) {
        var B;
        switch (j) {
          case n.image_compression.FAST:
            B = 11;
            break;
          case n.image_compression.MEDIUM:
            B = 13;
            break;
          case n.image_compression.SLOW:
            B = 14;
            break;
          default:
            B = 12;
        }
        return B;
      }(I);
      return le === this.decode.FLATE_DECODE && (oe = "/Predictor " + w + " "), oe += "/Colors " + se + " /BitsPerComponent " + _ + " /Columns " + E.width, (this.__addimage__.isArrayBuffer(N) || this.__addimage__.isArrayBufferView(N)) && (N = this.__addimage__.arrayBufferToBinaryString(N)), (Le && this.__addimage__.isArrayBuffer(Le) || this.__addimage__.isArrayBufferView(Le)) && (Le = this.__addimage__.arrayBufferToBinaryString(Le)), { alias: O, data: N, index: p, filter: le, decodeParameters: oe, transparency: Z, palette: he, sMask: Le, predictor: w, width: E.width, height: E.height, bitsPerComponent: _, colorSpace: F };
    }
  };
})(Ye.API), function(n) {
  n.processGIF89A = function(t, r, a, s) {
    var o = new j1(t), c = o.width, h = o.height, f = [];
    o.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: c, height: h }, b = new fl(100).encode(g, 100);
    return n.processJPEG.call(this, b, r, a, s);
  }, n.processGIF87A = n.processGIF89A;
}(Ye.API), Hn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var t = 0; t < n; t++) {
      var r = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
      this.palette[t] = { red: s, green: a, blue: r, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, Hn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var n = "bit" + this.bitPP, t = this.width * this.height * 4;
    this.data = new Uint8Array(t), this[n]();
  } catch (r) {
    wt.log("bit decode error:" + r);
  }
}, Hn.prototype.bit1 = function() {
  var n, t = Math.ceil(this.width / 8), r = t % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, s = 0; s < t; s++) for (var o = this.datav.getUint8(this.pos++, !0), c = a * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
      var f = this.palette[o >> 7 - h & 1];
      this.data[c + 4 * h] = f.blue, this.data[c + 4 * h + 1] = f.green, this.data[c + 4 * h + 2] = f.red, this.data[c + 4 * h + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, Hn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), t = n % 4, r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, s = 0; s < n; s++) {
      var o = this.datav.getUint8(this.pos++, !0), c = a * this.width * 4 + 2 * s * 4, h = o >> 4, f = 15 & o, g = this.palette[h];
      if (this.data[c] = g.blue, this.data[c + 1] = g.green, this.data[c + 2] = g.red, this.data[c + 3] = 255, 2 * s + 1 >= this.width) break;
      g = this.palette[f], this.data[c + 4] = g.blue, this.data[c + 4 + 1] = g.green, this.data[c + 4 + 2] = g.red, this.data[c + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, Hn.prototype.bit8 = function() {
  for (var n = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var r = this.bottom_up ? t : this.height - 1 - t, a = 0; a < this.width; a++) {
      var s = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 4 * a;
      if (s < this.palette.length) {
        var c = this.palette[s];
        this.data[o] = c.red, this.data[o + 1] = c.green, this.data[o + 2] = c.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, Hn.prototype.bit15 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, s = 0; s < this.width; s++) {
      var o = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var c = (o & t) / t * 255 | 0, h = (o >> 5 & t) / t * 255 | 0, f = (o >> 10 & t) / t * 255 | 0, g = o >> 15 ? 255 : 0, b = a * this.width * 4 + 4 * s;
      this.data[b] = f, this.data[b + 1] = h, this.data[b + 2] = c, this.data[b + 3] = g;
    }
    this.pos += n;
  }
}, Hn.prototype.bit16 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), r = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
    for (var s = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
      var c = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (c & t) / t * 255 | 0, f = (c >> 5 & r) / r * 255 | 0, g = (c >> 11) / t * 255 | 0, b = s * this.width * 4 + 4 * o;
      this.data[b] = g, this.data[b + 1] = f, this.data[b + 2] = h, this.data[b + 3] = 255;
    }
    this.pos += n;
  }
}, Hn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var t = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
      var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), c = t * this.width * 4 + 4 * r;
      this.data[c] = o, this.data[c + 1] = s, this.data[c + 2] = a, this.data[c + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, Hn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var t = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
    var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), c = this.datav.getUint8(this.pos++, !0), h = t * this.width * 4 + 4 * r;
    this.data[h] = o, this.data[h + 1] = s, this.data[h + 2] = a, this.data[h + 3] = c;
  }
}, Hn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processBMP = function(t, r, a, s) {
    var o = new Hn(t, !1), c = o.width, h = o.height, f = { data: o.getData(), width: c, height: h }, g = new fl(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, a, s);
  };
}(Ye.API), Nc.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processWEBP = function(t, r, a, s) {
    var o = new Nc(t), c = o.width, h = o.height, f = { data: o.getData(), width: c, height: h }, g = new fl(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, a, s);
  };
}(Ye.API), Ye.API.processRGBA = function(n, t, r) {
  for (var a = n.data, s = a.length, o = new Uint8Array(s / 4 * 3), c = new Uint8Array(s / 4), h = 0, f = 0, g = 0; g < s; g += 4) {
    var b = a[g], y = a[g + 1], N = a[g + 2], p = a[g + 3];
    o[h++] = b, o[h++] = y, o[h++] = N, c[f++] = p;
  }
  var O = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(c), data: O, index: t, alias: r, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, Ye.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Ti = Ye.API, Lo = Ti.getCharWidthsArray = function(n, t) {
  var r, a, s = (t = t || {}).font || this.internal.getFont(), o = t.fontSize || this.internal.getFontSize(), c = t.charSpace || this.internal.getCharSpace(), h = t.widths ? t.widths : s.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = t.kerning ? t.kerning : s.metadata.Unicode.kerning, b = g.fof ? g.fof : 1, y = t.doKerning !== !1, N = 0, p = n.length, O = 0, I = h[0] || f, F = [];
  for (r = 0; r < p; r++) a = n.charCodeAt(r), typeof s.metadata.widthOfString == "function" ? F.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(a)) + c * (1e3 / o) || 0) / 1e3) : (N = y && mt(g[a]) === "object" && !isNaN(parseInt(g[a][O], 10)) ? g[a][O] / b : 0, F.push((h[a] || I) / f + N)), O = a;
  return F;
}, yc = Ti.getStringUnitWidth = function(n, t) {
  var r = (t = t || {}).fontSize || this.internal.getFontSize(), a = t.font || this.internal.getFont(), s = t.charSpace || this.internal.getCharSpace();
  return Ti.processArabic && (n = Ti.processArabic(n)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(n, r, s) / r : Lo.apply(this, arguments).reduce(function(o, c) {
    return o + c;
  }, 0);
}, wc = function(n, t, r, a) {
  for (var s = [], o = 0, c = n.length, h = 0; o !== c && h + t[o] < r; ) h += t[o], o++;
  s.push(n.slice(0, o));
  var f = o;
  for (h = 0; o !== c; ) h + t[o] > a && (s.push(n.slice(f, o)), h = 0, f = o), h += t[o], o++;
  return f !== o && s.push(n.slice(f, o)), s;
}, xc = function(n, t, r) {
  r || (r = {});
  var a, s, o, c, h, f, g, b = [], y = [b], N = r.textIndent || 0, p = 0, O = 0, I = n.split(" "), F = Lo.apply(this, [" ", r])[0];
  if (f = r.lineIndent === -1 ? I[0].length + 2 : r.lineIndent || 0) {
    var _ = Array(f).join(" "), E = [];
    I.map(function(se) {
      (se = se.split(/\s*\n/)).length > 1 ? E = E.concat(se.map(function(he, Le) {
        return (Le && he.length ? `
` : "") + he;
      })) : E.push(se[0]);
    }), I = E, f = yc.apply(this, [_, r]);
  }
  for (o = 0, c = I.length; o < c; o++) {
    var Z = 0;
    if (a = I[o], f && a[0] == `
` && (a = a.substr(1), Z = 1), N + p + (O = (s = Lo.apply(this, [a, r])).reduce(function(se, he) {
      return se + he;
    }, 0)) > t || Z) {
      if (O > t) {
        for (h = wc.apply(this, [a, s, t - (N + p), t]), b.push(h.shift()), b = [h.pop()]; h.length; ) y.push([h.shift()]);
        O = s.slice(a.length - (b[0] ? b[0].length : 0)).reduce(function(se, he) {
          return se + he;
        }, 0);
      } else b = [a];
      y.push(b), N = O + f, p = F;
    } else b.push(a), N += p + O, p = F;
  }
  return g = f ? function(se, he) {
    return (he ? _ : "") + se.join(" ");
  } : function(se) {
    return se.join(" ");
  }, y.map(g);
}, Ti.splitTextToSize = function(n, t, r) {
  var a, s = (r = r || {}).fontSize || this.internal.getFontSize(), o = (function(b) {
    if (b.widths && b.kerning) return { widths: b.widths, kerning: b.kerning };
    var y = this.internal.getFont(b.fontName, b.fontStyle);
    return y.metadata.Unicode ? { widths: y.metadata.Unicode.widths || { 0: 1 }, kerning: y.metadata.Unicode.kerning || {} } : { font: y.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, r);
  a = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var c = 1 * this.internal.scaleFactor * t / s;
  o.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / s : 0, o.lineIndent = r.lineIndent;
  var h, f, g = [];
  for (h = 0, f = a.length; h < f; h++) g = g.concat(xc.apply(this, [a[h], c, o]));
  return g;
}, function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var t = "klmnopqrstuvwxyz", r = {}, a = {}, s = 0; s < t.length; s++) r[t[s]] = "0123456789abcdef"[s], a["0123456789abcdef"[s]] = t[s];
  var o = function(y) {
    return "0x" + parseInt(y, 10).toString(16);
  }, c = n.__fontmetrics__.compress = function(y) {
    var N, p, O, I, F = ["{"];
    for (var _ in y) {
      if (N = y[_], isNaN(parseInt(_, 10)) ? p = "'" + _ + "'" : (_ = parseInt(_, 10), p = (p = o(_).slice(2)).slice(0, -1) + a[p.slice(-1)]), typeof N == "number") N < 0 ? (O = o(N).slice(3), I = "-") : (O = o(N).slice(2), I = ""), O = I + O.slice(0, -1) + a[O.slice(-1)];
      else {
        if (mt(N) !== "object") throw new Error("Don't know what to do with value type " + mt(N) + ".");
        O = c(N);
      }
      F.push(p + O);
    }
    return F.push("}"), F.join("");
  }, h = n.__fontmetrics__.uncompress = function(y) {
    if (typeof y != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var N, p, O, I, F = {}, _ = 1, E = F, Z = [], se = "", he = "", Le = y.length - 1, ie = 1; ie < Le; ie += 1) (I = y[ie]) == "'" ? N ? (O = N.join(""), N = void 0) : N = [] : N ? N.push(I) : I == "{" ? (Z.push([E, O]), E = {}, O = void 0) : I == "}" ? ((p = Z.pop())[0][p[1]] = E, O = void 0, E = p[0]) : I == "-" ? _ = -1 : O === void 0 ? r.hasOwnProperty(I) ? (se += r[I], O = parseInt(se, 16) * _, _ = 1, se = "") : se += I : r.hasOwnProperty(I) ? (he += r[I], E[O] = parseInt(he, 16) * _, _ = 1, O = void 0, he = "") : he += I;
    return F;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, b = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(y) {
    var N = y.font, p = b.Unicode[N.postScriptName];
    p && (N.metadata.Unicode = {}, N.metadata.Unicode.widths = p.widths, N.metadata.Unicode.kerning = p.kerning);
    var O = g.Unicode[N.postScriptName];
    O && (N.metadata.Unicode.encoding = O, N.encoding = O.codePages[0]);
  }]);
}(Ye.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(r) {
    for (var a = r.length, s = new Uint8Array(a), o = 0; o < a; o++) s[o] = r.charCodeAt(o);
    return s;
  };
  n.API.events.push(["addFont", function(r) {
    var a = void 0, s = r.font, o = r.instance;
    if (!s.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      if (typeof (a = o.existsFileInVFS(s.postScriptName) === !1 ? o.loadFile(s.postScriptName) : o.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      (function(c, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? t(h) : t(Sa(h)), c.metadata = n.API.TTFFont.open(h), c.metadata.Unicode = c.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, c.metadata.glyIdsUsed = [0];
      })(s, a);
    }
  }]);
}(Ye), /** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(n) {
  function t() {
    return (Je.canvg ? Promise.resolve(Je.canvg) : import("./index.es-uErCeAmv.mjs")).catch(function(r) {
      return Promise.reject(new Error("Could not load canvg: " + r));
    }).then(function(r) {
      return r.default ? r.default : r;
    });
  }
  Ye.API.addSvgAsImage = function(r, a, s, o, c, h, f, g) {
    if (isNaN(a) || isNaN(s)) throw wt.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(c)) throw wt.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var b = document.createElement("canvas");
    b.width = o, b.height = c;
    var y = b.getContext("2d");
    y.fillStyle = "#fff", y.fillRect(0, 0, b.width, b.height);
    var N = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, p = this;
    return t().then(function(O) {
      return O.fromString(y, r, N);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(O) {
      return O.render(N);
    }).then(function() {
      p.addImage(b.toDataURL("image/jpeg", 1), a, s, o, c, f, g);
    });
  };
}(), Ye.API.putTotalPages = function(n) {
  var t, r = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(n, "g"), r = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var s = 0; s < this.internal.pages[a].length; s++) this.internal.pages[a][s] = this.internal.pages[a][s].replace(t, r);
  return this;
}, Ye.API.viewerPreferences = function(n, t) {
  var r;
  n = n || {}, t = t || !1;
  var a, s, o, c = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(c), f = [], g = 0, b = 0, y = 0;
  function N(O, I) {
    var F, _ = !1;
    for (F = 0; F < O.length; F += 1) O[F] === I && (_ = !0);
    return _;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(c)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, n === "reset" || t === !0) {
    var p = h.length;
    for (y = 0; y < p; y += 1) r[h[y]].value = r[h[y]].defaultValue, r[h[y]].explicitSet = !1;
  }
  if (mt(n) === "object") {
    for (s in n) if (o = n[s], N(h, s) && o !== void 0) {
      if (r[s].type === "boolean" && typeof o == "boolean") r[s].value = o;
      else if (r[s].type === "name" && N(r[s].valueSet, o)) r[s].value = o;
      else if (r[s].type === "integer" && Number.isInteger(o)) r[s].value = o;
      else if (r[s].type === "array") {
        for (g = 0; g < o.length; g += 1) if (a = !0, o[g].length === 1 && typeof o[g][0] == "number") f.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (b = 0; b < o[g].length; b += 1) typeof o[g][b] != "number" && (a = !1);
          a === !0 && f.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        r[s].value = "[" + f.join(" ") + "]";
      } else r[s].value = r[s].defaultValue;
      r[s].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var O, I = [];
    for (O in r) r[O].explicitSet === !0 && (r[O].type === "name" ? I.push("/" + O + " /" + r[O].value) : I.push("/" + O + " " + r[O].value));
    I.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + I.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(n) {
  var t = function() {
    var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(a)), c = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + c.length + h.length + s.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(s + o + c + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, r = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  n.addMetadata = function(a, s) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: a, namespaceuri: s || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", t)), this;
  };
}(Ye.API), function(n) {
  var t = n.API, r = t.pdfEscape16 = function(o, c) {
    for (var h, f = c.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], b = [""], y = 0, N = o.length; y < N; ++y) {
      if (h = c.metadata.characterToGlyph(o.charCodeAt(y)), c.metadata.glyIdsUsed.push(h), c.metadata.toUnicode[h] = o.charCodeAt(y), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(c.metadata.widthOfGlyph(h), 10)])), h == "0") return b.join("");
      h = h.toString(16), b.push(g[4 - h.length], h);
    }
    return b.join("");
  }, a = function(o) {
    var c, h, f, g, b, y, N;
    for (b = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, f = [], y = 0, N = (h = Object.keys(o).sort(function(p, O) {
      return p - O;
    })).length; y < N; y++) c = h[y], f.length >= 100 && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[c] !== void 0 && o[c] !== null && typeof o[c].toString == "function" && (g = ("0000" + o[c].toString(16)).slice(-4), c = ("0000" + (+c).toString(16)).slice(-4), f.push("<" + c + "><" + g + ">"));
    return f.length && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), b += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  t.events.push(["putFont", function(o) {
    (function(c) {
      var h = c.font, f = c.out, g = c.newObject, b = c.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "Identity-H") {
        for (var y = h.metadata.Unicode.widths, N = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", O = 0; O < N.length; O++) p += String.fromCharCode(N[O]);
        var I = g();
        b({ data: p, addLength1: !0, objectId: I }), f("endobj");
        var F = g();
        b({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: F }), f("endobj");
        var _ = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Di(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var E = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Di(h.fontName)), f("/FontDescriptor " + _ + " 0 R"), f("/W " + n.API.PDFObject.convert(y)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + F + " 0 R"), f("/BaseFont /" + Di(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + E + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]), t.events.push(["putFont", function(o) {
    (function(c) {
      var h = c.font, f = c.out, g = c.newObject, b = c.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var y = h.metadata.rawData, N = "", p = 0; p < y.length; p++) N += String.fromCharCode(y[p]);
        var O = g();
        b({ data: N, addLength1: !0, objectId: O }), f("endobj");
        var I = g();
        b({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: I }), f("endobj");
        var F = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + O + " 0 R"), f("/Flags 96"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + Di(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var _ = 0; _ < h.metadata.hmtx.widths.length; _++) h.metadata.hmtx.widths[_] = parseInt(h.metadata.hmtx.widths[_] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + Di(h.fontName) + "/FontDescriptor " + F + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]);
  var s = function(o) {
    var c, h = o.text || "", f = o.x, g = o.y, b = o.options || {}, y = o.mutex || {}, N = y.pdfEscape, p = y.activeFontKey, O = y.fonts, I = p, F = "", _ = 0, E = "", Z = O[I].encoding;
    if (O[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: b, mutex: y };
    for (E = h, I = p, Array.isArray(h) && (E = h[0]), _ = 0; _ < E.length; _ += 1) O[I].metadata.hasOwnProperty("cmap") && (c = O[I].metadata.cmap.unicode.codeMap[E[_].charCodeAt(0)]), c || E[_].charCodeAt(0) < 256 && O[I].metadata.hasOwnProperty("Unicode") ? F += E[_] : F += "";
    var se = "";
    return parseInt(I.slice(1)) < 14 || Z === "WinAnsiEncoding" ? se = N(F, I).split("").map(function(he) {
      return he.charCodeAt(0).toString(16);
    }).join("") : Z === "Identity-H" && (se = r(F, O[I])), y.isHex = !0, { text: se, x: f, y: g, options: b, mutex: y };
  };
  t.events.push(["postProcessText", function(o) {
    var c = o.text || "", h = [], f = { text: c, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(c)) {
      var g = 0;
      for (g = 0; g < c.length; g += 1) Array.isArray(c[g]) && c[g].length === 3 ? h.push([s(Object.assign({}, f, { text: c[g][0] })).text, c[g][1], c[g][2]]) : h.push(s(Object.assign({}, f, { text: c[g] })).text);
      o.text = h;
    } else o.text = s(Object.assign({}, f, { text: c })).text;
  }]);
}(Ye), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  n.existsFileInVFS = function(r) {
    return t.call(this), this.internal.vFS[r] !== void 0;
  }, n.addFileToVFS = function(r, a) {
    return t.call(this), this.internal.vFS[r] = a, this;
  }, n.getFileFromVFS = function(r) {
    return t.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
  };
}(Ye.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(a) {
    var s, o, c, h, f, g, b, y = t, N = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], O = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, F = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), E = !1, Z = 0;
    this.__bidiEngine__ = {};
    var se = function(P) {
      var k = P.charCodeAt(), W = k >> 8, z = I[W];
      return z !== void 0 ? y[256 * z + (255 & k)] : W === 252 || W === 253 ? "AL" : _.test(W) ? "L" : W === 8 ? "R" : "N";
    }, he = function(P) {
      for (var k, W = 0; W < P.length; W++) {
        if ((k = se(P.charAt(W))) === "L") return !1;
        if (k === "R") return !0;
      }
      return !1;
    }, Le = function(P, k, W, z) {
      var le, oe, fe, te, $ = k[z];
      switch ($) {
        case "L":
        case "R":
          E = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          E && ($ = "AN");
          break;
        case "AL":
          E = !0, $ = "R";
          break;
        case "WS":
          $ = "N";
          break;
        case "CS":
          z < 1 || z + 1 >= k.length || (le = W[z - 1]) !== "EN" && le !== "AN" || (oe = k[z + 1]) !== "EN" && oe !== "AN" ? $ = "N" : E && (oe = "AN"), $ = oe === le ? oe : "N";
          break;
        case "ES":
          $ = (le = z > 0 ? W[z - 1] : "B") === "EN" && z + 1 < k.length && k[z + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (z > 0 && W[z - 1] === "EN") {
            $ = "EN";
            break;
          }
          if (E) {
            $ = "N";
            break;
          }
          for (fe = z + 1, te = k.length; fe < te && k[fe] === "ET"; ) fe++;
          $ = fe < te && k[fe] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (c && !h) {
            for (te = k.length, fe = z + 1; fe < te && k[fe] === "NSM"; ) fe++;
            if (fe < te) {
              var D = P[z], be = D >= 1425 && D <= 2303 || D === 64286;
              if (le = k[fe], be && (le === "R" || le === "AL")) {
                $ = "R";
                break;
              }
            }
          }
          $ = z < 1 || (le = k[z - 1]) === "B" ? "N" : W[z - 1];
          break;
        case "B":
          E = !1, s = !0, $ = Z;
          break;
        case "S":
          o = !0, $ = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          E = !1;
          break;
        case "BN":
          $ = "N";
      }
      return $;
    }, ie = function(P, k, W) {
      var z = P.split("");
      return W && H(z, W, { hiLevel: Z }), z.reverse(), k && k.reverse(), z.join("");
    }, H = function(P, k, W) {
      var z, le, oe, fe, te, $ = -1, D = P.length, be = 0, w = [], j = Z ? p : N, B = [];
      for (E = !1, s = !1, o = !1, le = 0; le < D; le++) B[le] = se(P[le]);
      for (oe = 0; oe < D; oe++) {
        if (te = be, w[oe] = Le(P, B, w, oe), z = 240 & (be = j[te][O[w[oe]]]), be &= 15, k[oe] = fe = j[be][5], z > 0) if (z === 16) {
          for (le = $; le < oe; le++) k[le] = 1;
          $ = -1;
        } else $ = -1;
        if (j[be][6]) $ === -1 && ($ = oe);
        else if ($ > -1) {
          for (le = $; le < oe; le++) k[le] = fe;
          $ = -1;
        }
        B[oe] === "B" && (k[oe] = 0), W.hiLevel |= fe;
      }
      o && function(U, q, J) {
        for (var X = 0; X < J; X++) if (U[X] === "S") {
          q[X] = Z;
          for (var T = X - 1; T >= 0 && U[T] === "WS"; T--) q[T] = Z;
        }
      }(B, k, D);
    }, ae = function(P, k, W, z, le) {
      if (!(le.hiLevel < P)) {
        if (P === 1 && Z === 1 && !s) return k.reverse(), void (W && W.reverse());
        for (var oe, fe, te, $, D = k.length, be = 0; be < D; ) {
          if (z[be] >= P) {
            for (te = be + 1; te < D && z[te] >= P; ) te++;
            for ($ = be, fe = te - 1; $ < fe; $++, fe--) oe = k[$], k[$] = k[fe], k[fe] = oe, W && (oe = W[$], W[$] = W[fe], W[fe] = oe);
            be = te;
          }
          be++;
        }
      }
    }, de = function(P, k, W) {
      var z = P.split(""), le = { hiLevel: Z };
      return W || (W = []), H(z, W, le), function(oe, fe, te) {
        if (te.hiLevel !== 0 && b) for (var $, D = 0; D < oe.length; D++) fe[D] === 1 && ($ = F.indexOf(oe[D])) >= 0 && (oe[D] = F[$ + 1]);
      }(z, W, le), ae(2, z, k, W, le), ae(1, z, k, W, le), z.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(P, k, W) {
      if (function(le, oe) {
        if (oe) for (var fe = 0; fe < le.length; fe++) oe[fe] = fe;
        h === void 0 && (h = he(le)), g === void 0 && (g = he(le));
      }(P, k), c || !f || g) if (c && f && h ^ g) Z = h ? 1 : 0, P = ie(P, k, W);
      else if (!c && f && g) Z = h ? 1 : 0, P = de(P, k, W), P = ie(P, k);
      else if (!c || h || f || g) {
        if (c && !f && h ^ g) P = ie(P, k), h ? (Z = 0, P = de(P, k, W)) : (Z = 1, P = de(P, k, W), P = ie(P, k));
        else if (c && h && !f && g) Z = 1, P = de(P, k, W), P = ie(P, k);
        else if (!c && !f && h ^ g) {
          var z = b;
          h ? (Z = 1, P = de(P, k, W), Z = 0, b = !1, P = de(P, k, W), b = z) : (Z = 0, P = de(P, k, W), P = ie(P, k), Z = 1, b = !1, P = de(P, k, W), b = z, P = ie(P, k));
        }
      } else Z = 0, P = de(P, k, W);
      else Z = h ? 1 : 0, P = de(P, k, W);
      return P;
    }, this.__bidiEngine__.setOptions = function(P) {
      P && (c = P.isInputVisual, f = P.isOutputVisual, h = P.isInputRtl, g = P.isOutputRtl, b = P.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
  };
  var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(a) {
    var s = a.text;
    a.x, a.y;
    var o = a.options || {};
    a.mutex, o.lang;
    var c = [];
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, r.setOptions(o), Object.prototype.toString.call(s) === "[object Array]") {
      var h = 0;
      for (c = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? c.push([r.doBidiReorder(s[h][0]), s[h][1], s[h][2]]) : c.push([r.doBidiReorder(s[h])]);
      a.text = c;
    } else a.text = r.doBidiReorder(s);
    r.setOptions({ isInputVisual: !0 });
  }]);
}(Ye), Ye.API.TTFFont = function() {
  function n(t) {
    var r;
    if (this.rawData = t, r = this.contents = new qr(t), this.contents.pos = 4, r.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    r.pos = 0, this.parse(), this.subset = new G1(this), this.registerTTF();
  }
  return n.open = function(t) {
    return new n(t);
  }, n.prototype.parse = function() {
    return this.directory = new F1(this.contents), this.head = new M1(this), this.name = new D1(this), this.cmap = new Xc(this), this.toUnicode = {}, this.hhea = new E1(this), this.maxp = new q1(this), this.hmtx = new z1(this), this.post = new T1(this), this.os2 = new B1(this), this.loca = new W1(this), this.glyf = new U1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var t, r, a, s, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var c, h, f, g;
      for (g = [], c = 0, h = (f = this.bbox).length; c < h; c++) t = f[c], g.push(Math.round(t * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (s = this.post.italic_angle), (32768 & (r = s >> 16)) != 0 && (r = -(1 + (65535 ^ r))), this.italicAngle = +(r + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(t) {
    var r;
    return ((r = this.cmap.unicode) != null ? r.codeMap[t] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(t) {
    var r;
    return r = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * r;
  }, n.prototype.widthOfString = function(t, r, a) {
    var s, o, c, h;
    for (c = 0, o = 0, h = (t = "" + t).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) s = t.charCodeAt(o), c += this.widthOfGlyph(this.characterToGlyph(s)) + a * (1e3 / r) || 0;
    return c * (r / 1e3);
  }, n.prototype.lineHeight = function(t, r) {
    var a;
    return r == null && (r = !1), a = r ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * t;
  }, n;
}();
var Gn, qr = function() {
  function n(t) {
    this.data = t ?? [], this.pos = 0, this.length = this.data.length;
  }
  return n.prototype.readByte = function() {
    return this.data[this.pos++];
  }, n.prototype.writeByte = function(t) {
    return this.data[this.pos++] = t;
  }, n.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, n.prototype.writeUInt32 = function(t) {
    return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt32 = function() {
    var t;
    return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
  }, n.prototype.writeInt32 = function(t) {
    return t < 0 && (t += 4294967296), this.writeUInt32(t);
  }, n.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, n.prototype.writeUInt16 = function(t) {
    return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt16 = function() {
    var t;
    return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
  }, n.prototype.writeInt16 = function(t) {
    return t < 0 && (t += 65536), this.writeUInt16(t);
  }, n.prototype.readString = function(t) {
    var r, a;
    for (a = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r) a[r] = String.fromCharCode(this.readByte());
    return a.join("");
  }, n.prototype.writeString = function(t) {
    var r, a, s;
    for (s = [], r = 0, a = t.length; 0 <= a ? r < a : r > a; r = 0 <= a ? ++r : --r) s.push(this.writeByte(t.charCodeAt(r)));
    return s;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(t) {
    return this.writeInt16(t);
  }, n.prototype.readLongLong = function() {
    var t, r, a, s, o, c, h, f;
    return t = this.readByte(), r = this.readByte(), a = this.readByte(), s = this.readByte(), o = this.readByte(), c = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ r) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ o) + 65536 * (255 ^ c) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * t + 281474976710656 * r + 1099511627776 * a + 4294967296 * s + 16777216 * o + 65536 * c + 256 * h + f;
  }, n.prototype.writeLongLong = function(t) {
    var r, a;
    return r = Math.floor(t / 4294967296), a = 4294967295 & t, this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(t) {
    return this.writeInt32(t);
  }, n.prototype.read = function(t) {
    var r, a;
    for (r = [], a = 0; 0 <= t ? a < t : a > t; a = 0 <= t ? ++a : --a) r.push(this.readByte());
    return r;
  }, n.prototype.write = function(t) {
    var r, a, s, o;
    for (o = [], a = 0, s = t.length; a < s; a++) r = t[a], o.push(this.writeByte(r));
    return o;
  }, n;
}(), F1 = function() {
  var n;
  function t(r) {
    var a, s, o;
    for (this.scalarType = r.readInt(), this.tableCount = r.readShort(), this.searchRange = r.readShort(), this.entrySelector = r.readShort(), this.rangeShift = r.readShort(), this.tables = {}, s = 0, o = this.tableCount; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) a = { tag: r.readString(4), checksum: r.readInt(), offset: r.readInt(), length: r.readInt() }, this.tables[a.tag] = a;
  }
  return t.prototype.encode = function(r) {
    var a, s, o, c, h, f, g, b, y, N, p, O, I;
    for (I in p = Object.keys(r).length, f = Math.log(2), y = 16 * Math.floor(Math.log(p) / f), c = Math.floor(y / f), b = 16 * p - y, (s = new qr()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(y), s.writeShort(c), s.writeShort(b), o = 16 * p, g = s.pos + o, h = null, O = [], r) for (N = r[I], s.writeString(I), s.writeInt(n(N)), s.writeInt(g), s.writeInt(N.length), O = O.concat(N), I === "head" && (h = g), g += N.length; g % 4; ) O.push(0), g++;
    return s.write(O), a = 2981146554 - n(s.data), s.pos = h + 8, s.writeUInt32(a), s.data;
  }, n = function(r) {
    var a, s, o, c;
    for (r = $c.call(r); r.length % 4; ) r.push(0);
    for (o = new qr(r), s = 0, a = 0, c = r.length; a < c; a = a += 4) s += o.readUInt32();
    return 4294967295 & s;
  }, t;
}(), O1 = {}.hasOwnProperty, sr = function(n, t) {
  for (var r in t) O1.call(t, r) && (n[r] = t[r]);
  function a() {
    this.constructor = n;
  }
  return a.prototype = t.prototype, n.prototype = new a(), n.__super__ = t.prototype, n;
};
Gn = function() {
  function n(t) {
    var r;
    this.file = t, r = this.file.directory.tables[this.tag], this.exists = !!r, r && (this.offset = r.offset, this.length = r.length, this.parse(this.file.contents));
  }
  return n.prototype.parse = function() {
  }, n.prototype.encode = function() {
  }, n.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, n;
}();
var M1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "head", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.revision = r.readInt(), this.checkSumAdjustment = r.readInt(), this.magicNumber = r.readInt(), this.flags = r.readShort(), this.unitsPerEm = r.readShort(), this.created = r.readLongLong(), this.modified = r.readLongLong(), this.xMin = r.readShort(), this.yMin = r.readShort(), this.xMax = r.readShort(), this.yMax = r.readShort(), this.macStyle = r.readShort(), this.lowestRecPPEM = r.readShort(), this.fontDirectionHint = r.readShort(), this.indexToLocFormat = r.readShort(), this.glyphDataFormat = r.readShort();
  }, t.prototype.encode = function(r) {
    var a;
    return (a = new qr()).writeInt(this.version), a.writeInt(this.revision), a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), a.writeShort(this.fontDirectionHint), a.writeShort(r), a.writeShort(this.glyphDataFormat), a.data;
  }, t;
}(), Ac = function() {
  function n(t, r) {
    var a, s, o, c, h, f, g, b, y, N, p, O, I, F, _, E, Z;
    switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = r + t.readInt(), y = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = t.readByte();
        break;
      case 4:
        for (p = t.readUInt16(), N = p / 2, t.pos += 6, o = function() {
          var se, he;
          for (he = [], f = se = 0; 0 <= N ? se < N : se > N; f = 0 <= N ? ++se : --se) he.push(t.readUInt16());
          return he;
        }(), t.pos += 2, I = function() {
          var se, he;
          for (he = [], f = se = 0; 0 <= N ? se < N : se > N; f = 0 <= N ? ++se : --se) he.push(t.readUInt16());
          return he;
        }(), g = function() {
          var se, he;
          for (he = [], f = se = 0; 0 <= N ? se < N : se > N; f = 0 <= N ? ++se : --se) he.push(t.readUInt16());
          return he;
        }(), b = function() {
          var se, he;
          for (he = [], f = se = 0; 0 <= N ? se < N : se > N; f = 0 <= N ? ++se : --se) he.push(t.readUInt16());
          return he;
        }(), s = (this.length - t.pos + this.offset) / 2, h = function() {
          var se, he;
          for (he = [], f = se = 0; 0 <= s ? se < s : se > s; f = 0 <= s ? ++se : --se) he.push(t.readUInt16());
          return he;
        }(), f = _ = 0, Z = o.length; _ < Z; f = ++_) for (F = o[f], a = E = O = I[f]; O <= F ? E <= F : E >= F; a = O <= F ? ++E : --E) b[f] === 0 ? c = a + g[f] : (c = h[b[f] / 2 + (a - O) - (N - f)] || 0) !== 0 && (c += g[f]), this.codeMap[a] = 65535 & c;
    }
    t.pos = y;
  }
  return n.encode = function(t, r) {
    var a, s, o, c, h, f, g, b, y, N, p, O, I, F, _, E, Z, se, he, Le, ie, H, ae, de, P, k, W, z, le, oe, fe, te, $, D, be, w, j, B, U, q, J, X, T, Ne, we, ue;
    switch (z = new qr(), c = Object.keys(t).sort(function(Ie, Ue) {
      return Ie - Ue;
    }), r) {
      case "macroman":
        for (I = 0, F = function() {
          var Ie = [];
          for (O = 0; O < 256; ++O) Ie.push(0);
          return Ie;
        }(), E = { 0: 0 }, o = {}, le = 0, $ = c.length; le < $; le++) E[T = t[s = c[le]]] == null && (E[T] = ++I), o[s] = { old: t[s], new: E[t[s]] }, F[s] = E[t[s]];
        return z.writeUInt16(1), z.writeUInt16(0), z.writeUInt32(12), z.writeUInt16(0), z.writeUInt16(262), z.writeUInt16(0), z.write(F), { charMap: o, subtable: z.data, maxGlyphID: I + 1 };
      case "unicode":
        for (k = [], y = [], Z = 0, E = {}, a = {}, _ = g = null, oe = 0, D = c.length; oe < D; oe++) E[he = t[s = c[oe]]] == null && (E[he] = ++Z), a[s] = { old: he, new: E[he] }, h = E[he] - s, _ != null && h === g || (_ && y.push(_), k.push(s), g = h), _ = s;
        for (_ && y.push(_), y.push(65535), k.push(65535), de = 2 * (ae = k.length), H = 2 * Math.pow(Math.log(ae) / Math.LN2, 2), N = Math.log(H / 2) / Math.LN2, ie = 2 * ae - H, f = [], Le = [], p = [], O = fe = 0, be = k.length; fe < be; O = ++fe) {
          if (P = k[O], b = y[O], P === 65535) {
            f.push(0), Le.push(0);
            break;
          }
          if (P - (W = a[P].new) >= 32768) for (f.push(0), Le.push(2 * (p.length + ae - O)), s = te = P; P <= b ? te <= b : te >= b; s = P <= b ? ++te : --te) p.push(a[s].new);
          else f.push(W - P), Le.push(0);
        }
        for (z.writeUInt16(3), z.writeUInt16(1), z.writeUInt32(12), z.writeUInt16(4), z.writeUInt16(16 + 8 * ae + 2 * p.length), z.writeUInt16(0), z.writeUInt16(de), z.writeUInt16(H), z.writeUInt16(N), z.writeUInt16(ie), J = 0, w = y.length; J < w; J++) s = y[J], z.writeUInt16(s);
        for (z.writeUInt16(0), X = 0, j = k.length; X < j; X++) s = k[X], z.writeUInt16(s);
        for (Ne = 0, B = f.length; Ne < B; Ne++) h = f[Ne], z.writeUInt16(h);
        for (we = 0, U = Le.length; we < U; we++) se = Le[we], z.writeUInt16(se);
        for (ue = 0, q = p.length; ue < q; ue++) I = p[ue], z.writeUInt16(I);
        return { charMap: a, subtable: z.data, maxGlyphID: Z + 1 };
    }
  }, n;
}(), Xc = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "cmap", t.prototype.parse = function(r) {
    var a, s, o;
    for (r.pos = this.offset, this.version = r.readUInt16(), o = r.readUInt16(), this.tables = [], this.unicode = null, s = 0; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) a = new Ac(r, this.offset), this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
    return !0;
  }, t.encode = function(r, a) {
    var s, o;
    return a == null && (a = "macroman"), s = Ac.encode(r, a), (o = new qr()).writeUInt16(0), o.writeUInt16(1), s.table = o.data.concat(s.subtable), s;
  }, t;
}(), E1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "hhea", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.ascender = r.readShort(), this.decender = r.readShort(), this.lineGap = r.readShort(), this.advanceWidthMax = r.readShort(), this.minLeftSideBearing = r.readShort(), this.minRightSideBearing = r.readShort(), this.xMaxExtent = r.readShort(), this.caretSlopeRise = r.readShort(), this.caretSlopeRun = r.readShort(), this.caretOffset = r.readShort(), r.pos += 8, this.metricDataFormat = r.readShort(), this.numberOfMetrics = r.readUInt16();
  }, t;
}(), B1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "OS/2", t.prototype.parse = function(r) {
    if (r.pos = this.offset, this.version = r.readUInt16(), this.averageCharWidth = r.readShort(), this.weightClass = r.readUInt16(), this.widthClass = r.readUInt16(), this.type = r.readShort(), this.ySubscriptXSize = r.readShort(), this.ySubscriptYSize = r.readShort(), this.ySubscriptXOffset = r.readShort(), this.ySubscriptYOffset = r.readShort(), this.ySuperscriptXSize = r.readShort(), this.ySuperscriptYSize = r.readShort(), this.ySuperscriptXOffset = r.readShort(), this.ySuperscriptYOffset = r.readShort(), this.yStrikeoutSize = r.readShort(), this.yStrikeoutPosition = r.readShort(), this.familyClass = r.readShort(), this.panose = function() {
      var a, s;
      for (s = [], a = 0; a < 10; ++a) s.push(r.readByte());
      return s;
    }(), this.charRange = function() {
      var a, s;
      for (s = [], a = 0; a < 4; ++a) s.push(r.readInt());
      return s;
    }(), this.vendorID = r.readString(4), this.selection = r.readShort(), this.firstCharIndex = r.readShort(), this.lastCharIndex = r.readShort(), this.version > 0 && (this.ascent = r.readShort(), this.descent = r.readShort(), this.lineGap = r.readShort(), this.winAscent = r.readShort(), this.winDescent = r.readShort(), this.codePageRange = function() {
      var a, s;
      for (s = [], a = 0; a < 2; a = ++a) s.push(r.readInt());
      return s;
    }(), this.version > 1)) return this.xHeight = r.readShort(), this.capHeight = r.readShort(), this.defaultChar = r.readShort(), this.breakChar = r.readShort(), this.maxContext = r.readShort();
  }, t;
}(), T1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "post", t.prototype.parse = function(r) {
    var a, s, o;
    switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var c;
        for (s = r.readUInt16(), this.glyphNameIndex = [], c = 0; 0 <= s ? c < s : c > s; c = 0 <= s ? ++c : --c) this.glyphNameIndex.push(r.readUInt16());
        for (this.names = [], o = []; r.pos < this.offset + this.length; ) a = r.readByte(), o.push(this.names.push(r.readString(a)));
        return o;
      case 151552:
        return s = r.readUInt16(), this.offsets = r.read(s);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, f, g;
          for (g = [], c = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; c = 0 <= f ? ++h : --h) g.push(r.readUInt32());
          return g;
        }).call(this);
    }
  }, t;
}(), R1 = function(n, t) {
  this.raw = n, this.length = n.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
}, D1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "name", t.prototype.parse = function(r) {
    var a, s, o, c, h, f, g, b, y, N, p;
    for (r.pos = this.offset, r.readShort(), a = r.readShort(), f = r.readShort(), s = [], c = 0; 0 <= a ? c < a : c > a; c = 0 <= a ? ++c : --c) s.push({ platformID: r.readShort(), encodingID: r.readShort(), languageID: r.readShort(), nameID: r.readShort(), length: r.readShort(), offset: this.offset + f + r.readShort() });
    for (g = {}, c = y = 0, N = s.length; y < N; c = ++y) o = s[c], r.pos = o.offset, b = r.readString(o.length), h = new R1(b, o), g[p = o.nameID] == null && (g[p] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, t;
}(), q1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "maxp", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.numGlyphs = r.readUInt16(), this.maxPoints = r.readUInt16(), this.maxContours = r.readUInt16(), this.maxCompositePoints = r.readUInt16(), this.maxComponentContours = r.readUInt16(), this.maxZones = r.readUInt16(), this.maxTwilightPoints = r.readUInt16(), this.maxStorage = r.readUInt16(), this.maxFunctionDefs = r.readUInt16(), this.maxInstructionDefs = r.readUInt16(), this.maxStackElements = r.readUInt16(), this.maxSizeOfInstructions = r.readUInt16(), this.maxComponentElements = r.readUInt16(), this.maxComponentDepth = r.readUInt16();
  }, t;
}(), z1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "hmtx", t.prototype.parse = function(r) {
    var a, s, o, c, h, f, g;
    for (r.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? a < f : a > f; a = 0 <= f ? ++a : --a) this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var b, y;
      for (y = [], a = b = 0; 0 <= o ? b < o : b > o; a = 0 <= o ? ++b : --b) y.push(r.readInt16());
      return y;
    }(), this.widths = (function() {
      var b, y, N, p;
      for (p = [], b = 0, y = (N = this.metrics).length; b < y; b++) c = N[b], p.push(c.advance);
      return p;
    }).call(this), s = this.widths[this.widths.length - 1], g = [], a = h = 0; 0 <= o ? h < o : h > o; a = 0 <= o ? ++h : --h) g.push(this.widths.push(s));
    return g;
  }, t.prototype.forGlyph = function(r) {
    return r in this.metrics ? this.metrics[r] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[r - this.metrics.length] };
  }, t;
}(), $c = [].slice, U1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "glyf", t.prototype.parse = function() {
    return this.cache = {};
  }, t.prototype.glyphFor = function(r) {
    var a, s, o, c, h, f, g, b, y, N;
    return r in this.cache ? this.cache[r] : (c = this.file.loca, a = this.file.contents, s = c.indexOf(r), (o = c.lengthOf(r)) === 0 ? this.cache[r] = null : (a.pos = this.offset + s, h = (f = new qr(a.read(o))).readShort(), b = f.readShort(), N = f.readShort(), g = f.readShort(), y = f.readShort(), this.cache[r] = h === -1 ? new V1(f, b, N, g, y) : new H1(f, h, b, N, g, y), this.cache[r]));
  }, t.prototype.encode = function(r, a, s) {
    var o, c, h, f, g;
    for (h = [], c = [], f = 0, g = a.length; f < g; f++) o = r[a[f]], c.push(h.length), o && (h = h.concat(o.encode(s)));
    return c.push(h.length), { table: h, offsets: c };
  }, t;
}(), H1 = function() {
  function n(t, r, a, s, o, c) {
    this.raw = t, this.numberOfContours = r, this.xMin = a, this.yMin = s, this.xMax = o, this.yMax = c, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
}(), V1 = function() {
  function n(t, r, a, s, o) {
    var c, h;
    for (this.raw = t, this.xMin = r, this.yMin = a, this.xMax = s, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], c = this.raw; h = c.readShort(), this.glyphOffsets.push(c.pos), this.glyphIDs.push(c.readUInt16()), 32 & h; ) c.pos += 1 & h ? 4 : 2, 128 & h ? c.pos += 8 : 64 & h ? c.pos += 4 : 8 & h && (c.pos += 2);
  }
  return n.prototype.encode = function() {
    var t, r, a;
    for (r = new qr($c.call(this.raw.data)), t = 0, a = this.glyphIDs.length; t < a; ++t) r.pos = this.glyphOffsets[t];
    return r.data;
  }, n;
}(), W1 = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return sr(t, Gn), t.prototype.tag = "loca", t.prototype.parse = function(r) {
    var a, s;
    return r.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? (function() {
      var o, c;
      for (c = [], s = 0, o = this.length; s < o; s += 2) c.push(2 * r.readUInt16());
      return c;
    }).call(this) : (function() {
      var o, c;
      for (c = [], s = 0, o = this.length; s < o; s += 4) c.push(r.readUInt32());
      return c;
    }).call(this);
  }, t.prototype.indexOf = function(r) {
    return this.offsets[r];
  }, t.prototype.lengthOf = function(r) {
    return this.offsets[r + 1] - this.offsets[r];
  }, t.prototype.encode = function(r, a) {
    for (var s = new Uint32Array(this.offsets.length), o = 0, c = 0, h = 0; h < s.length; ++h) if (s[h] = o, c < a.length && a[c] == h) {
      ++c, s[h] = o;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (o += g);
    }
    for (var b = new Array(4 * s.length), y = 0; y < s.length; ++y) b[4 * y + 3] = 255 & s[y], b[4 * y + 2] = (65280 & s[y]) >> 8, b[4 * y + 1] = (16711680 & s[y]) >> 16, b[4 * y] = (4278190080 & s[y]) >> 24;
    return b;
  }, t;
}(), G1 = function() {
  function n(t) {
    this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var t, r, a, s, o;
    for (r in s = this.font.cmap.tables[0].codeMap, t = {}, o = this.subset) a = o[r], t[r] = s[a];
    return t;
  }, n.prototype.glyphsFor = function(t) {
    var r, a, s, o, c, h, f;
    for (s = {}, c = 0, h = t.length; c < h; c++) s[o = t[c]] = this.font.glyf.glyphFor(o);
    for (o in r = [], s) (a = s[o]) != null && a.compound && r.push.apply(r, a.glyphIDs);
    if (r.length > 0) for (o in f = this.glyphsFor(r)) a = f[o], s[o] = a;
    return s;
  }, n.prototype.encode = function(t, r) {
    var a, s, o, c, h, f, g, b, y, N, p, O, I, F, _;
    for (s in a = Xc.encode(this.generateCmap(), "unicode"), c = this.glyphsFor(t), p = { 0: 0 }, _ = a.charMap) p[(f = _[s]).old] = f.new;
    for (O in N = a.maxGlyphID, c) O in p || (p[O] = N++);
    return b = function(E) {
      var Z, se;
      for (Z in se = {}, E) se[E[Z]] = Z;
      return se;
    }(p), y = Object.keys(b).sort(function(E, Z) {
      return E - Z;
    }), I = function() {
      var E, Z, se;
      for (se = [], E = 0, Z = y.length; E < Z; E++) h = y[E], se.push(b[h]);
      return se;
    }(), o = this.font.glyf.encode(c, I, p), g = this.font.loca.encode(o.offsets, I), F = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(r) }, this.font.os2.exists && (F["OS/2"] = this.font.os2.raw()), this.font.directory.encode(F);
  }, n;
}();
Ye.API.PDFObject = function() {
  var n;
  function t() {
  }
  return n = function(r, a) {
    return (Array(a + 1).join("0") + r).slice(-a);
  }, t.convert = function(r) {
    var a, s, o, c;
    if (Array.isArray(r)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = r.length; h < f; h++) a = r[h], g.push(t.convert(a));
      return g;
    }().join(" ") + "]";
    if (typeof r == "string") return "/" + r;
    if (r != null && r.isString) return "(" + r + ")";
    if (r instanceof Date) return "(D:" + n(r.getUTCFullYear(), 4) + n(r.getUTCMonth(), 2) + n(r.getUTCDate(), 2) + n(r.getUTCHours(), 2) + n(r.getUTCMinutes(), 2) + n(r.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(r) === "[object Object]") {
      for (s in o = ["<<"], r) c = r[s], o.push("/" + s + " " + t.convert(c));
      return o.push(">>"), o.join(`
`);
    }
    return "" + r;
  }, t;
}();
var an = /* @__PURE__ */ ((n) => (n.PENCIL = "pencil", n.MEMORY_PEN = "memory_pen", n.COLOR_PEN = "color_pen", n.PAINT_PEN = "paint_pen", n.PEN = "pen", n))(an || {});
const Kc = Sc(void 0), c2 = ({ children: n }) => {
  const [t, r] = bt("pan"), [a, s] = bt(
    "pencil"
    /* PENCIL */
  ), [o, c] = bt("#000000"), [h, f] = bt(5), [g, b] = bt([{ id: 1, name: "Bảng trắng 1", commands: [] }]), [y, N] = bt(1), p = g.find((ke) => ke.id === y), [O, I] = bt(!1), F = (ke) => {
    b((Pe) => Pe.map(
      (Me) => Me.id === y ? typeof ke == "function" ? ke(Me) : ke : Me
    ));
  }, [_, E] = bt(!1), [Z, se] = bt(null), [he, Le] = bt([]), [ie, H] = bt(!1), [ae, de] = bt(null), [P, k] = bt(""), [W, z] = bt({
    fontFamily: "Arial",
    fontSize: 16,
    bold: !1,
    italic: !1,
    underline: !1
  }), [le, oe] = bt(100), [fe, te] = bt([]), [$, D] = bt(null), [be, w] = bt(!1), [j, B] = bt(null), [U, q] = bt(null), J = ii(null), X = () => {
    if (p.commands.length > 0) {
      const ke = p.commands[p.commands.length - 1];
      F((Pe) => ({
        ...Pe,
        commands: Pe.commands.slice(0, -1)
      })), Le((Pe) => [...Pe, ke]);
    }
  }, T = () => {
    if (he.length > 0) {
      const ke = he[he.length - 1];
      Le((Pe) => Pe.slice(0, -1)), F((Pe) => ({
        ...Pe,
        commands: [...Pe.commands, ke]
      }));
    }
  }, Ne = () => {
    F({ ...p, commands: [] }), Le([]), se(null), E(!1), te([]), D(null), w(!1), B(null);
  };
  ir(() => {
    t !== "text" && (H(!1), k(""), de(null));
  }, [t]);
  const it = {
    currentTool: t,
    setCurrentTool: r,
    currentBrushType: a,
    setCurrentBrushType: s,
    currentColor: o,
    setCurrentColor: c,
    currentBrushSize: h,
    setCurrentBrushSize: f,
    pages: g,
    setPages: b,
    addPage: () => {
      const ke = Math.max(...g.map((Pe) => Pe.id));
      b([...g, { id: ke + 1, name: `Bảng trắng ${ke + 1}`, commands: [] }]), N(ke + 1);
    },
    deletePage: (ke) => {
      if (y === ke) {
        const Pe = g.find((De) => De.id !== ke);
        Pe ? (b(g.filter((De) => De.id !== ke)), N(Pe.id), F(Pe)) : (b([{ id: 1, name: "Bảng trắng 1", commands: [] }]), F({ id: 1, name: "Bảng trắng 1", commands: [] }), N(1));
        return;
      }
      b(g.filter((Pe) => Pe.id !== ke));
    },
    renamePage: (ke, Pe) => {
      b(g.map(
        (De) => De.id === ke ? { ...De, name: Pe } : De
      ));
    },
    currentPageId: y,
    setCurrentPageId: N,
    currentPage: p,
    setCurrentPage: F,
    isDrawing: _,
    setIsDrawing: E,
    currentAction: Z,
    setCurrentAction: se,
    undoStack: he,
    setUndoStack: Le,
    showTextInput: ie,
    setShowTextInput: H,
    textPosition: ae,
    setTextPosition: de,
    textValue: P,
    setTextValue: k,
    textStyle: W,
    setTextStyle: z,
    zoomLevel: le,
    setZoomLevel: oe,
    selectedElements: fe,
    setSelectedElements: te,
    selectionArea: $,
    setSelectionArea: D,
    isDragging: be,
    setIsDragging: w,
    dragStart: j,
    setDragStart: B,
    canvasRef: J,
    undo: X,
    redo: T,
    clear: Ne,
    zoomIn: () => {
      oe((ke) => Math.min(ke + 10, 200));
    },
    zoomOut: () => {
      oe((ke) => Math.max(ke - 10, 50));
    },
    resetZoom: () => {
      oe(100);
    },
    handleTextSubmit: () => {
      P && ae && (F((ke) => ({
        ...ke,
        commands: [
          ...ke.commands,
          {
            type: "text",
            x: ae.x,
            y: ae.y,
            text: P,
            color: o,
            size: h,
            textStyle: W
          }
        ]
      })), k(""), H(!1));
    },
    saveAsPNG: () => {
      if (J.current) {
        const ke = J.current.toDataURL(), Pe = document.createElement("a");
        Pe.href = ke, Pe.download = `drawing-page-${y}.png`, Pe.click();
      }
    },
    saveAsPDF: () => {
      if (J.current) {
        const ke = J.current.width > J.current.height ? "l" : "p", Pe = new Ye(ke, "mm", "a4"), De = J.current.toDataURL("image/png", 1), Me = ke === "l" ? 297 : 210, Ce = ke === "l" ? 210 : 297, Tt = J.current.width, at = J.current.height, Kt = Math.min(Me / Tt, Ce / at), dt = (Me - Tt * Kt) / 2, xt = (Ce - at * Kt) / 2;
        Pe.addImage(De, "PNG", dt, xt, Tt * Kt, at * Kt), Pe.save(`drawing-page-${y}.pdf`);
      }
    },
    importImage: (ke) => {
      var De;
      const Pe = (De = ke.target.files) == null ? void 0 : De[0];
      if (Pe) {
        const Me = new Image();
        Me.src = URL.createObjectURL(Pe), Me.onload = () => {
          F((Ce) => ({
            ...Ce,
            commands: [
              ...Ce.commands,
              { type: "image", image: Me, color: "#000000", size: 1 }
            ]
          }));
        };
      }
    },
    handleStartSelect: (ke) => {
      D({ x: ke.x, y: ke.y, width: 0, height: 0 }), te([]);
    },
    handleUpdateSelection: (ke) => {
      $ && D({
        x: Math.min($.x, ke.x),
        y: Math.min($.y, ke.y),
        width: Math.abs(ke.x - $.x),
        height: Math.abs(ke.y - $.y)
      });
    },
    handleFinishSelect: () => {
      if (!$) return;
      const ke = p.commands.filter((Pe) => {
        var De;
        return Pe.type === "freehand" || Pe.type === "erase" ? (De = Pe.points) == null ? void 0 : De.some(
          (Me) => Me.x >= $.x && Me.x <= $.x + $.width && Me.y >= $.y && Me.y <= $.y + $.height
        ) : Pe.type === "line" ? Pe.fromX >= $.x && Pe.fromX <= $.x + $.width && Pe.fromY >= $.y && Pe.fromY <= $.y + $.height || Pe.toX >= $.x && Pe.toX <= $.x + $.width && Pe.toY >= $.y && Pe.toY <= $.y + $.height : Pe.type === "rectangle" || Pe.type === "text" || Pe.type === "image" ? Pe.x >= $.x && Pe.x + (Pe.width || 0) <= $.x + $.width && Pe.y >= $.y && Pe.y + (Pe.height || 0) <= $.y + $.height : Pe.type === "circle" ? Pe.x >= $.x && Pe.x <= $.x + $.width && Pe.y >= $.y && Pe.y <= $.y + $.height : !1;
      });
      te(ke), D(null);
    },
    updateSelectedElements: (ke, Pe) => {
      F((De) => ({
        ...De,
        commands: De.commands.map((Me) => fe.includes(Me) ? Me.type === "freehand" || Me.type === "erase" ? {
          ...Me,
          points: Me.points.map((Ce) => ({
            x: Ce.x + ke,
            y: Ce.y + Pe
          }))
        } : Me.type === "line" ? {
          ...Me,
          fromX: Me.fromX + ke,
          fromY: Me.fromY + Pe,
          toX: Me.toX + ke,
          toY: Me.toY + Pe
        } : Me.type === "rectangle" || Me.type === "text" || Me.type === "circle" || Me.type === "image" ? {
          ...Me,
          x: Me.x + ke,
          y: Me.y + Pe
        } : Me : Me)
      }));
    },
    mousePosition: U,
    setMousePosition: q,
    isClicking: O,
    setClicking: I,
    copyAsImage: async () => {
      if (J.current)
        try {
          const ke = await new Promise(
            (De) => J.current.toBlob((Me) => De(Me))
          ), Pe = new ClipboardItem({ "image/png": ke });
          await navigator.clipboard.write([Pe]);
        } catch (ke) {
          console.error("Failed to copy image:", ke);
        }
    }
  };
  return /* @__PURE__ */ ce.jsx(Kc.Provider, { value: it, children: n });
}, Ur = () => {
  const n = _c(Kc);
  if (n === void 0)
    throw new Error("useDrawing must be used within a DrawingProvider");
  return n;
}, Rr = ({ children: n, dropdown: t, placement: r = "bottom", isChild: a, classNames: s }) => {
  const [o, c] = bt(!1), h = ii(null);
  ir(() => {
    const g = (b) => {
      h.current && !h.current.contains(b.target) && c(!1);
    };
    return o && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [o]);
  const f = (g) => {
    switch (g) {
      case "top":
        return `bottom-full left-0 ${a ? "mb-4" : "mb-2"}`;
      case "bottom":
        return `top-full left-0 ${a ? "mt-4" : "mt-2"}`;
      case "left":
        return `right-full top-0 ${a ? "mr-4" : "mr-2"}`;
      case "right":
        return `left-full top-0 ${a ? "ml-4" : "ml-2"}`;
      default:
        return "top-full left-0 mt-2";
    }
  };
  return /* @__PURE__ */ ce.jsxs(ce.Fragment, { children: [
    "            ",
    !a && o && /* @__PURE__ */ ce.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-transparent",
        onClick: () => c(!1)
      }
    ),
    /* @__PURE__ */ ce.jsxs("div", { className: "relative", ref: h, children: [
      /* @__PURE__ */ ce.jsx("div", { onClick: (g) => {
        a && g.stopPropagation(), c(!o);
      }, children: n({ isOpen: o }) }),
      /* @__PURE__ */ ce.jsx(
        "div",
        {
          className: `absolute z-50 rounded shadow-custom-11 bg-white transition-all duration-200 ease-in-out transform
                        ${o ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
                        ${f(r)}`,
          children: /* @__PURE__ */ ce.jsx("div", { className: `w-max min-w-[150px] h-full ${s}`, children: typeof t == "function" ? t({ onClose: () => c(!1) }) : t })
        }
      )
    ] })
  ] });
}, Y1 = () => {
  const { iconSet: n, config: t } = zr(), {
    MenuIcon: r,
    CopyImageIcon: a,
    SaveCloudIcon: s,
    ExportIcon: o,
    PDFIcon: c,
    ImageIcon: h,
    NextIcon: f
  } = n, { copyAsImage: g, saveAsPDF: b, saveAsPNG: y } = Ur(), N = () => {
    b();
  }, p = () => {
    y();
  };
  return /* @__PURE__ */ ce.jsx(
    Rr,
    {
      placement: "bottom",
      dropdown: ({ onClose: O }) => {
        var I, F;
        return /* @__PURE__ */ ce.jsxs("ul", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ ce.jsxs(
            "li",
            {
              onClick: () => {
                g(), O();
              },
              className: `h-8 flex-none ${(I = t == null ? void 0 : t.components) == null ? void 0 : I.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`,
              children: [
                /* @__PURE__ */ ce.jsx(a, { className: "w-5 h-5 flex-none" }),
                /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Sao chép dưới dạng ảnh" })
              ]
            }
          ),
          /* @__PURE__ */ ce.jsxs("li", { className: `h-8 flex-none ${(F = t == null ? void 0 : t.components) == null ? void 0 : F.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`, children: [
            /* @__PURE__ */ ce.jsx(s, { className: "w-5 h-5 flex-none" }),
            /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Lưu về Cloud class" })
          ] }),
          /* @__PURE__ */ ce.jsx("div", { className: "w-full", children: /* @__PURE__ */ ce.jsx(
            Rr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: _ }) => {
                var E, Z;
                return /* @__PURE__ */ ce.jsxs("div", { className: "w-full flex flex-col gap-2 p-2", children: [
                  /* @__PURE__ */ ce.jsxs(
                    "div",
                    {
                      onClick: () => {
                        N(), _();
                      },
                      className: `h-8 flex-none ${(E = t == null ? void 0 : t.components) == null ? void 0 : E.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: [
                        /* @__PURE__ */ ce.jsx(c, { className: "w-5 h-5 flex-none" }),
                        /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "PDF (.pdf)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ ce.jsxs(
                    "div",
                    {
                      onClick: () => {
                        p(), _();
                      },
                      className: `h-8 flex-none ${(Z = t == null ? void 0 : t.components) == null ? void 0 : Z.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: [
                        /* @__PURE__ */ ce.jsx(h, { className: "w-5 h-5 flex-none" }),
                        /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Ảnh PNG (.png)" })
                      ]
                    }
                  )
                ] });
              },
              children: ({ isOpen: _ }) => {
                var E;
                return /* @__PURE__ */ ce.jsxs("li", { className: `w-full h-8 flex-none ${(E = t == null ? void 0 : t.components) == null ? void 0 : E.buttonIcon} ${_ ? "!bg-pink-200" : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`, children: [
                  /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ ce.jsx(o, { className: "w-5 h-5 flex-none" }),
                    /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Xuất" })
                  ] }),
                  /* @__PURE__ */ ce.jsx(f, { className: "w-5 h-5 flex-none" })
                ] });
              }
            }
          ) })
        ] });
      },
      children: ({ isOpen: O }) => /* @__PURE__ */ ce.jsx(mn, { Icon: r, isActive: O })
    }
  );
}, J1 = ({ onChange: n, value: t = 10 }) => {
  const [r, a] = bt(t);
  ir(() => {
    a(t);
  }, [t]);
  const s = (o) => {
    const c = Math.min(50, Math.max(1, o));
    a(c), n(c);
  };
  return /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center space-x-5", children: [
    /* @__PURE__ */ ce.jsx("div", { className: "relative w-28", children: /* @__PURE__ */ ce.jsx(
      "input",
      {
        type: "range",
        min: "1",
        max: "50",
        step: "1",
        value: r,
        onChange: (o) => s(Number(o.target.value)),
        className: `w-full h-4 appearance-none bg-transparent\r
            [&::-webkit-slider-runnable-track]:h-[2px]\r
            [&::-webkit-slider-runnable-track]:bg-gray-500\r
            [&::-webkit-slider-thumb]:appearance-none\r
            [&::-webkit-slider-thumb]:w-5\r
            [&::-webkit-slider-thumb]:h-5\r
            [&::-webkit-slider-thumb]:rounded-full\r
            [&::-webkit-slider-thumb]:bg-blue-600\r
            [&::-webkit-slider-thumb]:border-2\r
            [&::-webkit-slider-thumb]:border-white\r
            [&::-webkit-slider-thumb]:mt-[-9px]\r
            focus:outline-none cursor-pointer`
      }
    ) }),
    /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center gap-2 px-1 py-0.5 bg-gray-200 rounded", children: [
      /* @__PURE__ */ ce.jsx("div", { className: "w-6 text-center font-medium", children: r }),
      /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ ce.jsx(
          "button",
          {
            onClick: () => s(r + 1),
            className: "h-3 w-3 flex items-center justify-center flex-none",
            children: "+"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          "button",
          {
            onClick: () => s(r - 1),
            className: "h-3 w-3 flex items-center justify-center flex-none",
            children: "-"
          }
        )
      ] })
    ] })
  ] });
}, X1 = ({ isActive: n, onColorChange: t, onBrushSizeChange: r, onClick: a, currentColor: s }) => {
  const { iconSet: o, config: c } = zr(), h = [
    "#000000",
    "#f0a3a3",
    "#f0c3a3",
    "#f0e3a3",
    "#a3f0a3",
    "#a3f0e3"
  ], {
    PencilOutlineIcon: f,
    MemoryPenOutlineIcon: g,
    ColorPenOutlineIcon: b,
    PaintPenOutlineIcon: y,
    PenOutlineIcon: N
  } = o, p = [
    { type: an.PENCIL, name: "Bút chì", icon: f },
    { type: an.MEMORY_PEN, name: "Bút nhớ", icon: g },
    { type: an.COLOR_PEN, name: "Bút màu", icon: b },
    { type: an.PAINT_PEN, name: "Bút sơn", icon: y },
    { type: an.PEN, name: "Bút bi", icon: N }
  ], { currentBrushType: O, setCurrentBrushType: I } = Ur();
  return /* @__PURE__ */ ce.jsx(
    Rr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ ce.jsx("span", { children: "Màu" }),
          /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center gap-2", children: [
            h.map((F) => /* @__PURE__ */ ce.jsx(
              $1,
              {
                color: F,
                onClick: () => t == null ? void 0 : t(F),
                checked: s === F
              },
              F
            )),
            /* @__PURE__ */ ce.jsx("label", { htmlFor: "ColorPicker", style: { background: s }, className: "w-6 h-6 flex-none rounded outline-none relative", children: /* @__PURE__ */ ce.jsx(
              "input",
              {
                type: "color",
                className: "w-6 h6 flex-none rounded outline-none invisible",
                value: s,
                onChange: (F) => t == null ? void 0 : t(F.target.value),
                id: "ColorPicker"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ ce.jsx("span", { children: "Loại bút" }),
          /* @__PURE__ */ ce.jsx("div", { className: "flex items-center gap-2", children: p.map((F) => /* @__PURE__ */ ce.jsx(
            mn,
            {
              Icon: F.icon,
              onClick: () => I(F.type),
              isActive: O === F.type
            },
            F.name
          )) })
        ] }),
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ ce.jsx("span", { children: "Độ dày nét" }),
          /* @__PURE__ */ ce.jsx(J1, { onChange: r })
        ] })
      ] }),
      children: ({ isOpen: F }) => /* @__PURE__ */ ce.jsx(
        mn,
        {
          onClick: a,
          Icon: o.PencilOutlineIcon,
          isActive: F || n
        }
      )
    }
  );
}, $1 = ({ color: n, onClick: t, checked: r }) => {
  const { config: a, iconSet: s } = zr();
  return /* @__PURE__ */ ce.jsx(
    "div",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-95 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: t,
      children: r && /* @__PURE__ */ ce.jsx(s.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, K1 = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana"], Z1 = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72], Q1 = [
  "#000000",
  "#f0a3a3",
  "#f0c3a3",
  "#f0e3a3",
  "#a3f0a3",
  "#a3f0e3"
], e2 = ({ isActive: n, onClick: t }) => {
  const { iconSet: r } = zr(), {
    currentColor: a,
    setCurrentColor: s,
    textStyle: o,
    setTextStyle: c
  } = Ur();
  return /* @__PURE__ */ ce.jsx(
    Rr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-3 p-3 min-w-[200px] bg-white rounded shadow-lg", children: [
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ ce.jsx("span", { className: "text-sm font-medium", children: "Color" }),
          /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            Q1.map((h) => /* @__PURE__ */ ce.jsx(
              t2,
              {
                color: h,
                onClick: () => s(h),
                checked: a === h
              },
              h
            )),
            /* @__PURE__ */ ce.jsx(
              "label",
              {
                htmlFor: "ColorPicker",
                className: "w-6 h-6 flex-none rounded outline-none cursor-pointer relative overflow-hidden",
                style: { background: a },
                children: /* @__PURE__ */ ce.jsx(
                  "input",
                  {
                    type: "color",
                    id: "ColorPicker",
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                    value: a,
                    onChange: (h) => s(h.target.value)
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ ce.jsx("span", { className: "text-sm font-medium", children: "Text Style" }),
          /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ ce.jsx(
              Rr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ ce.jsx("div", { className: "flex flex-col min-w-[200px] bg-white rounded shadow-custom-11 py-1.5", children: K1.map((f) => /* @__PURE__ */ ce.jsx(
                  "span",
                  {
                    onClick: () => {
                      h(), c({ ...o, fontFamily: f });
                    },
                    className: "hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer",
                    children: f
                  },
                  f
                )) }),
                children: ({ isOpen: h }) => /* @__PURE__ */ ce.jsx("div", { className: `h-10 min-w-[150px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: o.fontFamily })
              }
            ),
            /* @__PURE__ */ ce.jsx(
              Rr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ ce.jsx("div", { className: "flex flex-col flex-none max-h-[200px] bg-white rounded shadow-custom-11 py-1.5", children: /* @__PURE__ */ ce.jsx("div", { className: "w-full h-full flex flex-col overflow-y-auto", children: Z1.map((f) => /* @__PURE__ */ ce.jsx(
                  "span",
                  {
                    onClick: () => {
                      h(), c({ ...o, fontSize: f });
                    },
                    className: "hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer",
                    children: f
                  },
                  f
                )) }) }),
                classNames: "!min-w-[50px]",
                children: ({ isOpen: h }) => /* @__PURE__ */ ce.jsxs("div", { className: `h-10 w-[50px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: [
                  o.fontSize,
                  "px"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ ce.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ ce.jsx(
              "button",
              {
                className: `px-3 py-1 border rounded-sm hover:bg-gray-100 font-bold ${o.bold ? "bg-gray-200" : ""}`,
                onClick: () => c({ ...o, bold: !o.bold }),
                title: "Bold",
                children: "B"
              }
            ),
            /* @__PURE__ */ ce.jsx(
              "button",
              {
                className: `px-3 py-1 border rounded-sm hover:bg-gray-100 italic ${o.italic ? "bg-gray-200" : ""}`,
                onClick: () => c({ ...o, italic: !o.italic }),
                title: "Italic",
                children: "I"
              }
            ),
            /* @__PURE__ */ ce.jsx(
              "button",
              {
                className: `px-3 py-1 border rounded-sm hover:bg-gray-100 underline ${o.underline ? "bg-gray-200" : ""}`,
                onClick: () => c({ ...o, underline: !o.underline }),
                title: "Underline",
                children: "U"
              }
            )
          ] })
        ] })
      ] }),
      children: ({ isOpen: h }) => /* @__PURE__ */ ce.jsx(
        mn,
        {
          onClick: t,
          Icon: r.FontsIcon,
          isActive: h || n
        }
      )
    }
  );
}, t2 = ({ color: n, onClick: t, checked: r }) => {
  const { iconSet: a } = zr();
  return /* @__PURE__ */ ce.jsx(
    "button",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-90 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: t,
      children: r && /* @__PURE__ */ ce.jsx(a.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, n2 = () => {
  const { iconSet: n, config: t } = zr(), {
    NextIcon: r,
    MoreIcon: a,
    MultipleCardsIcon: s,
    AddBoardIcon: o
  } = n, { pages: c, addPage: h, deletePage: f, currentPageId: g, setCurrentPageId: b } = Ur();
  return /* @__PURE__ */ ce.jsx(
    Rr,
    {
      placement: "bottom",
      dropdown: ({ onClose: y }) => {
        var N;
        return /* @__PURE__ */ ce.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ ce.jsxs(
            "div",
            {
              onClick: h,
              className: `w-full h-8 flex-none ${(N = t == null ? void 0 : t.components) == null ? void 0 : N.buttonIcon}  px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`,
              children: [
                /* @__PURE__ */ ce.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ ce.jsx(o, { className: "w-5 h-5 flex-none" }),
                  /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Thêm bảng" })
                ] }),
                /* @__PURE__ */ ce.jsx(r, { className: "w-5 h-5 flex-none" })
              ]
            }
          ),
          c.map((p, O) => /* @__PURE__ */ ce.jsx("div", { className: "w-full", children: /* @__PURE__ */ ce.jsx(
            Rr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: I }) => {
                var F, _;
                return /* @__PURE__ */ ce.jsxs("div", { className: "w-full flex flex-col gap-2 p-2", children: [
                  /* @__PURE__ */ ce.jsx(
                    "div",
                    {
                      onClick: () => {
                        I();
                      },
                      className: `h-8 flex-none ${(F = t == null ? void 0 : t.components) == null ? void 0 : F.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Đổi tên bảng" })
                    }
                  ),
                  /* @__PURE__ */ ce.jsx(
                    "div",
                    {
                      onClick: () => {
                        f(p.id), I();
                      },
                      className: `h-8 flex-none ${(_ = t == null ? void 0 : t.components) == null ? void 0 : _.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: /* @__PURE__ */ ce.jsx("span", { className: "flex-none", children: "Xóa bảng" })
                    }
                  )
                ] });
              },
              children: ({ isOpen: I }) => {
                var F;
                return /* @__PURE__ */ ce.jsxs(
                  "div",
                  {
                    className: `w-full h-8 flex-none ${(F = t == null ? void 0 : t.components) == null ? void 0 : F.buttonIcon} ${I || g === p.id ? "!bg-pink-200" : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-5`,
                    children: [
                      /* @__PURE__ */ ce.jsx(
                        "span",
                        {
                          onClick: (_) => {
                            _.stopPropagation(), _.preventDefault(), b(p.id);
                          },
                          className: "flex-none cursor-pointer",
                          children: p == null ? void 0 : p.name
                        }
                      ),
                      /* @__PURE__ */ ce.jsx(a, { className: "w-5 h-5 flex-none" })
                    ]
                  }
                );
              }
            }
          ) }))
        ] });
      },
      children: ({ isOpen: y }) => /* @__PURE__ */ ce.jsx(mn, { Icon: s, isActive: y })
    }
  );
}, r2 = () => {
  const {
    currentTool: n,
    setCurrentTool: t,
    currentColor: r,
    setCurrentColor: a,
    setCurrentBrushSize: s,
    zoomLevel: o,
    undo: c,
    redo: h,
    resetZoom: f,
    zoomOut: g,
    zoomIn: b,
    mousePosition: y,
    clear: N,
    importImage: p
  } = Ur(), { config: O, iconSet: I } = zr(), F = O.components.buttonIcon, {
    HandleIcon: _,
    EraserIcon: E,
    PlusIcon: Z,
    MinusIcon: se,
    SquareIcon: he,
    UndoIcon: Le,
    RedoIcon: ie,
    DivideIcon: H,
    CleanIcon: ae,
    ImageUpIcon: de
  } = I;
  return /* @__PURE__ */ ce.jsxs("div", { className: "absolute top-0 left-0 z-10 flex flex-col gap-8", style: { pointerEvents: "none" }, children: [
    /* @__PURE__ */ ce.jsxs("div", { className: "h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded", style: { pointerEvents: "auto" }, children: [
      /* @__PURE__ */ ce.jsx(Y1, {}),
      /* @__PURE__ */ ce.jsx(n2, {}),
      y && /* @__PURE__ */ ce.jsxs("div", { className: "text-xs text-gray-500 ml-2", children: [
        "X: ",
        y.x.toFixed(2),
        ", Y: ",
        y.y.toFixed(2)
      ] })
    ] }),
    /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ ce.jsxs("div", { className: "w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2", style: { pointerEvents: "auto" }, children: [
        /* @__PURE__ */ ce.jsx(
          mn,
          {
            Icon: _,
            onClick: () => t("pan"),
            isActive: n === "pan",
            title: "Pan"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          X1,
          {
            isActive: n === "pencil",
            onClick: () => t("pencil"),
            onColorChange: a,
            onBrushSizeChange: s,
            currentColor: r
          }
        ),
        /* @__PURE__ */ ce.jsx(
          mn,
          {
            Icon: E,
            onClick: () => t("eraser"),
            isActive: n === "eraser",
            title: "Tẩy"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          mn,
          {
            Icon: ae,
            onClick: N,
            title: "Xóa bảng"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          e2,
          {
            isActive: n === "text",
            onClick: () => t("text")
          }
        ),
        /* @__PURE__ */ ce.jsx(
          mn,
          {
            Icon: H,
            onClick: () => t("line"),
            isActive: n === "line",
            title: "Line"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          mn,
          {
            Icon: he,
            onClick: f,
            title: "Reset View"
          }
        ),
        /* @__PURE__ */ ce.jsxs("label", { className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 cursor-pointer ${F}}`, children: [
          /* @__PURE__ */ ce.jsx(de, { className: "w-5 h-5" }),
          /* @__PURE__ */ ce.jsx("input", { type: "file", accept: "image/*", onChange: p, className: "hidden" })
        ] })
      ] }),
      /* @__PURE__ */ ce.jsxs("div", { className: "w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2", style: { pointerEvents: "auto" }, children: [
        /* @__PURE__ */ ce.jsx(mn, { Icon: Le, onClick: c, title: "Undo" }),
        /* @__PURE__ */ ce.jsx(mn, { Icon: ie, onClick: h, title: "Redo" }),
        /* @__PURE__ */ ce.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ ce.jsx(mn, { Icon: se, onClick: g, title: "Zoom Out" }),
          /* @__PURE__ */ ce.jsxs("span", { className: "text-xs", children: [
            o,
            "%"
          ] }),
          /* @__PURE__ */ ce.jsx(mn, { Icon: Z, onClick: b, title: "Zoom In" })
        ] })
      ] })
    ] })
  ] });
}, i2 = ({
  position: n
}) => {
  const {
    textValue: t,
    setTextValue: r,
    zoomLevel: a,
    textStyle: s,
    handleTextSubmit: o,
    showTextInput: c
  } = Ur(), h = a / 100, f = ii(null), g = () => {
    f.current && (f.current.style.height = "auto", f.current.style.height = `${f.current.scrollHeight}px`);
  };
  ir(() => {
    const N = () => {
      f.current && c && (f.current.focus(), g());
    };
    N();
    const p = setTimeout(N, 10);
    return () => clearTimeout(p);
  }, [c, n]);
  const b = (N) => {
    N.key === "Enter" && !N.shiftKey && (N.preventDefault(), r(t + `
`), setTimeout(g, 0));
  }, y = (N) => {
    r(N.target.value), g();
  };
  return /* @__PURE__ */ ce.jsx(
    "div",
    {
      className: "absolute",
      style: {
        top: n.y * h,
        left: n.x * h,
        transform: `scale(${h})`,
        transformOrigin: "top left",
        pointerEvents: "auto",
        width: "auto"
      },
      onClick: (N) => N.stopPropagation(),
      onMouseDown: (N) => N.stopPropagation(),
      onMouseMove: (N) => N.stopPropagation(),
      children: /* @__PURE__ */ ce.jsx(
        "textarea",
        {
          ref: f,
          value: t,
          onChange: y,
          onBlur: o,
          onKeyDown: b,
          className: "w-auto outline-none border border-blue-200 overflow-hidden resize-none bg-transparent",
          style: {
            fontFamily: s.fontFamily,
            fontSize: `${s.fontSize}px`,
            fontWeight: s.bold ? "bold" : "normal",
            fontStyle: s.italic ? "italic" : "normal",
            textDecoration: s.underline ? "underline" : "none",
            minHeight: "1em"
          },
          autoFocus: !0,
          onFocus: (N) => N.target.select()
        }
      )
    }
  );
}, a2 = ({ x: n, y: t, isClicking: r, isDrawing: a, tool: s, scale: o = 1 }) => {
  const c = ii(null), h = a || s === "pencil" || s === "eraser" || s === "line";
  return ir(() => {
    c.current && (c.current.style.transform = `translate(${n}px, ${t}px)`);
  }, [n, t]), /* @__PURE__ */ ce.jsx(ce.Fragment, { children: h && /* @__PURE__ */ ce.jsx(
    "div",
    {
      className: "pointer-events-none absolute z-50 mix-blend-difference",
      style: {
        left: 0,
        top: 0,
        transform: `translate(${n}px, ${t}px)`,
        transition: "transform 0.1s ease-out"
      },
      children: /* @__PURE__ */ ce.jsx(
        "div",
        {
          className: `
                            w-4 h-4 -ml-2 -mt-2 rounded-full
                            ${r ? "bg-red-500 scale-75" : "bg-red-500 scale-50"}
                            transition-transform duration-150 ease-out shadow-[0_0_5px_2px_rgba(239,68,68,0.5)]
                        `
        }
      )
    }
  ) });
}, o2 = Eu((n, t) => {
  const {
    currentPage: r,
    setCurrentPage: a,
    currentAction: s,
    setCurrentAction: o,
    isDrawing: c,
    setIsDrawing: h,
    currentTool: f,
    currentColor: g,
    currentBrushSize: b,
    currentBrushType: y,
    setShowTextInput: N,
    setTextPosition: p,
    showTextInput: O,
    textPosition: I,
    zoomLevel: F,
    textValue: _,
    textStyle: E,
    setTextStyle: Z,
    mousePosition: se,
    setMousePosition: he,
    isClicking: Le,
    setClicking: ie
  } = Ur(), H = ii(null), ae = ii(null), de = ii(null), [P, k] = bt(!1), [W, z] = bt(!1), [le, oe] = bt(null), [fe, te] = bt({ x: 0, y: 0 }), $ = F / 100, [D, be] = bt(Math.random());
  ir(() => {
    t && typeof t == "object" && "current" in t && (t.current = H.current);
  }, [t]), ir(() => {
    const q = (X) => {
      X.code === "Space" && !X.repeat && !W && (X.preventDefault(), z(!0), de.current && (de.current.style.cursor = "grab"));
    }, J = (X) => {
      X.code === "Space" && (X.preventDefault(), z(!1), de.current && f !== "pan" && (de.current.style.cursor = "default"));
    };
    return window.addEventListener("keydown", q), window.addEventListener("keyup", J), () => {
      window.removeEventListener("keydown", q), window.removeEventListener("keyup", J);
    };
  }, [W, f]), ir(() => {
    var Ne, we;
    const q = H.current, J = ae.current, X = q.getContext("2d"), T = J.getContext("2d");
    if (X.clearRect(0, 0, q.width, q.height), T.clearRect(0, 0, J.width, J.height), X.save(), X.scale($, $), T.save(), T.scale($, $), (Ne = r == null ? void 0 : r.commands) == null || Ne.forEach((ue) => {
      ue.type === "image" && ue.image && X.drawImage(ue.image, 0, 0, q.width / $, q.height / $);
    }), (we = r == null ? void 0 : r.commands) == null || we.forEach((ue) => {
      if (ue.type !== "image") {
        switch (T.beginPath(), T.lineCap = "round", T.lineJoin = "round", ue.brushType) {
          case an.PAINT_PEN:
            T.globalAlpha = 0.5, T.lineWidth = ue.size * 2 / $;
            break;
          case an.MEMORY_PEN:
          case an.COLOR_PEN:
            T.globalAlpha = 0.7, T.lineWidth = ue.size / $;
            break;
          case an.PENCIL:
            T.globalAlpha = 0.6, T.lineWidth = ue.size * 0.8 / $;
            break;
          case an.PEN:
          default:
            T.globalAlpha = 1, T.lineWidth = ue.size * 0.5 / $;
            break;
        }
        if (ue.type === "freehand" || ue.type === "erase")
          T.moveTo(ue.points[0].x, ue.points[0].y), ue.points.forEach((Ie) => T.lineTo(Ie.x, Ie.y)), T.strokeStyle = ue.type === "erase" ? "#FFFFFF" : ue.color, T.globalCompositeOperation = ue.type === "erase" ? "destination-out" : "source-over", T.stroke();
        else if (ue.type === "line")
          T.moveTo(ue.fromX, ue.fromY), T.lineTo(ue.toX, ue.toY), T.strokeStyle = ue.color, T.lineWidth = ue.size * 0.5 / $, T.globalCompositeOperation = "source-over", T.stroke();
        else if (ue.type === "rectangle")
          T.strokeRect(ue.x, ue.y, ue.width, ue.height), T.strokeStyle = ue.color, T.lineWidth = ue.size * 0.5 / $, T.globalCompositeOperation = "source-over", T.stroke();
        else if (ue.type === "circle")
          T.arc(ue.x, ue.y, ue.radius, 0, 2 * Math.PI), T.strokeStyle = ue.color, T.lineWidth = ue.size * 0.5 / $, T.globalCompositeOperation = "source-over", T.stroke();
        else if (ue.type === "text") {
          const Ie = ue.textStyle || { fontFamily: "Arial", fontSize: 16, bold: !1, italic: !1, underline: !1 }, Ue = [];
          Ie.italic && Ue.push("italic"), Ie.bold && Ue.push("bold"), Ue.push(`${Ie.fontSize}px`), Ue.push(Ie.fontFamily), T.save(), T.setTransform(1, 0, 0, 1, 0, 0), T.translate(ue.x * $, ue.y * $), T.scale(1, 1), T.font = Ue.join(" "), T.fillStyle = ue.color, T.textBaseline = "top", T.globalCompositeOperation = "source-over";
          const ge = ue.text.split(`
`), R = Ie.fontSize * 1.2;
          ge.forEach((Xe, qe) => {
            if (T.fillText(Xe, 0, R * qe), Ie.underline) {
              const _e = T.measureText(Xe).width;
              T.beginPath(), T.moveTo(0, R * qe + Ie.fontSize + 2), T.lineTo(_e, R * qe + Ie.fontSize + 2), T.strokeStyle = ue.color, T.lineWidth = 1, T.stroke();
            }
          }), T.restore();
        }
        T.globalAlpha = 1;
      }
    }), s) {
      switch (T.beginPath(), T.lineCap = "round", T.lineJoin = "round", s.brushType) {
        case an.PAINT_PEN:
          T.globalAlpha = 0.5, T.lineWidth = s.size * 2 / $;
          break;
        case an.MEMORY_PEN:
        case an.COLOR_PEN:
          T.globalAlpha = 0.7, T.lineWidth = s.size / $;
          break;
        case an.PENCIL:
          T.globalAlpha = 0.6, T.lineWidth = s.size * 0.8 / $;
          break;
        case an.PEN:
        default:
          T.globalAlpha = 1, T.lineWidth = s.size * 0.5 / $;
          break;
      }
      s.type === "freehand" || s.type === "erase" ? (T.moveTo(s.points[0].x, s.points[0].y), s.points.forEach((ue) => T.lineTo(ue.x, ue.y)), T.strokeStyle = s.type === "erase" ? "#FFFFFF" : s.color, T.globalCompositeOperation = s.type === "erase" ? "destination-out" : "source-over", T.stroke()) : s.type === "line" ? (T.moveTo(s.fromX, s.fromY), T.lineTo(s.toX, s.toY), T.strokeStyle = s.color, T.globalCompositeOperation = "source-over", T.stroke()) : s.type === "rectangle" ? (T.strokeRect(s.x, s.y, s.width, s.height), T.strokeStyle = s.color, T.globalCompositeOperation = "source-over", T.stroke()) : s.type === "circle" && (T.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), T.strokeStyle = s.color, T.globalCompositeOperation = "source-over", T.stroke()), T.globalAlpha = 1;
    }
    X.restore(), T.restore(), X.drawImage(J, 0, 0, q.width, q.height);
  }, [r, s, F, D]);
  const w = (q) => {
    const J = q.currentTarget.getBoundingClientRect(), X = (q.clientX - J.left) / $, T = (q.clientY - J.top) / $;
    return { x: X, y: T };
  }, j = (q) => {
    ie(!0), h(!0);
    const { x: J, y: X } = w(q);
    if (q.currentTarget.getBoundingClientRect(), W || f === "pan") {
      q.preventDefault(), k(!0), oe({ x: q.clientX - fe.x, y: q.clientY - fe.y }), de.current && (de.current.style.cursor = "grabbing");
      return;
    }
    if (f === "text" && (!_ || !O)) {
      p({ x: J, y: X }), N(!0);
      return;
    }
    f === "pencil" ? o({
      type: "freehand",
      points: [{ x: J, y: X }],
      color: g,
      size: b,
      brushType: y
    }) : f === "eraser" ? o({
      type: "erase",
      points: [{ x: J, y: X }],
      color: g,
      size: b
    }) : f === "line" ? o({
      type: "line",
      fromX: J,
      fromY: X,
      toX: J,
      toY: X,
      color: g,
      size: b
    }) : f === "rectangle" ? o({
      type: "rectangle",
      x: J,
      y: X,
      width: 0,
      height: 0,
      color: g,
      size: b
    }) : f === "circle" && o({
      type: "circle",
      x: J,
      y: X,
      radius: 0,
      color: g,
      size: b
    });
  }, B = (q) => {
    const J = H.current.getBoundingClientRect(), X = q.clientX - J.left, T = q.clientY - J.top;
    if (he({
      x: X,
      y: T
    }), P) {
      const ue = q.clientX - ((le == null ? void 0 : le.x) || 0), Ie = q.clientY - ((le == null ? void 0 : le.y) || 0);
      te({ x: ue, y: Ie });
      return;
    }
    if (W || f === "pan" || !c || !s) return;
    const { x: Ne, y: we } = w(q);
    if (s.type === "freehand" || s.type === "erase")
      o((ue) => ({
        ...ue,
        points: [...ue.points, { x: Ne, y: we }]
      }));
    else if (s.type === "line")
      o((ue) => ({
        ...ue,
        toX: Ne,
        toY: we
      }));
    else if (s.type === "rectangle")
      o((ue) => ({
        ...ue,
        x: Math.min(ue.x, Ne),
        y: Math.min(ue.y, we),
        width: Math.abs(Ne - ue.x),
        height: Math.abs(we - ue.y)
      }));
    else if (s.type === "circle") {
      const ue = Math.sqrt((Ne - s.x) ** 2 + (we - s.y) ** 2);
      o((Ie) => ({ ...Ie, radius: ue }));
    }
  }, U = () => {
    if (ie(!1), P) {
      k(!1), de.current && (de.current.style.cursor = W || f === "pan" ? "grab" : "default");
      return;
    }
    c && s && (a((q) => ({
      ...q,
      commands: [...q.commands, s]
    })), o(null), h(!1));
  };
  return ir(() => {
    const q = H.current, J = ae.current, X = () => {
      const T = q.parentElement, Ne = window.devicePixelRatio || 1, we = T.getBoundingClientRect();
      q.width = we.width * Ne, q.height = we.height * Ne, J.width = we.width * Ne, J.height = we.height * Ne, q.style.width = `${we.width}px`, q.style.height = `${we.height}px`, J.style.width = `${we.width}px`, J.style.height = `${we.height}px`, be(Math.random());
    };
    return X(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, []), /* @__PURE__ */ ce.jsx(
    "div",
    {
      ref: de,
      className: "relative w-full h-[600px] overflow-hidden select-none",
      style: { cursor: W || f === "pan" ? P ? "grabbing" : "grab" : "default" },
      children: /* @__PURE__ */ ce.jsxs(
        "div",
        {
          style: {
            transform: `translate(${fe.x}px, ${fe.y}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ ce.jsx(
              "canvas",
              {
                ref: H,
                className: "absolute top-0 left-0 w-full h-full bg-gray-100",
                onMouseDown: j,
                onMouseMove: B,
                onMouseUp: U,
                onMouseLeave: U
              }
            ),
            /* @__PURE__ */ ce.jsx(
              "canvas",
              {
                ref: ae,
                className: "absolute top-0 left-0 w-full h-full pointer-events-none"
              }
            ),
            O && I && /* @__PURE__ */ ce.jsx(i2, { position: { x: I.x, y: I.y } }),
            /* @__PURE__ */ ce.jsx(
              a2,
              {
                x: (se == null ? void 0 : se.x) || 0,
                y: (se == null ? void 0 : se.y) || 0,
                isClicking: Le,
                isDrawing: c,
                tool: f
              }
            )
          ]
        }
      )
    }
  );
}), u2 = () => {
  const { canvasRef: n } = Ur();
  return /* @__PURE__ */ ce.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ ce.jsx(r2, {}),
    /* @__PURE__ */ ce.jsx(o2, { ref: n })
  ] });
};
export {
  mn as B,
  u2 as D,
  l2 as T,
  mt as _,
  Ur as a,
  c2 as b,
  zr as u
};
