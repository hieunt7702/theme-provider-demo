import wt, { forwardRef as Ma, createElement as Us, createContext as nc, useContext as rc, useState as ht, useEffect as Bn, useRef as Zn } from "react";
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
var fl;
function K1() {
  if (fl) return Sa;
  fl = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(a, s, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      i = {};
      for (var h in s)
        h !== "key" && (i[h] = s[h]);
    } else i = s;
    return s = i.ref, {
      $$typeof: n,
      type: a,
      key: l,
      ref: s !== void 0 ? s : null,
      props: i
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
var dl;
function Q1() {
  return dl || (dl = 1, process.env.NODE_ENV !== "production" && function() {
    function n(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === ye ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case I:
          return "Fragment";
        case k:
          return "Profiler";
        case O:
          return "StrictMode";
        case me:
          return "Suspense";
        case Se:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case M:
            return "Portal";
          case W:
            return (D.displayName || "Context") + ".Provider";
          case F:
            return (D._context.displayName || "Context") + ".Consumer";
          case ae:
            var Le = D.render;
            return D = D.displayName, D || (D = Le.displayName || Le.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case re:
            return Le = D.displayName || null, Le !== null ? Le : n(D.type) || "Memo";
          case z:
            Le = D._payload, D = D._init;
            try {
              return n(D(Le));
            } catch {
            }
        }
      return null;
    }
    function e(D) {
      return "" + D;
    }
    function r(D) {
      try {
        e(D);
        var Le = !1;
      } catch {
        Le = !0;
      }
      if (Le) {
        Le = console;
        var w = Le.error, C = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return w.call(
          Le,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(D);
      }
    }
    function a(D) {
      if (D === I) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === z)
        return "<...>";
      try {
        var Le = n(D);
        return Le ? "<" + Le + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var D = N.A;
      return D === null ? null : D.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(D) {
      if (_.call(D, "key")) {
        var Le = Object.getOwnPropertyDescriptor(D, "key").get;
        if (Le && Le.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function h(D, Le) {
      function w() {
        de || (de = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Le
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: w,
        configurable: !0
      });
    }
    function f() {
      var D = n(this.type);
      return he[D] || (he[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function g(D, Le, w, C, T, q, Y, oe) {
      return w = q.ref, D = {
        $$typeof: p,
        type: D,
        key: Le,
        props: q,
        _owner: T
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
        value: Y
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function y(D, Le, w, C, T, q, Y, oe) {
      var ne = Le.children;
      if (ne !== void 0)
        if (C)
          if (U(ne)) {
            for (C = 0; C < ne.length; C++)
              m(ne[C]);
            Object.freeze && Object.freeze(ne);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(ne);
      if (_.call(Le, "key")) {
        ne = n(D);
        var ue = Object.keys(Le).filter(function(Ce) {
          return Ce !== "key";
        });
        C = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", fe[ne + C] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          ne,
          ue,
          ne
        ), fe[ne + C] = !0);
      }
      if (ne = null, w !== void 0 && (r(w), ne = "" + w), l(Le) && (r(Le.key), ne = "" + Le.key), "key" in Le) {
        w = {};
        for (var Me in Le)
          Me !== "key" && (w[Me] = Le[Me]);
      } else w = Le;
      return ne && h(
        w,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), g(
        D,
        ne,
        q,
        T,
        s(),
        w,
        Y,
        oe
      );
    }
    function m(D) {
      typeof D == "object" && D !== null && D.$$typeof === p && D._store && (D._store.validated = 1);
    }
    var x = wt, p = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), W = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ye = Symbol.for("react.client.reference"), N = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, U = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(D) {
        return D();
      }
    };
    var de, he = {}, Q = x["react-stack-bottom-frame"].bind(
      x,
      i
    )(), Z = R(a(i)), fe = {};
    _a.Fragment = I, _a.jsx = function(D, Le, w, C, T) {
      var q = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        D,
        Le,
        w,
        !1,
        C,
        T,
        q ? Error("react-stack-top-frame") : Q,
        q ? R(a(D)) : Z
      );
    }, _a.jsxs = function(D, Le, w, C, T) {
      var q = 1e4 > N.recentlyCreatedOwnerStacks++;
      return y(
        D,
        Le,
        w,
        !0,
        C,
        T,
        q ? Error("react-stack-top-frame") : Q,
        q ? R(a(D)) : Z
      );
    };
  }()), _a;
}
var pl;
function eu() {
  return pl || (pl = 1, process.env.NODE_ENV === "production" ? Ao.exports = K1() : Ao.exports = Q1()), Ao.exports;
}
var X = eu(), Ul = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gl = wt.createContext && /* @__PURE__ */ wt.createContext(Ul), tu = ["attr", "size", "title"];
function nu(n, e) {
  if (n == null) return {};
  var r = ru(n, e), a, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (s = 0; s < i.length; s++)
      a = i[s], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (r[a] = n[a]);
  }
  return r;
}
function ru(n, e) {
  if (n == null) return {};
  var r = {};
  for (var a in n)
    if (Object.prototype.hasOwnProperty.call(n, a)) {
      if (e.indexOf(a) >= 0) continue;
      r[a] = n[a];
    }
  return r;
}
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
    }
    return n;
  }, Fo.apply(this, arguments);
}
function ml(n, e) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Eo(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ml(Object(r), !0).forEach(function(a) {
      iu(n, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ml(Object(r)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
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
    var a = r.call(n, e);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Hl(n) {
  return n && n.map((e, r) => /* @__PURE__ */ wt.createElement(e.tag, Eo({
    key: r
  }, e.attr), Hl(e.child)));
}
function gt(n) {
  return (e) => /* @__PURE__ */ wt.createElement(su, Fo({
    attr: Eo({}, n.attr)
  }, e), Hl(n.child));
}
function su(n) {
  var e = (r) => {
    var {
      attr: a,
      size: s,
      title: i
    } = n, l = nu(n, tu), h = s || r.size || "1em", f;
    return r.className && (f = r.className), n.className && (f = (f ? f + " " : "") + n.className), /* @__PURE__ */ wt.createElement("svg", Fo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, l, {
      className: f,
      style: Eo(Eo({
        color: n.color || r.color
      }, r.style), n.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ wt.createElement("title", null, i), n.children);
  };
  return gl !== void 0 ? /* @__PURE__ */ wt.createElement(gl.Consumer, null, (r) => e(r)) : e(Ul);
}
function ic(n) {
  return gt({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z" }, child: [] }] })(n);
}
function ac(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(n);
}
function To(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(n);
}
function oc(n) {
  return gt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" }, child: [] }] })(n);
}
function sc(n) {
  return gt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z" }, child: [] }] })(n);
}
function Bo(n) {
  return gt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(n);
}
function cc(n) {
  return gt({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" }, child: [] }] })(n);
}
function lc(n) {
  return gt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(n);
}
function Do(n) {
  return gt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(n);
}
function uc(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" }, child: [] }] })(n);
}
function hc(n) {
  return gt({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" }, child: [] }] })(n);
}
function fc(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" }, child: [] }] })(n);
}
function dc(n) {
  return gt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" }, child: [] }] })(n);
}
function pc(n) {
  return gt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" }, child: [] }] })(n);
}
function gc(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 5 15 L 5 17 L 27 17 L 27 15 Z" }, child: [] }] })(n);
}
function mc(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.15625 3 C 18.390625 3.003906 17.644531 3.300781 17.09375 3.90625 C 17.085938 3.914063 17.101563 3.929688 17.09375 3.9375 C 15.863281 5.175781 15.386719 6.40625 14.96875 7.5 C 14.789063 7.972656 14.609375 8.417969 14.375 8.875 C 13.914063 8.34375 13.25 8 12.5 8 C 11.132813 8 10 9.132813 10 10.5 C 10 11.867188 11.132813 13 12.5 13 C 13.242188 13 13.882813 12.648438 14.34375 12.125 L 14.40625 12.1875 L 5.28125 21.28125 L 5 21.59375 L 5 25.5625 L 4 26.59375 L 5.40625 28 L 6.4375 27 L 10.40625 27 L 10.71875 26.71875 L 27.28125 10.125 L 27.3125 10.09375 C 28.464844 8.941406 28.464844 7.058594 27.3125 5.90625 L 26.09375 4.6875 C 25.515625 4.109375 24.765625 3.8125 24 3.8125 C 23.285156 3.8125 22.589844 4.089844 22.03125 4.59375 L 21.3125 3.90625 C 20.722656 3.316406 19.933594 2.996094 19.15625 3 Z M 19.1875 5 C 19.433594 5.003906 19.699219 5.105469 19.90625 5.3125 L 20.59375 6 L 14.46875 12.09375 C 15.824219 10.65625 16.421875 9.320313 16.84375 8.21875 C 17.273438 7.09375 17.542969 6.269531 18.5 5.3125 L 18.5625 5.25 C 18.710938 5.082031 18.941406 4.996094 19.1875 5 Z M 24 5.78125 C 24.234375 5.78125 24.464844 5.871094 24.6875 6.09375 L 25.90625 7.3125 C 26.351563 7.757813 26.351563 8.242188 25.90625 8.6875 L 25 9.5625 L 22.4375 7 L 23.21875 6.21875 L 23.3125 6.09375 C 23.535156 5.871094 23.765625 5.78125 24 5.78125 Z M 21 8.4375 L 23.5625 11 L 16 18.5625 L 13.4375 16 Z M 12.5 10 C 12.789063 10 13 10.210938 13 10.5 C 13 10.789063 12.789063 11 12.5 11 C 12.210938 11 12 10.789063 12 10.5 C 12 10.210938 12.210938 10 12.5 10 Z M 12 17.4375 L 14.5625 20 L 9.5625 25 L 7 25 L 7 22.4375 Z" }, child: [] }] })(n);
}
function qo(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 23.8125 4.03125 C 22.722656 4.03125 21.613281 4.449219 20.78125 5.28125 L 11.5 14.5625 L 6.03125 16.65625 L 5.5 16.875 L 5.40625 17.4375 L 4 26.84375 L 3.8125 28.1875 L 5.15625 28 L 14.5625 26.59375 L 15.125 26.5 L 15.34375 25.96875 L 17.3125 20.78125 L 17.8125 20.3125 L 26.8125 11.3125 C 28.425781 9.699219 28.457031 7.109375 26.9375 5.4375 L 26.8125 5.28125 C 25.980469 4.449219 24.902344 4.03125 23.8125 4.03125 Z M 23.8125 6 C 24.375 6 24.9375 6.25 25.40625 6.71875 C 26.34375 7.65625 26.34375 8.96875 25.40625 9.90625 L 20.375 14.9375 L 17.1875 11.75 L 22.21875 6.71875 C 22.6875 6.25 23.25 6 23.8125 6 Z M 15.75 13.1875 L 18.9375 16.375 L 17.125 18.1875 L 13.9375 15 Z M 12.40625 16.34375 L 12.4375 16.34375 L 15.65625 19.5625 L 13.6875 24.71875 L 7.84375 25.5625 L 10.53125 22.875 C 10.585938 22.878906 10.632813 22.90625 10.6875 22.90625 C 11.570313 22.90625 12.3125 22.195313 12.3125 21.3125 C 12.3125 20.429688 11.570313 19.6875 10.6875 19.6875 C 9.804688 19.6875 9.09375 20.429688 9.09375 21.3125 C 9.09375 21.367188 9.121094 21.414063 9.125 21.46875 L 6.4375 24.15625 L 7.28125 18.3125 Z" }, child: [] }] })(n);
}
function vc(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z" }, child: [] }] })(n);
}
function bc(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 19.21875 5.28125 L 17.78125 6.71875 L 24.0625 13 L 11 13 C 7.15625 13 4 16.15625 4 20 L 4 27 L 6 27 L 6 20 C 6 17.246094 8.246094 15 11 15 L 24.0625 15 L 17.78125 21.28125 L 19.21875 22.71875 L 27.21875 14.71875 L 27.90625 14 L 27.21875 13.28125 Z" }, child: [] }] })(n);
}
function yc(n) {
  return gt({ attr: { viewBox: "0 0 32 32" }, child: [{ tag: "path", attr: { d: "M 12.78125 5.28125 L 4.78125 13.28125 L 4.09375 14 L 4.78125 14.71875 L 12.78125 22.71875 L 14.21875 21.28125 L 7.9375 15 L 21 15 C 23.753906 15 26 17.246094 26 20 L 26 27 L 28 27 L 28 20 C 28 16.15625 24.84375 13 21 13 L 7.9375 13 L 14.21875 6.71875 Z" }, child: [] }] })(n);
}
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lu = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), vl = (n) => {
  const e = lu(n);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wl = (...n) => n.filter((e, r, a) => !!e && e.trim() !== "" && a.indexOf(e) === r).join(" ").trim(), uu = (n) => {
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
const fu = Ma(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: s = "",
    children: i,
    iconNode: l,
    ...h
  }, f) => Us(
    "svg",
    {
      ref: f,
      ...hu,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: a ? Number(r) * 24 / Number(e) : r,
      className: Wl("lucide", s),
      ...!i && !uu(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...l.map(([g, y]) => Us(g, y)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (n, e) => {
  const r = Ma(
    ({ className: a, ...s }, i) => Us(fu, {
      ref: i,
      iconNode: e,
      className: Wl(
        `lucide-${cu(vl(n))}`,
        `lucide-${n}`,
        a
      ),
      ...s
    })
  );
  return r.displayName = vl(n), r;
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
], pu = lt("bold", du);
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
], mu = lt("brush-cleaning", gu);
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
], bu = lt("brush", vu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wu = lt("check", yu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xu = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lu = lt("chevron-down", xu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Au = lt("chevron-right", Nu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], bl = lt("circle", Su);
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
], ku = lt("cloud-download", _u);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = [
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
], Iu = lt("corner-up-left", Pu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
], ju = lt("corner-up-right", Cu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Fu = lt("ellipsis", Mu);
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
], Ou = lt("eraser", Eu);
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
], Tu = lt("file-input", Ru);
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
], Du = lt("file-plus-2", Bu);
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
], zu = lt("file-text", qu);
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
], Hu = lt("folder-input", Uu);
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
], Vu = lt("hand", Wu);
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
], Yu = lt("heart", Gu);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
], Xu = lt("highlighter", $u);
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
], Zu = lt("image-up", Ju);
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
], Qu = lt("image", Ku);
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
], t2 = lt("images", e2);
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
], r2 = lt("italic", n2);
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
], a2 = lt("layers", i2);
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
], s2 = lt("menu", o2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "M5 12h14", key: "1ays0h" }]], l2 = lt("minus", c2);
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
], h2 = lt("paint-bucket", u2);
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
], d2 = lt("party-popper", f2);
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
], g2 = lt("pen-line", p2);
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
], v2 = lt("pen", m2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], y2 = lt("plus", b2);
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
], yl = lt("refresh-cw", w2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], L2 = lt("rotate-ccw", x2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], A2 = lt("rotate-cw", N2);
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
], _2 = lt("shredder", S2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = [["path", { d: "M22 2 2 22", key: "y4kqgn" }]], P2 = lt("slash", k2);
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
], C2 = lt("spline", I2);
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
], M2 = lt("square-dashed-mouse-pointer", j2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], E2 = lt("square", F2);
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
], R2 = lt("trash", O2);
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
], B2 = lt("triangle", T2);
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
], q2 = lt("type", D2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], U2 = lt("underline", z2);
var H2 = /* @__PURE__ */ nc({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), W2 = function(e, r, a) {
  var s = a.get(e);
  return s ? s(r) : (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), null);
};
function wl(n, e) {
  if (n == null) return {};
  var r = {}, a = Object.keys(n), s, i;
  for (i = 0; i < a.length; i++)
    s = a[i], !(e.indexOf(s) >= 0) && (r[s] = n[s]);
  return r;
}
var Vl = /* @__PURE__ */ Ma(function(n, e) {
  var r = n.alt, a = n.color, s = n.size, i = n.weight, l = n.mirrored, h = n.children, f = n.renderPath, g = wl(n, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]), y = rc(H2), m = y.color, x = m === void 0 ? "currentColor" : m, p = y.size, M = y.weight, I = M === void 0 ? "regular" : M, O = y.mirrored, k = O === void 0 ? !1 : O, F = wl(y, ["color", "size", "weight", "mirrored"]);
  return wt.createElement("svg", Object.assign({
    ref: e,
    xmlns: "http://www.w3.org/2000/svg",
    width: s ?? p,
    height: s ?? p,
    fill: a ?? x,
    viewBox: "0 0 256 256",
    transform: l || k ? "scale(-1, 1)" : void 0
  }, F, g), !!r && wt.createElement("title", null, r), h, wt.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), f(i ?? I, a ?? x));
});
Vl.displayName = "IconBase";
var li = /* @__PURE__ */ new Map();
li.set("bold", function(n) {
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
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
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    opacity: "0.2"
  }), wt.createElement("rect", {
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
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
    x: "24",
    y: "40",
    width: "208",
    height: "176",
    rx: "16"
  }));
});
li.set("light", function(n) {
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
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
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
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
  return wt.createElement(wt.Fragment, null, wt.createElement("rect", {
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
}, Hs = /* @__PURE__ */ Ma(function(n, e) {
  return wt.createElement(Vl, Object.assign({
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
  CircleOutlineIcon: bl,
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
  MoreIcon: Fu,
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
  CircleIcon: bl,
  // Hình tròn
  HeartIcon: Yu,
  // Trái tim
  TriangleIcon: B2,
  // Hình tam giác
  SquareDashedIcon: M2,
  // Select Move
  DeleteOutlineIcon: R2,
  // Thùng rác (Xóa)
  ArrowDownIcon: Lu,
  PenLineIcon: g2,
  // Chỉnh sửa
  ShredderIcon: _2,
  // Hủy giấy
  PartyPopperIcon: d2
  // Pháo hoa
};
function wc(n) {
  return gt({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }, child: [] }] })(n);
}
function xc(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112m0 0V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160m-64 1V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224m128-80V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192" }, child: [] }, { tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" }, child: [] }] })(n);
}
function Lc(n) {
  return gt({ attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z", fill: "currentColor" }, child: [] }] })(n);
}
function Nc(n) {
  return gt({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" }, child: [] }] })(n);
}
function Ac(n) {
  return gt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }, child: [] }, { tag: "path", attr: { d: "M22 21H7" }, child: [] }, { tag: "path", attr: { d: "m5 11 9 9" }, child: [] }] })(n);
}
function Sc(n) {
  return gt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }, child: [] }, { tag: "path", attr: { d: "m14 19.5 3-3 3 3" }, child: [] }, { tag: "path", attr: { d: "M17 22v-5.5" }, child: [] }, { tag: "circle", attr: { cx: "9", cy: "9", r: "2" }, child: [] }] })(n);
}
function _c(n) {
  return gt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" }, child: [] }, { tag: "path", attr: { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" }, child: [] }, { tag: "path", attr: { d: "M14 14v-8l-2 2" }, child: [] }] })(n);
}
function kc(n) {
  return gt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, child: [] }] })(n);
}
function Pc(n) {
  return gt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" }, child: [] }] })(n);
}
function Ic(n) {
  return gt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(n);
}
function Cc(n) {
  return gt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" }, child: [] }] })(n);
}
function jc(n) {
  return gt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z" }, child: [] }] })(n);
}
function Mc(n) {
  return gt({ attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M2 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM2 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM8.5 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z" }, child: [] }] })(n);
}
function Fc(n) {
  return gt({ attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329c-1.199 0-2.327.463-3.18 1.304-.027.025-7.967 7.964-7.967 7.964-.373.373-.717.91-.967 1.514-.195.473-1.979 5.863-2.336 6.939-.119.358-.025.754.242 1.021.189.189.445.293.707.293.105 0 .211-.018.314-.051 1.076-.355 6.465-2.141 6.938-2.336.603-.248 1.14-.592 1.515-.967l2.157-2.156.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5c.696-.695.887-1.699.588-2.572.107-.386.18-.783.18-1.195zm-11.864 10.379c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038l3.051 3.051zm-4.097.047l.999.999-1.498.499.499-1.498zm7.698-3.113l-2.42 2.42-.235.18-3.53-3.529.18-.234 7.131-7.131 2.731 2.731-3.69 3.69c-.513.512-.549 1.289-.167 1.873zm6.08-4.959l-4.5 4.5c-.098.099-.226.146-.354.146s-.256-.049-.354-.146c-.195-.194-.195-.512 0-.707l4.5-4.5c.194-.194.512-.194.707 0 .196.195.197.511.001.707zm.107-1.764c-.519-.168-1.108-.062-1.521.35l-.102.102-2.731-2.731.078-.078c.984-.98 2.652-.981 3.608-.023.479.479.743 1.116.743 1.793.001.199-.03.394-.075.587z" }, child: [] }] })(n);
}
function Ec(n) {
  return gt({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" }, child: [] }] })(n);
}
const Y2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: xc,
  PencilOutlineIcon: wc,
  MemoryPenOutlineIcon: mc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Ec,
  PenOutlineIcon: qo,
  FontsIcon: sc,
  MinusIcon: gc,
  SquareIcon: pc,
  EraserIcon: Ac,
  PlusIcon: vc,
  FontBoldIcon: ic,
  FontItalicIcon: cc,
  FontUnderlineIcon: lc,
  CircleOutlineIcon: uc,
  RectangleOutlineIcon: kc,
  UndoIcon: yc,
  RedoIcon: bc,
  MenuIcon: Pc,
  CheckIcon: ac,
  CopyImageIcon: dc,
  SaveCloudIcon: Nc,
  ExportIcon: oc,
  PDFIcon: hc,
  ImageIcon: fc,
  ArrowRightIcon: Ic,
  MoreIcon: Mc,
  MultipleCardsIcon: _c,
  AddBoardIcon: Cc,
  SplineIcon: Lc,
  CleanIcon: jc,
  ImageUpIcon: Sc
}, $2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: xc,
  PencilOutlineIcon: wc,
  MemoryPenOutlineIcon: mc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Ec,
  PenOutlineIcon: qo,
  FontsIcon: sc,
  MinusIcon: gc,
  SquareIcon: pc,
  EraserIcon: Ac,
  PlusIcon: vc,
  FontBoldIcon: ic,
  FontItalicIcon: cc,
  FontUnderlineIcon: lc,
  CircleOutlineIcon: uc,
  RectangleOutlineIcon: kc,
  UndoIcon: yc,
  RedoIcon: bc,
  MenuIcon: Pc,
  CheckIcon: ac,
  CopyImageIcon: dc,
  SaveCloudIcon: Nc,
  ExportIcon: oc,
  PDFIcon: hc,
  ImageIcon: fc,
  ArrowRightIcon: Ic,
  MoreIcon: Mc,
  MultipleCardsIcon: _c,
  AddBoardIcon: Cc,
  SplineIcon: Lc,
  CleanIcon: jc,
  ImageUpIcon: Sc
}, X2 = {
  HomeIcon: Bo,
  SettingsIcon: To,
  UserIcon: Do,
  HandleIcon: xc,
  PencilOutlineIcon: wc,
  MemoryPenOutlineIcon: mc,
  ColorPenOutlineIcon: Fc,
  PaintPenOutlineIcon: Ec,
  PenOutlineIcon: qo,
  FontsIcon: sc,
  MinusIcon: gc,
  SquareIcon: pc,
  EraserIcon: Ac,
  PlusIcon: vc,
  FontBoldIcon: ic,
  FontItalicIcon: cc,
  FontUnderlineIcon: lc,
  CircleOutlineIcon: uc,
  RectangleOutlineIcon: kc,
  UndoIcon: yc,
  RedoIcon: bc,
  MenuIcon: Pc,
  CheckIcon: ac,
  CopyImageIcon: dc,
  SaveCloudIcon: Nc,
  ExportIcon: oc,
  PDFIcon: hc,
  ImageIcon: fc,
  ArrowRightIcon: Ic,
  MoreIcon: Mc,
  MultipleCardsIcon: _c,
  AddBoardIcon: Cc,
  SplineIcon: Lc,
  CleanIcon: jc,
  ImageUpIcon: Sc
}, Ms = {
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
}, Gl = nc(void 0), l5 = ({ children: n }) => {
  const [e, r] = ht("default");
  Bn(() => {
    const i = localStorage.getItem("app_theme");
    i && Ms[i] && r(i);
  }, []);
  const a = (i, l = !0) => {
    r(i), l && localStorage.setItem("app_theme", i);
  }, s = {
    theme: e,
    config: Ms[e],
    setTheme: a,
    iconSet: Ms[e].iconSet
  };
  return /* @__PURE__ */ X.jsx(Gl.Provider, { value: s, children: n });
}, fr = () => {
  const n = rc(Gl);
  if (!n) throw new Error("useTheme must be used within ThemeProvider");
  return n;
}, Qt = ({
  Icon: n,
  isActive: e,
  onClick: r,
  onMouseDown: a,
  onMouseUp: s,
  onMouseMove: i,
  title: l,
  onChange: h,
  className: f
}) => {
  const { config: g } = fr(), y = g.components.buttonIcon, m = g.components.buttonSelected;
  return /* @__PURE__ */ X.jsx(
    "button",
    {
      className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${y} ${e ? m : ""} ${f}`,
      onClick: r,
      onMouseDown: a,
      onMouseUp: s,
      onMouseMove: i,
      title: l,
      children: /* @__PURE__ */ X.jsx(n, { className: "w-5 h-5", strokeWidth: 1.6 })
    }
  );
};
function At(n) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, At(n);
}
var fn = Uint8Array, In = Uint16Array, Oc = Int32Array, zo = new fn([
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
]), Ws = new fn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Yl = function(n, e) {
  for (var r = new In(31), a = 0; a < 31; ++a)
    r[a] = e += 1 << n[a - 1];
  for (var s = new Oc(r[30]), a = 1; a < 30; ++a)
    for (var i = r[a]; i < r[a + 1]; ++i)
      s[i] = i - r[a] << 5 | a;
  return { b: r, r: s };
}, $l = Yl(zo, 2), Xl = $l.b, Vs = $l.r;
Xl[28] = 258, Vs[258] = 28;
var Jl = Yl(Uo, 0), J2 = Jl.b, xl = Jl.r, Gs = new In(32768);
for (var Ct = 0; Ct < 32768; ++Ct) {
  var Hr = (Ct & 43690) >> 1 | (Ct & 21845) << 1;
  Hr = (Hr & 52428) >> 2 | (Hr & 13107) << 2, Hr = (Hr & 61680) >> 4 | (Hr & 3855) << 4, Gs[Ct] = ((Hr & 65280) >> 8 | (Hr & 255) << 8) >> 1;
}
var hr = function(n, e, r) {
  for (var a = n.length, s = 0, i = new In(e); s < a; ++s)
    n[s] && ++i[n[s] - 1];
  var l = new In(e);
  for (s = 1; s < e; ++s)
    l[s] = l[s - 1] + i[s - 1] << 1;
  var h;
  if (r) {
    h = new In(1 << e);
    var f = 15 - e;
    for (s = 0; s < a; ++s)
      if (n[s])
        for (var g = s << 4 | n[s], y = e - n[s], m = l[n[s] - 1]++ << y, x = m | (1 << y) - 1; m <= x; ++m)
          h[Gs[m] >> f] = g;
  } else
    for (h = new In(a), s = 0; s < a; ++s)
      n[s] && (h[s] = Gs[l[n[s] - 1]++] >> 15 - n[s]);
  return h;
}, Gr = new fn(288);
for (var Ct = 0; Ct < 144; ++Ct)
  Gr[Ct] = 8;
for (var Ct = 144; Ct < 256; ++Ct)
  Gr[Ct] = 9;
for (var Ct = 256; Ct < 280; ++Ct)
  Gr[Ct] = 7;
for (var Ct = 280; Ct < 288; ++Ct)
  Gr[Ct] = 8;
var ja = new fn(32);
for (var Ct = 0; Ct < 32; ++Ct)
  ja[Ct] = 5;
var Z2 = /* @__PURE__ */ hr(Gr, 9, 0), K2 = /* @__PURE__ */ hr(Gr, 9, 1), Q2 = /* @__PURE__ */ hr(ja, 5, 0), eh = /* @__PURE__ */ hr(ja, 5, 1), Fs = function(n) {
  for (var e = n[0], r = 1; r < n.length; ++r)
    n[r] > e && (e = n[r]);
  return e;
}, $n = function(n, e, r) {
  var a = e / 8 | 0;
  return (n[a] | n[a + 1] << 8) >> (e & 7) & r;
}, Es = function(n, e) {
  var r = e / 8 | 0;
  return (n[r] | n[r + 1] << 8 | n[r + 2] << 16) >> (e & 7);
}, Rc = function(n) {
  return (n + 7) / 8 | 0;
}, Zl = function(n, e, r) {
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
  var a = new Error(e || th[n]);
  if (a.code = n, Error.captureStackTrace && Error.captureStackTrace(a, Jn), !r)
    throw a;
  return a;
}, nh = function(n, e, r, a) {
  var s = n.length, i = 0;
  if (!s || e.f && !e.l)
    return r || new fn(0);
  var l = !r, h = l || e.i != 2, f = e.i;
  l && (r = new fn(s * 3));
  var g = function(Ce) {
    var Ee = r.length;
    if (Ce > Ee) {
      var Fe = new fn(Math.max(Ee * 2, Ce));
      Fe.set(r), r = Fe;
    }
  }, y = e.f || 0, m = e.p || 0, x = e.b || 0, p = e.l, M = e.d, I = e.m, O = e.n, k = s * 8;
  do {
    if (!p) {
      y = $n(n, m, 1);
      var F = $n(n, m + 1, 3);
      if (m += 3, F)
        if (F == 1)
          p = K2, M = eh, I = 9, O = 5;
        else if (F == 2) {
          var Se = $n(n, m, 31) + 257, re = $n(n, m + 10, 15) + 4, z = Se + $n(n, m + 5, 31) + 1;
          m += 14;
          for (var ie = new fn(z), ye = new fn(19), N = 0; N < re; ++N)
            ye[Ws[N]] = $n(n, m + N * 3, 7);
          m += re * 3;
          for (var _ = Fs(ye), U = (1 << _) - 1, R = hr(ye, _, 1), N = 0; N < z; ) {
            var de = R[$n(n, m, U)];
            m += de & 15;
            var W = de >> 4;
            if (W < 16)
              ie[N++] = W;
            else {
              var he = 0, Q = 0;
              for (W == 16 ? (Q = 3 + $n(n, m, 3), m += 2, he = ie[N - 1]) : W == 17 ? (Q = 3 + $n(n, m, 7), m += 3) : W == 18 && (Q = 11 + $n(n, m, 127), m += 7); Q--; )
                ie[N++] = he;
            }
          }
          var Z = ie.subarray(0, Se), fe = ie.subarray(Se);
          I = Fs(Z), O = Fs(fe), p = hr(Z, I, 1), M = hr(fe, O, 1);
        } else
          Jn(1);
      else {
        var W = Rc(m) + 4, ae = n[W - 4] | n[W - 3] << 8, me = W + ae;
        if (me > s) {
          f && Jn(0);
          break;
        }
        h && g(x + ae), r.set(n.subarray(W, me), x), e.b = x += ae, e.p = m = me * 8, e.f = y;
        continue;
      }
      if (m > k) {
        f && Jn(0);
        break;
      }
    }
    h && g(x + 131072);
    for (var D = (1 << I) - 1, Le = (1 << O) - 1, w = m; ; w = m) {
      var he = p[Es(n, m) & D], C = he >> 4;
      if (m += he & 15, m > k) {
        f && Jn(0);
        break;
      }
      if (he || Jn(2), C < 256)
        r[x++] = C;
      else if (C == 256) {
        w = m, p = null;
        break;
      } else {
        var T = C - 254;
        if (C > 264) {
          var N = C - 257, q = zo[N];
          T = $n(n, m, (1 << q) - 1) + Xl[N], m += q;
        }
        var Y = M[Es(n, m) & Le], oe = Y >> 4;
        Y || Jn(3), m += Y & 15;
        var fe = J2[oe];
        if (oe > 3) {
          var q = Uo[oe];
          fe += Es(n, m) & (1 << q) - 1, m += q;
        }
        if (m > k) {
          f && Jn(0);
          break;
        }
        h && g(x + 131072);
        var ne = x + T;
        if (x < fe) {
          var ue = i - fe, Me = Math.min(fe, ne);
          for (ue + x < 0 && Jn(3); x < Me; ++x)
            r[x] = a[ue + x];
        }
        for (; x < ne; ++x)
          r[x] = r[x - fe];
      }
    }
    e.l = p, e.p = w, e.b = x, e.f = y, p && (y = 1, e.m = I, e.d = M, e.n = O);
  } while (!y);
  return x != r.length && l ? Zl(r, 0, x) : r.subarray(0, x);
}, _r = function(n, e, r) {
  r <<= e & 7;
  var a = e / 8 | 0;
  n[a] |= r, n[a + 1] |= r >> 8;
}, ka = function(n, e, r) {
  r <<= e & 7;
  var a = e / 8 | 0;
  n[a] |= r, n[a + 1] |= r >> 8, n[a + 2] |= r >> 16;
}, Os = function(n, e) {
  for (var r = [], a = 0; a < n.length; ++a)
    n[a] && r.push({ s: a, f: n[a] });
  var s = r.length, i = r.slice();
  if (!s)
    return { t: Ql, l: 0 };
  if (s == 1) {
    var l = new fn(r[0].s + 1);
    return l[r[0].s] = 1, { t: l, l: 1 };
  }
  r.sort(function(me, Se) {
    return me.f - Se.f;
  }), r.push({ s: -1, f: 25001 });
  var h = r[0], f = r[1], g = 0, y = 1, m = 2;
  for (r[0] = { s: -1, f: h.f + f.f, l: h, r: f }; y != s - 1; )
    h = r[r[g].f < r[m].f ? g++ : m++], f = r[g != y && r[g].f < r[m].f ? g++ : m++], r[y++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var x = i[0].s, a = 1; a < s; ++a)
    i[a].s > x && (x = i[a].s);
  var p = new In(x + 1), M = Ys(r[y - 1], p, 0);
  if (M > e) {
    var a = 0, I = 0, O = M - e, k = 1 << O;
    for (i.sort(function(Se, re) {
      return p[re.s] - p[Se.s] || Se.f - re.f;
    }); a < s; ++a) {
      var F = i[a].s;
      if (p[F] > e)
        I += k - (1 << M - p[F]), p[F] = e;
      else
        break;
    }
    for (I >>= O; I > 0; ) {
      var W = i[a].s;
      p[W] < e ? I -= 1 << e - p[W]++ - 1 : ++a;
    }
    for (; a >= 0 && I; --a) {
      var ae = i[a].s;
      p[ae] == e && (--p[ae], ++I);
    }
    M = e;
  }
  return { t: new fn(p), l: M };
}, Ys = function(n, e, r) {
  return n.s == -1 ? Math.max(Ys(n.l, e, r + 1), Ys(n.r, e, r + 1)) : e[n.s] = r;
}, Ll = function(n) {
  for (var e = n.length; e && !n[--e]; )
    ;
  for (var r = new In(++e), a = 0, s = n[0], i = 1, l = function(f) {
    r[a++] = f;
  }, h = 1; h <= e; ++h)
    if (n[h] == s && h != e)
      ++i;
    else {
      if (!s && i > 2) {
        for (; i > 138; i -= 138)
          l(32754);
        i > 2 && (l(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (l(s), --i; i > 6; i -= 6)
          l(8304);
        i > 2 && (l(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        l(s);
      i = 1, s = n[h];
    }
  return { c: r.subarray(0, a), n: e };
}, Pa = function(n, e) {
  for (var r = 0, a = 0; a < e.length; ++a)
    r += n[a] * e[a];
  return r;
}, Kl = function(n, e, r) {
  var a = r.length, s = Rc(e + 2);
  n[s] = a & 255, n[s + 1] = a >> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var i = 0; i < a; ++i)
    n[s + i + 4] = r[i];
  return (s + 4 + a) * 8;
}, Nl = function(n, e, r, a, s, i, l, h, f, g, y) {
  _r(e, y++, r), ++s[256];
  for (var m = Os(s, 15), x = m.t, p = m.l, M = Os(i, 15), I = M.t, O = M.l, k = Ll(x), F = k.c, W = k.n, ae = Ll(I), me = ae.c, Se = ae.n, re = new In(19), z = 0; z < F.length; ++z)
    ++re[F[z] & 31];
  for (var z = 0; z < me.length; ++z)
    ++re[me[z] & 31];
  for (var ie = Os(re, 7), ye = ie.t, N = ie.l, _ = 19; _ > 4 && !ye[Ws[_ - 1]]; --_)
    ;
  var U = g + 5 << 3, R = Pa(s, Gr) + Pa(i, ja) + l, de = Pa(s, x) + Pa(i, I) + l + 14 + 3 * _ + Pa(re, ye) + 2 * re[16] + 3 * re[17] + 7 * re[18];
  if (f >= 0 && U <= R && U <= de)
    return Kl(e, y, n.subarray(f, f + g));
  var he, Q, Z, fe;
  if (_r(e, y, 1 + (de < R)), y += 2, de < R) {
    he = hr(x, p, 0), Q = x, Z = hr(I, O, 0), fe = I;
    var D = hr(ye, N, 0);
    _r(e, y, W - 257), _r(e, y + 5, Se - 1), _r(e, y + 10, _ - 4), y += 14;
    for (var z = 0; z < _; ++z)
      _r(e, y + 3 * z, ye[Ws[z]]);
    y += 3 * _;
    for (var Le = [F, me], w = 0; w < 2; ++w)
      for (var C = Le[w], z = 0; z < C.length; ++z) {
        var T = C[z] & 31;
        _r(e, y, D[T]), y += ye[T], T > 15 && (_r(e, y, C[z] >> 5 & 127), y += C[z] >> 12);
      }
  } else
    he = Z2, Q = Gr, Z = Q2, fe = ja;
  for (var z = 0; z < h; ++z) {
    var q = a[z];
    if (q > 255) {
      var T = q >> 18 & 31;
      ka(e, y, he[T + 257]), y += Q[T + 257], T > 7 && (_r(e, y, q >> 23 & 31), y += zo[T]);
      var Y = q & 31;
      ka(e, y, Z[Y]), y += fe[Y], Y > 3 && (ka(e, y, q >> 5 & 8191), y += Uo[Y]);
    } else
      ka(e, y, he[q]), y += Q[q];
  }
  return ka(e, y, he[256]), y + Q[256];
}, rh = /* @__PURE__ */ new Oc([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ql = /* @__PURE__ */ new fn(0), ih = function(n, e, r, a, s, i) {
  var l = i.z || n.length, h = new fn(a + l + 5 * (1 + Math.ceil(l / 7e3)) + s), f = h.subarray(a, h.length - s), g = i.l, y = (i.r || 0) & 7;
  if (e) {
    y && (f[0] = i.r >> 3);
    for (var m = rh[e - 1], x = m >> 13, p = m & 8191, M = (1 << r) - 1, I = i.p || new In(32768), O = i.h || new In(M + 1), k = Math.ceil(r / 3), F = 2 * k, W = function(Je) {
      return (n[Je] ^ n[Je + 1] << k ^ n[Je + 2] << F) & M;
    }, ae = new Oc(25e3), me = new In(288), Se = new In(32), re = 0, z = 0, ie = i.i || 0, ye = 0, N = i.w || 0, _ = 0; ie + 2 < l; ++ie) {
      var U = W(ie), R = ie & 32767, de = O[U];
      if (I[R] = de, O[U] = R, N <= ie) {
        var he = l - ie;
        if ((re > 7e3 || ye > 24576) && (he > 423 || !g)) {
          y = Nl(n, f, 0, ae, me, Se, z, ye, _, ie - _, y), ye = re = z = 0, _ = ie;
          for (var Q = 0; Q < 286; ++Q)
            me[Q] = 0;
          for (var Q = 0; Q < 30; ++Q)
            Se[Q] = 0;
        }
        var Z = 2, fe = 0, D = p, Le = R - de & 32767;
        if (he > 2 && U == W(ie - Le))
          for (var w = Math.min(x, he) - 1, C = Math.min(32767, ie), T = Math.min(258, he); Le <= C && --D && R != de; ) {
            if (n[ie + Z] == n[ie + Z - Le]) {
              for (var q = 0; q < T && n[ie + q] == n[ie + q - Le]; ++q)
                ;
              if (q > Z) {
                if (Z = q, fe = Le, q > w)
                  break;
                for (var Y = Math.min(Le, q - 2), oe = 0, Q = 0; Q < Y; ++Q) {
                  var ne = ie - Le + Q & 32767, ue = I[ne], Me = ne - ue & 32767;
                  Me > oe && (oe = Me, de = ne);
                }
              }
            }
            R = de, de = I[R], Le += R - de & 32767;
          }
        if (fe) {
          ae[ye++] = 268435456 | Vs[Z] << 18 | xl[fe];
          var Ce = Vs[Z] & 31, Ee = xl[fe] & 31;
          z += zo[Ce] + Uo[Ee], ++me[257 + Ce], ++Se[Ee], N = ie + Z, ++re;
        } else
          ae[ye++] = n[ie], ++me[n[ie]];
      }
    }
    for (ie = Math.max(ie, N); ie < l; ++ie)
      ae[ye++] = n[ie], ++me[n[ie]];
    y = Nl(n, f, g, ae, me, Se, z, ye, _, ie - _, y), g || (i.r = y & 7 | f[y / 8 | 0] << 3, y -= 7, i.h = O, i.p = I, i.i = ie, i.w = N);
  } else {
    for (var ie = i.w || 0; ie < l + g; ie += 65535) {
      var Fe = ie + 65535;
      Fe >= l && (f[y / 8 | 0] = g, Fe = l), y = Kl(f, y + 1, n.subarray(ie, Fe));
    }
    i.i = l;
  }
  return Zl(h, 0, a + Rc(y) + s);
}, e1 = function() {
  var n = 1, e = 0;
  return {
    p: function(r) {
      for (var a = n, s = e, i = r.length | 0, l = 0; l != i; ) {
        for (var h = Math.min(l + 2655, i); l < h; ++l)
          s += a += r[l];
        a = (a & 65535) + 15 * (a >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      n = a, e = s;
    },
    d: function() {
      return n %= 65521, e %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (e & 255) << 8 | e >> 8;
    }
  };
}, ah = function(n, e, r, a, s) {
  if (!s && (s = { l: 1 }, e.dictionary)) {
    var i = e.dictionary.subarray(-32768), l = new fn(i.length + n.length);
    l.set(i), l.set(n, i.length), n = l, s.w = i.length;
  }
  return ih(n, e.level == null ? 6 : e.level, e.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + e.mem, r, a, s);
}, t1 = function(n, e, r) {
  for (; r; ++e)
    n[e] = r, r >>>= 8;
}, oh = function(n, e) {
  var r = e.level, a = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = a << 6 | (e.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, e.dictionary) {
    var s = e1();
    s.p(e.dictionary), t1(n, 2, s.d());
  }
}, sh = function(n, e) {
  return ((n[0] & 15) != 8 || n[0] >> 4 > 7 || (n[0] << 8 | n[1]) % 31) && Jn(6, "invalid zlib data"), (n[1] >> 5 & 1) == 1 && Jn(6, "invalid zlib data: " + (n[1] & 32 ? "need" : "unexpected") + " dictionary"), (n[1] >> 3 & 4) + 2;
};
function $s(n, e) {
  e || (e = {});
  var r = e1();
  r.p(n);
  var a = ah(n, e, e.dictionary ? 6 : 2, 4);
  return oh(a, e), t1(a, a.length - 4, r.d()), a;
}
function ch(n, e) {
  return nh(n.subarray(sh(n), -4), { i: 2 }, e, e);
}
var lh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), uh = 0;
try {
  lh.decode(Ql, { stream: !0 }), uh = 1;
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
var nt = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function Rs() {
  nt.console && typeof nt.console.log == "function" && nt.console.log.apply(nt.console, arguments);
}
var kt = { log: Rs, warn: function(n) {
  nt.console && (typeof nt.console.warn == "function" ? nt.console.warn.apply(nt.console, arguments) : Rs.call(null, arguments));
}, error: function(n) {
  nt.console && (typeof nt.console.error == "function" ? nt.console.error.apply(nt.console, arguments) : Rs(n));
} };
function Ts(n, e, r) {
  var a = new XMLHttpRequest();
  a.open("GET", n), a.responseType = "blob", a.onload = function() {
    oi(a.response, e, r);
  }, a.onerror = function() {
    kt.error("could not download file");
  }, a.send();
}
function Al(n) {
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
var Ca, Xs, oi = nt.saveAs || ((typeof window > "u" ? "undefined" : At(window)) !== "object" || window !== nt ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, r) {
  var a = nt.URL || nt.webkitURL, s = document.createElement("a");
  e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? Al(s.href) ? Ts(n, e, r) : So(s, s.target = "_blank") : So(s)) : (s.href = a.createObjectURL(n), setTimeout(function() {
    a.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    So(s);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, e, r) {
  if (e = e || n.name || "download", typeof n == "string") if (Al(n)) Ts(n, e, r);
  else {
    var a = document.createElement("a");
    a.href = n, a.target = "_blank", setTimeout(function() {
      So(a);
    });
  }
  else navigator.msSaveOrOpenBlob(function(s, i) {
    return i === void 0 ? i = { autoBom: !1 } : At(i) !== "object" && (kt.warn("Deprecated: Expected third argument to be a object"), i = { autoBom: !i }), i.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
  }(n, r), e);
} : function(n, e, r, a) {
  if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof n == "string") return Ts(n, e, r);
  var s = n.type === "application/octet-stream", i = /constructor/i.test(nt.HTMLElement) || nt.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((l || s && i) && (typeof FileReader > "u" ? "undefined" : At(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var y = h.result;
      y = l ? y : y.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = y : location = y, a = null;
    }, h.readAsDataURL(n);
  } else {
    var f = nt.URL || nt.webkitURL, g = f.createObjectURL(n);
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
function n1(n) {
  var e;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], a = 0; a < r.length; a++) {
    var s = r[a].re, i = r[a].process, l = s.exec(n);
    l && (e = i(l), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
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
  var r = n[0], a = n[1], s = n[2], i = n[3];
  r = sn(r, a, s, i, e[0], 7, -680876936), i = sn(i, r, a, s, e[1], 12, -389564586), s = sn(s, i, r, a, e[2], 17, 606105819), a = sn(a, s, i, r, e[3], 22, -1044525330), r = sn(r, a, s, i, e[4], 7, -176418897), i = sn(i, r, a, s, e[5], 12, 1200080426), s = sn(s, i, r, a, e[6], 17, -1473231341), a = sn(a, s, i, r, e[7], 22, -45705983), r = sn(r, a, s, i, e[8], 7, 1770035416), i = sn(i, r, a, s, e[9], 12, -1958414417), s = sn(s, i, r, a, e[10], 17, -42063), a = sn(a, s, i, r, e[11], 22, -1990404162), r = sn(r, a, s, i, e[12], 7, 1804603682), i = sn(i, r, a, s, e[13], 12, -40341101), s = sn(s, i, r, a, e[14], 17, -1502002290), r = cn(r, a = sn(a, s, i, r, e[15], 22, 1236535329), s, i, e[1], 5, -165796510), i = cn(i, r, a, s, e[6], 9, -1069501632), s = cn(s, i, r, a, e[11], 14, 643717713), a = cn(a, s, i, r, e[0], 20, -373897302), r = cn(r, a, s, i, e[5], 5, -701558691), i = cn(i, r, a, s, e[10], 9, 38016083), s = cn(s, i, r, a, e[15], 14, -660478335), a = cn(a, s, i, r, e[4], 20, -405537848), r = cn(r, a, s, i, e[9], 5, 568446438), i = cn(i, r, a, s, e[14], 9, -1019803690), s = cn(s, i, r, a, e[3], 14, -187363961), a = cn(a, s, i, r, e[8], 20, 1163531501), r = cn(r, a, s, i, e[13], 5, -1444681467), i = cn(i, r, a, s, e[2], 9, -51403784), s = cn(s, i, r, a, e[7], 14, 1735328473), r = ln(r, a = cn(a, s, i, r, e[12], 20, -1926607734), s, i, e[5], 4, -378558), i = ln(i, r, a, s, e[8], 11, -2022574463), s = ln(s, i, r, a, e[11], 16, 1839030562), a = ln(a, s, i, r, e[14], 23, -35309556), r = ln(r, a, s, i, e[1], 4, -1530992060), i = ln(i, r, a, s, e[4], 11, 1272893353), s = ln(s, i, r, a, e[7], 16, -155497632), a = ln(a, s, i, r, e[10], 23, -1094730640), r = ln(r, a, s, i, e[13], 4, 681279174), i = ln(i, r, a, s, e[0], 11, -358537222), s = ln(s, i, r, a, e[3], 16, -722521979), a = ln(a, s, i, r, e[6], 23, 76029189), r = ln(r, a, s, i, e[9], 4, -640364487), i = ln(i, r, a, s, e[12], 11, -421815835), s = ln(s, i, r, a, e[15], 16, 530742520), r = un(r, a = ln(a, s, i, r, e[2], 23, -995338651), s, i, e[0], 6, -198630844), i = un(i, r, a, s, e[7], 10, 1126891415), s = un(s, i, r, a, e[14], 15, -1416354905), a = un(a, s, i, r, e[5], 21, -57434055), r = un(r, a, s, i, e[12], 6, 1700485571), i = un(i, r, a, s, e[3], 10, -1894986606), s = un(s, i, r, a, e[10], 15, -1051523), a = un(a, s, i, r, e[1], 21, -2054922799), r = un(r, a, s, i, e[8], 6, 1873313359), i = un(i, r, a, s, e[15], 10, -30611744), s = un(s, i, r, a, e[6], 15, -1560198380), a = un(a, s, i, r, e[13], 21, 1309151649), r = un(r, a, s, i, e[4], 6, -145523070), i = un(i, r, a, s, e[11], 10, -1120210379), s = un(s, i, r, a, e[2], 15, 718787259), a = un(a, s, i, r, e[9], 21, -343485551), n[0] = Vr(r, n[0]), n[1] = Vr(a, n[1]), n[2] = Vr(s, n[2]), n[3] = Vr(i, n[3]);
}
function Ho(n, e, r, a, s, i) {
  return e = Vr(Vr(e, n), Vr(a, i)), Vr(e << s | e >>> 32 - s, r);
}
function sn(n, e, r, a, s, i, l) {
  return Ho(e & r | ~e & a, n, e, s, i, l);
}
function cn(n, e, r, a, s, i, l) {
  return Ho(e & a | r & ~a, n, e, s, i, l);
}
function ln(n, e, r, a, s, i, l) {
  return Ho(e ^ r ^ a, n, e, s, i, l);
}
function un(n, e, r, a, s, i, l) {
  return Ho(r ^ (e | ~a), n, e, s, i, l);
}
function r1(n) {
  var e, r = n.length, a = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= n.length; e += 64) Bs(a, hh(n.substring(e - 64, e)));
  n = n.substring(e - 64);
  var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < n.length; e++) s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
  if (s[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (Bs(a, s), e = 0; e < 16; e++) s[e] = 0;
  return s[14] = 8 * r, Bs(a, s), a;
}
function hh(n) {
  var e, r = [];
  for (e = 0; e < 64; e += 4) r[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
  return r;
}
Ca = nt.atob.bind(nt), Xs = nt.btoa.bind(nt);
var Sl = "0123456789abcdef".split("");
function fh(n) {
  for (var e = "", r = 0; r < 4; r++) e += Sl[n >> 8 * r + 4 & 15] + Sl[n >> 8 * r & 15];
  return e;
}
function dh(n) {
  return String.fromCharCode((255 & n) >> 0, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function Js(n) {
  return r1(n).map(dh).join("");
}
var ph = function(n) {
  for (var e = 0; e < n.length; e++) n[e] = fh(n[e]);
  return n.join("");
}(r1("hello")) != "5d41402abc4b2a76b9719d911017c592";
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
  var r, a, s, i;
  if (n !== r) {
    for (var l = (s = n, i = 1 + (256 / n.length >> 0), new Array(i + 1).join(s)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var y = h[f];
      g = (g + y + l.charCodeAt(f)) % 256, h[f] = h[g], h[g] = y;
    }
    r = n, a = h;
  } else h = a;
  var m = e.length, x = 0, p = 0, M = "";
  for (f = 0; f < m; f++) p = (p + (y = h[x = (x + 1) % 256])) % 256, h[x] = h[p], h[p] = y, l = h[(h[x] + h[p]) % 256], M += String.fromCharCode(e.charCodeAt(f) ^ l);
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
var _l = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ui(n, e, r, a) {
  this.v = 1, this.r = 2;
  var s = 192;
  n.forEach(function(h) {
    if (_l.perm !== void 0) throw new Error("Invalid permission: " + h);
    s += _l[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var i = (e + this.padding).substr(0, 32), l = (r + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(i, l), this.P = -(1 + (255 ^ s)), this.encryptionKey = Js(i + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = Zs(this.encryptionKey, this.padding);
}
function Hi(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var e = "", r = n.length, a = 0; a < r; a++) {
    var s = n.charCodeAt(a);
    s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? e += "#" + ("0" + s.toString(16)).slice(-2) : e += n[a];
  }
  return e;
}
function kl(n) {
  if (At(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(r, a, s) {
    if (s = s || !1, typeof r != "string" || typeof a != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(r) || (e[r] = {});
    var i = Math.random().toString(35);
    return e[r][i] = [a, !!s], i;
  }, this.unsubscribe = function(r) {
    for (var a in e) if (e[a][r]) return delete e[a][r], Object.keys(e[a]).length === 0 && delete e[a], !0;
    return !1;
  }, this.publish = function(r) {
    if (e.hasOwnProperty(r)) {
      var a = Array.prototype.slice.call(arguments, 1), s = [];
      for (var i in e[r]) {
        var l = e[r][i];
        try {
          l[0].apply(n, a);
        } catch (h) {
          nt.console && kt.error("jsPDF PubSub Error", h.message, h);
        }
        l[1] && s.push(i);
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
function i1(n, e) {
  this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function si(n, e, r, a, s) {
  if (!(this instanceof si)) return new si(n, e, r, a, s);
  this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = r, i1.call(this, a, s);
}
function Wi(n, e, r, a, s) {
  if (!(this instanceof Wi)) return new Wi(n, e, r, a, s);
  this.boundingBox = n, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, i1.call(this, a, s);
}
function tt(n) {
  var e, r = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], s = arguments[2], i = arguments[3], l = [], h = 1, f = 16, g = "S", y = null;
  At(n = n || {}) === "object" && (r = n.orientation, a = n.unit || a, s = n.format || s, i = n.compress || n.compressPdf || i, (y = n.encryption || null) !== null && (y.userPassword = y.userPassword || "", y.ownerPassword = y.ownerPassword || "", y.userPermissions = y.userPermissions || []), h = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (f = n.floatPrecision), g = n.defaultPathOperation || "S"), l = n.filters || (i === !0 ? ["FlateEncode"] : l), a = a || "mm", r = ("" + (r || "P")).toLowerCase();
  var m = n.putOnlyUsedFonts || !1, x = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = kl;
  var M = "1.3", I = p.__private__.getPdfVersion = function() {
    return M;
  };
  p.__private__.setPdfVersion = function(c) {
    M = c;
  };
  var O = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return O;
  };
  var k = p.__private__.getPageFormat = function(c) {
    return O[c];
  };
  s = s || "a4";
  var F = { COMPAT: "compat", ADVANCED: "advanced" }, W = F.COMPAT;
  function ae() {
    this.saveGraphicsState(), B(new et(te, 0, 0, -te, 0, jr() * te).toString() + " cm"), this.setFontSize(this.getFontSize() / te), g = "n", W = F.ADVANCED;
  }
  function me() {
    this.restoreGraphicsState(), g = "S", W = F.COMPAT;
  }
  var Se = p.__private__.combineFontStyleAndFontWeight = function(c, b) {
    if (c == "bold" && b == "normal" || c == "bold" && b == 400 || c == "normal" && b == "italic" || c == "bold" && b == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return b && (c = b == 400 || b === "normal" ? c === "italic" ? "italic" : "normal" : b != 700 && b !== "bold" || c !== "normal" ? (b == 700 ? "bold" : b) + "" + c : "bold"), c;
  };
  p.advancedAPI = function(c) {
    var b = W === F.COMPAT;
    return b && ae.call(this), typeof c != "function" || (c(this), b && me.call(this)), this;
  }, p.compatAPI = function(c) {
    var b = W === F.ADVANCED;
    return b && me.call(this), typeof c != "function" || (c(this), b && ae.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return W === F.ADVANCED;
  };
  var re, z = function(c) {
    if (W !== F.ADVANCED) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, ie = p.roundToPrecision = p.__private__.roundToPrecision = function(c, b) {
    var E = e || b;
    if (isNaN(c) || isNaN(E)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return c.toFixed(E).replace(/0+$/, "");
  };
  re = p.hpf = p.__private__.hpf = typeof f == "number" ? function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(c, f);
  } : f === "smart" ? function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(c, c > -1 && c < 1 ? 16 : 5);
  } : function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return ie(c, 16);
  };
  var ye = p.f2 = p.__private__.f2 = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
    return ie(c, 2);
  }, N = p.__private__.f3 = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
    return ie(c, 3);
  }, _ = p.scale = p.__private__.scale = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
    return W === F.COMPAT ? c * te : W === F.ADVANCED ? c : void 0;
  }, U = function(c) {
    return W === F.COMPAT ? jr() - c : W === F.ADVANCED ? c : void 0;
  }, R = function(c) {
    return _(U(c));
  };
  p.__private__.setPrecision = p.setPrecision = function(c) {
    typeof parseInt(c, 10) == "number" && (e = parseInt(c, 10));
  };
  var de, he = "00000000000000000000000000000000", Q = p.__private__.getFileId = function() {
    return he;
  }, Z = p.__private__.setFileId = function(c) {
    return he = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : he.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), y !== null && (an = new Ui(y.userPermissions, y.userPassword, y.ownerPassword, he)), he;
  };
  p.setFileId = function(c) {
    return Z(c), this;
  }, p.getFileId = function() {
    return Q();
  };
  var fe = p.__private__.convertDateToPDFDate = function(c) {
    var b = c.getTimezoneOffset(), E = b < 0 ? "+" : "-", H = Math.floor(Math.abs(b / 60)), ee = Math.abs(b % 60), xe = [E, T(H), "'", T(ee), "'"].join("");
    return ["D:", c.getFullYear(), T(c.getMonth() + 1), T(c.getDate()), T(c.getHours()), T(c.getMinutes()), T(c.getSeconds()), xe].join("");
  }, D = p.__private__.convertPDFDateToDate = function(c) {
    var b = parseInt(c.substr(2, 4), 10), E = parseInt(c.substr(6, 2), 10) - 1, H = parseInt(c.substr(8, 2), 10), ee = parseInt(c.substr(10, 2), 10), xe = parseInt(c.substr(12, 2), 10), Ie = parseInt(c.substr(14, 2), 10);
    return new Date(b, E, H, ee, xe, Ie, 0);
  }, Le = p.__private__.setCreationDate = function(c) {
    var b;
    if (c === void 0 && (c = /* @__PURE__ */ new Date()), c instanceof Date) b = fe(c);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      b = c;
    }
    return de = b;
  }, w = p.__private__.getCreationDate = function(c) {
    var b = de;
    return c === "jsDate" && (b = D(de)), b;
  };
  p.setCreationDate = function(c) {
    return Le(c), this;
  }, p.getCreationDate = function(c) {
    return w(c);
  };
  var C, T = p.__private__.padd2 = function(c) {
    return ("0" + parseInt(c)).slice(-2);
  }, q = p.__private__.padd2Hex = function(c) {
    return ("00" + (c = c.toString())).substr(c.length);
  }, Y = 0, oe = [], ne = [], ue = 0, Me = [], Ce = [], Ee = !1, Fe = ne, Je = function() {
    Y = 0, ue = 0, ne = [], oe = [], Me = [], mr = Ht(), qn = Ht();
  };
  p.__private__.setCustomOutputDestination = function(c) {
    Ee = !0, Fe = c;
  };
  var we = function(c) {
    Ee || (Fe = c);
  };
  p.__private__.resetCustomOutputDestination = function() {
    Ee = !1, Fe = ne;
  };
  var B = p.__private__.out = function(c) {
    return c = c.toString(), ue += c.length + 1, Fe.push(c), Fe;
  }, rt = p.__private__.write = function(c) {
    return B(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
  }, He = p.__private__.getArrayBuffer = function(c) {
    for (var b = c.length, E = new ArrayBuffer(b), H = new Uint8Array(E); b--; ) H[b] = c.charCodeAt(b);
    return E;
  }, ve = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return ve;
  };
  var Ne = n.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(c) {
    return Ne = W === F.ADVANCED ? c / te : c, this;
  };
  var se, pe = p.__private__.getFontSize = p.getFontSize = function() {
    return W === F.COMPAT ? Ne : Ne * te;
  }, ge = n.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(c) {
    return ge = c, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return ge;
  };
  var K, je = p.__private__.setZoomMode = function(c) {
    var b = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) se = c;
    else if (isNaN(c)) {
      if (b.indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
      se = c;
    } else se = parseInt(c, 10);
  };
  p.__private__.getZoomMode = function() {
    return se;
  };
  var ze, Ke = p.__private__.setPageMode = function(c) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(c) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + c + '" is not recognized.');
    K = c;
  };
  p.__private__.getPageMode = function() {
    return K;
  };
  var We = p.__private__.setLayoutMode = function(c) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(c) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + c + '" is not recognized.');
    ze = c;
  };
  p.__private__.getLayoutMode = function() {
    return ze;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, b, E) {
    return je(c), We(b), Ke(E), this;
  };
  var Re = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(c) {
    if (Object.keys(Re).indexOf(c) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return Re[c];
  }, p.__private__.getDocumentProperties = function() {
    return Re;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(c) {
    for (var b in Re) Re.hasOwnProperty(b) && c[b] && (Re[b] = c[b]);
    return this;
  }, p.__private__.setDocumentProperty = function(c, b) {
    if (Object.keys(Re).indexOf(c) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return Re[c] = b;
  };
  var Ye, te, Ge, De, Ue, Qe = {}, mt = {}, Xt = [], dt = {}, pr = {}, jt = {}, mn = {}, gr = null, Ft = 0, at = [], xt = new kl(p), $r = n.hotfixes || [], tn = {}, er = {}, tr = [], et = function c(b, E, H, ee, xe, Ie) {
    if (!(this instanceof c)) return new c(b, E, H, ee, xe, Ie);
    isNaN(b) && (b = 1), isNaN(E) && (E = 0), isNaN(H) && (H = 0), isNaN(ee) && (ee = 1), isNaN(xe) && (xe = 0), isNaN(Ie) && (Ie = 0), this._matrix = [b, E, H, ee, xe, Ie];
  };
  Object.defineProperty(et.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(c) {
    this._matrix[0] = c;
  } }), Object.defineProperty(et.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(c) {
    this._matrix[1] = c;
  } }), Object.defineProperty(et.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(c) {
    this._matrix[2] = c;
  } }), Object.defineProperty(et.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(c) {
    this._matrix[3] = c;
  } }), Object.defineProperty(et.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(c) {
    this._matrix[4] = c;
  } }), Object.defineProperty(et.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(c) {
    this._matrix[5] = c;
  } }), Object.defineProperty(et.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(c) {
    this._matrix[0] = c;
  } }), Object.defineProperty(et.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(c) {
    this._matrix[1] = c;
  } }), Object.defineProperty(et.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(c) {
    this._matrix[2] = c;
  } }), Object.defineProperty(et.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(c) {
    this._matrix[3] = c;
  } }), Object.defineProperty(et.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(c) {
    this._matrix[4] = c;
  } }), Object.defineProperty(et.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(c) {
    this._matrix[5] = c;
  } }), Object.defineProperty(et.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(et.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(et.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(et.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), et.prototype.join = function(c) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(re).join(c);
  }, et.prototype.multiply = function(c) {
    var b = c.sx * this.sx + c.shy * this.shx, E = c.sx * this.shy + c.shy * this.sy, H = c.shx * this.sx + c.sy * this.shx, ee = c.shx * this.shy + c.sy * this.sy, xe = c.tx * this.sx + c.ty * this.shx + this.tx, Ie = c.tx * this.shy + c.ty * this.sy + this.ty;
    return new et(b, E, H, ee, xe, Ie);
  }, et.prototype.decompose = function() {
    var c = this.sx, b = this.shy, E = this.shx, H = this.sy, ee = this.tx, xe = this.ty, Ie = Math.sqrt(c * c + b * b), Be = (c /= Ie) * E + (b /= Ie) * H;
    E -= c * Be, H -= b * Be;
    var Xe = Math.sqrt(E * E + H * H);
    return Be /= Xe, c * (H /= Xe) < b * (E /= Xe) && (c = -c, b = -b, Be = -Be, Ie = -Ie), { scale: new et(Ie, 0, 0, Xe, 0, 0), translate: new et(1, 0, 0, 1, ee, xe), rotate: new et(c, b, -b, c, 0, 0), skew: new et(1, 0, Be, 1, 0, 0) };
  }, et.prototype.toString = function(c) {
    return this.join(" ");
  }, et.prototype.inversed = function() {
    var c = this.sx, b = this.shy, E = this.shx, H = this.sy, ee = this.tx, xe = this.ty, Ie = 1 / (c * H - b * E), Be = H * Ie, Xe = -b * Ie, ct = -E * Ie, ot = c * Ie;
    return new et(Be, Xe, ct, ot, -Be * ee - ct * xe, -Xe * ee - ot * xe);
  }, et.prototype.applyToPoint = function(c) {
    var b = c.x * this.sx + c.y * this.shx + this.tx, E = c.x * this.shy + c.y * this.sy + this.ty;
    return new Ai(b, E);
  }, et.prototype.applyToRectangle = function(c) {
    var b = this.applyToPoint(c), E = this.applyToPoint(new Ai(c.x + c.w, c.y + c.h));
    return new aa(b.x, b.y, E.x - b.x, E.y - b.y);
  }, et.prototype.clone = function() {
    var c = this.sx, b = this.shy, E = this.shx, H = this.sy, ee = this.tx, xe = this.ty;
    return new et(c, b, E, H, ee, xe);
  }, p.Matrix = et;
  var Dn = p.matrixMult = function(c, b) {
    return b.multiply(c);
  }, nr = new et(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = nr;
  var vn = function(c, b) {
    if (!pr[c]) {
      var E = (b instanceof si ? "Sh" : "P") + (Object.keys(dt).length + 1).toString(10);
      b.id = E, pr[c] = E, dt[E] = b, xt.publish("addPattern", b);
    }
  };
  p.ShadingPattern = si, p.TilingPattern = Wi, p.addShadingPattern = function(c, b) {
    return z("addShadingPattern()"), vn(c, b), this;
  }, p.beginTilingPattern = function(c) {
    z("beginTilingPattern()"), Za(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
  }, p.endTilingPattern = function(c, b) {
    z("endTilingPattern()"), b.stream = Ce[C].join(`
`), vn(c, b), xt.publish("endTilingPattern", b), tr.pop().restore();
  };
  var Yt = p.__private__.newObject = function() {
    var c = Ht();
    return An(c, !0), c;
  }, Ht = p.__private__.newObjectDeferred = function() {
    return Y++, oe[Y] = function() {
      return ue;
    }, Y;
  }, An = function(c, b) {
    return b = typeof b == "boolean" && b, oe[c] = ue, b && B(c + " 0 obj"), c;
  }, hi = p.__private__.newAdditionalObject = function() {
    var c = { objId: Ht(), content: "" };
    return Me.push(c), c;
  }, mr = Ht(), qn = Ht(), zn = p.__private__.decodeColorString = function(c) {
    var b = c.split(" ");
    if (b.length !== 2 || b[1] !== "g" && b[1] !== "G")
      b.length === 5 && (b[4] === "k" || b[4] === "K") && (b = [(1 - b[0]) * (1 - b[3]), (1 - b[1]) * (1 - b[3]), (1 - b[2]) * (1 - b[3]), "r"]);
    else {
      var E = parseFloat(b[0]);
      b = [E, E, E, "r"];
    }
    for (var H = "#", ee = 0; ee < 3; ee++) H += ("0" + Math.floor(255 * parseFloat(b[ee])).toString(16)).slice(-2);
    return H;
  }, Un = p.__private__.encodeColorString = function(c) {
    var b;
    typeof c == "string" && (c = { ch1: c });
    var E = c.ch1, H = c.ch2, ee = c.ch3, xe = c.ch4, Ie = c.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof E == "string" && E.charAt(0) !== "#") {
      var Be = new n1(E);
      if (Be.ok) E = Be.toHex();
      else if (!/^\d*\.?\d*$/.test(E)) throw new Error('Invalid color "' + E + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof E == "string" && /^#[0-9A-Fa-f]{3}$/.test(E) && (E = "#" + E[1] + E[1] + E[2] + E[2] + E[3] + E[3]), typeof E == "string" && /^#[0-9A-Fa-f]{6}$/.test(E)) {
      var Xe = parseInt(E.substr(1), 16);
      E = Xe >> 16 & 255, H = Xe >> 8 & 255, ee = 255 & Xe;
    }
    if (H === void 0 || xe === void 0 && E === H && H === ee) if (typeof E == "string") b = E + " " + Ie[0];
    else switch (c.precision) {
      case 2:
        b = ye(E / 255) + " " + Ie[0];
        break;
      case 3:
      default:
        b = N(E / 255) + " " + Ie[0];
    }
    else if (xe === void 0 || At(xe) === "object") {
      if (xe && !isNaN(xe.a) && xe.a === 0) return b = ["1.", "1.", "1.", Ie[1]].join(" ");
      if (typeof E == "string") b = [E, H, ee, Ie[1]].join(" ");
      else switch (c.precision) {
        case 2:
          b = [ye(E / 255), ye(H / 255), ye(ee / 255), Ie[1]].join(" ");
          break;
        default:
        case 3:
          b = [N(E / 255), N(H / 255), N(ee / 255), Ie[1]].join(" ");
      }
    } else if (typeof E == "string") b = [E, H, ee, xe, Ie[2]].join(" ");
    else switch (c.precision) {
      case 2:
        b = [ye(E), ye(H), ye(ee), ye(xe), Ie[2]].join(" ");
        break;
      case 3:
      default:
        b = [N(E), N(H), N(ee), N(xe), Ie[2]].join(" ");
    }
    return b;
  }, rr = p.__private__.getFilters = function() {
    return l;
  }, Cn = p.__private__.putStream = function(c) {
    var b = (c = c || {}).data || "", E = c.filters || rr(), H = c.alreadyAppliedFilters || [], ee = c.addLength1 || !1, xe = b.length, Ie = c.objectId, Be = function(on) {
      return on;
    };
    if (y !== null && Ie === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    y !== null && (Be = an.encryptor(Ie, 0));
    var Xe = {};
    E === !0 && (E = ["FlateEncode"]);
    var ct = c.additionalKeyValues || [], ot = (Xe = tt.API.processDataByFilters !== void 0 ? tt.API.processDataByFilters(b, E) : { data: b, reverseChain: [] }).reverseChain + (Array.isArray(H) ? H.join(" ") : H.toString());
    if (Xe.data.length !== 0 && (ct.push({ key: "Length", value: Xe.data.length }), ee === !0 && ct.push({ key: "Length1", value: xe })), ot.length != 0) if (ot.split("/").length - 1 == 1) ct.push({ key: "Filter", value: ot });
    else {
      ct.push({ key: "Filter", value: "[" + ot + "]" });
      for (var vt = 0; vt < ct.length; vt += 1) if (ct[vt].key === "DecodeParms") {
        for (var Mt = [], Et = 0; Et < Xe.reverseChain.split("/").length - 1; Et += 1) Mt.push("null");
        Mt.push(ct[vt].value), ct[vt].value = "[" + Mt.join(" ") + "]";
      }
    }
    B("<<");
    for (var Wt = 0; Wt < ct.length; Wt++) B("/" + ct[Wt].key + " " + ct[Wt].value);
    B(">>"), Xe.data.length !== 0 && (B("stream"), B(Be(Xe.data)), B("endstream"));
  }, ir = p.__private__.putPage = function(c) {
    var b = c.number, E = c.data, H = c.objId, ee = c.contentsObjId;
    An(H, !0), B("<</Type /Page"), B("/Parent " + c.rootDictionaryObjId + " 0 R"), B("/Resources " + c.resourceDictionaryObjId + " 0 R"), B("/MediaBox [" + parseFloat(re(c.mediaBox.bottomLeftX)) + " " + parseFloat(re(c.mediaBox.bottomLeftY)) + " " + re(c.mediaBox.topRightX) + " " + re(c.mediaBox.topRightY) + "]"), c.cropBox !== null && B("/CropBox [" + re(c.cropBox.bottomLeftX) + " " + re(c.cropBox.bottomLeftY) + " " + re(c.cropBox.topRightX) + " " + re(c.cropBox.topRightY) + "]"), c.bleedBox !== null && B("/BleedBox [" + re(c.bleedBox.bottomLeftX) + " " + re(c.bleedBox.bottomLeftY) + " " + re(c.bleedBox.topRightX) + " " + re(c.bleedBox.topRightY) + "]"), c.trimBox !== null && B("/TrimBox [" + re(c.trimBox.bottomLeftX) + " " + re(c.trimBox.bottomLeftY) + " " + re(c.trimBox.topRightX) + " " + re(c.trimBox.topRightY) + "]"), c.artBox !== null && B("/ArtBox [" + re(c.artBox.bottomLeftX) + " " + re(c.artBox.bottomLeftY) + " " + re(c.artBox.topRightX) + " " + re(c.artBox.topRightY) + "]"), typeof c.userUnit == "number" && c.userUnit !== 1 && B("/UserUnit " + c.userUnit), xt.publish("putPage", { objId: H, pageContext: at[b], pageNumber: b, page: E }), B("/Contents " + ee + " 0 R"), B(">>"), B("endobj");
    var xe = E.join(`
`);
    return W === F.ADVANCED && (xe += `
Q`), An(ee, !0), Cn({ data: xe, filters: rr(), objectId: ee }), B("endobj"), H;
  }, Xr = p.__private__.putPages = function() {
    var c, b, E = [];
    for (c = 1; c <= Ft; c++) at[c].objId = Ht(), at[c].contentsObjId = Ht();
    for (c = 1; c <= Ft; c++) E.push(ir({ number: c, data: Ce[c], objId: at[c].objId, contentsObjId: at[c].contentsObjId, mediaBox: at[c].mediaBox, cropBox: at[c].cropBox, bleedBox: at[c].bleedBox, trimBox: at[c].trimBox, artBox: at[c].artBox, userUnit: at[c].userUnit, rootDictionaryObjId: mr, resourceDictionaryObjId: qn }));
    An(mr, !0), B("<</Type /Pages");
    var H = "/Kids [";
    for (b = 0; b < Ft; b++) H += E[b] + " 0 R ";
    B(H + "]"), B("/Count " + Ft), B(">>"), B("endobj"), xt.publish("postPutPages");
  }, fi = function(c) {
    xt.publish("putFont", { font: c, out: B, newObject: Yt, putStream: Cn }), c.isAlreadyPutted !== !0 && (c.objectNumber = Yt(), B("<<"), B("/Type /Font"), B("/BaseFont /" + Hi(c.postScriptName)), B("/Subtype /Type1"), typeof c.encoding == "string" && B("/Encoding /" + c.encoding), B("/FirstChar 32"), B("/LastChar 255"), B(">>"), B("endobj"));
  }, di = function() {
    for (var c in Qe) Qe.hasOwnProperty(c) && (m === !1 || m === !0 && x.hasOwnProperty(c)) && fi(Qe[c]);
  }, pi = function(c) {
    c.objectNumber = Yt();
    var b = [];
    b.push({ key: "Type", value: "/XObject" }), b.push({ key: "Subtype", value: "/Form" }), b.push({ key: "BBox", value: "[" + [re(c.x), re(c.y), re(c.x + c.width), re(c.y + c.height)].join(" ") + "]" }), b.push({ key: "Matrix", value: "[" + c.matrix.toString() + "]" });
    var E = c.pages[1].join(`
`);
    Cn({ data: E, additionalKeyValues: b, objectId: c.objectNumber }), B("endobj");
  }, gi = function() {
    for (var c in tn) tn.hasOwnProperty(c) && pi(tn[c]);
  }, Fa = function(c, b) {
    var E, H = [], ee = 1 / (b - 1);
    for (E = 0; E < 1; E += ee) H.push(E);
    if (H.push(1), c[0].offset != 0) {
      var xe = { offset: 0, color: c[0].color };
      c.unshift(xe);
    }
    if (c[c.length - 1].offset != 1) {
      var Ie = { offset: 1, color: c[c.length - 1].color };
      c.push(Ie);
    }
    for (var Be = "", Xe = 0, ct = 0; ct < H.length; ct++) {
      for (E = H[ct]; E > c[Xe + 1].offset; ) Xe++;
      var ot = c[Xe].offset, vt = (E - ot) / (c[Xe + 1].offset - ot), Mt = c[Xe].color, Et = c[Xe + 1].color;
      Be += q(Math.round((1 - vt) * Mt[0] + vt * Et[0]).toString(16)) + q(Math.round((1 - vt) * Mt[1] + vt * Et[1]).toString(16)) + q(Math.round((1 - vt) * Mt[2] + vt * Et[2]).toString(16));
    }
    return Be.trim();
  }, Wo = function(c, b) {
    b || (b = 21);
    var E = Yt(), H = Fa(c.colors, b), ee = [];
    ee.push({ key: "FunctionType", value: "0" }), ee.push({ key: "Domain", value: "[0.0 1.0]" }), ee.push({ key: "Size", value: "[" + b + "]" }), ee.push({ key: "BitsPerSample", value: "8" }), ee.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), ee.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), Cn({ data: H, additionalKeyValues: ee, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: E }), B("endobj"), c.objectNumber = Yt(), B("<< /ShadingType " + c.type), B("/ColorSpace /DeviceRGB");
    var xe = "/Coords [" + re(parseFloat(c.coords[0])) + " " + re(parseFloat(c.coords[1])) + " ";
    c.type === 2 ? xe += re(parseFloat(c.coords[2])) + " " + re(parseFloat(c.coords[3])) : xe += re(parseFloat(c.coords[2])) + " " + re(parseFloat(c.coords[3])) + " " + re(parseFloat(c.coords[4])) + " " + re(parseFloat(c.coords[5])), B(xe += "]"), c.matrix && B("/Matrix [" + c.matrix.toString() + "]"), B("/Function " + E + " 0 R"), B("/Extend [true true]"), B(">>"), B("endobj");
  }, Vo = function(c, b) {
    var E = Ht(), H = Yt();
    b.push({ resourcesOid: E, objectOid: H }), c.objectNumber = H;
    var ee = [];
    ee.push({ key: "Type", value: "/Pattern" }), ee.push({ key: "PatternType", value: "1" }), ee.push({ key: "PaintType", value: "1" }), ee.push({ key: "TilingType", value: "1" }), ee.push({ key: "BBox", value: "[" + c.boundingBox.map(re).join(" ") + "]" }), ee.push({ key: "XStep", value: re(c.xStep) }), ee.push({ key: "YStep", value: re(c.yStep) }), ee.push({ key: "Resources", value: E + " 0 R" }), c.matrix && ee.push({ key: "Matrix", value: "[" + c.matrix.toString() + "]" }), Cn({ data: c.stream, additionalKeyValues: ee, objectId: c.objectNumber }), B("endobj");
  }, mi = function(c) {
    var b;
    for (b in dt) dt.hasOwnProperty(b) && (dt[b] instanceof si ? Wo(dt[b]) : dt[b] instanceof Wi && Vo(dt[b], c));
  }, Ea = function(c) {
    for (var b in c.objectNumber = Yt(), B("<<"), c) switch (b) {
      case "opacity":
        B("/ca " + ye(c[b]));
        break;
      case "stroke-opacity":
        B("/CA " + ye(c[b]));
    }
    B(">>"), B("endobj");
  }, Go = function() {
    var c;
    for (c in jt) jt.hasOwnProperty(c) && Ea(jt[c]);
  }, Xi = function() {
    for (var c in B("/XObject <<"), tn) tn.hasOwnProperty(c) && tn[c].objectNumber >= 0 && B("/" + c + " " + tn[c].objectNumber + " 0 R");
    xt.publish("putXobjectDict"), B(">>");
  }, Yo = function() {
    an.oid = Yt(), B("<<"), B("/Filter /Standard"), B("/V " + an.v), B("/R " + an.r), B("/U <" + an.toHexString(an.U) + ">"), B("/O <" + an.toHexString(an.O) + ">"), B("/P " + an.P), B(">>"), B("endobj");
  }, Oa = function() {
    for (var c in B("/Font <<"), Qe) Qe.hasOwnProperty(c) && (m === !1 || m === !0 && x.hasOwnProperty(c)) && B("/" + c + " " + Qe[c].objectNumber + " 0 R");
    B(">>");
  }, $o = function() {
    if (Object.keys(dt).length > 0) {
      for (var c in B("/Shading <<"), dt) dt.hasOwnProperty(c) && dt[c] instanceof si && dt[c].objectNumber >= 0 && B("/" + c + " " + dt[c].objectNumber + " 0 R");
      xt.publish("putShadingPatternDict"), B(">>");
    }
  }, vi = function(c) {
    if (Object.keys(dt).length > 0) {
      for (var b in B("/Pattern <<"), dt) dt.hasOwnProperty(b) && dt[b] instanceof p.TilingPattern && dt[b].objectNumber >= 0 && dt[b].objectNumber < c && B("/" + b + " " + dt[b].objectNumber + " 0 R");
      xt.publish("putTilingPatternDict"), B(">>");
    }
  }, Xo = function() {
    if (Object.keys(jt).length > 0) {
      var c;
      for (c in B("/ExtGState <<"), jt) jt.hasOwnProperty(c) && jt[c].objectNumber >= 0 && B("/" + c + " " + jt[c].objectNumber + " 0 R");
      xt.publish("putGStateDict"), B(">>");
    }
  }, Tt = function(c) {
    An(c.resourcesOid, !0), B("<<"), B("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), Oa(), $o(), vi(c.objectOid), Xo(), Xi(), B(">>"), B("endobj");
  }, Ra = function() {
    var c = [];
    di(), Go(), gi(), mi(c), xt.publish("putResources"), c.forEach(Tt), Tt({ resourcesOid: qn, objectOid: Number.MAX_SAFE_INTEGER }), xt.publish("postPutResources");
  }, Ta = function() {
    xt.publish("putAdditionalObjects");
    for (var c = 0; c < Me.length; c++) {
      var b = Me[c];
      An(b.objId, !0), B(b.content), B("endobj");
    }
    xt.publish("postPutAdditionalObjects");
  }, Ba = function(c) {
    mt[c.fontName] = mt[c.fontName] || {}, mt[c.fontName][c.fontStyle] = c.id;
  }, Ji = function(c, b, E, H, ee) {
    var xe = { id: "F" + (Object.keys(Qe).length + 1).toString(10), postScriptName: c, fontName: b, fontStyle: E, encoding: H, isStandardFont: ee || !1, metadata: {} };
    return xt.publish("addFont", { font: xe, instance: this }), Qe[xe.id] = xe, Ba(xe), xe.id;
  }, Jo = function(c) {
    for (var b = 0, E = ve.length; b < E; b++) {
      var H = Ji.call(this, c[b][0], c[b][1], c[b][2], ve[b][3], !0);
      m === !1 && (x[H] = !0);
      var ee = c[b][0].split("-");
      Ba({ id: H, fontName: ee[0], fontStyle: ee[1] || "" });
    }
    xt.publish("addFonts", { fonts: Qe, dictionary: mt });
  }, Hn = function(c) {
    return c.foo = function() {
      try {
        return c.apply(this, arguments);
      } catch (H) {
        var b = H.stack || "";
        ~b.indexOf(" at ") && (b = b.split(" at ")[1]);
        var E = "Error in function " + b.split(`
`)[0].split("<")[0] + ": " + H.message;
        if (!nt.console) throw new Error(E);
        nt.console.error(E, H), nt.alert && alert(E);
      }
    }, c.foo.bar = c, c.foo;
  }, bi = function(c, b) {
    var E, H, ee, xe, Ie, Be, Xe, ct, ot;
    if (ee = (b = b || {}).sourceEncoding || "Unicode", Ie = b.outputEncoding, (b.autoencode || Ie) && Qe[Ye].metadata && Qe[Ye].metadata[ee] && Qe[Ye].metadata[ee].encoding && (xe = Qe[Ye].metadata[ee].encoding, !Ie && Qe[Ye].encoding && (Ie = Qe[Ye].encoding), !Ie && xe.codePages && (Ie = xe.codePages[0]), typeof Ie == "string" && (Ie = xe[Ie]), Ie)) {
      for (Xe = !1, Be = [], E = 0, H = c.length; E < H; E++) (ct = Ie[c.charCodeAt(E)]) ? Be.push(String.fromCharCode(ct)) : Be.push(c[E]), Be[E].charCodeAt(0) >> 8 && (Xe = !0);
      c = Be.join("");
    }
    for (E = c.length; Xe === void 0 && E !== 0; ) c.charCodeAt(E - 1) >> 8 && (Xe = !0), E--;
    if (!Xe) return c;
    for (Be = b.noBOM ? [] : [254, 255], E = 0, H = c.length; E < H; E++) {
      if ((ot = (ct = c.charCodeAt(E)) >> 8) >> 8) throw new Error("Character at position " + E + " of string '" + c + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      Be.push(ot), Be.push(ct - (ot << 8));
    }
    return String.fromCharCode.apply(void 0, Be);
  }, bn = p.__private__.pdfEscape = p.pdfEscape = function(c, b) {
    return bi(c, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Zi = p.__private__.beginPage = function(c) {
    Ce[++Ft] = [], at[Ft] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(c[0]), topRightY: Number(c[1]) } }, qa(Ft), we(Ce[C]);
  }, Da = function(c, b) {
    var E, H, ee;
    switch (r = b || r, typeof c == "string" && (E = k(c.toLowerCase()), Array.isArray(E) && (H = E[0], ee = E[1])), Array.isArray(c) && (H = c[0] * te, ee = c[1] * te), isNaN(H) && (H = s[0], ee = s[1]), (H > 14400 || ee > 14400) && (kt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), H = Math.min(14400, H), ee = Math.min(14400, ee)), s = [H, ee], r.substr(0, 1)) {
      case "l":
        ee > H && (s = [ee, H]);
        break;
      case "p":
        H > ee && (s = [ee, H]);
    }
    Zi(s), Ga(ta), B(Wn), ra !== 0 && B(ra + " J"), ia !== 0 && B(ia + " j"), xt.publish("addPage", { pageNumber: Ft });
  }, Zo = function(c) {
    c > 0 && c <= Ft && (Ce.splice(c, 1), at.splice(c, 1), Ft--, C > Ft && (C = Ft), this.setPage(C));
  }, qa = function(c) {
    c > 0 && c <= Ft && (C = c);
  }, Ko = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return Ce.length - 1;
  }, za = function(c, b, E) {
    var H, ee = void 0;
    return E = E || {}, c = c !== void 0 ? c : Qe[Ye].fontName, b = b !== void 0 ? b : Qe[Ye].fontStyle, H = c.toLowerCase(), mt[H] !== void 0 && mt[H][b] !== void 0 ? ee = mt[H][b] : mt[c] !== void 0 && mt[c][b] !== void 0 ? ee = mt[c][b] : E.disableWarning === !1 && kt.warn("Unable to look up font label for font '" + c + "', '" + b + "'. Refer to getFontList() for available fonts."), ee || E.noFallback || (ee = mt.times[b]) == null && (ee = mt.times.normal), ee;
  }, Qo = p.__private__.putInfo = function() {
    var c = Yt(), b = function(H) {
      return H;
    };
    for (var E in y !== null && (b = an.encryptor(c, 0)), B("<<"), B("/Producer (" + bn(b("jsPDF " + tt.version)) + ")"), Re) Re.hasOwnProperty(E) && Re[E] && B("/" + E.substr(0, 1).toUpperCase() + E.substr(1) + " (" + bn(b(Re[E])) + ")");
    B("/CreationDate (" + bn(b(de)) + ")"), B(">>"), B("endobj");
  }, Ki = p.__private__.putCatalog = function(c) {
    var b = (c = c || {}).rootDictionaryObjId || mr;
    switch (Yt(), B("<<"), B("/Type /Catalog"), B("/Pages " + b + " 0 R"), se || (se = "fullwidth"), se) {
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
        var E = "" + se;
        E.substr(E.length - 1) === "%" && (se = parseInt(se) / 100), typeof se == "number" && B("/OpenAction [3 0 R /XYZ null null " + ye(se) + "]");
    }
    switch (ze || (ze = "continuous"), ze) {
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
    K && B("/PageMode /" + K), xt.publish("putCatalog"), B(">>"), B("endobj");
  }, es = p.__private__.putTrailer = function() {
    B("trailer"), B("<<"), B("/Size " + (Y + 1)), B("/Root " + Y + " 0 R"), B("/Info " + (Y - 1) + " 0 R"), y !== null && B("/Encrypt " + an.oid + " 0 R"), B("/ID [ <" + he + "> <" + he + "> ]"), B(">>");
  }, ts = p.__private__.putHeader = function() {
    B("%PDF-" + M), B("%ºß¬à");
  }, ns = p.__private__.putXRef = function() {
    var c = "0000000000";
    B("xref"), B("0 " + (Y + 1)), B("0000000000 65535 f ");
    for (var b = 1; b <= Y; b++)
      typeof oe[b] == "function" ? B((c + oe[b]()).slice(-10) + " 00000 n ") : oe[b] !== void 0 ? B((c + oe[b]).slice(-10) + " 00000 n ") : B("0000000000 00000 n ");
  }, vr = p.__private__.buildDocument = function() {
    Je(), we(ne), xt.publish("buildDocument"), ts(), Xr(), Ta(), Ra(), y !== null && Yo(), Qo(), Ki();
    var c = ue;
    return ns(), es(), B("startxref"), B("" + c), B("%%EOF"), we(Ce[C]), ne.join(`
`);
  }, yi = p.__private__.getBlob = function(c) {
    return new Blob([He(c)], { type: "application/pdf" });
  }, wi = p.output = p.__private__.output = Hn(function(c, b) {
    switch (typeof (b = b || {}) == "string" ? b = { filename: b } : b.filename = b.filename || "generated.pdf", c) {
      case void 0:
        return vr();
      case "save":
        p.save(b.filename);
        break;
      case "arraybuffer":
        return He(vr());
      case "blob":
        return yi(vr());
      case "bloburi":
      case "bloburl":
        if (nt.URL !== void 0 && typeof nt.URL.createObjectURL == "function") return nt.URL && nt.URL.createObjectURL(yi(vr())) || void 0;
        kt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var E = "", H = vr();
        try {
          E = Xs(H);
        } catch {
          E = Xs(unescape(encodeURIComponent(H)));
        }
        return "data:application/pdf;filename=" + b.filename + ";base64," + E;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(nt) === "[object Window]") {
          var ee = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", xe = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          b.pdfObjectUrl && (ee = b.pdfObjectUrl, xe = "");
          var Ie = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + ee + '"' + xe + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(b) + ");<\/script></body></html>", Be = nt.open();
          return Be !== null && Be.document.write(Ie), Be;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(nt) === "[object Window]") {
          var Xe = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (b.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + b.filename + '" width="500px" height="400px" /></body></html>', ct = nt.open();
          if (ct !== null) {
            ct.document.write(Xe);
            var ot = this;
            ct.document.documentElement.querySelector("#pdfViewer").onload = function() {
              ct.document.title = b.filename, ct.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ot.output("bloburl"));
            };
          }
          return ct;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(nt) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var vt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", b) + '"></iframe></body></html>', Mt = nt.open();
        if (Mt !== null && (Mt.document.write(vt), Mt.document.title = b.filename), Mt || typeof safari > "u") return Mt;
        break;
      case "datauri":
      case "dataurl":
        return nt.document.location.href = this.output("datauristring", b);
      default:
        return null;
    }
  }), Ua = function(c) {
    return Array.isArray($r) === !0 && $r.indexOf(c) > -1;
  };
  switch (a) {
    case "pt":
      te = 1;
      break;
    case "mm":
      te = 72 / 25.4;
      break;
    case "cm":
      te = 72 / 2.54;
      break;
    case "in":
      te = 72;
      break;
    case "px":
      te = Ua("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      te = 12;
      break;
    case "ex":
      te = 6;
      break;
    default:
      if (typeof a != "number") throw new Error("Invalid unit: " + a);
      te = a;
  }
  var an = null;
  Le(), Z();
  var rs = function(c) {
    return y !== null ? an.encryptor(c, 0) : function(b) {
      return b;
    };
  }, Ha = p.__private__.getPageInfo = p.getPageInfo = function(c) {
    if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: at[c].objId, pageNumber: c, pageContext: at[c] };
  }, it = p.__private__.getPageInfoByObjId = function(c) {
    if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var b in at) if (at[b].objId === c) break;
    return Ha(b);
  }, is = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: at[C].objId, pageNumber: C, pageContext: at[C] };
  };
  p.addPage = function() {
    return Da.apply(this, arguments), this;
  }, p.setPage = function() {
    return qa.apply(this, arguments), we.call(this, Ce[C]), this;
  }, p.insertPage = function(c) {
    return this.addPage(), this.movePage(C, c), this;
  }, p.movePage = function(c, b) {
    var E, H;
    if (c > b) {
      E = Ce[c], H = at[c];
      for (var ee = c; ee > b; ee--) Ce[ee] = Ce[ee - 1], at[ee] = at[ee - 1];
      Ce[b] = E, at[b] = H, this.setPage(b);
    } else if (c < b) {
      E = Ce[c], H = at[c];
      for (var xe = c; xe < b; xe++) Ce[xe] = Ce[xe + 1], at[xe] = at[xe + 1];
      Ce[b] = E, at[b] = H, this.setPage(b);
    }
    return this;
  }, p.deletePage = function() {
    return Zo.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(c, b, E, H, ee) {
    var xe, Ie, Be, Xe, ct, ot, vt, Mt, Et, Wt = (H = H || {}).scope || this;
    if (typeof c == "number" && typeof b == "number" && (typeof E == "string" || Array.isArray(E))) {
      var on = E;
      E = b, b = c, c = on;
    }
    if (arguments[3] instanceof et ? (z("The transform parameter of text() with a Matrix value"), Et = ee) : (Be = arguments[4], Xe = arguments[5], At(vt = arguments[3]) === "object" && vt !== null || (typeof Be == "string" && (Xe = Be, Be = null), typeof vt == "string" && (Xe = vt, vt = null), typeof vt == "number" && (Be = vt, vt = null), H = { flags: vt, angle: Be, align: Xe })), isNaN(b) || isNaN(E) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (c.length === 0) return Wt;
    var Jt = "", Vn = !1, Sn = typeof H.lineHeightFactor == "number" ? H.lineHeightFactor : Zr, sr = Wt.internal.scaleFactor;
    function Ka(Pt) {
      return Pt = Pt.split("	").join(Array(H.TabLen || 9).join(" ")), bn(Pt, vt);
    }
    function la(Pt) {
      for (var It, Dt = Pt.concat(), $t = [], Lr = Dt.length; Lr--; ) typeof (It = Dt.shift()) == "string" ? $t.push(It) : Array.isArray(Pt) && (It.length === 1 || It[1] === void 0 && It[2] === void 0) ? $t.push(It[0]) : $t.push([It[0], It[1], It[2]]);
      return $t;
    }
    function ua(Pt, It) {
      var Dt;
      if (typeof Pt == "string") Dt = It(Pt)[0];
      else if (Array.isArray(Pt)) {
        for (var $t, Lr, ba = Pt.concat(), Oi = [], ro = ba.length; ro--; ) typeof ($t = ba.shift()) == "string" ? Oi.push(It($t)[0]) : Array.isArray($t) && typeof $t[0] == "string" && (Lr = It($t[0], $t[1], $t[2]), Oi.push([Lr[0], Lr[1], Lr[2]]));
        Dt = Oi;
      }
      return Dt;
    }
    var _i = !1, ha = !0;
    if (typeof c == "string") _i = !0;
    else if (Array.isArray(c)) {
      var fa = c.concat();
      Ie = [];
      for (var ki, nn = fa.length; nn--; ) (typeof (ki = fa.shift()) != "string" || Array.isArray(ki) && typeof ki[0] != "string") && (ha = !1);
      _i = ha;
    }
    if (_i === !1) throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
    typeof c == "string" && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [c]);
    var Pi = Ne / Wt.internal.scaleFactor, Ii = Pi * (Sn - 1);
    switch (H.baseline) {
      case "bottom":
        E -= Ii;
        break;
      case "top":
        E += Pi - Ii;
        break;
      case "hanging":
        E += Pi - 2 * Ii;
        break;
      case "middle":
        E += Pi / 2 - Ii;
    }
    if ((ot = H.maxWidth || 0) > 0 && (typeof c == "string" ? c = Wt.splitTextToSize(c, ot) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(Pt, It) {
      return Pt.concat(Wt.splitTextToSize(It, ot));
    }, []))), xe = { text: c, x: b, y: E, options: H, mutex: { pdfEscape: bn, activeFontKey: Ye, fonts: Qe, activeFontSize: Ne } }, xt.publish("preProcessText", xe), c = xe.text, Be = (H = xe.options).angle, !(Et instanceof et) && Be && typeof Be == "number") {
      Be *= Math.PI / 180, H.rotationDirection === 0 && (Be = -Be), W === F.ADVANCED && (Be = -Be);
      var Ci = Math.cos(Be), da = Math.sin(Be);
      Et = new et(Ci, da, -da, Ci, 0, 0);
    } else Be && Be instanceof et && (Et = Be);
    W !== F.ADVANCED || Et || (Et = nr), (ct = H.charSpace || Ni) !== void 0 && (Jt += re(_(ct)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Mt = H.horizontalScale) !== void 0 && (Jt += re(100 * Mt) + ` Tz
`), H.lang;
    var yn = -1, ps = H.renderingMode !== void 0 ? H.renderingMode : H.stroke, pa = Wt.internal.getCurrentPageInfo().pageContext;
    switch (ps) {
      case 0:
      case !1:
      case "fill":
        yn = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        yn = 1;
        break;
      case 2:
      case "fillThenStroke":
        yn = 2;
        break;
      case 3:
      case "invisible":
        yn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        yn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        yn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        yn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        yn = 7;
    }
    var Qa = pa.usedRenderingMode !== void 0 ? pa.usedRenderingMode : -1;
    yn !== -1 ? Jt += yn + ` Tr
` : Qa !== -1 && (Jt += `0 Tr
`), yn !== -1 && (pa.usedRenderingMode = yn), Xe = H.align || "left";
    var jn, ji = Ne * Sn, eo = Wt.internal.pageSize.getWidth(), to = Qe[Ye];
    ct = H.charSpace || Ni, ot = H.maxWidth || 0, vt = Object.assign({ autoencode: !0, noBOM: !0 }, H.flags);
    var Mr = [], ei = function(Pt) {
      return Wt.getStringUnitWidth(Pt, { font: to, charSpace: ct, fontSize: Ne, doKerning: !1 }) * Ne / sr;
    };
    if (Object.prototype.toString.call(c) === "[object Array]") {
      var wn;
      Ie = la(c), Xe !== "left" && (jn = Ie.map(ei));
      var dn, Fr = 0;
      if (Xe === "right") {
        b -= jn[0], c = [], nn = Ie.length;
        for (var yr = 0; yr < nn; yr++) yr === 0 ? (dn = or(b), wn = br(E)) : (dn = _(Fr - jn[yr]), wn = -ji), c.push([Ie[yr], dn, wn]), Fr = jn[yr];
      } else if (Xe === "center") {
        b -= jn[0] / 2, c = [], nn = Ie.length;
        for (var wr = 0; wr < nn; wr++) wr === 0 ? (dn = or(b), wn = br(E)) : (dn = _((Fr - jn[wr]) / 2), wn = -ji), c.push([Ie[wr], dn, wn]), Fr = jn[wr];
      } else if (Xe === "left") {
        c = [], nn = Ie.length;
        for (var Mi = 0; Mi < nn; Mi++) c.push(Ie[Mi]);
      } else if (Xe === "justify" && to.encoding === "Identity-H") {
        c = [], nn = Ie.length, ot = ot !== 0 ? ot : eo;
        for (var xr = 0, Bt = 0; Bt < nn; Bt++) if (wn = Bt === 0 ? br(E) : -ji, dn = Bt === 0 ? or(b) : xr, Bt < nn - 1) {
          var ga = _((ot - jn[Bt]) / (Ie[Bt].split(" ").length - 1)), pn = Ie[Bt].split(" ");
          c.push([pn[0] + " ", dn, wn]), xr = 0;
          for (var Mn = 1; Mn < pn.length; Mn++) {
            var Fi = (ei(pn[Mn - 1] + " " + pn[Mn]) - ei(pn[Mn])) * sr + ga;
            Mn == pn.length - 1 ? c.push([pn[Mn], Fi, 0]) : c.push([pn[Mn] + " ", Fi, 0]), xr -= Fi;
          }
        } else c.push([Ie[Bt], dn, wn]);
        c.push(["", xr, 0]);
      } else {
        if (Xe !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (c = [], nn = Ie.length, ot = ot !== 0 ? ot : eo, Bt = 0; Bt < nn; Bt++) wn = Bt === 0 ? br(E) : -ji, dn = Bt === 0 ? or(b) : 0, Bt < nn - 1 ? Mr.push(re(_((ot - jn[Bt]) / (Ie[Bt].split(" ").length - 1)))) : Mr.push(0), c.push([Ie[Bt], dn, wn]);
      }
    }
    var no = typeof H.R2L == "boolean" ? H.R2L : ge;
    no === !0 && (c = ua(c, function(Pt, It, Dt) {
      return [Pt.split("").reverse().join(""), It, Dt];
    })), xe = { text: c, x: b, y: E, options: H, mutex: { pdfEscape: bn, activeFontKey: Ye, fonts: Qe, activeFontSize: Ne } }, xt.publish("postProcessText", xe), c = xe.text, Vn = xe.mutex.isHex || !1;
    var ma = Qe[Ye].encoding;
    ma !== "WinAnsiEncoding" && ma !== "StandardEncoding" || (c = ua(c, function(Pt, It, Dt) {
      return [Ka(Pt), It, Dt];
    })), Ie = la(c), c = [];
    for (var ti, ni, Er, ri = 0, Ei = 1, ii = Array.isArray(Ie[0]) ? Ei : ri, Or = "", va = function(Pt, It, Dt) {
      var $t = "";
      return Dt instanceof et ? (Dt = typeof H.angle == "number" ? Dn(Dt, new et(1, 0, 0, 1, Pt, It)) : Dn(new et(1, 0, 0, 1, Pt, It), Dt), W === F.ADVANCED && (Dt = Dn(new et(1, 0, 0, -1, 0, 0), Dt)), $t = Dt.join(" ") + ` Tm
`) : $t = re(Pt) + " " + re(It) + ` Td
`, $t;
    }, Fn = 0; Fn < Ie.length; Fn++) {
      switch (Or = "", ii) {
        case Ei:
          Er = (Vn ? "<" : "(") + Ie[Fn][0] + (Vn ? ">" : ")"), ti = parseFloat(Ie[Fn][1]), ni = parseFloat(Ie[Fn][2]);
          break;
        case ri:
          Er = (Vn ? "<" : "(") + Ie[Fn] + (Vn ? ">" : ")"), ti = or(b), ni = br(E);
      }
      Mr !== void 0 && Mr[Fn] !== void 0 && (Or = Mr[Fn] + ` Tw
`), Fn === 0 ? c.push(Or + va(ti, ni, Et) + Er) : ii === ri ? c.push(Or + Er) : ii === Ei && c.push(Or + va(ti, ni, Et) + Er);
    }
    c = ii === ri ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
    var En = `BT
/`;
    return En += Ye + " " + Ne + ` Tf
`, En += re(Ne * Sn) + ` TL
`, En += Kr + `
`, En += Jt, En += c, B(En += "ET"), x[Ye] = !0, Wt;
  };
  var as = p.__private__.clip = p.clip = function(c) {
    return B(c === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return as("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return B("n"), this;
  };
  var ar = p.__private__.isValidStyle = function(c) {
    var b = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(c) !== -1 && (b = !0), b;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(c) {
    return ar(c) && (g = c), this;
  };
  var Wa = p.__private__.getStyle = p.getStyle = function(c) {
    var b = g;
    switch (c) {
      case "D":
      case "S":
        b = "S";
        break;
      case "F":
        b = "f";
        break;
      case "FD":
      case "DF":
        b = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        b = c;
    }
    return b;
  }, Va = p.close = function() {
    return B("h"), this;
  };
  p.stroke = function() {
    return B("S"), this;
  }, p.fill = function(c) {
    return xi("f", c), this;
  }, p.fillEvenOdd = function(c) {
    return xi("f*", c), this;
  }, p.fillStroke = function(c) {
    return xi("B", c), this;
  }, p.fillStrokeEvenOdd = function(c) {
    return xi("B*", c), this;
  };
  var xi = function(c, b) {
    At(b) === "object" ? ss(b, c) : B(c);
  }, Qi = function(c) {
    c === null || W === F.ADVANCED && c === void 0 || (c = Wa(c), B(c));
  };
  function os(c, b, E, H, ee) {
    var xe = new Wi(b || this.boundingBox, E || this.xStep, H || this.yStep, this.gState, ee || this.matrix);
    xe.stream = this.stream;
    var Ie = c + "$$" + this.cloneIndex++ + "$$";
    return vn(Ie, xe), xe;
  }
  var ss = function(c, b) {
    var E = pr[c.key], H = dt[E];
    if (H instanceof si) B("q"), B(cs(b)), H.gState && p.setGState(H.gState), B(c.matrix.toString() + " cm"), B("/" + E + " sh"), B("Q");
    else if (H instanceof Wi) {
      var ee = new et(1, 0, 0, -1, 0, jr());
      c.matrix && (ee = ee.multiply(c.matrix || nr), E = os.call(H, c.key, c.boundingBox, c.xStep, c.yStep, ee).id), B("q"), B("/Pattern cs"), B("/" + E + " scn"), H.gState && p.setGState(H.gState), B(b), B("Q");
    }
  }, cs = function(c) {
    switch (c) {
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
  }, ea = p.moveTo = function(c, b) {
    return B(re(_(c)) + " " + re(R(b)) + " m"), this;
  }, Jr = p.lineTo = function(c, b) {
    return B(re(_(c)) + " " + re(R(b)) + " l"), this;
  }, Ir = p.curveTo = function(c, b, E, H, ee, xe) {
    return B([re(_(c)), re(R(b)), re(_(E)), re(R(H)), re(_(ee)), re(R(xe)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(c, b, E, H, ee) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || isNaN(H) || !ar(ee)) throw new Error("Invalid arguments passed to jsPDF.line");
    return W === F.COMPAT ? this.lines([[E - c, H - b]], c, b, [1, 1], ee || "S") : this.lines([[E - c, H - b]], c, b, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(c, b, E, H, ee, xe) {
    var Ie, Be, Xe, ct, ot, vt, Mt, Et, Wt, on, Jt, Vn;
    if (typeof c == "number" && (Vn = E, E = b, b = c, c = Vn), H = H || [1, 1], xe = xe || !1, isNaN(b) || isNaN(E) || !Array.isArray(c) || !Array.isArray(H) || !ar(ee) || typeof xe != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (ea(b, E), Ie = H[0], Be = H[1], ct = c.length, on = b, Jt = E, Xe = 0; Xe < ct; Xe++) (ot = c[Xe]).length === 2 ? (on = ot[0] * Ie + on, Jt = ot[1] * Be + Jt, Jr(on, Jt)) : (vt = ot[0] * Ie + on, Mt = ot[1] * Be + Jt, Et = ot[2] * Ie + on, Wt = ot[3] * Be + Jt, on = ot[4] * Ie + on, Jt = ot[5] * Be + Jt, Ir(vt, Mt, Et, Wt, on, Jt));
    return xe && Va(), Qi(ee), this;
  }, p.path = function(c) {
    for (var b = 0; b < c.length; b++) {
      var E = c[b], H = E.c;
      switch (E.op) {
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
  }, p.__private__.rect = p.rect = function(c, b, E, H, ee) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || isNaN(H) || !ar(ee)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return W === F.COMPAT && (H = -H), B([re(_(c)), re(R(b)), re(_(E)), re(_(H)), "re"].join(" ")), Qi(ee), this;
  }, p.__private__.triangle = p.triangle = function(c, b, E, H, ee, xe, Ie) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || isNaN(H) || isNaN(ee) || isNaN(xe) || !ar(Ie)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[E - c, H - b], [ee - E, xe - H], [c - ee, b - xe]], c, b, [1, 1], Ie, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(c, b, E, H, ee, xe, Ie) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || isNaN(H) || isNaN(ee) || isNaN(xe) || !ar(Ie)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Be = 4 / 3 * (Math.SQRT2 - 1);
    return ee = Math.min(ee, 0.5 * E), xe = Math.min(xe, 0.5 * H), this.lines([[E - 2 * ee, 0], [ee * Be, 0, ee, xe - xe * Be, ee, xe], [0, H - 2 * xe], [0, xe * Be, -ee * Be, xe, -ee, xe], [2 * ee - E, 0], [-ee * Be, 0, -ee, -xe * Be, -ee, -xe], [0, 2 * xe - H], [0, -xe * Be, ee * Be, -xe, ee, -xe]], c + ee, b, [1, 1], Ie, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(c, b, E, H, ee) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || isNaN(H) || !ar(ee)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var xe = 4 / 3 * (Math.SQRT2 - 1) * E, Ie = 4 / 3 * (Math.SQRT2 - 1) * H;
    return ea(c + E, b), Ir(c + E, b - Ie, c + xe, b - H, c, b - H), Ir(c - xe, b - H, c - E, b - Ie, c - E, b), Ir(c - E, b + Ie, c - xe, b + H, c, b + H), Ir(c + xe, b + H, c + E, b + Ie, c + E, b), Qi(ee), this;
  }, p.__private__.circle = p.circle = function(c, b, E, H) {
    if (isNaN(c) || isNaN(b) || isNaN(E) || !ar(H)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(c, b, E, E, H);
  }, p.setFont = function(c, b, E) {
    return E && (b = Se(b, E)), Ye = za(c, b, { disableWarning: !1 }), this;
  };
  var ls = p.__private__.getFont = p.getFont = function() {
    return Qe[za.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var c, b, E = {};
    for (c in mt) if (mt.hasOwnProperty(c)) for (b in E[c] = [], mt[c]) mt[c].hasOwnProperty(b) && E[c].push(b);
    return E;
  }, p.addFont = function(c, b, E, H, ee) {
    var xe = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && xe.indexOf(arguments[3]) !== -1 ? ee = arguments[3] : arguments[3] && xe.indexOf(arguments[3]) == -1 && (E = Se(E, H)), ee = ee || "Identity-H", Ji.call(this, c, b, E, ee);
  };
  var Zr, ta = n.lineWidth || 0.200025, Li = p.__private__.getLineWidth = p.getLineWidth = function() {
    return ta;
  }, Ga = p.__private__.setLineWidth = p.setLineWidth = function(c) {
    return ta = c, B(re(_(c)) + " w"), this;
  };
  p.__private__.setLineDash = tt.API.setLineDash = tt.API.setLineDashPattern = function(c, b) {
    if (c = c || [], b = b || 0, isNaN(b) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return c = c.map(function(E) {
      return re(_(E));
    }).join(" "), b = re(_(b)), B("[" + c + "] " + b + " d"), this;
  };
  var Ya = p.__private__.getLineHeight = p.getLineHeight = function() {
    return Ne * Zr;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return Ne * Zr;
  };
  var $a = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(c) {
    return typeof (c = c || 1.15) == "number" && (Zr = c), this;
  }, Xa = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Zr;
  };
  $a(n.lineHeight);
  var or = p.__private__.getHorizontalCoordinate = function(c) {
    return _(c);
  }, br = p.__private__.getVerticalCoordinate = function(c) {
    return W === F.ADVANCED ? c : at[C].mediaBox.topRightY - at[C].mediaBox.bottomLeftY - _(c);
  }, us = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
    return re(or(c));
  }, Cr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
    return re(br(c));
  }, Wn = n.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return zn(Wn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(c, b, E, H) {
    return Wn = Un({ ch1: c, ch2: b, ch3: E, ch4: H, pdfColorType: "draw", precision: 2 }), B(Wn), this;
  };
  var na = n.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return zn(na);
  }, p.__private__.setFillColor = p.setFillColor = function(c, b, E, H) {
    return na = Un({ ch1: c, ch2: b, ch3: E, ch4: H, pdfColorType: "fill", precision: 2 }), B(na), this;
  };
  var Kr = n.textColor || "0 g", hs = p.__private__.getTextColor = p.getTextColor = function() {
    return zn(Kr);
  };
  p.__private__.setTextColor = p.setTextColor = function(c, b, E, H) {
    return Kr = Un({ ch1: c, ch2: b, ch3: E, ch4: H, pdfColorType: "text", precision: 3 }), this;
  };
  var Ni = n.charSpace, fs = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(Ni || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return Ni = c, this;
  };
  var ra = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(c) {
    var b = p.CapJoinStyles[c];
    if (b === void 0) throw new Error("Line cap style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ra = b, B(b + " J"), this;
  };
  var ia = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(c) {
    var b = p.CapJoinStyles[c];
    if (b === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ia = b, B(b + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
    if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return B(re(_(c)) + " M"), this;
  }, p.GState = Oo, p.setGState = function(c) {
    (c = typeof c == "string" ? jt[mn[c]] : Ja(null, c)).equals(gr) || (B("/" + c.id + " gs"), gr = c);
  };
  var Ja = function(c, b) {
    if (!c || !mn[c]) {
      var E = !1;
      for (var H in jt) if (jt.hasOwnProperty(H) && jt[H].equals(b)) {
        E = !0;
        break;
      }
      if (E) b = jt[H];
      else {
        var ee = "GS" + (Object.keys(jt).length + 1).toString(10);
        jt[ee] = b, b.id = ee;
      }
      return c && (mn[c] = b.id), xt.publish("addGState", b), b;
    }
  };
  p.addGState = function(c, b) {
    return Ja(c, b), this;
  }, p.saveGraphicsState = function() {
    return B("q"), Xt.push({ key: Ye, size: Ne, color: Kr }), this;
  }, p.restoreGraphicsState = function() {
    B("Q");
    var c = Xt.pop();
    return Ye = c.key, Ne = c.size, Kr = c.color, gr = null, this;
  }, p.setCurrentTransformationMatrix = function(c) {
    return B(c.toString() + " cm"), this;
  }, p.comment = function(c) {
    return B("#" + c), this;
  };
  var Ai = function(c, b) {
    var E = c || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return E;
    }, set: function(xe) {
      isNaN(xe) || (E = parseFloat(xe));
    } });
    var H = b || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return H;
    }, set: function(xe) {
      isNaN(xe) || (H = parseFloat(xe));
    } });
    var ee = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return ee;
    }, set: function(xe) {
      ee = xe.toString();
    } }), this;
  }, aa = function(c, b, E, H) {
    Ai.call(this, c, b), this.type = "rect";
    var ee = E || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return ee;
    }, set: function(Ie) {
      isNaN(Ie) || (ee = parseFloat(Ie));
    } });
    var xe = H || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return xe;
    }, set: function(Ie) {
      isNaN(Ie) || (xe = parseFloat(Ie));
    } }), this;
  }, oa = function() {
    this.page = Ft, this.currentPage = C, this.pages = Ce.slice(0), this.pagesContext = at.slice(0), this.x = Ge, this.y = De, this.matrix = Ue, this.width = Qr(C), this.height = jr(C), this.outputDestination = Fe, this.id = "", this.objectNumber = -1;
  };
  oa.prototype.restore = function() {
    Ft = this.page, C = this.currentPage, at = this.pagesContext, Ce = this.pages, Ge = this.x, De = this.y, Ue = this.matrix, sa(C, this.width), ca(C, this.height), Fe = this.outputDestination;
  };
  var Za = function(c, b, E, H, ee) {
    tr.push(new oa()), Ft = C = 0, Ce = [], Ge = c, De = b, Ue = ee, Zi([E, H]);
  }, ds = function(c) {
    if (er[c]) tr.pop().restore();
    else {
      var b = new oa(), E = "Xo" + (Object.keys(tn).length + 1).toString(10);
      b.id = E, er[c] = E, tn[E] = b, xt.publish("addFormObject", b), tr.pop().restore();
    }
  };
  for (var Si in p.beginFormObject = function(c, b, E, H, ee) {
    return Za(c, b, E, H, ee), this;
  }, p.endFormObject = function(c) {
    return ds(c), this;
  }, p.doFormObject = function(c, b) {
    var E = tn[er[c]];
    return B("q"), B(b.toString() + " cm"), B("/" + E.id + " Do"), B("Q"), this;
  }, p.getFormObject = function(c) {
    var b = tn[er[c]];
    return { x: b.x, y: b.y, width: b.width, height: b.height, matrix: b.matrix };
  }, p.save = function(c, b) {
    return c = c || "generated.pdf", (b = b || {}).returnPromise = b.returnPromise || !1, b.returnPromise === !1 ? (oi(yi(vr()), c), typeof oi.unload == "function" && nt.setTimeout && setTimeout(oi.unload, 911), this) : new Promise(function(E, H) {
      try {
        var ee = oi(yi(vr()), c);
        typeof oi.unload == "function" && nt.setTimeout && setTimeout(oi.unload, 911), E(ee);
      } catch (xe) {
        H(xe.message);
      }
    });
  }, tt.API) tt.API.hasOwnProperty(Si) && (Si === "events" && tt.API.events.length ? function(c, b) {
    var E, H, ee;
    for (ee = b.length - 1; ee !== -1; ee--) E = b[ee][0], H = b[ee][1], c.subscribe.apply(c, [E].concat(typeof H == "function" ? [H] : H));
  }(xt, tt.API.events) : p[Si] = tt.API[Si]);
  var Qr = p.getPageWidth = function(c) {
    return (at[c = c || C].mediaBox.topRightX - at[c].mediaBox.bottomLeftX) / te;
  }, sa = p.setPageWidth = function(c, b) {
    at[c].mediaBox.topRightX = b * te + at[c].mediaBox.bottomLeftX;
  }, jr = p.getPageHeight = function(c) {
    return (at[c = c || C].mediaBox.topRightY - at[c].mediaBox.bottomLeftY) / te;
  }, ca = p.setPageHeight = function(c, b) {
    at[c].mediaBox.topRightY = b * te + at[c].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: bn, getStyle: Wa, getFont: ls, getFontSize: pe, getCharSpace: fs, getTextColor: hs, getLineHeight: Ya, getLineHeightFactor: Xa, getLineWidth: Li, write: rt, getHorizontalCoordinate: or, getVerticalCoordinate: br, getCoordinateString: us, getVerticalCoordinateString: Cr, collections: {}, newObject: Yt, newAdditionalObject: hi, newObjectDeferred: Ht, newObjectDeferredBegin: An, getFilters: rr, putStream: Cn, events: xt, scaleFactor: te, pageSize: { getWidth: function() {
    return Qr(C);
  }, setWidth: function(c) {
    sa(C, c);
  }, getHeight: function() {
    return jr(C);
  }, setHeight: function(c) {
    ca(C, c);
  } }, encryptionOptions: y, encryption: an, getEncryptor: rs, output: wi, getNumberOfPages: Ko, pages: Ce, out: B, f2: ye, f3: N, getPageInfo: Ha, getPageInfoByObjId: it, getCurrentPageInfo: is, getPDFVersion: I, Point: Ai, Rectangle: aa, Matrix: et, hasHotfix: Ua }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Qr(C);
  }, set: function(c) {
    sa(C, c);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return jr(C);
  }, set: function(c) {
    ca(C, c);
  }, enumerable: !0, configurable: !0 }), Jo.call(p, ve), Ye = "F1", Da(s, r), xt.publish("initialized"), p;
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
  return function(a) {
    return Zs(r, a);
  };
}, Oo.prototype.equals = function(n) {
  var e, r = "id,objectNumber,equals";
  if (!n || At(n) !== At(this)) return !1;
  var a = 0;
  for (e in this) if (!(r.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !n.hasOwnProperty(e) || this[e] !== n[e]) return !1;
    a++;
  }
  for (e in n) n.hasOwnProperty(e) && r.indexOf(e) < 0 && a--;
  return a === 0;
}, tt.API = { events: [] }, tt.version = "3.0.1";
var Rt = tt.API, Tc = 1, ui = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, qi = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, st = function(n) {
  return n.toFixed(2);
}, Wr = function(n) {
  return n.toFixed(5);
};
Rt.__acroform__ = {};
var Nn = function(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n;
}, Pl = function(n) {
  return n * Tc;
}, lr = function(n) {
  var e = new o1(), r = Ve.internal.getHeight(n) || 0, a = Ve.internal.getWidth(n) || 0;
  return e.BBox = [0, 0, Number(st(a)), Number(st(r))], e;
}, gh = Rt.__acroform__.setBit = function(n, e) {
  if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n |= 1 << e;
}, mh = Rt.__acroform__.clearBit = function(n, e) {
  if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n &= ~(1 << e);
}, vh = Rt.__acroform__.getBit = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return (n & 1 << e) == 0 ? 0 : 1;
}, qt = Rt.__acroform__.getBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return vh(n, e - 1);
}, zt = Rt.__acroform__.setBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return gh(n, e - 1);
}, Ut = Rt.__acroform__.clearBitForPdf = function(n, e) {
  if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return mh(n, e - 1);
}, bh = Rt.__acroform__.calculateCoordinates = function(n, e) {
  var r = e.internal.getHorizontalCoordinate, a = e.internal.getVerticalCoordinate, s = n[0], i = n[1], l = n[2], h = n[3], f = {};
  return f.lowerLeft_X = r(s) || 0, f.lowerLeft_Y = a(i + h) || 0, f.upperRight_X = r(s + l) || 0, f.upperRight_Y = a(i) || 0, [Number(st(f.lowerLeft_X)), Number(st(f.lowerLeft_Y)), Number(st(f.upperRight_X)), Number(st(f.upperRight_Y))];
}, yh = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var e = [], r = n._V || n.DV, a = Ks(n, r), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + s + " " + st(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var i = lr(n);
    return i.scope = n.scope, i.stream = e.join(`
`), i;
  }
}, Ks = function(n, e) {
  var r = n.fontSize === 0 ? n.maxFontSize : n.fontSize, a = { text: "", fontSize: "" }, s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  s = n.multiline ? s.map(function(N) {
    return N.split(`
`);
  }) : s.map(function(N) {
    return [N];
  });
  var i = r, l = Ve.internal.getHeight(n) || 0;
  l = l < 0 ? -l : l;
  var h = Ve.internal.getWidth(n) || 0;
  h = h < 0 ? -h : h;
  var f = function(N, _, U) {
    if (N + 1 < s.length) {
      var R = _ + " " + s[N + 1][0];
      return _o(R, n, U).width <= h - 4;
    }
    return !1;
  };
  i++;
  e: for (; i > 0; ) {
    e = "", i--;
    var g, y, m = _o("3", n, i).height, x = n.multiline ? l - i : (l - m) / 2, p = x += 2, M = 0, I = 0, O = 0;
    if (i <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + _o(e, n, i = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var k = "", F = 0, W = 0; W < s.length; W++) if (s.hasOwnProperty(W)) {
      var ae = !1;
      if (s[W].length !== 1 && O !== s[W].length - 1) {
        if ((m + 2) * (F + 2) + 2 > l) continue e;
        k += s[W][O], ae = !0, I = W, W--;
      } else {
        k = (k += s[W][O] + " ").substr(k.length - 1) == " " ? k.substr(0, k.length - 1) : k;
        var me = parseInt(W), Se = f(me, k, i), re = W >= s.length - 1;
        if (Se && !re) {
          k += " ", O = 0;
          continue;
        }
        if (Se || re) {
          if (re) I = me;
          else if (n.multiline && (m + 2) * (F + 2) + 2 > l) continue e;
        } else {
          if (!n.multiline || (m + 2) * (F + 2) + 2 > l) continue e;
          I = me;
        }
      }
      for (var z = "", ie = M; ie <= I; ie++) {
        var ye = s[ie];
        if (n.multiline) {
          if (ie === I) {
            z += ye[O] + " ", O = (O + 1) % ye.length;
            continue;
          }
          if (ie === M) {
            z += ye[ye.length - 1] + " ";
            continue;
          }
        }
        z += ye[0] + " ";
      }
      switch (z = z.substr(z.length - 1) == " " ? z.substr(0, z.length - 1) : z, y = _o(z, n, i).width, n.textAlign) {
        case "right":
          g = h - y - 2;
          break;
        case "center":
          g = (h - y) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      e += st(g) + " " + st(p) + ` Td
`, e += "(" + ui(z) + `) Tj
`, e += -st(g) + ` 0 Td
`, p = -(i + 2), y = 0, M = ae ? I : I + 1, F++, k = "";
    }
    break;
  }
  return a.text = e, a.fontSize = i, a;
}, _o = function(n, e, r) {
  var a = e.scope.internal.getFont(e.fontName, e.fontStyle), s = e.scope.getStringUnitWidth(n, { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
  return { height: e.scope.getStringUnitWidth("3", { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: s };
}, wh = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, xh = function(n, e) {
  var r = { type: "reference", object: n };
  e.internal.getPageInfo(n.page).pageContext.annotations.find(function(a) {
    return a.type === r.type && a.object === r.object;
  }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(r);
}, Lh = function(n, e) {
  for (var r in n) if (n.hasOwnProperty(r)) {
    var a = r, s = n[r];
    e.internal.newObjectDeferredBegin(s.objId, !0), At(s) === "object" && typeof s.putStream == "function" && s.putStream(), delete n[a];
  }
}, Nh = function(n, e) {
  if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (Kn.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(wh)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Tc = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new s1(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(r) {
        r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID, r.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(r) {
        r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var a = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var s in a) if (a.hasOwnProperty(s)) {
          var i = a[s];
          i.objId = void 0, i.hasAnnotation && xh(i, r);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(r) {
        if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        r.internal.write("/AcroForm " + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(r) {
      (function(a, s) {
        var i = !a;
        for (var l in a || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(l)) {
          var h = a[l], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = bh(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), h.DA = Ve.createDefaultAppearanceStream(h), At(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var y = yh(h);
            f.push({ key: "AP", value: "<</N " + y + ">>" }), s.internal.acroformPlugin.xForms.push(y);
          }
          if (h.appearanceStreamContent) {
            var m = "";
            for (var x in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(x)) {
              var p = h.appearanceStreamContent[x];
              if (m += "/" + x + " ", m += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var l in p) if (p.hasOwnProperty(l)) {
                  var M = p[l];
                  typeof M == "function" && (M = M.call(s, h)), m += "/" + l + " " + M + " ", s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
                }
              } else typeof (M = p) == "function" && (M = M.call(s, h)), m += "/" + l + " " + M, s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
              m += ">>";
            }
            f.push({ key: "AP", value: `<<
` + m + ">>" });
          }
          s.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), s.internal.out("endobj");
        }
        i && Lh(s.internal.acroformPlugin.xForms, s);
      })(r, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, a1 = Rt.__acroform__.arrayToPdfArray = function(n, e, r) {
  var a = function(l) {
    return l;
  };
  if (Array.isArray(n)) {
    for (var s = "[", i = 0; i < n.length; i++) switch (i !== 0 && (s += " "), At(n[i])) {
      case "boolean":
      case "number":
      case "object":
        s += n[i].toString();
        break;
      case "string":
        n[i].substr(0, 1) !== "/" ? (e !== void 0 && r && (a = r.internal.getEncryptor(e)), s += "(" + ui(a(n[i].toString())) + ")") : s += n[i].toString();
    }
    return s += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, Ds = function(n, e, r) {
  var a = function(s) {
    return s;
  };
  return e !== void 0 && r && (a = r.internal.getEncryptor(e)), (n = n || "").toString(), n = "(" + ui(a(n)) + ")";
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
  var n = [], e = Object.getOwnPropertyNames(this).filter(function(i) {
    return i != "content" && i != "appearanceStreamContent" && i != "scope" && i != "objId" && i.substring(0, 1) != "_";
  });
  for (var r in e) if (Object.getOwnPropertyDescriptor(this, e[r]).configurable === !1) {
    var a = e[r], s = this[a];
    s && (Array.isArray(s) ? n.push({ key: a, value: a1(s, this.objId, this.scope) }) : s instanceof ur ? (s.scope = this.scope, n.push({ key: a, value: s.objId + " 0 R" })) : typeof s != "function" && n.push({ key: a, value: s }));
  }
  return n;
};
var o1 = function() {
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
Nn(o1, ur);
var s1 = function() {
  ur.call(this);
  var n, e = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var r = function(a) {
        return a;
      };
      return this.scope && (r = this.scope.internal.getEncryptor(this.objId)), "(" + ui(r(n)) + ")";
    }
  }, set: function(r) {
    n = r;
  } });
};
Nn(s1, ur);
var Kn = function n() {
  ur.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute F supplied.');
    e = k;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(e, 3);
  }, set: function(k) {
    k ? this.F = zt(e, 3) : this.F = Ut(e, 3);
  } });
  var r = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute Ff supplied.');
    r = k;
  } });
  var a = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (a.length !== 0) return a;
  }, set: function(k) {
    a = k !== void 0 ? k : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[0]) ? 0 : a[0];
  }, set: function(k) {
    a[0] = k;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[1]) ? 0 : a[1];
  }, set: function(k) {
    a[1] = k;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[2]) ? 0 : a[2];
  }, set: function(k) {
    a[2] = k;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[3]) ? 0 : a[3];
  }, set: function(k) {
    a[3] = k;
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
  var i = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!i || i.length < 1) {
      if (this instanceof Ro) return;
      i = "FieldObject" + n.FieldNum++;
    }
    var k = function(F) {
      return F;
    };
    return this.scope && (k = this.scope.internal.getEncryptor(this.objId)), "(" + ui(k(i)) + ")";
  }, set: function(k) {
    i = k.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return i;
  }, set: function(k) {
    i = k;
  } });
  var l = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(k) {
    l = k;
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
    return g === void 0 ? 50 / Tc : g;
  }, set: function(k) {
    g = k;
  } });
  var y = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return y;
  }, set: function(k) {
    y = k;
  } });
  var m = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!m || this instanceof Ro || this instanceof ci)) return Ds(m, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), m = k;
  } });
  var x = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (x) return this instanceof en ? x : Ds(x, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), x = this instanceof en ? k : k.substr(0, 1) === "(" ? qi(k.substr(1, k.length - 2)) : qi(k);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof en ? qi(x.substr(1, x.length - 1)) : x;
  }, set: function(k) {
    k = k.toString(), x = this instanceof en ? "/" + k : k;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(k) {
    this.V = k;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof en ? p : Ds(p, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), p = this instanceof en ? k : k.substr(0, 1) === "(" ? qi(k.substr(1, k.length - 2)) : qi(k);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof en ? qi(p.substr(1, p.length - 1)) : p;
  }, set: function(k) {
    k = k.toString(), p = this instanceof en ? "/" + k : k;
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
    return !!qt(this.Ff, 1);
  }, set: function(k) {
    k ? this.Ff = zt(this.Ff, 1) : this.Ff = Ut(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 2);
  }, set: function(k) {
    k ? this.Ff = zt(this.Ff, 2) : this.Ff = Ut(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 3);
  }, set: function(k) {
    k ? this.Ff = zt(this.Ff, 3) : this.Ff = Ut(this.Ff, 3);
  } });
  var O = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (O !== null) return O;
  }, set: function(k) {
    if ([0, 1, 2].indexOf(k) === -1) throw new Error('Invalid value "' + k + '" for attribute Q supplied.');
    O = k;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var k;
    switch (O) {
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
        O = 2;
        break;
      case "center":
      case 1:
        O = 1;
        break;
      case "left":
      case 0:
      default:
        O = 0;
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
    return a1(e, this.objId, this.scope);
  }, set: function(r) {
    var a, s;
    s = [], typeof (a = r) == "string" && (s = function(i, l, h) {
      h || (h = 1);
      for (var f, g = []; f = l.exec(i); ) g.push(f[h]);
      return g;
    }(a, /\((.*?)\)/g)), e = s;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(r) {
    e = r, this.sort && e.sort();
  }, this.addOption = function(r) {
    r = (r = r || "").toString(), e.push(r), this.sort && e.sort();
  }, this.removeOption = function(r, a) {
    for (a = a || !1, r = (r = r || "").toString(); e.indexOf(r) !== -1 && (e.splice(e.indexOf(r), 1), a !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 18);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 18) : this.Ff = Ut(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 19);
  }, set: function(r) {
    this.combo === !0 && (r ? this.Ff = zt(this.Ff, 19) : this.Ff = Ut(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 20);
  }, set: function(r) {
    r ? (this.Ff = zt(this.Ff, 20), e.sort()) : this.Ff = Ut(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 22);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 22) : this.Ff = Ut(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 23);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 23) : this.Ff = Ut(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 27);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 27) : this.Ff = Ut(this.Ff, 27);
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
var en = function() {
  Kn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 15);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 15) : this.Ff = Ut(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 16);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 16) : this.Ff = Ut(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 17);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 17) : this.Ff = Ut(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 26);
  }, set: function(r) {
    r ? this.Ff = zt(this.Ff, 26) : this.Ff = Ut(this.Ff, 26);
  } });
  var n, e = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(i) {
      return i;
    };
    if (this.scope && (r = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var a, s = [];
      for (a in s.push("<<"), e) s.push("/" + a + " (" + ui(r(e[a])) + ")");
      return s.push(">>"), s.join(`
`);
    }
  }, set: function(r) {
    At(r) === "object" && (e = r);
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
Nn(en, Kn);
var Co = function() {
  en.call(this), this.pushButton = !0;
};
Nn(Co, en);
var $i = function() {
  en.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    n = e !== void 0 ? e : [];
  } });
};
Nn($i, en);
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
  var r, a = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var s = function(h) {
      return h;
    };
    this.scope && (s = this.scope.internal.getEncryptor(this.objId));
    var i, l = [];
    for (i in l.push("<<"), a) l.push("/" + i + " (" + ui(s(a[i])) + ")");
    return l.push(">>"), l.join(`
`);
  }, set: function(s) {
    At(s) === "object" && (a = s);
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
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ve.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
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
  en.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ve.CheckBox.createAppearanceStream();
};
Nn(jo, en);
var ci = function() {
  Kn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 13) : this.Ff = Ut(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 21) : this.Ff = Ut(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 23) : this.Ff = Ut(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 24) : this.Ff = Ut(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 25) : this.Ff = Ut(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = zt(this.Ff, 26) : this.Ff = Ut(this.Ff, 26);
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
var Mo = function() {
  ci.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!qt(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = zt(this.Ff, 14) : this.Ff = Ut(this.Ff, 14);
  } }), this.password = !0;
};
Nn(Mo, ci);
var Ve = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Ve.CheckBox.YesNormal }, D: { On: Ve.CheckBox.YesPushDown, Off: Ve.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], a = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), i = Ks(n, n.caption);
  return r.push("0.749023 g"), r.push("0 0 " + st(Ve.internal.getWidth(n)) + " " + st(Ve.internal.getHeight(n)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + a + " " + st(i.fontSize) + " Tf " + s), r.push("BT"), r.push(i.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join(`
`), e;
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, a = n.scope.__private__.encodeColorString(n.color), s = [], i = Ve.internal.getHeight(n), l = Ve.internal.getWidth(n), h = Ks(n, n.caption);
  return s.push("1 g"), s.push("0 0 " + st(l) + " " + st(i) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + st(l - 1) + " " + st(i - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + r + " " + st(h.fontSize) + " Tf " + a), s.push(h.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + st(Ve.internal.getWidth(n)) + " " + st(Ve.internal.getHeight(n)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var e = { D: { Off: Ve.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[n] = Ve.RadioButton.Circle.YesNormal, e.D[n] = Ve.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], a = Ve.internal.getWidth(n) <= Ve.internal.getHeight(n) ? Ve.internal.getWidth(n) / 4 : Ve.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = Ve.internal.Bezier_C, i = Number((a * s).toFixed(5));
  return r.push("q"), r.push("1 0 0 1 " + Wr(Ve.internal.getWidth(n) / 2) + " " + Wr(Ve.internal.getHeight(n) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + i + " " + i + " " + a + " 0 " + a + " c"), r.push("-" + i + " " + a + " -" + a + " " + i + " -" + a + " 0 c"), r.push("-" + a + " -" + i + " -" + i + " -" + a + " 0 -" + a + " c"), r.push(i + " -" + a + " " + a + " -" + i + " " + a + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], a = Ve.internal.getWidth(n) <= Ve.internal.getHeight(n) ? Ve.internal.getWidth(n) / 4 : Ve.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = Number((2 * a).toFixed(5)), i = Number((s * Ve.internal.Bezier_C).toFixed(5)), l = Number((a * Ve.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Wr(Ve.internal.getWidth(n) / 2) + " " + Wr(Ve.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + i + " " + i + " " + s + " 0 " + s + " c"), r.push("-" + i + " " + s + " -" + s + " " + i + " -" + s + " 0 c"), r.push("-" + s + " -" + i + " -" + i + " -" + s + " 0 -" + s + " c"), r.push(i + " -" + s + " " + s + " -" + i + " " + s + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + Wr(Ve.internal.getWidth(n) / 2) + " " + Wr(Ve.internal.getHeight(n) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + l + " " + l + " " + a + " 0 " + a + " c"), r.push("-" + l + " " + a + " -" + a + " " + l + " -" + a + " 0 c"), r.push("-" + a + " -" + l + " -" + l + " -" + a + " 0 -" + a + " c"), r.push(l + " -" + a + " " + a + " -" + l + " " + a + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], a = Ve.internal.getWidth(n) <= Ve.internal.getHeight(n) ? Ve.internal.getWidth(n) / 4 : Ve.internal.getHeight(n) / 4;
  a = Number((0.9 * a).toFixed(5));
  var s = Number((2 * a).toFixed(5)), i = Number((s * Ve.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Wr(Ve.internal.getWidth(n) / 2) + " " + Wr(Ve.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + i + " " + i + " " + s + " 0 " + s + " c"), r.push("-" + i + " " + s + " -" + s + " " + i + " -" + s + " 0 c"), r.push("-" + s + " -" + i + " -" + i + " -" + s + " 0 -" + s + " c"), r.push(i + " -" + s + " " + s + " -" + i + " " + s + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
} }, Cross: { createAppearanceStream: function(n) {
  var e = { D: { Off: Ve.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[n] = Ve.RadioButton.Cross.YesNormal, e.D[n] = Ve.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [], a = Ve.internal.calculateCross(n);
  return r.push("q"), r.push("1 1 " + st(Ve.internal.getWidth(n) - 2) + " " + st(Ve.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(st(a.x1.x) + " " + st(a.x1.y) + " m"), r.push(st(a.x2.x) + " " + st(a.x2.y) + " l"), r.push(st(a.x4.x) + " " + st(a.x4.y) + " m"), r.push(st(a.x3.x) + " " + st(a.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = Ve.internal.calculateCross(n), a = [];
  return a.push("0.749023 g"), a.push("0 0 " + st(Ve.internal.getWidth(n)) + " " + st(Ve.internal.getHeight(n)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + st(Ve.internal.getWidth(n) - 2) + " " + st(Ve.internal.getHeight(n) - 2) + " re"), a.push("W"), a.push("n"), a.push(st(r.x1.x) + " " + st(r.x1.y) + " m"), a.push(st(r.x2.x) + " " + st(r.x2.y) + " l"), a.push(st(r.x4.x) + " " + st(r.x4.y) + " m"), a.push(st(r.x3.x) + " " + st(r.x3.y) + " l"), a.push("s"), a.push("Q"), e.stream = a.join(`
`), e;
}, OffPushDown: function(n) {
  var e = lr(n);
  e.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + st(Ve.internal.getWidth(n)) + " " + st(Ve.internal.getHeight(n)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} } }, createDefaultAppearanceStream: function(n) {
  var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color);
  return "/" + e + " " + n.fontSize + " Tf " + r;
} };
Ve.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var e = Ve.internal.getWidth(n), r = Ve.internal.getHeight(n), a = Math.min(e, r);
  return { x1: { x: (e - a) / 2, y: (r - a) / 2 + a }, x2: { x: (e - a) / 2 + a, y: (r - a) / 2 }, x3: { x: (e - a) / 2, y: (r - a) / 2 }, x4: { x: (e - a) / 2 + a, y: (r - a) / 2 + a } };
} }, Ve.internal.getWidth = function(n) {
  var e = 0;
  return At(n) === "object" && (e = Pl(n.Rect[2])), e;
}, Ve.internal.getHeight = function(n) {
  var e = 0;
  return At(n) === "object" && (e = Pl(n.Rect[3])), e;
};
var Ah = Rt.addField = function(n) {
  if (Nh(this, n), !(n instanceof Kn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Rt.AcroFormChoiceField = Vi, Rt.AcroFormListBox = Gi, Rt.AcroFormComboBox = Yi, Rt.AcroFormEditBox = Io, Rt.AcroFormButton = en, Rt.AcroFormPushButton = Co, Rt.AcroFormRadioButton = $i, Rt.AcroFormCheckBox = jo, Rt.AcroFormTextField = ci, Rt.AcroFormPasswordField = Mo, Rt.AcroFormAppearance = Ve, Rt.AcroForm = { ChoiceField: Vi, ListBox: Gi, ComboBox: Yi, EditBox: Io, Button: en, PushButton: Co, RadioButton: $i, CheckBox: jo, TextField: ci, PasswordField: Mo, Appearance: Ve }, tt.AcroForm = { ChoiceField: Vi, ListBox: Gi, ComboBox: Yi, EditBox: Io, Button: en, PushButton: Co, RadioButton: $i, CheckBox: jo, TextField: ci, PasswordField: Mo, Appearance: Ve };
tt.AcroForm;
function c1(n) {
  return n.reduce(function(e, r, a) {
    return e[r] = a, e;
  }, {});
}
(function(n) {
  n.__addimage__ = {};
  var e = "UNKNOWN", r = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = n.__addimage__.getImageFileTypeByImageData = function(N, _) {
    var U, R, de, he, Q, Z = e;
    if ((_ = _ || e) === "RGBA" || N.data !== void 0 && N.data instanceof Uint8ClampedArray && "height" in N && "width" in N) return "RGBA";
    if (Se(N)) for (Q in r) for (de = r[Q], U = 0; U < de.length; U += 1) {
      for (he = !0, R = 0; R < de[U].length; R += 1) if (de[U][R] !== void 0 && de[U][R] !== N[R]) {
        he = !1;
        break;
      }
      if (he === !0) {
        Z = Q;
        break;
      }
    }
    else for (Q in r) for (de = r[Q], U = 0; U < de.length; U += 1) {
      for (he = !0, R = 0; R < de[U].length; R += 1) if (de[U][R] !== void 0 && de[U][R] !== N.charCodeAt(R)) {
        he = !1;
        break;
      }
      if (he === !0) {
        Z = Q;
        break;
      }
    }
    return Z === e && _ !== e && (Z = _), Z;
  }, s = function N(_) {
    for (var U = this.internal.write, R = this.internal.putStream, de = (0, this.internal.getFilters)(); de.indexOf("FlateEncode") !== -1; ) de.splice(de.indexOf("FlateEncode"), 1);
    _.objectId = this.internal.newObject();
    var he = [];
    if (he.push({ key: "Type", value: "/XObject" }), he.push({ key: "Subtype", value: "/Image" }), he.push({ key: "Width", value: _.width }), he.push({ key: "Height", value: _.height }), _.colorSpace === O.INDEXED ? he.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (_.palette.length / 3 - 1) + " " + ("sMask" in _ && _.sMask !== void 0 ? _.objectId + 2 : _.objectId + 1) + " 0 R]" }) : (he.push({ key: "ColorSpace", value: "/" + _.colorSpace }), _.colorSpace === O.DEVICE_CMYK && he.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), he.push({ key: "BitsPerComponent", value: _.bitsPerComponent }), "decodeParameters" in _ && _.decodeParameters !== void 0 && he.push({ key: "DecodeParms", value: "<<" + _.decodeParameters + ">>" }), "transparency" in _ && Array.isArray(_.transparency)) {
      for (var Q = "", Z = 0, fe = _.transparency.length; Z < fe; Z++) Q += _.transparency[Z] + " " + _.transparency[Z] + " ";
      he.push({ key: "Mask", value: "[" + Q + "]" });
    }
    _.sMask !== void 0 && he.push({ key: "SMask", value: _.objectId + 1 + " 0 R" });
    var D = _.filter !== void 0 ? ["/" + _.filter] : void 0;
    if (R({ data: _.data, additionalKeyValues: he, alreadyAppliedFilters: D, objectId: _.objectId }), U("endobj"), "sMask" in _ && _.sMask !== void 0) {
      var Le = "/Predictor " + _.predictor + " /Colors 1 /BitsPerComponent " + _.bitsPerComponent + " /Columns " + _.width, w = { width: _.width, height: _.height, colorSpace: "DeviceGray", bitsPerComponent: _.bitsPerComponent, decodeParameters: Le, data: _.sMask };
      "filter" in _ && (w.filter = _.filter), N.call(this, w);
    }
    if (_.colorSpace === O.INDEXED) {
      var C = this.internal.newObject();
      R({ data: z(new Uint8Array(_.palette)), objectId: C }), U("endobj");
    }
  }, i = function() {
    var N = this.internal.collections.addImage_images;
    for (var _ in N) s.call(this, N[_]);
  }, l = function() {
    var N, _ = this.internal.collections.addImage_images, U = this.internal.write;
    for (var R in _) U("/I" + (N = _[R]).index, N.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", i), this.internal.events.subscribe("putXobjectDict", l));
  }, f = function() {
    var N = this.internal.collections.addImage_images;
    return h.call(this), N;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, y = function(N) {
    return typeof n["process" + N.toUpperCase()] == "function";
  }, m = function(N) {
    return At(N) === "object" && N.nodeType === 1;
  }, x = function(N, _) {
    if (N.nodeName === "IMG" && N.hasAttribute("src")) {
      var U = "" + N.getAttribute("src");
      if (U.indexOf("data:image/") === 0) return Ca(unescape(U).split("base64,").pop());
      var R = n.loadFile(U, !0);
      if (R !== void 0) return R;
    }
    if (N.nodeName === "CANVAS") {
      if (N.width === 0 || N.height === 0) throw new Error("Given canvas must have data. Canvas width: " + N.width + ", height: " + N.height);
      var de;
      switch (_) {
        case "PNG":
          de = "image/png";
          break;
        case "WEBP":
          de = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          de = "image/jpeg";
      }
      return Ca(N.toDataURL(de, 1).split("base64,").pop());
    }
  }, p = function(N) {
    var _ = this.internal.collections.addImage_images;
    if (_) {
      for (var U in _) if (N === _[U].alias) return _[U];
    }
  }, M = function(N, _, U) {
    return N || _ || (N = -96, _ = -96), N < 0 && (N = -1 * U.width * 72 / N / this.internal.scaleFactor), _ < 0 && (_ = -1 * U.height * 72 / _ / this.internal.scaleFactor), N === 0 && (N = _ * U.width / U.height), _ === 0 && (_ = N * U.height / U.width), [N, _];
  }, I = function(N, _, U, R, de, he) {
    var Q = M.call(this, U, R, de), Z = this.internal.getCoordinateString, fe = this.internal.getVerticalCoordinateString, D = f.call(this);
    if (U = Q[0], R = Q[1], D[de.index] = de, he) {
      he *= Math.PI / 180;
      var Le = Math.cos(he), w = Math.sin(he), C = function(q) {
        return q.toFixed(4);
      }, T = [C(Le), C(w), C(-1 * w), C(Le), 0, 0, "cm"];
    }
    this.internal.write("q"), he ? (this.internal.write([1, "0", "0", 1, Z(N), fe(_ + R), "cm"].join(" ")), this.internal.write(T.join(" ")), this.internal.write([Z(U), "0", "0", Z(R), "0", "0", "cm"].join(" "))) : this.internal.write([Z(U), "0", "0", Z(R), Z(N), fe(_ + R), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + de.index + " Do"), this.internal.write("Q");
  }, O = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var k = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, F = n.__addimage__.sHashCode = function(N) {
    var _, U, R = 0;
    if (typeof N == "string") for (U = N.length, _ = 0; _ < U; _++) R = (R << 5) - R + N.charCodeAt(_), R |= 0;
    else if (Se(N)) for (U = N.byteLength / 2, _ = 0; _ < U; _++) R = (R << 5) - R + N[_], R |= 0;
    return R;
  }, W = n.__addimage__.validateStringAsBase64 = function(N) {
    (N = N || "").toString().trim();
    var _ = !0;
    return N.length === 0 && (_ = !1), N.length % 4 != 0 && (_ = !1), /^[A-Za-z0-9+/]+$/.test(N.substr(0, N.length - 2)) === !1 && (_ = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(N.substr(-2)) === !1 && (_ = !1), _;
  }, ae = n.__addimage__.extractImageFromDataUrl = function(N) {
    if (N == null || !(N = N.trim()).startsWith("data:")) return null;
    var _ = N.indexOf(",");
    return _ < 0 ? null : N.substring(0, _).trim().endsWith("base64") ? N.substring(_ + 1) : null;
  }, me = n.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  n.__addimage__.isArrayBuffer = function(N) {
    return me() && N instanceof ArrayBuffer;
  };
  var Se = n.__addimage__.isArrayBufferView = function(N) {
    return me() && typeof Uint32Array < "u" && (N instanceof Int8Array || N instanceof Uint8Array || typeof Uint8ClampedArray < "u" && N instanceof Uint8ClampedArray || N instanceof Int16Array || N instanceof Uint16Array || N instanceof Int32Array || N instanceof Uint32Array || N instanceof Float32Array || N instanceof Float64Array);
  }, re = n.__addimage__.binaryStringToUint8Array = function(N) {
    for (var _ = N.length, U = new Uint8Array(_), R = 0; R < _; R++) U[R] = N.charCodeAt(R);
    return U;
  }, z = n.__addimage__.arrayBufferToBinaryString = function(N) {
    for (var _ = "", U = Se(N) ? N : new Uint8Array(N), R = 0; R < U.length; R += 8192) _ += String.fromCharCode.apply(null, U.subarray(R, R + 8192));
    return _;
  };
  n.addImage = function() {
    var N, _, U, R, de, he, Q, Z, fe;
    if (typeof arguments[1] == "number" ? (_ = e, U = arguments[1], R = arguments[2], de = arguments[3], he = arguments[4], Q = arguments[5], Z = arguments[6], fe = arguments[7]) : (_ = arguments[1], U = arguments[2], R = arguments[3], de = arguments[4], he = arguments[5], Q = arguments[6], Z = arguments[7], fe = arguments[8]), At(N = arguments[0]) === "object" && !m(N) && "imageData" in N) {
      var D = N;
      N = D.imageData, _ = D.format || _ || e, U = D.x || U || 0, R = D.y || R || 0, de = D.w || D.width || de, he = D.h || D.height || he, Q = D.alias || Q, Z = D.compression || Z, fe = D.rotation || D.angle || fe;
    }
    var Le = this.internal.getFilters();
    if (Z === void 0 && Le.indexOf("FlateEncode") !== -1 && (Z = "SLOW"), isNaN(U) || isNaN(R)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var w = ie.call(this, N, _, Q, Z);
    return I.call(this, U, R, de, he, w, fe), this;
  };
  var ie = function(N, _, U, R) {
    var de, he, Q;
    if (typeof N == "string" && a(N) === e) {
      N = unescape(N);
      var Z = ye(N, !1);
      (Z !== "" || (Z = n.loadFile(N, !0)) !== void 0) && (N = Z);
    }
    if (m(N) && (N = x(N, _)), _ = a(N, _), !y(_)) throw new Error("addImage does not support files of type '" + _ + "', please ensure that a plugin for '" + _ + "' support is added.");
    if (((Q = U) == null || Q.length === 0) && (U = function(fe) {
      return typeof fe == "string" || Se(fe) ? F(fe) : Se(fe.data) ? F(fe.data) : null;
    }(N)), (de = p.call(this, U)) || (me() && (N instanceof Uint8Array || _ === "RGBA" || (he = N, N = re(N))), de = this["process" + _.toUpperCase()](N, g.call(this), U, function(fe) {
      return fe && typeof fe == "string" && (fe = fe.toUpperCase()), fe in n.image_compression ? fe : k.NONE;
    }(R), he)), !de) throw new Error("An unknown error occurred whilst processing the image.");
    return de;
  }, ye = n.__addimage__.convertBase64ToBinaryString = function(N, _) {
    _ = typeof _ != "boolean" || _;
    var U, R = "";
    if (typeof N == "string") {
      var de;
      U = (de = ae(N)) !== null && de !== void 0 ? de : N;
      try {
        R = Ca(U);
      } catch (he) {
        if (_) throw W(U) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + he.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return R;
  };
  n.getImageProperties = function(N) {
    var _, U, R = "";
    if (m(N) && (N = x(N)), typeof N == "string" && a(N) === e && ((R = ye(N, !1)) === "" && (R = n.loadFile(N) || ""), N = R), U = a(N), !y(U)) throw new Error("addImage does not support files of type '" + U + "', please ensure that a plugin for '" + U + "' support is added.");
    if (!me() || N instanceof Uint8Array || (N = re(N)), !(_ = this["process" + U.toUpperCase()](N))) throw new Error("An unknown error occurred whilst processing the image");
    return _.fileType = U, _;
  };
})(tt.API), /**
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
  tt.API.events.push(["addPage", function(r) {
    this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(r) {
    for (var a, s, i, l = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(r.objId), g = r.pageContext.annotations, y = !1, m = 0; m < g.length && !y; m++) switch ((a = g[m]).type) {
      case "link":
        (e(a.options.url) || e(a.options.pageNumber)) && (y = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        y = !0;
    }
    if (y != 0) {
      this.internal.write("/Annots [");
      for (var x = 0; x < g.length; x++) {
        a = g[x];
        var p = this.internal.pdfEscape, M = this.internal.getEncryptor(r.objId);
        switch (a.type) {
          case "reference":
            this.internal.write(" " + a.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), O = this.internal.newAdditionalObject(), k = this.internal.getEncryptor(I.objId), F = a.title || "Note";
            i = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + p(k(a.contents)) + ")", i += " /Popup " + O.objId + " 0 R", i += " /P " + f.objId + " 0 R", i += " /T (" + p(k(F)) + ") >>", I.content = i;
            var W = I.objId + " 0 R";
            i = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + l(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + W, a.open && (i += " /Open true"), i += " >>", O.content = i, this.internal.write(I.objId, "0 R", O.objId, "0 R");
            break;
          case "freetext":
            s = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
            var ae = a.color || "#000000";
            i = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(M(a.contents)) + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + ae + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
            break;
          case "link":
            if (a.options.name) {
              var me = this.annotations._nameMap[a.options.name];
              a.options.pageNumber = me.page, a.options.top = me.y;
            } else a.options.top || (a.options.top = 0);
            if (s = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", i = "", a.options.url) i = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(M(a.options.url)) + ") >>";
            else if (a.options.pageNumber)
              switch (i = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                case "Fit":
                  i += " /Fit]";
                  break;
                case "FitH":
                  i += " /FitH " + a.options.top + "]";
                  break;
                case "FitV":
                  a.options.left = a.options.left || 0, i += " /FitV " + a.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var Se = h(a.options.top);
                  a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), i += " /XYZ " + a.options.left + " " + Se + " " + a.options.zoom + "]";
              }
            i != "" && (i += " >>", this.internal.write(i));
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
  }, n.link = function(r, a, s, i, l) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(r), y: g(a), w: f(r + s), h: g(a + i) }, options: l, type: "link" });
  }, n.textWithLink = function(r, a, s, i) {
    var l, h, f = this.getTextWidth(r), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (i.maxWidth !== void 0) {
      h = i.maxWidth;
      var y = this.splitTextToSize(r, h).length;
      l = Math.ceil(g * y);
    } else h = f, l = g;
    return this.text(r, a, s, i), s += 0.2 * g, i.align === "center" && (a -= f / 2), i.align === "right" && (a -= f), this.link(a, s - g, h, l, i), f;
  }, n.getTextWidth = function(r) {
    var a = this.internal.getFontSize();
    return this.getStringUnitWidth(r) * a / this.internal.scaleFactor;
  };
}(tt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, s = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var i = n.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return e[I.charCodeAt(0)] !== void 0;
  }, l = n.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = n.__arabicParser__.isArabicEndLetter = function(I) {
    return l(I) && i(I) && e[I.charCodeAt(0)].length <= 2;
  }, f = n.__arabicParser__.isArabicAlfLetter = function(I) {
    return l(I) && s.indexOf(I.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return l(I) && i(I) && e[I.charCodeAt(0)].length >= 1;
  };
  var g = n.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return l(I) && i(I) && e[I.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return l(I) && i(I) && e[I.charCodeAt(0)].length >= 3;
  };
  var y = n.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return l(I) && i(I) && e[I.charCodeAt(0)].length == 4;
  }, m = n.__arabicParser__.resolveLigatures = function(I) {
    var O = 0, k = r, F = "", W = 0;
    for (O = 0; O < I.length; O += 1) k[I.charCodeAt(O)] !== void 0 ? (W++, typeof (k = k[I.charCodeAt(O)]) == "number" && (F += String.fromCharCode(k), k = r, W = 0), O === I.length - 1 && (k = r, F += I.charAt(O - (W - 1)), O -= W - 1, W = 0)) : (k = r, F += I.charAt(O - W), O -= W, W = 0);
    return F;
  };
  n.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && a[I.charCodeAt(0)] !== void 0;
  };
  var x = n.__arabicParser__.getCorrectForm = function(I, O, k) {
    return l(I) ? i(I) === !1 ? -1 : !g(I) || !l(O) && !l(k) || !l(k) && h(O) || h(I) && !l(O) || h(I) && f(O) || h(I) && h(O) ? 0 : y(I) && l(O) && !h(O) && l(k) && g(k) ? 3 : h(I) || !l(k) ? 1 : 2 : -1;
  }, p = function(I) {
    var O = 0, k = 0, F = 0, W = "", ae = "", me = "", Se = (I = I || "").split("\\s+"), re = [];
    for (O = 0; O < Se.length; O += 1) {
      for (re.push(""), k = 0; k < Se[O].length; k += 1) W = Se[O][k], ae = Se[O][k - 1], me = Se[O][k + 1], l(W) ? (F = x(W, ae, me), re[O] += F !== -1 ? String.fromCharCode(e[W.charCodeAt(0)][F]) : W) : re[O] += W;
      re[O] = m(re[O]);
    }
    return re.join(" ");
  }, M = n.__arabicParser__.processArabic = n.processArabic = function() {
    var I, O = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, k = [];
    if (Array.isArray(O)) {
      var F = 0;
      for (k = [], F = 0; F < O.length; F += 1) Array.isArray(O[F]) ? k.push([p(O[F][0]), O[F][1], O[F][2]]) : k.push([p(O[F])]);
      I = k;
    } else I = p(O);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  n.events.push(["preProcessText", M]);
}(tt.API), tt.API.autoPrint = function(n) {
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
    var i = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return i;
    }, set: function(h) {
      i = h;
    } });
    var l = {};
    Object.defineProperty(this, "style", { get: function() {
      return l;
    }, set: function(h) {
      l = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  e.prototype.getContext = function(r, a) {
    var s;
    if ((r = r || "2d") !== "2d") return null;
    for (s in a) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = a[s]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
}(tt.API), function(n) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, r = !1, a = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
  }, s = function() {
    this.internal.__cell__.lastCell = new i(), this.internal.__cell__.pages = 1;
  }, i = function() {
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
    var y = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return y;
    }, set: function(I) {
      y = I;
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
  i.prototype.clone = function() {
    return new i(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, i.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(f) {
    return a.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, n.getTextDimensions = function(f, g) {
    a.call(this);
    var y = (g = g || {}).fontSize || this.getFontSize(), m = g.font || this.getFont(), x = g.scaleFactor || this.internal.scaleFactor, p = 0, M = 0, I = 0, O = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var k = g.maxWidth;
    k > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, k) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(W, ae) {
      return W.concat(O.splitTextToSize(ae, k));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var F = 0; F < f.length; F++) p < (I = this.getStringUnitWidth(f[F], { font: m }) * y) && (p = I);
    return p !== 0 && (M = f.length), { w: p /= x, h: Math.max((M * y * this.getLineHeightFactor() - y * (this.getLineHeightFactor() - 1)) / x, 0) };
  }, n.cellAddPage = function() {
    a.call(this), this.addPage();
    var f = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new i(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var l = n.cell = function() {
    var f;
    f = arguments[0] instanceof i ? arguments[0] : new i(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
    var g = this.internal.__cell__.lastCell, y = this.internal.__cell__.padding, m = this.internal.__cell__.margins || e, x = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + m.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = m.top, p && x && (this.printHeaderRow(f.lineNumber, !0), f.y += x[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, r === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - y, f.y + y, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + y, { align: "center", baseline: "top", maxWidth: f.width - y - y }) : this.text(f.text, f.x + y, f.y + y, { align: "left", baseline: "top", maxWidth: f.width - y - y })), this.internal.__cell__.lastCell = f, this;
  };
  n.table = function(f, g, y, m, x) {
    if (a.call(this), !y) throw new Error("No data for PDF table.");
    var p, M, I, O, k = [], F = [], W = [], ae = {}, me = {}, Se = [], re = [], z = (x = x || {}).autoSize || !1, ie = x.printHeaders !== !1, ye = x.css && x.css["font-size"] !== void 0 ? 16 * x.css["font-size"] : x.fontSize || 12, N = x.margins || Object.assign({ width: this.getPageWidth() }, e), _ = typeof x.padding == "number" ? x.padding : 3, U = x.headerBackgroundColor || "#c8c8c8", R = x.headerTextColor || "#000";
    if (s.call(this), this.internal.__cell__.printHeaders = ie, this.internal.__cell__.margins = N, this.internal.__cell__.table_font_size = ye, this.internal.__cell__.padding = _, this.internal.__cell__.headerBackgroundColor = U, this.internal.__cell__.headerTextColor = R, this.setFontSize(ye), m == null) F = k = Object.keys(y[0]), W = k.map(function() {
      return "left";
    });
    else if (Array.isArray(m) && At(m[0]) === "object") for (k = m.map(function(D) {
      return D.name;
    }), F = m.map(function(D) {
      return D.prompt || D.name || "";
    }), W = m.map(function(D) {
      return D.align || "left";
    }), p = 0; p < m.length; p += 1) me[m[p].name] = m[p].width * (19.049976 / 25.4);
    else Array.isArray(m) && typeof m[0] == "string" && (F = k = m, W = k.map(function() {
      return "left";
    }));
    if (z || Array.isArray(m) && typeof m[0] == "string") for (p = 0; p < k.length; p += 1) {
      for (ae[O = k[p]] = y.map(function(D) {
        return D[O];
      }), this.setFont(void 0, "bold"), Se.push(this.getTextDimensions(F[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), M = ae[O], this.setFont(void 0, "normal"), I = 0; I < M.length; I += 1) Se.push(this.getTextDimensions(M[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      me[O] = Math.max.apply(null, Se) + _ + _, Se = [];
    }
    if (ie) {
      var de = {};
      for (p = 0; p < k.length; p += 1) de[k[p]] = {}, de[k[p]].text = F[p], de[k[p]].align = W[p];
      var he = h.call(this, de, me);
      re = k.map(function(D) {
        return new i(f, g, me[D], he, de[D].text, void 0, de[D].align);
      }), this.setTableHeaderRow(re), this.printHeaderRow(1, !1);
    }
    var Q = m.reduce(function(D, Le) {
      return D[Le.name] = Le.align, D;
    }, {});
    for (p = 0; p < y.length; p += 1) {
      "rowStart" in x && x.rowStart instanceof Function && x.rowStart({ row: p, data: y[p] }, this);
      var Z = h.call(this, y[p], me);
      for (I = 0; I < k.length; I += 1) {
        var fe = y[p][k[I]];
        "cellStart" in x && x.cellStart instanceof Function && x.cellStart({ row: p, col: I, data: fe }, this), l.call(this, new i(f, g, me[k[I]], Z, fe, p + 2, Q[k[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var y = this.internal.__cell__.padding, m = this.internal.__cell__.table_font_size, x = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var M = f[p];
      return this.splitTextToSize(M.hasOwnProperty("text") ? M.text : M, g[p] - y - y);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * m / x + y + y;
    }, this).reduce(function(p, M) {
      return Math.max(p, M);
    }, 0);
  };
  n.setTableHeaderRow = function(f) {
    a.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, n.printHeaderRow = function(f, g) {
    if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var y;
    if (r = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var m = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new i(m[0], m[1], m[2], m[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var x = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      y = this.internal.__cell__.tableHeaderRow[p].clone(), g && (y.y = this.internal.__cell__.margins.top || 0, x.push(y)), y.lineNumber = f;
      var M = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), l.call(this, y), this.setTextColor(M);
    }
    x.length > 0 && this.setTableHeaderRow(x), this.setFont(void 0, "normal"), r = !1;
  };
}(tt.API);
var l1 = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, u1 = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Qs = c1(u1), h1 = [100, 200, 300, 400, 500, 600, 700, 800, 900], Sh = c1(h1);
function ec(n) {
  var e = n.family.replace(/"|'/g, "").toLowerCase(), r = function(i) {
    return l1[i = i || "normal"] ? i : "normal";
  }(n.style), a = function(i) {
    if (!i) return 400;
    if (typeof i == "number") return i >= 100 && i <= 900 && i % 100 == 0 ? i : 400;
    if (/^\d00$/.test(i)) return parseInt(i);
    switch (i) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(n.weight), s = function(i) {
    return typeof Qs[i = i || "normal"] == "number" ? i : "normal";
  }(n.stretch);
  return { family: e, style: r, weight: a, stretch: s, src: n.src || [], ref: n.ref || { name: e, style: [s, r, a].join(" ") } };
}
function Il(n, e, r, a) {
  var s;
  for (s = r; s >= 0 && s < e.length; s += a) if (n[e[s]]) return n[e[s]];
  for (s = r; s >= 0 && s < e.length; s -= a) if (n[e[s]]) return n[e[s]];
}
var _h = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, Cl = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function jl(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function kh(n, e, r) {
  for (var a = (r = r || {}).defaultFontFamily || "times", s = Object.assign({}, _h, r.genericFontFamilies || {}), i = null, l = null, h = 0; h < e.length; ++h) if (s[(i = ec(e[h])).family] && (i.family = s[i.family]), n.hasOwnProperty(i.family)) {
    l = n[i.family];
    break;
  }
  if (!(l = l || n[a])) throw new Error("Could not find a font-family for the rule '" + jl(i) + "' and default family '" + a + "'.");
  if (l = function(f, g) {
    if (g[f]) return g[f];
    var y = Qs[f], m = y <= Qs.normal ? -1 : 1, x = Il(g, u1, y, m);
    if (!x) throw new Error("Could not find a matching font-stretch value for " + f);
    return x;
  }(i.stretch, l), l = function(f, g) {
    if (g[f]) return g[f];
    for (var y = l1[f], m = 0; m < y.length; ++m) if (g[y[m]]) return g[y[m]];
    throw new Error("Could not find a matching font-style for " + f);
  }(i.style, l), !(l = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var y = Sh[f], m = Il(g, h1, y, f < 400 ? -1 : 1);
    if (!m) throw new Error("Could not find a matching font-weight for value " + f);
    return m;
  }(i.weight, l))) throw new Error("Failed to resolve a font for the rule '" + jl(i) + "'.");
  return l;
}
function Ml(n) {
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
var ko, Fl, El, qs = ["times"];
(function(n) {
  var e, r, a, s, i, l, h, f, g, y = function(w) {
    return w = w || {}, this.isStrokeTransparent = w.isStrokeTransparent || !1, this.strokeOpacity = w.strokeOpacity || 1, this.strokeStyle = w.strokeStyle || "#000000", this.fillStyle = w.fillStyle || "#000000", this.isFillTransparent = w.isFillTransparent || !1, this.fillOpacity = w.fillOpacity || 1, this.font = w.font || "10px sans-serif", this.textBaseline = w.textBaseline || "alphabetic", this.textAlign = w.textAlign || "left", this.lineWidth = w.lineWidth || 1, this.lineJoin = w.lineJoin || "miter", this.lineCap = w.lineCap || "butt", this.path = w.path || [], this.transform = w.transform !== void 0 ? w.transform.clone() : new f(), this.globalCompositeOperation = w.globalCompositeOperation || "normal", this.globalAlpha = w.globalAlpha || 1, this.clip_path = w.clip_path || [], this.currentPoint = w.currentPoint || new l(), this.miterLimit = w.miterLimit || 10, this.lastPoint = w.lastPoint || new l(), this.lineDashOffset = w.lineDashOffset || 0, this.lineDash = w.lineDash || [], this.margin = w.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = w.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof w.ignoreClearRect != "boolean" || w.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new m(this), e = this.internal.f2, r = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, i = this.internal.getVerticalCoordinate, l = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new y();
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
    }, set: function(we) {
      T = !!we;
    } });
    var q = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return q;
    }, set: function(we) {
      q = !!we;
    } });
    var Y = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return Y;
    }, set: function(we) {
      isNaN(we) || (Y = we);
    } });
    var oe = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return oe;
    }, set: function(we) {
      isNaN(we) || (oe = we);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(we) {
      var B;
      typeof we == "number" ? B = [we, we, we, we] : ((B = new Array(4))[0] = we[0], B[1] = we.length >= 2 ? we[1] : B[0], B[2] = we.length >= 3 ? we[2] : B[0], B[3] = we.length >= 4 ? we[3] : B[1]), g.margin = B;
    } });
    var ne = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return ne;
    }, set: function(we) {
      ne = we;
    } });
    var ue = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return ue;
    }, set: function(we) {
      ue = we;
    } });
    var Me = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return Me;
    }, set: function(we) {
      Me = we;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(we) {
      we instanceof y && (g = we);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(we) {
      g.path = we;
    } });
    var Ce = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return Ce;
    }, set: function(we) {
      Ce = we;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(we) {
      var B;
      B = x(we), this.ctx.fillStyle = B.style, this.ctx.isFillTransparent = B.a === 0, this.ctx.fillOpacity = B.a, this.pdf.setFillColor(B.r, B.g, B.b, { a: B.a }), this.pdf.setTextColor(B.r, B.g, B.b, { a: B.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(we) {
      var B = x(we);
      this.ctx.strokeStyle = B.style, this.ctx.isStrokeTransparent = B.a === 0, this.ctx.strokeOpacity = B.a, B.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (B.a, this.pdf.setDrawColor(B.r, B.g, B.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(we) {
      ["butt", "round", "square"].indexOf(we) !== -1 && (this.ctx.lineCap = we, this.pdf.setLineCap(we));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(we) {
      isNaN(we) || (this.ctx.lineWidth = we, this.pdf.setLineWidth(we));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(we) {
      ["bevel", "round", "miter"].indexOf(we) !== -1 && (this.ctx.lineJoin = we, this.pdf.setLineJoin(we));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(we) {
      isNaN(we) || (this.ctx.miterLimit = we, this.pdf.setMiterLimit(we));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(we) {
      this.ctx.textBaseline = we;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(we) {
      ["right", "end", "center", "left", "start"].indexOf(we) !== -1 && (this.ctx.textAlign = we);
    } });
    var Ee = null;
    function Fe(we, B) {
      if (Ee === null) {
        var rt = function(He) {
          var ve = [];
          return Object.keys(He).forEach(function(Ne) {
            He[Ne].forEach(function(se) {
              var pe = null;
              switch (se) {
                case "bold":
                  pe = { family: Ne, weight: "bold" };
                  break;
                case "italic":
                  pe = { family: Ne, style: "italic" };
                  break;
                case "bolditalic":
                  pe = { family: Ne, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  pe = { family: Ne };
              }
              pe !== null && (pe.ref = { name: Ne, style: se }, ve.push(pe));
            });
          }), ve;
        }(we.getFontList());
        Ee = function(He) {
          for (var ve = {}, Ne = 0; Ne < He.length; ++Ne) {
            var se = ec(He[Ne]), pe = se.family, ge = se.stretch, K = se.style, je = se.weight;
            ve[pe] = ve[pe] || {}, ve[pe][ge] = ve[pe][ge] || {}, ve[pe][ge][K] = ve[pe][ge][K] || {}, ve[pe][ge][K][je] = se;
          }
          return ve;
        }(rt.concat(B));
      }
      return Ee;
    }
    var Je = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Je;
    }, set: function(we) {
      Ee = null, Je = we;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(we) {
      var B;
      if (this.ctx.font = we, (B = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(we)) !== null) {
        var rt = B[1];
        B[2];
        var He = B[3], ve = B[4];
        B[5];
        var Ne = B[6], se = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(ve)[2];
        ve = Math.floor(se === "px" ? parseFloat(ve) * this.pdf.internal.scaleFactor : se === "em" ? parseFloat(ve) * this.pdf.getFontSize() : parseFloat(ve) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(ve);
        var pe = function(Re) {
          var Ye, te, Ge = [], De = Re.trim();
          if (De === "") return qs;
          if (De in Cl) return [Cl[De]];
          for (; De !== ""; ) {
            switch (te = null, Ye = (De = Ml(De)).charAt(0)) {
              case '"':
              case "'":
                te = Ph(De.substring(1), Ye);
                break;
              default:
                te = Ih(De);
            }
            if (te === null || (Ge.push(te[0]), (De = Ml(te[1])) !== "" && De.charAt(0) !== ",")) return qs;
            De = De.replace(/^,/, "");
          }
          return Ge;
        }(Ne);
        if (this.fontFaces) {
          var ge = kh(Fe(this.pdf, this.fontFaces), pe.map(function(Re) {
            return { family: Re, stretch: "normal", weight: He, style: rt };
          }));
          this.pdf.setFont(ge.ref.name, ge.ref.style);
        } else {
          var K = "";
          (He === "bold" || parseInt(He, 10) >= 700 || rt === "bold") && (K = "bold"), rt === "italic" && (K += "italic"), K.length === 0 && (K = "normal");
          for (var je = "", ze = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, Ke = 0; Ke < pe.length; Ke++) {
            if (this.pdf.internal.getFont(pe[Ke], K, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              je = pe[Ke];
              break;
            }
            if (K === "bolditalic" && this.pdf.internal.getFont(pe[Ke], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) je = pe[Ke], K = "bold";
            else if (this.pdf.internal.getFont(pe[Ke], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              je = pe[Ke], K = "normal";
              break;
            }
          }
          if (je === "") {
            for (var We = 0; We < pe.length; We++) if (ze[pe[We]]) {
              je = ze[pe[We]];
              break;
            }
          }
          je = je === "" ? "Times" : je, this.pdf.setFont(je, K);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(we) {
      this.ctx.globalCompositeOperation = we;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(we) {
      this.ctx.globalAlpha = we;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(we) {
      this.ctx.lineDashOffset = we, Le.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(we) {
      this.ctx.lineDash = we, Le.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(we) {
      this.ctx.ignoreClearRect = !!we;
    } });
  };
  m.prototype.setLineDash = function(w) {
    this.lineDash = w;
  }, m.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, m.prototype.fill = function() {
    ae.call(this, "fill", !1);
  }, m.prototype.stroke = function() {
    ae.call(this, "stroke", !1);
  }, m.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, m.prototype.moveTo = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw kt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var T = this.ctx.transform.applyToPoint(new l(w, C));
    this.path.push({ type: "mt", x: T.x, y: T.y }), this.ctx.lastPoint = new l(w, C);
  }, m.prototype.closePath = function() {
    var w = new l(0, 0), C = 0;
    for (C = this.path.length - 1; C !== -1; C--) if (this.path[C].type === "begin" && At(this.path[C + 1]) === "object" && typeof this.path[C + 1].x == "number") {
      w = new l(this.path[C + 1].x, this.path[C + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new l(w.x, w.y);
  }, m.prototype.lineTo = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw kt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var T = this.ctx.transform.applyToPoint(new l(w, C));
    this.path.push({ type: "lt", x: T.x, y: T.y }), this.ctx.lastPoint = new l(T.x, T.y);
  }, m.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), ae.call(this, null, !0);
  }, m.prototype.quadraticCurveTo = function(w, C, T, q) {
    if (isNaN(T) || isNaN(q) || isNaN(w) || isNaN(C)) throw kt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var Y = this.ctx.transform.applyToPoint(new l(T, q)), oe = this.ctx.transform.applyToPoint(new l(w, C));
    this.path.push({ type: "qct", x1: oe.x, y1: oe.y, x: Y.x, y: Y.y }), this.ctx.lastPoint = new l(Y.x, Y.y);
  }, m.prototype.bezierCurveTo = function(w, C, T, q, Y, oe) {
    if (isNaN(Y) || isNaN(oe) || isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q)) throw kt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var ne = this.ctx.transform.applyToPoint(new l(Y, oe)), ue = this.ctx.transform.applyToPoint(new l(w, C)), Me = this.ctx.transform.applyToPoint(new l(T, q));
    this.path.push({ type: "bct", x1: ue.x, y1: ue.y, x2: Me.x, y2: Me.y, x: ne.x, y: ne.y }), this.ctx.lastPoint = new l(ne.x, ne.y);
  }, m.prototype.arc = function(w, C, T, q, Y, oe) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q) || isNaN(Y)) throw kt.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (oe = !!oe, !this.ctx.transform.isIdentity) {
      var ne = this.ctx.transform.applyToPoint(new l(w, C));
      w = ne.x, C = ne.y;
      var ue = this.ctx.transform.applyToPoint(new l(0, T)), Me = this.ctx.transform.applyToPoint(new l(0, 0));
      T = Math.sqrt(Math.pow(ue.x - Me.x, 2) + Math.pow(ue.y - Me.y, 2));
    }
    Math.abs(Y - q) >= 2 * Math.PI && (q = 0, Y = 2 * Math.PI), this.path.push({ type: "arc", x: w, y: C, radius: T, startAngle: q, endAngle: Y, counterclockwise: oe });
  }, m.prototype.arcTo = function(w, C, T, q, Y) {
    throw new Error("arcTo not implemented.");
  }, m.prototype.rect = function(w, C, T, q) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q)) throw kt.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(w, C), this.lineTo(w + T, C), this.lineTo(w + T, C + q), this.lineTo(w, C + q), this.lineTo(w, C), this.lineTo(w + T, C), this.lineTo(w, C);
  }, m.prototype.fillRect = function(w, C, T, q) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q)) throw kt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var Y = {};
      this.lineCap !== "butt" && (Y.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Y.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(w, C, T, q), this.fill(), Y.hasOwnProperty("lineCap") && (this.lineCap = Y.lineCap), Y.hasOwnProperty("lineJoin") && (this.lineJoin = Y.lineJoin);
    }
  }, m.prototype.strokeRect = function(w, C, T, q) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q)) throw kt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    M.call(this) || (this.beginPath(), this.rect(w, C, T, q), this.stroke());
  }, m.prototype.clearRect = function(w, C, T, q) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q)) throw kt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(w, C, T, q));
  }, m.prototype.save = function(w) {
    w = typeof w != "boolean" || w;
    for (var C = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(C), w) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var q = new y(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = q;
    }
  }, m.prototype.restore = function(w) {
    w = typeof w != "boolean" || w;
    for (var C = this.pdf.internal.getCurrentPageInfo().pageNumber, T = 0; T < this.pdf.internal.getNumberOfPages(); T++) this.pdf.setPage(T + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(C), w && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, m.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var x = function(w) {
    var C, T, q, Y;
    if (w.isCanvasGradient === !0 && (w = w.getColor()), !w) return { r: 0, g: 0, b: 0, a: 0, style: w };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(w)) C = 0, T = 0, q = 0, Y = 0;
    else {
      var oe = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(w);
      if (oe !== null) C = parseInt(oe[1]), T = parseInt(oe[2]), q = parseInt(oe[3]), Y = 1;
      else if ((oe = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(w)) !== null) C = parseInt(oe[1]), T = parseInt(oe[2]), q = parseInt(oe[3]), Y = parseFloat(oe[4]);
      else {
        if (Y = 1, typeof w == "string" && w.charAt(0) !== "#") {
          var ne = new n1(w);
          w = ne.ok ? ne.toHex() : "#000000";
        }
        w.length === 4 ? (C = w.substring(1, 2), C += C, T = w.substring(2, 3), T += T, q = w.substring(3, 4), q += q) : (C = w.substring(1, 3), T = w.substring(3, 5), q = w.substring(5, 7)), C = parseInt(C, 16), T = parseInt(T, 16), q = parseInt(q, 16);
      }
    }
    return { r: C, g: T, b: q, a: Y, style: w };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, M = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  m.prototype.fillText = function(w, C, T, q) {
    if (isNaN(C) || isNaN(T) || typeof w != "string") throw kt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (q = isNaN(q) ? void 0 : q, !p.call(this)) {
      var Y = Z(this.ctx.transform.rotation), oe = this.ctx.transform.scaleX;
      _.call(this, { text: w, x: C, y: T, scale: oe, angle: Y, align: this.textAlign, maxWidth: q });
    }
  }, m.prototype.strokeText = function(w, C, T, q) {
    if (isNaN(C) || isNaN(T) || typeof w != "string") throw kt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!M.call(this)) {
      q = isNaN(q) ? void 0 : q;
      var Y = Z(this.ctx.transform.rotation), oe = this.ctx.transform.scaleX;
      _.call(this, { text: w, x: C, y: T, scale: oe, renderingMode: "stroke", angle: Y, align: this.textAlign, maxWidth: q });
    }
  }, m.prototype.measureText = function(w) {
    if (typeof w != "string") throw kt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var C = this.pdf, T = this.pdf.internal.scaleFactor, q = C.internal.getFontSize(), Y = C.getStringUnitWidth(w) * q / C.internal.scaleFactor, oe = function(ne) {
      var ue = (ne = ne || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return ue;
      } }), this;
    };
    return new oe({ width: Y *= Math.round(96 * T / 72 * 1e4) / 1e4 });
  }, m.prototype.scale = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw kt.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var T = new f(w, 0, 0, C, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, m.prototype.rotate = function(w) {
    if (isNaN(w)) throw kt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var C = new f(Math.cos(w), Math.sin(w), -Math.sin(w), Math.cos(w), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(C);
  }, m.prototype.translate = function(w, C) {
    if (isNaN(w) || isNaN(C)) throw kt.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var T = new f(1, 0, 0, 1, w, C);
    this.ctx.transform = this.ctx.transform.multiply(T);
  }, m.prototype.transform = function(w, C, T, q, Y, oe) {
    if (isNaN(w) || isNaN(C) || isNaN(T) || isNaN(q) || isNaN(Y) || isNaN(oe)) throw kt.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var ne = new f(w, C, T, q, Y, oe);
    this.ctx.transform = this.ctx.transform.multiply(ne);
  }, m.prototype.setTransform = function(w, C, T, q, Y, oe) {
    w = isNaN(w) ? 1 : w, C = isNaN(C) ? 0 : C, T = isNaN(T) ? 0 : T, q = isNaN(q) ? 1 : q, Y = isNaN(Y) ? 0 : Y, oe = isNaN(oe) ? 0 : oe, this.ctx.transform = new f(w, C, T, q, Y, oe);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  m.prototype.drawImage = function(w, C, T, q, Y, oe, ne, ue, Me) {
    var Ce = this.pdf.getImageProperties(w), Ee = 1, Fe = 1, Je = 1, we = 1;
    q !== void 0 && ue !== void 0 && (Je = ue / q, we = Me / Y, Ee = Ce.width / q * ue / q, Fe = Ce.height / Y * Me / Y), oe === void 0 && (oe = C, ne = T, C = 0, T = 0), q !== void 0 && ue === void 0 && (ue = q, Me = Y), q === void 0 && ue === void 0 && (ue = Ce.width, Me = Ce.height);
    for (var B, rt = this.ctx.transform.decompose(), He = Z(rt.rotate.shx), ve = new f(), Ne = (ve = (ve = (ve = ve.multiply(rt.translate)).multiply(rt.skew)).multiply(rt.scale)).applyToRectangle(new h(oe - C * Je, ne - T * we, q * Ee, Y * Fe)), se = O.call(this, Ne), pe = [], ge = 0; ge < se.length; ge += 1) pe.indexOf(se[ge]) === -1 && pe.push(se[ge]);
    if (W(pe), this.autoPaging) for (var K = pe[0], je = pe[pe.length - 1], ze = K; ze < je + 1; ze++) {
      this.pdf.setPage(ze);
      var Ke = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], We = ze === 1 ? this.posY + this.margin[0] : this.margin[0], Re = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ye = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], te = ze === 1 ? 0 : Re + (ze - 2) * Ye;
      if (this.ctx.clip_path.length !== 0) {
        var Ge = this.path;
        B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(B, this.posX + this.margin[3], -te + We + this.ctx.prevPageLastElemOffset), me.call(this, "fill", !0), this.path = Ge;
      }
      var De = JSON.parse(JSON.stringify(Ne));
      De = F([De], this.posX + this.margin[3], -te + We + this.ctx.prevPageLastElemOffset)[0];
      var Ue = (ze > K || ze < je) && I.call(this);
      Ue && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Ke, Ye, null).clip().discardPath()), this.pdf.addImage(w, "JPEG", De.x, De.y, De.w, De.h, null, null, He), Ue && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(w, "JPEG", Ne.x, Ne.y, Ne.w, Ne.h, null, null, He);
  };
  var O = function(w, C, T) {
    var q = [];
    C = C || this.pdf.internal.pageSize.width, T = T || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var Y = this.posY + this.ctx.prevPageLastElemOffset;
    switch (w.type) {
      default:
      case "mt":
      case "lt":
        q.push(Math.floor((w.y + Y) / T) + 1);
        break;
      case "arc":
        q.push(Math.floor((w.y + Y - w.radius) / T) + 1), q.push(Math.floor((w.y + Y + w.radius) / T) + 1);
        break;
      case "qct":
        var oe = fe(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x, w.y);
        q.push(Math.floor((oe.y + Y) / T) + 1), q.push(Math.floor((oe.y + oe.h + Y) / T) + 1);
        break;
      case "bct":
        var ne = D(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x2, w.y2, w.x, w.y);
        q.push(Math.floor((ne.y + Y) / T) + 1), q.push(Math.floor((ne.y + ne.h + Y) / T) + 1);
        break;
      case "rect":
        q.push(Math.floor((w.y + Y) / T) + 1), q.push(Math.floor((w.y + w.h + Y) / T) + 1);
    }
    for (var ue = 0; ue < q.length; ue += 1) for (; this.pdf.internal.getNumberOfPages() < q[ue]; ) k.call(this);
    return q;
  }, k = function() {
    var w = this.fillStyle, C = this.strokeStyle, T = this.font, q = this.lineCap, Y = this.lineWidth, oe = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = w, this.strokeStyle = C, this.font = T, this.lineCap = q, this.lineWidth = Y, this.lineJoin = oe;
  }, F = function(w, C, T) {
    for (var q = 0; q < w.length; q++) switch (w[q].type) {
      case "bct":
        w[q].x2 += C, w[q].y2 += T;
      case "qct":
        w[q].x1 += C, w[q].y1 += T;
      case "mt":
      case "lt":
      case "arc":
      default:
        w[q].x += C, w[q].y += T;
    }
    return w;
  }, W = function(w) {
    return w.sort(function(C, T) {
      return C - T;
    });
  }, ae = function(w, C) {
    for (var T, q, Y = this.fillStyle, oe = this.strokeStyle, ne = this.lineCap, ue = this.lineWidth, Me = Math.abs(ue * this.ctx.transform.scaleX), Ce = this.lineJoin, Ee = JSON.parse(JSON.stringify(this.path)), Fe = JSON.parse(JSON.stringify(this.path)), Je = [], we = 0; we < Fe.length; we++) if (Fe[we].x !== void 0) for (var B = O.call(this, Fe[we]), rt = 0; rt < B.length; rt += 1) Je.indexOf(B[rt]) === -1 && Je.push(B[rt]);
    for (var He = 0; He < Je.length; He++) for (; this.pdf.internal.getNumberOfPages() < Je[He]; ) k.call(this);
    if (W(Je), this.autoPaging) for (var ve = Je[0], Ne = Je[Je.length - 1], se = ve; se < Ne + 1; se++) {
      this.pdf.setPage(se), this.fillStyle = Y, this.strokeStyle = oe, this.lineCap = ne, this.lineWidth = Me, this.lineJoin = Ce;
      var pe = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ge = se === 1 ? this.posY + this.margin[0] : this.margin[0], K = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], je = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], ze = se === 1 ? 0 : K + (se - 2) * je;
      if (this.ctx.clip_path.length !== 0) {
        var Ke = this.path;
        T = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(T, this.posX + this.margin[3], -ze + ge + this.ctx.prevPageLastElemOffset), me.call(this, w, !0), this.path = Ke;
      }
      if (q = JSON.parse(JSON.stringify(Ee)), this.path = F(q, this.posX + this.margin[3], -ze + ge + this.ctx.prevPageLastElemOffset), C === !1 || se === 0) {
        var We = (se > ve || se < Ne) && I.call(this);
        We && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], pe, je, null).clip().discardPath()), me.call(this, w, C), We && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = ue;
    }
    else this.lineWidth = Me, me.call(this, w, C), this.lineWidth = ue;
    this.path = Ee;
  }, me = function(w, C) {
    if ((w !== "stroke" || C || !M.call(this)) && (w === "stroke" || C || !p.call(this))) {
      for (var T, q, Y = [], oe = this.path, ne = 0; ne < oe.length; ne++) {
        var ue = oe[ne];
        switch (ue.type) {
          case "begin":
            Y.push({ begin: !0 });
            break;
          case "close":
            Y.push({ close: !0 });
            break;
          case "mt":
            Y.push({ start: ue, deltas: [], abs: [] });
            break;
          case "lt":
            var Me = Y.length;
            if (oe[ne - 1] && !isNaN(oe[ne - 1].x) && (T = [ue.x - oe[ne - 1].x, ue.y - oe[ne - 1].y], Me > 0)) {
              for (; Me >= 0; Me--) if (Y[Me - 1].close !== !0 && Y[Me - 1].begin !== !0) {
                Y[Me - 1].deltas.push(T), Y[Me - 1].abs.push(ue);
                break;
              }
            }
            break;
          case "bct":
            T = [ue.x1 - oe[ne - 1].x, ue.y1 - oe[ne - 1].y, ue.x2 - oe[ne - 1].x, ue.y2 - oe[ne - 1].y, ue.x - oe[ne - 1].x, ue.y - oe[ne - 1].y], Y[Y.length - 1].deltas.push(T);
            break;
          case "qct":
            var Ce = oe[ne - 1].x + 2 / 3 * (ue.x1 - oe[ne - 1].x), Ee = oe[ne - 1].y + 2 / 3 * (ue.y1 - oe[ne - 1].y), Fe = ue.x + 2 / 3 * (ue.x1 - ue.x), Je = ue.y + 2 / 3 * (ue.y1 - ue.y), we = ue.x, B = ue.y;
            T = [Ce - oe[ne - 1].x, Ee - oe[ne - 1].y, Fe - oe[ne - 1].x, Je - oe[ne - 1].y, we - oe[ne - 1].x, B - oe[ne - 1].y], Y[Y.length - 1].deltas.push(T);
            break;
          case "arc":
            Y.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(ue);
        }
      }
      q = C ? null : w === "stroke" ? "stroke" : "fill";
      for (var rt = !1, He = 0; He < Y.length; He++) if (Y[He].arc) for (var ve = Y[He].abs, Ne = 0; Ne < ve.length; Ne++) {
        var se = ve[Ne];
        se.type === "arc" ? z.call(this, se.x, se.y, se.radius, se.startAngle, se.endAngle, se.counterclockwise, void 0, C, !rt) : U.call(this, se.x, se.y), rt = !0;
      }
      else if (Y[He].close === !0) this.pdf.internal.out("h"), rt = !1;
      else if (Y[He].begin !== !0) {
        var pe = Y[He].start.x, ge = Y[He].start.y;
        R.call(this, Y[He].deltas, pe, ge), rt = !0;
      }
      q && ie.call(this, q), C && ye.call(this);
    }
  }, Se = function(w) {
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
  }, re = function(w) {
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
  var z = function(w, C, T, q, Y, oe, ne, ue, Me) {
    for (var Ce = he.call(this, T, q, Y, oe), Ee = 0; Ee < Ce.length; Ee++) {
      var Fe = Ce[Ee];
      Ee === 0 && (Me ? N.call(this, Fe.x1 + w, Fe.y1 + C) : U.call(this, Fe.x1 + w, Fe.y1 + C)), de.call(this, w, C, Fe.x2, Fe.y2, Fe.x3, Fe.y3, Fe.x4, Fe.y4);
    }
    ue ? ye.call(this) : ie.call(this, ne);
  }, ie = function(w) {
    switch (w) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, ye = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, N = function(w, C) {
    this.pdf.internal.out(r(w) + " " + a(C) + " m");
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
    var T = this.pdf.getTextDimensions(w.text), q = Se.call(this, w.y), Y = re.call(this, q) - T.h, oe = this.ctx.transform.applyToPoint(new l(w.x, q)), ne = this.ctx.transform.decompose(), ue = new f();
    ue = (ue = (ue = ue.multiply(ne.translate)).multiply(ne.skew)).multiply(ne.scale);
    for (var Me, Ce, Ee, Fe = this.ctx.transform.applyToRectangle(new h(w.x, q, T.w, T.h)), Je = ue.applyToRectangle(new h(w.x, Y, T.w, T.h)), we = O.call(this, Je), B = [], rt = 0; rt < we.length; rt += 1) B.indexOf(we[rt]) === -1 && B.push(we[rt]);
    if (W(B), this.autoPaging) for (var He = B[0], ve = B[B.length - 1], Ne = He; Ne < ve + 1; Ne++) {
      this.pdf.setPage(Ne);
      var se = Ne === 1 ? this.posY + this.margin[0] : this.margin[0], pe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ge = this.pdf.internal.pageSize.height - this.margin[2], K = ge - this.margin[0], je = this.pdf.internal.pageSize.width - this.margin[1], ze = je - this.margin[3], Ke = Ne === 1 ? 0 : pe + (Ne - 2) * K;
      if (this.ctx.clip_path.length !== 0) {
        var We = this.path;
        Me = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = F(Me, this.posX + this.margin[3], -1 * Ke + se), me.call(this, "fill", !0), this.path = We;
      }
      var Re = F([JSON.parse(JSON.stringify(Je))], this.posX + this.margin[3], -Ke + se + this.ctx.prevPageLastElemOffset)[0];
      w.scale >= 0.01 && (Ce = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Ce * w.scale), Ee = this.lineWidth, this.lineWidth = Ee * w.scale);
      var Ye = this.autoPaging !== "text";
      if (Ye || Re.y + Re.h <= ge) {
        if (Ye || Re.y >= se && Re.x <= je) {
          var te = Ye ? w.text : this.pdf.splitTextToSize(w.text, w.maxWidth || je - Re.x)[0], Ge = F([JSON.parse(JSON.stringify(Fe))], this.posX + this.margin[3], -Ke + se + this.ctx.prevPageLastElemOffset)[0], De = Ye && (Ne > He || Ne < ve) && I.call(this);
          De && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ze, K, null).clip().discardPath()), this.pdf.text(te, Ge.x, Ge.y, { angle: w.angle, align: C, renderingMode: w.renderingMode }), De && this.pdf.restoreGraphicsState();
        }
      } else Re.y < ge && (this.ctx.prevPageLastElemOffset += ge - Re.y);
      w.scale >= 0.01 && (this.pdf.setFontSize(Ce), this.lineWidth = Ee);
    }
    else w.scale >= 0.01 && (Ce = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Ce * w.scale), Ee = this.lineWidth, this.lineWidth = Ee * w.scale), this.pdf.text(w.text, oe.x + this.posX, oe.y + this.posY, { angle: w.angle, align: C, renderingMode: w.renderingMode, maxWidth: w.maxWidth }), w.scale >= 0.01 && (this.pdf.setFontSize(Ce), this.lineWidth = Ee);
  }, U = function(w, C, T, q) {
    T = T || 0, q = q || 0, this.pdf.internal.out(r(w + T) + " " + a(C + q) + " l");
  }, R = function(w, C, T) {
    return this.pdf.lines(w, C, T, null, null);
  }, de = function(w, C, T, q, Y, oe, ne, ue) {
    this.pdf.internal.out([e(s(T + w)), e(i(q + C)), e(s(Y + w)), e(i(oe + C)), e(s(ne + w)), e(i(ue + C)), "c"].join(" "));
  }, he = function(w, C, T, q) {
    for (var Y = 2 * Math.PI, oe = Math.PI / 2; C > T; ) C -= Y;
    var ne = Math.abs(T - C);
    ne < Y && q && (ne = Y - ne);
    for (var ue = [], Me = q ? -1 : 1, Ce = C; ne > 1e-5; ) {
      var Ee = Ce + Me * Math.min(ne, oe);
      ue.push(Q.call(this, w, Ce, Ee)), ne -= Math.abs(Ee - Ce), Ce = Ee;
    }
    return ue;
  }, Q = function(w, C, T) {
    var q = (T - C) / 2, Y = w * Math.cos(q), oe = w * Math.sin(q), ne = Y, ue = -oe, Me = ne * ne + ue * ue, Ce = Me + ne * Y + ue * oe, Ee = 4 / 3 * (Math.sqrt(2 * Me * Ce) - Ce) / (ne * oe - ue * Y), Fe = ne - Ee * ue, Je = ue + Ee * ne, we = Fe, B = -Je, rt = q + C, He = Math.cos(rt), ve = Math.sin(rt);
    return { x1: w * Math.cos(C), y1: w * Math.sin(C), x2: Fe * He - Je * ve, y2: Fe * ve + Je * He, x3: we * He - B * ve, y3: we * ve + B * He, x4: w * Math.cos(T), y4: w * Math.sin(T) };
  }, Z = function(w) {
    return 180 * w / Math.PI;
  }, fe = function(w, C, T, q, Y, oe) {
    var ne = w + 0.5 * (T - w), ue = C + 0.5 * (q - C), Me = Y + 0.5 * (T - Y), Ce = oe + 0.5 * (q - oe), Ee = Math.min(w, Y, ne, Me), Fe = Math.max(w, Y, ne, Me), Je = Math.min(C, oe, ue, Ce), we = Math.max(C, oe, ue, Ce);
    return new h(Ee, Je, Fe - Ee, we - Je);
  }, D = function(w, C, T, q, Y, oe, ne, ue) {
    var Me, Ce, Ee, Fe, Je, we, B, rt, He, ve, Ne, se, pe, ge, K = T - w, je = q - C, ze = Y - T, Ke = oe - q, We = ne - Y, Re = ue - oe;
    for (Ce = 0; Ce < 41; Ce++) He = (B = (Ee = w + (Me = Ce / 40) * K) + Me * ((Je = T + Me * ze) - Ee)) + Me * (Je + Me * (Y + Me * We - Je) - B), ve = (rt = (Fe = C + Me * je) + Me * ((we = q + Me * Ke) - Fe)) + Me * (we + Me * (oe + Me * Re - we) - rt), Ce == 0 ? (Ne = He, se = ve, pe = He, ge = ve) : (Ne = Math.min(Ne, He), se = Math.min(se, ve), pe = Math.max(pe, He), ge = Math.max(ge, ve));
    return new h(Math.round(Ne), Math.round(se), Math.round(pe - Ne), Math.round(ge - se));
  }, Le = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var w, C, T = (w = this.ctx.lineDash, C = this.ctx.lineDashOffset, JSON.stringify({ lineDash: w, lineDashOffset: C }));
      this.prevLineDash !== T && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = T);
    }
  };
})(tt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function(i) {
    var l, h, f, g, y, m, x, p, M, I;
    for (h = [], f = 0, g = (i += l = "\0\0\0\0".slice(i.length % 4 || 4)).length; g > f; f += 4) (y = (i.charCodeAt(f) << 24) + (i.charCodeAt(f + 1) << 16) + (i.charCodeAt(f + 2) << 8) + i.charCodeAt(f + 3)) !== 0 ? (m = (y = ((y = ((y = ((y = (y - (I = y % 85)) / 85) - (M = y % 85)) / 85) - (p = y % 85)) / 85) - (x = y % 85)) / 85) % 85, h.push(m + 33, x + 33, p + 33, M + 33, I + 33)) : h.push(122);
    return function(O, k) {
      for (var F = k; F > 0; F--) O.pop();
    }(h, l.length), String.fromCharCode.apply(String, h) + "~>";
  }, r = function(i) {
    var l, h, f, g, y, m = String, x = "length", p = 255, M = "charCodeAt", I = "slice", O = "replace";
    for (i[I](-2), i = i[I](0, -2)[O](/\s/g, "")[O]("z", "!!!!!"), f = [], g = 0, y = (i += l = "uuuuu"[I](i[x] % 5 || 5))[x]; y > g; g += 5) h = 52200625 * (i[M](g) - 33) + 614125 * (i[M](g + 1) - 33) + 7225 * (i[M](g + 2) - 33) + 85 * (i[M](g + 3) - 33) + (i[M](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(k, F) {
      for (var W = F; W > 0; W--) k.pop();
    }(f, l[x]), m.fromCharCode.apply(m, f);
  }, a = function(i) {
    var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((i = i.replace(/\s/g, "")).indexOf(">") !== -1 && (i = i.substr(0, i.indexOf(">"))), i.length % 2 && (i += "0"), l.test(i) === !1) return "";
    for (var h = "", f = 0; f < i.length; f += 2) h += String.fromCharCode("0x" + (i[f] + i[f + 1]));
    return h;
  }, s = function(i) {
    for (var l = new Uint8Array(i.length), h = i.length; h--; ) l[h] = i.charCodeAt(h);
    return i = (l = $s(l)).reduce(function(f, g) {
      return f + String.fromCharCode(g);
    }, "");
  };
  n.processDataByFilters = function(i, l) {
    var h = 0, f = i || "", g = [];
    for (typeof (l = l || []) == "string" && (l = [l]), h = 0; h < l.length; h += 1) switch (l[h]) {
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
        f = a(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(y) {
          return ("0" + y.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = s(f), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + l[h] + '" is not implemented');
    }
    return { data: f, reverseChain: g.reverse().join(" ") };
  };
}(tt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.loadFile = function(e, r, a) {
    return function(s, i, l) {
      i = i !== !1, l = typeof l == "function" ? l : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, y) {
          var m = new XMLHttpRequest(), x = 0, p = function(M) {
            var I = M.length, O = [], k = String.fromCharCode;
            for (x = 0; x < I; x += 1) O.push(k(255 & M.charCodeAt(x)));
            return O.join("");
          };
          if (m.open("GET", f, !g), m.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (m.onload = function() {
            m.status === 200 ? y(p(this.responseText)) : y(void 0);
          }), m.send(null), g && m.status === 200) return p(m.responseText);
        }(s, i, l);
      } catch {
      }
      return h;
    }(e, r, a);
  }, n.loadImageFile = n.loadFile;
}(tt.API), function(n) {
  function e() {
    return (nt.html2canvas ? Promise.resolve(nt.html2canvas) : import("./html2canvas.esm-DgdJBc_o.mjs")).catch(function(l) {
      return Promise.reject(new Error("Could not load html2canvas: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  function r() {
    return (nt.DOMPurify ? Promise.resolve(nt.DOMPurify) : import("./purify.es-DHbHSKL1.mjs")).catch(function(l) {
      return Promise.reject(new Error("Could not load dompurify: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  var a = function(l) {
    var h = At(l);
    return h === "undefined" ? "undefined" : h === "string" || l instanceof String ? "string" : h === "number" || l instanceof Number ? "number" : h === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, s = function(l, h) {
    var f = document.createElement(l);
    for (var g in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) f.style[g] = h.style[g];
    return f;
  }, i = function l(h) {
    var f = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), g = l.convert(Promise.resolve(), f);
    return g = (g = g.setProgress(1, l, 1, [l])).set(h);
  };
  (i.prototype = Object.create(Promise.prototype)).constructor = i, i.convert = function(l, h) {
    return l.__proto__ = h || i.prototype, l;
  }, i.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, i.prototype.from = function(l, h) {
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
      }(l)) {
        case "string":
          return this.then(r).then(function(f) {
            return this.set({ src: s("div", { innerHTML: l, dompurify: f }) });
          });
        case "element":
          return this.set({ src: l });
        case "canvas":
          return this.set({ canvas: l });
        case "img":
          return this.set({ img: l });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, i.prototype.to = function(l) {
    switch (l) {
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
  }, i.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var l = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, y) {
        for (var m = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), x = g.firstChild; x; x = x.nextSibling) y !== !0 && x.nodeType === 1 && x.nodeName === "SCRIPT" || m.appendChild(f(x, y));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (m.width = g.width, m.height = g.height, m.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (m.value = g.value), m.addEventListener("load", function() {
          m.scrollTop = g.scrollTop, m.scrollLeft = g.scrollLeft;
        }, !0)), m;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = s("div", { className: "html2pdf__container", style: l }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, i.prototype.toCanvas = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, h(this.prop.container, f);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, i.prototype.toContext2d = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, y = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, m = Object.assign({ async: !0, allowTaint: !0, scale: y, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
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
  }, i.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = l;
    });
  }, i.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, i.prototype.output = function(l, h, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(l, h) : this.outputPdf(l, h);
  }, i.prototype.outputPdf = function(l, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(l, h);
    });
  }, i.prototype.outputImg = function(l) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (l) {
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
          throw 'Image output type "' + l + '" is not supported.';
      }
    });
  }, i.prototype.save = function(l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(l ? { filename: l } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, i.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, i.prototype.set = function(l) {
    if (a(l) !== "object") return this;
    var h = Object.keys(l || {}).map(function(f) {
      if (f in i.template.prop) return function() {
        this.prop[f] = l[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, l.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = l.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, l.pageSize);
        default:
          return function() {
            this.opt[f] = l[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, i.prototype.get = function(l, h) {
    return this.then(function() {
      var f = l in i.template.prop ? this.prop[l] : this.opt[l];
      return h ? h(f) : f;
    });
  }, i.prototype.setMargin = function(l) {
    return this.then(function() {
      switch (a(l)) {
        case "number":
          l = [l, l, l, l];
        case "array":
          if (l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = l;
    }).then(this.setPageSize);
  }, i.prototype.setPageSize = function(l) {
    function h(f, g) {
      return Math.floor(f * g / 72 * 96);
    }
    return this.then(function() {
      (l = l || tt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = { width: l.width - this.opt.margin[1] - this.opt.margin[3], height: l.height - this.opt.margin[0] - this.opt.margin[2] }, l.inner.px = { width: h(l.inner.width, l.k), height: h(l.inner.height, l.k) }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
    });
  }, i.prototype.setProgress = function(l, h, f, g) {
    return l != null && (this.progress.val = l), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, i.prototype.updateProgress = function(l, h, f, g) {
    return this.setProgress(l ? this.progress.val + l : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, i.prototype.then = function(l, h) {
    var f = this;
    return this.thenCore(l, h, function(g, y) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(m) {
        return f.updateProgress(null, g), m;
      }).then(g, y).then(function(m) {
        return f.updateProgress(1), m;
      });
    });
  }, i.prototype.thenCore = function(l, h, f) {
    f = f || Promise.prototype.then, l && (l = l.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : i.convert(Object.assign({}, this), Promise.prototype), y = f.call(g, l, h);
    return i.convert(y, this.__proto__);
  }, i.prototype.thenExternal = function(l, h) {
    return Promise.prototype.then.call(this, l, h);
  }, i.prototype.thenList = function(l) {
    var h = this;
    return l.forEach(function(f) {
      h = h.thenCore(f);
    }), h;
  }, i.prototype.catch = function(l) {
    l && (l = l.bind(this));
    var h = Promise.prototype.catch.call(this, l);
    return i.convert(h, this);
  }, i.prototype.catchExternal = function(l) {
    return Promise.prototype.catch.call(this, l);
  }, i.prototype.error = function(l) {
    return this.then(function() {
      throw new Error(l);
    });
  }, i.prototype.using = i.prototype.set, i.prototype.saveAs = i.prototype.save, i.prototype.export = i.prototype.output, i.prototype.run = i.prototype.then, tt.getPageSize = function(l, h, f) {
    if (At(l) === "object") {
      var g = l;
      l = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", l = ("" + (l || "P")).toLowerCase();
    var y, m = ("" + f).toLowerCase(), x = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        y = 1;
        break;
      case "mm":
        y = 72 / 25.4;
        break;
      case "cm":
        y = 72 / 2.54;
        break;
      case "in":
        y = 72;
        break;
      case "px":
        y = 0.75;
        break;
      case "pc":
      case "em":
        y = 12;
        break;
      case "ex":
        y = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var p, M = 0, I = 0;
    if (x.hasOwnProperty(m)) M = x[m][1] / y, I = x[m][0] / y;
    else try {
      M = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (l === "p" || l === "portrait") l = "p", I > M && (p = I, I = M, M = p);
    else {
      if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
      l = "l", M > I && (p = I, I = M, M = p);
    }
    return { width: I, height: M, unit: h, k: y, orientation: l };
  }, n.html = function(l, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(ec) : null;
    var f = new i(h);
    return h.worker ? f : f.from(l).doCallback();
  };
}(tt.API), tt.API.addJS = function(n) {
  return El = n, this.internal.events.subscribe("postPutResources", function() {
    ko = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (ko + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Fl = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + El + ")"), this.internal.out(">>"), this.internal.out("endobj");
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
    var r = this, a = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var s = r.outline.render().split(/\r\n/), i = 0; i < s.length; i++) {
      var l = s[i], h = a.exec(l);
      if (h != null) {
        var f = h[1];
        r.internal.newObjectDeferredBegin(f, !1);
      }
      r.internal.write(l);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, y = [];
      for (i = 0; i < g; i++) {
        var m = r.internal.newObject();
        y.push(m);
        var x = r.internal.getPageInfo(i + 1);
        r.internal.write("<< /D[" + x.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = r.internal.newObject();
      for (r.internal.write("<< /Names [ "), i = 0; i < y.length; i++) r.internal.write("(page_" + (i + 1) + ")" + y[i] + " 0 R");
      r.internal.write(" ] >>", "endobj"), e = r.internal.newObject(), r.internal.write("<< /Dests " + p + " 0 R"), r.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var r = this;
    r.outline = { createNamedDestinations: !1, root: { children: [] } }, r.outline.add = function(a, s, i) {
      var l = { title: s, options: i, children: [] };
      return a == null && (a = this.root), a.children.push(l), l;
    }, r.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = r, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, r.outline.genIds_r = function(a) {
      a.id = r.internal.newObjectDeferred();
      for (var s = 0; s < a.children.length; s++) this.genIds_r(a.children[s]);
    }, r.outline.renderRoot = function(a) {
      this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, a)), this.objEnd();
    }, r.outline.renderItems = function(a) {
      for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, i = 0; i < a.children.length; i++) {
        var l = a.children[i];
        this.objStart(l), this.line("/Title " + this.makeString(l.title)), this.line("/Parent " + this.makeRef(a)), i > 0 && this.line("/Prev " + this.makeRef(a.children[i - 1])), i < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[i + 1])), l.children.length > 0 && (this.line("/First " + this.makeRef(l.children[0])), this.line("/Last " + this.makeRef(l.children[l.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, l);
        if (h > 0 && this.line("/Count " + h), l.options && l.options.pageNumber) {
          var f = r.internal.getPageInfo(l.options.pageNumber);
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
      for (var i = 0; i < s.children.length; i++) a.count++, this.count_r(a, s.children[i]);
      return a.count;
    };
  }]);
}(tt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(r, a, s, i, l, h) {
    var f, g = this.decode.DCT_DECODE, y = null;
    if (typeof r == "string" || this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) {
      switch (r = l || r, r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r, (f = function(m) {
        for (var x, p = 256 * m.charCodeAt(4) + m.charCodeAt(5), M = m.length, I = { width: 0, height: 0, numcomponents: 1 }, O = 4; O < M; O += 2) {
          if (O += p, e.indexOf(m.charCodeAt(O + 1)) !== -1) {
            x = 256 * m.charCodeAt(O + 5) + m.charCodeAt(O + 6), I = { width: 256 * m.charCodeAt(O + 7) + m.charCodeAt(O + 8), height: x, numcomponents: m.charCodeAt(O + 9) };
            break;
          }
          p = 256 * m.charCodeAt(O + 2) + m.charCodeAt(O + 3);
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
      y = { data: r, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: a, alias: s };
    }
    return y;
  };
}(tt.API);
var zi, Po, Ol, Rl, Tl, Ch = function() {
  var n, e, r;
  function a(i) {
    var l, h, f, g, y, m, x, p, M, I, O, k, F, W;
    for (this.data = i, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, m = null; ; ) {
      switch (l = this.readUInt32(), M = (function() {
        var ae, me;
        for (me = [], ae = 0; ae < 4; ++ae) me.push(String.fromCharCode(this.data[this.pos++]));
        return me;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(l);
          break;
        case "fcTL":
          m && this.animation.frames.push(m), this.pos += 4, m = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, y = this.readUInt16(), g = this.readUInt16() || 100, m.delay = 1e3 * y / g, m.disposeOp = this.data[this.pos++], m.blendOp = this.data[this.pos++], m.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (M === "fdAT" && (this.pos += 4, l -= 4), i = (m != null ? m.data : void 0) || this.imgData, k = 0; 0 <= l ? k < l : k > l; 0 <= l ? ++k : --k) i.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(l), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (F = 0; 0 <= I ? F < I : F > I; 0 <= I ? ++F : --F) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(l)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(l);
          }
          break;
        case "tEXt":
          x = (O = this.read(l)).indexOf(0), p = String.fromCharCode.apply(String, O.slice(0, x)), this.text[p] = String.fromCharCode.apply(String, O.slice(x + 1));
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
          }).call(this), this.hasAlphaChannel = (W = this.colorType) === 4 || W === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += l;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  a.prototype.read = function(i) {
    var l, h;
    for (h = [], l = 0; 0 <= i ? l < i : l > i; 0 <= i ? ++l : --l) h.push(this.data[this.pos++]);
    return h;
  }, a.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.decodePixels = function(i) {
    var l = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * l), f = 0, g = this;
    if (i == null && (i = this.imgData), i.length === 0) return new Uint8Array(0);
    function y(m, x, p, M) {
      var I, O, k, F, W, ae, me, Se, re, z, ie, ye, N, _, U, R, de, he, Q, Z, fe, D = Math.ceil((g.width - m) / p), Le = Math.ceil((g.height - x) / M), w = g.width == D && g.height == Le;
      for (_ = l * D, ye = w ? h : new Uint8Array(_ * Le), ae = i.length, N = 0, O = 0; N < Le && f < ae; ) {
        switch (i[f++]) {
          case 0:
            for (F = de = 0; de < _; F = de += 1) ye[O++] = i[f++];
            break;
          case 1:
            for (F = he = 0; he < _; F = he += 1) I = i[f++], W = F < l ? 0 : ye[O - l], ye[O++] = (I + W) % 256;
            break;
          case 2:
            for (F = Q = 0; Q < _; F = Q += 1) I = i[f++], k = (F - F % l) / l, U = N && ye[(N - 1) * _ + k * l + F % l], ye[O++] = (U + I) % 256;
            break;
          case 3:
            for (F = Z = 0; Z < _; F = Z += 1) I = i[f++], k = (F - F % l) / l, W = F < l ? 0 : ye[O - l], U = N && ye[(N - 1) * _ + k * l + F % l], ye[O++] = (I + Math.floor((W + U) / 2)) % 256;
            break;
          case 4:
            for (F = fe = 0; fe < _; F = fe += 1) I = i[f++], k = (F - F % l) / l, W = F < l ? 0 : ye[O - l], N === 0 ? U = R = 0 : (U = ye[(N - 1) * _ + k * l + F % l], R = k && ye[(N - 1) * _ + (k - 1) * l + F % l]), me = W + U - R, Se = Math.abs(me - W), z = Math.abs(me - U), ie = Math.abs(me - R), re = Se <= z && Se <= ie ? W : z <= ie ? U : R, ye[O++] = (I + re) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + i[f - 1]);
        }
        if (!w) {
          var C = ((x + N * M) * g.width + m) * l, T = N * _;
          for (F = 0; F < D; F += 1) {
            for (var q = 0; q < l; q += 1) h[C++] = ye[T++];
            C += (p - 1) * l;
          }
        }
        N++;
      }
    }
    return i = ch(i), g.interlaceMethod == 1 ? (y(0, 0, 8, 8), y(4, 0, 8, 8), y(0, 4, 4, 8), y(2, 0, 4, 4), y(0, 2, 2, 4), y(1, 0, 2, 2), y(0, 1, 1, 2)) : y(0, 0, 1, 1), h;
  }, a.prototype.decodePalette = function() {
    var i, l, h, f, g, y, m, x, p;
    for (h = this.palette, y = this.transparency.indexed || [], g = new Uint8Array((y.length || 0) + h.length), f = 0, i = 0, l = m = 0, x = h.length; m < x; l = m += 3) g[f++] = h[l], g[f++] = h[l + 1], g[f++] = h[l + 2], g[f++] = (p = y[i++]) != null ? p : 255;
    return g;
  }, a.prototype.copyToImageData = function(i, l) {
    var h, f, g, y, m, x, p, M, I, O, k;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (k = this._decodedPalette) != null ? k : this._decodedPalette = this.decodePalette(), f = 4, h = !0), M = (g = i.data || i).length, m = I || l, y = x = 0, f === 1) for (; y < M; ) p = I ? 4 * l[y / 4] : x, O = m[p++], g[y++] = O, g[y++] = O, g[y++] = O, g[y++] = h ? m[p++] : 255, x = p;
    else for (; y < M; ) p = I ? 4 * l[y / 4] : x, g[y++] = m[p++], g[y++] = m[p++], g[y++] = m[p++], g[y++] = h ? m[p++] : 255, x = p;
  }, a.prototype.decode = function() {
    var i;
    return i = new Uint8Array(this.width * this.height * 4), this.copyToImageData(i, this.decodePixels()), i;
  };
  var s = function() {
    if (Object.prototype.toString.call(nt) === "[object Window]") {
      try {
        e = nt.document.createElement("canvas"), r = e.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return s(), n = function(i) {
    var l;
    if (s() === !0) return r.width = i.width, r.height = i.height, r.clearRect(0, 0, i.width, i.height), r.putImageData(i, 0, 0), (l = new Image()).src = e.toDataURL(), l;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, a.prototype.decodeFrames = function(i) {
    var l, h, f, g, y, m, x, p;
    if (this.animation) {
      for (p = [], h = y = 0, m = (x = this.animation.frames).length; y < m; h = ++y) l = x[h], f = i.createImageData(l.width, l.height), g = this.decodePixels(new Uint8Array(l.data)), this.copyToImageData(f, g), l.imageData = f, p.push(l.image = n(f));
      return p;
    }
  }, a.prototype.renderFrame = function(i, l) {
    var h, f, g;
    return h = (f = this.animation.frames)[l], g = f[l - 1], l === 0 && i.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? i.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && i.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && i.clearRect(h.xOffset, h.yOffset, h.width, h.height), i.drawImage(h.image, h.xOffset, h.yOffset);
  }, a.prototype.animate = function(i) {
    var l, h, f, g, y, m, x = this;
    return h = 0, m = this.animation, g = m.numFrames, f = m.frames, y = m.numPlays, (l = function() {
      var p, M;
      if (p = h++ % g, M = f[p], x.renderFrame(i, p), g > 1 && h / g < y) return x.animation._timeout = setTimeout(l, M.delay);
    })();
  }, a.prototype.stopAnimation = function() {
    var i;
    return clearTimeout((i = this.animation) != null ? i._timeout : void 0);
  }, a.prototype.render = function(i) {
    var l, h;
    return i._png && i._png.stopAnimation(), i._png = this, i.width = this.width, i.height = this.height, l = i.getContext("2d"), this.animation ? (this.decodeFrames(l), this.animate(l)) : (h = l.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), l.putImageData(h, 0, 0));
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
function jh(n) {
  var e = 0;
  if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var r = n[e++] | n[e++] << 8, a = n[e++] | n[e++] << 8, s = n[e++], i = s >> 7, l = 1 << (7 & s) + 1;
  n[e++], n[e++];
  var h = null, f = null;
  i && (h = e, f = l, e += 3 * l);
  var g = !0, y = [], m = 0, x = null, p = 0, M = null;
  for (this.width = r, this.height = a; g && e < n.length; ) switch (n[e++]) {
    case 33:
      switch (n[e++]) {
        case 255:
          if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, M = n[e++] | n[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((N = n[e++]) >= 0)) throw Error("Invalid block size");
            if (N === 0) break;
            e += N;
          }
          break;
        case 249:
          if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = n[e++];
          m = n[e++] | n[e++] << 8, x = n[e++], (1 & I) == 0 && (x = null), p = I >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((N = n[e++]) >= 0)) throw Error("Invalid block size");
            if (N === 0) break;
            e += N;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16));
      }
      break;
    case 44:
      var O = n[e++] | n[e++] << 8, k = n[e++] | n[e++] << 8, F = n[e++] | n[e++] << 8, W = n[e++] | n[e++] << 8, ae = n[e++], me = ae >> 6 & 1, Se = 1 << (7 & ae) + 1, re = h, z = f, ie = !1;
      ae >> 7 && (ie = !0, re = e, z = Se, e += 3 * Se);
      var ye = e;
      for (e++; ; ) {
        var N;
        if (!((N = n[e++]) >= 0)) throw Error("Invalid block size");
        if (N === 0) break;
        e += N;
      }
      y.push({ x: O, y: k, width: F, height: W, has_local_palette: ie, palette_offset: re, palette_size: z, data_offset: ye, data_length: e - ye, transparent_index: x, interlaced: !!me, delay: m, disposal: p });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[e - 1].toString(16));
  }
  this.numFrames = function() {
    return y.length;
  }, this.loopCount = function() {
    return M;
  }, this.frameInfo = function(_) {
    if (_ < 0 || _ >= y.length) throw new Error("Frame index out of range.");
    return y[_];
  }, this.decodeAndBlitFrameBGRA = function(_, U) {
    var R = this.frameInfo(_), de = R.width * R.height, he = new Uint8Array(de);
    Bl(n, R.data_offset, he, de);
    var Q = R.palette_offset, Z = R.transparent_index;
    Z === null && (Z = 256);
    var fe = R.width, D = r - fe, Le = fe, w = 4 * (R.y * r + R.x), C = 4 * ((R.y + R.height) * r + R.x), T = w, q = 4 * D;
    R.interlaced === !0 && (q += 4 * r * 7);
    for (var Y = 8, oe = 0, ne = he.length; oe < ne; ++oe) {
      var ue = he[oe];
      if (Le === 0 && (Le = fe, (T += q) >= C && (q = 4 * D + 4 * r * (Y - 1), T = w + (fe + D) * (Y << 1), Y >>= 1)), ue === Z) T += 4;
      else {
        var Me = n[Q + 3 * ue], Ce = n[Q + 3 * ue + 1], Ee = n[Q + 3 * ue + 2];
        U[T++] = Ee, U[T++] = Ce, U[T++] = Me, U[T++] = 255;
      }
      --Le;
    }
  }, this.decodeAndBlitFrameRGBA = function(_, U) {
    var R = this.frameInfo(_), de = R.width * R.height, he = new Uint8Array(de);
    Bl(n, R.data_offset, he, de);
    var Q = R.palette_offset, Z = R.transparent_index;
    Z === null && (Z = 256);
    var fe = R.width, D = r - fe, Le = fe, w = 4 * (R.y * r + R.x), C = 4 * ((R.y + R.height) * r + R.x), T = w, q = 4 * D;
    R.interlaced === !0 && (q += 4 * r * 7);
    for (var Y = 8, oe = 0, ne = he.length; oe < ne; ++oe) {
      var ue = he[oe];
      if (Le === 0 && (Le = fe, (T += q) >= C && (q = 4 * D + 4 * r * (Y - 1), T = w + (fe + D) * (Y << 1), Y >>= 1)), ue === Z) T += 4;
      else {
        var Me = n[Q + 3 * ue], Ce = n[Q + 3 * ue + 1], Ee = n[Q + 3 * ue + 2];
        U[T++] = Me, U[T++] = Ce, U[T++] = Ee, U[T++] = 255;
      }
      --Le;
    }
  };
}
function Bl(n, e, r, a) {
  for (var s = n[e++], i = 1 << s, l = i + 1, h = l + 1, f = s + 1, g = (1 << f) - 1, y = 0, m = 0, x = 0, p = n[e++], M = new Int32Array(4096), I = null; ; ) {
    for (; y < 16 && p !== 0; ) m |= n[e++] << y, y += 8, p === 1 ? p = n[e++] : --p;
    if (y < f) break;
    var O = m & g;
    if (m >>= f, y -= f, O !== i) {
      if (O === l) break;
      for (var k = O < h ? O : I, F = 0, W = k; W > i; ) W = M[W] >> 8, ++F;
      var ae = W;
      if (x + F + (k !== O ? 1 : 0) > a) return void kt.log("Warning, gif stream longer than expected.");
      r[x++] = ae;
      var me = x += F;
      for (k !== O && (r[x++] = ae), W = k; F--; ) W = M[W], r[--me] = 255 & W, W >>= 8;
      I !== null && h < 4096 && (M[h++] = I << 8 | ae, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = O;
    } else h = l + 1, g = (1 << (f = s + 1)) - 1, I = null;
  }
  return x !== a && kt.log("Warning, gif stream shorter than expected."), r;
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
  var e, r, a, s, i, l = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), y = new Array(64), m = new Array(65535), x = new Array(65535), p = new Array(64), M = new Array(64), I = [], O = 0, k = 7, F = new Array(64), W = new Array(64), ae = new Array(64), me = new Array(256), Se = new Array(2048), re = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], z = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], ie = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], ye = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], N = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], _ = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], U = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], R = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], de = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function he(w, C) {
    for (var T = 0, q = 0, Y = new Array(), oe = 1; oe <= 16; oe++) {
      for (var ne = 1; ne <= w[oe]; ne++) Y[C[q]] = [], Y[C[q]][0] = T, Y[C[q]][1] = oe, q++, T++;
      T *= 2;
    }
    return Y;
  }
  function Q(w) {
    for (var C = w[0], T = w[1] - 1; T >= 0; ) C & 1 << T && (O |= 1 << k), T--, --k < 0 && (O == 255 ? (Z(255), Z(0)) : Z(O), k = 7, O = 0);
  }
  function Z(w) {
    I.push(w);
  }
  function fe(w) {
    Z(w >> 8 & 255), Z(255 & w);
  }
  function D(w, C, T, q, Y) {
    for (var oe, ne = Y[0], ue = Y[240], Me = function(ve, Ne) {
      var se, pe, ge, K, je, ze, Ke, We, Re, Ye, te = 0;
      for (Re = 0; Re < 8; ++Re) {
        se = ve[te], pe = ve[te + 1], ge = ve[te + 2], K = ve[te + 3], je = ve[te + 4], ze = ve[te + 5], Ke = ve[te + 6];
        var Ge = se + (We = ve[te + 7]), De = se - We, Ue = pe + Ke, Qe = pe - Ke, mt = ge + ze, Xt = ge - ze, dt = K + je, pr = K - je, jt = Ge + dt, mn = Ge - dt, gr = Ue + mt, Ft = Ue - mt;
        ve[te] = jt + gr, ve[te + 4] = jt - gr;
        var at = 0.707106781 * (Ft + mn);
        ve[te + 2] = mn + at, ve[te + 6] = mn - at;
        var xt = 0.382683433 * ((jt = pr + Xt) - (Ft = Qe + De)), $r = 0.5411961 * jt + xt, tn = 1.306562965 * Ft + xt, er = 0.707106781 * (gr = Xt + Qe), tr = De + er, et = De - er;
        ve[te + 5] = et + $r, ve[te + 3] = et - $r, ve[te + 1] = tr + tn, ve[te + 7] = tr - tn, te += 8;
      }
      for (te = 0, Re = 0; Re < 8; ++Re) {
        se = ve[te], pe = ve[te + 8], ge = ve[te + 16], K = ve[te + 24], je = ve[te + 32], ze = ve[te + 40], Ke = ve[te + 48];
        var Dn = se + (We = ve[te + 56]), nr = se - We, vn = pe + Ke, Yt = pe - Ke, Ht = ge + ze, An = ge - ze, hi = K + je, mr = K - je, qn = Dn + hi, zn = Dn - hi, Un = vn + Ht, rr = vn - Ht;
        ve[te] = qn + Un, ve[te + 32] = qn - Un;
        var Cn = 0.707106781 * (rr + zn);
        ve[te + 16] = zn + Cn, ve[te + 48] = zn - Cn;
        var ir = 0.382683433 * ((qn = mr + An) - (rr = Yt + nr)), Xr = 0.5411961 * qn + ir, fi = 1.306562965 * rr + ir, di = 0.707106781 * (Un = An + Yt), pi = nr + di, gi = nr - di;
        ve[te + 40] = gi + Xr, ve[te + 24] = gi - Xr, ve[te + 8] = pi + fi, ve[te + 56] = pi - fi, te++;
      }
      for (Re = 0; Re < 64; ++Re) Ye = ve[Re] * Ne[Re], p[Re] = Ye > 0 ? Ye + 0.5 | 0 : Ye - 0.5 | 0;
      return p;
    }(w, C), Ce = 0; Ce < 64; ++Ce) M[re[Ce]] = Me[Ce];
    var Ee = M[0] - T;
    T = M[0], Ee == 0 ? Q(q[0]) : (Q(q[x[oe = 32767 + Ee]]), Q(m[oe]));
    for (var Fe = 63; Fe > 0 && M[Fe] == 0; ) Fe--;
    if (Fe == 0) return Q(ne), T;
    for (var Je, we = 1; we <= Fe; ) {
      for (var B = we; M[we] == 0 && we <= Fe; ) ++we;
      var rt = we - B;
      if (rt >= 16) {
        Je = rt >> 4;
        for (var He = 1; He <= Je; ++He) Q(ue);
        rt &= 15;
      }
      oe = 32767 + M[we], Q(Y[(rt << 4) + x[oe]]), Q(m[oe]), we++;
    }
    return Fe != 63 && Q(ne), T;
  }
  function Le(w) {
    w = Math.min(Math.max(w, 1), 100), i != w && (function(C) {
      for (var T = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], q = 0; q < 64; q++) {
        var Y = l((T[q] * C + 50) / 100);
        Y = Math.min(Math.max(Y, 1), 255), h[re[q]] = Y;
      }
      for (var oe = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], ne = 0; ne < 64; ne++) {
        var ue = l((oe[ne] * C + 50) / 100);
        ue = Math.min(Math.max(ue, 1), 255), f[re[ne]] = ue;
      }
      for (var Me = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], Ce = 0, Ee = 0; Ee < 8; Ee++) for (var Fe = 0; Fe < 8; Fe++) g[Ce] = 1 / (h[re[Ce]] * Me[Ee] * Me[Fe] * 8), y[Ce] = 1 / (f[re[Ce]] * Me[Ee] * Me[Fe] * 8), Ce++;
    }(w < 50 ? Math.floor(5e3 / w) : Math.floor(200 - 2 * w)), i = w);
  }
  this.encode = function(w, C) {
    C && Le(C), I = new Array(), O = 0, k = 7, fe(65496), fe(65504), fe(16), Z(74), Z(70), Z(73), Z(70), Z(0), Z(1), Z(1), Z(0), fe(1), fe(1), Z(0), Z(0), function() {
      fe(65499), fe(132), Z(0);
      for (var pe = 0; pe < 64; pe++) Z(h[pe]);
      Z(1);
      for (var ge = 0; ge < 64; ge++) Z(f[ge]);
    }(), function(pe, ge) {
      fe(65472), fe(17), Z(8), fe(ge), fe(pe), Z(3), Z(1), Z(17), Z(0), Z(2), Z(17), Z(1), Z(3), Z(17), Z(1);
    }(w.width, w.height), function() {
      fe(65476), fe(418), Z(0);
      for (var pe = 0; pe < 16; pe++) Z(z[pe + 1]);
      for (var ge = 0; ge <= 11; ge++) Z(ie[ge]);
      Z(16);
      for (var K = 0; K < 16; K++) Z(ye[K + 1]);
      for (var je = 0; je <= 161; je++) Z(N[je]);
      Z(1);
      for (var ze = 0; ze < 16; ze++) Z(_[ze + 1]);
      for (var Ke = 0; Ke <= 11; Ke++) Z(U[Ke]);
      Z(17);
      for (var We = 0; We < 16; We++) Z(R[We + 1]);
      for (var Re = 0; Re <= 161; Re++) Z(de[Re]);
    }(), fe(65498), fe(12), Z(3), Z(1), Z(0), Z(2), Z(17), Z(3), Z(17), Z(0), Z(63), Z(0);
    var T = 0, q = 0, Y = 0;
    O = 0, k = 7, this.encode.displayName = "_encode_";
    for (var oe, ne, ue, Me, Ce, Ee, Fe, Je, we, B = w.data, rt = w.width, He = w.height, ve = 4 * rt, Ne = 0; Ne < He; ) {
      for (oe = 0; oe < ve; ) {
        for (Ce = ve * Ne + oe, Fe = -1, Je = 0, we = 0; we < 64; we++) Ee = Ce + (Je = we >> 3) * ve + (Fe = 4 * (7 & we)), Ne + Je >= He && (Ee -= ve * (Ne + 1 + Je - He)), oe + Fe >= ve && (Ee -= oe + Fe - ve + 4), ne = B[Ee++], ue = B[Ee++], Me = B[Ee++], F[we] = (Se[ne] + Se[ue + 256 >> 0] + Se[Me + 512 >> 0] >> 16) - 128, W[we] = (Se[ne + 768 >> 0] + Se[ue + 1024 >> 0] + Se[Me + 1280 >> 0] >> 16) - 128, ae[we] = (Se[ne + 1280 >> 0] + Se[ue + 1536 >> 0] + Se[Me + 1792 >> 0] >> 16) - 128;
        T = D(F, g, T, e, a), q = D(W, y, q, r, s), Y = D(ae, y, Y, r, s), oe += 32;
      }
      Ne += 8;
    }
    if (k >= 0) {
      var se = [];
      se[1] = k + 1, se[0] = (1 << k + 1) - 1, Q(se);
    }
    return fe(65497), new Uint8Array(I);
  }, n = n || 50, function() {
    for (var w = String.fromCharCode, C = 0; C < 256; C++) me[C] = w(C);
  }(), e = he(z, ie), r = he(_, U), a = he(ye, N), s = he(R, de), function() {
    for (var w = 1, C = 2, T = 1; T <= 15; T++) {
      for (var q = w; q < C; q++) x[32767 + q] = T, m[32767 + q] = [], m[32767 + q][1] = T, m[32767 + q][0] = q;
      for (var Y = -(C - 1); Y <= -w; Y++) x[32767 + Y] = T, m[32767 + Y] = [], m[32767 + Y][1] = T, m[32767 + Y][0] = C - 1 + Y;
      w <<= 1, C <<= 1;
    }
  }(), function() {
    for (var w = 0; w < 256; w++) Se[w] = 19595 * w, Se[w + 256 >> 0] = 38470 * w, Se[w + 512 >> 0] = 7471 * w + 32768, Se[w + 768 >> 0] = -11059 * w, Se[w + 1024 >> 0] = -21709 * w, Se[w + 1280 >> 0] = 32768 * w + 8421375, Se[w + 1536 >> 0] = -27439 * w, Se[w + 1792 >> 0] = -5329 * w;
  }(), Le(n);
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
function Dl(n) {
  function e(z) {
    if (!z) throw Error("assert :P");
  }
  function r(z, ie, ye) {
    for (var N = 0; 4 > N; N++) if (z[ie + N] != ye.charCodeAt(N)) return !0;
    return !1;
  }
  function a(z, ie, ye, N, _) {
    for (var U = 0; U < _; U++) z[ie + U] = ye[N + U];
  }
  function s(z, ie, ye, N) {
    for (var _ = 0; _ < N; _++) z[ie + _] = ye;
  }
  function i(z) {
    return new Int32Array(z);
  }
  function l(z, ie) {
    for (var ye = [], N = 0; N < z; N++) ye.push(new ie());
    return ye;
  }
  function h(z, ie) {
    var ye = [];
    return function N(_, U, R) {
      for (var de = R[U], he = 0; he < de && (_.push(R.length > U + 1 ? [] : new ie()), !(R.length < U + 1)); he++) N(_[he], U + 1, R);
    }(ye, 0, z), ye;
  }
  var f = function() {
    var z = this;
    function ie(t, o) {
      for (var u = 1 << o - 1 >>> 0; t & u; ) u >>>= 1;
      return u ? (t & u - 1) + u : t;
    }
    function ye(t, o, u, d, v) {
      e(!(d % u));
      do
        t[o + (d -= u)] = v;
      while (0 < d);
    }
    function N(t, o, u, d, v) {
      if (e(2328 >= v), 512 >= v) var L = i(512);
      else if ((L = i(v)) == null) return 0;
      return function(A, S, P, j, V, ce) {
        var le, J, ke = S, be = 1 << P, G = i(16), $ = i(16);
        for (e(V != 0), e(j != null), e(A != null), e(0 < P), J = 0; J < V; ++J) {
          if (15 < j[J]) return 0;
          ++G[j[J]];
        }
        if (G[0] == V) return 0;
        for ($[1] = 0, le = 1; 15 > le; ++le) {
          if (G[le] > 1 << le) return 0;
          $[le + 1] = $[le] + G[le];
        }
        for (J = 0; J < V; ++J) le = j[J], 0 < j[J] && (ce[$[le]++] = J);
        if ($[15] == 1) return (j = new _()).g = 0, j.value = ce[0], ye(A, ke, 1, be, j), be;
        var Ae, Pe = -1, _e = be - 1, qe = 0, Oe = 1, Ze = 1, Te = 1 << P;
        for (J = 0, le = 1, V = 2; le <= P; ++le, V <<= 1) {
          if (Oe += Ze <<= 1, 0 > (Ze -= G[le])) return 0;
          for (; 0 < G[le]; --G[le]) (j = new _()).g = le, j.value = ce[J++], ye(A, ke + qe, V, Te, j), qe = ie(qe, le);
        }
        for (le = P + 1, V = 2; 15 >= le; ++le, V <<= 1) {
          if (Oe += Ze <<= 1, 0 > (Ze -= G[le])) return 0;
          for (; 0 < G[le]; --G[le]) {
            if (j = new _(), (qe & _e) != Pe) {
              for (ke += Te, Ae = 1 << (Pe = le) - P; 15 > Pe && !(0 >= (Ae -= G[Pe])); ) ++Pe, Ae <<= 1;
              be += Te = 1 << (Ae = Pe - P), A[S + (Pe = qe & _e)].g = Ae + P, A[S + Pe].value = ke - S - Pe;
            }
            j.g = le - P, j.value = ce[J++], ye(A, ke + (qe >> P), V, Te, j), qe = ie(qe, le);
          }
        }
        return Oe != 2 * $[15] - 1 ? 0 : be;
      }(t, o, u, d, v, L);
    }
    function _() {
      this.value = this.g = 0;
    }
    function U() {
      this.value = this.g = 0;
    }
    function R() {
      this.G = l(5, _), this.H = i(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = l(nn, U);
    }
    function de(t, o, u, d) {
      e(t != null), e(o != null), e(2147483648 > d), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = o, t.pa = u, t.Jd = o, t.Yc = u + d, t.Zc = 4 <= d ? u + d - 4 + 1 : u, oe(t);
    }
    function he(t, o) {
      for (var u = 0; 0 < o--; ) u |= ue(t, 128) << o;
      return u;
    }
    function Q(t, o) {
      var u = he(t, o);
      return ne(t) ? -u : u;
    }
    function Z(t, o, u, d) {
      var v, L = 0;
      for (e(t != null), e(o != null), e(4294967288 > d), t.Sb = d, t.Ra = 0, t.u = 0, t.h = 0, 4 < d && (d = 4), v = 0; v < d; ++v) L += o[u + v] << 8 * v;
      t.Ra = L, t.bb = d, t.oa = o, t.pa = u;
    }
    function fe(t) {
      for (; 8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Ci - 8 >>> 0, ++t.bb, t.u -= 8;
      T(t) && (t.h = 1, t.u = 0);
    }
    function D(t, o) {
      if (e(0 <= o), !t.h && o <= Ii) {
        var u = C(t) & Pi[o];
        return t.u += o, fe(t), u;
      }
      return t.h = 1, t.u = 0;
    }
    function Le() {
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
    function q(t, o) {
      t.u = o, t.h = T(t);
    }
    function Y(t) {
      t.u >= da && (e(t.u >= da), fe(t));
    }
    function oe(t) {
      e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
    }
    function ne(t) {
      return he(t, 1);
    }
    function ue(t, o) {
      var u = t.Ca;
      0 > t.b && oe(t);
      var d = t.b, v = u * o >>> 8, L = (t.I >>> d > v) + 0;
      for (L ? (u -= v, t.I -= v + 1 << d >>> 0) : u = v + 1, d = u, v = 0; 256 <= d; ) v += 8, d >>= 8;
      return d = 7 ^ v + yn[d], t.b -= d, t.Ca = (u << d) - 1, L;
    }
    function Me(t, o, u) {
      t[o + 0] = u >> 24 & 255, t[o + 1] = u >> 16 & 255, t[o + 2] = u >> 8 & 255, t[o + 3] = u >> 0 & 255;
    }
    function Ce(t, o) {
      return t[o + 0] << 0 | t[o + 1] << 8;
    }
    function Ee(t, o) {
      return Ce(t, o) | t[o + 2] << 16;
    }
    function Fe(t, o) {
      return Ce(t, o) | Ce(t, o + 2) << 16;
    }
    function Je(t, o) {
      var u = 1 << o;
      return e(t != null), e(0 < o), t.X = i(u), t.X == null ? 0 : (t.Mb = 32 - o, t.Xa = o, 1);
    }
    function we(t, o) {
      e(t != null), e(o != null), e(t.Xa == o.Xa), a(o.X, 0, t.X, 0, 1 << o.Xa);
    }
    function B() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function rt(t, o, u, d) {
      e(u != null), e(d != null);
      var v = u[0], L = d[0];
      return v == 0 && (v = (t * L + o / 2) / o), L == 0 && (L = (o * v + t / 2) / t), 0 >= v || 0 >= L ? 0 : (u[0] = v, d[0] = L, 1);
    }
    function He(t, o) {
      return t + (1 << o) - 1 >>> o;
    }
    function ve(t, o) {
      return ((4278255360 & t) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & o) >>> 0 & 16711935) >>> 0;
    }
    function Ne(t, o) {
      z[o] = function(u, d, v, L, A, S, P) {
        var j;
        for (j = 0; j < A; ++j) {
          var V = z[t](S[P + j - 1], v, L + j);
          S[P + j] = ve(u[d + j], V);
        }
      };
    }
    function se() {
      this.ud = this.hd = this.jd = 0;
    }
    function pe(t, o) {
      return ((4278124286 & (t ^ o)) >>> 1) + (t & o) >>> 0;
    }
    function ge(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
    }
    function K(t, o) {
      return ge(t + (t - o + 0.5 >> 1));
    }
    function je(t, o, u) {
      return Math.abs(o - u) - Math.abs(t - u);
    }
    function ze(t, o, u, d, v, L, A) {
      for (d = L[A - 1], u = 0; u < v; ++u) L[A + u] = d = ve(t[o + u], d);
    }
    function Ke(t, o, u, d, v) {
      var L;
      for (L = 0; L < u; ++L) {
        var A = t[o + L], S = A >> 8 & 255, P = 16711935 & (P = (P = 16711935 & A) + ((S << 16) + S));
        d[v + L] = (4278255360 & A) + P >>> 0;
      }
    }
    function We(t, o) {
      o.jd = t >> 0 & 255, o.hd = t >> 8 & 255, o.ud = t >> 16 & 255;
    }
    function Re(t, o, u, d, v, L) {
      var A;
      for (A = 0; A < d; ++A) {
        var S = o[u + A], P = S >>> 8, j = S, V = 255 & (V = (V = S >>> 16) + ((t.jd << 24 >> 24) * (P << 24 >> 24) >>> 5));
        j = 255 & (j = (j = j + ((t.hd << 24 >> 24) * (P << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (V << 24 >> 24) >>> 5)), v[L + A] = (4278255360 & S) + (V << 16) + j;
      }
    }
    function Ye(t, o, u, d, v) {
      z[o] = function(L, A, S, P, j, V, ce, le, J) {
        for (P = ce; P < le; ++P) for (ce = 0; ce < J; ++ce) j[V++] = v(S[d(L[A++])]);
      }, z[t] = function(L, A, S, P, j, V, ce) {
        var le = 8 >> L.b, J = L.Ea, ke = L.K[0], be = L.w;
        if (8 > le) for (L = (1 << L.b) - 1, be = (1 << le) - 1; A < S; ++A) {
          var G, $ = 0;
          for (G = 0; G < J; ++G) G & L || ($ = d(P[j++])), V[ce++] = v(ke[$ & be]), $ >>= le;
        }
        else z["VP8LMapColor" + u](P, j, ke, be, V, ce, A, S, J);
      };
    }
    function te(t, o, u, d, v) {
      for (u = o + u; o < u; ) {
        var L = t[o++];
        d[v++] = L >> 16 & 255, d[v++] = L >> 8 & 255, d[v++] = L >> 0 & 255;
      }
    }
    function Ge(t, o, u, d, v) {
      for (u = o + u; o < u; ) {
        var L = t[o++];
        d[v++] = L >> 16 & 255, d[v++] = L >> 8 & 255, d[v++] = L >> 0 & 255, d[v++] = L >> 24 & 255;
      }
    }
    function De(t, o, u, d, v) {
      for (u = o + u; o < u; ) {
        var L = (A = t[o++]) >> 16 & 240 | A >> 12 & 15, A = A >> 0 & 240 | A >> 28 & 15;
        d[v++] = L, d[v++] = A;
      }
    }
    function Ue(t, o, u, d, v) {
      for (u = o + u; o < u; ) {
        var L = (A = t[o++]) >> 16 & 248 | A >> 13 & 7, A = A >> 5 & 224 | A >> 3 & 31;
        d[v++] = L, d[v++] = A;
      }
    }
    function Qe(t, o, u, d, v) {
      for (u = o + u; o < u; ) {
        var L = t[o++];
        d[v++] = L >> 0 & 255, d[v++] = L >> 8 & 255, d[v++] = L >> 16 & 255;
      }
    }
    function mt(t, o, u, d, v, L) {
      if (L == 0) for (u = o + u; o < u; ) Me(d, ((L = t[o++])[0] >> 24 | L[1] >> 8 & 65280 | L[2] << 8 & 16711680 | L[3] << 24) >>> 0), v += 32;
      else a(d, v, t, o, u);
    }
    function Xt(t, o) {
      z[o][0] = z[t + "0"], z[o][1] = z[t + "1"], z[o][2] = z[t + "2"], z[o][3] = z[t + "3"], z[o][4] = z[t + "4"], z[o][5] = z[t + "5"], z[o][6] = z[t + "6"], z[o][7] = z[t + "7"], z[o][8] = z[t + "8"], z[o][9] = z[t + "9"], z[o][10] = z[t + "10"], z[o][11] = z[t + "11"], z[o][12] = z[t + "12"], z[o][13] = z[t + "13"], z[o][14] = z[t + "0"], z[o][15] = z[t + "0"];
    }
    function dt(t) {
      return t == vs || t == bs || t == lo || t == ys;
    }
    function pr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function jt() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function mn() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new pr(), this.f.kb = new jt(), this.sd = null;
    }
    function gr() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function Ft() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function at(t) {
      return alert("todo:WebPSamplerProcessPlane"), t.T;
    }
    function xt(t, o) {
      var u = t.T, d = o.ba.f.RGBA, v = d.eb, L = d.fb + t.ka * d.A, A = Rn[o.ba.S], S = t.y, P = t.O, j = t.f, V = t.N, ce = t.ea, le = t.W, J = o.cc, ke = o.dc, be = o.Mc, G = o.Nc, $ = t.ka, Ae = t.ka + t.T, Pe = t.U, _e = Pe + 1 >> 1;
      for ($ == 0 ? A(S, P, null, null, j, V, ce, le, j, V, ce, le, v, L, null, null, Pe) : (A(o.ec, o.fc, S, P, J, ke, be, G, j, V, ce, le, v, L - d.A, v, L, Pe), ++u); $ + 2 < Ae; $ += 2) J = j, ke = V, be = ce, G = le, V += t.Rc, le += t.Rc, L += 2 * d.A, A(S, (P += 2 * t.fa) - t.fa, S, P, J, ke, be, G, j, V, ce, le, v, L - d.A, v, L, Pe);
      return P += t.fa, t.j + Ae < t.o ? (a(o.ec, o.fc, S, P, Pe), a(o.cc, o.dc, j, V, _e), a(o.Mc, o.Nc, ce, le, _e), u--) : 1 & Ae || A(S, P, null, null, j, V, ce, le, j, V, ce, le, v, L + d.A, null, null, Pe), u;
    }
    function $r(t, o, u) {
      var d = t.F, v = [t.J];
      if (d != null) {
        var L = t.U, A = o.ba.S, S = A == co || A == lo;
        o = o.ba.f.RGBA;
        var P = [0], j = t.ka;
        P[0] = t.T, t.Kb && (j == 0 ? --P[0] : (--j, v[0] -= t.width), t.j + t.ka + t.T == t.o && (P[0] = t.o - t.j - j));
        var V = o.eb;
        j = o.fb + j * o.A, t = It(d, v[0], t.width, L, P, V, j + (S ? 0 : 3), o.A), e(u == P), t && dt(A) && En(V, j, S, L, P, o.A);
      }
      return 0;
    }
    function tn(t) {
      var o = t.ma, u = o.ba.S, d = 11 > u, v = u == oo || u == so || u == co || u == ms || u == 12 || dt(u);
      if (o.memory = null, o.Ib = null, o.Jb = null, o.Nd = null, !ha(o.Oa, t, v ? 11 : 12)) return 0;
      if (v && dt(u) && Ie(), t.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (o.Ib = at, t.Kb) {
            if (u = t.U + 1 >> 1, o.memory = i(t.U + 2 * u), o.memory == null) return 0;
            o.ec = o.memory, o.fc = 0, o.cc = o.ec, o.dc = o.fc + t.U, o.Mc = o.cc, o.Nc = o.dc + u, o.Ib = xt, Ie();
          }
        } else alert("todo:EmitYUV");
        v && (o.Jb = $r, d && ee());
      }
      if (d && !$c) {
        for (t = 0; 256 > t; ++t) F1[t] = 89858 * (t - 128) + ho >> uo, R1[t] = -22014 * (t - 128) + ho, O1[t] = -45773 * (t - 128), E1[t] = 113618 * (t - 128) + ho >> uo;
        for (t = wa; t < Ls; ++t) o = 76283 * (t - 16) + ho >> uo, T1[t - wa] = Sn(o, 255), B1[t - wa] = Sn(o + 8 >> 4, 15);
        $c = 1;
      }
      return 1;
    }
    function er(t) {
      var o = t.ma, u = t.U, d = t.T;
      return e(!(1 & t.ka)), 0 >= u || 0 >= d ? 0 : (u = o.Ib(t, o), o.Jb != null && o.Jb(t, o, u), o.Dc += u, 1);
    }
    function tr(t) {
      t.ma.memory = null;
    }
    function et(t, o, u, d) {
      return D(t, 8) != 47 ? 0 : (o[0] = D(t, 14) + 1, u[0] = D(t, 14) + 1, d[0] = D(t, 1), D(t, 3) != 0 ? 0 : !t.h);
    }
    function Dn(t, o) {
      if (4 > t) return t + 1;
      var u = t - 2 >> 1;
      return (2 + (1 & t) << u) + D(o, u) + 1;
    }
    function nr(t, o) {
      return 120 < o ? o - 120 : 1 <= (u = ((u = y1[o - 1]) >> 4) * t + (8 - (15 & u))) ? u : 1;
      var u;
    }
    function vn(t, o, u) {
      var d = C(u), v = t[o += 255 & d].g - 8;
      return 0 < v && (q(u, u.u + 8), d = C(u), o += t[o].value, o += d & (1 << v) - 1), q(u, u.u + t[o].g), t[o].value;
    }
    function Yt(t, o, u) {
      return u.g += t.g, u.value += t.value << o >>> 0, e(8 >= u.g), t.g;
    }
    function Ht(t, o, u) {
      var d = t.xc;
      return e((o = d == 0 ? 0 : t.vc[t.md * (u >> d) + (o >> d)]) < t.Wb), t.Ya[o];
    }
    function An(t, o, u, d) {
      var v = t.ab, L = t.c * o, A = t.C;
      o = A + o;
      var S = u, P = d;
      for (d = t.Ta, u = t.Ua; 0 < v--; ) {
        var j = t.gc[v], V = A, ce = o, le = S, J = P, ke = (P = d, S = u, j.Ea);
        switch (e(V < ce), e(ce <= j.nc), j.hc) {
          case 2:
            Qa(le, J, (ce - V) * ke, P, S);
            break;
          case 0:
            var be = V, G = ce, $ = P, Ae = S, Pe = (Te = j).Ea;
            be == 0 && (ps(le, J, null, null, 1, $, Ae), ze(le, J + 1, 0, 0, Pe - 1, $, Ae + 1), J += Pe, Ae += Pe, ++be);
            for (var _e = 1 << Te.b, qe = _e - 1, Oe = He(Pe, Te.b), Ze = Te.K, Te = Te.w + (be >> Te.b) * Oe; be < G; ) {
              var yt = Ze, Lt = Te, bt = 1;
              for (pa(le, J, $, Ae - Pe, 1, $, Ae); bt < Pe; ) {
                var pt = (bt & ~qe) + _e;
                pt > Pe && (pt = Pe), (0, Mr[yt[Lt++] >> 8 & 15])(le, J + +bt, $, Ae + bt - Pe, pt - bt, $, Ae + bt), bt = pt;
              }
              J += Pe, Ae += Pe, ++be & qe || (Te += Oe);
            }
            ce != j.nc && a(P, S - ke, P, S + (ce - V - 1) * ke, ke);
            break;
          case 1:
            for (ke = le, G = J, Pe = (le = j.Ea) - (Ae = le & ~($ = (J = 1 << j.b) - 1)), be = He(le, j.b), _e = j.K, j = j.w + (V >> j.b) * be; V < ce; ) {
              for (qe = _e, Oe = j, Ze = new se(), Te = G + Ae, yt = G + le; G < Te; ) We(qe[Oe++], Ze), ei(Ze, ke, G, J, P, S), G += J, S += J;
              G < yt && (We(qe[Oe++], Ze), ei(Ze, ke, G, Pe, P, S), G += Pe, S += Pe), ++V & $ || (j += be);
            }
            break;
          case 3:
            if (le == P && J == S && 0 < j.b) {
              for (G = P, le = ke = S + (ce - V) * ke - (Ae = (ce - V) * He(j.Ea, j.b)), J = P, $ = S, be = [], Ae = (Pe = Ae) - 1; 0 <= Ae; --Ae) be[Ae] = J[$ + Ae];
              for (Ae = Pe - 1; 0 <= Ae; --Ae) G[le + Ae] = be[Ae];
              jn(j, V, ce, P, ke, P, S);
            } else jn(j, V, ce, le, J, P, S);
        }
        S = d, P = u;
      }
      P != u && a(d, u, S, P, L);
    }
    function hi(t, o) {
      var u = t.V, d = t.Ba + t.c * t.C, v = o - t.C;
      if (e(o <= t.l.o), e(16 >= v), 0 < v) {
        var L = t.l, A = t.Ta, S = t.Ua, P = L.width;
        if (An(t, v, u, d), v = S = [S], e((u = t.C) < (d = o)), e(L.v < L.va), d > L.o && (d = L.o), u < L.j) {
          var j = L.j - u;
          u = L.j, v[0] += j * P;
        }
        if (u >= d ? u = 0 : (v[0] += 4 * L.v, L.ka = u - L.j, L.U = L.va - L.v, L.T = d - u, u = 1), u) {
          if (S = S[0], 11 > (u = t.ca).S) {
            var V = u.f.RGBA, ce = (d = u.S, v = L.U, L = L.T, j = V.eb, V.A), le = L;
            for (V = V.fb + t.Ma * V.A; 0 < le--; ) {
              var J = A, ke = S, be = v, G = j, $ = V;
              switch (d) {
                case ao:
                  wn(J, ke, be, G, $);
                  break;
                case oo:
                  dn(J, ke, be, G, $);
                  break;
                case vs:
                  dn(J, ke, be, G, $), En(G, $, 0, be, 1, 0);
                  break;
                case Dc:
                  wr(J, ke, be, G, $);
                  break;
                case so:
                  mt(J, ke, be, G, $, 1);
                  break;
                case bs:
                  mt(J, ke, be, G, $, 1), En(G, $, 0, be, 1, 0);
                  break;
                case co:
                  mt(J, ke, be, G, $, 0);
                  break;
                case lo:
                  mt(J, ke, be, G, $, 0), En(G, $, 1, be, 1, 0);
                  break;
                case ms:
                  Fr(J, ke, be, G, $);
                  break;
                case ys:
                  Fr(J, ke, be, G, $), Pt(G, $, be, 1, 0);
                  break;
                case qc:
                  yr(J, ke, be, G, $);
                  break;
                default:
                  e(0);
              }
              S += P, V += ce;
            }
            t.Ma += L;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(t.Ma <= u.height);
        }
      }
      t.C = o, e(t.C <= t.i);
    }
    function mr(t) {
      var o;
      if (0 < t.ua) return 0;
      for (o = 0; o < t.Wb; ++o) {
        var u = t.Ya[o].G, d = t.Ya[o].H;
        if (0 < u[1][d[1] + 0].g || 0 < u[2][d[2] + 0].g || 0 < u[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function qn(t, o, u, d, v, L) {
      if (t.Z != 0) {
        var A = t.qd, S = t.rd;
        for (e(Tr[t.Z] != null); o < u; ++o) Tr[t.Z](A, S, d, v, d, v, L), A = d, S = v, v += L;
        t.qd = A, t.rd = S;
      }
    }
    function zn(t, o) {
      var u = t.l.ma, d = u.Z == 0 || u.Z == 1 ? t.l.j : t.C;
      if (d = t.C < d ? d : t.C, e(o <= t.l.o), o > d) {
        var v = t.l.width, L = u.ca, A = u.tb + v * d, S = t.V, P = t.Ba + t.c * d, j = t.gc;
        e(t.ab == 1), e(j[0].hc == 3), eo(j[0], d, o, S, P, L, A), qn(u, d, o, L, A, v);
      }
      t.C = t.Ma = o;
    }
    function Un(t, o, u, d, v, L, A) {
      var S = t.$ / d, P = t.$ % d, j = t.m, V = t.s, ce = u + t.$, le = ce;
      v = u + d * v;
      var J = u + d * L, ke = 280 + V.ua, be = t.Pb ? S : 16777216, G = 0 < V.ua ? V.Wa : null, $ = V.wc, Ae = ce < J ? Ht(V, P, S) : null;
      e(t.C < L), e(J <= v);
      var Pe = !1;
      e: for (; ; ) {
        for (; Pe || ce < J; ) {
          var _e = 0;
          if (S >= be) {
            var qe = ce - u;
            e((be = t).Pb), be.wd = be.m, be.xd = qe, 0 < be.s.ua && we(be.s.Wa, be.s.vb), be = S + x1;
          }
          if (P & $ || (Ae = Ht(V, P, S)), e(Ae != null), Ae.Qb && (o[ce] = Ae.qb, Pe = !0), !Pe) if (Y(j), Ae.jc) {
            _e = j, qe = o;
            var Oe = ce, Ze = Ae.pd[C(_e) & nn - 1];
            e(Ae.jc), 256 > Ze.g ? (q(_e, _e.u + Ze.g), qe[Oe] = Ze.value, _e = 0) : (q(_e, _e.u + Ze.g - 256), e(256 <= Ze.value), _e = Ze.value), _e == 0 && (Pe = !0);
          } else _e = vn(Ae.G[0], Ae.H[0], j);
          if (j.h) break;
          if (Pe || 256 > _e) {
            if (!Pe) if (Ae.nd) o[ce] = (Ae.qb | _e << 8) >>> 0;
            else {
              if (Y(j), Pe = vn(Ae.G[1], Ae.H[1], j), Y(j), qe = vn(Ae.G[2], Ae.H[2], j), Oe = vn(Ae.G[3], Ae.H[3], j), j.h) break;
              o[ce] = (Oe << 24 | Pe << 16 | _e << 8 | qe) >>> 0;
            }
            if (Pe = !1, ++ce, ++P >= d && (P = 0, ++S, A != null && S <= L && !(S % 16) && A(t, S), G != null)) for (; le < ce; ) _e = o[le++], G.X[(506832829 * _e & 4294967295) >>> G.Mb] = _e;
          } else if (280 > _e) {
            if (_e = Dn(_e - 256, j), qe = vn(Ae.G[4], Ae.H[4], j), Y(j), qe = nr(d, qe = Dn(qe, j)), j.h) break;
            if (ce - u < qe || v - ce < _e) break e;
            for (Oe = 0; Oe < _e; ++Oe) o[ce + Oe] = o[ce + Oe - qe];
            for (ce += _e, P += _e; P >= d; ) P -= d, ++S, A != null && S <= L && !(S % 16) && A(t, S);
            if (e(ce <= v), P & $ && (Ae = Ht(V, P, S)), G != null) for (; le < ce; ) _e = o[le++], G.X[(506832829 * _e & 4294967295) >>> G.Mb] = _e;
          } else {
            if (!(_e < ke)) break e;
            for (Pe = _e - 280, e(G != null); le < ce; ) _e = o[le++], G.X[(506832829 * _e & 4294967295) >>> G.Mb] = _e;
            _e = ce, e(!(Pe >>> (qe = G).Xa)), o[_e] = qe.X[Pe], Pe = !0;
          }
          Pe || e(j.h == T(j));
        }
        if (t.Pb && j.h && ce < v) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && we(t.s.vb, t.s.Wa);
        else {
          if (j.h) break e;
          A != null && A(t, S > L ? L : S), t.a = 0, t.$ = ce - u;
        }
        return 1;
      }
      return t.a = 3, 0;
    }
    function rr(t) {
      e(t != null), t.vc = null, t.yc = null, t.Ya = null;
      var o = t.Wa;
      o != null && (o.X = null), t.vb = null, e(t != null);
    }
    function Cn() {
      var t = new ds();
      return t == null ? null : (t.a = 0, t.xb = Hc, Xt("Predictor", "VP8LPredictors"), Xt("Predictor", "VP8LPredictors_C"), Xt("PredictorAdd", "VP8LPredictorsAdd"), Xt("PredictorAdd", "VP8LPredictorsAdd_C"), Qa = Ke, ei = Re, wn = te, dn = Ge, Fr = De, yr = Ue, wr = Qe, z.VP8LMapColor32b = ji, z.VP8LMapColor8b = to, t);
    }
    function ir(t, o, u, d, v) {
      var L = 1, A = [t], S = [o], P = d.m, j = d.s, V = null, ce = 0;
      e: for (; ; ) {
        if (u) for (; L && D(P, 1); ) {
          var le = A, J = S, ke = d, be = 1, G = ke.m, $ = ke.gc[ke.ab], Ae = D(G, 2);
          if (ke.Oc & 1 << Ae) L = 0;
          else {
            switch (ke.Oc |= 1 << Ae, $.hc = Ae, $.Ea = le[0], $.nc = J[0], $.K = [null], ++ke.ab, e(4 >= ke.ab), Ae) {
              case 0:
              case 1:
                $.b = D(G, 3) + 2, be = ir(He($.Ea, $.b), He($.nc, $.b), 0, ke, $.K), $.K = $.K[0];
                break;
              case 3:
                var Pe, _e = D(G, 8) + 1, qe = 16 < _e ? 0 : 4 < _e ? 1 : 2 < _e ? 2 : 3;
                if (le[0] = He($.Ea, qe), $.b = qe, Pe = be = ir(_e, 1, 0, ke, $.K)) {
                  var Oe, Ze = _e, Te = $, yt = 1 << (8 >> Te.b), Lt = i(yt);
                  if (Lt == null) Pe = 0;
                  else {
                    var bt = Te.K[0], pt = Te.w;
                    for (Lt[0] = Te.K[0][0], Oe = 1; Oe < 1 * Ze; ++Oe) Lt[Oe] = ve(bt[pt + Oe], Lt[Oe - 1]);
                    for (; Oe < 4 * yt; ++Oe) Lt[Oe] = 0;
                    Te.K[0] = null, Te.K[0] = Lt, Pe = 1;
                  }
                }
                be = Pe;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            L = be;
          }
        }
        if (A = A[0], S = S[0], L && D(P, 1) && !(L = 1 <= (ce = D(P, 4)) && 11 >= ce)) {
          d.a = 3;
          break e;
        }
        var _t;
        if (_t = L) t: {
          var St, ut, Vt, xn = d, Gt = A, Ln = S, Nt = ce, kn = u, Pn = xn.m, Zt = xn.s, rn = [null], gn = 1, Tn = 0, cr = w1[Nt];
          n: for (; ; ) {
            if (kn && D(Pn, 1)) {
              var Kt = D(Pn, 3) + 2, Ar = He(Gt, Kt), ai = He(Ln, Kt), Ri = Ar * ai;
              if (!ir(Ar, ai, 0, xn, rn)) break n;
              for (rn = rn[0], Zt.xc = Kt, St = 0; St < Ri; ++St) {
                var Br = rn[St] >> 8 & 65535;
                rn[St] = Br, Br >= gn && (gn = Br + 1);
              }
            }
            if (Pn.h) break n;
            for (ut = 0; 5 > ut; ++ut) {
              var Ot = zc[ut];
              !ut && 0 < Nt && (Ot += 1 << Nt), Tn < Ot && (Tn = Ot);
            }
            var Ns = l(gn * cr, _), Zc = gn, Kc = l(Zc, R);
            if (Kc == null) var po = null;
            else e(65536 >= Zc), po = Kc;
            var xa = i(Tn);
            if (po == null || xa == null || Ns == null) {
              xn.a = 1;
              break n;
            }
            var go = Ns;
            for (St = Vt = 0; St < gn; ++St) {
              var Yn = po[St], Ti = Yn.G, Bi = Yn.H, Qc = 0, mo = 1, el = 0;
              for (ut = 0; 5 > ut; ++ut) {
                Ot = zc[ut], Ti[ut] = go, Bi[ut] = Vt, !ut && 0 < Nt && (Ot += 1 << Nt);
                i: {
                  var vo, As = Ot, bo = xn, La = xa, z1 = go, U1 = Vt, Ss = 0, Dr = bo.m, H1 = D(Dr, 1);
                  if (s(La, 0, 0, As), H1) {
                    var W1 = D(Dr, 1) + 1, V1 = D(Dr, 1), tl = D(Dr, V1 == 0 ? 1 : 8);
                    La[tl] = 1, W1 == 2 && (La[tl = D(Dr, 8)] = 1);
                    var yo = 1;
                  } else {
                    var nl = i(19), rl = D(Dr, 4) + 4;
                    if (19 < rl) {
                      bo.a = 3;
                      var wo = 0;
                      break i;
                    }
                    for (vo = 0; vo < rl; ++vo) nl[b1[vo]] = D(Dr, 3);
                    var _s = void 0, Na = void 0, il = bo, G1 = nl, xo = As, al = La, ks = 0, qr = il.m, ol = 8, sl = l(128, _);
                    r: for (; N(sl, 0, 7, G1, 19); ) {
                      if (D(qr, 1)) {
                        var Y1 = 2 + 2 * D(qr, 3);
                        if ((_s = 2 + D(qr, Y1)) > xo) break r;
                      } else _s = xo;
                      for (Na = 0; Na < xo && _s--; ) {
                        Y(qr);
                        var cl = sl[0 + (127 & C(qr))];
                        q(qr, qr.u + cl.g);
                        var Di = cl.value;
                        if (16 > Di) al[Na++] = Di, Di != 0 && (ol = Di);
                        else {
                          var $1 = Di == 16, ll = Di - 16, X1 = m1[ll], ul = D(qr, g1[ll]) + X1;
                          if (Na + ul > xo) break r;
                          for (var J1 = $1 ? ol : 0; 0 < ul--; ) al[Na++] = J1;
                        }
                      }
                      ks = 1;
                      break r;
                    }
                    ks || (il.a = 3), yo = ks;
                  }
                  (yo = yo && !Dr.h) && (Ss = N(z1, U1, 8, La, As)), yo && Ss != 0 ? wo = Ss : (bo.a = 3, wo = 0);
                }
                if (wo == 0) break n;
                if (mo && v1[ut] == 1 && (mo = go[Vt].g == 0), Qc += go[Vt].g, Vt += wo, 3 >= ut) {
                  var Aa, Ps = xa[0];
                  for (Aa = 1; Aa < Ot; ++Aa) xa[Aa] > Ps && (Ps = xa[Aa]);
                  el += Ps;
                }
              }
              if (Yn.nd = mo, Yn.Qb = 0, mo && (Yn.qb = (Ti[3][Bi[3] + 0].value << 24 | Ti[1][Bi[1] + 0].value << 16 | Ti[2][Bi[2] + 0].value) >>> 0, Qc == 0 && 256 > Ti[0][Bi[0] + 0].value && (Yn.Qb = 1, Yn.qb += Ti[0][Bi[0] + 0].value << 8)), Yn.jc = !Yn.Qb && 6 > el, Yn.jc) {
                var Lo, Sr = Yn;
                for (Lo = 0; Lo < nn; ++Lo) {
                  var zr = Lo, Ur = Sr.pd[zr], No = Sr.G[0][Sr.H[0] + zr];
                  256 <= No.value ? (Ur.g = No.g + 256, Ur.value = No.value) : (Ur.g = 0, Ur.value = 0, zr >>= Yt(No, 8, Ur), zr >>= Yt(Sr.G[1][Sr.H[1] + zr], 16, Ur), zr >>= Yt(Sr.G[2][Sr.H[2] + zr], 0, Ur), Yt(Sr.G[3][Sr.H[3] + zr], 24, Ur));
                }
              }
            }
            Zt.vc = rn, Zt.Wb = gn, Zt.Ya = po, Zt.yc = Ns, _t = 1;
            break t;
          }
          _t = 0;
        }
        if (!(L = _t)) {
          d.a = 3;
          break e;
        }
        if (0 < ce) {
          if (j.ua = 1 << ce, !Je(j.Wa, ce)) {
            d.a = 1, L = 0;
            break e;
          }
        } else j.ua = 0;
        var Is = d, hl = A, Z1 = S, Cs = Is.s, js = Cs.xc;
        if (Is.c = hl, Is.i = Z1, Cs.md = He(hl, js), Cs.wc = js == 0 ? -1 : (1 << js) - 1, u) {
          d.xb = P1;
          break e;
        }
        if ((V = i(A * S)) == null) {
          d.a = 1, L = 0;
          break e;
        }
        L = (L = Un(d, V, 0, A, S, S, null)) && !P.h;
        break e;
      }
      return L ? (v != null ? v[0] = V : (e(V == null), e(u)), d.$ = 0, u || rr(j)) : rr(j), L;
    }
    function Xr(t, o) {
      var u = t.c * t.i, d = u + o + 16 * o;
      return e(t.c <= o), t.V = i(d), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + u + o, 1);
    }
    function fi(t, o) {
      var u = t.C, d = o - u, v = t.V, L = t.Ba + t.c * u;
      for (e(o <= t.l.o); 0 < d; ) {
        var A = 16 < d ? 16 : d, S = t.l.ma, P = t.l.width, j = P * A, V = S.ca, ce = S.tb + P * u, le = t.Ta, J = t.Ua;
        An(t, A, v, L), Dt(le, J, V, ce, j), qn(S, u, u + A, V, ce, P), d -= A, v += A * t.c, u += A;
      }
      e(u == o), t.C = t.Ma = o;
    }
    function di() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function pi() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function gi() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = i(4), this.Lb = i(4);
    }
    function Fa() {
      this.Yb = function() {
        var t = [];
        return function o(u, d, v) {
          for (var L = v[d], A = 0; A < L && (u.push(v.length > d + 1 ? [] : 0), !(v.length < d + 1)); A++) o(u[A], d + 1, v);
        }(t, 0, [3, 11]), t;
      }();
    }
    function Wo() {
      this.jb = i(3), this.Wc = h([4, 8], Fa), this.Xc = h([4, 17], Fa);
    }
    function Vo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new i(4), this.od = new i(4);
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
      this.ad = i(384), this.Za = 0, this.Ob = i(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Yo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new mi()), this.Y = 0, this.ya = Array(new Xi()), this.aa = 0, this.l = new vi();
    }
    function Oa() {
      this.y = i(16), this.f = i(8), this.ea = i(8);
    }
    function $o() {
      this.cb = this.a = 0, this.sc = "", this.m = new Le(), this.Od = new di(), this.Kc = new pi(), this.ed = new Vo(), this.Qa = new gi(), this.Ic = this.$c = this.Aa = 0, this.D = new Yo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = l(8, Le), this.ia = 0, this.pb = l(4, Go), this.Pa = new Wo(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Oa()), this.Hd = 0, this.rb = Array(new Ea()), this.sb = 0, this.wa = Array(new mi()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Xi()), this.L = this.aa = 0, this.gd = h([4, 2], mi), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function vi() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function Xo() {
      var t = new $o();
      return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ya || (ya = Ba)), t;
    }
    function Tt(t, o, u) {
      return t.a == 0 && (t.a = o, t.sc = u, t.cb = 0), 0;
    }
    function Ra(t, o, u) {
      return 3 <= u && t[o + 0] == 157 && t[o + 1] == 1 && t[o + 2] == 42;
    }
    function Ta(t, o) {
      if (t == null) return 0;
      if (t.a = 0, t.sc = "OK", o == null) return Tt(t, 2, "null VP8Io passed to VP8GetHeaders()");
      var u = o.data, d = o.w, v = o.ha;
      if (4 > v) return Tt(t, 7, "Truncated header.");
      var L = u[d + 0] | u[d + 1] << 8 | u[d + 2] << 16, A = t.Od;
      if (A.Rb = !(1 & L), A.td = L >> 1 & 7, A.yd = L >> 4 & 1, A.ub = L >> 5, 3 < A.td) return Tt(t, 3, "Incorrect keyframe parameters.");
      if (!A.yd) return Tt(t, 4, "Frame not displayable.");
      d += 3, v -= 3;
      var S = t.Kc;
      if (A.Rb) {
        if (7 > v) return Tt(t, 7, "cannot parse picture header");
        if (!Ra(u, d, v)) return Tt(t, 3, "Bad code word");
        S.c = 16383 & (u[d + 4] << 8 | u[d + 3]), S.Td = u[d + 4] >> 6, S.i = 16383 & (u[d + 6] << 8 | u[d + 5]), S.Ud = u[d + 6] >> 6, d += 7, v -= 7, t.za = S.c + 15 >> 4, t.Ub = S.i + 15 >> 4, o.width = S.c, o.height = S.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, s((L = t.Pa).jb, 0, 255, L.jb.length), e((L = t.Qa) != null), L.Cb = 0, L.Bb = 0, L.Fb = 1, s(L.Zb, 0, 0, L.Zb.length), s(L.Lb, 0, 0, L.Lb);
      }
      if (A.ub > v) return Tt(t, 7, "bad partition length");
      de(L = t.m, u, d, A.ub), d += A.ub, v -= A.ub, A.Rb && (S.Ld = ne(L), S.Kd = ne(L)), S = t.Qa;
      var P, j = t.Pa;
      if (e(L != null), e(S != null), S.Cb = ne(L), S.Cb) {
        if (S.Bb = ne(L), ne(L)) {
          for (S.Fb = ne(L), P = 0; 4 > P; ++P) S.Zb[P] = ne(L) ? Q(L, 7) : 0;
          for (P = 0; 4 > P; ++P) S.Lb[P] = ne(L) ? Q(L, 6) : 0;
        }
        if (S.Bb) for (P = 0; 3 > P; ++P) j.jb[P] = ne(L) ? he(L, 8) : 255;
      } else S.Bb = 0;
      if (L.Ka) return Tt(t, 3, "cannot parse segment header");
      if ((S = t.ed).zd = ne(L), S.Tb = he(L, 6), S.wb = he(L, 3), S.Pc = ne(L), S.Pc && ne(L)) {
        for (j = 0; 4 > j; ++j) ne(L) && (S.vd[j] = Q(L, 6));
        for (j = 0; 4 > j; ++j) ne(L) && (S.od[j] = Q(L, 6));
      }
      if (t.L = S.Tb == 0 ? 0 : S.zd ? 1 : 2, L.Ka) return Tt(t, 3, "cannot parse filter header");
      var V = v;
      if (v = P = d, d = P + V, S = V, t.Xb = (1 << he(t.m, 2)) - 1, V < 3 * (j = t.Xb)) u = 7;
      else {
        for (P += 3 * j, S -= 3 * j, V = 0; V < j; ++V) {
          var ce = u[v + 0] | u[v + 1] << 8 | u[v + 2] << 16;
          ce > S && (ce = S), de(t.Jc[+V], u, P, ce), P += ce, S -= ce, v += 3;
        }
        de(t.Jc[+j], u, P, S), u = P < d ? 0 : 5;
      }
      if (u != 0) return Tt(t, u, "cannot parse partitions");
      for (u = he(P = t.m, 7), v = ne(P) ? Q(P, 4) : 0, d = ne(P) ? Q(P, 4) : 0, S = ne(P) ? Q(P, 4) : 0, j = ne(P) ? Q(P, 4) : 0, P = ne(P) ? Q(P, 4) : 0, V = t.Qa, ce = 0; 4 > ce; ++ce) {
        if (V.Cb) {
          var le = V.Zb[ce];
          V.Fb || (le += u);
        } else {
          if (0 < ce) {
            t.pb[ce] = t.pb[0];
            continue;
          }
          le = u;
        }
        var J = t.pb[ce];
        J.Sc[0] = ws[Sn(le + v, 127)], J.Sc[1] = xs[Sn(le + 0, 127)], J.Eb[0] = 2 * ws[Sn(le + d, 127)], J.Eb[1] = 101581 * xs[Sn(le + S, 127)] >> 16, 8 > J.Eb[1] && (J.Eb[1] = 8), J.Qc[0] = ws[Sn(le + j, 117)], J.Qc[1] = xs[Sn(le + P, 127)], J.lc = le + P;
      }
      if (!A.Rb) return Tt(t, 4, "Not a key frame.");
      for (ne(L), A = t.Pa, u = 0; 4 > u; ++u) {
        for (v = 0; 8 > v; ++v) for (d = 0; 3 > d; ++d) for (S = 0; 11 > S; ++S) j = ue(L, _1[u][v][d][S]) ? he(L, 8) : A1[u][v][d][S], A.Wc[u][v].Yb[d][S] = j;
        for (v = 0; 17 > v; ++v) A.Xc[u][v] = A.Wc[u][k1[v]];
      }
      return t.kc = ne(L), t.kc && (t.Bd = he(L, 8)), t.cb = 1;
    }
    function Ba(t, o, u, d, v, L, A) {
      var S = o[v].Yb[u];
      for (u = 0; 16 > v; ++v) {
        if (!ue(t, S[u + 0])) return v;
        for (; !ue(t, S[u + 1]); ) if (S = o[++v].Yb[0], u = 0, v == 16) return 16;
        var P = o[v + 1].Yb;
        if (ue(t, S[u + 2])) {
          var j = t, V = 0;
          if (ue(j, (le = S)[(ce = u) + 3])) if (ue(j, le[ce + 6])) {
            for (S = 0, ce = 2 * (V = ue(j, le[ce + 8])) + (le = ue(j, le[ce + 9 + V])), V = 0, le = L1[ce]; le[S]; ++S) V += V + ue(j, le[S]);
            V += 3 + (8 << ce);
          } else ue(j, le[ce + 7]) ? (V = 7 + 2 * ue(j, 165), V += ue(j, 145)) : V = 5 + ue(j, 159);
          else V = ue(j, le[ce + 4]) ? 3 + ue(j, le[ce + 5]) : 2;
          S = P[2];
        } else V = 1, S = P[1];
        P = A + N1[v], 0 > (j = t).b && oe(j);
        var ce, le = j.b, J = (ce = j.Ca >> 1) - (j.I >> le) >> 31;
        --j.b, j.Ca += J, j.Ca |= 1, j.I -= (ce + 1 & J) << le, L[P] = ((V ^ J) - J) * d[(0 < v) + 0];
      }
      return 16;
    }
    function Ji(t) {
      var o = t.rb[t.sb - 1];
      o.la = 0, o.Na = 0, s(t.zc, 0, 0, t.zc.length), t.ja = 0;
    }
    function Jo(t, o) {
      if (t == null) return 0;
      if (o == null) return Tt(t, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!t.cb && !Ta(t, o)) return 0;
      if (e(t.cb), o.ac == null || o.ac(o)) {
        o.ob && (t.L = 0);
        var u = fo[t.L];
        if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = o.v - u >> 4, t.zb = o.j - u >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = o.o + 15 + u >> 4, t.Hb = o.va + 15 + u >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
          var d = t.ed;
          for (u = 0; 4 > u; ++u) {
            var v;
            if (t.Qa.Cb) {
              var L = t.Qa.Lb[u];
              t.Qa.Fb || (L += d.Tb);
            } else L = d.Tb;
            for (v = 0; 1 >= v; ++v) {
              var A = t.gd[u][v], S = L;
              if (d.Pc && (S += d.vd[0], v && (S += d.od[0])), 0 < (S = 0 > S ? 0 : 63 < S ? 63 : S)) {
                var P = S;
                0 < d.wb && (P = 4 < d.wb ? P >> 2 : P >> 1) > 9 - d.wb && (P = 9 - d.wb), 1 > P && (P = 1), A.dd = P, A.tc = 2 * S + P, A.ld = 40 <= S ? 2 : 15 <= S ? 1 : 0;
              } else A.tc = 0;
              A.La = v;
            }
          }
        }
        u = 0;
      } else Tt(t, 6, "Frame setup failed"), u = t.a;
      if (u = u == 0) {
        if (u) {
          t.$c = 0, 0 < t.Aa || (t.Ic = q1);
          e: {
            u = t.Ic, d = 4 * (P = t.za);
            var j = 32 * P, V = P + 1, ce = 0 < t.L ? P * (0 < t.Aa ? 2 : 1) : 0, le = (t.Aa == 2 ? 2 : 1) * P;
            if ((A = d + 832 + (v = 3 * (16 * u + fo[t.L]) / 2 * j) + (L = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != A) u = 0;
            else {
              if (A > t.Vb) {
                if (t.Vb = 0, t.Ec = i(A), t.Fc = 0, t.Ec == null) {
                  u = Tt(t, 1, "no memory during frame initialization.");
                  break e;
                }
                t.Vb = A;
              }
              A = t.Ec, S = t.Fc, t.Ac = A, t.Bc = S, S += d, t.Gd = l(j, Oa), t.Hd = 0, t.rb = l(V + 1, Ea), t.sb = 1, t.wa = ce ? l(ce, mi) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += P), e(!0), t.oc = A, t.pc = S, S += 832, t.ya = l(le, Xi), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += P), t.R = 16 * P, t.B = 8 * P, P = (j = fo[t.L]) * t.R, j = j / 2 * t.B, t.sa = A, t.ta = S + P, t.qa = t.sa, t.ra = t.ta + 16 * u * t.R + j, t.Ha = t.qa, t.Ia = t.ra + 8 * u * t.B + j, t.$c = 0, S += v, t.mb = L ? A : null, t.nb = L ? S : null, e(S + L <= t.Fc + t.Vb), Ji(t), s(t.Ac, t.Bc, 0, d), u = 1;
            }
          }
          if (u) {
            if (o.ka = 0, o.y = t.sa, o.O = t.ta, o.f = t.qa, o.N = t.ra, o.ea = t.Ha, o.Vd = t.Ia, o.fa = t.R, o.Rc = t.B, o.F = null, o.J = 0, !ro) {
              for (u = -255; 255 >= u; ++u) $t[255 + u] = 0 > u ? -u : u;
              for (u = -1020; 1020 >= u; ++u) Lr[1020 + u] = -128 > u ? -128 : 127 < u ? 127 : u;
              for (u = -112; 112 >= u; ++u) ba[112 + u] = -16 > u ? -16 : 15 < u ? 15 : u;
              for (u = -255; 510 >= u; ++u) Oi[255 + u] = 0 > u ? 0 : 255 < u ? 255 : u;
              ro = 1;
            }
            Mi = Qo, xr = Zo, ga = qa, pn = Ko, Mn = za, Bt = Da, Fi = na, no = Kr, ma = fs, ti = ra, ni = hs, Er = Ni, ri = ia, Ei = Ja, ii = Xa, Or = or, va = br, Fn = us, Gn[0] = ar, Gn[1] = es, Gn[2] = is, Gn[3] = as, Gn[4] = Wa, Gn[5] = xi, Gn[6] = Va, Gn[7] = Qi, Gn[8] = ss, Gn[9] = os, Rr[0] = Ua, Rr[1] = ns, Rr[2] = vr, Rr[3] = yi, Rr[4] = an, Rr[5] = rs, Rr[6] = Ha, Nr[0] = Ir, Nr[1] = ts, Nr[2] = cs, Nr[3] = ea, Nr[4] = Zr, Nr[5] = ls, Nr[6] = ta, u = 1;
          } else u = 0;
        }
        u && (u = function(J, ke) {
          for (J.M = 0; J.M < J.Va; ++J.M) {
            var be, G = J.Jc[J.M & J.Xb], $ = J.m, Ae = J;
            for (be = 0; be < Ae.za; ++be) {
              var Pe = $, _e = Ae, qe = _e.Ac, Oe = _e.Bc + 4 * be, Ze = _e.zc, Te = _e.ya[_e.aa + be];
              if (_e.Qa.Bb ? Te.$b = ue(Pe, _e.Pa.jb[0]) ? 2 + ue(Pe, _e.Pa.jb[2]) : ue(Pe, _e.Pa.jb[1]) : Te.$b = 0, _e.kc && (Te.Ad = ue(Pe, _e.Bd)), Te.Za = !ue(Pe, 145) + 0, Te.Za) {
                var yt = Te.Ob, Lt = 0;
                for (_e = 0; 4 > _e; ++_e) {
                  var bt, pt = Ze[0 + _e];
                  for (bt = 0; 4 > bt; ++bt) {
                    pt = S1[qe[Oe + bt]][pt];
                    for (var _t = Uc[ue(Pe, pt[0])]; 0 < _t; ) _t = Uc[2 * _t + ue(Pe, pt[_t])];
                    pt = -_t, qe[Oe + bt] = pt;
                  }
                  a(yt, Lt, qe, Oe, 4), Lt += 4, Ze[0 + _e] = pt;
                }
              } else pt = ue(Pe, 156) ? ue(Pe, 128) ? 1 : 3 : ue(Pe, 163) ? 2 : 0, Te.Ob[0] = pt, s(qe, Oe, pt, 4), s(Ze, 0, pt, 4);
              Te.Dd = ue(Pe, 142) ? ue(Pe, 114) ? ue(Pe, 183) ? 1 : 3 : 2 : 0;
            }
            if (Ae.m.Ka) return Tt(J, 7, "Premature end-of-partition0 encountered.");
            for (; J.ja < J.za; ++J.ja) {
              if (Ae = G, Pe = ($ = J).rb[$.sb - 1], qe = $.rb[$.sb + $.ja], be = $.ya[$.aa + $.ja], Oe = $.kc ? be.Ad : 0) Pe.la = qe.la = 0, be.Za || (Pe.Na = qe.Na = 0), be.Hc = 0, be.Gc = 0, be.ia = 0;
              else {
                var St, ut;
                if (Pe = qe, qe = Ae, Oe = $.Pa.Xc, Ze = $.ya[$.aa + $.ja], Te = $.pb[Ze.$b], _e = Ze.ad, yt = 0, Lt = $.rb[$.sb - 1], pt = bt = 0, s(_e, yt, 0, 384), Ze.Za) var Vt = 0, xn = Oe[3];
                else {
                  _t = i(16);
                  var Gt = Pe.Na + Lt.Na;
                  if (Gt = ya(qe, Oe[1], Gt, Te.Eb, 0, _t, 0), Pe.Na = Lt.Na = (0 < Gt) + 0, 1 < Gt) Mi(_t, 0, _e, yt);
                  else {
                    var Ln = _t[0] + 3 >> 3;
                    for (_t = 0; 256 > _t; _t += 16) _e[yt + _t] = Ln;
                  }
                  Vt = 1, xn = Oe[0];
                }
                var Nt = 15 & Pe.la, kn = 15 & Lt.la;
                for (_t = 0; 4 > _t; ++_t) {
                  var Pn = 1 & kn;
                  for (Ln = ut = 0; 4 > Ln; ++Ln) Nt = Nt >> 1 | (Pn = (Gt = ya(qe, xn, Gt = Pn + (1 & Nt), Te.Sc, Vt, _e, yt)) > Vt) << 7, ut = ut << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : _e[yt + 0] != 0), yt += 16;
                  Nt >>= 4, kn = kn >> 1 | Pn << 7, bt = (bt << 8 | ut) >>> 0;
                }
                for (xn = Nt, Vt = kn >> 4, St = 0; 4 > St; St += 2) {
                  for (ut = 0, Nt = Pe.la >> 4 + St, kn = Lt.la >> 4 + St, _t = 0; 2 > _t; ++_t) {
                    for (Pn = 1 & kn, Ln = 0; 2 > Ln; ++Ln) Gt = Pn + (1 & Nt), Nt = Nt >> 1 | (Pn = 0 < (Gt = ya(qe, Oe[2], Gt, Te.Qc, 0, _e, yt))) << 3, ut = ut << 2 | (3 < Gt ? 3 : 1 < Gt ? 2 : _e[yt + 0] != 0), yt += 16;
                    Nt >>= 2, kn = kn >> 1 | Pn << 5;
                  }
                  pt |= ut << 4 * St, xn |= Nt << 4 << St, Vt |= (240 & kn) << St;
                }
                Pe.la = xn, Lt.la = Vt, Ze.Hc = bt, Ze.Gc = pt, Ze.ia = 43690 & pt ? 0 : Te.ia, Oe = !(bt | pt);
              }
              if (0 < $.L && ($.wa[$.Y + $.ja] = $.gd[be.$b][be.Za], $.wa[$.Y + $.ja].La |= !Oe), Ae.Ka) return Tt(J, 7, "Premature end-of-file encountered.");
            }
            if (Ji(J), $ = ke, Ae = 1, be = (G = J).D, Pe = 0 < G.L && G.M >= G.zb && G.M <= G.Va, G.Aa == 0) e: {
              if (be.M = G.M, be.uc = Pe, ua(G, be), Ae = 1, be = (ut = G.D).Nb, Pe = (pt = fo[G.L]) * G.R, qe = pt / 2 * G.B, _t = 16 * be * G.R, Ln = 8 * be * G.B, Oe = G.sa, Ze = G.ta - Pe + _t, Te = G.qa, _e = G.ra - qe + Ln, yt = G.Ha, Lt = G.Ia - qe + Ln, kn = (Nt = ut.M) == 0, bt = Nt >= G.Va - 1, G.Aa == 2 && ua(G, ut), ut.uc) for (Pn = (Gt = G).D.M, e(Gt.D.uc), ut = Gt.yb; ut < Gt.Hb; ++ut) {
                Vt = ut, xn = Pn;
                var Zt = (rn = (Ot = Gt).D).Nb;
                St = Ot.R;
                var rn = rn.wa[rn.Y + Vt], gn = Ot.sa, Tn = Ot.ta + 16 * Zt * St + 16 * Vt, cr = rn.dd, Kt = rn.tc;
                if (Kt != 0) if (e(3 <= Kt), Ot.L == 1) 0 < Vt && Or(gn, Tn, St, Kt + 4), rn.La && Fn(gn, Tn, St, Kt), 0 < xn && ii(gn, Tn, St, Kt + 4), rn.La && va(gn, Tn, St, Kt);
                else {
                  var Ar = Ot.B, ai = Ot.qa, Ri = Ot.ra + 8 * Zt * Ar + 8 * Vt, Br = Ot.Ha, Ot = Ot.Ia + 8 * Zt * Ar + 8 * Vt;
                  Zt = rn.ld, 0 < Vt && (no(gn, Tn, St, Kt + 4, cr, Zt), ti(ai, Ri, Br, Ot, Ar, Kt + 4, cr, Zt)), rn.La && (Er(gn, Tn, St, Kt, cr, Zt), Ei(ai, Ri, Br, Ot, Ar, Kt, cr, Zt)), 0 < xn && (Fi(gn, Tn, St, Kt + 4, cr, Zt), ma(ai, Ri, Br, Ot, Ar, Kt + 4, cr, Zt)), rn.La && (ni(gn, Tn, St, Kt, cr, Zt), ri(ai, Ri, Br, Ot, Ar, Kt, cr, Zt));
                }
              }
              if (G.ia && alert("todo:DitherRow"), $.put != null) {
                if (ut = 16 * Nt, Nt = 16 * (Nt + 1), kn ? ($.y = G.sa, $.O = G.ta + _t, $.f = G.qa, $.N = G.ra + Ln, $.ea = G.Ha, $.W = G.Ia + Ln) : (ut -= pt, $.y = Oe, $.O = Ze, $.f = Te, $.N = _e, $.ea = yt, $.W = Lt), bt || (Nt -= pt), Nt > $.o && (Nt = $.o), $.F = null, $.J = null, G.Fa != null && 0 < G.Fa.length && ut < Nt && ($.J = ca(G, $, ut, Nt - ut), $.F = G.mb, $.F == null && $.F.length == 0)) {
                  Ae = Tt(G, 3, "Could not decode alpha data.");
                  break e;
                }
                ut < $.j && (pt = $.j - ut, ut = $.j, e(!(1 & pt)), $.O += G.R * pt, $.N += G.B * (pt >> 1), $.W += G.B * (pt >> 1), $.F != null && ($.J += $.width * pt)), ut < Nt && ($.O += $.v, $.N += $.v >> 1, $.W += $.v >> 1, $.F != null && ($.J += $.v), $.ka = ut - $.j, $.U = $.va - $.v, $.T = Nt - ut, Ae = $.put($));
              }
              be + 1 != G.Ic || bt || (a(G.sa, G.ta - Pe, Oe, Ze + 16 * G.R, Pe), a(G.qa, G.ra - qe, Te, _e + 8 * G.B, qe), a(G.Ha, G.Ia - qe, yt, Lt + 8 * G.B, qe));
            }
            if (!Ae) return Tt(J, 6, "Output aborted.");
          }
          return 1;
        }(t, o)), o.bc != null && o.bc(o), u &= 1;
      }
      return u ? (t.cb = 0, u) : 0;
    }
    function Hn(t, o, u, d, v) {
      v = t[o + u + 32 * d] + (v >> 3), t[o + u + 32 * d] = -256 & v ? 0 > v ? 0 : 255 : v;
    }
    function bi(t, o, u, d, v, L) {
      Hn(t, o, 0, u, d + v), Hn(t, o, 1, u, d + L), Hn(t, o, 2, u, d - L), Hn(t, o, 3, u, d - v);
    }
    function bn(t) {
      return (20091 * t >> 16) + t;
    }
    function Zi(t, o, u, d) {
      var v, L = 0, A = i(16);
      for (v = 0; 4 > v; ++v) {
        var S = t[o + 0] + t[o + 8], P = t[o + 0] - t[o + 8], j = (35468 * t[o + 4] >> 16) - bn(t[o + 12]), V = bn(t[o + 4]) + (35468 * t[o + 12] >> 16);
        A[L + 0] = S + V, A[L + 1] = P + j, A[L + 2] = P - j, A[L + 3] = S - V, L += 4, o++;
      }
      for (v = L = 0; 4 > v; ++v) S = (t = A[L + 0] + 4) + A[L + 8], P = t - A[L + 8], j = (35468 * A[L + 4] >> 16) - bn(A[L + 12]), Hn(u, d, 0, 0, S + (V = bn(A[L + 4]) + (35468 * A[L + 12] >> 16))), Hn(u, d, 1, 0, P + j), Hn(u, d, 2, 0, P - j), Hn(u, d, 3, 0, S - V), L++, d += 32;
    }
    function Da(t, o, u, d) {
      var v = t[o + 0] + 4, L = 35468 * t[o + 4] >> 16, A = bn(t[o + 4]), S = 35468 * t[o + 1] >> 16;
      bi(u, d, 0, v + A, t = bn(t[o + 1]), S), bi(u, d, 1, v + L, t, S), bi(u, d, 2, v - L, t, S), bi(u, d, 3, v - A, t, S);
    }
    function Zo(t, o, u, d, v) {
      Zi(t, o, u, d), v && Zi(t, o + 16, u, d + 4);
    }
    function qa(t, o, u, d) {
      xr(t, o + 0, u, d, 1), xr(t, o + 32, u, d + 128, 1);
    }
    function Ko(t, o, u, d) {
      var v;
      for (t = t[o + 0] + 4, v = 0; 4 > v; ++v) for (o = 0; 4 > o; ++o) Hn(u, d, o, v, t);
    }
    function za(t, o, u, d) {
      t[o + 0] && pn(t, o + 0, u, d), t[o + 16] && pn(t, o + 16, u, d + 4), t[o + 32] && pn(t, o + 32, u, d + 128), t[o + 48] && pn(t, o + 48, u, d + 128 + 4);
    }
    function Qo(t, o, u, d) {
      var v, L = i(16);
      for (v = 0; 4 > v; ++v) {
        var A = t[o + 0 + v] + t[o + 12 + v], S = t[o + 4 + v] + t[o + 8 + v], P = t[o + 4 + v] - t[o + 8 + v], j = t[o + 0 + v] - t[o + 12 + v];
        L[0 + v] = A + S, L[8 + v] = A - S, L[4 + v] = j + P, L[12 + v] = j - P;
      }
      for (v = 0; 4 > v; ++v) A = (t = L[0 + 4 * v] + 3) + L[3 + 4 * v], S = L[1 + 4 * v] + L[2 + 4 * v], P = L[1 + 4 * v] - L[2 + 4 * v], j = t - L[3 + 4 * v], u[d + 0] = A + S >> 3, u[d + 16] = j + P >> 3, u[d + 32] = A - S >> 3, u[d + 48] = j - P >> 3, d += 64;
    }
    function Ki(t, o, u) {
      var d, v = o - 32, L = _n, A = 255 - t[v - 1];
      for (d = 0; d < u; ++d) {
        var S, P = L, j = A + t[o - 1];
        for (S = 0; S < u; ++S) t[o + S] = P[j + t[v + S]];
        o += 32;
      }
    }
    function es(t, o) {
      Ki(t, o, 4);
    }
    function ts(t, o) {
      Ki(t, o, 8);
    }
    function ns(t, o) {
      Ki(t, o, 16);
    }
    function vr(t, o) {
      var u;
      for (u = 0; 16 > u; ++u) a(t, o + 32 * u, t, o - 32, 16);
    }
    function yi(t, o) {
      var u;
      for (u = 16; 0 < u; --u) s(t, o, t[o - 1], 16), o += 32;
    }
    function wi(t, o, u) {
      var d;
      for (d = 0; 16 > d; ++d) s(o, u + 32 * d, t, 16);
    }
    function Ua(t, o) {
      var u, d = 16;
      for (u = 0; 16 > u; ++u) d += t[o - 1 + 32 * u] + t[o + u - 32];
      wi(d >> 5, t, o);
    }
    function an(t, o) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[o - 1 + 32 * u];
      wi(d >> 4, t, o);
    }
    function rs(t, o) {
      var u, d = 8;
      for (u = 0; 16 > u; ++u) d += t[o + u - 32];
      wi(d >> 4, t, o);
    }
    function Ha(t, o) {
      wi(128, t, o);
    }
    function it(t, o, u) {
      return t + 2 * o + u + 2 >> 2;
    }
    function is(t, o) {
      var u, d = o - 32;
      for (d = new Uint8Array([it(t[d - 1], t[d + 0], t[d + 1]), it(t[d + 0], t[d + 1], t[d + 2]), it(t[d + 1], t[d + 2], t[d + 3]), it(t[d + 2], t[d + 3], t[d + 4])]), u = 0; 4 > u; ++u) a(t, o + 32 * u, d, 0, d.length);
    }
    function as(t, o) {
      var u = t[o - 1], d = t[o - 1 + 32], v = t[o - 1 + 64], L = t[o - 1 + 96];
      Me(t, o + 0, 16843009 * it(t[o - 1 - 32], u, d)), Me(t, o + 32, 16843009 * it(u, d, v)), Me(t, o + 64, 16843009 * it(d, v, L)), Me(t, o + 96, 16843009 * it(v, L, L));
    }
    function ar(t, o) {
      var u, d = 4;
      for (u = 0; 4 > u; ++u) d += t[o + u - 32] + t[o - 1 + 32 * u];
      for (d >>= 3, u = 0; 4 > u; ++u) s(t, o + 32 * u, d, 4);
    }
    function Wa(t, o) {
      var u = t[o - 1 + 0], d = t[o - 1 + 32], v = t[o - 1 + 64], L = t[o - 1 - 32], A = t[o + 0 - 32], S = t[o + 1 - 32], P = t[o + 2 - 32], j = t[o + 3 - 32];
      t[o + 0 + 96] = it(d, v, t[o - 1 + 96]), t[o + 1 + 96] = t[o + 0 + 64] = it(u, d, v), t[o + 2 + 96] = t[o + 1 + 64] = t[o + 0 + 32] = it(L, u, d), t[o + 3 + 96] = t[o + 2 + 64] = t[o + 1 + 32] = t[o + 0 + 0] = it(A, L, u), t[o + 3 + 64] = t[o + 2 + 32] = t[o + 1 + 0] = it(S, A, L), t[o + 3 + 32] = t[o + 2 + 0] = it(P, S, A), t[o + 3 + 0] = it(j, P, S);
    }
    function Va(t, o) {
      var u = t[o + 1 - 32], d = t[o + 2 - 32], v = t[o + 3 - 32], L = t[o + 4 - 32], A = t[o + 5 - 32], S = t[o + 6 - 32], P = t[o + 7 - 32];
      t[o + 0 + 0] = it(t[o + 0 - 32], u, d), t[o + 1 + 0] = t[o + 0 + 32] = it(u, d, v), t[o + 2 + 0] = t[o + 1 + 32] = t[o + 0 + 64] = it(d, v, L), t[o + 3 + 0] = t[o + 2 + 32] = t[o + 1 + 64] = t[o + 0 + 96] = it(v, L, A), t[o + 3 + 32] = t[o + 2 + 64] = t[o + 1 + 96] = it(L, A, S), t[o + 3 + 64] = t[o + 2 + 96] = it(A, S, P), t[o + 3 + 96] = it(S, P, P);
    }
    function xi(t, o) {
      var u = t[o - 1 + 0], d = t[o - 1 + 32], v = t[o - 1 + 64], L = t[o - 1 - 32], A = t[o + 0 - 32], S = t[o + 1 - 32], P = t[o + 2 - 32], j = t[o + 3 - 32];
      t[o + 0 + 0] = t[o + 1 + 64] = L + A + 1 >> 1, t[o + 1 + 0] = t[o + 2 + 64] = A + S + 1 >> 1, t[o + 2 + 0] = t[o + 3 + 64] = S + P + 1 >> 1, t[o + 3 + 0] = P + j + 1 >> 1, t[o + 0 + 96] = it(v, d, u), t[o + 0 + 64] = it(d, u, L), t[o + 0 + 32] = t[o + 1 + 96] = it(u, L, A), t[o + 1 + 32] = t[o + 2 + 96] = it(L, A, S), t[o + 2 + 32] = t[o + 3 + 96] = it(A, S, P), t[o + 3 + 32] = it(S, P, j);
    }
    function Qi(t, o) {
      var u = t[o + 0 - 32], d = t[o + 1 - 32], v = t[o + 2 - 32], L = t[o + 3 - 32], A = t[o + 4 - 32], S = t[o + 5 - 32], P = t[o + 6 - 32], j = t[o + 7 - 32];
      t[o + 0 + 0] = u + d + 1 >> 1, t[o + 1 + 0] = t[o + 0 + 64] = d + v + 1 >> 1, t[o + 2 + 0] = t[o + 1 + 64] = v + L + 1 >> 1, t[o + 3 + 0] = t[o + 2 + 64] = L + A + 1 >> 1, t[o + 0 + 32] = it(u, d, v), t[o + 1 + 32] = t[o + 0 + 96] = it(d, v, L), t[o + 2 + 32] = t[o + 1 + 96] = it(v, L, A), t[o + 3 + 32] = t[o + 2 + 96] = it(L, A, S), t[o + 3 + 64] = it(A, S, P), t[o + 3 + 96] = it(S, P, j);
    }
    function os(t, o) {
      var u = t[o - 1 + 0], d = t[o - 1 + 32], v = t[o - 1 + 64], L = t[o - 1 + 96];
      t[o + 0 + 0] = u + d + 1 >> 1, t[o + 2 + 0] = t[o + 0 + 32] = d + v + 1 >> 1, t[o + 2 + 32] = t[o + 0 + 64] = v + L + 1 >> 1, t[o + 1 + 0] = it(u, d, v), t[o + 3 + 0] = t[o + 1 + 32] = it(d, v, L), t[o + 3 + 32] = t[o + 1 + 64] = it(v, L, L), t[o + 3 + 64] = t[o + 2 + 64] = t[o + 0 + 96] = t[o + 1 + 96] = t[o + 2 + 96] = t[o + 3 + 96] = L;
    }
    function ss(t, o) {
      var u = t[o - 1 + 0], d = t[o - 1 + 32], v = t[o - 1 + 64], L = t[o - 1 + 96], A = t[o - 1 - 32], S = t[o + 0 - 32], P = t[o + 1 - 32], j = t[o + 2 - 32];
      t[o + 0 + 0] = t[o + 2 + 32] = u + A + 1 >> 1, t[o + 0 + 32] = t[o + 2 + 64] = d + u + 1 >> 1, t[o + 0 + 64] = t[o + 2 + 96] = v + d + 1 >> 1, t[o + 0 + 96] = L + v + 1 >> 1, t[o + 3 + 0] = it(S, P, j), t[o + 2 + 0] = it(A, S, P), t[o + 1 + 0] = t[o + 3 + 32] = it(u, A, S), t[o + 1 + 32] = t[o + 3 + 64] = it(d, u, A), t[o + 1 + 64] = t[o + 3 + 96] = it(v, d, u), t[o + 1 + 96] = it(L, v, d);
    }
    function cs(t, o) {
      var u;
      for (u = 0; 8 > u; ++u) a(t, o + 32 * u, t, o - 32, 8);
    }
    function ea(t, o) {
      var u;
      for (u = 0; 8 > u; ++u) s(t, o, t[o - 1], 8), o += 32;
    }
    function Jr(t, o, u) {
      var d;
      for (d = 0; 8 > d; ++d) s(o, u + 32 * d, t, 8);
    }
    function Ir(t, o) {
      var u, d = 8;
      for (u = 0; 8 > u; ++u) d += t[o + u - 32] + t[o - 1 + 32 * u];
      Jr(d >> 4, t, o);
    }
    function ls(t, o) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[o + u - 32];
      Jr(d >> 3, t, o);
    }
    function Zr(t, o) {
      var u, d = 4;
      for (u = 0; 8 > u; ++u) d += t[o - 1 + 32 * u];
      Jr(d >> 3, t, o);
    }
    function ta(t, o) {
      Jr(128, t, o);
    }
    function Li(t, o, u) {
      var d = t[o - u], v = t[o + 0], L = 3 * (v - d) + gs[1020 + t[o - 2 * u] - t[o + u]], A = io[112 + (L + 4 >> 3)];
      t[o - u] = _n[255 + d + io[112 + (L + 3 >> 3)]], t[o + 0] = _n[255 + v - A];
    }
    function Ga(t, o, u, d) {
      var v = t[o + 0], L = t[o + u];
      return On[255 + t[o - 2 * u] - t[o - u]] > d || On[255 + L - v] > d;
    }
    function Ya(t, o, u, d) {
      return 4 * On[255 + t[o - u] - t[o + 0]] + On[255 + t[o - 2 * u] - t[o + u]] <= d;
    }
    function $a(t, o, u, d, v) {
      var L = t[o - 3 * u], A = t[o - 2 * u], S = t[o - u], P = t[o + 0], j = t[o + u], V = t[o + 2 * u], ce = t[o + 3 * u];
      return 4 * On[255 + S - P] + On[255 + A - j] > d ? 0 : On[255 + t[o - 4 * u] - L] <= v && On[255 + L - A] <= v && On[255 + A - S] <= v && On[255 + ce - V] <= v && On[255 + V - j] <= v && On[255 + j - P] <= v;
    }
    function Xa(t, o, u, d) {
      var v = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Ya(t, o + d, u, v) && Li(t, o + d, u);
    }
    function or(t, o, u, d) {
      var v = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Ya(t, o + d * u, 1, v) && Li(t, o + d * u, 1);
    }
    function br(t, o, u, d) {
      var v;
      for (v = 3; 0 < v; --v) Xa(t, o += 4 * u, u, d);
    }
    function us(t, o, u, d) {
      var v;
      for (v = 3; 0 < v; --v) or(t, o += 4, u, d);
    }
    function Cr(t, o, u, d, v, L, A, S) {
      for (L = 2 * L + 1; 0 < v--; ) {
        if ($a(t, o, u, L, A)) if (Ga(t, o, u, S)) Li(t, o, u);
        else {
          var P = t, j = o, V = u, ce = P[j - 2 * V], le = P[j - V], J = P[j + 0], ke = P[j + V], be = P[j + 2 * V], G = 27 * (Ae = gs[1020 + 3 * (J - le) + gs[1020 + ce - ke]]) + 63 >> 7, $ = 18 * Ae + 63 >> 7, Ae = 9 * Ae + 63 >> 7;
          P[j - 3 * V] = _n[255 + P[j - 3 * V] + Ae], P[j - 2 * V] = _n[255 + ce + $], P[j - V] = _n[255 + le + G], P[j + 0] = _n[255 + J - G], P[j + V] = _n[255 + ke - $], P[j + 2 * V] = _n[255 + be - Ae];
        }
        o += d;
      }
    }
    function Wn(t, o, u, d, v, L, A, S) {
      for (L = 2 * L + 1; 0 < v--; ) {
        if ($a(t, o, u, L, A)) if (Ga(t, o, u, S)) Li(t, o, u);
        else {
          var P = t, j = o, V = u, ce = P[j - V], le = P[j + 0], J = P[j + V], ke = io[112 + ((be = 3 * (le - ce)) + 4 >> 3)], be = io[112 + (be + 3 >> 3)], G = ke + 1 >> 1;
          P[j - 2 * V] = _n[255 + P[j - 2 * V] + G], P[j - V] = _n[255 + ce + be], P[j + 0] = _n[255 + le - ke], P[j + V] = _n[255 + J - G];
        }
        o += d;
      }
    }
    function na(t, o, u, d, v, L) {
      Cr(t, o, u, 1, 16, d, v, L);
    }
    function Kr(t, o, u, d, v, L) {
      Cr(t, o, 1, u, 16, d, v, L);
    }
    function hs(t, o, u, d, v, L) {
      var A;
      for (A = 3; 0 < A; --A) Wn(t, o += 4 * u, u, 1, 16, d, v, L);
    }
    function Ni(t, o, u, d, v, L) {
      var A;
      for (A = 3; 0 < A; --A) Wn(t, o += 4, 1, u, 16, d, v, L);
    }
    function fs(t, o, u, d, v, L, A, S) {
      Cr(t, o, v, 1, 8, L, A, S), Cr(u, d, v, 1, 8, L, A, S);
    }
    function ra(t, o, u, d, v, L, A, S) {
      Cr(t, o, 1, v, 8, L, A, S), Cr(u, d, 1, v, 8, L, A, S);
    }
    function ia(t, o, u, d, v, L, A, S) {
      Wn(t, o + 4 * v, v, 1, 8, L, A, S), Wn(u, d + 4 * v, v, 1, 8, L, A, S);
    }
    function Ja(t, o, u, d, v, L, A, S) {
      Wn(t, o + 4, 1, v, 8, L, A, S), Wn(u, d + 4, 1, v, 8, L, A, S);
    }
    function Ai() {
      this.ba = new mn(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new Ft(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
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
      this.xb = this.a = 0, this.l = new vi(), this.ca = new mn(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new w(), this.Pb = 0, this.wd = new w(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Za(), this.ab = 0, this.gc = l(4, oa), this.Oc = 0;
    }
    function Si() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new vi(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Qr(t, o, u, d, v, L, A) {
      for (t = t == null ? 0 : t[o + 0], o = 0; o < A; ++o) v[L + o] = t + u[d + o] & 255, t = v[L + o];
    }
    function sa(t, o, u, d, v, L, A) {
      var S;
      if (t == null) Qr(null, null, u, d, v, L, A);
      else for (S = 0; S < A; ++S) v[L + S] = t[o + S] + u[d + S] & 255;
    }
    function jr(t, o, u, d, v, L, A) {
      if (t == null) Qr(null, null, u, d, v, L, A);
      else {
        var S, P = t[o + 0], j = P, V = P;
        for (S = 0; S < A; ++S) j = V + (P = t[o + S]) - j, V = u[d + S] + (-256 & j ? 0 > j ? 0 : 255 : j) & 255, j = P, v[L + S] = V;
      }
    }
    function ca(t, o, u, d) {
      var v = o.width, L = o.o;
      if (e(t != null && o != null), 0 > u || 0 >= d || u + d > L) return null;
      if (!t.Cc) {
        if (t.ga == null) {
          var A;
          if (t.ga = new Si(), (A = t.ga == null) || (A = o.width * o.o, e(t.Gb.length == 0), t.Gb = i(A), t.Uc = 0, t.Gb == null ? A = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, A = 1), A = !A), !A) {
            A = t.ga;
            var S = t.Fa, P = t.P, j = t.qc, V = t.mb, ce = t.nb, le = P + 1, J = j - 1, ke = A.l;
            if (e(S != null && V != null && o != null), Tr[0] = null, Tr[1] = Qr, Tr[2] = sa, Tr[3] = jr, A.ca = V, A.tb = ce, A.c = o.width, A.i = o.height, e(0 < A.c && 0 < A.i), 1 >= j) o = 0;
            else if (A.$a = S[P + 0] >> 0 & 3, A.Z = S[P + 0] >> 2 & 3, A.Lc = S[P + 0] >> 4 & 3, P = S[P + 0] >> 6 & 3, 0 > A.$a || 1 < A.$a || 4 <= A.Z || 1 < A.Lc || P) o = 0;
            else if (ke.put = er, ke.ac = tn, ke.bc = tr, ke.ma = A, ke.width = o.width, ke.height = o.height, ke.Da = o.Da, ke.v = o.v, ke.va = o.va, ke.j = o.j, ke.o = o.o, A.$a) e: {
              e(A.$a == 1), o = Cn();
              t: for (; ; ) {
                if (o == null) {
                  o = 0;
                  break e;
                }
                if (e(A != null), A.mc = o, o.c = A.c, o.i = A.i, o.l = A.l, o.l.ma = A, o.l.width = A.c, o.l.height = A.i, o.a = 0, Z(o.m, S, le, J), !ir(A.c, A.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && mr(o.s) ? (A.ic = 1, S = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = i(S), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (A.ic = 0, o = Xr(o, A.c)), !o)) break t;
                o = 1;
                break e;
              }
              A.mc = null, o = 0;
            }
            else o = J >= A.c * A.i;
            A = !o;
          }
          if (A) return null;
          t.ga.Lc != 1 ? t.Ga = 0 : d = L - u;
        }
        e(t.ga != null), e(u + d <= L);
        e: {
          if (o = (S = t.ga).c, L = S.l.o, S.$a == 0) {
            if (le = t.rc, J = t.Vc, ke = t.Fa, P = t.P + 1 + u * o, j = t.mb, V = t.nb + u * o, e(P <= t.P + t.qc), S.Z != 0) for (e(Tr[S.Z] != null), A = 0; A < d; ++A) Tr[S.Z](le, J, ke, P, j, V, o), le = j, J = V, V += o, P += o;
            else for (A = 0; A < d; ++A) a(j, V, ke, P, o), le = j, J = V, V += o, P += o;
            t.rc = le, t.Vc = J;
          } else {
            if (e(S.mc != null), o = u + d, e((A = S.mc) != null), e(o <= A.i), A.C >= o) o = 1;
            else if (S.ic || ee(), S.ic) {
              S = A.V, le = A.Ba, J = A.c;
              var be = A.i, G = (ke = 1, P = A.$ / J, j = A.$ % J, V = A.m, ce = A.s, A.$), $ = J * be, Ae = J * o, Pe = ce.wc, _e = G < Ae ? Ht(ce, j, P) : null;
              e(G <= $), e(o <= be), e(mr(ce));
              t: for (; ; ) {
                for (; !V.h && G < Ae; ) {
                  if (j & Pe || (_e = Ht(ce, j, P)), e(_e != null), Y(V), 256 > (be = vn(_e.G[0], _e.H[0], V))) S[le + G] = be, ++G, ++j >= J && (j = 0, ++P <= o && !(P % 16) && zn(A, P));
                  else {
                    if (!(280 > be)) {
                      ke = 0;
                      break t;
                    }
                    be = Dn(be - 256, V);
                    var qe, Oe = vn(_e.G[4], _e.H[4], V);
                    if (Y(V), !(G >= (Oe = nr(J, Oe = Dn(Oe, V))) && $ - G >= be)) {
                      ke = 0;
                      break t;
                    }
                    for (qe = 0; qe < be; ++qe) S[le + G + qe] = S[le + G + qe - Oe];
                    for (G += be, j += be; j >= J; ) j -= J, ++P <= o && !(P % 16) && zn(A, P);
                    G < Ae && j & Pe && (_e = Ht(ce, j, P));
                  }
                  e(V.h == T(V));
                }
                zn(A, P > o ? o : P);
                break t;
              }
              !ke || V.h && G < $ ? (ke = 0, A.a = V.h ? 5 : 3) : A.$ = G, o = ke;
            } else o = Un(A, A.V, A.Ba, A.c, A.i, o, fi);
            if (!o) {
              d = 0;
              break e;
            }
          }
          u + d >= L && (t.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (t.Cc && ((d = t.ga) != null && (d.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return t.nb + u * v;
    }
    function c(t, o, u, d, v, L) {
      for (; 0 < v--; ) {
        var A, S = t, P = o + (u ? 1 : 0), j = t, V = o + (u ? 0 : 3);
        for (A = 0; A < d; ++A) {
          var ce = j[V + 4 * A];
          ce != 255 && (ce *= 32897, S[P + 4 * A + 0] = S[P + 4 * A + 0] * ce >> 23, S[P + 4 * A + 1] = S[P + 4 * A + 1] * ce >> 23, S[P + 4 * A + 2] = S[P + 4 * A + 2] * ce >> 23);
        }
        o += L;
      }
    }
    function b(t, o, u, d, v) {
      for (; 0 < d--; ) {
        var L;
        for (L = 0; L < u; ++L) {
          var A = t[o + 2 * L + 0], S = 15 & (j = t[o + 2 * L + 1]), P = 4369 * S, j = (240 & j | j >> 4) * P >> 16;
          t[o + 2 * L + 0] = (240 & A | A >> 4) * P >> 16 & 240 | (15 & A | A << 4) * P >> 16 >> 4 & 15, t[o + 2 * L + 1] = 240 & j | S;
        }
        o += v;
      }
    }
    function E(t, o, u, d, v, L, A, S) {
      var P, j, V = 255;
      for (j = 0; j < v; ++j) {
        for (P = 0; P < d; ++P) {
          var ce = t[o + P];
          L[A + 4 * P] = ce, V &= ce;
        }
        o += u, A += S;
      }
      return V != 255;
    }
    function H(t, o, u, d, v) {
      var L;
      for (L = 0; L < v; ++L) u[d + L] = t[o + L] >> 8;
    }
    function ee() {
      En = c, Pt = b, It = E, Dt = H;
    }
    function xe(t, o, u) {
      z[t] = function(d, v, L, A, S, P, j, V, ce, le, J, ke, be, G, $, Ae, Pe) {
        var _e, qe = Pe - 1 >> 1, Oe = S[P + 0] | j[V + 0] << 16, Ze = ce[le + 0] | J[ke + 0] << 16;
        e(d != null);
        var Te = 3 * Oe + Ze + 131074 >> 2;
        for (o(d[v + 0], 255 & Te, Te >> 16, be, G), L != null && (Te = 3 * Ze + Oe + 131074 >> 2, o(L[A + 0], 255 & Te, Te >> 16, $, Ae)), _e = 1; _e <= qe; ++_e) {
          var yt = S[P + _e] | j[V + _e] << 16, Lt = ce[le + _e] | J[ke + _e] << 16, bt = Oe + yt + Ze + Lt + 524296, pt = bt + 2 * (yt + Ze) >> 3;
          Te = pt + Oe >> 1, Oe = (bt = bt + 2 * (Oe + Lt) >> 3) + yt >> 1, o(d[v + 2 * _e - 1], 255 & Te, Te >> 16, be, G + (2 * _e - 1) * u), o(d[v + 2 * _e - 0], 255 & Oe, Oe >> 16, be, G + (2 * _e - 0) * u), L != null && (Te = bt + Ze >> 1, Oe = pt + Lt >> 1, o(L[A + 2 * _e - 1], 255 & Te, Te >> 16, $, Ae + (2 * _e - 1) * u), o(L[A + 2 * _e + 0], 255 & Oe, Oe >> 16, $, Ae + (2 * _e + 0) * u)), Oe = yt, Ze = Lt;
        }
        1 & Pe || (Te = 3 * Oe + Ze + 131074 >> 2, o(d[v + Pe - 1], 255 & Te, Te >> 16, be, G + (Pe - 1) * u), L != null && (Te = 3 * Ze + Oe + 131074 >> 2, o(L[A + Pe - 1], 255 & Te, Te >> 16, $, Ae + (Pe - 1) * u)));
      };
    }
    function Ie() {
      Rn[ao] = I1, Rn[oo] = Wc, Rn[Dc] = C1, Rn[so] = Vc, Rn[co] = Gc, Rn[ms] = Yc, Rn[qc] = j1, Rn[vs] = Wc, Rn[bs] = Vc, Rn[lo] = Gc, Rn[ys] = Yc;
    }
    function Be(t) {
      return t & -16384 ? 0 > t ? 0 : 255 : t >> M1;
    }
    function Xe(t, o) {
      return Be((19077 * t >> 8) + (26149 * o >> 8) - 14234);
    }
    function ct(t, o, u) {
      return Be((19077 * t >> 8) - (6419 * o >> 8) - (13320 * u >> 8) + 8708);
    }
    function ot(t, o) {
      return Be((19077 * t >> 8) + (33050 * o >> 8) - 17685);
    }
    function vt(t, o, u, d, v) {
      d[v + 0] = Xe(t, u), d[v + 1] = ct(t, o, u), d[v + 2] = ot(t, o);
    }
    function Mt(t, o, u, d, v) {
      d[v + 0] = ot(t, o), d[v + 1] = ct(t, o, u), d[v + 2] = Xe(t, u);
    }
    function Et(t, o, u, d, v) {
      var L = ct(t, o, u);
      o = L << 3 & 224 | ot(t, o) >> 3, d[v + 0] = 248 & Xe(t, u) | L >> 5, d[v + 1] = o;
    }
    function Wt(t, o, u, d, v) {
      var L = 240 & ot(t, o) | 15;
      d[v + 0] = 240 & Xe(t, u) | ct(t, o, u) >> 4, d[v + 1] = L;
    }
    function on(t, o, u, d, v) {
      d[v + 0] = 255, vt(t, o, u, d, v + 1);
    }
    function Jt(t, o, u, d, v) {
      Mt(t, o, u, d, v), d[v + 3] = 255;
    }
    function Vn(t, o, u, d, v) {
      vt(t, o, u, d, v), d[v + 3] = 255;
    }
    function Sn(t, o) {
      return 0 > t ? 0 : t > o ? o : t;
    }
    function sr(t, o, u) {
      z[t] = function(d, v, L, A, S, P, j, V, ce) {
        for (var le = V + (-2 & ce) * u; V != le; ) o(d[v + 0], L[A + 0], S[P + 0], j, V), o(d[v + 1], L[A + 0], S[P + 0], j, V + u), v += 2, ++A, ++P, V += 2 * u;
        1 & ce && o(d[v + 0], L[A + 0], S[P + 0], j, V);
      };
    }
    function Ka(t, o, u) {
      return u == 0 ? t == 0 ? o == 0 ? 6 : 5 : o == 0 ? 4 : 0 : u;
    }
    function la(t, o, u, d, v) {
      switch (t >>> 30) {
        case 3:
          xr(o, u, d, v, 0);
          break;
        case 2:
          Bt(o, u, d, v);
          break;
        case 1:
          pn(o, u, d, v);
      }
    }
    function ua(t, o) {
      var u, d, v = o.M, L = o.Nb, A = t.oc, S = t.pc + 40, P = t.oc, j = t.pc + 584, V = t.oc, ce = t.pc + 600;
      for (u = 0; 16 > u; ++u) A[S + 32 * u - 1] = 129;
      for (u = 0; 8 > u; ++u) P[j + 32 * u - 1] = 129, V[ce + 32 * u - 1] = 129;
      for (0 < v ? A[S - 1 - 32] = P[j - 1 - 32] = V[ce - 1 - 32] = 129 : (s(A, S - 32 - 1, 127, 21), s(P, j - 32 - 1, 127, 9), s(V, ce - 32 - 1, 127, 9)), d = 0; d < t.za; ++d) {
        var le = o.ya[o.aa + d];
        if (0 < d) {
          for (u = -1; 16 > u; ++u) a(A, S + 32 * u - 4, A, S + 32 * u + 12, 4);
          for (u = -1; 8 > u; ++u) a(P, j + 32 * u - 4, P, j + 32 * u + 4, 4), a(V, ce + 32 * u - 4, V, ce + 32 * u + 4, 4);
        }
        var J = t.Gd, ke = t.Hd + d, be = le.ad, G = le.Hc;
        if (0 < v && (a(A, S - 32, J[ke].y, 0, 16), a(P, j - 32, J[ke].f, 0, 8), a(V, ce - 32, J[ke].ea, 0, 8)), le.Za) {
          var $ = A, Ae = S - 32 + 16;
          for (0 < v && (d >= t.za - 1 ? s($, Ae, J[ke].y[15], 4) : a($, Ae, J[ke + 1].y, 0, 4)), u = 0; 4 > u; u++) $[Ae + 128 + u] = $[Ae + 256 + u] = $[Ae + 384 + u] = $[Ae + 0 + u];
          for (u = 0; 16 > u; ++u, G <<= 2) $ = A, Ae = S + Xc[u], Gn[le.Ob[u]]($, Ae), la(G, be, 16 * +u, $, Ae);
        } else if ($ = Ka(d, v, le.Ob[0]), Rr[$](A, S), G != 0) for (u = 0; 16 > u; ++u, G <<= 2) la(G, be, 16 * +u, A, S + Xc[u]);
        for (u = le.Gc, $ = Ka(d, v, le.Dd), Nr[$](P, j), Nr[$](V, ce), G = be, $ = P, Ae = j, 255 & (le = u >> 0) && (170 & le ? ga(G, 256, $, Ae) : Mn(G, 256, $, Ae)), le = V, G = ce, 255 & (u >>= 8) && (170 & u ? ga(be, 320, le, G) : Mn(be, 320, le, G)), v < t.Ub - 1 && (a(J[ke].y, 0, A, S + 480, 16), a(J[ke].f, 0, P, j + 224, 8), a(J[ke].ea, 0, V, ce + 224, 8)), u = 8 * L * t.B, J = t.sa, ke = t.ta + 16 * d + 16 * L * t.R, be = t.qa, le = t.ra + 8 * d + u, G = t.Ha, $ = t.Ia + 8 * d + u, u = 0; 16 > u; ++u) a(J, ke + u * t.R, A, S + 32 * u, 16);
        for (u = 0; 8 > u; ++u) a(be, le + u * t.B, P, j + 32 * u, 8), a(G, $ + u * t.B, V, ce + 32 * u, 8);
      }
    }
    function _i(t, o, u, d, v, L, A, S, P) {
      var j = [0], V = [0], ce = 0, le = P != null ? P.kd : 0, J = P ?? new aa();
      if (t == null || 12 > u) return 7;
      J.data = t, J.w = o, J.ha = u, o = [o], u = [u], J.gb = [J.gb];
      e: {
        var ke = o, be = u, G = J.gb;
        if (e(t != null), e(be != null), e(G != null), G[0] = 0, 12 <= be[0] && !r(t, ke[0], "RIFF")) {
          if (r(t, ke[0] + 8, "WEBP")) {
            G = 3;
            break e;
          }
          var $ = Fe(t, ke[0] + 4);
          if (12 > $ || 4294967286 < $) {
            G = 3;
            break e;
          }
          if (le && $ > be[0] - 8) {
            G = 7;
            break e;
          }
          G[0] = $, ke[0] += 12, be[0] -= 12;
        }
        G = 0;
      }
      if (G != 0) return G;
      for ($ = 0 < J.gb[0], u = u[0]; ; ) {
        e: {
          var Ae = t;
          be = o, G = u;
          var Pe = j, _e = V, qe = ke = [0];
          if ((Te = ce = [ce])[0] = 0, 8 > G[0]) G = 7;
          else {
            if (!r(Ae, be[0], "VP8X")) {
              if (Fe(Ae, be[0] + 4) != 10) {
                G = 3;
                break e;
              }
              if (18 > G[0]) {
                G = 7;
                break e;
              }
              var Oe = Fe(Ae, be[0] + 8), Ze = 1 + Ee(Ae, be[0] + 12);
              if (2147483648 <= Ze * (Ae = 1 + Ee(Ae, be[0] + 15))) {
                G = 3;
                break e;
              }
              qe != null && (qe[0] = Oe), Pe != null && (Pe[0] = Ze), _e != null && (_e[0] = Ae), be[0] += 18, G[0] -= 18, Te[0] = 1;
            }
            G = 0;
          }
        }
        if (ce = ce[0], ke = ke[0], G != 0) return G;
        if (be = !!(2 & ke), !$ && ce) return 3;
        if (L != null && (L[0] = !!(16 & ke)), A != null && (A[0] = be), S != null && (S[0] = 0), A = j[0], ke = V[0], ce && be && P == null) {
          G = 0;
          break;
        }
        if (4 > u) {
          G = 7;
          break;
        }
        if ($ && ce || !$ && !ce && !r(t, o[0], "ALPH")) {
          u = [u], J.na = [J.na], J.P = [J.P], J.Sa = [J.Sa];
          e: {
            Oe = t, G = o, $ = u;
            var Te = J.gb;
            Pe = J.na, _e = J.P, qe = J.Sa, Ze = 22, e(Oe != null), e($ != null), Ae = G[0];
            var yt = $[0];
            for (e(Pe != null), e(qe != null), Pe[0] = null, _e[0] = null, qe[0] = 0; ; ) {
              if (G[0] = Ae, $[0] = yt, 8 > yt) {
                G = 7;
                break e;
              }
              var Lt = Fe(Oe, Ae + 4);
              if (4294967286 < Lt) {
                G = 3;
                break e;
              }
              var bt = 8 + Lt + 1 & -2;
              if (Ze += bt, 0 < Te && Ze > Te) {
                G = 3;
                break e;
              }
              if (!r(Oe, Ae, "VP8 ") || !r(Oe, Ae, "VP8L")) {
                G = 0;
                break e;
              }
              if (yt[0] < bt) {
                G = 7;
                break e;
              }
              r(Oe, Ae, "ALPH") || (Pe[0] = Oe, _e[0] = Ae + 8, qe[0] = Lt), Ae += bt, yt -= bt;
            }
          }
          if (u = u[0], J.na = J.na[0], J.P = J.P[0], J.Sa = J.Sa[0], G != 0) break;
        }
        u = [u], J.Ja = [J.Ja], J.xa = [J.xa];
        e: if (Te = t, G = o, $ = u, Pe = J.gb[0], _e = J.Ja, qe = J.xa, Oe = G[0], Ae = !r(Te, Oe, "VP8 "), Ze = !r(Te, Oe, "VP8L"), e(Te != null), e($ != null), e(_e != null), e(qe != null), 8 > $[0]) G = 7;
        else {
          if (Ae || Ze) {
            if (Te = Fe(Te, Oe + 4), 12 <= Pe && Te > Pe - 12) {
              G = 3;
              break e;
            }
            if (le && Te > $[0] - 8) {
              G = 7;
              break e;
            }
            _e[0] = Te, G[0] += 8, $[0] -= 8, qe[0] = Ze;
          } else qe[0] = 5 <= $[0] && Te[Oe + 0] == 47 && !(Te[Oe + 4] >> 5), _e[0] = $[0];
          G = 0;
        }
        if (u = u[0], J.Ja = J.Ja[0], J.xa = J.xa[0], o = o[0], G != 0) break;
        if (4294967286 < J.Ja) return 3;
        if (S == null || be || (S[0] = J.xa ? 2 : 1), A = [A], ke = [ke], J.xa) {
          if (5 > u) {
            G = 7;
            break;
          }
          S = A, le = ke, be = L, t == null || 5 > u ? t = 0 : 5 <= u && t[o + 0] == 47 && !(t[o + 4] >> 5) ? ($ = [0], Te = [0], Pe = [0], Z(_e = new w(), t, o, u), et(_e, $, Te, Pe) ? (S != null && (S[0] = $[0]), le != null && (le[0] = Te[0]), be != null && (be[0] = Pe[0]), t = 1) : t = 0) : t = 0;
        } else {
          if (10 > u) {
            G = 7;
            break;
          }
          S = ke, t == null || 10 > u || !Ra(t, o + 3, u - 3) ? t = 0 : (le = t[o + 0] | t[o + 1] << 8 | t[o + 2] << 16, be = 16383 & (t[o + 7] << 8 | t[o + 6]), t = 16383 & (t[o + 9] << 8 | t[o + 8]), 1 & le || 3 < (le >> 1 & 7) || !(le >> 4 & 1) || le >> 5 >= J.Ja || !be || !t ? t = 0 : (A && (A[0] = be), S && (S[0] = t), t = 1));
        }
        if (!t || (A = A[0], ke = ke[0], ce && (j[0] != A || V[0] != ke))) return 3;
        P != null && (P[0] = J, P.offset = o - P.w, e(4294967286 > o - P.w), e(P.offset == P.ha - u));
        break;
      }
      return G == 0 || G == 7 && ce && P == null ? (L != null && (L[0] |= J.na != null && 0 < J.na.length), d != null && (d[0] = A), v != null && (v[0] = ke), 0) : G;
    }
    function ha(t, o, u) {
      var d = o.width, v = o.height, L = 0, A = 0, S = d, P = v;
      if (o.Da = t != null && 0 < t.Da, o.Da && (S = t.cd, P = t.bd, L = t.v, A = t.j, 11 > u || (L &= -2, A &= -2), 0 > L || 0 > A || 0 >= S || 0 >= P || L + S > d || A + P > v)) return 0;
      if (o.v = L, o.j = A, o.va = L + S, o.o = A + P, o.U = S, o.T = P, o.da = t != null && 0 < t.da, o.da) {
        if (!rt(S, P, u = [t.ib], L = [t.hb])) return 0;
        o.ib = u[0], o.hb = L[0];
      }
      return o.ob = t != null && t.ob, o.Kb = t == null || !t.Sd, o.da && (o.ob = o.ib < 3 * d / 4 && o.hb < 3 * v / 4, o.Kb = 0), 1;
    }
    function fa(t) {
      if (t == null) return 2;
      if (11 > t.S) {
        var o = t.f.RGBA;
        o.fb += (t.height - 1) * o.A, o.A = -o.A;
      } else o = t.f.kb, t = t.height, o.O += (t - 1) * o.fa, o.fa = -o.fa, o.N += (t - 1 >> 1) * o.Ab, o.Ab = -o.Ab, o.W += (t - 1 >> 1) * o.Db, o.Db = -o.Db, o.F != null && (o.J += (t - 1) * o.lb, o.lb = -o.lb);
      return 0;
    }
    function ki(t, o, u, d) {
      if (d == null || 0 >= t || 0 >= o) return 2;
      if (u != null) {
        if (u.Da) {
          var v = u.cd, L = u.bd, A = -2 & u.v, S = -2 & u.j;
          if (0 > A || 0 > S || 0 >= v || 0 >= L || A + v > t || S + L > o) return 2;
          t = v, o = L;
        }
        if (u.da) {
          if (!rt(t, o, v = [u.ib], L = [u.hb])) return 2;
          t = v[0], o = L[0];
        }
      }
      d.width = t, d.height = o;
      e: {
        var P = d.width, j = d.height;
        if (t = d.S, 0 >= P || 0 >= j || !(t >= ao && 13 > t)) t = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            A = L = v = o = 0;
            var V = (S = P * Jc[t]) * j;
            if (11 > t || (L = (j + 1) / 2 * (o = (P + 1) / 2), t == 12 && (A = (v = P) * j)), (j = i(V + 2 * L + A)) == null) {
              t = 1;
              break e;
            }
            d.sd = j, 11 > t ? ((P = d.f.RGBA).eb = j, P.fb = 0, P.A = S, P.size = V) : ((P = d.f.kb).y = j, P.O = 0, P.fa = S, P.Fd = V, P.f = j, P.N = 0 + V, P.Ab = o, P.Cd = L, P.ea = j, P.W = 0 + V + L, P.Db = o, P.Ed = L, t == 12 && (P.F = j, P.J = 0 + V + 2 * L), P.Tc = A, P.lb = v);
          }
          if (o = 1, v = d.S, L = d.width, A = d.height, v >= ao && 13 > v) if (11 > v) t = d.f.RGBA, o &= (S = Math.abs(t.A)) * (A - 1) + L <= t.size, o &= S >= L * Jc[v], o &= t.eb != null;
          else {
            t = d.f.kb, S = (L + 1) / 2, V = (A + 1) / 2, P = Math.abs(t.fa), j = Math.abs(t.Ab);
            var ce = Math.abs(t.Db), le = Math.abs(t.lb), J = le * (A - 1) + L;
            o &= P * (A - 1) + L <= t.Fd, o &= j * (V - 1) + S <= t.Cd, o = (o &= ce * (V - 1) + S <= t.Ed) & P >= L & j >= S & ce >= S, o &= t.y != null, o &= t.f != null, o &= t.ea != null, v == 12 && (o &= le >= L, o &= J <= t.Tc, o &= t.F != null);
          }
          else o = 0;
          t = o ? 0 : 2;
        }
      }
      return t != 0 || u != null && u.fd && (t = fa(d)), t;
    }
    var nn = 64, Pi = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Ii = 24, Ci = 32, da = 8, yn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    Ne("Predictor0", "PredictorAdd0"), z.Predictor0 = function() {
      return 4278190080;
    }, z.Predictor1 = function(t) {
      return t;
    }, z.Predictor2 = function(t, o, u) {
      return o[u + 0];
    }, z.Predictor3 = function(t, o, u) {
      return o[u + 1];
    }, z.Predictor4 = function(t, o, u) {
      return o[u - 1];
    }, z.Predictor5 = function(t, o, u) {
      return pe(pe(t, o[u + 1]), o[u + 0]);
    }, z.Predictor6 = function(t, o, u) {
      return pe(t, o[u - 1]);
    }, z.Predictor7 = function(t, o, u) {
      return pe(t, o[u + 0]);
    }, z.Predictor8 = function(t, o, u) {
      return pe(o[u - 1], o[u + 0]);
    }, z.Predictor9 = function(t, o, u) {
      return pe(o[u + 0], o[u + 1]);
    }, z.Predictor10 = function(t, o, u) {
      return pe(pe(t, o[u - 1]), pe(o[u + 0], o[u + 1]));
    }, z.Predictor11 = function(t, o, u) {
      var d = o[u + 0];
      return 0 >= je(d >> 24 & 255, t >> 24 & 255, (o = o[u - 1]) >> 24 & 255) + je(d >> 16 & 255, t >> 16 & 255, o >> 16 & 255) + je(d >> 8 & 255, t >> 8 & 255, o >> 8 & 255) + je(255 & d, 255 & t, 255 & o) ? d : t;
    }, z.Predictor12 = function(t, o, u) {
      var d = o[u + 0];
      return (ge((t >> 24 & 255) + (d >> 24 & 255) - ((o = o[u - 1]) >> 24 & 255)) << 24 | ge((t >> 16 & 255) + (d >> 16 & 255) - (o >> 16 & 255)) << 16 | ge((t >> 8 & 255) + (d >> 8 & 255) - (o >> 8 & 255)) << 8 | ge((255 & t) + (255 & d) - (255 & o))) >>> 0;
    }, z.Predictor13 = function(t, o, u) {
      var d = o[u - 1];
      return (K((t = pe(t, o[u + 0])) >> 24 & 255, d >> 24 & 255) << 24 | K(t >> 16 & 255, d >> 16 & 255) << 16 | K(t >> 8 & 255, d >> 8 & 255) << 8 | K(t >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var ps = z.PredictorAdd0;
    z.PredictorAdd1 = ze, Ne("Predictor2", "PredictorAdd2"), Ne("Predictor3", "PredictorAdd3"), Ne("Predictor4", "PredictorAdd4"), Ne("Predictor5", "PredictorAdd5"), Ne("Predictor6", "PredictorAdd6"), Ne("Predictor7", "PredictorAdd7"), Ne("Predictor8", "PredictorAdd8"), Ne("Predictor9", "PredictorAdd9"), Ne("Predictor10", "PredictorAdd10"), Ne("Predictor11", "PredictorAdd11"), Ne("Predictor12", "PredictorAdd12"), Ne("Predictor13", "PredictorAdd13");
    var pa = z.PredictorAdd2;
    Ye("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
      return t >> 8 & 255;
    }, function(t) {
      return t;
    }), Ye("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
      return t;
    }, function(t) {
      return t >> 8 & 255;
    });
    var Qa, jn = z.ColorIndexInverseTransform, ji = z.MapARGB, eo = z.VP8LColorIndexInverseTransformAlpha, to = z.MapAlpha, Mr = z.VP8LPredictorsAdd = [];
    Mr.length = 16, (z.VP8LPredictors = []).length = 16, (z.VP8LPredictorsAdd_C = []).length = 16, (z.VP8LPredictors_C = []).length = 16;
    var ei, wn, dn, Fr, yr, wr, Mi, xr, Bt, ga, pn, Mn, Fi, no, ma, ti, ni, Er, ri, Ei, ii, Or, va, Fn, En, Pt, It, Dt, $t = i(511), Lr = i(2041), ba = i(225), Oi = i(767), ro = 0, gs = Lr, io = ba, _n = Oi, On = $t, ao = 0, oo = 1, Dc = 2, so = 3, co = 4, ms = 5, qc = 6, vs = 7, bs = 8, lo = 9, ys = 10, g1 = [2, 3, 7], m1 = [3, 3, 11], zc = [280, 256, 256, 256, 40], v1 = [0, 1, 1, 1, 0], b1 = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], y1 = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], w1 = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], x1 = 8, ws = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], xs = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ya = null, L1 = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], N1 = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], Uc = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], A1 = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], S1 = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], _1 = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], k1 = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Rr = [], Gn = [], Nr = [], P1 = 1, Hc = 2, Tr = [], Rn = [];
    xe("UpsampleRgbLinePair", vt, 3), xe("UpsampleBgrLinePair", Mt, 3), xe("UpsampleRgbaLinePair", Vn, 4), xe("UpsampleBgraLinePair", Jt, 4), xe("UpsampleArgbLinePair", on, 4), xe("UpsampleRgba4444LinePair", Wt, 2), xe("UpsampleRgb565LinePair", Et, 2);
    var I1 = z.UpsampleRgbLinePair, C1 = z.UpsampleBgrLinePair, Wc = z.UpsampleRgbaLinePair, Vc = z.UpsampleBgraLinePair, Gc = z.UpsampleArgbLinePair, Yc = z.UpsampleRgba4444LinePair, j1 = z.UpsampleRgb565LinePair, uo = 16, ho = 1 << uo - 1, wa = -227, Ls = 482, M1 = 6, $c = 0, F1 = i(256), E1 = i(256), O1 = i(256), R1 = i(256), T1 = i(Ls - wa), B1 = i(Ls - wa);
    sr("YuvToRgbRow", vt, 3), sr("YuvToBgrRow", Mt, 3), sr("YuvToRgbaRow", Vn, 4), sr("YuvToBgraRow", Jt, 4), sr("YuvToArgbRow", on, 4), sr("YuvToRgba4444Row", Wt, 2), sr("YuvToRgb565Row", Et, 2);
    var Xc = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], fo = [0, 2, 8], D1 = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], q1 = 1;
    this.WebPDecodeRGBA = function(t, o, u, d, v) {
      var L = oo, A = new Ai(), S = new mn();
      A.ba = S, S.S = L, S.width = [S.width], S.height = [S.height];
      var P = S.width, j = S.height, V = new gr();
      if (V == null || t == null) var ce = 2;
      else e(V != null), ce = _i(t, o, u, V.width, V.height, V.Pd, V.Qd, V.format, null);
      if (ce != 0 ? P = 0 : (P != null && (P[0] = V.width[0]), j != null && (j[0] = V.height[0]), P = 1), P) {
        S.width = S.width[0], S.height = S.height[0], d != null && (d[0] = S.width), v != null && (v[0] = S.height);
        e: {
          if (d = new vi(), (v = new aa()).data = t, v.w = o, v.ha = u, v.kd = 1, o = [0], e(v != null), ((t = _i(v.data, v.w, v.ha, null, null, null, o, null, v)) == 0 || t == 7) && o[0] && (t = 4), (o = t) == 0) {
            if (e(A != null), d.data = v.data, d.w = v.w + v.offset, d.ha = v.ha - v.offset, d.put = er, d.ac = tn, d.bc = tr, d.ma = A, v.xa) {
              if ((t = Cn()) == null) {
                A = 1;
                break e;
              }
              if (function(le, J) {
                var ke = [0], be = [0], G = [0];
                t: for (; ; ) {
                  if (le == null) return 0;
                  if (J == null) return le.a = 2, 0;
                  if (le.l = J, le.a = 0, Z(le.m, J.data, J.w, J.ha), !et(le.m, ke, be, G)) {
                    le.a = 3;
                    break t;
                  }
                  if (le.xb = Hc, J.width = ke[0], J.height = be[0], !ir(ke[0], be[0], 1, le, null)) break t;
                  return 1;
                }
                return e(le.a != 0), 0;
              }(t, d)) {
                if (d = (o = ki(d.width, d.height, A.Oa, A.ba)) == 0) {
                  t: {
                    d = t;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break t;
                      }
                      if (e(d.s.yc != null), e(d.s.Ya != null), e(0 < d.s.Wb), e((u = d.l) != null), e((v = u.ma) != null), d.xb != 0) {
                        if (d.ca = v.ba, d.tb = v.tb, e(d.ca != null), !ha(v.Oa, u, so)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Xr(d, u.width) || u.da) break n;
                        if ((u.da || dt(d.ca.S)) && ee(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && ee()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !Je(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Un(d, d.V, d.Ba, d.c, d.i, u.o, hi)) break n;
                      v.Dc = d.Ma, d = 1;
                      break t;
                    }
                    e(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (o = t.a);
              } else o = t.a;
            } else {
              if ((t = new Xo()) == null) {
                A = 1;
                break e;
              }
              if (t.Fa = v.na, t.P = v.P, t.qc = v.Sa, Ta(t, d)) {
                if ((o = ki(d.width, d.height, A.Oa, A.ba)) == 0) {
                  if (t.Aa = 0, u = A.Oa, e((v = t) != null), u != null) {
                    if (0 < (P = 0 > (P = u.Md) ? 0 : 100 < P ? 255 : 255 * P / 100)) {
                      for (j = V = 0; 4 > j; ++j) 12 > (ce = v.pb[j]).lc && (ce.ia = P * D1[0 > ce.lc ? 0 : ce.lc] >> 3), V |= ce.ia;
                      V && (alert("todo:VP8InitRandom"), v.ia = 1);
                    }
                    v.Ga = u.Id, 100 < v.Ga ? v.Ga = 100 : 0 > v.Ga && (v.Ga = 0);
                  }
                  Jo(t, d) || (o = t.a);
                }
              } else o = t.a;
            }
            o == 0 && A.Oa != null && A.Oa.fd && (o = fa(A.ba));
          }
          A = o;
        }
        L = A != 0 ? null : 11 > L ? S.f.RGBA.eb : S.f.kb.y;
      } else L = null;
      return L;
    };
    var Jc = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(z, ie) {
    for (var ye = "", N = 0; N < 4; N++) ye += String.fromCharCode(z[ie++]);
    return ye;
  }
  function y(z, ie) {
    return (z[ie + 0] << 0 | z[ie + 1] << 8 | z[ie + 2] << 16) >>> 0;
  }
  function m(z, ie) {
    return (z[ie + 0] << 0 | z[ie + 1] << 8 | z[ie + 2] << 16 | z[ie + 3] << 24) >>> 0;
  }
  new f();
  var x = [0], p = [0], M = [], I = new f(), O = n, k = function(z, ie) {
    var ye = {}, N = 0, _ = !1, U = 0, R = 0;
    if (ye.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(C, T, q, Y) {
      for (var oe = 0; oe < Y; oe++) if (C[T + oe] != q.charCodeAt(oe)) return !0;
      return !1;
    }(z, ie, "RIFF", 4)) {
      for (m(z, ie += 4), ie += 8; ie < z.length; ) {
        var de = g(z, ie), he = m(z, ie += 4);
        ie += 4;
        var Q = he + (1 & he);
        switch (de) {
          case "VP8 ":
          case "VP8L":
            ye.frames[N] === void 0 && (ye.frames[N] = {}), (D = ye.frames[N]).src_off = _ ? R : ie - 8, D.src_size = U + he + 8, N++, _ && (_ = !1, U = 0, R = 0);
            break;
          case "VP8X":
            (D = ye.header = {}).feature_flags = z[ie];
            var Z = ie + 4;
            D.canvas_width = 1 + y(z, Z), Z += 3, D.canvas_height = 1 + y(z, Z), Z += 3;
            break;
          case "ALPH":
            _ = !0, U = Q + 8, R = ie - 8;
            break;
          case "ANIM":
            (D = ye.header).bgcolor = m(z, ie), Z = ie + 4, D.loop_count = (Le = z)[(w = Z) + 0] << 0 | Le[w + 1] << 8, Z += 2;
            break;
          case "ANMF":
            var fe, D;
            (D = ye.frames[N] = {}).offset_x = 2 * y(z, ie), ie += 3, D.offset_y = 2 * y(z, ie), ie += 3, D.width = 1 + y(z, ie), ie += 3, D.height = 1 + y(z, ie), ie += 3, D.duration = y(z, ie), ie += 3, fe = z[ie++], D.dispose = 1 & fe, D.blend = fe >> 1 & 1;
        }
        de != "ANMF" && (ie += Q);
      }
      var Le, w;
      return ye;
    }
  }(O, 0);
  k.response = O, k.rgbaoutput = !0, k.dataurl = !1;
  var F = k.header ? k.header : null, W = k.frames ? k.frames : null;
  if (F) {
    F.loop_counter = F.loop_count, x = [F.canvas_height], p = [F.canvas_width];
    for (var ae = 0; ae < W.length && W[ae].blend != 0; ae++) ;
  }
  var me = W[0], Se = I.WebPDecodeRGBA(O, me.src_off, me.src_size, p, x);
  me.rgba = Se, me.imgwidth = p[0], me.imgheight = x[0];
  for (var re = 0; re < p[0] * x[0] * 4; re++) M[re] = Se[re];
  return this.width = p, this.height = x, this.data = M, this;
}
(function(n) {
  var e = function() {
    return typeof $s == "function";
  }, r = function(x, p, M, I) {
    var O = 4, k = l;
    switch (I) {
      case n.image_compression.FAST:
        O = 1, k = i;
        break;
      case n.image_compression.MEDIUM:
        O = 6, k = h;
        break;
      case n.image_compression.SLOW:
        O = 9, k = f;
    }
    x = a(x, p, M, k);
    var F = $s(x, { level: O });
    return n.__addimage__.arrayBufferToBinaryString(F);
  }, a = function(x, p, M, I) {
    for (var O, k, F, W = x.length / p, ae = new Uint8Array(x.length + W), me = y(), Se = 0; Se < W; Se += 1) {
      if (F = Se * p, O = x.subarray(F, F + p), I) ae.set(I(O, M, k), F + Se);
      else {
        for (var re, z = me.length, ie = []; re < z; re += 1) ie[re] = me[re](O, M, k);
        var ye = m(ie.concat());
        ae.set(ie[ye], F + Se);
      }
      k = O;
    }
    return ae;
  }, s = function(x) {
    var p = Array.apply([], x);
    return p.unshift(0), p;
  }, i = function(x, p) {
    var M, I = [], O = x.length;
    I[0] = 1;
    for (var k = 0; k < O; k += 1) M = x[k - p] || 0, I[k + 1] = x[k] - M + 256 & 255;
    return I;
  }, l = function(x, p, M) {
    var I, O = [], k = x.length;
    O[0] = 2;
    for (var F = 0; F < k; F += 1) I = M && M[F] || 0, O[F + 1] = x[F] - I + 256 & 255;
    return O;
  }, h = function(x, p, M) {
    var I, O, k = [], F = x.length;
    k[0] = 3;
    for (var W = 0; W < F; W += 1) I = x[W - p] || 0, O = M && M[W] || 0, k[W + 1] = x[W] + 256 - (I + O >>> 1) & 255;
    return k;
  }, f = function(x, p, M) {
    var I, O, k, F, W = [], ae = x.length;
    W[0] = 4;
    for (var me = 0; me < ae; me += 1) I = x[me - p] || 0, O = M && M[me] || 0, k = M && M[me - p] || 0, F = g(I, O, k), W[me + 1] = x[me] - F + 256 & 255;
    return W;
  }, g = function(x, p, M) {
    if (x === p && p === M) return x;
    var I = Math.abs(p - M), O = Math.abs(x - M), k = Math.abs(x + p - M - M);
    return I <= O && I <= k ? x : O <= k ? p : M;
  }, y = function() {
    return [s, i, l, h, f];
  }, m = function(x) {
    var p = x.map(function(M) {
      return M.reduce(function(I, O) {
        return I + Math.abs(O);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  n.processPNG = function(x, p, M, I) {
    var O, k, F, W, ae, me, Se, re, z, ie, ye, N, _, U, R, de = this.decode.FLATE_DECODE, he = "";
    if (this.__addimage__.isArrayBuffer(x) && (x = new Uint8Array(x)), this.__addimage__.isArrayBufferView(x)) {
      if (x = (F = new Ch(x)).imgData, k = F.bits, O = F.colorSpace, ae = F.colors, [4, 6].indexOf(F.colorType) !== -1) {
        if (F.bits === 8) {
          z = (re = F.pixelBitlength == 32 ? new Uint32Array(F.decodePixels().buffer) : F.pixelBitlength == 16 ? new Uint16Array(F.decodePixels().buffer) : new Uint8Array(F.decodePixels().buffer)).length, ye = new Uint8Array(z * F.colors), ie = new Uint8Array(z);
          var Q, Z = F.pixelBitlength - F.bits;
          for (U = 0, R = 0; U < z; U++) {
            for (_ = re[U], Q = 0; Q < Z; ) ye[R++] = _ >>> Q & 255, Q += F.bits;
            ie[U] = _ >>> Q & 255;
          }
        }
        if (F.bits === 16) {
          z = (re = new Uint32Array(F.decodePixels().buffer)).length, ye = new Uint8Array(z * (32 / F.pixelBitlength) * F.colors), ie = new Uint8Array(z * (32 / F.pixelBitlength)), N = F.colors > 1, U = 0, R = 0;
          for (var fe = 0; U < z; ) _ = re[U++], ye[R++] = _ >>> 0 & 255, N && (ye[R++] = _ >>> 16 & 255, _ = re[U++], ye[R++] = _ >>> 0 & 255), ie[fe++] = _ >>> 16 & 255;
          k = 8;
        }
        I !== n.image_compression.NONE && e() ? (x = r(ye, F.width * F.colors, F.colors, I), Se = r(ie, F.width, 1, I)) : (x = ye, Se = ie, de = void 0);
      }
      if (F.colorType === 3 && (O = this.color_spaces.INDEXED, me = F.palette, F.transparency.indexed)) {
        var D = F.transparency.indexed, Le = 0;
        for (U = 0, z = D.length; U < z; ++U) Le += D[U];
        if ((Le /= 255) === z - 1 && D.indexOf(0) !== -1) W = [D.indexOf(0)];
        else if (Le !== z) {
          for (re = F.decodePixels(), ie = new Uint8Array(re.length), U = 0, z = re.length; U < z; U++) ie[U] = D[re[U]];
          Se = r(ie, F.width, 1);
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
      return de === this.decode.FLATE_DECODE && (he = "/Predictor " + w + " "), he += "/Colors " + ae + " /BitsPerComponent " + k + " /Columns " + F.width, (this.__addimage__.isArrayBuffer(x) || this.__addimage__.isArrayBufferView(x)) && (x = this.__addimage__.arrayBufferToBinaryString(x)), (Se && this.__addimage__.isArrayBuffer(Se) || this.__addimage__.isArrayBufferView(Se)) && (Se = this.__addimage__.arrayBufferToBinaryString(Se)), { alias: M, data: x, index: p, filter: de, decodeParameters: he, transparency: W, palette: me, sMask: Se, predictor: w, width: F.width, height: F.height, bitsPerComponent: k, colorSpace: O };
    }
  };
})(tt.API), function(n) {
  n.processGIF89A = function(e, r, a, s) {
    var i = new jh(e), l = i.width, h = i.height, f = [];
    i.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: l, height: h }, y = new zs(100).encode(g, 100);
    return n.processJPEG.call(this, y, r, a, s);
  }, n.processGIF87A = n.processGIF89A;
}(tt.API), Xn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var e = 0; e < n; e++) {
      var r = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0);
      this.palette[e] = { red: s, green: a, blue: r, quad: i };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, Xn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var n = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[n]();
  } catch (r) {
    kt.log("bit decode error:" + r);
  }
}, Xn.prototype.bit1 = function() {
  var n, e = Math.ceil(this.width / 8), r = e % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++) for (var i = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
      var f = this.palette[i >> 7 - h & 1];
      this.data[l + 4 * h] = f.blue, this.data[l + 4 * h + 1] = f.green, this.data[l + 4 * h + 2] = f.red, this.data[l + 4 * h + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, Xn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), e = n % 4, r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, s = 0; s < n; s++) {
      var i = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 2 * s * 4, h = i >> 4, f = 15 & i, g = this.palette[h];
      if (this.data[l] = g.blue, this.data[l + 1] = g.green, this.data[l + 2] = g.red, this.data[l + 3] = 255, 2 * s + 1 >= this.width) break;
      g = this.palette[f], this.data[l + 4] = g.blue, this.data[l + 4 + 1] = g.green, this.data[l + 4 + 2] = g.red, this.data[l + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, Xn.prototype.bit8 = function() {
  for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var r = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
      var s = this.datav.getUint8(this.pos++, !0), i = r * this.width * 4 + 4 * a;
      if (s < this.palette.length) {
        var l = this.palette[s];
        this.data[i] = l.red, this.data[i + 1] = l.green, this.data[i + 2] = l.blue, this.data[i + 3] = 255;
      } else this.data[i] = 255, this.data[i + 1] = 255, this.data[i + 2] = 255, this.data[i + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, Xn.prototype.bit15 = function() {
  for (var n = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, s = 0; s < this.width; s++) {
      var i = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var l = (i & e) / e * 255 | 0, h = (i >> 5 & e) / e * 255 | 0, f = (i >> 10 & e) / e * 255 | 0, g = i >> 15 ? 255 : 0, y = a * this.width * 4 + 4 * s;
      this.data[y] = f, this.data[y + 1] = h, this.data[y + 2] = l, this.data[y + 3] = g;
    }
    this.pos += n;
  }
}, Xn.prototype.bit16 = function() {
  for (var n = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
    for (var s = this.bottom_up ? a : this.height - 1 - a, i = 0; i < this.width; i++) {
      var l = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (l & e) / e * 255 | 0, f = (l >> 5 & r) / r * 255 | 0, g = (l >> 11) / e * 255 | 0, y = s * this.width * 4 + 4 * i;
      this.data[y] = g, this.data[y + 1] = f, this.data[y + 2] = h, this.data[y + 3] = 255;
    }
    this.pos += n;
  }
}, Xn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
      var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), l = e * this.width * 4 + 4 * r;
      this.data[l] = i, this.data[l + 1] = s, this.data[l + 2] = a, this.data[l + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, Xn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
    var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), l = this.datav.getUint8(this.pos++, !0), h = e * this.width * 4 + 4 * r;
    this.data[h] = i, this.data[h + 1] = s, this.data[h + 2] = a, this.data[h + 3] = l;
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
  n.processBMP = function(e, r, a, s) {
    var i = new Xn(e, !1), l = i.width, h = i.height, f = { data: i.getData(), width: l, height: h }, g = new zs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, a, s);
  };
}(tt.API), Dl.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processWEBP = function(e, r, a, s) {
    var i = new Dl(e), l = i.width, h = i.height, f = { data: i.getData(), width: l, height: h }, g = new zs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, a, s);
  };
}(tt.API), tt.API.processRGBA = function(n, e, r) {
  for (var a = n.data, s = a.length, i = new Uint8Array(s / 4 * 3), l = new Uint8Array(s / 4), h = 0, f = 0, g = 0; g < s; g += 4) {
    var y = a[g], m = a[g + 1], x = a[g + 2], p = a[g + 3];
    i[h++] = y, i[h++] = m, i[h++] = x, l[f++] = p;
  }
  var M = this.__addimage__.arrayBufferToBinaryString(i);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(l), data: M, index: e, alias: r, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, tt.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, zi = tt.API, Po = zi.getCharWidthsArray = function(n, e) {
  var r, a, s = (e = e || {}).font || this.internal.getFont(), i = e.fontSize || this.internal.getFontSize(), l = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : s.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = e.kerning ? e.kerning : s.metadata.Unicode.kerning, y = g.fof ? g.fof : 1, m = e.doKerning !== !1, x = 0, p = n.length, M = 0, I = h[0] || f, O = [];
  for (r = 0; r < p; r++) a = n.charCodeAt(r), typeof s.metadata.widthOfString == "function" ? O.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(a)) + l * (1e3 / i) || 0) / 1e3) : (x = m && At(g[a]) === "object" && !isNaN(parseInt(g[a][M], 10)) ? g[a][M] / y : 0, O.push((h[a] || I) / f + x)), M = a;
  return O;
}, Ol = zi.getStringUnitWidth = function(n, e) {
  var r = (e = e || {}).fontSize || this.internal.getFontSize(), a = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
  return zi.processArabic && (n = zi.processArabic(n)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(n, r, s) / r : Po.apply(this, arguments).reduce(function(i, l) {
    return i + l;
  }, 0);
}, Rl = function(n, e, r, a) {
  for (var s = [], i = 0, l = n.length, h = 0; i !== l && h + e[i] < r; ) h += e[i], i++;
  s.push(n.slice(0, i));
  var f = i;
  for (h = 0; i !== l; ) h + e[i] > a && (s.push(n.slice(f, i)), h = 0, f = i), h += e[i], i++;
  return f !== i && s.push(n.slice(f, i)), s;
}, Tl = function(n, e, r) {
  r || (r = {});
  var a, s, i, l, h, f, g, y = [], m = [y], x = r.textIndent || 0, p = 0, M = 0, I = n.split(" "), O = Po.apply(this, [" ", r])[0];
  if (f = r.lineIndent === -1 ? I[0].length + 2 : r.lineIndent || 0) {
    var k = Array(f).join(" "), F = [];
    I.map(function(ae) {
      (ae = ae.split(/\s*\n/)).length > 1 ? F = F.concat(ae.map(function(me, Se) {
        return (Se && me.length ? `
` : "") + me;
      })) : F.push(ae[0]);
    }), I = F, f = Ol.apply(this, [k, r]);
  }
  for (i = 0, l = I.length; i < l; i++) {
    var W = 0;
    if (a = I[i], f && a[0] == `
` && (a = a.substr(1), W = 1), x + p + (M = (s = Po.apply(this, [a, r])).reduce(function(ae, me) {
      return ae + me;
    }, 0)) > e || W) {
      if (M > e) {
        for (h = Rl.apply(this, [a, s, e - (x + p), e]), y.push(h.shift()), y = [h.pop()]; h.length; ) m.push([h.shift()]);
        M = s.slice(a.length - (y[0] ? y[0].length : 0)).reduce(function(ae, me) {
          return ae + me;
        }, 0);
      } else y = [a];
      m.push(y), x = M + f, p = O;
    } else y.push(a), x += p + M, p = O;
  }
  return g = f ? function(ae, me) {
    return (me ? k : "") + ae.join(" ");
  } : function(ae) {
    return ae.join(" ");
  }, m.map(g);
}, zi.splitTextToSize = function(n, e, r) {
  var a, s = (r = r || {}).fontSize || this.internal.getFontSize(), i = (function(y) {
    if (y.widths && y.kerning) return { widths: y.widths, kerning: y.kerning };
    var m = this.internal.getFont(y.fontName, y.fontStyle);
    return m.metadata.Unicode ? { widths: m.metadata.Unicode.widths || { 0: 1 }, kerning: m.metadata.Unicode.kerning || {} } : { font: m.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, r);
  a = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var l = 1 * this.internal.scaleFactor * e / s;
  i.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / s : 0, i.lineIndent = r.lineIndent;
  var h, f, g = [];
  for (h = 0, f = a.length; h < f; h++) g = g.concat(Tl.apply(this, [a[h], l, i]));
  return g;
}, function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var e = "klmnopqrstuvwxyz", r = {}, a = {}, s = 0; s < e.length; s++) r[e[s]] = "0123456789abcdef"[s], a["0123456789abcdef"[s]] = e[s];
  var i = function(m) {
    return "0x" + parseInt(m, 10).toString(16);
  }, l = n.__fontmetrics__.compress = function(m) {
    var x, p, M, I, O = ["{"];
    for (var k in m) {
      if (x = m[k], isNaN(parseInt(k, 10)) ? p = "'" + k + "'" : (k = parseInt(k, 10), p = (p = i(k).slice(2)).slice(0, -1) + a[p.slice(-1)]), typeof x == "number") x < 0 ? (M = i(x).slice(3), I = "-") : (M = i(x).slice(2), I = ""), M = I + M.slice(0, -1) + a[M.slice(-1)];
      else {
        if (At(x) !== "object") throw new Error("Don't know what to do with value type " + At(x) + ".");
        M = l(x);
      }
      O.push(p + M);
    }
    return O.push("}"), O.join("");
  }, h = n.__fontmetrics__.uncompress = function(m) {
    if (typeof m != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var x, p, M, I, O = {}, k = 1, F = O, W = [], ae = "", me = "", Se = m.length - 1, re = 1; re < Se; re += 1) (I = m[re]) == "'" ? x ? (M = x.join(""), x = void 0) : x = [] : x ? x.push(I) : I == "{" ? (W.push([F, M]), F = {}, M = void 0) : I == "}" ? ((p = W.pop())[0][p[1]] = F, M = void 0, F = p[0]) : I == "-" ? k = -1 : M === void 0 ? r.hasOwnProperty(I) ? (ae += r[I], M = parseInt(ae, 16) * k, k = 1, ae = "") : ae += I : r.hasOwnProperty(I) ? (me += r[I], F[M] = parseInt(me, 16) * k, k = 1, M = void 0, me = "") : me += I;
    return O;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, y = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(m) {
    var x = m.font, p = y.Unicode[x.postScriptName];
    p && (x.metadata.Unicode = {}, x.metadata.Unicode.widths = p.widths, x.metadata.Unicode.kerning = p.kerning);
    var M = g.Unicode[x.postScriptName];
    M && (x.metadata.Unicode.encoding = M, x.encoding = M.codePages[0]);
  }]);
}(tt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var e = function(r) {
    for (var a = r.length, s = new Uint8Array(a), i = 0; i < a; i++) s[i] = r.charCodeAt(i);
    return s;
  };
  n.API.events.push(["addFont", function(r) {
    var a = void 0, s = r.font, i = r.instance;
    if (!s.isStandardFont) {
      if (i === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      if (typeof (a = i.existsFileInVFS(s.postScriptName) === !1 ? i.loadFile(s.postScriptName) : i.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      (function(l, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(Ca(h)), l.metadata = n.API.TTFFont.open(h), l.metadata.Unicode = l.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, l.metadata.glyIdsUsed = [0];
      })(s, a);
    }
  }]);
}(tt), /** @license
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
    return (nt.canvg ? Promise.resolve(nt.canvg) : import("./index.es-CF7o2JnN.mjs")).catch(function(r) {
      return Promise.reject(new Error("Could not load canvg: " + r));
    }).then(function(r) {
      return r.default ? r.default : r;
    });
  }
  tt.API.addSvgAsImage = function(r, a, s, i, l, h, f, g) {
    if (isNaN(a) || isNaN(s)) throw kt.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(i) || isNaN(l)) throw kt.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var y = document.createElement("canvas");
    y.width = i, y.height = l;
    var m = y.getContext("2d");
    m.fillStyle = "#fff", m.fillRect(0, 0, y.width, y.height);
    var x = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, p = this;
    return e().then(function(M) {
      return M.fromString(m, r, x);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(M) {
      return M.render(x);
    }).then(function() {
      p.addImage(y.toDataURL("image/jpeg", 1), a, s, i, l, f, g);
    });
  };
}(), tt.API.putTotalPages = function(n) {
  var e, r = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var s = 0; s < this.internal.pages[a].length; s++) this.internal.pages[a][s] = this.internal.pages[a][s].replace(e, r);
  return this;
}, tt.API.viewerPreferences = function(n, e) {
  var r;
  n = n || {}, e = e || !1;
  var a, s, i, l = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(l), f = [], g = 0, y = 0, m = 0;
  function x(M, I) {
    var O, k = !1;
    for (O = 0; O < M.length; O += 1) M[O] === I && (k = !0);
    return k;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, n === "reset" || e === !0) {
    var p = h.length;
    for (m = 0; m < p; m += 1) r[h[m]].value = r[h[m]].defaultValue, r[h[m]].explicitSet = !1;
  }
  if (At(n) === "object") {
    for (s in n) if (i = n[s], x(h, s) && i !== void 0) {
      if (r[s].type === "boolean" && typeof i == "boolean") r[s].value = i;
      else if (r[s].type === "name" && x(r[s].valueSet, i)) r[s].value = i;
      else if (r[s].type === "integer" && Number.isInteger(i)) r[s].value = i;
      else if (r[s].type === "array") {
        for (g = 0; g < i.length; g += 1) if (a = !0, i[g].length === 1 && typeof i[g][0] == "number") f.push(String(i[g] - 1));
        else if (i[g].length > 1) {
          for (y = 0; y < i[g].length; y += 1) typeof i[g][y] != "number" && (a = !1);
          a === !0 && f.push([i[g][0] - 1, i[g][1] - 1].join(" "));
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
    var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), i = unescape(encodeURIComponent(a)), l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = i.length + l.length + h.length + s.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(s + i + l + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, r = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  n.addMetadata = function(a, s) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: a, namespaceuri: s || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", e)), this;
  };
}(tt.API), function(n) {
  var e = n.API, r = e.pdfEscape16 = function(i, l) {
    for (var h, f = l.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], y = [""], m = 0, x = i.length; m < x; ++m) {
      if (h = l.metadata.characterToGlyph(i.charCodeAt(m)), l.metadata.glyIdsUsed.push(h), l.metadata.toUnicode[h] = i.charCodeAt(m), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(l.metadata.widthOfGlyph(h), 10)])), h == "0") return y.join("");
      h = h.toString(16), y.push(g[4 - h.length], h);
    }
    return y.join("");
  }, a = function(i) {
    var l, h, f, g, y, m, x;
    for (y = `/CIDInit /ProcSet findresource begin
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
endcodespacerange`, f = [], m = 0, x = (h = Object.keys(i).sort(function(p, M) {
      return p - M;
    })).length; m < x; m++) l = h[m], f.length >= 100 && (y += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), i[l] !== void 0 && i[l] !== null && typeof i[l].toString == "function" && (g = ("0000" + i[l].toString(16)).slice(-4), l = ("0000" + (+l).toString(16)).slice(-4), f.push("<" + l + "><" + g + ">"));
    return f.length && (y += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), y += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  e.events.push(["putFont", function(i) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, y = l.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "Identity-H") {
        for (var m = h.metadata.Unicode.widths, x = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", M = 0; M < x.length; M++) p += String.fromCharCode(x[M]);
        var I = g();
        y({ data: p, addLength1: !0, objectId: I }), f("endobj");
        var O = g();
        y({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: O }), f("endobj");
        var k = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Hi(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var F = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Hi(h.fontName)), f("/FontDescriptor " + k + " 0 R"), f("/W " + n.API.PDFObject.convert(m)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + O + " 0 R"), f("/BaseFont /" + Hi(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + F + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(i);
  }]), e.events.push(["putFont", function(i) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, y = l.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var m = h.metadata.rawData, x = "", p = 0; p < m.length; p++) x += String.fromCharCode(m[p]);
        var M = g();
        y({ data: x, addLength1: !0, objectId: M }), f("endobj");
        var I = g();
        y({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: I }), f("endobj");
        var O = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + M + " 0 R"), f("/Flags 96"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + Hi(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var k = 0; k < h.metadata.hmtx.widths.length; k++) h.metadata.hmtx.widths[k] = parseInt(h.metadata.hmtx.widths[k] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + Hi(h.fontName) + "/FontDescriptor " + O + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(i);
  }]);
  var s = function(i) {
    var l, h = i.text || "", f = i.x, g = i.y, y = i.options || {}, m = i.mutex || {}, x = m.pdfEscape, p = m.activeFontKey, M = m.fonts, I = p, O = "", k = 0, F = "", W = M[I].encoding;
    if (M[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: y, mutex: m };
    for (F = h, I = p, Array.isArray(h) && (F = h[0]), k = 0; k < F.length; k += 1) M[I].metadata.hasOwnProperty("cmap") && (l = M[I].metadata.cmap.unicode.codeMap[F[k].charCodeAt(0)]), l || F[k].charCodeAt(0) < 256 && M[I].metadata.hasOwnProperty("Unicode") ? O += F[k] : O += "";
    var ae = "";
    return parseInt(I.slice(1)) < 14 || W === "WinAnsiEncoding" ? ae = x(O, I).split("").map(function(me) {
      return me.charCodeAt(0).toString(16);
    }).join("") : W === "Identity-H" && (ae = r(O, M[I])), m.isHex = !0, { text: ae, x: f, y: g, options: y, mutex: m };
  };
  e.events.push(["postProcessText", function(i) {
    var l = i.text || "", h = [], f = { text: l, x: i.x, y: i.y, options: i.options, mutex: i.mutex };
    if (Array.isArray(l)) {
      var g = 0;
      for (g = 0; g < l.length; g += 1) Array.isArray(l[g]) && l[g].length === 3 ? h.push([s(Object.assign({}, f, { text: l[g][0] })).text, l[g][1], l[g][2]]) : h.push(s(Object.assign({}, f, { text: l[g] })).text);
      i.text = h;
    } else i.text = s(Object.assign({}, f, { text: l })).text;
  }]);
}(tt), /**
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
  }, n.addFileToVFS = function(r, a) {
    return e.call(this), this.internal.vFS[r] = a, this;
  }, n.getFileFromVFS = function(r) {
    return e.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
  };
}(tt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(a) {
    var s, i, l, h, f, g, y, m = e, x = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], M = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, O = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], k = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), F = !1, W = 0;
    this.__bidiEngine__ = {};
    var ae = function(N) {
      var _ = N.charCodeAt(), U = _ >> 8, R = I[U];
      return R !== void 0 ? m[256 * R + (255 & _)] : U === 252 || U === 253 ? "AL" : k.test(U) ? "L" : U === 8 ? "R" : "N";
    }, me = function(N) {
      for (var _, U = 0; U < N.length; U++) {
        if ((_ = ae(N.charAt(U))) === "L") return !1;
        if (_ === "R") return !0;
      }
      return !1;
    }, Se = function(N, _, U, R) {
      var de, he, Q, Z, fe = _[R];
      switch (fe) {
        case "L":
        case "R":
          F = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          F && (fe = "AN");
          break;
        case "AL":
          F = !0, fe = "R";
          break;
        case "WS":
          fe = "N";
          break;
        case "CS":
          R < 1 || R + 1 >= _.length || (de = U[R - 1]) !== "EN" && de !== "AN" || (he = _[R + 1]) !== "EN" && he !== "AN" ? fe = "N" : F && (he = "AN"), fe = he === de ? he : "N";
          break;
        case "ES":
          fe = (de = R > 0 ? U[R - 1] : "B") === "EN" && R + 1 < _.length && _[R + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (R > 0 && U[R - 1] === "EN") {
            fe = "EN";
            break;
          }
          if (F) {
            fe = "N";
            break;
          }
          for (Q = R + 1, Z = _.length; Q < Z && _[Q] === "ET"; ) Q++;
          fe = Q < Z && _[Q] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (l && !h) {
            for (Z = _.length, Q = R + 1; Q < Z && _[Q] === "NSM"; ) Q++;
            if (Q < Z) {
              var D = N[R], Le = D >= 1425 && D <= 2303 || D === 64286;
              if (de = _[Q], Le && (de === "R" || de === "AL")) {
                fe = "R";
                break;
              }
            }
          }
          fe = R < 1 || (de = _[R - 1]) === "B" ? "N" : U[R - 1];
          break;
        case "B":
          F = !1, s = !0, fe = W;
          break;
        case "S":
          i = !0, fe = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          F = !1;
          break;
        case "BN":
          fe = "N";
      }
      return fe;
    }, re = function(N, _, U) {
      var R = N.split("");
      return U && z(R, U, { hiLevel: W }), R.reverse(), _ && _.reverse(), R.join("");
    }, z = function(N, _, U) {
      var R, de, he, Q, Z, fe = -1, D = N.length, Le = 0, w = [], C = W ? p : x, T = [];
      for (F = !1, s = !1, i = !1, de = 0; de < D; de++) T[de] = ae(N[de]);
      for (he = 0; he < D; he++) {
        if (Z = Le, w[he] = Se(N, T, w, he), R = 240 & (Le = C[Z][M[w[he]]]), Le &= 15, _[he] = Q = C[Le][5], R > 0) if (R === 16) {
          for (de = fe; de < he; de++) _[de] = 1;
          fe = -1;
        } else fe = -1;
        if (C[Le][6]) fe === -1 && (fe = he);
        else if (fe > -1) {
          for (de = fe; de < he; de++) _[de] = Q;
          fe = -1;
        }
        T[he] === "B" && (_[he] = 0), U.hiLevel |= Q;
      }
      i && function(q, Y, oe) {
        for (var ne = 0; ne < oe; ne++) if (q[ne] === "S") {
          Y[ne] = W;
          for (var ue = ne - 1; ue >= 0 && q[ue] === "WS"; ue--) Y[ue] = W;
        }
      }(T, _, D);
    }, ie = function(N, _, U, R, de) {
      if (!(de.hiLevel < N)) {
        if (N === 1 && W === 1 && !s) return _.reverse(), void (U && U.reverse());
        for (var he, Q, Z, fe, D = _.length, Le = 0; Le < D; ) {
          if (R[Le] >= N) {
            for (Z = Le + 1; Z < D && R[Z] >= N; ) Z++;
            for (fe = Le, Q = Z - 1; fe < Q; fe++, Q--) he = _[fe], _[fe] = _[Q], _[Q] = he, U && (he = U[fe], U[fe] = U[Q], U[Q] = he);
            Le = Z;
          }
          Le++;
        }
      }
    }, ye = function(N, _, U) {
      var R = N.split(""), de = { hiLevel: W };
      return U || (U = []), z(R, U, de), function(he, Q, Z) {
        if (Z.hiLevel !== 0 && y) for (var fe, D = 0; D < he.length; D++) Q[D] === 1 && (fe = O.indexOf(he[D])) >= 0 && (he[D] = O[fe + 1]);
      }(R, U, de), ie(2, R, _, U, de), ie(1, R, _, U, de), R.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(N, _, U) {
      if (function(de, he) {
        if (he) for (var Q = 0; Q < de.length; Q++) he[Q] = Q;
        h === void 0 && (h = me(de)), g === void 0 && (g = me(de));
      }(N, _), l || !f || g) if (l && f && h ^ g) W = h ? 1 : 0, N = re(N, _, U);
      else if (!l && f && g) W = h ? 1 : 0, N = ye(N, _, U), N = re(N, _);
      else if (!l || h || f || g) {
        if (l && !f && h ^ g) N = re(N, _), h ? (W = 0, N = ye(N, _, U)) : (W = 1, N = ye(N, _, U), N = re(N, _));
        else if (l && h && !f && g) W = 1, N = ye(N, _, U), N = re(N, _);
        else if (!l && !f && h ^ g) {
          var R = y;
          h ? (W = 1, N = ye(N, _, U), W = 0, y = !1, N = ye(N, _, U), y = R) : (W = 0, N = ye(N, _, U), N = re(N, _), W = 1, y = !1, N = ye(N, _, U), y = R, N = re(N, _));
        }
      } else W = 0, N = ye(N, _, U);
      else W = h ? 1 : 0, N = ye(N, _, U);
      return N;
    }, this.__bidiEngine__.setOptions = function(N) {
      N && (l = N.isInputVisual, f = N.isOutputVisual, h = N.isInputRtl, g = N.isOutputRtl, y = N.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(a) {
    var s = a.text;
    a.x, a.y;
    var i = a.options || {};
    a.mutex, i.lang;
    var l = [];
    if (i.isInputVisual = typeof i.isInputVisual != "boolean" || i.isInputVisual, r.setOptions(i), Object.prototype.toString.call(s) === "[object Array]") {
      var h = 0;
      for (l = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? l.push([r.doBidiReorder(s[h][0]), s[h][1], s[h][2]]) : l.push([r.doBidiReorder(s[h])]);
      a.text = l;
    } else a.text = r.doBidiReorder(s);
    r.setOptions({ isInputVisual: !0 });
  }]);
}(tt), tt.API.TTFFont = function() {
  function n(e) {
    var r;
    if (this.rawData = e, r = this.contents = new Yr(e), this.contents.pos = 4, r.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    r.pos = 0, this.parse(), this.subset = new Gh(this), this.registerTTF();
  }
  return n.open = function(e) {
    return new n(e);
  }, n.prototype.parse = function() {
    return this.directory = new Mh(this.contents), this.head = new Eh(this), this.name = new Dh(this), this.cmap = new f1(this), this.toUnicode = {}, this.hhea = new Oh(this), this.maxp = new qh(this), this.hmtx = new zh(this), this.post = new Th(this), this.os2 = new Rh(this), this.loca = new Vh(this), this.glyf = new Uh(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var e, r, a, s, i;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var l, h, f, g;
      for (g = [], l = 0, h = (f = this.bbox).length; l < h; l++) e = f[l], g.push(Math.round(e * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (s = this.post.italic_angle), (32768 & (r = s >> 16)) != 0 && (r = -(1 + (65535 ^ r))), this.italicAngle = +(r + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (i = this.familyClass) === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(e) {
    var r;
    return ((r = this.cmap.unicode) != null ? r.codeMap[e] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(e) {
    var r;
    return r = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * r;
  }, n.prototype.widthOfString = function(e, r, a) {
    var s, i, l, h;
    for (l = 0, i = 0, h = (e = "" + e).length; 0 <= h ? i < h : i > h; i = 0 <= h ? ++i : --i) s = e.charCodeAt(i), l += this.widthOfGlyph(this.characterToGlyph(s)) + a * (1e3 / r) || 0;
    return l * (r / 1e3);
  }, n.prototype.lineHeight = function(e, r) {
    var a;
    return r == null && (r = !1), a = r ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e;
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
    var r, a;
    for (a = [], r = 0; 0 <= e ? r < e : r > e; r = 0 <= e ? ++r : --r) a[r] = String.fromCharCode(this.readByte());
    return a.join("");
  }, n.prototype.writeString = function(e) {
    var r, a, s;
    for (s = [], r = 0, a = e.length; 0 <= a ? r < a : r > a; r = 0 <= a ? ++r : --r) s.push(this.writeByte(e.charCodeAt(r)));
    return s;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, n.prototype.readLongLong = function() {
    var e, r, a, s, i, l, h, f;
    return e = this.readByte(), r = this.readByte(), a = this.readByte(), s = this.readByte(), i = this.readByte(), l = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ r) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ i) + 65536 * (255 ^ l) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * e + 281474976710656 * r + 1099511627776 * a + 4294967296 * s + 16777216 * i + 65536 * l + 256 * h + f;
  }, n.prototype.writeLongLong = function(e) {
    var r, a;
    return r = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, n.prototype.read = function(e) {
    var r, a;
    for (r = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) r.push(this.readByte());
    return r;
  }, n.prototype.write = function(e) {
    var r, a, s, i;
    for (i = [], a = 0, s = e.length; a < s; a++) r = e[a], i.push(this.writeByte(r));
    return i;
  }, n;
}(), Mh = function() {
  var n;
  function e(r) {
    var a, s, i;
    for (this.scalarType = r.readInt(), this.tableCount = r.readShort(), this.searchRange = r.readShort(), this.entrySelector = r.readShort(), this.rangeShift = r.readShort(), this.tables = {}, s = 0, i = this.tableCount; 0 <= i ? s < i : s > i; s = 0 <= i ? ++s : --s) a = { tag: r.readString(4), checksum: r.readInt(), offset: r.readInt(), length: r.readInt() }, this.tables[a.tag] = a;
  }
  return e.prototype.encode = function(r) {
    var a, s, i, l, h, f, g, y, m, x, p, M, I;
    for (I in p = Object.keys(r).length, f = Math.log(2), m = 16 * Math.floor(Math.log(p) / f), l = Math.floor(m / f), y = 16 * p - m, (s = new Yr()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(m), s.writeShort(l), s.writeShort(y), i = 16 * p, g = s.pos + i, h = null, M = [], r) for (x = r[I], s.writeString(I), s.writeInt(n(x)), s.writeInt(g), s.writeInt(x.length), M = M.concat(x), I === "head" && (h = g), g += x.length; g % 4; ) M.push(0), g++;
    return s.write(M), a = 2981146554 - n(s.data), s.pos = h + 8, s.writeUInt32(a), s.data;
  }, n = function(r) {
    var a, s, i, l;
    for (r = d1.call(r); r.length % 4; ) r.push(0);
    for (i = new Yr(r), s = 0, a = 0, l = r.length; a < l; a = a += 4) s += i.readUInt32();
    return 4294967295 & s;
  }, e;
}(), Fh = {}.hasOwnProperty, dr = function(n, e) {
  for (var r in e) Fh.call(e, r) && (n[r] = e[r]);
  function a() {
    this.constructor = n;
  }
  return a.prototype = e.prototype, n.prototype = new a(), n.__super__ = e.prototype, n;
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
  return dr(e, Qn), e.prototype.tag = "head", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.revision = r.readInt(), this.checkSumAdjustment = r.readInt(), this.magicNumber = r.readInt(), this.flags = r.readShort(), this.unitsPerEm = r.readShort(), this.created = r.readLongLong(), this.modified = r.readLongLong(), this.xMin = r.readShort(), this.yMin = r.readShort(), this.xMax = r.readShort(), this.yMax = r.readShort(), this.macStyle = r.readShort(), this.lowestRecPPEM = r.readShort(), this.fontDirectionHint = r.readShort(), this.indexToLocFormat = r.readShort(), this.glyphDataFormat = r.readShort();
  }, e.prototype.encode = function(r) {
    var a;
    return (a = new Yr()).writeInt(this.version), a.writeInt(this.revision), a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), a.writeShort(this.fontDirectionHint), a.writeShort(r), a.writeShort(this.glyphDataFormat), a.data;
  }, e;
}(), ql = function() {
  function n(e, r) {
    var a, s, i, l, h, f, g, y, m, x, p, M, I, O, k, F, W;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = r + e.readInt(), m = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte();
        break;
      case 4:
        for (p = e.readUInt16(), x = p / 2, e.pos += 6, i = function() {
          var ae, me;
          for (me = [], f = ae = 0; 0 <= x ? ae < x : ae > x; f = 0 <= x ? ++ae : --ae) me.push(e.readUInt16());
          return me;
        }(), e.pos += 2, I = function() {
          var ae, me;
          for (me = [], f = ae = 0; 0 <= x ? ae < x : ae > x; f = 0 <= x ? ++ae : --ae) me.push(e.readUInt16());
          return me;
        }(), g = function() {
          var ae, me;
          for (me = [], f = ae = 0; 0 <= x ? ae < x : ae > x; f = 0 <= x ? ++ae : --ae) me.push(e.readUInt16());
          return me;
        }(), y = function() {
          var ae, me;
          for (me = [], f = ae = 0; 0 <= x ? ae < x : ae > x; f = 0 <= x ? ++ae : --ae) me.push(e.readUInt16());
          return me;
        }(), s = (this.length - e.pos + this.offset) / 2, h = function() {
          var ae, me;
          for (me = [], f = ae = 0; 0 <= s ? ae < s : ae > s; f = 0 <= s ? ++ae : --ae) me.push(e.readUInt16());
          return me;
        }(), f = k = 0, W = i.length; k < W; f = ++k) for (O = i[f], a = F = M = I[f]; M <= O ? F <= O : F >= O; a = M <= O ? ++F : --F) y[f] === 0 ? l = a + g[f] : (l = h[y[f] / 2 + (a - M) - (x - f)] || 0) !== 0 && (l += g[f]), this.codeMap[a] = 65535 & l;
    }
    e.pos = m;
  }
  return n.encode = function(e, r) {
    var a, s, i, l, h, f, g, y, m, x, p, M, I, O, k, F, W, ae, me, Se, re, z, ie, ye, N, _, U, R, de, he, Q, Z, fe, D, Le, w, C, T, q, Y, oe, ne, ue, Me, Ce, Ee;
    switch (R = new Yr(), l = Object.keys(e).sort(function(Fe, Je) {
      return Fe - Je;
    }), r) {
      case "macroman":
        for (I = 0, O = function() {
          var Fe = [];
          for (M = 0; M < 256; ++M) Fe.push(0);
          return Fe;
        }(), F = { 0: 0 }, i = {}, de = 0, fe = l.length; de < fe; de++) F[ue = e[s = l[de]]] == null && (F[ue] = ++I), i[s] = { old: e[s], new: F[e[s]] }, O[s] = F[e[s]];
        return R.writeUInt16(1), R.writeUInt16(0), R.writeUInt32(12), R.writeUInt16(0), R.writeUInt16(262), R.writeUInt16(0), R.write(O), { charMap: i, subtable: R.data, maxGlyphID: I + 1 };
      case "unicode":
        for (_ = [], m = [], W = 0, F = {}, a = {}, k = g = null, he = 0, D = l.length; he < D; he++) F[me = e[s = l[he]]] == null && (F[me] = ++W), a[s] = { old: me, new: F[me] }, h = F[me] - s, k != null && h === g || (k && m.push(k), _.push(s), g = h), k = s;
        for (k && m.push(k), m.push(65535), _.push(65535), ye = 2 * (ie = _.length), z = 2 * Math.pow(Math.log(ie) / Math.LN2, 2), x = Math.log(z / 2) / Math.LN2, re = 2 * ie - z, f = [], Se = [], p = [], M = Q = 0, Le = _.length; Q < Le; M = ++Q) {
          if (N = _[M], y = m[M], N === 65535) {
            f.push(0), Se.push(0);
            break;
          }
          if (N - (U = a[N].new) >= 32768) for (f.push(0), Se.push(2 * (p.length + ie - M)), s = Z = N; N <= y ? Z <= y : Z >= y; s = N <= y ? ++Z : --Z) p.push(a[s].new);
          else f.push(U - N), Se.push(0);
        }
        for (R.writeUInt16(3), R.writeUInt16(1), R.writeUInt32(12), R.writeUInt16(4), R.writeUInt16(16 + 8 * ie + 2 * p.length), R.writeUInt16(0), R.writeUInt16(ye), R.writeUInt16(z), R.writeUInt16(x), R.writeUInt16(re), oe = 0, w = m.length; oe < w; oe++) s = m[oe], R.writeUInt16(s);
        for (R.writeUInt16(0), ne = 0, C = _.length; ne < C; ne++) s = _[ne], R.writeUInt16(s);
        for (Me = 0, T = f.length; Me < T; Me++) h = f[Me], R.writeUInt16(h);
        for (Ce = 0, q = Se.length; Ce < q; Ce++) ae = Se[Ce], R.writeUInt16(ae);
        for (Ee = 0, Y = p.length; Ee < Y; Ee++) I = p[Ee], R.writeUInt16(I);
        return { charMap: a, subtable: R.data, maxGlyphID: W + 1 };
    }
  }, n;
}(), f1 = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "cmap", e.prototype.parse = function(r) {
    var a, s, i;
    for (r.pos = this.offset, this.version = r.readUInt16(), i = r.readUInt16(), this.tables = [], this.unicode = null, s = 0; 0 <= i ? s < i : s > i; s = 0 <= i ? ++s : --s) a = new ql(r, this.offset), this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
    return !0;
  }, e.encode = function(r, a) {
    var s, i;
    return a == null && (a = "macroman"), s = ql.encode(r, a), (i = new Yr()).writeUInt16(0), i.writeUInt16(1), s.table = i.data.concat(s.subtable), s;
  }, e;
}(), Oh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "hhea", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.ascender = r.readShort(), this.decender = r.readShort(), this.lineGap = r.readShort(), this.advanceWidthMax = r.readShort(), this.minLeftSideBearing = r.readShort(), this.minRightSideBearing = r.readShort(), this.xMaxExtent = r.readShort(), this.caretSlopeRise = r.readShort(), this.caretSlopeRun = r.readShort(), this.caretOffset = r.readShort(), r.pos += 8, this.metricDataFormat = r.readShort(), this.numberOfMetrics = r.readUInt16();
  }, e;
}(), Rh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "OS/2", e.prototype.parse = function(r) {
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
  }, e;
}(), Th = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "post", e.prototype.parse = function(r) {
    var a, s, i;
    switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var l;
        for (s = r.readUInt16(), this.glyphNameIndex = [], l = 0; 0 <= s ? l < s : l > s; l = 0 <= s ? ++l : --l) this.glyphNameIndex.push(r.readUInt16());
        for (this.names = [], i = []; r.pos < this.offset + this.length; ) a = r.readByte(), i.push(this.names.push(r.readString(a)));
        return i;
      case 151552:
        return s = r.readUInt16(), this.offsets = r.read(s);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, f, g;
          for (g = [], l = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; l = 0 <= f ? ++h : --h) g.push(r.readUInt32());
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
  return dr(e, Qn), e.prototype.tag = "name", e.prototype.parse = function(r) {
    var a, s, i, l, h, f, g, y, m, x, p;
    for (r.pos = this.offset, r.readShort(), a = r.readShort(), f = r.readShort(), s = [], l = 0; 0 <= a ? l < a : l > a; l = 0 <= a ? ++l : --l) s.push({ platformID: r.readShort(), encodingID: r.readShort(), languageID: r.readShort(), nameID: r.readShort(), length: r.readShort(), offset: this.offset + f + r.readShort() });
    for (g = {}, l = m = 0, x = s.length; m < x; l = ++m) i = s[l], r.pos = i.offset, y = r.readString(i.length), h = new Bh(y, i), g[p = i.nameID] == null && (g[p] = []), g[i.nameID].push(h);
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
  return dr(e, Qn), e.prototype.tag = "maxp", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.numGlyphs = r.readUInt16(), this.maxPoints = r.readUInt16(), this.maxContours = r.readUInt16(), this.maxCompositePoints = r.readUInt16(), this.maxComponentContours = r.readUInt16(), this.maxZones = r.readUInt16(), this.maxTwilightPoints = r.readUInt16(), this.maxStorage = r.readUInt16(), this.maxFunctionDefs = r.readUInt16(), this.maxInstructionDefs = r.readUInt16(), this.maxStackElements = r.readUInt16(), this.maxSizeOfInstructions = r.readUInt16(), this.maxComponentElements = r.readUInt16(), this.maxComponentDepth = r.readUInt16();
  }, e;
}(), zh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "hmtx", e.prototype.parse = function(r) {
    var a, s, i, l, h, f, g;
    for (r.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? a < f : a > f; a = 0 <= f ? ++a : --a) this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
    for (i = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var y, m;
      for (m = [], a = y = 0; 0 <= i ? y < i : y > i; a = 0 <= i ? ++y : --y) m.push(r.readInt16());
      return m;
    }(), this.widths = (function() {
      var y, m, x, p;
      for (p = [], y = 0, m = (x = this.metrics).length; y < m; y++) l = x[y], p.push(l.advance);
      return p;
    }).call(this), s = this.widths[this.widths.length - 1], g = [], a = h = 0; 0 <= i ? h < i : h > i; a = 0 <= i ? ++h : --h) g.push(this.widths.push(s));
    return g;
  }, e.prototype.forGlyph = function(r) {
    return r in this.metrics ? this.metrics[r] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[r - this.metrics.length] };
  }, e;
}(), d1 = [].slice, Uh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "glyf", e.prototype.parse = function() {
    return this.cache = {};
  }, e.prototype.glyphFor = function(r) {
    var a, s, i, l, h, f, g, y, m, x;
    return r in this.cache ? this.cache[r] : (l = this.file.loca, a = this.file.contents, s = l.indexOf(r), (i = l.lengthOf(r)) === 0 ? this.cache[r] = null : (a.pos = this.offset + s, h = (f = new Yr(a.read(i))).readShort(), y = f.readShort(), x = f.readShort(), g = f.readShort(), m = f.readShort(), this.cache[r] = h === -1 ? new Wh(f, y, x, g, m) : new Hh(f, h, y, x, g, m), this.cache[r]));
  }, e.prototype.encode = function(r, a, s) {
    var i, l, h, f, g;
    for (h = [], l = [], f = 0, g = a.length; f < g; f++) i = r[a[f]], l.push(h.length), i && (h = h.concat(i.encode(s)));
    return l.push(h.length), { table: h, offsets: l };
  }, e;
}(), Hh = function() {
  function n(e, r, a, s, i, l) {
    this.raw = e, this.numberOfContours = r, this.xMin = a, this.yMin = s, this.xMax = i, this.yMax = l, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
}(), Wh = function() {
  function n(e, r, a, s, i) {
    var l, h;
    for (this.raw = e, this.xMin = r, this.yMin = a, this.xMax = s, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], l = this.raw; h = l.readShort(), this.glyphOffsets.push(l.pos), this.glyphIDs.push(l.readUInt16()), 32 & h; ) l.pos += 1 & h ? 4 : 2, 128 & h ? l.pos += 8 : 64 & h ? l.pos += 4 : 8 & h && (l.pos += 2);
  }
  return n.prototype.encode = function() {
    var e, r, a;
    for (r = new Yr(d1.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) r.pos = this.glyphOffsets[e];
    return r.data;
  }, n;
}(), Vh = function(n) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return dr(e, Qn), e.prototype.tag = "loca", e.prototype.parse = function(r) {
    var a, s;
    return r.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? (function() {
      var i, l;
      for (l = [], s = 0, i = this.length; s < i; s += 2) l.push(2 * r.readUInt16());
      return l;
    }).call(this) : (function() {
      var i, l;
      for (l = [], s = 0, i = this.length; s < i; s += 4) l.push(r.readUInt32());
      return l;
    }).call(this);
  }, e.prototype.indexOf = function(r) {
    return this.offsets[r];
  }, e.prototype.lengthOf = function(r) {
    return this.offsets[r + 1] - this.offsets[r];
  }, e.prototype.encode = function(r, a) {
    for (var s = new Uint32Array(this.offsets.length), i = 0, l = 0, h = 0; h < s.length; ++h) if (s[h] = i, l < a.length && a[l] == h) {
      ++l, s[h] = i;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (i += g);
    }
    for (var y = new Array(4 * s.length), m = 0; m < s.length; ++m) y[4 * m + 3] = 255 & s[m], y[4 * m + 2] = (65280 & s[m]) >> 8, y[4 * m + 1] = (16711680 & s[m]) >> 16, y[4 * m] = (4278190080 & s[m]) >> 24;
    return y;
  }, e;
}(), Gh = function() {
  function n(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var e, r, a, s, i;
    for (r in s = this.font.cmap.tables[0].codeMap, e = {}, i = this.subset) a = i[r], e[r] = s[a];
    return e;
  }, n.prototype.glyphsFor = function(e) {
    var r, a, s, i, l, h, f;
    for (s = {}, l = 0, h = e.length; l < h; l++) s[i = e[l]] = this.font.glyf.glyphFor(i);
    for (i in r = [], s) (a = s[i]) != null && a.compound && r.push.apply(r, a.glyphIDs);
    if (r.length > 0) for (i in f = this.glyphsFor(r)) a = f[i], s[i] = a;
    return s;
  }, n.prototype.encode = function(e, r) {
    var a, s, i, l, h, f, g, y, m, x, p, M, I, O, k;
    for (s in a = f1.encode(this.generateCmap(), "unicode"), l = this.glyphsFor(e), p = { 0: 0 }, k = a.charMap) p[(f = k[s]).old] = f.new;
    for (M in x = a.maxGlyphID, l) M in p || (p[M] = x++);
    return y = function(F) {
      var W, ae;
      for (W in ae = {}, F) ae[F[W]] = W;
      return ae;
    }(p), m = Object.keys(y).sort(function(F, W) {
      return F - W;
    }), I = function() {
      var F, W, ae;
      for (ae = [], F = 0, W = m.length; F < W; F++) h = m[F], ae.push(y[h]);
      return ae;
    }(), i = this.font.glyf.encode(l, I, p), g = this.font.loca.encode(i.offsets, I), O = { cmap: this.font.cmap.raw(), glyf: i.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(r) }, this.font.os2.exists && (O["OS/2"] = this.font.os2.raw()), this.font.directory.encode(O);
  }, n;
}();
tt.API.PDFObject = function() {
  var n;
  function e() {
  }
  return n = function(r, a) {
    return (Array(a + 1).join("0") + r).slice(-a);
  }, e.convert = function(r) {
    var a, s, i, l;
    if (Array.isArray(r)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = r.length; h < f; h++) a = r[h], g.push(e.convert(a));
      return g;
    }().join(" ") + "]";
    if (typeof r == "string") return "/" + r;
    if (r != null && r.isString) return "(" + r + ")";
    if (r instanceof Date) return "(D:" + n(r.getUTCFullYear(), 4) + n(r.getUTCMonth(), 2) + n(r.getUTCDate(), 2) + n(r.getUTCHours(), 2) + n(r.getUTCMinutes(), 2) + n(r.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(r) === "[object Object]") {
      for (s in i = ["<<"], r) l = r[s], i.push("/" + s + " " + e.convert(l));
      return i.push(">>"), i.join(`
`);
    }
    return "" + r;
  }, e;
}();
var $e = /* @__PURE__ */ ((n) => (n.FREE_HAND = "freehand", n.PAN = "pan", n.SELECT = "select", n.PENCIL = "pencil", n.ERASER = "eraser", n.GEOMETRY = "geometry", n.TEXT = "text", n.IMAGE = "image", n))($e || {}), ft = /* @__PURE__ */ ((n) => (n.LINE = "line", n.SQUARE = "square", n.RECTANGLE = "rectangle", n.CIRCLE = "circle", n.HEART = "heart", n.TRINGTANGLE = "tringtangle", n))(ft || {}), hn = /* @__PURE__ */ ((n) => (n.PENCIL = "pencil", n.MEMORY_PEN = "memory_pen", n.COLOR_PEN = "color_pen", n.PAINT_PEN = "paint_pen", n.PEN = "pen", n))(hn || {});
const p1 = nc(void 0), u5 = ({ children: n }) => {
  const [e, r] = ht($e.PAN), [a, s] = ht(
    "pencil"
    /* PENCIL */
  ), [i, l] = ht(ft.LINE), [h, f] = ht("#000000"), [g, y] = ht(2), [m, x] = ht(0.8), [p, M] = ht([{ id: 1, name: "Bảng trắng 1", commands: [] }]), [I, O] = ht(1), k = p.find((ve) => ve.id === I), [F, W] = ht(!1), ae = (ve) => {
    M((Ne) => Ne.map(
      (pe) => pe.id === I ? typeof ve == "function" ? ve(pe) : ve : pe
    ));
  }, [me, Se] = ht(!1), [re, z] = ht(null), [ie, ye] = ht([]), [N, _] = ht(!1), [U, R] = ht(null), [de, he] = ht(""), [Q, Z] = ht({
    fontFamily: "Arial",
    fontSize: 16,
    bold: !1,
    italic: !1,
    underline: !1
  }), [fe, D] = ht(100), [Le, w] = ht(null), C = Zn(null), T = () => {
    if (k.commands.length > 0) {
      const ve = k.commands[k.commands.length - 1];
      ae((Ne) => ({
        ...Ne,
        commands: Ne.commands.slice(0, -1)
      })), ye((Ne) => [...Ne, ve]);
    }
  }, q = () => {
    if (ie.length > 0) {
      const ve = ie[ie.length - 1];
      ye((Ne) => Ne.slice(0, -1)), ae((Ne) => ({
        ...Ne,
        commands: [...Ne.commands, ve]
      }));
    }
  }, Y = () => {
    ae({ ...k, commands: [] }), ye([]), z(null), Se(!1);
  };
  Bn(() => {
    e !== "text" && (_(!1), he(""), R(null));
  }, [e]);
  const He = {
    currentTool: e,
    setCurrentTool: r,
    currentBrushType: a,
    setCurrentBrushType: s,
    currentGeometryType: i,
    setCurrentGeometryType: l,
    currentColor: h,
    setCurrentColor: f,
    currentBrushSize: g,
    setCurrentBrushSize: y,
    currentBrushOpacity: m,
    setCurrentBrushOpacity: x,
    pages: p,
    setPages: M,
    addPage: () => {
      const ve = Math.max(...p.map((Ne) => Ne.id));
      M([...p, { id: ve + 1, name: `Bảng trắng ${ve + 1}`, commands: [] }]), O(ve + 1);
    },
    deletePage: (ve) => {
      if (I === ve) {
        const Ne = p.find((se) => se.id !== ve);
        Ne ? (M(p.filter((se) => se.id !== ve)), O(Ne.id), ae(Ne)) : (M([{ id: 1, name: "Bảng trắng 1", commands: [] }]), ae({ id: 1, name: "Bảng trắng 1", commands: [] }), O(1));
        return;
      }
      M(p.filter((Ne) => Ne.id !== ve));
    },
    renamePage: (ve, Ne) => {
      M(p.map(
        (se) => se.id === ve ? { ...se, name: Ne } : se
      ));
    },
    currentPageId: I,
    setCurrentPageId: O,
    currentPage: k,
    setCurrentPage: ae,
    isDrawing: me,
    setIsDrawing: Se,
    currentAction: re,
    setCurrentAction: z,
    undoStack: ie,
    setUndoStack: ye,
    showTextInput: N,
    setShowTextInput: _,
    textPosition: U,
    setTextPosition: R,
    textValue: de,
    setTextValue: he,
    textStyle: Q,
    setTextStyle: Z,
    zoomLevel: fe,
    setZoomLevel: D,
    canvasRef: C,
    undo: T,
    redo: q,
    clear: Y,
    zoomIn: () => {
      D((ve) => Math.min(ve + 10, 200));
    },
    zoomOut: () => {
      D((ve) => Math.max(ve - 10, 50));
    },
    resetZoom: () => {
      D(100);
    },
    handleTextSubmit: () => {
      de && U && (ae((ve) => ({
        ...ve,
        commands: [
          ...ve.commands,
          {
            type: $e.TEXT,
            x: U.x,
            y: U.y,
            text: de,
            color: h,
            size: g,
            opacity: m,
            textStyle: Q
          }
        ]
      })), he(""), _(!1));
    },
    saveAsPNG: () => {
      if (C.current) {
        const ve = C.current.toDataURL(), Ne = document.createElement("a");
        Ne.href = ve, Ne.download = `drawing-page-${I}.png`, Ne.click();
      }
    },
    saveAsPDF: () => {
      if (C.current) {
        const ve = C.current.width > C.current.height ? "l" : "p", Ne = new tt(ve, "mm", "a4"), se = C.current.toDataURL("image/png", 1), pe = ve === "l" ? 297 : 210, ge = ve === "l" ? 210 : 297, K = C.current.width, je = C.current.height, ze = Math.min(pe / K, ge / je), Ke = (pe - K * ze) / 2, We = (ge - je * ze) / 2;
        Ne.addImage(se, "PNG", Ke, We, K * ze, je * ze), Ne.save(`drawing-page-${I}.pdf`);
      }
    },
    importImage: (ve) => {
      var se;
      const Ne = (se = ve.target.files) == null ? void 0 : se[0];
      if (Ne) {
        const pe = new Image();
        pe.src = URL.createObjectURL(Ne), pe.onload = () => {
          ae((ge) => ({
            ...ge,
            commands: [
              ...ge.commands,
              { type: $e.IMAGE, image: pe, color: "#000000", size: 1, opacity: m, width: pe.width, height: pe.height, x: 0, y: 0, radius: 0, text: "" }
            ]
          }));
        };
      }
    },
    mousePosition: Le,
    setMousePosition: w,
    isClicking: F,
    setClicking: W,
    copyAsImage: async () => {
      if (C.current)
        try {
          const ve = await new Promise(
            (se) => C.current.toBlob((pe) => se(pe))
          ), Ne = new ClipboardItem({ "image/png": ve });
          await navigator.clipboard.write([Ne]);
        } catch (ve) {
          console.error("Failed to copy image:", ve);
        }
    }
  };
  return /* @__PURE__ */ X.jsx(p1.Provider, { value: He, children: n });
}, Pr = () => {
  const n = rc(p1);
  if (n === void 0)
    throw new Error("useDrawing must be used within a DrawingProvider");
  return n;
}, kr = ({ children: n, dropdown: e, placement: r = "bottom", isChild: a, classNames: s }) => {
  const [i, l] = ht(!1), h = Zn(null);
  Bn(() => {
    const g = (y) => {
      h.current && !h.current.contains(y.target) && l(!1);
    };
    return i && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [i]);
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
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    "            ",
    !a && i && /* @__PURE__ */ X.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-transparent",
        onClick: () => l(!1)
      }
    ),
    /* @__PURE__ */ X.jsxs("div", { className: "relative", ref: h, children: [
      /* @__PURE__ */ X.jsx("div", { onClick: (g) => {
        a && g.stopPropagation(), l(!i);
      }, children: n({ isOpen: i }) }),
      /* @__PURE__ */ X.jsx(
        "div",
        {
          className: `absolute z-50 rounded shadow-custom-11 bg-white transition-all duration-200 ease-in-out transform
                        ${i ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
                        ${f(r)}`,
          children: /* @__PURE__ */ X.jsx("div", { className: `w-max min-w-[150px] h-full ${s}`, children: typeof e == "function" ? e({ onClose: () => l(!1) }) : e })
        }
      )
    ] })
  ] });
}, Yh = (n) => {
  var F;
  const { iconSet: e, config: r } = fr(), {
    MenuIcon: a,
    CopyImageIcon: s,
    SaveCloudIcon: i,
    ExportIcon: l,
    PDFIcon: h,
    ImageIcon: f,
    ArrowRightIcon: g
  } = e, { copyAsImage: y, saveAsPDF: m, saveAsPNG: x } = Pr(), p = `h-8 flex-none px-2 py-1 rounded cursor-pointer flex items-center gap-3 ${(F = r == null ? void 0 : r.components) == null ? void 0 : F.buttonIcon}`, M = () => {
    m(), n.onSavePDF && n.onSavePDF();
  }, I = () => {
    x(), n.onSaveImage && n.onSaveImage();
  }, O = () => {
    n.onSaveCloud && n.onSaveCloud();
  }, k = [
    { label: "PDF (.pdf)", icon: h, action: M },
    { label: "Ảnh PNG (.png)", icon: f, action: I }
  ];
  return /* @__PURE__ */ X.jsx(
    kr,
    {
      placement: "bottom",
      dropdown: ({ onClose: W }) => {
        var ae, me;
        return /* @__PURE__ */ X.jsxs("ul", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ X.jsxs(
            "li",
            {
              onClick: () => {
                y(), W();
              },
              className: `h-8 flex-none ${(ae = r == null ? void 0 : r.components) == null ? void 0 : ae.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`,
              children: [
                /* @__PURE__ */ X.jsx(s, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Sao chép dưới dạng ảnh" })
              ]
            }
          ),
          /* @__PURE__ */ X.jsxs(
            "li",
            {
              onClick: O,
              className: `h-8 flex-none ${(me = r == null ? void 0 : r.components) == null ? void 0 : me.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`,
              children: [
                /* @__PURE__ */ X.jsx(i, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Lưu về Cloud class" })
              ]
            }
          ),
          /* @__PURE__ */ X.jsx("div", { className: "w-full", children: /* @__PURE__ */ X.jsx(
            kr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: Se }) => /* @__PURE__ */ X.jsx("div", { className: "w-full flex flex-col gap-2 p-2", children: k.map(({ label: re, icon: z, action: ie }) => /* @__PURE__ */ X.jsxs(
                "div",
                {
                  onClick: () => {
                    ie(), Se();
                  },
                  className: p,
                  children: [
                    /* @__PURE__ */ X.jsx(z, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                    /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: re })
                  ]
                },
                re
              )) }),
              children: ({ isOpen: Se }) => {
                var re, z;
                return /* @__PURE__ */ X.jsxs("li", { className: `w-full h-8 flex-none ${(re = r == null ? void 0 : r.components) == null ? void 0 : re.buttonIcon} ${Se ? (z = r == null ? void 0 : r.components) == null ? void 0 : z.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`, children: [
                  /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ X.jsx(l, { className: "w-5 h-5 flex-none" }),
                    /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Xuất" })
                  ] }),
                  /* @__PURE__ */ X.jsx(g, { className: "w-5 h-5 flex-none" })
                ] });
              }
            }
          ) })
        ] });
      },
      children: ({ isOpen: W }) => /* @__PURE__ */ X.jsx(Qt, { Icon: a, isActive: W })
    }
  );
}, tc = ({ onChange: n, value: e = 10, maxValue: r = 50 }) => {
  const [a, s] = ht(e);
  Bn(() => {
    s(e);
  }, [e]);
  const i = (l) => {
    const h = Math.min(r, Math.max(1, l));
    s(h), n(h);
  };
  return /* @__PURE__ */ X.jsxs("div", { className: "flex items-center space-x-5", children: [
    /* @__PURE__ */ X.jsx("div", { className: "relative w-full flex items-center", children: /* @__PURE__ */ X.jsx(
      "input",
      {
        type: "range",
        min: "1",
        max: r,
        step: "1",
        value: a,
        onChange: (l) => i(Number(l.target.value)),
        className: `w-full h-6 appearance-none bg-transparent cursor-pointer select-none touch-none\r
                        /* Chrome & Safari */\r
                        [&::-webkit-slider-runnable-track]:h-2\r
                        [&::-webkit-slider-runnable-track]:bg-gray-200\r
                        [&::-webkit-slider-runnable-track]:rounded-full\r
                        [&::-webkit-slider-runnable-track]:border-0\r
                        [&::-webkit-slider-runnable-track]:shadow-inner\r
                        [&::-webkit-slider-thumb]:appearance-none\r
                        [&::-webkit-slider-thumb]:w-6\r
                        [&::-webkit-slider-thumb]:h-6\r
                        [&::-webkit-slider-thumb]:rounded-full\r
                        [&::-webkit-slider-thumb]:bg-blue-600\r
                        [&::-webkit-slider-thumb]:border-4\r
                        [&::-webkit-slider-thumb]:border-white\r
                        [&::-webkit-slider-thumb]:mt-[-8px]\r
                        [&::-webkit-slider-thumb]:shadow\r
                        [&::-webkit-slider-thumb]:cursor-grab\r
                        [&::-webkit-slider-thumb]:active:cursor-grabbing\r
                        [&::-webkit-slider-thumb]:transition-[background,border-color,box-shadow]\r
                        [&::-webkit-slider-thumb]:duration-150\r
                        [&::-webkit-slider-thumb]:ease-in-out\r
                        hover:[&::-webkit-slider-thumb]:bg-blue-700\r
                        hover:[&::-webkit-slider-thumb]:scale-110\r
                        active:[&::-webkit-slider-thumb]:scale-95\r
\r
                        /* Firefox */\r
                        [&::-moz-range-track]:h-2\r
                        [&::-moz-range-track]:bg-gray-200\r
                        [&::-moz-range-track]:rounded-full\r
                        [&::-moz-range-thumb]:appearance-none\r
                        [&::-moz-range-thumb]:w-4\r
                        [&::-moz-range-thumb]:h-4\r
                        [&::-moz-range-thumb]:rounded-full\r
                        [&::-moz-range-thumb]:bg-blue-600\r
                        [&::-moz-range-thumb]:border-2\r
                        [&::-moz-range-thumb]:border-white\r
                        [&::-moz-range-thumb]:transition-all\r
                        [&::-moz-range-thumb]:shadow-md\r
                        hover:[&::-moz-range-thumb]:bg-blue-700\r
                        hover:[&::-moz-range-thumb]:scale-110\r
                        active:[&::-moz-range-thumb]:scale-95\r
\r
                        /* IE */\r
                        [&::-ms-track]:h-2\r
                        [&::-ms-track]:bg-gray-200\r
                        [&::-ms-track]:rounded-full\r
                        [&::-ms-thumb]:appearance-none\r
                        [&::-ms-thumb]:w-4\r
                        [&::-ms-thumb]:h-4\r
                        [&::-ms-thumb]:rounded-full\r
                        [&::-ms-thumb]:bg-blue-600\r
                        [&::-ms-thumb]:border-2\r
                        [&::-ms-thumb]:border-white\r
                        [&::-ms-thumb]:mt-0\r
                        [&::-ms-thumb]:transition-all\r
                        [&::-ms-thumb]:shadow-md\r
                        hover:[&::-ms-thumb]:bg-blue-700\r
                        hover:[&::-ms-thumb]:scale-110\r
                        active:[&::-ms-thumb]:scale-95\r
\r
                        focus:outline-none`
      }
    ) }),
    /* @__PURE__ */ X.jsx("div", { className: "flex items-center justify-center gap-2 px-2 py-1 bg-gray-100 rounded min-w-[40px]", children: /* @__PURE__ */ X.jsx("div", { className: "text-center font-medium text-gray-700", children: a }) })
  ] });
}, Bc = ["#000000", "#f0a3a3", "#f0c3a3", "#f0e3a3", "#a3f0a3", "#a3f0e3"], $h = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana"], Xh = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72], Jh = ({ isActive: n, onColorChange: e, onBrushSizeChange: r, onClick: a, currentColor: s }) => {
  const { iconSet: i, config: l } = fr(), {
    PencilOutlineIcon: h,
    MemoryPenOutlineIcon: f,
    ColorPenOutlineIcon: g,
    PaintPenOutlineIcon: y,
    PenOutlineIcon: m
  } = i, x = [
    { type: hn.PENCIL, name: "Bút chì", icon: h },
    { type: hn.MEMORY_PEN, name: "Bút nhớ", icon: f },
    { type: hn.COLOR_PEN, name: "Bút màu", icon: g },
    { type: hn.PAINT_PEN, name: "Bút sơn", icon: y },
    { type: hn.PEN, name: "Bút bi", icon: m }
  ], p = (W) => {
    k(W);
  }, { currentBrushSize: M, currentBrushType: I, setCurrentBrushType: O, setCurrentBrushOpacity: k, currentBrushOpacity: F } = Pr();
  return /* @__PURE__ */ X.jsx(
    kr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Màu" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2", children: [
            Bc.map((W) => /* @__PURE__ */ X.jsx(
              Zh,
              {
                color: W,
                onClick: () => e == null ? void 0 : e(W),
                checked: s === W
              },
              W
            )),
            /* @__PURE__ */ X.jsx("label", { htmlFor: "ColorPicker", style: { background: s }, className: "w-6 h-6 flex-none rounded outline-none relative", children: /* @__PURE__ */ X.jsx(
              "input",
              {
                type: "color",
                className: "w-6 h6 flex-none rounded outline-none invisible",
                value: s,
                onChange: (W) => e == null ? void 0 : e(W.target.value),
                id: "ColorPicker"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Loại bút" }),
          /* @__PURE__ */ X.jsx("div", { className: "flex items-center gap-2", children: x.map((W) => /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: W.icon,
              onClick: () => O(W.type),
              isActive: I === W.type
            },
            W.name
          )) })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Độ dày nét" }),
          /* @__PURE__ */ X.jsx(tc, { onChange: r, value: M })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Độ trong suốt" }),
          /* @__PURE__ */ X.jsx(
            tc,
            {
              value: F * 100,
              onChange: (W) => p(W / 100),
              maxValue: 100
            }
          )
        ] })
      ] }),
      children: ({ isOpen: W }) => /* @__PURE__ */ X.jsx(
        Qt,
        {
          onClick: a,
          Icon: i.PencilOutlineIcon,
          isActive: W || n
        }
      )
    }
  );
}, Zh = ({ color: n, onClick: e, checked: r }) => {
  const { config: a, iconSet: s } = fr();
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
  const { iconSet: r } = fr(), {
    currentColor: a,
    setCurrentColor: s,
    textStyle: i,
    setTextStyle: l
  } = Pr();
  return /* @__PURE__ */ X.jsx(
    kr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3 min-w-[200px] bg-white rounded shadow-lg", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { className: "text-sm font-medium", children: "Color" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            Bc.map((h) => /* @__PURE__ */ X.jsx(
              Qh,
              {
                color: h,
                onClick: () => s(h),
                checked: a === h
              },
              h
            )),
            /* @__PURE__ */ X.jsx(
              "label",
              {
                htmlFor: "ColorPicker",
                className: "w-6 h-6 flex-none rounded outline-none cursor-pointer relative overflow-hidden",
                style: { background: a },
                children: /* @__PURE__ */ X.jsx(
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
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { className: "text-sm font-medium", children: "Text Style" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ X.jsx(
              kr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ X.jsx("div", { className: "flex flex-col min-w-[200px] bg-white rounded shadow-custom-11 py-1.5", children: $h.map((f) => /* @__PURE__ */ X.jsx(
                  "span",
                  {
                    onClick: () => {
                      h(), l({ ...i, fontFamily: f });
                    },
                    className: "hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer",
                    children: f
                  },
                  f
                )) }),
                children: ({ isOpen: h }) => /* @__PURE__ */ X.jsx("div", { className: `h-10 min-w-[150px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: i.fontFamily })
              }
            ),
            /* @__PURE__ */ X.jsx(
              kr,
              {
                placement: "bottom",
                dropdown: ({ onClose: h }) => /* @__PURE__ */ X.jsx("div", { className: "flex flex-col flex-none max-h-[200px] bg-white rounded shadow-custom-11 py-1.5", children: /* @__PURE__ */ X.jsx("div", { className: "w-full h-full flex flex-col overflow-y-auto", children: Xh.map((f) => /* @__PURE__ */ X.jsx(
                  "span",
                  {
                    onClick: () => {
                      h(), l({ ...i, fontSize: f });
                    },
                    className: "hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer",
                    children: f
                  },
                  f
                )) }) }),
                classNames: "!min-w-[50px]",
                children: ({ isOpen: h }) => /* @__PURE__ */ X.jsxs("div", { className: `h-10 w-[50px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${h ? "!bg-gray-100" : ""}`, children: [
                  i.fontSize,
                  "px"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ X.jsx(
              Qt,
              {
                Icon: r.FontBoldIcon,
                className: "border border-gray-200",
                onClick: () => l({ ...i, bold: !i.bold }),
                isActive: i.bold
              }
            ),
            /* @__PURE__ */ X.jsx(
              Qt,
              {
                Icon: r.FontItalicIcon,
                className: "border border-gray-200",
                onClick: () => l({ ...i, italic: !i.italic }),
                isActive: i.italic
              }
            ),
            /* @__PURE__ */ X.jsx(
              Qt,
              {
                Icon: r.FontUnderlineIcon,
                className: "border border-gray-200",
                onClick: () => l({ ...i, underline: !i.underline }),
                isActive: i.underline
              }
            )
          ] })
        ] })
      ] }),
      children: ({ isOpen: h }) => /* @__PURE__ */ X.jsx(
        Qt,
        {
          onClick: e,
          Icon: r.FontsIcon,
          isActive: h || n
        }
      )
    }
  );
}, Qh = ({ color: n, onClick: e, checked: r }) => {
  const { iconSet: a } = fr();
  return /* @__PURE__ */ X.jsx(
    "button",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-90 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: e,
      children: r && /* @__PURE__ */ X.jsx(a.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, e5 = () => {
  const { iconSet: n, config: e } = fr(), {
    ArrowRightIcon: r,
    MoreIcon: a,
    MultipleCardsIcon: s,
    AddBoardIcon: i
  } = n, { pages: l, addPage: h, deletePage: f, currentPageId: g, setCurrentPageId: y } = Pr();
  return /* @__PURE__ */ X.jsx(
    kr,
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
                  /* @__PURE__ */ X.jsx(i, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 }),
                  /* @__PURE__ */ X.jsx("span", { className: "flex-none", children: "Thêm bảng" })
                ] }),
                /* @__PURE__ */ X.jsx(r, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 })
              ]
            }
          ),
          l.map((p, M) => /* @__PURE__ */ X.jsx("div", { className: "w-full", children: /* @__PURE__ */ X.jsx(
            kr,
            {
              placement: "right",
              isChild: !0,
              dropdown: ({ onClose: I }) => {
                var O, k;
                return /* @__PURE__ */ X.jsxs("div", { className: "w-full flex flex-col gap-2 p-2", children: [
                  /* @__PURE__ */ X.jsx(
                    "div",
                    {
                      onClick: () => {
                        I();
                      },
                      className: `h-8 flex-none ${(O = e == null ? void 0 : e.components) == null ? void 0 : O.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`,
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
                var O, k;
                return /* @__PURE__ */ X.jsxs(
                  "div",
                  {
                    className: `w-full h-8 flex-none ${(O = e == null ? void 0 : e.components) == null ? void 0 : O.buttonIcon} ${I || g === p.id ? (k = e == null ? void 0 : e.components) == null ? void 0 : k.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-5`,
                    children: [
                      /* @__PURE__ */ X.jsx(
                        "span",
                        {
                          onClick: (F) => {
                            F.stopPropagation(), F.preventDefault(), y(p.id);
                          },
                          className: "flex-none cursor-pointer",
                          children: p == null ? void 0 : p.name
                        }
                      ),
                      /* @__PURE__ */ X.jsx(a, { className: "w-5 h-5 flex-none", strokeWidth: 1.6 })
                    ]
                  }
                );
              }
            }
          ) }, M))
        ] });
      },
      children: ({ isOpen: m }) => /* @__PURE__ */ X.jsx(Qt, { Icon: s, isActive: m })
    }
  );
}, t5 = ({ isActive: n, onColorChange: e, onBrushSizeChange: r, onClick: a, currentColor: s }) => {
  const { iconSet: i, config: l } = fr(), h = [
    { type: ft.LINE, name: "Đường thẳng", icon: i.LineIcon },
    { type: ft.SQUARE, name: "Hình vuông", icon: i.SquareIcon },
    { type: ft.TRINGTANGLE, name: "Hình tam giác", icon: i.TriangleIcon },
    { type: ft.CIRCLE, name: "Hình tròn", icon: i.CircleIcon },
    { type: ft.HEART, name: "Trái tim", icon: i.HeartIcon }
  ], { currentBrushSize: f, setCurrentGeometryType: g, currentGeometryType: y } = Pr();
  return /* @__PURE__ */ X.jsx(
    kr,
    {
      placement: "right",
      dropdown: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Màu" }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-2", children: [
            Bc.map((m) => /* @__PURE__ */ X.jsx(
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
            Qt,
            {
              Icon: m.icon || i.PencilOutlineIcon,
              onClick: () => g(m.type),
              isActive: y === m.type
            },
            m.name
          )) })
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ X.jsx("span", { children: "Độ dày nét" }),
          /* @__PURE__ */ X.jsx(tc, { onChange: r, value: f })
        ] })
      ] }),
      children: ({ isOpen: m }) => /* @__PURE__ */ X.jsx(
        Qt,
        {
          onClick: a,
          Icon: i.SplineIcon,
          isActive: m || n
        }
      )
    }
  );
}, n5 = ({ color: n, onClick: e, checked: r }) => {
  const { config: a, iconSet: s } = fr();
  return /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "w-6 h-6 flex-none rounded cursor-pointer hover:opacity-95 active:opacity-80 relative flex items-center justify-center text-white",
      style: { backgroundColor: n },
      onClick: e,
      children: r && /* @__PURE__ */ X.jsx(s.CheckIcon, { className: "w-4 h-4" })
    }
  );
}, zl = 12, Ia = 20, r5 = ({ onApply: n }) => {
  const [e, r] = ht(null), [a, s] = ht(0), [i, l] = ht(0), [h, f] = ht(0), [g, y] = ht(!1), [m, x] = ht(!1), [p, M] = ht(null), [I, O] = ht(null), k = Zn(null), F = Zn(null), W = Zn(null), ae = () => {
    var N;
    return (N = k.current) == null ? void 0 : N.click();
  }, me = (N) => {
    var R;
    const _ = (R = N.target.files) == null ? void 0 : R[0];
    if (!_) return;
    const U = new Image();
    U.onload = () => {
      r(U), s(U.width), l(U.height);
    }, U.src = URL.createObjectURL(_);
  }, Se = () => {
    if (!F.current || !e) return;
    const N = F.current.getContext("2d"), _ = a, U = i;
    F.current.width = _, F.current.height = U, N && (N.clearRect(0, 0, _, U), N.save(), N.translate(_ / 2, U / 2), N.rotate(h * Math.PI / 180), N.scale(g ? -1 : 1, m ? -1 : 1), N.drawImage(e, -_ / 2, -U / 2, _, U), N.restore());
  };
  Bn(() => {
    Se();
  }, [e, a, i, h, g, m]);
  const re = (N) => (_) => {
    _.stopPropagation(), M(N), O({ x: _.clientX, y: _.clientY });
  }, z = (N) => {
    if (!p || !I) return;
    const _ = N.clientX - I.x, U = N.clientY - I.y;
    switch (O({ x: N.clientX, y: N.clientY }), p) {
      case "right":
        s((R) => Math.max(1, R + _));
        break;
      case "left":
        s((R) => Math.max(1, R - _));
        break;
      case "bottom":
        l((R) => Math.max(1, R + U));
        break;
      case "top":
        l((R) => Math.max(1, R - U));
        break;
      case "top-left":
        s((R) => Math.max(1, R - _)), l((R) => Math.max(1, R - U));
        break;
      case "top-right":
        s((R) => Math.max(1, R + _)), l((R) => Math.max(1, R - U));
        break;
      case "bottom-left":
        s((R) => Math.max(1, R - _)), l((R) => Math.max(1, R + U));
        break;
      case "bottom-right":
        s((R) => Math.max(1, R + _)), l((R) => Math.max(1, R + U));
        break;
    }
  }, ie = () => {
    M(null), O(null);
  };
  Bn(() => (window.addEventListener("mousemove", z), window.addEventListener("mouseup", ie), () => {
    window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", ie);
  }), [p, I]);
  const ye = () => {
    if (!F.current) return;
    const N = F.current.toDataURL(), _ = new Image();
    _.onload = () => {
      n({ type: $e.IMAGE, image: _, width: _.width, height: _.height, x: 0, y: 0, color: "#000", size: 1, opacity: 1, radius: 0, text: "" }), r(null);
    }, _.src = N;
  };
  return /* @__PURE__ */ X.jsx("div", { className: "space-y-4", children: e ? /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsxs("div", { ref: W, className: "relative border", style: { width: a, height: i }, children: [
      /* @__PURE__ */ X.jsx("canvas", { ref: F }),
      ["top-left", "top-right", "bottom-left", "bottom-right", "left", "right", "top", "bottom"].map((N) => {
        const _ = { width: zl, height: zl, position: "absolute", background: "#fff", border: "1px solid #333" };
        return N.includes("left") && (_.left = 0), N.includes("right") && (_.right = 0), N.includes("top") && (_.top = 0), N.includes("bottom") && (_.bottom = 0), (N === "left" || N === "right") && (_.top = "50%", _.transform = "translateY(-50%)"), (N === "top" || N === "bottom") && (_.left = "50%", _.transform = "translateX(-50%)"), _.cursor = N.includes("left") && N.includes("top") || N.includes("right") && N.includes("bottom") ? "nwse-resize" : N.includes("right") && N.includes("top") || N.includes("left") && N.includes("bottom") ? "nesw-resize" : N.includes("left") || N.includes("right") ? "ew-resize" : "ns-resize", /* @__PURE__ */ X.jsx("div", { style: _, onMouseDown: re(N) }, N);
      })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ X.jsx("button", { onClick: () => f((N) => (N + 90) % 360), title: "Rotate CW", children: /* @__PURE__ */ X.jsx(A2, { size: Ia }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => f((N) => (N - 90 + 360) % 360), title: "Rotate CCW", children: /* @__PURE__ */ X.jsx(L2, { size: Ia }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => y((N) => !N), title: "Flip Horizontal", children: /* @__PURE__ */ X.jsx(yl, { size: Ia, style: { transform: g ? "scaleX(-1)" : void 0 } }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: () => x((N) => !N), title: "Flip Vertical", children: /* @__PURE__ */ X.jsx(yl, { size: Ia, style: { transform: m ? "scaleY(-1)" : "rotate(90deg)" } }) }),
      /* @__PURE__ */ X.jsx("button", { onClick: ye, className: "ml-auto px-4 py-2 bg-blue-600 text-white rounded", children: "Apply" })
    ] })
  ] }) : /* @__PURE__ */ X.jsxs("button", { onClick: ae, className: "flex items-center gap-2 px-3 py-2 bg-gray-200 rounded", children: [
    /* @__PURE__ */ X.jsx(Tu, { size: Ia }),
    "Upload Image",
    /* @__PURE__ */ X.jsx("input", { ref: k, type: "file", accept: "image/*", onChange: me, className: "hidden" })
  ] }) });
}, i5 = (n) => {
  const {
    currentTool: e,
    setCurrentTool: r,
    currentColor: a,
    setCurrentColor: s,
    setCurrentBrushSize: i,
    zoomLevel: l,
    undo: h,
    redo: f,
    resetZoom: g,
    zoomOut: y,
    zoomIn: m,
    mousePosition: x,
    clear: p,
    currentPage: M,
    setCurrentPage: I
  } = Pr(), { config: O, iconSet: k } = fr(), F = O.components.buttonIcon, {
    HandleIcon: W,
    EraserIcon: ae,
    PlusIcon: me,
    MinusIcon: Se,
    SquareDashedIcon: re,
    UndoIcon: z,
    RedoIcon: ie,
    SplineIcon: ye,
    CleanIcon: N,
    ImageUpIcon: _,
    PartyPopperIcon: U
  } = k, [R, de] = ht(!1), he = async (Q) => {
    var Z;
    if (!Q.image || Q.type !== $e.IMAGE || !x) {
      console.warn("Invalid image command or missing mouse position");
      return;
    }
    try {
      const fe = document.createElement("canvas"), D = fe.getContext("2d"), Le = Q.width || Q.image.width || 0, w = Q.height || Q.image.height || 0;
      if (!D || Le <= 0 || w <= 0)
        throw new Error("Invalid canvas context or dimensions");
      fe.width = Le, fe.height = w, D.save(), Q.rotation && (D.translate(Le / 2, w / 2), D.rotate(Q.rotation * Math.PI / 180), D.translate(-Le / 2, -w / 2)), D.drawImage(Q.image, 0, 0, Le, w), D.restore();
      const C = await new Promise((q) => {
        fe.toBlob((Y) => q(Y), "image/png", 0.95);
      });
      if (!C)
        throw new Error("Failed to create image blob");
      const T = new File([C], "drawing-image.png", { type: "image/png" });
      I((q) => ({
        ...q,
        commands: [...q.commands, Q]
      })), (Z = n.onImageUpload) == null || Z.call(n, {
        file: T,
        position: x,
        dimensions: { width: Le, height: w }
      }), de(!1);
    } catch (fe) {
      console.error("Error processing image:", fe);
    }
  };
  return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
    /* @__PURE__ */ X.jsxs("div", { className: "absolute top-0 left-0 z-10 flex flex-col gap-8", style: { pointerEvents: "none" }, children: [
      /* @__PURE__ */ X.jsxs("div", { className: "h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded", style: { pointerEvents: "auto" }, children: [
        /* @__PURE__ */ X.jsx(
          Yh,
          {
            onSaveImage: () => {
              const Q = document.querySelector("canvas");
              Q instanceof HTMLCanvasElement && (n.onSaveAsImage && n.onSaveAsImage(Q.toDataURL("image/png")), n.onExportPNG && n.onExportPNG(Q.toDataURL("image/png"), {
                width: Q.width,
                height: Q.height
              }));
            },
            onSavePDF: () => {
              const Q = document.querySelector("canvas");
              Q instanceof HTMLCanvasElement && n.onSaveAsPDF && Q.toBlob((Z) => {
                Z && n.onSaveAsPDF && n.onSaveAsPDF(Z);
              }, "image/png");
            },
            onSaveCloud: () => {
              n.onSaveToCloud && M && n.onSaveToCloud({
                commands: M.commands,
                timestamp: Date.now()
              });
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
            Qt,
            {
              Icon: W,
              onClick: () => r($e.PAN),
              isActive: e === $e.PAN,
              title: "Pan"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Jh,
            {
              isActive: e === $e.PENCIL,
              onClick: () => r($e.PENCIL),
              onColorChange: s,
              onBrushSizeChange: i,
              currentColor: a
            }
          ),
          /* @__PURE__ */ X.jsx(
            Kh,
            {
              isActive: e === $e.TEXT,
              onClick: () => r($e.TEXT)
            }
          ),
          /* @__PURE__ */ X.jsx(
            t5,
            {
              isActive: e === $e.GEOMETRY,
              onClick: () => r($e.GEOMETRY),
              onColorChange: s,
              onBrushSizeChange: i,
              currentColor: a
            }
          ),
          /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: re,
              onClick: () => {
                console.log("Switching to SELECT tool");
              },
              isActive: e === $e.SELECT,
              title: "Chọn vùng"
            }
          ),
          /* @__PURE__ */ X.jsxs("label", { className: `h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 cursor-pointer ${F}}`, children: [
            /* @__PURE__ */ X.jsx(_, { className: "w-5 h-5" }),
            /* @__PURE__ */ X.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                onChange: (Q) => {
                  var D;
                  const Z = (D = Q.target.files) == null ? void 0 : D[0];
                  if (!Z || !x) return;
                  const fe = new Image();
                  fe.onload = () => {
                    I((Le) => ({
                      ...Le,
                      commands: [...Le.commands, {
                        type: $e.IMAGE,
                        image: fe,
                        x: x.x,
                        y: x.y,
                        width: fe.width,
                        height: fe.height,
                        color: a,
                        size: 1
                        // size không ảnh hưởng với image
                      }]
                    })), n.onImageUpload && n.onImageUpload({
                      file: Z,
                      position: x,
                      dimensions: {
                        width: fe.width,
                        height: fe.height
                      }
                    });
                  }, fe.src = URL.createObjectURL(Z);
                },
                className: "hidden"
              }
            )
          ] }),
          /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: ae,
              onClick: () => {
                r($e.ERASER), e === $e.ERASER && x && n.onErase && n.onErase({
                  x: x.x - 20,
                  y: x.y - 20,
                  width: 40,
                  height: 40
                });
              },
              isActive: e === $e.ERASER,
              title: "Tẩy"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: N,
              onClick: () => {
                var Q;
                p(), (Q = n.onClean) == null || Q.call(n);
              },
              title: "Xóa bảng"
            }
          )
        ] }),
        /* @__PURE__ */ X.jsxs("div", { className: "w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2", style: { pointerEvents: "auto" }, children: [
          /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: z,
              onClick: () => {
                const Q = M.commands[M.commands.length - 1];
                h(), n.onDrawingComplete && Q && x && n.onDrawingComplete({
                  command: Q,
                  position: x
                });
              },
              title: "Undo"
            }
          ),
          /* @__PURE__ */ X.jsx(
            Qt,
            {
              Icon: ie,
              onClick: () => {
                f();
                const Q = M.commands[M.commands.length - 1];
                n.onDrawingComplete && Q && x && n.onDrawingComplete({
                  command: Q,
                  position: x
                });
              },
              title: "Redo"
            }
          ),
          /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ X.jsx(
              Qt,
              {
                Icon: Se,
                onClick: () => {
                  var Q;
                  y(), (Q = n.onZoomOut) == null || Q.call(n);
                },
                title: "Zoom Out"
              }
            ),
            /* @__PURE__ */ X.jsx("span", { className: "text-xs", children: Math.round(l) }),
            /* @__PURE__ */ X.jsx(
              Qt,
              {
                Icon: me,
                onClick: () => {
                  var Q;
                  m(), (Q = n.onZoomIn) == null || Q.call(n);
                },
                title: "Zoom In"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    R && /* @__PURE__ */ X.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        onClick: () => de(!1),
        children: /* @__PURE__ */ X.jsxs(
          "div",
          {
            className: "bg-white p-4 rounded shadow-lg",
            onClick: (Q) => Q.stopPropagation(),
            children: [
              /* @__PURE__ */ X.jsx(r5, { onApply: he }),
              /* @__PURE__ */ X.jsx(
                "button",
                {
                  className: "mt-2 text-sm text-gray-600 hover:underline",
                  onClick: () => de(!1),
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
    zoomLevel: a,
    textStyle: s,
    handleTextSubmit: i,
    showTextInput: l
  } = Pr(), h = a / 100, f = Zn(null), g = () => {
    f.current && (f.current.style.height = "auto", f.current.style.height = `${f.current.scrollHeight}px`);
  };
  Bn(() => {
    const x = () => {
      f.current && l && (f.current.focus(), g());
    };
    x();
    const p = setTimeout(x, 10);
    return () => clearTimeout(p);
  }, [l, n]);
  const y = (x) => {
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
          onBlur: i,
          onKeyDown: y,
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
}, o5 = ({ x: n, y: e, isClicking: r, isDrawing: a, tool: s, scale: i = 1 }) => {
  const l = Zn(null), h = a || s === "pencil" || s === "eraser" || s === "line";
  return Bn(() => {
    l.current && (l.current.style.transform = `translate(${n}px, ${e}px)`);
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
}, s5 = Ma((n, e) => {
  const {
    currentPage: r,
    setCurrentPage: a,
    currentGeometryType: s,
    currentAction: i,
    setCurrentAction: l,
    isDrawing: h,
    setIsDrawing: f,
    currentTool: g,
    currentColor: y,
    currentBrushSize: m,
    currentBrushType: x,
    setShowTextInput: p,
    setTextPosition: M,
    showTextInput: I,
    textPosition: O,
    zoomLevel: k,
    setZoomLevel: F,
    textValue: W,
    mousePosition: ae,
    setMousePosition: me,
    isClicking: Se,
    setClicking: re,
    currentBrushOpacity: z
  } = Pr(), ie = Zn(null), ye = Zn(null);
  Zn(null);
  const N = Zn(null), [_, U] = ht(!1), [R, de] = ht(!1), [he, Q] = ht([]), [Z, fe] = ht(null), [D, Le] = ht({ x: 0, y: 0 }), w = k / 100, [C, T] = ht(Math.random()), [q, Y] = ht(null), [oe, ne] = ht(null), [ue, Me] = ht(!1), [Ce, Ee] = ht(null), Fe = (se, pe, ge, K, je) => {
    const ze = Math.abs(K), Ke = Math.abs(je), We = Math.min(ze, Ke) / 30;
    se.save(), se.translate(pe, ge), se.scale(We, We), se.beginPath(), se.moveTo(0, 10), se.bezierCurveTo(-10, 0, -20, 10, 0, 30), se.bezierCurveTo(20, 10, 10, 0, 0, 10), se.closePath(), se.stroke(), se.restore();
  }, Je = (se, pe, ge, K, je) => {
    const ze = Math.abs(K), Ke = Math.abs(je);
    se.beginPath(), K >= 0 ? (se.moveTo(pe, ge), se.lineTo(pe + ze, ge + Ke), se.lineTo(pe - ze, ge + Ke)) : (se.moveTo(pe, ge), se.lineTo(pe + ze, ge + Ke), se.lineTo(pe + ze * 2, ge)), se.closePath(), se.stroke();
  }, we = (se, pe, ge, K) => {
    se.strokeRect(pe, ge, K, K);
  };
  Bn(() => {
    e && typeof e == "object" && "current" in e && (e.current = ie.current);
  }, [e]), Bn(() => {
    const se = (ge) => {
      ge.code === "Space" && !ge.repeat && !R && g !== $e.TEXT && (ge.preventDefault(), de(!0), N.current && (N.current.style.cursor = "grab"));
    }, pe = (ge) => {
      ge.code === "Space" && (ge.preventDefault(), de(!1), N.current && g !== $e.PAN && (N.current.style.cursor = "default"));
    };
    return window.addEventListener("keydown", se), window.addEventListener("keyup", pe), () => {
      window.removeEventListener("keydown", se), window.removeEventListener("keyup", pe);
    };
  }, [R, g]), Bn(() => {
    var ze, Ke, We, Re, Ye;
    const se = ie.current, pe = ye.current, ge = se.getContext("2d"), K = pe.getContext("2d");
    if (ge.clearRect(0, 0, se.width, se.height), K.clearRect(0, 0, pe.width, pe.height), ge.save(), ge.scale(w, w), K.save(), K.scale(w, w), (ze = r == null ? void 0 : r.commands) == null || ze.forEach((te) => {
      if (te.type === $e.IMAGE && te.image) {
        const Ge = te.image, De = te.width ?? Ge.width, Ue = te.height ?? Ge.height, Qe = se.width, mt = se.height;
        let Xt = De, dt = Ue;
        if (De > Qe || Ue > mt) {
          const mn = Math.min(
            Qe / De,
            mt / Ue
          ) / w;
          Xt = De * mn, dt = Ue * mn;
        }
        const pr = (Qe - Xt) / 2, jt = (mt - dt) / 2;
        ge.drawImage(Ge, pr, jt, Xt, dt);
      }
    }), (Ke = r == null ? void 0 : r.commands) == null || Ke.forEach((te) => {
      if (te.type !== $e.IMAGE) {
        switch (K.beginPath(), K.lineCap = "round", K.lineJoin = "round", te.brushType) {
          case hn.PAINT_PEN:
            K.globalAlpha = te.opacity || 1, K.lineWidth = te.size * 2 / w;
            break;
          case hn.MEMORY_PEN:
          case hn.COLOR_PEN:
            K.globalAlpha = te.opacity || 1, K.lineWidth = te.size / w;
            break;
          case hn.PENCIL:
            K.globalAlpha = te.opacity || 1, K.lineWidth = te.size * 0.8 / w;
            break;
          case hn.PEN:
          default:
            K.globalAlpha = te.opacity || 1, K.lineWidth = te.size * 0.5 / w;
            break;
        }
        if (te.type === $e.FREE_HAND || te.type === $e.ERASER)
          K.moveTo(te.points[0].x, te.points[0].y), te.points.forEach((Ge) => K.lineTo(Ge.x, Ge.y)), K.strokeStyle = te.type === $e.ERASER ? "#FFFFFF" : te.color, K.globalCompositeOperation = te.type === $e.ERASER ? "destination-out" : "source-over", K.globalAlpha = te.type === $e.ERASER ? 1 : te.opacity || 1, K.stroke();
        else if (te.type === $e.GEOMETRY)
          switch (K.strokeStyle = te.color || "#000000", K.lineWidth = te.geometryType === ft.HEART ? te.size * 0.25 / w : te.size * 0.5 / w, K.globalCompositeOperation = "source-over", te.geometryType) {
            case ft.LINE:
              K.beginPath(), K.moveTo(te.fromX, te.fromY), K.lineTo(te.toX, te.toY), K.stroke();
              break;
            case ft.SQUARE:
              const Ge = Math.max(
                Math.abs(te.width),
                Math.abs(te.height)
              );
              we(K, te.x, te.y, Ge);
              break;
            case ft.RECTANGLE:
              K.strokeRect(
                te.x,
                te.y,
                te.width,
                te.height
              );
              break;
            case ft.CIRCLE:
              K.beginPath(), K.arc(
                te.x,
                te.y,
                te.radius,
                0,
                2 * Math.PI
              ), K.stroke();
              break;
            case ft.HEART:
              Fe(
                K,
                te.x,
                te.y,
                Math.abs(te.width),
                Math.abs(te.height)
              );
              break;
            case ft.TRINGTANGLE:
              Je(
                K,
                te.x,
                te.y,
                te.width,
                te.height
              );
              break;
          }
        else if (te.type === $e.TEXT) {
          const Ge = te.textStyle || { fontFamily: "Arial", fontSize: 16, bold: !1, italic: !1, underline: !1 }, De = [];
          Ge.italic && De.push("italic"), Ge.bold && De.push("bold"), De.push(`${Ge.fontSize}px`), De.push(Ge.fontFamily), K.save(), K.setTransform(1, 0, 0, 1, 0, 0), K.translate(te.x * w, te.y * w), K.scale(1, 1), K.font = De.join(" "), K.fillStyle = te.color, K.textBaseline = "top", K.globalCompositeOperation = "source-over";
          const Ue = te.text.split(`
`), Qe = Ge.fontSize * 1.2;
          Ue.forEach((mt, Xt) => {
            if (K.fillText(mt, 0, Qe * Xt), Ge.underline) {
              const dt = K.measureText(mt).width;
              K.beginPath(), K.moveTo(0, Qe * Xt + Ge.fontSize + 2), K.lineTo(dt, Qe * Xt + Ge.fontSize + 2), K.strokeStyle = te.color, K.lineWidth = 1, K.stroke();
            }
          }), K.restore();
        }
        K.globalAlpha = 1;
      }
    }), i) {
      switch (K.beginPath(), K.lineCap = "round", K.lineJoin = "round", i.brushType) {
        case hn.PAINT_PEN:
          K.globalAlpha = z, K.lineWidth = i.size * 2 / w;
          break;
        case hn.MEMORY_PEN:
        case hn.COLOR_PEN:
          K.globalAlpha = z, K.lineWidth = i.size / w;
          break;
        case hn.PENCIL:
          K.globalAlpha = z, K.lineWidth = i.size * 0.8 / w;
          break;
        case hn.PEN:
        default:
          K.globalAlpha = z, K.lineWidth = i.size * 0.5 / w;
          break;
      }
      if (i.type === $e.FREE_HAND || i.type === $e.ERASER)
        K.moveTo(i.points[0].x, i.points[0].y), i.points.forEach((te) => K.lineTo(te.x, te.y)), K.strokeStyle = i.type === $e.ERASER ? "#FFFFFF" : i.color, K.globalCompositeOperation = i.type === $e.ERASER ? "destination-out" : "source-over", K.globalAlpha = i.type === $e.ERASER ? 1 : z || 1, K.stroke();
      else if (i.type === $e.GEOMETRY)
        switch (K.strokeStyle = i.color || "#000000", K.lineWidth = i.geometryType === ft.HEART ? i.size * 0.25 / w : i.size * 0.5 / w, K.globalCompositeOperation = "source-over", s) {
          case ft.LINE:
            K.beginPath(), K.moveTo(i.fromX, i.fromY), K.lineTo(i.toX, i.toY), K.stroke();
            break;
          case ft.SQUARE:
            const te = Math.max(
              Math.abs(i.width),
              Math.abs(i.height)
            );
            we(
              K,
              i.x,
              i.y,
              te
            );
            break;
          case ft.RECTANGLE:
            K.strokeRect(
              i.x,
              i.y,
              i.width,
              i.height
            );
            break;
          case ft.CIRCLE:
            K.beginPath(), K.arc(
              i.x,
              i.y,
              i.radius,
              0,
              2 * Math.PI
            ), K.stroke();
            break;
          case ft.HEART:
            Fe(
              K,
              i.x,
              i.y,
              Math.abs(i.width),
              Math.abs(i.height)
            );
            break;
          case ft.TRINGTANGLE:
            Je(
              K,
              i.x,
              i.y,
              i.width,
              i.height
            );
            break;
        }
      K.globalAlpha = 1;
    }
    ge.restore(), K.restore(), ge.drawImage(pe, 0, 0, pe.width ?? 0, pe.height ?? 0);
    const je = (q == null ? void 0 : q.command) || oe;
    if (je) {
      let te = { x: 0, y: 0, width: 0, height: 0 };
      if ((We = je.points) != null && We.length) {
        const De = je.points.map((Qe) => Qe.x), Ue = je.points.map((Qe) => Qe.y);
        te = {
          x: Math.min(...De),
          y: Math.min(...Ue),
          width: Math.max(...De) - Math.min(...De),
          height: Math.max(...Ue) - Math.min(...Ue)
        };
      } else if (je.type === $e.GEOMETRY)
        switch (je.geometryType) {
          case ft.LINE:
            const De = Math.min(je.fromX, je.toX), Ue = Math.min(je.fromY, je.toY);
            te = {
              x: De,
              y: Ue,
              width: Math.abs(je.toX - je.fromX),
              height: Math.abs(je.toY - je.fromY)
            };
            break;
          case ft.CIRCLE:
            te = {
              x: je.x - je.radius,
              y: je.y - je.radius,
              width: je.radius * 2,
              height: je.radius * 2
            };
            break;
          default:
            te = {
              x: je.x || 0,
              y: je.y || 0,
              width: je.width || 0,
              height: je.height || 0
            };
        }
      else if (je.type === $e.TEXT) {
        const De = ((Re = je.textStyle) == null ? void 0 : Re.fontSize) || 16, Ue = ((Ye = je.text) == null ? void 0 : Ye.split(`
`)) || [];
        te = {
          x: je.x || 0,
          y: je.y || 0,
          width: Math.max(...Ue.map((Qe) => Qe.length * De * 0.6)),
          height: Ue.length * De * 1.2
        };
      }
      const Ge = je.size || 10;
      ge.save(), ge.strokeStyle = "#FF0000", ge.lineWidth = 1, ge.setLineDash([5, 3]), ge.strokeRect(
        te.x - Ge,
        te.y - Ge,
        te.width + Ge * 2,
        te.height + Ge * 2
      ), ge.restore();
    }
  }, [r, i, k, C, q, oe]);
  const B = (se) => {
    const pe = se.currentTarget.getBoundingClientRect(), ge = (se.clientX - pe.left) / w, K = (se.clientY - pe.top) / w;
    return { x: ge, y: K };
  }, rt = (se, pe, ge) => {
    var je, ze, Ke;
    const K = ge.size || 5;
    if ((je = ge.points) != null && je.length) {
      const We = ge.points.map((Ue) => Ue.x), Re = ge.points.map((Ue) => Ue.y), Ye = Math.min(...We) - K, te = Math.max(...We) + K, Ge = Math.min(...Re) - K, De = Math.max(...Re) + K;
      return se >= Ye && se <= te && pe >= Ge && pe <= De;
    } else if (ge.type === $e.GEOMETRY)
      switch (ge.geometryType) {
        case ft.LINE: {
          const We = ge.fromX, Re = ge.fromY, Ye = ge.toX, te = ge.toY, Ge = Math.abs((te - Re) * se - (Ye - We) * pe + Ye * Re - te * We), De = Math.sqrt(Math.pow(te - Re, 2) + Math.pow(Ye - We, 2)), Ue = Ge / De, Qe = ((se - We) * (Ye - We) + (pe - Re) * (te - Re)) / (Math.pow(Ye - We, 2) + Math.pow(te - Re, 2));
          return Ue <= K && Qe >= 0 && Qe <= 1;
        }
        case ft.CIRCLE: {
          if (ge.radius) {
            const We = Math.sqrt(
              Math.pow(se - ge.x, 2) + Math.pow(pe - ge.y, 2)
            ), Re = ge.radius + K, Ye = Math.max(0, ge.radius - K);
            return We <= Re && We >= Ye;
          }
          return !1;
        }
        case ft.HEART:
        case ft.TRINGTANGLE: {
          const We = ge.x || 0, Re = ge.y || 0, Ye = Math.abs(ge.width || 0), te = Math.abs(ge.height || 0);
          return se >= We - K && se <= We + Ye + K && pe >= Re - K && pe <= Re + te + K;
        }
        default: {
          const We = ge.x || 0, Re = ge.y || 0, Ye = ge.width || 0, te = ge.height || 0;
          return se >= We - K && se <= We + Ye + K && pe >= Re - K && pe <= Re + te + K;
        }
      }
    else if (ge.type === $e.TEXT) {
      const We = ge.x || 0, Re = ge.y || 0, Ye = ((ze = ge.textStyle) == null ? void 0 : ze.fontSize) || 16, te = ((Ke = ge.text) == null ? void 0 : Ke.split(`
`)) || [], Ge = Math.max(...te.map((Ue) => Ue.length * Ye * 0.6)), De = te.length * Ye * 1.2;
      return se >= We - K && se <= We + Ge + K && pe >= Re - K && pe <= Re + De + K;
    }
    return !1;
  }, He = (se) => {
    var K;
    const { x: pe, y: ge } = B(se);
    if (se.currentTarget.getBoundingClientRect(), g === $e.SELECT) {
      const je = (K = r == null ? void 0 : r.commands) == null ? void 0 : K.find((ze) => rt(pe, ge, ze));
      je ? (Y({ x: pe, y: ge, command: je }), Me(!0), Ee({ x: pe, y: ge })) : Y(null);
      return;
    }
    if (re(!0), f(!0), n.onDrawingStart && g !== "pan" && !R) {
      const je = {
        tool: g,
        color: y,
        size: m,
        type: g === $e.GEOMETRY ? s : void 0
      };
      n.onDrawingStart(je);
    }
    if ((R || g === "pan") && g !== $e.TEXT) {
      se.preventDefault(), U(!0), fe({ x: se.clientX - D.x, y: se.clientY - D.y }), N.current && (N.current.style.cursor = "grabbing");
      return;
    }
    if (g === $e.TEXT && (!W || !I)) {
      M({ x: pe, y: ge }), p(!0);
      return;
    }
    if (g === $e.PENCIL && l({
      type: $e.FREE_HAND,
      points: [{ x: pe, y: ge }],
      color: y,
      size: m,
      brushType: x,
      opacity: z
    }), g === $e.ERASER && l({
      type: $e.ERASER,
      points: [{ x: pe, y: ge }],
      color: "#FFFFFF",
      size: m * 2,
      // Tăng kích thước tẩy lên gấp đôi
      opacity: 1
      // Force opacity là 1
    }), g === $e.GEOMETRY) {
      const je = {
        type: $e.GEOMETRY,
        color: y,
        size: m,
        timestamp: Date.now(),
        geometryType: s
      };
      switch (s) {
        case ft.LINE:
          l({
            ...je,
            fromX: pe,
            fromY: ge,
            toX: pe,
            toY: ge
          });
          break;
        case ft.SQUARE:
        case ft.RECTANGLE:
        case ft.HEART:
        case ft.TRINGTANGLE:
          l({
            ...je,
            x: pe,
            y: ge,
            width: 0,
            height: 0
          });
          break;
        case ft.CIRCLE:
          l({
            ...je,
            x: pe,
            y: ge,
            radius: 0
          });
          break;
      }
    }
  }, ve = (se) => {
    var Ye, te;
    const pe = ie.current.getBoundingClientRect(), { x: ge, y: K } = B(se), je = se.clientX - pe.left, ze = se.clientY - pe.top;
    if (ue && q && Ce) {
      const Ge = ge - Ce.x, De = K - Ce.y, Ue = { ...q.command };
      (Ye = Ue.points) != null && Ye.length ? Ue.points = Ue.points.map((Qe) => ({
        x: Qe.x + Ge,
        y: Qe.y + De
      })) : Ue.type === $e.GEOMETRY ? (Ue.x !== void 0 && (Ue.x += Ge), Ue.y !== void 0 && (Ue.y += De), Ue.fromX !== void 0 && (Ue.fromX += Ge), Ue.fromY !== void 0 && (Ue.fromY += De), Ue.toX !== void 0 && (Ue.toX += Ge), Ue.toY !== void 0 && (Ue.toY += De)) : Ue.type === $e.TEXT && (Ue.x !== void 0 && (Ue.x += Ge), Ue.y !== void 0 && (Ue.y += De)), a((Qe) => ({
        ...Qe,
        commands: Qe.commands.map(
          (mt) => mt === q.command ? Ue : mt
        )
      })), Y({
        x: ge,
        y: K,
        command: Ue
      }), Ee({ x: ge, y: K });
      return;
    }
    if (g === $e.SELECT) {
      const Ge = (te = r == null ? void 0 : r.commands) == null ? void 0 : te.find((De) => rt(ge, K, De));
      ne(Ge || null);
    } else
      ne(null);
    if (me({
      x: je,
      y: ze
    }), _) {
      const Ge = se.clientX - ((Z == null ? void 0 : Z.x) || 0), De = se.clientY - ((Z == null ? void 0 : Z.y) || 0);
      Le({ x: Ge, y: De });
      return;
    }
    if (R || g === $e.PAN || !h || !i) return;
    const Ke = B(se), We = Ke.x, Re = Ke.y;
    if ((i.type === $e.FREE_HAND || i.type === $e.ERASER) && l((Ge) => ({
      ...Ge,
      points: [...Ge.points, { x: We, y: Re }]
    })), i.type === $e.GEOMETRY)
      switch (s) {
        case ft.LINE:
          l((Ue) => ({
            ...Ue,
            toX: We,
            toY: Re
          }));
          break;
        case ft.SQUARE:
          const Ge = Math.max(
            Math.abs(We - i.x),
            Math.abs(Re - i.y)
          );
          l((Ue) => ({
            ...Ue,
            width: Ge,
            height: Ge
          }));
          break;
        case ft.RECTANGLE:
        case ft.HEART:
        case ft.TRINGTANGLE:
          l((Ue) => ({
            ...Ue,
            width: We - Ue.x,
            height: Re - Ue.y
          }));
          break;
        case ft.CIRCLE:
          const De = Math.sqrt(
            Math.pow(We - i.x, 2) + Math.pow(Re - i.y, 2)
          );
          l((Ue) => ({
            ...Ue,
            radius: De
          }));
          break;
      }
  }, Ne = () => {
    if (re(!1), Me(!1), Ee(null), _) {
      U(!1), N.current && (N.current.style.cursor = R || g === "pan" ? "grab" : "default");
      return;
    }
    if (h && i) {
      if (a((se) => ({
        ...se,
        commands: [...se.commands, i]
      })), n.onDrawingComplete && ae) {
        const se = {
          command: i,
          position: ae
        };
        n.onDrawingComplete(se);
      }
      l(null), f(!1);
    }
  };
  return Bn(() => {
    const se = ie.current, pe = ye.current, ge = () => {
      const K = se.parentElement, je = window.devicePixelRatio || 1, ze = K.getBoundingClientRect();
      se.width = ze.width * je, se.height = ze.height * je, pe.width = ze.width * je, pe.height = ze.height * je, se.style.width = `${ze.width}px`, se.style.height = `${ze.height}px`, pe.style.width = `${ze.width}px`, pe.style.height = `${ze.height}px`, T(Math.random());
    };
    return ge(), window.addEventListener("resize", ge), () => window.removeEventListener("resize", ge);
  }, []), console.log("Commands:", r == null ? void 0 : r.commands), /* @__PURE__ */ X.jsx(
    "div",
    {
      ref: N,
      className: "relative w-full h-[600px] overflow-hidden select-none",
      style: { cursor: R || g === "pan" ? _ ? "grabbing" : "grab" : "default" },
      children: /* @__PURE__ */ X.jsxs(
        "div",
        {
          style: {
            transform: `translate(${D.x}px, ${D.y}px)`,
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
                ref: ie,
                className: "absolute top-0 left-0 w-full h-full bg-gray-100",
                onMouseDown: He,
                onMouseMove: ve,
                onMouseUp: Ne,
                onMouseLeave: Ne
              }
            ),
            /* @__PURE__ */ X.jsx(
              "canvas",
              {
                ref: ye,
                className: "absolute top-0 left-0 w-full h-full pointer-events-none"
              }
            ),
            I && O && /* @__PURE__ */ X.jsx(a5, { position: { x: O.x, y: O.y } }),
            /* @__PURE__ */ X.jsx(
              o5,
              {
                x: (ae == null ? void 0 : ae.x) || 0,
                y: (ae == null ? void 0 : ae.y) || 0,
                isClicking: Se,
                isDrawing: h,
                tool: g
              }
            )
          ]
        }
      )
    }
  );
}), h5 = (n) => {
  const { canvasRef: e } = Pr();
  return /* @__PURE__ */ X.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ X.jsx(i5, { ...n }),
    /* @__PURE__ */ X.jsx(
      s5,
      {
        ref: e,
        onDrawingStart: n.onDrawingStart,
        onDrawingComplete: n.onDrawingComplete,
        onImageUpload: n.onImageUpload,
        onImagePaste: n.onImagePaste,
        onClean: n.onClean,
        onErase: n.onErase,
        onZoomIn: n.onZoomIn,
        onZoomOut: n.onZoomOut,
        onAddTable: n.onAddTable
      }
    )
  ] });
};
export {
  Qt as B,
  h5 as D,
  l5 as T,
  At as _,
  Pr as a,
  u5 as b,
  fr as u
};
