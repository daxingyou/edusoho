!function(u){function t(t){for(var e,n,r=t[0],o=t[1],i=t[2],a=0,c=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&c.push(s[n][0]),s[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(u[e]=o[e]);for(d&&d(t);c.length;)c.shift()();return f.push.apply(f,i||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(f.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},s={138:0},f=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=u,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var d=r;f.push([614,0]),l()}({15:function(t,e){t.exports=jQuery},427:function(t,e,n){var r,o,i;o=[t,n(615),n(617),n(618)],void 0===(i="function"==typeof(r=function(t,e,n,r){"use strict";var o=c(e),i=c(n),a=c(r);function c(t){return t&&t.__esModule?t:{default:t}}var u=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function l(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}var s=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}return function(t,e,n){if(e)r(t.prototype,e);if(n)r(t,n);return t}}();function f(t,e){if(!t){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e&&(typeof e==="object"||typeof e==="function")?e:t}function d(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof e)}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});if(e)Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e}var h=function(t){d(r,t);function r(t,e){l(this,r);var n=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));n.resolveOptions(e);n.listenClick(t);return n}s(r,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=typeof e.action==="function"?e.action:this.defaultAction;this.target=typeof e.target==="function"?e.target:this.defaultTarget;this.text=typeof e.text==="function"?e.text:this.defaultText;this.container=u(e.container)==="object"?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,a.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;if(this.clipboardAction){this.clipboardAction=null}this.clipboardAction=new o.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return p("action",e)}},{key:"defaultTarget",value:function t(e){var n=p("target",e);if(n){return document.querySelector(n)}}},{key:"defaultText",value:function t(e){return p("text",e)}},{key:"destroy",value:function t(){this.listener.destroy();if(this.clipboardAction){this.clipboardAction.destroy();this.clipboardAction=null}}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:["copy","cut"];var n=typeof e==="string"?[e]:e;var r=!!document.queryCommandSupported;n.forEach(function(t){r=r&&!!document.queryCommandSupported(t)});return r}}]);return r}(i.default);function p(t,e){var n="data-clipboard-"+t;if(!e.hasAttribute(n)){return}return e.getAttribute(n)}t.exports=h})?r.apply(e,o):r)||(t.exports=i)},614:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(427);new(n.n(o).a)(".js-copy-link").on("success",function(t){Object(r.a)("success",Translator.trans("coin.invite_url_copy_success_hint"))})},615:function(t,e,n){var r,o,i;o=[t,n(616)],void 0===(i="function"==typeof(r=function(t,e){"use strict";var o=n(e);function n(t){return t&&t.__esModule?t:{default:t}}var r=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}var a=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}return function(t,e,n){if(e)r(t.prototype,e);if(n)r(t,n);return t}}(),c=function(){function e(t){i(this,e);this.resolveOptions(t);this.initSelection()}a(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=e.action;this.container=e.container;this.emitter=e.emitter;this.target=e.target;this.text=e.text;this.trigger=e.trigger;this.selectedText=""}},{key:"initSelection",value:function t(){if(this.text){this.selectFake()}else if(this.target){this.selectTarget()}}},{key:"selectFake",value:function t(){var e=this;var n=document.documentElement.getAttribute("dir")=="rtl";this.removeFake();this.fakeHandlerCallback=function(){return e.removeFake()};this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||true;this.fakeElem=document.createElement("textarea");this.fakeElem.style.fontSize="12pt";this.fakeElem.style.border="0";this.fakeElem.style.padding="0";this.fakeElem.style.margin="0";this.fakeElem.style.position="absolute";this.fakeElem.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px";this.fakeElem.setAttribute("readonly","");this.fakeElem.value=this.text;this.container.appendChild(this.fakeElem);this.selectedText=(0,o.default)(this.fakeElem);this.copyText()}},{key:"removeFake",value:function t(){if(this.fakeHandler){this.container.removeEventListener("click",this.fakeHandlerCallback);this.fakeHandler=null;this.fakeHandlerCallback=null}if(this.fakeElem){this.container.removeChild(this.fakeElem);this.fakeElem=null}}},{key:"selectTarget",value:function t(){this.selectedText=(0,o.default)(this.target);this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=false}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){if(this.trigger){this.trigger.focus()}window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"copy";this._action=e;if(this._action!=="copy"&&this._action!=="cut"){throw new Error('Invalid "action" value, use either "copy" or "cut"')}},get:function t(){return this._action}},{key:"target",set:function t(e){if(e!==undefined){if(e&&(typeof e==="undefined"?"undefined":r(e))==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled")){throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')}if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled"))){throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}this._target=e}else{throw new Error('Invalid "target" value, use a valid Element')}}},get:function t(){return this._target}}]);return e}();t.exports=c})?r.apply(e,o):r)||(t.exports=i)},616:function(t,e){t.exports=function(t){var e,n,r,o="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(r=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(r),n.toString());return o}},617:function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},618:function(t,e,n){var d=n(619),h=n(620);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return r=t,o=e,i=n,h(document.body,r,o,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,u,l,s,f}},619:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},620:function(t,e,n){var a=n(621);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},621:function(t,e){var n;"undefined"==typeof Element||Element.prototype.matches||((n=Element.prototype).matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}});