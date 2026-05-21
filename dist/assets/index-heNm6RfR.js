(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Dy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Iy={exports:{}},ff={},Ny={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wl=Symbol.for("react.element"),JS=Symbol.for("react.portal"),QS=Symbol.for("react.fragment"),eM=Symbol.for("react.strict_mode"),tM=Symbol.for("react.profiler"),nM=Symbol.for("react.provider"),iM=Symbol.for("react.context"),rM=Symbol.for("react.forward_ref"),sM=Symbol.for("react.suspense"),oM=Symbol.for("react.memo"),aM=Symbol.for("react.lazy"),Sg=Symbol.iterator;function lM(n){return n===null||typeof n!="object"?null:(n=Sg&&n[Sg]||n["@@iterator"],typeof n=="function"?n:null)}var Uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,zy={};function Aa(n,e,t){this.props=n,this.context=e,this.refs=zy,this.updater=t||Uy}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Aa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ky(){}ky.prototype=Aa.prototype;function tm(n,e,t){this.props=n,this.context=e,this.refs=zy,this.updater=t||Uy}var nm=tm.prototype=new ky;nm.constructor=tm;Oy(nm,Aa.prototype);nm.isPureReactComponent=!0;var Mg=Array.isArray,Fy=Object.prototype.hasOwnProperty,im={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function Hy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fy.call(e,i)&&!By.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wl,type:n,key:s,ref:o,props:r,_owner:im.current}}function cM(n,e){return{$$typeof:Wl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function rm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Wl}function uM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var wg=/\/+/g;function qf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?uM(""+n.key):e.toString(36)}function iu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Wl:case JS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+qf(o,0):i,Mg(r)?(t="",n!=null&&(t=n.replace(wg,"$&/")+"/"),iu(r,e,t,"",function(c){return c})):r!=null&&(rm(r)&&(r=cM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+qf(s,a);o+=iu(s,e,t,l,r)}else if(l=lM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+qf(s,a++),o+=iu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(n,e,t){if(n==null)return n;var i=[],r=0;return iu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function fM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Wn={current:null},ru={transition:null},dM={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:ru,ReactCurrentOwner:im};function Vy(){throw Error("act(...) is not supported in production builds of React.")}St.Children={map:Jl,forEach:function(n,e,t){Jl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Jl(n,function(){e++}),e},toArray:function(n){return Jl(n,function(e){return e})||[]},only:function(n){if(!rm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};St.Component=Aa;St.Fragment=QS;St.Profiler=tM;St.PureComponent=tm;St.StrictMode=eM;St.Suspense=sM;St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dM;St.act=Vy;St.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Oy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=im.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Fy.call(e,l)&&!By.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wl,type:n.type,key:r,ref:s,props:i,_owner:o}};St.createContext=function(n){return n={$$typeof:iM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:nM,_context:n},n.Consumer=n};St.createElement=Hy;St.createFactory=function(n){var e=Hy.bind(null,n);return e.type=n,e};St.createRef=function(){return{current:null}};St.forwardRef=function(n){return{$$typeof:rM,render:n}};St.isValidElement=rm;St.lazy=function(n){return{$$typeof:aM,_payload:{_status:-1,_result:n},_init:fM}};St.memo=function(n,e){return{$$typeof:oM,type:n,compare:e===void 0?null:e}};St.startTransition=function(n){var e=ru.transition;ru.transition={};try{n()}finally{ru.transition=e}};St.unstable_act=Vy;St.useCallback=function(n,e){return Wn.current.useCallback(n,e)};St.useContext=function(n){return Wn.current.useContext(n)};St.useDebugValue=function(){};St.useDeferredValue=function(n){return Wn.current.useDeferredValue(n)};St.useEffect=function(n,e){return Wn.current.useEffect(n,e)};St.useId=function(){return Wn.current.useId()};St.useImperativeHandle=function(n,e,t){return Wn.current.useImperativeHandle(n,e,t)};St.useInsertionEffect=function(n,e){return Wn.current.useInsertionEffect(n,e)};St.useLayoutEffect=function(n,e){return Wn.current.useLayoutEffect(n,e)};St.useMemo=function(n,e){return Wn.current.useMemo(n,e)};St.useReducer=function(n,e,t){return Wn.current.useReducer(n,e,t)};St.useRef=function(n){return Wn.current.useRef(n)};St.useState=function(n){return Wn.current.useState(n)};St.useSyncExternalStore=function(n,e,t){return Wn.current.useSyncExternalStore(n,e,t)};St.useTransition=function(){return Wn.current.useTransition()};St.version="18.3.1";Ny.exports=St;var Nn=Ny.exports;const Gy=Dy(Nn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hM=Nn,pM=Symbol.for("react.element"),mM=Symbol.for("react.fragment"),gM=Object.prototype.hasOwnProperty,vM=hM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yM={key:!0,ref:!0,__self:!0,__source:!0};function Wy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gM.call(e,i)&&!yM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pM,type:n,key:s,ref:o,props:r,_owner:vM.current}}ff.Fragment=mM;ff.jsx=Wy;ff.jsxs=Wy;Iy.exports=ff;var ae=Iy.exports,hh={},Xy={exports:{}},gi={},jy={exports:{}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,$){var q=U.length;U.push($);e:for(;0<q;){var Q=q-1>>>1,ie=U[Q];if(0<r(ie,$))U[Q]=$,U[q]=ie,q=Q;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],q=U.pop();if(q!==$){U[0]=q;e:for(var Q=0,ie=U.length,xe=ie>>>1;Q<xe;){var j=2*(Q+1)-1,te=U[j],me=j+1,re=U[me];if(0>r(te,q))me<ie&&0>r(re,te)?(U[Q]=re,U[me]=q,Q=me):(U[Q]=te,U[j]=q,Q=j);else if(me<ie&&0>r(re,q))U[Q]=re,U[me]=q,Q=me;else break e}}return $}function r(U,$){var q=U.sortIndex-$.sortIndex;return q!==0?q:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(U){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=U)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function S(U){if(_=!1,m(U),!v)if(t(l)!==null)v=!0,N(T);else{var $=t(c);$!==null&&V(S,$.startTime-U)}}function T(U,$){v=!1,_&&(_=!1,h(E),E=-1),p=!0;var q=f;try{for(m($),d=t(l);d!==null&&(!(d.expirationTime>$)||U&&!P());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,f=d.priorityLevel;var ie=Q(d.expirationTime<=$);$=n.unstable_now(),typeof ie=="function"?d.callback=ie:d===t(l)&&i(l),m($)}else i(l);d=t(l)}if(d!==null)var xe=!0;else{var j=t(c);j!==null&&V(S,j.startTime-$),xe=!1}return xe}finally{d=null,f=q,p=!1}}var A=!1,y=null,E=-1,M=5,w=-1;function P(){return!(n.unstable_now()-w<M)}function F(){if(y!==null){var U=n.unstable_now();w=U;var $=!0;try{$=y(!0,U)}finally{$?I():(A=!1,y=null)}}else A=!1}var I;if(typeof x=="function")I=function(){x(F)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,z=H.port2;H.port1.onmessage=F,I=function(){z.postMessage(null)}}else I=function(){g(F,0)};function N(U){y=U,A||(A=!0,I())}function V(U,$){E=g(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,N(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var q=f;f=$;try{return U()}finally{f=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=f;f=U;try{return $()}finally{f=q}},n.unstable_scheduleCallback=function(U,$,q){var Q=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=q+ie,U={id:u++,callback:$,priorityLevel:U,startTime:q,expirationTime:ie,sortIndex:-1},q>Q?(U.sortIndex=q,e(c,U),t(l)===null&&U===t(c)&&(_?(h(E),E=-1):_=!0,V(S,q-Q))):(U.sortIndex=ie,e(l,U),v||p||(v=!0,N(T))),U},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(U){var $=f;return function(){var q=f;f=$;try{return U.apply(this,arguments)}finally{f=q}}}})(Yy);jy.exports=Yy;var xM=jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _M=Nn,pi=xM;function Te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $y=new Set,xl={};function no(n,e){ca(n,e),ca(n+"Capture",e)}function ca(n,e){for(xl[n]=e,n=0;n<e.length;n++)$y.add(e[n])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,SM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eg={},Tg={};function MM(n){return ph.call(Tg,n)?!0:ph.call(Eg,n)?!1:SM.test(n)?Tg[n]=!0:(Eg[n]=!0,!1)}function wM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function EM(n,e,t,i){if(e===null||typeof e>"u"||wM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Cn[n]=new Xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Cn[e]=new Xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Cn[n]=new Xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Cn[n]=new Xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Cn[n]=new Xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Cn[n]=new Xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Cn[n]=new Xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Cn[n]=new Xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Cn[n]=new Xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function om(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(sm,om);Cn[e]=new Xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(sm,om);Cn[e]=new Xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(sm,om);Cn[e]=new Xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Cn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!1,!1)});Cn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Cn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function am(n,e,t,i){var r=Cn.hasOwnProperty(e)?Cn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EM(e,t,r,i)&&(t=null),i||r===null?MM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Or=_M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),zo=Symbol.for("react.portal"),ko=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),qy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),um=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),bg=Symbol.iterator;function La(n){return n===null||typeof n!="object"?null:(n=bg&&n[bg]||n["@@iterator"],typeof n=="function"?n:null)}var en=Object.assign,Kf;function Ka(n){if(Kf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Kf=e&&e[1]||""}return`
`+Kf+n}var Zf=!1;function Jf(n,e){if(!n||Zf)return"";Zf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ka(n):""}function TM(n){switch(n.tag){case 5:return Ka(n.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return n=Jf(n.type,!1),n;case 11:return n=Jf(n.type.render,!1),n;case 1:return n=Jf(n.type,!0),n;default:return""}}function yh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ko:return"Fragment";case zo:return"Portal";case mh:return"Profiler";case lm:return"StrictMode";case gh:return"Suspense";case vh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ky:return(n.displayName||"Context")+".Consumer";case qy:return(n._context.displayName||"Context")+".Provider";case cm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case um:return e=n.displayName||null,e!==null?e:yh(n.type)||"Memo";case qr:e=n._payload,n=n._init;try{return yh(n(e))}catch{}}return null}function bM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ms(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AM(n){var e=Jy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=AM(n))}function Qy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Jy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xh(n,e){var t=e.checked;return en({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ag(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ms(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ex(n,e){e=e.checked,e!=null&&am(n,"checked",e,!1)}function _h(n,e){ex(n,e);var t=ms(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Sh(n,e.type,ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Cg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Sh(n,e,t){(e!=="number"||wu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Za=Array.isArray;function Qo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ms(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Mh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Te(91));return en({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Te(92));if(Za(t)){if(1<t.length)throw Error(Te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ms(t)}}function tx(n,e){var t=ms(e.value),i=ms(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Pg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function nx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?nx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,ix=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function _l(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var rl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CM=["Webkit","ms","Moz","O"];Object.keys(rl).forEach(function(n){CM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),rl[e]=rl[n]})});function rx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||rl.hasOwnProperty(n)&&rl[n]?(""+e).trim():e+"px"}function sx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=rx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var RM=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eh(n,e){if(e){if(RM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Te(62))}}function Th(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function fm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ah=null,ea=null,ta=null;function Lg(n){if(n=Yl(n)){if(typeof Ah!="function")throw Error(Te(280));var e=n.stateNode;e&&(e=gf(e),Ah(n.stateNode,n.type,e))}}function ox(n){ea?ta?ta.push(n):ta=[n]:ea=n}function ax(){if(ea){var n=ea,e=ta;if(ta=ea=null,Lg(n),e)for(n=0;n<e.length;n++)Lg(e[n])}}function lx(n,e){return n(e)}function cx(){}var Qf=!1;function ux(n,e,t){if(Qf)return n(e,t);Qf=!0;try{return lx(n,e,t)}finally{Qf=!1,(ea!==null||ta!==null)&&(cx(),ax())}}function Sl(n,e){var t=n.stateNode;if(t===null)return null;var i=gf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Te(231,e,typeof t));return t}var Ch=!1;if(Pr)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Ch=!1}function PM(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var sl=!1,Eu=null,Tu=!1,Rh=null,LM={onError:function(n){sl=!0,Eu=n}};function DM(n,e,t,i,r,s,o,a,l){sl=!1,Eu=null,PM.apply(LM,arguments)}function IM(n,e,t,i,r,s,o,a,l){if(DM.apply(this,arguments),sl){if(sl){var c=Eu;sl=!1,Eu=null}else throw Error(Te(198));Tu||(Tu=!0,Rh=c)}}function io(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Dg(n){if(io(n)!==n)throw Error(Te(188))}function NM(n){var e=n.alternate;if(!e){if(e=io(n),e===null)throw Error(Te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Dg(r),n;if(s===i)return Dg(r),e;s=s.sibling}throw Error(Te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Te(189))}}if(t.alternate!==i)throw Error(Te(190))}if(t.tag!==3)throw Error(Te(188));return t.stateNode.current===t?n:e}function dx(n){return n=NM(n),n!==null?hx(n):null}function hx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=hx(n);if(e!==null)return e;n=n.sibling}return null}var px=pi.unstable_scheduleCallback,Ig=pi.unstable_cancelCallback,UM=pi.unstable_shouldYield,OM=pi.unstable_requestPaint,rn=pi.unstable_now,zM=pi.unstable_getCurrentPriorityLevel,dm=pi.unstable_ImmediatePriority,mx=pi.unstable_UserBlockingPriority,bu=pi.unstable_NormalPriority,kM=pi.unstable_LowPriority,gx=pi.unstable_IdlePriority,df=null,ir=null;function FM(n){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(df,n,void 0,(n.current.flags&128)===128)}catch{}}var Wi=Math.clz32?Math.clz32:VM,BM=Math.log,HM=Math.LN2;function VM(n){return n>>>=0,n===0?32:31-(BM(n)/HM|0)|0}var nc=64,ic=4194304;function Ja(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Au(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ja(a):(s&=o,s!==0&&(i=Ja(s)))}else o=t&~r,o!==0?i=Ja(o):s!==0&&(i=Ja(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Wi(e),r=1<<t,i|=n[t],e&=~r;return i}function GM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Wi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=GM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ph(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vx(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function ed(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Xl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Wi(e),n[e]=t}function XM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Wi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function hm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Wi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Dt=0;function yx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var xx,pm,_x,Sx,Mx,Lh=!1,rc=[],rs=null,ss=null,os=null,Ml=new Map,wl=new Map,Jr=[],jM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ng(n,e){switch(n){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(e.pointerId)}}function Ia(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yl(e),e!==null&&pm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function YM(n,e,t,i,r){switch(e){case"focusin":return rs=Ia(rs,n,e,t,i,r),!0;case"dragenter":return ss=Ia(ss,n,e,t,i,r),!0;case"mouseover":return os=Ia(os,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ml.set(s,Ia(Ml.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wl.set(s,Ia(wl.get(s)||null,n,e,t,i,r)),!0}return!1}function wx(n){var e=Fs(n.target);if(e!==null){var t=io(e);if(t!==null){if(e=t.tag,e===13){if(e=fx(t),e!==null){n.blockedOn=e,Mx(n.priority,function(){_x(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function su(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Dh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);bh=i,t.target.dispatchEvent(i),bh=null}else return e=Yl(t),e!==null&&pm(e),n.blockedOn=t,!1;e.shift()}return!0}function Ug(n,e,t){su(n)&&t.delete(e)}function $M(){Lh=!1,rs!==null&&su(rs)&&(rs=null),ss!==null&&su(ss)&&(ss=null),os!==null&&su(os)&&(os=null),Ml.forEach(Ug),wl.forEach(Ug)}function Na(n,e){n.blockedOn===e&&(n.blockedOn=null,Lh||(Lh=!0,pi.unstable_scheduleCallback(pi.unstable_NormalPriority,$M)))}function El(n){function e(r){return Na(r,n)}if(0<rc.length){Na(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(rs!==null&&Na(rs,n),ss!==null&&Na(ss,n),os!==null&&Na(os,n),Ml.forEach(e),wl.forEach(e),t=0;t<Jr.length;t++)i=Jr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)wx(t),t.blockedOn===null&&Jr.shift()}var na=Or.ReactCurrentBatchConfig,Cu=!0;function qM(n,e,t,i){var r=Dt,s=na.transition;na.transition=null;try{Dt=1,mm(n,e,t,i)}finally{Dt=r,na.transition=s}}function KM(n,e,t,i){var r=Dt,s=na.transition;na.transition=null;try{Dt=4,mm(n,e,t,i)}finally{Dt=r,na.transition=s}}function mm(n,e,t,i){if(Cu){var r=Dh(n,e,t,i);if(r===null)ud(n,e,i,Ru,t),Ng(n,i);else if(YM(r,n,e,t,i))i.stopPropagation();else if(Ng(n,i),e&4&&-1<jM.indexOf(n)){for(;r!==null;){var s=Yl(r);if(s!==null&&xx(s),s=Dh(n,e,t,i),s===null&&ud(n,e,i,Ru,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ud(n,e,i,null,t)}}var Ru=null;function Dh(n,e,t,i){if(Ru=null,n=fm(i),n=Fs(n),n!==null)if(e=io(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ru=n,null}function Ex(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zM()){case dm:return 1;case mx:return 4;case bu:case kM:return 16;case gx:return 536870912;default:return 16}default:return 16}}var ts=null,gm=null,ou=null;function Tx(){if(ou)return ou;var n,e=gm,t=e.length,i,r="value"in ts?ts.value:ts.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ou=r.slice(n,1<i?1-i:void 0)}function au(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function Og(){return!1}function vi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:Og,this.isPropagationStopped=Og,this}return en(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vm=vi(Ca),jl=en({},Ca,{view:0,detail:0}),ZM=vi(jl),td,nd,Ua,hf=en({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ym,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ua&&(Ua&&n.type==="mousemove"?(td=n.screenX-Ua.screenX,nd=n.screenY-Ua.screenY):nd=td=0,Ua=n),td)},movementY:function(n){return"movementY"in n?n.movementY:nd}}),zg=vi(hf),JM=en({},hf,{dataTransfer:0}),QM=vi(JM),e1=en({},jl,{relatedTarget:0}),id=vi(e1),t1=en({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=vi(t1),i1=en({},Ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),r1=vi(i1),s1=en({},Ca,{data:0}),kg=vi(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=l1[n])?!!e[n]:!1}function ym(){return c1}var u1=en({},jl,{key:function(n){if(n.key){var e=o1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=au(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?a1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ym,charCode:function(n){return n.type==="keypress"?au(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?au(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f1=vi(u1),d1=en({},hf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fg=vi(d1),h1=en({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ym}),p1=vi(h1),m1=en({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=vi(m1),v1=en({},hf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=vi(v1),x1=[9,13,27,32],xm=Pr&&"CompositionEvent"in window,ol=null;Pr&&"documentMode"in document&&(ol=document.documentMode);var _1=Pr&&"TextEvent"in window&&!ol,bx=Pr&&(!xm||ol&&8<ol&&11>=ol),Bg=" ",Hg=!1;function Ax(n,e){switch(n){case"keyup":return x1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fo=!1;function S1(n,e){switch(n){case"compositionend":return Cx(e);case"keypress":return e.which!==32?null:(Hg=!0,Bg);case"textInput":return n=e.data,n===Bg&&Hg?null:n;default:return null}}function M1(n,e){if(Fo)return n==="compositionend"||!xm&&Ax(n,e)?(n=Tx(),ou=gm=ts=null,Fo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bx&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!w1[n.type]:e==="textarea"}function Rx(n,e,t,i){ox(i),e=Pu(e,"onChange"),0<e.length&&(t=new vm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var al=null,Tl=null;function E1(n){Bx(n,0)}function pf(n){var e=Vo(n);if(Qy(e))return n}function T1(n,e){if(n==="change")return e}var Px=!1;if(Pr){var rd;if(Pr){var sd="oninput"in document;if(!sd){var Gg=document.createElement("div");Gg.setAttribute("oninput","return;"),sd=typeof Gg.oninput=="function"}rd=sd}else rd=!1;Px=rd&&(!document.documentMode||9<document.documentMode)}function Wg(){al&&(al.detachEvent("onpropertychange",Lx),Tl=al=null)}function Lx(n){if(n.propertyName==="value"&&pf(Tl)){var e=[];Rx(e,Tl,n,fm(n)),ux(E1,e)}}function b1(n,e,t){n==="focusin"?(Wg(),al=e,Tl=t,al.attachEvent("onpropertychange",Lx)):n==="focusout"&&Wg()}function A1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pf(Tl)}function C1(n,e){if(n==="click")return pf(e)}function R1(n,e){if(n==="input"||n==="change")return pf(e)}function P1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Yi=typeof Object.is=="function"?Object.is:P1;function bl(n,e){if(Yi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ph.call(e,r)||!Yi(n[r],e[r]))return!1}return!0}function Xg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jg(n,e){var t=Xg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xg(t)}}function Dx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ix(){for(var n=window,e=wu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wu(n.document)}return e}function _m(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function L1(n){var e=Ix(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dx(t.ownerDocument.documentElement,t)){if(i!==null&&_m(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=jg(t,s);var o=jg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var D1=Pr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Ih=null,ll=null,Nh=!1;function Yg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nh||Bo==null||Bo!==wu(i)||(i=Bo,"selectionStart"in i&&_m(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ll&&bl(ll,i)||(ll=i,i=Pu(Ih,"onSelect"),0<i.length&&(e=new vm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Bo)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ho={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},od={},Nx={};Pr&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function mf(n){if(od[n])return od[n];if(!Ho[n])return n;var e=Ho[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Nx)return od[n]=e[t];return n}var Ux=mf("animationend"),Ox=mf("animationiteration"),zx=mf("animationstart"),kx=mf("transitionend"),Fx=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(n,e){Fx.set(n,e),no(e,[n])}for(var ad=0;ad<$g.length;ad++){var ld=$g[ad],I1=ld.toLowerCase(),N1=ld[0].toUpperCase()+ld.slice(1);xs(I1,"on"+N1)}xs(Ux,"onAnimationEnd");xs(Ox,"onAnimationIteration");xs(zx,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(kx,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function qg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,IM(i,e,void 0,n),n.currentTarget=null}function Bx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qg(r,a,c),s=l}}}if(Tu)throw n=Rh,Tu=!1,Rh=null,n}function Vt(n,e){var t=e[Fh];t===void 0&&(t=e[Fh]=new Set);var i=n+"__bubble";t.has(i)||(Hx(e,n,2,!1),t.add(i))}function cd(n,e,t){var i=0;e&&(i|=4),Hx(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Al(n){if(!n[ac]){n[ac]=!0,$y.forEach(function(t){t!=="selectionchange"&&(U1.has(t)||cd(t,!1,n),cd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,cd("selectionchange",!1,e))}}function Hx(n,e,t,i){switch(Ex(e)){case 1:var r=qM;break;case 4:r=KM;break;default:r=mm}t=r.bind(null,e,t,n),r=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ud(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ux(function(){var c=s,u=fm(t),d=[];e:{var f=Fx.get(n);if(f!==void 0){var p=vm,v=n;switch(n){case"keypress":if(au(t)===0)break e;case"keydown":case"keyup":p=f1;break;case"focusin":v="focus",p=id;break;case"focusout":v="blur",p=id;break;case"beforeblur":case"afterblur":p=id;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=QM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=p1;break;case Ux:case Ox:case zx:p=n1;break;case kx:p=g1;break;case"scroll":p=ZM;break;case"wheel":p=y1;break;case"copy":case"cut":case"paste":p=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fg}var _=(e&4)!==0,g=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,m;x!==null;){m=x;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Sl(x,h),S!=null&&_.push(Cl(x,S,m)))),g)break;x=x.return}0<_.length&&(f=new p(f,v,null,t,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==bh&&(v=t.relatedTarget||t.fromElement)&&(Fs(v)||v[Lr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Fs(v):null,v!==null&&(g=io(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=zg,S="onMouseLeave",h="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(_=Fg,S="onPointerLeave",h="onPointerEnter",x="pointer"),g=p==null?f:Vo(p),m=v==null?f:Vo(v),f=new _(S,x+"leave",p,t,u),f.target=g,f.relatedTarget=m,S=null,Fs(u)===c&&(_=new _(h,x+"enter",v,t,u),_.target=m,_.relatedTarget=g,S=_),g=S,p&&v)t:{for(_=p,h=v,x=0,m=_;m;m=uo(m))x++;for(m=0,S=h;S;S=uo(S))m++;for(;0<x-m;)_=uo(_),x--;for(;0<m-x;)h=uo(h),m--;for(;x--;){if(_===h||h!==null&&_===h.alternate)break t;_=uo(_),h=uo(h)}_=null}else _=null;p!==null&&Kg(d,f,p,_,!1),v!==null&&g!==null&&Kg(d,g,v,_,!0)}}e:{if(f=c?Vo(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=T1;else if(Vg(f))if(Px)T=R1;else{T=A1;var A=b1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=C1);if(T&&(T=T(n,c))){Rx(d,T,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Sh(f,"number",f.value)}switch(A=c?Vo(c):window,n){case"focusin":(Vg(A)||A.contentEditable==="true")&&(Bo=A,Ih=c,ll=null);break;case"focusout":ll=Ih=Bo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Yg(d,t,u);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Yg(d,t,u)}var y;if(xm)e:{switch(n){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fo?Ax(n,t)&&(E="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(bx&&t.locale!=="ko"&&(Fo||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fo&&(y=Tx()):(ts=u,gm="value"in ts?ts.value:ts.textContent,Fo=!0)),A=Pu(c,E),0<A.length&&(E=new kg(E,n,null,t,u),d.push({event:E,listeners:A}),y?E.data=y:(y=Cx(t),y!==null&&(E.data=y)))),(y=_1?S1(n,t):M1(n,t))&&(c=Pu(c,"onBeforeInput"),0<c.length&&(u=new kg("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=y))}Bx(d,e)})}function Cl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Pu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sl(n,t),s!=null&&i.unshift(Cl(n,s,r)),s=Sl(n,e),s!=null&&i.push(Cl(n,s,r))),n=n.return}return i}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Sl(t,s),l!=null&&o.unshift(Cl(t,l,a))):r||(l=Sl(t,s),l!=null&&o.push(Cl(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var O1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function Zg(n){return(typeof n=="string"?n:""+n).replace(O1,`
`).replace(z1,"")}function lc(n,e,t){if(e=Zg(e),Zg(n)!==e&&t)throw Error(Te(425))}function Lu(){}var Uh=null,Oh=null;function zh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(n){return Jg.resolve(null).then(n).catch(B1)}:kh;function B1(n){setTimeout(function(){throw n})}function fd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),El(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);El(e)}function as(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Qg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),er="__reactFiber$"+Ra,Rl="__reactProps$"+Ra,Lr="__reactContainer$"+Ra,Fh="__reactEvents$"+Ra,H1="__reactListeners$"+Ra,V1="__reactHandles$"+Ra;function Fs(n){var e=n[er];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Lr]||t[er]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Qg(n);n!==null;){if(t=n[er])return t;n=Qg(n)}return e}n=t,t=n.parentNode}return null}function Yl(n){return n=n[er]||n[Lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Te(33))}function gf(n){return n[Rl]||null}var Bh=[],Go=-1;function _s(n){return{current:n}}function Wt(n){0>Go||(n.current=Bh[Go],Bh[Go]=null,Go--)}function Bt(n,e){Go++,Bh[Go]=n.current,n.current=e}var gs={},kn=_s(gs),Jn=_s(!1),qs=gs;function ua(n,e){var t=n.type.contextTypes;if(!t)return gs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(n){return n=n.childContextTypes,n!=null}function Du(){Wt(Jn),Wt(kn)}function e0(n,e,t){if(kn.current!==gs)throw Error(Te(168));Bt(kn,e),Bt(Jn,t)}function Vx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Te(108,bM(n)||"Unknown",r));return en({},t,i)}function Iu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gs,qs=kn.current,Bt(kn,n),Bt(Jn,Jn.current),!0}function t0(n,e,t){var i=n.stateNode;if(!i)throw Error(Te(169));t?(n=Vx(n,e,qs),i.__reactInternalMemoizedMergedChildContext=n,Wt(Jn),Wt(kn),Bt(kn,n)):Wt(Jn),Bt(Jn,t)}var Sr=null,vf=!1,dd=!1;function Gx(n){Sr===null?Sr=[n]:Sr.push(n)}function G1(n){vf=!0,Gx(n)}function Ss(){if(!dd&&Sr!==null){dd=!0;var n=0,e=Dt;try{var t=Sr;for(Dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Sr=null,vf=!1}catch(r){throw Sr!==null&&(Sr=Sr.slice(n+1)),px(dm,Ss),r}finally{Dt=e,dd=!1}}return null}var Wo=[],Xo=0,Nu=null,Uu=0,Si=[],Mi=0,Ks=null,Er=1,Tr="";function Is(n,e){Wo[Xo++]=Uu,Wo[Xo++]=Nu,Nu=n,Uu=e}function Wx(n,e,t){Si[Mi++]=Er,Si[Mi++]=Tr,Si[Mi++]=Ks,Ks=n;var i=Er;n=Tr;var r=32-Wi(i)-1;i&=~(1<<r),t+=1;var s=32-Wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Er=1<<32-Wi(e)+r|t<<r|i,Tr=s+n}else Er=1<<s|t<<r|i,Tr=n}function Sm(n){n.return!==null&&(Is(n,1),Wx(n,1,0))}function Mm(n){for(;n===Nu;)Nu=Wo[--Xo],Wo[Xo]=null,Uu=Wo[--Xo],Wo[Xo]=null;for(;n===Ks;)Ks=Si[--Mi],Si[Mi]=null,Tr=Si[--Mi],Si[Mi]=null,Er=Si[--Mi],Si[Mi]=null}var hi=null,di=null,jt=!1,ki=null;function Xx(n,e){var t=wi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function n0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hi=n,di=as(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hi=n,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ks!==null?{id:Er,overflow:Tr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=wi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hi=n,di=null,!0):!1;default:return!1}}function Hh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vh(n){if(jt){var e=di;if(e){var t=e;if(!n0(n,e)){if(Hh(n))throw Error(Te(418));e=as(t.nextSibling);var i=hi;e&&n0(n,e)?Xx(i,t):(n.flags=n.flags&-4097|2,jt=!1,hi=n)}}else{if(Hh(n))throw Error(Te(418));n.flags=n.flags&-4097|2,jt=!1,hi=n}}}function i0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hi=n}function cc(n){if(n!==hi)return!1;if(!jt)return i0(n),jt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!zh(n.type,n.memoizedProps)),e&&(e=di)){if(Hh(n))throw jx(),Error(Te(418));for(;e;)Xx(n,e),e=as(e.nextSibling)}if(i0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){di=as(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}di=null}}else di=hi?as(n.stateNode.nextSibling):null;return!0}function jx(){for(var n=di;n;)n=as(n.nextSibling)}function fa(){di=hi=null,jt=!1}function wm(n){ki===null?ki=[n]:ki.push(n)}var W1=Or.ReactCurrentBatchConfig;function Oa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Te(309));var i=t.stateNode}if(!i)throw Error(Te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Te(284));if(!t._owner)throw Error(Te(290,n))}return n}function uc(n,e){throw n=Object.prototype.toString.call(e),Error(Te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function r0(n){var e=n._init;return e(n._payload)}function Yx(n){function e(h,x){if(n){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function t(h,x){if(!n)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=fs(h,x),h.index=0,h.sibling=null,h}function s(h,x,m){return h.index=m,n?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=2,x):m):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,x,m,S){return x===null||x.tag!==6?(x=xd(m,h.mode,S),x.return=h,x):(x=r(x,m),x.return=h,x)}function l(h,x,m,S){var T=m.type;return T===ko?u(h,x,m.props.children,S,m.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qr&&r0(T)===x.type)?(S=r(x,m.props),S.ref=Oa(h,x,m),S.return=h,S):(S=pu(m.type,m.key,m.props,null,h.mode,S),S.ref=Oa(h,x,m),S.return=h,S)}function c(h,x,m,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=_d(m,h.mode,S),x.return=h,x):(x=r(x,m.children||[]),x.return=h,x)}function u(h,x,m,S,T){return x===null||x.tag!==7?(x=Ys(m,h.mode,S,T),x.return=h,x):(x=r(x,m),x.return=h,x)}function d(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number")return x=xd(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:return m=pu(x.type,x.key,x.props,null,h.mode,m),m.ref=Oa(h,null,x),m.return=h,m;case zo:return x=_d(x,h.mode,m),x.return=h,x;case qr:var S=x._init;return d(h,S(x._payload),m)}if(Za(x)||La(x))return x=Ys(x,h.mode,m,null),x.return=h,x;uc(h,x)}return null}function f(h,x,m,S){var T=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,x,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:return m.key===T?l(h,x,m,S):null;case zo:return m.key===T?c(h,x,m,S):null;case qr:return T=m._init,f(h,x,T(m._payload),S)}if(Za(m)||La(m))return T!==null?null:u(h,x,m,S,null);uc(h,m)}return null}function p(h,x,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,a(x,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:return h=h.get(S.key===null?m:S.key)||null,l(x,h,S,T);case zo:return h=h.get(S.key===null?m:S.key)||null,c(x,h,S,T);case qr:var A=S._init;return p(h,x,m,A(S._payload),T)}if(Za(S)||La(S))return h=h.get(m)||null,u(x,h,S,T,null);uc(x,S)}return null}function v(h,x,m,S){for(var T=null,A=null,y=x,E=x=0,M=null;y!==null&&E<m.length;E++){y.index>E?(M=y,y=null):M=y.sibling;var w=f(h,y,m[E],S);if(w===null){y===null&&(y=M);break}n&&y&&w.alternate===null&&e(h,y),x=s(w,x,E),A===null?T=w:A.sibling=w,A=w,y=M}if(E===m.length)return t(h,y),jt&&Is(h,E),T;if(y===null){for(;E<m.length;E++)y=d(h,m[E],S),y!==null&&(x=s(y,x,E),A===null?T=y:A.sibling=y,A=y);return jt&&Is(h,E),T}for(y=i(h,y);E<m.length;E++)M=p(y,h,E,m[E],S),M!==null&&(n&&M.alternate!==null&&y.delete(M.key===null?E:M.key),x=s(M,x,E),A===null?T=M:A.sibling=M,A=M);return n&&y.forEach(function(P){return e(h,P)}),jt&&Is(h,E),T}function _(h,x,m,S){var T=La(m);if(typeof T!="function")throw Error(Te(150));if(m=T.call(m),m==null)throw Error(Te(151));for(var A=T=null,y=x,E=x=0,M=null,w=m.next();y!==null&&!w.done;E++,w=m.next()){y.index>E?(M=y,y=null):M=y.sibling;var P=f(h,y,w.value,S);if(P===null){y===null&&(y=M);break}n&&y&&P.alternate===null&&e(h,y),x=s(P,x,E),A===null?T=P:A.sibling=P,A=P,y=M}if(w.done)return t(h,y),jt&&Is(h,E),T;if(y===null){for(;!w.done;E++,w=m.next())w=d(h,w.value,S),w!==null&&(x=s(w,x,E),A===null?T=w:A.sibling=w,A=w);return jt&&Is(h,E),T}for(y=i(h,y);!w.done;E++,w=m.next())w=p(y,h,E,w.value,S),w!==null&&(n&&w.alternate!==null&&y.delete(w.key===null?E:w.key),x=s(w,x,E),A===null?T=w:A.sibling=w,A=w);return n&&y.forEach(function(F){return e(h,F)}),jt&&Is(h,E),T}function g(h,x,m,S){if(typeof m=="object"&&m!==null&&m.type===ko&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:e:{for(var T=m.key,A=x;A!==null;){if(A.key===T){if(T=m.type,T===ko){if(A.tag===7){t(h,A.sibling),x=r(A,m.props.children),x.return=h,h=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qr&&r0(T)===A.type){t(h,A.sibling),x=r(A,m.props),x.ref=Oa(h,A,m),x.return=h,h=x;break e}t(h,A);break}else e(h,A);A=A.sibling}m.type===ko?(x=Ys(m.props.children,h.mode,S,m.key),x.return=h,h=x):(S=pu(m.type,m.key,m.props,null,h.mode,S),S.ref=Oa(h,x,m),S.return=h,h=S)}return o(h);case zo:e:{for(A=m.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){t(h,x.sibling),x=r(x,m.children||[]),x.return=h,h=x;break e}else{t(h,x);break}else e(h,x);x=x.sibling}x=_d(m,h.mode,S),x.return=h,h=x}return o(h);case qr:return A=m._init,g(h,x,A(m._payload),S)}if(Za(m))return v(h,x,m,S);if(La(m))return _(h,x,m,S);uc(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,x!==null&&x.tag===6?(t(h,x.sibling),x=r(x,m),x.return=h,h=x):(t(h,x),x=xd(m,h.mode,S),x.return=h,h=x),o(h)):t(h,x)}return g}var da=Yx(!0),$x=Yx(!1),Ou=_s(null),zu=null,jo=null,Em=null;function Tm(){Em=jo=zu=null}function bm(n){var e=Ou.current;Wt(Ou),n._currentValue=e}function Gh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ia(n,e){zu=n,Em=jo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function Ti(n){var e=n._currentValue;if(Em!==n)if(n={context:n,memoizedValue:e,next:null},jo===null){if(zu===null)throw Error(Te(308));jo=n,zu.dependencies={lanes:0,firstContext:n}}else jo=jo.next=n;return e}var Bs=null;function Am(n){Bs===null?Bs=[n]:Bs.push(n)}function qx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Am(e)):(t.next=r.next,r.next=t),e.interleaved=t,Dr(n,i)}function Dr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Kr=!1;function Cm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,At&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Dr(n,t)}return r=i.interleaved,r===null?(e.next=e,Am(i)):(e.next=r.next,r.next=e),i.interleaved=e,Dr(n,t)}function lu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hm(n,t)}}function s0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ku(n,e,t,i){var r=n.updateQueue;Kr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,_=a;switch(f=e,p=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=en({},d,f);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Js|=o,n.lanes=o,n.memoizedState=d}}function o0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Te(191,r));r.call(i)}}}var $l={},rr=_s($l),Pl=_s($l),Ll=_s($l);function Hs(n){if(n===$l)throw Error(Te(174));return n}function Rm(n,e){switch(Bt(Ll,e),Bt(Pl,n),Bt(rr,$l),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wh(e,n)}Wt(rr),Bt(rr,e)}function ha(){Wt(rr),Wt(Pl),Wt(Ll)}function Zx(n){Hs(Ll.current);var e=Hs(rr.current),t=wh(e,n.type);e!==t&&(Bt(Pl,n),Bt(rr,t))}function Pm(n){Pl.current===n&&(Wt(rr),Wt(Pl))}var Kt=_s(0);function Fu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hd=[];function Lm(){for(var n=0;n<hd.length;n++)hd[n]._workInProgressVersionPrimary=null;hd.length=0}var cu=Or.ReactCurrentDispatcher,pd=Or.ReactCurrentBatchConfig,Zs=0,Qt=null,cn=null,mn=null,Bu=!1,cl=!1,Dl=0,X1=0;function Rn(){throw Error(Te(321))}function Dm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Yi(n[t],e[t]))return!1;return!0}function Im(n,e,t,i,r,s){if(Zs=s,Qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=n===null||n.memoizedState===null?q1:K1,n=t(i,r),cl){s=0;do{if(cl=!1,Dl=0,25<=s)throw Error(Te(301));s+=1,mn=cn=null,e.updateQueue=null,cu.current=Z1,n=t(i,r)}while(cl)}if(cu.current=Hu,e=cn!==null&&cn.next!==null,Zs=0,mn=cn=Qt=null,Bu=!1,e)throw Error(Te(300));return n}function Nm(){var n=Dl!==0;return Dl=0,n}function Qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Qt.memoizedState=mn=n:mn=mn.next=n,mn}function bi(){if(cn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var e=mn===null?Qt.memoizedState:mn.next;if(e!==null)mn=e,cn=n;else{if(n===null)throw Error(Te(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?Qt.memoizedState=mn=n:mn=mn.next=n}return mn}function Il(n,e){return typeof e=="function"?e(n):e}function md(n){var e=bi(),t=e.queue;if(t===null)throw Error(Te(311));t.lastRenderedReducer=n;var i=cn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Qt.lanes|=u,Js|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yi(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Qt.lanes|=s,Js|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gd(n){var e=bi(),t=e.queue;if(t===null)throw Error(Te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Yi(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Jx(){}function Qx(n,e){var t=Qt,i=bi(),r=e(),s=!Yi(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,Um(n_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mn!==null&&mn.memoizedState.tag&1){if(t.flags|=2048,Nl(9,t_.bind(null,t,i,r,e),void 0,null),gn===null)throw Error(Te(349));Zs&30||e_(t,e,r)}return r}function e_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function t_(n,e,t,i){e.value=t,e.getSnapshot=i,i_(e)&&r_(n)}function n_(n,e,t){return t(function(){i_(e)&&r_(n)})}function i_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Yi(n,t)}catch{return!0}}function r_(n){var e=Dr(n,1);e!==null&&Xi(e,n,1,-1)}function a0(n){var e=Qi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:n},e.queue=n,n=n.dispatch=$1.bind(null,Qt,n),[e.memoizedState,n]}function Nl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Qt.updateQueue,e===null?(e={lastEffect:null,stores:null},Qt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function s_(){return bi().memoizedState}function uu(n,e,t,i){var r=Qi();Qt.flags|=n,r.memoizedState=Nl(1|e,t,void 0,i===void 0?null:i)}function yf(n,e,t,i){var r=bi();i=i===void 0?null:i;var s=void 0;if(cn!==null){var o=cn.memoizedState;if(s=o.destroy,i!==null&&Dm(i,o.deps)){r.memoizedState=Nl(e,t,s,i);return}}Qt.flags|=n,r.memoizedState=Nl(1|e,t,s,i)}function l0(n,e){return uu(8390656,8,n,e)}function Um(n,e){return yf(2048,8,n,e)}function o_(n,e){return yf(4,2,n,e)}function a_(n,e){return yf(4,4,n,e)}function l_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function c_(n,e,t){return t=t!=null?t.concat([n]):null,yf(4,4,l_.bind(null,e,n),t)}function Om(){}function u_(n,e){var t=bi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Dm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function f_(n,e){var t=bi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Dm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function d_(n,e,t){return Zs&21?(Yi(t,e)||(t=vx(),Qt.lanes|=t,Js|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function j1(n,e){var t=Dt;Dt=t!==0&&4>t?t:4,n(!0);var i=pd.transition;pd.transition={};try{n(!1),e()}finally{Dt=t,pd.transition=i}}function h_(){return bi().memoizedState}function Y1(n,e,t){var i=us(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},p_(n))m_(e,t);else if(t=qx(n,e,t,i),t!==null){var r=Gn();Xi(t,n,i,r),g_(t,e,i)}}function $1(n,e,t){var i=us(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(p_(n))m_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Yi(a,o)){var l=e.interleaved;l===null?(r.next=r,Am(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=qx(n,e,r,i),t!==null&&(r=Gn(),Xi(t,n,i,r),g_(t,e,i))}}function p_(n){var e=n.alternate;return n===Qt||e!==null&&e===Qt}function m_(n,e){cl=Bu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function g_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hm(n,t)}}var Hu={readContext:Ti,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},q1={readContext:Ti,useCallback:function(n,e){return Qi().memoizedState=[n,e===void 0?null:e],n},useContext:Ti,useEffect:l0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,uu(4194308,4,l_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return uu(4194308,4,n,e)},useInsertionEffect:function(n,e){return uu(4,2,n,e)},useMemo:function(n,e){var t=Qi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Qi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Y1.bind(null,Qt,n),[i.memoizedState,n]},useRef:function(n){var e=Qi();return n={current:n},e.memoizedState=n},useState:a0,useDebugValue:Om,useDeferredValue:function(n){return Qi().memoizedState=n},useTransition:function(){var n=a0(!1),e=n[0];return n=j1.bind(null,n[1]),Qi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Qt,r=Qi();if(jt){if(t===void 0)throw Error(Te(407));t=t()}else{if(t=e(),gn===null)throw Error(Te(349));Zs&30||e_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,l0(n_.bind(null,i,s,n),[n]),i.flags|=2048,Nl(9,t_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Qi(),e=gn.identifierPrefix;if(jt){var t=Tr,i=Er;t=(i&~(1<<32-Wi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Dl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=X1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},K1={readContext:Ti,useCallback:u_,useContext:Ti,useEffect:Um,useImperativeHandle:c_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:md,useRef:s_,useState:function(){return md(Il)},useDebugValue:Om,useDeferredValue:function(n){var e=bi();return d_(e,cn.memoizedState,n)},useTransition:function(){var n=md(Il)[0],e=bi().memoizedState;return[n,e]},useMutableSource:Jx,useSyncExternalStore:Qx,useId:h_,unstable_isNewReconciler:!1},Z1={readContext:Ti,useCallback:u_,useContext:Ti,useEffect:Um,useImperativeHandle:c_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:gd,useRef:s_,useState:function(){return gd(Il)},useDebugValue:Om,useDeferredValue:function(n){var e=bi();return cn===null?e.memoizedState=n:d_(e,cn.memoizedState,n)},useTransition:function(){var n=gd(Il)[0],e=bi().memoizedState;return[n,e]},useMutableSource:Jx,useSyncExternalStore:Qx,useId:h_,unstable_isNewReconciler:!1};function Ni(n,e){if(n&&n.defaultProps){e=en({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Wh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:en({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var xf={isMounted:function(n){return(n=n._reactInternals)?io(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=us(n),s=Ar(i,r);s.payload=e,t!=null&&(s.callback=t),e=ls(n,s,r),e!==null&&(Xi(e,n,r,i),lu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=us(n),s=Ar(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ls(n,s,r),e!==null&&(Xi(e,n,r,i),lu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=us(n),r=Ar(t,i);r.tag=2,e!=null&&(r.callback=e),e=ls(n,r,i),e!==null&&(Xi(e,n,i,t),lu(e,n,i))}};function c0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bl(t,i)||!bl(r,s):!0}function v_(n,e,t){var i=!1,r=gs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ti(s):(r=Qn(e)?qs:kn.current,i=e.contextTypes,s=(i=i!=null)?ua(n,r):gs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function u0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&xf.enqueueReplaceState(e,e.state,null)}function Xh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Cm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ti(s):(s=Qn(e)?qs:kn.current,r.context=ua(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xf.enqueueReplaceState(r,r.state,null),ku(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function pa(n,e){try{var t="",i=e;do t+=TM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function vd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function jh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function y_(n,e,t){t=Ar(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Gu||(Gu=!0,np=i),jh(n,e)},t}function x_(n,e,t){t=Ar(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){jh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){jh(n,e),typeof i!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function f0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new J1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=dw.bind(null,n,e,t),e.then(n,n))}function d0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function h0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ar(-1,1),e.tag=2,ls(t,e,1))),t.lanes|=1),n)}var Q1=Or.ReactCurrentOwner,Zn=!1;function Vn(n,e,t,i){e.child=n===null?$x(e,null,t,i):da(e,n.child,t,i)}function p0(n,e,t,i,r){t=t.render;var s=e.ref;return ia(e,r),i=Im(n,e,t,i,s,r),t=Nm(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ir(n,e,r)):(jt&&t&&Sm(e),e.flags|=1,Vn(n,e,i,r),e.child)}function m0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Wm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,__(n,e,s,i,r)):(n=pu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:bl,t(o,i)&&n.ref===e.ref)return Ir(n,e,r)}return e.flags|=1,n=fs(s,i),n.ref=e.ref,n.return=e,e.child=n}function __(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(bl(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,Ir(n,e,r)}return Yh(n,e,t,i,r)}function S_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt($o,ai),ai|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Bt($o,ai),ai|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Bt($o,ai),ai|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Bt($o,ai),ai|=i;return Vn(n,e,r,t),e.child}function M_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Yh(n,e,t,i,r){var s=Qn(t)?qs:kn.current;return s=ua(e,s),ia(e,r),t=Im(n,e,t,i,s,r),i=Nm(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ir(n,e,r)):(jt&&i&&Sm(e),e.flags|=1,Vn(n,e,t,r),e.child)}function g0(n,e,t,i,r){if(Qn(t)){var s=!0;Iu(e)}else s=!1;if(ia(e,r),e.stateNode===null)fu(n,e),v_(e,t,i),Xh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ti(c):(c=Qn(t)?qs:kn.current,c=ua(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&u0(e,o,i,c),Kr=!1;var f=e.memoizedState;o.state=f,ku(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jn.current||Kr?(typeof u=="function"&&(Wh(e,t,u,i),l=e.memoizedState),(a=Kr||c0(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ni(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ti(l):(l=Qn(t)?qs:kn.current,l=ua(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&u0(e,o,i,l),Kr=!1,f=e.memoizedState,o.state=f,ku(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||Jn.current||Kr?(typeof p=="function"&&(Wh(e,t,p,i),v=e.memoizedState),(c=Kr||c0(e,t,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return $h(n,e,t,i,s,r)}function $h(n,e,t,i,r,s){M_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&t0(e,t,!1),Ir(n,e,s);i=e.stateNode,Q1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=da(e,n.child,null,s),e.child=da(e,null,a,s)):Vn(n,e,a,s),e.memoizedState=i.state,r&&t0(e,t,!0),e.child}function w_(n){var e=n.stateNode;e.pendingContext?e0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(n,e.context,!1),Rm(n,e.containerInfo)}function v0(n,e,t,i,r){return fa(),wm(r),e.flags|=256,Vn(n,e,t,i),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function E_(n,e,t){var i=e.pendingProps,r=Kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Bt(Kt,r&1),n===null)return Vh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mf(o,i,0,null),n=Ys(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Kh(t),e.memoizedState=qh,n):zm(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ew(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fs(a,s):(s=Ys(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Kh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=qh,i}return s=n.child,n=s.sibling,i=fs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function zm(n,e){return e=Mf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&wm(i),da(e,n.child,null,t),n=zm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ew(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=vd(Error(Te(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mf({mode:"visible",children:i.children},r,0,null),s=Ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&da(e,n.child,null,o),e.child.memoizedState=Kh(o),e.memoizedState=qh,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Te(419)),i=vd(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Zn||a){if(i=gn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Dr(n,r),Xi(i,n,r,-1))}return Gm(),i=vd(Error(Te(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=hw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,di=as(r.nextSibling),hi=e,jt=!0,ki=null,n!==null&&(Si[Mi++]=Er,Si[Mi++]=Tr,Si[Mi++]=Ks,Er=n.id,Tr=n.overflow,Ks=e),e=zm(e,i.children),e.flags|=4096,e)}function y0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gh(n.return,e,t)}function yd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function T_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(n,e,i.children,t),i=Kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&y0(n,t,e);else if(n.tag===19)y0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Bt(Kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Fu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),yd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Fu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}yd(e,!0,t,null,s);break;case"together":yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ir(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Js|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Te(153));if(e.child!==null){for(n=e.child,t=fs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=fs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function tw(n,e,t){switch(e.tag){case 3:w_(e),fa();break;case 5:Zx(e);break;case 1:Qn(e.type)&&Iu(e);break;case 4:Rm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Bt(Ou,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Bt(Kt,Kt.current&1),e.flags|=128,null):t&e.child.childLanes?E_(n,e,t):(Bt(Kt,Kt.current&1),n=Ir(n,e,t),n!==null?n.sibling:null);Bt(Kt,Kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return T_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Bt(Kt,Kt.current),i)break;return null;case 22:case 23:return e.lanes=0,S_(n,e,t)}return Ir(n,e,t)}var b_,Zh,A_,C_;b_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zh=function(){};A_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hs(rr.current);var s=null;switch(t){case"input":r=xh(n,r),i=xh(n,i),s=[];break;case"select":r=en({},r,{value:void 0}),i=en({},i,{value:void 0}),s=[];break;case"textarea":r=Mh(n,r),i=Mh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Lu)}Eh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Vt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C_=function(n,e,t,i){t!==i&&(e.flags|=4)};function za(n,e){if(!jt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Pn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function nw(n,e,t){var i=e.pendingProps;switch(Mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(e),null;case 1:return Qn(e.type)&&Du(),Pn(e),null;case 3:return i=e.stateNode,ha(),Wt(Jn),Wt(kn),Lm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(cc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ki!==null&&(sp(ki),ki=null))),Zh(n,e),Pn(e),null;case 5:Pm(e);var r=Hs(Ll.current);if(t=e.type,n!==null&&e.stateNode!=null)A_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Te(166));return Pn(e),null}if(n=Hs(rr.current),cc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[er]=e,i[Rl]=s,n=(e.mode&1)!==0,t){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Ag(i,s),Vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Vt("invalid",i);break;case"textarea":Rg(i,s),Vt("invalid",i)}Eh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):xl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Vt("scroll",i)}switch(t){case"input":ec(i),Cg(i,s,!0);break;case"textarea":ec(i),Pg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Lu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=nx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[er]=e,n[Rl]=i,b_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Th(t,i),t){case"dialog":Vt("cancel",n),Vt("close",n),r=i;break;case"iframe":case"object":case"embed":Vt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Qa.length;r++)Vt(Qa[r],n);r=i;break;case"source":Vt("error",n),r=i;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),r=i;break;case"details":Vt("toggle",n),r=i;break;case"input":Ag(n,i),r=xh(n,i),Vt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=en({},i,{value:void 0}),Vt("invalid",n);break;case"textarea":Rg(n,i),r=Mh(n,i),Vt("invalid",n);break;default:r=i}Eh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ix(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&_l(n,l):typeof l=="number"&&_l(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Vt("scroll",n):l!=null&&am(n,s,l,o))}switch(t){case"input":ec(n),Cg(n,i,!1);break;case"textarea":ec(n),Pg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ms(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qo(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Lu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pn(e),null;case 6:if(n&&e.stateNode!=null)C_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Te(166));if(t=Hs(Ll.current),Hs(rr.current),cc(e)){if(i=e.stateNode,t=e.memoizedProps,i[er]=e,(s=i.nodeValue!==t)&&(n=hi,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[er]=e,e.stateNode=i}return Pn(e),null;case 13:if(Wt(Kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&di!==null&&e.mode&1&&!(e.flags&128))jx(),fa(),e.flags|=98560,s=!1;else if(s=cc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Te(317));s[er]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pn(e),s=!1}else ki!==null&&(sp(ki),ki=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Kt.current&1?fn===0&&(fn=3):Gm())),e.updateQueue!==null&&(e.flags|=4),Pn(e),null);case 4:return ha(),Zh(n,e),n===null&&Al(e.stateNode.containerInfo),Pn(e),null;case 10:return bm(e.type._context),Pn(e),null;case 17:return Qn(e.type)&&Du(),Pn(e),null;case 19:if(Wt(Kt),s=e.memoizedState,s===null)return Pn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)za(s,!1);else{if(fn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Fu(n),o!==null){for(e.flags|=128,za(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Bt(Kt,Kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&rn()>ma&&(e.flags|=128,i=!0,za(s,!1),e.lanes=4194304)}else{if(!i)if(n=Fu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),za(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!jt)return Pn(e),null}else 2*rn()-s.renderingStartTime>ma&&t!==1073741824&&(e.flags|=128,i=!0,za(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rn(),e.sibling=null,t=Kt.current,Bt(Kt,i?t&1|2:t&1),e):(Pn(e),null);case 22:case 23:return Vm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ai&1073741824&&(Pn(e),e.subtreeFlags&6&&(e.flags|=8192)):Pn(e),null;case 24:return null;case 25:return null}throw Error(Te(156,e.tag))}function iw(n,e){switch(Mm(e),e.tag){case 1:return Qn(e.type)&&Du(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ha(),Wt(Jn),Wt(kn),Lm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Pm(e),null;case 13:if(Wt(Kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Te(340));fa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Wt(Kt),null;case 4:return ha(),null;case 10:return bm(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var dc=!1,In=!1,rw=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Yo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){tn(n,e,i)}else t.current=null}function Jh(n,e,t){try{t()}catch(i){tn(n,e,i)}}var x0=!1;function sw(n,e){if(Uh=Cu,n=Ix(),_m(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Oh={focusedElem:n,selectionRange:t},Cu=!1,Ye=e;Ye!==null;)if(e=Ye,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ye=n;else for(;Ye!==null;){e=Ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ni(e.type,_),g);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Te(163))}}catch(S){tn(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ye=n;break}Ye=e.return}return v=x0,x0=!1,v}function ul(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jh(e,t,s)}r=r.next}while(r!==i)}}function _f(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Qh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function R_(n){var e=n.alternate;e!==null&&(n.alternate=null,R_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[er],delete e[Rl],delete e[Fh],delete e[H1],delete e[V1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function P_(n){return n.tag===5||n.tag===3||n.tag===4}function _0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||P_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ep(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Lu));else if(i!==4&&(n=n.child,n!==null))for(ep(n,e,t),n=n.sibling;n!==null;)ep(n,e,t),n=n.sibling}function tp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(tp(n,e,t),n=n.sibling;n!==null;)tp(n,e,t),n=n.sibling}var Tn=null,Ui=!1;function Fr(n,e,t){for(t=t.child;t!==null;)L_(n,e,t),t=t.sibling}function L_(n,e,t){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(df,t)}catch{}switch(t.tag){case 5:In||Yo(t,e);case 6:var i=Tn,r=Ui;Tn=null,Fr(n,e,t),Tn=i,Ui=r,Tn!==null&&(Ui?(n=Tn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tn.removeChild(t.stateNode));break;case 18:Tn!==null&&(Ui?(n=Tn,t=t.stateNode,n.nodeType===8?fd(n.parentNode,t):n.nodeType===1&&fd(n,t),El(n)):fd(Tn,t.stateNode));break;case 4:i=Tn,r=Ui,Tn=t.stateNode.containerInfo,Ui=!0,Fr(n,e,t),Tn=i,Ui=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(t,e,o),r=r.next}while(r!==i)}Fr(n,e,t);break;case 1:if(!In&&(Yo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){tn(t,e,a)}Fr(n,e,t);break;case 21:Fr(n,e,t);break;case 22:t.mode&1?(In=(i=In)||t.memoizedState!==null,Fr(n,e,t),In=i):Fr(n,e,t);break;default:Fr(n,e,t)}}function S0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new rw),e.forEach(function(i){var r=pw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ci(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tn=a.stateNode,Ui=!1;break e;case 3:Tn=a.stateNode.containerInfo,Ui=!0;break e;case 4:Tn=a.stateNode.containerInfo,Ui=!0;break e}a=a.return}if(Tn===null)throw Error(Te(160));L_(s,o,r),Tn=null,Ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){tn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D_(e,n),e=e.sibling}function D_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(e,n),qi(n),i&4){try{ul(3,n,n.return),_f(3,n)}catch(_){tn(n,n.return,_)}try{ul(5,n,n.return)}catch(_){tn(n,n.return,_)}}break;case 1:Ci(e,n),qi(n),i&512&&t!==null&&Yo(t,t.return);break;case 5:if(Ci(e,n),qi(n),i&512&&t!==null&&Yo(t,t.return),n.flags&32){var r=n.stateNode;try{_l(r,"")}catch(_){tn(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ex(r,s),Th(a,o);var c=Th(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?sx(r,d):u==="dangerouslySetInnerHTML"?ix(r,d):u==="children"?_l(r,d):am(r,u,d,c)}switch(a){case"input":_h(r,s);break;case"textarea":tx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qo(r,!!s.multiple,s.defaultValue,!0):Qo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Rl]=s}catch(_){tn(n,n.return,_)}}break;case 6:if(Ci(e,n),qi(n),i&4){if(n.stateNode===null)throw Error(Te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){tn(n,n.return,_)}}break;case 3:if(Ci(e,n),qi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(_){tn(n,n.return,_)}break;case 4:Ci(e,n),qi(n);break;case 13:Ci(e,n),qi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bm=rn())),i&4&&S0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(In=(c=In)||u,Ci(e,n),In=c):Ci(e,n),qi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ye=n,u=n.child;u!==null;){for(d=Ye=u;Ye!==null;){switch(f=Ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:ul(4,f,f.return);break;case 1:Yo(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){tn(i,t,_)}}break;case 5:Yo(f,f.return);break;case 22:if(f.memoizedState!==null){w0(d);continue}}p!==null?(p.return=f,Ye=p):w0(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rx("display",o))}catch(_){tn(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){tn(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ci(e,n),qi(n),i&4&&S0(n);break;case 21:break;default:Ci(e,n),qi(n)}}function qi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(P_(t)){var i=t;break e}t=t.return}throw Error(Te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_l(r,""),i.flags&=-33);var s=_0(n);tp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_0(n);ep(n,a,o);break;default:throw Error(Te(161))}}catch(l){tn(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ow(n,e,t){Ye=n,I_(n)}function I_(n,e,t){for(var i=(n.mode&1)!==0;Ye!==null;){var r=Ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=dc;var c=In;if(dc=o,(In=l)&&!c)for(Ye=r;Ye!==null;)o=Ye,l=o.child,o.tag===22&&o.memoizedState!==null?E0(r):l!==null?(l.return=o,Ye=l):E0(r);for(;s!==null;)Ye=s,I_(s),s=s.sibling;Ye=r,dc=a,In=c}M0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ye=s):M0(n)}}function M0(n){for(;Ye!==null;){var e=Ye;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||_f(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ni(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&o0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}o0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&El(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Te(163))}In||e.flags&512&&Qh(e)}catch(f){tn(e,e.return,f)}}if(e===n){Ye=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ye=t;break}Ye=e.return}}function w0(n){for(;Ye!==null;){var e=Ye;if(e===n){Ye=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ye=t;break}Ye=e.return}}function E0(n){for(;Ye!==null;){var e=Ye;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{_f(4,e)}catch(l){tn(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tn(e,r,l)}}var s=e.return;try{Qh(e)}catch(l){tn(e,s,l)}break;case 5:var o=e.return;try{Qh(e)}catch(l){tn(e,o,l)}}}catch(l){tn(e,e.return,l)}if(e===n){Ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ye=a;break}Ye=e.return}}var aw=Math.ceil,Vu=Or.ReactCurrentDispatcher,km=Or.ReactCurrentOwner,Ei=Or.ReactCurrentBatchConfig,At=0,gn=null,on=null,An=0,ai=0,$o=_s(0),fn=0,Ul=null,Js=0,Sf=0,Fm=0,fl=null,qn=null,Bm=0,ma=1/0,_r=null,Gu=!1,np=null,cs=null,hc=!1,ns=null,Wu=0,dl=0,ip=null,du=-1,hu=0;function Gn(){return At&6?rn():du!==-1?du:du=rn()}function us(n){return n.mode&1?At&2&&An!==0?An&-An:W1.transition!==null?(hu===0&&(hu=vx()),hu):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:Ex(n.type)),n):1}function Xi(n,e,t,i){if(50<dl)throw dl=0,ip=null,Error(Te(185));Xl(n,t,i),(!(At&2)||n!==gn)&&(n===gn&&(!(At&2)&&(Sf|=t),fn===4&&Qr(n,An)),ei(n,i),t===1&&At===0&&!(e.mode&1)&&(ma=rn()+500,vf&&Ss()))}function ei(n,e){var t=n.callbackNode;WM(n,e);var i=Au(n,n===gn?An:0);if(i===0)t!==null&&Ig(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Ig(t),e===1)n.tag===0?G1(T0.bind(null,n)):Gx(T0.bind(null,n)),F1(function(){!(At&6)&&Ss()}),t=null;else{switch(yx(i)){case 1:t=dm;break;case 4:t=mx;break;case 16:t=bu;break;case 536870912:t=gx;break;default:t=bu}t=H_(t,N_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function N_(n,e){if(du=-1,hu=0,At&6)throw Error(Te(327));var t=n.callbackNode;if(ra()&&n.callbackNode!==t)return null;var i=Au(n,n===gn?An:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Xu(n,i);else{e=i;var r=At;At|=2;var s=O_();(gn!==n||An!==e)&&(_r=null,ma=rn()+500,js(n,e));do try{uw();break}catch(a){U_(n,a)}while(!0);Tm(),Vu.current=s,At=r,on!==null?e=0:(gn=null,An=0,e=fn)}if(e!==0){if(e===2&&(r=Ph(n),r!==0&&(i=r,e=rp(n,r))),e===1)throw t=Ul,js(n,0),Qr(n,i),ei(n,rn()),t;if(e===6)Qr(n,i);else{if(r=n.current.alternate,!(i&30)&&!lw(r)&&(e=Xu(n,i),e===2&&(s=Ph(n),s!==0&&(i=s,e=rp(n,s))),e===1))throw t=Ul,js(n,0),Qr(n,i),ei(n,rn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Te(345));case 2:Ns(n,qn,_r);break;case 3:if(Qr(n,i),(i&130023424)===i&&(e=Bm+500-rn(),10<e)){if(Au(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kh(Ns.bind(null,n,qn,_r),e);break}Ns(n,qn,_r);break;case 4:if(Qr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=rn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aw(i/1960))-i,10<i){n.timeoutHandle=kh(Ns.bind(null,n,qn,_r),i);break}Ns(n,qn,_r);break;case 5:Ns(n,qn,_r);break;default:throw Error(Te(329))}}}return ei(n,rn()),n.callbackNode===t?N_.bind(null,n):null}function rp(n,e){var t=fl;return n.current.memoizedState.isDehydrated&&(js(n,e).flags|=256),n=Xu(n,e),n!==2&&(e=qn,qn=t,e!==null&&sp(e)),n}function sp(n){qn===null?qn=n:qn.push.apply(qn,n)}function lw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Yi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(n,e){for(e&=~Fm,e&=~Sf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Wi(e),i=1<<t;n[t]=-1,e&=~i}}function T0(n){if(At&6)throw Error(Te(327));ra();var e=Au(n,0);if(!(e&1))return ei(n,rn()),null;var t=Xu(n,e);if(n.tag!==0&&t===2){var i=Ph(n);i!==0&&(e=i,t=rp(n,i))}if(t===1)throw t=Ul,js(n,0),Qr(n,e),ei(n,rn()),t;if(t===6)throw Error(Te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ns(n,qn,_r),ei(n,rn()),null}function Hm(n,e){var t=At;At|=1;try{return n(e)}finally{At=t,At===0&&(ma=rn()+500,vf&&Ss())}}function Qs(n){ns!==null&&ns.tag===0&&!(At&6)&&ra();var e=At;At|=1;var t=Ei.transition,i=Dt;try{if(Ei.transition=null,Dt=1,n)return n()}finally{Dt=i,Ei.transition=t,At=e,!(At&6)&&Ss()}}function Vm(){ai=$o.current,Wt($o)}function js(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,k1(t)),on!==null)for(t=on.return;t!==null;){var i=t;switch(Mm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Du();break;case 3:ha(),Wt(Jn),Wt(kn),Lm();break;case 5:Pm(i);break;case 4:ha();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:bm(i.type._context);break;case 22:case 23:Vm()}t=t.return}if(gn=n,on=n=fs(n.current,null),An=ai=e,fn=0,Ul=null,Fm=Sf=Js=0,qn=fl=null,Bs!==null){for(e=0;e<Bs.length;e++)if(t=Bs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Bs=null}return n}function U_(n,e){do{var t=on;try{if(Tm(),cu.current=Hu,Bu){for(var i=Qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bu=!1}if(Zs=0,mn=cn=Qt=null,cl=!1,Dl=0,km.current=null,t===null||t.return===null){fn=1,Ul=e,on=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=An,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=d0(o);if(p!==null){p.flags&=-257,h0(p,o,a,s,e),p.mode&1&&f0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){f0(s,c,e),Gm();break e}l=Error(Te(426))}}else if(jt&&a.mode&1){var g=d0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),h0(g,o,a,s,e),wm(pa(l,a));break e}}s=l=pa(l,a),fn!==4&&(fn=2),fl===null?fl=[s]:fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=y_(s,l,e);s0(s,h);break e;case 1:a=l;var x=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cs===null||!cs.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=x_(s,a,e);s0(s,S);break e}}s=s.return}while(s!==null)}k_(t)}catch(T){e=T,on===t&&t!==null&&(on=t=t.return);continue}break}while(!0)}function O_(){var n=Vu.current;return Vu.current=Hu,n===null?Hu:n}function Gm(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||!(Js&268435455)&&!(Sf&268435455)||Qr(gn,An)}function Xu(n,e){var t=At;At|=2;var i=O_();(gn!==n||An!==e)&&(_r=null,js(n,e));do try{cw();break}catch(r){U_(n,r)}while(!0);if(Tm(),At=t,Vu.current=i,on!==null)throw Error(Te(261));return gn=null,An=0,fn}function cw(){for(;on!==null;)z_(on)}function uw(){for(;on!==null&&!UM();)z_(on)}function z_(n){var e=B_(n.alternate,n,ai);n.memoizedProps=n.pendingProps,e===null?k_(n):on=e,km.current=null}function k_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=iw(t,e),t!==null){t.flags&=32767,on=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}else if(t=nw(t,e,ai),t!==null){on=t;return}if(e=e.sibling,e!==null){on=e;return}on=e=n}while(e!==null);fn===0&&(fn=5)}function Ns(n,e,t){var i=Dt,r=Ei.transition;try{Ei.transition=null,Dt=1,fw(n,e,t,i)}finally{Ei.transition=r,Dt=i}return null}function fw(n,e,t,i){do ra();while(ns!==null);if(At&6)throw Error(Te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(XM(n,s),n===gn&&(on=gn=null,An=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,H_(bu,function(){return ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ei.transition,Ei.transition=null;var o=Dt;Dt=1;var a=At;At|=4,km.current=null,sw(n,t),D_(t,n),L1(Oh),Cu=!!Uh,Oh=Uh=null,n.current=t,ow(t),OM(),At=a,Dt=o,Ei.transition=s}else n.current=t;if(hc&&(hc=!1,ns=n,Wu=r),s=n.pendingLanes,s===0&&(cs=null),FM(t.stateNode),ei(n,rn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gu)throw Gu=!1,n=np,np=null,n;return Wu&1&&n.tag!==0&&ra(),s=n.pendingLanes,s&1?n===ip?dl++:(dl=0,ip=n):dl=0,Ss(),null}function ra(){if(ns!==null){var n=yx(Wu),e=Ei.transition,t=Dt;try{if(Ei.transition=null,Dt=16>n?16:n,ns===null)var i=!1;else{if(n=ns,ns=null,Wu=0,At&6)throw Error(Te(331));var r=At;for(At|=4,Ye=n.current;Ye!==null;){var s=Ye,o=s.child;if(Ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ye=c;Ye!==null;){var u=Ye;switch(u.tag){case 0:case 11:case 15:ul(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ye=d;else for(;Ye!==null;){u=Ye;var f=u.sibling,p=u.return;if(R_(u),u===c){Ye=null;break}if(f!==null){f.return=p,Ye=f;break}Ye=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ye=o;else e:for(;Ye!==null;){if(s=Ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ul(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ye=h;break e}Ye=s.return}}var x=n.current;for(Ye=x;Ye!==null;){o=Ye;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Ye=m;else e:for(o=x;Ye!==null;){if(a=Ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_f(9,a)}}catch(T){tn(a,a.return,T)}if(a===o){Ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ye=S;break e}Ye=a.return}}if(At=r,Ss(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(df,n)}catch{}i=!0}return i}finally{Dt=t,Ei.transition=e}}return!1}function b0(n,e,t){e=pa(t,e),e=y_(n,e,1),n=ls(n,e,1),e=Gn(),n!==null&&(Xl(n,1,e),ei(n,e))}function tn(n,e,t){if(n.tag===3)b0(n,n,t);else for(;e!==null;){if(e.tag===3){b0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cs===null||!cs.has(i))){n=pa(t,n),n=x_(e,n,1),e=ls(e,n,1),n=Gn(),e!==null&&(Xl(e,1,n),ei(e,n));break}}e=e.return}}function dw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,gn===n&&(An&t)===t&&(fn===4||fn===3&&(An&130023424)===An&&500>rn()-Bm?js(n,0):Fm|=t),ei(n,e)}function F_(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=Gn();n=Dr(n,e),n!==null&&(Xl(n,e,t),ei(n,t))}function hw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),F_(n,t)}function pw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Te(314))}i!==null&&i.delete(e),F_(n,t)}var B_;B_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,tw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,jt&&e.flags&1048576&&Wx(e,Uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fu(n,e),n=e.pendingProps;var r=ua(e,kn.current);ia(e,t),r=Im(null,e,i,n,r,t);var s=Nm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,Iu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cm(e),r.updater=xf,e.stateNode=r,r._reactInternals=e,Xh(e,i,n,t),e=$h(null,e,i,!0,s,t)):(e.tag=0,jt&&s&&Sm(e),Vn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(fu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gw(i),n=Ni(i,n),r){case 0:e=Yh(null,e,i,n,t);break e;case 1:e=g0(null,e,i,n,t);break e;case 11:e=p0(null,e,i,n,t);break e;case 14:e=m0(null,e,i,Ni(i.type,n),t);break e}throw Error(Te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),Yh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),g0(n,e,i,r,t);case 3:e:{if(w_(e),n===null)throw Error(Te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kx(n,e),ku(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=pa(Error(Te(423)),e),e=v0(n,e,i,t,r);break e}else if(i!==r){r=pa(Error(Te(424)),e),e=v0(n,e,i,t,r);break e}else for(di=as(e.stateNode.containerInfo.firstChild),hi=e,jt=!0,ki=null,t=$x(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(fa(),i===r){e=Ir(n,e,t);break e}Vn(n,e,i,t)}e=e.child}return e;case 5:return Zx(e),n===null&&Vh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,zh(i,r)?o=null:s!==null&&zh(i,s)&&(e.flags|=32),M_(n,e),Vn(n,e,o,t),e.child;case 6:return n===null&&Vh(e),null;case 13:return E_(n,e,t);case 4:return Rm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=da(e,null,i,t):Vn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),p0(n,e,i,r,t);case 7:return Vn(n,e,e.pendingProps,t),e.child;case 8:return Vn(n,e,e.pendingProps.children,t),e.child;case 12:return Vn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Bt(Ou,i._currentValue),i._currentValue=o,s!==null)if(Yi(s.value,o)){if(s.children===r.children&&!Jn.current){e=Ir(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ar(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Gh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ia(e,t),r=Ti(r),i=i(r),e.flags|=1,Vn(n,e,i,t),e.child;case 14:return i=e.type,r=Ni(i,e.pendingProps),r=Ni(i.type,r),m0(n,e,i,r,t);case 15:return __(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ni(i,r),fu(n,e),e.tag=1,Qn(i)?(n=!0,Iu(e)):n=!1,ia(e,t),v_(e,i,r),Xh(e,i,r,t),$h(null,e,i,!0,n,t);case 19:return T_(n,e,t);case 22:return S_(n,e,t)}throw Error(Te(156,e.tag))};function H_(n,e){return px(n,e)}function mw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,e,t,i){return new mw(n,e,t,i)}function Wm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gw(n){if(typeof n=="function")return Wm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cm)return 11;if(n===um)return 14}return 2}function fs(n,e){var t=n.alternate;return t===null?(t=wi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Wm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ko:return Ys(t.children,r,s,e);case lm:o=8,r|=8;break;case mh:return n=wi(12,t,e,r|2),n.elementType=mh,n.lanes=s,n;case gh:return n=wi(13,t,e,r),n.elementType=gh,n.lanes=s,n;case vh:return n=wi(19,t,e,r),n.elementType=vh,n.lanes=s,n;case Zy:return Mf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case qy:o=10;break e;case Ky:o=9;break e;case cm:o=11;break e;case um:o=14;break e;case qr:o=16,i=null;break e}throw Error(Te(130,n==null?n:typeof n,""))}return e=wi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ys(n,e,t,i){return n=wi(7,n,i,e),n.lanes=t,n}function Mf(n,e,t,i){return n=wi(22,n,i,e),n.elementType=Zy,n.lanes=t,n.stateNode={isHidden:!1},n}function xd(n,e,t){return n=wi(6,n,null,e),n.lanes=t,n}function _d(n,e,t){return e=wi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function vw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xm(n,e,t,i,r,s,o,a,l){return n=new vw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cm(s),n}function yw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function V_(n){if(!n)return gs;n=n._reactInternals;e:{if(io(n)!==n||n.tag!==1)throw Error(Te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Te(171))}if(n.tag===1){var t=n.type;if(Qn(t))return Vx(n,t,e)}return e}function G_(n,e,t,i,r,s,o,a,l){return n=Xm(t,i,!0,n,r,s,o,a,l),n.context=V_(null),t=n.current,i=Gn(),r=us(t),s=Ar(i,r),s.callback=e??null,ls(t,s,r),n.current.lanes=r,Xl(n,r,i),ei(n,i),n}function wf(n,e,t,i){var r=e.current,s=Gn(),o=us(r);return t=V_(t),e.context===null?e.context=t:e.pendingContext=t,e=Ar(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ls(r,e,o),n!==null&&(Xi(n,r,o,s),lu(n,r,o)),o}function ju(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function A0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function jm(n,e){A0(n,e),(n=n.alternate)&&A0(n,e)}function xw(){return null}var W_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ym(n){this._internalRoot=n}Ef.prototype.render=Ym.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Te(409));wf(n,e,null,null)};Ef.prototype.unmount=Ym.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qs(function(){wf(null,n,null,null)}),e[Lr]=null}};function Ef(n){this._internalRoot=n}Ef.prototype.unstable_scheduleHydration=function(n){if(n){var e=Sx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Jr.length&&e!==0&&e<Jr[t].priority;t++);Jr.splice(t,0,n),t===0&&wx(n)}};function $m(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function C0(){}function _w(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ju(o);s.call(c)}}var o=G_(e,i,n,0,null,!1,!1,"",C0);return n._reactRootContainer=o,n[Lr]=o.current,Al(n.nodeType===8?n.parentNode:n),Qs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ju(l);a.call(c)}}var l=Xm(n,0,!1,null,null,!1,!1,"",C0);return n._reactRootContainer=l,n[Lr]=l.current,Al(n.nodeType===8?n.parentNode:n),Qs(function(){wf(e,l,t,i)}),l}function bf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ju(o);a.call(l)}}wf(e,o,n,r)}else o=_w(t,e,n,r,i);return ju(o)}xx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ja(e.pendingLanes);t!==0&&(hm(e,t|1),ei(e,rn()),!(At&6)&&(ma=rn()+500,Ss()))}break;case 13:Qs(function(){var i=Dr(n,1);if(i!==null){var r=Gn();Xi(i,n,1,r)}}),jm(n,1)}};pm=function(n){if(n.tag===13){var e=Dr(n,134217728);if(e!==null){var t=Gn();Xi(e,n,134217728,t)}jm(n,134217728)}};_x=function(n){if(n.tag===13){var e=us(n),t=Dr(n,e);if(t!==null){var i=Gn();Xi(t,n,e,i)}jm(n,e)}};Sx=function(){return Dt};Mx=function(n,e){var t=Dt;try{return Dt=n,e()}finally{Dt=t}};Ah=function(n,e,t){switch(e){case"input":if(_h(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=gf(i);if(!r)throw Error(Te(90));Qy(i),_h(i,r)}}}break;case"textarea":tx(n,t);break;case"select":e=t.value,e!=null&&Qo(n,!!t.multiple,e,!1)}};lx=Hm;cx=Qs;var Sw={usingClientEntryPoint:!1,Events:[Yl,Vo,gf,ox,ax,Hm]},ka={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mw={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dx(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{df=pc.inject(Mw),ir=pc}catch{}}gi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;gi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$m(e))throw Error(Te(200));return yw(n,e,null,t)};gi.createRoot=function(n,e){if(!$m(n))throw Error(Te(299));var t=!1,i="",r=W_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xm(n,1,!1,null,null,t,!1,i,r),n[Lr]=e.current,Al(n.nodeType===8?n.parentNode:n),new Ym(e)};gi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Te(188)):(n=Object.keys(n).join(","),Error(Te(268,n)));return n=dx(e),n=n===null?null:n.stateNode,n};gi.flushSync=function(n){return Qs(n)};gi.hydrate=function(n,e,t){if(!Tf(e))throw Error(Te(200));return bf(null,n,e,!0,t)};gi.hydrateRoot=function(n,e,t){if(!$m(n))throw Error(Te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=W_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=G_(e,null,n,1,t??null,r,!1,s,o),n[Lr]=e.current,Al(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ef(e)};gi.render=function(n,e,t){if(!Tf(e))throw Error(Te(200));return bf(null,n,e,!1,t)};gi.unmountComponentAtNode=function(n){if(!Tf(n))throw Error(Te(40));return n._reactRootContainer?(Qs(function(){bf(null,null,n,!1,function(){n._reactRootContainer=null,n[Lr]=null})}),!0):!1};gi.unstable_batchedUpdates=Hm;gi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tf(t))throw Error(Te(200));if(n==null||n._reactInternals===void 0)throw Error(Te(38));return bf(n,e,t,!1,i)};gi.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(n){console.error(n)}}X_(),Xy.exports=gi;var ww=Xy.exports,R0=ww;hh.createRoot=R0.createRoot,hh.hydrateRoot=R0.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="167",fo={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ew=0,P0=1,Tw=2,j_=1,Km=2,xr=3,ji=0,ti=1,Ft=2,ds=0,hs=1,ga=2,L0=3,D0=4,bw=5,Os=100,Aw=101,Cw=102,Rw=103,Pw=104,Lw=200,Dw=201,Iw=202,Nw=203,op=204,ap=205,Uw=206,Ow=207,zw=208,kw=209,Fw=210,Bw=211,Hw=212,Vw=213,Gw=214,Ww=0,Xw=1,jw=2,Yu=3,Yw=4,$w=5,qw=6,Kw=7,Zm=0,Zw=1,Jw=2,ps=0,Qw=1,Y_=2,eE=3,tE=4,nE=5,iE=6,rE=7,$_=300,va=301,ya=302,lp=303,cp=304,Af=306,up=1e3,Vs=1001,fp=1002,Un=1003,sE=1004,mc=1005,Fi=1006,Sd=1007,Gs=1008,oE=1008,Nr=1009,q_=1010,K_=1011,Ol=1012,Jm=1013,eo=1014,nr=1015,ql=1016,Qm=1017,eg=1018,xa=1020,Z_=35902,J_=1021,Q_=1022,Vi=1023,eS=1024,tS=1025,sa=1026,_a=1027,Cf=1028,tg=1029,nS=1030,ng=1031,ig=1033,mu=33776,gu=33777,vu=33778,yu=33779,dp=35840,hp=35841,pp=35842,mp=35843,gp=36196,vp=37492,yp=37496,xp=37808,_p=37809,Sp=37810,Mp=37811,wp=37812,Ep=37813,Tp=37814,bp=37815,Ap=37816,Cp=37817,Rp=37818,Pp=37819,Lp=37820,Dp=37821,xu=36492,Ip=36494,Np=36495,iS=36283,Up=36284,Op=36285,zp=36286,aE=3200,lE=3201,rg=0,cE=1,es="",Oi="srgb",Ms="srgb-linear",sg="display-p3",Rf="display-p3-linear",$u="linear",Gt="srgb",qu="rec709",Ku="p3",ho=7680,I0=519,uE=512,fE=513,dE=514,rS=515,hE=516,pE=517,mE=518,gE=519,Sa=35044,N0="300 es",br=2e3,Zu=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let U0=1234567;const oa=Math.PI/180,zl=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function og(n,e){return(n%e+e)%e}function vE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function yE(n,e,t){return n!==e?(t-n)/(e-n):0}function hl(n,e,t){return(1-t)*n+t*e}function xE(n,e,t,i){return hl(n,e,1-Math.exp(-t*i))}function _E(n,e=1){return e-Math.abs(og(n,e*2)-e)}function SE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ME(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function EE(n,e){return n+Math.random()*(e-n)}function TE(n){return n*(.5-Math.random())}function bE(n){n!==void 0&&(U0=n);let e=U0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AE(n){return n*oa}function CE(n){return n*zl}function RE(n){return(n&n-1)===0&&n!==0}function PE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function LE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function DE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const li={DEG2RAD:oa,RAD2DEG:zl,generateUUID:sr,clamp:un,euclideanModulo:og,mapLinear:vE,inverseLerp:yE,lerp:hl,damp:xE,pingpong:_E,smoothstep:SE,smootherstep:ME,randInt:wE,randFloat:EE,randFloatSpread:TE,seededRandom:bE,degToRad:AE,radToDeg:CE,isPowerOfTwo:RE,ceilPowerOfTwo:PE,floorPowerOfTwo:LE,setQuaternionFromProperEuler:DE,normalize:Lt,denormalize:Bi};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,i,r,s,o,a,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=r[0],g=r[3],h=r[6],x=r[1],m=r[4],S=r[7],T=r[2],A=r[5],y=r[8];return s[0]=o*_+a*x+l*T,s[3]=o*g+a*m+l*A,s[6]=o*h+a*S+l*y,s[1]=c*_+u*x+d*T,s[4]=c*g+u*m+d*A,s[7]=c*h+u*S+d*y,s[2]=f*_+p*x+v*T,s[5]=f*g+p*m+v*A,s[8]=f*h+p*S+v*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=t*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Md.makeScale(e,t)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new vt;function sS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ju(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function IE(){const n=Ju("canvas");return n.style.display="block",n}const O0={};function aa(n){n in O0||(O0[n]=!0,console.warn(n))}function NE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const z0=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),k0=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[Ms]:{transfer:$u,primaries:qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Oi]:{transfer:Gt,primaries:qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rf]:{transfer:$u,primaries:Ku,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(k0),fromReference:n=>n.applyMatrix3(z0)},[sg]:{transfer:Gt,primaries:Ku,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(k0),fromReference:n=>n.applyMatrix3(z0).convertLinearToSRGB()}},UE=new Set([Ms,Rf]),Pt={enabled:!0,_workingColorSpace:Ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!UE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Fa[e].toReference,r=Fa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fa[n].primaries},getTransfer:function(n){return n===es?$u:Fa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Fa[e].luminanceCoefficients)}};function la(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let po;class OE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{po===void 0&&(po=Ju("canvas")),po.width=e.width,po.height=e.height;const i=po.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=po}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ju("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=la(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(la(t[i]/255)*255):t[i]=la(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zE=0;class oS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ed(r[o].image)):s.push(Ed(r[o]))}else s=Ed(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ed(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;class zn extends ro{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Vs,r=Vs,s=Fi,o=Gs,a=Vi,l=Nr,c=zn.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=sr(),this.name="",this.source=new oS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case up:e.x=e.x-Math.floor(e.x);break;case Vs:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case up:e.y=e.y-Math.floor(e.y);break;case Vs:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=$_;zn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,S=(p+1)/2,T=(h+1)/2,A=(u+f)/4,y=(d+_)/4,E=(v+g)/4;return m>S&&m>T?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=y/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=E/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=E/s),this.set(i,r,s,t),this}let x=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FE extends ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends FE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class aS extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let g=1-a;const h=l*f+c*p+u*v+d*_,x=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const T=Math.sqrt(m),A=Math.atan2(T,h*x);g=Math.sin(g*A)/T,a=Math.sin(a*A)/T}const S=a*x;if(l=l*g+f*S,c=c*g+p*S,u=u*g+v*S,d=d*g+_*S,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*p-c*f,e[t+1]=l*v+u*f+c*d-a*p,e[t+2]=c*v+u*p+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(F0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(F0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new D,F0=new ys;class Ai{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),vc.subVectors(this.max,Ba),mo.subVectors(e.a,Ba),go.subVectors(e.b,Ba),vo.subVectors(e.c,Ba),Br.subVectors(go,mo),Hr.subVectors(vo,go),Ts.subVectors(mo,vo);let t=[0,-Br.z,Br.y,0,-Hr.z,Hr.y,0,-Ts.z,Ts.y,Br.z,0,-Br.x,Hr.z,0,-Hr.x,Ts.z,0,-Ts.x,-Br.y,Br.x,0,-Hr.y,Hr.x,0,-Ts.y,Ts.x,0];return!bd(t,mo,go,vo,vc)||(t=[1,0,0,0,1,0,0,0,1],!bd(t,mo,go,vo,vc))?!1:(yc.crossVectors(Br,Hr),t=[yc.x,yc.y,yc.z],bd(t,mo,go,vo,vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new D,new D,new D,new D,new D,new D,new D,new D],Ri=new D,gc=new Ai,mo=new D,go=new D,vo=new D,Br=new D,Hr=new D,Ts=new D,Ba=new D,vc=new D,yc=new D,bs=new D;function bd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bs.fromArray(n,s);const a=r.x*Math.abs(bs.x)+r.y*Math.abs(bs.y)+r.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=i.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HE=new Ai,Ha=new D,Ad=new D;class zr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Ad)),this.expandByPoint(Ha.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new D,Cd=new D,xc=new D,Vr=new D,Rd=new D,_c=new D,Pd=new D;class Pf{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cd.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Cd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=Vr.dot(this.direction),l=-Vr.dot(xc),c=Vr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cd).addScaledVector(xc,f),p}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const i=fr.dot(this.direction),r=fr.dot(fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,i,r,s){Rd.subVectors(t,e),_c.subVectors(i,e),Pd.crossVectors(Rd,_c);let o=this.direction.dot(Pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const l=a*this.direction.dot(_c.crossVectors(Vr,_c));if(l<0)return null;const c=a*this.direction.dot(Rd.cross(Vr));if(c<0||l+c>o)return null;const u=-a*Vr.dot(Pd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,g)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yo.setFromMatrixColumn(e,0).length(),s=1/yo.setFromMatrixColumn(e,1).length(),o=1/yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;t[0]=f+_*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=v*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,GE)}lookAt(e,t,i){const r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Gr.crossVectors(i,ri),Gr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Gr.crossVectors(i,ri)),Gr.normalize(),Sc.crossVectors(ri,Gr),r[0]=Gr.x,r[4]=Sc.x,r[8]=ri.x,r[1]=Gr.y,r[5]=Sc.y,r[9]=ri.y,r[2]=Gr.z,r[6]=Sc.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],g=i[10],h=i[14],x=i[3],m=i[7],S=i[11],T=i[15],A=r[0],y=r[4],E=r[8],M=r[12],w=r[1],P=r[5],F=r[9],I=r[13],H=r[2],z=r[6],N=r[10],V=r[14],U=r[3],$=r[7],q=r[11],Q=r[15];return s[0]=o*A+a*w+l*H+c*U,s[4]=o*y+a*P+l*z+c*$,s[8]=o*E+a*F+l*N+c*q,s[12]=o*M+a*I+l*V+c*Q,s[1]=u*A+d*w+f*H+p*U,s[5]=u*y+d*P+f*z+p*$,s[9]=u*E+d*F+f*N+p*q,s[13]=u*M+d*I+f*V+p*Q,s[2]=v*A+_*w+g*H+h*U,s[6]=v*y+_*P+g*z+h*$,s[10]=v*E+_*F+g*N+h*q,s[14]=v*M+_*I+g*V+h*Q,s[3]=x*A+m*w+S*H+T*U,s[7]=x*y+m*P+S*z+T*$,s[11]=x*E+m*F+S*N+T*q,s[15]=x*M+m*I+S*V+T*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],g=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],g=e[14],h=e[15],x=d*g*c-_*f*c+_*l*p-a*g*p-d*l*h+a*f*h,m=v*f*c-u*g*c-v*l*p+o*g*p+u*l*h-o*f*h,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,T=v*d*l-u*_*l-v*a*f+o*_*f+u*a*g-o*d*g,A=t*x+i*m+r*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/A;return e[0]=x*y,e[1]=(_*f*s-d*g*s-_*r*p+i*g*p+d*r*h-i*f*h)*y,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*h+i*l*h)*y,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*y,e[4]=m*y,e[5]=(u*g*s-v*f*s+v*r*p-t*g*p-u*r*h+t*f*h)*y,e[6]=(v*l*s-o*g*s-v*r*c+t*g*c+o*r*h-t*l*h)*y,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*y,e[8]=S*y,e[9]=(v*d*s-u*_*s-v*i*p+t*_*p+u*i*h-t*d*h)*y,e[10]=(o*_*s-v*a*s+v*i*c-t*_*c-o*i*h+t*a*h)*y,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*y,e[12]=T*y,e[13]=(u*_*r-v*d*r+v*i*f-t*_*f-u*i*g+t*d*g)*y,e[14]=(v*a*r-o*_*r-v*i*l+t*_*l+o*i*g-t*a*g)*y,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,_=o*u,g=o*d,h=a*d,x=l*c,m=l*u,S=l*d,T=i.x,A=i.y,y=i.z;return r[0]=(1-(_+h))*T,r[1]=(p+S)*T,r[2]=(v-m)*T,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(v+m)*y,r[9]=(g-x)*y,r[10]=(1-(f+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yo.set(r[0],r[1],r[2]).length();const o=yo.set(r[4],r[5],r[6]).length(),a=yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pi.copy(this);const c=1/s,u=1/o,d=1/a;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=d,Pi.elements[9]*=d,Pi.elements[10]*=d,t.setFromRotationMatrix(Pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=br){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,v;if(a===br)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Zu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=br){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let v,_;if(a===br)v=(o+s)*d,_=-2*d;else if(a===Zu)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yo=new D,Pi=new Et,VE=new D(0,0,0),GE=new D(1,1,1),Gr=new D,Sc=new D,ri=new D,B0=new Et,H0=new ys;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return H0.setFromEuler(this),this.setFromQuaternion(H0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class lS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const V0=new D,xo=new ys,dr=new Et,Mc=new D,Va=new D,XE=new D,jE=new ys,G0=new D(1,0,0),W0=new D(0,1,0),X0=new D(0,0,1),j0={type:"added"},YE={type:"removed"},_o={type:"childadded",child:null},Ld={type:"childremoved",child:null};class nn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new D,t=new mi,i=new ys,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new vt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(W0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,t){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(W0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mc.copy(e):Mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Va,Mc,this.up):dr.lookAt(Mc,Va,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),xo.setFromRotationMatrix(dr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YE),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,XE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,jE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new D(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new D,hr=new D,Dd=new D,pr=new D,So=new D,Mo=new D,Y0=new D,Id=new D,Nd=new D,Ud=new D;class Hi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Li.subVectors(e,t),r.cross(Li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Li.subVectors(r,t),hr.subVectors(i,t),Dd.subVectors(e,t);const o=Li.dot(Li),a=Li.dot(hr),l=Li.dot(Dd),c=hr.dot(hr),u=hr.dot(Dd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pr.x),l.addScaledVector(o,pr.y),l.addScaledVector(a,pr.z),l)}static isFrontFacing(e,t,i,r){return Li.subVectors(i,t),hr.subVectors(e,t),Li.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Li.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;So.subVectors(r,i),Mo.subVectors(s,i),Id.subVectors(e,i);const l=So.dot(Id),c=Mo.dot(Id);if(l<=0&&c<=0)return t.copy(i);Nd.subVectors(e,r);const u=So.dot(Nd),d=Mo.dot(Nd);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(So,o);Ud.subVectors(e,s);const p=So.dot(Ud),v=Mo.dot(Ud);if(v>=0&&p<=v)return t.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Mo,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Y0.subVectors(s,r),a=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(Y0,a);const h=1/(g+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(So,o).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Od(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Pt.workingColorSpace){if(e=og(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Od(o,s,e+1/3),this.g=Od(o,s,e),this.b=Od(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=cS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=wd(e.r),this.g=wd(e.g),this.b=wd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return Pt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(un(Dn.r*255,0,255))*65536+Math.round(un(Dn.g*255,0,255))*256+Math.round(un(Dn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Oi){Pt.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,r=Dn.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(wc);const i=hl(Wr.h,wc.h,t),r=hl(Wr.s,wc.s,t),s=hl(Wr.l,wc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new nt;nt.NAMES=cS;let $E=0;class ws extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=hs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=ap,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Yu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==op&&(i.blendSrc=this.blendSrc),this.blendDst!==ap&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ws extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new D,Ec=new ye;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return aa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class uS extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fS extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qE=0;const yi=new Et,zd=new nn,wo=new D,si=new Ai,Ga=new Ai,pn=new D;class Ut extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?fS:uS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ga.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(si.min,Ga.min),si.expandByPoint(pn),pn.addVectors(si.max,Ga.max),si.expandByPoint(pn)):(si.expandByPoint(Ga.min),si.expandByPoint(Ga.max))}si.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),pn.add(wo)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new D,l[E]=new D;const c=new D,u=new D,d=new D,f=new ye,p=new ye,v=new ye,_=new D,g=new D;function h(E,M,w){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,w),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,w),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[E].add(_),a[M].add(_),a[w].add(_),l[E].add(g),l[M].add(g),l[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let E=0,M=x.length;E<M;++E){const w=x[E],P=w.start,F=w.count;for(let I=P,H=P+F;I<H;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const m=new D,S=new D,T=new D,A=new D;function y(E){T.fromBufferAttribute(r,E),A.copy(T);const M=a[E];m.copy(M),m.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(A,M);const P=S.dot(l[E])<0?-1:1;o.setXYZW(E,m.x,m.y,m.z,P)}for(let E=0,M=x.length;E<M;++E){const w=x[E],P=w.start,F=w.count;for(let I=P,H=P+F;I<H;I+=3)y(e.getX(I+0)),y(e.getX(I+1)),y(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $0=new Et,As=new Pf,Tc=new zr,q0=new D,Eo=new D,To=new D,bo=new D,kd=new D,bc=new D,Ac=new ye,Cc=new ye,Rc=new ye,K0=new D,Z0=new D,J0=new D,Pc=new D,Lc=new D;class Zt extends nn{constructor(e=new Ut,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(kd.fromBufferAttribute(d,e),o?bc.addScaledVector(kd,u):bc.addScaledVector(kd.sub(t),u))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Tc.containsPoint(As.origin)===!1&&(As.intersectSphere(Tc,q0)===null||As.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&($0.copy(s).invert(),As.copy(e.ray).applyMatrix4($0),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],x=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,T=m;S<T;S+=3){const A=a.getX(S),y=a.getX(S+1),E=a.getX(S+2);r=Dc(this,h,e,i,c,u,d,A,y,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const x=a.getX(g),m=a.getX(g+1),S=a.getX(g+2);r=Dc(this,o,e,i,c,u,d,x,m,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],x=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,T=m;S<T;S+=3){const A=S,y=S+1,E=S+2;r=Dc(this,h,e,i,c,u,d,A,y,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const x=g,m=g+1,S=g+2;r=Dc(this,o,e,i,c,u,d,x,m,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function KE(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Lc);return c<t.near||c>t.far?null:{distance:c,point:Lc.clone(),object:n}}function Dc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,To),n.getVertexPosition(c,bo);const u=KE(n,e,t,i,Eo,To,bo,Pc);if(u){r&&(Ac.fromBufferAttribute(r,a),Cc.fromBufferAttribute(r,l),Rc.fromBufferAttribute(r,c),u.uv=Hi.getInterpolation(Pc,Eo,To,bo,Ac,Cc,Rc,new ye)),s&&(Ac.fromBufferAttribute(s,a),Cc.fromBufferAttribute(s,l),Rc.fromBufferAttribute(s,c),u.uv1=Hi.getInterpolation(Pc,Eo,To,bo,Ac,Cc,Rc,new ye)),o&&(K0.fromBufferAttribute(o,a),Z0.fromBufferAttribute(o,l),J0.fromBufferAttribute(o,c),u.normal=Hi.getInterpolation(Pc,Eo,To,bo,K0,Z0,J0,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Hi.getNormal(Eo,To,bo,d.normal),u.face=d}return u}class ni extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function v(_,g,h,x,m,S,T,A,y,E,M){const w=S/y,P=T/E,F=S/2,I=T/2,H=A/2,z=y+1,N=E+1;let V=0,U=0;const $=new D;for(let q=0;q<N;q++){const Q=q*P-I;for(let ie=0;ie<z;ie++){const xe=ie*w-F;$[_]=xe*x,$[g]=Q*m,$[h]=H,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[h]=A>0?1:-1,u.push($.x,$.y,$.z),d.push(ie/y),d.push(1-q/E),V+=1}}for(let q=0;q<E;q++)for(let Q=0;Q<y;Q++){const ie=f+Q+z*q,xe=f+Q+z*(q+1),j=f+(Q+1)+z*(q+1),te=f+(Q+1)+z*q;l.push(ie,xe,te),l.push(xe,j,te),U+=6}a.addGroup(p,U,M),p+=U,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const i=Ma(n[t]);for(const r in i)e[r]=i[r]}return e}function ZE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const ag={clone:Ma,merge:Hn};var JE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=ZE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hS extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new D,Q0=new ye,ev=new ye;class ci extends hS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Q0,ev),t.subVectors(ev,Q0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,Co=1;class eT extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(Ao,Co,e,t);r.layers=this.layers,this.add(r);const s=new ci(Ao,Co,e,t);s.layers=this.layers,this.add(s);const o=new ci(Ao,Co,e,t);o.layers=this.layers,this.add(o);const a=new ci(Ao,Co,e,t);a.layers=this.layers,this.add(a);const l=new ci(Ao,Co,e,t);l.layers=this.layers,this.add(l);const c=new ci(Ao,Co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pS extends zn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:va,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tT extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:ds});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===Gs&&(t.minFilter=Fi),new eT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fd=new D,nT=new D,iT=new vt;class Mr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fd.subVectors(i,t).cross(nT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iT.getNormalMatrix(e),r=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new zr,Ic=new D;class lg{constructor(e=new Mr,t=new Mr,i=new Mr,r=new Mr,s=new Mr,o=new Mr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],_=r[10],g=r[11],h=r[12],x=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-p,S-h).normalize(),i[1].setComponents(l+s,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+v,S+x).normalize(),i[3].setComponents(l-o,f-u,g-v,S-x).normalize(),i[4].setComponents(l-a,f-d,g-_,S-m).normalize(),t===br)i[5].setComponents(l+a,f+d,g+_,S+m).normalize();else if(t===Zu)i[5].setComponents(a,d,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ic.x=r.normal.x>0?e.max.x:e.min.x,Ic.y=r.normal.y>0?e.max.y:e.min.y,Ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,v=f.length;p<v;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Kl extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],v=[],_=[],g=[];for(let h=0;h<u;h++){const x=h*f-o;for(let m=0;m<c;m++){const S=m*d-s;v.push(S,-x,0),_.push(0,0,1),g.push(m/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const m=x+c*h,S=x+c*(h+1),T=x+1+c*(h+1),A=x+1+c*h;p.push(m,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
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
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hT=`#ifdef USE_BATCHING
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
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yT=`#ifdef USE_IRIDESCENCE
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
#endif`,xT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CT=`#define PI 3.141592653589793
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
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PT=`vec3 transformedNormal = objectNormal;
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
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UT="gl_FragColor = linearToOutputTexel( gl_FragColor );",OT=`
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
}`,zT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
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
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
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
#endif`,ib=`struct PhysicalMaterial {
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
}`,rb=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
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
#endif`,Cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ib=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gb=`float getShadowMask() {
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
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
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
#endif`,jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,fA=`#if DEPTH_PACKING == 3200
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
}`,dA=`#define DISTANCE
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
}`,hA=`#define DISTANCE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`uniform float scale;
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
}`,vA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,SA=`#define LAMBERT
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
}`,MA=`#define MATCAP
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
}`,wA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,bA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,CA=`#define STANDARD
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
}`,RA=`#define STANDARD
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
}`,PA=`#define TOON
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
}`,LA=`#define TOON
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
}`,DA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,OA=`uniform float rotation;
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
}`,zA=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:aT,alphamap_pars_fragment:lT,alphatest_fragment:cT,alphatest_pars_fragment:uT,aomap_fragment:fT,aomap_pars_fragment:dT,batching_pars_vertex:hT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:vT,iridescence_fragment:yT,bumpmap_pars_fragment:xT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:MT,clipping_planes_vertex:wT,color_fragment:ET,color_pars_fragment:TT,color_pars_vertex:bT,color_vertex:AT,common:CT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:PT,displacementmap_pars_vertex:LT,displacementmap_vertex:DT,emissivemap_fragment:IT,emissivemap_pars_fragment:NT,colorspace_fragment:UT,colorspace_pars_fragment:OT,envmap_fragment:zT,envmap_common_pars_fragment:kT,envmap_pars_fragment:FT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:ZT,envmap_vertex:HT,fog_vertex:VT,fog_pars_vertex:GT,fog_fragment:WT,fog_pars_fragment:XT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:YT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:qT,lights_pars_begin:KT,lights_toon_fragment:JT,lights_toon_pars_fragment:QT,lights_phong_fragment:eb,lights_phong_pars_fragment:tb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:rb,lights_fragment_maps:sb,lights_fragment_end:ob,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:ub,map_fragment:fb,map_pars_fragment:db,map_particle_fragment:hb,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:vb,morphcolor_vertex:yb,morphnormal_vertex:xb,morphtarget_pars_vertex:_b,morphtarget_vertex:Sb,normal_fragment_begin:Mb,normal_fragment_maps:wb,normal_pars_fragment:Eb,normal_pars_vertex:Tb,normal_vertex:bb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Cb,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Lb,opaque_fragment:Db,packing:Ib,premultiplied_alpha_fragment:Nb,project_vertex:Ub,dithering_fragment:Ob,dithering_pars_fragment:zb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Gb,skinbase_vertex:Wb,skinning_pars_vertex:Xb,skinning_vertex:jb,skinnormal_vertex:Yb,specularmap_fragment:$b,specularmap_pars_fragment:qb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Zb,transmission_fragment:Jb,transmission_pars_fragment:Qb,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:nA,worldpos_vertex:iA,background_vert:rA,background_frag:sA,backgroundCube_vert:oA,backgroundCube_frag:aA,cube_vert:lA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distanceRGBA_vert:dA,distanceRGBA_frag:hA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:vA,meshbasic_vert:yA,meshbasic_frag:xA,meshlambert_vert:_A,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:wA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:bA,meshphong_frag:AA,meshphysical_vert:CA,meshphysical_frag:RA,meshtoon_vert:PA,meshtoon_frag:LA,points_vert:DA,points_frag:IA,shadow_vert:NA,shadow_frag:UA,sprite_vert:OA,sprite_frag:zA},Fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Kn={basic:{uniforms:Hn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Hn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Hn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Hn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Hn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Hn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Hn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Hn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Hn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Hn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Hn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Hn([Fe.common,Fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Hn([Fe.lights,Fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Kn.physical={uniforms:Hn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Nc={r:0,b:0,g:0},Rs=new mi,kA=new Et;function FA(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(x){let m=x.isScene===!0?x.background:null;return m&&m.isTexture&&(m=(x.backgroundBlurriness>0?t:e).get(m)),m}function _(x){let m=!1;const S=v(x);S===null?h(a,l):S&&S.isColor&&(h(S,1),m=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,m){const S=v(m);S&&(S.isCubeTexture||S.mapping===Af)?(u===void 0&&(u=new Zt(new ni(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Ma(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rs.copy(m.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Rs)),u.material.toneMapped=Pt.getTransfer(S.colorSpace)!==Gt,(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zt(new Kl(2,2),new Ur({name:"BackgroundMaterial",uniforms:Ma(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(S.colorSpace)!==Gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,m){x.getRGB(Nc,dS(n)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(x,m=1){a.set(x),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:g}}function BA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(w,P,F,I,H){let z=!1;const N=d(I,F,P);s!==N&&(s=N,c(s.object)),z=p(w,I,F,H),z&&v(w,I,F,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(w,P,F,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,P,F){const I=F.wireframe===!0;let H=i[w.id];H===void 0&&(H={},i[w.id]=H);let z=H[P.id];z===void 0&&(z={},H[P.id]=z);let N=z[I];return N===void 0&&(N=f(l()),z[I]=N),N}function f(w){const P=[],F=[],I=[];for(let H=0;H<t;H++)P[H]=0,F[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:I,object:w,attributes:{},index:null}}function p(w,P,F,I){const H=s.attributes,z=P.attributes;let N=0;const V=F.getAttributes();for(const U in V)if(V[U].location>=0){const q=H[U];let Q=z[U];if(Q===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function v(w,P,F,I){const H={},z=P.attributes;let N=0;const V=F.getAttributes();for(const U in V)if(V[U].location>=0){let q=z[U];q===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),H[U]=Q,N++}s.attributes=H,s.attributesNum=N,s.index=I}function _(){const w=s.newAttributes;for(let P=0,F=w.length;P<F;P++)w[P]=0}function g(w){h(w,0)}function h(w,P){const F=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;F[w]=1,I[w]===0&&(n.enableVertexAttribArray(w),I[w]=1),H[w]!==P&&(n.vertexAttribDivisor(w,P),H[w]=P)}function x(){const w=s.newAttributes,P=s.enabledAttributes;for(let F=0,I=P.length;F<I;F++)P[F]!==w[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function m(w,P,F,I,H,z,N){N===!0?n.vertexAttribIPointer(w,P,F,H,z):n.vertexAttribPointer(w,P,F,I,H,z)}function S(w,P,F,I){_();const H=I.attributes,z=F.getAttributes(),N=P.defaultAttributeValues;for(const V in z){const U=z[V];if(U.location>=0){let $=H[V];if($===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const q=$.normalized,Q=$.itemSize,ie=e.get($);if(ie===void 0)continue;const xe=ie.buffer,j=ie.type,te=ie.bytesPerElement,me=j===n.INT||j===n.UNSIGNED_INT||$.gpuType===Jm;if($.isInterleavedBufferAttribute){const re=$.data,ge=re.stride,_e=$.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<U.locationSize;De++)h(U.location+De,re.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<U.locationSize;De++)g(U.location+De);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let De=0;De<U.locationSize;De++)m(U.location+De,Q/U.locationSize,j,q,ge*te,(_e+Q/U.locationSize*De)*te,me)}else{if($.isInstancedBufferAttribute){for(let re=0;re<U.locationSize;re++)h(U.location+re,$.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<U.locationSize;re++)g(U.location+re);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let re=0;re<U.locationSize;re++)m(U.location+re,Q/U.locationSize,j,q,Q*te,Q/U.locationSize*re*te,me)}}else if(N!==void 0){const q=N[V];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(U.location,q);break;case 3:n.vertexAttrib3fv(U.location,q);break;case 4:n.vertexAttrib4fv(U.location,q);break;default:n.vertexAttrib1fv(U.location,q)}}}}x()}function T(){E();for(const w in i){const P=i[w];for(const F in P){const I=P[F];for(const H in I)u(I[H].object),delete I[H];delete P[F]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const F in P){const I=P[F];for(const H in I)u(I[H].object),delete I[H];delete P[F]}delete i[w.id]}function y(w){for(const P in i){const F=i[P];if(F[w.id]===void 0)continue;const I=F[w.id];for(const H in I)u(I[H].object),delete I[H];delete F[w.id]}}function E(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function HA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];for(let _=0;_<f.length;_++)t.update(v,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function VA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Vi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===ql&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==nr&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:S,maxSamples:T}}function GA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mr,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,m=x*4;let S=h.clippingState||null;l.value=S,S=u(v,f,m,p);for(let T=0;T!==m;++T)S[T]=t[T];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const h=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,S=p;m!==_;++m,S+=4)o.copy(d[m]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function WA(n){let e=new WeakMap;function t(o,a){return a===lp?o.mapping=va:a===cp&&(o.mapping=ya),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lp||a===cp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tT(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qu extends hS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qo=4,tv=[.125,.215,.35,.446,.526,.582],zs=20,Bd=new Qu,nv=new nt;let Hd=null,Vd=0,Gd=0,Wd=!1;const Us=(1+Math.sqrt(5))/2,Ro=1/Us,iv=[new D(-Us,Ro,0),new D(Us,Ro,0),new D(-Ro,0,Us),new D(Ro,0,Us),new D(0,Us,-Ro),new D(0,Us,Ro),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Vd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===va||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:ql,format:Vi,colorSpace:Ms,depthBuffer:!1},r=sv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(s)),this._blurMaterial=jA(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Bd)}_sceneToCubeUV(e,t,i,r){const a=new ci(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nv),u.toneMapping=ps,u.autoClear=!1;const p=new Ws({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),v=new Zt(new ni,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(nv),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const m=this._cubeSize;Uc(r,x*m,h>2?m:0,m,m),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===va||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iv[(r-s-1)%iv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Zt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=s/v,g=isFinite(s)?1+Math.floor(u*_):zs;g>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zs}`);const h=[];let x=0;for(let y=0;y<zs;++y){const E=y/_,M=Math.exp(-E*E/2);h.push(M),y===0?x+=M:y<g&&(x+=2*M)}for(let y=0;y<h.length;y++)h[y]=h[y]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=v,f.mipInt.value=m-i;const S=this._sizeLods[r],T=3*S*(r>m-qo?r-m+qo:0),A=4*(this._cubeSize-S);Uc(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Bd)}}function XA(n){const e=[],t=[],i=[];let r=n;const s=n-qo+1+tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-qo?l=tv[o-n+qo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,g=2,h=1,x=new Float32Array(_*v*p),m=new Float32Array(g*v*p),S=new Float32Array(h*v*p);for(let A=0;A<p;A++){const y=A%3*2/3-1,E=A>2?0:-1,M=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];x.set(M,_*v*A),m.set(f,g*v*A);const w=[A,A,A,A,A,A];S.set(w,h*v*A)}const T=new Ut;T.setAttribute("position",new vn(x,_)),T.setAttribute("uv",new vn(m,g)),T.setAttribute("faceIndex",new vn(S,h)),e.push(T),r>qo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sv(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=Af,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jA(n,e,t){const i=new Float32Array(zs),r=new D(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cg(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function ov(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cg(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function av(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function cg(){return`

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
	`}function YA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lp||l===cp,u=l===va||l===ya;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new rv(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new rv(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $A(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,h=_.length;g<h;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let g=0,h=_.length;g<h;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let m=0,S=x.length;m<S;m+=3){const T=x[m+0],A=x[m+1],y=x[m+2];f.push(T,A,A,y,y,T)}}else if(v!==void 0){const x=v.array;_=v.version;for(let m=0,S=x.length/3-1;m<S;m+=3){const T=m+0,A=m+1,y=m+2;f.push(T,A,A,y,y,T)}}else return;const g=new(sS(f)?fS:uS)(f,1);g.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function KA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,f*o,v),t.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];t.update(g,i,1)}function d(f,p,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let h=0;for(let x=0;x<v;x++)h+=p[x];for(let x=0;x<_.length;x++)t.update(h,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ZA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function JA(n,e,t){const i=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const y=new Float32Array(T*A*4*d),E=new aS(y,T,A,d);E.type=nr,E.needsUpdate=!0;const M=S*4;for(let P=0;P<d;P++){const F=h[P],I=x[P],H=m[P],z=T*A*4*P;for(let N=0;N<F.count;N++){const V=N*M;v===!0&&(r.fromBufferAttribute(F,N),y[z+V+0]=r.x,y[z+V+1]=r.y,y[z+V+2]=r.z,y[z+V+3]=0),_===!0&&(r.fromBufferAttribute(I,N),y[z+V+4]=r.x,y[z+V+5]=r.y,y[z+V+6]=r.z,y[z+V+7]=0),g===!0&&(r.fromBufferAttribute(H,N),y[z+V+8]=r.x,y[z+V+9]=r.y,y[z+V+10]=r.z,y[z+V+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:E,size:new ye(T,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function QA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class gS extends zn{constructor(e,t,i,r,s,o,a,l,c,u=sa){if(u!==sa&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===sa&&(i=eo),i===void 0&&u===_a&&(i=xa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vS=new zn,lv=new gS(1,1),yS=new aS,xS=new BE,_S=new pS,cv=[],uv=[],fv=new Float32Array(16),dv=new Float32Array(9),hv=new Float32Array(4);function Pa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cv[r];if(s===void 0&&(s=new Float32Array(r),cv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lf(n,e){let t=uv[e];t===void 0&&(t=new Int32Array(e),uv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function rC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;hv.set(i),n.uniformMatrix2fv(this.addr,!1,hv),hn(t,i)}}function sC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;dv.set(i),n.uniformMatrix3fv(this.addr,!1,dv),hn(t,i)}}function oC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;fv.set(i),n.uniformMatrix4fv(this.addr,!1,fv),hn(t,i)}}function aC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function cC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function uC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function fC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function pC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function mC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lv.compareFunction=rS,s=lv):s=vS,t.setTexture2D(e||s,r)}function gC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xS,r)}function vC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_S,r)}function yC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yS,r)}function xC(n){switch(n){case 5126:return eC;case 35664:return tC;case 35665:return nC;case 35666:return iC;case 35674:return rC;case 35675:return sC;case 35676:return oC;case 5124:case 35670:return aC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return fC;case 36294:return dC;case 36295:return hC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return yC}}function _C(n,e){n.uniform1fv(this.addr,e)}function SC(n,e){const t=Pa(e,this.size,2);n.uniform2fv(this.addr,t)}function MC(n,e){const t=Pa(e,this.size,3);n.uniform3fv(this.addr,t)}function wC(n,e){const t=Pa(e,this.size,4);n.uniform4fv(this.addr,t)}function EC(n,e){const t=Pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TC(n,e){const t=Pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bC(n,e){const t=Pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AC(n,e){n.uniform1iv(this.addr,e)}function CC(n,e){n.uniform2iv(this.addr,e)}function RC(n,e){n.uniform3iv(this.addr,e)}function PC(n,e){n.uniform4iv(this.addr,e)}function LC(n,e){n.uniform1uiv(this.addr,e)}function DC(n,e){n.uniform2uiv(this.addr,e)}function IC(n,e){n.uniform3uiv(this.addr,e)}function NC(n,e){n.uniform4uiv(this.addr,e)}function UC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vS,s[o])}function OC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xS,s[o])}function zC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_S,s[o])}function kC(n,e,t){const i=this.cache,r=e.length,s=Lf(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yS,s[o])}function FC(n){switch(n){case 5126:return _C;case 35664:return SC;case 35665:return MC;case 35666:return wC;case 35674:return EC;case 35675:return TC;case 35676:return bC;case 5124:case 35670:return AC;case 35667:case 35671:return CC;case 35668:case 35672:return RC;case 35669:case 35673:return PC;case 5125:return LC;case 36294:return DC;case 36295:return IC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return kC}}class BC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xC(t.type)}}class HC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FC(t.type)}}class VC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function pv(n,e){n.seq.push(e),n.map[e.id]=e}function GC(n,e,t){const i=n.name,r=i.length;for(Xd.lastIndex=0;;){const s=Xd.exec(i),o=Xd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pv(t,c===void 0?new BC(a,n,e):new HC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new VC(a),pv(t,d)),t=d}}}class _u{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function mv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WC=37297;let XC=0;function jC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function YC(n){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(n);let i;switch(e===t?i="":e===Ku&&t===qu?i="LinearDisplayP3ToLinearSRGB":e===qu&&t===Ku&&(i="LinearSRGBToLinearDisplayP3"),n){case Ms:case Rf:return[i,"LinearTransferOETF"];case Oi:case sg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jC(n.getShaderSource(e),o)}else return r}function $C(n,e){const t=YC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qC(n,e){let t;switch(e){case Qw:t="Linear";break;case Y_:t="Reinhard";break;case eE:t="OptimizedCineon";break;case tE:t="ACESFilmic";break;case iE:t="AgX";break;case rE:t="Neutral";break;case nE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new D;function KC(){Pt.getLuminanceCoefficients(Oc);const n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function JC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function el(n){return n!==""}function vv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(n){return n.replace(e2,n2)}const t2=new Map;function n2(n,e){let t=dt[e];if(t===void 0){const i=t2.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kp(t)}const i2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(n){return n.replace(i2,r2)}function r2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _v(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function s2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===j_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function o2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case va:case ya:e="ENVMAP_TYPE_CUBE";break;case Af:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ya:e="ENVMAP_MODE_REFRACTION";break}return e}function l2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case Zw:e="ENVMAP_BLENDING_MIX";break;case Jw:e="ENVMAP_BLENDING_ADD";break}return e}function c2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function u2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=s2(t),c=o2(t),u=a2(t),d=l2(t),f=c2(t),p=ZC(t),v=JC(s),_=r.createProgram();let g,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(el).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(el).join(`
`),h.length>0&&(h+=`
`)):(g=[_v(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),h=[_v(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?dt.tonemapping_pars_fragment:"",t.toneMapping!==ps?qC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$C("linearToOutputTexel",t.outputColorSpace),KC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=kp(o),o=vv(o,t),o=yv(o,t),a=kp(a),a=vv(a,t),a=yv(a,t),o=xv(o),a=xv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=x+g+o,S=x+h+a,T=mv(r,r.VERTEX_SHADER,m),A=mv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function y(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(T).trim(),H=r.getShaderInfoLog(A).trim();let z=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,A);else{const V=gv(r,T,"vertex"),U=gv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+V+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||H==="")&&(N=!1);N&&(P.diagnostics={runnable:z,programLog:F,vertexShader:{log:I,prefix:g},fragmentShader:{log:H,prefix:h}})}r.deleteShader(T),r.deleteShader(A),E=new _u(r,_),M=QC(r,_)}let E;this.getUniforms=function(){return E===void 0&&y(this),E};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,WC)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let f2=0;class d2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new h2(e),t.set(e,i)),i}}class h2{constructor(e){this.id=f2++,this.code=e,this.usedTimes=0}}function p2(n,e,t,i,r,s,o){const a=new lS,l=new d2,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,w,P,F,I){const H=F.fog,z=I.geometry,N=M.isMeshStandardMaterial?F.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),U=V&&V.mapping===Af?V.image.height:null,$=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=q!==void 0?q.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let xe,j,te,me;if($){const Ve=Kn[$];xe=Ve.vertexShader,j=Ve.fragmentShader}else xe=M.vertexShader,j=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const re=n.getRenderTarget(),ge=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,De=!!M.map,Be=!!M.matcap,L=!!V,se=!!M.aoMap,ce=!!M.lightMap,pe=!!M.bumpMap,B=!!M.normalMap,ze=!!M.displacementMap,be=!!M.emissiveMap,ke=!!M.metalnessMap,O=!!M.roughnessMap,C=M.anisotropy>0,Z=M.clearcoat>0,ue=M.dispersion>0,de=M.iridescence>0,he=M.sheen>0,Xe=M.transmission>0,Pe=C&&!!M.anisotropyMap,Ue=Z&&!!M.clearcoatMap,rt=Z&&!!M.clearcoatNormalMap,we=Z&&!!M.clearcoatRoughnessMap,He=de&&!!M.iridescenceMap,mt=de&&!!M.iridescenceThicknessMap,st=he&&!!M.sheenColorMap,je=he&&!!M.sheenRoughnessMap,at=!!M.specularMap,ut=!!M.specularColorMap,It=!!M.specularIntensityMap,b=Xe&&!!M.transmissionMap,J=Xe&&!!M.thicknessMap,ee=!!M.gradientMap,ne=!!M.alphaMap,Me=M.alphaTest>0,k=!!M.alphaHash,Y=!!M.extensions;let Oe=ps;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const We={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:xe,fragmentShader:j,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:ge,instancingColor:ge&&I.instanceColor!==null,instancingMorph:ge&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ms,alphaToCoverage:!!M.alphaToCoverage,map:De,matcap:Be,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:U,aoMap:se,lightMap:ce,bumpMap:pe,normalMap:B,displacementMap:f&&ze,emissiveMap:be,normalMapObjectSpace:B&&M.normalMapType===cE,normalMapTangentSpace:B&&M.normalMapType===rg,metalnessMap:ke,roughnessMap:O,anisotropy:C,anisotropyMap:Pe,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:rt,clearcoatRoughnessMap:we,dispersion:ue,iridescence:de,iridescenceMap:He,iridescenceThicknessMap:mt,sheen:he,sheenColorMap:st,sheenRoughnessMap:je,specularMap:at,specularColorMap:ut,specularIntensityMap:It,transmission:Xe,transmissionMap:b,thicknessMap:J,gradientMap:ee,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:k,combine:M.combine,mapUv:De&&_(M.map.channel),aoMapUv:se&&_(M.aoMap.channel),lightMapUv:ce&&_(M.lightMap.channel),bumpMapUv:pe&&_(M.bumpMap.channel),normalMapUv:B&&_(M.normalMap.channel),displacementMapUv:ze&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:ke&&_(M.metalnessMap.channel),roughnessMapUv:O&&_(M.roughnessMap.channel),anisotropyMapUv:Pe&&_(M.anisotropyMap.channel),clearcoatMapUv:Ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&_(M.sheenRoughnessMap.channel),specularMapUv:at&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:It&&_(M.specularIntensityMap.channel),transmissionMapUv:b&&_(M.transmissionMap.channel),thicknessMapUv:J&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(B||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(De||ne),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&Pt.getTransfer(M.map.colorSpace)===Gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Y&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&M.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(w,M),m(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function m(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.transmission&&a.enable(14),w.sheen&&a.enable(15),w.opaque&&a.enable(16),w.pointsUvs&&a.enable(17),w.decodeVideoTexture&&a.enable(18),w.alphaToCoverage&&a.enable(19),M.push(a.mask)}function S(M){const w=v[M.type];let P;if(w){const F=Kn[w];P=ag.clone(F.uniforms)}else P=M.uniforms;return P}function T(M,w){let P;for(let F=0,I=u.length;F<I;F++){const H=u[F];if(H.cacheKey===w){P=H,++P.usedTimes;break}}return P===void 0&&(P=new u2(n,w,M,s),u.push(P)),P}function A(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function y(M){l.remove(M)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:y,programs:u,dispose:E}}function m2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function g2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,v,_,g){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=g),e++,h}function a(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||g2),i.length>1&&i.sort(f||Sv),r.length>1&&r.sort(f||Sv)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function v2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mv,n.set(i,[o])):r>=s.length?(o=new Mv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function y2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new nt};break;case"SpotLight":t={position:new D,direction:new D,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function x2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _2=0;function S2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function M2(n){const e=new y2,t=x2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new Et,o=new Et;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,g=0,h=0,x=0,m=0,S=0,T=0,A=0,y=0;c.sort(S2);for(let M=0,w=c.length;M<w;M++){const P=c[M],F=P.color,I=P.intensity,H=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*I,d+=F.g*I,f+=F.b*I;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],I);y++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,U=t.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=N,p++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(F).multiplyScalar(I),N.distance=H,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[_]=N;const V=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,V.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=V.matrix,P.castShadow){const U=t.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=z,S++}_++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(F).multiplyScalar(I),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=N,g++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const V=P.shadow,U=t.get(P);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=P.shadow.matrix,m++}i.point[v]=N,v++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(I),N.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[h]=N,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==p||E.pointLength!==v||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==h||E.numDirectionalShadows!==x||E.numPointShadows!==m||E.numSpotShadows!==S||E.numSpotMaps!==T||E.numLightProbes!==y)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=y,E.directionalLength=p,E.pointLength=v,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=h,E.numDirectionalShadows=x,E.numPointShadows=m,E.numSpotShadows=S,E.numSpotMaps=T,E.numLightProbes=y,i.version=_2++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const g=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const m=c[h];if(m.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(m.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(m.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(m.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(m.width*.5,0,0),S.halfHeight.set(0,m.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(m.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(g),f++}else if(m.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function wv(n){const e=new M2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function w2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wv(n),e.set(r,[a])):s>=o.length?(a=new wv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class E2 extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T2 extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
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
}`;function C2(n,e,t){let i=new lg;const r=new ye,s=new ye,o=new Ht,a=new E2({depthPacking:lE}),l=new T2,c={},u=t.maxTextureSize,d={[ji]:ti,[ti]:ji,[Ft]:Ft},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:b2,fragmentShader:A2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ut;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j_;let h=this.type;this.render=function(A,y,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ds),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=h!==xr&&this.type===xr,H=h===xr&&this.type!==xr;for(let z=0,N=A.length;z<N;z++){const V=A[z],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||I===!0||H===!0){const Q=this.type!==xr?{minFilter:Un,magFilter:Un}:{};U.map!==null&&U.map.dispose(),U.map=new vs(r.x,r.y,Q),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const q=U.getViewportCount();for(let Q=0;Q<q;Q++){const ie=U.getViewport(Q);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(o),U.updateMatrices(V,Q),i=U.getFrustum(),S(y,E,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===xr&&x(U,E),U.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(M,w,P)};function x(A,y){const E=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(y,null,E,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(y,null,E,p,_,null)}function m(A,y,E,M){let w=null;const P=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)w=P;else if(w=E.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const F=w.uuid,I=y.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let z=H[I];z===void 0&&(z=w.clone(),H[I]=z,y.addEventListener("dispose",T)),w=z}if(w.visible=y.visible,w.wireframe=y.wireframe,M===xr?w.side=y.shadowSide!==null?y.shadowSide:y.side:w.side=y.shadowSide!==null?y.shadowSide:d[y.side],w.alphaMap=y.alphaMap,w.alphaTest=y.alphaTest,w.map=y.map,w.clipShadows=y.clipShadows,w.clippingPlanes=y.clippingPlanes,w.clipIntersection=y.clipIntersection,w.displacementMap=y.displacementMap,w.displacementScale=y.displacementScale,w.displacementBias=y.displacementBias,w.wireframeLinewidth=y.wireframeLinewidth,w.linewidth=y.linewidth,E.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=n.properties.get(w);F.light=E}return w}function S(A,y,E,M,w){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===xr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const I=e.update(A),H=A.material;if(Array.isArray(H)){const z=I.groups;for(let N=0,V=z.length;N<V;N++){const U=z[N],$=H[U.materialIndex];if($&&$.visible){const q=m(A,$,M,w);A.onBeforeShadow(n,A,y,E,I,q,U),n.renderBufferDirect(E,null,I,q,A,U),A.onAfterShadow(n,A,y,E,I,q,U)}}}else if(H.visible){const z=m(A,H,M,w);A.onBeforeShadow(n,A,y,E,I,z,null),n.renderBufferDirect(E,null,I,z,A,null),A.onAfterShadow(n,A,y,E,I,z,null)}}const F=A.children;for(let I=0,H=F.length;I<H;I++)S(F[I],y,E,M,w)}function T(A){A.target.removeEventListener("dispose",T);for(const E in c){const M=c[E],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function R2(n){function e(){let b=!1;const J=new Ht;let ee=null;const ne=new Ht(0,0,0,0);return{setMask:function(Me){ee!==Me&&!b&&(n.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){b=Me},setClear:function(Me,k,Y,Oe,We){We===!0&&(Me*=Oe,k*=Oe,Y*=Oe),J.set(Me,k,Y,Oe),ne.equals(J)===!1&&(n.clearColor(Me,k,Y,Oe),ne.copy(J))},reset:function(){b=!1,ee=null,ne.set(-1,0,0,0)}}}function t(){let b=!1,J=null,ee=null,ne=null;return{setTest:function(Me){Me?me(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Me){J!==Me&&!b&&(n.depthMask(Me),J=Me)},setFunc:function(Me){if(ee!==Me){switch(Me){case Ww:n.depthFunc(n.NEVER);break;case Xw:n.depthFunc(n.ALWAYS);break;case jw:n.depthFunc(n.LESS);break;case Yu:n.depthFunc(n.LEQUAL);break;case Yw:n.depthFunc(n.EQUAL);break;case $w:n.depthFunc(n.GEQUAL);break;case qw:n.depthFunc(n.GREATER);break;case Kw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Me}},setLocked:function(Me){b=Me},setClear:function(Me){ne!==Me&&(n.clearDepth(Me),ne=Me)},reset:function(){b=!1,J=null,ee=null,ne=null}}}function i(){let b=!1,J=null,ee=null,ne=null,Me=null,k=null,Y=null,Oe=null,We=null;return{setTest:function(Ve){b||(Ve?me(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Ve){J!==Ve&&!b&&(n.stencilMask(Ve),J=Ve)},setFunc:function(Ve,qe,Ze){(ee!==Ve||ne!==qe||Me!==Ze)&&(n.stencilFunc(Ve,qe,Ze),ee=Ve,ne=qe,Me=Ze)},setOp:function(Ve,qe,Ze){(k!==Ve||Y!==qe||Oe!==Ze)&&(n.stencilOp(Ve,qe,Ze),k=Ve,Y=qe,Oe=Ze)},setLocked:function(Ve){b=Ve},setClear:function(Ve){We!==Ve&&(n.clearStencil(Ve),We=Ve)},reset:function(){b=!1,J=null,ee=null,ne=null,Me=null,k=null,Y=null,Oe=null,We=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,v=!1,_=null,g=null,h=null,x=null,m=null,S=null,T=null,A=new nt(0,0,0),y=0,E=!1,M=null,w=null,P=null,F=null,I=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=N>=2);let U=null,$={};const q=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ie=new Ht().fromArray(q),xe=new Ht().fromArray(Q);function j(b,J,ee,ne){const Me=new Uint8Array(4),k=n.createTexture();n.bindTexture(b,k),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<ee;Y++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(J+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return k}const te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Yu),pe(!1),B(P0),me(n.CULL_FACE),se(ds);function me(b){c[b]!==!0&&(n.enable(b),c[b]=!0)}function re(b){c[b]!==!1&&(n.disable(b),c[b]=!1)}function ge(b,J){return u[b]!==J?(n.bindFramebuffer(b,J),u[b]=J,b===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),b===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function _e(b,J){let ee=f,ne=!1;if(b){ee=d.get(J),ee===void 0&&(ee=[],d.set(J,ee));const Me=b.textures;if(ee.length!==Me.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let k=0,Y=Me.length;k<Y;k++)ee[k]=n.COLOR_ATTACHMENT0+k;ee.length=Me.length,ne=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ne=!0);ne&&n.drawBuffers(ee)}function De(b){return p!==b?(n.useProgram(b),p=b,!0):!1}const Be={[Os]:n.FUNC_ADD,[Aw]:n.FUNC_SUBTRACT,[Cw]:n.FUNC_REVERSE_SUBTRACT};Be[Rw]=n.MIN,Be[Pw]=n.MAX;const L={[Lw]:n.ZERO,[Dw]:n.ONE,[Iw]:n.SRC_COLOR,[op]:n.SRC_ALPHA,[Fw]:n.SRC_ALPHA_SATURATE,[zw]:n.DST_COLOR,[Uw]:n.DST_ALPHA,[Nw]:n.ONE_MINUS_SRC_COLOR,[ap]:n.ONE_MINUS_SRC_ALPHA,[kw]:n.ONE_MINUS_DST_COLOR,[Ow]:n.ONE_MINUS_DST_ALPHA,[Bw]:n.CONSTANT_COLOR,[Hw]:n.ONE_MINUS_CONSTANT_COLOR,[Vw]:n.CONSTANT_ALPHA,[Gw]:n.ONE_MINUS_CONSTANT_ALPHA};function se(b,J,ee,ne,Me,k,Y,Oe,We,Ve){if(b===ds){v===!0&&(re(n.BLEND),v=!1);return}if(v===!1&&(me(n.BLEND),v=!0),b!==bw){if(b!==_||Ve!==E){if((g!==Os||m!==Os)&&(n.blendEquation(n.FUNC_ADD),g=Os,m=Os),Ve)switch(b){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.ONE,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case D0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}h=null,x=null,S=null,T=null,A.set(0,0,0),y=0,_=b,E=Ve}return}Me=Me||J,k=k||ee,Y=Y||ne,(J!==g||Me!==m)&&(n.blendEquationSeparate(Be[J],Be[Me]),g=J,m=Me),(ee!==h||ne!==x||k!==S||Y!==T)&&(n.blendFuncSeparate(L[ee],L[ne],L[k],L[Y]),h=ee,x=ne,S=k,T=Y),(Oe.equals(A)===!1||We!==y)&&(n.blendColor(Oe.r,Oe.g,Oe.b,We),A.copy(Oe),y=We),_=b,E=!1}function ce(b,J){b.side===Ft?re(n.CULL_FACE):me(n.CULL_FACE);let ee=b.side===ti;J&&(ee=!ee),pe(ee),b.blending===hs&&b.transparent===!1?se(ds):se(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);const ne=b.stencilWrite;o.setTest(ne),ne&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),be(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(b){M!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),M=b)}function B(b){b!==Ew?(me(n.CULL_FACE),b!==w&&(b===P0?n.cullFace(n.BACK):b===Tw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),w=b}function ze(b){b!==P&&(z&&n.lineWidth(b),P=b)}function be(b,J,ee){b?(me(n.POLYGON_OFFSET_FILL),(F!==J||I!==ee)&&(n.polygonOffset(J,ee),F=J,I=ee)):re(n.POLYGON_OFFSET_FILL)}function ke(b){b?me(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function O(b){b===void 0&&(b=n.TEXTURE0+H-1),U!==b&&(n.activeTexture(b),U=b)}function C(b,J,ee){ee===void 0&&(U===null?ee=n.TEXTURE0+H-1:ee=U);let ne=$[ee];ne===void 0&&(ne={type:void 0,texture:void 0},$[ee]=ne),(ne.type!==b||ne.texture!==J)&&(U!==ee&&(n.activeTexture(ee),U=ee),n.bindTexture(b,J||te[b]),ne.type=b,ne.texture=J)}function Z(){const b=$[U];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function mt(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function st(b){ie.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ie.copy(b))}function je(b){xe.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),xe.copy(b))}function at(b,J){let ee=l.get(J);ee===void 0&&(ee=new WeakMap,l.set(J,ee));let ne=ee.get(b);ne===void 0&&(ne=n.getUniformBlockIndex(J,b.name),ee.set(b,ne))}function ut(b,J){const ne=l.get(J).get(b);a.get(J)!==ne&&(n.uniformBlockBinding(J,ne,b.__bindingPointIndex),a.set(J,ne))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},U=null,$={},u={},d=new WeakMap,f=[],p=null,v=!1,_=null,g=null,h=null,x=null,m=null,S=null,T=null,A=new nt(0,0,0),y=0,E=!1,M=null,w=null,P=null,F=null,I=null,ie.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:re,bindFramebuffer:ge,drawBuffers:_e,useProgram:De,setBlending:se,setMaterial:ce,setFlipSided:pe,setCullFace:B,setLineWidth:ze,setPolygonOffset:be,setScissorTest:ke,activeTexture:O,bindTexture:C,unbindTexture:Z,compressedTexImage2D:ue,compressedTexImage3D:de,texImage2D:He,texImage3D:mt,updateUBOMapping:at,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:we,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ue,scissor:st,viewport:je,reset:It}}function Ev(n,e,t,i){const r=P2(i);switch(t){case J_:return n*e;case eS:return n*e;case tS:return n*e*2;case Cf:return n*e/r.components*r.byteLength;case tg:return n*e/r.components*r.byteLength;case nS:return n*e*2/r.components*r.byteLength;case ng:return n*e*2/r.components*r.byteLength;case Q_:return n*e*3/r.components*r.byteLength;case Vi:return n*e*4/r.components*r.byteLength;case ig:return n*e*4/r.components*r.byteLength;case mu:case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vu:case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hp:case mp:return Math.max(n,16)*Math.max(e,8)/4;case dp:case pp:return Math.max(n,8)*Math.max(e,8)/2;case gp:case vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xu:case Ip:case Np:return Math.ceil(n/4)*Math.ceil(e/4)*16;case iS:case Up:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Op:case zp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P2(n){switch(n){case Nr:case q_:return{byteLength:1,components:1};case Ol:case K_:case ql:return{byteLength:2,components:1};case Qm:case eg:return{byteLength:2,components:4};case eo:case Jm:case nr:return{byteLength:4,components:1};case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function L2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,C){return p?new OffscreenCanvas(O,C):Ju("canvas")}function _(O,C,Z){let ue=1;const de=ke(O);if((de.width>Z||de.height>Z)&&(ue=Z/Math.max(de.width,de.height)),ue<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(ue*de.width),Xe=Math.floor(ue*de.height);d===void 0&&(d=v(he,Xe));const Pe=C?v(he,Xe):d;return Pe.width=he,Pe.height=Xe,Pe.getContext("2d").drawImage(O,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+he+"x"+Xe+")."),Pe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function g(O){return O.generateMipmaps&&O.minFilter!==Un&&O.minFilter!==Fi}function h(O){n.generateMipmap(O)}function x(O,C,Z,ue,de=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=C;if(C===n.RED&&(Z===n.FLOAT&&(he=n.R32F),Z===n.HALF_FLOAT&&(he=n.R16F),Z===n.UNSIGNED_BYTE&&(he=n.R8)),C===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.R8UI),Z===n.UNSIGNED_SHORT&&(he=n.R16UI),Z===n.UNSIGNED_INT&&(he=n.R32UI),Z===n.BYTE&&(he=n.R8I),Z===n.SHORT&&(he=n.R16I),Z===n.INT&&(he=n.R32I)),C===n.RG&&(Z===n.FLOAT&&(he=n.RG32F),Z===n.HALF_FLOAT&&(he=n.RG16F),Z===n.UNSIGNED_BYTE&&(he=n.RG8)),C===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RG8UI),Z===n.UNSIGNED_SHORT&&(he=n.RG16UI),Z===n.UNSIGNED_INT&&(he=n.RG32UI),Z===n.BYTE&&(he=n.RG8I),Z===n.SHORT&&(he=n.RG16I),Z===n.INT&&(he=n.RG32I)),C===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),C===n.RGBA){const Xe=de?$u:Pt.getTransfer(ue);Z===n.FLOAT&&(he=n.RGBA32F),Z===n.HALF_FLOAT&&(he=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(he=Xe===Gt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function m(O,C){let Z;return O?C===null||C===eo||C===xa?Z=n.DEPTH24_STENCIL8:C===nr?Z=n.DEPTH32F_STENCIL8:C===Ol&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===eo||C===xa?Z=n.DEPTH_COMPONENT24:C===nr?Z=n.DEPTH_COMPONENT32F:C===Ol&&(Z=n.DEPTH_COMPONENT16),Z}function S(O,C){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==Fi?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function T(O){const C=O.target;C.removeEventListener("dispose",T),y(C),C.isVideoTexture&&u.delete(C)}function A(O){const C=O.target;C.removeEventListener("dispose",A),M(C)}function y(O){const C=i.get(O);if(C.__webglInit===void 0)return;const Z=O.source,ue=f.get(Z);if(ue){const de=ue[C.__cacheKey];de.usedTimes--,de.usedTimes===0&&E(O),Object.keys(ue).length===0&&f.delete(Z)}i.remove(O)}function E(O){const C=i.get(O);n.deleteTexture(C.__webglTexture);const Z=O.source,ue=f.get(Z);delete ue[C.__cacheKey],o.memory.textures--}function M(O){const C=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(C.__webglFramebuffer[ue]))for(let de=0;de<C.__webglFramebuffer[ue].length;de++)n.deleteFramebuffer(C.__webglFramebuffer[ue][de]);else n.deleteFramebuffer(C.__webglFramebuffer[ue]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ue])}else{if(Array.isArray(C.__webglFramebuffer))for(let ue=0;ue<C.__webglFramebuffer.length;ue++)n.deleteFramebuffer(C.__webglFramebuffer[ue]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ue=0;ue<C.__webglColorRenderbuffer.length;ue++)C.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ue]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=O.textures;for(let ue=0,de=Z.length;ue<de;ue++){const he=i.get(Z[ue]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(Z[ue])}i.remove(O)}let w=0;function P(){w=0}function F(){const O=w;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),w+=1,O}function I(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function H(O,C){const Z=i.get(O);if(O.isVideoTexture&&ze(O),O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){const ue=O.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Z,O,C);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+C)}function z(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){xe(Z,O,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+C)}function N(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){xe(Z,O,C);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+C)}function V(O,C){const Z=i.get(O);if(O.version>0&&Z.__version!==O.version){j(Z,O,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+C)}const U={[up]:n.REPEAT,[Vs]:n.CLAMP_TO_EDGE,[fp]:n.MIRRORED_REPEAT},$={[Un]:n.NEAREST,[sE]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[Fi]:n.LINEAR,[Sd]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},q={[uE]:n.NEVER,[gE]:n.ALWAYS,[fE]:n.LESS,[rS]:n.LEQUAL,[dE]:n.EQUAL,[mE]:n.GEQUAL,[hE]:n.GREATER,[pE]:n.NOTEQUAL};function Q(O,C){if(C.type===nr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Fi||C.magFilter===Sd||C.magFilter===mc||C.magFilter===Gs||C.minFilter===Fi||C.minFilter===Sd||C.minFilter===mc||C.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,U[C.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,U[C.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,U[C.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,$[C.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Un||C.minFilter!==mc&&C.minFilter!==Gs||C.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function ie(O,C){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",T));const ue=C.source;let de=f.get(ue);de===void 0&&(de={},f.set(ue,de));const he=I(C);if(he!==O.__cacheKey){de[he]===void 0&&(de[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),de[he].usedTimes++;const Xe=de[O.__cacheKey];Xe!==void 0&&(de[O.__cacheKey].usedTimes--,Xe.usedTimes===0&&E(C)),O.__cacheKey=he,O.__webglTexture=de[he].texture}return Z}function xe(O,C,Z){let ue=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ue=n.TEXTURE_3D);const de=ie(O,C),he=C.source;t.bindTexture(ue,O.__webglTexture,n.TEXTURE0+Z);const Xe=i.get(he);if(he.version!==Xe.__version||de===!0){t.activeTexture(n.TEXTURE0+Z);const Pe=Pt.getPrimaries(Pt.workingColorSpace),Ue=C.colorSpace===es?null:Pt.getPrimaries(C.colorSpace),rt=C.colorSpace===es||Pe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let we=_(C.image,!1,r.maxTextureSize);we=be(C,we);const He=s.convert(C.format,C.colorSpace),mt=s.convert(C.type);let st=x(C.internalFormat,He,mt,C.colorSpace,C.isVideoTexture);Q(ue,C);let je;const at=C.mipmaps,ut=C.isVideoTexture!==!0,It=Xe.__version===void 0||de===!0,b=he.dataReady,J=S(C,we);if(C.isDepthTexture)st=m(C.format===_a,C.type),It&&(ut?t.texStorage2D(n.TEXTURE_2D,1,st,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,st,we.width,we.height,0,He,mt,null));else if(C.isDataTexture)if(at.length>0){ut&&It&&t.texStorage2D(n.TEXTURE_2D,J,st,at[0].width,at[0].height);for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,mt,je.data):t.texImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,He,mt,je.data);C.generateMipmaps=!1}else ut?(It&&t.texStorage2D(n.TEXTURE_2D,J,st,we.width,we.height),b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we.width,we.height,He,mt,we.data)):t.texImage2D(n.TEXTURE_2D,0,st,we.width,we.height,0,He,mt,we.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,st,at[0].width,at[0].height,we.depth);for(let ee=0,ne=at.length;ee<ne;ee++)if(je=at[ee],C.format!==Vi)if(He!==null)if(ut){if(b)if(C.layerUpdates.size>0){const Me=Ev(je.width,je.height,C.format,C.type);for(const k of C.layerUpdates){const Y=je.data.subarray(k*Me/je.data.BYTES_PER_ELEMENT,(k+1)*Me/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,k,je.width,je.height,1,He,Y,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,je.width,je.height,we.depth,He,je.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,st,je.width,je.height,we.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?b&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,je.width,je.height,we.depth,He,mt,je.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,st,je.width,je.height,we.depth,0,He,mt,je.data)}else{ut&&It&&t.texStorage2D(n.TEXTURE_2D,J,st,at[0].width,at[0].height);for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],C.format!==Vi?He!==null?ut?b&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,je.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,je.width,je.height,He,mt,je.data):t.texImage2D(n.TEXTURE_2D,ee,st,je.width,je.height,0,He,mt,je.data)}else if(C.isDataArrayTexture)if(ut){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,st,we.width,we.height,we.depth),b)if(C.layerUpdates.size>0){const ee=Ev(we.width,we.height,C.format,C.type);for(const ne of C.layerUpdates){const Me=we.data.subarray(ne*ee/we.data.BYTES_PER_ELEMENT,(ne+1)*ee/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,we.width,we.height,1,He,mt,Me)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,mt,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,st,we.width,we.height,we.depth,0,He,mt,we.data);else if(C.isData3DTexture)ut?(It&&t.texStorage3D(n.TEXTURE_3D,J,st,we.width,we.height,we.depth),b&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,mt,we.data)):t.texImage3D(n.TEXTURE_3D,0,st,we.width,we.height,we.depth,0,He,mt,we.data);else if(C.isFramebufferTexture){if(It)if(ut)t.texStorage2D(n.TEXTURE_2D,J,st,we.width,we.height);else{let ee=we.width,ne=we.height;for(let Me=0;Me<J;Me++)t.texImage2D(n.TEXTURE_2D,Me,st,ee,ne,0,He,mt,null),ee>>=1,ne>>=1}}else if(at.length>0){if(ut&&It){const ee=ke(at[0]);t.texStorage2D(n.TEXTURE_2D,J,st,ee.width,ee.height)}for(let ee=0,ne=at.length;ee<ne;ee++)je=at[ee],ut?b&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,He,mt,je):t.texImage2D(n.TEXTURE_2D,ee,st,He,mt,je);C.generateMipmaps=!1}else if(ut){if(It){const ee=ke(we);t.texStorage2D(n.TEXTURE_2D,J,st,ee.width,ee.height)}b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,mt,we)}else t.texImage2D(n.TEXTURE_2D,0,st,He,mt,we);g(C)&&h(ue),Xe.__version=he.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function j(O,C,Z){if(C.image.length!==6)return;const ue=ie(O,C),de=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+Z);const he=i.get(de);if(de.version!==he.__version||ue===!0){t.activeTexture(n.TEXTURE0+Z);const Xe=Pt.getPrimaries(Pt.workingColorSpace),Pe=C.colorSpace===es?null:Pt.getPrimaries(C.colorSpace),Ue=C.colorSpace===es||Xe===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const rt=C.isCompressedTexture||C.image[0].isCompressedTexture,we=C.image[0]&&C.image[0].isDataTexture,He=[];for(let ne=0;ne<6;ne++)!rt&&!we?He[ne]=_(C.image[ne],!0,r.maxCubemapSize):He[ne]=we?C.image[ne].image:C.image[ne],He[ne]=be(C,He[ne]);const mt=He[0],st=s.convert(C.format,C.colorSpace),je=s.convert(C.type),at=x(C.internalFormat,st,je,C.colorSpace),ut=C.isVideoTexture!==!0,It=he.__version===void 0||ue===!0,b=de.dataReady;let J=S(C,mt);Q(n.TEXTURE_CUBE_MAP,C);let ee;if(rt){ut&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,at,mt.width,mt.height);for(let ne=0;ne<6;ne++){ee=He[ne].mipmaps;for(let Me=0;Me<ee.length;Me++){const k=ee[Me];C.format!==Vi?st!==null?ut?b&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,k.width,k.height,st,k.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,at,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,k.width,k.height,st,je,k.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,at,k.width,k.height,0,st,je,k.data)}}}else{if(ee=C.mipmaps,ut&&It){ee.length>0&&J++;const ne=ke(He[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,at,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He[ne].width,He[ne].height,st,je,He[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,at,He[ne].width,He[ne].height,0,st,je,He[ne].data);for(let Me=0;Me<ee.length;Me++){const Y=ee[Me].image[ne].image;ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Y.width,Y.height,st,je,Y.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,at,Y.width,Y.height,0,st,je,Y.data)}}else{ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,st,je,He[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,at,st,je,He[ne]);for(let Me=0;Me<ee.length;Me++){const k=ee[Me];ut?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,st,je,k.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,at,st,je,k.image[ne])}}}g(C)&&h(n.TEXTURE_CUBE_MAP),he.__version=de.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function te(O,C,Z,ue,de,he){const Xe=s.convert(Z.format,Z.colorSpace),Pe=s.convert(Z.type),Ue=x(Z.internalFormat,Xe,Pe,Z.colorSpace);if(!i.get(C).__hasExternalTextures){const we=Math.max(1,C.width>>he),He=Math.max(1,C.height>>he);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,he,Ue,we,He,C.depth,0,Xe,Pe,null):t.texImage2D(de,he,Ue,we,He,0,Xe,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,de,i.get(Z).__webglTexture,0,pe(C)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,de,i.get(Z).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(O,C,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,O),C.depthBuffer){const ue=C.depthTexture,de=ue&&ue.isDepthTexture?ue.type:null,he=m(C.stencilBuffer,de),Xe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=pe(C);B(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,he,C.width,C.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,he,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,O)}else{const ue=C.textures;for(let de=0;de<ue.length;de++){const he=ue[de],Xe=s.convert(he.format,he.colorSpace),Pe=s.convert(he.type),Ue=x(he.internalFormat,Xe,Pe,he.colorSpace),rt=pe(C);Z&&B(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Ue,C.width,C.height):B(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Ue,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const ue=i.get(C.depthTexture).__webglTexture,de=pe(C);if(C.depthTexture.format===sa)B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(C.depthTexture.format===_a)B(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ge(O){const C=i.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");re(C.__webglFramebuffer,O)}else if(Z){C.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ue]),C.__webglDepthbuffer[ue]=n.createRenderbuffer(),me(C.__webglDepthbuffer[ue],O,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),me(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(O,C,Z){const ue=i.get(O);C!==void 0&&te(ue.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ge(O)}function De(O){const C=O.texture,Z=i.get(O),ue=i.get(C);O.addEventListener("dispose",A);const de=O.textures,he=O.isWebGLCubeRenderTarget===!0,Xe=de.length>1;if(Xe||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=C.version,o.memory.textures++),he){Z.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Pe]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)Z.__webglFramebuffer[Pe][Ue]=n.createFramebuffer()}else Z.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Pe=0;Pe<C.mipmaps.length;Pe++)Z.__webglFramebuffer[Pe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let Pe=0,Ue=de.length;Pe<Ue;Pe++){const rt=i.get(de[Pe]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&B(O)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<de.length;Pe++){const Ue=de[Pe];Z.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);const rt=s.convert(Ue.format,Ue.colorSpace),we=s.convert(Ue.type),He=x(Ue.internalFormat,rt,we,Ue.colorSpace,O.isXRRenderTarget===!0),mt=pe(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,He,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),me(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Q(n.TEXTURE_CUBE_MAP,C);for(let Pe=0;Pe<6;Pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)te(Z.__webglFramebuffer[Pe][Ue],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ue);else te(Z.__webglFramebuffer[Pe],O,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(C)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Pe=0,Ue=de.length;Pe<Ue;Pe++){const rt=de[Pe],we=i.get(rt);t.bindTexture(n.TEXTURE_2D,we.__webglTexture),Q(n.TEXTURE_2D,rt),te(Z.__webglFramebuffer,O,rt,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),g(rt)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pe=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ue.__webglTexture),Q(Pe,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)te(Z.__webglFramebuffer[Ue],O,C,n.COLOR_ATTACHMENT0,Pe,Ue);else te(Z.__webglFramebuffer,O,C,n.COLOR_ATTACHMENT0,Pe,0);g(C)&&h(Pe),t.unbindTexture()}O.depthBuffer&&ge(O)}function Be(O){const C=O.textures;for(let Z=0,ue=C.length;Z<ue;Z++){const de=C[Z];if(g(de)){const he=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Xe=i.get(de).__webglTexture;t.bindTexture(he,Xe),h(he),t.unbindTexture()}}}const L=[],se=[];function ce(O){if(O.samples>0){if(B(O)===!1){const C=O.textures,Z=O.width,ue=O.height;let de=n.COLOR_BUFFER_BIT;const he=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=i.get(O),Pe=C.length>1;if(Pe)for(let Ue=0;Ue<C.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=i.get(C[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,Z,ue,0,0,Z,ue,de,n.NEAREST),l===!0&&(L.length=0,se.length=0,L.push(n.COLOR_ATTACHMENT0+Ue),O.depthBuffer&&O.resolveDepthBuffer===!1&&(L.push(he),se.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Ue=0;Ue<C.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const rt=i.get(C[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,rt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const C=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function pe(O){return Math.min(r.maxSamples,O.samples)}function B(O){const C=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ze(O){const C=o.render.frame;u.get(O)!==C&&(u.set(O,C),O.update())}function be(O,C){const Z=O.colorSpace,ue=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==Ms&&Z!==es&&(Pt.getTransfer(Z)===Gt?(ue!==Vi||de!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function ke(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=_e,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=te,this.useMultisampledRTT=B}function D2(n,e){function t(i,r=es){let s;const o=Pt.getTransfer(r);if(i===Nr)return n.UNSIGNED_BYTE;if(i===Qm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Z_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===q_)return n.BYTE;if(i===K_)return n.SHORT;if(i===Ol)return n.UNSIGNED_SHORT;if(i===Jm)return n.INT;if(i===eo)return n.UNSIGNED_INT;if(i===nr)return n.FLOAT;if(i===ql)return n.HALF_FLOAT;if(i===J_)return n.ALPHA;if(i===Q_)return n.RGB;if(i===Vi)return n.RGBA;if(i===eS)return n.LUMINANCE;if(i===tS)return n.LUMINANCE_ALPHA;if(i===sa)return n.DEPTH_COMPONENT;if(i===_a)return n.DEPTH_STENCIL;if(i===Cf)return n.RED;if(i===tg)return n.RED_INTEGER;if(i===nS)return n.RG;if(i===ng)return n.RG_INTEGER;if(i===ig)return n.RGBA_INTEGER;if(i===mu||i===gu||i===vu||i===yu)if(o===Gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dp||i===hp||i===pp||i===mp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gp||i===vp||i===yp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gp||i===vp)return o===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xp||i===_p||i===Sp||i===Mp||i===wp||i===Ep||i===Tp||i===bp||i===Ap||i===Cp||i===Rp||i===Pp||i===Lp||i===Dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_p)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ep)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ap)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dp)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xu||i===Ip||i===Np)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xu)return o===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Np)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iS||i===Up||i===Op||i===zp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Up)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Op)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class I2 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ko extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N2={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
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

}`;class z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ur({vertexShader:U2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends ro{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=new z2,g=t.getContextAttributes();let h=null,x=null;const m=[],S=[],T=new ye;let A=null;const y=new ci;y.layers.enable(1),y.viewport=new Ht;const E=new ci;E.layers.enable(2),E.viewport=new Ht;const M=[y,E],w=new I2;w.layers.enable(1),w.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=m[j];return te===void 0&&(te=new jd,m[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=m[j];return te===void 0&&(te=new jd,m[j]=te),te.getGripSpace()},this.getHand=function(j){let te=m[j];return te===void 0&&(te=new jd,m[j]=te),te.getHandSpace()};function I(j){const te=S.indexOf(j.inputSource);if(te===-1)return;const me=m[te];me!==void 0&&(me.update(j.inputSource,j.frame,c||o),me.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let j=0;j<m.length;j++){const te=S[j];te!==null&&(S[j]=null,m[j].disconnect(te))}P=null,F=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,x=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new vs(p.framebufferWidth,p.framebufferHeight,{format:Vi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,me=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?_a:sa,me=g.stencil?xa:eo);const ge={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new vs(f.textureWidth,f.textureHeight,{format:Vi,type:Nr,depthTexture:new gS(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(j){for(let te=0;te<j.removed.length;te++){const me=j.removed[te],re=S.indexOf(me);re>=0&&(S[re]=null,m[re].disconnect(me))}for(let te=0;te<j.added.length;te++){const me=j.added[te];let re=S.indexOf(me);if(re===-1){for(let _e=0;_e<m.length;_e++)if(_e>=S.length){S.push(me),re=_e;break}else if(S[_e]===null){S[_e]=me,re=_e;break}if(re===-1)break}const ge=m[re];ge&&ge.connect(me)}}const N=new D,V=new D;function U(j,te,me){N.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const re=N.distanceTo(V),ge=te.projectionMatrix.elements,_e=me.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Be=ge[14]/(ge[10]+1),L=(ge[9]+1)/ge[5],se=(ge[9]-1)/ge[5],ce=(ge[8]-1)/ge[0],pe=(_e[8]+1)/_e[0],B=De*ce,ze=De*pe,be=re/(-ce+pe),ke=be*-ce;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const O=De+be,C=Be+be,Z=B-ke,ue=ze+(re-ke),de=L*Be/C*O,he=se*Be/C*O;j.projectionMatrix.makePerspective(Z,ue,de,he,O,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function $(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),w.near=E.near=y.near=j.near,w.far=E.far=y.far=j.far,(P!==w.near||F!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,F=w.far,y.near=P,y.far=F,E.near=P,E.far=F,y.updateProjectionMatrix(),E.updateProjectionMatrix(),j.updateProjectionMatrix());const te=j.parent,me=w.cameras;$(w,te);for(let re=0;re<me.length;re++)$(me[re],te);me.length===2?U(w,y,E):w.projectionMatrix.copy(y.projectionMatrix),q(j,w,te)};function q(j,te,me){me===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let Q=null;function ie(j,te){if(u=te.getViewerPose(c||o),v=te,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let re=!1;me.length!==w.cameras.length&&(w.cameras.length=0,re=!0);for(let _e=0;_e<me.length;_e++){const De=me[_e];let Be=null;if(p!==null)Be=p.getViewport(De);else{const se=d.getViewSubImage(f,De);Be=se.viewport,_e===0&&(e.setRenderTargetTextures(x,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let L=M[_e];L===void 0&&(L=new ci,L.layers.enable(_e),L.viewport=new Ht,M[_e]=L),L.matrix.fromArray(De.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(De.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Be.x,Be.y,Be.width,Be.height),_e===0&&(w.matrix.copy(L.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),re===!0&&w.cameras.push(L)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const _e=d.getDepthInformation(me[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,r.renderState)}}for(let me=0;me<m.length;me++){const re=S[me],ge=m[me];re!==null&&ge!==void 0&&ge.update(re,te,c||o)}Q&&Q(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const xe=new mS;xe.setAnimationLoop(ie),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const Ps=new mi,F2=new Et;function B2(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,dS(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,x,m,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),_(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,x,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===ti&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===ti&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const x=e.get(h),m=x.envMap,S=x.envMapRotation;m&&(g.envMap.value=m,Ps.copy(S),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.envMapRotation.value.setFromMatrix4(F2.makeRotationFromEuler(Ps)),g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,x,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*x,g.scale.value=m*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,x){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ti&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const x=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,m){const S=m.program;i.uniformBlockBinding(x,S)}function c(x,m){let S=r[x.id];S===void 0&&(v(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",g));const T=m.program;i.updateUBOMapping(x,T);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const m=d();x.__bindingPointIndex=m;const S=n.createBuffer(),T=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const m=r[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let A=0,y=S.length;A<y;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,w=E.length;M<w;M++){const P=E[M];if(p(P,A,M,T)===!0){const F=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let z=0;z<I.length;z++){const N=I[z],V=_(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,F+H,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,m,S,T){const A=x.value,y=m+"_"+S;if(T[y]===void 0)return typeof A=="number"||typeof A=="boolean"?T[y]=A:T[y]=A.clone(),!0;{const E=T[y];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return T[y]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function v(x){const m=x.uniforms;let S=0;const T=16;for(let y=0,E=m.length;y<E;y++){const M=Array.isArray(m[y])?m[y]:[m[y]];for(let w=0,P=M.length;w<P;w++){const F=M[w],I=Array.isArray(F.value)?F.value:[F.value];for(let H=0,z=I.length;H<z;H++){const N=I[H],V=_(N),U=S%T,$=U%V.boundary,q=U+$;S+=$,q!==0&&T-q<V.storage&&(S+=T-q),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=V.storage}}}const A=S%T;return A>0&&(S+=T-A),x.__size=S,x.__cache={},this}function _(x){const m={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(m.boundary=4,m.storage=4):x.isVector2?(m.boundary=8,m.storage=8):x.isVector3||x.isColor?(m.boundary=16,m.storage=12):x.isVector4?(m.boundary=16,m.storage=16):x.isMatrix3?(m.boundary=48,m.storage=48):x.isMatrix4?(m.boundary=64,m.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),m}function g(x){const m=x.target;m.removeEventListener("dispose",g);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class V2{constructor(e={}){const{canvas:t=IE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oi,this.toneMapping=ps,this.toneMappingExposure=1;const m=this;let S=!1,T=0,A=0,y=null,E=-1,M=null;const w=new Ht,P=new Ht;let F=null;const I=new nt(0);let H=0,z=t.width,N=t.height,V=1,U=null,$=null;const q=new Ht(0,0,z,N),Q=new Ht(0,0,z,N);let ie=!1;const xe=new lg;let j=!1,te=!1;const me=new Et,re=new D,ge=new Ht,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Be(){return y===null?V:1}let L=i;function se(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qm}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Me,!1),L===null){const G="webgl2";if(L=se(G,R),L===null)throw se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,pe,B,ze,be,ke,O,C,Z,ue,de,he,Xe,Pe,Ue,rt,we,He,mt,st,je,at,ut,It;function b(){ce=new $A(L),ce.init(),at=new D2(L,ce),pe=new VA(L,ce,e,at),B=new R2(L),ze=new ZA(L),be=new m2,ke=new L2(L,ce,B,be,pe,at,ze),O=new WA(m),C=new YA(m),Z=new rT(L),ut=new BA(L,Z),ue=new qA(L,Z,ze,ut),de=new QA(L,ue,Z,ze),mt=new JA(L,pe,ke),rt=new GA(be),he=new p2(m,O,C,ce,pe,ut,rt),Xe=new B2(m,be),Pe=new v2,Ue=new w2(ce),He=new FA(m,O,C,B,de,f,l),we=new C2(m,de,pe),It=new H2(L,ze,pe,B),st=new HA(L,ce,ze),je=new KA(L,ce,ze),ze.programs=he.programs,m.capabilities=pe,m.extensions=ce,m.properties=be,m.renderLists=Pe,m.shadowMap=we,m.state=B,m.info=ze}b();const J=new k2(m,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(z,N,!1))},this.getSize=function(R){return R.set(z,N)},this.setSize=function(R,G,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,N=G,t.width=Math.floor(R*V),t.height=Math.floor(G*V),X===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(z*V,N*V).floor()},this.setDrawingBufferSize=function(R,G,X){z=R,N=G,V=X,t.width=Math.floor(R*X),t.height=Math.floor(G*X),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,G,X,K){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,G,X,K),B.viewport(w.copy(q).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,G,X,K){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,G,X,K),B.scissor(P.copy(Q).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){B.setScissorTest(ie=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(R=!0,G=!0,X=!0){let K=0;if(R){let W=!1;if(y!==null){const le=y.texture.format;W=le===ig||le===ng||le===tg}if(W){const le=y.texture.type,fe=le===Nr||le===eo||le===Ol||le===xa||le===Qm||le===eg,Se=He.getClearColor(),oe=He.getClearAlpha(),Ae=Se.r,Re=Se.g,Ge=Se.b;fe?(p[0]=Ae,p[1]=Re,p[2]=Ge,p[3]=oe,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Ae,v[1]=Re,v[2]=Ge,v[3]=oe,L.clearBufferiv(L.COLOR,0,v))}else K|=L.COLOR_BUFFER_BIT}G&&(K|=L.DEPTH_BUFFER_BIT),X&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Pe.dispose(),Ue.dispose(),be.dispose(),O.dispose(),C.dispose(),de.dispose(),ut.dispose(),It.dispose(),he.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ze),J.removeEventListener("sessionend",Ee),lt.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ze.autoReset,G=we.enabled,X=we.autoUpdate,K=we.needsUpdate,W=we.type;b(),ze.autoReset=R,we.enabled=G,we.autoUpdate=X,we.needsUpdate=K,we.type=W}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function k(R){const G=R.target;G.removeEventListener("dispose",k),Y(G)}function Y(R){Oe(R),be.remove(R)}function Oe(R){const G=be.get(R).programs;G!==void 0&&(G.forEach(function(X){he.releaseProgram(X)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,X,K,W,le){G===null&&(G=_e);const fe=W.isMesh&&W.matrixWorld.determinant()<0,Se=Qe(R,G,X,K,W);B.setMaterial(K,fe);let oe=X.index,Ae=1;if(K.wireframe===!0){if(oe=ue.getWireframeAttribute(X),oe===void 0)return;Ae=2}const Re=X.drawRange,Ge=X.attributes.position;let it=Re.start*Ae,Ct=(Re.start+Re.count)*Ae;le!==null&&(it=Math.max(it,le.start*Ae),Ct=Math.min(Ct,(le.start+le.count)*Ae)),oe!==null?(it=Math.max(it,0),Ct=Math.min(Ct,oe.count)):Ge!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,Ge.count));const Mt=Ct-it;if(Mt<0||Mt===1/0)return;ut.setup(W,K,Se,X,oe);let yn,_t=st;if(oe!==null&&(yn=Z.get(oe),_t=je,_t.setIndex(yn)),W.isMesh)K.wireframe===!0?(B.setLineWidth(K.wireframeLinewidth*Be()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(W.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),B.setLineWidth(Je*Be()),W.isLineSegments?_t.setMode(L.LINES):W.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else W.isPoints?_t.setMode(L.POINTS):W.isSprite&&_t.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Je=W._multiDrawStarts,an=W._multiDrawCounts,Tt=W._multiDrawCount,Fn=oe?Z.get(oe).bytesPerElement:1,lr=be.get(K).currentProgram.getUniforms();for(let xn=0;xn<Tt;xn++)lr.setValue(L,"_gl_DrawID",xn),_t.render(Je[xn]/Fn,an[xn])}else if(W.isInstancedMesh)_t.renderInstances(it,Mt,W.count);else if(X.isInstancedBufferGeometry){const Je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,an=Math.min(X.instanceCount,Je);_t.renderInstances(it,Mt,an)}else _t.render(it,Mt)};function We(R,G,X){R.transparent===!0&&R.side===Ft&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Ce(R,G,X),R.side=ji,R.needsUpdate=!0,Ce(R,G,X),R.side=Ft):Ce(R,G,X)}this.compile=function(R,G,X=null){X===null&&(X=R),g=Ue.get(X),g.init(G),x.push(g),X.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==X&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const K=new Set;return R.traverse(function(W){const le=W.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const Se=le[fe];We(Se,X,W),K.add(Se)}else We(le,X,W),K.add(le)}),x.pop(),g=null,K},this.compileAsync=function(R,G,X=null){const K=this.compile(R,G,X);return new Promise(W=>{function le(){if(K.forEach(function(fe){be.get(fe).currentProgram.isReady()&&K.delete(fe)}),K.size===0){W(R);return}setTimeout(le,10)}ce.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ve=null;function qe(R){Ve&&Ve(R)}function Ze(){lt.stop()}function Ee(){lt.start()}const lt=new mS;lt.setAnimationLoop(qe),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(R){Ve=R,J.setAnimationLoop(R),R===null?lt.stop():lt.start()},J.addEventListener("sessionstart",Ze),J.addEventListener("sessionend",Ee),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,G,y),g=Ue.get(R,x.length),g.init(G),x.push(g),me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xe.setFromProjectionMatrix(me),te=this.localClippingEnabled,j=rt.init(this.clippingPlanes,te),_=Pe.get(R,h.length),_.init(),h.push(_),J.enabled===!0&&J.isPresenting===!0){const le=m.xr.getDepthSensingMesh();le!==null&&wt(le,G,-1/0,m.sortObjects)}wt(R,G,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(U,$),De=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,De&&He.addToRenderList(_,R),this.info.render.frame++,j===!0&&rt.beginShadows();const X=g.state.shadowsArray;we.render(X,R,G),j===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,W=_.transmissive;if(g.setupLights(),G.isArrayCamera){const le=G.cameras;if(W.length>0)for(let fe=0,Se=le.length;fe<Se;fe++){const oe=le[fe];Le(K,W,R,oe)}De&&He.render(R);for(let fe=0,Se=le.length;fe<Se;fe++){const oe=le[fe];ve(_,R,oe,oe.viewport)}}else W.length>0&&Le(K,W,R,G),De&&He.render(R),ve(_,R,G);y!==null&&(ke.updateMultisampleRenderTarget(y),ke.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(m,R,G),ut.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(g=x[x.length-1],j===!0&&rt.setGlobalState(m.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function wt(R,G,X,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xe.intersectsSprite(R)){K&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const fe=de.update(R),Se=R.material;Se.visible&&_.push(R,fe,Se,X,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xe.intersectsObject(R))){const fe=de.update(R),Se=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ge.copy(fe.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const oe=fe.groups;for(let Ae=0,Re=oe.length;Ae<Re;Ae++){const Ge=oe[Ae],it=Se[Ge.materialIndex];it&&it.visible&&_.push(R,fe,it,X,ge.z,Ge)}}else Se.visible&&_.push(R,fe,Se,X,ge.z,null)}}const le=R.children;for(let fe=0,Se=le.length;fe<Se;fe++)wt(le[fe],G,X,K)}function ve(R,G,X,K){const W=R.opaque,le=R.transmissive,fe=R.transparent;g.setupLightsView(X),j===!0&&rt.setGlobalState(m.clippingPlanes,X),K&&B.viewport(w.copy(K)),W.length>0&&Ke(W,G,X),le.length>0&&Ke(le,G,X),fe.length>0&&Ke(fe,G,X),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Le(R,G,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new vs(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ql:Nr,minFilter:Gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const le=g.state.transmissionRenderTarget[K.id],fe=K.viewport||w;le.setSize(fe.z,fe.w);const Se=m.getRenderTarget();m.setRenderTarget(le),m.getClearColor(I),H=m.getClearAlpha(),H<1&&m.setClearColor(16777215,.5),m.clear(),De&&He.render(X);const oe=m.toneMapping;m.toneMapping=ps;const Ae=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),j===!0&&rt.setGlobalState(m.clippingPlanes,K),Ke(R,X,K),ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ge=0,it=G.length;Ge<it;Ge++){const Ct=G[Ge],Mt=Ct.object,yn=Ct.geometry,_t=Ct.material,Je=Ct.group;if(_t.side===Ft&&Mt.layers.test(K.layers)){const an=_t.side;_t.side=ti,_t.needsUpdate=!0,ct(Mt,X,K,yn,_t,Je),_t.side=an,_t.needsUpdate=!0,Re=!0}}Re===!0&&(ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le))}m.setRenderTarget(Se),m.setClearColor(I,H),Ae!==void 0&&(K.viewport=Ae),m.toneMapping=oe}function Ke(R,G,X){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,le=R.length;W<le;W++){const fe=R[W],Se=fe.object,oe=fe.geometry,Ae=K===null?fe.material:K,Re=fe.group;Se.layers.test(X.layers)&&ct(Se,G,X,oe,Ae,Re)}}function ct(R,G,X,K,W,le){R.onBeforeRender(m,G,X,K,W,le),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.transparent===!0&&W.side===Ft&&W.forceSinglePass===!1?(W.side=ti,W.needsUpdate=!0,m.renderBufferDirect(X,G,K,W,R,le),W.side=ji,W.needsUpdate=!0,m.renderBufferDirect(X,G,K,W,R,le),W.side=Ft):m.renderBufferDirect(X,G,K,W,R,le),R.onAfterRender(m,G,X,K,W,le)}function Ce(R,G,X){G.isScene!==!0&&(G=_e);const K=be.get(R),W=g.state.lights,le=g.state.shadowsArray,fe=W.state.version,Se=he.getParameters(R,W.state,le,G,X),oe=he.getProgramCacheKey(Se);let Ae=K.programs;K.environment=R.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(R.isMeshStandardMaterial?C:O).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",k),Ae=new Map,K.programs=Ae);let Re=Ae.get(oe);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===fe)return et(R,Se),Re}else Se.uniforms=he.getUniforms(R),R.onBeforeCompile(Se,m),Re=he.acquireProgram(Se,oe),Ae.set(oe,Re),K.uniforms=Se.uniforms;const Ge=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=rt.uniform),et(R,Se),K.needsLights=yt(R),K.lightsStateVersion=fe,K.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function ft(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=_u.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function et(R,G){const X=be.get(R);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.batchingColor=G.batchingColor,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.instancingMorph=G.instancingMorph,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function Qe(R,G,X,K,W){G.isScene!==!0&&(G=_e),ke.resetTextureUnits();const le=G.fog,fe=K.isMeshStandardMaterial?G.environment:null,Se=y===null?m.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ms,oe=(K.isMeshStandardMaterial?C:O).get(K.envMap||fe),Ae=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let Mt=ps;K.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Mt=m.toneMapping);const yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=yn!==void 0?yn.length:0,Je=be.get(K),an=g.state.lights;if(j===!0&&(te===!0||R!==M)){const zt=R===M&&K.id===E;rt.setState(K,R,zt)}let Tt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==an.state.version||Je.outputColorSpace!==Se||W.isBatchedMesh&&Je.batching===!1||!W.isBatchedMesh&&Je.batching===!0||W.isBatchedMesh&&Je.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Je.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Je.instancing===!1||!W.isInstancedMesh&&Je.instancing===!0||W.isSkinnedMesh&&Je.skinning===!1||!W.isSkinnedMesh&&Je.skinning===!0||W.isInstancedMesh&&Je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Je.instancingMorph===!1&&W.morphTexture!==null||Je.envMap!==oe||K.fog===!0&&Je.fog!==le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==rt.numPlanes||Je.numIntersection!==rt.numIntersection)||Je.vertexAlphas!==Ae||Je.vertexTangents!==Re||Je.morphTargets!==Ge||Je.morphNormals!==it||Je.morphColors!==Ct||Je.toneMapping!==Mt||Je.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,Je.__version=K.version);let Fn=Je.currentProgram;Tt===!0&&(Fn=Ce(K,G,W));let lr=!1,xn=!1,oo=!1;const gt=Fn.getUniforms(),_n=Je.uniforms;if(B.useProgram(Fn.program)&&(lr=!0,xn=!0,oo=!0),K.id!==E&&(E=K.id,xn=!0),lr||M!==R){gt.setValue(L,"projectionMatrix",R.projectionMatrix),gt.setValue(L,"viewMatrix",R.matrixWorldInverse);const zt=gt.map.cameraPosition;zt!==void 0&&zt.setValue(L,re.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xn=!0,oo=!0)}if(W.isSkinnedMesh){gt.setOptional(L,W,"bindMatrix"),gt.setOptional(L,W,"bindMatrixInverse");const zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(L,"boneTexture",zt.boneTexture,ke))}W.isBatchedMesh&&(gt.setOptional(L,W,"batchingTexture"),gt.setValue(L,"batchingTexture",W._matricesTexture,ke),gt.setOptional(L,W,"batchingIdTexture"),gt.setValue(L,"batchingIdTexture",W._indirectTexture,ke),gt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(L,"batchingColorTexture",W._colorsTexture,ke));const Sn=X.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&mt.update(W,X,Fn),(xn||Je.receiveShadow!==W.receiveShadow)&&(Je.receiveShadow=W.receiveShadow,gt.setValue(L,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=oe,_n.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(_n.envMapIntensity.value=G.environmentIntensity),xn&&(gt.setValue(L,"toneMappingExposure",m.toneMappingExposure),Je.needsLights&&tt(_n,oo),le&&K.fog===!0&&Xe.refreshFogUniforms(_n,le),Xe.refreshMaterialUniforms(_n,K,V,N,g.state.transmissionRenderTarget[R.id]),_u.upload(L,ft(Je),_n,ke)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(_u.upload(L,ft(Je),_n,ke),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(L,"center",W.center),gt.setValue(L,"modelViewMatrix",W.modelViewMatrix),gt.setValue(L,"normalMatrix",W.normalMatrix),gt.setValue(L,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let Rt=0,kt=zt.length;Rt<kt;Rt++){const Yt=zt[Rt];It.update(Yt,Fn),It.bind(Yt,Fn)}}return Fn}function tt(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function yt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,G,X){be.get(R.texture).__webglTexture=G,be.get(R.depthTexture).__webglTexture=X;const K=be.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const X=be.get(R);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,X=0){y=R,T=G,A=X;let K=!0,W=null,le=!1,fe=!1;if(R){const oe=be.get(R);oe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(L.FRAMEBUFFER,null),K=!1):oe.__webglFramebuffer===void 0?ke.setupRenderTarget(R):oe.__hasExternalTextures&&ke.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(fe=!0);const Re=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Re[G])?W=Re[G][X]:W=Re[G],le=!0):R.samples>0&&ke.useMultisampledRTT(R)===!1?W=be.get(R).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[X]:W=Re,w.copy(R.viewport),P.copy(R.scissor),F=R.scissorTest}else w.copy(q).multiplyScalar(V).floor(),P.copy(Q).multiplyScalar(V).floor(),F=ie;if(B.bindFramebuffer(L.FRAMEBUFFER,W)&&K&&B.drawBuffers(R,W),B.viewport(w),B.scissor(P),B.setScissorTest(F),le){const oe=be.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,oe.__webglTexture,X)}else if(fe){const oe=be.get(R.texture),Ae=G||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.__webglTexture,X||0,Ae)}E=-1},this.readRenderTargetPixels=function(R,G,X,K,W,le,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){B.bindFramebuffer(L.FRAMEBUFFER,Se);try{const oe=R.texture,Ae=oe.format,Re=oe.type;if(!pe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&X>=0&&X<=R.height-W&&L.readPixels(G,X,K,W,at.convert(Ae),at.convert(Re),le)}finally{const oe=y!==null?be.get(y).__webglFramebuffer:null;B.bindFramebuffer(L.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(R,G,X,K,W,le,fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){B.bindFramebuffer(L.FRAMEBUFFER,Se);try{const oe=R.texture,Ae=oe.format,Re=oe.type;if(!pe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-K&&X>=0&&X<=R.height-W){const Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),L.readPixels(G,X,K,W,at.convert(Ae),at.convert(Re),0),L.flush();const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await NE(L,it,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le)}finally{L.deleteBuffer(Ge),L.deleteSync(it)}return le}}finally{const oe=y!==null?be.get(y).__webglFramebuffer:null;B.bindFramebuffer(L.FRAMEBUFFER,oe)}}},this.copyFramebufferToTexture=function(R,G=null,X=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-X),W=Math.floor(R.image.width*K),le=Math.floor(R.image.height*K),fe=G!==null?G.x:0,Se=G!==null?G.y:0;ke.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,fe,Se,W,le),B.unbindTexture()},this.copyTextureToTexture=function(R,G,X=null,K=null,W=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],G=arguments[2],W=arguments[3]||0,X=null);let le,fe,Se,oe,Ae,Re;X!==null?(le=X.max.x-X.min.x,fe=X.max.y-X.min.y,Se=X.min.x,oe=X.min.y):(le=R.image.width,fe=R.image.height,Se=0,oe=0),K!==null?(Ae=K.x,Re=K.y):(Ae=0,Re=0);const Ge=at.convert(G.format),it=at.convert(G.type);ke.setTexture2D(G,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),Mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=L.getParameter(L.UNPACK_SKIP_PIXELS),_t=L.getParameter(L.UNPACK_SKIP_ROWS),Je=L.getParameter(L.UNPACK_SKIP_IMAGES),an=R.isCompressedTexture?R.mipmaps[W]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,an.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,an.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,oe),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,Ae,Re,le,fe,Ge,it,an.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,Ae,Re,an.width,an.height,Ge,an.data):L.texSubImage2D(L.TEXTURE_2D,W,Ae,Re,le,fe,Ge,it,an),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,_t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je),W===0&&G.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(R,G,X=null,K=null,W=0){R.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,R=arguments[2],G=arguments[3],W=arguments[4]||0);let le,fe,Se,oe,Ae,Re,Ge,it,Ct;const Mt=R.isCompressedTexture?R.mipmaps[W]:R.image;X!==null?(le=X.max.x-X.min.x,fe=X.max.y-X.min.y,Se=X.max.z-X.min.z,oe=X.min.x,Ae=X.min.y,Re=X.min.z):(le=Mt.width,fe=Mt.height,Se=Mt.depth,oe=0,Ae=0,Re=0),K!==null?(Ge=K.x,it=K.y,Ct=K.z):(Ge=0,it=0,Ct=0);const yn=at.convert(G.format),_t=at.convert(G.type);let Je;if(G.isData3DTexture)ke.setTexture3D(G,0),Je=L.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)ke.setTexture2DArray(G,0),Je=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const an=L.getParameter(L.UNPACK_ROW_LENGTH),Tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),lr=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Je,W,Ge,it,Ct,le,fe,Se,yn,_t,Mt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Je,W,Ge,it,Ct,le,fe,Se,yn,Mt.data):L.texSubImage3D(Je,W,Ge,it,Ct,le,fe,Se,yn,_t,Mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,an),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),W===0&&G.generateMipmaps&&L.generateMipmap(Je),B.unbindTexture()},this.initRenderTarget=function(R){be.get(R).__webglFramebuffer===void 0&&ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),B.unbindTexture()},this.resetState=function(){T=0,A=0,y=null,B.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sg?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Rf?"display-p3":"srgb"}}class Fp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class G2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return aa("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new D;class is{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new is(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class W2 extends zn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Un,u=Un,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tv extends vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new Et,bv=new Et,zc=[],Av=new Ai,X2=new Et,Wa=new Zt,Xa=new zr;class Bp extends Zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tv(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,X2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),Av.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(Av)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),Xa.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Po),bv.multiplyMatrices(i,Po),Wa.matrixWorld=bv,Wa.raycast(e,zc);for(let o=0,a=zc.length;o<a;o++){const l=zc[o];l.instanceId=s,l.object=this,t.push(l)}zc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new W2(new Float32Array(r*this.count),r,this.count,Cf,nr));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class SS extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new D,tf=new D,Cv=new Et,ja=new Pf,kc=new zr,Yd=new D,Rv=new D;class j2 extends nn{constructor(e=new Ut,t=new SS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ef.fromBufferAttribute(t,r-1),tf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;Cv.copy(r).invert(),ja.copy(e.ray).applyMatrix4(Cv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=u.getX(_),x=u.getX(_+1),m=Fc(this,e,ja,l,h,x);m&&t.push(m)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(p),h=Fc(this,e,ja,l,_,g);h&&t.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=Fc(this,e,ja,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=Fc(this,e,ja,l,v-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ef.fromBufferAttribute(o,r),tf.fromBufferAttribute(o,s),t.distanceSqToSegment(ef,tf,Yd,Rv)>i)return;Yd.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Yd);if(!(l<e.near||l>e.far))return{distance:l,point:Rv.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Pv=new D,Lv=new D;class Y2 extends j2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Pv.fromBufferAttribute(t,r),Lv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pv.distanceTo(Lv);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dv=new Et,Vp=new Pf,Bc=new zr,Hc=new D;class Iv extends nn{constructor(e=new Ut,t=new Hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=s,e.ray.intersectsSphere(Bc)===!1)return;Dv.copy(r).invert(),Vp.copy(e.ray).applyMatrix4(Dv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,_=p;v<_;v++){const g=c.getX(v);Hc.fromBufferAttribute(d,g),Nv(Hc,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,_=p;v<_;v++)Hc.fromBufferAttribute(d,v),Nv(Hc,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nv(n,e,t,i,r,s,o){const a=Vp.distanceSqToPoint(n);if(a<t){const l=new D;Vp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Gp extends zn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ye:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],o=[],a=new D,l=new Et;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(un(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(un(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ug extends ar{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $2 extends ug{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fg(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Vc=new D,$d=new fg,qd=new fg,Kd=new fg;class q2 extends ar{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Vc.subVectors(r[0],r[1]).add(r[0]),c=Vc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),g<1e-4&&(g=_),$d.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,v,_,g),qd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,v,_,g),Kd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,v,_,g)}else this.curveType==="catmullrom"&&($d.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),qd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Kd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set($d.calc(l),qd.calc(l),Kd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uv(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function K2(n,e){const t=1-n;return t*t*e}function Z2(n,e){return 2*(1-n)*n*e}function J2(n,e){return n*n*e}function pl(n,e,t,i){return K2(n,e)+Z2(n,t)+J2(n,i)}function Q2(n,e){const t=1-n;return t*t*t*e}function eR(n,e){const t=1-n;return 3*t*t*n*e}function tR(n,e){return 3*(1-n)*n*n*e}function nR(n,e){return n*n*n*e}function ml(n,e,t,i,r){return Q2(n,e)+eR(n,t)+tR(n,i)+nR(n,r)}class MS extends ar{constructor(e=new ye,t=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,r.x,s.x,o.x,a.x),ml(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iR extends ar{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,r.x,s.x,o.x,a.x),ml(e,r.y,s.y,o.y,a.y),ml(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wS extends ar{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rR extends ar{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ES extends ar{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pl(e,r.x,s.x,o.x),pl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sR extends ar{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pl(e,r.x,s.x,o.x),pl(e,r.y,s.y,o.y),pl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TS extends ar{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Uv(a,l.x,c.x,u.x,d.x),Uv(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var Wp=Object.freeze({__proto__:null,ArcCurve:$2,CatmullRomCurve3:q2,CubicBezierCurve:MS,CubicBezierCurve3:iR,EllipseCurve:ug,LineCurve:wS,LineCurve3:rR,QuadraticBezierCurve:ES,QuadraticBezierCurve3:sR,SplineCurve:TS});class oR extends ar{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Wp[r.type]().fromJSON(r))}return this}}class kl extends oR{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wS(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ES(this.currentPoint.clone(),new ye(e,t),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new MS(this.currentPoint.clone(),new ye(e,t),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new TS(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ug(e,t,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dg extends Ut{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,u=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dg(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Es extends Ut{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let v=0;const _=[],g=i/2;let h=0;x(),o===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(u),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function x(){const S=new D,T=new D;let A=0;const y=(t-e)/i;for(let E=0;E<=s;E++){const M=[],w=E/s,P=w*(t-e)+e;for(let F=0;F<=r;F++){const I=F/r,H=I*l+a,z=Math.sin(H),N=Math.cos(H);T.x=P*z,T.y=-w*i+g,T.z=P*N,d.push(T.x,T.y,T.z),S.set(z,y,N).normalize(),f.push(S.x,S.y,S.z),p.push(I,1-w),M.push(v++)}_.push(M)}for(let E=0;E<r;E++)for(let M=0;M<s;M++){const w=_[M][E],P=_[M+1][E],F=_[M+1][E+1],I=_[M][E+1];u.push(w,P,I),u.push(P,F,I),A+=6}c.addGroup(h,A,0),h+=A}function m(S){const T=v,A=new ye,y=new D;let E=0;const M=S===!0?e:t,w=S===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,g*w,0),f.push(0,w,0),p.push(.5,.5),v++;const P=v;for(let F=0;F<=r;F++){const H=F/r*l+a,z=Math.cos(H),N=Math.sin(H);y.x=M*N,y.y=g*w,y.z=M*z,d.push(y.x,y.y,y.z),f.push(0,w,0),A.x=z*.5+.5,A.y=N*.5*w+.5,p.push(A.x,A.y),v++}for(let F=0;F<r;F++){const I=T+F,H=P+F;S===!0?u.push(H,H+1,I):u.push(H+1,H,I),E+=3}c.addGroup(h,E,S===!0?1:2),h+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Df extends Es{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Df(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Gc=new D,Wc=new D,Zd=new D,Xc=new Hi;class _i extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(oa*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:h}=Xc;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Xc.getNormal(Zd),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const m=(x+1)%3,S=d[x],T=d[m],A=Xc[u[x]],y=Xc[u[m]],E=`${S}_${T}`,M=`${T}_${S}`;M in f&&f[M]?(Zd.dot(f[M].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(y.x,y.y,y.z)),f[M]=null):E in f||(f[E]={index0:c[x],index1:c[m],normal:Zd.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:g}=f[v];Gc.fromBufferAttribute(a,_),Wc.fromBufferAttribute(a,g),p.push(Gc.x,Gc.y,Gc.z),p.push(Wc.x,Wc.y,Wc.z)}this.setAttribute("position",new ht(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cr extends kl{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new kl().fromJSON(r))}return this}}const aR={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=bS(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,f,p;if(i&&(s=dR(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let v=t;v<r;v+=t)d=n[v],f=n[v+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Fl(s,o,t,a,l,p,0),o}};function bS(n,e,t,i,r){let s,o;if(r===wR(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ov(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ov(s,n[s],n[s+1],o);return o&&If(o,o.next)&&(Hl(o),o=o.next),o}function to(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(If(t,t.next)||Jt(t.prev,t,t.next)===0)){if(Hl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&vR(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?cR(n,i,r,s):lR(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Hl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=uR(to(n),e,t),Fl(n,e,t,i,r,s,2)):o===2&&fR(n,e,t,i,r,s):Fl(to(n),e,t,i,r,s,1);break}}}function lR(n){const e=n.prev,t=n,i=n.next;if(Jt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=d&&v.y<=p&&Zo(r,a,s,l,o,c,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function cR(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Jt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<d?u<f?u:f:d<f?d:f,_=a>l?a>c?a:c:l>c?l:c,g=u>d?u>f?u:f:d>f?d:f,h=Xp(p,v,e,t,i),x=Xp(_,g,e,t,i);let m=n.prevZ,S=n.nextZ;for(;m&&m.z>=h&&S&&S.z<=x;){if(m.x>=p&&m.x<=_&&m.y>=v&&m.y<=g&&m!==r&&m!==o&&Zo(a,u,l,d,c,f,m.x,m.y)&&Jt(m.prev,m,m.next)>=0||(m=m.prevZ,S.x>=p&&S.x<=_&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Zo(a,u,l,d,c,f,S.x,S.y)&&Jt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;m&&m.z>=h;){if(m.x>=p&&m.x<=_&&m.y>=v&&m.y<=g&&m!==r&&m!==o&&Zo(a,u,l,d,c,f,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=v&&S.y<=g&&S!==r&&S!==o&&Zo(a,u,l,d,c,f,S.x,S.y)&&Jt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function uR(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!If(r,s)&&AS(r,i,i.next,s)&&Bl(r,s)&&Bl(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Hl(i),Hl(i.next),i=n=s),i=i.next}while(i!==n);return to(i)}function fR(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_R(o,a)){let l=CS(o,a);o=to(o,o.next),l=to(l,l.next),Fl(o,e,t,i,r,s,0),Fl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function dR(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=bS(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(xR(c));for(r.sort(hR),s=0;s<r.length;s++)t=pR(r[s],t);return t}function hR(n,e){return n.x-e.x}function pR(n,e){const t=mR(n,e);if(!t)return e;const i=CS(t,n);return to(i,i.next),to(t,t.next)}function mR(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Zo(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),Bl(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&gR(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function gR(n,e){return Jt(n.prev,n,e.prev)<0&&Jt(e.next,n,n.next)<0}function vR(n,e,t,i){let r=n;do r.z===0&&(r.z=Xp(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,yR(r)}function yR(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Xp(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xR(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Zo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function _R(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!SR(n,e)&&(Bl(n,e)&&Bl(e,n)&&MR(n,e)&&(Jt(n.prev,n,e.prev)||Jt(n,e.prev,e))||If(n,e)&&Jt(n.prev,n,n.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function If(n,e){return n.x===e.x&&n.y===e.y}function AS(n,e,t,i){const r=Yc(Jt(n,e,t)),s=Yc(Jt(n,e,i)),o=Yc(Jt(t,i,n)),a=Yc(Jt(t,i,e));return!!(r!==s&&o!==a||r===0&&jc(n,t,e)||s===0&&jc(n,i,e)||o===0&&jc(t,n,i)||a===0&&jc(t,e,i))}function jc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Yc(n){return n>0?1:n<0?-1:0}function SR(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&AS(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Bl(n,e){return Jt(n.prev,n,n.next)<0?Jt(n,e,n.next)>=0&&Jt(n,n.prev,e)>=0:Jt(n,e,n.prev)<0||Jt(n,n.next,e)<0}function MR(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function CS(n,e){const t=new jp(n.i,n.x,n.y),i=new jp(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ov(n,e,t,i){const r=new jp(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Hl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wR(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Rr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Rr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];zv(e),kv(i,e);let o=e.length;t.forEach(zv);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,kv(i,t[l]);const a=aR.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function zv(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kv(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wa extends Ut{constructor(e=new Cr([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:ER;let m,S=!1,T,A,y,E;h&&(m=h.getSpacedPoints(u),S=!0,f=!1,T=h.computeFrenetFrames(u,!1),A=new D,y=new D,E=new D),f||(g=0,p=0,v=0,_=0);const M=a.extractPoints(c);let w=M.shape;const P=M.holes;if(!Rr.isClockWise(w)){w=w.reverse();for(let L=0,se=P.length;L<se;L++){const ce=P[L];Rr.isClockWise(ce)&&(P[L]=ce.reverse())}}const I=Rr.triangulateShape(w,P),H=w;for(let L=0,se=P.length;L<se;L++){const ce=P[L];w=w.concat(ce)}function z(L,se,ce){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(se,ce)}const N=w.length,V=I.length;function U(L,se,ce){let pe,B,ze;const be=L.x-se.x,ke=L.y-se.y,O=ce.x-L.x,C=ce.y-L.y,Z=be*be+ke*ke,ue=be*C-ke*O;if(Math.abs(ue)>Number.EPSILON){const de=Math.sqrt(Z),he=Math.sqrt(O*O+C*C),Xe=se.x-ke/de,Pe=se.y+be/de,Ue=ce.x-C/he,rt=ce.y+O/he,we=((Ue-Xe)*C-(rt-Pe)*O)/(be*C-ke*O);pe=Xe+be*we-L.x,B=Pe+ke*we-L.y;const He=pe*pe+B*B;if(He<=2)return new ye(pe,B);ze=Math.sqrt(He/2)}else{let de=!1;be>Number.EPSILON?O>Number.EPSILON&&(de=!0):be<-Number.EPSILON?O<-Number.EPSILON&&(de=!0):Math.sign(ke)===Math.sign(C)&&(de=!0),de?(pe=-ke,B=be,ze=Math.sqrt(Z)):(pe=be,B=ke,ze=Math.sqrt(Z/2))}return new ye(pe/ze,B/ze)}const $=[];for(let L=0,se=H.length,ce=se-1,pe=L+1;L<se;L++,ce++,pe++)ce===se&&(ce=0),pe===se&&(pe=0),$[L]=U(H[L],H[ce],H[pe]);const q=[];let Q,ie=$.concat();for(let L=0,se=P.length;L<se;L++){const ce=P[L];Q=[];for(let pe=0,B=ce.length,ze=B-1,be=pe+1;pe<B;pe++,ze++,be++)ze===B&&(ze=0),be===B&&(be=0),Q[pe]=U(ce[pe],ce[ze],ce[be]);q.push(Q),ie=ie.concat(Q)}for(let L=0;L<g;L++){const se=L/g,ce=p*Math.cos(se*Math.PI/2),pe=v*Math.sin(se*Math.PI/2)+_;for(let B=0,ze=H.length;B<ze;B++){const be=z(H[B],$[B],pe);re(be.x,be.y,-ce)}for(let B=0,ze=P.length;B<ze;B++){const be=P[B];Q=q[B];for(let ke=0,O=be.length;ke<O;ke++){const C=z(be[ke],Q[ke],pe);re(C.x,C.y,-ce)}}}const xe=v+_;for(let L=0;L<N;L++){const se=f?z(w[L],ie[L],xe):w[L];S?(y.copy(T.normals[0]).multiplyScalar(se.x),A.copy(T.binormals[0]).multiplyScalar(se.y),E.copy(m[0]).add(y).add(A),re(E.x,E.y,E.z)):re(se.x,se.y,0)}for(let L=1;L<=u;L++)for(let se=0;se<N;se++){const ce=f?z(w[se],ie[se],xe):w[se];S?(y.copy(T.normals[L]).multiplyScalar(ce.x),A.copy(T.binormals[L]).multiplyScalar(ce.y),E.copy(m[L]).add(y).add(A),re(E.x,E.y,E.z)):re(ce.x,ce.y,d/u*L)}for(let L=g-1;L>=0;L--){const se=L/g,ce=p*Math.cos(se*Math.PI/2),pe=v*Math.sin(se*Math.PI/2)+_;for(let B=0,ze=H.length;B<ze;B++){const be=z(H[B],$[B],pe);re(be.x,be.y,d+ce)}for(let B=0,ze=P.length;B<ze;B++){const be=P[B];Q=q[B];for(let ke=0,O=be.length;ke<O;ke++){const C=z(be[ke],Q[ke],pe);S?re(C.x,C.y+m[u-1].y,m[u-1].x+ce):re(C.x,C.y,d+ce)}}}j(),te();function j(){const L=r.length/3;if(f){let se=0,ce=N*se;for(let pe=0;pe<V;pe++){const B=I[pe];ge(B[2]+ce,B[1]+ce,B[0]+ce)}se=u+g*2,ce=N*se;for(let pe=0;pe<V;pe++){const B=I[pe];ge(B[0]+ce,B[1]+ce,B[2]+ce)}}else{for(let se=0;se<V;se++){const ce=I[se];ge(ce[2],ce[1],ce[0])}for(let se=0;se<V;se++){const ce=I[se];ge(ce[0]+N*u,ce[1]+N*u,ce[2]+N*u)}}i.addGroup(L,r.length/3-L,0)}function te(){const L=r.length/3;let se=0;me(H,se),se+=H.length;for(let ce=0,pe=P.length;ce<pe;ce++){const B=P[ce];me(B,se),se+=B.length}i.addGroup(L,r.length/3-L,1)}function me(L,se){let ce=L.length;for(;--ce>=0;){const pe=ce;let B=ce-1;B<0&&(B=L.length-1);for(let ze=0,be=u+g*2;ze<be;ze++){const ke=N*ze,O=N*(ze+1),C=se+pe+ke,Z=se+B+ke,ue=se+B+O,de=se+pe+O;_e(C,Z,ue,de)}}}function re(L,se,ce){l.push(L),l.push(se),l.push(ce)}function ge(L,se,ce){De(L),De(se),De(ce);const pe=r.length/3,B=x.generateTopUV(i,r,pe-3,pe-2,pe-1);Be(B[0]),Be(B[1]),Be(B[2])}function _e(L,se,ce,pe){De(L),De(se),De(pe),De(se),De(ce),De(pe);const B=r.length/3,ze=x.generateSideWallUV(i,r,B-6,B-3,B-2,B-1);Be(ze[0]),Be(ze[1]),Be(ze[3]),Be(ze[1]),Be(ze[2]),Be(ze[3])}function De(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Be(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return TR(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wp[r.type]().fromJSON(r)),new wa(i,e.options)}}const ER={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],p=e[r*3+1],v=e[r*3+2],_=e[s*3],g=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-d),new ye(f,1-v),new ye(_,1-h)]:[new ye(a,1-l),new ye(u,1-d),new ye(p,1-v),new ye(g,1-h)]}};function TR(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class so extends Ut{constructor(e=new Cr([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(s,3)),this.setAttribute("uv",new ht(o,2));function c(u){const d=r.length/3,f=u.extractPoints(t);let p=f.shape;const v=f.holes;Rr.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,h=v.length;g<h;g++){const x=v[g];Rr.isClockWise(x)===!0&&(v[g]=x.reverse())}const _=Rr.triangulateShape(p,v);for(let g=0,h=v.length;g<h;g++){const x=v[g];p=p.concat(x)}for(let g=0,h=p.length;g<h;g++){const x=p[g];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,h=_.length;g<h;g++){const x=_[g],m=x[0]+d,S=x[1]+d,T=x[2]+d;i.push(m,S,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bR(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new so(i,e.curveSegments)}}function bR(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class hg extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,p=[],v=[],_=[],g=[];for(let h=0;h<=i;h++){const x=[],m=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+m*a),d.y=e*Math.cos(o+m*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+m*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(A+S,1-m),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const m=u[h][x+1],S=u[h][x],T=u[h+1][x],A=u[h+1][x+1];(h!==0||o>0)&&p.push(m,S,A),(h!==i-1||l<Math.PI)&&p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class AR extends Ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let v=f,_=f+p;v<_;v+=3)for(let g=0;g<3;g++){const h=a.getX(v+g),x=a.getX(v+(g+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,x),Fv(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),Fv(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ht(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Fv(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class oi extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends ws{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class CR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const RR=new CR;class pg{constructor(e){this.manager=e!==void 0?e:RR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pg.DEFAULT_MATERIAL_NAME="__DEFAULT";const mr={};class PR extends Error{constructor(e,t){super(e),this.response=t}}class LR extends pg{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mr[e]!==void 0){mr[e].push({onLoad:t,onProgress:i,onError:r});return}mr[e]=[],mr[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mr[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0;let _=0;const g=new ReadableStream({start(h){x();function x(){d.read().then(({done:m,value:S})=>{if(m)h.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let A=0,y=u.length;A<y;A++){const E=u[A];E.onProgress&&E.onProgress(T)}h.enqueue(S),x()}},m=>{h.error(m)})}}});return new Response(g)}else throw new PR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Bv.add(e,c);const u=mr[e];delete mr[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=mr[e];if(u===void 0)throw this.manager.itemError(e),c;delete mr[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RS extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class DR extends RS{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jd=new Et,Hv=new D,Vv=new D;class IR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lg,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hv),Vv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vv),t.updateMatrixWorld(),Jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NR extends IR{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UR extends RS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new NR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class OR extends Ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yp extends G2{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Gv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wv=new D,$c=new D;class zR{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wv.subVectors(e,this.start),$c.subVectors(this.end,this.start);const i=$c.dot($c);let s=$c.dot(Wv)/i;return t&&(s=un(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kR{constructor(){this.type="ShapePath",this.color=new nt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new kl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const x=[];for(let m=0,S=h.length;m<S;m++){const T=h[m],A=new Cr;A.curves=T.curves,x.push(A)}return x}function i(h,x){const m=x.length;let S=!1;for(let T=m-1,A=0;A<m;T=A++){let y=x[T],E=x[A],M=E.x-y.x,w=E.y-y.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(y=x[A],M=-M,E=x[T],w=-w),h.y<y.y||h.y>E.y)continue;if(h.y===y.y){if(h.x===y.x)return!0}else{const P=w*(h.x-y.x)-M*(h.y-y.y);if(P===0)return!0;if(P<0)continue;S=!S}}else{if(h.y!==y.y)continue;if(E.x<=h.x&&h.x<=y.x||y.x<=h.x&&h.x<=E.x)return!0}}return S}const r=Rr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Cr,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const d=[],f=[];let p=[],v=0,_;f[v]=void 0,p[v]=[];for(let h=0,x=s.length;h<x;h++)a=s[h],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&f[v]&&v++,f[v]={s:new Cr,p:_},f[v].s.curves=a.curves,u&&v++,p[v]=[]):p[v].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let h=!1,x=0;for(let m=0,S=f.length;m<S;m++)d[m]=[];for(let m=0,S=f.length;m<S;m++){const T=p[m];for(let A=0;A<T.length;A++){const y=T[A];let E=!0;for(let M=0;M<f.length;M++)i(y.p,f[M].p)&&(m!==M&&x++,E?(E=!1,d[M].push(y)):h=!0);E&&d[m].push(y)}}x>0&&h===!1&&(p=d)}let g;for(let h=0,x=f.length;h<x;h++){l=f[h].s,c.push(l),g=p[h];for(let m=0,S=g.length;m<S;m++)l.holes.push(g[m].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);const Xv={type:"change"},Qd={type:"start"},jv={type:"end"},qc=new Pf,Yv=new Mr,FR=Math.cos(70*li.DEG2RAD);class BR extends ro{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ue),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xv),i.update(),s=r.NONE},this.update=function(){const b=new D,J=new ys().setFromUnitVectors(e.up,new D(0,1,0)),ee=J.clone().invert(),ne=new D,Me=new ys,k=new D,Y=2*Math.PI;return function(We=null){const Ve=i.object.position;b.copy(Ve).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&F(w(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite(qe)&&isFinite(Ze)&&(qe<-Math.PI?qe+=Y:qe>Math.PI&&(qe-=Y),Ze<-Math.PI?Ze+=Y:Ze>Math.PI&&(Ze-=Y),qe<=Ze?a.theta=Math.max(qe,Math.min(Ze,a.theta)):a.theta=a.theta>(qe+Ze)/2?Math.max(qe,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ee=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=q(a.radius);else{const lt=a.radius;a.radius=q(a.radius*c),Ee=lt!=a.radius}if(b.setFromSpherical(a),b.applyQuaternion(ee),Ve.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let lt=null;if(i.object.isPerspectiveCamera){const wt=b.length();lt=q(wt*c);const ve=wt-lt;i.object.position.addScaledVector(S,ve),i.object.updateMatrixWorld(),Ee=!!ve}else if(i.object.isOrthographicCamera){const wt=new D(T.x,T.y,0);wt.unproject(i.object);const ve=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ee=ve!==i.object.zoom;const Le=new D(T.x,T.y,0);Le.unproject(i.object),i.object.position.sub(Le).add(wt),i.object.updateMatrixWorld(),lt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(qc.origin.copy(i.object.position),qc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(qc.direction))<FR?e.lookAt(i.target):(Yv.setFromNormalAndCoplanarPoint(i.object.up,i.target),qc.intersectPlane(Yv,i.target))))}else if(i.object.isOrthographicCamera){const lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ee=!0)}return c=1,A=!1,Ee||ne.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o||k.distanceToSquared(i.target)>o?(i.dispatchEvent(Xv),ne.copy(i.object.position),Me.copy(i.object.quaternion),k.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",de),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",Xe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gv,l=new Gv;let c=1;const u=new D,d=new ye,f=new ye,p=new ye,v=new ye,_=new ye,g=new ye,h=new ye,x=new ye,m=new ye,S=new D,T=new ye;let A=!1;const y=[],E={};let M=!1;function w(b){return b!==null?2*Math.PI/60*i.autoRotateSpeed*b:2*Math.PI/60/60*i.autoRotateSpeed}function P(b){const J=Math.abs(b*.01);return Math.pow(.95,i.zoomSpeed*J)}function F(b){l.theta-=b}function I(b){l.phi-=b}const H=function(){const b=new D;return function(ee,ne){b.setFromMatrixColumn(ne,0),b.multiplyScalar(-ee),u.add(b)}}(),z=function(){const b=new D;return function(ee,ne){i.screenSpacePanning===!0?b.setFromMatrixColumn(ne,1):(b.setFromMatrixColumn(ne,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(ee),u.add(b)}}(),N=function(){const b=new D;return function(ee,ne){const Me=i.domElement;if(i.object.isPerspectiveCamera){const k=i.object.position;b.copy(k).sub(i.target);let Y=b.length();Y*=Math.tan(i.object.fov/2*Math.PI/180),H(2*ee*Y/Me.clientHeight,i.object.matrix),z(2*ne*Y/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(ee*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),z(ne*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(b,J){if(!i.zoomToCursor)return;A=!0;const ee=i.domElement.getBoundingClientRect(),ne=b-ee.left,Me=J-ee.top,k=ee.width,Y=ee.height;T.x=ne/k*2-1,T.y=-(Me/Y)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(b){return Math.max(i.minDistance,Math.min(i.maxDistance,b))}function Q(b){d.set(b.clientX,b.clientY)}function ie(b){$(b.clientX,b.clientX),h.set(b.clientX,b.clientY)}function xe(b){v.set(b.clientX,b.clientY)}function j(b){f.set(b.clientX,b.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;F(2*Math.PI*p.x/J.clientHeight),I(2*Math.PI*p.y/J.clientHeight),d.copy(f),i.update()}function te(b){x.set(b.clientX,b.clientY),m.subVectors(x,h),m.y>0?V(P(m.y)):m.y<0&&U(P(m.y)),h.copy(x),i.update()}function me(b){_.set(b.clientX,b.clientY),g.subVectors(_,v).multiplyScalar(i.panSpeed),N(g.x,g.y),v.copy(_),i.update()}function re(b){$(b.clientX,b.clientY),b.deltaY<0?U(P(b.deltaY)):b.deltaY>0&&V(P(b.deltaY)),i.update()}function ge(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function _e(b){if(y.length===1)d.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);d.set(ee,ne)}}function De(b){if(y.length===1)v.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);v.set(ee,ne)}}function Be(b){const J=ut(b),ee=b.pageX-J.x,ne=b.pageY-J.y,Me=Math.sqrt(ee*ee+ne*ne);h.set(0,Me)}function L(b){i.enableZoom&&Be(b),i.enablePan&&De(b)}function se(b){i.enableZoom&&Be(b),i.enableRotate&&_e(b)}function ce(b){if(y.length==1)f.set(b.pageX,b.pageY);else{const ee=ut(b),ne=.5*(b.pageX+ee.x),Me=.5*(b.pageY+ee.y);f.set(ne,Me)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;F(2*Math.PI*p.x/J.clientHeight),I(2*Math.PI*p.y/J.clientHeight),d.copy(f)}function pe(b){if(y.length===1)_.set(b.pageX,b.pageY);else{const J=ut(b),ee=.5*(b.pageX+J.x),ne=.5*(b.pageY+J.y);_.set(ee,ne)}g.subVectors(_,v).multiplyScalar(i.panSpeed),N(g.x,g.y),v.copy(_)}function B(b){const J=ut(b),ee=b.pageX-J.x,ne=b.pageY-J.y,Me=Math.sqrt(ee*ee+ne*ne);x.set(0,Me),m.set(0,Math.pow(x.y/h.y,i.zoomSpeed)),V(m.y),h.copy(x);const k=(b.pageX+J.x)*.5,Y=(b.pageY+J.y)*.5;$(k,Y)}function ze(b){i.enableZoom&&B(b),i.enablePan&&pe(b)}function be(b){i.enableZoom&&B(b),i.enableRotate&&ce(b)}function ke(b){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",C)),!je(b)&&(mt(b),b.pointerType==="touch"?rt(b):Z(b)))}function O(b){i.enabled!==!1&&(b.pointerType==="touch"?we(b):ue(b))}function C(b){switch(st(b),y.length){case 0:i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(jv),s=r.NONE;break;case 1:const J=y[0],ee=E[J];rt({pointerId:J,pageX:ee.x,pageY:ee.y});break}}function Z(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case fo.DOLLY:if(i.enableZoom===!1)return;ie(b),s=r.DOLLY;break;case fo.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;xe(b),s=r.PAN}else{if(i.enableRotate===!1)return;Q(b),s=r.ROTATE}break;case fo.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;Q(b),s=r.ROTATE}else{if(i.enablePan===!1)return;xe(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qd)}function ue(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(b);break;case r.DOLLY:if(i.enableZoom===!1)return;te(b);break;case r.PAN:if(i.enablePan===!1)return;me(b);break}}function de(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Qd),re(he(b)),i.dispatchEvent(jv))}function he(b){const J=b.deltaMode,ee={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(J){case 1:ee.deltaY*=16;break;case 2:ee.deltaY*=100;break}return b.ctrlKey&&!M&&(ee.deltaY*=10),ee}function Xe(b){b.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Pe(b){b.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Ue(b){i.enabled===!1||i.enablePan===!1||ge(b)}function rt(b){switch(at(b),y.length){case 1:switch(i.touches.ONE){case Zr.ROTATE:if(i.enableRotate===!1)return;_e(b),s=r.TOUCH_ROTATE;break;case Zr.PAN:if(i.enablePan===!1)return;De(b),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Zr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(b),s=r.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(b),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qd)}function we(b){switch(at(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ce(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(b),i.update();break;default:s=r.NONE}}function He(b){i.enabled!==!1&&b.preventDefault()}function mt(b){y.push(b.pointerId)}function st(b){delete E[b.pointerId];for(let J=0;J<y.length;J++)if(y[J]==b.pointerId){y.splice(J,1);return}}function je(b){for(let J=0;J<y.length;J++)if(y[J]==b.pointerId)return!0;return!1}function at(b){let J=E[b.pointerId];J===void 0&&(J=new ye,E[b.pointerId]=J),J.set(b.pageX,b.pageY)}function ut(b){const J=b.pointerId===y[0]?y[1]:y[0];return E[J]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",de,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Xe,{passive:!0,capture:!0}),this.update()}}var gl=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,o=0,a=t(new gl.Panel("FPS","#0ff","#002")),l=t(new gl.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new gl.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};gl.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,d=3*o,f=15*o,p=74*o,v=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var g=_.getContext("2d");return g.font="bold "+9*o+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=t,g.fillRect(0,0,a,l),g.fillStyle=e,g.fillText(n,c,u),g.fillRect(d,f,p,v),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(d,f,p,v),{dom:_,update:function(h,x){i=Math.min(i,h),r=Math.max(r,h),g.fillStyle=t,g.globalAlpha=1,g.fillRect(0,0,a,f),g.fillStyle=e,g.fillText(s(h)+" "+n+" ("+s(i)+"-"+s(r)+")",c,u),g.drawImage(_,d+o,f,p-o,v,d,f,p-o,v),g.fillRect(d+p-o,f,o,v),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,s((1-h/x)*v))}}};const eh=new Et;class Nf{constructor(e){e=e||{},this.vertices={near:[new D,new D,new D,new D],far:[new D,new D,new D,new D]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return eh.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(r){r.applyMatrix4(eh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(eh);const s=Math.abs(r.z);i?r.z*=Math.min(t/s,1):r.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Nf);t.length=e.length;for(let i=0;i<e.length;i++){const r=t[i];if(i===0)for(let s=0;s<4;s++)r.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)r.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)r.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)r.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const $v={lights_fragment_begin:`
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
	`+dt.lights_pars_begin},qv=new Et,th=new Nf,gr=new D,Ya=new Ai,nh=[],ih=[],rh=new Et,Kv=new Et,HR=new D(0,1,0);class VR{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new D(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Nf,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new UR(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const r=this.lights[t].shadow.camera,s=this.frustums[t],o=s.vertices.near,a=s.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let u=l.distanceTo(c);if(this.fade){const d=this.camera,f=Math.max(d.far,this.maxFar),p=s.vertices.far[0].z/(f-d.near),v=.25*Math.pow(p,2)*(f-d.near);u+=v}r.left=-u/2,r.right=u/2,r.top=u/2,r.bottom=-u/2,r.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":r(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let u=1;u<o;u++)c.push((a+(l-a)*u/o)/l);c.push(1)}function r(o,a,l,c){for(let u=1;u<o;u++)c.push(a*(l/a)**(u/o)/l);c.push(1)}function s(o,a,l,c,u){nh.length=0,ih.length=0,r(o,a,l,ih),i(o,a,l,nh);for(let d=1;d<o;d++)u.push(li.lerp(nh[d-1],ih[d-1],c));u.push(1)}}update(){const e=this.camera,t=this.frustums;rh.lookAt(new D,this.lightDirection,HR),Kv.copy(rh).invert();for(let i=0;i<t.length;i++){const r=this.lights[i],s=r.shadow.camera,o=(s.right-s.left)/this.shadowMapSize,a=(s.top-s.bottom)/this.shadowMapSize;qv.multiplyMatrices(Kv,e.matrixWorld),t[i].toSpace(qv,th);const l=th.vertices.near,c=th.vertices.far;Ya.makeEmpty();for(let u=0;u<4;u++)Ya.expandByPoint(l[u]),Ya.expandByPoint(c[u]);Ya.getCenter(gr),gr.z=Ya.max.z+this.lightMargin,gr.x=Math.floor(gr.x/o)*o,gr.y=Math.floor(gr.y/a)*a,gr.applyMatrix4(rh),r.position.copy(gr),r.target.position.copy(gr),r.target.position.x+=this.lightDirection.x,r.target.position.y+=this.lightDirection.y,r.target.position.z+=this.lightDirection.z}}injectInclude(){dt.lights_fragment_begin=$v.lights_fragment_begin,dt.lights_pars_begin=$v.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,r=this.shaders;e.onBeforeCompile=function(s){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:o},r.set(e,s)},r.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,r){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=e}!this.fade&&"CSM_FADE"in r.defines?(delete r.defines.CSM_FADE,r.needsUpdate=!0):this.fade&&!("CSM_FADE"in r.defines)&&(r.defines.CSM_FADE="",r.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new ye);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],r=this.breaks[t-1]||0;e[t].x=r,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}const vr=[{t:0,sun:4219040,sunI:.25,sky:2109536,ground:1054768,skyI:.7,fog:1056832,bg:198416},{t:5,sun:5271728,sunI:.25,sky:2635888,ground:1384512,skyI:.72,fog:1386576,bg:330520},{t:6,sun:16740400,sunI:.6,sky:16748640,ground:14704688,skyI:.6,fog:16756856,bg:16756848},{t:7,sun:16756832,sunI:1.2,sky:16763008,ground:14714944,skyI:.75,fog:16765072,bg:16763008},{t:9,sun:16773328,sunI:1.8,sky:11587839,ground:8425664,skyI:.9,fog:13162736,bg:12111080},{t:12,sun:16775920,sunI:2.5,sky:10536191,ground:6320272,skyI:1,fog:12111076,bg:11321568},{t:15,sun:16772288,sunI:2,sky:9484536,ground:5795976,skyI:.9,fog:11585768,bg:11058392},{t:17,sun:16748608,sunI:1.2,sky:16744528,ground:12599328,skyI:.7,fog:16748640,bg:16752736},{t:18,sun:16732192,sunI:.6,sky:16728096,ground:9441328,skyI:.5,fog:13647920,bg:14696496},{t:19,sun:5259392,sunI:.4,sky:3154016,ground:1577008,skyI:.6,fog:2101312,bg:1576248},{t:21,sun:4214928,sunI:.25,sky:2437216,ground:1185840,skyI:.7,fog:1384512,bg:264208},{t:24,sun:4219040,sunI:.25,sky:2109536,ground:1054768,skyI:.7,fog:1056832,bg:198416}],xt={csm:null,skyLight:null,sceneRef:null,timeOfDay:12,customUniforms:{uShadowStyle:{value:0},uTime:{value:0}}},Ls=new nt,Kc=new nt;function $a(n,e,t,i){return Ls.setHex(n),Kc.setHex(e),i.setRGB(Ls.r+(Kc.r-Ls.r)*t,Ls.g+(Kc.g-Ls.g)*t,Ls.b+(Kc.b-Ls.b)*t)}const jr={sunColor:new nt,sunI:0,skyColor:new nt,groundColor:new nt,skyI:0,fogColor:new nt,bgColor:new nt};function GR(n){const e=(n%24+24)%24;let t=vr[vr.length-2],i=vr[vr.length-1];for(let s=0;s<vr.length-1;s++)if(e>=vr[s].t&&e<vr[s+1].t){t=vr[s],i=vr[s+1];break}const r=(e-t.t)/(i.t-t.t);return $a(t.sun,i.sun,r,jr.sunColor),$a(t.sky,i.sky,r,jr.skyColor),$a(t.ground,i.ground,r,jr.groundColor),$a(t.fog,i.fog,r,jr.fogColor),$a(t.bg,i.bg,r,jr.bgColor),jr.sunI=t.sunI+(i.sunI-t.sunI)*r,jr.skyI=t.skyI+(i.skyI-t.skyI)*r,jr}const Zv=Math.PI/180,WR=new D;function XR(n){const e=(n%24+24)%24,t=(e-6)/12,i=t>=0&&t<=1;let r,s;if(i)r=t*Math.PI,s=Math.sin(t*Math.PI)*80*Zv;else{const o=(e-18+24)%24/12;r=Math.PI+o*Math.PI,s=Math.sin(o*Math.PI)*38*Zv}return WR.set(Math.cos(r)*Math.cos(s),Math.max(Math.sin(s),.12),-Math.sin(r)*Math.cos(s)*.35).normalize()}function jR(n,e,t,i){const r=t?.radius??1e3;xt.sceneRef=n,e.shadowMap.enabled=!0,e.shadowMap.type=Km;const s=new VR({maxFar:r*3,cascades:4,mode:"custom",customSplitsCallback:(a,l,c,u)=>{u[0]=.02,u[1]=.08,u[2]=.25,u[3]=1},parent:n,shadowMapSize:4096,lightDirection:new D(-1,-1,-1).normalize(),camera:i,lightMargin:750,lightFar:2e4,lightIntensity:2});for(const a of s.lights)a.shadow.bias=-2e-4,a.shadow.normalBias=.01,a.shadow.autoUpdate=!1,a.shadow.needsUpdate=!0;s.fade=!0,xt.csm=s;const o=new DR(10536191,6320272,.35);o.name="vitro_sky",n.add(o),xt.skyLight=o,nf(xt.timeOfDay)}function nf(n){xt.timeOfDay=n;const{csm:e,skyLight:t,sceneRef:i}=xt;if(!e||!t)return;const r=GR(n),s=XR(n);e.lightDirection.copy(s).negate();for(const o of e.lights)o.color.copy(r.sunColor),o.intensity=r.sunI,o.shadow.needsUpdate=!0;t.color.copy(r.skyColor),t.groundColor.copy(r.groundColor),t.intensity=r.skyI,i?.fog&&i.fog.color.copy(r.fogColor),i?.background?.isColor&&i.background.copy(r.bgColor)}function YR(n){xt.csm&&xt.csm.update()}function Yn(n){if(!xt.csm){console.warn("[LightingSystem] registerCSMMaterial called before initLighting().");return}xt.csm.setupMaterial(n);const e=n.onBeforeCompile;n.onBeforeCompile=(t,i)=>{e&&e(t,i),t.uniforms.uShadowStyle=xt.customUniforms.uShadowStyle,t.uniforms.uTime=xt.customUniforms.uTime,t.vertexShader=`
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
            `)},n.needsUpdate=!0}const $R={},Jv=n=>{let e;const t=new Set,i=(u,d)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const p=e;e=d??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{($R?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},qR=n=>n?Jv(n):Jv;var PS={exports:{}},LS={},DS={exports:{}},IS={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Nn;function KR(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ZR=typeof Object.is=="function"?Object.is:KR,JR=Ea.useState,QR=Ea.useEffect,eP=Ea.useLayoutEffect,tP=Ea.useDebugValue;function nP(n,e){var t=e(),i=JR({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return eP(function(){r.value=t,r.getSnapshot=e,sh(r)&&s({inst:r})},[n,t,e]),QR(function(){return sh(r)&&s({inst:r}),n(function(){sh(r)&&s({inst:r})})},[n]),tP(t),t}function sh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ZR(n,t)}catch{return!0}}function iP(n,e){return e()}var rP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?iP:nP;IS.useSyncExternalStore=Ea.useSyncExternalStore!==void 0?Ea.useSyncExternalStore:rP;DS.exports=IS;var sP=DS.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=Nn,oP=sP;function aP(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var lP=typeof Object.is=="function"?Object.is:aP,cP=oP.useSyncExternalStore,uP=Uf.useRef,fP=Uf.useEffect,dP=Uf.useMemo,hP=Uf.useDebugValue;LS.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=uP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=dP(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,lP(u,p))return v;var _=i(p);return r!==void 0&&r(v,_)?(u=p,v):(u=p,d=_)}var c=!1,u,d,f=t===void 0?null:t;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,t,i,r]);var a=cP(n,s[0],s[1]);return fP(function(){o.hasValue=!0,o.value=a},[a]),hP(a),a};PS.exports=LS;var pP=PS.exports;const mP=Dy(pP),NS={},{useDebugValue:gP}=Gy,{useSyncExternalStoreWithSelector:vP}=mP;let Qv=!1;const yP=n=>n;function xP(n,e=yP,t){(NS?"production":void 0)!=="production"&&t&&!Qv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Qv=!0);const i=vP(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return gP(i),i}const ey=n=>{(NS?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?qR(n):n,t=(i,r)=>xP(e,i,r);return Object.assign(t,e),t},_P=n=>n?ey(n):ey,Su={light:{bg:15461352,bFill:16777215,ink:1710618,road:3355443,sidewalk:11908011,rail:2236962,water:4282992,park:7768677,pitch:9084541,stadium:14342874,nature_reserve:6715989,forest:4874557,veg:8096875,scrub:9210995,terrain:13092284,grass:7768677,farmland:10592390,sand:13748922,parking:6710886,plaza:14670802,aeroway:3355443,institutional:16777215,residential:10920861,commercial:11907756,industrial:10065810,cemetery:9016448,military:10263186,tree:3493676,barrier:8947848,furniture:7829367,topo:14737112,skiRun:16777215,skiLift:2236962,hdrBg:"#ebebe8d0",hdrText:"#1a1a1a",grid:!1,isolationAlpha:.25,hdrFont:"Baskerville"},graphite:{bg:921102,bFill:4737096,ink:14737632,road:7368816,sidewalk:3684408,rail:12105912,water:927816,park:1192978,pitch:1588756,stadium:2763306,nature_reserve:1060880,forest:928268,veg:1585688,scrub:2236948,terrain:3156510,grass:1061904,farmland:2631194,sand:3288610,parking:2631720,plaza:3289648,aeroway:2368550,institutional:2500144,residential:2236962,commercial:2236974,industrial:2104862,cemetery:1843740,military:2104860,tree:2116116,barrier:3684408,furniture:3026476,topo:2368548,skiRun:16777215,skiLift:8947848,hdrBg:"#0e0e0ed0",hdrText:"#ffffff",grid:!0,isolationAlpha:.3,hdrFont:"Montserrat"},blueprint:{bg:1719930,bFill:1985166,ink:16777215,road:16777215,sidewalk:5601448,rail:13163246,water:1192032,park:1456662,pitch:1720856,stadium:2771056,nature_reserve:1324564,forest:1191440,veg:1720344,scrub:1979936,terrain:2242670,grass:1457684,farmland:2373656,sand:3030052,parking:2379920,plaza:2775192,aeroway:16777215,institutional:2773656,residential:1985166,commercial:2247824,industrial:2375288,cemetery:1981982,military:2376822,tree:1724440,barrier:3825306,furniture:3825306,topo:1849970,skiRun:16777215,skiLift:13163246,hdrBg:"#1a3e7ac8",hdrText:"#ffffff",grid:!1,isolationAlpha:.2,hdrFont:"Montserrat"},onyx:{bg:1644825,bFill:16316664,ink:2763306,road:7237230,sidewalk:4210752,rail:10132122,water:1187892,park:1454102,pitch:1981464,stadium:2105376,nature_reserve:1322004,forest:1058832,veg:1847320,scrub:2236440,terrain:2893342,grass:1455638,farmland:2368026,sand:3025440,parking:2565927,plaza:3158064,aeroway:2763306,institutional:2500138,residential:2236962,commercial:2236970,industrial:2105376,cemetery:1974814,military:2105886,tree:1981460,barrier:3421236,furniture:2894892,topo:2762786,skiRun:16316664,skiLift:8947848,hdrBg:"#191919cd",hdrText:"#ffffff",grid:!1,isolationAlpha:.25,hdrFont:"Montserrat"},sketch:{bg:15591391,bFill:16776955,ink:2960685,road:4473924,sidewalk:4473924,rail:2960685,water:1847620,park:15591391,pitch:15591391,stadium:15591391,nature_reserve:15591391,forest:15591391,veg:15591391,scrub:15591391,terrain:15591391,grass:9354383,farmland:15523264,sand:15785155,parking:15591391,plaza:15591391,aeroway:15591391,institutional:15591391,residential:15591391,commercial:15591391,industrial:15591391,cemetery:15591391,military:15591391,tree:12597547,barrier:4473924,furniture:4473924,topo:15591391,skiRun:16776955,skiLift:2960685,hdrBg:"rgba(237, 231, 223, 0.85)",hdrText:"#2d2d2d",grid:!1,isolationAlpha:.15,hdrFont:"Baskerville"},master:{bg:16579836,bFill:1118481,ink:9474192,road:5592405,sidewalk:15263976,rail:3355443,water:10207957,park:16579836,pitch:16579836,stadium:16579836,nature_reserve:16579836,forest:16579836,veg:16579836,scrub:16579836,terrain:16579836,grass:16579836,farmland:16579836,sand:16579836,parking:15263976,plaza:16053492,aeroway:14737632,institutional:16579836,residential:16579836,commercial:16579836,industrial:16579836,cemetery:15790320,military:15790320,topo:16053492,tree:1118481,barrier:14540253,furniture:14540253,skiRun:16579836,skiLift:1118481,hdrBg:"rgba(252, 252, 252, 0.84)",hdrText:"#111111",grid:!1,isolationAlpha:.1,hdrFont:"Baskerville"},masterdark:{bg:1118481,bFill:16579836,ink:3815994,road:5658198,sidewalk:2763306,rail:7368816,water:1716818,park:1455126,pitch:1851416,stadium:1973790,nature_reserve:1323028,forest:1059856,veg:1848344,scrub:2236952,terrain:2630168,grass:1456660,farmland:2368024,sand:3024926,parking:1973790,plaza:2631718,aeroway:1973790,institutional:2236968,residential:1973790,commercial:1973800,industrial:1842204,cemetery:1712154,military:1843228,topo:2367512,tree:3168296,barrier:3026478,furniture:2500134,skiRun:16579836,skiLift:16579836,hdrBg:"rgba(17, 17, 17, 0.87)",hdrText:"#fcfcfc",grid:!1,isolationAlpha:.1,hdrFont:"Montserrat"},slate:{bg:2567218,bFill:14737624,ink:3554370,road:10133680,sidewalk:5791848,rail:12107976,water:1716822,park:1980448,pitch:2374680,stadium:2633252,nature_reserve:1848350,forest:1585176,veg:2242590,scrub:2632730,terrain:3420200,grass:1981470,farmland:3026462,sand:3551266,parking:3159096,plaza:3685442,aeroway:3026996,institutional:3028026,residential:2895412,commercial:2895932,industrial:2764338,cemetery:2633774,military:2764846,tree:2642472,barrier:4080200,furniture:3685444,topo:3685956,skiRun:14211280,skiLift:5265504,hdrBg:"#272c32c0",hdrText:"#e0e0d8",grid:!1,isolationAlpha:.25,hdrFont:"Montserrat"}},Gi={hd:{label:"1080p  —  1920 × 1080",w:1920,h:1080},"4k":{label:"4K  —  3840 × 2160",w:3840,h:2160},a4l:{label:"A4 Landscape  —  3508 × 2480",w:3508,h:2480},a4p:{label:"A4 Portrait  —  2480 × 3508",w:2480,h:3508},sq2k:{label:"Square  —  2048 × 2048",w:2048,h:2048},sq4k:{label:"Square  —  4096 × 4096",w:4096,h:4096}},qt=_P((n,e)=>({themeName:"light",theme:Su.light,setTheme:t=>n({themeName:t,theme:Su[t]??Su.light}),timeMode:"manual",timeCurrent:15,timeSpeed:1,setTimeMode:t=>n({timeMode:t}),setTimeCurrent:t=>n({timeCurrent:t}),setTimeSpeed:t=>n({timeSpeed:t}),engineMode:"STUDIO",setEngineMode:t=>n({engineMode:t}),isOrthographic:!1,toggleOrthographic:()=>n(t=>({isOrthographic:!t.isOrthographic})),plinthRadius:750,setPlinthRadius:t=>n({plinthRadius:t}),shadowsEnabled:!0,setShadowsEnabled:t=>n({shadowsEnabled:t}),lightsVisible:!0,setLightsVisible:t=>n({lightsVisible:t}),buildingOpacity:1,wireOpacity:1,streetOpacity:1,lineWeight:.5,setBuildingOpacity:t=>n({buildingOpacity:t}),setWireOpacity:t=>n({wireOpacity:t}),setStreetOpacity:t=>n({streetOpacity:t}),setLineWeight:t=>n({lineWeight:t}),isolationActive:!1,parkModeActive:!1,heroEngineActive:!1,setIsolationActive:t=>n({isolationActive:t}),setParkModeActive:t=>n({parkModeActive:t}),setHeroEngineActive:t=>n({heroEngineActive:t}),shadowStyle:0,setShadowStyle:t=>n({shadowStyle:t}),outlineStyle:"lineMat",setOutlineStyle:t=>n({outlineStyle:t}),fov:45,panY:150,setFov:t=>n({fov:t}),setPanY:t=>n({panY:t}),exposure:1,autoExposure:!1,setExposure:t=>n({exposure:t}),setAutoExposure:t=>n({autoExposure:t}),autoRotate:!1,setAutoRotate:t=>n({autoRotate:t}),isLoading:!0,loadingProgress:0,loadingLayer:"",setLoading:t=>n({isLoading:t}),setLoadingProgress:(t,i="")=>n({loadingProgress:t,loadingLayer:i}),canvasPreset:"hd",setCanvasPreset:t=>n({canvasPreset:t}),cityList:[],activeCityKey:localStorage.getItem("activeCityKey")??null,setCityList:t=>n({cityList:t}),setActiveCityKey:t=>n({activeCityKey:t}),meta:null,setMeta:t=>n({meta:t})})),ot={gravity:-35,coyoteTimeMs:120,physics:{playerRadius:.4,eyeHeight:1.8,hardDropThreshold:-30},mantle:{reach:2.5,speed:15},speeds:{walk:5,sprint:12,skateBase:20,skateBoost:35,fallMax:60},jump:{walkForce:7.5,skateForceBase:9,coyoteForce:7.5,wallForceH:12,wallForceV:12,boostKickoffForward:18,boostKickoffY:6}},$t={isActive:!1,movementState:"WALK",velocity:new D(0,0,0),isGrounded:!1,isUnderground:!1,cameraHeading:0,cameraPitch:0,bodyHeading:0,roll:0,wallRoll:0,fallTilt:0,baseFov:70,lastGroundedTime:0,lastJumpTime:0,telemetry:{lastVelocity:new D(0,0,0),lastUpdateTime:0,currentSpeed:0,currentElevation:0,currentHeading:0,currentGForce:0,unitSystem:"imperial"}},zi=new D(0,1,0),US=new D(0,ot.gravity,0),$p=new D,SP=new D,rf=new D,Vl=new D,Yr=new D,ty=new D,ui=new D,Ta=new D,OS=new D,Lo=new D,MP=new D(0,-9.80665,0);let ny=!1;const zS=(n,e,t)=>{const i=Math.sin(n),r=Math.cos(n);e.set(-i,0,-r),t.set(r,0,-i)};function qp(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].z,l=t[s].x,c=t[s].z;a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function wP(){return!1}function EP(n,e,t){const i=n.telemetry,r=performance.now(),s=(r-i.lastUpdateTime)/1e3;i.lastUpdateTime>0&&s>0&&(ui.subVectors(n.velocity,i.lastVelocity).divideScalar(s),Ta.subVectors(ui,MP),i.currentGForce=Ta.length()/9.80665),i.lastVelocity.copy(n.velocity),i.lastUpdateTime=r;const o=n.velocity.length();i.currentSpeed=i.unitSystem==="metric"?o*3.6:o*2.23694;const a=t?.position?.y??0;i.currentElevation=i.unitSystem==="metric"?a:a*3.28084;let l=li.radToDeg(n.cameraHeading);for(;l<0;)l+=360;for(;l>=360;)l-=360;i.currentHeading=l}function TP(n,e,t,i,r){if(!$t.isActive)return;const s=Math.max(.001,Math.min(n,.1)),o=$t,a=e.camera.position,l=performance.now();(!isFinite(o.velocity.x)||!isFinite(o.velocity.y)||!isFinite(o.velocity.z))&&o.velocity.set(0,0,0),(!isFinite(a.x)||!isFinite(a.y)||!isFinite(a.z))&&a.set(0,200,0);const c=bP(e),u=r||wP;AP(a,t,i,o,u),CP(s,o),o.isGrounded?RP(s,o,c,l):PP(s,o,c,l,a,t),LP(s,o,c),IP(s,o,a,c,t,i,l,u),NP(s,e.camera,o),EP(o,s,e.camera)}function bP(n){const e=!!n.keyState.Space,t=e&&!ny;return ny=e,{forward:!!n.keyState.KeyW,backward:!!n.keyState.KeyS,left:!!n.keyState.KeyA,right:!!n.keyState.KeyD,jump:t,boost:!!n.keyState.ShiftLeft||!!n.keyState.ShiftRight}}function AP(n,e,t,i,r){if(i.isUnderground||r(n.x,n.z)){zi.set(0,1,0);return}let s=!1;if(i.isGrounded){const o=kS(t,n.x,n.z),a=n.y-ot.physics.eyeHeight;let l=-1/0,c=null;for(const u of o)a>=u.yTop-.5&&(u.type==="bridge"||u.ring&&qp(n.x,n.z,u.ring))&&u.yTop>l&&(l=u.yTop,c=u);c&&(c.type==="bridge"?(ui.set(c.p2.x-c.p1.x,c.p2.y-c.p1.y,c.p2.z-c.p1.z),ui.lengthSq()>1e-4?(ui.normalize(),Ta.set(ui.z,0,-ui.x).normalize(),zi.crossVectors(Ta,ui).normalize(),zi.y<0&&zi.negate()):zi.set(0,1,0)):zi.set(0,1,0),s=!0)}if(!s){const a=e(n.x+1,n.z)-e(n.x-1,n.z),l=e(n.x,n.z+1)-e(n.x,n.z-1);zi.set(-a,1*2,-l).normalize()}}function CP(n,e,t){zS(e.cameraHeading,rf,Vl);let i=e.cameraHeading-e.bodyHeading;i=li.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI,e.isGrounded||(e.bodyHeading+=i*4*n);const r=1-Math.exp(-15*n);e.movementState==="WALK"&&(e.bodyHeading=e.cameraHeading,e.roll*=1-r)}function RP(n,e,t,i){const r=Math.hypot(e.velocity.x,e.velocity.z);(e.movementState==="FALL"||e.movementState==="GLIDE")&&(e.movementState=r>10?"SKATE":"WALK"),e.movementState==="SKATE"&&r<2&&(e.movementState="WALK");const s=ui.copy(rf).projectOnPlane(zi).normalize(),o=Ta.copy(Vl).projectOnPlane(zi).normalize();if(e.movementState==="WALK"){Yr.set(0,0,0),t.forward&&Yr.add(s),t.backward&&Yr.sub(s),t.left&&Yr.sub(o),t.right&&Yr.add(o);const a=1-Math.exp(-12*n);if(Yr.lengthSq()===0)e.velocity.multiplyScalar(1-(1-Math.exp(-15*n))),e.velocity.length()<.5&&e.velocity.set(0,0,0);else{Yr.normalize();const l=t.boost?ot.speeds.sprint:ot.speeds.walk;ty.copy(Yr).multiplyScalar(l),e.velocity.lerp(ty,a)}t.jump&&(t.boost&&r>3?(e.movementState="SKATE",e.velocity.copy(s).multiplyScalar(ot.jump.boostKickoffForward),e.velocity.y=Math.max(e.velocity.y,ot.jump.boostKickoffY)):e.velocity.y=Math.max(e.velocity.y,ot.jump.walkForce),e.isGrounded=!1,e.lastJumpTime=i)}else if(e.movementState==="SKATE"){let a=e.cameraHeading-e.bodyHeading;a=li.euclideanModulo(a+Math.PI,Math.PI*2)-Math.PI,e.bodyHeading+=a*5*n;let l=0;t.left&&(l=.3),t.right&&(l=-.3);const c=1-Math.exp(-8*n);e.roll+=(l-e.roll)*c,e.bodyHeading+=e.roll*3*n,zS(e.bodyHeading,$p,SP);const u=OS.copy($p).projectOnPlane(zi).normalize(),d=ui.copy(US).projectOnPlane(zi);if(e.velocity.addScaledVector(d,n),t.forward&&e.velocity.addScaledVector(u,15*n),t.backward){const f=1-Math.exp(-5*n);e.velocity.multiplyScalar(1-f)}if(r>.1){const f=t.boost?3:8,p=e.velocity.length(),v=1-Math.exp(-f*n);e.velocity.normalize().lerp(u,v).normalize().multiplyScalar(p)}t.jump&&i-e.lastGroundedTime<150&&(e.velocity.y=Math.max(e.velocity.y,ot.jump.skateForceBase+r*.1),e.isGrounded=!1,e.lastJumpTime=i)}}function PP(n,e,t,i,r,s){t.jump&&i-e.lastGroundedTime<ot.coyoteTimeMs&&i-e.lastJumpTime>ot.coyoteTimeMs&&(e.velocity.y=Math.max(e.velocity.y,ot.jump.coyoteForce),e.lastJumpTime=i),e.velocity.addScaledVector(US,n);const o=Math.hypot(e.velocity.x,e.velocity.z),a=e.velocity.length(),c=r.y-ot.physics.eyeHeight-s(r.x,r.z)>3||o>15||e.movementState==="GLIDE",u=Math.sin(e.bodyHeading),d=Math.cos(e.bodyHeading),f=Math.cos(e.cameraPitch),p=Math.sin(e.cameraPitch),v=OS.set(-u*f,p,-d*f).normalize();let _=!1;if(t.boost&&c){let g=1;if(a>.1&&(g=Ta.copy(e.velocity).normalize().dot(v)),g<.5&&a>5){const h=(.5-g)*4;e.velocity.multiplyScalar(Math.max(0,1-h*n))}(e.velocity.length()<12&&e.cameraPitch>-.2||g<0)&&(_=!0)}else _=!0;if(_){e.movementState="FALL";const g=1-Math.exp(-5*n);e.roll*=1-g,t.left&&e.velocity.addScaledVector(Vl,-15*n),t.right&&e.velocity.addScaledVector(Vl,15*n),t.backward&&e.velocity.addScaledVector(rf,-15*n),t.forward&&e.velocity.addScaledVector(rf,15*n)}else{e.movementState="GLIDE";let g=0;t.left&&(g=.6),t.right&&(g=-.6);const h=1-Math.exp(-6*n);e.roll+=(g-e.roll)*h,e.bodyHeading+=e.roll*3*n;const x=Math.sin(e.bodyHeading),m=Math.cos(e.bodyHeading);v.set(-x*f,p,-m*f).normalize();const S=e.velocity.length();$p.set(Math.sin(-e.bodyHeading),0,Math.cos(-e.bodyHeading));let T=2;e.cameraPitch>0&&(T=1.2),e.cameraPitch<0&&(T=3.5);const A=1-Math.exp(-T*n);ui.copy(e.velocity).normalize(),ui.lerp(v,A).normalize(),e.velocity.copy(ui).multiplyScalar(S);const y=Math.max(0,e.velocity.dot(v)),E=Math.max(0,Math.cos(e.cameraPitch)),M=Math.min(Math.abs(ot.gravity),y*1)*E;e.velocity.y+=M*n}}function LP(n,e,t){const i=Math.hypot(e.velocity.x,e.velocity.z),r=e.velocity.length();if(e.movementState==="WALK"||e.movementState==="SKATE"){let a=ot.speeds.walk;if(e.movementState==="SKATE"&&(a=t.boost?ot.speeds.skateBoost:ot.speeds.skateBase),r>a){const l=1-Math.exp(-3*n);e.velocity.x-=e.velocity.x*l,e.velocity.y-=e.velocity.y*l,e.velocity.z-=e.velocity.z*l}}else if(e.movementState==="FALL"&&i>ot.speeds.fallMax){const a=1-Math.exp(-1.5*n);e.velocity.x-=e.velocity.x*a,e.velocity.z-=e.velocity.z*a}const s=.005+e.velocity.lengthSq()*1e-6,o=1-Math.exp(-s*n);e.velocity.multiplyScalar(1-o)}function kS(n,e,t){if(!n)return[];const i=n(e,t);return i?Array.isArray(i)?i:i.parts&&Array.isArray(i.parts)&&i.parts.length>0?i.parts:[i]:[]}function DP(n,e,t){const i=ot.physics.playerRadius,r=[{x:n.x,z:n.z},{x:n.x+i,z:n.z},{x:n.x-i,z:n.z},{x:n.x,z:n.z+i},{x:n.x,z:n.z-i},{x:n.x+e.velocity.x*.1,z:n.z+e.velocity.z*.1}],s=[];for(const o of r){const a=kS(t,o.x,o.z);for(const l of a)(l.type==="building"||l.type==="bridge"||l.type==="bridgePoly"||l.type==="tunnel"||l.type==="cavern")&&!s.includes(l)&&s.push(l)}return s}function IP(n,e,t,i,r,s,o,a){const l=e.velocity.length()*n,c=Math.max(.1,ot.physics.playerRadius*.5),u=Math.max(1,Math.ceil(l/c)),d=n/u;let f=null,p=!1;const v=e.isGrounded;e.isGrounded=!1,e.isUnderground=!1;for(let x=0;x<u;x++){t.x+=e.velocity.x*d,t.y+=e.velocity.y*d,t.z+=e.velocity.z*d;let m=t.y-ot.physics.eyeHeight,S=t.y+.2;const T=e.velocity.y*d,A=DP(t,e,s);let y=null,E=-1/0;for(const M of A){if(M.type!=="bridge")continue;const w=M.p2.x-M.p1.x,P=M.p2.z-M.p1.z,F=w*w+P*P;if(F===0)continue;const I=((t.x-M.p1.x)*w+(t.z-M.p1.z)*P)/F,H=Math.max(0,Math.min(1,I)),z=M.p1.x+H*w,N=M.p1.z+H*P,V=(t.x-z)**2+(t.z-N)**2,U=M.radiusSq??25;if(V>=U)continue;const $=.5-Math.abs(I-.5);if($>E){E=$;const q=M.p1.y+H*(M.p2.y-M.p1.y);y={yTop:q,deckUnderside:q-1}}}for(const M of A)if(M.type==="bridge"){if(!y)continue;const{yTop:w,deckUnderside:P}=y,F=m-w,I=Math.max(1.5,Math.abs(T)),H=e.velocity.y<=0&&F>=-I&&F<=.4,z=v&&F>-.3&&F<2.5;H||z?(t.y=w+ot.physics.eyeHeight,e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight):e.velocity.y>0&&m<w&&S>=P-I&&(t.y=P-.2,e.velocity.y=-2,S=t.y+.2);break}else if(M.type==="bridgePoly"){const w=m-M.yTop,P=Math.max(1.5,Math.abs(T)),F=e.velocity.y<=0&&w>=-P&&w<=.4,I=v&&w>-.3&&w<2.5;F||I?(t.y=M.yTop+ot.physics.eyeHeight,e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight):e.velocity.y>0&&S<=M.yBase+P&&S>=M.yBase-P&&(t.y=M.yBase-.2,e.velocity.y=-2,S=t.y+.2)}else if(M.type==="tunnel"){const w=M.p2.x-M.p1.x,P=M.p2.z-M.p1.z,F=w*w+P*P;if(F===0)continue;const I=((t.x-M.p1.x)*w+(t.z-M.p1.z)*P)/F;if(I<-.08||I>1.08)continue;const H=Math.max(0,Math.min(1,I)),z=M.p1.x+H*w,N=M.p1.z+H*P,V=t.x-z,U=t.z-N,$=V*V+U*U,q=M.halfW,Q=q*q,ie=q+ot.physics.playerRadius,xe=ie*ie,j=M.p1.y+H*(M.p2.y-M.p1.y),te=j+M.clearance;if(m<j-2||m>te+4||$>xe)continue;const me=H<.06||H>.94;if($<=Q){e.isUnderground=!0;const re=m-j,ge=Math.max(1.5,Math.abs(T)),_e=e.velocity.y<=0&&re>=-ge&&re<=.4,De=v&&re>-.3&&re<2.5;(_e||De)&&(t.y=j+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2),e.velocity.y>0&&S>=te-.1&&(t.y=te-(ot.physics.eyeHeight+.1),e.velocity.y=0,S=t.y+.2)}else if($>1e-4&&!me){const re=Math.sqrt($),ge=V/re,_e=U/re,De=ie-re;t.x-=ge*De,t.z-=_e*De;const Be=e.velocity.x*ge+e.velocity.z*_e;Be>0&&(e.velocity.x-=ge*Be,e.velocity.z-=_e*Be),Lo.set(-ge,0,-_e),f=Lo}}else if(M.type==="cavern"&&M.ring){const w=M.yFloor,P=M.yCeiling;if(m<w-2||m>P+3||!qp(t.x,t.z,M.ring))continue;e.isUnderground=!0;const I=m-w,H=Math.max(.5,Math.abs(T)),z=e.velocity.y<=0&&I>=-H&&I<=.1,N=v&&I>-.1&&I<1.5;if((z||N)&&(t.y=w+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2),e.velocity.y>0&&S>=P-.3&&(t.y=P-.5,e.velocity.y=-2,S=t.y+.2),m+.1<P&&S>w){const V=M.ring,U=V.length,$=ot.physics.playerRadius*ot.physics.playerRadius;for(let q=0;q<U;q++){const Q=V[q],ie=V[(q+1)%U],xe=ie.x-Q.x,j=ie.z-Q.z,te=xe*xe+j*j;if(te===0)continue;let me=((t.x-Q.x)*xe+(t.z-Q.z)*j)/te;me=Math.max(0,Math.min(1,me));const re=Q.x+me*xe,ge=Q.z+me*j,_e=t.x-re,De=t.z-ge,Be=_e*_e+De*De;if(Be<$&&Be>0){const L=Math.sqrt(Be),se=_e/L,ce=De/L,pe=ot.physics.playerRadius-L;t.x+=se*pe,t.z+=ce*pe;const B=e.velocity.x*se+e.velocity.z*ce;B<0&&(e.velocity.x-=se*B,e.velocity.z-=ce*B),Lo.set(se,0,ce),f=Lo}}}}else if(M.type==="building"&&M.ring){const w=M.yTop??10,P=M.yBase??0;if(qp(t.x,t.z,M.ring)){const I=m-w,H=Math.max(.5,Math.abs(T)),z=e.velocity.y<=0&&I>=-H&&I<=.1,N=v&&I>.1&&I<1.5;if(z||N){t.y=w+ot.physics.eyeHeight,e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0,e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight;continue}if(e.velocity.y>0){const V=Math.max(.5,T);S<=P+V&&S>=P-.1&&(t.y=P-.2,e.velocity.y=-2,S=t.y+.2)}}if(m+.1<w&&S>P){const I=M.ring,H=I.length;for(let z=0;z<H;z++){const N=I[z],V=I[(z+1)%H],U=V.x-N.x,$=V.z-N.z,q=U*U+$*$;if(q===0)continue;let Q=((t.x-N.x)*U+(t.z-N.z)*$)/q;Q=Math.max(0,Math.min(1,Q));const ie=N.x+Q*U,xe=N.z+Q*$,j=t.x-ie,te=t.z-xe,me=j*j+te*te,re=ot.physics.playerRadius*ot.physics.playerRadius;if(me<re&&me>0){const ge=Math.sqrt(me),_e=j/ge,De=te/ge,Be=ot.physics.playerRadius-ge;t.x+=_e*Be,t.z+=De*Be;const L=e.velocity.x*_e+e.velocity.z*De;L<0&&(e.movementState==="GLIDE"&&L<-15?(e.velocity.x*=-.1,e.velocity.z*=-.1,e.velocity.y=-5):(e.velocity.x-=_e*L,e.velocity.z-=De*L)),Lo.set(_e,0,De),f=Lo}}!e.isGrounded&&e.velocity.y<=0&&f&&!p&&m<w&&m>w-ot.mantle.reach&&m>P&&(t.y=w+ot.physics.eyeHeight,e.velocity.y=ot.mantle.speed,e.isGrounded=!0,e.lastGroundedTime=o,e.fallTilt=-.15,p=!0)}}if(!e.isGrounded&&!e.isUnderground&&!a(t.x,t.z)){const M=r(t.x,t.z),w=m-M;(w<=.01||v&&w>.01&&w<1.5)&&(t.y=M+ot.physics.eyeHeight,e.velocity.y<0&&(e.velocity.y<ot.physics.hardDropThreshold?e.velocity.set(0,0,0):e.velocity.y=0),e.isGrounded=!0,e.lastGroundedTime=o,m=t.y-ot.physics.eyeHeight,S=t.y+.2)}}let _=0;const g=Math.hypot(e.velocity.x,e.velocity.z);f&&!e.isGrounded&&g>10&&e.movementState!=="FALL"&&(_=f.dot(Vl)*-.6,e.velocity.y<0&&(e.velocity.y+=20*n),i.jump&&(e.velocity.x+=f.x*ot.jump.wallForceH,e.velocity.z+=f.z*ot.jump.wallForceH,e.velocity.y=Math.max(e.velocity.y,ot.jump.wallForceV),e.lastJumpTime=o));const h=1-Math.exp(-10*n);e.wallRoll+=(_-e.wallRoll)*h}function NP(n,e,t){const i=1-Math.exp(-10*n);t.fallTilt*=1-i,e.rotation.order="YXZ";const r=t.movementState==="WALK"?0:t.roll;if(e.rotation.set(t.cameraPitch+t.fallTilt,t.cameraHeading,r+t.wallRoll),e.isPerspectiveCamera){const s=t.movementState==="GLIDE"||t.movementState==="FALL"?t.velocity.length():Math.hypot(t.velocity.x,t.velocity.z);let o=t.baseFov;if(t.movementState!=="WALK"){const a=Math.max(0,Math.min(s/120,1)),l=t.movementState==="GLIDE"&&t.cameraPitch<-.2?Math.abs(t.cameraPitch)*15:0;o+=a*35+l}if(isFinite(o)){const a=1-Math.exp(-8*n);e.fov+=(o-e.fov)*a,e.updateProjectionMatrix()}}}const iy=111320;let wr=null;function UP(n){wr=n}let oh=null,ry=0,ah=0,Xs=null,nl=0,Kp=0,il=0;function OP(n,e){nl=2*(e||1e3),Kp=1/nl,n?.size&&Array.isArray(n?.data)?(Xs=n,il=Xs.size-1,wr&&(wr._topoMaxElev=Xs.data.reduce((t,i)=>i>t?i:t,0),wr._topoGrid=Xs,wr._topoWorldSize=nl)):wr&&(wr._topoWorldSize=nl)}function Ot(n,e){return oh===null&&(ry=wr?.meta?.lon||0,ah=wr?.meta?.lat||0,oh=Math.cos(ah*(Math.PI/180))),{x:(n-ry)*iy*oh,y:(e-ah)*iy,valid:!0}}function Xt(n,e){if(!Xs)return 0;const t=nl*.5;let i=(n+t)*Kp,r=(e+t)*Kp;i<0?i=0:i>1&&(i=1),r<0?r=0:r>1&&(r=1);const s=i*il,o=r*il,a=Math.min(il-1,s|0),l=Math.min(il-1,o|0),c=a+1,u=l+1,d=s-a,f=o-l,p=Xs.size,v=Xs.data,_=v[l*p+a],g=v[l*p+c],h=v[u*p+a],x=v[u*p+c];return d+f<=1?_+d*(g-_)+f*(h-_):x+(1-d)*(h-x)+(1-f)*(g-x)}let Zp=null;function zP(n){Zp=n}const $n=new Map,Jo=50;function sf(n,e,t,i){const r=[],s=Math.floor(n/Jo),o=Math.floor(e/Jo),a=Math.floor(t/Jo),l=Math.floor(i/Jo);for(let c=s;c<=o;c++)for(let u=a;u<=l;u++)r.push(`${c}_${u}`);return r}function vl(n,e,t){let i=!1;const r=t.length;for(let s=0,o=r-1;s<r;o=s++){const a=t[s].x,l=t[s].z,c=t[o].x,u=t[o].z;l>e!=u>e&&n<(c-a)*(e-l)/(u-l)+a&&(i=!i)}return i}function sy(n,e,t){const i=e.x-n.x,r=e.z-n.z;if(Math.hypot(i,r)<.001)return;const o=t+1.5,a=Math.min(n.x,e.x)-o,l=Math.max(n.x,e.x)+o,c=Math.min(n.z,e.z)-o,u=Math.max(n.z,e.z)+o,d={type:"bridge",p1:{x:n.x,y:n.y,z:n.z},p2:{x:e.x,y:e.y,z:e.z},radiusSq:o*o};for(const f of sf(a,l,c,u))$n.has(f)||$n.set(f,[]),$n.get(f).push(d)}function kP(n,e,t){if(!n||n.length<3)return;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(const l of n)l.x<i&&(i=l.x),l.x>r&&(r=l.x),l.z<s&&(s=l.z),l.z>o&&(o=l.z);const a={type:"cavern",ring:n,yFloor:e,yCeiling:t};for(const l of sf(i,r,s,o))$n.has(l)||$n.set(l,[]),$n.get(l).push(a)}function FP(){const n=Zp.portalHoles;for(let e=0;e<n.count;e++)n.data[e].set(0,0,0,0);n.count=0,Zp.uniforms.uPortalCount.value=0}const $r=[];function of(n,e){$r.length=0;const t=`${Math.floor(n/Jo)}_${Math.floor(e/Jo)}`,i=$n.get(t);if(!i)return $r;for(const r of i)if(r.type==="building")vl(n,e,r.ring)&&$r.push({type:r.type,yTop:r.yTop,yBase:r.yBase,ring:r.ring,p1:r.p1,p2:r.p2});else if(r.type==="bridge"){const s=(r.p2.x-r.p1.x)**2+(r.p2.z-r.p1.z)**2;let o=0;s>0&&(o=((n-r.p1.x)*(r.p2.x-r.p1.x)+(e-r.p1.z)*(r.p2.z-r.p1.z))/s,o=Math.max(0,Math.min(1,o)));const a=r.p1.x+o*(r.p2.x-r.p1.x),l=r.p1.z+o*(r.p2.z-r.p1.z);if((n-a)**2+(e-l)**2<=r.radiusSq){const u=r.p1.y+o*(r.p2.y-r.p1.y),d=u-5;$r.push({type:r.type,yTop:u,yBase:d,p1:r.p1,p2:r.p2})}}else if(r.type==="tunnel"){const s=(r.p2.x-r.p1.x)**2+(r.p2.z-r.p1.z)**2;let o=0;s>0&&(o=((n-r.p1.x)*(r.p2.x-r.p1.x)+(e-r.p1.z)*(r.p2.z-r.p1.z))/s,o=Math.max(0,Math.min(1,o)));const a=r.p1.x+o*(r.p2.x-r.p1.x),l=r.p1.z+o*(r.p2.z-r.p1.z);(n-a)**2+(e-l)**2<=r.gridRadiusSq&&$r.push(r)}else r.type==="cavern"?vl(n,e,r.ring)&&$r.push(r):r.type==="bridgePoly"&&vl(n,e,r.ring)&&$r.push(r);return $r}function BP(n,e,t,i){let r=-1/0,s=!1;const o=of(n,e);for(const a of o)a.type==="bridgePoly"&&a.yTop>r&&(r=a.yTop,s=!0);return s&&r>i+.5?r+.1:i}const oy=new Ai,Zc=new D;class Of extends OR{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ht(e,3)),this.setAttribute("uv",new ht(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Yp(t,6,1);return this.setAttribute("instanceStart",new is(i,3,0)),this.setAttribute("instanceEnd",new is(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Yp(t,6,1);return this.setAttribute("instanceColorStart",new is(i,3,0)),this.setAttribute("instanceColorEnd",new is(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new AR(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),oy.setFromBufferAttribute(t),this.boundingBox.union(oy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zc.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zc)),Zc.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Zc));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}let On=null;function HP(n){On=n}const zf=`uniform sampler2D uParkMask;
uniform vec4 uMaskBounds;
uniform float uParkModeActive;
`,kf=`
         if (uParkModeActive > 0.5) {
             vec2 _maskUV = (vCustomWorldPos.xz - uMaskBounds.xy) / (uMaskBounds.zw - uMaskBounds.xy);
             if (_maskUV.x < 0.0 || _maskUV.x > 1.0 || _maskUV.y < 0.0 || _maskUV.y > 1.0) discard;
             if (texture2D(uParkMask, _maskUV).r < 0.5) discard;
         }`;function Ff(n){n.uniforms.uParkMask=On.uniforms.uParkMask,n.uniforms.uMaskBounds=On.uniforms.uMaskBounds,n.uniforms.uParkModeActive=On.uniforms.uParkModeActive}function ay(n){n.vertexShader=`attribute vec2 roadUV;
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
        }`)}function jn(n){n.uniforms.uPlinthRadius=On.uniforms.uPlinthRadius,n.uniforms.uCenter=On.uniforms.uCenter,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
`+zf+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+kf)}function ly(n){n.uniforms.uPlinthRadius=On.uniforms.uPlinthRadius,n.uniforms.uCenter=On.uniforms.uCenter,n.uniforms.uIsolation=On.uniforms.uIsolation,n.uniforms.uIsolationAlpha=On.uniforms.uIsolationAlpha,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
uniform float uIsolation;
uniform float uIsolationAlpha;
`+zf+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+kf)}function cy(n){n.uniforms.uPlinthRadius=On.uniforms.uPlinthRadius,n.uniforms.uCenter=On.uniforms.uCenter,n.uniforms.uIsolation=On.uniforms.uIsolation,n.uniforms.uIsolationAlpha=On.uniforms.uIsolationAlpha,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace(/vec4 end\s*=\s*modelViewMatrix\s*\*\s*vec4\(\s*instanceEnd\s*,\s*1\.0\s*\)\s*;/,`$&
         vec3 _wS = (modelMatrix * vec4(instanceStart, 1.0)).xyz;
         vec3 _wE = (modelMatrix * vec4(instanceEnd,   1.0)).xyz;
         vCustomWorldPos = (position.y < 0.5) ? _wS : _wE;`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
uniform float uIsolation;
uniform float uIsolationAlpha;
`+zf+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("void main() {",`void main() {
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+kf)}function VP(n){n.uniforms.uPlinthRadius=On.uniforms.uPlinthRadius,n.uniforms.uCenter=On.uniforms.uCenter,Ff(n),n.vertexShader=`varying vec3 vCustomWorldPos;
${n.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>

        #ifdef USE_INSTANCING
            vCustomWorldPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        #else
            vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        #endif`),n.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
`+zf+`varying vec3 vCustomWorldPos;
${n.fragmentShader}`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`+kf)}function ln(n){return!!(n.isLineSegments||n.isLine||n.isLineSegments2||n.material?.isLineMaterial)}function lh(n){const e=new Of;return e.setPositions(n.attributes.position.array),n.dispose(),e}function af(n){const e=n.clone();return Yn(e),e.onBeforeCompile=n.onBeforeCompile,e}function or(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Ut;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=uy(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const v=uy(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function uy(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new vn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,p=u.count;f<p;f++)for(let v=0;v<t;v++){const _=u.getComponent(f,v);a.setComponent(f+d,v,_)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function FS(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(n.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,m=a.length;x<m;x++){const S=a[x],T=n.attributes[S];l[S]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const A=n.morphAttributes[S];A&&(c[S]||(c[S]=[]),A.forEach((y,E)=>{const M=new y.array.constructor(y.count*y.itemSize);c[S][E]=new y.constructor(M,y.itemSize,y.normalized)}))}const p=e*.5,v=Math.log10(1/e),_=Math.pow(10,v),g=p*_;for(let x=0;x<s;x++){const m=i?i.getX(x):x;let S="";for(let T=0,A=a.length;T<A;T++){const y=a[T],E=n.getAttribute(y),M=E.itemSize;for(let w=0;w<M;w++)S+=`${~~(E[d[w]](m)*_+g)},`}if(S in t)u.push(t[S]);else{for(let T=0,A=a.length;T<A;T++){const y=a[T],E=n.getAttribute(y),M=n.morphAttributes[y],w=E.itemSize,P=l[y],F=c[y];for(let I=0;I<w;I++){const H=d[I],z=f[I];if(P[z](o,E[H](m)),M)for(let N=0,V=M.length;N<V;N++)F[N][z](o,M[N][H](m))}}t[S]=o,u.push(o),o++}}const h=n.clone();for(const x in n.attributes){const m=l[x];if(h.setAttribute(x,new m.constructor(m.array.slice(0,o*m.itemSize),m.itemSize,m.normalized)),x in c)for(let S=0;S<c[x].length;S++){const T=c[x][S];h.morphAttributes[x][S]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return h.setIndex(u),h}Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ye(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kn.line={uniforms:ag.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
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
		`};class Jp extends Ur{constructor(e){super({type:"LineMaterial",uniforms:ag.clone(Kn.line.uniforms),vertexShader:Kn.line.vertexShader,fragmentShader:Kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ch=new Ht,fy=new D,dy=new D,wn=new Ht,En=new Ht,Ki=new Ht,uh=new D,fh=new Et,bn=new zR,hy=new D,Jc=new Ai,Qc=new zr,Zi=new Ht;let tr,$s;function py(n,e,t){return Zi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=$s/t.width,Zi.y=$s/t.height,Zi.applyMatrix4(n.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function GP(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){bn.start.fromBufferAttribute(r,a),bn.end.fromBufferAttribute(s,a),bn.applyMatrix4(t);const c=new D,u=new D;tr.distanceSqToSegment(bn.start,bn.end,u,c),u.distanceTo(c)<$s*.5&&e.push({point:u,pointOnLine:c,distance:tr.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function WP(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;tr.at(1,Ki),Ki.w=1,Ki.applyMatrix4(e.matrixWorldInverse),Ki.applyMatrix4(i),Ki.multiplyScalar(1/Ki.w),Ki.x*=s.x/2,Ki.y*=s.y/2,Ki.z=0,uh.copy(Ki),fh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(wn.fromBufferAttribute(l,f),En.fromBufferAttribute(c,f),wn.w=1,En.w=1,wn.applyMatrix4(fh),En.applyMatrix4(fh),wn.z>d&&En.z>d)continue;if(wn.z>d){const m=wn.z-En.z,S=(wn.z-d)/m;wn.lerp(En,S)}else if(En.z>d){const m=En.z-wn.z,S=(En.z-d)/m;En.lerp(wn,S)}wn.applyMatrix4(i),En.applyMatrix4(i),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=s.x/2,wn.y*=s.y/2,En.x*=s.x/2,En.y*=s.y/2,bn.start.copy(wn),bn.start.z=0,bn.end.copy(En),bn.end.z=0;const _=bn.closestPointToPointParameter(uh,!0);bn.at(_,hy);const g=li.lerp(wn.z,En.z,_),h=g>=-1&&g<=1,x=uh.distanceTo(hy)<$s*.5;if(h&&x){bn.start.fromBufferAttribute(l,f),bn.end.fromBufferAttribute(c,f),bn.start.applyMatrix4(o),bn.end.applyMatrix4(o);const m=new D,S=new D;tr.distanceSqToSegment(bn.start,bn.end,S,m),t.push({point:S,pointOnLine:m,distance:tr.origin.distanceTo(S),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}class yl extends Zt{constructor(e=new Of,t=new Jp({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)fy.fromBufferAttribute(t,o),dy.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+fy.distanceTo(dy);const s=new Yp(r,2,1);return e.setAttribute("instanceDistanceStart",new is(s,1,0)),e.setAttribute("instanceDistanceEnd",new is(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;tr=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;$s=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Qc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$s*.5;else{const d=Math.max(r.near,Qc.distanceToPoint(tr.origin));c=py(r,d,l.resolution)}if(Qc.radius+=c,tr.intersectsSphere(Qc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Jc.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=$s*.5;else{const d=Math.max(r.near,Jc.distanceToPoint(tr.origin));u=py(r,d,l.resolution)}Jc.expandByScalar(u),tr.intersectsBox(Jc)!==!1&&(i?GP(this,t):WP(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ch),this.material.uniforms.resolution.value.set(ch.z,ch.w))}}let Uo=null;function XP(n){Uo=n}function lf(){return new Promise(n=>setTimeout(n,0))}function mg(n){n.forEach(e=>{e.boundingSphere||e.computeBoundingSphere()}),n.sort((e,t)=>{const i=Math.floor(e.boundingSphere.center.x/500),r=Math.floor(e.boundingSphere.center.z/500),s=Math.floor(t.boundingSphere.center.x/500),o=Math.floor(t.boundingSphere.center.z/500);return i!==s?i-s:r-o})}async function ks(n,e,t,i){if(n.length===0)return;mg(n);const r=t?500:250;for(let s=0;s<n.length;s+=r){const o=n.slice(s,s+r);for(const f of o)for(const p of Object.keys(f.attributes))p!=="position"&&p!=="normal"&&p!=="color"&&f.deleteAttribute(p);const a=o.some(f=>f.index!==null),l=o.some(f=>f.index===null),c=a&&l?o.map(f=>f.index!==null?f.toNonIndexed():f):o,u=or(c);if(c!==o&&c.forEach((f,p)=>{f!==o[p]&&f.dispose()}),o.forEach(f=>f.dispose()),!u){await lf();continue}let d;if(t){const f=new Of;f.setPositions(u.attributes.position.array),u.dispose(),d=new yl(f,e)}else d=new Zt(u,e),d.castShadow=!0,d.receiveShadow=!0;d.userData.isGhost=!1,d.matrixAutoUpdate=!1,d.updateMatrix(),i.add(d),await lf()}}async function my(n,e,t,i,r,s){n.length&&(await ks(n,s.bldgFill,!1,Uo.groups.bFill),n.length=0),e.length&&(await ks(e,s.ctxLine,!0,Uo.groups.bWire),e.length=0),t.length&&(await ks(t,s.bldgFill,!1,Uo.groups.roofs),t.length=0),i.length&&(await ks(i,s.ctxLine,!0,Uo.groups.roofs),i.length=0),r.length&&(await ks(r,s.ctxLine,!0,Uo.groups.detail),r.length=0)}function Gl(n){return n.type==="Polygon"?[n.coordinates]:n.type==="MultiPolygon"?n.coordinates:[]}function Qp(n){if(!n?.[0])return null;const e=new Cr,t=[];for(const u of n[0]){if(!u||u.length<2)continue;const d=Ot(u[0],u[1]);d.valid&&t.push(d)}if(t.length<3)return null;const i=t[0],r=t[t.length-1],s=Math.hypot(r.x-i.x,r.y-i.y),o=1e3,a=Math.hypot(i.x,i.y),l=Math.hypot(r.x,r.y);if(s>o*.25&&a>o*.8&&l>o*.8){const u=(i.x+r.x)/2,d=(i.y+r.y)/2;let f=Math.hypot(u,d),p=u,v=d;f<1?(p=1,v=0):(p/=f,v/=f);const _=o*10;t.push({x:r.x+p*_,y:r.y+v*_}),t.push({x:i.x+p*_,y:i.y+v*_})}let c=0;for(let u=0;u<t.length;u++){const d=(u+1)%t.length;c+=t[u].x*t[d].y,c-=t[d].x*t[u].y}c<0&&t.reverse(),t.forEach((u,d)=>d===0?e.moveTo(u.x,u.y):e.lineTo(u.x,u.y));for(let u=1;u<n.length;u++){const d=[];for(const v of n[u]){if(!v||v.length<2)continue;const _=Ot(v[0],v[1]);_.valid&&d.push(_)}if(d.length<3)continue;let f=0;for(let v=0;v<d.length;v++){const _=(v+1)%d.length;f+=d[v].x*d[_].y,f-=d[_].x*d[v].y}f>0&&d.reverse();const p=new kl;d.forEach((v,_)=>_===0?p.moveTo(v.x,v.y):p.lineTo(v.x,v.y)),e.holes.push(p)}return e}let Oo=null;function jP(n){Oo=n}function YP(n,e,t){if(!n?.features?.length)return;const i=new Set,r=6;function s(m){if(m?.features)for(const S of m.features){const T=S.geometry?.type;if(T!=="LineString"&&T!=="MultiLineString")continue;const A=T==="LineString"?[S.geometry.coordinates]:S.geometry.coordinates;for(const y of A){let E=null;for(const M of y){const w=Ot(M[0],M[1]);if(!w.valid)continue;const P=new ye(w.x,-w.y);if(E){const F=Math.max(1,Math.ceil(E.distanceTo(P)/(r/2)));for(let I=0;I<=F;I++){const H=new ye().lerpVectors(E,P,I/F),z=Math.floor(H.x/r),N=Math.floor(H.y/r);i.add(`${z}_${N}`),i.add(`${z+1}_${N}`),i.add(`${z-1}_${N}`),i.add(`${z}_${N+1}`),i.add(`${z}_${N-1}`)}}E=P}}}}s(e),s(t);const o=new Df(1.5,4,5);o.translate(0,3.5,0);const a=new Es(.2,.25,1.5,4);a.translate(0,.75,0);const l=or([o,a]);o.dispose(),a.dispose();const c=new tl({color:4885050});Yn(c);const u=c.onBeforeCompile;c.onBeforeCompile=(m,S)=>{VP(m),m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
             vec3 _wPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
             float sway = sin(_wPos.x * 0.05 + uTime * 1.5) * sin(_wPos.z * 0.05 + uTime * 1.2);
             transformed.x += sway * max(0.0, position.y - 0.5) * 0.15;
             transformed.z += sway * max(0.0, position.y - 0.5) * 0.15;`),u(m,S)};const d=Oo.maxTrees,f=new Bp(l,c,d);f.instanceMatrix.setUsage(Sa),f.frustumCulled=!1,f.castShadow=!0,f.receiveShadow=!0,f.userData.colorKey="tree";const p=new nn,v=Oo.meta?.radius||1e3;let _=0;const g=[];for(const m of n.features)if(m.geometry)for(const S of Gl(m.geometry)){if(!S[0]||S[0].length<3)continue;const T=S[0].map(F=>{const I=Ot(F[0],F[1]);return{x:I.x,z:-I.y}});let A=1/0,y=-1/0,E=1/0,M=-1/0,w=0;for(let F=0;F<T.length;F++){const I=T[F],H=T[(F+1)%T.length];I.x<A&&(A=I.x),I.x>y&&(y=I.x),I.z<E&&(E=I.z),I.z>M&&(M=I.z),w+=I.x*H.z-H.x*I.z}w=Math.abs(w)/2;const P=Math.max(1,Math.floor(w/100));_+=P,g.push({worldRing:T,bounds:{minX:A,maxX:y,minZ:E,maxZ:M},potential:P})}const h=d/(_||1);let x=0;for(const m of g){if(x>=d)break;const S=Math.ceil(m.potential*h),{minX:T,maxX:A,minZ:y,maxZ:E}=m.bounds;for(let M=0;M<S&&!(x>=d);M++)for(let w=0;w<10;w++){const P=T+Math.random()*(A-T),F=y+Math.random()*(E-y);if(Math.hypot(P,F)>v||!vl(P,F,m.worldRing))continue;const I=Math.floor(P/r),H=Math.floor(F/r);if(i.has(`${I}_${H}`))continue;const z=Xt(P,F),N=.5+Math.random()*1;p.position.set(P,z,F),p.scale.set(N,N,N),p.rotation.y=Math.random()*Math.PI*2,p.updateMatrix(),f.setMatrixAt(x++,p.matrix);break}}f.count=x,f.instanceMatrix.needsUpdate=!0,Oo.treeMesh=f,Oo.treeMeshTotal=x,Oo.groups.veg.add(f)}function $P(n){const e=(n.properties||{}).leisure;return e==="nature_reserve"?"nature_reserve":e==="stadium"||e==="sports_centre"?"stadium":e==="pitch"||e==="track"||e==="golf_course"||e==="miniature_golf"||e==="disc_golf_course"?"pitch":"park"}function qP(n){const e=n.properties||{},t=e.natural,i=e.landuse;return t==="wood"||i==="forest"?"forest":t==="bare_rock"||t==="cliff"?"terrain":t==="sand"||t==="beach"||t==="dune"?"sand":t==="scrub"||t==="heath"||t==="wetland"?"scrub":i==="farmland"||i==="orchard"||i==="vineyard"?"farmland":i==="grass"||i==="meadow"||i==="greenfield"||t==="grassland"||t==="fell"||t==="moor"||t==="tundra"?"grass":"veg"}function KP(n){const e=n.properties||{};return e.amenity==="parking"?"parking":e.aeroway?"aeroway":e.highway==="pedestrian"?"plaza":null}function ZP(n){const e=n.properties||{},t=e.landuse,i=e.amenity;return i==="university"||i==="college"||i==="school"||i==="hospital"||i==="clinic"?"institutional":t==="residential"?"residential":t==="commercial"||t==="retail"?"commercial":t==="industrial"||t==="quarry"||t==="brownfield"||t==="construction"||t==="landfill"||t==="port"?"industrial":t==="cemetery"?"cemetery":t==="military"||e.military?"military":"institutional"}function JP(n,e,t,i,r,s=null,o=null,a=null){if(!n?.features)return;a||(a=Xt);const l=new Map,c=new Map,u=()=>t,d=typeof i=="function"?i:()=>i;for(const f of n.features){if(!f.geometry)continue;const p=s?s(f):"default";l.has(p)||(l.set(p,[]),c.set(p,[]));const v=u(),_=d(f);for(const g of Gl(f.geometry)){const h=Qp(g);if(!h||h.curves.length===0)continue;let x=_>0?new wa(h,{depth:_,bevelEnabled:!1,curveSegments:1}):new so(h,24);x.rotateX(-Math.PI/2);const m=x.attributes.position;for(let S=0;S<m.count;S++){const T=m.getX(S),A=m.getZ(S),y=m.getY(S);m.setY(S,a(T,A)+v+y)}m.needsUpdate=!0,x.computeVertexNormals(),l.get(p).push(x),o&&c.get(p).push(new _i(x,30))}}for(const[f,p]of l){if(p.length===0)continue;const v=e.children.length;ks(p,af(r),!1,e);for(let _=v;_<e.children.length;_++)e.children[_].userData.colorKey=f}if(o)for(const[f,p]of c){if(p.length===0)continue;const v=e.children.length;ks(p,af(o),!0,e);for(let _=v;_<e.children.length;_++)e.children[_].userData.colorKey=f}}let Mu=null;function QP(n){Mu=n}function BS(n,e,t,i,r,s,o,a){const l=Mu.renderer.capabilities.maxTextureSize,c=Mu.highResGround?32768:8192,u=Math.min(c,l),d=document.createElement("canvas");d.width=u,d.height=u;const f=d.getContext("2d");f.fillStyle="#"+new nt(a.topo).getHexString(),f.fillRect(0,0,u,u);const p=(_,g,h)=>{_?.features&&_.features.forEach(x=>{if(!x.geometry)return;const m=x.geometry.type;if(m!=="Polygon"&&m!=="MultiPolygon")return;const S=g?g(x):null,T=S?a[S]:h;if(T==null)return;f.fillStyle="#"+new nt(T).getHexString(),f.beginPath(),(m==="Polygon"?[x.geometry.coordinates]:x.geometry.coordinates).forEach(y=>{y.forEach(E=>{if(!E||E.length<2)return;let M=null,w=null;if(E.forEach(P=>{const F=Ot(P[0],P[1]);if(!F.valid)return;const I=(F.x+o)/(o*2)*u,H=(-F.y+o)/(o*2)*u;M===null?(f.moveTo(I,H),M={x:I,y:H}):f.lineTo(I,H),w={x:I,y:H}}),M&&w){if(Math.hypot(w.x-M.x,w.y-M.y)>u*.2){const F=(M.x+w.x)/2,I=(M.y+w.y)/2;let H=F-u/2,z=I-u/2;const N=Math.hypot(H,z)||1;H/=N,z/=N;const V=u*2;f.lineTo(w.x+H*V,w.y+z*V),f.lineTo(M.x+H*V,M.y+z*V)}f.closePath()}})}),f.fill("evenodd")})};p(n,ZP,a.institutional),p(t,qP,a.veg),p(e,$P,a.park),p(i,()=>"water",a.water),p(s,KP,null),r?.features&&(f.strokeStyle="#"+new nt(a.skiRun||16777215).getHexString(),f.fillStyle=f.strokeStyle,f.lineCap="round",f.lineJoin="round",r.features.forEach(_=>{if(!_.properties?.["piste:type"]||!_.geometry)return;const g=_.geometry.type;if(g==="Point"||g==="MultiPoint"||g==="GeometryCollection")return;const h=g==="Polygon"||g==="MultiPolygon",x=g==="LineString"||g==="Polygon"?[_.geometry.coordinates]:_.geometry.coordinates;f.lineWidth=h?0:Math.max(2,u*.0015),f.beginPath(),x.forEach(m=>{(h?m[0]:m).forEach((T,A)=>{const y=Ot(T[0],T[1]);if(!y.valid)return;const E=(y.x+o)/(o*2)*u,M=(-y.y+o)/(o*2)*u;A===0?f.moveTo(E,M):f.lineTo(E,M)})}),h?f.fill("evenodd"):f.stroke()}));const v=new Gp(d);return v.flipY=!1,v.anisotropy=Mu.renderer.capabilities.getMaxAnisotropy(),v.colorSpace=Oi,v.generateMipmaps=!0,v.minFilter=oE,v}class eL extends pg{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new LR(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new tL(e)}}class tL{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=nL(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function nL(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const d=iL(u,r,a,l,t);a+=d.offsetX,o.push(d.path)}}return o}function iL(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new kR;let a,l,c,u,d,f,p,v;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,h=_.length;g<h;)switch(_[g++]){case"m":a=_[g++]*e+t,l=_[g++]*e+i,o.moveTo(a,l);break;case"l":a=_[g++]*e+t,l=_[g++]*e+i,o.lineTo(a,l);break;case"q":c=_[g++]*e+t,u=_[g++]*e+i,d=_[g++]*e+t,f=_[g++]*e+i,o.quadraticCurveTo(d,f,c,u);break;case"b":c=_[g++]*e+t,u=_[g++]*e+i,d=_[g++]*e+t,f=_[g++]*e+i,p=_[g++]*e+t,v=_[g++]*e+i,o.bezierCurveTo(d,f,p,v,c,u);break}}return{offsetX:s.ha*e,path:o}}class rL extends wa{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const xi={motorway:{width:14,color:3355443,hasLines:!0,camber:0},trunk:{width:12,color:3355443,hasLines:!0,camber:0},primary:{width:10,color:4473924,hasLines:!0,camber:0},secondary:{width:8,color:5592405,hasLines:!0,camber:0},residential:{width:6,color:6710886,hasLines:!1,camber:0},railway:{width:5,color:2236962,hasLines:!1,camber:0},footway:{width:4,color:8943462,hasLines:!1,camber:.5},pedestrian:{width:6,color:8943462,hasLines:!1,camber:0},steps:{width:1.5,color:7824981,hasLines:!1,camber:0},path:{width:4,color:8943462,hasLines:!1,camber:.3},default:{width:6,color:5592405,hasLines:!0,camber:0}},sL=5,eu=30,oL=30,aL=.2,gy=n=>-(Math.cos(Math.PI*n)-1)/2;function lL(n){if(n.railway)return xi.railway;const e=(n.highway||"").toLowerCase();return e==="motorway"?xi.motorway:e==="trunk"?xi.trunk:e==="primary"?xi.primary:e==="secondary"||e==="tertiary"?xi.secondary:e==="residential"||e==="unclassified"||e==="road"||e==="living_street"||e==="service"?xi.residential:e==="footway"?xi.footway:e==="pedestrian"?xi.pedestrian:e==="steps"?xi.steps:e==="path"||e==="cycleway"||e==="track"?xi.path:xi.default}function vy(n,e){if(!n)return e;const t=n.toLowerCase().trim(),i={brick:9194034,brown:10824234,red:13369344,white:16777215,grey:8421504,gray:8421504,black:2236962,blue:17612,green:32768,yellow:16766720,orange:16747520,beige:16119260,glass:8965375,silver:12632256,concrete:10066329};if(i[t])return i[t];if(t.startsWith("#")){const r=parseInt(t.replace("#",""),16);return isNaN(r)?e:r}return e}function Do(n,e){const t=n.attributes.position.count,i=new Float32Array(t*3),r=new nt(e);for(let s=0;s<t;s++)i[s*3]=r.r,i[s*3+1]=r.g,i[s*3+2]=r.b;n.setAttribute("color",new vn(i,3))}function dh(n,e,t){if(n.length<2)return[];const i=[n[0]];for(let s=1;s<n.length;s++)Math.hypot(n[s].x-i[i.length-1].x,n[s].y-i[i.length-1].y)>.1&&i.push(n[s]);if(i.length<2)return[];const r=[];for(let s=0;s<i.length-1;s++){const o=i[s],a=i[s+1],l=new D(o.x,0,-o.y);l.y=t(l.x,l.z),s===0&&r.push(l);const c=Math.hypot(a.x-o.x,a.y-o.y);if(c>e){const d=Math.ceil(c/e);for(let f=1;f<d;f++){const p=f/d,v=new D(o.x+(a.x-o.x)*p,0,-(o.y+(a.y-o.y)*p));v.y=t(v.x,v.z),r.push(v)}}const u=new D(a.x,0,-a.y);u.y=t(u.x,u.z),r.push(u)}return r}function yy(n,e=3){if(n.length<3)return n;for(let t=0;t<e;t++){const i=new Float32Array(n.length);i[0]=n[0].y,i[n.length-1]=n[n.length-1].y;for(let r=1;r<n.length-1;r++)i[r]=(n[r-1].y+n[r].y+n[r+1].y)/3;for(let r=1;r<n.length-1;r++)n[r].y=i[r]}return n}function cL(n,e){if(n.length<2)return null;const t=[],i=[],r=[],s=[];let o=0;for(let l=0;l<n.length;l++){const c=n[l];l>0&&(o+=Math.hypot(c.x-n[l-1].x,c.z-n[l-1].z));const u=o/4;t.push(c.x,c.y,c.z),r.push(0,u),s.push(0),t.push(c.x,c.y+e,c.z),r.push(1,u),s.push(0)}for(let l=0;l<n.length-1;l++){const c=l*2;i.push(c,c+1,c+2,c+1,c+3,c+2)}const a=new Ut;return a.setAttribute("position",new ht(t,3)),a.setAttribute("roadUV",new ht(r,2)),a.setAttribute("roadED",new ht(s,1)),a.setIndex(i),a.computeVertexNormals(),a}function xy(n,e){const{cfg:t,halfW:i,layer:r,taperStart:s,taperEnd:o,archBridge:a=!1,markings:l=!0,priorityOffset:c=0}=e;let u=[n[0]];for(let N=1;N<n.length;N++)Math.hypot(n[N].x-u[u.length-1].x,n[N].y-u[u.length-1].y)>.1&&u.push(n[N]);if(u.length<2)return null;const d=2,f=[new D(u[0].x,0,-u[0].y)],p=[0];let v=0;for(let N=0;N<u.length-1;N++){const V=u[N],U=u[N+1],$=Math.ceil(Math.hypot(U.x-V.x,U.y-V.y)/d);for(let q=1;q<=$;q++){const Q=q/$,ie=new D(V.x+(U.x-V.x)*Q,0,-(V.y+(U.y-V.y)*Q));v+=f[f.length-1].distanceTo(ie),p.push(v),f.push(ie)}}const g=(r&&r>0?r:1)*sL+c,h=.8,x=Xt(f[0].x,f[0].z),m=Xt(f[f.length-1].x,f[f.length-1].z),S=f.map(N=>Xt(N.x,N.z)),T=[],A=[],y=[],E=[];for(let N=0;N<f.length;N++){const V=f[N];let U=new ye;if(N===0)U.set(f[1].x-V.x,f[1].z-V.z).normalize();else if(N===f.length-1)U.set(V.x-f[N-1].x,V.z-f[N-1].z).normalize();else{const pe=new ye(V.x-f[N-1].x,V.z-f[N-1].z).normalize(),B=new ye(f[N+1].x-V.x,f[N+1].z-V.z).normalize();U.addVectors(pe,B).normalize(),U.lengthSq()<.001&&U.copy(pe)}const $=-U.y*i,q=U.x*i,Q=p[N],ie=v-Q;let xe=1;s&&Q<eu&&(xe*=gy(Q/eu)),o&&ie<eu&&(xe*=gy(ie/eu));const j=a&&t.camber>0&&v>0?Math.sin(Q/v*Math.PI)*t.camber*xe:0,te=v>0?Q/v:0;let re=x*(1-te)+m*te+g*xe+j;re=Math.max(re,S[N]+.1),V.y=re;const ge=re-h,_e=V.x+$,De=V.z+q,Be=V.x-$,L=V.z-q;T.push(_e,re,De,Be,re,L,_e,ge,De,Be,ge,L),T.push(_e,re,De,_e,ge,De,Be,re,L,Be,ge,L);const se=Q/4,ce=l&&t.hasLines?Math.min(Q,ie):0;y.push(0,se,1,se,0,se,1,se),y.push(0,se,0,se,1,se,1,se);for(let pe=0;pe<8;pe++)E.push(ce)}for(let N=0;N<f.length-1;N++){const V=N*8,U=(N+1)*8;A.push(V+0,V+1,U+1,V+0,U+1,U+0),A.push(V+2,U+3,V+3,V+2,U+2,U+3),A.push(V+4,V+5,U+5,V+4,U+5,U+4),A.push(V+6,U+7,V+7,V+6,U+6,U+7)}let M=new Ut;M.setAttribute("position",new ht(T,3)),M.setAttribute("roadUV",new ht(y,2)),M.setAttribute("roadED",new ht(E,1)),M.setIndex(A),M.computeVertexNormals();const w=Math.min(.55,i*.22),P=10,F=.5,I=[];let H=0;for(let N=0;N<f.length-1;N++){const V=f[N],U=f[N+1];if(H+=V.distanceTo(U),H<oL)continue;H=0;const $=Xt(V.x,V.z),q=V.y,Q=q-aL,ie=Q-$;if(ie<.8)continue;const xe=U.x-V.x,j=U.z-V.z,te=Math.hypot(xe,j)||1,me=-j/te,re=xe/te,ge=i>=4.5?3:2,_e=i*.72,De=$+ie*.5,Be=Q-F*.5;for(let ce=0;ce<ge;ce++){const pe=ge===1?0:ce/(ge-1)-.5,B=V.x+me*(pe*_e*2),ze=V.z+re*(pe*_e*2),be=new Es(w,w*1.15,ie,P);be.translate(B,De,ze),be.deleteAttribute("uv"),I.push(be),sy({x:B,y:$,z:ze},{x:B,y:q,z:ze},w+.15)}const L=_e*2+w*2,se=new ni(L,F,w*2);se.rotateY(Math.atan2(me,re)),se.translate(V.x,Be,V.z),se.deleteAttribute("uv"),I.push(se)}let z=null;if(I.length>0){z=or(I),I.forEach(V=>V.dispose());const N=z.attributes.position.count;z.setAttribute("roadUV",new ht(new Float32Array(N*2),2)),z.setAttribute("roadED",new ht(new Float32Array(N),1))}for(let N=0;N<f.length-1;N++)sy(f[N],f[N+1],i);return{deckGeo:M,pierGeo:z}}function qa(n,e,t=!0){if(n.length<2)return null;const i=[],r=[],s=[],o=[];let a=1,l=0,c=0,u=0;for(let f=1;f<n.length;f++)u+=Math.hypot(n[f].x-n[f-1].x,n[f].z-n[f-1].z);for(let f=0;f<n.length;f++){const p=n[f>0?f-1:0],v=n[f<n.length-1?f+1:n.length-1];f>0&&(c+=Math.hypot(n[f].x-n[f-1].x,n[f].z-n[f-1].z));let _=v.x-p.x,g=v.z-p.z;const h=Math.hypot(_,g);h<1e-5?(_=a,g=l):(_/=h,g/=h,a=_,l=g);const x=-g*e,m=_*e,S=n[f].x+x,T=n[f].z+m,A=n[f].x-x,y=n[f].z-m;let E,M;if(n[f].isBridgeDeck)E=M=n[f].y;else{const F=Xt(S,T),I=Xt(A,y),H=Xt(n[f].x,n[f].z),z=n[f].y-H,N=Math.max(0,H-(F+I)/2);E=F+z+N,M=I+z+N}const w=c/4,P=t?Math.min(c,u-c):0;i.push(S,E,T),s.push(0,w),o.push(P),i.push(A,M,y),s.push(1,w),o.push(P)}for(let f=0;f<n.length-1;f++){const p=f*2;r.push(p,p+2,p+1,p+1,p+2,p+3)}const d=new Ut;return d.setAttribute("position",new ht(i,3)),d.setAttribute("roadUV",new ht(s,2)),d.setAttribute("roadED",new ht(o,1)),d.setIndex(r),d.computeVertexNormals(),d}function _y(n,e,t,i=0){const r=[],o=t>0?t:Math.floor((e-i)/3.5);for(let a=0;a<n.length-1;a++){const l=n[a],c=n[a+1],u=c.x-l.x,d=c.y-l.y,f=Math.hypot(u,d);if(f<6||isNaN(f))continue;const p=Math.floor(f/16);for(let v=1;v<p;v++){const _=v/p,g=l.x+u*_,h=-(l.y+d*_);r.push(new D(g,i,h),new D(g,e,h))}if(o>4)for(let v=4;v<o;v+=4){const _=i+v*((e-i)/o);r.push(new D(l.x,_,-l.y),new D(c.x,_,-c.y))}}return r}const uL=new Set(["vault","sphere","dome","shell","round","freeform","barrel","arch","curved","onion","cone","pyramidal","pyramid","gabled","gable","hipped","hip","gambrel","mansard"]);function fL(n,e){if(e<4)return!0;let t=0;for(let i=0;i<e;i++){const r=n[i],s=n[(i+1)%e],o=n[(i+2)%e],a=s.x-r.x,l=s.y-r.y,c=o.x-s.x,u=o.y-s.y,d=a*u-l*c,f=(a*a+l*l)*(c*c+u*u);if(!(f<1e-12)&&d*d>f*3e-4){const p=d>0?1:-1;if(t===0)t=p;else if(p!==t)return!1}}return!0}function dL(n,e,t,i){const r=n.length;if(r<3)return null;const s=r-1,o=r>3&&n[0].x===n[s].x&&n[0].y===n[s].y?s:r;let a=0;for(let z=0;z<o;z++){const N=(z+1)%o;a+=n[z].x*n[N].y-n[N].x*n[z].y}const l=new Cr;if(a>=0)for(let z=0;z<o;z++)z===0?l.moveTo(n[z].x,n[z].y):l.lineTo(n[z].x,n[z].y);else for(let z=o-1;z>=0;z--)z===o-1?l.moveTo(n[z].x,n[z].y):l.lineTo(n[z].x,n[z].y);const c=new so(l),u=c.attributes.position,d=u.count;let f=0,p=n[0].x,v=n[0].y,_=n[o>1?1:0].x,g=n[o>1?1:0].y;for(let z=0;z<o;z++)for(let N=z+1;N<o;N++){const V=(n[N].x-n[z].x)**2+(n[N].y-n[z].y)**2;V>f&&(f=V,p=n[z].x,v=n[z].y,_=n[N].x,g=n[N].y)}const h=Math.sqrt(f)||1e-4,x=(_-p)/h,m=(g-v)/h;let S=1/0,T=-1/0,A=1/0,y=-1/0;for(let z=0;z<o;z++){const N=(n[z].x-p)*x+(n[z].y-v)*m,V=-(n[z].x-p)*m+(n[z].y-v)*x;N<S&&(S=N),N>T&&(T=N),V<A&&(A=V),V>y&&(y=V)}const E=(S+T)*.5,M=(T-S)*.5,w=(A+y)*.5,P=Math.max(1e-4,(y-A)*.5),F=M*(1-i),I=M*i,H=t>0?t:Math.max(1.5,P*.4);for(let z=0;z<d;z++){const N=u.getX(z),V=u.getY(z),U=(N-p)*x+(V-v)*m,$=-(N-p)*m+(V-v)*x,q=Math.min(1,Math.abs($-w)/P),Q=Math.abs(U-E)-F,ie=I>.01?Math.max(0,Math.min(1,Q/I)):0;u.setZ(z,e+H*Math.max(0,1-Math.max(q,ie)))}return u.needsUpdate=!0,c.rotateX(-Math.PI*.5),c.computeVertexNormals(),c}function hL(n,e,t,i){if(!n||n.length<3||!uL.has(t))return null;if(t==="gable"||t==="gabled"||t==="hip"||t==="hipped"||t==="gambrel"||t==="mansard")return dL(n,e,i,t==="gable"||t==="gabled"?0:t==="gambrel"||t==="mansard"?.15:.3);const s=t==="shell"||t==="freeform"||t==="curved",o=t==="dome"||t==="sphere"||t==="round";if(s||o||(t==="barrel"||t==="vault"||t==="arch")){const m=n.length,S=m-1,T=m>3&&n[0].x===n[S].x&&n[0].y===n[S].y?S:m;let A=0;for(let P=0;P<T;P++){const F=(P+1)%T;A+=n[P].x*n[F].y-n[F].x*n[P].y}const y=new Cr;if(A>=0)for(let P=0;P<T;P++)(P===0?y.moveTo:y.lineTo).call(y,n[P].x,n[P].y);else for(let P=T-1;P>=0;P--)(P===T-1?y.moveTo:y.lineTo).call(y,n[P].x,n[P].y);const E=new so(y),M=E.attributes.position,w=M.count;if(s){let P=0,F=n[0],I=n[1];for(let U=0;U<T;U++){const $=n[U],q=n[(U+1)%T],Q=(q.x-$.x)**2+(q.y-$.y)**2;Q>P&&(P=Q,F=$,I=q)}const H=(U,$,q,Q,ie,xe)=>{const j=(ie-q)**2+(xe-Q)**2;if(j===0)return(U-q)**2+($-Q)**2;const te=Math.max(0,Math.min(1,((U-q)*(ie-q)+($-Q)*(xe-Q))/j));return(U-(q+te*(ie-q)))**2+($-(Q+te*(xe-Q)))**2},z=new Float32Array(w);let N=1e-4;for(let U=0;U<w;U++){const $=Math.sqrt(H(M.getX(U),M.getY(U),F.x,F.y,I.x,I.y));z[U]=$,$>N&&(N=$)}const V=i>0?i:Math.max(1.5,N*.8);for(let U=0;U<w;U++)M.setZ(U,e+V*Math.sin((1-z[U]/N)*Math.PI*.5))}else if(o){let P=0,F=0;for(let z=0;z<T;z++)P+=n[z].x,F+=n[z].y;P/=T,F/=T;let I=1e-4;for(let z=0;z<T;z++)I=Math.max(I,Math.hypot(n[z].x-P,n[z].y-F));const H=i>0?i:Math.max(1.5,I*.5);for(let z=0;z<w;z++){const N=Math.hypot(M.getX(z)-P,M.getY(z)-F);M.setZ(z,e+H*Math.max(0,1-(N/I)**2))}}else{let P=0,F=n[0],I=n[1];for(let ie=0;ie<T;ie++)for(let xe=ie+1;xe<T;xe++){const j=(n[xe].x-n[ie].x)**2+(n[xe].y-n[ie].y)**2;j>P&&(P=j,F=n[ie],I=n[xe])}const H=Math.sqrt(P)||1e-4,z=(I.x-F.x)/H,N=(I.y-F.y)/H;let V=1/0,U=-1/0;for(let ie=0;ie<T;ie++){const xe=-(n[ie].x-F.x)*N+(n[ie].y-F.y)*z;xe<V&&(V=xe),xe>U&&(U=xe)}const $=(V+U)*.5,q=Math.max(1e-4,(U-V)*.5),Q=i>0?i:Math.max(1.5,q*.6);for(let ie=0;ie<w;ie++){const xe=-(M.getX(ie)-F.x)*N+(M.getY(ie)-F.y)*z,j=Math.max(0,1-Math.abs(xe-$)/q);M.setZ(ie,e+Q*Math.sin(j*Math.PI*.5))}}return M.needsUpdate=!0,E.rotateX(-Math.PI*.5),E.computeVertexNormals(),E}const l=n.length,c=l>3&&n[0].x===n[l-1].x&&n[0].y===n[l-1].y?l-1:l;if(t!=="onion"&&t!=="cone"&&!fL(n,c))return null;let u=0,d=0;for(let m=0;m<c;m++)u+=n[m].x,d+=n[m].y;u/=c,d/=c;let f=0;for(let m=0;m<c;m++)f=Math.max(f,Math.hypot(n[m].x-u,n[m].y-d));if(f<.5)return null;const p=i>0?i:Math.max(1.5,f*.35);if(t==="onion"){const m=new hg(Math.min(f,p),16,8,0,Math.PI*2,0,Math.PI*.5);return m.translate(u,e,-d),m}if(t==="cone"){const m=new Df(f*.85,p,16);return m.translate(u,e+p*.5,-d),m}let v=0;for(let m=0;m<c;m++){const S=(m+1)%c;v+=n[m].x*n[S].y-n[S].x*n[m].y}const _=v>=0,g=new Float32Array(c*9);for(let m=0;m<c;m++){const S=_?n[m]:n[(m+1)%c],T=_?n[(m+1)%c]:n[m];g.set([S.x,e,-S.y,T.x,e,-T.y,u,e+p,-d],m*9)}const h=new Ut;h.setAttribute("position",new ht(g,3));const x=FS(h,1e-4);return x.computeVertexNormals(),x}let Ie=null;function pL(n){Ie=n}const mL=new Promise(n=>{new eL().load("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json",e=>n(e),void 0,e=>{console.warn("[CityPipeline] Inscription font failed:",e),n(null)})});function Ji(n,e,t){qt.setState({loadingProgress:Math.round(n/e*100),loadingLayer:t})}function gL(){qt.setState({isLoading:!1})}function Sy(n){return n.type==="Polygon"&&n.coordinates[0]?n.coordinates[0][0]:n.type==="MultiPolygon"&&n.coordinates[0][0]?n.coordinates[0][0][0]:n.type==="LineString"&&n.coordinates?n.coordinates[0]:null}const Io=(n,e)=>`${Number(n).toFixed(4)},${Number(e).toFixed(4)}`;function ba(n){n.deleteAttribute("uv");const e=n.attributes.position.count;n.setAttribute("roadUV",new ht(new Float32Array(e*2),2)),n.setAttribute("roadED",new ht(new Float32Array(e),1))}function vL(n,e,t,i,r,s,o){const a=new ni(.4,s,.4);a.translate(t,r+s/2,i);const l=new ni(.4,.4,3);l.translate(0,s/2,0),l.rotateY(o+Math.PI/2),l.translate(t,r+s/2,i),ba(a),ba(l),n.push(a,l)}function yL(n,e,t,i,r,s,o){const a=new ni(.4,s,.4);a.translate(t,r+s/2,i);const l=new ni(3,.4,.4);l.translate(0,s/2,0),l.rotateY(o+Math.PI/2),l.translate(t,r+s/2,i),ba(a),ba(l),n.push(a,l),e&&(e.push(new _i(a,30)),e.push(new _i(l,30)))}function xL(n,e,t,i,r,s){const o=new ni(1.2,.8,.8);o.translate(0,-1.8,0),o.rotateY(s),o.translate(t,i,r);const a=new Es(.05,.05,1.5);a.translate(0,-.75,0),a.rotateY(s),a.translate(t,i,r),ba(o),ba(a),n.push(o,a),e&&(e.push(new _i(o,30)),e.push(new _i(a,30)))}async function Di(n,e,t,i,r){if(n.length===0)return;mg(n);const s=n.some(l=>l.index!==null),o=n.some(l=>l.index===null);if(s&&o){for(let l=0;l<n.length;l++)if(n[l].index!==null){const c=n[l].toNonIndexed();n[l].dispose(),n[l]=c}}const a=250;for(let l=0;l<n.length;l+=a){const c=n.slice(l,l+a),u=or(c);if(c.forEach(d=>d.dispose()),u){u.computeBoundingBox(),u.computeBoundingSphere();const d=new Zt(u,e);d.castShadow=r,d.receiveShadow=!0,d.matrixAutoUpdate=!1,d.updateMatrix(),d.userData.colorKey=i,t.add(d)}await lf()}}async function My(n,e,t,i){if(n.length===0)return;mg(n);const r=250;for(let s=0;s<n.length;s+=r){const o=n.slice(s,s+r),a=or(o);if(o.forEach(l=>l.dispose()),a){a.computeBoundingBox(),a.computeBoundingSphere();const l=new Of;l.setPositions(a.attributes.position.array),a.dispose();const c=new yl(l,e);c.matrixAutoUpdate=!1,c.updateMatrix(),c.userData.colorKey=i,t.add(c)}await lf()}}async function _L(){FP(),$n.clear(),Ji(0,9,"Topography");const n="?v="+Date.now();async function e(k){try{const Y=await fetch(k+n);return Y.ok?await Y.json():k.endsWith(".json")?{size:0,data:[]}:{features:[]}}catch(Y){return console.warn(`[CityPipeline] Failed: ${k}`,Y),k.endsWith(".json")?{size:0,data:[]}:{features:[]}}}const t=Ot(Ie.meta.lon,Ie.meta.lat),i="./"+(Ie.meta.data_path||"")+(Ie.meta.file_prefix||"");let r=[];{const k=await e(i+"combined_topo_grid.json");OP(k,Ie.meta.radius)}Ji(1,9,"Structural Platforms");let s=await e(i+"combined_skeleton.geojson");const o=[],a=[],l=[],c=[],u=[],d=[],f=[],p=[],v=[],_=[],g=[],h=.5;if(s?.features)for(const k of s.features){const Y=k.geometry?.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=k.properties||{};if(Oe.bridge&&Oe.bridge!=="no"||Oe.man_made==="bridge")continue;const Ve=Oe.building||Oe["building:part"],qe=Oe.highway==="corridor";if(!(!Ve&&!qe&&parseFloat(Oe.layer)>=1&&!Oe.highway))continue;const Ee=parseFloat(Oe.layer)||1,lt=(Oe.highway||"").toLowerCase(),wt=lt==="motorway"||lt==="trunk"?.6:lt==="primary"||lt==="secondary"?.4:.2,ve=Ee>0?Ee*5+wt:5.5+wt;for(const Le of Gl(k.geometry)){const Ke=Qp(Le);if(!Ke)continue;const ct=Le[0];let Ce=-1/0;const ft=Math.max(1,Math.floor(ct.length/16));for(let le=0;le<ct.length;le+=ft){const fe=ct[le];if(!fe||fe.length<2)continue;const Se=Ot(fe[0],fe[1]);if(!Se.valid)continue;const oe=Xt(Se.x,-Se.y);oe>Ce&&(Ce=oe)}Ce===-1/0&&(Ce=0);const et=Ce+ve,Qe=new wa(Ke,{depth:h,bevelEnabled:!1,curveSegments:1});Qe.rotateX(-Math.PI/2);const tt=Qe.attributes.position;for(let le=0;le<tt.count;le++)tt.setY(le,et-tt.getY(le));tt.needsUpdate=!0,Qe.deleteAttribute("uv");const yt=tt.count;if(Qe.setAttribute("roadUV",new ht(new Float32Array(yt*2),2)),Qe.setAttribute("roadED",new ht(new Float32Array(yt),1)),Qe.computeVertexNormals(),lt==="pedestrian"){let fe=0,Se=0;for(let Re=0;Re<tt.count;Re++)fe+=tt.getX(Re),Se+=tt.getZ(Re);const oe=fe/tt.count,Ae=Se/tt.count;for(let Re=0;Re<tt.count;Re++)tt.setX(Re,oe+(tt.getX(Re)-oe)*.7),tt.setZ(Re,Ae+(tt.getZ(Re)-Ae)*.7);tt.needsUpdate=!0}l.push(Qe);let R=1/0,G=-1/0,X=1/0,K=-1/0;const W=[];for(const le of ct){if(!le||le.length<2)continue;const fe=Ot(le[0],le[1]);fe.valid&&(W.push({x:fe.x,z:-fe.y}),fe.x<R&&(R=fe.x),fe.x>G&&(G=fe.x),-fe.y<X&&(X=-fe.y),-fe.y>K&&(K=-fe.y))}if(W.length>=3&&lt==="pedestrian"){let fe=0,Se=0;for(const Re of W)fe+=Re.x,Se+=Re.z;const oe=fe/W.length,Ae=Se/W.length;for(let Re=0;Re<W.length;Re++)W[Re].x=oe+(W[Re].x-oe)*.7,W[Re].z=Ae+(W[Re].z-Ae)*.7;R=1/0,G=-1/0,X=1/0,K=-1/0;for(const Re of W)Re.x<R&&(R=Re.x),Re.x>G&&(G=Re.x),Re.z<X&&(X=Re.z),Re.z>K&&(K=Re.z)}if(W.length>=3){const le={type:"bridgePoly",ring:W,yTop:et},fe=5;for(const Se of sf(R-fe,G+fe,X-fe,K+fe))$n.has(Se)||$n.set(Se,[]),$n.get(Se).push(le);r.push(W)}}}Ji(2,9,"Buildings");const x=[];let m=await e(i+"combined_buildings.geojson"),S=0;if(m?.features)for(const k of m.features){if(!k.geometry)continue;const Y=k.geometry.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=k.properties||{},We=parseFloat(Oe.height)||parseFloat(Oe["building:levels"])*4.5||12,Ve=Sy(k.geometry);if(!Ve)continue;const qe=Ot(Ve[0],Ve[1]);if(!qe.valid)continue;Math.hypot(qe.x-t.x,qe.y-t.y)<250&&We>S&&(S=We,Ie.heroState.h=We,Ie.heroState.feature=k,Ie.heroState.found=!0)}const T=new Ws({transparent:!0,side:Ft,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});T.onBeforeCompile=jn;const A=new Ws({transparent:!0,side:Ft,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5});A.onBeforeCompile=jn;const y=new oi({transparent:!0,side:Ft,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:10,polygonOffsetUnits:10});Yn(y);const E=y.onBeforeCompile;y.onBeforeCompile=(k,Y)=>{jn(k);const Oe=Ie._topoWorldSize??(Ie.meta?.radius??1e3)*2;k.uniforms.topoHalfSize={value:Oe/2},k.uniforms.uPortalCount=Ie.uniforms.uPortalCount,k.uniforms.uPortalHoles=Ie.uniforms.uPortalHoles,k.vertexShader=`varying vec3 vTopoWorldNormal;
varying vec3 vTopoWorldPos;
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
             vTopoWorldPos    = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vTopoWorldNormal = normalize(mat3(modelMatrix) * normal);`),k.fragmentShader=`
            #define VITRO_MAX_PORTAL_HOLES 128
            varying vec3 vTopoWorldNormal;
            varying vec3 vTopoWorldPos;
            uniform float topoHalfSize;
            uniform int  uPortalCount;
            uniform vec4 uPortalHoles[VITRO_MAX_PORTAL_HOLES];
        
`+k.fragmentShader,k.fragmentShader=k.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
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
            }`),E(k,Y)};const M=new ye;Ie.renderer.getSize(M);const w=new oi({roughness:1,metalness:0,transparent:!0,side:ji,polygonOffset:!0,polygonOffsetFactor:-15,polygonOffsetUnits:-15,depthTest:!0,depthWrite:!0});Yn(w);const P=w.onBeforeCompile;w.onBeforeCompile=(k,Y)=>{jn(k),ay(k),P(k,Y)};const F=new oi({roughness:1,metalness:0,transparent:!0,side:ji,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10,depthTest:!0,depthWrite:!0});Yn(F);const I=F.onBeforeCompile;F.onBeforeCompile=(k,Y)=>{jn(k),I(k,Y)};const H=new oi({roughness:1,metalness:0,transparent:!0,side:Ft,depthTest:!0,depthWrite:!0});Yn(H);const z=H.onBeforeCompile;H.onBeforeCompile=(k,Y)=>{jn(k),ay(k),z(k,Y)};const N=new oi({roughness:1,metalness:0,transparent:!0,side:Ft,depthTest:!0,depthWrite:!0});Yn(N);const V=N.onBeforeCompile;N.onBeforeCompile=(k,Y)=>{jn(k),V(k,Y)};const U=new oi({color:2763308,roughness:.95,metalness:0,side:Ft}),$=U.onBeforeCompile;U.onBeforeCompile=(k,Y)=>{jn(k),$&&$(k,Y)};const q=new oi({color:4868686,roughness:.88,metalness:0,side:Ft});Yn(q);const Q=q.onBeforeCompile;q.onBeforeCompile=(k,Y)=>{jn(k),Q&&Q(k,Y)};const ie=new Ws({color:16774360,toneMapped:!1,fog:!0});Ie.matTunnelStrip=ie,Ie.matTunnelInterior=U,Ie.matTunnelPortal=q;const xe=new oi({roughness:1,metalness:0,transparent:!0,side:ji,polygonOffset:!0,polygonOffsetFactor:-20,polygonOffsetUnits:-20,depthTest:!0,depthWrite:!0});Yn(xe);const j=xe.onBeforeCompile;xe.onBeforeCompile=(k,Y)=>{jn(k),j(k,Y)};const te=new oi({color:Ie.currentTheme.rail,roughness:.8,metalness:.4,transparent:!0,side:Ft});Yn(te);const me=te.onBeforeCompile;te.onBeforeCompile=(k,Y)=>{jn(k),me(k,Y)};const re=new oi({roughness:1,metalness:0,transparent:!0,side:Ft,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthTest:!0,depthWrite:!0});Yn(re);const ge=re.onBeforeCompile;re.onBeforeCompile=(k,Y)=>{jn(k),ge(k,Y)};const _e=new oi({roughness:1,metalness:0,transparent:!0,side:Ft});Yn(_e);const De=_e.onBeforeCompile;_e.onBeforeCompile=(k,Y)=>{jn(k),De(k,Y)};const Be=new oi({transparent:!0,side:Ft,roughness:.9,metalness:0});Yn(Be);const L=Be.onBeforeCompile;Be.onBeforeCompile=(k,Y)=>{ly(k),L(k,Y)};const se=new oi({transparent:!1,side:Ft,vertexColors:!0,roughness:.88,metalness:.4,polygonOffset:!0,polygonOffsetFactor:20,polygonOffsetUnits:20});Yn(se);const ce=se.onBeforeCompile;se.onBeforeCompile=(k,Y)=>{ly(k),ce(k,Y)};const pe=new Jp({color:0,linewidth:1.5,transparent:!0,alphaToCoverage:!0});pe.resolution.copy(M),pe.userData.isSketchy={value:0},pe.customProgramCacheKey=()=>"contextLine_sketchy_v1",pe.onBeforeCompile=(k,Y)=>{cy(k),k.uniforms.isSketchy=pe.userData.isSketchy,k.vertexShader=`uniform float isSketchy;
float _hV(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
            if (isSketchy > 0.5) {
                vec3 _dir = normalize(instanceEnd - instanceStart);
                float _n  = _hV(transformed.xz);
                transformed += _dir * (0.5 + _n);
                transformed.x += (_hV(transformed.xz * 10.0) - 0.5) * 0.2;
                transformed.z += (_hV(transformed.zx * 10.0) - 0.5) * 0.2;
                vec4 _mv = modelViewMatrix * vec4(transformed, 1.0);
                gl_Position = projectionMatrix * _mv;
            }`),k.fragmentShader=`uniform float isSketchy;
float _hF(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
`+k.fragmentShader,k.fragmentShader=k.fragmentShader.replace("#include <premultiplied_alpha_fragment>",`#include <premultiplied_alpha_fragment>
            if (isSketchy > 0.5) {
                float _noise = _hF(gl_FragCoord.xy * 0.1);
                if (_noise < 0.3) discard;
                gl_FragColor.a *= (0.5 + _noise * 0.5);
            }`)},Ie.materials.matContextLine=pe;const B=new Jp({color:0,linewidth:1,transparent:!0,opacity:.4,alphaToCoverage:!0});B.resolution.copy(M),B.customProgramCacheKey=()=>"groundLine_v1",B.onBeforeCompile=cy;const ze=[],be=[],ke=[],O=[],C=[],Z={bldgFill:se,ctxLine:pe},ue=500;let de=0;const he=[];if(m?.features)for(const k of m.features){const Y=k.properties||{},Oe=Ee=>Ee&&Ee!=="no";if(!Oe(Y["building:part"])&&!Oe(Y.building_part)&&!Oe(Y.part)||!k.geometry?.coordinates)continue;let We=null;if(k.geometry.type==="Polygon"?We=k.geometry.coordinates[0]:k.geometry.type==="MultiPolygon"&&(We=k.geometry.coordinates[0][0]),!We)continue;let Ve=0,qe=0,Ze=0;for(const Ee of We)Ee&&Ee.length>=2&&(Ve+=Ee[0],qe+=Ee[1],Ze++);Ze>0&&he.push({x:Ve/Ze,y:qe/Ze})}const Xe=(k,Y)=>{if(!Y||!Array.isArray(Y))return!1;let Oe=!1;for(let We=0,Ve=Y.length-1;We<Y.length;Ve=We++){if(!Y[We]||!Y[Ve])continue;const qe=Y[We][0],Ze=Y[We][1],Ee=Y[Ve][0],lt=Y[Ve][1];Ze>k.y!=lt>k.y&&k.x<(Ee-qe)*(k.y-Ze)/(lt-Ze)+qe&&(Oe=!Oe)}return Oe};if(m?.features){for(const k of m.features){if(!k.geometry)continue;const Y=k.geometry.type;if(Y!=="Polygon"&&Y!=="MultiPolygon")continue;const Oe=Sy(k.geometry);if(!Oe)continue;const We=Ot(Oe[0],Oe[1]);if(!We.valid)continue;let Ve=Math.hypot(We.x-t.x,We.y-t.y);isNaN(Ve)&&(Ve=1/0);const qe=k===Ie.heroState.feature,Ze=Math.random(),Ee=k.properties||{},lt=gt=>gt&&gt!=="no",wt=lt(Ee["building:part"])||lt(Ee.building_part)||lt(Ee.part);if(!wt&&k.geometry?.coordinates){let gt=null;if(Y==="Polygon"?gt=k.geometry.coordinates[0]:Y==="MultiPolygon"&&(gt=k.geometry.coordinates[0][0]),gt){let _n=1/0,Sn=-1/0,zt=1/0,Rt=-1/0;for(const Yt of gt)!Yt||Yt.length<2||(Yt[0]<_n&&(_n=Yt[0]),Yt[0]>Sn&&(Sn=Yt[0]),Yt[1]<zt&&(zt=Yt[1]),Yt[1]>Rt&&(Rt=Yt[1]));let kt=!1;for(const Yt of he)if(Yt.x>=_n&&Yt.x<=Sn&&Yt.y>=zt&&Yt.y<=Rt&&Xe(Yt,gt)){kt=!0;break}if(kt)continue}}const ve=wt,Le=(Ee.man_made||"").toLowerCase(),Ke=(Ee.historic||"").toLowerCase(),ct=(Ee.tourism||"").toLowerCase(),Ce=(Ee.amenity||"").toLowerCase(),ft=(Ee.building||"").toLowerCase(),et=(Ee.power||"").toLowerCase();let Qe=12;ve?Qe=15:Le==="campanile"?Qe=50:Le==="tower"||Le==="lighthouse"?Qe=35:Le==="chimney"||Le==="cooling_tower"?Qe=40:Le==="water_tower"?Qe=20:Le==="obelisk"?Qe=30:Le==="mast"||Le==="antenna"?Qe=25:Le==="flagpole"?Qe=15:Ke==="monument"||Ke==="memorial"?Qe=10:Ke==="fort"||Ke==="castle"?Qe=12:Ce==="fountain"?Qe=3:Ce==="place_of_worship"?Qe=18:ft==="church"||ft==="cathedral"||ft==="mosque"||ft==="temple"?Qe=20:et==="tower"&&(Qe=30);const tt=parseFloat(Ee.height),yt=parseFloat(Ee["building:levels"]),R=Ee.highway==="corridor"&&(Y==="Polygon"||Y==="MultiPolygon"),G=!!(Ee.building||Ee["building:part"]||R)&&!Le&&!Ke&&!ct&&Ce!=="fountain",X=Ee.location==="underground"||Ee.tunnel==="yes"||Ee.underground==="yes";if(Ee.tunnel==="building_passage"||Ee.amenity==="parking"&&Ee.parking!=="multi-storey"||!G&&!Le&&!Ke&&!ct&&!Ce&&!et)continue;let K=parseFloat(Ee.min_height);isNaN(K)&&Ee.min_floor&&(K=parseFloat(Ee.min_floor)*3.5),isNaN(K)&&Ee["building:min_level"]&&(K=(parseFloat(Ee["building:min_level"])-1)*4.5);const W=Ee.bridge==="yes"||R,le=Ee.building==="roof"||Ee.man_made==="canopy",fe=Ee.is_csg_cutout==="yes",Se=Ee.min_height!=null&&Ee.min_height!==""||Ee.min_floor!=null&&Ee.min_floor!==""||Ee["building:min_level"]!=null&&Ee["building:min_level"]!=="";if(!ve&&!W&&!le&&!fe&&!Se&&(K=0),isNaN(K)||K<=0)if(W){const gt=parseFloat(Ee.layer)||0;K=gt>0?gt*4.5:5}else K=0;let oe=Math.max(0,K||0),Ae;const Re=ve||oe>0||parseFloat(Ee.layer)>0||parseFloat(Ee.level)>1;let Ge=1;const it=parseFloat(Ee["roof:height"]);if((Ee["building:part"]||"").toLowerCase()==="roof"||le){const gt=parseFloat(Ee.height)||parseFloat(Ee["roof:height"])||5;Ge=Math.max(.5,gt),Ae=oe+Ge}else isNaN(tt)?isNaN(yt)?isNaN(it)?oe>0?(Ge=4.5,Ae=oe+Ge):(Ae=Qe,Ge=Math.max(1,Ae-oe)):(Ge=Math.max(.5,it),Ae=oe+Ge):(Ge=Math.max(1,yt*4.5),Ae=oe+Ge):tt<oe&&tt>0?(Ge=Math.max(.5,tt),Ae=oe+Ge):(Ae=Math.max(oe+.5,tt),Ge=Math.max(.5,Ae-oe));!ve&&Ge>3&&oe===0&&!W&&(Ge-=.1);let Mt=Ge;Ee.is_csg_cutout==="yes"?(Mt=3.5,Ae=oe+Mt):W&&oe>0&&(Mt>4.5&&(Mt=3.5),Ae=oe+Mt);const _t=(Ee["roof:shape"]||Ee.roof_shape||"").toLowerCase();let Je=30;["dome","sphere","round","onion"].includes(_t)?Je=1:_t==="cone"&&(Je=15);const an=Gl(k.geometry);let Tt=Math.min(Math.max(0,parseFloat(Ee["roof:height"])||0),Mt*.5),Fn=vy(Ee["building:color"]||Ee.color,16777215);if(!ve){const gt=new nt(Fn);gt.multiplyScalar(.95),Fn=gt.getHex()}const lr=Fn,xn=vy(Ee["roof:color"],lr),oo=parseInt(Ee["building:levels"])||0;for(const gt of an){const _n=Qp([gt[0]]);if(!_n||_n.curves.length===0)continue;let Sn=0,zt=0;const Rt=[];for(const pt of gt[0]){const bt=Ot(pt[0],pt[1]);bt.valid&&(Sn+=bt.x,zt+=bt.y,Rt.push(bt))}if(Rt.length===0)continue;Sn/=Rt.length,zt/=Rt.length;let kt=Xt(Sn,-zt);if(!ve){const pt=Math.max(1,Math.floor(Rt.length/8));for(let bt=0;bt<Rt.length;bt+=pt)kt=Math.min(kt,Xt(Rt[bt].x,-Rt[bt].y))}let Yt=1/0,Bf=-1/0,Hf=1/0,Vf=-1/0;for(const pt of Rt){const bt=-pt.y;pt.x<Yt&&(Yt=pt.x),pt.x>Bf&&(Bf=pt.x),bt<Hf&&(Hf=bt),bt>Vf&&(Vf=bt)}const XS=Bf-Yt>80&&Vf-Hf>80;!(Re&&oe>0)&&!XS&&(kt=BP(Sn,-zt,Rt,kt)),ve&&oe===0&&(kt=Math.round(kt*2)/2);let Gf=1/0,Wf=-1/0,Xf=1/0,jf=-1/0;const Yf=[];for(const pt of Rt){const bt=-pt.y;Yf.push({x:pt.x,z:bt}),pt.x<Gf&&(Gf=pt.x),pt.x>Wf&&(Wf=pt.x),bt<Xf&&(Xf=bt),bt>jf&&(jf=bt)}const jS=sf(Gf,Wf,Xf,jf);if(X){const bt=Math.abs(parseFloat(Ee.layer)||1)*6+8,lo=kt-bt,Zl=lo+Ae;kP(Yf,lo,Zl);continue}const YS=kt+Ae,$S={type:"building",ring:Yf,yBase:kt+oe,yTop:YS};for(const pt of jS)$n.has(pt)||$n.set(pt,[]),$n.get(pt).push($S);(Ae>100||Le==="mast"||Le==="tower"||Le==="wind_turbine"||Le==="lighthouse"||Ee.aeroway==="control_tower")&&x.push({x:Sn,y:kt+Ae,z:-zt,id:Ze});let yg=0;for(let pt=0,bt=Rt.length-1;pt<Rt.length;bt=pt++)yg+=(Rt[bt].x-Rt[pt].x)*(Rt[bt].y+Rt[pt].y);if(Math.abs(yg)*.5>5e5)continue;const xg=55,qS=["shell","freeform","curved"].includes(_t),KS=["dome","sphere","round","onion"].includes(_t),ZS=["barrel","vault","arch"].includes(_t),_g=qS||KS||ZS;let $f=Mt;_g&&($f=.1,Tt=Math.max(.1,Ae-oe));let ao;$f<=0?ao=new so(_n):ao=new wa(_n,{depth:$f,bevelEnabled:!1}),ao.rotateX(-Math.PI/2),ao.translate(0,kt+oe,0);let cr=FS(ao,1e-4);if(ao.dispose(),!cr.attributes.position||isNaN(cr.attributes.position.array[0])){cr.dispose();continue}cr.computeBoundingSphere();const kr=hL(Rt,_g?kt+oe:kt+Ae,_t,Tt);if(Do(cr,lr),kr&&Do(kr,xn),Ve>Ie.FG_THRESHOLD&&!qe){if(ze.push(cr),be.push(new _i(cr,xg)),kr)ke.push(kr),O.push(new _i(kr,Je));else if(G&&!ve&&Ae>20&&Rt.length>=4){const pt=new ni(2.5,1.5,2.5);pt.translate(Sn,kt+Ae+.75,-zt),Do(pt,xn),ke.push(pt),O.push(new _i(pt,30))}if(G&&Ae>15){const pt=_y(Rt,kt+Ae,oo,kt+oe);pt.length>1&&C.push(new Ut().setFromPoints(pt))}}else{const pt={isGhost:qe,px:Sn,pz:-zt,featureId:Ze,baseY:kt},bt=new Zt(cr,se);bt.userData={...pt},bt.castShadow=!0,bt.receiveShadow=!0,bt.matrixAutoUpdate=!1,bt.updateMatrix(),Ie.groups.bFill.add(bt);const lo=new _i(cr,xg);let Zl=lo;if(G&&Ae>15){const ii=_y(Rt,kt+Ae,oo,kt+oe);if(ii.length>1){const Mn=new Ut().setFromPoints(ii),$i=or([lo,Mn]);Mn.dispose(),$i&&(lo.dispose(),Zl=$i)}}const co=new yl(lh(Zl),pe);if(co.userData={...pt},co.castShadow=!1,co.receiveShadow=!1,co.matrixAutoUpdate=!1,co.updateMatrix(),Ie.groups.bWire.add(co),kr){const ii=new Zt(kr,se);ii.userData={...pt},ii.castShadow=!0,ii.receiveShadow=!0,ii.matrixAutoUpdate=!1,ii.updateMatrix(),Ie.groups.roofs.add(ii);const Mn=new yl(lh(new _i(kr,Je)),pe);Mn.userData={...pt},Mn.castShadow=!1,Mn.receiveShadow=!1,Mn.matrixAutoUpdate=!1,Mn.updateMatrix(),Ie.groups.roofs.add(Mn)}else if(G&&!ve&&Ae>20&&Rt.length>=4){const ii=new ni(2.5,1.5,2.5);Do(ii,xn);const Mn=new Zt(ii,se);Mn.position.set(Sn,kt+Ae+.75,-zt),Mn.userData={...pt},Mn.castShadow=!1,Mn.receiveShadow=!0,Mn.matrixAutoUpdate=!1,Mn.updateMatrix(),Ie.groups.roofs.add(Mn);const $i=new yl(lh(new _i(ii,30)),pe);$i.position.set(Sn,kt+Ae+.75,-zt),$i.userData={...pt},$i.castShadow=!1,$i.receiveShadow=!1,$i.matrixAutoUpdate=!1,$i.updateMatrix(),Ie.groups.roofs.add($i)}}}++de%ue===0&&await my(ze,be,ke,O,C,Z)}await my(ze,be,ke,O,C,Z)}if(m=null,x.length>0){const k=document.createElement("canvas");k.width=64,k.height=64;const Y=k.getContext("2d"),Oe=Y.createRadialGradient(32,32,0,32,32,32);Oe.addColorStop(0,"rgba(255, 255, 255, 1)"),Oe.addColorStop(.2,"rgba(255, 50, 50, 1)"),Oe.addColorStop(1,"rgba(255, 0, 0, 0)"),Y.fillStyle=Oe,Y.fillRect(0,0,64,64);const We=new Gp(k);Ie.matAviationLight=new Hp({size:5,sizeAttenuation:!1,map:We,transparent:!0,opacity:0,blending:ga,depthWrite:!1,depthTest:!0});const Ve=new Float32Array(x.length*3);x.forEach((Ee,lt)=>{Ve[lt*3]=Ee.x,Ve[lt*3+1]=Ee.y+2,Ve[lt*3+2]=Ee.z});const qe=new Ut;qe.setAttribute("position",new vn(Ve,3));const Ze=new Iv(qe,Ie.matAviationLight);Ze.frustumCulled=!1,Ie.groups.lights.add(Ze)}Ji(3,9,"Roads & Bridges");let Pe=await e(i+"combined_skeleton.geojson");const Ue=new Map;if(Pe?.features)for(const k of Pe.features){if(!k.geometry||!k.geometry.type.includes("LineString"))continue;const Y=k.properties||{};if(!Y.highway&&!Y.railway)continue;const Oe=Y.bridge==="yes"||Y.bridge==="aqueduct"||Y.bridge==="viaduct",We=Y.tunnel==="yes",Ve=k.geometry.type==="LineString"?[k.geometry.coordinates]:k.geometry.coordinates;for(const qe of Ve)for(const Ze of qe){if(!Ze||Ze.length<2)continue;const Ee=Io(Ze[0],Ze[1]);Ue.has(Ee)||Ue.set(Ee,{bridgeCount:0,groundCount:0});const lt=Ue.get(Ee);Oe?lt.bridgeCount++:We||lt.groundCount++}}if(Pe?.features){for(const k of Pe.features){if(!k.geometry||!k.geometry.type.includes("LineString"))continue;const Y=k.properties||{};if(Y.tunnel==="yes"||Y.tunnel===!0||Y.tunnel==="true"||Y.tunnel==="building_passage")continue;const Oe=Y.tunnel==="yes",We=Y.location==="underground"||Y.underground==="yes",Ve=parseFloat(Y.layer)<0&&Y.tunnel!=="building_passage",qe=Oe||We||Ve,Ze=Y.tunnel==="building_passage",Ee=Y.covered==="yes",lt=parseFloat(Y.layer);let wt=isNaN(lt)?0:lt;Y.highway==="corridor"&&wt===0&&(wt=2);const ve=(Y.highway||"").toLowerCase(),Le=ve==="footway"||ve==="path"||ve==="pedestrian"||ve==="cycleway";if(ve==="corridor")continue;const Ke=Ze||Ee||qe&&wt>=0||wt<0&&Le;let Ce=Y.bridge==="yes"||Y.bridge==="aqueduct"||Y.bridge==="viaduct",ft=qe&&!Ke;Ce&&(ft=!1),Ke&&wt<=0&&(Ce=!1,ft=!1);const et=lL(Y),Qe=et.width/2+(Ce?.5:0),tt=et.hasLines,yt=ve==="motorway"||ve==="trunk"?.6:ve==="primary"||ve==="secondary"?.4:.2,R=k.geometry.type==="LineString"?[k.geometry.coordinates]:k.geometry.coordinates;for(const G of R){const X=[];for(const W of G){if(!W||W.length<2)continue;const le=Ot(W[0],W[1]);le.valid&&X.push(le)}if(X.length<2)continue;if(Y.power==="line"||Y.power==="minor_line"||Y.power==="cable"){const W=Y.power==="minor_line",le=W?8:15,fe=X.map(oe=>new D(oe.x,Xt(oe.x,-oe.y)+le,-oe.y)),Se=[];for(let oe=0;oe<fe.length-1;oe++){const Ae=fe[oe],Re=fe[oe+1],Ge=Math.max(1,Math.ceil(Ae.distanceTo(Re)/10));for(let it=0;it<=Ge;it++){if(it===Ge&&oe<fe.length-2)continue;const Ct=new D().lerpVectors(Ae,Re,it/Ge);Ct.isBridgeDeck=!0,Se.push(Ct)}}if(Se.length>=2){const oe=qa(Se,.05,!1);oe&&(oe.computeVertexNormals(),p.push(oe));let Ae=0;for(let Re=0;Re<Se.length-1;Re++){const Ge=Se[Re],it=Se[Re+1];if(Ae+=Ge.distanceTo(it),Ae>=(W?40:80)){Ae=0;const Ct=Xt(it.x,it.z),Mt=it.y-Ct;if(Mt>1){const yn=new D().subVectors(it,Ge).normalize();vL(_,null,it.x,it.z,Ct,Mt,Math.atan2(yn.x,yn.z))}}}}continue}if(Ce){const W=X[0];if(r.some(Ct=>vl(W.x,-W.y,Ct)))continue;const le=Io(G[0][0],G[0][1]),fe=Io(G[G.length-1][0],G[G.length-1][1]),Se=Ue.get(le)||{bridgeCount:1,groundCount:0},oe=Ue.get(fe)||{bridgeCount:1,groundCount:0},Ae=Se.groundCount>0||Se.bridgeCount<=1,Re=oe.groundCount>0||oe.bridgeCount<=1,it=xy(X,{cfg:et,halfW:Qe,layer:wt,taperStart:Ae,taperEnd:Re,archBridge:ve==="footway"||ve==="pedestrian"||ve==="path",markings:tt,priorityOffset:yt});if(it){const Mt=ve==="footway"||ve==="path"||ve==="pedestrian"||ve==="cycleway"?c:l;it.deckGeo&&Mt.push(it.deckGeo),it.pierGeo&&Mt.push(it.pierGeo)}}else{if(ft)continue;{const W=ve==="footway"||ve==="path"||ve==="pedestrian"||ve==="cycleway"||ve==="steps",le=W?.15:.3,fe=dh(X,4,(oe,Ae)=>Xt(oe,Ae)+le);yy(fe,3);const Se=qa(fe,Qe,tt);Se&&(W?a:o).push(Se)}}}}o.length>0&&await Di(o,w,Ie.groups.roads,"road",!1),a.length>0&&await Di(a,F,Ie.groups.roads,"sidewalk",!1),l.length>0&&await Di(l,H,Ie.groups.roads,"road",!0),c.length>0&&await Di(c,N,Ie.groups.roads,"sidewalk",!0),u.length>0&&await Di(u,U,Ie.groups.tunnels,"tunnel",!1),d.length>0&&await Di(d,q,Ie.groups.tunnels,"tunnelPortal",!0),f.length>0&&await Di(f,ie,Ie.groups.tunnelLights,"tunnelStrip",!1)}Ji(4,9,"Railways");let rt=await e(i+"combined_railways.geojson");const we=new Map;if(rt?.features)for(const k of rt.features){if(!k.geometry||!k.geometry.type.includes("LineString"))continue;const Y=k.properties||{};if(Y.tunnel==="yes"||Y.tunnel===!0||Y.tunnel==="building_passage")continue;const Oe=Y.bridge==="yes"||Y.bridge==="viaduct"||Y.bridge==="aqueduct",We=k.geometry.type==="LineString"?[k.geometry.coordinates]:k.geometry.coordinates;for(const Ve of We)for(const qe of Ve){if(!qe||qe.length<2)continue;const Ze=Io(qe[0],qe[1]);we.has(Ze)||we.set(Ze,{bridgeCount:0,groundCount:0});const Ee=we.get(Ze);Oe?Ee.bridgeCount++:Ee.groundCount++}}if(rt?.features){const k=[],Y=[];for(const Oe of rt.features){if(!Oe.geometry||!Oe.geometry.type.includes("LineString"))continue;const We=Oe.properties||{};if(We.tunnel==="yes"||We.tunnel===!0||We.tunnel==="true"||We.tunnel==="building_passage")continue;const Ve=We.tunnel==="yes",qe=We.location==="underground"||We.underground==="yes",Ze=parseFloat(We.layer)<0&&We.tunnel!=="building_passage",Ee=Ve||qe||Ze,lt=We.bridge==="yes",wt=parseFloat(We.layer)||(lt?1:Ee?-1:0),ve=We.railway==="main"?.3:.1,Le=Oe.geometry.type==="LineString"?[Oe.geometry.coordinates]:Oe.geometry.coordinates;for(const Ke of Le){const ct=[];for(const Ce of Ke){if(!Ce||Ce.length<2)continue;const ft=Ot(Ce[0],Ce[1]);ft.valid&&ct.push(ft)}if(!(ct.length<2))if(lt){const Ce=Io(Ke[0][0],Ke[0][1]),ft=Io(Ke[Ke.length-1][0],Ke[Ke.length-1][1]),et=we.get(Ce)||{bridgeCount:0,groundCount:0},Qe=we.get(ft)||{bridgeCount:0,groundCount:0},tt=et.groundCount>0||et.bridgeCount<=1,yt=Qe.groundCount>0||Qe.bridgeCount<=1,R=xy(ct,{cfg:xi.railway,halfW:1.5,layer:wt,taperStart:tt,taperEnd:yt,archBridge:!1,markings:!1,priorityOffset:ve});R&&(R.deckGeo&&Y.push(R.deckGeo),R.pierGeo&&Y.push(R.pierGeo))}else{if(Ee)continue;{const Ce=dh(ct,4,(et,Qe)=>Xt(et,Qe)+.25);yy(Ce,2);const ft=qa(Ce,1.5);ft&&k.push(ft)}}}}k.length>0&&await Di(k,xe,Ie.groups.rails,"rail",!1),Y.length>0&&await Di(Y,te,Ie.groups.rails,"rail",!0)}Ji(5,9,"Ski Infrastructure");let He=await e(i+"combined_ski.geojson");if(He?.features){const k=[],Y=[];for(const Oe of He.features){if(!Oe.geometry)continue;const Ve=!!(Oe.properties||{}).aerialway,qe=Oe.geometry.type;if(!Ve||qe!=="LineString"&&qe!=="MultiLineString")continue;const Ze=qe==="LineString"?[Oe.geometry.coordinates]:Oe.geometry.coordinates;for(const Ee of Ze){const lt=[];for(const Ce of Ee){if(!Ce||Ce.length<2)continue;const ft=Ot(Ce[0],Ce[1]);ft.valid&&lt.push(ft)}if(lt.length<2)continue;const wt=lt.map(Ce=>new D(Ce.x,Xt(Ce.x,-Ce.y)+15,-Ce.y)),ve=[];for(let Ce=0;Ce<wt.length-1;Ce++){const ft=wt[Ce],et=wt[Ce+1],Qe=ft.distanceTo(et),tt=Math.max(1,Math.ceil(Qe/2));for(let yt=0;yt<=tt;yt++){if(yt===tt&&Ce<wt.length-2)continue;const R=new D().lerpVectors(ft,et,yt/tt);R.isBridgeDeck=!0,ve.push(R)}}if(ve.length<2)continue;const Le=qa(ve,.05);Le&&(Le.computeVertexNormals(),p.push(Le),v.push(new _i(Le,30)));let Ke=0,ct=0;for(let Ce=0;Ce<ve.length-1;Ce++){const ft=ve[Ce],et=ve[Ce+1],Qe=ft.distanceTo(et);Ke+=Qe,ct+=Qe;const tt=new D().subVectors(et,ft).normalize(),yt=Math.atan2(tt.x,tt.z);if(Ke>=60){Ke=0;const R=Xt(et.x,et.z),G=et.y-R;G>1&&yL(_,g,et.x,et.z,R,G,yt)}if(ct>=15){if(ct=0,Ke<2||Ke>58)continue;xL(_,g,et.x,et.y,et.z,yt)}}}}k.length>0&&(await Di(k,re,Ie.groups.ski,"skiRun",!1),await My(Y,B,Ie.groups.ski,"skiRun"))}{const k=[...p,..._],Y=[...v,...g];k.length>0&&await Di(k,_e,Ie.groups.ski,"skiLift",!0),Y.length>0&&await My(Y,B,Ie.groups.ski,"skiLift")}Ji(6,9,"Terrain Textures");let[mt,st,je,at,ut]=await Promise.all([e(i+"combined_zoning.geojson"),e(i+"combined_parks.geojson"),e(i+"combined_veg.geojson"),e(i+"combined_water.geojson"),e(i+"combined_hardscape.geojson")]);{const k=Ie.meta.radius||1e3,Y=BS(mt,st,je,at,He,ut,k,Ie.currentTheme);y.map=Y,y.needsUpdate=!0}const It=Ie._topoGrid;if(It){const k=It.size,Y=Ie._topoWorldSize??(Ie.meta.radius??1e3)*2,Oe=new Kl(Y,Y,k-1,k-1);Oe.rotateX(-Math.PI/2);const We=Oe.attributes.position.array;for(let qe=0;qe<k;qe++)for(let Ze=0;Ze<k;Ze++)We[(qe*k+Ze)*3+1]=It.data[qe*k+Ze];Oe.attributes.position.needsUpdate=!0,Oe.computeVertexNormals();const Ve=new Zt(Oe,af(y));Ve.receiveShadow=!0,Ve.matrixAutoUpdate=!1,Ve.updateMatrix(),Ie.groups.topo.add(Ve)}Ji(7,9,"Vegetation"),YP(je,Pe,rt),Ie.geoCache.zData=mt,Ie.geoCache.pData=st,Ie.geoCache.vData=je,Ie.geoCache.wData=at,Ie.geoCache.skiData=He,Ie.geoCache.hData=ut,mt=null,st=null,je=null,at=null,ut=null,Ji(8,9,"Micro Detail & Labels");let b=await e(i+"combined_micro.geojson");if(b?.features){let We=function(ve,Le){const Ke=of(ve,Le);let ct=-1/0;for(const Ce of Ke)(Ce.type==="bridge"||Ce.type==="bridgePoly")&&Ce.yTop>ct&&(ct=Ce.yTop);return ct>-1/0?ct:Xt(ve,Le)},Ze=function(ve){const Le=ve.properties||{};return Le.natural==="tree"||Le.natural==="tree_row"||Le.natural==="shrub"?"forest":Le.natural==="rock"?"terrain":Le.barrier==="hedge"?"scrub":Le.man_made==="sign"||Le.tourism==="artwork"?"furniture":"road"},Ee=function(ve){const Le=ve.properties||{};return Le.height?parseFloat(Le.height):Le.man_made==="sign"||Le.tourism==="artwork"?14:Le.barrier?1.2:0};var ee=We,ne=Ze,Me=Ee;const k=[],Y=[],Oe=[];for(const ve of b.features){const Le=ve.properties?.natural,Ke=ve.properties?.highway,ct=ve.geometry?.type;Le==="tree"||Le==="tree_row"||Le==="shrub"?k.push(ve):Ke==="street_lamp"?Y.push(ve):Oe.push(ve);const Ce=ve.properties?.man_made,ft=ve.properties?.aeroway;if(ct==="Point"&&(Ce==="mast"||Ce==="tower"||Ce==="wind_turbine"||ft==="navigationaid")){const et=ve.geometry.coordinates,Qe=Ot(et[0],et[1]);if(Qe.valid){const tt=parseFloat(ve.properties?.height)||30,yt=We(Qe.x,-Qe.y);x.push({x:Qe.x,y:yt+tt,z:-Qe.y,id:Math.random()})}}}if(b.features=Oe,Ie.treeMesh&&k.length>0){const ve=[];for(const Le of k){const Ke=Le.geometry?.type;if(Ke==="Point")ve.push(Le.geometry.coordinates);else if(Ke==="LineString"){const ct=Le.geometry.coordinates;for(let Ce=0;Ce<ct.length-1;Ce++){const ft=Ot(ct[Ce][0],ct[Ce][1]),et=Ot(ct[Ce+1][0],ct[Ce+1][1]);if(!ft.valid||!et.valid)continue;const Qe=Math.hypot(et.x-ft.x,et.y-ft.y),tt=Math.max(1,Math.floor(Qe/6));for(let yt=0;yt<=tt;yt++){const R=yt/tt;ve.push([ct[Ce][0]+(ct[Ce+1][0]-ct[Ce][0])*R,ct[Ce][1]+(ct[Ce+1][1]-ct[Ce][1])*R])}}}}if(ve.length>0){const Le=new Bp(Ie.treeMesh.geometry,Ie.treeMesh.material,ve.length);Le.instanceMatrix.setUsage(Sa),Le.castShadow=!0,Le.receiveShadow=!0,Le.userData.colorKey="tree",Le.frustumCulled=!1;const Ke=new nn,ct=Ie.meta?.radius||1e3;let Ce=0;for(const ft of ve){const et=Ot(ft[0],ft[1]);if(!et.valid||Math.hypot(et.x,et.y)>ct)continue;const Qe=We(et.x,-et.y),tt=.5+Math.random()*1;Ke.position.set(et.x,Qe,-et.y),Ke.scale.set(tt,tt,tt),Ke.rotation.y=Math.random()*Math.PI*2,Ke.updateMatrix(),Le.setMatrixAt(Ce++,Ke.matrix)}Le.count=Ce,Le.instanceMatrix.needsUpdate=!0,Ie.groups.micro.add(Le)}}if(Y.length>0){const ve=new Es(.1,.15,6,4);ve.translate(0,3,0),Do(ve,1118481);const Le=new ni(.4,.4,.4);Le.translate(0,6,0),Do(Le,16777215);const Ke=or([ve,Le]);ve.dispose(),Le.dispose();const ct=new Ws({vertexColors:!0});ct.onBeforeCompile=jn;const Ce=new Bp(Ke,ct,Y.length);Ce.instanceMatrix.setUsage(Sa);const ft=document.createElement("canvas");ft.width=64,ft.height=64;const et=ft.getContext("2d"),Qe=et.createRadialGradient(32,32,0,32,32,32);Qe.addColorStop(0,"rgba(255, 255, 255, 1)"),Qe.addColorStop(.3,"rgba(255, 255, 240, 0.6)"),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),et.fillStyle=Qe,et.fillRect(0,0,64,64);const tt=new Gp(ft);Ie.matLampFlare=new Hp({size:4,sizeAttenuation:!1,map:tt,transparent:!0,opacity:0,blending:ga,depthWrite:!0,depthTest:!0});const yt=new Float32Array(Y.length*3),R=new nn,G=Ie.meta?.radius||1e3;let X=0;for(const le of Y){const fe=le.geometry.coordinates,Se=Ot(fe[0],fe[1]);if(!Se.valid||Math.hypot(Se.x,Se.y)>G)continue;const oe=We(Se.x,-Se.y);R.position.set(Se.x,oe,-Se.y),R.updateMatrix(),Ce.setMatrixAt(X,R.matrix),yt[X*3]=Se.x,yt[X*3+1]=oe+6,yt[X*3+2]=-Se.y,X++}Ce.count=X,Ce.instanceMatrix.needsUpdate=!0,Ie.groups.lights.add(Ce);const K=new Ut;K.setAttribute("position",new vn(yt.slice(0,X*3),3));const W=new Iv(K,Ie.matLampFlare);W.frustumCulled=!1,Ie.groups.lights.add(W)}const Ve=b.features.filter(ve=>ve.properties?.inscription&&ve.properties.inscription!=="null"&&(ve.geometry?.type==="Point"||ve.geometry?.type==="LineString")),qe=await mL;if(Ve.length>0&&qe)for(const ve of Ve){const Le=ve.properties.inscription;if(ve.geometry.type==="Point")continue;const Ke=ve.geometry.coordinates,ct=Ot(Ke[0][0],Ke[0][1]),Ce=Ot(Ke[Ke.length-1][0],Ke[Ke.length-1][1]);if(!ct.valid||!Ce.valid)continue;const et=Math.hypot(Ce.x-ct.x,Ce.y-ct.y)/Le.length;if(et<5)continue;const Qe=[(Ke[0][0]+Ke[Ke.length-1][0])/2,(Ke[0][1]+Ke[Ke.length-1][1])/2],tt=Ot(Qe[0],Qe[1]);if(!tt.valid)continue;const yt=We(tt.x,-tt.y),R=new rL(Le,{font:qe,size:et,height:1.2,curveSegments:24,bevelEnabled:!1});R.computeBoundingBox();const G=R.boundingBox;R.translate(-(G.max.x-G.min.x)/2,0,0);const X=new Zt(R,T);X.castShadow=!0,X.receiveShadow=!0,X.userData.colorKey="bFill",X.position.set(tt.x,yt,-tt.y),X.rotation.y=Math.PI,X.scale.x=-1,X.matrixAutoUpdate=!1,X.updateMatrix(),Ie.groups.micro.add(X)}const lt={features:b.features.filter(ve=>(ve.geometry?.type==="Polygon"||ve.geometry?.type==="MultiPolygon")&&!ve.properties?.inscription&&!ve.properties?.barrier)};JP(lt,Ie.groups.micro,.1,Ee,T,Ze,null,We);const wt=[];for(const ve of b.features){if(!ve.geometry||ve.properties?.inscription)continue;const Le=ve.geometry.type;if(Le!=="LineString"&&Le!=="MultiLineString")continue;const Ke=Le==="LineString"?[ve.geometry.coordinates]:ve.geometry.coordinates;for(const ct of Ke){const Ce=[];for(const yt of ct){if(!yt||yt.length<2)continue;const R=Ot(yt[0],yt[1]);R.valid&&Ce.push(R)}const ft=dh(Ce,.3,(yt,R)=>We(yt,R)+.2);if(ft.length<2)continue;const et=ve.properties||{},Qe=parseFloat(et.height)||(et.man_made==="sign"||et.tourism==="artwork"?14:0),tt=Qe>0?cL(ft,Qe):qa(ft,.3);tt&&wt.push(tt)}}if(wt.length>0){const ve=or(wt);if(wt.forEach(Le=>Le.dispose()),ve){const Le=new Zt(ve,af(T));Le.userData.colorKey="road",Le.matrixAutoUpdate=!1,Le.updateMatrix(),Ie.groups.micro.add(Le)}}}b=null;let J=await e(i+"combined_labels.geojson");Ie.labels=J?.features??[],J=null,Ie.groups.topo.children.forEach(k=>{k.renderOrder=-1,k.material.depthWrite=!0,k.material.transparent=!1}),Ie.groups.zones.children.forEach(k=>{k.renderOrder=0,k.material.depthWrite=!0,k.material.transparent=!1}),Ie.groups.parks.children.forEach(k=>{k.renderOrder=1,k.material.depthWrite=!1,k.material.transparent=!0}),Ie.groups.veg.children.forEach(k=>{k.renderOrder=2,k.material.depthWrite=!1,k.material.transparent=!0}),Ie.groups.water.children.forEach(k=>{k.renderOrder=3,k.material.depthWrite=!0,k.material.transparent=!1}),Ie.groups.roads.children.forEach(k=>{k.renderOrder=k.userData.colorKey==="sidewalk"?3.5:4}),Ie.groups.rails.children.forEach(k=>{k.renderOrder=4}),Ie.groups.ski.children.forEach(k=>{k.renderOrder=4}),Ie.groups.micro.children.forEach(k=>{k.renderOrder=5,k.material&&(k.material.depthWrite=!0,k.material.transparent=!1)}),Ie.groups.bFill.children.forEach(k=>{k.renderOrder=6});for(const k of[Ie.groups.bWire,Ie.groups.roofs,Ie.groups.detail])k.children.forEach(Y=>{Y.renderOrder=7});Ie.groups.lights.children.forEach(k=>{k.renderOrder=10}),Ji(9,9,"Complete"),Ie.updateStyles?.(),gL()}let Nt=null;function SL(n){Nt=n}let cf=null,HS=null;function ML(){cf=[],HS=Nt.geoCache.pData;const n=Nt.geoCache.pData;if(n?.features)for(const e of n.features){const t=e.geometry;if(!t||t.type!=="Polygon"&&t.type!=="MultiPolygon")continue;const i=t.type==="Polygon"?[t.coordinates]:t.coordinates;for(const r of i){const s=r[0];if(!s||s.length<3)continue;const o=[];let a=1/0,l=1/0,c=-1/0,u=-1/0;for(const d of s){const f=Ot(d[0],d[1]);if(!f.valid)continue;const p=f.x,v=-f.y;o.push({x:p,z:v}),p<a&&(a=p),p>c&&(c=p),v<l&&(l=v),v>u&&(u=v)}o.length<3||cf.push({ring:o,minX:a,maxX:c,minZ:l,maxZ:u,feature:e,poly:r})}}}function wL(){cf&&HS===Nt.geoCache.pData||ML()}function EL(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].z,l=t[s].x,c=t[s].z;a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function TL(n,e){if(!Nt)return null;wL();for(const t of cf)if(!(n<t.minX||n>t.maxX||e<t.minZ||e>t.maxZ)&&EL(n,e,t.ring))return t;return null}function em(n,e){if(n.length<=2)return n.slice();const t=n[0],i=n[n.length-1],r=i.x-t.x,s=i.y-t.y,o=Math.sqrt(r*r+s*s);let a=0,l=1;for(let c=1;c<n.length-1;c++){const u=o>1e-9?Math.abs(r*(t.y-n[c].y)-(t.x-n[c].x)*s)/o:Math.hypot(n[c].x-t.x,n[c].y-t.y);u>a&&(a=u,l=c)}if(a>e){const c=em(n.slice(0,l+1),e),u=em(n.slice(l),e);return[...c.slice(0,-1),...u]}return[t,i]}const bL=2;function wy(n){const e=[];for(const t of n){if(!t||t.length<2)continue;const i=Ot(t[0],t[1]);i.valid&&e.push({x:i.x,y:-i.y})}return e.length<3?e:em(e,bL)}let gg=null,uf=null;function AL(n){if(!Nt)return;for(;Nt.parkMaskScene.children.length;)Nt.parkMaskScene.remove(Nt.parkMaskScene.children[0]);if(uf=null,Nt.uniforms.uParkModeActive.value=0,!n?.geometry)return;let e=1/0,t=1/0,i=-1/0,r=-1/0,s=0;const o=new Ws({color:16777215,side:Ft});for(const f of Gl(n.geometry)){if(!f?.[0])continue;const p=wy(f[0]);if(p.length<3)continue;const v=new Cr;p.forEach((g,h)=>h===0?v.moveTo(g.x,g.y):v.lineTo(g.x,g.y));for(let g=1;g<f.length;g++){const h=wy(f[g]);if(h.length<3)continue;const x=new kl;h.forEach((m,S)=>S===0?x.moveTo(m.x,m.y):x.lineTo(m.x,m.y)),v.holes.push(x)}const _=new Zt(new so(v,1),o);_.frustumCulled=!1,Nt.parkMaskScene.add(_),s++;for(const g of p)g.x<e&&(e=g.x),g.x>i&&(i=g.x),g.y<t&&(t=g.y),g.y>r&&(r=g.y)}if(s===0)return;const a=10,l=e-a,c=i+a,u=t-a,d=r+a;Nt.parkMaskCamera.left=l,Nt.parkMaskCamera.right=c,Nt.parkMaskCamera.bottom=u,Nt.parkMaskCamera.top=d,Nt.parkMaskCamera.updateProjectionMatrix(),Nt.uniforms.uMaskBounds.value.set(l,u,c,d),Nt.renderer.setRenderTarget(Nt.parkMaskTarget),Nt.renderer.setClearColor(0,1),Nt.renderer.clear(),Nt.renderer.render(Nt.parkMaskScene,Nt.parkMaskCamera),Nt.renderer.setRenderTarget(null),Nt.uniforms.uParkModeActive.value=1,uf={minX:l,maxX:c,minZ:u,maxZ:d},gg=n}function Ey(){Nt&&(Nt.uniforms.uParkModeActive.value=0,gg=null,uf=null)}function CL(){return gg}function Ty(){return uf}function RL(n,e){if(!e||n.isInstancedMesh)return!0;const t=50;if(n.userData.px!==void 0&&n.userData.pz!==void 0){const r=n.userData.px,s=n.userData.pz;return r>=e.minX-t&&r<=e.maxX+t&&s>=e.minZ-t&&s<=e.maxZ+t}if(!n.geometry)return!0;n.geometry.boundingBox||n.geometry.computeBoundingBox();const i=n.geometry.boundingBox;return!i||i.isEmpty()?!0:!(i.max.x<e.minX-t||i.min.x>e.maxX+t||i.max.z<e.minZ-t||i.min.z>e.maxZ+t)}let Ne=null;function PL(n){Ne=n,n.updateStyles=IL}let by=null;function LL(n,e,t,i){if(n.isInstancedMesh)return!0;if(n.userData.px!==void 0&&n.userData.pz!==void 0){const a=n.userData.px-e,l=n.userData.pz-t;return Math.hypot(a,l)<=i+100}if(!n.geometry)return!0;n.geometry.boundingBox||n.geometry.computeBoundingBox();const r=n.geometry.boundingBox;if(!r||r.isEmpty())return!0;const s=Math.max(r.min.x,Math.min(e,r.max.x)),o=Math.max(r.min.z,Math.min(t,r.max.z));return Math.hypot(s-e,o-t)<=i+100}function DL(n){if(Ne){if(n){const e=Ot(Ne.meta.lon,Ne.meta.lat);Ne.focusPoint.x=e.x,Ne.focusPoint.z=-e.y}else{let e=1/0,t=null;for(const i of Ne.groups.bFill.children){if(i.userData.px===void 0||i.userData.pz===void 0)continue;const r=Math.hypot(i.userData.px-Ne.center.x,i.userData.pz-Ne.center.z);r<e&&(e=r,t=i)}Ne.focusFeatureId=t?t.userData.featureId:null,Ne.focusPoint.x=Ne.center.x,Ne.focusPoint.z=Ne.center.z}Ne.uniforms.uCenter.value.set(Ne.focusPoint.x,Ne.focusPoint.z)}}function IL(){if(!Ne?.scene||!Ne.renderer)return;const n=qt.getState(),e=n.heroEngineActive,t=n.parkModeActive,i=n.isolationActive,r=n.buildingOpacity,s=n.wireOpacity,o=n.streetOpacity,a=n.lineWeight,l=n.themeName,c=n.outlineStyle??"lineMat";DL(e);let u=null;if(e&&Ne.groups.heroFill.children.length>0&&(u=new Ai().setFromObject(Ne.groups.heroFill),u.expandByScalar(5)),t){const y=TL(Ne.center.x,Ne.center.z);y?y.feature!==CL()&&AL(y.feature):Ey()}else Ey();const d=t&&Ty()?Ty():null,f=Ne.camera?.zoom??1,p=Ne.camera?.isOrthographicCamera?Math.min(1,Math.max(.3,f*.6)):1,v=l==="blueprint",_=a===0,g=v?Math.min(1,p*a*1.5):Math.min(1,p*a),h=new ye;Ne.renderer.getSize(h);const x=Ne.uniforms.uCenter.value.x,m=Ne.uniforms.uCenter.value.y,S=Ne.uniforms.uPlinthRadius.value,T=y=>LL(y,x,m,S),A=y=>RL(y,d);for(const y of[Ne.groups.bFill,Ne.groups.bWire,Ne.groups.roofs,Ne.groups.detail])for(const E of y.children){if(E.userData.isNativeTwin){const P=c==="native"&&!_&&T(E)&&A(E);E.visible=P,P&&(E.material.color.setHex(Ne.currentTheme.ink),E.material.opacity=g,E.material.transparent=g<1);continue}if(!T(E)){E.visible=!1;continue}if(!A(E)){E.visible=!1;continue}const M=ln(E);if(M&&_){E.visible=!1;continue}if(E.userData.isGhost){E.visible=!1;continue}if(c==="native"&&E.userData.nativeTwin){E.visible=!1;continue}if(e&&u&&E.userData.px!==void 0){const P=new D(E.userData.px,E.userData.baseY||0,E.userData.pz);if(u.containsPoint(P)){E.visible=!1;continue}}E.visible=!0;let w=M?g:r;if(i){const P=(E.userData.px??1/0)-Ne.focusPoint.x,F=(E.userData.pz??1/0)-Ne.focusPoint.z;(e?!1:Math.hypot(P,F)<1)?(E.userData.isolatedMat||(E.userData.sharedMat=E.material,E.userData.isolatedMat=E.material.clone()),E.material=E.userData.isolatedMat):(w*=Ne.uniforms.uIsolationAlpha.value,E.userData.isolatedMat&&(E.material=E.userData.sharedMat,E.userData.isolatedMat.dispose(),E.userData.isolatedMat=null,E.userData.sharedMat=null))}else E.userData.isolatedMat&&(E.material=E.userData.sharedMat,E.userData.isolatedMat.dispose(),E.userData.isolatedMat=null,E.userData.sharedMat=null);E.material.opacity=w,E.material.transparent=w<1,E.material.depthWrite=!M,E.material.color.setHex(M?Ne.currentTheme.ink:Ne.currentTheme.bFill),M&&E.material.isLineMaterial&&(E.material.linewidth=a*1.5,E.material.resolution.copy(h),E.material.blending=v?ga:hs,v&&(E.material.depthWrite=!1))}Ne.groups.heroFill.visible=e,Ne.groups.heroWire.visible=e;for(const y of Ne.groups.heroFill.children)if(y.isGroup)for(const E of y.children)E.isMesh&&(E.material.opacity=r,E.material.color.setHex(Ne.currentTheme.bFill));for(const y of Ne.groups.heroWire.children)if(y.isGroup)for(const E of y.children)ln(E)&&(E.material.color.setHex(Ne.currentTheme.ink),E.material.opacity=Math.min(1,.45*a),E.material.isLineMaterial&&(E.material.linewidth=a*1.5,E.material.resolution.copy(h),E.material.blending=v?ga:hs,v&&(E.material.depthWrite=!1)));for(const y of Ne.groups.roads.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{const M=y.userData.colorKey??"road";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.road),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0}}for(const y of Ne.groups.rails.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}E?(y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h))):(y.material.color.setHex(Ne.currentTheme.rail),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0)}for(const y of Ne.groups.ski.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{const M=y.userData.colorKey;y.material.color.setHex(Ne.currentTheme[M]??16777215),y.material.opacity=o,y.material.transparent=o<1,y.material.depthWrite=!0}}if(Ne.groups.lights)for(const y of Ne.groups.lights.children)y.visible=T(y);for(const y of Ne.groups.water.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{if(!y.isMesh)continue;y.material.color.setHex(Ne.currentTheme.water),y.material.opacity=s,y.material.transparent=s<1,y.material.depthWrite=s>=1}}for(const y of Ne.groups.zones.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"institutional";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.institutional),y.material.opacity=.3,y.material.transparent=!0,y.material.depthWrite=!1}}for(const y of Ne.groups.veg.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"veg";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.veg),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}}for(const y of Ne.groups.parks.children){if(y.visible=T(y)&&A(y),!y.visible)continue;const E=ln(y);if(E&&_){y.visible=!1;continue}if(E)y.material.color.setHex(Ne.currentTheme.ink),y.material.opacity=Math.min(1,.3*a),y.material.isLineMaterial&&(y.material.linewidth=Math.max(1,a*1),y.material.resolution.copy(h));else{if(!y.isMesh)continue;const M=y.userData.colorKey??"park";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.park),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}}for(const y of Ne.groups.micro.children){if(y.visible=T(y)&&A(y),!y.visible)continue;if(ln(y)&&_){y.visible=!1;continue}if(y.material?.vertexColors)y.material.color.setHex(16777215);else{const M=y.userData.colorKey??"road";y.material.color.setHex(Ne.currentTheme[M]??Ne.currentTheme.road)}y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0}for(const y of Ne.groups.topo.children)!y.isMesh&&!y.isLineSegments||(y.renderOrder=-1,y.material&&(y.material.polygonOffset=!0,y.material.polygonOffsetFactor=1,y.material.polygonOffsetUnits=1,y.material.depthTest=!0),y.isMesh&&(y.material.color.setHex(Ne.currentTheme.topo),y.material.opacity=1,y.material.transparent=!1,y.material.depthWrite=!0));if(Ne.meta&&Ne.geoCache.zData&&l!==by){by=l;const{zData:y,pData:E,vData:M,wData:w,skiData:P,hData:F}=Ne.geoCache,I=Ne.meta.radius||1e3,H=BS(y,E,M,w,P,F,I,Ne.currentTheme);for(const z of Ne.groups.topo.children)z.isMesh&&(z.material.map&&z.material.map.dispose(),z.material.map=H,z.material.needsUpdate=!0)}}class NL{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let s=0;e.traverse(function(h){if(h.isMesh){const x=h.geometry,m=x.index,S=x.getAttribute("position");s+=m!==null?m.count/3:S.count/3,r.push({object3d:h,geometry:x})}});let o,a=80;if(i===!0){const h=s*2+s*3*4*4+80+4,x=new ArrayBuffer(h);o=new DataView(x),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new D,c=new D,u=new D,d=new D,f=new D,p=new D;for(let h=0,x=r.length;h<x;h++){const m=r[h].object3d,S=r[h].geometry,T=S.index,A=S.getAttribute("position");if(T!==null)for(let y=0;y<T.count;y+=3){const E=T.getX(y+0),M=T.getX(y+1),w=T.getX(y+2);v(E,M,w,A,m)}else for(let y=0;y<A.count;y+=3){const E=y+0,M=y+1,w=y+2;v(E,M,w,A,m)}}return i===!1&&(o+=`endsolid exported
`),o;function v(h,x,m,S,T){l.fromBufferAttribute(S,h),c.fromBufferAttribute(S,x),u.fromBufferAttribute(S,m),T.isSkinnedMesh===!0&&(T.applyBoneTransform(h,l),T.applyBoneTransform(x,c),T.applyBoneTransform(m,u)),l.applyMatrix4(T.matrixWorld),c.applyMatrix4(T.matrixWorld),u.applyMatrix4(T.matrixWorld),_(l,c,u),g(l),g(c),g(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(h,x,m){d.subVectors(m,x),f.subVectors(h,x),d.cross(f).normalize(),p.copy(d).normalize(),i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function g(h){i===!0?(o.setFloat32(a,h.x,!0),a+=4,o.setFloat32(a,h.y,!0),a+=4,o.setFloat32(a,h.z,!0),a+=4):o+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}let $e=null;function UL(n){$e=n}function tu(n,e,t){if(!n.material)return;const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r&&(r[e]=t)}function VS(){const{canvasPreset:n}=qt.getState(),e=Gi[n]??Gi.hd;return{pixelW:e.w,pixelH:e.h}}function OL(){if(!$e)return;window.vitroLastExportURL&&URL.revokeObjectURL(window.vitroLastExportURL),qt.getState().lineWeight;const e=4,{pixelW:t,pixelH:i}=VS();let r=t*e,s=i*e;const o=1e8;if(r*s>o){const y=Math.sqrt(o/(r*s));r=Math.floor(r*y),s=Math.floor(s*y),console.warn(`[ExportUtils] Export clamped to ${r}×${s}`)}let a=document.createElement("canvas");a.width=r,a.height=s;const l=a.getContext("2d");l.imageSmoothingEnabled=!1;const c=$e.renderer.getPixelRatio(),u=new ye;$e.renderer.getSize(u),$e.renderer.setPixelRatio(1);const d=r/s,f=$e.meta?.radius?$e.meta.radius*4:4e3;$e.camera.isOrthographicCamera?($e.camera.left=f*d/-2,$e.camera.right=f*d/2,$e.camera.top=f/2,$e.camera.bottom=f/-2):$e.camera.aspect=d,$e.camera.updateProjectionMatrix(),$e.scene.traverse(y=>{(y.isMesh||ln(y))&&(y.frustumCulled=!1)});const p=2048,v=16,_=p+v*2;$e.renderer.setSize(_,_),$e.scene.traverse(y=>{y.material?.isLineMaterial&&y.material.resolution.set(_,_)});const g=Math.ceil(r/p),h=Math.ceil(s/p);$e.updateStyles?.();const x=e,m=new Set;$e.scene.traverse(y=>{y.material?.isLineMaterial&&!m.has(y.material)&&(y.material.linewidth*=x,m.add(y.material))});const S=new Map;$e.scene.traverse(y=>{(y.isMesh||ln(y))&&S.set(y,y.visible)});const T=$e.scene.background;for(let y=0;y<h;y++)for(let E=0;E<g;E++){const M=E*p,w=y*p,P=Math.min(p,r-M),F=Math.min(p,s-w);$e.camera.setViewOffset(r,s,M-v,w-v,_,_),$e.renderer.autoClear=!0,$e.scene.background=T,$e.scene.traverse(I=>{(I.isMesh||ln(I))&&(I.visible=S.get(I)??!1),I.isMesh&&(tu(I,"colorWrite",!0),tu(I,"depthWrite",!0))}),$e.renderer.render($e.scene,$e.camera),l.drawImage($e.renderer.domElement,v,v,P,F,M,w,P,F)}if($e.currentTheme.grid){const y=$e.currentTheme.ink.toString(16).padStart(6,"0"),E=document.createElement("canvas");E.width=20,E.height=20;const M=E.getContext("2d");M.strokeStyle="#"+y,M.globalAlpha=.07,M.lineWidth=1,M.beginPath(),M.moveTo(0,20),M.lineTo(20,0),M.moveTo(-1,1),M.lineTo(1,-1),M.moveTo(19,21),M.lineTo(21,19),M.stroke(),l.fillStyle=l.createPattern(E,"repeat"),l.fillRect(0,0,r,s)}if($e.camera.clearViewOffset(),xt.csm?(nf($e.time.current),$e._applyShadowToggle(qt.getState().shadowsEnabled)):$e.scene.background=T??new nt($e.currentTheme.bg),$e.scene.traverse(y=>{y.isMesh&&(tu(y,"colorWrite",!0),tu(y,"depthWrite",!0)),(y.isMesh&&!y.isInstancedMesh||ln(y))&&(y.frustumCulled=!0)}),$e.renderer.setPixelRatio(c),$e.renderer.setSize(u.x,u.y,!1),$e.camera.isOrthographicCamera){const y=u.x/u.y;$e.camera.left=f*y/-2,$e.camera.right=f*y/2}else $e.camera.aspect=u.x/u.y;$e.camera.updateProjectionMatrix(),$e.updateStyles?.();const A=document.createElement("a");A.download=`Vitro_Export_${Date.now()}.png`,window.vitroLastExportURL=a.toDataURL("image/png"),A.href=window.vitroLastExportURL,A.click(),a.width=0,a.height=0,a=null}function zL(n="vitro_city.stl"){if(!$e)return;const e=$e.uniforms.uPlinthRadius.value,t=$e.uniforms.uCenter.value.x,i=$e.uniforms.uCenter.value.y,r=e*e,s=(x,m)=>{const S=x-t,T=m-i;return S*S+T*T<=r},o=x=>{const m=x.attributes.position,S=x.index;if(!m)return null;let T,A;S?(T=S.count/3,A=M=>[S.getX(M*3),S.getX(M*3+1),S.getX(M*3+2)]):(T=m.count/3,A=M=>[M*3,M*3+1,M*3+2]);const y=[];for(let M=0;M<T;M++){const[w,P,F]=A(M),I=(m.getX(w)+m.getX(P)+m.getX(F))/3,H=(m.getZ(w)+m.getZ(P)+m.getZ(F))/3;s(I,H)&&y.push(m.getX(w),m.getY(w),m.getZ(w),m.getX(P),m.getY(P),m.getZ(P),m.getX(F),m.getY(F),m.getZ(F))}if(y.length===0)return null;const E=new Ut;return E.setAttribute("position",new vn(new Float32Array(y),3)),E.computeVertexNormals(),E},a=(x,m,S)=>{const A=new Es(x,x,1,256,1,!0),y=A.attributes.position;let E=1/0;for(let I=0;I<=256;I++){const H=I/256*Math.PI*2,z=Xt(m+Math.cos(H)*x,S+Math.sin(H)*x);z<E&&(E=z)}const M=E-20;for(let I=0;I<y.count;I++){const H=y.getX(I)+m,z=y.getZ(I)+S;y.setY(I,y.getY(I)>0?Xt(H,z):M)}A.translate(m,0,S);const w=new dg(x,256);w.rotateX(Math.PI/2),w.translate(m,M,S);const P=or([A,w]);P.computeVertexNormals();const F=new tl({color:14540253,side:Ft});return{mesh:new Zt(P,F),bottomY:M}},l=new Fp,c=["bFill","roofs","tunnels"];for(const x of c){const m=$e.groups[x];m&&m.traverse(S=>{if(!S.isMesh||ln(S)||S.isInstancedMesh)return;const T=S.geometry?.attributes?.position;if(!T||T.count<3||S.userData.px!==void 0&&!s(S.userData.px,S.userData.pz))return;const A=S.clone(),y=o(A.geometry);if(!y){A.geometry.dispose();return}A.geometry.dispose(),A.geometry=y;const E=A.material?.color?.getHex()??13421772;A.material=new tl({color:E,side:Ft}),l.add(A)})}const u=a(e,t,i);l.add(u.mesh);const d=$e.groups.topo;d&&d.children.forEach(x=>{if(!x.isMesh||ln(x))return;const m=x.material?.color?.getHex()??14540253,S=x.clone();S.material=new tl({color:m,side:Ft}),S.geometry.applyMatrix4(S.matrixWorld),S.position.set(0,0,0),S.rotation.set(0,0,0),S.scale.set(1,1,1);const T=S.geometry.attributes.position;for(let A=0;A<T.count;A++){const y=T.getX(A),E=T.getZ(A);Math.hypot(y-t,E-i)>e&&T.setXYZ(A,t,u.bottomY,i)}T.needsUpdate=!0,S.geometry.computeVertexNormals(),l.add(S)});const f=[],p=$e.groups.veg;if(p&&(p.traverse(x=>{if(!x.isInstancedMesh||ln(x))return;const m=x.geometry,S=new Et,T=new D,A=new ys,y=new D;for(let E=0;E<x.count;E++){if(x.getMatrixAt(E,S),T.setFromMatrixPosition(S),A.setFromRotationMatrix(S),y.setFromMatrixScale(S),!s(T.x,T.z))continue;T.y=Xt(T.x,T.z)-.5;const M=m.clone();M.applyMatrix4(new Et().compose(T,A,y)),f.push(M)}}),f.length>0)){const x=or(f),m=new tl({color:4885050,side:Ft});l.add(new Zt(x,m));for(const S of f)S.dispose()}const v=new NL().parse(l,{binary:!0}),_=new Blob([v],{type:"application/octet-stream"}),g=URL.createObjectURL(_),h=document.createElement("a");h.href=g,h.download=n,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(g),l.traverse(x=>{if(!x.isMesh)return;x.geometry?.dispose();const m=Array.isArray(x.material)?x.material:[x.material];for(const S of m)S?.dispose()}),console.log(`[ExportUtils] STL exported: "${n}"`)}class fi{constructor(e=0,t=0){this.x=e,this.y=t}clone(){return new fi(this.x,this.y)}sub(e){return new fi(this.x-e.x,this.y-e.y)}add(e){return new fi(this.x+e.x,this.y+e.y)}scale(e){return new fi(this.x*e,this.y*e)}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}len(){return Math.hypot(this.x,this.y)}dist(e){return Math.hypot(this.x-e.x,this.y-e.y)}normalize(){const e=this.len();return e>1e-12?this.scale(1/e):new fi}}function kL(n){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(const s of n)s.x<e&&(e=s.x),s.x>i&&(i=s.x),s.y<t&&(t=s.y),s.y>r&&(r=s.y);return{minX:e,minY:t,maxX:i,maxY:r}}function FL(n,e){return n.minX<=e.maxX&&n.maxX>=e.minX&&n.minY<=e.maxY&&n.maxY>=e.minY}function BL(n,e,t){const i=t.length,r=e.sub(n);if(r.len()<1e-12)return[];let o=0,a=0;for(let d=0;d<i;d++)o+=t[d].x,a+=t[d].y;o/=i,a/=i;let l=0,c=1;for(let d=0;d<i;d++){const f=t[d],v=t[(d+1)%i].sub(f),_=-v.y,g=v.x,h=Math.hypot(_,g);if(h<1e-12)continue;const x=(o-f.x)*_+(a-f.y)*g;let m,S;x>=0?(m=-_/h,S=-g/h):(m=_/h,S=g/h);const T=n.sub(f),A=r.x*m+r.y*S,y=T.x*m+T.y*S-.001*A;if(Math.abs(A)<1e-12){if(y>0)return[{p1:n,p2:e}];continue}const E=-y/A;if(A<0?l=Math.max(l,E):c=Math.min(c,E),l>c+1e-10)return[]}if(l=Math.max(0,l),c=Math.min(1,c),l>=c-1e-10)return[];const u=[];return l>1e-10&&u.push({p1:n,p2:new fi(n.x+r.x*l,n.y+r.y*l)}),c<1-1e-10&&u.push({p1:new fi(n.x+r.x*c,n.y+r.y*c),p2:e}),u}function HL(n="vitro_plotter.svg"){if(!$e)return;const e=qt.getState(),{canvasPreset:t}=e,{pixelW:i,pixelH:r}=VS(),s=i/100,o=r/100,a=2e3,l=s/o,c=a,u=Math.round(a/l);$e.camera.updateMatrixWorld(),$e.camera.updateProjectionMatrix();const d=new D,f=(Q,ie,xe)=>(d.set(Q,ie,xe).project($e.camera),d.z>1?null:{x:(d.x*.5+.5)*c,y:(1-(d.y*.5+.5))*u,z:d.z}),p=$e.uniforms.uPlinthRadius.value,v=$e.uniforms.uCenter.value.x,_=$e.uniforms.uCenter.value.y,g=p*p,h=(Q,ie)=>{const xe=Q-v,j=ie-_;return xe*xe+j*j<=g},x=[],m=["tunnels"],S=new D,T=new D,A=new D;for(const Q of m){const ie=$e.groups[Q];ie&&ie.traverse(xe=>{if(!xe.visible||!xe.isMesh||ln(xe)||!xe.geometry)return;const j=xe.matrixWorld,te=xe.geometry.attributes.position;if(!te)return;const me=xe.geometry.index;let re,ge;me?(re=Math.floor(me.count/3),ge=_e=>[me.getX(_e*3),me.getX(_e*3+1),me.getX(_e*3+2)]):(re=Math.floor(te.count/3),ge=_e=>[_e*3,_e*3+1,_e*3+2]);for(let _e=0;_e<re;_e++){const[De,Be,L]=ge(_e);S.set(te.getX(De),te.getY(De),te.getZ(De)).applyMatrix4(j),T.set(te.getX(Be),te.getY(Be),te.getZ(Be)).applyMatrix4(j),A.set(te.getX(L),te.getY(L),te.getZ(L)).applyMatrix4(j);const se=T.clone().sub(S).cross(A.clone().sub(S)),ce=S.clone().sub($e.camera.position);if(se.dot(ce)>=0)continue;const pe=(S.x+T.x+A.x)/3,B=(S.z+T.z+A.z)/3;if(!h(pe,B))continue;const ze=f(S.x,S.y,S.z),be=f(T.x,T.y,T.z),ke=f(A.x,A.y,A.z);if(!ze||!be||!ke)continue;const O=[new fi(ze.x,ze.y),new fi(be.x,be.y),new fi(ke.x,ke.y)],C=kL(O),Z=Math.min(ze.z,be.z,ke.z),ue=Math.max(ze.z,be.z,ke.z);x.push({poly:O,minZ:Z,maxZ:ue,aabb:C})}})}x.sort((Q,ie)=>Q.minZ-ie.minZ);const y=80,E=Math.ceil(c/y)+1,M=Math.ceil(u/y)+1,w=Array.from({length:E},()=>Array.from({length:M},()=>[]));for(let Q=0;Q<x.length;Q++){const{aabb:ie}=x[Q],xe=Math.max(0,Math.floor(ie.minX/y)),j=Math.min(E-1,Math.floor(ie.maxX/y)),te=Math.max(0,Math.floor(ie.minY/y)),me=Math.min(M-1,Math.floor(ie.maxY/y));for(let re=xe;re<=j;re++)for(let ge=te;ge<=me;ge++)w[re][ge].push(Q)}const P=[],F=["bWire","roofs","roads","rails","ski","detail"],I=new D,H=new D,z=new D,N=[];for(const Q of F){const ie=$e.groups[Q];ie&&ie.traverse(xe=>{if(!xe.visible||!ln(xe))return;const j=xe.matrixWorld,te=xe.geometry?.attributes?.instanceStart,me=xe.geometry?.attributes?.instanceEnd,re=(ge,_e)=>{if(z.lerpVectors(ge,_e,.5),!h(z.x,z.z))return;const De=f(ge.x,ge.y,ge.z),Be=f(_e.x,_e.y,_e.z);if(!De||!Be)return;const L={minX:Math.min(De.x,Be.x),minY:Math.min(De.y,Be.y),maxX:Math.max(De.x,Be.x),maxY:Math.max(De.y,Be.y)},se=Math.max(0,Math.floor(L.minX/y)),ce=Math.min(E-1,Math.floor(L.maxX/y)),pe=Math.max(0,Math.floor(L.minY/y)),B=Math.min(M-1,Math.floor(L.maxY/y)),ze=new Set,be=[];for(let Z=se;Z<=ce;Z++)for(let ue=pe;ue<=B;ue++)for(const de of w[Z][ue])ze.has(de)||(ze.add(de),be.push(de));const ke=new fi(De.x,De.y),O=new fi(Be.x,Be.y);N.length=0,N.push({p1:ke,p2:O});const C=Math.max(De.z,Be.z);for(const Z of be){const ue=x[Z];if(C<=ue.minZ||!FL(L,ue.aabb))continue;const de=N.length;for(let Xe=0;Xe<de;Xe++){const Pe=N[Xe];if(!Pe)continue;const Ue=BL(Pe.p1,Pe.p2,ue.poly);Ue.length===0?N[Xe]=null:Ue.length===1?N[Xe]=Ue[0]:(N[Xe]=Ue[0],N.push(Ue[1]))}let he=0;for(let Xe=0;Xe<N.length;Xe++)N[Xe]!==null&&(N[he++]=N[Xe]);if(N.length=he,N.length===0)return}for(const Z of N)P.push(`<line x1="${Z.p1.x.toFixed(2)}" y1="${Z.p1.y.toFixed(2)}" x2="${Z.p2.x.toFixed(2)}" y2="${Z.p2.y.toFixed(2)}" stroke="black" stroke-width="1" fill="none" />`)};if(!te||!me){const ge=xe.geometry?.attributes?.position;if(ge)for(let _e=0;_e<ge.count-1;_e+=2)I.set(ge.getX(_e),ge.getY(_e),ge.getZ(_e)).applyMatrix4(j),H.set(ge.getX(_e+1),ge.getY(_e+1),ge.getZ(_e+1)).applyMatrix4(j),re(I,H);return}for(let ge=0;ge<te.count;ge++)I.set(te.getX(ge),te.getY(ge),te.getZ(ge)).applyMatrix4(j),H.set(me.getX(ge),me.getY(ge),me.getZ(ge)).applyMatrix4(j),re(I,H)})}const V=['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${c} ${u}" width="${s}in" height="${o}in">`,...P,"</svg>"].join(`
`),U=new Blob([V],{type:"image/svg+xml"}),$=URL.createObjectURL(U),q=document.createElement("a");q.href=$,q.download=n,document.body.appendChild(q),q.click(),document.body.removeChild(q),URL.revokeObjectURL($),console.log(`[ExportUtils] SVG exported: "${n}" — ${P.length} segments, ${x.length} occluders`)}const VL=new nt(328968),GL=1280;function Ay(n){const e=Math.min(1,GL/Math.max(n.w,n.h));return{w:Math.round(n.w*e),h:Math.round(n.h*e)}}class Cy{constructor(e,t=null){this.canvas=e,this.meta=t,this._rafId=null,this._boundAnimate=this._animate.bind(this),this._storeUnsubs=[],this._resizeObserver=null,this._shadowsDirty=!0,this._onVisibilityChange=null,this._onPointerMousedown=null,this._onPointerLockChange=null,this._onPointerMousemove=null,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.stats=null,this.groups={},this.matLampFlare=null,this.matAviationLight=null,this.uniforms={uPlinthRadius:{value:2e3},uCenter:{value:new ye(0,0)},uIsolation:{value:0},uIsolationAlpha:{value:.25},uTime:{value:0},uPortalCount:{value:0},uPortalHoles:{value:null},uParkMask:{value:null},uMaskBounds:{value:new Ht},uParkModeActive:{value:0}},this.portalHoles={maxHoles:128,count:0,data:Array.from({length:128},()=>new Ht)},this.underground={state:"SURFACE",factor:0,targetFactor:0,_baseSunI:null,_baseSkyI:null},this.center={x:0,z:0},this.baseFov=45,this.look={pitch:0,yaw:0},this.isFlyMode=!1,this.mouseLocked=!1,this.keyState={},this.time={mode:"manual",current:15,speed:1,lastFrame:0},this.shadowsEnabled=!0,this._savedCSMIntensity=0,this._savedSkyIntensity=0,this._currentExposure=qt.getState().exposure,this._lastCullingUpdate=0,this._lastTimeUIUpdate=0,this._lastLightingUpdate=0,this._lastShadowUpdate=0,this._prevZoom=void 0,this.parkMaskTarget=null,this.parkMaskScene=null,this.parkMaskCamera=null,this.mode="DIORAMA",this.isPaused=!1,this.PROFILES={STUDIO:{pixelRatio:2,shadowRes:4096},DIORAMA:{pixelRatio:1,shadowRes:2048},SIM:{pixelRatio:1,shadowRes:1024}},this.FG_THRESHOLD=180,this.heroClipPlane=new Mr(new D(0,1,0),0),this.loadedAssets={},this.updateStyles=null,this.currentTheme=qt.getState().theme,this.heroState={h:0,feature:null,found:!1},this.geoCache={},this.highResGround=!1,this.maxTrees=5e3,this.materials={},this.labels=[],this.focusPoint={x:0,z:0},this.focusFeatureId=null,this._topoMaxElev=0,this._topoGrid=null,this._topoWorldSize=null,this.matTunnelStrip=null,this.matTunnelInterior=null,this.matTunnelPortal=null,this.treeMesh=null,this.treeMeshTotal=0,this._init()}_init(){this._initRenderer(),this._initScene(),this._initCamera(),this._initControls(),this._initGroups(),this._initStats(),this._initPortalHoles(),this._initParkMask(),this._initResize(),this._initPointerLock(),this._initKeyboard(),this._initVisibility(),UP(this),zP(this),HP(this),XP(this),jP(this),QP(this),pL(this),SL(this),PL(this),UL(this),this.meta&&(this._initLighting(),this._syncPlinthFromMeta(),this.centerCamera(),_L().catch(e=>console.error("[CityPipeline]",e))),this._subscribeToStore(),this._applyEngineMode(qt.getState().engineMode,null),this._start()}_initRenderer(){const{canvasPreset:e}=qt.getState(),t=Gi[e]??Gi.hd,{w:i,h:r}=Ay(t);this.renderer=new V2({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance",alpha:!0,premultipliedAlpha:!1,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(i,r,!1),this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Km,this.renderer.toneMapping=Y_,this.renderer.toneMappingExposure=1}_initScene(){const{theme:e}=qt.getState();this.scene=new Fp,this.scene.background=new nt(e.bg)}_initCamera(){const e=this.canvas.width||1920,t=this.canvas.height||1080;this.camera=new ci(this.baseFov,e/t,.1,1e5);const i=this.meta?.radius??1e3;this.camera.position.set(i,i,i)}_initControls(){this.controls=new BR(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=1,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=1,this.controls.touches={ONE:Zr.PAN,TWO:Zr.DOLLY_ROTATE},this.controls.addEventListener("end",()=>{this.center.x=this.controls.target.x,this.center.z=this.controls.target.z}),this.controls.addEventListener("change",()=>{this._shadowsDirty=!0})}_initGroups(){const e=["bFill","bWire","roofs","detail","heroFill","heroWire","roads","water","parks","veg","rails","ski","zones","micro","topo","lights","tunnels","tunnelLights"];for(const t of e)this.groups[t]=new Ko,this.scene.add(this.groups[t])}_initStats(){this.stats=new gl,this.stats.showPanel(0),this.stats.dom.style.cssText="position:fixed;top:0;left:0;z-index:9999;pointer-events:none;",document.body.appendChild(this.stats.dom)}_initPortalHoles(){this.uniforms.uPortalHoles.value=this.portalHoles.data}_initParkMask(){this.parkMaskTarget=new vs(2048,2048,{format:Cf,magFilter:Un,minFilter:Un}),this.uniforms.uParkMask.value=this.parkMaskTarget.texture,this.parkMaskScene=new Fp,this.parkMaskCamera=new Qu(-1,1,1,-1,.1,1e3),this.parkMaskCamera.position.set(0,0,100)}_initLighting(){jR(this.scene,this.renderer,this.meta,this.camera);const{shadowsEnabled:e}=qt.getState();e||this._applyShadowToggle(!1),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity)}_syncPlinthFromMeta(){const e=this.meta?.radius??1e3,t=Math.round(e*.75);this.uniforms.uPlinthRadius.value=t,qt.setState({plinthRadius:t})}_initResize(){const e=this.canvas.width||1920,t=this.canvas.height||1080;this._broadcastResolution(e,t)}_applyCanvasPreset(e){const{w:t,h:i}=Ay(e);this.renderer.setSize(t,i,!1);const r=e.w/e.h;if(this.camera.isPerspectiveCamera)this.camera.aspect=r,this.camera.updateProjectionMatrix();else if(this.camera.isOrthographicCamera){const s=(this.meta?.radius??1e3)*4;this.camera.left=-(s*r)/2,this.camera.right=s*r/2,this.camera.top=s/2,this.camera.bottom=-(s/2),this.camera.updateProjectionMatrix()}this._broadcastResolution(t,i)}_broadcastResolution(e,t){const i=new ye(e,t);this.scene.traverse(r=>{r.material?.isLineMaterial&&r.material.resolution.copy(i)})}_initPointerLock(){const e=this.canvas;this._onPointerMousedown=()=>{(this.mode==="DIORAMA"||this.mode==="SIM")&&document.pointerLockElement!==e&&e.requestPointerLock()},this._onPointerLockChange=()=>{const t=document.pointerLockElement===e;this.mouseLocked=t,this.mode==="SIM"&&(this.isPaused=!t)},this._onPointerMousemove=t=>{if(!this.mouseLocked)return;const i=.002;if(this.isFlyMode)this.look.yaw-=t.movementX*i,this.look.pitch-=t.movementY*i,this.look.pitch=Math.max(-(Math.PI/2-.01),Math.min(Math.PI/6,this.look.pitch)),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.look.pitch,this.look.yaw,0);else if($t.isActive){$t.cameraHeading-=t.movementX*i,$t.cameraPitch-=t.movementY*i;const r=Math.PI/2-.05;$t.cameraPitch=Math.max(-r,Math.min(r,$t.cameraPitch))}},e.addEventListener("mousedown",this._onPointerMousedown),document.addEventListener("pointerlockchange",this._onPointerLockChange),document.addEventListener("mousemove",this._onPointerMousemove)}_initKeyboard(){const e=i=>{this.keyState[i.code]=!0},t=i=>{this.keyState[i.code]=!1};window.addEventListener("keydown",e),window.addEventListener("keyup",t),this._keyDown=e,this._keyUp=t}_initVisibility(){this._onVisibilityChange=()=>{document.hidden?this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null):this._rafId===null&&(this.time.lastFrame=void 0,this._rafId=requestAnimationFrame(this._boundAnimate))},document.addEventListener("visibilitychange",this._onVisibilityChange)}_subscribeToStore(){const e=qt.subscribe((t,i)=>{if(t.theme!==i.theme&&(this.currentTheme=t.theme,this._applyTheme(t.theme)),t.shadowsEnabled!==i.shadowsEnabled&&this._applyShadowToggle(t.shadowsEnabled),t.shadowStyle!==i.shadowStyle&&xt.customUniforms?.uShadowStyle&&(xt.customUniforms.uShadowStyle.value=t.shadowStyle),t.lightsVisible!==i.lightsVisible&&this.groups.lights&&(this.groups.lights.visible=t.lightsVisible),t.plinthRadius!==i.plinthRadius&&(this.uniforms.uPlinthRadius.value=t.plinthRadius,this.updateStyles?.()),t.timeMode==="manual"&&t.timeCurrent!==i.timeCurrent&&(this.time.current=t.timeCurrent,nf(this.time.current),this._applyShadowToggle(qt.getState().shadowsEnabled),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity)),t.timeMode!==i.timeMode&&(this.time.mode=t.timeMode),t.timeSpeed!==i.timeSpeed&&(this.time.speed=t.timeSpeed),t.engineMode!==i.engineMode&&this._applyEngineMode(t.engineMode,i.engineMode),t.isOrthographic!==i.isOrthographic&&this._toggleCamera(t.isOrthographic),(t.buildingOpacity!==i.buildingOpacity||t.wireOpacity!==i.wireOpacity||t.streetOpacity!==i.streetOpacity||t.lineWeight!==i.lineWeight)&&this._applyOpacity(t),t.isolationActive!==i.isolationActive&&(this.uniforms.uIsolation.value=t.isolationActive?1:0,this.updateStyles?.()),t.theme!==i.theme&&(this.uniforms.uIsolationAlpha.value=t.theme.isolationAlpha??.25),t.parkModeActive!==i.parkModeActive&&(this.uniforms.uParkModeActive.value=t.parkModeActive?1:0,this.updateStyles?.()),t.heroEngineActive!==i.heroEngineActive&&this.updateStyles?.(),t.panY!==i.panY&&this.controls&&(this.controls.target.y=t.panY,this.controls.update()),t.canvasPreset!==i.canvasPreset){const r=Gi[t.canvasPreset]??Gi.hd;this._applyCanvasPreset(r)}(t.exposure!==i.exposure||t.autoExposure!==i.autoExposure)&&(t.autoExposure||(this._currentExposure=t.exposure,this.renderer.toneMappingExposure=t.exposure)),t.fov!==i.fov&&(this.baseFov=t.fov,this.camera.isPerspectiveCamera&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix())),t.autoRotate!==i.autoRotate&&this.controls&&(this.controls.autoRotate=t.autoRotate),t.outlineStyle!==i.outlineStyle&&this._applyOutlineStyle(t.outlineStyle)});this._storeUnsubs.push(e)}_applyTheme(e){this.scene&&(this.scene.background=new nt(e.bg),this.uniforms.uIsolationAlpha.value=e.isolationAlpha??.25,this.scene.traverse(t=>{const i=t.userData?.colorKey;if(!i)return;const r=e[i];if(r===void 0)return;const s=Array.isArray(t.material)?t.material:[t.material];for(const o of s)o?.color&&o.color.setHex(r),o?.emissive&&t.userData.useEmissive&&o.emissive.setHex(r)}),this.scene.fog&&this.scene.fog.color.setHex(e.bg),this.updateStyles?.())}_applyShadowToggle(e){const t=xt.csm,i=xt.skyLight;if(!(!t||!i)){if(e){this.renderer.shadowMap.enabled=!0;for(const r of t.lights)r.castShadow=!0,r.intensity=this._savedCSMIntensity||r.intensity;i.intensity=this._savedSkyIntensity||i.intensity}else{this._savedCSMIntensity=t.lights[0]?.intensity??1,this._savedSkyIntensity=i.intensity,this.renderer.shadowMap.enabled=!1;for(const r of t.lights)r.intensity=0;i.intensity=Math.max(this._savedSkyIntensity,3)}this.shadowsEnabled=e}}_applyEngineMode(e,t){this.mode=e,this.keyState={};const i=this.PROFILES[e];if(i&&this.renderer.setPixelRatio(window.devicePixelRatio*i.pixelRatio),e==="STUDIO"){if($t.isActive=!1,this.isFlyMode=!1,document.pointerLockElement&&document.exitPointerLock(),this.mouseLocked=!1,t==="SIM"){const r=new D;this.camera.getWorldDirection(r),this.controls.target.copy(this.camera.position).addScaledVector(r,100)}this.controls.enabled=!0,this.controls.update()}else if(e==="DIORAMA"){$t.isActive=!1,this.controls.enabled=!1,this.isFlyMode=!0;const r=new mi().setFromQuaternion(this.camera.quaternion,"YXZ");this.look.yaw=r.y,this.look.pitch=r.x}else if(e==="SIM"){this.controls.enabled=!1,this.isFlyMode=!1,$t.isActive=!0;const r=this.camera.position.x,s=this.camera.position.z,o=ot.physics.eyeHeight;let l=Xt(r,s);const c=of(r,s),u=Array.isArray(c)?c:c?.parts??(c?[c]:[]);for(const v of u)v.yTop!=null&&(l=Math.max(l,v.yTop));const d=l+o+.5,f=Math.max(this.camera.position.y,d);this.camera.position.set(r,f,s);const p=new mi().setFromQuaternion(this.camera.quaternion,"YXZ");$t.cameraHeading=p.y,$t.cameraPitch=li.clamp(p.x,-(Math.PI/2-.05),Math.PI/6),$t.bodyHeading=p.y,$t.velocity.set(0,0,0),$t.isGrounded=!1,$t.movementState="FALL",$t.roll=0,$t.wallRoll=0,$t.fallTilt=0,$t.lastGroundedTime=0,$t.lastJumpTime=0}}_toggleCamera(e){const t=this.controls.target.clone(),i=this.camera.position.distanceTo(t),r=new D().subVectors(this.camera.position,t).normalize(),s=this.baseFov,o=this.canvas.width/this.canvas.height,a=this.meta?.radius??1e3,l=a*4;if(e){const c=2*i*Math.tan(li.degToRad(s/2)),u=l/c;this.camera=new Qu(-(l*o)/2,l*o/2,l/2,-(l/2),-5e4,5e4),this.camera.position.copy(t).addScaledVector(r,a*4),this.camera.zoom=u}else{const u=l/this.camera.zoom/(2*Math.tan(li.degToRad(s/2)));this.camera=new ci(s,o,.1,1e5),this.camera.position.copy(t).addScaledVector(r,u)}this.camera.lookAt(t),this.camera.updateProjectionMatrix(),this.controls.object=this.camera,this.controls.update()}_applyOpacity(e){this.scene.traverse(t=>{if(!t.isMesh)return;const i=t.userData?.opacityGroup;if(!i)return;const r=Array.isArray(t.material)?t.material:[t.material];for(const s of r)s&&(i==="building"?s.opacity=e.buildingOpacity:i==="wire"?s.opacity=e.wireOpacity:i==="road"&&(s.opacity=e.streetOpacity),s.transparent=s.opacity<1)}),this.scene.traverse(t=>{t.material?.isLineMaterial&&(t.material.linewidth=t.userData?.baseLineWidth??1,t.material.linewidth*=e.lineWeight)})}_applyOutlineStyle(e){const t=[this.groups.bWire,this.groups.detail].filter(Boolean);if(e==="none"){for(const r of t)r.visible=!1;return}const i=e==="lineMat";for(const r of t)r.visible=!0,r.traverse(s=>{if(s.isLineSegments2)if(s.visible=i,i)s.userData.nativeTwin&&(s.userData.nativeTwin.visible=!1);else{if(!s.userData.nativeTwin){const o=this._buildNativeTwin(s);s.parent.add(o),s.userData.nativeTwin=o}s.userData.nativeTwin.visible=!0}})}_buildNativeTwin(e){const t=e.geometry.attributes.instanceStart?.data?.array;if(!t)return new Ko;const i=new Ut;i.setAttribute("position",new vn(t.slice(),3));const r=new SS({color:e.material.color?.clone()??new nt(16777215),opacity:e.material.opacity,transparent:e.material.opacity<1}),s=this.uniforms.uPlinthRadius,o=this.uniforms.uCenter;r.onBeforeCompile=l=>{l.uniforms.uPlinthRadius=s,l.uniforms.uCenter=o,l.vertexShader=`varying vec3 vTwinWorldPos;
${l.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
    vTwinWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=(`uniform float uPlinthRadius;
uniform vec2 uCenter;
varying vec3 vTwinWorldPos;
`+l.fragmentShader).replace("void main() {",`void main() {
    if (length(vec2(vTwinWorldPos.x - uCenter.x, vTwinWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`)};const a=new Y2(i,r);return a.userData={...e.userData,isNativeTwin:!0},a.matrixAutoUpdate=!1,a.matrix.copy(e.matrix),a}centerCamera(){const e=this.meta?.radius??1e3,{panY:t}=qt.getState(),i=this.center.x,r=this.center.z,s=new D(i,t,r),o=new D(1,1,1).normalize(),a=e*1.5/Math.tan(li.degToRad(this.baseFov/2));this.camera.isOrthographicCamera?(this.camera.position.copy(s).addScaledVector(o,e*4),this.camera.zoom=e*4/(e*3.5)):this.camera.position.copy(s).addScaledVector(o,a),this.controls.target.copy(s),this.camera.updateProjectionMatrix(),this.controls.update()}registerPortalHole(e,t,i,r){const s=this.portalHoles;s.count>=s.maxHoles||(s.data[s.count].set(e,t,i,r),s.count++,this.uniforms.uPortalCount.value=s.count)}resetPortalHoles(){const e=this.portalHoles;for(let t=0;t<e.count;t++)e.data[t].set(0,0,0,0);e.count=0,this.uniforms.uPortalCount.value=0}isInPortalHole(e,t){const{count:i,data:r}=this.portalHoles;for(let s=0;s<i;s++){const o=r[s],a=e-o.x,l=t-o.y;if(a*a+l*l<o.z*o.z)return!0}return!1}_start(){this._rafId=requestAnimationFrame(this._boundAnimate)}_animate(e){this._rafId=requestAnimationFrame(this._boundAnimate),this.stats&&this.stats.update();const t=e-(this.time.lastFrame||e);this.time.lastFrame=e;let i=!1;if(this.time.mode==="irl"){const s=this._getLocalSolarTime();Math.abs(this.time.current-s)>.01&&(this.time.current=s,i=!0)}else if(this.time.mode==="auto"){const s=4e-4*this.time.speed;this.time.current=(this.time.current+t*s)%24,i=!0}if(i&&e-this._lastTimeUIUpdate>200&&(this._lastTimeUIUpdate=e,qt.setState({timeCurrent:this.time.current})),this.uniforms.uTime.value=e*.001,xt.customUniforms?.uTime&&(xt.customUniforms.uTime.value=e*.001),this.matAviationLight){const s=Math.pow(Math.sin(e*.002),16),o=this.time.current>18||this.time.current<6;this.matAviationLight.opacity=o?s:0}if(this.matLampFlare){const s=this.time.current;let o=0;s>19||s<5?o=.8:s>=18&&s<=19?o=(s-18)*.8:s>=5&&s<=6&&(o=(1-(s-5))*.8),this.matLampFlare.opacity=o}if(qt.getState().autoExposure){const s=Math.abs(this.time.current-12),o=li.smoothstep(s,5,7.5),a=li.lerp(.8,2.25,o);this._currentExposure=li.lerp(this._currentExposure,a,.05),this.renderer.toneMappingExposure=this._currentExposure}if(i&&e-this._lastLightingUpdate>100&&(this._lastLightingUpdate=e,nf(this.time.current),this._applyShadowToggle(qt.getState().shadowsEnabled),xt.csm?.lights.length&&(this.underground._baseSunI=xt.csm.lights[0].intensity),xt.skyLight&&(this.underground._baseSkyI=xt.skyLight.intensity),this._shadowsDirty=!0),this.mode==="DIORAMA"&&this.isFlyMode)this._updateFlyPhysics(t),this._shadowsDirty=!0;else if(this.mode==="SIM"&&$t.isActive&&!this.isPaused){this._shadowsDirty=!0;const s=Math.min(.1,t/1e3);TP(s,this,Xt,of,this.isInPortalHole.bind(this));const o=this.camera.position.x,a=this.camera.position.z;this.center.x=o,this.center.z=a,this.uniforms.uCenter.value.set(o,a),e-this._lastCullingUpdate>200&&(this._lastCullingUpdate=e,this.updateStyles?.())}if((this.mode==="STUDIO"||this.mode==="DIORAMA")&&this.controls?.target&&this.uniforms.uCenter.value.set(this.controls.target.x,this.controls.target.z),this.controls?.enabled&&!this.isFlyMode&&!$t.isActive&&this.controls.update(),this.camera.updateMatrixWorld(),xt.csm&&(YR(this.camera),this._shadowsDirty&&e-this._lastShadowUpdate>50)){this._lastShadowUpdate=e,this._shadowsDirty=!1;for(const s of xt.csm.lights)s.shadow.needsUpdate=!0}this._updateUndergroundState(t);const r=this.camera.zoom??1;(this._prevZoom===void 0||Math.abs(r-this._prevZoom)>.005)&&(this._prevZoom=r,this.canvas.dispatchEvent(new CustomEvent("engine:cullingupdate"))),!this.renderer.getContext().isContextLost()&&this.renderer.render(this.scene,this.camera)}_updateUndergroundState(e){const t=this.underground;t.targetFactor=this.playerIsUnderground?1:0;const i=Math.min(.1,e/1e3),r=1-Math.exp(-i*5);if(t.factor+=(t.targetFactor-t.factor)*r,t.factor<5e-4&&(t.factor=0),t.factor>.9995&&(t.factor=1),t.factor>.95?t.state="UNDERGROUND":t.factor<.05?t.state="SURFACE":t.state="TRANSITIONING",t.factor>0&&xt.csm){const s=t._baseSunI??xt.csm.lights[0]?.intensity??1,o=1-t.factor*.98;for(const a of xt.csm.lights)a.intensity=s*o;if(xt.skyLight){const a=t._baseSkyI??xt.skyLight.intensity;xt.skyLight.intensity=a*(1-t.factor*.85)+t.factor*.05}this.scene.background?.isColor&&this.scene.background.lerp(VL,t.factor)}}_updateFlyPhysics(e){const t=Math.min(.1,e/1e3),i=this.keyState.ShiftLeft||this.keyState.ShiftRight?120:30,r=new D,s=new D;this.camera.getWorldDirection(r),s.crossVectors(r,this.camera.up).normalize();const o=new D;(this.keyState.KeyW||this.keyState.ArrowUp)&&o.addScaledVector(r,i*t),(this.keyState.KeyS||this.keyState.ArrowDown)&&o.addScaledVector(r,-i*t),(this.keyState.KeyA||this.keyState.ArrowLeft)&&o.addScaledVector(s,-i*t),(this.keyState.KeyD||this.keyState.ArrowRight)&&o.addScaledVector(s,i*t),this.keyState.KeyE&&(o.y+=i*t),this.keyState.KeyQ&&(o.y-=i*t),this.camera.position.add(o)}_getLocalSolarTime(){const e=this.meta?.lon??0,t=new Date;return(t.getUTCHours()+t.getUTCMinutes()/60+t.getUTCSeconds()/3600+e/15+24)%24}shutdown(){this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null);for(const e of this._storeUnsubs)e();this._storeUnsubs=[],this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._keyDown&&window.removeEventListener("keydown",this._keyDown),this._keyUp&&window.removeEventListener("keyup",this._keyUp),this._onPointerMousedown&&this.canvas.removeEventListener("mousedown",this._onPointerMousedown),this._onPointerLockChange&&document.removeEventListener("pointerlockchange",this._onPointerLockChange),this._onPointerMousemove&&document.removeEventListener("mousemove",this._onPointerMousemove),this._onVisibilityChange&&document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stats?.dom?.parentNode&&this.stats.dom.parentNode.removeChild(this.stats.dom),this.controls?.dispose(),this.parkMaskTarget?.dispose(),this.scene?.traverse(e=>{e.geometry?.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i?.dispose()}),this.renderer?.dispose()}}const WL=1280;function XL(n){const e=Math.min(1,WL/Math.max(n.w,n.h));return{w:Math.round(n.w*e),h:Math.round(n.h*e)}}function jL(){const n=Nn.useRef(null),e=Nn.useRef(null),t=qt(o=>o.canvasPreset),i=Gi[t]??Gi.hd,{w:r,h:s}=XL(i);return Nn.useEffect(()=>{const o=n.current,a=e.current;if(!o||!a)return;const l=()=>{const u=Math.min(a.clientWidth/r,a.clientHeight/s);o.style.width=`${Math.floor(r*u)}px`,o.style.height=`${Math.floor(s*u)}px`},c=new ResizeObserver(l);return c.observe(a),l(),()=>c.disconnect()},[r,s]),Nn.useEffect(()=>{const o=n.current;if(!o)return;let a=null,l=!0;const{setMeta:c,setLoading:u,setCityList:d,setActiveCityKey:f}=qt.getState();fetch("/cache/cities/index.json").then(_=>_.json()).then(_=>d(_)).catch(()=>{});const p=localStorage.getItem("activeCityKey"),v=p?`/cache/cities/${p}/metadata.json`:"/metadata.json";return fetch(v).then(_=>{const g=_.headers.get("content-type")??"";if(!_.ok||g.includes("text/html"))throw new Error(`metadata: ${_.status||"not found"}`);return _.json()}).then(_=>{if(!l)return;const g=(_.data_path??"").replace(/\/$/,"").split("/"),h=g[g.length-1]||p||"";h&&(localStorage.setItem("activeCityKey",h),f(h)),c(_),a=new Cy(o,_)}).catch(_=>{console.error("[CanvasContainer]",_),l&&(p&&(localStorage.removeItem("activeCityKey"),f(null)),a=new Cy(o,null),u(!1))}),()=>{l=!1,a?.shutdown()}},[]),ae.jsx("div",{ref:e,className:"flex-1 flex items-center justify-center overflow-hidden",style:{background:"#1a1a1a",padding:"32px"},children:ae.jsx("canvas",{ref:n,style:{display:"block",boxShadow:"0 8px 32px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.4)"},tabIndex:-1})})}function YL(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;if(n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(const[i,r]of n)if(!Object.is(r,e.get(i)))return!1;return!0}if(n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(const i of n)if(!e.has(i))return!1;return!0}const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(const i of t)if(!Object.prototype.hasOwnProperty.call(e,i)||!Object.is(n[i],e[i]))return!1;return!0}const{useRef:$L}=Gy;function qL(n){const e=$L();return t=>{const i=n(t);return YL(e.current,i)?e.current:e.current=i}}function Ry(n){const e=Math.floor(n),t=String(Math.floor(n%1*60)).padStart(2,"0");return`${e}:${t}`}function Ds({label:n,children:e,defaultOpen:t=!0}){const[i,r]=Nn.useState(t);return ae.jsxs(ae.Fragment,{children:[ae.jsxs("button",{onClick:()=>r(s=>!s),className:"w-full px-4 pt-4 pb-1.5 flex items-center justify-between group border-t border-zinc-900 first:border-t-0",children:[ae.jsx("span",{className:"text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600 group-hover:text-zinc-400 transition-colors select-none",children:n}),ae.jsx("span",{className:`text-zinc-700 group-hover:text-zinc-500 transition-all duration-150 text-[8px] ${i?"rotate-90":""}`,children:"▸"})]}),i&&e]})}function Ii({label:n,value:e,children:t}){return ae.jsxs("div",{className:"px-4 py-1 flex items-center gap-3",children:[ae.jsx("span",{className:"text-[10px] text-zinc-500 w-16 shrink-0 text-right tabular-nums select-none",children:n}),ae.jsxs("div",{className:"flex-1 flex items-center gap-2",children:[t,e!==void 0&&ae.jsx("span",{className:"text-[10px] text-zinc-400 tabular-nums ml-auto",children:e})]})]})}function yr({min:n,max:e,step:t,value:i,onChange:r}){return ae.jsx("input",{type:"range",min:n,max:e,step:t,value:i,className:"flex-1 h-px cursor-pointer accent-zinc-400",onChange:s=>r(parseFloat(s.target.value)),onMouseUp:s=>s.target.blur(),onTouchEnd:s=>s.target.blur()})}function Py({children:n}){return ae.jsx("div",{className:"px-4 py-1 flex gap-1",children:n})}function nu({label:n,active:e,onClick:t}){return ae.jsx("button",{onClick:t,className:`flex-1 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${e?"bg-zinc-700 border-zinc-600 text-zinc-100":"bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"}`,children:n})}function No({label:n,active:e,onToggle:t}){return ae.jsx("button",{onClick:t,className:`px-2.5 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${e?"bg-zinc-700 border-zinc-600 text-zinc-100":"bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"}`,children:n})}function KL(){const{themeName:n,setTheme:e,timeMode:t,timeCurrent:i,timeSpeed:r,setTimeMode:s,setTimeCurrent:o,setTimeSpeed:a,engineMode:l,setEngineMode:c,isOrthographic:u,toggleOrthographic:d,plinthRadius:f,setPlinthRadius:p,shadowsEnabled:v,setShadowsEnabled:_,shadowStyle:g,setShadowStyle:h,lightsVisible:x,setLightsVisible:m,buildingOpacity:S,setBuildingOpacity:T,wireOpacity:A,setWireOpacity:y,streetOpacity:E,setStreetOpacity:M,lineWeight:w,setLineWeight:P,isolationActive:F,setIsolationActive:I,parkModeActive:H,setParkModeActive:z,heroEngineActive:N,setHeroEngineActive:V,fov:U,setFov:$,panY:q,setPanY:Q,autoRotate:ie,setAutoRotate:xe,canvasPreset:j,setCanvasPreset:te,isLoading:me,loadingProgress:re,loadingLayer:ge,outlineStyle:_e,setOutlineStyle:De,meta:Be,cityList:L,activeCityKey:se,setActiveCityKey:ce}=qt(qL(B=>({themeName:B.themeName,setTheme:B.setTheme,timeMode:B.timeMode,timeCurrent:B.timeCurrent,timeSpeed:B.timeSpeed,setTimeMode:B.setTimeMode,setTimeCurrent:B.setTimeCurrent,setTimeSpeed:B.setTimeSpeed,engineMode:B.engineMode,setEngineMode:B.setEngineMode,isOrthographic:B.isOrthographic,toggleOrthographic:B.toggleOrthographic,plinthRadius:B.plinthRadius,setPlinthRadius:B.setPlinthRadius,shadowsEnabled:B.shadowsEnabled,setShadowsEnabled:B.setShadowsEnabled,shadowStyle:B.shadowStyle,setShadowStyle:B.setShadowStyle,lightsVisible:B.lightsVisible,setLightsVisible:B.setLightsVisible,buildingOpacity:B.buildingOpacity,setBuildingOpacity:B.setBuildingOpacity,wireOpacity:B.wireOpacity,setWireOpacity:B.setWireOpacity,streetOpacity:B.streetOpacity,setStreetOpacity:B.setStreetOpacity,lineWeight:B.lineWeight,setLineWeight:B.setLineWeight,isolationActive:B.isolationActive,setIsolationActive:B.setIsolationActive,parkModeActive:B.parkModeActive,setParkModeActive:B.setParkModeActive,heroEngineActive:B.heroEngineActive,setHeroEngineActive:B.setHeroEngineActive,fov:B.fov,setFov:B.setFov,panY:B.panY,setPanY:B.setPanY,autoRotate:B.autoRotate,setAutoRotate:B.setAutoRotate,canvasPreset:B.canvasPreset,setCanvasPreset:B.setCanvasPreset,isLoading:B.isLoading,loadingProgress:B.loadingProgress,loadingLayer:B.loadingLayer,outlineStyle:B.outlineStyle,setOutlineStyle:B.setOutlineStyle,meta:B.meta,cityList:B.cityList,activeCityKey:B.activeCityKey,setActiveCityKey:B.setActiveCityKey}))),pe=Gi[j]??Gi.hd;return ae.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-zinc-950 select-none font-mono",children:[ae.jsxs("aside",{className:"w-80 shrink-0 flex flex-col bg-zinc-950 border-r border-zinc-800 overflow-y-auto overflow-x-hidden",children:[ae.jsxs("div",{className:"px-4 py-3 border-b border-zinc-800",children:[ae.jsx("p",{className:"text-[11px] font-medium text-zinc-200 tracking-widest uppercase",children:"Vitro Omni-Engine"}),L.length>0?ae.jsx("select",{className:"mt-1.5 w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600 disabled:opacity-40",value:se??"",disabled:me,onChange:B=>{localStorage.setItem("activeCityKey",B.target.value),window.location.reload()},children:L.map(B=>ae.jsx("option",{value:B.key,children:B.city},B.key))}):Be?.city&&ae.jsx("p",{className:"text-[10px] text-zinc-500 mt-0.5",children:Be.city}),Be?.region&&ae.jsx("p",{className:"text-[9px] text-zinc-600 mt-0.5",children:Be.region})]}),ae.jsx(Ds,{label:"Mode",children:ae.jsx(Py,{children:["STUDIO","DIORAMA","SIM"].map(B=>ae.jsx(nu,{label:B,active:l===B,onClick:()=>c(B)},B))})}),ae.jsxs(Ds,{label:"Time of Day",children:[ae.jsx(Py,{children:["manual","auto","irl"].map(B=>ae.jsx(nu,{label:B.toUpperCase(),active:t===B,onClick:()=>s(B)},B))}),t==="manual"&&ae.jsx(Ii,{label:"Time",value:Ry(i),children:ae.jsx(yr,{min:0,max:24,step:.1,value:i,onChange:o})}),t==="auto"&&ae.jsx(Ii,{label:"Speed",value:`${r.toFixed(1)}×`,children:ae.jsx(yr,{min:.1,max:30,step:.1,value:r,onChange:a})}),t==="irl"&&ae.jsxs("p",{className:"px-4 pb-2 text-[9px] text-zinc-600 tabular-nums",children:[Ry(i)," — solar at ",Be?.lon?.toFixed(2)??"—","°"]})]}),ae.jsxs(Ds,{label:"Camera",children:[ae.jsx(Ii,{label:"FOV",value:`${U}°`,children:ae.jsx(yr,{min:15,max:90,step:1,value:U,onChange:$})}),ae.jsx(Ii,{label:"Pan Y",value:`${q}m`,children:ae.jsx(yr,{min:0,max:800,step:10,value:q,onChange:Q})}),ae.jsxs("div",{className:"px-4 pt-1 pb-3 flex gap-1",children:[ae.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:d,children:u?"Orthographic":"Perspective"}),ae.jsx(No,{label:"Rotate",active:ie,onToggle:()=>xe(!ie)})]})]}),ae.jsxs(Ds,{label:"Appearance",children:[ae.jsx("div",{className:"px-4 pb-2",children:ae.jsx("select",{className:"w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600",value:n,onChange:B=>e(B.target.value),children:Object.keys(Su).map(B=>ae.jsx("option",{value:B,children:B},B))})}),ae.jsx(Ii,{label:"Shadows",children:[["Soft",0],["Faint",1],["Toon",2],["Sketch",3]].map(([B,ze])=>ae.jsx(nu,{label:B,active:g===ze,onClick:()=>h(ze)},ze))}),ae.jsx(Ii,{label:"Outlines",children:[["AA Lines","lineMat"],["Fast","native"],["None","none"]].map(([B,ze])=>ae.jsx(nu,{label:B,active:_e===ze,onClick:()=>De(ze)},ze))}),ae.jsx("div",{className:"pb-2"})]}),ae.jsxs(Ds,{label:"Layers",children:[ae.jsx(Ii,{label:"Buildings",value:S.toFixed(2),children:ae.jsx(yr,{min:0,max:1,step:.01,value:S,onChange:T})}),ae.jsx(Ii,{label:"Wireframe",value:A.toFixed(2),children:ae.jsx(yr,{min:0,max:1,step:.01,value:A,onChange:y})}),ae.jsx(Ii,{label:"Roads",value:E.toFixed(2),children:ae.jsx(yr,{min:0,max:1,step:.01,value:E,onChange:M})}),ae.jsx(Ii,{label:"Line Wt",value:w.toFixed(2),children:ae.jsx(yr,{min:0,max:3,step:.05,value:w,onChange:P})}),ae.jsx(Ii,{label:"Plinth",value:`${f}m`,children:ae.jsx(yr,{min:50,max:Be?.radius??4e3,step:25,value:f,onChange:p})}),ae.jsx("div",{className:"pb-2"})]}),ae.jsx(Ds,{label:"Features",children:ae.jsxs("div",{className:"px-4 pt-1 pb-3 flex flex-wrap gap-1.5",children:[ae.jsx(No,{label:"Shadows",active:v,onToggle:()=>_(!v)}),ae.jsx(No,{label:"Lights",active:x,onToggle:()=>m(!x)}),ae.jsx(No,{label:"Isolate",active:F,onToggle:()=>I(!F)}),ae.jsx(No,{label:"Parks",active:H,onToggle:()=>z(!H)}),ae.jsx(No,{label:"Hero",active:N,onToggle:()=>V(!N)})]})}),ae.jsxs(Ds,{label:"Export",children:[ae.jsxs("div",{className:"px-4 pb-2",children:[ae.jsx("select",{className:"w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600",value:j,onChange:B=>te(B.target.value),children:Object.entries(Gi).map(([B,ze])=>ae.jsx("option",{value:B,children:ze.label},B))}),ae.jsxs("p",{className:"text-[9px] text-zinc-700 mt-1 tabular-nums",children:[pe.w," × ",pe.h," px"]})]}),ae.jsxs("div",{className:"px-4 pb-4 flex gap-1",children:[ae.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:OL,children:"PNG"}),ae.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:zL,children:"STL"}),ae.jsx("button",{className:"flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors",onClick:HL,children:"SVG Plotter"})]})]})]}),ae.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[ae.jsx(jL,{}),ae.jsx("div",{className:"absolute bottom-3 right-4 pointer-events-none",children:ae.jsxs("span",{className:"text-[9px] text-zinc-700 tabular-nums",children:[pe.w," × ",pe.h]})}),me&&ae.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",style:{background:"rgba(10,10,10,0.88)"},children:[ae.jsx("p",{className:"text-[9px] uppercase tracking-[0.25em] text-zinc-500 mb-4",children:ge||"Initialising"}),ae.jsx("div",{className:"w-48 h-px bg-zinc-800 rounded-full overflow-hidden",children:ae.jsx("div",{className:"h-full bg-zinc-400 transition-all duration-200",style:{width:`${re}%`}})}),ae.jsxs("p",{className:"text-[9px] text-zinc-600 mt-3 tabular-nums",children:[re,"%"]})]})]})]})}const GS="https://www.vitromedialab.com",vg="vitro_jwt",ZL=()=>localStorage.getItem(vg),JL=n=>localStorage.setItem(vg,n),QL=()=>localStorage.removeItem(vg);async function e3(n,e){const t=await fetch(`${GS}/wp-json/jwt-auth/v1/token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:e})}),i=await t.json().catch(()=>({}));if(!t.ok){const s=i?.message??"Login failed. Check your credentials.";throw new Error(s.replace(/<[^>]*>/g,""))}const r=i.token??i.data?.token;if(!r)throw new Error("Server returned no token.");return JL(r),r}async function WS(){const n=ZL();if(!n)return"unauthenticated";let e;try{e=await fetch(`${GS}/wp-json/vitro/v1/check-access`,{method:"GET",headers:{Authorization:`Bearer ${n}`}})}catch{return"unauthenticated"}if(e.status===401||e.status===403)return QL(),"unauthenticated";if(!e.ok)return"no_subscription";const t=await e.json().catch(()=>({}));return Array.isArray(t.entitlements)&&(t.entitlements.includes("ENGINE-ACCESS")||t.entitlements.includes("DEVPASSENGINE"))?"approved":"no_subscription"}const Ly="https://www.vitromedialab.com/designs";function t3({onApproved:n}){const[e,t]=Nn.useState(""),[i,r]=Nn.useState(""),[s,o]=Nn.useState("idle"),[a,l]=Nn.useState("");async function c(u){u.preventDefault(),o("loading"),l("");try{await e3(e,i),await WS()==="approved"?n():o("no_subscription")}catch(d){o("error"),l(d.message??"Something went wrong.")}}return ae.jsx("div",{className:"min-h-screen w-full bg-zinc-950 flex items-center justify-center p-6",children:ae.jsxs("div",{className:"w-full max-w-sm",children:[ae.jsxs("div",{className:"mb-10 text-center",children:[ae.jsx("p",{className:"text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-1",children:"Vitro Media Lab"}),ae.jsx("h1",{className:"text-2xl font-light tracking-tight text-zinc-100",children:"Omni-Engine"})]}),ae.jsxs("div",{className:"mb-8 rounded border border-zinc-800 bg-zinc-900 px-5 py-4 text-center",children:[ae.jsxs("p",{className:"text-[11px] text-zinc-400 leading-relaxed",children:["An active"," ",ae.jsx("span",{className:"text-zinc-200",children:"Vitro Media Lab subscription"})," ","is required to use this tool."]}),ae.jsx("a",{href:Ly,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block w-full rounded bg-zinc-100 px-4 py-2.5 text-[11px] font-medium tracking-widest uppercase text-zinc-900 hover:bg-white transition-colors",children:"Get Access"})]}),ae.jsxs("form",{onSubmit:c,className:"space-y-3",children:[ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-[9px] uppercase tracking-widest text-zinc-500 mb-1.5",children:"Username or Email"}),ae.jsx("input",{type:"text",autoComplete:"username",required:!0,value:e,onChange:u=>t(u.target.value),className:"w-full rounded bg-zinc-900 border border-zinc-800 px-3 py-2 text-[12px] text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"})]}),ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-[9px] uppercase tracking-widest text-zinc-500 mb-1.5",children:"Password"}),ae.jsx("input",{type:"password",autoComplete:"current-password",required:!0,value:i,onChange:u=>r(u.target.value),className:"w-full rounded bg-zinc-900 border border-zinc-800 px-3 py-2 text-[12px] text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"})]}),s==="no_subscription"&&ae.jsxs("p",{className:"text-[10px] text-amber-400 pt-1",children:["No active subscription found on this account."," ",ae.jsx("a",{href:Ly,target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-amber-300",children:"Purchase access."})]}),s==="error"&&ae.jsx("p",{className:"text-[10px] text-red-400 pt-1",children:a}),ae.jsx("button",{type:"submit",disabled:s==="loading",className:"w-full rounded border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-[11px] font-medium tracking-widest uppercase text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors mt-1",children:s==="loading"?"Verifying…":"Sign In"})]})]})})}function n3({children:n}){const[e,t]=Nn.useState("loading");return Nn.useEffect(()=>{WS().then(i=>{t(i==="approved"?"approved":"denied")})},[]),e==="loading"?ae.jsx(i3,{}):e==="denied"?ae.jsx(t3,{onApproved:()=>t("approved")}):n}function i3(){return ae.jsx("div",{className:"min-h-screen w-full bg-zinc-950 flex items-center justify-center",children:ae.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ae.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-zinc-700 border-t-zinc-300 animate-spin"}),ae.jsx("p",{className:"text-[9px] uppercase tracking-[0.3em] text-zinc-600",children:"Verifying access"})]})})}hh.createRoot(document.getElementById("root")).render(ae.jsx(n3,{children:ae.jsx(KL,{})}));
