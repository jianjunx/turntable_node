!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function e(t){return null==t?String(t):Y[G.call(t)]||"object"}function n(t){return"function"==e(t)}function r(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){return"object"==e(t)}function a(t){return o(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var e=!!t&&"length"in t&&t.length,n=S.type(t);return"function"!=n&&!r(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function u(t){return M.call(t,function(t){return null!=t})}function c(t){return t.length>0?S.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in R?R[t]:R[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||$[l(t)]?e:e+"px"}function h(t){var e,n;return A[t]||(e=L.createElement(t),L.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function d(t){return"children"in t?F.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function v(t,e,n){for(E in e)n&&(a(e[E])||tt(e[E]))?(a(e[E])&&!a(t[E])&&(t[E]={}),tt(e[E])&&!tt(t[E])&&(t[E]=[]),v(t[E],e[E],n)):e[E]!==j&&(t[E]=e[E])}function y(t,e){return null==e?S(t):S(t).filter(e)}function g(t,e,r,i){return n(e)?e.call(t,r,i):e}function x(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",r=n&&n.baseVal!==j;return e===j?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function T(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var j,E,S,C,N,P,O=[],D=O.concat,M=O.filter,F=O.slice,L=t.document,A={},R={},$={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,Z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,H=/^(?:body|html)$/i,z=/([A-Z])/g,U=["val","css","html","text","data","width","height","offset"],X=["after","prepend","before","append"],I=L.createElement("table"),_=L.createElement("tr"),B={tr:L.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:_,th:_,"*":L.createElement("div")},J=/complete|loaded|interactive/,V=/^[\w-]*$/,Y={},G=Y.toString,W={},K=L.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},tt=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=K).appendChild(t),r=~W.qsa(i,e).indexOf(t),o&&K.removeChild(t),r},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return M.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,o;return Z.test(t)&&(r=S(L.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===j&&(e=k.test(t)&&RegExp.$1),e in B||(e="*"),o=B[e],o.innerHTML=""+t,r=S.each(F.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(i=S(r),S.each(n,function(t,e){U.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return new m(t,e)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,e){var r;if(!t)return W.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&k.test(t))r=W.fragment(t,RegExp.$1,e),t=null;else{if(e!==j)return S(e).find(t);r=W.qsa(L,t)}else{if(n(t))return S(L).ready(t);if(W.isZ(t))return t;if(tt(t))r=u(t);else if(o(t))r=[t],t=null;else if(k.test(t))r=W.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==j)return S(e).find(t);r=W.qsa(L,t)}}return W.Z(r,t)},S=function(t,e){return W.init(t,e)},S.extend=function(t){var e,n=F.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},W.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=V.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:F.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=L.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=e,S.isFunction=n,S.isWindow=r,S.isArray=tt,S.isPlainObject=a,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},S.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},S.camelCase=N,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n);else for(i in t)null!=(n=e(t[i],i))&&o.push(n);return c(o)},S.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},S.grep=function(t,e){return M.call(t,e)},t.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),S.fn={constructor:W.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=W.isZ(e)?e.toArray():e;return D.apply(W.isZ(this)?this.toArray():this,n)},map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(F.apply(this,arguments))},ready:function(t){return J.test(L.readyState)&&L.body?t(S):L.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===j?F.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return n(t)?this.not(this.not(t)):S(M.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return S(P(this.concat(S(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==j)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?F.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return S(e)},has:function(t){return this.filter(function(){return o(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:S(t)},find:function(t){var e=this;return t?"object"==typeof t?S(t).filter(function(){var t=this;return O.some.call(e,function(e){return S.contains(e,t)})}):1==this.length?S(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):S()},closest:function(t,e){var n=[],r="object"==typeof t&&S(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:W.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return y(e,t)},parent:function(t){return y(P(this.pluck("parentNode")),t)},children:function(t){return y(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||F.call(this.childNodes)})},siblings:function(t){return y(this.map(function(t,e){return M.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(n){S(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=S(this),i=r.contents(),o=e?t.call(this,n):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===j?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(E in t)x(this,E,t[E]);else x(this,t,g(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:j},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){x(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=Q[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?T(r):j},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=g(this,t,e,this.value)})):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=S(this),r=g(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(L.documentElement!==this[0]&&!S.contains(L.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[N(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(tt(t)){if(!r)return;var i={},o=getComputedStyle(r,"");return S.each(t,function(t,e){i[e]=r.style[N(e)]||o.getPropertyValue(e)}),i}}var a="";if("string"==e(t))n||0===n?a=l(t)+":"+p(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(E in t)t[E]||0===t[E]?a+=l(E)+":"+p(E,t[E])+";":this.each(function(){this.style.removeProperty(l(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(b(t))},f(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=b(this);g(this,t,e,n).split(/\s+/g).forEach(function(t){S(this).hasClass(t)||C.push(t)},this),C.length&&b(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===j)return b(this,"");C=b(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(f(t)," ")}),b(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this);g(this,t,n,b(this)).split(/\s+/g).forEach(function(t){(e===j?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===j?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===j?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=H.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||L.body;t&&!H.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(n){var o,a=this[0];return n===j?r(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(a=S(this)).css(t,g(this,n,e,a[t]()))})}}),X.forEach(function(n,r){var i=r%2;S.fn[n]=function(){var n,o,a=S.map(arguments,function(t){var r=[];return"array"==(n=e(t))?(t.forEach(function(t){return t.nodeType!==j?r.push(t):S.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(W.fragment(t)))}),r):"object"==n||null==t?t:W.fragment(t)}),s=this.length>1;return a.length<1?this:this.each(function(e,n){o=i?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null;var u=S.contains(L.documentElement,o);a.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!o)return S(e).remove();o.insertBefore(e,n),u&&w(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},S.fn[i?n+"To":"insert"+(r?"Before":"After")]=function(t){return S(t)[n](this),this}}),W.Z.prototype=m.prototype=S.fn,W.uniq=P,W.deserializeValue=T,S.zepto=W,S}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function n(t){return t._zid||(t._zid=h++)}function r(t,e,r,a){if((e=i(e)).ns)var s=o(e.ns);return(y[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(t,e){return t.del&&!x&&t.e in b||!!e}function s(t){return T[t]||x&&b[t]||t}function u(t,r,o,u,c,f,h){var d=n(t),m=y[d]||(y[d]=[]);r.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(o);var r=i(n);r.fn=o,r.sel=c,r.e in T&&(o=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=f;var d=f||o;r.proxy=function(e){if(!(e=l(e)).isImmediatePropagationStopped()){e.data=u;var n=d.apply(t,e._args==p?[e]:[e].concat(e._args));return!1===n&&(e.preventDefault(),e.stopPropagation()),n}},r.i=m.length,m.push(r),"addEventListener"in t&&t.addEventListener(s(r.e),r.proxy,a(r,h))})}function c(t,e,i,o,u){var c=n(t);(e||"").split(/\s/).forEach(function(e){r(t,e,i,o).forEach(function(e){delete y[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,a(e,u))})})}function l(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(S,function(e,r){var i=n[e];t[e]=function(){return this[r]=w,i&&i.apply(n,arguments)},t[r]=j}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==p?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=w)),t}function f(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===p||(n[e]=t[e]);return l(n,t)}var p,h=1,d=Array.prototype.slice,m=e.isFunction,v=function(t){return"string"==typeof t},y={},g={},x="onfocusin"in t,b={focus:"focusin",blur:"focusout"},T={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",e.event={add:u,remove:c},e.proxy=function(t,r){var i=2 in arguments&&d.call(arguments,2);if(m(t)){var o=function(){return t.apply(r,i?i.concat(d.call(arguments)):arguments)};return o._zid=n(t),o}if(v(r))return i?(i.unshift(t[r],t),e.proxy.apply(null,i)):e.proxy(t[r],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},j=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,i,o){var a,s,l=this;return t&&!v(t)?(e.each(t,function(t,e){l.on(t,n,r,e,o)}),l):(v(n)||m(i)||!1===i||(i=r,r=n,n=p),(i===p||!1===r)&&(i=r,r=p),!1===i&&(i=j),l.each(function(l,p){o&&(a=function(t){return c(p,t.type,i),i.apply(this,arguments)}),n&&(s=function(t){var r,o=e(t.target).closest(n,p).get(0);return o&&o!==p?(r=e.extend(f(t),{currentTarget:o,liveFired:p}),(a||i).apply(o,[r].concat(d.call(arguments,1)))):void 0}),u(p,t,i,r,n,s||a)}))},e.fn.off=function(t,n,r){var i=this;return t&&!v(t)?(e.each(t,function(t,e){i.off(t,n,e)}),i):(v(n)||m(r)||!1===r||(r=n,n=p),!1===r&&(r=j),i.each(function(){c(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=v(t)||e.isPlainObject(t)?e.Event(t):l(t),t._args=n,this.each(function(){t.type in b&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var i,o;return this.each(function(a,s){(i=f(v(t)?e.Event(t):t))._args=n,i.target=s,e.each(r(s,t.type||t),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){v(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),l(n)}}(e),function(e){function n(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function r(t,e,r,i){return t.global?n(e||b,r,i):void 0}function i(t){t.global&&0==e.active++&&r(t,null,"ajaxStart")}function o(t){t.global&&!--e.active&&r(t,null,"ajaxStop")}function a(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==r(e,n,"ajaxBeforeSend",[t,e])&&void r(e,n,"ajaxSend",[t,e])}function s(t,e,n,i){var o=n.context,a="success";n.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),r(n,o,"ajaxSuccess",[e,n,t]),c(a,e,n)}function u(t,e,n,i,o){var a=i.context;i.error.call(a,n,e,t),o&&o.rejectWith(a,[n,e,t]),r(i,a,"ajaxError",[n,i,t||e]),c(e,n,i)}function c(t,e,n){var i=n.context;n.complete.call(i,e,t),r(n,i,"ajaxComplete",[e,n]),o(n)}function l(t,e,n){if(n.dataFilter==f)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function f(){}function p(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":w.test(t)?"script":j.test(t)&&"xml")||"text"}function h(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=h(t.url,t.data),t.data=void 0)}function m(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function v(t,n,r,i){var o,a=e.isArray(n),s=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?t.add(u.name,u.value):"array"==o||!r&&"object"==o?v(t,u,r,n):t.add(n,u)})}var y,g,x=+new Date,b=t.document,T=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,j=/^(?:text|application)\/xml/i,E="application/json",S="text/html",C=/^\s*$/,N=b.createElement("a");N.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,r){if(!("type"in n))return e.ajax(n);var i,o,c=n.jsonpCallback,l=(e.isFunction(c)?c():c)||"Zepto"+x++,f=b.createElement("script"),p=t[l],h=function(t){e(f).triggerHandler("error",t||"abort")},d={abort:h};return r&&r.promise(d),e(f).on("load error",function(a,c){clearTimeout(o),e(f).off().remove(),"error"!=a.type&&i?s(i[0],d,n,r):u(null,c||"error",d,n,r),t[l]=p,i&&e.isFunction(p)&&p(i[0]),p=i=void 0}),!1===a(d,n)?(h("abort"),d):(t[l]=function(){i=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),b.head.appendChild(f),n.timeout>0&&(o=setTimeout(function(){h("timeout")},n.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:f,success:f,error:f,complete:f,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:f},e.ajax=function(n){var r,o,c=e.extend({},n||{}),m=e.Deferred&&e.Deferred();for(y in e.ajaxSettings)void 0===c[y]&&(c[y]=e.ajaxSettings[y]);i(c),c.crossDomain||(r=b.createElement("a"),r.href=c.url,r.href=r.href,c.crossDomain=N.protocol+"//"+N.host!=r.protocol+"//"+r.host),c.url||(c.url=t.location.toString()),(o=c.url.indexOf("#"))>-1&&(c.url=c.url.slice(0,o)),d(c);var v=c.dataType,x=/\?.+=\?/.test(c.url);if(x&&(v="jsonp"),!1!==c.cache&&(n&&!0===n.cache||"script"!=v&&"jsonp"!=v)||(c.url=h(c.url,"_="+Date.now())),"jsonp"==v)return x||(c.url=h(c.url,c.jsonp?c.jsonp+"=?":!1===c.jsonp?"":"callback=?")),e.ajaxJSONP(c,m);var T,w=c.accepts[v],j={},E=function(t,e){j[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:t.location.protocol,P=c.xhr(),O=P.setRequestHeader;if(m&&m.promise(P),c.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",w||"*/*"),(w=c.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),P.overrideMimeType&&P.overrideMimeType(w)),(c.contentType||!1!==c.contentType&&c.data&&"GET"!=c.type.toUpperCase())&&E("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(g in c.headers)E(g,c.headers[g]);if(P.setRequestHeader=E,P.onreadystatechange=function(){if(4==P.readyState){P.onreadystatechange=f,clearTimeout(T);var t,n=!1;if(P.status>=200&&P.status<300||304==P.status||0==P.status&&"file:"==S){if(v=v||p(c.mimeType||P.getResponseHeader("content-type")),"arraybuffer"==P.responseType||"blob"==P.responseType)t=P.response;else{t=P.responseText;try{t=l(t,v,c),"script"==v?(0,eval)(t):"xml"==v?t=P.responseXML:"json"==v&&(t=C.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return u(n,"parsererror",P,c,m)}s(t,P,c,m)}else u(P.statusText||null,P.status?"error":"abort",P,c,m)}},!1===a(P,c))return P.abort(),u(null,"abort",P,c,m),P;var D=!("async"in c)||c.async;if(P.open(c.type,c.url,D,c.username,c.password),c.xhrFields)for(g in c.xhrFields)P[g]=c.xhrFields[g];for(g in j)O.apply(P,j[g]);return c.timeout>0&&(T=setTimeout(function(){P.onreadystatechange=f,P.abort(),u(null,"timeout",P,c,m)},c.timeout)),P.send(c.data?c.data:null),P},e.get=function(){return e.ajax(m.apply(null,arguments))},e.post=function(){var t=m.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=m.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,a=t.split(/\s/),s=m(t,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(t){o.html(i?e("<div>").html(t.replace(T,"")).find(i):t),u&&u.apply(o,arguments)},e.ajax(s),this};var P=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(P(t)+"="+P(n))},v(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,(e=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}(),e}),function(t){function e(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function n(){l=null,p.last&&(p.el.trigger("longTap"),p={})}function r(){l&&clearTimeout(l),l=null}function i(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,p={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,p={};t(document).ready(function(){var h,d,m,v,y=0,g=0;"MSGesture"in window&&((f=new MSGesture).target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(p.el.trigger("swipe"),p.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(v=a(e,"down"))&&!o(e)||(m=v?e:e.touches[0],e.touches&&1===e.touches.length&&p.x2&&(p.x2=void 0,p.y2=void 0),h=Date.now(),d=h-(p.last||h),p.el=t("tagName"in m.target?m.target:m.target.parentNode),s&&clearTimeout(s),p.x1=m.pageX,p.y1=m.pageY,d>0&&d<=250&&(p.isDoubleTap=!0),p.last=h,l=setTimeout(n,750),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(v=a(t,"move"))&&!o(t)||(m=v?t:t.touches[0],r(),p.x2=m.pageX,p.y2=m.pageY,y+=Math.abs(p.x1-p.x2),g+=Math.abs(p.y1-p.y2))}).on("touchend MSPointerUp pointerup",function(n){(v=a(n,"up"))&&!o(n)||(r(),p.x2&&Math.abs(p.x1-p.x2)>30||p.y2&&Math.abs(p.y1-p.y2)>30?c=setTimeout(function(){p.el&&(p.el.trigger("swipe"),p.el.trigger("swipe"+e(p.x1,p.x2,p.y1,p.y2))),p={}},0):"last"in p&&(y<30&&g<30?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=i,p.el&&p.el.trigger(e),p.isDoubleTap?(p.el&&p.el.trigger("doubleTap"),p={}):s=setTimeout(function(){s=null,p.el&&p.el.trigger("singleTap"),p={}},250)},0):p={}),y=g=0)}).on("touchcancel MSPointerCancel pointercancel",i),t(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){if(t.global)return e(n||x,r,i)}function r(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;if(!1===e.beforeSend.call(r,t,e)||!1===n(e,r,"ajaxBeforeSend",[t,e]))return!1;n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context;r.success.call(o,t,"success",e),i&&i.resolveWith(o,[t,"success",e]),n(r,o,"ajaxSuccess",[e,r,t]),u("success",e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(t,e,n){if(n.dataFilter==l)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==j?"json":T.test(t)?"script":w.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=p(e.url,e.data),e.data=void 0)}function d(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function m(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?m(e,u,r,n):e.add(n,u)})}var v,y,g=+new Date,x=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,T=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,j="application/json",E="text/html",S=/^\s*$/,C=x.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+g++,l=x.createElement("script"),f=window[c],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],h,e,n):s(null,u||"error",h,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),!1===o(h,e)?(p("abort"),h):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),x.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,i,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===u[v]&&(u[v]=t.ajaxSettings[v]);r(u),u.crossDomain||((n=x.createElement("a")).href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),h(u);var m=u.dataType,g=/\?.+=\?/.test(u.url);if(g&&(m="jsonp"),!1!==u.cache&&(e&&!0===e.cache||"script"!=m&&"jsonp"!=m)||(u.url=p(u.url,"_="+Date.now())),"jsonp"==m)return g||(u.url=p(u.url,u.jsonp?u.jsonp+"=?":!1===u.jsonp?"":"callback=?")),t.ajaxJSONP(u,d);var b,T=u.accepts[m],w={},j=function(t,e){w[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,N=u.xhr(),P=N.setRequestHeader;if(d&&d.promise(N),u.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",T||"*/*"),(T=u.mimeType||T)&&(T.indexOf(",")>-1&&(T=T.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(T)),(u.contentType||!1!==u.contentType&&u.data&&"GET"!=u.type.toUpperCase())&&j("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(y in u.headers)j(y,u.headers[y]);if(N.setRequestHeader=j,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=l,clearTimeout(b);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==E){if(m=m||f(u.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)e=N.response;else{e=N.responseText;try{e=c(e,m,u),"script"==m?(0,eval)(e):"xml"==m?e=N.responseXML:"json"==m&&(e=S.test(e)?null:t.parseJSON(e))}catch(t){n=t}if(n)return s(n,"parsererror",N,u,d)}a(e,N,u,d)}else s(N.statusText||null,N.status?"error":"abort",N,u,d)}},!1===o(N,u))return N.abort(),s(null,"abort",N,u,d),N;var O=!("async"in u)||u.async;if(N.open(u.type,u.url,O,u.username,u.password),u.xhrFields)for(y in u.xhrFields)N[y]=u.xhrFields[y];for(y in w)P.apply(N,w[y]);return u.timeout>0&&(b=setTimeout(function(){N.onreadystatechange=l,N.abort(),s(null,"timeout",N,u,d)},u.timeout)),N.send(u.data?u.data:null),N},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=d(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var N=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(e)+"="+N(n))},m(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto);