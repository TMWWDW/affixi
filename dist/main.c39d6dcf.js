// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.ts":[function(require,module,exports) {
var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var Affixi;

(function (Affixi) {
  var Types;

  (function (Types) {
    var Case;

    (function (Case) {
      /** İsmin Yalın Hâli */
      Case[Case["Absolute"] = 0] = "Absolute";
      /** İsmin Belirtme Hâli */

      Case[Case["Accusative"] = 1] = "Accusative";
      /** İsmin Ayrılma Hâli */

      Case[Case["Ablative"] = 2] = "Ablative";
      /** İsmin Bulunma Hâli */

      Case[Case["Locative"] = 3] = "Locative";
      /** İsmin Vasıta Hâli */

      Case[Case["Instrumental"] = 4] = "Instrumental";
      /** İsmin Yönelme Hâli */

      Case[Case["Dative"] = 5] = "Dative";
    })(Case = Types.Case || (Types.Case = {}));

    var Pronoun;

    (function (Pronoun) {
      /** Birinci Tekil Şahıs */
      Pronoun[Pronoun["SingularFirst"] = 0] = "SingularFirst";
      /** İkinci Tekil Şahıs */

      Pronoun[Pronoun["SingularSecond"] = 1] = "SingularSecond";
      /** Üçüncü Tekil Şahıs */

      Pronoun[Pronoun["SingularThird"] = 2] = "SingularThird";
      /** Birinci Çoğul Şahıs */

      Pronoun[Pronoun["PluralFirst"] = 3] = "PluralFirst";
      /** İkinci Çoğul Şahıs */

      Pronoun[Pronoun["PluralSecond"] = 4] = "PluralSecond";
      /** Üçüncü Çoğul Şahıs */

      Pronoun[Pronoun["PluralThird"] = 5] = "PluralThird";
    })(Pronoun = Types.Pronoun || (Types.Pronoun = {}));
  })(Types = Affixi.Types || (Affixi.Types = {}));

  var Sounds =
  /** @class */
  function () {
    function Sounds() {}

    Sounds.UnvoicedStopConsonants = ["p", "ç", "t", "k"];
    Sounds.UnvoicedContinuousConsonants = ["f", "s", "ş", "h"];
    Sounds.UnvoicedConsonants = __spreadArrays(Sounds.UnvoicedContinuousConsonants, Sounds.UnvoicedStopConsonants);
    Sounds.VoicedStopConsonants = ["b", "c", "d", "ğ"];
    Sounds.RoundedVowels = ["o", "u", "ö", "ü"];
    Sounds.UnroundedVowels = ["a", "ı", "e", "i"];
    Sounds.BackVowels = ["e", "i", "ö", "ü"];
    Sounds.FrontVowels = ["a", "ı", "o", "u"];
    Sounds.Vowels = __spreadArrays(Sounds.FrontVowels, Sounds.BackVowels);
    return Sounds;
  }();

  Affixi.Sounds = Sounds;

  var Word =
  /** @class */
  function () {
    function Word() {}

    Word.GetLastComponents = function (word) {
      var input = word.split("").reverse().join("");
      var index = 0;
      var letter = input[0];
      var vowel = input[index];

      while (!Sounds.Vowels.includes(vowel)) {
        index++;
        vowel = input[index];
      }

      return {
        letter: letter,
        vowel: vowel
      };
    };

    Word.GetSyllableCount = function (word) {
      var count = 0;
      var input = word.split("");
      input.forEach(function (letter) {
        if (Sounds.Vowels.includes(letter.toLowerCase())) count += 1;
      });
      return count;
    };

    return Word;
  }();

  Affixi.Word = Word;

  var PossessiveSuffix =
  /** @class */
  function () {
    function PossessiveSuffix() {
      this.pronoun = Types.Pronoun.SingularFirst;
    }

    PossessiveSuffix.prototype.case = function (pronoun) {
      this.pronoun = pronoun;
      return this;
    };

    PossessiveSuffix.prototype.of = function (word, isProperNoun) {
      if (isProperNoun === void 0) {
        isProperNoun = false;
      }

      var result = "";
      var suffix = "";
      if (isProperNoun) suffix += "'";
      suffix += this.suffix(word);
      var letter = Word.GetLastComponents(word).letter;

      if (Word.GetSyllableCount(word) > 1 && Sounds.UnvoicedStopConsonants.includes(letter) && this.pronoun !== Types.Pronoun.PluralThird) {
        var i = Sounds.UnvoicedStopConsonants.indexOf(word[word.length - 1]);
        var voicedCounterPart = void 0;

        if (word.split("").slice(word.length - 2, word.length).join("") === "nk") {
          voicedCounterPart = "g";
        } else {
          voicedCounterPart = Sounds.VoicedStopConsonants[i];
        }

        word = word.split("").splice(0, word.length - 1).join("") + voicedCounterPart;
      }

      result = word + suffix;
      return result;
    };

    PossessiveSuffix.prototype.suffix = function (word) {
      var _a = Word.GetLastComponents(word),
          letter = _a.letter,
          vowel = _a.vowel;

      var suffix = "";

      if (!Sounds.Vowels.includes(letter) && this.pronoun !== Types.Pronoun.PluralThird) {
        if (Sounds.FrontVowels.includes(vowel)) {
          suffix += "ı";
        } else if (Sounds.BackVowels.includes(vowel)) {
          suffix += "i";
        }
      }

      switch (this.pronoun) {
        case 0:
          suffix += "m";
          break;

        case 1:
          suffix += "n";
          break;

        case 2:
          if (Sounds.Vowels.includes(letter)) {
            suffix += "s";

            if (Sounds.FrontVowels.includes(vowel)) {
              suffix += "ı";
            } else if (Sounds.BackVowels.includes(vowel)) {
              suffix += "i";
            }
          }

          break;

        case 3:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "mız";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "miz";
          }

          break;

        case 4:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "nız";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "niz";
          }

          break;

        case 5:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "ları";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "leri";
          }

          break;
      }

      return suffix;
    };

    return PossessiveSuffix;
  }();

  Affixi.PossessiveSuffix = PossessiveSuffix;

  var CaseSuffix =
  /** @class */
  function () {
    function CaseSuffix() {
      this.type = Types.Case.Absolute;
    }

    CaseSuffix.prototype.case = function (type) {
      this.type = type;
      return this;
    };

    CaseSuffix.prototype.of = function (word, isProperNoun) {
      if (isProperNoun === void 0) {
        isProperNoun = false;
      }

      var result = "";
      var suffix = "";
      if (isProperNoun) suffix += "'";

      switch (this.type) {
        case Types.Case.Absolute:
          result = this.absolute(word);
          break;

        case Types.Case.Accusative:
          suffix += this.accusative(word);
          result = word + suffix;
          break;

        case Types.Case.Ablative:
          suffix += this.ablative(word);
          result = word + suffix;
          break;

        case Types.Case.Locative:
          suffix += this.locative(word);
          result = word + suffix;
          break;

        case Types.Case.Instrumental:
          suffix += this.instrumental(word);
          result = word + suffix;
          break;

        case Types.Case.Dative:
          suffix += this.dative(word);
          result = word + suffix;
          break;
      }

      return result;
    };

    CaseSuffix.prototype.absolute = function (word) {
      return word;
    };

    CaseSuffix.prototype.accusative = function (word) {
      var _a = Word.GetLastComponents(word),
          letter = _a.letter,
          vowel = _a.vowel;

      var suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }

      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "ı";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "i";
      }

      return suffix;
    };

    CaseSuffix.prototype.ablative = function (word) {
      return this.locative(word) + "n";
    };

    CaseSuffix.prototype.locative = function (word) {
      var _a = Word.GetLastComponents(word),
          letter = _a.letter,
          vowel = _a.vowel;

      var suffix = "";

      if (Sounds.UnvoicedConsonants.includes(letter)) {
        suffix += "t";
      } else {
        suffix += "d";
      }

      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "a";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "e";
      }

      return suffix;
    };

    CaseSuffix.prototype.instrumental = function (word) {
      var _a = Word.GetLastComponents(word),
          letter = _a.letter,
          vowel = _a.vowel;

      var suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }

      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "la";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "le";
      }

      return suffix;
    };

    CaseSuffix.prototype.dative = function (word) {
      var _a = Word.GetLastComponents(word),
          letter = _a.letter,
          vowel = _a.vowel;

      var suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }

      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "a";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "e";
      }

      return suffix;
    };

    return CaseSuffix;
  }();

  Affixi.CaseSuffix = CaseSuffix;

  function chain(word) {
    var possessive = new PossessiveSuffix();

    var _case = new CaseSuffix();

    var possessiveSuffix = function possessiveSuffix(type) {
      word = possessive.case(type).of(word);
      return {
        possessiveSuffix: possessiveSuffix,
        caseSuffix: caseSuffix,
        word: word
      };
    };

    var caseSuffix = function caseSuffix(type) {
      word = _case.case(type).of(word);
      return {
        possessiveSuffix: possessiveSuffix,
        caseSuffix: caseSuffix,
        word: word
      };
    };

    return {
      possessiveSuffix: possessiveSuffix,
      caseSuffix: caseSuffix,
      word: word
    };
  }

  Affixi.chain = chain;
})(Affixi || (Affixi = {}));
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62414" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map