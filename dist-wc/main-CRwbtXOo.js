var Mr = Object.defineProperty;
var jn = (e) => {
  throw TypeError(e);
};
var Dr = (e, t, n) => t in e ? Mr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => Dr(e, typeof t != "symbol" ? t + "" : t, n), Kn = (e, t, n) => t.has(e) || jn("Cannot " + n);
var I = (e, t, n) => (Kn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => t.has(e) ? jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), pt = (e, t, n, o) => (Kn(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
const Br = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Br);
const Nn = 1, An = 2, wo = 4, Fr = 8, $r = 16, Hr = 1, Wr = 4, Vr = 8, Gr = 16, Ur = 4, jr = 1, Kr = 2, bo = "[", En = "[!", Pn = "]", et = {}, j = Symbol(), Yn = !1, ce = 2, _o = 4, Kt = 8, Yt = 16, Re = 32, lt = 64, Mt = 128, te = 256, Dt = 512, z = 1024, Ie = 2048, ct = 4096, Te = 8192, zt = 16384, No = 32768, ut = 65536, Yr = 1 << 19, Ao = 1 << 20, tt = Symbol("$state"), Cn = Symbol("legacy props"), zr = Symbol("");
var Sn = Array.isArray, qr = Array.prototype.indexOf, Ln = Array.from, Bt = Object.keys, mt = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, Qr = Object.getOwnPropertyDescriptors, Xr = Object.prototype, Zr = Array.prototype, Eo = Object.getPrototypeOf;
function Ze(e) {
  return typeof e == "function";
}
const Q = () => {
};
function Po(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let wt = [], sn = [];
function Co() {
  var e = wt;
  wt = [], Po(e);
}
function Jr() {
  var e = sn;
  sn = [], Po(e);
}
function dt(e) {
  wt.length === 0 && queueMicrotask(Co), wt.push(e);
}
function zn() {
  wt.length > 0 && Co(), sn.length > 0 && Jr();
}
function So(e) {
  return e === this.v;
}
function Lo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ea(e, t) {
  return e !== t;
}
function Tn(e) {
  return !Lo(e, this.v);
}
function ta(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function na() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function oa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ra() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function aa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sa(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ia() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function la() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ca() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ua() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let da = !1;
function q(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: So,
    rv: 0,
    wv: 0
  };
  return n;
}
function Le(e) {
  return /* @__PURE__ */ fa(q(e));
}
// @__NO_SIDE_EFFECTS__
function qt(e, t = !1) {
  const n = q(e);
  return t || (n.equals = Tn), n;
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return R !== null && !se && R.f & ce && (ge === null ? ga([e]) : ge.push(e)), e;
}
function D(e, t) {
  return R !== null && !se && Yo() && R.f & (ce | Yt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ge === null || !ge.includes(e)) && ua(), ln(e, t);
}
function ln(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Fo(), To(e, Ie), k !== null && k.f & z && !(k.f & (Re | lt)) && (Pe === null ? xa([e]) : Pe.push(e))), t;
}
function To(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, r = 0; r < o; r++) {
      var a = n[r], s = a.f;
      s & Ie || (we(a, t), s & (z | te) && (s & ce ? To(
        /** @type {Derived} */
        a,
        ct
      ) : Zt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  var t = ce | Ie, n = R !== null && R.f & ce ? (
    /** @type {Derived} */
    R
  ) : null;
  return k === null || n !== null && n.f & te ? t |= te : k.f |= Ao, {
    ctx: X,
    deps: null,
    effects: null,
    equals: So,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? k
  };
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  const t = /* @__PURE__ */ G(e);
  return t.equals = Tn, t;
}
function Oo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ue(
        /** @type {Effect} */
        t[n]
      );
  }
}
function va(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ce))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function pa(e) {
  var t, n = k;
  me(va(e));
  try {
    Oo(e), t = Ho(e);
  } finally {
    me(n);
  }
  return t;
}
function ko(e) {
  var t = pa(e), n = ($e || e.f & te) && e.deps !== null ? ct : z;
  we(e, n), e.equals(t) || (e.v = t, e.wv = Fo());
}
function Qt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function ie(e) {
  T = e;
}
let O;
function ne(e) {
  if (e === null)
    throw Qt(), et;
  return O = e;
}
function He() {
  return ne(
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(O)
  );
}
function F(e) {
  if (T) {
    if (/* @__PURE__ */ be(O) !== null)
      throw Qt(), et;
    O = e;
  }
}
function qn(e = 1) {
  if (T) {
    for (var t = e, n = O; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ be(n);
    O = n;
  }
}
function cn() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Pn) {
        if (e === 0) return t;
        e -= 1;
      } else (n === bo || n === En) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(t)
    );
    t.remove(), t = o;
  }
}
function ae(e, t = null, n) {
  if (typeof e != "object" || e === null || tt in e)
    return e;
  const o = Eo(e);
  if (o !== Xr && o !== Zr)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Sn(e), s = q(0);
  a && r.set("length", q(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ia();
        var u = r.get(l);
        return u === void 0 ? (u = q(d.value), r.set(l, u)) : D(u, ae(d.value, i)), !0;
      },
      deleteProperty(c, l) {
        var d = r.get(l);
        if (d === void 0)
          l in c && r.set(l, q(j));
        else {
          if (a && typeof l == "string") {
            var u = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < u.v && D(u, f);
          }
          D(d, j), Qn(s);
        }
        return !0;
      },
      get(c, l, d) {
        var h;
        if (l === tt)
          return e;
        var u = r.get(l), f = l in c;
        if (u === void 0 && (!f || (h = Oe(c, l)) != null && h.writable) && (u = q(ae(f ? c[l] : j, i)), r.set(l, u)), u !== void 0) {
          var v = N(u);
          return v === j ? void 0 : v;
        }
        return Reflect.get(c, l, d);
      },
      getOwnPropertyDescriptor(c, l) {
        var d = Reflect.getOwnPropertyDescriptor(c, l);
        if (d && "value" in d) {
          var u = r.get(l);
          u && (d.value = N(u));
        } else if (d === void 0) {
          var f = r.get(l), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(c, l) {
        var v;
        if (l === tt)
          return !0;
        var d = r.get(l), u = d !== void 0 && d.v !== j || Reflect.has(c, l);
        if (d !== void 0 || k !== null && (!u || (v = Oe(c, l)) != null && v.writable)) {
          d === void 0 && (d = q(u ? ae(c[l], i) : j), r.set(l, d));
          var f = N(d);
          if (f === j)
            return !1;
        }
        return u;
      },
      set(c, l, d, u) {
        var y;
        var f = r.get(l), v = l in c;
        if (a && l === "length")
          for (var h = d; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? D(g, j) : h in c && (g = q(j), r.set(h + "", g));
          }
        f === void 0 ? (!v || (y = Oe(c, l)) != null && y.writable) && (f = q(void 0), D(f, ae(d, i)), r.set(l, f)) : (v = f.v !== j, D(f, ae(d, i)));
        var m = Reflect.getOwnPropertyDescriptor(c, l);
        if (m != null && m.set && m.set.call(u, d), !v) {
          if (a && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= w.v && D(w, P + 1);
          }
          Qn(s);
        }
        return !0;
      },
      ownKeys(c) {
        N(s);
        var l = Reflect.ownKeys(c).filter((f) => {
          var v = r.get(f);
          return v === void 0 || v.v !== j;
        });
        for (var [d, u] of r)
          u.v !== j && !(d in c) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        la();
      }
    }
  );
}
function Qn(e, t = 1) {
  D(e, e.v + t);
}
var Xn, Ro, Io, Mo;
function un() {
  if (Xn === void 0) {
    Xn = window, Ro = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Io = Oe(t, "firstChild").get, Mo = Oe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  return Io.call(e);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return Mo.call(e);
}
function H(e, t) {
  if (!T)
    return /* @__PURE__ */ Y(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Y(O)
  );
  if (n === null)
    n = O.appendChild(ot());
  else if (t && n.nodeType !== 3) {
    var o = ot();
    return n == null || n.before(o), ne(o), o;
  }
  return ne(n), n;
}
function bt(e, t) {
  if (!T) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Y(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ be(n) : n;
  }
  return O;
}
function J(e, t = 1, n = !1) {
  let o = T ? O : e;
  for (var r; t--; )
    r = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ be(o);
  if (!T)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (n && a !== 3) {
    var s = ot();
    return o === null ? r == null || r.after(s) : o.before(s), ne(s), s;
  }
  return ne(o), /** @type {TemplateNode} */
  o;
}
function Do(e) {
  e.textContent = "";
}
let Ot = !1, Ft = !1, $t = null, kt = !1, On = !1;
function Zn(e) {
  On = e;
}
let yt = [];
let R = null, se = !1;
function ye(e) {
  R = e;
}
let k = null;
function me(e) {
  k = e;
}
let ge = null;
function ga(e) {
  ge = e;
}
let K = null, Z = 0, Pe = null;
function xa(e) {
  Pe = e;
}
let Bo = 1, Ht = 0, $e = !1;
function Fo() {
  return ++Bo;
}
function Et(e) {
  var u;
  var t = e.f;
  if (t & Ie)
    return !0;
  if (t & ct) {
    var n = e.deps, o = (t & te) !== 0;
    if (n !== null) {
      var r, a, s = (t & Dt) !== 0, i = o && k !== null && !$e, c = n.length;
      if (s || i) {
        var l = (
          /** @type {Derived} */
          e
        ), d = l.parent;
        for (r = 0; r < c; r++)
          a = n[r], (s || !((u = a == null ? void 0 : a.reactions) != null && u.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= Dt), i && d !== null && !(d.f & te) && (l.f ^= te);
      }
      for (r = 0; r < c; r++)
        if (a = n[r], Et(
          /** @type {Derived} */
          a
        ) && ko(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || k !== null && !$e) && we(e, z);
  }
  return !1;
}
function ya(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Mt)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Mt;
      }
    n = n.parent;
  }
  throw Ot = !1, e;
}
function ma(e) {
  return (e.f & zt) === 0 && (e.parent === null || (e.parent.f & Mt) === 0);
}
function Xt(e, t, n, o) {
  if (Ot) {
    if (n === null && (Ot = !1), ma(t))
      throw e;
    return;
  }
  n !== null && (Ot = !0);
  {
    ya(e, t);
    return;
  }
}
function $o(e, t, n = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var r = 0; r < o.length; r++) {
      var a = o[r];
      a.f & ce ? $o(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? we(a, Ie) : a.f & z && we(a, ct), Zt(
        /** @type {Effect} */
        a
      ));
    }
}
function Ho(e) {
  var v;
  var t = K, n = Z, o = Pe, r = R, a = $e, s = ge, i = X, c = se, l = e.f;
  K = /** @type {null | Value[]} */
  null, Z = 0, Pe = null, $e = (l & te) !== 0 && (se || !kt || R === null), R = l & (Re | lt) ? null : e, ge = null, Jn(e.ctx), se = !1, Ht++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), u = e.deps;
    if (K !== null) {
      var f;
      if (Wt(e, Z), u !== null && Z > 0)
        for (u.length = Z + K.length, f = 0; f < K.length; f++)
          u[Z + f] = K[f];
      else
        e.deps = u = K;
      if (!$e)
        for (f = Z; f < u.length; f++)
          ((v = u[f]).reactions ?? (v.reactions = [])).push(e);
    } else u !== null && Z < u.length && (Wt(e, Z), u.length = Z);
    if (Yo() && Pe !== null && !se && u !== null && !(e.f & (ce | ct | Ie)))
      for (f = 0; f < /** @type {Source[]} */
      Pe.length; f++)
        $o(
          Pe[f],
          /** @type {Effect} */
          e
        );
    return r !== null && Ht++, d;
  } finally {
    K = t, Z = n, Pe = o, R = r, $e = a, ge = s, Jn(i), se = c;
  }
}
function wa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var o = qr.call(n, e);
    if (o !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[o] = n[r], n.pop());
    }
  }
  n === null && t.f & ce && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !K.includes(t)) && (we(t, ct), t.f & (te | Dt) || (t.f ^= Dt), Oo(
    /** @type {Derived} **/
    t
  ), Wt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Wt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var o = t; o < n.length; o++)
      wa(e, n[o]);
}
function kn(e) {
  var t = e.f;
  if (!(t & zt)) {
    we(e, z);
    var n = k, o = X, r = kt;
    k = e, kt = !0;
    try {
      t & Yt ? Ta(e) : Go(e), Vo(e);
      var a = Ho(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Bo;
      var s = e.deps, i;
      Yn && da && e.f & Ie;
    } catch (c) {
      Xt(c, e, n, o || e.ctx);
    } finally {
      kt = r, k = n;
    }
  }
}
function ba() {
  try {
    ra();
  } catch (e) {
    if ($t !== null)
      Xt(e, $t, null);
    else
      throw e;
  }
}
function Wo() {
  try {
    for (var e = 0; yt.length > 0; ) {
      e++ > 1e3 && ba();
      var t = yt, n = t.length;
      yt = [];
      for (var o = 0; o < n; o++) {
        var r = t[o];
        r.f & z || (r.f ^= z);
        var a = Na(r);
        _a(a);
      }
    }
  } finally {
    Ft = !1, $t = null;
  }
}
function _a(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var o = e[n];
      if (!(o.f & (zt | Te)))
        try {
          Et(o) && (kn(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? Uo(o) : o.fn = null));
        } catch (r) {
          Xt(r, o, null, o.ctx);
        }
    }
}
function Zt(e) {
  Ft || (Ft = !0, queueMicrotask(Wo));
  for (var t = $t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (lt | Re)) {
      if (!(n & z)) return;
      t.f ^= z;
    }
  }
  yt.push(t);
}
function Na(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var o = n.f, r = (o & Re) !== 0, a = r && (o & z) !== 0, s = n.next;
    if (!a && !(o & Te)) {
      if (o & _o)
        t.push(n);
      else if (r)
        n.f ^= z;
      else {
        var i = R;
        try {
          R = n, Et(n) && kn(n);
        } catch (d) {
          Xt(d, n, null, n.ctx);
        } finally {
          R = i;
        }
      }
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    if (s === null) {
      let d = n.parent;
      for (; d !== null; ) {
        if (e === d)
          break e;
        var l = d.next;
        if (l !== null) {
          n = l;
          continue e;
        }
        d = d.parent;
      }
    }
    n = s;
  }
  return t;
}
function A(e) {
  var t;
  for (zn(); yt.length > 0; )
    Ft = !0, Wo(), zn();
  return (
    /** @type {T} */
    t
  );
}
function N(e) {
  var t = e.f, n = (t & ce) !== 0;
  if (R !== null && !se) {
    ge !== null && ge.includes(e) && ca();
    var o = R.deps;
    e.rv < Ht && (e.rv = Ht, K === null && o !== null && o[Z] === e ? Z++ : K === null ? K = [e] : (!$e || !K.includes(e)) && K.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & te) && (r.f ^= te);
  }
  return n && (r = /** @type {Derived} */
  e, Et(r) && ko(r)), e.v;
}
function pe(e) {
  var t = se;
  try {
    return se = !0, e();
  } finally {
    se = t;
  }
}
const Aa = -7169;
function we(e, t) {
  e.f = e.f & Aa | t;
}
function Ea(e) {
  k === null && R === null && oa(), R !== null && R.f & te && k === null && na(), On && ta();
}
function Pa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ze(e, t, n, o = !0) {
  var r = (e & lt) !== 0, a = k, s = {
    ctx: X,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ie,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      kn(s), s.f |= No;
    } catch (l) {
      throw ue(s), l;
    }
  else t !== null && Zt(s);
  var i = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Ao | Mt)) === 0;
  if (!i && !r && o && (a !== null && Pa(s, a), R !== null && R.f & ce)) {
    var c = (
      /** @type {Derived} */
      R
    );
    (c.effects ?? (c.effects = [])).push(s);
  }
  return s;
}
function Ca(e) {
  const t = ze(Kt, null, !1);
  return we(t, z), t.teardown = e, t;
}
function Ke(e) {
  Ea();
  var t = k !== null && (k.f & Re) !== 0 && X !== null && !X.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      X
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: k,
      reaction: R
    });
  } else {
    var o = Jt(e);
    return o;
  }
}
function Sa(e) {
  const t = ze(lt, e, !0);
  return () => {
    ue(t);
  };
}
function La(e) {
  const t = ze(lt, e, !0);
  return (n = {}) => new Promise((o) => {
    n.outro ? rt(t, () => {
      ue(t), o(void 0);
    }) : (ue(t), o(void 0));
  });
}
function Jt(e) {
  return ze(_o, e, !1);
}
function Rn(e) {
  return ze(Kt, e, !0);
}
function We(e, t = [], n = G) {
  const o = t.map(n);
  return qe(() => e(...o.map(N)));
}
function qe(e, t = 0) {
  return ze(Kt | Yt | t, e, !0);
}
function ke(e, t = !0) {
  return ze(Kt | Re, e, !0, t);
}
function Vo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = On, o = R;
    Zn(!0), ye(null);
    try {
      t.call(null);
    } finally {
      Zn(n), ye(o);
    }
  }
}
function Go(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var o = n.next;
    ue(n, t), n = o;
  }
}
function Ta(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Re || ue(t), t = n;
  }
}
function ue(e, t = !0) {
  var n = !1;
  if ((t || e.f & Yr) && e.nodes_start !== null) {
    for (var o = e.nodes_start, r = e.nodes_end; o !== null; ) {
      var a = o === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(o)
      );
      o.remove(), o = a;
    }
    n = !0;
  }
  Go(e, t && !n), Wt(e, 0), we(e, zt);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  Vo(e);
  var i = e.parent;
  i !== null && i.first !== null && Uo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Uo(e) {
  var t = e.parent, n = e.prev, o = e.next;
  n !== null && (n.next = o), o !== null && (o.prev = n), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = n));
}
function rt(e, t) {
  var n = [];
  In(e, n, !0), jo(n, () => {
    ue(e), t && t();
  });
}
function jo(e, t) {
  var n = e.length;
  if (n > 0) {
    var o = () => --n || t();
    for (var r of e)
      r.out(o);
  } else
    t();
}
function In(e, t, n) {
  if (!(e.f & Te)) {
    if (e.f ^= Te, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var r = o.next, a = (o.f & ut) !== 0 || (o.f & Re) !== 0;
      In(o, t, a ? n : !1), o = r;
    }
  }
}
function Vt(e) {
  Ko(e, !0);
}
function Ko(e, t) {
  if (e.f & Te) {
    e.f ^= Te, e.f & z || (e.f ^= z), Et(e) && (we(e, Ie), Zt(e));
    for (var n = e.first; n !== null; ) {
      var o = n.next, r = (n.f & ut) !== 0 || (n.f & Re) !== 0;
      Ko(n, r ? t : !1), n = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Oa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let X = null;
function Jn(e) {
  X = e;
}
function de(e, t = !1, n) {
  X = {
    p: X,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function fe(e) {
  const t = X;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = k, o = R;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          me(a.effect), ye(a.reaction), Jt(a.fn);
        }
      } finally {
        me(n), ye(o);
      }
    }
    X = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yo() {
  return !0;
}
function ka(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ra = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Ia(e) {
  return Ra.includes(e);
}
const Ma = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Da(e) {
  return e = e.toLowerCase(), Ma[e] ?? e;
}
const Ba = ["touchstart", "touchmove"];
function Fa(e) {
  return Ba.includes(e);
}
function $a(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, dt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function zo(e) {
  var t = R, n = k;
  ye(null), me(null);
  try {
    return e();
  } finally {
    ye(t), me(n);
  }
}
const qo = /* @__PURE__ */ new Set(), dn = /* @__PURE__ */ new Set();
function Ha(e, t, n, o = {}) {
  function r(a) {
    if (o.capture || xt.call(t, a), !a.cancelBubble)
      return zo(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? dt(() => {
    t.addEventListener(e, r, o);
  }) : t.addEventListener(e, r, o), r;
}
function Qo(e) {
  for (var t = 0; t < e.length; t++)
    qo.add(e[t]);
  for (var n of dn)
    n(e);
}
function xt(e) {
  var P;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, r = ((P = e.composedPath) == null ? void 0 : P.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var c = r.indexOf(i);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = r.indexOf(t);
    if (l === -1)
      return;
    c <= l && (s = c);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = R, u = k;
    ye(null), me(null);
    try {
      for (var f, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + o];
          if (g !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Sn(g)) {
              var [m, ...w] = g;
              m.apply(a, [e, ...w]);
            } else
              g.call(a, e);
        } catch (y) {
          f ? v.push(y) : f = y;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let y of v)
          queueMicrotask(() => {
            throw y;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ye(d), me(u);
    }
  }
}
function Mn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  var n = (t & Kr) !== 0, o, r = !e.startsWith("<!>");
  return () => {
    if (T)
      return xe(O, null), O;
    o === void 0 && (o = Mn(r ? e : "<!>" + e), o = /** @type {Node} */
    /* @__PURE__ */ Y(o));
    var a = (
      /** @type {TemplateNode} */
      n || Ro ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    return xe(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function Pt(e, t, n = "svg") {
  var o = !e.startsWith("<!>"), r = (t & jr) !== 0, a = `<${n}>${o ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (T)
      return xe(O, null), O;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        Mn(a)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Y(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Y(c); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Y(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Y(c);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Y(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      xe(d, u);
    } else
      xe(l, l);
    return l;
  };
}
function _t() {
  if (T)
    return xe(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ot();
  return e.append(t, n), xe(t, n), e;
}
function $(e, t) {
  if (T) {
    k.nodes_end = O, He();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let fn = !0;
function Nt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Xo(e, t) {
  return Zo(e, t);
}
function Wa(e, t) {
  un(), t.intro = t.intro ?? !1;
  const n = t.target, o = T, r = O;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Y(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== bo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ be(a);
    if (!a)
      throw et;
    ie(!0), ne(
      /** @type {Comment} */
      a
    ), He();
    const s = Zo(e, { ...t, anchor: a });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== Pn)
      throw Qt(), et;
    return ie(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === et)
      return t.recover === !1 && aa(), un(), Do(n), ie(!1), Xo(e, t);
    throw s;
  } finally {
    ie(o), ne(r);
  }
}
const Qe = /* @__PURE__ */ new Map();
function Zo(e, { target: t, anchor: n, props: o = {}, events: r, context: a, intro: s = !0 }) {
  un();
  var i = /* @__PURE__ */ new Set(), c = (u) => {
    for (var f = 0; f < u.length; f++) {
      var v = u[f];
      if (!i.has(v)) {
        i.add(v);
        var h = Fa(v);
        t.addEventListener(v, xt, { passive: h });
        var g = Qe.get(v);
        g === void 0 ? (document.addEventListener(v, xt, { passive: h }), Qe.set(v, 1)) : Qe.set(v, g + 1);
      }
    }
  };
  c(Ln(qo)), dn.add(c);
  var l = void 0, d = La(() => {
    var u = n ?? t.appendChild(ot());
    return ke(() => {
      if (a) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          X
        );
        f.c = a;
      }
      r && (o.$$events = r), T && xe(
        /** @type {TemplateNode} */
        u,
        null
      ), fn = s, l = e(u, o) || {}, fn = !0, T && (k.nodes_end = O), a && fe();
    }), () => {
      var h;
      for (var f of i) {
        t.removeEventListener(f, xt);
        var v = (
          /** @type {number} */
          Qe.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, xt), Qe.delete(f)) : Qe.set(f, v);
      }
      dn.delete(c), u !== n && ((h = u.parentNode) == null || h.removeChild(u));
    };
  });
  return hn.set(l, d), l;
}
let hn = /* @__PURE__ */ new WeakMap();
function Va(e, t) {
  const n = hn.get(e);
  return n ? (hn.delete(e), n(t)) : Promise.resolve();
}
function Ye(e, t, n = !1) {
  T && He();
  var o = e, r = null, a = null, s = j, i = n ? ut : 0, c = !1;
  const l = (u, f = !0) => {
    c = !0, d(f, u);
  }, d = (u, f) => {
    if (s === (s = u)) return;
    let v = !1;
    if (T) {
      const h = (
        /** @type {Comment} */
        o.data === En
      );
      !!s === h && (o = cn(), ne(o), ie(!1), v = !0);
    }
    s ? (r ? Vt(r) : f && (r = ke(() => f(o))), a && rt(a, () => {
      a = null;
    })) : (a ? Vt(a) : f && (a = ke(() => f(o))), r && rt(r, () => {
      r = null;
    })), v && ie(!0);
  };
  qe(() => {
    c = !1, t(l), c || d(null, null);
  }, i), T && (o = O);
}
function Ga(e, t, n) {
  T && He();
  var o = e, r = j, a, s = ea;
  qe(() => {
    s(r, r = t()) && (a && rt(a), a = ke(() => n(o)));
  }), T && (o = O);
}
function at(e, t) {
  return t;
}
function Ua(e, t, n, o) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    In(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && n !== null;
  if (i) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Do(c), c.append(
      /** @type {Element} */
      n
    ), o.clear(), Fe(e, t[0].prev, t[a - 1].next);
  }
  jo(r, () => {
    for (var l = 0; l < a; l++) {
      var d = t[l];
      i || (o.delete(d.k), Fe(e, d.prev, d.next)), ue(d.e, !i);
    }
  });
}
function st(e, t, n, o, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, c = (t & wo) !== 0;
  if (c) {
    var l = (
      /** @type {Element} */
      e
    );
    s = T ? ne(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Y(l)
    ) : l.appendChild(ot());
  }
  T && He();
  var d = null, u = !1, f = /* @__PURE__ */ ha(() => {
    var v = n();
    return Sn(v) ? v : v == null ? [] : Ln(v);
  });
  qe(() => {
    var v = N(f), h = v.length;
    if (u && h === 0)
      return;
    u = h === 0;
    let g = !1;
    if (T) {
      var m = (
        /** @type {Comment} */
        s.data === En
      );
      m !== (h === 0) && (s = cn(), ne(s), ie(!1), g = !0);
    }
    if (T) {
      for (var w = null, P, y = 0; y < h; y++) {
        if (O.nodeType === 8 && /** @type {Comment} */
        O.data === Pn) {
          s = /** @type {Comment} */
          O, g = !0, ie(!1);
          break;
        }
        var x = v[y], p = o(x, y);
        P = Jo(
          O,
          i,
          w,
          null,
          x,
          p,
          y,
          r,
          t,
          n
        ), i.items.set(p, P), w = P;
      }
      h > 0 && ne(cn());
    }
    T || ja(v, i, s, r, t, o, n), a !== null && (h === 0 ? d ? Vt(d) : d = ke(() => a(s)) : d !== null && rt(d, () => {
      d = null;
    })), g && ie(!0), N(f);
  }), T && (s = O);
}
function ja(e, t, n, o, r, a, s) {
  var oe, Ne, Ae, De;
  var i = (r & Fr) !== 0, c = (r & (Nn | An)) !== 0, l = e.length, d = t.items, u = t.first, f = u, v, h = null, g, m = [], w = [], P, y, x, p;
  if (i)
    for (p = 0; p < l; p += 1)
      P = e[p], y = a(P, p), x = d.get(y), x !== void 0 && ((oe = x.a) == null || oe.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(x));
  for (p = 0; p < l; p += 1) {
    if (P = e[p], y = a(P, p), x = d.get(y), x === void 0) {
      var _ = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Jo(
        _,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        y,
        p,
        o,
        r,
        s
      ), d.set(y, h), m = [], w = [], f = h.next;
      continue;
    }
    if (c && Ka(x, P, p, r), x.e.f & Te && (Vt(x.e), i && ((Ne = x.a) == null || Ne.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(x))), x !== f) {
      if (v !== void 0 && v.has(x)) {
        if (m.length < w.length) {
          var C = w[0], S;
          h = C.prev;
          var M = m[0], U = m[m.length - 1];
          for (S = 0; S < m.length; S += 1)
            eo(m[S], C, n);
          for (S = 0; S < w.length; S += 1)
            v.delete(w[S]);
          Fe(t, M.prev, U.next), Fe(t, h, M), Fe(t, U, C), f = C, h = U, p -= 1, m = [], w = [];
        } else
          v.delete(x), eo(x, f, n), Fe(t, x.prev, x.next), Fe(t, x, h === null ? t.first : h.next), Fe(t, h, x), h = x;
        continue;
      }
      for (m = [], w = []; f !== null && f.k !== y; )
        f.e.f & Te || (v ?? (v = /* @__PURE__ */ new Set())).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      x = f;
    }
    m.push(x), h = x, f = x.next;
  }
  if (f !== null || v !== void 0) {
    for (var W = v === void 0 ? [] : Ln(v); f !== null; )
      f.e.f & Te || W.push(f), f = f.next;
    var V = W.length;
    if (V > 0) {
      var he = r & wo && l === 0 ? n : null;
      if (i) {
        for (p = 0; p < V; p += 1)
          (Ae = W[p].a) == null || Ae.measure();
        for (p = 0; p < V; p += 1)
          (De = W[p].a) == null || De.fix();
      }
      Ua(t, W, he, d);
    }
  }
  i && dt(() => {
    var L;
    if (g !== void 0)
      for (x of g)
        (L = x.a) == null || L.apply();
  }), k.first = t.first && t.first.e, k.last = h && h.e;
}
function Ka(e, t, n, o) {
  o & Nn && ln(e.v, t), o & An ? ln(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Jo(e, t, n, o, r, a, s, i, c, l) {
  var d = (c & Nn) !== 0, u = (c & $r) === 0, f = d ? u ? /* @__PURE__ */ qt(r) : q(r) : r, v = c & An ? q(s) : s, h = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: o
  };
  try {
    return h.e = ke(() => i(e, f, v, l), T), h.e.prev = n && n.e, h.e.next = o && o.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function eo(e, t, n) {
  for (var o = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== o; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(a)
    );
    r.before(a), a = s;
  }
}
function Fe(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ct(e, t, n, o, r) {
  var a = e, s = "", i;
  qe(() => {
    if (s === (s = t() ?? "")) {
      T && He();
      return;
    }
    i !== void 0 && (ue(i), i = void 0), s !== "" && (i = ke(() => {
      if (T) {
        O.data;
        for (var c = He(), l = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          l = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ be(c);
        if (c === null)
          throw Qt(), et;
        xe(O, l), a = ne(c);
        return;
      }
      var d = s + "";
      d = `<svg>${d}</svg>`;
      var u = Mn(d);
      for (u = /** @type {Element} */
      /* @__PURE__ */ Y(u), xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Y(u),
        /** @type {TemplateNode} */
        u.lastChild
      ); /* @__PURE__ */ Y(u); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ Y(u)
        );
    }));
  });
}
function er(e, t, ...n) {
  var o = e, r = Q, a;
  qe(() => {
    r !== (r = t()) && (a && (ue(a), a = null), a = ke(() => (
      /** @type {SnippetFn} */
      r(o, ...n)
    )));
  }, ut), T && (o = O);
}
function Ya(e, t, n) {
  T && He();
  var o = e, r, a;
  qe(() => {
    r !== (r = t()) && (a && (rt(a), a = null), r && (a = ke(() => n(o, r))));
  }, ut), T && (o = O);
}
function Ve(e, t) {
  dt(() => {
    var n = e.getRootNode(), o = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!o.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, o.appendChild(r);
    }
  });
}
function tr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = tr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function za() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = tr(e)) && (o && (o += " "), o += t);
  return o;
}
function qa(e) {
  return typeof e == "object" ? za(e) : e ?? "";
}
const to = [...` 	
\r\f \v\uFEFF`];
function Qa(e, t, n) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        o = o ? o + " " + r : r;
      else if (o.length)
        for (var a = r.length, s = 0; (s = o.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || to.includes(o[s - 1])) && (i === o.length || to.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function en(e, t, n, o, r, a) {
  var s = e.__className;
  if (T || s !== n) {
    var i = Qa(n, o, a);
    (!T || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = n;
  } else if (a) {
    r ?? (r = {});
    for (var c in a) {
      var l = !!a[c];
      l !== !!r[c] && e.classList.toggle(c, l);
    }
  }
  return a;
}
const vn = Symbol("class");
function Xa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ft(e, t, n, o) {
  var r = e.__attributes ?? (e.__attributes = {});
  T && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[zr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && nr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Za(e, t, n, o, r = !1, a = !1, s = !1) {
  let i = T && a;
  i && ie(!1);
  var c = t || {}, l = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = qa(n.class) : n.class = null;
  var u = nr(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const y in n) {
    let x = n[y];
    if (l && y === "value" && x == null) {
      e.value = e.__value = "", c[y] = x;
      continue;
    }
    var v = c[y];
    if (!(x === v && y !== "class")) {
      c[y] = x;
      var h = y[0] + y[1];
      if (h !== "$$") {
        if (h === "on") {
          const p = {}, _ = "$$" + y;
          let C = y.slice(2);
          var g = Ia(C);
          if (ka(C) && (C = C.slice(0, -7), p.capture = !0), !g && v) {
            if (x != null) continue;
            e.removeEventListener(C, c[_], p), c[_] = null;
          }
          if (x != null)
            if (g)
              e[`__${C}`] = x, Qo([C]);
            else {
              let S = function(M) {
                c[y].call(this, M);
              };
              c[_] = Ha(C, e, S, p);
            }
          else g && (e[`__${C}`] = void 0);
        } else if (y === "class") {
          var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          en(e, m, x, o, t == null ? void 0 : t[vn], n[vn]);
        } else if (y === "style" && x != null)
          e.style.cssText = x + "";
        else if (y === "autofocus")
          $a(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (y === "__value" || y === "value" && x != null))
          e.value = e.__value = x;
        else if (y === "selected" && l)
          Xa(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var w = y;
          r || (w = Da(w));
          var P = w === "defaultValue" || w === "defaultChecked";
          if (x == null && !a && !P)
            if (f[y] = null, w === "value" || w === "checked") {
              let p = (
                /** @type {HTMLInputElement} */
                e
              );
              const _ = t === void 0;
              if (w === "value") {
                let C = p.defaultValue;
                p.removeAttribute(w), p.defaultValue = C, p.value = p.__value = _ ? C : null;
              } else {
                let C = p.defaultChecked;
                p.removeAttribute(w), p.defaultChecked = C, p.checked = _ ? C : !1;
              }
            } else
              e.removeAttribute(y);
          else P || u.includes(w) && (a || typeof x != "string") ? e[w] = x : typeof x != "function" && ft(e, w, x);
        }
        y === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && ie(!0), c;
}
var no = /* @__PURE__ */ new Map();
function nr(e) {
  var t = no.get(e.nodeName);
  if (t) return t;
  no.set(e.nodeName, t = []);
  for (var n, o = e, r = Element.prototype; r !== o; ) {
    n = Qr(o);
    for (var a in n)
      n[a].set && t.push(a);
    o = Eo(o);
  }
  return t;
}
function le(e, t, n, o) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== n && (r[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
const Ja = () => performance.now(), ve = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Ja(),
  tasks: /* @__PURE__ */ new Set()
};
function or() {
  const e = ve.now();
  ve.tasks.forEach((t) => {
    t.c(e) || (ve.tasks.delete(t), t.f());
  }), ve.tasks.size !== 0 && ve.tick(or);
}
function rr(e) {
  let t;
  return ve.tasks.size === 0 && ve.tick(or), {
    promise: new Promise((n) => {
      ve.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      ve.tasks.delete(t);
    }
  };
}
function St(e, t) {
  zo(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function es(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function oo(e) {
  const t = {}, n = e.split(";");
  for (const o of n) {
    const [r, a] = o.split(":");
    if (!r || a === void 0) break;
    const s = es(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const ts = (e) => e;
function ns(e, t, n, o) {
  var r = (e & Ur) !== 0, a = "both", s, i = t.inert, c = t.style.overflow, l, d;
  function u() {
    var m = R, w = k;
    ye(null), me(null);
    try {
      return s ?? (s = n()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ye(m), me(w);
    }
  }
  var f = {
    is_global: r,
    in() {
      t.inert = i, St(t, "introstart"), l = pn(t, u(), d, 1, () => {
        St(t, "introend"), l == null || l.abort(), l = s = void 0, t.style.overflow = c;
      });
    },
    out(m) {
      t.inert = !0, St(t, "outrostart"), d = pn(t, u(), l, 0, () => {
        St(t, "outroend"), m == null || m();
      });
    },
    stop: () => {
      l == null || l.abort(), d == null || d.abort();
    }
  }, v = (
    /** @type {Effect} */
    k
  );
  if ((v.transitions ?? (v.transitions = [])).push(f), fn) {
    var h = r;
    if (!h) {
      for (var g = (
        /** @type {Effect | null} */
        v.parent
      ); g && g.f & ut; )
        for (; (g = g.parent) && !(g.f & Yt); )
          ;
      h = !g || (g.f & No) !== 0;
    }
    h && Jt(() => {
      pe(() => f.in());
    });
  }
}
function pn(e, t, n, o, r) {
  var a = o === 1;
  if (Ze(t)) {
    var s, i = !1;
    return dt(() => {
      if (!i) {
        var m = t({ direction: a ? "in" : "out" });
        s = pn(e, m, n, o, r);
      }
    }), {
      abort: () => {
        i = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return r(), {
      abort: Q,
      deactivate: Q,
      reset: Q,
      t: () => o
    };
  const { delay: c = 0, css: l, tick: d, easing: u = ts } = t;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), l)) {
    var v = oo(l(0, 1));
    f.push(v, v);
  }
  var h = () => 1 - o, g = e.animate(f, { duration: c });
  return g.onfinish = () => {
    var m = (n == null ? void 0 : n.t()) ?? 1 - o;
    n == null || n.abort();
    var w = o - m, P = (
      /** @type {number} */
      t.duration * Math.abs(w)
    ), y = [];
    if (P > 0) {
      var x = !1;
      if (l)
        for (var p = Math.ceil(P / 16.666666666666668), _ = 0; _ <= p; _ += 1) {
          var C = m + w * u(_ / p), S = oo(l(C, 1 - C));
          y.push(S), x || (x = S.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), h = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return m + w * u(M / P);
      }, d && rr(() => {
        if (g.playState !== "running") return !1;
        var M = h();
        return d(M, 1 - M), !0;
      });
    }
    g = e.animate(y, { duration: P, fill: "forwards" }), g.onfinish = () => {
      h = () => o, d == null || d(o, 1 - o), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = Q);
    },
    deactivate: () => {
      r = Q;
    },
    reset: () => {
      o === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function ro(e, t) {
  return e === t || (e == null ? void 0 : e[tt]) === t;
}
function ar(e = {}, t, n, o) {
  return Jt(() => {
    var r, a;
    return Rn(() => {
      r = a, a = [], pe(() => {
        e !== n(...a) && (t(e, ...a), r && ro(n(...r), e) && t(null, ...r));
      });
    }), () => {
      dt(() => {
        a && ro(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Dn(e) {
  X === null && Oa(), Ke(() => {
    const t = pe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function sr(e, t, n) {
  if (e == null)
    return t(void 0), Q;
  const o = pe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const Xe = [];
function ir(e, t = Q) {
  let n = null;
  const o = /* @__PURE__ */ new Set();
  function r(i) {
    if (Lo(e, i) && (e = i, n)) {
      const c = !Xe.length;
      for (const l of o)
        l[1](), Xe.push(l, e);
      if (c) {
        for (let l = 0; l < Xe.length; l += 2)
          Xe[l][0](Xe[l + 1]);
        Xe.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, c = Q) {
    const l = [i, c];
    return o.add(l), o.size === 1 && (n = t(r, a) || Q), i(
      /** @type {T} */
      e
    ), () => {
      o.delete(l), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function os(e) {
  let t;
  return sr(e, (n) => t = n)(), t;
}
let Lt = !1, gn = Symbol();
function rs(e, t, n) {
  const o = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ qt(void 0),
    unsubscribe: Q
  });
  if (o.store !== e && !(gn in n))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = Q;
    else {
      var r = !0;
      o.unsubscribe = sr(e, (a) => {
        r ? o.source.v = a : D(o.source, a);
      }), r = !1;
    }
  return e && gn in n ? os(e) : N(o.source);
}
function as(e, t) {
  return e.set(t), t;
}
function ss() {
  const e = {};
  function t() {
    Ca(() => {
      for (var n in e)
        e[n].unsubscribe();
      mt(e, gn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ao(e, t, n) {
  return e.set(n), t;
}
function is(e) {
  var t = Lt;
  try {
    return Lt = !1, [e(), Lt];
  } finally {
    Lt = t;
  }
}
const ls = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function cs(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ls
  );
}
const us = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      if (Ze(o) && (o = o()), typeof o == "object" && o !== null && t in o) return o[t];
    }
  },
  set(e, t, n) {
    let o = e.props.length;
    for (; o--; ) {
      let r = e.props[o];
      Ze(r) && (r = r());
      const a = Oe(r, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      if (Ze(o) && (o = o()), typeof o == "object" && o !== null && t in o) {
        const r = Oe(o, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === tt || t === Cn) return !1;
    for (let n of e.props)
      if (Ze(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Ze(n) && (n = n());
      for (const o in n)
        t.includes(o) || t.push(o);
    }
    return t;
  }
};
function lr(...e) {
  return new Proxy({ props: e }, us);
}
function E(e, t, n, o) {
  var p;
  var r = (n & Hr) !== 0, a = !0, s = (n & Vr) !== 0, i = (n & Gr) !== 0, c = !1, l;
  s ? [l, c] = is(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var d = tt in e || Cn in e, u = s && (((p = Oe(e, t)) == null ? void 0 : p.set) ?? (d && t in e && ((_) => e[t] = _))) || void 0, f = (
    /** @type {V} */
    o
  ), v = !0, h = !1, g = () => (h = !0, v && (v = !1, i ? f = pe(
    /** @type {() => V} */
    o
  ) : f = /** @type {V} */
  o), f);
  l === void 0 && o !== void 0 && (u && a && sa(), l = g(), u && u(l));
  var m;
  if (m = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? g() : (v = !0, h = !1, _);
  }, !(n & Wr))
    return m;
  if (u) {
    var w = e.$$legacy;
    return function(_, C) {
      return arguments.length > 0 ? ((!C || w || c) && u(C ? m() : _), _) : m();
    };
  }
  var P = !1, y = /* @__PURE__ */ qt(l), x = /* @__PURE__ */ G(() => {
    var _ = m(), C = N(y);
    return P ? (P = !1, C) : y.v = _;
  });
  return r || (x.equals = Tn), function(_, C) {
    if (arguments.length > 0) {
      const S = C ? N(x) : s ? ae(_) : _;
      return x.equals(S) || (P = !0, D(y, S), h && f !== void 0 && (f = S), pe(() => N(x))), _;
    }
    return N(x);
  };
}
function ds(e) {
  return new fs(e);
}
var Ce, ee;
class fs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ue(this, Ce);
    /** @type {Record<string, any>} */
    Ue(this, ee);
    var a;
    var n = /* @__PURE__ */ new Map(), o = (s, i) => {
      var c = /* @__PURE__ */ qt(i);
      return n.set(s, c), c;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return N(n.get(i) ?? o(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Cn ? !0 : (N(n.get(i) ?? o(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, c) {
          return D(n.get(i) ?? o(i, c), c), Reflect.set(s, i, c);
        }
      }
    );
    pt(this, ee, (t.hydrate ? Wa : Xo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && A(), pt(this, Ce, r.$$events);
    for (const s of Object.keys(I(this, ee)))
      s === "$set" || s === "$destroy" || s === "$on" || mt(this, s, {
        get() {
          return I(this, ee)[s];
        },
        /** @param {any} value */
        set(i) {
          I(this, ee)[s] = i;
        },
        enumerable: !0
      });
    I(this, ee).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, I(this, ee).$destroy = () => {
      Va(I(this, ee));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    I(this, ee).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    I(this, Ce)[t] = I(this, Ce)[t] || [];
    const o = (...r) => n.call(this, ...r);
    return I(this, Ce)[t].push(o), () => {
      I(this, Ce)[t] = I(this, Ce)[t].filter(
        /** @param {any} fn */
        (r) => r !== o
      );
    };
  }
  $destroy() {
    I(this, ee).$destroy();
  }
}
Ce = new WeakMap(), ee = new WeakMap();
let cr;
typeof HTMLElement == "function" && (cr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, o) {
    super();
    /** The Svelte component constructor */
    re(this, "$$ctor");
    /** Slots */
    re(this, "$$s");
    /** @type {any} The Svelte component instance */
    re(this, "$$c");
    /** Whether or not the custom element is connected */
    re(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    re(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    re(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    re(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    re(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    re(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    re(this, "$$me");
    this.$$ctor = t, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, o) {
    if (super.removeEventListener(t, n, o), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), $(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = hs(this);
      for (const r of this.$$s)
        r in o && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = Rt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ds({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Sa(() => {
        Rn(() => {
          var r;
          this.$$r = !0;
          for (const a of Bt(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Rt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const a of this.$$l[r]) {
          const s = this.$$c.$on(r, a);
          this.$$l_u.set(a, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, o) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Rt(t, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Bt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Rt(e, t, n, o) {
  var a;
  const r = (a = n[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e])
    return t;
  if (o === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function hs(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function _e(e, t, n, o, r, a) {
  let s = class extends cr {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Bt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Bt(t).forEach((i) => {
    mt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(c) {
        var u;
        c = Rt(i, c, t), this.$$d[i] = c;
        var l = this.$$c;
        if (l) {
          var d = (u = Oe(l, i)) == null ? void 0 : u.get;
          d ? l[i] = c : l.$set({ [i]: c });
        }
      }
    });
  }), o.forEach((i) => {
    mt(s.prototype, i, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function so(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function vs(e) {
  return e;
}
function ps(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function xn(e, t) {
  if (e === t || e !== e) return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const o = (
      /** @type {Array<any>} */
      t.map((r, a) => xn(
        /** @type {Array<any>} */
        e[a],
        r
      ))
    );
    return (r) => o.map((a) => a(r));
  }
  if (n === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (so(e) && so(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (c) => new Date(a + c * i);
    }
    const o = Object.keys(t), r = {};
    return o.forEach((a) => {
      r[a] = xn(e[a], t[a]);
    }), (a) => {
      const s = {};
      return o.forEach((i) => {
        s[i] = r[i](a);
      }), s;
    };
  }
  if (n === "number") {
    const o = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (r) => e + r * o;
  }
  return () => t;
}
var Se, nt, At, je;
const $n = class $n {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, n = {}) {
    Ue(this, Se, q(
      /** @type {T} */
      void 0
    ));
    Ue(this, nt, q(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Ue(this, At);
    /** @type {import('../internal/client/types').Task | null} */
    Ue(this, je, null);
    I(this, Se).v = I(this, nt).v = t, pt(this, At, n);
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(t, n) {
    const o = new $n(t(), n);
    return Rn(() => {
      o.set(t());
    }), o;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(t, n) {
    var u;
    D(I(this, nt), t);
    let {
      delay: o = 0,
      duration: r = 400,
      easing: a = vs,
      interpolate: s = xn
    } = { ...I(this, At), ...n };
    if (r === 0)
      return (u = I(this, je)) == null || u.abort(), D(I(this, Se), t), Promise.resolve();
    const i = ve.now() + o;
    let c, l = !1, d = I(this, je);
    return pt(this, je, rr((f) => {
      if (f < i)
        return !0;
      if (!l) {
        l = !0;
        const h = I(this, Se).v;
        c = s(h, t), typeof r == "function" && (r = r(h, t)), d == null || d.abort();
      }
      const v = f - i;
      return v > /** @type {number} */
      r ? (D(I(this, Se), t), !1) : (D(I(this, Se), c(a(v / /** @type {number} */
      r))), !0);
    })), I(this, je).promise;
  }
  get current() {
    return N(I(this, Se));
  }
  get target() {
    return N(I(this, nt));
  }
  set target(t) {
    this.set(t);
  }
};
Se = new WeakMap(), nt = new WeakMap(), At = new WeakMap(), je = new WeakMap();
let Je = $n;
function gs(e) {
  return Object.entries(e).reduce((t, [n, o]) => (t[o] = n, t), {});
}
const io = 16;
function Gt(e = [0, 0], t = "px") {
  const n = e[0] * (io * Math.sqrt(3)), o = e[1] * 1.5 * io;
  return [n, o].map((r) => `${Math.round(r)}${t}`);
}
var xs = /* @__PURE__ */ Pt('<g><text> </text><text class="hexlabels__text svelte-18lue6v"> </text></g>'), ys = /* @__PURE__ */ Pt('<g class="hexlabels svelte-18lue6v"></g>');
const ms = {
  hash: "svelte-18lue6v",
  code: ".hexlabels.svelte-18lue6v {pointer-events:none;}.hexlabels__text.svelte-18lue6v {font-size:12px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function ur(e, t) {
  de(t, !0), Ve(e, ms);
  let n = E(t, "hexes", 7), o = E(t, "allocations", 7), r = E(t, "certainties", 7), a = E(t, "labelsToShow", 23, () => ({})), s = E(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ G(() => s() ? n() : n().filter(({ id: l }) => a()[l]));
  var c = ys();
  return st(c, 21, () => N(i), at, (l, d) => {
    let u = () => N(d).id, f = () => N(d).coordPx, v = () => N(d).shortName;
    var h = xs(), g = H(h);
    let m;
    var w = H(g, !0);
    F(g);
    var P = J(g), y = H(P, !0);
    F(P), F(h), We(
      (x) => {
        ft(h, "transform", x), m = en(g, 0, "hexlabels__text svelte-18lue6v", null, m, {
          "hexlabels__text--allocation": o()[u()]
        }), le(g, "stroke", `var(--u-${o()[u()]})`), le(g, "stroke-width", "3"), le(g, "opacity", o()[u()] && !r()[u()] ? 1 : 0), Nt(w, v()), le(P, "fill", o()[u()] && r()[u()] ? "white" : "black"), Nt(y, v());
      },
      [
        () => `translate(${f().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), $(l, h);
  }), F(c), $(e, c), fe({
    get hexes() {
      return n();
    },
    set hexes(l) {
      n(l), A();
    },
    get allocations() {
      return o();
    },
    set allocations(l) {
      o(l), A();
    },
    get certainties() {
      return r();
    },
    set certainties(l) {
      r(l), A();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(l = {}) {
      a(l), A();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(l = !1) {
      s(l), A();
    }
  });
}
_e(
  ur,
  {
    hexes: {},
    allocations: {},
    certainties: {},
    labelsToShow: {},
    showElectorateLabels: {}
  },
  [],
  [],
  !0
);
var ws = /* @__PURE__ */ Pt('<g><g class="group-hexes svelte-4wb87v"><!></g><g class="group-outline group-outline__under svelte-4wb87v"><!></g><g class="group-outline group-outline__over svelte-4wb87v"><!></g><g class="group-hex-strokes svelte-4wb87v"><!></g><!></g>');
const bs = {
  hash: "svelte-4wb87v",
  code: `.group.svelte-4wb87v:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-4wb87v {display:none;}.group--hidden.svelte-4wb87v {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-4wb87v,
.group-outline.svelte-4wb87v {pointer-events:none;}.group.svelte-4wb87v .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-4wb87v .hex-outline {fill:none;stroke:var(--c-state-outline);stroke-width:1.5px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-4wb87v:not(.group--has-focuses) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:var(--c-empty-state-outline);}.group--map-is-full.svelte-4wb87v:not(.group--has-focuses) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:transparent;}.group-hexes.svelte-4wb87v .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-4wb87v .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-4wb87v .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-4wb87v .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-4wb87v .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-4wb87v .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-4wb87v .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-4wb87v .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-4wb87v .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-4wb87v .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-4wb87v .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-4wb87v .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-4wb87v .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-4wb87v .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-4wb87v .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-null-border);stroke-width:1.5px;}.group--map-is-empty.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex {fill:var(--a-empty);stroke:var(--a-empty-border);stroke-width:1px;}.group-hex-strokes.svelte-4wb87v .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-4wb87v .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filled-border);stroke-width:1.5px;}.group-hex-strokes.svelte-4wb87v .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-4wb87v:not(.group--map-is-empty) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:#60646c;}.group--is-outline.svelte-4wb87v .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-4wb87v .hex-outline {stroke:#cdcbcb !important;}`
};
function dr(e, t) {
  de(t, !0), Ve(e, bs);
  let n = E(t, "name", 7, ""), o = E(t, "svgHexes", 7, ""), r = E(t, "hexes", 23, () => []), a = E(t, "svgOutline", 7, ""), s = E(t, "offset", 23, () => [1 / 0, 1 / 0]), i = E(t, "hasAllocations", 7), c = E(t, "hasAllAllocations", 7), l = E(t, "allocations", 7), d = E(t, "focuses", 7), u = E(t, "certainties", 7), f = E(t, "hasAnyFocuses", 7, !1), v = E(t, "isOutlineOnly", 7, !1), h = E(t, "labelsToShow", 23, () => ({})), g = E(t, "showElectorateLabels", 7), m = E(t, "showFocusedElectorateLabels", 7), w = E(t, "isStaticLayout", 7), P = Le(`translate(${Gt(s()).join(",")})`), y = Le(!1), x = /* @__PURE__ */ G(() => s()[0] !== 1 / 0);
  Ke(() => {
    N(x) && (D(P, `translate(${Gt(s()).join(",")})`), D(y, !0));
  });
  let p = /* @__PURE__ */ G(() => f() && m() ? d() : h());
  var _ = ws();
  let C;
  var S = H(_), M = H(S);
  Ct(M, o), F(S);
  var U = J(S), W = H(U);
  Ct(W, a), F(U);
  var V = J(U), he = H(V);
  Ct(he, a), F(V);
  var oe = J(V), Ne = H(oe);
  Ct(Ne, o), F(oe);
  var Ae = J(oe);
  {
    var De = (L) => {
      ur(L, {
        get hexes() {
          return r();
        },
        get allocations() {
          return l();
        },
        get certainties() {
          return u();
        },
        get labelsToShow() {
          return N(p);
        },
        get showElectorateLabels() {
          return g();
        }
      });
    };
    Ye(Ae, (L) => {
      N(x) && L(De);
    });
  }
  return F(_), We(() => {
    C = en(_, 0, "group svelte-4wb87v", null, C, {
      "group--never-rendered": !N(y),
      "group--hidden": !N(x),
      "group--map-is-static": w(),
      "group--map-is-empty": !i(),
      "group--map-is-full": c(),
      "group--has-focuses": f(),
      "group--is-outline": v()
    }), ft(_, "data-name", n()), le(_, "transform", N(P)), le(V, "opacity", f() && !i() ? 0 : 1);
  }), $(e, _), fe({
    get name() {
      return n();
    },
    set name(L = "") {
      n(L), A();
    },
    get svgHexes() {
      return o();
    },
    set svgHexes(L = "") {
      o(L), A();
    },
    get hexes() {
      return r();
    },
    set hexes(L = []) {
      r(L), A();
    },
    get svgOutline() {
      return a();
    },
    set svgOutline(L = "") {
      a(L), A();
    },
    get offset() {
      return s();
    },
    set offset(L = [1 / 0, 1 / 0]) {
      s(L), A();
    },
    get hasAllocations() {
      return i();
    },
    set hasAllocations(L) {
      i(L), A();
    },
    get hasAllAllocations() {
      return c();
    },
    set hasAllAllocations(L) {
      c(L), A();
    },
    get allocations() {
      return l();
    },
    set allocations(L) {
      l(L), A();
    },
    get focuses() {
      return d();
    },
    set focuses(L) {
      d(L), A();
    },
    get certainties() {
      return u();
    },
    set certainties(L) {
      u(L), A();
    },
    get hasAnyFocuses() {
      return f();
    },
    set hasAnyFocuses(L = !1) {
      f(L), A();
    },
    get isOutlineOnly() {
      return v();
    },
    set isOutlineOnly(L = !1) {
      v(L), A();
    },
    get labelsToShow() {
      return h();
    },
    set labelsToShow(L = {}) {
      h(L), A();
    },
    get showElectorateLabels() {
      return g();
    },
    set showElectorateLabels(L) {
      g(L), A();
    },
    get showFocusedElectorateLabels() {
      return m();
    },
    set showFocusedElectorateLabels(L) {
      m(L), A();
    },
    get isStaticLayout() {
      return w();
    },
    set isStaticLayout(L) {
      w(L), A();
    }
  });
}
_e(
  dr,
  {
    name: {},
    svgHexes: {},
    hexes: {},
    svgOutline: {},
    offset: {},
    hasAllocations: {},
    hasAllAllocations: {},
    allocations: {},
    focuses: {},
    certainties: {},
    hasAnyFocuses: {},
    isOutlineOnly: {},
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {}
  },
  [],
  [],
  !0
);
const _s = (e) => e;
function Ns(e, { delay: t = 0, duration: n = 400, easing: o = _s } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: o,
    css: (a) => `opacity: ${a * r}`
  };
}
var As = /* @__PURE__ */ Me('<div class="state-labels__label svelte-dbcm70"> </div>'), Es = /* @__PURE__ */ Me('<div aria-hidden="true"></div>');
const Ps = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function fr(e, t) {
  de(t, !0), Ve(e, Ps);
  let n = E(t, "labels", 7), o = E(t, "overlayLabels", 7, !1);
  var r = Es();
  let a;
  return st(r, 21, n, at, (s, i) => {
    var c = _t(), l = bt(c);
    Ga(l, () => N(i).name, (d) => {
      var u = As(), f = H(u, !0);
      F(u), We(
        (v) => {
          le(u, "left", N(i).left + "%"), le(u, "top", N(i).top + "%"), le(u, "width", N(i).width + "%"), le(u, "margin-left", v), Nt(f, N(i).name);
        },
        [
          () => Math.round(0 - N(i).width / 2) + "%"
        ]
      ), ns(3, u, () => Ns, () => ({ duration: 1e3 })), $(d, u);
    }), $(s, c);
  }), F(r), We(() => a = en(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": o() })), $(e, r), fe({
    get labels() {
      return n();
    },
    set labels(s) {
      n(s), A();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(s = !1) {
      o(s), A();
    }
  });
}
_e(fr, { labels: {}, overlayLabels: {} }, [], [], !0);
var Cs = /* @__PURE__ */ Me('<span class="accessible-hide svelte-ivafae"><!></span>');
const Ss = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function hr(e, t) {
  de(t, !0), Ve(e, Ss);
  let n = E(t, "children", 7);
  var o = Cs(), r = H(o);
  return er(r, () => n() ?? Q), F(o), $(e, o), fe({
    get children() {
      return n();
    },
    set children(a) {
      n(a), A();
    }
  });
}
_e(hr, { children: {} }, [], [], !0);
function Ls(e, t, n) {
  var r;
  const o = e.target.dataset.id;
  D(t, ae(o)), (r = n()) == null || r({ code: o });
}
function Ts(e, t) {
  var o;
  const n = e.target.dataset.id;
  (o = t()) == null || o({ code: n, clientX: null, clientY: null });
}
function Os(e, t, n) {
  var o;
  N(t) === e.target.dataset.id && D(t, null), (o = n()) == null || o({ code: null });
}
var ks = /* @__PURE__ */ Me("<li><button> </button></li>"), Rs = /* @__PURE__ */ Me("<li> <ul></ul></li>"), Is = /* @__PURE__ */ Me('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const Ms = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function vr(e, t) {
  de(t, !0), Ve(e, Ms);
  let n = E(t, "groups", 7), o = E(t, "layout", 7), r = E(t, "onChange", 7), a = E(t, "onClick", 7), s = E(t, "onFocus", 7), i = Le(null);
  Ke(() => {
    var l;
    (l = r()) == null || l(N(i));
  });
  let c = /* @__PURE__ */ G(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((l) => o().positions[l]).map((l) => n().find((d) => d.name === l)).map((l) => ({
    ...l,
    hexes: [...l.hexes].sort((d, u) => d.coord[0] + d.coord[1] * 1e3 - (u.coord[0] + u.coord[1] * 1e3))
  })));
  return hr(e, {
    children: (l, d) => {
      var u = Is();
      u.__click = [Ts, a], u.__focusin = [Ls, i, s], u.__focusout = [Os, i, s], st(u, 21, () => N(c), at, (f, v) => {
        var h = Rs(), g = H(h), m = J(g);
        st(m, 21, () => N(v).hexes, at, (w, P) => {
          var y = ks(), x = H(y), p = H(x, !0);
          F(x), F(y), We(() => {
            ft(x, "data-id", N(P).id), Nt(p, N(P).name);
          }), $(w, y);
        }), F(m), F(h), We(() => Nt(g, `${N(v).name ?? ""} `)), $(f, h);
      }), F(u), $(l, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get groups() {
      return n();
    },
    set groups(l) {
      n(l), A();
    },
    get layout() {
      return o();
    },
    set layout(l) {
      o(l), A();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), A();
    },
    get onClick() {
      return a();
    },
    set onClick(l) {
      a(l), A();
    },
    get onFocus() {
      return s();
    },
    set onFocus(l) {
      s(l), A();
    }
  });
}
Qo(["click", "focusin", "focusout"]);
_e(
  vr,
  {
    groups: {},
    layout: {},
    onChange: {},
    onClick: {},
    onFocus: {}
  },
  [],
  [],
  !0
);
function pr(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ cs(t, ["$$slots", "$$events", "$$legacy", "$$host"]), o = Le(null);
  Dn(() => {
    import(
      /* webpackChunkName: "dynamic-hex-map-arrows" */
      "./HexMapArrows-CGC2RAVR.js"
    ).then((i) => {
      D(o, ae(i.default));
    });
  });
  var r = _t(), a = bt(r);
  {
    var s = (i) => {
      var c = _t(), l = bt(c);
      Ya(l, () => N(o), (d, u) => {
        u(d, lr(() => n));
      }), $(i, c);
    };
    Ye(a, (i) => {
      N(o) && i(s);
    });
  }
  $(e, r), fe();
}
_e(pr, {}, [], [], !0);
var Ds = /* @__PURE__ */ Pt('<path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Bs = /* @__PURE__ */ Pt('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Fs = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function It(e, t) {
  de(t, !0), Ve(e, Fs);
  let n = E(t, "groups", 7), o = E(t, "id", 7), r = E(t, "layout", 7), a = E(t, "type", 7, "focus"), s = /* @__PURE__ */ G(() => n().flatMap((u) => u.hexes.map((f) => ({ ...f, group: u.name }))).sort((u, f) => u.index - f.index)), i = /* @__PURE__ */ G(() => {
    if (!o())
      return;
    const u = N(s).find((y) => y.id === o()), [f, v] = r().positions[u.group], [h, g] = u.coord, m = g % 2 ? 0.5 : 0, [w, P] = Gt([f + h + m, v + g], "").map(Number);
    return [w - 3, P - 3];
  });
  var c = _t(), l = bt(c);
  {
    var d = (u) => {
      var f = Bs(), v = H(f);
      {
        var h = (g) => {
          var m = Ds();
          qn(), $(g, m);
        };
        Ye(v, (g) => {
          a() === "focus" && g(h);
        });
      }
      qn(), F(f), We((g) => ft(f, "transform", g), [
        () => `translate(${N(i).join(" ")}) scale(0.95)`
      ]), $(u, f);
    };
    Ye(l, (u) => {
      N(i) && u(d);
    });
  }
  return $(e, c), fe({
    get groups() {
      return n();
    },
    set groups(u) {
      n(u), A();
    },
    get id() {
      return o();
    },
    set id(u) {
      o(u), A();
    },
    get layout() {
      return r();
    },
    set layout(u) {
      r(u), A();
    },
    get type() {
      return a();
    },
    set type(u = "focus") {
      a(u), A();
    }
  });
}
_e(It, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var $s = typeof global == "object" && global && global.Object === Object && global, Hs = typeof self == "object" && self && self.Object === Object && self, gr = $s || Hs || Function("return this")(), Ut = gr.Symbol, xr = Object.prototype, Ws = xr.hasOwnProperty, Vs = xr.toString, gt = Ut ? Ut.toStringTag : void 0;
function Gs(e) {
  var t = Ws.call(e, gt), n = e[gt];
  try {
    e[gt] = void 0;
    var o = !0;
  } catch {
  }
  var r = Vs.call(e);
  return o && (t ? e[gt] = n : delete e[gt]), r;
}
var Us = Object.prototype, js = Us.toString;
function Ks(e) {
  return js.call(e);
}
var Ys = "[object Null]", zs = "[object Undefined]", lo = Ut ? Ut.toStringTag : void 0;
function qs(e) {
  return e == null ? e === void 0 ? zs : Ys : lo && lo in Object(e) ? Gs(e) : Ks(e);
}
function Qs(e) {
  return e != null && typeof e == "object";
}
var Xs = "[object Symbol]";
function Zs(e) {
  return typeof e == "symbol" || Qs(e) && qs(e) == Xs;
}
var Js = /\s/;
function ei(e) {
  for (var t = e.length; t-- && Js.test(e.charAt(t)); )
    ;
  return t;
}
var ti = /^\s+/;
function ni(e) {
  return e && e.slice(0, ei(e) + 1).replace(ti, "");
}
function yn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var co = NaN, oi = /^[-+]0x[0-9a-f]+$/i, ri = /^0b[01]+$/i, ai = /^0o[0-7]+$/i, si = parseInt;
function uo(e) {
  if (typeof e == "number")
    return e;
  if (Zs(e))
    return co;
  if (yn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ni(e);
  var n = ri.test(e);
  return n || ai.test(e) ? si(e.slice(2), n ? 2 : 8) : oi.test(e) ? co : +e;
}
var nn = function() {
  return gr.Date.now();
}, ii = "Expected a function", li = Math.max, ci = Math.min;
function ui(e, t, n) {
  var o, r, a, s, i, c, l = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(ii);
  t = uo(t) || 0, yn(n) && (d = !!n.leading, u = "maxWait" in n, a = u ? li(uo(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function v(_) {
    var C = o, S = r;
    return o = r = void 0, l = _, s = e.apply(S, C), s;
  }
  function h(_) {
    return l = _, i = setTimeout(w, t), d ? v(_) : s;
  }
  function g(_) {
    var C = _ - c, S = _ - l, M = t - C;
    return u ? ci(M, a - S) : M;
  }
  function m(_) {
    var C = _ - c, S = _ - l;
    return c === void 0 || C >= t || C < 0 || u && S >= a;
  }
  function w() {
    var _ = nn();
    if (m(_))
      return P(_);
    i = setTimeout(w, g(_));
  }
  function P(_) {
    return i = void 0, f && o ? v(_) : (o = r = void 0, s);
  }
  function y() {
    i !== void 0 && clearTimeout(i), l = 0, o = c = r = i = void 0;
  }
  function x() {
    return i === void 0 ? s : P(nn());
  }
  function p() {
    var _ = nn(), C = m(_);
    if (o = arguments, r = this, c = _, C) {
      if (i === void 0)
        return h(c);
      if (u)
        return clearTimeout(i), i = setTimeout(w, t), v(c);
    }
    return i === void 0 && (i = setTimeout(w, t)), s;
  }
  return p.cancel = y, p.flush = x, p;
}
function di({ isInteractive: e = !1, onClick: t, onHover: n }) {
  if (!e)
    return {};
  const o = ui(n, 10), r = ({ target: i, clientX: c, clientY: l }) => {
    var u;
    const d = (u = i == null ? void 0 : i.dataset) == null ? void 0 : u.id;
    !d || !t || t({ code: d, clientX: c, clientY: l });
  }, a = (i) => {
    const c = i.target, { clientX: l, clientY: d } = i, u = c.dataset.id;
    c.nodeName !== "polygon" || !u || o({ code: u, clientX: l, clientY: d });
  }, s = (i) => {
    o({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: r
  };
}
var fi = /* @__PURE__ */ Me('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), hi = /* @__PURE__ */ Me('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const vi = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function yr(e, t) {
  de(t, !0), Ve(e, vi);
  let n = E(t, "config", 23, () => ({})), o = E(t, "layout", 23, () => ({})), r = E(t, "allocations", 23, () => ({})), a = E(t, "focuses", 23, () => ({})), s = E(t, "certainties", 23, () => ({})), i = E(t, "labelsToShow", 23, () => ({})), c = E(t, "showStateLabels", 7, !1), l = E(t, "showElectorateLabels", 7, !1), d = E(t, "showFocusedElectorateLabels", 7, !1), u = E(t, "isStaticLayout", 7, !1), f = E(t, "onClick", 7, ({ code: b }) => {
  }), v = E(t, "onHover", 7, ({ code: b }) => {
  }), h = E(t, "onFocus", 7, ({ code: b }) => {
  }), g = E(t, "customViewbox", 7, null), m = E(t, "onViewboxChange", 7, ({ newViewbox: b }) => {
  }), w = E(t, "isInteractive", 7, !1), P = E(t, "firstPreferenceArrows", 7, "None"), y = E(t, "selectedElectorate", 7, null), x = Le(void 0), p = Le(0), _ = Le(null), C = Le(null), S = /* @__PURE__ */ G(() => Object.values(a()).some(Boolean)), M = /* @__PURE__ */ G(() => {
    const b = Object.values(r());
    return b.length !== 0 && b.some(Boolean);
  }), U = /* @__PURE__ */ G(() => {
    const b = Object.values(r());
    return b.length !== 0 && b.every(Boolean);
  });
  const W = o().viewbox, V = { easing: ps, duration: 1100 };
  let he = new Je(W[0], V), oe = new Je(W[1], V), Ne = new Je(W[2], V), Ae = new Je(W[3], V);
  Ke(() => {
    const [b, B, Ee, Be] = g() || o().viewbox;
    he.set(b), oe.set(B), Ne.set(Ee), Ae.set(Be);
  }), Ke(() => {
    m()(o().viewbox);
  });
  let De = /* @__PURE__ */ G(() => {
    var b;
    return Array.from(((b = N(x)) == null ? void 0 : b.querySelectorAll("polygon.hex")) || []).filter((B) => B instanceof SVGPolygonElement);
  });
  Ke(() => {
    const b = { ...r() }, B = a(), Ee = s();
    N(De).forEach((Be) => {
      const Ge = Be.dataset.id;
      if (!Ge)
        return;
      const kr = b[Ge] || null;
      Be.dataset.allocation = kr;
      const Rr = N(S) ? B[Ge] || !1 : !0;
      Be.dataset.focused = Rr;
      const Ir = Ee[Ge] || null;
      Be.dataset.certain = Ir;
    });
  }), Dn(() => {
    if (!N(x))
      return;
    const b = N(x).getBoundingClientRect();
    D(p, b.height / b.width);
  });
  let L = /* @__PURE__ */ G(() => di({
    isInteractive: w(),
    onClick: f(),
    onHover: (b) => {
      D(C, ae(b.code)), v()(b);
    }
  }));
  var tn = hi(), ht = H(tn);
  let Hn;
  var vt = H(ht), Wn = J(H(vt));
  st(Wn, 17, () => n().groups, at, (b, B) => {
    const Ee = /* @__PURE__ */ G(() => P() !== "None");
    dr(b, lr(() => N(B), {
      get isStaticLayout() {
        return u();
      },
      get layout() {
        return o();
      },
      get offset() {
        return o().positions[N(B).name];
      },
      get hasAllocations() {
        return N(M);
      },
      get hasAllAllocations() {
        return N(U);
      },
      get allocations() {
        return r();
      },
      get focuses() {
        return a();
      },
      get certainties() {
        return s();
      },
      get hasAnyFocuses() {
        return N(S);
      },
      get showElectorateLabels() {
        return l();
      },
      get showFocusedElectorateLabels() {
        return d();
      },
      get labelsToShow() {
        return i();
      },
      get isOutlineOnly() {
        return N(Ee);
      }
    }));
  });
  var Vn = J(Wn);
  It(Vn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return N(_);
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var Gn = J(Vn);
  It(Gn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return y();
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var Un = J(Gn);
  It(Un, {
    get groups() {
      return n().groups;
    },
    get id() {
      return N(C);
    },
    get layout() {
      return o();
    },
    type: "hover"
  });
  var Pr = J(Un);
  {
    var Cr = (b) => {
      var B = _t(), Ee = bt(B);
      st(Ee, 17, () => n().groups, at, (Be, Ge) => {
        pr(Be, {
          get hexes() {
            return N(Ge).hexes;
          },
          get offset() {
            return o().positions[N(Ge).name];
          },
          get firstPreferenceArrows() {
            return P();
          }
        });
      }), $(b, B);
    };
    Ye(Pr, (b) => {
      P() !== "None" && b(Cr);
    });
  }
  F(vt), ar(vt, (b) => D(x, b), () => N(x));
  var Sr = J(vt, 2);
  {
    var Lr = (b) => {
      var B = fi(), Ee = H(B);
      fr(Ee, {
        get labels() {
          return o().labels;
        },
        get overlayLabels() {
          return o().overlayLabels;
        }
      }), F(B), $(b, B);
    };
    Ye(Sr, (b) => {
      c() && b(Lr);
    });
  }
  F(ht);
  var Tr = J(ht, 2);
  {
    var Or = (b) => {
      vr(b, {
        get groups() {
          return n().groups;
        },
        get layout() {
          return o();
        },
        onChange: (B) => {
          D(_, ae(B));
        },
        get onClick() {
          return f();
        },
        get onFocus() {
          return h();
        }
      });
    };
    Ye(Tr, (b) => {
      w() && b(Or);
    });
  }
  return F(tn), We(
    (b, B) => {
      Hn = Za(
        ht,
        Hn,
        {
          class: "hexmap__viz",
          ...N(L),
          [vn]: {
            "hexmap__viz--vertical": N(p) <= 1
          }
        },
        "svelte-ko8kvy"
      ), le(ht, "aspect-ratio", b), ft(vt, "viewBox", B);
    },
    [
      () => N(p) ? N(p).toFixed(3) : null,
      () => [
        he.current,
        oe.current,
        Ne.current,
        Ae.current
      ].join(" ")
    ]
  ), $(e, tn), fe({
    get config() {
      return n();
    },
    set config(b = {}) {
      n(b), A();
    },
    get layout() {
      return o();
    },
    set layout(b = {}) {
      o(b), A();
    },
    get allocations() {
      return r();
    },
    set allocations(b = {}) {
      r(b), A();
    },
    get focuses() {
      return a();
    },
    set focuses(b = {}) {
      a(b), A();
    },
    get certainties() {
      return s();
    },
    set certainties(b = {}) {
      s(b), A();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(b = {}) {
      i(b), A();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(b = !1) {
      c(b), A();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(b = !1) {
      l(b), A();
    },
    get showFocusedElectorateLabels() {
      return d();
    },
    set showFocusedElectorateLabels(b = !1) {
      d(b), A();
    },
    get isStaticLayout() {
      return u();
    },
    set isStaticLayout(b = !1) {
      u(b), A();
    },
    get onClick() {
      return f();
    },
    set onClick(b = ({ code: B }) => {
    }) {
      f(b), A();
    },
    get onHover() {
      return v();
    },
    set onHover(b = ({ code: B }) => {
    }) {
      v(b), A();
    },
    get onFocus() {
      return h();
    },
    set onFocus(b = ({ code: B }) => {
    }) {
      h(b), A();
    },
    get customViewbox() {
      return g();
    },
    set customViewbox(b = null) {
      g(b), A();
    },
    get onViewboxChange() {
      return m();
    },
    set onViewboxChange(b = ({ newViewbox: B }) => {
    }) {
      m(b), A();
    },
    get isInteractive() {
      return w();
    },
    set isInteractive(b = !1) {
      w(b), A();
    },
    get firstPreferenceArrows() {
      return P();
    },
    set firstPreferenceArrows(b = "None") {
      P(b), A();
    },
    get selectedElectorate() {
      return y();
    },
    set selectedElectorate(b = null) {
      y(b), A();
    }
  });
}
_e(
  yr,
  {
    config: {},
    layout: {},
    allocations: {},
    focuses: {},
    certainties: {},
    labelsToShow: {},
    showStateLabels: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {},
    onClick: {},
    onHover: {},
    onFocus: {},
    customViewbox: {},
    onViewboxChange: {},
    isInteractive: {},
    firstPreferenceArrows: {},
    selectedElectorate: {}
  },
  [],
  [],
  !0
);
const pi = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, Bn = {
  hashCodes: pi
};
let Tt = ir({
  allocated: {},
  uncertain: {}
});
var gi = /* @__PURE__ */ Me('<div class="style-root svelte-wcr7hy"><!></div>');
const xi = {
  hash: "svelte-wcr7hy",
  code: ".style-root.svelte-wcr7hy * {box-sizing:border-box;}.style-root.svelte-wcr7hy {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-alt-ptyblue: #cedcf2;--c-alt-ptyred: #f9d2d6;--c-alt-ptylightgreen: #dceecc;--c-alt-ptyblack: #e3e3e3;--c-alt-ptygreen: #cce2dd;--c-alt-ptygold: #f5e7cc;--c-alt-ptybrown: #e6dbd9;--c-alt-ptylightblue: #cfe6ec;--c-alt-ptyorange: #f4dccc;--c-alt-ptypurple: #e9def0;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-empty: #f1f1f1;--a-empty-border: black;--c-empty-state-outline: black;--c-state-outline: #949494;--a-null: #f1f1f1;--a-null-border: #fff;--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-CA: var(--c-ptyblack);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--u-ALP: var(--c-alt-ptyred);--u-CA: var(--c-alt-ptyblack);--u-CLP: var(--c-alt-ptygold);--u-GRN: var(--c-alt-ptylightgreen);--u-IND: var(--c-alt-ptyblack);--u-KAP: var(--c-alt-ptybrown);--u-LIB: var(--c-alt-ptyblue);--u-LNP: var(--c-alt-ptyblue);--u-NAT: var(--c-alt-ptygreen);--u-ONP: var(--c-alt-ptyorange);--u-OTH: var(--c-alt-ptyblack);--u-PUP: var(--c-alt-ptygold);--c-filled-border: #fff;}"
};
function mr(e, t) {
  de(t, !0), Ve(e, xi);
  const [n, o] = ss(), r = () => rs(Tt, "$partyColours", n);
  let a = E(t, "children", 7), s = E(t, "rootEl", 15);
  Dn(() => {
    if (!s())
      return;
    const d = window.getComputedStyle(s());
    as(Tt, { allocated: {}, uncertain: {} }), Object.keys(Bn.hashCodes).forEach((f) => {
      ao(Tt, pe(r).allocated[f] = d.getPropertyValue(`--a-${f}`), pe(r)), ao(Tt, pe(r).uncertain[f] = d.getPropertyValue(`--u-${f}`), pe(r));
    });
  });
  var i = gi(), c = H(i);
  er(c, () => a() ?? Q), F(i), ar(i, (d) => s(d), () => s()), $(e, i);
  var l = fe({
    get children() {
      return a();
    },
    set children(d) {
      a(d), A();
    },
    get rootEl() {
      return s();
    },
    set rootEl(d) {
      s(d), A();
    }
  });
  return o(), l;
}
_e(mr, { children: {}, rootEl: {} }, [], [], !0);
const yi = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.0035, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, mi = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, wi = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, bi = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, _i = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Ni = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Ai = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Ei = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Pi = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Ci = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Si = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Li = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Ti = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Oi = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, ki = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Ri = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Ii = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Mi = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Di = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, wr = {
  COUNTRY: yi,
  EXPLODED: mi,
  EXPLODED_STATES_ONLY: wi,
  GRID: bi,
  ACT: _i,
  NSW: Ni,
  NT: Ai,
  QLD: Ei,
  SA: Pi,
  TAS: Ci,
  VIC: Si,
  WA: Li,
  ACT_NT: Ti,
  NSW_QLD: Oi,
  NSW_VIC: ki,
  QLD_VIC: Ri,
  QLD_WA: Ii,
  QLD_NSW_VIC: Mi,
  SA_TAS_WA: Di
}, Bi = 291, Fi = 200, $i = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Fn = {
  svgWidth: Bi,
  svgHeight: Fi,
  groups: $i
};
function br(e) {
  const t = {};
  return Object.entries(e).forEach(([n, o]) => {
    let r = o.defaultValue;
    const a = o.type;
    a === "number" && (r = r ?? 0), a === "boolean" && (r = r ?? !1), t[n] = {
      ...o,
      defaultValue: r
    };
  }), t;
}
const fo = ["number", "boolean", "enum", "string", "custom"];
async function Hi({ schema: e, data: t }) {
  const n = br(e), o = {}, r = Object.entries(n).map(
    async ([a, s]) => {
      const { type: i, key: c, values: l, defaultValue: d, codec: u } = s;
      if (!fo.includes(i))
        throw new Error(
          `Unknown type "${i}", must be one of ${fo}`
        );
      let f = t[c || a];
      if (typeof f > "u") {
        typeof d < "u" && (o[a] = d);
        return;
      }
      if (u && (f = await u.decode(f)), i === "number" && (f = Number(f)), i === "boolean" && (f = Number(f) === 1), i === "enum") {
        const v = l[f];
        typeof v > "u" ? f = d : f = v;
      }
      o[a] = f;
    }
  );
  return await Promise.all(r), o;
}
async function Wi({ schema: e, data: t }) {
  const n = br(e), o = {}, r = Object.keys(t).filter((s) => !e[s]);
  if (r.length)
    throw console.error(`Unknown keys found in data: ${r.join()}`), new Error("Unknown keys found in data");
  const a = Object.entries(n).map(
    async ([s, i]) => {
      const { type: c, key: l, values: d, defaultValue: u, codec: f } = i, v = l || s, h = t[s];
      if (typeof h > "u" || h === u) return;
      let g = h;
      if (c === "enum") {
        const m = d.indexOf(h);
        if (m === -1)
          throw console.error(`Enum value "${h}" not found in ${d}`), new Error("Invalid enum value");
        g = m;
      }
      f && (g = await f.encode(g)), c === "boolean" && (g = g ? 1 : 0), o[v] = g;
    }
  );
  return await Promise.all(a), o;
}
function Vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var on, ho;
function Gi() {
  if (ho) return on;
  ho = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), o = 0; o < n.length; o++)
      n[o] = 255;
    for (var r = 0; r < t.length; r++) {
      var a = t.charAt(r), s = a.charCodeAt(0);
      if (n[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      n[s] = r;
    }
    var i = t.length, c = t.charAt(0), l = Math.log(i) / Math.log(256), d = Math.log(256) / Math.log(i);
    function u(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var g = 0, m = 0, w = 0, P = h.length; w !== P && h[w] === 0; )
        w++, g++;
      for (var y = (P - w) * d + 1 >>> 0, x = new Uint8Array(y); w !== P; ) {
        for (var p = h[w], _ = 0, C = y - 1; (p !== 0 || _ < m) && C !== -1; C--, _++)
          p += 256 * x[C] >>> 0, x[C] = p % i >>> 0, p = p / i >>> 0;
        if (p !== 0)
          throw new Error("Non-zero carry");
        m = _, w++;
      }
      for (var S = y - m; S !== y && x[S] === 0; )
        S++;
      for (var M = c.repeat(g); S < y; ++S)
        M += t.charAt(x[S]);
      return M;
    }
    function f(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var g = 0, m = 0, w = 0; h[g] === c; )
        m++, g++;
      for (var P = (h.length - g) * l + 1 >>> 0, y = new Uint8Array(P); h[g]; ) {
        var x = n[h.charCodeAt(g)];
        if (x === 255)
          return;
        for (var p = 0, _ = P - 1; (x !== 0 || p < w) && _ !== -1; _--, p++)
          x += i * y[_] >>> 0, y[_] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        w = p, g++;
      }
      for (var C = P - w; C !== P && y[C] === 0; )
        C++;
      for (var S = new Uint8Array(m + (P - C)), M = m; C !== P; )
        S[M++] = y[C++];
      return S;
    }
    function v(h) {
      var g = f(h);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: u,
      decodeUnsafe: f,
      decode: v
    };
  }
  return on = e, on;
}
var Ui = Gi();
const ji = /* @__PURE__ */ Vi(Ui);
var Ki = "0123456789abcdefghijklmnopqrstuvwxyz";
ji(Ki);
new TextEncoder();
new TextDecoder();
const Yi = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, zi = function(e, { delineator: t }) {
  e += t;
  const n = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = Yi(o), n.push(o);
  n.sort();
  let r = "";
  for (let a = 0; a < n.length; a++)
    r += n[a].charAt(n[a].length - 1);
  return r;
}, qi = function(e, { delineator: t }) {
  const o = e.split("").slice(0);
  for (let a = 0; a < e.length - 1; a++) {
    o.sort();
    for (let s = 0; s < e.length; s++)
      o[s] = e[s] + o[s];
  }
  return o.filter(function(a) {
    return a.charAt(a.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function _r(e) {
  if (!e.match(/^[a-z]*$/))
    throw console.error("Unexpected characters in RLE encoder", e), new Error("RLE encoder only supports a-z values.");
  return e.split("").reduce(
    /**
     *
     * @param {Memo[]} memo
     * @param {string} char
     * @param {number} index
     * @returns
     */
    (t, n, o) => (o === 0 || n !== t[t.length - 1].char ? t.push({ char: n, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: n, repeated: o }) => t += o === 1 ? n : n + String(o), "");
}
function Nr(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, n, o) => n.repeat(+o)
  );
}
async function Qi(e, { delineator: t }) {
  const n = zi(e, { delineator: t });
  return _r(n);
}
async function Xi(e, { delineator: t }) {
  const n = Nr(e);
  return qi(n, { delineator: t });
}
function Zi({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Qi(t, { delineator: e }),
    decode: (t) => Xi(t, { delineator: e })
  };
}
const mn = 26, wn = 97, Ji = 48, vo = async (e, { maxBits: t }) => {
  const n = [1, ...e].map((i) => i ? 1 : 0).join(""), o = [];
  for (let i = n.length; i > 0; i -= t)
    o.push(n.slice(Math.max(0, i - t), i));
  return o.reverse(), o.map((i) => parseInt(i, 2)).map((i) => i > mn ? i % mn : String.fromCharCode(i + wn)).join("");
};
async function po(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= wn ? i - wn : i - Ji + mn
  ).map(
    (i, c) => Number(i).toString(2).padStart(c > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((c) => c === "1")
  ).slice(1);
}
function el({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => _r(await vo(t, { maxBits: e })),
    decode: async (t) => po(Nr(t), { maxBits: e })
  } : {
    encode: (t) => vo(t, { maxBits: e }),
    decode: (t) => po(t, { maxBits: e })
  };
}
var bn = function(e) {
  return Array.isArray(e) ? e.map(String) : [String(e)];
};
function tl(e, t) {
  t === void 0 && (t = {});
  var n = t.propMap, o = n === void 0 ? {} : n, r = t.arrayProps, a = r === void 0 ? [] : r, s = t.noTypeGuessing, i = s === void 0 ? [] : s, c = e.match(/[A-Z]+([0-9a-z]|$)+/g) || [];
  a = bn(a), i = bn(i);
  var l = c.map(function(d) {
    var u = d.match(/^([A-Z]+)([0-9a-z]*$)/) || [], f = u[1], v = u[2];
    if (typeof f != "string" || typeof v != "string")
      throw new Error("Error reading key/value pair");
    var h = o[f.toLowerCase()] || f.toLowerCase(), g = i.includes(h) ? v : parseFloat(v).toString() === v ? parseFloat(v) : v === "true" || v === "yes" ? !0 : v === "false" || v === "no" ? !1 : v === "" ? null : v;
    return { key: h, value: g };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(d, u, f, v) {
      var h = u.key, g = u.value;
      if (typeof d[h] < "u")
        return d;
      var m = v.filter(function(y) {
        var x = y.key;
        return x === h;
      }).map(function(y) {
        return y.value;
      }), w = a.includes(h) || m.length > 1;
      if (w) {
        var P = new Set(m.map(function(y) {
          return typeof y;
        }));
        if (P.size > 1)
          throw new Error("Inconsistent types in array property '".concat(h, "'"));
        d[h] = m;
      } else
        d[h] = g;
      return d;
    },
    {}
  );
  return a.forEach(function(d) {
    typeof l[d] > "u" && (l[d] = []);
  }), l;
}
var jt = function() {
  return jt = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, jt.apply(this, arguments);
};
var go = function(e) {
  var t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (t !== e)
    throw new Error('Illegal characters found: "'.concat(e, '"'));
  return e;
};
function nl(e, t) {
  t === void 0 && (t = {});
  var n = Object.entries(t.propMap || {}).reduce(function(o, r) {
    var a, s = r[0], i = r[1];
    return jt(jt({}, o), (a = {}, a[i] = String(s), a));
  }, {});
  return Object.entries(e).flatMap(function(o) {
    var r = o[0], a = o[1];
    if (typeof a > "u" || a === null)
      return [];
    var s = n[r] || r, i = bn(a);
    return i.map(function(c) {
      return [go(s).toUpperCase(), go(c)].join("");
    });
  }).join("");
}
function ol(e) {
  async function t() {
    const o = window.location.hash.slice(1), r = tl(o);
    return await Hi({ schema: e, data: r });
  }
  const n = ir(
    /** @type {T} */
    null
  );
  return t().then((o) => {
    n.set(o), n.subscribe(async (r) => {
      if (!r)
        return;
      const a = await Wi({ schema: e, data: r }), s = "#" + nl(a);
      window.location.hash !== s && (window.location.hash = s);
    });
  }), n;
}
const rl = { Australia: [[112, -44], [156, -10]], "Brisbane & surrounds": [[152.67620200034025, -27.85975844732532], [153.50771856749492, -27.122141459597835]], "Sydney & surrounds": [[150.53643051298894, -34.250330919454555], [151.6159583706169, -33.35329642067877]], "Melbourne & surrounds": [[143.7112326761349, -38.73737902155104], [146.2181523182391, -36.755303142447325]], "Inner-city Sydney": [[150.97804393208258, -33.9820617904466], [151.29883502771884, -33.71564208020996]], "Inner-city Melbourne": [[144.77343032299214, -38.00505753293409], [145.25008324655565, -37.62851493730817]], Perth: [[115.29761105882773, -32.58735478749758], [116.46158922227181, -31.601283791419284]], Adelaide: [[138.1361307284978, -35.308045628940405], [139.08340859017528, -34.53133194772551]], Tasmania: [[143.15169589003773, -43.824678713957354], [149.19913869957333, -39.30289848300832]], "Focus Driven": [[112, -44], [156, -10]] }, al = {
  areas: rl
}, it = Fn.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), sl = Object.values(it).reduce((e, t) => (e[t.id] = t, e), {});
Fn.groups;
const _n = "q", il = "x", xo = Zi({ delineator: _n }), Ar = gs(Bn.hashCodes);
if (Ar[_n] || il === _n)
  throw new Error("Can not use delineator in allocation map");
function Er(e) {
  return it.map(({ id: t }) => e[t]);
}
function ll(e) {
  return it.reduce((t, { id: n }, o) => (t[n] = e[o] ?? null, t), {});
}
const yo = el({ maxBits: 4 }), rn = {
  encode: async function(e) {
    const t = Er(e);
    return yo.encode(t);
  },
  decode: async function(e) {
    const t = await yo.decode(e);
    return ll(t);
  }
}, an = Object.freeze(
  it.reduce((e, t) => (e[t.id] = null, e), {})
), cl = {
  version: {
    type: "number",
    key: "ver"
  },
  vizType: {
    type: "enum",
    key: "v",
    defaultValue: "hex",
    values: ["hex", "geo"]
  },
  layout: {
    type: "enum",
    key: "l",
    defaultValue: "COUNTRY",
    values: Object.keys(wr)
  },
  geoArea: {
    type: "enum",
    key: "g",
    defaultValue: "Australia",
    values: Object.keys(al.areas)
  },
  allocations: {
    type: "custom",
    codec: {
      encode: async (e) => {
        const t = Object.entries(e).reduce((r, [a, s]) => (r[a] = Bn.hashCodes[s] || "x", r), {}), n = Er(t).map((r) => r ?? "x").join("");
        return await xo.encode(n);
      },
      decode: async (e) => (await xo.decode(e).catch((o) => (console.error("decoding string failed", e, o), ""))).split("").reduce((o, r, a) => {
        var i;
        const s = (i = it[a]) == null ? void 0 : i.id;
        if (s)
          return o[s] = Ar[String(r)] || null, o;
      }, {})
    },
    key: "a",
    defaultValue: an
  },
  focuses: {
    type: "custom",
    codec: rn,
    key: "f",
    defaultValue: an
  },
  certainties: {
    type: "custom",
    codec: rn,
    key: "c",
    defaultValue: Object.freeze(
      it.reduce((e, t) => (e[t.id] = !0, e), {})
    )
  },
  labelsToShow: {
    type: "custom",
    codec: rn,
    key: "li",
    defaultValue: an
  },
  showLabelsWhen: {
    type: "enum",
    key: "lb",
    defaultValue: "none",
    values: ["none", "states", "electorates"]
  },
  showStateLabels: {
    type: "boolean",
    key: "ls",
    defaultValue: !1
  },
  showElectorateLabels: {
    type: "boolean",
    key: "le",
    defaultValue: !1
  },
  showFocusedElectorateLabels: {
    type: "boolean",
    key: "lf",
    defaultValue: !1
  },
  showTotals: {
    type: "boolean",
    key: "t",
    defaultValue: !1
  },
  firstPreferenceArrows: {
    type: "enum",
    key: "fpa",
    defaultValue: "None",
    values: ["None", "ALP", "LNP", "GRN", "Independent", "Informal"]
  },
  combineCoalition: {
    type: "boolean",
    key: "cc",
    defaultValue: !1
  }
}, mo = ol(cl);
mo.subscribe((e) => {
  e && e.version !== 1 && mo.set({ ...e, version: 1 });
});
function ul(e, t) {
  de(t, !0);
  let n = E(t, "allocations", 23, () => ({})), o = E(t, "certainties", 23, () => ({})), r = E(t, "focuses", 23, () => ({})), a = E(t, "showStateLabels", 7, !1), s = E(t, "showElectorateLabels", 7, !1), i = E(t, "layout", 7, "COUNTRY"), c = E(t, "selectedElectorate", 7, null), l = E(t, "customViewbox", 7, null), d = E(t, "onClick", 7, () => {
  }), u = E(t, "onHover", 7, () => {
  }), f = E(t, "onFocus", 7, () => {
  }), v = E(t, "onApi", 7, () => {
  }), h = E(t, "onViewboxChange", 7, () => {
  }), g = E(t, "isStaticLayout", 7, !0), m = E(t, "isInteractive", 7, !0), w = Le(void 0), P = /* @__PURE__ */ G(() => wr[i()]);
  function y(p, _, C, S = !0) {
    const M = S ? C.getScreenCTM() : C.getCTM(), U = C.createSVGPoint();
    U.x = p, U.y = _;
    const W = U.matrixTransform(M);
    return [W.x, W.y].map(Number);
  }
  function x(p) {
    const _ = sl[p], C = N(P).positions[_ == null ? void 0 : _.group];
    if (!(N(w) instanceof HTMLDivElement))
      return;
    const S = N(w).querySelector("svg");
    if (!_ || !C || !S)
      throw new Error(`Could not find hexagon with id ${p}`);
    const M = [-0.5, -1], [U, W] = Gt(
      [
        C[0] + M[0],
        C[1] + M[1]
      ],
      ""
    ).map(Number), V = Number(_.coordPx[0] + U), he = Number(_.coordPx[1] + W), [oe, Ne] = y(V, he, S), [Ae, De] = y(V, he, S, !1);
    return {
      code: p,
      screenCoord: [oe, Ne],
      containerCoord: [Ae, De],
      svgCoord: [V, he]
    };
  }
  return Ke(() => {
    v() && v()({ getHex: x });
  }), mr(e, {
    get rootEl() {
      return N(w);
    },
    set rootEl(p) {
      D(w, ae(p));
    },
    children: (p, _) => {
      yr(p, {
        config: Fn,
        get layout() {
          return N(P);
        },
        get allocations() {
          return n();
        },
        get certainties() {
          return o();
        },
        get focuses() {
          return r();
        },
        get showStateLabels() {
          return a();
        },
        get showElectorateLabels() {
          return s();
        },
        get onClick() {
          return d();
        },
        get onHover() {
          return u();
        },
        get onFocus() {
          return f();
        },
        get selectedElectorate() {
          return c();
        },
        get customViewbox() {
          return l();
        },
        get isStaticLayout() {
          return g();
        },
        get isInteractive() {
          return m();
        },
        get onViewboxChange() {
          return h();
        }
      });
    },
    $$slots: { default: !0 }
  }), fe({
    get allocations() {
      return n();
    },
    set allocations(p = {}) {
      n(p), A();
    },
    get certainties() {
      return o();
    },
    set certainties(p = {}) {
      o(p), A();
    },
    get focuses() {
      return r();
    },
    set focuses(p = {}) {
      r(p), A();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(p = !1) {
      a(p), A();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(p = !1) {
      s(p), A();
    },
    get layout() {
      return i();
    },
    set layout(p = "COUNTRY") {
      i(p), A();
    },
    get selectedElectorate() {
      return c();
    },
    set selectedElectorate(p = null) {
      c(p), A();
    },
    get customViewbox() {
      return l();
    },
    set customViewbox(p = null) {
      l(p), A();
    },
    get onClick() {
      return d();
    },
    set onClick(p = () => {
    }) {
      d(p), A();
    },
    get onHover() {
      return u();
    },
    set onHover(p = () => {
    }) {
      u(p), A();
    },
    get onFocus() {
      return f();
    },
    set onFocus(p = () => {
    }) {
      f(p), A();
    },
    get onApi() {
      return v();
    },
    set onApi(p = () => {
    }) {
      v(p), A();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(p = () => {
    }) {
      h(p), A();
    },
    get isStaticLayout() {
      return g();
    },
    set isStaticLayout(p = !0) {
      g(p), A();
    },
    get isInteractive() {
      return m();
    },
    set isInteractive(p = !0) {
      m(p), A();
    }
  });
}
customElements.define("abcnews-hexmap", _e(
  ul,
  {
    allocations: {},
    certainties: {},
    focuses: {},
    showStateLabels: {},
    showElectorateLabels: {},
    layout: {},
    selectedElectorate: {},
    customViewbox: {},
    onClick: {},
    onHover: {},
    onFocus: {},
    onApi: {},
    onViewboxChange: {},
    isStaticLayout: {},
    isInteractive: {}
  },
  [],
  [],
  !0
));
export {
  le as A,
  at as B,
  ul as H,
  Ve as a,
  E as b,
  st as c,
  ft as d,
  it as e,
  $ as f,
  fe as g,
  Gt as h,
  A as i,
  ss as j,
  _e as k,
  _t as l,
  bt as m,
  Pt as n,
  Dn as o,
  de as p,
  Ye as q,
  F as r,
  as as s,
  We as t,
  Ke as u,
  rs as v,
  ir as w,
  N as x,
  H as y,
  J as z
};
