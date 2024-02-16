/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeB64ToUint8Array)
/* harmony export */ });
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_0__);


var atob = function atob(s) {
  return (global_window__WEBPACK_IMPORTED_MODULE_0___default().atob) ? global_window__WEBPACK_IMPORTED_MODULE_0___default().atob(s) : Buffer.from(s, 'base64').toString('binary');
};

function decodeB64ToUint8Array(b64Text) {
  var decodedString = atob(b64Text);
  var array = new Uint8Array(decodedString.length);

  for (var i = 0; i < decodedString.length; i++) {
    array[i] = decodedString.charCodeAt(i);
  }

  return array;
}

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/media-groups.js":
/*!************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/media-groups.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEachMediaGroup: () => (/* binding */ forEachMediaGroup)
/* harmony export */ });
/**
 * Loops through all supported media groups in master and calls the provided
 * callback for each group
 *
 * @param {Object} master
 *        The parsed master manifest object
 * @param {string[]} groups
 *        The media groups to call the callback for
 * @param {Function} callback
 *        Callback to call for each media group
 */
var forEachMediaGroup = function forEachMediaGroup(master, groups, callback) {
  groups.forEach(function (mediaType) {
    for (var groupKey in master.mediaGroups[mediaType]) {
      for (var labelKey in master.mediaGroups[mediaType][groupKey]) {
        var mediaProperties = master.mediaGroups[mediaType][groupKey][labelKey];
        callback(mediaProperties, mediaType, groupKey, labelKey);
      }
    }
  });
};

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/resolve-url.js":
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/resolve-url.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js");
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_LOCATION = 'http://example.com';

var resolveUrl = function resolveUrl(baseUrl, relativeUrl) {
  // return early if we don't need to resolve
  if (/^[a-z]+:/i.test(relativeUrl)) {
    return relativeUrl;
  } // if baseUrl is a data URI, ignore it and resolve everything relative to window.location


  if (/^data:/.test(baseUrl)) {
    baseUrl = (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '';
  } // IE11 supports URL but not the URL constructor
  // feature detect the behavior we want


  var nativeURL = typeof (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL) === 'function';
  var protocolLess = /^\/\//.test(baseUrl); // remove location if window.location isn't available (i.e. we're in node)
  // and if baseUrl isn't an absolute url

  var removeLocation = !(global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && !/\/\//i.test(baseUrl); // if the base URL is relative then combine with the current location

  if (nativeURL) {
    baseUrl = new (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL)(baseUrl, (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) || DEFAULT_LOCATION);
  } else if (!/\/\//i.test(baseUrl)) {
    baseUrl = url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL((global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '', baseUrl);
  }

  if (nativeURL) {
    var newUrl = new URL(relativeUrl, baseUrl); // if we're a protocol-less url, remove the protocol
    // and if we're location-less, remove the location
    // otherwise, return the url unmodified

    if (removeLocation) {
      return newUrl.href.slice(DEFAULT_LOCATION.length);
    } else if (protocolLess) {
      return newUrl.href.slice(newUrl.protocol.length);
    }

    return newUrl.href;
  }

  return url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL(baseUrl, relativeUrl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveUrl);

/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties, including NodeList.
 *
 * @template {unknown} T
 * @param {Array<T> | ({length:number, [number]: T})} list
 * @param {function (item: T, index: number, list:Array<T> | ({length:number, [number]: T})):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac `Array.prototype` by default,
 * 				allows injecting a custom implementation in tests
 * @returns {T | undefined}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (Object.prototype.hasOwnProperty.call(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object')
	}
	for (var key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key]
		}
	}
	return target
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
	return input
		.replace(/\r[\n\u0085]/g, '\n')
		.replace(/[\r\u0085\u2028]/g, '\n')
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	var normalize = options.normalizeLineEndings || normalizeLineEndings;
	if (source && typeof source === 'string') {
		sax.parse(
			normalize(source),
			defaultNSMap,
			entityMap
		)
	} else {
		sax.errorHandler.error('invalid doc source')
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var find = conventions.find;
var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		if (Object.prototype.hasOwnProperty.call(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0,
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
	 */
	item: function(index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * @private
	 * @param {function (Node):boolean} predicate
	 * @returns {Node[]}
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * @private
	 * @param {Node} item
	 * @returns {number}
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list,'length',ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (Object.prototype.hasOwnProperty.call(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i] || null;
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw new DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;


	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises
		_insertBefore(this, newChild,oldChild, assertPreReplacementValidityInDocument);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
						if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
							return n;
						}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(Object.prototype.hasOwnProperty.call(map, prefix)){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
	this.ownerDocument = this;
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild (doc, el, newChild) {
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
			delete cs[cs.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild (parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(isElementNode(node) ||
			isTextNode(node) ||
			isDocTypeNode(node) ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * @private
 * Steps 1-5 of the checks before inserting and before replacing a child are the same.
 *
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * @private
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if(cp){
		cp.removeChild(node);//remove and update
	}
	if(node.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	}else{
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;


	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parent.firstChild = newFirst;
	}
	if(child == null){
		parent.lastChild = newLast;
	}else{
		child.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parent;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parent.ownerDocument||parent, parent);
	//console.log(parent.lastChild.nextSibling == null)
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}
	return node;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild (parentNode, newChild) {
	if (newChild.parentNode) {
		newChild.parentNode.removeChild(newChild);
	}
	newChild.parentNode = parentNode;
	newChild.previousSibling = parentNode.lastChild;
	newChild.nextSibling = null;
	if (newChild.previousSibling) {
		newChild.previousSibling.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
}

Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},

	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;

		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);

	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;

		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}

		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
		 */
		return buf.push(node.data
			.replace(/[<&>]/g,_xmlEncoder)
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for (var n in node) {
		if (Object.prototype.hasOwnProperty.call(node, n)) {
			var v = node[n];
			if (typeof v != "object") {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})

		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var NAMESPACE = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE);

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if (Object.hasOwnProperty.call(entityMap, k)) {
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){

	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for (var prefix in localNSMap) {
							if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }

				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;


				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer),
			startIndex
		)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start, p);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start, p);
				addAttribute(attrName, value, start);
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
				break;
				case S_ATTR_SPACE:
					el.closed = true;
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value, start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start, p);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for (prefix in localNSMap) {
				if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//}
}

function _copy (source, target) {
	for (var n in source) {
		if (Object.prototype.hasOwnProperty.call(source, n)) {
			target[n] = source[n];
		}
	}
}

function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/mpd-parser/dist/mpd-parser.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/mpd-parser/dist/mpd-parser.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   addSidxSegmentsToPlaylist: () => (/* binding */ addSidxSegmentsToPlaylist$1),
/* harmony export */   generateSidxKey: () => (/* binding */ generateSidxKey),
/* harmony export */   inheritAttributes: () => (/* binding */ inheritAttributes),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseUTCTiming: () => (/* binding */ parseUTCTiming),
/* harmony export */   stringToMpdXml: () => (/* binding */ stringToMpdXml),
/* harmony export */   toM3u8: () => (/* binding */ toM3u8),
/* harmony export */   toPlaylists: () => (/* binding */ toPlaylists)
/* harmony export */ });
/* harmony import */ var _videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/vhs-utils/es/resolve-url */ "./node_modules/@videojs/vhs-utils/es/resolve-url.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/vhs-utils/es/media-groups */ "./node_modules/@videojs/vhs-utils/es/media-groups.js");
/* harmony import */ var _videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/vhs-utils/es/decode-b64-to-uint8-array */ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js");
/* harmony import */ var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xmldom/xmldom */ "./node_modules/@xmldom/xmldom/lib/index.js");
/*! @name mpd-parser @version 1.2.2 @license Apache-2.0 */






var version = "1.2.2";

const isObject = obj => {
  return !!obj && typeof obj === 'object';
};

const merge = (...objects) => {
  return objects.reduce((result, source) => {
    if (typeof source !== 'object') {
      return result;
    }

    Object.keys(source).forEach(key => {
      if (Array.isArray(result[key]) && Array.isArray(source[key])) {
        result[key] = result[key].concat(source[key]);
      } else if (isObject(result[key]) && isObject(source[key])) {
        result[key] = merge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    });
    return result;
  }, {});
};
const values = o => Object.keys(o).map(k => o[k]);

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};
const flatten = lists => lists.reduce((x, y) => x.concat(y), []);
const from = list => {
  if (!list.length) {
    return [];
  }

  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(list[i]);
  }

  return result;
};
const findIndexes = (l, key) => l.reduce((a, e, i) => {
  if (e[key]) {
    a.push(i);
  }

  return a;
}, []);
/**
 * Returns a union of the included lists provided each element can be identified by a key.
 *
 * @param {Array} list - list of lists to get the union of
 * @param {Function} keyFunction - the function to use as a key for each element
 *
 * @return {Array} the union of the arrays
 */

const union = (lists, keyFunction) => {
  return values(lists.reduce((acc, list) => {
    list.forEach(el => {
      acc[keyFunction(el)] = el;
    });
    return acc;
  }, {}));
};

var errors = {
  INVALID_NUMBER_OF_PERIOD: 'INVALID_NUMBER_OF_PERIOD',
  INVALID_NUMBER_OF_CONTENT_STEERING: 'INVALID_NUMBER_OF_CONTENT_STEERING',
  DASH_EMPTY_MANIFEST: 'DASH_EMPTY_MANIFEST',
  DASH_INVALID_XML: 'DASH_INVALID_XML',
  NO_BASE_URL: 'NO_BASE_URL',
  MISSING_SEGMENT_INFORMATION: 'MISSING_SEGMENT_INFORMATION',
  SEGMENT_TIME_UNSPECIFIED: 'SEGMENT_TIME_UNSPECIFIED',
  UNSUPPORTED_UTC_TIMING_SCHEME: 'UNSUPPORTED_UTC_TIMING_SCHEME'
};

/**
 * @typedef {Object} SingleUri
 * @property {string} uri - relative location of segment
 * @property {string} resolvedUri - resolved location of segment
 * @property {Object} byterange - Object containing information on how to make byte range
 *   requests following byte-range-spec per RFC2616.
 * @property {String} byterange.length - length of range request
 * @property {String} byterange.offset - byte offset of range request
 *
 * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1
 */

/**
 * Converts a URLType node (5.3.9.2.3 Table 13) to a segment object
 * that conforms to how m3u8-parser is structured
 *
 * @see https://github.com/videojs/m3u8-parser
 *
 * @param {string} baseUrl - baseUrl provided by <BaseUrl> nodes
 * @param {string} source - source url for segment
 * @param {string} range - optional range used for range calls,
 *   follows  RFC 2616, Clause 14.35.1
 * @return {SingleUri} full segment information transformed into a format similar
 *   to m3u8-parser
 */

const urlTypeToSegment = ({
  baseUrl = '',
  source = '',
  range = '',
  indexRange = ''
}) => {
  const segment = {
    uri: source,
    resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(baseUrl || '', source)
  };

  if (range || indexRange) {
    const rangeStr = range ? range : indexRange;
    const ranges = rangeStr.split('-'); // default to parsing this as a BigInt if possible

    let startRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[0]) : parseInt(ranges[0], 10);
    let endRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[1]) : parseInt(ranges[1], 10); // convert back to a number if less than MAX_SAFE_INTEGER

    if (startRange < Number.MAX_SAFE_INTEGER && typeof startRange === 'bigint') {
      startRange = Number(startRange);
    }

    if (endRange < Number.MAX_SAFE_INTEGER && typeof endRange === 'bigint') {
      endRange = Number(endRange);
    }

    let length;

    if (typeof endRange === 'bigint' || typeof startRange === 'bigint') {
      length = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(endRange) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(startRange) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      length = endRange - startRange + 1;
    }

    if (typeof length === 'bigint' && length < Number.MAX_SAFE_INTEGER) {
      length = Number(length);
    } // byterange should be inclusive according to
    // RFC 2616, Clause 14.35.1


    segment.byterange = {
      length,
      offset: startRange
    };
  }

  return segment;
};
const byteRangeToString = byterange => {
  // `endRange` is one less than `offset + length` because the HTTP range
  // header uses inclusive ranges
  let endRange;

  if (typeof byterange.offset === 'bigint' || typeof byterange.length === 'bigint') {
    endRange = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.offset) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.length) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
  } else {
    endRange = byterange.offset + byterange.length - 1;
  }

  return `${byterange.offset}-${endRange}`;
};

/**
 * parse the end number attribue that can be a string
 * number, or undefined.
 *
 * @param {string|number|undefined} endNumber
 *        The end number attribute.
 *
 * @return {number|null}
 *          The result of parsing the end number.
 */

const parseEndNumber = endNumber => {
  if (endNumber && typeof endNumber !== 'number') {
    endNumber = parseInt(endNumber, 10);
  }

  if (isNaN(endNumber)) {
    return null;
  }

  return endNumber;
};
/**
 * Functions for calculating the range of available segments in static and dynamic
 * manifests.
 */


const segmentRange = {
  /**
   * Returns the entire range of available segments for a static MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  static(attributes) {
    const {
      duration,
      timescale = 1,
      sourceDuration,
      periodDuration
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber);
    const segmentDuration = duration / timescale;

    if (typeof endNumber === 'number') {
      return {
        start: 0,
        end: endNumber
      };
    }

    if (typeof periodDuration === 'number') {
      return {
        start: 0,
        end: periodDuration / segmentDuration
      };
    }

    return {
      start: 0,
      end: sourceDuration / segmentDuration
    };
  },

  /**
   * Returns the current live window range of available segments for a dynamic MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  dynamic(attributes) {
    const {
      NOW,
      clientOffset,
      availabilityStartTime,
      timescale = 1,
      duration,
      periodStart = 0,
      minimumUpdatePeriod = 0,
      timeShiftBufferDepth = Infinity
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber); // clientOffset is passed in at the top level of mpd-parser and is an offset calculated
    // after retrieving UTC server time.

    const now = (NOW + clientOffset) / 1000; // WC stands for Wall Clock.
    // Convert the period start time to EPOCH.

    const periodStartWC = availabilityStartTime + periodStart; // Period end in EPOCH is manifest's retrieval time + time until next update.

    const periodEndWC = now + minimumUpdatePeriod;
    const periodDuration = periodEndWC - periodStartWC;
    const segmentCount = Math.ceil(periodDuration * timescale / duration);
    const availableStart = Math.floor((now - periodStartWC - timeShiftBufferDepth) * timescale / duration);
    const availableEnd = Math.floor((now - periodStartWC) * timescale / duration);
    return {
      start: Math.max(0, availableStart),
      end: typeof endNumber === 'number' ? endNumber : Math.min(segmentCount, availableEnd)
    };
  }

};
/**
 * Maps a range of numbers to objects with information needed to build the corresponding
 * segment list
 *
 * @name toSegmentsCallback
 * @function
 * @param {number} number
 *        Number of the segment
 * @param {number} index
 *        Index of the number in the range list
 * @return {{ number: Number, duration: Number, timeline: Number, time: Number }}
 *         Object with segment timing and duration info
 */

/**
 * Returns a callback for Array.prototype.map for mapping a range of numbers to
 * information needed to build the segment list.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {toSegmentsCallback}
 *         Callback map function
 */

const toSegments = attributes => number => {
  const {
    duration,
    timescale = 1,
    periodStart,
    startNumber = 1
  } = attributes;
  return {
    number: startNumber + number,
    duration: duration / timescale,
    timeline: periodStart,
    time: number * duration
  };
};
/**
 * Returns a list of objects containing segment timing and duration info used for
 * building the list of segments. This uses the @duration attribute specified
 * in the MPD manifest to derive the range of segments.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseByDuration = attributes => {
  const {
    type,
    duration,
    timescale = 1,
    periodDuration,
    sourceDuration
  } = attributes;
  const {
    start,
    end
  } = segmentRange[type](attributes);
  const segments = range(start, end).map(toSegments(attributes));

  if (type === 'static') {
    const index = segments.length - 1; // section is either a period or the full source

    const sectionDuration = typeof periodDuration === 'number' ? periodDuration : sourceDuration; // final segment may be less than full segment duration

    segments[index].duration = sectionDuration - duration / timescale * index;
  }

  return segments;
};

/**
 * Translates SegmentBase into a set of segments.
 * (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @return {Object.<Array>} list of segments
 */

const segmentsFromBase = attributes => {
  const {
    baseUrl,
    initialization = {},
    sourceDuration,
    indexRange = '',
    periodStart,
    presentationTime,
    number = 0,
    duration
  } = attributes; // base url is required for SegmentBase to work, per spec (Section 5.3.9.2.1)

  if (!baseUrl) {
    throw new Error(errors.NO_BASE_URL);
  }

  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: baseUrl,
    indexRange
  });
  segment.map = initSegment; // If there is a duration, use it, otherwise use the given duration of the source
  // (since SegmentBase is only for one total segment)

  if (duration) {
    const segmentTimeInfo = parseByDuration(attributes);

    if (segmentTimeInfo.length) {
      segment.duration = segmentTimeInfo[0].duration;
      segment.timeline = segmentTimeInfo[0].timeline;
    }
  } else if (sourceDuration) {
    segment.duration = sourceDuration;
    segment.timeline = periodStart;
  } // If presentation time is provided, these segments are being generated by SIDX
  // references, and should use the time provided. For the general case of SegmentBase,
  // there should only be one segment in the period, so its presentation time is the same
  // as its period start.


  segment.presentationTime = presentationTime || periodStart;
  segment.number = number;
  return [segment];
};
/**
 * Given a playlist, a sidx box, and a baseUrl, update the segment list of the playlist
 * according to the sidx information given.
 *
 * playlist.sidx has metadadata about the sidx where-as the sidx param
 * is the parsed sidx box itself.
 *
 * @param {Object} playlist the playlist to update the sidx information for
 * @param {Object} sidx the parsed sidx box
 * @return {Object} the playlist object with the updated sidx information
 */

const addSidxSegmentsToPlaylist$1 = (playlist, sidx, baseUrl) => {
  // Retain init segment information
  const initSegment = playlist.sidx.map ? playlist.sidx.map : null; // Retain source duration from initial main manifest parsing

  const sourceDuration = playlist.sidx.duration; // Retain source timeline

  const timeline = playlist.timeline || 0;
  const sidxByteRange = playlist.sidx.byterange;
  const sidxEnd = sidxByteRange.offset + sidxByteRange.length; // Retain timescale of the parsed sidx

  const timescale = sidx.timescale; // referenceType 1 refers to other sidx boxes

  const mediaReferences = sidx.references.filter(r => r.referenceType !== 1);
  const segments = [];
  const type = playlist.endList ? 'static' : 'dynamic';
  const periodStart = playlist.sidx.timeline;
  let presentationTime = periodStart;
  let number = playlist.mediaSequence || 0; // firstOffset is the offset from the end of the sidx box

  let startIndex; // eslint-disable-next-line

  if (typeof sidx.firstOffset === 'bigint') {
    startIndex = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(sidxEnd) + sidx.firstOffset;
  } else {
    startIndex = sidxEnd + sidx.firstOffset;
  }

  for (let i = 0; i < mediaReferences.length; i++) {
    const reference = sidx.references[i]; // size of the referenced (sub)segment

    const size = reference.referencedSize; // duration of the referenced (sub)segment, in  the  timescale
    // this will be converted to seconds when generating segments

    const duration = reference.subsegmentDuration; // should be an inclusive range

    let endIndex; // eslint-disable-next-line

    if (typeof startIndex === 'bigint') {
      endIndex = startIndex + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      endIndex = startIndex + size - 1;
    }

    const indexRange = `${startIndex}-${endIndex}`;
    const attributes = {
      baseUrl,
      timescale,
      timeline,
      periodStart,
      presentationTime,
      number,
      duration,
      sourceDuration,
      indexRange,
      type
    };
    const segment = segmentsFromBase(attributes)[0];

    if (initSegment) {
      segment.map = initSegment;
    }

    segments.push(segment);

    if (typeof startIndex === 'bigint') {
      startIndex += global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size);
    } else {
      startIndex += size;
    }

    presentationTime += duration / timescale;
    number++;
  }

  playlist.segments = segments;
  return playlist;
};

const SUPPORTED_MEDIA_TYPES = ['AUDIO', 'SUBTITLES']; // allow one 60fps frame as leniency (arbitrarily chosen)

const TIME_FUDGE = 1 / 60;
/**
 * Given a list of timelineStarts, combines, dedupes, and sorts them.
 *
 * @param {TimelineStart[]} timelineStarts - list of timeline starts
 *
 * @return {TimelineStart[]} the combined and deduped timeline starts
 */

const getUniqueTimelineStarts = timelineStarts => {
  return union(timelineStarts, ({
    timeline
  }) => timeline).sort((a, b) => a.timeline > b.timeline ? 1 : -1);
};
/**
 * Finds the playlist with the matching NAME attribute.
 *
 * @param {Array} playlists - playlists to search through
 * @param {string} name - the NAME attribute to search for
 *
 * @return {Object|null} the matching playlist object, or null
 */

const findPlaylistWithName = (playlists, name) => {
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].attributes.NAME === name) {
      return playlists[i];
    }
  }

  return null;
};
/**
 * Gets a flattened array of media group playlists.
 *
 * @param {Object} manifest - the main manifest object
 *
 * @return {Array} the media group playlists
 */

const getMediaGroupPlaylists = manifest => {
  let mediaGroupPlaylists = [];
  (0,_videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__.forEachMediaGroup)(manifest, SUPPORTED_MEDIA_TYPES, (properties, type, group, label) => {
    mediaGroupPlaylists = mediaGroupPlaylists.concat(properties.playlists || []);
  });
  return mediaGroupPlaylists;
};
/**
 * Updates the playlist's media sequence numbers.
 *
 * @param {Object} config - options object
 * @param {Object} config.playlist - the playlist to update
 * @param {number} config.mediaSequence - the mediaSequence number to start with
 */

const updateMediaSequenceForPlaylist = ({
  playlist,
  mediaSequence
}) => {
  playlist.mediaSequence = mediaSequence;
  playlist.segments.forEach((segment, index) => {
    segment.number = playlist.mediaSequence + index;
  });
};
/**
 * Updates the media and discontinuity sequence numbers of newPlaylists given oldPlaylists
 * and a complete list of timeline starts.
 *
 * If no matching playlist is found, only the discontinuity sequence number of the playlist
 * will be updated.
 *
 * Since early available timelines are not supported, at least one segment must be present.
 *
 * @param {Object} config - options object
 * @param {Object[]} oldPlaylists - the old playlists to use as a reference
 * @param {Object[]} newPlaylists - the new playlists to update
 * @param {Object} timelineStarts - all timelineStarts seen in the stream to this point
 */

const updateSequenceNumbers = ({
  oldPlaylists,
  newPlaylists,
  timelineStarts
}) => {
  newPlaylists.forEach(playlist => {
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    }); // Playlists NAMEs come from DASH Representation IDs, which are mandatory
    // (see ISO_23009-1-2012 5.3.5.2).
    //
    // If the same Representation existed in a prior Period, it will retain the same NAME.

    const oldPlaylist = findPlaylistWithName(oldPlaylists, playlist.attributes.NAME);

    if (!oldPlaylist) {
      // Since this is a new playlist, the media sequence values can start from 0 without
      // consequence.
      return;
    } // TODO better support for live SIDX
    //
    // As of this writing, mpd-parser does not support multiperiod SIDX (in live or VOD).
    // This is evident by a playlist only having a single SIDX reference. In a multiperiod
    // playlist there would need to be multiple SIDX references. In addition, live SIDX is
    // not supported when the SIDX properties change on refreshes.
    //
    // In the future, if support needs to be added, the merging logic here can be called
    // after SIDX references are resolved. For now, exit early to prevent exceptions being
    // thrown due to undefined references.


    if (playlist.sidx) {
      return;
    } // Since we don't yet support early available timelines, we don't need to support
    // playlists with no segments.


    const firstNewSegment = playlist.segments[0];
    const oldMatchingSegmentIndex = oldPlaylist.segments.findIndex(function (oldSegment) {
      return Math.abs(oldSegment.presentationTime - firstNewSegment.presentationTime) < TIME_FUDGE;
    }); // No matching segment from the old playlist means the entire playlist was refreshed.
    // In this case the media sequence should account for this update, and the new segments
    // should be marked as discontinuous from the prior content, since the last prior
    // timeline was removed.

    if (oldMatchingSegmentIndex === -1) {
      updateMediaSequenceForPlaylist({
        playlist,
        mediaSequence: oldPlaylist.mediaSequence + oldPlaylist.segments.length
      });
      playlist.segments[0].discontinuity = true;
      playlist.discontinuityStarts.unshift(0); // No matching segment does not necessarily mean there's missing content.
      //
      // If the new playlist's timeline is the same as the last seen segment's timeline,
      // then a discontinuity can be added to identify that there's potentially missing
      // content. If there's no missing content, the discontinuity should still be rather
      // harmless. It's possible that if segment durations are accurate enough, that the
      // existence of a gap can be determined using the presentation times and durations,
      // but if the segment timing info is off, it may introduce more problems than simply
      // adding the discontinuity.
      //
      // If the new playlist's timeline is different from the last seen segment's timeline,
      // then a discontinuity can be added to identify that this is the first seen segment
      // of a new timeline. However, the logic at the start of this function that
      // determined the disconinuity sequence by timeline index is now off by one (the
      // discontinuity of the newest timeline hasn't yet fallen off the manifest...since
      // we added it), so the disconinuity sequence must be decremented.
      //
      // A period may also have a duration of zero, so the case of no segments is handled
      // here even though we don't yet support early available periods.

      if (!oldPlaylist.segments.length && playlist.timeline > oldPlaylist.timeline || oldPlaylist.segments.length && playlist.timeline > oldPlaylist.segments[oldPlaylist.segments.length - 1].timeline) {
        playlist.discontinuitySequence--;
      }

      return;
    } // If the first segment matched with a prior segment on a discontinuity (it's matching
    // on the first segment of a period), then the discontinuitySequence shouldn't be the
    // timeline's matching one, but instead should be the one prior, and the first segment
    // of the new manifest should be marked with a discontinuity.
    //
    // The reason for this special case is that discontinuity sequence shows how many
    // discontinuities have fallen off of the playlist, and discontinuities are marked on
    // the first segment of a new "timeline." Because of this, while DASH will retain that
    // Period while the "timeline" exists, HLS keeps track of it via the discontinuity
    // sequence, and that first segment is an indicator, but can be removed before that
    // timeline is gone.


    const oldMatchingSegment = oldPlaylist.segments[oldMatchingSegmentIndex];

    if (oldMatchingSegment.discontinuity && !firstNewSegment.discontinuity) {
      firstNewSegment.discontinuity = true;
      playlist.discontinuityStarts.unshift(0);
      playlist.discontinuitySequence--;
    }

    updateMediaSequenceForPlaylist({
      playlist,
      mediaSequence: oldPlaylist.segments[oldMatchingSegmentIndex].number
    });
  });
};
/**
 * Given an old parsed manifest object and a new parsed manifest object, updates the
 * sequence and timing values within the new manifest to ensure that it lines up with the
 * old.
 *
 * @param {Array} oldManifest - the old main manifest object
 * @param {Array} newManifest - the new main manifest object
 *
 * @return {Object} the updated new manifest object
 */

const positionManifestOnTimeline = ({
  oldManifest,
  newManifest
}) => {
  // Starting from v4.1.2 of the IOP, section 4.4.3.3 states:
  //
  // "MPD@availabilityStartTime and Period@start shall not be changed over MPD updates."
  //
  // This was added from https://github.com/Dash-Industry-Forum/DASH-IF-IOP/issues/160
  //
  // Because of this change, and the difficulty of supporting periods with changing start
  // times, periods with changing start times are not supported. This makes the logic much
  // simpler, since periods with the same start time can be considerred the same period
  // across refreshes.
  //
  // To give an example as to the difficulty of handling periods where the start time may
  // change, if a single period manifest is refreshed with another manifest with a single
  // period, and both the start and end times are increased, then the only way to determine
  // if it's a new period or an old one that has changed is to look through the segments of
  // each playlist and determine the presentation time bounds to find a match. In addition,
  // if the period start changed to exceed the old period end, then there would be no
  // match, and it would not be possible to determine whether the refreshed period is a new
  // one or the old one.
  const oldPlaylists = oldManifest.playlists.concat(getMediaGroupPlaylists(oldManifest));
  const newPlaylists = newManifest.playlists.concat(getMediaGroupPlaylists(newManifest)); // Save all seen timelineStarts to the new manifest. Although this potentially means that
  // there's a "memory leak" in that it will never stop growing, in reality, only a couple
  // of properties are saved for each seen Period. Even long running live streams won't
  // generate too many Periods, unless the stream is watched for decades. In the future,
  // this can be optimized by mapping to discontinuity sequence numbers for each timeline,
  // but it may not become an issue, and the additional info can be useful for debugging.

  newManifest.timelineStarts = getUniqueTimelineStarts([oldManifest.timelineStarts, newManifest.timelineStarts]);
  updateSequenceNumbers({
    oldPlaylists,
    newPlaylists,
    timelineStarts: newManifest.timelineStarts
  });
  return newManifest;
};

const generateSidxKey = sidx => sidx && sidx.uri + '-' + byteRangeToString(sidx.byterange);

const mergeDiscontiguousPlaylists = playlists => {
  // Break out playlists into groups based on their baseUrl
  const playlistsByBaseUrl = playlists.reduce(function (acc, cur) {
    if (!acc[cur.attributes.baseUrl]) {
      acc[cur.attributes.baseUrl] = [];
    }

    acc[cur.attributes.baseUrl].push(cur);
    return acc;
  }, {});
  let allPlaylists = [];
  Object.values(playlistsByBaseUrl).forEach(playlistGroup => {
    const mergedPlaylists = values(playlistGroup.reduce((acc, playlist) => {
      // assuming playlist IDs are the same across periods
      // TODO: handle multiperiod where representation sets are not the same
      // across periods
      const name = playlist.attributes.id + (playlist.attributes.lang || '');

      if (!acc[name]) {
        // First Period
        acc[name] = playlist;
        acc[name].attributes.timelineStarts = [];
      } else {
        // Subsequent Periods
        if (playlist.segments) {
          // first segment of subsequent periods signal a discontinuity
          if (playlist.segments[0]) {
            playlist.segments[0].discontinuity = true;
          }

          acc[name].segments.push(...playlist.segments);
        } // bubble up contentProtection, this assumes all DRM content
        // has the same contentProtection


        if (playlist.attributes.contentProtection) {
          acc[name].attributes.contentProtection = playlist.attributes.contentProtection;
        }
      }

      acc[name].attributes.timelineStarts.push({
        // Although they represent the same number, it's important to have both to make it
        // compatible with HLS potentially having a similar attribute.
        start: playlist.attributes.periodStart,
        timeline: playlist.attributes.periodStart
      });
      return acc;
    }, {}));
    allPlaylists = allPlaylists.concat(mergedPlaylists);
  });
  return allPlaylists.map(playlist => {
    playlist.discontinuityStarts = findIndexes(playlist.segments || [], 'discontinuity');
    return playlist;
  });
};

const addSidxSegmentsToPlaylist = (playlist, sidxMapping) => {
  const sidxKey = generateSidxKey(playlist.sidx);
  const sidxMatch = sidxKey && sidxMapping[sidxKey] && sidxMapping[sidxKey].sidx;

  if (sidxMatch) {
    addSidxSegmentsToPlaylist$1(playlist, sidxMatch, playlist.sidx.resolvedUri);
  }

  return playlist;
};
const addSidxSegmentsToPlaylists = (playlists, sidxMapping = {}) => {
  if (!Object.keys(sidxMapping).length) {
    return playlists;
  }

  for (const i in playlists) {
    playlists[i] = addSidxSegmentsToPlaylist(playlists[i], sidxMapping);
  }

  return playlists;
};
const formatAudioPlaylist = ({
  attributes,
  segments,
  sidx,
  mediaSequence,
  discontinuitySequence,
  discontinuityStarts
}, isAudioOnly) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      BANDWIDTH: attributes.bandwidth,
      CODECS: attributes.codecs,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuitySequence,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    mediaSequence,
    segments
  };

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  if (isAudioOnly) {
    playlist.attributes.AUDIO = 'audio';
    playlist.attributes.SUBTITLES = 'subs';
  }

  return playlist;
};
const formatVttPlaylist = ({
  attributes,
  segments,
  mediaSequence,
  discontinuityStarts,
  discontinuitySequence
}) => {
  if (typeof segments === 'undefined') {
    // vtt tracks may use single file in BaseURL
    segments = [{
      uri: attributes.baseUrl,
      timeline: attributes.periodStart,
      resolvedUri: attributes.baseUrl || '',
      duration: attributes.sourceDuration,
      number: 0
    }]; // targetDuration should be the same duration as the only segment

    attributes.duration = attributes.sourceDuration;
  }

  const m3u8Attributes = {
    NAME: attributes.id,
    BANDWIDTH: attributes.bandwidth,
    ['PROGRAM-ID']: 1
  };

  if (attributes.codecs) {
    m3u8Attributes.CODECS = attributes.codecs;
  }

  const vttPlaylist = {
    attributes: m3u8Attributes,
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    timelineStarts: attributes.timelineStarts,
    discontinuityStarts,
    discontinuitySequence,
    mediaSequence,
    segments
  };

  if (attributes.serviceLocation) {
    vttPlaylist.attributes.serviceLocation = attributes.serviceLocation;
  }

  return vttPlaylist;
};
const organizeAudioPlaylists = (playlists, sidxMapping = {}, isAudioOnly = false) => {
  let mainPlaylist;
  const formattedPlaylists = playlists.reduce((a, playlist) => {
    const role = playlist.attributes.role && playlist.attributes.role.value || '';
    const language = playlist.attributes.lang || '';
    let label = playlist.attributes.label || 'main';

    if (language && !playlist.attributes.label) {
      const roleLabel = role ? ` (${role})` : '';
      label = `${playlist.attributes.lang}${roleLabel}`;
    }

    if (!a[label]) {
      a[label] = {
        language,
        autoselect: true,
        default: role === 'main',
        playlists: [],
        uri: ''
      };
    }

    const formatted = addSidxSegmentsToPlaylist(formatAudioPlaylist(playlist, isAudioOnly), sidxMapping);
    a[label].playlists.push(formatted);

    if (typeof mainPlaylist === 'undefined' && role === 'main') {
      mainPlaylist = playlist;
      mainPlaylist.default = true;
    }

    return a;
  }, {}); // if no playlists have role "main", mark the first as main

  if (!mainPlaylist) {
    const firstLabel = Object.keys(formattedPlaylists)[0];
    formattedPlaylists[firstLabel].default = true;
  }

  return formattedPlaylists;
};
const organizeVttPlaylists = (playlists, sidxMapping = {}) => {
  return playlists.reduce((a, playlist) => {
    const label = playlist.attributes.label || playlist.attributes.lang || 'text';

    if (!a[label]) {
      a[label] = {
        language: label,
        default: false,
        autoselect: false,
        playlists: [],
        uri: ''
      };
    }

    a[label].playlists.push(addSidxSegmentsToPlaylist(formatVttPlaylist(playlist), sidxMapping));
    return a;
  }, {});
};

const organizeCaptionServices = captionServices => captionServices.reduce((svcObj, svc) => {
  if (!svc) {
    return svcObj;
  }

  svc.forEach(service => {
    const {
      channel,
      language
    } = service;
    svcObj[language] = {
      autoselect: false,
      default: false,
      instreamId: channel,
      language
    };

    if (service.hasOwnProperty('aspectRatio')) {
      svcObj[language].aspectRatio = service.aspectRatio;
    }

    if (service.hasOwnProperty('easyReader')) {
      svcObj[language].easyReader = service.easyReader;
    }

    if (service.hasOwnProperty('3D')) {
      svcObj[language]['3D'] = service['3D'];
    }
  });
  return svcObj;
}, {});

const formatVideoPlaylist = ({
  attributes,
  segments,
  sidx,
  discontinuityStarts
}) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      AUDIO: 'audio',
      SUBTITLES: 'subs',
      RESOLUTION: {
        width: attributes.width,
        height: attributes.height
      },
      CODECS: attributes.codecs,
      BANDWIDTH: attributes.bandwidth,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    segments
  };

  if (attributes.frameRate) {
    playlist.attributes['FRAME-RATE'] = attributes.frameRate;
  }

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  return playlist;
};

const videoOnly = ({
  attributes
}) => attributes.mimeType === 'video/mp4' || attributes.mimeType === 'video/webm' || attributes.contentType === 'video';

const audioOnly = ({
  attributes
}) => attributes.mimeType === 'audio/mp4' || attributes.mimeType === 'audio/webm' || attributes.contentType === 'audio';

const vttOnly = ({
  attributes
}) => attributes.mimeType === 'text/vtt' || attributes.contentType === 'text';
/**
 * Contains start and timeline properties denoting a timeline start. For DASH, these will
 * be the same number.
 *
 * @typedef {Object} TimelineStart
 * @property {number} start - the start time of the timeline
 * @property {number} timeline - the timeline number
 */

/**
 * Adds appropriate media and discontinuity sequence values to the segments and playlists.
 *
 * Throughout mpd-parser, the `number` attribute is used in relation to `startNumber`, a
 * DASH specific attribute used in constructing segment URI's from templates. However, from
 * an HLS perspective, the `number` attribute on a segment would be its `mediaSequence`
 * value, which should start at the original media sequence value (or 0) and increment by 1
 * for each segment thereafter. Since DASH's `startNumber` values are independent per
 * period, it doesn't make sense to use it for `number`. Instead, assume everything starts
 * from a 0 mediaSequence value and increment from there.
 *
 * Note that VHS currently doesn't use the `number` property, but it can be helpful for
 * debugging and making sense of the manifest.
 *
 * For live playlists, to account for values increasing in manifests when periods are
 * removed on refreshes, merging logic should be used to update the numbers to their
 * appropriate values (to ensure they're sequential and increasing).
 *
 * @param {Object[]} playlists - the playlists to update
 * @param {TimelineStart[]} timelineStarts - the timeline starts for the manifest
 */


const addMediaSequenceValues = (playlists, timelineStarts) => {
  // increment all segments sequentially
  playlists.forEach(playlist => {
    playlist.mediaSequence = 0;
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    });

    if (!playlist.segments) {
      return;
    }

    playlist.segments.forEach((segment, index) => {
      segment.number = index;
    });
  });
};
/**
 * Given a media group object, flattens all playlists within the media group into a single
 * array.
 *
 * @param {Object} mediaGroupObject - the media group object
 *
 * @return {Object[]}
 *         The media group playlists
 */

const flattenMediaGroupPlaylists = mediaGroupObject => {
  if (!mediaGroupObject) {
    return [];
  }

  return Object.keys(mediaGroupObject).reduce((acc, label) => {
    const labelContents = mediaGroupObject[label];
    return acc.concat(labelContents.playlists);
  }, []);
};
const toM3u8 = ({
  dashPlaylists,
  locations,
  contentSteering,
  sidxMapping = {},
  previousManifest,
  eventStream
}) => {
  if (!dashPlaylists.length) {
    return {};
  } // grab all main manifest attributes


  const {
    sourceDuration: duration,
    type,
    suggestedPresentationDelay,
    minimumUpdatePeriod
  } = dashPlaylists[0].attributes;
  const videoPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(videoOnly)).map(formatVideoPlaylist);
  const audioPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(audioOnly));
  const vttPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(vttOnly));
  const captions = dashPlaylists.map(playlist => playlist.attributes.captionServices).filter(Boolean);
  const manifest = {
    allowCache: true,
    discontinuityStarts: [],
    segments: [],
    endList: true,
    mediaGroups: {
      AUDIO: {},
      VIDEO: {},
      ['CLOSED-CAPTIONS']: {},
      SUBTITLES: {}
    },
    uri: '',
    duration,
    playlists: addSidxSegmentsToPlaylists(videoPlaylists, sidxMapping)
  };

  if (minimumUpdatePeriod >= 0) {
    manifest.minimumUpdatePeriod = minimumUpdatePeriod * 1000;
  }

  if (locations) {
    manifest.locations = locations;
  }

  if (contentSteering) {
    manifest.contentSteering = contentSteering;
  }

  if (type === 'dynamic') {
    manifest.suggestedPresentationDelay = suggestedPresentationDelay;
  }

  if (eventStream && eventStream.length > 0) {
    manifest.eventStream = eventStream;
  }

  const isAudioOnly = manifest.playlists.length === 0;
  const organizedAudioGroup = audioPlaylists.length ? organizeAudioPlaylists(audioPlaylists, sidxMapping, isAudioOnly) : null;
  const organizedVttGroup = vttPlaylists.length ? organizeVttPlaylists(vttPlaylists, sidxMapping) : null;
  const formattedPlaylists = videoPlaylists.concat(flattenMediaGroupPlaylists(organizedAudioGroup), flattenMediaGroupPlaylists(organizedVttGroup));
  const playlistTimelineStarts = formattedPlaylists.map(({
    timelineStarts
  }) => timelineStarts);
  manifest.timelineStarts = getUniqueTimelineStarts(playlistTimelineStarts);
  addMediaSequenceValues(formattedPlaylists, manifest.timelineStarts);

  if (organizedAudioGroup) {
    manifest.mediaGroups.AUDIO.audio = organizedAudioGroup;
  }

  if (organizedVttGroup) {
    manifest.mediaGroups.SUBTITLES.subs = organizedVttGroup;
  }

  if (captions.length) {
    manifest.mediaGroups['CLOSED-CAPTIONS'].cc = organizeCaptionServices(captions);
  }

  if (previousManifest) {
    return positionManifestOnTimeline({
      oldManifest: previousManifest,
      newManifest: manifest
    });
  }

  return manifest;
};

/**
 * Calculates the R (repetition) value for a live stream (for the final segment
 * in a manifest where the r value is negative 1)
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {number} time
 *        current time (typically the total time up until the final segment)
 * @param {number} duration
 *        duration property for the given <S />
 *
 * @return {number}
 *        R value to reach the end of the given period
 */
const getLiveRValue = (attributes, time, duration) => {
  const {
    NOW,
    clientOffset,
    availabilityStartTime,
    timescale = 1,
    periodStart = 0,
    minimumUpdatePeriod = 0
  } = attributes;
  const now = (NOW + clientOffset) / 1000;
  const periodStartWC = availabilityStartTime + periodStart;
  const periodEndWC = now + minimumUpdatePeriod;
  const periodDuration = periodEndWC - periodStartWC;
  return Math.ceil((periodDuration * timescale - time) / duration);
};
/**
 * Uses information provided by SegmentTemplate.SegmentTimeline to determine segment
 * timing and duration
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */


const parseByTimeline = (attributes, segmentTimeline) => {
  const {
    type,
    minimumUpdatePeriod = 0,
    media = '',
    sourceDuration,
    timescale = 1,
    startNumber = 1,
    periodStart: timeline
  } = attributes;
  const segments = [];
  let time = -1;

  for (let sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
    const S = segmentTimeline[sIndex];
    const duration = S.d;
    const repeat = S.r || 0;
    const segmentTime = S.t || 0;

    if (time < 0) {
      // first segment
      time = segmentTime;
    }

    if (segmentTime && segmentTime > time) {
      // discontinuity
      // TODO: How to handle this type of discontinuity
      // timeline++ here would treat it like HLS discontuity and content would
      // get appended without gap
      // E.G.
      //  <S t="0" d="1" />
      //  <S d="1" />
      //  <S d="1" />
      //  <S t="5" d="1" />
      // would have $Time$ values of [0, 1, 2, 5]
      // should this be appened at time positions [0, 1, 2, 3],(#EXT-X-DISCONTINUITY)
      // or [0, 1, 2, gap, gap, 5]? (#EXT-X-GAP)
      // does the value of sourceDuration consider this when calculating arbitrary
      // negative @r repeat value?
      // E.G. Same elements as above with this added at the end
      //  <S d="1" r="-1" />
      //  with a sourceDuration of 10
      // Would the 2 gaps be included in the time duration calculations resulting in
      // 8 segments with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9] or 10 segments
      // with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9, 10, 11] ?
      time = segmentTime;
    }

    let count;

    if (repeat < 0) {
      const nextS = sIndex + 1;

      if (nextS === segmentTimeline.length) {
        // last segment
        if (type === 'dynamic' && minimumUpdatePeriod > 0 && media.indexOf('$Number$') > 0) {
          count = getLiveRValue(attributes, time, duration);
        } else {
          // TODO: This may be incorrect depending on conclusion of TODO above
          count = (sourceDuration * timescale - time) / duration;
        }
      } else {
        count = (segmentTimeline[nextS].t - time) / duration;
      }
    } else {
      count = repeat + 1;
    }

    const end = startNumber + segments.length + count;
    let number = startNumber + segments.length;

    while (number < end) {
      segments.push({
        number,
        duration: duration / timescale,
        time,
        timeline
      });
      time += duration;
      number++;
    }
  }

  return segments;
};

const identifierPattern = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
/**
 * Replaces template identifiers with corresponding values. To be used as the callback
 * for String.prototype.replace
 *
 * @name replaceCallback
 * @function
 * @param {string} match
 *        Entire match of identifier
 * @param {string} identifier
 *        Name of matched identifier
 * @param {string} format
 *        Format tag string. Its presence indicates that padding is expected
 * @param {string} width
 *        Desired length of the replaced value. Values less than this width shall be left
 *        zero padded
 * @return {string}
 *         Replacement for the matched identifier
 */

/**
 * Returns a function to be used as a callback for String.prototype.replace to replace
 * template identifiers
 *
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {replaceCallback}
 *         Callback to be used with String.prototype.replace to replace identifiers
 */

const identifierReplacement = values => (match, identifier, format, width) => {
  if (match === '$$') {
    // escape sequence
    return '$';
  }

  if (typeof values[identifier] === 'undefined') {
    return match;
  }

  const value = '' + values[identifier];

  if (identifier === 'RepresentationID') {
    // Format tag shall not be present with RepresentationID
    return value;
  }

  if (!format) {
    width = 1;
  } else {
    width = parseInt(width, 10);
  }

  if (value.length >= width) {
    return value;
  }

  return `${new Array(width - value.length + 1).join('0')}${value}`;
};
/**
 * Constructs a segment url from a template string
 *
 * @param {string} url
 *        Template string to construct url from
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {string}
 *         Segment url with identifiers replaced
 */

const constructTemplateUrl = (url, values) => url.replace(identifierPattern, identifierReplacement(values));
/**
 * Generates a list of objects containing timing and duration information about each
 * segment needed to generate segment uris and the complete segment object
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseTemplateInfo = (attributes, segmentTimeline) => {
  if (!attributes.duration && !segmentTimeline) {
    // if neither @duration or SegmentTimeline are present, then there shall be exactly
    // one media segment
    return [{
      number: attributes.startNumber || 1,
      duration: attributes.sourceDuration,
      time: 0,
      timeline: attributes.periodStart
    }];
  }

  if (attributes.duration) {
    return parseByDuration(attributes);
  }

  return parseByTimeline(attributes, segmentTimeline);
};
/**
 * Generates a list of segments using information provided by the SegmentTemplate element
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object[]}
 *         List of segment objects
 */

const segmentsFromTemplate = (attributes, segmentTimeline) => {
  const templateValues = {
    RepresentationID: attributes.id,
    Bandwidth: attributes.bandwidth || 0
  };
  const {
    initialization = {
      sourceURL: '',
      range: ''
    }
  } = attributes;
  const mapSegment = urlTypeToSegment({
    baseUrl: attributes.baseUrl,
    source: constructTemplateUrl(initialization.sourceURL, templateValues),
    range: initialization.range
  });
  const segments = parseTemplateInfo(attributes, segmentTimeline);
  return segments.map(segment => {
    templateValues.Number = segment.number;
    templateValues.Time = segment.time;
    const uri = constructTemplateUrl(attributes.media || '', templateValues); // See DASH spec section 5.3.9.2.2
    // - if timescale isn't present on any level, default to 1.

    const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

    const presentationTimeOffset = attributes.presentationTimeOffset || 0;
    const presentationTime = // Even if the @t attribute is not specified for the segment, segment.time is
    // calculated in mpd-parser prior to this, so it's assumed to be available.
    attributes.periodStart + (segment.time - presentationTimeOffset) / timescale;
    const map = {
      uri,
      timeline: segment.timeline,
      duration: segment.duration,
      resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.baseUrl || '', uri),
      map: mapSegment,
      number: segment.number,
      presentationTime
    };
    return map;
  });
};

/**
 * Converts a <SegmentUrl> (of type URLType from the DASH spec 5.3.9.2 Table 14)
 * to an object that matches the output of a segment in videojs/mpd-parser
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object} segmentUrl
 *   <SegmentURL> node to translate into a segment object
 * @return {Object} translated segment object
 */

const SegmentURLToSegmentObject = (attributes, segmentUrl) => {
  const {
    baseUrl,
    initialization = {}
  } = attributes;
  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: segmentUrl.media,
    range: segmentUrl.mediaRange
  });
  segment.map = initSegment;
  return segment;
};
/**
 * Generates a list of segments using information provided by the SegmentList element
 * SegmentList (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object.<Array>} list of segments
 */


const segmentsFromList = (attributes, segmentTimeline) => {
  const {
    duration,
    segmentUrls = [],
    periodStart
  } = attributes; // Per spec (5.3.9.2.1) no way to determine segment duration OR
  // if both SegmentTimeline and @duration are defined, it is outside of spec.

  if (!duration && !segmentTimeline || duration && segmentTimeline) {
    throw new Error(errors.SEGMENT_TIME_UNSPECIFIED);
  }

  const segmentUrlMap = segmentUrls.map(segmentUrlObject => SegmentURLToSegmentObject(attributes, segmentUrlObject));
  let segmentTimeInfo;

  if (duration) {
    segmentTimeInfo = parseByDuration(attributes);
  }

  if (segmentTimeline) {
    segmentTimeInfo = parseByTimeline(attributes, segmentTimeline);
  }

  const segments = segmentTimeInfo.map((segmentTime, index) => {
    if (segmentUrlMap[index]) {
      const segment = segmentUrlMap[index]; // See DASH spec section 5.3.9.2.2
      // - if timescale isn't present on any level, default to 1.

      const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

      const presentationTimeOffset = attributes.presentationTimeOffset || 0;
      segment.timeline = segmentTime.timeline;
      segment.duration = segmentTime.duration;
      segment.number = segmentTime.number;
      segment.presentationTime = periodStart + (segmentTime.time - presentationTimeOffset) / timescale;
      return segment;
    } // Since we're mapping we should get rid of any blank segments (in case
    // the given SegmentTimeline is handling for more elements than we have
    // SegmentURLs for).

  }).filter(segment => segment);
  return segments;
};

const generateSegments = ({
  attributes,
  segmentInfo
}) => {
  let segmentAttributes;
  let segmentsFn;

  if (segmentInfo.template) {
    segmentsFn = segmentsFromTemplate;
    segmentAttributes = merge(attributes, segmentInfo.template);
  } else if (segmentInfo.base) {
    segmentsFn = segmentsFromBase;
    segmentAttributes = merge(attributes, segmentInfo.base);
  } else if (segmentInfo.list) {
    segmentsFn = segmentsFromList;
    segmentAttributes = merge(attributes, segmentInfo.list);
  }

  const segmentsInfo = {
    attributes
  };

  if (!segmentsFn) {
    return segmentsInfo;
  }

  const segments = segmentsFn(segmentAttributes, segmentInfo.segmentTimeline); // The @duration attribute will be used to determin the playlist's targetDuration which
  // must be in seconds. Since we've generated the segment list, we no longer need
  // @duration to be in @timescale units, so we can convert it here.

  if (segmentAttributes.duration) {
    const {
      duration,
      timescale = 1
    } = segmentAttributes;
    segmentAttributes.duration = duration / timescale;
  } else if (segments.length) {
    // if there is no @duration attribute, use the largest segment duration as
    // as target duration
    segmentAttributes.duration = segments.reduce((max, segment) => {
      return Math.max(max, Math.ceil(segment.duration));
    }, 0);
  } else {
    segmentAttributes.duration = 0;
  }

  segmentsInfo.attributes = segmentAttributes;
  segmentsInfo.segments = segments; // This is a sidx box without actual segment information

  if (segmentInfo.base && segmentAttributes.indexRange) {
    segmentsInfo.sidx = segments[0];
    segmentsInfo.segments = [];
  }

  return segmentsInfo;
};
const toPlaylists = representations => representations.map(generateSegments);

const findChildren = (element, name) => from(element.childNodes).filter(({
  tagName
}) => tagName === name);
const getContent = element => element.textContent.trim();

/**
 * Converts the provided string that may contain a division operation to a number.
 *
 * @param {string} value - the provided string value
 *
 * @return {number} the parsed string value
 */
const parseDivisionValue = value => {
  return parseFloat(value.split('/').reduce((prev, current) => prev / current));
};

const parseDuration = str => {
  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  const SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MIN = 60; // P10Y10M10DT10H10M10.1S

  const durationRegex = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/;
  const match = durationRegex.exec(str);

  if (!match) {
    return 0;
  }

  const [year, month, day, hour, minute, second] = match.slice(1);
  return parseFloat(year || 0) * SECONDS_IN_YEAR + parseFloat(month || 0) * SECONDS_IN_MONTH + parseFloat(day || 0) * SECONDS_IN_DAY + parseFloat(hour || 0) * SECONDS_IN_HOUR + parseFloat(minute || 0) * SECONDS_IN_MIN + parseFloat(second || 0);
};
const parseDate = str => {
  // Date format without timezone according to ISO 8601
  // YYY-MM-DDThh:mm:ss.ssssss
  const dateRegex = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/; // If the date string does not specifiy a timezone, we must specifiy UTC. This is
  // expressed by ending with 'Z'

  if (dateRegex.test(str)) {
    str += 'Z';
  }

  return Date.parse(str);
};

const parsers = {
  /**
   * Specifies the duration of the entire Media Presentation. Format is a duration string
   * as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  mediaPresentationDuration(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the Segment availability start time for all Segments referred to in this
   * MPD. For a dynamic manifest, it specifies the anchor for the earliest availability
   * time. Format is a date string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The date as seconds from unix epoch
   */
  availabilityStartTime(value) {
    return parseDate(value) / 1000;
  },

  /**
   * Specifies the smallest period between potential changes to the MPD. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  minimumUpdatePeriod(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the suggested presentation delay. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  suggestedPresentationDelay(value) {
    return parseDuration(value);
  },

  /**
   * specifices the type of mpd. Can be either "static" or "dynamic"
   *
   * @param {string} value
   *        value of attribute as a string
   *
   * @return {string}
   *         The type as a string
   */
  type(value) {
    return value;
  },

  /**
   * Specifies the duration of the smallest time shifting buffer for any Representation
   * in the MPD. Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  timeShiftBufferDepth(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the PeriodStart time of the Period relative to the availabilityStarttime.
   * Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  start(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the width of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed width
   */
  width(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the height of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed height
   */
  height(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the bitrate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed bandwidth
   */
  bandwidth(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the frame rate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed frame rate
   */
  frameRate(value) {
    return parseDivisionValue(value);
  },

  /**
   * Specifies the number of the first Media Segment in this Representation in the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  startNumber(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the timescale in units per seconds
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed timescale
   */
  timescale(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTimeOffset.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTimeOffset
   */
  presentationTimeOffset(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the constant approximate Segment duration
   * NOTE: The <Period> element also contains an @duration attribute. This duration
   *       specifies the duration of the Period. This attribute is currently not
   *       supported by the rest of the parser, however we still check for it to prevent
   *       errors.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  duration(value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return parseDuration(value);
    }

    return parsedValue;
  },

  /**
   * Specifies the Segment duration, in units of the value of the @timescale.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  d(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the MPD start time, in @timescale units, the first Segment in the series
   * starts relative to the beginning of the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed time
   */
  t(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the repeat count of the number of following contiguous Segments with the
   * same duration expressed by the value of @d
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  r(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTime.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTime
   */
  presentationTime(value) {
    return parseInt(value, 10);
  },

  /**
   * Default parser for all other attributes. Acts as a no-op and just returns the value
   * as a string
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {string}
   *         Unparsed value
   */
  DEFAULT(value) {
    return value;
  }

};
/**
 * Gets all the attributes and values of the provided node, parses attributes with known
 * types, and returns an object with attribute names mapped to values.
 *
 * @param {Node} el
 *        The node to parse attributes from
 * @return {Object}
 *         Object with all attributes of el parsed
 */

const parseAttributes = el => {
  if (!(el && el.attributes)) {
    return {};
  }

  return from(el.attributes).reduce((a, e) => {
    const parseFn = parsers[e.name] || parsers.DEFAULT;
    a[e.name] = parseFn(e.value);
    return a;
  }, {});
};

const keySystemsMap = {
  'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
  'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
  'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
  'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
};
/**
 * Builds a list of urls that is the product of the reference urls and BaseURL values
 *
 * @param {Object[]} references
 *        List of objects containing the reference URL as well as its attributes
 * @param {Node[]} baseUrlElements
 *        List of BaseURL nodes from the mpd
 * @return {Object[]}
 *         List of objects with resolved urls and attributes
 */

const buildBaseUrls = (references, baseUrlElements) => {
  if (!baseUrlElements.length) {
    return references;
  }

  return flatten(references.map(function (reference) {
    return baseUrlElements.map(function (baseUrlElement) {
      const initialBaseUrl = getContent(baseUrlElement);
      const resolvedBaseUrl = (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(reference.baseUrl, initialBaseUrl);
      const finalBaseUrl = merge(parseAttributes(baseUrlElement), {
        baseUrl: resolvedBaseUrl
      }); // If the URL is resolved, we want to get the serviceLocation from the reference
      // assuming there is no serviceLocation on the initialBaseUrl

      if (resolvedBaseUrl !== initialBaseUrl && !finalBaseUrl.serviceLocation && reference.serviceLocation) {
        finalBaseUrl.serviceLocation = reference.serviceLocation;
      }

      return finalBaseUrl;
    });
  }));
};
/**
 * Contains all Segment information for its containing AdaptationSet
 *
 * @typedef {Object} SegmentInformation
 * @property {Object|undefined} template
 *           Contains the attributes for the SegmentTemplate node
 * @property {Object[]|undefined} segmentTimeline
 *           Contains a list of atrributes for each S node within the SegmentTimeline node
 * @property {Object|undefined} list
 *           Contains the attributes for the SegmentList node
 * @property {Object|undefined} base
 *           Contains the attributes for the SegmentBase node
 */

/**
 * Returns all available Segment information contained within the AdaptationSet node
 *
 * @param {Node} adaptationSet
 *        The AdaptationSet node to get Segment information from
 * @return {SegmentInformation}
 *         The Segment information contained within the provided AdaptationSet
 */

const getSegmentInformation = adaptationSet => {
  const segmentTemplate = findChildren(adaptationSet, 'SegmentTemplate')[0];
  const segmentList = findChildren(adaptationSet, 'SegmentList')[0];
  const segmentUrls = segmentList && findChildren(segmentList, 'SegmentURL').map(s => merge({
    tag: 'SegmentURL'
  }, parseAttributes(s)));
  const segmentBase = findChildren(adaptationSet, 'SegmentBase')[0];
  const segmentTimelineParentNode = segmentList || segmentTemplate;
  const segmentTimeline = segmentTimelineParentNode && findChildren(segmentTimelineParentNode, 'SegmentTimeline')[0];
  const segmentInitializationParentNode = segmentList || segmentBase || segmentTemplate;
  const segmentInitialization = segmentInitializationParentNode && findChildren(segmentInitializationParentNode, 'Initialization')[0]; // SegmentTemplate is handled slightly differently, since it can have both
  // @initialization and an <Initialization> node.  @initialization can be templated,
  // while the node can have a url and range specified.  If the <SegmentTemplate> has
  // both @initialization and an <Initialization> subelement we opt to override with
  // the node, as this interaction is not defined in the spec.

  const template = segmentTemplate && parseAttributes(segmentTemplate);

  if (template && segmentInitialization) {
    template.initialization = segmentInitialization && parseAttributes(segmentInitialization);
  } else if (template && template.initialization) {
    // If it is @initialization we convert it to an object since this is the format that
    // later functions will rely on for the initialization segment.  This is only valid
    // for <SegmentTemplate>
    template.initialization = {
      sourceURL: template.initialization
    };
  }

  const segmentInfo = {
    template,
    segmentTimeline: segmentTimeline && findChildren(segmentTimeline, 'S').map(s => parseAttributes(s)),
    list: segmentList && merge(parseAttributes(segmentList), {
      segmentUrls,
      initialization: parseAttributes(segmentInitialization)
    }),
    base: segmentBase && merge(parseAttributes(segmentBase), {
      initialization: parseAttributes(segmentInitialization)
    })
  };
  Object.keys(segmentInfo).forEach(key => {
    if (!segmentInfo[key]) {
      delete segmentInfo[key];
    }
  });
  return segmentInfo;
};
/**
 * Contains Segment information and attributes needed to construct a Playlist object
 * from a Representation
 *
 * @typedef {Object} RepresentationInformation
 * @property {SegmentInformation} segmentInfo
 *           Segment information for this Representation
 * @property {Object} attributes
 *           Inherited attributes for this Representation
 */

/**
 * Maps a Representation node to an object containing Segment information and attributes
 *
 * @name inheritBaseUrlsCallback
 * @function
 * @param {Node} representation
 *        Representation node from the mpd
 * @return {RepresentationInformation}
 *         Representation information needed to construct a Playlist object
 */

/**
 * Returns a callback for Array.prototype.map for mapping Representation nodes to
 * Segment information and attributes using inherited BaseURL nodes.
 *
 * @param {Object} adaptationSetAttributes
 *        Contains attributes inherited by the AdaptationSet
 * @param {Object[]} adaptationSetBaseUrls
 *        List of objects containing resolved base URLs and attributes
 *        inherited by the AdaptationSet
 * @param {SegmentInformation} adaptationSetSegmentInfo
 *        Contains Segment information for the AdaptationSet
 * @return {inheritBaseUrlsCallback}
 *         Callback map function
 */

const inheritBaseUrls = (adaptationSetAttributes, adaptationSetBaseUrls, adaptationSetSegmentInfo) => representation => {
  const repBaseUrlElements = findChildren(representation, 'BaseURL');
  const repBaseUrls = buildBaseUrls(adaptationSetBaseUrls, repBaseUrlElements);
  const attributes = merge(adaptationSetAttributes, parseAttributes(representation));
  const representationSegmentInfo = getSegmentInformation(representation);
  return repBaseUrls.map(baseUrl => {
    return {
      segmentInfo: merge(adaptationSetSegmentInfo, representationSegmentInfo),
      attributes: merge(attributes, baseUrl)
    };
  });
};
/**
 * Tranforms a series of content protection nodes to
 * an object containing pssh data by key system
 *
 * @param {Node[]} contentProtectionNodes
 *        Content protection nodes
 * @return {Object}
 *        Object containing pssh data by key system
 */

const generateKeySystemInformation = contentProtectionNodes => {
  return contentProtectionNodes.reduce((acc, node) => {
    const attributes = parseAttributes(node); // Although it could be argued that according to the UUID RFC spec the UUID string (a-f chars) should be generated
    // as a lowercase string it also mentions it should be treated as case-insensitive on input. Since the key system
    // UUIDs in the keySystemsMap are hardcoded as lowercase in the codebase there isn't any reason not to do
    // .toLowerCase() on the input UUID string from the manifest (at least I could not think of one).

    if (attributes.schemeIdUri) {
      attributes.schemeIdUri = attributes.schemeIdUri.toLowerCase();
    }

    const keySystem = keySystemsMap[attributes.schemeIdUri];

    if (keySystem) {
      acc[keySystem] = {
        attributes
      };
      const psshNode = findChildren(node, 'cenc:pssh')[0];

      if (psshNode) {
        const pssh = getContent(psshNode);
        acc[keySystem].pssh = pssh && (0,_videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__["default"])(pssh);
      }
    }

    return acc;
  }, {});
}; // defined in ANSI_SCTE 214-1 2016


const parseCaptionServiceMetadata = service => {
  // 608 captions
  if (service.schemeIdUri === 'urn:scte:dash:cc:cea-608:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      let channel;
      let language; // default language to value

      language = value;

      if (/^CC\d=/.test(value)) {
        [channel, language] = value.split('=');
      } else if (/^CC\d$/.test(value)) {
        channel = value;
      }

      return {
        channel,
        language
      };
    });
  } else if (service.schemeIdUri === 'urn:scte:dash:cc:cea-708:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      const flags = {
        // service or channel number 1-63
        'channel': undefined,
        // language is a 3ALPHA per ISO 639.2/B
        // field is required
        'language': undefined,
        // BIT 1/0 or ?
        // default value is 1, meaning 16:9 aspect ratio, 0 is 4:3, ? is unknown
        'aspectRatio': 1,
        // BIT 1/0
        // easy reader flag indicated the text is tailed to the needs of beginning readers
        // default 0, or off
        'easyReader': 0,
        // BIT 1/0
        // If 3d metadata is present (CEA-708.1) then 1
        // default 0
        '3D': 0
      };

      if (/=/.test(value)) {
        const [channel, opts = ''] = value.split('=');
        flags.channel = channel;
        flags.language = value;
        opts.split(',').forEach(opt => {
          const [name, val] = opt.split(':');

          if (name === 'lang') {
            flags.language = val; // er for easyReadery
          } else if (name === 'er') {
            flags.easyReader = Number(val); // war for wide aspect ratio
          } else if (name === 'war') {
            flags.aspectRatio = Number(val);
          } else if (name === '3D') {
            flags['3D'] = Number(val);
          }
        });
      } else {
        flags.language = value;
      }

      if (flags.channel) {
        flags.channel = 'SERVICE' + flags.channel;
      }

      return flags;
    });
  }
};
/**
 * A map callback that will parse all event stream data for a collection of periods
 * DASH ISO_IEC_23009 5.10.2.2
 * https://dashif-documents.azurewebsites.net/Events/master/event.html#mpd-event-timing
 *
 * @param {PeriodInformation} period object containing necessary period information
 * @return a collection of parsed eventstream event objects
 */

const toEventStream = period => {
  // get and flatten all EventStreams tags and parse attributes and children
  return flatten(findChildren(period.node, 'EventStream').map(eventStream => {
    const eventStreamAttributes = parseAttributes(eventStream);
    const schemeIdUri = eventStreamAttributes.schemeIdUri; // find all Events per EventStream tag and map to return objects

    return findChildren(eventStream, 'Event').map(event => {
      const eventAttributes = parseAttributes(event);
      const presentationTime = eventAttributes.presentationTime || 0;
      const timescale = eventStreamAttributes.timescale || 1;
      const duration = eventAttributes.duration || 0;
      const start = presentationTime / timescale + period.attributes.start;
      return {
        schemeIdUri,
        value: eventStreamAttributes.value,
        id: eventAttributes.id,
        start,
        end: start + duration / timescale,
        messageData: getContent(event) || eventAttributes.messageData,
        contentEncoding: eventStreamAttributes.contentEncoding,
        presentationTimeOffset: eventStreamAttributes.presentationTimeOffset || 0
      };
    });
  }));
};
/**
 * Maps an AdaptationSet node to a list of Representation information objects
 *
 * @name toRepresentationsCallback
 * @function
 * @param {Node} adaptationSet
 *        AdaptationSet node from the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping AdaptationSet nodes to a list of
 * Representation information objects
 *
 * @param {Object} periodAttributes
 *        Contains attributes inherited by the Period
 * @param {Object[]} periodBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the Period
 * @param {string[]} periodSegmentInfo
 *        Contains Segment Information at the period level
 * @return {toRepresentationsCallback}
 *         Callback map function
 */

const toRepresentations = (periodAttributes, periodBaseUrls, periodSegmentInfo) => adaptationSet => {
  const adaptationSetAttributes = parseAttributes(adaptationSet);
  const adaptationSetBaseUrls = buildBaseUrls(periodBaseUrls, findChildren(adaptationSet, 'BaseURL'));
  const role = findChildren(adaptationSet, 'Role')[0];
  const roleAttributes = {
    role: parseAttributes(role)
  };
  let attrs = merge(periodAttributes, adaptationSetAttributes, roleAttributes);
  const accessibility = findChildren(adaptationSet, 'Accessibility')[0];
  const captionServices = parseCaptionServiceMetadata(parseAttributes(accessibility));

  if (captionServices) {
    attrs = merge(attrs, {
      captionServices
    });
  }

  const label = findChildren(adaptationSet, 'Label')[0];

  if (label && label.childNodes.length) {
    const labelVal = label.childNodes[0].nodeValue.trim();
    attrs = merge(attrs, {
      label: labelVal
    });
  }

  const contentProtection = generateKeySystemInformation(findChildren(adaptationSet, 'ContentProtection'));

  if (Object.keys(contentProtection).length) {
    attrs = merge(attrs, {
      contentProtection
    });
  }

  const segmentInfo = getSegmentInformation(adaptationSet);
  const representations = findChildren(adaptationSet, 'Representation');
  const adaptationSetSegmentInfo = merge(periodSegmentInfo, segmentInfo);
  return flatten(representations.map(inheritBaseUrls(attrs, adaptationSetBaseUrls, adaptationSetSegmentInfo)));
};
/**
 * Contains all period information for mapping nodes onto adaptation sets.
 *
 * @typedef {Object} PeriodInformation
 * @property {Node} period.node
 *           Period node from the mpd
 * @property {Object} period.attributes
 *           Parsed period attributes from node plus any added
 */

/**
 * Maps a PeriodInformation object to a list of Representation information objects for all
 * AdaptationSet nodes contained within the Period.
 *
 * @name toAdaptationSetsCallback
 * @function
 * @param {PeriodInformation} period
 *        Period object containing necessary period information
 * @param {number} periodStart
 *        Start time of the Period within the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping Period nodes to a list of
 * Representation information objects
 *
 * @param {Object} mpdAttributes
 *        Contains attributes inherited by the mpd
  * @param {Object[]} mpdBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the mpd
 * @return {toAdaptationSetsCallback}
 *         Callback map function
 */

const toAdaptationSets = (mpdAttributes, mpdBaseUrls) => (period, index) => {
  const periodBaseUrls = buildBaseUrls(mpdBaseUrls, findChildren(period.node, 'BaseURL'));
  const periodAttributes = merge(mpdAttributes, {
    periodStart: period.attributes.start
  });

  if (typeof period.attributes.duration === 'number') {
    periodAttributes.periodDuration = period.attributes.duration;
  }

  const adaptationSets = findChildren(period.node, 'AdaptationSet');
  const periodSegmentInfo = getSegmentInformation(period.node);
  return flatten(adaptationSets.map(toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo)));
};
/**
 * Tranforms an array of content steering nodes into an object
 * containing CDN content steering information from the MPD manifest.
 *
 * For more information on the DASH spec for Content Steering parsing, see:
 * https://dashif.org/docs/DASH-IF-CTS-00XX-Content-Steering-Community-Review.pdf
 *
 * @param {Node[]} contentSteeringNodes
 *        Content steering nodes
 * @param {Function} eventHandler
 *        The event handler passed into the parser options to handle warnings
 * @return {Object}
 *        Object containing content steering data
 */

const generateContentSteeringInformation = (contentSteeringNodes, eventHandler) => {
  // If there are more than one ContentSteering tags, throw an error
  if (contentSteeringNodes.length > 1) {
    eventHandler({
      type: 'warn',
      message: 'The MPD manifest should contain no more than one ContentSteering tag'
    });
  } // Return a null value if there are no ContentSteering tags


  if (!contentSteeringNodes.length) {
    return null;
  }

  const infoFromContentSteeringTag = merge({
    serverURL: getContent(contentSteeringNodes[0])
  }, parseAttributes(contentSteeringNodes[0])); // Converts `queryBeforeStart` to a boolean, as well as setting the default value
  // to `false` if it doesn't exist

  infoFromContentSteeringTag.queryBeforeStart = infoFromContentSteeringTag.queryBeforeStart === 'true';
  return infoFromContentSteeringTag;
};
/**
 * Gets Period@start property for a given period.
 *
 * @param {Object} options
 *        Options object
 * @param {Object} options.attributes
 *        Period attributes
 * @param {Object} [options.priorPeriodAttributes]
 *        Prior period attributes (if prior period is available)
 * @param {string} options.mpdType
 *        The MPD@type these periods came from
 * @return {number|null}
 *         The period start, or null if it's an early available period or error
 */

const getPeriodStart = ({
  attributes,
  priorPeriodAttributes,
  mpdType
}) => {
  // Summary of period start time calculation from DASH spec section 5.3.2.1
  //
  // A period's start is the first period's start + time elapsed after playing all
  // prior periods to this one. Periods continue one after the other in time (without
  // gaps) until the end of the presentation.
  //
  // The value of Period@start should be:
  // 1. if Period@start is present: value of Period@start
  // 2. if previous period exists and it has @duration: previous Period@start +
  //    previous Period@duration
  // 3. if this is first period and MPD@type is 'static': 0
  // 4. in all other cases, consider the period an "early available period" (note: not
  //    currently supported)
  // (1)
  if (typeof attributes.start === 'number') {
    return attributes.start;
  } // (2)


  if (priorPeriodAttributes && typeof priorPeriodAttributes.start === 'number' && typeof priorPeriodAttributes.duration === 'number') {
    return priorPeriodAttributes.start + priorPeriodAttributes.duration;
  } // (3)


  if (!priorPeriodAttributes && mpdType === 'static') {
    return 0;
  } // (4)
  // There is currently no logic for calculating the Period@start value if there is
  // no Period@start or prior Period@start and Period@duration available. This is not made
  // explicit by the DASH interop guidelines or the DASH spec, however, since there's
  // nothing about any other resolution strategies, it's implied. Thus, this case should
  // be considered an early available period, or error, and null should suffice for both
  // of those cases.


  return null;
};
/**
 * Traverses the mpd xml tree to generate a list of Representation information objects
 * that have inherited attributes from parent nodes
 *
 * @param {Node} mpd
 *        The root node of the mpd
 * @param {Object} options
 *        Available options for inheritAttributes
 * @param {string} options.manifestUri
 *        The uri source of the mpd
 * @param {number} options.NOW
 *        Current time per DASH IOP.  Default is current time in ms since epoch
 * @param {number} options.clientOffset
 *        Client time difference from NOW (in milliseconds)
 * @return {RepresentationInformation[]}
 *         List of objects containing Representation information
 */

const inheritAttributes = (mpd, options = {}) => {
  const {
    manifestUri = '',
    NOW = Date.now(),
    clientOffset = 0,
    // TODO: For now, we are expecting an eventHandler callback function
    // to be passed into the mpd parser as an option.
    // In the future, we should enable stream parsing by using the Stream class from vhs-utils.
    // This will support new features including a standardized event handler.
    // See the m3u8 parser for examples of how stream parsing is currently used for HLS parsing.
    // https://github.com/videojs/vhs-utils/blob/88d6e10c631e57a5af02c5a62bc7376cd456b4f5/src/stream.js#L9
    eventHandler = function () {}
  } = options;
  const periodNodes = findChildren(mpd, 'Period');

  if (!periodNodes.length) {
    throw new Error(errors.INVALID_NUMBER_OF_PERIOD);
  }

  const locations = findChildren(mpd, 'Location');
  const mpdAttributes = parseAttributes(mpd);
  const mpdBaseUrls = buildBaseUrls([{
    baseUrl: manifestUri
  }], findChildren(mpd, 'BaseURL'));
  const contentSteeringNodes = findChildren(mpd, 'ContentSteering'); // See DASH spec section 5.3.1.2, Semantics of MPD element. Default type to 'static'.

  mpdAttributes.type = mpdAttributes.type || 'static';
  mpdAttributes.sourceDuration = mpdAttributes.mediaPresentationDuration || 0;
  mpdAttributes.NOW = NOW;
  mpdAttributes.clientOffset = clientOffset;

  if (locations.length) {
    mpdAttributes.locations = locations.map(getContent);
  }

  const periods = []; // Since toAdaptationSets acts on individual periods right now, the simplest approach to
  // adding properties that require looking at prior periods is to parse attributes and add
  // missing ones before toAdaptationSets is called. If more such properties are added, it
  // may be better to refactor toAdaptationSets.

  periodNodes.forEach((node, index) => {
    const attributes = parseAttributes(node); // Use the last modified prior period, as it may contain added information necessary
    // for this period.

    const priorPeriod = periods[index - 1];
    attributes.start = getPeriodStart({
      attributes,
      priorPeriodAttributes: priorPeriod ? priorPeriod.attributes : null,
      mpdType: mpdAttributes.type
    });
    periods.push({
      node,
      attributes
    });
  });
  return {
    locations: mpdAttributes.locations,
    contentSteeringInfo: generateContentSteeringInformation(contentSteeringNodes, eventHandler),
    // TODO: There are occurences where this `representationInfo` array contains undesired
    // duplicates. This generally occurs when there are multiple BaseURL nodes that are
    // direct children of the MPD node. When we attempt to resolve URLs from a combination of the
    // parent BaseURL and a child BaseURL, and the value does not resolve,
    // we end up returning the child BaseURL multiple times.
    // We need to determine a way to remove these duplicates in a safe way.
    // See: https://github.com/videojs/mpd-parser/pull/17#discussion_r162750527
    representationInfo: flatten(periods.map(toAdaptationSets(mpdAttributes, mpdBaseUrls))),
    eventStream: flatten(periods.map(toEventStream))
  };
};

const stringToMpdXml = manifestString => {
  if (manifestString === '') {
    throw new Error(errors.DASH_EMPTY_MANIFEST);
  }

  const parser = new _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__.DOMParser();
  let xml;
  let mpd;

  try {
    xml = parser.parseFromString(manifestString, 'application/xml');
    mpd = xml && xml.documentElement.tagName === 'MPD' ? xml.documentElement : null;
  } catch (e) {// ie 11 throws on invalid xml
  }

  if (!mpd || mpd && mpd.getElementsByTagName('parsererror').length > 0) {
    throw new Error(errors.DASH_INVALID_XML);
  }

  return mpd;
};

/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} mpd
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */

const parseUTCTimingScheme = mpd => {
  const UTCTimingNode = findChildren(mpd, 'UTCTiming')[0];

  if (!UTCTimingNode) {
    return null;
  }

  const attributes = parseAttributes(UTCTimingNode);

  switch (attributes.schemeIdUri) {
    case 'urn:mpeg:dash:utc:http-head:2014':
    case 'urn:mpeg:dash:utc:http-head:2012':
      attributes.method = 'HEAD';
      break;

    case 'urn:mpeg:dash:utc:http-xsdate:2014':
    case 'urn:mpeg:dash:utc:http-iso:2014':
    case 'urn:mpeg:dash:utc:http-xsdate:2012':
    case 'urn:mpeg:dash:utc:http-iso:2012':
      attributes.method = 'GET';
      break;

    case 'urn:mpeg:dash:utc:direct:2014':
    case 'urn:mpeg:dash:utc:direct:2012':
      attributes.method = 'DIRECT';
      attributes.value = Date.parse(attributes.value);
      break;

    case 'urn:mpeg:dash:utc:http-ntp:2014':
    case 'urn:mpeg:dash:utc:ntp:2014':
    case 'urn:mpeg:dash:utc:sntp:2014':
    default:
      throw new Error(errors.UNSUPPORTED_UTC_TIMING_SCHEME);
  }

  return attributes;
};

const VERSION = version;
/*
 * Given a DASH manifest string and options, parses the DASH manifest into an object in the
 * form outputed by m3u8-parser and accepted by videojs/http-streaming.
 *
 * For live DASH manifests, if `previousManifest` is provided in options, then the newly
 * parsed DASH manifest will have its media sequence and discontinuity sequence values
 * updated to reflect its position relative to the prior manifest.
 *
 * @param {string} manifestString - the DASH manifest as a string
 * @param {options} [options] - any options
 *
 * @return {Object} the manifest object
 */

const parse = (manifestString, options = {}) => {
  const parsedManifestInfo = inheritAttributes(stringToMpdXml(manifestString), options);
  const playlists = toPlaylists(parsedManifestInfo.representationInfo);
  return toM3u8({
    dashPlaylists: playlists,
    locations: parsedManifestInfo.locations,
    contentSteering: parsedManifestInfo.contentSteeringInfo,
    sidxMapping: options.sidxMapping,
    previousManifest: options.previousManifest,
    eventStream: parsedManifestInfo.eventStream
  });
};
/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} manifestString
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */


const parseUTCTiming = manifestString => parseUTCTimingScheme(stringToMpdXml(manifestString));




/***/ }),

/***/ "./src/mpd-parser.ts":
/*!***************************!*\
  !*** ./src/mpd-parser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAudioFromManifest: () => (/* binding */ getAudioFromManifest),
/* harmony export */   getVideoFromManifest: () => (/* binding */ getVideoFromManifest)
/* harmony export */ });
/* harmony import */ var mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mpd-parser */ "./node_modules/mpd-parser/dist/mpd-parser.es.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var fetchManifest = function (manifestUri) { return __awaiter(void 0, void 0, void 0, function () {
    var manifestResponse, manifest;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(manifestUri)];
            case 1:
                manifestResponse = _a.sent();
                return [4 /*yield*/, manifestResponse.text()];
            case 2:
                manifest = _a.sent();
                return [2 /*return*/, (0,mpd_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(manifest)];
        }
    });
}); };
var getVideoFromManifest = function (manifestUri) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedManifest, playlistIndex, codecs, segments, initializationSegment, duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchManifest(manifestUri)];
            case 1:
                parsedManifest = _a.sent();
                playlistIndex = 1;
                codecs = parsedManifest.playlists[playlistIndex].attributes.CODECS;
                segments = parsedManifest.playlists[playlistIndex].segments.map(function (segment) { return "".concat(segment.uri); });
                initializationSegment = "".concat(parsedManifest.playlists[playlistIndex].segments[0].map.uri);
                duration = parsedManifest.duration;
                return [2 /*return*/, { codecs: codecs, segments: segments, initializationSegment: initializationSegment, duration: duration }];
        }
    });
}); };
var getAudioFromManifest = function (manifestUri, isEc3Audio) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedManifest, playlistIndex, codecs, segments, initializationSegment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchManifest(manifestUri)];
            case 1:
                parsedManifest = _a.sent();
                playlistIndex = isEc3Audio ? 1 : 0;
                codecs = parsedManifest.mediaGroups.AUDIO.audio["en-US (main)"].playlists[playlistIndex].attributes.CODECS;
                segments = parsedManifest.mediaGroups.AUDIO.audio["en-US (main)"].playlists[playlistIndex].segments.map(function (segment) { return "".concat(segment.uri); });
                initializationSegment = "".concat(parsedManifest.mediaGroups.AUDIO.audio["en-US (main)"].playlists[playlistIndex].segments[0].map.uri);
                return [2 /*return*/, { codecs: codecs, segments: segments, initializationSegment: initializationSegment }];
        }
    });
}); };


/***/ }),

/***/ "./node_modules/url-toolkit/src/url-toolkit.js":
/*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************/
/***/ (function(module) {

// see https://tools.ietf.org/html/rfc1808

(function (root) {
  var URL_REGEX =
    /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
  var FIRST_SEGMENT_REGEX = /^(?=([^\/?#]*))\1([^]*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;

  var URLToolkit = {
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function (baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
        if (!basePartsForNormalise) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(
          basePartsForNormalise.path
        );
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = URLToolkit.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = URLToolkit.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment,
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath =
              baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) +
              relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize
          ? URLToolkit.normalizePath(relativeParts.path)
          : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function (url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || '',
      };
    },
    normalizePath: function (path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (
        path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length
      ) {}
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function (parts) {
      return (
        parts.scheme +
        parts.netLoc +
        parts.path +
        parts.params +
        parts.query +
        parts.fragment
      );
    },
  };

  if (true)
    module.exports = URLToolkit;
  else {}
})(this);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/mpd-parser */ "./src/mpd-parser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var startPlayback = function (isEc3Audio) { return __awaiter(void 0, void 0, void 0, function () {
    function getMp4Data(mp4Uri) {
        return __awaiter(this, void 0, void 0, function () {
            var mp4Response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(mp4Uri)];
                    case 1:
                        mp4Response = _a.sent();
                        return [2 /*return*/, mp4Response.arrayBuffer()];
                }
            });
        });
    }
    function appendSourceBuffer(mimeCodec, segments, initializationSegment, onEnd) {
        return __awaiter(this, void 0, void 0, function () {
            var index, sourceBuffer, firstSegment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
                        sourceBuffer.addEventListener("updateend", function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var nextSegmentUri, nextSegment;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(!sourceBuffer.updating && index !== segments.length)) return [3 /*break*/, 2];
                                            nextSegmentUri = segments[index];
                                            return [4 /*yield*/, getMp4Data(nextSegmentUri)];
                                        case 1:
                                            nextSegment = _a.sent();
                                            sourceBuffer.appendBuffer(nextSegment);
                                            index++;
                                            _a.label = 2;
                                        case 2:
                                            if (mediaSource.readyState === "open" &&
                                                !sourceBuffer.updating &&
                                                index === segments.length) {
                                                onEnd();
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [4 /*yield*/, getMp4Data(initializationSegment)];
                    case 1:
                        firstSegment = _a.sent();
                        sourceBuffer.appendBuffer(firstSegment);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onSourceOpen() {
        return __awaiter(this, void 0, void 0, function () {
            var hasAudioBufferReachedTheEnd, hasVideoBufferReachedTheEnd, onVideoEnded, onAudioEnded;
            return __generator(this, function (_a) {
                URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
                mediaSource.removeEventListener("sourceopen", onSourceOpen.bind(mediaSource));
                mediaSource.duration = duration;
                hasAudioBufferReachedTheEnd = false;
                hasVideoBufferReachedTheEnd = false;
                onVideoEnded = function () {
                    hasVideoBufferReachedTheEnd = true;
                    if (hasAudioBufferReachedTheEnd) {
                        mediaSource.endOfStream();
                    }
                };
                onAudioEnded = function () {
                    hasAudioBufferReachedTheEnd = true;
                    if (hasVideoBufferReachedTheEnd) {
                        mediaSource.endOfStream();
                    }
                };
                appendSourceBuffer(videoMimeCodec, videoSegments, videoInitializationSegment, onVideoEnded);
                appendSourceBuffer(audioMimeCodec, audioSegments, audioInitializationSegment, onAudioEnded);
                video.play();
                return [2 /*return*/];
            });
        });
    }
    var video, _a, audioCodecs, audioSegments, audioInitializationSegment, _b, videoCodecs, videoSegments, videoInitializationSegment, duration, videoMimeCodec, audioMimeCodec, mediaSource, url;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                video = document.createElement("video");
                video.style.width = "640px";
                video.setAttribute("controls", "");
                document.getElementsByTagName("body")[0].appendChild(video);
                return [4 /*yield*/, (0,_src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__.getAudioFromManifest)(
                    //    "https://g001-sf-eu-cmaf-prd-ak.pcdn01.cssott.com/SST/g2/GMO_00000000210233_92/SST_1676484729495-sPuUp_01/mpeg_cenc_2sec/master_manifest_default_r18.mpd?audio=all&subtitle=all&forcedNarrative=true&trickplay=true",
                    "https://live-dev-cdn7-tve.cdn.viaplay.tv/vp/kanal6/kanal6.isml/index.mpd", isEc3Audio)];
            case 1:
                _a = _c.sent(), audioCodecs = _a.codecs, audioSegments = _a.segments, audioInitializationSegment = _a.initializationSegment;
                return [4 /*yield*/, (0,_src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__.getVideoFromManifest)(
                    //      "https://g001-sf-eu-cmaf-prd-ak.pcdn01.cssott.com/SST/g2/GMO_00000000210233_92/SST_1676484729495-sPuUp_01/mpeg_cenc_2sec/master_manifest_default_r18.mpd?audio=all&subtitle=all&forcedNarrative=true&trickplay=true"  
                    "https://live-dev-cdn7-tve.cdn.viaplay.tv/vp/kanal6/kanal6.isml/index.mpd")];
            case 2:
                _b = _c.sent(), videoCodecs = _b.codecs, videoSegments = _b.segments, videoInitializationSegment = _b.initializationSegment, duration = _b.duration;
                videoMimeCodec = "video/mp4; codecs=\"".concat(videoCodecs, "\"");
                audioMimeCodec = "audio/mp4; codecs=\"".concat(audioCodecs, "\"");
                if (!MediaSource.isTypeSupported(videoMimeCodec)) {
                    console.error("Unsupported media format: ", videoMimeCodec);
                    return [2 /*return*/];
                }
                if (!MediaSource.isTypeSupported(audioMimeCodec)) {
                    console.error("Unsupported media format: ", audioMimeCodec);
                    return [2 /*return*/];
                }
                mediaSource = new MediaSource();
                url = window.URL.createObjectURL(mediaSource);
                video.src = url;
                mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));
                return [2 /*return*/];
        }
    });
}); };
var isEc3Audio = false;
startPlayback(isEc3Audio);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSw0Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1A7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksUUFBUTtBQUNwQixZQUFZLG1CQUFtQjtBQUMvQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE1BQU07QUFDakIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsZ0VBQWdFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFB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Q3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3Ju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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7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LHFDQUFxQyxxRUFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL2RlY29kZS1iNjQtdG8tdWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2aWRlb2pzL3Zocy11dGlscy9lcy9tZWRpYS1ncm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2aWRlb2pzL3Zocy11dGlscy9lcy9yZXNvbHZlLXVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2NvbnZlbnRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZG9tLXBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2VudGl0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9zYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21wZC1wYXJzZXIvZGlzdC9tcGQtcGFyc2VyLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tcGQtcGFyc2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwtdG9vbGtpdC9zcmMvdXJsLXRvb2xraXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbnZhciBhdG9iID0gZnVuY3Rpb24gYXRvYihzKSB7XG4gIHJldHVybiB3aW5kb3cuYXRvYiA/IHdpbmRvdy5hdG9iKHMpIDogQnVmZmVyLmZyb20ocywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdiaW5hcnknKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY29kZUI2NFRvVWludDhBcnJheShiNjRUZXh0KSB7XG4gIHZhciBkZWNvZGVkU3RyaW5nID0gYXRvYihiNjRUZXh0KTtcbiAgdmFyIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGVjb2RlZFN0cmluZy5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGVjb2RlZFN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldID0gZGVjb2RlZFN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufSIsIi8qKlxuICogTG9vcHMgdGhyb3VnaCBhbGwgc3VwcG9ydGVkIG1lZGlhIGdyb3VwcyBpbiBtYXN0ZXIgYW5kIGNhbGxzIHRoZSBwcm92aWRlZFxuICogY2FsbGJhY2sgZm9yIGVhY2ggZ3JvdXBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWFzdGVyXG4gKiAgICAgICAgVGhlIHBhcnNlZCBtYXN0ZXIgbWFuaWZlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBncm91cHNcbiAqICAgICAgICBUaGUgbWVkaWEgZ3JvdXBzIHRvIGNhbGwgdGhlIGNhbGxiYWNrIGZvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqICAgICAgICBDYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIG1lZGlhIGdyb3VwXG4gKi9cbmV4cG9ydCB2YXIgZm9yRWFjaE1lZGlhR3JvdXAgPSBmdW5jdGlvbiBmb3JFYWNoTWVkaWFHcm91cChtYXN0ZXIsIGdyb3VwcywgY2FsbGJhY2spIHtcbiAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKG1lZGlhVHlwZSkge1xuICAgIGZvciAodmFyIGdyb3VwS2V5IGluIG1hc3Rlci5tZWRpYUdyb3Vwc1ttZWRpYVR5cGVdKSB7XG4gICAgICBmb3IgKHZhciBsYWJlbEtleSBpbiBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXVtncm91cEtleV0pIHtcbiAgICAgICAgdmFyIG1lZGlhUHJvcGVydGllcyA9IG1hc3Rlci5tZWRpYUdyb3Vwc1ttZWRpYVR5cGVdW2dyb3VwS2V5XVtsYWJlbEtleV07XG4gICAgICAgIGNhbGxiYWNrKG1lZGlhUHJvcGVydGllcywgbWVkaWFUeXBlLCBncm91cEtleSwgbGFiZWxLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59OyIsImltcG9ydCBVUkxUb29sa2l0IGZyb20gJ3VybC10b29sa2l0JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG52YXIgREVGQVVMVF9MT0NBVElPTiA9ICdodHRwOi8vZXhhbXBsZS5jb20nO1xuXG52YXIgcmVzb2x2ZVVybCA9IGZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZVVybCwgcmVsYXRpdmVVcmwpIHtcbiAgLy8gcmV0dXJuIGVhcmx5IGlmIHdlIGRvbid0IG5lZWQgdG8gcmVzb2x2ZVxuICBpZiAoL15bYS16XSs6L2kudGVzdChyZWxhdGl2ZVVybCkpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVVcmw7XG4gIH0gLy8gaWYgYmFzZVVybCBpcyBhIGRhdGEgVVJJLCBpZ25vcmUgaXQgYW5kIHJlc29sdmUgZXZlcnl0aGluZyByZWxhdGl2ZSB0byB3aW5kb3cubG9jYXRpb25cblxuXG4gIGlmICgvXmRhdGE6Ly50ZXN0KGJhc2VVcmwpKSB7XG4gICAgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJztcbiAgfSAvLyBJRTExIHN1cHBvcnRzIFVSTCBidXQgbm90IHRoZSBVUkwgY29uc3RydWN0b3JcbiAgLy8gZmVhdHVyZSBkZXRlY3QgdGhlIGJlaGF2aW9yIHdlIHdhbnRcblxuXG4gIHZhciBuYXRpdmVVUkwgPSB0eXBlb2Ygd2luZG93LlVSTCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3RvY29sTGVzcyA9IC9eXFwvXFwvLy50ZXN0KGJhc2VVcmwpOyAvLyByZW1vdmUgbG9jYXRpb24gaWYgd2luZG93LmxvY2F0aW9uIGlzbid0IGF2YWlsYWJsZSAoaS5lLiB3ZSdyZSBpbiBub2RlKVxuICAvLyBhbmQgaWYgYmFzZVVybCBpc24ndCBhbiBhYnNvbHV0ZSB1cmxcblxuICB2YXIgcmVtb3ZlTG9jYXRpb24gPSAhd2luZG93LmxvY2F0aW9uICYmICEvXFwvXFwvL2kudGVzdChiYXNlVXJsKTsgLy8gaWYgdGhlIGJhc2UgVVJMIGlzIHJlbGF0aXZlIHRoZW4gY29tYmluZSB3aXRoIHRoZSBjdXJyZW50IGxvY2F0aW9uXG5cbiAgaWYgKG5hdGl2ZVVSTCkge1xuICAgIGJhc2VVcmwgPSBuZXcgd2luZG93LlVSTChiYXNlVXJsLCB3aW5kb3cubG9jYXRpb24gfHwgREVGQVVMVF9MT0NBVElPTik7XG4gIH0gZWxzZSBpZiAoIS9cXC9cXC8vaS50ZXN0KGJhc2VVcmwpKSB7XG4gICAgYmFzZVVybCA9IFVSTFRvb2xraXQuYnVpbGRBYnNvbHV0ZVVSTCh3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJycsIGJhc2VVcmwpO1xuICB9XG5cbiAgaWYgKG5hdGl2ZVVSTCkge1xuICAgIHZhciBuZXdVcmwgPSBuZXcgVVJMKHJlbGF0aXZlVXJsLCBiYXNlVXJsKTsgLy8gaWYgd2UncmUgYSBwcm90b2NvbC1sZXNzIHVybCwgcmVtb3ZlIHRoZSBwcm90b2NvbFxuICAgIC8vIGFuZCBpZiB3ZSdyZSBsb2NhdGlvbi1sZXNzLCByZW1vdmUgdGhlIGxvY2F0aW9uXG4gICAgLy8gb3RoZXJ3aXNlLCByZXR1cm4gdGhlIHVybCB1bm1vZGlmaWVkXG5cbiAgICBpZiAocmVtb3ZlTG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBuZXdVcmwuaHJlZi5zbGljZShERUZBVUxUX0xPQ0FUSU9OLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwcm90b2NvbExlc3MpIHtcbiAgICAgIHJldHVybiBuZXdVcmwuaHJlZi5zbGljZShuZXdVcmwucHJvdG9jb2wubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VXJsLmhyZWY7XG4gIH1cblxuICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZEFic29sdXRlVVJMKGJhc2VVcmwsIHJlbGF0aXZlVXJsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVVcmw7IiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUG9ueWZpbGwgZm9yIGBBcnJheS5wcm90b3R5cGUuZmluZGAgd2hpY2ggaXMgb25seSBhdmFpbGFibGUgaW4gRVM2IHJ1bnRpbWVzLlxuICpcbiAqIFdvcmtzIHdpdGggYW55dGhpbmcgdGhhdCBoYXMgYSBgbGVuZ3RoYCBwcm9wZXJ0eSBhbmQgaW5kZXggYWNjZXNzIHByb3BlcnRpZXMsIGluY2x1ZGluZyBOb2RlTGlzdC5cbiAqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7QXJyYXk8VD4gfCAoe2xlbmd0aDpudW1iZXIsIFtudW1iZXJdOiBUfSl9IGxpc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb24gKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGxpc3Q6QXJyYXk8VD4gfCAoe2xlbmd0aDpudW1iZXIsIFtudW1iZXJdOiBUfSkpOmJvb2xlYW59IHByZWRpY2F0ZVxuICogQHBhcmFtIHtQYXJ0aWFsPFBpY2s8QXJyYXlDb25zdHJ1Y3RvclsncHJvdG90eXBlJ10sICdmaW5kJz4+P30gYWMgYEFycmF5LnByb3RvdHlwZWAgYnkgZGVmYXVsdCxcbiAqIFx0XHRcdFx0YWxsb3dzIGluamVjdGluZyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiBpbiB0ZXN0c1xuICogQHJldHVybnMge1QgfCB1bmRlZmluZWR9XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kXG4gKiBAc2VlIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9pbmRleGVkLWNvbGxlY3Rpb25zLmh0bWwjc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gKi9cbmZ1bmN0aW9uIGZpbmQobGlzdCwgcHJlZGljYXRlLCBhYykge1xuXHRpZiAoYWMgPT09IHVuZGVmaW5lZCkge1xuXHRcdGFjID0gQXJyYXkucHJvdG90eXBlO1xuXHR9XG5cdGlmIChsaXN0ICYmIHR5cGVvZiBhYy5maW5kID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGFjLmZpbmQuY2FsbChsaXN0LCBwcmVkaWNhdGUpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlzdCwgaSkpIHtcblx0XHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHRcdGlmIChwcmVkaWNhdGUuY2FsbCh1bmRlZmluZWQsIGl0ZW0sIGksIGxpc3QpKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFwiU2hhbGxvdyBmcmVlemVzXCIgYW4gb2JqZWN0IHRvIHJlbmRlciBpdCBpbW11dGFibGUuXG4gKiBVc2VzIGBPYmplY3QuZnJlZXplYCBpZiBhdmFpbGFibGUsXG4gKiBvdGhlcndpc2UgdGhlIGltbXV0YWJpbGl0eSBpcyBvbmx5IGluIHRoZSB0eXBlLlxuICpcbiAqIElzIHVzZWQgdG8gY3JlYXRlIFwiZW51bSBsaWtlXCIgb2JqZWN0cy5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBvYmplY3QgdGhlIG9iamVjdCB0byBmcmVlemVcbiAqIEBwYXJhbSB7UGljazxPYmplY3RDb25zdHJ1Y3RvciwgJ2ZyZWV6ZSc+ID0gT2JqZWN0fSBvYyBgT2JqZWN0YCBieSBkZWZhdWx0LFxuICogXHRcdFx0XHRhbGxvd3MgdG8gaW5qZWN0IGN1c3RvbSBvYmplY3QgY29uc3RydWN0b3IgZm9yIHRlc3RzXG4gKiBAcmV0dXJucyB7UmVhZG9ubHk8VD59XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvZnJlZXplXG4gKi9cbmZ1bmN0aW9uIGZyZWV6ZShvYmplY3QsIG9jKSB7XG5cdGlmIChvYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b2MgPSBPYmplY3Rcblx0fVxuXHRyZXR1cm4gb2MgJiYgdHlwZW9mIG9jLmZyZWV6ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9jLmZyZWV6ZShvYmplY3QpIDogb2JqZWN0XG59XG5cbi8qKlxuICogU2luY2Ugd2UgY2FuIG5vdCByZWx5IG9uIGBPYmplY3QuYXNzaWduYCB3ZSBwcm92aWRlIGEgc2ltcGxpZmllZCB2ZXJzaW9uXG4gKiB0aGF0IGlzIHN1ZmZpY2llbnQgZm9yIG91ciBuZWVkcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IHNvdXJjZVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICogQHRocm93cyBUeXBlRXJyb3IgaWYgdGFyZ2V0IGlzIG5vdCBhbiBvYmplY3RcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqIEBzZWUgaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvbXVsdGlwYWdlL2Z1bmRhbWVudGFsLW9iamVjdHMuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuICovXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBpcyBub3QgYW4gb2JqZWN0Jylcblx0fVxuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIEFsbCBtaW1lIHR5cGVzIHRoYXQgYXJlIGFsbG93ZWQgYXMgaW5wdXQgdG8gYERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmdgXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyNBcmd1bWVudDAyIE1ETlxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb21wYXJzZXJzdXBwb3J0ZWR0eXBlIFdIQVRXRyBIVE1MIFNwZWNcbiAqIEBzZWUgRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmdcbiAqL1xudmFyIE1JTUVfVFlQRSA9IGZyZWV6ZSh7XG5cdC8qKlxuXHQgKiBgdGV4dC9odG1sYCwgdGhlIG9ubHkgbWltZSB0eXBlIHRoYXQgdHJpZ2dlcnMgdHJlYXRpbmcgYW4gWE1MIGRvY3VtZW50IGFzIEhUTUwuXG5cdCAqXG5cdCAqIEBzZWUgRE9NUGFyc2VyLlN1cHBvcnRlZFR5cGUuaXNIVE1MXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC9odG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFRNTCBXaWtpcGVkaWFcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyBNRE5cblx0ICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tZG9tcGFyc2VyLXBhcnNlZnJvbXN0cmluZyBXSEFUV0cgSFRNTCBTcGVjXG5cdCAqL1xuXHRIVE1MOiAndGV4dC9odG1sJyxcblxuXHQvKipcblx0ICogSGVscGVyIG1ldGhvZCB0byBjaGVjayBhIG1pbWUgdHlwZSBpZiBpdCBpbmRpY2F0ZXMgYW4gSFRNTCBkb2N1bWVudFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy90ZXh0L2h0bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IVE1MIFdpa2lwZWRpYVxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbS1kb21wYXJzZXItcGFyc2Vmcm9tc3RyaW5nIFx0ICovXG5cdGlzSFRNTDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBNSU1FX1RZUEUuSFRNTFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBgYXBwbGljYXRpb24veG1sYCwgdGhlIHN0YW5kYXJkIG1pbWUgdHlwZSBmb3IgWE1MIGRvY3VtZW50cy5cblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9hcHBsaWNhdGlvbi94bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzMwMyNzZWN0aW9uLTkuMSBSRkMgNzMwM1xuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hNTF9hbmRfTUlNRSBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9BUFBMSUNBVElPTjogJ2FwcGxpY2F0aW9uL3htbCcsXG5cblx0LyoqXG5cdCAqIGB0ZXh0L2h0bWxgLCBhbiBhbGlhcyBmb3IgYGFwcGxpY2F0aW9uL3htbGAuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzczMDMjc2VjdGlvbi05LjIgUkZDIDczMDNcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy90ZXh0L3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hNTF9hbmRfTUlNRSBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9URVhUOiAndGV4dC94bWwnLFxuXG5cdC8qKlxuXHQgKiBgYXBwbGljYXRpb24veGh0bWwreG1sYCwgaW5kaWNhdGVzIGFuIFhNTCBkb2N1bWVudCB0aGF0IGhhcyB0aGUgZGVmYXVsdCBIVE1MIG5hbWVzcGFjZSxcblx0ICogYnV0IGlzIHBhcnNlZCBhcyBhbiBYTUwgZG9jdW1lbnQuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvYXBwbGljYXRpb24veGh0bWwreG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnQgV0hBVFdHIERPTSBTcGVjXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWEhUTUwgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfWEhUTUxfQVBQTElDQVRJT046ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuXG5cdC8qKlxuXHQgKiBgaW1hZ2Uvc3ZnK3htbGAsXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvaW1hZ2Uvc3ZnK3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS8gVzNDIFNWRyAxLjFcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TY2FsYWJsZV9WZWN0b3JfR3JhcGhpY3MgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfU1ZHX0lNQUdFOiAnaW1hZ2Uvc3ZnK3htbCcsXG59KVxuXG4vKipcbiAqIE5hbWVzcGFjZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGlzIGNvZGUgYmFzZS5cbiAqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXNcbiAqL1xudmFyIE5BTUVTUEFDRSA9IGZyZWV6ZSh7XG5cdC8qKlxuXHQgKiBUaGUgWEhUTUwgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcblx0ICovXG5cdEhUTUw6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyxcblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB1cmlgIGVxdWFscyBgTkFNRVNQQUNFLkhUTUxgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VyaV1cblx0ICpcblx0ICogQHNlZSBOQU1FU1BBQ0UuSFRNTFxuXHQgKi9cblx0aXNIVE1MOiBmdW5jdGlvbiAodXJpKSB7XG5cdFx0cmV0dXJuIHVyaSA9PT0gTkFNRVNQQUNFLkhUTUxcblx0fSxcblxuXHQvKipcblx0ICogVGhlIFNWRyBuYW1lc3BhY2UuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcblx0ICovXG5cdFNWRzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblxuXHQvKipcblx0ICogVGhlIGB4bWw6YCBuYW1lc3BhY2UuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXG5cdCAqL1xuXHRYTUw6ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnLFxuXG5cdC8qKlxuXHQgKiBUaGUgYHhtbG5zOmAgbmFtZXNwYWNlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXG5cdCAqL1xuXHRYTUxOUzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJyxcbn0pXG5cbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xuZXhwb3J0cy5maW5kID0gZmluZDtcbmV4cG9ydHMuZnJlZXplID0gZnJlZXplO1xuZXhwb3J0cy5NSU1FX1RZUEUgPSBNSU1FX1RZUEU7XG5leHBvcnRzLk5BTUVTUEFDRSA9IE5BTUVTUEFDRTtcbiIsInZhciBjb252ZW50aW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcbnZhciBzYXggPSByZXF1aXJlKCcuL3NheCcpO1xuXG52YXIgRE9NSW1wbGVtZW50YXRpb24gPSBkb20uRE9NSW1wbGVtZW50YXRpb247XG5cbnZhciBOQU1FU1BBQ0UgPSBjb252ZW50aW9ucy5OQU1FU1BBQ0U7XG5cbnZhciBQYXJzZUVycm9yID0gc2F4LlBhcnNlRXJyb3I7XG52YXIgWE1MUmVhZGVyID0gc2F4LlhNTFJlYWRlcjtcblxuLyoqXG4gKiBOb3JtYWxpemVzIGxpbmUgZW5kaW5nIGFjY29yZGluZyB0byBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI3NlYy1saW5lLWVuZHM6XG4gKlxuICogPiBYTUwgcGFyc2VkIGVudGl0aWVzIGFyZSBvZnRlbiBzdG9yZWQgaW4gY29tcHV0ZXIgZmlsZXMgd2hpY2gsXG4gKiA+IGZvciBlZGl0aW5nIGNvbnZlbmllbmNlLCBhcmUgb3JnYW5pemVkIGludG8gbGluZXMuXG4gKiA+IFRoZXNlIGxpbmVzIGFyZSB0eXBpY2FsbHkgc2VwYXJhdGVkIGJ5IHNvbWUgY29tYmluYXRpb25cbiAqID4gb2YgdGhlIGNoYXJhY3RlcnMgQ0FSUklBR0UgUkVUVVJOICgjeEQpIGFuZCBMSU5FIEZFRUQgKCN4QSkuXG4gKiA+XG4gKiA+IFRvIHNpbXBsaWZ5IHRoZSB0YXNrcyBvZiBhcHBsaWNhdGlvbnMsIHRoZSBYTUwgcHJvY2Vzc29yIG11c3QgYmVoYXZlXG4gKiA+IGFzIGlmIGl0IG5vcm1hbGl6ZWQgYWxsIGxpbmUgYnJlYWtzIGluIGV4dGVybmFsIHBhcnNlZCBlbnRpdGllcyAoaW5jbHVkaW5nIHRoZSBkb2N1bWVudCBlbnRpdHkpXG4gKiA+IG9uIGlucHV0LCBiZWZvcmUgcGFyc2luZywgYnkgdHJhbnNsYXRpbmcgYWxsIG9mIHRoZSBmb2xsb3dpbmcgdG8gYSBzaW5nbGUgI3hBIGNoYXJhY3RlcjpcbiAqID5cbiAqID4gMS4gdGhlIHR3by1jaGFyYWN0ZXIgc2VxdWVuY2UgI3hEICN4QVxuICogPiAyLiB0aGUgdHdvLWNoYXJhY3RlciBzZXF1ZW5jZSAjeEQgI3g4NVxuICogPiAzLiB0aGUgc2luZ2xlIGNoYXJhY3RlciAjeDg1XG4gKiA+IDQuIHRoZSBzaW5nbGUgY2hhcmFjdGVyICN4MjAyOFxuICogPiA1LiBhbnkgI3hEIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSAjeEEgb3IgI3g4NS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmVFbmRpbmdzKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dFxuXHRcdC5yZXBsYWNlKC9cXHJbXFxuXFx1MDA4NV0vZywgJ1xcbicpXG5cdFx0LnJlcGxhY2UoL1tcXHJcXHUwMDg1XFx1MjAyOF0vZywgJ1xcbicpXG59XG5cbi8qKlxuICogQHR5cGVkZWYgTG9jYXRvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtjb2x1bW5OdW1iZXJdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xpbmVOdW1iZXJdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBET01QYXJzZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge0RPTUhhbmRsZXJ9IFtkb21CdWlsZGVyXVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW2Vycm9ySGFuZGxlcl1cbiAqIEBwcm9wZXJ0eSB7KHN0cmluZykgPT4gc3RyaW5nfSBbbm9ybWFsaXplTGluZUVuZGluZ3NdIHVzZWQgdG8gcmVwbGFjZSBsaW5lIGVuZGluZ3MgYmVmb3JlIHBhcnNpbmdcbiAqIFx0XHRcdFx0XHRcdGRlZmF1bHRzIHRvIGBub3JtYWxpemVMaW5lRW5kaW5nc2BcbiAqIEBwcm9wZXJ0eSB7TG9jYXRvcn0gW2xvY2F0b3JdXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IFt4bWxuc11cbiAqXG4gKiBAc2VlIG5vcm1hbGl6ZUxpbmVFbmRpbmdzXG4gKi9cblxuLyoqXG4gKiBUaGUgRE9NUGFyc2VyIGludGVyZmFjZSBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBwYXJzZSBYTUwgb3IgSFRNTCBzb3VyY2UgY29kZVxuICogZnJvbSBhIHN0cmluZyBpbnRvIGEgRE9NIGBEb2N1bWVudGAuXG4gKlxuICogX3htbGRvbSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgc3BlYyBpbiB0aGF0IGl0IGFsbG93cyBhbiBgb3B0aW9uc2AgcGFyYW1ldGVyLFxuICogdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmVoYXZpb3IuX1xuICpcbiAqIEBwYXJhbSB7RE9NUGFyc2VyT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXJcbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLXBhcnNpbmctYW5kLXNlcmlhbGl6YXRpb25cbiAqL1xuZnVuY3Rpb24gRE9NUGFyc2VyKG9wdGlvbnMpe1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8e2xvY2F0b3I6e319O1xufVxuXG5ET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHNvdXJjZSxtaW1lVHlwZSl7XG5cdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHR2YXIgc2F4ID0gIG5ldyBYTUxSZWFkZXIoKTtcblx0dmFyIGRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgbmV3IERPTUhhbmRsZXIoKTsvL2NvbnRlbnRIYW5kbGVyIGFuZCBMZXhpY2FsSGFuZGxlclxuXHR2YXIgZXJyb3JIYW5kbGVyID0gb3B0aW9ucy5lcnJvckhhbmRsZXI7XG5cdHZhciBsb2NhdG9yID0gb3B0aW9ucy5sb2NhdG9yO1xuXHR2YXIgZGVmYXVsdE5TTWFwID0gb3B0aW9ucy54bWxuc3x8e307XG5cdHZhciBpc0hUTUwgPSAvXFwveD9odG1sPyQvLnRlc3QobWltZVR5cGUpOy8vbWltZVR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodG1sJykgPiAtMTtcbiAgXHR2YXIgZW50aXR5TWFwID0gaXNIVE1MID8gZW50aXRpZXMuSFRNTF9FTlRJVElFUyA6IGVudGl0aWVzLlhNTF9FTlRJVElFUztcblx0aWYobG9jYXRvcil7XG5cdFx0ZG9tQnVpbGRlci5zZXREb2N1bWVudExvY2F0b3IobG9jYXRvcilcblx0fVxuXG5cdHNheC5lcnJvckhhbmRsZXIgPSBidWlsZEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsZG9tQnVpbGRlcixsb2NhdG9yKTtcblx0c2F4LmRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgZG9tQnVpbGRlcjtcblx0aWYoaXNIVE1MKXtcblx0XHRkZWZhdWx0TlNNYXBbJyddID0gTkFNRVNQQUNFLkhUTUw7XG5cdH1cblx0ZGVmYXVsdE5TTWFwLnhtbCA9IGRlZmF1bHROU01hcC54bWwgfHwgTkFNRVNQQUNFLlhNTDtcblx0dmFyIG5vcm1hbGl6ZSA9IG9wdGlvbnMubm9ybWFsaXplTGluZUVuZGluZ3MgfHwgbm9ybWFsaXplTGluZUVuZGluZ3M7XG5cdGlmIChzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcblx0XHRzYXgucGFyc2UoXG5cdFx0XHRub3JtYWxpemUoc291cmNlKSxcblx0XHRcdGRlZmF1bHROU01hcCxcblx0XHRcdGVudGl0eU1hcFxuXHRcdClcblx0fSBlbHNlIHtcblx0XHRzYXguZXJyb3JIYW5kbGVyLmVycm9yKCdpbnZhbGlkIGRvYyBzb3VyY2UnKVxuXHR9XG5cdHJldHVybiBkb21CdWlsZGVyLmRvYztcbn1cbmZ1bmN0aW9uIGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySW1wbCxkb21CdWlsZGVyLGxvY2F0b3Ipe1xuXHRpZighZXJyb3JJbXBsKXtcblx0XHRpZihkb21CdWlsZGVyIGluc3RhbmNlb2YgRE9NSGFuZGxlcil7XG5cdFx0XHRyZXR1cm4gZG9tQnVpbGRlcjtcblx0XHR9XG5cdFx0ZXJyb3JJbXBsID0gZG9tQnVpbGRlciA7XG5cdH1cblx0dmFyIGVycm9ySGFuZGxlciA9IHt9XG5cdHZhciBpc0NhbGxiYWNrID0gZXJyb3JJbXBsIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cdGxvY2F0b3IgPSBsb2NhdG9yfHx7fVxuXHRmdW5jdGlvbiBidWlsZChrZXkpe1xuXHRcdHZhciBmbiA9IGVycm9ySW1wbFtrZXldO1xuXHRcdGlmKCFmbiAmJiBpc0NhbGxiYWNrKXtcblx0XHRcdGZuID0gZXJyb3JJbXBsLmxlbmd0aCA9PSAyP2Z1bmN0aW9uKG1zZyl7ZXJyb3JJbXBsKGtleSxtc2cpfTplcnJvckltcGw7XG5cdFx0fVxuXHRcdGVycm9ySGFuZGxlcltrZXldID0gZm4gJiYgZnVuY3Rpb24obXNnKXtcblx0XHRcdGZuKCdbeG1sZG9tICcra2V5KyddXFx0Jyttc2crX2xvY2F0b3IobG9jYXRvcikpO1xuXHRcdH18fGZ1bmN0aW9uKCl7fTtcblx0fVxuXHRidWlsZCgnd2FybmluZycpO1xuXHRidWlsZCgnZXJyb3InKTtcblx0YnVpbGQoJ2ZhdGFsRXJyb3InKTtcblx0cmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cblxuLy9jb25zb2xlLmxvZygnI1xcblxcblxcblxcblxcblxcblxcbiMjIyMnKVxuLyoqXG4gKiArQ29udGVudEhhbmRsZXIrRXJyb3JIYW5kbGVyXG4gKiArTGV4aWNhbEhhbmRsZXIrRW50aXR5UmVzb2x2ZXIyXG4gKiAtRGVjbEhhbmRsZXItRFRESGFuZGxlclxuICpcbiAqIERlZmF1bHRIYW5kbGVyOkVudGl0eVJlc29sdmVyLCBEVERIYW5kbGVyLCBDb250ZW50SGFuZGxlciwgRXJyb3JIYW5kbGVyXG4gKiBEZWZhdWx0SGFuZGxlcjI6RGVmYXVsdEhhbmRsZXIsTGV4aWNhbEhhbmRsZXIsIERlY2xIYW5kbGVyLCBFbnRpdHlSZXNvbHZlcjJcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2hlbHBlcnMvRGVmYXVsdEhhbmRsZXIuaHRtbFxuICovXG5mdW5jdGlvbiBET01IYW5kbGVyKCkge1xuICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBvc2l0aW9uKGxvY2F0b3Isbm9kZSl7XG5cdG5vZGUubGluZU51bWJlciA9IGxvY2F0b3IubGluZU51bWJlcjtcblx0bm9kZS5jb2x1bW5OdW1iZXIgPSBsb2NhdG9yLmNvbHVtbk51bWJlcjtcbn1cbi8qKlxuICogQHNlZSBvcmcueG1sLnNheC5Db250ZW50SGFuZGxlciNzdGFydERvY3VtZW50XG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9Db250ZW50SGFuZGxlci5odG1sXG4gKi9cbkRPTUhhbmRsZXIucHJvdG90eXBlID0ge1xuXHRzdGFydERvY3VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgXHR0aGlzLmRvYyA9IG5ldyBET01JbXBsZW1lbnRhdGlvbigpLmNyZWF0ZURvY3VtZW50KG51bGwsIG51bGwsIG51bGwpO1xuICAgIFx0aWYgKHRoaXMubG9jYXRvcikge1xuICAgICAgICBcdHRoaXMuZG9jLmRvY3VtZW50VVJJID0gdGhpcy5sb2NhdG9yLnN5c3RlbUlkO1xuICAgIFx0fVxuXHR9LFxuXHRzdGFydEVsZW1lbnQ6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lLCBhdHRycykge1xuXHRcdHZhciBkb2MgPSB0aGlzLmRvYztcblx0ICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxTmFtZXx8bG9jYWxOYW1lKTtcblx0ICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGVsKTtcblx0ICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbDtcblxuXHRcdHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsZWwpXG5cdCAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIHZhciBuYW1lc3BhY2VVUkkgPSBhdHRycy5nZXRVUkkoaSk7XG5cdCAgICAgICAgdmFyIHZhbHVlID0gYXR0cnMuZ2V0VmFsdWUoaSk7XG5cdCAgICAgICAgdmFyIHFOYW1lID0gYXR0cnMuZ2V0UU5hbWUoaSk7XG5cdFx0XHR2YXIgYXR0ciA9IGRvYy5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHFOYW1lKTtcblx0XHRcdHRoaXMubG9jYXRvciAmJnBvc2l0aW9uKGF0dHJzLmdldExvY2F0b3IoaSksYXR0cik7XG5cdFx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSB2YWx1ZTtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcblx0ICAgIH1cblx0fSxcblx0ZW5kRWxlbWVudDpmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRcblx0XHR2YXIgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZTtcblx0XHR0aGlzLmN1cnJlbnRFbGVtZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuXHR9LFxuXHRzdGFydFByZWZpeE1hcHBpbmc6ZnVuY3Rpb24ocHJlZml4LCB1cmkpIHtcblx0fSxcblx0ZW5kUHJlZml4TWFwcGluZzpmdW5jdGlvbihwcmVmaXgpIHtcblx0fSxcblx0cHJvY2Vzc2luZ0luc3RydWN0aW9uOmZ1bmN0aW9uKHRhcmdldCwgZGF0YSkge1xuXHQgICAgdmFyIGlucyA9IHRoaXMuZG9jLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpO1xuXHQgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixpbnMpXG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGlucyk7XG5cdH0sXG5cdGlnbm9yYWJsZVdoaXRlc3BhY2U6ZnVuY3Rpb24oY2gsIHN0YXJ0LCBsZW5ndGgpIHtcblx0fSxcblx0Y2hhcmFjdGVyczpmdW5jdGlvbihjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuXHRcdGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsYXJndW1lbnRzKVxuXHRcdC8vY29uc29sZS5sb2coY2hhcnMpXG5cdFx0aWYoY2hhcnMpe1xuXHRcdFx0aWYgKHRoaXMuY2RhdGEpIHtcblx0XHRcdFx0dmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKGNoYXJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNoYXJzKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuY3VycmVudEVsZW1lbnQpe1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcblx0XHRcdH1lbHNlIGlmKC9eXFxzKiQvLnRlc3QoY2hhcnMpKXtcblx0XHRcdFx0dGhpcy5kb2MuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuXHRcdFx0XHQvL3Byb2Nlc3MgeG1sXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGNoYXJOb2RlKVxuXHRcdH1cblx0fSxcblx0c2tpcHBlZEVudGl0eTpmdW5jdGlvbihuYW1lKSB7XG5cdH0sXG5cdGVuZERvY3VtZW50OmZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZG9jLm5vcm1hbGl6ZSgpO1xuXHR9LFxuXHRzZXREb2N1bWVudExvY2F0b3I6ZnVuY3Rpb24gKGxvY2F0b3IpIHtcblx0ICAgIGlmKHRoaXMubG9jYXRvciA9IGxvY2F0b3Ipey8vICYmICEoJ2xpbmVOdW1iZXInIGluIGxvY2F0b3IpKXtcblx0ICAgIFx0bG9jYXRvci5saW5lTnVtYmVyID0gMDtcblx0ICAgIH1cblx0fSxcblx0Ly9MZXhpY2FsSGFuZGxlclxuXHRjb21tZW50OmZ1bmN0aW9uKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG5cdFx0Y2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcyxhcmd1bWVudHMpXG5cdCAgICB2YXIgY29tbSA9IHRoaXMuZG9jLmNyZWF0ZUNvbW1lbnQoY2hhcnMpO1xuXHQgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixjb21tKVxuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBjb21tKTtcblx0fSxcblxuXHRzdGFydENEQVRBOmZ1bmN0aW9uKCkge1xuXHQgICAgLy91c2VkIGluIGNoYXJhY3RlcnMoKSBtZXRob2RzXG5cdCAgICB0aGlzLmNkYXRhID0gdHJ1ZTtcblx0fSxcblx0ZW5kQ0RBVEE6ZnVuY3Rpb24oKSB7XG5cdCAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG5cdH0sXG5cblx0c3RhcnREVEQ6ZnVuY3Rpb24obmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG5cdFx0dmFyIGltcGwgPSB0aGlzLmRvYy5pbXBsZW1lbnRhdGlvbjtcblx0ICAgIGlmIChpbXBsICYmIGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKSB7XG5cdCAgICAgICAgdmFyIGR0ID0gaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKTtcblx0ICAgICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGR0KVxuXHQgICAgICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZHQpO1xuXHRcdFx0XHRcdHRoaXMuZG9jLmRvY3R5cGUgPSBkdDtcblx0ICAgIH1cblx0fSxcblx0LyoqXG5cdCAqIEBzZWUgb3JnLnhtbC5zYXguRXJyb3JIYW5kbGVyXG5cdCAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0Vycm9ySGFuZGxlci5odG1sXG5cdCAqL1xuXHR3YXJuaW5nOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS53YXJuKCdbeG1sZG9tIHdhcm5pbmddXFx0JytlcnJvcixfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcblx0fSxcblx0ZXJyb3I6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbeG1sZG9tIGVycm9yXVxcdCcrZXJyb3IsX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG5cdH0sXG5cdGZhdGFsRXJyb3I6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgUGFyc2VFcnJvcihlcnJvciwgdGhpcy5sb2NhdG9yKTtcblx0fVxufVxuZnVuY3Rpb24gX2xvY2F0b3IobCl7XG5cdGlmKGwpe1xuXHRcdHJldHVybiAnXFxuQCcrKGwuc3lzdGVtSWQgfHwnJykrJyNbbGluZTonK2wubGluZU51bWJlcisnLGNvbDonK2wuY29sdW1uTnVtYmVyKyddJ1xuXHR9XG59XG5mdW5jdGlvbiBfdG9TdHJpbmcoY2hhcnMsc3RhcnQsbGVuZ3RoKXtcblx0aWYodHlwZW9mIGNoYXJzID09ICdzdHJpbmcnKXtcblx0XHRyZXR1cm4gY2hhcnMuc3Vic3RyKHN0YXJ0LGxlbmd0aClcblx0fWVsc2V7Ly9qYXZhIHNheCBjb25uZWN0IHdpZHRoIHhtbGRvbSBvbiByaGlubyh3aGF0IGFib3V0OiBcIj8gJiYgIShjaGFycyBpbnN0YW5jZW9mIFN0cmluZylcIilcblx0XHRpZihjaGFycy5sZW5ndGggPj0gc3RhcnQrbGVuZ3RoIHx8IHN0YXJ0KXtcblx0XHRcdHJldHVybiBuZXcgamF2YS5sYW5nLlN0cmluZyhjaGFycyxzdGFydCxsZW5ndGgpKycnO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhcnM7XG5cdH1cbn1cblxuLypcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9MZXhpY2FsSGFuZGxlci5odG1sXG4gKiB1c2VkIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuTGV4aWNhbEhhbmRsZXI6XG4gKiAgI2NvbW1lbnQoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpXG4gKiAgI3N0YXJ0Q0RBVEEoKVxuICogICNlbmRDREFUQSgpXG4gKiAgI3N0YXJ0RFREKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqXG4gKlxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkxleGljYWxIYW5kbGVyOlxuICogICNlbmREVEQoKVxuICogICNzdGFydEVudGl0eShuYW1lKVxuICogICNlbmRFbnRpdHkobmFtZSlcbiAqXG4gKlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0RlY2xIYW5kbGVyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5EZWNsSGFuZGxlclxuICogXHQjYXR0cmlidXRlRGVjbChlTmFtZSwgYU5hbWUsIHR5cGUsIG1vZGUsIHZhbHVlKVxuICogICNlbGVtZW50RGVjbChuYW1lLCBtb2RlbClcbiAqICAjZXh0ZXJuYWxFbnRpdHlEZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqICAjaW50ZXJuYWxFbnRpdHlEZWNsKG5hbWUsIHZhbHVlKVxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0VudGl0eVJlc29sdmVyMi5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5FbnRpdHlSZXNvbHZlcjJcbiAqICAjcmVzb2x2ZUVudGl0eShTdHJpbmcgbmFtZSxTdHJpbmcgcHVibGljSWQsU3RyaW5nIGJhc2VVUkksU3RyaW5nIHN5c3RlbUlkKVxuICogICNyZXNvbHZlRW50aXR5KHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqICAjZ2V0RXh0ZXJuYWxTdWJzZXQobmFtZSwgYmFzZVVSSSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0RUREhhbmRsZXIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguRFRESGFuZGxlclxuICogICNub3RhdGlvbkRlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7fTtcbiAqICAjdW5wYXJzZWRFbnRpdHlEZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCwgbm90YXRpb25OYW1lKSB7fTtcbiAqL1xuXCJlbmREVEQsc3RhcnRFbnRpdHksZW5kRW50aXR5LGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2xcIi5yZXBsYWNlKC9cXHcrL2csZnVuY3Rpb24oa2V5KXtcblx0RE9NSGFuZGxlci5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9XG59KVxuXG4vKiBQcml2YXRlIHN0YXRpYyBoZWxwZXJzIHRyZWF0ZWQgYmVsb3cgYXMgcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzLCBzbyBkb24ndCBuZWVkIHRvIGFkZCB0aGVzZSB0byB0aGUgcHVibGljIEFQSTsgd2UgbWlnaHQgdXNlIGEgUmVsYXRvciB0byBhbHNvIGdldCByaWQgb2Ygbm9uLXN0YW5kYXJkIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50IChoYW5kZXIsbm9kZSkge1xuICAgIGlmICghaGFuZGVyLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIGhhbmRlci5kb2MuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGVyLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn0vL2FwcGVuZENoaWxkIGFuZCBzZXRBdHRyaWJ1dGVOUyBhcmUgcHJlZm9ybWFuY2Uga2V5XG5cbmV4cG9ydHMuX19ET01IYW5kbGVyID0gRE9NSGFuZGxlcjtcbmV4cG9ydHMubm9ybWFsaXplTGluZUVuZGluZ3MgPSBub3JtYWxpemVMaW5lRW5kaW5ncztcbmV4cG9ydHMuRE9NUGFyc2VyID0gRE9NUGFyc2VyO1xuIiwidmFyIGNvbnZlbnRpb25zID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIik7XG5cbnZhciBmaW5kID0gY29udmVudGlvbnMuZmluZDtcbnZhciBOQU1FU1BBQ0UgPSBjb252ZW50aW9ucy5OQU1FU1BBQ0U7XG5cbi8qKlxuICogQSBwcmVyZXF1aXNpdGUgZm9yIGBbXS5maWx0ZXJgLCB0byBkcm9wIGVsZW1lbnRzIHRoYXQgYXJlIGVtcHR5XG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBub3RFbXB0eVN0cmluZyAoaW5wdXQpIHtcblx0cmV0dXJuIGlucHV0ICE9PSAnJ1xufVxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzcGxpdC1vbi1hc2NpaS13aGl0ZXNwYWNlXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119IChjYW4gYmUgZW1wdHkpXG4gKi9cbmZ1bmN0aW9uIHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpIHtcblx0Ly8gVSswMDA5IFRBQiwgVSswMDBBIExGLCBVKzAwMEMgRkYsIFUrMDAwRCBDUiwgVSswMDIwIFNQQUNFXG5cdHJldHVybiBpbnB1dCA/IGlucHV0LnNwbGl0KC9bXFx0XFxuXFxmXFxyIF0rLykuZmlsdGVyKG5vdEVtcHR5U3RyaW5nKSA6IFtdXG59XG5cbi8qKlxuICogQWRkcyBlbGVtZW50IGFzIGEga2V5IHRvIGN1cnJlbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudFxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fVxuICovXG5mdW5jdGlvbiBvcmRlcmVkU2V0UmVkdWNlciAoY3VycmVudCwgZWxlbWVudCkge1xuXHRpZiAoIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoZWxlbWVudCkpIHtcblx0XHRjdXJyZW50W2VsZW1lbnRdID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNvcmRlcmVkLXNldFxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIHRvT3JkZXJlZFNldChpbnB1dCkge1xuXHRpZiAoIWlucHV0KSByZXR1cm4gW107XG5cdHZhciBsaXN0ID0gc3BsaXRPbkFTQ0lJV2hpdGVzcGFjZShpbnB1dCk7XG5cdHJldHVybiBPYmplY3Qua2V5cyhsaXN0LnJlZHVjZShvcmRlcmVkU2V0UmVkdWNlciwge30pKVxufVxuXG4vKipcbiAqIFVzZXMgYGxpc3QuaW5kZXhPZmAgdG8gaW1wbGVtZW50IHNvbWV0aGluZyBsaWtlIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgLFxuICogd2hpY2ggd2UgY2FuIG5vdCByZWx5IG9uIGJlaW5nIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge2FueVtdfSBsaXN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oYW55KTogYm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyAobGlzdCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBsaXN0ICYmIGxpc3QuaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG5cdH1cbn1cblxuZnVuY3Rpb24gY29weShzcmMsZGVzdCl7XG5cdGZvcih2YXIgcCBpbiBzcmMpe1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3JjLCBwKSkge1xuXHRcdFx0ZGVzdFtwXSA9IHNyY1twXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKigoPzouKlxce1xccyo/W1xcclxcbl1bXFxzXFxTXSo/Xn0pfFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbl5cXHcrXFwucHJvdG90eXBlXFwuKFtfXFx3XSspXFxzKj1cXHMqKFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoQ2xhc3MsU3VwZXIpe1xuXHR2YXIgcHQgPSBDbGFzcy5wcm90b3R5cGU7XG5cdGlmKCEocHQgaW5zdGFuY2VvZiBTdXBlcikpe1xuXHRcdGZ1bmN0aW9uIHQoKXt9O1xuXHRcdHQucHJvdG90eXBlID0gU3VwZXIucHJvdG90eXBlO1xuXHRcdHQgPSBuZXcgdCgpO1xuXHRcdGNvcHkocHQsdCk7XG5cdFx0Q2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuXHR9XG5cdGlmKHB0LmNvbnN0cnVjdG9yICE9IENsYXNzKXtcblx0XHRpZih0eXBlb2YgQ2xhc3MgIT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwidW5rbm93biBDbGFzczpcIitDbGFzcylcblx0XHR9XG5cdFx0cHQuY29uc3RydWN0b3IgPSBDbGFzc1xuXHR9XG59XG5cbi8vIE5vZGUgVHlwZXNcbnZhciBOb2RlVHlwZSA9IHt9XG52YXIgRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gMTtcbnZhciBBVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSAyO1xudmFyIFRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLlRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IDM7XG52YXIgQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gNDtcbnZhciBFTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSA1O1xudmFyIEVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IDk7XG52YXIgRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gMTA7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gMTE7XG52YXIgTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gTm9kZVR5cGUuTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gMTI7XG5cbi8vIEV4Y2VwdGlvbkNvZGVcbnZhciBFeGNlcHRpb25Db2RlID0ge31cbnZhciBFeGNlcHRpb25NZXNzYWdlID0ge307XG52YXIgSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTkRFWF9TSVpFX0VSUiAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMV09XCJJbmRleCBzaXplIGVycm9yXCIpLDEpO1xudmFyIERPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuRE9NU1RSSU5HX1NJWkVfRVJSICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzJdPVwiRE9NU3RyaW5nIHNpemUgZXJyb3JcIiksMik7XG52YXIgSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gRXhjZXB0aW9uQ29kZS5ISUVSQVJDSFlfUkVRVUVTVF9FUlIgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbM109XCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiKSwzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs0XT1cIldyb25nIGRvY3VtZW50XCIpLDQpO1xudmFyIElOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9DSEFSQUNURVJfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzVdPVwiSW52YWxpZCBjaGFyYWN0ZXJcIiksNSk7XG52YXIgTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNl09XCJObyBkYXRhIGFsbG93ZWRcIiksNik7XG52YXIgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbN109XCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiKSw3KTtcbnZhciBOT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9GT1VORF9FUlIgICAgICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs4XT1cIk5vdCBmb3VuZFwiKSw4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9TVVBQT1JURURfRVJSICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs5XT1cIk5vdCBzdXBwb3J0ZWRcIiksOSk7XG52YXIgSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdPVwiQXR0cmlidXRlIGluIHVzZVwiKSwxMCk7XG4vL2xldmVsMlxudmFyIElOVkFMSURfU1RBVEVfRVJSICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxMV09XCJJbnZhbGlkIHN0YXRlXCIpLDExKTtcbnZhciBTWU5UQVhfRVJSICAgICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTJdPVwiU3ludGF4IGVycm9yXCIpLDEyKTtcbnZhciBJTlZBTElEX01PRElGSUNBVElPTl9FUlIgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTNdPVwiSW52YWxpZCBtb2RpZmljYXRpb25cIiksMTMpO1xudmFyIE5BTUVTUEFDRV9FUlIgICAgICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzE0XT1cIkludmFsaWQgbmFtZXNwYWNlXCIpLDE0KTtcbnZhciBJTlZBTElEX0FDQ0VTU19FUlIgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNV09XCJJbnZhbGlkIGFjY2Vzc1wiKSwxNSk7XG5cbi8qKlxuICogRE9NIExldmVsIDJcbiAqIE9iamVjdCBET01FeGNlcHRpb25cbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2VjbWEtc2NyaXB0LWxhbmd1YWdlLWJpbmRpbmcuaHRtbFxuICovXG5mdW5jdGlvbiBET01FeGNlcHRpb24oY29kZSwgbWVzc2FnZSkge1xuXHRpZihtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3Ipe1xuXHRcdHZhciBlcnJvciA9IG1lc3NhZ2U7XG5cdH1lbHNle1xuXHRcdGVycm9yID0gdGhpcztcblx0XHRFcnJvci5jYWxsKHRoaXMsIEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV0pO1xuXHRcdHRoaXMubWVzc2FnZSA9IEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV07XG5cdFx0aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIERPTUV4Y2VwdGlvbik7XG5cdH1cblx0ZXJyb3IuY29kZSA9IGNvZGU7XG5cdGlmKG1lc3NhZ2UpIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2U7XG5cdHJldHVybiBlcnJvcjtcbn07XG5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuY29weShFeGNlcHRpb25Db2RlLERPTUV4Y2VwdGlvbilcblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvY29yZS5odG1sI0lELTUzNjI5NzE3N1xuICogVGhlIE5vZGVMaXN0IGludGVyZmFjZSBwcm92aWRlcyB0aGUgYWJzdHJhY3Rpb24gb2YgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIG5vZGVzLCB3aXRob3V0IGRlZmluaW5nIG9yIGNvbnN0cmFpbmluZyBob3cgdGhpcyBjb2xsZWN0aW9uIGlzIGltcGxlbWVudGVkLiBOb2RlTGlzdCBvYmplY3RzIGluIHRoZSBET00gYXJlIGxpdmUuXG4gKiBUaGUgaXRlbXMgaW4gdGhlIE5vZGVMaXN0IGFyZSBhY2Nlc3NpYmxlIHZpYSBhbiBpbnRlZ3JhbCBpbmRleCwgc3RhcnRpbmcgZnJvbSAwLlxuICovXG5mdW5jdGlvbiBOb2RlTGlzdCgpIHtcbn07XG5Ob2RlTGlzdC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LiBUaGUgcmFuZ2Ugb2YgdmFsaWQgY2hpbGQgbm9kZSBpbmRpY2VzIGlzIDAgdG8gbGVuZ3RoLTEgaW5jbHVzaXZlLlxuXHQgKiBAc3RhbmRhcmQgbGV2ZWwxXG5cdCAqL1xuXHRsZW5ndGg6MCxcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGluZGV4dGggaXRlbSBpbiB0aGUgY29sbGVjdGlvbi4gSWYgaW5kZXggaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGxpc3QsIHRoaXMgcmV0dXJucyBudWxsLlxuXHQgKiBAc3RhbmRhcmQgbGV2ZWwxXG5cdCAqIEBwYXJhbSBpbmRleCAgdW5zaWduZWQgbG9uZ1xuXHQgKiAgIEluZGV4IGludG8gdGhlIGNvbGxlY3Rpb24uXG5cdCAqIEByZXR1cm4gTm9kZVxuXHQgKiBcdFRoZSBub2RlIGF0IHRoZSBpbmRleHRoIHBvc2l0aW9uIGluIHRoZSBOb2RlTGlzdCwgb3IgbnVsbCBpZiB0aGF0IGlzIG5vdCBhIHZhbGlkIGluZGV4LlxuXHQgKi9cblx0aXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGVuZ3RoID8gdGhpc1tpbmRleF0gOiBudWxsO1xuXHR9LFxuXHR0b1N0cmluZzpmdW5jdGlvbihpc0hUTUwsbm9kZUZpbHRlcil7XG5cdFx0Zm9yKHZhciBidWYgPSBbXSwgaSA9IDA7aTx0aGlzLmxlbmd0aDtpKyspe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcodGhpc1tpXSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLmpvaW4oJycpO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtmdW5jdGlvbiAoTm9kZSk6Ym9vbGVhbn0gcHJlZGljYXRlXG5cdCAqIEByZXR1cm5zIHtOb2RlW119XG5cdCAqL1xuXHRmaWx0ZXI6IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMsIHByZWRpY2F0ZSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge05vZGV9IGl0ZW1cblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGluZGV4T2Y6IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgaXRlbSk7XG5cdH0sXG59O1xuXG5mdW5jdGlvbiBMaXZlTm9kZUxpc3Qobm9kZSxyZWZyZXNoKXtcblx0dGhpcy5fbm9kZSA9IG5vZGU7XG5cdHRoaXMuX3JlZnJlc2ggPSByZWZyZXNoXG5cdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbn1cbmZ1bmN0aW9uIF91cGRhdGVMaXZlTGlzdChsaXN0KXtcblx0dmFyIGluYyA9IGxpc3QuX25vZGUuX2luYyB8fCBsaXN0Ll9ub2RlLm93bmVyRG9jdW1lbnQuX2luYztcblx0aWYgKGxpc3QuX2luYyAhPT0gaW5jKSB7XG5cdFx0dmFyIGxzID0gbGlzdC5fcmVmcmVzaChsaXN0Ll9ub2RlKTtcblx0XHRfX3NldF9fKGxpc3QsJ2xlbmd0aCcsbHMubGVuZ3RoKTtcblx0XHRpZiAoIWxpc3QuJCRsZW5ndGggfHwgbHMubGVuZ3RoIDwgbGlzdC4kJGxlbmd0aCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxzLmxlbmd0aDsgaSBpbiBsaXN0OyBpKyspIHtcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsaXN0LCBpKSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBsaXN0W2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvcHkobHMsbGlzdCk7XG5cdFx0bGlzdC5faW5jID0gaW5jO1xuXHR9XG59XG5MaXZlTm9kZUxpc3QucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbihpKXtcblx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xufVxuXG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsTm9kZUxpc3QpO1xuXG4vKipcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoZSBOYW1lZE5vZGVNYXAgaW50ZXJmYWNlIGFyZSB1c2VkXG4gKiB0byByZXByZXNlbnQgY29sbGVjdGlvbnMgb2Ygbm9kZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgbmFtZS5cbiAqIE5vdGUgdGhhdCBOYW1lZE5vZGVNYXAgZG9lcyBub3QgaW5oZXJpdCBmcm9tIE5vZGVMaXN0O1xuICogTmFtZWROb2RlTWFwcyBhcmUgbm90IG1haW50YWluZWQgaW4gYW55IHBhcnRpY3VsYXIgb3JkZXIuXG4gKiBPYmplY3RzIGNvbnRhaW5lZCBpbiBhbiBvYmplY3QgaW1wbGVtZW50aW5nIE5hbWVkTm9kZU1hcCBtYXkgYWxzbyBiZSBhY2Nlc3NlZCBieSBhbiBvcmRpbmFsIGluZGV4LFxuICogYnV0IHRoaXMgaXMgc2ltcGx5IHRvIGFsbG93IGNvbnZlbmllbnQgZW51bWVyYXRpb24gb2YgdGhlIGNvbnRlbnRzIG9mIGEgTmFtZWROb2RlTWFwLFxuICogYW5kIGRvZXMgbm90IGltcGx5IHRoYXQgdGhlIERPTSBzcGVjaWZpZXMgYW4gb3JkZXIgdG8gdGhlc2UgTm9kZXMuXG4gKiBOYW1lZE5vZGVNYXAgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogdXNlZCBmb3IgYXR0cmlidXRlcyBvciBEb2N1bWVudFR5cGUgZW50aXRpZXNcbiAqL1xuZnVuY3Rpb24gTmFtZWROb2RlTWFwKCkge1xufTtcblxuZnVuY3Rpb24gX2ZpbmROb2RlSW5kZXgobGlzdCxub2RlKXtcblx0dmFyIGkgPSBsaXN0Lmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHRpZihsaXN0W2ldID09PSBub2RlKXtyZXR1cm4gaX1cblx0fVxufVxuXG5mdW5jdGlvbiBfYWRkTmFtZWROb2RlKGVsLGxpc3QsbmV3QXR0cixvbGRBdHRyKXtcblx0aWYob2xkQXR0cil7XG5cdFx0bGlzdFtfZmluZE5vZGVJbmRleChsaXN0LG9sZEF0dHIpXSA9IG5ld0F0dHI7XG5cdH1lbHNle1xuXHRcdGxpc3RbbGlzdC5sZW5ndGgrK10gPSBuZXdBdHRyO1xuXHR9XG5cdGlmKGVsKXtcblx0XHRuZXdBdHRyLm93bmVyRWxlbWVudCA9IGVsO1xuXHRcdHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuXHRcdGlmKGRvYyl7XG5cdFx0XHRvbGRBdHRyICYmIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsb2xkQXR0cik7XG5cdFx0XHRfb25BZGRBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gX3JlbW92ZU5hbWVkTm9kZShlbCxsaXN0LGF0dHIpe1xuXHQvL2NvbnNvbGUubG9nKCdyZW1vdmUgYXR0cjonK2F0dHIpXG5cdHZhciBpID0gX2ZpbmROb2RlSW5kZXgobGlzdCxhdHRyKTtcblx0aWYoaT49MCl7XG5cdFx0dmFyIGxhc3RJbmRleCA9IGxpc3QubGVuZ3RoLTFcblx0XHR3aGlsZShpPGxhc3RJbmRleCl7XG5cdFx0XHRsaXN0W2ldID0gbGlzdFsrK2ldXG5cdFx0fVxuXHRcdGxpc3QubGVuZ3RoID0gbGFzdEluZGV4O1xuXHRcdGlmKGVsKXtcblx0XHRcdHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuXHRcdFx0aWYoZG9jKXtcblx0XHRcdFx0X29uUmVtb3ZlQXR0cmlidXRlKGRvYyxlbCxhdHRyKTtcblx0XHRcdFx0YXR0ci5vd25lckVsZW1lbnQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fWVsc2V7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLG5ldyBFcnJvcihlbC50YWdOYW1lKydAJythdHRyKSlcblx0fVxufVxuTmFtZWROb2RlTWFwLnByb3RvdHlwZSA9IHtcblx0bGVuZ3RoOjAsXG5cdGl0ZW06Tm9kZUxpc3QucHJvdG90eXBlLml0ZW0sXG5cdGdldE5hbWVkSXRlbTogZnVuY3Rpb24oa2V5KSB7XG4vL1x0XHRpZihrZXkuaW5kZXhPZignOicpPjAgfHwga2V5ID09ICd4bWxucycpe1xuLy9cdFx0XHRyZXR1cm4gbnVsbDtcbi8vXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKClcblx0XHR2YXIgaSA9IHRoaXMubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSl7XG5cdFx0XHR2YXIgYXR0ciA9IHRoaXNbaV07XG5cdFx0XHQvL2NvbnNvbGUubG9nKGF0dHIubm9kZU5hbWUsa2V5KVxuXHRcdFx0aWYoYXR0ci5ub2RlTmFtZSA9PSBrZXkpe1xuXHRcdFx0XHRyZXR1cm4gYXR0cjtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNldE5hbWVkSXRlbTogZnVuY3Rpb24oYXR0cikge1xuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50O1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0dmFyIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShhdHRyLm5vZGVOYW1lKTtcblx0XHRfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIsb2xkQXR0cik7XG5cdFx0cmV0dXJuIG9sZEF0dHI7XG5cdH0sXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRzZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24oYXR0cikgey8vIHJhaXNlczogV1JPTkdfRE9DVU1FTlRfRVJSLE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUixJTlVTRV9BVFRSSUJVVEVfRVJSXG5cdFx0dmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQsIG9sZEF0dHI7XG5cdFx0aWYoZWwgJiYgZWwhPXRoaXMuX293bmVyRWxlbWVudCl7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuXHRcdH1cblx0XHRvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhhdHRyLm5hbWVzcGFjZVVSSSxhdHRyLmxvY2FsTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRyZW1vdmVOYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcblx0XHRfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIpO1xuXHRcdHJldHVybiBhdHRyO1xuXG5cblx0fSwvLyByYWlzZXM6IE5PVF9GT1VORF9FUlIsTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSXG5cblx0Ly9mb3IgbGV2ZWwyXG5cdHJlbW92ZU5hbWVkSXRlbU5TOmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxsb2NhbE5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksbG9jYWxOYW1lKTtcblx0XHRfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIpO1xuXHRcdHJldHVybiBhdHRyO1xuXHR9LFxuXHRnZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcblx0XHR2YXIgaSA9IHRoaXMubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSl7XG5cdFx0XHR2YXIgbm9kZSA9IHRoaXNbaV07XG5cdFx0XHRpZihub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT0gbmFtZXNwYWNlVVJJKXtcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG4vKipcbiAqIFRoZSBET01JbXBsZW1lbnRhdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcHJvdmlkaW5nIG1ldGhvZHNcbiAqIHdoaWNoIGFyZSBub3QgZGVwZW5kZW50IG9uIGFueSBwYXJ0aWN1bGFyIGRvY3VtZW50LlxuICogU3VjaCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgYnkgdGhlIGBEb2N1bWVudC5pbXBsZW1lbnRhdGlvbmAgcHJvcGVydHkuXG4gKlxuICogX19UaGUgaW5kaXZpZHVhbCBtZXRob2RzIGRlc2NyaWJlIHRoZSBkaWZmZXJlbmNlcyBjb21wYXJlZCB0byB0aGUgc3BlY3MuX19cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9sZXZlbC1vbmUtY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMSBDb3JlIChJbml0aWFsKVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAyIENvcmVcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMyBDb3JlXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9taW1wbGVtZW50YXRpb24gRE9NIExpdmluZyBTdGFuZGFyZFxuICovXG5mdW5jdGlvbiBET01JbXBsZW1lbnRhdGlvbigpIHtcbn1cblxuRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogVGhlIERPTUltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoKSBtZXRob2QgcmV0dXJucyBhIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIGlmIGEgZ2l2ZW4gZmVhdHVyZSBpcyBzdXBwb3J0ZWQuXG5cdCAqIFRoZSBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb25zIGZhaXJseSBkaXZlcmdlZCBpbiB3aGF0IGtpbmQgb2YgZmVhdHVyZXMgd2VyZSByZXBvcnRlZC5cblx0ICogVGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBzcGVjIHNldHRsZWQgdG8gZm9yY2UgdGhpcyBtZXRob2QgdG8gYWx3YXlzIHJldHVybiB0cnVlLCB3aGVyZSB0aGUgZnVuY3Rpb25hbGl0eSB3YXMgYWNjdXJhdGUgYW5kIGluIHVzZS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgSXQgaXMgZGVwcmVjYXRlZCBhbmQgbW9kZXJuIGJyb3dzZXJzIHJldHVybiB0cnVlIGluIGFsbCBjYXNlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2ZXJzaW9uXVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYWx3YXlzIHRydWVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vaGFzRmVhdHVyZSBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2xldmVsLW9uZS1jb3JlLmh0bWwjSUQtNUNFRDk0RDcgRE9NIExldmVsIDEgQ29yZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmUgRE9NIExpdmluZyBTdGFuZGFyZFxuXHQgKi9cblx0aGFzRmVhdHVyZTogZnVuY3Rpb24oZmVhdHVyZSwgdmVyc2lvbikge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIFhNTCBEb2N1bWVudCBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlIHdpdGggaXRzIGRvY3VtZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIF9fSXQgYmVoYXZlcyBzbGlnaHRseSBkaWZmZXJlbnQgZnJvbSB0aGUgZGVzY3JpcHRpb24gaW4gdGhlIGxpdmluZyBzdGFuZGFyZF9fOlxuXHQgKiAtIFRoZXJlIGlzIG5vIGludGVyZmFjZS9jbGFzcyBgWE1MRG9jdW1lbnRgLCBpdCByZXR1cm5zIGEgYERvY3VtZW50YCBpbnN0YW5jZS5cblx0ICogLSBgY29udGVudFR5cGVgLCBgZW5jb2RpbmdgLCBgbW9kZWAsIGBvcmlnaW5gLCBgdXJsYCBmaWVsZHMgYXJlIGN1cnJlbnRseSBub3QgZGVjbGFyZWQuXG5cdCAqIC0gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgdmFsaWRhdGluZyBuYW1lcyBvciBxdWFsaWZpZWQgbmFtZXNcblx0ICogICAod2hlbiBwYXJzaW5nIFhNTCBzdHJpbmdzLCB0aGUgU0FYIHBhcnNlciB0YWtlcyBjYXJlIG9mIHRoYXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IG5hbWVzcGFjZVVSSVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuXHQgKiBAcGFyYW0ge0RvY3VtZW50VHlwZT1udWxsfSBkb2N0eXBlXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudH1cblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlRG9jdW1lbnQgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0xldmVsLTItQ29yZS1ET00tY3JlYXRlRG9jdW1lbnQgRE9NIExldmVsIDIgQ29yZSAoaW5pdGlhbClcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudCAgRE9NIExldmVsIDIgQ29yZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jdmFsaWRhdGUtYW5kLWV4dHJhY3QgRE9NOiBWYWxpZGF0ZSBhbmQgZXh0cmFjdFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULU5hbWVTdGFydENoYXIgWE1MIFNwZWM6IE5hbWVzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lcy8jbnMtcXVhbG5hbWVzIFhNTCBOYW1lc3BhY2VzOiBRdWFsaWZpZWQgbmFtZXNcblx0ICovXG5cdGNyZWF0ZURvY3VtZW50OiBmdW5jdGlvbihuYW1lc3BhY2VVUkksICBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKXtcblx0XHR2YXIgZG9jID0gbmV3IERvY3VtZW50KCk7XG5cdFx0ZG9jLmltcGxlbWVudGF0aW9uID0gdGhpcztcblx0XHRkb2MuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdGRvYy5kb2N0eXBlID0gZG9jdHlwZSB8fCBudWxsO1xuXHRcdGlmIChkb2N0eXBlKXtcblx0XHRcdGRvYy5hcHBlbmRDaGlsZChkb2N0eXBlKTtcblx0XHR9XG5cdFx0aWYgKHF1YWxpZmllZE5hbWUpe1xuXHRcdFx0dmFyIHJvb3QgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG5cdFx0XHRkb2MuYXBwZW5kQ2hpbGQocm9vdCk7XG5cdFx0fVxuXHRcdHJldHVybiBkb2M7XG5cdH0sXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgZG9jdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gYHF1YWxpZmllZE5hbWVgLCBgcHVibGljSWRgLCBhbmQgYHN5c3RlbUlkYC5cblx0ICpcblx0ICogX19UaGlzIGJlaGF2aW9yIGlzIHNsaWdodGx5IGRpZmZlcmVudCBmcm9tIHRoZSBpbiB0aGUgc3BlY3NfXzpcblx0ICogLSB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCB2YWxpZGF0aW5nIG5hbWVzIG9yIHF1YWxpZmllZCBuYW1lc1xuXHQgKiAgICh3aGVuIHBhcnNpbmcgWE1MIHN0cmluZ3MsIHRoZSBTQVggcGFyc2VyIHRha2VzIGNhcmUgb2YgdGhhdClcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtwdWJsaWNJZF1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtzeXN0ZW1JZF1cblx0ICogQHJldHVybnMge0RvY3VtZW50VHlwZX0gd2hpY2ggY2FuIGVpdGhlciBiZSB1c2VkIHdpdGggYERPTUltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50YCB1cG9uIGRvY3VtZW50IGNyZWF0aW9uXG5cdCAqIFx0XHRcdFx0ICBvciBjYW4gYmUgcHV0IGludG8gdGhlIGRvY3VtZW50IHZpYSBtZXRob2RzIGxpa2UgYE5vZGUuaW5zZXJ0QmVmb3JlKClgIG9yIGBOb2RlLnJlcGxhY2VDaGlsZCgpYFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9jcmVhdGVEb2N1bWVudFR5cGUgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0xldmVsLTItQ29yZS1ET00tY3JlYXRlRG9jVHlwZSBET00gTGV2ZWwgMiBDb3JlXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnR0eXBlIERPTSBMaXZpbmcgU3RhbmRhcmRcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3ZhbGlkYXRlLWFuZC1leHRyYWN0IERPTTogVmFsaWRhdGUgYW5kIGV4dHJhY3Rcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1OYW1lU3RhcnRDaGFyIFhNTCBTcGVjOiBOYW1lc1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMvI25zLXF1YWxuYW1lcyBYTUwgTmFtZXNwYWNlczogUXVhbGlmaWVkIG5hbWVzXG5cdCAqL1xuXHRjcmVhdGVEb2N1bWVudFR5cGU6IGZ1bmN0aW9uKHF1YWxpZmllZE5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRUeXBlKCk7XG5cdFx0bm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLnB1YmxpY0lkID0gcHVibGljSWQgfHwgJyc7XG5cdFx0bm9kZS5zeXN0ZW1JZCA9IHN5c3RlbUlkIHx8ICcnO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvY29yZS5odG1sI0lELTE5NTA2NDEyNDdcbiAqL1xuXG5mdW5jdGlvbiBOb2RlKCkge1xufTtcblxuTm9kZS5wcm90b3R5cGUgPSB7XG5cdGZpcnN0Q2hpbGQgOiBudWxsLFxuXHRsYXN0Q2hpbGQgOiBudWxsLFxuXHRwcmV2aW91c1NpYmxpbmcgOiBudWxsLFxuXHRuZXh0U2libGluZyA6IG51bGwsXG5cdGF0dHJpYnV0ZXMgOiBudWxsLFxuXHRwYXJlbnROb2RlIDogbnVsbCxcblx0Y2hpbGROb2RlcyA6IG51bGwsXG5cdG93bmVyRG9jdW1lbnQgOiBudWxsLFxuXHRub2RlVmFsdWUgOiBudWxsLFxuXHRuYW1lc3BhY2VVUkkgOiBudWxsLFxuXHRwcmVmaXggOiBudWxsLFxuXHRsb2NhbE5hbWUgOiBudWxsLFxuXHQvLyBNb2RpZmllZCBpbiBET00gTGV2ZWwgMjpcblx0aW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG5ld0NoaWxkLCByZWZDaGlsZCl7Ly9yYWlzZXNcblx0XHRyZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLG5ld0NoaWxkLHJlZkNoaWxkKTtcblx0fSxcblx0cmVwbGFjZUNoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkLCBvbGRDaGlsZCl7Ly9yYWlzZXNcblx0XHRfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLG9sZENoaWxkLCBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudCk7XG5cdFx0aWYob2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHR9LFxuXHRyZW1vdmVDaGlsZDpmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxudWxsKTtcblx0fSxcblx0aGFzQ2hpbGROb2RlczpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmZpcnN0Q2hpbGQgIT0gbnVsbDtcblx0fSxcblx0Y2xvbmVOb2RlOmZ1bmN0aW9uKGRlZXApe1xuXHRcdHJldHVybiBjbG9uZU5vZGUodGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHRoaXMsZGVlcCk7XG5cdH0sXG5cdC8vIE1vZGlmaWVkIGluIERPTSBMZXZlbCAyOlxuXHRub3JtYWxpemU6ZnVuY3Rpb24oKXtcblx0XHR2YXIgY2hpbGQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PSBURVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgPT0gVEVYVF9OT0RFKXtcblx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChuZXh0KTtcblx0XHRcdFx0Y2hpbGQuYXBwZW5kRGF0YShuZXh0LmRhdGEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGNoaWxkLm5vcm1hbGl6ZSgpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuICBcdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGlzU3VwcG9ydGVkOmZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pe1xuXHRcdHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShmZWF0dXJlLHZlcnNpb24pO1xuXHR9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG4gICAgaGFzQXR0cmlidXRlczpmdW5jdGlvbigpe1xuICAgIFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGg+MDtcbiAgICB9LFxuXHQvKipcblx0ICogTG9vayB1cCB0aGUgcHJlZml4IGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIG5hbWVzcGFjZSBVUkksIHN0YXJ0aW5nIGZyb20gdGhpcyBub2RlLlxuXHQgKiAqKlRoZSBkZWZhdWx0IG5hbWVzcGFjZSBkZWNsYXJhdGlvbnMgYXJlIGlnbm9yZWQgYnkgdGhpcyBtZXRob2QuKipcblx0ICogU2VlIE5hbWVzcGFjZSBQcmVmaXggTG9va3VwIGZvciBkZXRhaWxzIG9uIHRoZSBhbGdvcml0aG0gdXNlZCBieSB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogX05vdGU6IFRoZSBpbXBsZW1lbnRhdGlvbiBzZWVtcyB0byBiZSBpbmNvbXBsZXRlIHdoZW4gY29tcGFyZWQgdG8gdGhlIGFsZ29yaXRobSBkZXNjcmliZWQgaW4gdGhlIHNwZWNzLl9cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI05vZGUzLWxvb2t1cE5hbWVzcGFjZVByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL25hbWVzcGFjZXMtYWxnb3JpdGhtcy5odG1sI2xvb2t1cE5hbWVzcGFjZVByZWZpeEFsZ29cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWxvb2t1cHByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8zMjJcblx0ICovXG4gICAgbG9va3VwUHJlZml4OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRmb3IodmFyIG4gaW4gbWFwKXtcblx0XHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCBuKSAmJiBtYXBbbl0gPT09IG5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbjtcblx0XHRcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBsb29rdXBOYW1lc3BhY2VVUkk6ZnVuY3Rpb24ocHJlZml4KXtcbiAgICBcdHZhciBlbCA9IHRoaXM7XG4gICAgXHR3aGlsZShlbCl7XG4gICAgXHRcdHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgXHRcdC8vY29uc29sZS5kaXIobWFwKVxuICAgIFx0XHRpZihtYXApe1xuICAgIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXAsIHByZWZpeCkpe1xuICAgIFx0XHRcdFx0cmV0dXJuIG1hcFtwcmVmaXhdIDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBpc0RlZmF1bHROYW1lc3BhY2U6ZnVuY3Rpb24obmFtZXNwYWNlVVJJKXtcbiAgICBcdHZhciBwcmVmaXggPSB0aGlzLmxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpO1xuICAgIFx0cmV0dXJuIHByZWZpeCA9PSBudWxsO1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gX3htbEVuY29kZXIoYyl7XG5cdHJldHVybiBjID09ICc8JyAmJiAnJmx0OycgfHxcbiAgICAgICAgIGMgPT0gJz4nICYmICcmZ3Q7JyB8fFxuICAgICAgICAgYyA9PSAnJicgJiYgJyZhbXA7JyB8fFxuICAgICAgICAgYyA9PSAnXCInICYmICcmcXVvdDsnIHx8XG4gICAgICAgICAnJiMnK2MuY2hhckNvZGVBdCgpKyc7J1xufVxuXG5cbmNvcHkoTm9kZVR5cGUsTm9kZSk7XG5jb3B5KE5vZGVUeXBlLE5vZGUucHJvdG90eXBlKTtcblxuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2sgcmV0dXJuIHRydWUgZm9yIGNvbnRpbnVlLGZhbHNlIGZvciBicmVha1xuICogQHJldHVybiBib29sZWFuIHRydWU6IGJyZWFrIHZpc2l0O1xuICovXG5mdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spe1xuXHRpZihjYWxsYmFjayhub2RlKSl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYobm9kZSA9IG5vZGUuZmlyc3RDaGlsZCl7XG5cdFx0ZG97XG5cdFx0XHRpZihfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spKXtyZXR1cm4gdHJ1ZX1cbiAgICAgICAgfXdoaWxlKG5vZGU9bm9kZS5uZXh0U2libGluZylcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBEb2N1bWVudCgpe1xuXHR0aGlzLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBfb25BZGRBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXg/bmV3QXR0ci5sb2NhbE5hbWU6JyddID0gbmV3QXR0ci52YWx1ZVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cixyZW1vdmUpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRkZWxldGUgZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXVxuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlcyBgZWwuY2hpbGROb2Rlc2AsIHVwZGF0aW5nIHRoZSBpbmRleGVkIGl0ZW1zIGFuZCBpdCdzIGBsZW5ndGhgLlxuICogUGFzc2luZyBgbmV3Q2hpbGRgIG1lYW5zIGl0IHdpbGwgYmUgYXBwZW5kZWQuXG4gKiBPdGhlcndpc2UgaXQncyBhc3N1bWVkIHRoYXQgYW4gaXRlbSBoYXMgYmVlbiByZW1vdmVkLFxuICogYW5kIGBlbC5maXJzdE5vZGVgIGFuZCBpdCdzIGAubmV4dFNpYmxpbmdgIGFyZSB1c2VkXG4gKiB0byB3YWxrIHRoZSBjdXJyZW50IGxpc3Qgb2YgY2hpbGQgbm9kZXMuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge05vZGV9IFtuZXdDaGlsZF1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9vblVwZGF0ZUNoaWxkIChkb2MsIGVsLCBuZXdDaGlsZCkge1xuXHRpZihkb2MgJiYgZG9jLl9pbmMpe1xuXHRcdGRvYy5faW5jKys7XG5cdFx0Ly91cGRhdGUgY2hpbGROb2Rlc1xuXHRcdHZhciBjcyA9IGVsLmNoaWxkTm9kZXM7XG5cdFx0aWYgKG5ld0NoaWxkKSB7XG5cdFx0XHRjc1tjcy5sZW5ndGgrK10gPSBuZXdDaGlsZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdHdoaWxlIChjaGlsZCkge1xuXHRcdFx0XHRjc1tpKytdID0gY2hpbGQ7XG5cdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHR9XG5cdFx0XHRjcy5sZW5ndGggPSBpO1xuXHRcdFx0ZGVsZXRlIGNzW2NzLmxlbmd0aF07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29ubmVjdGlvbnMgYmV0d2VlbiBgcGFyZW50Tm9kZWAgYW5kIGBjaGlsZGBcbiAqIGFuZCBhbnkgZXhpc3RpbmcgYGNoaWxkLnByZXZpb3VzU2libGluZ2Agb3IgYGNoaWxkLm5leHRTaWJsaW5nYC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xMzVcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzE0NVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZFxuICogQHJldHVybnMge05vZGV9IHRoZSBjaGlsZCB0aGF0IHdhcyByZW1vdmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNoaWxkIChwYXJlbnROb2RlLCBjaGlsZCkge1xuXHR2YXIgcHJldmlvdXMgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG5cdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdGlmIChwcmV2aW91cykge1xuXHRcdHByZXZpb3VzLm5leHRTaWJsaW5nID0gbmV4dDtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXh0O1xuXHR9XG5cdGlmIChuZXh0KSB7XG5cdFx0bmV4dC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91cztcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IHByZXZpb3VzO1xuXHR9XG5cdGNoaWxkLnBhcmVudE5vZGUgPSBudWxsO1xuXHRjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuXHRjaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSk7XG5cdHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbm9kZWAgY2FuIGJlIGEgcGFyZW50IGZvciBpbnNlcnRpb24uXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNWYWxpZFBhcmVudE5vZGVUeXBlKG5vZGUpIHtcblx0cmV0dXJuIChcblx0XHRub2RlICYmXG5cdFx0KG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpXG5cdCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5vZGVgIGNhbiBiZSBpbnNlcnRlZCBhY2NvcmRpbmcgdG8gaXQncyBgbm9kZVR5cGVgLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzSW5zZXJ0YWJsZU5vZGVUeXBlKG5vZGUpIHtcblx0cmV0dXJuIChcblx0XHRub2RlICYmXG5cdFx0KGlzRWxlbWVudE5vZGUobm9kZSkgfHxcblx0XHRcdGlzVGV4dE5vZGUobm9kZSkgfHxcblx0XHRcdGlzRG9jVHlwZU5vZGUobm9kZSkgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuXHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFKVxuXHQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgbm9kZWAgaXMgYSBET0NUWVBFIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRG9jVHlwZU5vZGUobm9kZSkge1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgYW4gZWxlbWVudFxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50Tm9kZShub2RlKSB7XG5cdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYG5vZGVgIGlzIGEgdGV4dCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZW4gZWxlbWVudCBub2RlIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgYGNoaWxkYCwgb3IgYXQgdGhlIGVuZCBpZiBjaGlsZCBpcyBmYWxzeSxcbiAqIGFjY29yZGluZyB0byB0aGUgcHJlc2VuY2UgYW5kIHBvc2l0aW9uIG9mIGEgZG9jdHlwZSBub2RlIG9uIHRoZSBzYW1lIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvYyBUaGUgZG9jdW1lbnQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHdvdWxkIGJlY29tZSB0aGUgbmV4dFNpYmxpbmcgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgaW5zZXJ0ZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgYW4gZWxlbWVudCBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGNoaWxkXG4gKiBAcHJpdmF0ZVxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50SW5zZXJ0aW9uUG9zc2libGUoZG9jLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IGRvYy5jaGlsZE5vZGVzIHx8IFtdO1xuXHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0VsZW1lbnROb2RlKSB8fCBpc0RvY1R5cGVOb2RlKGNoaWxkKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgZG9jVHlwZU5vZGUgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRG9jVHlwZU5vZGUpO1xuXHRyZXR1cm4gIShjaGlsZCAmJiBkb2NUeXBlTm9kZSAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoZG9jVHlwZU5vZGUpID4gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZW4gZWxlbWVudCBub2RlIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgYGNoaWxkYCwgb3IgYXQgdGhlIGVuZCBpZiBjaGlsZCBpcyBmYWxzeSxcbiAqIGFjY29yZGluZyB0byB0aGUgcHJlc2VuY2UgYW5kIHBvc2l0aW9uIG9mIGEgZG9jdHlwZSBub2RlIG9uIHRoZSBzYW1lIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZG9jIFRoZSBkb2N1bWVudCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIHRoZSBub2RlIHRoYXQgd291bGQgYmVjb21lIHRoZSBuZXh0U2libGluZyBpZiB0aGUgZWxlbWVudCB3b3VsZCBiZSBpbnNlcnRlZFxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBhbiBlbGVtZW50IGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgY2hpbGRcbiAqIEBwcml2YXRlXG4gKiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKGRvYywgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBkb2MuY2hpbGROb2RlcyB8fCBbXTtcblxuXHRmdW5jdGlvbiBoYXNFbGVtZW50Q2hpbGRUaGF0SXNOb3RDaGlsZChub2RlKSB7XG5cdFx0cmV0dXJuIGlzRWxlbWVudE5vZGUobm9kZSkgJiYgbm9kZSAhPT0gY2hpbGQ7XG5cdH1cblxuXHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBoYXNFbGVtZW50Q2hpbGRUaGF0SXNOb3RDaGlsZCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dmFyIGRvY1R5cGVOb2RlID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKTtcblx0cmV0dXJuICEoY2hpbGQgJiYgZG9jVHlwZU5vZGUgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGRvY1R5cGVOb2RlKSA+IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBTdGVwcyAxLTUgb2YgdGhlIGNoZWNrcyBiZWZvcmUgaW5zZXJ0aW5nIGFuZCBiZWZvcmUgcmVwbGFjaW5nIGEgY2hpbGQgYXJlIHRoZSBzYW1lLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZT19IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eTF0bzUocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHQvLyAxLiBJZiBgcGFyZW50YCBpcyBub3QgYSBEb2N1bWVudCwgRG9jdW1lbnRGcmFnbWVudCwgb3IgRWxlbWVudCBub2RlLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmICghaGFzVmFsaWRQYXJlbnROb2RlVHlwZShwYXJlbnQpKSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdVbmV4cGVjdGVkIHBhcmVudCBub2RlIHR5cGUgJyArIHBhcmVudC5ub2RlVHlwZSk7XG5cdH1cblx0Ly8gMi4gSWYgYG5vZGVgIGlzIGEgaG9zdC1pbmNsdWRpbmcgaW5jbHVzaXZlIGFuY2VzdG9yIG9mIGBwYXJlbnRgLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCFcblx0Ly8gMy4gSWYgYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgaXRzIHBhcmVudCBpcyBub3QgYHBhcmVudGAsIHRoZW4gdGhyb3cgYSBcIk5vdEZvdW5kRXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmIChjaGlsZCAmJiBjaGlsZC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcblx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsICdjaGlsZCBub3QgaW4gcGFyZW50Jyk7XG5cdH1cblx0aWYgKFxuXHRcdC8vIDQuIElmIGBub2RlYCBpcyBub3QgYSBEb2N1bWVudEZyYWdtZW50LCBEb2N1bWVudFR5cGUsIEVsZW1lbnQsIG9yIENoYXJhY3RlckRhdGEgbm9kZSwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRcdCFoYXNJbnNlcnRhYmxlTm9kZVR5cGUobm9kZSkgfHxcblx0XHQvLyA1LiBJZiBlaXRoZXIgYG5vZGVgIGlzIGEgVGV4dCBub2RlIGFuZCBgcGFyZW50YCBpcyBhIGRvY3VtZW50LFxuXHRcdC8vIHRoZSBzYXggcGFyc2VyIGN1cnJlbnRseSBhZGRzIHRvcCBsZXZlbCB0ZXh0IG5vZGVzLCB0aGlzIHdpbGwgYmUgZml4ZWQgaW4gMC45LjBcblx0XHQvLyB8fCAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG5cdFx0Ly8gb3IgYG5vZGVgIGlzIGEgZG9jdHlwZSBhbmQgYHBhcmVudGAgaXMgbm90IGEgZG9jdW1lbnQsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0XHQoaXNEb2NUeXBlTm9kZShub2RlKSAmJiBwYXJlbnQubm9kZVR5cGUgIT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcblx0KSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcblx0XHRcdEhJRVJBUkNIWV9SRVFVRVNUX0VSUixcblx0XHRcdCdVbmV4cGVjdGVkIG5vZGUgdHlwZSAnICsgbm9kZS5ub2RlVHlwZSArICcgZm9yIHBhcmVudCBub2RlIHR5cGUgJyArIHBhcmVudC5ub2RlVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogU3RlcCA2IG9mIHRoZSBjaGVja3MgYmVmb3JlIGluc2VydGluZyBhbmQgYmVmb3JlIHJlcGxhY2luZyBhIGNoaWxkIGFyZSBkaWZmZXJlbnQuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZSB8IHVuZGVmaW5lZH0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1yZXBsYWNlXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5SW5Eb2N1bWVudChwYXJlbnQsIG5vZGUsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXMgfHwgW107XG5cdHZhciBub2RlQ2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuXHQvLyBEb2N1bWVudEZyYWdtZW50XG5cdGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHR2YXIgbm9kZUNoaWxkRWxlbWVudHMgPSBub2RlQ2hpbGROb2Rlcy5maWx0ZXIoaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gSWYgbm9kZSBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkIG9yIGhhcyBhIFRleHQgbm9kZSBjaGlsZC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID4gMSB8fCBmaW5kKG5vZGVDaGlsZE5vZGVzLCBpc1RleHROb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdNb3JlIHRoYW4gb25lIGVsZW1lbnQgb3IgdGV4dCBpbiBmcmFnbWVudCcpO1xuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIGlmIGBub2RlYCBoYXMgb25lIGVsZW1lbnQgY2hpbGQgYW5kIGVpdGhlciBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCxcblx0XHQvLyBgY2hpbGRgIGlzIGEgZG9jdHlwZSwgb3IgYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPT09IDEgJiYgIWlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0VsZW1lbnQgaW4gZnJhZ21lbnQgY2FuIG5vdCBiZSBpbnNlcnRlZCBiZWZvcmUgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBFbGVtZW50XG5cdGlmIChpc0VsZW1lbnROb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQsIGBjaGlsZGAgaXMgYSBkb2N0eXBlLFxuXHRcdC8vIG9yIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAoIWlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGVsZW1lbnQgY2FuIGJlIGFkZGVkIGFuZCBvbmx5IGFmdGVyIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRG9jdW1lbnRUeXBlXG5cdGlmIChpc0RvY1R5cGVOb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGEgZG9jdHlwZSBjaGlsZCxcblx0XHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBkb2N0eXBlIGlzIGFsbG93ZWQnKTtcblx0XHR9XG5cdFx0dmFyIHBhcmVudEVsZW1lbnRDaGlsZCA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgYW4gZWxlbWVudCBpcyBwcmVjZWRpbmcgYGNoaWxkYCxcblx0XHRpZiAoY2hpbGQgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKHBhcmVudEVsZW1lbnRDaGlsZCkgPCBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0RvY3R5cGUgY2FuIG9ubHkgYmUgaW5zZXJ0ZWQgYmVmb3JlIGFuIGVsZW1lbnQnKTtcblx0XHR9XG5cdFx0Ly8gb3IgYGNoaWxkYCBpcyBudWxsIGFuZCBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZC5cblx0XHRpZiAoIWNoaWxkICYmIHBhcmVudEVsZW1lbnRDaGlsZCkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdEb2N0eXBlIGNhbiBub3QgYmUgYXBwZW5kZWQgc2luY2UgZWxlbWVudCBpcyBwcmVzZW50Jyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIFN0ZXAgNiBvZiB0aGUgY2hlY2tzIGJlZm9yZSBpbnNlcnRpbmcgYW5kIGJlZm9yZSByZXBsYWNpbmcgYSBjaGlsZCBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGUgfCB1bmRlZmluZWR9IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudChwYXJlbnQsIG5vZGUsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXMgfHwgW107XG5cdHZhciBub2RlQ2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuXHQvLyBEb2N1bWVudEZyYWdtZW50XG5cdGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHR2YXIgbm9kZUNoaWxkRWxlbWVudHMgPSBub2RlQ2hpbGROb2Rlcy5maWx0ZXIoaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gSWYgYG5vZGVgIGhhcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgY2hpbGQgb3IgaGFzIGEgVGV4dCBub2RlIGNoaWxkLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPiAxIHx8IGZpbmQobm9kZUNoaWxkTm9kZXMsIGlzVGV4dE5vZGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ01vcmUgdGhhbiBvbmUgZWxlbWVudCBvciB0ZXh0IGluIGZyYWdtZW50Jyk7XG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYG5vZGVgIGhhcyBvbmUgZWxlbWVudCBjaGlsZCBhbmQgZWl0aGVyIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkIHRoYXQgaXMgbm90IGBjaGlsZGAgb3IgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPT09IDEgJiYgIWlzRWxlbWVudFJlcGxhY2VtZW50UG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRWxlbWVudCBpbiBmcmFnbWVudCBjYW4gbm90IGJlIGluc2VydGVkIGJlZm9yZSBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIEVsZW1lbnRcblx0aWYgKGlzRWxlbWVudE5vZGUobm9kZSkpIHtcblx0XHQvLyBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgIG9yIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAoIWlzRWxlbWVudFJlcGxhY2VtZW50UG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZWxlbWVudCBjYW4gYmUgYWRkZWQgYW5kIG9ubHkgYWZ0ZXIgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBEb2N1bWVudFR5cGVcblx0aWYgKGlzRG9jVHlwZU5vZGUobm9kZSkpIHtcblx0XHRmdW5jdGlvbiBoYXNEb2N0eXBlQ2hpbGRUaGF0SXNOb3RDaGlsZChub2RlKSB7XG5cdFx0XHRyZXR1cm4gaXNEb2NUeXBlTm9kZShub2RlKSAmJiBub2RlICE9PSBjaGlsZDtcblx0XHR9XG5cblx0XHQvLyBgcGFyZW50YCBoYXMgYSBkb2N0eXBlIGNoaWxkIHRoYXQgaXMgbm90IGBjaGlsZGAsXG5cdFx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaGFzRG9jdHlwZUNoaWxkVGhhdElzTm90Q2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGRvY3R5cGUgaXMgYWxsb3dlZCcpO1xuXHRcdH1cblx0XHR2YXIgcGFyZW50RWxlbWVudENoaWxkID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0VsZW1lbnROb2RlKTtcblx0XHQvLyBvciBhbiBlbGVtZW50IGlzIHByZWNlZGluZyBgY2hpbGRgLlxuXHRcdGlmIChjaGlsZCAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YocGFyZW50RWxlbWVudENoaWxkKSA8IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRG9jdHlwZSBjYW4gb25seSBiZSBpbnNlcnRlZCBiZWZvcmUgYW4gZWxlbWVudCcpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGU9fSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKi9cbmZ1bmN0aW9uIF9pbnNlcnRCZWZvcmUocGFyZW50LCBub2RlLCBjaGlsZCwgX2luRG9jdW1lbnRBc3NlcnRpb24pIHtcblx0Ly8gVG8gZW5zdXJlIHByZS1pbnNlcnRpb24gdmFsaWRpdHkgb2YgYSBub2RlIGludG8gYSBwYXJlbnQgYmVmb3JlIGEgY2hpbGQsIHJ1biB0aGVzZSBzdGVwczpcblx0YXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHkxdG81KHBhcmVudCwgbm9kZSwgY2hpbGQpO1xuXG5cdC8vIElmIHBhcmVudCBpcyBhIGRvY3VtZW50LCBhbmQgYW55IG9mIHRoZSBzdGF0ZW1lbnRzIGJlbG93LCBzd2l0Y2hlZCBvbiB0aGUgaW50ZXJmYWNlIG5vZGUgaW1wbGVtZW50cyxcblx0Ly8gYXJlIHRydWUsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0aWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG5cdFx0KF9pbkRvY3VtZW50QXNzZXJ0aW9uIHx8IGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5SW5Eb2N1bWVudCkocGFyZW50LCBub2RlLCBjaGlsZCk7XG5cdH1cblxuXHR2YXIgY3AgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmKGNwKXtcblx0XHRjcC5yZW1vdmVDaGlsZChub2RlKTsvL3JlbW92ZSBhbmQgdXBkYXRlXG5cdH1cblx0aWYobm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0dmFyIG5ld0ZpcnN0ID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdGlmIChuZXdGaXJzdCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cdFx0dmFyIG5ld0xhc3QgPSBub2RlLmxhc3RDaGlsZDtcblx0fWVsc2V7XG5cdFx0bmV3Rmlyc3QgPSBuZXdMYXN0ID0gbm9kZTtcblx0fVxuXHR2YXIgcHJlID0gY2hpbGQgPyBjaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnQubGFzdENoaWxkO1xuXG5cdG5ld0ZpcnN0LnByZXZpb3VzU2libGluZyA9IHByZTtcblx0bmV3TGFzdC5uZXh0U2libGluZyA9IGNoaWxkO1xuXG5cblx0aWYocHJlKXtcblx0XHRwcmUubmV4dFNpYmxpbmcgPSBuZXdGaXJzdDtcblx0fWVsc2V7XG5cdFx0cGFyZW50LmZpcnN0Q2hpbGQgPSBuZXdGaXJzdDtcblx0fVxuXHRpZihjaGlsZCA9PSBudWxsKXtcblx0XHRwYXJlbnQubGFzdENoaWxkID0gbmV3TGFzdDtcblx0fWVsc2V7XG5cdFx0Y2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3TGFzdDtcblx0fVxuXHRkb3tcblx0XHRuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50O1xuXHR9d2hpbGUobmV3Rmlyc3QgIT09IG5ld0xhc3QgJiYgKG5ld0ZpcnN0PSBuZXdGaXJzdC5uZXh0U2libGluZykpXG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudC5vd25lckRvY3VtZW50fHxwYXJlbnQsIHBhcmVudCk7XG5cdC8vY29uc29sZS5sb2cocGFyZW50Lmxhc3RDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKVxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0bm9kZS5maXJzdENoaWxkID0gbm9kZS5sYXN0Q2hpbGQgPSBudWxsO1xuXHR9XG5cdHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIEFwcGVuZHMgYG5ld0NoaWxkYCB0byBgcGFyZW50Tm9kZWAuXG4gKiBJZiBgbmV3Q2hpbGRgIGlzIGFscmVhZHkgY29ubmVjdGVkIHRvIGEgYHBhcmVudE5vZGVgIGl0IGlzIGZpcnN0IHJlbW92ZWQgZnJvbSBpdC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xMzVcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzE0NVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gKiBAcGFyYW0ge05vZGV9IG5ld0NoaWxkXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9hcHBlbmRTaW5nbGVDaGlsZCAocGFyZW50Tm9kZSwgbmV3Q2hpbGQpIHtcblx0aWYgKG5ld0NoaWxkLnBhcmVudE5vZGUpIHtcblx0XHRuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcblx0fVxuXHRuZXdDaGlsZC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcblx0bmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdG5ld0NoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcblx0aWYgKG5ld0NoaWxkLnByZXZpb3VzU2libGluZykge1xuXHRcdG5ld0NoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHR9XG5cdHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSwgbmV3Q2hpbGQpO1xuXHRyZXR1cm4gbmV3Q2hpbGQ7XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZSA9IHtcblx0Ly9pbXBsZW1lbnRhdGlvbiA6IG51bGwsXG5cdG5vZGVOYW1lIDogICcjZG9jdW1lbnQnLFxuXHRub2RlVHlwZSA6ICBET0NVTUVOVF9OT0RFLFxuXHQvKipcblx0ICogVGhlIERvY3VtZW50VHlwZSBub2RlIG9mIHRoZSBkb2N1bWVudC5cblx0ICpcblx0ICogQHJlYWRvbmx5XG5cdCAqIEB0eXBlIERvY3VtZW50VHlwZVxuXHQgKi9cblx0ZG9jdHlwZSA6ICBudWxsLFxuXHRkb2N1bWVudEVsZW1lbnQgOiAgbnVsbCxcblx0X2luYyA6IDEsXG5cblx0aW5zZXJ0QmVmb3JlIDogIGZ1bmN0aW9uKG5ld0NoaWxkLCByZWZDaGlsZCl7Ly9yYWlzZXNcblx0XHRpZihuZXdDaGlsZC5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtcblx0XHRcdHZhciBjaGlsZCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG5cdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGNoaWxkLHJlZkNoaWxkKTtcblx0XHRcdFx0Y2hpbGQgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld0NoaWxkO1xuXHRcdH1cblx0XHRfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCk7XG5cdFx0bmV3Q2hpbGQub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09PSBudWxsICYmIG5ld0NoaWxkLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld0NoaWxkO1xuXHR9LFxuXHRyZW1vdmVDaGlsZCA6ICBmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0aWYodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gb2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsb2xkQ2hpbGQpO1xuXHR9LFxuXHRyZXBsYWNlQ2hpbGQ6IGZ1bmN0aW9uIChuZXdDaGlsZCwgb2xkQ2hpbGQpIHtcblx0XHQvL3JhaXNlc1xuXHRcdF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIG9sZENoaWxkLCBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudCk7XG5cdFx0bmV3Q2hpbGQub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0aWYgKG9sZENoaWxkKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNoaWxkKG9sZENoaWxkKTtcblx0XHR9XG5cdFx0aWYgKGlzRWxlbWVudE5vZGUobmV3Q2hpbGQpKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50RWxlbWVudCA9IG5ld0NoaWxkO1xuXHRcdH1cblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0aW1wb3J0Tm9kZSA6IGZ1bmN0aW9uKGltcG9ydGVkTm9kZSxkZWVwKXtcblx0XHRyZXR1cm4gaW1wb3J0Tm9kZSh0aGlzLGltcG9ydGVkTm9kZSxkZWVwKTtcblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0Z2V0RWxlbWVudEJ5SWQgOlx0ZnVuY3Rpb24oaWQpe1xuXHRcdHZhciBydHYgPSBudWxsO1xuXHRcdF92aXNpdE5vZGUodGhpcy5kb2N1bWVudEVsZW1lbnQsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRpZihub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSl7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKXtcblx0XHRcdFx0XHRydHYgPSBub2RlO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gcnR2O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgYGdldEVsZW1lbnRzQnlDbGFzc05hbWVgIG1ldGhvZCBvZiBgRG9jdW1lbnRgIGludGVyZmFjZSByZXR1cm5zIGFuIGFycmF5LWxpa2Ugb2JqZWN0XG5cdCAqIG9mIGFsbCBjaGlsZCBlbGVtZW50cyB3aGljaCBoYXZlICoqYWxsKiogb2YgdGhlIGdpdmVuIGNsYXNzIG5hbWUocykuXG5cdCAqXG5cdCAqIFJldHVybnMgYW4gZW1wdHkgbGlzdCBpZiBgY2xhc3NlTmFtZXNgIGlzIGFuIGVtcHR5IHN0cmluZyBvciBvbmx5IGNvbnRhaW5zIEhUTUwgd2hpdGUgc3BhY2UgY2hhcmFjdGVycy5cblx0ICpcblx0ICpcblx0ICogV2FybmluZzogVGhpcyBpcyBhIGxpdmUgTGl2ZU5vZGVMaXN0LlxuXHQgKiBDaGFuZ2VzIGluIHRoZSBET00gd2lsbCByZWZsZWN0IGluIHRoZSBhcnJheSBhcyB0aGUgY2hhbmdlcyBvY2N1ci5cblx0ICogSWYgYW4gZWxlbWVudCBzZWxlY3RlZCBieSB0aGlzIGFycmF5IG5vIGxvbmdlciBxdWFsaWZpZXMgZm9yIHRoZSBzZWxlY3Rvcixcblx0ICogaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHJlbW92ZWQuIEJlIGF3YXJlIG9mIHRoaXMgZm9yIGl0ZXJhdGlvbiBwdXJwb3Nlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZXMgaXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjbGFzcyBuYW1lKHMpIHRvIG1hdGNoOyBtdWx0aXBsZSBjbGFzcyBuYW1lcyBhcmUgc2VwYXJhdGVkIGJ5IChBU0NJSS0pd2hpdGVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9nZXRFbGVtZW50c0J5Q2xhc3NOYW1lXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWdldGVsZW1lbnRzYnljbGFzc25hbWVcblx0ICovXG5cdGdldEVsZW1lbnRzQnlDbGFzc05hbWU6IGZ1bmN0aW9uKGNsYXNzTmFtZXMpIHtcblx0XHR2YXIgY2xhc3NOYW1lc1NldCA9IHRvT3JkZXJlZFNldChjbGFzc05hbWVzKVxuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsIGZ1bmN0aW9uKGJhc2UpIHtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0aWYgKGNsYXNzTmFtZXNTZXQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRfdmlzaXROb2RlKGJhc2UuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcblx0XHRcdFx0XHRcdHZhciBub2RlQ2xhc3NOYW1lcyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpXG5cdFx0XHRcdFx0XHQvLyBjYW4gYmUgbnVsbCBpZiB0aGUgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0XG5cdFx0XHRcdFx0XHRpZiAobm9kZUNsYXNzTmFtZXMpIHtcblx0XHRcdFx0XHRcdFx0Ly8gYmVmb3JlIHNwbGl0dGluZyBhbmQgaXRlcmF0aW5nIGp1c3QgY29tcGFyZSB0aGVtIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZVxuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2hlcyA9IGNsYXNzTmFtZXMgPT09IG5vZGVDbGFzc05hbWVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbm9kZUNsYXNzTmFtZXNTZXQgPSB0b09yZGVyZWRTZXQobm9kZUNsYXNzTmFtZXMpXG5cdFx0XHRcdFx0XHRcdFx0bWF0Y2hlcyA9IGNsYXNzTmFtZXNTZXQuZXZlcnkoYXJyYXlJbmNsdWRlcyhub2RlQ2xhc3NOYW1lc1NldCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0XHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxzO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8vZG9jdW1lbnQgZmFjdG9yeSBtZXRob2Q6XG5cdGNyZWF0ZUVsZW1lbnQgOlx0ZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS50YWdOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHRhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlRG9jdW1lbnRGcmFnbWVudCA6XHRmdW5jdGlvbigpe1xuXHRcdHZhciBub2RlID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVUZXh0Tm9kZSA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBUZXh0KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQ29tbWVudCA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBDb21tZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQ0RBVEFTZWN0aW9uIDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbiA6XHRmdW5jdGlvbih0YXJnZXQsZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLnRhZ05hbWUgPSBub2RlLm5vZGVOYW1lID0gbm9kZS50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0bm9kZS5ub2RlVmFsdWUgPSBub2RlLmRhdGEgPSBkYXRhO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVBdHRyaWJ1dGUgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudFx0PSB0aGlzO1xuXHRcdG5vZGUubmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdG5vZGUubG9jYWxOYW1lID0gbmFtZTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUVudGl0eVJlZmVyZW5jZSA6XHRmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbnRpdHlSZWZlcmVuY2UoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lXHQ9IG5hbWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUVsZW1lbnROUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRpZihwbC5sZW5ndGggPT0gMil7XG5cdFx0XHRub2RlLnByZWZpeCA9IHBsWzBdO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vZWwucHJlZml4ID0gbnVsbDtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHR9XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUF0dHJpYnV0ZU5TIDpcdGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxxdWFsaWZpZWROYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG5cdFx0dmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuX2V4dGVuZHMoRG9jdW1lbnQsTm9kZSk7XG5cblxuZnVuY3Rpb24gRWxlbWVudCgpIHtcblx0dGhpcy5fbnNNYXAgPSB7fTtcbn07XG5FbGVtZW50LnByb3RvdHlwZSA9IHtcblx0bm9kZVR5cGUgOiBFTEVNRU5UX05PREUsXG5cdGhhc0F0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShuYW1lKTtcblx0fSxcblx0c2V0QXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdHJlbW92ZUF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpXG5cdFx0YXR0ciAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG5cdH0sXG5cblx0Ly9mb3VyIHJlYWwgb3BlYXJ0aW9uIG1ldGhvZFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIF9hcHBlbmRTaW5nbGVDaGlsZCh0aGlzLG5ld0NoaWxkKTtcblx0XHR9XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuZXdBdHRyKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShuZXdBdHRyKTtcblx0fSxcblx0c2V0QXR0cmlidXRlTm9kZU5TIDogZnVuY3Rpb24obmV3QXR0cil7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW1OUyhuZXdBdHRyKTtcblx0fSxcblx0cmVtb3ZlQXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG9sZEF0dHIpe1xuXHRcdC8vY29uc29sZS5sb2codGhpcyA9PSBvbGRBdHRyLm93bmVyRWxlbWVudClcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShvbGRBdHRyLm5vZGVOYW1lKTtcblx0fSxcblx0Ly9nZXQgcmVhbCBhdHRyaWJ1dGUgbmFtZSxhbmQgcmVtb3ZlIGl0IGJ5IHJlbW92ZUF0dHJpYnV0ZU5vZGVcblx0cmVtb3ZlQXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0dmFyIG9sZCA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0XHRvbGQgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZCk7XG5cdH0sXG5cblx0aGFzQXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSE9bnVsbDtcblx0fSxcblx0Z2V0QXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdFx0cmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcblx0fSxcblx0c2V0QXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIHZhbHVlKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuXHRcdGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcblx0fSxcblx0Z2V0QXR0cmlidXRlTm9kZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHR9LFxuXG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lIDogZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFICYmICh0YWdOYW1lID09PSAnKicgfHwgbm9kZS50YWdOYW1lID09IHRhZ05hbWUpKXtcblx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblx0Z2V0RWxlbWVudHNCeVRhZ05hbWVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLGZ1bmN0aW9uKGJhc2Upe1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRfdmlzaXROb2RlKGJhc2UsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFICYmIChuYW1lc3BhY2VVUkkgPT09ICcqJyB8fCBub2RlLm5hbWVzcGFjZVVSSSA9PT0gbmFtZXNwYWNlVVJJKSAmJiAobG9jYWxOYW1lID09PSAnKicgfHwgbm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cblx0XHR9KTtcblx0fVxufTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TO1xuXG5cbl9leHRlbmRzKEVsZW1lbnQsTm9kZSk7XG5mdW5jdGlvbiBBdHRyKCkge1xufTtcbkF0dHIucHJvdG90eXBlLm5vZGVUeXBlID0gQVRUUklCVVRFX05PREU7XG5fZXh0ZW5kcyhBdHRyLE5vZGUpO1xuXG5cbmZ1bmN0aW9uIENoYXJhY3RlckRhdGEoKSB7XG59O1xuQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUgPSB7XG5cdGRhdGEgOiAnJyxcblx0c3Vic3RyaW5nRGF0YSA6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCtjb3VudCk7XG5cdH0sXG5cdGFwcGVuZERhdGE6IGZ1bmN0aW9uKHRleHQpIHtcblx0XHR0ZXh0ID0gdGhpcy5kYXRhK3RleHQ7XG5cdFx0dGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdH0sXG5cdGluc2VydERhdGE6IGZ1bmN0aW9uKG9mZnNldCx0ZXh0KSB7XG5cdFx0dGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsMCx0ZXh0KTtcblxuXHR9LFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VbSElFUkFSQ0hZX1JFUVVFU1RfRVJSXSlcblx0fSxcblx0ZGVsZXRlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LGNvdW50LFwiXCIpO1xuXHR9LFxuXHRyZXBsYWNlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCwgdGV4dCkge1xuXHRcdHZhciBzdGFydCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCxvZmZzZXQpO1xuXHRcdHZhciBlbmQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCtjb3VudCk7XG5cdFx0dGV4dCA9IHN0YXJ0ICsgdGV4dCArIGVuZDtcblx0XHR0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0fVxufVxuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSxOb2RlKTtcbmZ1bmN0aW9uIFRleHQoKSB7XG59O1xuVGV4dC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjdGV4dFwiLFxuXHRub2RlVHlwZSA6IFRFWFRfTk9ERSxcblx0c3BsaXRUZXh0IDogZnVuY3Rpb24ob2Zmc2V0KSB7XG5cdFx0dmFyIHRleHQgPSB0aGlzLmRhdGE7XG5cdFx0dmFyIG5ld1RleHQgPSB0ZXh0LnN1YnN0cmluZyhvZmZzZXQpO1xuXHRcdHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBvZmZzZXQpO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHRcdHZhciBuZXdOb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1RleHQpO1xuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSl7XG5cdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHRoaXMubmV4dFNpYmxpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Tm9kZTtcblx0fVxufVxuX2V4dGVuZHMoVGV4dCxDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENvbW1lbnQoKSB7XG59O1xuQ29tbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY29tbWVudFwiLFxuXHRub2RlVHlwZSA6IENPTU1FTlRfTk9ERVxufVxuX2V4dGVuZHMoQ29tbWVudCxDaGFyYWN0ZXJEYXRhKTtcblxuZnVuY3Rpb24gQ0RBVEFTZWN0aW9uKCkge1xufTtcbkNEQVRBU2VjdGlvbi5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY2RhdGEtc2VjdGlvblwiLFxuXHRub2RlVHlwZSA6IENEQVRBX1NFQ1RJT05fTk9ERVxufVxuX2V4dGVuZHMoQ0RBVEFTZWN0aW9uLENoYXJhY3RlckRhdGEpO1xuXG5cbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHtcbn07XG5Eb2N1bWVudFR5cGUucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfVFlQRV9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRUeXBlLE5vZGUpO1xuXG5mdW5jdGlvbiBOb3RhdGlvbigpIHtcbn07XG5Ob3RhdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBOT1RBVElPTl9OT0RFO1xuX2V4dGVuZHMoTm90YXRpb24sTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eSgpIHtcbn07XG5FbnRpdHkucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX05PREU7XG5fZXh0ZW5kcyhFbnRpdHksTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHtcbn07XG5FbnRpdHlSZWZlcmVuY2UucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX1JFRkVSRU5DRV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5UmVmZXJlbmNlLE5vZGUpO1xuXG5mdW5jdGlvbiBEb2N1bWVudEZyYWdtZW50KCkge1xufTtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVOYW1lID1cdFwiI2RvY3VtZW50LWZyYWdtZW50XCI7XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9XHRET0NVTUVOVF9GUkFHTUVOVF9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRGcmFnbWVudCxOb2RlKTtcblxuXG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7XG59XG5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFO1xuX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLE5vZGUpO1xuZnVuY3Rpb24gWE1MU2VyaWFsaXplcigpe31cblhNTFNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZVRvU3RyaW5nID0gZnVuY3Rpb24obm9kZSxpc0h0bWwsbm9kZUZpbHRlcil7XG5cdHJldHVybiBub2RlU2VyaWFsaXplVG9TdHJpbmcuY2FsbChub2RlLGlzSHRtbCxub2RlRmlsdGVyKTtcbn1cbk5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nO1xuZnVuY3Rpb24gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nKGlzSHRtbCxub2RlRmlsdGVyKXtcblx0dmFyIGJ1ZiA9IFtdO1xuXHR2YXIgcmVmTm9kZSA9IHRoaXMubm9kZVR5cGUgPT0gOSAmJiB0aGlzLmRvY3VtZW50RWxlbWVudCB8fCB0aGlzO1xuXHR2YXIgcHJlZml4ID0gcmVmTm9kZS5wcmVmaXg7XG5cdHZhciB1cmkgPSByZWZOb2RlLm5hbWVzcGFjZVVSSTtcblxuXHRpZih1cmkgJiYgcHJlZml4ID09IG51bGwpe1xuXHRcdC8vY29uc29sZS5sb2cocHJlZml4KVxuXHRcdHZhciBwcmVmaXggPSByZWZOb2RlLmxvb2t1cFByZWZpeCh1cmkpO1xuXHRcdGlmKHByZWZpeCA9PSBudWxsKXtcblx0XHRcdC8vaXNIVE1MID0gdHJ1ZTtcblx0XHRcdHZhciB2aXNpYmxlTmFtZXNwYWNlcz1bXG5cdFx0XHR7bmFtZXNwYWNlOnVyaSxwcmVmaXg6bnVsbH1cblx0XHRcdC8ve25hbWVzcGFjZTp1cmkscHJlZml4OicnfVxuXHRcdFx0XVxuXHRcdH1cblx0fVxuXHRzZXJpYWxpemVUb1N0cmluZyh0aGlzLGJ1Zixpc0h0bWwsbm9kZUZpbHRlcix2aXNpYmxlTmFtZXNwYWNlcyk7XG5cdC8vY29uc29sZS5sb2coJyMjIycsdGhpcy5ub2RlVHlwZSx1cmkscHJlZml4LGJ1Zi5qb2luKCcnKSlcblx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gbmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSB7XG5cdHZhciBwcmVmaXggPSBub2RlLnByZWZpeCB8fCAnJztcblx0dmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuXHQvLyBBY2NvcmRpbmcgdG8gW05hbWVzcGFjZXMgaW4gWE1MIDEuMF0oaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI25zLXVzaW5nKSAsXG5cdC8vIGFuZCBtb3JlIHNwZWNpZmljYWxseSBodHRwczovL3d3dy53My5vcmcvVFIvUkVDLXhtbC1uYW1lcy8jbnNjLU5vUHJlZml4VW5kZWNsIDpcblx0Ly8gPiBJbiBhIG5hbWVzcGFjZSBkZWNsYXJhdGlvbiBmb3IgYSBwcmVmaXggWy4uLl0sIHRoZSBhdHRyaWJ1dGUgdmFsdWUgTVVTVCBOT1QgYmUgZW1wdHkuXG5cdC8vIGluIGEgc2ltaWxhciBtYW5uZXIgW05hbWVzcGFjZXMgaW4gWE1MIDEuMV0oaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lczExLyNucy11c2luZylcblx0Ly8gYW5kIG1vcmUgc3BlY2lmaWNhbGx5IGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMxMS8jbnNjLU5TRGVjbGFyZWQgOlxuXHQvLyA+IFsuLi5dIEZ1cnRoZXJtb3JlLCB0aGUgYXR0cmlidXRlIHZhbHVlIFsuLi5dIG11c3Qgbm90IGJlIGFuIGVtcHR5IHN0cmluZy5cblx0Ly8gc28gc2VyaWFsaXppbmcgZW1wdHkgbmFtZXNwYWNlIHZhbHVlIGxpa2UgeG1sbnM6ZHM9XCJcIiB3b3VsZCBwcm9kdWNlIGFuIGludmFsaWQgWE1MIGRvY3VtZW50LlxuXHRpZiAoIXVyaSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAocHJlZml4ID09PSBcInhtbFwiICYmIHVyaSA9PT0gTkFNRVNQQUNFLlhNTCB8fCB1cmkgPT09IE5BTUVTUEFDRS5YTUxOUykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoXG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgbnMgPSB2aXNpYmxlTmFtZXNwYWNlc1tpXTtcblx0XHQvLyBnZXQgbmFtZXNwYWNlIHByZWZpeFxuXHRcdGlmIChucy5wcmVmaXggPT09IHByZWZpeCkge1xuXHRcdFx0cmV0dXJuIG5zLm5hbWVzcGFjZSAhPT0gdXJpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogV2VsbC1mb3JtZWQgY29uc3RyYWludDogTm8gPCBpbiBBdHRyaWJ1dGUgVmFsdWVzXG4gKiA+IFRoZSByZXBsYWNlbWVudCB0ZXh0IG9mIGFueSBlbnRpdHkgcmVmZXJyZWQgdG8gZGlyZWN0bHkgb3IgaW5kaXJlY3RseVxuICogPiBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgbXVzdCBub3QgY29udGFpbiBhIDwuXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwxMS8jQ2xlYW5BdHRyVmFsc1xuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI05ULUF0dFZhbHVlXG4gKlxuICogTGl0ZXJhbCB3aGl0ZXNwYWNlIG90aGVyIHRoYW4gc3BhY2UgdGhhdCBhcHBlYXIgaW4gYXR0cmlidXRlIHZhbHVlc1xuICogYXJlIHNlcmlhbGl6ZWQgYXMgdGhlaXIgZW50aXR5IHJlZmVyZW5jZXMsIHNvIHRoZXkgd2lsbCBiZSBwcmVzZXJ2ZWQuXG4gKiAoSW4gY29udHJhc3QgdG8gd2hpdGVzcGFjZSBsaXRlcmFscyBpbiB0aGUgaW5wdXQgd2hpY2ggYXJlIG5vcm1hbGl6ZWQgdG8gc3BhY2VzKVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI0FWTm9ybWFsaXplXG4gKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9ET00tUGFyc2luZy8jc2VyaWFsaXppbmctYW4tZWxlbWVudC1zLWF0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG5cdGJ1Zi5wdXNoKCcgJywgcXVhbGlmaWVkTmFtZSwgJz1cIicsIHZhbHVlLnJlcGxhY2UoL1s8PiZcIlxcdFxcblxccl0vZywgX3htbEVuY29kZXIpLCAnXCInKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVUb1N0cmluZyhub2RlLGJ1Zixpc0hUTUwsbm9kZUZpbHRlcix2aXNpYmxlTmFtZXNwYWNlcyl7XG5cdGlmICghdmlzaWJsZU5hbWVzcGFjZXMpIHtcblx0XHR2aXNpYmxlTmFtZXNwYWNlcyA9IFtdO1xuXHR9XG5cblx0aWYobm9kZUZpbHRlcil7XG5cdFx0bm9kZSA9IG5vZGVGaWx0ZXIobm9kZSk7XG5cdFx0aWYobm9kZSl7XG5cdFx0XHRpZih0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJyl7XG5cdFx0XHRcdGJ1Zi5wdXNoKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vYnVmLnNvcnQuYXBwbHkoYXR0cnMsIGF0dHJpYnV0ZVNvcnRlcik7XG5cdH1cblxuXHRzd2l0Y2gobm9kZS5ub2RlVHlwZSl7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcblx0XHR2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR2YXIgbm9kZU5hbWUgPSBub2RlLnRhZ05hbWU7XG5cblx0XHRpc0hUTUwgPSBOQU1FU1BBQ0UuaXNIVE1MKG5vZGUubmFtZXNwYWNlVVJJKSB8fCBpc0hUTUxcblxuXHRcdHZhciBwcmVmaXhlZE5vZGVOYW1lID0gbm9kZU5hbWVcblx0XHRpZiAoIWlzSFRNTCAmJiAhbm9kZS5wcmVmaXggJiYgbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdHZhciBkZWZhdWx0TlNcblx0XHRcdC8vIGxvb2t1cCBjdXJyZW50IGRlZmF1bHQgbnMgZnJvbSBgeG1sbnNgIGF0dHJpYnV0ZVxuXHRcdFx0Zm9yICh2YXIgYWkgPSAwOyBhaSA8IGF0dHJzLmxlbmd0aDsgYWkrKykge1xuXHRcdFx0XHRpZiAoYXR0cnMuaXRlbShhaSkubmFtZSA9PT0gJ3htbG5zJykge1xuXHRcdFx0XHRcdGRlZmF1bHROUyA9IGF0dHJzLml0ZW0oYWkpLnZhbHVlXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFkZWZhdWx0TlMpIHtcblx0XHRcdFx0Ly8gbG9va3VwIGN1cnJlbnQgZGVmYXVsdCBucyBpbiB2aXNpYmxlTmFtZXNwYWNlc1xuXHRcdFx0XHRmb3IgKHZhciBuc2kgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggLSAxOyBuc2kgPj0gMDsgbnNpLS0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gdmlzaWJsZU5hbWVzcGFjZXNbbnNpXVxuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UucHJlZml4ID09PSAnJyAmJiBuYW1lc3BhY2UubmFtZXNwYWNlID09PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdE5TID0gbmFtZXNwYWNlLm5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkZWZhdWx0TlMgIT09IG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHRcdGZvciAodmFyIG5zaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aCAtIDE7IG5zaSA+PSAwOyBuc2ktLSkge1xuXHRcdFx0XHRcdHZhciBuYW1lc3BhY2UgPSB2aXNpYmxlTmFtZXNwYWNlc1tuc2ldXG5cdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5uYW1lc3BhY2UgPT09IG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLnByZWZpeCkge1xuXHRcdFx0XHRcdFx0XHRwcmVmaXhlZE5vZGVOYW1lID0gbmFtZXNwYWNlLnByZWZpeCArICc6JyArIG5vZGVOYW1lXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGJ1Zi5wdXNoKCc8JywgcHJlZml4ZWROb2RlTmFtZSk7XG5cblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0Ly8gYWRkIG5hbWVzcGFjZXMgZm9yIGF0dHJpYnV0ZXNcblx0XHRcdHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcblx0XHRcdGlmIChhdHRyLnByZWZpeCA9PSAneG1sbnMnKSB7XG5cdFx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6IGF0dHIubG9jYWxOYW1lLCBuYW1lc3BhY2U6IGF0dHIudmFsdWUgfSk7XG5cdFx0XHR9ZWxzZSBpZihhdHRyLm5vZGVOYW1lID09ICd4bWxucycpe1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiAnJywgbmFtZXNwYWNlOiBhdHRyLnZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHR2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cdFx0XHRpZiAobmVlZE5hbWVzcGFjZURlZmluZShhdHRyLGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG5cdFx0XHRcdHZhciBwcmVmaXggPSBhdHRyLnByZWZpeHx8Jyc7XG5cdFx0XHRcdHZhciB1cmkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcblx0XHRcdFx0YWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHByZWZpeCA/ICd4bWxuczonICsgcHJlZml4IDogXCJ4bWxuc1wiLCB1cmkpO1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBwcmVmaXgsIG5hbWVzcGFjZTp1cmkgfSk7XG5cdFx0XHR9XG5cdFx0XHRzZXJpYWxpemVUb1N0cmluZyhhdHRyLGJ1Zixpc0hUTUwsbm9kZUZpbHRlcix2aXNpYmxlTmFtZXNwYWNlcyk7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIG5hbWVzcGFjZSBmb3IgY3VycmVudCBub2RlXG5cdFx0aWYgKG5vZGVOYW1lID09PSBwcmVmaXhlZE5vZGVOYW1lICYmIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcblx0XHRcdHZhciBwcmVmaXggPSBub2RlLnByZWZpeHx8Jyc7XG5cdFx0XHR2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG5cdFx0XHRhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcHJlZml4ID8gJ3htbG5zOicgKyBwcmVmaXggOiBcInhtbG5zXCIsIHVyaSk7XG5cdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBwcmVmaXgsIG5hbWVzcGFjZTp1cmkgfSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGQgfHwgaXNIVE1MICYmICEvXig/Om1ldGF8bGlua3xpbWd8YnJ8aHJ8aW5wdXQpJC9pLnRlc3Qobm9kZU5hbWUpKXtcblx0XHRcdGJ1Zi5wdXNoKCc+Jyk7XG5cdFx0XHQvL2lmIGlzIGNkYXRhIGNoaWxkIG5vZGVcblx0XHRcdGlmKGlzSFRNTCAmJiAvXnNjcmlwdCQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRpZihjaGlsZC5kYXRhKXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGNoaWxkLmRhdGEpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2Vcblx0XHRcdHtcblx0XHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goJzwvJyxwcmVmaXhlZE5vZGVOYW1lLCc+Jyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRidWYucHVzaCgnLz4nKTtcblx0XHR9XG5cdFx0Ly8gcmVtb3ZlIGFkZGVkIHZpc2libGUgbmFtZXNwYWNlc1xuXHRcdC8vdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoID0gc3RhcnRWaXNpYmxlTmFtZXNwYWNlcztcblx0XHRyZXR1cm47XG5cdGNhc2UgRE9DVU1FTlRfTk9ERTpcblx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdHJldHVybiBhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1Ziwgbm9kZS5uYW1lLCBub2RlLnZhbHVlKTtcblx0Y2FzZSBURVhUX05PREU6XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFtcGVyc2FuZCBjaGFyYWN0ZXIgKCYpIGFuZCB0aGUgbGVmdCBhbmdsZSBicmFja2V0ICg8KSBtdXN0IG5vdCBhcHBlYXIgaW4gdGhlaXIgbGl0ZXJhbCBmb3JtLFxuXHRcdCAqIGV4Y2VwdCB3aGVuIHVzZWQgYXMgbWFya3VwIGRlbGltaXRlcnMsIG9yIHdpdGhpbiBhIGNvbW1lbnQsIGEgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgb3IgYSBDREFUQSBzZWN0aW9uLlxuXHRcdCAqIElmIHRoZXkgYXJlIG5lZWRlZCBlbHNld2hlcmUsIHRoZXkgbXVzdCBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBudW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIG9yIHRoZSBzdHJpbmdzXG5cdFx0ICogYCZhbXA7YCBhbmQgYCZsdDtgIHJlc3BlY3RpdmVseS5cblx0XHQgKiBUaGUgcmlnaHQgYW5nbGUgYnJhY2tldCAoPikgbWF5IGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBzdHJpbmcgXCIgJmd0OyBcIiwgYW5kIG11c3QsIGZvciBjb21wYXRpYmlsaXR5LFxuXHRcdCAqIGJlIGVzY2FwZWQgdXNpbmcgZWl0aGVyIGAmZ3Q7YCBvciBhIGNoYXJhY3RlciByZWZlcmVuY2Ugd2hlbiBpdCBhcHBlYXJzIGluIHRoZSBzdHJpbmcgYF1dPmAgaW4gY29udGVudCxcblx0XHQgKiB3aGVuIHRoYXQgc3RyaW5nIGlzIG5vdCBtYXJraW5nIHRoZSBlbmQgb2YgYSBDREFUQSBzZWN0aW9uLlxuXHRcdCAqXG5cdFx0ICogSW4gdGhlIGNvbnRlbnQgb2YgZWxlbWVudHMsIGNoYXJhY3RlciBkYXRhIGlzIGFueSBzdHJpbmcgb2YgY2hhcmFjdGVyc1xuXHRcdCAqIHdoaWNoIGRvZXMgbm90IGNvbnRhaW4gdGhlIHN0YXJ0LWRlbGltaXRlciBvZiBhbnkgbWFya3VwXG5cdFx0ICogYW5kIGRvZXMgbm90IGluY2x1ZGUgdGhlIENEQVRBLXNlY3Rpb24tY2xvc2UgZGVsaW1pdGVyLCBgXV0+YC5cblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtQ2hhckRhdGFcblx0XHQgKiBAc2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9ET00tUGFyc2luZy8jeG1sLXNlcmlhbGl6aW5nLWEtdGV4dC1ub2RlXG5cdFx0ICovXG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKG5vZGUuZGF0YVxuXHRcdFx0LnJlcGxhY2UoL1s8Jj5dL2csX3htbEVuY29kZXIpXG5cdFx0KTtcblx0Y2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCAnPCFbQ0RBVEFbJyxub2RlLmRhdGEsJ11dPicpO1xuXHRjYXNlIENPTU1FTlRfTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goIFwiPCEtLVwiLG5vZGUuZGF0YSxcIi0tPlwiKTtcblx0Y2FzZSBET0NVTUVOVF9UWVBFX05PREU6XG5cdFx0dmFyIHB1YmlkID0gbm9kZS5wdWJsaWNJZDtcblx0XHR2YXIgc3lzaWQgPSBub2RlLnN5c3RlbUlkO1xuXHRcdGJ1Zi5wdXNoKCc8IURPQ1RZUEUgJyxub2RlLm5hbWUpO1xuXHRcdGlmKHB1YmlkKXtcblx0XHRcdGJ1Zi5wdXNoKCcgUFVCTElDICcsIHB1YmlkKTtcblx0XHRcdGlmIChzeXNpZCAmJiBzeXNpZCE9Jy4nKSB7XG5cdFx0XHRcdGJ1Zi5wdXNoKCcgJywgc3lzaWQpO1xuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goJz4nKTtcblx0XHR9ZWxzZSBpZihzeXNpZCAmJiBzeXNpZCE9Jy4nKXtcblx0XHRcdGJ1Zi5wdXNoKCcgU1lTVEVNICcsIHN5c2lkLCAnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIHN1YiA9IG5vZGUuaW50ZXJuYWxTdWJzZXQ7XG5cdFx0XHRpZihzdWIpe1xuXHRcdFx0XHRidWYucHVzaChcIiBbXCIsc3ViLFwiXVwiKTtcblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKFwiPlwiKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHRjYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goIFwiPD9cIixub2RlLnRhcmdldCxcIiBcIixub2RlLmRhdGEsXCI/PlwiKTtcblx0Y2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCAnJicsbm9kZS5ub2RlTmFtZSwnOycpO1xuXHQvL2Nhc2UgRU5USVRZX05PREU6XG5cdC8vY2FzZSBOT1RBVElPTl9OT0RFOlxuXHRkZWZhdWx0OlxuXHRcdGJ1Zi5wdXNoKCc/Pycsbm9kZS5ub2RlTmFtZSk7XG5cdH1cbn1cbmZ1bmN0aW9uIGltcG9ydE5vZGUoZG9jLG5vZGUsZGVlcCl7XG5cdHZhciBub2RlMjtcblx0c3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuXHRcdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdFx0Ly92YXIgYXR0cnMgPSBub2RlMi5hdHRyaWJ1dGVzO1xuXHRcdC8vdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHQvL2Zvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHQvL25vZGUyLnNldEF0dHJpYnV0ZU5vZGVOUyhpbXBvcnROb2RlKGRvYyxhdHRycy5pdGVtKGkpLGRlZXApKTtcblx0XHQvL31cblx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdGJyZWFrO1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdGRlZXAgPSB0cnVlO1xuXHRcdGJyZWFrO1xuXHQvL2Nhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuXHQvL2Nhc2UgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOlxuXHQvLy8vY2FzZSBURVhUX05PREU6XG5cdC8vY2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG5cdC8vY2FzZSBDT01NRU5UX05PREU6XG5cdC8vXHRkZWVwID0gZmFsc2U7XG5cdC8vXHRicmVhaztcblx0Ly9jYXNlIERPQ1VNRU5UX05PREU6XG5cdC8vY2FzZSBET0NVTUVOVF9UWVBFX05PREU6XG5cdC8vY2Fubm90IGJlIGltcG9ydGVkLlxuXHQvL2Nhc2UgRU5USVRZX05PREU6XG5cdC8vY2FzZSBOT1RBVElPTl9OT0RF77yaXG5cdC8vY2FuIG5vdCBoaXQgaW4gbGV2ZWwzXG5cdC8vZGVmYXVsdDp0aHJvdyBlO1xuXHR9XG5cdGlmKCFub2RlMil7XG5cdFx0bm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7Ly9mYWxzZVxuXHR9XG5cdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdG5vZGUyLnBhcmVudE5vZGUgPSBudWxsO1xuXHRpZihkZWVwKXtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0bm9kZTIuYXBwZW5kQ2hpbGQoaW1wb3J0Tm9kZShkb2MsY2hpbGQsZGVlcCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5vZGUyO1xufVxuLy9cbi8vdmFyIF9yZWxhdGlvbk1hcCA9IHtmaXJzdENoaWxkOjEsbGFzdENoaWxkOjEscHJldmlvdXNTaWJsaW5nOjEsbmV4dFNpYmxpbmc6MSxcbi8vXHRcdFx0XHRcdGF0dHJpYnV0ZXM6MSxjaGlsZE5vZGVzOjEscGFyZW50Tm9kZToxLGRvY3VtZW50RWxlbWVudDoxLGRvY3R5cGUsfTtcbmZ1bmN0aW9uIGNsb25lTm9kZShkb2Msbm9kZSxkZWVwKXtcblx0dmFyIG5vZGUyID0gbmV3IG5vZGUuY29uc3RydWN0b3IoKTtcblx0Zm9yICh2YXIgbiBpbiBub2RlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBuKSkge1xuXHRcdFx0dmFyIHYgPSBub2RlW25dO1xuXHRcdFx0aWYgKHR5cGVvZiB2ICE9IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0aWYgKHYgIT0gbm9kZTJbbl0pIHtcblx0XHRcdFx0XHRub2RlMltuXSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYobm9kZS5jaGlsZE5vZGVzKXtcblx0XHRub2RlMi5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdH1cblx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0c3dpdGNoIChub2RlMi5ub2RlVHlwZSkge1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzO1xuXHRcdHZhciBhdHRyczJcdD0gbm9kZTIuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHR2YXIgbGVuID0gYXR0cnMubGVuZ3RoXG5cdFx0YXR0cnMyLl9vd25lckVsZW1lbnQgPSBub2RlMjtcblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0bm9kZTIuc2V0QXR0cmlidXRlTm9kZShjbG9uZU5vZGUoZG9jLGF0dHJzLml0ZW0oaSksdHJ1ZSkpO1xuXHRcdH1cblx0XHRicmVhazs7XG5cdGNhc2UgQVRUUklCVVRFX05PREU6XG5cdFx0ZGVlcCA9IHRydWU7XG5cdH1cblx0aWYoZGVlcCl7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdG5vZGUyLmFwcGVuZENoaWxkKGNsb25lTm9kZShkb2MsY2hpbGQsZGVlcCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5vZGUyO1xufVxuXG5mdW5jdGlvbiBfX3NldF9fKG9iamVjdCxrZXksdmFsdWUpe1xuXHRvYmplY3Rba2V5XSA9IHZhbHVlXG59XG4vL2RvIGR5bmFtaWNcbnRyeXtcblx0aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTGl2ZU5vZGVMaXN0LnByb3RvdHlwZSwnbGVuZ3RoJyx7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGxlbmd0aDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwndGV4dENvbnRlbnQnLHtcblx0XHRcdGdldDpmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4gZ2V0VGV4dENvbnRlbnQodGhpcyk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6ZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHN3aXRjaCh0aGlzLm5vZGVUeXBlKXtcblx0XHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRcdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRcdFx0XHR3aGlsZSh0aGlzLmZpcnN0Q2hpbGQpe1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihkYXRhIHx8IFN0cmluZyhkYXRhKSl7XG5cdFx0XHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gZGF0YTtcblx0XHRcdFx0XHR0aGlzLm5vZGVWYWx1ZSA9IGRhdGE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0ZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQobm9kZSl7XG5cdFx0XHRzd2l0Y2gobm9kZS5ub2RlVHlwZSl7XG5cdFx0XHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRcdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRcdFx0dmFyIGJ1ZiA9IFtdO1xuXHRcdFx0XHRub2RlID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdFx0XHR3aGlsZShub2RlKXtcblx0XHRcdFx0XHRpZihub2RlLm5vZGVUeXBlIT09NyAmJiBub2RlLm5vZGVUeXBlICE9PTgpe1xuXHRcdFx0XHRcdFx0YnVmLnB1c2goZ2V0VGV4dENvbnRlbnQobm9kZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYnVmLmpvaW4oJycpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG5vZGUubm9kZVZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF9fc2V0X18gPSBmdW5jdGlvbihvYmplY3Qsa2V5LHZhbHVlKXtcblx0XHRcdC8vY29uc29sZS5sb2codmFsdWUpXG5cdFx0XHRvYmplY3RbJyQkJytrZXldID0gdmFsdWVcblx0XHR9XG5cdH1cbn1jYXRjaChlKXsvL2llOFxufVxuXG4vL2lmKHR5cGVvZiByZXF1aXJlID09ICdmdW5jdGlvbicpe1xuXHRleHBvcnRzLkRvY3VtZW50VHlwZSA9IERvY3VtZW50VHlwZTtcblx0ZXhwb3J0cy5ET01FeGNlcHRpb24gPSBET01FeGNlcHRpb247XG5cdGV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSBET01JbXBsZW1lbnRhdGlvbjtcblx0ZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcblx0ZXhwb3J0cy5Ob2RlID0gTm9kZTtcblx0ZXhwb3J0cy5Ob2RlTGlzdCA9IE5vZGVMaXN0O1xuXHRleHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBYTUxTZXJpYWxpemVyO1xuLy99XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmcmVlemUgPSByZXF1aXJlKCcuL2NvbnZlbnRpb25zJykuZnJlZXplO1xuXG4vKipcbiAqIFRoZSBlbnRpdGllcyB0aGF0IGFyZSBwcmVkZWZpbmVkIGluIGV2ZXJ5IFhNTCBkb2N1bWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA2L1JFQy14bWwxMS0yMDA2MDgxNi8jc2VjLXByZWRlZmluZWQtZW50IFczQyBYTUwgMS4xXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy14bWwtMjAwODExMjYvI3NlYy1wcmVkZWZpbmVkLWVudCBXM0MgWE1MIDEuMFxuICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX1hNTF9hbmRfSFRNTF9jaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXMjUHJlZGVmaW5lZF9lbnRpdGllc19pbl9YTUwgV2lraXBlZGlhXG4gKi9cbmV4cG9ydHMuWE1MX0VOVElUSUVTID0gZnJlZXplKHtcblx0YW1wOiAnJicsXG5cdGFwb3M6IFwiJ1wiLFxuXHRndDogJz4nLFxuXHRsdDogJzwnLFxuXHRxdW90OiAnXCInLFxufSk7XG5cbi8qKlxuICogQSBtYXAgb2YgYWxsIGVudGl0aWVzIHRoYXQgYXJlIGRldGVjdGVkIGluIGFuIEhUTUwgZG9jdW1lbnQuXG4gKiBUaGV5IGNvbnRhaW4gYWxsIGVudHJpZXMgZnJvbSBgWE1MX0VOVElUSUVTYC5cbiAqXG4gKiBAc2VlIFhNTF9FTlRJVElFU1xuICogQHNlZSBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nXG4gKiBAc2VlIERPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZS5jcmVhdGVIVE1MRG9jdW1lbnRcbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZXMgV0hBVFdHIEhUTUwoNSkgU3BlY1xuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL2VudGl0aWVzLmpzb24gSlNPTlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLWVudGl0eS1uYW1lcy8gVzNDIFhNTCBFbnRpdHkgTmFtZXNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw0L3NnbWwvZW50aXRpZXMuaHRtbCBXM0MgSFRNTDQvU0dNTFxuICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX1hNTF9hbmRfSFRNTF9jaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXMjQ2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzX2luX0hUTUwgV2lraXBlZGlhIChIVE1MKVxuICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX1hNTF9hbmRfSFRNTF9jaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXMjRW50aXRpZXNfcmVwcmVzZW50aW5nX3NwZWNpYWxfY2hhcmFjdGVyc19pbl9YSFRNTCBXaWtwZWRpYSAoWEhUTUwpXG4gKi9cbmV4cG9ydHMuSFRNTF9FTlRJVElFUyA9IGZyZWV6ZSh7XG5cdEFhY3V0ZTogJ1xcdTAwQzEnLFxuXHRhYWN1dGU6ICdcXHUwMEUxJyxcblx0QWJyZXZlOiAnXFx1MDEwMicsXG5cdGFicmV2ZTogJ1xcdTAxMDMnLFxuXHRhYzogJ1xcdTIyM0UnLFxuXHRhY2Q6ICdcXHUyMjNGJyxcblx0YWNFOiAnXFx1MjIzRVxcdTAzMzMnLFxuXHRBY2lyYzogJ1xcdTAwQzInLFxuXHRhY2lyYzogJ1xcdTAwRTInLFxuXHRhY3V0ZTogJ1xcdTAwQjQnLFxuXHRBY3k6ICdcXHUwNDEwJyxcblx0YWN5OiAnXFx1MDQzMCcsXG5cdEFFbGlnOiAnXFx1MDBDNicsXG5cdGFlbGlnOiAnXFx1MDBFNicsXG5cdGFmOiAnXFx1MjA2MScsXG5cdEFmcjogJ1xcdUQ4MzVcXHVERDA0Jyxcblx0YWZyOiAnXFx1RDgzNVxcdUREMUUnLFxuXHRBZ3JhdmU6ICdcXHUwMEMwJyxcblx0YWdyYXZlOiAnXFx1MDBFMCcsXG5cdGFsZWZzeW06ICdcXHUyMTM1Jyxcblx0YWxlcGg6ICdcXHUyMTM1Jyxcblx0QWxwaGE6ICdcXHUwMzkxJyxcblx0YWxwaGE6ICdcXHUwM0IxJyxcblx0QW1hY3I6ICdcXHUwMTAwJyxcblx0YW1hY3I6ICdcXHUwMTAxJyxcblx0YW1hbGc6ICdcXHUyQTNGJyxcblx0QU1QOiAnXFx1MDAyNicsXG5cdGFtcDogJ1xcdTAwMjYnLFxuXHRBbmQ6ICdcXHUyQTUzJyxcblx0YW5kOiAnXFx1MjIyNycsXG5cdGFuZGFuZDogJ1xcdTJBNTUnLFxuXHRhbmRkOiAnXFx1MkE1QycsXG5cdGFuZHNsb3BlOiAnXFx1MkE1OCcsXG5cdGFuZHY6ICdcXHUyQTVBJyxcblx0YW5nOiAnXFx1MjIyMCcsXG5cdGFuZ2U6ICdcXHUyOUE0Jyxcblx0YW5nbGU6ICdcXHUyMjIwJyxcblx0YW5nbXNkOiAnXFx1MjIyMScsXG5cdGFuZ21zZGFhOiAnXFx1MjlBOCcsXG5cdGFuZ21zZGFiOiAnXFx1MjlBOScsXG5cdGFuZ21zZGFjOiAnXFx1MjlBQScsXG5cdGFuZ21zZGFkOiAnXFx1MjlBQicsXG5cdGFuZ21zZGFlOiAnXFx1MjlBQycsXG5cdGFuZ21zZGFmOiAnXFx1MjlBRCcsXG5cdGFuZ21zZGFnOiAnXFx1MjlBRScsXG5cdGFuZ21zZGFoOiAnXFx1MjlBRicsXG5cdGFuZ3J0OiAnXFx1MjIxRicsXG5cdGFuZ3J0dmI6ICdcXHUyMkJFJyxcblx0YW5ncnR2YmQ6ICdcXHUyOTlEJyxcblx0YW5nc3BoOiAnXFx1MjIyMicsXG5cdGFuZ3N0OiAnXFx1MDBDNScsXG5cdGFuZ3phcnI6ICdcXHUyMzdDJyxcblx0QW9nb246ICdcXHUwMTA0Jyxcblx0YW9nb246ICdcXHUwMTA1Jyxcblx0QW9wZjogJ1xcdUQ4MzVcXHVERDM4Jyxcblx0YW9wZjogJ1xcdUQ4MzVcXHVERDUyJyxcblx0YXA6ICdcXHUyMjQ4Jyxcblx0YXBhY2lyOiAnXFx1MkE2RicsXG5cdGFwRTogJ1xcdTJBNzAnLFxuXHRhcGU6ICdcXHUyMjRBJyxcblx0YXBpZDogJ1xcdTIyNEInLFxuXHRhcG9zOiAnXFx1MDAyNycsXG5cdEFwcGx5RnVuY3Rpb246ICdcXHUyMDYxJyxcblx0YXBwcm94OiAnXFx1MjI0OCcsXG5cdGFwcHJveGVxOiAnXFx1MjI0QScsXG5cdEFyaW5nOiAnXFx1MDBDNScsXG5cdGFyaW5nOiAnXFx1MDBFNScsXG5cdEFzY3I6ICdcXHVEODM1XFx1REM5QycsXG5cdGFzY3I6ICdcXHVEODM1XFx1RENCNicsXG5cdEFzc2lnbjogJ1xcdTIyNTQnLFxuXHRhc3Q6ICdcXHUwMDJBJyxcblx0YXN5bXA6ICdcXHUyMjQ4Jyxcblx0YXN5bXBlcTogJ1xcdTIyNEQnLFxuXHRBdGlsZGU6ICdcXHUwMEMzJyxcblx0YXRpbGRlOiAnXFx1MDBFMycsXG5cdEF1bWw6ICdcXHUwMEM0Jyxcblx0YXVtbDogJ1xcdTAwRTQnLFxuXHRhd2NvbmludDogJ1xcdTIyMzMnLFxuXHRhd2ludDogJ1xcdTJBMTEnLFxuXHRiYWNrY29uZzogJ1xcdTIyNEMnLFxuXHRiYWNrZXBzaWxvbjogJ1xcdTAzRjYnLFxuXHRiYWNrcHJpbWU6ICdcXHUyMDM1Jyxcblx0YmFja3NpbTogJ1xcdTIyM0QnLFxuXHRiYWNrc2ltZXE6ICdcXHUyMkNEJyxcblx0QmFja3NsYXNoOiAnXFx1MjIxNicsXG5cdEJhcnY6ICdcXHUyQUU3Jyxcblx0YmFydmVlOiAnXFx1MjJCRCcsXG5cdEJhcndlZDogJ1xcdTIzMDYnLFxuXHRiYXJ3ZWQ6ICdcXHUyMzA1Jyxcblx0YmFyd2VkZ2U6ICdcXHUyMzA1Jyxcblx0YmJyazogJ1xcdTIzQjUnLFxuXHRiYnJrdGJyazogJ1xcdTIzQjYnLFxuXHRiY29uZzogJ1xcdTIyNEMnLFxuXHRCY3k6ICdcXHUwNDExJyxcblx0YmN5OiAnXFx1MDQzMScsXG5cdGJkcXVvOiAnXFx1MjAxRScsXG5cdGJlY2F1czogJ1xcdTIyMzUnLFxuXHRCZWNhdXNlOiAnXFx1MjIzNScsXG5cdGJlY2F1c2U6ICdcXHUyMjM1Jyxcblx0YmVtcHR5djogJ1xcdTI5QjAnLFxuXHRiZXBzaTogJ1xcdTAzRjYnLFxuXHRiZXJub3U6ICdcXHUyMTJDJyxcblx0QmVybm91bGxpczogJ1xcdTIxMkMnLFxuXHRCZXRhOiAnXFx1MDM5MicsXG5cdGJldGE6ICdcXHUwM0IyJyxcblx0YmV0aDogJ1xcdTIxMzYnLFxuXHRiZXR3ZWVuOiAnXFx1MjI2QycsXG5cdEJmcjogJ1xcdUQ4MzVcXHVERDA1Jyxcblx0YmZyOiAnXFx1RDgzNVxcdUREMUYnLFxuXHRiaWdjYXA6ICdcXHUyMkMyJyxcblx0YmlnY2lyYzogJ1xcdTI1RUYnLFxuXHRiaWdjdXA6ICdcXHUyMkMzJyxcblx0Ymlnb2RvdDogJ1xcdTJBMDAnLFxuXHRiaWdvcGx1czogJ1xcdTJBMDEnLFxuXHRiaWdvdGltZXM6ICdcXHUyQTAyJyxcblx0Ymlnc3FjdXA6ICdcXHUyQTA2Jyxcblx0Ymlnc3RhcjogJ1xcdTI2MDUnLFxuXHRiaWd0cmlhbmdsZWRvd246ICdcXHUyNUJEJyxcblx0YmlndHJpYW5nbGV1cDogJ1xcdTI1QjMnLFxuXHRiaWd1cGx1czogJ1xcdTJBMDQnLFxuXHRiaWd2ZWU6ICdcXHUyMkMxJyxcblx0Ymlnd2VkZ2U6ICdcXHUyMkMwJyxcblx0Ymthcm93OiAnXFx1MjkwRCcsXG5cdGJsYWNrbG96ZW5nZTogJ1xcdTI5RUInLFxuXHRibGFja3NxdWFyZTogJ1xcdTI1QUEnLFxuXHRibGFja3RyaWFuZ2xlOiAnXFx1MjVCNCcsXG5cdGJsYWNrdHJpYW5nbGVkb3duOiAnXFx1MjVCRScsXG5cdGJsYWNrdHJpYW5nbGVsZWZ0OiAnXFx1MjVDMicsXG5cdGJsYWNrdHJpYW5nbGVyaWdodDogJ1xcdTI1QjgnLFxuXHRibGFuazogJ1xcdTI0MjMnLFxuXHRibGsxMjogJ1xcdTI1OTInLFxuXHRibGsxNDogJ1xcdTI1OTEnLFxuXHRibGszNDogJ1xcdTI1OTMnLFxuXHRibG9jazogJ1xcdTI1ODgnLFxuXHRibmU6ICdcXHUwMDNEXFx1MjBFNScsXG5cdGJuZXF1aXY6ICdcXHUyMjYxXFx1MjBFNScsXG5cdGJOb3Q6ICdcXHUyQUVEJyxcblx0Ym5vdDogJ1xcdTIzMTAnLFxuXHRCb3BmOiAnXFx1RDgzNVxcdUREMzknLFxuXHRib3BmOiAnXFx1RDgzNVxcdURENTMnLFxuXHRib3Q6ICdcXHUyMkE1Jyxcblx0Ym90dG9tOiAnXFx1MjJBNScsXG5cdGJvd3RpZTogJ1xcdTIyQzgnLFxuXHRib3hib3g6ICdcXHUyOUM5Jyxcblx0Ym94REw6ICdcXHUyNTU3Jyxcblx0Ym94RGw6ICdcXHUyNTU2Jyxcblx0Ym94ZEw6ICdcXHUyNTU1Jyxcblx0Ym94ZGw6ICdcXHUyNTEwJyxcblx0Ym94RFI6ICdcXHUyNTU0Jyxcblx0Ym94RHI6ICdcXHUyNTUzJyxcblx0Ym94ZFI6ICdcXHUyNTUyJyxcblx0Ym94ZHI6ICdcXHUyNTBDJyxcblx0Ym94SDogJ1xcdTI1NTAnLFxuXHRib3hoOiAnXFx1MjUwMCcsXG5cdGJveEhEOiAnXFx1MjU2NicsXG5cdGJveEhkOiAnXFx1MjU2NCcsXG5cdGJveGhEOiAnXFx1MjU2NScsXG5cdGJveGhkOiAnXFx1MjUyQycsXG5cdGJveEhVOiAnXFx1MjU2OScsXG5cdGJveEh1OiAnXFx1MjU2NycsXG5cdGJveGhVOiAnXFx1MjU2OCcsXG5cdGJveGh1OiAnXFx1MjUzNCcsXG5cdGJveG1pbnVzOiAnXFx1MjI5RicsXG5cdGJveHBsdXM6ICdcXHUyMjlFJyxcblx0Ym94dGltZXM6ICdcXHUyMkEwJyxcblx0Ym94VUw6ICdcXHUyNTVEJyxcblx0Ym94VWw6ICdcXHUyNTVDJyxcblx0Ym94dUw6ICdcXHUyNTVCJyxcblx0Ym94dWw6ICdcXHUyNTE4Jyxcblx0Ym94VVI6ICdcXHUyNTVBJyxcblx0Ym94VXI6ICdcXHUyNTU5Jyxcblx0Ym94dVI6ICdcXHUyNTU4Jyxcblx0Ym94dXI6ICdcXHUyNTE0Jyxcblx0Ym94VjogJ1xcdTI1NTEnLFxuXHRib3h2OiAnXFx1MjUwMicsXG5cdGJveFZIOiAnXFx1MjU2QycsXG5cdGJveFZoOiAnXFx1MjU2QicsXG5cdGJveHZIOiAnXFx1MjU2QScsXG5cdGJveHZoOiAnXFx1MjUzQycsXG5cdGJveFZMOiAnXFx1MjU2MycsXG5cdGJveFZsOiAnXFx1MjU2MicsXG5cdGJveHZMOiAnXFx1MjU2MScsXG5cdGJveHZsOiAnXFx1MjUyNCcsXG5cdGJveFZSOiAnXFx1MjU2MCcsXG5cdGJveFZyOiAnXFx1MjU1RicsXG5cdGJveHZSOiAnXFx1MjU1RScsXG5cdGJveHZyOiAnXFx1MjUxQycsXG5cdGJwcmltZTogJ1xcdTIwMzUnLFxuXHRCcmV2ZTogJ1xcdTAyRDgnLFxuXHRicmV2ZTogJ1xcdTAyRDgnLFxuXHRicnZiYXI6ICdcXHUwMEE2Jyxcblx0QnNjcjogJ1xcdTIxMkMnLFxuXHRic2NyOiAnXFx1RDgzNVxcdURDQjcnLFxuXHRic2VtaTogJ1xcdTIwNEYnLFxuXHRic2ltOiAnXFx1MjIzRCcsXG5cdGJzaW1lOiAnXFx1MjJDRCcsXG5cdGJzb2w6ICdcXHUwMDVDJyxcblx0YnNvbGI6ICdcXHUyOUM1Jyxcblx0YnNvbGhzdWI6ICdcXHUyN0M4Jyxcblx0YnVsbDogJ1xcdTIwMjInLFxuXHRidWxsZXQ6ICdcXHUyMDIyJyxcblx0YnVtcDogJ1xcdTIyNEUnLFxuXHRidW1wRTogJ1xcdTJBQUUnLFxuXHRidW1wZTogJ1xcdTIyNEYnLFxuXHRCdW1wZXE6ICdcXHUyMjRFJyxcblx0YnVtcGVxOiAnXFx1MjI0RicsXG5cdENhY3V0ZTogJ1xcdTAxMDYnLFxuXHRjYWN1dGU6ICdcXHUwMTA3Jyxcblx0Q2FwOiAnXFx1MjJEMicsXG5cdGNhcDogJ1xcdTIyMjknLFxuXHRjYXBhbmQ6ICdcXHUyQTQ0Jyxcblx0Y2FwYnJjdXA6ICdcXHUyQTQ5Jyxcblx0Y2FwY2FwOiAnXFx1MkE0QicsXG5cdGNhcGN1cDogJ1xcdTJBNDcnLFxuXHRjYXBkb3Q6ICdcXHUyQTQwJyxcblx0Q2FwaXRhbERpZmZlcmVudGlhbEQ6ICdcXHUyMTQ1Jyxcblx0Y2FwczogJ1xcdTIyMjlcXHVGRTAwJyxcblx0Y2FyZXQ6ICdcXHUyMDQxJyxcblx0Y2Fyb246ICdcXHUwMkM3Jyxcblx0Q2F5bGV5czogJ1xcdTIxMkQnLFxuXHRjY2FwczogJ1xcdTJBNEQnLFxuXHRDY2Fyb246ICdcXHUwMTBDJyxcblx0Y2Nhcm9uOiAnXFx1MDEwRCcsXG5cdENjZWRpbDogJ1xcdTAwQzcnLFxuXHRjY2VkaWw6ICdcXHUwMEU3Jyxcblx0Q2NpcmM6ICdcXHUwMTA4Jyxcblx0Y2NpcmM6ICdcXHUwMTA5Jyxcblx0Q2NvbmludDogJ1xcdTIyMzAnLFxuXHRjY3VwczogJ1xcdTJBNEMnLFxuXHRjY3Vwc3NtOiAnXFx1MkE1MCcsXG5cdENkb3Q6ICdcXHUwMTBBJyxcblx0Y2RvdDogJ1xcdTAxMEInLFxuXHRjZWRpbDogJ1xcdTAwQjgnLFxuXHRDZWRpbGxhOiAnXFx1MDBCOCcsXG5cdGNlbXB0eXY6ICdcXHUyOUIyJyxcblx0Y2VudDogJ1xcdTAwQTInLFxuXHRDZW50ZXJEb3Q6ICdcXHUwMEI3Jyxcblx0Y2VudGVyZG90OiAnXFx1MDBCNycsXG5cdENmcjogJ1xcdTIxMkQnLFxuXHRjZnI6ICdcXHVEODM1XFx1REQyMCcsXG5cdENIY3k6ICdcXHUwNDI3Jyxcblx0Y2hjeTogJ1xcdTA0NDcnLFxuXHRjaGVjazogJ1xcdTI3MTMnLFxuXHRjaGVja21hcms6ICdcXHUyNzEzJyxcblx0Q2hpOiAnXFx1MDNBNycsXG5cdGNoaTogJ1xcdTAzQzcnLFxuXHRjaXI6ICdcXHUyNUNCJyxcblx0Y2lyYzogJ1xcdTAyQzYnLFxuXHRjaXJjZXE6ICdcXHUyMjU3Jyxcblx0Y2lyY2xlYXJyb3dsZWZ0OiAnXFx1MjFCQScsXG5cdGNpcmNsZWFycm93cmlnaHQ6ICdcXHUyMUJCJyxcblx0Y2lyY2xlZGFzdDogJ1xcdTIyOUInLFxuXHRjaXJjbGVkY2lyYzogJ1xcdTIyOUEnLFxuXHRjaXJjbGVkZGFzaDogJ1xcdTIyOUQnLFxuXHRDaXJjbGVEb3Q6ICdcXHUyMjk5Jyxcblx0Y2lyY2xlZFI6ICdcXHUwMEFFJyxcblx0Y2lyY2xlZFM6ICdcXHUyNEM4Jyxcblx0Q2lyY2xlTWludXM6ICdcXHUyMjk2Jyxcblx0Q2lyY2xlUGx1czogJ1xcdTIyOTUnLFxuXHRDaXJjbGVUaW1lczogJ1xcdTIyOTcnLFxuXHRjaXJFOiAnXFx1MjlDMycsXG5cdGNpcmU6ICdcXHUyMjU3Jyxcblx0Y2lyZm5pbnQ6ICdcXHUyQTEwJyxcblx0Y2lybWlkOiAnXFx1MkFFRicsXG5cdGNpcnNjaXI6ICdcXHUyOUMyJyxcblx0Q2xvY2t3aXNlQ29udG91ckludGVncmFsOiAnXFx1MjIzMicsXG5cdENsb3NlQ3VybHlEb3VibGVRdW90ZTogJ1xcdTIwMUQnLFxuXHRDbG9zZUN1cmx5UXVvdGU6ICdcXHUyMDE5Jyxcblx0Y2x1YnM6ICdcXHUyNjYzJyxcblx0Y2x1YnN1aXQ6ICdcXHUyNjYzJyxcblx0Q29sb246ICdcXHUyMjM3Jyxcblx0Y29sb246ICdcXHUwMDNBJyxcblx0Q29sb25lOiAnXFx1MkE3NCcsXG5cdGNvbG9uZTogJ1xcdTIyNTQnLFxuXHRjb2xvbmVxOiAnXFx1MjI1NCcsXG5cdGNvbW1hOiAnXFx1MDAyQycsXG5cdGNvbW1hdDogJ1xcdTAwNDAnLFxuXHRjb21wOiAnXFx1MjIwMScsXG5cdGNvbXBmbjogJ1xcdTIyMTgnLFxuXHRjb21wbGVtZW50OiAnXFx1MjIwMScsXG5cdGNvbXBsZXhlczogJ1xcdTIxMDInLFxuXHRjb25nOiAnXFx1MjI0NScsXG5cdGNvbmdkb3Q6ICdcXHUyQTZEJyxcblx0Q29uZ3J1ZW50OiAnXFx1MjI2MScsXG5cdENvbmludDogJ1xcdTIyMkYnLFxuXHRjb25pbnQ6ICdcXHUyMjJFJyxcblx0Q29udG91ckludGVncmFsOiAnXFx1MjIyRScsXG5cdENvcGY6ICdcXHUyMTAyJyxcblx0Y29wZjogJ1xcdUQ4MzVcXHVERDU0Jyxcblx0Y29wcm9kOiAnXFx1MjIxMCcsXG5cdENvcHJvZHVjdDogJ1xcdTIyMTAnLFxuXHRDT1BZOiAnXFx1MDBBOScsXG5cdGNvcHk6ICdcXHUwMEE5Jyxcblx0Y29weXNyOiAnXFx1MjExNycsXG5cdENvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWw6ICdcXHUyMjMzJyxcblx0Y3JhcnI6ICdcXHUyMUI1Jyxcblx0Q3Jvc3M6ICdcXHUyQTJGJyxcblx0Y3Jvc3M6ICdcXHUyNzE3Jyxcblx0Q3NjcjogJ1xcdUQ4MzVcXHVEQzlFJyxcblx0Y3NjcjogJ1xcdUQ4MzVcXHVEQ0I4Jyxcblx0Y3N1YjogJ1xcdTJBQ0YnLFxuXHRjc3ViZTogJ1xcdTJBRDEnLFxuXHRjc3VwOiAnXFx1MkFEMCcsXG5cdGNzdXBlOiAnXFx1MkFEMicsXG5cdGN0ZG90OiAnXFx1MjJFRicsXG5cdGN1ZGFycmw6ICdcXHUyOTM4Jyxcblx0Y3VkYXJycjogJ1xcdTI5MzUnLFxuXHRjdWVwcjogJ1xcdTIyREUnLFxuXHRjdWVzYzogJ1xcdTIyREYnLFxuXHRjdWxhcnI6ICdcXHUyMUI2Jyxcblx0Y3VsYXJycDogJ1xcdTI5M0QnLFxuXHRDdXA6ICdcXHUyMkQzJyxcblx0Y3VwOiAnXFx1MjIyQScsXG5cdGN1cGJyY2FwOiAnXFx1MkE0OCcsXG5cdEN1cENhcDogJ1xcdTIyNEQnLFxuXHRjdXBjYXA6ICdcXHUyQTQ2Jyxcblx0Y3VwY3VwOiAnXFx1MkE0QScsXG5cdGN1cGRvdDogJ1xcdTIyOEQnLFxuXHRjdXBvcjogJ1xcdTJBNDUnLFxuXHRjdXBzOiAnXFx1MjIyQVxcdUZFMDAnLFxuXHRjdXJhcnI6ICdcXHUyMUI3Jyxcblx0Y3VyYXJybTogJ1xcdTI5M0MnLFxuXHRjdXJseWVxcHJlYzogJ1xcdTIyREUnLFxuXHRjdXJseWVxc3VjYzogJ1xcdTIyREYnLFxuXHRjdXJseXZlZTogJ1xcdTIyQ0UnLFxuXHRjdXJseXdlZGdlOiAnXFx1MjJDRicsXG5cdGN1cnJlbjogJ1xcdTAwQTQnLFxuXHRjdXJ2ZWFycm93bGVmdDogJ1xcdTIxQjYnLFxuXHRjdXJ2ZWFycm93cmlnaHQ6ICdcXHUyMUI3Jyxcblx0Y3V2ZWU6ICdcXHUyMkNFJyxcblx0Y3V3ZWQ6ICdcXHUyMkNGJyxcblx0Y3djb25pbnQ6ICdcXHUyMjMyJyxcblx0Y3dpbnQ6ICdcXHUyMjMxJyxcblx0Y3lsY3R5OiAnXFx1MjMyRCcsXG5cdERhZ2dlcjogJ1xcdTIwMjEnLFxuXHRkYWdnZXI6ICdcXHUyMDIwJyxcblx0ZGFsZXRoOiAnXFx1MjEzOCcsXG5cdERhcnI6ICdcXHUyMUExJyxcblx0ZEFycjogJ1xcdTIxRDMnLFxuXHRkYXJyOiAnXFx1MjE5MycsXG5cdGRhc2g6ICdcXHUyMDEwJyxcblx0RGFzaHY6ICdcXHUyQUU0Jyxcblx0ZGFzaHY6ICdcXHUyMkEzJyxcblx0ZGJrYXJvdzogJ1xcdTI5MEYnLFxuXHRkYmxhYzogJ1xcdTAyREQnLFxuXHREY2Fyb246ICdcXHUwMTBFJyxcblx0ZGNhcm9uOiAnXFx1MDEwRicsXG5cdERjeTogJ1xcdTA0MTQnLFxuXHRkY3k6ICdcXHUwNDM0Jyxcblx0REQ6ICdcXHUyMTQ1Jyxcblx0ZGQ6ICdcXHUyMTQ2Jyxcblx0ZGRhZ2dlcjogJ1xcdTIwMjEnLFxuXHRkZGFycjogJ1xcdTIxQ0EnLFxuXHRERG90cmFoZDogJ1xcdTI5MTEnLFxuXHRkZG90c2VxOiAnXFx1MkE3NycsXG5cdGRlZzogJ1xcdTAwQjAnLFxuXHREZWw6ICdcXHUyMjA3Jyxcblx0RGVsdGE6ICdcXHUwMzk0Jyxcblx0ZGVsdGE6ICdcXHUwM0I0Jyxcblx0ZGVtcHR5djogJ1xcdTI5QjEnLFxuXHRkZmlzaHQ6ICdcXHUyOTdGJyxcblx0RGZyOiAnXFx1RDgzNVxcdUREMDcnLFxuXHRkZnI6ICdcXHVEODM1XFx1REQyMScsXG5cdGRIYXI6ICdcXHUyOTY1Jyxcblx0ZGhhcmw6ICdcXHUyMUMzJyxcblx0ZGhhcnI6ICdcXHUyMUMyJyxcblx0RGlhY3JpdGljYWxBY3V0ZTogJ1xcdTAwQjQnLFxuXHREaWFjcml0aWNhbERvdDogJ1xcdTAyRDknLFxuXHREaWFjcml0aWNhbERvdWJsZUFjdXRlOiAnXFx1MDJERCcsXG5cdERpYWNyaXRpY2FsR3JhdmU6ICdcXHUwMDYwJyxcblx0RGlhY3JpdGljYWxUaWxkZTogJ1xcdTAyREMnLFxuXHRkaWFtOiAnXFx1MjJDNCcsXG5cdERpYW1vbmQ6ICdcXHUyMkM0Jyxcblx0ZGlhbW9uZDogJ1xcdTIyQzQnLFxuXHRkaWFtb25kc3VpdDogJ1xcdTI2NjYnLFxuXHRkaWFtczogJ1xcdTI2NjYnLFxuXHRkaWU6ICdcXHUwMEE4Jyxcblx0RGlmZmVyZW50aWFsRDogJ1xcdTIxNDYnLFxuXHRkaWdhbW1hOiAnXFx1MDNERCcsXG5cdGRpc2luOiAnXFx1MjJGMicsXG5cdGRpdjogJ1xcdTAwRjcnLFxuXHRkaXZpZGU6ICdcXHUwMEY3Jyxcblx0ZGl2aWRlb250aW1lczogJ1xcdTIyQzcnLFxuXHRkaXZvbng6ICdcXHUyMkM3Jyxcblx0REpjeTogJ1xcdTA0MDInLFxuXHRkamN5OiAnXFx1MDQ1MicsXG5cdGRsY29ybjogJ1xcdTIzMUUnLFxuXHRkbGNyb3A6ICdcXHUyMzBEJyxcblx0ZG9sbGFyOiAnXFx1MDAyNCcsXG5cdERvcGY6ICdcXHVEODM1XFx1REQzQicsXG5cdGRvcGY6ICdcXHVEODM1XFx1REQ1NScsXG5cdERvdDogJ1xcdTAwQTgnLFxuXHRkb3Q6ICdcXHUwMkQ5Jyxcblx0RG90RG90OiAnXFx1MjBEQycsXG5cdGRvdGVxOiAnXFx1MjI1MCcsXG5cdGRvdGVxZG90OiAnXFx1MjI1MScsXG5cdERvdEVxdWFsOiAnXFx1MjI1MCcsXG5cdGRvdG1pbnVzOiAnXFx1MjIzOCcsXG5cdGRvdHBsdXM6ICdcXHUyMjE0Jyxcblx0ZG90c3F1YXJlOiAnXFx1MjJBMScsXG5cdGRvdWJsZWJhcndlZGdlOiAnXFx1MjMwNicsXG5cdERvdWJsZUNvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMkYnLFxuXHREb3VibGVEb3Q6ICdcXHUwMEE4Jyxcblx0RG91YmxlRG93bkFycm93OiAnXFx1MjFEMycsXG5cdERvdWJsZUxlZnRBcnJvdzogJ1xcdTIxRDAnLFxuXHREb3VibGVMZWZ0UmlnaHRBcnJvdzogJ1xcdTIxRDQnLFxuXHREb3VibGVMZWZ0VGVlOiAnXFx1MkFFNCcsXG5cdERvdWJsZUxvbmdMZWZ0QXJyb3c6ICdcXHUyN0Y4Jyxcblx0RG91YmxlTG9uZ0xlZnRSaWdodEFycm93OiAnXFx1MjdGQScsXG5cdERvdWJsZUxvbmdSaWdodEFycm93OiAnXFx1MjdGOScsXG5cdERvdWJsZVJpZ2h0QXJyb3c6ICdcXHUyMUQyJyxcblx0RG91YmxlUmlnaHRUZWU6ICdcXHUyMkE4Jyxcblx0RG91YmxlVXBBcnJvdzogJ1xcdTIxRDEnLFxuXHREb3VibGVVcERvd25BcnJvdzogJ1xcdTIxRDUnLFxuXHREb3VibGVWZXJ0aWNhbEJhcjogJ1xcdTIyMjUnLFxuXHREb3duQXJyb3c6ICdcXHUyMTkzJyxcblx0RG93bmFycm93OiAnXFx1MjFEMycsXG5cdGRvd25hcnJvdzogJ1xcdTIxOTMnLFxuXHREb3duQXJyb3dCYXI6ICdcXHUyOTEzJyxcblx0RG93bkFycm93VXBBcnJvdzogJ1xcdTIxRjUnLFxuXHREb3duQnJldmU6ICdcXHUwMzExJyxcblx0ZG93bmRvd25hcnJvd3M6ICdcXHUyMUNBJyxcblx0ZG93bmhhcnBvb25sZWZ0OiAnXFx1MjFDMycsXG5cdGRvd25oYXJwb29ucmlnaHQ6ICdcXHUyMUMyJyxcblx0RG93bkxlZnRSaWdodFZlY3RvcjogJ1xcdTI5NTAnLFxuXHREb3duTGVmdFRlZVZlY3RvcjogJ1xcdTI5NUUnLFxuXHREb3duTGVmdFZlY3RvcjogJ1xcdTIxQkQnLFxuXHREb3duTGVmdFZlY3RvckJhcjogJ1xcdTI5NTYnLFxuXHREb3duUmlnaHRUZWVWZWN0b3I6ICdcXHUyOTVGJyxcblx0RG93blJpZ2h0VmVjdG9yOiAnXFx1MjFDMScsXG5cdERvd25SaWdodFZlY3RvckJhcjogJ1xcdTI5NTcnLFxuXHREb3duVGVlOiAnXFx1MjJBNCcsXG5cdERvd25UZWVBcnJvdzogJ1xcdTIxQTcnLFxuXHRkcmJrYXJvdzogJ1xcdTI5MTAnLFxuXHRkcmNvcm46ICdcXHUyMzFGJyxcblx0ZHJjcm9wOiAnXFx1MjMwQycsXG5cdERzY3I6ICdcXHVEODM1XFx1REM5RicsXG5cdGRzY3I6ICdcXHVEODM1XFx1RENCOScsXG5cdERTY3k6ICdcXHUwNDA1Jyxcblx0ZHNjeTogJ1xcdTA0NTUnLFxuXHRkc29sOiAnXFx1MjlGNicsXG5cdERzdHJvazogJ1xcdTAxMTAnLFxuXHRkc3Ryb2s6ICdcXHUwMTExJyxcblx0ZHRkb3Q6ICdcXHUyMkYxJyxcblx0ZHRyaTogJ1xcdTI1QkYnLFxuXHRkdHJpZjogJ1xcdTI1QkUnLFxuXHRkdWFycjogJ1xcdTIxRjUnLFxuXHRkdWhhcjogJ1xcdTI5NkYnLFxuXHRkd2FuZ2xlOiAnXFx1MjlBNicsXG5cdERaY3k6ICdcXHUwNDBGJyxcblx0ZHpjeTogJ1xcdTA0NUYnLFxuXHRkemlncmFycjogJ1xcdTI3RkYnLFxuXHRFYWN1dGU6ICdcXHUwMEM5Jyxcblx0ZWFjdXRlOiAnXFx1MDBFOScsXG5cdGVhc3RlcjogJ1xcdTJBNkUnLFxuXHRFY2Fyb246ICdcXHUwMTFBJyxcblx0ZWNhcm9uOiAnXFx1MDExQicsXG5cdGVjaXI6ICdcXHUyMjU2Jyxcblx0RWNpcmM6ICdcXHUwMENBJyxcblx0ZWNpcmM6ICdcXHUwMEVBJyxcblx0ZWNvbG9uOiAnXFx1MjI1NScsXG5cdEVjeTogJ1xcdTA0MkQnLFxuXHRlY3k6ICdcXHUwNDREJyxcblx0ZUREb3Q6ICdcXHUyQTc3Jyxcblx0RWRvdDogJ1xcdTAxMTYnLFxuXHRlRG90OiAnXFx1MjI1MScsXG5cdGVkb3Q6ICdcXHUwMTE3Jyxcblx0ZWU6ICdcXHUyMTQ3Jyxcblx0ZWZEb3Q6ICdcXHUyMjUyJyxcblx0RWZyOiAnXFx1RDgzNVxcdUREMDgnLFxuXHRlZnI6ICdcXHVEODM1XFx1REQyMicsXG5cdGVnOiAnXFx1MkE5QScsXG5cdEVncmF2ZTogJ1xcdTAwQzgnLFxuXHRlZ3JhdmU6ICdcXHUwMEU4Jyxcblx0ZWdzOiAnXFx1MkE5NicsXG5cdGVnc2RvdDogJ1xcdTJBOTgnLFxuXHRlbDogJ1xcdTJBOTknLFxuXHRFbGVtZW50OiAnXFx1MjIwOCcsXG5cdGVsaW50ZXJzOiAnXFx1MjNFNycsXG5cdGVsbDogJ1xcdTIxMTMnLFxuXHRlbHM6ICdcXHUyQTk1Jyxcblx0ZWxzZG90OiAnXFx1MkE5NycsXG5cdEVtYWNyOiAnXFx1MDExMicsXG5cdGVtYWNyOiAnXFx1MDExMycsXG5cdGVtcHR5OiAnXFx1MjIwNScsXG5cdGVtcHR5c2V0OiAnXFx1MjIwNScsXG5cdEVtcHR5U21hbGxTcXVhcmU6ICdcXHUyNUZCJyxcblx0ZW1wdHl2OiAnXFx1MjIwNScsXG5cdEVtcHR5VmVyeVNtYWxsU3F1YXJlOiAnXFx1MjVBQicsXG5cdGVtc3A6ICdcXHUyMDAzJyxcblx0ZW1zcDEzOiAnXFx1MjAwNCcsXG5cdGVtc3AxNDogJ1xcdTIwMDUnLFxuXHRFTkc6ICdcXHUwMTRBJyxcblx0ZW5nOiAnXFx1MDE0QicsXG5cdGVuc3A6ICdcXHUyMDAyJyxcblx0RW9nb246ICdcXHUwMTE4Jyxcblx0ZW9nb246ICdcXHUwMTE5Jyxcblx0RW9wZjogJ1xcdUQ4MzVcXHVERDNDJyxcblx0ZW9wZjogJ1xcdUQ4MzVcXHVERDU2Jyxcblx0ZXBhcjogJ1xcdTIyRDUnLFxuXHRlcGFyc2w6ICdcXHUyOUUzJyxcblx0ZXBsdXM6ICdcXHUyQTcxJyxcblx0ZXBzaTogJ1xcdTAzQjUnLFxuXHRFcHNpbG9uOiAnXFx1MDM5NScsXG5cdGVwc2lsb246ICdcXHUwM0I1Jyxcblx0ZXBzaXY6ICdcXHUwM0Y1Jyxcblx0ZXFjaXJjOiAnXFx1MjI1NicsXG5cdGVxY29sb246ICdcXHUyMjU1Jyxcblx0ZXFzaW06ICdcXHUyMjQyJyxcblx0ZXFzbGFudGd0cjogJ1xcdTJBOTYnLFxuXHRlcXNsYW50bGVzczogJ1xcdTJBOTUnLFxuXHRFcXVhbDogJ1xcdTJBNzUnLFxuXHRlcXVhbHM6ICdcXHUwMDNEJyxcblx0RXF1YWxUaWxkZTogJ1xcdTIyNDInLFxuXHRlcXVlc3Q6ICdcXHUyMjVGJyxcblx0RXF1aWxpYnJpdW06ICdcXHUyMUNDJyxcblx0ZXF1aXY6ICdcXHUyMjYxJyxcblx0ZXF1aXZERDogJ1xcdTJBNzgnLFxuXHRlcXZwYXJzbDogJ1xcdTI5RTUnLFxuXHRlcmFycjogJ1xcdTI5NzEnLFxuXHRlckRvdDogJ1xcdTIyNTMnLFxuXHRFc2NyOiAnXFx1MjEzMCcsXG5cdGVzY3I6ICdcXHUyMTJGJyxcblx0ZXNkb3Q6ICdcXHUyMjUwJyxcblx0RXNpbTogJ1xcdTJBNzMnLFxuXHRlc2ltOiAnXFx1MjI0MicsXG5cdEV0YTogJ1xcdTAzOTcnLFxuXHRldGE6ICdcXHUwM0I3Jyxcblx0RVRIOiAnXFx1MDBEMCcsXG5cdGV0aDogJ1xcdTAwRjAnLFxuXHRFdW1sOiAnXFx1MDBDQicsXG5cdGV1bWw6ICdcXHUwMEVCJyxcblx0ZXVybzogJ1xcdTIwQUMnLFxuXHRleGNsOiAnXFx1MDAyMScsXG5cdGV4aXN0OiAnXFx1MjIwMycsXG5cdEV4aXN0czogJ1xcdTIyMDMnLFxuXHRleHBlY3RhdGlvbjogJ1xcdTIxMzAnLFxuXHRFeHBvbmVudGlhbEU6ICdcXHUyMTQ3Jyxcblx0ZXhwb25lbnRpYWxlOiAnXFx1MjE0NycsXG5cdGZhbGxpbmdkb3RzZXE6ICdcXHUyMjUyJyxcblx0RmN5OiAnXFx1MDQyNCcsXG5cdGZjeTogJ1xcdTA0NDQnLFxuXHRmZW1hbGU6ICdcXHUyNjQwJyxcblx0ZmZpbGlnOiAnXFx1RkIwMycsXG5cdGZmbGlnOiAnXFx1RkIwMCcsXG5cdGZmbGxpZzogJ1xcdUZCMDQnLFxuXHRGZnI6ICdcXHVEODM1XFx1REQwOScsXG5cdGZmcjogJ1xcdUQ4MzVcXHVERDIzJyxcblx0ZmlsaWc6ICdcXHVGQjAxJyxcblx0RmlsbGVkU21hbGxTcXVhcmU6ICdcXHUyNUZDJyxcblx0RmlsbGVkVmVyeVNtYWxsU3F1YXJlOiAnXFx1MjVBQScsXG5cdGZqbGlnOiAnXFx1MDA2NlxcdTAwNkEnLFxuXHRmbGF0OiAnXFx1MjY2RCcsXG5cdGZsbGlnOiAnXFx1RkIwMicsXG5cdGZsdG5zOiAnXFx1MjVCMScsXG5cdGZub2Y6ICdcXHUwMTkyJyxcblx0Rm9wZjogJ1xcdUQ4MzVcXHVERDNEJyxcblx0Zm9wZjogJ1xcdUQ4MzVcXHVERDU3Jyxcblx0Rm9yQWxsOiAnXFx1MjIwMCcsXG5cdGZvcmFsbDogJ1xcdTIyMDAnLFxuXHRmb3JrOiAnXFx1MjJENCcsXG5cdGZvcmt2OiAnXFx1MkFEOScsXG5cdEZvdXJpZXJ0cmY6ICdcXHUyMTMxJyxcblx0ZnBhcnRpbnQ6ICdcXHUyQTBEJyxcblx0ZnJhYzEyOiAnXFx1MDBCRCcsXG5cdGZyYWMxMzogJ1xcdTIxNTMnLFxuXHRmcmFjMTQ6ICdcXHUwMEJDJyxcblx0ZnJhYzE1OiAnXFx1MjE1NScsXG5cdGZyYWMxNjogJ1xcdTIxNTknLFxuXHRmcmFjMTg6ICdcXHUyMTVCJyxcblx0ZnJhYzIzOiAnXFx1MjE1NCcsXG5cdGZyYWMyNTogJ1xcdTIxNTYnLFxuXHRmcmFjMzQ6ICdcXHUwMEJFJyxcblx0ZnJhYzM1OiAnXFx1MjE1NycsXG5cdGZyYWMzODogJ1xcdTIxNUMnLFxuXHRmcmFjNDU6ICdcXHUyMTU4Jyxcblx0ZnJhYzU2OiAnXFx1MjE1QScsXG5cdGZyYWM1ODogJ1xcdTIxNUQnLFxuXHRmcmFjNzg6ICdcXHUyMTVFJyxcblx0ZnJhc2w6ICdcXHUyMDQ0Jyxcblx0ZnJvd246ICdcXHUyMzIyJyxcblx0RnNjcjogJ1xcdTIxMzEnLFxuXHRmc2NyOiAnXFx1RDgzNVxcdURDQkInLFxuXHRnYWN1dGU6ICdcXHUwMUY1Jyxcblx0R2FtbWE6ICdcXHUwMzkzJyxcblx0Z2FtbWE6ICdcXHUwM0IzJyxcblx0R2FtbWFkOiAnXFx1MDNEQycsXG5cdGdhbW1hZDogJ1xcdTAzREQnLFxuXHRnYXA6ICdcXHUyQTg2Jyxcblx0R2JyZXZlOiAnXFx1MDExRScsXG5cdGdicmV2ZTogJ1xcdTAxMUYnLFxuXHRHY2VkaWw6ICdcXHUwMTIyJyxcblx0R2NpcmM6ICdcXHUwMTFDJyxcblx0Z2NpcmM6ICdcXHUwMTFEJyxcblx0R2N5OiAnXFx1MDQxMycsXG5cdGdjeTogJ1xcdTA0MzMnLFxuXHRHZG90OiAnXFx1MDEyMCcsXG5cdGdkb3Q6ICdcXHUwMTIxJyxcblx0Z0U6ICdcXHUyMjY3Jyxcblx0Z2U6ICdcXHUyMjY1Jyxcblx0Z0VsOiAnXFx1MkE4QycsXG5cdGdlbDogJ1xcdTIyREInLFxuXHRnZXE6ICdcXHUyMjY1Jyxcblx0Z2VxcTogJ1xcdTIyNjcnLFxuXHRnZXFzbGFudDogJ1xcdTJBN0UnLFxuXHRnZXM6ICdcXHUyQTdFJyxcblx0Z2VzY2M6ICdcXHUyQUE5Jyxcblx0Z2VzZG90OiAnXFx1MkE4MCcsXG5cdGdlc2RvdG86ICdcXHUyQTgyJyxcblx0Z2VzZG90b2w6ICdcXHUyQTg0Jyxcblx0Z2VzbDogJ1xcdTIyREJcXHVGRTAwJyxcblx0Z2VzbGVzOiAnXFx1MkE5NCcsXG5cdEdmcjogJ1xcdUQ4MzVcXHVERDBBJyxcblx0Z2ZyOiAnXFx1RDgzNVxcdUREMjQnLFxuXHRHZzogJ1xcdTIyRDknLFxuXHRnZzogJ1xcdTIyNkInLFxuXHRnZ2c6ICdcXHUyMkQ5Jyxcblx0Z2ltZWw6ICdcXHUyMTM3Jyxcblx0R0pjeTogJ1xcdTA0MDMnLFxuXHRnamN5OiAnXFx1MDQ1MycsXG5cdGdsOiAnXFx1MjI3NycsXG5cdGdsYTogJ1xcdTJBQTUnLFxuXHRnbEU6ICdcXHUyQTkyJyxcblx0Z2xqOiAnXFx1MkFBNCcsXG5cdGduYXA6ICdcXHUyQThBJyxcblx0Z25hcHByb3g6ICdcXHUyQThBJyxcblx0Z25FOiAnXFx1MjI2OScsXG5cdGduZTogJ1xcdTJBODgnLFxuXHRnbmVxOiAnXFx1MkE4OCcsXG5cdGduZXFxOiAnXFx1MjI2OScsXG5cdGduc2ltOiAnXFx1MjJFNycsXG5cdEdvcGY6ICdcXHVEODM1XFx1REQzRScsXG5cdGdvcGY6ICdcXHVEODM1XFx1REQ1OCcsXG5cdGdyYXZlOiAnXFx1MDA2MCcsXG5cdEdyZWF0ZXJFcXVhbDogJ1xcdTIyNjUnLFxuXHRHcmVhdGVyRXF1YWxMZXNzOiAnXFx1MjJEQicsXG5cdEdyZWF0ZXJGdWxsRXF1YWw6ICdcXHUyMjY3Jyxcblx0R3JlYXRlckdyZWF0ZXI6ICdcXHUyQUEyJyxcblx0R3JlYXRlckxlc3M6ICdcXHUyMjc3Jyxcblx0R3JlYXRlclNsYW50RXF1YWw6ICdcXHUyQTdFJyxcblx0R3JlYXRlclRpbGRlOiAnXFx1MjI3MycsXG5cdEdzY3I6ICdcXHVEODM1XFx1RENBMicsXG5cdGdzY3I6ICdcXHUyMTBBJyxcblx0Z3NpbTogJ1xcdTIyNzMnLFxuXHRnc2ltZTogJ1xcdTJBOEUnLFxuXHRnc2ltbDogJ1xcdTJBOTAnLFxuXHRHdDogJ1xcdTIyNkInLFxuXHRHVDogJ1xcdTAwM0UnLFxuXHRndDogJ1xcdTAwM0UnLFxuXHRndGNjOiAnXFx1MkFBNycsXG5cdGd0Y2lyOiAnXFx1MkE3QScsXG5cdGd0ZG90OiAnXFx1MjJENycsXG5cdGd0bFBhcjogJ1xcdTI5OTUnLFxuXHRndHF1ZXN0OiAnXFx1MkE3QycsXG5cdGd0cmFwcHJveDogJ1xcdTJBODYnLFxuXHRndHJhcnI6ICdcXHUyOTc4Jyxcblx0Z3RyZG90OiAnXFx1MjJENycsXG5cdGd0cmVxbGVzczogJ1xcdTIyREInLFxuXHRndHJlcXFsZXNzOiAnXFx1MkE4QycsXG5cdGd0cmxlc3M6ICdcXHUyMjc3Jyxcblx0Z3Ryc2ltOiAnXFx1MjI3MycsXG5cdGd2ZXJ0bmVxcTogJ1xcdTIyNjlcXHVGRTAwJyxcblx0Z3ZuRTogJ1xcdTIyNjlcXHVGRTAwJyxcblx0SGFjZWs6ICdcXHUwMkM3Jyxcblx0aGFpcnNwOiAnXFx1MjAwQScsXG5cdGhhbGY6ICdcXHUwMEJEJyxcblx0aGFtaWx0OiAnXFx1MjEwQicsXG5cdEhBUkRjeTogJ1xcdTA0MkEnLFxuXHRoYXJkY3k6ICdcXHUwNDRBJyxcblx0aEFycjogJ1xcdTIxRDQnLFxuXHRoYXJyOiAnXFx1MjE5NCcsXG5cdGhhcnJjaXI6ICdcXHUyOTQ4Jyxcblx0aGFycnc6ICdcXHUyMUFEJyxcblx0SGF0OiAnXFx1MDA1RScsXG5cdGhiYXI6ICdcXHUyMTBGJyxcblx0SGNpcmM6ICdcXHUwMTI0Jyxcblx0aGNpcmM6ICdcXHUwMTI1Jyxcblx0aGVhcnRzOiAnXFx1MjY2NScsXG5cdGhlYXJ0c3VpdDogJ1xcdTI2NjUnLFxuXHRoZWxsaXA6ICdcXHUyMDI2Jyxcblx0aGVyY29uOiAnXFx1MjJCOScsXG5cdEhmcjogJ1xcdTIxMEMnLFxuXHRoZnI6ICdcXHVEODM1XFx1REQyNScsXG5cdEhpbGJlcnRTcGFjZTogJ1xcdTIxMEInLFxuXHRoa3NlYXJvdzogJ1xcdTI5MjUnLFxuXHRoa3N3YXJvdzogJ1xcdTI5MjYnLFxuXHRob2FycjogJ1xcdTIxRkYnLFxuXHRob210aHQ6ICdcXHUyMjNCJyxcblx0aG9va2xlZnRhcnJvdzogJ1xcdTIxQTknLFxuXHRob29rcmlnaHRhcnJvdzogJ1xcdTIxQUEnLFxuXHRIb3BmOiAnXFx1MjEwRCcsXG5cdGhvcGY6ICdcXHVEODM1XFx1REQ1OScsXG5cdGhvcmJhcjogJ1xcdTIwMTUnLFxuXHRIb3Jpem9udGFsTGluZTogJ1xcdTI1MDAnLFxuXHRIc2NyOiAnXFx1MjEwQicsXG5cdGhzY3I6ICdcXHVEODM1XFx1RENCRCcsXG5cdGhzbGFzaDogJ1xcdTIxMEYnLFxuXHRIc3Ryb2s6ICdcXHUwMTI2Jyxcblx0aHN0cm9rOiAnXFx1MDEyNycsXG5cdEh1bXBEb3duSHVtcDogJ1xcdTIyNEUnLFxuXHRIdW1wRXF1YWw6ICdcXHUyMjRGJyxcblx0aHlidWxsOiAnXFx1MjA0MycsXG5cdGh5cGhlbjogJ1xcdTIwMTAnLFxuXHRJYWN1dGU6ICdcXHUwMENEJyxcblx0aWFjdXRlOiAnXFx1MDBFRCcsXG5cdGljOiAnXFx1MjA2MycsXG5cdEljaXJjOiAnXFx1MDBDRScsXG5cdGljaXJjOiAnXFx1MDBFRScsXG5cdEljeTogJ1xcdTA0MTgnLFxuXHRpY3k6ICdcXHUwNDM4Jyxcblx0SWRvdDogJ1xcdTAxMzAnLFxuXHRJRWN5OiAnXFx1MDQxNScsXG5cdGllY3k6ICdcXHUwNDM1Jyxcblx0aWV4Y2w6ICdcXHUwMEExJyxcblx0aWZmOiAnXFx1MjFENCcsXG5cdElmcjogJ1xcdTIxMTEnLFxuXHRpZnI6ICdcXHVEODM1XFx1REQyNicsXG5cdElncmF2ZTogJ1xcdTAwQ0MnLFxuXHRpZ3JhdmU6ICdcXHUwMEVDJyxcblx0aWk6ICdcXHUyMTQ4Jyxcblx0aWlpaW50OiAnXFx1MkEwQycsXG5cdGlpaW50OiAnXFx1MjIyRCcsXG5cdGlpbmZpbjogJ1xcdTI5REMnLFxuXHRpaW90YTogJ1xcdTIxMjknLFxuXHRJSmxpZzogJ1xcdTAxMzInLFxuXHRpamxpZzogJ1xcdTAxMzMnLFxuXHRJbTogJ1xcdTIxMTEnLFxuXHRJbWFjcjogJ1xcdTAxMkEnLFxuXHRpbWFjcjogJ1xcdTAxMkInLFxuXHRpbWFnZTogJ1xcdTIxMTEnLFxuXHRJbWFnaW5hcnlJOiAnXFx1MjE0OCcsXG5cdGltYWdsaW5lOiAnXFx1MjExMCcsXG5cdGltYWdwYXJ0OiAnXFx1MjExMScsXG5cdGltYXRoOiAnXFx1MDEzMScsXG5cdGltb2Y6ICdcXHUyMkI3Jyxcblx0aW1wZWQ6ICdcXHUwMUI1Jyxcblx0SW1wbGllczogJ1xcdTIxRDInLFxuXHRpbjogJ1xcdTIyMDgnLFxuXHRpbmNhcmU6ICdcXHUyMTA1Jyxcblx0aW5maW46ICdcXHUyMjFFJyxcblx0aW5maW50aWU6ICdcXHUyOUREJyxcblx0aW5vZG90OiAnXFx1MDEzMScsXG5cdEludDogJ1xcdTIyMkMnLFxuXHRpbnQ6ICdcXHUyMjJCJyxcblx0aW50Y2FsOiAnXFx1MjJCQScsXG5cdGludGVnZXJzOiAnXFx1MjEyNCcsXG5cdEludGVncmFsOiAnXFx1MjIyQicsXG5cdGludGVyY2FsOiAnXFx1MjJCQScsXG5cdEludGVyc2VjdGlvbjogJ1xcdTIyQzInLFxuXHRpbnRsYXJoazogJ1xcdTJBMTcnLFxuXHRpbnRwcm9kOiAnXFx1MkEzQycsXG5cdEludmlzaWJsZUNvbW1hOiAnXFx1MjA2MycsXG5cdEludmlzaWJsZVRpbWVzOiAnXFx1MjA2MicsXG5cdElPY3k6ICdcXHUwNDAxJyxcblx0aW9jeTogJ1xcdTA0NTEnLFxuXHRJb2dvbjogJ1xcdTAxMkUnLFxuXHRpb2dvbjogJ1xcdTAxMkYnLFxuXHRJb3BmOiAnXFx1RDgzNVxcdURENDAnLFxuXHRpb3BmOiAnXFx1RDgzNVxcdURENUEnLFxuXHRJb3RhOiAnXFx1MDM5OScsXG5cdGlvdGE6ICdcXHUwM0I5Jyxcblx0aXByb2Q6ICdcXHUyQTNDJyxcblx0aXF1ZXN0OiAnXFx1MDBCRicsXG5cdElzY3I6ICdcXHUyMTEwJyxcblx0aXNjcjogJ1xcdUQ4MzVcXHVEQ0JFJyxcblx0aXNpbjogJ1xcdTIyMDgnLFxuXHRpc2luZG90OiAnXFx1MjJGNScsXG5cdGlzaW5FOiAnXFx1MjJGOScsXG5cdGlzaW5zOiAnXFx1MjJGNCcsXG5cdGlzaW5zdjogJ1xcdTIyRjMnLFxuXHRpc2ludjogJ1xcdTIyMDgnLFxuXHRpdDogJ1xcdTIwNjInLFxuXHRJdGlsZGU6ICdcXHUwMTI4Jyxcblx0aXRpbGRlOiAnXFx1MDEyOScsXG5cdEl1a2N5OiAnXFx1MDQwNicsXG5cdGl1a2N5OiAnXFx1MDQ1NicsXG5cdEl1bWw6ICdcXHUwMENGJyxcblx0aXVtbDogJ1xcdTAwRUYnLFxuXHRKY2lyYzogJ1xcdTAxMzQnLFxuXHRqY2lyYzogJ1xcdTAxMzUnLFxuXHRKY3k6ICdcXHUwNDE5Jyxcblx0amN5OiAnXFx1MDQzOScsXG5cdEpmcjogJ1xcdUQ4MzVcXHVERDBEJyxcblx0amZyOiAnXFx1RDgzNVxcdUREMjcnLFxuXHRqbWF0aDogJ1xcdTAyMzcnLFxuXHRKb3BmOiAnXFx1RDgzNVxcdURENDEnLFxuXHRqb3BmOiAnXFx1RDgzNVxcdURENUInLFxuXHRKc2NyOiAnXFx1RDgzNVxcdURDQTUnLFxuXHRqc2NyOiAnXFx1RDgzNVxcdURDQkYnLFxuXHRKc2VyY3k6ICdcXHUwNDA4Jyxcblx0anNlcmN5OiAnXFx1MDQ1OCcsXG5cdEp1a2N5OiAnXFx1MDQwNCcsXG5cdGp1a2N5OiAnXFx1MDQ1NCcsXG5cdEthcHBhOiAnXFx1MDM5QScsXG5cdGthcHBhOiAnXFx1MDNCQScsXG5cdGthcHBhdjogJ1xcdTAzRjAnLFxuXHRLY2VkaWw6ICdcXHUwMTM2Jyxcblx0a2NlZGlsOiAnXFx1MDEzNycsXG5cdEtjeTogJ1xcdTA0MUEnLFxuXHRrY3k6ICdcXHUwNDNBJyxcblx0S2ZyOiAnXFx1RDgzNVxcdUREMEUnLFxuXHRrZnI6ICdcXHVEODM1XFx1REQyOCcsXG5cdGtncmVlbjogJ1xcdTAxMzgnLFxuXHRLSGN5OiAnXFx1MDQyNScsXG5cdGtoY3k6ICdcXHUwNDQ1Jyxcblx0S0pjeTogJ1xcdTA0MEMnLFxuXHRramN5OiAnXFx1MDQ1QycsXG5cdEtvcGY6ICdcXHVEODM1XFx1REQ0MicsXG5cdGtvcGY6ICdcXHVEODM1XFx1REQ1QycsXG5cdEtzY3I6ICdcXHVEODM1XFx1RENBNicsXG5cdGtzY3I6ICdcXHVEODM1XFx1RENDMCcsXG5cdGxBYXJyOiAnXFx1MjFEQScsXG5cdExhY3V0ZTogJ1xcdTAxMzknLFxuXHRsYWN1dGU6ICdcXHUwMTNBJyxcblx0bGFlbXB0eXY6ICdcXHUyOUI0Jyxcblx0bGFncmFuOiAnXFx1MjExMicsXG5cdExhbWJkYTogJ1xcdTAzOUInLFxuXHRsYW1iZGE6ICdcXHUwM0JCJyxcblx0TGFuZzogJ1xcdTI3RUEnLFxuXHRsYW5nOiAnXFx1MjdFOCcsXG5cdGxhbmdkOiAnXFx1Mjk5MScsXG5cdGxhbmdsZTogJ1xcdTI3RTgnLFxuXHRsYXA6ICdcXHUyQTg1Jyxcblx0TGFwbGFjZXRyZjogJ1xcdTIxMTInLFxuXHRsYXF1bzogJ1xcdTAwQUInLFxuXHRMYXJyOiAnXFx1MjE5RScsXG5cdGxBcnI6ICdcXHUyMUQwJyxcblx0bGFycjogJ1xcdTIxOTAnLFxuXHRsYXJyYjogJ1xcdTIxRTQnLFxuXHRsYXJyYmZzOiAnXFx1MjkxRicsXG5cdGxhcnJmczogJ1xcdTI5MUQnLFxuXHRsYXJyaGs6ICdcXHUyMUE5Jyxcblx0bGFycmxwOiAnXFx1MjFBQicsXG5cdGxhcnJwbDogJ1xcdTI5MzknLFxuXHRsYXJyc2ltOiAnXFx1Mjk3MycsXG5cdGxhcnJ0bDogJ1xcdTIxQTInLFxuXHRsYXQ6ICdcXHUyQUFCJyxcblx0bEF0YWlsOiAnXFx1MjkxQicsXG5cdGxhdGFpbDogJ1xcdTI5MTknLFxuXHRsYXRlOiAnXFx1MkFBRCcsXG5cdGxhdGVzOiAnXFx1MkFBRFxcdUZFMDAnLFxuXHRsQmFycjogJ1xcdTI5MEUnLFxuXHRsYmFycjogJ1xcdTI5MEMnLFxuXHRsYmJyazogJ1xcdTI3NzInLFxuXHRsYnJhY2U6ICdcXHUwMDdCJyxcblx0bGJyYWNrOiAnXFx1MDA1QicsXG5cdGxicmtlOiAnXFx1Mjk4QicsXG5cdGxicmtzbGQ6ICdcXHUyOThGJyxcblx0bGJya3NsdTogJ1xcdTI5OEQnLFxuXHRMY2Fyb246ICdcXHUwMTNEJyxcblx0bGNhcm9uOiAnXFx1MDEzRScsXG5cdExjZWRpbDogJ1xcdTAxM0InLFxuXHRsY2VkaWw6ICdcXHUwMTNDJyxcblx0bGNlaWw6ICdcXHUyMzA4Jyxcblx0bGN1YjogJ1xcdTAwN0InLFxuXHRMY3k6ICdcXHUwNDFCJyxcblx0bGN5OiAnXFx1MDQzQicsXG5cdGxkY2E6ICdcXHUyOTM2Jyxcblx0bGRxdW86ICdcXHUyMDFDJyxcblx0bGRxdW9yOiAnXFx1MjAxRScsXG5cdGxkcmRoYXI6ICdcXHUyOTY3Jyxcblx0bGRydXNoYXI6ICdcXHUyOTRCJyxcblx0bGRzaDogJ1xcdTIxQjInLFxuXHRsRTogJ1xcdTIyNjYnLFxuXHRsZTogJ1xcdTIyNjQnLFxuXHRMZWZ0QW5nbGVCcmFja2V0OiAnXFx1MjdFOCcsXG5cdExlZnRBcnJvdzogJ1xcdTIxOTAnLFxuXHRMZWZ0YXJyb3c6ICdcXHUyMUQwJyxcblx0bGVmdGFycm93OiAnXFx1MjE5MCcsXG5cdExlZnRBcnJvd0JhcjogJ1xcdTIxRTQnLFxuXHRMZWZ0QXJyb3dSaWdodEFycm93OiAnXFx1MjFDNicsXG5cdGxlZnRhcnJvd3RhaWw6ICdcXHUyMUEyJyxcblx0TGVmdENlaWxpbmc6ICdcXHUyMzA4Jyxcblx0TGVmdERvdWJsZUJyYWNrZXQ6ICdcXHUyN0U2Jyxcblx0TGVmdERvd25UZWVWZWN0b3I6ICdcXHUyOTYxJyxcblx0TGVmdERvd25WZWN0b3I6ICdcXHUyMUMzJyxcblx0TGVmdERvd25WZWN0b3JCYXI6ICdcXHUyOTU5Jyxcblx0TGVmdEZsb29yOiAnXFx1MjMwQScsXG5cdGxlZnRoYXJwb29uZG93bjogJ1xcdTIxQkQnLFxuXHRsZWZ0aGFycG9vbnVwOiAnXFx1MjFCQycsXG5cdGxlZnRsZWZ0YXJyb3dzOiAnXFx1MjFDNycsXG5cdExlZnRSaWdodEFycm93OiAnXFx1MjE5NCcsXG5cdExlZnRyaWdodGFycm93OiAnXFx1MjFENCcsXG5cdGxlZnRyaWdodGFycm93OiAnXFx1MjE5NCcsXG5cdGxlZnRyaWdodGFycm93czogJ1xcdTIxQzYnLFxuXHRsZWZ0cmlnaHRoYXJwb29uczogJ1xcdTIxQ0InLFxuXHRsZWZ0cmlnaHRzcXVpZ2Fycm93OiAnXFx1MjFBRCcsXG5cdExlZnRSaWdodFZlY3RvcjogJ1xcdTI5NEUnLFxuXHRMZWZ0VGVlOiAnXFx1MjJBMycsXG5cdExlZnRUZWVBcnJvdzogJ1xcdTIxQTQnLFxuXHRMZWZ0VGVlVmVjdG9yOiAnXFx1Mjk1QScsXG5cdGxlZnR0aHJlZXRpbWVzOiAnXFx1MjJDQicsXG5cdExlZnRUcmlhbmdsZTogJ1xcdTIyQjInLFxuXHRMZWZ0VHJpYW5nbGVCYXI6ICdcXHUyOUNGJyxcblx0TGVmdFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkI0Jyxcblx0TGVmdFVwRG93blZlY3RvcjogJ1xcdTI5NTEnLFxuXHRMZWZ0VXBUZWVWZWN0b3I6ICdcXHUyOTYwJyxcblx0TGVmdFVwVmVjdG9yOiAnXFx1MjFCRicsXG5cdExlZnRVcFZlY3RvckJhcjogJ1xcdTI5NTgnLFxuXHRMZWZ0VmVjdG9yOiAnXFx1MjFCQycsXG5cdExlZnRWZWN0b3JCYXI6ICdcXHUyOTUyJyxcblx0bEVnOiAnXFx1MkE4QicsXG5cdGxlZzogJ1xcdTIyREEnLFxuXHRsZXE6ICdcXHUyMjY0Jyxcblx0bGVxcTogJ1xcdTIyNjYnLFxuXHRsZXFzbGFudDogJ1xcdTJBN0QnLFxuXHRsZXM6ICdcXHUyQTdEJyxcblx0bGVzY2M6ICdcXHUyQUE4Jyxcblx0bGVzZG90OiAnXFx1MkE3RicsXG5cdGxlc2RvdG86ICdcXHUyQTgxJyxcblx0bGVzZG90b3I6ICdcXHUyQTgzJyxcblx0bGVzZzogJ1xcdTIyREFcXHVGRTAwJyxcblx0bGVzZ2VzOiAnXFx1MkE5MycsXG5cdGxlc3NhcHByb3g6ICdcXHUyQTg1Jyxcblx0bGVzc2RvdDogJ1xcdTIyRDYnLFxuXHRsZXNzZXFndHI6ICdcXHUyMkRBJyxcblx0bGVzc2VxcWd0cjogJ1xcdTJBOEInLFxuXHRMZXNzRXF1YWxHcmVhdGVyOiAnXFx1MjJEQScsXG5cdExlc3NGdWxsRXF1YWw6ICdcXHUyMjY2Jyxcblx0TGVzc0dyZWF0ZXI6ICdcXHUyMjc2Jyxcblx0bGVzc2d0cjogJ1xcdTIyNzYnLFxuXHRMZXNzTGVzczogJ1xcdTJBQTEnLFxuXHRsZXNzc2ltOiAnXFx1MjI3MicsXG5cdExlc3NTbGFudEVxdWFsOiAnXFx1MkE3RCcsXG5cdExlc3NUaWxkZTogJ1xcdTIyNzInLFxuXHRsZmlzaHQ6ICdcXHUyOTdDJyxcblx0bGZsb29yOiAnXFx1MjMwQScsXG5cdExmcjogJ1xcdUQ4MzVcXHVERDBGJyxcblx0bGZyOiAnXFx1RDgzNVxcdUREMjknLFxuXHRsZzogJ1xcdTIyNzYnLFxuXHRsZ0U6ICdcXHUyQTkxJyxcblx0bEhhcjogJ1xcdTI5NjInLFxuXHRsaGFyZDogJ1xcdTIxQkQnLFxuXHRsaGFydTogJ1xcdTIxQkMnLFxuXHRsaGFydWw6ICdcXHUyOTZBJyxcblx0bGhibGs6ICdcXHUyNTg0Jyxcblx0TEpjeTogJ1xcdTA0MDknLFxuXHRsamN5OiAnXFx1MDQ1OScsXG5cdExsOiAnXFx1MjJEOCcsXG5cdGxsOiAnXFx1MjI2QScsXG5cdGxsYXJyOiAnXFx1MjFDNycsXG5cdGxsY29ybmVyOiAnXFx1MjMxRScsXG5cdExsZWZ0YXJyb3c6ICdcXHUyMURBJyxcblx0bGxoYXJkOiAnXFx1Mjk2QicsXG5cdGxsdHJpOiAnXFx1MjVGQScsXG5cdExtaWRvdDogJ1xcdTAxM0YnLFxuXHRsbWlkb3Q6ICdcXHUwMTQwJyxcblx0bG1vdXN0OiAnXFx1MjNCMCcsXG5cdGxtb3VzdGFjaGU6ICdcXHUyM0IwJyxcblx0bG5hcDogJ1xcdTJBODknLFxuXHRsbmFwcHJveDogJ1xcdTJBODknLFxuXHRsbkU6ICdcXHUyMjY4Jyxcblx0bG5lOiAnXFx1MkE4NycsXG5cdGxuZXE6ICdcXHUyQTg3Jyxcblx0bG5lcXE6ICdcXHUyMjY4Jyxcblx0bG5zaW06ICdcXHUyMkU2Jyxcblx0bG9hbmc6ICdcXHUyN0VDJyxcblx0bG9hcnI6ICdcXHUyMUZEJyxcblx0bG9icms6ICdcXHUyN0U2Jyxcblx0TG9uZ0xlZnRBcnJvdzogJ1xcdTI3RjUnLFxuXHRMb25nbGVmdGFycm93OiAnXFx1MjdGOCcsXG5cdGxvbmdsZWZ0YXJyb3c6ICdcXHUyN0Y1Jyxcblx0TG9uZ0xlZnRSaWdodEFycm93OiAnXFx1MjdGNycsXG5cdExvbmdsZWZ0cmlnaHRhcnJvdzogJ1xcdTI3RkEnLFxuXHRsb25nbGVmdHJpZ2h0YXJyb3c6ICdcXHUyN0Y3Jyxcblx0bG9uZ21hcHN0bzogJ1xcdTI3RkMnLFxuXHRMb25nUmlnaHRBcnJvdzogJ1xcdTI3RjYnLFxuXHRMb25ncmlnaHRhcnJvdzogJ1xcdTI3RjknLFxuXHRsb25ncmlnaHRhcnJvdzogJ1xcdTI3RjYnLFxuXHRsb29wYXJyb3dsZWZ0OiAnXFx1MjFBQicsXG5cdGxvb3BhcnJvd3JpZ2h0OiAnXFx1MjFBQycsXG5cdGxvcGFyOiAnXFx1Mjk4NScsXG5cdExvcGY6ICdcXHVEODM1XFx1REQ0MycsXG5cdGxvcGY6ICdcXHVEODM1XFx1REQ1RCcsXG5cdGxvcGx1czogJ1xcdTJBMkQnLFxuXHRsb3RpbWVzOiAnXFx1MkEzNCcsXG5cdGxvd2FzdDogJ1xcdTIyMTcnLFxuXHRsb3diYXI6ICdcXHUwMDVGJyxcblx0TG93ZXJMZWZ0QXJyb3c6ICdcXHUyMTk5Jyxcblx0TG93ZXJSaWdodEFycm93OiAnXFx1MjE5OCcsXG5cdGxvejogJ1xcdTI1Q0EnLFxuXHRsb3plbmdlOiAnXFx1MjVDQScsXG5cdGxvemY6ICdcXHUyOUVCJyxcblx0bHBhcjogJ1xcdTAwMjgnLFxuXHRscGFybHQ6ICdcXHUyOTkzJyxcblx0bHJhcnI6ICdcXHUyMUM2Jyxcblx0bHJjb3JuZXI6ICdcXHUyMzFGJyxcblx0bHJoYXI6ICdcXHUyMUNCJyxcblx0bHJoYXJkOiAnXFx1Mjk2RCcsXG5cdGxybTogJ1xcdTIwMEUnLFxuXHRscnRyaTogJ1xcdTIyQkYnLFxuXHRsc2FxdW86ICdcXHUyMDM5Jyxcblx0THNjcjogJ1xcdTIxMTInLFxuXHRsc2NyOiAnXFx1RDgzNVxcdURDQzEnLFxuXHRMc2g6ICdcXHUyMUIwJyxcblx0bHNoOiAnXFx1MjFCMCcsXG5cdGxzaW06ICdcXHUyMjcyJyxcblx0bHNpbWU6ICdcXHUyQThEJyxcblx0bHNpbWc6ICdcXHUyQThGJyxcblx0bHNxYjogJ1xcdTAwNUInLFxuXHRsc3F1bzogJ1xcdTIwMTgnLFxuXHRsc3F1b3I6ICdcXHUyMDFBJyxcblx0THN0cm9rOiAnXFx1MDE0MScsXG5cdGxzdHJvazogJ1xcdTAxNDInLFxuXHRMdDogJ1xcdTIyNkEnLFxuXHRMVDogJ1xcdTAwM0MnLFxuXHRsdDogJ1xcdTAwM0MnLFxuXHRsdGNjOiAnXFx1MkFBNicsXG5cdGx0Y2lyOiAnXFx1MkE3OScsXG5cdGx0ZG90OiAnXFx1MjJENicsXG5cdGx0aHJlZTogJ1xcdTIyQ0InLFxuXHRsdGltZXM6ICdcXHUyMkM5Jyxcblx0bHRsYXJyOiAnXFx1Mjk3NicsXG5cdGx0cXVlc3Q6ICdcXHUyQTdCJyxcblx0bHRyaTogJ1xcdTI1QzMnLFxuXHRsdHJpZTogJ1xcdTIyQjQnLFxuXHRsdHJpZjogJ1xcdTI1QzInLFxuXHRsdHJQYXI6ICdcXHUyOTk2Jyxcblx0bHVyZHNoYXI6ICdcXHUyOTRBJyxcblx0bHVydWhhcjogJ1xcdTI5NjYnLFxuXHRsdmVydG5lcXE6ICdcXHUyMjY4XFx1RkUwMCcsXG5cdGx2bkU6ICdcXHUyMjY4XFx1RkUwMCcsXG5cdG1hY3I6ICdcXHUwMEFGJyxcblx0bWFsZTogJ1xcdTI2NDInLFxuXHRtYWx0OiAnXFx1MjcyMCcsXG5cdG1hbHRlc2U6ICdcXHUyNzIwJyxcblx0TWFwOiAnXFx1MjkwNScsXG5cdG1hcDogJ1xcdTIxQTYnLFxuXHRtYXBzdG86ICdcXHUyMUE2Jyxcblx0bWFwc3RvZG93bjogJ1xcdTIxQTcnLFxuXHRtYXBzdG9sZWZ0OiAnXFx1MjFBNCcsXG5cdG1hcHN0b3VwOiAnXFx1MjFBNScsXG5cdG1hcmtlcjogJ1xcdTI1QUUnLFxuXHRtY29tbWE6ICdcXHUyQTI5Jyxcblx0TWN5OiAnXFx1MDQxQycsXG5cdG1jeTogJ1xcdTA0M0MnLFxuXHRtZGFzaDogJ1xcdTIwMTQnLFxuXHRtRERvdDogJ1xcdTIyM0EnLFxuXHRtZWFzdXJlZGFuZ2xlOiAnXFx1MjIyMScsXG5cdE1lZGl1bVNwYWNlOiAnXFx1MjA1RicsXG5cdE1lbGxpbnRyZjogJ1xcdTIxMzMnLFxuXHRNZnI6ICdcXHVEODM1XFx1REQxMCcsXG5cdG1mcjogJ1xcdUQ4MzVcXHVERDJBJyxcblx0bWhvOiAnXFx1MjEyNycsXG5cdG1pY3JvOiAnXFx1MDBCNScsXG5cdG1pZDogJ1xcdTIyMjMnLFxuXHRtaWRhc3Q6ICdcXHUwMDJBJyxcblx0bWlkY2lyOiAnXFx1MkFGMCcsXG5cdG1pZGRvdDogJ1xcdTAwQjcnLFxuXHRtaW51czogJ1xcdTIyMTInLFxuXHRtaW51c2I6ICdcXHUyMjlGJyxcblx0bWludXNkOiAnXFx1MjIzOCcsXG5cdG1pbnVzZHU6ICdcXHUyQTJBJyxcblx0TWludXNQbHVzOiAnXFx1MjIxMycsXG5cdG1sY3A6ICdcXHUyQURCJyxcblx0bWxkcjogJ1xcdTIwMjYnLFxuXHRtbnBsdXM6ICdcXHUyMjEzJyxcblx0bW9kZWxzOiAnXFx1MjJBNycsXG5cdE1vcGY6ICdcXHVEODM1XFx1REQ0NCcsXG5cdG1vcGY6ICdcXHVEODM1XFx1REQ1RScsXG5cdG1wOiAnXFx1MjIxMycsXG5cdE1zY3I6ICdcXHUyMTMzJyxcblx0bXNjcjogJ1xcdUQ4MzVcXHVEQ0MyJyxcblx0bXN0cG9zOiAnXFx1MjIzRScsXG5cdE11OiAnXFx1MDM5QycsXG5cdG11OiAnXFx1MDNCQycsXG5cdG11bHRpbWFwOiAnXFx1MjJCOCcsXG5cdG11bWFwOiAnXFx1MjJCOCcsXG5cdG5hYmxhOiAnXFx1MjIwNycsXG5cdE5hY3V0ZTogJ1xcdTAxNDMnLFxuXHRuYWN1dGU6ICdcXHUwMTQ0Jyxcblx0bmFuZzogJ1xcdTIyMjBcXHUyMEQyJyxcblx0bmFwOiAnXFx1MjI0OScsXG5cdG5hcEU6ICdcXHUyQTcwXFx1MDMzOCcsXG5cdG5hcGlkOiAnXFx1MjI0QlxcdTAzMzgnLFxuXHRuYXBvczogJ1xcdTAxNDknLFxuXHRuYXBwcm94OiAnXFx1MjI0OScsXG5cdG5hdHVyOiAnXFx1MjY2RScsXG5cdG5hdHVyYWw6ICdcXHUyNjZFJyxcblx0bmF0dXJhbHM6ICdcXHUyMTE1Jyxcblx0bmJzcDogJ1xcdTAwQTAnLFxuXHRuYnVtcDogJ1xcdTIyNEVcXHUwMzM4Jyxcblx0bmJ1bXBlOiAnXFx1MjI0RlxcdTAzMzgnLFxuXHRuY2FwOiAnXFx1MkE0MycsXG5cdE5jYXJvbjogJ1xcdTAxNDcnLFxuXHRuY2Fyb246ICdcXHUwMTQ4Jyxcblx0TmNlZGlsOiAnXFx1MDE0NScsXG5cdG5jZWRpbDogJ1xcdTAxNDYnLFxuXHRuY29uZzogJ1xcdTIyNDcnLFxuXHRuY29uZ2RvdDogJ1xcdTJBNkRcXHUwMzM4Jyxcblx0bmN1cDogJ1xcdTJBNDInLFxuXHROY3k6ICdcXHUwNDFEJyxcblx0bmN5OiAnXFx1MDQzRCcsXG5cdG5kYXNoOiAnXFx1MjAxMycsXG5cdG5lOiAnXFx1MjI2MCcsXG5cdG5lYXJoazogJ1xcdTI5MjQnLFxuXHRuZUFycjogJ1xcdTIxRDcnLFxuXHRuZWFycjogJ1xcdTIxOTcnLFxuXHRuZWFycm93OiAnXFx1MjE5NycsXG5cdG5lZG90OiAnXFx1MjI1MFxcdTAzMzgnLFxuXHROZWdhdGl2ZU1lZGl1bVNwYWNlOiAnXFx1MjAwQicsXG5cdE5lZ2F0aXZlVGhpY2tTcGFjZTogJ1xcdTIwMEInLFxuXHROZWdhdGl2ZVRoaW5TcGFjZTogJ1xcdTIwMEInLFxuXHROZWdhdGl2ZVZlcnlUaGluU3BhY2U6ICdcXHUyMDBCJyxcblx0bmVxdWl2OiAnXFx1MjI2MicsXG5cdG5lc2VhcjogJ1xcdTI5MjgnLFxuXHRuZXNpbTogJ1xcdTIyNDJcXHUwMzM4Jyxcblx0TmVzdGVkR3JlYXRlckdyZWF0ZXI6ICdcXHUyMjZCJyxcblx0TmVzdGVkTGVzc0xlc3M6ICdcXHUyMjZBJyxcblx0TmV3TGluZTogJ1xcdTAwMEEnLFxuXHRuZXhpc3Q6ICdcXHUyMjA0Jyxcblx0bmV4aXN0czogJ1xcdTIyMDQnLFxuXHROZnI6ICdcXHVEODM1XFx1REQxMScsXG5cdG5mcjogJ1xcdUQ4MzVcXHVERDJCJyxcblx0bmdFOiAnXFx1MjI2N1xcdTAzMzgnLFxuXHRuZ2U6ICdcXHUyMjcxJyxcblx0bmdlcTogJ1xcdTIyNzEnLFxuXHRuZ2VxcTogJ1xcdTIyNjdcXHUwMzM4Jyxcblx0bmdlcXNsYW50OiAnXFx1MkE3RVxcdTAzMzgnLFxuXHRuZ2VzOiAnXFx1MkE3RVxcdTAzMzgnLFxuXHRuR2c6ICdcXHUyMkQ5XFx1MDMzOCcsXG5cdG5nc2ltOiAnXFx1MjI3NScsXG5cdG5HdDogJ1xcdTIyNkJcXHUyMEQyJyxcblx0bmd0OiAnXFx1MjI2RicsXG5cdG5ndHI6ICdcXHUyMjZGJyxcblx0bkd0djogJ1xcdTIyNkJcXHUwMzM4Jyxcblx0bmhBcnI6ICdcXHUyMUNFJyxcblx0bmhhcnI6ICdcXHUyMUFFJyxcblx0bmhwYXI6ICdcXHUyQUYyJyxcblx0bmk6ICdcXHUyMjBCJyxcblx0bmlzOiAnXFx1MjJGQycsXG5cdG5pc2Q6ICdcXHUyMkZBJyxcblx0bml2OiAnXFx1MjIwQicsXG5cdE5KY3k6ICdcXHUwNDBBJyxcblx0bmpjeTogJ1xcdTA0NUEnLFxuXHRubEFycjogJ1xcdTIxQ0QnLFxuXHRubGFycjogJ1xcdTIxOUEnLFxuXHRubGRyOiAnXFx1MjAyNScsXG5cdG5sRTogJ1xcdTIyNjZcXHUwMzM4Jyxcblx0bmxlOiAnXFx1MjI3MCcsXG5cdG5MZWZ0YXJyb3c6ICdcXHUyMUNEJyxcblx0bmxlZnRhcnJvdzogJ1xcdTIxOUEnLFxuXHRuTGVmdHJpZ2h0YXJyb3c6ICdcXHUyMUNFJyxcblx0bmxlZnRyaWdodGFycm93OiAnXFx1MjFBRScsXG5cdG5sZXE6ICdcXHUyMjcwJyxcblx0bmxlcXE6ICdcXHUyMjY2XFx1MDMzOCcsXG5cdG5sZXFzbGFudDogJ1xcdTJBN0RcXHUwMzM4Jyxcblx0bmxlczogJ1xcdTJBN0RcXHUwMzM4Jyxcblx0bmxlc3M6ICdcXHUyMjZFJyxcblx0bkxsOiAnXFx1MjJEOFxcdTAzMzgnLFxuXHRubHNpbTogJ1xcdTIyNzQnLFxuXHRuTHQ6ICdcXHUyMjZBXFx1MjBEMicsXG5cdG5sdDogJ1xcdTIyNkUnLFxuXHRubHRyaTogJ1xcdTIyRUEnLFxuXHRubHRyaWU6ICdcXHUyMkVDJyxcblx0bkx0djogJ1xcdTIyNkFcXHUwMzM4Jyxcblx0bm1pZDogJ1xcdTIyMjQnLFxuXHROb0JyZWFrOiAnXFx1MjA2MCcsXG5cdE5vbkJyZWFraW5nU3BhY2U6ICdcXHUwMEEwJyxcblx0Tm9wZjogJ1xcdTIxMTUnLFxuXHRub3BmOiAnXFx1RDgzNVxcdURENUYnLFxuXHROb3Q6ICdcXHUyQUVDJyxcblx0bm90OiAnXFx1MDBBQycsXG5cdE5vdENvbmdydWVudDogJ1xcdTIyNjInLFxuXHROb3RDdXBDYXA6ICdcXHUyMjZEJyxcblx0Tm90RG91YmxlVmVydGljYWxCYXI6ICdcXHUyMjI2Jyxcblx0Tm90RWxlbWVudDogJ1xcdTIyMDknLFxuXHROb3RFcXVhbDogJ1xcdTIyNjAnLFxuXHROb3RFcXVhbFRpbGRlOiAnXFx1MjI0MlxcdTAzMzgnLFxuXHROb3RFeGlzdHM6ICdcXHUyMjA0Jyxcblx0Tm90R3JlYXRlcjogJ1xcdTIyNkYnLFxuXHROb3RHcmVhdGVyRXF1YWw6ICdcXHUyMjcxJyxcblx0Tm90R3JlYXRlckZ1bGxFcXVhbDogJ1xcdTIyNjdcXHUwMzM4Jyxcblx0Tm90R3JlYXRlckdyZWF0ZXI6ICdcXHUyMjZCXFx1MDMzOCcsXG5cdE5vdEdyZWF0ZXJMZXNzOiAnXFx1MjI3OScsXG5cdE5vdEdyZWF0ZXJTbGFudEVxdWFsOiAnXFx1MkE3RVxcdTAzMzgnLFxuXHROb3RHcmVhdGVyVGlsZGU6ICdcXHUyMjc1Jyxcblx0Tm90SHVtcERvd25IdW1wOiAnXFx1MjI0RVxcdTAzMzgnLFxuXHROb3RIdW1wRXF1YWw6ICdcXHUyMjRGXFx1MDMzOCcsXG5cdG5vdGluOiAnXFx1MjIwOScsXG5cdG5vdGluZG90OiAnXFx1MjJGNVxcdTAzMzgnLFxuXHRub3RpbkU6ICdcXHUyMkY5XFx1MDMzOCcsXG5cdG5vdGludmE6ICdcXHUyMjA5Jyxcblx0bm90aW52YjogJ1xcdTIyRjcnLFxuXHRub3RpbnZjOiAnXFx1MjJGNicsXG5cdE5vdExlZnRUcmlhbmdsZTogJ1xcdTIyRUEnLFxuXHROb3RMZWZ0VHJpYW5nbGVCYXI6ICdcXHUyOUNGXFx1MDMzOCcsXG5cdE5vdExlZnRUcmlhbmdsZUVxdWFsOiAnXFx1MjJFQycsXG5cdE5vdExlc3M6ICdcXHUyMjZFJyxcblx0Tm90TGVzc0VxdWFsOiAnXFx1MjI3MCcsXG5cdE5vdExlc3NHcmVhdGVyOiAnXFx1MjI3OCcsXG5cdE5vdExlc3NMZXNzOiAnXFx1MjI2QVxcdTAzMzgnLFxuXHROb3RMZXNzU2xhbnRFcXVhbDogJ1xcdTJBN0RcXHUwMzM4Jyxcblx0Tm90TGVzc1RpbGRlOiAnXFx1MjI3NCcsXG5cdE5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyOiAnXFx1MkFBMlxcdTAzMzgnLFxuXHROb3ROZXN0ZWRMZXNzTGVzczogJ1xcdTJBQTFcXHUwMzM4Jyxcblx0bm90bmk6ICdcXHUyMjBDJyxcblx0bm90bml2YTogJ1xcdTIyMEMnLFxuXHRub3RuaXZiOiAnXFx1MjJGRScsXG5cdG5vdG5pdmM6ICdcXHUyMkZEJyxcblx0Tm90UHJlY2VkZXM6ICdcXHUyMjgwJyxcblx0Tm90UHJlY2VkZXNFcXVhbDogJ1xcdTJBQUZcXHUwMzM4Jyxcblx0Tm90UHJlY2VkZXNTbGFudEVxdWFsOiAnXFx1MjJFMCcsXG5cdE5vdFJldmVyc2VFbGVtZW50OiAnXFx1MjIwQycsXG5cdE5vdFJpZ2h0VHJpYW5nbGU6ICdcXHUyMkVCJyxcblx0Tm90UmlnaHRUcmlhbmdsZUJhcjogJ1xcdTI5RDBcXHUwMzM4Jyxcblx0Tm90UmlnaHRUcmlhbmdsZUVxdWFsOiAnXFx1MjJFRCcsXG5cdE5vdFNxdWFyZVN1YnNldDogJ1xcdTIyOEZcXHUwMzM4Jyxcblx0Tm90U3F1YXJlU3Vic2V0RXF1YWw6ICdcXHUyMkUyJyxcblx0Tm90U3F1YXJlU3VwZXJzZXQ6ICdcXHUyMjkwXFx1MDMzOCcsXG5cdE5vdFNxdWFyZVN1cGVyc2V0RXF1YWw6ICdcXHUyMkUzJyxcblx0Tm90U3Vic2V0OiAnXFx1MjI4MlxcdTIwRDInLFxuXHROb3RTdWJzZXRFcXVhbDogJ1xcdTIyODgnLFxuXHROb3RTdWNjZWVkczogJ1xcdTIyODEnLFxuXHROb3RTdWNjZWVkc0VxdWFsOiAnXFx1MkFCMFxcdTAzMzgnLFxuXHROb3RTdWNjZWVkc1NsYW50RXF1YWw6ICdcXHUyMkUxJyxcblx0Tm90U3VjY2VlZHNUaWxkZTogJ1xcdTIyN0ZcXHUwMzM4Jyxcblx0Tm90U3VwZXJzZXQ6ICdcXHUyMjgzXFx1MjBEMicsXG5cdE5vdFN1cGVyc2V0RXF1YWw6ICdcXHUyMjg5Jyxcblx0Tm90VGlsZGU6ICdcXHUyMjQxJyxcblx0Tm90VGlsZGVFcXVhbDogJ1xcdTIyNDQnLFxuXHROb3RUaWxkZUZ1bGxFcXVhbDogJ1xcdTIyNDcnLFxuXHROb3RUaWxkZVRpbGRlOiAnXFx1MjI0OScsXG5cdE5vdFZlcnRpY2FsQmFyOiAnXFx1MjIyNCcsXG5cdG5wYXI6ICdcXHUyMjI2Jyxcblx0bnBhcmFsbGVsOiAnXFx1MjIyNicsXG5cdG5wYXJzbDogJ1xcdTJBRkRcXHUyMEU1Jyxcblx0bnBhcnQ6ICdcXHUyMjAyXFx1MDMzOCcsXG5cdG5wb2xpbnQ6ICdcXHUyQTE0Jyxcblx0bnByOiAnXFx1MjI4MCcsXG5cdG5wcmN1ZTogJ1xcdTIyRTAnLFxuXHRucHJlOiAnXFx1MkFBRlxcdTAzMzgnLFxuXHRucHJlYzogJ1xcdTIyODAnLFxuXHRucHJlY2VxOiAnXFx1MkFBRlxcdTAzMzgnLFxuXHRuckFycjogJ1xcdTIxQ0YnLFxuXHRucmFycjogJ1xcdTIxOUInLFxuXHRucmFycmM6ICdcXHUyOTMzXFx1MDMzOCcsXG5cdG5yYXJydzogJ1xcdTIxOURcXHUwMzM4Jyxcblx0blJpZ2h0YXJyb3c6ICdcXHUyMUNGJyxcblx0bnJpZ2h0YXJyb3c6ICdcXHUyMTlCJyxcblx0bnJ0cmk6ICdcXHUyMkVCJyxcblx0bnJ0cmllOiAnXFx1MjJFRCcsXG5cdG5zYzogJ1xcdTIyODEnLFxuXHRuc2NjdWU6ICdcXHUyMkUxJyxcblx0bnNjZTogJ1xcdTJBQjBcXHUwMzM4Jyxcblx0TnNjcjogJ1xcdUQ4MzVcXHVEQ0E5Jyxcblx0bnNjcjogJ1xcdUQ4MzVcXHVEQ0MzJyxcblx0bnNob3J0bWlkOiAnXFx1MjIyNCcsXG5cdG5zaG9ydHBhcmFsbGVsOiAnXFx1MjIyNicsXG5cdG5zaW06ICdcXHUyMjQxJyxcblx0bnNpbWU6ICdcXHUyMjQ0Jyxcblx0bnNpbWVxOiAnXFx1MjI0NCcsXG5cdG5zbWlkOiAnXFx1MjIyNCcsXG5cdG5zcGFyOiAnXFx1MjIyNicsXG5cdG5zcXN1YmU6ICdcXHUyMkUyJyxcblx0bnNxc3VwZTogJ1xcdTIyRTMnLFxuXHRuc3ViOiAnXFx1MjI4NCcsXG5cdG5zdWJFOiAnXFx1MkFDNVxcdTAzMzgnLFxuXHRuc3ViZTogJ1xcdTIyODgnLFxuXHRuc3Vic2V0OiAnXFx1MjI4MlxcdTIwRDInLFxuXHRuc3Vic2V0ZXE6ICdcXHUyMjg4Jyxcblx0bnN1YnNldGVxcTogJ1xcdTJBQzVcXHUwMzM4Jyxcblx0bnN1Y2M6ICdcXHUyMjgxJyxcblx0bnN1Y2NlcTogJ1xcdTJBQjBcXHUwMzM4Jyxcblx0bnN1cDogJ1xcdTIyODUnLFxuXHRuc3VwRTogJ1xcdTJBQzZcXHUwMzM4Jyxcblx0bnN1cGU6ICdcXHUyMjg5Jyxcblx0bnN1cHNldDogJ1xcdTIyODNcXHUyMEQyJyxcblx0bnN1cHNldGVxOiAnXFx1MjI4OScsXG5cdG5zdXBzZXRlcXE6ICdcXHUyQUM2XFx1MDMzOCcsXG5cdG50Z2w6ICdcXHUyMjc5Jyxcblx0TnRpbGRlOiAnXFx1MDBEMScsXG5cdG50aWxkZTogJ1xcdTAwRjEnLFxuXHRudGxnOiAnXFx1MjI3OCcsXG5cdG50cmlhbmdsZWxlZnQ6ICdcXHUyMkVBJyxcblx0bnRyaWFuZ2xlbGVmdGVxOiAnXFx1MjJFQycsXG5cdG50cmlhbmdsZXJpZ2h0OiAnXFx1MjJFQicsXG5cdG50cmlhbmdsZXJpZ2h0ZXE6ICdcXHUyMkVEJyxcblx0TnU6ICdcXHUwMzlEJyxcblx0bnU6ICdcXHUwM0JEJyxcblx0bnVtOiAnXFx1MDAyMycsXG5cdG51bWVybzogJ1xcdTIxMTYnLFxuXHRudW1zcDogJ1xcdTIwMDcnLFxuXHRudmFwOiAnXFx1MjI0RFxcdTIwRDInLFxuXHRuVkRhc2g6ICdcXHUyMkFGJyxcblx0blZkYXNoOiAnXFx1MjJBRScsXG5cdG52RGFzaDogJ1xcdTIyQUQnLFxuXHRudmRhc2g6ICdcXHUyMkFDJyxcblx0bnZnZTogJ1xcdTIyNjVcXHUyMEQyJyxcblx0bnZndDogJ1xcdTAwM0VcXHUyMEQyJyxcblx0bnZIYXJyOiAnXFx1MjkwNCcsXG5cdG52aW5maW46ICdcXHUyOURFJyxcblx0bnZsQXJyOiAnXFx1MjkwMicsXG5cdG52bGU6ICdcXHUyMjY0XFx1MjBEMicsXG5cdG52bHQ6ICdcXHUwMDNDXFx1MjBEMicsXG5cdG52bHRyaWU6ICdcXHUyMkI0XFx1MjBEMicsXG5cdG52ckFycjogJ1xcdTI5MDMnLFxuXHRudnJ0cmllOiAnXFx1MjJCNVxcdTIwRDInLFxuXHRudnNpbTogJ1xcdTIyM0NcXHUyMEQyJyxcblx0bndhcmhrOiAnXFx1MjkyMycsXG5cdG53QXJyOiAnXFx1MjFENicsXG5cdG53YXJyOiAnXFx1MjE5NicsXG5cdG53YXJyb3c6ICdcXHUyMTk2Jyxcblx0bnduZWFyOiAnXFx1MjkyNycsXG5cdE9hY3V0ZTogJ1xcdTAwRDMnLFxuXHRvYWN1dGU6ICdcXHUwMEYzJyxcblx0b2FzdDogJ1xcdTIyOUInLFxuXHRvY2lyOiAnXFx1MjI5QScsXG5cdE9jaXJjOiAnXFx1MDBENCcsXG5cdG9jaXJjOiAnXFx1MDBGNCcsXG5cdE9jeTogJ1xcdTA0MUUnLFxuXHRvY3k6ICdcXHUwNDNFJyxcblx0b2Rhc2g6ICdcXHUyMjlEJyxcblx0T2RibGFjOiAnXFx1MDE1MCcsXG5cdG9kYmxhYzogJ1xcdTAxNTEnLFxuXHRvZGl2OiAnXFx1MkEzOCcsXG5cdG9kb3Q6ICdcXHUyMjk5Jyxcblx0b2Rzb2xkOiAnXFx1MjlCQycsXG5cdE9FbGlnOiAnXFx1MDE1MicsXG5cdG9lbGlnOiAnXFx1MDE1MycsXG5cdG9mY2lyOiAnXFx1MjlCRicsXG5cdE9mcjogJ1xcdUQ4MzVcXHVERDEyJyxcblx0b2ZyOiAnXFx1RDgzNVxcdUREMkMnLFxuXHRvZ29uOiAnXFx1MDJEQicsXG5cdE9ncmF2ZTogJ1xcdTAwRDInLFxuXHRvZ3JhdmU6ICdcXHUwMEYyJyxcblx0b2d0OiAnXFx1MjlDMScsXG5cdG9oYmFyOiAnXFx1MjlCNScsXG5cdG9obTogJ1xcdTAzQTknLFxuXHRvaW50OiAnXFx1MjIyRScsXG5cdG9sYXJyOiAnXFx1MjFCQScsXG5cdG9sY2lyOiAnXFx1MjlCRScsXG5cdG9sY3Jvc3M6ICdcXHUyOUJCJyxcblx0b2xpbmU6ICdcXHUyMDNFJyxcblx0b2x0OiAnXFx1MjlDMCcsXG5cdE9tYWNyOiAnXFx1MDE0QycsXG5cdG9tYWNyOiAnXFx1MDE0RCcsXG5cdE9tZWdhOiAnXFx1MDNBOScsXG5cdG9tZWdhOiAnXFx1MDNDOScsXG5cdE9taWNyb246ICdcXHUwMzlGJyxcblx0b21pY3JvbjogJ1xcdTAzQkYnLFxuXHRvbWlkOiAnXFx1MjlCNicsXG5cdG9taW51czogJ1xcdTIyOTYnLFxuXHRPb3BmOiAnXFx1RDgzNVxcdURENDYnLFxuXHRvb3BmOiAnXFx1RDgzNVxcdURENjAnLFxuXHRvcGFyOiAnXFx1MjlCNycsXG5cdE9wZW5DdXJseURvdWJsZVF1b3RlOiAnXFx1MjAxQycsXG5cdE9wZW5DdXJseVF1b3RlOiAnXFx1MjAxOCcsXG5cdG9wZXJwOiAnXFx1MjlCOScsXG5cdG9wbHVzOiAnXFx1MjI5NScsXG5cdE9yOiAnXFx1MkE1NCcsXG5cdG9yOiAnXFx1MjIyOCcsXG5cdG9yYXJyOiAnXFx1MjFCQicsXG5cdG9yZDogJ1xcdTJBNUQnLFxuXHRvcmRlcjogJ1xcdTIxMzQnLFxuXHRvcmRlcm9mOiAnXFx1MjEzNCcsXG5cdG9yZGY6ICdcXHUwMEFBJyxcblx0b3JkbTogJ1xcdTAwQkEnLFxuXHRvcmlnb2Y6ICdcXHUyMkI2Jyxcblx0b3JvcjogJ1xcdTJBNTYnLFxuXHRvcnNsb3BlOiAnXFx1MkE1NycsXG5cdG9ydjogJ1xcdTJBNUInLFxuXHRvUzogJ1xcdTI0QzgnLFxuXHRPc2NyOiAnXFx1RDgzNVxcdURDQUEnLFxuXHRvc2NyOiAnXFx1MjEzNCcsXG5cdE9zbGFzaDogJ1xcdTAwRDgnLFxuXHRvc2xhc2g6ICdcXHUwMEY4Jyxcblx0b3NvbDogJ1xcdTIyOTgnLFxuXHRPdGlsZGU6ICdcXHUwMEQ1Jyxcblx0b3RpbGRlOiAnXFx1MDBGNScsXG5cdE90aW1lczogJ1xcdTJBMzcnLFxuXHRvdGltZXM6ICdcXHUyMjk3Jyxcblx0b3RpbWVzYXM6ICdcXHUyQTM2Jyxcblx0T3VtbDogJ1xcdTAwRDYnLFxuXHRvdW1sOiAnXFx1MDBGNicsXG5cdG92YmFyOiAnXFx1MjMzRCcsXG5cdE92ZXJCYXI6ICdcXHUyMDNFJyxcblx0T3ZlckJyYWNlOiAnXFx1MjNERScsXG5cdE92ZXJCcmFja2V0OiAnXFx1MjNCNCcsXG5cdE92ZXJQYXJlbnRoZXNpczogJ1xcdTIzREMnLFxuXHRwYXI6ICdcXHUyMjI1Jyxcblx0cGFyYTogJ1xcdTAwQjYnLFxuXHRwYXJhbGxlbDogJ1xcdTIyMjUnLFxuXHRwYXJzaW06ICdcXHUyQUYzJyxcblx0cGFyc2w6ICdcXHUyQUZEJyxcblx0cGFydDogJ1xcdTIyMDInLFxuXHRQYXJ0aWFsRDogJ1xcdTIyMDInLFxuXHRQY3k6ICdcXHUwNDFGJyxcblx0cGN5OiAnXFx1MDQzRicsXG5cdHBlcmNudDogJ1xcdTAwMjUnLFxuXHRwZXJpb2Q6ICdcXHUwMDJFJyxcblx0cGVybWlsOiAnXFx1MjAzMCcsXG5cdHBlcnA6ICdcXHUyMkE1Jyxcblx0cGVydGVuazogJ1xcdTIwMzEnLFxuXHRQZnI6ICdcXHVEODM1XFx1REQxMycsXG5cdHBmcjogJ1xcdUQ4MzVcXHVERDJEJyxcblx0UGhpOiAnXFx1MDNBNicsXG5cdHBoaTogJ1xcdTAzQzYnLFxuXHRwaGl2OiAnXFx1MDNENScsXG5cdHBobW1hdDogJ1xcdTIxMzMnLFxuXHRwaG9uZTogJ1xcdTI2MEUnLFxuXHRQaTogJ1xcdTAzQTAnLFxuXHRwaTogJ1xcdTAzQzAnLFxuXHRwaXRjaGZvcms6ICdcXHUyMkQ0Jyxcblx0cGl2OiAnXFx1MDNENicsXG5cdHBsYW5jazogJ1xcdTIxMEYnLFxuXHRwbGFuY2toOiAnXFx1MjEwRScsXG5cdHBsYW5rdjogJ1xcdTIxMEYnLFxuXHRwbHVzOiAnXFx1MDAyQicsXG5cdHBsdXNhY2lyOiAnXFx1MkEyMycsXG5cdHBsdXNiOiAnXFx1MjI5RScsXG5cdHBsdXNjaXI6ICdcXHUyQTIyJyxcblx0cGx1c2RvOiAnXFx1MjIxNCcsXG5cdHBsdXNkdTogJ1xcdTJBMjUnLFxuXHRwbHVzZTogJ1xcdTJBNzInLFxuXHRQbHVzTWludXM6ICdcXHUwMEIxJyxcblx0cGx1c21uOiAnXFx1MDBCMScsXG5cdHBsdXNzaW06ICdcXHUyQTI2Jyxcblx0cGx1c3R3bzogJ1xcdTJBMjcnLFxuXHRwbTogJ1xcdTAwQjEnLFxuXHRQb2luY2FyZXBsYW5lOiAnXFx1MjEwQycsXG5cdHBvaW50aW50OiAnXFx1MkExNScsXG5cdFBvcGY6ICdcXHUyMTE5Jyxcblx0cG9wZjogJ1xcdUQ4MzVcXHVERDYxJyxcblx0cG91bmQ6ICdcXHUwMEEzJyxcblx0UHI6ICdcXHUyQUJCJyxcblx0cHI6ICdcXHUyMjdBJyxcblx0cHJhcDogJ1xcdTJBQjcnLFxuXHRwcmN1ZTogJ1xcdTIyN0MnLFxuXHRwckU6ICdcXHUyQUIzJyxcblx0cHJlOiAnXFx1MkFBRicsXG5cdHByZWM6ICdcXHUyMjdBJyxcblx0cHJlY2FwcHJveDogJ1xcdTJBQjcnLFxuXHRwcmVjY3VybHllcTogJ1xcdTIyN0MnLFxuXHRQcmVjZWRlczogJ1xcdTIyN0EnLFxuXHRQcmVjZWRlc0VxdWFsOiAnXFx1MkFBRicsXG5cdFByZWNlZGVzU2xhbnRFcXVhbDogJ1xcdTIyN0MnLFxuXHRQcmVjZWRlc1RpbGRlOiAnXFx1MjI3RScsXG5cdHByZWNlcTogJ1xcdTJBQUYnLFxuXHRwcmVjbmFwcHJveDogJ1xcdTJBQjknLFxuXHRwcmVjbmVxcTogJ1xcdTJBQjUnLFxuXHRwcmVjbnNpbTogJ1xcdTIyRTgnLFxuXHRwcmVjc2ltOiAnXFx1MjI3RScsXG5cdFByaW1lOiAnXFx1MjAzMycsXG5cdHByaW1lOiAnXFx1MjAzMicsXG5cdHByaW1lczogJ1xcdTIxMTknLFxuXHRwcm5hcDogJ1xcdTJBQjknLFxuXHRwcm5FOiAnXFx1MkFCNScsXG5cdHBybnNpbTogJ1xcdTIyRTgnLFxuXHRwcm9kOiAnXFx1MjIwRicsXG5cdFByb2R1Y3Q6ICdcXHUyMjBGJyxcblx0cHJvZmFsYXI6ICdcXHUyMzJFJyxcblx0cHJvZmxpbmU6ICdcXHUyMzEyJyxcblx0cHJvZnN1cmY6ICdcXHUyMzEzJyxcblx0cHJvcDogJ1xcdTIyMUQnLFxuXHRQcm9wb3J0aW9uOiAnXFx1MjIzNycsXG5cdFByb3BvcnRpb25hbDogJ1xcdTIyMUQnLFxuXHRwcm9wdG86ICdcXHUyMjFEJyxcblx0cHJzaW06ICdcXHUyMjdFJyxcblx0cHJ1cmVsOiAnXFx1MjJCMCcsXG5cdFBzY3I6ICdcXHVEODM1XFx1RENBQicsXG5cdHBzY3I6ICdcXHVEODM1XFx1RENDNScsXG5cdFBzaTogJ1xcdTAzQTgnLFxuXHRwc2k6ICdcXHUwM0M4Jyxcblx0cHVuY3NwOiAnXFx1MjAwOCcsXG5cdFFmcjogJ1xcdUQ4MzVcXHVERDE0Jyxcblx0cWZyOiAnXFx1RDgzNVxcdUREMkUnLFxuXHRxaW50OiAnXFx1MkEwQycsXG5cdFFvcGY6ICdcXHUyMTFBJyxcblx0cW9wZjogJ1xcdUQ4MzVcXHVERDYyJyxcblx0cXByaW1lOiAnXFx1MjA1NycsXG5cdFFzY3I6ICdcXHVEODM1XFx1RENBQycsXG5cdHFzY3I6ICdcXHVEODM1XFx1RENDNicsXG5cdHF1YXRlcm5pb25zOiAnXFx1MjEwRCcsXG5cdHF1YXRpbnQ6ICdcXHUyQTE2Jyxcblx0cXVlc3Q6ICdcXHUwMDNGJyxcblx0cXVlc3RlcTogJ1xcdTIyNUYnLFxuXHRRVU9UOiAnXFx1MDAyMicsXG5cdHF1b3Q6ICdcXHUwMDIyJyxcblx0ckFhcnI6ICdcXHUyMURCJyxcblx0cmFjZTogJ1xcdTIyM0RcXHUwMzMxJyxcblx0UmFjdXRlOiAnXFx1MDE1NCcsXG5cdHJhY3V0ZTogJ1xcdTAxNTUnLFxuXHRyYWRpYzogJ1xcdTIyMUEnLFxuXHRyYWVtcHR5djogJ1xcdTI5QjMnLFxuXHRSYW5nOiAnXFx1MjdFQicsXG5cdHJhbmc6ICdcXHUyN0U5Jyxcblx0cmFuZ2Q6ICdcXHUyOTkyJyxcblx0cmFuZ2U6ICdcXHUyOUE1Jyxcblx0cmFuZ2xlOiAnXFx1MjdFOScsXG5cdHJhcXVvOiAnXFx1MDBCQicsXG5cdFJhcnI6ICdcXHUyMUEwJyxcblx0ckFycjogJ1xcdTIxRDInLFxuXHRyYXJyOiAnXFx1MjE5MicsXG5cdHJhcnJhcDogJ1xcdTI5NzUnLFxuXHRyYXJyYjogJ1xcdTIxRTUnLFxuXHRyYXJyYmZzOiAnXFx1MjkyMCcsXG5cdHJhcnJjOiAnXFx1MjkzMycsXG5cdHJhcnJmczogJ1xcdTI5MUUnLFxuXHRyYXJyaGs6ICdcXHUyMUFBJyxcblx0cmFycmxwOiAnXFx1MjFBQycsXG5cdHJhcnJwbDogJ1xcdTI5NDUnLFxuXHRyYXJyc2ltOiAnXFx1Mjk3NCcsXG5cdFJhcnJ0bDogJ1xcdTI5MTYnLFxuXHRyYXJydGw6ICdcXHUyMUEzJyxcblx0cmFycnc6ICdcXHUyMTlEJyxcblx0ckF0YWlsOiAnXFx1MjkxQycsXG5cdHJhdGFpbDogJ1xcdTI5MUEnLFxuXHRyYXRpbzogJ1xcdTIyMzYnLFxuXHRyYXRpb25hbHM6ICdcXHUyMTFBJyxcblx0UkJhcnI6ICdcXHUyOTEwJyxcblx0ckJhcnI6ICdcXHUyOTBGJyxcblx0cmJhcnI6ICdcXHUyOTBEJyxcblx0cmJicms6ICdcXHUyNzczJyxcblx0cmJyYWNlOiAnXFx1MDA3RCcsXG5cdHJicmFjazogJ1xcdTAwNUQnLFxuXHRyYnJrZTogJ1xcdTI5OEMnLFxuXHRyYnJrc2xkOiAnXFx1Mjk4RScsXG5cdHJicmtzbHU6ICdcXHUyOTkwJyxcblx0UmNhcm9uOiAnXFx1MDE1OCcsXG5cdHJjYXJvbjogJ1xcdTAxNTknLFxuXHRSY2VkaWw6ICdcXHUwMTU2Jyxcblx0cmNlZGlsOiAnXFx1MDE1NycsXG5cdHJjZWlsOiAnXFx1MjMwOScsXG5cdHJjdWI6ICdcXHUwMDdEJyxcblx0UmN5OiAnXFx1MDQyMCcsXG5cdHJjeTogJ1xcdTA0NDAnLFxuXHRyZGNhOiAnXFx1MjkzNycsXG5cdHJkbGRoYXI6ICdcXHUyOTY5Jyxcblx0cmRxdW86ICdcXHUyMDFEJyxcblx0cmRxdW9yOiAnXFx1MjAxRCcsXG5cdHJkc2g6ICdcXHUyMUIzJyxcblx0UmU6ICdcXHUyMTFDJyxcblx0cmVhbDogJ1xcdTIxMUMnLFxuXHRyZWFsaW5lOiAnXFx1MjExQicsXG5cdHJlYWxwYXJ0OiAnXFx1MjExQycsXG5cdHJlYWxzOiAnXFx1MjExRCcsXG5cdHJlY3Q6ICdcXHUyNUFEJyxcblx0UkVHOiAnXFx1MDBBRScsXG5cdHJlZzogJ1xcdTAwQUUnLFxuXHRSZXZlcnNlRWxlbWVudDogJ1xcdTIyMEInLFxuXHRSZXZlcnNlRXF1aWxpYnJpdW06ICdcXHUyMUNCJyxcblx0UmV2ZXJzZVVwRXF1aWxpYnJpdW06ICdcXHUyOTZGJyxcblx0cmZpc2h0OiAnXFx1Mjk3RCcsXG5cdHJmbG9vcjogJ1xcdTIzMEInLFxuXHRSZnI6ICdcXHUyMTFDJyxcblx0cmZyOiAnXFx1RDgzNVxcdUREMkYnLFxuXHRySGFyOiAnXFx1Mjk2NCcsXG5cdHJoYXJkOiAnXFx1MjFDMScsXG5cdHJoYXJ1OiAnXFx1MjFDMCcsXG5cdHJoYXJ1bDogJ1xcdTI5NkMnLFxuXHRSaG86ICdcXHUwM0ExJyxcblx0cmhvOiAnXFx1MDNDMScsXG5cdHJob3Y6ICdcXHUwM0YxJyxcblx0UmlnaHRBbmdsZUJyYWNrZXQ6ICdcXHUyN0U5Jyxcblx0UmlnaHRBcnJvdzogJ1xcdTIxOTInLFxuXHRSaWdodGFycm93OiAnXFx1MjFEMicsXG5cdHJpZ2h0YXJyb3c6ICdcXHUyMTkyJyxcblx0UmlnaHRBcnJvd0JhcjogJ1xcdTIxRTUnLFxuXHRSaWdodEFycm93TGVmdEFycm93OiAnXFx1MjFDNCcsXG5cdHJpZ2h0YXJyb3d0YWlsOiAnXFx1MjFBMycsXG5cdFJpZ2h0Q2VpbGluZzogJ1xcdTIzMDknLFxuXHRSaWdodERvdWJsZUJyYWNrZXQ6ICdcXHUyN0U3Jyxcblx0UmlnaHREb3duVGVlVmVjdG9yOiAnXFx1Mjk1RCcsXG5cdFJpZ2h0RG93blZlY3RvcjogJ1xcdTIxQzInLFxuXHRSaWdodERvd25WZWN0b3JCYXI6ICdcXHUyOTU1Jyxcblx0UmlnaHRGbG9vcjogJ1xcdTIzMEInLFxuXHRyaWdodGhhcnBvb25kb3duOiAnXFx1MjFDMScsXG5cdHJpZ2h0aGFycG9vbnVwOiAnXFx1MjFDMCcsXG5cdHJpZ2h0bGVmdGFycm93czogJ1xcdTIxQzQnLFxuXHRyaWdodGxlZnRoYXJwb29uczogJ1xcdTIxQ0MnLFxuXHRyaWdodHJpZ2h0YXJyb3dzOiAnXFx1MjFDOScsXG5cdHJpZ2h0c3F1aWdhcnJvdzogJ1xcdTIxOUQnLFxuXHRSaWdodFRlZTogJ1xcdTIyQTInLFxuXHRSaWdodFRlZUFycm93OiAnXFx1MjFBNicsXG5cdFJpZ2h0VGVlVmVjdG9yOiAnXFx1Mjk1QicsXG5cdHJpZ2h0dGhyZWV0aW1lczogJ1xcdTIyQ0MnLFxuXHRSaWdodFRyaWFuZ2xlOiAnXFx1MjJCMycsXG5cdFJpZ2h0VHJpYW5nbGVCYXI6ICdcXHUyOUQwJyxcblx0UmlnaHRUcmlhbmdsZUVxdWFsOiAnXFx1MjJCNScsXG5cdFJpZ2h0VXBEb3duVmVjdG9yOiAnXFx1Mjk0RicsXG5cdFJpZ2h0VXBUZWVWZWN0b3I6ICdcXHUyOTVDJyxcblx0UmlnaHRVcFZlY3RvcjogJ1xcdTIxQkUnLFxuXHRSaWdodFVwVmVjdG9yQmFyOiAnXFx1Mjk1NCcsXG5cdFJpZ2h0VmVjdG9yOiAnXFx1MjFDMCcsXG5cdFJpZ2h0VmVjdG9yQmFyOiAnXFx1Mjk1MycsXG5cdHJpbmc6ICdcXHUwMkRBJyxcblx0cmlzaW5nZG90c2VxOiAnXFx1MjI1MycsXG5cdHJsYXJyOiAnXFx1MjFDNCcsXG5cdHJsaGFyOiAnXFx1MjFDQycsXG5cdHJsbTogJ1xcdTIwMEYnLFxuXHRybW91c3Q6ICdcXHUyM0IxJyxcblx0cm1vdXN0YWNoZTogJ1xcdTIzQjEnLFxuXHRybm1pZDogJ1xcdTJBRUUnLFxuXHRyb2FuZzogJ1xcdTI3RUQnLFxuXHRyb2FycjogJ1xcdTIxRkUnLFxuXHRyb2JyazogJ1xcdTI3RTcnLFxuXHRyb3BhcjogJ1xcdTI5ODYnLFxuXHRSb3BmOiAnXFx1MjExRCcsXG5cdHJvcGY6ICdcXHVEODM1XFx1REQ2MycsXG5cdHJvcGx1czogJ1xcdTJBMkUnLFxuXHRyb3RpbWVzOiAnXFx1MkEzNScsXG5cdFJvdW5kSW1wbGllczogJ1xcdTI5NzAnLFxuXHRycGFyOiAnXFx1MDAyOScsXG5cdHJwYXJndDogJ1xcdTI5OTQnLFxuXHRycHBvbGludDogJ1xcdTJBMTInLFxuXHRycmFycjogJ1xcdTIxQzknLFxuXHRScmlnaHRhcnJvdzogJ1xcdTIxREInLFxuXHRyc2FxdW86ICdcXHUyMDNBJyxcblx0UnNjcjogJ1xcdTIxMUInLFxuXHRyc2NyOiAnXFx1RDgzNVxcdURDQzcnLFxuXHRSc2g6ICdcXHUyMUIxJyxcblx0cnNoOiAnXFx1MjFCMScsXG5cdHJzcWI6ICdcXHUwMDVEJyxcblx0cnNxdW86ICdcXHUyMDE5Jyxcblx0cnNxdW9yOiAnXFx1MjAxOScsXG5cdHJ0aHJlZTogJ1xcdTIyQ0MnLFxuXHRydGltZXM6ICdcXHUyMkNBJyxcblx0cnRyaTogJ1xcdTI1QjknLFxuXHRydHJpZTogJ1xcdTIyQjUnLFxuXHRydHJpZjogJ1xcdTI1QjgnLFxuXHRydHJpbHRyaTogJ1xcdTI5Q0UnLFxuXHRSdWxlRGVsYXllZDogJ1xcdTI5RjQnLFxuXHRydWx1aGFyOiAnXFx1Mjk2OCcsXG5cdHJ4OiAnXFx1MjExRScsXG5cdFNhY3V0ZTogJ1xcdTAxNUEnLFxuXHRzYWN1dGU6ICdcXHUwMTVCJyxcblx0c2JxdW86ICdcXHUyMDFBJyxcblx0U2M6ICdcXHUyQUJDJyxcblx0c2M6ICdcXHUyMjdCJyxcblx0c2NhcDogJ1xcdTJBQjgnLFxuXHRTY2Fyb246ICdcXHUwMTYwJyxcblx0c2Nhcm9uOiAnXFx1MDE2MScsXG5cdHNjY3VlOiAnXFx1MjI3RCcsXG5cdHNjRTogJ1xcdTJBQjQnLFxuXHRzY2U6ICdcXHUyQUIwJyxcblx0U2NlZGlsOiAnXFx1MDE1RScsXG5cdHNjZWRpbDogJ1xcdTAxNUYnLFxuXHRTY2lyYzogJ1xcdTAxNUMnLFxuXHRzY2lyYzogJ1xcdTAxNUQnLFxuXHRzY25hcDogJ1xcdTJBQkEnLFxuXHRzY25FOiAnXFx1MkFCNicsXG5cdHNjbnNpbTogJ1xcdTIyRTknLFxuXHRzY3BvbGludDogJ1xcdTJBMTMnLFxuXHRzY3NpbTogJ1xcdTIyN0YnLFxuXHRTY3k6ICdcXHUwNDIxJyxcblx0c2N5OiAnXFx1MDQ0MScsXG5cdHNkb3Q6ICdcXHUyMkM1Jyxcblx0c2RvdGI6ICdcXHUyMkExJyxcblx0c2RvdGU6ICdcXHUyQTY2Jyxcblx0c2VhcmhrOiAnXFx1MjkyNScsXG5cdHNlQXJyOiAnXFx1MjFEOCcsXG5cdHNlYXJyOiAnXFx1MjE5OCcsXG5cdHNlYXJyb3c6ICdcXHUyMTk4Jyxcblx0c2VjdDogJ1xcdTAwQTcnLFxuXHRzZW1pOiAnXFx1MDAzQicsXG5cdHNlc3dhcjogJ1xcdTI5MjknLFxuXHRzZXRtaW51czogJ1xcdTIyMTYnLFxuXHRzZXRtbjogJ1xcdTIyMTYnLFxuXHRzZXh0OiAnXFx1MjczNicsXG5cdFNmcjogJ1xcdUQ4MzVcXHVERDE2Jyxcblx0c2ZyOiAnXFx1RDgzNVxcdUREMzAnLFxuXHRzZnJvd246ICdcXHUyMzIyJyxcblx0c2hhcnA6ICdcXHUyNjZGJyxcblx0U0hDSGN5OiAnXFx1MDQyOScsXG5cdHNoY2hjeTogJ1xcdTA0NDknLFxuXHRTSGN5OiAnXFx1MDQyOCcsXG5cdHNoY3k6ICdcXHUwNDQ4Jyxcblx0U2hvcnREb3duQXJyb3c6ICdcXHUyMTkzJyxcblx0U2hvcnRMZWZ0QXJyb3c6ICdcXHUyMTkwJyxcblx0c2hvcnRtaWQ6ICdcXHUyMjIzJyxcblx0c2hvcnRwYXJhbGxlbDogJ1xcdTIyMjUnLFxuXHRTaG9ydFJpZ2h0QXJyb3c6ICdcXHUyMTkyJyxcblx0U2hvcnRVcEFycm93OiAnXFx1MjE5MScsXG5cdHNoeTogJ1xcdTAwQUQnLFxuXHRTaWdtYTogJ1xcdTAzQTMnLFxuXHRzaWdtYTogJ1xcdTAzQzMnLFxuXHRzaWdtYWY6ICdcXHUwM0MyJyxcblx0c2lnbWF2OiAnXFx1MDNDMicsXG5cdHNpbTogJ1xcdTIyM0MnLFxuXHRzaW1kb3Q6ICdcXHUyQTZBJyxcblx0c2ltZTogJ1xcdTIyNDMnLFxuXHRzaW1lcTogJ1xcdTIyNDMnLFxuXHRzaW1nOiAnXFx1MkE5RScsXG5cdHNpbWdFOiAnXFx1MkFBMCcsXG5cdHNpbWw6ICdcXHUyQTlEJyxcblx0c2ltbEU6ICdcXHUyQTlGJyxcblx0c2ltbmU6ICdcXHUyMjQ2Jyxcblx0c2ltcGx1czogJ1xcdTJBMjQnLFxuXHRzaW1yYXJyOiAnXFx1Mjk3MicsXG5cdHNsYXJyOiAnXFx1MjE5MCcsXG5cdFNtYWxsQ2lyY2xlOiAnXFx1MjIxOCcsXG5cdHNtYWxsc2V0bWludXM6ICdcXHUyMjE2Jyxcblx0c21hc2hwOiAnXFx1MkEzMycsXG5cdHNtZXBhcnNsOiAnXFx1MjlFNCcsXG5cdHNtaWQ6ICdcXHUyMjIzJyxcblx0c21pbGU6ICdcXHUyMzIzJyxcblx0c210OiAnXFx1MkFBQScsXG5cdHNtdGU6ICdcXHUyQUFDJyxcblx0c210ZXM6ICdcXHUyQUFDXFx1RkUwMCcsXG5cdFNPRlRjeTogJ1xcdTA0MkMnLFxuXHRzb2Z0Y3k6ICdcXHUwNDRDJyxcblx0c29sOiAnXFx1MDAyRicsXG5cdHNvbGI6ICdcXHUyOUM0Jyxcblx0c29sYmFyOiAnXFx1MjMzRicsXG5cdFNvcGY6ICdcXHVEODM1XFx1REQ0QScsXG5cdHNvcGY6ICdcXHVEODM1XFx1REQ2NCcsXG5cdHNwYWRlczogJ1xcdTI2NjAnLFxuXHRzcGFkZXN1aXQ6ICdcXHUyNjYwJyxcblx0c3BhcjogJ1xcdTIyMjUnLFxuXHRzcWNhcDogJ1xcdTIyOTMnLFxuXHRzcWNhcHM6ICdcXHUyMjkzXFx1RkUwMCcsXG5cdHNxY3VwOiAnXFx1MjI5NCcsXG5cdHNxY3VwczogJ1xcdTIyOTRcXHVGRTAwJyxcblx0U3FydDogJ1xcdTIyMUEnLFxuXHRzcXN1YjogJ1xcdTIyOEYnLFxuXHRzcXN1YmU6ICdcXHUyMjkxJyxcblx0c3FzdWJzZXQ6ICdcXHUyMjhGJyxcblx0c3FzdWJzZXRlcTogJ1xcdTIyOTEnLFxuXHRzcXN1cDogJ1xcdTIyOTAnLFxuXHRzcXN1cGU6ICdcXHUyMjkyJyxcblx0c3FzdXBzZXQ6ICdcXHUyMjkwJyxcblx0c3FzdXBzZXRlcTogJ1xcdTIyOTInLFxuXHRzcXU6ICdcXHUyNUExJyxcblx0U3F1YXJlOiAnXFx1MjVBMScsXG5cdHNxdWFyZTogJ1xcdTI1QTEnLFxuXHRTcXVhcmVJbnRlcnNlY3Rpb246ICdcXHUyMjkzJyxcblx0U3F1YXJlU3Vic2V0OiAnXFx1MjI4RicsXG5cdFNxdWFyZVN1YnNldEVxdWFsOiAnXFx1MjI5MScsXG5cdFNxdWFyZVN1cGVyc2V0OiAnXFx1MjI5MCcsXG5cdFNxdWFyZVN1cGVyc2V0RXF1YWw6ICdcXHUyMjkyJyxcblx0U3F1YXJlVW5pb246ICdcXHUyMjk0Jyxcblx0c3F1YXJmOiAnXFx1MjVBQScsXG5cdHNxdWY6ICdcXHUyNUFBJyxcblx0c3JhcnI6ICdcXHUyMTkyJyxcblx0U3NjcjogJ1xcdUQ4MzVcXHVEQ0FFJyxcblx0c3NjcjogJ1xcdUQ4MzVcXHVEQ0M4Jyxcblx0c3NldG1uOiAnXFx1MjIxNicsXG5cdHNzbWlsZTogJ1xcdTIzMjMnLFxuXHRzc3RhcmY6ICdcXHUyMkM2Jyxcblx0U3RhcjogJ1xcdTIyQzYnLFxuXHRzdGFyOiAnXFx1MjYwNicsXG5cdHN0YXJmOiAnXFx1MjYwNScsXG5cdHN0cmFpZ2h0ZXBzaWxvbjogJ1xcdTAzRjUnLFxuXHRzdHJhaWdodHBoaTogJ1xcdTAzRDUnLFxuXHRzdHJuczogJ1xcdTAwQUYnLFxuXHRTdWI6ICdcXHUyMkQwJyxcblx0c3ViOiAnXFx1MjI4MicsXG5cdHN1YmRvdDogJ1xcdTJBQkQnLFxuXHRzdWJFOiAnXFx1MkFDNScsXG5cdHN1YmU6ICdcXHUyMjg2Jyxcblx0c3ViZWRvdDogJ1xcdTJBQzMnLFxuXHRzdWJtdWx0OiAnXFx1MkFDMScsXG5cdHN1Ym5FOiAnXFx1MkFDQicsXG5cdHN1Ym5lOiAnXFx1MjI4QScsXG5cdHN1YnBsdXM6ICdcXHUyQUJGJyxcblx0c3VicmFycjogJ1xcdTI5NzknLFxuXHRTdWJzZXQ6ICdcXHUyMkQwJyxcblx0c3Vic2V0OiAnXFx1MjI4MicsXG5cdHN1YnNldGVxOiAnXFx1MjI4NicsXG5cdHN1YnNldGVxcTogJ1xcdTJBQzUnLFxuXHRTdWJzZXRFcXVhbDogJ1xcdTIyODYnLFxuXHRzdWJzZXRuZXE6ICdcXHUyMjhBJyxcblx0c3Vic2V0bmVxcTogJ1xcdTJBQ0InLFxuXHRzdWJzaW06ICdcXHUyQUM3Jyxcblx0c3Vic3ViOiAnXFx1MkFENScsXG5cdHN1YnN1cDogJ1xcdTJBRDMnLFxuXHRzdWNjOiAnXFx1MjI3QicsXG5cdHN1Y2NhcHByb3g6ICdcXHUyQUI4Jyxcblx0c3VjY2N1cmx5ZXE6ICdcXHUyMjdEJyxcblx0U3VjY2VlZHM6ICdcXHUyMjdCJyxcblx0U3VjY2VlZHNFcXVhbDogJ1xcdTJBQjAnLFxuXHRTdWNjZWVkc1NsYW50RXF1YWw6ICdcXHUyMjdEJyxcblx0U3VjY2VlZHNUaWxkZTogJ1xcdTIyN0YnLFxuXHRzdWNjZXE6ICdcXHUyQUIwJyxcblx0c3VjY25hcHByb3g6ICdcXHUyQUJBJyxcblx0c3VjY25lcXE6ICdcXHUyQUI2Jyxcblx0c3VjY25zaW06ICdcXHUyMkU5Jyxcblx0c3VjY3NpbTogJ1xcdTIyN0YnLFxuXHRTdWNoVGhhdDogJ1xcdTIyMEInLFxuXHRTdW06ICdcXHUyMjExJyxcblx0c3VtOiAnXFx1MjIxMScsXG5cdHN1bmc6ICdcXHUyNjZBJyxcblx0U3VwOiAnXFx1MjJEMScsXG5cdHN1cDogJ1xcdTIyODMnLFxuXHRzdXAxOiAnXFx1MDBCOScsXG5cdHN1cDI6ICdcXHUwMEIyJyxcblx0c3VwMzogJ1xcdTAwQjMnLFxuXHRzdXBkb3Q6ICdcXHUyQUJFJyxcblx0c3VwZHN1YjogJ1xcdTJBRDgnLFxuXHRzdXBFOiAnXFx1MkFDNicsXG5cdHN1cGU6ICdcXHUyMjg3Jyxcblx0c3VwZWRvdDogJ1xcdTJBQzQnLFxuXHRTdXBlcnNldDogJ1xcdTIyODMnLFxuXHRTdXBlcnNldEVxdWFsOiAnXFx1MjI4NycsXG5cdHN1cGhzb2w6ICdcXHUyN0M5Jyxcblx0c3VwaHN1YjogJ1xcdTJBRDcnLFxuXHRzdXBsYXJyOiAnXFx1Mjk3QicsXG5cdHN1cG11bHQ6ICdcXHUyQUMyJyxcblx0c3VwbkU6ICdcXHUyQUNDJyxcblx0c3VwbmU6ICdcXHUyMjhCJyxcblx0c3VwcGx1czogJ1xcdTJBQzAnLFxuXHRTdXBzZXQ6ICdcXHUyMkQxJyxcblx0c3Vwc2V0OiAnXFx1MjI4MycsXG5cdHN1cHNldGVxOiAnXFx1MjI4NycsXG5cdHN1cHNldGVxcTogJ1xcdTJBQzYnLFxuXHRzdXBzZXRuZXE6ICdcXHUyMjhCJyxcblx0c3Vwc2V0bmVxcTogJ1xcdTJBQ0MnLFxuXHRzdXBzaW06ICdcXHUyQUM4Jyxcblx0c3Vwc3ViOiAnXFx1MkFENCcsXG5cdHN1cHN1cDogJ1xcdTJBRDYnLFxuXHRzd2FyaGs6ICdcXHUyOTI2Jyxcblx0c3dBcnI6ICdcXHUyMUQ5Jyxcblx0c3dhcnI6ICdcXHUyMTk5Jyxcblx0c3dhcnJvdzogJ1xcdTIxOTknLFxuXHRzd253YXI6ICdcXHUyOTJBJyxcblx0c3psaWc6ICdcXHUwMERGJyxcblx0VGFiOiAnXFx1MDAwOScsXG5cdHRhcmdldDogJ1xcdTIzMTYnLFxuXHRUYXU6ICdcXHUwM0E0Jyxcblx0dGF1OiAnXFx1MDNDNCcsXG5cdHRicms6ICdcXHUyM0I0Jyxcblx0VGNhcm9uOiAnXFx1MDE2NCcsXG5cdHRjYXJvbjogJ1xcdTAxNjUnLFxuXHRUY2VkaWw6ICdcXHUwMTYyJyxcblx0dGNlZGlsOiAnXFx1MDE2MycsXG5cdFRjeTogJ1xcdTA0MjInLFxuXHR0Y3k6ICdcXHUwNDQyJyxcblx0dGRvdDogJ1xcdTIwREInLFxuXHR0ZWxyZWM6ICdcXHUyMzE1Jyxcblx0VGZyOiAnXFx1RDgzNVxcdUREMTcnLFxuXHR0ZnI6ICdcXHVEODM1XFx1REQzMScsXG5cdHRoZXJlNDogJ1xcdTIyMzQnLFxuXHRUaGVyZWZvcmU6ICdcXHUyMjM0Jyxcblx0dGhlcmVmb3JlOiAnXFx1MjIzNCcsXG5cdFRoZXRhOiAnXFx1MDM5OCcsXG5cdHRoZXRhOiAnXFx1MDNCOCcsXG5cdHRoZXRhc3ltOiAnXFx1MDNEMScsXG5cdHRoZXRhdjogJ1xcdTAzRDEnLFxuXHR0aGlja2FwcHJveDogJ1xcdTIyNDgnLFxuXHR0aGlja3NpbTogJ1xcdTIyM0MnLFxuXHRUaGlja1NwYWNlOiAnXFx1MjA1RlxcdTIwMEEnLFxuXHR0aGluc3A6ICdcXHUyMDA5Jyxcblx0VGhpblNwYWNlOiAnXFx1MjAwOScsXG5cdHRoa2FwOiAnXFx1MjI0OCcsXG5cdHRoa3NpbTogJ1xcdTIyM0MnLFxuXHRUSE9STjogJ1xcdTAwREUnLFxuXHR0aG9ybjogJ1xcdTAwRkUnLFxuXHRUaWxkZTogJ1xcdTIyM0MnLFxuXHR0aWxkZTogJ1xcdTAyREMnLFxuXHRUaWxkZUVxdWFsOiAnXFx1MjI0MycsXG5cdFRpbGRlRnVsbEVxdWFsOiAnXFx1MjI0NScsXG5cdFRpbGRlVGlsZGU6ICdcXHUyMjQ4Jyxcblx0dGltZXM6ICdcXHUwMEQ3Jyxcblx0dGltZXNiOiAnXFx1MjJBMCcsXG5cdHRpbWVzYmFyOiAnXFx1MkEzMScsXG5cdHRpbWVzZDogJ1xcdTJBMzAnLFxuXHR0aW50OiAnXFx1MjIyRCcsXG5cdHRvZWE6ICdcXHUyOTI4Jyxcblx0dG9wOiAnXFx1MjJBNCcsXG5cdHRvcGJvdDogJ1xcdTIzMzYnLFxuXHR0b3BjaXI6ICdcXHUyQUYxJyxcblx0VG9wZjogJ1xcdUQ4MzVcXHVERDRCJyxcblx0dG9wZjogJ1xcdUQ4MzVcXHVERDY1Jyxcblx0dG9wZm9yazogJ1xcdTJBREEnLFxuXHR0b3NhOiAnXFx1MjkyOScsXG5cdHRwcmltZTogJ1xcdTIwMzQnLFxuXHRUUkFERTogJ1xcdTIxMjInLFxuXHR0cmFkZTogJ1xcdTIxMjInLFxuXHR0cmlhbmdsZTogJ1xcdTI1QjUnLFxuXHR0cmlhbmdsZWRvd246ICdcXHUyNUJGJyxcblx0dHJpYW5nbGVsZWZ0OiAnXFx1MjVDMycsXG5cdHRyaWFuZ2xlbGVmdGVxOiAnXFx1MjJCNCcsXG5cdHRyaWFuZ2xlcTogJ1xcdTIyNUMnLFxuXHR0cmlhbmdsZXJpZ2h0OiAnXFx1MjVCOScsXG5cdHRyaWFuZ2xlcmlnaHRlcTogJ1xcdTIyQjUnLFxuXHR0cmlkb3Q6ICdcXHUyNUVDJyxcblx0dHJpZTogJ1xcdTIyNUMnLFxuXHR0cmltaW51czogJ1xcdTJBM0EnLFxuXHRUcmlwbGVEb3Q6ICdcXHUyMERCJyxcblx0dHJpcGx1czogJ1xcdTJBMzknLFxuXHR0cmlzYjogJ1xcdTI5Q0QnLFxuXHR0cml0aW1lOiAnXFx1MkEzQicsXG5cdHRycGV6aXVtOiAnXFx1MjNFMicsXG5cdFRzY3I6ICdcXHVEODM1XFx1RENBRicsXG5cdHRzY3I6ICdcXHVEODM1XFx1RENDOScsXG5cdFRTY3k6ICdcXHUwNDI2Jyxcblx0dHNjeTogJ1xcdTA0NDYnLFxuXHRUU0hjeTogJ1xcdTA0MEInLFxuXHR0c2hjeTogJ1xcdTA0NUInLFxuXHRUc3Ryb2s6ICdcXHUwMTY2Jyxcblx0dHN0cm9rOiAnXFx1MDE2NycsXG5cdHR3aXh0OiAnXFx1MjI2QycsXG5cdHR3b2hlYWRsZWZ0YXJyb3c6ICdcXHUyMTlFJyxcblx0dHdvaGVhZHJpZ2h0YXJyb3c6ICdcXHUyMUEwJyxcblx0VWFjdXRlOiAnXFx1MDBEQScsXG5cdHVhY3V0ZTogJ1xcdTAwRkEnLFxuXHRVYXJyOiAnXFx1MjE5RicsXG5cdHVBcnI6ICdcXHUyMUQxJyxcblx0dWFycjogJ1xcdTIxOTEnLFxuXHRVYXJyb2NpcjogJ1xcdTI5NDknLFxuXHRVYnJjeTogJ1xcdTA0MEUnLFxuXHR1YnJjeTogJ1xcdTA0NUUnLFxuXHRVYnJldmU6ICdcXHUwMTZDJyxcblx0dWJyZXZlOiAnXFx1MDE2RCcsXG5cdFVjaXJjOiAnXFx1MDBEQicsXG5cdHVjaXJjOiAnXFx1MDBGQicsXG5cdFVjeTogJ1xcdTA0MjMnLFxuXHR1Y3k6ICdcXHUwNDQzJyxcblx0dWRhcnI6ICdcXHUyMUM1Jyxcblx0VWRibGFjOiAnXFx1MDE3MCcsXG5cdHVkYmxhYzogJ1xcdTAxNzEnLFxuXHR1ZGhhcjogJ1xcdTI5NkUnLFxuXHR1ZmlzaHQ6ICdcXHUyOTdFJyxcblx0VWZyOiAnXFx1RDgzNVxcdUREMTgnLFxuXHR1ZnI6ICdcXHVEODM1XFx1REQzMicsXG5cdFVncmF2ZTogJ1xcdTAwRDknLFxuXHR1Z3JhdmU6ICdcXHUwMEY5Jyxcblx0dUhhcjogJ1xcdTI5NjMnLFxuXHR1aGFybDogJ1xcdTIxQkYnLFxuXHR1aGFycjogJ1xcdTIxQkUnLFxuXHR1aGJsazogJ1xcdTI1ODAnLFxuXHR1bGNvcm46ICdcXHUyMzFDJyxcblx0dWxjb3JuZXI6ICdcXHUyMzFDJyxcblx0dWxjcm9wOiAnXFx1MjMwRicsXG5cdHVsdHJpOiAnXFx1MjVGOCcsXG5cdFVtYWNyOiAnXFx1MDE2QScsXG5cdHVtYWNyOiAnXFx1MDE2QicsXG5cdHVtbDogJ1xcdTAwQTgnLFxuXHRVbmRlckJhcjogJ1xcdTAwNUYnLFxuXHRVbmRlckJyYWNlOiAnXFx1MjNERicsXG5cdFVuZGVyQnJhY2tldDogJ1xcdTIzQjUnLFxuXHRVbmRlclBhcmVudGhlc2lzOiAnXFx1MjNERCcsXG5cdFVuaW9uOiAnXFx1MjJDMycsXG5cdFVuaW9uUGx1czogJ1xcdTIyOEUnLFxuXHRVb2dvbjogJ1xcdTAxNzInLFxuXHR1b2dvbjogJ1xcdTAxNzMnLFxuXHRVb3BmOiAnXFx1RDgzNVxcdURENEMnLFxuXHR1b3BmOiAnXFx1RDgzNVxcdURENjYnLFxuXHRVcEFycm93OiAnXFx1MjE5MScsXG5cdFVwYXJyb3c6ICdcXHUyMUQxJyxcblx0dXBhcnJvdzogJ1xcdTIxOTEnLFxuXHRVcEFycm93QmFyOiAnXFx1MjkxMicsXG5cdFVwQXJyb3dEb3duQXJyb3c6ICdcXHUyMUM1Jyxcblx0VXBEb3duQXJyb3c6ICdcXHUyMTk1Jyxcblx0VXBkb3duYXJyb3c6ICdcXHUyMUQ1Jyxcblx0dXBkb3duYXJyb3c6ICdcXHUyMTk1Jyxcblx0VXBFcXVpbGlicml1bTogJ1xcdTI5NkUnLFxuXHR1cGhhcnBvb25sZWZ0OiAnXFx1MjFCRicsXG5cdHVwaGFycG9vbnJpZ2h0OiAnXFx1MjFCRScsXG5cdHVwbHVzOiAnXFx1MjI4RScsXG5cdFVwcGVyTGVmdEFycm93OiAnXFx1MjE5NicsXG5cdFVwcGVyUmlnaHRBcnJvdzogJ1xcdTIxOTcnLFxuXHRVcHNpOiAnXFx1MDNEMicsXG5cdHVwc2k6ICdcXHUwM0M1Jyxcblx0dXBzaWg6ICdcXHUwM0QyJyxcblx0VXBzaWxvbjogJ1xcdTAzQTUnLFxuXHR1cHNpbG9uOiAnXFx1MDNDNScsXG5cdFVwVGVlOiAnXFx1MjJBNScsXG5cdFVwVGVlQXJyb3c6ICdcXHUyMUE1Jyxcblx0dXB1cGFycm93czogJ1xcdTIxQzgnLFxuXHR1cmNvcm46ICdcXHUyMzFEJyxcblx0dXJjb3JuZXI6ICdcXHUyMzFEJyxcblx0dXJjcm9wOiAnXFx1MjMwRScsXG5cdFVyaW5nOiAnXFx1MDE2RScsXG5cdHVyaW5nOiAnXFx1MDE2RicsXG5cdHVydHJpOiAnXFx1MjVGOScsXG5cdFVzY3I6ICdcXHVEODM1XFx1RENCMCcsXG5cdHVzY3I6ICdcXHVEODM1XFx1RENDQScsXG5cdHV0ZG90OiAnXFx1MjJGMCcsXG5cdFV0aWxkZTogJ1xcdTAxNjgnLFxuXHR1dGlsZGU6ICdcXHUwMTY5Jyxcblx0dXRyaTogJ1xcdTI1QjUnLFxuXHR1dHJpZjogJ1xcdTI1QjQnLFxuXHR1dWFycjogJ1xcdTIxQzgnLFxuXHRVdW1sOiAnXFx1MDBEQycsXG5cdHV1bWw6ICdcXHUwMEZDJyxcblx0dXdhbmdsZTogJ1xcdTI5QTcnLFxuXHR2YW5ncnQ6ICdcXHUyOTlDJyxcblx0dmFyZXBzaWxvbjogJ1xcdTAzRjUnLFxuXHR2YXJrYXBwYTogJ1xcdTAzRjAnLFxuXHR2YXJub3RoaW5nOiAnXFx1MjIwNScsXG5cdHZhcnBoaTogJ1xcdTAzRDUnLFxuXHR2YXJwaTogJ1xcdTAzRDYnLFxuXHR2YXJwcm9wdG86ICdcXHUyMjFEJyxcblx0dkFycjogJ1xcdTIxRDUnLFxuXHR2YXJyOiAnXFx1MjE5NScsXG5cdHZhcnJobzogJ1xcdTAzRjEnLFxuXHR2YXJzaWdtYTogJ1xcdTAzQzInLFxuXHR2YXJzdWJzZXRuZXE6ICdcXHUyMjhBXFx1RkUwMCcsXG5cdHZhcnN1YnNldG5lcXE6ICdcXHUyQUNCXFx1RkUwMCcsXG5cdHZhcnN1cHNldG5lcTogJ1xcdTIyOEJcXHVGRTAwJyxcblx0dmFyc3Vwc2V0bmVxcTogJ1xcdTJBQ0NcXHVGRTAwJyxcblx0dmFydGhldGE6ICdcXHUwM0QxJyxcblx0dmFydHJpYW5nbGVsZWZ0OiAnXFx1MjJCMicsXG5cdHZhcnRyaWFuZ2xlcmlnaHQ6ICdcXHUyMkIzJyxcblx0VmJhcjogJ1xcdTJBRUInLFxuXHR2QmFyOiAnXFx1MkFFOCcsXG5cdHZCYXJ2OiAnXFx1MkFFOScsXG5cdFZjeTogJ1xcdTA0MTInLFxuXHR2Y3k6ICdcXHUwNDMyJyxcblx0VkRhc2g6ICdcXHUyMkFCJyxcblx0VmRhc2g6ICdcXHUyMkE5Jyxcblx0dkRhc2g6ICdcXHUyMkE4Jyxcblx0dmRhc2g6ICdcXHUyMkEyJyxcblx0VmRhc2hsOiAnXFx1MkFFNicsXG5cdFZlZTogJ1xcdTIyQzEnLFxuXHR2ZWU6ICdcXHUyMjI4Jyxcblx0dmVlYmFyOiAnXFx1MjJCQicsXG5cdHZlZWVxOiAnXFx1MjI1QScsXG5cdHZlbGxpcDogJ1xcdTIyRUUnLFxuXHRWZXJiYXI6ICdcXHUyMDE2Jyxcblx0dmVyYmFyOiAnXFx1MDA3QycsXG5cdFZlcnQ6ICdcXHUyMDE2Jyxcblx0dmVydDogJ1xcdTAwN0MnLFxuXHRWZXJ0aWNhbEJhcjogJ1xcdTIyMjMnLFxuXHRWZXJ0aWNhbExpbmU6ICdcXHUwMDdDJyxcblx0VmVydGljYWxTZXBhcmF0b3I6ICdcXHUyNzU4Jyxcblx0VmVydGljYWxUaWxkZTogJ1xcdTIyNDAnLFxuXHRWZXJ5VGhpblNwYWNlOiAnXFx1MjAwQScsXG5cdFZmcjogJ1xcdUQ4MzVcXHVERDE5Jyxcblx0dmZyOiAnXFx1RDgzNVxcdUREMzMnLFxuXHR2bHRyaTogJ1xcdTIyQjInLFxuXHR2bnN1YjogJ1xcdTIyODJcXHUyMEQyJyxcblx0dm5zdXA6ICdcXHUyMjgzXFx1MjBEMicsXG5cdFZvcGY6ICdcXHVEODM1XFx1REQ0RCcsXG5cdHZvcGY6ICdcXHVEODM1XFx1REQ2NycsXG5cdHZwcm9wOiAnXFx1MjIxRCcsXG5cdHZydHJpOiAnXFx1MjJCMycsXG5cdFZzY3I6ICdcXHVEODM1XFx1RENCMScsXG5cdHZzY3I6ICdcXHVEODM1XFx1RENDQicsXG5cdHZzdWJuRTogJ1xcdTJBQ0JcXHVGRTAwJyxcblx0dnN1Ym5lOiAnXFx1MjI4QVxcdUZFMDAnLFxuXHR2c3VwbkU6ICdcXHUyQUNDXFx1RkUwMCcsXG5cdHZzdXBuZTogJ1xcdTIyOEJcXHVGRTAwJyxcblx0VnZkYXNoOiAnXFx1MjJBQScsXG5cdHZ6aWd6YWc6ICdcXHUyOTlBJyxcblx0V2NpcmM6ICdcXHUwMTc0Jyxcblx0d2NpcmM6ICdcXHUwMTc1Jyxcblx0d2VkYmFyOiAnXFx1MkE1RicsXG5cdFdlZGdlOiAnXFx1MjJDMCcsXG5cdHdlZGdlOiAnXFx1MjIyNycsXG5cdHdlZGdlcTogJ1xcdTIyNTknLFxuXHR3ZWllcnA6ICdcXHUyMTE4Jyxcblx0V2ZyOiAnXFx1RDgzNVxcdUREMUEnLFxuXHR3ZnI6ICdcXHVEODM1XFx1REQzNCcsXG5cdFdvcGY6ICdcXHVEODM1XFx1REQ0RScsXG5cdHdvcGY6ICdcXHVEODM1XFx1REQ2OCcsXG5cdHdwOiAnXFx1MjExOCcsXG5cdHdyOiAnXFx1MjI0MCcsXG5cdHdyZWF0aDogJ1xcdTIyNDAnLFxuXHRXc2NyOiAnXFx1RDgzNVxcdURDQjInLFxuXHR3c2NyOiAnXFx1RDgzNVxcdURDQ0MnLFxuXHR4Y2FwOiAnXFx1MjJDMicsXG5cdHhjaXJjOiAnXFx1MjVFRicsXG5cdHhjdXA6ICdcXHUyMkMzJyxcblx0eGR0cmk6ICdcXHUyNUJEJyxcblx0WGZyOiAnXFx1RDgzNVxcdUREMUInLFxuXHR4ZnI6ICdcXHVEODM1XFx1REQzNScsXG5cdHhoQXJyOiAnXFx1MjdGQScsXG5cdHhoYXJyOiAnXFx1MjdGNycsXG5cdFhpOiAnXFx1MDM5RScsXG5cdHhpOiAnXFx1MDNCRScsXG5cdHhsQXJyOiAnXFx1MjdGOCcsXG5cdHhsYXJyOiAnXFx1MjdGNScsXG5cdHhtYXA6ICdcXHUyN0ZDJyxcblx0eG5pczogJ1xcdTIyRkInLFxuXHR4b2RvdDogJ1xcdTJBMDAnLFxuXHRYb3BmOiAnXFx1RDgzNVxcdURENEYnLFxuXHR4b3BmOiAnXFx1RDgzNVxcdURENjknLFxuXHR4b3BsdXM6ICdcXHUyQTAxJyxcblx0eG90aW1lOiAnXFx1MkEwMicsXG5cdHhyQXJyOiAnXFx1MjdGOScsXG5cdHhyYXJyOiAnXFx1MjdGNicsXG5cdFhzY3I6ICdcXHVEODM1XFx1RENCMycsXG5cdHhzY3I6ICdcXHVEODM1XFx1RENDRCcsXG5cdHhzcWN1cDogJ1xcdTJBMDYnLFxuXHR4dXBsdXM6ICdcXHUyQTA0Jyxcblx0eHV0cmk6ICdcXHUyNUIzJyxcblx0eHZlZTogJ1xcdTIyQzEnLFxuXHR4d2VkZ2U6ICdcXHUyMkMwJyxcblx0WWFjdXRlOiAnXFx1MDBERCcsXG5cdHlhY3V0ZTogJ1xcdTAwRkQnLFxuXHRZQWN5OiAnXFx1MDQyRicsXG5cdHlhY3k6ICdcXHUwNDRGJyxcblx0WWNpcmM6ICdcXHUwMTc2Jyxcblx0eWNpcmM6ICdcXHUwMTc3Jyxcblx0WWN5OiAnXFx1MDQyQicsXG5cdHljeTogJ1xcdTA0NEInLFxuXHR5ZW46ICdcXHUwMEE1Jyxcblx0WWZyOiAnXFx1RDgzNVxcdUREMUMnLFxuXHR5ZnI6ICdcXHVEODM1XFx1REQzNicsXG5cdFlJY3k6ICdcXHUwNDA3Jyxcblx0eWljeTogJ1xcdTA0NTcnLFxuXHRZb3BmOiAnXFx1RDgzNVxcdURENTAnLFxuXHR5b3BmOiAnXFx1RDgzNVxcdURENkEnLFxuXHRZc2NyOiAnXFx1RDgzNVxcdURDQjQnLFxuXHR5c2NyOiAnXFx1RDgzNVxcdURDQ0UnLFxuXHRZVWN5OiAnXFx1MDQyRScsXG5cdHl1Y3k6ICdcXHUwNDRFJyxcblx0WXVtbDogJ1xcdTAxNzgnLFxuXHR5dW1sOiAnXFx1MDBGRicsXG5cdFphY3V0ZTogJ1xcdTAxNzknLFxuXHR6YWN1dGU6ICdcXHUwMTdBJyxcblx0WmNhcm9uOiAnXFx1MDE3RCcsXG5cdHpjYXJvbjogJ1xcdTAxN0UnLFxuXHRaY3k6ICdcXHUwNDE3Jyxcblx0emN5OiAnXFx1MDQzNycsXG5cdFpkb3Q6ICdcXHUwMTdCJyxcblx0emRvdDogJ1xcdTAxN0MnLFxuXHR6ZWV0cmY6ICdcXHUyMTI4Jyxcblx0WmVyb1dpZHRoU3BhY2U6ICdcXHUyMDBCJyxcblx0WmV0YTogJ1xcdTAzOTYnLFxuXHR6ZXRhOiAnXFx1MDNCNicsXG5cdFpmcjogJ1xcdTIxMjgnLFxuXHR6ZnI6ICdcXHVEODM1XFx1REQzNycsXG5cdFpIY3k6ICdcXHUwNDE2Jyxcblx0emhjeTogJ1xcdTA0MzYnLFxuXHR6aWdyYXJyOiAnXFx1MjFERCcsXG5cdFpvcGY6ICdcXHUyMTI0Jyxcblx0em9wZjogJ1xcdUQ4MzVcXHVERDZCJyxcblx0WnNjcjogJ1xcdUQ4MzVcXHVEQ0I1Jyxcblx0enNjcjogJ1xcdUQ4MzVcXHVEQ0NGJyxcblx0endqOiAnXFx1MjAwRCcsXG5cdHp3bmo6ICdcXHUyMDBDJyxcbn0pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBgSFRNTF9FTlRJVElFU2AgaW5zdGVhZFxuICogQHNlZSBIVE1MX0VOVElUSUVTXG4gKi9cbmV4cG9ydHMuZW50aXR5TWFwID0gZXhwb3J0cy5IVE1MX0VOVElUSUVTO1xuIiwidmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJylcbmV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSBkb20uRE9NSW1wbGVtZW50YXRpb25cbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IGRvbS5YTUxTZXJpYWxpemVyXG5leHBvcnRzLkRPTVBhcnNlciA9IHJlcXVpcmUoJy4vZG9tLXBhcnNlcicpLkRPTVBhcnNlclxuIiwidmFyIE5BTUVTUEFDRSA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpLk5BTUVTUEFDRTtcblxuLy9bNF0gICBcdE5hbWVTdGFydENoYXJcdCAgIDo6PSAgIFx0XCI6XCIgfCBbQS1aXSB8IFwiX1wiIHwgW2Etel0gfCBbI3hDMC0jeEQ2XSB8IFsjeEQ4LSN4RjZdIHwgWyN4RjgtI3gyRkZdIHwgWyN4MzcwLSN4MzdEXSB8IFsjeDM3Ri0jeDFGRkZdIHwgWyN4MjAwQy0jeDIwMERdIHwgWyN4MjA3MC0jeDIxOEZdIHwgWyN4MkMwMC0jeDJGRUZdIHwgWyN4MzAwMS0jeEQ3RkZdIHwgWyN4RjkwMC0jeEZEQ0ZdIHwgWyN4RkRGMC0jeEZGRkRdIHwgWyN4MTAwMDAtI3hFRkZGRl1cbi8vWzRhXSAgIFx0TmFtZUNoYXJcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciB8IFwiLVwiIHwgXCIuXCIgfCBbMC05XSB8ICN4QjcgfCBbI3gwMzAwLSN4MDM2Rl0gfCBbI3gyMDNGLSN4MjA0MF1cbi8vWzVdICAgXHROYW1lXHQgICA6Oj0gICBcdE5hbWVTdGFydENoYXIgKE5hbWVDaGFyKSpcbnZhciBuYW1lU3RhcnRDaGFyID0gL1tBLVpfYS16XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vLy9cXHUxMDAwMC1cXHVFRkZGRlxudmFyIG5hbWVDaGFyID0gbmV3IFJlZ0V4cChcIltcXFxcLVxcXFwuMC05XCIrbmFtZVN0YXJ0Q2hhci5zb3VyY2Uuc2xpY2UoMSwtMSkrXCJcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MF1cIik7XG52YXIgdGFnTmFtZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeJytuYW1lU3RhcnRDaGFyLnNvdXJjZStuYW1lQ2hhci5zb3VyY2UrJyooPzpcXDonK25hbWVTdGFydENoYXIuc291cmNlK25hbWVDaGFyLnNvdXJjZSsnKik/JCcpO1xuLy92YXIgdGFnTmFtZVBhdHRlcm4gPSAvXlthLXpBLVpfXVtcXHdcXC1cXC5dKig/OlxcOlthLXpBLVpfXVtcXHdcXC1cXC5dKik/JC9cbi8vdmFyIGhhbmRsZXJzID0gJ3Jlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsY2hhcmFjdGVycyxlbmREb2N1bWVudCxlbmRFbGVtZW50LGVuZFByZWZpeE1hcHBpbmcsaWdub3JhYmxlV2hpdGVzcGFjZSxwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sc2V0RG9jdW1lbnRMb2NhdG9yLHNraXBwZWRFbnRpdHksc3RhcnREb2N1bWVudCxzdGFydEVsZW1lbnQsc3RhcnRQcmVmaXhNYXBwaW5nLG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2wsZXJyb3IsZmF0YWxFcnJvcix3YXJuaW5nLGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxjb21tZW50LGVuZENEQVRBLGVuZERURCxlbmRFbnRpdHksc3RhcnRDREFUQSxzdGFydERURCxzdGFydEVudGl0eScuc3BsaXQoJywnKVxuXG4vL1NfVEFHLFx0U19BVFRSLFx0U19FUSxcdFNfQVRUUl9OT1FVT1RfVkFMVUVcbi8vU19BVFRSX1NQQUNFLFx0U19BVFRSX0VORCxcdFNfVEFHX1NQQUNFLCBTX1RBR19DTE9TRVxudmFyIFNfVEFHID0gMDsvL3RhZyBuYW1lIG9mZmVycmluZ1xudmFyIFNfQVRUUiA9IDE7Ly9hdHRyIG5hbWUgb2ZmZXJyaW5nXG52YXIgU19BVFRSX1NQQUNFPTI7Ly9hdHRyIG5hbWUgZW5kIGFuZCBzcGFjZSBvZmZlclxudmFyIFNfRVEgPSAzOy8vPXNwYWNlP1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0Oy8vYXR0ciB2YWx1ZShubyBxdW90IHZhbHVlIG9ubHkpXG52YXIgU19BVFRSX0VORCA9IDU7Ly9hdHRyIHZhbHVlIGVuZCBhbmQgbm8gc3BhY2UocXVvdCBlbmQpXG52YXIgU19UQUdfU1BBQ0UgPSA2Oy8vKGF0dHIgdmFsdWUgZW5kIHx8IHRhZyBlbmQgKSAmJiAoc3BhY2Ugb2ZmZXIpXG52YXIgU19UQUdfQ0xPU0UgPSA3Oy8vY2xvc2VkIGVsPGVsIC8+XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlcnJvciB0aGF0IHdpbGwgbm90IGJlIGNhdWdodCBieSBYTUxSZWFkZXIgYWthIHRoZSBTQVggcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge2FueT99IGxvY2F0b3IgT3B0aW9uYWwsIGNhbiBwcm92aWRlIGRldGFpbHMgYWJvdXQgdGhlIGxvY2F0aW9uIGluIHRoZSBzb3VyY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJzZUVycm9yKG1lc3NhZ2UsIGxvY2F0b3IpIHtcblx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuXHR0aGlzLmxvY2F0b3IgPSBsb2NhdG9yXG5cdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBQYXJzZUVycm9yKTtcbn1cblBhcnNlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5QYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gUGFyc2VFcnJvci5uYW1lXG5cbmZ1bmN0aW9uIFhNTFJlYWRlcigpe1xuXG59XG5cblhNTFJlYWRlci5wcm90b3R5cGUgPSB7XG5cdHBhcnNlOmZ1bmN0aW9uKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwKXtcblx0XHR2YXIgZG9tQnVpbGRlciA9IHRoaXMuZG9tQnVpbGRlcjtcblx0XHRkb21CdWlsZGVyLnN0YXJ0RG9jdW1lbnQoKTtcblx0XHRfY29weShkZWZhdWx0TlNNYXAgLGRlZmF1bHROU01hcCA9IHt9KVxuXHRcdHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwLFxuXHRcdFx0XHRkb21CdWlsZGVyLHRoaXMuZXJyb3JIYW5kbGVyKTtcblx0XHRkb21CdWlsZGVyLmVuZERvY3VtZW50KCk7XG5cdH1cbn1cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXBDb3B5LGVudGl0eU1hcCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcil7XG5cdGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcblx0XHQvLyBTdHJpbmcucHJvdG90eXBlLmZyb21DaGFyQ29kZSBkb2VzIG5vdCBzdXBwb3J0c1xuXHRcdC8vID4gMiBieXRlcyB1bmljb2RlIGNoYXJzIGRpcmVjdGx5XG5cdFx0aWYgKGNvZGUgPiAweGZmZmYpIHtcblx0XHRcdGNvZGUgLT0gMHgxMDAwMDtcblx0XHRcdHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGNvZGUgPj4gMTApXG5cdFx0XHRcdCwgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjb2RlICYgMHgzZmYpO1xuXG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGVudGl0eVJlcGxhY2VyKGEpe1xuXHRcdHZhciBrID0gYS5zbGljZSgxLC0xKTtcblx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZW50aXR5TWFwLCBrKSkge1xuXHRcdFx0cmV0dXJuIGVudGl0eU1hcFtrXTtcblx0XHR9ZWxzZSBpZihrLmNoYXJBdCgwKSA9PT0gJyMnKXtcblx0XHRcdHJldHVybiBmaXhlZEZyb21DaGFyQ29kZShwYXJzZUludChrLnN1YnN0cigxKS5yZXBsYWNlKCd4JywnMHgnKSkpXG5cdFx0fWVsc2V7XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JythKTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhcHBlbmRUZXh0KGVuZCl7Ly9oYXMgc29tZSBidWdzXG5cdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdHZhciB4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHN0YXJ0KTtcblx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh4dCwwLGVuZC1zdGFydCk7XG5cdFx0XHRzdGFydCA9IGVuZFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwb3NpdGlvbihwLG0pe1xuXHRcdHdoaWxlKHA+PWxpbmVFbmQgJiYgKG0gPSBsaW5lUGF0dGVybi5leGVjKHNvdXJjZSkpKXtcblx0XHRcdGxpbmVTdGFydCA9IG0uaW5kZXg7XG5cdFx0XHRsaW5lRW5kID0gbGluZVN0YXJ0ICsgbVswXS5sZW5ndGg7XG5cdFx0XHRsb2NhdG9yLmxpbmVOdW1iZXIrKztcblx0XHRcdC8vY29uc29sZS5sb2coJ2xpbmUrKzonLGxvY2F0b3Isc3RhcnRQb3MsZW5kUG9zKVxuXHRcdH1cblx0XHRsb2NhdG9yLmNvbHVtbk51bWJlciA9IHAtbGluZVN0YXJ0KzE7XG5cdH1cblx0dmFyIGxpbmVTdGFydCA9IDA7XG5cdHZhciBsaW5lRW5kID0gMDtcblx0dmFyIGxpbmVQYXR0ZXJuID0gLy4qKD86XFxyXFxuP3xcXG4pfC4qJC9nXG5cdHZhciBsb2NhdG9yID0gZG9tQnVpbGRlci5sb2NhdG9yO1xuXG5cdHZhciBwYXJzZVN0YWNrID0gW3tjdXJyZW50TlNNYXA6ZGVmYXVsdE5TTWFwQ29weX1dXG5cdHZhciBjbG9zZU1hcCA9IHt9O1xuXHR2YXIgc3RhcnQgPSAwO1xuXHR3aGlsZSh0cnVlKXtcblx0XHR0cnl7XG5cdFx0XHR2YXIgdGFnU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPCcsc3RhcnQpO1xuXHRcdFx0aWYodGFnU3RhcnQ8MCl7XG5cdFx0XHRcdGlmKCFzb3VyY2Uuc3Vic3RyKHN0YXJ0KS5tYXRjaCgvXlxccyokLykpe1xuXHRcdFx0XHRcdHZhciBkb2MgPSBkb21CdWlsZGVyLmRvYztcblx0ICAgIFx0XHRcdHZhciB0ZXh0ID0gZG9jLmNyZWF0ZVRleHROb2RlKHNvdXJjZS5zdWJzdHIoc3RhcnQpKTtcblx0ICAgIFx0XHRcdGRvYy5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0ICAgIFx0XHRcdGRvbUJ1aWxkZXIuY3VycmVudEVsZW1lbnQgPSB0ZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmKHRhZ1N0YXJ0PnN0YXJ0KXtcblx0XHRcdFx0YXBwZW5kVGV4dCh0YWdTdGFydCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2goc291cmNlLmNoYXJBdCh0YWdTdGFydCsxKSl7XG5cdFx0XHRjYXNlICcvJzpcblx0XHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc+Jyx0YWdTdGFydCszKTtcblx0XHRcdFx0dmFyIHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0ICsgMiwgZW5kKS5yZXBsYWNlKC9bIFxcdFxcblxccl0rJC9nLCAnJyk7XG5cdFx0XHRcdHZhciBjb25maWcgPSBwYXJzZVN0YWNrLnBvcCgpO1xuXHRcdFx0XHRpZihlbmQ8MCl7XG5cblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQrMikucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgaXMgbm90IGNvbXBsZXRlOicrY29uZmlnLnRhZ05hbWUpO1xuXHQgICAgICAgIFx0XHRlbmQgPSB0YWdTdGFydCsxK3RhZ05hbWUubGVuZ3RoO1xuXHQgICAgICAgIFx0fWVsc2UgaWYodGFnTmFtZS5tYXRjaCgvXFxzPC8pKXtcblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgbWF5YmUgbm90IGNvbXBsZXRlJyk7XG5cdCAgICAgICAgXHRcdGVuZCA9IHRhZ1N0YXJ0KzErdGFnTmFtZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGxvY2FsTlNNYXAgPSBjb25maWcubG9jYWxOU01hcDtcblx0XHRcdFx0dmFyIGVuZE1hdGNoID0gY29uZmlnLnRhZ05hbWUgPT0gdGFnTmFtZTtcblx0XHRcdFx0dmFyIGVuZElnbm9yZUNhc2VNYWNoID0gZW5kTWF0Y2ggfHwgY29uZmlnLnRhZ05hbWUmJmNvbmZpZy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0ICAgICAgICBpZihlbmRJZ25vcmVDYXNlTWFjaCl7XG5cdFx0ICAgICAgICBcdGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLGNvbmZpZy5sb2NhbE5hbWUsdGFnTmFtZSk7XG5cdFx0XHRcdFx0aWYobG9jYWxOU01hcCl7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvY2FsTlNNYXAsIHByZWZpeCkpIHtcblx0XHRcdFx0XHRcdFx0XHRkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZighZW5kTWF0Y2gpe1xuXHRcdCAgICAgICAgICAgIFx0ZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBpcyBub3QgbWF0Y2ggdGhlIGN1cnJlbnQgc3RhcnQgdGFnTmFtZTonK2NvbmZpZy50YWdOYW1lICk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0XHRcdH1cblx0XHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgXHRwYXJzZVN0YWNrLnB1c2goY29uZmlnKVxuXHRcdCAgICAgICAgfVxuXG5cdFx0XHRcdGVuZCsrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Ly8gZW5kIGVsbWVudFxuXHRcdFx0Y2FzZSAnPyc6Ly8gPD8uLi4/PlxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdGVuZCA9IHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLHRhZ1N0YXJ0LGRvbUJ1aWxkZXIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJyEnOi8vIDwhZG9jdHlwZSw8IVtDREFUQSw8IS0tXG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0ZW5kID0gcGFyc2VEQ0Moc291cmNlLHRhZ1N0YXJ0LGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdHZhciBlbCA9IG5ldyBFbGVtZW50QXR0cmlidXRlcygpO1xuXHRcdFx0XHR2YXIgY3VycmVudE5TTWFwID0gcGFyc2VTdGFja1twYXJzZVN0YWNrLmxlbmd0aC0xXS5jdXJyZW50TlNNYXA7XG5cdFx0XHRcdC8vZWxTdGFydEVuZFxuXHRcdFx0XHR2YXIgZW5kID0gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSx0YWdTdGFydCxlbCxjdXJyZW50TlNNYXAsZW50aXR5UmVwbGFjZXIsZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0dmFyIGxlbiA9IGVsLmxlbmd0aDtcblxuXG5cdFx0XHRcdGlmKCFlbC5jbG9zZWQgJiYgZml4U2VsZkNsb3NlZChzb3VyY2UsZW5kLGVsLnRhZ05hbWUsY2xvc2VNYXApKXtcblx0XHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmKCFlbnRpdHlNYXAubmJzcCl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygndW5jbG9zZWQgeG1sIGF0dHJpYnV0ZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihsb2NhdG9yICYmIGxlbil7XG5cdFx0XHRcdFx0dmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0Ly90cnl7Ly9hdHRyaWJ1dGUgcG9zaXRpb24gZml4ZWRcblx0XHRcdFx0XHRmb3IodmFyIGkgPSAwO2k8bGVuO2krKyl7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IGVsW2ldO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24oYS5vZmZzZXQpO1xuXHRcdFx0XHRcdFx0YS5sb2NhdG9yID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3IyXG5cdFx0XHRcdFx0aWYoYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCkpe1xuXHRcdFx0XHRcdFx0cGFyc2VTdGFjay5wdXNoKGVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKSl7XG5cdFx0XHRcdFx0XHRwYXJzZVN0YWNrLnB1c2goZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKE5BTUVTUEFDRS5pc0hUTUwoZWwudXJpKSAmJiAhZWwuY2xvc2VkKSB7XG5cdFx0XHRcdFx0ZW5kID0gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVuZCxlbC50YWdOYW1lLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5kKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRpZiAoZSBpbnN0YW5jZW9mIFBhcnNlRXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcignZWxlbWVudCBwYXJzZSBlcnJvcjogJytlKVxuXHRcdFx0ZW5kID0gLTE7XG5cdFx0fVxuXHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHRzdGFydCA9IGVuZDtcblx0XHR9ZWxzZXtcblx0XHRcdC8vVE9ETzog6L+Z6YeM5pyJ5Y+v6IO9c2F45Zue6YCA77yM5pyJ5L2N572u6ZSZ6K+v6aOO6ZmpXG5cdFx0XHRhcHBlbmRUZXh0KE1hdGgubWF4KHRhZ1N0YXJ0LHN0YXJ0KSsxKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIGNvcHlMb2NhdG9yKGYsdCl7XG5cdHQubGluZU51bWJlciA9IGYubGluZU51bWJlcjtcblx0dC5jb2x1bW5OdW1iZXIgPSBmLmNvbHVtbk51bWJlcjtcblx0cmV0dXJuIHQ7XG59XG5cbi8qKlxuICogQHNlZSAjYXBwZW5kRWxlbWVudChzb3VyY2UsZWxTdGFydEVuZCxlbCxzZWxmQ2xvc2VkLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIscGFyc2VTdGFjayk7XG4gKiBAcmV0dXJuIGVuZCBvZiB0aGUgZWxlbWVudFN0YXJ0UGFydChlbmQgb2YgZWxlbWVudEVuZFBhcnQgZm9yIHNlbGZDbG9zZWQgZWwpXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2Usc3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcil7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxbmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXhcblx0ICovXG5cdGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShxbmFtZSwgdmFsdWUsIHN0YXJ0SW5kZXgpIHtcblx0XHRpZiAoZWwuYXR0cmlidXRlTmFtZXMuaGFzT3duUHJvcGVydHkocW5hbWUpKSB7XG5cdFx0XHRlcnJvckhhbmRsZXIuZmF0YWxFcnJvcignQXR0cmlidXRlICcgKyBxbmFtZSArICcgcmVkZWZpbmVkJylcblx0XHR9XG5cdFx0ZWwuYWRkVmFsdWUoXG5cdFx0XHRxbmFtZSxcblx0XHRcdC8vIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jQVZOb3JtYWxpemVcblx0XHRcdC8vIHNpbmNlIHRoZSB4bWxkb20gc2F4IHBhcnNlciBkb2VzIG5vdCBcImludGVycHJldFwiIERURCB0aGUgZm9sbG93aW5nIGlzIG5vdCBpbXBsZW1lbnRlZDpcblx0XHRcdC8vIC0gcmVjdXJzaXZlIHJlcGxhY2VtZW50IG9mIChEVEQpIGVudGl0eSByZWZlcmVuY2VzXG5cdFx0XHQvLyAtIHRyaW1taW5nIGFuZCBjb2xsYXBzaW5nIG11bHRpcGxlIHNwYWNlcyBpbnRvIGEgc2luZ2xlIG9uZSBmb3IgYXR0cmlidXRlcyB0aGF0IGFyZSBub3Qgb2YgdHlwZSBDREFUQVxuXHRcdFx0dmFsdWUucmVwbGFjZSgvW1xcdFxcblxccl0vZywgJyAnKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlciksXG5cdFx0XHRzdGFydEluZGV4XG5cdFx0KVxuXHR9XG5cdHZhciBhdHRyTmFtZTtcblx0dmFyIHZhbHVlO1xuXHR2YXIgcCA9ICsrc3RhcnQ7XG5cdHZhciBzID0gU19UQUc7Ly9zdGF0dXNcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dmFyIGMgPSBzb3VyY2UuY2hhckF0KHApO1xuXHRcdHN3aXRjaChjKXtcblx0XHRjYXNlICc9Jzpcblx0XHRcdGlmKHMgPT09IFNfQVRUUil7Ly9hdHRyTmFtZVxuXHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0cyA9IFNfRVE7XG5cdFx0XHR9ZWxzZSBpZihzID09PSBTX0FUVFJfU1BBQ0Upe1xuXHRcdFx0XHRzID0gU19FUTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvL2ZhdGFsRXJyb3I6IGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUgb3Igc3BhY2UgYWZ0ZXIgYXR0ck5hbWVcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZScpOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1xcJyc6XG5cdFx0Y2FzZSAnXCInOlxuXHRcdFx0aWYocyA9PT0gU19FUSB8fCBzID09PSBTX0FUVFIgLy98fCBzID09IFNfQVRUUl9TUEFDRVxuXHRcdFx0XHQpey8vZXF1YWxcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSKXtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKVxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnQgPSBwKzE7XG5cdFx0XHRcdHAgPSBzb3VyY2UuaW5kZXhPZihjLHN0YXJ0KVxuXHRcdFx0XHRpZihwPjApe1xuXHRcdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydC0xKTtcblx0XHRcdFx0XHRzID0gU19BVFRSX0VORDtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0Ly9mYXRhbEVycm9yOiBubyBlbmQgcXVvdCBtYXRjaFxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG5vIGVuZCBcXCcnK2MrJ1xcJyBtYXRjaCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZSBpZihzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpe1xuXHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcblx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrYXR0ck5hbWUrJ1wiIG1pc3NlZCBzdGFydCBxdW90KCcrYysnKSEhJyk7XG5cdFx0XHRcdHN0YXJ0ID0gcCsxO1xuXHRcdFx0XHRzID0gU19BVFRSX0VORFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZXF1YWwgYmVmb3JlXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcvJzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRzID1TX1RBR19DTE9TRTtcblx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBpbnZhbGlkIGNsb3NlIGNoYXIoJy8nKVwiKSAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJyc6Ly9lbmQgZG9jdW1lbnRcblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcblx0XHRcdGlmKHMgPT0gU19UQUcpe1xuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHRjYXNlICc+Jzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRicmVhazsvL25vcm1hbFxuXHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOi8vQ29tcGF0aWJsZSBzdGF0ZVxuXHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApO1xuXHRcdFx0XHRpZih2YWx1ZS5zbGljZSgtMSkgPT09ICcvJyl7XG5cdFx0XHRcdFx0ZWwuY2xvc2VkICA9IHRydWU7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zbGljZSgwLC0xKVxuXHRcdFx0XHR9XG5cdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSX1NQQUNFKXtcblx0XHRcdFx0XHR2YWx1ZSA9IGF0dHJOYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSl7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCBxdW90KFwiKSEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIXZhbHVlLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKXtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgdmFsdWUhISBcIicrdmFsdWUrJ1wiIGluc3RlYWQhIScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZSh2YWx1ZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTX0VROlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtaXNzZWQhIScpO1xuXHRcdFx0fVxuLy9cdFx0XHRjb25zb2xlLmxvZyh0YWdOYW1lLHRhZ05hbWVQYXR0ZXJuLHRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpXG5cdFx0XHRyZXR1cm4gcDtcblx0XHQvKnhtbCBzcGFjZSAnXFx4MjAnIHwgI3g5IHwgI3hEIHwgI3hBOyAqL1xuXHRcdGNhc2UgJ1xcdTAwODAnOlxuXHRcdFx0YyA9ICcgJztcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYoYzw9ICcgJyl7Ly9zcGFjZVxuXHRcdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpOy8vdGFnTmFtZVxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscClcblx0XHRcdFx0XHRzID0gU19BVFRSX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0Ly9cdHZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRcdC8vaWdub3JlIHdhcm5pbmdcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7Ly9ub3Qgc3BhY2Vcbi8vU19UQUcsXHRTX0FUVFIsXHRTX0VRLFx0U19BVFRSX05PUVVPVF9WQUxVRVxuLy9TX0FUVFJfU1BBQ0UsXHRTX0FUVFJfRU5ELFx0U19UQUdfU1BBQ0UsIFNfVEFHX0NMT1NFXG5cdFx0XHRcdHN3aXRjaChzKXtcblx0XHRcdFx0Ly9jYXNlIFNfVEFHOnZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUjp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOnZvaWQoKTticmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdFx0dmFyIHRhZ05hbWUgPSAgZWwudGFnTmFtZTtcblx0XHRcdFx0XHRpZiAoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJythdHRyTmFtZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK2F0dHJOYW1lKydcIiBpbnN0ZWFkMiEhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSwgc3RhcnQpO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRzID0gU19BVFRSO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBzcGFjZSBpcyByZXF1aXJlZFwiJythdHRyTmFtZSsnXCIhIScpXG5cdFx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRcdFx0cyA9IFNfQVRUUjtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0XHRzID0gU19BVFRSX05PUVVPVF9WQUxVRTtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgY2xvc2VkIGNoYXJhY3RlciAnLycgYW5kICc+JyBtdXN0IGJlIGNvbm5lY3RlZCB0b1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0vL2VuZCBvdXRlciBzd2l0Y2hcblx0XHQvL2NvbnNvbGUubG9nKCdwKysnLHApXG5cdFx0cCsrO1xuXHR9XG59XG4vKipcbiAqIEByZXR1cm4gdHJ1ZSBpZiBoYXMgbmV3IG5hbWVzcGFjZSBkZWZpbmVcbiAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCl7XG5cdHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblx0dmFyIGxvY2FsTlNNYXAgPSBudWxsO1xuXHQvL3ZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoLTFdLmN1cnJlbnROU01hcDtcblx0dmFyIGkgPSBlbC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0dmFyIGEgPSBlbFtpXTtcblx0XHR2YXIgcU5hbWUgPSBhLnFOYW1lO1xuXHRcdHZhciB2YWx1ZSA9IGEudmFsdWU7XG5cdFx0dmFyIG5zcCA9IHFOYW1lLmluZGV4T2YoJzonKTtcblx0XHRpZihuc3A+MCl7XG5cdFx0XHR2YXIgcHJlZml4ID0gYS5wcmVmaXggPSBxTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0XHR2YXIgbG9jYWxOYW1lID0gcU5hbWUuc2xpY2UobnNwKzEpO1xuXHRcdFx0dmFyIG5zUHJlZml4ID0gcHJlZml4ID09PSAneG1sbnMnICYmIGxvY2FsTmFtZVxuXHRcdH1lbHNle1xuXHRcdFx0bG9jYWxOYW1lID0gcU5hbWU7XG5cdFx0XHRwcmVmaXggPSBudWxsXG5cdFx0XHRuc1ByZWZpeCA9IHFOYW1lID09PSAneG1sbnMnICYmICcnXG5cdFx0fVxuXHRcdC8vY2FuIG5vdCBzZXQgcHJlZml4LGJlY2F1c2UgcHJlZml4ICE9PSAnJ1xuXHRcdGEubG9jYWxOYW1lID0gbG9jYWxOYW1lIDtcblx0XHQvL3ByZWZpeCA9PSBudWxsIGZvciBubyBucyBwcmVmaXggYXR0cmlidXRlXG5cdFx0aWYobnNQcmVmaXggIT09IGZhbHNlKXsvL2hhY2shIVxuXHRcdFx0aWYobG9jYWxOU01hcCA9PSBudWxsKXtcblx0XHRcdFx0bG9jYWxOU01hcCA9IHt9XG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDApXG5cdFx0XHRcdF9jb3B5KGN1cnJlbnROU01hcCxjdXJyZW50TlNNYXA9e30pXG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDEpXG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50TlNNYXBbbnNQcmVmaXhdID0gbG9jYWxOU01hcFtuc1ByZWZpeF0gPSB2YWx1ZTtcblx0XHRcdGEudXJpID0gTkFNRVNQQUNFLlhNTE5TXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0UHJlZml4TWFwcGluZyhuc1ByZWZpeCwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdHZhciBpID0gZWwubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdGEgPSBlbFtpXTtcblx0XHR2YXIgcHJlZml4ID0gYS5wcmVmaXg7XG5cdFx0aWYocHJlZml4KXsvL25vIHByZWZpeCBhdHRyaWJ1dGUgaGFzIG5vIG5hbWVzcGFjZVxuXHRcdFx0aWYocHJlZml4ID09PSAneG1sJyl7XG5cdFx0XHRcdGEudXJpID0gTkFNRVNQQUNFLlhNTDtcblx0XHRcdH1pZihwcmVmaXggIT09ICd4bWxucycpe1xuXHRcdFx0XHRhLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddXG5cblx0XHRcdFx0Ly97Y29uc29sZS5sb2coJyMjIycrYS5xTmFtZSxkb21CdWlsZGVyLmxvY2F0b3Iuc3lzdGVtSWQrJycsY3VycmVudE5TTWFwLGEudXJpKX1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIG5zcCA9IHRhZ05hbWUuaW5kZXhPZignOicpO1xuXHRpZihuc3A+MCl7XG5cdFx0cHJlZml4ID0gZWwucHJlZml4ID0gdGFnTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0bG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZS5zbGljZShuc3ArMSk7XG5cdH1lbHNle1xuXHRcdHByZWZpeCA9IG51bGw7Ly9pbXBvcnRhbnQhIVxuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG5cdH1cblx0Ly9ubyBwcmVmaXggZWxlbWVudCBoYXMgZGVmYXVsdCBuYW1lc3BhY2Vcblx0dmFyIG5zID0gZWwudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ107XG5cdGRvbUJ1aWxkZXIuc3RhcnRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lLGVsKTtcblx0Ly9lbmRQcmVmaXhNYXBwaW5nIGFuZCBzdGFydFByZWZpeE1hcHBpbmcgaGF2ZSBub3QgYW55IGhlbHAgZm9yIGRvbSBidWlsZGVyXG5cdC8vbG9jYWxOU01hcCA9IG51bGxcblx0aWYoZWwuY2xvc2VkKXtcblx0XHRkb21CdWlsZGVyLmVuZEVsZW1lbnQobnMsbG9jYWxOYW1lLHRhZ05hbWUpO1xuXHRcdGlmKGxvY2FsTlNNYXApe1xuXHRcdFx0Zm9yIChwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvY2FsTlNNYXAsIHByZWZpeCkpIHtcblx0XHRcdFx0XHRkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fWVsc2V7XG5cdFx0ZWwuY3VycmVudE5TTWFwID0gY3VycmVudE5TTWFwO1xuXHRcdGVsLmxvY2FsTlNNYXAgPSBsb2NhbE5TTWFwO1xuXHRcdC8vcGFyc2VTdGFjay5wdXNoKGVsKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuZnVuY3Rpb24gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVsU3RhcnRFbmQsdGFnTmFtZSxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyKXtcblx0aWYoL14oPzpzY3JpcHR8dGV4dGFyZWEpJC9pLnRlc3QodGFnTmFtZSkpe1xuXHRcdHZhciBlbEVuZFN0YXJ0ID0gIHNvdXJjZS5pbmRleE9mKCc8LycrdGFnTmFtZSsnPicsZWxTdGFydEVuZCk7XG5cdFx0dmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQrMSxlbEVuZFN0YXJ0KTtcblx0XHRpZigvWyY8XS8udGVzdCh0ZXh0KSl7XG5cdFx0XHRpZigvXnNjcmlwdCQvaS50ZXN0KHRhZ05hbWUpKXtcblx0XHRcdFx0Ly9pZighL1xcXVxcXT4vLnRlc3QodGV4dCkpe1xuXHRcdFx0XHRcdC8vbGV4SGFuZGxlci5zdGFydENEQVRBKCk7XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsMCx0ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0Ly9sZXhIYW5kbGVyLmVuZENEQVRBKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRW5kU3RhcnQ7XG5cdFx0XHRcdC8vfVxuXHRcdFx0fS8vfWVsc2V7Ly90ZXh0IGFyZWFcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LDAsdGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRyZXR1cm4gZWxFbmRTdGFydDtcblx0XHRcdC8vfVxuXG5cdFx0fVxuXHR9XG5cdHJldHVybiBlbFN0YXJ0RW5kKzE7XG59XG5mdW5jdGlvbiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSxlbFN0YXJ0RW5kLHRhZ05hbWUsY2xvc2VNYXApe1xuXHQvL2lmKHRhZ05hbWUgaW4gY2xvc2VNYXApe1xuXHR2YXIgcG9zID0gY2xvc2VNYXBbdGFnTmFtZV07XG5cdGlmKHBvcyA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHRhZ05hbWUpXG5cdFx0cG9zID0gIHNvdXJjZS5sYXN0SW5kZXhPZignPC8nK3RhZ05hbWUrJz4nKVxuXHRcdGlmKHBvczxlbFN0YXJ0RW5kKXsvL+W/mOiusOmXreWQiFxuXHRcdFx0cG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycrdGFnTmFtZSlcblx0XHR9XG5cdFx0Y2xvc2VNYXBbdGFnTmFtZV0gPXBvc1xuXHR9XG5cdHJldHVybiBwb3M8ZWxTdGFydEVuZDtcblx0Ly99XG59XG5cbmZ1bmN0aW9uIF9jb3B5IChzb3VyY2UsIHRhcmdldCkge1xuXHRmb3IgKHZhciBuIGluIHNvdXJjZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBuKSkge1xuXHRcdFx0dGFyZ2V0W25dID0gc291cmNlW25dO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZURDQyhzb3VyY2Usc3RhcnQsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpey8vc3VyZSBzdGFydCB3aXRoICc8ISdcblx0dmFyIG5leHQ9IHNvdXJjZS5jaGFyQXQoc3RhcnQrMilcblx0c3dpdGNoKG5leHQpe1xuXHRjYXNlICctJzpcblx0XHRpZihzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMykgPT09ICctJyl7XG5cdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJy0tPicsc3RhcnQrNCk7XG5cdFx0XHQvL2FwcGVuZCBjb21tZW50IHNvdXJjZS5zdWJzdHJpbmcoNCxlbmQpLy88IS0tXG5cdFx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0XHRkb21CdWlsZGVyLmNvbW1lbnQoc291cmNlLHN0YXJ0KzQsZW5kLXN0YXJ0LTQpO1xuXHRcdFx0XHRyZXR1cm4gZW5kKzM7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiVW5jbG9zZWQgY29tbWVudFwiKTtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Ly9lcnJvclxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0ZGVmYXVsdDpcblx0XHRpZihzb3VyY2Uuc3Vic3RyKHN0YXJ0KzMsNikgPT0gJ0NEQVRBWycpe1xuXHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCddXT4nLHN0YXJ0KzkpO1xuXHRcdFx0ZG9tQnVpbGRlci5zdGFydENEQVRBKCk7XG5cdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnMoc291cmNlLHN0YXJ0KzksZW5kLXN0YXJ0LTkpO1xuXHRcdFx0ZG9tQnVpbGRlci5lbmRDREFUQSgpXG5cdFx0XHRyZXR1cm4gZW5kKzM7XG5cdFx0fVxuXHRcdC8vPCFET0NUWVBFXG5cdFx0Ly9zdGFydERURChqYXZhLmxhbmcuU3RyaW5nIG5hbWUsIGphdmEubGFuZy5TdHJpbmcgcHVibGljSWQsIGphdmEubGFuZy5TdHJpbmcgc3lzdGVtSWQpXG5cdFx0dmFyIG1hdGNocyA9IHNwbGl0KHNvdXJjZSxzdGFydCk7XG5cdFx0dmFyIGxlbiA9IG1hdGNocy5sZW5ndGg7XG5cdFx0aWYobGVuPjEgJiYgLyFkb2N0eXBlL2kudGVzdChtYXRjaHNbMF1bMF0pKXtcblx0XHRcdHZhciBuYW1lID0gbWF0Y2hzWzFdWzBdO1xuXHRcdFx0dmFyIHB1YmlkID0gZmFsc2U7XG5cdFx0XHR2YXIgc3lzaWQgPSBmYWxzZTtcblx0XHRcdGlmKGxlbj4zKXtcblx0XHRcdFx0aWYoL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRwdWJpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0XHRzeXNpZCA9IGxlbj40ICYmIG1hdGNoc1s0XVswXTtcblx0XHRcdFx0fWVsc2UgaWYoL15zeXN0ZW0kL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRzeXNpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIGxhc3RNYXRjaCA9IG1hdGNoc1tsZW4tMV1cblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQsIHN5c2lkKTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kRFREKCk7XG5cblx0XHRcdHJldHVybiBsYXN0TWF0Y2guaW5kZXgrbGFzdE1hdGNoWzBdLmxlbmd0aFxuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cblxuXG5mdW5jdGlvbiBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSxzdGFydCxkb21CdWlsZGVyKXtcblx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc/Picsc3RhcnQpO1xuXHRpZihlbmQpe1xuXHRcdHZhciBtYXRjaCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5tYXRjaCgvXjxcXD8oXFxTKilcXHMqKFtcXHNcXFNdKj8pXFxzKiQvKTtcblx0XHRpZihtYXRjaCl7XG5cdFx0XHR2YXIgbGVuID0gbWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0ZG9tQnVpbGRlci5wcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obWF0Y2hbMV0sIG1hdGNoWzJdKSA7XG5cdFx0XHRyZXR1cm4gZW5kKzI7XG5cdFx0fWVsc2V7Ly9lcnJvclxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIEVsZW1lbnRBdHRyaWJ1dGVzKCl7XG5cdHRoaXMuYXR0cmlidXRlTmFtZXMgPSB7fVxufVxuRWxlbWVudEF0dHJpYnV0ZXMucHJvdG90eXBlID0ge1xuXHRzZXRUYWdOYW1lOmZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdGlmKCF0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0YWdOYW1lOicrdGFnTmFtZSlcblx0XHR9XG5cdFx0dGhpcy50YWdOYW1lID0gdGFnTmFtZVxuXHR9LFxuXHRhZGRWYWx1ZTpmdW5jdGlvbihxTmFtZSwgdmFsdWUsIG9mZnNldCkge1xuXHRcdGlmKCF0YWdOYW1lUGF0dGVybi50ZXN0KHFOYW1lKSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0cmlidXRlOicrcU5hbWUpXG5cdFx0fVxuXHRcdHRoaXMuYXR0cmlidXRlTmFtZXNbcU5hbWVdID0gdGhpcy5sZW5ndGg7XG5cdFx0dGhpc1t0aGlzLmxlbmd0aCsrXSA9IHtxTmFtZTpxTmFtZSx2YWx1ZTp2YWx1ZSxvZmZzZXQ6b2Zmc2V0fVxuXHR9LFxuXHRsZW5ndGg6MCxcblx0Z2V0TG9jYWxOYW1lOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLmxvY2FsTmFtZX0sXG5cdGdldExvY2F0b3I6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ubG9jYXRvcn0sXG5cdGdldFFOYW1lOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnFOYW1lfSxcblx0Z2V0VVJJOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnVyaX0sXG5cdGdldFZhbHVlOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnZhbHVlfVxuLy9cdCxnZXRJbmRleDpmdW5jdGlvbih1cmksIGxvY2FsTmFtZSkpe1xuLy9cdFx0aWYobG9jYWxOYW1lKXtcbi8vXG4vL1x0XHR9ZWxzZXtcbi8vXHRcdFx0dmFyIHFOYW1lID0gdXJpXG4vL1x0XHR9XG4vL1x0fSxcbi8vXHRnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFZhbHVlKHRoaXMuZ2V0SW5kZXguYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sXG4vL1x0Z2V0VHlwZTpmdW5jdGlvbih1cmksbG9jYWxOYW1lKXt9XG4vL1x0Z2V0VHlwZTpmdW5jdGlvbihpKXt9LFxufVxuXG5cblxuZnVuY3Rpb24gc3BsaXQoc291cmNlLHN0YXJ0KXtcblx0dmFyIG1hdGNoO1xuXHR2YXIgYnVmID0gW107XG5cdHZhciByZWcgPSAvJ1teJ10rJ3xcIlteXCJdK1wifFteXFxzPD5cXC89XSs9P3woXFwvP1xccyo+fDwpL2c7XG5cdHJlZy5sYXN0SW5kZXggPSBzdGFydDtcblx0cmVnLmV4ZWMoc291cmNlKTsvL3NraXAgPFxuXHR3aGlsZShtYXRjaCA9IHJlZy5leGVjKHNvdXJjZSkpe1xuXHRcdGJ1Zi5wdXNoKG1hdGNoKTtcblx0XHRpZihtYXRjaFsxXSlyZXR1cm4gYnVmO1xuXHR9XG59XG5cbmV4cG9ydHMuWE1MUmVhZGVyID0gWE1MUmVhZGVyO1xuZXhwb3J0cy5QYXJzZUVycm9yID0gUGFyc2VFcnJvcjtcbiIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwiLyohIEBuYW1lIG1wZC1wYXJzZXIgQHZlcnNpb24gMS4yLjIgQGxpY2Vuc2UgQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHJlc29sdmVVcmwgZnJvbSAnQHZpZGVvanMvdmhzLXV0aWxzL2VzL3Jlc29sdmUtdXJsJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgeyBmb3JFYWNoTWVkaWFHcm91cCB9IGZyb20gJ0B2aWRlb2pzL3Zocy11dGlscy9lcy9tZWRpYS1ncm91cHMnO1xuaW1wb3J0IGRlY29kZUI2NFRvVWludDhBcnJheSBmcm9tICdAdmlkZW9qcy92aHMtdXRpbHMvZXMvZGVjb2RlLWI2NC10by11aW50OC1hcnJheSc7XG5pbXBvcnQgeyBET01QYXJzZXIgfSBmcm9tICdAeG1sZG9tL3htbGRvbSc7XG5cbnZhciB2ZXJzaW9uID0gXCIxLjIuMlwiO1xuXG5jb25zdCBpc09iamVjdCA9IG9iaiA9PiB7XG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbmNvbnN0IG1lcmdlID0gKC4uLm9iamVjdHMpID0+IHtcbiAgcmV0dXJuIG9iamVjdHMucmVkdWNlKChyZXN1bHQsIHNvdXJjZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdFtrZXldKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHJlc3VsdFtrZXldLmNvbmNhdChzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59O1xuY29uc3QgdmFsdWVzID0gbyA9PiBPYmplY3Qua2V5cyhvKS5tYXAoayA9PiBvW2tdKTtcblxuY29uc3QgcmFuZ2UgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5jb25zdCBmbGF0dGVuID0gbGlzdHMgPT4gbGlzdHMucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuY29uc3QgZnJvbSA9IGxpc3QgPT4ge1xuICBpZiAoIWxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2gobGlzdFtpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmNvbnN0IGZpbmRJbmRleGVzID0gKGwsIGtleSkgPT4gbC5yZWR1Y2UoKGEsIGUsIGkpID0+IHtcbiAgaWYgKGVba2V5XSkge1xuICAgIGEucHVzaChpKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufSwgW10pO1xuLyoqXG4gKiBSZXR1cm5zIGEgdW5pb24gb2YgdGhlIGluY2x1ZGVkIGxpc3RzIHByb3ZpZGVkIGVhY2ggZWxlbWVudCBjYW4gYmUgaWRlbnRpZmllZCBieSBhIGtleS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IC0gbGlzdCBvZiBsaXN0cyB0byBnZXQgdGhlIHVuaW9uIG9mXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlGdW5jdGlvbiAtIHRoZSBmdW5jdGlvbiB0byB1c2UgYXMgYSBrZXkgZm9yIGVhY2ggZWxlbWVudFxuICpcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgdW5pb24gb2YgdGhlIGFycmF5c1xuICovXG5cbmNvbnN0IHVuaW9uID0gKGxpc3RzLCBrZXlGdW5jdGlvbikgPT4ge1xuICByZXR1cm4gdmFsdWVzKGxpc3RzLnJlZHVjZSgoYWNjLCBsaXN0KSA9PiB7XG4gICAgbGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGFjY1trZXlGdW5jdGlvbihlbCldID0gZWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pKTtcbn07XG5cbnZhciBlcnJvcnMgPSB7XG4gIElOVkFMSURfTlVNQkVSX09GX1BFUklPRDogJ0lOVkFMSURfTlVNQkVSX09GX1BFUklPRCcsXG4gIElOVkFMSURfTlVNQkVSX09GX0NPTlRFTlRfU1RFRVJJTkc6ICdJTlZBTElEX05VTUJFUl9PRl9DT05URU5UX1NURUVSSU5HJyxcbiAgREFTSF9FTVBUWV9NQU5JRkVTVDogJ0RBU0hfRU1QVFlfTUFOSUZFU1QnLFxuICBEQVNIX0lOVkFMSURfWE1MOiAnREFTSF9JTlZBTElEX1hNTCcsXG4gIE5PX0JBU0VfVVJMOiAnTk9fQkFTRV9VUkwnLFxuICBNSVNTSU5HX1NFR01FTlRfSU5GT1JNQVRJT046ICdNSVNTSU5HX1NFR01FTlRfSU5GT1JNQVRJT04nLFxuICBTRUdNRU5UX1RJTUVfVU5TUEVDSUZJRUQ6ICdTRUdNRU5UX1RJTUVfVU5TUEVDSUZJRUQnLFxuICBVTlNVUFBPUlRFRF9VVENfVElNSU5HX1NDSEVNRTogJ1VOU1VQUE9SVEVEX1VUQ19USU1JTkdfU0NIRU1FJ1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTaW5nbGVVcmlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmkgLSByZWxhdGl2ZSBsb2NhdGlvbiBvZiBzZWdtZW50XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVzb2x2ZWRVcmkgLSByZXNvbHZlZCBsb2NhdGlvbiBvZiBzZWdtZW50XG4gKiBAcHJvcGVydHkge09iamVjdH0gYnl0ZXJhbmdlIC0gT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gb24gaG93IHRvIG1ha2UgYnl0ZSByYW5nZVxuICogICByZXF1ZXN0cyBmb2xsb3dpbmcgYnl0ZS1yYW5nZS1zcGVjIHBlciBSRkMyNjE2LlxuICogQHByb3BlcnR5IHtTdHJpbmd9IGJ5dGVyYW5nZS5sZW5ndGggLSBsZW5ndGggb2YgcmFuZ2UgcmVxdWVzdFxuICogQHByb3BlcnR5IHtTdHJpbmd9IGJ5dGVyYW5nZS5vZmZzZXQgLSBieXRlIG9mZnNldCBvZiByYW5nZSByZXF1ZXN0XG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMxNC5odG1sI3NlYzE0LjM1LjFcbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVVJMVHlwZSBub2RlICg1LjMuOS4yLjMgVGFibGUgMTMpIHRvIGEgc2VnbWVudCBvYmplY3RcbiAqIHRoYXQgY29uZm9ybXMgdG8gaG93IG0zdTgtcGFyc2VyIGlzIHN0cnVjdHVyZWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2pzL20zdTgtcGFyc2VyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmwgLSBiYXNlVXJsIHByb3ZpZGVkIGJ5IDxCYXNlVXJsPiBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSAtIHNvdXJjZSB1cmwgZm9yIHNlZ21lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZSAtIG9wdGlvbmFsIHJhbmdlIHVzZWQgZm9yIHJhbmdlIGNhbGxzLFxuICogICBmb2xsb3dzICBSRkMgMjYxNiwgQ2xhdXNlIDE0LjM1LjFcbiAqIEByZXR1cm4ge1NpbmdsZVVyaX0gZnVsbCBzZWdtZW50IGluZm9ybWF0aW9uIHRyYW5zZm9ybWVkIGludG8gYSBmb3JtYXQgc2ltaWxhclxuICogICB0byBtM3U4LXBhcnNlclxuICovXG5cbmNvbnN0IHVybFR5cGVUb1NlZ21lbnQgPSAoe1xuICBiYXNlVXJsID0gJycsXG4gIHNvdXJjZSA9ICcnLFxuICByYW5nZSA9ICcnLFxuICBpbmRleFJhbmdlID0gJydcbn0pID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IHtcbiAgICB1cmk6IHNvdXJjZSxcbiAgICByZXNvbHZlZFVyaTogcmVzb2x2ZVVybChiYXNlVXJsIHx8ICcnLCBzb3VyY2UpXG4gIH07XG5cbiAgaWYgKHJhbmdlIHx8IGluZGV4UmFuZ2UpIHtcbiAgICBjb25zdCByYW5nZVN0ciA9IHJhbmdlID8gcmFuZ2UgOiBpbmRleFJhbmdlO1xuICAgIGNvbnN0IHJhbmdlcyA9IHJhbmdlU3RyLnNwbGl0KCctJyk7IC8vIGRlZmF1bHQgdG8gcGFyc2luZyB0aGlzIGFzIGEgQmlnSW50IGlmIHBvc3NpYmxlXG5cbiAgICBsZXQgc3RhcnRSYW5nZSA9IHdpbmRvdy5CaWdJbnQgPyB3aW5kb3cuQmlnSW50KHJhbmdlc1swXSkgOiBwYXJzZUludChyYW5nZXNbMF0sIDEwKTtcbiAgICBsZXQgZW5kUmFuZ2UgPSB3aW5kb3cuQmlnSW50ID8gd2luZG93LkJpZ0ludChyYW5nZXNbMV0pIDogcGFyc2VJbnQocmFuZ2VzWzFdLCAxMCk7IC8vIGNvbnZlcnQgYmFjayB0byBhIG51bWJlciBpZiBsZXNzIHRoYW4gTUFYX1NBRkVfSU5URUdFUlxuXG4gICAgaWYgKHN0YXJ0UmFuZ2UgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAmJiB0eXBlb2Ygc3RhcnRSYW5nZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHN0YXJ0UmFuZ2UgPSBOdW1iZXIoc3RhcnRSYW5nZSk7XG4gICAgfVxuXG4gICAgaWYgKGVuZFJhbmdlIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgJiYgdHlwZW9mIGVuZFJhbmdlID09PSAnYmlnaW50Jykge1xuICAgICAgZW5kUmFuZ2UgPSBOdW1iZXIoZW5kUmFuZ2UpO1xuICAgIH1cblxuICAgIGxldCBsZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIGVuZFJhbmdlID09PSAnYmlnaW50JyB8fCB0eXBlb2Ygc3RhcnRSYW5nZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIGxlbmd0aCA9IHdpbmRvdy5CaWdJbnQoZW5kUmFuZ2UpIC0gd2luZG93LkJpZ0ludChzdGFydFJhbmdlKSArIHdpbmRvdy5CaWdJbnQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IGVuZFJhbmdlIC0gc3RhcnRSYW5nZSArIDE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsZW5ndGggPT09ICdiaWdpbnQnICYmIGxlbmd0aCA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKTtcbiAgICB9IC8vIGJ5dGVyYW5nZSBzaG91bGQgYmUgaW5jbHVzaXZlIGFjY29yZGluZyB0b1xuICAgIC8vIFJGQyAyNjE2LCBDbGF1c2UgMTQuMzUuMVxuXG5cbiAgICBzZWdtZW50LmJ5dGVyYW5nZSA9IHtcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9mZnNldDogc3RhcnRSYW5nZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2VnbWVudDtcbn07XG5jb25zdCBieXRlUmFuZ2VUb1N0cmluZyA9IGJ5dGVyYW5nZSA9PiB7XG4gIC8vIGBlbmRSYW5nZWAgaXMgb25lIGxlc3MgdGhhbiBgb2Zmc2V0ICsgbGVuZ3RoYCBiZWNhdXNlIHRoZSBIVFRQIHJhbmdlXG4gIC8vIGhlYWRlciB1c2VzIGluY2x1c2l2ZSByYW5nZXNcbiAgbGV0IGVuZFJhbmdlO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXJhbmdlLm9mZnNldCA9PT0gJ2JpZ2ludCcgfHwgdHlwZW9mIGJ5dGVyYW5nZS5sZW5ndGggPT09ICdiaWdpbnQnKSB7XG4gICAgZW5kUmFuZ2UgPSB3aW5kb3cuQmlnSW50KGJ5dGVyYW5nZS5vZmZzZXQpICsgd2luZG93LkJpZ0ludChieXRlcmFuZ2UubGVuZ3RoKSAtIHdpbmRvdy5CaWdJbnQoMSk7XG4gIH0gZWxzZSB7XG4gICAgZW5kUmFuZ2UgPSBieXRlcmFuZ2Uub2Zmc2V0ICsgYnl0ZXJhbmdlLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZXR1cm4gYCR7Ynl0ZXJhbmdlLm9mZnNldH0tJHtlbmRSYW5nZX1gO1xufTtcblxuLyoqXG4gKiBwYXJzZSB0aGUgZW5kIG51bWJlciBhdHRyaWJ1ZSB0aGF0IGNhbiBiZSBhIHN0cmluZ1xuICogbnVtYmVyLCBvciB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZH0gZW5kTnVtYmVyXG4gKiAgICAgICAgVGhlIGVuZCBudW1iZXIgYXR0cmlidXRlLlxuICpcbiAqIEByZXR1cm4ge251bWJlcnxudWxsfVxuICogICAgICAgICAgVGhlIHJlc3VsdCBvZiBwYXJzaW5nIHRoZSBlbmQgbnVtYmVyLlxuICovXG5cbmNvbnN0IHBhcnNlRW5kTnVtYmVyID0gZW5kTnVtYmVyID0+IHtcbiAgaWYgKGVuZE51bWJlciAmJiB0eXBlb2YgZW5kTnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgIGVuZE51bWJlciA9IHBhcnNlSW50KGVuZE51bWJlciwgMTApO1xuICB9XG5cbiAgaWYgKGlzTmFOKGVuZE51bWJlcikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbmROdW1iZXI7XG59O1xuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIGNhbGN1bGF0aW5nIHRoZSByYW5nZSBvZiBhdmFpbGFibGUgc2VnbWVudHMgaW4gc3RhdGljIGFuZCBkeW5hbWljXG4gKiBtYW5pZmVzdHMuXG4gKi9cblxuXG5jb25zdCBzZWdtZW50UmFuZ2UgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbnRpcmUgcmFuZ2Ugb2YgYXZhaWxhYmxlIHNlZ21lbnRzIGZvciBhIHN0YXRpYyBNUERcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAgICogICAgICAgIEluaGVyaXRpZWQgTVBEIGF0dHJpYnV0ZXNcbiAgICogQHJldHVybiB7eyBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciB9fVxuICAgKiAgICAgICAgIFRoZSBzdGFydCBhbmQgZW5kIG51bWJlcnMgZm9yIGF2YWlsYWJsZSBzZWdtZW50c1xuICAgKi9cbiAgc3RhdGljKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBkdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgICBzb3VyY2VEdXJhdGlvbixcbiAgICAgIHBlcmlvZER1cmF0aW9uXG4gICAgfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZW5kTnVtYmVyID0gcGFyc2VFbmROdW1iZXIoYXR0cmlidXRlcy5lbmROdW1iZXIpO1xuICAgIGNvbnN0IHNlZ21lbnREdXJhdGlvbiA9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuXG4gICAgaWYgKHR5cGVvZiBlbmROdW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiBlbmROdW1iZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwZXJpb2REdXJhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHBlcmlvZER1cmF0aW9uIC8gc2VnbWVudER1cmF0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogc291cmNlRHVyYXRpb24gLyBzZWdtZW50RHVyYXRpb25cbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxpdmUgd2luZG93IHJhbmdlIG9mIGF2YWlsYWJsZSBzZWdtZW50cyBmb3IgYSBkeW5hbWljIE1QRFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICAgKiAgICAgICAgSW5oZXJpdGllZCBNUEQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHt7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyIH19XG4gICAqICAgICAgICAgVGhlIHN0YXJ0IGFuZCBlbmQgbnVtYmVycyBmb3IgYXZhaWxhYmxlIHNlZ21lbnRzXG4gICAqL1xuICBkeW5hbWljKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBOT1csXG4gICAgICBjbGllbnRPZmZzZXQsXG4gICAgICBhdmFpbGFiaWxpdHlTdGFydFRpbWUsXG4gICAgICB0aW1lc2NhbGUgPSAxLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBwZXJpb2RTdGFydCA9IDAsXG4gICAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gMCxcbiAgICAgIHRpbWVTaGlmdEJ1ZmZlckRlcHRoID0gSW5maW5pdHlcbiAgICB9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBlbmROdW1iZXIgPSBwYXJzZUVuZE51bWJlcihhdHRyaWJ1dGVzLmVuZE51bWJlcik7IC8vIGNsaWVudE9mZnNldCBpcyBwYXNzZWQgaW4gYXQgdGhlIHRvcCBsZXZlbCBvZiBtcGQtcGFyc2VyIGFuZCBpcyBhbiBvZmZzZXQgY2FsY3VsYXRlZFxuICAgIC8vIGFmdGVyIHJldHJpZXZpbmcgVVRDIHNlcnZlciB0aW1lLlxuXG4gICAgY29uc3Qgbm93ID0gKE5PVyArIGNsaWVudE9mZnNldCkgLyAxMDAwOyAvLyBXQyBzdGFuZHMgZm9yIFdhbGwgQ2xvY2suXG4gICAgLy8gQ29udmVydCB0aGUgcGVyaW9kIHN0YXJ0IHRpbWUgdG8gRVBPQ0guXG5cbiAgICBjb25zdCBwZXJpb2RTdGFydFdDID0gYXZhaWxhYmlsaXR5U3RhcnRUaW1lICsgcGVyaW9kU3RhcnQ7IC8vIFBlcmlvZCBlbmQgaW4gRVBPQ0ggaXMgbWFuaWZlc3QncyByZXRyaWV2YWwgdGltZSArIHRpbWUgdW50aWwgbmV4dCB1cGRhdGUuXG5cbiAgICBjb25zdCBwZXJpb2RFbmRXQyA9IG5vdyArIG1pbmltdW1VcGRhdGVQZXJpb2Q7XG4gICAgY29uc3QgcGVyaW9kRHVyYXRpb24gPSBwZXJpb2RFbmRXQyAtIHBlcmlvZFN0YXJ0V0M7XG4gICAgY29uc3Qgc2VnbWVudENvdW50ID0gTWF0aC5jZWlsKHBlcmlvZER1cmF0aW9uICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIGNvbnN0IGF2YWlsYWJsZVN0YXJ0ID0gTWF0aC5mbG9vcigobm93IC0gcGVyaW9kU3RhcnRXQyAtIHRpbWVTaGlmdEJ1ZmZlckRlcHRoKSAqIHRpbWVzY2FsZSAvIGR1cmF0aW9uKTtcbiAgICBjb25zdCBhdmFpbGFibGVFbmQgPSBNYXRoLmZsb29yKChub3cgLSBwZXJpb2RTdGFydFdDKSAqIHRpbWVzY2FsZSAvIGR1cmF0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IE1hdGgubWF4KDAsIGF2YWlsYWJsZVN0YXJ0KSxcbiAgICAgIGVuZDogdHlwZW9mIGVuZE51bWJlciA9PT0gJ251bWJlcicgPyBlbmROdW1iZXIgOiBNYXRoLm1pbihzZWdtZW50Q291bnQsIGF2YWlsYWJsZUVuZClcbiAgICB9O1xuICB9XG5cbn07XG4vKipcbiAqIE1hcHMgYSByYW5nZSBvZiBudW1iZXJzIHRvIG9iamVjdHMgd2l0aCBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gYnVpbGQgdGhlIGNvcnJlc3BvbmRpbmdcbiAqIHNlZ21lbnQgbGlzdFxuICpcbiAqIEBuYW1lIHRvU2VnbWVudHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBzZWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqICAgICAgICBJbmRleCBvZiB0aGUgbnVtYmVyIGluIHRoZSByYW5nZSBsaXN0XG4gKiBAcmV0dXJuIHt7IG51bWJlcjogTnVtYmVyLCBkdXJhdGlvbjogTnVtYmVyLCB0aW1lbGluZTogTnVtYmVyLCB0aW1lOiBOdW1iZXIgfX1cbiAqICAgICAgICAgT2JqZWN0IHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBhIHJhbmdlIG9mIG51bWJlcnMgdG9cbiAqIGluZm9ybWF0aW9uIG5lZWRlZCB0byBidWlsZCB0aGUgc2VnbWVudCBsaXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgSW5oZXJpdGVkIE1QRCBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHt0b1NlZ21lbnRzQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbmNvbnN0IHRvU2VnbWVudHMgPSBhdHRyaWJ1dGVzID0+IG51bWJlciA9PiB7XG4gIGNvbnN0IHtcbiAgICBkdXJhdGlvbixcbiAgICB0aW1lc2NhbGUgPSAxLFxuICAgIHBlcmlvZFN0YXJ0LFxuICAgIHN0YXJ0TnVtYmVyID0gMVxuICB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIHtcbiAgICBudW1iZXI6IHN0YXJ0TnVtYmVyICsgbnVtYmVyLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIHRpbWVzY2FsZSxcbiAgICB0aW1lbGluZTogcGVyaW9kU3RhcnQsXG4gICAgdGltZTogbnVtYmVyICogZHVyYXRpb25cbiAgfTtcbn07XG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mbyB1c2VkIGZvclxuICogYnVpbGRpbmcgdGhlIGxpc3Qgb2Ygc2VnbWVudHMuIFRoaXMgdXNlcyB0aGUgQGR1cmF0aW9uIGF0dHJpYnV0ZSBzcGVjaWZpZWRcbiAqIGluIHRoZSBNUEQgbWFuaWZlc3QgdG8gZGVyaXZlIHRoZSByYW5nZSBvZiBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIEluaGVyaXRlZCBNUEQgYXR0cmlidXRlc1xuICogQHJldHVybiB7e251bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHRpbWVsaW5lOiBudW1iZXJ9W119XG4gKiAgICAgICAgIExpc3Qgb2YgT2JqZWN0cyB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuY29uc3QgcGFyc2VCeUR1cmF0aW9uID0gYXR0cmlidXRlcyA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIGR1cmF0aW9uLFxuICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgcGVyaW9kRHVyYXRpb24sXG4gICAgc291cmNlRHVyYXRpb25cbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IHtcbiAgICBzdGFydCxcbiAgICBlbmRcbiAgfSA9IHNlZ21lbnRSYW5nZVt0eXBlXShhdHRyaWJ1dGVzKTtcbiAgY29uc3Qgc2VnbWVudHMgPSByYW5nZShzdGFydCwgZW5kKS5tYXAodG9TZWdtZW50cyhhdHRyaWJ1dGVzKSk7XG5cbiAgaWYgKHR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgY29uc3QgaW5kZXggPSBzZWdtZW50cy5sZW5ndGggLSAxOyAvLyBzZWN0aW9uIGlzIGVpdGhlciBhIHBlcmlvZCBvciB0aGUgZnVsbCBzb3VyY2VcblxuICAgIGNvbnN0IHNlY3Rpb25EdXJhdGlvbiA9IHR5cGVvZiBwZXJpb2REdXJhdGlvbiA9PT0gJ251bWJlcicgPyBwZXJpb2REdXJhdGlvbiA6IHNvdXJjZUR1cmF0aW9uOyAvLyBmaW5hbCBzZWdtZW50IG1heSBiZSBsZXNzIHRoYW4gZnVsbCBzZWdtZW50IGR1cmF0aW9uXG5cbiAgICBzZWdtZW50c1tpbmRleF0uZHVyYXRpb24gPSBzZWN0aW9uRHVyYXRpb24gLSBkdXJhdGlvbiAvIHRpbWVzY2FsZSAqIGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIFNlZ21lbnRCYXNlIGludG8gYSBzZXQgb2Ygc2VnbWVudHMuXG4gKiAoREFTSCBTUEVDIFNlY3Rpb24gNS4zLjkuMy4yKSBjb250YWlucyBhIHNldCBvZiA8U2VnbWVudFVSTD4gbm9kZXMuICBFYWNoXG4gKiBub2RlIHNob3VsZCBiZSB0cmFuc2xhdGVkIGludG8gc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgbmFtZXMgYXMga2V5c1xuICogQHJldHVybiB7T2JqZWN0LjxBcnJheT59IGxpc3Qgb2Ygc2VnbWVudHNcbiAqL1xuXG5jb25zdCBzZWdtZW50c0Zyb21CYXNlID0gYXR0cmlidXRlcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIGluaXRpYWxpemF0aW9uID0ge30sXG4gICAgc291cmNlRHVyYXRpb24sXG4gICAgaW5kZXhSYW5nZSA9ICcnLFxuICAgIHBlcmlvZFN0YXJ0LFxuICAgIHByZXNlbnRhdGlvblRpbWUsXG4gICAgbnVtYmVyID0gMCxcbiAgICBkdXJhdGlvblxuICB9ID0gYXR0cmlidXRlczsgLy8gYmFzZSB1cmwgaXMgcmVxdWlyZWQgZm9yIFNlZ21lbnRCYXNlIHRvIHdvcmssIHBlciBzcGVjIChTZWN0aW9uIDUuMy45LjIuMSlcblxuICBpZiAoIWJhc2VVcmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLk5PX0JBU0VfVVJMKTtcbiAgfVxuXG4gIGNvbnN0IGluaXRTZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybCxcbiAgICBzb3VyY2U6IGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIGNvbnN0IHNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIHNvdXJjZTogYmFzZVVybCxcbiAgICBpbmRleFJhbmdlXG4gIH0pO1xuICBzZWdtZW50Lm1hcCA9IGluaXRTZWdtZW50OyAvLyBJZiB0aGVyZSBpcyBhIGR1cmF0aW9uLCB1c2UgaXQsIG90aGVyd2lzZSB1c2UgdGhlIGdpdmVuIGR1cmF0aW9uIG9mIHRoZSBzb3VyY2VcbiAgLy8gKHNpbmNlIFNlZ21lbnRCYXNlIGlzIG9ubHkgZm9yIG9uZSB0b3RhbCBzZWdtZW50KVxuXG4gIGlmIChkdXJhdGlvbikge1xuICAgIGNvbnN0IHNlZ21lbnRUaW1lSW5mbyA9IHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcblxuICAgIGlmIChzZWdtZW50VGltZUluZm8ubGVuZ3RoKSB7XG4gICAgICBzZWdtZW50LmR1cmF0aW9uID0gc2VnbWVudFRpbWVJbmZvWzBdLmR1cmF0aW9uO1xuICAgICAgc2VnbWVudC50aW1lbGluZSA9IHNlZ21lbnRUaW1lSW5mb1swXS50aW1lbGluZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc291cmNlRHVyYXRpb24pIHtcbiAgICBzZWdtZW50LmR1cmF0aW9uID0gc291cmNlRHVyYXRpb247XG4gICAgc2VnbWVudC50aW1lbGluZSA9IHBlcmlvZFN0YXJ0O1xuICB9IC8vIElmIHByZXNlbnRhdGlvbiB0aW1lIGlzIHByb3ZpZGVkLCB0aGVzZSBzZWdtZW50cyBhcmUgYmVpbmcgZ2VuZXJhdGVkIGJ5IFNJRFhcbiAgLy8gcmVmZXJlbmNlcywgYW5kIHNob3VsZCB1c2UgdGhlIHRpbWUgcHJvdmlkZWQuIEZvciB0aGUgZ2VuZXJhbCBjYXNlIG9mIFNlZ21lbnRCYXNlLFxuICAvLyB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgc2VnbWVudCBpbiB0aGUgcGVyaW9kLCBzbyBpdHMgcHJlc2VudGF0aW9uIHRpbWUgaXMgdGhlIHNhbWVcbiAgLy8gYXMgaXRzIHBlcmlvZCBzdGFydC5cblxuXG4gIHNlZ21lbnQucHJlc2VudGF0aW9uVGltZSA9IHByZXNlbnRhdGlvblRpbWUgfHwgcGVyaW9kU3RhcnQ7XG4gIHNlZ21lbnQubnVtYmVyID0gbnVtYmVyO1xuICByZXR1cm4gW3NlZ21lbnRdO1xufTtcbi8qKlxuICogR2l2ZW4gYSBwbGF5bGlzdCwgYSBzaWR4IGJveCwgYW5kIGEgYmFzZVVybCwgdXBkYXRlIHRoZSBzZWdtZW50IGxpc3Qgb2YgdGhlIHBsYXlsaXN0XG4gKiBhY2NvcmRpbmcgdG8gdGhlIHNpZHggaW5mb3JtYXRpb24gZ2l2ZW4uXG4gKlxuICogcGxheWxpc3Quc2lkeCBoYXMgbWV0YWRhZGF0YSBhYm91dCB0aGUgc2lkeCB3aGVyZS1hcyB0aGUgc2lkeCBwYXJhbVxuICogaXMgdGhlIHBhcnNlZCBzaWR4IGJveCBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBsYXlsaXN0IHRoZSBwbGF5bGlzdCB0byB1cGRhdGUgdGhlIHNpZHggaW5mb3JtYXRpb24gZm9yXG4gKiBAcGFyYW0ge09iamVjdH0gc2lkeCB0aGUgcGFyc2VkIHNpZHggYm94XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwbGF5bGlzdCBvYmplY3Qgd2l0aCB0aGUgdXBkYXRlZCBzaWR4IGluZm9ybWF0aW9uXG4gKi9cblxuY29uc3QgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCQxID0gKHBsYXlsaXN0LCBzaWR4LCBiYXNlVXJsKSA9PiB7XG4gIC8vIFJldGFpbiBpbml0IHNlZ21lbnQgaW5mb3JtYXRpb25cbiAgY29uc3QgaW5pdFNlZ21lbnQgPSBwbGF5bGlzdC5zaWR4Lm1hcCA/IHBsYXlsaXN0LnNpZHgubWFwIDogbnVsbDsgLy8gUmV0YWluIHNvdXJjZSBkdXJhdGlvbiBmcm9tIGluaXRpYWwgbWFpbiBtYW5pZmVzdCBwYXJzaW5nXG5cbiAgY29uc3Qgc291cmNlRHVyYXRpb24gPSBwbGF5bGlzdC5zaWR4LmR1cmF0aW9uOyAvLyBSZXRhaW4gc291cmNlIHRpbWVsaW5lXG5cbiAgY29uc3QgdGltZWxpbmUgPSBwbGF5bGlzdC50aW1lbGluZSB8fCAwO1xuICBjb25zdCBzaWR4Qnl0ZVJhbmdlID0gcGxheWxpc3Quc2lkeC5ieXRlcmFuZ2U7XG4gIGNvbnN0IHNpZHhFbmQgPSBzaWR4Qnl0ZVJhbmdlLm9mZnNldCArIHNpZHhCeXRlUmFuZ2UubGVuZ3RoOyAvLyBSZXRhaW4gdGltZXNjYWxlIG9mIHRoZSBwYXJzZWQgc2lkeFxuXG4gIGNvbnN0IHRpbWVzY2FsZSA9IHNpZHgudGltZXNjYWxlOyAvLyByZWZlcmVuY2VUeXBlIDEgcmVmZXJzIHRvIG90aGVyIHNpZHggYm94ZXNcblxuICBjb25zdCBtZWRpYVJlZmVyZW5jZXMgPSBzaWR4LnJlZmVyZW5jZXMuZmlsdGVyKHIgPT4gci5yZWZlcmVuY2VUeXBlICE9PSAxKTtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgY29uc3QgdHlwZSA9IHBsYXlsaXN0LmVuZExpc3QgPyAnc3RhdGljJyA6ICdkeW5hbWljJztcbiAgY29uc3QgcGVyaW9kU3RhcnQgPSBwbGF5bGlzdC5zaWR4LnRpbWVsaW5lO1xuICBsZXQgcHJlc2VudGF0aW9uVGltZSA9IHBlcmlvZFN0YXJ0O1xuICBsZXQgbnVtYmVyID0gcGxheWxpc3QubWVkaWFTZXF1ZW5jZSB8fCAwOyAvLyBmaXJzdE9mZnNldCBpcyB0aGUgb2Zmc2V0IGZyb20gdGhlIGVuZCBvZiB0aGUgc2lkeCBib3hcblxuICBsZXQgc3RhcnRJbmRleDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgaWYgKHR5cGVvZiBzaWR4LmZpcnN0T2Zmc2V0ID09PSAnYmlnaW50Jykge1xuICAgIHN0YXJ0SW5kZXggPSB3aW5kb3cuQmlnSW50KHNpZHhFbmQpICsgc2lkeC5maXJzdE9mZnNldDtcbiAgfSBlbHNlIHtcbiAgICBzdGFydEluZGV4ID0gc2lkeEVuZCArIHNpZHguZmlyc3RPZmZzZXQ7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhUmVmZXJlbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNpZHgucmVmZXJlbmNlc1tpXTsgLy8gc2l6ZSBvZiB0aGUgcmVmZXJlbmNlZCAoc3ViKXNlZ21lbnRcblxuICAgIGNvbnN0IHNpemUgPSByZWZlcmVuY2UucmVmZXJlbmNlZFNpemU7IC8vIGR1cmF0aW9uIG9mIHRoZSByZWZlcmVuY2VkIChzdWIpc2VnbWVudCwgaW4gIHRoZSAgdGltZXNjYWxlXG4gICAgLy8gdGhpcyB3aWxsIGJlIGNvbnZlcnRlZCB0byBzZWNvbmRzIHdoZW4gZ2VuZXJhdGluZyBzZWdtZW50c1xuXG4gICAgY29uc3QgZHVyYXRpb24gPSByZWZlcmVuY2Uuc3Vic2VnbWVudER1cmF0aW9uOyAvLyBzaG91bGQgYmUgYW4gaW5jbHVzaXZlIHJhbmdlXG5cbiAgICBsZXQgZW5kSW5kZXg7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgaWYgKHR5cGVvZiBzdGFydEluZGV4ID09PSAnYmlnaW50Jykge1xuICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgd2luZG93LkJpZ0ludChzaXplKSAtIHdpbmRvdy5CaWdJbnQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHNpemUgLSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4UmFuZ2UgPSBgJHtzdGFydEluZGV4fS0ke2VuZEluZGV4fWA7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgIGJhc2VVcmwsXG4gICAgICB0aW1lc2NhbGUsXG4gICAgICB0aW1lbGluZSxcbiAgICAgIHBlcmlvZFN0YXJ0LFxuICAgICAgcHJlc2VudGF0aW9uVGltZSxcbiAgICAgIG51bWJlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgc291cmNlRHVyYXRpb24sXG4gICAgICBpbmRleFJhbmdlLFxuICAgICAgdHlwZVxuICAgIH07XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzRnJvbUJhc2UoYXR0cmlidXRlcylbMF07XG5cbiAgICBpZiAoaW5pdFNlZ21lbnQpIHtcbiAgICAgIHNlZ21lbnQubWFwID0gaW5pdFNlZ21lbnQ7XG4gICAgfVxuXG4gICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcblxuICAgIGlmICh0eXBlb2Ygc3RhcnRJbmRleCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHN0YXJ0SW5kZXggKz0gd2luZG93LkJpZ0ludChzaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCArPSBzaXplO1xuICAgIH1cblxuICAgIHByZXNlbnRhdGlvblRpbWUgKz0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XG4gICAgbnVtYmVyKys7XG4gIH1cblxuICBwbGF5bGlzdC5zZWdtZW50cyA9IHNlZ21lbnRzO1xuICByZXR1cm4gcGxheWxpc3Q7XG59O1xuXG5jb25zdCBTVVBQT1JURURfTUVESUFfVFlQRVMgPSBbJ0FVRElPJywgJ1NVQlRJVExFUyddOyAvLyBhbGxvdyBvbmUgNjBmcHMgZnJhbWUgYXMgbGVuaWVuY3kgKGFyYml0cmFyaWx5IGNob3NlbilcblxuY29uc3QgVElNRV9GVURHRSA9IDEgLyA2MDtcbi8qKlxuICogR2l2ZW4gYSBsaXN0IG9mIHRpbWVsaW5lU3RhcnRzLCBjb21iaW5lcywgZGVkdXBlcywgYW5kIHNvcnRzIHRoZW0uXG4gKlxuICogQHBhcmFtIHtUaW1lbGluZVN0YXJ0W119IHRpbWVsaW5lU3RhcnRzIC0gbGlzdCBvZiB0aW1lbGluZSBzdGFydHNcbiAqXG4gKiBAcmV0dXJuIHtUaW1lbGluZVN0YXJ0W119IHRoZSBjb21iaW5lZCBhbmQgZGVkdXBlZCB0aW1lbGluZSBzdGFydHNcbiAqL1xuXG5jb25zdCBnZXRVbmlxdWVUaW1lbGluZVN0YXJ0cyA9IHRpbWVsaW5lU3RhcnRzID0+IHtcbiAgcmV0dXJuIHVuaW9uKHRpbWVsaW5lU3RhcnRzLCAoe1xuICAgIHRpbWVsaW5lXG4gIH0pID0+IHRpbWVsaW5lKS5zb3J0KChhLCBiKSA9PiBhLnRpbWVsaW5lID4gYi50aW1lbGluZSA/IDEgOiAtMSk7XG59O1xuLyoqXG4gKiBGaW5kcyB0aGUgcGxheWxpc3Qgd2l0aCB0aGUgbWF0Y2hpbmcgTkFNRSBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGxheWxpc3RzIC0gcGxheWxpc3RzIHRvIHNlYXJjaCB0aHJvdWdoXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHRoZSBOQU1FIGF0dHJpYnV0ZSB0byBzZWFyY2ggZm9yXG4gKlxuICogQHJldHVybiB7T2JqZWN0fG51bGx9IHRoZSBtYXRjaGluZyBwbGF5bGlzdCBvYmplY3QsIG9yIG51bGxcbiAqL1xuXG5jb25zdCBmaW5kUGxheWxpc3RXaXRoTmFtZSA9IChwbGF5bGlzdHMsIG5hbWUpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGxheWxpc3RzW2ldLmF0dHJpYnV0ZXMuTkFNRSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHBsYXlsaXN0c1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIEdldHMgYSBmbGF0dGVuZWQgYXJyYXkgb2YgbWVkaWEgZ3JvdXAgcGxheWxpc3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCAtIHRoZSBtYWluIG1hbmlmZXN0IG9iamVjdFxuICpcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgbWVkaWEgZ3JvdXAgcGxheWxpc3RzXG4gKi9cblxuY29uc3QgZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyA9IG1hbmlmZXN0ID0+IHtcbiAgbGV0IG1lZGlhR3JvdXBQbGF5bGlzdHMgPSBbXTtcbiAgZm9yRWFjaE1lZGlhR3JvdXAobWFuaWZlc3QsIFNVUFBPUlRFRF9NRURJQV9UWVBFUywgKHByb3BlcnRpZXMsIHR5cGUsIGdyb3VwLCBsYWJlbCkgPT4ge1xuICAgIG1lZGlhR3JvdXBQbGF5bGlzdHMgPSBtZWRpYUdyb3VwUGxheWxpc3RzLmNvbmNhdChwcm9wZXJ0aWVzLnBsYXlsaXN0cyB8fCBbXSk7XG4gIH0pO1xuICByZXR1cm4gbWVkaWFHcm91cFBsYXlsaXN0cztcbn07XG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBsYXlsaXN0J3MgbWVkaWEgc2VxdWVuY2UgbnVtYmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcucGxheWxpc3QgLSB0aGUgcGxheWxpc3QgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLm1lZGlhU2VxdWVuY2UgLSB0aGUgbWVkaWFTZXF1ZW5jZSBudW1iZXIgdG8gc3RhcnQgd2l0aFxuICovXG5cbmNvbnN0IHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCA9ICh7XG4gIHBsYXlsaXN0LFxuICBtZWRpYVNlcXVlbmNlXG59KSA9PiB7XG4gIHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgPSBtZWRpYVNlcXVlbmNlO1xuICBwbGF5bGlzdC5zZWdtZW50cy5mb3JFYWNoKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgIHNlZ21lbnQubnVtYmVyID0gcGxheWxpc3QubWVkaWFTZXF1ZW5jZSArIGluZGV4O1xuICB9KTtcbn07XG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1lZGlhIGFuZCBkaXNjb250aW51aXR5IHNlcXVlbmNlIG51bWJlcnMgb2YgbmV3UGxheWxpc3RzIGdpdmVuIG9sZFBsYXlsaXN0c1xuICogYW5kIGEgY29tcGxldGUgbGlzdCBvZiB0aW1lbGluZSBzdGFydHMuXG4gKlxuICogSWYgbm8gbWF0Y2hpbmcgcGxheWxpc3QgaXMgZm91bmQsIG9ubHkgdGhlIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgbnVtYmVyIG9mIHRoZSBwbGF5bGlzdFxuICogd2lsbCBiZSB1cGRhdGVkLlxuICpcbiAqIFNpbmNlIGVhcmx5IGF2YWlsYWJsZSB0aW1lbGluZXMgYXJlIG5vdCBzdXBwb3J0ZWQsIGF0IGxlYXN0IG9uZSBzZWdtZW50IG11c3QgYmUgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFBsYXlsaXN0cyAtIHRoZSBvbGQgcGxheWxpc3RzIHRvIHVzZSBhcyBhIHJlZmVyZW5jZVxuICogQHBhcmFtIHtPYmplY3RbXX0gbmV3UGxheWxpc3RzIC0gdGhlIG5ldyBwbGF5bGlzdHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdGltZWxpbmVTdGFydHMgLSBhbGwgdGltZWxpbmVTdGFydHMgc2VlbiBpbiB0aGUgc3RyZWFtIHRvIHRoaXMgcG9pbnRcbiAqL1xuXG5jb25zdCB1cGRhdGVTZXF1ZW5jZU51bWJlcnMgPSAoe1xuICBvbGRQbGF5bGlzdHMsXG4gIG5ld1BsYXlsaXN0cyxcbiAgdGltZWxpbmVTdGFydHNcbn0pID0+IHtcbiAgbmV3UGxheWxpc3RzLmZvckVhY2gocGxheWxpc3QgPT4ge1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZSA9IHRpbWVsaW5lU3RhcnRzLmZpbmRJbmRleChmdW5jdGlvbiAoe1xuICAgICAgdGltZWxpbmVcbiAgICB9KSB7XG4gICAgICByZXR1cm4gdGltZWxpbmUgPT09IHBsYXlsaXN0LnRpbWVsaW5lO1xuICAgIH0pOyAvLyBQbGF5bGlzdHMgTkFNRXMgY29tZSBmcm9tIERBU0ggUmVwcmVzZW50YXRpb24gSURzLCB3aGljaCBhcmUgbWFuZGF0b3J5XG4gICAgLy8gKHNlZSBJU09fMjMwMDktMS0yMDEyIDUuMy41LjIpLlxuICAgIC8vXG4gICAgLy8gSWYgdGhlIHNhbWUgUmVwcmVzZW50YXRpb24gZXhpc3RlZCBpbiBhIHByaW9yIFBlcmlvZCwgaXQgd2lsbCByZXRhaW4gdGhlIHNhbWUgTkFNRS5cblxuICAgIGNvbnN0IG9sZFBsYXlsaXN0ID0gZmluZFBsYXlsaXN0V2l0aE5hbWUob2xkUGxheWxpc3RzLCBwbGF5bGlzdC5hdHRyaWJ1dGVzLk5BTUUpO1xuXG4gICAgaWYgKCFvbGRQbGF5bGlzdCkge1xuICAgICAgLy8gU2luY2UgdGhpcyBpcyBhIG5ldyBwbGF5bGlzdCwgdGhlIG1lZGlhIHNlcXVlbmNlIHZhbHVlcyBjYW4gc3RhcnQgZnJvbSAwIHdpdGhvdXRcbiAgICAgIC8vIGNvbnNlcXVlbmNlLlxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVE9ETyBiZXR0ZXIgc3VwcG9ydCBmb3IgbGl2ZSBTSURYXG4gICAgLy9cbiAgICAvLyBBcyBvZiB0aGlzIHdyaXRpbmcsIG1wZC1wYXJzZXIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBlcmlvZCBTSURYIChpbiBsaXZlIG9yIFZPRCkuXG4gICAgLy8gVGhpcyBpcyBldmlkZW50IGJ5IGEgcGxheWxpc3Qgb25seSBoYXZpbmcgYSBzaW5nbGUgU0lEWCByZWZlcmVuY2UuIEluIGEgbXVsdGlwZXJpb2RcbiAgICAvLyBwbGF5bGlzdCB0aGVyZSB3b3VsZCBuZWVkIHRvIGJlIG11bHRpcGxlIFNJRFggcmVmZXJlbmNlcy4gSW4gYWRkaXRpb24sIGxpdmUgU0lEWCBpc1xuICAgIC8vIG5vdCBzdXBwb3J0ZWQgd2hlbiB0aGUgU0lEWCBwcm9wZXJ0aWVzIGNoYW5nZSBvbiByZWZyZXNoZXMuXG4gICAgLy9cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCBpZiBzdXBwb3J0IG5lZWRzIHRvIGJlIGFkZGVkLCB0aGUgbWVyZ2luZyBsb2dpYyBoZXJlIGNhbiBiZSBjYWxsZWRcbiAgICAvLyBhZnRlciBTSURYIHJlZmVyZW5jZXMgYXJlIHJlc29sdmVkLiBGb3Igbm93LCBleGl0IGVhcmx5IHRvIHByZXZlbnQgZXhjZXB0aW9ucyBiZWluZ1xuICAgIC8vIHRocm93biBkdWUgdG8gdW5kZWZpbmVkIHJlZmVyZW5jZXMuXG5cblxuICAgIGlmIChwbGF5bGlzdC5zaWR4KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTaW5jZSB3ZSBkb24ndCB5ZXQgc3VwcG9ydCBlYXJseSBhdmFpbGFibGUgdGltZWxpbmVzLCB3ZSBkb24ndCBuZWVkIHRvIHN1cHBvcnRcbiAgICAvLyBwbGF5bGlzdHMgd2l0aCBubyBzZWdtZW50cy5cblxuXG4gICAgY29uc3QgZmlyc3ROZXdTZWdtZW50ID0gcGxheWxpc3Quc2VnbWVudHNbMF07XG4gICAgY29uc3Qgb2xkTWF0Y2hpbmdTZWdtZW50SW5kZXggPSBvbGRQbGF5bGlzdC5zZWdtZW50cy5maW5kSW5kZXgoZnVuY3Rpb24gKG9sZFNlZ21lbnQpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhvbGRTZWdtZW50LnByZXNlbnRhdGlvblRpbWUgLSBmaXJzdE5ld1NlZ21lbnQucHJlc2VudGF0aW9uVGltZSkgPCBUSU1FX0ZVREdFO1xuICAgIH0pOyAvLyBObyBtYXRjaGluZyBzZWdtZW50IGZyb20gdGhlIG9sZCBwbGF5bGlzdCBtZWFucyB0aGUgZW50aXJlIHBsYXlsaXN0IHdhcyByZWZyZXNoZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlIHRoZSBtZWRpYSBzZXF1ZW5jZSBzaG91bGQgYWNjb3VudCBmb3IgdGhpcyB1cGRhdGUsIGFuZCB0aGUgbmV3IHNlZ21lbnRzXG4gICAgLy8gc2hvdWxkIGJlIG1hcmtlZCBhcyBkaXNjb250aW51b3VzIGZyb20gdGhlIHByaW9yIGNvbnRlbnQsIHNpbmNlIHRoZSBsYXN0IHByaW9yXG4gICAgLy8gdGltZWxpbmUgd2FzIHJlbW92ZWQuXG5cbiAgICBpZiAob2xkTWF0Y2hpbmdTZWdtZW50SW5kZXggPT09IC0xKSB7XG4gICAgICB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3Qoe1xuICAgICAgICBwbGF5bGlzdCxcbiAgICAgICAgbWVkaWFTZXF1ZW5jZTogb2xkUGxheWxpc3QubWVkaWFTZXF1ZW5jZSArIG9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aFxuICAgICAgfSk7XG4gICAgICBwbGF5bGlzdC5zZWdtZW50c1swXS5kaXNjb250aW51aXR5ID0gdHJ1ZTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMudW5zaGlmdCgwKTsgLy8gTm8gbWF0Y2hpbmcgc2VnbWVudCBkb2VzIG5vdCBuZWNlc3NhcmlseSBtZWFuIHRoZXJlJ3MgbWlzc2luZyBjb250ZW50LlxuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZSBuZXcgcGxheWxpc3QncyB0aW1lbGluZSBpcyB0aGUgc2FtZSBhcyB0aGUgbGFzdCBzZWVuIHNlZ21lbnQncyB0aW1lbGluZSxcbiAgICAgIC8vIHRoZW4gYSBkaXNjb250aW51aXR5IGNhbiBiZSBhZGRlZCB0byBpZGVudGlmeSB0aGF0IHRoZXJlJ3MgcG90ZW50aWFsbHkgbWlzc2luZ1xuICAgICAgLy8gY29udGVudC4gSWYgdGhlcmUncyBubyBtaXNzaW5nIGNvbnRlbnQsIHRoZSBkaXNjb250aW51aXR5IHNob3VsZCBzdGlsbCBiZSByYXRoZXJcbiAgICAgIC8vIGhhcm1sZXNzLiBJdCdzIHBvc3NpYmxlIHRoYXQgaWYgc2VnbWVudCBkdXJhdGlvbnMgYXJlIGFjY3VyYXRlIGVub3VnaCwgdGhhdCB0aGVcbiAgICAgIC8vIGV4aXN0ZW5jZSBvZiBhIGdhcCBjYW4gYmUgZGV0ZXJtaW5lZCB1c2luZyB0aGUgcHJlc2VudGF0aW9uIHRpbWVzIGFuZCBkdXJhdGlvbnMsXG4gICAgICAvLyBidXQgaWYgdGhlIHNlZ21lbnQgdGltaW5nIGluZm8gaXMgb2ZmLCBpdCBtYXkgaW50cm9kdWNlIG1vcmUgcHJvYmxlbXMgdGhhbiBzaW1wbHlcbiAgICAgIC8vIGFkZGluZyB0aGUgZGlzY29udGludWl0eS5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbmV3IHBsYXlsaXN0J3MgdGltZWxpbmUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGxhc3Qgc2VlbiBzZWdtZW50J3MgdGltZWxpbmUsXG4gICAgICAvLyB0aGVuIGEgZGlzY29udGludWl0eSBjYW4gYmUgYWRkZWQgdG8gaWRlbnRpZnkgdGhhdCB0aGlzIGlzIHRoZSBmaXJzdCBzZWVuIHNlZ21lbnRcbiAgICAgIC8vIG9mIGEgbmV3IHRpbWVsaW5lLiBIb3dldmVyLCB0aGUgbG9naWMgYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb24gdGhhdFxuICAgICAgLy8gZGV0ZXJtaW5lZCB0aGUgZGlzY29uaW51aXR5IHNlcXVlbmNlIGJ5IHRpbWVsaW5lIGluZGV4IGlzIG5vdyBvZmYgYnkgb25lICh0aGVcbiAgICAgIC8vIGRpc2NvbnRpbnVpdHkgb2YgdGhlIG5ld2VzdCB0aW1lbGluZSBoYXNuJ3QgeWV0IGZhbGxlbiBvZmYgdGhlIG1hbmlmZXN0Li4uc2luY2VcbiAgICAgIC8vIHdlIGFkZGVkIGl0KSwgc28gdGhlIGRpc2NvbmludWl0eSBzZXF1ZW5jZSBtdXN0IGJlIGRlY3JlbWVudGVkLlxuICAgICAgLy9cbiAgICAgIC8vIEEgcGVyaW9kIG1heSBhbHNvIGhhdmUgYSBkdXJhdGlvbiBvZiB6ZXJvLCBzbyB0aGUgY2FzZSBvZiBubyBzZWdtZW50cyBpcyBoYW5kbGVkXG4gICAgICAvLyBoZXJlIGV2ZW4gdGhvdWdoIHdlIGRvbid0IHlldCBzdXBwb3J0IGVhcmx5IGF2YWlsYWJsZSBwZXJpb2RzLlxuXG4gICAgICBpZiAoIW9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAmJiBwbGF5bGlzdC50aW1lbGluZSA+IG9sZFBsYXlsaXN0LnRpbWVsaW5lIHx8IG9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAmJiBwbGF5bGlzdC50aW1lbGluZSA+IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAtIDFdLnRpbWVsaW5lKSB7XG4gICAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZS0tO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB0aGUgZmlyc3Qgc2VnbWVudCBtYXRjaGVkIHdpdGggYSBwcmlvciBzZWdtZW50IG9uIGEgZGlzY29udGludWl0eSAoaXQncyBtYXRjaGluZ1xuICAgIC8vIG9uIHRoZSBmaXJzdCBzZWdtZW50IG9mIGEgcGVyaW9kKSwgdGhlbiB0aGUgZGlzY29udGludWl0eVNlcXVlbmNlIHNob3VsZG4ndCBiZSB0aGVcbiAgICAvLyB0aW1lbGluZSdzIG1hdGNoaW5nIG9uZSwgYnV0IGluc3RlYWQgc2hvdWxkIGJlIHRoZSBvbmUgcHJpb3IsIGFuZCB0aGUgZmlyc3Qgc2VnbWVudFxuICAgIC8vIG9mIHRoZSBuZXcgbWFuaWZlc3Qgc2hvdWxkIGJlIG1hcmtlZCB3aXRoIGEgZGlzY29udGludWl0eS5cbiAgICAvL1xuICAgIC8vIFRoZSByZWFzb24gZm9yIHRoaXMgc3BlY2lhbCBjYXNlIGlzIHRoYXQgZGlzY29udGludWl0eSBzZXF1ZW5jZSBzaG93cyBob3cgbWFueVxuICAgIC8vIGRpc2NvbnRpbnVpdGllcyBoYXZlIGZhbGxlbiBvZmYgb2YgdGhlIHBsYXlsaXN0LCBhbmQgZGlzY29udGludWl0aWVzIGFyZSBtYXJrZWQgb25cbiAgICAvLyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIG5ldyBcInRpbWVsaW5lLlwiIEJlY2F1c2Ugb2YgdGhpcywgd2hpbGUgREFTSCB3aWxsIHJldGFpbiB0aGF0XG4gICAgLy8gUGVyaW9kIHdoaWxlIHRoZSBcInRpbWVsaW5lXCIgZXhpc3RzLCBITFMga2VlcHMgdHJhY2sgb2YgaXQgdmlhIHRoZSBkaXNjb250aW51aXR5XG4gICAgLy8gc2VxdWVuY2UsIGFuZCB0aGF0IGZpcnN0IHNlZ21lbnQgaXMgYW4gaW5kaWNhdG9yLCBidXQgY2FuIGJlIHJlbW92ZWQgYmVmb3JlIHRoYXRcbiAgICAvLyB0aW1lbGluZSBpcyBnb25lLlxuXG5cbiAgICBjb25zdCBvbGRNYXRjaGluZ1NlZ21lbnQgPSBvbGRQbGF5bGlzdC5zZWdtZW50c1tvbGRNYXRjaGluZ1NlZ21lbnRJbmRleF07XG5cbiAgICBpZiAob2xkTWF0Y2hpbmdTZWdtZW50LmRpc2NvbnRpbnVpdHkgJiYgIWZpcnN0TmV3U2VnbWVudC5kaXNjb250aW51aXR5KSB7XG4gICAgICBmaXJzdE5ld1NlZ21lbnQuZGlzY29udGludWl0eSA9IHRydWU7XG4gICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U3RhcnRzLnVuc2hpZnQoMCk7XG4gICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U2VxdWVuY2UtLTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3Qoe1xuICAgICAgcGxheWxpc3QsXG4gICAgICBtZWRpYVNlcXVlbmNlOiBvbGRQbGF5bGlzdC5zZWdtZW50c1tvbGRNYXRjaGluZ1NlZ21lbnRJbmRleF0ubnVtYmVyXG4gICAgfSk7XG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYW4gb2xkIHBhcnNlZCBtYW5pZmVzdCBvYmplY3QgYW5kIGEgbmV3IHBhcnNlZCBtYW5pZmVzdCBvYmplY3QsIHVwZGF0ZXMgdGhlXG4gKiBzZXF1ZW5jZSBhbmQgdGltaW5nIHZhbHVlcyB3aXRoaW4gdGhlIG5ldyBtYW5pZmVzdCB0byBlbnN1cmUgdGhhdCBpdCBsaW5lcyB1cCB3aXRoIHRoZVxuICogb2xkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IG9sZE1hbmlmZXN0IC0gdGhlIG9sZCBtYWluIG1hbmlmZXN0IG9iamVjdFxuICogQHBhcmFtIHtBcnJheX0gbmV3TWFuaWZlc3QgLSB0aGUgbmV3IG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdXBkYXRlZCBuZXcgbWFuaWZlc3Qgb2JqZWN0XG4gKi9cblxuY29uc3QgcG9zaXRpb25NYW5pZmVzdE9uVGltZWxpbmUgPSAoe1xuICBvbGRNYW5pZmVzdCxcbiAgbmV3TWFuaWZlc3Rcbn0pID0+IHtcbiAgLy8gU3RhcnRpbmcgZnJvbSB2NC4xLjIgb2YgdGhlIElPUCwgc2VjdGlvbiA0LjQuMy4zIHN0YXRlczpcbiAgLy9cbiAgLy8gXCJNUERAYXZhaWxhYmlsaXR5U3RhcnRUaW1lIGFuZCBQZXJpb2RAc3RhcnQgc2hhbGwgbm90IGJlIGNoYW5nZWQgb3ZlciBNUEQgdXBkYXRlcy5cIlxuICAvL1xuICAvLyBUaGlzIHdhcyBhZGRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXNoLUluZHVzdHJ5LUZvcnVtL0RBU0gtSUYtSU9QL2lzc3Vlcy8xNjBcbiAgLy9cbiAgLy8gQmVjYXVzZSBvZiB0aGlzIGNoYW5nZSwgYW5kIHRoZSBkaWZmaWN1bHR5IG9mIHN1cHBvcnRpbmcgcGVyaW9kcyB3aXRoIGNoYW5naW5nIHN0YXJ0XG4gIC8vIHRpbWVzLCBwZXJpb2RzIHdpdGggY2hhbmdpbmcgc3RhcnQgdGltZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFRoaXMgbWFrZXMgdGhlIGxvZ2ljIG11Y2hcbiAgLy8gc2ltcGxlciwgc2luY2UgcGVyaW9kcyB3aXRoIHRoZSBzYW1lIHN0YXJ0IHRpbWUgY2FuIGJlIGNvbnNpZGVycmVkIHRoZSBzYW1lIHBlcmlvZFxuICAvLyBhY3Jvc3MgcmVmcmVzaGVzLlxuICAvL1xuICAvLyBUbyBnaXZlIGFuIGV4YW1wbGUgYXMgdG8gdGhlIGRpZmZpY3VsdHkgb2YgaGFuZGxpbmcgcGVyaW9kcyB3aGVyZSB0aGUgc3RhcnQgdGltZSBtYXlcbiAgLy8gY2hhbmdlLCBpZiBhIHNpbmdsZSBwZXJpb2QgbWFuaWZlc3QgaXMgcmVmcmVzaGVkIHdpdGggYW5vdGhlciBtYW5pZmVzdCB3aXRoIGEgc2luZ2xlXG4gIC8vIHBlcmlvZCwgYW5kIGJvdGggdGhlIHN0YXJ0IGFuZCBlbmQgdGltZXMgYXJlIGluY3JlYXNlZCwgdGhlbiB0aGUgb25seSB3YXkgdG8gZGV0ZXJtaW5lXG4gIC8vIGlmIGl0J3MgYSBuZXcgcGVyaW9kIG9yIGFuIG9sZCBvbmUgdGhhdCBoYXMgY2hhbmdlZCBpcyB0byBsb29rIHRocm91Z2ggdGhlIHNlZ21lbnRzIG9mXG4gIC8vIGVhY2ggcGxheWxpc3QgYW5kIGRldGVybWluZSB0aGUgcHJlc2VudGF0aW9uIHRpbWUgYm91bmRzIHRvIGZpbmQgYSBtYXRjaC4gSW4gYWRkaXRpb24sXG4gIC8vIGlmIHRoZSBwZXJpb2Qgc3RhcnQgY2hhbmdlZCB0byBleGNlZWQgdGhlIG9sZCBwZXJpb2QgZW5kLCB0aGVuIHRoZXJlIHdvdWxkIGJlIG5vXG4gIC8vIG1hdGNoLCBhbmQgaXQgd291bGQgbm90IGJlIHBvc3NpYmxlIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSByZWZyZXNoZWQgcGVyaW9kIGlzIGEgbmV3XG4gIC8vIG9uZSBvciB0aGUgb2xkIG9uZS5cbiAgY29uc3Qgb2xkUGxheWxpc3RzID0gb2xkTWFuaWZlc3QucGxheWxpc3RzLmNvbmNhdChnZXRNZWRpYUdyb3VwUGxheWxpc3RzKG9sZE1hbmlmZXN0KSk7XG4gIGNvbnN0IG5ld1BsYXlsaXN0cyA9IG5ld01hbmlmZXN0LnBsYXlsaXN0cy5jb25jYXQoZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyhuZXdNYW5pZmVzdCkpOyAvLyBTYXZlIGFsbCBzZWVuIHRpbWVsaW5lU3RhcnRzIHRvIHRoZSBuZXcgbWFuaWZlc3QuIEFsdGhvdWdoIHRoaXMgcG90ZW50aWFsbHkgbWVhbnMgdGhhdFxuICAvLyB0aGVyZSdzIGEgXCJtZW1vcnkgbGVha1wiIGluIHRoYXQgaXQgd2lsbCBuZXZlciBzdG9wIGdyb3dpbmcsIGluIHJlYWxpdHksIG9ubHkgYSBjb3VwbGVcbiAgLy8gb2YgcHJvcGVydGllcyBhcmUgc2F2ZWQgZm9yIGVhY2ggc2VlbiBQZXJpb2QuIEV2ZW4gbG9uZyBydW5uaW5nIGxpdmUgc3RyZWFtcyB3b24ndFxuICAvLyBnZW5lcmF0ZSB0b28gbWFueSBQZXJpb2RzLCB1bmxlc3MgdGhlIHN0cmVhbSBpcyB3YXRjaGVkIGZvciBkZWNhZGVzLiBJbiB0aGUgZnV0dXJlLFxuICAvLyB0aGlzIGNhbiBiZSBvcHRpbWl6ZWQgYnkgbWFwcGluZyB0byBkaXNjb250aW51aXR5IHNlcXVlbmNlIG51bWJlcnMgZm9yIGVhY2ggdGltZWxpbmUsXG4gIC8vIGJ1dCBpdCBtYXkgbm90IGJlY29tZSBhbiBpc3N1ZSwgYW5kIHRoZSBhZGRpdGlvbmFsIGluZm8gY2FuIGJlIHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuXG4gIG5ld01hbmlmZXN0LnRpbWVsaW5lU3RhcnRzID0gZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMoW29sZE1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzLCBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0c10pO1xuICB1cGRhdGVTZXF1ZW5jZU51bWJlcnMoe1xuICAgIG9sZFBsYXlsaXN0cyxcbiAgICBuZXdQbGF5bGlzdHMsXG4gICAgdGltZWxpbmVTdGFydHM6IG5ld01hbmlmZXN0LnRpbWVsaW5lU3RhcnRzXG4gIH0pO1xuICByZXR1cm4gbmV3TWFuaWZlc3Q7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVNpZHhLZXkgPSBzaWR4ID0+IHNpZHggJiYgc2lkeC51cmkgKyAnLScgKyBieXRlUmFuZ2VUb1N0cmluZyhzaWR4LmJ5dGVyYW5nZSk7XG5cbmNvbnN0IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyA9IHBsYXlsaXN0cyA9PiB7XG4gIC8vIEJyZWFrIG91dCBwbGF5bGlzdHMgaW50byBncm91cHMgYmFzZWQgb24gdGhlaXIgYmFzZVVybFxuICBjb25zdCBwbGF5bGlzdHNCeUJhc2VVcmwgPSBwbGF5bGlzdHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cikge1xuICAgIGlmICghYWNjW2N1ci5hdHRyaWJ1dGVzLmJhc2VVcmxdKSB7XG4gICAgICBhY2NbY3VyLmF0dHJpYnV0ZXMuYmFzZVVybF0gPSBbXTtcbiAgICB9XG5cbiAgICBhY2NbY3VyLmF0dHJpYnV0ZXMuYmFzZVVybF0ucHVzaChjdXIpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgbGV0IGFsbFBsYXlsaXN0cyA9IFtdO1xuICBPYmplY3QudmFsdWVzKHBsYXlsaXN0c0J5QmFzZVVybCkuZm9yRWFjaChwbGF5bGlzdEdyb3VwID0+IHtcbiAgICBjb25zdCBtZXJnZWRQbGF5bGlzdHMgPSB2YWx1ZXMocGxheWxpc3RHcm91cC5yZWR1Y2UoKGFjYywgcGxheWxpc3QpID0+IHtcbiAgICAgIC8vIGFzc3VtaW5nIHBsYXlsaXN0IElEcyBhcmUgdGhlIHNhbWUgYWNyb3NzIHBlcmlvZHNcbiAgICAgIC8vIFRPRE86IGhhbmRsZSBtdWx0aXBlcmlvZCB3aGVyZSByZXByZXNlbnRhdGlvbiBzZXRzIGFyZSBub3QgdGhlIHNhbWVcbiAgICAgIC8vIGFjcm9zcyBwZXJpb2RzXG4gICAgICBjb25zdCBuYW1lID0gcGxheWxpc3QuYXR0cmlidXRlcy5pZCArIChwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJycpO1xuXG4gICAgICBpZiAoIWFjY1tuYW1lXSkge1xuICAgICAgICAvLyBGaXJzdCBQZXJpb2RcbiAgICAgICAgYWNjW25hbWVdID0gcGxheWxpc3Q7XG4gICAgICAgIGFjY1tuYW1lXS5hdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTdWJzZXF1ZW50IFBlcmlvZHNcbiAgICAgICAgaWYgKHBsYXlsaXN0LnNlZ21lbnRzKSB7XG4gICAgICAgICAgLy8gZmlyc3Qgc2VnbWVudCBvZiBzdWJzZXF1ZW50IHBlcmlvZHMgc2lnbmFsIGEgZGlzY29udGludWl0eVxuICAgICAgICAgIGlmIChwbGF5bGlzdC5zZWdtZW50c1swXSkge1xuICAgICAgICAgICAgcGxheWxpc3Quc2VnbWVudHNbMF0uZGlzY29udGludWl0eSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWNjW25hbWVdLnNlZ21lbnRzLnB1c2goLi4ucGxheWxpc3Quc2VnbWVudHMpO1xuICAgICAgICB9IC8vIGJ1YmJsZSB1cCBjb250ZW50UHJvdGVjdGlvbiwgdGhpcyBhc3N1bWVzIGFsbCBEUk0gY29udGVudFxuICAgICAgICAvLyBoYXMgdGhlIHNhbWUgY29udGVudFByb3RlY3Rpb25cblxuXG4gICAgICAgIGlmIChwbGF5bGlzdC5hdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgICAgICAgYWNjW25hbWVdLmF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb24gPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFjY1tuYW1lXS5hdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzLnB1c2goe1xuICAgICAgICAvLyBBbHRob3VnaCB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBudW1iZXIsIGl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYm90aCB0byBtYWtlIGl0XG4gICAgICAgIC8vIGNvbXBhdGlibGUgd2l0aCBITFMgcG90ZW50aWFsbHkgaGF2aW5nIGEgc2ltaWxhciBhdHRyaWJ1dGUuXG4gICAgICAgIHN0YXJ0OiBwbGF5bGlzdC5hdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgICB0aW1lbGluZTogcGxheWxpc3QuYXR0cmlidXRlcy5wZXJpb2RTdGFydFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KSk7XG4gICAgYWxsUGxheWxpc3RzID0gYWxsUGxheWxpc3RzLmNvbmNhdChtZXJnZWRQbGF5bGlzdHMpO1xuICB9KTtcbiAgcmV0dXJuIGFsbFBsYXlsaXN0cy5tYXAocGxheWxpc3QgPT4ge1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMgPSBmaW5kSW5kZXhlcyhwbGF5bGlzdC5zZWdtZW50cyB8fCBbXSwgJ2Rpc2NvbnRpbnVpdHknKTtcbiAgICByZXR1cm4gcGxheWxpc3Q7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCA9IChwbGF5bGlzdCwgc2lkeE1hcHBpbmcpID0+IHtcbiAgY29uc3Qgc2lkeEtleSA9IGdlbmVyYXRlU2lkeEtleShwbGF5bGlzdC5zaWR4KTtcbiAgY29uc3Qgc2lkeE1hdGNoID0gc2lkeEtleSAmJiBzaWR4TWFwcGluZ1tzaWR4S2V5XSAmJiBzaWR4TWFwcGluZ1tzaWR4S2V5XS5zaWR4O1xuXG4gIGlmIChzaWR4TWF0Y2gpIHtcbiAgICBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0JDEocGxheWxpc3QsIHNpZHhNYXRjaCwgcGxheWxpc3Quc2lkeC5yZXNvbHZlZFVyaSk7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3Q7XG59O1xuY29uc3QgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdHMgPSAocGxheWxpc3RzLCBzaWR4TWFwcGluZyA9IHt9KSA9PiB7XG4gIGlmICghT2JqZWN0LmtleXMoc2lkeE1hcHBpbmcpLmxlbmd0aCkge1xuICAgIHJldHVybiBwbGF5bGlzdHM7XG4gIH1cblxuICBmb3IgKGNvbnN0IGkgaW4gcGxheWxpc3RzKSB7XG4gICAgcGxheWxpc3RzW2ldID0gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChwbGF5bGlzdHNbaV0sIHNpZHhNYXBwaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdHM7XG59O1xuY29uc3QgZm9ybWF0QXVkaW9QbGF5bGlzdCA9ICh7XG4gIGF0dHJpYnV0ZXMsXG4gIHNlZ21lbnRzLFxuICBzaWR4LFxuICBtZWRpYVNlcXVlbmNlLFxuICBkaXNjb250aW51aXR5U2VxdWVuY2UsXG4gIGRpc2NvbnRpbnVpdHlTdGFydHNcbn0sIGlzQXVkaW9Pbmx5KSA9PiB7XG4gIGNvbnN0IHBsYXlsaXN0ID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIE5BTUU6IGF0dHJpYnV0ZXMuaWQsXG4gICAgICBCQU5EV0lEVEg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoLFxuICAgICAgQ09ERUNTOiBhdHRyaWJ1dGVzLmNvZGVjcyxcbiAgICAgIFsnUFJPR1JBTS1JRCddOiAxXG4gICAgfSxcbiAgICB1cmk6ICcnLFxuICAgIGVuZExpc3Q6IGF0dHJpYnV0ZXMudHlwZSA9PT0gJ3N0YXRpYycsXG4gICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICB0YXJnZXREdXJhdGlvbjogYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICBkaXNjb250aW51aXR5U2VxdWVuY2UsXG4gICAgZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBtZWRpYVNlcXVlbmNlLFxuICAgIHNlZ21lbnRzXG4gIH07XG5cbiAgaWYgKGF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb24pIHtcbiAgICBwbGF5bGlzdC5jb250ZW50UHJvdGVjdGlvbiA9IGF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb247XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24pIHtcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbiA9IGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uO1xuICB9XG5cbiAgaWYgKHNpZHgpIHtcbiAgICBwbGF5bGlzdC5zaWR4ID0gc2lkeDtcbiAgfVxuXG4gIGlmIChpc0F1ZGlvT25seSkge1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuQVVESU8gPSAnYXVkaW8nO1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuU1VCVElUTEVTID0gJ3N1YnMnO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcbmNvbnN0IGZvcm1hdFZ0dFBsYXlsaXN0ID0gKHtcbiAgYXR0cmlidXRlcyxcbiAgc2VnbWVudHMsXG4gIG1lZGlhU2VxdWVuY2UsXG4gIGRpc2NvbnRpbnVpdHlTdGFydHMsXG4gIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZVxufSkgPT4ge1xuICBpZiAodHlwZW9mIHNlZ21lbnRzID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIHZ0dCB0cmFja3MgbWF5IHVzZSBzaW5nbGUgZmlsZSBpbiBCYXNlVVJMXG4gICAgc2VnbWVudHMgPSBbe1xuICAgICAgdXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwsXG4gICAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICAgIHJlc29sdmVkVXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsXG4gICAgICBkdXJhdGlvbjogYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbixcbiAgICAgIG51bWJlcjogMFxuICAgIH1dOyAvLyB0YXJnZXREdXJhdGlvbiBzaG91bGQgYmUgdGhlIHNhbWUgZHVyYXRpb24gYXMgdGhlIG9ubHkgc2VnbWVudFxuXG4gICAgYXR0cmlidXRlcy5kdXJhdGlvbiA9IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb247XG4gIH1cblxuICBjb25zdCBtM3U4QXR0cmlidXRlcyA9IHtcbiAgICBOQU1FOiBhdHRyaWJ1dGVzLmlkLFxuICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGgsXG4gICAgWydQUk9HUkFNLUlEJ106IDFcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5jb2RlY3MpIHtcbiAgICBtM3U4QXR0cmlidXRlcy5DT0RFQ1MgPSBhdHRyaWJ1dGVzLmNvZGVjcztcbiAgfVxuXG4gIGNvbnN0IHZ0dFBsYXlsaXN0ID0ge1xuICAgIGF0dHJpYnV0ZXM6IG0zdThBdHRyaWJ1dGVzLFxuICAgIHVyaTogJycsXG4gICAgZW5kTGlzdDogYXR0cmlidXRlcy50eXBlID09PSAnc3RhdGljJyxcbiAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICByZXNvbHZlZFVyaTogYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLFxuICAgIHRhcmdldER1cmF0aW9uOiBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBhdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzLFxuICAgIGRpc2NvbnRpbnVpdHlTdGFydHMsXG4gICAgZGlzY29udGludWl0eVNlcXVlbmNlLFxuICAgIG1lZGlhU2VxdWVuY2UsXG4gICAgc2VnbWVudHNcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24pIHtcbiAgICB2dHRQbGF5bGlzdC5hdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbiA9IGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHZ0dFBsYXlsaXN0O1xufTtcbmNvbnN0IG9yZ2FuaXplQXVkaW9QbGF5bGlzdHMgPSAocGxheWxpc3RzLCBzaWR4TWFwcGluZyA9IHt9LCBpc0F1ZGlvT25seSA9IGZhbHNlKSA9PiB7XG4gIGxldCBtYWluUGxheWxpc3Q7XG4gIGNvbnN0IGZvcm1hdHRlZFBsYXlsaXN0cyA9IHBsYXlsaXN0cy5yZWR1Y2UoKGEsIHBsYXlsaXN0KSA9PiB7XG4gICAgY29uc3Qgcm9sZSA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMucm9sZSAmJiBwbGF5bGlzdC5hdHRyaWJ1dGVzLnJvbGUudmFsdWUgfHwgJyc7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJyc7XG4gICAgbGV0IGxhYmVsID0gcGxheWxpc3QuYXR0cmlidXRlcy5sYWJlbCB8fCAnbWFpbic7XG5cbiAgICBpZiAobGFuZ3VhZ2UgJiYgIXBsYXlsaXN0LmF0dHJpYnV0ZXMubGFiZWwpIHtcbiAgICAgIGNvbnN0IHJvbGVMYWJlbCA9IHJvbGUgPyBgICgke3JvbGV9KWAgOiAnJztcbiAgICAgIGxhYmVsID0gYCR7cGxheWxpc3QuYXR0cmlidXRlcy5sYW5nfSR7cm9sZUxhYmVsfWA7XG4gICAgfVxuXG4gICAgaWYgKCFhW2xhYmVsXSkge1xuICAgICAgYVtsYWJlbF0gPSB7XG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBhdXRvc2VsZWN0OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiByb2xlID09PSAnbWFpbicsXG4gICAgICAgIHBsYXlsaXN0czogW10sXG4gICAgICAgIHVyaTogJydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0dGVkID0gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChmb3JtYXRBdWRpb1BsYXlsaXN0KHBsYXlsaXN0LCBpc0F1ZGlvT25seSksIHNpZHhNYXBwaW5nKTtcbiAgICBhW2xhYmVsXS5wbGF5bGlzdHMucHVzaChmb3JtYXR0ZWQpO1xuXG4gICAgaWYgKHR5cGVvZiBtYWluUGxheWxpc3QgPT09ICd1bmRlZmluZWQnICYmIHJvbGUgPT09ICdtYWluJykge1xuICAgICAgbWFpblBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gICAgICBtYWluUGxheWxpc3QuZGVmYXVsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTsgLy8gaWYgbm8gcGxheWxpc3RzIGhhdmUgcm9sZSBcIm1haW5cIiwgbWFyayB0aGUgZmlyc3QgYXMgbWFpblxuXG4gIGlmICghbWFpblBsYXlsaXN0KSB7XG4gICAgY29uc3QgZmlyc3RMYWJlbCA9IE9iamVjdC5rZXlzKGZvcm1hdHRlZFBsYXlsaXN0cylbMF07XG4gICAgZm9ybWF0dGVkUGxheWxpc3RzW2ZpcnN0TGFiZWxdLmRlZmF1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFBsYXlsaXN0cztcbn07XG5jb25zdCBvcmdhbml6ZVZ0dFBsYXlsaXN0cyA9IChwbGF5bGlzdHMsIHNpZHhNYXBwaW5nID0ge30pID0+IHtcbiAgcmV0dXJuIHBsYXlsaXN0cy5yZWR1Y2UoKGEsIHBsYXlsaXN0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhYmVsIHx8IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFuZyB8fCAndGV4dCc7XG5cbiAgICBpZiAoIWFbbGFiZWxdKSB7XG4gICAgICBhW2xhYmVsXSA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhYmVsLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYXV0b3NlbGVjdDogZmFsc2UsXG4gICAgICAgIHBsYXlsaXN0czogW10sXG4gICAgICAgIHVyaTogJydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYVtsYWJlbF0ucGxheWxpc3RzLnB1c2goYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChmb3JtYXRWdHRQbGF5bGlzdChwbGF5bGlzdCksIHNpZHhNYXBwaW5nKSk7XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn07XG5cbmNvbnN0IG9yZ2FuaXplQ2FwdGlvblNlcnZpY2VzID0gY2FwdGlvblNlcnZpY2VzID0+IGNhcHRpb25TZXJ2aWNlcy5yZWR1Y2UoKHN2Y09iaiwgc3ZjKSA9PiB7XG4gIGlmICghc3ZjKSB7XG4gICAgcmV0dXJuIHN2Y09iajtcbiAgfVxuXG4gIHN2Yy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5uZWwsXG4gICAgICBsYW5ndWFnZVxuICAgIH0gPSBzZXJ2aWNlO1xuICAgIHN2Y09ialtsYW5ndWFnZV0gPSB7XG4gICAgICBhdXRvc2VsZWN0OiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgaW5zdHJlYW1JZDogY2hhbm5lbCxcbiAgICAgIGxhbmd1YWdlXG4gICAgfTtcblxuICAgIGlmIChzZXJ2aWNlLmhhc093blByb3BlcnR5KCdhc3BlY3RSYXRpbycpKSB7XG4gICAgICBzdmNPYmpbbGFuZ3VhZ2VdLmFzcGVjdFJhdGlvID0gc2VydmljZS5hc3BlY3RSYXRpbztcbiAgICB9XG5cbiAgICBpZiAoc2VydmljZS5oYXNPd25Qcm9wZXJ0eSgnZWFzeVJlYWRlcicpKSB7XG4gICAgICBzdmNPYmpbbGFuZ3VhZ2VdLmVhc3lSZWFkZXIgPSBzZXJ2aWNlLmVhc3lSZWFkZXI7XG4gICAgfVxuXG4gICAgaWYgKHNlcnZpY2UuaGFzT3duUHJvcGVydHkoJzNEJykpIHtcbiAgICAgIHN2Y09ialtsYW5ndWFnZV1bJzNEJ10gPSBzZXJ2aWNlWyczRCddO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdmNPYmo7XG59LCB7fSk7XG5cbmNvbnN0IGZvcm1hdFZpZGVvUGxheWxpc3QgPSAoe1xuICBhdHRyaWJ1dGVzLFxuICBzZWdtZW50cyxcbiAgc2lkeCxcbiAgZGlzY29udGludWl0eVN0YXJ0c1xufSkgPT4ge1xuICBjb25zdCBwbGF5bGlzdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBOQU1FOiBhdHRyaWJ1dGVzLmlkLFxuICAgICAgQVVESU86ICdhdWRpbycsXG4gICAgICBTVUJUSVRMRVM6ICdzdWJzJyxcbiAgICAgIFJFU09MVVRJT046IHtcbiAgICAgICAgd2lkdGg6IGF0dHJpYnV0ZXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogYXR0cmlidXRlcy5oZWlnaHRcbiAgICAgIH0sXG4gICAgICBDT0RFQ1M6IGF0dHJpYnV0ZXMuY29kZWNzLFxuICAgICAgQkFORFdJRFRIOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCxcbiAgICAgIFsnUFJPR1JBTS1JRCddOiAxXG4gICAgfSxcbiAgICB1cmk6ICcnLFxuICAgIGVuZExpc3Q6IGF0dHJpYnV0ZXMudHlwZSA9PT0gJ3N0YXRpYycsXG4gICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICB0YXJnZXREdXJhdGlvbjogYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICBkaXNjb250aW51aXR5U3RhcnRzLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBhdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzLFxuICAgIHNlZ21lbnRzXG4gIH07XG5cbiAgaWYgKGF0dHJpYnV0ZXMuZnJhbWVSYXRlKSB7XG4gICAgcGxheWxpc3QuYXR0cmlidXRlc1snRlJBTUUtUkFURSddID0gYXR0cmlidXRlcy5mcmFtZVJhdGU7XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgIHBsYXlsaXN0LmNvbnRlbnRQcm90ZWN0aW9uID0gYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgfVxuXG4gIGlmIChhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbikge1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uID0gYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb247XG4gIH1cblxuICBpZiAoc2lkeCkge1xuICAgIHBsYXlsaXN0LnNpZHggPSBzaWR4O1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcblxuY29uc3QgdmlkZW9Pbmx5ID0gKHtcbiAgYXR0cmlidXRlc1xufSkgPT4gYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ3ZpZGVvL21wNCcgfHwgYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ3ZpZGVvL3dlYm0nIHx8IGF0dHJpYnV0ZXMuY29udGVudFR5cGUgPT09ICd2aWRlbyc7XG5cbmNvbnN0IGF1ZGlvT25seSA9ICh7XG4gIGF0dHJpYnV0ZXNcbn0pID0+IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICdhdWRpby9tcDQnIHx8IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICdhdWRpby93ZWJtJyB8fCBhdHRyaWJ1dGVzLmNvbnRlbnRUeXBlID09PSAnYXVkaW8nO1xuXG5jb25zdCB2dHRPbmx5ID0gKHtcbiAgYXR0cmlidXRlc1xufSkgPT4gYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ3RleHQvdnR0JyB8fCBhdHRyaWJ1dGVzLmNvbnRlbnRUeXBlID09PSAndGV4dCc7XG4vKipcbiAqIENvbnRhaW5zIHN0YXJ0IGFuZCB0aW1lbGluZSBwcm9wZXJ0aWVzIGRlbm90aW5nIGEgdGltZWxpbmUgc3RhcnQuIEZvciBEQVNILCB0aGVzZSB3aWxsXG4gKiBiZSB0aGUgc2FtZSBudW1iZXIuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVGltZWxpbmVTdGFydFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IC0gdGhlIHN0YXJ0IHRpbWUgb2YgdGhlIHRpbWVsaW5lXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZWxpbmUgLSB0aGUgdGltZWxpbmUgbnVtYmVyXG4gKi9cblxuLyoqXG4gKiBBZGRzIGFwcHJvcHJpYXRlIG1lZGlhIGFuZCBkaXNjb250aW51aXR5IHNlcXVlbmNlIHZhbHVlcyB0byB0aGUgc2VnbWVudHMgYW5kIHBsYXlsaXN0cy5cbiAqXG4gKiBUaHJvdWdob3V0IG1wZC1wYXJzZXIsIHRoZSBgbnVtYmVyYCBhdHRyaWJ1dGUgaXMgdXNlZCBpbiByZWxhdGlvbiB0byBgc3RhcnROdW1iZXJgLCBhXG4gKiBEQVNIIHNwZWNpZmljIGF0dHJpYnV0ZSB1c2VkIGluIGNvbnN0cnVjdGluZyBzZWdtZW50IFVSSSdzIGZyb20gdGVtcGxhdGVzLiBIb3dldmVyLCBmcm9tXG4gKiBhbiBITFMgcGVyc3BlY3RpdmUsIHRoZSBgbnVtYmVyYCBhdHRyaWJ1dGUgb24gYSBzZWdtZW50IHdvdWxkIGJlIGl0cyBgbWVkaWFTZXF1ZW5jZWBcbiAqIHZhbHVlLCB3aGljaCBzaG91bGQgc3RhcnQgYXQgdGhlIG9yaWdpbmFsIG1lZGlhIHNlcXVlbmNlIHZhbHVlIChvciAwKSBhbmQgaW5jcmVtZW50IGJ5IDFcbiAqIGZvciBlYWNoIHNlZ21lbnQgdGhlcmVhZnRlci4gU2luY2UgREFTSCdzIGBzdGFydE51bWJlcmAgdmFsdWVzIGFyZSBpbmRlcGVuZGVudCBwZXJcbiAqIHBlcmlvZCwgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHVzZSBpdCBmb3IgYG51bWJlcmAuIEluc3RlYWQsIGFzc3VtZSBldmVyeXRoaW5nIHN0YXJ0c1xuICogZnJvbSBhIDAgbWVkaWFTZXF1ZW5jZSB2YWx1ZSBhbmQgaW5jcmVtZW50IGZyb20gdGhlcmUuXG4gKlxuICogTm90ZSB0aGF0IFZIUyBjdXJyZW50bHkgZG9lc24ndCB1c2UgdGhlIGBudW1iZXJgIHByb3BlcnR5LCBidXQgaXQgY2FuIGJlIGhlbHBmdWwgZm9yXG4gKiBkZWJ1Z2dpbmcgYW5kIG1ha2luZyBzZW5zZSBvZiB0aGUgbWFuaWZlc3QuXG4gKlxuICogRm9yIGxpdmUgcGxheWxpc3RzLCB0byBhY2NvdW50IGZvciB2YWx1ZXMgaW5jcmVhc2luZyBpbiBtYW5pZmVzdHMgd2hlbiBwZXJpb2RzIGFyZVxuICogcmVtb3ZlZCBvbiByZWZyZXNoZXMsIG1lcmdpbmcgbG9naWMgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBudW1iZXJzIHRvIHRoZWlyXG4gKiBhcHByb3ByaWF0ZSB2YWx1ZXMgKHRvIGVuc3VyZSB0aGV5J3JlIHNlcXVlbnRpYWwgYW5kIGluY3JlYXNpbmcpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXlsaXN0cyAtIHRoZSBwbGF5bGlzdHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge1RpbWVsaW5lU3RhcnRbXX0gdGltZWxpbmVTdGFydHMgLSB0aGUgdGltZWxpbmUgc3RhcnRzIGZvciB0aGUgbWFuaWZlc3RcbiAqL1xuXG5cbmNvbnN0IGFkZE1lZGlhU2VxdWVuY2VWYWx1ZXMgPSAocGxheWxpc3RzLCB0aW1lbGluZVN0YXJ0cykgPT4ge1xuICAvLyBpbmNyZW1lbnQgYWxsIHNlZ21lbnRzIHNlcXVlbnRpYWxseVxuICBwbGF5bGlzdHMuZm9yRWFjaChwbGF5bGlzdCA9PiB7XG4gICAgcGxheWxpc3QubWVkaWFTZXF1ZW5jZSA9IDA7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlID0gdGltZWxpbmVTdGFydHMuZmluZEluZGV4KGZ1bmN0aW9uICh7XG4gICAgICB0aW1lbGluZVxuICAgIH0pIHtcbiAgICAgIHJldHVybiB0aW1lbGluZSA9PT0gcGxheWxpc3QudGltZWxpbmU7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBsYXlsaXN0LnNlZ21lbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWxpc3Quc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHNlZ21lbnQubnVtYmVyID0gaW5kZXg7XG4gICAgfSk7XG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYSBtZWRpYSBncm91cCBvYmplY3QsIGZsYXR0ZW5zIGFsbCBwbGF5bGlzdHMgd2l0aGluIHRoZSBtZWRpYSBncm91cCBpbnRvIGEgc2luZ2xlXG4gKiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWVkaWFHcm91cE9iamVjdCAtIHRoZSBtZWRpYSBncm91cCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqICAgICAgICAgVGhlIG1lZGlhIGdyb3VwIHBsYXlsaXN0c1xuICovXG5cbmNvbnN0IGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzID0gbWVkaWFHcm91cE9iamVjdCA9PiB7XG4gIGlmICghbWVkaWFHcm91cE9iamVjdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZWRpYUdyb3VwT2JqZWN0KS5yZWR1Y2UoKGFjYywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbENvbnRlbnRzID0gbWVkaWFHcm91cE9iamVjdFtsYWJlbF07XG4gICAgcmV0dXJuIGFjYy5jb25jYXQobGFiZWxDb250ZW50cy5wbGF5bGlzdHMpO1xuICB9LCBbXSk7XG59O1xuY29uc3QgdG9NM3U4ID0gKHtcbiAgZGFzaFBsYXlsaXN0cyxcbiAgbG9jYXRpb25zLFxuICBjb250ZW50U3RlZXJpbmcsXG4gIHNpZHhNYXBwaW5nID0ge30sXG4gIHByZXZpb3VzTWFuaWZlc3QsXG4gIGV2ZW50U3RyZWFtXG59KSA9PiB7XG4gIGlmICghZGFzaFBsYXlsaXN0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge307XG4gIH0gLy8gZ3JhYiBhbGwgbWFpbiBtYW5pZmVzdCBhdHRyaWJ1dGVzXG5cblxuICBjb25zdCB7XG4gICAgc291cmNlRHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHR5cGUsXG4gICAgc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXksXG4gICAgbWluaW11bVVwZGF0ZVBlcmlvZFxuICB9ID0gZGFzaFBsYXlsaXN0c1swXS5hdHRyaWJ1dGVzO1xuICBjb25zdCB2aWRlb1BsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcih2aWRlb09ubHkpKS5tYXAoZm9ybWF0VmlkZW9QbGF5bGlzdCk7XG4gIGNvbnN0IGF1ZGlvUGxheWxpc3RzID0gbWVyZ2VEaXNjb250aWd1b3VzUGxheWxpc3RzKGRhc2hQbGF5bGlzdHMuZmlsdGVyKGF1ZGlvT25seSkpO1xuICBjb25zdCB2dHRQbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIodnR0T25seSkpO1xuICBjb25zdCBjYXB0aW9ucyA9IGRhc2hQbGF5bGlzdHMubWFwKHBsYXlsaXN0ID0+IHBsYXlsaXN0LmF0dHJpYnV0ZXMuY2FwdGlvblNlcnZpY2VzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IG1hbmlmZXN0ID0ge1xuICAgIGFsbG93Q2FjaGU6IHRydWUsXG4gICAgZGlzY29udGludWl0eVN0YXJ0czogW10sXG4gICAgc2VnbWVudHM6IFtdLFxuICAgIGVuZExpc3Q6IHRydWUsXG4gICAgbWVkaWFHcm91cHM6IHtcbiAgICAgIEFVRElPOiB7fSxcbiAgICAgIFZJREVPOiB7fSxcbiAgICAgIFsnQ0xPU0VELUNBUFRJT05TJ106IHt9LFxuICAgICAgU1VCVElUTEVTOiB7fVxuICAgIH0sXG4gICAgdXJpOiAnJyxcbiAgICBkdXJhdGlvbixcbiAgICBwbGF5bGlzdHM6IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3RzKHZpZGVvUGxheWxpc3RzLCBzaWR4TWFwcGluZylcbiAgfTtcblxuICBpZiAobWluaW11bVVwZGF0ZVBlcmlvZCA+PSAwKSB7XG4gICAgbWFuaWZlc3QubWluaW11bVVwZGF0ZVBlcmlvZCA9IG1pbmltdW1VcGRhdGVQZXJpb2QgKiAxMDAwO1xuICB9XG5cbiAgaWYgKGxvY2F0aW9ucykge1xuICAgIG1hbmlmZXN0LmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcbiAgfVxuXG4gIGlmIChjb250ZW50U3RlZXJpbmcpIHtcbiAgICBtYW5pZmVzdC5jb250ZW50U3RlZXJpbmcgPSBjb250ZW50U3RlZXJpbmc7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2R5bmFtaWMnKSB7XG4gICAgbWFuaWZlc3Quc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXkgPSBzdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheTtcbiAgfVxuXG4gIGlmIChldmVudFN0cmVhbSAmJiBldmVudFN0cmVhbS5sZW5ndGggPiAwKSB7XG4gICAgbWFuaWZlc3QuZXZlbnRTdHJlYW0gPSBldmVudFN0cmVhbTtcbiAgfVxuXG4gIGNvbnN0IGlzQXVkaW9Pbmx5ID0gbWFuaWZlc3QucGxheWxpc3RzLmxlbmd0aCA9PT0gMDtcbiAgY29uc3Qgb3JnYW5pemVkQXVkaW9Hcm91cCA9IGF1ZGlvUGxheWxpc3RzLmxlbmd0aCA/IG9yZ2FuaXplQXVkaW9QbGF5bGlzdHMoYXVkaW9QbGF5bGlzdHMsIHNpZHhNYXBwaW5nLCBpc0F1ZGlvT25seSkgOiBudWxsO1xuICBjb25zdCBvcmdhbml6ZWRWdHRHcm91cCA9IHZ0dFBsYXlsaXN0cy5sZW5ndGggPyBvcmdhbml6ZVZ0dFBsYXlsaXN0cyh2dHRQbGF5bGlzdHMsIHNpZHhNYXBwaW5nKSA6IG51bGw7XG4gIGNvbnN0IGZvcm1hdHRlZFBsYXlsaXN0cyA9IHZpZGVvUGxheWxpc3RzLmNvbmNhdChmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyhvcmdhbml6ZWRBdWRpb0dyb3VwKSwgZmxhdHRlbk1lZGlhR3JvdXBQbGF5bGlzdHMob3JnYW5pemVkVnR0R3JvdXApKTtcbiAgY29uc3QgcGxheWxpc3RUaW1lbGluZVN0YXJ0cyA9IGZvcm1hdHRlZFBsYXlsaXN0cy5tYXAoKHtcbiAgICB0aW1lbGluZVN0YXJ0c1xuICB9KSA9PiB0aW1lbGluZVN0YXJ0cyk7XG4gIG1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzID0gZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMocGxheWxpc3RUaW1lbGluZVN0YXJ0cyk7XG4gIGFkZE1lZGlhU2VxdWVuY2VWYWx1ZXMoZm9ybWF0dGVkUGxheWxpc3RzLCBtYW5pZmVzdC50aW1lbGluZVN0YXJ0cyk7XG5cbiAgaWYgKG9yZ2FuaXplZEF1ZGlvR3JvdXApIHtcbiAgICBtYW5pZmVzdC5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpbyA9IG9yZ2FuaXplZEF1ZGlvR3JvdXA7XG4gIH1cblxuICBpZiAob3JnYW5pemVkVnR0R3JvdXApIHtcbiAgICBtYW5pZmVzdC5tZWRpYUdyb3Vwcy5TVUJUSVRMRVMuc3VicyA9IG9yZ2FuaXplZFZ0dEdyb3VwO1xuICB9XG5cbiAgaWYgKGNhcHRpb25zLmxlbmd0aCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzWydDTE9TRUQtQ0FQVElPTlMnXS5jYyA9IG9yZ2FuaXplQ2FwdGlvblNlcnZpY2VzKGNhcHRpb25zKTtcbiAgfVxuXG4gIGlmIChwcmV2aW91c01hbmlmZXN0KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uTWFuaWZlc3RPblRpbWVsaW5lKHtcbiAgICAgIG9sZE1hbmlmZXN0OiBwcmV2aW91c01hbmlmZXN0LFxuICAgICAgbmV3TWFuaWZlc3Q6IG1hbmlmZXN0XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWFuaWZlc3Q7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIFIgKHJlcGV0aXRpb24pIHZhbHVlIGZvciBhIGxpdmUgc3RyZWFtIChmb3IgdGhlIGZpbmFsIHNlZ21lbnRcbiAqIGluIGEgbWFuaWZlc3Qgd2hlcmUgdGhlIHIgdmFsdWUgaXMgbmVnYXRpdmUgMSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiAgICAgICAgY3VycmVudCB0aW1lICh0eXBpY2FsbHkgdGhlIHRvdGFsIHRpbWUgdXAgdW50aWwgdGhlIGZpbmFsIHNlZ21lbnQpXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqICAgICAgICBkdXJhdGlvbiBwcm9wZXJ0eSBmb3IgdGhlIGdpdmVuIDxTIC8+XG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICAgICAgIFIgdmFsdWUgdG8gcmVhY2ggdGhlIGVuZCBvZiB0aGUgZ2l2ZW4gcGVyaW9kXG4gKi9cbmNvbnN0IGdldExpdmVSVmFsdWUgPSAoYXR0cmlidXRlcywgdGltZSwgZHVyYXRpb24pID0+IHtcbiAgY29uc3Qge1xuICAgIE5PVyxcbiAgICBjbGllbnRPZmZzZXQsXG4gICAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lLFxuICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgcGVyaW9kU3RhcnQgPSAwLFxuICAgIG1pbmltdW1VcGRhdGVQZXJpb2QgPSAwXG4gIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBub3cgPSAoTk9XICsgY2xpZW50T2Zmc2V0KSAvIDEwMDA7XG4gIGNvbnN0IHBlcmlvZFN0YXJ0V0MgPSBhdmFpbGFiaWxpdHlTdGFydFRpbWUgKyBwZXJpb2RTdGFydDtcbiAgY29uc3QgcGVyaW9kRW5kV0MgPSBub3cgKyBtaW5pbXVtVXBkYXRlUGVyaW9kO1xuICBjb25zdCBwZXJpb2REdXJhdGlvbiA9IHBlcmlvZEVuZFdDIC0gcGVyaW9kU3RhcnRXQztcbiAgcmV0dXJuIE1hdGguY2VpbCgocGVyaW9kRHVyYXRpb24gKiB0aW1lc2NhbGUgLSB0aW1lKSAvIGR1cmF0aW9uKTtcbn07XG4vKipcbiAqIFVzZXMgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZSB0byBkZXRlcm1pbmUgc2VnbWVudFxuICogdGltaW5nIGFuZCBkdXJhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXX0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKlxuICogQHJldHVybiB7e251bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHRpbWVsaW5lOiBudW1iZXJ9W119XG4gKiAgICAgICAgIExpc3Qgb2YgT2JqZWN0cyB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuXG5jb25zdCBwYXJzZUJ5VGltZWxpbmUgPSAoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIG1pbmltdW1VcGRhdGVQZXJpb2QgPSAwLFxuICAgIG1lZGlhID0gJycsXG4gICAgc291cmNlRHVyYXRpb24sXG4gICAgdGltZXNjYWxlID0gMSxcbiAgICBzdGFydE51bWJlciA9IDEsXG4gICAgcGVyaW9kU3RhcnQ6IHRpbWVsaW5lXG4gIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICBsZXQgdGltZSA9IC0xO1xuXG4gIGZvciAobGV0IHNJbmRleCA9IDA7IHNJbmRleCA8IHNlZ21lbnRUaW1lbGluZS5sZW5ndGg7IHNJbmRleCsrKSB7XG4gICAgY29uc3QgUyA9IHNlZ21lbnRUaW1lbGluZVtzSW5kZXhdO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gUy5kO1xuICAgIGNvbnN0IHJlcGVhdCA9IFMuciB8fCAwO1xuICAgIGNvbnN0IHNlZ21lbnRUaW1lID0gUy50IHx8IDA7XG5cbiAgICBpZiAodGltZSA8IDApIHtcbiAgICAgIC8vIGZpcnN0IHNlZ21lbnRcbiAgICAgIHRpbWUgPSBzZWdtZW50VGltZTtcbiAgICB9XG5cbiAgICBpZiAoc2VnbWVudFRpbWUgJiYgc2VnbWVudFRpbWUgPiB0aW1lKSB7XG4gICAgICAvLyBkaXNjb250aW51aXR5XG4gICAgICAvLyBUT0RPOiBIb3cgdG8gaGFuZGxlIHRoaXMgdHlwZSBvZiBkaXNjb250aW51aXR5XG4gICAgICAvLyB0aW1lbGluZSsrIGhlcmUgd291bGQgdHJlYXQgaXQgbGlrZSBITFMgZGlzY29udHVpdHkgYW5kIGNvbnRlbnQgd291bGRcbiAgICAgIC8vIGdldCBhcHBlbmRlZCB3aXRob3V0IGdhcFxuICAgICAgLy8gRS5HLlxuICAgICAgLy8gIDxTIHQ9XCIwXCIgZD1cIjFcIiAvPlxuICAgICAgLy8gIDxTIGQ9XCIxXCIgLz5cbiAgICAgIC8vICA8UyBkPVwiMVwiIC8+XG4gICAgICAvLyAgPFMgdD1cIjVcIiBkPVwiMVwiIC8+XG4gICAgICAvLyB3b3VsZCBoYXZlICRUaW1lJCB2YWx1ZXMgb2YgWzAsIDEsIDIsIDVdXG4gICAgICAvLyBzaG91bGQgdGhpcyBiZSBhcHBlbmVkIGF0IHRpbWUgcG9zaXRpb25zIFswLCAxLCAyLCAzXSwoI0VYVC1YLURJU0NPTlRJTlVJVFkpXG4gICAgICAvLyBvciBbMCwgMSwgMiwgZ2FwLCBnYXAsIDVdPyAoI0VYVC1YLUdBUClcbiAgICAgIC8vIGRvZXMgdGhlIHZhbHVlIG9mIHNvdXJjZUR1cmF0aW9uIGNvbnNpZGVyIHRoaXMgd2hlbiBjYWxjdWxhdGluZyBhcmJpdHJhcnlcbiAgICAgIC8vIG5lZ2F0aXZlIEByIHJlcGVhdCB2YWx1ZT9cbiAgICAgIC8vIEUuRy4gU2FtZSBlbGVtZW50cyBhcyBhYm92ZSB3aXRoIHRoaXMgYWRkZWQgYXQgdGhlIGVuZFxuICAgICAgLy8gIDxTIGQ9XCIxXCIgcj1cIi0xXCIgLz5cbiAgICAgIC8vICB3aXRoIGEgc291cmNlRHVyYXRpb24gb2YgMTBcbiAgICAgIC8vIFdvdWxkIHRoZSAyIGdhcHMgYmUgaW5jbHVkZWQgaW4gdGhlIHRpbWUgZHVyYXRpb24gY2FsY3VsYXRpb25zIHJlc3VsdGluZyBpblxuICAgICAgLy8gOCBzZWdtZW50cyB3aXRoICRUaW1lJCB2YWx1ZXMgb2YgWzAsIDEsIDIsIDUsIDYsIDcsIDgsIDldIG9yIDEwIHNlZ21lbnRzXG4gICAgICAvLyB3aXRoICRUaW1lJCB2YWx1ZXMgb2YgWzAsIDEsIDIsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV0gP1xuICAgICAgdGltZSA9IHNlZ21lbnRUaW1lO1xuICAgIH1cblxuICAgIGxldCBjb3VudDtcblxuICAgIGlmIChyZXBlYXQgPCAwKSB7XG4gICAgICBjb25zdCBuZXh0UyA9IHNJbmRleCArIDE7XG5cbiAgICAgIGlmIChuZXh0UyA9PT0gc2VnbWVudFRpbWVsaW5lLmxlbmd0aCkge1xuICAgICAgICAvLyBsYXN0IHNlZ21lbnRcbiAgICAgICAgaWYgKHR5cGUgPT09ICdkeW5hbWljJyAmJiBtaW5pbXVtVXBkYXRlUGVyaW9kID4gMCAmJiBtZWRpYS5pbmRleE9mKCckTnVtYmVyJCcpID4gMCkge1xuICAgICAgICAgIGNvdW50ID0gZ2V0TGl2ZVJWYWx1ZShhdHRyaWJ1dGVzLCB0aW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVE9ETzogVGhpcyBtYXkgYmUgaW5jb3JyZWN0IGRlcGVuZGluZyBvbiBjb25jbHVzaW9uIG9mIFRPRE8gYWJvdmVcbiAgICAgICAgICBjb3VudCA9IChzb3VyY2VEdXJhdGlvbiAqIHRpbWVzY2FsZSAtIHRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ID0gKHNlZ21lbnRUaW1lbGluZVtuZXh0U10udCAtIHRpbWUpIC8gZHVyYXRpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gcmVwZWF0ICsgMTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBzdGFydE51bWJlciArIHNlZ21lbnRzLmxlbmd0aCArIGNvdW50O1xuICAgIGxldCBudW1iZXIgPSBzdGFydE51bWJlciArIHNlZ21lbnRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChudW1iZXIgPCBlbmQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgICBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIHRpbWVzY2FsZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgdGltZWxpbmVcbiAgICAgIH0pO1xuICAgICAgdGltZSArPSBkdXJhdGlvbjtcbiAgICAgIG51bWJlcisrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cztcbn07XG5cbmNvbnN0IGlkZW50aWZpZXJQYXR0ZXJuID0gL1xcJChbQS16XSopKD86KCUwKShbMC05XSspZCk/XFwkL2c7XG4vKipcbiAqIFJlcGxhY2VzIHRlbXBsYXRlIGlkZW50aWZpZXJzIHdpdGggY29ycmVzcG9uZGluZyB2YWx1ZXMuIFRvIGJlIHVzZWQgYXMgdGhlIGNhbGxiYWNrXG4gKiBmb3IgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gKlxuICogQG5hbWUgcmVwbGFjZUNhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuICogICAgICAgIEVudGlyZSBtYXRjaCBvZiBpZGVudGlmaWVyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRlbnRpZmllclxuICogICAgICAgIE5hbWUgb2YgbWF0Y2hlZCBpZGVudGlmaWVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0XG4gKiAgICAgICAgRm9ybWF0IHRhZyBzdHJpbmcuIEl0cyBwcmVzZW5jZSBpbmRpY2F0ZXMgdGhhdCBwYWRkaW5nIGlzIGV4cGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gd2lkdGhcbiAqICAgICAgICBEZXNpcmVkIGxlbmd0aCBvZiB0aGUgcmVwbGFjZWQgdmFsdWUuIFZhbHVlcyBsZXNzIHRoYW4gdGhpcyB3aWR0aCBzaGFsbCBiZSBsZWZ0XG4gKiAgICAgICAgemVybyBwYWRkZWRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgUmVwbGFjZW1lbnQgZm9yIHRoZSBtYXRjaGVkIGlkZW50aWZpZXJcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGEgY2FsbGJhY2sgZm9yIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSB0byByZXBsYWNlXG4gKiB0ZW1wbGF0ZSBpZGVudGlmaWVyc1xuICpcbiAqIEBwYXJhbSB7T2JlY3R9IHZhbHVlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIHZhbHVlcyB0aGF0IHNoYWxsIGJlIHVzZWQgdG8gcmVwbGFjZSBrbm93biBpZGVudGlmaWVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5SZXByZXNlbnRhdGlvbklEXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGlkIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5OdW1iZXJcbiAqICAgICAgICBOdW1iZXIgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5CYW5kd2lkdGhcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AYmFuZHdpZHRoIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuVGltZVxuICogICAgICAgIFRpbWVzdGFtcCB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcmV0dXJuIHtyZXBsYWNlQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIHRvIGJlIHVzZWQgd2l0aCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UgdG8gcmVwbGFjZSBpZGVudGlmaWVyc1xuICovXG5cbmNvbnN0IGlkZW50aWZpZXJSZXBsYWNlbWVudCA9IHZhbHVlcyA9PiAobWF0Y2gsIGlkZW50aWZpZXIsIGZvcm1hdCwgd2lkdGgpID0+IHtcbiAgaWYgKG1hdGNoID09PSAnJCQnKSB7XG4gICAgLy8gZXNjYXBlIHNlcXVlbmNlXG4gICAgcmV0dXJuICckJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWVzW2lkZW50aWZpZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gJycgKyB2YWx1ZXNbaWRlbnRpZmllcl07XG5cbiAgaWYgKGlkZW50aWZpZXIgPT09ICdSZXByZXNlbnRhdGlvbklEJykge1xuICAgIC8vIEZvcm1hdCB0YWcgc2hhbGwgbm90IGJlIHByZXNlbnQgd2l0aCBSZXByZXNlbnRhdGlvbklEXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKCFmb3JtYXQpIHtcbiAgICB3aWR0aCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCwgMTApO1xuICB9XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA+PSB3aWR0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBgJHtuZXcgQXJyYXkod2lkdGggLSB2YWx1ZS5sZW5ndGggKyAxKS5qb2luKCcwJyl9JHt2YWx1ZX1gO1xufTtcbi8qKlxuICogQ29uc3RydWN0cyBhIHNlZ21lbnQgdXJsIGZyb20gYSB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiAgICAgICAgVGVtcGxhdGUgc3RyaW5nIHRvIGNvbnN0cnVjdCB1cmwgZnJvbVxuICogQHBhcmFtIHtPYmVjdH0gdmFsdWVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIHRoYXQgc2hhbGwgYmUgdXNlZCB0byByZXBsYWNlIGtub3duIGlkZW50aWZpZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlJlcHJlc2VudGF0aW9uSURcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AaWQgYXR0cmlidXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLk51bWJlclxuICogICAgICAgIE51bWJlciBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLkJhbmR3aWR0aFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBiYW5kd2lkdGggYXR0cmlidXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5UaW1lXG4gKiAgICAgICAgVGltZXN0YW1wIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgU2VnbWVudCB1cmwgd2l0aCBpZGVudGlmaWVycyByZXBsYWNlZFxuICovXG5cbmNvbnN0IGNvbnN0cnVjdFRlbXBsYXRlVXJsID0gKHVybCwgdmFsdWVzKSA9PiB1cmwucmVwbGFjZShpZGVudGlmaWVyUGF0dGVybiwgaWRlbnRpZmllclJlcGxhY2VtZW50KHZhbHVlcykpO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9ybWF0aW9uIGFib3V0IGVhY2hcbiAqIHNlZ21lbnQgbmVlZGVkIHRvIGdlbmVyYXRlIHNlZ21lbnQgdXJpcyBhbmQgdGhlIGNvbXBsZXRlIHNlZ21lbnQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKiAgICAgICAgdGhlIFNlZ21lbnRUaW1lbGluZSBlbGVtZW50XG4gKiBAcmV0dXJuIHt7bnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHRpbWU6IG51bWJlciwgdGltZWxpbmU6IG51bWJlcn1bXX1cbiAqICAgICAgICAgTGlzdCBvZiBPYmplY3RzIHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG5jb25zdCBwYXJzZVRlbXBsYXRlSW5mbyA9IChhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpID0+IHtcbiAgaWYgKCFhdHRyaWJ1dGVzLmR1cmF0aW9uICYmICFzZWdtZW50VGltZWxpbmUpIHtcbiAgICAvLyBpZiBuZWl0aGVyIEBkdXJhdGlvbiBvciBTZWdtZW50VGltZWxpbmUgYXJlIHByZXNlbnQsIHRoZW4gdGhlcmUgc2hhbGwgYmUgZXhhY3RseVxuICAgIC8vIG9uZSBtZWRpYSBzZWdtZW50XG4gICAgcmV0dXJuIFt7XG4gICAgICBudW1iZXI6IGF0dHJpYnV0ZXMuc3RhcnROdW1iZXIgfHwgMSxcbiAgICAgIGR1cmF0aW9uOiBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgdGltZTogMCxcbiAgICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0XG4gICAgfV07XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcy5kdXJhdGlvbikge1xuICAgIHJldHVybiBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VCeVRpbWVsaW5lKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHNlZ21lbnRzIHVzaW5nIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBTZWdtZW50VGVtcGxhdGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICogICAgICAgIHRoZSBTZWdtZW50VGltZWxpbmUgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiAgICAgICAgIExpc3Qgb2Ygc2VnbWVudCBvYmplY3RzXG4gKi9cblxuY29uc3Qgc2VnbWVudHNGcm9tVGVtcGxhdGUgPSAoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlVmFsdWVzID0ge1xuICAgIFJlcHJlc2VudGF0aW9uSUQ6IGF0dHJpYnV0ZXMuaWQsXG4gICAgQmFuZHdpZHRoOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCB8fCAwXG4gIH07XG4gIGNvbnN0IHtcbiAgICBpbml0aWFsaXphdGlvbiA9IHtcbiAgICAgIHNvdXJjZVVSTDogJycsXG4gICAgICByYW5nZTogJydcbiAgICB9XG4gIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBtYXBTZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybDogYXR0cmlidXRlcy5iYXNlVXJsLFxuICAgIHNvdXJjZTogY29uc3RydWN0VGVtcGxhdGVVcmwoaW5pdGlhbGl6YXRpb24uc291cmNlVVJMLCB0ZW1wbGF0ZVZhbHVlcyksXG4gICAgcmFuZ2U6IGluaXRpYWxpemF0aW9uLnJhbmdlXG4gIH0pO1xuICBjb25zdCBzZWdtZW50cyA9IHBhcnNlVGVtcGxhdGVJbmZvKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG4gIHJldHVybiBzZWdtZW50cy5tYXAoc2VnbWVudCA9PiB7XG4gICAgdGVtcGxhdGVWYWx1ZXMuTnVtYmVyID0gc2VnbWVudC5udW1iZXI7XG4gICAgdGVtcGxhdGVWYWx1ZXMuVGltZSA9IHNlZ21lbnQudGltZTtcbiAgICBjb25zdCB1cmkgPSBjb25zdHJ1Y3RUZW1wbGF0ZVVybChhdHRyaWJ1dGVzLm1lZGlhIHx8ICcnLCB0ZW1wbGF0ZVZhbHVlcyk7IC8vIFNlZSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuOS4yLjJcbiAgICAvLyAtIGlmIHRpbWVzY2FsZSBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAxLlxuXG4gICAgY29uc3QgdGltZXNjYWxlID0gYXR0cmlidXRlcy50aW1lc2NhbGUgfHwgMTsgLy8gLSBpZiBwcmVzZW50YXRpb25UaW1lT2Zmc2V0IGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDBcblxuICAgIGNvbnN0IHByZXNlbnRhdGlvblRpbWVPZmZzZXQgPSBhdHRyaWJ1dGVzLnByZXNlbnRhdGlvblRpbWVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCBwcmVzZW50YXRpb25UaW1lID0gLy8gRXZlbiBpZiB0aGUgQHQgYXR0cmlidXRlIGlzIG5vdCBzcGVjaWZpZWQgZm9yIHRoZSBzZWdtZW50LCBzZWdtZW50LnRpbWUgaXNcbiAgICAvLyBjYWxjdWxhdGVkIGluIG1wZC1wYXJzZXIgcHJpb3IgdG8gdGhpcywgc28gaXQncyBhc3N1bWVkIHRvIGJlIGF2YWlsYWJsZS5cbiAgICBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0ICsgKHNlZ21lbnQudGltZSAtIHByZXNlbnRhdGlvblRpbWVPZmZzZXQpIC8gdGltZXNjYWxlO1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgIHVyaSxcbiAgICAgIHRpbWVsaW5lOiBzZWdtZW50LnRpbWVsaW5lLFxuICAgICAgZHVyYXRpb246IHNlZ21lbnQuZHVyYXRpb24sXG4gICAgICByZXNvbHZlZFVyaTogcmVzb2x2ZVVybChhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsIHVyaSksXG4gICAgICBtYXA6IG1hcFNlZ21lbnQsXG4gICAgICBudW1iZXI6IHNlZ21lbnQubnVtYmVyLFxuICAgICAgcHJlc2VudGF0aW9uVGltZVxuICAgIH07XG4gICAgcmV0dXJuIG1hcDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgPFNlZ21lbnRVcmw+IChvZiB0eXBlIFVSTFR5cGUgZnJvbSB0aGUgREFTSCBzcGVjIDUuMy45LjIgVGFibGUgMTQpXG4gKiB0byBhbiBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBvdXRwdXQgb2YgYSBzZWdtZW50IGluIHZpZGVvanMvbXBkLXBhcnNlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdH0gc2VnbWVudFVybFxuICogICA8U2VnbWVudFVSTD4gbm9kZSB0byB0cmFuc2xhdGUgaW50byBhIHNlZ21lbnQgb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRyYW5zbGF0ZWQgc2VnbWVudCBvYmplY3RcbiAqL1xuXG5jb25zdCBTZWdtZW50VVJMVG9TZWdtZW50T2JqZWN0ID0gKGF0dHJpYnV0ZXMsIHNlZ21lbnRVcmwpID0+IHtcbiAgY29uc3Qge1xuICAgIGJhc2VVcmwsXG4gICAgaW5pdGlhbGl6YXRpb24gPSB7fVxuICB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgaW5pdFNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIHNvdXJjZTogaW5pdGlhbGl6YXRpb24uc291cmNlVVJMLFxuICAgIHJhbmdlOiBpbml0aWFsaXphdGlvbi5yYW5nZVxuICB9KTtcbiAgY29uc3Qgc2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgc291cmNlOiBzZWdtZW50VXJsLm1lZGlhLFxuICAgIHJhbmdlOiBzZWdtZW50VXJsLm1lZGlhUmFuZ2VcbiAgfSk7XG4gIHNlZ21lbnQubWFwID0gaW5pdFNlZ21lbnQ7XG4gIHJldHVybiBzZWdtZW50O1xufTtcbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBzZWdtZW50cyB1c2luZyBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgU2VnbWVudExpc3QgZWxlbWVudFxuICogU2VnbWVudExpc3QgKERBU0ggU1BFQyBTZWN0aW9uIDUuMy45LjMuMikgY29udGFpbnMgYSBzZXQgb2YgPFNlZ21lbnRVUkw+IG5vZGVzLiAgRWFjaFxuICogbm9kZSBzaG91bGQgYmUgdHJhbnNsYXRlZCBpbnRvIHNlZ21lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqICAgICAgICB0aGUgU2VnbWVudFRpbWVsaW5lIGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdC48QXJyYXk+fSBsaXN0IG9mIHNlZ21lbnRzXG4gKi9cblxuXG5jb25zdCBzZWdtZW50c0Zyb21MaXN0ID0gKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkgPT4ge1xuICBjb25zdCB7XG4gICAgZHVyYXRpb24sXG4gICAgc2VnbWVudFVybHMgPSBbXSxcbiAgICBwZXJpb2RTdGFydFxuICB9ID0gYXR0cmlidXRlczsgLy8gUGVyIHNwZWMgKDUuMy45LjIuMSkgbm8gd2F5IHRvIGRldGVybWluZSBzZWdtZW50IGR1cmF0aW9uIE9SXG4gIC8vIGlmIGJvdGggU2VnbWVudFRpbWVsaW5lIGFuZCBAZHVyYXRpb24gYXJlIGRlZmluZWQsIGl0IGlzIG91dHNpZGUgb2Ygc3BlYy5cblxuICBpZiAoIWR1cmF0aW9uICYmICFzZWdtZW50VGltZWxpbmUgfHwgZHVyYXRpb24gJiYgc2VnbWVudFRpbWVsaW5lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5TRUdNRU5UX1RJTUVfVU5TUEVDSUZJRUQpO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudFVybE1hcCA9IHNlZ21lbnRVcmxzLm1hcChzZWdtZW50VXJsT2JqZWN0ID0+IFNlZ21lbnRVUkxUb1NlZ21lbnRPYmplY3QoYXR0cmlidXRlcywgc2VnbWVudFVybE9iamVjdCkpO1xuICBsZXQgc2VnbWVudFRpbWVJbmZvO1xuXG4gIGlmIChkdXJhdGlvbikge1xuICAgIHNlZ21lbnRUaW1lSW5mbyA9IHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGlmIChzZWdtZW50VGltZWxpbmUpIHtcbiAgICBzZWdtZW50VGltZUluZm8gPSBwYXJzZUJ5VGltZWxpbmUoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbiAgfVxuXG4gIGNvbnN0IHNlZ21lbnRzID0gc2VnbWVudFRpbWVJbmZvLm1hcCgoc2VnbWVudFRpbWUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHNlZ21lbnRVcmxNYXBbaW5kZXhdKSB7XG4gICAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudFVybE1hcFtpbmRleF07IC8vIFNlZSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuOS4yLjJcbiAgICAgIC8vIC0gaWYgdGltZXNjYWxlIGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDEuXG5cbiAgICAgIGNvbnN0IHRpbWVzY2FsZSA9IGF0dHJpYnV0ZXMudGltZXNjYWxlIHx8IDE7IC8vIC0gaWYgcHJlc2VudGF0aW9uVGltZU9mZnNldCBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAwXG5cbiAgICAgIGNvbnN0IHByZXNlbnRhdGlvblRpbWVPZmZzZXQgPSBhdHRyaWJ1dGVzLnByZXNlbnRhdGlvblRpbWVPZmZzZXQgfHwgMDtcbiAgICAgIHNlZ21lbnQudGltZWxpbmUgPSBzZWdtZW50VGltZS50aW1lbGluZTtcbiAgICAgIHNlZ21lbnQuZHVyYXRpb24gPSBzZWdtZW50VGltZS5kdXJhdGlvbjtcbiAgICAgIHNlZ21lbnQubnVtYmVyID0gc2VnbWVudFRpbWUubnVtYmVyO1xuICAgICAgc2VnbWVudC5wcmVzZW50YXRpb25UaW1lID0gcGVyaW9kU3RhcnQgKyAoc2VnbWVudFRpbWUudGltZSAtIHByZXNlbnRhdGlvblRpbWVPZmZzZXQpIC8gdGltZXNjYWxlO1xuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSAvLyBTaW5jZSB3ZSdyZSBtYXBwaW5nIHdlIHNob3VsZCBnZXQgcmlkIG9mIGFueSBibGFuayBzZWdtZW50cyAoaW4gY2FzZVxuICAgIC8vIHRoZSBnaXZlbiBTZWdtZW50VGltZWxpbmUgaXMgaGFuZGxpbmcgZm9yIG1vcmUgZWxlbWVudHMgdGhhbiB3ZSBoYXZlXG4gICAgLy8gU2VnbWVudFVSTHMgZm9yKS5cblxuICB9KS5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50KTtcbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTZWdtZW50cyA9ICh7XG4gIGF0dHJpYnV0ZXMsXG4gIHNlZ21lbnRJbmZvXG59KSA9PiB7XG4gIGxldCBzZWdtZW50QXR0cmlidXRlcztcbiAgbGV0IHNlZ21lbnRzRm47XG5cbiAgaWYgKHNlZ21lbnRJbmZvLnRlbXBsYXRlKSB7XG4gICAgc2VnbWVudHNGbiA9IHNlZ21lbnRzRnJvbVRlbXBsYXRlO1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8udGVtcGxhdGUpO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRJbmZvLmJhc2UpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tQmFzZTtcbiAgICBzZWdtZW50QXR0cmlidXRlcyA9IG1lcmdlKGF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLmJhc2UpO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRJbmZvLmxpc3QpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tTGlzdDtcbiAgICBzZWdtZW50QXR0cmlidXRlcyA9IG1lcmdlKGF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLmxpc3QpO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudHNJbmZvID0ge1xuICAgIGF0dHJpYnV0ZXNcbiAgfTtcblxuICBpZiAoIXNlZ21lbnRzRm4pIHtcbiAgICByZXR1cm4gc2VnbWVudHNJbmZvO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudHMgPSBzZWdtZW50c0ZuKHNlZ21lbnRBdHRyaWJ1dGVzLCBzZWdtZW50SW5mby5zZWdtZW50VGltZWxpbmUpOyAvLyBUaGUgQGR1cmF0aW9uIGF0dHJpYnV0ZSB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW4gdGhlIHBsYXlsaXN0J3MgdGFyZ2V0RHVyYXRpb24gd2hpY2hcbiAgLy8gbXVzdCBiZSBpbiBzZWNvbmRzLiBTaW5jZSB3ZSd2ZSBnZW5lcmF0ZWQgdGhlIHNlZ21lbnQgbGlzdCwgd2Ugbm8gbG9uZ2VyIG5lZWRcbiAgLy8gQGR1cmF0aW9uIHRvIGJlIGluIEB0aW1lc2NhbGUgdW5pdHMsIHNvIHdlIGNhbiBjb252ZXJ0IGl0IGhlcmUuXG5cbiAgaWYgKHNlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGUgPSAxXG4gICAgfSA9IHNlZ21lbnRBdHRyaWJ1dGVzO1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uID0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XG4gIH0gZWxzZSBpZiAoc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gQGR1cmF0aW9uIGF0dHJpYnV0ZSwgdXNlIHRoZSBsYXJnZXN0IHNlZ21lbnQgZHVyYXRpb24gYXNcbiAgICAvLyBhcyB0YXJnZXQgZHVyYXRpb25cbiAgICBzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbiA9IHNlZ21lbnRzLnJlZHVjZSgobWF4LCBzZWdtZW50KSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgobWF4LCBNYXRoLmNlaWwoc2VnbWVudC5kdXJhdGlvbikpO1xuICAgIH0sIDApO1xuICB9IGVsc2Uge1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIHNlZ21lbnRzSW5mby5hdHRyaWJ1dGVzID0gc2VnbWVudEF0dHJpYnV0ZXM7XG4gIHNlZ21lbnRzSW5mby5zZWdtZW50cyA9IHNlZ21lbnRzOyAvLyBUaGlzIGlzIGEgc2lkeCBib3ggd2l0aG91dCBhY3R1YWwgc2VnbWVudCBpbmZvcm1hdGlvblxuXG4gIGlmIChzZWdtZW50SW5mby5iYXNlICYmIHNlZ21lbnRBdHRyaWJ1dGVzLmluZGV4UmFuZ2UpIHtcbiAgICBzZWdtZW50c0luZm8uc2lkeCA9IHNlZ21lbnRzWzBdO1xuICAgIHNlZ21lbnRzSW5mby5zZWdtZW50cyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzSW5mbztcbn07XG5jb25zdCB0b1BsYXlsaXN0cyA9IHJlcHJlc2VudGF0aW9ucyA9PiByZXByZXNlbnRhdGlvbnMubWFwKGdlbmVyYXRlU2VnbWVudHMpO1xuXG5jb25zdCBmaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgbmFtZSkgPT4gZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZpbHRlcigoe1xuICB0YWdOYW1lXG59KSA9PiB0YWdOYW1lID09PSBuYW1lKTtcbmNvbnN0IGdldENvbnRlbnQgPSBlbGVtZW50ID0+IGVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBwcm92aWRlZCBzdHJpbmcgdGhhdCBtYXkgY29udGFpbiBhIGRpdmlzaW9uIG9wZXJhdGlvbiB0byBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgcHJvdmlkZWQgc3RyaW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcGFyc2VkIHN0cmluZyB2YWx1ZVxuICovXG5jb25zdCBwYXJzZURpdmlzaW9uVmFsdWUgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnNwbGl0KCcvJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBwcmV2IC8gY3VycmVudCkpO1xufTtcblxuY29uc3QgcGFyc2VEdXJhdGlvbiA9IHN0ciA9PiB7XG4gIGNvbnN0IFNFQ09ORFNfSU5fWUVBUiA9IDM2NSAqIDI0ICogNjAgKiA2MDtcbiAgY29uc3QgU0VDT05EU19JTl9NT05USCA9IDMwICogMjQgKiA2MCAqIDYwO1xuICBjb25zdCBTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MDtcbiAgY29uc3QgU0VDT05EU19JTl9IT1VSID0gNjAgKiA2MDtcbiAgY29uc3QgU0VDT05EU19JTl9NSU4gPSA2MDsgLy8gUDEwWTEwTTEwRFQxMEgxME0xMC4xU1xuXG4gIGNvbnN0IGR1cmF0aW9uUmVnZXggPSAvUCg/OihcXGQqKVkpPyg/OihcXGQqKU0pPyg/OihcXGQqKUQpPyg/OlQoPzooXFxkKilIKT8oPzooXFxkKilNKT8oPzooW1xcZC5dKilTKT8pPy87XG4gIGNvbnN0IG1hdGNoID0gZHVyYXRpb25SZWdleC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IG1hdGNoLnNsaWNlKDEpO1xuICByZXR1cm4gcGFyc2VGbG9hdCh5ZWFyIHx8IDApICogU0VDT05EU19JTl9ZRUFSICsgcGFyc2VGbG9hdChtb250aCB8fCAwKSAqIFNFQ09ORFNfSU5fTU9OVEggKyBwYXJzZUZsb2F0KGRheSB8fCAwKSAqIFNFQ09ORFNfSU5fREFZICsgcGFyc2VGbG9hdChob3VyIHx8IDApICogU0VDT05EU19JTl9IT1VSICsgcGFyc2VGbG9hdChtaW51dGUgfHwgMCkgKiBTRUNPTkRTX0lOX01JTiArIHBhcnNlRmxvYXQoc2Vjb25kIHx8IDApO1xufTtcbmNvbnN0IHBhcnNlRGF0ZSA9IHN0ciA9PiB7XG4gIC8vIERhdGUgZm9ybWF0IHdpdGhvdXQgdGltZXpvbmUgYWNjb3JkaW5nIHRvIElTTyA4NjAxXG4gIC8vIFlZWS1NTS1ERFRoaDptbTpzcy5zc3Nzc3NcbiAgY29uc3QgZGF0ZVJlZ2V4ID0gL15cXGQrLVxcZCstXFxkK1RcXGQrOlxcZCs6XFxkKyhcXC5cXGQrKT8kLzsgLy8gSWYgdGhlIGRhdGUgc3RyaW5nIGRvZXMgbm90IHNwZWNpZml5IGEgdGltZXpvbmUsIHdlIG11c3Qgc3BlY2lmaXkgVVRDLiBUaGlzIGlzXG4gIC8vIGV4cHJlc3NlZCBieSBlbmRpbmcgd2l0aCAnWidcblxuICBpZiAoZGF0ZVJlZ2V4LnRlc3Qoc3RyKSkge1xuICAgIHN0ciArPSAnWic7XG4gIH1cblxuICByZXR1cm4gRGF0ZS5wYXJzZShzdHIpO1xufTtcblxuY29uc3QgcGFyc2VycyA9IHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIGVudGlyZSBNZWRpYSBQcmVzZW50YXRpb24uIEZvcm1hdCBpcyBhIGR1cmF0aW9uIHN0cmluZ1xuICAgKiBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBtZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFNlZ21lbnQgYXZhaWxhYmlsaXR5IHN0YXJ0IHRpbWUgZm9yIGFsbCBTZWdtZW50cyByZWZlcnJlZCB0byBpbiB0aGlzXG4gICAqIE1QRC4gRm9yIGEgZHluYW1pYyBtYW5pZmVzdCwgaXQgc3BlY2lmaWVzIHRoZSBhbmNob3IgZm9yIHRoZSBlYXJsaWVzdCBhdmFpbGFiaWxpdHlcbiAgICogdGltZS4gRm9ybWF0IGlzIGEgZGF0ZSBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZGF0ZSBhcyBzZWNvbmRzIGZyb20gdW5peCBlcG9jaFxuICAgKi9cbiAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRGF0ZSh2YWx1ZSkgLyAxMDAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHNtYWxsZXN0IHBlcmlvZCBiZXR3ZWVuIHBvdGVudGlhbCBjaGFuZ2VzIHRvIHRoZSBNUEQuIEZvcm1hdCBpcyBhXG4gICAqIGR1cmF0aW9uIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBtaW5pbXVtVXBkYXRlUGVyaW9kKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHN1Z2dlc3RlZCBwcmVzZW50YXRpb24gZGVsYXkuIEZvcm1hdCBpcyBhXG4gICAqIGR1cmF0aW9uIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBzdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogc3BlY2lmaWNlcyB0aGUgdHlwZSBvZiBtcGQuIENhbiBiZSBlaXRoZXIgXCJzdGF0aWNcIiBvciBcImR5bmFtaWNcIlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIHR5cGUgYXMgYSBzdHJpbmdcbiAgICovXG4gIHR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIHNtYWxsZXN0IHRpbWUgc2hpZnRpbmcgYnVmZmVyIGZvciBhbnkgUmVwcmVzZW50YXRpb25cbiAgICogaW4gdGhlIE1QRC4gRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHRpbWVTaGlmdEJ1ZmZlckRlcHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFBlcmlvZFN0YXJ0IHRpbWUgb2YgdGhlIFBlcmlvZCByZWxhdGl2ZSB0byB0aGUgYXZhaWxhYmlsaXR5U3RhcnR0aW1lLlxuICAgKiBGb3JtYXQgaXMgYSBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgc3RhcnQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgd2lkdGggb2YgdGhlIHZpc3VhbCBwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgd2lkdGhcbiAgICovXG4gIHdpZHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgaGVpZ2h0IG9mIHRoZSB2aXN1YWwgcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGhlaWdodFxuICAgKi9cbiAgaGVpZ2h0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYml0cmF0ZSBvZiB0aGUgcmVwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgYmFuZHdpZHRoXG4gICAqL1xuICBiYW5kd2lkdGgodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBmcmFtZSByYXRlIG9mIHRoZSByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBmcmFtZSByYXRlXG4gICAqL1xuICBmcmFtZVJhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEaXZpc2lvblZhbHVlKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGhlIGZpcnN0IE1lZGlhIFNlZ21lbnQgaW4gdGhpcyBSZXByZXNlbnRhdGlvbiBpbiB0aGUgUGVyaW9kXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIG51bWJlclxuICAgKi9cbiAgc3RhcnROdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0aW1lc2NhbGUgaW4gdW5pdHMgcGVyIHNlY29uZHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgdGltZXNjYWxlXG4gICAqL1xuICB0aW1lc2NhbGUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBwcmVzZW50YXRpb25UaW1lT2Zmc2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgcHJlc2VudGF0aW9uVGltZU9mZnNldFxuICAgKi9cbiAgcHJlc2VudGF0aW9uVGltZU9mZnNldCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGNvbnN0YW50IGFwcHJveGltYXRlIFNlZ21lbnQgZHVyYXRpb25cbiAgICogTk9URTogVGhlIDxQZXJpb2Q+IGVsZW1lbnQgYWxzbyBjb250YWlucyBhbiBAZHVyYXRpb24gYXR0cmlidXRlLiBUaGlzIGR1cmF0aW9uXG4gICAqICAgICAgIHNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIFBlcmlvZC4gVGhpcyBhdHRyaWJ1dGUgaXMgY3VycmVudGx5IG5vdFxuICAgKiAgICAgICBzdXBwb3J0ZWQgYnkgdGhlIHJlc3Qgb2YgdGhlIHBhcnNlciwgaG93ZXZlciB3ZSBzdGlsbCBjaGVjayBmb3IgaXQgdG8gcHJldmVudFxuICAgKiAgICAgICBlcnJvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGR1cmF0aW9uXG4gICAqL1xuICBkdXJhdGlvbih2YWx1ZSkge1xuICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgU2VnbWVudCBkdXJhdGlvbiwgaW4gdW5pdHMgb2YgdGhlIHZhbHVlIG9mIHRoZSBAdGltZXNjYWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBkdXJhdGlvblxuICAgKi9cbiAgZCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIE1QRCBzdGFydCB0aW1lLCBpbiBAdGltZXNjYWxlIHVuaXRzLCB0aGUgZmlyc3QgU2VnbWVudCBpbiB0aGUgc2VyaWVzXG4gICAqIHN0YXJ0cyByZWxhdGl2ZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBQZXJpb2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgdGltZVxuICAgKi9cbiAgdCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHJlcGVhdCBjb3VudCBvZiB0aGUgbnVtYmVyIG9mIGZvbGxvd2luZyBjb250aWd1b3VzIFNlZ21lbnRzIHdpdGggdGhlXG4gICAqIHNhbWUgZHVyYXRpb24gZXhwcmVzc2VkIGJ5IHRoZSB2YWx1ZSBvZiBAZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBudW1iZXJcbiAgICovXG4gIHIodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBwcmVzZW50YXRpb25UaW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgcHJlc2VudGF0aW9uVGltZVxuICAgKi9cbiAgcHJlc2VudGF0aW9uVGltZSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHBhcnNlciBmb3IgYWxsIG90aGVyIGF0dHJpYnV0ZXMuIEFjdHMgYXMgYSBuby1vcCBhbmQganVzdCByZXR1cm5zIHRoZSB2YWx1ZVxuICAgKiBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVW5wYXJzZWQgdmFsdWVcbiAgICovXG4gIERFRkFVTFQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufTtcbi8qKlxuICogR2V0cyBhbGwgdGhlIGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyBvZiB0aGUgcHJvdmlkZWQgbm9kZSwgcGFyc2VzIGF0dHJpYnV0ZXMgd2l0aCBrbm93blxuICogdHlwZXMsIGFuZCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGF0dHJpYnV0ZSBuYW1lcyBtYXBwZWQgdG8gdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqICAgICAgICBUaGUgbm9kZSB0byBwYXJzZSBhdHRyaWJ1dGVzIGZyb21cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqICAgICAgICAgT2JqZWN0IHdpdGggYWxsIGF0dHJpYnV0ZXMgb2YgZWwgcGFyc2VkXG4gKi9cblxuY29uc3QgcGFyc2VBdHRyaWJ1dGVzID0gZWwgPT4ge1xuICBpZiAoIShlbCAmJiBlbC5hdHRyaWJ1dGVzKSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiBmcm9tKGVsLmF0dHJpYnV0ZXMpLnJlZHVjZSgoYSwgZSkgPT4ge1xuICAgIGNvbnN0IHBhcnNlRm4gPSBwYXJzZXJzW2UubmFtZV0gfHwgcGFyc2Vycy5ERUZBVUxUO1xuICAgIGFbZS5uYW1lXSA9IHBhcnNlRm4oZS52YWx1ZSk7XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn07XG5cbmNvbnN0IGtleVN5c3RlbXNNYXAgPSB7XG4gICd1cm46dXVpZDoxMDc3ZWZlYy1jMGIyLTRkMDItYWNlMy0zYzFlNTJlMmZiNGInOiAnb3JnLnczLmNsZWFya2V5JyxcbiAgJ3Vybjp1dWlkOmVkZWY4YmE5LTc5ZDYtNGFjZS1hM2M4LTI3ZGNkNTFkMjFlZCc6ICdjb20ud2lkZXZpbmUuYWxwaGEnLFxuICAndXJuOnV1aWQ6OWEwNGYwNzktOTg0MC00Mjg2LWFiOTItZTY1YmUwODg1Zjk1JzogJ2NvbS5taWNyb3NvZnQucGxheXJlYWR5JyxcbiAgJ3Vybjp1dWlkOmYyMzllNzY5LWVmYTMtNDg1MC05YzE2LWE5MDNjNjkzMmVmYic6ICdjb20uYWRvYmUucHJpbWV0aW1lJ1xufTtcbi8qKlxuICogQnVpbGRzIGEgbGlzdCBvZiB1cmxzIHRoYXQgaXMgdGhlIHByb2R1Y3Qgb2YgdGhlIHJlZmVyZW5jZSB1cmxzIGFuZCBCYXNlVVJMIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0W119IHJlZmVyZW5jZXNcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgcmVmZXJlbmNlIFVSTCBhcyB3ZWxsIGFzIGl0cyBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge05vZGVbXX0gYmFzZVVybEVsZW1lbnRzXG4gKiAgICAgICAgTGlzdCBvZiBCYXNlVVJMIG5vZGVzIGZyb20gdGhlIG1wZFxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyB3aXRoIHJlc29sdmVkIHVybHMgYW5kIGF0dHJpYnV0ZXNcbiAqL1xuXG5jb25zdCBidWlsZEJhc2VVcmxzID0gKHJlZmVyZW5jZXMsIGJhc2VVcmxFbGVtZW50cykgPT4ge1xuICBpZiAoIWJhc2VVcmxFbGVtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuKHJlZmVyZW5jZXMubWFwKGZ1bmN0aW9uIChyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gYmFzZVVybEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoYmFzZVVybEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxCYXNlVXJsID0gZ2V0Q29udGVudChiYXNlVXJsRWxlbWVudCk7XG4gICAgICBjb25zdCByZXNvbHZlZEJhc2VVcmwgPSByZXNvbHZlVXJsKHJlZmVyZW5jZS5iYXNlVXJsLCBpbml0aWFsQmFzZVVybCk7XG4gICAgICBjb25zdCBmaW5hbEJhc2VVcmwgPSBtZXJnZShwYXJzZUF0dHJpYnV0ZXMoYmFzZVVybEVsZW1lbnQpLCB7XG4gICAgICAgIGJhc2VVcmw6IHJlc29sdmVkQmFzZVVybFxuICAgICAgfSk7IC8vIElmIHRoZSBVUkwgaXMgcmVzb2x2ZWQsIHdlIHdhbnQgdG8gZ2V0IHRoZSBzZXJ2aWNlTG9jYXRpb24gZnJvbSB0aGUgcmVmZXJlbmNlXG4gICAgICAvLyBhc3N1bWluZyB0aGVyZSBpcyBubyBzZXJ2aWNlTG9jYXRpb24gb24gdGhlIGluaXRpYWxCYXNlVXJsXG5cbiAgICAgIGlmIChyZXNvbHZlZEJhc2VVcmwgIT09IGluaXRpYWxCYXNlVXJsICYmICFmaW5hbEJhc2VVcmwuc2VydmljZUxvY2F0aW9uICYmIHJlZmVyZW5jZS5zZXJ2aWNlTG9jYXRpb24pIHtcbiAgICAgICAgZmluYWxCYXNlVXJsLnNlcnZpY2VMb2NhdGlvbiA9IHJlZmVyZW5jZS5zZXJ2aWNlTG9jYXRpb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaW5hbEJhc2VVcmw7XG4gICAgfSk7XG4gIH0pKTtcbn07XG4vKipcbiAqIENvbnRhaW5zIGFsbCBTZWdtZW50IGluZm9ybWF0aW9uIGZvciBpdHMgY29udGFpbmluZyBBZGFwdGF0aW9uU2V0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gU2VnbWVudEluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge09iamVjdHx1bmRlZmluZWR9IHRlbXBsYXRlXG4gKiAgICAgICAgICAgQ29udGFpbnMgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBTZWdtZW50VGVtcGxhdGUgbm9kZVxuICogQHByb3BlcnR5IHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgICAgIENvbnRhaW5zIGEgbGlzdCBvZiBhdHJyaWJ1dGVzIGZvciBlYWNoIFMgbm9kZSB3aXRoaW4gdGhlIFNlZ21lbnRUaW1lbGluZSBub2RlXG4gKiBAcHJvcGVydHkge09iamVjdHx1bmRlZmluZWR9IGxpc3RcbiAqICAgICAgICAgICBDb250YWlucyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIFNlZ21lbnRMaXN0IG5vZGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gYmFzZVxuICogICAgICAgICAgIENvbnRhaW5zIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgU2VnbWVudEJhc2Ugbm9kZVxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbGwgYXZhaWxhYmxlIFNlZ21lbnQgaW5mb3JtYXRpb24gY29udGFpbmVkIHdpdGhpbiB0aGUgQWRhcHRhdGlvblNldCBub2RlXG4gKlxuICogQHBhcmFtIHtOb2RlfSBhZGFwdGF0aW9uU2V0XG4gKiAgICAgICAgVGhlIEFkYXB0YXRpb25TZXQgbm9kZSB0byBnZXQgU2VnbWVudCBpbmZvcm1hdGlvbiBmcm9tXG4gKiBAcmV0dXJuIHtTZWdtZW50SW5mb3JtYXRpb259XG4gKiAgICAgICAgIFRoZSBTZWdtZW50IGluZm9ybWF0aW9uIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHByb3ZpZGVkIEFkYXB0YXRpb25TZXRcbiAqL1xuXG5jb25zdCBnZXRTZWdtZW50SW5mb3JtYXRpb24gPSBhZGFwdGF0aW9uU2V0ID0+IHtcbiAgY29uc3Qgc2VnbWVudFRlbXBsYXRlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50VGVtcGxhdGUnKVswXTtcbiAgY29uc3Qgc2VnbWVudExpc3QgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1NlZ21lbnRMaXN0JylbMF07XG4gIGNvbnN0IHNlZ21lbnRVcmxzID0gc2VnbWVudExpc3QgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRMaXN0LCAnU2VnbWVudFVSTCcpLm1hcChzID0+IG1lcmdlKHtcbiAgICB0YWc6ICdTZWdtZW50VVJMJ1xuICB9LCBwYXJzZUF0dHJpYnV0ZXMocykpKTtcbiAgY29uc3Qgc2VnbWVudEJhc2UgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1NlZ21lbnRCYXNlJylbMF07XG4gIGNvbnN0IHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUgPSBzZWdtZW50TGlzdCB8fCBzZWdtZW50VGVtcGxhdGU7XG4gIGNvbnN0IHNlZ21lbnRUaW1lbGluZSA9IHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUsICdTZWdtZW50VGltZWxpbmUnKVswXTtcbiAgY29uc3Qgc2VnbWVudEluaXRpYWxpemF0aW9uUGFyZW50Tm9kZSA9IHNlZ21lbnRMaXN0IHx8IHNlZ21lbnRCYXNlIHx8IHNlZ21lbnRUZW1wbGF0ZTtcbiAgY29uc3Qgc2VnbWVudEluaXRpYWxpemF0aW9uID0gc2VnbWVudEluaXRpYWxpemF0aW9uUGFyZW50Tm9kZSAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudEluaXRpYWxpemF0aW9uUGFyZW50Tm9kZSwgJ0luaXRpYWxpemF0aW9uJylbMF07IC8vIFNlZ21lbnRUZW1wbGF0ZSBpcyBoYW5kbGVkIHNsaWdodGx5IGRpZmZlcmVudGx5LCBzaW5jZSBpdCBjYW4gaGF2ZSBib3RoXG4gIC8vIEBpbml0aWFsaXphdGlvbiBhbmQgYW4gPEluaXRpYWxpemF0aW9uPiBub2RlLiAgQGluaXRpYWxpemF0aW9uIGNhbiBiZSB0ZW1wbGF0ZWQsXG4gIC8vIHdoaWxlIHRoZSBub2RlIGNhbiBoYXZlIGEgdXJsIGFuZCByYW5nZSBzcGVjaWZpZWQuICBJZiB0aGUgPFNlZ21lbnRUZW1wbGF0ZT4gaGFzXG4gIC8vIGJvdGggQGluaXRpYWxpemF0aW9uIGFuZCBhbiA8SW5pdGlhbGl6YXRpb24+IHN1YmVsZW1lbnQgd2Ugb3B0IHRvIG92ZXJyaWRlIHdpdGhcbiAgLy8gdGhlIG5vZGUsIGFzIHRoaXMgaW50ZXJhY3Rpb24gaXMgbm90IGRlZmluZWQgaW4gdGhlIHNwZWMuXG5cbiAgY29uc3QgdGVtcGxhdGUgPSBzZWdtZW50VGVtcGxhdGUgJiYgcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRUZW1wbGF0ZSk7XG5cbiAgaWYgKHRlbXBsYXRlICYmIHNlZ21lbnRJbml0aWFsaXphdGlvbikge1xuICAgIHRlbXBsYXRlLmluaXRpYWxpemF0aW9uID0gc2VnbWVudEluaXRpYWxpemF0aW9uICYmIHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlLmluaXRpYWxpemF0aW9uKSB7XG4gICAgLy8gSWYgaXQgaXMgQGluaXRpYWxpemF0aW9uIHdlIGNvbnZlcnQgaXQgdG8gYW4gb2JqZWN0IHNpbmNlIHRoaXMgaXMgdGhlIGZvcm1hdCB0aGF0XG4gICAgLy8gbGF0ZXIgZnVuY3Rpb25zIHdpbGwgcmVseSBvbiBmb3IgdGhlIGluaXRpYWxpemF0aW9uIHNlZ21lbnQuICBUaGlzIGlzIG9ubHkgdmFsaWRcbiAgICAvLyBmb3IgPFNlZ21lbnRUZW1wbGF0ZT5cbiAgICB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbiA9IHtcbiAgICAgIHNvdXJjZVVSTDogdGVtcGxhdGUuaW5pdGlhbGl6YXRpb25cbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudEluZm8gPSB7XG4gICAgdGVtcGxhdGUsXG4gICAgc2VnbWVudFRpbWVsaW5lOiBzZWdtZW50VGltZWxpbmUgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRUaW1lbGluZSwgJ1MnKS5tYXAocyA9PiBwYXJzZUF0dHJpYnV0ZXMocykpLFxuICAgIGxpc3Q6IHNlZ21lbnRMaXN0ICYmIG1lcmdlKHBhcnNlQXR0cmlidXRlcyhzZWdtZW50TGlzdCksIHtcbiAgICAgIHNlZ21lbnRVcmxzLFxuICAgICAgaW5pdGlhbGl6YXRpb246IHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pXG4gICAgfSksXG4gICAgYmFzZTogc2VnbWVudEJhc2UgJiYgbWVyZ2UocGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRCYXNlKSwge1xuICAgICAgaW5pdGlhbGl6YXRpb246IHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pXG4gICAgfSlcbiAgfTtcbiAgT2JqZWN0LmtleXMoc2VnbWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIXNlZ21lbnRJbmZvW2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZWdtZW50SW5mb1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50SW5mbztcbn07XG4vKipcbiAqIENvbnRhaW5zIFNlZ21lbnQgaW5mb3JtYXRpb24gYW5kIGF0dHJpYnV0ZXMgbmVlZGVkIHRvIGNvbnN0cnVjdCBhIFBsYXlsaXN0IG9iamVjdFxuICogZnJvbSBhIFJlcHJlc2VudGF0aW9uXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVwcmVzZW50YXRpb25JbmZvcm1hdGlvblxuICogQHByb3BlcnR5IHtTZWdtZW50SW5mb3JtYXRpb259IHNlZ21lbnRJbmZvXG4gKiAgICAgICAgICAgU2VnbWVudCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBSZXByZXNlbnRhdGlvblxuICogQHByb3BlcnR5IHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICAgICBJbmhlcml0ZWQgYXR0cmlidXRlcyBmb3IgdGhpcyBSZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogTWFwcyBhIFJlcHJlc2VudGF0aW9uIG5vZGUgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgU2VnbWVudCBpbmZvcm1hdGlvbiBhbmQgYXR0cmlidXRlc1xuICpcbiAqIEBuYW1lIGluaGVyaXRCYXNlVXJsc0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7Tm9kZX0gcmVwcmVzZW50YXRpb25cbiAqICAgICAgICBSZXByZXNlbnRhdGlvbiBub2RlIGZyb20gdGhlIG1wZFxuICogQHJldHVybiB7UmVwcmVzZW50YXRpb25JbmZvcm1hdGlvbn1cbiAqICAgICAgICAgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGNvbnN0cnVjdCBhIFBsYXlsaXN0IG9iamVjdFxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIFJlcHJlc2VudGF0aW9uIG5vZGVzIHRvXG4gKiBTZWdtZW50IGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzIHVzaW5nIGluaGVyaXRlZCBCYXNlVVJMIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhZGFwdGF0aW9uU2V0QXR0cmlidXRlc1xuICogICAgICAgIENvbnRhaW5zIGF0dHJpYnV0ZXMgaW5oZXJpdGVkIGJ5IHRoZSBBZGFwdGF0aW9uU2V0XG4gKiBAcGFyYW0ge09iamVjdFtdfSBhZGFwdGF0aW9uU2V0QmFzZVVybHNcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyByZXNvbHZlZCBiYXNlIFVSTHMgYW5kIGF0dHJpYnV0ZXNcbiAqICAgICAgICBpbmhlcml0ZWQgYnkgdGhlIEFkYXB0YXRpb25TZXRcbiAqIEBwYXJhbSB7U2VnbWVudEluZm9ybWF0aW9ufSBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm9cbiAqICAgICAgICBDb250YWlucyBTZWdtZW50IGluZm9ybWF0aW9uIGZvciB0aGUgQWRhcHRhdGlvblNldFxuICogQHJldHVybiB7aW5oZXJpdEJhc2VVcmxzQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbmNvbnN0IGluaGVyaXRCYXNlVXJscyA9IChhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgYWRhcHRhdGlvblNldEJhc2VVcmxzLCBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8pID0+IHJlcHJlc2VudGF0aW9uID0+IHtcbiAgY29uc3QgcmVwQmFzZVVybEVsZW1lbnRzID0gZmluZENoaWxkcmVuKHJlcHJlc2VudGF0aW9uLCAnQmFzZVVSTCcpO1xuICBjb25zdCByZXBCYXNlVXJscyA9IGJ1aWxkQmFzZVVybHMoYWRhcHRhdGlvblNldEJhc2VVcmxzLCByZXBCYXNlVXJsRWxlbWVudHMpO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gbWVyZ2UoYWRhcHRhdGlvblNldEF0dHJpYnV0ZXMsIHBhcnNlQXR0cmlidXRlcyhyZXByZXNlbnRhdGlvbikpO1xuICBjb25zdCByZXByZXNlbnRhdGlvblNlZ21lbnRJbmZvID0gZ2V0U2VnbWVudEluZm9ybWF0aW9uKHJlcHJlc2VudGF0aW9uKTtcbiAgcmV0dXJuIHJlcEJhc2VVcmxzLm1hcChiYXNlVXJsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VnbWVudEluZm86IG1lcmdlKGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbywgcmVwcmVzZW50YXRpb25TZWdtZW50SW5mbyksXG4gICAgICBhdHRyaWJ1dGVzOiBtZXJnZShhdHRyaWJ1dGVzLCBiYXNlVXJsKVxuICAgIH07XG4gIH0pO1xufTtcbi8qKlxuICogVHJhbmZvcm1zIGEgc2VyaWVzIG9mIGNvbnRlbnQgcHJvdGVjdGlvbiBub2RlcyB0b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgcHNzaCBkYXRhIGJ5IGtleSBzeXN0ZW1cbiAqXG4gKiBAcGFyYW0ge05vZGVbXX0gY29udGVudFByb3RlY3Rpb25Ob2Rlc1xuICogICAgICAgIENvbnRlbnQgcHJvdGVjdGlvbiBub2Rlc1xuICogQHJldHVybiB7T2JqZWN0fVxuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIHBzc2ggZGF0YSBieSBrZXkgc3lzdGVtXG4gKi9cblxuY29uc3QgZ2VuZXJhdGVLZXlTeXN0ZW1JbmZvcm1hdGlvbiA9IGNvbnRlbnRQcm90ZWN0aW9uTm9kZXMgPT4ge1xuICByZXR1cm4gY29udGVudFByb3RlY3Rpb25Ob2Rlcy5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobm9kZSk7IC8vIEFsdGhvdWdoIGl0IGNvdWxkIGJlIGFyZ3VlZCB0aGF0IGFjY29yZGluZyB0byB0aGUgVVVJRCBSRkMgc3BlYyB0aGUgVVVJRCBzdHJpbmcgKGEtZiBjaGFycykgc2hvdWxkIGJlIGdlbmVyYXRlZFxuICAgIC8vIGFzIGEgbG93ZXJjYXNlIHN0cmluZyBpdCBhbHNvIG1lbnRpb25zIGl0IHNob3VsZCBiZSB0cmVhdGVkIGFzIGNhc2UtaW5zZW5zaXRpdmUgb24gaW5wdXQuIFNpbmNlIHRoZSBrZXkgc3lzdGVtXG4gICAgLy8gVVVJRHMgaW4gdGhlIGtleVN5c3RlbXNNYXAgYXJlIGhhcmRjb2RlZCBhcyBsb3dlcmNhc2UgaW4gdGhlIGNvZGViYXNlIHRoZXJlIGlzbid0IGFueSByZWFzb24gbm90IHRvIGRvXG4gICAgLy8gLnRvTG93ZXJDYXNlKCkgb24gdGhlIGlucHV0IFVVSUQgc3RyaW5nIGZyb20gdGhlIG1hbmlmZXN0IChhdCBsZWFzdCBJIGNvdWxkIG5vdCB0aGluayBvZiBvbmUpLlxuXG4gICAgaWYgKGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkpIHtcbiAgICAgIGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkgPSBhdHRyaWJ1dGVzLnNjaGVtZUlkVXJpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5U3lzdGVtID0ga2V5U3lzdGVtc01hcFthdHRyaWJ1dGVzLnNjaGVtZUlkVXJpXTtcblxuICAgIGlmIChrZXlTeXN0ZW0pIHtcbiAgICAgIGFjY1trZXlTeXN0ZW1dID0ge1xuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgICB9O1xuICAgICAgY29uc3QgcHNzaE5vZGUgPSBmaW5kQ2hpbGRyZW4obm9kZSwgJ2NlbmM6cHNzaCcpWzBdO1xuXG4gICAgICBpZiAocHNzaE5vZGUpIHtcbiAgICAgICAgY29uc3QgcHNzaCA9IGdldENvbnRlbnQocHNzaE5vZGUpO1xuICAgICAgICBhY2Nba2V5U3lzdGVtXS5wc3NoID0gcHNzaCAmJiBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkocHNzaCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTsgLy8gZGVmaW5lZCBpbiBBTlNJX1NDVEUgMjE0LTEgMjAxNlxuXG5cbmNvbnN0IHBhcnNlQ2FwdGlvblNlcnZpY2VNZXRhZGF0YSA9IHNlcnZpY2UgPT4ge1xuICAvLyA2MDggY2FwdGlvbnNcbiAgaWYgKHNlcnZpY2Uuc2NoZW1lSWRVcmkgPT09ICd1cm46c2N0ZTpkYXNoOmNjOmNlYS02MDg6MjAxNScpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0eXBlb2Ygc2VydmljZS52YWx1ZSAhPT0gJ3N0cmluZycgPyBbXSA6IHNlcnZpY2UudmFsdWUuc3BsaXQoJzsnKTtcbiAgICByZXR1cm4gdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICBsZXQgY2hhbm5lbDtcbiAgICAgIGxldCBsYW5ndWFnZTsgLy8gZGVmYXVsdCBsYW5ndWFnZSB0byB2YWx1ZVxuXG4gICAgICBsYW5ndWFnZSA9IHZhbHVlO1xuXG4gICAgICBpZiAoL15DQ1xcZD0vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIFtjaGFubmVsLCBsYW5ndWFnZV0gPSB2YWx1ZS5zcGxpdCgnPScpO1xuICAgICAgfSBlbHNlIGlmICgvXkNDXFxkJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY2hhbm5lbCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGFubmVsLFxuICAgICAgICBsYW5ndWFnZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzZXJ2aWNlLnNjaGVtZUlkVXJpID09PSAndXJuOnNjdGU6ZGFzaDpjYzpjZWEtNzA4OjIwMTUnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gdHlwZW9mIHNlcnZpY2UudmFsdWUgIT09ICdzdHJpbmcnID8gW10gOiBzZXJ2aWNlLnZhbHVlLnNwbGl0KCc7Jyk7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICAgIC8vIHNlcnZpY2Ugb3IgY2hhbm5lbCBudW1iZXIgMS02M1xuICAgICAgICAnY2hhbm5lbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gbGFuZ3VhZ2UgaXMgYSAzQUxQSEEgcGVyIElTTyA2MzkuMi9CXG4gICAgICAgIC8vIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICAgICdsYW5ndWFnZSc6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gQklUIDEvMCBvciA/XG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgMSwgbWVhbmluZyAxNjo5IGFzcGVjdCByYXRpbywgMCBpcyA0OjMsID8gaXMgdW5rbm93blxuICAgICAgICAnYXNwZWN0UmF0aW8nOiAxLFxuICAgICAgICAvLyBCSVQgMS8wXG4gICAgICAgIC8vIGVhc3kgcmVhZGVyIGZsYWcgaW5kaWNhdGVkIHRoZSB0ZXh0IGlzIHRhaWxlZCB0byB0aGUgbmVlZHMgb2YgYmVnaW5uaW5nIHJlYWRlcnNcbiAgICAgICAgLy8gZGVmYXVsdCAwLCBvciBvZmZcbiAgICAgICAgJ2Vhc3lSZWFkZXInOiAwLFxuICAgICAgICAvLyBCSVQgMS8wXG4gICAgICAgIC8vIElmIDNkIG1ldGFkYXRhIGlzIHByZXNlbnQgKENFQS03MDguMSkgdGhlbiAxXG4gICAgICAgIC8vIGRlZmF1bHQgMFxuICAgICAgICAnM0QnOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoLz0vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IFtjaGFubmVsLCBvcHRzID0gJyddID0gdmFsdWUuc3BsaXQoJz0nKTtcbiAgICAgICAgZmxhZ3MuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIGZsYWdzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgICAgIG9wdHMuc3BsaXQoJywnKS5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgY29uc3QgW25hbWUsIHZhbF0gPSBvcHQuc3BsaXQoJzonKTtcblxuICAgICAgICAgIGlmIChuYW1lID09PSAnbGFuZycpIHtcbiAgICAgICAgICAgIGZsYWdzLmxhbmd1YWdlID0gdmFsOyAvLyBlciBmb3IgZWFzeVJlYWRlcnlcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdlcicpIHtcbiAgICAgICAgICAgIGZsYWdzLmVhc3lSZWFkZXIgPSBOdW1iZXIodmFsKTsgLy8gd2FyIGZvciB3aWRlIGFzcGVjdCByYXRpb1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3dhcicpIHtcbiAgICAgICAgICAgIGZsYWdzLmFzcGVjdFJhdGlvID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnM0QnKSB7XG4gICAgICAgICAgICBmbGFnc1snM0QnXSA9IE51bWJlcih2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxhZ3MuY2hhbm5lbCkge1xuICAgICAgICBmbGFncy5jaGFubmVsID0gJ1NFUlZJQ0UnICsgZmxhZ3MuY2hhbm5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsYWdzO1xuICAgIH0pO1xuICB9XG59O1xuLyoqXG4gKiBBIG1hcCBjYWxsYmFjayB0aGF0IHdpbGwgcGFyc2UgYWxsIGV2ZW50IHN0cmVhbSBkYXRhIGZvciBhIGNvbGxlY3Rpb24gb2YgcGVyaW9kc1xuICogREFTSCBJU09fSUVDXzIzMDA5IDUuMTAuMi4yXG4gKiBodHRwczovL2Rhc2hpZi1kb2N1bWVudHMuYXp1cmV3ZWJzaXRlcy5uZXQvRXZlbnRzL21hc3Rlci9ldmVudC5odG1sI21wZC1ldmVudC10aW1pbmdcbiAqXG4gKiBAcGFyYW0ge1BlcmlvZEluZm9ybWF0aW9ufSBwZXJpb2Qgb2JqZWN0IGNvbnRhaW5pbmcgbmVjZXNzYXJ5IHBlcmlvZCBpbmZvcm1hdGlvblxuICogQHJldHVybiBhIGNvbGxlY3Rpb24gb2YgcGFyc2VkIGV2ZW50c3RyZWFtIGV2ZW50IG9iamVjdHNcbiAqL1xuXG5jb25zdCB0b0V2ZW50U3RyZWFtID0gcGVyaW9kID0+IHtcbiAgLy8gZ2V0IGFuZCBmbGF0dGVuIGFsbCBFdmVudFN0cmVhbXMgdGFncyBhbmQgcGFyc2UgYXR0cmlidXRlcyBhbmQgY2hpbGRyZW5cbiAgcmV0dXJuIGZsYXR0ZW4oZmluZENoaWxkcmVuKHBlcmlvZC5ub2RlLCAnRXZlbnRTdHJlYW0nKS5tYXAoZXZlbnRTdHJlYW0gPT4ge1xuICAgIGNvbnN0IGV2ZW50U3RyZWFtQXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhldmVudFN0cmVhbSk7XG4gICAgY29uc3Qgc2NoZW1lSWRVcmkgPSBldmVudFN0cmVhbUF0dHJpYnV0ZXMuc2NoZW1lSWRVcmk7IC8vIGZpbmQgYWxsIEV2ZW50cyBwZXIgRXZlbnRTdHJlYW0gdGFnIGFuZCBtYXAgdG8gcmV0dXJuIG9iamVjdHNcblxuICAgIHJldHVybiBmaW5kQ2hpbGRyZW4oZXZlbnRTdHJlYW0sICdFdmVudCcpLm1hcChldmVudCA9PiB7XG4gICAgICBjb25zdCBldmVudEF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMoZXZlbnQpO1xuICAgICAgY29uc3QgcHJlc2VudGF0aW9uVGltZSA9IGV2ZW50QXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lIHx8IDA7XG4gICAgICBjb25zdCB0aW1lc2NhbGUgPSBldmVudFN0cmVhbUF0dHJpYnV0ZXMudGltZXNjYWxlIHx8IDE7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IGV2ZW50QXR0cmlidXRlcy5kdXJhdGlvbiB8fCAwO1xuICAgICAgY29uc3Qgc3RhcnQgPSBwcmVzZW50YXRpb25UaW1lIC8gdGltZXNjYWxlICsgcGVyaW9kLmF0dHJpYnV0ZXMuc3RhcnQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWVJZFVyaSxcbiAgICAgICAgdmFsdWU6IGV2ZW50U3RyZWFtQXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgaWQ6IGV2ZW50QXR0cmlidXRlcy5pZCxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZDogc3RhcnQgKyBkdXJhdGlvbiAvIHRpbWVzY2FsZSxcbiAgICAgICAgbWVzc2FnZURhdGE6IGdldENvbnRlbnQoZXZlbnQpIHx8IGV2ZW50QXR0cmlidXRlcy5tZXNzYWdlRGF0YSxcbiAgICAgICAgY29udGVudEVuY29kaW5nOiBldmVudFN0cmVhbUF0dHJpYnV0ZXMuY29udGVudEVuY29kaW5nLFxuICAgICAgICBwcmVzZW50YXRpb25UaW1lT2Zmc2V0OiBldmVudFN0cmVhbUF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZU9mZnNldCB8fCAwXG4gICAgICB9O1xuICAgIH0pO1xuICB9KSk7XG59O1xuLyoqXG4gKiBNYXBzIGFuIEFkYXB0YXRpb25TZXQgbm9kZSB0byBhIGxpc3Qgb2YgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0c1xuICpcbiAqIEBuYW1lIHRvUmVwcmVzZW50YXRpb25zQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOb2RlfSBhZGFwdGF0aW9uU2V0XG4gKiAgICAgICAgQWRhcHRhdGlvblNldCBub2RlIGZyb20gdGhlIG1wZFxuICogQHJldHVybiB7UmVwcmVzZW50YXRpb25JbmZvcm1hdGlvbltdfVxuICogICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBSZXByZXNlbnRhaW9uIGluZm9ybWF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgQWRhcHRhdGlvblNldCBub2RlcyB0byBhIGxpc3Qgb2ZcbiAqIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGVyaW9kQXR0cmlidXRlc1xuICogICAgICAgIENvbnRhaW5zIGF0dHJpYnV0ZXMgaW5oZXJpdGVkIGJ5IHRoZSBQZXJpb2RcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBlcmlvZEJhc2VVcmxzXG4gKiAgICAgICAgQ29udGFpbnMgbGlzdCBvZiBvYmplY3RzIHdpdGggcmVzb2x2ZWQgYmFzZSB1cmxzIGFuZCBhdHRyaWJ1dGVzXG4gKiAgICAgICAgaW5oZXJpdGVkIGJ5IHRoZSBQZXJpb2RcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBlcmlvZFNlZ21lbnRJbmZvXG4gKiAgICAgICAgQ29udGFpbnMgU2VnbWVudCBJbmZvcm1hdGlvbiBhdCB0aGUgcGVyaW9kIGxldmVsXG4gKiBAcmV0dXJuIHt0b1JlcHJlc2VudGF0aW9uc0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCB0b1JlcHJlc2VudGF0aW9ucyA9IChwZXJpb2RBdHRyaWJ1dGVzLCBwZXJpb2RCYXNlVXJscywgcGVyaW9kU2VnbWVudEluZm8pID0+IGFkYXB0YXRpb25TZXQgPT4ge1xuICBjb25zdCBhZGFwdGF0aW9uU2V0QXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhhZGFwdGF0aW9uU2V0KTtcbiAgY29uc3QgYWRhcHRhdGlvblNldEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhwZXJpb2RCYXNlVXJscywgZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdCYXNlVVJMJykpO1xuICBjb25zdCByb2xlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdSb2xlJylbMF07XG4gIGNvbnN0IHJvbGVBdHRyaWJ1dGVzID0ge1xuICAgIHJvbGU6IHBhcnNlQXR0cmlidXRlcyhyb2xlKVxuICB9O1xuICBsZXQgYXR0cnMgPSBtZXJnZShwZXJpb2RBdHRyaWJ1dGVzLCBhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgcm9sZUF0dHJpYnV0ZXMpO1xuICBjb25zdCBhY2Nlc3NpYmlsaXR5ID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdBY2Nlc3NpYmlsaXR5JylbMF07XG4gIGNvbnN0IGNhcHRpb25TZXJ2aWNlcyA9IHBhcnNlQ2FwdGlvblNlcnZpY2VNZXRhZGF0YShwYXJzZUF0dHJpYnV0ZXMoYWNjZXNzaWJpbGl0eSkpO1xuXG4gIGlmIChjYXB0aW9uU2VydmljZXMpIHtcbiAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCB7XG4gICAgICBjYXB0aW9uU2VydmljZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdMYWJlbCcpWzBdO1xuXG4gIGlmIChsYWJlbCAmJiBsYWJlbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxhYmVsVmFsID0gbGFiZWwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUudHJpbSgpO1xuICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIHtcbiAgICAgIGxhYmVsOiBsYWJlbFZhbFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGVudFByb3RlY3Rpb24gPSBnZW5lcmF0ZUtleVN5c3RlbUluZm9ybWF0aW9uKGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnQ29udGVudFByb3RlY3Rpb24nKSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGNvbnRlbnRQcm90ZWN0aW9uKS5sZW5ndGgpIHtcbiAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCB7XG4gICAgICBjb250ZW50UHJvdGVjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24oYWRhcHRhdGlvblNldCk7XG4gIGNvbnN0IHJlcHJlc2VudGF0aW9ucyA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnUmVwcmVzZW50YXRpb24nKTtcbiAgY29uc3QgYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvID0gbWVyZ2UocGVyaW9kU2VnbWVudEluZm8sIHNlZ21lbnRJbmZvKTtcbiAgcmV0dXJuIGZsYXR0ZW4ocmVwcmVzZW50YXRpb25zLm1hcChpbmhlcml0QmFzZVVybHMoYXR0cnMsIGFkYXB0YXRpb25TZXRCYXNlVXJscywgYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvKSkpO1xufTtcbi8qKlxuICogQ29udGFpbnMgYWxsIHBlcmlvZCBpbmZvcm1hdGlvbiBmb3IgbWFwcGluZyBub2RlcyBvbnRvIGFkYXB0YXRpb24gc2V0cy5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQZXJpb2RJbmZvcm1hdGlvblxuICogQHByb3BlcnR5IHtOb2RlfSBwZXJpb2Qubm9kZVxuICogICAgICAgICAgIFBlcmlvZCBub2RlIGZyb20gdGhlIG1wZFxuICogQHByb3BlcnR5IHtPYmplY3R9IHBlcmlvZC5hdHRyaWJ1dGVzXG4gKiAgICAgICAgICAgUGFyc2VkIHBlcmlvZCBhdHRyaWJ1dGVzIGZyb20gbm9kZSBwbHVzIGFueSBhZGRlZFxuICovXG5cbi8qKlxuICogTWFwcyBhIFBlcmlvZEluZm9ybWF0aW9uIG9iamVjdCB0byBhIGxpc3Qgb2YgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0cyBmb3IgYWxsXG4gKiBBZGFwdGF0aW9uU2V0IG5vZGVzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFBlcmlvZC5cbiAqXG4gKiBAbmFtZSB0b0FkYXB0YXRpb25TZXRzQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtQZXJpb2RJbmZvcm1hdGlvbn0gcGVyaW9kXG4gKiAgICAgICAgUGVyaW9kIG9iamVjdCBjb250YWluaW5nIG5lY2Vzc2FyeSBwZXJpb2QgaW5mb3JtYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBwZXJpb2RTdGFydFxuICogICAgICAgIFN0YXJ0IHRpbWUgb2YgdGhlIFBlcmlvZCB3aXRoaW4gdGhlIG1wZFxuICogQHJldHVybiB7UmVwcmVzZW50YXRpb25JbmZvcm1hdGlvbltdfVxuICogICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBSZXByZXNlbnRhaW9uIGluZm9ybWF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgUGVyaW9kIG5vZGVzIHRvIGEgbGlzdCBvZlxuICogUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtcGRBdHRyaWJ1dGVzXG4gKiAgICAgICAgQ29udGFpbnMgYXR0cmlidXRlcyBpbmhlcml0ZWQgYnkgdGhlIG1wZFxuICAqIEBwYXJhbSB7T2JqZWN0W119IG1wZEJhc2VVcmxzXG4gKiAgICAgICAgQ29udGFpbnMgbGlzdCBvZiBvYmplY3RzIHdpdGggcmVzb2x2ZWQgYmFzZSB1cmxzIGFuZCBhdHRyaWJ1dGVzXG4gKiAgICAgICAgaW5oZXJpdGVkIGJ5IHRoZSBtcGRcbiAqIEByZXR1cm4ge3RvQWRhcHRhdGlvblNldHNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgdG9BZGFwdGF0aW9uU2V0cyA9IChtcGRBdHRyaWJ1dGVzLCBtcGRCYXNlVXJscykgPT4gKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgY29uc3QgcGVyaW9kQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKG1wZEJhc2VVcmxzLCBmaW5kQ2hpbGRyZW4ocGVyaW9kLm5vZGUsICdCYXNlVVJMJykpO1xuICBjb25zdCBwZXJpb2RBdHRyaWJ1dGVzID0gbWVyZ2UobXBkQXR0cmlidXRlcywge1xuICAgIHBlcmlvZFN0YXJ0OiBwZXJpb2QuYXR0cmlidXRlcy5zdGFydFxuICB9KTtcblxuICBpZiAodHlwZW9mIHBlcmlvZC5hdHRyaWJ1dGVzLmR1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgIHBlcmlvZEF0dHJpYnV0ZXMucGVyaW9kRHVyYXRpb24gPSBwZXJpb2QuYXR0cmlidXRlcy5kdXJhdGlvbjtcbiAgfVxuXG4gIGNvbnN0IGFkYXB0YXRpb25TZXRzID0gZmluZENoaWxkcmVuKHBlcmlvZC5ub2RlLCAnQWRhcHRhdGlvblNldCcpO1xuICBjb25zdCBwZXJpb2RTZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihwZXJpb2Qubm9kZSk7XG4gIHJldHVybiBmbGF0dGVuKGFkYXB0YXRpb25TZXRzLm1hcCh0b1JlcHJlc2VudGF0aW9ucyhwZXJpb2RBdHRyaWJ1dGVzLCBwZXJpb2RCYXNlVXJscywgcGVyaW9kU2VnbWVudEluZm8pKSk7XG59O1xuLyoqXG4gKiBUcmFuZm9ybXMgYW4gYXJyYXkgb2YgY29udGVudCBzdGVlcmluZyBub2RlcyBpbnRvIGFuIG9iamVjdFxuICogY29udGFpbmluZyBDRE4gY29udGVudCBzdGVlcmluZyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBNUEQgbWFuaWZlc3QuXG4gKlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlIERBU0ggc3BlYyBmb3IgQ29udGVudCBTdGVlcmluZyBwYXJzaW5nLCBzZWU6XG4gKiBodHRwczovL2Rhc2hpZi5vcmcvZG9jcy9EQVNILUlGLUNUUy0wMFhYLUNvbnRlbnQtU3RlZXJpbmctQ29tbXVuaXR5LVJldmlldy5wZGZcbiAqXG4gKiBAcGFyYW0ge05vZGVbXX0gY29udGVudFN0ZWVyaW5nTm9kZXNcbiAqICAgICAgICBDb250ZW50IHN0ZWVyaW5nIG5vZGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudEhhbmRsZXJcbiAqICAgICAgICBUaGUgZXZlbnQgaGFuZGxlciBwYXNzZWQgaW50byB0aGUgcGFyc2VyIG9wdGlvbnMgdG8gaGFuZGxlIHdhcm5pbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgY29udGVudCBzdGVlcmluZyBkYXRhXG4gKi9cblxuY29uc3QgZ2VuZXJhdGVDb250ZW50U3RlZXJpbmdJbmZvcm1hdGlvbiA9IChjb250ZW50U3RlZXJpbmdOb2RlcywgZXZlbnRIYW5kbGVyKSA9PiB7XG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIENvbnRlbnRTdGVlcmluZyB0YWdzLCB0aHJvdyBhbiBlcnJvclxuICBpZiAoY29udGVudFN0ZWVyaW5nTm9kZXMubGVuZ3RoID4gMSkge1xuICAgIGV2ZW50SGFuZGxlcih7XG4gICAgICB0eXBlOiAnd2FybicsXG4gICAgICBtZXNzYWdlOiAnVGhlIE1QRCBtYW5pZmVzdCBzaG91bGQgY29udGFpbiBubyBtb3JlIHRoYW4gb25lIENvbnRlbnRTdGVlcmluZyB0YWcnXG4gICAgfSk7XG4gIH0gLy8gUmV0dXJuIGEgbnVsbCB2YWx1ZSBpZiB0aGVyZSBhcmUgbm8gQ29udGVudFN0ZWVyaW5nIHRhZ3NcblxuXG4gIGlmICghY29udGVudFN0ZWVyaW5nTm9kZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpbmZvRnJvbUNvbnRlbnRTdGVlcmluZ1RhZyA9IG1lcmdlKHtcbiAgICBzZXJ2ZXJVUkw6IGdldENvbnRlbnQoY29udGVudFN0ZWVyaW5nTm9kZXNbMF0pXG4gIH0sIHBhcnNlQXR0cmlidXRlcyhjb250ZW50U3RlZXJpbmdOb2Rlc1swXSkpOyAvLyBDb252ZXJ0cyBgcXVlcnlCZWZvcmVTdGFydGAgdG8gYSBib29sZWFuLCBhcyB3ZWxsIGFzIHNldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWVcbiAgLy8gdG8gYGZhbHNlYCBpZiBpdCBkb2Vzbid0IGV4aXN0XG5cbiAgaW5mb0Zyb21Db250ZW50U3RlZXJpbmdUYWcucXVlcnlCZWZvcmVTdGFydCA9IGluZm9Gcm9tQ29udGVudFN0ZWVyaW5nVGFnLnF1ZXJ5QmVmb3JlU3RhcnQgPT09ICd0cnVlJztcbiAgcmV0dXJuIGluZm9Gcm9tQ29udGVudFN0ZWVyaW5nVGFnO1xufTtcbi8qKlxuICogR2V0cyBQZXJpb2RAc3RhcnQgcHJvcGVydHkgZm9yIGEgZ2l2ZW4gcGVyaW9kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmF0dHJpYnV0ZXNcbiAqICAgICAgICBQZXJpb2QgYXR0cmlidXRlc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnByaW9yUGVyaW9kQXR0cmlidXRlc11cbiAqICAgICAgICBQcmlvciBwZXJpb2QgYXR0cmlidXRlcyAoaWYgcHJpb3IgcGVyaW9kIGlzIGF2YWlsYWJsZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1wZFR5cGVcbiAqICAgICAgICBUaGUgTVBEQHR5cGUgdGhlc2UgcGVyaW9kcyBjYW1lIGZyb21cbiAqIEByZXR1cm4ge251bWJlcnxudWxsfVxuICogICAgICAgICBUaGUgcGVyaW9kIHN0YXJ0LCBvciBudWxsIGlmIGl0J3MgYW4gZWFybHkgYXZhaWxhYmxlIHBlcmlvZCBvciBlcnJvclxuICovXG5cbmNvbnN0IGdldFBlcmlvZFN0YXJ0ID0gKHtcbiAgYXR0cmlidXRlcyxcbiAgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLFxuICBtcGRUeXBlXG59KSA9PiB7XG4gIC8vIFN1bW1hcnkgb2YgcGVyaW9kIHN0YXJ0IHRpbWUgY2FsY3VsYXRpb24gZnJvbSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuMi4xXG4gIC8vXG4gIC8vIEEgcGVyaW9kJ3Mgc3RhcnQgaXMgdGhlIGZpcnN0IHBlcmlvZCdzIHN0YXJ0ICsgdGltZSBlbGFwc2VkIGFmdGVyIHBsYXlpbmcgYWxsXG4gIC8vIHByaW9yIHBlcmlvZHMgdG8gdGhpcyBvbmUuIFBlcmlvZHMgY29udGludWUgb25lIGFmdGVyIHRoZSBvdGhlciBpbiB0aW1lICh3aXRob3V0XG4gIC8vIGdhcHMpIHVudGlsIHRoZSBlbmQgb2YgdGhlIHByZXNlbnRhdGlvbi5cbiAgLy9cbiAgLy8gVGhlIHZhbHVlIG9mIFBlcmlvZEBzdGFydCBzaG91bGQgYmU6XG4gIC8vIDEuIGlmIFBlcmlvZEBzdGFydCBpcyBwcmVzZW50OiB2YWx1ZSBvZiBQZXJpb2RAc3RhcnRcbiAgLy8gMi4gaWYgcHJldmlvdXMgcGVyaW9kIGV4aXN0cyBhbmQgaXQgaGFzIEBkdXJhdGlvbjogcHJldmlvdXMgUGVyaW9kQHN0YXJ0ICtcbiAgLy8gICAgcHJldmlvdXMgUGVyaW9kQGR1cmF0aW9uXG4gIC8vIDMuIGlmIHRoaXMgaXMgZmlyc3QgcGVyaW9kIGFuZCBNUERAdHlwZSBpcyAnc3RhdGljJzogMFxuICAvLyA0LiBpbiBhbGwgb3RoZXIgY2FzZXMsIGNvbnNpZGVyIHRoZSBwZXJpb2QgYW4gXCJlYXJseSBhdmFpbGFibGUgcGVyaW9kXCIgKG5vdGU6IG5vdFxuICAvLyAgICBjdXJyZW50bHkgc3VwcG9ydGVkKVxuICAvLyAoMSlcbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLnN0YXJ0ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhdHRyaWJ1dGVzLnN0YXJ0O1xuICB9IC8vICgyKVxuXG5cbiAgaWYgKHByaW9yUGVyaW9kQXR0cmlidXRlcyAmJiB0eXBlb2YgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLnN0YXJ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLmR1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuc3RhcnQgKyBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuZHVyYXRpb247XG4gIH0gLy8gKDMpXG5cblxuICBpZiAoIXByaW9yUGVyaW9kQXR0cmlidXRlcyAmJiBtcGRUeXBlID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiAwO1xuICB9IC8vICg0KVxuICAvLyBUaGVyZSBpcyBjdXJyZW50bHkgbm8gbG9naWMgZm9yIGNhbGN1bGF0aW5nIHRoZSBQZXJpb2RAc3RhcnQgdmFsdWUgaWYgdGhlcmUgaXNcbiAgLy8gbm8gUGVyaW9kQHN0YXJ0IG9yIHByaW9yIFBlcmlvZEBzdGFydCBhbmQgUGVyaW9kQGR1cmF0aW9uIGF2YWlsYWJsZS4gVGhpcyBpcyBub3QgbWFkZVxuICAvLyBleHBsaWNpdCBieSB0aGUgREFTSCBpbnRlcm9wIGd1aWRlbGluZXMgb3IgdGhlIERBU0ggc3BlYywgaG93ZXZlciwgc2luY2UgdGhlcmUnc1xuICAvLyBub3RoaW5nIGFib3V0IGFueSBvdGhlciByZXNvbHV0aW9uIHN0cmF0ZWdpZXMsIGl0J3MgaW1wbGllZC4gVGh1cywgdGhpcyBjYXNlIHNob3VsZFxuICAvLyBiZSBjb25zaWRlcmVkIGFuIGVhcmx5IGF2YWlsYWJsZSBwZXJpb2QsIG9yIGVycm9yLCBhbmQgbnVsbCBzaG91bGQgc3VmZmljZSBmb3IgYm90aFxuICAvLyBvZiB0aG9zZSBjYXNlcy5cblxuXG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogVHJhdmVyc2VzIHRoZSBtcGQgeG1sIHRyZWUgdG8gZ2VuZXJhdGUgYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqIHRoYXQgaGF2ZSBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBub2Rlc1xuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbXBkXG4gKiAgICAgICAgVGhlIHJvb3Qgbm9kZSBvZiB0aGUgbXBkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgIEF2YWlsYWJsZSBvcHRpb25zIGZvciBpbmhlcml0QXR0cmlidXRlc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFuaWZlc3RVcmlcbiAqICAgICAgICBUaGUgdXJpIHNvdXJjZSBvZiB0aGUgbXBkXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5OT1dcbiAqICAgICAgICBDdXJyZW50IHRpbWUgcGVyIERBU0ggSU9QLiAgRGVmYXVsdCBpcyBjdXJyZW50IHRpbWUgaW4gbXMgc2luY2UgZXBvY2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmNsaWVudE9mZnNldFxuICogICAgICAgIENsaWVudCB0aW1lIGRpZmZlcmVuY2UgZnJvbSBOT1cgKGluIG1pbGxpc2Vjb25kcylcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb25cbiAqL1xuXG5jb25zdCBpbmhlcml0QXR0cmlidXRlcyA9IChtcGQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7XG4gICAgbWFuaWZlc3RVcmkgPSAnJyxcbiAgICBOT1cgPSBEYXRlLm5vdygpLFxuICAgIGNsaWVudE9mZnNldCA9IDAsXG4gICAgLy8gVE9ETzogRm9yIG5vdywgd2UgYXJlIGV4cGVjdGluZyBhbiBldmVudEhhbmRsZXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAvLyB0byBiZSBwYXNzZWQgaW50byB0aGUgbXBkIHBhcnNlciBhcyBhbiBvcHRpb24uXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSwgd2Ugc2hvdWxkIGVuYWJsZSBzdHJlYW0gcGFyc2luZyBieSB1c2luZyB0aGUgU3RyZWFtIGNsYXNzIGZyb20gdmhzLXV0aWxzLlxuICAgIC8vIFRoaXMgd2lsbCBzdXBwb3J0IG5ldyBmZWF0dXJlcyBpbmNsdWRpbmcgYSBzdGFuZGFyZGl6ZWQgZXZlbnQgaGFuZGxlci5cbiAgICAvLyBTZWUgdGhlIG0zdTggcGFyc2VyIGZvciBleGFtcGxlcyBvZiBob3cgc3RyZWFtIHBhcnNpbmcgaXMgY3VycmVudGx5IHVzZWQgZm9yIEhMUyBwYXJzaW5nLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2pzL3Zocy11dGlscy9ibG9iLzg4ZDZlMTBjNjMxZTU3YTVhZjAyYzVhNjJiYzczNzZjZDQ1NmI0ZjUvc3JjL3N0cmVhbS5qcyNMOVxuICAgIGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uICgpIHt9XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwZXJpb2ROb2RlcyA9IGZpbmRDaGlsZHJlbihtcGQsICdQZXJpb2QnKTtcblxuICBpZiAoIXBlcmlvZE5vZGVzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU5WQUxJRF9OVU1CRVJfT0ZfUEVSSU9EKTtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGZpbmRDaGlsZHJlbihtcGQsICdMb2NhdGlvbicpO1xuICBjb25zdCBtcGRBdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKG1wZCk7XG4gIGNvbnN0IG1wZEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhbe1xuICAgIGJhc2VVcmw6IG1hbmlmZXN0VXJpXG4gIH1dLCBmaW5kQ2hpbGRyZW4obXBkLCAnQmFzZVVSTCcpKTtcbiAgY29uc3QgY29udGVudFN0ZWVyaW5nTm9kZXMgPSBmaW5kQ2hpbGRyZW4obXBkLCAnQ29udGVudFN0ZWVyaW5nJyk7IC8vIFNlZSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuMS4yLCBTZW1hbnRpY3Mgb2YgTVBEIGVsZW1lbnQuIERlZmF1bHQgdHlwZSB0byAnc3RhdGljJy5cblxuICBtcGRBdHRyaWJ1dGVzLnR5cGUgPSBtcGRBdHRyaWJ1dGVzLnR5cGUgfHwgJ3N0YXRpYyc7XG4gIG1wZEF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24gPSBtcGRBdHRyaWJ1dGVzLm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24gfHwgMDtcbiAgbXBkQXR0cmlidXRlcy5OT1cgPSBOT1c7XG4gIG1wZEF0dHJpYnV0ZXMuY2xpZW50T2Zmc2V0ID0gY2xpZW50T2Zmc2V0O1xuXG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgbXBkQXR0cmlidXRlcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnMubWFwKGdldENvbnRlbnQpO1xuICB9XG5cbiAgY29uc3QgcGVyaW9kcyA9IFtdOyAvLyBTaW5jZSB0b0FkYXB0YXRpb25TZXRzIGFjdHMgb24gaW5kaXZpZHVhbCBwZXJpb2RzIHJpZ2h0IG5vdywgdGhlIHNpbXBsZXN0IGFwcHJvYWNoIHRvXG4gIC8vIGFkZGluZyBwcm9wZXJ0aWVzIHRoYXQgcmVxdWlyZSBsb29raW5nIGF0IHByaW9yIHBlcmlvZHMgaXMgdG8gcGFyc2UgYXR0cmlidXRlcyBhbmQgYWRkXG4gIC8vIG1pc3Npbmcgb25lcyBiZWZvcmUgdG9BZGFwdGF0aW9uU2V0cyBpcyBjYWxsZWQuIElmIG1vcmUgc3VjaCBwcm9wZXJ0aWVzIGFyZSBhZGRlZCwgaXRcbiAgLy8gbWF5IGJlIGJldHRlciB0byByZWZhY3RvciB0b0FkYXB0YXRpb25TZXRzLlxuXG4gIHBlcmlvZE5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhub2RlKTsgLy8gVXNlIHRoZSBsYXN0IG1vZGlmaWVkIHByaW9yIHBlcmlvZCwgYXMgaXQgbWF5IGNvbnRhaW4gYWRkZWQgaW5mb3JtYXRpb24gbmVjZXNzYXJ5XG4gICAgLy8gZm9yIHRoaXMgcGVyaW9kLlxuXG4gICAgY29uc3QgcHJpb3JQZXJpb2QgPSBwZXJpb2RzW2luZGV4IC0gMV07XG4gICAgYXR0cmlidXRlcy5zdGFydCA9IGdldFBlcmlvZFN0YXJ0KHtcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBwcmlvclBlcmlvZEF0dHJpYnV0ZXM6IHByaW9yUGVyaW9kID8gcHJpb3JQZXJpb2QuYXR0cmlidXRlcyA6IG51bGwsXG4gICAgICBtcGRUeXBlOiBtcGRBdHRyaWJ1dGVzLnR5cGVcbiAgICB9KTtcbiAgICBwZXJpb2RzLnB1c2goe1xuICAgICAgbm9kZSxcbiAgICAgIGF0dHJpYnV0ZXNcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb25zOiBtcGRBdHRyaWJ1dGVzLmxvY2F0aW9ucyxcbiAgICBjb250ZW50U3RlZXJpbmdJbmZvOiBnZW5lcmF0ZUNvbnRlbnRTdGVlcmluZ0luZm9ybWF0aW9uKGNvbnRlbnRTdGVlcmluZ05vZGVzLCBldmVudEhhbmRsZXIpLFxuICAgIC8vIFRPRE86IFRoZXJlIGFyZSBvY2N1cmVuY2VzIHdoZXJlIHRoaXMgYHJlcHJlc2VudGF0aW9uSW5mb2AgYXJyYXkgY29udGFpbnMgdW5kZXNpcmVkXG4gICAgLy8gZHVwbGljYXRlcy4gVGhpcyBnZW5lcmFsbHkgb2NjdXJzIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIEJhc2VVUkwgbm9kZXMgdGhhdCBhcmVcbiAgICAvLyBkaXJlY3QgY2hpbGRyZW4gb2YgdGhlIE1QRCBub2RlLiBXaGVuIHdlIGF0dGVtcHQgdG8gcmVzb2x2ZSBVUkxzIGZyb20gYSBjb21iaW5hdGlvbiBvZiB0aGVcbiAgICAvLyBwYXJlbnQgQmFzZVVSTCBhbmQgYSBjaGlsZCBCYXNlVVJMLCBhbmQgdGhlIHZhbHVlIGRvZXMgbm90IHJlc29sdmUsXG4gICAgLy8gd2UgZW5kIHVwIHJldHVybmluZyB0aGUgY2hpbGQgQmFzZVVSTCBtdWx0aXBsZSB0aW1lcy5cbiAgICAvLyBXZSBuZWVkIHRvIGRldGVybWluZSBhIHdheSB0byByZW1vdmUgdGhlc2UgZHVwbGljYXRlcyBpbiBhIHNhZmUgd2F5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvbXBkLXBhcnNlci9wdWxsLzE3I2Rpc2N1c3Npb25fcjE2Mjc1MDUyN1xuICAgIHJlcHJlc2VudGF0aW9uSW5mbzogZmxhdHRlbihwZXJpb2RzLm1hcCh0b0FkYXB0YXRpb25TZXRzKG1wZEF0dHJpYnV0ZXMsIG1wZEJhc2VVcmxzKSkpLFxuICAgIGV2ZW50U3RyZWFtOiBmbGF0dGVuKHBlcmlvZHMubWFwKHRvRXZlbnRTdHJlYW0pKVxuICB9O1xufTtcblxuY29uc3Qgc3RyaW5nVG9NcGRYbWwgPSBtYW5pZmVzdFN0cmluZyA9PiB7XG4gIGlmIChtYW5pZmVzdFN0cmluZyA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLkRBU0hfRU1QVFlfTUFOSUZFU1QpO1xuICB9XG5cbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgeG1sO1xuICBsZXQgbXBkO1xuXG4gIHRyeSB7XG4gICAgeG1sID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhtYW5pZmVzdFN0cmluZywgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICAgIG1wZCA9IHhtbCAmJiB4bWwuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUgPT09ICdNUEQnID8geG1sLmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG4gIH0gY2F0Y2ggKGUpIHsvLyBpZSAxMSB0aHJvd3Mgb24gaW52YWxpZCB4bWxcbiAgfVxuXG4gIGlmICghbXBkIHx8IG1wZCAmJiBtcGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuREFTSF9JTlZBTElEX1hNTCk7XG4gIH1cblxuICByZXR1cm4gbXBkO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIG1hbmlmZXN0IGZvciBhIFVUQ1RpbWluZyBub2RlLCByZXR1cm5pbmcgdGhlIG5vZGVzIGF0dHJpYnV0ZXMgaWYgZm91bmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXBkXG4gKiAgICAgICAgWE1MIHN0cmluZyBvZiB0aGUgTVBEIG1hbmlmZXN0XG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAqICAgICAgICAgQXR0cmlidXRlcyBvZiBVVENUaW1pbmcgbm9kZSBzcGVjaWZpZWQgaW4gdGhlIG1hbmlmZXN0LiBOdWxsIGlmIG5vbmUgZm91bmRcbiAqL1xuXG5jb25zdCBwYXJzZVVUQ1RpbWluZ1NjaGVtZSA9IG1wZCA9PiB7XG4gIGNvbnN0IFVUQ1RpbWluZ05vZGUgPSBmaW5kQ2hpbGRyZW4obXBkLCAnVVRDVGltaW5nJylbMF07XG5cbiAgaWYgKCFVVENUaW1pbmdOb2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBhdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKFVUQ1RpbWluZ05vZGUpO1xuXG4gIHN3aXRjaCAoYXR0cmlidXRlcy5zY2hlbWVJZFVyaSkge1xuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaGVhZDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWhlYWQ6MjAxMic6XG4gICAgICBhdHRyaWJ1dGVzLm1ldGhvZCA9ICdIRUFEJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC14c2RhdGU6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1pc286MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC14c2RhdGU6MjAxMic6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1pc286MjAxMic6XG4gICAgICBhdHRyaWJ1dGVzLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpkaXJlY3Q6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6ZGlyZWN0OjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnRElSRUNUJztcbiAgICAgIGF0dHJpYnV0ZXMudmFsdWUgPSBEYXRlLnBhcnNlKGF0dHJpYnV0ZXMudmFsdWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLW50cDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpudHA6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6c250cDoyMDE0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5VTlNVUFBPUlRFRF9VVENfVElNSU5HX1NDSEVNRSk7XG4gIH1cblxuICByZXR1cm4gYXR0cmlidXRlcztcbn07XG5cbmNvbnN0IFZFUlNJT04gPSB2ZXJzaW9uO1xuLypcbiAqIEdpdmVuIGEgREFTSCBtYW5pZmVzdCBzdHJpbmcgYW5kIG9wdGlvbnMsIHBhcnNlcyB0aGUgREFTSCBtYW5pZmVzdCBpbnRvIGFuIG9iamVjdCBpbiB0aGVcbiAqIGZvcm0gb3V0cHV0ZWQgYnkgbTN1OC1wYXJzZXIgYW5kIGFjY2VwdGVkIGJ5IHZpZGVvanMvaHR0cC1zdHJlYW1pbmcuXG4gKlxuICogRm9yIGxpdmUgREFTSCBtYW5pZmVzdHMsIGlmIGBwcmV2aW91c01hbmlmZXN0YCBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCB0aGVuIHRoZSBuZXdseVxuICogcGFyc2VkIERBU0ggbWFuaWZlc3Qgd2lsbCBoYXZlIGl0cyBtZWRpYSBzZXF1ZW5jZSBhbmQgZGlzY29udGludWl0eSBzZXF1ZW5jZSB2YWx1ZXNcbiAqIHVwZGF0ZWQgdG8gcmVmbGVjdCBpdHMgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHByaW9yIG1hbmlmZXN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYW5pZmVzdFN0cmluZyAtIHRoZSBEQVNIIG1hbmlmZXN0IGFzIGEgc3RyaW5nXG4gKiBAcGFyYW0ge29wdGlvbnN9IFtvcHRpb25zXSAtIGFueSBvcHRpb25zXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbWFuaWZlc3Qgb2JqZWN0XG4gKi9cblxuY29uc3QgcGFyc2UgPSAobWFuaWZlc3RTdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBwYXJzZWRNYW5pZmVzdEluZm8gPSBpbmhlcml0QXR0cmlidXRlcyhzdHJpbmdUb01wZFhtbChtYW5pZmVzdFN0cmluZyksIG9wdGlvbnMpO1xuICBjb25zdCBwbGF5bGlzdHMgPSB0b1BsYXlsaXN0cyhwYXJzZWRNYW5pZmVzdEluZm8ucmVwcmVzZW50YXRpb25JbmZvKTtcbiAgcmV0dXJuIHRvTTN1OCh7XG4gICAgZGFzaFBsYXlsaXN0czogcGxheWxpc3RzLFxuICAgIGxvY2F0aW9uczogcGFyc2VkTWFuaWZlc3RJbmZvLmxvY2F0aW9ucyxcbiAgICBjb250ZW50U3RlZXJpbmc6IHBhcnNlZE1hbmlmZXN0SW5mby5jb250ZW50U3RlZXJpbmdJbmZvLFxuICAgIHNpZHhNYXBwaW5nOiBvcHRpb25zLnNpZHhNYXBwaW5nLFxuICAgIHByZXZpb3VzTWFuaWZlc3Q6IG9wdGlvbnMucHJldmlvdXNNYW5pZmVzdCxcbiAgICBldmVudFN0cmVhbTogcGFyc2VkTWFuaWZlc3RJbmZvLmV2ZW50U3RyZWFtXG4gIH0pO1xufTtcbi8qKlxuICogUGFyc2VzIHRoZSBtYW5pZmVzdCBmb3IgYSBVVENUaW1pbmcgbm9kZSwgcmV0dXJuaW5nIHRoZSBub2RlcyBhdHRyaWJ1dGVzIGlmIGZvdW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hbmlmZXN0U3RyaW5nXG4gKiAgICAgICAgWE1MIHN0cmluZyBvZiB0aGUgTVBEIG1hbmlmZXN0XG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAqICAgICAgICAgQXR0cmlidXRlcyBvZiBVVENUaW1pbmcgbm9kZSBzcGVjaWZpZWQgaW4gdGhlIG1hbmlmZXN0LiBOdWxsIGlmIG5vbmUgZm91bmRcbiAqL1xuXG5cbmNvbnN0IHBhcnNlVVRDVGltaW5nID0gbWFuaWZlc3RTdHJpbmcgPT4gcGFyc2VVVENUaW1pbmdTY2hlbWUoc3RyaW5nVG9NcGRYbWwobWFuaWZlc3RTdHJpbmcpKTtcblxuZXhwb3J0IHsgVkVSU0lPTiwgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCQxIGFzIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QsIGdlbmVyYXRlU2lkeEtleSwgaW5oZXJpdEF0dHJpYnV0ZXMsIHBhcnNlLCBwYXJzZVVUQ1RpbWluZywgc3RyaW5nVG9NcGRYbWwsIHRvTTN1OCwgdG9QbGF5bGlzdHMgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcIm1wZC1wYXJzZXJcIjtcbnZhciBmZXRjaE1hbmlmZXN0ID0gZnVuY3Rpb24gKG1hbmlmZXN0VXJpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYW5pZmVzdFJlc3BvbnNlLCBtYW5pZmVzdDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2gobWFuaWZlc3RVcmkpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtYW5pZmVzdFJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1hbmlmZXN0UmVzcG9uc2UudGV4dCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtYW5pZmVzdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcGFyc2UobWFuaWZlc3QpXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgdmFyIGdldFZpZGVvRnJvbU1hbmlmZXN0ID0gZnVuY3Rpb24gKG1hbmlmZXN0VXJpKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJzZWRNYW5pZmVzdCwgcGxheWxpc3RJbmRleCwgY29kZWNzLCBzZWdtZW50cywgaW5pdGlhbGl6YXRpb25TZWdtZW50LCBkdXJhdGlvbjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hNYW5pZmVzdChtYW5pZmVzdFVyaSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHBhcnNlZE1hbmlmZXN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHBsYXlsaXN0SW5kZXggPSAxO1xuICAgICAgICAgICAgICAgIGNvZGVjcyA9IHBhcnNlZE1hbmlmZXN0LnBsYXlsaXN0c1twbGF5bGlzdEluZGV4XS5hdHRyaWJ1dGVzLkNPREVDUztcbiAgICAgICAgICAgICAgICBzZWdtZW50cyA9IHBhcnNlZE1hbmlmZXN0LnBsYXlsaXN0c1twbGF5bGlzdEluZGV4XS5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHsgcmV0dXJuIFwiXCIuY29uY2F0KHNlZ21lbnQudXJpKTsgfSk7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25TZWdtZW50ID0gXCJcIi5jb25jYXQocGFyc2VkTWFuaWZlc3QucGxheWxpc3RzW3BsYXlsaXN0SW5kZXhdLnNlZ21lbnRzWzBdLm1hcC51cmkpO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VkTWFuaWZlc3QuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgY29kZWNzOiBjb2RlY3MsIHNlZ21lbnRzOiBzZWdtZW50cywgaW5pdGlhbGl6YXRpb25TZWdtZW50OiBpbml0aWFsaXphdGlvblNlZ21lbnQsIGR1cmF0aW9uOiBkdXJhdGlvbiB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgdmFyIGdldEF1ZGlvRnJvbU1hbmlmZXN0ID0gZnVuY3Rpb24gKG1hbmlmZXN0VXJpLCBpc0VjM0F1ZGlvKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJzZWRNYW5pZmVzdCwgcGxheWxpc3RJbmRleCwgY29kZWNzLCBzZWdtZW50cywgaW5pdGlhbGl6YXRpb25TZWdtZW50O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaE1hbmlmZXN0KG1hbmlmZXN0VXJpKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcGFyc2VkTWFuaWZlc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcGxheWxpc3RJbmRleCA9IGlzRWMzQXVkaW8gPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjb2RlY3MgPSBwYXJzZWRNYW5pZmVzdC5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpb1tcImVuLVVTIChtYWluKVwiXS5wbGF5bGlzdHNbcGxheWxpc3RJbmRleF0uYXR0cmlidXRlcy5DT0RFQ1M7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMgPSBwYXJzZWRNYW5pZmVzdC5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpb1tcImVuLVVTIChtYWluKVwiXS5wbGF5bGlzdHNbcGxheWxpc3RJbmRleF0uc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBcIlwiLmNvbmNhdChzZWdtZW50LnVyaSk7IH0pO1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemF0aW9uU2VnbWVudCA9IFwiXCIuY29uY2F0KHBhcnNlZE1hbmlmZXN0Lm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvW1wiZW4tVVMgKG1haW4pXCJdLnBsYXlsaXN0c1twbGF5bGlzdEluZGV4XS5zZWdtZW50c1swXS5tYXAudXJpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBjb2RlY3M6IGNvZGVjcywgc2VnbWVudHM6IHNlZ21lbnRzLCBpbml0aWFsaXphdGlvblNlZ21lbnQ6IGluaXRpYWxpemF0aW9uU2VnbWVudCB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4iLCIvLyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzE4MDhcblxuKGZ1bmN0aW9uIChyb290KSB7XG4gIHZhciBVUkxfUkVHRVggPVxuICAgIC9eKD89KCg/OlthLXpBLVowLTkrXFwtLl0rOik/KSlcXDEoPz0oKD86XFwvXFwvW15cXC8/I10qKT8pKVxcMig/PSgoPzooPzpbXj8jXFwvXSpcXC8pKlteOz8jXFwvXSopPykpXFwzKCg/OjtbXj8jXSopPykoXFw/W14jXSopPygjW15dKik/JC87XG4gIHZhciBGSVJTVF9TRUdNRU5UX1JFR0VYID0gL14oPz0oW15cXC8/I10qKSlcXDEoW15dKikkLztcbiAgdmFyIFNMQVNIX0RPVF9SRUdFWCA9IC8oPzpcXC98XilcXC4oPz1cXC8pL2c7XG4gIHZhciBTTEFTSF9ET1RfRE9UX1JFR0VYID0gLyg/OlxcL3xeKVxcLlxcLlxcLyg/IVxcLlxcLlxcLylbXlxcL10qKD89XFwvKS9nO1xuXG4gIHZhciBVUkxUb29sa2l0ID0ge1xuICAgIC8vIElmIG9wdHMuYWx3YXlzTm9ybWFsaXplIGlzIHRydWUgdGhlbiB0aGUgcGF0aCB3aWxsIGFsd2F5cyBiZSBub3JtYWxpemVkIGV2ZW4gd2hlbiBpdCBzdGFydHMgd2l0aCAvIG9yIC8vXG4gICAgLy8gRS5nXG4gICAgLy8gV2l0aCBvcHRzLmFsd2F5c05vcm1hbGl6ZSA9IGZhbHNlIChkZWZhdWx0LCBzcGVjIGNvbXBsaWFudClcbiAgICAvLyBodHRwOi8vYS5jb20vYi9jZCArIC9lL2YvLi4vZyA9PiBodHRwOi8vYS5jb20vZS9mLy4uL2dcbiAgICAvLyBXaXRoIG9wdHMuYWx3YXlzTm9ybWFsaXplID0gdHJ1ZSAobm90IHNwZWMgY29tcGxpYW50KVxuICAgIC8vIGh0dHA6Ly9hLmNvbS9iL2NkICsgL2UvZi8uLi9nID0+IGh0dHA6Ly9hLmNvbS9lL2dcbiAgICBidWlsZEFic29sdXRlVVJMOiBmdW5jdGlvbiAoYmFzZVVSTCwgcmVsYXRpdmVVUkwsIG9wdHMpIHtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgLy8gcmVtb3ZlIGFueSByZW1haW5pbmcgc3BhY2UgYW5kIENSTEZcbiAgICAgIGJhc2VVUkwgPSBiYXNlVVJMLnRyaW0oKTtcbiAgICAgIHJlbGF0aXZlVVJMID0gcmVsYXRpdmVVUkwudHJpbSgpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVVSTCkge1xuICAgICAgICAvLyAyYSkgSWYgdGhlIGVtYmVkZGVkIFVSTCBpcyBlbnRpcmVseSBlbXB0eSwgaXQgaW5oZXJpdHMgdGhlXG4gICAgICAgIC8vIGVudGlyZSBiYXNlIFVSTCAoaS5lLiwgaXMgc2V0IGVxdWFsIHRvIHRoZSBiYXNlIFVSTClcbiAgICAgICAgLy8gYW5kIHdlIGFyZSBkb25lLlxuICAgICAgICBpZiAoIW9wdHMuYWx3YXlzTm9ybWFsaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGJhc2VVUkw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZSA9IFVSTFRvb2xraXQucGFyc2VVUkwoYmFzZVVSTCk7XG4gICAgICAgIGlmICghYmFzZVBhcnRzRm9yTm9ybWFsaXNlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgYmFzZSBVUkwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZVBhcnRzRm9yTm9ybWFsaXNlLnBhdGggPSBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgoXG4gICAgICAgICAgYmFzZVBhcnRzRm9yTm9ybWFsaXNlLnBhdGhcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRVUkxGcm9tUGFydHMoYmFzZVBhcnRzRm9yTm9ybWFsaXNlKTtcbiAgICAgIH1cbiAgICAgIHZhciByZWxhdGl2ZVBhcnRzID0gVVJMVG9vbGtpdC5wYXJzZVVSTChyZWxhdGl2ZVVSTCk7XG4gICAgICBpZiAoIXJlbGF0aXZlUGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgcmVsYXRpdmUgVVJMLicpO1xuICAgICAgfVxuICAgICAgaWYgKHJlbGF0aXZlUGFydHMuc2NoZW1lKSB7XG4gICAgICAgIC8vIDJiKSBJZiB0aGUgZW1iZWRkZWQgVVJMIHN0YXJ0cyB3aXRoIGEgc2NoZW1lIG5hbWUsIGl0IGlzXG4gICAgICAgIC8vIGludGVycHJldGVkIGFzIGFuIGFic29sdXRlIFVSTCBhbmQgd2UgYXJlIGRvbmUuXG4gICAgICAgIGlmICghb3B0cy5hbHdheXNOb3JtYWxpemUpIHtcbiAgICAgICAgICByZXR1cm4gcmVsYXRpdmVVUkw7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpdmVQYXJ0cy5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKHJlbGF0aXZlUGFydHMucGF0aCk7XG4gICAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKHJlbGF0aXZlUGFydHMpO1xuICAgICAgfVxuICAgICAgdmFyIGJhc2VQYXJ0cyA9IFVSTFRvb2xraXQucGFyc2VVUkwoYmFzZVVSTCk7XG4gICAgICBpZiAoIWJhc2VQYXJ0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHRyeWluZyB0byBwYXJzZSBiYXNlIFVSTC4nKTtcbiAgICAgIH1cbiAgICAgIGlmICghYmFzZVBhcnRzLm5ldExvYyAmJiBiYXNlUGFydHMucGF0aCAmJiBiYXNlUGFydHMucGF0aFswXSAhPT0gJy8nKSB7XG4gICAgICAgIC8vIElmIG5ldExvYyBtaXNzaW5nIGFuZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCAnLycsIGFzc3VtZSBldmVydGhpbmcgYmVmb3JlIHRoZSBmaXJzdCAnLycgaXMgdGhlIG5ldExvY1xuICAgICAgICAvLyBUaGlzIGNhdXNlcyAnZXhhbXBsZS5jb20vYScgdG8gYmUgaGFuZGxlZCBhcyAnLy9leGFtcGxlLmNvbS9hJyBpbnN0ZWFkIG9mICcvZXhhbXBsZS5jb20vYSdcbiAgICAgICAgdmFyIHBhdGhQYXJ0cyA9IEZJUlNUX1NFR01FTlRfUkVHRVguZXhlYyhiYXNlUGFydHMucGF0aCk7XG4gICAgICAgIGJhc2VQYXJ0cy5uZXRMb2MgPSBwYXRoUGFydHNbMV07XG4gICAgICAgIGJhc2VQYXJ0cy5wYXRoID0gcGF0aFBhcnRzWzJdO1xuICAgICAgfVxuICAgICAgaWYgKGJhc2VQYXJ0cy5uZXRMb2MgJiYgIWJhc2VQYXJ0cy5wYXRoKSB7XG4gICAgICAgIGJhc2VQYXJ0cy5wYXRoID0gJy8nO1xuICAgICAgfVxuICAgICAgdmFyIGJ1aWx0UGFydHMgPSB7XG4gICAgICAgIC8vIDJjKSBPdGhlcndpc2UsIHRoZSBlbWJlZGRlZCBVUkwgaW5oZXJpdHMgdGhlIHNjaGVtZSBvZlxuICAgICAgICAvLyB0aGUgYmFzZSBVUkwuXG4gICAgICAgIHNjaGVtZTogYmFzZVBhcnRzLnNjaGVtZSxcbiAgICAgICAgbmV0TG9jOiByZWxhdGl2ZVBhcnRzLm5ldExvYyxcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgcGFyYW1zOiByZWxhdGl2ZVBhcnRzLnBhcmFtcyxcbiAgICAgICAgcXVlcnk6IHJlbGF0aXZlUGFydHMucXVlcnksXG4gICAgICAgIGZyYWdtZW50OiByZWxhdGl2ZVBhcnRzLmZyYWdtZW50LFxuICAgICAgfTtcbiAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5uZXRMb2MpIHtcbiAgICAgICAgLy8gMykgSWYgdGhlIGVtYmVkZGVkIFVSTCdzIDxuZXRfbG9jPiBpcyBub24tZW1wdHksIHdlIHNraXAgdG9cbiAgICAgICAgLy8gU3RlcCA3LiAgT3RoZXJ3aXNlLCB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSA8bmV0X2xvYz5cbiAgICAgICAgLy8gKGlmIGFueSkgb2YgdGhlIGJhc2UgVVJMLlxuICAgICAgICBidWlsdFBhcnRzLm5ldExvYyA9IGJhc2VQYXJ0cy5uZXRMb2M7XG4gICAgICAgIC8vIDQpIElmIHRoZSBlbWJlZGRlZCBVUkwgcGF0aCBpcyBwcmVjZWRlZCBieSBhIHNsYXNoIFwiL1wiLCB0aGVcbiAgICAgICAgLy8gcGF0aCBpcyBub3QgcmVsYXRpdmUgYW5kIHdlIHNraXAgdG8gU3RlcCA3LlxuICAgICAgICBpZiAocmVsYXRpdmVQYXJ0cy5wYXRoWzBdICE9PSAnLycpIHtcbiAgICAgICAgICBpZiAoIXJlbGF0aXZlUGFydHMucGF0aCkge1xuICAgICAgICAgICAgLy8gNSkgSWYgdGhlIGVtYmVkZGVkIFVSTCBwYXRoIGlzIGVtcHR5IChhbmQgbm90IHByZWNlZGVkIGJ5IGFcbiAgICAgICAgICAgIC8vIHNsYXNoKSwgdGhlbiB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSBiYXNlIFVSTCBwYXRoXG4gICAgICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBiYXNlUGFydHMucGF0aDtcbiAgICAgICAgICAgIC8vIDVhKSBpZiB0aGUgZW1iZWRkZWQgVVJMJ3MgPHBhcmFtcz4gaXMgbm9uLWVtcHR5LCB3ZSBza2lwIHRvXG4gICAgICAgICAgICAvLyBzdGVwIDc7IG90aGVyd2lzZSwgaXQgaW5oZXJpdHMgdGhlIDxwYXJhbXM+IG9mIHRoZSBiYXNlXG4gICAgICAgICAgICAvLyBVUkwgKGlmIGFueSkgYW5kXG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlUGFydHMucGFyYW1zKSB7XG4gICAgICAgICAgICAgIGJ1aWx0UGFydHMucGFyYW1zID0gYmFzZVBhcnRzLnBhcmFtcztcbiAgICAgICAgICAgICAgLy8gNWIpIGlmIHRoZSBlbWJlZGRlZCBVUkwncyA8cXVlcnk+IGlzIG5vbi1lbXB0eSwgd2Ugc2tpcCB0b1xuICAgICAgICAgICAgICAvLyBzdGVwIDc7IG90aGVyd2lzZSwgaXQgaW5oZXJpdHMgdGhlIDxxdWVyeT4gb2YgdGhlIGJhc2VcbiAgICAgICAgICAgICAgLy8gVVJMIChpZiBhbnkpIGFuZCB3ZSBza2lwIHRvIHN0ZXAgNy5cbiAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgYnVpbHRQYXJ0cy5xdWVyeSA9IGJhc2VQYXJ0cy5xdWVyeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA2KSBUaGUgbGFzdCBzZWdtZW50IG9mIHRoZSBiYXNlIFVSTCdzIHBhdGggKGFueXRoaW5nXG4gICAgICAgICAgICAvLyBmb2xsb3dpbmcgdGhlIHJpZ2h0bW9zdCBzbGFzaCBcIi9cIiwgb3IgdGhlIGVudGlyZSBwYXRoIGlmIG5vXG4gICAgICAgICAgICAvLyBzbGFzaCBpcyBwcmVzZW50KSBpcyByZW1vdmVkIGFuZCB0aGUgZW1iZWRkZWQgVVJMJ3MgcGF0aCBpc1xuICAgICAgICAgICAgLy8gYXBwZW5kZWQgaW4gaXRzIHBsYWNlLlxuICAgICAgICAgICAgdmFyIGJhc2VVUkxQYXRoID0gYmFzZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9XG4gICAgICAgICAgICAgIGJhc2VVUkxQYXRoLnN1YnN0cmluZygwLCBiYXNlVVJMUGF0aC5sYXN0SW5kZXhPZignLycpICsgMSkgK1xuICAgICAgICAgICAgICByZWxhdGl2ZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgobmV3UGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnVpbHRQYXJ0cy5wYXRoID09PSBudWxsKSB7XG4gICAgICAgIGJ1aWx0UGFydHMucGF0aCA9IG9wdHMuYWx3YXlzTm9ybWFsaXplXG4gICAgICAgICAgPyBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgocmVsYXRpdmVQYXJ0cy5wYXRoKVxuICAgICAgICAgIDogcmVsYXRpdmVQYXJ0cy5wYXRoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRVUkxGcm9tUGFydHMoYnVpbHRQYXJ0cyk7XG4gICAgfSxcbiAgICBwYXJzZVVSTDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgdmFyIHBhcnRzID0gVVJMX1JFR0VYLmV4ZWModXJsKTtcbiAgICAgIGlmICghcGFydHMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWU6IHBhcnRzWzFdIHx8ICcnLFxuICAgICAgICBuZXRMb2M6IHBhcnRzWzJdIHx8ICcnLFxuICAgICAgICBwYXRoOiBwYXJ0c1szXSB8fCAnJyxcbiAgICAgICAgcGFyYW1zOiBwYXJ0c1s0XSB8fCAnJyxcbiAgICAgICAgcXVlcnk6IHBhcnRzWzVdIHx8ICcnLFxuICAgICAgICBmcmFnbWVudDogcGFydHNbNl0gfHwgJycsXG4gICAgICB9O1xuICAgIH0sXG4gICAgbm9ybWFsaXplUGF0aDogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgb3BlcmF0aW9ucyBhcmVcbiAgICAgIC8vIHRoZW4gYXBwbGllZCwgaW4gb3JkZXIsIHRvIHRoZSBuZXcgcGF0aDpcbiAgICAgIC8vIDZhKSBBbGwgb2NjdXJyZW5jZXMgb2YgXCIuL1wiLCB3aGVyZSBcIi5cIiBpcyBhIGNvbXBsZXRlIHBhdGhcbiAgICAgIC8vIHNlZ21lbnQsIGFyZSByZW1vdmVkLlxuICAgICAgLy8gNmIpIElmIHRoZSBwYXRoIGVuZHMgd2l0aCBcIi5cIiBhcyBhIGNvbXBsZXRlIHBhdGggc2VnbWVudCxcbiAgICAgIC8vIHRoYXQgXCIuXCIgaXMgcmVtb3ZlZC5cbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykucmVwbGFjZShTTEFTSF9ET1RfUkVHRVgsICcnKTtcbiAgICAgIC8vIDZjKSBBbGwgb2NjdXJyZW5jZXMgb2YgXCI8c2VnbWVudD4vLi4vXCIsIHdoZXJlIDxzZWdtZW50PiBpcyBhXG4gICAgICAvLyBjb21wbGV0ZSBwYXRoIHNlZ21lbnQgbm90IGVxdWFsIHRvIFwiLi5cIiwgYXJlIHJlbW92ZWQuXG4gICAgICAvLyBSZW1vdmFsIG9mIHRoZXNlIHBhdGggc2VnbWVudHMgaXMgcGVyZm9ybWVkIGl0ZXJhdGl2ZWx5LFxuICAgICAgLy8gcmVtb3ZpbmcgdGhlIGxlZnRtb3N0IG1hdGNoaW5nIHBhdHRlcm4gb24gZWFjaCBpdGVyYXRpb24sXG4gICAgICAvLyB1bnRpbCBubyBtYXRjaGluZyBwYXR0ZXJuIHJlbWFpbnMuXG4gICAgICAvLyA2ZCkgSWYgdGhlIHBhdGggZW5kcyB3aXRoIFwiPHNlZ21lbnQ+Ly4uXCIsIHdoZXJlIDxzZWdtZW50PiBpcyBhXG4gICAgICAvLyBjb21wbGV0ZSBwYXRoIHNlZ21lbnQgbm90IGVxdWFsIHRvIFwiLi5cIiwgdGhhdFxuICAgICAgLy8gXCI8c2VnbWVudD4vLi5cIiBpcyByZW1vdmVkLlxuICAgICAgd2hpbGUgKFxuICAgICAgICBwYXRoLmxlbmd0aCAhPT0gKHBhdGggPSBwYXRoLnJlcGxhY2UoU0xBU0hfRE9UX0RPVF9SRUdFWCwgJycpKS5sZW5ndGhcbiAgICAgICkge31cbiAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgfSxcbiAgICBidWlsZFVSTEZyb21QYXJ0czogZnVuY3Rpb24gKHBhcnRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwYXJ0cy5zY2hlbWUgK1xuICAgICAgICBwYXJ0cy5uZXRMb2MgK1xuICAgICAgICBwYXJ0cy5wYXRoICtcbiAgICAgICAgcGFydHMucGFyYW1zICtcbiAgICAgICAgcGFydHMucXVlcnkgK1xuICAgICAgICBwYXJ0cy5mcmFnbWVudFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBVUkxUb29sa2l0O1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gVVJMVG9vbGtpdDtcbiAgICB9KTtcbiAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSBleHBvcnRzWydVUkxUb29sa2l0J10gPSBVUkxUb29sa2l0O1xuICBlbHNlIHJvb3RbJ1VSTFRvb2xraXQnXSA9IFVSTFRvb2xraXQ7XG59KSh0aGlzKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGdldEF1ZGlvRnJvbU1hbmlmZXN0LCBnZXRWaWRlb0Zyb21NYW5pZmVzdCB9IGZyb20gXCIuL3NyYy9tcGQtcGFyc2VyXCI7XG52YXIgc3RhcnRQbGF5YmFjayA9IGZ1bmN0aW9uIChpc0VjM0F1ZGlvKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGdldE1wNERhdGEobXA0VXJpKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtcDRSZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2gobXA0VXJpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNFJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1wNFJlc3BvbnNlLmFycmF5QnVmZmVyKCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kU291cmNlQnVmZmVyKG1pbWVDb2RlYywgc2VnbWVudHMsIGluaXRpYWxpemF0aW9uU2VnbWVudCwgb25FbmQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4LCBzb3VyY2VCdWZmZXIsIGZpcnN0U2VnbWVudDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihtaW1lQ29kZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTZWdtZW50VXJpLCBuZXh0U2VnbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXNvdXJjZUJ1ZmZlci51cGRhdGluZyAmJiBpbmRleCAhPT0gc2VnbWVudHMubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTZWdtZW50VXJpID0gc2VnbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRNcDREYXRhKG5leHRTZWdtZW50VXJpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2VnbWVudCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihuZXh0U2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYVNvdXJjZS5yZWFkeVN0YXRlID09PSBcIm9wZW5cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNvdXJjZUJ1ZmZlci51cGRhdGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRNcDREYXRhKGluaXRpYWxpemF0aW9uU2VnbWVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNlZ21lbnQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyKGZpcnN0U2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblNvdXJjZU9wZW4oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNBdWRpb0J1ZmZlclJlYWNoZWRUaGVFbmQsIGhhc1ZpZGVvQnVmZmVyUmVhY2hlZFRoZUVuZCwgb25WaWRlb0VuZGVkLCBvbkF1ZGlvRW5kZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh2aWRlby5zcmMpOyAvLyBSZXZva2UgT2JqZWN0IFVSTCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgbWVkaWFTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNvdXJjZW9wZW5cIiwgb25Tb3VyY2VPcGVuLmJpbmQobWVkaWFTb3VyY2UpKTtcbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGhhc0F1ZGlvQnVmZmVyUmVhY2hlZFRoZUVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGhhc1ZpZGVvQnVmZmVyUmVhY2hlZFRoZUVuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG9uVmlkZW9FbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVmlkZW9CdWZmZXJSZWFjaGVkVGhlRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0F1ZGlvQnVmZmVyUmVhY2hlZFRoZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFTb3VyY2UuZW5kT2ZTdHJlYW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb25BdWRpb0VuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNBdWRpb0J1ZmZlclJlYWNoZWRUaGVFbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzVmlkZW9CdWZmZXJSZWFjaGVkVGhlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZS5lbmRPZlN0cmVhbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhcHBlbmRTb3VyY2VCdWZmZXIodmlkZW9NaW1lQ29kZWMsIHZpZGVvU2VnbWVudHMsIHZpZGVvSW5pdGlhbGl6YXRpb25TZWdtZW50LCBvblZpZGVvRW5kZWQpO1xuICAgICAgICAgICAgICAgIGFwcGVuZFNvdXJjZUJ1ZmZlcihhdWRpb01pbWVDb2RlYywgYXVkaW9TZWdtZW50cywgYXVkaW9Jbml0aWFsaXphdGlvblNlZ21lbnQsIG9uQXVkaW9FbmRlZCk7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHZpZGVvLCBfYSwgYXVkaW9Db2RlY3MsIGF1ZGlvU2VnbWVudHMsIGF1ZGlvSW5pdGlhbGl6YXRpb25TZWdtZW50LCBfYiwgdmlkZW9Db2RlY3MsIHZpZGVvU2VnbWVudHMsIHZpZGVvSW5pdGlhbGl6YXRpb25TZWdtZW50LCBkdXJhdGlvbiwgdmlkZW9NaW1lQ29kZWMsIGF1ZGlvTWltZUNvZGVjLCBtZWRpYVNvdXJjZSwgdXJsO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gXCI2NDBweFwiO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0QXVkaW9Gcm9tTWFuaWZlc3QoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFwiaHR0cHM6Ly9nMDAxLXNmLWV1LWNtYWYtcHJkLWFrLnBjZG4wMS5jc3NvdHQuY29tL1NTVC9nMi9HTU9fMDAwMDAwMDAyMTAyMzNfOTIvU1NUXzE2NzY0ODQ3Mjk0OTUtc1B1VXBfMDEvbXBlZ19jZW5jXzJzZWMvbWFzdGVyX21hbmlmZXN0X2RlZmF1bHRfcjE4Lm1wZD9hdWRpbz1hbGwmc3VidGl0bGU9YWxsJmZvcmNlZE5hcnJhdGl2ZT10cnVlJnRyaWNrcGxheT10cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9saXZlLWRldi1jZG43LXR2ZS5jZG4udmlhcGxheS50di92cC9rYW5hbDYva2FuYWw2LmlzbWwvaW5kZXgubXBkXCIsIGlzRWMzQXVkaW8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYSA9IF9jLnNlbnQoKSwgYXVkaW9Db2RlY3MgPSBfYS5jb2RlY3MsIGF1ZGlvU2VnbWVudHMgPSBfYS5zZWdtZW50cywgYXVkaW9Jbml0aWFsaXphdGlvblNlZ21lbnQgPSBfYS5pbml0aWFsaXphdGlvblNlZ21lbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0VmlkZW9Gcm9tTWFuaWZlc3QoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgXCJodHRwczovL2cwMDEtc2YtZXUtY21hZi1wcmQtYWsucGNkbjAxLmNzc290dC5jb20vU1NUL2cyL0dNT18wMDAwMDAwMDIxMDIzM185Mi9TU1RfMTY3NjQ4NDcyOTQ5NS1zUHVVcF8wMS9tcGVnX2NlbmNfMnNlYy9tYXN0ZXJfbWFuaWZlc3RfZGVmYXVsdF9yMTgubXBkP2F1ZGlvPWFsbCZzdWJ0aXRsZT1hbGwmZm9yY2VkTmFycmF0aXZlPXRydWUmdHJpY2twbGF5PXRydWVcIiAgXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9saXZlLWRldi1jZG43LXR2ZS5jZG4udmlhcGxheS50di92cC9rYW5hbDYva2FuYWw2LmlzbWwvaW5kZXgubXBkXCIpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYiA9IF9jLnNlbnQoKSwgdmlkZW9Db2RlY3MgPSBfYi5jb2RlY3MsIHZpZGVvU2VnbWVudHMgPSBfYi5zZWdtZW50cywgdmlkZW9Jbml0aWFsaXphdGlvblNlZ21lbnQgPSBfYi5pbml0aWFsaXphdGlvblNlZ21lbnQsIGR1cmF0aW9uID0gX2IuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgdmlkZW9NaW1lQ29kZWMgPSBcInZpZGVvL21wNDsgY29kZWNzPVxcXCJcIi5jb25jYXQodmlkZW9Db2RlY3MsIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICBhdWRpb01pbWVDb2RlYyA9IFwiYXVkaW8vbXA0OyBjb2RlY3M9XFxcIlwiLmNvbmNhdChhdWRpb0NvZGVjcywgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICghTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKHZpZGVvTWltZUNvZGVjKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWVkaWEgZm9ybWF0OiBcIiwgdmlkZW9NaW1lQ29kZWMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKGF1ZGlvTWltZUNvZGVjKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWVkaWEgZm9ybWF0OiBcIiwgYXVkaW9NaW1lQ29kZWMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lZGlhU291cmNlID0gbmV3IE1lZGlhU291cmNlKCk7XG4gICAgICAgICAgICAgICAgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobWVkaWFTb3VyY2UpO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCBvblNvdXJjZU9wZW4uYmluZChtZWRpYVNvdXJjZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgaXNFYzNBdWRpbyA9IGZhbHNlO1xuc3RhcnRQbGF5YmFjayhpc0VjM0F1ZGlvKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==