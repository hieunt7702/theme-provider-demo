import vt, { forwardRef as Fa, createElement as Us, createContext as tc, useContext as nc, useState as st, useEffect as Tn, useRef as Zn } from "react";
var Ao = { exports: {} }, Sa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl;
function K1() {
  if (hl) return Sa;
  hl = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(i, s, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      o = {};
      for (var h in s)
        h !== "key" && (o[h] = s[h]);
    } else o = s;
    return s = o.ref, {
      $$typeof: n,
      type: i,
      key: c,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Sa.Fragment = e, Sa.jsx = r, Sa.jsxs = r, Sa;
}
var _a = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl;
function Q1() {
  return fl || (fl = 1, process.env.NODE_ENV !== "production" && function() {
    function n(z) {
      if (z == null) return null;
      if (typeof z == "function")
        return z.$$typeof === de ? null : z.displayName || z.name || null;
      if (typeof z == "string") return z;
      switch (z) {
        case I:
          return "Fragment";
        case k:
          return "Profiler";
        case E:
          return "StrictMode";
        case fe:
          return "Suspense";
        case be:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof z == "object")
        switch (typeof z.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), z.$$typeof) {
          case M:
            return "Portal";
          case G:
            return (z.displayName || "Context") + ".Provider";
          case F:
            return (z._context.displayName || "Context") + ".Consumer";
          case le:
            var ue = z.render;
            return z = z.displayName, z || (z = ue.displayName || ue.name || "", z = z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef"), z;
          case Q:
            return ue = z.displayName || null, ue !== null ? ue : n(z.type) || "Memo";
          case q:
            ue = z._payload, z = z._init;
            try {
              return n(z(ue));
            } catch {
            }
        }
      return null;
    }
    function e(z) {
      return "" + z;
    }
    function r(z) {
      try {
        e(z);
        var ue = !1;
      } catch {
        ue = !0;
      }
      if (ue) {
        ue = console;
        var w = ue.error, C = typeof Symbol == "function" && Symbol.toStringTag && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return w.call(
          ue,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(z);
      }
    }
    function i(z) {
      if (z === I) return "<>";
      if (typeof z == "object" && z !== null && z.$$typeof === q)
        return "<...>";
      try {
        var ue = n(z);
        return ue ? "<" + ue + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var z = A.A;
      return z === null ? null : z.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(z) {
      if (_.call(z, "key")) {
        var ue = Object.getOwnPropertyDescriptor(z, "key").get;
        if (ue && ue.isReactWarning) return !1;
      }
      return z.key !== void 0;
    }
    function h(z, ue) {
      function w() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ue
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(z, "key", {
        get: w,
        configurable: !0
      });
    }
    function f() {
      var z = n(this.type);
      return ae[z] || (ae[z] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), z = this.props.ref, z !== void 0 ? z : null;
    }
    function g(z, ue, w, C, T, U, $, re) {
      return w = U.ref, z = {
        $$typeof: p,
        type: z,
        key: ue,
        props: U,
        _owner: T
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(z, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(z, "ref", { enumerable: !1, value: null }), z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(z, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(z, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(z, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    }
    function v(z, ue, w, C, T, U, $, re) {
      var ee = ue.children;
      if (ee !== void 0)
        if (C)
          if (D(ee)) {
            for (C = 0; C < ee.length; C++)
              m(ee[C]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(ee);
      if (_.call(ue, "key")) {
        ee = n(z);
        var oe = Object.keys(ue).filter(function(ke) {
          return ke !== "key";
        });
        C = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", se[ee + C] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          ee,
          oe,
          ee
        ), se[ee + C] = !0);
      }
      if (ee = null, w !== void 0 && (r(w), ee = "" + w), c(ue) && (r(ue.key), ee = "" + ue.key), "key" in ue) {
        w = {};
        for (var Ie in ue)
          Ie !== "key" && (w[Ie] = ue[Ie]);
      } else w = ue;
      return ee && h(
        w,
        typeof z == "function" ? z.displayName || z.name || "Unknown" : z
      ), g(
        z,
        ee,
        U,
        T,
        s(),
        w,
        $,
        re
      );
    }
    function m(z) {
      typeof z == "object" && z !== null && z.$$typeof === p && z._store && (z._store.validated = 1);
    }
    var x = vt, p = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), G = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, D = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(z) {
        return z();
      }
    };
    var ce, ae = {}, he = x["react-stack-bottom-frame"].bind(
      x,
      o
    )(), J = R(i(o)), se = {};
    _a.Fragment = I, _a.jsx = function(z, ue, w, C, T) {
      var U = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        z,
        ue,
        w,
        !1,
        C,
        T,
        U ? Error("react-stack-top-frame") : he,
        U ? R(i(z)) : J
      );
    }, _a.jsxs = function(z, ue, w, C, T) {
      var U = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        z,
        ue,
        w,
        !0,
        C,
        T,
        U ? Error("react-stack-top-frame") : he,
        U ? R(i(z)) : J
      );
    };
  }()), _a;
}
var dl;
function eu() {
  return dl || (dl = 1, process.env.NODE_ENV === "production" ? Ao.exports = K1() : Ao.exports = Q1()), Ao.exports;
}
var X = eu(), zl = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, pl = vt.createContext && /* @__PURE__ */ vt.createContext(zl), tu = ["attr", "size", "title"];
function nu(n, e) {
  if (n == null) return {};
  var r = ru(n, e), i, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (s = 0; s < o.length; s++)
      i = o[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (r[i] = n[i]);
  }
  return r;
}
function ru(n, e) {
  if (n == null) return {};
  var r = {};
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) >= 0) continue;
      r[i] = n[i];
    }
  return r;
}
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, Mo.apply(this, arguments);
}
function gl(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function Eo(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gl(Object(r), !0).forEach(function(i) {
      iu(n, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : gl(Object(r)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return n;
}
function iu(n, e, r) {
  return e = au(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function au(n) {
  var e = ou(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ou(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Ul(n) {
  return n && n.map((e, r) => /* @__PURE__ */ vt.createElement(e.tag, Eo({
    key: r
  }, e.attr), Ul(e.child)));
}
function ut(n) {
  return (e) => /* @__PURE__ */ vt.createElement(su, Mo({
    attr: Eo({}, n.attr)
  }, e), Ul(n.child));
}
function su(n) {
  var e = (r) => {
    var {
      attr: i,
      size: s,
      title: o
    } = n, c = nu(n, tu), h = s || r.size || "1em", f;
    return r.className && (f = r.className), n.className && (f = (f ? f + " " : "") + n.className), /* @__PURE__ */ vt.createElement("svg", Mo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, i, c, {
      className: f,
      style: Eo(Eo({
        color: n.color || r.color
      }, r.style), n.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ vt.createElement("title", null, o), n.children);
  };
  return pl !== void 0 ? /* @__PURE__ */ vt.createElement(pl.Consumer, null, (r) => e(r)) : e(zl);
}
function rc(n) {
  return ut({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z" }, child: [] }] })(n);
}
function ic(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(n);
}
function To(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(n);
}
function ac(n) {
  return ut({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" }, child: [] }] })(n);
}
function oc(n) {
  return ut({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z" }, child: [] }] })(n);
}
function Bo(n) {
  return ut({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(n);
}
function sc(n) {
  return ut({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" }, child: [] }] })(n);
}
function cc(n) {
  return ut({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(n);
}
function Do(n) {
  return ut({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(n);
}
function lc(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" }, child: [] }] })(n);
}
function uc(n) {
  return ut({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" }, child: [] }] })(n);
}
function hc(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" }, child: [] }] })(n);
}
function fc(n) {
  return ut({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" }, child: [] }] })(n);
}
function dc(n) {
  return ut({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" }, child: [] }] })(n);
}
function pc(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 5 15 L 5 17 L 27 17 L 27 15 Z" }, child: [] }] })(n);
}
function gc(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.15625 3 C 18.390625 3.003906 17.644531 3.300781 17.09375 3.90625 C 17.085938 3.914063 17.101563 3.929688 17.09375 3.9375 C 15.863281 5.175781 15.386719 6.40625 14.96875 7.5 C 14.789063 7.972656 14.609375 8.417969 14.375 8.875 C 13.914063 8.34375 13.25 8 12.5 8 C 11.132813 8 10 9.132813 10 10.5 C 10 11.867188 11.132813 13 12.5 13 C 13.242188 13 13.882813 12.648438 14.34375 12.125 L 14.40625 12.1875 L 5.28125 21.28125 L 5 21.59375 L 5 25.5625 L 4 26.59375 L 5.40625 28 L 6.4375 27 L 10.40625 27 L 10.71875 26.71875 L 27.28125 10.125 L 27.3125 10.09375 C 28.464844 8.941406 28.464844 7.058594 27.3125 5.90625 L 26.09375 4.6875 C 25.515625 4.109375 24.765625 3.8125 24 3.8125 C 23.285156 3.8125 22.589844 4.089844 22.03125 4.59375 L 21.3125 3.90625 C 20.722656 3.316406 19.933594 2.996094 19.15625 3 Z M 19.1875 5 C 19.433594 5.003906 19.699219 5.105469 19.90625 5.3125 L 20.59375 6 L 14.46875 12.09375 C 15.824219 10.65625 16.421875 9.320313 16.84375 8.21875 C 17.273438 7.09375 17.542969 6.269531 18.5 5.3125 L 18.5625 5.25 C 18.710938 5.082031 18.941406 4.996094 19.1875 5 Z M 24 5.78125 C 24.234375 5.78125 24.464844 5.871094 24.6875 6.09375 L 25.90625 7.3125 C 26.351563 7.757813 26.351563 8.242188 25.90625 8.6875 L 25 9.5625 L 22.4375 7 L 23.21875 6.21875 L 23.3125 6.09375 C 23.535156 5.871094 23.765625 5.78125 24 5.78125 Z M 21 8.4375 L 23.5625 11 L 16 18.5625 L 13.4375 16 Z M 12.5 10 C 12.789063 10 13 10.210938 13 10.5 C 13 10.789063 12.789063 11 12.5 11 C 12.210938 11 12 10.789063 12 10.5 C 12 10.210938 12.210938 10 12.5 10 Z M 12 17.4375 L 14.5625 20 L 9.5625 25 L 7 25 L 7 22.4375 Z" }, child: [] }] })(n);
}
function qo(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 23.8125 4.03125 C 22.722656 4.03125 21.613281 4.449219 20.78125 5.28125 L 11.5 14.5625 L 6.03125 16.65625 L 5.5 16.875 L 5.40625 17.4375 L 4 26.84375 L 3.8125 28.1875 L 5.15625 28 L 14.5625 26.59375 L 15.125 26.5 L 15.34375 25.96875 L 17.3125 20.78125 L 17.8125 20.3125 L 26.8125 11.3125 C 28.425781 9.699219 28.457031 7.109375 26.9375 5.4375 L 26.8125 5.28125 C 25.980469 4.449219 24.902344 4.03125 23.8125 4.03125 Z M 23.8125 6 C 24.375 6 24.9375 6.25 25.40625 6.71875 C 26.34375 7.65625 26.34375 8.96875 25.40625 9.90625 L 20.375 14.9375 L 17.1875 11.75 L 22.21875 6.71875 C 22.6875 6.25 23.25 6 23.8125 6 Z M 15.75 13.1875 L 18.9375 16.375 L 17.125 18.1875 L 13.9375 15 Z M 12.40625 16.34375 L 12.4375 16.34375 L 15.65625 19.5625 L 13.6875 24.71875 L 7.84375 25.5625 L 10.53125 22.875 C 10.585938 22.878906 10.632813 22.90625 10.6875 22.90625 C 11.570313 22.90625 12.3125 22.195313 12.3125 21.3125 C 12.3125 20.429688 11.570313 19.6875 10.6875 19.6875 C 9.804688 19.6875 9.09375 20.429688 9.09375 21.3125 C 9.09375 21.367188 9.121094 21.414063 9.125 21.46875 L 6.4375 24.15625 L 7.28125 18.3125 Z" }, child: [] }] })(n);
}
function mc(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z" }, child: [] }] })(n);
}
function vc(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.21875 5.28125 L 17.78125 6.71875 L 24.0625 13 L 11 13 C 7.15625 13 4 16.15625 4 20 L 4 27 L 6 27 L 6 20 C 6 17.246094 8.246094 15 11 15 L 24.0625 15 L 17.78125 21.28125 L 19.21875 22.71875 L 27.21875 14.71875 L 27.90625 14 L 27.21875 13.28125 Z" }, child: [] }] })(n);
}
function bc(n) {
  return ut({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 12.78125 5.28125 L 4.78125 13.28125 L 4.09375 14 L 4.78125 14.71875 L 12.78125 22.71875 L 14.21875 21.28125 L 7.9375 15 L 21 15 C 23.753906 15 26 17.246094 26 20 L 26 27 L 28 27 L 28 20 C 28 16.15625 24.84375 13 21 13 L 7.9375 13 L 14.21875 6.71875 Z" }, child: [] }] })(n);
}
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lu = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, i) => i ? i.toUpperCase() : r.toLowerCase()
), ml = (n) => {
  const e = lu(n);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hl = (...n) => n.filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim(), uu = (n) => {
  for (const e in n)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hu = {
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
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = Fa(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: o,
    iconNode: c,
    ...h
  }, f) => Us(
    "svg",
    {
      ref: f,
      ...hu,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: i ? Number(r) * 24 / Number(e) : r,
      className: Hl("lucide", s),
      ...!o && !uu(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...c.map(([g, v]) => Us(g, v)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = (n, e) => {
  const r = Fa(
    ({ className: i, ...s }, o) => Us(fu, {
      ref: o,
      iconNode: e,
      className: Hl(
        `lucide-${cu(ml(n))}`,
        `lucide-${n}`,
        i
      ),
      ...s
    })
  );
  return r.displayName = ml(n), r;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], pu = it("bold", du);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gu = [
  ["path", { d: "m16 22-1-4", key: "1ow2iv" }],
  [
    "path",
    {
      d: "M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1",
      key: "iw8jdu"
    }
  ],
  ["path", { d: "M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z", key: "1soew8" }],
  ["path", { d: "m8 22 1-4", key: "s3unb" }]
], mu = it("brush-cleaning", gu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vu = [
  ["path", { d: "m11 10 3 3", key: "fzmg1i" }],
  [
    "path",
    { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z", key: "p4q2r7" }
  ],
  ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031", key: "wy6l02" }]
], bu = it("brush", vu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wu = it("check", yu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xu = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nu = it("chevron-down", xu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Au = it("chevron-right", Lu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], vl = it("circle", Su);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = [
  ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
  ["path", { d: "m12 21 4-4", key: "1lfcce" }],
  ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", key: "ui1hmy" }]
], ku = it("cloud-download", _u);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = [
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
], Iu = it("corner-up-left", Pu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
], ju = it("corner-up-right", Cu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Mu = it("ellipsis", Fu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Ou = it("eraser", Eu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
], Tu = it("file-input", Ru);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }]
], Du = it("file-plus-2", Bu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], zu = it("file-text", qu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uu = [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
      key: "fm4g5t"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
], Hu = it("folder-input", Uu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
], Vu = it("hand", Wu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], Yu = it("heart", Gu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
], Xu = it("highlighter", $u);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
      key: "9csbqa"
    }
  ],
  ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }],
  ["path", { d: "M17 22v-5.5", key: "1aa6fl" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Zu = it("image-up", Ju);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Qu = it("image", Ku);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e2 = [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" }]
], t2 = it("images", e2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], r2 = it("italic", n2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], a2 = it("layers", i2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], s2 = it("menu", o2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "M5 12h14", key: "1ays0h" }]], l2 = it("minus", c2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [
  [
    "path",
    { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
], h2 = it("paint-bucket", u2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "hbicv8"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }
  ],
  ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
], d2 = it("party-popper", f2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
], g2 = it("pen-line", p2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], v2 = it("pen", m2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], y2 = it("plus", b2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], bl = it("refresh-cw", w2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], N2 = it("rotate-ccw", x2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], A2 = it("rotate-cw", L2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = [
  ["path", { d: "M10 22v-5", key: "sfixh4" }],
  ["path", { d: "M14 19v-2", key: "pdve8j" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M18 20v-3", key: "uox2gk" }],
  ["path", { d: "M2 13h20", key: "5evz65" }],
  ["path", { d: "M20 13V7l-5-5H6a2 2 0 0 0-2 2v9", key: "1rnpe2" }],
  ["path", { d: "M6 20v-3", key: "c6pdcb" }]
], _2 = it("shredder", S2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = [["path", { d: "M22 2 2 22", key: "y4kqgn" }]], P2 = it("slash", k2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
], C2 = it("spline", I2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
      key: "xwnzip"
    }
  ],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
], F2 = it("square-dashed-mouse-pointer", j2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], E2 = it("square", M2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
], R2 = it("trash", O2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
], B2 = it("triangle", T2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], q2 = it("type", D2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], U2 = it("underline", z2);
var H2 = /* @__PURE__ */ tc({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), W2 = function(e, r, i) {
  var s = i.get(e);
  return s ? s(r) : (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), null);
};
function yl(n, e) {
  if (n == null) return {};
  var r = {}, i = Object.keys(n), s, o;
  for (o = 0; o < i.length; o++)
    s = i[o], !(e.indexOf(s) >= 0) && (r[s] = n[s]);
  return r;
}
var Wl = /* @__PURE__ */ Fa(function(n, e) {
  var r = n.alt, i = n.color, s = n.size, o = n.weight, c = n.mirrored, h = n.children, f = n.renderPath, g = yl(n, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]), v = nc(H2), m = v.color, x = m === void 0 ? "currentColor" : m, p = v.size, M = v.weight, I = M === void 0 ? "regular" : M, E = v.mirrored, k = E === void 0 ? !1 : E, F = yl(v, ["color", "size", "weight", "mirrored"]);
  return vt.createElement("svg", Object.assign({
    ref: e,
    xmlns: "http://www.w3.org/2000/svg",
    width: s ?? p,
    height: s ?? p,
    fill: i ?? x,
    viewBox: "0 0 256 256",
    transform: c || k ? "scale(-1, 1)" : void 0
  }, F, g), !!r && vt.createElement("title", null, r), h, vt.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), f(o ?? I, i ?? x));
});
Wl.displayName = "IconBase";
var li = /* @__PURE__ */ new Map();
li.set("bold", function(n) {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    fill: "none",
    stroke: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
li.set("duotone", function(n) {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    opacity: "0.2"
  }), vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    fill: "none",
    stroke: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
li.set("fill", function() {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "24",
    y: "40",
    width: "208",
    height: "176",
    rx: "16"
  }));
});
li.set("light", function(n) {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    fill: "none",
    stroke: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
li.set("thin", function(n) {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    fill: "none",
    stroke: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
li.set("regular", function(n) {
  return vt.createElement(vt.Fragment, null, vt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    fill: "none",
    stroke: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var V2 = function(e, r) {
  return W2(e, r, li);
}, Hs = /* @__PURE__ */ Fa(function(n, e) {
  return vt.createElement(Wl, Object.assign({
    ref: e
  }, n, {
    renderPath: V2
  }));
});
Hs.displayName = "Rectangle";
const G2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: Vu,
  PencilOutlineIcon: v2,
  MemoryPenOutlineIcon: Xu,
  ColorPenOutlineIcon: bu,
  PaintPenOutlineIcon: h2,
  PenOutlineIcon: qo,
  FontsIcon: q2,
  MinusIcon: l2,
  SquareIcon: E2,
  EraserIcon: Ou,
  PlusIcon: y2,
  FontBoldIcon: pu,
  FontItalicIcon: r2,
  FontUnderlineIcon: U2,
  CircleOutlineIcon: vl,
  RectangleOutlineIcon: Hs,
  UndoIcon: Iu,
  RedoIcon: ju,
  MenuIcon: s2,
  CheckIcon: wu,
  CopyImageIcon: t2,
  SaveCloudIcon: ku,
  ExportIcon: Hu,
  PDFIcon: zu,
  ImageIcon: Qu,
  ArrowRightIcon: Au,
  MoreIcon: Mu,
  MultipleCardsIcon: a2,
  AddBoardIcon: Du,
  // Thêm bảng
  SplineIcon: C2,
  // Hình học
  CleanIcon: mu,
  // Chổi quét rác
  ImageUpIcon: Zu,
  // Up ảnh
  LineIcon: P2,
  // Đường chéo
  RectangleIcon: Hs,
  // Hình chữ nhật
  CircleIcon: vl,
  // Hình tròn
  HeartIcon: Yu,
  // Trái tim
  TriangleIcon: B2,
  // Hình tam giác
  SquareDashedIcon: F2,
  // Select Move
  DeleteOutlineIcon: R2,
  // Thùng rác (Xóa)
  ArrowDownIcon: Nu,
  PenLineIcon: g2,
  // Chỉnh sửa
  ShredderIcon: _2,
  // Hủy giấy
  PartyPopperIcon: d2
  // Pháo hoa
};
function yc(n) {
  return ut({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }, child: [] }] })(n);
}
function wc(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112m0 0V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160m-64 1V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224m128-80V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" }, child: [] }] })(n);
}
function xc(n) {
  return ut({ attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z", fill: "currentColor" }, child: [] }] })(n);
}
function Nc(n) {
  return ut({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" }, child: [] }] })(n);
}
function Lc(n) {
  return ut({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }, child: [] }, { tag: "path", attr: { d: "M22 21H7" }, child: [] }, { tag: "path", attr: { d: "m5 11 9 9" }, child: [] }] })(n);
}
function Ac(n) {
  return ut({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }, child: [] }, { tag: "path", attr: { d: "m14 19.5 3-3 3 3" }, child: [] }, { tag: "path", attr: { d: "M17 22v-5.5" }, child: [] }, { tag: "circle", attr: { cx: "9", cy: "9", r: "2" }, child: [] }] })(n);
}
function Sc(n) {
  return ut({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, child: [] }, { tag: "path", attr: { d: "M14 14v-8l-2 2" }, child: [] }] })(n);
}
function _c(n) {
  return ut({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, child: [] }] })(n);
}
function kc(n) {
  return ut({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" }, child: [] }] })(n);
}
function Pc(n) {
  return ut({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(n);
}
function Ic(n) {
  return ut({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" }, child: [] }] })(n);
}
function Cc(n) {
  return ut({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z" }, child: [] }] })(n);
}
function jc(n) {
  return ut({ attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M2 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM2 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM8.5 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z" }, child: [] }] })(n);
}
function Fc(n) {
  return ut({ attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329c-1.199 0-2.327.463-3.18 1.304-.027.025-7.967 7.964-7.967 7.964-.373.373-.717.91-.967 1.514-.195.473-1.979 5.863-2.336 6.939-.119.358-.025.754.242 1.021.189.189.445.293.707.293.105 0 .211-.018.314-.051 1.076-.355 6.465-2.141 6.938-2.336.603-.248 1.14-.592 1.515-.967l2.157-2.156.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5c.696-.695.887-1.699.588-2.572.107-.386.18-.783.18-1.195zm-11.864 10.379c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038l3.051 3.051zm-4.097.047l.999.999-1.498.499.499-1.498zm7.698-3.113l-2.42 2.42-.235.18-3.53-3.529.18-.234 7.131-7.131 2.731 2.731-3.69 3.69c-.513.512-.549 1.289-.167 1.873zm6.08-4.959l-4.5 4.5c-.098.099-.226.146-.354.146s-.256-.049-.354-.146c-.195-.194-.195-.512 0-.707l4.5-4.5c.194-.194.512-.194.707 0 .196.195.197.511.001.707zm.107-1.764c-.519-.168-1.108-.062-1.521.35l-.102.102-2.731-2.731.078-.078c.984-.98 2.652-.981 3.608-.023.479.479.743 1.116.743 1.793.001.199-.03.394-.075.587z" }, child: [] }] })(n);
}
function Mc(n) {
  return ut({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" }, child: [] }] })(n);
}
const Y2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: wc,
  PencilOutlineIcon: yc,
  MemoryPenOutlineIcon: gc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Mc,
  PenOutlineIcon: qo,
  FontsIcon: oc,
  MinusIcon: pc,
  SquareIcon: dc,
  EraserIcon: Lc,
  PlusIcon: mc,
  FontBoldIcon: rc,
  FontItalicIcon: sc,
  FontUnderlineIcon: cc,
  CircleOutlineIcon: lc,
  RectangleOutlineIcon: _c,
  UndoIcon: bc,
  RedoIcon: vc,
  MenuIcon: kc,
  CheckIcon: ic,
  CopyImageIcon: fc,
  SaveCloudIcon: Nc,
  ExportIcon: ac,
  PDFIcon: uc,
  ImageIcon: hc,
  ArrowRightIcon: Pc,
  MoreIcon: jc,
  MultipleCardsIcon: Sc,
  AddBoardIcon: Ic,
  SplineIcon: xc,
  CleanIcon: Cc,
  ImageUpIcon: Ac
}, $2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: wc,
  PencilOutlineIcon: yc,
  MemoryPenOutlineIcon: gc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Mc,
  PenOutlineIcon: qo,
  FontsIcon: oc,
  MinusIcon: pc,
  SquareIcon: dc,
  EraserIcon: Lc,
  PlusIcon: mc,
  FontBoldIcon: rc,
  FontItalicIcon: sc,
  FontUnderlineIcon: cc,
  CircleOutlineIcon: lc,
  RectangleOutlineIcon: _c,
  UndoIcon: bc,
  RedoIcon: vc,
  MenuIcon: kc,
  CheckIcon: ic,
  CopyImageIcon: fc,
  SaveCloudIcon: Nc,
  ExportIcon: ac,
  PDFIcon: uc,
  ImageIcon: hc,
  ArrowRightIcon: Pc,
  MoreIcon: jc,
  MultipleCardsIcon: Sc,
  AddBoardIcon: Ic,
  SplineIcon: xc,
  CleanIcon: Cc,
  ImageUpIcon: Ac
}, X2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: wc,
  PencilOutlineIcon: yc,
  MemoryPenOutlineIcon: gc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Mc,
  PenOutlineIcon: qo,
  FontsIcon: oc,
  MinusIcon: pc,
  SquareIcon: dc,
  EraserIcon: Lc,
  PlusIcon: mc,
  FontBoldIcon: rc,
  FontItalicIcon: sc,
  FontUnderlineIcon: cc,
  CircleOutlineIcon: lc,
  RectangleOutlineIcon: _c,
  UndoIcon: bc,
  RedoIcon: vc,
  MenuIcon: kc,
  CheckIcon: ic,
  CopyImageIcon: fc,
  SaveCloudIcon: Nc,
  ExportIcon: ac,
  PDFIcon: uc,
  ImageIcon: hc,
  ArrowRightIcon: Pc,
  MoreIcon: jc,
  MultipleCardsIcon: Sc,
  AddBoardIcon: Ic,
  SplineIcon: xc,
  CleanIcon: Cc,
  ImageUpIcon: Ac
}, Fs = {
  default: {
    global: "bg-white text-gray-700 text-base !font-work-sans",
    iconSet: G2,
    components: {
      navbar: "bg-white text-black hover:bg-gray-100",
      button: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-200",
      buttonSelected: "!bg-blue-200 text-white !border-transparent",
      buttonBorder: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100",
      buttonIcon: "bg-transparent !text-blue-500 hover:!bg-blue-100 active:!bg-blue-200"
    }
  },
  light: {
    global: "bg-gray-50 text-gray-900 text-base font-sans",
    iconSet: Y2,
    components: {
      navbar: "bg-white text-gray-800 hover:bg-gray-200",
      button: "bg-green-500 text-white hover:bg-green-600 active:bg-green-200",
      buttonSelected: "bg-green-200 text-white",
      buttonBorder: "bg-transparent text-green-600 border border-green-600 hover:bg-green-100"
    }
  },
  dark: {
    global: "bg-gray-900 text-white text-base font-mono",
    iconSet: $2,
    components: {
      navbar: "bg-gray-800 text-white hover:bg-gray-200",
      button: "bg-indigo-600 text-white hover:bg-indigo-200 active:bg-indigo-800",
      buttonSelected: "bg-green-200 text-white",
      buttonBorder: "bg-transparent text-indigo-400 hover:bg-indigo-900"
    }
  },
  children: {
    global: "bg-yellow-100 text-yellow-900 text-lg font-vtv323",
    iconSet: X2,
    components: {
      navbar: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
      button: "bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600",
      buttonSelected: "bg-pink-200 text-white",
      buttonBorder: "bg-transparent text-pink-600 border border-pink-600 hover:bg-pink-100",
      buttonIcon: "bg-transparent !text-pink-500  hover:!bg-pink-100 active:!bg-pink-200"
    }
  }
}, Vl = tc(void 0), l5 = ({ children: n }) => {
  const [e, r] = st("default");
  Tn(() => {
    const o = localStorage.getItem("app_theme");
    o && Fs[o] && r(o);
  }, []);
  const i = (o, c = !0) => {
    r(o), c && localStorage.setItem("app_theme", o);
  }, s = {
    theme: e,
    config: Fs[e],
    setTheme: i,
    iconSet: Fs[e].iconSet
  };
  return /* @__PURE__ */ X.jsx(Vl.Provider, { value: s, children: n });
}, dr = () => {
  const n = nc(Vl);
  if (!n) throw new Error("useTheme must be used within ThemeProvider");
  return n;
}, Xt = ({ Icon: n, isActive: e, onClick: r, title: i, onChange: s, className: o }) => {
  const { config: c } = dr(), h = c.components.buttonIcon, f = c.components.buttonSelected;
  return /* @__PURE__ */ X.jsx(
    "button",
    {
      className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${h} ${e ? f : ""} ${o}`,
      onClick: r,
      title: i,
      children: /* @__PURE__ */ X.jsx(n, { className: "w-5 h-5", strokeWidth: 1.6 })
    }
  );
};
function xt(n) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xt(n);
}
var fn = Uint8Array, Pn = Uint16Array, Ec = Int32Array, zo = new fn([
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
]), Uo = new fn([
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
]), Ws = new fn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Gl = function(n, e) {
  for (var r = new Pn(31), i = 0; i < 31; ++i)
    r[i] = e += 1 << n[i - 1];
  for (var s = new Ec(r[30]), i = 1; i < 30; ++i)
    for (var o = r[i]; o < r[i + 1]; ++o)
      s[o] = o - r[i] << 5 | i;
  return { b: r, r: s };
}, Yl = Gl(zo, 2), $l = Yl.b, Vs = Yl.r;
$l[28] = 258, Vs[258] = 28;
var Xl = Gl(Uo, 0), J2 = Xl.b, wl = Xl.r, Gs = new Pn(32768);
for (var It = 0; It < 32768; ++It) {
  var Hr = (It & 43690) >> 1 | (It & 21845) << 1;
  Hr = (Hr & 52428) >> 2 | (Hr & 13107) << 2, Hr = (Hr & 61680) >> 4 | (Hr & 3855) << 4, Gs[It] = ((Hr & 65280) >> 8 | (Hr & 255) << 8) >> 1;
}
var hr = function(n, e, r) {
  for (var i = n.length, s = 0, o = new Pn(e); s < i; ++s)
    n[s] && ++o[n[s] - 1];
  var c = new Pn(e);
  for (s = 1; s < e; ++s)
    c[s] = c[s - 1] + o[s - 1] << 1;
  var h;
  if (r) {
    h = new Pn(1 << e);
    var f = 15 - e;
    for (s = 0; s < i; ++s)
      if (n[s])
        for (var g = s << 4 | n[s], v = e - n[s], m = c[n[s] - 1]++ << v, x = m | (1 << v) - 1; m <= x; ++m)
          h[Gs[m] >> f] = g;
  } else
    for (h = new Pn(i), s = 0; s < i; ++s)
      n[s] && (h[s] = Gs[c[n[s] - 1]++] >> 15 - n[s]);
  return h;
}, Gr = new fn(288);
for (var It = 0; It < 144; ++It)
  Gr[It] = 8;
for (var It = 144; It < 256; ++It)
  Gr[It] = 9;
for (var It = 256; It < 280; ++It)
  Gr[It] = 7;
for (var It = 280; It < 288; ++It)
  Gr[It] = 8;
var ja = new fn(32);
for (var It = 0; It < 32; ++It)
  ja[It] = 5;
var Z2 = /* @__PURE__ */ hr(Gr, 9, 0), K2 = /* @__PURE__ */ hr(Gr, 9, 1), Q2 = /* @__PURE__ */ hr(ja, 5, 0), eh = /* @__PURE__ */ hr(ja, 5, 1), Ms = function(n) {
  for (var e = n[0], r = 1; r < n.length; ++r)
    n[r] > e && (e = n[r]);
  return e;
}, $n = function(n, e, r) {
  var i = e / 8 | 0;
  return (n[i] | n[i + 1] << 8) >> (e & 7) & r;
}, Es = function(n, e) {
  var r = e / 8 | 0;
  return (n[r] | n[r + 1] << 8 | n[r + 2] << 16) >> (e & 7);
}, Oc = function(n) {
  return (n + 7) / 8 | 0;
}, Jl = function(n, e, r) {
  return (r == null || r > n.length) && (r = n.length), new fn(n.subarray(e, r));
}, th = [
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
], Jn = function(n, e, r) {
  var i = new Error(e || th[n]);
  if (i.code = n, Error.captureStackTrace && Error.captureStackTrace(i, Jn), !r)
    throw i;
  return i;
}, nh = function(n, e, r, i) {
  var s = n.length, o = 0;
  if (!s || e.f && !e.l)
    return r || new fn(0);
  var c = !r, h = c || e.i != 2, f = e.i;
  c && (r = new fn(s * 3));
  var g = function(ke) {
    var Te = r.length;
    if (ke > Te) {
      var Re = new fn(Math.max(Te * 2, ke));
      Re.set(r), r = Re;
    }
  }, v = e.f || 0, m = e.p || 0, x = e.b || 0, p = e.l, M = e.d, I = e.m, E = e.n, k = s * 8;
  do {
    if (!p) {
      v = $n(n, m, 1);
      var F = $n(n, m + 1, 3);
      if (m += 3, F)
        if (F == 1)
          p = K2, M = eh, I = 9, E = 5;
        else if (F == 2) {
          var be = $n(n, m, 31) + 257, Q = $n(n, m + 10, 15) + 4, q = be + $n(n, m + 5, 31) + 1;
          m += 14;
          for (var ie = new fn(q), de = new fn(19), A = 0; A < Q; ++A)
            de[Ws[A]] = $n(n, m + A * 3, 7);
          m += Q * 3;
          for (var _ = Ms(de), D = (1 << _) - 1, R = hr(de, _, 1), A = 0; A < q; ) {
            var ce = R[$n(n, m, D)];
            m += ce & 15;
            var G = ce >> 4;
            if (G < 16)
              ie[A++] = G;
            else {
              var ae = 0, he = 0;
              for (G == 16 ? (he = 3 + $n(n, m, 3), m += 2, ae = ie[A - 1]) : G == 17 ? (he = 3 + $n(n, m, 7), m += 3) : G == 18 && (he = 11 + $n(n, m, 127), m += 7); he--; )
                ie[A++] = ae;
            }
          }
          var J = ie.subarray(0, be), se = ie.subarray(be);
          I = Ms(J), E = Ms(se), p = hr(J, I, 1), M = hr(se, E, 1);
        } else
          Jn(1);
      else {
        var G = Oc(m) + 4, le = n[G - 4] | n[G - 3] << 8, fe = G + le;
        if (fe > s) {
          f && Jn(0);
          break;
        }
        h && g(x + le), r.set(n.subarray(G, fe), x), e.b = x += le, e.p = m = fe * 8, e.f = v;
        continue;
      }
      if (m > k) {
        f && Jn(0);
        break;
      }
    }
    h && g(x + 131072);
    for (var z = (1 << I) - 1, ue = (1 << E) - 1, w = m; ; w = m) {
      var ae = p[Es(n, m) & z], C = ae >> 4;
      if (m += ae & 15, m > k) {
        f && Jn(0);
        break;
      }
      if (ae || Jn(2), C < 256)
        r[x++] = C;
      else if (C == 256) {
        w = m, p = null;
        break;
      } else {
        var T = C - 254;
        if (C > 264) {
          var A = C - 257, U = zo[A];
          T = $n(n, m, (1 << U) - 1) + $l[A], m += U;
        }
        var $ = M[Es(n, m) & ue], re = $ >> 4;
        $ || Jn(3), m += $ & 15;
        var se = J2[re];
        if (re > 3) {
          var U = Uo[re];
          se += Es(n, m) & (1 << U) - 1, m += U;
        }
        if (m > k) {
          f && Jn(0);
          break;
        }
        h && g(x + 131072);
        var ee = x + T;
        if (x < se) {
          var oe = o - se, Ie = Math.min(se, ee);
          for (oe + x < 0 && Jn(3); x < Ie; ++x)
            r[x] = i[oe + x];
        }
        for (; x < ee; ++x)
          r[x] = r[x - se];
      }
    }
    e.l = p, e.p = w, e.b = x, e.f = v, p && (v = 1, e.m = I, e.d = M, e.n = E);
  } while (!v);
  return x != r.length && c ? Jl(r, 0, x) : r.subarray(0, x);
}, kr = function(n, e, r) {
  r <<= e & 7;
  var i = e / 8 | 0;
  n[i] |= r, n[i + 1] |= r >> 8;
}, ka = function(n, e, r) {
  r <<= e & 7;
  var i = e / 8 | 0;
  n[i] |= r, n[i + 1] |= r >> 8, n[i + 2] |= r >> 16;
}, Os = function(n, e) {
  for (var r = [], i = 0; i < n.length; ++i)
    n[i] && r.push({ s: i, f: n[i] });
  var s = r.length, o = r.slice();
  if (!s)
    return { t: Kl, l: 0 };
  if (s == 1) {
    var c = new fn(r[0].s + 1);
    return c[r[0].s] = 1, { t: c, l: 1 };
  }
  r.sort(function(fe, be) {
    return fe.f - be.f;
  }), r.push({ s: -1, f: 25001 });
  var h = r[0], f = r[1], g = 0, v = 1, m = 2;
  for (r[0] = { s: -1, f: h.f + f.f, l: h, r: f }; v != s - 1; )
    h = r[r[g].f < r[m].f ? g++ : m++], f = r[g != v && r[g].f < r[m].f ? g++ : m++], r[v++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var x = o[0].s, i = 1; i < s; ++i)
    o[i].s > x && (x = o[i].s);
  var p = new Pn(x + 1), M = Ys(r[v - 1], p, 0);
  if (M > e) {
    var i = 0, I = 0, E = M - e, k = 1 << E;
    for (o.sort(function(be, Q) {
      return p[Q.s] - p[be.s] || be.f - Q.f;
    }); i < s; ++i) {
      var F = o[i].s;
      if (p[F] > e)
        I += k - (1 << M - p[F]), p[F] = e;
      else
        break;
    }
    for (I >>= E; I > 0; ) {
      var G = o[i].s;
      p[G] < e ? I -= 1 << e - p[G]++ - 1 : ++i;
    }
    for (; i >= 0 && I; --i) {
      var le = o[i].s;
      p[le] == e && (--p[le], ++I);
    }
    M = e;
  }
  return { t: new fn(p), l: M };
}, Ys = function(n, e, r) {
  return n.s == -1 ? Math.max(Ys(n.l, e, r + 1), Ys(n.r, e, r + 1)) : e[n.s] = r;
}, xl = function(n) {
  for (var e = n.length; e && !n[--e]; )
    ;
  for (var r = new Pn(++e), i = 0, s = n[0], o = 1, c = function(f) {
    r[i++] = f;
  }, h = 1; h <= e; ++h)
    if (n[h] == s && h != e)
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
  return { c: r.subarray(0, i), n: e };
}, Pa = function(n, e) {
  for (var r = 0, i = 0; i < e.length; ++i)
    r += n[i] * e[i];
  return r;
}, Zl = function(n, e, r) {
  var i = r.length, s = Oc(e + 2);
  n[s] = i & 255, n[s + 1] = i >> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var o = 0; o < i; ++o)
    n[s + o + 4] = r[o];
  return (s + 4 + i) * 8;
}, Nl = function(n, e, r, i, s, o, c, h, f, g, v) {
  kr(e, v++, r), ++s[256];
  for (var m = Os(s, 15), x = m.t, p = m.l, M = Os(o, 15), I = M.t, E = M.l, k = xl(x), F = k.c, G = k.n, le = xl(I), fe = le.c, be = le.n, Q = new Pn(19), q = 0; q < F.length; ++q)
    ++Q[F[q] & 31];
  for (var q = 0; q < fe.length; ++q)
    ++Q[fe[q] & 31];
  for (var ie = Os(Q, 7), de = ie.t, A = ie.l, _ = 19; _ > 4 && !de[Ws[_ - 1]]; --_)
    ;
  var D = g + 5 << 3, R = Pa(s, Gr) + Pa(o, ja) + c, ce = Pa(s, x) + Pa(o, I) + c + 14 + 3 * _ + Pa(Q, de) + 2 * Q[16] + 3 * Q[17] + 7 * Q[18];
  if (f >= 0 && D <= R && D <= ce)
    return Zl(e, v, n.subarray(f, f + g));
  var ae, he, J, se;
  if (kr(e, v, 1 + (ce < R)), v += 2, ce < R) {
    ae = hr(x, p, 0), he = x, J = hr(I, E, 0), se = I;
    var z = hr(de, A, 0);
    kr(e, v, G - 257), kr(e, v + 5, be - 1), kr(e, v + 10, _ - 4), v += 14;
    for (var q = 0; q < _; ++q)
      kr(e, v + 3 * q, de[Ws[q]]);
    v += 3 * _;
    for (var ue = [F, fe], w = 0; w < 2; ++w)
      for (var C = ue[w], q = 0; q < C.length; ++q) {
        var T = C[q] & 31;
        kr(e, v, z[T]), v += de[T], T > 15 && (kr(e, v, C[q] >> 5 & 127), v += C[q] >> 12);
      }
  } else
    ae = Z2, he = Gr, J = Q2, se = ja;
  for (var q = 0; q < h; ++q) {
    var U = i[q];
    if (U > 255) {
      var T = U >> 18 & 31;
      ka(e, v, ae[T + 257]), v += he[T + 257], T > 7 && (kr(e, v, U >> 23 & 31), v += zo[T]);
      var $ = U & 31;
      ka(e, v, J[$]), v += se[$], $ > 3 && (ka(e, v, U >> 5 & 8191), v += Uo[$]);
    } else
      ka(e, v, ae[U]), v += he[U];
  }
  return ka(e, v, ae[256]), v + he[256];
}, rh = /* @__PURE__ */ new Ec([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Kl = /* @__PURE__ */ new fn(0), ih = function(n, e, r, i, s, o) {
  var c = o.z || n.length, h = new fn(i + c + 5 * (1 + Math.ceil(c / 7e3)) + s), f = h.subarray(i, h.length - s), g = o.l, v = (o.r || 0) & 7;
  if (e) {
    v && (f[0] = o.r >> 3);
    for (var m = rh[e - 1], x = m >> 13, p = m & 8191, M = (1 << r) - 1, I = o.p || new Pn(32768), E = o.h || new Pn(M + 1), k = Math.ceil(r / 3), F = 2 * k, G = function($e) {
      return (n[$e] ^ n[$e + 1] << k ^ n[$e + 2] << F) & M;
    }, le = new Ec(25e3), fe = new Pn(288), be = new Pn(32), Q = 0, q = 0, ie = o.i || 0, de = 0, A = o.w || 0, _ = 0; ie + 2 < c; ++ie) {
      var D = G(ie), R = ie & 32767, ce = E[D];
      if (I[R] = ce, E[D] = R, A <= ie) {
        var ae = c - ie;
        if ((Q > 7e3 || de > 24576) && (ae > 423 || !g)) {
          v = Nl(n, f, 0, le, fe, be, q, de, _, ie - _, v), de = Q = q = 0, _ = ie;
          for (var he = 0; he < 286; ++he)
            fe[he] = 0;
          for (var he = 0; he < 30; ++he)
            be[he] = 0;
        }
        var J = 2, se = 0, z = p, ue = R - ce & 32767;
        if (ae > 2 && D == G(ie - ue))
          for (var w = Math.min(x, ae) - 1, C = Math.min(32767, ie), T = Math.min(258, ae); ue <= C && --z && R != ce; ) {
            if (n[ie + J] == n[ie + J - ue]) {
              for (var U = 0; U < T && n[ie + U] == n[ie + U - ue]; ++U)
                ;
              if (U > J) {
                if (J = U, se = ue, U > w)
                  break;
                for (var $ = Math.min(ue, U - 2), re = 0, he = 0; he < $; ++he) {
                  var ee = ie - ue + he & 32767, oe = I[ee], Ie = ee - oe & 32767;
                  Ie > re && (re = Ie, ce = ee);
                }
              }
            }
            R = ce, ce = I[R], ue += R - ce & 32767;
          }
        if (se) {
          le[de++] = 268435456 | Vs[J] << 18 | wl[se];
          var ke = Vs[J] & 31, Te = wl[se] & 31;
          q += zo[ke] + Uo[Te], ++fe[257 + ke], ++be[Te], A = ie + J, ++Q;
        } else
          le[de++] = n[ie], ++fe[n[ie]];
      }
    }
    for (ie = Math.max(ie, A); ie < c; ++ie)
      le[de++] = n[ie], ++fe[n[ie]];
    v = Nl(n, f, g, le, fe, be, q, de, _, ie - _, v), g || (o.r = v & 7 | f[v / 8 | 0] << 3, v -= 7, o.h = E, o.p = I, o.i = ie, o.w = A);
  } else {
    for (var ie = o.w || 0; ie < c + g; ie += 65535) {
      var Re = ie + 65535;
      Re >= c && (f[v / 8 | 0] = g, Re = c), v = Zl(f, v + 1, n.subarray(ie, Re));
    }
    o.i = c;
  }
  return Jl(h, 0, i + Oc(v) + s);
}, Ql = function() {
  var n = 1, e = 0;
  return {
    p: function(r) {
      for (var i = n, s = e, o = r.length | 0, c = 0; c != o; ) {
        for (var h = Math.min(c + 2655, o); c < h; ++c)
          s += i += r[c];
        i = (i & 65535) + 15 * (i >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      n = i, e = s;
    },
    d: function() {
      return n %= 65521, e %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (e & 255) << 8 | e >> 8;
    }
  };
}, ah = function(n, e, r, i, s) {
  if (!s && (s = { l: 1 }, e.dictionary)) {
    var o = e.dictionary.subarray(-32768), c = new fn(o.length + n.length);
    c.set(o), c.set(n, o.length), n = c, s.w = o.length;
  }
  return ih(n, e.level == null ? 6 : e.level, e.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + e.mem, r, i, s);
}, e1 = function(n, e, r) {
  for (; r; ++e)
    n[e] = r, r >>>= 8;
}, oh = function(n, e) {
  var r = e.level, i = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = i << 6 | (e.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, e.dictionary) {
    var s = Ql();
    s.p(e.dictionary), e1(n, 2, s.d());
  }
}, sh = function(n, e) {
  return ((n[0] & 15) != 8 || n[0] >> 4 > 7 || (n[0] << 8 | n[1]) % 31) && Jn(6, "invalid zlib data"), (n[1] >> 5 & 1) == 1 && Jn(6, "invalid zlib data: " + (n[1] & 32 ? "need" : "unexpected") + " dictionary"), (n[1] >> 3 & 4) + 2;
};
function $s(n, e) {
  e || (e = {});
  var r = Ql();
  r.p(n);
  var i = ah(n, e, e.dictionary ? 6 : 2, 4);
  return oh(i, e), e1(i, i.length - 4, r.d()), i;
}
function ch(n, e) {
  return nh(n.subarray(sh(n), -4), { i: 2 }, e, e);
}
var lh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), uh = 0;
try {
  lh.decode(Kl, { stream: !0 }), uh = 1;
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
var Ze = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function Rs() {
  Ze.console && typeof Ze.console.log == "function" && Ze.console.log.apply(Ze.console, arguments);
}
var St = { log: Rs, warn: function(n) {
  Ze.console && (typeof Ze.console.warn == "function" ? Ze.console.warn.apply(Ze.console, arguments) : Rs.call(null, arguments));
}, error: function(n) {
  Ze.console && (typeof Ze.console.error == "function" ? Ze.console.error.apply(Ze.console, arguments) : Rs(n));
} };
function Ts(n, e, r) {
  var i = new XMLHttpRequest();
  i.open("GET", n), i.responseType = "blob", i.onload = function() {
    oi(i.response, e, r);
  }, i.onerror = function() {
    St.error("could not download file");
  }, i.send();
}
function Ll(n) {
  var e = new XMLHttpRequest();
  e.open("HEAD", n, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function So(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(e);
  }
}
var Ca, Xs, oi = Ze.saveAs || ((typeof window > "u" ? "undefined" : xt(window)) !== "object" || window !== Ze ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, r) {
  var i = Ze.URL || Ze.webkitURL, s = document.createElement("a");
  e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? Ll(s.href) ? Ts(n, e, r) : So(s, s.target = "_blank") : So(s)) : (s.href = i.createObjectURL(n), setTimeout(function() {
    i.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    So(s);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, e, r) {
  if (e = e || n.name || "download", typeof n == "string") if (Ll(n)) Ts(n, e, r);
  else {
    var i = document.createElement("a");
    i.href = n, i.target = "_blank", setTimeout(function() {
      So(i);
    });
  }
  else navigator.msSaveOrOpenBlob(function(s, o) {
    return o === void 0 ? o = { autoBom: !1 } : xt(o) !== "object" && (St.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
  }(n, r), e);
} : function(n, e, r, i) {
  if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof n == "string") return Ts(n, e, r);
  var s = n.type === "application/octet-stream", o = /constructor/i.test(Ze.HTMLElement) || Ze.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((c || s && o) && (typeof FileReader > "u" ? "undefined" : xt(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var v = h.result;
      v = c ? v : v.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = v : location = v, i = null;
    }, h.readAsDataURL(n);
  } else {
    var f = Ze.URL || Ze.webkitURL, g = f.createObjectURL(n);
    i ? i.location = g : location.href = g, i = null, setTimeout(function() {
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
function t1(n) {
  var e;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], i = 0; i < r.length; i++) {
    var s = r[i].re, o = r[i].process, c = s.exec(n);
    c && (e = o(c), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
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
function Bs(n, e) {
  var r = n[0], i = n[1], s = n[2], o = n[3];
  r = sn(r, i, s, o, e[0], 7, -680876936), o = sn(o, r, i, s, e[1], 12, -389564586), s = sn(s, o, r, i, e[2], 17, 606105819), i = sn(i, s, o, r, e[3], 22, -1044525330), r = sn(r, i, s, o, e[4], 7, -176418897), o = sn(o, r, i, s, e[5], 12, 1200080426), s = sn(s, o, r, i, e[6], 17, -1473231341), i = sn(i, s, o, r, e[7], 22, -45705983), r = sn(r, i, s, o, e[8], 7, 1770035416), o = sn(o, r, i, s, e[9], 12, -1958414417), s = sn(s, o, r, i, e[10], 17, -42063), i = sn(i, s, o, r, e[11], 22, -1990404162), r = sn(r, i, s, o, e[12], 7, 1804603682), o = sn(o, r, i, s, e[13], 12, -40341101), s = sn(s, o, r, i, e[14], 17, -1502002290), r = cn(r, i = sn(i, s, o, r, e[15], 22, 1236535329), s, o, e[1], 5, -165796510), o = cn(o, r, i, s, e[6], 9, -1069501632), s = cn(s, o, r, i, e[11], 14, 643717713), i = cn(i, s, o, r, e[0], 20, -373897302), r = cn(r, i, s, o, e[5], 5, -701558691), o = cn(o, r, i, s, e[10], 9, 38016083), s = cn(s, o, r, i, e[15], 14, -660478335), i = cn(i, s, o, r, e[4], 20, -405537848), r = cn(r, i, s, o, e[9], 5, 568446438), o = cn(o, r, i, s, e[14], 9, -1019803690), s = cn(s, o, r, i, e[3], 14, -187363961), i = cn(i, s, o, r, e[8], 20, 1163531501), r = cn(r, i, s, o, e[13], 5, -1444681467), o = cn(o, r, i, s, e[2], 9, -51403784), s = cn(s, o, r, i, e[7], 14, 1735328473), r = ln(r, i = cn(i, s, o, r, e[12], 20, -1926607734), s, o, e[5], 4, -378558), o = ln(o, r, i, s, e[8], 11, -2022574463), s = ln(s, o, r, i, e[11], 16, 1839030562), i = ln(i, s, o, r, e[14], 23, -35309556), r = ln(r, i, s, o, e[1], 4, -1530992060), o = ln(o, r, i, s, e[4], 11, 1272893353), s = ln(s, o, r, i, e[7], 16, -155497632), i = ln(i, s, o, r, e[10], 23, -1094730640), r = ln(r, i, s, o, e[13], 4, 681279174), o = ln(o, r, i, s, e[0], 11, -358537222), s = ln(s, o, r, i, e[3], 16, -722521979), i = ln(i, s, o, r, e[6], 23, 76029189), r = ln(r, i, s, o, e[9], 4, -640364487), o = ln(o, r, i, s, e[12], 11, -421815835), s = ln(s, o, r, i, e[15], 16, 530742520), r = un(r, i = ln(i, s, o, r, e[2], 23, -995338651), s, o, e[0], 6, -198630844), o = un(o, r, i, s, e[7], 10, 1126891415), s = un(s, o, r, i, e[14], 15, -1416354905), i = un(i, s, o, r, e[5], 21, -57434055), r = un(r, i, s, o, e[12], 6, 1700485571), o = un(o, r, i, s, e[3], 10, -1894986606), s = un(s, o, r, i, e[10], 15, -1051523), i = un(i, s, o, r, e[1], 21, -2054922799), r = un(r, i, s, o, e[8], 6, 1873313359), o = un(o, r, i, s, e[15], 10, -30611744), s = un(s, o, r, i, e[6], 15, -1560198380), i = un(i, s, o, r, e[13], 21, 1309151649), r = un(r, i, s, o, e[4], 6, -145523070), o = un(o, r, i, s, e[11], 10, -1120210379), s = un(s, o, r, i, e[2], 15, 718787259), i = un(i, s, o, r, e[9], 21, -343485551), n[0] = Vr(r, n[0]), n[1] = Vr(i, n[1]), n[2] = Vr(s, n[2]), n[3] = Vr(o, n[3]);
}
function Ho(n, e, r, i, s, o) {
  return e = Vr(Vr(e, n), Vr(i, o)), Vr(e << s | e >>> 32 - s, r);
}
function sn(n, e, r, i, s, o, c) {
  return Ho(e & r | ~e & i, n, e, s, o, c);
}
function cn(n, e, r, i, s, o, c) {
  return Ho(e & i | r & ~i, n, e, s, o, c);
}
function ln(n, e, r, i, s, o, c) {
  return Ho(e ^ r ^ i, n, e, s, o, c);
}
function un(n, e, r, i, s, o, c) {
  return Ho(r ^ (e | ~i), n, e, s, o, c);
}
function n1(n) {
  var e, r = n.length, i = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= n.length; e += 64) Bs(i, hh(n.substring(e - 64, e)));
  n = n.substring(e - 64);
  var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < n.length; e++) s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
  if (s[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (Bs(i, s), e = 0; e < 16; e++) s[e] = 0;
  return s[14] = 8 * r, Bs(i, s), i;
}
function hh(n) {
  var e, r = [];
  for (e = 0; e < 64; e += 4) r[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
  return r;
}
Ca = Ze.atob.bind(Ze), Xs = Ze.btoa.bind(Ze);
var Al = "0123456789abcdef".split("");
function fh(n) {
  for (var e = "", r = 0; r < 4; r++) e += Al[n >> 8 * r + 4 & 15] + Al[n >> 8 * r & 15];
  return e;
}
function dh(n) {
  return String.fromCharCode((255 & n) >> 0, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function Js(n) {
  return n1(n).map(dh).join("");
}
var ph = function(n) {
  for (var e = 0; e < n.length; e++) n[e] = fh(n[e]);
  return n.join("");
}(n1("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Vr(n, e) {
  if (ph) {
    var r = (65535 & n) + (65535 & e);
    return (n >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  return n + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function Zs(n, e) {
  var r, i, s, o;
  if (n !== r) {
    for (var c = (s = n, o = 1 + (256 / n.length >> 0), new Array(o + 1).join(s)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var v = h[f];
      g = (g + v + c.charCodeAt(f)) % 256, h[f] = h[g], h[g] = v;
    }
    r = n, i = h;
  } else h = i;
  var m = e.length, x = 0, p = 0, M = "";
  for (f = 0; f < m; f++) p = (p + (v = h[x = (x + 1) % 256])) % 256, h[x] = h[p], h[p] = v, c = h[(h[x] + h[p]) % 256], M += String.fromCharCode(e.charCodeAt(f) ^ c);
  return M;
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
var Sl = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ui(n, e, r, i) {
  this.v = 1, this.r = 2;
  var s = 192;
  n.forEach(function(h) {
    if (Sl.perm !== void 0) throw new Error("Invalid permission: " + h);
    s += Sl[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (e + this.padding).substr(0, 32), c = (r + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, c), this.P = -(1 + (255 ^ s)), this.encryptionKey = Js(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = Zs(this.encryptionKey, this.padding);
}
function Hi(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var e = "", r = n.length, i = 0; i < r; i++) {
    var s = n.charCodeAt(i);
    s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? e += "#" + ("0" + s.toString(16)).slice(-2) : e += n[i];
  }
  return e;
}
function _l(n) {
  if (xt(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(r, i, s) {
    if (s = s || !1, typeof r != "string" || typeof i != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(r) || (e[r] = {});
    var o = Math.random().toString(35);
    return e[r][o] = [i, !!s], o;
  }, this.unsubscribe = function(r) {
    for (var i in e) if (e[i][r]) return delete e[i][r], Object.keys(e[i]).length === 0 && delete e[i], !0;
    return !1;
  }, this.publish = function(r) {
    if (e.hasOwnProperty(r)) {
      var i = Array.prototype.slice.call(arguments, 1), s = [];
      for (var o in e[r]) {
        var c = e[r][o];
        try {
          c[0].apply(n, i);
        } catch (h) {
          Ze.console && St.error("jsPDF PubSub Error", h.message, h);
        }
        c[1] && s.push(o);
      }
      s.length && s.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return e;
  };
}
function Oo(n) {
  if (!(this instanceof Oo)) return new Oo(n);
  var e = "opacity,stroke-opacity".split(",");
  for (var r in n) n.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = n[r]);
  this.id = "", this.objectNumber = -1;
}
function r1(n, e) {
  this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function si(n, e, r, i, s) {
  if (!(this instanceof si)) return new si(n, e, r, i, s);
  this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = r, r1.call(this, i, s);
}
function Wi(n, e, r, i, s) {
  if (!(this instanceof Wi)) return new Wi(n, e, r, i, s);
  this.boundingBox = n, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, r1.call(this, i, s);
}
function Je(n) {
  var e, r = typeof arguments[0] == "string" ? arguments[0] : "p", i = arguments[1], s = arguments[2], o = arguments[3], c = [], h = 1, f = 16, g = "S", v = null;
  xt(n = n || {}) === "object" && (r = n.orientation, i = n.unit || i, s = n.format || s, o = n.compress || n.compressPdf || o, (v = n.encryption || null) !== null && (v.userPassword = v.userPassword || "", v.ownerPassword = v.ownerPassword || "", v.userPermissions = v.userPermissions || []), h = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (f = n.floatPrecision), g = n.defaultPathOperation || "S"), c = n.filters || (o === !0 ? ["FlateEncode"] : c), i = i || "mm", r = ("" + (r || "P")).toLowerCase();
  var m = n.putOnlyUsedFonts || !1, x = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = _l;
  var M = "1.3", I = p.__private__.getPdfVersion = function() {
    return M;
  };
  p.__private__.setPdfVersion = function(l) {
    M = l;
  };
  var E = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return E;
  };
  var k = p.__private__.getPageFormat = function(l) {
    return E[l];
  };
  s = s || "a4";
  var F = { COMPAT: "compat", ADVANCED: "advanced" }, G = F.COMPAT;
  function le() {
    this.saveGraphicsState(), B(new Xe(Ce, 0, 0, -Ce, 0, jr() * Ce).toString() + " cm"), this.setFontSize(this.getFontSize() / Ce), g = "n", G = F.ADVANCED;
  }
  function fe() {
    this.restoreGraphicsState(), g = "S", G = F.COMPAT;
  }
  var be = p.__private__.combineFontStyleAndFontWeight = function(l, y) {
    if (l == "bold" && y == "normal" || l == "bold" && y == 400 || l == "normal" && y == "italic" || l == "bold" && y == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return y && (l = y == 400 || y === "normal" ? l === "italic" ? "italic" : "normal" : y != 700 && y !== "bold" || l !== "normal" ? (y == 700 ? "bold" : y) + "" + l : "bold"), l;
  };
  p.advancedAPI = function(l) {
    var y = G === F.COMPAT;
    return y && le.call(this), typeof l != "function" || (l(this), y && fe.call(this)), this;
  }, p.compatAPI = function(l) {
    var y = G === F.ADVANCED;
    return y && fe.call(this), typeof l != "function" || (l(this), y && le.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return G === F.ADVANCED;
  };
  var Q, q = function(l) {
    if (G !== F.ADVANCED) throw new Error(l + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, ie = p.roundToPrecision = p.__private__.roundToPrecision = function(l, y) {
    var O = e || y;
    if (isNaN(l) || isNaN(O)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return l.toFixed(O).replace(/0+$/, "");
  };
  Q = p.hpf = p.__private__.hpf = typeof f == "number" ? function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(l, f);
  } : f === "smart" ? function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(l, l > -1 && l < 1 ? 16 : 5);
  } : function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(l, 16);
  };
  var de = p.f2 = p.__private__.f2 = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f2");
    return ie(l, 2);
  }, A = p.__private__.f3 = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f3");
    return ie(l, 3);
  }, _ = p.scale = p.__private__.scale = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.scale");
    return G === F.COMPAT ? l * Ce : G === F.ADVANCED ? l : void 0;
  }, D = function(l) {
    return G === F.COMPAT ? jr() - l : G === F.ADVANCED ? l : void 0;
  }, R = function(l) {
    return _(D(l));
  };
  p.__private__.setPrecision = p.setPrecision = function(l) {
    typeof parseInt(l, 10) == "number" && (e = parseInt(l, 10));
  };
  var ce, ae = "00000000000000000000000000000000", he = p.__private__.getFileId = function() {
    return ae;
  }, J = p.__private__.setFileId = function(l) {
    return ae = l !== void 0 && /^[a-fA-F0-9]{32}$/.test(l) ? l.toUpperCase() : ae.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), v !== null && (an = new Ui(v.userPermissions, v.userPassword, v.ownerPassword, ae)), ae;
  };
  p.setFileId = function(l) {
    return J(l), this;
  }, p.getFileId = function() {
    return he();
  };
  var se = p.__private__.convertDateToPDFDate = function(l) {
    var y = l.getTimezoneOffset(), O = y < 0 ? "+" : "-", H = Math.floor(Math.abs(y / 60)), K = Math.abs(y % 60), ge = [O, T(H), "'", T(K), "'"].join("");
    return ["D:", l.getFullYear(), T(l.getMonth() + 1), T(l.getDate()), T(l.getHours()), T(l.getMinutes()), T(l.getSeconds()), ge].join("");
  }, z = p.__private__.convertPDFDateToDate = function(l) {
    var y = parseInt(l.substr(2, 4), 10), O = parseInt(l.substr(6, 2), 10) - 1, H = parseInt(l.substr(8, 2), 10), K = parseInt(l.substr(10, 2), 10), ge = parseInt(l.substr(12, 2), 10), Se = parseInt(l.substr(14, 2), 10);
    return new Date(y, O, H, K, ge, Se, 0);
  }, ue = p.__private__.setCreationDate = function(l) {
    var y;
    if (l === void 0 && (l = /* @__PURE__ */ new Date()), l instanceof Date) y = se(l);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(l)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      y = l;
    }
    return ce = y;
  }, w = p.__private__.getCreationDate = function(l) {
    var y = ce;
    return l === "jsDate" && (y = z(ce)), y;
  };
  p.setCreationDate = function(l) {
    return ue(l), this;
  }, p.getCreationDate = function(l) {
    return w(l);
  };
  var C, T = p.__private__.padd2 = function(l) {
    return ("0" + parseInt(l)).slice(-2);
  }, U = p.__private__.padd2Hex = function(l) {
    return ("00" + (l = l.toString())).substr(l.length);
  }, $ = 0, re = [], ee = [], oe = 0, Ie = [], ke = [], Te = !1, Re = ee, $e = function() {
    $ = 0, oe = 0, ee = [], re = [], Ie = [], vr = Ut(), qn = Ut();
  };
  p.__private__.setCustomOutputDestination = function(l) {
    Te = !0, Re = l;
  };
  var me = function(l) {
    Te || (Re = l);
  };
  p.__private__.resetCustomOutputDestination = function() {
    Te = !1, Re = ee;
  };
  var B = p.__private__.out = function(l) {
    return l = l.toString(), oe += l.length + 1, Re.push(l), Re;
  }, je = p.__private__.write = function(l) {
    return B(arguments.length === 1 ? l.toString() : Array.prototype.join.call(arguments, " "));
  }, Pe = p.__private__.getArrayBuffer = function(l) {
    for (var y = l.length, O = new ArrayBuffer(y), H = new Uint8Array(O); y--; ) H[y] = l.charCodeAt(y);
    return O;
  }, Ne = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return Ne;
  };
  var _e = n.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(l) {
    return _e = G === F.ADVANCED ? l / Ce : l, this;
  };
  var Ee, Me = p.__private__.getFontSize = p.getFontSize = function() {
    return G === F.COMPAT ? _e : _e * Ce;
  }, Ve = n.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(l) {
    return Ve = l, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return Ve;
  };
  var Fe, De = p.__private__.setZoomMode = function(l) {
    var y = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(l)) Ee = l;
    else if (isNaN(l)) {
      if (y.indexOf(l) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + l + '" is not recognized.');
      Ee = l;
    } else Ee = parseInt(l, 10);
  };
  p.__private__.getZoomMode = function() {
    return Ee;
  };
  var qe, ve = p.__private__.setPageMode = function(l) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(l) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + l + '" is not recognized.');
    Fe = l;
  };
  p.__private__.getPageMode = function() {
    return Fe;
  };
  var at = p.__private__.setLayoutMode = function(l) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(l) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + l + '" is not recognized.');
    qe = l;
  };
  p.__private__.getLayoutMode = function() {
    return qe;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(l, y, O) {
    return De(l), at(y), ve(O), this;
  };
  var He = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(l) {
    if (Object.keys(He).indexOf(l) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return He[l];
  }, p.__private__.getDocumentProperties = function() {
    return He;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(l) {
    for (var y in He) He.hasOwnProperty(y) && l[y] && (He[y] = l[y]);
    return this;
  }, p.__private__.setDocumentProperty = function(l, y) {
    if (Object.keys(He).indexOf(l) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return He[l] = y;
  };
  var Ae, Ce, Lt, ct, Gt, ht = {}, pt = {}, rn = [], gt = {}, gr = {}, Pt = {}, Bn = {}, mr = null, Ft = 0, Qe = [], bt = new _l(p), $r = n.hotfixes || [], en = {}, er = {}, tr = [], Xe = function l(y, O, H, K, ge, Se) {
    if (!(this instanceof l)) return new l(y, O, H, K, ge, Se);
    isNaN(y) && (y = 1), isNaN(O) && (O = 0), isNaN(H) && (H = 0), isNaN(K) && (K = 1), isNaN(ge) && (ge = 0), isNaN(Se) && (Se = 0), this._matrix = [y, O, H, K, ge, Se];
  };
  Object.defineProperty(Xe.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(l) {
    this._matrix[0] = l;
  } }), Object.defineProperty(Xe.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(l) {
    this._matrix[1] = l;
  } }), Object.defineProperty(Xe.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(l) {
    this._matrix[2] = l;
  } }), Object.defineProperty(Xe.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(l) {
    this._matrix[3] = l;
  } }), Object.defineProperty(Xe.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(l) {
    this._matrix[4] = l;
  } }), Object.defineProperty(Xe.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(l) {
    this._matrix[5] = l;
  } }), Object.defineProperty(Xe.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(l) {
    this._matrix[0] = l;
  } }), Object.defineProperty(Xe.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(l) {
    this._matrix[1] = l;
  } }), Object.defineProperty(Xe.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(l) {
    this._matrix[2] = l;
  } }), Object.defineProperty(Xe.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(l) {
    this._matrix[3] = l;
  } }), Object.defineProperty(Xe.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(l) {
    this._matrix[4] = l;
  } }), Object.defineProperty(Xe.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(l) {
    this._matrix[5] = l;
  } }), Object.defineProperty(Xe.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Xe.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Xe.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Xe.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Xe.prototype.join = function(l) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(Q).join(l);
  }, Xe.prototype.multiply = function(l) {
    var y = l.sx * this.sx + l.shy * this.shx, O = l.sx * this.shy + l.shy * this.sy, H = l.shx * this.sx + l.sy * this.shx, K = l.shx * this.shy + l.sy * this.sy, ge = l.tx * this.sx + l.ty * this.shx + this.tx, Se = l.tx * this.shy + l.ty * this.sy + this.ty;
    return new Xe(y, O, H, K, ge, Se);
  }, Xe.prototype.decompose = function() {
    var l = this.sx, y = this.shy, O = this.shx, H = this.sy, K = this.tx, ge = this.ty, Se = Math.sqrt(l * l + y * y), ze = (l /= Se) * O + (y /= Se) * H;
    O -= l * ze, H -= y * ze;
    var Ge = Math.sqrt(O * O + H * H);
    return ze /= Ge, l * (H /= Ge) < y * (O /= Ge) && (l = -l, y = -y, ze = -ze, Se = -Se), { scale: new Xe(Se, 0, 0, Ge, 0, 0), translate: new Xe(1, 0, 0, 1, K, ge), rotate: new Xe(l, y, -y, l, 0, 0), skew: new Xe(1, 0, ze, 1, 0, 0) };
  }, Xe.prototype.toString = function(l) {
    return this.join(" ");
  }, Xe.prototype.inversed = function() {
    var l = this.sx, y = this.shy, O = this.shx, H = this.sy, K = this.tx, ge = this.ty, Se = 1 / (l * H - y * O), ze = H * Se, Ge = -y * Se, nt = -O * Se, et = l * Se;
    return new Xe(ze, Ge, nt, et, -ze * K - nt * ge, -Ge * K - et * ge);
  }, Xe.prototype.applyToPoint = function(l) {
    var y = l.x * this.sx + l.y * this.shx + this.tx, O = l.x * this.shy + l.y * this.sy + this.ty;
    return new Ai(y, O);
  }, Xe.prototype.applyToRectangle = function(l) {
    var y = this.applyToPoint(l), O = this.applyToPoint(new Ai(l.x + l.w, l.y + l.h));
    return new aa(y.x, y.y, O.x - y.x, O.y - y.y);
  }, Xe.prototype.clone = function() {
    var l = this.sx, y = this.shy, O = this.shx, H = this.sy, K = this.tx, ge = this.ty;
    return new Xe(l, y, O, H, K, ge);
  }, p.Matrix = Xe;
  var Dn = p.matrixMult = function(l, y) {
    return y.multiply(l);
  }, nr = new Xe(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = nr;
  var mn = function(l, y) {
    if (!gr[l]) {
      var O = (y instanceof si ? "Sh" : "P") + (Object.keys(gt).length + 1).toString(10);
      y.id = O, gr[l] = O, gt[O] = y, bt.publish("addPattern", y);
    }
  };
  p.ShadingPattern = si, p.TilingPattern = Wi, p.addShadingPattern = function(l, y) {
    return q("addShadingPattern()"), mn(l, y), this;
  }, p.beginTilingPattern = function(l) {
    q("beginTilingPattern()"), Za(l.boundingBox[0], l.boundingBox[1], l.boundingBox[2] - l.boundingBox[0], l.boundingBox[3] - l.boundingBox[1], l.matrix);
  }, p.endTilingPattern = function(l, y) {
    q("endTilingPattern()"), y.stream = ke[C].join(`
`), mn(l, y), bt.publish("endTilingPattern", y), tr.pop().restore();
  };
  var Yt = p.__private__.newObject = function() {
    var l = Ut();
    return Ln(l, !0), l;
  }, Ut = p.__private__.newObjectDeferred = function() {
    return $++, re[$] = function() {
      return oe;
    }, $;
  }, Ln = function(l, y) {
    return y = typeof y == "boolean" && y, re[l] = oe, y && B(l + " 0 obj"), l;
  }, hi = p.__private__.newAdditionalObject = function() {
    var l = { objId: Ut(), content: "" };
    return Ie.push(l), l;
  }, vr = Ut(), qn = Ut(), zn = p.__private__.decodeColorString = function(l) {
    var y = l.split(" ");
    if (y.length !== 2 || y[1] !== "g" && y[1] !== "G")
      y.length === 5 && (y[4] === "k" || y[4] === "K") && (y = [(1 - y[0]) * (1 - y[3]), (1 - y[1]) * (1 - y[3]), (1 - y[2]) * (1 - y[3]), "r"]);
    else {
      var O = parseFloat(y[0]);
      y = [O, O, O, "r"];
    }
    for (var H = "#", K = 0; K < 3; K++) H += ("0" + Math.floor(255 * parseFloat(y[K])).toString(16)).slice(-2);
    return H;
  }, Un = p.__private__.encodeColorString = function(l) {
    var y;
    typeof l == "string" && (l = { ch1: l });
    var O = l.ch1, H = l.ch2, K = l.ch3, ge = l.ch4, Se = l.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof O == "string" && O.charAt(0) !== "#") {
      var ze = new t1(O);
      if (ze.ok) O = ze.toHex();
      else if (!/^\d*\.?\d*$/.test(O)) throw new Error('Invalid color "' + O + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof O == "string" && /^#[0-9A-Fa-f]{3}$/.test(O) && (O = "#" + O[1] + O[1] + O[2] + O[2] + O[3] + O[3]), typeof O == "string" && /^#[0-9A-Fa-f]{6}$/.test(O)) {
      var Ge = parseInt(O.substr(1), 16);
      O = Ge >> 16 & 255, H = Ge >> 8 & 255, K = 255 & Ge;
    }
    if (H === void 0 || ge === void 0 && O === H && H === K) if (typeof O == "string") y = O + " " + Se[0];
    else switch (l.precision) {
      case 2:
        y = de(O / 255) + " " + Se[0];
        break;
      case 3:
      default:
        y = A(O / 255) + " " + Se[0];
    }
    else if (ge === void 0 || xt(ge) === "object") {
      if (ge && !isNaN(ge.a) && ge.a === 0) return y = ["1.", "1.", "1.", Se[1]].join(" ");
      if (typeof O == "string") y = [O, H, K, Se[1]].join(" ");
      else switch (l.precision) {
        case 2:
          y = [de(O / 255), de(H / 255), de(K / 255), Se[1]].join(" ");
          break;
        default:
        case 3:
          y = [A(O / 255), A(H / 255), A(K / 255), Se[1]].join(" ");
      }
    } else if (typeof O == "string") y = [O, H, K, ge, Se[2]].join(" ");
    else switch (l.precision) {
      case 2:
        y = [de(O), de(H), de(K), de(ge), Se[2]].join(" ");
        break;
      case 3:
      default:
        y = [A(O), A(H), A(K), A(ge), Se[2]].join(" ");
    }
    return y;
  }, rr = p.__private__.getFilters = function() {
    return c;
  }, In = p.__private__.putStream = function(l) {
    var y = (l = l || {}).data || "", O = l.filters || rr(), H = l.alreadyAppliedFilters || [], K = l.addLength1 || !1, ge = y.length, Se = l.objectId, ze = function(on) {
      return on;
    };
    if (v !== null && Se === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    v !== null && (ze = an.encryptor(Se, 0));
    var Ge = {};
    O === !0 && (O = ["FlateEncode"]);
    var nt = l.additionalKeyValues || [], et = (Ge = Je.API.processDataByFilters !== void 0 ? Je.API.processDataByFilters(y, O) : { data: y, reverseChain: [] }).reverseChain + (Array.isArray(H) ? H.join(" ") : H.toString());
    if (Ge.data.length !== 0 && (nt.push({ key: "Length", value: Ge.data.length }), K === !0 && nt.push({ key: "Length1", value: ge })), et.length != 0) if (et.split("/").length - 1 == 1) nt.push({ key: "Filter", value: et });
    else {
      nt.push({ key: "Filter", value: "[" + et + "]" });
      for (var ft = 0; ft < nt.length; ft += 1) if (nt[ft].key === "DecodeParms") {
        for (var Ct = [], Mt = 0; Mt < Ge.reverseChain.split("/").length - 1; Mt += 1) Ct.push("null");
        Ct.push(nt[ft].value), nt[ft].value = "[" + Ct.join(" ") + "]";
      }
    }
    B("<<");
    for (var Ht = 0; Ht < nt.length; Ht++) B("/" + nt[Ht].key + " " + nt[Ht].value);
    B(">>"), Ge.data.length !== 0 && (B("stream"), B(ze(Ge.data)), B("endstream"));
  }, ir = p.__private__.putPage = function(l) {
    var y = l.number, O = l.data, H = l.objId, K = l.contentsObjId;
    Ln(H, !0), B("<</Type /Page"), B("/Parent " + l.rootDictionaryObjId + " 0 R"), B("/Resources " + l.resourceDictionaryObjId + " 0 R"), B("/MediaBox [" + parseFloat(Q(l.mediaBox.bottomLeftX)) + " " + parseFloat(Q(l.mediaBox.bottomLeftY)) + " " + Q(l.mediaBox.topRightX) + " " + Q(l.mediaBox.topRightY) + "]"), l.cropBox !== null && B("/CropBox [" + Q(l.cropBox.bottomLeftX) + " " + Q(l.cropBox.bottomLeftY) + " " + Q(l.cropBox.topRightX) + " " + Q(l.cropBox.topRightY) + "]"), l.bleedBox !== null && B("/BleedBox [" + Q(l.bleedBox.bottomLeftX) + " " + Q(l.bleedBox.bottomLeftY) + " " + Q(l.bleedBox.topRightX) + " " + Q(l.bleedBox.topRightY) + "]"), l.trimBox !== null && B("/TrimBox [" + Q(l.trimBox.bottomLeftX) + " " + Q(l.trimBox.bottomLeftY) + " " + Q(l.trimBox.topRightX) + " " + Q(l.trimBox.topRightY) + "]"), l.artBox !== null && B("/ArtBox [" + Q(l.artBox.bottomLeftX) + " " + Q(l.artBox.bottomLeftY) + " " + Q(l.artBox.topRightX) + " " + Q(l.artBox.topRightY) + "]"), typeof l.userUnit == "number" && l.userUnit !== 1 && B("/UserUnit " + l.userUnit), bt.publish("putPage", { objId: H, pageContext: Qe[y], pageNumber: y, page: O }), B("/Contents " + K + " 0 R"), B(">>"), B("endobj");
    var ge = O.join(`
`);
    return G === F.ADVANCED && (ge += `
Q`), Ln(K, !0), In({ data: ge, filters: rr(), objectId: K }), B("endobj"), H;
  }, Xr = p.__private__.putPages = function() {
    var l, y, O = [];
    for (l = 1; l <= Ft; l++) Qe[l].objId = Ut(), Qe[l].contentsObjId = Ut();
    for (l = 1; l <= Ft; l++) O.push(ir({ number: l, data: ke[l], objId: Qe[l].objId, contentsObjId: Qe[l].contentsObjId, mediaBox: Qe[l].mediaBox, cropBox: Qe[l].cropBox, bleedBox: Qe[l].bleedBox, trimBox: Qe[l].trimBox, artBox: Qe[l].artBox, userUnit: Qe[l].userUnit, rootDictionaryObjId: vr, resourceDictionaryObjId: qn }));
    Ln(vr, !0), B("<</Type /Pages");
    var H = "/Kids [";
    for (y = 0; y < Ft; y++) H += O[y] + " 0 R ";
    B(H + "]"), B("/Count " + Ft), B(">>"), B("endobj"), bt.publish("postPutPages");
  }, fi = function(l) {
    bt.publish("putFont", { font: l, out: B, newObject: Yt, putStream: In }), l.isAlreadyPutted !== !0 && (l.objectNumber = Yt(), B("<<"), B("/Type /Font"), B("/BaseFont /" + Hi(l.postScriptName)), B("/Subtype /Type1"), typeof l.encoding == "string" && B("/Encoding /" + l.encoding), B("/FirstChar 32"), B("/LastChar 255"), B(">>"), B("endobj"));
  }, di = function() {
    for (var l in ht) ht.hasOwnProperty(l) && (m === !1 || m === !0 && x.hasOwnProperty(l)) && fi(ht[l]);
  }, pi = function(l) {
    l.objectNumber = Yt();
    var y = [];
    y.push({ key: "Type", value: "/XObject" }), y.push({ key: "Subtype", value: "/Form" }), y.push({ key: "BBox", value: "[" + [Q(l.x), Q(l.y), Q(l.x + l.width), Q(l.y + l.height)].join(" ") + "]" }), y.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" });
    var O = l.pages[1].join(`
`);
    In({ data: O, additionalKeyValues: y, objectId: l.objectNumber }), B("endobj");
  }, gi = function() {
    for (var l in en) en.hasOwnProperty(l) && pi(en[l]);
  }, Ma = function(l, y) {
    var O, H = [], K = 1 / (y - 1);
    for (O = 0; O < 1; O += K) H.push(O);
    if (H.push(1), l[0].offset != 0) {
      var ge = { offset: 0, color: l[0].color };
      l.unshift(ge);
    }
    if (l[l.length - 1].offset != 1) {
      var Se = { offset: 1, color: l[l.length - 1].color };
      l.push(Se);
    }
    for (var ze = "", Ge = 0, nt = 0; nt < H.length; nt++) {
      for (O = H[nt]; O > l[Ge + 1].offset; ) Ge++;
      var et = l[Ge].offset, ft = (O - et) / (l[Ge + 1].offset - et), Ct = l[Ge].color, Mt = l[Ge + 1].color;
      ze += U(Math.round((1 - ft) * Ct[0] + ft * Mt[0]).toString(16)) + U(Math.round((1 - ft) * Ct[1] + ft * Mt[1]).toString(16)) + U(Math.round((1 - ft) * Ct[2] + ft * Mt[2]).toString(16));
    }
    return ze.trim();
  }, Wo = function(l, y) {
    y || (y = 21);
    var O = Yt(), H = Ma(l.colors, y), K = [];
    K.push({ key: "FunctionType", value: "0" }), K.push({ key: "Domain", value: "[0.0 1.0]" }), K.push({ key: "Size", value: "[" + y + "]" }), K.push({ key: "BitsPerSample", value: "8" }), K.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), K.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), In({ data: H, additionalKeyValues: K, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: O }), B("endobj"), l.objectNumber = Yt(), B("<< /ShadingType " + l.type), B("/ColorSpace /DeviceRGB");
    var ge = "/Coords [" + Q(parseFloat(l.coords[0])) + " " + Q(parseFloat(l.coords[1])) + " ";
    l.type === 2 ? ge += Q(parseFloat(l.coords[2])) + " " + Q(parseFloat(l.coords[3])) : ge += Q(parseFloat(l.coords[2])) + " " + Q(parseFloat(l.coords[3])) + " " + Q(parseFloat(l.coords[4])) + " " + Q(parseFloat(l.coords[5])), B(ge += "]"), l.matrix && B("/Matrix [" + l.matrix.toString() + "]"), B("/Function " + O + " 0 R"), B("/Extend [true true]"), B(">>"), B("endobj");
  }, Vo = function(l, y) {
    var O = Ut(), H = Yt();
    y.push({ resourcesOid: O, objectOid: H }), l.objectNumber = H;
    var K = [];
    K.push({ key: "Type", value: "/Pattern" }), K.push({ key: "PatternType", value: "1" }), K.push({ key: "PaintType", value: "1" }), K.push({ key: "TilingType", value: "1" }), K.push({ key: "BBox", value: "[" + l.boundingBox.map(Q).join(" ") + "]" }), K.push({ key: "XStep", value: Q(l.xStep) }), K.push({ key: "YStep", value: Q(l.yStep) }), K.push({ key: "Resources", value: O + " 0 R" }), l.matrix && K.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" }), In({ data: l.stream, additionalKeyValues: K, objectId: l.objectNumber }), B("endobj");
  }, mi = function(l) {
    var y;
    for (y in gt) gt.hasOwnProperty(y) && (gt[y] instanceof si ? Wo(gt[y]) : gt[y] instanceof Wi && Vo(gt[y], l));
  }, Ea = function(l) {
    for (var y in l.objectNumber = Yt(), B("<<"), l) switch (y) {
      case "opacity":
        B("/ca " + de(l[y]));
        break;
      case "stroke-opacity":
        B("/CA " + de(l[y]));
    }
    B(">>"), B("endobj");
  }, Go = function() {
    var l;
    for (l in Pt) Pt.hasOwnProperty(l) && Ea(Pt[l]);
  }, Xi = function() {
    for (var l in B("/XObject <<"), en) en.hasOwnProperty(l) && en[l].objectNumber >= 0 && B("/" + l + " " + en[l].objectNumber + " 0 R");
    bt.publish("putXobjectDict"), B(">>");
  }, Yo = function() {
    an.oid = Yt(), B("<<"), B("/Filter /Standard"), B("/V " + an.v), B("/R " + an.r), B("/U <" + an.toHexString(an.U) + ">"), B("/O <" + an.toHexString(an.O) + ">"), B("/P " + an.P), B(">>"), B("endobj");
  }, Oa = function() {
    for (var l in B("/Font <<"), ht) ht.hasOwnProperty(l) && (m === !1 || m === !0 && x.hasOwnProperty(l)) && B("/" + l + " " + ht[l].objectNumber + " 0 R");
    B(">>");
  }, $o = function() {
    if (Object.keys(gt).length > 0) {
      for (var l in B("/Shading <<"), gt) gt.hasOwnProperty(l) && gt[l] instanceof si && gt[l].objectNumber >= 0 && B("/" + l + " " + gt[l].objectNumber + " 0 R");
      bt.publish("putShadingPatternDict"), B(">>");
    }
  }, vi = function(l) {
    if (Object.keys(gt).length > 0) {
      for (var y in B("/Pattern <<"), gt) gt.hasOwnProperty(y) && gt[y] instanceof p.TilingPattern && gt[y].objectNumber >= 0 && gt[y].objectNumber < l && B("/" + y + " " + gt[y].objectNumber + " 0 R");
      bt.publish("putTilingPatternDict"), B(">>");
    }
  }, Xo = function() {
    if (Object.keys(Pt).length > 0) {
      var l;
      for (l in B("/ExtGState <<"), Pt) Pt.hasOwnProperty(l) && Pt[l].objectNumber >= 0 && B("/" + l + " " + Pt[l].objectNumber + " 0 R");
      bt.publish("putGStateDict"), B(">>");
    }
  }, Rt = function(l) {
    Ln(l.resourcesOid, !0), B("<<"), B("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), Oa(), $o(), vi(l.objectOid), Xo(), Xi(), B(">>"), B("endobj");
  }, Ra = function() {
    var l = [];
    di(), Go(), gi(), mi(l), bt.publish("putResources"), l.forEach(Rt), Rt({ resourcesOid: qn, objectOid: Number.MAX_SAFE_INTEGER }), bt.publish("postPutResources");
  }, Ta = function() {
    bt.publish("putAdditionalObjects");
    for (var l = 0; l < Ie.length; l++) {
      var y = Ie[l];
      Ln(y.objId, !0), B(y.content), B("endobj");
    }
    bt.publish("postPutAdditionalObjects");
  }, Ba = function(l) {
    pt[l.fontName] = pt[l.fontName] || {}, pt[l.fontName][l.fontStyle] = l.id;
  }, Ji = function(l, y, O, H, K) {
    var ge = { id: "F" + (Object.keys(ht).length + 1).toString(10), postScriptName: l, fontName: y, fontStyle: O, encoding: H, isStandardFont: K || !1, metadata: {} };
    return bt.publish("addFont", { font: ge, instance: this }), ht[ge.id] = ge, Ba(ge), ge.id;
  }, Jo = function(l) {
    for (var y = 0, O = Ne.length; y < O; y++) {
      var H = Ji.call(this, l[y][0], l[y][1], l[y][2], Ne[y][3], !0);
      m === !1 && (x[H] = !0);
      var K = l[y][0].split("-");
      Ba({ id: H, fontName: K[0], fontStyle: K[1] || "" });
    }
    bt.publish("addFonts", { fonts: ht, dictionary: pt });
  }, Hn = function(l) {
    return l.foo = function() {
      try {
        return l.apply(this, arguments);
      } catch (H) {
        var y = H.stack || "";
        ~y.indexOf(" at ") && (y = y.split(" at ")[1]);
        var O = "Error in function " + y.split(`
`)[0].split("<")[0] + ": " + H.message;
        if (!Ze.console) throw new Error(O);
        Ze.console.error(O, H), Ze.alert && alert(O);
      }
    }, l.foo.bar = l, l.foo;
  }, bi = function(l, y) {
    var O, H, K, ge, Se, ze, Ge, nt, et;
    if (K = (y = y || {}).sourceEncoding || "Unicode", Se = y.outputEncoding, (y.autoencode || Se) && ht[Ae].metadata && ht[Ae].metadata[K] && ht[Ae].metadata[K].encoding && (ge = ht[Ae].metadata[K].encoding, !Se && ht[Ae].encoding && (Se = ht[Ae].encoding), !Se && ge.codePages && (Se = ge.codePages[0]), typeof Se == "string" && (Se = ge[Se]), Se)) {
      for (Ge = !1, ze = [], O = 0, H = l.length; O < H; O++) (nt = Se[l.charCodeAt(O)]) ? ze.push(String.fromCharCode(nt)) : ze.push(l[O]), ze[O].charCodeAt(0) >> 8 && (Ge = !0);
      l = ze.join("");
    }
    for (O = l.length; Ge === void 0 && O !== 0; ) l.charCodeAt(O - 1) >> 8 && (Ge = !0), O--;
    if (!Ge) return l;
    for (ze = y.noBOM ? [] : [254, 255], O = 0, H = l.length; O < H; O++) {
      if ((et = (nt = l.charCodeAt(O)) >> 8) >> 8) throw new Error("Character at position " + O + " of string '" + l + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      ze.push(et), ze.push(nt - (et << 8));
    }
    return String.fromCharCode.apply(void 0, ze);
  }, vn = p.__private__.pdfEscape = p.pdfEscape = function(l, y) {
    return bi(l, y).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Zi = p.__private__.beginPage = function(l) {
    ke[++Ft] = [], Qe[Ft] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(l[0]), topRightY: Number(l[1]) } }, qa(Ft), me(ke[C]);
  }, Da = function(l, y) {
    var O, H, K;
    switch (r = y || r, typeof l == "string" && (O = k(l.toLowerCase()), Array.isArray(O) && (H = O[0], K = O[1])), Array.isArray(l) && (H = l[0] * Ce, K = l[1] * Ce), isNaN(H) && (H = s[0], K = s[1]), (H > 14400 || K > 14400) && (St.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), H = Math.min(14400, H), K = Math.min(14400, K)), s = [H, K], r.substr(0, 1)) {
      case "l":
        K > H && (s = [K, H]);
        break;
      case "p":
        H > K && (s = [K, H]);
    }
    Zi(s), Ga(ta), B(Wn), ra !== 0 && B(ra + " J"), ia !== 0 && B(ia + " j"), bt.publish("addPage", { pageNumber: Ft });
  }, Zo = function(l) {
    l > 0 && l <= Ft && (ke.splice(l, 1), Qe.splice(l, 1), Ft--, C > Ft && (C = Ft), this.setPage(C));
  }, qa = function(l) {
    l > 0 && l <= Ft && (C = l);
  }, Ko = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return ke.length - 1;
  }, za = function(l, y, O) {
    var H, K = void 0;
    return O = O || {}, l = l !== void 0 ? l : ht[Ae].fontName, y = y !== void 0 ? y : ht[Ae].fontStyle, H = l.toLowerCase(), pt[H] !== void 0 && pt[H][y] !== void 0 ? K = pt[H][y] : pt[l] !== void 0 && pt[l][y] !== void 0 ? K = pt[l][y] : O.disableWarning === !1 && St.warn("Unable to look up font label for font '" + l + "', '" + y + "'. Refer to getFontList() for available fonts."), K || O.noFallback || (K = pt.times[y]) == null && (K = pt.times.normal), K;
  }, Qo = p.__private__.putInfo = function() {
    var l = Yt(), y = function(H) {
      return H;
    };
    for (var O in v !== null && (y = an.encryptor(l, 0)), B("<<"), B("/Producer (" + vn(y("jsPDF " + Je.version)) + ")"), He) He.hasOwnProperty(O) && He[O] && B("/" + O.substr(0, 1).toUpperCase() + O.substr(1) + " (" + vn(y(He[O])) + ")");
    B("/CreationDate (" + vn(y(ce)) + ")"), B(">>"), B("endobj");
  }, Ki = p.__private__.putCatalog = function(l) {
    var y = (l = l || {}).rootDictionaryObjId || vr;
    switch (Yt(), B("<<"), B("/Type /Catalog"), B("/Pages " + y + " 0 R"), Ee || (Ee = "fullwidth"), Ee) {
      case "fullwidth":
        B("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        B("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        B("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        B("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var O = "" + Ee;
        O.substr(O.length - 1) === "%" && (Ee = parseInt(Ee) / 100), typeof Ee == "number" && B("/OpenAction [3 0 R /XYZ null null " + de(Ee) + "]");
    }
    switch (qe || (qe = "continuous"), qe) {
      case "continuous":
        B("/PageLayout /OneColumn");
        break;
      case "single":
        B("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        B("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        B("/PageLayout /TwoColumnRight");
    }
    Fe && B("/PageMode /" + Fe), bt.publish("putCatalog"), B(">>"), B("endobj");
  }, es = p.__private__.putTrailer = function() {
    B("trailer"), B("<<"), B("/Size " + ($ + 1)), B("/Root " + $ + " 0 R"), B("/Info " + ($ - 1) + " 0 R"), v !== null && B("/Encrypt " + an.oid + " 0 R"), B("/ID [ <" + ae + "> <" + ae + "> ]"), B(">>");
  }, ts = p.__private__.putHeader = function() {
    B("%PDF-" + M), B("%ºß¬à");
  }, ns = p.__private__.putXRef = function() {
    var l = "0000000000";
    B("xref"), B("0 " + ($ + 1)), B("0000000000 65535 f ");
    for (var y = 1; y <= $; y++)
      typeof re[y] == "function" ? B((l + re[y]()).slice(-10) + " 00000 n ") : re[y] !== void 0 ? B((l + re[y]).slice(-10) + " 00000 n ") : B("0000000000 00000 n ");
  }, br = p.__private__.buildDocument = function() {
    $e(), me(ee), bt.publish("buildDocument"), ts(), Xr(), Ta(), Ra(), v !== null && Yo(), Qo(), Ki();
    var l = oe;
    return ns(), es(), B("startxref"), B("" + l), B("%%EOF"), me(ke[C]), ee.join(`
`);
  }, yi = p.__private__.getBlob = function(l) {
    return new Blob([Pe(l)], { type: "application/pdf" });
  }, wi = p.output = p.__private__.output = Hn(function(l, y) {
    switch (typeof (y = y || {}) == "string" ? y = { filename: y } : y.filename = y.filename || "generated.pdf", l) {
      case void 0:
        return br();
      case "save":
        p.save(y.filename);
        break;
      case "arraybuffer":
        return Pe(br());
      case "blob":
        return yi(br());
      case "bloburi":
      case "bloburl":
        if (Ze.URL !== void 0 && typeof Ze.URL.createObjectURL == "function") return Ze.URL && Ze.URL.createObjectURL(yi(br())) || void 0;
        St.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var O = "", H = br();
        try {
          O = Xs(H);
        } catch {
          O = Xs(unescape(encodeURIComponent(H)));
        }
        return "data:application/pdf;filename=" + y.filename + ";base64," + O;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Ze) === "[object Window]") {
          var K = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", ge = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          y.pdfObjectUrl && (K = y.pdfObjectUrl, ge = "");
          var Se = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + K + '"' + ge + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(y) + ");<\/script></body></html>", ze = Ze.open();
          return ze !== null && ze.document.write(Se), ze;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Ze) === "[object Window]") {
          var Ge = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (y.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + y.filename + '" width="500px" height="400px" /></body></html>', nt = Ze.open();
          if (nt !== null) {
            nt.document.write(Ge);
            var et = this;
            nt.document.documentElement.querySelector("#pdfViewer").onload = function() {
              nt.document.title = y.filename, nt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(et.output("bloburl"));
            };
          }
          return nt;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Ze) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var ft = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", y) + '"></iframe></body></html>', Ct = Ze.open();
        if (Ct !== null && (Ct.document.write(ft), Ct.document.title = y.filename), Ct || typeof safari > "u") return Ct;
        break;
      case "datauri":
      case "dataurl":
        return Ze.document.location.href = this.output("datauristring", y);
      default:
        return null;
    }
  }), Ua = function(l) {
    return Array.isArray($r) === !0 && $r.indexOf(l) > -1;
  };
  switch (i) {
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
      Ce = Ua("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      Ce = 12;
      break;
    case "ex":
      Ce = 6;
      break;
    default:
      if (typeof i != "number") throw new Error("Invalid unit: " + i);
      Ce = i;
  }
  var an = null;
  ue(), J();
  var rs = function(l) {
    return v !== null ? an.encryptor(l, 0) : function(y) {
      return y;
    };
  }, Ha = p.__private__.getPageInfo = p.getPageInfo = function(l) {
    if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Qe[l].objId, pageNumber: l, pageContext: Qe[l] };
  }, Ke = p.__private__.getPageInfoByObjId = function(l) {
    if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var y in Qe) if (Qe[y].objId === l) break;
    return Ha(y);
  }, is = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Qe[C].objId, pageNumber: C, pageContext: Qe[C] };
  };
  p.addPage = function() {
    return Da.apply(this, arguments), this;
  }, p.setPage = function() {
    return qa.apply(this, arguments), me.call(this, ke[C]), this;
  }, p.insertPage = function(l) {
    return this.addPage(), this.movePage(C, l), this;
  }, p.movePage = function(l, y) {
    var O, H;
    if (l > y) {
      O = ke[l], H = Qe[l];
      for (var K = l; K > y; K--) ke[K] = ke[K - 1], Qe[K] = Qe[K - 1];
      ke[y] = O, Qe[y] = H, this.setPage(y);
    } else if (l < y) {
      O = ke[l], H = Qe[l];
      for (var ge = l; ge < y; ge++) ke[ge] = ke[ge + 1], Qe[ge] = Qe[ge + 1];
      ke[y] = O, Qe[y] = H, this.setPage(y);
    }
    return this;
  }, p.deletePage = function() {
    return Zo.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(l, y, O, H, K) {
    var ge, Se, ze, Ge, nt, et, ft, Ct, Mt, Ht = (H = H || {}).scope || this;
    if (typeof l == "number" && typeof y == "number" && (typeof O == "string" || Array.isArray(O))) {
      var on = O;
      O = y, y = l, l = on;
    }
    if (arguments[3] instanceof Xe ? (q("The transform parameter of text() with a Matrix value"), Mt = K) : (ze = arguments[4], Ge = arguments[5], xt(ft = arguments[3]) === "object" && ft !== null || (typeof ze == "string" && (Ge = ze, ze = null), typeof ft == "string" && (Ge = ft, ft = null), typeof ft == "number" && (ze = ft, ft = null), H = { flags: ft, angle: ze, align: Ge })), isNaN(y) || isNaN(O) || l == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (l.length === 0) return Ht;
    var Jt = "", Vn = !1, An = typeof H.lineHeightFactor == "number" ? H.lineHeightFactor : Zr, sr = Ht.internal.scaleFactor;
    function Ka(_t) {
      return _t = _t.split("	").join(Array(H.TabLen || 9).join(" ")), vn(_t, ft);
    }
    function la(_t) {
      for (var kt, Bt = _t.concat(), $t = [], Lr = Bt.length; Lr--; ) typeof (kt = Bt.shift()) == "string" ? $t.push(kt) : Array.isArray(_t) && (kt.length === 1 || kt[1] === void 0 && kt[2] === void 0) ? $t.push(kt[0]) : $t.push([kt[0], kt[1], kt[2]]);
      return $t;
    }
    function ua(_t, kt) {
      var Bt;
      if (typeof _t == "string") Bt = kt(_t)[0];
      else if (Array.isArray(_t)) {
        for (var $t, Lr, ba = _t.concat(), Oi = [], ro = ba.length; ro--; ) typeof ($t = ba.shift()) == "string" ? Oi.push(kt($t)[0]) : Array.isArray($t) && typeof $t[0] == "string" && (Lr = kt($t[0], $t[1], $t[2]), Oi.push([Lr[0], Lr[1], Lr[2]]));
        Bt = Oi;
      }
      return Bt;
    }
    var _i = !1, ha = !0;
    if (typeof l == "string") _i = !0;
    else if (Array.isArray(l)) {
      var fa = l.concat();
      Se = [];
      for (var ki, tn = fa.length; tn--; ) (typeof (ki = fa.shift()) != "string" || Array.isArray(ki) && typeof ki[0] != "string") && (ha = !1);
      _i = ha;
    }
    if (_i === !1) throw new Error('Type of text must be string or Array. "' + l + '" is not recognized.');
    typeof l == "string" && (l = l.match(/[\r?\n]/) ? l.split(/\r\n|\r|\n/g) : [l]);
    var Pi = _e / Ht.internal.scaleFactor, Ii = Pi * (An - 1);
    switch (H.baseline) {
      case "bottom":
        O -= Ii;
        break;
      case "top":
        O += Pi - Ii;
        break;
      case "hanging":
        O += Pi - 2 * Ii;
        break;
      case "middle":
        O += Pi / 2 - Ii;
    }
    if ((et = H.maxWidth || 0) > 0 && (typeof l == "string" ? l = Ht.splitTextToSize(l, et) : Object.prototype.toString.call(l) === "[object Array]" && (l = l.reduce(function(_t, kt) {
      return _t.concat(Ht.splitTextToSize(kt, et));
    }, []))), ge = { text: l, x: y, y: O, options: H, mutex: { pdfEscape: vn, activeFontKey: Ae, fonts: ht, activeFontSize: _e } }, bt.publish("preProcessText", ge), l = ge.text, ze = (H = ge.options).angle, !(Mt instanceof Xe) && ze && typeof ze == "number") {
      ze *= Math.PI / 180, H.rotationDirection === 0 && (ze = -ze), G === F.ADVANCED && (ze = -ze);
      var Ci = Math.cos(ze), da = Math.sin(ze);
      Mt = new Xe(Ci, da, -da, Ci, 0, 0);
    } else ze && ze instanceof Xe && (Mt = ze);
    G !== F.ADVANCED || Mt || (Mt = nr), (nt = H.charSpace || Li) !== void 0 && (Jt += Q(_(nt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ct = H.horizontalScale) !== void 0 && (Jt += Q(100 * Ct) + ` Tz
`), H.lang;
    var bn = -1, ps = H.renderingMode !== void 0 ? H.renderingMode : H.stroke, pa = Ht.internal.getCurrentPageInfo().pageContext;
    switch (ps) {
      case 0:
      case !1:
      case "fill":
        bn = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        bn = 1;
        break;
      case 2:
      case "fillThenStroke":
        bn = 2;
        break;
      case 3:
      case "invisible":
        bn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        bn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        bn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        bn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        bn = 7;
    }
    var Qa = pa.usedRenderingMode !== void 0 ? pa.usedRenderingMode : -1;
    bn !== -1 ? Jt += bn + ` Tr
` : Qa !== -1 && (Jt += `0 Tr
`), bn !== -1 && (pa.usedRenderingMode = bn), Ge = H.align || "left";
    var Cn, ji = _e * An, eo = Ht.internal.pageSize.getWidth(), to = ht[Ae];
    nt = H.charSpace || Li, et = H.maxWidth || 0, ft = Object.assign({ autoencode: !0, noBOM: !0 }, H.flags);
    var Fr = [], ei = function(_t) {
      return Ht.getStringUnitWidth(_t, { font: to, charSpace: nt, fontSize: _e, doKerning: !1 }) * _e / sr;
    };
    if (Object.prototype.toString.call(l) === "[object Array]") {
      var yn;
      Se = la(l), Ge !== "left" && (Cn = Se.map(ei));
      var dn, Mr = 0;
      if (Ge === "right") {
        y -= Cn[0], l = [], tn = Se.length;
        for (var wr = 0; wr < tn; wr++) wr === 0 ? (dn = or(y), yn = yr(O)) : (dn = _(Mr - Cn[wr]), yn = -ji), l.push([Se[wr], dn, yn]), Mr = Cn[wr];
      } else if (Ge === "center") {
        y -= Cn[0] / 2, l = [], tn = Se.length;
        for (var xr = 0; xr < tn; xr++) xr === 0 ? (dn = or(y), yn = yr(O)) : (dn = _((Mr - Cn[xr]) / 2), yn = -ji), l.push([Se[xr], dn, yn]), Mr = Cn[xr];
      } else if (Ge === "left") {
        l = [], tn = Se.length;
        for (var Fi = 0; Fi < tn; Fi++) l.push(Se[Fi]);
      } else if (Ge === "justify" && to.encoding === "Identity-H") {
        l = [], tn = Se.length, et = et !== 0 ? et : eo;
        for (var Nr = 0, Tt = 0; Tt < tn; Tt++) if (yn = Tt === 0 ? yr(O) : -ji, dn = Tt === 0 ? or(y) : Nr, Tt < tn - 1) {
          var ga = _((et - Cn[Tt]) / (Se[Tt].split(" ").length - 1)), pn = Se[Tt].split(" ");
          l.push([pn[0] + " ", dn, yn]), Nr = 0;
          for (var jn = 1; jn < pn.length; jn++) {
            var Mi = (ei(pn[jn - 1] + " " + pn[jn]) - ei(pn[jn])) * sr + ga;
            jn == pn.length - 1 ? l.push([pn[jn], Mi, 0]) : l.push([pn[jn] + " ", Mi, 0]), Nr -= Mi;
          }
        } else l.push([Se[Tt], dn, yn]);
        l.push(["", Nr, 0]);
      } else {
        if (Ge !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (l = [], tn = Se.length, et = et !== 0 ? et : eo, Tt = 0; Tt < tn; Tt++) yn = Tt === 0 ? yr(O) : -ji, dn = Tt === 0 ? or(y) : 0, Tt < tn - 1 ? Fr.push(Q(_((et - Cn[Tt]) / (Se[Tt].split(" ").length - 1)))) : Fr.push(0), l.push([Se[Tt], dn, yn]);
      }
    }
    var no = typeof H.R2L == "boolean" ? H.R2L : Ve;
    no === !0 && (l = ua(l, function(_t, kt, Bt) {
      return [_t.split("").reverse().join(""), kt, Bt];
    })), ge = { text: l, x: y, y: O, options: H, mutex: { pdfEscape: vn, activeFontKey: Ae, fonts: ht, activeFontSize: _e } }, bt.publish("postProcessText", ge), l = ge.text, Vn = ge.mutex.isHex || !1;
    var ma = ht[Ae].encoding;
    ma !== "WinAnsiEncoding" && ma !== "StandardEncoding" || (l = ua(l, function(_t, kt, Bt) {
      return [Ka(_t), kt, Bt];
    })), Se = la(l), l = [];
    for (var ti, ni, Er, ri = 0, Ei = 1, ii = Array.isArray(Se[0]) ? Ei : ri, Or = "", va = function(_t, kt, Bt) {
      var $t = "";
      return Bt instanceof Xe ? (Bt = typeof H.angle == "number" ? Dn(Bt, new Xe(1, 0, 0, 1, _t, kt)) : Dn(new Xe(1, 0, 0, 1, _t, kt), Bt), G === F.ADVANCED && (Bt = Dn(new Xe(1, 0, 0, -1, 0, 0), Bt)), $t = Bt.join(" ") + ` Tm
`) : $t = Q(_t) + " " + Q(kt) + ` Td
`, $t;
    }, Fn = 0; Fn < Se.length; Fn++) {
      switch (Or = "", ii) {
        case Ei:
          Er = (Vn ? "<" : "(") + Se[Fn][0] + (Vn ? ">" : ")"), ti = parseFloat(Se[Fn][1]), ni = parseFloat(Se[Fn][2]);
          break;
        case ri:
          Er = (Vn ? "<" : "(") + Se[Fn] + (Vn ? ">" : ")"), ti = or(y), ni = yr(O);
      }
      Fr !== void 0 && Fr[Fn] !== void 0 && (Or = Fr[Fn] + ` Tw
`), Fn === 0 ? l.push(Or + va(ti, ni, Mt) + Er) : ii === ri ? l.push(Or + Er) : ii === Ei && l.push(Or + va(ti, ni, Mt) + Er);
    }
    l = ii === ri ? l.join(` Tj
T* `) : l.join(` Tj
`), l += ` Tj
`;
    var Mn = `BT
/`;
    return Mn += Ae + " " + _e + ` Tf
`, Mn += Q(_e * An) + ` TL
`, Mn += Kr + `
`, Mn += Jt, Mn += l, B(Mn += "ET"), x[Ae] = !0, Ht;
  };
  var as = p.__private__.clip = p.clip = function(l) {
    return B(l === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return as("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return B("n"), this;
  };
  var ar = p.__private__.isValidStyle = function(l) {
    var y = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(l) !== -1 && (y = !0), y;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(l) {
    return ar(l) && (g = l), this;
  };
  var Wa = p.__private__.getStyle = p.getStyle = function(l) {
    var y = g;
    switch (l) {
      case "D":
      case "S":
        y = "S";
        break;
      case "F":
        y = "f";
        break;
      case "FD":
      case "DF":
        y = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        y = l;
    }
    return y;
  }, Va = p.close = function() {
    return B("h"), this;
  };
  p.stroke = function() {
    return B("S"), this;
  }, p.fill = function(l) {
    return xi("f", l), this;
  }, p.fillEvenOdd = function(l) {
    return xi("f*", l), this;
  }, p.fillStroke = function(l) {
    return xi("B", l), this;
  }, p.fillStrokeEvenOdd = function(l) {
    return xi("B*", l), this;
  };
  var xi = function(l, y) {
    xt(y) === "object" ? ss(y, l) : B(l);
  }, Qi = function(l) {
    l === null || G === F.ADVANCED && l === void 0 || (l = Wa(l), B(l));
  };
  function os(l, y, O, H, K) {
    var ge = new Wi(y || this.boundingBox, O || this.xStep, H || this.yStep, this.gState, K || this.matrix);
    ge.stream = this.stream;
    var Se = l + "$$" + this.cloneIndex++ + "$$";
    return mn(Se, ge), ge;
  }
  var ss = function(l, y) {
    var O = gr[l.key], H = gt[O];
    if (H instanceof si) B("q"), B(cs(y)), H.gState && p.setGState(H.gState), B(l.matrix.toString() + " cm"), B("/" + O + " sh"), B("Q");
    else if (H instanceof Wi) {
      var K = new Xe(1, 0, 0, -1, 0, jr());
      l.matrix && (K = K.multiply(l.matrix || nr), O = os.call(H, l.key, l.boundingBox, l.xStep, l.yStep, K).id), B("q"), B("/Pattern cs"), B("/" + O + " scn"), H.gState && p.setGState(H.gState), B(y), B("Q");
    }
  }, cs = function(l) {
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
  }, ea = p.moveTo = function(l, y) {
    return B(Q(_(l)) + " " + Q(R(y)) + " m"), this;
  }, Jr = p.lineTo = function(l, y) {
    return B(Q(_(l)) + " " + Q(R(y)) + " l"), this;
  }, Ir = p.curveTo = function(l, y, O, H, K, ge) {
    return B([Q(_(l)), Q(R(y)), Q(_(O)), Q(R(H)), Q(_(K)), Q(R(ge)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(l, y, O, H, K) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || isNaN(H) || !ar(K)) throw new Error("Invalid arguments passed to jsPDF.line");
    return G === F.COMPAT ? this.lines([[O - l, H - y]], l, y, [1, 1], K || "S") : this.lines([[O - l, H - y]], l, y, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(l, y, O, H, K, ge) {
    var Se, ze, Ge, nt, et, ft, Ct, Mt, Ht, on, Jt, Vn;
    if (typeof l == "number" && (Vn = O, O = y, y = l, l = Vn), H = H || [1, 1], ge = ge || !1, isNaN(y) || isNaN(O) || !Array.isArray(l) || !Array.isArray(H) || !ar(K) || typeof ge != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (ea(y, O), Se = H[0], ze = H[1], nt = l.length, on = y, Jt = O, Ge = 0; Ge < nt; Ge++) (et = l[Ge]).length === 2 ? (on = et[0] * Se + on, Jt = et[1] * ze + Jt, Jr(on, Jt)) : (ft = et[0] * Se + on, Ct = et[1] * ze + Jt, Mt = et[2] * Se + on, Ht = et[3] * ze + Jt, on = et[4] * Se + on, Jt = et[5] * ze + Jt, Ir(ft, Ct, Mt, Ht, on, Jt));
    return ge && Va(), Qi(K), this;
  }, p.path = function(l) {
    for (var y = 0; y < l.length; y++) {
      var O = l[y], H = O.c;
      switch (O.op) {
        case "m":
          ea(H[0], H[1]);
          break;
        case "l":
          Jr(H[0], H[1]);
          break;
        case "c":
          Ir.apply(this, H);
          break;
        case "h":
          Va();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(l, y, O, H, K) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || isNaN(H) || !ar(K)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return G === F.COMPAT && (H = -H), B([Q(_(l)), Q(R(y)), Q(_(O)), Q(_(H)), "re"].join(" ")), Qi(K), this;
  }, p.__private__.triangle = p.triangle = function(l, y, O, H, K, ge, Se) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || isNaN(H) || isNaN(K) || isNaN(ge) || !ar(Se)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[O - l, H - y], [K - O, ge - H], [l - K, y - ge]], l, y, [1, 1], Se, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(l, y, O, H, K, ge, Se) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || isNaN(H) || isNaN(K) || isNaN(ge) || !ar(Se)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var ze = 4 / 3 * (Math.SQRT2 - 1);
    return K = Math.min(K, 0.5 * O), ge = Math.min(ge, 0.5 * H), this.lines([[O - 2 * K, 0], [K * ze, 0, K, ge - ge * ze, K, ge], [0, H - 2 * ge], [0, ge * ze, -K * ze, ge, -K, ge], [2 * K - O, 0], [-K * ze, 0, -K, -ge * ze, -K, -ge], [0, 2 * ge - H], [0, -ge * ze, K * ze, -ge, K, -ge]], l + K, y, [1, 1], Se, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(l, y, O, H, K) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || isNaN(H) || !ar(K)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var ge = 4 / 3 * (Math.SQRT2 - 1) * O, Se = 4 / 3 * (Math.SQRT2 - 1) * H;
    return ea(l + O, y), Ir(l + O, y - Se, l + ge, y - H, l, y - H), Ir(l - ge, y - H, l - O, y - Se, l - O, y), Ir(l - O, y + Se, l - ge, y + H, l, y + H), Ir(l + ge, y + H, l + O, y + Se, l + O, y), Qi(K), this;
  }, p.__private__.circle = p.circle = function(l, y, O, H) {
    if (isNaN(l) || isNaN(y) || isNaN(O) || !ar(H)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(l, y, O, O, H);
  }, p.setFont = function(l, y, O) {
    return O && (y = be(y, O)), Ae = za(l, y, { disableWarning: !1 }), this;
  };
  var ls = p.__private__.getFont = p.getFont = function() {
    return ht[za.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var l, y, O = {};
    for (l in pt) if (pt.hasOwnProperty(l)) for (y in O[l] = [], pt[l]) pt[l].hasOwnProperty(y) && O[l].push(y);
    return O;
  }, p.addFont = function(l, y, O, H, K) {
    var ge = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && ge.indexOf(arguments[3]) !== -1 ? K = arguments[3] : arguments[3] && ge.indexOf(arguments[3]) == -1 && (O = be(O, H)), K = K || "Identity-H", Ji.call(this, l, y, O, K);
  };
  var Zr, ta = n.lineWidth || 0.200025, Ni = p.__private__.getLineWidth = p.getLineWidth = function() {
    return ta;
  }, Ga = p.__private__.setLineWidth = p.setLineWidth = function(l) {
    return ta = l, B(Q(_(l)) + " w"), this;
  };
  p.__private__.setLineDash = Je.API.setLineDash = Je.API.setLineDashPattern = function(l, y) {
    if (l = l || [], y = y || 0, isNaN(y) || !Array.isArray(l)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return l = l.map(function(O) {
      return Q(_(O));
    }).join(" "), y = Q(_(y)), B("[" + l + "] " + y + " d"), this;
  };
  var Ya = p.__private__.getLineHeight = p.getLineHeight = function() {
    return _e * Zr;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return _e * Zr;
  };
  var $a = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(l) {
    return typeof (l = l || 1.15) == "number" && (Zr = l), this;
  }, Xa = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Zr;
  };
  $a(n.lineHeight);
  var or = p.__private__.getHorizontalCoordinate = function(l) {
    return _(l);
  }, yr = p.__private__.getVerticalCoordinate = function(l) {
    return G === F.ADVANCED ? l : Qe[C].mediaBox.topRightY - Qe[C].mediaBox.bottomLeftY - _(l);
  }, us = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(l) {
    return Q(or(l));
  }, Cr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(l) {
    return Q(yr(l));
  }, Wn = n.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return zn(Wn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(l, y, O, H) {
    return Wn = Un({ ch1: l, ch2: y, ch3: O, ch4: H, pdfColorType: "draw", precision: 2 }), B(Wn), this;
  };
  var na = n.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return zn(na);
  }, p.__private__.setFillColor = p.setFillColor = function(l, y, O, H) {
    return na = Un({ ch1: l, ch2: y, ch3: O, ch4: H, pdfColorType: "fill", precision: 2 }), B(na), this;
  };
  var Kr = n.textColor || "0 g", hs = p.__private__.getTextColor = p.getTextColor = function() {
    return zn(Kr);
  };
  p.__private__.setTextColor = p.setTextColor = function(l, y, O, H) {
    return Kr = Un({ ch1: l, ch2: y, ch3: O, ch4: H, pdfColorType: "text", precision: 3 }), this;
  };
  var Li = n.charSpace, fs = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(Li || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(l) {
    if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return Li = l, this;
  };
  var ra = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(l) {
    var y = p.CapJoinStyles[l];
    if (y === void 0) throw new Error("Line cap style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ra = y, B(y + " J"), this;
  };
  var ia = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(l) {
    var y = p.CapJoinStyles[l];
    if (y === void 0) throw new Error("Line join style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ia = y, B(y + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(l) {
    if (l = l || 0, isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return B(Q(_(l)) + " M"), this;
  }, p.GState = Oo, p.setGState = function(l) {
    (l = typeof l == "string" ? Pt[Bn[l]] : Ja(null, l)).equals(mr) || (B("/" + l.id + " gs"), mr = l);
  };
  var Ja = function(l, y) {
    if (!l || !Bn[l]) {
      var O = !1;
      for (var H in Pt) if (Pt.hasOwnProperty(H) && Pt[H].equals(y)) {
        O = !0;
        break;
      }
      if (O) y = Pt[H];
      else {
        var K = "GS" + (Object.keys(Pt).length + 1).toString(10);
        Pt[K] = y, y.id = K;
      }
      return l && (Bn[l] = y.id), bt.publish("addGState", y), y;
    }
  };
  p.addGState = function(l, y) {
    return Ja(l, y), this;
  }, p.saveGraphicsState = function() {
    return B("q"), rn.push({ key: Ae, size: _e, color: Kr }), this;
  }, p.restoreGraphicsState = function() {
    B("Q");
    var l = rn.pop();
    return Ae = l.key, _e = l.size, Kr = l.color, mr = null, this;
  }, p.setCurrentTransformationMatrix = function(l) {
    return B(l.toString() + " cm"), this;
  }, p.comment = function(l) {
    return B("#" + l), this;
  };
  var Ai = function(l, y) {
    var O = l || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return O;
    }, set: function(ge) {
      isNaN(ge) || (O = parseFloat(ge));
    } });
    var H = y || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return H;
    }, set: function(ge) {
      isNaN(ge) || (H = parseFloat(ge));
    } });
    var K = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return K;
    }, set: function(ge) {
      K = ge.toString();
    } }), this;
  }, aa = function(l, y, O, H) {
    Ai.call(this, l, y), this.type = "rect";
    var K = O || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return K;
    }, set: function(Se) {
      isNaN(Se) || (K = parseFloat(Se));
    } });
    var ge = H || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return ge;
    }, set: function(Se) {
      isNaN(Se) || (ge = parseFloat(Se));
    } }), this;
  }, oa = function() {
    this.page = Ft, this.currentPage = C, this.pages = ke.slice(0), this.pagesContext = Qe.slice(0), this.x = Lt, this.y = ct, this.matrix = Gt, this.width = Qr(C), this.height = jr(C), this.outputDestination = Re, this.id = "", this.objectNumber = -1;
  };
  oa.prototype.restore = function() {
    Ft = this.page, C = this.currentPage, Qe = this.pagesContext, ke = this.pages, Lt = this.x, ct = this.y, Gt = this.matrix, sa(C, this.width), ca(C, this.height), Re = this.outputDestination;
  };
  var Za = function(l, y, O, H, K) {
    tr.push(new oa()), Ft = C = 0, ke = [], Lt = l, ct = y, Gt = K, Zi([O, H]);
  }, ds = function(l) {
    if (er[l]) tr.pop().restore();
    else {
      var y = new oa(), O = "Xo" + (Object.keys(en).length + 1).toString(10);
      y.id = O, er[l] = O, en[O] = y, bt.publish("addFormObject", y), tr.pop().restore();
    }
  };
  for (var Si in p.beginFormObject = function(l, y, O, H, K) {
    return Za(l, y, O, H, K), this;
  }, p.endFormObject = function(l) {
    return ds(l), this;
  }, p.doFormObject = function(l, y) {
    var O = en[er[l]];
    return B("q"), B(y.toString() + " cm"), B("/" + O.id + " Do"), B("Q"), this;
  }, p.getFormObject = function(l) {
    var y = en[er[l]];
    return { x: y.x, y: y.y, width: y.width, height: y.height, matrix: y.matrix };
  }, p.save = function(l, y) {
    return l = l || "generated.pdf", (y = y || {}).returnPromise = y.returnPromise || !1, y.returnPromise === !1 ? (oi(yi(br()), l), typeof oi.unload == "function" && Ze.setTimeout && setTimeout(oi.unload, 911), this) : new Promise(function(O, H) {
      try {
        var K = oi(yi(br()), l);
        typeof oi.unload == "function" && Ze.setTimeout && setTimeout(oi.unload, 911), O(K);
      } catch (ge) {
        H(ge.message);
      }
    });
  }, Je.API) Je.API.hasOwnProperty(Si) && (Si === "events" && Je.API.events.length ? function(l, y) {
    var O, H, K;
    for (K = y.length - 1; K !== -1; K--) O = y[K][0], H = y[K][1], l.subscribe.apply(l, [O].concat(typeof H == "function" ? [H] : H));
  }(bt, Je.API.events) : p[Si] = Je.API[Si]);
  var Qr = p.getPageWidth = function(l) {
    return (Qe[l = l || C].mediaBox.topRightX - Qe[l].mediaBox.bottomLeftX) / Ce;
  }, sa = p.setPageWidth = function(l, y) {
    Qe[l].mediaBox.topRightX = y * Ce + Qe[l].mediaBox.bottomLeftX;
  }, jr = p.getPageHeight = function(l) {
    return (Qe[l = l || C].mediaBox.topRightY - Qe[l].mediaBox.bottomLeftY) / Ce;
  }, ca = p.setPageHeight = function(l, y) {
    Qe[l].mediaBox.topRightY = y * Ce + Qe[l].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: vn, getStyle: Wa, getFont: ls, getFontSize: Me, getCharSpace: fs, getTextColor: hs, getLineHeight: Ya, getLineHeightFactor: Xa, getLineWidth: Ni, write: je, getHorizontalCoordinate: or, getVerticalCoordinate: yr, getCoordinateString: us, getVerticalCoordinateString: Cr, collections: {}, newObject: Yt, newAdditionalObject: hi, newObjectDeferred: Ut, newObjectDeferredBegin: Ln, getFilters: rr, putStream: In, events: bt, scaleFactor: Ce, pageSize: { getWidth: function() {
    return Qr(C);
  }, setWidth: function(l) {
    sa(C, l);
  }, getHeight: function() {
    return jr(C);
  }, setHeight: function(l) {
    ca(C, l);
  } }, encryptionOptions: v, encryption: an, getEncryptor: rs, output: wi, getNumberOfPages: Ko, pages: ke, out: B, f2: de, f3: A, getPageInfo: Ha, getPageInfoByObjId: Ke, getCurrentPageInfo: is, getPDFVersion: I, Point: Ai, Rectangle: aa, Matrix: Xe, hasHotfix: Ua }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Qr(C);
  }, set: function(l) {
    sa(C, l);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return jr(C);
  }, set: function(l) {
    ca(C, l);
  }, enumerable: !0, configurable: !0 }), Jo.call(p, Ne), Ae = "F1", Da(s, r), bt.publish("initialized"), p;
}
Ui.prototype.lsbFirstWord = function(n) {
  return String.fromCharCode(n >> 0 & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
}, Ui.prototype.toHexString = function(n) {
  return n.split("").map(function(e) {
    return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Ui.prototype.hexToBytes = function(n) {
  for (var e = [], r = 0; r < n.length; r += 2) e.push(String.fromCharCode(parseInt(n.substr(r, 2), 16)));
  return e.join("");
}, Ui.prototype.processOwnerPassword = function(n, e) {
  return Zs(Js(e).substr(0, 5), n);
}, Ui.prototype.encryptor = function(n, e) {
  var r = Js(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
  return function(i) {
    return Zs(r, i);
  };
}, Oo.prototype.equals = function(n) {
  var e, r = "id,objectNumber,equals";
  if (!n || xt(n) !== xt(this)) return !1;
  var i = 0;
  for (e in this) if (!(r.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !n.hasOwnProperty(e) || this[e] !== n[e]) return !1;
    i++;
  }
  for (e in n) n.hasOwnProperty(e) && r.indexOf(e) < 0 && i--;
  return i === 0;
}, Je.API = { events: [] }, Je.version = "3.0.1";
var Ot = Je.API, Rc = 1, ui = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, qi = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, tt = function(n) {
  return n.toFixed(2);
}, Wr = function(n) {
  return n.toFixed(5);
};
Ot.__acroform__ = {};
var Nn = function(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
}, kl = function(n) {
  return n * Rc;
}, lr = function(n) {
  var e = new a1(), r = We.internal.getHeight(n) || 0, i = We.internal.getWidth(n) || 0;
  return e.BBox = [0, 0, Number(tt(i)), Number(tt(r))], e;
}, gh = Ot.__acroform__.setBit = function(n, e) {
  if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n |= 1 << e;
}, mh = Ot.__acroform__.clearBit = function(n, e) {
  if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n &= ~(1 << e);
}, vh = Ot.__acroform__.getBit = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return (n & 1 << e) == 0 ? 0 : 1;
}, Dt = Ot.__acroform__.getBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return vh(n, e - 1);
}, qt = Ot.__acroform__.setBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return gh(n, e - 1);
}, zt = Ot.__acroform__.clearBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return mh(n, e - 1);
}, bh = Ot.__acroform__.calculateCoordinates = function(n, e) {
  var r = e.internal.getHorizontalCoordinate, i = e.internal.getVerticalCoordinate, s = n[0], o = n[1], c = n[2], h = n[3], f = {};
  return f.lowerLeft_X = r(s) || 0, f.lowerLeft_Y = i(o + h) || 0, f.upperRight_X = r(s + c) || 0, f.upperRight_Y = i(o) || 0, [Number(tt(f.lowerLeft_X)), Number(tt(f.lowerLeft_Y)), Number(tt(f.upperRight_X)), Number(tt(f.upperRight_Y))];
}, yh = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var e = [], r = n._V || n.DV, i = Ks(n, r), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + s + " " + tt(i.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(i.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var o = lr(n);
    return o.scope = n.scope, o.stream = e.join(`
`), o;
  }
}, Ks = function(n, e) {
  var r = n.fontSize === 0 ? n.maxFontSize : n.fontSize, i = { text: "", fontSize: "" }, s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  s = n.multiline ? s.map(function(A) {
    return A.split(`
`);
  }) : s.map(function(A) {
    return [A];
  });
  var o = r, c = We.internal.getHeight(n) || 0;
  c = c < 0 ? -c : c;
  var h = We.internal.getWidth(n) || 0;
  h = h < 0 ? -h : h;
  var f = function(A, _, D) {
    if (A + 1 < s.length) {
      var R = _ + " " + s[A + 1][0];
      return _o(R, n, D).width <= h - 4;
    }
    return !1;
  };
  o++;
  e: for (; o > 0; ) {
    e = "", o--;
    var g, v, m = _o("3", n, o).height, x = n.multiline ? c - o : (c - m) / 2, p = x += 2, M = 0, I = 0, E = 0;
    if (o <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + _o(e, n, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var k = "", F = 0, G = 0; G < s.length; G++) if (s.hasOwnProperty(G)) {
      var le = !1;
      if (s[G].length !== 1 && E !== s[G].length - 1) {
        if ((m + 2) * (F + 2) + 2 > c) continue e;
        k += s[G][E], le = !0, I = G, G--;
      } else {
        k = (k += s[G][E] + " ").substr(k.length - 1) == " " ? k.substr(0, k.length - 1) : k;
        var fe = parseInt(G), be = f(fe, k, o), Q = G >= s.length - 1;
        if (be && !Q) {
          k += " ", E = 0;
          continue;
        }
        if (be || Q) {
          if (Q) I = fe;
          else if (n.multiline && (m + 2) * (F + 2) + 2 > c) continue e;
        } else {
          if (!n.multiline || (m + 2) * (F + 2) + 2 > c) continue e;
          I = fe;
        }
      }
      for (var q = "", ie = M; ie <= I; ie++) {
        var de = s[ie];
        if (n.multiline) {
          if (ie === I) {
            q += de[E] + " ", E = (E + 1) % de.length;
            continue;
          }
          if (ie === M) {
            q += de[de.length - 1] + " ";
            continue;
          }
        }
        q += de[0] + " ";
      }
      switch (q = q.substr(q.length - 1) == " " ? q.substr(0, q.length - 1) : q, v = _o(q, n, o).width, n.textAlign) {
        case "right":
          g = h - v - 2;
          break;
        case "center":
          g = (h - v) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      e += tt(g) + " " + tt(p) + ` Td
`, e += "(" + ui(q) + `) Tj
`, e += -tt(g) + ` 0 Td
`, p = -(o + 2), v = 0, M = le ? I : I + 1, F++, k = "";
    }
    break;
  }
  return i.text = e, i.fontSize = o, i;
}, _o = function(n, e, r) {
  var i = e.scope.internal.getFont(e.fontName, e.fontStyle), s = e.scope.getStringUnitWidth(n, { font: i, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
  return { height: e.scope.getStringUnitWidth("3", { font: i, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: s };
}, wh = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, xh = function(n, e) {
  var r = { type: "reference", object: n };
  e.internal.getPageInfo(n.page).pageContext.annotations.find(function(i) {
    return i.type === r.type && i.object === r.object;
  }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(r);
}, Nh = function(n, e) {
  for (var r in n) if (n.hasOwnProperty(r)) {
    var i = r, s = n[r];
    e.internal.newObjectDeferredBegin(s.objId, !0), xt(s) === "object" && typeof s.putStream == "function" && s.putStream(), delete n[i];
  }
}, Lh = function(n, e) {
  if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (Kn.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(wh)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Rc = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new o1(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(r) {
        r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID, r.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(r) {
        r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var i = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var s in i) if (i.hasOwnProperty(s)) {
          var o = i[s];
          o.objId = void 0, o.hasAnnotation && xh(o, r);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(r) {
        if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        r.internal.write("/AcroForm " + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(r) {
      (function(i, s) {
        var o = !i;
        for (var c in i || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (i.hasOwnProperty(c)) {
          var h = i[c], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = bh(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), h.DA = We.createDefaultAppearanceStream(h), xt(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var v = yh(h);
            f.push({ key: "AP", value: "<</N " + v + ">>" }), s.internal.acroformPlugin.xForms.push(v);
          }
          if (h.appearanceStreamContent) {
            var m = "";
            for (var x in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(x)) {
              var p = h.appearanceStreamContent[x];
              if (m += "/" + x + " ", m += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var c in p) if (p.hasOwnProperty(c)) {
                  var M = p[c];
                  typeof M == "function" && (M = M.call(s, h)), m += "/" + c + " " + M + " ", s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
                }
              } else typeof (M = p) == "function" && (M = M.call(s, h)), m += "/" + c + " " + M, s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
              m += ">>";
            }
            f.push({ key: "AP", value: `<<
` + m + ">>" });
          }
          s.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), s.internal.out("endobj");
        }
        o && Nh(s.internal.acroformPlugin.xForms, s);
      })(r, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, i1 = Ot.__acroform__.arrayToPdfArray = function(n, e, r) {
  var i = function(c) {
    return c;
  };
  if (Array.isArray(n)) {
    for (var s = "[", o = 0; o < n.length; o++) switch (o !== 0 && (s += " "), xt(n[o])) {
      case "boolean":
      case "number":
      case "object":
        s += n[o].toString();
        break;
      case "string":
        n[o].substr(0, 1) !== "/" ? (e !== void 0 && r && (i = r.internal.getEncryptor(e)), s += "(" + ui(i(n[o].toString())) + ")") : s += n[o].toString();
    }
    return s += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, Ds = function(n, e, r) {
  var i = function(s) {
    return s;
  };
  return e !== void 0 && r && (i = r.internal.getEncryptor(e)), (n = n || "").toString(), n = "(" + ui(i(n)) + ")";
}, ur = function() {
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
ur.prototype.toString = function() {
  return this.objId + " 0 R";
}, ur.prototype.putStream = function() {
  var n = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: n, objectId: this.objId }), this.scope.internal.out("endobj");
}, ur.prototype.getKeyValueListForStream = function() {
  var n = [], e = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var r in e) if (Object.getOwnPropertyDescriptor(this, e[r]).configurable === !1) {
    var i = e[r], s = this[i];
    s && (Array.isArray(s) ? n.push({ key: i, value: i1(s, this.objId, this.scope) }) : s instanceof ur ? (s.scope = this.scope, n.push({ key: i, value: s.objId + " 0 R" })) : typeof s != "function" && n.push({ key: i, value: s }));
  }
  return n;
};
var a1 = function() {
  ur.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var n, e = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return e;
  }, set: function(r) {
    e = r;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(r) {
    n = r.trim();
  }, get: function() {
    return n || null;
  } });
};
Nn(a1, ur);
var o1 = function() {
  ur.call(this);
  var n, e = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var r = function(i) {
        return i;
      };
      return this.scope && (r = this.scope.internal.getEncryptor(this.objId)), "(" + ui(r(n)) + ")";
    }
  }, set: function(r) {
    n = r;
  } });
};
Nn(o1, ur);
var Kn = function n() {
  ur.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute F supplied.');
    e = k;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(e, 3);
  }, set: function(k) {
    k ? this.F = qt(e, 3) : this.F = zt(e, 3);
  } });
  var r = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute Ff supplied.');
    r = k;
  } });
  var i = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (i.length !== 0) return i;
  }, set: function(k) {
    i = k !== void 0 ? k : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[0]) ? 0 : i[0];
  }, set: function(k) {
    i[0] = k;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[1]) ? 0 : i[1];
  }, set: function(k) {
    i[1] = k;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[2]) ? 0 : i[2];
  }, set: function(k) {
    i[2] = k;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[3]) ? 0 : i[3];
  }, set: function(k) {
    i[3] = k;
  } });
  var s = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return s;
  }, set: function(k) {
    switch (k) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        s = k;
        break;
      default:
        throw new Error('Invalid value "' + k + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof Ro) return;
      o = "FieldObject" + n.FieldNum++;
    }
    var k = function(F) {
      return F;
    };
    return this.scope && (k = this.scope.internal.getEncryptor(this.objId)), "(" + ui(k(o)) + ")";
  }, set: function(k) {
    o = k.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return o;
  }, set: function(k) {
    o = k;
  } });
  var c = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return c;
  }, set: function(k) {
    c = k;
  } });
  var h = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return h;
  }, set: function(k) {
    h = k;
  } });
  var f = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(k) {
    f = k;
  } });
  var g = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return g === void 0 ? 50 / Rc : g;
  }, set: function(k) {
    g = k;
  } });
  var v = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return v;
  }, set: function(k) {
    v = k;
  } });
  var m = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!m || this instanceof Ro || this instanceof ci)) return Ds(m, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), m = k;
  } });
  var x = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (x) return this instanceof Qt ? x : Ds(x, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), x = this instanceof Qt ? k : k.substr(0, 1) === "(" ? qi(k.substr(1, k.length - 2)) : qi(k);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Qt ? qi(x.substr(1, x.length - 1)) : x;
  }, set: function(k) {
    k = k.toString(), x = this instanceof Qt ? "/" + k : k;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(k) {
    this.V = k;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof Qt ? p : Ds(p, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), p = this instanceof Qt ? k : k.substr(0, 1) === "(" ? qi(k.substr(1, k.length - 2)) : qi(k);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Qt ? qi(p.substr(1, p.length - 1)) : p;
  }, set: function(k) {
    k = k.toString(), p = this instanceof Qt ? "/" + k : k;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var M, I = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return I;
  }, set: function(k) {
    k = !!k, I = k;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (M) return M;
  }, set: function(k) {
    M = k;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 1);
  }, set: function(k) {
    k ? this.Ff = qt(this.Ff, 1) : this.Ff = zt(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 2);
  }, set: function(k) {
    k ? this.Ff = qt(this.Ff, 2) : this.Ff = zt(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 3);
  }, set: function(k) {
    k ? this.Ff = qt(this.Ff, 3) : this.Ff = zt(this.Ff, 3);
  } });
  var E = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (E !== null) return E;
  }, set: function(k) {
    if ([0, 1, 2].indexOf(k) === -1) throw new Error('Invalid value "' + k + '" for attribute Q supplied.');
    E = k;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var k;
    switch (E) {
      case 0:
      default:
        k = "left";
        break;
      case 1:
        k = "center";
        break;
      case 2:
        k = "right";
    }
    return k;
  }, configurable: !0, enumerable: !0, set: function(k) {
    switch (k) {
      case "right":
      case 2:
        E = 2;
        break;
      case "center":
      case 1:
        E = 1;
        break;
      case "left":
      case 0:
      default:
        E = 0;
    }
  } });
};
Nn(Kn, ur);
var Vi = function() {
  Kn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
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
  var e = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return i1(e, this.objId, this.scope);
  }, set: function(r) {
    var i, s;
    s = [], typeof (i = r) == "string" && (s = function(o, c, h) {
      h || (h = 1);
      for (var f, g = []; f = c.exec(o); ) g.push(f[h]);
      return g;
    }(i, /\((.*?)\)/g)), e = s;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(r) {
    e = r, this.sort && e.sort();
  }, this.addOption = function(r) {
    r = (r = r || "").toString(), e.push(r), this.sort && e.sort();
  }, this.removeOption = function(r, i) {
    for (i = i || !1, r = (r = r || "").toString(); e.indexOf(r) !== -1 && (e.splice(e.indexOf(r), 1), i !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 18);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 18) : this.Ff = zt(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 19);
  }, set: function(r) {
    this.combo === !0 && (r ? this.Ff = qt(this.Ff, 19) : this.Ff = zt(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 20);
  }, set: function(r) {
    r ? (this.Ff = qt(this.Ff, 20), e.sort()) : this.Ff = zt(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 22);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 22) : this.Ff = zt(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 23);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 23) : this.Ff = zt(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 27);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 27) : this.Ff = zt(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Nn(Vi, Kn);
var Gi = function() {
  Vi.call(this), this.fontName = "helvetica", this.combo = !1;
};
Nn(Gi, Vi);
var Yi = function() {
  Gi.call(this), this.combo = !0;
};
Nn(Yi, Gi);
var Io = function() {
  Yi.call(this), this.edit = !0;
};
Nn(Io, Yi);
var Qt = function() {
  Kn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 15);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 15) : this.Ff = zt(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 16);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 16) : this.Ff = zt(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 17);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 17) : this.Ff = zt(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 26);
  }, set: function(r) {
    r ? this.Ff = qt(this.Ff, 26) : this.Ff = zt(this.Ff, 26);
  } });
  var n, e = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(o) {
      return o;
    };
    if (this.scope && (r = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var i, s = [];
      for (i in s.push("<<"), e) s.push("/" + i + " (" + ui(r(e[i])) + ")");
      return s.push(">>"), s.join(`
`);
    }
  }, set: function(r) {
    xt(r) === "object" && (e = r);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return e.CA || "";
  }, set: function(r) {
    typeof r == "string" && (e.CA = r);
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
Nn(Qt, Kn);
var Co = function() {
  Qt.call(this), this.pushButton = !0;
};
Nn(Co, Qt);
var $i = function() {
  Qt.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    n = e !== void 0 ? e : [];
  } });
};
Nn($i, Qt);
var Ro = function() {
  var n, e;
  Kn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(s) {
    n = s;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return e;
  }, set: function(s) {
    e = s;
  } });
  var r, i = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var s = function(h) {
      return h;
    };
    this.scope && (s = this.scope.internal.getEncryptor(this.objId));
    var o, c = [];
    for (o in c.push("<<"), i) c.push("/" + o + " (" + ui(s(i[o])) + ")");
    return c.push(">>"), c.join(`
`);
  }, set: function(s) {
    xt(s) === "object" && (i = s);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return i.CA || "";
  }, set: function(s) {
    typeof s == "string" && (i.CA = s);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(s) {
    r = s;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(s) {
    r = "/" + s;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = We.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Nn(Ro, Kn), $i.prototype.setAppearance = function(n) {
  if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
    var r = this.Kids[e];
    r.appearanceStreamContent = n.createAppearanceStream(r.optionName), r.caption = n.getCA();
  }
}, $i.prototype.createOption = function(n) {
  var e = new Ro();
  return e.Parent = this, e.optionName = n, this.Kids.push(e), Ah.call(this.scope, e), e;
};
var jo = function() {
  Qt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = We.CheckBox.createAppearanceStream();
};
Nn(jo, Qt);
var ci = function() {
  Kn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 13) : this.Ff = zt(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 21) : this.Ff = zt(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 23) : this.Ff = zt(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 24) : this.Ff = zt(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 25) : this.Ff = zt(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = qt(this.Ff, 26) : this.Ff = zt(this.Ff, 26);
  } });
  var n = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    n = e;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(e) {
    Number.isInteger(e) && (n = e);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Nn(ci, Kn);
var Fo = function() {
  ci.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Dt(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = qt(this.Ff, 14) : this.Ff = zt(this.Ff, 14);
  } }), this.password = !0;
};
Nn(Fo, ci);
var We = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: We.CheckBox.YesNormal }, D: { On: We.CheckBox.YesPushDown, Off: We.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], i = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), o = Ks(n, n.caption);
  return r.push("0.749023 g"), r.push("0 0 " + tt(We.internal.getWidth(n)) + " " + tt(We.internal.getHeight(n)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + i + " " + tt(o.fontSize) + " Tf " + s), r.push("BT"), r.push(o.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join(`
`), e;
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, i = n.scope.__private__.encodeColorString(n.color), s = [], o = We.internal.getHeight(n), c = We.internal.getWidth(n), h = Ks(n, n.caption);
  return s.push("1 g"), s.push("0 0 " + tt(c) + " " + tt(o) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + tt(c - 1) + " " + tt(o - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + r + " " + tt(h.fontSize) + " Tf " + i), s.push(h.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + tt(We.internal.getWidth(n)) + " " + tt(We.internal.getHeight(n)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var e = { D: { Off: We.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[n] = We.RadioButton.Circle.YesNormal, e.D[n] = We.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], i = We.internal.getWidth(n) <= We.internal.getHeight(n) ? We.internal.getWidth(n) / 4 : We.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = We.internal.Bezier_C, o = Number((i * s).toFixed(5));
  return r.push("q"), r.push("1 0 0 1 " + Wr(We.internal.getWidth(n) / 2) + " " + Wr(We.internal.getHeight(n) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), r.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), r.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), r.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], i = We.internal.getWidth(n) <= We.internal.getHeight(n) ? We.internal.getWidth(n) / 4 : We.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), o = Number((s * We.internal.Bezier_C).toFixed(5)), c = Number((i * We.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Wr(We.internal.getWidth(n) / 2) + " " + Wr(We.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + Wr(We.internal.getWidth(n) / 2) + " " + Wr(We.internal.getHeight(n) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + c + " " + c + " " + i + " 0 " + i + " c"), r.push("-" + c + " " + i + " -" + i + " " + c + " -" + i + " 0 c"), r.push("-" + i + " -" + c + " -" + c + " -" + i + " 0 -" + i + " c"), r.push(c + " -" + i + " " + i + " -" + c + " " + i + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], i = We.internal.getWidth(n) <= We.internal.getHeight(n) ? We.internal.getWidth(n) / 4 : We.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), o = Number((s * We.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Wr(We.internal.getWidth(n) / 2) + " " + Wr(We.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
} }, Cross: { createAppearanceStream: function(n) {
  var e = { D: { Off: We.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[n] = We.RadioButton.Cross.YesNormal, e.D[n] = We.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], i = We.internal.calculateCross(n);
  return r.push("q"), r.push("1 1 " + tt(We.internal.getWidth(n) - 2) + " " + tt(We.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(tt(i.x1.x) + " " + tt(i.x1.y) + " m"), r.push(tt(i.x2.x) + " " + tt(i.x2.y) + " l"), r.push(tt(i.x4.x) + " " + tt(i.x4.y) + " m"), r.push(tt(i.x3.x) + " " + tt(i.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = We.internal.calculateCross(n), i = [];
  return i.push("0.749023 g"), i.push("0 0 " + tt(We.internal.getWidth(n)) + " " + tt(We.internal.getHeight(n)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + tt(We.internal.getWidth(n) - 2) + " " + tt(We.internal.getHeight(n) - 2) + " re"), i.push("W"), i.push("n"), i.push(tt(r.x1.x) + " " + tt(r.x1.y) + " m"), i.push(tt(r.x2.x) + " " + tt(r.x2.y) + " l"), i.push(tt(r.x4.x) + " " + tt(r.x4.y) + " m"), i.push(tt(r.x3.x) + " " + tt(r.x3.y) + " l"), i.push("s"), i.push("Q"), e.stream = i.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + tt(We.internal.getWidth(n)) + " " + tt(We.internal.getHeight(n)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} } }, createDefaultAppearanceStream: function(n) {
  var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color);
  return "/" + e + " " + n.fontSize + " Tf " + r;
} };
We.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var e = We.internal.getWidth(n), r = We.internal.getHeight(n), i = Math.min(e, r);
  return { x1: { x: (e - i) / 2, y: (r - i) / 2 + i }, x2: { x: (e - i) / 2 + i, y: (r - i) / 2 }, x3: { x: (e - i) / 2, y: (r - i) / 2 }, x4: { x: (e - i) / 2 + i, y: (r - i) / 2 + i } };
} }, We.internal.getWidth = function(n) {
  var e = 0;
  return xt(n) === "object" && (e = kl(n.Rect[2])), e;
}, We.internal.getHeight = function(n) {
  var e = 0;
  return xt(n) === "object" && (e = kl(n.Rect[3])), e;
};
var Ah = Ot.addField = function(n) {
  if (Lh(this, n), !(n instanceof Kn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Ot.AcroFormChoiceField = Vi, Ot.AcroFormListBox = Gi, Ot.AcroFormComboBox = Yi, Ot.AcroFormEditBox = Io, Ot.AcroFormButton = Qt, Ot.AcroFormPushButton = Co, Ot.AcroFormRadioButton = $i, Ot.AcroFormCheckBox = jo, Ot.AcroFormTextField = ci, Ot.AcroFormPasswordField = Fo, Ot.AcroFormAppearance = We, Ot.AcroForm = { ChoiceField: Vi, ListBox: Gi, ComboBox: Yi, EditBox: Io, Button: Qt, PushButton: Co, RadioButton: $i, CheckBox: jo, TextField: ci, PasswordField: Fo, Appearance: We }, Je.AcroForm = { ChoiceField: Vi, ListBox: Gi, ComboBox: Yi, EditBox: Io, Button: Qt, PushButton: Co, RadioButton: $i, CheckBox: jo, TextField: ci, PasswordField: Fo, Appearance: We };
Je.AcroForm;
function s1(n) {
  return n.reduce(function(e, r, i) {
    return e[r] = i, e;
  }, {});
}
(function(n) {
  n.__addimage__ = {};
  var e = "UNKNOWN", r = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, i = n.__addimage__.getImageFileTypeByImageData = function(A, _) {
    var D, R, ce, ae, he, J = e;
    if ((_ = _ || e) === "RGBA" || A.data !== void 0 && A.data instanceof Uint8ClampedArray && "height" in A && "width" in A) return "RGBA";
    if (be(A)) for (he in r) for (ce = r[he], D = 0; D < ce.length; D += 1) {
      for (ae = !0, R = 0; R < ce[D].length; R += 1) if (ce[D][R] !== void 0 && ce[D][R] !== A[R]) {
        ae = !1;
        break;
      }
      if (ae === !0) {
        J = he;
        break;
      }
    }
    else for (he in r) for (ce = r[he], D = 0; D < ce.length; D += 1) {
      for (ae = !0, R = 0; R < ce[D].length; R += 1) if (ce[D][R] !== void 0 && ce[D][R] !== A.charCodeAt(R)) {
        ae = !1;
        break;
      }
      if (ae === !0) {
        J = he;
        break;
      }
    }
    return J === e && _ !== e && (J = _), J;
  }, s = function A(_) {
    for (var D = this.internal.write, R = this.internal.putStream, ce = (0, this.internal.getFilters)(); ce.indexOf("FlateEncode") !== -1; ) ce.splice(ce.indexOf("FlateEncode"), 1);
    _.objectId = this.internal.newObject();
    var ae = [];
    if (ae.push({ key: "Type", value: "/XObject" }), ae.push({ key: "Subtype", value: "/Image" }), ae.push({ key: "Width", value: _.width }), ae.push({ key: "Height", value: _.height }), _.colorSpace === E.INDEXED ? ae.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (_.palette.length / 3 - 1) + " " + ("sMask" in _ && _.sMask !== void 0 ? _.objectId + 2 : _.objectId + 1) + " 0 R]" }) : (ae.push({ key: "ColorSpace", value: "/" + _.colorSpace }), _.colorSpace === E.DEVICE_CMYK && ae.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), ae.push({ key: "BitsPerComponent", value: _.bitsPerComponent }), "decodeParameters" in _ && _.decodeParameters !== void 0 && ae.push({ key: "DecodeParms", value: "<<" + _.decodeParameters + ">>" }), "transparency" in _ && Array.isArray(_.transparency)) {
      for (var he = "", J = 0, se = _.transparency.length; J < se; J++) he += _.transparency[J] + " " + _.transparency[J] + " ";
      ae.push({ key: "Mask", value: "[" + he + "]" });
    }
    _.sMask !== void 0 && ae.push({ key: "SMask", value: _.objectId + 1 + " 0 R" });
    var z = _.filter !== void 0 ? ["/" + _.filter] : void 0;
    if (R({ data: _.data, additionalKeyValues: ae, alreadyAppliedFilters: z, objectId: _.objectId }), D("endobj"), "sMask" in _ && _.sMask !== void 0) {
      var ue = "/Predictor " + _.predictor + " /Colors 1 /BitsPerComponent " + _.bitsPerComponent + " /Columns " + _.width, w = { width: _.width, height: _.height, colorSpace: "DeviceGray", bitsPerComponent: _.bitsPerComponent, decodeParameters: ue, data: _.sMask };
      "filter" in _ && (w.filter = _.filter), A.call(this, w);
    }
    if (_.colorSpace === E.INDEXED) {
      var C = this.internal.newObject();
      R({ data: q(new Uint8Array(_.palette)), objectId: C }), D("endobj");
    }
  }, o = function() {
    var A = this.internal.collections.addImage_images;
    for (var _ in A) s.call(this, A[_]);
  }, c = function() {
    var A, _ = this.internal.collections.addImage_images, D = this.internal.write;
    for (var R in _) D("/I" + (A = _[R]).index, A.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", c));
  }, f = function() {
    var A = this.internal.collections.addImage_images;
    return h.call(this), A;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, v = function(A) {
    return typeof n["process" + A.toUpperCase()] == "function";
  }, m = function(A) {
    return xt(A) === "object" && A.nodeType === 1;
  }, x = function(A, _) {
    if (A.nodeName === "IMG" && A.hasAttribute("src")) {
      var D = "" + A.getAttribute("src");
      if (D.indexOf("data:image/") === 0) return Ca(unescape(D).split("base64,").pop());
      var R = n.loadFile(D, !0);
      if (R !== void 0) return R;
    }
    if (A.nodeName === "CANVAS") {
      if (A.width === 0 || A.height === 0) throw new Error("Given canvas must have data. Canvas width: " + A.width + ", height: " + A.height);
      var ce;
      switch (_) {
        case "PNG":
          ce = "image/png";
          break;
        case "WEBP":
          ce = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          ce = "image/jpeg";
      }
      return Ca(A.toDataURL(ce, 1).split("base64,").pop());
    }
  }, p = function(A) {
    var _ = this.internal.collections.addImage_images;
    if (_) {
      for (var D in _) if (A === _[D].alias) return _[D];
    }
  }, M = function(A, _, D) {
    return A || _ || (A = -96, _ = -96), A < 0 && (A = -1 * D.width * 72 / A / this.internal.scaleFactor), _ < 0 && (_ = -1 * D.height * 72 / _ / this.internal.scaleFactor), A === 0 && (A = _ * D.width / D.height), _ === 0 && (_ = A * D.height / D.width), [A, _];
  }, I = function(A, _, D, R, ce, ae) {
    var he = M.call(this, D, R, ce), J = this.internal.getCoordinateString, se = this.internal.getVerticalCoordinateString, z = f.call(this);
    if (D = he[0], R = he[1], z[ce.index] = ce, ae) {
      ae *= Math.PI / 180;
      var ue = Math.cos(ae), w = Math.sin(ae), C = function(U) {
        return U.toFixed(4);
      }, T = [C(ue), C(w), C(-1 * w), C(ue), 0, 0, "cm"];
    }
    this.internal.write("q"), ae ? (this.internal.write([1, "0", "0", 1, J(A), se(_ + R), "cm"].join(" ")), this.internal.write(T.join(" ")), this.internal.write([J(D), "0", "0", J(R), "0", "0", "cm"].join(" "))) : this.internal.write([J(D), "0", "0", J(R), J(A), se(_ + R), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + ce.index + " Do"), this.internal.write("Q");
  }, E = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var k = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, F = n.__addimage__.sHashCode = function(A) {
    var _, D, R = 0;
    if (typeof A == "string") for (D = A.length, _ = 0; _ < D; _++) R = (R << 5) - R + A.charCodeAt(_), R |= 0;
    else if (be(A)) for (D = A.byteLength / 2, _ = 0; _ < D; _++) R = (R << 5) - R + A[_], R |= 0;
    return R;
  }, G = n.__addimage__.validateStringAsBase64 = function(A) {
    (A = A || "").toString().trim();
    var _ = !0;
    return A.length === 0 && (_ = !1), A.length % 4 != 0 && (_ = !1), /^[A-Za-z0-9+/]+$/.test(A.substr(0, A.length - 2)) === !1 && (_ = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(A.substr(-2)) === !1 && (_ = !1), _;
  }, le = n.__addimage__.extractImageFromDataUrl = function(A) {
    if (A == null || !(A = A.trim()).startsWith("data:")) return null;
    var _ = A.indexOf(",");
    return _ < 0 ? null : A.substring(0, _).trim().endsWith("base64") ? A.substring(_ + 1) : null;
  }, fe = n.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  n.__addimage__.isArrayBuffer = function(A) {
    return fe() && A instanceof ArrayBuffer;
  };
  var be = n.__addimage__.isArrayBufferView = function(A) {
    return fe() && typeof Uint32Array < "u" && (A instanceof Int8Array || A instanceof Uint8Array || typeof Uint8ClampedArray < "u" && A instanceof Uint8ClampedArray || A instanceof Int16Array || A instanceof Uint16Array || A instanceof Int32Array || A instanceof Uint32Array || A instanceof Float32Array || A instanceof Float64Array);
  }, Q = n.__addimage__.binaryStringToUint8Array = function(A) {
    for (var _ = A.length, D = new Uint8Array(_), R = 0; R < _; R++) D[R] = A.charCodeAt(R);
    return D;
  }, q = n.__addimage__.arrayBufferToBinaryString = function(A) {
    for (var _ = "", D = be(A) ? A : new Uint8Array(A), R = 0; R < D.length; R += 8192) _ += String.fromCharCode.apply(null, D.subarray(R, R + 8192));
    return _;
  };
  n.addImage = function() {
    var A, _, D, R, ce, ae, he, J, se;
    if (typeof arguments[1] == "number" ? (_ = e, D = arguments[1], R = arguments[2], ce = arguments[3], ae = arguments[4], he = arguments[5], J = arguments[6], se = arguments[7]) : (_ = arguments[1], D = arguments[2], R = arguments[3], ce = arguments[4], ae = arguments[5], he = arguments[6], J = arguments[7], se = arguments[8]), xt(A = arguments[0]) === "object" && !m(A) && "imageData" in A) {
      var z = A;
      A = z.imageData, _ = z.format || _ || e, D = z.x || D || 0, R = z.y || R || 0, ce = z.w || z.width || ce, ae = z.h || z.height || ae, he = z.alias || he, J = z.compression || J, se = z.rotation || z.angle || se;
    }
    var ue = this.internal.getFilters();
    if (J === void 0 && ue.indexOf("FlateEncode") !== -1 && (J = "SLOW"), isNaN(D) || isNaN(R)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var w = ie.call(this, A, _, he, J);
    return I.call(this, D, R, ce, ae, w, se), this;
  };
  var ie = function(A, _, D, R) {
    var ce, ae, he;
    if (typeof A == "string" && i(A) === e) {
      A = unescape(A);
      var J = de(A, !1);
      (J !== "" || (J = n.loadFile(A, !0)) !== void 0) && (A = J);
    }
    if (m(A) && (A = x(A, _)), _ = i(A, _), !v(_)) throw new Error("addImage does not support files of type '" + _ + "', please ensure that a plugin for '" + _ + "' support is added.");
    if (((he = D) == null || he.length === 0) && (D = function(se) {
      return typeof se == "string" || be(se) ? F(se) : be(se.data) ? F(se.data) : null;
    }(A)), (ce = p.call(this, D)) || (fe() && (A instanceof Uint8Array || _ === "RGBA" || (ae = A, A = Q(A))), ce = this["process" + _.toUpperCase()](A, g.call(this), D, function(se) {
      return se && typeof se == "string" && (se = se.toUpperCase()), se in n.image_compression ? se : k.NONE;
    }(R), ae)), !ce) throw new Error("An unknown error occurred whilst processing the image.");
    return ce;
  }, de = n.__addimage__.convertBase64ToBinaryString = function(A, _) {
    _ = typeof _ != "boolean" || _;
    var D, R = "";
    if (typeof A == "string") {
      var ce;
      D = (ce = le(A)) !== null && ce !== void 0 ? ce : A;
      try {
        R = Ca(D);
      } catch (ae) {
        if (_) throw G(D) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + ae.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return R;
  };
  n.getImageProperties = function(A) {
    var _, D, R = "";
    if (m(A) && (A = x(A)), typeof A == "string" && i(A) === e && ((R = de(A, !1)) === "" && (R = n.loadFile(A) || ""), A = R), D = i(A), !v(D)) throw new Error("addImage does not support files of type '" + D + "', please ensure that a plugin for '" + D + "' support is added.");
    if (!fe() || A instanceof Uint8Array || (A = Q(A)), !(_ = this["process" + D.toUpperCase()](A))) throw new Error("An unknown error occurred whilst processing the image");
    return _.fileType = D, _;
  };
})(Je.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function(r) {
    if (r !== void 0 && r != "") return !0;
  };
  Je.API.events.push(["addPage", function(r) {
    this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(r) {
    for (var i, s, o, c = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(r.objId), g = r.pageContext.annotations, v = !1, m = 0; m < g.length && !v; m++) switch ((i = g[m]).type) {
      case "link":
        (e(i.options.url) || e(i.options.pageNumber)) && (v = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        v = !0;
    }
    if (v != 0) {
      this.internal.write("/Annots [");
      for (var x = 0; x < g.length; x++) {
        i = g[x];
        var p = this.internal.pdfEscape, M = this.internal.getEncryptor(r.objId);
        switch (i.type) {
          case "reference":
            this.internal.write(" " + i.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), E = this.internal.newAdditionalObject(), k = this.internal.getEncryptor(I.objId), F = i.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + c(i.bounds.x) + " " + h(i.bounds.y + i.bounds.h) + " " + c(i.bounds.x + i.bounds.w) + " " + h(i.bounds.y) + "] ") + "/Contents (" + p(k(i.contents)) + ")", o += " /Popup " + E.objId + " 0 R", o += " /P " + f.objId + " 0 R", o += " /T (" + p(k(F)) + ") >>", I.content = o;
            var G = I.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + c(i.bounds.x + 30) + " " + h(i.bounds.y + i.bounds.h) + " " + c(i.bounds.x + i.bounds.w + 30) + " " + h(i.bounds.y) + "] ") + " /Parent " + G, i.open && (o += " /Open true"), o += " >>", E.content = o, this.internal.write(I.objId, "0 R", E.objId, "0 R");
            break;
          case "freetext":
            s = "/Rect [" + c(i.bounds.x) + " " + h(i.bounds.y) + " " + c(i.bounds.x + i.bounds.w) + " " + h(i.bounds.y + i.bounds.h) + "] ";
            var le = i.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(M(i.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + le + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (i.options.name) {
              var fe = this.annotations._nameMap[i.options.name];
              i.options.pageNumber = fe.page, i.options.top = fe.y;
            } else i.options.top || (i.options.top = 0);
            if (s = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", o = "", i.options.url) o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(M(i.options.url)) + ") >>";
            else if (i.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + i.options.top + "]";
                  break;
                case "FitV":
                  i.options.left = i.options.left || 0, o += " /FitV " + i.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var be = h(i.options.top);
                  i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), o += " /XYZ " + i.options.left + " " + be + " " + i.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), n.createAnnotation = function(r) {
    var i = this.internal.getCurrentPageInfo();
    switch (r.type) {
      case "link":
        this.link(r.bounds.x, r.bounds.y, r.bounds.w, r.bounds.h, r);
        break;
      case "text":
      case "freetext":
        i.pageContext.annotations.push(r);
    }
  }, n.link = function(r, i, s, o, c) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(r), y: g(i), w: f(r + s), h: g(i + o) }, options: c, type: "link" });
  }, n.textWithLink = function(r, i, s, o) {
    var c, h, f = this.getTextWidth(r), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var v = this.splitTextToSize(r, h).length;
      c = Math.ceil(g * v);
    } else h = f, c = g;
    return this.text(r, i, s, o), s += 0.2 * g, o.align === "center" && (i -= f / 2), o.align === "right" && (i -= f), this.link(i, s - g, h, c, o), f;
  }, n.getTextWidth = function(r) {
    var i = this.internal.getFontSize();
    return this.getStringUnitWidth(r) * i / this.internal.scaleFactor;
  };
}(Je.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, s = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var o = n.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return e[I.charCodeAt(0)] !== void 0;
  }, c = n.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = n.__arabicParser__.isArabicEndLetter = function(I) {
    return c(I) && o(I) && e[I.charCodeAt(0)].length <= 2;
  }, f = n.__arabicParser__.isArabicAlfLetter = function(I) {
    return c(I) && s.indexOf(I.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return c(I) && o(I) && e[I.charCodeAt(0)].length >= 1;
  };
  var g = n.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return c(I) && o(I) && e[I.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return c(I) && o(I) && e[I.charCodeAt(0)].length >= 3;
  };
  var v = n.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return c(I) && o(I) && e[I.charCodeAt(0)].length == 4;
  }, m = n.__arabicParser__.resolveLigatures = function(I) {
    var E = 0, k = r, F = "", G = 0;
    for (E = 0; E < I.length; E += 1) k[I.charCodeAt(E)] !== void 0 ? (G++, typeof (k = k[I.charCodeAt(E)]) == "number" && (F += String.fromCharCode(k), k = r, G = 0), E === I.length - 1 && (k = r, F += I.charAt(E - (G - 1)), E -= G - 1, G = 0)) : (k = r, F += I.charAt(E - G), E -= G, G = 0);
    return F;
  };
  n.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && i[I.charCodeAt(0)] !== void 0;
  };
  var x = n.__arabicParser__.getCorrectForm = function(I, E, k) {
    return c(I) ? o(I) === !1 ? -1 : !g(I) || !c(E) && !c(k) || !c(k) && h(E) || h(I) && !c(E) || h(I) && f(E) || h(I) && h(E) ? 0 : v(I) && c(E) && !h(E) && c(k) && g(k) ? 3 : h(I) || !c(k) ? 1 : 2 : -1;
  }, p = function(I) {
    var E = 0, k = 0, F = 0, G = "", le = "", fe = "", be = (I = I || "").split("\\s+"), Q = [];
    for (E = 0; E < be.length; E += 1) {
      for (Q.push(""), k = 0; k < be[E].length; k += 1) G = be[E][k], le = be[E][k - 1], fe = be[E][k + 1], c(G) ? (F = x(G, le, fe), Q[E] += F !== -1 ? String.fromCharCode(e[G.charCodeAt(0)][F]) : G) : Q[E] += G;
      Q[E] = m(Q[E]);
    }
    return Q.join(" ");
  }, M = n.__arabicParser__.processArabic = n.processArabic = function() {
    var I, E = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, k = [];
    if (Array.isArray(E)) {
      var F = 0;
      for (k = [], F = 0; F < E.length; F += 1) Array.isArray(E[F]) ? k.push([p(E[F][0]), E[F][1], E[F][2]]) : k.push([p(E[F])]);
      I = k;
    } else I = p(E);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  n.events.push(["preProcessText", M]);
}(Je.API), Je.API.autoPrint = function(n) {
  var e;
  switch ((n = n || {}).variant = n.variant || "non-conform", n.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e + " 0 R");
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
  var e = function() {
    var r = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return r;
    }, set: function(h) {
      r = h;
    } });
    var i = 150;
    Object.defineProperty(this, "width", { get: function() {
      return i;
    }, set: function(h) {
      i = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1);
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
  e.prototype.getContext = function(r, i) {
    var s;
    if ((r = r || "2d") !== "2d") return null;
    for (s in i) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = i[s]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
}(Je.API), function(n) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, r = !1, i = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
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
    var v = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return v;
    }, set: function(I) {
      v = I;
    } });
    var m = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return m;
    }, set: function(I) {
      m = I;
    } });
    var x = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return x;
    }, set: function(I) {
      x = I;
    } });
    var p = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return p;
    }, set: function(I) {
      p = I;
    } });
    var M = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return M;
    }, set: function(I) {
      M = I;
    } }), this;
  };
  o.prototype.clone = function() {
    return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(f) {
    return i.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, n.getTextDimensions = function(f, g) {
    i.call(this);
    var v = (g = g || {}).fontSize || this.getFontSize(), m = g.font || this.getFont(), x = g.scaleFactor || this.internal.scaleFactor, p = 0, M = 0, I = 0, E = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var k = g.maxWidth;
    k > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, k) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(G, le) {
      return G.concat(E.splitTextToSize(le, k));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var F = 0; F < f.length; F++) p < (I = this.getStringUnitWidth(f[F], { font: m }) * v) && (p = I);
    return p !== 0 && (M = f.length), { w: p /= x, h: Math.max((M * v * this.getLineHeightFactor() - v * (this.getLineHeightFactor() - 1)) / x, 0) };
  }, n.cellAddPage = function() {
    i.call(this), this.addPage();
    var f = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var c = n.cell = function() {
    var f;
    f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), i.call(this);
    var g = this.internal.__cell__.lastCell, v = this.internal.__cell__.padding, m = this.internal.__cell__.margins || e, x = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + m.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = m.top, p && x && (this.printHeaderRow(f.lineNumber, !0), f.y += x[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, r === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - v, f.y + v, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + v, { align: "center", baseline: "top", maxWidth: f.width - v - v }) : this.text(f.text, f.x + v, f.y + v, { align: "left", baseline: "top", maxWidth: f.width - v - v })), this.internal.__cell__.lastCell = f, this;
  };
  n.table = function(f, g, v, m, x) {
    if (i.call(this), !v) throw new Error("No data for PDF table.");
    var p, M, I, E, k = [], F = [], G = [], le = {}, fe = {}, be = [], Q = [], q = (x = x || {}).autoSize || !1, ie = x.printHeaders !== !1, de = x.css && x.css["font-size"] !== void 0 ? 16 * x.css["font-size"] : x.fontSize || 12, A = x.margins || Object.assign({ width: this.getPageWidth() }, e), _ = typeof x.padding == "number" ? x.padding : 3, D = x.headerBackgroundColor || "#c8c8c8", R = x.headerTextColor || "#000";
    if (s.call(this), this.internal.__cell__.printHeaders = ie, this.internal.__cell__.margins = A, this.internal.__cell__.table_font_size = de, this.internal.__cell__.padding = _, this.internal.__cell__.headerBackgroundColor = D, this.internal.__cell__.headerTextColor = R, this.setFontSize(de), m == null) F = k = Object.keys(v[0]), G = k.map(function() {
      return "left";
    });
    else if (Array.isArray(m) && xt(m[0]) === "object") for (k = m.map(function(z) {
      return z.name;
    }), F = m.map(function(z) {
      return z.prompt || z.name || "";
    }), G = m.map(function(z) {
      return z.align || "left";
    }), p = 0; p < m.length; p += 1) fe[m[p].name] = m[p].width * (19.049976 / 25.4);
    else Array.isArray(m) && typeof m[0] == "string" && (F = k = m, G = k.map(function() {
      return "left";
    }));
    if (q || Array.isArray(m) && typeof m[0] == "string") for (p = 0; p < k.length; p += 1) {
      for (le[E = k[p]] = v.map(function(z) {
        return z[E];
      }), this.setFont(void 0, "bold"), be.push(this.getTextDimensions(F[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), M = le[E], this.setFont(void 0, "normal"), I = 0; I < M.length; I += 1) be.push(this.getTextDimensions(M[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      fe[E] = Math.max.apply(null, be) + _ + _, be = [];
    }
    if (ie) {
      var ce = {};
      for (p = 0; p < k.length; p += 1) ce[k[p]] = {}, ce[k[p]].text = F[p], ce[k[p]].align = G[p];
      var ae = h.call(this, ce, fe);
      Q = k.map(function(z) {
        return new o(f, g, fe[z], ae, ce[z].text, void 0, ce[z].align);
      }), this.setTableHeaderRow(Q), this.printHeaderRow(1, !1);
    }
    var he = m.reduce(function(z, ue) {
      return z[ue.name] = ue.align, z;
    }, {});
    for (p = 0; p < v.length; p += 1) {
      "rowStart" in x && x.rowStart instanceof Function && x.rowStart({ row: p, data: v[p] }, this);
      var J = h.call(this, v[p], fe);
      for (I = 0; I < k.length; I += 1) {
        var se = v[p][k[I]];
        "cellStart" in x && x.cellStart instanceof Function && x.cellStart({ row: p, col: I, data: se }, this), c.call(this, new o(f, g, fe[k[I]], J, se, p + 2, he[k[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var v = this.internal.__cell__.padding, m = this.internal.__cell__.table_font_size, x = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var M = f[p];
      return this.splitTextToSize(M.hasOwnProperty("text") ? M.text : M, g[p] - v - v);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * m / x + v + v;
    }, this).reduce(function(p, M) {
      return Math.max(p, M);
    }, 0);
  };
  n.setTableHeaderRow = function(f) {
    i.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, n.printHeaderRow = function(f, g) {
    if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var v;
    if (r = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var m = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(m[0], m[1], m[2], m[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var x = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      v = this.internal.__cell__.tableHeaderRow[p].clone(), g && (v.y = this.internal.__cell__.margins.top || 0, x.push(v)), v.lineNumber = f;
      var M = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), c.call(this, v), this.setTextColor(M);
    }
    x.length > 0 && this.setTableHeaderRow(x), this.setFont(void 0, "normal"), r = !1;
  };
}(Je.API);
var c1 = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, l1 = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Qs = s1(l1), u1 = [100, 200, 300, 400, 500, 600, 700, 800, 900], Sh = s1(u1);
function ec(n) {
  var e = n.family.replace(/"|'/g, "").toLowerCase(), r = function(o) {
    return c1[o = o || "normal"] ? o : "normal";
  }(n.style), i = function(o) {
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
    return typeof Qs[o = o || "normal"] == "number" ? o : "normal";
  }(n.stretch);
  return { family: e, style: r, weight: i, stretch: s, src: n.src || [], ref: n.ref || { name: e, style: [s, r, i].join(" ") } };
}
function Pl(n, e, r, i) {
  var s;
  for (s = r; s >= 0 && s < e.length; s += i) if (n[e[s]]) return n[e[s]];
  for (s = r; s >= 0 && s < e.length; s -= i) if (n[e[s]]) return n[e[s]];
}
var _h = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, Il = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function Cl(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function kh(n, e, r) {
  for (var i = (r = r || {}).defaultFontFamily || "times", s = Object.assign({}, _h, r.genericFontFamilies || {}), o = null, c = null, h = 0; h < e.length; ++h) if (s[(o = ec(e[h])).family] && (o.family = s[o.family]), n.hasOwnProperty(o.family)) {
    c = n[o.family];
    break;
  }
  if (!(c = c || n[i])) throw new Error("Could not find a font-family for the rule '" + Cl(o) + "' and default family '" + i + "'.");
  if (c = function(f, g) {
    if (g[f]) return g[f];
    var v = Qs[f], m = v <= Qs.normal ? -1 : 1, x = Pl(g, l1, v, m);
    if (!x) throw new Error("Could not find a matching font-stretch value for " + f);
    return x;
  }(o.stretch, c), c = function(f, g) {
    if (g[f]) return g[f];
    for (var v = c1[f], m = 0; m < v.length; ++m) if (g[v[m]]) return g[v[m]];
    throw new Error("Could not find a matching font-style for " + f);
  }(o.style, c), !(c = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var v = Sh[f], m = Pl(g, u1, v, f < 400 ? -1 : 1);
    if (!m) throw new Error("Could not find a matching font-weight for value " + f);
    return m;
  }(o.weight, c))) throw new Error("Failed to resolve a font for the rule '" + Cl(o) + "'.");
  return c;
}
function jl(n) {
  return n.trimLeft();
}
function Ph(n, e) {
  for (var r = 0; r < n.length; ) {
    if (n.charAt(r) === e) return [n.substring(0, r), n.substring(r + 1)];
    r += 1;
  }
  return null;
}
function Ih(n) {
  var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return e === null ? null : [e[0], n.substring(e[0].length)];
}
var ko, Fl, Ml, qs = ["times"];
(function(n) {
  var e, r, i, s, o, c, h, f, g, v = function(w) {
    return w = w || {}, this.isStrokeTransparent = w.isStrokeTransparent || !1, this.strokeOpacity = w.strokeOpacity || 1, this.strokeStyle = w.strokeStyle || "#000000", this.fillStyle = w.fillStyle || "#000000", this.isFillTransparent = w.isFillTransparent || !1, this.fillOpacity = w.fillOpacity || 1, this.font = w.font || "10px sans-serif", this.textBaseline = w.textBaseline || "alphabetic", this.textAlign = w.textAlign || "left", this.lineWidth = w.lineWidth || 1, this.lineJoin = w.lineJoin || "miter", this.lineCap = w.lineCap || "butt", this.path = w.path || [], this.transform = w.transform !== void 0 ? w.transform.clone() : new f(), this.globalCompositeOperation = w.globalCompositeOperation || "normal", this.globalAlpha = w.globalAlpha || 1, this.clip_path = w.clip_path || [], this.currentPoint = w.currentPoint || new c(), this.miterLimit = w.miterLimit || 10, this.lastPoint = w.lastPoint || new c(), this.lineDashOffset = w.lineDashOffset || 0, this.lineDash = w.lineDash || [], this.margin = w.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = w.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof w.ignoreClearRect != "boolean" || w.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new m(this), e = this.internal.f2, r = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, c = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new v();
  }]);
  var m = function(w) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var C = w;
    Object.defineProperty(this, "pdf", { get: function() {
      return C;
    } });
    var T = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return T;
    }, set: function(me) {
      T = !!me;
    } });
    var U = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return U;
    }, set: function(me) {
      U = !!me;
    } });
    var $ = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return $;
    }, set: function(me) {
      isNaN(me) || ($ = me);
    } });
    var re = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return re;
    }, set: function(me) {
      isNaN(me) || (re = me);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(me) {
      var B;
      typeof me == "number" ? B = [me, me, me, me] : ((B = new Array(4))[0] = me[0], B[1] = me.length >= 2 ? me[1] : B[0], B[2] = me.length >= 3 ? me[2] : B[0], B[3] = me.length >= 4 ? me[3] : B[1]), g.margin = B;
    } });
    var ee = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return ee;
    }, set: function(me) {
      ee = me;
    } });
    var oe = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return oe;
    }, set: function(me) {
      oe = me;
    } });
    var Ie = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return Ie;
    }, set: function(me) {
      Ie = me;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(me) {
      me instanceof v && (g = me);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(me) {
      g.path = me;
    } });
    var ke = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return ke;
    }, set: function(me) {
      ke = me;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(me) {
      var B;
      B = x(me), this.ctx.fillStyle = B.style, this.ctx.isFillTransparent = B.a === 0, this.ctx.fillOpacity = B.a, this.pdf.setFillColor(B.r, B.g, B.b, { a: B.a }), this.pdf.setTextColor(B.r, B.g, B.b, { a: B.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(me) {
      var B = x(me);
      this.ctx.strokeStyle = B.style, this.ctx.isStrokeTransparent = B.a === 0, this.ctx.strokeOpacity = B.a, B.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (B.a, this.pdf.setDrawColor(B.r, B.g, B.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(me) {
      ["butt", "round", "square"].indexOf(me) !== -1 && (this.ctx.lineCap = me, this.pdf.setLineCap(me));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(me) {
      isNaN(me) || (this.ctx.lineWidth = me, this.pdf.setLineWidth(me));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(me) {
      ["bevel", "round", "miter"].indexOf(me) !== -1 && (this.ctx.lineJoin = me, this.pdf.setLineJoin(me));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(me) {
      isNaN(me) || (this.ctx.miterLimit = me, this.pdf.setMiterLimit(me));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(me) {
      this.ctx.textBaseline = me;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(me) {
      ["right", "end", "center", "left", "start"].indexOf(me) !== -1 && (this.ctx.textAlign = me);
    } });
    var Te = null;
    function Re(me, B) {
      if (Te === null) {
        var je = function(Pe) {
          var Ne = [];
          return Object.keys(Pe).forEach(function(_e) {
            Pe[_e].forEach(function(Ee) {
              var Me = null;
              switch (Ee) {
                case "bold":
                  Me = { family: _e, weight: "bold" };
                  break;
                case "italic":
                  Me = { family: _e, style: "italic" };
                  break;
                case "bolditalic":
                  Me = { family: _e, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Me = { family: _e };
              }
              Me !== null && (Me.ref = { name: _e, style: Ee }, Ne.push(Me));
            });
          }), Ne;
        }(me.getFontList());
        Te = function(Pe) {
          for (var Ne = {}, _e = 0; _e < Pe.length; ++_e) {
            var Ee = ec(Pe[_e]), Me = Ee.family, Ve = Ee.stretch, Fe = Ee.style, De = Ee.weight;
            Ne[Me] = Ne[Me] || {}, Ne[Me][Ve] = Ne[Me][Ve] || {}, Ne[Me][Ve][Fe] = Ne[Me][Ve][Fe] || {}, Ne[Me][Ve][Fe][De] = Ee;
          }
          return Ne;
        }(je.concat(B));
      }
      return Te;
    }
    var $e = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return $e;
    }, set: function(me) {
      Te = null, $e = me;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(me) {
      var B;
      if (this.ctx.font = me, (B = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(me)) !== null) {
        var je = B[1];
        B[2];
        var Pe = B[3], Ne = B[4];
        B[5];
        var _e = B[6], Ee = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ne)[2];
        Ne = Math.floor(Ee === "px" ? parseFloat(Ne) * this.pdf.internal.scaleFactor : Ee === "em" ? parseFloat(Ne) * this.pdf.getFontSize() : parseFloat(Ne) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Ne);
        var Me = function(He) {
          var Ae, Ce, Lt = [], ct = He.trim();
          if (ct === "") return qs;
          if (ct in Il) return [Il[ct]];
          for (; ct !== ""; ) {
            switch (Ce = null, Ae = (ct = jl(ct)).charAt(0)) {
              case '"':
              case "'":
                Ce = Ph(ct.substring(1), Ae);
                break;
              default:
                Ce = Ih(ct);
            }
            if (Ce === null || (Lt.push(Ce[0]), (ct = jl(Ce[1])) !== "" && ct.charAt(0) !== ",")) return qs;
            ct = ct.replace(/^,/, "");
          }
          return Lt;
        }(_e);
        if (this.fontFaces) {
          var Ve = kh(Re(this.pdf, this.fontFaces), Me.map(function(He) {
            return { family: He, stretch: "normal", weight: Pe, style: je };
          }));
          this.pdf.setFont(Ve.ref.name, Ve.ref.style);
        } else {
          var Fe = "";
          (Pe === "bold" || parseInt(Pe, 10) >= 700 || je === "bold") && (Fe = "bold"), je === "italic" && (Fe += "italic"), Fe.length === 0 && (Fe = "normal");
          for (var De = "", qe = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ve = 0; ve < Me.length; ve++) {
            if (this.pdf.internal.getFont(Me[ve], Fe, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              De = Me[ve];
              break;
            }
            if (Fe === "bolditalic" && this.pdf.internal.getFont(Me[ve], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) De = Me[ve], Fe = "bold";
            else if (this.pdf.internal.getFont(Me[ve], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              De = Me[ve], Fe = "normal";
              break;
            }
          }
          if (De === "") {
            for (var at = 0; at < Me.length; at++) if (qe[Me[at]]) {
              De = qe[Me[at]];
              break;
            }
          }
          De = De === "" ? "Times" : De, this.pdf.setFont(De, Fe);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(me) {
      this.ctx.globalCompositeOperation = me;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(me) {
      this.ctx.globalAlpha = me;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(me) {
      this.ctx.lineDashOffset = me, ue.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(me) {
      this.ctx.lineDash = me, ue.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(me) {
      this.ctx.ignoreClearRect = !!me;
    } });
  };
  m.prototype.setLineDash = function(w) {
    this.lineDash = w;
  }, m.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, m.prototype.fill = function() {
    le.call(this, "fill", !1);
  }, m.prototype.stroke = function() {
    le.call(this, "stroke", !1);
  }, m.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, m.prototype.moveTo = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw St.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var T = this.ctx.transform.applyToPoint(new c(w, C));
    this.path.push({ type: "mt", x: T.x, y: T.y }), this.ctx.lastPoint = new c(w, C);
  }, m.prototype.closePath = function() {
    var w = new c(0, 0), C = 0;
    for (C = this.path.length - 1; C !== -1; C--) if (this.path[C].type === "begin" && xt(this.path[C + 1]) === "object" && typeof this.path[C + 1].x == "number") {
      w = new c(this.path[C + 1].x, this.path[C + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new c(w.x, w.y);
  }, m.prototype.lineTo = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw St.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var T = this.ctx.transform.applyToPoint(new c(w, C));
    this.path.push({ type: "lt", x: T.x, y: T.y }), this.ctx.lastPoint = new c(T.x, T.y);
  }, m.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), le.call(this, null, !0);
  }, m.prototype.quadraticCurveTo = function(w, C, T, U) {
    if (isNaN(T) || isNaN(U) || isNaN(w) || isNaN(C)) throw St.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var $ = this.ctx.transform.applyToPoint(new c(T, U)), re = this.ctx.transform.applyToPoint(new c(w, C));
    this.path.push({ type: "qct", x1: re.x, y1: re.y, x: $.x, y: $.y }), this.ctx.lastPoint = new c($.x, $.y);
  }, m.prototype.bezierCurveTo = function(w, C, T, U, $, re) {
    if (isNaN($) || isNaN(re) || isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U)) throw St.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var ee = this.ctx.transform.applyToPoint(new c($, re)), oe = this.ctx.transform.applyToPoint(new c(w, C)), Ie = this.ctx.transform.applyToPoint(new c(T, U));
    this.path.push({ type: "bct", x1: oe.x, y1: oe.y, x2: Ie.x, y2: Ie.y, x: ee.x, y: ee.y }), this.ctx.lastPoint = new c(ee.x, ee.y);
  }, m.prototype.arc = function(w, C, T, U, $, re) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U) || isNaN($)) throw St.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (re = !!re, !this.ctx.transform.isIdentity) {
      var ee = this.ctx.transform.applyToPoint(new c(w, C));
      w = ee.x, C = ee.y;
      var oe = this.ctx.transform.applyToPoint(new c(0, T)), Ie = this.ctx.transform.applyToPoint(new c(0, 0));
      T = Math.sqrt(Math.pow(oe.x - Ie.x, 2) + Math.pow(oe.y - Ie.y, 2));
    }
    Math.abs($ - U) >= 2 * Math.PI && (U = 0, $ = 2 * Math.PI), this.path.push({ type: "arc", x: w, y: C, radius: T, startAngle: U, endAngle: $, counterclockwise: re });
  }, m.prototype.arcTo = function(w, C, T, U, $) {
    throw new Error("arcTo not implemented.");
  }, m.prototype.rect = function(w, C, T, U) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U)) throw St.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(w, C), this.lineTo(w + T, C), this.lineTo(w + T, C + U), this.lineTo(w, C + U), this.lineTo(w, C), this.lineTo(w + T, C), this.lineTo(w, C);
  }, m.prototype.fillRect = function(w, C, T, U) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U)) throw St.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var $ = {};
      this.lineCap !== "butt" && ($.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && ($.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(w, C, T, U), this.fill(), $.hasOwnProperty("lineCap") && (this.lineCap = $.lineCap), $.hasOwnProperty("lineJoin") && (this.lineJoin = $.lineJoin);
    }
  }, m.prototype.strokeRect = function(w, C, T, U) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U)) throw St.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    M.call(this) || (this.beginPath(), this.rect(w, C, T, U), this.stroke());
  }, m.prototype.clearRect = function(w, C, T, U) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U)) throw St.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(w, C, T, U));
  }, m.prototype.save = function(w) {
    w = typeof w != "boolean" || w;
    for (var C = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(C), w) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var U = new v(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = U;
    }
  }, m.prototype.restore = function(w) {
    w = typeof w != "boolean" || w;
    for (var C = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(C), w && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, m.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var x = function(w) {
    var C, T, U, $;
    if (w.isCanvasGradient === !0 && (w = w.getColor()), !w) return { r: 0, g: 0, b: 0, a: 0, style: w };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(w)) C = 0, T = 0, U = 0, $ = 0;
    else {
      var re = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(w);
      if (re !== null) C = parseInt(re[1]), T = parseInt(re[2]), U = parseInt(re[3]), $ = 1;
      else if ((re = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(w)) !== null) C = parseInt(re[1]), T = parseInt(re[2]), U = parseInt(re[3]), $ = parseFloat(re[4]);
      else {
        if ($ = 1, typeof w == "string" && w.charAt(0) !== "#") {
          var ee = new t1(w);
          w = ee.ok ? ee.toHex() : "#000000";
        }
        w.length === 4 ? (C = w.substring(1, 2), C += C, T = w.substring(2, 3), T += T, U = w.substring(3, 4), U += U) : (C = w.substring(1, 3), T = w.substring(3, 5), U = w.substring(5, 7)), C = parseInt(C, 16), T = parseInt(T, 16), U = parseInt(U, 16);
      }
    }
    return { r: C, g: T, b: U, a: $, style: w };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, M = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  m.prototype.fillText = function(w, C, T, U) {
    if (isNaN(C) || isNaN(T) || typeof w != "string") throw St.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (U = isNaN(U) ? void 0 : U, !p.call(this)) {
      var $ = J(this.ctx.transform.rotation), re = this.ctx.transform.scaleX;
      _.call(this, { text: w, x: C, y: T, scale: re, angle: $, align: this.textAlign, maxWidth: U });
    }
  }, m.prototype.strokeText = function(w, C, T, U) {
    if (isNaN(C) || isNaN(T) || typeof w != "string") throw St.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!M.call(this)) {
      U = isNaN(U) ? void 0 : U;
      var $ = J(this.ctx.transform.rotation), re = this.ctx.transform.scaleX;
      _.call(this, { text: w, x: C, y: T, scale: re, renderingMode: "stroke", angle: $, align: this.textAlign, maxWidth: U });
    }
  }, m.prototype.measureText = function(w) {
    if (typeof w != "string") throw St.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var C = this.pdf, T = this.pdf.internal.scaleFactor, U = C.internal.getFontSize(), $ = C.getStringUnitWidth(w) * U / C.internal.scaleFactor, re = function(ee) {
      var oe = (ee = ee || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return oe;
      } }), this;
    };
    return new re({ width: $ *= Math.round(96 * T / 72 * 1e4) / 1e4 });
  }, m.prototype.scale = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw St.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var T = new f(w, 0, 0, C, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, m.prototype.rotate = function(w) {
    if (isNaN(w)) throw St.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var C = new f(Math.cos(w), Math.sin(w), -Math.sin(w), Math.cos(w), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(C);
  }, m.prototype.translate = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw St.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var T = new f(1, 0, 0, 1, w, C);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, m.prototype.transform = function(w, C, T, U, $, re) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(U) || isNaN($) || isNaN(re)) throw St.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var ee = new f(w, C, T, U, $, re);
    this.ctx.transform = this.ctx.transform.multiply(ee);
  }, m.prototype.setTransform = function(w, C, T, U, $, re) {
    w = isNaN(w) ? 1 : w, C = isNaN(C) ? 0 : C, T = isNaN(T) ? 0 : T, U = isNaN(U) ? 1 : U, $ = isNaN($) ? 0 : $, re = isNaN(re) ? 0 : re, this.ctx.transform = new f(w, C, T, U, $, re);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  m.prototype.drawImage = function(w, C, T, U, $, re, ee, oe, Ie) {
    var ke = this.pdf.getImageProperties(w), Te = 1, Re = 1, $e = 1, me = 1;
    U !== void 0 && oe !== void 0 && ($e = oe / U, me = Ie / $, Te = ke.width / U * oe / U, Re = ke.height / $ * Ie / $), re === void 0 && (re = C, ee = T, C = 0, T = 0), U !== void 0 && oe === void 0 && (oe = U, Ie = $), U === void 0 && oe === void 0 && (oe = ke.width, Ie = ke.height);
    for (var B, je = this.ctx.transform.decompose(), Pe = J(je.rotate.shx), Ne = new f(), _e = (Ne = (Ne = (Ne = Ne.multiply(je.translate)).multiply(je.skew)).multiply(je.scale)).applyToRectangle(new h(re - C * $e, ee - T * me, U * Te, $ * Re)), Ee = E.call(this, _e), Me = [], Ve = 0; Ve < Ee.length; Ve += 1) Me.indexOf(Ee[Ve]) === -1 && Me.push(Ee[Ve]);
    if (G(Me), this.autoPaging) for (var Fe = Me[0], De = Me[Me.length - 1], qe = Fe; qe < De + 1; qe++) {
      this.pdf.setPage(qe);
      var ve = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], at = qe === 1 ? this.posY + this.margin[0] : this.margin[0], He = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ae = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Ce = qe === 1 ? 0 : He + (qe - 2) * Ae;
      if (this.ctx.clip_path.length !== 0) {
        var Lt = this.path;
        B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(B, this.posX + this.margin[3], -Ce + at + this.ctx.prevPageLastElemOffset), fe.call(this, "fill", !0), this.path = Lt;
      }
      var ct = JSON.parse(JSON.stringify(_e));
      ct = F([ct], this.posX + this.margin[3], -Ce + at + this.ctx.prevPageLastElemOffset)[0];
      var Gt = (qe > Fe || qe < De) && I.call(this);
      Gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ve, Ae, null).clip().discardPath()), this.pdf.addImage(w, "JPEG", ct.x, ct.y, ct.w, ct.h, null, null, Pe), Gt && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(w, "JPEG", _e.x, _e.y, _e.w, _e.h, null, null, Pe);
  };
  var E = function(w, C, T) {
    var U = [];
    C = C || this.pdf.internal.pageSize.width, T = T || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var $ = this.posY + this.ctx.prevPageLastElemOffset;
    switch (w.type) {
      default:
      case "mt":
      case "lt":
        U.push(Math.floor((w.y + $) / T) + 1);
        break;
      case "arc":
        U.push(Math.floor((w.y + $ - w.radius) / T) + 1), U.push(Math.floor((w.y + $ + w.radius) / T) + 1);
        break;
      case "qct":
        var re = se(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x, w.y);
        U.push(Math.floor((re.y + $) / T) + 1), U.push(Math.floor((re.y + re.h + $) / T) + 1);
        break;
      case "bct":
        var ee = z(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x2, w.y2, w.x, w.y);
        U.push(Math.floor((ee.y + $) / T) + 1), U.push(Math.floor((ee.y + ee.h + $) / T) + 1);
        break;
      case "rect":
        U.push(Math.floor((w.y + $) / T) + 1), U.push(Math.floor((w.y + w.h + $) / T) + 1);
    }
    for (var oe = 0; oe < U.length; oe += 1) for (; this.pdf.internal.getNumberOfPages() < U[oe]; ) k.call(this);
    return U;
  }, k = function() {
    var w = this.fillStyle, C = this.strokeStyle, T = this.font, U = this.lineCap, $ = this.lineWidth, re = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = w, this.strokeStyle = C, this.font = T, this.lineCap = U, this.lineWidth = $, this.lineJoin = re;
  }, F = function(w, C, T) {
    for (var U = 0; U < w.length; U++) switch (w[U].type) {
      case "bct":
        w[U].x2 += C, w[U].y2 += T;
      case "qct":
        w[U].x1 += C, w[U].y1 += T;
      case "mt":
      case "lt":
      case "arc":
      default:
        w[U].x += C, w[U].y += T;
    }
    return w;
  }, G = function(w) {
    return w.sort(function(C, T) {
      return C - T;
    });
  }, le = function(w, C) {
    for (var T, U, $ = this.fillStyle, re = this.strokeStyle, ee = this.lineCap, oe = this.lineWidth, Ie = Math.abs(oe * this.ctx.transform.scaleX), ke = this.lineJoin, Te = JSON.parse(JSON.stringify(this.path)), Re = JSON.parse(JSON.stringify(this.path)), $e = [], me = 0; me < Re.length; me++) if (Re[me].x !== void 0) for (var B = E.call(this, Re[me]), je = 0; je < B.length; je += 1) $e.indexOf(B[je]) === -1 && $e.push(B[je]);
    for (var Pe = 0; Pe < $e.length; Pe++) for (; this.pdf.internal.getNumberOfPages() < $e[Pe]; ) k.call(this);
    if (G($e), this.autoPaging) for (var Ne = $e[0], _e = $e[$e.length - 1], Ee = Ne; Ee < _e + 1; Ee++) {
      this.pdf.setPage(Ee), this.fillStyle = $, this.strokeStyle = re, this.lineCap = ee, this.lineWidth = Ie, this.lineJoin = ke;
      var Me = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ve = Ee === 1 ? this.posY + this.margin[0] : this.margin[0], Fe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], De = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], qe = Ee === 1 ? 0 : Fe + (Ee - 2) * De;
      if (this.ctx.clip_path.length !== 0) {
        var ve = this.path;
        T = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(T, this.posX + this.margin[3], -qe + Ve + this.ctx.prevPageLastElemOffset), fe.call(this, w, !0), this.path = ve;
      }
      if (U = JSON.parse(JSON.stringify(Te)), this.path = F(U, this.posX + this.margin[3], -qe + Ve + this.ctx.prevPageLastElemOffset), C === !1 || Ee === 0) {
        var at = (Ee > Ne || Ee < _e) && I.call(this);
        at && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Me, De, null).clip().discardPath()), fe.call(this, w, C), at && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = oe;
    }
    else this.lineWidth = Ie, fe.call(this, w, C), this.lineWidth = oe;
    this.path = Te;
  }, fe = function(w, C) {
    if ((w !== "stroke" || C || !M.call(this)) && (w === "stroke" || C || !p.call(this))) {
      for (var T, U, $ = [], re = this.path, ee = 0; ee < re.length; ee++) {
        var oe = re[ee];
        switch (oe.type) {
          case "begin":
            $.push({ begin: !0 });
            break;
          case "close":
            $.push({ close: !0 });
            break;
          case "mt":
            $.push({ start: oe, deltas: [], abs: [] });
            break;
          case "lt":
            var Ie = $.length;
            if (re[ee - 1] && !isNaN(re[ee - 1].x) && (T = [oe.x - re[ee - 1].x, oe.y - re[ee - 1].y], Ie > 0)) {
              for (; Ie >= 0; Ie--) if ($[Ie - 1].close !== !0 && $[Ie - 1].begin !== !0) {
                $[Ie - 1].deltas.push(T), $[Ie - 1].abs.push(oe);
                break;
              }
            }
            break;
          case "bct":
            T = [oe.x1 - re[ee - 1].x, oe.y1 - re[ee - 1].y, oe.x2 - re[ee - 1].x, oe.y2 - re[ee - 1].y, oe.x - re[ee - 1].x, oe.y - re[ee - 1].y], $[$.length - 1].deltas.push(T);
            break;
          case "qct":
            var ke = re[ee - 1].x + 2 / 3 * (oe.x1 - re[ee - 1].x), Te = re[ee - 1].y + 2 / 3 * (oe.y1 - re[ee - 1].y), Re = oe.x + 2 / 3 * (oe.x1 - oe.x), $e = oe.y + 2 / 3 * (oe.y1 - oe.y), me = oe.x, B = oe.y;
            T = [ke - re[ee - 1].x, Te - re[ee - 1].y, Re - re[ee - 1].x, $e - re[ee - 1].y, me - re[ee - 1].x, B - re[ee - 1].y], $[$.length - 1].deltas.push(T);
            break;
          case "arc":
            $.push({ deltas: [], abs: [], arc: !0 }), Array.isArray($[$.length - 1].abs) && $[$.length - 1].abs.push(oe);
        }
      }
      U = C ? null : w === "stroke" ? "stroke" : "fill";
      for (var je = !1, Pe = 0; Pe < $.length; Pe++) if ($[Pe].arc) for (var Ne = $[Pe].abs, _e = 0; _e < Ne.length; _e++) {
        var Ee = Ne[_e];
        Ee.type === "arc" ? q.call(this, Ee.x, Ee.y, Ee.radius, Ee.startAngle, Ee.endAngle, Ee.counterclockwise, void 0, C, !je) : D.call(this, Ee.x, Ee.y), je = !0;
      }
      else if ($[Pe].close === !0) this.pdf.internal.out("h"), je = !1;
      else if ($[Pe].begin !== !0) {
        var Me = $[Pe].start.x, Ve = $[Pe].start.y;
        R.call(this, $[Pe].deltas, Me, Ve), je = !0;
      }
      U && ie.call(this, U), C && de.call(this);
    }
  }, be = function(w) {
    var C = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, T = C * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return w - T;
      case "top":
        return w + C - T;
      case "hanging":
        return w + C - 2 * T;
      case "middle":
        return w + C / 2 - T;
      case "ideographic":
        return w;
      case "alphabetic":
      default:
        return w;
    }
  }, Q = function(w) {
    return w + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  m.prototype.createLinearGradient = function() {
    var w = function() {
    };
    return w.colorStops = [], w.addColorStop = function(C, T) {
      this.colorStops.push([C, T]);
    }, w.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, w.isCanvasGradient = !0, w;
  }, m.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, m.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var q = function(w, C, T, U, $, re, ee, oe, Ie) {
    for (var ke = ae.call(this, T, U, $, re), Te = 0; Te < ke.length; Te++) {
      var Re = ke[Te];
      Te === 0 && (Ie ? A.call(this, Re.x1 + w, Re.y1 + C) : D.call(this, Re.x1 + w, Re.y1 + C)), ce.call(this, w, C, Re.x2, Re.y2, Re.x3, Re.y3, Re.x4, Re.y4);
    }
    oe ? de.call(this) : ie.call(this, ee);
  }, ie = function(w) {
    switch (w) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, de = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, A = function(w, C) {
    this.pdf.internal.out(r(w) + " " + i(C) + " m");
  }, _ = function(w) {
    var C;
    switch (w.align) {
      case "right":
      case "end":
        C = "right";
        break;
      case "center":
        C = "center";
        break;
      case "left":
      case "start":
      default:
        C = "left";
    }
    var T = this.pdf.getTextDimensions(w.text), U = be.call(this, w.y), $ = Q.call(this, U) - T.h, re = this.ctx.transform.applyToPoint(new c(w.x, U)), ee = this.ctx.transform.decompose(), oe = new f();
    oe = (oe = (oe = oe.multiply(ee.translate)).multiply(ee.skew)).multiply(ee.scale);
    for (var Ie, ke, Te, Re = this.ctx.transform.applyToRectangle(new h(w.x, U, T.w, T.h)), $e = oe.applyToRectangle(new h(w.x, $, T.w, T.h)), me = E.call(this, $e), B = [], je = 0; je < me.length; je += 1) B.indexOf(me[je]) === -1 && B.push(me[je]);
    if (G(B), this.autoPaging) for (var Pe = B[0], Ne = B[B.length - 1], _e = Pe; _e < Ne + 1; _e++) {
      this.pdf.setPage(_e);
      var Ee = _e === 1 ? this.posY + this.margin[0] : this.margin[0], Me = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ve = this.pdf.internal.pageSize.height - this.margin[2], Fe = Ve - this.margin[0], De = this.pdf.internal.pageSize.width - this.margin[1], qe = De - this.margin[3], ve = _e === 1 ? 0 : Me + (_e - 2) * Fe;
      if (this.ctx.clip_path.length !== 0) {
        var at = this.path;
        Ie = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(Ie, this.posX + this.margin[3], -1 * ve + Ee), fe.call(this, "fill", !0), this.path = at;
      }
      var He = F([JSON.parse(JSON.stringify($e))], this.posX + this.margin[3], -ve + Ee + this.ctx.prevPageLastElemOffset)[0];
      w.scale >= 0.01 && (ke = this.pdf.internal.getFontSize(), this.pdf.setFontSize(ke * w.scale), Te = this.lineWidth, this.lineWidth = Te * w.scale);
      var Ae = this.autoPaging !== "text";
      if (Ae || He.y + He.h <= Ve) {
        if (Ae || He.y >= Ee && He.x <= De) {
          var Ce = Ae ? w.text : this.pdf.splitTextToSize(w.text, w.maxWidth || De - He.x)[0], Lt = F([JSON.parse(JSON.stringify(Re))], this.posX + this.margin[3], -ve + Ee + this.ctx.prevPageLastElemOffset)[0], ct = Ae && (_e > Pe || _e < Ne) && I.call(this);
          ct && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], qe, Fe, null).clip().discardPath()), this.pdf.text(Ce, Lt.x, Lt.y, { angle: w.angle, align: C, renderingMode: w.renderingMode }), ct && this.pdf.restoreGraphicsState();
        }
      } else He.y < Ve && (this.ctx.prevPageLastElemOffset += Ve - He.y);
      w.scale >= 0.01 && (this.pdf.setFontSize(ke), this.lineWidth = Te);
    }
    else w.scale >= 0.01 && (ke = this.pdf.internal.getFontSize(), this.pdf.setFontSize(ke * w.scale), Te = this.lineWidth, this.lineWidth = Te * w.scale), this.pdf.text(w.text, re.x + this.posX, re.y + this.posY, { angle: w.angle, align: C, renderingMode: w.renderingMode, maxWidth: w.maxWidth }), w.scale >= 0.01 && (this.pdf.setFontSize(ke), this.lineWidth = Te);
  }, D = function(w, C, T, U) {
    T = T || 0, U = U || 0, this.pdf.internal.out(r(w + T) + " " + i(C + U) + " l");
  }, R = function(w, C, T) {
    return this.pdf.lines(w, C, T, null, null);
  }, ce = function(w, C, T, U, $, re, ee, oe) {
    this.pdf.internal.out([e(s(T + w)), e(o(U + C)), e(s($ + w)), e(o(re + C)), e(s(ee + w)), e(o(oe + C)), "c"].join(" "));
  }, ae = function(w, C, T, U) {
    for (var $ = 2 * Math.PI, re = Math.PI / 2; C > T; ) C -= $;
    var ee = Math.abs(T - C);
    ee < $ && U && (ee = $ - ee);
    for (var oe = [], Ie = U ? -1 : 1, ke = C; ee > 1e-5; ) {
      var Te = ke + Ie * Math.min(ee, re);
      oe.push(he.call(this, w, ke, Te)), ee -= Math.abs(Te - ke), ke = Te;
    }
    return oe;
  }, he = function(w, C, T) {
    var U = (T - C) / 2, $ = w * Math.cos(U), re = w * Math.sin(U), ee = $, oe = -re, Ie = ee * ee + oe * oe, ke = Ie + ee * $ + oe * re, Te = 4 / 3 * (Math.sqrt(2 * Ie * ke) - ke) / (ee * re - oe * $), Re = ee - Te * oe, $e = oe + Te * ee, me = Re, B = -$e, je = U + C, Pe = Math.cos(je), Ne = Math.sin(je);
    return { x1: w * Math.cos(C), y1: w * Math.sin(C), x2: Re * Pe - $e * Ne, y2: Re * Ne + $e * Pe, x3: me * Pe - B * Ne, y3: me * Ne + B * Pe, x4: w * Math.cos(T), y4: w * Math.sin(T) };
  }, J = function(w) {
    return 180 * w / Math.PI;
  }, se = function(w, C, T, U, $, re) {
    var ee = w + 0.5 * (T - w), oe = C + 0.5 * (U - C), Ie = $ + 0.5 * (T - $), ke = re + 0.5 * (U - re), Te = Math.min(w, $, ee, Ie), Re = Math.max(w, $, ee, Ie), $e = Math.min(C, re, oe, ke), me = Math.max(C, re, oe, ke);
    return new h(Te, $e, Re - Te, me - $e);
  }, z = function(w, C, T, U, $, re, ee, oe) {
    var Ie, ke, Te, Re, $e, me, B, je, Pe, Ne, _e, Ee, Me, Ve, Fe = T - w, De = U - C, qe = $ - T, ve = re - U, at = ee - $, He = oe - re;
    for (ke = 0; ke < 41; ke++) Pe = (B = (Te = w + (Ie = ke / 40) * Fe) + Ie * (($e = T + Ie * qe) - Te)) + Ie * ($e + Ie * ($ + Ie * at - $e) - B), Ne = (je = (Re = C + Ie * De) + Ie * ((me = U + Ie * ve) - Re)) + Ie * (me + Ie * (re + Ie * He - me) - je), ke == 0 ? (_e = Pe, Ee = Ne, Me = Pe, Ve = Ne) : (_e = Math.min(_e, Pe), Ee = Math.min(Ee, Ne), Me = Math.max(Me, Pe), Ve = Math.max(Ve, Ne));
    return new h(Math.round(_e), Math.round(Ee), Math.round(Me - _e), Math.round(Ve - Ee));
  }, ue = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var w, C, T = (w = this.ctx.lineDash, C = this.ctx.lineDashOffset, JSON.stringify({ lineDash: w, lineDashOffset: C }));
      this.prevLineDash !== T && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = T);
    }
  };
})(Je.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function(o) {
    var c, h, f, g, v, m, x, p, M, I;
    for (h = [], f = 0, g = (o += c = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > f; f += 4) (v = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (m = (v = ((v = ((v = ((v = (v - (I = v % 85)) / 85) - (M = v % 85)) / 85) - (p = v % 85)) / 85) - (x = v % 85)) / 85) % 85, h.push(m + 33, x + 33, p + 33, M + 33, I + 33)) : h.push(122);
    return function(E, k) {
      for (var F = k; F > 0; F--) E.pop();
    }(h, c.length), String.fromCharCode.apply(String, h) + "~>";
  }, r = function(o) {
    var c, h, f, g, v, m = String, x = "length", p = 255, M = "charCodeAt", I = "slice", E = "replace";
    for (o[I](-2), o = o[I](0, -2)[E](/\s/g, "")[E]("z", "!!!!!"), f = [], g = 0, v = (o += c = "uuuuu"[I](o[x] % 5 || 5))[x]; v > g; g += 5) h = 52200625 * (o[M](g) - 33) + 614125 * (o[M](g + 1) - 33) + 7225 * (o[M](g + 2) - 33) + 85 * (o[M](g + 3) - 33) + (o[M](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(k, F) {
      for (var G = F; G > 0; G--) k.pop();
    }(f, c[x]), m.fromCharCode.apply(m, f);
  }, i = function(o) {
    var c = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), c.test(o) === !1) return "";
    for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
    return h;
  }, s = function(o) {
    for (var c = new Uint8Array(o.length), h = o.length; h--; ) c[h] = o.charCodeAt(h);
    return o = (c = $s(c)).reduce(function(f, g) {
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
        f = e(f), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = i(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(v) {
          return ("0" + v.charCodeAt().toString(16)).slice(-2);
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
}(Je.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.loadFile = function(e, r, i) {
    return function(s, o, c) {
      o = o !== !1, c = typeof c == "function" ? c : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, v) {
          var m = new XMLHttpRequest(), x = 0, p = function(M) {
            var I = M.length, E = [], k = String.fromCharCode;
            for (x = 0; x < I; x += 1) E.push(k(255 & M.charCodeAt(x)));
            return E.join("");
          };
          if (m.open("GET", f, !g), m.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (m.onload = function() {
            m.status === 200 ? v(p(this.responseText)) : v(void 0);
          }), m.send(null), g && m.status === 200) return p(m.responseText);
        }(s, o, c);
      } catch {
      }
      return h;
    }(e, r, i);
  }, n.loadImageFile = n.loadFile;
}(Je.API), function(n) {
  function e() {
    return (Ze.html2canvas ? Promise.resolve(Ze.html2canvas) : import("./html2canvas.esm-DgdJBc_o.mjs")).catch(function(c) {
      return Promise.reject(new Error("Could not load html2canvas: " + c));
    }).then(function(c) {
      return c.default ? c.default : c;
    });
  }
  function r() {
    return (Ze.DOMPurify ? Promise.resolve(Ze.DOMPurify) : import("./purify.es-DHbHSKL1.mjs")).catch(function(c) {
      return Promise.reject(new Error("Could not load dompurify: " + c));
    }).then(function(c) {
      return c.default ? c.default : c;
    });
  }
  var i = function(c) {
    var h = xt(c);
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
        switch (i(f)) {
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
      var c = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, v) {
        for (var m = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), x = g.firstChild; x; x = x.nextSibling) v !== !0 && x.nodeType === 1 && x.nodeName === "SCRIPT" || m.appendChild(f(x, v));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (m.width = g.width, m.height = g.height, m.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (m.value = g.value), m.addEventListener("load", function() {
          m.scrollTop = g.scrollTop, m.scrollLeft = g.scrollLeft;
        }, !0)), m;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (c.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = s("div", { className: "html2pdf__container", style: c }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var c = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(c).then(e).then(function(h) {
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
    return this.thenList(c).then(e).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, v = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, m = Object.assign({ async: !0, allowTaint: !0, scale: v, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete m.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = g, g) for (var x = 0; x < g.length; ++x) {
        var p = g[x], M = p.src.find(function(I) {
          return I.format === "truetype";
        });
        M && f.addFont(M.url, p.ref.name, p.ref.style);
      }
      return m.windowHeight = m.windowHeight || 0, m.windowHeight = m.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : m.windowHeight, f.context2d.save(!0), h(this.prop.container, m);
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
    if (i(c) !== "object") return this;
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
      switch (i(c)) {
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
      (c = c || Je.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (c.inner = { width: c.width - this.opt.margin[1] - this.opt.margin[3], height: c.height - this.opt.margin[0] - this.opt.margin[2] }, c.inner.px = { width: h(c.inner.width, c.k), height: h(c.inner.height, c.k) }, c.inner.ratio = c.inner.height / c.inner.width), this.prop.pageSize = c;
    });
  }, o.prototype.setProgress = function(c, h, f, g) {
    return c != null && (this.progress.val = c), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(c, h, f, g) {
    return this.setProgress(c ? this.progress.val + c : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(c, h) {
    var f = this;
    return this.thenCore(c, h, function(g, v) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(m) {
        return f.updateProgress(null, g), m;
      }).then(g, v).then(function(m) {
        return f.updateProgress(1), m;
      });
    });
  }, o.prototype.thenCore = function(c, h, f) {
    f = f || Promise.prototype.then, c && (c = c.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), v = f.call(g, c, h);
    return o.convert(v, this.__proto__);
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
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Je.getPageSize = function(c, h, f) {
    if (xt(c) === "object") {
      var g = c;
      c = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", c = ("" + (c || "P")).toLowerCase();
    var v, m = ("" + f).toLowerCase(), x = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        v = 1;
        break;
      case "mm":
        v = 72 / 25.4;
        break;
      case "cm":
        v = 72 / 2.54;
        break;
      case "in":
        v = 72;
        break;
      case "px":
        v = 0.75;
        break;
      case "pc":
      case "em":
        v = 12;
        break;
      case "ex":
        v = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var p, M = 0, I = 0;
    if (x.hasOwnProperty(m)) M = x[m][1] / v, I = x[m][0] / v;
    else try {
      M = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (c === "p" || c === "portrait") c = "p", I > M && (p = I, I = M, M = p);
    else {
      if (c !== "l" && c !== "landscape") throw "Invalid orientation: " + c;
      c = "l", M > I && (p = I, I = M, M = p);
    }
    return { width: I, height: M, unit: h, k: v, orientation: c };
  }, n.html = function(c, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(ec) : null;
    var f = new o(h);
    return h.worker ? f : f.from(c).doCallback();
  };
}(Je.API), Je.API.addJS = function(n) {
  return Ml = n, this.internal.events.subscribe("postPutResources", function() {
    ko = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (ko + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Fl = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + Ml + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    ko !== void 0 && Fl !== void 0 && this.internal.out("/Names <</JavaScript " + ko + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e;
  n.events.push(["postPutResources", function() {
    var r = this, i = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var s = r.outline.render().split(/\r\n/), o = 0; o < s.length; o++) {
      var c = s[o], h = i.exec(c);
      if (h != null) {
        var f = h[1];
        r.internal.newObjectDeferredBegin(f, !1);
      }
      r.internal.write(c);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, v = [];
      for (o = 0; o < g; o++) {
        var m = r.internal.newObject();
        v.push(m);
        var x = r.internal.getPageInfo(o + 1);
        r.internal.write("<< /D[" + x.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = r.internal.newObject();
      for (r.internal.write("<< /Names [ "), o = 0; o < v.length; o++) r.internal.write("(page_" + (o + 1) + ")" + v[o] + " 0 R");
      r.internal.write(" ] >>", "endobj"), e = r.internal.newObject(), r.internal.write("<< /Dests " + p + " 0 R"), r.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var r = this;
    r.outline = { createNamedDestinations: !1, root: { children: [] } }, r.outline.add = function(i, s, o) {
      var c = { title: s, options: o, children: [] };
      return i == null && (i = this.root), i.children.push(c), c;
    }, r.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = r, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, r.outline.genIds_r = function(i) {
      i.id = r.internal.newObjectDeferred();
      for (var s = 0; s < i.children.length; s++) this.genIds_r(i.children[s]);
    }, r.outline.renderRoot = function(i) {
      this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, i)), this.objEnd();
    }, r.outline.renderItems = function(i) {
      for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < i.children.length; o++) {
        var c = i.children[o];
        this.objStart(c), this.line("/Title " + this.makeString(c.title)), this.line("/Parent " + this.makeRef(i)), o > 0 && this.line("/Prev " + this.makeRef(i.children[o - 1])), o < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[o + 1])), c.children.length > 0 && (this.line("/First " + this.makeRef(c.children[0])), this.line("/Last " + this.makeRef(c.children[c.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, c);
        if (h > 0 && this.line("/Count " + h), c.options && c.options.pageNumber) {
          var f = r.internal.getPageInfo(c.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < i.children.length; g++) this.renderItems(i.children[g]);
    }, r.outline.line = function(i) {
      this.ctx.val += i + `\r
`;
    }, r.outline.makeRef = function(i) {
      return i.id + " 0 R";
    }, r.outline.makeString = function(i) {
      return "(" + r.internal.pdfEscape(i) + ")";
    }, r.outline.objStart = function(i) {
      this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`;
    }, r.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, r.outline.count_r = function(i, s) {
      for (var o = 0; o < s.children.length; o++) i.count++, this.count_r(i, s.children[o]);
      return i.count;
    };
  }]);
}(Je.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(r, i, s, o, c, h) {
    var f, g = this.decode.DCT_DECODE, v = null;
    if (typeof r == "string" || this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) {
      switch (r = c || r, r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r, (f = function(m) {
        for (var x, p = 256 * m.charCodeAt(4) + m.charCodeAt(5), M = m.length, I = { width: 0, height: 0, numcomponents: 1 }, E = 4; E < M; E += 2) {
          if (E += p, e.indexOf(m.charCodeAt(E + 1)) !== -1) {
            x = 256 * m.charCodeAt(E + 5) + m.charCodeAt(E + 6), I = { width: 256 * m.charCodeAt(E + 7) + m.charCodeAt(E + 8), height: x, numcomponents: m.charCodeAt(E + 9) };
            break;
          }
          p = 256 * m.charCodeAt(E + 2) + m.charCodeAt(E + 3);
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
      v = { data: r, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: i, alias: s };
    }
    return v;
  };
}(Je.API);
var zi, Po, El, Ol, Rl, Ch = function() {
  var n, e, r;
  function i(o) {
    var c, h, f, g, v, m, x, p, M, I, E, k, F, G;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, m = null; ; ) {
      switch (c = this.readUInt32(), M = (function() {
        var le, fe;
        for (fe = [], le = 0; le < 4; ++le) fe.push(String.fromCharCode(this.data[this.pos++]));
        return fe;
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
          m && this.animation.frames.push(m), this.pos += 4, m = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, v = this.readUInt16(), g = this.readUInt16() || 100, m.delay = 1e3 * v / g, m.disposeOp = this.data[this.pos++], m.blendOp = this.data[this.pos++], m.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (M === "fdAT" && (this.pos += 4, c -= 4), o = (m != null ? m.data : void 0) || this.imgData, k = 0; 0 <= c ? k < c : k > c; 0 <= c ? ++k : --k) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(c), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (F = 0; 0 <= I ? F < I : F > I; 0 <= I ? ++F : --F) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(c)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(c);
          }
          break;
        case "tEXt":
          x = (E = this.read(c)).indexOf(0), p = String.fromCharCode.apply(String, E.slice(0, x)), this.text[p] = String.fromCharCode.apply(String, E.slice(x + 1));
          break;
        case "IEND":
          return m && this.animation.frames.push(m), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (G = this.colorType) === 4 || G === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
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
  i.prototype.read = function(o) {
    var c, h;
    for (h = [], c = 0; 0 <= o ? c < o : c > o; 0 <= o ? ++c : --c) h.push(this.data[this.pos++]);
    return h;
  }, i.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, i.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, i.prototype.decodePixels = function(o) {
    var c = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * c), f = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function v(m, x, p, M) {
      var I, E, k, F, G, le, fe, be, Q, q, ie, de, A, _, D, R, ce, ae, he, J, se, z = Math.ceil((g.width - m) / p), ue = Math.ceil((g.height - x) / M), w = g.width == z && g.height == ue;
      for (_ = c * z, de = w ? h : new Uint8Array(_ * ue), le = o.length, A = 0, E = 0; A < ue && f < le; ) {
        switch (o[f++]) {
          case 0:
            for (F = ce = 0; ce < _; F = ce += 1) de[E++] = o[f++];
            break;
          case 1:
            for (F = ae = 0; ae < _; F = ae += 1) I = o[f++], G = F < c ? 0 : de[E - c], de[E++] = (I + G) % 256;
            break;
          case 2:
            for (F = he = 0; he < _; F = he += 1) I = o[f++], k = (F - F % c) / c, D = A && de[(A - 1) * _ + k * c + F % c], de[E++] = (D + I) % 256;
            break;
          case 3:
            for (F = J = 0; J < _; F = J += 1) I = o[f++], k = (F - F % c) / c, G = F < c ? 0 : de[E - c], D = A && de[(A - 1) * _ + k * c + F % c], de[E++] = (I + Math.floor((G + D) / 2)) % 256;
            break;
          case 4:
            for (F = se = 0; se < _; F = se += 1) I = o[f++], k = (F - F % c) / c, G = F < c ? 0 : de[E - c], A === 0 ? D = R = 0 : (D = de[(A - 1) * _ + k * c + F % c], R = k && de[(A - 1) * _ + (k - 1) * c + F % c]), fe = G + D - R, be = Math.abs(fe - G), q = Math.abs(fe - D), ie = Math.abs(fe - R), Q = be <= q && be <= ie ? G : q <= ie ? D : R, de[E++] = (I + Q) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[f - 1]);
        }
        if (!w) {
          var C = ((x + A * M) * g.width + m) * c, T = A * _;
          for (F = 0; F < z; F += 1) {
            for (var U = 0; U < c; U += 1) h[C++] = de[T++];
            C += (p - 1) * c;
          }
        }
        A++;
      }
    }
    return o = ch(o), g.interlaceMethod == 1 ? (v(0, 0, 8, 8), v(4, 0, 8, 8), v(0, 4, 4, 8), v(2, 0, 4, 4), v(0, 2, 2, 4), v(1, 0, 2, 2), v(0, 1, 1, 2)) : v(0, 0, 1, 1), h;
  }, i.prototype.decodePalette = function() {
    var o, c, h, f, g, v, m, x, p;
    for (h = this.palette, v = this.transparency.indexed || [], g = new Uint8Array((v.length || 0) + h.length), f = 0, o = 0, c = m = 0, x = h.length; m < x; c = m += 3) g[f++] = h[c], g[f++] = h[c + 1], g[f++] = h[c + 2], g[f++] = (p = v[o++]) != null ? p : 255;
    return g;
  }, i.prototype.copyToImageData = function(o, c) {
    var h, f, g, v, m, x, p, M, I, E, k;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (k = this._decodedPalette) != null ? k : this._decodedPalette = this.decodePalette(), f = 4, h = !0), M = (g = o.data || o).length, m = I || c, v = x = 0, f === 1) for (; v < M; ) p = I ? 4 * c[v / 4] : x, E = m[p++], g[v++] = E, g[v++] = E, g[v++] = E, g[v++] = h ? m[p++] : 255, x = p;
    else for (; v < M; ) p = I ? 4 * c[v / 4] : x, g[v++] = m[p++], g[v++] = m[p++], g[v++] = m[p++], g[v++] = h ? m[p++] : 255, x = p;
  }, i.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var s = function() {
    if (Object.prototype.toString.call(Ze) === "[object Window]") {
      try {
        e = Ze.document.createElement("canvas"), r = e.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return s(), n = function(o) {
    var c;
    if (s() === !0) return r.width = o.width, r.height = o.height, r.clearRect(0, 0, o.width, o.height), r.putImageData(o, 0, 0), (c = new Image()).src = e.toDataURL(), c;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, i.prototype.decodeFrames = function(o) {
    var c, h, f, g, v, m, x, p;
    if (this.animation) {
      for (p = [], h = v = 0, m = (x = this.animation.frames).length; v < m; h = ++v) c = x[h], f = o.createImageData(c.width, c.height), g = this.decodePixels(new Uint8Array(c.data)), this.copyToImageData(f, g), c.imageData = f, p.push(c.image = n(f));
      return p;
    }
  }, i.prototype.renderFrame = function(o, c) {
    var h, f, g;
    return h = (f = this.animation.frames)[c], g = f[c - 1], c === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, i.prototype.animate = function(o) {
    var c, h, f, g, v, m, x = this;
    return h = 0, m = this.animation, g = m.numFrames, f = m.frames, v = m.numPlays, (c = function() {
      var p, M;
      if (p = h++ % g, M = f[p], x.renderFrame(o, p), g > 1 && h / g < v) return x.animation._timeout = setTimeout(c, M.delay);
    })();
  }, i.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, i.prototype.render = function(o) {
    var c, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, c = o.getContext("2d"), this.animation ? (this.decodeFrames(c), this.animate(c)) : (h = c.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), c.putImageData(h, 0, 0));
  }, i;
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
function jh(n) {
  var e = 0;
  if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var r = n[e++] | n[e++] << 8, i = n[e++] | n[e++] << 8, s = n[e++], o = s >> 7, c = 1 << (7 & s) + 1;
  n[e++], n[e++];
  var h = null, f = null;
  o && (h = e, f = c, e += 3 * c);
  var g = !0, v = [], m = 0, x = null, p = 0, M = null;
  for (this.width = r, this.height = i; g && e < n.length; ) switch (n[e++]) {
    case 33:
      switch (n[e++]) {
        case 255:
          if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, M = n[e++] | n[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
            if (A === 0) break;
            e += A;
          }
          break;
        case 249:
          if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = n[e++];
          m = n[e++] | n[e++] << 8, x = n[e++], (1 & I) == 0 && (x = null), p = I >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
            if (A === 0) break;
            e += A;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
      }
      break;
    case 44:
      var E = n[e++] | n[e++] << 8, k = n[e++] | n[e++] << 8, F = n[e++] | n[e++] << 8, G = n[e++] | n[e++] << 8, le = n[e++], fe = le >> 6 & 1, be = 1 << (7 & le) + 1, Q = h, q = f, ie = !1;
      le >> 7 && (ie = !0, Q = e, q = be, e += 3 * be);
      var de = e;
      for (e++; ; ) {
        var A;
        if (!((A = n[e++]) >= 0)) throw Error("Invalid block size");
        if (A === 0) break;
        e += A;
      }
      v.push({ x: E, y: k, width: F, height: G, has_local_palette: ie, palette_offset: Q, palette_size: q, data_offset: de, data_length: e - de, transparent_index: x, interlaced: !!fe, delay: m, disposal: p });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[e - 1].toString(16));
  }
  this.numFrames = function() {
    return v.length;
  }, this.loopCount = function() {
    return M;
  }, this.frameInfo = function(_) {
    if (_ < 0 || _ >= v.length) throw new Error("Frame index out of range.");
    return v[_];
  }, this.decodeAndBlitFrameBGRA = function(_, D) {
    var R = this.frameInfo(_), ce = R.width * R.height, ae = new Uint8Array(ce);
    Tl(n, R.data_offset, ae, ce);
    var he = R.palette_offset, J = R.transparent_index;
    J === null && (J = 256);
    var se = R.width, z = r - se, ue = se, w = 4 * (R.y * r + R.x), C = 4 * ((R.y + R.height) * r + R.x), T = w, U = 4 * z;
    R.interlaced === !0 && (U += 4 * r * 7);
    for (var $ = 8, re = 0, ee = ae.length; re < ee; ++re) {
      var oe = ae[re];
      if (ue === 0 && (ue = se, (T += U) >= C && (U = 4 * z + 4 * r * ($ - 1), T = w + (se + z) * ($ << 1), $ >>= 1)), oe === J) T += 4;
      else {
        var Ie = n[he + 3 * oe], ke = n[he + 3 * oe + 1], Te = n[he + 3 * oe + 2];
        D[T++] = Te, D[T++] = ke, D[T++] = Ie, D[T++] = 255;
      }
      --ue;
    }
  }, this.decodeAndBlitFrameRGBA = function(_, D) {
    var R = this.frameInfo(_), ce = R.width * R.height, ae = new Uint8Array(ce);
    Tl(n, R.data_offset, ae, ce);
    var he = R.palette_offset, J = R.transparent_index;
    J === null && (J = 256);
    var se = R.width, z = r - se, ue = se, w = 4 * (R.y * r + R.x), C = 4 * ((R.y + R.height) * r + R.x), T = w, U = 4 * z;
    R.interlaced === !0 && (U += 4 * r * 7);
    for (var $ = 8, re = 0, ee = ae.length; re < ee; ++re) {
      var oe = ae[re];
      if (ue === 0 && (ue = se, (T += U) >= C && (U = 4 * z + 4 * r * ($ - 1), T = w + (se + z) * ($ << 1), $ >>= 1)), oe === J) T += 4;
      else {
        var Ie = n[he + 3 * oe], ke = n[he + 3 * oe + 1], Te = n[he + 3 * oe + 2];
        D[T++] = Ie, D[T++] = ke, D[T++] = Te, D[T++] = 255;
      }
      --ue;
    }
  };
}
function Tl(n, e, r, i) {
  for (var s = n[e++], o = 1 << s, c = o + 1, h = c + 1, f = s + 1, g = (1 << f) - 1, v = 0, m = 0, x = 0, p = n[e++], M = new Int32Array(4096), I = null; ; ) {
    for (; v < 16 && p !== 0; ) m |= n[e++] << v, v += 8, p === 1 ? p = n[e++] : --p;
    if (v < f) break;
    var E = m & g;
    if (m >>= f, v -= f, E !== o) {
      if (E === c) break;
      for (var k = E < h ? E : I, F = 0, G = k; G > o; ) G = M[G] >> 8, ++F;
      var le = G;
      if (x + F + (k !== E ? 1 : 0) > i) return void St.log("Warning, gif stream longer than expected.");
      r[x++] = le;
      var fe = x += F;
      for (k !== E && (r[x++] = le), G = k; F--; ) G = M[G], r[--fe] = 255 & G, G >>= 8;
      I !== null && h < 4096 && (M[h++] = I << 8 | le, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = E;
    } else h = c + 1, g = (1 << (f = s + 1)) - 1, I = null;
  }
  return x !== i && St.log("Warning, gif stream shorter than expected."), r;
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
function zs(n) {
  var e, r, i, s, o, c = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), v = new Array(64), m = new Array(65535), x = new Array(65535), p = new Array(64), M = new Array(64), I = [], E = 0, k = 7, F = new Array(64), G = new Array(64), le = new Array(64), fe = new Array(256), be = new Array(2048), Q = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], ie = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], de = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], A = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], _ = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], R = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], ce = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function ae(w, C) {
    for (var T = 0, U = 0, $ = new Array(), re = 1; re <= 16; re++) {
      for (var ee = 1; ee <= w[re]; ee++) $[C[U]] = [], $[C[U]][0] = T, $[C[U]][1] = re, U++, T++;
      T *= 2;
    }
    return $;
  }
  function he(w) {
    for (var C = w[0], T = w[1] - 1; T >= 0; ) C & 1 << T && (E |= 1 << k), T--, --k < 0 && (E == 255 ? (J(255), J(0)) : J(E), k = 7, E = 0);
  }
  function J(w) {
    I.push(w);
  }
  function se(w) {
    J(w >> 8 & 255), J(255 & w);
  }
  function z(w, C, T, U, $) {
    for (var re, ee = $[0], oe = $[240], Ie = function(Ne, _e) {
      var Ee, Me, Ve, Fe, De, qe, ve, at, He, Ae, Ce = 0;
      for (He = 0; He < 8; ++He) {
        Ee = Ne[Ce], Me = Ne[Ce + 1], Ve = Ne[Ce + 2], Fe = Ne[Ce + 3], De = Ne[Ce + 4], qe = Ne[Ce + 5], ve = Ne[Ce + 6];
        var Lt = Ee + (at = Ne[Ce + 7]), ct = Ee - at, Gt = Me + ve, ht = Me - ve, pt = Ve + qe, rn = Ve - qe, gt = Fe + De, gr = Fe - De, Pt = Lt + gt, Bn = Lt - gt, mr = Gt + pt, Ft = Gt - pt;
        Ne[Ce] = Pt + mr, Ne[Ce + 4] = Pt - mr;
        var Qe = 0.707106781 * (Ft + Bn);
        Ne[Ce + 2] = Bn + Qe, Ne[Ce + 6] = Bn - Qe;
        var bt = 0.382683433 * ((Pt = gr + rn) - (Ft = ht + ct)), $r = 0.5411961 * Pt + bt, en = 1.306562965 * Ft + bt, er = 0.707106781 * (mr = rn + ht), tr = ct + er, Xe = ct - er;
        Ne[Ce + 5] = Xe + $r, Ne[Ce + 3] = Xe - $r, Ne[Ce + 1] = tr + en, Ne[Ce + 7] = tr - en, Ce += 8;
      }
      for (Ce = 0, He = 0; He < 8; ++He) {
        Ee = Ne[Ce], Me = Ne[Ce + 8], Ve = Ne[Ce + 16], Fe = Ne[Ce + 24], De = Ne[Ce + 32], qe = Ne[Ce + 40], ve = Ne[Ce + 48];
        var Dn = Ee + (at = Ne[Ce + 56]), nr = Ee - at, mn = Me + ve, Yt = Me - ve, Ut = Ve + qe, Ln = Ve - qe, hi = Fe + De, vr = Fe - De, qn = Dn + hi, zn = Dn - hi, Un = mn + Ut, rr = mn - Ut;
        Ne[Ce] = qn + Un, Ne[Ce + 32] = qn - Un;
        var In = 0.707106781 * (rr + zn);
        Ne[Ce + 16] = zn + In, Ne[Ce + 48] = zn - In;
        var ir = 0.382683433 * ((qn = vr + Ln) - (rr = Yt + nr)), Xr = 0.5411961 * qn + ir, fi = 1.306562965 * rr + ir, di = 0.707106781 * (Un = Ln + Yt), pi = nr + di, gi = nr - di;
        Ne[Ce + 40] = gi + Xr, Ne[Ce + 24] = gi - Xr, Ne[Ce + 8] = pi + fi, Ne[Ce + 56] = pi - fi, Ce++;
      }
      for (He = 0; He < 64; ++He) Ae = Ne[He] * _e[He], p[He] = Ae > 0 ? Ae + 0.5 | 0 : Ae - 0.5 | 0;
      return p;
    }(w, C), ke = 0; ke < 64; ++ke) M[Q[ke]] = Ie[ke];
    var Te = M[0] - T;
    T = M[0], Te == 0 ? he(U[0]) : (he(U[x[re = 32767 + Te]]), he(m[re]));
    for (var Re = 63; Re > 0 && M[Re] == 0; ) Re--;
    if (Re == 0) return he(ee), T;
    for (var $e, me = 1; me <= Re; ) {
      for (var B = me; M[me] == 0 && me <= Re; ) ++me;
      var je = me - B;
      if (je >= 16) {
        $e = je >> 4;
        for (var Pe = 1; Pe <= $e; ++Pe) he(oe);
        je &= 15;
      }
      re = 32767 + M[me], he($[(je << 4) + x[re]]), he(m[re]), me++;
    }
    return Re != 63 && he(ee), T;
  }
  function ue(w) {
    w = Math.min(Math.max(w, 1), 100), o != w && (function(C) {
      for (var T = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], U = 0; U < 64; U++) {
        var $ = c((T[U] * C + 50) / 100);
        $ = Math.min(Math.max($, 1), 255), h[Q[U]] = $;
      }
      for (var re = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], ee = 0; ee < 64; ee++) {
        var oe = c((re[ee] * C + 50) / 100);
        oe = Math.min(Math.max(oe, 1), 255), f[Q[ee]] = oe;
      }
      for (var Ie = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], ke = 0, Te = 0; Te < 8; Te++) for (var Re = 0; Re < 8; Re++) g[ke] = 1 / (h[Q[ke]] * Ie[Te] * Ie[Re] * 8), v[ke] = 1 / (f[Q[ke]] * Ie[Te] * Ie[Re] * 8), ke++;
    }(w < 50 ? Math.floor(5e3 / w) : Math.floor(200 - 2 * w)), o = w);
  }
  this.encode = function(w, C) {
    C && ue(C), I = new Array(), E = 0, k = 7, se(65496), se(65504), se(16), J(74), J(70), J(73), J(70), J(0), J(1), J(1), J(0), se(1), se(1), J(0), J(0), function() {
      se(65499), se(132), J(0);
      for (var Me = 0; Me < 64; Me++) J(h[Me]);
      J(1);
      for (var Ve = 0; Ve < 64; Ve++) J(f[Ve]);
    }(), function(Me, Ve) {
      se(65472), se(17), J(8), se(Ve), se(Me), J(3), J(1), J(17), J(0), J(2), J(17), J(1), J(3), J(17), J(1);
    }(w.width, w.height), function() {
      se(65476), se(418), J(0);
      for (var Me = 0; Me < 16; Me++) J(q[Me + 1]);
      for (var Ve = 0; Ve <= 11; Ve++) J(ie[Ve]);
      J(16);
      for (var Fe = 0; Fe < 16; Fe++) J(de[Fe + 1]);
      for (var De = 0; De <= 161; De++) J(A[De]);
      J(1);
      for (var qe = 0; qe < 16; qe++) J(_[qe + 1]);
      for (var ve = 0; ve <= 11; ve++) J(D[ve]);
      J(17);
      for (var at = 0; at < 16; at++) J(R[at + 1]);
      for (var He = 0; He <= 161; He++) J(ce[He]);
    }(), se(65498), se(12), J(3), J(1), J(0), J(2), J(17), J(3), J(17), J(0), J(63), J(0);
    var T = 0, U = 0, $ = 0;
    E = 0, k = 7, this.encode.displayName = "_encode_";
    for (var re, ee, oe, Ie, ke, Te, Re, $e, me, B = w.data, je = w.width, Pe = w.height, Ne = 4 * je, _e = 0; _e < Pe; ) {
      for (re = 0; re < Ne; ) {
        for (ke = Ne * _e + re, Re = -1, $e = 0, me = 0; me < 64; me++) Te = ke + ($e = me >> 3) * Ne + (Re = 4 * (7 & me)), _e + $e >= Pe && (Te -= Ne * (_e + 1 + $e - Pe)), re + Re >= Ne && (Te -= re + Re - Ne + 4), ee = B[Te++], oe = B[Te++], Ie = B[Te++], F[me] = (be[ee] + be[oe + 256 >> 0] + be[Ie + 512 >> 0] >> 16) - 128, G[me] = (be[ee + 768 >> 0] + be[oe + 1024 >> 0] + be[Ie + 1280 >> 0] >> 16) - 128, le[me] = (be[ee + 1280 >> 0] + be[oe + 1536 >> 0] + be[Ie + 1792 >> 0] >> 16) - 128;
        T = z(F, g, T, e, i), U = z(G, v, U, r, s), $ = z(le, v, $, r, s), re += 32;
      }
      _e += 8;
    }
    if (k >= 0) {
      var Ee = [];
      Ee[1] = k + 1, Ee[0] = (1 << k + 1) - 1, he(Ee);
    }
    return se(65497), new Uint8Array(I);
  }, n = n || 50, function() {
    for (var w = String.fromCharCode, C = 0; C < 256; C++) fe[C] = w(C);
  }(), e = ae(q, ie), r = ae(_, D), i = ae(de, A), s = ae(R, ce), function() {
    for (var w = 1, C = 2, T = 1; T <= 15; T++) {
      for (var U = w; U < C; U++) x[32767 + U] = T, m[32767 + U] = [], m[32767 + U][1] = T, m[32767 + U][0] = U;
      for (var $ = -(C - 1); $ <= -w; $++) x[32767 + $] = T, m[32767 + $] = [], m[32767 + $][1] = T, m[32767 + $][0] = C - 1 + $;
      w <<= 1, C <<= 1;
    }
  }(), function() {
    for (var w = 0; w < 256; w++) be[w] = 19595 * w, be[w + 256 >> 0] = 38470 * w, be[w + 512 >> 0] = 7471 * w + 32768, be[w + 768 >> 0] = -11059 * w, be[w + 1024 >> 0] = -21709 * w, be[w + 1280 >> 0] = 32768 * w + 8421375, be[w + 1536 >> 0] = -27439 * w, be[w + 1792 >> 0] = -5329 * w;
  }(), ue(n);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function Xn(n, e) {
  if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Bl(n) {
  function e(q) {
    if (!q) throw Error("assert :P");
  }
  function r(q, ie, de) {
    for (var A = 0; 4 > A; A++) if (q[ie + A] != de.charCodeAt(A)) return !0;
    return !1;
  }
  function i(q, ie, de, A, _) {
    for (var D = 0; D < _; D++) q[ie + D] = de[A + D];
  }
  function s(q, ie, de, A) {
    for (var _ = 0; _ < A; _++) q[ie + _] = de;
  }
  function o(q) {
    return new Int32Array(q);
  }
  function c(q, ie) {
    for (var de = [], A = 0; A < q; A++) de.push(new ie());
    return de;
  }
  function h(q, ie) {
    var de = [];
    return function A(_, D, R) {
      for (var ce = R[D], ae = 0; ae < ce && (_.push(R.length > D + 1 ? [] : new ie()), !(R.length < D + 1)); ae++) A(_[ae], D + 1, R);
    }(de, 0, q), de;
  }
  var f = function() {
    var q = this;
    function ie(t, a) {
      for (var u = 1 << a - 1 >>> 0; t & u; ) u >>>= 1;
      return u ? (t & u - 1) + u : t;
    }
    function de(t, a, u, d, b) {
      e(!(d % u));
      do
        t[a + (d -= u)] = b;
      while (0 < d);
    }
    function A(t, a, u, d, b) {
      if (e(2328 >= b), 512 >= b) var N = o(512);
      else if ((N = o(b)) == null) return 0;
      return function(L, S, P, j, W, te) {
        var ne, Z, xe = S, pe = 1 << P, V = o(16), Y = o(16);
        for (e(W != 0), e(j != null), e(L != null), e(0 < P), Z = 0; Z < W; ++Z) {
          if (15 < j[Z]) return 0;
          ++V[j[Z]];
        }
        if (V[0] == W) return 0;
        for (Y[1] = 0, ne = 1; 15 > ne; ++ne) {
          if (V[ne] > 1 << ne) return 0;
          Y[ne + 1] = Y[ne] + V[ne];
        }
        for (Z = 0; Z < W; ++Z) ne = j[Z], 0 < j[Z] && (te[Y[ne]++] = Z);
        if (Y[15] == 1) return (j = new _()).g = 0, j.value = te[0], de(L, xe, 1, pe, j), pe;
        var ye, Le = -1, we = pe - 1, Ue = 0, Oe = 1, Ye = 1, Be = 1 << P;
        for (Z = 0, ne = 1, W = 2; ne <= P; ++ne, W <<= 1) {
          if (Oe += Ye <<= 1, 0 > (Ye -= V[ne])) return 0;
          for (; 0 < V[ne]; --V[ne]) (j = new _()).g = ne, j.value = te[Z++], de(L, xe + Ue, W, Be, j), Ue = ie(Ue, ne);
        }
        for (ne = P + 1, W = 2; 15 >= ne; ++ne, W <<= 1) {
          if (Oe += Ye <<= 1, 0 > (Ye -= V[ne])) return 0;
          for (; 0 < V[ne]; --V[ne]) {
            if (j = new _(), (Ue & we) != Le) {
              for (xe += Be, ye = 1 << (Le = ne) - P; 15 > Le && !(0 >= (ye -= V[Le])); ) ++Le, ye <<= 1;
              pe += Be = 1 << (ye = Le - P), L[S + (Le = Ue & we)].g = ye + P, L[S + Le].value = xe - S - Le;
            }
            j.g = ne - P, j.value = te[Z++], de(L, xe + (Ue >> P), W, Be, j), Ue = ie(Ue, ne);
          }
        }
        return Oe != 2 * Y[15] - 1 ? 0 : pe;
      }(t, a, u, d, b, N);
    }
    function _() {
      this.value = this.g = 0;
    }
    function D() {
      this.value = this.g = 0;
    }
    function R() {
      this.G = c(5, _), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = c(tn, D);
    }
    function ce(t, a, u, d) {
      e(t != null), e(a != null), e(2147483648 > d), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = a, t.pa = u, t.Jd = a, t.Yc = u + d, t.Zc = 4 <= d ? u + d - 4 + 1 : u, re(t);
    }
    function ae(t, a) {
      for (var u = 0; 0 < a--; ) u |= oe(t, 128) << a;
      return u;
    }
    function he(t, a) {
      var u = ae(t, a);
      return ee(t) ? -u : u;
    }
    function J(t, a, u, d) {
      var b, N = 0;
      for (e(t != null), e(a != null), e(4294967288 > d), t.Sb = d, t.Ra = 0, t.u = 0, t.h = 0, 4 < d && (d = 4), b = 0; b < d; ++b) N += a[u + b] << 8 * b;
      t.Ra = N, t.bb = d, t.oa = a, t.pa = u;
    }
    function se(t) {
      for (; 8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Ci - 8 >>> 0, ++t.bb, t.u -= 8;
      T(t) && (t.h = 1, t.u = 0);
    }
    function z(t, a) {
      if (e(0 <= a), !t.h && a <= Ii) {
        var u = C(t) & Pi[a];
        return t.u += a, se(t), u;
      }
      return t.h = 1, t.u = 0;
    }
    function ue() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function w() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function C(t) {
      return t.Ra >>> (t.u & Ci - 1) >>> 0;
    }
    function T(t) {
      return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Ci;
    }
    function U(t, a) {
      t.u = a, t.h = T(t);
    }
    function $(t) {
      t.u >= da && (e(t.u >= da), se(t));
    }
    function re(t) {
      e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
    }
    function ee(t) {
      return ae(t, 1);
    }
    function oe(t, a) {
      var u = t.Ca;
      0 > t.b && re(t);
      var d = t.b, b = u * a >>> 8, N = (t.I >>> d > b) + 0;
      for (N ? (u -= b, t.I -= b + 1 << d >>> 0) : u = b + 1, d = u, b = 0; 256 <= d; ) b += 8, d >>= 8;
      return d = 7 ^ b + bn[d], t.b -= d, t.Ca = (u << d) - 1, N;
    }
    function Ie(t, a, u) {
      t[a + 0] = u >> 24 & 255, t[a + 1] = u >> 16 & 255, t[a + 2] = u >> 8 & 255, t[a + 3] = u >> 0 & 255;
    }
    function ke(t, a) {
      return t[a + 0] << 0 | t[a + 1] << 8;
    }
    function Te(t, a) {
      return ke(t, a) | t[a + 2] << 16;
    }
    function Re(t, a) {
      return ke(t, a) | ke(t, a + 2) << 16;
    }
    function $e(t, a) {
      var u = 1 << a;
      return e(t != null), e(0 < a), t.X = o(u), t.X == null ? 0 : (t.Mb = 32 - a, t.Xa = a, 1);
    }
    function me(t, a) {
      e(t != null), e(a != null), e(t.Xa == a.Xa), i(a.X, 0, t.X, 0, 1 << a.Xa);
    }
    function B() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function je(t, a, u, d) {
      e(u != null), e(d != null);
      var b = u[0], N = d[0];
      return b == 0 && (b = (t * N + a / 2) / a), N == 0 && (N = (a * b + t / 2) / t), 0 >= b || 0 >= N ? 0 : (u[0] = b, d[0] = N, 1);
    }
    function Pe(t, a) {
      return t + (1 << a) - 1 >>> a;
    }
    function Ne(t, a) {
      return ((4278255360 & t) + (4278255360 & a) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & a) >>> 0 & 16711935) >>> 0;
    }
    function _e(t, a) {
      q[a] = function(u, d, b, N, L, S, P) {
        var j;
        for (j = 0; j < L; ++j) {
          var W = q[t](S[P + j - 1], b, N + j);
          S[P + j] = Ne(u[d + j], W);
        }
      };
    }
    function Ee() {
      this.ud = this.hd = this.jd = 0;
    }
    function Me(t, a) {
      return ((4278124286 & (t ^ a)) >>> 1) + (t & a) >>> 0;
    }
    function Ve(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
    }
    function Fe(t, a) {
      return Ve(t + (t - a + 0.5 >> 1));
    }
    function De(t, a, u) {
      return Math.abs(a - u) - Math.abs(t - u);
    }
    function qe(t, a, u, d, b, N, L) {
      for (d = N[L - 1], u = 0; u < b; ++u) N[L + u] = d = Ne(t[a + u], d);
    }
    function ve(t, a, u, d, b) {
      var N;
      for (N = 0; N < u; ++N) {
        var L = t[a + N], S = L >> 8 & 255, P = 16711935 & (P = (P = 16711935 & L) + ((S << 16) + S));
        d[b + N] = (4278255360 & L) + P >>> 0;
      }
    }
    function at(t, a) {
      a.jd = t >> 0 & 255, a.hd = t >> 8 & 255, a.ud = t >> 16 & 255;
    }
    function He(t, a, u, d, b, N) {
      var L;
      for (L = 0; L < d; ++L) {
        var S = a[u + L], P = S >>> 8, j = S, W = 255 & (W = (W = S >>> 16) + ((t.jd << 24 >> 24) * (P << 24 >> 24) >>> 5));
        j = 255 & (j = (j = j + ((t.hd << 24 >> 24) * (P << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (W << 24 >> 24) >>> 5)), b[N + L] = (4278255360 & S) + (W << 16) + j;
      }
    }
    function Ae(t, a, u, d, b) {
      q[a] = function(N, L, S, P, j, W, te, ne, Z) {
        for (P = te; P < ne; ++P) for (te = 0; te < Z; ++te) j[W++] = b(S[d(N[L++])]);
      }, q[t] = function(N, L, S, P, j, W, te) {
        var ne = 8 >> N.b, Z = N.Ea, xe = N.K[0], pe = N.w;
        if (8 > ne) for (N = (1 << N.b) - 1, pe = (1 << ne) - 1; L < S; ++L) {
          var V, Y = 0;
          for (V = 0; V < Z; ++V) V & N || (Y = d(P[j++])), W[te++] = b(xe[Y & pe]), Y >>= ne;
        }
        else q["VP8LMapColor" + u](P, j, xe, pe, W, te, L, S, Z);
      };
    }
    function Ce(t, a, u, d, b) {
      for (u = a + u; a < u; ) {
        var N = t[a++];
        d[b++] = N >> 16 & 255, d[b++] = N >> 8 & 255, d[b++] = N >> 0 & 255;
      }
    }
    function Lt(t, a, u, d, b) {
      for (u = a + u; a < u; ) {
        var N = t[a++];
        d[b++] = N >> 16 & 255, d[b++] = N >> 8 & 255, d[b++] = N >> 0 & 255, d[b++] = N >> 24 & 255;
      }
    }
    function ct(t, a, u, d, b) {
      for (u = a + u; a < u; ) {
        var N = (L = t[a++]) >> 16 & 240 | L >> 12 & 15, L = L >> 0 & 240 | L >> 28 & 15;
        d[b++] = N, d[b++] = L;
      }
    }
    function Gt(t, a, u, d, b) {
      for (u = a + u; a < u; ) {
        var N = (L = t[a++]) >> 16 & 248 | L >> 13 & 7, L = L >> 5 & 224 | L >> 3 & 31;
        d[b++] = N, d[b++] = L;
      }
    }
    function ht(t, a, u, d, b) {
      for (u = a + u; a < u; ) {
        var N = t[a++];
        d[b++] = N >> 0 & 255, d[b++] = N >> 8 & 255, d[b++] = N >> 16 & 255;
      }
    }
    function pt(t, a, u, d, b, N) {
      if (N == 0) for (u = a + u; a < u; ) Ie(d, ((N = t[a++])[0] >> 24 | N[1] >> 8 & 65280 | N[2] << 8 & 16711680 | N[3] << 24) >>> 0), b += 32;
      else i(d, b, t, a, u);
    }
    function rn(t, a) {
      q[a][0] = q[t + "0"], q[a][1] = q[t + "1"], q[a][2] = q[t + "2"], q[a][3] = q[t + "3"], q[a][4] = q[t + "4"], q[a][5] = q[t + "5"], q[a][6] = q[t + "6"], q[a][7] = q[t + "7"], q[a][8] = q[t + "8"], q[a][9] = q[t + "9"], q[a][10] = q[t + "10"], q[a][11] = q[t + "11"], q[a][12] = q[t + "12"], q[a][13] = q[t + "13"], q[a][14] = q[t + "0"], q[a][15] = q[t + "0"];
    }
    function gt(t) {
      return t == vs || t == bs || t == lo || t == ys;
    }
    function gr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Pt() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function Bn() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new gr(), this.f.kb = new Pt(), this.sd = null;
    }
    function mr() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function Ft() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Qe(t) {
      return alert("todo:WebPSamplerProcessPlane"), t.T;
    }
    function bt(t, a) {
      var u = t.T, d = a.ba.f.RGBA, b = d.eb, N = d.fb + t.ka * d.A, L = On[a.ba.S], S = t.y, P = t.O, j = t.f, W = t.N, te = t.ea, ne = t.W, Z = a.cc, xe = a.dc, pe = a.Mc, V = a.Nc, Y = t.ka, ye = t.ka + t.T, Le = t.U, we = Le + 1 >> 1;
      for (Y == 0 ? L(S, P, null, null, j, W, te, ne, j, W, te, ne, b, N, null, null, Le) : (L(a.ec, a.fc, S, P, Z, xe, pe, V, j, W, te, ne, b, N - d.A, b, N, Le), ++u); Y + 2 < ye; Y += 2) Z = j, xe = W, pe = te, V = ne, W += t.Rc, ne += t.Rc, N += 2 * d.A, L(S, (P += 2 * t.fa) - t.fa, S, P, Z, xe, pe, V, j, W, te, ne, b, N - d.A, b, N, Le);
      return P += t.fa, t.j + ye < t.o ? (i(a.ec, a.fc, S, P, Le), i(a.cc, a.dc, j, W, we), i(a.Mc, a.Nc, te, ne, we), u--) : 1 & ye || L(S, P, null, null, j, W, te, ne, j, W, te, ne, b, N + d.A, null, null, Le), u;
    }
    function $r(t, a, u) {
      var d = t.F, b = [t.J];
      if (d != null) {
        var N = t.U, L = a.ba.S, S = L == co || L == lo;
        a = a.ba.f.RGBA;
        var P = [0], j = t.ka;
        P[0] = t.T, t.Kb && (j == 0 ? --P[0] : (--j, b[0] -= t.width), t.j + t.ka + t.T == t.o && (P[0] = t.o - t.j - j));
        var W = a.eb;
        j = a.fb + j * a.A, t = kt(d, b[0], t.width, N, P, W, j + (S ? 0 : 3), a.A), e(u == P), t && gt(L) && Mn(W, j, S, N, P, a.A);
      }
      return 0;
    }
    function en(t) {
      var a = t.ma, u = a.ba.S, d = 11 > u, b = u == oo || u == so || u == co || u == ms || u == 12 || gt(u);
      if (a.memory = null, a.Ib = null, a.Jb = null, a.Nd = null, !ha(a.Oa, t, b ? 11 : 12)) return 0;
      if (b && gt(u) && Se(), t.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (a.Ib = Qe, t.Kb) {
            if (u = t.U + 1 >> 1, a.memory = o(t.U + 2 * u), a.memory == null) return 0;
            a.ec = a.memory, a.fc = 0, a.cc = a.ec, a.dc = a.fc + t.U, a.Mc = a.cc, a.Nc = a.dc + u, a.Ib = bt, Se();
          }
        } else alert("todo:EmitYUV");
        b && (a.Jb = $r, d && K());
      }
      if (d && !Yc) {
        for (t = 0; 256 > t; ++t) M1[t] = 89858 * (t - 128) + ho >> uo, R1[t] = -22014 * (t - 128) + ho, O1[t] = -45773 * (t - 128), E1[t] = 113618 * (t - 128) + ho >> uo;
        for (t = wa; t < Ns; ++t) a = 76283 * (t - 16) + ho >> uo, T1[t - wa] = An(a, 255), B1[t - wa] = An(a + 8 >> 4, 15);
        Yc = 1;
      }
      return 1;
    }
    function er(t) {
      var a = t.ma, u = t.U, d = t.T;
      return e(!(1 & t.ka)), 0 >= u || 0 >= d ? 0 : (u = a.Ib(t, a), a.Jb != null && a.Jb(t, a, u), a.Dc += u, 1);
    }
    function tr(t) {
      t.ma.memory = null;
    }
    function Xe(t, a, u, d) {
      return z(t, 8) != 47 ? 0 : (a[0] = z(t, 14) + 1, u[0] = z(t, 14) + 1, d[0] = z(t, 1), z(t, 3) != 0 ? 0 : !t.h);
    }
    function Dn(t, a) {
      if (4 > t) return t + 1;
      var u = t - 2 >> 1;
      return (2 + (1 & t) << u) + z(a, u) + 1;
    }
    function nr(t, a) {
      return 120 < a ? a - 120 : 1 <= (u = ((u = y1[a - 1]) >> 4) * t + (8 - (15 & u))) ? u : 1;
      var u;
    }
    function mn(t, a, u) {
      var d = C(u), b = t[a += 255 & d].g - 8;
      return 0 < b && (U(u, u.u + 8), d = C(u), a += t[a].value, a += d & (1 << b) - 1), U(u, u.u + t[a].g), t[a].value;
    }
    function Yt(t, a, u) {
      return u.g += t.g, u.value += t.value << a >>> 0, e(8 >= u.g), t.g;
    }
    function Ut(t, a, u) {
      var d = t.xc;
      return e((a = d == 0 ? 0 : t.vc[t.md * (u >> d) + (a >> d)]) < t.Wb), t.Ya[a];
    }
    function Ln(t, a, u, d) {
      var b = t.ab, N = t.c * a, L = t.C;
      a = L + a;
      var S = u, P = d;
      for (d = t.Ta, u = t.Ua; 0 < b--; ) {
        var j = t.gc[b], W = L, te = a, ne = S, Z = P, xe = (P = d, S = u, j.Ea);
        switch (e(W < te), e(te <= j.nc), j.hc) {
          case 2:
            Qa(ne, Z, (te - W) * xe, P, S);
            break;
          case 0:
            var pe = W, V = te, Y = P, ye = S, Le = (Be = j).Ea;
            pe == 0 && (ps(ne, Z, null, null, 1, Y, ye), qe(ne, Z + 1, 0, 0, Le - 1, Y, ye + 1), Z += Le, ye += Le, ++pe);
            for (var we = 1 << Be.b, Ue = we - 1, Oe = Pe(Le, Be.b), Ye = Be.K, Be = Be.w + (pe >> Be.b) * Oe; pe < V; ) {
              var mt = Ye, yt = Be, dt = 1;
              for (pa(ne, Z, Y, ye - Le, 1, Y, ye); dt < Le; ) {
                var lt = (dt & ~Ue) + we;
                lt > Le && (lt = Le), (0, Fr[mt[yt++] >> 8 & 15])(ne, Z + +dt, Y, ye + dt - Le, lt - dt, Y, ye + dt), dt = lt;
              }
              Z += Le, ye += Le, ++pe & Ue || (Be += Oe);
            }
            te != j.nc && i(P, S - xe, P, S + (te - W - 1) * xe, xe);
            break;
          case 1:
            for (xe = ne, V = Z, Le = (ne = j.Ea) - (ye = ne & ~(Y = (Z = 1 << j.b) - 1)), pe = Pe(ne, j.b), we = j.K, j = j.w + (W >> j.b) * pe; W < te; ) {
              for (Ue = we, Oe = j, Ye = new Ee(), Be = V + ye, mt = V + ne; V < Be; ) at(Ue[Oe++], Ye), ei(Ye, xe, V, Z, P, S), V += Z, S += Z;
              V < mt && (at(Ue[Oe++], Ye), ei(Ye, xe, V, Le, P, S), V += Le, S += Le), ++W & Y || (j += pe);
            }
            break;
          case 3:
            if (ne == P && Z == S && 0 < j.b) {
              for (V = P, ne = xe = S + (te - W) * xe - (ye = (te - W) * Pe(j.Ea, j.b)), Z = P, Y = S, pe = [], ye = (Le = ye) - 1; 0 <= ye; --ye) pe[ye] = Z[Y + ye];
              for (ye = Le - 1; 0 <= ye; --ye) V[ne + ye] = pe[ye];
              Cn(j, W, te, P, xe, P, S);
            } else Cn(j, W, te, ne, Z, P, S);
        }
        S = d, P = u;
      }
      P != u && i(d, u, S, P, N);
    }
    function hi(t, a) {
      var u = t.V, d = t.Ba + t.c * t.C, b = a - t.C;
      if (e(a <= t.l.o), e(16 >= b), 0 < b) {
        var N = t.l, L = t.Ta, S = t.Ua, P = N.width;
        if (Ln(t, b, u, d), b = S = [S], e((u = t.C) < (d = a)), e(N.v < N.va), d > N.o && (d = N.o), u < N.j) {
          var j = N.j - u;
          u = N.j, b[0] += j * P;
        }
        if (u >= d ? u = 0 : (b[0] += 4 * N.v, N.ka = u - N.j, N.U = N.va - N.v, N.T = d - u, u = 1), u) {
          if (S = S[0], 11 > (u = t.ca).S) {
            var W = u.f.RGBA, te = (d = u.S, b = N.U, N = N.T, j = W.eb, W.A), ne = N;
            for (W = W.fb + t.Ma * W.A; 0 < ne--; ) {
              var Z = L, xe = S, pe = b, V = j, Y = W;
              switch (d) {
                case ao:
                  yn(Z, xe, pe, V, Y);
                  break;
                case oo:
                  dn(Z, xe, pe, V, Y);
                  break;
                case vs:
                  dn(Z, xe, pe, V, Y), Mn(V, Y, 0, pe, 1, 0);
                  break;
                case Bc:
                  xr(Z, xe, pe, V, Y);
                  break;
                case so:
                  pt(Z, xe, pe, V, Y, 1);
                  break;
                case bs:
                  pt(Z, xe, pe, V, Y, 1), Mn(V, Y, 0, pe, 1, 0);
                  break;
                case co:
                  pt(Z, xe, pe, V, Y, 0);
                  break;
                case lo:
                  pt(Z, xe, pe, V, Y, 0), Mn(V, Y, 1, pe, 1, 0);
                  break;
                case ms:
                  Mr(Z, xe, pe, V, Y);
                  break;
                case ys:
                  Mr(Z, xe, pe, V, Y), _t(V, Y, pe, 1, 0);
                  break;
                case Dc:
                  wr(Z, xe, pe, V, Y);
                  break;
                default:
                  e(0);
              }
              S += P, W += te;
            }
            t.Ma += N;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(t.Ma <= u.height);
        }
      }
      t.C = a, e(t.C <= t.i);
    }
    function vr(t) {
      var a;
      if (0 < t.ua) return 0;
      for (a = 0; a < t.Wb; ++a) {
        var u = t.Ya[a].G, d = t.Ya[a].H;
        if (0 < u[1][d[1] + 0].g || 0 < u[2][d[2] + 0].g || 0 < u[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function qn(t, a, u, d, b, N) {
      if (t.Z != 0) {
        var L = t.qd, S = t.rd;
        for (e(Tr[t.Z] != null); a < u; ++a) Tr[t.Z](L, S, d, b, d, b, N), L = d, S = b, b += N;
        t.qd = L, t.rd = S;
      }
    }
    function zn(t, a) {
      var u = t.l.ma, d = u.Z == 0 || u.Z == 1 ? t.l.j : t.C;
      if (d = t.C < d ? d : t.C, e(a <= t.l.o), a > d) {
        var b = t.l.width, N = u.ca, L = u.tb + b * d, S = t.V, P = t.Ba + t.c * d, j = t.gc;
        e(t.ab == 1), e(j[0].hc == 3), eo(j[0], d, a, S, P, N, L), qn(u, d, a, N, L, b);
      }
      t.C = t.Ma = a;
    }
    function Un(t, a, u, d, b, N, L) {
      var S = t.$ / d, P = t.$ % d, j = t.m, W = t.s, te = u + t.$, ne = te;
      b = u + d * b;
      var Z = u + d * N, xe = 280 + W.ua, pe = t.Pb ? S : 16777216, V = 0 < W.ua ? W.Wa : null, Y = W.wc, ye = te < Z ? Ut(W, P, S) : null;
      e(t.C < N), e(Z <= b);
      var Le = !1;
      e: for (; ; ) {
        for (; Le || te < Z; ) {
          var we = 0;
          if (S >= pe) {
            var Ue = te - u;
            e((pe = t).Pb), pe.wd = pe.m, pe.xd = Ue, 0 < pe.s.ua && me(pe.s.Wa, pe.s.vb), pe = S + x1;
          }
          if (P & Y || (ye = Ut(W, P, S)), e(ye != null), ye.Qb && (a[te] = ye.qb, Le = !0), !Le) if ($(j), ye.jc) {
            we = j, Ue = a;
            var Oe = te, Ye = ye.pd[C(we) & tn - 1];
            e(ye.jc), 256 > Ye.g ? (U(we, we.u + Ye.g), Ue[Oe] = Ye.value, we = 0) : (U(we, we.u + Ye.g - 256), e(256 <= Ye.value), we = Ye.value), we == 0 && (Le = !0);
          } else we = mn(ye.G[0], ye.H[0], j);
          if (j.h) break;
          if (Le || 256 > we) {
            if (!Le) if (ye.nd) a[te] = (ye.qb | we << 8) >>> 0;
            else {
              if ($(j), Le = mn(ye.G[1], ye.H[1], j), $(j), Ue = mn(ye.G[2], ye.H[2], j), Oe = mn(ye.G[3], ye.H[3], j), j.h) break;
              a[te] = (Oe << 24 | Le << 16 | we << 8 | Ue) >>> 0;
            }
            if (Le = !1, ++te, ++P >= d && (P = 0, ++S, L != null && S <= N && !(S % 16) && L(t, S), V != null)) for (; ne < te; ) we = a[ne++], V.X[(506832829 * we & 4294967295) >>> V.Mb] = we;
          } else if (280 > we) {
            if (we = Dn(we - 256, j), Ue = mn(ye.G[4], ye.H[4], j), $(j), Ue = nr(d, Ue = Dn(Ue, j)), j.h) break;
            if (te - u < Ue || b - te < we) break e;
            for (Oe = 0; Oe < we; ++Oe) a[te + Oe] = a[te + Oe - Ue];
            for (te += we, P += we; P >= d; ) P -= d, ++S, L != null && S <= N && !(S % 16) && L(t, S);
            if (e(te <= b), P & Y && (ye = Ut(W, P, S)), V != null) for (; ne < te; ) we = a[ne++], V.X[(506832829 * we & 4294967295) >>> V.Mb] = we;
          } else {
            if (!(we < xe)) break e;
            for (Le = we - 280, e(V != null); ne < te; ) we = a[ne++], V.X[(506832829 * we & 4294967295) >>> V.Mb] = we;
            we = te, e(!(Le >>> (Ue = V).Xa)), a[we] = Ue.X[Le], Le = !0;
          }
          Le || e(j.h == T(j));
        }
        if (t.Pb && j.h && te < b) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && me(t.s.vb, t.s.Wa);
        else {
          if (j.h) break e;
          L != null && L(t, S > N ? N : S), t.a = 0, t.$ = te - u;
        }
        return 1;
      }
      return t.a = 3, 0;
    }
    function rr(t) {
      e(t != null), t.vc = null, t.yc = null, t.Ya = null;
      var a = t.Wa;
      a != null && (a.X = null), t.vb = null, e(t != null);
    }
    function In() {
      var t = new ds();
      return t == null ? null : (t.a = 0, t.xb = Uc, rn("Predictor", "VP8LPredictors"), rn("Predictor", "VP8LPredictors_C"), rn("PredictorAdd", "VP8LPredictorsAdd"), rn("PredictorAdd", "VP8LPredictorsAdd_C"), Qa = ve, ei = He, yn = Ce, dn = Lt, Mr = ct, wr = Gt, xr = ht, q.VP8LMapColor32b = ji, q.VP8LMapColor8b = to, t);
    }
    function ir(t, a, u, d, b) {
      var N = 1, L = [t], S = [a], P = d.m, j = d.s, W = null, te = 0;
      e: for (; ; ) {
        if (u) for (; N && z(P, 1); ) {
          var ne = L, Z = S, xe = d, pe = 1, V = xe.m, Y = xe.gc[xe.ab], ye = z(V, 2);
          if (xe.Oc & 1 << ye) N = 0;
          else {
            switch (xe.Oc |= 1 << ye, Y.hc = ye, Y.Ea = ne[0], Y.nc = Z[0], Y.K = [null], ++xe.ab, e(4 >= xe.ab), ye) {
              case 0:
              case 1:
                Y.b = z(V, 3) + 2, pe = ir(Pe(Y.Ea, Y.b), Pe(Y.nc, Y.b), 0, xe, Y.K), Y.K = Y.K[0];
                break;
              case 3:
                var Le, we = z(V, 8) + 1, Ue = 16 < we ? 0 : 4 < we ? 1 : 2 < we ? 2 : 3;
                if (ne[0] = Pe(Y.Ea, Ue), Y.b = Ue, Le = pe = ir(we, 1, 0, xe, Y.K)) {
                  var Oe, Ye = we, Be = Y, mt = 1 << (8 >> Be.b), yt = o(mt);
                  if (yt == null) Le = 0;
                  else {
                    var dt = Be.K[0], lt = Be.w;
                    for (yt[0] = Be.K[0][0], Oe = 1; Oe < 1 * Ye; ++Oe) yt[Oe] = Ne(dt[lt + Oe], yt[Oe - 1]);
                    for (; Oe < 4 * mt; ++Oe) yt[Oe] = 0;
                    Be.K[0] = null, Be.K[0] = yt, Le = 1;
                  }
                }
                pe = Le;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            N = pe;
          }
        }
        if (L = L[0], S = S[0], N && z(P, 1) && !(N = 1 <= (te = z(P, 4)) && 11 >= te)) {
          d.a = 3;
          break e;
        }
        var At;
        if (At = N) t: {
          var Nt, ot, Wt, wn = d, Vt = L, xn = S, wt = te, _n = u, kn = wn.m, Zt = wn.s, nn = [null], gn = 1, Rn = 0, cr = w1[wt];
          n: for (; ; ) {
            if (_n && z(kn, 1)) {
              var Kt = z(kn, 3) + 2, Sr = Pe(Vt, Kt), ai = Pe(xn, Kt), Ri = Sr * ai;
              if (!ir(Sr, ai, 0, wn, nn)) break n;
              for (nn = nn[0], Zt.xc = Kt, Nt = 0; Nt < Ri; ++Nt) {
                var Br = nn[Nt] >> 8 & 65535;
                nn[Nt] = Br, Br >= gn && (gn = Br + 1);
              }
            }
            if (kn.h) break n;
            for (ot = 0; 5 > ot; ++ot) {
              var Et = qc[ot];
              !ot && 0 < wt && (Et += 1 << wt), Rn < Et && (Rn = Et);
            }
            var Ls = c(gn * cr, _), Jc = gn, Zc = c(Jc, R);
            if (Zc == null) var po = null;
            else e(65536 >= Jc), po = Zc;
            var xa = o(Rn);
            if (po == null || xa == null || Ls == null) {
              wn.a = 1;
              break n;
            }
            var go = Ls;
            for (Nt = Wt = 0; Nt < gn; ++Nt) {
              var Yn = po[Nt], Ti = Yn.G, Bi = Yn.H, Kc = 0, mo = 1, Qc = 0;
              for (ot = 0; 5 > ot; ++ot) {
                Et = qc[ot], Ti[ot] = go, Bi[ot] = Wt, !ot && 0 < wt && (Et += 1 << wt);
                i: {
                  var vo, As = Et, bo = wn, Na = xa, z1 = go, U1 = Wt, Ss = 0, Dr = bo.m, H1 = z(Dr, 1);
                  if (s(Na, 0, 0, As), H1) {
                    var W1 = z(Dr, 1) + 1, V1 = z(Dr, 1), el = z(Dr, V1 == 0 ? 1 : 8);
                    Na[el] = 1, W1 == 2 && (Na[el = z(Dr, 8)] = 1);
                    var yo = 1;
                  } else {
                    var tl = o(19), nl = z(Dr, 4) + 4;
                    if (19 < nl) {
                      bo.a = 3;
                      var wo = 0;
                      break i;
                    }
                    for (vo = 0; vo < nl; ++vo) tl[b1[vo]] = z(Dr, 3);
                    var _s = void 0, La = void 0, rl = bo, G1 = tl, xo = As, il = Na, ks = 0, qr = rl.m, al = 8, ol = c(128, _);
                    r: for (; A(ol, 0, 7, G1, 19); ) {
                      if (z(qr, 1)) {
                        var Y1 = 2 + 2 * z(qr, 3);
                        if ((_s = 2 + z(qr, Y1)) > xo) break r;
                      } else _s = xo;
                      for (La = 0; La < xo && _s--; ) {
                        $(qr);
                        var sl = ol[0 + (127 & C(qr))];
                        U(qr, qr.u + sl.g);
                        var Di = sl.value;
                        if (16 > Di) il[La++] = Di, Di != 0 && (al = Di);
                        else {
                          var $1 = Di == 16, cl = Di - 16, X1 = m1[cl], ll = z(qr, g1[cl]) + X1;
                          if (La + ll > xo) break r;
                          for (var J1 = $1 ? al : 0; 0 < ll--; ) il[La++] = J1;
                        }
                      }
                      ks = 1;
                      break r;
                    }
                    ks || (rl.a = 3), yo = ks;
                  }
                  (yo = yo && !Dr.h) && (Ss = A(z1, U1, 8, Na, As)), yo && Ss != 0 ? wo = Ss : (bo.a = 3, wo = 0);
                }
                if (wo == 0) break n;
                if (mo && v1[ot] == 1 && (mo = go[Wt].g == 0), Kc += go[Wt].g, Wt += wo, 3 >= ot) {
                  var Aa, Ps = xa[0];
                  for (Aa = 1; Aa < Et; ++Aa) xa[Aa] > Ps && (Ps = xa[Aa]);
                  Qc += Ps;
                }
              }
              if (Yn.nd = mo, Yn.Qb = 0, mo && (Yn.qb = (Ti[3][Bi[3] + 0].value << 24 | Ti[1][Bi[1] + 0].value << 16 | Ti[2][Bi[2] + 0].value) >>> 0, Kc == 0 && 256 > Ti[0][Bi[0] + 0].value && (Yn.Qb = 1, Yn.qb += Ti[0][Bi[0] + 0].value << 8)), Yn.jc = !Yn.Qb && 6 > Qc, Yn.jc) {
                var No, _r = Yn;
                for (No = 0; No < tn; ++No) {
                  var zr = No, Ur = _r.pd[zr], Lo = _r.G[0][_r.H[0] + zr];
                  256 <= Lo.value ? (Ur.g = Lo.g + 256, Ur.value = Lo.value) : (Ur.g = 0, Ur.value = 0, zr >>= Yt(Lo, 8, Ur), zr >>= Yt(_r.G[1][_r.H[1] + zr], 16, Ur), zr >>= Yt(_r.G[2][_r.H[2] + zr], 0, Ur), Yt(_r.G[3][_r.H[3] + zr], 24, Ur));
                }
              }
            }
            Zt.vc = nn, Zt.Wb = gn, Zt.Ya = po, Zt.yc = Ls, At = 1;
            break t;
          }
          At = 0;
        }
        if (!(N = At)) {
          d.a = 3;
          break e;
        }
        if (0 < te) {
          if (j.ua = 1 << te, !$e(j.Wa, te)) {
            d.a = 1, N = 0;
            break e;
          }
        } else j.ua = 0;
        var Is = d, ul = L, Z1 = S, Cs = Is.s, js = Cs.xc;
        if (Is.c = ul, Is.i = Z1, Cs.md = Pe(ul, js), Cs.wc = js == 0 ? -1 : (1 << js) - 1, u) {
          d.xb = P1;
          break e;
        }
        if ((W = o(L * S)) == null) {
          d.a = 1, N = 0;
          break e;
        }
        N = (N = Un(d, W, 0, L, S, S, null)) && !P.h;
        break e;
      }
      return N ? (b != null ? b[0] = W : (e(W == null), e(u)), d.$ = 0, u || rr(j)) : rr(j), N;
    }
    function Xr(t, a) {
      var u = t.c * t.i, d = u + a + 16 * a;
      return e(t.c <= a), t.V = o(d), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + u + a, 1);
    }
    function fi(t, a) {
      var u = t.C, d = a - u, b = t.V, N = t.Ba + t.c * u;
      for (e(a <= t.l.o); 0 < d; ) {
        var L = 16 < d ? 16 : d, S = t.l.ma, P = t.l.width, j = P * L, W = S.ca, te = S.tb + P * u, ne = t.Ta, Z = t.Ua;
        Ln(t, L, b, N), Bt(ne, Z, W, te, j), qn(S, u, u + L, W, te, P), d -= L, b += L * t.c, u += L;
      }
      e(u == a), t.C = t.Ma = a;
    }
    function di() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function pi() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function gi() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function Ma() {
      this.Yb = function() {
        var t = [];
        return function a(u, d, b) {
          for (var N = b[d], L = 0; L < N && (u.push(b.length > d + 1 ? [] : 0), !(b.length < d + 1)); L++) a(u[L], d + 1, b);
        }(t, 0, [3, 11]), t;
      }();
    }
    function Wo() {
      this.jb = o(3), this.Wc = h([4, 8], Ma), this.Xc = h([4, 17], Ma);
    }
    function Vo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function mi() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Ea() {
      this.Na = this.la = 0;
    }
    function Go() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Xi() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Yo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new mi()), this.Y = 0, this.ya = Array(new Xi()), this.aa = 0, this.l = new vi();
    }
    function Oa() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function $o() {
      this.cb = this.a = 0, this.sc = "", this.m = new ue(), this.Od = new di(), this.Kc = new pi(), this.ed = new Vo(), this.Qa = new gi(), this.Ic = this.$c = this.Aa = 0, this.D = new Yo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = c(8, ue), this.ia = 0, this.pb = c(4, Go), this.Pa = new Wo(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Oa()), this.Hd = 0, this.rb = Array(new Ea()), this.sb = 0, this.wa = Array(new mi()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Xi()), this.L = this.aa = 0, this.gd = h([4, 2], mi), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function vi() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function Xo() {
      var t = new $o();
      return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ya || (ya = Ba)), t;
    }
    function Rt(t, a, u) {
      return t.a == 0 && (t.a = a, t.sc = u, t.cb = 0), 0;
    }
    function Ra(t, a, u) {
      return 3 <= u && t[a + 0] == 157 && t[a + 1] == 1 && t[a + 2] == 42;
    }
    function Ta(t, a) {
      if (t == null) return 0;
      if (t.a = 0, t.sc = "OK", a == null) return Rt(t, 2, "null VP8Io passed to VP8GetHeaders()");
      var u = a.data, d = a.w, b = a.ha;
      if (4 > b) return Rt(t, 7, "Truncated header.");
      var N = u[d + 0] | u[d + 1] << 8 | u[d + 2] << 16, L = t.Od;
      if (L.Rb = !(1 & N), L.td = N >> 1 & 7, L.yd = N >> 4 & 1, L.ub = N >> 5, 3 < L.td) return Rt(t, 3, "Incorrect keyframe parameters.");
      if (!L.yd) return Rt(t, 4, "Frame not displayable.");
      d += 3, b -= 3;
      var S = t.Kc;
      if (L.Rb) {
        if (7 > b) return Rt(t, 7, "cannot parse picture header");
        if (!Ra(u, d, b)) return Rt(t, 3, "Bad code word");
        S.c = 16383 & (u[d + 4] << 8 | u[d + 3]), S.Td = u[d + 4] >> 6, S.i = 16383 & (u[d + 6] << 8 | u[d + 5]), S.Ud = u[d + 6] >> 6, d += 7, b -= 7, t.za = S.c + 15 >> 4, t.Ub = S.i + 15 >> 4, a.width = S.c, a.height = S.i, a.Da = 0, a.j = 0, a.v = 0, a.va = a.width, a.o = a.height, a.da = 0, a.ib = a.width, a.hb = a.height, a.U = a.width, a.T = a.height, s((N = t.Pa).jb, 0, 255, N.jb.length), e((N = t.Qa) != null), N.Cb = 0, N.Bb = 0, N.Fb = 1, s(N.Zb, 0, 0, N.Zb.length), s(N.Lb, 0, 0, N.Lb);
      }
      if (L.ub > b) return Rt(t, 7, "bad partition length");
      ce(N = t.m, u, d, L.ub), d += L.ub, b -= L.ub, L.Rb && (S.Ld = ee(N), S.Kd = ee(N)), S = t.Qa;
      var P, j = t.Pa;
      if (e(N != null), e(S != null), S.Cb = ee(N), S.Cb) {
        if (S.Bb = ee(N), ee(N)) {
          for (S.Fb = ee(N), P = 0; 4 > P; ++P) S.Zb[P] = ee(N) ? he(N, 7) : 0;
          for (P = 0; 4 > P; ++P) S.Lb[P] = ee(N) ? he(N, 6) : 0;
        }
        if (S.Bb) for (P = 0; 3 > P; ++P) j.jb[P] = ee(N) ? ae(N, 8) : 255;
      } else S.Bb = 0;
      if (N.Ka) return Rt(t, 3, "cannot parse segment header");
      if ((S = t.ed).zd = ee(N), S.Tb = ae(N, 6), S.wb = ae(N, 3), S.Pc = ee(N), S.Pc && ee(N)) {
        for (j = 0; 4 > j; ++j) ee(N) && (S.vd[j] = he(N, 6));
        for (j = 0; 4 > j; ++j) ee(N) && (S.od[j] = he(N, 6));
      }
      if (t.L = S.Tb == 0 ? 0 : S.zd ? 1 : 2, N.Ka) return Rt(t, 3, "cannot parse filter header");
      var W = b;
      if (b = P = d, d = P + W, S = W, t.Xb = (1 << ae(t.m, 2)) - 1, W < 3 * (j = t.Xb)) u = 7;
      else {
        for (P += 3 * j, S -= 3 * j, W = 0; W < j; ++W) {
          var te = u[b + 0] | u[b + 1] << 8 | u[b + 2] << 16;
          te > S && (te = S), ce(t.Jc[+W], u, P, te), P += te, S -= te, b += 3;
        }
        ce(t.Jc[+j], u, P, S), u = P < d ? 0 : 5;
      }
      if (u != 0) return Rt(t, u, "cannot parse partitions");
      for (u = ae(P = t.m, 7), b = ee(P) ? he(P, 4) : 0, d = ee(P) ? he(P, 4) : 0, S = ee(P) ? he(P, 4) : 0, j = ee(P) ? he(P, 4) : 0, P = ee(P) ? he(P, 4) : 0, W = t.Qa, te = 0; 4 > te; ++te) {
        if (W.Cb) {
          var ne = W.Zb[te];
          W.Fb || (ne += u);
        } else {
          if (0 < te) {
            t.pb[te] = t.pb[0];
            continue;
          }
          ne = u;
        }
        var Z = t.pb[te];
        Z.Sc[0] = ws[An(ne + b, 127)], Z.Sc[1] = xs[An(ne + 0, 127)], Z.Eb[0] = 2 * ws[An(ne + d, 127)], Z.Eb[1] = 101581 * xs[An(ne + S, 127)] >> 16, 8 > Z.Eb[1] && (Z.Eb[1] = 8), Z.Qc[0] = ws[An(ne + j, 117)], Z.Qc[1] = xs[An(ne + P, 127)], Z.lc = ne + P;
      }
      if (!L.Rb) return Rt(t, 4, "Not a key frame.");
      for (ee(N), L = t.Pa, u = 0; 4 > u; ++u) {
        for (b = 0; 8 > b; ++b) for (d = 0; 3 > d; ++d) for (S = 0; 11 > S; ++S) j = oe(N, _1[u][b][d][S]) ? ae(N, 8) : A1[u][b][d][S], L.Wc[u][b].Yb[d][S] = j;
        for (b = 0; 17 > b; ++b) L.Xc[u][b] = L.Wc[u][k1[b]];
      }
      return t.kc = ee(N), t.kc && (t.Bd = ae(N, 8)), t.cb = 1;
    }
    function Ba(t, a, u, d, b, N, L) {
      var S = a[b].Yb[u];
      for (u = 0; 16 > b; ++b) {
        if (!oe(t, S[u + 0])) return b;
        for (; !oe(t, S[u + 1]); ) if (S = a[++b].Yb[0], u = 0, b == 16) return 16;
        var P = a[b + 1].Yb;
        if (oe(t, S[u + 2])) {
          var j = t, W = 0;
          if (oe(j, (ne = S)[(te = u) + 3])) if (oe(j, ne[te + 6])) {
            for (S = 0, te = 2 * (W = oe(j, ne[te + 8])) + (ne = oe(j, ne[te + 9 + W])), W = 0, ne = N1[te]; ne[S]; ++S) W += W + oe(j, ne[S]);
            W += 3 + (8 << te);
          } else oe(j, ne[te + 7]) ? (W = 7 + 2 * oe(j, 165), W += oe(j, 145)) : W = 5 + oe(j, 159);
          else W = oe(j, ne[te + 4]) ? 3 + oe(j, ne[te + 5]) : 2;
          S = P[2];
        } else W = 1, S = P[1];
        P = L + L1[b], 0 > (j = t).b && re(j);
        var te, ne = j.b, Z = (te = j.Ca >> 1) - (j.I >> ne) >> 31;
        --j.b, j.Ca += Z, j.Ca |= 1, j.I -= (te + 1 & Z) << ne, N[P] = ((W ^ Z) - Z) * d[(0 < b) + 0];
      }
      return 16;
    }
    function Ji(t) {
      var a = t.rb[t.sb - 1];
      a.la = 0, a.Na = 0, s(t.zc, 0, 0, t.zc.length), t.ja = 0;
    }
    function Jo(t, a) {
      if (t == null) return 0;
      if (a == null) return Rt(t, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!t.cb && !Ta(t, a)) return 0;
      if (e(t.cb), a.ac == null || a.ac(a)) {
        a.ob && (t.L = 0);
        var u = fo[t.L];
        if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = a.v - u >> 4, t.zb = a.j - u >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = a.o + 15 + u >> 4, t.Hb = a.va + 15 + u >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
          var d = t.ed;
          for (u = 0; 4 > u; ++u) {
            var b;
            if (t.Qa.Cb) {
              var N = t.Qa.Lb[u];
              t.Qa.Fb || (N += d.Tb);
            } else N = d.Tb;
            for (b = 0; 1 >= b; ++b) {
              var L = t.gd[u][b], S = N;
              if (d.Pc && (S += d.vd[0], b && (S += d.od[0])), 0 < (S = 0 > S ? 0 : 63 < S ? 63 : S)) {
                var P = S;
                0 < d.wb && (P = 4 < d.wb ? P >> 2 : P >> 1) > 9 - d.wb && (P = 9 - d.wb), 1 > P && (P = 1), L.dd = P, L.tc = 2 * S + P, L.ld = 40 <= S ? 2 : 15 <= S ? 1 : 0;
              } else L.tc = 0;
              L.La = b;
            }
          }
        }
        u = 0;
      } else Rt(t, 6, "Frame setup failed"), u = t.a;
      if (u = u == 0) {
        if (u) {
          t.$c = 0, 0 < t.Aa || (t.Ic = q1);
          e: {
            u = t.Ic, d = 4 * (P = t.za);
            var j = 32 * P, W = P + 1, te = 0 < t.L ? P * (0 < t.Aa ? 2 : 1) : 0, ne = (t.Aa == 2 ? 2 : 1) * P;
            if ((L = d + 832 + (b = 3 * (16 * u + fo[t.L]) / 2 * j) + (N = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != L) u = 0;
            else {
              if (L > t.Vb) {
                if (t.Vb = 0, t.Ec = o(L), t.Fc = 0, t.Ec == null) {
                  u = Rt(t, 1, "no memory during frame initialization.");
                  break e;
                }
                t.Vb = L;
              }
              L = t.Ec, S = t.Fc, t.Ac = L, t.Bc = S, S += d, t.Gd = c(j, Oa), t.Hd = 0, t.rb = c(W + 1, Ea), t.sb = 1, t.wa = te ? c(te, mi) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += P), e(!0), t.oc = L, t.pc = S, S += 832, t.ya = c(ne, Xi), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += P), t.R = 16 * P, t.B = 8 * P, P = (j = fo[t.L]) * t.R, j = j / 2 * t.B, t.sa = L, t.ta = S + P, t.qa = t.sa, t.ra = t.ta + 16 * u * t.R + j, t.Ha = t.qa, t.Ia = t.ra + 8 * u * t.B + j, t.$c = 0, S += b, t.mb = N ? L : null, t.nb = N ? S : null, e(S + N <= t.Fc + t.Vb), Ji(t), s(t.Ac, t.Bc, 0, d), u = 1;
            }
          }
          if (u) {
            if (a.ka = 0, a.y = t.sa, a.O = t.ta, a.f = t.qa, a.N = t.ra, a.ea = t.Ha, a.Vd = t.Ia, a.fa = t.R, a.Rc = t.B, a.F = null, a.J = 0, !ro) {
              for (u = -255; 255 >= u; ++u) $t[255 + u] = 0 > u ? -u : u;
              for (u = -1020; 1020 >= u; ++u) Lr[1020 + u] = -128 > u ? -128 : 127 < u ? 127 : u;
              for (u = -112; 112 >= u; ++u) ba[112 + u] = -16 > u ? -16 : 15 < u ? 15 : u;
              for (u = -255; 510 >= u; ++u) Oi[255 + u] = 0 > u ? 0 : 255 < u ? 255 : u;
              ro = 1;
            }
            Fi = Qo, Nr = Zo, ga = qa, pn = Ko, jn = za, Tt = Da, Mi = na, no = Kr, ma = fs, ti = ra, ni = hs, Er = Li, ri = ia, Ei = Ja, ii = Xa, Or = or, va = yr, Fn = us, Gn[0] = ar, Gn[1] = es, Gn[2] = is, Gn[3] = as, Gn[4] = Wa, Gn[5] = xi, Gn[6] = Va, Gn[7] = Qi, Gn[8] = ss, Gn[9] = os, Rr[0] = Ua, Rr[1] = ns, Rr[2] = br, Rr[3] = yi, Rr[4] = an, Rr[5] = rs, Rr[6] = Ha, Ar[0] = Ir, Ar[1] = ts, Ar[2] = cs, Ar[3] = ea, Ar[4] = Zr, Ar[5] = ls, Ar[6] = ta, u = 1;
          } else u = 0;
        }
        u && (u = function(Z, xe) {
          for (Z.M = 0; Z.M < Z.Va; ++Z.M) {
            var pe, V = Z.Jc[Z.M & Z.Xb], Y = Z.m, ye = Z;
            for (pe = 0; pe < ye.za; ++pe) {
              var Le = Y, we = ye, Ue = we.Ac, Oe = we.Bc + 4 * pe, Ye = we.zc, Be = we.ya[we.aa + pe];
              if (we.Qa.Bb ? Be.$b = oe(Le, we.Pa.jb[0]) ? 2 + oe(Le, we.Pa.jb[2]) : oe(Le, we.Pa.jb[1]) : Be.$b = 0, we.kc && (Be.Ad = oe(Le, we.Bd)), Be.Za = !oe(Le, 145) + 0, Be.Za) {
                var mt = Be.Ob, yt = 0;
                for (we = 0; 4 > we; ++we) {
                  var dt, lt = Ye[0 + we];
                  for (dt = 0; 4 > dt; ++dt) {
                    lt = S1[Ue[Oe + dt]][lt];
                    for (var At = zc[oe(Le, lt[0])]; 0 < At; ) At = zc[2 * At + oe(Le, lt[At])];
                    lt = -At, Ue[Oe + dt] = lt;
                  }
                  i(mt, yt, Ue, Oe, 4), yt += 4, Ye[0 + we] = lt;
                }
              } else lt = oe(Le, 156) ? oe(Le, 128) ? 1 : 3 : oe(Le, 163) ? 2 : 0, Be.Ob[0] = lt, s(Ue, Oe, lt, 4), s(Ye, 0, lt, 4);
              Be.Dd = oe(Le, 142) ? oe(Le, 114) ? oe(Le, 183) ? 1 : 3 : 2 : 0;
            }
            if (ye.m.Ka) return Rt(Z, 7, "Premature end-of-partition0 encountered.");
            for (; Z.ja < Z.za; ++Z.ja) {
              if (ye = V, Le = (Y = Z).rb[Y.sb - 1], Ue = Y.rb[Y.sb + Y.ja], pe = Y.ya[Y.aa + Y.ja], Oe = Y.kc ? pe.Ad : 0) Le.la = Ue.la = 0, pe.Za || (Le.Na = Ue.Na = 0), pe.Hc = 0, pe.Gc = 0, pe.ia = 0;
              else {
                var Nt, ot;
                if (Le = Ue, Ue = ye, Oe = Y.Pa.Xc, Ye = Y.ya[Y.aa + Y.ja], Be = Y.pb[Ye.$b], we = Ye.ad, mt = 0, yt = Y.rb[Y.sb - 1], lt = dt = 0, s(we, mt, 0, 384), Ye.Za) var Wt = 0, wn = Oe[3];
                else {
                  At = o(16);
                  var Vt = Le.Na + yt.Na;
                  if (Vt = ya(Ue, Oe[1], Vt, Be.Eb, 0, At, 0), Le.Na = yt.Na = (0 < Vt) + 0, 1 < Vt) Fi(At, 0, we, mt);
                  else {
                    var xn = At[0] + 3 >> 3;
                    for (At = 0; 256 > At; At += 16) we[mt + At] = xn;
                  }
                  Wt = 1, wn = Oe[0];
                }
                var wt = 15 & Le.la, _n = 15 & yt.la;
                for (At = 0; 4 > At; ++At) {
                  var kn = 1 & _n;
                  for (xn = ot = 0; 4 > xn; ++xn) wt = wt >> 1 | (kn = (Vt = ya(Ue, wn, Vt = kn + (1 & wt), Be.Sc, Wt, we, mt)) > Wt) << 7, ot = ot << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : we[mt + 0] != 0), mt += 16;
                  wt >>= 4, _n = _n >> 1 | kn << 7, dt = (dt << 8 | ot) >>> 0;
                }
                for (wn = wt, Wt = _n >> 4, Nt = 0; 4 > Nt; Nt += 2) {
                  for (ot = 0, wt = Le.la >> 4 + Nt, _n = yt.la >> 4 + Nt, At = 0; 2 > At; ++At) {
                    for (kn = 1 & _n, xn = 0; 2 > xn; ++xn) Vt = kn + (1 & wt), wt = wt >> 1 | (kn = 0 < (Vt = ya(Ue, Oe[2], Vt, Be.Qc, 0, we, mt))) << 3, ot = ot << 2 | (3 < Vt ? 3 : 1 < Vt ? 2 : we[mt + 0] != 0), mt += 16;
                    wt >>= 2, _n = _n >> 1 | kn << 5;
                  }
                  lt |= ot << 4 * Nt, wn |= wt << 4 << Nt, Wt |= (240 & _n) << Nt;
                }
                Le.la = wn, yt.la = Wt, Ye.Hc = dt, Ye.Gc = lt, Ye.ia = 43690 & lt ? 0 : Be.ia, Oe = !(dt | lt);
              }
              if (0 < Y.L && (Y.wa[Y.Y + Y.ja] = Y.gd[pe.$b][pe.Za], Y.wa[Y.Y + Y.ja].La |= !Oe), ye.Ka) return Rt(Z, 7, "Premature end-of-file encountered.");
            }
            if (Ji(Z), Y = xe, ye = 1, pe = (V = Z).D, Le = 0 < V.L && V.M >= V.zb && V.M <= V.Va, V.Aa == 0) e: {
              if (pe.M = V.M, pe.uc = Le, ua(V, pe), ye = 1, pe = (ot = V.D).Nb, Le = (lt = fo[V.L]) * V.R, Ue = lt / 2 * V.B, At = 16 * pe * V.R, xn = 8 * pe * V.B, Oe = V.sa, Ye = V.ta - Le + At, Be = V.qa, we = V.ra - Ue + xn, mt = V.Ha, yt = V.Ia - Ue + xn, _n = (wt = ot.M) == 0, dt = wt >= V.Va - 1, V.Aa == 2 && ua(V, ot), ot.uc) for (kn = (Vt = V).D.M, e(Vt.D.uc), ot = Vt.yb; ot < Vt.Hb; ++ot) {
                Wt = ot, wn = kn;
                var Zt = (nn = (Et = Vt).D).Nb;
                Nt = Et.R;
                var nn = nn.wa[nn.Y + Wt], gn = Et.sa, Rn = Et.ta + 16 * Zt * Nt + 16 * Wt, cr = nn.dd, Kt = nn.tc;
                if (Kt != 0) if (e(3 <= Kt), Et.L == 1) 0 < Wt && Or(gn, Rn, Nt, Kt + 4), nn.La && Fn(gn, Rn, Nt, Kt), 0 < wn && ii(gn, Rn, Nt, Kt + 4), nn.La && va(gn, Rn, Nt, Kt);
                else {
                  var Sr = Et.B, ai = Et.qa, Ri = Et.ra + 8 * Zt * Sr + 8 * Wt, Br = Et.Ha, Et = Et.Ia + 8 * Zt * Sr + 8 * Wt;
                  Zt = nn.ld, 0 < Wt && (no(gn, Rn, Nt, Kt + 4, cr, Zt), ti(ai, Ri, Br, Et, Sr, Kt + 4, cr, Zt)), nn.La && (Er(gn, Rn, Nt, Kt, cr, Zt), Ei(ai, Ri, Br, Et, Sr, Kt, cr, Zt)), 0 < wn && (Mi(gn, Rn, Nt, Kt + 4, cr, Zt), ma(ai, Ri, Br, Et, Sr, Kt + 4, cr, Zt)), nn.La && (ni(gn, Rn, Nt, Kt, cr, Zt), ri(ai, Ri, Br, Et, Sr, Kt, cr, Zt));
                }
              }
              if (V.ia && alert("todo:DitherRow"), Y.put != null) {
                if (ot = 16 * wt, wt = 16 * (wt + 1), _n ? (Y.y = V.sa, Y.O = V.ta + At, Y.f = V.qa, Y.N = V.ra + xn, Y.ea = V.Ha, Y.W = V.Ia + xn) : (ot -= lt, Y.y = Oe, Y.O = Ye, Y.f = Be, Y.N = we, Y.ea = mt, Y.W = yt), dt || (wt -= lt), wt > Y.o && (wt = Y.o), Y.F = null, Y.J = null, V.Fa != null && 0 < V.Fa.length && ot < wt && (Y.J = ca(V, Y, ot, wt - ot), Y.F = V.mb, Y.F == null && Y.F.length == 0)) {
                  ye = Rt(V, 3, "Could not decode alpha data.");
                  break e;
                }
                ot < Y.j && (lt = Y.j - ot, ot = Y.j, e(!(1 & lt)), Y.O += V.R * lt, Y.N += V.B * (lt >> 1), Y.W += V.B * (lt >> 1), Y.F != null && (Y.J += Y.width * lt)), ot < wt && (Y.O += Y.v, Y.N += Y.v >> 1, Y.W += Y.v >> 1, Y.F != null && (Y.J += Y.v), Y.ka = ot - Y.j, Y.U = Y.va - Y.v, Y.T = wt - ot, ye = Y.put(Y));
              }
              pe + 1 != V.Ic || dt || (i(V.sa, V.ta - Le, Oe, Ye + 16 * V.R, Le), i(V.qa, V.ra - Ue, Be, we + 8 * V.B, Ue), i(V.Ha, V.Ia - Ue, mt, yt + 8 * V.B, Ue));
            }
            if (!ye) return Rt(Z, 6, "Output aborted.");
          }
          return 1;
        }(t, a)), a.bc != null && a.bc(a), u &= 1;
      }
      return u ? (t.cb = 0, u) : 0;
    }
    function Hn(t, a, u, d, b) {
      b = t[a + u + 32 * d] + (b >> 3), t[a + u + 32 * d] = -256 & b ? 0 > b ? 0 : 255 : b;
    }
    function bi(t, a, u, d, b, N) {
      Hn(t, a, 0, u, d + b), Hn(t, a, 1, u, d + N), Hn(t, a, 2, u, d - N), Hn(t, a, 3, u, d - b);
    }
    function vn(t) {
      return (20091 * t >> 16) + t;
    }
    function Zi(t, a, u, d) {
      var b, N = 0, L = o(16);
      for (b = 0; 4 > b; ++b) {
        var S = t[a + 0] + t[a + 8], P = t[a + 0] - t[a + 8], j = (35468 * t[a + 4] >> 16) - vn(t[a + 12]), W = vn(t[a + 4]) + (35468 * t[a + 12] >> 16);
        L[N + 0] = S + W, L[N + 1] = P + j, L[N + 2] = P - j, L[N + 3] = S - W, N += 4, a++;
      }
      for (b = N = 0; 4 > b; ++b) S = (t = L[N + 0] + 4) + L[N + 8], P = t - L[N + 8], j = (35468 * L[N + 4] >> 16) - vn(L[N + 12]), Hn(u, d, 0, 0, S + (W = vn(L[N + 4]) + (35468 * L[N + 12] >> 16))), Hn(u, d, 1, 0, P + j), Hn(u, d, 2, 0, P - j), Hn(u, d, 3, 0, S - W), N++, d += 32;
    }
    function Da(t, a, u, d) {
      var b = t[a + 0] + 4, N = 35468 * t[a + 4] >> 16, L = vn(t[a + 4]), S = 35468 * t[a + 1] >> 16;
      bi(u, d, 0, b + L, t = vn(t[a + 1]), S), bi(u, d, 1, b + N, t, S), bi(u, d, 2, b - N, t, S), bi(u, d, 3, b - L, t, S);
    }
    function Zo(t, a, u, d, b) {
      Zi(t, a, u, d), b && Zi(t, a + 16, u, d + 4);
    }
    function qa(t, a, u, d) {
      Nr(t, a + 0, u, d, 1), Nr(t, a + 32, u, d + 128, 1);
    }
    function Ko(t, a, u, d) {
      var b;
      for (t = t[a + 0] + 4, b = 0; 4 > b; ++b) for (a = 0; 4 > a; ++a) Hn(u, d, a, b, t);
    }
    function za(t, a, u, d) {
      t[a + 0] && pn(t, a + 0, u, d), t[a + 16] && pn(t, a + 16, u, d + 4), t[a + 32] && pn(t, a + 32, u, d + 128), t[a + 48] && pn(t, a + 48, u, d + 128 + 4);
    }
    function Qo(t, a, u, d) {
      var b, N = o(16);
      for (b = 0; 4 > b; ++b) {
        var L = t[a + 0 + b] + t[a + 12 + b], S = t[a + 4 + b] + t[a + 8 + b], P = t[a + 4 + b] - t[a + 8 + b], j = t[a + 0 + b] - t[a + 12 + b];
        N[0 + b] = L + S, N[8 + b] = L - S, N[4 + b] = j + P, N[12 + b] = j - P;
      }
      for (b = 0; 4 > b; ++b) L = (t = N[0 + 4 * b] + 3) + N[3 + 4 * b], S = N[1 + 4 * b] + N[2 + 4 * b], P = N[1 + 4 * b] - N[2 + 4 * b], j = t - N[3 + 4 * b], u[d + 0] = L + S >> 3, u[d + 16] = j + P >> 3, u[d + 32] = L - S >> 3, u[d + 48] = j - P >> 3, d += 64;
    }
    function Ki(t, a, u) {
      var d, b = a - 32, N = Sn, L = 255 - t[b - 1];
      for (d = 0; d < u; ++d) {
        var S, P = N, j = L + t[a - 1];
        for (S = 0; S < u; ++S) t[a + S] = P[j + t[b + S]];
        a += 32;
      }
    }
    function es(t, a) {
      Ki(t, a, 4);
    }
    function ts(t, a) {
      Ki(t, a, 8);
    }
    function ns(t, a) {
      Ki(t, a, 16);
    }
    function br(t, a) {
      var u;
      for (u = 0; 16 > u; ++u) i(t, a + 32 * u, t, a - 32, 16);
    }
    function yi(t, a) {
      var u;
      for (u = 16; 0 < u; --u) s(t, a, t[a - 1], 16), a += 32;
    }
    function wi(t, a, u) {
      var d;
      for (d = 0; 16 > d; ++d) s(a, u + 32 * d, t, 16);
    }
    function Ua(t, a) {
      var u, d = 16;
      for (u = 0; 16 > u; ++u) d += t[a - 1 + 32 * u] + t[a + u - 32];
      wi(d >> 5, t, a);
    }
    function an(t, a) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[a - 1 + 32 * u];
      wi(d >> 4, t, a);
    }
    function rs(t, a) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[a + u - 32];
      wi(d >> 4, t, a);
    }
    function Ha(t, a) {
      wi(128, t, a);
    }
    function Ke(t, a, u) {
      return t + 2 * a + u + 2 >> 2;
    }
    function is(t, a) {
      var u, d = a - 32;
      for (d = new Uint8Array([Ke(t[d - 1], t[d + 0], t[d + 1]), Ke(t[d + 0], t[d + 1], t[d + 2]), Ke(t[d + 1], t[d + 2], t[d + 3]), Ke(t[d + 2], t[d + 3], t[d + 4])]), u = 0; 4 > u; ++u) i(t, a + 32 * u, d, 0, d.length);
    }
    function as(t, a) {
      var u = t[a - 1], d = t[a - 1 + 32], b = t[a - 1 + 64], N = t[a - 1 + 96];
      Ie(t, a + 0, 16843009 * Ke(t[a - 1 - 32], u, d)), Ie(t, a + 32, 16843009 * Ke(u, d, b)), Ie(t, a + 64, 16843009 * Ke(d, b, N)), Ie(t, a + 96, 16843009 * Ke(b, N, N));
    }
    function ar(t, a) {
      var u, d = 4;
      for (u = 0; 4 > u; ++u) d += t[a + u - 32] + t[a - 1 + 32 * u];
      for (d >>= 3, u = 0; 4 > u; ++u) s(t, a + 32 * u, d, 4);
    }
    function Wa(t, a) {
      var u = t[a - 1 + 0], d = t[a - 1 + 32], b = t[a - 1 + 64], N = t[a - 1 - 32], L = t[a + 0 - 32], S = t[a + 1 - 32], P = t[a + 2 - 32], j = t[a + 3 - 32];
      t[a + 0 + 96] = Ke(d, b, t[a - 1 + 96]), t[a + 1 + 96] = t[a + 0 + 64] = Ke(u, d, b), t[a + 2 + 96] = t[a + 1 + 64] = t[a + 0 + 32] = Ke(N, u, d), t[a + 3 + 96] = t[a + 2 + 64] = t[a + 1 + 32] = t[a + 0 + 0] = Ke(L, N, u), t[a + 3 + 64] = t[a + 2 + 32] = t[a + 1 + 0] = Ke(S, L, N), t[a + 3 + 32] = t[a + 2 + 0] = Ke(P, S, L), t[a + 3 + 0] = Ke(j, P, S);
    }
    function Va(t, a) {
      var u = t[a + 1 - 32], d = t[a + 2 - 32], b = t[a + 3 - 32], N = t[a + 4 - 32], L = t[a + 5 - 32], S = t[a + 6 - 32], P = t[a + 7 - 32];
      t[a + 0 + 0] = Ke(t[a + 0 - 32], u, d), t[a + 1 + 0] = t[a + 0 + 32] = Ke(u, d, b), t[a + 2 + 0] = t[a + 1 + 32] = t[a + 0 + 64] = Ke(d, b, N), t[a + 3 + 0] = t[a + 2 + 32] = t[a + 1 + 64] = t[a + 0 + 96] = Ke(b, N, L), t[a + 3 + 32] = t[a + 2 + 64] = t[a + 1 + 96] = Ke(N, L, S), t[a + 3 + 64] = t[a + 2 + 96] = Ke(L, S, P), t[a + 3 + 96] = Ke(S, P, P);
    }
    function xi(t, a) {
      var u = t[a - 1 + 0], d = t[a - 1 + 32], b = t[a - 1 + 64], N = t[a - 1 - 32], L = t[a + 0 - 32], S = t[a + 1 - 32], P = t[a + 2 - 32], j = t[a + 3 - 32];
      t[a + 0 + 0] = t[a + 1 + 64] = N + L + 1 >> 1, t[a + 1 + 0] = t[a + 2 + 64] = L + S + 1 >> 1, t[a + 2 + 0] = t[a + 3 + 64] = S + P + 1 >> 1, t[a + 3 + 0] = P + j + 1 >> 1, t[a + 0 + 96] = Ke(b, d, u), t[a + 0 + 64] = Ke(d, u, N), t[a + 0 + 32] = t[a + 1 + 96] = Ke(u, N, L), t[a + 1 + 32] = t[a + 2 + 96] = Ke(N, L, S), t[a + 2 + 32] = t[a + 3 + 96] = Ke(L, S, P), t[a + 3 + 32] = Ke(S, P, j);
    }
    function Qi(t, a) {
      var u = t[a + 0 - 32], d = t[a + 1 - 32], b = t[a + 2 - 32], N = t[a + 3 - 32], L = t[a + 4 - 32], S = t[a + 5 - 32], P = t[a + 6 - 32], j = t[a + 7 - 32];
      t[a + 0 + 0] = u + d + 1 >> 1, t[a + 1 + 0] = t[a + 0 + 64] = d + b + 1 >> 1, t[a + 2 + 0] = t[a + 1 + 64] = b + N + 1 >> 1, t[a + 3 + 0] = t[a + 2 + 64] = N + L + 1 >> 1, t[a + 0 + 32] = Ke(u, d, b), t[a + 1 + 32] = t[a + 0 + 96] = Ke(d, b, N), t[a + 2 + 32] = t[a + 1 + 96] = Ke(b, N, L), t[a + 3 + 32] = t[a + 2 + 96] = Ke(N, L, S), t[a + 3 + 64] = Ke(L, S, P), t[a + 3 + 96] = Ke(S, P, j);
    }
    function os(t, a) {
      var u = t[a - 1 + 0], d = t[a - 1 + 32], b = t[a - 1 + 64], N = t[a - 1 + 96];
      t[a + 0 + 0] = u + d + 1 >> 1, t[a + 2 + 0] = t[a + 0 + 32] = d + b + 1 >> 1, t[a + 2 + 32] = t[a + 0 + 64] = b + N + 1 >> 1, t[a + 1 + 0] = Ke(u, d, b), t[a + 3 + 0] = t[a + 1 + 32] = Ke(d, b, N), t[a + 3 + 32] = t[a + 1 + 64] = Ke(b, N, N), t[a + 3 + 64] = t[a + 2 + 64] = t[a + 0 + 96] = t[a + 1 + 96] = t[a + 2 + 96] = t[a + 3 + 96] = N;
    }
    function ss(t, a) {
      var u = t[a - 1 + 0], d = t[a - 1 + 32], b = t[a - 1 + 64], N = t[a - 1 + 96], L = t[a - 1 - 32], S = t[a + 0 - 32], P = t[a + 1 - 32], j = t[a + 2 - 32];
      t[a + 0 + 0] = t[a + 2 + 32] = u + L + 1 >> 1, t[a + 0 + 32] = t[a + 2 + 64] = d + u + 1 >> 1, t[a + 0 + 64] = t[a + 2 + 96] = b + d + 1 >> 1, t[a + 0 + 96] = N + b + 1 >> 1, t[a + 3 + 0] = Ke(S, P, j), t[a + 2 + 0] = Ke(L, S, P), t[a + 1 + 0] = t[a + 3 + 32] = Ke(u, L, S), t[a + 1 + 32] = t[a + 3 + 64] = Ke(d, u, L), t[a + 1 + 64] = t[a + 3 + 96] = Ke(b, d, u), t[a + 1 + 96] = Ke(N, b, d);
    }
    function cs(t, a) {
      var u;
      for (u = 0; 8 > u; ++u) i(t, a + 32 * u, t, a - 32, 8);
    }
    function ea(t, a) {
      var u;
      for (u = 0; 8 > u; ++u) s(t, a, t[a - 1], 8), a += 32;
    }
    function Jr(t, a, u) {
      var d;
      for (d = 0; 8 > d; ++d) s(a, u + 32 * d, t, 8);
    }
    function Ir(t, a) {
      var u, d = 8;
      for (u = 0; 8 > u; ++u) d += t[a + u - 32] + t[a - 1 + 32 * u];
      Jr(d >> 4, t, a);
    }
    function ls(t, a) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[a + u - 32];
      Jr(d >> 3, t, a);
    }
    function Zr(t, a) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[a - 1 + 32 * u];
      Jr(d >> 3, t, a);
    }
    function ta(t, a) {
      Jr(128, t, a);
    }
    function Ni(t, a, u) {
      var d = t[a - u], b = t[a + 0], N = 3 * (b - d) + gs[1020 + t[a - 2 * u] - t[a + u]], L = io[112 + (N + 4 >> 3)];
      t[a - u] = Sn[255 + d + io[112 + (N + 3 >> 3)]], t[a + 0] = Sn[255 + b - L];
    }
    function Ga(t, a, u, d) {
      var b = t[a + 0], N = t[a + u];
      return En[255 + t[a - 2 * u] - t[a - u]] > d || En[255 + N - b] > d;
    }
    function Ya(t, a, u, d) {
      return 4 * En[255 + t[a - u] - t[a + 0]] + En[255 + t[a - 2 * u] - t[a + u]] <= d;
    }
    function $a(t, a, u, d, b) {
      var N = t[a - 3 * u], L = t[a - 2 * u], S = t[a - u], P = t[a + 0], j = t[a + u], W = t[a + 2 * u], te = t[a + 3 * u];
      return 4 * En[255 + S - P] + En[255 + L - j] > d ? 0 : En[255 + t[a - 4 * u] - N] <= b && En[255 + N - L] <= b && En[255 + L - S] <= b && En[255 + te - W] <= b && En[255 + W - j] <= b && En[255 + j - P] <= b;
    }
    function Xa(t, a, u, d) {
      var b = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Ya(t, a + d, u, b) && Ni(t, a + d, u);
    }
    function or(t, a, u, d) {
      var b = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Ya(t, a + d * u, 1, b) && Ni(t, a + d * u, 1);
    }
    function yr(t, a, u, d) {
      var b;
      for (b = 3; 0 < b; --b) Xa(t, a += 4 * u, u, d);
    }
    function us(t, a, u, d) {
      var b;
      for (b = 3; 0 < b; --b) or(t, a += 4, u, d);
    }
    function Cr(t, a, u, d, b, N, L, S) {
      for (N = 2 * N + 1; 0 < b--; ) {
        if ($a(t, a, u, N, L)) if (Ga(t, a, u, S)) Ni(t, a, u);
        else {
          var P = t, j = a, W = u, te = P[j - 2 * W], ne = P[j - W], Z = P[j + 0], xe = P[j + W], pe = P[j + 2 * W], V = 27 * (ye = gs[1020 + 3 * (Z - ne) + gs[1020 + te - xe]]) + 63 >> 7, Y = 18 * ye + 63 >> 7, ye = 9 * ye + 63 >> 7;
          P[j - 3 * W] = Sn[255 + P[j - 3 * W] + ye], P[j - 2 * W] = Sn[255 + te + Y], P[j - W] = Sn[255 + ne + V], P[j + 0] = Sn[255 + Z - V], P[j + W] = Sn[255 + xe - Y], P[j + 2 * W] = Sn[255 + pe - ye];
        }
        a += d;
      }
    }
    function Wn(t, a, u, d, b, N, L, S) {
      for (N = 2 * N + 1; 0 < b--; ) {
        if ($a(t, a, u, N, L)) if (Ga(t, a, u, S)) Ni(t, a, u);
        else {
          var P = t, j = a, W = u, te = P[j - W], ne = P[j + 0], Z = P[j + W], xe = io[112 + ((pe = 3 * (ne - te)) + 4 >> 3)], pe = io[112 + (pe + 3 >> 3)], V = xe + 1 >> 1;
          P[j - 2 * W] = Sn[255 + P[j - 2 * W] + V], P[j - W] = Sn[255 + te + pe], P[j + 0] = Sn[255 + ne - xe], P[j + W] = Sn[255 + Z - V];
        }
        a += d;
      }
    }
    function na(t, a, u, d, b, N) {
      Cr(t, a, u, 1, 16, d, b, N);
    }
    function Kr(t, a, u, d, b, N) {
      Cr(t, a, 1, u, 16, d, b, N);
    }
    function hs(t, a, u, d, b, N) {
      var L;
      for (L = 3; 0 < L; --L) Wn(t, a += 4 * u, u, 1, 16, d, b, N);
    }
    function Li(t, a, u, d, b, N) {
      var L;
      for (L = 3; 0 < L; --L) Wn(t, a += 4, 1, u, 16, d, b, N);
    }
    function fs(t, a, u, d, b, N, L, S) {
      Cr(t, a, b, 1, 8, N, L, S), Cr(u, d, b, 1, 8, N, L, S);
    }
    function ra(t, a, u, d, b, N, L, S) {
      Cr(t, a, 1, b, 8, N, L, S), Cr(u, d, 1, b, 8, N, L, S);
    }
    function ia(t, a, u, d, b, N, L, S) {
      Wn(t, a + 4 * b, b, 1, 8, N, L, S), Wn(u, d + 4 * b, b, 1, 8, N, L, S);
    }
    function Ja(t, a, u, d, b, N, L, S) {
      Wn(t, a + 4, 1, b, 8, N, L, S), Wn(u, d + 4, 1, b, 8, N, L, S);
    }
    function Ai() {
      this.ba = new Bn(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new Ft(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function aa() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function oa() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Za() {
      this.ua = 0, this.Wa = new B(), this.vb = new B(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new R(), this.yc = new _();
    }
    function ds() {
      this.xb = this.a = 0, this.l = new vi(), this.ca = new Bn(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new w(), this.Pb = 0, this.wd = new w(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Za(), this.ab = 0, this.gc = c(4, oa), this.Oc = 0;
    }
    function Si() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new vi(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Qr(t, a, u, d, b, N, L) {
      for (t = t == null ? 0 : t[a + 0], a = 0; a < L; ++a) b[N + a] = t + u[d + a] & 255, t = b[N + a];
    }
    function sa(t, a, u, d, b, N, L) {
      var S;
      if (t == null) Qr(null, null, u, d, b, N, L);
      else for (S = 0; S < L; ++S) b[N + S] = t[a + S] + u[d + S] & 255;
    }
    function jr(t, a, u, d, b, N, L) {
      if (t == null) Qr(null, null, u, d, b, N, L);
      else {
        var S, P = t[a + 0], j = P, W = P;
        for (S = 0; S < L; ++S) j = W + (P = t[a + S]) - j, W = u[d + S] + (-256 & j ? 0 > j ? 0 : 255 : j) & 255, j = P, b[N + S] = W;
      }
    }
    function ca(t, a, u, d) {
      var b = a.width, N = a.o;
      if (e(t != null && a != null), 0 > u || 0 >= d || u + d > N) return null;
      if (!t.Cc) {
        if (t.ga == null) {
          var L;
          if (t.ga = new Si(), (L = t.ga == null) || (L = a.width * a.o, e(t.Gb.length == 0), t.Gb = o(L), t.Uc = 0, t.Gb == null ? L = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, L = 1), L = !L), !L) {
            L = t.ga;
            var S = t.Fa, P = t.P, j = t.qc, W = t.mb, te = t.nb, ne = P + 1, Z = j - 1, xe = L.l;
            if (e(S != null && W != null && a != null), Tr[0] = null, Tr[1] = Qr, Tr[2] = sa, Tr[3] = jr, L.ca = W, L.tb = te, L.c = a.width, L.i = a.height, e(0 < L.c && 0 < L.i), 1 >= j) a = 0;
            else if (L.$a = S[P + 0] >> 0 & 3, L.Z = S[P + 0] >> 2 & 3, L.Lc = S[P + 0] >> 4 & 3, P = S[P + 0] >> 6 & 3, 0 > L.$a || 1 < L.$a || 4 <= L.Z || 1 < L.Lc || P) a = 0;
            else if (xe.put = er, xe.ac = en, xe.bc = tr, xe.ma = L, xe.width = a.width, xe.height = a.height, xe.Da = a.Da, xe.v = a.v, xe.va = a.va, xe.j = a.j, xe.o = a.o, L.$a) e: {
              e(L.$a == 1), a = In();
              t: for (; ; ) {
                if (a == null) {
                  a = 0;
                  break e;
                }
                if (e(L != null), L.mc = a, a.c = L.c, a.i = L.i, a.l = L.l, a.l.ma = L, a.l.width = L.c, a.l.height = L.i, a.a = 0, J(a.m, S, ne, Z), !ir(L.c, L.i, 1, a, null) || (a.ab == 1 && a.gc[0].hc == 3 && vr(a.s) ? (L.ic = 1, S = a.c * a.i, a.Ta = null, a.Ua = 0, a.V = o(S), a.Ba = 0, a.V == null ? (a.a = 1, a = 0) : a = 1) : (L.ic = 0, a = Xr(a, L.c)), !a)) break t;
                a = 1;
                break e;
              }
              L.mc = null, a = 0;
            }
            else a = Z >= L.c * L.i;
            L = !a;
          }
          if (L) return null;
          t.ga.Lc != 1 ? t.Ga = 0 : d = N - u;
        }
        e(t.ga != null), e(u + d <= N);
        e: {
          if (a = (S = t.ga).c, N = S.l.o, S.$a == 0) {
            if (ne = t.rc, Z = t.Vc, xe = t.Fa, P = t.P + 1 + u * a, j = t.mb, W = t.nb + u * a, e(P <= t.P + t.qc), S.Z != 0) for (e(Tr[S.Z] != null), L = 0; L < d; ++L) Tr[S.Z](ne, Z, xe, P, j, W, a), ne = j, Z = W, W += a, P += a;
            else for (L = 0; L < d; ++L) i(j, W, xe, P, a), ne = j, Z = W, W += a, P += a;
            t.rc = ne, t.Vc = Z;
          } else {
            if (e(S.mc != null), a = u + d, e((L = S.mc) != null), e(a <= L.i), L.C >= a) a = 1;
            else if (S.ic || K(), S.ic) {
              S = L.V, ne = L.Ba, Z = L.c;
              var pe = L.i, V = (xe = 1, P = L.$ / Z, j = L.$ % Z, W = L.m, te = L.s, L.$), Y = Z * pe, ye = Z * a, Le = te.wc, we = V < ye ? Ut(te, j, P) : null;
              e(V <= Y), e(a <= pe), e(vr(te));
              t: for (; ; ) {
                for (; !W.h && V < ye; ) {
                  if (j & Le || (we = Ut(te, j, P)), e(we != null), $(W), 256 > (pe = mn(we.G[0], we.H[0], W))) S[ne + V] = pe, ++V, ++j >= Z && (j = 0, ++P <= a && !(P % 16) && zn(L, P));
                  else {
                    if (!(280 > pe)) {
                      xe = 0;
                      break t;
                    }
                    pe = Dn(pe - 256, W);
                    var Ue, Oe = mn(we.G[4], we.H[4], W);
                    if ($(W), !(V >= (Oe = nr(Z, Oe = Dn(Oe, W))) && Y - V >= pe)) {
                      xe = 0;
                      break t;
                    }
                    for (Ue = 0; Ue < pe; ++Ue) S[ne + V + Ue] = S[ne + V + Ue - Oe];
                    for (V += pe, j += pe; j >= Z; ) j -= Z, ++P <= a && !(P % 16) && zn(L, P);
                    V < ye && j & Le && (we = Ut(te, j, P));
                  }
                  e(W.h == T(W));
                }
                zn(L, P > a ? a : P);
                break t;
              }
              !xe || W.h && V < Y ? (xe = 0, L.a = W.h ? 5 : 3) : L.$ = V, a = xe;
            } else a = Un(L, L.V, L.Ba, L.c, L.i, a, fi);
            if (!a) {
              d = 0;
              break e;
            }
          }
          u + d >= N && (t.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (t.Cc && ((d = t.ga) != null && (d.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return t.nb + u * b;
    }
    function l(t, a, u, d, b, N) {
      for (; 0 < b--; ) {
        var L, S = t, P = a + (u ? 1 : 0), j = t, W = a + (u ? 0 : 3);
        for (L = 0; L < d; ++L) {
          var te = j[W + 4 * L];
          te != 255 && (te *= 32897, S[P + 4 * L + 0] = S[P + 4 * L + 0] * te >> 23, S[P + 4 * L + 1] = S[P + 4 * L + 1] * te >> 23, S[P + 4 * L + 2] = S[P + 4 * L + 2] * te >> 23);
        }
        a += N;
      }
    }
    function y(t, a, u, d, b) {
      for (; 0 < d--; ) {
        var N;
        for (N = 0; N < u; ++N) {
          var L = t[a + 2 * N + 0], S = 15 & (j = t[a + 2 * N + 1]), P = 4369 * S, j = (240 & j | j >> 4) * P >> 16;
          t[a + 2 * N + 0] = (240 & L | L >> 4) * P >> 16 & 240 | (15 & L | L << 4) * P >> 16 >> 4 & 15, t[a + 2 * N + 1] = 240 & j | S;
        }
        a += b;
      }
    }
    function O(t, a, u, d, b, N, L, S) {
      var P, j, W = 255;
      for (j = 0; j < b; ++j) {
        for (P = 0; P < d; ++P) {
          var te = t[a + P];
          N[L + 4 * P] = te, W &= te;
        }
        a += u, L += S;
      }
      return W != 255;
    }
    function H(t, a, u, d, b) {
      var N;
      for (N = 0; N < b; ++N) u[d + N] = t[a + N] >> 8;
    }
    function K() {
      Mn = l, _t = y, kt = O, Bt = H;
    }
    function ge(t, a, u) {
      q[t] = function(d, b, N, L, S, P, j, W, te, ne, Z, xe, pe, V, Y, ye, Le) {
        var we, Ue = Le - 1 >> 1, Oe = S[P + 0] | j[W + 0] << 16, Ye = te[ne + 0] | Z[xe + 0] << 16;
        e(d != null);
        var Be = 3 * Oe + Ye + 131074 >> 2;
        for (a(d[b + 0], 255 & Be, Be >> 16, pe, V), N != null && (Be = 3 * Ye + Oe + 131074 >> 2, a(N[L + 0], 255 & Be, Be >> 16, Y, ye)), we = 1; we <= Ue; ++we) {
          var mt = S[P + we] | j[W + we] << 16, yt = te[ne + we] | Z[xe + we] << 16, dt = Oe + mt + Ye + yt + 524296, lt = dt + 2 * (mt + Ye) >> 3;
          Be = lt + Oe >> 1, Oe = (dt = dt + 2 * (Oe + yt) >> 3) + mt >> 1, a(d[b + 2 * we - 1], 255 & Be, Be >> 16, pe, V + (2 * we - 1) * u), a(d[b + 2 * we - 0], 255 & Oe, Oe >> 16, pe, V + (2 * we - 0) * u), N != null && (Be = dt + Ye >> 1, Oe = lt + yt >> 1, a(N[L + 2 * we - 1], 255 & Be, Be >> 16, Y, ye + (2 * we - 1) * u), a(N[L + 2 * we + 0], 255 & Oe, Oe >> 16, Y, ye + (2 * we + 0) * u)), Oe = mt, Ye = yt;
        }
        1 & Le || (Be = 3 * Oe + Ye + 131074 >> 2, a(d[b + Le - 1], 255 & Be, Be >> 16, pe, V + (Le - 1) * u), N != null && (Be = 3 * Ye + Oe + 131074 >> 2, a(N[L + Le - 1], 255 & Be, Be >> 16, Y, ye + (Le - 1) * u)));
      };
    }
    function Se() {
      On[ao] = I1, On[oo] = Hc, On[Bc] = C1, On[so] = Wc, On[co] = Vc, On[ms] = Gc, On[Dc] = j1, On[vs] = Hc, On[bs] = Wc, On[lo] = Vc, On[ys] = Gc;
    }
    function ze(t) {
      return t & -16384 ? 0 > t ? 0 : 255 : t >> F1;
    }
    function Ge(t, a) {
      return ze((19077 * t >> 8) + (26149 * a >> 8) - 14234);
    }
    function nt(t, a, u) {
      return ze((19077 * t >> 8) - (6419 * a >> 8) - (13320 * u >> 8) + 8708);
    }
    function et(t, a) {
      return ze((19077 * t >> 8) + (33050 * a >> 8) - 17685);
    }
    function ft(t, a, u, d, b) {
      d[b + 0] = Ge(t, u), d[b + 1] = nt(t, a, u), d[b + 2] = et(t, a);
    }
    function Ct(t, a, u, d, b) {
      d[b + 0] = et(t, a), d[b + 1] = nt(t, a, u), d[b + 2] = Ge(t, u);
    }
    function Mt(t, a, u, d, b) {
      var N = nt(t, a, u);
      a = N << 3 & 224 | et(t, a) >> 3, d[b + 0] = 248 & Ge(t, u) | N >> 5, d[b + 1] = a;
    }
    function Ht(t, a, u, d, b) {
      var N = 240 & et(t, a) | 15;
      d[b + 0] = 240 & Ge(t, u) | nt(t, a, u) >> 4, d[b + 1] = N;
    }
    function on(t, a, u, d, b) {
      d[b + 0] = 255, ft(t, a, u, d, b + 1);
    }
    function Jt(t, a, u, d, b) {
      Ct(t, a, u, d, b), d[b + 3] = 255;
    }
    function Vn(t, a, u, d, b) {
      ft(t, a, u, d, b), d[b + 3] = 255;
    }
    function An(t, a) {
      return 0 > t ? 0 : t > a ? a : t;
    }
    function sr(t, a, u) {
      q[t] = function(d, b, N, L, S, P, j, W, te) {
        for (var ne = W + (-2 & te) * u; W != ne; ) a(d[b + 0], N[L + 0], S[P + 0], j, W), a(d[b + 1], N[L + 0], S[P + 0], j, W + u), b += 2, ++L, ++P, W += 2 * u;
        1 & te && a(d[b + 0], N[L + 0], S[P + 0], j, W);
      };
    }
    function Ka(t, a, u) {
      return u == 0 ? t == 0 ? a == 0 ? 6 : 5 : a == 0 ? 4 : 0 : u;
    }
    function la(t, a, u, d, b) {
      switch (t >>> 30) {
        case 3:
          Nr(a, u, d, b, 0);
          break;
        case 2:
          Tt(a, u, d, b);
          break;
        case 1:
          pn(a, u, d, b);
      }
    }
    function ua(t, a) {
      var u, d, b = a.M, N = a.Nb, L = t.oc, S = t.pc + 40, P = t.oc, j = t.pc + 584, W = t.oc, te = t.pc + 600;
      for (u = 0; 16 > u; ++u) L[S + 32 * u - 1] = 129;
      for (u = 0; 8 > u; ++u) P[j + 32 * u - 1] = 129, W[te + 32 * u - 1] = 129;
      for (0 < b ? L[S - 1 - 32] = P[j - 1 - 32] = W[te - 1 - 32] = 129 : (s(L, S - 32 - 1, 127, 21), s(P, j - 32 - 1, 127, 9), s(W, te - 32 - 1, 127, 9)), d = 0; d < t.za; ++d) {
        var ne = a.ya[a.aa + d];
        if (0 < d) {
          for (u = -1; 16 > u; ++u) i(L, S + 32 * u - 4, L, S + 32 * u + 12, 4);
          for (u = -1; 8 > u; ++u) i(P, j + 32 * u - 4, P, j + 32 * u + 4, 4), i(W, te + 32 * u - 4, W, te + 32 * u + 4, 4);
        }
        var Z = t.Gd, xe = t.Hd + d, pe = ne.ad, V = ne.Hc;
        if (0 < b && (i(L, S - 32, Z[xe].y, 0, 16), i(P, j - 32, Z[xe].f, 0, 8), i(W, te - 32, Z[xe].ea, 0, 8)), ne.Za) {
          var Y = L, ye = S - 32 + 16;
          for (0 < b && (d >= t.za - 1 ? s(Y, ye, Z[xe].y[15], 4) : i(Y, ye, Z[xe + 1].y, 0, 4)), u = 0; 4 > u; u++) Y[ye + 128 + u] = Y[ye + 256 + u] = Y[ye + 384 + u] = Y[ye + 0 + u];
          for (u = 0; 16 > u; ++u, V <<= 2) Y = L, ye = S + $c[u], Gn[ne.Ob[u]](Y, ye), la(V, pe, 16 * +u, Y, ye);
        } else if (Y = Ka(d, b, ne.Ob[0]), Rr[Y](L, S), V != 0) for (u = 0; 16 > u; ++u, V <<= 2) la(V, pe, 16 * +u, L, S + $c[u]);
        for (u = ne.Gc, Y = Ka(d, b, ne.Dd), Ar[Y](P, j), Ar[Y](W, te), V = pe, Y = P, ye = j, 255 & (ne = u >> 0) && (170 & ne ? ga(V, 256, Y, ye) : jn(V, 256, Y, ye)), ne = W, V = te, 255 & (u >>= 8) && (170 & u ? ga(pe, 320, ne, V) : jn(pe, 320, ne, V)), b < t.Ub - 1 && (i(Z[xe].y, 0, L, S + 480, 16), i(Z[xe].f, 0, P, j + 224, 8), i(Z[xe].ea, 0, W, te + 224, 8)), u = 8 * N * t.B, Z = t.sa, xe = t.ta + 16 * d + 16 * N * t.R, pe = t.qa, ne = t.ra + 8 * d + u, V = t.Ha, Y = t.Ia + 8 * d + u, u = 0; 16 > u; ++u) i(Z, xe + u * t.R, L, S + 32 * u, 16);
        for (u = 0; 8 > u; ++u) i(pe, ne + u * t.B, P, j + 32 * u, 8), i(V, Y + u * t.B, W, te + 32 * u, 8);
      }
    }
    function _i(t, a, u, d, b, N, L, S, P) {
      var j = [0], W = [0], te = 0, ne = P != null ? P.kd : 0, Z = P ?? new aa();
      if (t == null || 12 > u) return 7;
      Z.data = t, Z.w = a, Z.ha = u, a = [a], u = [u], Z.gb = [Z.gb];
      e: {
        var xe = a, pe = u, V = Z.gb;
        if (e(t != null), e(pe != null), e(V != null), V[0] = 0, 12 <= pe[0] && !r(t, xe[0], "RIFF")) {
          if (r(t, xe[0] + 8, "WEBP")) {
            V = 3;
            break e;
          }
          var Y = Re(t, xe[0] + 4);
          if (12 > Y || 4294967286 < Y) {
            V = 3;
            break e;
          }
          if (ne && Y > pe[0] - 8) {
            V = 7;
            break e;
          }
          V[0] = Y, xe[0] += 12, pe[0] -= 12;
        }
        V = 0;
      }
      if (V != 0) return V;
      for (Y = 0 < Z.gb[0], u = u[0]; ; ) {
        e: {
          var ye = t;
          pe = a, V = u;
          var Le = j, we = W, Ue = xe = [0];
          if ((Be = te = [te])[0] = 0, 8 > V[0]) V = 7;
          else {
            if (!r(ye, pe[0], "VP8X")) {
              if (Re(ye, pe[0] + 4) != 10) {
                V = 3;
                break e;
              }
              if (18 > V[0]) {
                V = 7;
                break e;
              }
              var Oe = Re(ye, pe[0] + 8), Ye = 1 + Te(ye, pe[0] + 12);
              if (2147483648 <= Ye * (ye = 1 + Te(ye, pe[0] + 15))) {
                V = 3;
                break e;
              }
              Ue != null && (Ue[0] = Oe), Le != null && (Le[0] = Ye), we != null && (we[0] = ye), pe[0] += 18, V[0] -= 18, Be[0] = 1;
            }
            V = 0;
          }
        }
        if (te = te[0], xe = xe[0], V != 0) return V;
        if (pe = !!(2 & xe), !Y && te) return 3;
        if (N != null && (N[0] = !!(16 & xe)), L != null && (L[0] = pe), S != null && (S[0] = 0), L = j[0], xe = W[0], te && pe && P == null) {
          V = 0;
          break;
        }
        if (4 > u) {
          V = 7;
          break;
        }
        if (Y && te || !Y && !te && !r(t, a[0], "ALPH")) {
          u = [u], Z.na = [Z.na], Z.P = [Z.P], Z.Sa = [Z.Sa];
          e: {
            Oe = t, V = a, Y = u;
            var Be = Z.gb;
            Le = Z.na, we = Z.P, Ue = Z.Sa, Ye = 22, e(Oe != null), e(Y != null), ye = V[0];
            var mt = Y[0];
            for (e(Le != null), e(Ue != null), Le[0] = null, we[0] = null, Ue[0] = 0; ; ) {
              if (V[0] = ye, Y[0] = mt, 8 > mt) {
                V = 7;
                break e;
              }
              var yt = Re(Oe, ye + 4);
              if (4294967286 < yt) {
                V = 3;
                break e;
              }
              var dt = 8 + yt + 1 & -2;
              if (Ye += dt, 0 < Be && Ye > Be) {
                V = 3;
                break e;
              }
              if (!r(Oe, ye, "VP8 ") || !r(Oe, ye, "VP8L")) {
                V = 0;
                break e;
              }
              if (mt[0] < dt) {
                V = 7;
                break e;
              }
              r(Oe, ye, "ALPH") || (Le[0] = Oe, we[0] = ye + 8, Ue[0] = yt), ye += dt, mt -= dt;
            }
          }
          if (u = u[0], Z.na = Z.na[0], Z.P = Z.P[0], Z.Sa = Z.Sa[0], V != 0) break;
        }
        u = [u], Z.Ja = [Z.Ja], Z.xa = [Z.xa];
        e: if (Be = t, V = a, Y = u, Le = Z.gb[0], we = Z.Ja, Ue = Z.xa, Oe = V[0], ye = !r(Be, Oe, "VP8 "), Ye = !r(Be, Oe, "VP8L"), e(Be != null), e(Y != null), e(we != null), e(Ue != null), 8 > Y[0]) V = 7;
        else {
          if (ye || Ye) {
            if (Be = Re(Be, Oe + 4), 12 <= Le && Be > Le - 12) {
              V = 3;
              break e;
            }
            if (ne && Be > Y[0] - 8) {
              V = 7;
              break e;
            }
            we[0] = Be, V[0] += 8, Y[0] -= 8, Ue[0] = Ye;
          } else Ue[0] = 5 <= Y[0] && Be[Oe + 0] == 47 && !(Be[Oe + 4] >> 5), we[0] = Y[0];
          V = 0;
        }
        if (u = u[0], Z.Ja = Z.Ja[0], Z.xa = Z.xa[0], a = a[0], V != 0) break;
        if (4294967286 < Z.Ja) return 3;
        if (S == null || pe || (S[0] = Z.xa ? 2 : 1), L = [L], xe = [xe], Z.xa) {
          if (5 > u) {
            V = 7;
            break;
          }
          S = L, ne = xe, pe = N, t == null || 5 > u ? t = 0 : 5 <= u && t[a + 0] == 47 && !(t[a + 4] >> 5) ? (Y = [0], Be = [0], Le = [0], J(we = new w(), t, a, u), Xe(we, Y, Be, Le) ? (S != null && (S[0] = Y[0]), ne != null && (ne[0] = Be[0]), pe != null && (pe[0] = Le[0]), t = 1) : t = 0) : t = 0;
        } else {
          if (10 > u) {
            V = 7;
            break;
          }
          S = xe, t == null || 10 > u || !Ra(t, a + 3, u - 3) ? t = 0 : (ne = t[a + 0] | t[a + 1] << 8 | t[a + 2] << 16, pe = 16383 & (t[a + 7] << 8 | t[a + 6]), t = 16383 & (t[a + 9] << 8 | t[a + 8]), 1 & ne || 3 < (ne >> 1 & 7) || !(ne >> 4 & 1) || ne >> 5 >= Z.Ja || !pe || !t ? t = 0 : (L && (L[0] = pe), S && (S[0] = t), t = 1));
        }
        if (!t || (L = L[0], xe = xe[0], te && (j[0] != L || W[0] != xe))) return 3;
        P != null && (P[0] = Z, P.offset = a - P.w, e(4294967286 > a - P.w), e(P.offset == P.ha - u));
        break;
      }
      return V == 0 || V == 7 && te && P == null ? (N != null && (N[0] |= Z.na != null && 0 < Z.na.length), d != null && (d[0] = L), b != null && (b[0] = xe), 0) : V;
    }
    function ha(t, a, u) {
      var d = a.width, b = a.height, N = 0, L = 0, S = d, P = b;
      if (a.Da = t != null && 0 < t.Da, a.Da && (S = t.cd, P = t.bd, N = t.v, L = t.j, 11 > u || (N &= -2, L &= -2), 0 > N || 0 > L || 0 >= S || 0 >= P || N + S > d || L + P > b)) return 0;
      if (a.v = N, a.j = L, a.va = N + S, a.o = L + P, a.U = S, a.T = P, a.da = t != null && 0 < t.da, a.da) {
        if (!je(S, P, u = [t.ib], N = [t.hb])) return 0;
        a.ib = u[0], a.hb = N[0];
      }
      return a.ob = t != null && t.ob, a.Kb = t == null || !t.Sd, a.da && (a.ob = a.ib < 3 * d / 4 && a.hb < 3 * b / 4, a.Kb = 0), 1;
    }
    function fa(t) {
      if (t == null) return 2;
      if (11 > t.S) {
        var a = t.f.RGBA;
        a.fb += (t.height - 1) * a.A, a.A = -a.A;
      } else a = t.f.kb, t = t.height, a.O += (t - 1) * a.fa, a.fa = -a.fa, a.N += (t - 1 >> 1) * a.Ab, a.Ab = -a.Ab, a.W += (t - 1 >> 1) * a.Db, a.Db = -a.Db, a.F != null && (a.J += (t - 1) * a.lb, a.lb = -a.lb);
      return 0;
    }
    function ki(t, a, u, d) {
      if (d == null || 0 >= t || 0 >= a) return 2;
      if (u != null) {
        if (u.Da) {
          var b = u.cd, N = u.bd, L = -2 & u.v, S = -2 & u.j;
          if (0 > L || 0 > S || 0 >= b || 0 >= N || L + b > t || S + N > a) return 2;
          t = b, a = N;
        }
        if (u.da) {
          if (!je(t, a, b = [u.ib], N = [u.hb])) return 2;
          t = b[0], a = N[0];
        }
      }
      d.width = t, d.height = a;
      e: {
        var P = d.width, j = d.height;
        if (t = d.S, 0 >= P || 0 >= j || !(t >= ao && 13 > t)) t = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            L = N = b = a = 0;
            var W = (S = P * Xc[t]) * j;
            if (11 > t || (N = (j + 1) / 2 * (a = (P + 1) / 2), t == 12 && (L = (b = P) * j)), (j = o(W + 2 * N + L)) == null) {
              t = 1;
              break e;
            }
            d.sd = j, 11 > t ? ((P = d.f.RGBA).eb = j, P.fb = 0, P.A = S, P.size = W) : ((P = d.f.kb).y = j, P.O = 0, P.fa = S, P.Fd = W, P.f = j, P.N = 0 + W, P.Ab = a, P.Cd = N, P.ea = j, P.W = 0 + W + N, P.Db = a, P.Ed = N, t == 12 && (P.F = j, P.J = 0 + W + 2 * N), P.Tc = L, P.lb = b);
          }
          if (a = 1, b = d.S, N = d.width, L = d.height, b >= ao && 13 > b) if (11 > b) t = d.f.RGBA, a &= (S = Math.abs(t.A)) * (L - 1) + N <= t.size, a &= S >= N * Xc[b], a &= t.eb != null;
          else {
            t = d.f.kb, S = (N + 1) / 2, W = (L + 1) / 2, P = Math.abs(t.fa), j = Math.abs(t.Ab);
            var te = Math.abs(t.Db), ne = Math.abs(t.lb), Z = ne * (L - 1) + N;
            a &= P * (L - 1) + N <= t.Fd, a &= j * (W - 1) + S <= t.Cd, a = (a &= te * (W - 1) + S <= t.Ed) & P >= N & j >= S & te >= S, a &= t.y != null, a &= t.f != null, a &= t.ea != null, b == 12 && (a &= ne >= N, a &= Z <= t.Tc, a &= t.F != null);
          }
          else a = 0;
          t = a ? 0 : 2;
        }
      }
      return t != 0 || u != null && u.fd && (t = fa(d)), t;
    }
    var tn = 64, Pi = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Ii = 24, Ci = 32, da = 8, bn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    _e("Predictor0", "PredictorAdd0"), q.Predictor0 = function() {
      return 4278190080;
    }, q.Predictor1 = function(t) {
      return t;
    }, q.Predictor2 = function(t, a, u) {
      return a[u + 0];
    }, q.Predictor3 = function(t, a, u) {
      return a[u + 1];
    }, q.Predictor4 = function(t, a, u) {
      return a[u - 1];
    }, q.Predictor5 = function(t, a, u) {
      return Me(Me(t, a[u + 1]), a[u + 0]);
    }, q.Predictor6 = function(t, a, u) {
      return Me(t, a[u - 1]);
    }, q.Predictor7 = function(t, a, u) {
      return Me(t, a[u + 0]);
    }, q.Predictor8 = function(t, a, u) {
      return Me(a[u - 1], a[u + 0]);
    }, q.Predictor9 = function(t, a, u) {
      return Me(a[u + 0], a[u + 1]);
    }, q.Predictor10 = function(t, a, u) {
      return Me(Me(t, a[u - 1]), Me(a[u + 0], a[u + 1]));
    }, q.Predictor11 = function(t, a, u) {
      var d = a[u + 0];
      return 0 >= De(d >> 24 & 255, t >> 24 & 255, (a = a[u - 1]) >> 24 & 255) + De(d >> 16 & 255, t >> 16 & 255, a >> 16 & 255) + De(d >> 8 & 255, t >> 8 & 255, a >> 8 & 255) + De(255 & d, 255 & t, 255 & a) ? d : t;
    }, q.Predictor12 = function(t, a, u) {
      var d = a[u + 0];
      return (Ve((t >> 24 & 255) + (d >> 24 & 255) - ((a = a[u - 1]) >> 24 & 255)) << 24 | Ve((t >> 16 & 255) + (d >> 16 & 255) - (a >> 16 & 255)) << 16 | Ve((t >> 8 & 255) + (d >> 8 & 255) - (a >> 8 & 255)) << 8 | Ve((255 & t) + (255 & d) - (255 & a))) >>> 0;
    }, q.Predictor13 = function(t, a, u) {
      var d = a[u - 1];
      return (Fe((t = Me(t, a[u + 0])) >> 24 & 255, d >> 24 & 255) << 24 | Fe(t >> 16 & 255, d >> 16 & 255) << 16 | Fe(t >> 8 & 255, d >> 8 & 255) << 8 | Fe(t >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var ps = q.PredictorAdd0;
    q.PredictorAdd1 = qe, _e("Predictor2", "PredictorAdd2"), _e("Predictor3", "PredictorAdd3"), _e("Predictor4", "PredictorAdd4"), _e("Predictor5", "PredictorAdd5"), _e("Predictor6", "PredictorAdd6"), _e("Predictor7", "PredictorAdd7"), _e("Predictor8", "PredictorAdd8"), _e("Predictor9", "PredictorAdd9"), _e("Predictor10", "PredictorAdd10"), _e("Predictor11", "PredictorAdd11"), _e("Predictor12", "PredictorAdd12"), _e("Predictor13", "PredictorAdd13");
    var pa = q.PredictorAdd2;
    Ae("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
      return t >> 8 & 255;
    }, function(t) {
      return t;
    }), Ae("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
      return t;
    }, function(t) {
      return t >> 8 & 255;
    });
    var Qa, Cn = q.ColorIndexInverseTransform, ji = q.MapARGB, eo = q.VP8LColorIndexInverseTransformAlpha, to = q.MapAlpha, Fr = q.VP8LPredictorsAdd = [];
    Fr.length = 16, (q.VP8LPredictors = []).length = 16, (q.VP8LPredictorsAdd_C = []).length = 16, (q.VP8LPredictors_C = []).length = 16;
    var ei, yn, dn, Mr, wr, xr, Fi, Nr, Tt, ga, pn, jn, Mi, no, ma, ti, ni, Er, ri, Ei, ii, Or, va, Fn, Mn, _t, kt, Bt, $t = o(511), Lr = o(2041), ba = o(225), Oi = o(767), ro = 0, gs = Lr, io = ba, Sn = Oi, En = $t, ao = 0, oo = 1, Bc = 2, so = 3, co = 4, ms = 5, Dc = 6, vs = 7, bs = 8, lo = 9, ys = 10, g1 = [2, 3, 7], m1 = [3, 3, 11], qc = [280, 256, 256, 256, 40], v1 = [0, 1, 1, 1, 0], b1 = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], y1 = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], w1 = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], x1 = 8, ws = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], xs = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ya = null, N1 = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], L1 = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], zc = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], A1 = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], S1 = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], _1 = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], k1 = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Rr = [], Gn = [], Ar = [], P1 = 1, Uc = 2, Tr = [], On = [];
    ge("UpsampleRgbLinePair", ft, 3), ge("UpsampleBgrLinePair", Ct, 3), ge("UpsampleRgbaLinePair", Vn, 4), ge("UpsampleBgraLinePair", Jt, 4), ge("UpsampleArgbLinePair", on, 4), ge("UpsampleRgba4444LinePair", Ht, 2), ge("UpsampleRgb565LinePair", Mt, 2);
    var I1 = q.UpsampleRgbLinePair, C1 = q.UpsampleBgrLinePair, Hc = q.UpsampleRgbaLinePair, Wc = q.UpsampleBgraLinePair, Vc = q.UpsampleArgbLinePair, Gc = q.UpsampleRgba4444LinePair, j1 = q.UpsampleRgb565LinePair, uo = 16, ho = 1 << uo - 1, wa = -227, Ns = 482, F1 = 6, Yc = 0, M1 = o(256), E1 = o(256), O1 = o(256), R1 = o(256), T1 = o(Ns - wa), B1 = o(Ns - wa);
    sr("YuvToRgbRow", ft, 3), sr("YuvToBgrRow", Ct, 3), sr("YuvToRgbaRow", Vn, 4), sr("YuvToBgraRow", Jt, 4), sr("YuvToArgbRow", on, 4), sr("YuvToRgba4444Row", Ht, 2), sr("YuvToRgb565Row", Mt, 2);
    var $c = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], fo = [0, 2, 8], D1 = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], q1 = 1;
    this.WebPDecodeRGBA = function(t, a, u, d, b) {
      var N = oo, L = new Ai(), S = new Bn();
      L.ba = S, S.S = N, S.width = [S.width], S.height = [S.height];
      var P = S.width, j = S.height, W = new mr();
      if (W == null || t == null) var te = 2;
      else e(W != null), te = _i(t, a, u, W.width, W.height, W.Pd, W.Qd, W.format, null);
      if (te != 0 ? P = 0 : (P != null && (P[0] = W.width[0]), j != null && (j[0] = W.height[0]), P = 1), P) {
        S.width = S.width[0], S.height = S.height[0], d != null && (d[0] = S.width), b != null && (b[0] = S.height);
        e: {
          if (d = new vi(), (b = new aa()).data = t, b.w = a, b.ha = u, b.kd = 1, a = [0], e(b != null), ((t = _i(b.data, b.w, b.ha, null, null, null, a, null, b)) == 0 || t == 7) && a[0] && (t = 4), (a = t) == 0) {
            if (e(L != null), d.data = b.data, d.w = b.w + b.offset, d.ha = b.ha - b.offset, d.put = er, d.ac = en, d.bc = tr, d.ma = L, b.xa) {
              if ((t = In()) == null) {
                L = 1;
                break e;
              }
              if (function(ne, Z) {
                var xe = [0], pe = [0], V = [0];
                t: for (; ; ) {
                  if (ne == null) return 0;
                  if (Z == null) return ne.a = 2, 0;
                  if (ne.l = Z, ne.a = 0, J(ne.m, Z.data, Z.w, Z.ha), !Xe(ne.m, xe, pe, V)) {
                    ne.a = 3;
                    break t;
                  }
                  if (ne.xb = Uc, Z.width = xe[0], Z.height = pe[0], !ir(xe[0], pe[0], 1, ne, null)) break t;
                  return 1;
                }
                return e(ne.a != 0), 0;
              }(t, d)) {
                if (d = (a = ki(d.width, d.height, L.Oa, L.ba)) == 0) {
                  t: {
                    d = t;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break t;
                      }
                      if (e(d.s.yc != null), e(d.s.Ya != null), e(0 < d.s.Wb), e((u = d.l) != null), e((b = u.ma) != null), d.xb != 0) {
                        if (d.ca = b.ba, d.tb = b.tb, e(d.ca != null), !ha(b.Oa, u, so)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Xr(d, u.width) || u.da) break n;
                        if ((u.da || gt(d.ca.S)) && K(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && K()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !$e(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Un(d, d.V, d.Ba, d.c, d.i, u.o, hi)) break n;
                      b.Dc = d.Ma, d = 1;
                      break t;
                    }
                    e(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (a = t.a);
              } else a = t.a;
            } else {
              if ((t = new Xo()) == null) {
                L = 1;
                break e;
              }
              if (t.Fa = b.na, t.P = b.P, t.qc = b.Sa, Ta(t, d)) {
                if ((a = ki(d.width, d.height, L.Oa, L.ba)) == 0) {
                  if (t.Aa = 0, u = L.Oa, e((b = t) != null), u != null) {
                    if (0 < (P = 0 > (P = u.Md) ? 0 : 100 < P ? 255 : 255 * P / 100)) {
                      for (j = W = 0; 4 > j; ++j) 12 > (te = b.pb[j]).lc && (te.ia = P * D1[0 > te.lc ? 0 : te.lc] >> 3), W |= te.ia;
                      W && (alert("todo:VP8InitRandom"), b.ia = 1);
                    }
                    b.Ga = u.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0);
                  }
                  Jo(t, d) || (a = t.a);
                }
              } else a = t.a;
            }
            a == 0 && L.Oa != null && L.Oa.fd && (a = fa(L.ba));
          }
          L = a;
        }
        N = L != 0 ? null : 11 > N ? S.f.RGBA.eb : S.f.kb.y;
      } else N = null;
      return N;
    };
    var Xc = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(q, ie) {
    for (var de = "", A = 0; A < 4; A++) de += String.fromCharCode(q[ie++]);
    return de;
  }
  function v(q, ie) {
    return (q[ie + 0] << 0 | q[ie + 1] << 8 | q[ie + 2] << 16) >>> 0;
  }
  function m(q, ie) {
    return (q[ie + 0] << 0 | q[ie + 1] << 8 | q[ie + 2] << 16 | q[ie + 3] << 24) >>> 0;
  }
  new f();
  var x = [0], p = [0], M = [], I = new f(), E = n, k = function(q, ie) {
    var de = {}, A = 0, _ = !1, D = 0, R = 0;
    if (de.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(C, T, U, $) {
      for (var re = 0; re < $; re++) if (C[T + re] != U.charCodeAt(re)) return !0;
      return !1;
    }(q, ie, "RIFF", 4)) {
      for (m(q, ie += 4), ie += 8; ie < q.length; ) {
        var ce = g(q, ie), ae = m(q, ie += 4);
        ie += 4;
        var he = ae + (1 & ae);
        switch (ce) {
          case "VP8 ":
          case "VP8L":
            de.frames[A] === void 0 && (de.frames[A] = {}), (z = de.frames[A]).src_off = _ ? R : ie - 8, z.src_size = D + ae + 8, A++, _ && (_ = !1, D = 0, R = 0);
            break;
          case "VP8X":
            (z = de.header = {}).feature_flags = q[ie];
            var J = ie + 4;
            z.canvas_width = 1 + v(q, J), J += 3, z.canvas_height = 1 + v(q, J), J += 3;
            break;
          case "ALPH":
            _ = !0, D = he + 8, R = ie - 8;
            break;
          case "ANIM":
            (z = de.header).bgcolor = m(q, ie), J = ie + 4, z.loop_count = (ue = q)[(w = J) + 0] << 0 | ue[w + 1] << 8, J += 2;
            break;
          case "ANMF":
            var se, z;
            (z = de.frames[A] = {}).offset_x = 2 * v(q, ie), ie += 3, z.offset_y = 2 * v(q, ie), ie += 3, z.width = 1 + v(q, ie), ie += 3, z.height = 1 + v(q, ie), ie += 3, z.duration = v(q, ie), ie += 3, se = q[ie++], z.dispose = 1 & se, z.blend = se >> 1 & 1;
        }
        ce != "ANMF" && (ie += he);
      }
      var ue, w;
      return de;
    }
  }(E, 0);
  k.response = E, k.rgbaoutput = !0, k.dataurl = !1;
  var F = k.header ? k.header : null, G = k.frames ? k.frames : null;
  if (F) {
    F.loop_counter = F.loop_count, x = [F.canvas_height], p = [F.canvas_width];
    for (var le = 0; le < G.length && G[le].blend != 0; le++) ;
  }
  var fe = G[0], be = I.WebPDecodeRGBA(E, fe.src_off, fe.src_size, p, x);
  fe.rgba = be, fe.imgwidth = p[0], fe.imgheight = x[0];
  for (var Q = 0; Q < p[0] * x[0] * 4; Q++) M[Q] = be[Q];
  return this.width = p, this.height = x, this.data = M, this;
}
(function(n) {
  var e = function() {
    return typeof $s == "function";
  }, r = function(x, p, M, I) {
    var E = 4, k = c;
    switch (I) {
      case n.image_compression.FAST:
        E = 1, k = o;
        break;
      case n.image_compression.MEDIUM:
        E = 6, k = h;
        break;
      case n.image_compression.SLOW:
        E = 9, k = f;
    }
    x = i(x, p, M, k);
    var F = $s(x, { level: E });
    return n.__addimage__.arrayBufferToBinaryString(F);
  }, i = function(x, p, M, I) {
    for (var E, k, F, G = x.length / p, le = new Uint8Array(x.length + G), fe = v(), be = 0; be < G; be += 1) {
      if (F = be * p, E = x.subarray(F, F + p), I) le.set(I(E, M, k), F + be);
      else {
        for (var Q, q = fe.length, ie = []; Q < q; Q += 1) ie[Q] = fe[Q](E, M, k);
        var de = m(ie.concat());
        le.set(ie[de], F + be);
      }
      k = E;
    }
    return le;
  }, s = function(x) {
    var p = Array.apply([], x);
    return p.unshift(0), p;
  }, o = function(x, p) {
    var M, I = [], E = x.length;
    I[0] = 1;
    for (var k = 0; k < E; k += 1) M = x[k - p] || 0, I[k + 1] = x[k] - M + 256 & 255;
    return I;
  }, c = function(x, p, M) {
    var I, E = [], k = x.length;
    E[0] = 2;
    for (var F = 0; F < k; F += 1) I = M && M[F] || 0, E[F + 1] = x[F] - I + 256 & 255;
    return E;
  }, h = function(x, p, M) {
    var I, E, k = [], F = x.length;
    k[0] = 3;
    for (var G = 0; G < F; G += 1) I = x[G - p] || 0, E = M && M[G] || 0, k[G + 1] = x[G] + 256 - (I + E >>> 1) & 255;
    return k;
  }, f = function(x, p, M) {
    var I, E, k, F, G = [], le = x.length;
    G[0] = 4;
    for (var fe = 0; fe < le; fe += 1) I = x[fe - p] || 0, E = M && M[fe] || 0, k = M && M[fe - p] || 0, F = g(I, E, k), G[fe + 1] = x[fe] - F + 256 & 255;
    return G;
  }, g = function(x, p, M) {
    if (x === p && p === M) return x;
    var I = Math.abs(p - M), E = Math.abs(x - M), k = Math.abs(x + p - M - M);
    return I <= E && I <= k ? x : E <= k ? p : M;
  }, v = function() {
    return [s, o, c, h, f];
  }, m = function(x) {
    var p = x.map(function(M) {
      return M.reduce(function(I, E) {
        return I + Math.abs(E);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  n.processPNG = function(x, p, M, I) {
    var E, k, F, G, le, fe, be, Q, q, ie, de, A, _, D, R, ce = this.decode.FLATE_DECODE, ae = "";
    if (this.__addimage__.isArrayBuffer(x) && (x = new Uint8Array(x)), this.__addimage__.isArrayBufferView(x)) {
      if (x = (F = new Ch(x)).imgData, k = F.bits, E = F.colorSpace, le = F.colors, [4, 6].indexOf(F.colorType) !== -1) {
        if (F.bits === 8) {
          q = (Q = F.pixelBitlength == 32 ? new Uint32Array(F.decodePixels().buffer) : F.pixelBitlength == 16 ? new Uint16Array(F.decodePixels().buffer) : new Uint8Array(F.decodePixels().buffer)).length, de = new Uint8Array(q * F.colors), ie = new Uint8Array(q);
          var he, J = F.pixelBitlength - F.bits;
          for (D = 0, R = 0; D < q; D++) {
            for (_ = Q[D], he = 0; he < J; ) de[R++] = _ >>> he & 255, he += F.bits;
            ie[D] = _ >>> he & 255;
          }
        }
        if (F.bits === 16) {
          q = (Q = new Uint32Array(F.decodePixels().buffer)).length, de = new Uint8Array(q * (32 / F.pixelBitlength) * F.colors), ie = new Uint8Array(q * (32 / F.pixelBitlength)), A = F.colors > 1, D = 0, R = 0;
          for (var se = 0; D < q; ) _ = Q[D++], de[R++] = _ >>> 0 & 255, A && (de[R++] = _ >>> 16 & 255, _ = Q[D++], de[R++] = _ >>> 0 & 255), ie[se++] = _ >>> 16 & 255;
          k = 8;
        }
        I !== n.image_compression.NONE && e() ? (x = r(de, F.width * F.colors, F.colors, I), be = r(ie, F.width, 1, I)) : (x = de, be = ie, ce = void 0);
      }
      if (F.colorType === 3 && (E = this.color_spaces.INDEXED, fe = F.palette, F.transparency.indexed)) {
        var z = F.transparency.indexed, ue = 0;
        for (D = 0, q = z.length; D < q; ++D) ue += z[D];
        if ((ue /= 255) === q - 1 && z.indexOf(0) !== -1) G = [z.indexOf(0)];
        else if (ue !== q) {
          for (Q = F.decodePixels(), ie = new Uint8Array(Q.length), D = 0, q = Q.length; D < q; D++) ie[D] = z[Q[D]];
          be = r(ie, F.width, 1);
        }
      }
      var w = function(C) {
        var T;
        switch (C) {
          case n.image_compression.FAST:
            T = 11;
            break;
          case n.image_compression.MEDIUM:
            T = 13;
            break;
          case n.image_compression.SLOW:
            T = 14;
            break;
          default:
            T = 12;
        }
        return T;
      }(I);
      return ce === this.decode.FLATE_DECODE && (ae = "/Predictor " + w + " "), ae += "/Colors " + le + " /BitsPerComponent " + k + " /Columns " + F.width, (this.__addimage__.isArrayBuffer(x) || this.__addimage__.isArrayBufferView(x)) && (x = this.__addimage__.arrayBufferToBinaryString(x)), (be && this.__addimage__.isArrayBuffer(be) || this.__addimage__.isArrayBufferView(be)) && (be = this.__addimage__.arrayBufferToBinaryString(be)), { alias: M, data: x, index: p, filter: ce, decodeParameters: ae, transparency: G, palette: fe, sMask: be, predictor: w, width: F.width, height: F.height, bitsPerComponent: k, colorSpace: E };
    }
  };
})(Je.API), function(n) {
  n.processGIF89A = function(e, r, i, s) {
    var o = new jh(e), c = o.width, h = o.height, f = [];
    o.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: c, height: h }, v = new zs(100).encode(g, 100);
    return n.processJPEG.call(this, v, r, i, s);
  }, n.processGIF87A = n.processGIF89A;
}(Je.API), Xn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var e = 0; e < n; e++) {
      var r = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
      this.palette[e] = { red: s, green: i, blue: r, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, Xn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var n = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[n]();
  } catch (r) {
    St.log("bit decode error:" + r);
  }
}, Xn.prototype.bit1 = function() {
  var n, e = Math.ceil(this.width / 8), r = e % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var i = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++) for (var o = this.datav.getUint8(this.pos++, !0), c = i * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
      var f = this.palette[o >> 7 - h & 1];
      this.data[c + 4 * h] = f.blue, this.data[c + 4 * h + 1] = f.green, this.data[c + 4 * h + 2] = f.red, this.data[c + 4 * h + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, Xn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), e = n % 4, r = this.height - 1; r >= 0; r--) {
    for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < n; s++) {
      var o = this.datav.getUint8(this.pos++, !0), c = i * this.width * 4 + 2 * s * 4, h = o >> 4, f = 15 & o, g = this.palette[h];
      if (this.data[c] = g.blue, this.data[c + 1] = g.green, this.data[c + 2] = g.red, this.data[c + 3] = 255, 2 * s + 1 >= this.width) break;
      g = this.palette[f], this.data[c + 4] = g.blue, this.data[c + 4 + 1] = g.green, this.data[c + 4 + 2] = g.red, this.data[c + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, Xn.prototype.bit8 = function() {
  for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < this.width; i++) {
      var s = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 4 * i;
      if (s < this.palette.length) {
        var c = this.palette[s];
        this.data[o] = c.red, this.data[o + 1] = c.green, this.data[o + 2] = c.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, Xn.prototype.bit15 = function() {
  for (var n = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
    for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < this.width; s++) {
      var o = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var c = (o & e) / e * 255 | 0, h = (o >> 5 & e) / e * 255 | 0, f = (o >> 10 & e) / e * 255 | 0, g = o >> 15 ? 255 : 0, v = i * this.width * 4 + 4 * s;
      this.data[v] = f, this.data[v + 1] = h, this.data[v + 2] = c, this.data[v + 3] = g;
    }
    this.pos += n;
  }
}, Xn.prototype.bit16 = function() {
  for (var n = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
    for (var s = this.bottom_up ? i : this.height - 1 - i, o = 0; o < this.width; o++) {
      var c = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (c & e) / e * 255 | 0, f = (c >> 5 & r) / r * 255 | 0, g = (c >> 11) / e * 255 | 0, v = s * this.width * 4 + 4 * o;
      this.data[v] = g, this.data[v + 1] = f, this.data[v + 2] = h, this.data[v + 3] = 255;
    }
    this.pos += n;
  }
}, Xn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
      var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), c = e * this.width * 4 + 4 * r;
      this.data[c] = o, this.data[c + 1] = s, this.data[c + 2] = i, this.data[c + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, Xn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
    var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), c = this.datav.getUint8(this.pos++, !0), h = e * this.width * 4 + 4 * r;
    this.data[h] = o, this.data[h + 1] = s, this.data[h + 2] = i, this.data[h + 3] = c;
  }
}, Xn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processBMP = function(e, r, i, s) {
    var o = new Xn(e, !1), c = o.width, h = o.height, f = { data: o.getData(), width: c, height: h }, g = new zs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, i, s);
  };
}(Je.API), Bl.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processWEBP = function(e, r, i, s) {
    var o = new Bl(e), c = o.width, h = o.height, f = { data: o.getData(), width: c, height: h }, g = new zs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, i, s);
  };
}(Je.API), Je.API.processRGBA = function(n, e, r) {
  for (var i = n.data, s = i.length, o = new Uint8Array(s / 4 * 3), c = new Uint8Array(s / 4), h = 0, f = 0, g = 0; g < s; g += 4) {
    var v = i[g], m = i[g + 1], x = i[g + 2], p = i[g + 3];
    o[h++] = v, o[h++] = m, o[h++] = x, c[f++] = p;
  }
  var M = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(c), data: M, index: e, alias: r, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, Je.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, zi = Je.API, Po = zi.getCharWidthsArray = function(n, e) {
  var r, i, s = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), c = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : s.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = e.kerning ? e.kerning : s.metadata.Unicode.kerning, v = g.fof ? g.fof : 1, m = e.doKerning !== !1, x = 0, p = n.length, M = 0, I = h[0] || f, E = [];
  for (r = 0; r < p; r++) i = n.charCodeAt(r), typeof s.metadata.widthOfString == "function" ? E.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(i)) + c * (1e3 / o) || 0) / 1e3) : (x = m && xt(g[i]) === "object" && !isNaN(parseInt(g[i][M], 10)) ? g[i][M] / v : 0, E.push((h[i] || I) / f + x)), M = i;
  return E;
}, El = zi.getStringUnitWidth = function(n, e) {
  var r = (e = e || {}).fontSize || this.internal.getFontSize(), i = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
  return zi.processArabic && (n = zi.processArabic(n)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(n, r, s) / r : Po.apply(this, arguments).reduce(function(o, c) {
    return o + c;
  }, 0);
}, Ol = function(n, e, r, i) {
  for (var s = [], o = 0, c = n.length, h = 0; o !== c && h + e[o] < r; ) h += e[o], o++;
  s.push(n.slice(0, o));
  var f = o;
  for (h = 0; o !== c; ) h + e[o] > i && (s.push(n.slice(f, o)), h = 0, f = o), h += e[o], o++;
  return f !== o && s.push(n.slice(f, o)), s;
}, Rl = function(n, e, r) {
  r || (r = {});
  var i, s, o, c, h, f, g, v = [], m = [v], x = r.textIndent || 0, p = 0, M = 0, I = n.split(" "), E = Po.apply(this, [" ", r])[0];
  if (f = r.lineIndent === -1 ? I[0].length + 2 : r.lineIndent || 0) {
    var k = Array(f).join(" "), F = [];
    I.map(function(le) {
      (le = le.split(/\s*\n/)).length > 1 ? F = F.concat(le.map(function(fe, be) {
        return (be && fe.length ? `
` : "") + fe;
      })) : F.push(le[0]);
    }), I = F, f = El.apply(this, [k, r]);
  }
  for (o = 0, c = I.length; o < c; o++) {
    var G = 0;
    if (i = I[o], f && i[0] == `
` && (i = i.substr(1), G = 1), x + p + (M = (s = Po.apply(this, [i, r])).reduce(function(le, fe) {
      return le + fe;
    }, 0)) > e || G) {
      if (M > e) {
        for (h = Ol.apply(this, [i, s, e - (x + p), e]), v.push(h.shift()), v = [h.pop()]; h.length; ) m.push([h.shift()]);
        M = s.slice(i.length - (v[0] ? v[0].length : 0)).reduce(function(le, fe) {
          return le + fe;
        }, 0);
      } else v = [i];
      m.push(v), x = M + f, p = E;
    } else v.push(i), x += p + M, p = E;
  }
  return g = f ? function(le, fe) {
    return (fe ? k : "") + le.join(" ");
  } : function(le) {
    return le.join(" ");
  }, m.map(g);
}, zi.splitTextToSize = function(n, e, r) {
  var i, s = (r = r || {}).fontSize || this.internal.getFontSize(), o = (function(v) {
    if (v.widths && v.kerning) return { widths: v.widths, kerning: v.kerning };
    var m = this.internal.getFont(v.fontName, v.fontStyle);
    return m.metadata.Unicode ? { widths: m.metadata.Unicode.widths || { 0: 1 }, kerning: m.metadata.Unicode.kerning || {} } : { font: m.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, r);
  i = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var c = 1 * this.internal.scaleFactor * e / s;
  o.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / s : 0, o.lineIndent = r.lineIndent;
  var h, f, g = [];
  for (h = 0, f = i.length; h < f; h++) g = g.concat(Rl.apply(this, [i[h], c, o]));
  return g;
}, function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var e = "klmnopqrstuvwxyz", r = {}, i = {}, s = 0; s < e.length; s++) r[e[s]] = "0123456789abcdef"[s], i["0123456789abcdef"[s]] = e[s];
  var o = function(m) {
    return "0x" + parseInt(m, 10).toString(16);
  }, c = n.__fontmetrics__.compress = function(m) {
    var x, p, M, I, E = ["{"];
    for (var k in m) {
      if (x = m[k], isNaN(parseInt(k, 10)) ? p = "'" + k + "'" : (k = parseInt(k, 10), p = (p = o(k).slice(2)).slice(0, -1) + i[p.slice(-1)]), typeof x == "number") x < 0 ? (M = o(x).slice(3), I = "-") : (M = o(x).slice(2), I = ""), M = I + M.slice(0, -1) + i[M.slice(-1)];
      else {
        if (xt(x) !== "object") throw new Error("Don't know what to do with value type " + xt(x) + ".");
        M = c(x);
      }
      E.push(p + M);
    }
    return E.push("}"), E.join("");
  }, h = n.__fontmetrics__.uncompress = function(m) {
    if (typeof m != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var x, p, M, I, E = {}, k = 1, F = E, G = [], le = "", fe = "", be = m.length - 1, Q = 1; Q < be; Q += 1) (I = m[Q]) == "'" ? x ? (M = x.join(""), x = void 0) : x = [] : x ? x.push(I) : I == "{" ? (G.push([F, M]), F = {}, M = void 0) : I == "}" ? ((p = G.pop())[0][p[1]] = F, M = void 0, F = p[0]) : I == "-" ? k = -1 : M === void 0 ? r.hasOwnProperty(I) ? (le += r[I], M = parseInt(le, 16) * k, k = 1, le = "") : le += I : r.hasOwnProperty(I) ? (fe += r[I], F[M] = parseInt(fe, 16) * k, k = 1, M = void 0, fe = "") : fe += I;
    return E;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, v = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(m) {
    var x = m.font, p = v.Unicode[x.postScriptName];
    p && (x.metadata.Unicode = {}, x.metadata.Unicode.widths = p.widths, x.metadata.Unicode.kerning = p.kerning);
    var M = g.Unicode[x.postScriptName];
    M && (x.metadata.Unicode.encoding = M, x.encoding = M.codePages[0]);
  }]);
}(Je.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function(r) {
    for (var i = r.length, s = new Uint8Array(i), o = 0; o < i; o++) s[o] = r.charCodeAt(o);
    return s;
  };
  n.API.events.push(["addFont", function(r) {
    var i = void 0, s = r.font, o = r.instance;
    if (!s.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      if (typeof (i = o.existsFileInVFS(s.postScriptName) === !1 ? o.loadFile(s.postScriptName) : o.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      (function(c, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(Ca(h)), c.metadata = n.API.TTFFont.open(h), c.metadata.Unicode = c.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, c.metadata.glyIdsUsed = [0];
      })(s, i);
    }
  }]);
}(Je), /** @license
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
  function e() {
    return (Ze.canvg ? Promise.resolve(Ze.canvg) : import("./index.es-BftsJbzW.mjs")).catch(function(r) {
      return Promise.reject(new Error("Could not load canvg: " + r));
    }).then(function(r) {
      return r.default ? r.default : r;
    });
  }
  Je.API.addSvgAsImage = function(r, i, s, o, c, h, f, g) {
    if (isNaN(i) || isNaN(s)) throw St.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(c)) throw St.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var v = document.createElement("canvas");
    v.width = o, v.height = c;
    var m = v.getContext("2d");
    m.fillStyle = "#fff", m.fillRect(0, 0, v.width, v.height);
    var x = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, p = this;
    return e().then(function(M) {
      return M.fromString(m, r, x);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(M) {
      return M.render(x);
    }).then(function() {
      p.addImage(v.toDataURL("image/jpeg", 1), i, s, o, c, f, g);
    });
  };
}(), Je.API.putTotalPages = function(n) {
  var e, r = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var i = 1; i <= this.internal.getNumberOfPages(); i++) for (var s = 0; s < this.internal.pages[i].length; s++) this.internal.pages[i][s] = this.internal.pages[i][s].replace(e, r);
  return this;
}, Je.API.viewerPreferences = function(n, e) {
  var r;
  n = n || {}, e = e || !1;
  var i, s, o, c = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(c), f = [], g = 0, v = 0, m = 0;
  function x(M, I) {
    var E, k = !1;
    for (E = 0; E < M.length; E += 1) M[E] === I && (k = !0);
    return k;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(c)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, n === "reset" || e === !0) {
    var p = h.length;
    for (m = 0; m < p; m += 1) r[h[m]].value = r[h[m]].defaultValue, r[h[m]].explicitSet = !1;
  }
  if (xt(n) === "object") {
    for (s in n) if (o = n[s], x(h, s) && o !== void 0) {
      if (r[s].type === "boolean" && typeof o == "boolean") r[s].value = o;
      else if (r[s].type === "name" && x(r[s].valueSet, o)) r[s].value = o;
      else if (r[s].type === "integer" && Number.isInteger(o)) r[s].value = o;
      else if (r[s].type === "array") {
        for (g = 0; g < o.length; g += 1) if (i = !0, o[g].length === 1 && typeof o[g][0] == "number") f.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (v = 0; v < o[g].length; v += 1) typeof o[g][v] != "number" && (i = !1);
          i === !0 && f.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        r[s].value = "[" + f.join(" ") + "]";
      } else r[s].value = r[s].defaultValue;
      r[s].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var M, I = [];
    for (M in r) r[M].explicitSet === !0 && (r[M].type === "name" ? I.push("/" + M + " /" + r[M].value) : I.push("/" + M + " " + r[M].value));
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
  var e = function() {
    var i = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(i)), c = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + c.length + h.length + s.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(s + o + c + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, r = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  n.addMetadata = function(i, s) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: i, namespaceuri: s || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", e)), this;
  };
}(Je.API), function(n) {
  var e = n.API, r = e.pdfEscape16 = function(o, c) {
    for (var h, f = c.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], v = [""], m = 0, x = o.length; m < x; ++m) {
      if (h = c.metadata.characterToGlyph(o.charCodeAt(m)), c.metadata.glyIdsUsed.push(h), c.metadata.toUnicode[h] = o.charCodeAt(m), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(c.metadata.widthOfGlyph(h), 10)])), h == "0") return v.join("");
      h = h.toString(16), v.push(g[4 - h.length], h);
    }
    return v.join("");
  }, i = function(o) {
    var c, h, f, g, v, m, x;
    for (v = `/CIDInit /ProcSet findresource begin
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
endcodespacerange`, f = [], m = 0, x = (h = Object.keys(o).sort(function(p, M) {
      return p - M;
    })).length; m < x; m++) c = h[m], f.length >= 100 && (v += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[c] !== void 0 && o[c] !== null && typeof o[c].toString == "function" && (g = ("0000" + o[c].toString(16)).slice(-4), c = ("0000" + (+c).toString(16)).slice(-4), f.push("<" + c + "><" + g + ">"));
    return f.length && (v += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), v += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  e.events.push(["putFont", function(o) {
    (function(c) {
      var h = c.font, f = c.out, g = c.newObject, v = c.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "Identity-H") {
        for (var m = h.metadata.Unicode.widths, x = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", M = 0; M < x.length; M++) p += String.fromCharCode(x[M]);
        var I = g();
        v({ data: p, addLength1: !0, objectId: I }), f("endobj");
        var E = g();
        v({ data: i(h.metadata.toUnicode), addLength1: !0, objectId: E }), f("endobj");
        var k = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Hi(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var F = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Hi(h.fontName)), f("/FontDescriptor " + k + " 0 R"), f("/W " + n.API.PDFObject.convert(m)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + E + " 0 R"), f("/BaseFont /" + Hi(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + F + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]), e.events.push(["putFont", function(o) {
    (function(c) {
      var h = c.font, f = c.out, g = c.newObject, v = c.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var m = h.metadata.rawData, x = "", p = 0; p < m.length; p++) x += String.fromCharCode(m[p]);
        var M = g();
        v({ data: x, addLength1: !0, objectId: M }), f("endobj");
        var I = g();
        v({ data: i(h.metadata.toUnicode), addLength1: !0, objectId: I }), f("endobj");
        var E = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + M + " 0 R"), f("/Flags 96"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + Hi(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var k = 0; k < h.metadata.hmtx.widths.length; k++) h.metadata.hmtx.widths[k] = parseInt(h.metadata.hmtx.widths[k] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + Hi(h.fontName) + "/FontDescriptor " + E + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]);
  var s = function(o) {
    var c, h = o.text || "", f = o.x, g = o.y, v = o.options || {}, m = o.mutex || {}, x = m.pdfEscape, p = m.activeFontKey, M = m.fonts, I = p, E = "", k = 0, F = "", G = M[I].encoding;
    if (M[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: v, mutex: m };
    for (F = h, I = p, Array.isArray(h) && (F = h[0]), k = 0; k < F.length; k += 1) M[I].metadata.hasOwnProperty("cmap") && (c = M[I].metadata.cmap.unicode.codeMap[F[k].charCodeAt(0)]), c || F[k].charCodeAt(0) < 256 && M[I].metadata.hasOwnProperty("Unicode") ? E += F[k] : E += "";
    var le = "";
    return parseInt(I.slice(1)) < 14 || G === "WinAnsiEncoding" ? le = x(E, I).split("").map(function(fe) {
      return fe.charCodeAt(0).toString(16);
    }).join("") : G === "Identity-H" && (le = r(E, M[I])), m.isHex = !0, { text: le, x: f, y: g, options: v, mutex: m };
  };
  e.events.push(["postProcessText", function(o) {
    var c = o.text || "", h = [], f = { text: c, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(c)) {
      var g = 0;
      for (g = 0; g < c.length; g += 1) Array.isArray(c[g]) && c[g].length === 3 ? h.push([s(Object.assign({}, f, { text: c[g][0] })).text, c[g][1], c[g][2]]) : h.push(s(Object.assign({}, f, { text: c[g] })).text);
      o.text = h;
    } else o.text = s(Object.assign({}, f, { text: c })).text;
  }]);
}(Je), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  n.existsFileInVFS = function(r) {
    return e.call(this), this.internal.vFS[r] !== void 0;
  }, n.addFileToVFS = function(r, i) {
    return e.call(this), this.internal.vFS[r] = i, this;
  }, n.getFileFromVFS = function(r) {
    return e.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
  };
}(Je.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(i) {
    var s, o, c, h, f, g, v, m = e, x = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], M = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, E = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], k = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), F = !1, G = 0;
    this.__bidiEngine__ = {};
    var le = function(A) {
      var _ = A.charCodeAt(), D = _ >> 8, R = I[D];
      return R !== void 0 ? m[256 * R + (255 & _)] : D === 252 || D === 253 ? "AL" : k.test(D) ? "L" : D === 8 ? "R" : "N";
    }, fe = function(A) {
      for (var _, D = 0; D < A.length; D++) {
        if ((_ = le(A.charAt(D))) === "L") return !1;
        if (_ === "R") return !0;
      }
      return !1;
    }, be = function(A, _, D, R) {
      var ce, ae, he, J, se = _[R];
      switch (se) {
        case "L":
        case "R":
          F = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          F && (se = "AN");
          break;
        case "AL":
          F = !0, se = "R";
          break;
        case "WS":
          se = "N";
          break;
        case "CS":
          R < 1 || R + 1 >= _.length || (ce = D[R - 1]) !== "EN" && ce !== "AN" || (ae = _[R + 1]) !== "EN" && ae !== "AN" ? se = "N" : F && (ae = "AN"), se = ae === ce ? ae : "N";
          break;
        case "ES":
          se = (ce = R > 0 ? D[R - 1] : "B") === "EN" && R + 1 < _.length && _[R + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (R > 0 && D[R - 1] === "EN") {
            se = "EN";
            break;
          }
          if (F) {
            se = "N";
            break;
          }
          for (he = R + 1, J = _.length; he < J && _[he] === "ET"; ) he++;
          se = he < J && _[he] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (c && !h) {
            for (J = _.length, he = R + 1; he < J && _[he] === "NSM"; ) he++;
            if (he < J) {
              var z = A[R], ue = z >= 1425 && z <= 2303 || z === 64286;
              if (ce = _[he], ue && (ce === "R" || ce === "AL")) {
                se = "R";
                break;
              }
            }
          }
          se = R < 1 || (ce = _[R - 1]) === "B" ? "N" : D[R - 1];
          break;
        case "B":
          F = !1, s = !0, se = G;
          break;
        case "S":
          o = !0, se = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          F = !1;
          break;
        case "BN":
          se = "N";
      }
      return se;
    }, Q = function(A, _, D) {
      var R = A.split("");
      return D && q(R, D, { hiLevel: G }), R.reverse(), _ && _.reverse(), R.join("");
    }, q = function(A, _, D) {
      var R, ce, ae, he, J, se = -1, z = A.length, ue = 0, w = [], C = G ? p : x, T = [];
      for (F = !1, s = !1, o = !1, ce = 0; ce < z; ce++) T[ce] = le(A[ce]);
      for (ae = 0; ae < z; ae++) {
        if (J = ue, w[ae] = be(A, T, w, ae), R = 240 & (ue = C[J][M[w[ae]]]), ue &= 15, _[ae] = he = C[ue][5], R > 0) if (R === 16) {
          for (ce = se; ce < ae; ce++) _[ce] = 1;
          se = -1;
        } else se = -1;
        if (C[ue][6]) se === -1 && (se = ae);
        else if (se > -1) {
          for (ce = se; ce < ae; ce++) _[ce] = he;
          se = -1;
        }
        T[ae] === "B" && (_[ae] = 0), D.hiLevel |= he;
      }
      o && function(U, $, re) {
        for (var ee = 0; ee < re; ee++) if (U[ee] === "S") {
          $[ee] = G;
          for (var oe = ee - 1; oe >= 0 && U[oe] === "WS"; oe--) $[oe] = G;
        }
      }(T, _, z);
    }, ie = function(A, _, D, R, ce) {
      if (!(ce.hiLevel < A)) {
        if (A === 1 && G === 1 && !s) return _.reverse(), void (D && D.reverse());
        for (var ae, he, J, se, z = _.length, ue = 0; ue < z; ) {
          if (R[ue] >= A) {
            for (J = ue + 1; J < z && R[J] >= A; ) J++;
            for (se = ue, he = J - 1; se < he; se++, he--) ae = _[se], _[se] = _[he], _[he] = ae, D && (ae = D[se], D[se] = D[he], D[he] = ae);
            ue = J;
          }
          ue++;
        }
      }
    }, de = function(A, _, D) {
      var R = A.split(""), ce = { hiLevel: G };
      return D || (D = []), q(R, D, ce), function(ae, he, J) {
        if (J.hiLevel !== 0 && v) for (var se, z = 0; z < ae.length; z++) he[z] === 1 && (se = E.indexOf(ae[z])) >= 0 && (ae[z] = E[se + 1]);
      }(R, D, ce), ie(2, R, _, D, ce), ie(1, R, _, D, ce), R.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(A, _, D) {
      if (function(ce, ae) {
        if (ae) for (var he = 0; he < ce.length; he++) ae[he] = he;
        h === void 0 && (h = fe(ce)), g === void 0 && (g = fe(ce));
      }(A, _), c || !f || g) if (c && f && h ^ g) G = h ? 1 : 0, A = Q(A, _, D);
      else if (!c && f && g) G = h ? 1 : 0, A = de(A, _, D), A = Q(A, _);
      else if (!c || h || f || g) {
        if (c && !f && h ^ g) A = Q(A, _), h ? (G = 0, A = de(A, _, D)) : (G = 1, A = de(A, _, D), A = Q(A, _));
        else if (c && h && !f && g) G = 1, A = de(A, _, D), A = Q(A, _);
        else if (!c && !f && h ^ g) {
          var R = v;
          h ? (G = 1, A = de(A, _, D), G = 0, v = !1, A = de(A, _, D), v = R) : (G = 0, A = de(A, _, D), A = Q(A, _), G = 1, v = !1, A = de(A, _, D), v = R, A = Q(A, _));
        }
      } else G = 0, A = de(A, _, D);
      else G = h ? 1 : 0, A = de(A, _, D);
      return A;
    }, this.__bidiEngine__.setOptions = function(A) {
      A && (c = A.isInputVisual, f = A.isOutputVisual, h = A.isInputRtl, g = A.isOutputRtl, v = A.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(i), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(i) {
    var s = i.text;
    i.x, i.y;
    var o = i.options || {};
    i.mutex, o.lang;
    var c = [];
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, r.setOptions(o), Object.prototype.toString.call(s) === "[object Array]") {
      var h = 0;
      for (c = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? c.push([r.doBidiReorder(s[h][0]), s[h][1], s[h][2]]) : c.push([r.doBidiReorder(s[h])]);
      i.text = c;
    } else i.text = r.doBidiReorder(s);
    r.setOptions({ isInputVisual: !0 });
  }]);
}(Je), Je.API.TTFFont = function() {
  function n(e) {
    var r;
    if (this.rawData = e, r = this.contents = new Yr(e), this.contents.pos = 4, r.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    r.pos = 0, this.parse(), this.subset = new Gh(this), this.registerTTF();
  }
  return n.open = function(e) {
    return new n(e);
  }, n.prototype.parse = function() {
    return this.directory = new Fh(this.contents), this.head = new Eh(this), this.name = new Dh(this), this.cmap = new h1(this), this.toUnicode = {}, this.hhea = new Oh(this), this.maxp = new qh(this), this.hmtx = new zh(this), this.post = new Th(this), this.os2 = new Rh(this), this.loca = new Vh(this), this.glyf = new Uh(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var e, r, i, s, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var c, h, f, g;
      for (g = [], c = 0, h = (f = this.bbox).length; c < h; c++) e = f[c], g.push(Math.round(e * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (i = 255 & (s = this.post.italic_angle), (32768 & (r = s >> 16)) != 0 && (r = -(1 + (65535 ^ r))), this.italicAngle = +(r + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(e) {
    var r;
    return ((r = this.cmap.unicode) != null ? r.codeMap[e] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(e) {
    var r;
    return r = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * r;
  }, n.prototype.widthOfString = function(e, r, i) {
    var s, o, c, h;
    for (c = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) s = e.charCodeAt(o), c += this.widthOfGlyph(this.characterToGlyph(s)) + i * (1e3 / r) || 0;
    return c * (r / 1e3);
  }, n.prototype.lineHeight = function(e, r) {
    var i;
    return r == null && (r = !1), i = r ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * e;
  }, n;
}();
var Qn, Yr = function() {
  function n(e) {
    this.data = e ?? [], this.pos = 0, this.length = this.data.length;
  }
  return n.prototype.readByte = function() {
    return this.data[this.pos++];
  }, n.prototype.writeByte = function(e) {
    return this.data[this.pos++] = e;
  }, n.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, n.prototype.writeUInt32 = function(e) {
    return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, n.prototype.readInt32 = function() {
    var e;
    return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
  }, n.prototype.writeInt32 = function(e) {
    return e < 0 && (e += 4294967296), this.writeUInt32(e);
  }, n.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, n.prototype.writeUInt16 = function(e) {
    return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, n.prototype.readInt16 = function() {
    var e;
    return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
  }, n.prototype.writeInt16 = function(e) {
    return e < 0 && (e += 65536), this.writeUInt16(e);
  }, n.prototype.readString = function(e) {
    var r, i;
    for (i = [], r = 0; 0 <= e ? r < e : r > e; r = 0 <= e ? ++r : --r) i[r] = String.fromCharCode(this.readByte());
    return i.join("");
  }, n.prototype.writeString = function(e) {
    var r, i, s;
    for (s = [], r = 0, i = e.length; 0 <= i ? r < i : r > i; r = 0 <= i ? ++r : --r) s.push(this.writeByte(e.charCodeAt(r)));
    return s;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, n.prototype.readLongLong = function() {
    var e, r, i, s, o, c, h, f;
    return e = this.readByte(), r = this.readByte(), i = this.readByte(), s = this.readByte(), o = this.readByte(), c = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ r) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ o) + 65536 * (255 ^ c) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * e + 281474976710656 * r + 1099511627776 * i + 4294967296 * s + 16777216 * o + 65536 * c + 256 * h + f;
  }, n.prototype.writeLongLong = function(e) {
    var r, i;
    return r = Math.floor(e / 4294967296), i = 4294967295 & e, this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, n.prototype.read = function(e) {
    var r, i;
    for (r = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) r.push(this.readByte());
    return r;
  }, n.prototype.write = function(e) {
    var r, i, s, o;
    for (o = [], i = 0, s = e.length; i < s; i++) r = e[i], o.push(this.writeByte(r));
    return o;
  }, n;
}(), Fh = function() {
  var n;
  function e(r) {
    var i, s, o;
    for (this.scalarType = r.readInt(), this.tableCount = r.readShort(), this.searchRange = r.readShort(), this.entrySelector = r.readShort(), this.rangeShift = r.readShort(), this.tables = {}, s = 0, o = this.tableCount; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) i = { tag: r.readString(4), checksum: r.readInt(), offset: r.readInt(), length: r.readInt() }, this.tables[i.tag] = i;
  }
  return e.prototype.encode = function(r) {
    var i, s, o, c, h, f, g, v, m, x, p, M, I;
    for (I in p = Object.keys(r).length, f = Math.log(2), m = 16 * Math.floor(Math.log(p) / f), c = Math.floor(m / f), v = 16 * p - m, (s = new Yr()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(m), s.writeShort(c), s.writeShort(v), o = 16 * p, g = s.pos + o, h = null, M = [], r) for (x = r[I], s.writeString(I), s.writeInt(n(x)), s.writeInt(g), s.writeInt(x.length), M = M.concat(x), I === "head" && (h = g), g += x.length; g % 4; ) M.push(0), g++;
    return s.write(M), i = 2981146554 - n(s.data), s.pos = h + 8, s.writeUInt32(i), s.data;
  }, n = function(r) {
    var i, s, o, c;
    for (r = f1.call(r); r.length % 4; ) r.push(0);
    for (o = new Yr(r), s = 0, i = 0, c = r.length; i < c; i = i += 4) s += o.readUInt32();
    return 4294967295 & s;
  }, e;
}(), Mh = {}.hasOwnProperty, pr = function(n, e) {
  for (var r in e) Mh.call(e, r) && (n[r] = e[r]);
  function i() {
    this.constructor = n;
  }
  return i.prototype = e.prototype, n.prototype = new i(), n.__super__ = e.prototype, n;
};
Qn = function() {
  function n(e) {
    var r;
    this.file = e, r = this.file.directory.tables[this.tag], this.exists = !!r, r && (this.offset = r.offset, this.length = r.length, this.parse(this.file.contents));
  }
  return n.prototype.parse = function() {
  }, n.prototype.encode = function() {
  }, n.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, n;
}();
var Eh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "head", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.revision = r.readInt(), this.checkSumAdjustment = r.readInt(), this.magicNumber = r.readInt(), this.flags = r.readShort(), this.unitsPerEm = r.readShort(), this.created = r.readLongLong(), this.modified = r.readLongLong(), this.xMin = r.readShort(), this.yMin = r.readShort(), this.xMax = r.readShort(), this.yMax = r.readShort(), this.macStyle = r.readShort(), this.lowestRecPPEM = r.readShort(), this.fontDirectionHint = r.readShort(), this.indexToLocFormat = r.readShort(), this.glyphDataFormat = r.readShort();
  }, e.prototype.encode = function(r) {
    var i;
    return (i = new Yr()).writeInt(this.version), i.writeInt(this.revision), i.writeInt(this.checkSumAdjustment), i.writeInt(this.magicNumber), i.writeShort(this.flags), i.writeShort(this.unitsPerEm), i.writeLongLong(this.created), i.writeLongLong(this.modified), i.writeShort(this.xMin), i.writeShort(this.yMin), i.writeShort(this.xMax), i.writeShort(this.yMax), i.writeShort(this.macStyle), i.writeShort(this.lowestRecPPEM), i.writeShort(this.fontDirectionHint), i.writeShort(r), i.writeShort(this.glyphDataFormat), i.data;
  }, e;
}(), Dl = function() {
  function n(e, r) {
    var i, s, o, c, h, f, g, v, m, x, p, M, I, E, k, F, G;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = r + e.readInt(), m = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte();
        break;
      case 4:
        for (p = e.readUInt16(), x = p / 2, e.pos += 6, o = function() {
          var le, fe;
          for (fe = [], f = le = 0; 0 <= x ? le < x : le > x; f = 0 <= x ? ++le : --le) fe.push(e.readUInt16());
          return fe;
        }(), e.pos += 2, I = function() {
          var le, fe;
          for (fe = [], f = le = 0; 0 <= x ? le < x : le > x; f = 0 <= x ? ++le : --le) fe.push(e.readUInt16());
          return fe;
        }(), g = function() {
          var le, fe;
          for (fe = [], f = le = 0; 0 <= x ? le < x : le > x; f = 0 <= x ? ++le : --le) fe.push(e.readUInt16());
          return fe;
        }(), v = function() {
          var le, fe;
          for (fe = [], f = le = 0; 0 <= x ? le < x : le > x; f = 0 <= x ? ++le : --le) fe.push(e.readUInt16());
          return fe;
        }(), s = (this.length - e.pos + this.offset) / 2, h = function() {
          var le, fe;
          for (fe = [], f = le = 0; 0 <= s ? le < s : le > s; f = 0 <= s ? ++le : --le) fe.push(e.readUInt16());
          return fe;
        }(), f = k = 0, G = o.length; k < G; f = ++k) for (E = o[f], i = F = M = I[f]; M <= E ? F <= E : F >= E; i = M <= E ? ++F : --F) v[f] === 0 ? c = i + g[f] : (c = h[v[f] / 2 + (i - M) - (x - f)] || 0) !== 0 && (c += g[f]), this.codeMap[i] = 65535 & c;
    }
    e.pos = m;
  }
  return n.encode = function(e, r) {
    var i, s, o, c, h, f, g, v, m, x, p, M, I, E, k, F, G, le, fe, be, Q, q, ie, de, A, _, D, R, ce, ae, he, J, se, z, ue, w, C, T, U, $, re, ee, oe, Ie, ke, Te;
    switch (R = new Yr(), c = Object.keys(e).sort(function(Re, $e) {
      return Re - $e;
    }), r) {
      case "macroman":
        for (I = 0, E = function() {
          var Re = [];
          for (M = 0; M < 256; ++M) Re.push(0);
          return Re;
        }(), F = { 0: 0 }, o = {}, ce = 0, se = c.length; ce < se; ce++) F[oe = e[s = c[ce]]] == null && (F[oe] = ++I), o[s] = { old: e[s], new: F[e[s]] }, E[s] = F[e[s]];
        return R.writeUInt16(1), R.writeUInt16(0), R.writeUInt32(12), R.writeUInt16(0), R.writeUInt16(262), R.writeUInt16(0), R.write(E), { charMap: o, subtable: R.data, maxGlyphID: I + 1 };
      case "unicode":
        for (_ = [], m = [], G = 0, F = {}, i = {}, k = g = null, ae = 0, z = c.length; ae < z; ae++) F[fe = e[s = c[ae]]] == null && (F[fe] = ++G), i[s] = { old: fe, new: F[fe] }, h = F[fe] - s, k != null && h === g || (k && m.push(k), _.push(s), g = h), k = s;
        for (k && m.push(k), m.push(65535), _.push(65535), de = 2 * (ie = _.length), q = 2 * Math.pow(Math.log(ie) / Math.LN2, 2), x = Math.log(q / 2) / Math.LN2, Q = 2 * ie - q, f = [], be = [], p = [], M = he = 0, ue = _.length; he < ue; M = ++he) {
          if (A = _[M], v = m[M], A === 65535) {
            f.push(0), be.push(0);
            break;
          }
          if (A - (D = i[A].new) >= 32768) for (f.push(0), be.push(2 * (p.length + ie - M)), s = J = A; A <= v ? J <= v : J >= v; s = A <= v ? ++J : --J) p.push(i[s].new);
          else f.push(D - A), be.push(0);
        }
        for (R.writeUInt16(3), R.writeUInt16(1), R.writeUInt32(12), R.writeUInt16(4), R.writeUInt16(16 + 8 * ie + 2 * p.length), R.writeUInt16(0), R.writeUInt16(de), R.writeUInt16(q), R.writeUInt16(x), R.writeUInt16(Q), re = 0, w = m.length; re < w; re++) s = m[re], R.writeUInt16(s);
        for (R.writeUInt16(0), ee = 0, C = _.length; ee < C; ee++) s = _[ee], R.writeUInt16(s);
        for (Ie = 0, T = f.length; Ie < T; Ie++) h = f[Ie], R.writeUInt16(h);
        for (ke = 0, U = be.length; ke < U; ke++) le = be[ke], R.writeUInt16(le);
        for (Te = 0, $ = p.length; Te < $; Te++) I = p[Te], R.writeUInt16(I);
        return { charMap: i, subtable: R.data, maxGlyphID: G + 1 };
    }
  }, n;
}(), h1 = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "cmap", e.prototype.parse = function(r) {
    var i, s, o;
    for (r.pos = this.offset, this.version = r.readUInt16(), o = r.readUInt16(), this.tables = [], this.unicode = null, s = 0; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) i = new Dl(r, this.offset), this.tables.push(i), i.isUnicode && this.unicode == null && (this.unicode = i);
    return !0;
  }, e.encode = function(r, i) {
    var s, o;
    return i == null && (i = "macroman"), s = Dl.encode(r, i), (o = new Yr()).writeUInt16(0), o.writeUInt16(1), s.table = o.data.concat(s.subtable), s;
  }, e;
}(), Oh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "hhea", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.ascender = r.readShort(), this.decender = r.readShort(), this.lineGap = r.readShort(), this.advanceWidthMax = r.readShort(), this.minLeftSideBearing = r.readShort(), this.minRightSideBearing = r.readShort(), this.xMaxExtent = r.readShort(), this.caretSlopeRise = r.readShort(), this.caretSlopeRun = r.readShort(), this.caretOffset = r.readShort(), r.pos += 8, this.metricDataFormat = r.readShort(), this.numberOfMetrics = r.readUInt16();
  }, e;
}(), Rh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "OS/2", e.prototype.parse = function(r) {
    if (r.pos = this.offset, this.version = r.readUInt16(), this.averageCharWidth = r.readShort(), this.weightClass = r.readUInt16(), this.widthClass = r.readUInt16(), this.type = r.readShort(), this.ySubscriptXSize = r.readShort(), this.ySubscriptYSize = r.readShort(), this.ySubscriptXOffset = r.readShort(), this.ySubscriptYOffset = r.readShort(), this.ySuperscriptXSize = r.readShort(), this.ySuperscriptYSize = r.readShort(), this.ySuperscriptXOffset = r.readShort(), this.ySuperscriptYOffset = r.readShort(), this.yStrikeoutSize = r.readShort(), this.yStrikeoutPosition = r.readShort(), this.familyClass = r.readShort(), this.panose = function() {
      var i, s;
      for (s = [], i = 0; i < 10; ++i) s.push(r.readByte());
      return s;
    }(), this.charRange = function() {
      var i, s;
      for (s = [], i = 0; i < 4; ++i) s.push(r.readInt());
      return s;
    }(), this.vendorID = r.readString(4), this.selection = r.readShort(), this.firstCharIndex = r.readShort(), this.lastCharIndex = r.readShort(), this.version > 0 && (this.ascent = r.readShort(), this.descent = r.readShort(), this.lineGap = r.readShort(), this.winAscent = r.readShort(), this.winDescent = r.readShort(), this.codePageRange = function() {
      var i, s;
      for (s = [], i = 0; i < 2; i = ++i) s.push(r.readInt());
      return s;
    }(), this.version > 1)) return this.xHeight = r.readShort(), this.capHeight = r.readShort(), this.defaultChar = r.readShort(), this.breakChar = r.readShort(), this.maxContext = r.readShort();
  }, e;
}(), Th = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "post", e.prototype.parse = function(r) {
    var i, s, o;
    switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var c;
        for (s = r.readUInt16(), this.glyphNameIndex = [], c = 0; 0 <= s ? c < s : c > s; c = 0 <= s ? ++c : --c) this.glyphNameIndex.push(r.readUInt16());
        for (this.names = [], o = []; r.pos < this.offset + this.length; ) i = r.readByte(), o.push(this.names.push(r.readString(i)));
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
  }, e;
}(), Bh = function(n, e) {
  this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, Dh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "name", e.prototype.parse = function(r) {
    var i, s, o, c, h, f, g, v, m, x, p;
    for (r.pos = this.offset, r.readShort(), i = r.readShort(), f = r.readShort(), s = [], c = 0; 0 <= i ? c < i : c > i; c = 0 <= i ? ++c : --c) s.push({ platformID: r.readShort(), encodingID: r.readShort(), languageID: r.readShort(), nameID: r.readShort(), length: r.readShort(), offset: this.offset + f + r.readShort() });
    for (g = {}, c = m = 0, x = s.length; m < x; c = ++m) o = s[c], r.pos = o.offset, v = r.readString(o.length), h = new Bh(v, o), g[p = o.nameID] == null && (g[p] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, e;
}(), qh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "maxp", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.numGlyphs = r.readUInt16(), this.maxPoints = r.readUInt16(), this.maxContours = r.readUInt16(), this.maxCompositePoints = r.readUInt16(), this.maxComponentContours = r.readUInt16(), this.maxZones = r.readUInt16(), this.maxTwilightPoints = r.readUInt16(), this.maxStorage = r.readUInt16(), this.maxFunctionDefs = r.readUInt16(), this.maxInstructionDefs = r.readUInt16(), this.maxStackElements = r.readUInt16(), this.maxSizeOfInstructions = r.readUInt16(), this.maxComponentElements = r.readUInt16(), this.maxComponentDepth = r.readUInt16();
  }, e;
}(), zh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "hmtx", e.prototype.parse = function(r) {
    var i, s, o, c, h, f, g;
    for (r.pos = this.offset, this.metrics = [], i = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? i < f : i > f; i = 0 <= f ? ++i : --i) this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var v, m;
      for (m = [], i = v = 0; 0 <= o ? v < o : v > o; i = 0 <= o ? ++v : --v) m.push(r.readInt16());
      return m;
    }(), this.widths = (function() {
      var v, m, x, p;
      for (p = [], v = 0, m = (x = this.metrics).length; v < m; v++) c = x[v], p.push(c.advance);
      return p;
    }).call(this), s = this.widths[this.widths.length - 1], g = [], i = h = 0; 0 <= o ? h < o : h > o; i = 0 <= o ? ++h : --h) g.push(this.widths.push(s));
    return g;
  }, e.prototype.forGlyph = function(r) {
    return r in this.metrics ? this.metrics[r] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[r - this.metrics.length] };
  }, e;
}(), f1 = [].slice, Uh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "glyf", e.prototype.parse = function() {
    return this.cache = {};
  }, e.prototype.glyphFor = function(r) {
    var i, s, o, c, h, f, g, v, m, x;
    return r in this.cache ? this.cache[r] : (c = this.file.loca, i = this.file.contents, s = c.indexOf(r), (o = c.lengthOf(r)) === 0 ? this.cache[r] = null : (i.pos = this.offset + s, h = (f = new Yr(i.read(o))).readShort(), v = f.readShort(), x = f.readShort(), g = f.readShort(), m = f.readShort(), this.cache[r] = h === -1 ? new Wh(f, v, x, g, m) : new Hh(f, h, v, x, g, m), this.cache[r]));
  }, e.prototype.encode = function(r, i, s) {
    var o, c, h, f, g;
    for (h = [], c = [], f = 0, g = i.length; f < g; f++) o = r[i[f]], c.push(h.length), o && (h = h.concat(o.encode(s)));
    return c.push(h.length), { table: h, offsets: c };
  }, e;
}(), Hh = function() {
  function n(e, r, i, s, o, c) {
    this.raw = e, this.numberOfContours = r, this.xMin = i, this.yMin = s, this.xMax = o, this.yMax = c, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
}(), Wh = function() {
  function n(e, r, i, s, o) {
    var c, h;
    for (this.raw = e, this.xMin = r, this.yMin = i, this.xMax = s, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], c = this.raw; h = c.readShort(), this.glyphOffsets.push(c.pos), this.glyphIDs.push(c.readUInt16()), 32 & h; ) c.pos += 1 & h ? 4 : 2, 128 & h ? c.pos += 8 : 64 & h ? c.pos += 4 : 8 & h && (c.pos += 2);
  }
  return n.prototype.encode = function() {
    var e, r, i;
    for (r = new Yr(f1.call(this.raw.data)), e = 0, i = this.glyphIDs.length; e < i; ++e) r.pos = this.glyphOffsets[e];
    return r.data;
  }, n;
}(), Vh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return pr(e, Qn), e.prototype.tag = "loca", e.prototype.parse = function(r) {
    var i, s;
    return r.pos = this.offset, i = this.file.head.indexToLocFormat, this.offsets = i === 0 ? (function() {
      var o, c;
      for (c = [], s = 0, o = this.length; s < o; s += 2) c.push(2 * r.readUInt16());
      return c;
    }).call(this) : (function() {
      var o, c;
      for (c = [], s = 0, o = this.length; s < o; s += 4) c.push(r.readUInt32());
      return c;
    }).call(this);
  }, e.prototype.indexOf = function(r) {
    return this.offsets[r];
  }, e.prototype.lengthOf = function(r) {
    return this.offsets[r + 1] - this.offsets[r];
  }, e.prototype.encode = function(r, i) {
    for (var s = new Uint32Array(this.offsets.length), o = 0, c = 0, h = 0; h < s.length; ++h) if (s[h] = o, c < i.length && i[c] == h) {
      ++c, s[h] = o;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (o += g);
    }
    for (var v = new Array(4 * s.length), m = 0; m < s.length; ++m) v[4 * m + 3] = 255 & s[m], v[4 * m + 2] = (65280 & s[m]) >> 8, v[4 * m + 1] = (16711680 & s[m]) >> 16, v[4 * m] = (4278190080 & s[m]) >> 24;
    return v;
  }, e;
}(), Gh = function() {
  function n(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var e, r, i, s, o;
    for (r in s = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) i = o[r], e[r] = s[i];
    return e;
  }, n.prototype.glyphsFor = function(e) {
    var r, i, s, o, c, h, f;
    for (s = {}, c = 0, h = e.length; c < h; c++) s[o = e[c]] = this.font.glyf.glyphFor(o);
    for (o in r = [], s) (i = s[o]) != null && i.compound && r.push.apply(r, i.glyphIDs);
    if (r.length > 0) for (o in f = this.glyphsFor(r)) i = f[o], s[o] = i;
    return s;
  }, n.prototype.encode = function(e, r) {
    var i, s, o, c, h, f, g, v, m, x, p, M, I, E, k;
    for (s in i = h1.encode(this.generateCmap(), "unicode"), c = this.glyphsFor(e), p = { 0: 0 }, k = i.charMap) p[(f = k[s]).old] = f.new;
    for (M in x = i.maxGlyphID, c) M in p || (p[M] = x++);
    return v = function(F) {
      var G, le;
      for (G in le = {}, F) le[F[G]] = G;
      return le;
    }(p), m = Object.keys(v).sort(function(F, G) {
      return F - G;
    }), I = function() {
      var F, G, le;
      for (le = [], F = 0, G = m.length; F < G; F++) h = m[F], le.push(v[h]);
      return le;
    }(), o = this.font.glyf.encode(c, I, p), g = this.font.loca.encode(o.offsets, I), E = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(r) }, this.font.os2.exists && (E["OS/2"] = this.font.os2.raw()), this.font.directory.encode(E);
  }, n;
}();
Je.API.PDFObject = function() {
  var n;
  function e() {
  }
  return n = function(r, i) {
    return (Array(i + 1).join("0") + r).slice(-i);
  }, e.convert = function(r) {
    var i, s, o, c;
    if (Array.isArray(r)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = r.length; h < f; h++) i = r[h], g.push(e.convert(i));
      return g;
    }().join(" ") + "]";
    if (typeof r == "string") return "/" + r;
    if (r != null && r.isString) return "(" + r + ")";
    if (r instanceof Date) return "(D:" + n(r.getUTCFullYear(), 4) + n(r.getUTCMonth(), 2) + n(r.getUTCDate(), 2) + n(r.getUTCHours(), 2) + n(r.getUTCMinutes(), 2) + n(r.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(r) === "[object Object]") {
      for (s in o = ["<<"], r) c = r[s], o.push("/" + s + " " + e.convert(c));
      return o.push(">>"), o.join(`
`);
    }
    return "" + r;
  }, e;
}();
var rt = /* @__PURE__ */ ((n) => (n.FREE_HAND = "freehand", n.PAN = "pan", n.SELECT = "select", n.PENCIL = "pencil", n.ERASER = "eraser", n.GEOMETRY = "geometry", n.TEXT = "text", n.IMAGE = "image", n))(rt || {}), jt = /* @__PURE__ */ ((n) => (n.LINE = "line", n.SQUARE = "square", n.RECTANGLE = "rectangle", n.CIRCLE = "circle", n.HEART = "heart", n.TRINGTANGLE = "tringtangle", n))(jt || {}), hn = /* @__PURE__ */ ((n) => (n.PENCIL = "pencil", n.MEMORY_PEN = "memory_pen", n.COLOR_PEN = "color_pen", n.PAINT_PEN = "paint_pen", n.PEN = "pen", n))(hn || {});
const d1 = tc(void 0), u5 = ({ children: n }) => {
  const [e, r] = st(rt.PAN), [i, s] = st(
    "pencil"
    /* PENCIL */
  ), [o, c] = st(jt.LINE), [h, f] = st("#000000"), [g, v] = st(2), [m, x] = st([{ id: 1, name: "Bảng trắng 1", commands: [] }]), [p, M] = st(1), I = m.find((je) => je.id === p), [E, k] = st(!1), F = (je) => {
    x((Pe) => Pe.map(
      (_e) => _e.id === p ? typeof je == "function" ? je(_e) : je : _e
    ));
  }, [G, le] = st(!1), [fe, be] = st(null), [Q, q] = st([]), [ie, de] = st(!1), [A, _] = st(null), [D, R] = st(""), [ce, ae] = st({
    fontFamily: "Arial",
    fontSize: 16,
    bold: !1,
    italic: !1,
    underline: !1
  }), [he, J] = st(100), [se, z] = st(null), ue = Zn(null), w = () => {
    if (I.commands.length > 0) {
      const je = I.commands[I.commands.length - 1];
      F((Pe) => ({
        ...Pe,
        commands: Pe.commands.slice(0, -1)
      })), q((Pe) => [...Pe, je]);
    }
  }, C = () => {
    if (Q.length > 0) {
      const je = Q[Q.length - 1];
      q((Pe) => Pe.slice(0, -1)), F((Pe) => ({
        ...Pe,
        commands: [...Pe.commands, je]
      }));
    }
  }, T = () => {
    F({ ...I, commands: [] }), q([]), be(null), le(!1);
  };
  Tn(() => {
    e !== "text" && (de(!1), R(""), _(null));
  }, [e]);
  const B = {
    currentTool: e,
    setCurrentTool: r,
    currentBrushType: i,
    setCurrentBrushType: s,
    currentGeometryType: o,
    setCurrentGeometryType: c,
    currentColor: h,
    setCurrentColor: f,
    currentBrushSize: g,
    setCurrentBrushSize: v,
    pages: m,
    setPages: x,
    addPage: () => {
      const je = Math.max(...m.map((Pe) => Pe.id));
      x([...m, { id: je + 1, name: `Bảng trắng ${je + 1}`, commands: [] }]), M(je + 1);
    },
    deletePage: (je) => {
      if (p === je) {
        const Pe = m.find((Ne) => Ne.id !== je);
        Pe ? (x(m.filter((Ne) => Ne.id !== je)), M(Pe.id), F(Pe)) : (x([{ id: 1, name: "Bảng trắng 1", commands: [] }]), F({ id: 1, name: "Bảng trắng 1", commands: [] }), M(1));
        return;
      }
      x(m.filter((Pe) => Pe.id !== je));
    },
    renamePage: (je, Pe) => {
      x(m.map(
        (Ne) => Ne.id === je ? { ...Ne, name: Pe } : Ne
      ));
    },
    currentPageId: p,
    setCurrentPageId: M,
    currentPage: I,
    setCurrentPage: F,
    isDrawing: G,
    setIsDrawing: le,
    currentAction: fe,
    setCurrentAction: be,
    undoStack: Q,
    setUndoStack: q,
    showTextInput: ie,
    setShowTextInput: de,
    textPosition: A,
    setTextPosition: _,
    textValue: D,
    setTextValue: R,
    textStyle: ce,
    setTextStyle: ae,
    zoomLevel: he,
    setZoomLevel: J,
    canvasRef: ue,
    undo: w,
    redo: C,
    clear: T,
    zoomIn: () => {
      J((je) => Math.min(je + 10, 200));
    },
    zoomOut: () => {
      J((je) => Math.max(je - 10, 50));
    },
    resetZoom: () => {
      J(100);
    },
    handleTextSubmit: () => {
      D && A && (F((je) => ({
        ...je,
        commands: [
          ...je.commands,
          {
            type: rt.TEXT,
            x: A.x,
            y: A.y,
            text: D,
            color: h,
            size: g,
            textStyle: ce
          }
        ]
      })), R(""), de(!1));
    },
    saveAsPNG: () => {
      if (ue.current) {
        const je = ue.current.toDataURL(), Pe = document.createElement("a");
        Pe.href = je, Pe.download = `drawing-page-${p}.png`, Pe.click();
      }
    },
    saveAsPDF: () => {
      if (ue.current) {
        const je = ue.current.width > ue.current.height ? "l" : "p", Pe = new Je(je, "mm", "a4"), Ne = ue.current.toDataURL("image/png", 1), _e = je === "l" ? 297 : 210, Ee = je === "l" ? 210 : 297, Me = ue.current.width, Ve = ue.current.height, Fe = Math.min(_e / Me, Ee / Ve), De = (_e - Me * Fe) / 2, qe = (Ee - Ve * Fe) / 2;
        Pe.addImage(Ne, "PNG", De, qe, Me * Fe, Ve * Fe), Pe.save(`drawing-page-${p}.pdf`);
      }
    },
    importImage: (je) => {
      var Ne;
      const Pe = (Ne = je.target.files) == null ? void 0 : Ne[0];
      if (Pe) {
        const _e = new Image();
        _e.src = URL.createObjectURL(Pe), _e.onload = () => {
          F((Ee) => ({
            ...Ee,
            commands: [
              ...Ee.commands,
              { type: rt.IMAGE, image: _e, color: "#000000", size: 1, width: _e.width, height: _e.height, x: 0, y: 0, radius: 0, text: "" }
            ]
          }));
        };
      }
    },
    mousePosition: se,
    setMousePosition: z,
    isClicking: E,
    setClicking: k,
    copyAsImage: async () => {
      if (ue.current)
        try {
          const je = await new Promise(
            (Ne) => ue.current.toBlob((_e) => Ne(_e))
          ), Pe = new ClipboardItem({ "image/png": je });
          await navigator.clipboard.write([Pe]);
        } catch (je) {
          console.error("Failed to copy image:", je);
        }
    }
  };
  return /* @__PURE__ */ X.jsx(d1.Provider, { value: B, children: n });
}, fr = () => {
  const n = nc(d1);
  if (n === void 0)
    throw new Error("useDrawing must be used within a DrawingProvider");
  return n;
}, Pr = ({ children: n, dropdown: e, placement: r = "bottom", isChild: i, classNames: s }) => {
  const [o, c] = st(!1), h = Zn(null);
  Tn(() => {
    const g = (v) => {
      h.current && !h.current.contains(v.target) && c(!1);
    };
    return o && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [o]);
  const f = (g) => {
    switch (g) {
      case "top":
        return `bottom-full left-0 ${i ? "mb-4" : "mb-2"}`;
      case "bottom":
        return `top-full left-0 ${i ? "mt-4" : "mt-2"}`;
      case "left":
        return `right-full top-0 ${i ? "mr-4" : "mr-2"}`;
      case "right":
        return `left-full top-0 ${i ? "ml-4" : "ml-2"}`;
      default:
        return "top-full left-0 mt-2";
    }
  };
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    "            ",
    !i && o && /* @__PURE__ */ X.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-transparent",
        onClick: () => c(!1)
      }
    ),
    /* @__PURE__ */ X.jsxs("div", { className: "relative", ref: h, children: [
      /* @__PURE__ */ X.jsx("div", { onClick: (g) => {
        i && g.stopPropagation(), c(!o);
      }, children: n({ isOpen: o }) }),
      /* @__PURE__ */ X.jsx(
        "div",
        {
          className: `absolute z-50 rounded shadow-custom-11 bg-white transition-all duration-200 ease-in-out transform
                        ${o ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
                        ${f(r)}`,
          children: /* @__PURE__ */ X.jsx("div", { className: `w-max min-w-[150px] h-full ${s}`, children: typeof e == "function" ? e({ onClose: () => c(!1) }) : e })
        }
      )
    ] })
  ] });
}, Yh = (n) => {
  var F;
  const { iconSet: e, config: r } = dr(), {
    MenuIcon: i,
    CopyImageIcon: s,
    SaveCloudIcon: o,
    ExportIcon: c,
    PDFIcon: h,
    ImageIcon: f,
    ArrowRightIcon: g
  } = e, { copyAsImage: v, saveAsPDF: m, saveAsPNG: x } = fr(), p = `h-8 flex-none px-2 py-1 rounded cursor-pointer flex items-center gap-3 ${(F = r == null ? void 0 : r.components) == null ? void 0 : F.buttonIcon}`, M = () => {
    m(), n.onSavePDF && n.onSavePDF();
  }, I = () => {
    x(), n.onSaveImage && n.onSaveImage();
  }, E = () => {
    n.onSaveCloud && n.onSaveCloud();
  }, k = [
    { label: "PDF (.pdf)", icon: h, action: M },
    { label: "Ảnh PNG (.png)", icon: f, action: I }
  ];
  return /* @__PURE__ */ X.jsx(
    Pr,
    {
      placement: "bottom",
      dropdown: ({ onClose: G }) => {
        var le, fe;
        return /* @__PURE__ */ X.jsxs("ul", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ X.jsxs(
            "li",
            {
              onClick: () => {
                v(), G();
              },
              className: `h-8 flex-none ${(le = r == null ? void 0 : r.components) == null ? void 0 : le.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`,
              children: [
                /* @__PURE__ */ X.jsx(s, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Sao chép dưới dạng ảnh" })
              ]
            }
          ),
          /* @__PURE__ */ X.jsxs(
            "li",
            {
              onClick: E,
              className: `h-8 flex-none ${(fe = r == null ? void 0 : r.components) == null ? void 0 : fe.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`,
              children: [
                /* @__PURE__ */ X.jsx(o, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Lưu về Cloud class" })
              ]
            }
          ),
          /* @__PURE__ */ X.jsx("div", { className: "w-full", children: /* @__PURE__ */ X.jsx(
            Pr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: be }) => /* @__PURE__ */ X.jsx("div", { className: "w-full flex flex-col gap-2 p-2", children: k.map(({ label: Q, icon: q, action: ie }) => /* @__PURE__ */ X.jsxs(
                "div",
                {
                  onClick: () => {
                    ie(), be();
                  },
                  className: p,
                  children: [
                    /* @__PURE__ */ X.jsx(q, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                    /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: Q })
                  ]
                },
                Q
              )) }),
              children: ({ isOpen: be }) => {
                var Q, q;
                return /* @__PURE__ */ X.jsxs("li", { className: `w-full h-8 flex-none ${(Q = r == null ? void 0 : r.components) == null ? void 0 : Q.buttonIcon} ${be ? (q = r == null ? void 0 : r.components) == null ? void 0 : q.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`, children: [
                  /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ X.jsx(c, { className: "w-5 h-5 flex-none" }),
                    /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Xuất" })
                  ] }),
                  /* @__PURE__ */ X.jsx(g, { className: "w-5 h-5 flex-none" })
                ] });
              }
            }
          ) })
        ] });
      },
      children: ({ isOpen: G }) => /* @__PURE__ */ X.jsx(Xt, { Icon: i, isActive: G })
    }
  );
}, p1 = ({ onChange: n, value: e = 10 }) => {
  const [r, i] = st(e);
  Tn(() => {
    i(e);
  }, [e]);
  const s = (o) => {
    const c = Math.min(50, Math.max(1, o));
    i(c), n(c);
  };
  return /* @__PURE__ */ X.jsxs("div", { className: "flex items-center space-x-5", children: [
    /* @__PURE__ */ X.jsx("div", { className: "relative w-28", children: /* @__PURE__ */ X.jsx(
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
    /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2 px-1 py-0.5 bg-gray-200 rounded", children: [
      /* @__PURE__ */ X.jsx("div", { className: "w-6 text-center font-medium", children: r }),
      /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ X.jsx(
          "button",
          {
            onClick: () => s(r + 1),
            className: "h-3 w-3 flex items-center justify-center flex-none",
            children: "+"
          }
        ),
        /* @__PURE__ */ X.jsx(
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
}, Tc = ["#000000", "#f0a3a3", "#f0c3a3", "#f0e3a3", "#a3f0a3", "#a3f0e3"], $h = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana"], Xh = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72], Jh = ({ isActive: n, onColorChange: e, onBrushSizeChange: r, onClick: i, currentColor: s }) => {
  const { iconSet: o, config: c } = dr(), {
    PencilOutlineIcon: h,
    MemoryPenOutlineIcon: f,
    ColorPenOutlineIcon: g,
    PaintPenOutlineIcon: v,
    PenOutlineIcon: m
  } = o, x = [
    { type: hn.PENCIL, name: "Bút chì", icon: h },
    { type: hn.MEMORY_PEN, name: "Bút nhớ", icon: f },
    { type: hn.COLOR_PEN, name: "Bút màu", icon: g },
    { type: hn.PAINT_PEN, name: "Bút sơn", icon: v },
    { type: hn.PEN, name: "Bút bi", icon: m }
  ], { currentBrushSize: p, currentBrushType: M, setCurrentBrushType: I } = fr();
  return /* @__PURE__ */ X.jsx(
    Pr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Màu" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2", children: [
            Tc.map((E) => /* @__PURE__ */ X.jsx(
              Zh,
              {
                color: E,
                onClick: () => e == null ? void 0 : e(E),
                checked: s === E
              },
              E
            )),
            /* @__PURE__ */ X.jsx("label", { htmlFor: "ColorPicker", style: { background: s }, className: "w-6 h-6 flex-none rounded outline-none relative", children: /* @__PURE__ */ X.jsx(
              "input",
              {
                type: "color",
                className: "w-6 h6 flex-none rounded outline-none invisible",
                value: s,
                onChange: (E) => e == null ? void 0 : e(E.target.value),
                id: "ColorPicker"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Loại bút" }),
          /* @__PURE__ */ X.jsx("div", { className: "flex items-center gap-2", children: x.map((E) => /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: E.icon,
              onClick: () => I(E.type),
              isActive: M === E.type
            },
            E.name
          )) })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Độ dày nét" }),
          /* @__PURE__ */ X.jsx(p1, { onChange: r, value: p })
        ] })
      ] }),
      children: ({ isOpen: E }) => /* @__PURE__ */ X.jsx(
        Xt,
        {
          onClick: i,
          Icon: o.PencilOutlineIcon,
          isActive: E || n
        }
      )
    }
  );
}, Zh = ({ color: n, onClick: e, checked: r }) => {
  const { config: i, iconSet: s } = dr();
  return /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-95 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: e,
      children: r && /* @__PURE__ */ X.jsx(s.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, Kh = ({ isActive: n, onClick: e }) => {
  const { iconSet: r } = dr(), {
    currentColor: i,
    setCurrentColor: s,
    textStyle: o,
    setTextStyle: c
  } = fr();
  return /* @__PURE__ */ X.jsx(
    Pr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3 min-w-[200px] bg-white rounded shadow-lg", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { className: "text-sm font-medium", children: "Color" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            Tc.map((h) => /* @__PURE__ */ X.jsx(
              Qh,
              {
                color: h,
                onClick: () => s(h),
                checked: i === h
              },
              h
            )),
            /* @__PURE__ */ X.jsx(
              "label",
              {
                htmlFor: "ColorPicker",
                className: "w-6 h-6 flex-none rounded outline-none cursor-pointer relative overflow-hidden",
                style: { background: i },
                children: /* @__PURE__ */ X.jsx(
                  "input",
                  {
                    type: "color",
                    id: "ColorPicker",
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                    value: i,
                    onChange: (h) => s(h.target.value)
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { className: "text-sm font-medium", children: "Text Style" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ X.jsx(
              Pr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ X.jsx("div", { className: "flex flex-col min-w-[200px] bg-white rounded shadow-custom-11 py-1.5", children: $h.map((f) => /* @__PURE__ */ X.jsx(
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
                children: ({ isOpen: h }) => /* @__PURE__ */ X.jsx("div", { className: `h-10 min-w-[150px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: o.fontFamily })
              }
            ),
            /* @__PURE__ */ X.jsx(
              Pr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ X.jsx("div", { className: "flex flex-col flex-none max-h-[200px] bg-white rounded shadow-custom-11 py-1.5", children: /* @__PURE__ */ X.jsx("div", { className: "w-full h-full flex flex-col overflow-y-auto", children: Xh.map((f) => /* @__PURE__ */ X.jsx(
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
                children: ({ isOpen: h }) => /* @__PURE__ */ X.jsxs("div", { className: `h-10 w-[50px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: [
                  o.fontSize,
                  "px"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ X.jsx(
              Xt,
              {
                Icon: r.FontBoldIcon,
                className: "border border-gray-200",
                onClick: () => c({ ...o, bold: !o.bold }),
                isActive: o.bold
              }
            ),
            /* @__PURE__ */ X.jsx(
              Xt,
              {
                Icon: r.FontItalicIcon,
                className: "border border-gray-200",
                onClick: () => c({ ...o, italic: !o.italic }),
                isActive: o.italic
              }
            ),
            /* @__PURE__ */ X.jsx(
              Xt,
              {
                Icon: r.FontUnderlineIcon,
                className: "border border-gray-200",
                onClick: () => c({ ...o, underline: !o.underline }),
                isActive: o.underline
              }
            )
          ] })
        ] })
      ] }),
      children: ({ isOpen: h }) => /* @__PURE__ */ X.jsx(
        Xt,
        {
          onClick: e,
          Icon: r.FontsIcon,
          isActive: h || n
        }
      )
    }
  );
}, Qh = ({ color: n, onClick: e, checked: r }) => {
  const { iconSet: i } = dr();
  return /* @__PURE__ */ X.jsx(
    "button",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-90 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: e,
      children: r && /* @__PURE__ */ X.jsx(i.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, e5 = () => {
  const { iconSet: n, config: e } = dr(), {
    ArrowRightIcon: r,
    MoreIcon: i,
    MultipleCardsIcon: s,
    AddBoardIcon: o
  } = n, { pages: c, addPage: h, deletePage: f, currentPageId: g, setCurrentPageId: v } = fr();
  return /* @__PURE__ */ X.jsx(
    Pr,
    {
      placement: "bottom",
      dropdown: ({ onClose: m }) => {
        var x;
        return /* @__PURE__ */ X.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ X.jsxs(
            "div",
            {
              onClick: h,
              className: `w-full h-8 flex-none ${(x = e == null ? void 0 : e.components) == null ? void 0 : x.buttonIcon}  px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`,
              children: [
                /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ X.jsx(o, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                  /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Thêm bảng" })
                ] }),
                /* @__PURE__ */ X.jsx(r, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 })
              ]
            }
          ),
          c.map((p, M) => /* @__PURE__ */ X.jsx("div", { className: "w-full", children: /* @__PURE__ */ X.jsx(
            Pr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: I }) => {
                var E, k;
                return /* @__PURE__ */ X.jsxs("div", { className: "w-full flex flex-col gap-2 p-2", children: [
                  /* @__PURE__ */ X.jsx(
                    "div",
                    {
                      onClick: () => {
                        I();
                      },
                      className: `h-8 flex-none ${(E = e == null ? void 0 : e.components) == null ? void 0 : E.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Đổi tên bảng" })
                    }
                  ),
                  /* @__PURE__ */ X.jsx(
                    "div",
                    {
                      onClick: () => {
                        f(p.id), I();
                      },
                      className: `h-8 flex-none ${(k = e == null ? void 0 : e.components) == null ? void 0 : k.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
                      children: /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Xóa bảng" })
                    }
                  )
                ] });
              },
              children: ({ isOpen: I }) => {
                var E, k;
                return /* @__PURE__ */ X.jsxs(
                  "div",
                  {
                    className: `w-full h-8 flex-none ${(E = e == null ? void 0 : e.components) == null ? void 0 : E.buttonIcon} ${I || g === p.id ? (k = e == null ? void 0 : e.components) == null ? void 0 : k.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-5`,
                    children: [
                      /* @__PURE__ */ X.jsx(
                        "span",
                        {
                          onClick: (F) => {
                            F.stopPropagation(), F.preventDefault(), v(p.id);
                          },
                          className: "flex-none cursor-pointer",
                          children: p == null ? void 0 : p.name
                        }
                      ),
                      /* @__PURE__ */ X.jsx(i, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 })
                    ]
                  }
                );
              }
            }
          ) }))
        ] });
      },
      children: ({ isOpen: m }) => /* @__PURE__ */ X.jsx(Xt, { Icon: s, isActive: m })
    }
  );
}, t5 = ({ isActive: n, onColorChange: e, onBrushSizeChange: r, onClick: i, currentColor: s }) => {
  const { iconSet: o, config: c } = dr(), h = [
    { type: jt.LINE, name: "Đường thẳng", icon: o.LineIcon },
    { type: jt.SQUARE, name: "Hình vuông", icon: o.SquareIcon },
    { type: jt.TRINGTANGLE, name: "Hình tam giác", icon: o.TriangleIcon },
    { type: jt.CIRCLE, name: "Hình tròn", icon: o.CircleIcon },
    { type: jt.HEART, name: "Trái tim", icon: o.HeartIcon }
  ], { currentBrushSize: f, setCurrentGeometryType: g, currentGeometryType: v } = fr();
  return /* @__PURE__ */ X.jsx(
    Pr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Màu" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2", children: [
            Tc.map((m) => /* @__PURE__ */ X.jsx(
              n5,
              {
                color: m,
                onClick: () => e == null ? void 0 : e(m),
                checked: s === m
              },
              m
            )),
            /* @__PURE__ */ X.jsx("label", { htmlFor: "ColorPicker", style: { background: s }, className: "w-6 h-6 flex-none rounded outline-none relative", children: /* @__PURE__ */ X.jsx(
              "input",
              {
                type: "color",
                className: "w-6 h6 flex-none rounded outline-none invisible",
                value: s,
                onChange: (m) => e == null ? void 0 : e(m.target.value),
                id: "ColorPicker"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Loại hình" }),
          /* @__PURE__ */ X.jsx("div", { className: "flex items-center gap-2", children: h.map((m) => /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: m.icon || o.PencilOutlineIcon,
              onClick: () => g(m.type),
              isActive: v === m.type
            },
            m.name
          )) })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Độ dày nét" }),
          /* @__PURE__ */ X.jsx(p1, { onChange: r, value: f })
        ] })
      ] }),
      children: ({ isOpen: m }) => /* @__PURE__ */ X.jsx(
        Xt,
        {
          onClick: i,
          Icon: o.SplineIcon,
          isActive: m || n
        }
      )
    }
  );
}, n5 = ({ color: n, onClick: e, checked: r }) => {
  const { config: i, iconSet: s } = dr();
  return /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-95 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: e,
      children: r && /* @__PURE__ */ X.jsx(s.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, ql = 12, Ia = 20, r5 = ({ onApply: n }) => {
  const [e, r] = st(null), [i, s] = st(0), [o, c] = st(0), [h, f] = st(0), [g, v] = st(!1), [m, x] = st(!1), [p, M] = st(null), [I, E] = st(null), k = Zn(null), F = Zn(null), G = Zn(null), le = () => {
    var A;
    return (A = k.current) == null ? void 0 : A.click();
  }, fe = (A) => {
    var R;
    const _ = (R = A.target.files) == null ? void 0 : R[0];
    if (!_) return;
    const D = new Image();
    D.onload = () => {
      r(D), s(D.width), c(D.height);
    }, D.src = URL.createObjectURL(_);
  }, be = () => {
    if (!F.current || !e) return;
    const A = F.current.getContext("2d"), _ = i, D = o;
    F.current.width = _, F.current.height = D, A && (A.clearRect(0, 0, _, D), A.save(), A.translate(_ / 2, D / 2), A.rotate(h * Math.PI / 180), A.scale(g ? -1 : 1, m ? -1 : 1), A.drawImage(e, -_ / 2, -D / 2, _, D), A.restore());
  };
  Tn(() => {
    be();
  }, [e, i, o, h, g, m]);
  const Q = (A) => (_) => {
    _.stopPropagation(), M(A), E({ x: _.clientX, y: _.clientY });
  }, q = (A) => {
    if (!p || !I) return;
    const _ = A.clientX - I.x, D = A.clientY - I.y;
    switch (E({ x: A.clientX, y: A.clientY }), p) {
      case "right":
        s((R) => Math.max(1, R + _));
        break;
      case "left":
        s((R) => Math.max(1, R - _));
        break;
      case "bottom":
        c((R) => Math.max(1, R + D));
        break;
      case "top":
        c((R) => Math.max(1, R - D));
        break;
      case "top-left":
        s((R) => Math.max(1, R - _)), c((R) => Math.max(1, R - D));
        break;
      case "top-right":
        s((R) => Math.max(1, R + _)), c((R) => Math.max(1, R - D));
        break;
      case "bottom-left":
        s((R) => Math.max(1, R - _)), c((R) => Math.max(1, R + D));
        break;
      case "bottom-right":
        s((R) => Math.max(1, R + _)), c((R) => Math.max(1, R + D));
        break;
    }
  }, ie = () => {
    M(null), E(null);
  };
  Tn(() => (window.addEventListener("mousemove", q), window.addEventListener("mouseup", ie), () => {
    window.removeEventListener("mousemove", q), window.removeEventListener("mouseup", ie);
  }), [p, I]);
  const de = () => {
    if (!F.current) return;
    const A = F.current.toDataURL(), _ = new Image();
    _.onload = () => {
      n({ type: rt.IMAGE, image: _, width: _.width, height: _.height, x: 0, y: 0, color: "#000", size: 1, radius: 0, text: "" }), r(null);
    }, _.src = A;
  };
  return /* @__PURE__ */ X.jsx("div", { className: "space-y-4", children: e ? /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsxs("div", { ref: G, className: "relative border", style: { width: i, height: o }, children: [
      /* @__PURE__ */ X.jsx("canvas", { ref: F }),
      ["top-left", "top-right", "bottom-left", "bottom-right", "left", "right", "top", "bottom"].map((A) => {
        const _ = { width: ql, height: ql, position: "absolute", background: "#fff", border: "1px solid #333" };
        return A.includes("left") && (_.left = 0), A.includes("right") && (_.right = 0), A.includes("top") && (_.top = 0), A.includes("bottom") && (_.bottom = 0), (A === "left" || A === "right") && (_.top = "50%", _.transform = "translateY(-50%)"), (A === "top" || A === "bottom") && (_.left = "50%", _.transform = "translateX(-50%)"), _.cursor = A.includes("left") && A.includes("top") || A.includes("right") && A.includes("bottom") ? "nwse-resize" : A.includes("right") && A.includes("top") || A.includes("left") && A.includes("bottom") ? "nesw-resize" : A.includes("left") || A.includes("right") ? "ew-resize" : "ns-resize", /* @__PURE__ */ X.jsx("div", { style: _, onMouseDown: Q(A) }, A);
      })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ X.jsx("button", { onClick: () => f((A) => (A + 90) % 360), title: "Rotate CW", children: /* @__PURE__ */ X.jsx(A2, { size: Ia }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => f((A) => (A - 90 + 360) % 360), title: "Rotate CCW", children: /* @__PURE__ */ X.jsx(N2, { size: Ia }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => v((A) => !A), title: "Flip Horizontal", children: /* @__PURE__ */ X.jsx(bl, { size: Ia, style: { transform: g ? "scaleX(-1)" : void 0 } }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => x((A) => !A), title: "Flip Vertical", children: /* @__PURE__ */ X.jsx(bl, { size: Ia, style: { transform: m ? "scaleY(-1)" : "rotate(90deg)" } }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: de, className: "ml-auto px-4 py-2 bg-blue-600 text-white rounded", children: "Apply" })
    ] })
  ] }) : /* @__PURE__ */ X.jsxs("button", { onClick: le, className: "flex items-center gap-2 px-3 py-2 bg-gray-200 rounded", children: [
    /* @__PURE__ */ X.jsx(Tu, { size: Ia }),
    "Upload Image",
    /* @__PURE__ */ X.jsx("input", { ref: k, type: "file", accept: "image/*", onChange: fe, className: "hidden" })
  ] }) });
}, i5 = (n) => {
  const {
    currentTool: e,
    setCurrentTool: r,
    currentColor: i,
    setCurrentColor: s,
    setCurrentBrushSize: o,
    zoomLevel: c,
    undo: h,
    redo: f,
    resetZoom: g,
    zoomOut: v,
    zoomIn: m,
    mousePosition: x,
    clear: p,
    importImage: M
  } = fr(), { config: I, iconSet: E } = dr(), k = I.components.buttonIcon, {
    HandleIcon: F,
    EraserIcon: G,
    PlusIcon: le,
    MinusIcon: fe,
    SquareDashedIcon: be,
    UndoIcon: Q,
    RedoIcon: q,
    SplineIcon: ie,
    CleanIcon: de,
    ImageUpIcon: A,
    PartyPopperIcon: _
  } = E, {
    // loại bỏ importImage từ useDrawing, ta sẽ xử lý upload trong component này
    setCurrentPage: D,
    currentPage: R
    // ... các hook khác
  } = fr(), [ce, ae] = st(!1), he = (J) => {
    if (D((se) => ({
      ...se,
      commands: [...se.commands, J]
    })), ae(!1), n.onImageUpload && J.type === rt.IMAGE) {
      const se = document.createElement("canvas");
      if (se.getContext("2d") && J.width && J.height) {
        se.width = J.width, se.height = J.height;
        const ue = se.toDataURL("image/png");
        fetch(ue).then((w) => w.blob()).then((w) => {
          var T;
          const C = new File([w], "drawing-image.png", { type: "image/png" });
          (T = n.onImageUpload) == null || T.call(n, C);
        });
      }
    }
  };
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsxs("div", { className: "absolute top-0 left-0 z-10 flex flex-col gap-8", style: { pointerEvents: "none" }, children: [
      /* @__PURE__ */ X.jsxs("div", { className: "h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded", style: { pointerEvents: "auto" }, children: [
        /* @__PURE__ */ X.jsx(
          Yh,
          {
            onSaveImage: () => {
              const J = document.querySelector("canvas");
              J && n.onSaveAsImage && n.onSaveAsImage(J.toDataURL("image/png"));
            },
            onSavePDF: () => {
              const J = document.querySelector("canvas");
              J && n.onSaveAsPDF && J.toBlob((se) => {
                se && n.onSaveAsPDF && n.onSaveAsPDF(se);
              }, "image/png");
            },
            onSaveCloud: () => {
              n.onSaveToCloud && n.onSaveToCloud();
            }
          }
        ),
        /* @__PURE__ */ X.jsx(e5, {}),
        x && /* @__PURE__ */ X.jsxs("div", { className: "text-xs text-gray-500 ml-2", children: [
          "X: ",
          x.x.toFixed(2),
          ", Y: ",
          x.y.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2", style: { pointerEvents: "auto" }, children: [
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: F,
              onClick: () => r(rt.PAN),
              isActive: e === rt.PAN,
              title: "Pan"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Jh,
            {
              isActive: e === rt.PENCIL,
              onClick: () => r(rt.PENCIL),
              onColorChange: s,
              onBrushSizeChange: o,
              currentColor: i
            }
          ),
          /* @__PURE__ */ X.jsx(
            Kh,
            {
              isActive: e === rt.TEXT,
              onClick: () => r(rt.TEXT)
            }
          ),
          /* @__PURE__ */ X.jsx(
            t5,
            {
              isActive: e === rt.GEOMETRY,
              onClick: () => r(rt.GEOMETRY),
              onColorChange: s,
              onBrushSizeChange: o,
              currentColor: i
            }
          ),
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: be,
              title: "Chọn vùng"
            }
          ),
          /* @__PURE__ */ X.jsxs("label", { className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 cursor-pointer ${k}}`, children: [
            /* @__PURE__ */ X.jsx(A, { className: "w-5 h-5" }),
            /* @__PURE__ */ X.jsx("input", { type: "file", accept: "image/*", onChange: M, className: "hidden" })
          ] }),
          /* @__PURE__ */ X.jsx(
            "button",
            {
              onClick: () => ae(!0),
              className: "h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100 active:bg-gray-300",
              title: "Upload & Edit Image",
              children: /* @__PURE__ */ X.jsx(A, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: G,
              onClick: () => r(rt.ERASER),
              isActive: e === "eraser",
              title: "Tẩy"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: de,
              onClick: p,
              title: "Xóa bảng"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: _,
              onClick: p,
              title: "Xóa bảng"
            }
          )
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2", style: { pointerEvents: "auto" }, children: [
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: Q,
              onClick: () => {
                if (h(), n.onDrawingComplete) {
                  const J = R.commands;
                  n.onDrawingComplete(J);
                }
              },
              title: "Undo"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Xt,
            {
              Icon: q,
              onClick: () => {
                if (f(), n.onDrawingComplete) {
                  const J = R.commands;
                  n.onDrawingComplete(J);
                }
              },
              title: "Redo"
            }
          ),
          /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ X.jsx(Xt, { Icon: fe, onClick: v, title: "Zoom Out" }),
            /* @__PURE__ */ X.jsx("span", { className: "text-xs", children: c }),
            /* @__PURE__ */ X.jsx(Xt, { Icon: le, onClick: m, title: "Zoom In" })
          ] })
        ] })
      ] })
    ] }),
    ce && /* @__PURE__ */ X.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        onClick: () => ae(!1),
        children: /* @__PURE__ */ X.jsxs(
          "div",
          {
            className: "bg-white p-4 rounded shadow-lg",
            onClick: (J) => J.stopPropagation(),
            children: [
              /* @__PURE__ */ X.jsx(r5, { onApply: he }),
              /* @__PURE__ */ X.jsx(
                "button",
                {
                  className: "mt-2 text-sm text-gray-600 hover:underline",
                  onClick: () => ae(!1),
                  children: "Hủy bỏ"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}, a5 = ({
  position: n
}) => {
  const {
    textValue: e,
    setTextValue: r,
    zoomLevel: i,
    textStyle: s,
    handleTextSubmit: o,
    showTextInput: c
  } = fr(), h = i / 100, f = Zn(null), g = () => {
    f.current && (f.current.style.height = "auto", f.current.style.height = `${f.current.scrollHeight}px`);
  };
  Tn(() => {
    const x = () => {
      f.current && c && (f.current.focus(), g());
    };
    x();
    const p = setTimeout(x, 10);
    return () => clearTimeout(p);
  }, [c, n]);
  const v = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), r(e + `
`), setTimeout(g, 0));
  }, m = (x) => {
    r(x.target.value), g();
  };
  return /* @__PURE__ */ X.jsx(
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
      onClick: (x) => x.stopPropagation(),
      onMouseDown: (x) => x.stopPropagation(),
      onMouseMove: (x) => x.stopPropagation(),
      children: /* @__PURE__ */ X.jsx(
        "textarea",
        {
          ref: f,
          value: e,
          onChange: m,
          onBlur: o,
          onKeyDown: v,
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
          onFocus: (x) => x.target.select()
        }
      )
    }
  );
}, o5 = ({ x: n, y: e, isClicking: r, isDrawing: i, tool: s, scale: o = 1 }) => {
  const c = Zn(null), h = i || s === "pencil" || s === "eraser" || s === "line";
  return Tn(() => {
    c.current && (c.current.style.transform = `translate(${n}px, ${e}px)`);
  }, [n, e]), /* @__PURE__ */ X.jsx(X.Fragment, { children: h && /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "pointer-events-none absolute z-50 mix-blend-difference",
      style: {
        left: 0,
        top: 0,
        transform: `translate(${n}px, ${e}px)`,
        transition: "transform 0.1s ease-out"
      },
      children: /* @__PURE__ */ X.jsx(
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
}, s5 = Fa((n, e) => {
  const {
    currentPage: r,
    setCurrentPage: i,
    currentGeometryType: s,
    setCurrentGeometryType: o,
    currentAction: c,
    setCurrentAction: h,
    isDrawing: f,
    setIsDrawing: g,
    currentTool: v,
    currentColor: m,
    currentBrushSize: x,
    currentBrushType: p,
    setShowTextInput: M,
    setTextPosition: I,
    showTextInput: E,
    textPosition: k,
    zoomLevel: F,
    textValue: G,
    textStyle: le,
    setTextStyle: fe,
    mousePosition: be,
    setMousePosition: Q,
    isClicking: q,
    setClicking: ie
  } = fr(), de = Zn(null), A = Zn(null), _ = Zn(null), [D, R] = st(!1), [ce, ae] = st(!1), [he, J] = st(null), [se, z] = st({ x: 0, y: 0 }), ue = F / 100, [w, C] = st(Math.random()), [T, U] = st(null), [$, re] = st({ x: 50, y: 50 }), [ee, oe] = st({ width: 100, height: 100 }), [Ie, ke] = st(0), [Te, Re] = st(!1), [$e, me] = st(!1), [B, je] = st(null), [Pe, Ne] = st(null);
  Zn(null), Tn(() => {
    e && typeof e == "object" && "current" in e && (e.current = de.current);
  }, [e]), Tn(() => {
    const Fe = (qe) => {
      qe.code === "Space" && !qe.repeat && !ce && (qe.preventDefault(), ae(!0), _.current && (_.current.style.cursor = "grab"));
    }, De = (qe) => {
      qe.code === "Space" && (qe.preventDefault(), ae(!1), _.current && v !== rt.PAN && (_.current.style.cursor = "default"));
    };
    return window.addEventListener("keydown", Fe), window.addEventListener("keyup", De), () => {
      window.removeEventListener("keydown", Fe), window.removeEventListener("keyup", De);
    };
  }, [ce, v]), Tn(() => {
    var at, He;
    const Fe = de.current, De = A.current, qe = Fe.getContext("2d"), ve = De.getContext("2d");
    if (qe.clearRect(0, 0, Fe.width, Fe.height), ve.clearRect(0, 0, De.width, De.height), qe.save(), qe.scale(ue, ue), ve.save(), ve.scale(ue, ue), (at = r == null ? void 0 : r.commands) == null || at.forEach((Ae) => {
      if (Ae.type === rt.IMAGE && Ae.image) {
        const Ce = Ae.image, Lt = Ae.width ?? Ce.width, ct = Ae.height ?? Ce.height, Gt = Fe.width, ht = Fe.height;
        let pt = Lt, rn = ct;
        if (Lt > Gt || ct > ht) {
          const Pt = Math.min(
            Gt / Lt,
            ht / ct
          ) / ue;
          pt = Lt * Pt, rn = ct * Pt;
        }
        const gt = (Gt - pt) / 2, gr = (ht - rn) / 2;
        qe.drawImage(Ce, gt, gr, pt, rn);
      }
    }), (He = r == null ? void 0 : r.commands) == null || He.forEach((Ae) => {
      if (Ae.type !== rt.IMAGE) {
        switch (ve.beginPath(), ve.lineCap = "round", ve.lineJoin = "round", Ae.brushType) {
          case hn.PAINT_PEN:
            ve.globalAlpha = 0.5, ve.lineWidth = Ae.size * 2 / ue;
            break;
          case hn.MEMORY_PEN:
          case hn.COLOR_PEN:
            ve.globalAlpha = 0.7, ve.lineWidth = Ae.size / ue;
            break;
          case hn.PENCIL:
            ve.globalAlpha = 0.6, ve.lineWidth = Ae.size * 0.8 / ue;
            break;
          case hn.PEN:
          default:
            ve.globalAlpha = 1, ve.lineWidth = Ae.size * 0.5 / ue;
            break;
        }
        if (Ae.type === rt.FREE_HAND || Ae.type === rt.ERASER)
          ve.moveTo(Ae.points[0].x, Ae.points[0].y), Ae.points.forEach((Ce) => ve.lineTo(Ce.x, Ce.y)), ve.strokeStyle = Ae.type === rt.ERASER ? "#FFFFFF" : Ae.color, ve.globalCompositeOperation = Ae.type === rt.ERASER ? "destination-out" : "source-over", ve.stroke();
        else if (Ae.type === rt.GEOMETRY)
          Ae.geometryType === jt.LINE ? (ve.moveTo(Ae.fromX, Ae.fromY), ve.lineTo(Ae.toX, Ae.toY), ve.strokeStyle = Ae.color, ve.lineWidth = Ae.size * 0.5 / ue, ve.globalCompositeOperation = "source-over", ve.stroke()) : Ae.geometryType === jt.RECTANGLE ? (ve.strokeRect(Ae.x, Ae.y, Ae.width, Ae.height), ve.strokeStyle = Ae.color, ve.lineWidth = Ae.size * 0.5 / ue, ve.globalCompositeOperation = "source-over", ve.stroke()) : Ae.geometryType === jt.CIRCLE && (ve.arc(Ae.x, Ae.y, Ae.radius, 0, 2 * Math.PI), ve.strokeStyle = Ae.color, ve.lineWidth = Ae.size * 0.5 / ue, ve.globalCompositeOperation = "source-over", ve.stroke());
        else if (Ae.type === rt.TEXT) {
          const Ce = Ae.textStyle || { fontFamily: "Arial", fontSize: 16, bold: !1, italic: !1, underline: !1 }, Lt = [];
          Ce.italic && Lt.push("italic"), Ce.bold && Lt.push("bold"), Lt.push(`${Ce.fontSize}px`), Lt.push(Ce.fontFamily), ve.save(), ve.setTransform(1, 0, 0, 1, 0, 0), ve.translate(Ae.x * ue, Ae.y * ue), ve.scale(1, 1), ve.font = Lt.join(" "), ve.fillStyle = Ae.color, ve.textBaseline = "top", ve.globalCompositeOperation = "source-over";
          const ct = Ae.text.split(`
`), Gt = Ce.fontSize * 1.2;
          ct.forEach((ht, pt) => {
            if (ve.fillText(ht, 0, Gt * pt), Ce.underline) {
              const rn = ve.measureText(ht).width;
              ve.beginPath(), ve.moveTo(0, Gt * pt + Ce.fontSize + 2), ve.lineTo(rn, Gt * pt + Ce.fontSize + 2), ve.strokeStyle = Ae.color, ve.lineWidth = 1, ve.stroke();
            }
          }), ve.restore();
        }
        ve.globalAlpha = 1;
      }
    }), c) {
      switch (ve.beginPath(), ve.lineCap = "round", ve.lineJoin = "round", c.brushType) {
        case hn.PAINT_PEN:
          ve.globalAlpha = 0.5, ve.lineWidth = c.size * 2 / ue;
          break;
        case hn.MEMORY_PEN:
        case hn.COLOR_PEN:
          ve.globalAlpha = 0.7, ve.lineWidth = c.size / ue;
          break;
        case hn.PENCIL:
          ve.globalAlpha = 0.6, ve.lineWidth = c.size * 0.8 / ue;
          break;
        case hn.PEN:
        default:
          ve.globalAlpha = 1, ve.lineWidth = c.size * 0.5 / ue;
          break;
      }
      c.type === rt.FREE_HAND || c.type === rt.ERASER ? (ve.moveTo(c.points[0].x, c.points[0].y), c.points.forEach((Ae) => ve.lineTo(Ae.x, Ae.y)), ve.strokeStyle = c.type === rt.ERASER ? "#FFFFFF" : c.color, ve.globalCompositeOperation = c.type === rt.ERASER ? "destination-out" : "source-over", ve.stroke()) : c.type === rt.GEOMETRY && (s === jt.LINE ? (ve.moveTo(c.fromX, c.fromY), ve.lineTo(c.toX, c.toY), ve.strokeStyle = c.color, ve.globalCompositeOperation = "source-over", ve.stroke()) : s === jt.RECTANGLE ? (ve.strokeRect(c.x, c.y, c.width, c.height), ve.strokeStyle = c.color, ve.globalCompositeOperation = "source-over", ve.stroke()) : s === jt.CIRCLE && (ve.arc(c.x, c.y, c.radius, 0, 2 * Math.PI), ve.strokeStyle = c.color, ve.globalCompositeOperation = "source-over", ve.stroke())), ve.globalAlpha = 1;
    }
    qe.restore(), ve.restore(), qe.drawImage(De, 0, 0, De.width ?? 0, De.height ?? 0);
  }, [r, c, F, w]);
  const _e = (Fe) => {
    const De = Fe.currentTarget.getBoundingClientRect(), qe = (Fe.clientX - De.left) / ue, ve = (Fe.clientY - De.top) / ue;
    return { x: qe, y: ve };
  }, Ee = (Fe) => {
    ie(!0), g(!0);
    const { x: De, y: qe } = _e(Fe);
    if (Fe.currentTarget.getBoundingClientRect(), ce || v === "pan") {
      Fe.preventDefault(), R(!0), J({ x: Fe.clientX - se.x, y: Fe.clientY - se.y }), _.current && (_.current.style.cursor = "grabbing");
      return;
    }
    if (v === rt.TEXT && (!G || !E)) {
      I({ x: De, y: qe }), M(!0);
      return;
    }
    v === rt.PENCIL && h({
      type: rt.FREE_HAND,
      points: [{ x: De, y: qe }],
      color: m,
      size: x,
      brushType: p
    }), v === rt.ERASER && h({
      type: rt.ERASER,
      points: [{ x: De, y: qe }],
      color: m,
      size: x
    }), v === rt.GEOMETRY && (h({
      type: rt.GEOMETRY,
      geometryType: jt.LINE,
      fromX: De,
      fromY: qe,
      toX: De,
      toY: qe,
      color: m,
      size: x
    }), (c == null ? void 0 : c.geometryType) === jt.LINE && h({
      type: rt.GEOMETRY,
      geometryType: jt.LINE,
      fromX: De,
      fromY: qe,
      toX: De,
      toY: qe,
      color: m,
      size: x
    }), (c == null ? void 0 : c.geometryType) === jt.SQUARE && h({
      type: rt.GEOMETRY,
      geometryType: jt.SQUARE,
      x: De,
      y: qe,
      width: 0,
      height: 0,
      color: m,
      size: x
    }), (c == null ? void 0 : c.geometryType) === jt.SQUARE && h({
      type: rt.GEOMETRY,
      geometryType: jt.CIRCLE,
      x: De,
      y: qe,
      radius: 0,
      color: m,
      size: x
    }));
  }, Me = (Fe) => {
    const De = de.current.getBoundingClientRect(), qe = Fe.clientX - De.left, ve = Fe.clientY - De.top;
    if (Q({
      x: qe,
      y: ve
    }), D) {
      const Ae = Fe.clientX - ((he == null ? void 0 : he.x) || 0), Ce = Fe.clientY - ((he == null ? void 0 : he.y) || 0);
      z({ x: Ae, y: Ce });
      return;
    }
    if (ce || v === rt.PAN || !f || !c) return;
    const { x: at, y: He } = _e(Fe);
    if ((c.type === rt.FREE_HAND || c.type === rt.ERASER) && h((Ae) => ({
      ...Ae,
      points: [...Ae.points, { x: at, y: He }]
    })), c.type === rt.GEOMETRY && (s === jt.LINE && h((Ae) => ({
      ...Ae,
      toX: at,
      toY: He
    })), s === jt.SQUARE && h((Ae) => ({
      ...Ae,
      x: Math.min(Ae.x, at),
      y: Math.min(Ae.y, He),
      width: Math.abs(at - Ae.x),
      height: Math.abs(He - Ae.y)
    })), s === jt.CIRCLE)) {
      const Ae = Math.sqrt((at - c.x) ** 2 + (He - c.y) ** 2);
      h((Ce) => ({ ...Ce, radius: Ae }));
    }
  }, Ve = () => {
    if (ie(!1), D) {
      R(!1), _.current && (_.current.style.cursor = ce || v === "pan" ? "grab" : "default");
      return;
    }
    f && c && (i((Fe) => ({
      ...Fe,
      commands: [...Fe.commands, c]
    })), h(null), g(!1));
  };
  return Tn(() => {
    const Fe = de.current, De = A.current, qe = () => {
      const ve = Fe.parentElement, at = window.devicePixelRatio || 1, He = ve.getBoundingClientRect();
      Fe.width = He.width * at, Fe.height = He.height * at, De.width = He.width * at, De.height = He.height * at, Fe.style.width = `${He.width}px`, Fe.style.height = `${He.height}px`, De.style.width = `${He.width}px`, De.style.height = `${He.height}px`, C(Math.random());
    };
    return qe(), window.addEventListener("resize", qe), () => window.removeEventListener("resize", qe);
  }, []), /* @__PURE__ */ X.jsx(
    "div",
    {
      ref: _,
      className: "relative w-full h-[600px] overflow-hidden select-none",
      style: { cursor: ce || v === "pan" ? D ? "grabbing" : "grab" : "default" },
      children: /* @__PURE__ */ X.jsxs(
        "div",
        {
          style: {
            transform: `translate(${se.x}px, ${se.y}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ X.jsx(
              "canvas",
              {
                ref: de,
                className: "absolute top-0 left-0 w-full h-full bg-gray-100",
                onMouseDown: Ee,
                onMouseMove: Me,
                onMouseUp: Ve,
                onMouseLeave: Ve
              }
            ),
            /* @__PURE__ */ X.jsx(
              "canvas",
              {
                ref: A,
                className: "absolute top-0 left-0 w-full h-full pointer-events-none"
              }
            ),
            E && k && /* @__PURE__ */ X.jsx(a5, { position: { x: k.x, y: k.y } }),
            /* @__PURE__ */ X.jsx(
              o5,
              {
                x: (be == null ? void 0 : be.x) || 0,
                y: (be == null ? void 0 : be.y) || 0,
                isClicking: q,
                isDrawing: f,
                tool: v
              }
            )
          ]
        }
      )
    }
  );
}), h5 = (n) => {
  const { canvasRef: e } = fr();
  return /* @__PURE__ */ X.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ X.jsx(i5, { ...n }),
    /* @__PURE__ */ X.jsx(s5, { ref: e })
  ] });
};
export {
  Xt as B,
  h5 as D,
  l5 as T,
  xt as _,
  fr as a,
  u5 as b,
  dr as u
};
