/*!
 * domo.js v2.5.8
 * Optional utility library for Custom Apps
 */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.domo = e() : t.domo = e() }(this, function() {
    return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports }
        var n = {};
        return e.m = t, e.c = n, e.p = "/dist/", e(0)
    }([function(t, e, n) {
        "use strict";

        function r() {}

        function o() {
            var t = location.search.substr(1),
                e = {};
            return t.split("&").forEach(function(t) {
                var n = t.split("=");
                e[n[0]] = decodeURIComponent(n[1])
            }), e
        }

        function i(t, e, n) { e.indexOf("data/v1") !== -1 && ("array-of-arrays" === n.format ? t.setRequestHeader("Accept", "application/json") : "csv" === n.format ? t.setRequestHeader("Accept", "text/csv") : "excel" === n.format ? t.setRequestHeader("Accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") : t.setRequestHeader("Accept", "application/array-of-objects")) }
        n(1).polyfill(), t.exports = r, r.get = function(t, e) {
            return e = e || {}, new Promise(function(n, r) {
                var o = new XMLHttpRequest;
                o.open("GET", t), i(o, t, e), o.onload = function() {
                    var t;
                    if (200 == o.status) {
                        "csv" !== e.format && "excel" !== e.format || n(o.response);
                        try { t = JSON.parse(o.response) } catch (i) { return void r(Error("Invalid JSON response")) }
                        n(t)
                    } else r(Error(o.statusText))
                }, o.onerror = function() { r(Error("Network Error")) }, o.send()
            })
        }, r.getAll = function(t, e) { return Promise.all(t.map(function(t) { return r.get(t, e) })) }, r.onDataUpdate = function(t) {
            window.addEventListener("message", function(e) {
                var n = JSON.parse(e.data),
                    r = JSON.stringify({ event: "ack", alias: n.alias });
                e.source.postMessage(r, e.origin), t(n.alias)
            })
        }, r.navigate = function(t, e) {
            var n = JSON.stringify({ event: "navigate", url: t, isNewWindow: e });
            window.parent.postMessage(n, "*")
        }, r.env = o()
    }, function(t, e, n) {
        var r;
        (function(t, o, i) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   3.2.1
             */
            (function() {
                "use strict";

                function s(t) { return "function" == typeof t || "object" == typeof t && null !== t }

                function u(t) { return "function" == typeof t }

                function c(t) { Q = t }

                function a(t) { tt = t }

                function f() { return function() { t.nextTick(v) } }

                function l() { return function() { B(v) } }

                function h() {
                    var t = 0,
                        e = new rt(v),
                        n = document.createTextNode("");
                    return e.observe(n, { characterData: !0 }),
                        function() { n.data = t = ++t % 2 }
                }

                function p() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = v,
                        function() { t.port2.postMessage(0) }
                }

                function d() { return function() { setTimeout(v, 1) } }

                function v() {
                    for (var t = 0; t < $; t += 2) {
                        var e = st[t],
                            n = st[t + 1];
                        e(n), st[t] = void 0, st[t + 1] = void 0
                    }
                    $ = 0
                }

                function y() { try { var t = n(5); return B = t.runOnLoop || t.runOnContext, l() } catch (e) { return d() } }

                function m(t, e) {
                    var n = this,
                        r = new this.constructor(w);
                    void 0 === r[at] && J(r);
                    var o = n._state;
                    if (o) {
                        var i = arguments[o - 1];
                        tt(function() { R(o, r, i, n._result) })
                    } else k(n, r, t, e);
                    return r
                }

                function _(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var n = new e(w); return j(n, t), n }

                function w() {}

                function g() { return new TypeError("You cannot resolve a promise with itself") }

                function b() { return new TypeError("A promises callback cannot return that same promise.") }

                function A(t) { try { return t.then } catch (e) { return pt.error = e, pt } }

                function x(t, e, n, r) { try { t.call(e, n, r) } catch (o) { return o } }

                function E(t, e, n) {
                    tt(function(t) {
                        var r = !1,
                            o = x(n, e, function(n) { r || (r = !0, e !== n ? j(t, n) : P(t, n)) }, function(e) { r || (r = !0, M(t, e)) }, "Settle: " + (t._label || " unknown promise"));
                        !r && o && (r = !0, M(t, o))
                    }, t)
                }

                function T(t, e) { e._state === lt ? P(t, e._result) : e._state === ht ? M(t, e._result) : k(e, void 0, function(e) { j(t, e) }, function(e) { M(t, e) }) }

                function S(t, e, n) { e.constructor === t.constructor && n === ut && constructor.resolve === ct ? T(t, e) : n === pt ? M(t, pt.error) : void 0 === n ? P(t, e) : u(n) ? E(t, e, n) : P(t, e) }

                function j(t, e) { t === e ? M(t, g()) : s(e) ? S(t, e, A(e)) : P(t, e) }

                function O(t) { t._onerror && t._onerror(t._result), N(t) }

                function P(t, e) { t._state === ft && (t._result = e, t._state = lt, 0 !== t._subscribers.length && tt(N, t)) }

                function M(t, e) { t._state === ft && (t._state = ht, t._result = e, tt(O, t)) }

                function k(t, e, n, r) {
                    var o = t._subscribers,
                        i = o.length;
                    t._onerror = null, o[i] = e, o[i + lt] = n, o[i + ht] = r, 0 === i && t._state && tt(N, t)
                }

                function N(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var r, o, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? R(n, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function C() { this.error = null }

                function L(t, e) { try { return t(e) } catch (n) { return dt.error = n, dt } }

                function R(t, e, n, r) {
                    var o, i, s, c, a = u(n);
                    if (a) { if (o = L(n, r), o === dt ? (c = !0, i = o.error, o = null) : s = !0, e === o) return void M(e, b()) } else o = r, s = !0;
                    e._state !== ft || (a && s ? j(e, o) : c ? M(e, i) : t === lt ? P(e, o) : t === ht && M(e, o))
                }

                function q(t, e) { try { e(function(e) { j(t, e) }, function(e) { M(t, e) }) } catch (n) { M(t, n) } }

                function H() { return vt++ }

                function J(t) { t[at] = vt++, t._state = void 0, t._result = void 0, t._subscribers = [] }

                function U(t) { return new gt(this, t).promise }

                function Y(t) { var e = this; return new e(Z(t) ? function(n, r) { for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r) } : function(t, e) { e(new TypeError("You must pass an array to race.")) }) }

                function D(t) {
                    var e = this,
                        n = new e(w);
                    return M(n, t), n
                }

                function F() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

                function I() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

                function W(t) { this[at] = H(), this._result = this._state = void 0, this._subscribers = [], w !== t && ("function" != typeof t && F(), this instanceof W ? q(this, t) : I()) }

                function G(t, e) { this._instanceConstructor = t, this.promise = new t(w), this.promise[at] || J(this.promise), Z(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : M(this.promise, K()) }

                function K() { return new Error("Array Methods must be provided an Array") }

                function X() {
                    var t;
                    if ("undefined" != typeof o) t = o;
                    else if ("undefined" != typeof self) t = self;
                    else try { t = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                    var n = t.Promise;
                    n && "[object Promise]" === Object.prototype.toString.call(n.resolve()) && !n.cast || (t.Promise = wt)
                }
                var z;
                z = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) };
                var B, Q, V, Z = z,
                    $ = 0,
                    tt = function(t, e) { st[$] = t, st[$ + 1] = e, $ += 2, 2 === $ && (Q ? Q(v) : V()) },
                    et = "undefined" != typeof window ? window : void 0,
                    nt = et || {},
                    rt = nt.MutationObserver || nt.WebKitMutationObserver,
                    ot = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                    it = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    st = new Array(1e3);
                V = ot ? f() : rt ? h() : it ? p() : void 0 === et ? y() : d();
                var ut = m,
                    ct = _,
                    at = Math.random().toString(36).substring(16),
                    ft = void 0,
                    lt = 1,
                    ht = 2,
                    pt = new C,
                    dt = new C,
                    vt = 0,
                    yt = U,
                    mt = Y,
                    _t = D,
                    wt = W;
                W.all = yt, W.race = mt, W.resolve = ct, W.reject = _t, W._setScheduler = c, W._setAsap = a, W._asap = tt, W.prototype = { constructor: W, then: ut, "catch": function(t) { return this.then(null, t) } };
                var gt = G;
                G.prototype._enumerate = function() { for (var t = this.length, e = this._input, n = 0; this._state === ft && n < t; n++) this._eachEntry(e[n], n) }, G.prototype._eachEntry = function(t, e) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === ct) {
                        var o = A(t);
                        if (o === ut && t._state !== ft) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                        else if (n === wt) {
                            var i = new n(w);
                            S(i, t, o), this._willSettleAt(i, e)
                        } else this._willSettleAt(new n(function(e) { e(t) }), e)
                    } else this._willSettleAt(r(t), e)
                }, G.prototype._settledAt = function(t, e, n) {
                    var r = this.promise;
                    r._state === ft && (this._remaining--, t === ht ? M(r, n) : this._result[e] = n), 0 === this._remaining && P(r, this._result)
                }, G.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    k(t, void 0, function(t) { n._settledAt(lt, e, t) }, function(t) { n._settledAt(ht, e, t) })
                };
                var bt = X,
                    At = { Promise: wt, polyfill: bt };
                n(3).amd ? (r = function() { return At }.call(e, n, e, i), !(void 0 !== r && (i.exports = r))) : "undefined" != typeof i && i.exports ? i.exports = At : "undefined" != typeof this && (this.ES6Promise = At), bt()
            }).call(this)
        }).call(e, n(2), function() { return this }(), n(4)(t))
    }, function(t, e) {
        function n(t) { if (c === setTimeout) return setTimeout(t, 0); try { return c(t, 0) } catch (e) { try { return c.call(null, t, 0) } catch (e) { return c.call(this, t, 0) } } }

        function r(t) { if (a === clearTimeout) return clearTimeout(t); try { return a(t) } catch (e) { try { return a.call(null, t) } catch (e) { return a.call(this, t) } } }

        function o() { p && l && (p = !1, l.length ? h = l.concat(h) : d = -1, h.length && i()) }

        function i() {
            if (!p) {
                var t = n(o);
                p = !0;
                for (var e = h.length; e;) {
                    for (l = h, h = []; ++d < e;) l && l[d].run();
                    d = -1, e = h.length
                }
                l = null, p = !1, r(t)
            }
        }

        function s(t, e) { this.fun = t, this.array = e }

        function u() {}
        var c, a, f = t.exports = {};
        ! function() { try { c = setTimeout } catch (t) { c = function() { throw new Error("setTimeout is not defined") } } try { a = clearTimeout } catch (t) { a = function() { throw new Error("clearTimeout is not defined") } } }();
        var l, h = [],
            p = !1,
            d = -1;
        f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            h.push(new s(t, e)), 1 !== h.length || p || n(i)
        }, s.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function(t) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(t) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 }
    }, function(t, e) { t.exports = function() { throw new Error("define cannot be used indirect") } }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t } }, function(t, e) {}])
});
//# sourceMappingURL=domo.js.map