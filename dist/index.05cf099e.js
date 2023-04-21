// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kS06O":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _login = require("./views/login");
var _loginDefault = parcelHelpers.interopDefault(_login);
var _navListView = require("./views/navListView");
var _navListViewDefault = parcelHelpers.interopDefault(_navListView);
var _addQuestion = require("./views/addQuestion");
var _addQuestionDefault = parcelHelpers.interopDefault(_addQuestion);
var _status = require("./views/status");
var _statusDefault = parcelHelpers.interopDefault(_status);
var _countQuestion = require("./views/countQuestion");
var _countQuestionDefault = parcelHelpers.interopDefault(_countQuestion);
const controlAddAnswers = (id, ans)=>{
    _model.updateStatus(id, ans);
    _addQuestionDefault.default.display(_model.state.addQuestions);
    _statusDefault.default.displayView(_model.state.progress);
    _statusDefault.default.addClickHandler(controlAddReset);
};
const controlAddReset = ()=>{
    _model.reset();
    _addQuestionDefault.default.display(_model.state.addQuestions);
};
const controlCountAnswers = (id, ans)=>{
    _model.updateCountState(id, ans);
    _countQuestionDefault.default.display(_model.state.countQuestions);
    _statusDefault.default.displayView(_model.state.progress);
    _statusDefault.default.addClickHandler(controlCountReset);
};
const controlCountReset = ()=>{
    _model.reset('COUNT');
    _countQuestionDefault.default.display(_model.state.countQuestions);
};
const controlLogin = (isLoggedIn, loggedInUser)=>{
    _model.login(isLoggedIn, loggedInUser);
    if (!isLoggedIn) window.location.reload();
    launchApp();
};
const loginHandler = (userData)=>{
    _loginDefault.default.displayView(userData);
    _loginDefault.default.addChangeHandler(controlLogin);
};
const launchGameForJewel = ()=>{
    _model.createInitalState();
    _navListViewDefault.default.displayView(_model.state.users);
    _navListViewDefault.default.addClickHandler(controlLogin);
    _addQuestionDefault.default.display(_model.state.addQuestions);
    _addQuestionDefault.default.addChangeHandler(controlAddAnswers);
};
const launchGameForJaiden = ()=>{
    _model.createCountState();
    _navListViewDefault.default.displayView(_model.state.users);
    _navListViewDefault.default.addClickHandler(controlLogin);
    _countQuestionDefault.default.display(_model.state.countQuestions);
    _countQuestionDefault.default.addChangeHandler(controlCountAnswers);
};
const launchApp = ()=>{
    if (!_model.isLoggedIn()) {
        _navListViewDefault.default.displayView(_model.state.users);
        loginHandler(_model.state.users);
        return;
    }
    switch(_model.getLoggedInUser()){
        case 'Jewel':
            launchGameForJewel();
            break;
        case 'Jaiden':
            launchGameForJaiden();
            break;
    }
};
(function init() {
    launchApp();
})();

},{"./model":"1pVJj","./views/login":"8R48p","./views/navListView":"ewsTZ","./views/addQuestion":"aJeLo","./views/status":"ijVUu","./views/countQuestion":"6B17X","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "createInitalState", ()=>createInitalState
);
parcelHelpers.export(exports, "updateStatus", ()=>updateStatus
);
parcelHelpers.export(exports, "progressTracker", ()=>progressTracker
);
parcelHelpers.export(exports, "reset", ()=>reset
);
parcelHelpers.export(exports, "login", ()=>login
);
parcelHelpers.export(exports, "isLoggedIn", ()=>isLoggedIn1
);
parcelHelpers.export(exports, "getLoggedInUser", ()=>getLoggedInUser
);
parcelHelpers.export(exports, "createCountState", ()=>createCountState
);
parcelHelpers.export(exports, "updateCountState", ()=>updateCountState
);
var _config = require("./config");
var _helper = require("./helper");
var _userConfig = require("./userConfig");
var _userConfigDefault = parcelHelpers.interopDefault(_userConfig);
var _countConfig = require("./countConfig");
const state = {
    isLoggedIn: false,
    addQuestions: [],
    countQuestions: [],
    progress: {
        remaining: 0,
        completed: 0
    },
    users: _userConfigDefault.default,
    loggedInUser: ''
};
const createInitalState = ()=>{
    while(state.addQuestions.length < _config.MAX_NO_PROBLEM){
        const question = {
            id: state.addQuestions.length + 1,
            number1: _helper.generateNumber(_config.MAX_NUMBER),
            number2: _helper.generateNumber(_config.MAX_NUMBER)
        };
        question.ans = question.number1 + question.number2;
        state.addQuestions.push(question);
    }
};
const updateStatus = (id, ans)=>{
    const question1 = state.addQuestions.find((question)=>question.id === id
    );
    if (!question1) return;
    if (question1.ans === ans) question1.correct = true;
    progressTracker();
};
const progressTracker = (type = 'ADD')=>{
    const questions = type === 'ADD' ? state.addQuestions : state.countQuestions;
    const completed = questions.filter((question)=>question.correct === true
    );
    state.progress.remaining = questions.length - completed.length;
    state.progress.completed = completed.length;
};
const reset = (type = 'ADD')=>{
    state.progress.completed = 0;
    state.progress.remaining = 0;
    if (type === 'ADD') {
        state.addQuestions.length = 0;
        createInitalState();
    } else {
        state.countQuestions.length = 0;
        createCountState();
    }
};
const login = (isLoggedIn = false, loggedInUser)=>{
    if (!loggedInUser) return;
    state.isLoggedIn = isLoggedIn;
    setUser(isLoggedIn, loggedInUser);
};
const setUser = (isLoggedIn, loggedInUser)=>{
    const userIndex = state.users.findIndex((user)=>user.name === loggedInUser
    );
    state.users[userIndex].active = isLoggedIn;
    state.loggedInUser = loggedInUser;
};
const isLoggedIn1 = ()=>{
    return state.isLoggedIn;
};
const getLoggedInUser = ()=>{
    return state.loggedInUser;
};
const createCountState = ()=>{
    while(state.countQuestions.length < _config.MAX_NO_PROBLEM){
        const question = {
            id: state.countQuestions.length + 1,
            number: _helper.generateNumber(9) + 1,
            img: _countConfig.getImagePath()
        };
        question.ans = question.number;
        state.countQuestions.push(question);
    }
};
const updateCountState = (id, ans)=>{
    const question2 = state.countQuestions.find((question)=>question.id === id
    );
    if (!question2) return;
    if (question2.number === ans) question2.correct = true;
    progressTracker('COUNT');
};

},{"./config":"6V52N","./helper":"gDUlg","./userConfig":"i8ige","./countConfig":"gqUoy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6V52N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_NO_PROBLEM", ()=>MAX_NO_PROBLEM
);
parcelHelpers.export(exports, "MAX_NUMBER", ()=>MAX_NUMBER
);
parcelHelpers.export(exports, "MAX_COUNT", ()=>MAX_COUNT
);
const MAX_NO_PROBLEM = 5;
const MAX_NUMBER = 25;
const MAX_COUNT = 8;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gDUlg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateNumber", ()=>generateNumber
);
const generateNumber = (number)=>Math.trunc(Math.random() * number)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i8ige":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _donaldJpg = require("url:../img/donald.jpg");
var _donaldJpgDefault = parcelHelpers.interopDefault(_donaldJpg);
var _minniJpg = require("url:../img/minni.jpg");
var _minniJpgDefault = parcelHelpers.interopDefault(_minniJpg);
const users = [
    {
        name: 'Jewel',
        active: false,
        img: _minniJpgDefault.default
    },
    {
        name: 'Jaiden',
        active: false,
        img: _donaldJpgDefault.default
    }, 
];
exports.default = users;

},{"url:../img/donald.jpg":"lXr7X","url:../img/minni.jpg":"6lIpL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lXr7X":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "donald.cda73ae2.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6lIpL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "minni.94c1c3f5.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gqUoy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getImagePath", ()=>getImagePath
);
var _mangoSvg = require("url:../img/svg/mango.svg");
var _mangoSvgDefault = parcelHelpers.interopDefault(_mangoSvg);
var _orangeSvg = require("url:../img/svg/orange.svg");
var _orangeSvgDefault = parcelHelpers.interopDefault(_orangeSvg);
var _roboSvg = require("url:../img/svg/robo.svg");
var _roboSvgDefault = parcelHelpers.interopDefault(_roboSvg);
var _appleSvg = require("url:../img/svg/apple.svg");
var _appleSvgDefault = parcelHelpers.interopDefault(_appleSvg);
var _cherriesSvg = require("url:../img/svg/cherries.svg");
var _cherriesSvgDefault = parcelHelpers.interopDefault(_cherriesSvg);
var _flowerSvg = require("url:../img/svg/flower.svg");
var _flowerSvgDefault = parcelHelpers.interopDefault(_flowerSvg);
var _grapesSvg = require("url:../img/svg/grapes.svg");
var _grapesSvgDefault = parcelHelpers.interopDefault(_grapesSvg);
var _roundSvg = require("url:../img/svg/round.svg");
var _roundSvgDefault = parcelHelpers.interopDefault(_roundSvg);
var _santaSvg = require("url:../img/svg/santa.svg");
var _santaSvgDefault = parcelHelpers.interopDefault(_santaSvg);
var _helper = require("./helper");
const imageCountConfig = [
    {
        img: _mangoSvgDefault.default
    },
    {
        img: _orangeSvgDefault.default
    },
    {
        img: _roboSvgDefault.default
    },
    {
        img: _appleSvgDefault.default
    },
    {
        img: _cherriesSvgDefault.default
    },
    {
        img: _flowerSvgDefault.default
    },
    {
        img: _grapesSvgDefault.default
    },
    {
        img: _roundSvgDefault.default
    },
    {
        img: _santaSvgDefault.default
    }, 
];
const getImagePath = ()=>{
    const length = imageCountConfig.length;
    const index = _helper.generateNumber(length);
    return imageCountConfig[index].img;
};

},{"url:../img/svg/mango.svg":"9vI4m","url:../img/svg/orange.svg":"l674r","url:../img/svg/robo.svg":"iIxe8","url:../img/svg/apple.svg":"jzgdv","url:../img/svg/cherries.svg":"aZTfR","url:../img/svg/flower.svg":"3azNp","url:../img/svg/grapes.svg":"lmiMm","url:../img/svg/round.svg":"3Yitr","url:../img/svg/santa.svg":"bUgHu","./helper":"gDUlg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9vI4m":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "mango.24431f59.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"l674r":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "orange.5326535f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iIxe8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "robo.c70f8c3a.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jzgdv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "apple.554a912e.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aZTfR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "cherries.b46d5685.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3azNp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "flower.b29dba65.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lmiMm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "grapes.8ca5327c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3Yitr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "round.7602ab37.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bUgHu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "santa.bb8f204f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8R48p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class Login extends _viewsDefault.default {
    _parentContainer = document.querySelector('.question');
    _generateMarkups() {
        return `
    <div class='login'>
    <h2>Login</h2>
    <div class='users-container'>
      <ul class='users'>
        ${this._data.map((user)=>this._generateMarkup(user)
        ).join()}
      </ul>
    </div>
    </div>
    `;
    }
    _generateMarkup(user) {
        return `
    <li data-user=${user.name} class='user'>
      <img src='${user.img}' alt='Loding...' />
      <p class='user-name'>${user.name}</p>
    </li>
    `;
    }
    addChangeHandler(loginHandler) {
        this._parentContainer.addEventListener('click', function(event) {
            const loginBtn = event.target.closest('.user');
            if (!loginBtn) return;
            const loggedInUser = loginBtn.dataset.user;
            loginHandler(true, loggedInUser);
        });
    }
}
exports.default = new Login();

},{"./views":"MDRXV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"MDRXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    display(data) {
        this._data = data;
        this.displayView(data);
        this._addEvents();
    }
    displayView(data1) {
        this._data = data1;
        const markup = this._generateMarkups();
        this._clear();
        this._parentContainer.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentContainer.innerHTML = '';
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ewsTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _iconsSvg = require("url:./../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class NavLinks extends _viewsDefault.default {
    _parentContainer = document.querySelector('.nav-list');
    _generateMarkups() {
        // console.log(this._data);
        return this._data.map((user)=>this._generateMarkup(user)
        );
    }
    _generateMarkup(user) {
        return user.active ? `
    <li class="nav-item ${user.active ? '' : ''}">
    <button class="nav-btn nav-btn">
      <svg>
        <use href="${_iconsSvgDefault.default}#icon-user"></use>
      </svg>
      <span>${user.name}</span>
    </button>
    <div class='user-options'>
        <ul>
            <li class='logout'>
                Logout
            </li>
        </ul>
    </div>
  </li>
    ` : ``;
    }
    _addEvents() {
        this.addClickHandler();
    }
    addClickHandler(loginHandler) {
        this._parentContainer.addEventListener('click', function(event) {
            const navLink = event.target.closest('.user-options');
            if (!navLink) return;
            loginHandler();
        });
    }
}
exports.default = new NavLinks();

},{"./views":"MDRXV","url:./../../img/icons.svg":"5jwFy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5jwFy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "icons.e7078503.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aJeLo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _question = require("./question");
var _questionDefault = parcelHelpers.interopDefault(_question);
var _tickPng = require("url:../../img/tick.png");
var _tickPngDefault = parcelHelpers.interopDefault(_tickPng);
class AddQuestion extends _questionDefault.default {
    _generateMarkup(que) {
        return `
      <div data-id=${que.id} data-ans=${que.ans} 
       class="que-container ${que.correct ? 'complete' : ''}">
        <span class="number">${que.number1}</span>
        <span class="number">+</span>
        <span class="number">${que.number2}</span>
        <span class="number">=</span>
        <div class="answer ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="answer__field"
            show=${!que.correct}
            placeholder="Answer here..."
          />
        </div>
        <div class="ans-container" ${que.correct ? '' : 'hidden'}>
            <span class="ans-number">${que.ans}</span>
            <img src="${_tickPngDefault.default}" alt="Success" class="tick-logo" />
        </div>
      </div>`;
    }
}
exports.default = new AddQuestion();

},{"./question":"11Iuu","url:../../img/tick.png":"cq0aw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"11Iuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class Question extends _viewsDefault.default {
    _parentContainer = document.querySelector('.question');
    _generateMarkups() {
        return this._data.map((question)=>this._generateMarkup(question)
        ).join();
    }
    _focusInput() {
        const inputs = Array.from(this._parentContainer.getElementsByTagName('input')).filter((ele)=>ele.getAttribute('show') === 'true'
        );
        if (inputs.length === 0) return;
        inputs[0].focus();
    }
    _addEvents() {
        this._focusInput();
    }
    addChangeHandler(handler) {
        this._parentContainer.addEventListener('input', function(event) {
            const queContainer = event.target.closest('.que-container') || event.target.closest('.count-container');
            const answer = event.target.value;
            const questionID = queContainer.dataset.id;
            const correctAnswer = queContainer.dataset.ans;
            if (correctAnswer === answer) handler(+questionID, +event.target.value);
        });
    }
}
exports.default = Question;

},{"./views":"MDRXV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cq0aw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "tick.a7e2bc3c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ijVUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _doraDiditGif = require("url:../../img/dora-didit.gif");
var _doraDiditGifDefault = parcelHelpers.interopDefault(_doraDiditGif);
var _celebGif = require("url:../../img/celeb.gif");
var _celebGifDefault = parcelHelpers.interopDefault(_celebGif);
var _thumbsUpGif = require("url:../../img/thumbs-up.gif");
var _thumbsUpGifDefault = parcelHelpers.interopDefault(_thumbsUpGif);
var _pepaGif = require("url:../../img/pepa.gif");
var _pepaGifDefault = parcelHelpers.interopDefault(_pepaGif);
class Status extends _viewsDefault.default {
    _parentContainer = document.querySelector('.status');
    _selectImage() {
        const images = [
            _doraDiditGifDefault.default,
            _celebGifDefault.default,
            _thumbsUpGifDefault.default,
            _pepaGifDefault.default
        ];
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    }
    _generateMarkups() {
        return `
                <span class="status-item red"> Remaining : ${this._data.remaining}</span>
                <span class="status-item green"> Completed : ${this._data.completed}</span>
                ${this._data.remaining ? '' : `<div class="completed">
                          <img  src=${this._selectImage()} alt="Success" />
                          <button class="btn reset">Reset</button>
                       </div>`}
            `;
    }
    addClickHandler(handler) {
        this._parentContainer.addEventListener('click', (event)=>{
            const btn = event.target.closest('.reset');
            if (!btn) return;
            handler();
            this._clear();
        });
    }
    _clear() {
        this._parentContainer.innerHTML = '';
    }
}
exports.default = new Status();

},{"./views":"MDRXV","url:../../img/dora-didit.gif":"l1pWR","url:../../img/celeb.gif":"1BFJ4","url:../../img/thumbs-up.gif":"hXvM9","url:../../img/pepa.gif":"iI4Yz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l1pWR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "dora-didit.bd6c9829.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1BFJ4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "celeb.2b3f81ec.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hXvM9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "thumbs-up.3ae9eaaa.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iI4Yz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "pepa.3d8375b9.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6B17X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _question = require("./question");
var _questionDefault = parcelHelpers.interopDefault(_question);
var _tickPng = require("url:./../../img/tick.png");
var _tickPngDefault = parcelHelpers.interopDefault(_tickPng);
class CountQuestions extends _questionDefault.default {
    _generateMarkup(que) {
        const count = new Array(que.number).fill(this._displayImages(que.img)).join();
        return `
      <div data-id=${que.id} data-ans=${que.number} 
       class="count-container ${que.correct ? 'complete' : ''}">
       <div class="img-holder">
        ${count}
        </div>
       
        <span class="number">=</span>
        <div class="answer ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="answer__field"
            show=${!que.correct}
            placeholder="Answer"
          />
        </div>
        <div class="ans-container" ${que.correct ? '' : 'hidden'}>
            <span class="ans-number">${que.number}</span>
            <img src="${_tickPngDefault.default}" alt="Success" class="tick-logo" />
        </div>
      </div>`;
    }
    _displayImages(imgSrc) {
        return `
        <img class='count-img' src=${imgSrc} />
    `;
    }
}
exports.default = new CountQuestions();

},{"./question":"11Iuu","url:./../../img/tick.png":"cq0aw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kS06O","lA0Es"], "lA0Es", "parcelRequire2f70")

//# sourceMappingURL=index.05cf099e.js.map
