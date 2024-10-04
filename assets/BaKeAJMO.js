import { G as getDefaultExportFromCjs } from "../entry.css";
var build = { exports: {} };
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
var _defined = function(it) {
  if (it == void 0) throw TypeError("Can't call method on  " + it);
  return it;
};
var toInteger$2 = _toInteger;
var defined$2 = _defined;
var _stringAt = function(TO_STRING) {
  return function(that, pos) {
    var s = String(defined$2(that));
    var i = toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
    a = s.charCodeAt(i);
    return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
  };
};
var _global = { exports: {} };
var global$5 = _global.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
if (typeof __g == "number") __g = global$5;
var _globalExports = _global.exports;
var _core = { exports: {} };
var core$3 = _core.exports = { version: "2.6.12" };
if (typeof __e == "number") __e = core$3;
var _coreExports = _core.exports;
var _aFunction = function(it) {
  if (typeof it != "function") throw TypeError(it + " is not a function!");
  return it;
};
var aFunction$1 = _aFunction;
var _ctx = function(fn, that, length) {
  aFunction$1(fn);
  if (that === void 0) return fn;
  switch (length) {
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function() {
    return fn.apply(that, arguments);
  };
};
var _objectDp = {};
var _isObject = function(it) {
  return typeof it === "object" ? it !== null : typeof it === "function";
};
var isObject$5 = _isObject;
var _anObject = function(it) {
  if (!isObject$5(it)) throw TypeError(it + " is not an object!");
  return it;
};
var _fails = function(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
var _descriptors = !_fails(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
});
var _domCreate;
var hasRequired_domCreate;
function require_domCreate() {
  if (hasRequired_domCreate) return _domCreate;
  hasRequired_domCreate = 1;
  var isObject2 = _isObject;
  var document2 = _globalExports.document;
  var is = isObject2(document2) && isObject2(document2.createElement);
  _domCreate = function(it) {
    return is ? document2.createElement(it) : {};
  };
  return _domCreate;
}
var _ie8DomDefine = !_descriptors && !_fails(function() {
  return Object.defineProperty(require_domCreate()("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var isObject$4 = _isObject;
var _toPrimitive = function(it, S) {
  if (!isObject$4(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == "function" && !isObject$4(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == "function" && !isObject$4(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == "function" && !isObject$4(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
var anObject$4 = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$5 = Object.defineProperty;
_objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPrimitive(P, true);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP$5(O, P, Attributes);
  } catch (e) {
  }
  if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
  if ("value" in Attributes) O[P] = Attributes.value;
  return O;
};
var _propertyDesc = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var dP$4 = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value) {
  return dP$4.f(object, key, createDesc(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key) {
  return hasOwnProperty.call(it, key);
};
var global$4 = _globalExports;
var core$2 = _coreExports;
var ctx$4 = _ctx;
var hide$4 = _hide;
var has$4 = _has;
var PROTOTYPE$1 = "prototype";
var $export$5 = function(type, name, source) {
  var IS_FORCED = type & $export$5.F;
  var IS_GLOBAL = type & $export$5.G;
  var IS_STATIC = type & $export$5.S;
  var IS_PROTO = type & $export$5.P;
  var IS_BIND = type & $export$5.B;
  var IS_WRAP = type & $export$5.W;
  var exports2 = IS_GLOBAL ? core$2 : core$2[name] || (core$2[name] = {});
  var expProto = exports2[PROTOTYPE$1];
  var target = IS_GLOBAL ? global$4 : IS_STATIC ? global$4[name] : (global$4[name] || {})[PROTOTYPE$1];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== void 0;
    if (own && has$4(exports2, key)) continue;
    out = own ? target[key] : source[key];
    exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx$4(out, global$4) : IS_WRAP && target[key] == out ? function(C) {
      var F = function(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }
          return new C(a, b, c);
        }
        return C.apply(this, arguments);
      };
      F[PROTOTYPE$1] = C[PROTOTYPE$1];
      return F;
    }(out) : IS_PROTO && typeof out == "function" ? ctx$4(Function.call, out) : out;
    if (IS_PROTO) {
      (exports2.virtual || (exports2.virtual = {}))[key] = out;
      if (type & $export$5.R && expProto && !expProto[key]) hide$4(expProto, key, out);
    }
  }
};
$export$5.F = 1;
$export$5.G = 2;
$export$5.S = 4;
$export$5.P = 8;
$export$5.B = 16;
$export$5.W = 32;
$export$5.U = 64;
$export$5.R = 128;
var _export = $export$5;
var _redefine = _hide;
var _iterators = {};
var toString = {}.toString;
var _cof = function(it) {
  return toString.call(it).slice(8, -1);
};
var cof$1 = _cof;
var _iobject = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
  return cof$1(it) == "String" ? it.split("") : Object(it);
};
var IObject$1 = _iobject;
var defined$1 = _defined;
var _toIobject = function(it) {
  return IObject$1(defined$1(it));
};
var toInteger$1 = _toInteger;
var min$1 = Math.min;
var _toLength = function(it) {
  return it > 0 ? min$1(toInteger$1(it), 9007199254740991) : 0;
};
var toInteger = _toInteger;
var max = Math.max;
var min = Math.min;
var _toAbsoluteIndex = function(index2, length) {
  index2 = toInteger(index2);
  return index2 < 0 ? max(index2 + length, 0) : min(index2, length);
};
var toIObject$2 = _toIobject;
var toLength$2 = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIObject$2($this);
    var length = toLength$2(O.length);
    var index2 = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index2) {
      value = O[index2++];
      if (value != value) return true;
    }
    else for (; length > index2; index2++) if (IS_INCLUDES || index2 in O) {
      if (O[index2] === el) return IS_INCLUDES || index2 || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var _shared = { exports: {} };
var core$1 = _coreExports;
var global$3 = _globalExports;
var SHARED = "__core-js_shared__";
var store$1 = global$3[SHARED] || (global$3[SHARED] = {});
(_shared.exports = function(key, value) {
  return store$1[key] || (store$1[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: core$1.version,
  mode: "pure",
  copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
});
var _sharedExports = _shared.exports;
var id$1 = 0;
var px = Math.random();
var _uid = function(key) {
  return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id$1 + px).toString(36));
};
var shared = _sharedExports("keys");
var uid$1 = _uid;
var _sharedKey = function(key) {
  return shared[key] || (shared[key] = uid$1(key));
};
var has$3 = _has;
var toIObject$1 = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey("IE_PROTO");
var _objectKeysInternal = function(object, names) {
  var O = toIObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$2) has$3(O, key) && result.push(key);
  while (names.length > i) if (has$3(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
var $keys = _objectKeysInternal;
var enumBugKeys$1 = _enumBugKeys;
var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys$1);
};
var dP$3 = _objectDp;
var anObject$3 = _anObject;
var getKeys = _objectKeys;
var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$3(O);
  var keys2 = getKeys(Properties);
  var length = keys2.length;
  var i = 0;
  var P;
  while (length > i) dP$3.f(O, P = keys2[i++], Properties[P]);
  return O;
};
var _html;
var hasRequired_html;
function require_html() {
  if (hasRequired_html) return _html;
  hasRequired_html = 1;
  var document2 = _globalExports.document;
  _html = document2 && document2.documentElement;
  return _html;
}
var anObject$2 = _anObject;
var dPs = _objectDps;
var enumBugKeys = _enumBugKeys;
var IE_PROTO$1 = _sharedKey("IE_PROTO");
var Empty = function() {
};
var PROTOTYPE = "prototype";
var createDict = function() {
  var iframe = require_domCreate()("iframe");
  var i = enumBugKeys.length;
  var lt = "<";
  var gt = ">";
  var iframeDocument;
  iframe.style.display = "none";
  require_html().appendChild(iframe);
  iframe.src = "javascript:";
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};
var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject$2(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === void 0 ? result : dPs(result, Properties);
};
var _wks = { exports: {} };
var store = _sharedExports("wks");
var uid = _uid;
var Symbol$1 = _globalExports.Symbol;
var USE_SYMBOL = typeof Symbol$1 == "function";
var $exports = _wks.exports = function(name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid)("Symbol." + name));
};
$exports.store = store;
var _wksExports = _wks.exports;
var def = _objectDp.f;
var has$2 = _has;
var TAG = _wksExports("toStringTag");
var _setToStringTag = function(it, tag, stat) {
  if (it && !has$2(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};
var create$1 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$2 = _setToStringTag;
var IteratorPrototype = {};
_hide(IteratorPrototype, _wksExports("iterator"), function() {
  return this;
});
var _iterCreate = function(Constructor, NAME, next) {
  Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag$2(Constructor, NAME + " Iterator");
};
var defined = _defined;
var _toObject = function(it) {
  return Object(defined(it));
};
var has$1 = _has;
var toObject$1 = _toObject;
var IE_PROTO = _sharedKey("IE_PROTO");
var ObjectProto = Object.prototype;
var _objectGpo = Object.getPrototypeOf || function(O) {
  O = toObject$1(O);
  if (has$1(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == "function" && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};
var $export$4 = _export;
var redefine = _redefine;
var hide$3 = _hide;
var Iterators$4 = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag$1 = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR$2 = _wksExports("iterator");
var BUGGY = !([].keys && "next" in [].keys());
var FF_ITERATOR = "@@iterator";
var KEYS = "keys";
var VALUES = "values";
var returnThis = function() {
  return this;
};
var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys2() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG2 = NAME + " Iterator";
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$2] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
  var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype2;
  if ($anyNative) {
    IteratorPrototype2 = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype2 !== Object.prototype && IteratorPrototype2.next) {
      setToStringTag$1(IteratorPrototype2, TAG2, true);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  if (FORCED && (BUGGY || VALUES_BUG || !proto[ITERATOR$2])) {
    hide$3(proto, ITERATOR$2, $default);
  }
  Iterators$4[NAME] = $default;
  Iterators$4[TAG2] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    }
    else $export$4($export$4.P + $export$4.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
var $at = _stringAt(true);
_iterDefine(String, "String", function(iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function() {
  var O = this._t;
  var index2 = this._i;
  var point;
  if (index2 >= O.length) return { value: void 0, done: true };
  point = $at(O, index2);
  this._i += point.length;
  return { value: point, done: false };
});
var _iterStep = function(done, value) {
  return { value, done: !!done };
};
var step$1 = _iterStep;
var Iterators$3 = _iterators;
var toIObject = _toIobject;
_iterDefine(Array, "Array", function(iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function() {
  var O = this._t;
  var kind = this._k;
  var index2 = this._i++;
  if (!O || index2 >= O.length) {
    this._t = void 0;
    return step$1(1);
  }
  if (kind == "keys") return step$1(0, index2);
  if (kind == "values") return step$1(0, O[index2]);
  return step$1(0, [index2, O[index2]]);
}, "values");
Iterators$3.Arguments = Iterators$3.Array;
var global$2 = _globalExports;
var hide$2 = _hide;
var Iterators$2 = _iterators;
var TO_STRING_TAG = _wksExports("toStringTag");
var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global$2[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide$2(proto, TO_STRING_TAG, NAME);
  Iterators$2[NAME] = Iterators$2.Array;
}
var hide$1 = _hide;
var _redefineAll = function(target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide$1(target, key, src[key]);
  }
  return target;
};
var _anInstance = function(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
    throw TypeError(name + ": incorrect invocation!");
  }
  return it;
};
var _forOf = { exports: {} };
var anObject$1 = _anObject;
var _iterCall = function(iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$1(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator["return"];
    if (ret !== void 0) anObject$1(ret.call(iterator));
    throw e;
  }
};
var Iterators$1 = _iterators;
var ITERATOR$1 = _wksExports("iterator");
var ArrayProto = Array.prototype;
var _isArrayIter = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayProto[ITERATOR$1] === it);
};
var _classof;
var hasRequired_classof;
function require_classof() {
  if (hasRequired_classof) return _classof;
  hasRequired_classof = 1;
  var cof2 = _cof;
  var TAG2 = _wksExports("toStringTag");
  var ARG = cof2(/* @__PURE__ */ function() {
    return arguments;
  }()) == "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (e) {
    }
  };
  _classof = function(it) {
    var O, T, B;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG2)) == "string" ? T : ARG ? cof2(O) : (B = cof2(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
  };
  return _classof;
}
var classof = require_classof();
var ITERATOR = _wksExports("iterator");
var Iterators = _iterators;
var core_getIteratorMethod = _coreExports.getIteratorMethod = function(it) {
  if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
};
var ctx$3 = _ctx;
var call = _iterCall;
var isArrayIter = _isArrayIter;
var anObject = _anObject;
var toLength$1 = _toLength;
var getIterFn = core_getIteratorMethod;
var BREAK = {};
var RETURN = {};
var exports = _forOf.exports = function(iterable, entries, fn, that, ITERATOR2) {
  var iterFn = ITERATOR2 ? function() {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx$3(fn, that, entries ? 2 : 1);
  var index2 = 0;
  var length, step2, iterator, result;
  if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
  if (isArrayIter(iterFn)) for (length = toLength$1(iterable.length); length > index2; index2++) {
    result = entries ? f(anObject(step2 = iterable[index2])[0], step2[1]) : f(iterable[index2]);
    if (result === BREAK || result === RETURN) return result;
  }
  else for (iterator = iterFn.call(iterable); !(step2 = iterator.next()).done; ) {
    result = call(iterator, f, step2.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
var _forOfExports = _forOf.exports;
var global$1 = _globalExports;
var core = _coreExports;
var dP$2 = _objectDp;
var DESCRIPTORS$2 = _descriptors;
var SPECIES$1 = _wksExports("species");
var _setSpecies = function(KEY) {
  var C = typeof core[KEY] == "function" ? core[KEY] : global$1[KEY];
  if (DESCRIPTORS$2 && C && !C[SPECIES$1]) dP$2.f(C, SPECIES$1, {
    configurable: true,
    get: function() {
      return this;
    }
  });
};
var _meta = { exports: {} };
var META = _uid("meta");
var isObject$3 = _isObject;
var has = _has;
var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function() {
  return true;
};
var FREEZE = !_fails(function() {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it) {
  setDesc(it, META, { value: {
    i: "O" + ++id,
    // object ID
    w: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create3) {
  if (!isObject$3(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return "F";
    if (!create3) return "E";
    setMeta(it);
  }
  return it[META].i;
};
var getWeak = function(it, create3) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create3) return false;
    setMeta(it);
  }
  return it[META].w;
};
var onFreeze = function(it) {
  if (FREEZE && meta$1.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta$1 = _meta.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey$1,
  getWeak,
  onFreeze
};
var _metaExports = _meta.exports;
var isObject$2 = _isObject;
var _validateCollection = function(it, TYPE) {
  if (!isObject$2(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
  return it;
};
var dP$1 = _objectDp.f;
var create2 = _objectCreate;
var redefineAll$1 = _redefineAll;
var ctx$2 = _ctx;
var anInstance$1 = _anInstance;
var forOf$2 = _forOfExports;
var $iterDefine = _iterDefine;
var step = _iterStep;
var setSpecies = _setSpecies;
var DESCRIPTORS$1 = _descriptors;
var fastKey = _metaExports.fastKey;
var validate$1 = _validateCollection;
var SIZE = DESCRIPTORS$1 ? "_s" : "size";
var getEntry = function(that, key) {
  var index2 = fastKey(key);
  var entry;
  if (index2 !== "F") return that._i[index2];
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};
var _collectionStrong = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function(that, iterable) {
      anInstance$1(that, C, NAME, "_i");
      that._t = NAME;
      that._i = create2(null);
      that._f = void 0;
      that._l = void 0;
      that[SIZE] = 0;
      if (iterable != void 0) forOf$2(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$1(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate$1(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = void 0;
          delete data[entry.i];
        }
        that._f = that._l = void 0;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      "delete": function(key) {
        var that = validate$1(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }
        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn) {
        validate$1(this, NAME);
        var f = ctx$2(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has2(key) {
        return !!getEntry(validate$1(this, NAME), key);
      }
    });
    if (DESCRIPTORS$1) dP$1(C.prototype, "size", {
      get: function() {
        return validate$1(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index2;
    if (entry) {
      entry.v = value;
    } else {
      that._l = entry = {
        i: index2 = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: void 0,
        // <- next entry
        r: false
        // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      if (index2 !== "F") that._i[index2] = entry;
    }
    return that;
  },
  getEntry,
  setStrong: function(C, NAME, IS_MAP) {
    $iterDefine(C, NAME, function(iterated, kind) {
      this._t = validate$1(iterated, NAME);
      this._k = kind;
      this._l = void 0;
    }, function() {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      while (entry && entry.r) entry = entry.p;
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        that._t = void 0;
        return step(1);
      }
      if (kind == "keys") return step(0, entry.k);
      if (kind == "values") return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(NAME);
  }
};
var cof = _cof;
var _isArray = Array.isArray || function isArray(arg) {
  return cof(arg) == "Array";
};
var isObject$1 = _isObject;
var isArray2 = _isArray;
var SPECIES = _wksExports("species");
var _arraySpeciesConstructor = function(original) {
  var C;
  if (isArray2(original)) {
    C = original.constructor;
    if (typeof C == "function" && (C === Array || isArray2(C.prototype))) C = void 0;
    if (isObject$1(C)) {
      C = C[SPECIES];
      if (C === null) C = void 0;
    }
  }
  return C === void 0 ? Array : C;
};
var speciesConstructor = _arraySpeciesConstructor;
var _arraySpeciesCreate = function(original, length) {
  return new (speciesConstructor(original))(length);
};
var ctx$1 = _ctx;
var IObject = _iobject;
var toObject = _toObject;
var toLength = _toLength;
var asc = _arraySpeciesCreate;
var _arrayMethods = function(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create3 = $create || asc;
  return function($this, callbackfn, that) {
    var O = toObject($this);
    var self2 = IObject(O);
    var f = ctx$1(callbackfn, that, 3);
    var length = toLength(self2.length);
    var index2 = 0;
    var result = IS_MAP ? create3($this, length) : IS_FILTER ? create3($this, 0) : void 0;
    var val, res;
    for (; length > index2; index2++) if (NO_HOLES || index2 in self2) {
      val = self2[index2];
      res = f(val, index2, O);
      if (TYPE) {
        if (IS_MAP) result[index2] = res;
        else if (res) switch (TYPE) {
          case 3:
            return true;
          case 5:
            return val;
          case 6:
            return index2;
          case 2:
            result.push(val);
        }
        else if (IS_EVERY) return false;
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
var global = _globalExports;
var $export$3 = _export;
var meta = _metaExports;
var fails = _fails;
var hide = _hide;
var redefineAll = _redefineAll;
var forOf$1 = _forOfExports;
var anInstance = _anInstance;
var isObject = _isObject;
var setToStringTag = _setToStringTag;
var dP = _objectDp.f;
var each = _arrayMethods(0);
var DESCRIPTORS = _descriptors;
var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? "set" : "add";
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable) {
      anInstance(target, C, NAME, "_c");
      target._c = new Base();
      if (iterable != void 0) forOf$1(iterable, IS_MAP, target[ADDER], target);
    });
    each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(KEY) {
      var IS_ADDER = KEY == "add" || KEY == "set";
      if (KEY in proto && !(IS_WEAK && KEY == "clear")) hide(C.prototype, KEY, function(a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == "get" ? void 0 : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, "size", {
      get: function() {
        return this._c.size;
      }
    });
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export$3($export$3.G + $export$3.W + $export$3.F, O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};
var strong = _collectionStrong;
var validate = _validateCollection;
var MAP = "Map";
_collection(MAP, function(get2) {
  return function Map() {
    return get2(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);
var _arrayFromIterable;
var hasRequired_arrayFromIterable;
function require_arrayFromIterable() {
  if (hasRequired_arrayFromIterable) return _arrayFromIterable;
  hasRequired_arrayFromIterable = 1;
  var forOf2 = _forOfExports;
  _arrayFromIterable = function(iter, ITERATOR2) {
    var result = [];
    forOf2(iter, false, result.push, result, ITERATOR2);
    return result;
  };
  return _arrayFromIterable;
}
var _collectionToJson;
var hasRequired_collectionToJson;
function require_collectionToJson() {
  if (hasRequired_collectionToJson) return _collectionToJson;
  hasRequired_collectionToJson = 1;
  var classof2 = require_classof();
  var from = require_arrayFromIterable();
  _collectionToJson = function(NAME) {
    return function toJSON() {
      if (classof2(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };
  return _collectionToJson;
}
var $export$2 = _export;
$export$2($export$2.P + $export$2.R, "Map", { toJSON: require_collectionToJson()("Map") });
var $export$1 = _export;
var _setCollectionOf = function(COLLECTION) {
  $export$1($export$1.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};
_setCollectionOf("Map");
var $export = _export;
var aFunction = _aFunction;
var ctx = _ctx;
var forOf = _forOfExports;
var _setCollectionFrom = function(COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== void 0;
    if (mapping) aFunction(mapFn);
    if (source == void 0) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function(nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};
_setCollectionFrom("Map");
var map$1 = _coreExports.Map;
var map = { "default": map$1, __esModule: true };
var componentEvent = {};
var bind = window.addEventListener ? "addEventListener" : "attachEvent", unbind = window.removeEventListener ? "removeEventListener" : "detachEvent", prefix = bind !== "addEventListener" ? "on" : "";
componentEvent.bind = function(el, type, fn, capture) {
  el[bind](prefix + type, fn, capture || false);
  return fn;
};
componentEvent.unbind = function(el, type, fn, capture) {
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
var nodeContains = contains;
function contains(node, other) {
  return node === other || !!(node.compareDocumentPosition(other) & 16);
}
(function(module, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  var _map = map;
  var _map2 = _interopRequireDefault(_map);
  exports2.default = clickOutside;
  var _componentEvent = componentEvent;
  var _componentEvent2 = _interopRequireDefault(_componentEvent);
  var _nodeContains = nodeContains;
  var _nodeContains2 = _interopRequireDefault(_nodeContains);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var callbacks = new _map2.default();
  function clickOutside(el, fn) {
    callbacks.set(el, fn);
    return function unbind2() {
      callbacks.delete(el);
    };
  }
  clickOutside.globalClick = globalClick;
  clickOutside.install = install;
  function globalClick(e) {
    callbacks.forEach(function(fn, el) {
      if (!(0, _nodeContains2.default)(el, e.target)) {
        fn.call(el, e);
      }
    });
  }
  function install(doc) {
    if (!doc) doc = document;
    _componentEvent2.default.bind(doc, "click", globalClick);
  }
  if ("undefined" !== typeof document) {
    install(document);
  }
  module.exports = exports2["default"];
})(build, build.exports);
var buildExports = build.exports;
const index = /* @__PURE__ */ getDefaultExportFromCjs(buildExports);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  index$1 as i
};
