(() => {
  'use strict';
  var n = {
      750: (n, t, e) => {
        e.d(t, { A: () => s });
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r)()(a());
        i.push([
          n.id,
          ".calculator {\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  width: 300px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  border-radius: 50px;\n  border: 5px solid #f1a33b;\n  transition: border-color 0.5s ease-in;\n}\n\n.calculator__light {\n  color: #000000;\n}\n\n.calculator__dark {\n  color: #ffffff;\n  background-color: #000000;\n  border-color: #a5a5a5;\n}\n",
          '',
        ]);
        const s = i;
      },
      640: (n, t, e) => {
        e.d(t, { A: () => s });
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r)()(a());
        i.push([
          n.id,
          '.keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n}\n\n.keyboard_button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  font-size: 2em;\n  color: white;\n  background-color: #333333;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: filter 0.4s ease;\n}\n\n.keyboard button:nth-child(17) {\n  flex: 2;\n  justify-content: start;\n  padding-left: 15px;\n  border-radius: 50px;\n}\n\n.keyboard button:nth-child(1),\n.keyboard button:nth-child(2),\n.keyboard button:nth-child(3) {\n  font-size: 1.5em;\n  color: black;\n  background-color: #a5a5a5;\n}\n\n.keyboard button:nth-child(4),\n.keyboard button:nth-child(8),\n.keyboard button:nth-child(12),\n.keyboard button:nth-child(16),\n.keyboard button:nth-child(19) {\n  font-size: 2.5em;\n  background-color: #f1a33b;\n}\n\n.keyboard_button:hover {\n  filter: brightness(1.4);\n}\n',
          '',
        ]);
        const s = i;
      },
      220: (n, t, e) => {
        e.d(t, { A: () => b });
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r),
          s = e(417),
          l = e.n(s),
          c = new URL(e(26), e.b),
          u = i()(a()),
          d = l()(c);
        u.push([
          n.id,
          `.result_block {\n  flex: 0 0 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px;\n  overflow-x: hidden;\n}\n\n.theme_switcher {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  background-color: #f1a33b;\n  border-radius: 50px;\n  border: none;\n  transition: filter 0.4s ease;\n  background-image: url(${d});\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-color 0.5s ease-in;\n}\n\n.theme_switcher:hover {\n  filter: brightness(1.2);\n}\n\n.theme_switcher-logo_light {\n}\n\n.result_field {\n  align-self: flex-end;\n  font-size: 4em;\n  margin: unset;\n}\n`,
          '',
        ]);
        const b = u;
      },
      496: (n, t, e) => {
        e.d(t, { A: () => s });
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r)()(a());
        i.push([
          n.id,
          "html {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\na {\n  background-color: transparent;\n}\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\ntextarea {\n  overflow: auto;\n}\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none;\n}\n",
          '',
        ]);
        const s = i;
      },
      106: (n, t, e) => {
        e.d(t, { A: () => c });
        var o = e(601),
          a = e.n(o),
          r = e(314),
          i = e.n(r),
          s = e(496),
          l = i()(a());
        l.i(s.A),
          l.push([
            n.id,
            '#body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n',
            '',
          ]);
        const c = l;
      },
      314: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  o = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  o &&
                    (e += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (e += n(t)),
                  o && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, o, a, r) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var u = [].concat(n[c]);
                (o && i[u[0]]) ||
                  (void 0 !== r &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = r)),
                  e &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = e))
                      : (u[2] = e)),
                  a &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = a))
                      : (u[4] = ''.concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      417: (n) => {
        n.exports = function (n, t) {
          return (
            t || (t = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                t.hash && (n += t.hash),
                /["'() \t\n]|(%20)/.test(n) || t.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var r = {}, i = [], s = 0; s < n.length; s++) {
            var l = n[s],
              c = o.base ? l[0] + o.base : l[0],
              u = r[c] || 0,
              d = ''.concat(c, ' ').concat(u);
            r[c] = u + 1;
            var b = e(d),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== b) t[b].references++, t[b].updater(p);
            else {
              var f = a(p, o);
              (o.byIndex = s),
                t.splice(s, 0, { identifier: d, updater: f, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function a(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, a) {
          var r = o((n = n || []), (a = a || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < r.length; i++) {
              var s = e(r[i]);
              t[s].references--;
            }
            for (var l = o(n, a), c = 0; c < r.length; c++) {
              var u = e(r[c]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            r = l;
          };
        };
      },
      659: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      56: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var o = '';
                e.supports && (o += '@supports ('.concat(e.supports, ') {')),
                  e.media && (o += '@media '.concat(e.media, ' {'));
                var a = void 0 !== e.layer;
                a &&
                  (o += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {'
                  )),
                  (o += e.css),
                  a && (o += '}'),
                  e.media && (o += '}'),
                  e.supports && (o += '}');
                var r = e.sourceMap;
                r &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      ' */'
                    )),
                  t.styleTagTransform(o, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
      26: (n, t, e) => {
        n.exports = e.p + 'images/sun.c5e8ab814c3a0a97721a.svg';
      },
    },
    t = {};
  function e(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var r = (t[o] = { id: o, exports: {} });
    return n[o](r, r.exports, e), r.exports;
  }
  (e.m = n),
    (e.n = (n) => {
      var t = n && n.__esModule ? () => n.default : () => n;
      return e.d(t, { a: t }), t;
    }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (n) {
        if ('object' == typeof window) return window;
      }
    })()),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + '');
      var t = e.g.document;
      if (
        !n &&
        t &&
        (t.currentScript &&
          'SCRIPT' === t.currentScript.tagName.toUpperCase() &&
          (n = t.currentScript.src),
        !n)
      ) {
        var o = t.getElementsByTagName('script');
        if (o.length)
          for (var a = o.length - 1; a > -1 && (!n || !/^http(s?):/.test(n)); )
            n = o[a--].src;
      }
      if (!n)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (n = n
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = n);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0);
  var o = e(72),
    a = e.n(o),
    r = e(825),
    i = e.n(r),
    s = e(659),
    l = e.n(s),
    c = e(56),
    u = e.n(c),
    d = e(540),
    b = e.n(d),
    p = e(113),
    f = e.n(p),
    m = e(106),
    g = {};
  (g.styleTagTransform = f()),
    (g.setAttributes = u()),
    (g.insert = l().bind(null, 'head')),
    (g.domAPI = i()),
    (g.insertStyleElement = b()),
    a()(m.A, g),
    m.A && m.A.locals && m.A.locals;
  var h = e(750),
    y = {};
  function v(n) {
    const t = document.createElement(n.tag);
    return (
      n.className.forEach((n) => t.classList.add(n)),
      n.id && (t.id = n.id),
      n.value && (t.value = n.value),
      n.text && (t.textContent = n.text),
      n.children &&
        Array.isArray(n.children) &&
        n.children.forEach((n) => t.appendChild(n)),
      t
    );
  }
  (y.styleTagTransform = f()),
    (y.setAttributes = u()),
    (y.insert = l().bind(null, 'head')),
    (y.domAPI = i()),
    (y.insertStyleElement = b()),
    a()(h.A, y),
    h.A && h.A.locals && h.A.locals;
  var x = e(640),
    k = {};
  (k.styleTagTransform = f()),
    (k.setAttributes = u()),
    (k.insert = l().bind(null, 'head')),
    (k.domAPI = i()),
    (k.insertStyleElement = b()),
    a()(x.A, k),
    x.A && x.A.locals && x.A.locals;
  let _ = 0,
    w = 0,
    A = 0,
    N = '';
  const C = {
    tag: 'div',
    className: ['keyboard'],
    id: 'keyboard',
    children: [
      {
        tag: 'button',
        className: ['keyboard_button'],
        id: 'btn_AC',
        text: 'AC',
        value: 'AC',
      },
      {
        tag: 'button',
        className: ['keyboard_button'],
        text: '+/-',
        value: '+/-',
      },
      { tag: 'button', className: ['keyboard_button'], text: '%', value: '%' },
      { tag: 'button', className: ['keyboard_button'], text: '÷', value: '÷' },
      { tag: 'button', className: ['keyboard_button'], text: '7', value: 7 },
      { tag: 'button', className: ['keyboard_button'], text: '8', value: 8 },
      { tag: 'button', className: ['keyboard_button'], text: '9', value: 9 },
      { tag: 'button', className: ['keyboard_button'], text: '×', value: '×' },
      { tag: 'button', className: ['keyboard_button'], text: '4', value: 4 },
      { tag: 'button', className: ['keyboard_button'], text: '5', value: 5 },
      { tag: 'button', className: ['keyboard_button'], text: '6', value: 6 },
      { tag: 'button', className: ['keyboard_button'], text: '–', value: '–' },
      { tag: 'button', className: ['keyboard_button'], text: '1', value: 1 },
      { tag: 'button', className: ['keyboard_button'], text: '2', value: 2 },
      { tag: 'button', className: ['keyboard_button'], text: '3', value: 3 },
      { tag: 'button', className: ['keyboard_button'], text: '+', value: '+' },
      { tag: 'button', className: ['keyboard_button'], text: '0', value: 0 },
      { tag: 'button', className: ['keyboard_button'], text: '.', value: '.' },
      { tag: 'button', className: ['keyboard_button'], text: '=', value: '=' },
    ].map((n) => {
      const t = v(n);
      return (
        t.addEventListener('click', () =>
          (function (n) {
            const t = document.getElementById('result_field'),
              e = document.getElementById('btn_AC'),
              o = (n) => {
                (t.textContent = n), (w = +n);
              };
            if (e.value === n)
              return (
                (t.textContent = '0'), (A = 0), (_ = 0), (w = 0), void (N = '')
              );
            'number' == typeof n &&
              ('0' === t.textContent && (t.textContent = ''),
              (t.textContent += n),
              (w = +t.textContent)),
              'number' != typeof n &&
                n !== e.value &&
                ('+' === n &&
                  ('+' === N ? (_ += w) : (_ = w), (N = '+'), o('0')),
                '–' === n &&
                  ('–' === N ? (_ -= w) : (_ = w), (N = '–'), o('0')),
                '×' === n &&
                  ('x' === N && 0 !== _ ? (_ *= w) : (_ = w),
                  (N = 'x'),
                  o('0')),
                '÷' === n &&
                  ('/' === N && 0 !== _ ? (_ /= w) : (_ = w),
                  (N = '/'),
                  o('0')),
                '%' === n && ((A = w / 100), o(A)),
                '+/-' === n && ((t.textContent *= -1), (w = +t.textContent)),
                '.' === n && ((t.textContent += '.'), (w = +t.textContent)),
                '=' === n &&
                  ((A = (function (n, t, e, o) {
                    return '+' === n
                      ? t + e
                      : '–' === n
                        ? t - e
                        : 'x' === n
                          ? t * e
                          : '/' === n
                            ? t / e
                            : o;
                  })(N, _, w, A)),
                  o(A),
                  (_ = 0),
                  (N = '')));
          })(n.value)
        ),
        t
      );
    }),
  };
  var z = e(220),
    E = {};
  (E.styleTagTransform = f()),
    (E.setAttributes = u()),
    (E.insert = l().bind(null, 'head')),
    (E.domAPI = i()),
    (E.insertStyleElement = b()),
    a()(z.A, E),
    z.A && z.A.locals && z.A.locals;
  var T = e(26);
  const I = e.p + 'images/moon.935e4e9bf4ad5fe146db.svg',
    S = { tag: 'button', className: ['theme_switcher'], value: 'light' },
    j = {
      tag: 'div',
      className: ['result_block'],
      id: 'result_block',
      children: [
        (function () {
          const n = v(S);
          return (
            n.addEventListener('click', (n) =>
              (function (n) {
                const t = n.target,
                  e = document.getElementById('body'),
                  o = document.getElementById('calculator');
                o.classList.toggle('calculator__light'),
                  o.classList.toggle('calculator__dark'),
                  'light' === t.value
                    ? ((e.style.backgroundColor = '#000000'),
                      (t.style.backgroundImage = `url(${I})`),
                      (t.style.backgroundColor = '#a5a5a5'),
                      (t.value = 'dark'))
                    : ((e.style.backgroundColor = '#ffffff'),
                      (t.style.backgroundImage = `url(${T})`),
                      (t.style.backgroundColor = '#f1a33b'),
                      (t.value = 'light'));
              })(n)
            ),
            n
          );
        })(),
        v({
          tag: 'p',
          className: ['result_field'],
          id: 'result_field',
          text: '0',
        }),
      ],
    },
    M = {
      tag: 'section',
      className: ['calculator', 'calculator__light'],
      id: 'calculator',
      children: [v(j), v(C)],
    };
  document.getElementById('body').appendChild(v(M));
})();
