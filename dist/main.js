(() => {
  'use strict';
  var n = {
      750: (n, e, t) => {
        t.d(e, { A: () => s });
        var o = t(601),
          r = t.n(o),
          i = t(314),
          a = t.n(i)()(r());
        a.push([
          n.id,
          ".calculator {\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  width: 300px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  border-radius: 50px;\n}\n\n.calculator__light {\n  color: black;\n  border: 5px solid #f1a33b;\n}\n\n.calculator__dark {\n  color: white;\n  background-color: black;\n  border: none;\n}\n",
          '',
        ]);
        const s = a;
      },
      496: (n, e, t) => {
        t.d(e, { A: () => s });
        var o = t(601),
          r = t.n(o),
          i = t(314),
          a = t.n(i)()(r());
        a.push([
          n.id,
          "html {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\na {\n  background-color: transparent;\n}\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\ntextarea {\n  overflow: auto;\n}\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none;\n}\n",
          '',
        ]);
        const s = a;
      },
      106: (n, e, t) => {
        t.d(e, { A: () => l });
        var o = t(601),
          r = t.n(o),
          i = t(314),
          a = t.n(i),
          s = t(496),
          c = a()(r());
        c.i(s.A),
          c.push([
            n.id,
            '#body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n',
            '',
          ]);
        const l = c;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  o &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (t += n(e)),
                  o && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, o, r, i) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var u = [].concat(n[l]);
                (o && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = i)),
                  t &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = t))
                      : (u[2] = t)),
                  r &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = r))
                      : (u[4] = ''.concat(r))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              l = o.base ? c[0] + o.base : c[0],
              u = i[l] || 0,
              d = ''.concat(l, ' ').concat(u);
            i[l] = u + 1;
            var p = t(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = r(f, o);
              (o.byIndex = s),
                e.splice(s, 0, { identifier: d, updater: m, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = o(n, r), l = 0; l < i.length; l++) {
              var u = t(i[l]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            i = c;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = '';
                t.supports && (o += '@supports ('.concat(t.supports, ') {')),
                  t.media && (o += '@media '.concat(t.media, ' {'));
                var r = void 0 !== t.layer;
                r &&
                  (o += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (o += t.css),
                  r && (o += '}'),
                  t.media && (o += '}'),
                  t.supports && (o += '}');
                var i = t.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var o = t(72),
    r = t.n(o),
    i = t(825),
    a = t.n(i),
    s = t(659),
    c = t.n(s),
    l = t(56),
    u = t.n(l),
    d = t(540),
    p = t.n(d),
    f = t(113),
    m = t.n(f),
    b = t(106),
    h = {};
  (h.styleTagTransform = m()),
    (h.setAttributes = u()),
    (h.insert = c().bind(null, 'head')),
    (h.domAPI = a()),
    (h.insertStyleElement = p()),
    r()(b.A, h),
    b.A && b.A.locals && b.A.locals;
  var y = t(750),
    v = {};
  (v.styleTagTransform = m()),
    (v.setAttributes = u()),
    (v.insert = c().bind(null, 'head')),
    (v.domAPI = a()),
    (v.insertStyleElement = p()),
    r()(y.A, v),
    y.A && y.A.locals && y.A.locals;
  const g = { tag: 'section', className: ['calculator', 'calculator__light'] };
  document.getElementById('body').appendChild(
    (function () {
      const n = (function (n) {
        const e = document.createElement(n.tag);
        return (
          n.className.forEach((n) => e.classList.add(n)),
          n.value && (e.value = n.value),
          n.text && (e.textContent = n.text),
          n.children &&
            Array.isArray(n.children) &&
            n.children.forEach((n) => e.appendChild(n)),
          e
        );
      })(g);
      return n;
    })()
  );
})();
