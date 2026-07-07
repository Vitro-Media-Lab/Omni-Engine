(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ry(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ly={exports:{}},uf={},Py={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl=Symbol.for("react.element"),YS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),KS=Symbol.for("react.profiler"),ZS=Symbol.for("react.provider"),JS=Symbol.for("react.context"),QS=Symbol.for("react.forward_ref"),eM=Symbol.for("react.suspense"),tM=Symbol.for("react.memo"),nM=Symbol.for("react.lazy"),xg=Symbol.iterator;function iM(n){return n===null||typeof n!="object"?null:(n=xg&&n[xg]||n["@@iterator"],typeof n=="function"?n:null)}var Dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,Ny={};function Aa(n,e,t){this.props=n,this.context=e,this.refs=Ny,this.updater=t||Dy}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Aa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Uy(){}Uy.prototype=Aa.prototype;function em(n,e,t){this.props=n,this.context=e,this.refs=Ny,this.updater=t||Dy}var tm=em.prototype=new Uy;tm.constructor=em;Iy(tm,Aa.prototype);tm.isPureReactComponent=!0;var _g=Array.isArray,Oy=Object.prototype.hasOwnProperty,nm={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function Fy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Oy.call(e,i)&&!zy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Gl,type:n,key:s,ref:o,props:r,_owner:nm.current}}function rM(n,e){return{$$typeof:Gl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function im(n){return typeof n=="object"&&n!==null&&n.$$typeof===Gl}function sM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Sg=/\/+/g;function $f(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sM(""+n.key):e.toString(36)}function nu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Gl:case YS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+$f(o,0):i,_g(r)?(t="",n!=null&&(t=n.replace(Sg,"$&/")+"/"),nu(r,e,t,"",function(c){return c})):r!=null&&(im(r)&&(r=rM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_g(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+$f(s,a);o+=nu(s,e,t,l,r)}else if(l=iM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+$f(s,a++),o+=nu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zl(n,e,t){if(n==null)return n;var i=[],r=0;return nu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function oM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},iu={transition:null},aM={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:iu,ReactCurrentOwner:nm};function ky(){throw Error("act(...) is not supported in production builds of React.")}St.Children={map:Zl,forEach:function(n,e,t){Zl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zl(n,function(){e++}),e},toArray:function(n){return Zl(n,function(e){return e})||[]},only:function(n){if(!im(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};St.Component=Aa;St.Fragment=$S;St.Profiler=KS;St.PureComponent=em;St.StrictMode=qS;St.Suspense=eM;St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aM;St.act=ky;St.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Iy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Oy.call(e,l)&&!zy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Gl,type:n.type,key:r,ref:s,props:i,_owner:o}};St.createContext=function(n){return n={$$typeof:JS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ZS,_context:n},n.Consumer=n};St.createElement=Fy;St.createFactory=function(n){var e=Fy.bind(null,n);return e.type=n,e};St.createRef=function(){return{current:null}};St.forwardRef=function(n){return{$$typeof:QS,render:n}};St.isValidElement=im;St.lazy=function(n){return{$$typeof:nM,_payload:{_status:-1,_result:n},_init:oM}};St.memo=function(n,e){return{$$typeof:tM,type:n,compare:e===void 0?null:e}};St.startTransition=function(n){var e=iu.transition;iu.transition={};try{n()}finally{iu.transition=e}};St.unstable_act=ky;St.useCallback=function(n,e){return Gn.current.useCallback(n,e)};St.useContext=function(n){return Gn.current.useContext(n)};St.useDebugValue=function(){};St.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};St.useEffect=function(n,e){return Gn.current.useEffect(n,e)};St.useId=function(){return Gn.current.useId()};St.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};St.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};St.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};St.useMemo=function(n,e){return Gn.current.useMemo(n,e)};St.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};St.useRef=function(n){return Gn.current.useRef(n)};St.useState=function(n){return Gn.current.useState(n)};St.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};St.useTransition=function(){return Gn.current.useTransition()};St.version="18.3.1";Py.exports=St;var tr=Py.exports;const By=Ry(tr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lM=tr,cM=Symbol.for("react.element"),uM=Symbol.for("react.fragment"),fM=Object.prototype.hasOwnProperty,hM=lM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dM={key:!0,ref:!0,__self:!0,__source:!0};function Hy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fM.call(e,i)&&!dM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cM,type:n,key:s,ref:o,props:r,_owner:hM.current}}uf.Fragment=uM;uf.jsx=Hy;uf.jsxs=Hy;Ly.exports=uf;var Ee=Ly.exports,hd={},Vy={exports:{}},mi={},Gy={exports:{}},Wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,$){var q=U.length;U.push($);e:for(;0<q;){var Q=q-1>>>1,ie=U[Q];if(0<r(ie,$))U[Q]=$,U[q]=ie,q=Q;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],q=U.pop();if(q!==$){U[0]=q;e:for(var Q=0,ie=U.length,ye=ie>>>1;Q<ye;){var j=2*(Q+1)-1,te=U[j],pe=j+1,re=U[pe];if(0>r(te,q))pe<ie&&0>r(re,te)?(U[Q]=re,U[pe]=q,Q=pe):(U[Q]=te,U[j]=q,Q=j);else if(pe<ie&&0>r(re,q))U[Q]=re,U[pe]=q,Q=pe;else break e}}return $}function r(U,$){var q=U.sortIndex-$.sortIndex;return q!==0?q:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(U){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=U)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function S(U){if(_=!1,m(U),!g)if(t(l)!==null)g=!0,N(T);else{var $=t(c);$!==null&&V(S,$.startTime-U)}}function T(U,$){g=!1,_&&(_=!1,d(E),E=-1),p=!0;var q=f;try{for(m($),h=t(l);h!==null&&(!(h.expirationTime>$)||U&&!L());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var ie=Q(h.expirationTime<=$);$=n.unstable_now(),typeof ie=="function"?h.callback=ie:h===t(l)&&i(l),m($)}else i(l);h=t(l)}if(h!==null)var ye=!0;else{var j=t(c);j!==null&&V(S,j.startTime-$),ye=!1}return ye}finally{h=null,f=q,p=!1}}var A=!1,y=null,E=-1,M=5,w=-1;function L(){return!(n.unstable_now()-w<M)}function k(){if(y!==null){var U=n.unstable_now();w=U;var $=!0;try{$=y(!0,U)}finally{$?I():(A=!1,y=null)}}else A=!1}var I;if(typeof x=="function")I=function(){x(k)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,z=H.port2;H.port1.onmessage=k,I=function(){z.postMessage(null)}}else I=function(){v(k,0)};function N(U){y=U,A||(A=!0,I())}function V(U,$){E=v(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,N(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var q=f;f=$;try{return U()}finally{f=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=f;f=U;try{return $()}finally{f=q}},n.unstable_scheduleCallback=function(U,$,q){var Q=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=q+ie,U={id:u++,callback:$,priorityLevel:U,startTime:q,expirationTime:ie,sortIndex:-1},q>Q?(U.sortIndex=q,e(c,U),t(l)===null&&U===t(c)&&(_?(d(E),E=-1):_=!0,V(S,q-Q))):(U.sortIndex=ie,e(l,U),g||p||(g=!0,N(T))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var $=f;return function(){var q=f;f=$;try{return U.apply(this,arguments)}finally{f=q}}}})(Wy);Gy.exports=Wy;var pM=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mM=tr,di=pM;function Te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xy=new Set,yl={};function no(n,e){ca(n,e),ca(n+"Capture",e)}function ca(n,e){for(yl[n]=e,n=0;n<e.length;n++)Xy.add(e[n])}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,gM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},wg={};function vM(n){return dd.call(wg,n)?!0:dd.call(Mg,n)?!1:gM.test(n)?wg[n]=!0:(Mg[n]=!0,!1)}function yM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xM(n,e,t,i){if(e===null||typeof e>"u"||yM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Cn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Cn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Cn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Cn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Cn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Cn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Cn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Cn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Cn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var rm=/[\-:]([a-z])/g;function sm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(rm,sm);Cn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(rm,sm);Cn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(rm,sm);Cn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Cn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});Cn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Cn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function om(n,e,t,i){var r=Cn.hasOwnProperty(e)?Cn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xM(e,t,r,i)&&(t=null),i||r===null?vM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Or=mM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jl=Symbol.for("react.element"),zo=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),$y=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function Pa(n){return n===null||typeof n!="object"?null:(n=Eg&&n[Eg]||n["@@iterator"],typeof n=="function"?n:null)}var en=Object.assign,qf;function Ka(n){if(qf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+n}var Kf=!1;function Zf(n,e){if(!n||Kf)return"";Kf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ka(n):""}function _M(n){switch(n.tag){case 5:return Ka(n.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return n=Zf(n.type,!1),n;case 11:return n=Zf(n.type.render,!1),n;case 1:return n=Zf(n.type,!0),n;default:return""}}function vd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fo:return"Fragment";case zo:return"Portal";case pd:return"Profiler";case am:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Yy:return(n.displayName||"Context")+".Consumer";case jy:return(n._context.displayName||"Context")+".Provider";case lm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cm:return e=n.displayName||null,e!==null?e:vd(n.type)||"Memo";case qr:e=n._payload,n=n._init;try{return vd(n(e))}catch{}}return null}function SM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ms(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MM(n){var e=qy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ql(n){n._valueTracker||(n._valueTracker=MM(n))}function Ky(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=qy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Mu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yd(n,e){var t=e.checked;return en({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Tg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ms(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zy(n,e){e=e.checked,e!=null&&om(n,"checked",e,!1)}function xd(n,e){Zy(n,e);var t=ms(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_d(n,e.type,t):e.hasOwnProperty("defaultValue")&&_d(n,e.type,ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _d(n,e,t){(e!=="number"||Mu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Za=Array.isArray;function Qo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ms(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Sd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Te(91));return en({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ag(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Te(92));if(Za(t)){if(1<t.length)throw Error(Te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ms(t)}}function Jy(n,e){var t=ms(e.value),i=ms(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Cg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Qy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Qy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ec,ex=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function xl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var rl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wM=["Webkit","ms","Moz","O"];Object.keys(rl).forEach(function(n){wM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),rl[e]=rl[n]})});function tx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||rl.hasOwnProperty(n)&&rl[n]?(""+e).trim():e+"px"}function nx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=tx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var EM=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(n,e){if(e){if(EM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Te(62))}}function Ed(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function um(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bd=null,ea=null,ta=null;function Rg(n){if(n=jl(n)){if(typeof bd!="function")throw Error(Te(280));var e=n.stateNode;e&&(e=mf(e),bd(n.stateNode,n.type,e))}}function ix(n){ea?ta?ta.push(n):ta=[n]:ea=n}function rx(){if(ea){var n=ea,e=ta;if(ta=ea=null,Rg(n),e)for(n=0;n<e.length;n++)Rg(e[n])}}function sx(n,e){return n(e)}function ox(){}var Jf=!1;function ax(n,e,t){if(Jf)return n(e,t);Jf=!0;try{return sx(n,e,t)}finally{Jf=!1,(ea!==null||ta!==null)&&(ox(),rx())}}function _l(n,e){var t=n.stateNode;if(t===null)return null;var i=mf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Te(231,e,typeof t));return t}var Ad=!1;if(Lr)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Ad=!1}function TM(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var sl=!1,wu=null,Eu=!1,Cd=null,bM={onError:function(n){sl=!0,wu=n}};function AM(n,e,t,i,r,s,o,a,l){sl=!1,wu=null,TM.apply(bM,arguments)}function CM(n,e,t,i,r,s,o,a,l){if(AM.apply(this,arguments),sl){if(sl){var c=wu;sl=!1,wu=null}else throw Error(Te(198));Eu||(Eu=!0,Cd=c)}}function io(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function lx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Lg(n){if(io(n)!==n)throw Error(Te(188))}function RM(n){var e=n.alternate;if(!e){if(e=io(n),e===null)throw Error(Te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Lg(r),n;if(s===i)return Lg(r),e;s=s.sibling}throw Error(Te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Te(189))}}if(t.alternate!==i)throw Error(Te(190))}if(t.tag!==3)throw Error(Te(188));return t.stateNode.current===t?n:e}function cx(n){return n=RM(n),n!==null?ux(n):null}function ux(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ux(n);if(e!==null)return e;n=n.sibling}return null}var fx=di.unstable_scheduleCallback,Pg=di.unstable_cancelCallback,LM=di.unstable_shouldYield,PM=di.unstable_requestPaint,rn=di.unstable_now,DM=di.unstable_getCurrentPriorityLevel,fm=di.unstable_ImmediatePriority,hx=di.unstable_UserBlockingPriority,Tu=di.unstable_NormalPriority,IM=di.unstable_LowPriority,dx=di.unstable_IdlePriority,ff=null,ir=null;function NM(n){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(ff,n,void 0,(n.current.flags&128)===128)}catch{}}var Gi=Math.clz32?Math.clz32:zM,UM=Math.log,OM=Math.LN2;function zM(n){return n>>>=0,n===0?32:31-(UM(n)/OM|0)|0}var tc=64,nc=4194304;function Ja(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ja(a):(s&=o,s!==0&&(i=Ja(s)))}else o=t&~r,o!==0?i=Ja(o):s!==0&&(i=Ja(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Gi(e),r=1<<t,i|=n[t],e&=~r;return i}function FM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Gi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=FM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Rd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function px(){var n=tc;return tc<<=1,!(tc&4194240)&&(tc=64),n}function Qf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Gi(e),n[e]=t}function BM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Gi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function hm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Gi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Dt=0;function mx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var gx,dm,vx,yx,xx,Ld=!1,ic=[],rs=null,ss=null,os=null,Sl=new Map,Ml=new Map,Jr=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dg(n,e){switch(n){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function Ia(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=jl(e),e!==null&&dm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function VM(n,e,t,i,r){switch(e){case"focusin":return rs=Ia(rs,n,e,t,i,r),!0;case"dragenter":return ss=Ia(ss,n,e,t,i,r),!0;case"mouseover":return os=Ia(os,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Sl.set(s,Ia(Sl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ml.set(s,Ia(Ml.get(s)||null,n,e,t,i,r)),!0}return!1}function _x(n){var e=ks(n.target);if(e!==null){var t=io(e);if(t!==null){if(e=t.tag,e===13){if(e=lx(t),e!==null){n.blockedOn=e,xx(n.priority,function(){vx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ru(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Td=i,t.target.dispatchEvent(i),Td=null}else return e=jl(t),e!==null&&dm(e),n.blockedOn=t,!1;e.shift()}return!0}function Ig(n,e,t){ru(n)&&t.delete(e)}function GM(){Ld=!1,rs!==null&&ru(rs)&&(rs=null),ss!==null&&ru(ss)&&(ss=null),os!==null&&ru(os)&&(os=null),Sl.forEach(Ig),Ml.forEach(Ig)}function Na(n,e){n.blockedOn===e&&(n.blockedOn=null,Ld||(Ld=!0,di.unstable_scheduleCallback(di.unstable_NormalPriority,GM)))}function wl(n){function e(r){return Na(r,n)}if(0<ic.length){Na(ic[0],n);for(var t=1;t<ic.length;t++){var i=ic[t];i.blockedOn===n&&(i.blockedOn=null)}}for(rs!==null&&Na(rs,n),ss!==null&&Na(ss,n),os!==null&&Na(os,n),Sl.forEach(e),Ml.forEach(e),t=0;t<Jr.length;t++)i=Jr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)_x(t),t.blockedOn===null&&Jr.shift()}var na=Or.ReactCurrentBatchConfig,Au=!0;function WM(n,e,t,i){var r=Dt,s=na.transition;na.transition=null;try{Dt=1,pm(n,e,t,i)}finally{Dt=r,na.transition=s}}function XM(n,e,t,i){var r=Dt,s=na.transition;na.transition=null;try{Dt=4,pm(n,e,t,i)}finally{Dt=r,na.transition=s}}function pm(n,e,t,i){if(Au){var r=Pd(n,e,t,i);if(r===null)ch(n,e,i,Cu,t),Dg(n,i);else if(VM(r,n,e,t,i))i.stopPropagation();else if(Dg(n,i),e&4&&-1<HM.indexOf(n)){for(;r!==null;){var s=jl(r);if(s!==null&&gx(s),s=Pd(n,e,t,i),s===null&&ch(n,e,i,Cu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ch(n,e,i,null,t)}}var Cu=null;function Pd(n,e,t,i){if(Cu=null,n=um(i),n=ks(n),n!==null)if(e=io(n),e===null)n=null;else if(t=e.tag,t===13){if(n=lx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Cu=n,null}function Sx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DM()){case fm:return 1;case hx:return 4;case Tu:case IM:return 16;case dx:return 536870912;default:return 16}default:return 16}}var ts=null,mm=null,su=null;function Mx(){if(su)return su;var n,e=mm,t=e.length,i,r="value"in ts?ts.value:ts.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return su=r.slice(n,1<i?1-i:void 0)}function ou(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function rc(){return!0}function Ng(){return!1}function gi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rc:Ng,this.isPropagationStopped=Ng,this}return en(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gm=gi(Ca),Xl=en({},Ca,{view:0,detail:0}),jM=gi(Xl),eh,th,Ua,hf=en({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ua&&(Ua&&n.type==="mousemove"?(eh=n.screenX-Ua.screenX,th=n.screenY-Ua.screenY):th=eh=0,Ua=n),eh)},movementY:function(n){return"movementY"in n?n.movementY:th}}),Ug=gi(hf),YM=en({},hf,{dataTransfer:0}),$M=gi(YM),qM=en({},Xl,{relatedTarget:0}),nh=gi(qM),KM=en({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),ZM=gi(KM),JM=en({},Ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),QM=gi(JM),e1=en({},Ca,{data:0}),Og=gi(e1),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=i1[n])?!!e[n]:!1}function vm(){return r1}var s1=en({},Xl,{key:function(n){if(n.key){var e=t1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ou(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vm,charCode:function(n){return n.type==="keypress"?ou(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ou(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),o1=gi(s1),a1=en({},hf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=gi(a1),l1=en({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vm}),c1=gi(l1),u1=en({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=gi(u1),h1=en({},hf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),d1=gi(h1),p1=[9,13,27,32],ym=Lr&&"CompositionEvent"in window,ol=null;Lr&&"documentMode"in document&&(ol=document.documentMode);var m1=Lr&&"TextEvent"in window&&!ol,wx=Lr&&(!ym||ol&&8<ol&&11>=ol),Fg=" ",kg=!1;function Ex(n,e){switch(n){case"keyup":return p1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ko=!1;function g1(n,e){switch(n){case"compositionend":return Tx(e);case"keypress":return e.which!==32?null:(kg=!0,Fg);case"textInput":return n=e.data,n===Fg&&kg?null:n;default:return null}}function v1(n,e){if(ko)return n==="compositionend"||!ym&&Ex(n,e)?(n=Mx(),su=mm=ts=null,ko=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wx&&e.locale!=="ko"?null:e.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!y1[n.type]:e==="textarea"}function bx(n,e,t,i){ix(i),e=Ru(e,"onChange"),0<e.length&&(t=new gm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var al=null,El=null;function x1(n){zx(n,0)}function df(n){var e=Vo(n);if(Ky(e))return n}function _1(n,e){if(n==="change")return e}var Ax=!1;if(Lr){var ih;if(Lr){var rh="oninput"in document;if(!rh){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),rh=typeof Hg.oninput=="function"}ih=rh}else ih=!1;Ax=ih&&(!document.documentMode||9<document.documentMode)}function Vg(){al&&(al.detachEvent("onpropertychange",Cx),El=al=null)}function Cx(n){if(n.propertyName==="value"&&df(El)){var e=[];bx(e,El,n,um(n)),ax(x1,e)}}function S1(n,e,t){n==="focusin"?(Vg(),al=e,El=t,al.attachEvent("onpropertychange",Cx)):n==="focusout"&&Vg()}function M1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return df(El)}function w1(n,e){if(n==="click")return df(e)}function E1(n,e){if(n==="input"||n==="change")return df(e)}function T1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ji=typeof Object.is=="function"?Object.is:T1;function Tl(n,e){if(ji(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!dd.call(e,r)||!ji(n[r],e[r]))return!1}return!0}function Gg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wg(n,e){var t=Gg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gg(t)}}function Rx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Rx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Lx(){for(var n=window,e=Mu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Mu(n.document)}return e}function xm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function b1(n){var e=Lx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Rx(t.ownerDocument.documentElement,t)){if(i!==null&&xm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Wg(t,s);var o=Wg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var A1=Lr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Dd=null,ll=null,Id=!1;function Xg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Id||Bo==null||Bo!==Mu(i)||(i=Bo,"selectionStart"in i&&xm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ll&&Tl(ll,i)||(ll=i,i=Ru(Dd,"onSelect"),0<i.length&&(e=new gm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Bo)))}function sc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ho={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},sh={},Px={};Lr&&(Px=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function pf(n){if(sh[n])return sh[n];if(!Ho[n])return n;var e=Ho[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Px)return sh[n]=e[t];return n}var Dx=pf("animationend"),Ix=pf("animationiteration"),Nx=pf("animationstart"),Ux=pf("transitionend"),Ox=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(n,e){Ox.set(n,e),no(e,[n])}for(var oh=0;oh<jg.length;oh++){var ah=jg[oh],C1=ah.toLowerCase(),R1=ah[0].toUpperCase()+ah.slice(1);xs(C1,"on"+R1)}xs(Dx,"onAnimationEnd");xs(Ix,"onAnimationIteration");xs(Nx,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(Ux,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Yg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,CM(i,e,void 0,n),n.currentTarget=null}function zx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yg(r,a,c),s=l}}}if(Eu)throw n=Cd,Eu=!1,Cd=null,n}function Vt(n,e){var t=e[Fd];t===void 0&&(t=e[Fd]=new Set);var i=n+"__bubble";t.has(i)||(Fx(e,n,2,!1),t.add(i))}function lh(n,e,t){var i=0;e&&(i|=4),Fx(t,n,i,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function bl(n){if(!n[oc]){n[oc]=!0,Xy.forEach(function(t){t!=="selectionchange"&&(L1.has(t)||lh(t,!1,n),lh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[oc]||(e[oc]=!0,lh("selectionchange",!1,e))}}function Fx(n,e,t,i){switch(Sx(e)){case 1:var r=WM;break;case 4:r=XM;break;default:r=pm}t=r.bind(null,e,t,n),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ch(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ks(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ax(function(){var c=s,u=um(t),h=[];e:{var f=Ox.get(n);if(f!==void 0){var p=gm,g=n;switch(n){case"keypress":if(ou(t)===0)break e;case"keydown":case"keyup":p=o1;break;case"focusin":g="focus",p=nh;break;case"focusout":g="blur",p=nh;break;case"beforeblur":case"afterblur":p=nh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=c1;break;case Dx:case Ix:case Nx:p=ZM;break;case Ux:p=f1;break;case"scroll":p=jM;break;case"wheel":p=d1;break;case"copy":case"cut":case"paste":p=QM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=zg}var _=(e&4)!==0,v=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,m;x!==null;){m=x;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,d!==null&&(S=_l(x,d),S!=null&&_.push(Al(x,S,m)))),v)break;x=x.return}0<_.length&&(f=new p(f,g,null,t,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Td&&(g=t.relatedTarget||t.fromElement)&&(ks(g)||g[Pr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?ks(g):null,g!==null&&(v=io(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Ug,S="onMouseLeave",d="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(_=zg,S="onPointerLeave",d="onPointerEnter",x="pointer"),v=p==null?f:Vo(p),m=g==null?f:Vo(g),f=new _(S,x+"leave",p,t,u),f.target=v,f.relatedTarget=m,S=null,ks(u)===c&&(_=new _(d,x+"enter",g,t,u),_.target=m,_.relatedTarget=v,S=_),v=S,p&&g)t:{for(_=p,d=g,x=0,m=_;m;m=uo(m))x++;for(m=0,S=d;S;S=uo(S))m++;for(;0<x-m;)_=uo(_),x--;for(;0<m-x;)d=uo(d),m--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=uo(_),d=uo(d)}_=null}else _=null;p!==null&&$g(h,f,p,_,!1),g!==null&&v!==null&&$g(h,v,g,_,!0)}}e:{if(f=c?Vo(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=_1;else if(Bg(f))if(Ax)T=E1;else{T=M1;var A=S1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=w1);if(T&&(T=T(n,c))){bx(h,T,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&_d(f,"number",f.value)}switch(A=c?Vo(c):window,n){case"focusin":(Bg(A)||A.contentEditable==="true")&&(Bo=A,Dd=c,ll=null);break;case"focusout":ll=Dd=Bo=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Xg(h,t,u);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":Xg(h,t,u)}var y;if(ym)e:{switch(n){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ko?Ex(n,t)&&(E="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(wx&&t.locale!=="ko"&&(ko||E!=="onCompositionStart"?E==="onCompositionEnd"&&ko&&(y=Mx()):(ts=u,mm="value"in ts?ts.value:ts.textContent,ko=!0)),A=Ru(c,E),0<A.length&&(E=new Og(E,n,null,t,u),h.push({event:E,listeners:A}),y?E.data=y:(y=Tx(t),y!==null&&(E.data=y)))),(y=m1?g1(n,t):v1(n,t))&&(c=Ru(c,"onBeforeInput"),0<c.length&&(u=new Og("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=y))}zx(h,e)})}function Al(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ru(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_l(n,t),s!=null&&i.unshift(Al(n,s,r)),s=_l(n,e),s!=null&&i.push(Al(n,s,r))),n=n.return}return i}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $g(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_l(t,s),l!=null&&o.unshift(Al(t,l,a))):r||(l=_l(t,s),l!=null&&o.push(Al(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var P1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function qg(n){return(typeof n=="string"?n:""+n).replace(P1,`
`).replace(D1,"")}function ac(n,e,t){if(e=qg(e),qg(n)!==e&&t)throw Error(Te(425))}function Lu(){}var Nd=null,Ud=null;function Od(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(n){return Kg.resolve(null).then(n).catch(U1)}:zd;function U1(n){setTimeout(function(){throw n})}function uh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),wl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);wl(e)}function as(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Zg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),Qi="__reactFiber$"+Ra,Cl="__reactProps$"+Ra,Pr="__reactContainer$"+Ra,Fd="__reactEvents$"+Ra,O1="__reactListeners$"+Ra,z1="__reactHandles$"+Ra;function ks(n){var e=n[Qi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Pr]||t[Qi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Zg(n);n!==null;){if(t=n[Qi])return t;n=Zg(n)}return e}n=t,t=n.parentNode}return null}function jl(n){return n=n[Qi]||n[Pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Te(33))}function mf(n){return n[Cl]||null}var kd=[],Go=-1;function _s(n){return{current:n}}function Wt(n){0>Go||(n.current=kd[Go],kd[Go]=null,Go--)}function Bt(n,e){Go++,kd[Go]=n.current,n.current=e}var gs={},zn=_s(gs),Zn=_s(!1),qs=gs;function ua(n,e){var t=n.type.contextTypes;if(!t)return gs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Pu(){Wt(Zn),Wt(zn)}function Jg(n,e,t){if(zn.current!==gs)throw Error(Te(168));Bt(zn,e),Bt(Zn,t)}function kx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Te(108,SM(n)||"Unknown",r));return en({},t,i)}function Du(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gs,qs=zn.current,Bt(zn,n),Bt(Zn,Zn.current),!0}function Qg(n,e,t){var i=n.stateNode;if(!i)throw Error(Te(169));t?(n=kx(n,e,qs),i.__reactInternalMemoizedMergedChildContext=n,Wt(Zn),Wt(zn),Bt(zn,n)):Wt(Zn),Bt(Zn,t)}var Sr=null,gf=!1,fh=!1;function Bx(n){Sr===null?Sr=[n]:Sr.push(n)}function F1(n){gf=!0,Bx(n)}function Ss(){if(!fh&&Sr!==null){fh=!0;var n=0,e=Dt;try{var t=Sr;for(Dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Sr=null,gf=!1}catch(r){throw Sr!==null&&(Sr=Sr.slice(n+1)),fx(fm,Ss),r}finally{Dt=e,fh=!1}}return null}var Wo=[],Xo=0,Iu=null,Nu=0,_i=[],Si=0,Ks=null,Er=1,Tr="";function Is(n,e){Wo[Xo++]=Nu,Wo[Xo++]=Iu,Iu=n,Nu=e}function Hx(n,e,t){_i[Si++]=Er,_i[Si++]=Tr,_i[Si++]=Ks,Ks=n;var i=Er;n=Tr;var r=32-Gi(i)-1;i&=~(1<<r),t+=1;var s=32-Gi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Er=1<<32-Gi(e)+r|t<<r|i,Tr=s+n}else Er=1<<s|t<<r|i,Tr=n}function _m(n){n.return!==null&&(Is(n,1),Hx(n,1,0))}function Sm(n){for(;n===Iu;)Iu=Wo[--Xo],Wo[Xo]=null,Nu=Wo[--Xo],Wo[Xo]=null;for(;n===Ks;)Ks=_i[--Si],_i[Si]=null,Tr=_i[--Si],_i[Si]=null,Er=_i[--Si],_i[Si]=null}var hi=null,fi=null,jt=!1,zi=null;function Vx(n,e){var t=Mi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function e0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hi=n,fi=as(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hi=n,fi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ks!==null?{id:Er,overflow:Tr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Mi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hi=n,fi=null,!0):!1;default:return!1}}function Bd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hd(n){if(jt){var e=fi;if(e){var t=e;if(!e0(n,e)){if(Bd(n))throw Error(Te(418));e=as(t.nextSibling);var i=hi;e&&e0(n,e)?Vx(i,t):(n.flags=n.flags&-4097|2,jt=!1,hi=n)}}else{if(Bd(n))throw Error(Te(418));n.flags=n.flags&-4097|2,jt=!1,hi=n}}}function t0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hi=n}function lc(n){if(n!==hi)return!1;if(!jt)return t0(n),jt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Od(n.type,n.memoizedProps)),e&&(e=fi)){if(Bd(n))throw Gx(),Error(Te(418));for(;e;)Vx(n,e),e=as(e.nextSibling)}if(t0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fi=as(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fi=null}}else fi=hi?as(n.stateNode.nextSibling):null;return!0}function Gx(){for(var n=fi;n;)n=as(n.nextSibling)}function fa(){fi=hi=null,jt=!1}function Mm(n){zi===null?zi=[n]:zi.push(n)}var k1=Or.ReactCurrentBatchConfig;function Oa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Te(309));var i=t.stateNode}if(!i)throw Error(Te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Te(284));if(!t._owner)throw Error(Te(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(Te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function n0(n){var e=n._init;return e(n._payload)}function Wx(n){function e(d,x){if(n){var m=d.deletions;m===null?(d.deletions=[x],d.flags|=16):m.push(x)}}function t(d,x){if(!n)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=fs(d,x),d.index=0,d.sibling=null,d}function s(d,x,m){return d.index=m,n?(m=d.alternate,m!==null?(m=m.index,m<x?(d.flags|=2,x):m):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,x,m,S){return x===null||x.tag!==6?(x=yh(m,d.mode,S),x.return=d,x):(x=r(x,m),x.return=d,x)}function l(d,x,m,S){var T=m.type;return T===Fo?u(d,x,m.props.children,S,m.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qr&&n0(T)===x.type)?(S=r(x,m.props),S.ref=Oa(d,x,m),S.return=d,S):(S=du(m.type,m.key,m.props,null,d.mode,S),S.ref=Oa(d,x,m),S.return=d,S)}function c(d,x,m,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=xh(m,d.mode,S),x.return=d,x):(x=r(x,m.children||[]),x.return=d,x)}function u(d,x,m,S,T){return x===null||x.tag!==7?(x=Ys(m,d.mode,S,T),x.return=d,x):(x=r(x,m),x.return=d,x)}function h(d,x,m){if(typeof x=="string"&&x!==""||typeof x=="number")return x=yh(""+x,d.mode,m),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jl:return m=du(x.type,x.key,x.props,null,d.mode,m),m.ref=Oa(d,null,x),m.return=d,m;case zo:return x=xh(x,d.mode,m),x.return=d,x;case qr:var S=x._init;return h(d,S(x._payload),m)}if(Za(x)||Pa(x))return x=Ys(x,d.mode,m,null),x.return=d,x;cc(d,x)}return null}function f(d,x,m,S){var T=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(d,x,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jl:return m.key===T?l(d,x,m,S):null;case zo:return m.key===T?c(d,x,m,S):null;case qr:return T=m._init,f(d,x,T(m._payload),S)}if(Za(m)||Pa(m))return T!==null?null:u(d,x,m,S,null);cc(d,m)}return null}function p(d,x,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(m)||null,a(x,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jl:return d=d.get(S.key===null?m:S.key)||null,l(x,d,S,T);case zo:return d=d.get(S.key===null?m:S.key)||null,c(x,d,S,T);case qr:var A=S._init;return p(d,x,m,A(S._payload),T)}if(Za(S)||Pa(S))return d=d.get(m)||null,u(x,d,S,T,null);cc(x,S)}return null}function g(d,x,m,S){for(var T=null,A=null,y=x,E=x=0,M=null;y!==null&&E<m.length;E++){y.index>E?(M=y,y=null):M=y.sibling;var w=f(d,y,m[E],S);if(w===null){y===null&&(y=M);break}n&&y&&w.alternate===null&&e(d,y),x=s(w,x,E),A===null?T=w:A.sibling=w,A=w,y=M}if(E===m.length)return t(d,y),jt&&Is(d,E),T;if(y===null){for(;E<m.length;E++)y=h(d,m[E],S),y!==null&&(x=s(y,x,E),A===null?T=y:A.sibling=y,A=y);return jt&&Is(d,E),T}for(y=i(d,y);E<m.length;E++)M=p(y,d,E,m[E],S),M!==null&&(n&&M.alternate!==null&&y.delete(M.key===null?E:M.key),x=s(M,x,E),A===null?T=M:A.sibling=M,A=M);return n&&y.forEach(function(L){return e(d,L)}),jt&&Is(d,E),T}function _(d,x,m,S){var T=Pa(m);if(typeof T!="function")throw Error(Te(150));if(m=T.call(m),m==null)throw Error(Te(151));for(var A=T=null,y=x,E=x=0,M=null,w=m.next();y!==null&&!w.done;E++,w=m.next()){y.index>E?(M=y,y=null):M=y.sibling;var L=f(d,y,w.value,S);if(L===null){y===null&&(y=M);break}n&&y&&L.alternate===null&&e(d,y),x=s(L,x,E),A===null?T=L:A.sibling=L,A=L,y=M}if(w.done)return t(d,y),jt&&Is(d,E),T;if(y===null){for(;!w.done;E++,w=m.next())w=h(d,w.value,S),w!==null&&(x=s(w,x,E),A===null?T=w:A.sibling=w,A=w);return jt&&Is(d,E),T}for(y=i(d,y);!w.done;E++,w=m.next())w=p(y,d,E,w.value,S),w!==null&&(n&&w.alternate!==null&&y.delete(w.key===null?E:w.key),x=s(w,x,E),A===null?T=w:A.sibling=w,A=w);return n&&y.forEach(function(k){return e(d,k)}),jt&&Is(d,E),T}function v(d,x,m,S){if(typeof m=="object"&&m!==null&&m.type===Fo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jl:e:{for(var T=m.key,A=x;A!==null;){if(A.key===T){if(T=m.type,T===Fo){if(A.tag===7){t(d,A.sibling),x=r(A,m.props.children),x.return=d,d=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qr&&n0(T)===A.type){t(d,A.sibling),x=r(A,m.props),x.ref=Oa(d,A,m),x.return=d,d=x;break e}t(d,A);break}else e(d,A);A=A.sibling}m.type===Fo?(x=Ys(m.props.children,d.mode,S,m.key),x.return=d,d=x):(S=du(m.type,m.key,m.props,null,d.mode,S),S.ref=Oa(d,x,m),S.return=d,d=S)}return o(d);case zo:e:{for(A=m.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){t(d,x.sibling),x=r(x,m.children||[]),x.return=d,d=x;break e}else{t(d,x);break}else e(d,x);x=x.sibling}x=xh(m,d.mode,S),x.return=d,d=x}return o(d);case qr:return A=m._init,v(d,x,A(m._payload),S)}if(Za(m))return g(d,x,m,S);if(Pa(m))return _(d,x,m,S);cc(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,x!==null&&x.tag===6?(t(d,x.sibling),x=r(x,m),x.return=d,d=x):(t(d,x),x=yh(m,d.mode,S),x.return=d,d=x),o(d)):t(d,x)}return v}var ha=Wx(!0),Xx=Wx(!1),Uu=_s(null),Ou=null,jo=null,wm=null;function Em(){wm=jo=Ou=null}function Tm(n){var e=Uu.current;Wt(Uu),n._currentValue=e}function Vd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ia(n,e){Ou=n,wm=jo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kn=!0),n.firstContext=null)}function Ei(n){var e=n._currentValue;if(wm!==n)if(n={context:n,memoizedValue:e,next:null},jo===null){if(Ou===null)throw Error(Te(308));jo=n,Ou.dependencies={lanes:0,firstContext:n}}else jo=jo.next=n;return e}var Bs=null;function bm(n){Bs===null?Bs=[n]:Bs.push(n)}function jx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,bm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Dr(n,i)}function Dr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Kr=!1;function Am(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,At&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Dr(n,t)}return r=i.interleaved,r===null?(e.next=e,bm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Dr(n,t)}function au(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hm(n,t)}}function i0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function zu(n,e,t,i){var r=n.updateQueue;Kr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=en({},h,f);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Js|=o,n.lanes=o,n.memoizedState=h}}function r0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Te(191,r));r.call(i)}}}var Yl={},rr=_s(Yl),Rl=_s(Yl),Ll=_s(Yl);function Hs(n){if(n===Yl)throw Error(Te(174));return n}function Cm(n,e){switch(Bt(Ll,e),Bt(Rl,n),Bt(rr,Yl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Md(e,n)}Wt(rr),Bt(rr,e)}function da(){Wt(rr),Wt(Rl),Wt(Ll)}function $x(n){Hs(Ll.current);var e=Hs(rr.current),t=Md(e,n.type);e!==t&&(Bt(Rl,n),Bt(rr,t))}function Rm(n){Rl.current===n&&(Wt(rr),Wt(Rl))}var Kt=_s(0);function Fu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hh=[];function Lm(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var lu=Or.ReactCurrentDispatcher,dh=Or.ReactCurrentBatchConfig,Zs=0,Qt=null,cn=null,mn=null,ku=!1,cl=!1,Pl=0,B1=0;function Rn(){throw Error(Te(321))}function Pm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ji(n[t],e[t]))return!1;return!0}function Dm(n,e,t,i,r,s){if(Zs=s,Qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lu.current=n===null||n.memoizedState===null?W1:X1,n=t(i,r),cl){s=0;do{if(cl=!1,Pl=0,25<=s)throw Error(Te(301));s+=1,mn=cn=null,e.updateQueue=null,lu.current=j1,n=t(i,r)}while(cl)}if(lu.current=Bu,e=cn!==null&&cn.next!==null,Zs=0,mn=cn=Qt=null,ku=!1,e)throw Error(Te(300));return n}function Im(){var n=Pl!==0;return Pl=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Qt.memoizedState=mn=n:mn=mn.next=n,mn}function Ti(){if(cn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var e=mn===null?Qt.memoizedState:mn.next;if(e!==null)mn=e,cn=n;else{if(n===null)throw Error(Te(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?Qt.memoizedState=mn=n:mn=mn.next=n}return mn}function Dl(n,e){return typeof e=="function"?e(n):e}function ph(n){var e=Ti(),t=e.queue;if(t===null)throw Error(Te(311));t.lastRenderedReducer=n;var i=cn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Qt.lanes|=u,Js|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ji(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Qt.lanes|=s,Js|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function mh(n){var e=Ti(),t=e.queue;if(t===null)throw Error(Te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ji(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function qx(){}function Kx(n,e){var t=Qt,i=Ti(),r=e(),s=!ji(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Nm(Qx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mn!==null&&mn.memoizedState.tag&1){if(t.flags|=2048,Il(9,Jx.bind(null,t,i,r,e),void 0,null),gn===null)throw Error(Te(349));Zs&30||Zx(t,e,r)}return r}function Zx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Jx(n,e,t,i){e.value=t,e.getSnapshot=i,e_(e)&&t_(n)}function Qx(n,e,t){return t(function(){e_(e)&&t_(n)})}function e_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ji(n,t)}catch{return!0}}function t_(n){var e=Dr(n,1);e!==null&&Wi(e,n,1,-1)}function s0(n){var e=Ji();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:n},e.queue=n,n=n.dispatch=G1.bind(null,Qt,n),[e.memoizedState,n]}function Il(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function n_(){return Ti().memoizedState}function cu(n,e,t,i){var r=Ji();Qt.flags|=n,r.memoizedState=Il(1|e,t,void 0,i===void 0?null:i)}function vf(n,e,t,i){var r=Ti();i=i===void 0?null:i;var s=void 0;if(cn!==null){var o=cn.memoizedState;if(s=o.destroy,i!==null&&Pm(i,o.deps)){r.memoizedState=Il(e,t,s,i);return}}Qt.flags|=n,r.memoizedState=Il(1|e,t,s,i)}function o0(n,e){return cu(8390656,8,n,e)}function Nm(n,e){return vf(2048,8,n,e)}function i_(n,e){return vf(4,2,n,e)}function r_(n,e){return vf(4,4,n,e)}function s_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function o_(n,e,t){return t=t!=null?t.concat([n]):null,vf(4,4,s_.bind(null,e,n),t)}function Um(){}function a_(n,e){var t=Ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function l_(n,e){var t=Ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function c_(n,e,t){return Zs&21?(ji(t,e)||(t=px(),Qt.lanes|=t,Js|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=t)}function H1(n,e){var t=Dt;Dt=t!==0&&4>t?t:4,n(!0);var i=dh.transition;dh.transition={};try{n(!1),e()}finally{Dt=t,dh.transition=i}}function u_(){return Ti().memoizedState}function V1(n,e,t){var i=us(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},f_(n))h_(e,t);else if(t=jx(n,e,t,i),t!==null){var r=Vn();Wi(t,n,i,r),d_(t,e,i)}}function G1(n,e,t){var i=us(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(f_(n))h_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ji(a,o)){var l=e.interleaved;l===null?(r.next=r,bm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=jx(n,e,r,i),t!==null&&(r=Vn(),Wi(t,n,i,r),d_(t,e,i))}}function f_(n){var e=n.alternate;return n===Qt||e!==null&&e===Qt}function h_(n,e){cl=ku=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function d_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hm(n,t)}}var Bu={readContext:Ei,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},W1={readContext:Ei,useCallback:function(n,e){return Ji().memoizedState=[n,e===void 0?null:e],n},useContext:Ei,useEffect:o0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cu(4194308,4,s_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cu(4194308,4,n,e)},useInsertionEffect:function(n,e){return cu(4,2,n,e)},useMemo:function(n,e){var t=Ji();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ji();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=V1.bind(null,Qt,n),[i.memoizedState,n]},useRef:function(n){var e=Ji();return n={current:n},e.memoizedState=n},useState:s0,useDebugValue:Um,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=s0(!1),e=n[0];return n=H1.bind(null,n[1]),Ji().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Qt,r=Ji();if(jt){if(t===void 0)throw Error(Te(407));t=t()}else{if(t=e(),gn===null)throw Error(Te(349));Zs&30||Zx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,o0(Qx.bind(null,i,s,n),[n]),i.flags|=2048,Il(9,Jx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ji(),e=gn.identifierPrefix;if(jt){var t=Tr,i=Er;t=(i&~(1<<32-Gi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Pl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=B1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},X1={readContext:Ei,useCallback:a_,useContext:Ei,useEffect:Nm,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:ph,useRef:n_,useState:function(){return ph(Dl)},useDebugValue:Um,useDeferredValue:function(n){var e=Ti();return c_(e,cn.memoizedState,n)},useTransition:function(){var n=ph(Dl)[0],e=Ti().memoizedState;return[n,e]},useMutableSource:qx,useSyncExternalStore:Kx,useId:u_,unstable_isNewReconciler:!1},j1={readContext:Ei,useCallback:a_,useContext:Ei,useEffect:Nm,useImperativeHandle:o_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:mh,useRef:n_,useState:function(){return mh(Dl)},useDebugValue:Um,useDeferredValue:function(n){var e=Ti();return cn===null?e.memoizedState=n:c_(e,cn.memoizedState,n)},useTransition:function(){var n=mh(Dl)[0],e=Ti().memoizedState;return[n,e]},useMutableSource:qx,useSyncExternalStore:Kx,useId:u_,unstable_isNewReconciler:!1};function Ii(n,e){if(n&&n.defaultProps){e=en({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Gd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:en({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yf={isMounted:function(n){return(n=n._reactInternals)?io(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=us(n),s=Ar(i,r);s.payload=e,t!=null&&(s.callback=t),e=ls(n,s,r),e!==null&&(Wi(e,n,r,i),au(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=us(n),s=Ar(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ls(n,s,r),e!==null&&(Wi(e,n,r,i),au(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=us(n),r=Ar(t,i);r.tag=2,e!=null&&(r.callback=e),e=ls(n,r,i),e!==null&&(Wi(e,n,i,t),au(e,n,i))}};function a0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Tl(t,i)||!Tl(r,s):!0}function p_(n,e,t){var i=!1,r=gs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ei(s):(r=Jn(e)?qs:zn.current,i=e.contextTypes,s=(i=i!=null)?ua(n,r):gs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function l0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yf.enqueueReplaceState(e,e.state,null)}function Wd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Am(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ei(s):(s=Jn(e)?qs:zn.current,r.context=ua(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yf.enqueueReplaceState(r,r.state,null),zu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function pa(n,e){try{var t="",i=e;do t+=_M(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function gh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Xd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Y1=typeof WeakMap=="function"?WeakMap:Map;function m_(n,e,t){t=Ar(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Vu||(Vu=!0,tp=i),Xd(n,e)},t}function g_(n,e,t){t=Ar(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Xd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xd(n,e),typeof i!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function c0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Y1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aw.bind(null,n,e,t),e.then(n,n))}function u0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function f0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ar(-1,1),e.tag=2,ls(t,e,1))),t.lanes|=1),n)}var $1=Or.ReactCurrentOwner,Kn=!1;function Hn(n,e,t,i){e.child=n===null?Xx(e,null,t,i):ha(e,n.child,t,i)}function h0(n,e,t,i,r){t=t.render;var s=e.ref;return ia(e,r),i=Dm(n,e,t,i,s,r),t=Im(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ir(n,e,r)):(jt&&t&&_m(e),e.flags|=1,Hn(n,e,i,r),e.child)}function d0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,v_(n,e,s,i,r)):(n=du(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Tl,t(o,i)&&n.ref===e.ref)return Ir(n,e,r)}return e.flags|=1,n=fs(s,i),n.ref=e.ref,n.return=e,e.child=n}function v_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Tl(s,i)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kn=!0);else return e.lanes=n.lanes,Ir(n,e,r)}return jd(n,e,t,i,r)}function y_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt($o,oi),oi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Bt($o,oi),oi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Bt($o,oi),oi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Bt($o,oi),oi|=i;return Hn(n,e,r,t),e.child}function x_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jd(n,e,t,i,r){var s=Jn(t)?qs:zn.current;return s=ua(e,s),ia(e,r),t=Dm(n,e,t,i,s,r),i=Im(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ir(n,e,r)):(jt&&i&&_m(e),e.flags|=1,Hn(n,e,t,r),e.child)}function p0(n,e,t,i,r){if(Jn(t)){var s=!0;Du(e)}else s=!1;if(ia(e,r),e.stateNode===null)uu(n,e),p_(e,t,i),Wd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ei(c):(c=Jn(t)?qs:zn.current,c=ua(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&l0(e,o,i,c),Kr=!1;var f=e.memoizedState;o.state=f,zu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||Kr?(typeof u=="function"&&(Gd(e,t,u,i),l=e.memoizedState),(a=Kr||a0(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ii(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ei(l):(l=Jn(t)?qs:zn.current,l=ua(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&l0(e,o,i,l),Kr=!1,f=e.memoizedState,o.state=f,zu(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||Zn.current||Kr?(typeof p=="function"&&(Gd(e,t,p,i),g=e.memoizedState),(c=Kr||a0(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Yd(n,e,t,i,s,r)}function Yd(n,e,t,i,r,s){x_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qg(e,t,!1),Ir(n,e,s);i=e.stateNode,$1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ha(e,n.child,null,s),e.child=ha(e,null,a,s)):Hn(n,e,a,s),e.memoizedState=i.state,r&&Qg(e,t,!0),e.child}function __(n){var e=n.stateNode;e.pendingContext?Jg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jg(n,e.context,!1),Cm(n,e.containerInfo)}function m0(n,e,t,i,r){return fa(),Mm(r),e.flags|=256,Hn(n,e,t,i),e.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function qd(n){return{baseLanes:n,cachePool:null,transitions:null}}function S_(n,e,t){var i=e.pendingProps,r=Kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Bt(Kt,r&1),n===null)return Hd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sf(o,i,0,null),n=Ys(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=qd(t),e.memoizedState=$d,n):Om(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return q1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fs(a,s):(s=Ys(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?qd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=$d,i}return s=n.child,n=s.sibling,i=fs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Om(n,e){return e=Sf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uc(n,e,t,i){return i!==null&&Mm(i),ha(e,n.child,null,t),n=Om(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function q1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=gh(Error(Te(422))),uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sf({mode:"visible",children:i.children},r,0,null),s=Ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ha(e,n.child,null,o),e.child.memoizedState=qd(o),e.memoizedState=$d,s);if(!(e.mode&1))return uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Te(419)),i=gh(s,i,void 0),uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kn||a){if(i=gn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Dr(n,r),Wi(i,n,r,-1))}return Vm(),i=gh(Error(Te(421))),uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,fi=as(r.nextSibling),hi=e,jt=!0,zi=null,n!==null&&(_i[Si++]=Er,_i[Si++]=Tr,_i[Si++]=Ks,Er=n.id,Tr=n.overflow,Ks=e),e=Om(e,i.children),e.flags|=4096,e)}function g0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vd(n.return,e,t)}function vh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function M_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Hn(n,e,i.children,t),i=Kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&g0(n,t,e);else if(n.tag===19)g0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Bt(Kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Fu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),vh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Fu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}vh(e,!0,t,null,s);break;case"together":vh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ir(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Js|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Te(153));if(e.child!==null){for(n=e.child,t=fs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=fs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function K1(n,e,t){switch(e.tag){case 3:__(e),fa();break;case 5:$x(e);break;case 1:Jn(e.type)&&Du(e);break;case 4:Cm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Bt(Uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Bt(Kt,Kt.current&1),e.flags|=128,null):t&e.child.childLanes?S_(n,e,t):(Bt(Kt,Kt.current&1),n=Ir(n,e,t),n!==null?n.sibling:null);Bt(Kt,Kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return M_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Bt(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,y_(n,e,t)}return Ir(n,e,t)}var w_,Kd,E_,T_;w_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Kd=function(){};E_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hs(rr.current);var s=null;switch(t){case"input":r=yd(n,r),i=yd(n,i),s=[];break;case"select":r=en({},r,{value:void 0}),i=en({},i,{value:void 0}),s=[];break;case"textarea":r=Sd(n,r),i=Sd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Lu)}wd(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Vt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T_=function(n,e,t,i){t!==i&&(e.flags|=4)};function za(n,e){if(!jt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Z1(n,e,t){var i=e.pendingProps;switch(Sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(e),null;case 1:return Jn(e.type)&&Pu(),Ln(e),null;case 3:return i=e.stateNode,da(),Wt(Zn),Wt(zn),Lm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zi!==null&&(rp(zi),zi=null))),Kd(n,e),Ln(e),null;case 5:Rm(e);var r=Hs(Ll.current);if(t=e.type,n!==null&&e.stateNode!=null)E_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Te(166));return Ln(e),null}if(n=Hs(rr.current),lc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Qi]=e,i[Cl]=s,n=(e.mode&1)!==0,t){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Tg(i,s),Vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Vt("invalid",i);break;case"textarea":Ag(i,s),Vt("invalid",i)}wd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(i.textContent,a,n),r=["children",""+a]):yl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Vt("scroll",i)}switch(t){case"input":Ql(i),bg(i,s,!0);break;case"textarea":Ql(i),Cg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Lu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Qy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Qi]=e,n[Cl]=i,w_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ed(t,i),t){case"dialog":Vt("cancel",n),Vt("close",n),r=i;break;case"iframe":case"object":case"embed":Vt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],n);r=i;break;case"source":Vt("error",n),r=i;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),r=i;break;case"details":Vt("toggle",n),r=i;break;case"input":Tg(n,i),r=yd(n,i),Vt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=en({},i,{value:void 0}),Vt("invalid",n);break;case"textarea":Ag(n,i),r=Sd(n,i),Vt("invalid",n);break;default:r=i}wd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ex(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&xl(n,l):typeof l=="number"&&xl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Vt("scroll",n):l!=null&&om(n,s,l,o))}switch(t){case"input":Ql(n),bg(n,i,!1);break;case"textarea":Ql(n),Cg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ms(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qo(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Lu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ln(e),null;case 6:if(n&&e.stateNode!=null)T_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Te(166));if(t=Hs(Ll.current),Hs(rr.current),lc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Qi]=e,(s=i.nodeValue!==t)&&(n=hi,n!==null))switch(n.tag){case 3:ac(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ac(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Qi]=e,e.stateNode=i}return Ln(e),null;case 13:if(Wt(Kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&fi!==null&&e.mode&1&&!(e.flags&128))Gx(),fa(),e.flags|=98560,s=!1;else if(s=lc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Te(317));s[Qi]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ln(e),s=!1}else zi!==null&&(rp(zi),zi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Kt.current&1?fn===0&&(fn=3):Vm())),e.updateQueue!==null&&(e.flags|=4),Ln(e),null);case 4:return da(),Kd(n,e),n===null&&bl(e.stateNode.containerInfo),Ln(e),null;case 10:return Tm(e.type._context),Ln(e),null;case 17:return Jn(e.type)&&Pu(),Ln(e),null;case 19:if(Wt(Kt),s=e.memoizedState,s===null)return Ln(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)za(s,!1);else{if(fn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Fu(n),o!==null){for(e.flags|=128,za(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Bt(Kt,Kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&rn()>ma&&(e.flags|=128,i=!0,za(s,!1),e.lanes=4194304)}else{if(!i)if(n=Fu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),za(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!jt)return Ln(e),null}else 2*rn()-s.renderingStartTime>ma&&t!==1073741824&&(e.flags|=128,i=!0,za(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rn(),e.sibling=null,t=Kt.current,Bt(Kt,i?t&1|2:t&1),e):(Ln(e),null);case 22:case 23:return Hm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?oi&1073741824&&(Ln(e),e.subtreeFlags&6&&(e.flags|=8192)):Ln(e),null;case 24:return null;case 25:return null}throw Error(Te(156,e.tag))}function J1(n,e){switch(Sm(e),e.tag){case 1:return Jn(e.type)&&Pu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return da(),Wt(Zn),Wt(zn),Lm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rm(e),null;case 13:if(Wt(Kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Te(340));fa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Wt(Kt),null;case 4:return da(),null;case 10:return Tm(e.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var fc=!1,In=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Yo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){tn(n,e,i)}else t.current=null}function Zd(n,e,t){try{t()}catch(i){tn(n,e,i)}}var v0=!1;function ew(n,e){if(Nd=Au,n=Lx(),xm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ud={focusedElem:n,selectionRange:t},Au=!1,Ye=e;Ye!==null;)if(e=Ye,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ye=n;else for(;Ye!==null;){e=Ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,v=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ii(e.type,_),v);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Te(163))}}catch(S){tn(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ye=n;break}Ye=e.return}return g=v0,v0=!1,g}function ul(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zd(e,t,s)}r=r.next}while(r!==i)}}function xf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Jd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function b_(n){var e=n.alternate;e!==null&&(n.alternate=null,b_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Qi],delete e[Cl],delete e[Fd],delete e[O1],delete e[z1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function A_(n){return n.tag===5||n.tag===3||n.tag===4}function y0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||A_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Lu));else if(i!==4&&(n=n.child,n!==null))for(Qd(n,e,t),n=n.sibling;n!==null;)Qd(n,e,t),n=n.sibling}function ep(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ep(n,e,t),n=n.sibling;n!==null;)ep(n,e,t),n=n.sibling}var Tn=null,Ni=!1;function kr(n,e,t){for(t=t.child;t!==null;)C_(n,e,t),t=t.sibling}function C_(n,e,t){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(ff,t)}catch{}switch(t.tag){case 5:In||Yo(t,e);case 6:var i=Tn,r=Ni;Tn=null,kr(n,e,t),Tn=i,Ni=r,Tn!==null&&(Ni?(n=Tn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tn.removeChild(t.stateNode));break;case 18:Tn!==null&&(Ni?(n=Tn,t=t.stateNode,n.nodeType===8?uh(n.parentNode,t):n.nodeType===1&&uh(n,t),wl(n)):uh(Tn,t.stateNode));break;case 4:i=Tn,r=Ni,Tn=t.stateNode.containerInfo,Ni=!0,kr(n,e,t),Tn=i,Ni=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(t,e,o),r=r.next}while(r!==i)}kr(n,e,t);break;case 1:if(!In&&(Yo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){tn(t,e,a)}kr(n,e,t);break;case 21:kr(n,e,t);break;case 22:t.mode&1?(In=(i=In)||t.memoizedState!==null,kr(n,e,t),In=i):kr(n,e,t);break;default:kr(n,e,t)}}function x0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Q1),e.forEach(function(i){var r=cw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tn=a.stateNode,Ni=!1;break e;case 3:Tn=a.stateNode.containerInfo,Ni=!0;break e;case 4:Tn=a.stateNode.containerInfo,Ni=!0;break e}a=a.return}if(Tn===null)throw Error(Te(160));C_(s,o,r),Tn=null,Ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){tn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R_(e,n),e=e.sibling}function R_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ai(e,n),$i(n),i&4){try{ul(3,n,n.return),xf(3,n)}catch(_){tn(n,n.return,_)}try{ul(5,n,n.return)}catch(_){tn(n,n.return,_)}}break;case 1:Ai(e,n),$i(n),i&512&&t!==null&&Yo(t,t.return);break;case 5:if(Ai(e,n),$i(n),i&512&&t!==null&&Yo(t,t.return),n.flags&32){var r=n.stateNode;try{xl(r,"")}catch(_){tn(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zy(r,s),Ed(a,o);var c=Ed(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?nx(r,h):u==="dangerouslySetInnerHTML"?ex(r,h):u==="children"?xl(r,h):om(r,u,h,c)}switch(a){case"input":xd(r,s);break;case"textarea":Jy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qo(r,!!s.multiple,s.defaultValue,!0):Qo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Cl]=s}catch(_){tn(n,n.return,_)}}break;case 6:if(Ai(e,n),$i(n),i&4){if(n.stateNode===null)throw Error(Te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){tn(n,n.return,_)}}break;case 3:if(Ai(e,n),$i(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{wl(e.containerInfo)}catch(_){tn(n,n.return,_)}break;case 4:Ai(e,n),$i(n);break;case 13:Ai(e,n),$i(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(km=rn())),i&4&&x0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(In=(c=In)||u,Ai(e,n),In=c):Ai(e,n),$i(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ye=n,u=n.child;u!==null;){for(h=Ye=u;Ye!==null;){switch(f=Ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:ul(4,f,f.return);break;case 1:Yo(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){tn(i,t,_)}}break;case 5:Yo(f,f.return);break;case 22:if(f.memoizedState!==null){S0(h);continue}}p!==null?(p.return=f,Ye=p):S0(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tx("display",o))}catch(_){tn(n,n.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){tn(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ai(e,n),$i(n),i&4&&x0(n);break;case 21:break;default:Ai(e,n),$i(n)}}function $i(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(A_(t)){var i=t;break e}t=t.return}throw Error(Te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xl(r,""),i.flags&=-33);var s=y0(n);ep(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=y0(n);Qd(n,a,o);break;default:throw Error(Te(161))}}catch(l){tn(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tw(n,e,t){Ye=n,L_(n)}function L_(n,e,t){for(var i=(n.mode&1)!==0;Ye!==null;){var r=Ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||fc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=fc;var c=In;if(fc=o,(In=l)&&!c)for(Ye=r;Ye!==null;)o=Ye,l=o.child,o.tag===22&&o.memoizedState!==null?M0(r):l!==null?(l.return=o,Ye=l):M0(r);for(;s!==null;)Ye=s,L_(s),s=s.sibling;Ye=r,fc=a,In=c}_0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ye=s):_0(n)}}function _0(n){for(;Ye!==null;){var e=Ye;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||xf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ii(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&r0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}r0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&wl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Te(163))}In||e.flags&512&&Jd(e)}catch(f){tn(e,e.return,f)}}if(e===n){Ye=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ye=t;break}Ye=e.return}}function S0(n){for(;Ye!==null;){var e=Ye;if(e===n){Ye=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ye=t;break}Ye=e.return}}function M0(n){for(;Ye!==null;){var e=Ye;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xf(4,e)}catch(l){tn(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tn(e,r,l)}}var s=e.return;try{Jd(e)}catch(l){tn(e,s,l)}break;case 5:var o=e.return;try{Jd(e)}catch(l){tn(e,o,l)}}}catch(l){tn(e,e.return,l)}if(e===n){Ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ye=a;break}Ye=e.return}}var nw=Math.ceil,Hu=Or.ReactCurrentDispatcher,zm=Or.ReactCurrentOwner,wi=Or.ReactCurrentBatchConfig,At=0,gn=null,on=null,An=0,oi=0,$o=_s(0),fn=0,Nl=null,Js=0,_f=0,Fm=0,fl=null,$n=null,km=0,ma=1/0,_r=null,Vu=!1,tp=null,cs=null,hc=!1,ns=null,Gu=0,hl=0,np=null,fu=-1,hu=0;function Vn(){return At&6?rn():fu!==-1?fu:fu=rn()}function us(n){return n.mode&1?At&2&&An!==0?An&-An:k1.transition!==null?(hu===0&&(hu=px()),hu):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:Sx(n.type)),n):1}function Wi(n,e,t,i){if(50<hl)throw hl=0,np=null,Error(Te(185));Wl(n,t,i),(!(At&2)||n!==gn)&&(n===gn&&(!(At&2)&&(_f|=t),fn===4&&Qr(n,An)),Qn(n,i),t===1&&At===0&&!(e.mode&1)&&(ma=rn()+500,gf&&Ss()))}function Qn(n,e){var t=n.callbackNode;kM(n,e);var i=bu(n,n===gn?An:0);if(i===0)t!==null&&Pg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Pg(t),e===1)n.tag===0?F1(w0.bind(null,n)):Bx(w0.bind(null,n)),N1(function(){!(At&6)&&Ss()}),t=null;else{switch(mx(i)){case 1:t=fm;break;case 4:t=hx;break;case 16:t=Tu;break;case 536870912:t=dx;break;default:t=Tu}t=F_(t,P_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function P_(n,e){if(fu=-1,hu=0,At&6)throw Error(Te(327));var t=n.callbackNode;if(ra()&&n.callbackNode!==t)return null;var i=bu(n,n===gn?An:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Wu(n,i);else{e=i;var r=At;At|=2;var s=I_();(gn!==n||An!==e)&&(_r=null,ma=rn()+500,js(n,e));do try{sw();break}catch(a){D_(n,a)}while(!0);Em(),Hu.current=s,At=r,on!==null?e=0:(gn=null,An=0,e=fn)}if(e!==0){if(e===2&&(r=Rd(n),r!==0&&(i=r,e=ip(n,r))),e===1)throw t=Nl,js(n,0),Qr(n,i),Qn(n,rn()),t;if(e===6)Qr(n,i);else{if(r=n.current.alternate,!(i&30)&&!iw(r)&&(e=Wu(n,i),e===2&&(s=Rd(n),s!==0&&(i=s,e=ip(n,s))),e===1))throw t=Nl,js(n,0),Qr(n,i),Qn(n,rn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Te(345));case 2:Ns(n,$n,_r);break;case 3:if(Qr(n,i),(i&130023424)===i&&(e=km+500-rn(),10<e)){if(bu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zd(Ns.bind(null,n,$n,_r),e);break}Ns(n,$n,_r);break;case 4:if(Qr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Gi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=rn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nw(i/1960))-i,10<i){n.timeoutHandle=zd(Ns.bind(null,n,$n,_r),i);break}Ns(n,$n,_r);break;case 5:Ns(n,$n,_r);break;default:throw Error(Te(329))}}}return Qn(n,rn()),n.callbackNode===t?P_.bind(null,n):null}function ip(n,e){var t=fl;return n.current.memoizedState.isDehydrated&&(js(n,e).flags|=256),n=Wu(n,e),n!==2&&(e=$n,$n=t,e!==null&&rp(e)),n}function rp(n){$n===null?$n=n:$n.push.apply($n,n)}function iw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ji(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(n,e){for(e&=~Fm,e&=~_f,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Gi(e),i=1<<t;n[t]=-1,e&=~i}}function w0(n){if(At&6)throw Error(Te(327));ra();var e=bu(n,0);if(!(e&1))return Qn(n,rn()),null;var t=Wu(n,e);if(n.tag!==0&&t===2){var i=Rd(n);i!==0&&(e=i,t=ip(n,i))}if(t===1)throw t=Nl,js(n,0),Qr(n,e),Qn(n,rn()),t;if(t===6)throw Error(Te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ns(n,$n,_r),Qn(n,rn()),null}function Bm(n,e){var t=At;At|=1;try{return n(e)}finally{At=t,At===0&&(ma=rn()+500,gf&&Ss())}}function Qs(n){ns!==null&&ns.tag===0&&!(At&6)&&ra();var e=At;At|=1;var t=wi.transition,i=Dt;try{if(wi.transition=null,Dt=1,n)return n()}finally{Dt=i,wi.transition=t,At=e,!(At&6)&&Ss()}}function Hm(){oi=$o.current,Wt($o)}function js(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,I1(t)),on!==null)for(t=on.return;t!==null;){var i=t;switch(Sm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pu();break;case 3:da(),Wt(Zn),Wt(zn),Lm();break;case 5:Rm(i);break;case 4:da();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:Tm(i.type._context);break;case 22:case 23:Hm()}t=t.return}if(gn=n,on=n=fs(n.current,null),An=oi=e,fn=0,Nl=null,Fm=_f=Js=0,$n=fl=null,Bs!==null){for(e=0;e<Bs.length;e++)if(t=Bs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Bs=null}return n}function D_(n,e){do{var t=on;try{if(Em(),lu.current=Bu,ku){for(var i=Qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ku=!1}if(Zs=0,mn=cn=Qt=null,cl=!1,Pl=0,zm.current=null,t===null||t.return===null){fn=1,Nl=e,on=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=An,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=u0(o);if(p!==null){p.flags&=-257,f0(p,o,a,s,e),p.mode&1&&c0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){c0(s,c,e),Vm();break e}l=Error(Te(426))}}else if(jt&&a.mode&1){var v=u0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),f0(v,o,a,s,e),Mm(pa(l,a));break e}}s=l=pa(l,a),fn!==4&&(fn=2),fl===null?fl=[s]:fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=m_(s,l,e);i0(s,d);break e;case 1:a=l;var x=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cs===null||!cs.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g_(s,a,e);i0(s,S);break e}}s=s.return}while(s!==null)}U_(t)}catch(T){e=T,on===t&&t!==null&&(on=t=t.return);continue}break}while(!0)}function I_(){var n=Hu.current;return Hu.current=Bu,n===null?Bu:n}function Vm(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||!(Js&268435455)&&!(_f&268435455)||Qr(gn,An)}function Wu(n,e){var t=At;At|=2;var i=I_();(gn!==n||An!==e)&&(_r=null,js(n,e));do try{rw();break}catch(r){D_(n,r)}while(!0);if(Em(),At=t,Hu.current=i,on!==null)throw Error(Te(261));return gn=null,An=0,fn}function rw(){for(;on!==null;)N_(on)}function sw(){for(;on!==null&&!LM();)N_(on)}function N_(n){var e=z_(n.alternate,n,oi);n.memoizedProps=n.pendingProps,e===null?U_(n):on=e,zm.current=null}function U_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=J1(t,e),t!==null){t.flags&=32767,on=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}else if(t=Z1(t,e,oi),t!==null){on=t;return}if(e=e.sibling,e!==null){on=e;return}on=e=n}while(e!==null);fn===0&&(fn=5)}function Ns(n,e,t){var i=Dt,r=wi.transition;try{wi.transition=null,Dt=1,ow(n,e,t,i)}finally{wi.transition=r,Dt=i}return null}function ow(n,e,t,i){do ra();while(ns!==null);if(At&6)throw Error(Te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(BM(n,s),n===gn&&(on=gn=null,An=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,F_(Tu,function(){return ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=wi.transition,wi.transition=null;var o=Dt;Dt=1;var a=At;At|=4,zm.current=null,ew(n,t),R_(t,n),b1(Ud),Au=!!Nd,Ud=Nd=null,n.current=t,tw(t),PM(),At=a,Dt=o,wi.transition=s}else n.current=t;if(hc&&(hc=!1,ns=n,Gu=r),s=n.pendingLanes,s===0&&(cs=null),NM(t.stateNode),Qn(n,rn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vu)throw Vu=!1,n=tp,tp=null,n;return Gu&1&&n.tag!==0&&ra(),s=n.pendingLanes,s&1?n===np?hl++:(hl=0,np=n):hl=0,Ss(),null}function ra(){if(ns!==null){var n=mx(Gu),e=wi.transition,t=Dt;try{if(wi.transition=null,Dt=16>n?16:n,ns===null)var i=!1;else{if(n=ns,ns=null,Gu=0,At&6)throw Error(Te(331));var r=At;for(At|=4,Ye=n.current;Ye!==null;){var s=Ye,o=s.child;if(Ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ye=c;Ye!==null;){var u=Ye;switch(u.tag){case 0:case 11:case 15:ul(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ye=h;else for(;Ye!==null;){u=Ye;var f=u.sibling,p=u.return;if(b_(u),u===c){Ye=null;break}if(f!==null){f.return=p,Ye=f;break}Ye=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ye=o;else e:for(;Ye!==null;){if(s=Ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ul(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ye=d;break e}Ye=s.return}}var x=n.current;for(Ye=x;Ye!==null;){o=Ye;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Ye=m;else e:for(o=x;Ye!==null;){if(a=Ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xf(9,a)}}catch(T){tn(a,a.return,T)}if(a===o){Ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ye=S;break e}Ye=a.return}}if(At=r,Ss(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(ff,n)}catch{}i=!0}return i}finally{Dt=t,wi.transition=e}}return!1}function E0(n,e,t){e=pa(t,e),e=m_(n,e,1),n=ls(n,e,1),e=Vn(),n!==null&&(Wl(n,1,e),Qn(n,e))}function tn(n,e,t){if(n.tag===3)E0(n,n,t);else for(;e!==null;){if(e.tag===3){E0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cs===null||!cs.has(i))){n=pa(t,n),n=g_(e,n,1),e=ls(e,n,1),n=Vn(),e!==null&&(Wl(e,1,n),Qn(e,n));break}}e=e.return}}function aw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,gn===n&&(An&t)===t&&(fn===4||fn===3&&(An&130023424)===An&&500>rn()-km?js(n,0):Fm|=t),Qn(n,e)}function O_(n,e){e===0&&(n.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var t=Vn();n=Dr(n,e),n!==null&&(Wl(n,e,t),Qn(n,t))}function lw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),O_(n,t)}function cw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Te(314))}i!==null&&i.delete(e),O_(n,t)}var z_;z_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kn=!1,K1(n,e,t);Kn=!!(n.flags&131072)}else Kn=!1,jt&&e.flags&1048576&&Hx(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uu(n,e),n=e.pendingProps;var r=ua(e,zn.current);ia(e,t),r=Dm(null,e,i,n,r,t);var s=Im();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Du(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Am(e),r.updater=yf,e.stateNode=r,r._reactInternals=e,Wd(e,i,n,t),e=Yd(null,e,i,!0,s,t)):(e.tag=0,jt&&s&&_m(e),Hn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(uu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fw(i),n=Ii(i,n),r){case 0:e=jd(null,e,i,n,t);break e;case 1:e=p0(null,e,i,n,t);break e;case 11:e=h0(null,e,i,n,t);break e;case 14:e=d0(null,e,i,Ii(i.type,n),t);break e}throw Error(Te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),jd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),p0(n,e,i,r,t);case 3:e:{if(__(e),n===null)throw Error(Te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yx(n,e),zu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=pa(Error(Te(423)),e),e=m0(n,e,i,t,r);break e}else if(i!==r){r=pa(Error(Te(424)),e),e=m0(n,e,i,t,r);break e}else for(fi=as(e.stateNode.containerInfo.firstChild),hi=e,jt=!0,zi=null,t=Xx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(fa(),i===r){e=Ir(n,e,t);break e}Hn(n,e,i,t)}e=e.child}return e;case 5:return $x(e),n===null&&Hd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Od(i,r)?o=null:s!==null&&Od(i,s)&&(e.flags|=32),x_(n,e),Hn(n,e,o,t),e.child;case 6:return n===null&&Hd(e),null;case 13:return S_(n,e,t);case 4:return Cm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ha(e,null,i,t):Hn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),h0(n,e,i,r,t);case 7:return Hn(n,e,e.pendingProps,t),e.child;case 8:return Hn(n,e,e.pendingProps.children,t),e.child;case 12:return Hn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Bt(Uu,i._currentValue),i._currentValue=o,s!==null)if(ji(s.value,o)){if(s.children===r.children&&!Zn.current){e=Ir(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ar(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Vd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Vd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Hn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ia(e,t),r=Ei(r),i=i(r),e.flags|=1,Hn(n,e,i,t),e.child;case 14:return i=e.type,r=Ii(i,e.pendingProps),r=Ii(i.type,r),d0(n,e,i,r,t);case 15:return v_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ii(i,r),uu(n,e),e.tag=1,Jn(i)?(n=!0,Du(e)):n=!1,ia(e,t),p_(e,i,r),Wd(e,i,r,t),Yd(null,e,i,!0,n,t);case 19:return M_(n,e,t);case 22:return y_(n,e,t)}throw Error(Te(156,e.tag))};function F_(n,e){return fx(n,e)}function uw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,e,t,i){return new uw(n,e,t,i)}function Gm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fw(n){if(typeof n=="function")return Gm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===lm)return 11;if(n===cm)return 14}return 2}function fs(n,e){var t=n.alternate;return t===null?(t=Mi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function du(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Gm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Fo:return Ys(t.children,r,s,e);case am:o=8,r|=8;break;case pd:return n=Mi(12,t,e,r|2),n.elementType=pd,n.lanes=s,n;case md:return n=Mi(13,t,e,r),n.elementType=md,n.lanes=s,n;case gd:return n=Mi(19,t,e,r),n.elementType=gd,n.lanes=s,n;case $y:return Sf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jy:o=10;break e;case Yy:o=9;break e;case lm:o=11;break e;case cm:o=14;break e;case qr:o=16,i=null;break e}throw Error(Te(130,n==null?n:typeof n,""))}return e=Mi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ys(n,e,t,i){return n=Mi(7,n,i,e),n.lanes=t,n}function Sf(n,e,t,i){return n=Mi(22,n,i,e),n.elementType=$y,n.lanes=t,n.stateNode={isHidden:!1},n}function yh(n,e,t){return n=Mi(6,n,null,e),n.lanes=t,n}function xh(n,e,t){return e=Mi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function hw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qf(0),this.expirationTimes=Qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wm(n,e,t,i,r,s,o,a,l){return n=new hw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),n}function dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function k_(n){if(!n)return gs;n=n._reactInternals;e:{if(io(n)!==n||n.tag!==1)throw Error(Te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Te(171))}if(n.tag===1){var t=n.type;if(Jn(t))return kx(n,t,e)}return e}function B_(n,e,t,i,r,s,o,a,l){return n=Wm(t,i,!0,n,r,s,o,a,l),n.context=k_(null),t=n.current,i=Vn(),r=us(t),s=Ar(i,r),s.callback=e??null,ls(t,s,r),n.current.lanes=r,Wl(n,r,i),Qn(n,i),n}function Mf(n,e,t,i){var r=e.current,s=Vn(),o=us(r);return t=k_(t),e.context===null?e.context=t:e.pendingContext=t,e=Ar(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ls(r,e,o),n!==null&&(Wi(n,r,o,s),au(n,r,o)),o}function Xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function T0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Xm(n,e){T0(n,e),(n=n.alternate)&&T0(n,e)}function pw(){return null}var H_=typeof reportError=="function"?reportError:function(n){console.error(n)};function jm(n){this._internalRoot=n}wf.prototype.render=jm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Te(409));Mf(n,e,null,null)};wf.prototype.unmount=jm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qs(function(){Mf(null,n,null,null)}),e[Pr]=null}};function wf(n){this._internalRoot=n}wf.prototype.unstable_scheduleHydration=function(n){if(n){var e=yx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Jr.length&&e!==0&&e<Jr[t].priority;t++);Jr.splice(t,0,n),t===0&&_x(n)}};function Ym(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function b0(){}function mw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Xu(o);s.call(c)}}var o=B_(e,i,n,0,null,!1,!1,"",b0);return n._reactRootContainer=o,n[Pr]=o.current,bl(n.nodeType===8?n.parentNode:n),Qs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Xu(l);a.call(c)}}var l=Wm(n,0,!1,null,null,!1,!1,"",b0);return n._reactRootContainer=l,n[Pr]=l.current,bl(n.nodeType===8?n.parentNode:n),Qs(function(){Mf(e,l,t,i)}),l}function Tf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xu(o);a.call(l)}}Mf(e,o,n,r)}else o=mw(t,e,n,r,i);return Xu(o)}gx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ja(e.pendingLanes);t!==0&&(hm(e,t|1),Qn(e,rn()),!(At&6)&&(ma=rn()+500,Ss()))}break;case 13:Qs(function(){var i=Dr(n,1);if(i!==null){var r=Vn();Wi(i,n,1,r)}}),Xm(n,1)}};dm=function(n){if(n.tag===13){var e=Dr(n,134217728);if(e!==null){var t=Vn();Wi(e,n,134217728,t)}Xm(n,134217728)}};vx=function(n){if(n.tag===13){var e=us(n),t=Dr(n,e);if(t!==null){var i=Vn();Wi(t,n,e,i)}Xm(n,e)}};yx=function(){return Dt};xx=function(n,e){var t=Dt;try{return Dt=n,e()}finally{Dt=t}};bd=function(n,e,t){switch(e){case"input":if(xd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=mf(i);if(!r)throw Error(Te(90));Ky(i),xd(i,r)}}}break;case"textarea":Jy(n,t);break;case"select":e=t.value,e!=null&&Qo(n,!!t.multiple,e,!1)}};sx=Bm;ox=Qs;var gw={usingClientEntryPoint:!1,Events:[jl,Vo,mf,ix,rx,Bm]},Fa={findFiberByHostInstance:ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vw={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=cx(n),n===null?null:n.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ff=dc.inject(vw),ir=dc}catch{}}mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;mi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ym(e))throw Error(Te(200));return dw(n,e,null,t)};mi.createRoot=function(n,e){if(!Ym(n))throw Error(Te(299));var t=!1,i="",r=H_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wm(n,1,!1,null,null,t,!1,i,r),n[Pr]=e.current,bl(n.nodeType===8?n.parentNode:n),new jm(e)};mi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Te(188)):(n=Object.keys(n).join(","),Error(Te(268,n)));return n=cx(e),n=n===null?null:n.stateNode,n};mi.flushSync=function(n){return Qs(n)};mi.hydrate=function(n,e,t){if(!Ef(e))throw Error(Te(200));return Tf(null,n,e,!0,t)};mi.hydrateRoot=function(n,e,t){if(!Ym(n))throw Error(Te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=H_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=B_(e,null,n,1,t??null,r,!1,s,o),n[Pr]=e.current,bl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wf(e)};mi.render=function(n,e,t){if(!Ef(e))throw Error(Te(200));return Tf(null,n,e,!1,t)};mi.unmountComponentAtNode=function(n){if(!Ef(n))throw Error(Te(40));return n._reactRootContainer?(Qs(function(){Tf(null,null,n,!1,function(){n._reactRootContainer=null,n[Pr]=null})}),!0):!1};mi.unstable_batchedUpdates=Bm;mi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ef(t))throw Error(Te(200));if(n==null||n._reactInternals===void 0)throw Error(Te(38));return Tf(n,e,t,!1,i)};mi.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(n){console.error(n)}}V_(),Vy.exports=mi;var yw=Vy.exports,A0=yw;hd.createRoot=A0.createRoot,hd.hydrateRoot=A0.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $m="167",fo={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xw=0,C0=1,_w=2,G_=1,qm=2,xr=3,Xi=0,ei=1,kt=2,hs=0,ds=1,ga=2,R0=3,L0=4,Sw=5,Os=100,Mw=101,ww=102,Ew=103,Tw=104,bw=200,Aw=201,Cw=202,Rw=203,sp=204,op=205,Lw=206,Pw=207,Dw=208,Iw=209,Nw=210,Uw=211,Ow=212,zw=213,Fw=214,kw=0,Bw=1,Hw=2,ju=3,Vw=4,Gw=5,Ww=6,Xw=7,Km=0,jw=1,Yw=2,ps=0,$w=1,W_=2,qw=3,Kw=4,Zw=5,Jw=6,Qw=7,X_=300,va=301,ya=302,ap=303,lp=304,bf=306,cp=1e3,Vs=1001,up=1002,Nn=1003,eE=1004,pc=1005,Fi=1006,_h=1007,Gs=1008,tE=1008,Nr=1009,j_=1010,Y_=1011,Ul=1012,Zm=1013,eo=1014,nr=1015,$l=1016,Jm=1017,Qm=1018,xa=1020,$_=35902,q_=1021,K_=1022,Hi=1023,Z_=1024,J_=1025,sa=1026,_a=1027,Af=1028,eg=1029,Q_=1030,tg=1031,ng=1033,pu=33776,mu=33777,gu=33778,vu=33779,fp=35840,hp=35841,dp=35842,pp=35843,mp=36196,gp=37492,vp=37496,yp=37808,xp=37809,_p=37810,Sp=37811,Mp=37812,wp=37813,Ep=37814,Tp=37815,bp=37816,Ap=37817,Cp=37818,Rp=37819,Lp=37820,Pp=37821,yu=36492,Dp=36494,Ip=36495,eS=36283,Np=36284,Up=36285,Op=36286,nE=3200,iE=3201,ig=0,rE=1,es="",Ui="srgb",Ms="srgb-linear",rg="display-p3",Cf="display-p3-linear",Yu="linear",Gt="srgb",$u="rec709",qu="p3",ho=7680,P0=519,sE=512,oE=513,aE=514,tS=515,lE=516,cE=517,uE=518,fE=519,Sa=35044,D0="300 es",br=2e3,Ku=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let I0=1234567;const oa=Math.PI/180,Ol=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function sg(n,e){return(n%e+e)%e}function hE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function dE(n,e,t){return n!==e?(t-n)/(e-n):0}function dl(n,e,t){return(1-t)*n+t*e}function pE(n,e,t,i){return dl(n,e,1-Math.exp(-t*i))}function mE(n,e=1){return e-Math.abs(sg(n,e*2)-e)}function gE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function yE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xE(n,e){return n+Math.random()*(e-n)}function _E(n){return n*(.5-Math.random())}function SE(n){n!==void 0&&(I0=n);let e=I0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ME(n){return n*oa}function wE(n){return n*Ol}function EE(n){return(n&n-1)===0&&n!==0}function TE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function AE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ai={DEG2RAD:oa,RAD2DEG:Ol,generateUUID:sr,clamp:un,euclideanModulo:sg,mapLinear:hE,inverseLerp:dE,lerp:dl,damp:pE,pingpong:mE,smoothstep:gE,smootherstep:vE,randInt:yE,randFloat:xE,randFloatSpread:_E,seededRandom:SE,degToRad:ME,radToDeg:wE,isPowerOfTwo:EE,ceilPowerOfTwo:TE,floorPowerOfTwo:bE,setQuaternionFromProperEuler:AE,normalize:Pt,denormalize:ki};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,i,r,s,o,a,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],v=r[3],d=r[6],x=r[1],m=r[4],S=r[7],T=r[2],A=r[5],y=r[8];return s[0]=o*_+a*x+l*T,s[3]=o*v+a*m+l*A,s[6]=o*d+a*S+l*y,s[1]=c*_+u*x+h*T,s[4]=c*v+u*m+h*A,s[7]=c*d+u*S+h*y,s[2]=f*_+p*x+g*T,s[5]=f*v+p*m+g*A,s[8]=f*d+p*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sh=new vt;function nS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function CE(){const n=Zu("canvas");return n.style.display="block",n}const N0={};function aa(n){n in N0||(N0[n]=!0,console.warn(n))}function RE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const U0=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),O0=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Ms]:{transfer:Yu,primaries:$u,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ui]:{transfer:Gt,primaries:$u,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cf]:{transfer:Yu,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(O0),fromReference:n=>n.applyMatrix3(U0)},[rg]:{transfer:Gt,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(O0),fromReference:n=>n.applyMatrix3(U0).convertLinearToSRGB()}},LE=new Set([Ms,Cf]),Lt={enabled:!0,_workingColorSpace:Ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!LE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ka[e].toReference,r=ka[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ka[n].primaries},getTransfer:function(n){return n===es?Yu:ka[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ka[e].luminanceCoefficients)}};function la(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let po;class PE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{po===void 0&&(po=Zu("canvas")),po.width=e.width,po.height=e.height;const i=po.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=po}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=la(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(la(t[i]/255)*255):t[i]=la(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class iS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wh(r[o].image)):s.push(wh(r[o]))}else s=wh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?PE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;class On extends ro{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=Vs,r=Vs,s=Fi,o=Gs,a=Hi,l=Nr,c=On.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=sr(),this.name="",this.source=new iS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cp:e.x=e.x-Math.floor(e.x);break;case Vs:e.x=e.x<0?0:1;break;case up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cp:e.y=e.y-Math.floor(e.y);break;case Vs:e.y=e.y<0?0:1;break;case up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=X_;On.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],v=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,S=(p+1)/2,T=(d+1)/2,A=(u+f)/4,y=(h+_)/4,E=(g+v)/4;return m>S&&m>T?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=y/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=E/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=E/s),this.set(i,r,s,t),this}let x=Math.sqrt((v-g)*(v-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(v-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NE extends ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends NE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rS extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let v=1-a;const d=l*f+c*p+u*g+h*_,x=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const T=Math.sqrt(m),A=Math.atan2(T,d*x);v=Math.sin(v*A)/T,a=Math.sin(a*A)/T}const S=a*x;if(l=l*v+f*S,c=c*v+p*S,u=u*v+g*S,h=h*v+_*S,v===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(z0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(z0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new D,z0=new ys;class bi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),gc.subVectors(this.max,Ba),mo.subVectors(e.a,Ba),go.subVectors(e.b,Ba),vo.subVectors(e.c,Ba),Br.subVectors(go,mo),Hr.subVectors(vo,go),Ts.subVectors(mo,vo);let t=[0,-Br.z,Br.y,0,-Hr.z,Hr.y,0,-Ts.z,Ts.y,Br.z,0,-Br.x,Hr.z,0,-Hr.x,Ts.z,0,-Ts.x,-Br.y,Br.x,0,-Hr.y,Hr.x,0,-Ts.y,Ts.x,0];return!Th(t,mo,go,vo,gc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,mo,go,vo,gc))?!1:(vc.crossVectors(Br,Hr),t=[vc.x,vc.y,vc.z],Th(t,mo,go,vo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new D,new D,new D,new D,new D,new D,new D,new D],Ci=new D,mc=new bi,mo=new D,go=new D,vo=new D,Br=new D,Hr=new D,Ts=new D,Ba=new D,gc=new D,vc=new D,bs=new D;function Th(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bs.fromArray(n,s);const a=r.x*Math.abs(bs.x)+r.y*Math.abs(bs.y)+r.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=i.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const OE=new bi,Ha=new D,bh=new D;class zr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):OE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(bh)),this.expandByPoint(Ha.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new D,Ah=new D,yc=new D,Vr=new D,Ch=new D,xc=new D,Rh=new D;class Rf{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ah.copy(e).add(t).multiplyScalar(.5),yc.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Ah);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yc),a=Vr.dot(this.direction),l=-Vr.dot(yc),c=Vr.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ah).addScaledVector(yc,f),p}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const i=fr.dot(this.direction),r=fr.dot(fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,i,r,s){Ch.subVectors(t,e),xc.subVectors(i,e),Rh.crossVectors(Ch,xc);let o=this.direction.dot(Rh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const l=a*this.direction.dot(xc.crossVectors(Vr,xc));if(l<0)return null;const c=a*this.direction.dot(Ch.cross(Vr));if(c<0||l+c>o)return null;const u=-a*Vr.dot(Rh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,g,_,v){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,_,v)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,_,v){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yo.setFromMatrixColumn(e,0).length(),s=1/yo.setFromMatrixColumn(e,1).length(),o=1/yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zE,e,FE)}lookAt(e,t,i){const r=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Gr.crossVectors(i,ii),Gr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Gr.crossVectors(i,ii)),Gr.normalize(),_c.crossVectors(ii,Gr),r[0]=Gr.x,r[4]=_c.x,r[8]=ii.x,r[1]=Gr.y,r[5]=_c.y,r[9]=ii.y,r[2]=Gr.z,r[6]=_c.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],v=i[10],d=i[14],x=i[3],m=i[7],S=i[11],T=i[15],A=r[0],y=r[4],E=r[8],M=r[12],w=r[1],L=r[5],k=r[9],I=r[13],H=r[2],z=r[6],N=r[10],V=r[14],U=r[3],$=r[7],q=r[11],Q=r[15];return s[0]=o*A+a*w+l*H+c*U,s[4]=o*y+a*L+l*z+c*$,s[8]=o*E+a*k+l*N+c*q,s[12]=o*M+a*I+l*V+c*Q,s[1]=u*A+h*w+f*H+p*U,s[5]=u*y+h*L+f*z+p*$,s[9]=u*E+h*k+f*N+p*q,s[13]=u*M+h*I+f*V+p*Q,s[2]=g*A+_*w+v*H+d*U,s[6]=g*y+_*L+v*z+d*$,s[10]=g*E+_*k+v*N+d*q,s[14]=g*M+_*I+v*V+d*Q,s[3]=x*A+m*w+S*H+T*U,s[7]=x*y+m*L+S*z+T*$,s[11]=x*E+m*k+S*N+T*q,s[15]=x*M+m*I+S*V+T*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],v=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+v*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],v=e[14],d=e[15],x=h*v*c-_*f*c+_*l*p-a*v*p-h*l*d+a*f*d,m=g*f*c-u*v*c-g*l*p+o*v*p+u*l*d-o*f*d,S=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,T=g*h*l-u*_*l-g*a*f+o*_*f+u*a*v-o*h*v,A=t*x+i*m+r*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=x*y,e[1]=(_*f*s-h*v*s-_*r*p+i*v*p+h*r*d-i*f*d)*y,e[2]=(a*v*s-_*l*s+_*r*c-i*v*c-a*r*d+i*l*d)*y,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*y,e[4]=m*y,e[5]=(u*v*s-g*f*s+g*r*p-t*v*p-u*r*d+t*f*d)*y,e[6]=(g*l*s-o*v*s-g*r*c+t*v*c+o*r*d-t*l*d)*y,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*y,e[8]=S*y,e[9]=(g*h*s-u*_*s-g*i*p+t*_*p+u*i*d-t*h*d)*y,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*y,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*y,e[12]=T*y,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*v+t*h*v)*y,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*v-t*a*v)*y,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,v=o*h,d=a*h,x=l*c,m=l*u,S=l*h,T=i.x,A=i.y,y=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(g-m)*T,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+d))*A,r[6]=(v+x)*A,r[7]=0,r[8]=(g+m)*y,r[9]=(v-x)*y,r[10]=(1-(f+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yo.set(r[0],r[1],r[2]).length();const o=yo.set(r[4],r[5],r[6]).length(),a=yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ri.copy(this);const c=1/s,u=1/o,h=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=h,Ri.elements[9]*=h,Ri.elements[10]*=h,t.setFromRotationMatrix(Ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=br){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===br)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ku)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=br){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,_;if(a===br)g=(o+s)*h,_=-2*h;else if(a===Ku)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yo=new D,Ri=new Et,zE=new D(0,0,0),FE=new D(1,1,1),Gr=new D,_c=new D,ii=new D,F0=new Et,k0=new ys;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return F0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const B0=new D,xo=new ys,hr=new Et,Sc=new D,Va=new D,BE=new D,HE=new ys,H0=new D(1,0,0),V0=new D(0,1,0),G0=new D(0,0,1),W0={type:"added"},VE={type:"removed"},_o={type:"childadded",child:null},Lh={type:"childremoved",child:null};class nn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new D,t=new pi,i=new ys,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new vt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(G0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(G0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sc.copy(e):Sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Va,Sc,this.up):hr.lookAt(Sc,Va,this.up),this.quaternion.setFromRotationMatrix(hr),r&&(hr.extractRotation(r.matrixWorld),xo.setFromRotationMatrix(hr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W0),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VE),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W0),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new D(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new D,dr=new D,Ph=new D,pr=new D,So=new D,Mo=new D,X0=new D,Dh=new D,Ih=new D,Nh=new D;class Bi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Li.subVectors(e,t),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Li.subVectors(r,t),dr.subVectors(i,t),Ph.subVectors(e,t);const o=Li.dot(Li),a=Li.dot(dr),l=Li.dot(Ph),c=dr.dot(dr),u=dr.dot(Ph),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pr.x),l.addScaledVector(o,pr.y),l.addScaledVector(a,pr.z),l)}static isFrontFacing(e,t,i,r){return Li.subVectors(i,t),dr.subVectors(e,t),Li.cross(dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Li.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;So.subVectors(r,i),Mo.subVectors(s,i),Dh.subVectors(e,i);const l=So.dot(Dh),c=Mo.dot(Dh);if(l<=0&&c<=0)return t.copy(i);Ih.subVectors(e,r);const u=So.dot(Ih),h=Mo.dot(Ih);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(So,o);Nh.subVectors(e,s);const p=So.dot(Nh),g=Mo.dot(Nh);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Mo,a);const v=u*g-p*h;if(v<=0&&h-u>=0&&p-g>=0)return X0.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(X0,a);const d=1/(v+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(So,o).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Uh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Lt.workingColorSpace){if(e=sg(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Uh(o,s,e+1/3),this.g=Uh(o,s,e),this.b=Uh(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ui){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const i=oS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return Lt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(un(Dn.r*255,0,255))*65536+Math.round(un(Dn.g*255,0,255))*256+Math.round(un(Dn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Ui){Lt.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,r=Dn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Mc);const i=dl(Wr.h,Mc.h,t),r=dl(Wr.s,Mc.s,t),s=dl(Wr.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new nt;nt.NAMES=oS;let GE=0;class ws extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=ds,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=op,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sp&&(i.blendSrc=this.blendSrc),this.blendDst!==op&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ju&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ws extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new D,wc=new ve;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return aa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class aS extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lS extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let WE=0;const vi=new Et,Oh=new nn,wo=new D,ri=new bi,Ga=new bi,pn=new D;class Ut extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?lS:aS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,i){return vi.makeTranslation(e,t,i),this.applyMatrix4(vi),this}scale(e,t,i){return vi.makeScale(e,t,i),this.applyMatrix4(vi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ga.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(ri.min,Ga.min),ri.expandByPoint(pn),pn.addVectors(ri.max,Ga.max),ri.expandByPoint(pn)):(ri.expandByPoint(Ga.min),ri.expandByPoint(Ga.max))}ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),pn.add(wo)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new D,l[E]=new D;const c=new D,u=new D,h=new D,f=new ve,p=new ve,g=new ve,_=new D,v=new D;function d(E,M,w){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,w),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,w),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[E].add(_),a[M].add(_),a[w].add(_),l[E].add(v),l[M].add(v),l[w].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let E=0,M=x.length;E<M;++E){const w=x[E],L=w.start,k=w.count;for(let I=L,H=L+k;I<H;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const m=new D,S=new D,T=new D,A=new D;function y(E){T.fromBufferAttribute(r,E),A.copy(T);const M=a[E];m.copy(M),m.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(A,M);const L=S.dot(l[E])<0?-1:1;o.setXYZW(E,m.x,m.y,m.z,L)}for(let E=0,M=x.length;E<M;++E){const w=x[E],L=w.start,k=w.count;for(let I=L,H=L+k;I<H;I+=3)y(e.getX(I+0)),y(e.getX(I+1)),y(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,v=l.length;_<v;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new Et,As=new Rf,Ec=new zr,Y0=new D,Eo=new D,To=new D,bo=new D,zh=new D,Tc=new D,bc=new ve,Ac=new ve,Cc=new ve,$0=new D,q0=new D,K0=new D,Rc=new D,Lc=new D;class Zt extends nn{constructor(e=new Ut,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(zh.fromBufferAttribute(h,e),o?Tc.addScaledVector(zh,u):Tc.addScaledVector(zh.sub(t),u))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Ec.containsPoint(As.origin)===!1&&(As.intersectSphere(Ec,Y0)===null||As.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&(j0.copy(s).invert(),As.copy(e.ray).applyMatrix4(j0),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const v=f[g],d=o[v.materialIndex],x=Math.max(v.start,p.start),m=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let S=x,T=m;S<T;S+=3){const A=a.getX(S),y=a.getX(S+1),E=a.getX(S+2);r=Pc(this,d,e,i,c,u,h,A,y,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let v=g,d=_;v<d;v+=3){const x=a.getX(v),m=a.getX(v+1),S=a.getX(v+2);r=Pc(this,o,e,i,c,u,h,x,m,S),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const v=f[g],d=o[v.materialIndex],x=Math.max(v.start,p.start),m=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let S=x,T=m;S<T;S+=3){const A=S,y=S+1,E=S+2;r=Pc(this,d,e,i,c,u,h,A,y,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let v=g,d=_;v<d;v+=3){const x=v,m=v+1,S=v+2;r=Pc(this,o,e,i,c,u,h,x,m,S),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function XE(n,e,t,i,r,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lc);return c<t.near||c>t.far?null:{distance:c,point:Lc.clone(),object:n}}function Pc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,To),n.getVertexPosition(c,bo);const u=XE(n,e,t,i,Eo,To,bo,Rc);if(u){r&&(bc.fromBufferAttribute(r,a),Ac.fromBufferAttribute(r,l),Cc.fromBufferAttribute(r,c),u.uv=Bi.getInterpolation(Rc,Eo,To,bo,bc,Ac,Cc,new ve)),s&&(bc.fromBufferAttribute(s,a),Ac.fromBufferAttribute(s,l),Cc.fromBufferAttribute(s,c),u.uv1=Bi.getInterpolation(Rc,Eo,To,bo,bc,Ac,Cc,new ve)),o&&($0.fromBufferAttribute(o,a),q0.fromBufferAttribute(o,l),K0.fromBufferAttribute(o,c),u.normal=Bi.getInterpolation(Rc,Eo,To,bo,$0,q0,K0,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Bi.getNormal(Eo,To,bo,h.normal),u.face=h}return u}class ti extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(_,v,d,x,m,S,T,A,y,E,M){const w=S/y,L=T/E,k=S/2,I=T/2,H=A/2,z=y+1,N=E+1;let V=0,U=0;const $=new D;for(let q=0;q<N;q++){const Q=q*L-I;for(let ie=0;ie<z;ie++){const ye=ie*w-k;$[_]=ye*x,$[v]=Q*m,$[d]=H,c.push($.x,$.y,$.z),$[_]=0,$[v]=0,$[d]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(ie/y),h.push(1-q/E),V+=1}}for(let q=0;q<E;q++)for(let Q=0;Q<y;Q++){const ie=f+Q+z*q,ye=f+Q+z*(q+1),j=f+(Q+1)+z*(q+1),te=f+(Q+1)+z*q;l.push(ie,ye,te),l.push(ye,j,te),U+=6}a.addGroup(p,U,M),p+=U,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=Ma(n[t]);for(const r in i)e[r]=i[r]}return e}function jE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const og={clone:Ma,merge:Bn};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uS extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new D,Z0=new ve,J0=new ve;class li extends uS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Z0,J0),t.subVectors(J0,Z0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,Co=1;class qE extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new li(Ao,Co,e,t);r.layers=this.layers,this.add(r);const s=new li(Ao,Co,e,t);s.layers=this.layers,this.add(s);const o=new li(Ao,Co,e,t);o.layers=this.layers,this.add(o);const a=new li(Ao,Co,e,t);a.layers=this.layers,this.add(a);const l=new li(Ao,Co,e,t);l.layers=this.layers,this.add(l);const c=new li(Ao,Co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fS extends On{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:va,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:hs});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===Gs&&(t.minFilter=Fi),new qE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fh=new D,ZE=new D,JE=new vt;class Mr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fh.subVectors(i,t).cross(ZE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||JE.getNormalMatrix(e),r=this.coplanarPoint(Fh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new zr,Dc=new D;class ag{constructor(e=new Mr,t=new Mr,i=new Mr,r=new Mr,s=new Mr,o=new Mr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],v=r[11],d=r[12],x=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,v-p,S-d).normalize(),i[1].setComponents(l+s,f+c,v+p,S+d).normalize(),i[2].setComponents(l+o,f+u,v+g,S+x).normalize(),i[3].setComponents(l-o,f-u,v-g,S-x).normalize(),i[4].setComponents(l-a,f-h,v-_,S-m).normalize(),t===br)i[5].setComponents(l+a,f+h,v+_,S+m).normalize();else if(t===Ku)i[5].setComponents(a,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ql extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],_=[],v=[];for(let d=0;d<u;d++){const x=d*f-o;for(let m=0;m<c;m++){const S=m*h-s;g.push(S,-x,0),_.push(0,0,1),v.push(m/a),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const m=x+c*d,S=x+c*(d+1),T=x+1+c*(d+1),A=x+1+c*d;p.push(m,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$b=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:aT,batching_pars_vertex:lT,batching_vertex:cT,begin_vertex:uT,beginnormal_vertex:fT,bsdfs:hT,iridescence_fragment:dT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:vT,clipping_planes_vertex:yT,color_fragment:xT,color_pars_fragment:_T,color_pars_vertex:ST,color_vertex:MT,common:wT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:bT,displacementmap_vertex:AT,emissivemap_fragment:CT,emissivemap_pars_fragment:RT,colorspace_fragment:LT,colorspace_pars_fragment:PT,envmap_fragment:DT,envmap_common_pars_fragment:IT,envmap_pars_fragment:NT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:jT,envmap_vertex:OT,fog_vertex:zT,fog_pars_vertex:FT,fog_fragment:kT,fog_pars_fragment:BT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:VT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:WT,lights_pars_begin:XT,lights_toon_fragment:YT,lights_toon_pars_fragment:$T,lights_phong_fragment:qT,lights_phong_pars_fragment:KT,lights_physical_fragment:ZT,lights_physical_pars_fragment:JT,lights_fragment_begin:QT,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:sb,map_fragment:ob,map_pars_fragment:ab,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:vb,normal_fragment_maps:yb,normal_pars_fragment:xb,normal_pars_vertex:_b,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:bb,opaque_fragment:Ab,packing:Cb,premultiplied_alpha_fragment:Rb,project_vertex:Lb,dithering_fragment:Pb,dithering_pars_fragment:Db,roughnessmap_fragment:Ib,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Ob,shadowmap_vertex:zb,shadowmask_pars_fragment:Fb,skinbase_vertex:kb,skinning_pars_vertex:Bb,skinning_vertex:Hb,skinnormal_vertex:Vb,specularmap_fragment:Gb,specularmap_pars_fragment:Wb,tonemapping_fragment:Xb,tonemapping_pars_fragment:jb,transmission_fragment:Yb,transmission_pars_fragment:$b,uv_pars_fragment:qb,uv_pars_vertex:Kb,uv_vertex:Zb,worldpos_vertex:Jb,background_vert:Qb,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distanceRGBA_vert:aA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:fA,linedashed_frag:hA,meshbasic_vert:dA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:vA,meshmatcap_frag:yA,meshnormal_vert:xA,meshnormal_frag:_A,meshphong_vert:SA,meshphong_frag:MA,meshphysical_vert:wA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:bA,points_vert:AA,points_frag:CA,shadow_vert:RA,shadow_frag:LA,sprite_vert:PA,sprite_frag:DA},ke={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},qn={basic:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Bn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Bn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Bn([ke.points,ke.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Bn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Bn([ke.common,ke.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Bn([ke.sprite,ke.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Bn([ke.common,ke.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Bn([ke.lights,ke.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};qn.physical={uniforms:Bn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ic={r:0,b:0,g:0},Rs=new pi,IA=new Et;function NA(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(x){let m=x.isScene===!0?x.background:null;return m&&m.isTexture&&(m=(x.backgroundBlurriness>0?t:e).get(m)),m}function _(x){let m=!1;const S=g(x);S===null?d(a,l):S&&S.isColor&&(d(S,1),m=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,m){const S=g(m);S&&(S.isCubeTexture||S.mapping===bf)?(u===void 0&&(u=new Zt(new ti(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Ma(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rs.copy(m.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Rs)),u.material.toneMapped=Lt.getTransfer(S.colorSpace)!==Gt,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zt(new ql(2,2),new Ur({name:"BackgroundMaterial",uniforms:Ma(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(S.colorSpace)!==Gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,m){x.getRGB(Ic,cS(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(x,m=1){a.set(x),l=m,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:_,addToRenderList:v}}function UA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(w,L,k,I,H){let z=!1;const N=h(I,k,L);s!==N&&(s=N,c(s.object)),z=p(w,I,k,H),z&&g(w,I,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(w,L,k,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,L,k){const I=k.wireframe===!0;let H=i[w.id];H===void 0&&(H={},i[w.id]=H);let z=H[L.id];z===void 0&&(z={},H[L.id]=z);let N=z[I];return N===void 0&&(N=f(l()),z[I]=N),N}function f(w){const L=[],k=[],I=[];for(let H=0;H<t;H++)L[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:I,object:w,attributes:{},index:null}}function p(w,L,k,I){const H=s.attributes,z=L.attributes;let N=0;const V=k.getAttributes();for(const U in V)if(V[U].location>=0){const q=H[U];let Q=z[U];if(Q===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(w,L,k,I){const H={},z=L.attributes;let N=0;const V=k.getAttributes();for(const U in V)if(V[U].location>=0){let q=z[U];q===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),H[U]=Q,N++}s.attributes=H,s.attributesNum=N,s.index=I}function _(){const w=s.newAttributes;for(let L=0,k=w.length;L<k;L++)w[L]=0}function v(w){d(w,0)}function d(w,L){const k=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;k[w]=1,I[w]===0&&(n.enableVertexAttribArray(w),I[w]=1),H[w]!==L&&(n.vertexAttribDivisor(w,L),H[w]=L)}function x(){const w=s.newAttributes,L=s.enabledAttributes;for(let k=0,I=L.length;k<I;k++)L[k]!==w[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function m(w,L,k,I,H,z,N){N===!0?n.vertexAttribIPointer(w,L,k,H,z):n.vertexAttribPointer(w,L,k,I,H,z)}function S(w,L,k,I){_();const H=I.attributes,z=k.getAttributes(),N=L.defaultAttributeValues;for(const V in z){const U=z[V];if(U.location>=0){let $=H[V];if($===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const q=$.normalized,Q=$.itemSize,ie=e.get($);if(ie===void 0)continue;const ye=ie.buffer,j=ie.type,te=ie.bytesPerElement,pe=j===n.INT||j===n.UNSIGNED_INT||$.gpuType===Zm;if($.isInterleavedBufferAttribute){const re=$.data,me=re.stride,xe=$.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<U.locationSize;De++)d(U.location+De,re.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<U.locationSize;De++)v(U.location+De);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let De=0;De<U.locationSize;De++)m(U.location+De,Q/U.locationSize,j,q,me*te,(xe+Q/U.locationSize*De)*te,pe)}else{if($.isInstancedBufferAttribute){for(let re=0;re<U.locationSize;re++)d(U.location+re,$.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<U.locationSize;re++)v(U.location+re);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let re=0;re<U.locationSize;re++)m(U.location+re,Q/U.locationSize,j,q,Q*te,Q/U.locationSize*re*te,pe)}}else if(N!==void 0){const q=N[V];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(U.location,q);break;case 3:n.vertexAttrib3fv(U.location,q);break;case 4:n.vertexAttrib4fv(U.location,q);break;default:n.vertexAttrib1fv(U.location,q)}}}}x()}function T(){E();for(const w in i){const L=i[w];for(const k in L){const I=L[k];for(const H in I)u(I[H].object),delete I[H];delete L[k]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const k in L){const I=L[k];for(const H in I)u(I[H].object),delete I[H];delete L[k]}delete i[w.id]}function y(w){for(const L in i){const k=i[L];if(k[w.id]===void 0)continue;const I=k[w.id];for(const H in I)u(I[H].object),delete I[H];delete k[w.id]}}function E(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:v,disableUnusedAttributes:x}}function OA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===$l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==nr&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:S,maxSamples:T}}function FA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mr,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const x=s?0:i,m=x*4;let S=d.clippingState||null;l.value=S,S=u(g,f,m,p);for(let T=0;T!==m;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=l.value,g!==!0||v===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<d)&&(v=new Float32Array(d));for(let m=0,S=p;m!==_;++m,S+=4)o.copy(h[m]).applyMatrix4(x,a),o.normal.toArray(v,S),v[S+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function kA(n){let e=new WeakMap;function t(o,a){return a===ap?o.mapping=va:a===lp&&(o.mapping=ya),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ap||a===lp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ju extends uS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qo=4,Q0=[.125,.215,.35,.446,.526,.582],zs=20,kh=new Ju,ev=new nt;let Bh=null,Hh=0,Vh=0,Gh=!1;const Us=(1+Math.sqrt(5))/2,Ro=1/Us,tv=[new D(-Us,Ro,0),new D(Us,Ro,0),new D(-Ro,0,Us),new D(Ro,0,Us),new D(0,Us,-Ro),new D(0,Us,Ro),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Hh,Vh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===va||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:$l,format:Hi,colorSpace:Ms,depthBuffer:!1},r=iv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(s)),this._blurMaterial=HA(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,kh)}_sceneToCubeUV(e,t,i,r){const a=new li(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ev),u.toneMapping=ps,u.autoClear=!1;const p=new Ws({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),g=new Zt(new ti,p);let _=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,_=!0):(p.color.copy(ev),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const m=this._cubeSize;Nc(r,x*m,d>2?m:0,m,m),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===va||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,kh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tv[(r-s-1)%tv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Zt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=s/g,v=isFinite(s)?1+Math.floor(u*_):zs;v>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zs}`);const d=[];let x=0;for(let y=0;y<zs;++y){const E=y/_,M=Math.exp(-E*E/2);d.push(M),y===0?x+=M:y<v&&(x+=2*M)}for(let y=0;y<d.length;y++)d[y]=d[y]/x;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=g,f.mipInt.value=m-i;const S=this._sizeLods[r],T=3*S*(r>m-qo?r-m+qo:0),A=4*(this._cubeSize-S);Nc(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(h,kh)}}function BA(n){const e=[],t=[],i=[];let r=n;const s=n-qo+1+Q0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-qo?l=Q0[o-n+qo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,v=2,d=1,x=new Float32Array(_*g*p),m=new Float32Array(v*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const y=A%3*2/3-1,E=A>2?0:-1,M=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];x.set(M,_*g*A),m.set(f,v*g*A);const w=[A,A,A,A,A,A];S.set(w,d*g*A)}const T=new Ut;T.setAttribute("position",new vn(x,_)),T.setAttribute("uv",new vn(m,v)),T.setAttribute("faceIndex",new vn(S,d)),e.push(T),r>qo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iv(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=bf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HA(n,e,t){const i=new Float32Array(zs),r=new D(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function rv(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function sv(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function lg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ap||l===lp,u=l===va||l===ya;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new nv(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new nv(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WA(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let v=0,d=_.length;v<d;v++)e.remove(_[v])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let v=0,d=_.length;v<d;v++)e.update(_[v],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let m=0,S=x.length;m<S;m+=3){const T=x[m+0],A=x[m+1],y=x[m+2];f.push(T,A,A,y,y,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let m=0,S=x.length/3-1;m<S;m+=3){const T=m+0,A=m+1,y=m+2;f.push(T,A,A,y,y,T)}}else return;const v=new(nS(f)?lS:aS)(f,1);v.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,v)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function XA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let v=0;for(let d=0;d<g;d++)v+=p[d];t.update(v,i,1)}function h(f,p,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x];for(let x=0;x<_.length;x++)t.update(d,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YA(n,e,t){const i=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let w=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let T=a.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const y=new Float32Array(T*A*4*h),E=new rS(y,T,A,h);E.type=nr,E.needsUpdate=!0;const M=S*4;for(let L=0;L<h;L++){const k=d[L],I=x[L],H=m[L],z=T*A*4*L;for(let N=0;N<k.count;N++){const V=N*M;g===!0&&(r.fromBufferAttribute(k,N),y[z+V+0]=r.x,y[z+V+1]=r.y,y[z+V+2]=r.z,y[z+V+3]=0),_===!0&&(r.fromBufferAttribute(I,N),y[z+V+4]=r.x,y[z+V+5]=r.y,y[z+V+6]=r.z,y[z+V+7]=0),v===!0&&(r.fromBufferAttribute(H,N),y[z+V+8]=r.x,y[z+V+9]=r.y,y[z+V+10]=r.z,y[z+V+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:E,size:new ve(T,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function $A(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class dS extends On{constructor(e,t,i,r,s,o,a,l,c,u=sa){if(u!==sa&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===sa&&(i=eo),i===void 0&&u===_a&&(i=xa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pS=new On,ov=new dS(1,1),mS=new rS,gS=new UE,vS=new fS,av=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function La(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=av[r];if(s===void 0&&(s=new Float32Array(r),av[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lf(n,e){let t=lv[e];t===void 0&&(t=new Int32Array(e),lv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function JA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function QA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;fv.set(i),n.uniformMatrix2fv(this.addr,!1,fv),dn(t,i)}}function eC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;uv.set(i),n.uniformMatrix3fv(this.addr,!1,uv),dn(t,i)}}function tC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;cv.set(i),n.uniformMatrix4fv(this.addr,!1,cv),dn(t,i)}}function nC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function rC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function oC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function lC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function cC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function uC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ov.compareFunction=tS,s=ov):s=pS,t.setTexture2D(e||s,r)}function fC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gS,r)}function hC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vS,r)}function dC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mS,r)}function pC(n){switch(n){case 5126:return qA;case 35664:return KA;case 35665:return ZA;case 35666:return JA;case 35674:return QA;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return aC;case 36295:return lC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return fC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return dC}}function mC(n,e){n.uniform1fv(this.addr,e)}function gC(n,e){const t=La(e,this.size,2);n.uniform2fv(this.addr,t)}function vC(n,e){const t=La(e,this.size,3);n.uniform3fv(this.addr,t)}function yC(n,e){const t=La(e,this.size,4);n.uniform4fv(this.addr,t)}function xC(n,e){const t=La(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _C(n,e){const t=La(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SC(n,e){const t=La(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MC(n,e){n.uniform1iv(this.addr,e)}function wC(n,e){n.uniform2iv(this.addr,e)}function EC(n,e){n.uniform3iv(this.addr,e)}function TC(n,e){n.uniform4iv(this.addr,e)}function bC(n,e){n.uniform1uiv(this.addr,e)}function AC(n,e){n.uniform2uiv(this.addr,e)}function CC(n,e){n.uniform3uiv(this.addr,e)}function RC(n,e){n.uniform4uiv(this.addr,e)}function LC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pS,s[o])}function PC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gS,s[o])}function DC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vS,s[o])}function IC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mS,s[o])}function NC(n){switch(n){case 5126:return mC;case 35664:return gC;case 35665:return vC;case 35666:return yC;case 35674:return xC;case 35675:return _C;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return wC;case 35668:case 35672:return EC;case 35669:case 35673:return TC;case 5125:return bC;case 36294:return AC;case 36295:return CC;case 36296:return RC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return PC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return IC}}class UC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pC(t.type)}}class OC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NC(t.type)}}class zC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function hv(n,e){n.seq.push(e),n.map[e.id]=e}function FC(n,e,t){const i=n.name,r=i.length;for(Wh.lastIndex=0;;){const s=Wh.exec(i),o=Wh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hv(t,c===void 0?new UC(a,n,e):new OC(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new zC(a),hv(t,h)),t=h}}}class xu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);FC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function dv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kC=37297;let BC=0;function HC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function VC(n){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(n);let i;switch(e===t?i="":e===qu&&t===$u?i="LinearDisplayP3ToLinearSRGB":e===$u&&t===qu&&(i="LinearSRGBToLinearDisplayP3"),n){case Ms:case Cf:return[i,"LinearTransferOETF"];case Ui:case rg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+HC(n.getShaderSource(e),o)}else return r}function GC(n,e){const t=VC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function WC(n,e){let t;switch(e){case $w:t="Linear";break;case W_:t="Reinhard";break;case qw:t="OptimizedCineon";break;case Kw:t="ACESFilmic";break;case Jw:t="AgX";break;case Qw:t="Neutral";break;case Zw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new D;function XC(){Lt.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function YC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $C(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function el(n){return n!==""}function mv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qC=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(n){return n.replace(qC,ZC)}const KC=new Map;function ZC(n,e){let t=ht[e];if(t===void 0){const i=KC.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zp(t)}const JC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(n){return n.replace(JC,QC)}function QC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function t2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case va:case ya:e="ENVMAP_TYPE_CUBE";break;case bf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ya:e="ENVMAP_MODE_REFRACTION";break}return e}function i2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Km:e="ENVMAP_BLENDING_MULTIPLY";break;case jw:e="ENVMAP_BLENDING_MIX";break;case Yw:e="ENVMAP_BLENDING_ADD";break}return e}function r2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function s2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=e2(t),c=t2(t),u=n2(t),h=i2(t),f=r2(t),p=jC(t),g=YC(s),_=r.createProgram();let v,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),d.length>0&&(d+=`
`)):(v=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),d=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?ht.tonemapping_pars_fragment:"",t.toneMapping!==ps?WC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,GC("linearToOutputTexel",t.outputColorSpace),XC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=zp(o),o=mv(o,t),o=gv(o,t),a=zp(a),a=mv(a,t),a=gv(a,t),o=vv(o),a=vv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",t.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=x+v+o,S=x+d+a,T=dv(r,r.VERTEX_SHADER,m),A=dv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function y(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(T).trim(),H=r.getShaderInfoLog(A).trim();let z=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,A);else{const V=pv(r,T,"vertex"),U=pv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+V+`
`+U)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(N=!1);N&&(L.diagnostics={runnable:z,programLog:k,vertexShader:{log:I,prefix:v},fragmentShader:{log:H,prefix:d}})}r.deleteShader(T),r.deleteShader(A),E=new xu(r,_),M=$C(r,_)}let E;this.getUniforms=function(){return E===void 0&&y(this),E};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,kC)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let o2=0;class a2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new l2(e),t.set(e,i)),i}}class l2{constructor(e){this.id=o2++,this.code=e,this.usedTimes=0}}function c2(n,e,t,i,r,s,o){const a=new sS,l=new a2,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,w,L,k,I){const H=k.fog,z=I.geometry,N=M.isMeshStandardMaterial?k.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),U=V&&V.mapping===bf?V.image.height:null,$=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=q!==void 0?q.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let ye,j,te,pe;if($){const Ve=qn[$];ye=Ve.vertexShader,j=Ve.fragmentShader}else ye=M.vertexShader,j=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const re=n.getRenderTarget(),me=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,De=!!M.map,Be=!!M.matcap,P=!!V,se=!!M.aoMap,le=!!M.lightMap,de=!!M.bumpMap,B=!!M.normalMap,ze=!!M.displacementMap,be=!!M.emissiveMap,Fe=!!M.metalnessMap,O=!!M.roughnessMap,C=M.anisotropy>0,Z=M.clearcoat>0,ce=M.dispersion>0,fe=M.iridescence>0,he=M.sheen>0,Xe=M.transmission>0,Le=C&&!!M.anisotropyMap,Ue=Z&&!!M.clearcoatMap,rt=Z&&!!M.clearcoatNormalMap,Me=Z&&!!M.clearcoatRoughnessMap,He=fe&&!!M.iridescenceMap,mt=fe&&!!M.iridescenceThicknessMap,st=he&&!!M.sheenColorMap,je=he&&!!M.sheenRoughnessMap,at=!!M.specularMap,ut=!!M.specularColorMap,It=!!M.specularIntensityMap,b=Xe&&!!M.transmissionMap,J=Xe&&!!M.thicknessMap,ee=!!M.gradientMap,ne=!!M.alphaMap,Se=M.alphaTest>0,F=!!M.alphaHash,Y=!!M.extensions;let Oe=ps;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const We={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:j,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:me,instancingColor:me&&I.instanceColor!==null,instancingMorph:me&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ms,alphaToCoverage:!!M.alphaToCoverage,map:De,matcap:Be,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:U,aoMap:se,lightMap:le,bumpMap:de,normalMap:B,displacementMap:f&&ze,emissiveMap:be,normalMapObjectSpace:B&&M.normalMapType===rE,normalMapTangentSpace:B&&M.normalMapType===ig,metalnessMap:Fe,roughnessMap:O,anisotropy:C,anisotropyMap:Le,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:rt,clearcoatRoughnessMap:Me,dispersion:ce,iridescence:fe,iridescenceMap:He,iridescenceThicknessMap:mt,sheen:he,sheenColorMap:st,sheenRoughnessMap:je,specularMap:at,specularColorMap:ut,specularIntensityMap:It,transmission:Xe,transmissionMap:b,thicknessMap:J,gradientMap:ee,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:F,combine:M.combine,mapUv:De&&_(M.map.channel),aoMapUv:se&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:de&&_(M.bumpMap.channel),normalMapUv:B&&_(M.normalMap.channel),displacementMapUv:ze&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:Fe&&_(M.metalnessMap.channel),roughnessMapUv:O&&_(M.roughnessMap.channel),anisotropyMapUv:Le&&_(M.anisotropyMap.channel),clearcoatMapUv:Ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&_(M.sheenRoughnessMap.channel),specularMapUv:at&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:It&&_(M.specularIntensityMap.channel),transmissionMapUv:b&&_(M.transmissionMap.channel),thicknessMapUv:J&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(B||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(De||ne),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&Lt.getTransfer(M.map.colorSpace)===Gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kt,flipSided:M.side===ei,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Y&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&M.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(w,M),m(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function m(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.transmission&&a.enable(14),w.sheen&&a.enable(15),w.opaque&&a.enable(16),w.pointsUvs&&a.enable(17),w.decodeVideoTexture&&a.enable(18),w.alphaToCoverage&&a.enable(19),M.push(a.mask)}function S(M){const w=g[M.type];let L;if(w){const k=qn[w];L=og.clone(k.uniforms)}else L=M.uniforms;return L}function T(M,w){let L;for(let k=0,I=u.length;k<I;k++){const H=u[k];if(H.cacheKey===w){L=H,++L.usedTimes;break}}return L===void 0&&(L=new s2(n,w,M,s),u.push(L)),L}function A(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function y(M){l.remove(M)}function E(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:y,programs:u,dispose:E}}function u2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function f2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _v(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,v){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:v},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=v),e++,d}function a(h,f,p,g,_,v){const d=o(h,f,p,g,_,v);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,v){const d=o(h,f,p,g,_,v);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||f2),i.length>1&&i.sort(f||xv),r.length>1&&r.sort(f||xv)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function h2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _v,n.set(i,[o])):r>=s.length?(o=new _v,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function d2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new nt};break;case"SpotLight":t={position:new D,direction:new D,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function p2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let m2=0;function g2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v2(n){const e=new d2,t=p2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new Et,o=new Et;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,v=0,d=0,x=0,m=0,S=0,T=0,A=0,y=0;c.sort(g2);for(let M=0,w=c.length;M<w;M++){const L=c[M],k=L.color,I=L.intensity,H=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*I,h+=k.g*I,f+=k.b*I;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],I);y++}else if(L.isDirectionalLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,U=t.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=N,p++}else if(L.isSpotLight){const N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(k).multiplyScalar(I),N.distance=H,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[_]=N;const V=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=V.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=z,S++}_++}else if(L.isRectAreaLight){const N=e.get(L);N.color.copy(k).multiplyScalar(I),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=N,v++}else if(L.isPointLight){const N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const V=L.shadow,U=t.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=L.shadow.matrix,m++}i.point[g]=N,g++}else if(L.isHemisphereLight){const N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(I),N.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[d]=N,d++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==v||E.hemiLength!==d||E.numDirectionalShadows!==x||E.numPointShadows!==m||E.numSpotShadows!==S||E.numSpotMaps!==T||E.numLightProbes!==y)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=y,E.directionalLength=p,E.pointLength=g,E.spotLength=_,E.rectAreaLength=v,E.hemiLength=d,E.numDirectionalShadows=x,E.numPointShadows=m,E.numSpotShadows=S,E.numSpotMaps=T,E.numLightProbes=y,i.version=m2++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const v=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const m=c[d];if(m.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),h++}else if(m.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),p++}else if(m.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(m.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(m.width*.5,0,0),S.halfHeight.set(0,m.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(m.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(v),f++}else if(m.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(v),_++}}}return{setup:a,setupView:l,state:i}}function Sv(n){const e=new v2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function y2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sv(n),e.set(r,[a])):s>=o.length?(a=new Sv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class x2 extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _2 extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w2(n,e,t){let i=new ag;const r=new ve,s=new ve,o=new Ht,a=new x2({depthPacking:iE}),l=new _2,c={},u=t.maxTextureSize,h={[Xi]:ei,[ei]:Xi,[kt]:kt},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:S2,fragmentShader:M2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G_;let d=this.type;this.render=function(A,y,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(hs),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=d!==xr&&this.type===xr,H=d===xr&&this.type!==xr;for(let z=0,N=A.length;z<N;z++){const V=A[z],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||I===!0||H===!0){const Q=this.type!==xr?{minFilter:Nn,magFilter:Nn}:{};U.map!==null&&U.map.dispose(),U.map=new vs(r.x,r.y,Q),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const q=U.getViewportCount();for(let Q=0;Q<q;Q++){const ie=U.getViewport(Q);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),k.viewport(o),U.updateMatrices(V,Q),i=U.getFrustum(),S(y,E,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===xr&&x(U,E),U.needsUpdate=!1}d=this.type,v.needsUpdate=!1,n.setRenderTarget(M,w,L)};function x(A,y){const E=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(y,null,E,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(y,null,E,p,_,null)}function m(A,y,E,M){let w=null;const L=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=E.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const k=w.uuid,I=y.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let z=H[I];z===void 0&&(z=w.clone(),H[I]=z,y.addEventListener("dispose",T)),w=z}if(w.visible=y.visible,w.wireframe=y.wireframe,M===xr?w.side=y.shadowSide!==null?y.shadowSide:y.side:w.side=y.shadowSide!==null?y.shadowSide:h[y.side],w.alphaMap=y.alphaMap,w.alphaTest=y.alphaTest,w.map=y.map,w.clipShadows=y.clipShadows,w.clippingPlanes=y.clippingPlanes,w.clipIntersection=y.clipIntersection,w.displacementMap=y.displacementMap,w.displacementScale=y.displacementScale,w.displacementBias=y.displacementBias,w.wireframeLinewidth=y.wireframeLinewidth,w.linewidth=y.linewidth,E.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=n.properties.get(w);k.light=E}return w}function S(A,y,E,M,w){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===xr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const I=e.update(A),H=A.material;if(Array.isArray(H)){const z=I.groups;for(let N=0,V=z.length;N<V;N++){const U=z[N],$=H[U.materialIndex];if($&&$.visible){const q=m(A,$,M,w);A.onBeforeShadow(n,A,y,E,I,q,U),n.renderBufferDirect(E,null,I,q,A,U),A.onAfterShadow(n,A,y,E,I,q,U)}}}else if(H.visible){const z=m(A,H,M,w);A.onBeforeShadow(n,A,y,E,I,z,null),n.renderBufferDirect(E,null,I,z,A,null),A.onAfterShadow(n,A,y,E,I,z,null)}}const k=A.children;for(let I=0,H=k.length;I<H;I++)S(k[I],y,E,M,w)}function T(A){A.target.removeEventListener("dispose",T);for(const E in c){const M=c[E],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function E2(n){function e(){let b=!1;const J=new Ht;let ee=null;const ne=new Ht(0,0,0,0);return{setMask:function(Se){ee!==Se&&!b&&(n.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){b=Se},setClear:function(Se,F,Y,Oe,We){We===!0&&(Se*=Oe,F*=Oe,Y*=Oe),J.set(Se,F,Y,Oe),ne.equals(J)===!1&&(n.clearColor(Se,F,Y,Oe),ne.copy(J))},reset:function(){b=!1,ee=null,ne.set(-1,0,0,0)}}}function t(){let b=!1,J=null,ee=null,ne=null;return{setTest:function(Se){Se?pe(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Se){J!==Se&&!b&&(n.depthMask(Se),J=Se)},setFunc:function(Se){if(ee!==Se){switch(Se){case kw:n.depthFunc(n.NEVER);break;case Bw:n.depthFunc(n.ALWAYS);break;case Hw:n.depthFunc(n.LESS);break;case ju:n.depthFunc(n.LEQUAL);break;case Vw:n.depthFunc(n.EQUAL);break;case Gw:n.depthFunc(n.GEQUAL);break;case Ww:n.depthFunc(n.GREATER);break;case Xw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Se}},setLocked:function(Se){b=Se},setClear:function(Se){ne!==Se&&(n.clearDepth(Se),ne=Se)},reset:function(){b=!1,J=null,ee=null,ne=null}}}function i(){let b=!1,J=null,ee=null,ne=null,Se=null,F=null,Y=null,Oe=null,We=null;return{setTest:function(Ve){b||(Ve?pe(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Ve){J!==Ve&&!b&&(n.stencilMask(Ve),J=Ve)},setFunc:function(Ve,qe,Ze){(ee!==Ve||ne!==qe||Se!==Ze)&&(n.stencilFunc(Ve,qe,Ze),ee=Ve,ne=qe,Se=Ze)},setOp:function(Ve,qe,Ze){(F!==Ve||Y!==qe||Oe!==Ze)&&(n.stencilOp(Ve,qe,Ze),F=Ve,Y=qe,Oe=Ze)},setLocked:function(Ve){b=Ve},setClear:function(Ve){We!==Ve&&(n.clearStencil(Ve),We=Ve)},reset:function(){b=!1,J=null,ee=null,ne=null,Se=null,F=null,Y=null,Oe=null,We=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,v=null,d=null,x=null,m=null,S=null,T=null,A=new nt(0,0,0),y=0,E=!1,M=null,w=null,L=null,k=null,I=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=N>=2);let U=null,$={};const q=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ie=new Ht().fromArray(q),ye=new Ht().fromArray(Q);function j(b,J,ee,ne){const Se=new Uint8Array(4),F=n.createTexture();n.bindTexture(b,F),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<ee;Y++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(J+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return F}const te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(ju),de(!1),B(C0),pe(n.CULL_FACE),se(hs);function pe(b){c[b]!==!0&&(n.enable(b),c[b]=!0)}function re(b){c[b]!==!1&&(n.disable(b),c[b]=!1)}function me(b,J){return u[b]!==J?(n.bindFramebuffer(b,J),u[b]=J,b===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),b===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function xe(b,J){let ee=f,ne=!1;if(b){ee=h.get(J),ee===void 0&&(ee=[],h.set(J,ee));const Se=b.textures;if(ee.length!==Se.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let F=0,Y=Se.length;F<Y;F++)ee[F]=n.COLOR_ATTACHMENT0+F;ee.length=Se.length,ne=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ne=!0);ne&&n.drawBuffers(ee)}function De(b){return p!==b?(n.useProgram(b),p=b,!0):!1}const Be={[Os]:n.FUNC_ADD,[Mw]:n.FUNC_SUBTRACT,[ww]:n.FUNC_REVERSE_SUBTRACT};Be[Ew]=n.MIN,Be[Tw]=n.MAX;const P={[bw]:n.ZERO,[Aw]:n.ONE,[Cw]:n.SRC_COLOR,[sp]:n.SRC_ALPHA,[Nw]:n.SRC_ALPHA_SATURATE,[Dw]:n.DST_COLOR,[Lw]:n.DST_ALPHA,[Rw]:n.ONE_MINUS_SRC_COLOR,[op]:n.ONE_MINUS_SRC_ALPHA,[Iw]:n.ONE_MINUS_DST_COLOR,[Pw]:n.ONE_MINUS_DST_ALPHA,[Uw]:n.CONSTANT_COLOR,[Ow]:n.ONE_MINUS_CONSTANT_COLOR,[zw]:n.CONSTANT_ALPHA,[Fw]:n.ONE_MINUS_CONSTANT_ALPHA};function se(b,J,ee,ne,Se,F,Y,Oe,We,Ve){if(b===hs){g===!0&&(re(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),b!==Sw){if(b!==_||Ve!==E){if((v!==Os||m!==Os)&&(n.blendEquation(n.FUNC_ADD),v=Os,m=Os),Ve)switch(b){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.ONE,n.ONE);break;case R0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case R0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}d=null,x=null,S=null,T=null,A.set(0,0,0),y=0,_=b,E=Ve}return}Se=Se||J,F=F||ee,Y=Y||ne,(J!==v||Se!==m)&&(n.blendEquationSeparate(Be[J],Be[Se]),v=J,m=Se),(ee!==d||ne!==x||F!==S||Y!==T)&&(n.blendFuncSeparate(P[ee],P[ne],P[F],P[Y]),d=ee,x=ne,S=F,T=Y),(Oe.equals(A)===!1||We!==y)&&(n.blendColor(Oe.r,Oe.g,Oe.b,We),A.copy(Oe),y=We),_=b,E=!1}function le(b,J){b.side===kt?re(n.CULL_FACE):pe(n.CULL_FACE);let ee=b.side===ei;J&&(ee=!ee),de(ee),b.blending===ds&&b.transparent===!1?se(hs):se(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);const ne=b.stencilWrite;o.setTest(ne),ne&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),be(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(b){M!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),M=b)}function B(b){b!==xw?(pe(n.CULL_FACE),b!==w&&(b===C0?n.cullFace(n.BACK):b===_w?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),w=b}function ze(b){b!==L&&(z&&n.lineWidth(b),L=b)}function be(b,J,ee){b?(pe(n.POLYGON_OFFSET_FILL),(k!==J||I!==ee)&&(n.polygonOffset(J,ee),k=J,I=ee)):re(n.POLYGON_OFFSET_FILL)}function Fe(b){b?pe(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function O(b){b===void 0&&(b=n.TEXTURE0+H-1),U!==b&&(n.activeTexture(b),U=b)}function C(b,J,ee){ee===void 0&&(U===null?ee=n.TEXTURE0+H-1:ee=U);let ne=$[ee];ne===void 0&&(ne={type:void 0,texture:void 0},$[ee]=ne),(ne.type!==b||ne.texture!==J)&&(U!==ee&&(n.activeTexture(ee),U=ee),n.bindTexture(b,J||te[b]),ne.type=b,ne.texture=J)}function Z(){const b=$[U];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function mt(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function st(b){ie.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ie.copy(b))}function je(b){ye.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),ye.copy(b))}function at(b,J){let ee=l.get(J);ee===void 0&&(ee=new WeakMap,l.set(J,ee));let ne=ee.get(b);ne===void 0&&(ne=n.getUniformBlockIndex(J,b.name),ee.set(b,ne))}function ut(b,J){const ne=l.get(J).get(b);a.get(J)!==ne&&(n.uniformBlockBinding(J,ne,b.__bindingPointIndex),a.set(J,ne))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},U=null,$={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,v=null,d=null,x=null,m=null,S=null,T=null,A=new nt(0,0,0),y=0,E=!1,M=null,w=null,L=null,k=null,I=null,ie.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:re,bindFramebuffer:me,drawBuffers:xe,useProgram:De,setBlending:se,setMaterial:le,setFlipSided:de,setCullFace:B,setLineWidth:ze,setPolygonOffset:be,setScissorTest:Fe,activeTexture:O,bindTexture:C,unbindTexture:Z,compressedTexImage2D:ce,compressedTexImage3D:fe,texImage2D:He,texImage3D:mt,updateUBOMapping:at,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ue,scissor:st,viewport:je,reset:It}}function Mv(n,e,t,i){const r=T2(i);switch(t){case q_:return n*e;case Z_:return n*e;case J_:return n*e*2;case Af:return n*e/r.components*r.byteLength;case eg:return n*e/r.components*r.byteLength;case Q_:return n*e*2/r.components*r.byteLength;case tg:return n*e*2/r.components*r.byteLength;case K_:return n*e*3/r.components*r.byteLength;case Hi:return n*e*4/r.components*r.byteLength;case ng:return n*e*4/r.components*r.byteLength;case pu:case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hp:case pp:return Math.max(n,16)*Math.max(e,8)/4;case fp:case dp:return Math.max(n,8)*Math.max(e,8)/2;case mp:case gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yu:case Dp:case Ip:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eS:case Np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Up:case Op:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T2(n){switch(n){case Nr:case j_:return{byteLength:1,components:1};case Ul:case Y_:case $l:return{byteLength:2,components:1};case Jm:case Qm:return{byteLength:2,components:4};case eo:case Zm:case nr:return{byteLength:4,components:1};case $_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function b2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,C){return p?new OffscreenCanvas(O,C):Zu("canvas")}function _(O,C,Z){let ce=1;const fe=Fe(O);if((fe.width>Z||fe.height>Z)&&(ce=Z/Math.max(fe.width,fe.height)),ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(ce*fe.width),Xe=Math.floor(ce*fe.height);h===void 0&&(h=g(he,Xe));const Le=C?g(he,Xe):h;return Le.width=he,Le.height=Xe,Le.getContext("2d").drawImage(O,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+he+"x"+Xe+")."),Le}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),O;return O}function v(O){return O.generateMipmaps&&O.minFilter!==Nn&&O.minFilter!==Fi}function d(O){n.generateMipmap(O)}function x(O,C,Z,ce,fe=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=C;if(C===n.RED&&(Z===n.FLOAT&&(he=n.R32F),Z===n.HALF_FLOAT&&(he=n.R16F),Z===n.UNSIGNED_BYTE&&(he=n.R8)),C===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.R8UI),Z===n.UNSIGNED_SHORT&&(he=n.R16UI),Z===n.UNSIGNED_INT&&(he=n.R32UI),Z===n.BYTE&&(he=n.R8I),Z===n.SHORT&&(he=n.R16I),Z===n.INT&&(he=n.R32I)),C===n.RG&&(Z===n.FLOAT&&(he=n.RG32F),Z===n.HALF_FLOAT&&(he=n.RG16F),Z===n.UNSIGNED_BYTE&&(he=n.RG8)),C===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RG8UI),Z===n.UNSIGNED_SHORT&&(he=n.RG16UI),Z===n.UNSIGNED_INT&&(he=n.RG32UI),Z===n.BYTE&&(he=n.RG8I),Z===n.SHORT&&(he=n.RG16I),Z===n.INT&&(he=n.RG32I)),C===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),C===n.RGBA){const Xe=fe?Yu:Lt.getTransfer(ce);Z===n.FLOAT&&(he=n.RGBA32F),Z===n.HALF_FLOAT&&(he=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(he=Xe===Gt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function m(O,C){let Z;return O?C===null||C===eo||C===xa?Z=n.DEPTH24_STENCIL8:C===nr?Z=n.DEPTH32F_STENCIL8:C===Ul&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===eo||C===xa?Z=n.DEPTH_COMPONENT24:C===nr?Z=n.DEPTH_COMPONENT32F:C===Ul&&(Z=n.DEPTH_COMPONENT16),Z}function S(O,C){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==Fi?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function T(O){const C=O.target;C.removeEventListener("dispose",T),y(C),C.isVideoTexture&&u.delete(C)}function A(O){const C=O.target;C.removeEventListener("dispose",A),M(C)}function y(O){const C=i.get(O);if(C.__webglInit===void 0)return;const Z=O.source,ce=f.get(Z);if(ce){const fe=ce[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(O),Object.keys(ce).length===0&&f.delete(Z)}i.remove(O)}function E(O){const C=i.get(O);n.deleteTexture(C.__webglTexture);const Z=O.source,ce=f.get(Z);delete ce[C.__cacheKey],o.memory.textures--}function M(O){const C=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(C.__webglFramebuffer[ce]))for(let fe=0;fe<C.__webglFramebuffer[ce].length;fe++)n.deleteFramebuffer(C.__webglFramebuffer[ce][fe]);else n.deleteFramebuffer(C.__webglFramebuffer[ce]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ce])}else{if(Array.isArray(C.__webglFramebuffer))for(let ce=0;ce<C.__webglFramebuffer.length;ce++)n.deleteFramebuffer(C.__webglFramebuffer[ce]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ce=0;ce<C.__webglColorRenderbuffer.length;ce++)C.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ce]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=O.textures;for(let ce=0,fe=Z.length;ce<fe;ce++){const he=i.get(Z[ce]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(Z[ce])}i.remove(O)}let w=0;function L(){w=0}function k(){const O=w;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),w+=1,O}function I(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function H(O,C){const Z=i.get(O);if(O.isVideoTexture&&ze(O),O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){const ce=O.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,O,C);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+C)}function z(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){ye(Z,O,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+C)}function N(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){ye(Z,O,C);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+C)}function V(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){j(Z,O,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+C)}const U={[cp]:n.REPEAT,[Vs]:n.CLAMP_TO_EDGE,[up]:n.MIRRORED_REPEAT},$={[Nn]:n.NEAREST,[eE]:n.NEAREST_MIPMAP_NEAREST,[pc]:n.NEAREST_MIPMAP_LINEAR,[Fi]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},q={[sE]:n.NEVER,[fE]:n.ALWAYS,[oE]:n.LESS,[tS]:n.LEQUAL,[aE]:n.EQUAL,[uE]:n.GEQUAL,[lE]:n.GREATER,[cE]:n.NOTEQUAL};function Q(O,C){if(C.type===nr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Fi||C.magFilter===_h||C.magFilter===pc||C.magFilter===Gs||C.minFilter===Fi||C.minFilter===_h||C.minFilter===pc||C.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,U[C.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,U[C.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,U[C.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,$[C.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Nn||C.minFilter!==pc&&C.minFilter!==Gs||C.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function ie(O,C){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",T));const ce=C.source;let fe=f.get(ce);fe===void 0&&(fe={},f.set(ce,fe));const he=I(C);if(he!==O.__cacheKey){fe[he]===void 0&&(fe[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),fe[he].usedTimes++;const Xe=fe[O.__cacheKey];Xe!==void 0&&(fe[O.__cacheKey].usedTimes--,Xe.usedTimes===0&&E(C)),O.__cacheKey=he,O.__webglTexture=fe[he].texture}return Z}function ye(O,C,Z){let ce=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ce=n.TEXTURE_3D);const fe=ie(O,C),he=C.source;t.bindTexture(ce,O.__webglTexture,n.TEXTURE0+Z);const Xe=i.get(he);if(he.version!==Xe.__version||fe===!0){t.activeTexture(n.TEXTURE0+Z);const Le=Lt.getPrimaries(Lt.workingColorSpace),Ue=C.colorSpace===es?null:Lt.getPrimaries(C.colorSpace),rt=C.colorSpace===es||Le===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=_(C.image,!1,r.maxTextureSize);Me=be(C,Me);const He=s.convert(C.format,C.colorSpace),mt=s.convert(C.type);let st=x(C.internalFormat,He,mt,C.colorSpace,C.isVideoTexture);Q(ce,C);let je;const at=C.mipmaps,ut=C.isVideoTexture!==!0,It=Xe.__version===void 0||fe===!0,b=he.dataReady,J=S(C,Me);if(C.isDepthTexture)st=m(C.format===_a,C.type),It&&(ut?t.texStorage2D(n.TEXTURE_2D,1,st,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,st,Me.width,Me.height,0,He,mt,null));else if(C.isDataTexture)if(at.length>0){ut&&It&&t.texStorage2D(n.TEXTURE_2D,J,st,at[0].width,at[0].height);for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,mt,je.data):t.texImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,He,mt,je.data);C.generateMipmaps=!1}else ut?(It&&t.texStorage2D(n.TEXTURE_2D,J,st,Me.width,Me.height),b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,He,mt,Me.data)):t.texImage2D(n.TEXTURE_2D,0,st,Me.width,Me.height,0,He,mt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,st,at[0].width,at[0].height,Me.depth);for(let ee=0,ne=at.length;ee<ne;ee++)if(je=at[ee],C.format!==Hi)if(He!==null)if(ut){if(b)if(C.layerUpdates.size>0){const Se=Mv(je.width,je.height,C.format,C.type);for(const F of C.layerUpdates){const Y=je.data.subarray(F*Se/je.data.BYTES_PER_ELEMENT,(F+1)*Se/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,F,je.width,je.height,1,He,Y,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,je.width,je.height,Me.depth,He,je.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,st,je.width,je.height,Me.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?b&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,je.width,je.height,Me.depth,He,mt,je.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,st,je.width,je.height,Me.depth,0,He,mt,je.data)}else{ut&&It&&t.texStorage2D(n.TEXTURE_2D,J,st,at[0].width,at[0].height);for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],C.format!==Hi?He!==null?ut?b&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,je.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,mt,je.data):t.texImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,He,mt,je.data)}else if(C.isDataArrayTexture)if(ut){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,st,Me.width,Me.height,Me.depth),b)if(C.layerUpdates.size>0){const ee=Mv(Me.width,Me.height,C.format,C.type);for(const ne of C.layerUpdates){const Se=Me.data.subarray(ne*ee/Me.data.BYTES_PER_ELEMENT,(ne+1)*ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,Me.width,Me.height,1,He,mt,Se)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,mt,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,st,Me.width,Me.height,Me.depth,0,He,mt,Me.data);else if(C.isData3DTexture)ut?(It&&t.texStorage3D(n.TEXTURE_3D,J,st,Me.width,Me.height,Me.depth),b&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,mt,Me.data)):t.texImage3D(n.TEXTURE_3D,0,st,Me.width,Me.height,Me.depth,0,He,mt,Me.data);else if(C.isFramebufferTexture){if(It)if(ut)t.texStorage2D(n.TEXTURE_2D,J,st,Me.width,Me.height);else{let ee=Me.width,ne=Me.height;for(let Se=0;Se<J;Se++)t.texImage2D(n.TEXTURE_2D,Se,st,ee,ne,0,He,mt,null),ee>>=1,ne>>=1}}else if(at.length>0){if(ut&&It){const ee=Fe(at[0]);t.texStorage2D(n.TEXTURE_2D,J,st,ee.width,ee.height)}for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,He,mt,je):t.texImage2D(n.TEXTURE_2D,ee,st,He,mt,je);C.generateMipmaps=!1}else if(ut){if(It){const ee=Fe(Me);t.texStorage2D(n.TEXTURE_2D,J,st,ee.width,ee.height)}b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,mt,Me)}else t.texImage2D(n.TEXTURE_2D,0,st,He,mt,Me);v(C)&&d(ce),Xe.__version=he.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function j(O,C,Z){if(C.image.length!==6)return;const ce=ie(O,C),fe=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+Z);const he=i.get(fe);if(fe.version!==he.__version||ce===!0){t.activeTexture(n.TEXTURE0+Z);const Xe=Lt.getPrimaries(Lt.workingColorSpace),Le=C.colorSpace===es?null:Lt.getPrimaries(C.colorSpace),Ue=C.colorSpace===es||Xe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const rt=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,He=[];for(let ne=0;ne<6;ne++)!rt&&!Me?He[ne]=_(C.image[ne],!0,r.maxCubemapSize):He[ne]=Me?C.image[ne].image:C.image[ne],He[ne]=be(C,He[ne]);const mt=He[0],st=s.convert(C.format,C.colorSpace),je=s.convert(C.type),at=x(C.internalFormat,st,je,C.colorSpace),ut=C.isVideoTexture!==!0,It=he.__version===void 0||ce===!0,b=fe.dataReady;let J=S(C,mt);Q(n.TEXTURE_CUBE_MAP,C);let ee;if(rt){ut&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,at,mt.width,mt.height);for(let ne=0;ne<6;ne++){ee=He[ne].mipmaps;for(let Se=0;Se<ee.length;Se++){const F=ee[Se];C.format!==Hi?st!==null?ut?b&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,F.width,F.height,st,F.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,at,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,F.width,F.height,st,je,F.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,at,F.width,F.height,0,st,je,F.data)}}}else{if(ee=C.mipmaps,ut&&It){ee.length>0&&J++;const ne=Fe(He[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,at,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Me){ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He[ne].width,He[ne].height,st,je,He[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,at,He[ne].width,He[ne].height,0,st,je,He[ne].data);for(let Se=0;Se<ee.length;Se++){const Y=ee[Se].image[ne].image;ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,Y.width,Y.height,st,je,Y.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,at,Y.width,Y.height,0,st,je,Y.data)}}else{ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,st,je,He[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,at,st,je,He[ne]);for(let Se=0;Se<ee.length;Se++){const F=ee[Se];ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,st,je,F.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,at,st,je,F.image[ne])}}}v(C)&&d(n.TEXTURE_CUBE_MAP),he.__version=fe.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function te(O,C,Z,ce,fe,he){const Xe=s.convert(Z.format,Z.colorSpace),Le=s.convert(Z.type),Ue=x(Z.internalFormat,Xe,Le,Z.colorSpace);if(!i.get(C).__hasExternalTextures){const Me=Math.max(1,C.width>>he),He=Math.max(1,C.height>>he);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,he,Ue,Me,He,C.depth,0,Xe,Le,null):t.texImage2D(fe,he,Ue,Me,He,0,Xe,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,fe,i.get(Z).__webglTexture,0,de(C)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,fe,i.get(Z).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(O,C,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,O),C.depthBuffer){const ce=C.depthTexture,fe=ce&&ce.isDepthTexture?ce.type:null,he=m(C.stencilBuffer,fe),Xe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=de(C);B(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,he,C.width,C.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,O)}else{const ce=C.textures;for(let fe=0;fe<ce.length;fe++){const he=ce[fe],Xe=s.convert(he.format,he.colorSpace),Le=s.convert(he.type),Ue=x(he.internalFormat,Xe,Le,he.colorSpace),rt=de(C);Z&&B(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Ue,C.width,C.height):B(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Ue,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const ce=i.get(C.depthTexture).__webglTexture,fe=de(C);if(C.depthTexture.format===sa)B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(C.depthTexture.format===_a)B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function me(O){const C=i.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");re(C.__webglFramebuffer,O)}else if(Z){C.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ce]),C.__webglDepthbuffer[ce]=n.createRenderbuffer(),pe(C.__webglDepthbuffer[ce],O,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),pe(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(O,C,Z){const ce=i.get(O);C!==void 0&&te(ce.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&me(O)}function De(O){const C=O.texture,Z=i.get(O),ce=i.get(C);O.addEventListener("dispose",A);const fe=O.textures,he=O.isWebGLCubeRenderTarget===!0,Xe=fe.length>1;if(Xe||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=C.version,o.memory.textures++),he){Z.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Le]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)Z.__webglFramebuffer[Le][Ue]=n.createFramebuffer()}else Z.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Le=0;Le<C.mipmaps.length;Le++)Z.__webglFramebuffer[Le]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let Le=0,Ue=fe.length;Le<Ue;Le++){const rt=i.get(fe[Le]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&B(O)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Le=0;Le<fe.length;Le++){const Ue=fe[Le];Z.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Le]);const rt=s.convert(Ue.format,Ue.colorSpace),Me=s.convert(Ue.type),He=x(Ue.internalFormat,rt,Me,Ue.colorSpace,O.isXRRenderTarget===!0),mt=de(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,He,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Q(n.TEXTURE_CUBE_MAP,C);for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)te(Z.__webglFramebuffer[Le][Ue],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ue);else te(Z.__webglFramebuffer[Le],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);v(C)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Le=0,Ue=fe.length;Le<Ue;Le++){const rt=fe[Le],Me=i.get(rt);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),Q(n.TEXTURE_2D,rt),te(Z.__webglFramebuffer,O,rt,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),v(rt)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,ce.__webglTexture),Q(Le,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)te(Z.__webglFramebuffer[Ue],O,C,n.COLOR_ATTACHMENT0,Le,Ue);else te(Z.__webglFramebuffer,O,C,n.COLOR_ATTACHMENT0,Le,0);v(C)&&d(Le),t.unbindTexture()}O.depthBuffer&&me(O)}function Be(O){const C=O.textures;for(let Z=0,ce=C.length;Z<ce;Z++){const fe=C[Z];if(v(fe)){const he=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Xe=i.get(fe).__webglTexture;t.bindTexture(he,Xe),d(he),t.unbindTexture()}}}const P=[],se=[];function le(O){if(O.samples>0){if(B(O)===!1){const C=O.textures,Z=O.width,ce=O.height;let fe=n.COLOR_BUFFER_BIT;const he=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=i.get(O),Le=C.length>1;if(Le)for(let Ue=0;Ue<C.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=i.get(C[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,Z,ce,0,0,Z,ce,fe,n.NEAREST),l===!0&&(P.length=0,se.length=0,P.push(n.COLOR_ATTACHMENT0+Ue),O.depthBuffer&&O.resolveDepthBuffer===!1&&(P.push(he),se.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Ue=0;Ue<C.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=i.get(C[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,rt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const C=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function de(O){return Math.min(r.maxSamples,O.samples)}function B(O){const C=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ze(O){const C=o.render.frame;u.get(O)!==C&&(u.set(O,C),O.update())}function be(O,C){const Z=O.colorSpace,ce=O.format,fe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==Ms&&Z!==es&&(Lt.getTransfer(Z)===Gt?(ce!==Hi||fe!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=xe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=te,this.useMultisampledRTT=B}function A2(n,e){function t(i,r=es){let s;const o=Lt.getTransfer(r);if(i===Nr)return n.UNSIGNED_BYTE;if(i===Jm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===j_)return n.BYTE;if(i===Y_)return n.SHORT;if(i===Ul)return n.UNSIGNED_SHORT;if(i===Zm)return n.INT;if(i===eo)return n.UNSIGNED_INT;if(i===nr)return n.FLOAT;if(i===$l)return n.HALF_FLOAT;if(i===q_)return n.ALPHA;if(i===K_)return n.RGB;if(i===Hi)return n.RGBA;if(i===Z_)return n.LUMINANCE;if(i===J_)return n.LUMINANCE_ALPHA;if(i===sa)return n.DEPTH_COMPONENT;if(i===_a)return n.DEPTH_STENCIL;if(i===Af)return n.RED;if(i===eg)return n.RED_INTEGER;if(i===Q_)return n.RG;if(i===tg)return n.RG_INTEGER;if(i===ng)return n.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===vu)if(o===Gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fp||i===hp||i===dp||i===pp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mp||i===gp||i===vp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mp||i===gp)return o===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yp||i===xp||i===_p||i===Sp||i===Mp||i===wp||i===Ep||i===Tp||i===bp||i===Ap||i===Cp||i===Rp||i===Lp||i===Pp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_p)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ep)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ap)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Dp||i===Ip)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yu)return o===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eS||i===Np||i===Up||i===Op)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Up)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Op)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class C2 extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ko extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R2={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),d=this._getHandJoint(c,_);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const L2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new On,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ur({vertexShader:L2,fragmentShader:P2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I2 extends ro{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new D2,v=t.getContextAttributes();let d=null,x=null;const m=[],S=[],T=new ve;let A=null;const y=new li;y.layers.enable(1),y.viewport=new Ht;const E=new li;E.layers.enable(2),E.viewport=new Ht;const M=[y,E],w=new C2;w.layers.enable(1),w.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=m[j];return te===void 0&&(te=new Xh,m[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=m[j];return te===void 0&&(te=new Xh,m[j]=te),te.getGripSpace()},this.getHand=function(j){let te=m[j];return te===void 0&&(te=new Xh,m[j]=te),te.getHandSpace()};function I(j){const te=S.indexOf(j.inputSource);if(te===-1)return;const pe=m[te];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||o),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let j=0;j<m.length;j++){const te=S[j];te!==null&&(S[j]=null,m[j].disconnect(te))}L=null,k=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,x=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new vs(p.framebufferWidth,p.framebufferHeight,{format:Hi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let te=null,pe=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?_a:sa,pe=v.stencil?xa:eo);const me={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new vs(f.textureWidth,f.textureHeight,{format:Hi,type:Nr,depthTexture:new dS(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(j){for(let te=0;te<j.removed.length;te++){const pe=j.removed[te],re=S.indexOf(pe);re>=0&&(S[re]=null,m[re].disconnect(pe))}for(let te=0;te<j.added.length;te++){const pe=j.added[te];let re=S.indexOf(pe);if(re===-1){for(let xe=0;xe<m.length;xe++)if(xe>=S.length){S.push(pe),re=xe;break}else if(S[xe]===null){S[xe]=pe,re=xe;break}if(re===-1)break}const me=m[re];me&&me.connect(pe)}}const N=new D,V=new D;function U(j,te,pe){N.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(pe.matrixWorld);const re=N.distanceTo(V),me=te.projectionMatrix.elements,xe=pe.projectionMatrix.elements,De=me[14]/(me[10]-1),Be=me[14]/(me[10]+1),P=(me[9]+1)/me[5],se=(me[9]-1)/me[5],le=(me[8]-1)/me[0],de=(xe[8]+1)/xe[0],B=De*le,ze=De*de,be=re/(-le+de),Fe=be*-le;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const O=De+be,C=Be+be,Z=B-Fe,ce=ze+(re-Fe),fe=P*Be/C*O,he=se*Be/C*O;j.projectionMatrix.makePerspective(Z,ce,fe,he,O,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function $(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),w.near=E.near=y.near=j.near,w.far=E.far=y.far=j.far,(L!==w.near||k!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,k=w.far,y.near=L,y.far=k,E.near=L,E.far=k,y.updateProjectionMatrix(),E.updateProjectionMatrix(),j.updateProjectionMatrix());const te=j.parent,pe=w.cameras;$(w,te);for(let re=0;re<pe.length;re++)$(pe[re],te);pe.length===2?U(w,y,E):w.projectionMatrix.copy(y.projectionMatrix),q(j,w,te)};function q(j,te,pe){pe===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ol*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let Q=null;function ie(j,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let re=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,re=!0);for(let xe=0;xe<pe.length;xe++){const De=pe[xe];let Be=null;if(p!==null)Be=p.getViewport(De);else{const se=h.getViewSubImage(f,De);Be=se.viewport,xe===0&&(e.setRenderTargetTextures(x,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let P=M[xe];P===void 0&&(P=new li,P.layers.enable(xe),P.viewport=new Ht,M[xe]=P),P.matrix.fromArray(De.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(De.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Be.x,Be.y,Be.width,Be.height),xe===0&&(w.matrix.copy(P.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),re===!0&&w.cameras.push(P)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const xe=h.getDepthInformation(pe[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let pe=0;pe<m.length;pe++){const re=S[pe],me=m[pe];re!==null&&me!==void 0&&me.update(re,te,c||o)}Q&&Q(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const ye=new hS;ye.setAnimationLoop(ie),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const Ls=new pi,N2=new Et;function U2(n,e){function t(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,cS(n)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,x,m,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(v,d):d.isMeshToonMaterial?(s(v,d),h(v,d)):d.isMeshPhongMaterial?(s(v,d),u(v,d)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&p(v,d,S)):d.isMeshMatcapMaterial?(s(v,d),g(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),_(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&a(v,d)):d.isPointsMaterial?l(v,d,x,m):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,t(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===ei&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,t(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===ei&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,t(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,t(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const x=e.get(d),m=x.envMap,S=x.envMapRotation;m&&(v.envMap.value=m,Ls.copy(S),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),v.envMapRotation.value.setFromMatrix4(N2.makeRotationFromEuler(Ls)),v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform))}function a(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,x,m){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*x,v.scale.value=m*.5,d.map&&(v.map.value=d.map,t(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function p(v,d,x){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ei&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,d){d.matcap&&(v.matcap.value=d.matcap)}function _(v,d){const x=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,m){const S=m.program;i.uniformBlockBinding(x,S)}function c(x,m){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",v));const T=m.program;i.updateUBOMapping(x,T);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const m=h();x.__bindingPointIndex=m;const S=n.createBuffer(),T=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const m=r[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let A=0,y=S.length;A<y;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,w=E.length;M<w;M++){const L=E[M];if(p(L,A,M,T)===!0){const k=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let z=0;z<I.length;z++){const N=I[z],V=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,k+H,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,m,S,T){const A=x.value,y=m+"_"+S;if(T[y]===void 0)return typeof A=="number"||typeof A=="boolean"?T[y]=A:T[y]=A.clone(),!0;{const E=T[y];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return T[y]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function g(x){const m=x.uniforms;let S=0;const T=16;for(let y=0,E=m.length;y<E;y++){const M=Array.isArray(m[y])?m[y]:[m[y]];for(let w=0,L=M.length;w<L;w++){const k=M[w],I=Array.isArray(k.value)?k.value:[k.value];for(let H=0,z=I.length;H<z;H++){const N=I[H],V=_(N),U=S%T,$=U%V.boundary,q=U+$;S+=$,q!==0&&T-q<V.storage&&(S+=T-q),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=V.storage}}}const A=S%T;return A>0&&(S+=T-A),x.__size=S,x.__cache={},this}function _(x){const m={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(m.boundary=4,m.storage=4):x.isVector2?(m.boundary=8,m.storage=8):x.isVector3||x.isColor?(m.boundary=16,m.storage=12):x.isVector4?(m.boundary=16,m.storage=16):x.isMatrix3?(m.boundary=48,m.storage=48):x.isMatrix4?(m.boundary=64,m.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),m}function v(x){const m=x.target;m.removeEventListener("dispose",v);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function d(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class z2{constructor(e={}){const{canvas:t=CE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,v=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this.toneMapping=ps,this.toneMappingExposure=1;const m=this;let S=!1,T=0,A=0,y=null,E=-1,M=null;const w=new Ht,L=new Ht;let k=null;const I=new nt(0);let H=0,z=t.width,N=t.height,V=1,U=null,$=null;const q=new Ht(0,0,z,N),Q=new Ht(0,0,z,N);let ie=!1;const ye=new ag;let j=!1,te=!1;const pe=new Et,re=new D,me=new Ht,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Be(){return y===null?V:1}let P=i;function se(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$m}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Se,!1),P===null){const G="webgl2";if(P=se(G,R),P===null)throw se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,de,B,ze,be,Fe,O,C,Z,ce,fe,he,Xe,Le,Ue,rt,Me,He,mt,st,je,at,ut,It;function b(){le=new GA(P),le.init(),at=new A2(P,le),de=new zA(P,le,e,at),B=new E2(P),ze=new jA(P),be=new u2,Fe=new b2(P,le,B,be,de,at,ze),O=new kA(m),C=new VA(m),Z=new QE(P),ut=new UA(P,Z),ce=new WA(P,Z,ze,ut),fe=new $A(P,ce,Z,ze),mt=new YA(P,de,Fe),rt=new FA(be),he=new c2(m,O,C,le,de,ut,rt),Xe=new U2(m,be),Le=new h2,Ue=new y2(le),He=new NA(m,O,C,B,fe,f,l),Me=new w2(m,fe,de),It=new O2(P,ze,de,B),st=new OA(P,le,ze),je=new XA(P,le,ze),ze.programs=he.programs,m.capabilities=de,m.extensions=le,m.properties=be,m.renderLists=Le,m.shadowMap=Me,m.state=B,m.info=ze}b();const J=new I2(m,P);this.xr=J,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(z,N,!1))},this.getSize=function(R){return R.set(z,N)},this.setSize=function(R,G,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,N=G,t.width=Math.floor(R*V),t.height=Math.floor(G*V),X===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(z*V,N*V).floor()},this.setDrawingBufferSize=function(R,G,X){z=R,N=G,V=X,t.width=Math.floor(R*X),t.height=Math.floor(G*X),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,G,X,K){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,G,X,K),B.viewport(w.copy(q).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,G,X,K){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,G,X,K),B.scissor(L.copy(Q).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){B.setScissorTest(ie=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(R=!0,G=!0,X=!0){let K=0;if(R){let W=!1;if(y!==null){const ae=y.texture.format;W=ae===ng||ae===tg||ae===eg}if(W){const ae=y.texture.type,ue=ae===Nr||ae===eo||ae===Ul||ae===xa||ae===Jm||ae===Qm,_e=He.getClearColor(),oe=He.getClearAlpha(),Ae=_e.r,Re=_e.g,Ge=_e.b;ue?(p[0]=Ae,p[1]=Re,p[2]=Ge,p[3]=oe,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Ae,g[1]=Re,g[2]=Ge,g[3]=oe,P.clearBufferiv(P.COLOR,0,g))}else K|=P.COLOR_BUFFER_BIT}G&&(K|=P.DEPTH_BUFFER_BIT),X&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Le.dispose(),Ue.dispose(),be.dispose(),O.dispose(),C.dispose(),fe.dispose(),ut.dispose(),It.dispose(),he.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ze),J.removeEventListener("sessionend",we),lt.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ze.autoReset,G=Me.enabled,X=Me.autoUpdate,K=Me.needsUpdate,W=Me.type;b(),ze.autoReset=R,Me.enabled=G,Me.autoUpdate=X,Me.needsUpdate=K,Me.type=W}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function F(R){const G=R.target;G.removeEventListener("dispose",F),Y(G)}function Y(R){Oe(R),be.remove(R)}function Oe(R){const G=be.get(R).programs;G!==void 0&&(G.forEach(function(X){he.releaseProgram(X)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,X,K,W,ae){G===null&&(G=xe);const ue=W.isMesh&&W.matrixWorld.determinant()<0,_e=Qe(R,G,X,K,W);B.setMaterial(K,ue);let oe=X.index,Ae=1;if(K.wireframe===!0){if(oe=ce.getWireframeAttribute(X),oe===void 0)return;Ae=2}const Re=X.drawRange,Ge=X.attributes.position;let it=Re.start*Ae,Ct=(Re.start+Re.count)*Ae;ae!==null&&(it=Math.max(it,ae.start*Ae),Ct=Math.min(Ct,(ae.start+ae.count)*Ae)),oe!==null?(it=Math.max(it,0),Ct=Math.min(Ct,oe.count)):Ge!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,Ge.count));const Mt=Ct-it;if(Mt<0||Mt===1/0)return;ut.setup(W,K,_e,X,oe);let yn,_t=st;if(oe!==null&&(yn=Z.get(oe),_t=je,_t.setIndex(yn)),W.isMesh)K.wireframe===!0?(B.setLineWidth(K.wireframeLinewidth*Be()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(W.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),B.setLineWidth(Je*Be()),W.isLineSegments?_t.setMode(P.LINES):W.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else W.isPoints?_t.setMode(P.POINTS):W.isSprite&&_t.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Je=W._multiDrawStarts,an=W._multiDrawCounts,Tt=W._multiDrawCount,Fn=oe?Z.get(oe).bytesPerElement:1,lr=be.get(K).currentProgram.getUniforms();for(let xn=0;xn<Tt;xn++)lr.setValue(P,"_gl_DrawID",xn),_t.render(Je[xn]/Fn,an[xn])}else if(W.isInstancedMesh)_t.renderInstances(it,Mt,W.count);else if(X.isInstancedBufferGeometry){const Je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,an=Math.min(X.instanceCount,Je);_t.renderInstances(it,Mt,an)}else _t.render(it,Mt)};function We(R,G,X){R.transparent===!0&&R.side===kt&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ce(R,G,X),R.side=Xi,R.needsUpdate=!0,Ce(R,G,X),R.side=kt):Ce(R,G,X)}this.compile=function(R,G,X=null){X===null&&(X=R),v=Ue.get(X),v.init(G),x.push(v),X.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),R!==X&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const K=new Set;return R.traverse(function(W){const ae=W.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){const _e=ae[ue];We(_e,X,W),K.add(_e)}else We(ae,X,W),K.add(ae)}),x.pop(),v=null,K},this.compileAsync=function(R,G,X=null){const K=this.compile(R,G,X);return new Promise(W=>{function ae(){if(K.forEach(function(ue){be.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size===0){W(R);return}setTimeout(ae,10)}le.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ve=null;function qe(R){Ve&&Ve(R)}function Ze(){lt.stop()}function we(){lt.start()}const lt=new hS;lt.setAnimationLoop(qe),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(R){Ve=R,J.setAnimationLoop(R),R===null?lt.stop():lt.start()},J.addEventListener("sessionstart",Ze),J.addEventListener("sessionend",we),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,G,y),v=Ue.get(R,x.length),v.init(G),x.push(v),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ye.setFromProjectionMatrix(pe),te=this.localClippingEnabled,j=rt.init(this.clippingPlanes,te),_=Le.get(R,d.length),_.init(),d.push(_),J.enabled===!0&&J.isPresenting===!0){const ae=m.xr.getDepthSensingMesh();ae!==null&&wt(ae,G,-1/0,m.sortObjects)}wt(R,G,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(U,$),De=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,De&&He.addToRenderList(_,R),this.info.render.frame++,j===!0&&rt.beginShadows();const X=v.state.shadowsArray;Me.render(X,R,G),j===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,W=_.transmissive;if(v.setupLights(),G.isArrayCamera){const ae=G.cameras;if(W.length>0)for(let ue=0,_e=ae.length;ue<_e;ue++){const oe=ae[ue];Pe(K,W,R,oe)}De&&He.render(R);for(let ue=0,_e=ae.length;ue<_e;ue++){const oe=ae[ue];ge(_,R,oe,oe.viewport)}}else W.length>0&&Pe(K,W,R,G),De&&He.render(R),ge(_,R,G);y!==null&&(Fe.updateMultisampleRenderTarget(y),Fe.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(m,R,G),ut.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(v=x[x.length-1],j===!0&&rt.setGlobalState(m.clippingPlanes,v.state.camera)):v=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function wt(R,G,X,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){K&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const ue=fe.update(R),_e=R.material;_e.visible&&_.push(R,ue,_e,X,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){const ue=fe.update(R),_e=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),me.copy(ue.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(_e)){const oe=ue.groups;for(let Ae=0,Re=oe.length;Ae<Re;Ae++){const Ge=oe[Ae],it=_e[Ge.materialIndex];it&&it.visible&&_.push(R,ue,it,X,me.z,Ge)}}else _e.visible&&_.push(R,ue,_e,X,me.z,null)}}const ae=R.children;for(let ue=0,_e=ae.length;ue<_e;ue++)wt(ae[ue],G,X,K)}function ge(R,G,X,K){const W=R.opaque,ae=R.transmissive,ue=R.transparent;v.setupLightsView(X),j===!0&&rt.setGlobalState(m.clippingPlanes,X),K&&B.viewport(w.copy(K)),W.length>0&&Ke(W,G,X),ae.length>0&&Ke(ae,G,X),ue.length>0&&Ke(ue,G,X),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Pe(R,G,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[K.id]===void 0&&(v.state.transmissionRenderTarget[K.id]=new vs(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?$l:Nr,minFilter:Gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const ae=v.state.transmissionRenderTarget[K.id],ue=K.viewport||w;ae.setSize(ue.z,ue.w);const _e=m.getRenderTarget();m.setRenderTarget(ae),m.getClearColor(I),H=m.getClearAlpha(),H<1&&m.setClearColor(16777215,.5),m.clear(),De&&He.render(X);const oe=m.toneMapping;m.toneMapping=ps;const Ae=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),v.setupLightsView(K),j===!0&&rt.setGlobalState(m.clippingPlanes,K),Ke(R,X,K),Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae),le.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ge=0,it=G.length;Ge<it;Ge++){const Ct=G[Ge],Mt=Ct.object,yn=Ct.geometry,_t=Ct.material,Je=Ct.group;if(_t.side===kt&&Mt.layers.test(K.layers)){const an=_t.side;_t.side=ei,_t.needsUpdate=!0,ct(Mt,X,K,yn,_t,Je),_t.side=an,_t.needsUpdate=!0,Re=!0}}Re===!0&&(Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae))}m.setRenderTarget(_e),m.setClearColor(I,H),Ae!==void 0&&(K.viewport=Ae),m.toneMapping=oe}function Ke(R,G,X){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ae=R.length;W<ae;W++){const ue=R[W],_e=ue.object,oe=ue.geometry,Ae=K===null?ue.material:K,Re=ue.group;_e.layers.test(X.layers)&&ct(_e,G,X,oe,Ae,Re)}}function ct(R,G,X,K,W,ae){R.onBeforeRender(m,G,X,K,W,ae),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.transparent===!0&&W.side===kt&&W.forceSinglePass===!1?(W.side=ei,W.needsUpdate=!0,m.renderBufferDirect(X,G,K,W,R,ae),W.side=Xi,W.needsUpdate=!0,m.renderBufferDirect(X,G,K,W,R,ae),W.side=kt):m.renderBufferDirect(X,G,K,W,R,ae),R.onAfterRender(m,G,X,K,W,ae)}function Ce(R,G,X){G.isScene!==!0&&(G=xe);const K=be.get(R),W=v.state.lights,ae=v.state.shadowsArray,ue=W.state.version,_e=he.getParameters(R,W.state,ae,G,X),oe=he.getProgramCacheKey(_e);let Ae=K.programs;K.environment=R.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(R.isMeshStandardMaterial?C:O).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",F),Ae=new Map,K.programs=Ae);let Re=Ae.get(oe);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===ue)return et(R,_e),Re}else _e.uniforms=he.getUniforms(R),R.onBeforeCompile(_e,m),Re=he.acquireProgram(_e,oe),Ae.set(oe,Re),K.uniforms=_e.uniforms;const Ge=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=rt.uniform),et(R,_e),K.needsLights=yt(R),K.lightsStateVersion=ue,K.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function ft(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=xu.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function et(R,G){const X=be.get(R);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.batchingColor=G.batchingColor,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.instancingMorph=G.instancingMorph,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function Qe(R,G,X,K,W){G.isScene!==!0&&(G=xe),Fe.resetTextureUnits();const ae=G.fog,ue=K.isMeshStandardMaterial?G.environment:null,_e=y===null?m.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ms,oe=(K.isMeshStandardMaterial?C:O).get(K.envMap||ue),Ae=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let Mt=ps;K.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Mt=m.toneMapping);const yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=yn!==void 0?yn.length:0,Je=be.get(K),an=v.state.lights;if(j===!0&&(te===!0||R!==M)){const zt=R===M&&K.id===E;rt.setState(K,R,zt)}let Tt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==an.state.version||Je.outputColorSpace!==_e||W.isBatchedMesh&&Je.batching===!1||!W.isBatchedMesh&&Je.batching===!0||W.isBatchedMesh&&Je.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Je.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Je.instancing===!1||!W.isInstancedMesh&&Je.instancing===!0||W.isSkinnedMesh&&Je.skinning===!1||!W.isSkinnedMesh&&Je.skinning===!0||W.isInstancedMesh&&Je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Je.instancingMorph===!1&&W.morphTexture!==null||Je.envMap!==oe||K.fog===!0&&Je.fog!==ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==rt.numPlanes||Je.numIntersection!==rt.numIntersection)||Je.vertexAlphas!==Ae||Je.vertexTangents!==Re||Je.morphTargets!==Ge||Je.morphNormals!==it||Je.morphColors!==Ct||Je.toneMapping!==Mt||Je.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,Je.__version=K.version);let Fn=Je.currentProgram;Tt===!0&&(Fn=Ce(K,G,W));let lr=!1,xn=!1,oo=!1;const gt=Fn.getUniforms(),_n=Je.uniforms;if(B.useProgram(Fn.program)&&(lr=!0,xn=!0,oo=!0),K.id!==E&&(E=K.id,xn=!0),lr||M!==R){gt.setValue(P,"projectionMatrix",R.projectionMatrix),gt.setValue(P,"viewMatrix",R.matrixWorldInverse);const zt=gt.map.cameraPosition;zt!==void 0&&zt.setValue(P,re.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xn=!0,oo=!0)}if(W.isSkinnedMesh){gt.setOptional(P,W,"bindMatrix"),gt.setOptional(P,W,"bindMatrixInverse");const zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(P,"boneTexture",zt.boneTexture,Fe))}W.isBatchedMesh&&(gt.setOptional(P,W,"batchingTexture"),gt.setValue(P,"batchingTexture",W._matricesTexture,Fe),gt.setOptional(P,W,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",W._indirectTexture,Fe),gt.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",W._colorsTexture,Fe));const Sn=X.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&mt.update(W,X,Fn),(xn||Je.receiveShadow!==W.receiveShadow)&&(Je.receiveShadow=W.receiveShadow,gt.setValue(P,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=oe,_n.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(_n.envMapIntensity.value=G.environmentIntensity),xn&&(gt.setValue(P,"toneMappingExposure",m.toneMappingExposure),Je.needsLights&&tt(_n,oo),ae&&K.fog===!0&&Xe.refreshFogUniforms(_n,ae),Xe.refreshMaterialUniforms(_n,K,V,N,v.state.transmissionRenderTarget[R.id]),xu.upload(P,ft(Je),_n,Fe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xu.upload(P,ft(Je),_n,Fe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(P,"center",W.center),gt.setValue(P,"modelViewMatrix",W.modelViewMatrix),gt.setValue(P,"normalMatrix",W.normalMatrix),gt.setValue(P,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let Rt=0,Ft=zt.length;Rt<Ft;Rt++){const Yt=zt[Rt];It.update(Yt,Fn),It.bind(Yt,Fn)}}return Fn}function tt(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function yt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,G,X){be.get(R.texture).__webglTexture=G,be.get(R.depthTexture).__webglTexture=X;const K=be.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const X=be.get(R);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,X=0){y=R,T=G,A=X;let K=!0,W=null,ae=!1,ue=!1;if(R){const oe=be.get(R);oe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(P.FRAMEBUFFER,null),K=!1):oe.__webglFramebuffer===void 0?Fe.setupRenderTarget(R):oe.__hasExternalTextures&&Fe.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Re=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Re[G])?W=Re[G][X]:W=Re[G],ae=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?W=be.get(R).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[X]:W=Re,w.copy(R.viewport),L.copy(R.scissor),k=R.scissorTest}else w.copy(q).multiplyScalar(V).floor(),L.copy(Q).multiplyScalar(V).floor(),k=ie;if(B.bindFramebuffer(P.FRAMEBUFFER,W)&&K&&B.drawBuffers(R,W),B.viewport(w),B.scissor(L),B.setScissorTest(k),ae){const oe=be.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe.__webglTexture,X)}else if(ue){const oe=be.get(R.texture),Ae=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,oe.__webglTexture,X||0,Ae)}E=-1},this.readRenderTargetPixels=function(R,G,X,K,W,ae,ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){B.bindFramebuffer(P.FRAMEBUFFER,_e);try{const oe=R.texture,Ae=oe.format,Re=oe.type;if(!de.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&X>=0&&X<=R.height-W&&P.readPixels(G,X,K,W,at.convert(Ae),at.convert(Re),ae)}finally{const oe=y!==null?be.get(y).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(R,G,X,K,W,ae,ue){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){B.bindFramebuffer(P.FRAMEBUFFER,_e);try{const oe=R.texture,Ae=oe.format,Re=oe.type;if(!de.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-K&&X>=0&&X<=R.height-W){const Ge=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(G,X,K,W,at.convert(Ae),at.convert(Re),0),P.flush();const it=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await RE(P,it,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae)}finally{P.deleteBuffer(Ge),P.deleteSync(it)}return ae}}finally{const oe=y!==null?be.get(y).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,oe)}}},this.copyFramebufferToTexture=function(R,G=null,X=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-X),W=Math.floor(R.image.width*K),ae=Math.floor(R.image.height*K),ue=G!==null?G.x:0,_e=G!==null?G.y:0;Fe.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,ue,_e,W,ae),B.unbindTexture()},this.copyTextureToTexture=function(R,G,X=null,K=null,W=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],G=arguments[2],W=arguments[3]||0,X=null);let ae,ue,_e,oe,Ae,Re;X!==null?(ae=X.max.x-X.min.x,ue=X.max.y-X.min.y,_e=X.min.x,oe=X.min.y):(ae=R.image.width,ue=R.image.height,_e=0,oe=0),K!==null?(Ae=K.x,Re=K.y):(Ae=0,Re=0);const Ge=at.convert(G.format),it=at.convert(G.type);Fe.setTexture2D(G,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const Ct=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),_t=P.getParameter(P.UNPACK_SKIP_ROWS),Je=P.getParameter(P.UNPACK_SKIP_IMAGES),an=R.isCompressedTexture?R.mipmaps[W]:R.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,an.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,an.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,oe),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,Ae,Re,ae,ue,Ge,it,an.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,Ae,Re,an.width,an.height,Ge,an.data):P.texSubImage2D(P.TEXTURE_2D,W,Ae,Re,ae,ue,Ge,it,an),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,_t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je),W===0&&G.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(R,G,X=null,K=null,W=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,R=arguments[2],G=arguments[3],W=arguments[4]||0);let ae,ue,_e,oe,Ae,Re,Ge,it,Ct;const Mt=R.isCompressedTexture?R.mipmaps[W]:R.image;X!==null?(ae=X.max.x-X.min.x,ue=X.max.y-X.min.y,_e=X.max.z-X.min.z,oe=X.min.x,Ae=X.min.y,Re=X.min.z):(ae=Mt.width,ue=Mt.height,_e=Mt.depth,oe=0,Ae=0,Re=0),K!==null?(Ge=K.x,it=K.y,Ct=K.z):(Ge=0,it=0,Ct=0);const yn=at.convert(G.format),_t=at.convert(G.type);let Je;if(G.isData3DTexture)Fe.setTexture3D(G,0),Je=P.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Fe.setTexture2DArray(G,0),Je=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const an=P.getParameter(P.UNPACK_ROW_LENGTH),Tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fn=P.getParameter(P.UNPACK_SKIP_PIXELS),lr=P.getParameter(P.UNPACK_SKIP_ROWS),xn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Je,W,Ge,it,Ct,ae,ue,_e,yn,_t,Mt.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(Je,W,Ge,it,Ct,ae,ue,_e,yn,Mt.data):P.texSubImage3D(Je,W,Ge,it,Ct,ae,ue,_e,yn,_t,Mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,an),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,lr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xn),W===0&&G.generateMipmaps&&P.generateMipmap(Je),B.unbindTexture()},this.initRenderTarget=function(R){be.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),B.unbindTexture()},this.resetState=function(){T=0,A=0,y=null,B.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rg?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Cf?"display-p3":"srgb"}}class Fp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class F2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return aa("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new D;class is{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new is(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class k2 extends On{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Nn,u=Nn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lo=new Et,Ev=new Et,Oc=[],Tv=new bi,B2=new Et,Wa=new Zt,Xa=new zr;class kp extends Zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wv(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,B2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lo),Tv.copy(e.boundingBox).applyMatrix4(Lo),this.boundingBox.union(Tv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lo),Xa.copy(e.boundingSphere).applyMatrix4(Lo),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Lo),Ev.multiplyMatrices(i,Lo),Wa.matrixWorld=Ev,Wa.raycast(e,Oc);for(let o=0,a=Oc.length;o<a;o++){const l=Oc[o];l.instanceId=s,l.object=this,t.push(l)}Oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new k2(new Float32Array(r*this.count),r,this.count,Af,nr));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yS extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new D,ef=new D,bv=new Et,ja=new Rf,zc=new zr,jh=new D,Av=new D;class H2 extends nn{constructor(e=new Ut,t=new yS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qu.fromBufferAttribute(t,r-1),ef.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qu.distanceTo(ef);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(r),zc.radius+=s,e.ray.intersectsSphere(zc)===!1)return;bv.copy(r).invert(),ja.copy(e.ray).applyMatrix4(bv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,v=g-1;_<v;_+=c){const d=u.getX(_),x=u.getX(_+1),m=Fc(this,e,ja,l,d,x);m&&t.push(m)}if(this.isLineLoop){const _=u.getX(g-1),v=u.getX(p),d=Fc(this,e,ja,l,_,v);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,v=g-1;_<v;_+=c){const d=Fc(this,e,ja,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Fc(this,e,ja,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Qu.fromBufferAttribute(o,r),ef.fromBufferAttribute(o,s),t.distanceSqToSegment(Qu,ef,jh,Av)>i)return;jh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(jh);if(!(l<e.near||l>e.far))return{distance:l,point:Av.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Cv=new D,Rv=new D;class V2 extends H2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Cv.fromBufferAttribute(t,r),Rv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cv.distanceTo(Rv);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bp extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lv=new Et,Hp=new Rf,kc=new zr,Bc=new D;class Pv extends nn{constructor(e=new Ut,t=new Bp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;Lv.copy(r).invert(),Hp.copy(e.ray).applyMatrix4(Lv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const v=c.getX(g);Bc.fromBufferAttribute(h,v),Dv(Bc,v,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Bc.fromBufferAttribute(h,g),Dv(Bc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dv(n,e,t,i,r,s,o){const a=Hp.distanceSqToPoint(n);if(a<t){const l=new D;Hp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Vp extends On{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ve:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],o=[],a=new D,l=new Et;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(un(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(un(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cg extends ar{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G2 extends cg{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ug(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Hc=new D,Yh=new ug,$h=new ug,qh=new ug;class W2 extends ar{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Hc.subVectors(r[0],r[1]).add(r[0]),c=Hc);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Hc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),Yh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,v),$h.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,v),qh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$h.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),qh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Yh.calc(l),$h.calc(l),qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Iv(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function X2(n,e){const t=1-n;return t*t*e}function j2(n,e){return 2*(1-n)*n*e}function Y2(n,e){return n*n*e}function pl(n,e,t,i){return X2(n,e)+j2(n,t)+Y2(n,i)}function $2(n,e){const t=1-n;return t*t*t*e}function q2(n,e){const t=1-n;return 3*t*t*n*e}function K2(n,e){return 3*(1-n)*n*n*e}function Z2(n,e){return n*n*n*e}function ml(n,e,t,i,r){return $2(n,e)+q2(n,t)+K2(n,i)+Z2(n,r)}class xS extends ar{constructor(e=new ve,t=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,r.x,s.x,o.x,a.x),ml(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J2 extends ar{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,r.x,s.x,o.x,a.x),ml(e,r.y,s.y,o.y,a.y),ml(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _S extends ar{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q2 extends ar{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SS extends ar{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pl(e,r.x,s.x,o.x),pl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eR extends ar{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pl(e,r.x,s.x,o.x),pl(e,r.y,s.y,o.y),pl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MS extends ar{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Iv(a,l.x,c.x,u.x,h.x),Iv(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ve().fromArray(r))}return this}}var Gp=Object.freeze({__proto__:null,ArcCurve:G2,CatmullRomCurve3:W2,CubicBezierCurve:xS,CubicBezierCurve3:J2,EllipseCurve:cg,LineCurve:_S,LineCurve3:Q2,QuadraticBezierCurve:SS,QuadraticBezierCurve3:eR,SplineCurve:MS});class tR extends ar{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Gp[r.type]().fromJSON(r))}return this}}class zl extends tR{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _S(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new SS(this.currentPoint.clone(),new ve(e,t),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new xS(this.currentPoint.clone(),new ve(e,t),new ve(i,r),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new MS(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new cg(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fg extends Ut{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,u=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fg(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Es extends Ut{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],v=i/2;let d=0;x(),o===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function x(){const S=new D,T=new D;let A=0;const y=(t-e)/i;for(let E=0;E<=s;E++){const M=[],w=E/s,L=w*(t-e)+e;for(let k=0;k<=r;k++){const I=k/r,H=I*l+a,z=Math.sin(H),N=Math.cos(H);T.x=L*z,T.y=-w*i+v,T.z=L*N,h.push(T.x,T.y,T.z),S.set(z,y,N).normalize(),f.push(S.x,S.y,S.z),p.push(I,1-w),M.push(g++)}_.push(M)}for(let E=0;E<r;E++)for(let M=0;M<s;M++){const w=_[M][E],L=_[M+1][E],k=_[M+1][E+1],I=_[M][E+1];u.push(w,L,I),u.push(L,k,I),A+=6}c.addGroup(d,A,0),d+=A}function m(S){const T=g,A=new ve,y=new D;let E=0;const M=S===!0?e:t,w=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),g++;const L=g;for(let k=0;k<=r;k++){const H=k/r*l+a,z=Math.cos(H),N=Math.sin(H);y.x=M*N,y.y=v*w,y.z=M*z,h.push(y.x,y.y,y.z),f.push(0,w,0),A.x=z*.5+.5,A.y=N*.5*w+.5,p.push(A.x,A.y),g++}for(let k=0;k<r;k++){const I=T+k,H=L+k;S===!0?u.push(H,H+1,I):u.push(H+1,H,I),E+=3}c.addGroup(d,E,S===!0?1:2),d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pf extends Es{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Vc=new D,Gc=new D,Kh=new D,Wc=new Bi;class xi extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(oa*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:v,c:d}=Wc;if(_.fromBufferAttribute(a,c[0]),v.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Wc.getNormal(Kh),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const m=(x+1)%3,S=h[x],T=h[m],A=Wc[u[x]],y=Wc[u[m]],E=`${S}_${T}`,M=`${T}_${S}`;M in f&&f[M]?(Kh.dot(f[M].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(y.x,y.y,y.z)),f[M]=null):E in f||(f[E]={index0:c[x],index1:c[m],normal:Kh.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:v}=f[g];Vc.fromBufferAttribute(a,_),Gc.fromBufferAttribute(a,v),p.push(Vc.x,Vc.y,Vc.z),p.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new dt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cr extends zl{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new zl().fromJSON(r))}return this}}const nR={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=wS(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(i&&(s=aR(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Fl(s,o,t,a,l,p,0),o}};function wS(n,e,t,i,r){let s,o;if(r===yR(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Nv(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Nv(s,n[s],n[s+1],o);return o&&Df(o,o.next)&&(Bl(o),o=o.next),o}function to(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Df(t,t.next)||Jt(t.prev,t,t.next)===0)){if(Bl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&hR(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?rR(n,i,r,s):iR(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Bl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=sR(to(n),e,t),Fl(n,e,t,i,r,s,2)):o===2&&oR(n,e,t,i,r,s):Fl(to(n),e,t,i,r,s,1);break}}}function iR(n){const e=n.prev,t=n,i=n.next;if(Jt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Zo(r,a,s,l,o,c,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rR(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Jt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,v=u>h?u>f?u:f:h>f?h:f,d=Wp(p,g,e,t,i),x=Wp(_,v,e,t,i);let m=n.prevZ,S=n.nextZ;for(;m&&m.z>=d&&S&&S.z<=x;){if(m.x>=p&&m.x<=_&&m.y>=g&&m.y<=v&&m!==r&&m!==o&&Zo(a,u,l,h,c,f,m.x,m.y)&&Jt(m.prev,m,m.next)>=0||(m=m.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=v&&S!==r&&S!==o&&Zo(a,u,l,h,c,f,S.x,S.y)&&Jt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;m&&m.z>=d;){if(m.x>=p&&m.x<=_&&m.y>=g&&m.y<=v&&m!==r&&m!==o&&Zo(a,u,l,h,c,f,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=v&&S!==r&&S!==o&&Zo(a,u,l,h,c,f,S.x,S.y)&&Jt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sR(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Df(r,s)&&ES(r,i,i.next,s)&&kl(r,s)&&kl(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Bl(i),Bl(i.next),i=n=s),i=i.next}while(i!==n);return to(i)}function oR(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mR(o,a)){let l=TS(o,a);o=to(o,o.next),l=to(l,l.next),Fl(o,e,t,i,r,s,0),Fl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function aR(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=wS(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(pR(c));for(r.sort(lR),s=0;s<r.length;s++)t=cR(r[s],t);return t}function lR(n,e){return n.x-e.x}function cR(n,e){const t=uR(n,e);if(!t)return e;const i=TS(t,n);return to(i,i.next),to(t,t.next)}function uR(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Zo(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),kl(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&fR(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function fR(n,e){return Jt(n.prev,n,e.prev)<0&&Jt(e.next,n,n.next)<0}function hR(n,e,t,i){let r=n;do r.z===0&&(r.z=Wp(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,dR(r)}function dR(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Wp(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function pR(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Zo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function mR(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!gR(n,e)&&(kl(n,e)&&kl(e,n)&&vR(n,e)&&(Jt(n.prev,n,e.prev)||Jt(n,e.prev,e))||Df(n,e)&&Jt(n.prev,n,n.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Df(n,e){return n.x===e.x&&n.y===e.y}function ES(n,e,t,i){const r=jc(Jt(n,e,t)),s=jc(Jt(n,e,i)),o=jc(Jt(t,i,n)),a=jc(Jt(t,i,e));return!!(r!==s&&o!==a||r===0&&Xc(n,t,e)||s===0&&Xc(n,i,e)||o===0&&Xc(t,n,i)||a===0&&Xc(t,e,i))}function Xc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function jc(n){return n>0?1:n<0?-1:0}function gR(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ES(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function kl(n,e){return Jt(n.prev,n,n.next)<0?Jt(n,e,n.next)>=0&&Jt(n,n.prev,e)>=0:Jt(n,e,n.prev)<0||Jt(n,n.next,e)<0}function vR(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function TS(n,e){const t=new Xp(n.i,n.x,n.y),i=new Xp(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nv(n,e,t,i){const r=new Xp(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Bl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yR(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Rr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Rr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Uv(e),Ov(i,e);let o=e.length;t.forEach(Uv);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ov(i,t[l]);const a=nR.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Uv(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ov(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wa extends Ut{constructor(e=new Cr([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:xR;let m,S=!1,T,A,y,E;d&&(m=d.getSpacedPoints(u),S=!0,f=!1,T=d.computeFrenetFrames(u,!1),A=new D,y=new D,E=new D),f||(v=0,p=0,g=0,_=0);const M=a.extractPoints(c);let w=M.shape;const L=M.holes;if(!Rr.isClockWise(w)){w=w.reverse();for(let P=0,se=L.length;P<se;P++){const le=L[P];Rr.isClockWise(le)&&(L[P]=le.reverse())}}const I=Rr.triangulateShape(w,L),H=w;for(let P=0,se=L.length;P<se;P++){const le=L[P];w=w.concat(le)}function z(P,se,le){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(se,le)}const N=w.length,V=I.length;function U(P,se,le){let de,B,ze;const be=P.x-se.x,Fe=P.y-se.y,O=le.x-P.x,C=le.y-P.y,Z=be*be+Fe*Fe,ce=be*C-Fe*O;if(Math.abs(ce)>Number.EPSILON){const fe=Math.sqrt(Z),he=Math.sqrt(O*O+C*C),Xe=se.x-Fe/fe,Le=se.y+be/fe,Ue=le.x-C/he,rt=le.y+O/he,Me=((Ue-Xe)*C-(rt-Le)*O)/(be*C-Fe*O);de=Xe+be*Me-P.x,B=Le+Fe*Me-P.y;const He=de*de+B*B;if(He<=2)return new ve(de,B);ze=Math.sqrt(He/2)}else{let fe=!1;be>Number.EPSILON?O>Number.EPSILON&&(fe=!0):be<-Number.EPSILON?O<-Number.EPSILON&&(fe=!0):Math.sign(Fe)===Math.sign(C)&&(fe=!0),fe?(de=-Fe,B=be,ze=Math.sqrt(Z)):(de=be,B=Fe,ze=Math.sqrt(Z/2))}return new ve(de/ze,B/ze)}const $=[];for(let P=0,se=H.length,le=se-1,de=P+1;P<se;P++,le++,de++)le===se&&(le=0),de===se&&(de=0),$[P]=U(H[P],H[le],H[de]);const q=[];let Q,ie=$.concat();for(let P=0,se=L.length;P<se;P++){const le=L[P];Q=[];for(let de=0,B=le.length,ze=B-1,be=de+1;de<B;de++,ze++,be++)ze===B&&(ze=0),be===B&&(be=0),Q[de]=U(le[de],le[ze],le[be]);q.push(Q),ie=ie.concat(Q)}for(let P=0;P<v;P++){const se=P/v,le=p*Math.cos(se*Math.PI/2),de=g*Math.sin(se*Math.PI/2)+_;for(let B=0,ze=H.length;B<ze;B++){const be=z(H[B],$[B],de);re(be.x,be.y,-le)}for(let B=0,ze=L.length;B<ze;B++){const be=L[B];Q=q[B];for(let Fe=0,O=be.length;Fe<O;Fe++){const C=z(be[Fe],Q[Fe],de);re(C.x,C.y,-le)}}}const ye=g+_;for(let P=0;P<N;P++){const se=f?z(w[P],ie[P],ye):w[P];S?(y.copy(T.normals[0]).multiplyScalar(se.x),A.copy(T.binormals[0]).multiplyScalar(se.y),E.copy(m[0]).add(y).add(A),re(E.x,E.y,E.z)):re(se.x,se.y,0)}for(let P=1;P<=u;P++)for(let se=0;se<N;se++){const le=f?z(w[se],ie[se],ye):w[se];S?(y.copy(T.normals[P]).multiplyScalar(le.x),A.copy(T.binormals[P]).multiplyScalar(le.y),E.copy(m[P]).add(y).add(A),re(E.x,E.y,E.z)):re(le.x,le.y,h/u*P)}for(let P=v-1;P>=0;P--){const se=P/v,le=p*Math.cos(se*Math.PI/2),de=g*Math.sin(se*Math.PI/2)+_;for(let B=0,ze=H.length;B<ze;B++){const be=z(H[B],$[B],de);re(be.x,be.y,h+le)}for(let B=0,ze=L.length;B<ze;B++){const be=L[B];Q=q[B];for(let Fe=0,O=be.length;Fe<O;Fe++){const C=z(be[Fe],Q[Fe],de);S?re(C.x,C.y+m[u-1].y,m[u-1].x+le):re(C.x,C.y,h+le)}}}j(),te();function j(){const P=r.length/3;if(f){let se=0,le=N*se;for(let de=0;de<V;de++){const B=I[de];me(B[2]+le,B[1]+le,B[0]+le)}se=u+v*2,le=N*se;for(let de=0;de<V;de++){const B=I[de];me(B[0]+le,B[1]+le,B[2]+le)}}else{for(let se=0;se<V;se++){const le=I[se];me(le[2],le[1],le[0])}for(let se=0;se<V;se++){const le=I[se];me(le[0]+N*u,le[1]+N*u,le[2]+N*u)}}i.addGroup(P,r.length/3-P,0)}function te(){const P=r.length/3;let se=0;pe(H,se),se+=H.length;for(let le=0,de=L.length;le<de;le++){const B=L[le];pe(B,se),se+=B.length}i.addGroup(P,r.length/3-P,1)}function pe(P,se){let le=P.length;for(;--le>=0;){const de=le;let B=le-1;B<0&&(B=P.length-1);for(let ze=0,be=u+v*2;ze<be;ze++){const Fe=N*ze,O=N*(ze+1),C=se+de+Fe,Z=se+B+Fe,ce=se+B+O,fe=se+de+O;xe(C,Z,ce,fe)}}}function re(P,se,le){l.push(P),l.push(se),l.push(le)}function me(P,se,le){De(P),De(se),De(le);const de=r.length/3,B=x.generateTopUV(i,r,de-3,de-2,de-1);Be(B[0]),Be(B[1]),Be(B[2])}function xe(P,se,le,de){De(P),De(se),De(de),De(se),De(le),De(de);const B=r.length/3,ze=x.generateSideWallUV(i,r,B-6,B-3,B-2,B-1);Be(ze[0]),Be(ze[1]),Be(ze[3]),Be(ze[1]),Be(ze[2]),Be(ze[3])}function De(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function Be(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _R(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gp[r.type]().fromJSON(r)),new wa(i,e.options)}}const xR={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],v=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-h),new ve(f,1-g),new ve(_,1-d)]:[new ve(a,1-l),new ve(u,1-h),new ve(p,1-g),new ve(v,1-d)]}};function _R(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class so extends Ut{constructor(e=new Cr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Rr.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,d=g.length;v<d;v++){const x=g[v];Rr.isClockWise(x)===!0&&(g[v]=x.reverse())}const _=Rr.triangulateShape(p,g);for(let v=0,d=g.length;v<d;v++){const x=g[v];p=p.concat(x)}for(let v=0,d=p.length;v<d;v++){const x=p[v];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let v=0,d=_.length;v<d;v++){const x=_[v],m=x[0]+h,S=x[1]+h,T=x[2]+h;i.push(m,S,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return SR(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new so(i,e.curveSegments)}}function SR(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class hg extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],g=[],_=[],v=[];for(let d=0;d<=i;d++){const x=[],m=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+m*a),h.y=e*Math.cos(o+m*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+m*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),v.push(A+S,1-m),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const m=u[d][x+1],S=u[d][x],T=u[d+1][x],A=u[d+1][x+1];(d!==0||o>0)&&p.push(m,S,A),(d!==i-1||l<Math.PI)&&p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MR extends Ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,_=f+p;g<_;g+=3)for(let v=0;v<3;v++){const d=a.getX(g+v),x=a.getX(g+(v+1)%3);r.fromBufferAttribute(o,d),s.fromBufferAttribute(o,x),zv(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),zv(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function zv(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class si extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends ws{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Fv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ER=new wR;class dg{constructor(e){this.manager=e!==void 0?e:ER,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dg.DEFAULT_MATERIAL_NAME="__DEFAULT";const mr={};class TR extends Error{constructor(e,t){super(e),this.response=t}}class bR extends dg{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mr[e]!==void 0){mr[e].push({onLoad:t,onProgress:i,onError:r});return}mr[e]=[],mr[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const v=new ReadableStream({start(d){x();function x(){h.read().then(({done:m,value:S})=>{if(m)d.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,y=u.length;A<y;A++){const E=u[A];E.onProgress&&E.onProgress(T)}d.enqueue(S),x()}},m=>{d.error(m)})}}});return new Response(v)}else throw new TR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Fv.add(e,c);const u=mr[e];delete mr[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=mr[e];if(u===void 0)throw this.manager.itemError(e),c;delete mr[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bS extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class AR extends bS{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zh=new Et,kv=new D,Bv=new D;class CR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ag,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kv.setFromMatrixPosition(e.matrixWorld),t.position.copy(kv),Bv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bv),t.updateMatrixWorld(),Zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RR extends CR{constructor(){super(new Ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LR extends bS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new RR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PR extends Ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jp extends F2{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Hv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vv=new D,Yc=new D;class DR{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vv.subVectors(e,this.start),Yc.subVectors(this.end,this.start);const i=Yc.dot(Yc);let s=Yc.dot(Vv)/i;return t&&(s=un(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class IR{constructor(){this.type="ShapePath",this.color=new nt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const x=[];for(let m=0,S=d.length;m<S;m++){const T=d[m],A=new Cr;A.curves=T.curves,x.push(A)}return x}function i(d,x){const m=x.length;let S=!1;for(let T=m-1,A=0;A<m;T=A++){let y=x[T],E=x[A],M=E.x-y.x,w=E.y-y.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(y=x[A],M=-M,E=x[T],w=-w),d.y<y.y||d.y>E.y)continue;if(d.y===y.y){if(d.x===y.x)return!0}else{const L=w*(d.x-y.x)-M*(d.y-y.y);if(L===0)return!0;if(L<0)continue;S=!S}}else{if(d.y!==y.y)continue;if(E.x<=d.x&&d.x<=y.x||y.x<=d.x&&d.x<=E.x)return!0}}return S}const r=Rr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Cr,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let d=0,x=s.length;d<x;d++)a=s[d],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Cr,p:_},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,x=0;for(let m=0,S=f.length;m<S;m++)h[m]=[];for(let m=0,S=f.length;m<S;m++){const T=p[m];for(let A=0;A<T.length;A++){const y=T[A];let E=!0;for(let M=0;M<f.length;M++)i(y.p,f[M].p)&&(m!==M&&x++,E?(E=!1,h[M].push(y)):d=!0);E&&h[m].push(y)}}x>0&&d===!1&&(p=h)}let v;for(let d=0,x=f.length;d<x;d++){l=f[d].s,c.push(l),v=p[d];for(let m=0,S=v.length;m<S;m++)l.holes.push(v[m].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$m}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$m);const Gv={type:"change"},Jh={type:"start"},Wv={type:"end"},$c=new Rf,Xv=new Mr,NR=Math.cos(70*ai.DEG2RAD);class UR extends ro{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ue),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gv),i.update(),s=r.NONE},this.update=function(){const b=new D,J=new ys().setFromUnitVectors(e.up,new D(0,1,0)),ee=J.clone().invert(),ne=new D,Se=new ys,F=new D,Y=2*Math.PI;return function(We=null){const Ve=i.object.position;b.copy(Ve).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&k(w(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=Y:qe>Math.PI&&(qe-=Y),Ze<-Math.PI?Ze+=Y:Ze>Math.PI&&(Ze-=Y),qe<=Ze?a.theta=Math.max(qe,Math.min(Ze,a.theta)):a.theta=a.theta>(qe+Ze)/2?Math.max(qe,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let we=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=q(a.radius);else{const lt=a.radius;a.radius=q(a.radius*c),we=lt!=a.radius}if(b.setFromSpherical(a),b.applyQuaternion(ee),Ve.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let lt=null;if(i.object.isPerspectiveCamera){const wt=b.length();lt=q(wt*c);const ge=wt-lt;i.object.position.addScaledVector(S,ge),i.object.updateMatrixWorld(),we=!!ge}else if(i.object.isOrthographicCamera){const wt=new D(T.x,T.y,0);wt.unproject(i.object);const ge=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),we=ge!==i.object.zoom;const Pe=new D(T.x,T.y,0);Pe.unproject(i.object),i.object.position.sub(Pe).add(wt),i.object.updateMatrixWorld(),lt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):($c.origin.copy(i.object.position),$c.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($c.direction))<NR?e.lookAt(i.target):(Xv.setFromNormalAndCoplanarPoint(i.object.up,i.target),$c.intersectPlane(Xv,i.target))))}else if(i.object.isOrthographicCamera){const lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),we=!0)}return c=1,A=!1,we||ne.distanceToSquared(i.object.position)>o||8*(1-Se.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>o?(i.dispatchEvent(Gv),ne.copy(i.object.position),Se.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",Fe),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",Xe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hv,l=new Hv;let c=1;const u=new D,h=new ve,f=new ve,p=new ve,g=new ve,_=new ve,v=new ve,d=new ve,x=new ve,m=new ve,S=new D,T=new ve;let A=!1;const y=[],E={};let M=!1;function w(b){return b!==null?2*Math.PI/60*i.autoRotateSpeed*b:2*Math.PI/60/60*i.autoRotateSpeed}function L(b){const J=Math.abs(b*.01);return Math.pow(.95,i.zoomSpeed*J)}function k(b){l.theta-=b}function I(b){l.phi-=b}const H=function(){const b=new D;return function(ee,ne){b.setFromMatrixColumn(ne,0),b.multiplyScalar(-ee),u.add(b)}}(),z=function(){const b=new D;return function(ee,ne){i.screenSpacePanning===!0?b.setFromMatrixColumn(ne,1):(b.setFromMatrixColumn(ne,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(ee),u.add(b)}}(),N=function(){const b=new D;return function(ee,ne){const Se=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;b.copy(F).sub(i.target);let Y=b.length();Y*=Math.tan(i.object.fov/2*Math.PI/180),H(2*ee*Y/Se.clientHeight,i.object.matrix),z(2*ne*Y/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(ee*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),z(ne*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(b,J){if(!i.zoomToCursor)return;A=!0;const ee=i.domElement.getBoundingClientRect(),ne=b-ee.left,Se=J-ee.top,F=ee.width,Y=ee.height;T.x=ne/F*2-1,T.y=-(Se/Y)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(b){return Math.max(i.minDistance,Math.min(i.maxDistance,b))}function Q(b){h.set(b.clientX,b.clientY)}function ie(b){$(b.clientX,b.clientX),d.set(b.clientX,b.clientY)}function ye(b){g.set(b.clientX,b.clientY)}function j(b){f.set(b.clientX,b.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;k(2*Math.PI*p.x/J.clientHeight),I(2*Math.PI*p.y/J.clientHeight),h.copy(f),i.update()}function te(b){x.set(b.clientX,b.clientY),m.subVectors(x,d),m.y>0?V(L(m.y)):m.y<0&&U(L(m.y)),d.copy(x),i.update()}function pe(b){_.set(b.clientX,b.clientY),v.subVectors(_,g).multiplyScalar(i.panSpeed),N(v.x,v.y),g.copy(_),i.update()}function re(b){$(b.clientX,b.clientY),b.deltaY<0?U(L(b.deltaY)):b.deltaY>0&&V(L(b.deltaY)),i.update()}function me(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function xe(b){if(y.length===1)h.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);h.set(ee,ne)}}function De(b){if(y.length===1)g.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);g.set(ee,ne)}}function Be(b){const J=ut(b),ee=b.pageX-J.x,ne=b.pageY-J.y,Se=Math.sqrt(ee*ee+ne*ne);d.set(0,Se)}function P(b){i.enableZoom&&Be(b),i.enablePan&&De(b)}function se(b){i.enableZoom&&Be(b),i.enableRotate&&xe(b)}function le(b){if(y.length==1)f.set(b.pageX,b.pageY);else{const ee=ut(b),ne=.5*(b.pageX+ee.x),Se=.5*(b.pageY+ee.y);f.set(ne,Se)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;k(2*Math.PI*p.x/J.clientHeight),I(2*Math.PI*p.y/J.clientHeight),h.copy(f)}function de(b){if(y.length===1)_.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);_.set(ee,ne)}v.subVectors(_,g).multiplyScalar(i.panSpeed),N(v.x,v.y),g.copy(_)}function B(b){const J=ut(b),ee=b.pageX-J.x,ne=b.pageY-J.y,Se=Math.sqrt(ee*ee+ne*ne);x.set(0,Se),m.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),V(m.y),d.copy(x);const F=(b.pageX+J.x)*.5,Y=(b.pageY+J.y)*.5;$(F,Y)}function ze(b){i.enableZoom&&B(b),i.enablePan&&de(b)}function be(b){i.enableZoom&&B(b),i.enableRotate&&le(b)}function Fe(b){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",C)),!je(b)&&(mt(b),b.pointerType==="touch"?rt(b):Z(b)))}function O(b){i.enabled!==!1&&(b.pointerType==="touch"?Me(b):ce(b))}function C(b){switch(st(b),y.length){case 0:i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(Wv),s=r.NONE;break;case 1:const J=y[0],ee=E[J];rt({pointerId:J,pageX:ee.x,pageY:ee.y});break}}function Z(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case fo.DOLLY:if(i.enableZoom===!1)return;ie(b),s=r.DOLLY;break;case fo.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;ye(b),s=r.PAN}else{if(i.enableRotate===!1)return;Q(b),s=r.ROTATE}break;case fo.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;Q(b),s=r.ROTATE}else{if(i.enablePan===!1)return;ye(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Jh)}function ce(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(b);break;case r.DOLLY:if(i.enableZoom===!1)return;te(b);break;case r.PAN:if(i.enablePan===!1)return;pe(b);break}}function fe(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Jh),re(he(b)),i.dispatchEvent(Wv))}function he(b){const J=b.deltaMode,ee={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(J){case 1:ee.deltaY*=16;break;case 2:ee.deltaY*=100;break}return b.ctrlKey&&!M&&(ee.deltaY*=10),ee}function Xe(b){b.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",Le,{passive:!0,capture:!0}))}function Le(b){b.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",Le,{passive:!0,capture:!0}))}function Ue(b){i.enabled===!1||i.enablePan===!1||me(b)}function rt(b){switch(at(b),y.length){case 1:switch(i.touches.ONE){case Zr.ROTATE:if(i.enableRotate===!1)return;xe(b),s=r.TOUCH_ROTATE;break;case Zr.PAN:if(i.enablePan===!1)return;De(b),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Zr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(b),s=r.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(b),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Jh)}function Me(b){switch(at(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;le(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;de(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(b),i.update();break;default:s=r.NONE}}function He(b){i.enabled!==!1&&b.preventDefault()}function mt(b){y.push(b.pointerId)}function st(b){delete E[b.pointerId];for(let J=0;J<y.length;J++)if(y[J]==b.pointerId){y.splice(J,1);return}}function je(b){for(let J=0;J<y.length;J++)if(y[J]==b.pointerId)return!0;return!1}function at(b){let J=E[b.pointerId];J===void 0&&(J=new ve,E[b.pointerId]=J),J.set(b.pageX,b.pageY)}function ut(b){const J=b.pointerId===y[0]?y[1]:y[0];return E[J]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",Fe),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",fe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Xe,{passive:!0,capture:!0}),this.update()}}const Qh=new Et;class If{constructor(e){e=e||{},this.vertices={near:[new D,new D,new D,new D],far:[new D,new D,new D,new D]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return Qh.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(r){r.applyMatrix4(Qh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(Qh);const s=Math.abs(r.z);i?r.z*=Math.min(t/s,1):r.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new If);t.length=e.length;for(let i=0;i<e.length;i++){const r=t[i];if(i===0)for(let s=0;s<4;s++)r.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)r.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)r.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)r.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const jv={lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
 	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+ht.lights_pars_begin},Yv=new Et,ed=new If,gr=new D,Ya=new bi,td=[],nd=[],id=new Et,$v=new Et,OR=new D(0,1,0);class zR{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new D(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new If,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new LR(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const r=this.lights[t].shadow.camera,s=this.frustums[t],o=s.vertices.near,a=s.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let u=l.distanceTo(c);if(this.fade){const h=this.camera,f=Math.max(h.far,this.maxFar),p=s.vertices.far[0].z/(f-h.near),g=.25*Math.pow(p,2)*(f-h.near);u+=g}r.left=-u/2,r.right=u/2,r.top=u/2,r.bottom=-u/2,r.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":r(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let u=1;u<o;u++)c.push((a+(l-a)*u/o)/l);c.push(1)}function r(o,a,l,c){for(let u=1;u<o;u++)c.push(a*(l/a)**(u/o)/l);c.push(1)}function s(o,a,l,c,u){td.length=0,nd.length=0,r(o,a,l,nd),i(o,a,l,td);for(let h=1;h<o;h++)u.push(ai.lerp(td[h-1],nd[h-1],c));u.push(1)}}update(){const e=this.camera,t=this.frustums;id.lookAt(new D,this.lightDirection,OR),$v.copy(id).invert();for(let i=0;i<t.length;i++){const r=this.lights[i],s=r.shadow.camera,o=(s.right-s.left)/this.shadowMapSize,a=(s.top-s.bottom)/this.shadowMapSize;Yv.multiplyMatrices($v,e.matrixWorld),t[i].toSpace(Yv,ed);const l=ed.vertices.near,c=ed.vertices.far;Ya.makeEmpty();for(let u=0;u<4;u++)Ya.expandByPoint(l[u]),Ya.expandByPoint(c[u]);Ya.getCenter(gr),gr.z=Ya.max.z+this.lightMargin,gr.x=Math.floor(gr.x/o)*o,gr.y=Math.floor(gr.y/a)*a,gr.applyMatrix4(id),r.position.copy(gr),r.target.position.copy(gr),r.target.position.x+=this.lightDirection.x,r.target.position.y+=this.lightDirection.y,r.target.position.z+=this.lightDirection.z}}injectInclude(){ht.lights_fragment_begin=jv.lights_fragment_begin,ht.lights_pars_begin=jv.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,r=this.shaders;e.onBeforeCompile=function(s){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:o},r.set(e,s)},r.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,r){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=e}!this.fade&&"CSM_FADE"in r.defines?(delete r.defines.CSM_FADE,r.needsUpdate=!0):this.fade&&!("CSM_FADE"in r.defines)&&(r.defines.CSM_FADE="",r.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new ve);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],r=this.breaks[t-1]||0;e[t].x=r,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}const vr=[{t:0,sun:4219040,sunI:.25,sky:2109536,ground:1054768,skyI:.7,fog:1056832,bg:198416},{t:5,sun:5271728,sunI:.25,sky:2635888,ground:1384512,skyI:.72,fog:1386576,bg:330520},{t:6,sun:16740400,sunI:.6,sky:16748640,ground:14704688,skyI:.6,fog:16756856,bg:16756848},{t:7,sun:16756832,sunI:1.2,sky:16763008,ground:14714944,skyI:.75,fog:16765072,bg:16763008},{t:9,sun:16773328,sunI:1.8,sky:11587839,ground:8425664,skyI:.9,fog:13162736,bg:12111080},{t:12,sun:16775920,sunI:2.5,sky:10536191,ground:6320272,skyI:1,fog:12111076,bg:11321568},{t:15,sun:16772288,sunI:2,sky:9484536,ground:5795976,skyI:.9,fog:11585768,bg:11058392},{t:17,sun:16748608,sunI:1.2,sky:16744528,ground:12599328,skyI:.7,fog:16748640,bg:16752736},{t:18,sun:16732192,sunI:.6,sky:16728096,ground:9441328,skyI:.5,fog:13647920,bg:14696496},{t:19,sun:5259392,sunI:.4,sky:3154016,ground:1577008,skyI:.6,fog:2101312,bg:1576248},{t:21,sun:4214928,sunI:.25,sky:2437216,ground:1185840,skyI:.7,fog:1384512,bg:264208},{t:24,sun:4219040,sunI:.25,sky:2109536,ground:1054768,skyI:.7,fog:1056832,bg:198416}],xt={csm:null,skyLight:null,sceneRef:null,timeOfDay:12,customUniforms:{uShadowStyle:{value:0},uTime:{value:0}}},Ps=new nt,qc=new nt;function $a(n,e,t,i){return Ps.setHex(n),qc.setHex(e),i.setRGB(Ps.r+(qc.r-Ps.r)*t,Ps.g+(qc.g-Ps.g)*t,Ps.b+(qc.b-Ps.b)*t)}const jr={sunColor:new nt,sunI:0,skyColor:new nt,groundColor:new nt,skyI:0,fogColor:new nt,bgColor:new nt};function FR(n){const e=(n%24+24)%24;let t=vr[vr.length-2],i=vr[vr.length-1];for(let s=0;s<vr.length-1;s++)if(e>=vr[s].t&&e<vr[s+1].t){t=vr[s],i=vr[s+1];break}const r=(e-t.t)/(i.t-t.t);return $a(t.sun,i.sun,r,jr.sunColor),$a(t.sky,i.sky,r,jr.skyColor),$a(t.ground,i.ground,r,jr.groundColor),$a(t.fog,i.fog,r,jr.fogColor),$a(t.bg,i.bg,r,jr.bgColor),jr.sunI=t.sunI+(i.sunI-t.sunI)*r,jr.skyI=t.skyI+(i.skyI-t.skyI)*r,jr}const qv=Math.PI/180,kR=new D;function BR(n){const e=(n%24+24)%24,t=(e-6)/12,i=t>=0&&t<=1;let r,s;if(i)r=t*Math.PI,s=Math.sin(t*Math.PI)*80*qv;else{const o=(e-18+24)%24/12;r=Math.PI+o*Math.PI,s=Math.sin(o*Math.PI)*38*qv}return kR.set(Math.cos(r)*Math.cos(s),Math.max(Math.sin(s),.12),-Math.sin(r)*Math.cos(s)*.35).normalize()}function HR(n,e,t,i){const r=t?.radius??1e3;xt.sceneRef=n,e.shadowMap.enabled=!0,e.shadowMap.type=qm;const s=new zR({maxFar:r*3,cascades:4,mode:"custom",customSplitsCallback:(a,l,c,u)=>{u[0]=.02,u[1]=.08,u[2]=.25,u[3]=1},parent:n,shadowMapSize:4096,lightDirection:new D(-1,-1,-1).normalize(),camera:i,lightMargin:750,lightFar:2e4,lightIntensity:2});for(const a of s.lights)a.shadow.bias=-2e-4,a.shadow.normalBias=.01,a.shadow.autoUpdate=!1,a.shadow.needsUpdate=!0;s.fade=!0,xt.csm=s;const o=new AR(10536191,6320272,.35);o.name="vitro_sky",n.add(o),xt.skyLight=o,tf(xt.timeOfDay)}function tf(n){xt.timeOfDay=n;const{csm:e,skyLight:t,sceneRef:i}=xt;if(!e||!t)return;const r=FR(n),s=BR(n);e.lightDirection.copy(s).negate();for(const o of e.lights)o.color.copy(r.sunColor),o.intensity=r.sunI,o.shadow.needsUpdate=!0;t.color.copy(r.skyColor),t.groundColor.copy(r.groundColor),t.intensity=r.skyI,i?.fog&&i.fog.color.copy(r.fogColor),i?.background?.isColor&&i.background.copy(r.bgColor)}function VR(n){xt.csm&&xt.csm.update()}function jn(n){if(!xt.csm){console.warn("[LightingSystem] registerCSMMaterial called before initLighting().");return}xt.csm.setupMaterial(n);const e=n.onBeforeCompile;n.onBeforeCompile=(t,i)=>{e&&e(t,i),t.uniforms.uShadowStyle=xt.customUniforms.uShadowStyle,t.uniforms.uTime=xt.customUniforms.uTime,t.vertexShader=`
            varying vec3 vSketchWorldPos;
            varying vec3 vSketchNormal;
            uniform float uTime;
        `+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
             vSketchWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vSketchNormal   = normalize((modelMatrix * vec4(normal, 0.0)).xyz);`),t.fragmentShader=`
            uniform int   uShadowStyle;
            uniform float uTime;
            varying vec3  vSketchWorldPos;
            varying vec3  vSketchNormal;
        `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("void main() {",`
            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float getRandomHatch(vec2 uv, float shadow, int style) {
                float densityScale = 15.0;
                float lengthScale  =  8.0;
                uv *= densityScale;

                if (style == 1) {
                    // Rain hatch — random diagonal dashes
                    vec2  diagUV      = vec2(uv.x + uv.y, uv.x - uv.y) * 0.707;
                    float lineId      = floor(diagUV.x);
                    float along       = diagUV.y;
                    float randLen     = hash(vec2(lineId, 1.0)) * 0.5 + 0.5;
                    float actualLen   = lengthScale * randLen;
                    float segId       = floor(along / actualLen);
                    float inkChance   = hash(vec2(lineId, segId));
                    float isInk       = step(inkChance, shadow);
                    float linePos     = fract(diagUV.x);
                    float isLine      = step(0.4, linePos) - step(0.6, linePos);
                    return isLine * isInk;
                }
                if (style == 2) {
                    // Stippled dots — randomly jittered circles
                    vec2  cell    = floor(uv);
                    vec2  local   = fract(uv) - 0.5;
                    vec2  offset  = vec2(hash(cell), hash(cell + 100.0)) * 0.7 - 0.35;
                    float dist    = length(local - offset);
                    float chance  = hash(cell + 200.0);
                    float isInk   = step(chance, shadow);
                    float dotSh   = 1.0 - step(0.25, dist);
                    return isInk * dotSh;
                }
                return 0.0;
            }

            void main() {
            `),t.fragmentShader=t.fragmentShader.replace("#include <tonemapping_fragment>",`#include <tonemapping_fragment>

             if (uShadowStyle > 0) {
                 float lumaOut  = dot(gl_FragColor.rgb,  vec3(0.299, 0.587, 0.114));
                 float lumaBase = dot(diffuseColor.rgb,  vec3(0.299, 0.587, 0.114));
                 float ratio    = lumaOut / max(lumaBase, 0.001);

                 // Shadow intensity: 0 in full light, 1 in pitch black
                 float shadow   = smoothstep(0.65, 0.1, ratio);

                 if (shadow > 0.0) {
                     vec3 n     = abs(normalize(vSketchNormal));
                     vec3 blend = n * n * n * n;
                     blend     /= dot(blend, vec3(1.0));

                     vec3  wp  = vSketchWorldPos;
                     float hX  = getRandomHatch(wp.yz, shadow, uShadowStyle);
                     float hY  = getRandomHatch(wp.xz, shadow, uShadowStyle);
                     float hZ  = getRandomHatch(wp.xy, shadow, uShadowStyle);
                     float ink = hX * blend.x + hY * blend.y + hZ * blend.z;

                     if (ink > 0.0) {
                         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.08, 0.08, 0.10), 0.95);
                     }
                 }
             }
            `)},n.needsUpdate=!0}const GR={},Kv=n=>{let e;const t=new Set,i=(u,h)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const p=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{(GR?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},WR=n=>n?Kv(n):Kv;var AS={exports:{}},CS={},RS={exports:{}},LS={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=tr;function XR(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var jR=typeof Object.is=="function"?Object.is:XR,YR=Ea.useState,$R=Ea.useEffect,qR=Ea.useLayoutEffect,KR=Ea.useDebugValue;function ZR(n,e){var t=e(),i=YR({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return qR(function(){r.value=t,r.getSnapshot=e,rd(r)&&s({inst:r})},[n,t,e]),$R(function(){return rd(r)&&s({inst:r}),n(function(){rd(r)&&s({inst:r})})},[n]),KR(t),t}function rd(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!jR(n,t)}catch{return!0}}function JR(n,e){return e()}var QR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?JR:ZR;LS.useSyncExternalStore=Ea.useSyncExternalStore!==void 0?Ea.useSyncExternalStore:QR;RS.exports=LS;var eL=RS.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=tr,tL=eL;function nL(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var iL=typeof Object.is=="function"?Object.is:nL,rL=tL.useSyncExternalStore,sL=Nf.useRef,oL=Nf.useEffect,aL=Nf.useMemo,lL=Nf.useDebugValue;CS.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=sL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=aL(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return h=g}return h=p}if(g=h,iL(u,p))return g;var _=i(p);return r!==void 0&&r(g,_)?(u=p,g):(u=p,h=_)}var c=!1,u,h,f=t===void 0?null:t;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,t,i,r]);var a=rL(n,s[0],s[1]);return oL(function(){o.hasValue=!0,o.value=a},[a]),lL(a),a};AS.exports=CS;var cL=AS.exports;const uL=Ry(cL),PS={},{useDebugValue:fL}=By,{useSyncExternalStoreWithSelector:hL}=uL;let Zv=!1;const dL=n=>n;function pL(n,e=dL,t){(PS?"production":void 0)!=="production"&&t&&!Zv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Zv=!0);const i=hL(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return fL(i),i}const Jv=n=>{(PS?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?WR(n):n,t=(i,r)=>pL(e,i,r);return Object.assign(t,e),t},mL=n=>n?Jv(n):Jv,_u={light:{bg:15461352,bFill:16777215,ink:1710618,road:3355443,sidewalk:11908011,rail:2236962,water:4282992,park:7768677,pitch:9084541,stadium:14342874,nature_reserve:6715989,forest:4874557,veg:8096875,scrub:9210995,terrain:13092284,grass:7768677,farmland:10592390,sand:13748922,parking:6710886,plaza:14670802,aeroway:3355443,institutional:16777215,residential:10920861,commercial:11907756,industrial:10065810,cemetery:9016448,military:10263186,tree:3493676,barrier:8947848,furniture:7829367,topo:14737112,skiRun:16777215,skiLift:2236962,hdrBg:"#ebebe8d0",hdrText:"#1a1a1a",grid:!1,isolationAlpha:.25,hdrFont:"Baskerville"},graphite:{bg:921102,bFill:4737096,ink:14737632,road:7368816,sidewalk:3684408,rail:12105912,water:927816,park:1192978,pitch:1588756,stadium:2763306,nature_reserve:1060880,forest:928268,veg:1585688,scrub:2236948,terrain:3156510,grass:1061904,farmland:2631194,sand:3288610,parking:2631720,plaza:3289648,aeroway:2368550,institutional:2500144,residential:2236962,commercial:2236974,industrial:2104862,cemetery:1843740,military:2104860,tree:2116116,barrier:3684408,furniture:3026476,topo:2368548,skiRun:16777215,skiLift:8947848,hdrBg:"#0e0e0ed0",hdrText:"#ffffff",grid:!0,isolationAlpha:.3,hdrFont:"Montserrat"},blueprint:{bg:1719930,bFill:1985166,ink:16777215,road:16777215,sidewalk:5601448,rail:13163246,water:1192032,park:1456662,pitch:1720856,stadium:2771056,nature_reserve:1324564,forest:1191440,veg:1720344,scrub:1979936,terrain:2242670,grass:1457684,farmland:2373656,sand:3030052,parking:2379920,plaza:2775192,aeroway:16777215,institutional:2773656,residential:1985166,commercial:2247824,industrial:2375288,cemetery:1981982,military:2376822,tree:1724440,barrier:3825306,furniture:3825306,topo:1849970,skiRun:16777215,skiLift:13163246,hdrBg:"#1a3e7ac8",hdrText:"#ffffff",grid:!1,isolationAlpha:.2,hdrFont:"Montserrat"},onyx:{bg:1644825,bFill:16316664,ink:2763306,road:7237230,sidewalk:4210752,rail:10132122,water:1187892,park:1454102,pitch:1981464,stadium:2105376,nature_reserve:1322004,forest:1058832,veg:1847320,scrub:2236440,terrain:2893342,grass:1455638,farmland:2368026,sand:3025440,parking:2565927,plaza:3158064,aeroway:2763306,institutional:2500138,residential:2236962,commercial:2236970,industrial:2105376,cemetery:1974814,military:2105886,tree:1981460,barrier:3421236,furniture:2894892,topo:2762786,skiRun:16316664,skiLift:8947848,hdrBg:"#191919cd",hdrText:"#ffffff",grid:!1,isolationAlpha:.25,hdrFont:"Montserrat"},sketch:{bg:15591391,bFill:16776955,ink:2960685,road:4473924,sidewalk:4473924,rail:2960685,water:1847620,park:15591391,pitch:15591391,stadium:15591391,nature_reserve:15591391,forest:15591391,veg:15591391,scrub:15591391,terrain:15591391,grass:9354383,farmland:15523264,sand:15785155,parking:15591391,plaza:15591391,aeroway:15591391,institutional:15591391,residential:15591391,commercial:15591391,industrial:15591391,cemetery:15591391,military:15591391,tree:12597547,barrier:4473924,furniture:4473924,topo:15591391,skiRun:16776955,skiLift:2960685,hdrBg:"rgba(237, 231, 223, 0.85)",hdrText:"#2d2d2d",grid:!1,isolationAlpha:.15,hdrFont:"Baskerville"},master:{bg:16579836,bFill:1118481,ink:9474192,road:5592405,sidewalk:15263976,rail:3355443,water:10207957,park:16579836,pitch:16579836,stadium:16579836,nature_reserve:16579836,forest:16579836,veg:16579836,scrub:16579836,terrain:16579836,grass:16579836,farmland:16579836,sand:16579836,parking:15263976,plaza:16053492,aeroway:14737632,institutional:16579836,residential:16579836,commercial:16579836,industrial:16579836,cemetery:15790320,military:15790320,topo:16053492,tree:1118481,barrier:14540253,furniture:14540253,skiRun:16579836,skiLift:1118481,hdrBg:"rgba(252, 252, 252, 0.84)",hdrText:"#111111",grid:!1,isolationAlpha:.1,hdrFont:"Baskerville"},masterdark:{bg:1118481,bFill:16579836,ink:3815994,road:5658198,sidewalk:2763306,rail:7368816,water:1716818,park:1455126,pitch:1851416,stadium:1973790,nature_reserve:1323028,forest:1059856,veg:1848344,scrub:2236952,terrain:2630168,grass:1456660,farmland:2368024,sand:3024926,parking:1973790,plaza:2631718,aeroway:1973790,institutional:2236968,residential:1973790,commercial:1973800,industrial:1842204,cemetery:1712154,military:1843228,topo:2367512,tree:3168296,barrier:3026478,furniture:2500134,skiRun:16579836,skiLift:16579836,hdrBg:"rgba(17, 17, 17, 0.87)",hdrText:"#fcfcfc",grid:!1,isolationAlpha:.1,hdrFont:"Montserrat"},slate:{bg:2567218,bFill:14737624,ink:3554370,road:10133680,sidewalk:5791848,rail:12107976,water:1716822,park:1980448,pitch:2374680,stadium:2633252,nature_reserve:1848350,forest:1585176,veg:2242590,scrub:2632730,terrain:3420200,grass:1981470,farmland:3026462,sand:3551266,parking:3159096,plaza:3685442,aeroway:3026996,institutional:3028026,residential:2895412,commercial:2895932,industrial:2764338,cemetery:2633774,military:2764846,tree:2642472,barrier:4080200,furniture:3685444,topo:3685956,skiRun:14211280,skiLift:5265504,hdrBg:"#272c32c0",hdrText:"#e0e0d8",grid:!1,isolationAlpha:.25,hdrFont:"Montserrat"}},Vi={hd:{label:"1080p  —  1920 × 1080",w:1920,h:1080},"4k":{label:"4K  —  3840 × 2160",w:3840,h:2160},a4l:{label:"A4 Landscape  —  3508 × 2480",w:3508,h:2480},a4p:{label:"A4 Portrait  —  2480 × 3508",w:2480,h:3508},sq2k:{label:"Square  —  2048 × 2048",w:2048,h:2048},sq4k:{label:"Square  —  4096 × 4096",w:4096,h:4096}},qt=mL((n,e)=>({themeName:"light",theme:_u.light,setTheme:t=>n({themeName:t,theme:_u[t]??_u.light}),timeMode:"manual",timeCurrent:15,timeSpeed:1,setTimeMode:t=>n({timeMode:t}),setTimeCurrent:t=>n({timeCurrent:t}),setTimeSpeed:t=>n({timeSpeed:t}),engineMode:"STUDIO",setEngineMode:t=>n({engineMode:t}),isOrthographic:!1,toggleOrthographic:()=>n(t=>({isOrthographic:!t.isOrthographic})),plinthRadius:750,setPlinthRadius:t=>n({plinthRadius:t}),shadowsEnabled:!0,setShadowsEnabled:t=>n({shadowsEnabled:t}),lightsVisible:!0,setLightsVisible:t=>n({lightsVisible:t}),buildingOpacity:1,wireOpacity:1,streetOpacity:1,lineWeight:.5,setBuildingOpacity:t=>n({buildingOpacity:t}),setWireOpacity:t=>n({wireOpacity:t}),setStreetOpacity:t=>n({streetOpacity:t}),setLineWeight:t=>n({lineWeight:t}),isolationActive:!1,parkModeActive:!1,heroEngineActive:!1,setIsolationActive:t=>n({isolationActive:t}),setParkModeActive:t=>n({parkModeActive:t}),setHeroEngineActive:t=>n({heroEngineActive:t}),shadowStyle:0,setShadowStyle:t=>n({shadowStyle:t}),outlineStyle:"lineMat",setOutlineStyle:t=>n({outlineStyle:t}),fov:45,panY:150,setFov:t=>n({fov:t}),setPanY:t=>n({panY:t}),exposure:1,autoExposure:!1,setExposure:t=>n({exposure:t}),setAutoExposure:t=>n({autoExposure:t}),autoRotate:!1,setAutoRotate:t=>n({autoRotate:t}),isLoading:!0,loadingProgress:0,loadingLayer:"",setLoading:t=>n({isLoading:t}),setLoadingProgress:(t,i="")=>n({loadingProgress:t,loadingLayer:i}),canvasPreset:"hd",setCanvasPreset:t=>n({canvasPreset:t}),cityList:[],activeCityKey:localStorage.getItem("activeCityKey")??null,setCityList:t=>n({cityList:t}),setActiveCityKey:t=>n({activeCityKey:t}),meta:null,setMeta:t=>n({meta:t})})),ot={gravity:-35,coyoteTimeMs:120,physics:{playerRadius:.4,eyeHeight:1.8,hardDropThreshold:-30},mantle:{reach:2.5,speed:15},speeds:{walk:5,sprint:12,skateBase:20,skateBoost:35,fallMax:60},jump:{walkForce:7.5,skateForceBase:9,coyoteForce:7.5,wallForceH:12,wallForceV:12,boostKickoffForward:18,boostKickoffY:6}},$t={isActive:!1,movementState:"WALK",velocity:new D(0,0,0),isGrounded:!1,isUnderground:!1,cameraHeading:0,cameraPitch:0,bodyHeading:0,roll:0,wallRoll:0,fallTilt:0,baseFov:70,lastGroundedTime:0,lastJumpTime:0,telemetry:{lastVelocity:new D(0,0,0),lastUpdateTime:0,currentSpeed:0,currentElevation:0,currentHeading:0,currentGForce:0,unitSystem:"imperial"}},Oi=new D(0,1,0),DS=new D(0,ot.gravity,0),Yp=new D,gL=new D,nf=new D,Hl=new D,Yr=new D,Qv=new D,ci=new D,Ta=new D,IS=new D,Po=new D,vL=new D(0,-9.80665,0);let ey=!1;const NS=(n,e,t)=>{const i=Math.sin(n),r=Math.cos(n);e.set(-i,0,-r),t.set(r,0,-i)};function $p(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].z,l=t[s].x,c=t[s].z;a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function yL(){return!1}function xL(n,e,t){const i=n.telemetry,r=performance.now(),s=(r-i.lastUpdateTime)/1e3;i.lastUpdateTime>0&&s>0&&(ci.subVectors(n.velocity,i.lastVelocity).divideScalar(s),Ta.subVectors(ci,vL),i.currentGForce=Ta.length()/9.80665),i.lastVelocity.copy(n.velocity),i.lastUpdateTime=r;const o=n.velocity.length();i.currentSpeed=i.unitSystem==="metric"?o*3.6:o*2.23694;const a=t?.position?.y??0;i.currentElevation=i.unitSystem==="metric"?a:a*3.28084;let l=ai.radToDeg(n.cameraHeading);for(;l<0;)l+=360;for(;l>=360;)l-=360;i.currentHeading=l}function _L(n,e,t,i,r){if(!$t.isActive)return;const s=Math.max(.001,Math.min(n,.1)),o=$t,a=e.camera.position,l=performance.now();(!isFinite(o.velocity.x)||!isFinite(o.velocity.y)||!isFinite(o.velocity.z))&&o.velocity.set(0,0,0),(!isFinite(a.x)||!isFinite(a.y)||!isFinite(a.z))&&a.set(0,200,0);const c=SL(e),u=r||yL;ML(a,t,i,o,u),wL(s,o),o.isGrounded?EL(s,o,c,l):TL(s,o,c,l,a,t),bL(s,o,c),CL(s,o,a,c,t,i,l,u),RL(s,e.camera,o),xL(o,s,e.camera)}function SL(n){const e=!!n.keyState.Space,t=e&&!ey;return ey=e,{forward:!!n.keyState.KeyW,backward:!!n.keyState.KeyS,left:!!n.keyState.KeyA,right:!!n.keyState.KeyD,jump:t,boost:!!n.keyState.ShiftLeft||!!n.keyState.ShiftRight}}function ML(n,e,t,i,r){if(i.isUnderground||r(n.x,n.z)){Oi.set(0,1,0);return}let s=!1;if(i.isGrounded){const o=US(t,n.x,n.z),a=n.y-ot.physics.eyeHeight;let l=-1/0,c=null;for(const u of o)a>=u.yTop-.5&&(u.type==="bridge"||u.ring&&$p(n.x,n.z,u.ring))&&u.yTop>l&&(l=u.yTop,c=u);c&&(c.type==="bridge"?(ci.set(c.p2.x-c.p1.x,c.p2.y-c.p1.y,c.p2.z-c.p1.z),ci.lengthSq()>1e-4?(ci.normalize(),Ta.set(ci.z,0,-ci.x).normalize(),Oi.crossVectors(Ta,ci).normalize(),Oi.y<0&&Oi.negate()):Oi.set(0,1,0)):Oi.set(0,1,0),s=!0)}if(!s){const a=e(n.x+1,n.z)-e(n.x-1,n.z),l=e(n.x,n.z+1)-e(n.x,n.z-1);Oi.set(-a,1*2,-l).normalize()}}function wL(n,e,t){NS(e.cameraHeading,nf,Hl);let i=e.cameraHeading-e.bodyHeading;i=ai.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI,e.isGrounded||(e.bodyHeading+=i*4*n);const r=1-Math.exp(-15*n);e.movementState==="WALK"&&(e.bodyHeading=e.cameraHeading,e.roll*=1-r)}function EL(n,e,t,i){const r=Math.hypot(e.velocity.x,e.velocity.z);(e.movementState==="FALL"||e.movementState==="GLIDE")&&(e.movementState=r>10?"SKATE":"WALK"),e.movementState==="SKATE"&&r<2&&(e.movementState="WALK");const s=ci.copy(nf).projectOnPlane(Oi).normalize(),o=Ta.copy(Hl).projectOnPlane(Oi).normalize();if(e.movementState==="WALK"){Yr.set(0,0,0),t.forward&&Yr.add(s),t.backward&&Yr.sub(s),t.left&&Yr.sub(o),t.right&&Yr.add(o);const a=1-Math.exp(-12*n);if(Yr.lengthSq()===0)e.velocity.multiplyScalar(1-(1-Math.exp(-15*n))),e.velocity.length()<.5&&e.velocity.set(0,0,0);else{Yr.normalize();const l=t.boost?ot.speeds.sprint:ot.speeds.walk;Qv.copy(Yr).multiplyScalar(l),e.velocity.lerp(Qv,a)}t.jump&&(t.boost&&r>3?(e.movementState="SKATE",e.velocity.copy(s).multiplyScalar(ot.jump.boostKickoffForward),e.velocity.y=Math.max(e.velocity.y,ot.jump.boostKickoffY)):e.velocity.y=Math.max(e.velocity.y,ot.jump.walkForce),e.isGrounded=!1,e.lastJumpTime=i)}else if(e.movementState==="SKATE"){let a=e.cameraHeading-e.bodyHeading;a=ai.euclideanModulo(a+Math.PI,Math.PI*2)-Math.PI,e.bodyHeading+=a*5*n;let l=0;t.left&&(l=.3),t.right&&(l=-.3);const c=1-Math.exp(-8*n);e.roll+=(l-e.roll)*c,e.bodyHeading+=e.roll*3*n,NS(e.bodyHeading,Yp,gL);const u=IS.copy(Yp).projectOnPlane(Oi).normalize(),h=ci.copy(DS).projectOnPlane(Oi);if(e.velocity.addScaledVector(h,n),t.forward&&e.velocity.addScaledVector(u,15*n),t.backward){const f=1-Math.exp(-5*n);e.velocity.multiplyScalar(1-f)}if(r>.1){const f=t.boost?3:8,p=e.velocity.length(),g=1-Math.exp(-f*n);e.velocity.normalize().lerp(u,g).normalize().multiplyScalar(p)}t.jump&&i-e.lastGroundedTime<150&&(e.velocity.y=Math.max(e.velocity.y,ot.jump.skateForceBase+r*.1),e.isGrounded=!1,e.lastJumpTime=i)}}function TL(n,e,t,i,r,s){t.jump&&i-e.lastGroundedTime<ot.coyoteTimeMs&&i-e.lastJumpTime>ot.coyoteTimeMs&&(e.velocity.y=Math.max(e.velocity.y,ot.jump.coyoteForce),e.lastJumpTime=i),e.velocity.addScaledVector(DS,n);const o=Math.hypot(e.velocity.x,e.velocity.z),a=e.velocity.length(),c=r.y-ot.physics.eyeHeight-s(r.x,r.z)>3||o>15||e.movementState==="GLIDE",u=Math.sin(e.bodyHeading),h=Math.cos(e.bodyHeading),f=Math.cos(e.cameraPitch),p=Math.sin(e.cameraPitch),g=IS.set(-u*f,p,-h*f).normalize();let _=!1;if(t.boost&&c){let v=1;if(a>.1&&(v=Ta.copy(e.velocity).normalize().dot(g)),v<.5&&a>5){const d=(.5-v)*4;e.velocity.multiplyScalar(Math.max(0,1-d*n))}(e.velocity.length()<12&&e.cameraPitch>-.2||v<0)&&(_=!0)}else _=!0;if(_){e.movementState="FALL";const v=1-Math.exp(-5*n);e.roll*=1-v,t.left&&e.velocity.addScaledVector(Hl,-15*n),t.right&&e.velocity.addScaledVector(Hl,15*n),t.backward&&e.velocity.addScaledVector(nf,-15*n),t.forward&&e.velocity.addScaledVector(nf,15*n)}else{e.movementState="GLIDE";let v=0;t.left&&(v=.6),t.right&&(v=-.6);const d=1-Math.exp(-6*n);e.roll+=(v-e.roll)*d,e.bodyHeading+=e.roll*3*n;const x=Math.sin(e.bodyHeading),m=Math.cos(e.bodyHeading);g.set(-x*f,p,-m*f).normalize();const S=e.velocity.length();Yp.set(Math.sin(-e.bodyHeading),0,Math.cos(-e.bodyHeading));let T=2;e.cameraPitch>0&&(T=1.2),e.cameraPitch<0&&(T=3.5);const A=1-Math.exp(-T*n);ci.copy(e.velocity).normalize(),ci.lerp(g,A).normalize(),e.velocity.copy(ci).multiplyScalar(S);const y=Math.max(0,e.velocity.dot(g)),E=Math.max(0,Math.cos(e.cameraPitch)),M=Math.min(Math.abs(ot.gravity),y*1)*E;e.velocity.y+=M*n}}function bL(n,e,t){const i=Math.hypot(e.velocity.x,e.velocity.z),r=e.velocity.length();if(e.movementState==="WALK"||e.movementState==="SKATE"){let a=ot.speeds.walk;if(e.movementState==="SKATE"&&(a=t.boost?ot.speeds.skateBoost:ot.speeds.skateBase),r>a){const l=1-Math.exp(-3*n);e.velocity.x-=e.velocity.x*l,e.velocity.y-=e.velocity.y*l,e.velocity.z-=e.velocity.z*l}}else if(e.movementState==="FALL"&&i>ot.speeds.fallMax){const a=1-Math.exp(-1.5*n);e.velocity.x-=e.velocity.x*a,e.velocity.z-=e.velocity.z*a}const s=.005+e.velocity.lengthSq()*1e-6,o=1-Math.exp(-s*n);e.velocity.multiplyScalar(1-o)}function US(n,e,t){if(!n)return[];const i=n(e,t);return i?Array.isArray(i)?i:i.parts&&Array.isArray(i.parts)&&i.parts.length>0?i.parts:[i]:[]}function AL(n,e,t){const i=ot.physics.playerRadius,r=[{x:n.x,z:n.z},{x:n.x+i,z:n.z},{x:n.x-i,z:n.z},{x:n.x,z:n.z+i},{x:n.x,z:n.z-i},{x:n.x+e.velocity.x*.1,z:n.z+e.velocity.z*.1}],s=[];for(const o of r){const a=US(t,o.x,o.z);for(const l of a)(l.type==="building"||l.type==="bridge"||l.type==="bridgePoly"||l.type==="tunnel"||l.type==="cavern")&&!s.includes(l)&&s.push(l)}return s}function CL(n,e,t,i,r,s,o,a){const l=e.velocity.length()*n,c=Math.max(.1,ot.physics.playerRadius*.5),u=Math.max(1,Math.ceil(l/c)),h=n/u;let f=null,p=!1;const g=e.isGrounded;e.isGrounded=!1,e.isUnderground=!1;for(let x=0;x<u;x++){t.x+=e.velocity.x*h,t.y+=e.velocity.y*h,t.z+=e.velocity.z*h;let m=t.y-ot.physics.eyeHeight,S=t.y+.2;const T=e.velocity.y*h,A=AL(t,e,s);let y=null,E=-1/0;for(const M of A){if(M.type!=="bridge")continue;const w=M.p2.x-M.p1.x,L=M.p2.z-M.p1.z,k=w*w+L*L;if(k===0)continue;const I=((t.x-M.p1.x)*w+(t.z-M.p1.z)*L)/k,H=Math.max(0,Math.min(1,I)),z=M.p1.x+H*w,N=M.p1.z+H*L,V=(t.x-z)**2+(t.z-N)**2,U=M.radiusSq??25;if(V>=U)continue;const $=.5-Math.abs(I-.5);if($>E){E=$;const q=M.p1.y+H*(M.p2.y-M.p1.y);y={yTop:q,deckUnderside:q-1}}}for(const M of A)if(M.type==="bridge"){if(!y)continue;const{yTop:w,deckUnderside:L}=y,k=m-w,I=Math.max(1.5,Math.abs(T)),H=e.velocity.y<=0&&k>=-I&&k<=.4,z=g&&k>-.3&&k<2.5;H||z?(t.y=w+ot.physics.eyeHeight,e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight):e.velocity.y>0&&m<w&&S>=L-I&&(t.y=L-.2,e.velocity.y=-2,S=t.y+.2);break}else if(M.type==="bridgePoly"){const w=m-M.yTop,L=Math.max(1.5,Math.abs(T)),k=e.velocity.y<=0&&w>=-L&&w<=.4,I=g&&w>-.3&&w<2.5;k||I?(t.y=M.yTop+ot.physics.eyeHeight,e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight):e.velocity.y>0&&S<=M.yBase+L&&S>=M.yBase-L&&(t.y=M.yBase-.2,e.velocity.y=-2,S=t.y+.2)}else if(M.type==="tunnel"){const w=M.p2.x-M.p1.x,L=M.p2.z-M.p1.z,k=w*w+L*L;if(k===0)continue;const I=((t.x-M.p1.x)*w+(t.z-M.p1.z)*L)/k;if(I<-.08||I>1.08)continue;const H=Math.max(0,Math.min(1,I)),z=M.p1.x+H*w,N=M.p1.z+H*L,V=t.x-z,U=t.z-N,$=V*V+U*U,q=M.halfW,Q=q*q,ie=q+ot.physics.playerRadius,ye=ie*ie,j=M.p1.y+H*(M.p2.y-M.p1.y),te=j+M.clearance;if(m<j-2||m>te+4||$>ye)continue;const pe=H<.06||H>.94;if($<=Q){e.isUnderground=!0;const re=m-j,me=Math.max(1.5,Math.abs(T)),xe=e.velocity.y<=0&&re>=-me&&re<=.4,De=g&&re>-.3&&re<2.5;(xe||De)&&(t.y=j+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2),e.velocity.y>0&&S>=te-.1&&(t.y=te-(ot.physics.eyeHeight+.1),e.velocity.y=0,S=t.y+.2)}else if($>1e-4&&!pe){const re=Math.sqrt($),me=V/re,xe=U/re,De=ie-re;t.x-=me*De,t.z-=xe*De;const Be=e.velocity.x*me+e.velocity.z*xe;Be>0&&(e.velocity.x-=me*Be,e.velocity.z-=xe*Be),Po.set(-me,0,-xe),f=Po}}else if(M.type==="cavern"&&M.ring){const w=M.yFloor,L=M.yCeiling;if(m<w-2||m>L+3||!$p(t.x,t.z,M.ring))continue;e.isUnderground=!0;const I=m-w,H=Math.max(.5,Math.abs(T)),z=e.velocity.y<=0&&I>=-H&&I<=.1,N=g&&I>-.1&&I<1.5;if((z||N)&&(t.y=w+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2),e.velocity.y>0&&S>=L-.3&&(t.y=L-.5,e.velocity.y=-2,S=t.y+.2),m+.1<L&&S>w){const V=M.ring,U=V.length,$=ot.physics.playerRadius*ot.physics.playerRadius;for(let q=0;q<U;q++){const Q=V[q],ie=V[(q+1)%U],ye=ie.x-Q.x,j=ie.z-Q.z,te=ye*ye+j*j;if(te===0)continue;let pe=((t.x-Q.x)*ye+(t.z-Q.z)*j)/te;pe=Math.max(0,Math.min(1,pe));const re=Q.x+pe*ye,me=Q.z+pe*j,xe=t.x-re,De=t.z-me,Be=xe*xe+De*De;if(Be<$&&Be>0){const P=Math.sqrt(Be),se=xe/P,le=De/P,de=ot.physics.playerRadius-P;t.x+=se*de,t.z+=le*de;const B=e.velocity.x*se+e.velocity.z*le;B<0&&(e.velocity.x-=se*B,e.velocity.z-=le*B),Po.set(se,0,le),f=Po}}}}else if(M.type==="building"&&M.ring){const w=M.yTop??10,L=M.yBase??0;if($p(t.x,t.z,M.ring)){const I=m-w,H=Math.max(.5,Math.abs(T)),z=e.velocity.y<=0&&I>=-H&&I<=.1,N=g&&I>.1&&I<1.5;if(z||N){t.y=w+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight;continue}if(e.velocity.y>0){const V=Math.max(.5,T);S<=L+V&&S>=L-.1&&(t.y=L-.2,e.velocity.y=-2,S=t.y+.2)}}if(m+.1<w&&S>L){const I=M.ring,H=I.length;for(let z=0;z<H;z++){const N=I[z],V=I[(z+1)%H],U=V.x-N.x,$=V.z-N.z,q=U*U+$*$;if(q===0)continue;let Q=((t.x-N.x)*U+(t.z-N.z)*$)/q;Q=Math.max(0,Math.min(1,Q));const ie=N.x+Q*U,ye=N.z+Q*$,j=t.x-ie,te=t.z-ye,pe=j*j+te*te,re=ot.physics.playerRadius*ot.physics.playerRadius;if(pe<re&&pe>0){const me=Math.sqrt(pe),xe=j/me,De=te/me,Be=ot.physics.playerRadius-me;t.x+=xe*Be,t.z+=De*Be;const P=e.velocity.x*xe+e.velocity.z*De;P<0&&(e.movementState==="GLIDE"&&P<-15?(e.velocity.x*=-.1,e.velocity.z*=-.1,e.velocity.y=-5):(e.velocity.x-=xe*P,e.velocity.z-=De*P)),Po.set(xe,0,De),f=Po}}!e.isGrounded&&e.velocity.y<=0&&f&&!p&&m<w&&m>w-ot.mantle.reach&&m>L&&(t.y=w+ot.physics.eyeHeight,e.velocity.y=ot.mantle.speed,e.isGrounded=!0,e.lastGroundedTime=o,e.fallTilt=-.15,p=!0)}}if(!e.isGrounded&&!e.isUnderground&&!a(t.x,t.z)){const M=r(t.x,t.z),w=m-M;(w<=.01||g&&w>.01&&w<1.5)&&(t.y=M+ot.physics.eyeHeight,e.velocity.y<0&&(e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0),e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2)}}let _=0;const v=Math.hypot(e.velocity.x,e.velocity.z);f&&!e.isGrounded&&v>10&&e.movementState!=="FALL"&&(_=f.dot(Hl)*-.6,e.velocity.y<0&&(e.velocity.y+=20*n),i.jump&&(e.velocity.x+=f.x*ot.jump.wallForceH,e.velocity.z+=f.z*ot.jump.wallForceH,e.velocity.y=Math.max(e.velocity.y,ot.jump.wallForceV),e.lastJumpTime=o));const d=1-Math.exp(-10*n);e.wallRoll+=(_-e.wallRoll)*d}function RL(n,e,t){const i=1-Math.exp(-10*n);t.fallTilt*=1-i,e.rotation.order="YXZ";const r=t.movementState==="WALK"?0:t.roll;if(e.rotation.set(t.cameraPitch+t.fallTilt,t.cameraHeading,r+t.wallRoll),e.isPerspectiveCamera){const s=t.movementState==="GLIDE"||t.movementState==="FALL"?t.velocity.length():Math.hypot(t.velocity.x,t.velocity.z);let o=t.baseFov;if(t.movementState!=="WALK"){const a=Math.max(0,Math.min(s/120,1)),l=t.movementState==="GLIDE"&&t.cameraPitch<-.2?Math.abs(t.cameraPitch)*15:0;o+=a*35+l}if(isFinite(o)){const a=1-Math.exp(-8*n);e.fov+=(o-e.fov)*a,e.updateProjectionMatrix()}}}const ty=111320;let wr=null;function LL(n){wr=n}let sd=null,ny=0,od=0,Xs=null,nl=0,qp=0,il=0;function PL(n,e){nl=2*(e||1e3),qp=1/nl,n?.size&&Array.isArray(n?.data)?(Xs=n,il=Xs.size-1,wr&&(wr._topoMaxElev=Xs.data.reduce((t,i)=>i>t?i:t,0),wr._topoGrid=Xs,wr._topoWorldSize=nl)):wr&&(wr._topoWorldSize=nl)}function Ot(n,e){return sd===null&&(ny=wr?.meta?.lon||0,od=wr?.meta?.lat||0,sd=Math.cos(od*(Math.PI/180))),{x:(n-ny)*ty*sd,y:(e-od)*ty,valid:!0}}function Xt(n,e){if(!Xs)return 0;const t=nl*.5;let i=(n+t)*qp,r=(e+t)*qp;i<0?i=0:i>1&&(i=1),r<0?r=0:r>1&&(r=1);const s=i*il,o=r*il,a=Math.min(il-1,s|0),l=Math.min(il-1,o|0),c=a+1,u=l+1,h=s-a,f=o-l,p=Xs.size,g=Xs.data,_=g[l*p+a],v=g[l*p+c],d=g[u*p+a],x=g[u*p+c];return h+f<=1?_+h*(v-_)+f*(d-_):x+(1-h)*(d-x)+(1-f)*(v-x)}let Kp=null;function DL(n){Kp=n}const Yn=new Map,Jo=50;function rf(n,e,t,i){const r=[],s=Math.floor(n/Jo),o=Math.floor(e/Jo),a=Math.floor(t/Jo),l=Math.floor(i/Jo);for(let c=s;c<=o;c++)for(let u=a;u<=l;u++)r.push(`${c}_${u}`);return r}function gl(n,e,t){let i=!1;const r=t.length;for(let s=0,o=r-1;s<r;o=s++){const a=t[s].x,l=t[s].z,c=t[o].x,u=t[o].z;l>e!=u>e&&n<(c-a)*(e-l)/(u-l)+a&&(i=!i)}return i}function iy(n,e,t){const i=e.x-n.x,r=e.z-n.z;if(Math.hypot(i,r)<.001)return;const o=t+1.5,a=Math.min(n.x,e.x)-o,l=Math.max(n.x,e.x)+o,c=Math.min(n.z,e.z)-o,u=Math.max(n.z,e.z)+o,h={type:"bridge",p1:{x:n.x,y:n.y,z:n.z},p2:{x:e.x,y:e.y,z:e.z},radiusSq:o*o};for(const f of rf(a,l,c,u))Yn.has(f)||Yn.set(f,[]),Yn.get(f).push(h)}function IL(n,e,t){if(!n||n.length<3)return;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(const l of n)l.x<i&&(i=l.x),l.x>r&&(r=l.x),l.z<s&&(s=l.z),l.z>o&&(o=l.z);const a={type:"cavern",ring:n,yFloor:e,yCeiling:t};for(const l of rf(i,r,s,o))Yn.has(l)||Yn.set(l,[]),Yn.get(l).push(a)}function NL(){const n=Kp.portalHoles;for(let e=0;e<n.count;e++)n.data[e].set(0,0,0,0);n.count=0,Kp.uniforms.uPortalCount.value=0}const $r=[];function sf(n,e){$r.length=0;const t=`${Math.floor(n/Jo)}_${Math.floor(e/Jo)}`,i=Yn.get(t);if(!i)return $r;for(const r of i)if(r.type==="building")gl(n,e,r.ring)&&$r.push({type:r.type,yTop:r.yTop,yBase:r.yBase,ring:r.ring,p1:r.p1,p2:r.p2});else if(r.type==="bridge"){const s=(r.p2.x-r.p1.x)**2+(r.p2.z-r.p1.z)**2;let o=0;s>0&&(o=((n-r.p1.x)*(r.p2.x-r.p1.x)+(e-r.p1.z)*(r.p2.z-r.p1.z))/s,o=Math.max(0,Math.min(1,o)));const a=r.p1.x+o*(r.p2.x-r.p1.x),l=r.p1.z+o*(r.p2.z-r.p1.z);if((n-a)**2+(e-l)**2<=r.radiusSq){const u=r.p1.y+o*(r.p2.y-r.p1.y),h=u-5;$r.push({type:r.type,yTop:u,yBase:h,p1:r.p1,p2:r.p2})}}else if(r.type==="tunnel"){const s=(r.p2.x-r.p1.x)**2+(r.p2.z-r.p1.z)**2;let o=0;s>0&&(o=((n-r.p1.x)*(r.p2.x-r.p1.x)+(e-r.p1.z)*(r.p2.z-r.p1.z))/s,o=Math.max(0,Math.min(1,o)));const a=r.p1.x+o*(r.p2.x-r.p1.x),l=r.p1.z+o*(r.p2.z-r.p1.z);(n-a)**2+(e-l)**2<=r.gridRadiusSq&&$r.push(r)}else r.type==="cavern"?gl(n,e,r.ring)&&$r.push(r):r.type==="bridgePoly"&&gl(n,e,r.ring)&&$r.push(r);return $r}function UL(n,e,t,i){let r=-1/0,s=!1;const o=sf(n,e);for(const a of o)a.type==="bridgePoly"&&a.yTop>r&&(r=a.yTop,s=!0);return s&&r>i+.5?r+.1:i}const ry=new bi,Kc=new D;class Uf extends PR{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new dt(e,3)),this.setAttribute("uv",new dt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new jp(t,6,1);return this.setAttribute("instanceStart",new is(i,3,0)),this.setAttribute("instanceEnd",new is(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new jp(t,6,1);return this.setAttribute("instanceColorStart",new is(i,3,0)),this.setAttribute("instanceColorEnd",new is(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new MR(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ry.setFromBufferAttribute(t),this.boundingBox.union(ry))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Kc.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kc)),Kc.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Kc));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}let Un=null;function OL(n){Un=n}const Of=`uniform sampler2D uParkMask;
uniform vec4 uMaskBounds;
uniform float uParkModeActive;
`,zf=`
         if (uParkModeActive > 0.5) {
             vec2 _maskUV = (vCustomWorldPos.xz - uMaskBounds.xy) / (uMaskBounds.zw - uMaskBounds.xy);
             if (_maskUV.x < 0.0 || _maskUV.x > 1.0 || _maskUV.y < 0.0 || _maskUV.y > 1.0) discard;
             if (texture2D(uParkMask, _maskUV).r < 0.5) discard;
         }`;function Ff(n){n.uniforms.uParkMask=Un.uniforms.uParkMask,n.uniforms.uMaskBounds=Un.uniforms.uMaskBounds,n.uniforms.uParkModeActive=Un.uniforms.uParkModeActive}function sy(n){n.vertexShader=`attribute vec2 roadUV;
attribute float roadED;
varying vec2 vRoadUV;
varying float vRoadED;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
    vRoadUV = roadUV;
    vRoadED = roadED;`),n.fragmentShader=`varying vec2 vRoadUV;
varying float vRoadED;
${n.fragmentShader}`.replace("#include <map_fragment>",`#include <map_fragment>
        {
            float dashCycle = fract(vRoadUV.y);
            float isDash = step(0.0, dashCycle) * (1.0 - step(0.5, dashCycle));
            float lineAlpha = smoothstep(0.06, 0.03, abs(vRoadUV.x - 0.5));
            lineAlpha *= step(3.0, vRoadED);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), lineAlpha * isDash);
        }`)}function Xn(n){n.uniforms.uPlinthRadius=Un.uniforms.uPlinthRadius,n.uniforms.uCenter=Un.uniforms.uCenter,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
`+Of+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+zf)}function oy(n){n.uniforms.uPlinthRadius=Un.uniforms.uPlinthRadius,n.uniforms.uCenter=Un.uniforms.uCenter,n.uniforms.uIsolation=Un.uniforms.uIsolation,n.uniforms.uIsolationAlpha=Un.uniforms.uIsolationAlpha,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
uniform float uIsolation;
uniform float uIsolationAlpha;
`+Of+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+zf)}function ay(n){n.uniforms.uPlinthRadius=Un.uniforms.uPlinthRadius,n.uniforms.uCenter=Un.uniforms.uCenter,n.uniforms.uIsolation=Un.uniforms.uIsolation,n.uniforms.uIsolationAlpha=Un.uniforms.uIsolationAlpha,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace(/vec4 end\s*=\s*modelViewMatrix\s*\*\s*vec4\(\s*instanceEnd\s*,\s*1\.0\s*\)\s*;/,`$&
         vec3 _wS = (modelMatrix * vec4(instanceStart, 1.0)).xyz;
         vec3 _wE = (modelMatrix * vec4(instanceEnd,   1.0)).xyz;
         vCustomWorldPos = (position.y < 0.5) ? _wS : _wE;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
uniform float uIsolation;
uniform float uIsolationAlpha;
`+Of+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("void main() {",`void main() {
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+zf)}function zL(n){n.uniforms.uPlinthRadius=Un.uniforms.uPlinthRadius,n.uniforms.uCenter=Un.uniforms.uCenter,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>

        #ifdef USE_INSTANCING
            vCustomWorldPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        #else
            vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        #endif`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
`+Of+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+zf)}function ln(n){return!!(n.isLineSegments||n.isLine||n.isLineSegments2||n.material?.isLineMaterial)}function ad(n){const e=new Uf;return e.setPositions(n.attributes.position.array),n.dispose(),e}function of(n){const e=n.clone();return jn(e),e.onBeforeCompile=n.onBeforeCompile,e}function or(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Ut;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=ly(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const g=ly(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ly(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new vn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function OS(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(n.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,m=a.length;x<m;x++){const S=a[x],T=n.attributes[S];l[S]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const A=n.morphAttributes[S];A&&(c[S]||(c[S]=[]),A.forEach((y,E)=>{const M=new y.array.constructor(y.count*y.itemSize);c[S][E]=new y.constructor(M,y.itemSize,y.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),v=p*_;for(let x=0;x<s;x++){const m=i?i.getX(x):x;let S="";for(let T=0,A=a.length;T<A;T++){const y=a[T],E=n.getAttribute(y),M=E.itemSize;for(let w=0;w<M;w++)S+=`${~~(E[h[w]](m)*_+v)},`}if(S in t)u.push(t[S]);else{for(let T=0,A=a.length;T<A;T++){const y=a[T],E=n.getAttribute(y),M=n.morphAttributes[y],w=E.itemSize,L=l[y],k=c[y];for(let I=0;I<w;I++){const H=h[I],z=f[I];if(L[z](o,E[H](m)),M)for(let N=0,V=M.length;N<V;N++)k[N][z](o,M[N][H](m))}}t[S]=o,u.push(o),o++}}const d=n.clone();for(const x in n.attributes){const m=l[x];if(d.setAttribute(x,new m.constructor(m.array.slice(0,o*m.itemSize),m.itemSize,m.normalized)),x in c)for(let S=0;S<c[x].length;S++){const T=c[x][S];d.morphAttributes[x][S]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return d.setIndex(u),d}ke.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:og.merge([ke.common,ke.fog,ke.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Zp extends Ur{constructor(e){super({type:"LineMaterial",uniforms:og.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ld=new Ht,cy=new D,uy=new D,wn=new Ht,En=new Ht,qi=new Ht,cd=new D,ud=new Et,bn=new DR,fy=new D,Zc=new bi,Jc=new zr,Ki=new Ht;let er,$s;function hy(n,e,t){return Ki.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ki.multiplyScalar(1/Ki.w),Ki.x=$s/t.width,Ki.y=$s/t.height,Ki.applyMatrix4(n.projectionMatrixInverse),Ki.multiplyScalar(1/Ki.w),Math.abs(Math.max(Ki.x,Ki.y))}function FL(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){bn.start.fromBufferAttribute(r,a),bn.end.fromBufferAttribute(s,a),bn.applyMatrix4(t);const c=new D,u=new D;er.distanceSqToSegment(bn.start,bn.end,u,c),u.distanceTo(c)<$s*.5&&e.push({point:u,pointOnLine:c,distance:er.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function kL(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;er.at(1,qi),qi.w=1,qi.applyMatrix4(e.matrixWorldInverse),qi.applyMatrix4(i),qi.multiplyScalar(1/qi.w),qi.x*=s.x/2,qi.y*=s.y/2,qi.z=0,cd.copy(qi),ud.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(wn.fromBufferAttribute(l,f),En.fromBufferAttribute(c,f),wn.w=1,En.w=1,wn.applyMatrix4(ud),En.applyMatrix4(ud),wn.z>h&&En.z>h)continue;if(wn.z>h){const m=wn.z-En.z,S=(wn.z-h)/m;wn.lerp(En,S)}else if(En.z>h){const m=En.z-wn.z,S=(En.z-h)/m;En.lerp(wn,S)}wn.applyMatrix4(i),En.applyMatrix4(i),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=s.x/2,wn.y*=s.y/2,En.x*=s.x/2,En.y*=s.y/2,bn.start.copy(wn),bn.start.z=0,bn.end.copy(En),bn.end.z=0;const _=bn.closestPointToPointParameter(cd,!0);bn.at(_,fy);const v=ai.lerp(wn.z,En.z,_),d=v>=-1&&v<=1,x=cd.distanceTo(fy)<$s*.5;if(d&&x){bn.start.fromBufferAttribute(l,f),bn.end.fromBufferAttribute(c,f),bn.start.applyMatrix4(o),bn.end.applyMatrix4(o);const m=new D,S=new D;er.distanceSqToSegment(bn.start,bn.end,S,m),t.push({point:S,pointOnLine:m,distance:er.origin.distanceTo(S),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}class vl extends Zt{constructor(e=new Uf,t=new Zp({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)cy.fromBufferAttribute(t,o),uy.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+cy.distanceTo(uy);const s=new jp(r,2,1);return e.setAttribute("instanceDistanceStart",new is(s,1,0)),e.setAttribute("instanceDistanceEnd",new is(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;er=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;$s=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Jc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$s*.5;else{const h=Math.max(r.near,Jc.distanceToPoint(er.origin));c=hy(r,h,l.resolution)}if(Jc.radius+=c,er.intersectsSphere(Jc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Zc.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=$s*.5;else{const h=Math.max(r.near,Zc.distanceToPoint(er.origin));u=hy(r,h,l.resolution)}Zc.expandByScalar(u),er.intersectsBox(Zc)!==!1&&(i?FL(this,t):kL(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ld),this.material.uniforms.resolution.value.set(ld.z,ld.w))}}let Uo=null;function BL(n){Uo=n}function af(){return new Promise(n=>setTimeout(n,0))}function pg(n){n.forEach(e=>{e.boundingSphere||e.computeBoundingSphere()}),n.sort((e,t)=>{const i=Math.floor(e.boundingSphere.center.x/500),r=Math.floor(e.boundingSphere.center.z/500),s=Math.floor(t.boundingSphere.center.x/500),o=Math.floor(t.boundingSphere.center.z/500);return i!==s?i-s:r-o})}async function Fs(n,e,t,i){if(n.length===0)return;pg(n);const r=t?500:250;for(let s=0;s<n.length;s+=r){const o=n.slice(s,s+r);for(const f of o)for(const p of Object.keys(f.attributes))p!=="position"&&p!=="normal"&&p!=="color"&&f.deleteAttribute(p);const a=o.some(f=>f.index!==null),l=o.some(f=>f.index===null),c=a&&l?o.map(f=>f.index!==null?f.toNonIndexed():f):o,u=or(c);if(c!==o&&c.forEach((f,p)=>{f!==o[p]&&f.dispose()}),o.forEach(f=>f.dispose()),!u){await af();continue}let h;if(t){const f=new Uf;f.setPositions(u.attributes.position.array),u.dispose(),h=new vl(f,e)}else h=new Zt(u,e),h.castShadow=!0,h.receiveShadow=!0;h.userData.isGhost=!1,h.matrixAutoUpdate=!1,h.updateMatrix(),i.add(h),await af()}}async function dy(n,e,t,i,r,s){n.length&&(await Fs(n,s.bldgFill,!1,Uo.groups.bFill),n.length=0),e.length&&(await Fs(e,s.ctxLine,!0,Uo.groups.bWire),e.length=0),t.length&&(await Fs(t,s.bldgFill,!1,Uo.groups.roofs),t.length=0),i.length&&(await Fs(i,s.ctxLine,!0,Uo.groups.roofs),i.length=0),r.length&&(await Fs(r,s.ctxLine,!0,Uo.groups.detail),r.length=0)}function Vl(n){return n.type==="Polygon"?[n.coordinates]:n.type==="MultiPolygon"?n.coordinates:[]}function Jp(n){if(!n?.[0])return null;const e=new Cr,t=[];for(const u of n[0]){if(!u||u.length<2)continue;const h=Ot(u[0],u[1]);h.valid&&t.push(h)}if(t.length<3)return null;const i=t[0],r=t[t.length-1],s=Math.hypot(r.x-i.x,r.y-i.y),o=1e3,a=Math.hypot(i.x,i.y),l=Math.hypot(r.x,r.y);if(s>o*.25&&a>o*.8&&l>o*.8){const u=(i.x+r.x)/2,h=(i.y+r.y)/2;let f=Math.hypot(u,h),p=u,g=h;f<1?(p=1,g=0):(p/=f,g/=f);const _=o*10;t.push({x:r.x+p*_,y:r.y+g*_}),t.push({x:i.x+p*_,y:i.y+g*_})}let c=0;for(let u=0;u<t.length;u++){const h=(u+1)%t.length;c+=t[u].x*t[h].y,c-=t[h].x*t[u].y}c<0&&t.reverse(),t.forEach((u,h)=>h===0?e.moveTo(u.x,u.y):e.lineTo(u.x,u.y));for(let u=1;u<n.length;u++){const h=[];for(const g of n[u]){if(!g||g.length<2)continue;const _=Ot(g[0],g[1]);_.valid&&h.push(_)}if(h.length<3)continue;let f=0;for(let g=0;g<h.length;g++){const _=(g+1)%h.length;f+=h[g].x*h[_].y,f-=h[_].x*h[g].y}f>0&&h.reverse();const p=new zl;h.forEach((g,_)=>_===0?p.moveTo(g.x,g.y):p.lineTo(g.x,g.y)),e.holes.push(p)}return e}let Oo=null;function HL(n){Oo=n}function VL(n,e,t){if(!n?.features?.length)return;const i=new Set,r=6;function s(m){if(m?.features)for(const S of m.features){const T=S.geometry?.type;if(T!=="LineString"&&T!=="MultiLineString")continue;const A=T==="LineString"?[S.geometry.coordinates]:S.geometry.coordinates;for(const y of A){let E=null;for(const M of y){const w=Ot(M[0],M[1]);if(!w.valid)continue;const L=new ve(w.x,-w.y);if(E){const k=Math.max(1,Math.ceil(E.distanceTo(L)/(r/2)));for(let I=0;I<=k;I++){const H=new ve().lerpVectors(E,L,I/k),z=Math.floor(H.x/r),N=Math.floor(H.y/r);i.add(`${z}_${N}`),i.add(`${z+1}_${N}`),i.add(`${z-1}_${N}`),i.add(`${z}_${N+1}`),i.add(`${z}_${N-1}`)}}E=L}}}}s(e),s(t);const o=new Pf(1.5,4,5);o.translate(0,3.5,0);const a=new Es(.2,.25,1.5,4);a.translate(0,.75,0);const l=or([o,a]);o.dispose(),a.dispose();const c=new tl({color:4885050});jn(c);const u=c.onBeforeCompile;c.onBeforeCompile=(m,S)=>{zL(m),m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
             vec3 _wPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
             float sway = sin(_wPos.x * 0.05 + uTime * 1.5) * sin(_wPos.z * 0.05 + uTime * 1.2);
             transformed.x += sway * max(0.0, position.y - 0.5) * 0.15;
             transformed.z += sway * max(0.0, position.y - 0.5) * 0.15;`),u(m,S)};const h=Oo.maxTrees,f=new kp(l,c,h);f.instanceMatrix.setUsage(Sa),f.frustumCulled=!1,f.castShadow=!0,f.receiveShadow=!0,f.userData.colorKey="tree";const p=new nn,g=Oo.meta?.radius||1e3;let _=0;const v=[];for(const m of n.features)if(m.geometry)for(const S of Vl(m.geometry)){if(!S[0]||S[0].length<3)continue;const T=S[0].map(k=>{const I=Ot(k[0],k[1]);return{x:I.x,z:-I.y}});let A=1/0,y=-1/0,E=1/0,M=-1/0,w=0;for(let k=0;k<T.length;k++){const I=T[k],H=T[(k+1)%T.length];I.x<A&&(A=I.x),I.x>y&&(y=I.x),I.z<E&&(E=I.z),I.z>M&&(M=I.z),w+=I.x*H.z-H.x*I.z}w=Math.abs(w)/2;const L=Math.max(1,Math.floor(w/100));_+=L,v.push({worldRing:T,bounds:{minX:A,maxX:y,minZ:E,maxZ:M},potential:L})}const d=h/(_||1);let x=0;for(const m of v){if(x>=h)break;const S=Math.ceil(m.potential*d),{minX:T,maxX:A,minZ:y,maxZ:E}=m.bounds;for(let M=0;M<S&&!(x>=h);M++)for(let w=0;w<10;w++){const L=T+Math.random()*(A-T),k=y+Math.random()*(E-y);if(Math.hypot(L,k)>g||!gl(L,k,m.worldRing))continue;const I=Math.floor(L/r),H=Math.floor(k/r);if(i.has(`${I}_${H}`))continue;const z=Xt(L,k),N=.5+Math.random()*1;p.position.set(L,z,k),p.scale.set(N,N,N),p.rotation.y=Math.random()*Math.PI*2,p.updateMatrix(),f.setMatrixAt(x++,p.matrix);break}}f.count=x,f.instanceMatrix.needsUpdate=!0,Oo.treeMesh=f,Oo.treeMeshTotal=x,Oo.groups.veg.add(f)}function GL(n){const e=(n.properties||{}).leisure;return e==="nature_reserve"?"nature_reserve":e==="stadium"||e==="sports_centre"?"stadium":e==="pitch"||e==="track"||e==="golf_course"||e==="miniature_golf"||e==="disc_golf_course"?"pitch":"park"}function WL(n){const e=n.properties||{},t=e.natural,i=e.landuse;return t==="wood"||i==="forest"?"forest":t==="bare_rock"||t==="cliff"?"terrain":t==="sand"||t==="beach"||t==="dune"?"sand":t==="scrub"||t==="heath"||t==="wetland"?"scrub":i==="farmland"||i==="orchard"||i==="vineyard"?"farmland":i==="grass"||i==="meadow"||i==="greenfield"||t==="grassland"||t==="fell"||t==="moor"||t==="tundra"?"grass":"veg"}function XL(n){const e=n.properties||{};return e.amenity==="parking"?"parking":e.aeroway?"aeroway":e.highway==="pedestrian"?"plaza":null}function jL(n){const e=n.properties||{},t=e.landuse,i=e.amenity;return i==="university"||i==="college"||i==="school"||i==="hospital"||i==="clinic"?"institutional":t==="residential"?"residential":t==="commercial"||t==="retail"?"commercial":t==="industrial"||t==="quarry"||t==="brownfield"||t==="construction"||t==="landfill"||t==="port"?"industrial":t==="cemetery"?"cemetery":t==="military"||e.military?"military":"institutional"}function YL(n,e,t,i,r,s=null,o=null,a=null){if(!n?.features)return;a||(a=Xt);const l=new Map,c=new Map,u=()=>t,h=typeof i=="function"?i:()=>i;for(const f of n.features){if(!f.geometry)continue;const p=s?s(f):"default";l.has(p)||(l.set(p,[]),c.set(p,[]));const g=u(),_=h(f);for(const v of Vl(f.geometry)){const d=Jp(v);if(!d||d.curves.length===0)continue;let x=_>0?new wa(d,{depth:_,bevelEnabled:!1,curveSegments:1}):new so(d,24);x.rotateX(-Math.PI/2);const m=x.attributes.position;for(let S=0;S<m.count;S++){const T=m.getX(S),A=m.getZ(S),y=m.getY(S);m.setY(S,a(T,A)+g+y)}m.needsUpdate=!0,x.computeVertexNormals(),l.get(p).push(x),o&&c.get(p).push(new xi(x,30))}}for(const[f,p]of l){if(p.length===0)continue;const g=e.children.length;Fs(p,of(r),!1,e);for(let _=g;_<e.children.length;_++)e.children[_].userData.colorKey=f}if(o)for(const[f,p]of c){if(p.length===0)continue;const g=e.children.length;Fs(p,of(o),!0,e);for(let _=g;_<e.children.length;_++)e.children[_].userData.colorKey=f}}let Su=null;function $L(n){Su=n}function zS(n,e,t,i,r,s,o,a){const l=Su.renderer.capabilities.maxTextureSize,c=Su.highResGround?32768:8192,u=Math.min(c,l),h=document.createElement("canvas");h.width=u,h.height=u;const f=h.getContext("2d");f.fillStyle="#"+new nt(a.topo).getHexString(),f.fillRect(0,0,u,u);const p=(_,v,d)=>{_?.features&&_.features.forEach(x=>{if(!x.geometry)return;const m=x.geometry.type;if(m!=="Polygon"&&m!=="MultiPolygon")return;const S=v?v(x):null,T=S?a[S]:d;if(T==null)return;f.fillStyle="#"+new nt(T).getHexString(),f.beginPath(),(m==="Polygon"?[x.geometry.coordinates]:x.geometry.coordinates).forEach(y=>{y.forEach(E=>{if(!E||E.length<2)return;let M=null,w=null;if(E.forEach(L=>{const k=Ot(L[0],L[1]);if(!k.valid)return;const I=(k.x+o)/(o*2)*u,H=(-k.y+o)/(o*2)*u;M===null?(f.moveTo(I,H),M={x:I,y:H}):f.lineTo(I,H),w={x:I,y:H}}),M&&w){if(Math.hypot(w.x-M.x,w.y-M.y)>u*.2){const k=(M.x+w.x)/2,I=(M.y+w.y)/2;let H=k-u/2,z=I-u/2;const N=Math.hypot(H,z)||1;H/=N,z/=N;const V=u*2;f.lineTo(w.x+H*V,w.y+z*V),f.lineTo(M.x+H*V,M.y+z*V)}f.closePath()}})}),f.fill("evenodd")})};p(n,jL,a.institutional),p(t,WL,a.veg),p(e,GL,a.park),p(i,()=>"water",a.water),p(s,XL,null),r?.features&&(f.strokeStyle="#"+new nt(a.skiRun||16777215).getHexString(),f.fillStyle=f.strokeStyle,f.lineCap="round",f.lineJoin="round",r.features.forEach(_=>{if(!_.properties?.["piste:type"]||!_.geometry)return;const v=_.geometry.type;if(v==="Point"||v==="MultiPoint"||v==="GeometryCollection")return;const d=v==="Polygon"||v==="MultiPolygon",x=v==="LineString"||v==="Polygon"?[_.geometry.coordinates]:_.geometry.coordinates;f.lineWidth=d?0:Math.max(2,u*.0015),f.beginPath(),x.forEach(m=>{(d?m[0]:m).forEach((T,A)=>{const y=Ot(T[0],T[1]);if(!y.valid)return;const E=(y.x+o)/(o*2)*u,M=(-y.y+o)/(o*2)*u;A===0?f.moveTo(E,M):f.lineTo(E,M)})}),d?f.fill("evenodd"):f.stroke()}));const g=new Vp(h);return g.flipY=!1,g.anisotropy=Su.renderer.capabilities.getMaxAnisotropy(),g.colorSpace=Ui,g.generateMipmaps=!0,g.minFilter=tE,g}class qL extends dg{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new bR(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new KL(e)}}class KL{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=ZL(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function ZL(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=JL(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function JL(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new IR;let a,l,c,u,h,f,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,d=_.length;v<d;)switch(_[v++]){case"m":a=_[v++]*e+t,l=_[v++]*e+i,o.moveTo(a,l);break;case"l":a=_[v++]*e+t,l=_[v++]*e+i,o.lineTo(a,l);break;case"q":c=_[v++]*e+t,u=_[v++]*e+i,h=_[v++]*e+t,f=_[v++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[v++]*e+t,u=_[v++]*e+i,h=_[v++]*e+t,f=_[v++]*e+i,p=_[v++]*e+t,g=_[v++]*e+i,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class QL extends wa{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const yi={motorway:{width:14,color:3355443,hasLines:!0,camber:0},trunk:{width:12,color:3355443,hasLines:!0,camber:0},primary:{width:10,color:4473924,hasLines:!0,camber:0},secondary:{width:8,color:5592405,hasLines:!0,camber:0},residential:{width:6,color:6710886,hasLines:!1,camber:0},railway:{width:5,color:2236962,hasLines:!1,camber:0},footway:{width:4,color:8943462,hasLines:!1,camber:.5},pedestrian:{width:6,color:8943462,hasLines:!1,camber:0},steps:{width:1.5,color:7824981,hasLines:!1,camber:0},path:{width:4,color:8943462,hasLines:!1,camber:.3},default:{width:6,color:5592405,hasLines:!0,camber:0}},eP=5,Qc=30,tP=30,nP=.2,py=n=>-(Math.cos(Math.PI*n)-1)/2;function iP(n){if(n.railway)return yi.railway;const e=(n.highway||"").toLowerCase();return e==="motorway"?yi.motorway:e==="trunk"?yi.trunk:e==="primary"?yi.primary:e==="secondary"||e==="tertiary"?yi.secondary:e==="residential"||e==="unclassified"||e==="road"||e==="living_street"||e==="service"?yi.residential:e==="footway"?yi.footway:e==="pedestrian"?yi.pedestrian:e==="steps"?yi.steps:e==="path"||e==="cycleway"||e==="track"?yi.path:yi.default}function my(n,e){if(!n)return e;const t=n.toLowerCase().trim(),i={brick:9194034,brown:10824234,red:13369344,white:16777215,grey:8421504,gray:8421504,black:2236962,blue:17612,green:32768,yellow:16766720,orange:16747520,beige:16119260,glass:8965375,silver:12632256,concrete:10066329};if(i[t])return i[t];if(t.startsWith("#")){const r=parseInt(t.replace("#",""),16);return isNaN(r)?e:r}return e}function Do(n,e){const t=n.attributes.position.count,i=new Float32Array(t*3),r=new nt(e);for(let s=0;s<t;s++)i[s*3]=r.r,i[s*3+1]=r.g,i[s*3+2]=r.b;n.setAttribute("color",new vn(i,3))}function fd(n,e,t){if(n.length<2)return[];const i=[n[0]];for(let s=1;s<n.length;s++)Math.hypot(n[s].x-i[i.length-1].x,n[s].y-i[i.length-1].y)>.1&&i.push(n[s]);if(i.length<2)return[];const r=[];for(let s=0;s<i.length-1;s++){const o=i[s],a=i[s+1],l=new D(o.x,0,-o.y);l.y=t(l.x,l.z),s===0&&r.push(l);const c=Math.hypot(a.x-o.x,a.y-o.y);if(c>e){const h=Math.ceil(c/e);for(let f=1;f<h;f++){const p=f/h,g=new D(o.x+(a.x-o.x)*p,0,-(o.y+(a.y-o.y)*p));g.y=t(g.x,g.z),r.push(g)}}const u=new D(a.x,0,-a.y);u.y=t(u.x,u.z),r.push(u)}return r}function gy(n,e=3){if(n.length<3)return n;for(let t=0;t<e;t++){const i=new Float32Array(n.length);i[0]=n[0].y,i[n.length-1]=n[n.length-1].y;for(let r=1;r<n.length-1;r++)i[r]=(n[r-1].y+n[r].y+n[r+1].y)/3;for(let r=1;r<n.length-1;r++)n[r].y=i[r]}return n}function rP(n,e){if(n.length<2)return null;const t=[],i=[],r=[],s=[];let o=0;for(let l=0;l<n.length;l++){const c=n[l];l>0&&(o+=Math.hypot(c.x-n[l-1].x,c.z-n[l-1].z));const u=o/4;t.push(c.x,c.y,c.z),r.push(0,u),s.push(0),t.push(c.x,c.y+e,c.z),r.push(1,u),s.push(0)}for(let l=0;l<n.length-1;l++){const c=l*2;i.push(c,c+1,c+2,c+1,c+3,c+2)}const a=new Ut;return a.setAttribute("position",new dt(t,3)),a.setAttribute("roadUV",new dt(r,2)),a.setAttribute("roadED",new dt(s,1)),a.setIndex(i),a.computeVertexNormals(),a}function vy(n,e){const{cfg:t,halfW:i,layer:r,taperStart:s,taperEnd:o,archBridge:a=!1,markings:l=!0,priorityOffset:c=0}=e;let u=[n[0]];for(let N=1;N<n.length;N++)Math.hypot(n[N].x-u[u.length-1].x,n[N].y-u[u.length-1].y)>.1&&u.push(n[N]);if(u.length<2)return null;const h=2,f=[new D(u[0].x,0,-u[0].y)],p=[0];let g=0;for(let N=0;N<u.length-1;N++){const V=u[N],U=u[N+1],$=Math.ceil(Math.hypot(U.x-V.x,U.y-V.y)/h);for(let q=1;q<=$;q++){const Q=q/$,ie=new D(V.x+(U.x-V.x)*Q,0,-(V.y+(U.y-V.y)*Q));g+=f[f.length-1].distanceTo(ie),p.push(g),f.push(ie)}}const v=(r&&r>0?r:1)*eP+c,d=.8,x=Xt(f[0].x,f[0].z),m=Xt(f[f.length-1].x,f[f.length-1].z),S=f.map(N=>Xt(N.x,N.z)),T=[],A=[],y=[],E=[];for(let N=0;N<f.length;N++){const V=f[N];let U=new ve;if(N===0)U.set(f[1].x-V.x,f[1].z-V.z).normalize();else if(N===f.length-1)U.set(V.x-f[N-1].x,V.z-f[N-1].z).normalize();else{const de=new ve(V.x-f[N-1].x,V.z-f[N-1].z).normalize(),B=new ve(f[N+1].x-V.x,f[N+1].z-V.z).normalize();U.addVectors(de,B).normalize(),U.lengthSq()<.001&&U.copy(de)}const $=-U.y*i,q=U.x*i,Q=p[N],ie=g-Q;let ye=1;s&&Q<Qc&&(ye*=py(Q/Qc)),o&&ie<Qc&&(ye*=py(ie/Qc));const j=a&&t.camber>0&&g>0?Math.sin(Q/g*Math.PI)*t.camber*ye:0,te=g>0?Q/g:0;let re=x*(1-te)+m*te+v*ye+j;re=Math.max(re,S[N]+.1),V.y=re;const me=re-d,xe=V.x+$,De=V.z+q,Be=V.x-$,P=V.z-q;T.push(xe,re,De,Be,re,P,xe,me,De,Be,me,P),T.push(xe,re,De,xe,me,De,Be,re,P,Be,me,P);const se=Q/4,le=l&&t.hasLines?Math.min(Q,ie):0;y.push(0,se,1,se,0,se,1,se),y.push(0,se,0,se,1,se,1,se);for(let de=0;de<8;de++)E.push(le)}for(let N=0;N<f.length-1;N++){const V=N*8,U=(N+1)*8;A.push(V+0,V+1,U+1,V+0,U+1,U+0),A.push(V+2,U+3,V+3,V+2,U+2,U+3),A.push(V+4,V+5,U+5,V+4,U+5,U+4),A.push(V+6,U+7,V+7,V+6,U+6,U+7)}let M=new Ut;M.setAttribute("position",new dt(T,3)),M.setAttribute("roadUV",new dt(y,2)),M.setAttribute("roadED",new dt(E,1)),M.setIndex(A),M.computeVertexNormals();const w=Math.min(.55,i*.22),L=10,k=.5,I=[];let H=0;for(let N=0;N<f.length-1;N++){const V=f[N],U=f[N+1];if(H+=V.distanceTo(U),H<tP)continue;H=0;const $=Xt(V.x,V.z),q=V.y,Q=q-nP,ie=Q-$;if(ie<.8)continue;const ye=U.x-V.x,j=U.z-V.z,te=Math.hypot(ye,j)||1,pe=-j/te,re=ye/te,me=i>=4.5?3:2,xe=i*.72,De=$+ie*.5,Be=Q-k*.5;for(let le=0;le<me;le++){const de=me===1?0:le/(me-1)-.5,B=V.x+pe*(de*xe*2),ze=V.z+re*(de*xe*2),be=new Es(w,w*1.15,ie,L);be.translate(B,De,ze),be.deleteAttribute("uv"),I.push(be),iy({x:B,y:$,z:ze},{x:B,y:q,z:ze},w+.15)}const P=xe*2+w*2,se=new ti(P,k,w*2);se.rotateY(Math.atan2(pe,re)),se.translate(V.x,Be,V.z),se.deleteAttribute("uv"),I.push(se)}let z=null;if(I.length>0){z=or(I),I.forEach(V=>V.dispose());const N=z.attributes.position.count;z.setAttribute("roadUV",new dt(new Float32Array(N*2),2)),z.setAttribute("roadED",new dt(new Float32Array(N),1))}for(let N=0;N<f.length-1;N++)iy(f[N],f[N+1],i);return{deckGeo:M,pierGeo:z}}function qa(n,e,t=!0){if(n.length<2)return null;const i=[],r=[],s=[],o=[];let a=1,l=0,c=0,u=0;for(let f=1;f<n.length;f++)u+=Math.hypot(n[f].x-n[f-1].x,n[f].z-n[f-1].z);for(let f=0;f<n.length;f++){const p=n[f>0?f-1:0],g=n[f<n.length-1?f+1:n.length-1];f>0&&(c+=Math.hypot(n[f].x-n[f-1].x,n[f].z-n[f-1].z));let _=g.x-p.x,v=g.z-p.z;const d=Math.hypot(_,v);d<1e-5?(_=a,v=l):(_/=d,v/=d,a=_,l=v);const x=-v*e,m=_*e,S=n[f].x+x,T=n[f].z+m,A=n[f].x-x,y=n[f].z-m;let E,M;if(n[f].isBridgeDeck)E=M=n[f].y;else{const k=Xt(S,T),I=Xt(A,y),H=Xt(n[f].x,n[f].z),z=n[f].y-H,N=Math.max(0,H-(k+I)/2);E=k+z+N,M=I+z+N}const w=c/4,L=t?Math.min(c,u-c):0;i.push(S,E,T),s.push(0,w),o.push(L),i.push(A,M,y),s.push(1,w),o.push(L)}for(let f=0;f<n.length-1;f++){const p=f*2;r.push(p,p+2,p+1,p+1,p+2,p+3)}const h=new Ut;return h.setAttribute("position",new dt(i,3)),h.setAttribute("roadUV",new dt(s,2)),h.setAttribute("roadED",new dt(o,1)),h.setIndex(r),h.computeVertexNormals(),h}function yy(n,e,t,i=0){const r=[],o=t>0?t:Math.floor((e-i)/3.5);for(let a=0;a<n.length-1;a++){const l=n[a],c=n[a+1],u=c.x-l.x,h=c.y-l.y,f=Math.hypot(u,h);if(f<6||isNaN(f))continue;const p=Math.floor(f/16);for(let g=1;g<p;g++){const _=g/p,v=l.x+u*_,d=-(l.y+h*_);r.push(new D(v,i,d),new D(v,e,d))}if(o>4)for(let g=4;g<o;g+=4){const _=i+g*((e-i)/o);r.push(new D(l.x,_,-l.y),new D(c.x,_,-c.y))}}return r}const sP=new Set(["vault","sphere","dome","shell","round","freeform","barrel","arch","curved","onion","cone","pyramidal","pyramid","gabled","gable","hipped","hip","gambrel","mansard"]);function oP(n,e){if(e<4)return!0;let t=0;for(let i=0;i<e;i++){const r=n[i],s=n[(i+1)%e],o=n[(i+2)%e],a=s.x-r.x,l=s.y-r.y,c=o.x-s.x,u=o.y-s.y,h=a*u-l*c,f=(a*a+l*l)*(c*c+u*u);if(!(f<1e-12)&&h*h>f*3e-4){const p=h>0?1:-1;if(t===0)t=p;else if(p!==t)return!1}}return!0}function aP(n,e,t,i){const r=n.length;if(r<3)return null;const s=r-1,o=r>3&&n[0].x===n[s].x&&n[0].y===n[s].y?s:r;let a=0;for(let z=0;z<o;z++){const N=(z+1)%o;a+=n[z].x*n[N].y-n[N].x*n[z].y}const l=new Cr;if(a>=0)for(let z=0;z<o;z++)z===0?l.moveTo(n[z].x,n[z].y):l.lineTo(n[z].x,n[z].y);else for(let z=o-1;z>=0;z--)z===o-1?l.moveTo(n[z].x,n[z].y):l.lineTo(n[z].x,n[z].y);const c=new so(l),u=c.attributes.position,h=u.count;let f=0,p=n[0].x,g=n[0].y,_=n[o>1?1:0].x,v=n[o>1?1:0].y;for(let z=0;z<o;z++)for(let N=z+1;N<o;N++){const V=(n[N].x-n[z].x)**2+(n[N].y-n[z].y)**2;V>f&&(f=V,p=n[z].x,g=n[z].y,_=n[N].x,v=n[N].y)}const d=Math.sqrt(f)||1e-4,x=(_-p)/d,m=(v-g)/d;let S=1/0,T=-1/0,A=1/0,y=-1/0;for(let z=0;z<o;z++){const N=(n[z].x-p)*x+(n[z].y-g)*m,V=-(n[z].x-p)*m+(n[z].y-g)*x;N<S&&(S=N),N>T&&(T=N),V<A&&(A=V),V>y&&(y=V)}const E=(S+T)*.5,M=(T-S)*.5,w=(A+y)*.5,L=Math.max(1e-4,(y-A)*.5),k=M*(1-i),I=M*i,H=t>0?t:Math.max(1.5,L*.4);for(let z=0;z<h;z++){const N=u.getX(z),V=u.getY(z),U=(N-p)*x+(V-g)*m,$=-(N-p)*m+(V-g)*x,q=Math.min(1,Math.abs($-w)/L),Q=Math.abs(U-E)-k,ie=I>.01?Math.max(0,Math.min(1,Q/I)):0;u.setZ(z,e+H*Math.max(0,1-Math.max(q,ie)))}return u.needsUpdate=!0,c.rotateX(-Math.PI*.5),c.computeVertexNormals(),c}function lP(n,e,t,i){if(!n||n.length<3||!sP.has(t))return null;if(t==="gable"||t==="gabled"||t==="hip"||t==="hipped"||t==="gambrel"||t==="mansard")return aP(n,e,i,t==="gable"||t==="gabled"?0:t==="gambrel"||t==="mansard"?.15:.3);const s=t==="shell"||t==="freeform"||t==="curved",o=t==="dome"||t==="sphere"||t==="round";if(s||o||(t==="barrel"||t==="vault"||t==="arch")){const m=n.length,S=m-1,T=m>3&&n[0].x===n[S].x&&n[0].y===n[S].y?S:m;let A=0;for(let L=0;L<T;L++){const k=(L+1)%T;A+=n[L].x*n[k].y-n[k].x*n[L].y}const y=new Cr;if(A>=0)for(let L=0;L<T;L++)(L===0?y.moveTo:y.lineTo).call(y,n[L].x,n[L].y);else for(let L=T-1;L>=0;L--)(L===T-1?y.moveTo:y.lineTo).call(y,n[L].x,n[L].y);const E=new so(y),M=E.attributes.position,w=M.count;if(s){let L=0,k=n[0],I=n[1];for(let U=0;U<T;U++){const $=n[U],q=n[(U+1)%T],Q=(q.x-$.x)**2+(q.y-$.y)**2;Q>L&&(L=Q,k=$,I=q)}const H=(U,$,q,Q,ie,ye)=>{const j=(ie-q)**2+(ye-Q)**2;if(j===0)return(U-q)**2+($-Q)**2;const te=Math.max(0,Math.min(1,((U-q)*(ie-q)+($-Q)*(ye-Q))/j));return(U-(q+te*(ie-q)))**2+($-(Q+te*(ye-Q)))**2},z=new Float32Array(w);let N=1e-4;for(let U=0;U<w;U++){const $=Math.sqrt(H(M.getX(U),M.getY(U),k.x,k.y,I.x,I.y));z[U]=$,$>N&&(N=$)}const V=i>0?i:Math.max(1.5,N*.8);for(let U=0;U<w;U++)M.setZ(U,e+V*Math.sin((1-z[U]/N)*Math.PI*.5))}else if(o){let L=0,k=0;for(let z=0;z<T;z++)L+=n[z].x,k+=n[z].y;L/=T,k/=T;let I=1e-4;for(let z=0;z<T;z++)I=Math.max(I,Math.hypot(n[z].x-L,n[z].y-k));const H=i>0?i:Math.max(1.5,I*.5);for(let z=0;z<w;z++){const N=Math.hypot(M.getX(z)-L,M.getY(z)-k);M.setZ(z,e+H*Math.max(0,1-(N/I)**2))}}else{let L=0,k=n[0],I=n[1];for(let ie=0;ie<T;ie++)for(let ye=ie+1;ye<T;ye++){const j=(n[ye].x-n[ie].x)**2+(n[ye].y-n[ie].y)**2;j>L&&(L=j,k=n[ie],I=n[ye])}const H=Math.sqrt(L)||1e-4,z=(I.x-k.x)/H,N=(I.y-k.y)/H;let V=1/0,U=-1/0;for(let ie=0;ie<T;ie++){const ye=-(n[ie].x-k.x)*N+(n[ie].y-k.y)*z;ye<V&&(V=ye),ye>U&&(U=ye)}const $=(V+U)*.5,q=Math.max(1e-4,(U-V)*.5),Q=i>0?i:Math.max(1.5,q*.6);for(let ie=0;ie<w;ie++){const ye=-(M.getX(ie)-k.x)*N+(M.getY(ie)-k.y)*z,j=Math.max(0,1-Math.abs(ye-$)/q);M.setZ(ie,e+Q*Math.sin(j*Math.PI*.5))}}return M.needsUpdate=!0,E.rotateX(-Math.PI*.5),E.computeVertexNormals(),E}const l=n.length,c=l>3&&n[0].x===n[l-1].x&&n[0].y===n[l-1].y?l-1:l;if(t!=="onion"&&t!=="cone"&&!oP(n,c))return null;let u=0,h=0;for(let m=0;m<c;m++)u+=n[m].x,h+=n[m].y;u/=c,h/=c;let f=0;for(let m=0;m<c;m++)f=Math.max(f,Math.hypot(n[m].x-u,n[m].y-h));if(f<.5)return null;const p=i>0?i:Math.max(1.5,f*.35);if(t==="onion"){const m=new hg(Math.min(f,p),16,8,0,Math.PI*2,0,Math.PI*.5);return m.translate(u,e,-h),m}if(t==="cone"){const m=new Pf(f*.85,p,16);return m.translate(u,e+p*.5,-h),m}let g=0;for(let m=0;m<c;m++){const S=(m+1)%c;g+=n[m].x*n[S].y-n[S].x*n[m].y}const _=g>=0,v=new Float32Array(c*9);for(let m=0;m<c;m++){const S=_?n[m]:n[(m+1)%c],T=_?n[(m+1)%c]:n[m];v.set([S.x,e,-S.y,T.x,e,-T.y,u,e+p,-h],m*9)}const d=new Ut;d.setAttribute("position",new dt(v,3));const x=OS(d,1e-4);return x.computeVertexNormals(),x}let Ie=null;function cP(n){Ie=n}const uP=new Promise(n=>{new qL().load("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json",e=>n(e),void 0,e=>{console.warn("[CityPipeline] Inscription font failed:",e),n(null)})});function Zi(n,e,t){qt.setState({loadingProgress:Math.round(n/e*100),loadingLayer:t})}function fP(){qt.setState({isLoading:!1})}function xy(n){return n.type==="Polygon"&&n.coordinates[0]?n.coordinates[0][0]:n.type==="MultiPolygon"&&n.coordinates[0][0]?n.coordinates[0][0][0]:n.type==="LineString"&&n.coordinates?n.coordinates[0]:null}const Io=(n,e)=>`${Number(n).toFixed(4)},${Number(e).toFixed(4)}`;function ba(n){n.deleteAttribute("uv");const e=n.attributes.position.count;n.setAttribute("roadUV",new dt(new Float32Array(e*2),2)),n.setAttribute("roadED",new dt(new Float32Array(e),1))}function hP(n,e,t,i,r,s,o){const a=new ti(.4,s,.4);a.translate(t,r+s/2,i);const l=new ti(.4,.4,3);l.translate(0,s/2,0),l.rotateY(o+Math.PI/2),l.translate(t,r+s/2,i),ba(a),ba(l),n.push(a,l)}function dP(n,e,t,i,r,s,o){const a=new ti(.4,s,.4);a.translate(t,r+s/2,i);const l=new ti(3,.4,.4);l.translate(0,s/2,0),l.rotateY(o+Math.PI/2),l.translate(t,r+s/2,i),ba(a),ba(l),n.push(a,l),e&&(e.push(new xi(a,30)),e.push(new xi(l,30)))}function pP(n,e,t,i,r,s){const o=new ti(1.2,.8,.8);o.translate(0,-1.8,0),o.rotateY(s),o.translate(t,i,r);const a=new Es(.05,.05,1.5);a.translate(0,-.75,0),a.rotateY(s),a.translate(t,i,r),ba(o),ba(a),n.push(o,a),e&&(e.push(new xi(o,30)),e.push(new xi(a,30)))}async function Pi(n,e,t,i,r){if(n.length===0)return;pg(n);const s=n.some(l=>l.index!==null),o=n.some(l=>l.index===null);if(s&&o){for(let l=0;l<n.length;l++)if(n[l].index!==null){const c=n[l].toNonIndexed();n[l].dispose(),n[l]=c}}const a=250;for(let l=0;l<n.length;l+=a){const c=n.slice(l,l+a),u=or(c);if(c.forEach(h=>h.dispose()),u){u.computeBoundingBox(),u.computeBoundingSphere();const h=new Zt(u,e);h.castShadow=r,h.receiveShadow=!0,h.matrixAutoUpdate=!1,h.updateMatrix(),h.userData.colorKey=i,t.add(h)}await af()}}async function _y(n,e,t,i){if(n.length===0)return;pg(n);const r=250;for(let s=0;s<n.length;s+=r){const o=n.slice(s,s+r),a=or(o);if(o.forEach(l=>l.dispose()),a){a.computeBoundingBox(),a.computeBoundingSphere();const l=new Uf;l.setPositions(a.attributes.position.array),a.dispose();const c=new vl(l,e);c.matrixAutoUpdate=!1,c.updateMatrix(),c.userData.colorKey=i,t.add(c)}await af()}}async function mP(){NL(),Yn.clear(),Zi(0,9,"Topography");const n="?v="+Date.now();async function e(F){try{const Y=await fetch(F+n);return Y.ok?await Y.json():F.endsWith(".json")?{size:0,data:[]}:{features:[]}}catch(Y){return console.warn(`[CityPipeline] Failed: ${F}`,Y),F.endsWith(".json")?{size:0,data:[]}:{features:[]}}}const t=Ot(Ie.meta.lon,Ie.meta.lat),i="./"+(Ie.meta.data_path||"")+(Ie.meta.file_prefix||"");let r=[];{const F=await e(i+"combined_topo_grid.json");PL(F,Ie.meta.radius)}Zi(1,9,"Structural Platforms");let s=await e(i+"combined_skeleton.geojson");const o=[],a=[],l=[],c=[],u=[],h=[],f=[],p=[],g=[],_=[],v=[],d=.5;if(s?.features)for(const F of s.features){const Y=F.geometry?.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=F.properties||{};if(Oe.bridge&&Oe.bridge!=="no"||Oe.man_made==="bridge")continue;const Ve=Oe.building||Oe["building:part"],qe=Oe.highway==="corridor";if(!(!Ve&&!qe&&parseFloat(Oe.layer)>=1&&!Oe.highway))continue;const we=parseFloat(Oe.layer)||1,lt=(Oe.highway||"").toLowerCase(),wt=lt==="motorway"||lt==="trunk"?.6:lt==="primary"||lt==="secondary"?.4:.2,ge=we>0?we*5+wt:5.5+wt;for(const Pe of Vl(F.geometry)){const Ke=Jp(Pe);if(!Ke)continue;const ct=Pe[0];let Ce=-1/0;const ft=Math.max(1,Math.floor(ct.length/16));for(let ae=0;ae<ct.length;ae+=ft){const ue=ct[ae];if(!ue||ue.length<2)continue;const _e=Ot(ue[0],ue[1]);if(!_e.valid)continue;const oe=Xt(_e.x,-_e.y);oe>Ce&&(Ce=oe)}Ce===-1/0&&(Ce=0);const et=Ce+ge,Qe=new wa(Ke,{depth:d,bevelEnabled:!1,curveSegments:1});Qe.rotateX(-Math.PI/2);const tt=Qe.attributes.position;for(let ae=0;ae<tt.count;ae++)tt.setY(ae,et-tt.getY(ae));tt.needsUpdate=!0,Qe.deleteAttribute("uv");const yt=tt.count;if(Qe.setAttribute("roadUV",new dt(new Float32Array(yt*2),2)),Qe.setAttribute("roadED",new dt(new Float32Array(yt),1)),Qe.computeVertexNormals(),lt==="pedestrian"){let ue=0,_e=0;for(let Re=0;Re<tt.count;Re++)ue+=tt.getX(Re),_e+=tt.getZ(Re);const oe=ue/tt.count,Ae=_e/tt.count;for(let Re=0;Re<tt.count;Re++)tt.setX(Re,oe+(tt.getX(Re)-oe)*.7),tt.setZ(Re,Ae+(tt.getZ(Re)-Ae)*.7);tt.needsUpdate=!0}l.push(Qe);let R=1/0,G=-1/0,X=1/0,K=-1/0;const W=[];for(const ae of ct){if(!ae||ae.length<2)continue;const ue=Ot(ae[0],ae[1]);ue.valid&&(W.push({x:ue.x,z:-ue.y}),ue.x<R&&(R=ue.x),ue.x>G&&(G=ue.x),-ue.y<X&&(X=-ue.y),-ue.y>K&&(K=-ue.y))}if(W.length>=3&&lt==="pedestrian"){let ue=0,_e=0;for(const Re of W)ue+=Re.x,_e+=Re.z;const oe=ue/W.length,Ae=_e/W.length;for(let Re=0;Re<W.length;Re++)W[Re].x=oe+(W[Re].x-oe)*.7,W[Re].z=Ae+(W[Re].z-Ae)*.7;R=1/0,G=-1/0,X=1/0,K=-1/0;for(const Re of W)Re.x<R&&(R=Re.x),Re.x>G&&(G=Re.x),Re.z<X&&(X=Re.z),Re.z>K&&(K=Re.z)}if(W.length>=3){const ae={type:"bridgePoly",ring:W,yTop:et},ue=5;for(const _e of rf(R-ue,G+ue,X-ue,K+ue))Yn.has(_e)||Yn.set(_e,[]),Yn.get(_e).push(ae);r.push(W)}}}Zi(2,9,"Buildings");const x=[];let m=await e(i+"combined_buildings.geojson"),S=0;if(m?.features)for(const F of m.features){if(!F.geometry)continue;const Y=F.geometry.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=F.properties||{},We=parseFloat(Oe.height)||parseFloat(Oe["building:levels"])*4.5||12,Ve=xy(F.geometry);if(!Ve)continue;const qe=Ot(Ve[0],Ve[1]);if(!qe.valid)continue;Math.hypot(qe.x-t.x,qe.y-t.y)<250&&We>S&&(S=We,Ie.heroState.h=We,Ie.heroState.feature=F,Ie.heroState.found=!0)}const T=new Ws({transparent:!0,side:kt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});T.onBeforeCompile=Xn;const A=new Ws({transparent:!0,side:kt,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5});A.onBeforeCompile=Xn;const y=new si({transparent:!0,side:kt,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:10,polygonOffsetUnits:10});jn(y);const E=y.onBeforeCompile;y.onBeforeCompile=(F,Y)=>{Xn(F);const Oe=Ie._topoWorldSize??(Ie.meta?.radius??1e3)*2;F.uniforms.topoHalfSize={value:Oe/2},F.uniforms.uPortalCount=Ie.uniforms.uPortalCount,F.uniforms.uPortalHoles=Ie.uniforms.uPortalHoles,F.vertexShader=`varying vec3 vTopoWorldNormal;
varying vec3 vTopoWorldPos;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
             vTopoWorldPos    = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vTopoWorldNormal = normalize(mat3(modelMatrix) * normal);`),F.fragmentShader=`
            #define VITRO_MAX_PORTAL_HOLES 128
            varying vec3 vTopoWorldNormal;
            varying vec3 vTopoWorldPos;
            uniform float topoHalfSize;
            uniform int  uPortalCount;
            uniform vec4 uPortalHoles[VITRO_MAX_PORTAL_HOLES];
        
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
                vec2 _groundUV = vec2(
                    (vTopoWorldPos.x + topoHalfSize) / (topoHalfSize * 2.0),
                    (vTopoWorldPos.z + topoHalfSize) / (topoHalfSize * 2.0)
                );
                vec4 _texSample = texture2D(map, _groundUV);
                diffuseColor.rgb = _texSample.rgb;
                diffuseColor.a  *= _texSample.a;
            #endif
            vec2 posXZ = vTopoWorldPos.xz;
            for (int _ph = 0; _ph < VITRO_MAX_PORTAL_HOLES; _ph++) {
                if (_ph >= uPortalCount) break;
                vec4 _phD = uPortalHoles[_ph];
                vec2 _phV = posXZ - _phD.xy;
                if (abs(_phV.x) > _phD.z || abs(_phV.y) > _phD.z) continue;
                if (dot(_phV, _phV) < _phD.z * _phD.z) discard;
            }`),E(F,Y)};const M=new ve;Ie.renderer.getSize(M);const w=new si({roughness:1,metalness:0,transparent:!0,side:Xi,polygonOffset:!0,polygonOffsetFactor:-15,polygonOffsetUnits:-15,depthTest:!0,depthWrite:!0});jn(w);const L=w.onBeforeCompile;w.onBeforeCompile=(F,Y)=>{Xn(F),sy(F),L(F,Y)};const k=new si({roughness:1,metalness:0,transparent:!0,side:Xi,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10,depthTest:!0,depthWrite:!0});jn(k);const I=k.onBeforeCompile;k.onBeforeCompile=(F,Y)=>{Xn(F),I(F,Y)};const H=new si({roughness:1,metalness:0,transparent:!0,side:kt,depthTest:!0,depthWrite:!0});jn(H);const z=H.onBeforeCompile;H.onBeforeCompile=(F,Y)=>{Xn(F),sy(F),z(F,Y)};const N=new si({roughness:1,metalness:0,transparent:!0,side:kt,depthTest:!0,depthWrite:!0});jn(N);const V=N.onBeforeCompile;N.onBeforeCompile=(F,Y)=>{Xn(F),V(F,Y)};const U=new si({color:2763308,roughness:.95,metalness:0,side:kt}),$=U.onBeforeCompile;U.onBeforeCompile=(F,Y)=>{Xn(F),$&&$(F,Y)};const q=new si({color:4868686,roughness:.88,metalness:0,side:kt});jn(q);const Q=q.onBeforeCompile;q.onBeforeCompile=(F,Y)=>{Xn(F),Q&&Q(F,Y)};const ie=new Ws({color:16774360,toneMapped:!1,fog:!0});Ie.matTunnelStrip=ie,Ie.matTunnelInterior=U,Ie.matTunnelPortal=q;const ye=new si({roughness:1,metalness:0,transparent:!0,side:Xi,polygonOffset:!0,polygonOffsetFactor:-20,polygonOffsetUnits:-20,depthTest:!0,depthWrite:!0});jn(ye);const j=ye.onBeforeCompile;ye.onBeforeCompile=(F,Y)=>{Xn(F),j(F,Y)};const te=new si({color:Ie.currentTheme.rail,roughness:.8,metalness:.4,transparent:!0,side:kt});jn(te);const pe=te.onBeforeCompile;te.onBeforeCompile=(F,Y)=>{Xn(F),pe(F,Y)};const re=new si({roughness:1,metalness:0,transparent:!0,side:kt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthTest:!0,depthWrite:!0});jn(re);const me=re.onBeforeCompile;re.onBeforeCompile=(F,Y)=>{Xn(F),me(F,Y)};const xe=new si({roughness:1,metalness:0,transparent:!0,side:kt});jn(xe);const De=xe.onBeforeCompile;xe.onBeforeCompile=(F,Y)=>{Xn(F),De(F,Y)};const Be=new si({transparent:!0,side:kt,roughness:.9,metalness:0});jn(Be);const P=Be.onBeforeCompile;Be.onBeforeCompile=(F,Y)=>{oy(F),P(F,Y)};const se=new si({transparent:!1,side:kt,vertexColors:!0,roughness:.88,metalness:.4,polygonOffset:!0,polygonOffsetFactor:20,polygonOffsetUnits:20});jn(se);const le=se.onBeforeCompile;se.onBeforeCompile=(F,Y)=>{oy(F),le(F,Y)};const de=new Zp({color:0,linewidth:1.5,transparent:!0,alphaToCoverage:!0});de.resolution.copy(M),de.userData.isSketchy={value:0},de.customProgramCacheKey=()=>"contextLine_sketchy_v1",de.onBeforeCompile=(F,Y)=>{ay(F),F.uniforms.isSketchy=de.userData.isSketchy,F.vertexShader=`uniform float isSketchy;
float _hV(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
            if (isSketchy > 0.5) {
                vec3 _dir = normalize(instanceEnd - instanceStart);
                float _n  = _hV(transformed.xz);
                transformed += _dir * (0.5 + _n);
                transformed.x += (_hV(transformed.xz * 10.0) - 0.5) * 0.2;
                transformed.z += (_hV(transformed.zx * 10.0) - 0.5) * 0.2;
                vec4 _mv = modelViewMatrix * vec4(transformed, 1.0);
                gl_Position = projectionMatrix * _mv;
            }`),F.fragmentShader=`uniform float isSketchy;
float _hF(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`#include <premultiplied_alpha_fragment>
            if (isSketchy > 0.5) {
                float _noise = _hF(gl_FragCoord.xy * 0.1);
                if (_noise < 0.3) discard;
                gl_FragColor.a *= (0.5 + _noise * 0.5);
            }`)},Ie.materials.matContextLine=de;const B=new Zp({color:0,linewidth:1,transparent:!0,opacity:.4,alphaToCoverage:!0});B.resolution.copy(M),B.customProgramCacheKey=()=>"groundLine_v1",B.onBeforeCompile=ay;const ze=[],be=[],Fe=[],O=[],C=[],Z={bldgFill:se,ctxLine:de},ce=500;let fe=0;const he=[];if(m?.features)for(const F of m.features){const Y=F.properties||{},Oe=we=>we&&we!=="no";if(!Oe(Y["building:part"])&&!Oe(Y.building_part)&&!Oe(Y.part)||!F.geometry?.coordinates)continue;let We=null;if(F.geometry.type==="Polygon"?We=F.geometry.coordinates[0]:F.geometry.type==="MultiPolygon"&&(We=F.geometry.coordinates[0][0]),!We)continue;let Ve=0,qe=0,Ze=0;for(const we of We)we&&we.length>=2&&(Ve+=we[0],qe+=we[1],Ze++);Ze>0&&he.push({x:Ve/Ze,y:qe/Ze})}const Xe=(F,Y)=>{if(!Y||!Array.isArray(Y))return!1;let Oe=!1;for(let We=0,Ve=Y.length-1;We<Y.length;Ve=We++){if(!Y[We]||!Y[Ve])continue;const qe=Y[We][0],Ze=Y[We][1],we=Y[Ve][0],lt=Y[Ve][1];Ze>F.y!=lt>F.y&&F.x<(we-qe)*(F.y-Ze)/(lt-Ze)+qe&&(Oe=!Oe)}return Oe};if(m?.features){for(const F of m.features){if(!F.geometry)continue;const Y=F.geometry.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=xy(F.geometry);if(!Oe)continue;const We=Ot(Oe[0],Oe[1]);if(!We.valid)continue;let Ve=Math.hypot(We.x-t.x,We.y-t.y);isNaN(Ve)&&(Ve=1/0);const qe=F===Ie.heroState.feature,Ze=Math.random(),we=F.properties||{},lt=gt=>gt&&gt!=="no",wt=lt(we["building:part"])||lt(we.building_part)||lt(we.part);if(!wt&&F.geometry?.coordinates){let gt=null;if(Y==="Polygon"?gt=F.geometry.coordinates[0]:Y==="MultiPolygon"&&(gt=F.geometry.coordinates[0][0]),gt){let _n=1/0,Sn=-1/0,zt=1/0,Rt=-1/0;for(const Yt of gt)!Yt||Yt.length<2||(Yt[0]<_n&&(_n=Yt[0]),Yt[0]>Sn&&(Sn=Yt[0]),Yt[1]<zt&&(zt=Yt[1]),Yt[1]>Rt&&(Rt=Yt[1]));let Ft=!1;for(const Yt of he)if(Yt.x>=_n&&Yt.x<=Sn&&Yt.y>=zt&&Yt.y<=Rt&&Xe(Yt,gt)){Ft=!0;break}if(Ft)continue}}const ge=wt,Pe=(we.man_made||"").toLowerCase(),Ke=(we.historic||"").toLowerCase(),ct=(we.tourism||"").toLowerCase(),Ce=(we.amenity||"").toLowerCase(),ft=(we.building||"").toLowerCase(),et=(we.power||"").toLowerCase();let Qe=12;ge?Qe=15:Pe==="campanile"?Qe=50:Pe==="tower"||Pe==="lighthouse"?Qe=35:Pe==="chimney"||Pe==="cooling_tower"?Qe=40:Pe==="water_tower"?Qe=20:Pe==="obelisk"?Qe=30:Pe==="mast"||Pe==="antenna"?Qe=25:Pe==="flagpole"?Qe=15:Ke==="monument"||Ke==="memorial"?Qe=10:Ke==="fort"||Ke==="castle"?Qe=12:Ce==="fountain"?Qe=3:Ce==="place_of_worship"?Qe=18:ft==="church"||ft==="cathedral"||ft==="mosque"||ft==="temple"?Qe=20:et==="tower"&&(Qe=30);const tt=parseFloat(we.height),yt=parseFloat(we["building:levels"]),R=we.highway==="corridor"&&(Y==="Polygon"||Y==="MultiPolygon"),G=!!(we.building||we["building:part"]||R)&&!Pe&&!Ke&&!ct&&Ce!=="fountain",X=we.location==="underground"||we.tunnel==="yes"||we.underground==="yes";if(we.tunnel==="building_passage"||we.amenity==="parking"&&we.parking!=="multi-storey"||!G&&!Pe&&!Ke&&!ct&&!Ce&&!et)continue;let K=parseFloat(we.min_height);isNaN(K)&&we.min_floor&&(K=parseFloat(we.min_floor)*3.5),isNaN(K)&&we["building:min_level"]&&(K=(parseFloat(we["building:min_level"])-1)*4.5);const W=we.bridge==="yes"||R,ae=we.building==="roof"||we.man_made==="canopy",ue=we.is_csg_cutout==="yes",_e=we.min_height!=null&&we.min_height!==""||we.min_floor!=null&&we.min_floor!==""||we["building:min_level"]!=null&&we["building:min_level"]!=="";if(!ge&&!W&&!ae&&!ue&&!_e&&(K=0),isNaN(K)||K<=0)if(W){const gt=parseFloat(we.layer)||0;K=gt>0?gt*4.5:5}else K=0;let oe=Math.max(0,K||0),Ae;const Re=ge||oe>0||parseFloat(we.layer)>0||parseFloat(we.level)>1;let Ge=1;const it=parseFloat(we["roof:height"]);if((we["building:part"]||"").toLowerCase()==="roof"||ae){const gt=parseFloat(we.height)||parseFloat(we["roof:height"])||5;Ge=Math.max(.5,gt),Ae=oe+Ge}else isNaN(tt)?isNaN(yt)?isNaN(it)?oe>0?(Ge=4.5,Ae=oe+Ge):(Ae=Qe,Ge=Math.max(1,Ae-oe)):(Ge=Math.max(.5,it),Ae=oe+Ge):(Ge=Math.max(1,yt*4.5),Ae=oe+Ge):tt<oe&&tt>0?(Ge=Math.max(.5,tt),Ae=oe+Ge):(Ae=Math.max(oe+.5,tt),Ge=Math.max(.5,Ae-oe));!ge&&Ge>3&&oe===0&&!W&&(Ge-=.1);let Mt=Ge;we.is_csg_cutout==="yes"?(Mt=3.5,Ae=oe+Mt):W&&oe>0&&(Mt>4.5&&(Mt=3.5),Ae=oe+Mt);const _t=(we["roof:shape"]||we.roof_shape||"").toLowerCase();let Je=30;["dome","sphere","round","onion"].includes(_t)?Je=1:_t==="cone"&&(Je=15);const an=Vl(F.geometry);let Tt=Math.min(Math.max(0,parseFloat(we["roof:height"])||0),Mt*.5),Fn=my(we["building:color"]||we.color,16777215);if(!ge){const gt=new nt(Fn);gt.multiplyScalar(.95),Fn=gt.getHex()}const lr=Fn,xn=my(we["roof:color"],lr),oo=parseInt(we["building:levels"])||0;for(const gt of an){const _n=Jp([gt[0]]);if(!_n||_n.curves.length===0)continue;let Sn=0,zt=0;const Rt=[];for(const pt of gt[0]){const bt=Ot(pt[0],pt[1]);bt.valid&&(Sn+=bt.x,zt+=bt.y,Rt.push(bt))}if(Rt.length===0)continue;Sn/=Rt.length,zt/=Rt.length;let Ft=Xt(Sn,-zt);if(!ge){const pt=Math.max(1,Math.floor(Rt.length/8));for(let bt=0;bt<Rt.length;bt+=pt)Ft=Math.min(Ft,Xt(Rt[bt].x,-Rt[bt].y))}let Yt=1/0,kf=-1/0,Bf=1/0,Hf=-1/0;for(const pt of Rt){const bt=-pt.y;pt.x<Yt&&(Yt=pt.x),pt.x>kf&&(kf=pt.x),bt<Bf&&(Bf=bt),bt>Hf&&(Hf=bt)}const BS=kf-Yt>80&&Hf-Bf>80;!(Re&&oe>0)&&!BS&&(Ft=UL(Sn,-zt,Rt,Ft)),ge&&oe===0&&(Ft=Math.round(Ft*2)/2);let Vf=1/0,Gf=-1/0,Wf=1/0,Xf=-1/0;const jf=[];for(const pt of Rt){const bt=-pt.y;jf.push({x:pt.x,z:bt}),pt.x<Vf&&(Vf=pt.x),pt.x>Gf&&(Gf=pt.x),bt<Wf&&(Wf=bt),bt>Xf&&(Xf=bt)}const HS=rf(Vf,Gf,Wf,Xf);if(X){const bt=Math.abs(parseFloat(we.layer)||1)*6+8,lo=Ft-bt,Kl=lo+Ae;IL(jf,lo,Kl);continue}const VS=Ft+Ae,GS={type:"building",ring:jf,yBase:Ft+oe,yTop:VS};for(const pt of HS)Yn.has(pt)||Yn.set(pt,[]),Yn.get(pt).push(GS);(Ae>100||Pe==="mast"||Pe==="tower"||Pe==="wind_turbine"||Pe==="lighthouse"||we.aeroway==="control_tower")&&x.push({x:Sn,y:Ft+Ae,z:-zt,id:Ze});let gg=0;for(let pt=0,bt=Rt.length-1;pt<Rt.length;bt=pt++)gg+=(Rt[bt].x-Rt[pt].x)*(Rt[bt].y+Rt[pt].y);if(Math.abs(gg)*.5>5e5)continue;const vg=55,WS=["shell","freeform","curved"].includes(_t),XS=["dome","sphere","round","onion"].includes(_t),jS=["barrel","vault","arch"].includes(_t),yg=WS||XS||jS;let Yf=Mt;yg&&(Yf=.1,Tt=Math.max(.1,Ae-oe));let ao;Yf<=0?ao=new so(_n):ao=new wa(_n,{depth:Yf,bevelEnabled:!1}),ao.rotateX(-Math.PI/2),ao.translate(0,Ft+oe,0);let cr=OS(ao,1e-4);if(ao.dispose(),!cr.attributes.position||isNaN(cr.attributes.position.array[0])){cr.dispose();continue}cr.computeBoundingSphere();const Fr=lP(Rt,yg?Ft+oe:Ft+Ae,_t,Tt);if(Do(cr,lr),Fr&&Do(Fr,xn),Ve>Ie.FG_THRESHOLD&&!qe){if(ze.push(cr),be.push(new xi(cr,vg)),Fr)Fe.push(Fr),O.push(new xi(Fr,Je));else if(G&&!ge&&Ae>20&&Rt.length>=4){const pt=new ti(2.5,1.5,2.5);pt.translate(Sn,Ft+Ae+.75,-zt),Do(pt,xn),Fe.push(pt),O.push(new xi(pt,30))}if(G&&Ae>15){const pt=yy(Rt,Ft+Ae,oo,Ft+oe);pt.length>1&&C.push(new Ut().setFromPoints(pt))}}else{const pt={isGhost:qe,px:Sn,pz:-zt,featureId:Ze,baseY:Ft},bt=new Zt(cr,se);bt.userData={...pt},bt.castShadow=!0,bt.receiveShadow=!0,bt.matrixAutoUpdate=!1,bt.updateMatrix(),Ie.groups.bFill.add(bt);const lo=new xi(cr,vg);let Kl=lo;if(G&&Ae>15){const ni=yy(Rt,Ft+Ae,oo,Ft+oe);if(ni.length>1){const Mn=new Ut().setFromPoints(ni),Yi=or([lo,Mn]);Mn.dispose(),Yi&&(lo.dispose(),Kl=Yi)}}const co=new vl(ad(Kl),de);if(co.userData={...pt},co.castShadow=!1,co.receiveShadow=!1,co.matrixAutoUpdate=!1,co.updateMatrix(),Ie.groups.bWire.add(co),Fr){const ni=new Zt(Fr,se);ni.userData={...pt},ni.castShadow=!0,ni.receiveShadow=!0,ni.matrixAutoUpdate=!1,ni.updateMatrix(),Ie.groups.roofs.add(ni);const Mn=new vl(ad(new xi(Fr,Je)),de);Mn.userData={...pt},Mn.castShadow=!1,Mn.receiveShadow=!1,Mn.matrixAutoUpdate=!1,Mn.updateMatrix(),Ie.groups.roofs.add(Mn)}else if(G&&!ge&&Ae>20&&Rt.length>=4){const ni=new ti(2.5,1.5,2.5);Do(ni,xn);const Mn=new Zt(ni,se);Mn.position.set(Sn,Ft+Ae+.75,-zt),Mn.userData={...pt},Mn.castShadow=!1,Mn.receiveShadow=!0,Mn.matrixAutoUpdate=!1,Mn.updateMatrix(),Ie.groups.roofs.add(Mn);const Yi=new vl(ad(new xi(ni,30)),de);Yi.position.set(Sn,Ft+Ae+.75,-zt),Yi.userData={...pt},Yi.castShadow=!1,Yi.receiveShadow=!1,Yi.matrixAutoUpdate=!1,Yi.updateMatrix(),Ie.groups.roofs.add(Yi)}}}++fe%ce===0&&await dy(ze,be,Fe,O,C,Z)}await dy(ze,be,Fe,O,C,Z)}if(m=null,x.length>0){const F=document.createElement("canvas");F.width=64,F.height=64;const Y=F.getContext("2d"),Oe=Y.createRadialGradient(32,32,0,32,32,32);Oe.addColorStop(0,"rgba(255, 255, 255, 1)"),Oe.addColorStop(.2,"rgba(255, 50, 50, 1)"),Oe.addColorStop(1,"rgba(255, 0, 0, 0)"),Y.fillStyle=Oe,Y.fillRect(0,0,64,64);const We=new Vp(F);Ie.matAviationLight=new Bp({size:5,sizeAttenuation:!1,map:We,transparent:!0,opacity:0,blending:ga,depthWrite:!1,depthTest:!0});const Ve=new Float32Array(x.length*3);x.forEach((we,lt)=>{Ve[lt*3]=we.x,Ve[lt*3+1]=we.y+2,Ve[lt*3+2]=we.z});const qe=new Ut;qe.setAttribute("position",new vn(Ve,3));const Ze=new Pv(qe,Ie.matAviationLight);Ze.frustumCulled=!1,Ie.groups.lights.add(Ze)}Zi(3,9,"Roads & Bridges");let Le=await e(i+"combined_skeleton.geojson");const Ue=new Map;if(Le?.features)for(const F of Le.features){if(!F.geometry||!F.geometry.type.includes("LineString"))continue;const Y=F.properties||{};if(!Y.highway&&!Y.railway)continue;const Oe=Y.bridge==="yes"||Y.bridge==="aqueduct"||Y.bridge==="viaduct",We=Y.tunnel==="yes",Ve=F.geometry.type==="LineString"?[F.geometry.coordinates]:F.geometry.coordinates;for(const qe of Ve)for(const Ze of qe){if(!Ze||Ze.length<2)continue;const we=Io(Ze[0],Ze[1]);Ue.has(we)||Ue.set(we,{bridgeCount:0,groundCount:0});const lt=Ue.get(we);Oe?lt.bridgeCount++:We||lt.groundCount++}}if(Le?.features){for(const F of Le.features){if(!F.geometry||!F.geometry.type.includes("LineString"))continue;const Y=F.properties||{};if(Y.tunnel==="yes"||Y.tunnel===!0||Y.tunnel==="true"||Y.tunnel==="building_passage")continue;const Oe=Y.tunnel==="yes",We=Y.location==="underground"||Y.underground==="yes",Ve=parseFloat(Y.layer)<0&&Y.tunnel!=="building_passage",qe=Oe||We||Ve,Ze=Y.tunnel==="building_passage",we=Y.covered==="yes",lt=parseFloat(Y.layer);let wt=isNaN(lt)?0:lt;Y.highway==="corridor"&&wt===0&&(wt=2);const ge=(Y.highway||"").toLowerCase(),Pe=ge==="footway"||ge==="path"||ge==="pedestrian"||ge==="cycleway";if(ge==="corridor")continue;const Ke=Ze||we||qe&&wt>=0||wt<0&&Pe;let Ce=Y.bridge==="yes"||Y.bridge==="aqueduct"||Y.bridge==="viaduct",ft=qe&&!Ke;Ce&&(ft=!1),Ke&&wt<=0&&(Ce=!1,ft=!1);const et=iP(Y),Qe=et.width/2+(Ce?.5:0),tt=et.hasLines,yt=ge==="motorway"||ge==="trunk"?.6:ge==="primary"||ge==="secondary"?.4:.2,R=F.geometry.type==="LineString"?[F.geometry.coordinates]:F.geometry.coordinates;for(const G of R){const X=[];for(const W of G){if(!W||W.length<2)continue;const ae=Ot(W[0],W[1]);ae.valid&&X.push(ae)}if(X.length<2)continue;if(Y.power==="line"||Y.power==="minor_line"||Y.power==="cable"){const W=Y.power==="minor_line",ae=W?8:15,ue=X.map(oe=>new D(oe.x,Xt(oe.x,-oe.y)+ae,-oe.y)),_e=[];for(let oe=0;oe<ue.length-1;oe++){const Ae=ue[oe],Re=ue[oe+1],Ge=Math.max(1,Math.ceil(Ae.distanceTo(Re)/10));for(let it=0;it<=Ge;it++){if(it===Ge&&oe<ue.length-2)continue;const Ct=new D().lerpVectors(Ae,Re,it/Ge);Ct.isBridgeDeck=!0,_e.push(Ct)}}if(_e.length>=2){const oe=qa(_e,.05,!1);oe&&(oe.computeVertexNormals(),p.push(oe));let Ae=0;for(let Re=0;Re<_e.length-1;Re++){const Ge=_e[Re],it=_e[Re+1];if(Ae+=Ge.distanceTo(it),Ae>=(W?40:80)){Ae=0;const Ct=Xt(it.x,it.z),Mt=it.y-Ct;if(Mt>1){const yn=new D().subVectors(it,Ge).normalize();hP(_,null,it.x,it.z,Ct,Mt,Math.atan2(yn.x,yn.z))}}}}continue}if(Ce){const W=X[0];if(r.some(Ct=>gl(W.x,-W.y,Ct)))continue;const ae=Io(G[0][0],G[0][1]),ue=Io(G[G.length-1][0],G[G.length-1][1]),_e=Ue.get(ae)||{bridgeCount:1,groundCount:0},oe=Ue.get(ue)||{bridgeCount:1,groundCount:0},Ae=_e.groundCount>0||_e.bridgeCount<=1,Re=oe.groundCount>0||oe.bridgeCount<=1,it=vy(X,{cfg:et,halfW:Qe,layer:wt,taperStart:Ae,taperEnd:Re,archBridge:ge==="footway"||ge==="pedestrian"||ge==="path",markings:tt,priorityOffset:yt});if(it){const Mt=ge==="footway"||ge==="path"||ge==="pedestrian"||ge==="cycleway"?c:l;it.deckGeo&&Mt.push(it.deckGeo),it.pierGeo&&Mt.push(it.pierGeo)}}else{if(ft)continue;{const W=ge==="footway"||ge==="path"||ge==="pedestrian"||ge==="cycleway"||ge==="steps",ae=W?.15:.3,ue=fd(X,4,(oe,Ae)=>Xt(oe,Ae)+ae);gy(ue,3);const _e=qa(ue,Qe,tt);_e&&(W?a:o).push(_e)}}}}o.length>0&&await Pi(o,w,Ie.groups.roads,"road",!1),a.length>0&&await Pi(a,k,Ie.groups.roads,"sidewalk",!1),l.length>0&&await Pi(l,H,Ie.groups.roads,"road",!0),c.length>0&&await Pi(c,N,Ie.groups.roads,"sidewalk",!0),u.length>0&&await Pi(u,U,Ie.groups.tunnels,"tunnel",!1),h.length>0&&await Pi(h,q,Ie.groups.tunnels,"tunnelPortal",!0),f.length>0&&await Pi(f,ie,Ie.groups.tunnelLights,"tunnelStrip",!1)}Zi(4,9,"Railways");let rt=await e(i+"combined_railways.geojson");const Me=new Map;if(rt?.features)for(const F of rt.features){if(!F.geometry||!F.geometry.type.includes("LineString"))continue;const Y=F.properties||{};if(Y.tunnel==="yes"||Y.tunnel===!0||Y.tunnel==="building_passage")continue;const Oe=Y.bridge==="yes"||Y.bridge==="viaduct"||Y.bridge==="aqueduct",We=F.geometry.type==="LineString"?[F.geometry.coordinates]:F.geometry.coordinates;for(const Ve of We)for(const qe of Ve){if(!qe||qe.length<2)continue;const Ze=Io(qe[0],qe[1]);Me.has(Ze)||Me.set(Ze,{bridgeCount:0,groundCount:0});const we=Me.get(Ze);Oe?we.bridgeCount++:we.groundCount++}}if(rt?.features){const F=[],Y=[];for(const Oe of rt.features){if(!Oe.geometry||!Oe.geometry.type.includes("LineString"))continue;const We=Oe.properties||{};if(We.tunnel==="yes"||We.tunnel===!0||We.tunnel==="true"||We.tunnel==="building_passage")continue;const Ve=We.tunnel==="yes",qe=We.location==="underground"||We.underground==="yes",Ze=parseFloat(We.layer)<0&&We.tunnel!=="building_passage",we=Ve||qe||Ze,lt=We.bridge==="yes",wt=parseFloat(We.layer)||(lt?1:we?-1:0),ge=We.railway==="main"?.3:.1,Pe=Oe.geometry.type==="LineString"?[Oe.geometry.coordinates]:Oe.geometry.coordinates;for(const Ke of Pe){const ct=[];for(const Ce of Ke){if(!Ce||Ce.length<2)continue;const ft=Ot(Ce[0],Ce[1]);ft.valid&&ct.push(ft)}if(!(ct.length<2))if(lt){const Ce=Io(Ke[0][0],Ke[0][1]),ft=Io(Ke[Ke.length-1][0],Ke[Ke.length-1][1]),et=Me.get(Ce)||{bridgeCount:0,groundCount:0},Qe=Me.get(ft)||{bridgeCount:0,groundCount:0},tt=et.groundCount>0||et.bridgeCount<=1,yt=Qe.groundCount>0||Qe.bridgeCount<=1,R=vy(ct,{cfg:yi.railway,halfW:1.5,layer:wt,taperStart:tt,taperEnd:yt,archBridge:!1,markings:!1,priorityOffset:ge});R&&(R.deckGeo&&Y.push(R.deckGeo),R.pierGeo&&Y.push(R.pierGeo))}else{if(we)continue;{const Ce=fd(ct,4,(et,Qe)=>Xt(et,Qe)+.25);gy(Ce,2);const ft=qa(Ce,1.5);ft&&F.push(ft)}}}}F.length>0&&await Pi(F,ye,Ie.groups.rails,"rail",!1),Y.length>0&&await Pi(Y,te,Ie.groups.rails,"rail",!0)}Zi(5,9,"Ski Infrastructure");let He=await e(i+"combined_ski.geojson");if(He?.features){const F=[],Y=[];for(const Oe of He.features){if(!Oe.geometry)continue;const Ve=!!(Oe.properties||{}).aerialway,qe=Oe.geometry.type;if(!Ve||qe!=="LineString"&&qe!=="MultiLineString")continue;const Ze=qe==="LineString"?[Oe.geometry.coordinates]:Oe.geometry.coordinates;for(const we of Ze){const lt=[];for(const Ce of we){if(!Ce||Ce.length<2)continue;const ft=Ot(Ce[0],Ce[1]);ft.valid&&lt.push(ft)}if(lt.length<2)continue;const wt=lt.map(Ce=>new D(Ce.x,Xt(Ce.x,-Ce.y)+15,-Ce.y)),ge=[];for(let Ce=0;Ce<wt.length-1;Ce++){const ft=wt[Ce],et=wt[Ce+1],Qe=ft.distanceTo(et),tt=Math.max(1,Math.ceil(Qe/2));for(let yt=0;yt<=tt;yt++){if(yt===tt&&Ce<wt.length-2)continue;const R=new D().lerpVectors(ft,et,yt/tt);R.isBridgeDeck=!0,ge.push(R)}}if(ge.length<2)continue;const Pe=qa(ge,.05);Pe&&(Pe.computeVertexNormals(),p.push(Pe),g.push(new xi(Pe,30)));let Ke=0,ct=0;for(let Ce=0;Ce<ge.length-1;Ce++){const ft=ge[Ce],et=ge[Ce+1],Qe=ft.distanceTo(et);Ke+=Qe,ct+=Qe;const tt=new D().subVectors(et,ft).normalize(),yt=Math.atan2(tt.x,tt.z);if(Ke>=60){Ke=0;const R=Xt(et.x,et.z),G=et.y-R;G>1&&dP(_,v,et.x,et.z,R,G,yt)}if(ct>=15){if(ct=0,Ke<2||Ke>58)continue;pP(_,v,et.x,et.y,et.z,yt)}}}}F.length>0&&(await Pi(F,re,Ie.groups.ski,"skiRun",!1),await _y(Y,B,Ie.groups.ski,"skiRun"))}{const F=[...p,..._],Y=[...g,...v];F.length>0&&await Pi(F,xe,Ie.groups.ski,"skiLift",!0),Y.length>0&&await _y(Y,B,Ie.groups.ski,"skiLift")}Zi(6,9,"Terrain Textures");let[mt,st,je,at,ut]=await Promise.all([e(i+"combined_zoning.geojson"),e(i+"combined_parks.geojson"),e(i+"combined_veg.geojson"),e(i+"combined_water.geojson"),e(i+"combined_hardscape.geojson")]);{const F=Ie.meta.radius||1e3,Y=zS(mt,st,je,at,He,ut,F,Ie.currentTheme);y.map=Y,y.needsUpdate=!0}const It=Ie._topoGrid;if(It){const F=It.size,Y=Ie._topoWorldSize??(Ie.meta.radius??1e3)*2,Oe=new ql(Y,Y,F-1,F-1);Oe.rotateX(-Math.PI/2);const We=Oe.attributes.position.array;for(let qe=0;qe<F;qe++)for(let Ze=0;Ze<F;Ze++)We[(qe*F+Ze)*3+1]=It.data[qe*F+Ze];Oe.attributes.position.needsUpdate=!0,Oe.computeVertexNormals();const Ve=new Zt(Oe,of(y));Ve.receiveShadow=!0,Ve.matrixAutoUpdate=!1,Ve.updateMatrix(),Ie.groups.topo.add(Ve)}Zi(7,9,"Vegetation"),VL(je,Le,rt),Ie.geoCache.zData=mt,Ie.geoCache.pData=st,Ie.geoCache.vData=je,Ie.geoCache.wData=at,Ie.geoCache.skiData=He,Ie.geoCache.hData=ut,mt=null,st=null,je=null,at=null,ut=null,Zi(8,9,"Micro Detail & Labels");let b=await e(i+"combined_micro.geojson");if(b?.features){let We=function(ge,Pe){const Ke=sf(ge,Pe);let ct=-1/0;for(const Ce of Ke)(Ce.type==="bridge"||Ce.type==="bridgePoly")&&Ce.yTop>ct&&(ct=Ce.yTop);return ct>-1/0?ct:Xt(ge,Pe)},Ze=function(ge){const Pe=ge.properties||{};return Pe.natural==="tree"||Pe.natural==="tree_row"||Pe.natural==="shrub"?"forest":Pe.natural==="rock"?"terrain":Pe.barrier==="hedge"?"scrub":Pe.man_made==="sign"||Pe.tourism==="artwork"?"furniture":"road"},we=function(ge){const Pe=ge.properties||{};return Pe.height?parseFloat(Pe.height):Pe.man_made==="sign"||Pe.tourism==="artwork"?14:Pe.barrier?1.2:0};var ee=We,ne=Ze,Se=we;const F=[],Y=[],Oe=[];for(const ge of b.features){const Pe=ge.properties?.natural,Ke=ge.properties?.highway,ct=ge.geometry?.type;Pe==="tree"||Pe==="tree_row"||Pe==="shrub"?F.push(ge):Ke==="street_lamp"?Y.push(ge):Oe.push(ge);const Ce=ge.properties?.man_made,ft=ge.properties?.aeroway;if(ct==="Point"&&(Ce==="mast"||Ce==="tower"||Ce==="wind_turbine"||ft==="navigationaid")){const et=ge.geometry.coordinates,Qe=Ot(et[0],et[1]);if(Qe.valid){const tt=parseFloat(ge.properties?.height)||30,yt=We(Qe.x,-Qe.y);x.push({x:Qe.x,y:yt+tt,z:-Qe.y,id:Math.random()})}}}if(b.features=Oe,Ie.treeMesh&&F.length>0){const ge=[];for(const Pe of F){const Ke=Pe.geometry?.type;if(Ke==="Point")ge.push(Pe.geometry.coordinates);else if(Ke==="LineString"){const ct=Pe.geometry.coordinates;for(let Ce=0;Ce<ct.length-1;Ce++){const ft=Ot(ct[Ce][0],ct[Ce][1]),et=Ot(ct[Ce+1][0],ct[Ce+1][1]);if(!ft.valid||!et.valid)continue;const Qe=Math.hypot(et.x-ft.x,et.y-ft.y),tt=Math.max(1,Math.floor(Qe/6));for(let yt=0;yt<=tt;yt++){const R=yt/tt;ge.push([ct[Ce][0]+(ct[Ce+1][0]-ct[Ce][0])*R,ct[Ce][1]+(ct[Ce+1][1]-ct[Ce][1])*R])}}}}if(ge.length>0){const Pe=new kp(Ie.treeMesh.geometry,Ie.treeMesh.material,ge.length);Pe.instanceMatrix.setUsage(Sa),Pe.castShadow=!0,Pe.receiveShadow=!0,Pe.userData.colorKey="tree",Pe.frustumCulled=!1;const Ke=new nn,ct=Ie.meta?.radius||1e3;let Ce=0;for(const ft of ge){const et=Ot(ft[0],ft[1]);if(!et.valid||Math.hypot(et.x,et.y)>ct)continue;const Qe=We(et.x,-et.y),tt=.5+Math.random()*1;Ke.position.set(et.x,Qe,-et.y),Ke.scale.set(tt,tt,tt),Ke.rotation.y=Math.random()*Math.PI*2,Ke.updateMatrix(),Pe.setMatrixAt(Ce++,Ke.matrix)}Pe.count=Ce,Pe.instanceMatrix.needsUpdate=!0,Ie.groups.micro.add(Pe)}}if(Y.length>0){const ge=new Es(.1,.15,6,4);ge.translate(0,3,0),Do(ge,1118481);const Pe=new ti(.4,.4,.4);Pe.translate(0,6,0),Do(Pe,16777215);const Ke=or([ge,Pe]);ge.dispose(),Pe.dispose();const ct=new Ws({vertexColors:!0});ct.onBeforeCompile=Xn;const Ce=new kp(Ke,ct,Y.length);Ce.instanceMatrix.setUsage(Sa);const ft=document.createElement("canvas");ft.width=64,ft.height=64;const et=ft.getContext("2d"),Qe=et.createRadialGradient(32,32,0,32,32,32);Qe.addColorStop(0,"rgba(255, 255, 255, 1)"),Qe.addColorStop(.3,"rgba(255, 255, 240, 0.6)"),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),et.fillStyle=Qe,et.fillRect(0,0,64,64);const tt=new Vp(ft);Ie.matLampFlare=new Bp({size:4,sizeAttenuation:!1,map:tt,transparent:!0,opacity:0,blending:ga,depthWrite:!0,depthTest:!0});const yt=new Float32Array(Y.length*3),R=new nn,G=Ie.meta?.radius||1e3;let X=0;for(const ae of Y){const ue=ae.geometry.coordinates,_e=Ot(ue[0],ue[1]);if(!_e.valid||Math.hypot(_e.x,_e.y)>G)continue;const oe=We(_e.x,-_e.y);R.position.set(_e.x,oe,-_e.y),R.updateMatrix(),Ce.setMatrixAt(X,R.matrix),yt[X*3]=_e.x,yt[X*3+1]=oe+6,yt[X*3+2]=-_e.y,X++}Ce.count=X,Ce.instanceMatrix.needsUpdate=!0,Ie.groups.lights.add(Ce);const K=new Ut;K.setAttribute("position",new vn(yt.slice(0,X*3),3));const W=new Pv(K,Ie.matLampFlare);W.frustumCulled=!1,Ie.groups.lights.add(W)}const Ve=b.features.filter(ge=>ge.properties?.inscription&&ge.properties.inscription!=="null"&&(ge.geometry?.type==="Point"||ge.geometry?.type==="LineString")),qe=await uP;if(Ve.length>0&&qe)for(const ge of Ve){const Pe=ge.properties.inscription;if(ge.geometry.type==="Point")continue;const Ke=ge.geometry.coordinates,ct=Ot(Ke[0][0],Ke[0][1]),Ce=Ot(Ke[Ke.length-1][0],Ke[Ke.length-1][1]);if(!ct.valid||!Ce.valid)continue;const et=Math.hypot(Ce.x-ct.x,Ce.y-ct.y)/Pe.length;if(et<5)continue;const Qe=[(Ke[0][0]+Ke[Ke.length-1][0])/2,(Ke[0][1]+Ke[Ke.length-1][1])/2],tt=Ot(Qe[0],Qe[1]);if(!tt.valid)continue;const yt=We(tt.x,-tt.y),R=new QL(Pe,{font:qe,size:et,height:1.2,curveSegments:24,bevelEnabled:!1});R.computeBoundingBox();const G=R.boundingBox;R.translate(-(G.max.x-G.min.x)/2,0,0);const X=new Zt(R,T);X.castShadow=!0,X.receiveShadow=!0,X.userData.colorKey="bFill",X.position.set(tt.x,yt,-tt.y),X.rotation.y=Math.PI,X.scale.x=-1,X.matrixAutoUpdate=!1,X.updateMatrix(),Ie.groups.micro.add(X)}const lt={features:b.features.filter(ge=>(ge.geometry?.type==="Polygon"||ge.geometry?.type==="MultiPolygon")&&!ge.properties?.inscription&&!ge.properties?.barrier)};YL(lt,Ie.groups.micro,.1,we,T,Ze,null,We);const wt=[];for(const ge of b.features){if(!ge.geometry||ge.properties?.inscription)continue;const Pe=ge.geometry.type;if(Pe!=="LineString"&&Pe!=="MultiLineString")continue;const Ke=Pe==="LineString"?[ge.geometry.coordinates]:ge.geometry.coordinates;for(const ct of Ke){const Ce=[];for(const yt of ct){if(!yt||yt.length<2)continue;const R=Ot(yt[0],yt[1]);R.valid&&Ce.push(R)}const ft=fd(Ce,.3,(yt,R)=>We(yt,R)+.2);if(ft.length<2)continue;const et=ge.properties||{},Qe=parseFloat(et.height)||(et.man_made==="sign"||et.tourism==="artwork"?14:0),tt=Qe>0?rP(ft,Qe):qa(ft,.3);tt&&wt.push(tt)}}if(wt.length>0){const ge=or(wt);if(wt.forEach(Pe=>Pe.dispose()),ge){const Pe=new Zt(ge,of(T));Pe.userData.colorKey="road",Pe.matrixAutoUpdate=!1,Pe.updateMatrix(),Ie.groups.micro.add(Pe)}}}b=null;let J=await e(i+"combined_labels.geojson");Ie.labels=J?.features??[],J=null,Ie.groups.topo.children.forEach(F=>{F.renderOrder=-1,F.material.depthWrite=!0,F.material.transparent=!1}),Ie.groups.zones.children.forEach(F=>{F.renderOrder=0,F.material.depthWrite=!0,F.material.transparent=!1}),Ie.groups.parks.children.forEach(F=>{F.renderOrder=1,F.material.depthWrite=!1,F.material.transparent=!0}),Ie.groups.veg.children.forEach(F=>{F.renderOrder=2,F.material.depthWrite=!1,F.material.transparent=!0}),Ie.groups.water.children.forEach(F=>{F.renderOrder=3,F.material.depthWrite=!0,F.material.transparent=!1}),Ie.groups.roads.children.forEach(F=>{F.renderOrder=F.userData.colorKey==="sidewalk"?3.5:4}),Ie.groups.rails.children.forEach(F=>{F.renderOrder=4}),Ie.groups.ski.children.forEach(F=>{F.renderOrder=4}),Ie.groups.micro.children.forEach(F=>{F.renderOrder=5,F.material&&(F.material.depthWrite=!0,F.material.transparent=!1)}),Ie.groups.bFill.children.forEach(F=>{F.renderOrder=6});for(const F of[Ie.groups.bWire,Ie.groups.roofs,Ie.groups.detail])F.children.forEach(Y=>{Y.renderOrder=7});Ie.groups.lights.children.forEach(F=>{F.renderOrder=10}),Zi(9,9,"Complete"),Ie.updateStyles?.(),fP()}let Nt=null;function gP(n){Nt=n}let lf=null,FS=null;function vP(){lf=[],FS=Nt.geoCache.pData;const n=Nt.geoCache.pData;if(n?.features)for(const e of n.features){const t=e.geometry;if(!t||t.type!=="Polygon"&&t.type!=="MultiPolygon")continue;const i=t.type==="Polygon"?[t.coordinates]:t.coordinates;for(const r of i){const s=r[0];if(!s||s.length<3)continue;const o=[];let a=1/0,l=1/0,c=-1/0,u=-1/0;for(const h of s){const f=Ot(h[0],h[1]);if(!f.valid)continue;const p=f.x,g=-f.y;o.push({x:p,z:g}),p<a&&(a=p),p>c&&(c=p),g<l&&(l=g),g>u&&(u=g)}o.length<3||lf.push({ring:o,minX:a,maxX:c,minZ:l,maxZ:u,feature:e,poly:r})}}}function yP(){lf&&FS===Nt.geoCache.pData||vP()}function xP(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].z,l=t[s].x,c=t[s].z;a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function _P(n,e){if(!Nt)return null;yP();for(const t of lf)if(!(n<t.minX||n>t.maxX||e<t.minZ||e>t.maxZ)&&xP(n,e,t.ring))return t;return null}function Qp(n,e){if(n.length<=2)return n.slice();const t=n[0],i=n[n.length-1],r=i.x-t.x,s=i.y-t.y,o=Math.sqrt(r*r+s*s);let a=0,l=1;for(let c=1;c<n.length-1;c++){const u=o>1e-9?Math.abs(r*(t.y-n[c].y)-(t.x-n[c].x)*s)/o:Math.hypot(n[c].x-t.x,n[c].y-t.y);u>a&&(a=u,l=c)}if(a>e){const c=Qp(n.slice(0,l+1),e),u=Qp(n.slice(l),e);return[...c.slice(0,-1),...u]}return[t,i]}const SP=2;function Sy(n){const e=[];for(const t of n){if(!t||t.length<2)continue;const i=Ot(t[0],t[1]);i.valid&&e.push({x:i.x,y:-i.y})}return e.length<3?e:Qp(e,SP)}let mg=null,cf=null;function MP(n){if(!Nt)return;for(;Nt.parkMaskScene.children.length;)Nt.parkMaskScene.remove(Nt.parkMaskScene.children[0]);if(cf=null,Nt.uniforms.uParkModeActive.value=0,!n?.geometry)return;let e=1/0,t=1/0,i=-1/0,r=-1/0,s=0;const o=new Ws({color:16777215,side:kt});for(const f of Vl(n.geometry)){if(!f?.[0])continue;const p=Sy(f[0]);if(p.length<3)continue;const g=new Cr;p.forEach((v,d)=>d===0?g.moveTo(v.x,v.y):g.lineTo(v.x,v.y));for(let v=1;v<f.length;v++){const d=Sy(f[v]);if(d.length<3)continue;const x=new zl;d.forEach((m,S)=>S===0?x.moveTo(m.x,m.y):x.lineTo(m.x,m.y)),g.holes.push(x)}const _=new Zt(new so(g,1),o);_.frustumCulled=!1,Nt.parkMaskScene.add(_),s++;for(const v of p)v.x<e&&(e=v.x),v.x>i&&(i=v.x),v.y<t&&(t=v.y),v.y>r&&(r=v.y)}if(s===0)return;const a=10,l=e-a,c=i+a,u=t-a,h=r+a;Nt.parkMaskCamera.left=l,Nt.parkMaskCamera.right=c,Nt.parkMaskCamera.bottom=u,Nt.parkMaskCamera.top=h,Nt.parkMaskCamera.updateProjectionMatrix(),Nt.uniforms.uMaskBounds.value.set(l,u,c,h),Nt.renderer.setRenderTarget(Nt.parkMaskTarget),Nt.renderer.setClearColor(0,1),Nt.renderer.clear(),Nt.renderer.render(Nt.parkMaskScene,Nt.parkMaskCamera),Nt.renderer.setRenderTarget(null),Nt.uniforms.uParkModeActive.value=1,cf={minX:l,maxX:c,minZ:u,maxZ:h},mg=n}function My(){Nt&&(Nt.uniforms.uParkModeActive.value=0,mg=null,cf=null)}function wP(){return mg}function wy(){return cf}function EP(n,e){if(!e||n.isInstancedMesh)return!0;const t=50;if(n.userData.px!==void 0&&n.userData.pz!==void 0){const r=n.userData.px,s=n.userData.pz;return r>=e.minX-t&&r<=e.maxX+t&&s>=e.minZ-t&&s<=e.maxZ+t}if(!n.geometry)return!0;n.geometry.boundingBox||n.geometry.computeBoundingBox();const i=n.geometry.boundingBox;return!i||i.isEmpty()?!0:!(i.max.x<e.minX-t||i.min.x>e.maxX+t||i.max.z<e.minZ-t||i.min.z>e.maxZ+t)}let Ne=null;function TP(n){Ne=n,n.updateStyles=CP}let Ey=null;function bP(n,e,t,i){if(n.isInstancedMesh)return!0;if(n.userData.px!==void 0&&n.userData.pz!==void 0){const a=n.userData.px-e,l=n.userData.pz-t;return Math.hypot(a,l)<=i+100}if(!n.geometry)return!0;n.geometry.boundingBox||n.geometry.computeBoundingBox();const r=n.geometry.boundingBox;if(!r||r.isEmpty())return!0;const s=Math.max(r.min.x,Math.min(e,r.max.x)),o=Math.max(r.min.z,Math.min(t,r.max.z));return Math.hypot(s-e,o-t)<=i+100}function AP(n){if(Ne){if(n){const e=Ot(Ne.meta.lon,Ne.meta.lat);Ne.focusPoint.x=e.x,Ne.focusPoint.z=-e.y}else{let e=1/0,t=null;for(const i of Ne.groups.bFill.children){if(i.userData.px===void 0||i.userData.pz===void 0)continue;const r=Math.hypot(i.userData.px-Ne.center.x,i.userData.pz-Ne.center.z);r<e&&(e=r,t=i)}Ne.focusFeatureId=t?t.userData.featureId:null,Ne.focusPoint.x=Ne.center.x,Ne.focusPoint.z=Ne.center.z}Ne.uniforms.uCenter.value.set(Ne.focusPoint.x,Ne.focusPoint.z)}}function CP(){if(!Ne?.scene||!Ne.renderer)return;const n=qt.getState(),e=n.heroEngineActive,t=n.parkModeActive,i=n.isolationActive,r=n.buildingOpacity,s=n.wireOpacity,o=n.streetOpacity,a=n.lineWeight,l=n.themeName,c=n.outlineStyle??"lineMat";AP(e);let u=null;if(e&&Ne.groups.heroFill.children.length>0&&(u=new bi().setFromObject(Ne.groups.heroFill),u.expandByScalar(5)),t){const y=_P(Ne.center.x,Ne.center.z);y?y.feature!==wP()&&MP(y.feature):My()}else My();const h=t&&wy()?wy():null,f=Ne.camera?.zoom??1,p=Ne.camera?.isOrthographicCamera?Math.min(1,Math.max(.3,f*.6)):1,g=l==="blueprint",_=a===0,v=g?Math.min(1,p*a*1.5):Math.min(1,p*a),d=new ve;Ne.renderer.getSize(d);const x=Ne.uniforms.uCenter.value.x,m=Ne.uniforms.uCenter.value.y,S=Ne.uniforms.uPlinthRadius.value,T=y=>bP(y,x,m,S),A=y=>EP(y,h);for(const y of[Ne.groups.bFill,Ne.groups.bWire,Ne.groups.roofs,Ne.groups.detail])for(const E of y.children){if(E.userData.isNativeTwin){const L=c==="native"&&!_&&T(E)&&A(E);E.visible=L,L&&(E.material.color.setHex(Ne.currentTheme.ink),E.material.opacity=v,E.material.transparent=v<1);continue}if(!T(E)){E.visible=!1;continue}if(!A(E)){E.visible=!1;continue}const M=ln(E);if(M&&_){E.visible=!1;continue}if(E.userData.isGhost){E.visible=!1;continue}if(c==="native"&&E.userData.nativeTwin){E.visible=!1;continue}if(e&&u&&E.userData.px!==void 0){const L=new D(E.userData.px,E.userData.baseY||0,E.userData.pz);if(u.containsPoint(L)){E.visible=!1;continue}}E.visible=!0;let w=M?v:r;if(i){const L=(E.userData.px??1/0)-Ne.focusPoint.x,k=(E.userData.pz??1/0)-Ne.focusPoint.z;(e?!1:Math.hypot(L,k)<1)?(E.userData.isolatedMat||(E.userData.sharedMat=E.material,E.userData.isolatedMat=E.material.clone()),E.material=E.userData.isolatedMat):(w*=Ne.uniforms.uIsolationAlpha.value,E.userData.isolatedMat&&(E.material=E.userData.sharedMat,E.userData.isolatedMat.dispose(),E.userData.isolatedMat=null,E.userData.sharedMat=null))}else E.userData.isolatedMat&&(E.material=E.userData.sharedMat,E.userData.isolatedMat.dispose(),E.userData.isolatedMat=null,E.userData.sharedMat=null);E.material.opacity=w,E.material.transparent=w<1,E.material.depthWrite=!M,E.material.color.setHex(M?Ne.currentTheme.ink:Ne.currentTheme.bFill),M&&E.material.isLineMaterial&&(E.material.linewidth=a*1.5,E.material.resolution.copy(d),E.material.blending=g?ga:ds,g&&(E.material.depthWrite=!1))}Ne.groups.heroFill.visible=e,Ne.groups.heroWire.visible=e;for(const y of Ne.groups.heroFill.children)if(y.isGroup)for(const E of y.children)E.isMesh&&(E.material.opacity=r,E.material.color.setHex(Ne.currentTheme.bFill));for(const y of Ne.groups.heroWire.children)if(y.isGroup)for(const E of y.children)ln(E)&&(E.material.color.setHex(Ne.currentTheme.ink),E.material.opacity=Math.min(1,.45*a),E.material.isLineMaterial&&(E.material.linewidth=a*1.5,E.material.resolution.copy(d),E.material.blending=g?ga:ds,g&&(E.material.depthWrite=!1)));for(const y of Ne.groups.roads.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{const M=y.userData.colorKey??"road";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.road),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0}}for(const y of Ne.groups.rails.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}E?(y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d))):(y.material.color.setHex(Ne.currentTheme.rail),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0)}for(const y of Ne.groups.ski.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{const M=y.userData.colorKey;y.material.color.setHex(Ne.currentTheme[M]??16777215),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0}}if(Ne.groups.lights)for(const y of Ne.groups.lights.children)y.visible=T(y);for(const y of Ne.groups.water.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{if(!y.isMesh)continue;y.material.color.setHex(Ne.currentTheme.water),y.material.opacity=s,y.material.transparent=s<1,y.material.depthWrite=s>=1}}for(const y of Ne.groups.zones.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"institutional";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.institutional),y.material.opacity=.3,y.material.transparent=!0,y.material.depthWrite=!1}}for(const y of Ne.groups.veg.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"veg";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.veg),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}}for(const y of Ne.groups.parks.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(d));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"park";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.park),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}}for(const y of Ne.groups.micro.children){if(y.visible=T(y)&&A(y),!y.visible)continue;if(ln(y)&&_){y.visible=!1;continue}if(y.material?.vertexColors)y.material.color.setHex(16777215);else{const M=y.userData.colorKey??"road";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.road)}y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}for(const y of Ne.groups.topo.children)!y.isMesh&&!y.isLineSegments||(y.renderOrder=-1,y.material&&(y.material.polygonOffset=!0,y.material.polygonOffsetFactor=1,y.material.polygonOffsetUnits=1,y.material.depthTest=!0),y.isMesh&&(y.material.color.setHex(Ne.currentTheme.topo),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0));if(Ne.meta&&Ne.geoCache.zData&&l!==Ey){Ey=l;const{zData:y,pData:E,vData:M,wData:w,skiData:L,hData:k}=Ne.geoCache,I=Ne.meta.radius||1e3,H=zS(y,E,M,w,L,k,I,Ne.currentTheme);for(const z of Ne.groups.topo.children)z.isMesh&&(z.material.map&&z.material.map.dispose(),z.material.map=H,z.material.needsUpdate=!0)}}class RP{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let s=0;e.traverse(function(d){if(d.isMesh){const x=d.geometry,m=x.index,S=x.getAttribute("position");s+=m!==null?m.count/3:S.count/3,r.push({object3d:d,geometry:x})}});let o,a=80;if(i===!0){const d=s*2+s*3*4*4+80+4,x=new ArrayBuffer(d);o=new DataView(x),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new D,c=new D,u=new D,h=new D,f=new D,p=new D;for(let d=0,x=r.length;d<x;d++){const m=r[d].object3d,S=r[d].geometry,T=S.index,A=S.getAttribute("position");if(T!==null)for(let y=0;y<T.count;y+=3){const E=T.getX(y+0),M=T.getX(y+1),w=T.getX(y+2);g(E,M,w,A,m)}else for(let y=0;y<A.count;y+=3){const E=y+0,M=y+1,w=y+2;g(E,M,w,A,m)}}return i===!1&&(o+=`endsolid exported
`),o;function g(d,x,m,S,T){l.fromBufferAttribute(S,d),c.fromBufferAttribute(S,x),u.fromBufferAttribute(S,m),T.isSkinnedMesh===!0&&(T.applyBoneTransform(d,l),T.applyBoneTransform(x,c),T.applyBoneTransform(m,u)),l.applyMatrix4(T.matrixWorld),c.applyMatrix4(T.matrixWorld),u.applyMatrix4(T.matrixWorld),_(l,c,u),v(l),v(c),v(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(d,x,m){h.subVectors(m,x),f.subVectors(d,x),h.cross(f).normalize(),p.copy(h).normalize(),i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function v(d){i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}let $e=null;function LP(n){$e=n}function eu(n,e,t){if(!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r&&(r[e]=t)}function kS(){const{canvasPreset:n}=qt.getState(),e=Vi[n]??Vi.hd;return{pixelW:e.w,pixelH:e.h}}function PP(){if(!$e)return;window.vitroLastExportURL&&URL.revokeObjectURL(window.vitroLastExportURL),qt.getState().lineWeight;const e=4,{pixelW:t,pixelH:i}=kS();let r=t*e,s=i*e;const o=1e8;if(r*s>o){const y=Math.sqrt(o/(r*s));r=Math.floor(r*y),s=Math.floor(s*y),console.warn(`[ExportUtils] Export clamped to ${r}×${s}`)}let a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.imageSmoothingEnabled=!1;const c=$e.renderer.getPixelRatio(),u=new ve;$e.renderer.getSize(u),$e.renderer.setPixelRatio(1);const h=r/s,f=$e.meta?.radius?$e.meta.radius*4:4e3;$e.camera.isOrthographicCamera?($e.camera.left=f*h/-2,$e.camera.right=f*h/2,$e.camera.top=f/2,$e.camera.bottom=f/-2):$e.camera.aspect=h,$e.camera.updateProjectionMatrix(),$e.scene.traverse(y=>{(y.isMesh||ln(y))&&(y.frustumCulled=!1)});const p=2048,g=16,_=p+g*2;$e.renderer.setSize(_,_),$e.scene.traverse(y=>{y.material?.isLineMaterial&&y.material.resolution.set(_,_)});const v=Math.ceil(r/p),d=Math.ceil(s/p);$e.updateStyles?.();const x=e,m=new Set;$e.scene.traverse(y=>{y.material?.isLineMaterial&&!m.has(y.material)&&(y.material.linewidth*=x,m.add(y.material))});const S=new Map;$e.scene.traverse(y=>{(y.isMesh||ln(y))&&S.set(y,y.visible)});const T=$e.scene.background;for(let y=0;y<d;y++)for(let E=0;E<v;E++){const M=E*p,w=y*p,L=Math.min(p,r-M),k=Math.min(p,s-w);$e.camera.setViewOffset(r,s,M-g,w-g,_,_),$e.renderer.autoClear=!0,$e.scene.background=T,$e.scene.traverse(I=>{(I.isMesh||ln(I))&&(I.visible=S.get(I)??!1),I.isMesh&&(eu(I,"colorWrite",!0),eu(I,"depthWrite",!0))}),$e.renderer.render($e.scene,$e.camera),l.drawImage($e.renderer.domElement,g,g,L,k,M,w,L,k)}if($e.currentTheme.grid){const y=$e.currentTheme.ink.toString(16).padStart(6,"0"),E=document.createElement("canvas");E.width=20,E.height=20;const M=E.getContext("2d");M.strokeStyle="#"+y,M.globalAlpha=.07,M.lineWidth=1,M.beginPath(),M.moveTo(0,20),M.lineTo(20,0),M.moveTo(-1,1),M.lineTo(1,-1),M.moveTo(19,21),M.lineTo(21,19),M.stroke(),l.fillStyle=l.createPattern(E,"repeat"),l.fillRect(0,0,r,s)}if($e.camera.clearViewOffset(),xt.csm?(tf($e.time.current),$e._applyShadowToggle(qt.getState().shadowsEnabled)):$e.scene.background=T??new nt($e.currentTheme.bg),$e.scene.traverse(y=>{y.isMesh&&(eu(y,"colorWrite",!0),eu(y,"depthWrite",!0)),(y.isMesh&&!y.isInstancedMesh||ln(y))&&(y.frustumCulled=!0)}),$e.renderer.setPixelRatio(c),$e.renderer.setSize(u.x,u.y,!1),$e.camera.isOrthographicCamera){const y=u.x/u.y;$e.camera.left=f*y/-2,$e.camera.right=f*y/2}else $e.camera.aspect=u.x/u.y;$e.camera.updateProjectionMatrix(),$e.updateStyles?.();const A=document.createElement("a");A.download=`Vitro_Export_${Date.now()}.png`,window.vitroLastExportURL=a.toDataURL("image/png"),A.href=window.vitroLastExportURL,A.click(),a.width=0,a.height=0,a=null}function DP(n="vitro_city.stl"){if(!$e)return;const e=$e.uniforms.uPlinthRadius.value,t=$e.uniforms.uCenter.value.x,i=$e.uniforms.uCenter.value.y,r=e*e,s=(x,m)=>{const S=x-t,T=m-i;return S*S+T*T<=r},o=x=>{const m=x.attributes.position,S=x.index;if(!m)return null;let T,A;S?(T=S.count/3,A=M=>[S.getX(M*3),S.getX(M*3+1),S.getX(M*3+2)]):(T=m.count/3,A=M=>[M*3,M*3+1,M*3+2]);const y=[];for(let M=0;M<T;M++){const[w,L,k]=A(M),I=(m.getX(w)+m.getX(L)+m.getX(k))/3,H=(m.getZ(w)+m.getZ(L)+m.getZ(k))/3;s(I,H)&&y.push(m.getX(w),m.getY(w),m.getZ(w),m.getX(L),m.getY(L),m.getZ(L),m.getX(k),m.getY(k),m.getZ(k))}if(y.length===0)return null;const E=new Ut;return E.setAttribute("position",new vn(new Float32Array(y),3)),E.computeVertexNormals(),E},a=(x,m,S)=>{const A=new Es(x,x,1,256,1,!0),y=A.attributes.position;let E=1/0;for(let I=0;I<=256;I++){const H=I/256*Math.PI*2,z=Xt(m+Math.cos(H)*x,S+Math.sin(H)*x);z<E&&(E=z)}const M=E-20;for(let I=0;I<y.count;I++){const H=y.getX(I)+m,z=y.getZ(I)+S;y.setY(I,y.getY(I)>0?Xt(H,z):M)}A.translate(m,0,S);const w=new fg(x,256);w.rotateX(Math.PI/2),w.translate(m,M,S);const L=or([A,w]);L.computeVertexNormals();const k=new tl({color:14540253,side:kt});return{mesh:new Zt(L,k),bottomY:M}},l=new Fp,c=["bFill","roofs","tunnels"];for(const x of c){const m=$e.groups[x];m&&m.traverse(S=>{if(!S.isMesh||ln(S)||S.isInstancedMesh)return;const T=S.geometry?.attributes?.position;if(!T||T.count<3||S.userData.px!==void 0&&!s(S.userData.px,S.userData.pz))return;const A=S.clone(),y=o(A.geometry);if(!y){A.geometry.dispose();return}A.geometry.dispose(),A.geometry=y;const E=A.material?.color?.getHex()??13421772;A.material=new tl({color:E,side:kt}),l.add(A)})}const u=a(e,t,i);l.add(u.mesh);const h=$e.groups.topo;h&&h.children.forEach(x=>{if(!x.isMesh||ln(x))return;const m=x.material?.color?.getHex()??14540253,S=x.clone();S.material=new tl({color:m,side:kt}),S.geometry.applyMatrix4(S.matrixWorld),S.position.set(0,0,0),S.rotation.set(0,0,0),S.scale.set(1,1,1);const T=S.geometry.attributes.position;for(let A=0;A<T.count;A++){const y=T.getX(A),E=T.getZ(A);Math.hypot(y-t,E-i)>e&&T.setXYZ(A,t,u.bottomY,i)}T.needsUpdate=!0,S.geometry.computeVertexNormals(),l.add(S)});const f=[],p=$e.groups.veg;if(p&&(p.traverse(x=>{if(!x.isInstancedMesh||ln(x))return;const m=x.geometry,S=new Et,T=new D,A=new ys,y=new D;for(let E=0;E<x.count;E++){if(x.getMatrixAt(E,S),T.setFromMatrixPosition(S),A.setFromRotationMatrix(S),y.setFromMatrixScale(S),!s(T.x,T.z))continue;T.y=Xt(T.x,T.z)-.5;const M=m.clone();M.applyMatrix4(new Et().compose(T,A,y)),f.push(M)}}),f.length>0)){const x=or(f),m=new tl({color:4885050,side:kt});l.add(new Zt(x,m));for(const S of f)S.dispose()}const g=new RP().parse(l,{binary:!0}),_=new Blob([g],{type:"application/octet-stream"}),v=URL.createObjectURL(_),d=document.createElement("a");d.href=v,d.download=n,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(v),l.traverse(x=>{if(!x.isMesh)return;x.geometry?.dispose();const m=Array.isArray(x.material)?x.material:[x.material];for(const S of m)S?.dispose()}),console.log(`[ExportUtils] STL exported: "${n}"`)}class ui{constructor(e=0,t=0){this.x=e,this.y=t}clone(){return new ui(this.x,this.y)}sub(e){return new ui(this.x-e.x,this.y-e.y)}add(e){return new ui(this.x+e.x,this.y+e.y)}scale(e){return new ui(this.x*e,this.y*e)}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}len(){return Math.hypot(this.x,this.y)}dist(e){return Math.hypot(this.x-e.x,this.y-e.y)}normalize(){const e=this.len();return e>1e-12?this.scale(1/e):new ui}}function IP(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(const s of n)s.x<e&&(e=s.x),s.x>i&&(i=s.x),s.y<t&&(t=s.y),s.y>r&&(r=s.y);return{minX:e,minY:t,maxX:i,maxY:r}}function NP(n,e){return n.minX<=e.maxX&&n.maxX>=e.minX&&n.minY<=e.maxY&&n.maxY>=e.minY}function UP(n,e,t){const i=t.length,r=e.sub(n);if(r.len()<1e-12)return[];let o=0,a=0;for(let h=0;h<i;h++)o+=t[h].x,a+=t[h].y;o/=i,a/=i;let l=0,c=1;for(let h=0;h<i;h++){const f=t[h],g=t[(h+1)%i].sub(f),_=-g.y,v=g.x,d=Math.hypot(_,v);if(d<1e-12)continue;const x=(o-f.x)*_+(a-f.y)*v;let m,S;x>=0?(m=-_/d,S=-v/d):(m=_/d,S=v/d);const T=n.sub(f),A=r.x*m+r.y*S,y=T.x*m+T.y*S-.001*A;if(Math.abs(A)<1e-12){if(y>0)return[{p1:n,p2:e}];continue}const E=-y/A;if(A<0?l=Math.max(l,E):c=Math.min(c,E),l>c+1e-10)return[]}if(l=Math.max(0,l),c=Math.min(1,c),l>=c-1e-10)return[];const u=[];return l>1e-10&&u.push({p1:n,p2:new ui(n.x+r.x*l,n.y+r.y*l)}),c<1-1e-10&&u.push({p1:new ui(n.x+r.x*c,n.y+r.y*c),p2:e}),u}function OP(n="vitro_plotter.svg"){if(!$e)return;const e=qt.getState(),{canvasPreset:t}=e,{pixelW:i,pixelH:r}=kS(),s=i/100,o=r/100,a=2e3,l=s/o,c=a,u=Math.round(a/l);$e.camera.updateMatrixWorld(),$e.camera.updateProjectionMatrix();const h=new D,f=(Q,ie,ye)=>(h.set(Q,ie,ye).project($e.camera),h.z>1?null:{x:(h.x*.5+.5)*c,y:(1-(h.y*.5+.5))*u,z:h.z}),p=$e.uniforms.uPlinthRadius.value,g=$e.uniforms.uCenter.value.x,_=$e.uniforms.uCenter.value.y,v=p*p,d=(Q,ie)=>{const ye=Q-g,j=ie-_;return ye*ye+j*j<=v},x=[],m=["tunnels"],S=new D,T=new D,A=new D;for(const Q of m){const ie=$e.groups[Q];ie&&ie.traverse(ye=>{if(!ye.visible||!ye.isMesh||ln(ye)||!ye.geometry)return;const j=ye.matrixWorld,te=ye.geometry.attributes.position;if(!te)return;const pe=ye.geometry.index;let re,me;pe?(re=Math.floor(pe.count/3),me=xe=>[pe.getX(xe*3),pe.getX(xe*3+1),pe.getX(xe*3+2)]):(re=Math.floor(te.count/3),me=xe=>[xe*3,xe*3+1,xe*3+2]);for(let xe=0;xe<re;xe++){const[De,Be,P]=me(xe);S.set(te.getX(De),te.getY(De),te.getZ(De)).applyMatrix4(j),T.set(te.getX(Be),te.getY(Be),te.getZ(Be)).applyMatrix4(j),A.set(te.getX(P),te.getY(P),te.getZ(P)).applyMatrix4(j);const se=T.clone().sub(S).cross(A.clone().sub(S)),le=S.clone().sub($e.camera.position);if(se.dot(le)>=0)continue;const de=(S.x+T.x+A.x)/3,B=(S.z+T.z+A.z)/3;if(!d(de,B))continue;const ze=f(S.x,S.y,S.z),be=f(T.x,T.y,T.z),Fe=f(A.x,A.y,A.z);if(!ze||!be||!Fe)continue;const O=[new ui(ze.x,ze.y),new ui(be.x,be.y),new ui(Fe.x,Fe.y)],C=IP(O),Z=Math.min(ze.z,be.z,Fe.z),ce=Math.max(ze.z,be.z,Fe.z);x.push({poly:O,minZ:Z,maxZ:ce,aabb:C})}})}x.sort((Q,ie)=>Q.minZ-ie.minZ);const y=80,E=Math.ceil(c/y)+1,M=Math.ceil(u/y)+1,w=Array.from({length:E},()=>Array.from({length:M},()=>[]));for(let Q=0;Q<x.length;Q++){const{aabb:ie}=x[Q],ye=Math.max(0,Math.floor(ie.minX/y)),j=Math.min(E-1,Math.floor(ie.maxX/y)),te=Math.max(0,Math.floor(ie.minY/y)),pe=Math.min(M-1,Math.floor(ie.maxY/y));for(let re=ye;re<=j;re++)for(let me=te;me<=pe;me++)w[re][me].push(Q)}const L=[],k=["bWire","roofs","roads","rails","ski","detail"],I=new D,H=new D,z=new D,N=[];for(const Q of k){const ie=$e.groups[Q];ie&&ie.traverse(ye=>{if(!ye.visible||!ln(ye))return;const j=ye.matrixWorld,te=ye.geometry?.attributes?.instanceStart,pe=ye.geometry?.attributes?.instanceEnd,re=(me,xe)=>{if(z.lerpVectors(me,xe,.5),!d(z.x,z.z))return;const De=f(me.x,me.y,me.z),Be=f(xe.x,xe.y,xe.z);if(!De||!Be)return;const P={minX:Math.min(De.x,Be.x),minY:Math.min(De.y,Be.y),maxX:Math.max(De.x,Be.x),maxY:Math.max(De.y,Be.y)},se=Math.max(0,Math.floor(P.minX/y)),le=Math.min(E-1,Math.floor(P.maxX/y)),de=Math.max(0,Math.floor(P.minY/y)),B=Math.min(M-1,Math.floor(P.maxY/y)),ze=new Set,be=[];for(let Z=se;Z<=le;Z++)for(let ce=de;ce<=B;ce++)for(const fe of w[Z][ce])ze.has(fe)||(ze.add(fe),be.push(fe));const Fe=new ui(De.x,De.y),O=new ui(Be.x,Be.y);N.length=0,N.push({p1:Fe,p2:O});const C=Math.max(De.z,Be.z);for(const Z of be){const ce=x[Z];if(C<=ce.minZ||!NP(P,ce.aabb))continue;const fe=N.length;for(let Xe=0;Xe<fe;Xe++){const Le=N[Xe];if(!Le)continue;const Ue=UP(Le.p1,Le.p2,ce.poly);Ue.length===0?N[Xe]=null:Ue.length===1?N[Xe]=Ue[0]:(N[Xe]=Ue[0],N.push(Ue[1]))}let he=0;for(let Xe=0;Xe<N.length;Xe++)N[Xe]!==null&&(N[he++]=N[Xe]);if(N.length=he,N.length===0)return}for(const Z of N)L.push(`<line x1="${Z.p1.x.toFixed(2)}" y1="${Z.p1.y.toFixed(2)}" x2="${Z.p2.x.toFixed(2)}" y2="${Z.p2.y.toFixed(2)}" stroke="black" stroke-width="1" fill="none" />`)};if(!te||!pe){const me=ye.geometry?.attributes?.position;if(me)for(let xe=0;xe<me.count-1;xe+=2)I.set(me.getX(xe),me.getY(xe),me.getZ(xe)).applyMatrix4(j),H.set(me.getX(xe+1),me.getY(xe+1),me.getZ(xe+1)).applyMatrix4(j),re(I,H);return}for(let me=0;me<te.count;me++)I.set(te.getX(me),te.getY(me),te.getZ(me)).applyMatrix4(j),H.set(pe.getX(me),pe.getY(me),pe.getZ(me)).applyMatrix4(j),re(I,H)})}const V=['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${c} ${u}" width="${s}in" height="${o}in">`,...L,"</svg>"].join(`
`),U=new Blob([V],{type:"image/svg+xml"}),$=URL.createObjectURL(U),q=document.createElement("a");q.href=$,q.download=n,document.body.appendChild(q),q.click(),document.body.removeChild(q),URL.revokeObjectURL($),console.log(`[ExportUtils] SVG exported: "${n}" — ${L.length} segments, ${x.length} occluders`)}const zP=new nt(328968),FP=1280;function Ty(n){const e=Math.min(1,FP/Math.max(n.w,n.h));return{w:Math.round(n.w*e),h:Math.round(n.h*e)}}class by{constructor(e,t=null){this.canvas=e,this.meta=t,this._rafId=null,this._boundAnimate=this._animate.bind(this),this._storeUnsubs=[],this._resizeObserver=null,this._shadowsDirty=!0,this._onVisibilityChange=null,this._onPointerMousedown=null,this._onPointerLockChange=null,this._onPointerMousemove=null,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.groups={},this.matLampFlare=null,this.matAviationLight=null,this.uniforms={uPlinthRadius:{value:2e3},uCenter:{value:new ve(0,0)},uIsolation:{value:0},uIsolationAlpha:{value:.25},uTime:{value:0},uPortalCount:{value:0},uPortalHoles:{value:null},uParkMask:{value:null},uMaskBounds:{value:new Ht},uParkModeActive:{value:0}},this.portalHoles={maxHoles:128,count:0,data:Array.from({length:128},()=>new Ht)},this.underground={state:"SURFACE",factor:0,targetFactor:0,_baseSunI:null,_baseSkyI:null},this.center={x:0,z:0},this.baseFov=45,this.look={pitch:0,yaw:0},this.isFlyMode=!1,this.mouseLocked=!1,this.keyState={},this.time={mode:"manual",current:15,speed:1,lastFrame:0},this.shadowsEnabled=!0,this._savedCSMIntensity=0,this._savedSkyIntensity=0,this._currentExposure=qt.getState().exposure,this._lastCullingUpdate=0,this._lastTimeUIUpdate=0,this._lastLightingUpdate=0,this._lastShadowUpdate=0,this._prevZoom=void 0,this.parkMaskTarget=null,this.parkMaskScene=null,this.parkMaskCamera=null,this.mode="DIORAMA",this.isPaused=!1,this.PROFILES={STUDIO:{pixelRatio:2,shadowRes:4096},DIORAMA:{pixelRatio:1,shadowRes:2048},SIM:{pixelRatio:1,shadowRes:1024}},this.FG_THRESHOLD=180,this.heroClipPlane=new Mr(new D(0,1,0),0),this.loadedAssets={},this.updateStyles=null,this.currentTheme=qt.getState().theme,this.heroState={h:0,feature:null,found:!1},this.geoCache={},this.highResGround=!1,this.maxTrees=5e3,this.materials={},this.labels=[],this.focusPoint={x:0,z:0},this.focusFeatureId=null,this._topoMaxElev=0,this._topoGrid=null,this._topoWorldSize=null,this.matTunnelStrip=null,this.matTunnelInterior=null,this.matTunnelPortal=null,this.treeMesh=null,this.treeMeshTotal=0,this._init()}_init(){this._initRenderer(),this._initScene(),this._initCamera(),this._initControls(),this._initGroups(),this._initPortalHoles(),this._initParkMask(),this._initResize(),this._initPointerLock(),this._initKeyboard(),this._initVisibility(),LL(this),DL(this),OL(this),BL(this),HL(this),$L(this),cP(this),gP(this),TP(this),LP(this),this.meta&&(this._initLighting(),this._syncPlinthFromMeta(),this.centerCamera(),mP().catch(e=>console.error("[CityPipeline]",e))),this._subscribeToStore(),this._applyEngineMode(qt.getState().engineMode,null),this._start()}_initRenderer(){const{canvasPreset:e}=qt.getState(),t=Vi[e]??Vi.hd,{w:i,h:r}=Ty(t);this.renderer=new z2({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance",alpha:!0,premultipliedAlpha:!1,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(i,r,!1),this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qm,this.renderer.toneMapping=W_,this.renderer.toneMappingExposure=1}_initScene(){const{theme:e}=qt.getState();this.scene=new Fp,this.scene.background=new nt(e.bg)}_initCamera(){const e=this.canvas.width||1920,t=this.canvas.height||1080;this.camera=new li(this.baseFov,e/t,.1,1e5);const i=this.meta?.radius??1e3;this.camera.position.set(i,i,i)}_initControls(){this.controls=new UR(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=1,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.touches={ONE:Zr.PAN,TWO:Zr.DOLLY_ROTATE},this.controls.addEventListener("end",()=>{this.center.x=this.controls.target.x,this.center.z=this.controls.target.z}),this.controls.addEventListener("change",()=>{this._shadowsDirty=!0})}_initGroups(){const e=["bFill","bWire","roofs","detail","heroFill","heroWire","roads","water","parks","veg","rails","ski","zones","micro","topo","lights","tunnels","tunnelLights"];for(const t of e)this.groups[t]=new Ko,this.scene.add(this.groups[t])}_initPortalHoles(){this.uniforms.uPortalHoles.value=this.portalHoles.data}_initParkMask(){this.parkMaskTarget=new vs(2048,2048,{format:Af,magFilter:Nn,minFilter:Nn}),this.uniforms.uParkMask.value=this.parkMaskTarget.texture,this.parkMaskScene=new Fp,this.parkMaskCamera=new Ju(-1,1,1,-1,.1,1e3),this.parkMaskCamera.position.set(0,0,100)}_initLighting(){HR(this.scene,this.renderer,this.meta,this.camera);const{shadowsEnabled:e}=qt.getState();e||this._applyShadowToggle(!1),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity)}_syncPlinthFromMeta(){const e=this.meta?.radius??1e3,t=Math.round(e*.75);this.uniforms.uPlinthRadius.value=t,qt.setState({plinthRadius:t})}_initResize(){const e=this.canvas.width||1920,t=this.canvas.height||1080;this._broadcastResolution(e,t)}_applyCanvasPreset(e){const{w:t,h:i}=Ty(e);this.renderer.setSize(t,i,!1);const r=e.w/e.h;if(this.camera.isPerspectiveCamera)this.camera.aspect=r,this.camera.updateProjectionMatrix();else if(this.camera.isOrthographicCamera){const s=(this.meta?.radius??1e3)*4;this.camera.left=-(s*r)/2,this.camera.right=s*r/2,this.camera.top=s/2,this.camera.bottom=-(s/2),this.camera.updateProjectionMatrix()}this._broadcastResolution(t,i)}_broadcastResolution(e,t){const i=new ve(e,t);this.scene.traverse(r=>{r.material?.isLineMaterial&&r.material.resolution.copy(i)})}_initPointerLock(){const e=this.canvas;this._onPointerMousedown=()=>{(this.mode==="DIORAMA"||this.mode==="SIM")&&document.pointerLockElement!==e&&e.requestPointerLock()},this._onPointerLockChange=()=>{const t=document.pointerLockElement===e;this.mouseLocked=t,this.mode==="SIM"&&(this.isPaused=!t)},this._onPointerMousemove=t=>{if(!this.mouseLocked)return;const i=.002;if(this.isFlyMode)this.look.yaw-=t.movementX*i,this.look.pitch-=t.movementY*i,this.look.pitch=Math.max(-(Math.PI/2-.01),Math.min(Math.PI/6,this.look.pitch)),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.look.pitch,this.look.yaw,0);else if($t.isActive){$t.cameraHeading-=t.movementX*i,$t.cameraPitch-=t.movementY*i;const r=Math.PI/2-.05;$t.cameraPitch=Math.max(-r,Math.min(r,$t.cameraPitch))}},e.addEventListener("mousedown",this._onPointerMousedown),document.addEventListener("pointerlockchange",this._onPointerLockChange),document.addEventListener("mousemove",this._onPointerMousemove)}_initKeyboard(){const e=i=>{this.keyState[i.code]=!0},t=i=>{this.keyState[i.code]=!1};window.addEventListener("keydown",e),window.addEventListener("keyup",t),this._keyDown=e,this._keyUp=t}_initVisibility(){this._onVisibilityChange=()=>{document.hidden?this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null):this._rafId===null&&(this.time.lastFrame=void 0,this._rafId=requestAnimationFrame(this._boundAnimate))},document.addEventListener("visibilitychange",this._onVisibilityChange)}_subscribeToStore(){const e=qt.subscribe((t,i)=>{if(t.theme!==i.theme&&(this.currentTheme=t.theme,this._applyTheme(t.theme)),t.shadowsEnabled!==i.shadowsEnabled&&this._applyShadowToggle(t.shadowsEnabled),t.shadowStyle!==i.shadowStyle&&xt.customUniforms?.uShadowStyle&&(xt.customUniforms.uShadowStyle.value=t.shadowStyle),t.lightsVisible!==i.lightsVisible&&this.groups.lights&&(this.groups.lights.visible=t.lightsVisible),t.plinthRadius!==i.plinthRadius&&(this.uniforms.uPlinthRadius.value=t.plinthRadius,this.updateStyles?.()),t.timeMode==="manual"&&t.timeCurrent!==i.timeCurrent&&(this.time.current=t.timeCurrent,tf(this.time.current),this._applyShadowToggle(qt.getState().shadowsEnabled),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity)),t.timeMode!==i.timeMode&&(this.time.mode=t.timeMode),t.timeSpeed!==i.timeSpeed&&(this.time.speed=t.timeSpeed),t.engineMode!==i.engineMode&&this._applyEngineMode(t.engineMode,i.engineMode),t.isOrthographic!==i.isOrthographic&&this._toggleCamera(t.isOrthographic),(t.buildingOpacity!==i.buildingOpacity||t.wireOpacity!==i.wireOpacity||t.streetOpacity!==i.streetOpacity||t.lineWeight!==i.lineWeight)&&this._applyOpacity(t),t.isolationActive!==i.isolationActive&&(this.uniforms.uIsolation.value=t.isolationActive?1:0,this.updateStyles?.()),t.theme!==i.theme&&(this.uniforms.uIsolationAlpha.value=t.theme.isolationAlpha??.25),t.parkModeActive!==i.parkModeActive&&(this.uniforms.uParkModeActive.value=t.parkModeActive?1:0,this.updateStyles?.()),t.heroEngineActive!==i.heroEngineActive&&this.updateStyles?.(),t.panY!==i.panY&&this.controls&&(this.controls.target.y=t.panY,this.controls.update()),t.canvasPreset!==i.canvasPreset){const r=Vi[t.canvasPreset]??Vi.hd;this._applyCanvasPreset(r)}(t.exposure!==i.exposure||t.autoExposure!==i.autoExposure)&&(t.autoExposure||(this._currentExposure=t.exposure,this.renderer.toneMappingExposure=t.exposure)),t.fov!==i.fov&&(this.baseFov=t.fov,this.camera.isPerspectiveCamera&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix())),t.autoRotate!==i.autoRotate&&this.controls&&(this.controls.autoRotate=t.autoRotate),t.outlineStyle!==i.outlineStyle&&this._applyOutlineStyle(t.outlineStyle)});this._storeUnsubs.push(e)}_applyTheme(e){this.scene&&(this.scene.background=new nt(e.bg),this.uniforms.uIsolationAlpha.value=e.isolationAlpha??.25,this.scene.traverse(t=>{const i=t.userData?.colorKey;if(!i)return;const r=e[i];if(r===void 0)return;const s=Array.isArray(t.material)?t.material:[t.material];for(const o of s)o?.color&&o.color.setHex(r),o?.emissive&&t.userData.useEmissive&&o.emissive.setHex(r)}),this.scene.fog&&this.scene.fog.color.setHex(e.bg),this.updateStyles?.())}_applyShadowToggle(e){const t=xt.csm,i=xt.skyLight;if(!(!t||!i)){if(e){this.renderer.shadowMap.enabled=!0;for(const r of t.lights)r.castShadow=!0,r.intensity=this._savedCSMIntensity||r.intensity;i.intensity=this._savedSkyIntensity||i.intensity}else{this._savedCSMIntensity=t.lights[0]?.intensity??1,this._savedSkyIntensity=i.intensity,this.renderer.shadowMap.enabled=!1;for(const r of t.lights)r.intensity=0;i.intensity=Math.max(this._savedSkyIntensity,3)}this.shadowsEnabled=e}}_applyEngineMode(e,t){this.mode=e,this.keyState={};const i=this.PROFILES[e];if(i&&this.renderer.setPixelRatio(window.devicePixelRatio*i.pixelRatio),e==="STUDIO"){if($t.isActive=!1,this.isFlyMode=!1,document.pointerLockElement&&document.exitPointerLock(),this.mouseLocked=!1,t==="SIM"){const r=new D;this.camera.getWorldDirection(r),this.controls.target.copy(this.camera.position).addScaledVector(r,100)}this.controls.enabled=!0,this.controls.update()}else if(e==="DIORAMA"){$t.isActive=!1,this.controls.enabled=!1,this.isFlyMode=!0;const r=new pi().setFromQuaternion(this.camera.quaternion,"YXZ");this.look.yaw=r.y,this.look.pitch=r.x}else if(e==="SIM"){this.controls.enabled=!1,this.isFlyMode=!1,$t.isActive=!0;const r=this.camera.position.x,s=this.camera.position.z,o=ot.physics.eyeHeight;let l=Xt(r,s);const c=sf(r,s),u=Array.isArray(c)?c:c?.parts??(c?[c]:[]);for(const g of u)g.yTop!=null&&(l=Math.max(l,g.yTop));const h=l+o+.5,f=Math.max(this.camera.position.y,h);this.camera.position.set(r,f,s);const p=new pi().setFromQuaternion(this.camera.quaternion,"YXZ");$t.cameraHeading=p.y,$t.cameraPitch=ai.clamp(p.x,-(Math.PI/2-.05),Math.PI/6),$t.bodyHeading=p.y,$t.velocity.set(0,0,0),$t.isGrounded=!1,$t.movementState="FALL",$t.roll=0,$t.wallRoll=0,$t.fallTilt=0,$t.lastGroundedTime=0,$t.lastJumpTime=0}}_toggleCamera(e){const t=this.controls.target.clone(),i=this.camera.position.distanceTo(t),r=new D().subVectors(this.camera.position,t).normalize(),s=this.baseFov,o=this.canvas.width/this.canvas.height,a=this.meta?.radius??1e3,l=a*4;if(e){const c=2*i*Math.tan(ai.degToRad(s/2)),u=l/c;this.camera=new Ju(-(l*o)/2,l*o/2,l/2,-(l/2),-5e4,5e4),this.camera.position.copy(t).addScaledVector(r,a*4),this.camera.zoom=u}else{const u=l/this.camera.zoom/(2*Math.tan(ai.degToRad(s/2)));this.camera=new li(s,o,.1,1e5),this.camera.position.copy(t).addScaledVector(r,u)}this.camera.lookAt(t),this.camera.updateProjectionMatrix(),this.controls.object=this.camera,this.controls.update()}_applyOpacity(e){this.scene.traverse(t=>{if(!t.isMesh)return;const i=t.userData?.opacityGroup;if(!i)return;const r=Array.isArray(t.material)?t.material:[t.material];for(const s of r)s&&(i==="building"?s.opacity=e.buildingOpacity:i==="wire"?s.opacity=e.wireOpacity:i==="road"&&(s.opacity=e.streetOpacity),s.transparent=s.opacity<1)}),this.scene.traverse(t=>{t.material?.isLineMaterial&&(t.material.linewidth=t.userData?.baseLineWidth??1,t.material.linewidth*=e.lineWeight)})}_applyOutlineStyle(e){const t=[this.groups.bWire,this.groups.detail].filter(Boolean);if(e==="none"){for(const r of t)r.visible=!1;return}const i=e==="lineMat";for(const r of t)r.visible=!0,r.traverse(s=>{if(s.isLineSegments2)if(s.visible=i,i)s.userData.nativeTwin&&(s.userData.nativeTwin.visible=!1);else{if(!s.userData.nativeTwin){const o=this._buildNativeTwin(s);s.parent.add(o),s.userData.nativeTwin=o}s.userData.nativeTwin.visible=!0}})}_buildNativeTwin(e){const t=e.geometry.attributes.instanceStart?.data?.array;if(!t)return new Ko;const i=new Ut;i.setAttribute("position",new vn(t.slice(),3));const r=new yS({color:e.material.color?.clone()??new nt(16777215),opacity:e.material.opacity,transparent:e.material.opacity<1}),s=this.uniforms.uPlinthRadius,o=this.uniforms.uCenter;r.onBeforeCompile=l=>{l.uniforms.uPlinthRadius=s,l.uniforms.uCenter=o,l.vertexShader=`varying vec3 vTwinWorldPos;
${l.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
    vTwinWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
varying vec3 vTwinWorldPos;
`+l.fragmentShader).replace("void main() {",`void main() {
    if (length(vec2(vTwinWorldPos.x - uCenter.x, vTwinWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`)};const a=new V2(i,r);return a.userData={...e.userData,isNativeTwin:!0},a.matrixAutoUpdate=!1,a.matrix.copy(e.matrix),a}centerCamera(){const e=this.meta?.radius??1e3,{panY:t}=qt.getState(),i=this.center.x,r=this.center.z,s=new D(i,t,r),o=new D(1,1,1).normalize(),a=e*1.5/Math.tan(ai.degToRad(this.baseFov/2));this.camera.isOrthographicCamera?(this.camera.position.copy(s).addScaledVector(o,e*4),this.camera.zoom=e*4/(e*3.5)):this.camera.position.copy(s).addScaledVector(o,a),this.controls.target.copy(s),this.camera.updateProjectionMatrix(),this.controls.update()}registerPortalHole(e,t,i,r){const s=this.portalHoles;s.count>=s.maxHoles||(s.data[s.count].set(e,t,i,r),s.count++,this.uniforms.uPortalCount.value=s.count)}resetPortalHoles(){const e=this.portalHoles;for(let t=0;t<e.count;t++)e.data[t].set(0,0,0,0);e.count=0,this.uniforms.uPortalCount.value=0}isInPortalHole(e,t){const{count:i,data:r}=this.portalHoles;for(let s=0;s<i;s++){const o=r[s],a=e-o.x,l=t-o.y;if(a*a+l*l<o.z*o.z)return!0}return!1}_start(){this._rafId=requestAnimationFrame(this._boundAnimate)}_animate(e){this._rafId=requestAnimationFrame(this._boundAnimate);const t=e-(this.time.lastFrame||e);this.time.lastFrame=e;let i=!1;if(this.time.mode==="irl"){const s=this._getLocalSolarTime();Math.abs(this.time.current-s)>.01&&(this.time.current=s,i=!0)}else if(this.time.mode==="auto"){const s=4e-4*this.time.speed;this.time.current=(this.time.current+t*s)%24,i=!0}if(i&&e-this._lastTimeUIUpdate>200&&(this._lastTimeUIUpdate=e,qt.setState({timeCurrent:this.time.current})),this.uniforms.uTime.value=e*.001,xt.customUniforms?.uTime&&(xt.customUniforms.uTime.value=e*.001),this.matAviationLight){const s=Math.pow(Math.sin(e*.002),16),o=this.time.current>18||this.time.current<6;this.matAviationLight.opacity=o?s:0}if(this.matLampFlare){const s=this.time.current;let o=0;s>19||s<5?o=.8:s>=18&&s<=19?o=(s-18)*.8:s>=5&&s<=6&&(o=(1-(s-5))*.8),this.matLampFlare.opacity=o}if(qt.getState().autoExposure){const s=Math.abs(this.time.current-12),o=ai.smoothstep(s,5,7.5),a=ai.lerp(.8,2.25,o);this._currentExposure=ai.lerp(this._currentExposure,a,.05),this.renderer.toneMappingExposure=this._currentExposure}if(i&&e-this._lastLightingUpdate>100&&(this._lastLightingUpdate=e,tf(this.time.current),this._applyShadowToggle(qt.getState().shadowsEnabled),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity),this._shadowsDirty=!0),this.mode==="DIORAMA"&&this.isFlyMode)this._updateFlyPhysics(t),this._shadowsDirty=!0;else if(this.mode==="SIM"&&$t.isActive&&!this.isPaused){this._shadowsDirty=!0;const s=Math.min(.1,t/1e3);_L(s,this,Xt,sf,this.isInPortalHole.bind(this));const o=this.camera.position.x,a=this.camera.position.z;this.center.x=o,this.center.z=a,this.uniforms.uCenter.value.set(o,a),e-this._lastCullingUpdate>200&&(this._lastCullingUpdate=e,this.updateStyles?.())}if((this.mode==="STUDIO"||this.mode==="DIORAMA")&&this.controls?.target&&this.uniforms.uCenter.value.set(this.controls.target.x,this.controls.target.z),this.controls?.enabled&&!this.isFlyMode&&!$t.isActive&&this.controls.update(),this.camera.updateMatrixWorld(),xt.csm&&(VR(this.camera),this._shadowsDirty&&e-this._lastShadowUpdate>50)){this._lastShadowUpdate=e,this._shadowsDirty=!1;for(const s of xt.csm.lights)s.shadow.needsUpdate=!0}this._updateUndergroundState(t);const r=this.camera.zoom??1;(this._prevZoom===void 0||Math.abs(r-this._prevZoom)>.005)&&(this._prevZoom=r,this.canvas.dispatchEvent(new CustomEvent("engine:cullingupdate"))),!this.renderer.getContext().isContextLost()&&this.renderer.render(this.scene,this.camera)}_updateUndergroundState(e){const t=this.underground;t.targetFactor=this.playerIsUnderground?1:0;const i=Math.min(.1,e/1e3),r=1-Math.exp(-i*5);if(t.factor+=(t.targetFactor-t.factor)*r,t.factor<5e-4&&(t.factor=0),t.factor>.9995&&(t.factor=1),t.factor>.95?t.state="UNDERGROUND":t.factor<.05?t.state="SURFACE":t.state="TRANSITIONING",t.factor>0&&xt.csm){const s=t._baseSunI??xt.csm.lights[0]?.intensity??1,o=1-t.factor*.98;for(const a of xt.csm.lights)a.intensity=s*o;if(xt.skyLight){const a=t._baseSkyI??xt.skyLight.intensity;xt.skyLight.intensity=a*(1-t.factor*.85)+t.factor*.05}this.scene.background?.isColor&&this.scene.background.lerp(zP,t.factor)}}_updateFlyPhysics(e){const t=Math.min(.1,e/1e3),i=this.keyState.ShiftLeft||this.keyState.ShiftRight?120:30,r=new D,s=new D;this.camera.getWorldDirection(r),s.crossVectors(r,this.camera.up).normalize();const o=new D;(this.keyState.KeyW||this.keyState.ArrowUp)&&o.addScaledVector(r,i*t),(this.keyState.KeyS||this.keyState.ArrowDown)&&o.addScaledVector(r,-i*t),(this.keyState.KeyA||this.keyState.ArrowLeft)&&o.addScaledVector(s,-i*t),(this.keyState.KeyD||this.keyState.ArrowRight)&&o.addScaledVector(s,i*t),this.keyState.KeyE&&(o.y+=i*t),this.keyState.KeyQ&&(o.y-=i*t),this.camera.position.add(o)}_getLocalSolarTime(){const e=this.meta?.lon??0,t=new Date;return(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600+e/15+24)%24}shutdown(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null);for(const e of this._storeUnsubs)e();this._storeUnsubs=[],this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._keyDown&&window.removeEventListener("keydown",this._keyDown),this._keyUp&&window.removeEventListener("keyup",this._keyUp),this._onPointerMousedown&&this.canvas.removeEventListener("mousedown",this._onPointerMousedown),this._onPointerLockChange&&document.removeEventListener("pointerlockchange",this._onPointerLockChange),this._onPointerMousemove&&document.removeEventListener("mousemove",this._onPointerMousemove),this._onVisibilityChange&&document.removeEventListener("visibilitychange",this._onVisibilityChange),this.controls?.dispose(),this.parkMaskTarget?.dispose(),this.scene?.traverse(e=>{e.geometry?.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i?.dispose()}),this.renderer?.dispose()}}const kP=1280;function BP(n){const e=Math.min(1,kP/Math.max(n.w,n.h));return{w:Math.round(n.w*e),h:Math.round(n.h*e)}}function HP(){const n=tr.useRef(null),e=tr.useRef(null),t=qt(o=>o.canvasPreset),i=Vi[t]??Vi.hd,{w:r,h:s}=BP(i);return tr.useEffect(()=>{const o=n.current,a=e.current;if(!o||!a)return;const l=()=>{const u=Math.min(a.clientWidth/r,a.clientHeight/s);o.style.width=`${Math.floor(r*u)}px`,o.style.height=`${Math.floor(s*u)}px`},c=new ResizeObserver(l);return c.observe(a),l(),()=>c.disconnect()},[r,s]),tr.useEffect(()=>{const o=n.current;if(!o)return;let a=null,l=!0;const{setMeta:c,setLoading:u,setCityList:h,setActiveCityKey:f}=qt.getState();fetch("/cache/cities/index.json").then(_=>_.json()).then(_=>h(_)).catch(()=>{});const p=localStorage.getItem("activeCityKey"),g=p?`/cache/cities/${p}/metadata.json`:"/metadata.json";return fetch(g).then(_=>{const v=_.headers.get("content-type")??"";if(!_.ok||v.includes("text/html"))throw new Error(`metadata: ${_.status||"not found"}`);return _.json()}).then(_=>{if(!l)return;const v=(_.data_path??"").replace(/\/$/,"").split("/"),d=v[v.length-1]||p||"";d&&(localStorage.setItem("activeCityKey",d),f(d)),c(_),a=new by(o,_)}).catch(_=>{console.error("[CanvasContainer]",_),l&&(p&&(localStorage.removeItem("activeCityKey"),f(null)),a=new by(o,null),u(!1))}),()=>{l=!1,a?.shutdown()}},[]),Ee.jsx("div",{ref:e,className:"flex-1 flex items-center justify-center overflow-hidden",style:{background:"#1a1a1a",padding:"32px"},children:Ee.jsx("canvas",{ref:n,style:{display:"block",boxShadow:"0 8px 32px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.4)"},tabIndex:-1})})}function VP(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;if(n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(const[i,r]of n)if(!Object.is(r,e.get(i)))return!1;return!0}if(n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(const i of n)if(!e.has(i))return!1;return!0}const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(const i of t)if(!Object.prototype.hasOwnProperty.call(e,i)||!Object.is(n[i],e[i]))return!1;return!0}const{useRef:GP}=By;function WP(n){const e=GP();return t=>{const i=n(t);return VP(e.current,i)?e.current:e.current=i}}function Ay(n){const e=Math.floor(n),t=String(Math.floor(n%1*60)).padStart(2,"0");return`${e}:${t}`}function Ds({label:n,children:e,defaultOpen:t=!0}){const[i,r]=tr.useState(t);return Ee.jsxs(Ee.Fragment,{children:[Ee.jsxs("button",{onClick:()=>r(s=>!s),className:"w-full px-4 pt-4 pb-1.5 flex items-center justify-between group border-t border-zinc-900 first:border-t-0",children:[Ee.jsx("span",{className:"text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600 group-hover:text-zinc-400 transition-colors select-none",children:n}),Ee.jsx("span",{className:`text-zinc-700 group-hover:text-zinc-500 transition-all duration-150 text-[8px] ${i?"rotate-90":""}`,children:"▸"})]}),i&&e]})}function Di({label:n,value:e,children:t}){return Ee.jsxs("div",{className:"px-4 py-1 flex items-center gap-3",children:[Ee.jsx("span",{className:"text-[10px] text-zinc-500 w-16 shrink-0 text-right tabular-nums select-none",children:n}),Ee.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[t,e!==void 0&&Ee.jsx("span",{className:"text-[10px] text-zinc-400 tabular-nums ml-auto",children:e})]})]})}function yr({min:n,max:e,step:t,value:i,onChange:r}){return Ee.jsx("input",{type:"range",min:n,max:e,step:t,value:i,className:"flex-1 h-px cursor-pointer accent-zinc-400",onChange:s=>r(parseFloat(s.target.value)),onMouseUp:s=>s.target.blur(),onTouchEnd:s=>s.target.blur()})}function Cy({children:n}){return Ee.jsx("div",{className:"px-4 py-1 flex gap-1",children:n})}function tu({label:n,active:e,onClick:t}){return Ee.jsx("button",{onClick:t,className:`flex-1 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${e?"bg-zinc-700 border-zinc-600 text-zinc-100":"bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"}`,children:n})}function No({label:n,active:e,onToggle:t}){return Ee.jsx("button",{onClick:t,className:`px-2.5 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${e?"bg-zinc-700 border-zinc-600 text-zinc-100":"bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"}`,children:n})}function XP(){const{themeName:n,setTheme:e,timeMode:t,timeCurrent:i,timeSpeed:r,setTimeMode:s,setTimeCurrent:o,setTimeSpeed:a,engineMode:l,setEngineMode:c,isOrthographic:u,toggleOrthographic:h,plinthRadius:f,setPlinthRadius:p,shadowsEnabled:g,setShadowsEnabled:_,shadowStyle:v,setShadowStyle:d,lightsVisible:x,setLightsVisible:m,buildingOpacity:S,setBuildingOpacity:T,wireOpacity:A,setWireOpacity:y,streetOpacity:E,setStreetOpacity:M,lineWeight:w,setLineWeight:L,isolationActive:k,setIsolationActive:I,parkModeActive:H,setParkModeActive:z,heroEngineActive:N,setHeroEngineActive:V,fov:U,setFov:$,panY:q,setPanY:Q,autoRotate:ie,setAutoRotate:ye,canvasPreset:j,setCanvasPreset:te,isLoading:pe,loadingProgress:re,loadingLayer:me,outlineStyle:xe,setOutlineStyle:De,meta:Be,cityList:P,activeCityKey:se,setActiveCityKey:le}=qt(WP(B=>({themeName:B.themeName,setTheme:B.setTheme,timeMode:B.timeMode,timeCurrent:B.timeCurrent,timeSpeed:B.timeSpeed,setTimeMode:B.setTimeMode,setTimeCurrent:B.setTimeCurrent,setTimeSpeed:B.setTimeSpeed,engineMode:B.engineMode,setEngineMode:B.setEngineMode,isOrthographic:B.isOrthographic,toggleOrthographic:B.toggleOrthographic,plinthRadius:B.plinthRadius,setPlinthRadius:B.setPlinthRadius,shadowsEnabled:B.shadowsEnabled,setShadowsEnabled:B.setShadowsEnabled,shadowStyle:B.shadowStyle,setShadowStyle:B.setShadowStyle,lightsVisible:B.lightsVisible,setLightsVisible:B.setLightsVisible,buildingOpacity:B.buildingOpacity,setBuildingOpacity:B.setBuildingOpacity,wireOpacity:B.wireOpacity,setWireOpacity:B.setWireOpacity,streetOpacity:B.streetOpacity,setStreetOpacity:B.setStreetOpacity,lineWeight:B.lineWeight,setLineWeight:B.setLineWeight,isolationActive:B.isolationActive,setIsolationActive:B.setIsolationActive,parkModeActive:B.parkModeActive,setParkModeActive:B.setParkModeActive,heroEngineActive:B.heroEngineActive,setHeroEngineActive:B.setHeroEngineActive,fov:B.fov,setFov:B.setFov,panY:B.panY,setPanY:B.setPanY,autoRotate:B.autoRotate,setAutoRotate:B.setAutoRotate,canvasPreset:B.canvasPreset,setCanvasPreset:B.setCanvasPreset,isLoading:B.isLoading,loadingProgress:B.loadingProgress,loadingLayer:B.loadingLayer,outlineStyle:B.outlineStyle,setOutlineStyle:B.setOutlineStyle,meta:B.meta,cityList:B.cityList,activeCityKey:B.activeCityKey,setActiveCityKey:B.setActiveCityKey}))),de=Vi[j]??Vi.hd;return Ee.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-zinc-950 select-none font-mono",children:[Ee.jsxs("aside",{className:"w-80 shrink-0 flex flex-col bg-zinc-950 border-r border-zinc-800 overflow-y-auto overflow-x-hidden",children:[Ee.jsxs("div",{className:"px-4 py-3 border-b border-zinc-800",children:[Ee.jsx("p",{className:"text-[11px] font-medium text-zinc-200 tracking-widest uppercase",children:"Vitro Omni-Engine"}),P.length>0?Ee.jsx("select",{className:"mt-1.5 w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600 disabled:opacity-40",value:se??"",onChange:B=>{localStorage.setItem("activeCityKey",B.target.value),window.location.reload()},children:P.map(B=>Ee.jsx("option",{value:B.key,children:B.city},B.key))}):Be?.city&&Ee.jsx("p",{className:"text-[10px] text-zinc-500 mt-0.5",children:Be.city}),Be?.region&&Ee.jsx("p",{className:"text-[9px] text-zinc-600 mt-0.5",children:Be.region})]}),Ee.jsx(Ds,{label:"Mode",children:Ee.jsx(Cy,{children:["STUDIO","DIORAMA","SIM"].map(B=>Ee.jsx(tu,{label:B,active:l===B,onClick:()=>c(B)},B))})}),Ee.jsxs(Ds,{label:"Time of Day",children:[Ee.jsx(Cy,{children:["manual","auto","irl"].map(B=>Ee.jsx(tu,{label:B.toUpperCase(),active:t===B,onClick:()=>s(B)},B))}),t==="manual"&&Ee.jsx(Di,{label:"Time",value:Ay(i),children:Ee.jsx(yr,{min:0,max:24,step:.1,value:i,onChange:o})}),t==="auto"&&Ee.jsx(Di,{label:"Speed",value:`${r.toFixed(1)}×`,children:Ee.jsx(yr,{min:.1,max:30,step:.1,value:r,onChange:a})}),t==="irl"&&Ee.jsxs("p",{className:"px-4 pb-2 text-[9px] text-zinc-600 tabular-nums",children:[Ay(i)," — solar at ",Be?.lon?.toFixed(2)??"—","°"]})]}),Ee.jsxs(Ds,{label:"Camera",children:[Ee.jsx(Di,{label:"FOV",value:`${U}°`,children:Ee.jsx(yr,{min:15,max:90,step:1,value:U,onChange:$})}),Ee.jsx(Di,{label:"Pan Y",value:`${q}m`,children:Ee.jsx(yr,{min:0,max:800,step:10,value:q,onChange:Q})}),Ee.jsxs("div",{className:"px-4 pt-1 pb-3 flex gap-1",children:[Ee.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:h,children:u?"Orthographic":"Perspective"}),Ee.jsx(No,{label:"Rotate",active:ie,onToggle:()=>ye(!ie)})]})]}),Ee.jsxs(Ds,{label:"Appearance",children:[Ee.jsx("div",{className:"px-4 pb-2",children:Ee.jsx("select",{className:"w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600",value:n,onChange:B=>e(B.target.value),children:Object.keys(_u).map(B=>Ee.jsx("option",{value:B,children:B},B))})}),Ee.jsx(Di,{label:"Shadows",children:[["Soft",0],["Faint",1],["Toon",2],["Sketch",3]].map(([B,ze])=>Ee.jsx(tu,{label:B,active:v===ze,onClick:()=>d(ze)},ze))}),Ee.jsx(Di,{label:"Outlines",children:[["AA Lines","lineMat"],["Fast","native"],["None","none"]].map(([B,ze])=>Ee.jsx(tu,{label:B,active:xe===ze,onClick:()=>De(ze)},ze))}),Ee.jsx("div",{className:"pb-2"})]}),Ee.jsxs(Ds,{label:"Layers",children:[Ee.jsx(Di,{label:"Buildings",value:S.toFixed(2),children:Ee.jsx(yr,{min:0,max:1,step:.01,value:S,onChange:T})}),Ee.jsx(Di,{label:"Wireframe",value:A.toFixed(2),children:Ee.jsx(yr,{min:0,max:1,step:.01,value:A,onChange:y})}),Ee.jsx(Di,{label:"Roads",value:E.toFixed(2),children:Ee.jsx(yr,{min:0,max:1,step:.01,value:E,onChange:M})}),Ee.jsx(Di,{label:"Line Wt",value:w.toFixed(2),children:Ee.jsx(yr,{min:0,max:3,step:.05,value:w,onChange:L})}),Ee.jsx(Di,{label:"Plinth",value:`${f}m`,children:Ee.jsx(yr,{min:50,max:Be?.radius??4e3,step:25,value:f,onChange:p})}),Ee.jsx("div",{className:"pb-2"})]}),Ee.jsx(Ds,{label:"Features",children:Ee.jsxs("div",{className:"px-4 pt-1 pb-3 flex flex-wrap gap-1.5",children:[Ee.jsx(No,{label:"Shadows",active:g,onToggle:()=>_(!g)}),Ee.jsx(No,{label:"Lights",active:x,onToggle:()=>m(!x)}),Ee.jsx(No,{label:"Isolate",active:k,onToggle:()=>I(!k)}),Ee.jsx(No,{label:"Parks",active:H,onToggle:()=>z(!H)}),Ee.jsx(No,{label:"Hero",active:N,onToggle:()=>V(!N)})]})}),Ee.jsxs(Ds,{label:"Export",children:[Ee.jsxs("div",{className:"px-4 pb-2",children:[Ee.jsx("select",{className:"w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600",value:j,onChange:B=>te(B.target.value),children:Object.entries(Vi).map(([B,ze])=>Ee.jsx("option",{value:B,children:ze.label},B))}),Ee.jsxs("p",{className:"text-[9px] text-zinc-700 mt-1 tabular-nums",children:[de.w," × ",de.h," px"]})]}),Ee.jsxs("div",{className:"px-4 pb-4 flex gap-1",children:[Ee.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:PP,children:"PNG"}),Ee.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:DP,children:"STL"}),Ee.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:OP,children:"SVG Plotter"})]})]}),Ee.jsxs("div",{className:"mt-auto px-4 py-3 border-t border-zinc-900 flex flex-col gap-0.5 text-[9px] text-zinc-700",children:[Ee.jsx("a",{href:"https://www.openstreetmap.org/copyright",target:"_blank",rel:"noopener noreferrer",className:"hover:text-zinc-500 transition-colors",children:"© OpenStreetMap contributors"}),Ee.jsx("a",{href:"https://registry.opendata.aws/terrain-tiles/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-zinc-500 transition-colors",children:"AWS Terrain Tiles"}),Ee.jsx("a",{href:"https://overturemaps.org/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-zinc-500 transition-colors",children:"Overture Maps Foundation"})]})]}),Ee.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[Ee.jsx(HP,{}),Ee.jsx("div",{className:"absolute bottom-3 right-4 pointer-events-none",children:Ee.jsxs("span",{className:"text-[9px] text-zinc-700 tabular-nums",children:[de.w," × ",de.h]})}),pe&&Ee.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",style:{background:"rgba(10,10,10,0.88)"},children:[Ee.jsx("p",{className:"text-[9px] uppercase tracking-[0.25em] text-zinc-500 mb-4",children:me||"Initialising"}),Ee.jsx("div",{className:"w-48 h-px bg-zinc-800 rounded-full overflow-hidden",children:Ee.jsx("div",{className:"h-full bg-zinc-400 transition-all duration-200",style:{width:`${re}%`}})}),Ee.jsxs("p",{className:"text-[9px] text-zinc-600 mt-3 tabular-nums",children:[re,"%"]})]})]})]})}hd.createRoot(document.getElementById("root")).render(Ee.jsx(XP,{}));
