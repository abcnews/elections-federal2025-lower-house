var ga = Object.defineProperty;
var wo = (e) => {
  throw TypeError(e);
};
var pa = (e, t, r) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => pa(e, typeof t != "symbol" ? t + "" : t, r), Sr = (e, t, r) => t.has(e) || wo("Cannot " + r);
var D = (e, t, r) => (Sr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Le = (e, t, r) => t.has(e) ? wo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), at = (e, t, r, o) => (Sr(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r), bo = (e, t, r) => (Sr(e, t, "access private method"), r);
const xa = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xa);
const zr = 1, Yr = 2, Uo = 4, ma = 8, wa = 16, ba = 1, ya = 4, _a = 8, Na = 16, Aa = 1, Ca = 2, Pa = 4, jo = 1, Sa = 2, zo = "[", Kr = "[!", qr = "]", yt = {}, ue = Symbol(), yo = !1, Re = 2, Yo = 4, gr = 8, pr = 16, Xe = 32, Ct = 64, er = 128, Ee = 256, tr = 512, he = 1024, Ze = 2048, Pt = 4096, Ye = 8192, xr = 16384, Ko = 32768, Ht = 65536, Ea = 1 << 19, qo = 1 << 20, Rt = Symbol("$state"), Qo = Symbol("legacy props"), La = Symbol("");
var Qr = Array.isArray, Ta = Array.prototype.indexOf, Xr = Array.from, rr = Object.keys, It = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Oa = Object.getOwnPropertyDescriptors, Ra = Object.prototype, ka = Array.prototype, Xo = Object.getPrototypeOf;
function Ia(e) {
  return typeof e == "function";
}
const xe = () => {
};
function Zo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
let Ft = [], Tr = [];
function Jo() {
  var e = Ft;
  Ft = [], Zo(e);
}
function Ma() {
  var e = Tr;
  Tr = [], Zo(e);
}
function St(e) {
  Ft.length === 0 && queueMicrotask(Jo), Ft.push(e);
}
function _o() {
  Ft.length > 0 && Jo(), Tr.length > 0 && Ma();
}
function en(e) {
  return e === this.v;
}
function tn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ba(e, t) {
  return e !== t;
}
function Zr(e) {
  return !tn(e, this.v);
}
function Da(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ha() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $a() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ga(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function za() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ka = !1;
function pe(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: en,
    rv: 0,
    wv: 0
  };
  return r;
}
function we(e) {
  return /* @__PURE__ */ qa(pe(e));
}
// @__NO_SIDE_EFFECTS__
function mr(e, t = !1) {
  const r = pe(e);
  return t || (r.equals = Zr), r;
}
// @__NO_SIDE_EFFECTS__
function qa(e) {
  return Y !== null && !Te && Y.f & Re && (De === null ? Za([e]) : De.push(e)), e;
}
function j(e, t) {
  return Y !== null && !Te && Cn() && Y.f & (Re | pr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (De === null || !De.includes(e)) && Ya(), Or(e, t);
}
function Or(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = hn(), rn(e, Ze), z !== null && z.f & he && !(z.f & (Xe | Ct)) && (Ge === null ? Ja([e]) : Ge.push(e))), t;
}
function rn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, n = 0; n < o; n++) {
      var a = r[n], s = a.f;
      s & Ze || (We(a, t), s & (he | Ee) && (s & Re ? rn(
        /** @type {Derived} */
        a,
        Pt
      ) : yr(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  var t = Re | Ze, r = Y !== null && Y.f & Re ? (
    /** @type {Derived} */
    Y
  ) : null;
  return z === null || r !== null && r.f & Ee ? t |= Ee : z.f |= qo, {
    ctx: Z,
    deps: null,
    effects: null,
    equals: en,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? z
  };
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  const t = /* @__PURE__ */ M(e);
  return t.equals = Zr, t;
}
function nn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ke(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Qa(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Re))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Xa(e) {
  var t, r = z;
  Ve(Qa(e));
  try {
    nn(e), t = gn(e);
  } finally {
    Ve(r);
  }
  return t;
}
function an(e) {
  var t = Xa(e), r = (rt || e.f & Ee) && e.deps !== null ? Pt : he;
  We(e, r), e.equals(t) || (e.v = t, e.wv = hn());
}
function wr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let W = !1;
function Oe(e) {
  W = e;
}
let $;
function be(e) {
  if (e === null)
    throw wr(), yt;
  return $ = e;
}
function lt() {
  return be(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $e($)
  );
}
function I(e) {
  if (W) {
    if (/* @__PURE__ */ $e($) !== null)
      throw wr(), yt;
    $ = e;
  }
}
function or(e = 1) {
  if (W) {
    for (var t = e, r = $; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ $e(r);
    $ = r;
  }
}
function Rr() {
  for (var e = 0, t = $; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === qr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === zo || r === Kr) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(t)
    );
    t.remove(), t = o;
  }
}
function Pe(e, t = null, r) {
  if (typeof e != "object" || e === null || Rt in e)
    return e;
  const o = Xo(e);
  if (o !== Ra && o !== ka)
    return e;
  var n = /* @__PURE__ */ new Map(), a = Qr(e), s = pe(0);
  a && n.set("length", pe(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Ua();
        var f = n.get(c);
        return f === void 0 ? (f = pe(d.value), n.set(c, f)) : j(f, Pe(d.value, i)), !0;
      },
      deleteProperty(l, c) {
        var d = n.get(c);
        if (d === void 0)
          c in l && n.set(c, pe(ue));
        else {
          if (a && typeof c == "string") {
            var f = (
              /** @type {Source<number>} */
              n.get("length")
            ), u = Number(c);
            Number.isInteger(u) && u < f.v && j(f, u);
          }
          j(d, ue), No(s);
        }
        return !0;
      },
      get(l, c, d) {
        var h;
        if (c === Rt)
          return e;
        var f = n.get(c), u = c in l;
        if (f === void 0 && (!u || (h = it(l, c)) != null && h.writable) && (f = pe(Pe(u ? l[c] : ue, i)), n.set(c, f)), f !== void 0) {
          var v = g(f);
          return v === ue ? void 0 : v;
        }
        return Reflect.get(l, c, d);
      },
      getOwnPropertyDescriptor(l, c) {
        var d = Reflect.getOwnPropertyDescriptor(l, c);
        if (d && "value" in d) {
          var f = n.get(c);
          f && (d.value = g(f));
        } else if (d === void 0) {
          var u = n.get(c), v = u == null ? void 0 : u.v;
          if (u !== void 0 && v !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(l, c) {
        var v;
        if (c === Rt)
          return !0;
        var d = n.get(c), f = d !== void 0 && d.v !== ue || Reflect.has(l, c);
        if (d !== void 0 || z !== null && (!f || (v = it(l, c)) != null && v.writable)) {
          d === void 0 && (d = pe(f ? Pe(l[c], i) : ue), n.set(c, d));
          var u = g(d);
          if (u === ue)
            return !1;
        }
        return f;
      },
      set(l, c, d, f) {
        var x;
        var u = n.get(c), v = c in l;
        if (a && c === "length")
          for (var h = d; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var A = n.get(h + "");
            A !== void 0 ? j(A, ue) : h in l && (A = pe(ue), n.set(h + "", A));
          }
        u === void 0 ? (!v || (x = it(l, c)) != null && x.writable) && (u = pe(void 0), j(u, Pe(d, i)), n.set(c, u)) : (v = u.v !== ue, j(u, Pe(d, i)));
        var C = Reflect.getOwnPropertyDescriptor(l, c);
        if (C != null && C.set && C.set.call(f, d), !v) {
          if (a && typeof c == "string") {
            var p = (
              /** @type {Source<number>} */
              n.get("length")
            ), m = Number(c);
            Number.isInteger(m) && m >= p.v && j(p, m + 1);
          }
          No(s);
        }
        return !0;
      },
      ownKeys(l) {
        g(s);
        var c = Reflect.ownKeys(l).filter((u) => {
          var v = n.get(u);
          return v === void 0 || v.v !== ue;
        });
        for (var [d, f] of n)
          f.v !== ue && !(d in l) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        ja();
      }
    }
  );
}
function No(e, t = 1) {
  j(e, e.v + t);
}
var Ao, sn, ln, cn, un;
function kr() {
  if (Ao === void 0) {
    Ao = window, sn = document, ln = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    cn = it(t, "firstChild").get, un = it(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return cn.call(e);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return un.call(e);
}
function H(e, t) {
  if (!W)
    return /* @__PURE__ */ oe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ oe($)
  );
  if (r === null)
    r = $.appendChild(ot());
  else if (t && r.nodeType !== 3) {
    var o = ot();
    return r == null || r.before(o), be(o), o;
  }
  return be(r), r;
}
function _e(e, t) {
  if (!W) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ oe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $e(r) : r;
  }
  return $;
}
function Q(e, t = 1, r = !1) {
  let o = W ? $ : e;
  for (var n; t--; )
    n = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ $e(o);
  if (!W)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var s = ot();
    return o === null ? n == null || n.after(s) : o.before(s), be(s), s;
  }
  return be(o), /** @type {TemplateNode} */
  o;
}
function dn(e) {
  e.textContent = "";
}
let qt = !1, nr = !1, ar = null, Qt = !1, Jr = !1;
function Co(e) {
  Jr = e;
}
let kt = [];
let Y = null, Te = !1;
function He(e) {
  Y = e;
}
let z = null;
function Ve(e) {
  z = e;
}
let De = null;
function Za(e) {
  De = e;
}
let de = null, me = 0, Ge = null;
function Ja(e) {
  Ge = e;
}
let fn = 1, sr = 0, rt = !1;
function hn() {
  return ++fn;
}
function Vt(e) {
  var f;
  var t = e.f;
  if (t & Ze)
    return !0;
  if (t & Pt) {
    var r = e.deps, o = (t & Ee) !== 0;
    if (r !== null) {
      var n, a, s = (t & tr) !== 0, i = o && z !== null && !rt, l = r.length;
      if (s || i) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (n = 0; n < l; n++)
          a = r[n], (s || !((f = a == null ? void 0 : a.reactions) != null && f.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= tr), i && d !== null && !(d.f & Ee) && (c.f ^= Ee);
      }
      for (n = 0; n < l; n++)
        if (a = r[n], Vt(
          /** @type {Derived} */
          a
        ) && an(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || z !== null && !rt) && We(e, he);
  }
  return !1;
}
function es(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & er)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= er;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function ts(e) {
  return (e.f & xr) === 0 && (e.parent === null || (e.parent.f & er) === 0);
}
function br(e, t, r, o) {
  if (qt) {
    if (r === null && (qt = !1), ts(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    es(e, t);
    return;
  }
}
function vn(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      a.f & Re ? vn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? We(a, Ze) : a.f & he && We(a, Pt), yr(
        /** @type {Effect} */
        a
      ));
    }
}
function gn(e) {
  var v;
  var t = de, r = me, o = Ge, n = Y, a = rt, s = De, i = Z, l = Te, c = e.f;
  de = /** @type {null | Value[]} */
  null, me = 0, Ge = null, rt = (c & Ee) !== 0 && (Te || !Qt || Y === null), Y = c & (Xe | Ct) ? null : e, De = null, Po(e.ctx), Te = !1, sr++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (de !== null) {
      var u;
      if (ir(e, me), f !== null && me > 0)
        for (f.length = me + de.length, u = 0; u < de.length; u++)
          f[me + u] = de[u];
      else
        e.deps = f = de;
      if (!rt)
        for (u = me; u < f.length; u++)
          ((v = f[u]).reactions ?? (v.reactions = [])).push(e);
    } else f !== null && me < f.length && (ir(e, me), f.length = me);
    if (Cn() && Ge !== null && !Te && f !== null && !(e.f & (Re | Pt | Ze)))
      for (u = 0; u < /** @type {Source[]} */
      Ge.length; u++)
        vn(
          Ge[u],
          /** @type {Effect} */
          e
        );
    return n !== null && sr++, d;
  } finally {
    de = t, me = r, Ge = o, Y = n, rt = a, De = s, Po(i), Te = l;
  }
}
function rs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = Ta.call(r, e);
    if (o !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[o] = r[n], r.pop());
    }
  }
  r === null && t.f & Re && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (de === null || !de.includes(t)) && (We(t, Pt), t.f & (Ee | tr) || (t.f ^= tr), nn(
    /** @type {Derived} **/
    t
  ), ir(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      rs(e, r[o]);
}
function eo(e) {
  var t = e.f;
  if (!(t & xr)) {
    We(e, he);
    var r = z, o = Z, n = Qt;
    z = e, Qt = !0;
    try {
      t & pr ? ds(e) : wn(e), mn(e);
      var a = gn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = fn;
      var s = e.deps, i;
      yo && Ka && e.f & Ze;
    } catch (l) {
      br(l, e, r, o || e.ctx);
    } finally {
      Qt = n, z = r;
    }
  }
}
function os() {
  try {
    Wa();
  } catch (e) {
    if (ar !== null)
      br(e, ar, null);
    else
      throw e;
  }
}
function pn() {
  try {
    for (var e = 0; kt.length > 0; ) {
      e++ > 1e3 && os();
      var t = kt, r = t.length;
      kt = [];
      for (var o = 0; o < r; o++) {
        var n = t[o];
        n.f & he || (n.f ^= he);
        var a = as(n);
        ns(a);
      }
    }
  } finally {
    nr = !1, ar = null;
  }
}
function ns(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if (!(o.f & (xr | Ye)))
        try {
          Vt(o) && (eo(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? bn(o) : o.fn = null));
        } catch (n) {
          br(n, o, null, o.ctx);
        }
    }
}
function yr(e) {
  nr || (nr = !0, queueMicrotask(pn));
  for (var t = ar = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ct | Xe)) {
      if (!(r & he)) return;
      t.f ^= he;
    }
  }
  kt.push(t);
}
function as(e) {
  var t = [], r = e.first;
  e: for (; r !== null; ) {
    var o = r.f, n = (o & Xe) !== 0, a = n && (o & he) !== 0, s = r.next;
    if (!a && !(o & Ye)) {
      if (o & Yo)
        t.push(r);
      else if (n)
        r.f ^= he;
      else {
        var i = Y;
        try {
          Y = r, Vt(r) && eo(r);
        } catch (d) {
          br(d, r, null, r.ctx);
        } finally {
          Y = i;
        }
      }
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    if (s === null) {
      let d = r.parent;
      for (; d !== null; ) {
        if (e === d)
          break e;
        var c = d.next;
        if (c !== null) {
          r = c;
          continue e;
        }
        d = d.parent;
      }
    }
    r = s;
  }
  return t;
}
function w(e) {
  var t;
  for (_o(); kt.length > 0; )
    nr = !0, pn(), _o();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, r = (t & Re) !== 0;
  if (Y !== null && !Te) {
    De !== null && De.includes(e) && za();
    var o = Y.deps;
    e.rv < sr && (e.rv = sr, de === null && o !== null && o[me] === e ? me++ : de === null ? de = [e] : (!rt || !de.includes(e)) && de.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && !(a.f & Ee) && (n.f ^= Ee);
  }
  return r && (n = /** @type {Derived} */
  e, Vt(n) && an(n)), e.v;
}
function Ke(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const ss = -7169;
function We(e, t) {
  e.f = e.f & ss | t;
}
function is(e) {
  z === null && Y === null && Va(), Y !== null && Y.f & Ee && z === null && Ha(), Jr && Da();
}
function ls(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function vt(e, t, r, o = !0) {
  var n = (e & Ct) !== 0, a = z, s = {
    ctx: Z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ze,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      eo(s), s.f |= Ko;
    } catch (c) {
      throw ke(s), c;
    }
  else t !== null && yr(s);
  var i = r && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (qo | er)) === 0;
  if (!i && !n && o && (a !== null && ls(s, a), Y !== null && Y.f & Re)) {
    var l = (
      /** @type {Derived} */
      Y
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function xn(e) {
  const t = vt(gr, null, !1);
  return We(t, he), t.teardown = e, t;
}
function Se(e) {
  is();
  var t = z !== null && (z.f & Xe) !== 0 && Z !== null && !Z.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: z,
      reaction: Y
    });
  } else {
    var o = Wt(e);
    return o;
  }
}
function cs(e) {
  const t = vt(Ct, e, !0);
  return () => {
    ke(t);
  };
}
function us(e) {
  const t = vt(Ct, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? Mt(t, () => {
      ke(t), o(void 0);
    }) : (ke(t), o(void 0));
  });
}
function Wt(e) {
  return vt(Yo, e, !1);
}
function to(e) {
  return vt(gr, e, !0);
}
function ee(e, t = [], r = M) {
  const o = t.map(r);
  return Et(() => e(...o.map(g)));
}
function Et(e, t = 0) {
  return vt(gr | pr | t, e, !0);
}
function nt(e, t = !0) {
  return vt(gr | Xe, e, !0, t);
}
function mn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Jr, o = Y;
    Co(!0), He(null);
    try {
      t.call(null);
    } finally {
      Co(r), He(o);
    }
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    ke(r, t), r = o;
  }
}
function ds(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Xe || ke(t), t = r;
  }
}
function ke(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ea) && e.nodes_start !== null) {
    for (var o = e.nodes_start, n = e.nodes_end; o !== null; ) {
      var a = o === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(o)
      );
      o.remove(), o = a;
    }
    r = !0;
  }
  wn(e, t && !r), ir(e, 0), We(e, xr);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  mn(e);
  var i = e.parent;
  i !== null && i.first !== null && bn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function bn(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function Mt(e, t) {
  var r = [];
  ro(e, r, !0), yn(r, () => {
    ke(e), t && t();
  });
}
function yn(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var n of e)
      n.out(o);
  } else
    t();
}
function ro(e, t, r) {
  if (!(e.f & Ye)) {
    if (e.f ^= Ye, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var n = o.next, a = (o.f & Ht) !== 0 || (o.f & Xe) !== 0;
      ro(o, t, a ? r : !1), o = n;
    }
  }
}
function lr(e) {
  _n(e, !0);
}
function _n(e, t) {
  if (e.f & Ye) {
    e.f ^= Ye, e.f & he || (e.f ^= he), Vt(e) && (We(e, Ze), yr(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, n = (r.f & Ht) !== 0 || (r.f & Xe) !== 0;
      _n(r, n ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Nn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Z = null;
function Po(e) {
  Z = e;
}
function oo(e) {
  return (
    /** @type {T} */
    Pn().get(e)
  );
}
function An(e, t) {
  return Pn().set(e, t), t;
}
function ne(e, t = !1, r) {
  Z = {
    p: Z,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ae(e) {
  const t = Z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = z, o = Y;
      t.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var a = s[n];
          Ve(a.effect), He(a.reaction), Wt(a.fn);
        }
      } finally {
        Ve(r), He(o);
      }
    }
    Z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Cn() {
  return !0;
}
function Pn(e) {
  return Z === null && Nn(), Z.c ?? (Z.c = new Map(fs(Z) || void 0));
}
function fs(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
function hs(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const vs = [
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
function gs(e) {
  return vs.includes(e);
}
const ps = {
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
function xs(e) {
  return e = e.toLowerCase(), ps[e] ?? e;
}
const ms = ["touchstart", "touchmove"];
function ws(e) {
  return ms.includes(e);
}
function bs(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, St(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function Sn(e) {
  var t = Y, r = z;
  He(null), Ve(null);
  try {
    return e();
  } finally {
    He(t), Ve(r);
  }
}
const En = /* @__PURE__ */ new Set(), Ir = /* @__PURE__ */ new Set();
function Ln(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || Ot.call(t, a), !a.cancelBubble)
      return Sn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? St(() => {
    t.addEventListener(e, n, o);
  }) : t.addEventListener(e, n, o), n;
}
function ys(e, t, r, o, n) {
  var a = { capture: o, passive: n }, s = Ln(e, t, r, a);
  (t === document.body || t === window || t === document) && xn(() => {
    t.removeEventListener(e, s, a);
  });
}
function no(e) {
  for (var t = 0; t < e.length; t++)
    En.add(e[t]);
  for (var r of Ir)
    r(e);
}
function Ot(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, n = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], a = (
    /** @type {null | Element} */
    n[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var l = n.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = n.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  n[s] || e.target, a !== t) {
    It(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = Y, f = z;
    He(null), Ve(null);
    try {
      for (var u, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a["__" + o];
          if (A !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Qr(A)) {
              var [C, ...p] = A;
              C.apply(a, [e, ...p]);
            } else
              A.call(a, e);
        } catch (x) {
          u ? v.push(x) : u = x;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (u) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget, He(d), Ve(f);
    }
  }
}
function ao(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ye(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  var r = (t & jo) !== 0, o = (t & Sa) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (W)
      return ye($, null), $;
    n === void 0 && (n = ao(a ? e : "<!>" + e), r || (n = /** @type {Node} */
    /* @__PURE__ */ oe(n)));
    var s = (
      /** @type {TemplateNode} */
      o || ln ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ye(i, l);
    } else
      ye(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function se(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), n = (t & jo) !== 0, a = `<${r}>${o ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (W)
      return ye($, null), $;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        ao(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ oe(i)
      );
      if (n)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ oe(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ oe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ oe(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (n) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(c)
      ), f = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      ye(d, f);
    } else
      ye(c, c);
    return c;
  };
}
function So(e = "") {
  if (!W) {
    var t = ot(e + "");
    return ye(t, t), t;
  }
  var r = $;
  return r.nodeType !== 3 && (r.before(r = ot()), be(r)), ye(r, r), r;
}
function ct() {
  if (W)
    return ye($, null), $;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ot();
  return e.append(t, r), ye(t, r), e;
}
function F(e, t) {
  if (W) {
    z.nodes_end = $, lt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Fr = !0;
function ze(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Tn(e, t) {
  return On(e, t);
}
function _s(e, t) {
  kr(), t.intro = t.intro ?? !1;
  const r = t.target, o = W, n = $;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== zo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ $e(a);
    if (!a)
      throw yt;
    Oe(!0), be(
      /** @type {Comment} */
      a
    ), lt();
    const s = On(e, { ...t, anchor: a });
    if ($ === null || $.nodeType !== 8 || /** @type {Comment} */
    $.data !== qr)
      throw wr(), yt;
    return Oe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === yt)
      return t.recover === !1 && $a(), kr(), dn(r), Oe(!1), Tn(e, t);
    throw s;
  } finally {
    Oe(o), be(n);
  }
}
const mt = /* @__PURE__ */ new Map();
function On(e, { target: t, anchor: r, props: o = {}, events: n, context: a, intro: s = !0 }) {
  kr();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var u = 0; u < f.length; u++) {
      var v = f[u];
      if (!i.has(v)) {
        i.add(v);
        var h = ws(v);
        t.addEventListener(v, Ot, { passive: h });
        var A = mt.get(v);
        A === void 0 ? (document.addEventListener(v, Ot, { passive: h }), mt.set(v, 1)) : mt.set(v, A + 1);
      }
    }
  };
  l(Xr(En)), Ir.add(l);
  var c = void 0, d = us(() => {
    var f = r ?? t.appendChild(ot());
    return nt(() => {
      if (a) {
        ne({});
        var u = (
          /** @type {ComponentContext} */
          Z
        );
        u.c = a;
      }
      n && (o.$$events = n), W && ye(
        /** @type {TemplateNode} */
        f,
        null
      ), Fr = s, c = e(f, o) || {}, Fr = !0, W && (z.nodes_end = $), a && ae();
    }), () => {
      var h;
      for (var u of i) {
        t.removeEventListener(u, Ot);
        var v = (
          /** @type {number} */
          mt.get(u)
        );
        --v === 0 ? (document.removeEventListener(u, Ot), mt.delete(u)) : mt.set(u, v);
      }
      Ir.delete(l), f !== r && ((h = f.parentNode) == null || h.removeChild(f));
    };
  });
  return Mr.set(c, d), c;
}
let Mr = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  const r = Mr.get(e);
  return r ? (Mr.delete(e), r(t)) : Promise.resolve();
}
function te(e, t, r = !1) {
  W && lt();
  var o = e, n = null, a = null, s = ue, i = r ? Ht : 0, l = !1;
  const c = (f, u = !0) => {
    l = !0, d(u, f);
  }, d = (f, u) => {
    if (s === (s = f)) return;
    let v = !1;
    if (W) {
      const h = (
        /** @type {Comment} */
        o.data === Kr
      );
      !!s === h && (o = Rr(), be(o), Oe(!1), v = !0);
    }
    s ? (n ? lr(n) : u && (n = nt(() => u(o))), a && Mt(a, () => {
      a = null;
    })) : (a ? lr(a) : u && (a = nt(() => u(o))), n && Mt(n, () => {
      n = null;
    })), v && Oe(!0);
  };
  Et(() => {
    l = !1, t(c), l || d(null, null);
  }, i), W && (o = $);
}
function As(e, t, r) {
  W && lt();
  var o = e, n = ue, a, s = Ba;
  Et(() => {
    s(n, n = t()) && (a && Mt(a), a = nt(() => r(o)));
  }), W && (o = $);
}
function qe(e, t) {
  return t;
}
function Cs(e, t, r, o) {
  for (var n = [], a = t.length, s = 0; s < a; s++)
    ro(t[s].e, n, !0);
  var i = a > 0 && n.length === 0 && r !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    dn(l), l.append(
      /** @type {Element} */
      r
    ), o.clear(), et(e, t[0].prev, t[a - 1].next);
  }
  yn(n, () => {
    for (var c = 0; c < a; c++) {
      var d = t[c];
      i || (o.delete(d.k), et(e, d.prev, d.next)), ke(d.e, !i);
    }
  });
}
function Qe(e, t, r, o, n, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Uo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = W ? be(
      /** @type {Comment | Text} */
      /* @__PURE__ */ oe(c)
    ) : c.appendChild(ot());
  }
  W && lt();
  var d = null, f = !1, u = /* @__PURE__ */ on(() => {
    var v = r();
    return Qr(v) ? v : v == null ? [] : Xr(v);
  });
  Et(() => {
    var v = g(u), h = v.length;
    if (f && h === 0)
      return;
    f = h === 0;
    let A = !1;
    if (W) {
      var C = (
        /** @type {Comment} */
        s.data === Kr
      );
      C !== (h === 0) && (s = Rr(), be(s), Oe(!1), A = !0);
    }
    if (W) {
      for (var p = null, m, x = 0; x < h; x++) {
        if ($.nodeType === 8 && /** @type {Comment} */
        $.data === qr) {
          s = /** @type {Comment} */
          $, A = !0, Oe(!1);
          break;
        }
        var y = v[x], P = o(y, x);
        m = Rn(
          $,
          i,
          p,
          null,
          y,
          P,
          x,
          n,
          t,
          r
        ), i.items.set(P, m), p = m;
      }
      h > 0 && be(Rr());
    }
    W || Ps(v, i, s, n, t, o, r), a !== null && (h === 0 ? d ? lr(d) : d = nt(() => a(s)) : d !== null && Mt(d, () => {
      d = null;
    })), A && Oe(!0), g(u);
  }), W && (s = $);
}
function Ps(e, t, r, o, n, a, s) {
  var _, O, k, V;
  var i = (n & ma) !== 0, l = (n & (zr | Yr)) !== 0, c = e.length, d = t.items, f = t.first, u = f, v, h = null, A, C = [], p = [], m, x, y, P;
  if (i)
    for (P = 0; P < c; P += 1)
      m = e[P], x = a(m, P), y = d.get(x), y !== void 0 && ((_ = y.a) == null || _.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(y));
  for (P = 0; P < c; P += 1) {
    if (m = e[P], x = a(m, P), y = d.get(x), y === void 0) {
      var N = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : r;
      h = Rn(
        N,
        t,
        h,
        h === null ? t.first : h.next,
        m,
        x,
        P,
        o,
        n,
        s
      ), d.set(x, h), C = [], p = [], u = h.next;
      continue;
    }
    if (l && Ss(y, m, P, n), y.e.f & Ye && (lr(y.e), i && ((O = y.a) == null || O.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(y))), y !== u) {
      if (v !== void 0 && v.has(y)) {
        if (C.length < p.length) {
          var S = p[0], T;
          h = S.prev;
          var R = C[0], L = C[C.length - 1];
          for (T = 0; T < C.length; T += 1)
            Eo(C[T], S, r);
          for (T = 0; T < p.length; T += 1)
            v.delete(p[T]);
          et(t, R.prev, L.next), et(t, h, R), et(t, L, S), u = S, h = L, P -= 1, C = [], p = [];
        } else
          v.delete(y), Eo(y, u, r), et(t, y.prev, y.next), et(t, y, h === null ? t.first : h.next), et(t, h, y), h = y;
        continue;
      }
      for (C = [], p = []; u !== null && u.k !== x; )
        u.e.f & Ye || (v ?? (v = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      y = u;
    }
    C.push(y), h = y, u = y.next;
  }
  if (u !== null || v !== void 0) {
    for (var B = v === void 0 ? [] : Xr(v); u !== null; )
      u.e.f & Ye || B.push(u), u = u.next;
    var G = B.length;
    if (G > 0) {
      var U = n & Uo && c === 0 ? r : null;
      if (i) {
        for (P = 0; P < G; P += 1)
          (k = B[P].a) == null || k.measure();
        for (P = 0; P < G; P += 1)
          (V = B[P].a) == null || V.fix();
      }
      Cs(t, B, U, d);
    }
  }
  i && St(() => {
    var K;
    if (A !== void 0)
      for (y of A)
        (K = y.a) == null || K.apply();
  }), z.first = t.first && t.first.e, z.last = h && h.e;
}
function Ss(e, t, r, o) {
  o & zr && Or(e.v, t), o & Yr ? Or(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Rn(e, t, r, o, n, a, s, i, l, c) {
  var d = (l & zr) !== 0, f = (l & wa) === 0, u = d ? f ? /* @__PURE__ */ mr(n) : pe(n) : n, v = l & Yr ? pe(s) : s, h = {
    i: v,
    v: u,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: o
  };
  try {
    return h.e = nt(() => i(e, u, v, c), W), h.e.prev = r && r.e, h.e.next = o && o.e, r === null ? t.first = h : (r.next = h, r.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function Eo(e, t, r) {
  for (var o = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, n = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== o; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(a)
    );
    n.before(a), a = s;
  }
}
function et(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function jt(e, t, r, o, n) {
  var a = e, s = "", i;
  Et(() => {
    if (s === (s = t() ?? "")) {
      W && lt();
      return;
    }
    i !== void 0 && (ke(i), i = void 0), s !== "" && (i = nt(() => {
      if (W) {
        $.data;
        for (var l = lt(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ $e(l);
        if (l === null)
          throw wr(), yt;
        ye($, c), a = be(l);
        return;
      }
      var d = s + "";
      d = `<svg>${d}</svg>`;
      var f = ao(d);
      for (f = /** @type {Element} */
      /* @__PURE__ */ oe(f), ye(
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ oe(f); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ oe(f)
        );
    }));
  });
}
function kn(e, t, ...r) {
  var o = e, n = xe, a;
  Et(() => {
    n !== (n = t()) && (a && (ke(a), a = null), a = nt(() => (
      /** @type {SnippetFn} */
      n(o, ...r)
    )));
  }, Ht), W && (o = $);
}
function Ie(e, t) {
  St(() => {
    var r = e.getRootNode(), o = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!o.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, o.appendChild(n);
    }
  });
}
function In(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = In(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Es() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = In(e)) && (o && (o += " "), o += t);
  return o;
}
function Ls(e) {
  return typeof e == "object" ? Es(e) : e ?? "";
}
const Lo = [...` 	
\r\f \v\uFEFF`];
function Ts(e, t, r) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), r) {
    for (var n in r)
      if (r[n])
        o = o ? o + " " + n : n;
      else if (o.length)
        for (var a = n.length, s = 0; (s = o.indexOf(n, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Lo.includes(o[s - 1])) && (i === o.length || Lo.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function _r(e, t, r, o, n, a) {
  var s = e.__className;
  if (W || s !== r) {
    var i = Ts(r, o, a);
    (!W || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = r;
  } else if (a) {
    n ?? (n = {});
    for (var l in a) {
      var c = !!a[l];
      c !== !!n[l] && e.classList.toggle(l, c);
    }
  }
  return a;
}
const Xt = Symbol("class");
function Os(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function q(e, t, r, o) {
  var n = e.__attributes ?? (e.__attributes = {});
  W && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[La] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Fn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function cr(e, t, r, o, n = !1, a = !1, s = !1) {
  let i = W && a;
  i && Oe(!1);
  var l = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in r || (r[d] = null);
  r.class ? r.class = Ls(r.class) : (o || r[Xt]) && (r.class = null);
  var f = Fn(e), u = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const x in r) {
    let y = r[x];
    if (c && x === "value" && y == null) {
      e.value = e.__value = "", l[x] = y;
      continue;
    }
    var v = l[x];
    if (!(y === v && x !== "class")) {
      l[x] = y;
      var h = x[0] + x[1];
      if (h !== "$$") {
        if (h === "on") {
          const P = {}, N = "$$" + x;
          let S = x.slice(2);
          var A = gs(S);
          if (hs(S) && (S = S.slice(0, -7), P.capture = !0), !A && v) {
            if (y != null) continue;
            e.removeEventListener(S, l[N], P), l[N] = null;
          }
          if (y != null)
            if (A)
              e[`__${S}`] = y, no([S]);
            else {
              let T = function(R) {
                l[x].call(this, R);
              };
              l[N] = Ln(S, e, T, P);
            }
          else A && (e[`__${S}`] = void 0);
        } else if (x === "class") {
          var C = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          _r(e, C, y, o, t == null ? void 0 : t[Xt], r[Xt]);
        } else if (x === "style" && y != null)
          e.style.cssText = y + "";
        else if (x === "autofocus")
          bs(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (x === "__value" || x === "value" && y != null))
          e.value = e.__value = y;
        else if (x === "selected" && c)
          Os(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var p = x;
          n || (p = xs(p));
          var m = p === "defaultValue" || p === "defaultChecked";
          if (y == null && !a && !m)
            if (u[x] = null, p === "value" || p === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (p === "value") {
                let S = P.defaultValue;
                P.removeAttribute(p), P.defaultValue = S, P.value = P.__value = N ? S : null;
              } else {
                let S = P.defaultChecked;
                P.removeAttribute(p), P.defaultChecked = S, P.checked = N ? S : !1;
              }
            } else
              e.removeAttribute(x);
          else m || f.includes(p) && (a || typeof y != "string") ? e[p] = y : typeof y != "function" && q(e, p, y);
        }
        x === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && Oe(!0), l;
}
var To = /* @__PURE__ */ new Map();
function Fn(e) {
  var t = To.get(e.nodeName);
  if (t) return t;
  To.set(e.nodeName, t = []);
  for (var r, o = e, n = Element.prototype; n !== o; ) {
    r = Oa(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = Xo(o);
  }
  return t;
}
function fe(e, t, r, o) {
  var n = e.__styles ?? (e.__styles = {});
  n[t] !== r && (n[t] = r, r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, ""));
}
const Rs = () => performance.now(), Be = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Rs(),
  tasks: /* @__PURE__ */ new Set()
};
function Mn() {
  const e = Be.now();
  Be.tasks.forEach((t) => {
    t.c(e) || (Be.tasks.delete(t), t.f());
  }), Be.tasks.size !== 0 && Be.tick(Mn);
}
function Bn(e) {
  let t;
  return Be.tasks.size === 0 && Be.tick(Mn), {
    promise: new Promise((r) => {
      Be.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Be.tasks.delete(t);
    }
  };
}
function zt(e, t) {
  Sn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ks(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Oo(e) {
  const t = {}, r = e.split(";");
  for (const o of r) {
    const [n, a] = o.split(":");
    if (!n || a === void 0) break;
    const s = ks(n.trim());
    t[s] = a.trim();
  }
  return t;
}
const Is = (e) => e;
function ut(e, t, r, o) {
  var n = (e & Aa) !== 0, a = (e & Ca) !== 0, s = n && a, i = (e & Pa) !== 0, l = s ? "both" : n ? "in" : "out", c, d = t.inert, f = t.style.overflow, u, v;
  function h() {
    var x = Y, y = z;
    He(null), Ve(null);
    try {
      return c ?? (c = r()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      He(x), Ve(y);
    }
  }
  var A = {
    is_global: i,
    in() {
      var x;
      if (t.inert = d, !n) {
        v == null || v.abort(), (x = v == null ? void 0 : v.reset) == null || x.call(v);
        return;
      }
      a || u == null || u.abort(), zt(t, "introstart"), u = Br(t, h(), v, 1, () => {
        zt(t, "introend"), u == null || u.abort(), u = c = void 0, t.style.overflow = f;
      });
    },
    out(x) {
      if (!a) {
        x == null || x(), c = void 0;
        return;
      }
      t.inert = !0, zt(t, "outrostart"), v = Br(t, h(), u, 0, () => {
        zt(t, "outroend"), x == null || x();
      });
    },
    stop: () => {
      u == null || u.abort(), v == null || v.abort();
    }
  }, C = (
    /** @type {Effect} */
    z
  );
  if ((C.transitions ?? (C.transitions = [])).push(A), n && Fr) {
    var p = i;
    if (!p) {
      for (var m = (
        /** @type {Effect | null} */
        C.parent
      ); m && m.f & Ht; )
        for (; (m = m.parent) && !(m.f & pr); )
          ;
      p = !m || (m.f & Ko) !== 0;
    }
    p && Wt(() => {
      Ke(() => A.in());
    });
  }
}
function Br(e, t, r, o, n) {
  var a = o === 1;
  if (Ia(t)) {
    var s, i = !1;
    return St(() => {
      if (!i) {
        var C = t({ direction: a ? "in" : "out" });
        s = Br(e, C, r, o, n);
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
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: xe,
      deactivate: xe,
      reset: xe,
      t: () => o
    };
  const { delay: l = 0, css: c, tick: d, easing: f = Is } = t;
  var u = [];
  if (a && r === void 0 && (d && d(0, 1), c)) {
    var v = Oo(c(0, 1));
    u.push(v, v);
  }
  var h = () => 1 - o, A = e.animate(u, { duration: l });
  return A.onfinish = () => {
    var C = (r == null ? void 0 : r.t()) ?? 1 - o;
    r == null || r.abort();
    var p = o - C, m = (
      /** @type {number} */
      t.duration * Math.abs(p)
    ), x = [];
    if (m > 0) {
      var y = !1;
      if (c)
        for (var P = Math.ceil(m / 16.666666666666668), N = 0; N <= P; N += 1) {
          var S = C + p * f(N / P), T = Oo(c(S, 1 - S));
          x.push(T), y || (y = T.overflow === "hidden");
        }
      y && (e.style.overflow = "hidden"), h = () => {
        var R = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          A.currentTime
        );
        return C + p * f(R / m);
      }, d && Bn(() => {
        if (A.playState !== "running") return !1;
        var R = h();
        return d(R, 1 - R), !0;
      });
    }
    A = e.animate(x, { duration: m, fill: "forwards" }), A.onfinish = () => {
      h = () => o, d == null || d(o, 1 - o), n();
    };
  }, {
    abort: () => {
      A && (A.cancel(), A.effect = null, A.onfinish = xe);
    },
    deactivate: () => {
      n = xe;
    },
    reset: () => {
      o === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
var tt, _t, Bt, hr, Dn;
const vr = class vr {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Le(this, hr);
    /** */
    Le(this, tt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Le(this, _t);
    /** @type {ResizeObserverOptions} */
    Le(this, Bt);
    at(this, Bt, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var o = D(this, tt).get(t) || /* @__PURE__ */ new Set();
    return o.add(r), D(this, tt).set(t, o), bo(this, hr, Dn).call(this).observe(t, D(this, Bt)), () => {
      var n = D(this, tt).get(t);
      n.delete(r), n.size === 0 && (D(this, tt).delete(t), D(this, _t).unobserve(t));
    };
  }
};
tt = new WeakMap(), _t = new WeakMap(), Bt = new WeakMap(), hr = new WeakSet(), Dn = function() {
  return D(this, _t) ?? at(this, _t, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        vr.entries.set(r.target, r);
        for (var o of D(this, tt).get(r.target) || [])
          o(r);
      }
    }
  ));
}, /** @static */
Ae(vr, "entries", /* @__PURE__ */ new WeakMap());
let Dr = vr;
var Fs = /* @__PURE__ */ new Dr({
  box: "border-box"
});
function Ms(e, t, r) {
  var o = Fs.observe(e, () => r(e[t]));
  Wt(() => (Ke(() => r(e[t])), o));
}
function Ro(e, t) {
  return e === t || (e == null ? void 0 : e[Rt]) === t;
}
function $t(e = {}, t, r, o) {
  return Wt(() => {
    var n, a;
    return to(() => {
      n = a, a = [], Ke(() => {
        e !== r(...a) && (t(e, ...a), n && Ro(r(...n), e) && t(null, ...n));
      });
    }), () => {
      St(() => {
        a && Ro(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function dt(e) {
  Z === null && Nn(), Se(() => {
    const t = Ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Hn(e, t, r) {
  if (e == null)
    return t(void 0), xe;
  const o = Ke(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const wt = [];
function At(e, t = xe) {
  let r = null;
  const o = /* @__PURE__ */ new Set();
  function n(i) {
    if (tn(e, i) && (e = i, r)) {
      const l = !wt.length;
      for (const c of o)
        c[1](), wt.push(c, e);
      if (l) {
        for (let c = 0; c < wt.length; c += 2)
          wt[c][0](wt[c + 1]);
        wt.length = 0;
      }
    }
  }
  function a(i) {
    n(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, l = xe) {
    const c = [i, l];
    return o.add(c), o.size === 1 && (r = t(n, a) || xe), i(
      /** @type {T} */
      e
    ), () => {
      o.delete(c), o.size === 0 && r && (r(), r = null);
    };
  }
  return { set: n, update: a, subscribe: s };
}
function Vn(e) {
  let t;
  return Hn(e, (r) => t = r)(), t;
}
let Yt = !1, Hr = Symbol();
function ur(e, t, r) {
  const o = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ mr(void 0),
    unsubscribe: xe
  });
  if (o.store !== e && !(Hr in r))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = xe;
    else {
      var n = !0;
      o.unsubscribe = Hn(e, (a) => {
        n ? o.source.v = a : j(o.source, a);
      }), n = !1;
    }
  return e && Hr in r ? Vn(e) : g(o.source);
}
function ft(e, t) {
  return e.set(t), t;
}
function Lt() {
  const e = {};
  function t() {
    xn(() => {
      for (var r in e)
        e[r].unsubscribe();
      It(e, Hr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Bs(e, t, r) {
  return e.set(r), t;
}
function Ds(e) {
  var t = Yt;
  try {
    return Yt = !1, [e(), Yt];
  } finally {
    Yt = t;
  }
}
function b(e, t, r, o) {
  var P;
  var n = (r & ba) !== 0, a = !0, s = (r & _a) !== 0, i = (r & Na) !== 0, l = !1, c;
  s ? [c, l] = Ds(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = Rt in e || Qo in e, f = s && (((P = it(e, t)) == null ? void 0 : P.set) ?? (d && t in e && ((N) => e[t] = N))) || void 0, u = (
    /** @type {V} */
    o
  ), v = !0, h = !1, A = () => (h = !0, v && (v = !1, i ? u = Ke(
    /** @type {() => V} */
    o
  ) : u = /** @type {V} */
  o), u);
  c === void 0 && o !== void 0 && (f && a && Ga(), c = A(), f && f(c));
  var C;
  if (C = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? A() : (v = !0, h = !1, N);
  }, !(r & ya))
    return C;
  if (f) {
    var p = e.$$legacy;
    return function(N, S) {
      return arguments.length > 0 ? ((!S || p || l) && f(S ? C() : N), N) : C();
    };
  }
  var m = !1, x = /* @__PURE__ */ mr(c), y = /* @__PURE__ */ M(() => {
    var N = C(), S = g(x);
    return m ? (m = !1, S) : x.v = N;
  });
  return n || (y.equals = Zr), function(N, S) {
    if (arguments.length > 0) {
      const T = S ? g(y) : s ? Pe(N) : N;
      return y.equals(T) || (m = !0, j(x, T), h && u !== void 0 && (u = T), Ke(() => g(y))), N;
    }
    return g(y);
  };
}
function Hs(e) {
  return new Vs(e);
}
var Ue, Ce;
class Vs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Le(this, Ue);
    /** @type {Record<string, any>} */
    Le(this, Ce);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (s, i) => {
      var l = /* @__PURE__ */ mr(i);
      return r.set(s, l), l;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return g(r.get(i) ?? o(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Qo ? !0 : (g(r.get(i) ?? o(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return j(r.get(i) ?? o(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    at(this, Ce, (t.hydrate ? _s : Tn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && w(), at(this, Ue, n.$$events);
    for (const s of Object.keys(D(this, Ce)))
      s === "$set" || s === "$destroy" || s === "$on" || It(this, s, {
        get() {
          return D(this, Ce)[s];
        },
        /** @param {any} value */
        set(i) {
          D(this, Ce)[s] = i;
        },
        enumerable: !0
      });
    D(this, Ce).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, D(this, Ce).$destroy = () => {
      Ns(D(this, Ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    D(this, Ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    D(this, Ue)[t] = D(this, Ue)[t] || [];
    const o = (...n) => r.call(this, ...n);
    return D(this, Ue)[t].push(o), () => {
      D(this, Ue)[t] = D(this, Ue)[t].filter(
        /** @param {any} fn */
        (n) => n !== o
      );
    };
  }
  $destroy() {
    D(this, Ce).$destroy();
  }
}
Ue = new WeakMap(), Ce = new WeakMap();
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    Ae(this, "$$ctor");
    /** Slots */
    Ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ae(this, "$$c");
    /** Whether or not the custom element is connected */
    Ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ae(this, "$$me");
    this.$$ctor = t, this.$$s = r, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, o) {
    if (super.removeEventListener(t, r, o), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (a) => {
          const s = document.createElement("slot");
          n !== "default" && (s.name = n), F(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = Ws(this);
      for (const n of this.$$s)
        n in o && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = Zt(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Hs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = cs(() => {
        to(() => {
          var n;
          this.$$r = !0;
          for (const a of rr(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Zt(
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
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const s = this.$$c.$on(n, a);
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
  attributeChangedCallback(t, r, o) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Zt(t, o, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return rr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Zt(e, t, r, o) {
  var a;
  const n = (a = r[e]) == null ? void 0 : a.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function Ws(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ve(e, t, r, o, n, a) {
  let s = class extends Wn {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return rr(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return rr(t).forEach((i) => {
    It(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var f;
        l = Zt(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var d = (f = it(c, i)) == null ? void 0 : f.get;
          d ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), o.forEach((i) => {
    It(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function ko(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function $s(e) {
  return e;
}
function Gs(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Vr(e, t) {
  if (e === t || e !== e) return () => e;
  const r = typeof e;
  if (r !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const o = (
      /** @type {Array<any>} */
      t.map((n, a) => Vr(
        /** @type {Array<any>} */
        e[a],
        n
      ))
    );
    return (n) => o.map((a) => a(n));
  }
  if (r === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (ko(e) && ko(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (l) => new Date(a + l * i);
    }
    const o = Object.keys(t), n = {};
    return o.forEach((a) => {
      n[a] = Vr(e[a], t[a]);
    }), (a) => {
      const s = {};
      return o.forEach((i) => {
        s[i] = n[i](a);
      }), s;
    };
  }
  if (r === "number") {
    const o = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (n) => e + n * o;
  }
  return () => t;
}
var je, Nt, Dt, st;
const fo = class fo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, r = {}) {
    Le(this, je, pe(
      /** @type {T} */
      void 0
    ));
    Le(this, Nt, pe(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Le(this, Dt);
    /** @type {import('../internal/client/types').Task | null} */
    Le(this, st, null);
    D(this, je).v = D(this, Nt).v = t, at(this, Dt, r);
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
  static of(t, r) {
    const o = new fo(t(), r);
    return to(() => {
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
  set(t, r) {
    var f;
    j(D(this, Nt), t);
    let {
      delay: o = 0,
      duration: n = 400,
      easing: a = $s,
      interpolate: s = Vr
    } = { ...D(this, Dt), ...r };
    if (n === 0)
      return (f = D(this, st)) == null || f.abort(), j(D(this, je), t), Promise.resolve();
    const i = Be.now() + o;
    let l, c = !1, d = D(this, st);
    return at(this, st, Bn((u) => {
      if (u < i)
        return !0;
      if (!c) {
        c = !0;
        const h = D(this, je).v;
        l = s(h, t), typeof n == "function" && (n = n(h, t)), d == null || d.abort();
      }
      const v = u - i;
      return v > /** @type {number} */
      n ? (j(D(this, je), t), !1) : (j(D(this, je), l(a(v / /** @type {number} */
      n))), !0);
    })), D(this, st).promise;
  }
  get current() {
    return g(D(this, je));
  }
  get target() {
    return g(D(this, Nt));
  }
  set target(t) {
    this.set(t);
  }
};
je = new WeakMap(), Nt = new WeakMap(), Dt = new WeakMap(), st = new WeakMap();
let bt = fo;
const Us = (e) => e;
function ht(e, { delay: t = 0, duration: r = 400, easing: o = Us } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: o,
    css: (a) => `opacity: ${a * n}`
  };
}
var js = /* @__PURE__ */ Ne('<div class="state-labels__label svelte-19e6ym4"> </div>'), zs = /* @__PURE__ */ Ne('<div aria-hidden="true"></div>');
const Ys = {
  hash: "svelte-19e6ym4",
  code: `.state-labels.svelte-19e6ym4 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-19e6ym4 {position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, ABCSans;font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:5px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:3px #f1f1f1;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:5px #f1f1f1;font-size:1.125rem;}
}.state-labels--ready.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}`
};
function $n(e, t) {
  ne(t, !0), Ie(e, Ys);
  let r = b(t, "labels", 7), o = b(t, "overlayLabels", 7, !1), n = we(void 0);
  dt(() => {
    setTimeout(() => {
      j(n, !0);
    });
  });
  var a = zs();
  let s;
  return Qe(a, 21, r, qe, (i, l) => {
    var c = ct(), d = _e(c);
    As(d, () => g(l).name, (f) => {
      var u = js(), v = H(u, !0);
      I(u), ee(
        (h) => {
          fe(u, "left", g(l).left + "%"), fe(u, "top", g(l).top + "%"), fe(u, "width", g(l).width + "%"), fe(u, "margin-left", h), ze(v, g(l).name);
        },
        [
          () => Math.round(0 - g(l).width / 2) + "%"
        ]
      ), ut(3, u, () => ht, () => ({ duration: 1e3 })), F(f, u);
    }), F(i, c);
  }), I(a), ee(() => s = _r(a, 1, "state-labels svelte-19e6ym4", null, s, {
    "state-labels--overlaid": o(),
    "state-labels--ready": g(n)
  })), F(e, a), ae({
    get labels() {
      return r();
    },
    set labels(i) {
      r(i), w();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(i = !1) {
      o(i), w();
    }
  });
}
ve($n, { labels: {}, overlayLabels: {} }, [], [], !0);
var Ks = /* @__PURE__ */ Ne('<span class="accessible-hide svelte-ivafae"><!></span>');
const qs = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function Gn(e, t) {
  ne(t, !0), Ie(e, qs);
  let r = b(t, "children", 7);
  var o = Ks(), n = H(o);
  return kn(n, () => r() ?? xe), I(o), F(e, o), ae({
    get children() {
      return r();
    },
    set children(a) {
      r(a), w();
    }
  });
}
ve(Gn, { children: {} }, [], [], !0);
const Io = At({});
var Qs = /* @__PURE__ */ Ne("<a><!></a>");
const Xs = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function Wr(e, t) {
  ne(t, !0), Ie(e, Xs);
  const [r, o] = Lt(), n = () => ur(Io, "$links", r);
  let a = b(t, "id", 7), s = b(t, "target", 7), i = b(t, "children", 7), l = b(t, "position", 7, "topleft"), c = we(void 0);
  Se(() => {
    Bs(Io, Ke(n)[a()] = g(c), Ke(n));
  });
  var d = Qs();
  d.__click = (v) => {
    var C;
    v.preventDefault();
    const A = v.target.href.split("#")[1];
    (C = n()[A]) == null || C.focus();
  };
  var f = H(d);
  kn(f, () => i() ?? xe), I(d), $t(d, (v) => j(c, v), () => g(c)), ee(() => {
    q(d, "id", a()), q(d, "href", `#${s()}`), _r(d, 1, `skip-link--${l()}`, "svelte-70abd9");
  }), F(e, d);
  var u = ae({
    get id() {
      return a();
    },
    set id(v) {
      a(v), w();
    },
    get target() {
      return s();
    },
    set target(v) {
      s(v), w();
    },
    get children() {
      return i();
    },
    set children(v) {
      i(v), w();
    },
    get position() {
      return l();
    },
    set position(v = "topleft") {
      l(v), w();
    }
  });
  return o(), u;
}
no(["click"]);
ve(
  Wr,
  {
    id: {},
    target: {},
    children: {},
    position: {}
  },
  [],
  [],
  !0
);
function Zs(e, t, r) {
  var n;
  const o = e.target.dataset.id;
  j(t, Pe(o)), (n = r()) == null || n({ code: o });
}
function Js(e, t) {
  var o;
  const r = e.target.dataset.id;
  (o = t()) == null || o({ code: r, clientX: null, clientY: null });
}
function ei(e, t, r) {
  var o;
  g(t) === e.target.dataset.id && j(t, null), (o = r()) == null || o({ code: null });
}
var ti = /* @__PURE__ */ Ne("<li><button> </button></li>"), ri = /* @__PURE__ */ Ne("<li> <ul></ul></li>"), oi = /* @__PURE__ */ Ne('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), ni = /* @__PURE__ */ Ne("<!> <!> <!>", 1);
const ai = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function Un(e, t) {
  ne(t, !0), Ie(e, ai);
  let r = b(t, "groups", 7), o = b(t, "layout", 7), n = b(t, "onChange", 7), a = b(t, "onClick", 7), s = b(t, "onFocus", 7), i = b(t, "isSkippable", 7), l = b(t, "customElectorateAltText", 23, () => ({})), c = we(null);
  Se(() => {
    var p;
    (p = n()) == null || p(g(c));
  });
  let d = /* @__PURE__ */ M(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((p) => o().positions[p]).map((p) => r().find((m) => m.name === p)).map((p) => ({
    ...p,
    hexes: [...p.hexes].sort((m, x) => m.coord[0] + m.coord[1] * 1e3 - (x.coord[0] + x.coord[1] * 1e3))
  })));
  var f = ni(), u = _e(f);
  {
    var v = (p) => {
      Wr(p, {
        id: "hex-map-top",
        target: "hex-map-bottom",
        position: "topleft",
        children: (m, x) => {
          or();
          var y = So("Skip past map");
          F(m, y);
        },
        $$slots: { default: !0 }
      });
    };
    te(u, (p) => {
      i() && p(v);
    });
  }
  var h = Q(u, 2);
  Gn(h, {
    children: (p, m) => {
      var x = oi();
      x.__click = [Js, a], x.__focusin = [Zs, c, s], x.__focusout = [ei, c, s], Qe(x, 21, () => g(d), qe, (y, P) => {
        var N = ri(), S = H(N), T = Q(S);
        Qe(T, 21, () => g(P).hexes, qe, (R, L) => {
          var B = ti(), G = H(B), U = H(G);
          I(G), I(B), ee(() => {
            q(G, "data-id", g(L).id), ze(U, `${g(L).name ?? ""} ${l()[g(L).id] || ""}`);
          }), F(R, B);
        }), I(T), I(N), ee(() => ze(S, `${g(P).name ?? ""} `)), F(y, N);
      }), I(x), F(p, x);
    },
    $$slots: { default: !0 }
  });
  var A = Q(h, 2);
  {
    var C = (p) => {
      Wr(p, {
        id: "hex-map-bottom",
        target: "hex-map-top",
        position: "bottomleft",
        children: (m, x) => {
          or();
          var y = So("Skip above map");
          F(m, y);
        },
        $$slots: { default: !0 }
      });
    };
    te(A, (p) => {
      i() && p(C);
    });
  }
  return F(e, f), ae({
    get groups() {
      return r();
    },
    set groups(p) {
      r(p), w();
    },
    get layout() {
      return o();
    },
    set layout(p) {
      o(p), w();
    },
    get onChange() {
      return n();
    },
    set onChange(p) {
      n(p), w();
    },
    get onClick() {
      return a();
    },
    set onClick(p) {
      a(p), w();
    },
    get onFocus() {
      return s();
    },
    set onFocus(p) {
      s(p), w();
    },
    get isSkippable() {
      return i();
    },
    set isSkippable(p) {
      i(p), w();
    },
    get customElectorateAltText() {
      return l();
    },
    set customElectorateAltText(p = {}) {
      l(p), w();
    }
  });
}
no(["click", "focusin", "focusout"]);
ve(
  Un,
  {
    groups: {},
    layout: {},
    onChange: {},
    onClick: {},
    onFocus: {},
    isSkippable: {},
    customElectorateAltText: {}
  },
  [],
  [],
  !0
);
function si(e) {
  return Object.entries(e).reduce((t, [r, o]) => (t[o] = r, t), {});
}
const Fo = 16;
function Nr(e = [0, 0], t = "px") {
  const r = e[0] * (Fo * Math.sqrt(3)), o = e[1] * 1.5 * Fo;
  return [r, o].map((n) => `${Math.round(n)}${t}`);
}
var ii = /* @__PURE__ */ se('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), li = /* @__PURE__ */ se('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const ci = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function Jt(e, t) {
  ne(t, !0), Ie(e, ci);
  let r = b(t, "groups", 7), o = b(t, "id", 7), n = b(t, "layout", 7), a = b(t, "type", 7, "focus"), s = /* @__PURE__ */ M(() => r().flatMap((f) => f.hexes.map((u) => ({ ...u, group: f.name }))).sort((f, u) => f.index - u.index)), i = /* @__PURE__ */ M(() => {
    if (!o())
      return;
    const f = g(s).find((x) => x.id === o()), [u, v] = n().positions[f.group], [h, A] = f.coord, C = A % 2 ? 0.5 : 0, [p, m] = Nr([u + h + C, v + A], "").map(Number);
    return [p - 3, m - 3];
  });
  var l = ct(), c = _e(l);
  {
    var d = (f) => {
      var u = li(), v = H(u);
      {
        var h = (A) => {
          var C = ii();
          or(), F(A, C);
        };
        te(v, (A) => {
          a() === "focus" && A(h);
        });
      }
      or(), I(u), ee((A) => q(u, "transform", A), [
        () => `translate(${g(i).join(" ")}) scale(0.95)`
      ]), F(f, u);
    };
    te(c, (f) => {
      g(i) && f(d);
    });
  }
  return F(e, l), ae({
    get groups() {
      return r();
    },
    set groups(f) {
      r(f), w();
    },
    get id() {
      return o();
    },
    set id(f) {
      o(f), w();
    },
    get layout() {
      return n();
    },
    set layout(f) {
      n(f), w();
    },
    get type() {
      return a();
    },
    set type(f = "focus") {
      a(f), w();
    }
  });
}
ve(Jt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var ui = typeof global == "object" && global && global.Object === Object && global, di = typeof self == "object" && self && self.Object === Object && self, jn = ui || di || Function("return this")(), dr = jn.Symbol, zn = Object.prototype, fi = zn.hasOwnProperty, hi = zn.toString, Tt = dr ? dr.toStringTag : void 0;
function vi(e) {
  var t = fi.call(e, Tt), r = e[Tt];
  try {
    e[Tt] = void 0;
    var o = !0;
  } catch {
  }
  var n = hi.call(e);
  return o && (t ? e[Tt] = r : delete e[Tt]), n;
}
var gi = Object.prototype, pi = gi.toString;
function xi(e) {
  return pi.call(e);
}
var mi = "[object Null]", wi = "[object Undefined]", Mo = dr ? dr.toStringTag : void 0;
function bi(e) {
  return e == null ? e === void 0 ? wi : mi : Mo && Mo in Object(e) ? vi(e) : xi(e);
}
function yi(e) {
  return e != null && typeof e == "object";
}
var _i = "[object Symbol]";
function Ni(e) {
  return typeof e == "symbol" || yi(e) && bi(e) == _i;
}
var Ai = /\s/;
function Ci(e) {
  for (var t = e.length; t-- && Ai.test(e.charAt(t)); )
    ;
  return t;
}
var Pi = /^\s+/;
function Si(e) {
  return e && e.slice(0, Ci(e) + 1).replace(Pi, "");
}
function $r(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bo = NaN, Ei = /^[-+]0x[0-9a-f]+$/i, Li = /^0b[01]+$/i, Ti = /^0o[0-7]+$/i, Oi = parseInt;
function Do(e) {
  if (typeof e == "number")
    return e;
  if (Ni(e))
    return Bo;
  if ($r(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = $r(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Si(e);
  var r = Li.test(e);
  return r || Ti.test(e) ? Oi(e.slice(2), r ? 2 : 8) : Ei.test(e) ? Bo : +e;
}
var Er = function() {
  return jn.Date.now();
}, Ri = "Expected a function", ki = Math.max, Ii = Math.min;
function Fi(e, t, r) {
  var o, n, a, s, i, l, c = 0, d = !1, f = !1, u = !0;
  if (typeof e != "function")
    throw new TypeError(Ri);
  t = Do(t) || 0, $r(r) && (d = !!r.leading, f = "maxWait" in r, a = f ? ki(Do(r.maxWait) || 0, t) : a, u = "trailing" in r ? !!r.trailing : u);
  function v(N) {
    var S = o, T = n;
    return o = n = void 0, c = N, s = e.apply(T, S), s;
  }
  function h(N) {
    return c = N, i = setTimeout(p, t), d ? v(N) : s;
  }
  function A(N) {
    var S = N - l, T = N - c, R = t - S;
    return f ? Ii(R, a - T) : R;
  }
  function C(N) {
    var S = N - l, T = N - c;
    return l === void 0 || S >= t || S < 0 || f && T >= a;
  }
  function p() {
    var N = Er();
    if (C(N))
      return m(N);
    i = setTimeout(p, A(N));
  }
  function m(N) {
    return i = void 0, u && o ? v(N) : (o = n = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), c = 0, o = l = n = i = void 0;
  }
  function y() {
    return i === void 0 ? s : m(Er());
  }
  function P() {
    var N = Er(), S = C(N);
    if (o = arguments, n = this, l = N, S) {
      if (i === void 0)
        return h(l);
      if (f)
        return clearTimeout(i), i = setTimeout(p, t), v(l);
    }
    return i === void 0 && (i = setTimeout(p, t)), s;
  }
  return P.cancel = x, P.flush = y, P;
}
function Mi({ isInteractive: e = !1, onClick: t, onHover: r }) {
  if (!e)
    return {};
  const o = Fi(r, 10), n = ({ target: i, clientX: l, clientY: c }) => {
    var f;
    const d = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.id;
    !d || !t || t({ code: d, clientX: l, clientY: c });
  }, a = (i) => {
    const l = i.target, { clientX: c, clientY: d } = i, f = l.dataset.id;
    l.nodeName !== "polygon" || !f || o({ code: f, clientX: c, clientY: d });
  }, s = (i) => {
    o({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: n
  };
}
var Bi = /* @__PURE__ */ se('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), Di = /* @__PURE__ */ se('<g class="hexlabels svelte-1kzhlql"></g>');
const Hi = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function Yn(e, t) {
  ne(t, !0), Ie(e, Hi);
  let r = b(t, "hexes", 7), o = b(t, "allocations", 7), n = b(t, "certainties", 7), a = b(t, "labelsToShow", 23, () => ({})), s = b(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ M(() => s() ? r() : r().filter(({ id: c }) => a()[c]));
  var l = Di();
  return Qe(l, 21, () => g(i), qe, (c, d) => {
    let f = () => g(d).id, u = () => g(d).coordPx, v = () => g(d).shortName;
    var h = Bi(), A = H(h);
    let C;
    var p = H(A, !0);
    I(A);
    var m = Q(A), x = H(m, !0);
    I(m), I(h), ee(
      (y) => {
        q(h, "transform", y), C = _r(A, 0, "hexlabels__text svelte-1kzhlql", null, C, {
          "hexlabels__text--allocation": o()[f()]
        }), fe(A, "stroke", `var(--u-${o()[f()]})`), fe(A, "stroke-width", "3"), fe(A, "opacity", o()[f()] && !n()[f()] ? 1 : 0), ze(p, v()), fe(m, "fill", o()[f()] && n()[f()] ? "white" : "black"), ze(x, v());
      },
      [
        () => `translate(${u().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), F(c, h);
  }), I(l), F(e, l), ae({
    get hexes() {
      return r();
    },
    set hexes(c) {
      r(c), w();
    },
    get allocations() {
      return o();
    },
    set allocations(c) {
      o(c), w();
    },
    get certainties() {
      return n();
    },
    set certainties(c) {
      n(c), w();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(c = {}) {
      a(c), w();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(c = !1) {
      s(c), w();
    }
  });
}
ve(
  Yn,
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
var Vi = /* @__PURE__ */ se('<g class="group-outline group-outline__under svelte-is11bp"><!></g>'), Wi = /* @__PURE__ */ se('<g><g class="group-hexes svelte-is11bp"><!></g><!></g>'), $i = /* @__PURE__ */ se('<g class="group-outline group-outline__over svelte-is11bp"><!></g>'), Gi = /* @__PURE__ */ se('<g><g class="group-hex-strokes svelte-is11bp"><!></g><!><!></g>'), Ui = /* @__PURE__ */ se('<g class="svelte-is11bp"><!><!></g>');
const ji = {
  hash: "svelte-is11bp",
  code: `.group.svelte-is11bp:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--rendered.svelte-is11bp .hex {transition:all 0.5s;}.group--rendered.svelte-is11bp .hex-outline {transition:opacity 0.5s, stroke 0.5s;}.group--hidden.svelte-is11bp {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-is11bp,
.group-outline.svelte-is11bp {pointer-events:none;}.group.svelte-is11bp .hex {vector-effect:non-scaling-stroke;fill:transparent;transform-box:fill-box;transform-origin:50% 50%;--hexFlipMinWidth: 0.03;}
@media (min-width: 46.5rem) {.group.svelte-is11bp .hex {--hexFlipMinWidth: 0.03;}
}.group.svelte-is11bp .hex.hex--flip {
  animation: svelte-is11bp-hex-flip 1s ease-in-out;}.group-outline.svelte-is11bp .hex-outline {fill:transparent;stroke:var(--c-stateOutline);stroke-width:1.5px;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-fullStateOutline);}.group-hexes.svelte-is11bp .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-is11bp .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-is11bp .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-is11bp .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-is11bp .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-is11bp .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-is11bp .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-is11bp .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-is11bp .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-is11bp .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-is11bp .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-is11bp .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-is11bp .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-is11bp .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-is11bp .hex[data-allocation="TOP"] {fill:var(--a-TOP);}.group-hexes.svelte-is11bp .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-is11bp .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {fill:#fff;stroke:#fff;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--is-outline.svelte-is11bp .hex {opacity:0;}.group--is-outline.svelte-is11bp .hex-outline {stroke:var(--c-emptyBorder) !important;}

@keyframes svelte-is11bp-hex-flip {
  from {
    transform: none;
    fill: var(--allocationFrom);
  }
  50% {
    transform: scaleX(var(--hexFlipMinWidth));
    stroke: transparent;
    fill: var(--allocationFrom);
  }
  50.01% {
    fill: var(--allocationTo);
  }
  to {
    transform: none;
    fill: var(--allocationTo);
  }
}`
};
function Kn(e, t) {
  ne(t, !0), Ie(e, ji);
  let r = b(t, "groups", 7), o = b(t, "isStaticLayout", 7), n = b(t, "layout", 7), a = b(t, "allocations", 7), s = b(t, "focuses", 7), i = b(t, "certainties", 7), l = b(t, "showElectorateLabels", 7), c = b(t, "showFocusedElectorateLabels", 7), d = b(t, "labelsToShow", 7), f = b(t, "isOutlineOnly", 7, !1), u = b(t, "showStateOutlinesOnTop", 7, !1), v = b(t, "hexFlip", 7, "None"), h = we(void 0), A = we(!1);
  dt(() => {
    setTimeout(
      () => {
        j(A, !0);
      },
      1
    );
  });
  let C = /* @__PURE__ */ M(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.some(Boolean);
  }), p = /* @__PURE__ */ M(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.every(Boolean);
  }), m = /* @__PURE__ */ M(() => Object.values(s()).some(Boolean)), x = /* @__PURE__ */ M(() => {
    var L;
    return Array.from(((L = g(h)) == null ? void 0 : L.querySelectorAll("polygon.hex")) || []).filter((B) => B instanceof SVGPolygonElement);
  }), y = { allocation: {} };
  Se(() => {
    const L = { ...a() }, B = s(), G = i();
    g(x).forEach((U) => {
      const _ = U.dataset.id;
      if (!_)
        return;
      const O = L[_] || null, k = y.allocation[_];
      U.dataset.allocation = O, v() === "Flip" && k !== O && (U.style.setProperty("--allocationFrom", `var(--a-${k})`), U.style.setProperty("--allocationTo", `var(--a-${O})`), U.classList.add("hex--flip")), y.allocation[_] = O;
      const V = g(m) ? B[_] || !1 : !0;
      U.dataset.focused = V;
      const K = G[_] || null;
      U.dataset.certain = K;
    });
  });
  let P = /* @__PURE__ */ M(() => {
    const L = r(), B = n();
    return L.map((G) => {
      const U = B.positions[G.name], _ = U && U[0] !== 1 / 0, O = Nr(U).join(","), k = g(m) && c() ? s() : d(), V = {
        "data-name": G.name,
        style: `transform: translate(${O})`,
        class: [
          "group",
          !_ && "group--hidden",
          o() && "group--map-is-static",
          !g(C) && "group--map-is-empty",
          g(p) && "group--map-is-full",
          g(m) && "group--has-focuses",
          f() && "group--is-outline",
          g(A) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: _, labels: k, group: G, groupProps: V };
    });
  }), N = /* @__PURE__ */ M(() => u() || g(C) && g(m));
  var S = Ui(), T = H(S);
  Qe(T, 17, () => g(P), qe, (L, B) => {
    let G = () => g(B).groupProps, U = () => g(B).group;
    var _ = Wi();
    let O;
    var k = H(_), V = H(k);
    jt(V, () => U().svgHexes), I(k);
    var K = Q(k);
    {
      var re = (ie) => {
        var X = Vi(), le = H(X);
        jt(le, () => U().svgOutline), I(X), ut(2, X, () => ht, () => ({ duration: 200, delay: 200 })), F(ie, X);
      };
      te(K, (ie) => {
        g(N) || ie(re);
      });
    }
    I(_), ee(() => O = cr(_, O, { ...G() }, "svelte-is11bp", !0)), F(L, _);
  });
  var R = Q(T);
  return Qe(R, 17, () => g(P), qe, (L, B) => {
    let G = () => g(B).groupProps, U = () => g(B).isVisible, _ = () => g(B).labels, O = () => g(B).group;
    var k = Gi();
    let V;
    var K = H(k), re = H(K);
    jt(re, () => O().svgHexes), I(K);
    var ie = Q(K);
    {
      var X = (ge) => {
        var ce = $i(), Me = H(ce);
        jt(Me, () => O().svgOutline), I(ce), ut(3, ce, () => ht, () => ({ duration: 200 })), F(ge, ce);
      };
      te(ie, (ge) => {
        g(N) && ge(X);
      });
    }
    var le = Q(ie);
    {
      var Fe = (ge) => {
        Yn(ge, {
          get hexes() {
            return O().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return _();
          },
          get showElectorateLabels() {
            return l();
          }
        });
      };
      te(le, (ge) => {
        U() && ge(Fe);
      });
    }
    I(k), ee(() => V = cr(k, V, { ...G() }, "svelte-is11bp", !0)), F(L, k);
  }), I(S), $t(S, (L) => j(h, L), () => g(h)), ys("animationend", S, (L) => {
    L.target.classList.remove("hex--flip");
  }), F(e, S), ae({
    get groups() {
      return r();
    },
    set groups(L) {
      r(L), w();
    },
    get isStaticLayout() {
      return o();
    },
    set isStaticLayout(L) {
      o(L), w();
    },
    get layout() {
      return n();
    },
    set layout(L) {
      n(L), w();
    },
    get allocations() {
      return a();
    },
    set allocations(L) {
      a(L), w();
    },
    get focuses() {
      return s();
    },
    set focuses(L) {
      s(L), w();
    },
    get certainties() {
      return i();
    },
    set certainties(L) {
      i(L), w();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(L) {
      l(L), w();
    },
    get showFocusedElectorateLabels() {
      return c();
    },
    set showFocusedElectorateLabels(L) {
      c(L), w();
    },
    get labelsToShow() {
      return d();
    },
    set labelsToShow(L) {
      d(L), w();
    },
    get isOutlineOnly() {
      return f();
    },
    set isOutlineOnly(L = !1) {
      f(L), w();
    },
    get showStateOutlinesOnTop() {
      return u();
    },
    set showStateOutlinesOnTop(L = !1) {
      u(L), w();
    },
    get hexFlip() {
      return v();
    },
    set hexFlip(L = "None") {
      v(L), w();
    }
  });
}
ve(
  Kn,
  {
    groups: {},
    isStaticLayout: {},
    layout: {},
    allocations: {},
    focuses: {},
    certainties: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    labelsToShow: {},
    isOutlineOnly: {},
    showStateOutlinesOnTop: {},
    hexFlip: {}
  },
  [],
  [],
  !0
);
var zi = /* @__PURE__ */ se('<g class="svelte-1trui9u"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1trui9u"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1trui9u"></path></g>');
const Yi = {
  hash: "svelte-1trui9u",
  code: `path.svelte-1trui9u,
g.svelte-1trui9u {transition:all 0.5s;}`
};
function so(e, t) {
  ne(t, !0), Ie(e, Yi);
  let r = b(t, "coordPx", 7), o = b(t, "rotation", 7), n = b(t, "colour", 7), a = b(t, "opacity", 7, 1), s = b(t, "value", 7), i = b(t, "arrowHeight", 7), l = b(t, "tether", 7, "base"), c = /* @__PURE__ */ M(() => {
    const C = Math.abs(s());
    return Math.min(1.5, 0.3 + C / 20);
  }), d = /* @__PURE__ */ M(() => l() === "base" ? "" : `translate(0 ${63 * s() * i()})`);
  var f = zi(), u = H(f), v = Q(u);
  return I(f), ee(
    (h) => {
      q(f, "data-tether", l()), q(f, "transform", h), fe(f, "opacity", a()), q(u, "transform", `${g(d)} scale(${g(c)} ${s() * i()})`), fe(u, "fill", n()), q(v, "transform", `translate(0 ${-63 * s() * i()}) ${g(d)} rotate(${s() < 0 ? 180 : 0}) scale(${g(c)})`), fe(v, "stroke", n());
    },
    [
      () => `translate(${r().join(" ")}) rotate(${o()})`
    ]
  ), F(e, f), ae({
    get coordPx() {
      return r();
    },
    set coordPx(h) {
      r(h), w();
    },
    get rotation() {
      return o();
    },
    set rotation(h) {
      o(h), w();
    },
    get colour() {
      return n();
    },
    set colour(h) {
      n(h), w();
    },
    get opacity() {
      return a();
    },
    set opacity(h = 1) {
      a(h), w();
    },
    get value() {
      return s();
    },
    set value(h) {
      s(h), w();
    },
    get arrowHeight() {
      return i();
    },
    set arrowHeight(h) {
      i(h), w();
    },
    get tether() {
      return l();
    },
    set tether(h = "base") {
      l(h), w();
    }
  });
}
ve(
  so,
  {
    coordPx: {},
    rotation: {},
    colour: {},
    opacity: {},
    value: {},
    arrowHeight: {},
    tether: {}
  },
  [],
  [],
  !0
);
var Ki = /* @__PURE__ */ se('<g class="hex-map-arrows"></g>');
function io(e, t) {
  ne(t, !0);
  let r = b(t, "groups", 7), o = b(t, "layout", 7), n = b(t, "arrowData", 7), a = b(t, "arrowHeight", 7), s = b(t, "getColourForValue", 7), i = b(t, "getRotationForValue", 7);
  var l = ct(), c = _e(l);
  return Qe(c, 17, r, qe, (d, f) => {
    var u = ct(), v = _e(u);
    {
      var h = (A) => {
        var C = Ki();
        Qe(C, 21, () => g(f).hexes, qe, (p, m) => {
          let x = () => g(m).coordPx, y = () => g(m).id;
          const P = /* @__PURE__ */ M(() => i()(n()[y()])), N = /* @__PURE__ */ M(() => n()[y()] ? 1 : 0), S = /* @__PURE__ */ M(() => n()[y()] || 0), T = /* @__PURE__ */ M(() => s()(n()[y()]));
          so(p, {
            get coordPx() {
              return x();
            },
            get rotation() {
              return g(P);
            },
            get opacity() {
              return g(N);
            },
            get value() {
              return g(S);
            },
            get colour() {
              return g(T);
            },
            get arrowHeight() {
              return a();
            }
          });
        }), I(C), ee((p) => q(C, "transform", p), [
          () => `translate(${Nr(o().positions[g(f).name], "").join(",")})`
        ]), ut(3, C, () => ht, () => ({ duration: 750 })), F(A, C);
      };
      te(v, (A) => {
        o().positions[g(f).name] && A(h);
      });
    }
    F(d, u);
  }), F(e, l), ae({
    get groups() {
      return r();
    },
    set groups(d) {
      r(d), w();
    },
    get layout() {
      return o();
    },
    set layout(d) {
      o(d), w();
    },
    get arrowData() {
      return n();
    },
    set arrowData(d) {
      n(d), w();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(d) {
      a(d), w();
    },
    get getColourForValue() {
      return s();
    },
    set getColourForValue(d) {
      s(d), w();
    },
    get getRotationForValue() {
      return i();
    },
    set getRotationForValue(d) {
      i(d), w();
    }
  });
}
ve(
  io,
  {
    groups: {},
    layout: {},
    arrowData: {},
    arrowHeight: {},
    getColourForValue: {},
    getRotationForValue: {}
  },
  [],
  [],
  !0
);
const fr = At(), qi = { url: "https://www.abc.net.au/news-web/api/syndicate/storylab/elections/federal/2025" }, Qi = {
  liveData: qi
}, Xi = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m", TOP: "m" }, Zi = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP" }, qn = {
  hashCodes: Xi,
  synonyms: Zi
};
function Ji(e, t = (r) => !0) {
  return e.data.electorates.reduce((r, o) => {
    const n = o.code;
    if (Number(o.counted || 0) <= 5)
      return r[n] = 0, r;
    if (!o.runners)
      return console.error("Missing runners"), r;
    const s = [...o.runners, ...o.ghosts || []].filter((i) => {
      const l = qn.synonyms[i.party.code] || i.party.code;
      return t(l);
    }).reduce((i, l) => {
      var f;
      const c = (f = l == null ? void 0 : l.simple) == null ? void 0 : f.swing, d = c ? Number(c) : 0;
      return i + d;
    }, 0);
    return r[n] = s, r;
  }, {});
}
let Kt;
async function Qn({ cache: e } = { cache: !0 }) {
  return e && Kt || (Kt = fetch(Qi.liveData.url).then((t) => t.json())), Kt;
}
var el = /* @__PURE__ */ se('<g><g transform="translate(0,10)"><text class="caption svelte-egtalb"> </text></g></g>'), tl = /* @__PURE__ */ se('<g><!><text class="hex-map-arrow-legend svelte-egtalb"><tspan> </tspan></text></g>'), rl = /* @__PURE__ */ se('<text class="labor svelte-egtalb">Labor</text><g><text class="lnp svelte-egtalb">L/NP</text></g>', 1), ol = /* @__PURE__ */ se('<text class="hex-map-arrow-legend__light svelte-egtalb"> </text>'), nl = /* @__PURE__ */ se('<!><g class="hex-map-arrow-legend svelte-egtalb"><!><!><text> </text><!></g>', 1);
const al = {
  hash: "svelte-egtalb",
  code: `.hex-map-arrow-legend.svelte-egtalb {fill:black;
  /* Text Regular/xs */font-family:ABCSans;font-size:0.75rem;font-style:normal;font-weight:400;line-height:135%; /* 1.0125rem */width:30px;text-align:center;font-size:var(--fontSize);}text.hex-map-arrow-legend__light.svelte-egtalb {fill:var(--Light-grey-compliant, #767676);}.lnp.svelte-egtalb {fill:var(--a-LNP);}.labor.svelte-egtalb {fill:var(--a-ALP);}.lnp.svelte-egtalb,
.labor.svelte-egtalb {font-weight:bold;}.caption.svelte-egtalb {color:#000;
  /* Text Regular/lg */font-family:ABCSans;font-style:normal;font-weight:400;line-height:150%; /* 1.6875rem */}`
};
function lo(e, t) {
  ne(t, !0), Ie(e, al);
  const [r, o] = Lt(), n = () => ur(a, "$svgElCurrentScale", r), a = oo("svgElCurrentScale");
  let s = /* @__PURE__ */ M(() => n()), i = b(t, "caption", 7, ""), l = b(t, "scales", 7), c = b(t, "arrowHeight", 7), d = b(t, "getRotationForValue", 7), f = b(t, "getColourForValue", 7), u = b(t, "countedPct", 7), v = b(t, "alpLnp", 7, !1), h = b(t, "chartName", 7, "");
  const A = {
    largeScreen: {
      left: 0,
      top: 460,
      fontSize: "18px",
      yOffset: 25,
      arrowGap: 35,
      captionSize: "24px"
    },
    smallScreen: {
      left: 0,
      top: 460,
      fontSize: "12px",
      yOffset: 15,
      arrowGap: 20,
      captionSize: "18px"
    }
  };
  let C = /* @__PURE__ */ M(() => A[g(s) < 1.2 ? "largeScreen" : "smallScreen"]), p = /* @__PURE__ */ M(() => `scale(${g(s).toFixed(2)})`);
  var m = nl(), x = _e(m);
  {
    var y = (_) => {
      var O = el(), k = H(O), V = H(k), K = H(V, !0);
      I(V), I(k), I(O), ee(
        (re) => {
          q(O, "transform", re), fe(V, "font-size", g(C).captionSize), ze(K, i());
        },
        [
          () => `scale(${n().toFixed(2)})`
        ]
      ), F(_, O);
    };
    te(x, (_) => {
      i() && _(y);
    });
  }
  var P = Q(x), N = H(P);
  Qe(N, 17, l, qe, (_, O, k) => {
    let V = () => g(O).name, K = () => g(O).value, re = () => g(O).tether, ie = /* @__PURE__ */ on(() => Fa(g(O).colour, null));
    var X = tl(), le = H(X);
    const Fe = /* @__PURE__ */ M(() => d()(K())), ge = /* @__PURE__ */ M(() => f()(K()));
    so(le, {
      coordPx: [10, 0],
      get arrowHeight() {
        return c();
      },
      get rotation() {
        return g(Fe);
      },
      get colour() {
        return g(ge);
      },
      get value() {
        return K();
      },
      get tether() {
        return re();
      }
    });
    var ce = Q(le), Me = H(ce), Gt = H(Me, !0);
    I(Me), I(ce), I(X), ee(() => {
      q(X, "transform", `translate(${k * g(C).arrowGap * g(s)} 0)`), q(ce, "y", g(C).yOffset), q(ce, "transform", g(p)), fe(ce, "fill", g(ie)), ze(Gt, V());
    }), F(_, X);
  });
  var S = Q(N);
  {
    var T = (_) => {
      var O = rl(), k = _e(O), V = Q(k), K = H(V);
      I(V), ee(() => {
        q(k, "y", g(C).yOffset * 2), q(k, "transform", g(p)), q(V, "transform", `translate(${2 * g(C).arrowGap * g(s)} 0)`), q(K, "y", g(C).yOffset * 2), q(K, "transform", g(p));
      }), F(_, O);
    };
    te(S, (_) => {
      v() && _(T);
    });
  }
  var R = Q(S), L = H(R, !0);
  I(R);
  var B = Q(R);
  {
    var G = (_) => {
      var O = ol(), k = H(O);
      I(O), ee(() => {
        q(O, "y", g(C).yOffset * (v() ? 4 : 3)), q(O, "transform", g(p)), ze(k, `${u() ?? ""}% counted`);
      }), F(_, O);
    };
    te(B, (_) => {
      u() && _(G);
    });
  }
  I(P), ee(() => {
    q(P, "transform", `translate(${g(C).left} ${g(C).top - (v() ? g(C).yOffset : 0)})`), fe(P, "--fontSize", g(C).fontSize), q(R, "y", g(C).yOffset * (v() ? 3 : 2)), q(R, "transform", g(p)), ze(L, h());
  }), ut(3, P, () => ht), F(e, m);
  var U = ae({
    get caption() {
      return i();
    },
    set caption(_ = "") {
      i(_), w();
    },
    get scales() {
      return l();
    },
    set scales(_) {
      l(_), w();
    },
    get arrowHeight() {
      return c();
    },
    set arrowHeight(_) {
      c(_), w();
    },
    get getRotationForValue() {
      return d();
    },
    set getRotationForValue(_) {
      d(_), w();
    },
    get getColourForValue() {
      return f();
    },
    set getColourForValue(_) {
      f(_), w();
    },
    get countedPct() {
      return u();
    },
    set countedPct(_) {
      u(_), w();
    },
    get alpLnp() {
      return v();
    },
    set alpLnp(_ = !1) {
      v(_), w();
    },
    get chartName() {
      return h();
    },
    set chartName(_ = "") {
      h(_), w();
    }
  });
  return o(), U;
}
ve(
  lo,
  {
    caption: {},
    scales: {},
    arrowHeight: {},
    getRotationForValue: {},
    getColourForValue: {},
    countedPct: {},
    alpLnp: {},
    chartName: {}
  },
  [],
  [],
  !0
);
var sl = /* @__PURE__ */ Ne("<!> <!>", 1);
const il = { hash: "svelte-45h", code: "" };
function Xn(e, t) {
  ne(t, !0), Ie(e, il);
  const [r, o] = Lt(), { resetViewboxPadding: n, setViewboxPadding: a } = oo("viewbox-padding") || {}, s = {
    ALP: "Labor",
    LNP: "L/NP",
    GRN: "Greens",
    IND: "Independents",
    ONP: "One Nation",
    TOP: "Trumpet of Patriots"
  };
  let i = b(t, "arrowChart", 7), l = b(t, "groups", 7), c = b(t, "layout", 7), d = b(t, "arrowChartPercentCounted", 7), f = b(t, "arrowChartCaption", 7);
  const u = 0.08;
  let v = we(void 0), h = /* @__PURE__ */ M(() => String(i().split(" ")[0])), A = /* @__PURE__ */ M(() => g(v) ? Ji(g(v), (N) => N === g(h)) : {});
  Se(() => {
    ft(fr, (N) => `Change in first pref
for ${g(h)}: ${g(A)[N] ? g(A)[N].toFixed(3) + "%" : "not applicable"}`);
  }), dt(() => () => {
    ft(fr, void 0);
  });
  let C = /* @__PURE__ */ M(() => () => `var(--a-${g(h).length > 3 ? "OTH" : g(h).toUpperCase()}, hotpink)`);
  const p = () => 20;
  dt(() => {
    const N = a("HexMapArrowsFirsPreference", [33, 0, 30, 0]);
    return Qn({ cache: !0 }).then((S) => {
      j(v, Pe(S));
    }), () => n(N);
  });
  var m = ct(), x = _e(m);
  {
    var y = (N) => {
      var S = sl(), T = _e(S);
      io(T, {
        get groups() {
          return l();
        },
        get layout() {
          return c();
        },
        get arrowData() {
          return g(A);
        },
        arrowHeight: u,
        getRotationForValue: p,
        get getColourForValue() {
          return g(C);
        }
      });
      var R = Q(T, 2);
      const L = /* @__PURE__ */ M(() => f() ? s[g(h)] || g(h) : ""), B = /* @__PURE__ */ M(() => {
        var G, U, _;
        return d() ? (_ = (U = (G = g(v)) == null ? void 0 : G.data) == null ? void 0 : U.overall) == null ? void 0 : _.counted : void 0;
      });
      lo(R, {
        get caption() {
          return g(L);
        },
        chartName: "Primary vote change %",
        get countedPct() {
          return g(B);
        },
        arrowHeight: u,
        getRotationForValue: p,
        get getColourForValue() {
          return g(C);
        },
        scales: [
          { name: "-10", value: -10, tether: "head" },
          { name: "-5", value: -5, tether: "head" },
          { name: "5", value: 5, tether: "base" },
          { name: "10", value: 10, tether: "base" }
        ]
      }), F(N, S);
    };
    te(x, (N) => {
      g(v) && N(y);
    });
  }
  F(e, m);
  var P = ae({
    get arrowChart() {
      return i();
    },
    set arrowChart(N) {
      i(N), w();
    },
    get groups() {
      return l();
    },
    set groups(N) {
      l(N), w();
    },
    get layout() {
      return c();
    },
    set layout(N) {
      c(N), w();
    },
    get arrowChartPercentCounted() {
      return d();
    },
    set arrowChartPercentCounted(N) {
      d(N), w();
    },
    get arrowChartCaption() {
      return f();
    },
    set arrowChartCaption(N) {
      f(N), w();
    }
  });
  return o(), P;
}
ve(
  Xn,
  {
    arrowChart: {},
    groups: {},
    layout: {},
    arrowChartPercentCounted: {},
    arrowChartCaption: {}
  },
  [],
  [],
  !0
);
var ll = /* @__PURE__ */ Ne("<!> <!>", 1);
function Zn(e, t) {
  ne(t, !0);
  const [r, o] = Lt(), { resetViewboxPadding: n, setViewboxPadding: a } = oo("viewbox-padding") || {};
  let s = b(t, "groups", 7), i = b(t, "layout", 7), l = b(t, "arrowChartPercentCounted", 7), c = we(void 0), d = /* @__PURE__ */ M(() => {
    const m = g(c);
    if (!m)
      return {};
    const x = ["LIB", "LNP", "NAT", "CLP"];
    return m.data.electorates.reduce(
      (y, P) => {
        var R, L;
        const [N, S] = P.swingDial[0].party.code === "ALP" ? P.swingDial : [...P.swingDial].reverse();
        return N.party.code === "ALP" && x.includes(S.party.code) && Number(P.counted || 0) > 5 && (y[P.code] = Number(((R = N.predicted2CP) == null ? void 0 : R.swing) || ((L = N.simple2CP) == null ? void 0 : L.swing) || 0)), y;
      },
      {}
    );
  });
  Se(() => {
    ft(fr, (m) => `Swing: ${g(d)[m] ? `${g(d)[m].toFixed(2)}% to ${g(d)[m] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), dt(() => () => {
    ft(fr, void 0);
  });
  let f = /* @__PURE__ */ M(() => (m) => `var(--a-${m < 0 ? "LNP" : "ALP"}, hotpink)`);
  const u = (m) => m < 0 ? -135 : -45;
  dt(() => {
    Qn({ cache: !0 }).then((x) => {
      j(c, Pe(x));
    });
    const m = a("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => n(m);
  });
  const v = 0.06;
  var h = ct(), A = _e(h);
  {
    var C = (m) => {
      var x = ll(), y = _e(x);
      io(y, {
        get arrowData() {
          return g(d);
        },
        arrowHeight: v,
        getRotationForValue: u,
        get getColourForValue() {
          return g(f);
        },
        get groups() {
          return s();
        },
        get layout() {
          return i();
        }
      });
      var P = Q(y, 2);
      const N = /* @__PURE__ */ M(() => {
        var S, T, R;
        return l() ? (R = (T = (S = g(c)) == null ? void 0 : S.data) == null ? void 0 : T.overall) == null ? void 0 : R.counted : void 0;
      });
      lo(P, {
        chartName: "Percentage point swing",
        get countedPct() {
          return g(N);
        },
        arrowHeight: v,
        getRotationForValue: u,
        get getColourForValue() {
          return g(f);
        },
        scales: [
          {
            name: "10",
            value: 10,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: 5,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: -5,
            tether: "base",
            colour: "var(--a-LNP)"
          },
          {
            name: "10",
            value: -10,
            tether: "base",
            colour: "var(--a-LNP)"
          }
        ],
        alpLnp: !0
      }), F(m, x);
    };
    te(A, (m) => {
      g(c) && m(C);
    });
  }
  F(e, h);
  var p = ae({
    get groups() {
      return s();
    },
    set groups(m) {
      s(m), w();
    },
    get layout() {
      return i();
    },
    set layout(m) {
      i(m), w();
    },
    get arrowChartPercentCounted() {
      return l();
    },
    set arrowChartPercentCounted(m) {
      l(m), w();
    }
  });
  return o(), p;
}
ve(
  Zn,
  {
    groups: {},
    layout: {},
    arrowChartPercentCounted: {}
  },
  [],
  [],
  !0
);
function cl() {
  const e = At([0, 0, 0, 0]), t = At("none");
  let r = 0;
  function o(s, i) {
    e.set(i);
    const l = [s, r++].join();
    return t.set(l), l;
  }
  function n(s) {
    Vn(t) === s && (e.set([0, 0, 0, 0]), t.set("none"));
  }
  const a = {
    setViewboxPadding: o,
    resetViewboxPadding: n
  };
  return An("viewbox-padding", a), {
    viewboxPadding: e,
    viewboxApi: a
  };
}
function Ho(e, t = [0, 0, 0, 0]) {
  const [r, o, n, a] = t, [s, i, l, c] = e;
  return [s - a, i - r, l + a + o, c + r + n];
}
function ul() {
  return { svgElCurrentScale: At(1) };
}
const dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var fl = /* @__PURE__ */ Ne('<div class="hexmap__labels svelte-82t7dm"><!></div>'), hl = /* @__PURE__ */ Ne('<div class="hexmap svelte-82t7dm"><div><svg><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const vl = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function Jn(e, t) {
  ne(t, !0), Ie(e, vl);
  const [r, o] = Lt(), n = () => ur(ie, "$viewboxPadding", r), a = () => ur(X, "$svgElCurrentScale", r);
  let s = b(t, "config", 23, () => ({})), i = b(t, "layout", 23, () => ({})), l = b(t, "allocations", 23, () => ({})), c = b(t, "focuses", 23, () => ({})), d = b(t, "certainties", 23, () => ({})), f = b(t, "labelsToShow", 23, () => ({})), u = b(t, "showStateLabels", 7, !1), v = b(t, "showElectorateLabels", 7, !1), h = b(t, "showFocusedElectorateLabels", 7, !1), A = b(t, "isStaticLayout", 7, !1), C = b(t, "onClick", 7, ({ code: E }) => {
  }), p = b(t, "onHover", 7, ({ code: E }) => {
  }), m = b(t, "onFocus", 7, ({ code: E }) => {
  }), x = b(t, "customViewbox", 7, null), y = b(t, "onViewboxChange", 7, ({ newViewbox: E }) => {
  }), P = b(t, "isInteractive", 7, !1), N = b(t, "arrowChart", 7, "None"), S = b(t, "arrowChartPercentCounted", 7, !0), T = b(t, "arrowChartCaption", 7), R = b(t, "selectedElectorate", 7, null), L = b(t, "customElectorateAltText", 7), B = b(t, "showStateOutlinesOnTop", 7, !1), G = b(t, "isInline", 7, !1), U = b(t, "hexFlip", 7, "None"), _ = b(t, "altText", 7, ""), O = we(void 0), k = we(0), V = we(0), K = we(null), re = we(null);
  const { viewboxPadding: ie } = cl(), { svgElCurrentScale: X } = ul();
  An("svgElCurrentScale", X);
  const le = Ho(i().viewbox, n()), Fe = {
    easing: Gs,
    duration: G() ? 0 : 1100
  };
  let ge = new bt(le[0], Fe), ce = new bt(le[1], Fe), Me = new bt(le[2], Fe), Gt = new bt(le[3], Fe);
  Se(() => {
    const [E, J, Je, Pr] = Ho(x() || i().viewbox, n());
    ge.set(E), ce.set(J), Me.set(Je), Gt.set(Pr);
  }), Se(() => {
    y()(i().viewbox);
  }), Se(() => {
    if (!g(O) || g(V))
      return;
    const E = g(O).getBoundingClientRect();
    j(V, E.height / E.width);
  });
  let oa = /* @__PURE__ */ M(() => Mi({
    isInteractive: P(),
    onClick: C(),
    onHover: (E) => {
      j(re, Pe(E.code)), p()(E);
    }
  }));
  Se(() => {
    let E = g(k), J = Me.current;
    if (!E) {
      ft(X, 1);
      return;
    }
    ft(X, J / E + 0.1);
  });
  let na = /* @__PURE__ */ M(() => _() ? { "aria-label": _(), role: "img" } : {});
  var Ut = hl(), gt = H(Ut);
  let ho;
  var pt = H(gt);
  let vo;
  var Ar = H(pt), Cr = H(Ar), aa = H(Cr);
  q(aa, "href", dl), I(Cr), I(Ar);
  var go = Q(Ar);
  const sa = /* @__PURE__ */ M(() => N() !== "None");
  Kn(go, {
    get groups() {
      return s().groups;
    },
    get isStaticLayout() {
      return A();
    },
    get layout() {
      return i();
    },
    get allocations() {
      return l();
    },
    get focuses() {
      return c();
    },
    get certainties() {
      return d();
    },
    get showElectorateLabels() {
      return v();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    get labelsToShow() {
      return f();
    },
    get showStateOutlinesOnTop() {
      return B();
    },
    get hexFlip() {
      return U();
    },
    get isOutlineOnly() {
      return g(sa);
    }
  });
  var po = Q(go);
  Jt(po, {
    get groups() {
      return s().groups;
    },
    get id() {
      return g(K);
    },
    get layout() {
      return i();
    },
    type: "focus"
  });
  var xo = Q(po);
  Jt(xo, {
    get groups() {
      return s().groups;
    },
    get id() {
      return R();
    },
    get layout() {
      return i();
    },
    type: "focus"
  });
  var mo = Q(xo);
  Jt(mo, {
    get groups() {
      return s().groups;
    },
    get id() {
      return g(re);
    },
    get layout() {
      return i();
    },
    type: "hover"
  });
  var ia = Q(mo);
  {
    var la = (E) => {
      var J = ct(), Je = _e(J);
      {
        var Pr = (xt) => {
          Zn(xt, {
            get groups() {
              return s().groups;
            },
            get layout() {
              return i();
            },
            get arrowChartPercentCounted() {
              return S();
            }
          });
        }, va = (xt) => {
          Xn(xt, {
            get groups() {
              return s().groups;
            },
            get layout() {
              return i();
            },
            get arrowChart() {
              return N();
            },
            get arrowChartPercentCounted() {
              return S();
            },
            get arrowChartCaption() {
              return T();
            }
          });
        };
        te(Je, (xt) => {
          N() === "Labor/Coalition 2CP Swing" ? xt(Pr) : xt(va, !1);
        });
      }
      F(E, J);
    };
    te(ia, (E) => {
      N() !== "None" && E(la);
    });
  }
  I(pt), $t(pt, (E) => j(O, E), () => g(O));
  var ca = Q(pt, 2);
  {
    var ua = (E) => {
      var J = fl(), Je = H(J);
      $n(Je, {
        get labels() {
          return i().labels;
        },
        get overlayLabels() {
          return i().overlayLabels;
        }
      }), I(J), F(E, J);
    };
    te(ca, (E) => {
      u() && E(ua);
    });
  }
  I(gt);
  var da = Q(gt, 2);
  {
    var fa = (E) => {
      Un(E, {
        get customElectorateAltText() {
          return L();
        },
        get groups() {
          return s().groups;
        },
        get layout() {
          return i();
        },
        onChange: (J) => {
          j(K, Pe(J));
        },
        get onClick() {
          return C();
        },
        get onFocus() {
          return m();
        },
        isSkippable
      });
    };
    te(da, (E) => {
      P() && E(fa);
    });
  }
  I(Ut), ee(
    (E, J, Je) => {
      ho = cr(
        gt,
        ho,
        {
          class: "hexmap__viz",
          "data-svgratio": g(V) || "null",
          ...g(oa),
          [Xt]: {
            "hexmap__viz--vertical": g(V) <= 1
          }
        },
        "svelte-82t7dm"
      ), fe(gt, "aspect-ratio", E), vo = cr(
        pt,
        vo,
        {
          viewBox: J,
          ...g(na)
        },
        "svelte-82t7dm",
        !0
      ), q(Cr, "patternTransform", Je);
    },
    [
      () => g(V) ? g(V).toFixed(3) : null,
      () => [
        ge.current,
        ce.current,
        Me.current,
        Gt.current
      ].join(" "),
      () => `scale(${a().toFixed(2)})`
    ]
  ), Ms(pt, "clientWidth", (E) => j(k, E)), ut(3, gt, () => ht, () => ({ duration: G() ? 0 : 250 })), ut(3, Ut, () => ht, () => ({ duration: 750 })), F(e, Ut);
  var ha = ae({
    get config() {
      return s();
    },
    set config(E = {}) {
      s(E), w();
    },
    get layout() {
      return i();
    },
    set layout(E = {}) {
      i(E), w();
    },
    get allocations() {
      return l();
    },
    set allocations(E = {}) {
      l(E), w();
    },
    get focuses() {
      return c();
    },
    set focuses(E = {}) {
      c(E), w();
    },
    get certainties() {
      return d();
    },
    set certainties(E = {}) {
      d(E), w();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(E = {}) {
      f(E), w();
    },
    get showStateLabels() {
      return u();
    },
    set showStateLabels(E = !1) {
      u(E), w();
    },
    get showElectorateLabels() {
      return v();
    },
    set showElectorateLabels(E = !1) {
      v(E), w();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    set showFocusedElectorateLabels(E = !1) {
      h(E), w();
    },
    get isStaticLayout() {
      return A();
    },
    set isStaticLayout(E = !1) {
      A(E), w();
    },
    get onClick() {
      return C();
    },
    set onClick(E = ({ code: J }) => {
    }) {
      C(E), w();
    },
    get onHover() {
      return p();
    },
    set onHover(E = ({ code: J }) => {
    }) {
      p(E), w();
    },
    get onFocus() {
      return m();
    },
    set onFocus(E = ({ code: J }) => {
    }) {
      m(E), w();
    },
    get customViewbox() {
      return x();
    },
    set customViewbox(E = null) {
      x(E), w();
    },
    get onViewboxChange() {
      return y();
    },
    set onViewboxChange(E = ({ newViewbox: J }) => {
    }) {
      y(E), w();
    },
    get isInteractive() {
      return P();
    },
    set isInteractive(E = !1) {
      P(E), w();
    },
    get arrowChart() {
      return N();
    },
    set arrowChart(E = "None") {
      N(E), w();
    },
    get arrowChartPercentCounted() {
      return S();
    },
    set arrowChartPercentCounted(E = !0) {
      S(E), w();
    },
    get arrowChartCaption() {
      return T();
    },
    set arrowChartCaption(E) {
      T(E), w();
    },
    get selectedElectorate() {
      return R();
    },
    set selectedElectorate(E = null) {
      R(E), w();
    },
    get customElectorateAltText() {
      return L();
    },
    set customElectorateAltText(E) {
      L(E), w();
    },
    get showStateOutlinesOnTop() {
      return B();
    },
    set showStateOutlinesOnTop(E = !1) {
      B(E), w();
    },
    get isInline() {
      return G();
    },
    set isInline(E = !1) {
      G(E), w();
    },
    get hexFlip() {
      return U();
    },
    set hexFlip(E = "None") {
      U(E), w();
    },
    get altText() {
      return _();
    },
    set altText(E = "") {
      _(E), w();
    }
  });
  return o(), ha;
}
ve(
  Jn,
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
    arrowChart: {},
    arrowChartPercentCounted: {},
    arrowChartCaption: {},
    selectedElectorate: {},
    customElectorateAltText: {},
    showStateOutlinesOnTop: {},
    isInline: {},
    hexFlip: {},
    altText: {}
  },
  [],
  [],
  !0
);
let gl = At({
  allocated: {},
  uncertain: {}
});
const pl = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#767676", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, xl = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, ml = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, Vo = {
  c: pl,
  allocated: xl,
  uncertain: ml
};
function ea(e, t) {
  ne(t, !0);
  const [r, o] = Lt();
  let n = b(t, "rootEl", 15), a = b(t, "colours", 7, Vo);
  Se(() => {
    const i = a(), l = n();
    if (!l)
      return;
    ft(gl, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const c = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([d, f]) => {
      const u = c[d] || d;
      Object.entries(f).forEach(([v, h]) => {
        const A = `--${u}-${v}`;
        l.style.setProperty(A, h);
      });
    });
  }), dt(() => {
    n();
  }), $t(sn.body, (i) => n(i), () => n());
  var s = ae({
    get rootEl() {
      return n();
    },
    set rootEl(i) {
      n(i), w();
    },
    get colours() {
      return a();
    },
    set colours(i = Vo) {
      a(i), w();
    }
  });
  return o(), s;
}
ve(ea, { rootEl: {}, colours: {} }, [], [], !0);
const wl = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 34, top: 30.25, width: 8, name: "NT" }, { left: 65.25, top: 21.25, width: 8, name: "QLD" }, { left: 57.75, top: 43.5, width: 8, name: "NSW" }, { left: 67.5, top: 57.5, width: 8, name: "ACT" }, { left: 58, top: 66.5, width: 8, name: "VIC" }, { left: 58, top: 85.5, width: 8, name: "TAS" }, { left: 34, top: 48.5, width: 8, name: "SA" }, { left: 24.5, top: 53, width: 8, name: "WA" }], overlayLabels: !0 }, bl = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.25, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 71, top: 63, width: 8, name: "ACT" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, yl = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, _l = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, Nl = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Al = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Cl = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Pl = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Sl = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, El = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Ll = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Tl = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Ol = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Rl = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, kl = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Il = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Fl = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ml = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Bl = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, Dl = {
  COUNTRY: wl,
  EXPLODED: bl,
  EXPLODED_STATES_ONLY: yl,
  GRID: _l,
  ACT: Nl,
  NSW: Al,
  NT: Cl,
  QLD: Pl,
  SA: Sl,
  TAS: El,
  VIC: Ll,
  WA: Tl,
  ACT_NT: Ol,
  NSW_QLD: Rl,
  NSW_VIC: kl,
  QLD_VIC: Il,
  QLD_WA: Fl,
  QLD_NSW_VIC: Ml,
  SA_TAS_WA: Bl
}, Hl = 291, Vl = 200, Wl = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Syd","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"Mcma","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"Rivr","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robs","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shld","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chif","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kngs","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunn","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Bnks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Grnw","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Ling","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxly","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fish","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bow","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lill","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flyn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capr","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dick","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Grif","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fair","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blar","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Bris","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrgt","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hink","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Lcht","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kend","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"Mcph","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Rank","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petr","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Ford","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groo","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Strt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makn","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"King","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brdn","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clrk","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyon","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Astn","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Cori","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bndi","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruc","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casy","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chis","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalo","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deak","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flnd","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gips","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawk","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wils","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"Latr","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McE","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nich","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moor","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curt","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowa","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Prth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brnd","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Cani","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"Ocon","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), co = {
  svgWidth: Hl,
  svgHeight: Vl,
  groups: Wl
};
function $l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lr, Wo;
function Gl() {
  if (Wo) return Lr;
  Wo = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), o = 0; o < r.length; o++)
      r[o] = 255;
    for (var n = 0; n < t.length; n++) {
      var a = t.charAt(n), s = a.charCodeAt(0);
      if (r[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      r[s] = n;
    }
    var i = t.length, l = t.charAt(0), c = Math.log(i) / Math.log(256), d = Math.log(256) / Math.log(i);
    function f(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var A = 0, C = 0, p = 0, m = h.length; p !== m && h[p] === 0; )
        p++, A++;
      for (var x = (m - p) * d + 1 >>> 0, y = new Uint8Array(x); p !== m; ) {
        for (var P = h[p], N = 0, S = x - 1; (P !== 0 || N < C) && S !== -1; S--, N++)
          P += 256 * y[S] >>> 0, y[S] = P % i >>> 0, P = P / i >>> 0;
        if (P !== 0)
          throw new Error("Non-zero carry");
        C = N, p++;
      }
      for (var T = x - C; T !== x && y[T] === 0; )
        T++;
      for (var R = l.repeat(A); T < x; ++T)
        R += t.charAt(y[T]);
      return R;
    }
    function u(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var A = 0, C = 0, p = 0; h[A] === l; )
        C++, A++;
      for (var m = (h.length - A) * c + 1 >>> 0, x = new Uint8Array(m); h[A]; ) {
        var y = r[h.charCodeAt(A)];
        if (y === 255)
          return;
        for (var P = 0, N = m - 1; (y !== 0 || P < p) && N !== -1; N--, P++)
          y += i * x[N] >>> 0, x[N] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        p = P, A++;
      }
      for (var S = m - p; S !== m && x[S] === 0; )
        S++;
      for (var T = new Uint8Array(C + (m - S)), R = C; S !== m; )
        T[R++] = x[S++];
      return T;
    }
    function v(h) {
      var A = u(h);
      if (A)
        return A;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: f,
      decodeUnsafe: u,
      decode: v
    };
  }
  return Lr = e, Lr;
}
var Ul = Gl();
const jl = /* @__PURE__ */ $l(Ul);
var zl = "0123456789abcdefghijklmnopqrstuvwxyz";
jl(zl);
new TextEncoder();
new TextDecoder();
const Yl = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, Kl = function(e, { delineator: t }) {
  e += t;
  const r = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = Yl(o), r.push(o);
  r.sort();
  let n = "";
  for (let a = 0; a < r.length; a++)
    n += r[a].charAt(r[a].length - 1);
  return n;
}, ql = function(e, { delineator: t }) {
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
function ta(e) {
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
    (t, r, o) => (o === 0 || r !== t[t.length - 1].char ? t.push({ char: r, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: r, repeated: o }) => t += o === 1 ? r : r + String(o), "");
}
function ra(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, r, o) => r.repeat(+o)
  );
}
async function Ql(e, { delineator: t }) {
  const r = Kl(e, { delineator: t });
  return ta(r);
}
async function Xl(e, { delineator: t }) {
  const r = ra(e);
  return ql(r, { delineator: t });
}
function Zl({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Ql(t, { delineator: e }),
    decode: (t) => Xl(t, { delineator: e })
  };
}
const Gr = 26, Ur = 97, Jl = 48, $o = async (e, { maxBits: t }) => {
  const r = [1, ...e].map((i) => i ? 1 : 0).join(""), o = [];
  for (let i = r.length; i > 0; i -= t)
    o.push(r.slice(Math.max(0, i - t), i));
  return o.reverse(), o.map((i) => parseInt(i, 2)).map((i) => i > Gr ? i % Gr : String.fromCharCode(i + Ur)).join("");
};
async function Go(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= Ur ? i - Ur : i - Jl + Gr
  ).map(
    (i, l) => Number(i).toString(2).padStart(l > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((l) => l === "1")
  ).slice(1);
}
function ec({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => ta(await $o(t, { maxBits: e })),
    decode: async (t) => Go(ra(t), { maxBits: e })
  } : {
    encode: (t) => $o(t, { maxBits: e }),
    decode: (t) => Go(t, { maxBits: e })
  };
}
const uo = co.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), tc = Object.values(uo).reduce((e, t) => (e[t.id] = t, e), {});
co.groups;
const jr = "q", rc = "x";
Zl({ delineator: jr });
const oc = si(qn.hashCodes);
if (oc[jr] || rc === jr)
  throw new Error("Can not use delineator in allocation map");
ec({ maxBits: 4 });
Object.freeze(
  uo.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  uo.reduce((e, t) => (e[t.id] = !0, e), {})
);
var nc = /* @__PURE__ */ Ne("<!> <div><!></div>", 1);
function ac(e, t) {
  ne(t, !0);
  let r = b(t, "allocations", 23, () => ({})), o = b(t, "certainties", 23, () => ({})), n = b(t, "focuses", 23, () => ({})), a = b(t, "showStateLabels", 7, !1), s = b(t, "showElectorateLabels", 7, !1), i = b(t, "layout", 7, "COUNTRY"), l = b(t, "selectedElectorate", 7, null), c = b(t, "customViewbox", 7, null), d = b(t, "onClick", 7, () => {
  }), f = b(t, "onHover", 7, () => {
  }), u = b(t, "onFocus", 7, () => {
  }), v = b(t, "onApi", 7, () => {
  }), h = b(t, "onViewboxChange", 7, () => {
  }), A = b(t, "isStaticLayout", 7, !0), C = b(t, "isInteractive", 7, !0), p = b(t, "isSkippable", 7, !0), m = b(t, "colours", 7), x = b(t, "customElectorateAltText", 23, () => ({})), y = b(t, "areStateOutlinesOnTop", 7), P = we(void 0), N = /* @__PURE__ */ M(() => Dl[i()]);
  function S(_, O, k, V = !0) {
    const K = V ? k.getScreenCTM() : k.getCTM(), re = k.createSVGPoint();
    re.x = _, re.y = O;
    const ie = re.matrixTransform(K);
    return [ie.x, ie.y].map(Number);
  }
  function T(_) {
    const O = tc[_], k = g(N).positions[O == null ? void 0 : O.group];
    if (!g(P))
      return;
    const V = g(P).querySelector("svg");
    if (!O || !k || !V)
      throw new Error(`Could not find hexagon with id ${_}`);
    const K = [-0.5, -1], [re, ie] = Nr(
      [
        k[0] + K[0],
        k[1] + K[1]
      ],
      ""
    ).map(Number), X = Number(O.coordPx[0] + re), le = Number(O.coordPx[1] + ie), [Fe, ge] = S(X, le, V), [ce, Me] = S(X, le, V, !1);
    return {
      code: _,
      screenCoord: [Fe, ge],
      containerCoord: [ce, Me],
      svgCoord: [X, le]
    };
  }
  function R(_) {
    var k;
    const O = (k = g(P)) == null ? void 0 : k.querySelector(`.hexmapkeyboardnav button[data-id="${_}"]`);
    O instanceof HTMLButtonElement && O.focus();
  }
  Se(() => {
    v() && v()({ getHex: T, focusHex: R });
  });
  var L = nc(), B = _e(L);
  ea(B, {
    get colours() {
      return m();
    },
    get rootEl() {
      return g(P);
    },
    set rootEl(_) {
      j(P, Pe(_));
    }
  });
  var G = Q(B, 2), U = H(G);
  return Jn(U, {
    config: co,
    get layout() {
      return g(N);
    },
    get allocations() {
      return r();
    },
    get certainties() {
      return o();
    },
    get focuses() {
      return n();
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
      return f();
    },
    get onFocus() {
      return u();
    },
    get selectedElectorate() {
      return l();
    },
    get customViewbox() {
      return c();
    },
    get isStaticLayout() {
      return A();
    },
    get isInteractive() {
      return C();
    },
    get isSkippable() {
      return p();
    },
    get onViewboxChange() {
      return h();
    },
    get customElectorateAltText() {
      return x();
    },
    get showStateOutlinesOnTop() {
      return y();
    }
  }), I(G), $t(G, (_) => j(P, _), () => g(P)), F(e, L), ae({
    get allocations() {
      return r();
    },
    set allocations(_ = {}) {
      r(_), w();
    },
    get certainties() {
      return o();
    },
    set certainties(_ = {}) {
      o(_), w();
    },
    get focuses() {
      return n();
    },
    set focuses(_ = {}) {
      n(_), w();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(_ = !1) {
      a(_), w();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(_ = !1) {
      s(_), w();
    },
    get layout() {
      return i();
    },
    set layout(_ = "COUNTRY") {
      i(_), w();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(_ = null) {
      l(_), w();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(_ = null) {
      c(_), w();
    },
    get onClick() {
      return d();
    },
    set onClick(_ = () => {
    }) {
      d(_), w();
    },
    get onHover() {
      return f();
    },
    set onHover(_ = () => {
    }) {
      f(_), w();
    },
    get onFocus() {
      return u();
    },
    set onFocus(_ = () => {
    }) {
      u(_), w();
    },
    get onApi() {
      return v();
    },
    set onApi(_ = () => {
    }) {
      v(_), w();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(_ = () => {
    }) {
      h(_), w();
    },
    get isStaticLayout() {
      return A();
    },
    set isStaticLayout(_ = !0) {
      A(_), w();
    },
    get isInteractive() {
      return C();
    },
    set isInteractive(_ = !0) {
      C(_), w();
    },
    get isSkippable() {
      return p();
    },
    set isSkippable(_ = !0) {
      p(_), w();
    },
    get colours() {
      return m();
    },
    set colours(_) {
      m(_), w();
    },
    get customElectorateAltText() {
      return x();
    },
    set customElectorateAltText(_ = {}) {
      x(_), w();
    },
    get areStateOutlinesOnTop() {
      return y();
    },
    set areStateOutlinesOnTop(_) {
      y(_), w();
    }
  });
}
customElements.define("abcnews-hexmap", ve(
  ac,
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
    isInteractive: {},
    isSkippable: {},
    colours: {},
    customElectorateAltText: {},
    areStateOutlinesOnTop: {}
  },
  [],
  [],
  !0
));
export {
  ac as default
};
