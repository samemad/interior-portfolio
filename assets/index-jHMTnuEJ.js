(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function F0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var td={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function zy(){if(Ev)return wo;Ev=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var bv;function Hy(){return bv||(bv=1,td.exports=zy()),td.exports}var w=Hy(),nd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function Gy(){if(Tv)return ft;Tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(O,ne,ye){this.props=O,this.context=ne,this.refs=A,this.updater=ye||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(O,ne,ye){this.props=O,this.context=ne,this.refs=A,this.updater=ye||M}var P=L.prototype=new v;P.constructor=L,T(P,S.prototype),P.isPureReactComponent=!0;var N=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function G(O,ne,ye,Me,Ue,Ge){return ye=Ge.ref,{$$typeof:s,type:O,key:ne,ref:ye!==void 0?ye:null,props:Ge}}function K(O,ne){return G(O.type,ne,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function b(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return ne[ye]})}var B=/\/+/g;function Y(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?b(""+O.key):ne.toString(36)}function oe(){}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(oe,oe):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ce(O,ne,ye,Me,Ue){var Ge=typeof O;(Ge==="undefined"||Ge==="boolean")&&(O=null);var ae=!1;if(O===null)ae=!0;else switch(Ge){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(O.$$typeof){case s:case e:ae=!0;break;case g:return ae=O._init,ce(ae(O._payload),ne,ye,Me,Ue)}}if(ae)return Ue=Ue(O),ae=Me===""?"."+Y(O,0):Me,N(Ue)?(ye="",ae!=null&&(ye=ae.replace(B,"$&/")+"/"),ce(Ue,ne,ye,"",function(Ke){return Ke})):Ue!=null&&(D(Ue)&&(Ue=K(Ue,ye+(Ue.key==null||O&&O.key===Ue.key?"":(""+Ue.key).replace(B,"$&/")+"/")+ae)),ne.push(Ue)),1;ae=0;var ve=Me===""?".":Me+":";if(N(O))for(var Ee=0;Ee<O.length;Ee++)Me=O[Ee],Ge=ve+Y(Me,Ee),ae+=ce(Me,ne,ye,Ge,Ue);else if(Ee=x(O),typeof Ee=="function")for(O=Ee.call(O),Ee=0;!(Me=O.next()).done;)Me=Me.value,Ge=ve+Y(Me,Ee++),ae+=ce(Me,ne,ye,Ge,Ue);else if(Ge==="object"){if(typeof O.then=="function")return ce(pe(O),ne,ye,Me,Ue);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ae}function I(O,ne,ye){if(O==null)return O;var Me=[],Ue=0;return ce(O,Me,"","",function(Ge){return ne.call(ye,Ge,Ue++)}),Me}function Q(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var W=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Se(){}return ft.Children={map:I,forEach:function(O,ne,ye){I(O,function(){ne.apply(this,arguments)},ye)},count:function(O){var ne=0;return I(O,function(){ne++}),ne},toArray:function(O){return I(O,function(ne){return ne})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=L,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ft.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},ft.cache=function(O){return function(){return O.apply(null,arguments)}},ft.cloneElement=function(O,ne,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=T({},O.props),Ue=O.key,Ge=void 0;if(ne!=null)for(ae in ne.ref!==void 0&&(Ge=void 0),ne.key!==void 0&&(Ue=""+ne.key),ne)!V.call(ne,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ne.ref===void 0||(Me[ae]=ne[ae]);var ae=arguments.length-2;if(ae===1)Me.children=ye;else if(1<ae){for(var ve=Array(ae),Ee=0;Ee<ae;Ee++)ve[Ee]=arguments[Ee+2];Me.children=ve}return G(O.type,Ue,void 0,void 0,Ge,Me)},ft.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ft.createElement=function(O,ne,ye){var Me,Ue={},Ge=null;if(ne!=null)for(Me in ne.key!==void 0&&(Ge=""+ne.key),ne)V.call(ne,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ue[Me]=ne[Me]);var ae=arguments.length-2;if(ae===1)Ue.children=ye;else if(1<ae){for(var ve=Array(ae),Ee=0;Ee<ae;Ee++)ve[Ee]=arguments[Ee+2];Ue.children=ve}if(O&&O.defaultProps)for(Me in ae=O.defaultProps,ae)Ue[Me]===void 0&&(Ue[Me]=ae[Me]);return G(O,Ge,void 0,void 0,null,Ue)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:d,render:O}},ft.isValidElement=D,ft.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Q}},ft.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},ft.startTransition=function(O){var ne=F.T,ye={};F.T=ye;try{var Me=O(),Ue=F.S;Ue!==null&&Ue(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Se,W)}catch(Ge){W(Ge)}finally{F.T=ne}},ft.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ft.use=function(O){return F.H.use(O)},ft.useActionState=function(O,ne,ye){return F.H.useActionState(O,ne,ye)},ft.useCallback=function(O,ne){return F.H.useCallback(O,ne)},ft.useContext=function(O){return F.H.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O,ne){return F.H.useDeferredValue(O,ne)},ft.useEffect=function(O,ne,ye){var Me=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(O,ne)},ft.useId=function(){return F.H.useId()},ft.useImperativeHandle=function(O,ne,ye){return F.H.useImperativeHandle(O,ne,ye)},ft.useInsertionEffect=function(O,ne){return F.H.useInsertionEffect(O,ne)},ft.useLayoutEffect=function(O,ne){return F.H.useLayoutEffect(O,ne)},ft.useMemo=function(O,ne){return F.H.useMemo(O,ne)},ft.useOptimistic=function(O,ne){return F.H.useOptimistic(O,ne)},ft.useReducer=function(O,ne,ye){return F.H.useReducer(O,ne,ye)},ft.useRef=function(O){return F.H.useRef(O)},ft.useState=function(O){return F.H.useState(O)},ft.useSyncExternalStore=function(O,ne,ye){return F.H.useSyncExternalStore(O,ne,ye)},ft.useTransition=function(){return F.H.useTransition()},ft.version="19.1.1",ft}var Av;function Ph(){return Av||(Av=1,nd.exports=Gy()),nd.exports}var te=Ph();const Vy=F0(te);var id={exports:{}},Co={},ad={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function ky(){return Rv||(Rv=1,(function(s){function e(I,Q){var W=I.length;I.push(Q);e:for(;0<W;){var Se=W-1>>>1,O=I[Se];if(0<l(O,Q))I[Se]=Q,I[W]=O,W=Se;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Q=I[0],W=I.pop();if(W!==Q){I[0]=W;e:for(var Se=0,O=I.length,ne=O>>>1;Se<ne;){var ye=2*(Se+1)-1,Me=I[ye],Ue=ye+1,Ge=I[Ue];if(0>l(Me,W))Ue<O&&0>l(Ge,Me)?(I[Se]=Ge,I[Ue]=W,Se=Ue):(I[Se]=Me,I[ye]=W,Se=ye);else if(Ue<O&&0>l(Ge,W))I[Se]=Ge,I[Ue]=W,Se=Ue;else break e}}return Q}function l(I,Q){var W=I.sortIndex-Q.sortIndex;return W!==0?W:I.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,T=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=I)r(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function F(I){if(A=!1,N(I),!T)if(i(m)!==null)T=!0,V||(V=!0,Y());else{var Q=i(p);Q!==null&&ce(F,Q.startTime-I)}}var V=!1,G=-1,K=5,D=-1;function b(){return S?!0:!(s.unstable_now()-D<K)}function B(){if(S=!1,V){var I=s.unstable_now();D=I;var Q=!0;try{e:{T=!1,A&&(A=!1,L(G),G=-1),M=!0;var W=x;try{t:{for(N(I),_=i(m);_!==null&&!(_.expirationTime>I&&b());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,x=_.priorityLevel;var O=Se(_.expirationTime<=I);if(I=s.unstable_now(),typeof O=="function"){_.callback=O,N(I),Q=!0;break t}_===i(m)&&r(m),N(I)}else r(m);_=i(m)}if(_!==null)Q=!0;else{var ne=i(p);ne!==null&&ce(F,ne.startTime-I),Q=!1}}break e}finally{_=null,x=W,M=!1}Q=void 0}}finally{Q?Y():V=!1}}}var Y;if(typeof P=="function")Y=function(){P(B)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,pe=oe.port2;oe.port1.onmessage=B,Y=function(){pe.postMessage(null)}}else Y=function(){v(B,0)};function ce(I,Q){G=v(function(){I(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var W=x;x=Q;try{return I()}finally{x=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=x;x=I;try{return Q()}finally{x=W}},s.unstable_scheduleCallback=function(I,Q,W){var Se=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Se+W:Se):W=Se,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=W+O,I={id:g++,callback:Q,priorityLevel:I,startTime:W,expirationTime:O,sortIndex:-1},W>Se?(I.sortIndex=W,e(p,I),i(m)===null&&I===i(p)&&(A?(L(G),G=-1):A=!0,ce(F,W-Se))):(I.sortIndex=O,e(m,I),T||M||(T=!0,V||(V=!0,Y()))),I},s.unstable_shouldYield=b,s.unstable_wrapCallback=function(I){var Q=x;return function(){var W=x;x=Q;try{return I.apply(this,arguments)}finally{x=W}}}})(rd)),rd}var wv;function jy(){return wv||(wv=1,ad.exports=ky()),ad.exports}var sd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function Xy(){if(Cv)return Rn;Cv=1;var s=Ph();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.1",Rn}var Dv;function Wy(){if(Dv)return sd.exports;Dv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sd.exports=Xy(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function qy(){if(Nv)return Co;Nv=1;var s=jy(),e=Ph(),i=Wy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),t;if(h===o)return d(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=h;break}if(R===o){E=!0,o=u,a=h;break}R=R.sibling}if(!E){for(R=h.child;R;){if(R===a){E=!0,a=h,o=u;break}if(R===o){E=!0,o=h,a=u;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case P:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ce=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Se=[],O=-1;function ne(t){return{current:t}}function ye(t){0>O||(t.current=Se[O],Se[O]=null,O--)}function Me(t,n){O++,Se[O]=t.current,t.current=n}var Ue=ne(null),Ge=ne(null),ae=ne(null),ve=ne(null);function Ee(t,n){switch(Me(ae,n),Me(Ge,t),Me(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ue),Me(Ue,t)}function Ke(){ye(Ue),ye(Ge),ye(ae)}function qe(t){t.memoizedState!==null&&Me(ve,t);var n=Ue.current,a=Jg(n,t.type);n!==a&&(Me(Ge,t),Me(Ue,a))}function ut(t){Ge.current===t&&(ye(Ue),ye(Ge)),ve.current===t&&(ye(ve),Eo._currentValue=W)}var Zt=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,Dt=s.unstable_cancelCallback,st=s.unstable_shouldYield,et=s.unstable_requestPaint,Ie=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,Ve=s.unstable_ImmediatePriority,ot=s.unstable_UserBlockingPriority,Gt=s.unstable_NormalPriority,Vt=s.unstable_LowPriority,U=s.unstable_IdlePriority,y=s.log,k=s.unstable_setDisableYieldValue,$=null,de=null;function re(t){if(typeof y=="function"&&k(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode($,t)}catch{}}var Ce=Math.clz32?Math.clz32:je,we=Math.log,ze=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(we(t)/ze|0)|0}var be=256,Oe=4194304;function Qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Qe(o):(E&=R,E!==0?u=Qe(E):a||(a=R&~t,a!==0&&(u=Qe(a))))):(R=o&~h,R!==0?u=Qe(R):E!==0?u=Qe(E):a||(a=o&~t,a!==0&&(u=Qe(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Re(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,h){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ie=t.hiddenUpdates;for(a=E&~a;0<a;){var me=31-Ce(a),_e=1<<me;R[me]=0,z[me]=-1;var se=ie[me];if(se!==null)for(ie[me]=null,me=0;me<se.length;me++){var le=se[me];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&xe(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function xe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ce(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Xe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ce(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function rt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:vv(t.type))}function fi(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var cn=Math.random().toString(36).slice(2),un="__reactFiber$"+cn,Kt="__reactProps$"+cn,bi="__reactContainer$"+cn,Ar="__reactEvents$"+cn,Jo="__reactListeners$"+cn,Rr="__reactHandles$"+cn,Os="__reactResources$"+cn,Ti="__reactMarker$"+cn;function wr(t){delete t[un],delete t[Kt],delete t[Ar],delete t[Jo],delete t[Rr]}function Bi(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[bi]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=nv(t);t!==null;){if(a=t[un])return a;t=nv(t)}return n}t=a,a=t.parentNode}return null}function ha(t){if(t=t[un]||t[bi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ya(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function pa(t){var n=t[Os];return n||(n=t[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(t){t[Ti]=!0}var $o=new Set,el={};function C(t,n){q(t,n),q(t+"Capture",n)}function q(t,n){for(el[t]=n,t=0;t<n.length;t++)$o.add(n[t])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),he={},J={};function Ae(t){return Zt.call(J,t)?!0:Zt.call(he,t)?!1:fe.test(t)?J[t]=!0:(he[t]=!0,!1)}function Le(t,n,a){if(Ae(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function He(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var $e,nt;function Ye(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+nt}var ht=!1;function Tt(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var se=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){se=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){se=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],R=h[1];if(E&&R){var z=E.split(`
`),ie=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ie.length)for(o=z.length-1,u=ie.length-1;1<=o&&0<=u&&z[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ie[u]){var me=`
`+z[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ye(a):""}function Xt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return Ye("Activity");default:return""}}function Ot(t){try{var n="";do n+=Xt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(t){var n=Je(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _t(t){t._valueTracker||(t._valueTracker=jt(t))}function bn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Je(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function mn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zt(t,n,a,o,u,h,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pt(n)):t.value!==""+pt(n)&&(t.value=""+pt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,E,pt(n)):a!=null?Tn(t,E,pt(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+pt(R):t.removeAttribute("name")}function Nn(t,n,a,o,u,h,E,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+pt(a):"",n=n!=null?""+pt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Tn(t,n,a){n==="number"&&di(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qt(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+pt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+pt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pt(a):""}function Cr(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var B_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qh(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||B_.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Jh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qh(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Qh(t,h,n[h])}function $c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(t){return F_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var eu=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Nr=null;function $h(t){var n=ha(t);if(n&&(t=n.stateNode)){var a=t[Kt]||null;e:switch(t=n.stateNode,n.type){case"input":if(zt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Kt]||null;if(!u)throw Error(r(90));zt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&bn(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Qt(t,!!a.multiple,n,!1)}}}var nu=!1;function ep(t,n,a){if(nu)return t(n,a);nu=!0;try{var o=t(n);return o}finally{if(nu=!1,(Dr!==null||Nr!==null)&&(Hl(),Dr&&(n=Dr,t=Nr,Nr=Dr=null,$h(n),t)))for(n=0;n<t.length;n++)$h(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Kt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Ii)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{iu=!1}var ma=null,au=null,nl=null;function tp(){if(nl)return nl;var t,n=au,a=n.length,o,u="value"in ma?ma.value:ma.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[h-o];o++);return nl=u.slice(t,1<o?1-o:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function np(){return!1}function Bn(t){function n(a,o,u,h,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?al:np,this.isPropagationStopped=np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Bn(Za),Is=g({},Za,{view:0,detail:0}),z_=Bn(Is),ru,su,Fs,sl=g({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(ru=t.screenX-Fs.screenX,su=t.screenY-Fs.screenY):su=ru=0,Fs=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),ip=Bn(sl),H_=g({},sl,{dataTransfer:0}),G_=Bn(H_),V_=g({},Is,{relatedTarget:0}),ou=Bn(V_),k_=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=Bn(k_),X_=g({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=Bn(X_),q_=g({},Za,{data:0}),ap=Bn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K_[t])?!!n[t]:!1}function lu(){return Q_}var J_=g({},Is,{key:function(t){if(t.key){var n=Y_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Bn(J_),ex=g({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Bn(ex),tx=g({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),nx=Bn(tx),ix=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Bn(ix),rx=g({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Bn(rx),ox=g({},Za,{newState:0,oldState:0}),lx=Bn(ox),cx=[9,13,27,32],cu=Ii&&"CompositionEvent"in window,zs=null;Ii&&"documentMode"in document&&(zs=document.documentMode);var ux=Ii&&"TextEvent"in window&&!zs,sp=Ii&&(!cu||zs&&8<zs&&11>=zs),op=" ",lp=!1;function cp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function fx(t,n){switch(t){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return t=n.data,t===op&&lp?null:t;default:return null}}function dx(t,n){if(Ur)return t==="compositionend"||!cu&&cp(t,n)?(t=tp(),nl=au=ma=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hx[t.type]:n==="textarea"}function dp(t,n,a,o){Dr?Nr?Nr.push(o):Nr=[o]:Dr=o,n=Wl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function px(t){Wg(t,0)}function ol(t){var n=Ya(t);if(bn(n))return t}function hp(t,n){if(t==="change")return n}var pp=!1;if(Ii){var uu;if(Ii){var fu="oninput"in document;if(!fu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),fu=typeof mp.oninput=="function"}uu=fu}else uu=!1;pp=uu&&(!document.documentMode||9<document.documentMode)}function gp(){Hs&&(Hs.detachEvent("onpropertychange",vp),Gs=Hs=null)}function vp(t){if(t.propertyName==="value"&&ol(Gs)){var n=[];dp(n,Gs,t,tu(t)),ep(px,n)}}function mx(t,n,a){t==="focusin"?(gp(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",vp)):t==="focusout"&&gp()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Gs)}function vx(t,n){if(t==="click")return ol(n)}function _x(t,n){if(t==="input"||t==="change")return ol(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:xx;function Vs(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var a=_p(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=di(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=di(t.document)}return n}function du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=Ii&&"documentMode"in document&&11>=document.documentMode,Lr=null,hu=null,ks=null,pu=!1;function Mp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Lr==null||Lr!==di(o)||(o=Lr,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Vs(ks,o)||(ks=o,o=Wl(hu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Lr)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},mu={},Ep={};Ii&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Qa(t){if(mu[t])return mu[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return mu[t]=n[a];return t}var bp=Qa("animationend"),Tp=Qa("animationiteration"),Ap=Qa("animationstart"),Sx=Qa("transitionrun"),Mx=Qa("transitionstart"),Ex=Qa("transitioncancel"),Rp=Qa("transitionend"),wp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function hi(t,n){wp.set(t,n),C(n,[t])}var Cp=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},Cp.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var ti=[],Pr=0,vu=0;function ll(){for(var t=Pr,n=vu=Pr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}h!==0&&Dp(a,u,h)}}function cl(t,n,a,o){ti[Pr++]=t,ti[Pr++]=n,ti[Pr++]=a,ti[Pr++]=o,vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _u(t,n,a,o){return cl(t,n,a,o),ul(t)}function Br(t,n){return cl(t,null,null,n),ul(t)}function Dp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ce(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function ul(t){if(50<mo)throw mo=0,Tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function bx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new bx(t,n,a,o)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function fl(t,n,a,o,u,h){var E=0;if(o=t,typeof t=="function")xu(t)&&(E=1);else if(typeof t=="string")E=Ay(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Xn(31,a,n,u),t.elementType=D,t.lanes=h,t;case T:return Ja(a.children,u,h,n);case A:E=8,u|=24;break;case S:return t=Xn(12,a,n,u|2),t.elementType=S,t.lanes=h,t;case F:return t=Xn(13,a,n,u),t.elementType=F,t.lanes=h,t;case V:return t=Xn(19,a,n,u),t.elementType=V,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case P:E=10;break e;case L:E=9;break e;case N:E=11;break e;case G:E=14;break e;case K:E=16,o=null;break e}E=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Xn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Ja(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function yu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Su(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fr=[],zr=0,dl=null,hl=0,ni=[],ii=0,$a=null,zi=1,Hi="";function er(t,n){Fr[zr++]=hl,Fr[zr++]=dl,dl=t,hl=n}function Up(t,n,a){ni[ii++]=zi,ni[ii++]=Hi,ni[ii++]=$a,$a=t;var o=zi;t=Hi;var u=32-Ce(o)-1;o&=~(1<<u),a+=1;var h=32-Ce(n)+u;if(30<h){var E=u-u%5;h=(o&(1<<E)-1).toString(32),o>>=E,u-=E,zi=1<<32-Ce(n)+u|a<<u|o,Hi=h+t}else zi=1<<h|a<<u|o,Hi=t}function Mu(t){t.return!==null&&(er(t,1),Up(t,1,0))}function Eu(t){for(;t===dl;)dl=Fr[--zr],Fr[zr]=null,hl=Fr[--zr],Fr[zr]=null;for(;t===$a;)$a=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null}var Un=null,Jt=null,wt=!1,tr=null,Ai=!1,bu=Error(r(519));function nr(t){var n=Error(r(418,""));throw Ws(ei(n,t)),bu}function Lp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[Kt]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)yt(vo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_t(n);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Cr(n,o.value,o.defaultValue,o.children),_t(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Kg(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=ql),n=!0):n=!1,n||nr(t)}function Op(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Un=Un.return}}function js(t){if(t!==Un)return!1;if(!wt)return Op(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gf(t.type,t.memoizedProps)),a=!a),a&&Jt&&nr(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Jt=mi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Jt=null}}else n===27?(n=Jt,Na(t.type)?(t=Xf,Xf=null,Jt=t):Jt=n):Jt=Un?mi(t.stateNode.nextSibling):null;return!0}function Xs(){Jt=Un=null,wt=!1}function Pp(){var t=tr;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),tr=null),t}function Ws(t){tr===null?tr=[t]:tr.push(t)}var Tu=ne(null),ir=null,Gi=null;function ga(t,n,a){Me(Tu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Tu.current,ye(Tu)}function Au(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Au(h.return,a,t),o||(E=null);break e}h=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=a,h=E.alternate,h!==null&&(h.lanes|=a),Au(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function qs(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=u.type;jn(u.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(u===ve.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}u=u.return}t!==null&&Ru(n,t,a,o),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Bp(ir,t)}function ml(t,n){return ir===null&&ar(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=s.unstable_scheduleCallback,Rx=s.unstable_NormalPriority,fn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new Tx,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&Ax(Rx,function(){t.controller.abort()})}var Zs=null,Cu=0,Hr=0,Gr=null;function wx(t,n){if(Zs===null){var a=Zs=[];Cu=0,Hr=Uf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cu++,n.then(Ip,Ip),n}function Ip(){if(--Cu===0&&Zs!==null){Gr!==null&&(Gr.status="fulfilled");var t=Zs;Zs=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(t,n),Fp!==null&&Fp(t,n)};var rr=ne(null);function Du(){var t=rr.current;return t!==null?t:kt.pooledCache}function gl(t,n){n===null?Me(rr,rr.current):Me(rr,n.pool)}function zp(){var t=Du();return t===null?null:{parent:fn._currentValue,pool:t}}var Ks=Error(r(460)),Hp=Error(r(474)),vl=Error(r(542)),Nu={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _l(){}function Vp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(_l,_l);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw Qs=n,Ks}}var Qs=null;function kp(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function jp(t){if(t===Ks||t===vl)throw Error(r(483))}var va=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ul(t),Dp(t,null,a),n}return cl(t,o,n,a),ul(t)}function Js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xe(t,a)}}function Ou(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function $s(){if(Pu){var t=Gr;if(t!==null)throw t}}function eo(t,n,a,o){Pu=!1;var u=t.updateQueue;va=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,ie=z.next;z.next=null,E===null?h=ie:E.next=ie,E=z;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==E&&(R===null?me.firstBaseUpdate=ie:R.next=ie,me.lastBaseUpdate=z))}if(h!==null){var _e=u.baseState;E=0,me=ie=z=null,R=h;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(Et&se)===se:(o&se)===se){se!==0&&se===Hr&&(Pu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var at=t,tt=R;se=n;var It=a;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){_e=at.call(It,_e,se);break e}_e=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,se=typeof at=="function"?at.call(It,_e,se):at,se==null)break e;_e=g({},_e,se);break e;case 2:va=!0}}se=R.callback,se!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ie=me=le,z=_e):me=me.next=le,E|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);me===null&&(z=_e),u.baseState=z,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),Ra|=E,t.lanes=E,t.memoizedState=_e}}function Xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Wp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xp(a[t],n)}var Vr=ne(null),xl=ne(0);function qp(t,n){t=Zi,Me(xl,t),Me(Vr,n),Zi=t|n.baseLanes}function Bu(){Me(xl,Zi),Me(Vr,Vr.current)}function Iu(){Zi=xl.current,ye(Vr),ye(xl)}var ya=0,gt=null,Pt=null,rn=null,yl=!1,kr=!1,sr=!1,Sl=0,to=0,jr=null,Dx=0;function tn(){throw Error(r(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function zu(t,n,a,o,u,h){return ya=h,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Dm:Nm,sr=!1,h=a(o,u),sr=!1,kr&&(h=Zp(n,a,o,u)),Yp(t),h}function Yp(t){I.H=Rl;var n=Pt!==null&&Pt.next!==null;if(ya=0,rn=Pt=gt=null,yl=!1,to=0,jr=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&pl(t)&&(gn=!0))}function Zp(t,n,a,o){gt=t;var u=0;do{if(kr&&(jr=null),to=0,kr=!1,25<=u)throw Error(r(301));if(u+=1,rn=Pt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Ix,h=n(a,o)}while(kr);return h}function Nx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(gt.flags|=1024),n}function Hu(){var t=Sl!==0;return Sl=0,t}function Gu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ya=0,rn=Pt=gt=null,kr=!1,to=Sl=0,jr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?gt.memoizedState=rn=t:rn=rn.next=t,rn}function sn(){if(Pt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=rn===null?gt.memoizedState:rn.next;if(n!==null)rn=n,Pt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},rn===null?gt.memoizedState=rn=t:rn=rn.next=t}return rn}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=to;return to+=1,jr===null&&(jr=[]),t=Vp(jr,t,n),n=gt,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Dm:Nm),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===P)return An(t)}throw Error(r(438,String(t)))}function ju(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ku(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=b;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function El(t){var n=sn();return Xu(n,Pt,t)}function Xu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=E=null,z=null,ie=n,me=!1;do{var _e=ie.lane&-536870913;if(_e!==ie.lane?(Et&_e)===_e:(ya&_e)===_e){var se=ie.revertLane;if(se===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),_e===Hr&&(me=!0);else if((ya&se)===se){ie=ie.next,se===Hr&&(me=!0);continue}else _e={lane:0,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(R=z=_e,E=h):z=z.next=_e,gt.lanes|=se,Ra|=se;_e=ie.action,sr&&a(h,_e),h=ie.hasEagerState?ie.eagerState:a(h,_e)}else se={lane:_e,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(R=z=se,E=h):z=z.next=se,gt.lanes|=_e,Ra|=_e;ie=ie.next}while(ie!==null&&ie!==n);if(z===null?E=h:z.next=R,!jn(h,t.memoizedState)&&(gn=!0,me&&(a=Gr,a!==null)))throw a;t.memoizedState=h,t.baseState=E,t.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wu(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);jn(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Kp(t,n,a){var o=gt,u=sn(),h=wt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!jn((Pt||u).memoizedState,a);E&&(u.memoizedState=a,gn=!0),u=u.queue;var R=$p.bind(null,o,u,t);if(io(2048,8,R,[t]),u.getSnapshot!==n||E||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Xr(9,bl(),Jp.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));h||(ya&124)!==0||Qp(o,n,a)}return a}function Qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=ku(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jp(t,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&tm(t)}function $p(t,n,a){return a(function(){em(n)&&tm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function tm(t){var n=Br(t,2);n!==null&&Kn(n,t,2)}function qu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),sr){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function nm(t,n,a,o){return t.baseState=a,Xu(t,Pt,typeof o=="function"?o:ki)}function Ux(t,n,a,o,u){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,E={};I.T=E;try{var R=a(u,o),z=I.S;z!==null&&z(E,R),am(t,n,R)}catch(ie){Yu(t,n,ie)}finally{I.T=h}}else try{h=a(u,o),am(t,n,h)}catch(ie){Yu(t,n,ie)}}function am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(t,n,o)},function(o){return Yu(t,n,o)}):rm(t,n,a)}function rm(t,n,a){n.status="fulfilled",n.value=a,sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,im(t,a)))}function Yu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(wt){var a=kt.formState;if(a!==null){e:{var o=gt;if(wt){if(Jt){t:{for(var u=Jt,h=Ai;u.nodeType!==8;){if(!h){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=mi(u.nextSibling),o=u.data==="F!";break e}}nr(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,gt,o),o.dispatch=a,o=qu(!1),h=$u.bind(null,gt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ux.bind(null,gt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function cm(t){var n=sn();return um(n,Pt,t)}function um(t,n,a){if(n=Xu(t,n,om)[0],t=El(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(E){throw E===Ks?vl:E}else o=n;n=sn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,Xr(9,bl(),Lx.bind(null,u,a),null)),[o,h,t]}function Lx(t,n){t.action=n}function fm(t){var n=sn(),a=Pt;if(a!==null)return um(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Xr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=ku(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function bl(){return{destroy:void 0,resource:void 0}}function dm(){return sn().memoizedState}function Tl(t,n,a,o){var u=In();o=o===void 0?null:o,gt.flags|=t,u.memoizedState=Xr(1|n,bl(),a,o)}function io(t,n,a,o){var u=sn();o=o===void 0?null:o;var h=u.memoizedState.inst;Pt!==null&&o!==null&&Fu(o,Pt.memoizedState.deps)?u.memoizedState=Xr(n,h,a,o):(gt.flags|=t,u.memoizedState=Xr(1|n,h,a,o))}function hm(t,n){Tl(8390656,8,t,n)}function pm(t,n){io(2048,8,t,n)}function mm(t,n){return io(4,2,t,n)}function gm(t,n){return io(4,4,t,n)}function vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,a){a=a!=null?a.concat([t]):null,io(4,4,vm.bind(null,n,t),a)}function Zu(){}function xm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),sr){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o}function Ku(t,n,a){return a===void 0||(ya&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Eg(),gt.lanes|=t,Ra|=t,a)}function Sm(t,n,a,o){return jn(a,n)?a:Vr.current!==null?(t=Ku(t,a,o),jn(t,n)||(gn=!0),t):(ya&42)===0?(gn=!0,t.memoizedState=a):(t=Eg(),gt.lanes|=t,Ra|=t,n)}function Mm(t,n,a,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var E=I.T,R={};I.T=R,$u(t,!1,n,a);try{var z=u(),ie=I.S;if(ie!==null&&ie(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=Cx(z,o);ao(t,n,me,Zn(t))}else ao(t,n,o,Zn(t))}catch(_e){ao(t,n,{then:function(){},status:"rejected",reason:_e},Zn())}finally{Q.p=h,I.T=E}}function Ox(){}function Qu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Em(t).queue;Mm(t,u,n,W,a===null?Ox:function(){return bm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bm(t){var n=Em(t).next.queue;ao(t,n,{},Zn())}function Ju(){return An(Eo)}function Tm(){return sn().memoizedState}function Am(){return sn().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=_a(a);var o=xa(n,t,a);o!==null&&(Kn(o,n,a),Js(o,n,a)),n={cache:wu()},t.payload=n;return}n=n.return}}function Bx(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?wm(n,a):(a=_u(t,n,a,o),a!==null&&(Kn(a,t,o),Cm(a,n,o)))}function Rm(t,n,a){var o=Zn();ao(t,n,a,o)}function ao(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))wm(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,R=h(E,a);if(u.hasEagerState=!0,u.eagerState=R,jn(R,E))return cl(t,n,u,0),kt===null&&ll(),!1}catch{}finally{}if(a=_u(t,n,u,o),a!==null)return Kn(a,t,o),Cm(a,n,o),!0}return!1}function $u(t,n,a,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=_u(t,a,o,2),n!==null&&Kn(n,t,2)}function Al(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function wm(t,n){kr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xe(t,a)}}var Rl={readContext:An,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Dm={readContext:An,use:Ml,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tl(4194308,4,vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tl(4194308,4,t,n)},useInsertionEffect:function(t,n){Tl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(sr){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(sr){re(!0);try{a(n)}finally{re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Bx.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=Rm.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=In();return Ku(a,t,n)},useTransition:function(){var t=qu(!1);return t=Mm.bind(null,gt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=gt,u=In();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(Et&124)!==0||Qp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,hm($p.bind(null,o,h,t),[t]),o.flags|=2048,Xr(9,bl(),Jp.bind(null,o,h,a,n),null),a},useId:function(){var t=In(),n=kt.identifierPrefix;if(wt){var a=Hi,o=zi;a=(o&~(1<<32-Ce(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Dx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return In().memoizedState=Px.bind(null,gt)}},Nm={readContext:An,use:Ml,useCallback:xm,useContext:An,useEffect:pm,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:El,useRef:dm,useState:function(){return El(ki)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=sn();return Sm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=El(ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Ju,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=sn();return nm(a,Pt,t,n)},useMemoCache:ju,useCacheRefresh:Am},Ix={readContext:An,use:Ml,useCallback:xm,useContext:An,useEffect:pm,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:Wu,useRef:dm,useState:function(){return Wu(ki)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=sn();return Pt===null?Ku(a,t,n):Sm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Wu(ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Kp,useId:Tm,useHostTransitionStatus:Ju,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=sn();return Pt!==null?nm(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Am},Wr=null,ro=0;function wl(t){var n=ro;return ro+=1,Wr===null&&(Wr=[]),Vp(Wr,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Um(t){var n=t._init;return n(t._payload)}function Lm(t){function n(Z,j){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[j],Z.flags|=16):ee.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function o(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=Fi(Z,j),Z.index=0,Z.sibling=null,Z}function h(Z,j,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<j?(Z.flags|=67108866,j):ee):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,j,ee,ge){return j===null||j.tag!==6?(j=yu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function z(Z,j,ee,ge){var ke=ee.type;return ke===T?me(Z,j,ee.props.children,ge,ee.key):j!==null&&(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===K&&Um(ke)===j.type)?(j=u(j,ee.props),so(j,ee),j.return=Z,j):(j=fl(ee.type,ee.key,ee.props,null,Z.mode,ge),so(j,ee),j.return=Z,j)}function ie(Z,j,ee,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Su(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee.children||[]),j.return=Z,j)}function me(Z,j,ee,ge,ke){return j===null||j.tag!==7?(j=Ja(ee,Z.mode,ge,ke),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function _e(Z,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=yu(""+j,Z.mode,ee),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return ee=fl(j.type,j.key,j.props,null,Z.mode,ee),so(ee,j),ee.return=Z,ee;case M:return j=Su(j,Z.mode,ee),j.return=Z,j;case K:var ge=j._init;return j=ge(j._payload),_e(Z,j,ee)}if(ce(j)||Y(j))return j=Ja(j,Z.mode,ee,null),j.return=Z,j;if(typeof j.then=="function")return _e(Z,wl(j),ee);if(j.$$typeof===P)return _e(Z,ml(Z,j),ee);Cl(Z,j)}return null}function se(Z,j,ee,ge){var ke=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ke!==null?null:R(Z,j,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:return ee.key===ke?z(Z,j,ee,ge):null;case M:return ee.key===ke?ie(Z,j,ee,ge):null;case K:return ke=ee._init,ee=ke(ee._payload),se(Z,j,ee,ge)}if(ce(ee)||Y(ee))return ke!==null?null:me(Z,j,ee,ge,null);if(typeof ee.then=="function")return se(Z,j,wl(ee),ge);if(ee.$$typeof===P)return se(Z,j,ml(Z,ee),ge);Cl(Z,ee)}return null}function le(Z,j,ee,ge,ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(ee)||null,R(j,Z,""+ge,ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case x:return Z=Z.get(ge.key===null?ee:ge.key)||null,z(j,Z,ge,ke);case M:return Z=Z.get(ge.key===null?ee:ge.key)||null,ie(j,Z,ge,ke);case K:var vt=ge._init;return ge=vt(ge._payload),le(Z,j,ee,ge,ke)}if(ce(ge)||Y(ge))return Z=Z.get(ee)||null,me(j,Z,ge,ke,null);if(typeof ge.then=="function")return le(Z,j,ee,wl(ge),ke);if(ge.$$typeof===P)return le(Z,j,ee,ml(j,ge),ke);Cl(j,ge)}return null}function at(Z,j,ee,ge){for(var ke=null,vt=null,Ze=j,it=j=0,_n=null;Ze!==null&&it<ee.length;it++){Ze.index>it?(_n=Ze,Ze=null):_n=Ze.sibling;var At=se(Z,Ze,ee[it],ge);if(At===null){Ze===null&&(Ze=_n);break}t&&Ze&&At.alternate===null&&n(Z,Ze),j=h(At,j,it),vt===null?ke=At:vt.sibling=At,vt=At,Ze=_n}if(it===ee.length)return a(Z,Ze),wt&&er(Z,it),ke;if(Ze===null){for(;it<ee.length;it++)Ze=_e(Z,ee[it],ge),Ze!==null&&(j=h(Ze,j,it),vt===null?ke=Ze:vt.sibling=Ze,vt=Ze);return wt&&er(Z,it),ke}for(Ze=o(Ze);it<ee.length;it++)_n=le(Ze,Z,it,ee[it],ge),_n!==null&&(t&&_n.alternate!==null&&Ze.delete(_n.key===null?it:_n.key),j=h(_n,j,it),vt===null?ke=_n:vt.sibling=_n,vt=_n);return t&&Ze.forEach(function(Ba){return n(Z,Ba)}),wt&&er(Z,it),ke}function tt(Z,j,ee,ge){if(ee==null)throw Error(r(151));for(var ke=null,vt=null,Ze=j,it=j=0,_n=null,At=ee.next();Ze!==null&&!At.done;it++,At=ee.next()){Ze.index>it?(_n=Ze,Ze=null):_n=Ze.sibling;var Ba=se(Z,Ze,At.value,ge);if(Ba===null){Ze===null&&(Ze=_n);break}t&&Ze&&Ba.alternate===null&&n(Z,Ze),j=h(Ba,j,it),vt===null?ke=Ba:vt.sibling=Ba,vt=Ba,Ze=_n}if(At.done)return a(Z,Ze),wt&&er(Z,it),ke;if(Ze===null){for(;!At.done;it++,At=ee.next())At=_e(Z,At.value,ge),At!==null&&(j=h(At,j,it),vt===null?ke=At:vt.sibling=At,vt=At);return wt&&er(Z,it),ke}for(Ze=o(Ze);!At.done;it++,At=ee.next())At=le(Ze,Z,it,At.value,ge),At!==null&&(t&&At.alternate!==null&&Ze.delete(At.key===null?it:At.key),j=h(At,j,it),vt===null?ke=At:vt.sibling=At,vt=At);return t&&Ze.forEach(function(Fy){return n(Z,Fy)}),wt&&er(Z,it),ke}function It(Z,j,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case x:e:{for(var ke=ee.key;j!==null;){if(j.key===ke){if(ke=ee.type,ke===T){if(j.tag===7){a(Z,j.sibling),ge=u(j,ee.props.children),ge.return=Z,Z=ge;break e}}else if(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===K&&Um(ke)===j.type){a(Z,j.sibling),ge=u(j,ee.props),so(ge,ee),ge.return=Z,Z=ge;break e}a(Z,j);break}else n(Z,j);j=j.sibling}ee.type===T?(ge=Ja(ee.props.children,Z.mode,ge,ee.key),ge.return=Z,Z=ge):(ge=fl(ee.type,ee.key,ee.props,null,Z.mode,ge),so(ge,ee),ge.return=Z,Z=ge)}return E(Z);case M:e:{for(ke=ee.key;j!==null;){if(j.key===ke)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(Z,j.sibling),ge=u(j,ee.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}ge=Su(ee,Z.mode,ge),ge.return=Z,Z=ge}return E(Z);case K:return ke=ee._init,ee=ke(ee._payload),It(Z,j,ee,ge)}if(ce(ee))return at(Z,j,ee,ge);if(Y(ee)){if(ke=Y(ee),typeof ke!="function")throw Error(r(150));return ee=ke.call(ee),tt(Z,j,ee,ge)}if(typeof ee.then=="function")return It(Z,j,wl(ee),ge);if(ee.$$typeof===P)return It(Z,j,ml(Z,ee),ge);Cl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(Z,j.sibling),ge=u(j,ee),ge.return=Z,Z=ge):(a(Z,j),ge=yu(ee,Z.mode,ge),ge.return=Z,Z=ge),E(Z)):a(Z,j)}return function(Z,j,ee,ge){try{ro=0;var ke=It(Z,j,ee,ge);return Wr=null,ke}catch(Ze){if(Ze===Ks||Ze===vl)throw Ze;var vt=Xn(29,Ze,null,Z.mode);return vt.lanes=ge,vt.return=Z,vt}finally{}}}var qr=Lm(!0),Om=Lm(!1),ai=ne(null),Ri=null;function Sa(t){var n=t.alternate;Me(dn,dn.current&1),Me(ai,t),Ri===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(Ri=t)}function Pm(t){if(t.tag===22){if(Me(dn,dn.current),Me(ai,t),Ri===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ri=t)}}else Ma()}function Ma(){Me(dn,dn.current),Me(ai,ai.current)}function ji(t){ye(ai),Ri===t&&(Ri=null),ye(dn)}var dn=ne(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Kn(n,t,o),Js(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Kn(n,t,o),Js(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=xa(t,o,a),n!==null&&(Kn(n,t,a),Js(n,t,a))}};function Bm(t,n,a,o,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,o)||!Vs(u,h):!0}function Im(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&tf.enqueueReplaceState(n,n.state,null)}function or(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fm(t){Nl(t)}function zm(t){console.error(t)}function Hm(t){Nl(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Vm(t){return t=_a(t),t.tag=3,t}function km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Gm(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Gm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Fx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ri===null?Rf():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(t,o,u)),!1;case 22:return a.flags|=65536,o===Nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(t,o,u)),!1}throw Error(r(435,a.tag))}return Cf(t,o,u),Rf(),!1}if(wt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(t=Error(r(422),{cause:o}),Ws(ei(t,a)))):(o!==bu&&(n=Error(r(423),{cause:o}),Ws(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ei(o,a),u=nf(t.stateNode,o,u),Ou(t,u),$t!==4&&($t=2)),!1;var h=Error(r(520),{cause:o});if(h=ei(h,a),po===null?po=[h]:po.push(h),$t!==4&&($t=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=nf(a.stateNode,o,t),Ou(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wa===null||!wa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),km(u,t,a,o),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var jm=Error(r(461)),gn=!1;function Sn(t,n,a,o){n.child=t===null?Om(n,null,a,o):qr(n,t.child,a,o)}function Xm(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return ar(n),o=zu(t,n,a,E,h,u),R=Hu(),t!==null&&!gn?(Gu(t,n,u),Xi(t,n,u)):(wt&&R&&Mu(n),n.flags|=1,Sn(t,n,o,u),n.child)}function Wm(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!xu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,qm(t,n,h,o,u)):(t=fl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!ff(t,u)){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(E,o)&&t.ref===n.ref)return Xi(t,n,u)}return n.flags|=1,t=Fi(h,o),t.ref=n.ref,t.return=n,n.child=t}function qm(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Vs(h,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=h,ff(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Xi(t,n,u)}return af(t,n,a,o,u)}function Ym(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Zm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,h!==null?h.cachePool:null),h!==null?qp(n,h):Bu(),Pm(n);else return n.lanes=n.childLanes=536870912,Zm(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(gl(n,h.cachePool),qp(n,h),Ma(),n.memoizedState=null):(t!==null&&gl(n,null),Bu(),Ma());return Sn(t,n,u,a),n.child}function Zm(t,n,a,o){var u=Du();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&gl(n,null),Bu(),Pm(n),t!==null&&qs(t,n,o,!0),null}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function af(t,n,a,o,u){return ar(n),a=zu(t,n,a,o,void 0,u),o=Hu(),t!==null&&!gn?(Gu(t,n,u),Xi(t,n,u)):(wt&&o&&Mu(n),n.flags|=1,Sn(t,n,a,u),n.child)}function Km(t,n,a,o,u,h){return ar(n),n.updateQueue=null,a=Zp(n,o,a,u),Yp(t),o=Hu(),t!==null&&!gn?(Gu(t,n,h),Xi(t,n,h)):(wt&&o&&Mu(n),n.flags|=1,Sn(t,n,a,h),n.child)}function Qm(t,n,a,o,u){if(ar(n),n.stateNode===null){var h=Ir,E=a.contextType;typeof E=="object"&&E!==null&&(h=An(E)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=tf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Uu(n),E=a.contextType,h.context=typeof E=="object"&&E!==null?An(E):Ir,h.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(ef(n,a,E,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&tf.enqueueReplaceState(h,h.state,null),eo(n,o,h,u),$s(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,z=or(a,R);h.props=z;var ie=h.context,me=a.contextType;E=Ir,typeof me=="object"&&me!==null&&(E=An(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ie!==E)&&Im(n,h,o,E),va=!1;var se=n.memoizedState;h.state=se,eo(n,o,h,u),$s(),ie=n.memoizedState,R||se!==ie||va?(typeof _e=="function"&&(ef(n,a,_e,o),ie=n.memoizedState),(z=va||Bm(n,a,z,o,se,ie,E))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),h.props=o,h.state=ie,h.context=E,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Lu(t,n),E=n.memoizedProps,me=or(a,E),h.props=me,_e=n.pendingProps,se=h.context,ie=a.contextType,z=Ir,typeof ie=="object"&&ie!==null&&(z=An(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==_e||se!==z)&&Im(n,h,o,z),va=!1,se=n.memoizedState,h.state=se,eo(n,o,h,u),$s();var le=n.memoizedState;E!==_e||se!==le||va||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,o),le=n.memoizedState),(me=va||Bm(n,a,me,o,se,le,z)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(ie||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,le,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,le,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),h.props=o,h.state=le,h.context=z,o=me):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ll(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=qr(n,t.child,null,u),n.child=qr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Xi(t,n,u),t}function Jm(t,n,a,o){return Xs(),n.flags|=256,Sn(t,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(t){return{baseLanes:t,cachePool:zp()}}function of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function $m(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Sa(n):Ma(),wt){var R=Jt,z;if(z=R){e:{for(z=R,R=Ai;z.nodeType!==8;){if(!R){R=null;break e}if(z=mi(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(n.memoizedState={dehydrated:R,treeContext:$a!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},z=Xn(18,null,null,0),z.stateNode=R,z.return=n,n.child=z,Un=n,Jt=null,z=!0):z=!1}z||nr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return jf(R)?n.lanes=32:n.lanes=536870912,null;ji(n)}return R=o.children,o=o.fallback,u?(Ma(),u=n.mode,R=Ol({mode:"hidden",children:R},u),o=Ja(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=sf(a),u.childLanes=of(t,E,a),n.memoizedState=rf,o):(Sa(n),lf(n,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(h)n.flags&256?(Sa(n),n.flags&=-257,n=cf(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),u=o.fallback,R=n.mode,o=Ol({mode:"visible",children:o.children},R),u=Ja(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qr(n,t.child,null,a),o=n.child,o.memoizedState=sf(a),o.childLanes=of(t,E,a),n.memoizedState=rf,n=u);else if(Sa(n),jf(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var ie=E.dgst;E=ie,o=Error(r(419)),o.stack="",o.digest=E,Ws({value:o,source:null,stack:null}),n=cf(t,n,a)}else if(gn||qs(t,n,a,!1),E=(a&t.childLanes)!==0,gn||E){if(E=kt,E!==null&&(o=a&-a,o=(o&42)!==0?1:rt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Br(t,o),Kn(E,t,o),jm;R.data==="$?"||Rf(),n=cf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Jt=mi(R.nextSibling),Un=n,wt=!0,tr=null,Ai=!1,t!==null&&(ni[ii++]=zi,ni[ii++]=Hi,ni[ii++]=$a,zi=t.id,Hi=t.overflow,$a=n),n=lf(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,R=n.mode,z=t.child,ie=z.sibling,o=Fi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ie!==null?u=Fi(ie,u):(u=Ja(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=sf(a):(z=R.cachePool,z!==null?(ie=fn._currentValue,z=z.parent!==ie?{parent:ie,pool:ie}:z):z=zp(),R={baseLanes:R.baseLanes|a,cachePool:z}),u.memoizedState=R,u.childLanes=of(t,E,a),n.memoizedState=rf,o):(Sa(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function lf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function cf(t,n,a){return qr(n,t.child,null,a),t=lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Au(t.return,n,a)}function uf(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function tg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Sn(t,n,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,n);else if(t.tag===19)eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(dn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}uf(n,!0,a,null,h);break;case"together":uf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function zx(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),ga(n,fn,t.memoizedState.cache),Xs();break;case 27:case 5:qe(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(t,n,a):(Sa(n),t=Xi(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,Ym(t,n,a);case 24:ga(n,fn,t.memoizedState.cache)}return Xi(t,n,a)}function ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!ff(t,a)&&(n.flags&128)===0)return gn=!1,zx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,wt&&(n.flags&1048576)!==0&&Up(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")xu(o)?(t=or(o,t),n.tag=1,n=Qm(null,n,o,t,a)):(n.tag=0,n=af(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=Xm(null,n,o,t,a);break e}else if(u===G){n.tag=14,n=Wm(null,n,o,t,a);break e}}throw n=pe(o)||o,Error(r(306,n,""))}}return n;case 0:return af(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=or(o,n.pendingProps),Qm(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Lu(t,n),eo(n,o,null,a);var E=n.memoizedState;if(o=E.cache,ga(n,fn,o),o!==h.cache&&Ru(n,[fn],a,!0),$s(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jm(t,n,o,a);break e}else if(o!==u){u=ei(Error(r(424)),n),Ws(u),n=Jm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=mi(t.firstChild),Un=n,wt=!0,tr=null,Ai=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xs(),o===u){n=Xi(t,n,a);break e}Sn(t,n,o,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=sv(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=Yl(ae.current).createElement(a),o[un]=n,o[Kt]=t,En(o,a,t),an(o),n.stateNode=o):n.memoizedState=sv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&wt&&(o=n.stateNode=iv(n.type,n.pendingProps,ae.current),Un=n,Ai=!0,u=Jt,Na(n.type)?(Xf=u,Jt=mi(o.firstChild)):Jt=u),Sn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Jt)&&(o=hy(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Un=n,Jt=mi(o.firstChild),Ai=!1,u=!0):u=!1),u||nr(n)),qe(n),u=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,Gf(u,h)?o=null:E!==null&&Gf(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(t,n,Nx,null,null,a),Eo._currentValue=u),Ll(t,n),Sn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Jt)&&(a=py(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Un=n,Jt=null,t=!0):t=!1),t||nr(n)),null;case 13:return $m(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=qr(n,null,o,a):Sn(t,n,o,a),n.child;case 11:return Xm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Sn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ar(n),u=An(u),o=o(u),n.flags|=1,Sn(t,n,o,a),n.child;case 14:return Wm(t,n,n.type,n.pendingProps,a);case 15:return qm(t,n,n.type,n.pendingProps,a);case 19:return tg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Ol(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Ym(t,n,a);case 24:return ar(n),o=An(fn),t===null?(u=Du(),u===null&&(u=kt,h=wu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Uu(n),ga(n,fn,u)):((t.lanes&a)!==0&&(Lu(t,n),eo(n,null,null,a),$s()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,fn,o)):(o=h.cache,ga(n,fn,o),o!==u.cache&&Ru(n,[fn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fv(n)){if(n=ai.current,n!==null&&((Et&4194048)===Et?Ri!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==Ri))throw Qs=Nu,Hp;t.flags|=8192}}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,Qr|=n)}function oo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Hx(t,n,a){var o=n.pendingProps;switch(Eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(fn),Ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(js(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(Wi(n),a!==null?(qt(n),ig(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Wi(n),qt(n),ig(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Wi(n),qt(n),n.flags&=-16777217),null;case 27:ut(n),a=ae.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Ue.current,js(n)?Lp(n):(t=iv(u,o,a),n.stateNode=t,Wi(n))}return qt(n),null;case 5:if(ut(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=Ue.current,js(n))Lp(n);else{switch(u=Yl(ae.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[un]=n,t[Kt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,js(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kg(t.nodeValue,a)),t||nr(n)}else t=Yl(t).createTextNode(o),t[un]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=js(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=Pp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),qt(n),null;case 4:return Ke(),t===null&&Bf(n.stateNode.containerInfo),qt(n),null;case 10:return Vi(n.type),qt(n),null;case 19:if(ye(dn),u=n.memoizedState,u===null)return qt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)oo(u,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Dl(t),h!==null){for(n.flags|=128,oo(u,!1),t=h.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Np(a,t),a=a.sibling;return Me(dn,dn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Ie()>Fl&&(n.flags|=128,o=!0,oo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Dl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),oo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!wt)return qt(n),null}else 2*Ie()-u.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,o=!0,oo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ie(),n.sibling=null,t=dn.current,Me(dn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return ji(n),Iu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(fn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gx(t,n){switch(Eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(fn),Ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 13:if(ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(dn),null;case 4:return Ke(),null;case 10:return Vi(n.type),null;case 22:case 23:return ji(n),Iu(),t!==null&&ye(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(fn),null;case 25:return null;default:return null}}function ag(t,n){switch(Eu(n),n.tag){case 3:Vi(fn),Ke();break;case 26:case 27:case 5:ut(n);break;case 4:Ke();break;case 13:ji(n);break;case 19:ye(dn);break;case 10:Vi(n.type);break;case 22:case 23:ji(n),Iu(),t!==null&&ye(rr);break;case 24:Vi(fn)}}function lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,E=a.inst;o=h(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Ea(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=n;var z=a,ie=R;try{ie()}catch(me){Ht(u,z,me)}}}o=o.next}while(o!==h)}}catch(me){Ht(n,n.return,me)}}function rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Wp(n,a)}catch(o){Ht(t,t.return,o)}}}function sg(t,n,a){a.props=or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function og(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function df(t,n,a){try{var o=t.stateNode;ly(o,t.type,a,n),o[Kt]=n}catch(u){Ht(t,t.return,u)}}function lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ql));else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(pf(t,n,a),t=t.sibling;t!==null;)pf(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function cg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[un]=t,n[Kt]=a}catch(h){Ht(t,t.return,h)}}var qi=!1,nn=!1,mf=!1,ug=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Vx(t,n){if(t=t.containerInfo,zf=ec,t=Sp(t),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,R=-1,z=-1,ie=0,me=0,_e=t,se=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(R=E+u),_e!==h||o!==0&&_e.nodeType!==3||(z=E+o),_e.nodeType===3&&(E+=_e.nodeValue.length),(le=_e.firstChild)!==null;)se=_e,_e=le;for(;;){if(_e===t)break t;if(se===a&&++ie===u&&(R=E),se===h&&++me===o&&(z=E),(le=_e.nextSibling)!==null)break;_e=se,se=_e.parentNode}_e=le}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:t,selectionRange:a},ec=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var at=or(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(at,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&lo(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){Ht(a,a.return,E)}else{var u=or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ht(a,a.return,E)}}o&64&&rg(a),o&512&&co(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(t,n)}catch(E){Ht(a,a.return,E)}}break;case 27:n===null&&o&4&&cg(a);case 26:case 5:ba(t,a),n===null&&o&4&&og(a),o&512&&co(a,a.return);break;case 12:ba(t,a);break;case 13:ba(t,a),o&4&&pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qx.bind(null,a),my(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||nn,u=qi;var h=nn;qi=o,(nn=n)&&!h?Ta(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),qi=u,nn=h}break;case 30:break;default:ba(t,a)}}function dg(t){var n=t.alternate;n!==null&&(t.alternate=null,dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Wt=null,Fn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)hg(t,n,a),a=a.sibling}function hg(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount($,a)}catch{}switch(a.tag){case 26:nn||wi(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||wi(a,n);var o=Wt,u=Fn;Na(a.type)&&(Wt=a.stateNode,Fn=!1),Yi(t,n,a),xo(a.stateNode),Wt=o,Fn=u;break;case 5:nn||wi(a,n);case 6:if(o=Wt,u=Fn,Wt=null,Yi(t,n,a),Wt=o,Fn=u,Wt!==null)if(Fn)try{(Wt.nodeType===9?Wt.body:Wt.nodeName==="HTML"?Wt.ownerDocument.body:Wt).removeChild(a.stateNode)}catch(h){Ht(a,n,h)}else try{Wt.removeChild(a.stateNode)}catch(h){Ht(a,n,h)}break;case 18:Wt!==null&&(Fn?(t=Wt,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ro(t)):tv(Wt,a.stateNode));break;case 4:o=Wt,u=Fn,Wt=a.stateNode.containerInfo,Fn=!0,Yi(t,n,a),Wt=o,Fn=u;break;case 0:case 11:case 14:case 15:nn||Ea(2,a,n),nn||Ea(4,a,n),Yi(t,n,a);break;case 1:nn||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Yi(t,n,a),nn=o;break;default:Yi(t,n,a)}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ro(t)}catch(a){Ht(n,n.return,a)}}function kx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ug),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ug),n;default:throw Error(r(435,t.tag))}}function gf(t,n){var a=kx(t);n.forEach(function(o){var u=Jx.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Na(R.type)){Wt=R.stateNode,Fn=!1;break e}break;case 5:Wt=R.stateNode,Fn=!1;break e;case 3:case 4:Wt=R.stateNode.containerInfo,Fn=!0;break e}R=R.return}if(Wt===null)throw Error(r(160));hg(h,E,u),Wt=null,Fn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mg(n,t),n=n.sibling}var pi=null;function mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ea(3,t,t.return),lo(3,t),Ea(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(nn||a===null||wi(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(Wn(n,t),qn(t),o&512&&(nn||a===null||wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ti]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[un]=t,an(h),o=h;break e;case"link":var E=cv("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(h=E[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(E=cv("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(h=E[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[un]=t,an(h),o=h}t.stateNode=o}else uv(u,t.type,t.stateNode);else t.stateNode=lv(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?uv(u,t.type,t.stateNode):lv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&df(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(nn||a===null||wi(a,a.return)),a!==null&&o&4&&df(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(nn||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{Pn(u,"")}catch(le){Ht(t,t.return,le)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,df(t,u,a!==null?a.memoizedProps:u)),o&1024&&(mf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(le){Ht(t,t.return,le)}}break;case 3:if(Ql=null,u=pi,pi=Zl(n.containerInfo),Wn(n,t),pi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(le){Ht(t,t.return,le)}mf&&(mf=!1,gg(t));break;case 4:o=pi,pi=Zl(t.stateNode.containerInfo),Wn(n,t),qn(t),pi=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mf=Ie()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ie=qi,me=nn;if(qi=ie||u,nn=me||z,Wn(n,t),nn=me,qi=ie,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||qi||nn||lr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=z.stateNode;var _e=z.memoizedProps.style,se=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(le){Ht(z,z.return,le)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(le){Ht(z,z.return,le)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,gf(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gf(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(lg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=hf(t);Bl(t,h,u);break;case 5:var E=a.stateNode;a.flags&32&&(Pn(E,""),a.flags&=-33);var R=hf(t);Bl(t,R,E);break;case 3:case 4:var z=a.stateNode.containerInfo,ie=hf(t);pf(t,ie,z);break;default:throw Error(r(161))}}catch(me){Ht(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),lr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),lr(n);break;case 27:xo(n.stateNode);case 26:case 5:wi(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(u,h,a),lo(4,h);break;case 1:if(Ta(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Ht(o,o.return,ie)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Xp(z[u],R)}catch(ie){Ht(o,o.return,ie)}}a&&E&64&&rg(h),co(h,h.return);break;case 27:cg(h);case 26:case 5:Ta(u,h,a),a&&o===null&&E&4&&og(h),co(h,h.return);break;case 12:Ta(u,h,a);break;case 13:Ta(u,h,a),a&&E&4&&pg(u,h);break;case 22:h.memoizedState===null&&Ta(u,h,a),co(h,h.return);break;case 30:break;default:Ta(u,h,a)}n=n.sibling}}function vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vg(t,n,a,o),n=n.sibling}function vg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&lo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,R=h.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ht(n,n.return,z)}}else Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?Ci(t,n,a,o):uo(t,n):h._visibility&2?Ci(t,n,a,o):(h._visibility|=2,Yr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&vf(E,n);break;case 24:Ci(t,n,a,o),u&2048&&_f(n.alternate,n);break;default:Ci(t,n,a,o)}}function Yr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,R=a,z=o,ie=E.flags;switch(E.tag){case 0:case 11:case 15:Yr(h,E,R,z,u),lo(8,E);break;case 23:break;case 22:var me=E.stateNode;E.memoizedState!==null?me._visibility&2?Yr(h,E,R,z,u):uo(h,E):(me._visibility|=2,Yr(h,E,R,z,u)),u&&ie&2048&&vf(E.alternate,E);break;case 24:Yr(h,E,R,z,u),u&&ie&2048&&_f(E.alternate,E);break;default:Yr(h,E,R,z,u)}n=n.sibling}}function uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:uo(a,o),u&2048&&vf(o.alternate,o);break;case 24:uo(a,o),u&2048&&_f(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var fo=8192;function Zr(t){if(t.subtreeFlags&fo)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 26:Zr(t),t.flags&fo&&t.memoizedState!==null&&wy(pi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t);break;case 3:case 4:var n=pi;pi=Zl(t.stateNode.containerInfo),Zr(t),pi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,Zr(t),fo=n):Zr(t));break;default:Zr(t)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Sg(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:ho(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:ho(t);break;case 12:ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Il(t)):ho(t);break;default:ho(t)}}function Il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Sg(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}t=t.sibling}}function Sg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(dg(o),o===a){vn=null;break e}if(u!==null){u.return=h,vn=u;break e}vn=h}}}var jx={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Xx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,kt=null,xt=null,Et=0,Lt=0,Yn=null,Aa=!1,Kr=!1,xf=!1,Zi=0,$t=0,Ra=0,cr=0,yf=0,ri=0,Qr=0,po=null,zn=null,Sf=!1,Mf=0,Fl=1/0,zl=null,wa=null,Mn=0,Ca=null,Jr=null,$r=0,Ef=0,bf=null,Mg=null,mo=0,Tf=null;function Zn(){if((Ut&2)!==0&&Et!==0)return Et&-Et;if(I.T!==null){var t=Hr;return t!==0?t:Uf()}return bt()}function Eg(){ri===0&&(ri=(Et&536870912)===0||wt?X():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===kt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(es(t,0),Da(t,Et,ri,!1)),Fe(t,a),((Ut&2)===0||t!==kt)&&(t===kt&&((Ut&2)===0&&(cr|=a),$t===4&&Da(t,Et,ri,!1)),Di(t))}function bg(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?Yx(t,n):wf(t,n,!0),h=o;do{if(u===0){Kr&&!o&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Wx(a)){u=wf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;u=po;var z=R.current.memoizedState.isDehydrated;if(z&&(es(R,E).flags|=256),E=wf(R,E,!1),E!==2){if(xf&&!z){R.errorRecoveryDisabledLanes|=h,cr|=h,u=4;break e}h=zn,zn=u,h!==null&&(zn===null?zn=h:zn.push.apply(zn,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){es(t,0),Da(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ri,!Aa);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Mf+300-Ie(),10<u)){if(Da(o,n,ri,!Aa),We(o,0,!0)!==0)break e;o.timeoutHandle=$g(Tg.bind(null,o,a,zn,zl,Sf,n,ri,cr,Qr,Aa,h,2,-0,0),u);break e}Tg(o,a,zn,zl,Sf,n,ri,cr,Qr,Aa,h,0,-0,0)}}break}while(!0);Di(t)}function Tg(t,n,a,o,u,h,E,R,z,ie,me,_e,se,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:Ry},_g(n),_e=Cy(),_e!==null)){t.cancelPendingCommit=_e(Ug.bind(null,t,n,h,a,o,u,E,R,z,me,1,se,le)),Da(t,h,E,!ie);return}Ug(t,n,h,a,o,u,E,R,z)}function Wx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,o){n&=~yf,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ce(u),E=1<<h;o[h]=-1,u&=~E}a!==0&&xe(t,a,n)}function Hl(){return(Ut&6)===0?(go(0),!1):!0}function Af(){if(xt!==null){if(Lt===0)var t=xt.return;else t=xt,Gi=ir=null,Vu(t),Wr=null,ro=0,t=xt;for(;t!==null;)ag(t.alternate,t),t=t.return;xt=null}}function es(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Af(),kt=t,xt=a=Fi(t.current,null),Et=n,Lt=0,Yn=null,Aa=!1,Kr=Ne(t,n),xf=!1,Qr=ri=yf=cr=Ra=$t=0,zn=po=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ce(o),h=1<<u;n|=t[u],o&=~h}return Zi=n,ll(),a}function Ag(t,n){gt=null,I.H=Rl,n===Ks||n===vl?(n=kp(),Lt=3):n===Hp?(n=kp(),Lt=4):Lt=n===jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,xt===null&&($t=1,Ul(t,ei(n,t.current)))}function Rg(){var t=I.H;return I.H=Rl,t===null?Rl:t}function wg(){var t=I.A;return I.A=jx,t}function Rf(){$t=4,Aa||(Et&4194048)!==Et&&ai.current!==null||(Kr=!0),(Ra&134217727)===0&&(cr&134217727)===0||kt===null||Da(kt,Et,ri,!1)}function wf(t,n,a){var o=Ut;Ut|=2;var u=Rg(),h=wg();(kt!==t||Et!==n)&&(zl=null,es(t,n)),n=!1;var E=$t;e:do try{if(Lt!==0&&xt!==null){var R=xt,z=Yn;switch(Lt){case 8:Af(),E=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ie=Lt;if(Lt=0,Yn=null,ts(t,R,z,ie),a&&Kr){E=0;break e}break;default:ie=Lt,Lt=0,Yn=null,ts(t,R,z,ie)}}qx(),E=$t;break}catch(me){Ag(t,me)}while(!0);return n&&t.shellSuspendCounter++,Gi=ir=null,Ut=o,I.H=u,I.A=h,xt===null&&(kt=null,Et=0,ll()),E}function qx(){for(;xt!==null;)Cg(xt)}function Yx(t,n){var a=Ut;Ut|=2;var o=Rg(),u=wg();kt!==t||Et!==n?(zl=null,Fl=Ie()+500,es(t,n)):Kr=Ne(t,n);e:do try{if(Lt!==0&&xt!==null){n=xt;var h=Yn;t:switch(Lt){case 1:Lt=0,Yn=null,ts(t,n,h,1);break;case 2:case 9:if(Gp(h)){Lt=0,Yn=null,Dg(n);break}n=function(){Lt!==2&&Lt!==9||kt!==t||(Lt=7),Di(t)},h.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Gp(h)?(Lt=0,Yn=null,Dg(n)):(Lt=0,Yn=null,ts(t,n,h,7));break;case 5:var E=null;switch(xt.tag){case 26:E=xt.memoizedState;case 5:case 27:var R=xt;if(!E||fv(E)){Lt=0,Yn=null;var z=R.sibling;if(z!==null)xt=z;else{var ie=R.return;ie!==null?(xt=ie,Gl(ie)):xt=null}break t}}Lt=0,Yn=null,ts(t,n,h,5);break;case 6:Lt=0,Yn=null,ts(t,n,h,6);break;case 8:Af(),$t=6;break e;default:throw Error(r(462))}}Zx();break}catch(me){Ag(t,me)}while(!0);return Gi=ir=null,I.H=o,I.A=u,Ut=a,xt!==null?0:(kt=null,Et=0,ll(),$t)}function Zx(){for(;xt!==null&&!st();)Cg(xt)}function Cg(t){var n=ng(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Gl(t):xt=n}function Dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Vu(n);default:ag(a,n),n=xt=Np(n,Zi),n=ng(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Gl(t):xt=n}function ts(t,n,a,o){Gi=ir=null,Vu(n),Wr=null,ro=0;var u=n.return;try{if(Fx(t,u,n,a,Et)){$t=1,Ul(t,ei(a,t.current)),xt=null;return}}catch(h){if(u!==null)throw xt=u,h;$t=1,Ul(t,ei(a,t.current)),xt=null;return}n.flags&32768?(wt||o===1?t=!0:Kr||(Et&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ng(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){Ng(n,Aa);return}t=n.return;var a=Hx(n.alternate,n,Zi);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);$t===0&&($t=5)}function Ng(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);$t=6,xt=null}function Ug(t,n,a,o,u,h,E,R,z){t.cancelPendingCommit=null;do Vl();while(Mn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=vu,Te(t,a,h,E,R,z),t===kt&&(xt=kt=null,Et=0),Jr=n,Ca=t,$r=a,Ef=h,bf=u,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(Gt,function(){return Ig(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Q.p,Q.p=2,E=Ut,Ut|=4;try{Vx(t,n,a)}finally{Ut=E,Q.p=u,I.T=o}}Mn=1,Lg(),Og(),Pg()}}function Lg(){if(Mn===1){Mn=0;var t=Ca,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Ut;Ut|=4;try{mg(n,t);var h=Hf,E=Sp(t.containerInfo),R=h.focusedElem,z=h.selectionRange;if(E!==R&&R&&R.ownerDocument&&yp(R.ownerDocument.documentElement,R)){if(z!==null&&du(R)){var ie=z.start,me=z.end;if(me===void 0&&(me=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(me,R.value.length);else{var _e=R.ownerDocument||document,se=_e&&_e.defaultView||window;if(se.getSelection){var le=se.getSelection(),at=R.textContent.length,tt=Math.min(z.start,at),It=z.end===void 0?tt:Math.min(z.end,at);!le.extend&&tt>It&&(E=It,It=tt,tt=E);var Z=xp(R,tt),j=xp(R,It);if(Z&&j&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var ee=_e.createRange();ee.setStart(Z.node,Z.offset),le.removeAllRanges(),tt>It?(le.addRange(ee),le.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),le.addRange(ee))}}}}for(_e=[],le=R;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ge=_e[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ec=!!zf,Hf=zf=null}finally{Ut=u,Q.p=o,I.T=a}}t.current=n,Mn=2}}function Og(){if(Mn===2){Mn=0;var t=Ca,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Ut;Ut|=4;try{fg(t,n.alternate,n)}finally{Ut=u,Q.p=o,I.T=a}}Mn=3}}function Pg(){if(Mn===4||Mn===3){Mn=0,et();var t=Ca,n=Jr,a=$r,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Jr=Ca=null,Bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(wa=null),Nt(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot($,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Q.p,Q.p=2,I.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];h(R.value,{componentStack:R.stack})}}finally{I.T=n,Q.p=u}}($r&3)!==0&&Vl(),Di(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Tf?mo++:(mo=0,Tf=t):mo=0,go(0)}}function Bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function Vl(t){return Lg(),Og(),Pg(),Ig()}function Ig(){if(Mn!==5)return!1;var t=Ca,n=Ef;Ef=0;var a=Nt($r),o=I.T,u=Q.p;try{Q.p=32>a?32:a,I.T=null,a=bf,bf=null;var h=Ca,E=$r;if(Mn=0,Jr=Ca=null,$r=0,(Ut&6)!==0)throw Error(r(331));var R=Ut;if(Ut|=4,yg(h.current),vg(h,h.current,E,a),Ut=R,go(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot($,h)}catch{}return!0}finally{Q.p=u,I.T=o,Bg(t,n)}}function Fg(t,n,a){n=ei(a,n),n=nf(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(Fe(t,2),Di(t))}function Ht(t,n,a){if(t.tag===3)Fg(t,t,a);else for(;n!==null;){if(n.tag===3){Fg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=ei(a,t),a=Vm(2),o=xa(n,a,2),o!==null&&(km(a,o,n,t),Fe(o,2),Di(o));break}}n=n.return}}function Cf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Xx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(xf=!0,u.add(a),t=Kx.bind(null,t,n,a),n.then(t,t))}function Kx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(Et&a)===a&&($t===4||$t===3&&(Et&62914560)===Et&&300>Ie()-Mf?(Ut&2)===0&&es(t,0):yf|=a,Qr===Et&&(Qr=0)),Di(t)}function zg(t,n){n===0&&(n=Re()),t=Br(t,n),t!==null&&(Fe(t,n),Di(t))}function Qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),zg(t,a)}function Jx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),zg(t,a)}function $x(t,n){return H(t,n)}var kl=null,ns=null,Df=!1,jl=!1,Nf=!1,ur=0;function Di(t){t!==ns&&t.next===null&&(ns===null?kl=ns=t:ns=ns.next=t),jl=!0,Df||(Df=!0,ty())}function go(t,n){if(!Nf&&jl){Nf=!0;do for(var a=!1,o=kl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var E=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ce(42|t)+1)-1,h&=u&~(E&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,kg(o,h))}else h=Et,h=We(o,o===kt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ne(o,h)||(a=!0,kg(o,h));o=o.next}while(a);Nf=!1}}function ey(){Hg()}function Hg(){jl=Df=!1;var t=0;ur!==0&&(cy()&&(t=ur),ur=0);for(var n=Ie(),a=null,o=kl;o!==null;){var u=o.next,h=Gg(o,n);h===0?(o.next=null,a===null?kl=u:a.next=u,u===null&&(ns=a)):(a=o,(t!==0||(h&3)!==0)&&(jl=!0)),o=u}go(t)}function Gg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Ce(h),R=1<<E,z=u[E];z===-1?((R&a)===0||(R&o)!==0)&&(u[E]=lt(R,n)):z<=n&&(t.expiredLanes|=R),h&=~R}if(n=kt,a=Et,a=We(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Dt(o),Nt(a)){case 2:case 8:a=ot;break;case 32:a=Gt;break;case 268435456:a=U;break;default:a=Gt}return o=Vg.bind(null,t),a=H(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function Vg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var o=Et;return o=We(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(bg(t,o,n),Gg(t,Ie()),t.callbackNode!=null&&t.callbackNode===a?Vg.bind(null,t):null)}function kg(t,n){if(Vl())return null;bg(t,n,!0)}function ty(){fy(function(){(Ut&6)!==0?H(Ve,ey):Hg()})}function Uf(){return ur===0&&(ur=X()),ur}function jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tl(""+t)}function Xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ny(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=jg((u[Kt]||null).action),E=o.submitter;E&&(n=(n=E[Kt]||null)?jg(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var R=new rl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var z=E?Xg(u,E):new FormData(u);Qu(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(R.preventDefault(),z=E?Xg(u,E):new FormData(u),Qu(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var Lf=0;Lf<gu.length;Lf++){var Of=gu[Lf],iy=Of.toLowerCase(),ay=Of[0].toUpperCase()+Of.slice(1);hi(iy,"on"+ay)}hi(bp,"onAnimationEnd"),hi(Tp,"onAnimationIteration"),hi(Ap,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Sx,"onTransitionRun"),hi(Mx,"onTransitionStart"),hi(Ex,"onTransitionCancel"),hi(Rp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Wg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],z=R.instance,ie=R.currentTarget;if(R=R.listener,z!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ie;try{h(u)}catch(me){Nl(me)}u.currentTarget=null,h=z}else for(E=0;E<o.length;E++){if(R=o[E],z=R.instance,ie=R.currentTarget,R=R.listener,z!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ie;try{h(u)}catch(me){Nl(me)}u.currentTarget=null,h=z}}}}function yt(t,n){var a=n[Ar];a===void 0&&(a=n[Ar]=new Set);var o=t+"__bubble";a.has(o)||(qg(n,t,2,!1),a.add(o))}function Pf(t,n,a){var o=0;n&&(o|=4),qg(a,t,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[Xl]){t[Xl]=!0,$o.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Pf("selectionchange",!1,n))}}function qg(t,n,a,o){switch(vv(n)){case 2:var u=Uy;break;case 8:u=Ly;break;default:u=Kf}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function If(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=Bi(R),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){o=h=E;continue e}R=R.parentNode}}o=o.return}ep(function(){var ie=h,me=tu(a),_e=[];e:{var se=wp.get(t);if(se!==void 0){var le=rl,at=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":le=$_;break;case"focusin":at="focus",le=ou;break;case"focusout":at="blur",le=ou;break;case"beforeblur":case"afterblur":le=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=nx;break;case bp:case Tp:case Ap:le=j_;break;case Rp:le=ax;break;case"scroll":case"scrollend":le=z_;break;case"wheel":le=sx;break;case"copy":case"cut":case"paste":le=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=rp;break;case"toggle":case"beforetoggle":le=lx}var tt=(n&4)!==0,It=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?se!==null?se+"Capture":null:se;tt=[];for(var j=ie,ee;j!==null;){var ge=j;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||Z===null||(ge=Ps(j,Z),ge!=null&&tt.push(_o(j,ge,ee))),It)break;j=j.return}0<tt.length&&(se=new le(se,at,null,a,me),_e.push({event:se,listeners:tt}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",se&&a!==eu&&(at=a.relatedTarget||a.fromElement)&&(Bi(at)||at[bi]))break e;if((le||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,le?(at=a.relatedTarget||a.toElement,le=ie,at=at?Bi(at):null,at!==null&&(It=c(at),tt=at.tag,at!==It||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(le=null,at=ie),le!==at)){if(tt=ip,ge="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(tt=rp,ge="onPointerLeave",Z="onPointerEnter",j="pointer"),It=le==null?se:Ya(le),ee=at==null?se:Ya(at),se=new tt(ge,j+"leave",le,a,me),se.target=It,se.relatedTarget=ee,ge=null,Bi(me)===ie&&(tt=new tt(Z,j+"enter",at,a,me),tt.target=ee,tt.relatedTarget=It,ge=tt),It=ge,le&&at)t:{for(tt=le,Z=at,j=0,ee=tt;ee;ee=is(ee))j++;for(ee=0,ge=Z;ge;ge=is(ge))ee++;for(;0<j-ee;)tt=is(tt),j--;for(;0<ee-j;)Z=is(Z),ee--;for(;j--;){if(tt===Z||Z!==null&&tt===Z.alternate)break t;tt=is(tt),Z=is(Z)}tt=null}else tt=null;le!==null&&Yg(_e,se,le,tt,!1),at!==null&&It!==null&&Yg(_e,It,at,tt,!0)}}e:{if(se=ie?Ya(ie):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var ke=hp;else if(fp(se))if(pp)ke=_x;else{ke=gx;var vt=mx}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&$c(ie.elementType)&&(ke=hp):ke=vx;if(ke&&(ke=ke(t,ie))){dp(_e,ke,a,me);break e}vt&&vt(t,se,ie),t==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Tn(se,"number",se.value)}switch(vt=ie?Ya(ie):window,t){case"focusin":(fp(vt)||vt.contentEditable==="true")&&(Lr=vt,hu=ie,ks=null);break;case"focusout":ks=hu=Lr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Mp(_e,a,me);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Mp(_e,a,me)}var Ze;if(cu)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Ur?cp(t,a)&&(it="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(sp&&a.locale!=="ko"&&(Ur||it!=="onCompositionStart"?it==="onCompositionEnd"&&Ur&&(Ze=tp()):(ma=me,au="value"in ma?ma.value:ma.textContent,Ur=!0)),vt=Wl(ie,it),0<vt.length&&(it=new ap(it,t,null,a,me),_e.push({event:it,listeners:vt}),Ze?it.data=Ze:(Ze=up(a),Ze!==null&&(it.data=Ze)))),(Ze=ux?fx(t,a):dx(t,a))&&(it=Wl(ie,"onBeforeInput"),0<it.length&&(vt=new ap("onBeforeInput","beforeinput",null,a,me),_e.push({event:vt,listeners:it}),vt.data=Ze)),ny(_e,t,ie,a,me)}Wg(_e,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ps(t,a),u!=null&&o.unshift(_o(t,u,h)),u=Ps(t,n),u!=null&&o.push(_o(t,u,h))),t.tag===3)return o;t=t.return}return[]}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,n,a,o,u){for(var h=n._reactName,E=[];a!==null&&a!==o;){var R=a,z=R.alternate,ie=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||ie===null||(z=ie,u?(ie=Ps(a,h),ie!=null&&E.unshift(_o(a,ie,z))):u||(ie=Ps(a,h),ie!=null&&E.push(_o(a,ie,z)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var sy=/\r\n?/g,oy=/\u0000|\uFFFD/g;function Zg(t){return(typeof t=="string"?t:""+t).replace(sy,`
`).replace(oy,"")}function Kg(t,n){return n=Zg(n),Zg(t)===n}function ql(){}function Bt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(t,""+o);break;case"className":He(t,"class",o);break;case"tabIndex":He(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,a,o);break;case"style":Jh(t,o,h);break;case"data":if(n!=="object"){He(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",u.name,u,null),Bt(t,n,"formEncType",u.formEncType,u,null),Bt(t,n,"formMethod",u.formMethod,u,null),Bt(t,n,"formTarget",u.formTarget,u,null)):(Bt(t,n,"encType",u.encType,u,null),Bt(t,n,"method",u.method,u,null),Bt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ql);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=tl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I_.get(a)||a,Le(t,a,o))}}function Ff(t,n,a,o,u,h){switch(a){case"style":Jh(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&Pn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!el.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[Kt]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var E=a[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,h,E,a,null)}}u&&Bt(t,n,"srcSet",a.srcSet,a,null),o&&Bt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=h=E=u=null,z=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":E=me;break;case"checked":z=me;break;case"defaultChecked":ie=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Bt(t,n,o,me,a,null)}}Nn(t,h,R,z,ie,E,u,!1),_t(t);return;case"select":yt("invalid",t),o=E=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Bt(t,n,u,R,a,null)}n=h,a=E,t.multiple=!!o,n!=null?Qt(t,!!o,n,!1):a!=null&&Qt(t,!!o,a,!0);return;case"textarea":yt("invalid",t),h=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Bt(t,n,E,R,a,null)}Cr(t,o,u,h),_t(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,n,z,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<vo.length;o++)yt(vo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,ie,o,a,null)}return;default:if($c(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Ff(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Bt(t,n,R,o,a,null))}function ly(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,R=null,z=null,ie=null,me=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":z=_e;default:o.hasOwnProperty(le)||Bt(t,n,le,null,o,_e)}}for(var se in o){var le=o[se];if(_e=a[se],o.hasOwnProperty(se)&&(le!=null||_e!=null))switch(se){case"type":h=le;break;case"name":u=le;break;case"checked":ie=le;break;case"defaultChecked":me=le;break;case"value":E=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==_e&&Bt(t,n,se,le,o,_e)}}zt(t,E,R,z,ie,me,h,u);return;case"select":le=E=R=se=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":le=z;default:o.hasOwnProperty(h)||Bt(t,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":se=h;break;case"defaultValue":R=h;break;case"multiple":E=h;default:h!==z&&Bt(t,n,u,h,o,z)}n=R,a=E,o=le,se!=null?Qt(t,!!a,se,!1):!!o!=!!a&&(n!=null?Qt(t,!!a,n,!0):Qt(t,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Bt(t,n,R,null,o,u)}for(E in o)if(u=o[E],h=a[E],o.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":se=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Bt(t,n,E,u,o,h)}yn(t,se,le);return;case"option":for(var at in a)if(se=a[at],a.hasOwnProperty(at)&&se!=null&&!o.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Bt(t,n,at,null,o,se)}for(z in o)if(se=o[z],le=a[z],o.hasOwnProperty(z)&&se!==le&&(se!=null||le!=null))switch(z){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Bt(t,n,z,se,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!o.hasOwnProperty(tt)&&Bt(t,n,tt,null,o,se);for(ie in o)if(se=o[ie],le=a[ie],o.hasOwnProperty(ie)&&se!==le&&(se!=null||le!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:Bt(t,n,ie,se,o,le)}return;default:if($c(n)){for(var It in a)se=a[It],a.hasOwnProperty(It)&&se!==void 0&&!o.hasOwnProperty(It)&&Ff(t,n,It,void 0,o,se);for(me in o)se=o[me],le=a[me],!o.hasOwnProperty(me)||se===le||se===void 0&&le===void 0||Ff(t,n,me,se,o,le);return}}for(var Z in a)se=a[Z],a.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&Bt(t,n,Z,null,o,se);for(_e in o)se=o[_e],le=a[_e],!o.hasOwnProperty(_e)||se===le||se==null&&le==null||Bt(t,n,_e,se,o,le)}var zf=null,Hf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(dy)}:$g;function dy(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function tv(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&xo(E.documentElement),a&2&&xo(E.body),a&4)for(a=E.head,xo(a),E=a.firstChild;E;){var R=E.nextSibling,z=E.nodeName;E[Ti]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){t.removeChild(h),Ro(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Ro(n)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ti])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function py(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function my(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Xf=null;function nv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function iv(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wr(t)}var si=new Map,av=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Q.d;Q.d={f:gy,r:vy,D:_y,C:xy,L:yy,m:Sy,X:Ey,S:My,M:by};function gy(){var t=Ki.f(),n=Hl();return t||n}function vy(t){var n=ha(t);n!==null&&n.tag===5&&n.type==="form"?bm(n):Ki.r(t)}var as=typeof document>"u"?null:document;function rv(t,n,a){var o=as;if(o&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),av.has(u)||(av.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",t),an(n),o.head.appendChild(n)))}}function _y(t){Ki.D(t),rv("dns-prefetch",t,null)}function xy(t,n){Ki.C(t,n),rv("preconnect",t,n)}function yy(t,n,a){Ki.L(t,n,a);var o=as;if(o&&t&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(t)+'"]';var h=u;switch(n){case"style":h=rs(t);break;case"script":h=ss(t)}si.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(yo(h))||n==="script"&&o.querySelector(So(h))||(n=o.createElement("link"),En(n,"link",t),an(n),o.head.appendChild(n)))}}function Sy(t,n){Ki.m(t,n);var a=as;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ss(t)}if(!si.has(h)&&(t=g({rel:"modulepreload",href:t},n),si.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(h)))return}o=a.createElement("link"),En(o,"link",t),an(o),a.head.appendChild(o)}}}function My(t,n,a){Ki.S(t,n,a);var o=as;if(o&&t){var u=pa(o).hoistableStyles,h=rs(t);n=n||"default";var E=u.get(h);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(yo(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(h))&&Wf(t,a);var z=E=o.createElement("link");an(z),En(z,"link",t),z._p=new Promise(function(ie,me){z.onload=ie,z.onerror=me}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kl(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(h,E)}}}function Ey(t,n){Ki.X(t,n);var a=as;if(a&&t){var o=pa(a).hoistableScripts,u=ss(t),h=o.get(u);h||(h=a.querySelector(So(u)),h||(t=g({src:t,async:!0},n),(n=si.get(u))&&qf(t,n),h=a.createElement("script"),an(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function by(t,n){Ki.M(t,n);var a=as;if(a&&t){var o=pa(a).hoistableScripts,u=ss(t),h=o.get(u);h||(h=a.querySelector(So(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=si.get(u))&&qf(t,n),h=a.createElement("script"),an(h),En(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function sv(t,n,a,o){var u=(u=ae.current)?Zl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rs(a.href);var h=pa(u).hoistableStyles,E=h.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=u.querySelector(yo(t)))&&!h._p&&(E.instance=h,E.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),h||Ty(u,t,a,E.state))),n&&o===null)throw Error(r(528,""));return E}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rs(t){return'href="'+mn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function ov(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ty(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),an(n),t.head.appendChild(n))}function ss(t){return'[src="'+mn(t)+'"]'}function So(t){return"script[async]"+t}function lv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,an(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),an(o),En(o,"style",u),Kl(o,a.precedence,t),n.instance=o;case"stylesheet":u=rs(a.href);var h=t.querySelector(yo(u));if(h)return n.state.loading|=4,n.instance=h,an(h),h;o=ov(a),(u=si.get(u))&&Wf(o,u),h=(t.ownerDocument||t).createElement("link"),an(h);var E=h;return E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),En(h,"link",o),n.state.loading|=4,Kl(h,a.precedence,t),n.instance=h;case"script":return h=ss(a.src),(u=t.querySelector(So(h)))?(n.instance=u,an(u),u):(o=a,(u=si.get(h))&&(o=g({},a),qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),an(u),En(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,t));return n.instance}function Kl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function cv(t,n,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ti]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var R=o.get(E);R?R.push(h):o.set(E,[h])}}return o}function uv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ay(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Mo=null;function Ry(){}function wy(t,n,a){if(Mo===null)throw Error(r(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=rs(a.href),h=t.querySelector(yo(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Jl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,an(h);return}h=t.ownerDocument||t,a=ov(a),(u=si.get(u))&&Wf(a,u),h=h.createElement("link"),an(h);var E=h;E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),En(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Jl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Cy(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&Yf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Yf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function Yf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(Dy,t),$l=null,Jl.call(t))}function Dy(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var o=a.get(null);else{a=new Map,$l.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),h=a.get(E)||o,h===o&&a.set(null,u),a.set(E,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Ny(t,n,a,o,u,h,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function dv(t,n,a,o,u,h,E,R,z,ie,me,_e){return t=new Ny(t,n,a,E,R,z,ie,_e),n=1,h===!0&&(n|=24),h=Xn(3,null,null,n),t.current=h,h.stateNode=t,n=wu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Uu(h),t}function hv(t){return t?(t=Ir,t):Ir}function pv(t,n,a,o,u,h){u=hv(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=xa(t,o,n),a!==null&&(Kn(a,t,n),Js(a,t,n))}function mv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){mv(t,n),(t=t.alternate)&&mv(t,n)}function gv(t){if(t.tag===13){var n=Br(t,67108864);n!==null&&Kn(n,t,67108864),Zf(t,67108864)}}var ec=!0;function Uy(t,n,a,o){var u=I.T;I.T=null;var h=Q.p;try{Q.p=2,Kf(t,n,a,o)}finally{Q.p=h,I.T=u}}function Ly(t,n,a,o){var u=I.T;I.T=null;var h=Q.p;try{Q.p=8,Kf(t,n,a,o)}finally{Q.p=h,I.T=u}}function Kf(t,n,a,o){if(ec){var u=Qf(o);if(u===null)If(t,n,o,tc,a),_v(t,o);else if(Py(u,t,n,a,o))o.stopPropagation();else if(_v(t,o),n&4&&-1<Oy.indexOf(t)){for(;u!==null;){var h=ha(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Qe(h.pendingLanes);if(E!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var z=1<<31-Ce(E);R.entanglements[1]|=z,E&=~z}Di(h),(Ut&6)===0&&(Fl=Ie()+500,go(0))}}break;case 13:R=Br(h,2),R!==null&&Kn(R,h,2),Hl(),Zf(h,2)}if(h=Qf(o),h===null&&If(t,n,o,tc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else If(t,n,o,null,a)}}function Qf(t){return t=tu(t),Jf(t)}var tc=null;function Jf(t){if(tc=null,t=Bi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function vv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case Ve:return 2;case ot:return 8;case Gt:case Vt:return 32;case U:return 268435456;default:return 32}default:return 32}}var $f=!1,Ua=null,La=null,Oa=null,bo=new Map,To=new Map,Pa=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ha(n),n!==null&&gv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Py(t,n,a,o,u){switch(n){case"focusin":return Ua=Ao(Ua,t,n,a,o,u),!0;case"dragenter":return La=Ao(La,t,n,a,o,u),!0;case"mouseover":return Oa=Ao(Oa,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return bo.set(h,Ao(bo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,To.set(h,Ao(To.get(h)||null,t,n,a,o,u)),!0}return!1}function xv(t){var n=Bi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,fi(t.priority,function(){if(a.tag===13){var o=Zn();o=rt(o);var u=Br(a,o);u!==null&&Kn(u,a,o),Zf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=ha(a),n!==null&&gv(n),t.blockedOn=a,!1;n.shift()}return!0}function yv(t,n,a){nc(t)&&a.delete(n)}function By(){$f=!1,Ua!==null&&nc(Ua)&&(Ua=null),La!==null&&nc(La)&&(La=null),Oa!==null&&nc(Oa)&&(Oa=null),bo.forEach(yv),To.forEach(yv)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,By)))}var ac=null;function Sv(t){ac!==t&&(ac=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var h=ha(a);h!==null&&(t.splice(n,3),n-=3,Qu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ro(t){function n(z){return ic(z,t)}Ua!==null&&ic(Ua,t),La!==null&&ic(La,t),Oa!==null&&ic(Oa,t),bo.forEach(n),To.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)xv(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],E=u[Kt]||null;if(typeof h=="function")E||Sv(a);else if(E){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[Kt]||null)R=E.formAction;else if(Jf(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Sv(a)}}}function ed(t){this._internalRoot=t}rc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();pv(a,o,t,n,null,null)},rc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pv(t.current,2,null,t,null,null),Hl(),n[bi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&xv(t)}};var Mv=e.version;if(Mv!=="19.1.1")throw Error(r(527,Mv,"19.1.1"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Iy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{$=sc.inject(Iy),de=sc}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Fm,h=zm,E=Hm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=dv(t,1,!1,null,null,a,o,u,h,E,R,null),t[bi]=n.current,Bf(t),new ed(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",h=Fm,E=zm,R=Hm,z=null,ie=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ie=a.formState)),n=dv(t,1,!0,n,a??null,o,u,h,E,R,z,ie),n.context=hv(null),a=n.current,o=Zn(),o=rt(o),u=_a(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,Fe(n,a),Di(n),t[bi]=n.current,Bf(t),new rc(n)},Co.version="19.1.1",Co}var Uv;function Yy(){if(Uv)return id.exports;Uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),id.exports=qy(),id.exports}var Zy=Yy();const Ky=F0(Zy);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lv="popstate";function Qy(s={}){function e(l,c){let{pathname:f="/",search:d="",hash:m=""}=Tr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Gd("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof c=="string"?c:Fo(c))}function r(l,c){Ei(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return $y(e,i,r,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ei(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Jy(){return Math.random().toString(36).substring(2,10)}function Ov(s,e){return{usr:s.state,key:s.key,idx:e}}function Gd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Tr(e):e,state:i,key:e&&e.key||r||Jy()}}function Fo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Tr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function $y(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let S=g(),v=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:v})}function x(S,v){d="PUSH";let L=Gd(A.location,S,v);i&&i(L,S),p=g()+1;let P=Ov(L,p),N=A.createHref(L);try{f.pushState(P,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}c&&m&&m({action:d,location:A.location,delta:1})}function M(S,v){d="REPLACE";let L=Gd(A.location,S,v);i&&i(L,S),p=g();let P=Ov(L,p),N=A.createHref(L);f.replaceState(P,"",N),c&&m&&m({action:d,location:A.location,delta:0})}function T(S){return eS(S)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Lv,_),m=S,()=>{l.removeEventListener(Lv,_),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let v=T(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(S){return f.go(S)}};return A}function eS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Fo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function z0(s,e,i="/"){return tS(s,e,i,!1)}function tS(s,e,i,r){let l=typeof e=="string"?Tr(e):e,c=oa(l.pathname||"/",i);if(c==null)return null;let f=H0(s);nS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=hS(c);d=fS(f[m],p,r)}return d}function H0(s,e=[],i=[],r="",l=!1){let c=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Yt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=aa([r,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Yt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),H0(f.children,e,x,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:cS(_,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of G0(f.path))c(f,d,!0,m)}),e}function G0(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=G0(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function nS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:uS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var iS=/^:[\w-]+$/,aS=3,rS=2,sS=1,oS=10,lS=-2,Pv=s=>s==="*";function cS(s,e){let i=s.split("/"),r=i.length;return i.some(Pv)&&(r+=lS),e&&(r+=rS),i.filter(l=>!Pv(l)).reduce((l,c)=>l+(iS.test(c)?aS:c===""?sS:oS),r)}function uS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function fS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=Gc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=Gc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:aa([c,_.pathname]),pathnameBase:vS(aa([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=aa([c,_.pathnameBase]))}return f}function Gc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=dS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let T=d[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const M=d[x];return _&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function dS(s,e=!1,i=!0){Ei(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function hS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ei(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function oa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function pS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Tr(s):s;return{pathname:i?i.startsWith("/")?i:mS(i,e):e,search:_S(r),hash:xS(l)}}function mS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function od(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function V0(s){let e=gS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function k0(s,e,i,r=!1){let l;typeof s=="string"?l=Tr(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),od("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),od("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),od("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?e[_]:"/"}let m=pS(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var aa=s=>s.join("/").replace(/\/\/+/g,"/"),vS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,xS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function yS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var j0=["POST","PUT","PATCH","DELETE"];new Set(j0);var SS=["GET",...j0];new Set(SS);var Cs=te.createContext(null);Cs.displayName="DataRouter";var Yc=te.createContext(null);Yc.displayName="DataRouterState";te.createContext(!1);var X0=te.createContext({isTransitioning:!1});X0.displayName="ViewTransition";var MS=te.createContext(new Map);MS.displayName="Fetchers";var ES=te.createContext(null);ES.displayName="Await";var Oi=te.createContext(null);Oi.displayName="Navigation";var jo=te.createContext(null);jo.displayName="Location";var Pi=te.createContext({outlet:null,matches:[],isDataRoute:!1});Pi.displayName="Route";var Bh=te.createContext(null);Bh.displayName="RouteError";function bS(s,{relative:e}={}){Yt(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=te.useContext(Oi),{hash:l,pathname:c,search:f}=Wo(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:aa([i,c])),r.createHref({pathname:d,search:f,hash:l})}function Xo(){return te.useContext(jo)!=null}function fa(){return Yt(Xo(),"useLocation() may be used only in the context of a <Router> component."),te.useContext(jo).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q0(s){te.useContext(Oi).static||te.useLayoutEffect(s)}function Ih(){let{isDataRoute:s}=te.useContext(Pi);return s?IS():TS()}function TS(){Yt(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let s=te.useContext(Cs),{basename:e,navigator:i}=te.useContext(Oi),{matches:r}=te.useContext(Pi),{pathname:l}=fa(),c=JSON.stringify(V0(r)),f=te.useRef(!1);return q0(()=>{f.current=!0}),te.useCallback((m,p={})=>{if(Ei(f.current,W0),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=k0(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:aa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}te.createContext(null);function Y0(){let{matches:s}=te.useContext(Pi),e=s[s.length-1];return e?e.params:{}}function Wo(s,{relative:e}={}){let{matches:i}=te.useContext(Pi),{pathname:r}=fa(),l=JSON.stringify(V0(i));return te.useMemo(()=>k0(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function AS(s,e){return Z0(s,e)}function Z0(s,e,i,r,l){Yt(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=te.useContext(Oi),{matches:f}=te.useContext(Pi),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let L=_&&_.path||"";K0(p,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=fa(),M;if(e){let L=typeof e=="string"?Tr(e):e;Yt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=x;let T=M.pathname||"/",A=T;if(g!=="/"){let L=g.replace(/^\//,"").split("/");A="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=z0(s,{pathname:A});Ei(_||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ei(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=NS(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),f,i,r,l);return e&&v?te.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function RS(){let s=BS(),e=yS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=te.createElement(te.Fragment,null,te.createElement("p",null,"💿 Hey developer 👋"),te.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",te.createElement("code",{style:c},"ErrorBoundary")," or"," ",te.createElement("code",{style:c},"errorElement")," prop on your route.")),te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),i?te.createElement("pre",{style:l},i):null,f)}var wS=te.createElement(RS,null),CS=class extends te.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?te.createElement(Pi.Provider,{value:this.props.routeContext},te.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DS({routeContext:s,match:e,children:i}){let r=te.useContext(Cs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),te.createElement(Pi.Provider,{value:s},i)}function NS(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let p=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Yt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let g=c[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:_,errors:x}=i,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||M){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,g,_)=>{let x,M=!1,T=null,A=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||wS,d&&(m<0&&_===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,A=null):m===_&&(M=!0,A=g.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,_+1)),v=()=>{let L;return x?L=T:M?L=A:g.route.Component?L=te.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,te.createElement(DS,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?te.createElement(CS,{location:i.location,revalidation:i.revalidation,component:T,error:x,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):v()},null)}function Fh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function US(s){let e=te.useContext(Cs);return Yt(e,Fh(s)),e}function LS(s){let e=te.useContext(Yc);return Yt(e,Fh(s)),e}function OS(s){let e=te.useContext(Pi);return Yt(e,Fh(s)),e}function zh(s){let e=OS(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function PS(){return zh("useRouteId")}function BS(){let s=te.useContext(Bh),e=LS("useRouteError"),i=zh("useRouteError");return s!==void 0?s:e.errors?.[i]}function IS(){let{router:s}=US("useNavigate"),e=zh("useNavigate"),i=te.useRef(!1);return q0(()=>{i.current=!0}),te.useCallback(async(l,c={})=>{Ei(i.current,W0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Bv={};function K0(s,e,i){!e&&!Bv[s]&&(Bv[s]=!0,Ei(!1,i))}te.memo(FS);function FS({routes:s,future:e,state:i,unstable_onError:r}){return Z0(s,void 0,i,r,e)}function vr(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Yt(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=te.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Tr(i));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:x="default"}=i,M=te.useMemo(()=>{let T=oa(m,f);return T==null?null:{location:{pathname:T,search:p,hash:g,state:_,key:x},navigationType:r}},[f,m,p,g,_,x,r]);return Ei(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:te.createElement(Oi.Provider,{value:d},te.createElement(jo.Provider,{children:e,value:M}))}function HS({children:s,location:e}){return AS(Vd(s),e)}function Vd(s,e=[]){let i=[];return te.Children.forEach(s,(r,l)=>{if(!te.isValidElement(r))return;let c=[...e,l];if(r.type===te.Fragment){i.push.apply(i,Vd(r.props.children,c));return}Yt(r.type===vr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Vd(r.props.children,c)),i.push(f)}),i}var Oc="get",Pc="application/x-www-form-urlencoded";function Zc(s){return s!=null&&typeof s.tagName=="string"}function GS(s){return Zc(s)&&s.tagName.toLowerCase()==="button"}function VS(s){return Zc(s)&&s.tagName.toLowerCase()==="form"}function kS(s){return Zc(s)&&s.tagName.toLowerCase()==="input"}function jS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function XS(s,e){return s.button===0&&(!e||e==="_self")&&!jS(s)}var oc=null;function WS(){if(oc===null)try{new FormData(document.createElement("form"),0),oc=!1}catch{oc=!0}return oc}var qS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ld(s){return s!=null&&!qS.has(s)?(Ei(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pc}"`),null):s}function YS(s,e){let i,r,l,c,f;if(VS(s)){let d=s.getAttribute("action");r=d?oa(d,e):null,i=s.getAttribute("method")||Oc,l=ld(s.getAttribute("enctype"))||Pc,c=new FormData(s)}else if(GS(s)||kS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?oa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Oc,l=ld(s.getAttribute("formenctype"))||ld(d.getAttribute("enctype"))||Pc,c=new FormData(d,s),!WS()){let{name:p,type:g,value:_}=s;if(g==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,_)}}else{if(Zc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Oc,r=null,l=Pc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ZS(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&oa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function KS(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function JS(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await KS(c,i);return f.links?f.links():[]}return[]}));return nM(r.flat(1).filter(QS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Iv(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function $S(s,e,{includeHydrateFallback:i}={}){return eM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function eM(s){return[...new Set(s)]}function tM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function nM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(tM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Q0(){let s=te.useContext(Cs);return Hh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function iM(){let s=te.useContext(Yc);return Hh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Gh=te.createContext(void 0);Gh.displayName="FrameworkContext";function J0(){let s=te.useContext(Gh);return Hh(s,"You must render this element inside a <HydratedRouter> element"),s}function aM(s,e){let i=te.useContext(Gh),[r,l]=te.useState(!1),[c,f]=te.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,x=te.useRef(null);te.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=v=>{v.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),te.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Do(d,M),onBlur:Do(m,T),onMouseEnter:Do(p,M),onMouseLeave:Do(g,T),onTouchStart:Do(_,M)}]:[!1,x,{}]}function Do(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function rM({page:s,...e}){let{router:i}=Q0(),r=te.useMemo(()=>z0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?te.createElement(oM,{page:s,matches:r,...e}):null}function sM(s){let{manifest:e,routeModules:i}=J0(),[r,l]=te.useState([]);return te.useEffect(()=>{let c=!1;return JS(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function oM({page:s,matches:e,...i}){let r=fa(),{manifest:l,routeModules:c}=J0(),{basename:f}=Q0(),{loaderData:d,matches:m}=iM(),p=te.useMemo(()=>Iv(s,e,m,l,r,"data"),[s,e,m,l,r]),g=te.useMemo(()=>Iv(s,e,m,l,r,"assets"),[s,e,m,l,r]),_=te.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,A=!1;if(e.forEach(v=>{let L=l.routes[v.route.id];!L||!L.hasLoader||(!p.some(P=>P.route.id===v.route.id)&&v.route.id in d&&c[v.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:T.add(v.route.id))}),T.size===0)return[];let S=ZS(s,f,"data");return A&&T.size>0&&S.searchParams.set("_routes",e.filter(v=>T.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,p,e,s,c]),x=te.useMemo(()=>$S(g,l),[g,l]),M=sM(g);return te.createElement(te.Fragment,null,_.map(T=>te.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),x.map(T=>te.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),M.map(({key:T,link:A})=>te.createElement("link",{key:T,nonce:i.nonce,...A})))}function lM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$0&&(window.__reactRouterVersion="7.8.2")}catch{}function cM({basename:s,children:e,window:i}){let r=te.useRef();r.current==null&&(r.current=Qy({window:i,v5Compat:!0}));let l=r.current,[c,f]=te.useState({action:l.action,location:l.location}),d=te.useCallback(m=>{te.startTransition(()=>f(m))},[f]);return te.useLayoutEffect(()=>l.listen(d),[l,d]),te.createElement(zS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var e_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ds=te.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:_,...x},M){let{basename:T}=te.useContext(Oi),A=typeof p=="string"&&e_.test(p),S,v=!1;if(typeof p=="string"&&A&&(S=p,$0))try{let D=new URL(window.location.href),b=p.startsWith("//")?new URL(D.protocol+p):new URL(p),B=oa(b.pathname,T);b.origin===D.origin&&B!=null?p=B+b.search+b.hash:v=!0}catch{Ei(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=bS(p,{relative:l}),[P,N,F]=aM(r,x),V=dM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:_});function G(D){e&&e(D),D.defaultPrevented||V(D)}let K=te.createElement("a",{...x,...F,href:S||L,onClick:v||c?e:G,ref:lM(M,N),target:m,"data-discover":!A&&i==="render"?"true":void 0});return P&&!A?te.createElement(te.Fragment,null,K,te.createElement(rM,{page:L})):K});Ds.displayName="Link";var kd=te.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},g){let _=Wo(f,{relative:p.relative}),x=fa(),M=te.useContext(Yc),{navigator:T,basename:A}=te.useContext(Oi),S=M!=null&&vM(_)&&d===!0,v=T.encodeLocation?T.encodeLocation(_).pathname:_.pathname,L=x.pathname,P=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&A&&(P=oa(P,A)||P);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=L===v||!l&&L.startsWith(v)&&L.charAt(N)==="/",V=P!=null&&(P===v||!l&&P.startsWith(v)&&P.charAt(v.length)==="/"),G={isActive:F,isPending:V,isTransitioning:S},K=F?e:void 0,D;typeof r=="function"?D=r(G):D=[r,F?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let b=typeof c=="function"?c(G):c;return te.createElement(Ds,{...p,"aria-current":K,className:D,ref:g,style:b,to:f,viewTransition:d},typeof m=="function"?m(G):m)});kd.displayName="NavLink";var uM=te.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Oc,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...x},M)=>{let T=mM(),A=gM(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&e_.test(d),L=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let N=P.nativeEvent.submitter,F=N?.getAttribute("formmethod")||f;T(N||P.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:_})};return te.createElement("form",{ref:M,method:S,action:A,onSubmit:r?m:L,...x,"data-discover":!v&&s==="render"?"true":void 0})});uM.displayName="Form";function fM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t_(s){let e=te.useContext(Cs);return Yt(e,fM(s)),e}function dM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=Ih(),m=fa(),p=Wo(s,{relative:c});return te.useCallback(g=>{if(XS(g,e)){g.preventDefault();let _=i!==void 0?i:Fo(m)===Fo(p);d(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,p,i,r,e,s,l,c,f])}var hM=0,pM=()=>`__${String(++hM)}__`;function mM(){let{router:s}=t_("useSubmit"),{basename:e}=te.useContext(Oi),i=PS();return te.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:m,body:p}=YS(r,e);if(l.navigate===!1){let g=l.fetcherKey||pM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function gM(s,{relative:e}={}){let{basename:i}=te.useContext(Oi),r=te.useContext(Pi);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Wo(s||".",{relative:e})},f=fa();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),Fo(c)}function vM(s,{relative:e}={}){let i=te.useContext(X0);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=t_("useViewTransitionState"),l=Wo(s,{relative:e});if(!i.isTransitioning)return!1;let c=oa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=oa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gc(l.pathname,f)!=null||Gc(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="180",_M=0,Fv=1,xM=2,n_=1,yM=2,na=3,Wa=0,Vn=1,ia=2,ja=0,Ms=1,jd=2,zv=3,Hv=4,SM=5,yr=100,MM=101,EM=102,bM=103,TM=104,AM=200,RM=201,wM=202,CM=203,Xd=204,Wd=205,DM=206,NM=207,UM=208,LM=209,OM=210,PM=211,BM=212,IM=213,FM=214,qd=0,Yd=1,Zd=2,bs=3,Kd=4,Qd=5,Jd=6,$d=7,i_=0,zM=1,HM=2,Xa=0,GM=1,VM=2,kM=3,jM=4,XM=5,WM=6,qM=7,a_=300,Ts=301,As=302,eh=303,th=304,Kc=306,nh=1e3,Si=1001,ih=1002,$n=1003,YM=1004,lc=1005,Gn=1006,cd=1007,Mr=1008,la=1009,r_=1010,s_=1011,zo=1012,kh=1013,br=1014,Ui=1015,Ns=1016,jh=1017,Xh=1018,Ho=1020,o_=35902,l_=35899,c_=1021,u_=1022,ci=1023,Go=1026,Vo=1027,f_=1028,Wh=1029,d_=1030,qh=1031,Yh=1033,Bc=33776,Ic=33777,Fc=33778,zc=33779,ah=35840,rh=35841,sh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,vh=37814,_h=37815,xh=37816,yh=37817,Sh=37818,Mh=37819,Eh=37820,bh=37821,Th=36492,Ah=36494,Rh=36495,wh=36283,Ch=36284,Dh=36285,Nh=36286,ZM=3200,KM=3201,QM=0,JM=1,ka="",li="srgb",Rs="srgb-linear",Vc="linear",Ft="srgb",os=7680,Gv=519,$M=512,eE=513,tE=514,h_=515,nE=516,iE=517,aE=518,rE=519,Vv=35044,kv="300 es",Li=2e3,kc=2001;class Us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Uh=180/Math.PI;function qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function sE(s,e){return(s%e+e)%e}function fd(s,e,i){return(1-i)*s+i*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const x=c[f+0],M=c[f+1],T=c[f+2],A=c[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(_!==A||m!==x||p!==M||g!==T){let S=1-d;const v=m*x+p*M+g*T+_*A,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const F=Math.sqrt(P),V=Math.atan2(F,v*L);S=Math.sin(S*V)/F,d=Math.sin(d*V)/F}const N=d*L;if(m=m*S+x*N,p=p*S+M*N,g=g*S+T*N,_=_*S+A*N,S===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return e[i]=d*T+g*_+m*M-p*x,e[i+1]=m*T+g*x+p*_-d*M,e[i+2]=p*T+g*M+d*x-m*_,e[i+3]=g*T-d*_-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),x=m(r/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"YZX":this._x=x*g*_+p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_-x*M*T;break;case"XZY":this._x=x*g*_-p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,i=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(jv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new ue,jv=new Yo;class dt{constructor(e,i,r,l,c,f,d,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p)}set(e,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],M=r[5],T=r[8],A=l[0],S=l[3],v=l[6],L=l[1],P=l[4],N=l[7],F=l[2],V=l[5],G=l[8];return c[0]=f*A+d*L+m*F,c[3]=f*S+d*P+m*V,c[6]=f*v+d*N+m*G,c[1]=p*A+g*L+_*F,c[4]=p*S+g*P+_*V,c[7]=p*v+g*N+_*G,c[2]=x*A+M*L+T*F,c[5]=x*S+M*P+T*V,c[8]=x*v+M*N+T*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*f-d*p,x=d*m-g*c,M=p*c-f*m,T=i*_+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(l*p-g*r)*A,e[2]=(d*r-l*f)*A,e[3]=x*A,e[4]=(g*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new dt;function p_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oE(){const s=jc("canvas");return s.style.display="block",s}const Xv={};function ko(s){s in Xv||(Xv[s]=!0,console.warn(s))}function lE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Wv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cE(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Rs]:{primaries:e,whitePoint:r,transfer:Vc,toXYZ:Wv,fromXYZ:qv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Wv,fromXYZ:qv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Rt=cE();function ra(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class uE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=jc("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ra(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fE=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(pd(l[f].image)):c.push(pd(l[f]))}else c=pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dE=0;const md=new ue;class On extends Us{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=Si,l=Si,c=Gn,f=Mr,d=ci,m=la,p=On.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=qo(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=a_;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],T=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,N=(M+1)/2,F=(v+1)/2,V=(g+x)/4,G=(_+A)/4,K=(T+S)/4;return P>N&&P>F?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=V/r,c=G/r):N>F?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=V/l,c=K/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=G/c,l=K/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-T)*(S-T)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(_-A)/L,this.z=(x-g)/L,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hE extends Us{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new On(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qa extends hE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class m_ extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pE extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),uc.subVectors(this.max,Uo),cs.subVectors(e.a,Uo),us.subVectors(e.b,Uo),fs.subVectors(e.c,Uo),Ia.subVectors(us,cs),Fa.subVectors(fs,us),fr.subVectors(cs,fs);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-fr.z,fr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,fr.z,0,-fr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-fr.y,fr.x,0];return!gd(i,cs,us,fs,uc)||(i=[1,0,0,0,1,0,0,0,1],!gd(i,cs,us,fs,uc))?!1:(fc.crossVectors(Ia,Fa),i=[fc.x,fc.y,fc.z],gd(i,cs,us,fs,uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],gi=new ue,cc=new Zo,cs=new ue,us=new ue,fs=new ue,Ia=new ue,Fa=new ue,fr=new ue,Uo=new ue,uc=new ue,fc=new ue,dr=new ue;function gd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=e.dot(dr),p=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const mE=new Zo,Lo=new ue,vd=new ue;class Qc{constructor(e=new ue,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(vd)),this.expandByPoint(Lo.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new ue,_d=new ue,dc=new ue,za=new ue,xd=new ue,hc=new ue,yd=new ue;class g_{constructor(e=new ue,i=new ue(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){_d.copy(e).add(i).multiplyScalar(.5),dc.copy(i).sub(e).normalize(),za.copy(this.origin).sub(_d);const c=e.distanceTo(i)*.5,f=-this.direction.dot(dc),d=za.dot(this.direction),m=-za.dot(dc),p=za.lengthSq(),g=Math.abs(1-f*f);let _,x,M,T;if(g>0)if(_=f*m-d,x=f*d-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const A=1/g;_*=A,x*=A,M=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(_d).addScaledVector(dc,x),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,c){xd.subVectors(i,e),hc.subVectors(r,e),yd.crossVectors(xd,hc);let f=this.direction.dot(yd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;za.subVectors(this.origin,e);const m=d*this.direction.dot(hc.crossVectors(za,hc));if(m<0)return null;const p=d*this.direction.dot(xd.cross(za));if(p<0||m+p>f)return null;const g=-d*za.dot(yd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,d,m,p,g,_,x,M,T,A,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p,g,_,x,M,T,A,S)}set(e,i,r,l,c,f,d,m,p,g,_,x,M,T,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),c=1/ds.setFromMatrixColumn(e,1).length(),f=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*_,T=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=T+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,M=m*_,T=p*g,A=p*_;i[0]=x+A*d,i[4]=T*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-T,i[6]=A+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,M=m*_,T=p*g,A=p*_;i[0]=x-A*d,i[4]=-f*_,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*g,i[9]=A-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,M=f*_,T=d*g,A=d*_;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+A,i[1]=m*_,i[5]=A*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,T=d*m,A=d*p;i[0]=m*g,i[4]=A-x*_,i[8]=T*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+T,i[10]=x-A*_}else if(e.order==="XZY"){const x=f*m,M=f*p,T=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+A,i[5]=f*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=d*g,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gE,e,vE)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(r,Qn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(r,Qn)),Ha.normalize(),pc.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=pc.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=pc.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=pc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],M=r[13],T=r[2],A=r[6],S=r[10],v=r[14],L=r[3],P=r[7],N=r[11],F=r[15],V=l[0],G=l[4],K=l[8],D=l[12],b=l[1],B=l[5],Y=l[9],oe=l[13],pe=l[2],ce=l[6],I=l[10],Q=l[14],W=l[3],Se=l[7],O=l[11],ne=l[15];return c[0]=f*V+d*b+m*pe+p*W,c[4]=f*G+d*B+m*ce+p*Se,c[8]=f*K+d*Y+m*I+p*O,c[12]=f*D+d*oe+m*Q+p*ne,c[1]=g*V+_*b+x*pe+M*W,c[5]=g*G+_*B+x*ce+M*Se,c[9]=g*K+_*Y+x*I+M*O,c[13]=g*D+_*oe+x*Q+M*ne,c[2]=T*V+A*b+S*pe+v*W,c[6]=T*G+A*B+S*ce+v*Se,c[10]=T*K+A*Y+S*I+v*O,c[14]=T*D+A*oe+S*Q+v*ne,c[3]=L*V+P*b+N*pe+F*W,c[7]=L*G+P*B+N*ce+F*Se,c[11]=L*K+P*Y+N*I+F*O,c[15]=L*D+P*oe+N*Q+F*ne,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],M=e[14],T=e[3],A=e[7],S=e[11],v=e[15];return T*(+c*m*_-l*p*_-c*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*g-c*m*g)+S*(+i*p*_-i*d*M-c*f*_+r*f*M+c*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*f*_-r*f*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],M=e[11],T=e[12],A=e[13],S=e[14],v=e[15],L=_*S*p-A*x*p+A*m*M-d*S*M-_*m*v+d*x*v,P=T*x*p-g*S*p-T*m*M+f*S*M+g*m*v-f*x*v,N=g*A*p-T*_*p+T*d*M-f*A*M-g*d*v+f*_*v,F=T*_*m-g*A*m-T*d*x+f*A*x+g*d*S-f*_*S,V=i*L+r*P+l*N+c*F;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/V;return e[0]=L*G,e[1]=(A*x*c-_*S*c-A*l*M+r*S*M+_*l*v-r*x*v)*G,e[2]=(d*S*c-A*m*c+A*l*p-r*S*p-d*l*v+r*m*v)*G,e[3]=(_*m*c-d*x*c-_*l*p+r*x*p+d*l*M-r*m*M)*G,e[4]=P*G,e[5]=(g*S*c-T*x*c+T*l*M-i*S*M-g*l*v+i*x*v)*G,e[6]=(T*m*c-f*S*c-T*l*p+i*S*p+f*l*v-i*m*v)*G,e[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*M+i*m*M)*G,e[8]=N*G,e[9]=(T*_*c-g*A*c-T*r*M+i*A*M+g*r*v-i*_*v)*G,e[10]=(f*A*c-T*d*c+T*r*p-i*A*p-f*r*v+i*d*v)*G,e[11]=(g*d*c-f*_*c-g*r*p+i*_*p+f*r*M-i*d*M)*G,e[12]=F*G,e[13]=(g*A*l-T*_*l+T*r*x-i*A*x-g*r*S+i*_*S)*G,e[14]=(T*d*l-f*A*l-T*r*m+i*A*m+f*r*S-i*d*S)*G,e[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*x+i*d*x)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,x=c*p,M=c*g,T=c*_,A=f*g,S=f*_,v=d*_,L=m*p,P=m*g,N=m*_,F=r.x,V=r.y,G=r.z;return l[0]=(1-(A+v))*F,l[1]=(M+N)*F,l[2]=(T-P)*F,l[3]=0,l[4]=(M-N)*V,l[5]=(1-(x+v))*V,l[6]=(S+L)*V,l[7]=0,l[8]=(T+P)*G,l[9]=(S-L)*G,l[10]=(1-(x+A))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ds.set(l[0],l[1],l[2]).length();const f=ds.set(l[4],l[5],l[6]).length(),d=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/c,g=1/f,_=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,i,r,l,c,f,d=Li,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let T,A;if(m)T=c/(f-c),A=f*c/(f-c);else if(d===Li)T=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===kc)T=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,d=Li,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,A;if(m)T=1/(f-c),A=f/(f-c);else if(d===Li)T=-2/(f-c),A=-(f+c)/(f-c);else if(d===kc)T=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new ue,vi=new ln,gE=new ue(0,0,0),vE=new ue(1,1,1),Ha=new ue,pc=new ue,Qn=new ue,Yv=new ln,Zv=new Yo;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Zv.setFromEuler(this),this.setFromQuaternion(Zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _E=0;const Kv=new ue,hs=new Yo,$i=new ln,mc=new ue,Oo=new ue,xE=new ue,yE=new Yo,Qv=new ue(1,0,0),Jv=new ue(0,1,0),$v=new ue(0,0,1),e0={type:"added"},SE={type:"removed"},ps={type:"childadded",child:null},Sd={type:"childremoved",child:null};class kn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ue,i=new ca,r=new Yo,l=new ue(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,i){return Kv.copy(e).applyQuaternion(this.quaternion),this.position.add(Kv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Oo,mc,this.up):$i.lookAt(mc,Oo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),hs.setFromRotationMatrix($i),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e0),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(SE),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e0),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ue(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new ue,ea=new ue,Md=new ue,ta=new ue,ms=new ue,gs=new ue,t0=new ue,Ed=new ue,bd=new ue,Td=new ue,Ad=new en,Rd=new en,wd=new en;class yi{constructor(e=new ue,i=new ue,r=new ue){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){_i.subVectors(l,i),ea.subVectors(r,i),Md.subVectors(e,i);const f=_i.dot(_i),d=_i.dot(ea),m=_i.dot(Md),p=ea.dot(ea),g=ea.dot(Md),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,T=(f*g-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,c,f,d,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ta.x),m.addScaledVector(f,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Ad.setScalar(0),Rd.setScalar(0),wd.setScalar(0),Ad.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,r),wd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ad,c.x),f.addScaledVector(Rd,c.y),f.addScaledVector(wd,c.z),f}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),ea.subVectors(e,i),_i.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),_i.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,d;ms.subVectors(l,r),gs.subVectors(c,r),Ed.subVectors(e,r);const m=ms.dot(Ed),p=gs.dot(Ed);if(m<=0&&p<=0)return i.copy(r);bd.subVectors(e,l);const g=ms.dot(bd),_=gs.dot(bd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ms,f);Td.subVectors(e,c);const M=ms.dot(Td),T=gs.dot(Td);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(gs,d);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return t0.subVectors(c,l),d=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(t0,d);const v=1/(S+A+x);return f=A*v,d=x*v,i.copy(r).addScaledVector(ms,f).addScaledVector(gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Cd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=sE(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Cd(f,c,e+1/3),this.g=Cd(f,c,e),this.b=Cd(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=__[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Rt.workingToColorSpace(Cn.copy(this),e),Math.round(St(Cn.r*255,0,255))*65536+Math.round(St(Cn.g*255,0,255))*256+Math.round(St(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){Rt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(gc);const r=fd(Ga.h,gc.h,i),l=fd(Ga.s,gc.s,i),c=fd(Ga.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=__;let ME=0;class Ko extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class x_ extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ue,vc=new ct;let EE=0;class Mi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Vv,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vv&&(e.usage=this.usage),e}}class y_ extends Mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class S_ extends Mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class sa extends Mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let bE=0;const oi=new ln,Dd=new kn,vs=new ue,Jn=new Zo,Po=new Zo,xn=new ue;class da extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?S_:y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new sa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Jn.min,Po.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,Po.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(Po.min),Jn.expandByPoint(Po.max))}Jn.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(vs.fromBufferAttribute(e,p),xn.add(vs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new ue,m[K]=new ue;const p=new ue,g=new ue,_=new ue,x=new ct,M=new ct,T=new ct,A=new ue,S=new ue;function v(K,D,b){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,b),x.fromBufferAttribute(c,K),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,b),g.sub(p),_.sub(p),M.sub(x),T.sub(x);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(B),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(B),d[K].add(A),d[D].add(A),d[b].add(A),m[K].add(S),m[D].add(S),m[b].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let K=0,D=L.length;K<D;++K){const b=L[K],B=b.start,Y=b.count;for(let oe=B,pe=B+Y;oe<pe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const P=new ue,N=new ue,F=new ue,V=new ue;function G(K){F.fromBufferAttribute(l,K),V.copy(F);const D=d[K];P.copy(D),P.sub(F.multiplyScalar(F.dot(D))).normalize(),N.crossVectors(V,D);const B=N.dot(m[K])<0?-1:1;f.setXYZW(K,P.x,P.y,P.z,B)}for(let K=0,D=L.length;K<D;++K){const b=L[K],B=b.start,Y=b.count;for(let oe=B,pe=B+Y;oe<pe;oe+=3)G(e.getX(oe+0)),G(e.getX(oe+1)),G(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new ue,c=new ue,f=new ue,d=new ue,m=new ue,p=new ue,g=new ue,_=new ue;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let v=0;v<g;v++)x[T++]=p[M++]}return new Mi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new da,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n0=new ln,hr=new g_,_c=new Qc,i0=new ue,xc=new ue,yc=new ue,Sc=new ue,Nd=new ue,Mc=new ue,a0=new ue,Ec=new ue;class ui extends kn{constructor(e=new da,i=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Nd.fromBufferAttribute(_,e),f?Mc.addScaledVector(Nd,g):Mc.addScaledVector(Nd.sub(i),g))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(c),hr.copy(e.ray).recast(e.near),!(_c.containsPoint(hr.origin)===!1&&(hr.intersectSphere(_c,i0)===null||hr.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(c).invert(),hr.copy(e.ray).applyMatrix4(n0),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],v=f[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,F=P;N<F;N+=3){const V=d.getX(N),G=d.getX(N+1),K=d.getX(N+2);l=bc(this,v,e,r,p,g,_,V,G,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=T,v=A;S<v;S+=3){const L=d.getX(S),P=d.getX(S+1),N=d.getX(S+2);l=bc(this,f,e,r,p,g,_,L,P,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],v=f[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,F=P;N<F;N+=3){const V=N,G=N+1,K=N+2;l=bc(this,v,e,r,p,g,_,V,G,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=T,v=A;S<v;S+=3){const L=S,P=S+1,N=S+2;l=bc(this,f,e,r,p,g,_,L,P,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function TE(s,e,i,r,l,c,f,d){let m;if(e.side===Vn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,e.side===Wa,d),m===null)return null;Ec.copy(d),Ec.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:s}}function bc(s,e,i,r,l,c,f,d,m,p){s.getVertexPosition(d,xc),s.getVertexPosition(m,yc),s.getVertexPosition(p,Sc);const g=TE(s,e,i,r,xc,yc,Sc,a0);if(g){const _=new ue;yi.getBarycoord(a0,xc,yc,Sc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new ct)),c&&(g.uv1=yi.getInterpolatedAttribute(c,d,m,p,_,new ct)),f&&(g.normal=yi.getInterpolatedAttribute(f,d,m,p,_,new ue),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ue,materialIndex:0};yi.getNormal(xc,yc,Sc,x.normal),g.face=x,g.barycoord=_}return g}class Qo extends da{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,f,c,0),T("z","y","x",1,-1,r,i,-e,f,c,1),T("x","z","y",1,1,e,r,i,l,f,2),T("x","z","y",1,-1,e,r,-i,l,f,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new sa(p,3)),this.setAttribute("normal",new sa(g,3)),this.setAttribute("uv",new sa(_,2));function T(A,S,v,L,P,N,F,V,G,K,D){const b=N/G,B=F/K,Y=N/2,oe=F/2,pe=V/2,ce=G+1,I=K+1;let Q=0,W=0;const Se=new ue;for(let O=0;O<I;O++){const ne=O*B-oe;for(let ye=0;ye<ce;ye++){const Me=ye*b-Y;Se[A]=Me*L,Se[S]=ne*P,Se[v]=pe,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[v]=V>0?1:-1,g.push(Se.x,Se.y,Se.z),_.push(ye/G),_.push(1-O/K),Q+=1}}for(let O=0;O<K;O++)for(let ne=0;ne<G;ne++){const ye=x+ne+ce*O,Me=x+ne+ce*(O+1),Ue=x+(ne+1)+ce*(O+1),Ge=x+(ne+1)+ce*O;m.push(ye,Me,Ge),m.push(Me,Ue,Ge),W+=6}d.addGroup(M,W,D),M+=W,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)e[l]=r[l]}return e}function AE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function M_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const RE={clone:ws,merge:Ln};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=AE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Xc extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new ue,r0=new ct,s0=new ct;class xi extends Xc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,r0,s0),i.subVectors(s0,r0)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ud*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,xs=1;class DE extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(_s,xs,e,i);l.layers=this.layers,this.add(l);const c=new xi(_s,xs,e,i);c.layers=this.layers,this.add(c);const f=new xi(_s,xs,e,i);f.layers=this.layers,this.add(f);const d=new xi(_s,xs,e,i);d.layers=this.layers,this.add(d);const m=new xi(_s,xs,e,i);m.layers=this.layers,this.add(m);const p=new xi(_s,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class E_ extends On{constructor(e=[],i=Ts,r,l,c,f,d,m,p,g){super(e,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NE extends qa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new E_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qo(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ja});c.uniforms.tEquirect.value=i;const f=new ui(l,c),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Gn),new DE(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Tc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class o0 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class LE extends On{constructor(e=null,i=1,r=1,l,c,f,d,m,p=$n,g=$n,_,x){super(null,f,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new ue,OE=new ue,PE=new dt;class _r{constructor(e=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ld.subVectors(r,i).cross(OE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ld),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||PE.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Qc,BE=new ct(.5,.5),Ac=new ue;class b_{constructor(e=new _r,i=new _r,r=new _r,l=new _r,c=new _r,f=new _r){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Li,r=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],M=c[7],T=c[8],A=c[9],S=c[10],v=c[11],L=c[12],P=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-f,M-g,v-T,F-L).normalize(),l[1].setComponents(p+f,M+g,v+T,F+L).normalize(),l[2].setComponents(p+d,M+_,v+A,F+P).normalize(),l[3].setComponents(p-d,M-_,v-A,F-P).normalize(),r)l[4].setComponents(m,x,S,N).normalize(),l[5].setComponents(p-m,M-x,v-S,F-N).normalize();else if(l[4].setComponents(p-m,M-x,v-S,F-N).normalize(),i===Li)l[5].setComponents(p+m,M+x,v+S,F+N).normalize();else if(i===kc)l[5].setComponents(m,x,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const i=BE.distanceTo(e.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IE extends Ko{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wc=new ue,qc=new ue,l0=new ln,Bo=new g_,Rc=new Qc,Od=new ue,c0=new ue;class FE extends kn{constructor(e=new da,i=new IE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Wc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Wc.distanceTo(qc);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,e.ray.intersectsSphere(Rc)===!1)return;l0.copy(l).invert(),Bo.copy(e.ray).applyMatrix4(l0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let A=M,S=T-1;A<S;A+=p){const v=g.getX(A),L=g.getX(A+1),P=wc(this,e,Bo,m,v,L,A);P&&i.push(P)}if(this.isLineLoop){const A=g.getX(T-1),S=g.getX(M),v=wc(this,e,Bo,m,A,S,T-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let A=M,S=T-1;A<S;A+=p){const v=wc(this,e,Bo,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=wc(this,e,Bo,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function wc(s,e,i,r,l,c,f){const d=s.geometry.attributes.position;if(Wc.fromBufferAttribute(d,l),qc.fromBufferAttribute(d,c),i.distanceSqToSegment(Wc,qc,Od,c0)>r)return;Od.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Od);if(!(p<e.near||p>e.far))return{distance:p,point:c0.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const u0=new ue,f0=new ue;class zE extends FE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)u0.fromBufferAttribute(i,l),f0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+u0.distanceTo(f0);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T_ extends On{constructor(e,i,r=br,l,c,f,d=$n,m=$n,p,g=Go,_=1){if(g!==Go&&g!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class A_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Er extends da{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=e/d,x=i/m,M=[],T=[],A=[],S=[];for(let v=0;v<g;v++){const L=v*x-f;for(let P=0;P<p;P++){const N=P*_-c;T.push(N,-L,0),A.push(0,0,1),S.push(P/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const P=L+p*v,N=L+p*(v+1),F=L+1+p*(v+1),V=L+1+p*v;M.push(P,N,V),M.push(N,F,V)}this.setIndex(M),this.setAttribute("position",new sa(T,3)),this.setAttribute("normal",new sa(A,3)),this.setAttribute("uv",new sa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cc extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HE extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GE extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class VE extends Xc{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kE extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function d0(s,e,i,r){const l=XE(r);switch(i){case c_:return s*e;case f_:return s*e/l.components*l.byteLength;case Wh:return s*e/l.components*l.byteLength;case d_:return s*e*2/l.components*l.byteLength;case qh:return s*e*2/l.components*l.byteLength;case u_:return s*e*3/l.components*l.byteLength;case ci:return s*e*4/l.components*l.byteLength;case Yh:return s*e*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:case oh:return Math.max(s,16)*Math.max(e,8)/4;case ah:case sh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wh:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dh:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XE(s){switch(s){case la:case r_:return{byteLength:1,components:1};case zo:case s_:case Ns:return{byteLength:2,components:1};case jh:case Xh:return{byteLength:2,components:4};case br:case kh:case Ui:return{byteLength:4,components:1};case o_:case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function R_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function WE(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,_[x]=A)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YE=`#ifdef USE_ALPHAHASH
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
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sb=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
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
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,Xb=`struct PhysicalMaterial {
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
}`,Wb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NT=`float getShadowMask() {
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
}`,UT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LT=`#ifdef USE_SKINNING
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
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qT=`uniform sampler2D t2D;
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eA=`#define DISTANCE
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
}`,tA=`#define DISTANCE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define LAMBERT
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
}`,uA=`#define MATCAP
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
}`,fA=`#define MATCAP
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
}`,dA=`#define NORMAL
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
}`,hA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,vA=`#define STANDARD
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
}`,_A=`#define TOON
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
}`,xA=`#define TOON
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
}`,yA=`uniform float size;
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 color;
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
}`,bA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,TA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:qE,alphahash_pars_fragment:YE,alphamap_fragment:ZE,alphamap_pars_fragment:KE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:$E,aomap_pars_fragment:eb,batching_pars_vertex:tb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:ab,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ob,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:fb,color_fragment:db,color_pars_fragment:hb,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:vb,defaultnormal_vertex:_b,displacementmap_pars_vertex:xb,displacementmap_vertex:yb,emissivemap_fragment:Sb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:bb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Rb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:zb,envmap_vertex:Cb,fog_vertex:Db,fog_pars_vertex:Nb,fog_fragment:Ub,fog_pars_fragment:Lb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:Pb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Ib,lights_pars_begin:Fb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:kb,lights_physical_fragment:jb,lights_physical_pars_fragment:Xb,lights_fragment_begin:Wb,lights_fragment_maps:qb,lights_fragment_end:Yb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:Jb,map_fragment:$b,map_pars_fragment:eT,map_particle_fragment:tT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:aT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:dT,normal_pars_vertex:hT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:xT,opaque_fragment:yT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:RT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:CT,shadowmap_vertex:DT,shadowmask_pars_fragment:NT,skinbase_vertex:UT,skinning_pars_vertex:LT,skinning_vertex:OT,skinnormal_vertex:PT,specularmap_fragment:BT,specularmap_pars_fragment:IT,tonemapping_fragment:FT,tonemapping_pars_fragment:zT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:kT,uv_vertex:jT,worldpos_vertex:XT,background_vert:WT,background_frag:qT,backgroundCube_vert:YT,backgroundCube_frag:ZT,cube_vert:KT,cube_frag:QT,depth_vert:JT,depth_frag:$T,distanceRGBA_vert:eA,distanceRGBA_frag:tA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:uA,meshmatcap_frag:fA,meshnormal_vert:dA,meshnormal_frag:hA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:vA,meshtoon_vert:_A,meshtoon_frag:xA,points_vert:yA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:bA,sprite_frag:TA},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Be.points,Be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Be.common,Be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Be.sprite,Be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Ln([Be.common,Be.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Ln([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Dc={r:0,b:0,g:0},mr=new ca,AA=new ln;function RA(s,e,i,r,l,c,f){const d=new Ct(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function T(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?i:e).get(N)),N}function A(P){let N=!1;const F=T(P);F===null?v(d,m):F&&F.isColor&&(v(F,1),N=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,N){const F=T(N);F&&(F.isCubeTexture||F.mapping===Kc)?(g===void 0&&(g=new ui(new Qo(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:ws(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,G,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),mr.copy(N.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(mr)),g.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Ft,(_!==F||x!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,M=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ui(new Er(2,2),new ua({name:"BackgroundMaterial",uniforms:ws(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(F.colorSpace)!==Ft,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=F,x=F.version,M=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,N){P.getRGB(Dc,M_(s)),r.buffers.color.setClear(Dc.r,Dc.g,Dc.b,N,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,N=1){d.set(P),m=N,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(d,m)},render:A,addToRenderList:S,dispose:L}}function wA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function d(b,B,Y,oe,pe){let ce=!1;const I=_(oe,Y,B);c!==I&&(c=I,p(c.object)),ce=M(b,oe,Y,pe),ce&&T(b,oe,Y,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,N(b,B,Y,oe),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(b){return s.bindVertexArray(b)}function g(b){return s.deleteVertexArray(b)}function _(b,B,Y){const oe=Y.wireframe===!0;let pe=r[b.id];pe===void 0&&(pe={},r[b.id]=pe);let ce=pe[B.id];ce===void 0&&(ce={},pe[B.id]=ce);let I=ce[oe];return I===void 0&&(I=x(m()),ce[oe]=I),I}function x(b){const B=[],Y=[],oe=[];for(let pe=0;pe<i;pe++)B[pe]=0,Y[pe]=0,oe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:oe,object:b,attributes:{},index:null}}function M(b,B,Y,oe){const pe=c.attributes,ce=B.attributes;let I=0;const Q=Y.getAttributes();for(const W in Q)if(Q[W].location>=0){const O=pe[W];let ne=ce[W];if(ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),O===void 0||O.attribute!==ne||ne&&O.data!==ne.data)return!0;I++}return c.attributesNum!==I||c.index!==oe}function T(b,B,Y,oe){const pe={},ce=B.attributes;let I=0;const Q=Y.getAttributes();for(const W in Q)if(Q[W].location>=0){let O=ce[W];O===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(O=b.instanceColor));const ne={};ne.attribute=O,O&&O.data&&(ne.data=O.data),pe[W]=ne,I++}c.attributes=pe,c.attributesNum=I,c.index=oe}function A(){const b=c.newAttributes;for(let B=0,Y=b.length;B<Y;B++)b[B]=0}function S(b){v(b,0)}function v(b,B){const Y=c.newAttributes,oe=c.enabledAttributes,pe=c.attributeDivisors;Y[b]=1,oe[b]===0&&(s.enableVertexAttribArray(b),oe[b]=1),pe[b]!==B&&(s.vertexAttribDivisor(b,B),pe[b]=B)}function L(){const b=c.newAttributes,B=c.enabledAttributes;for(let Y=0,oe=B.length;Y<oe;Y++)B[Y]!==b[Y]&&(s.disableVertexAttribArray(Y),B[Y]=0)}function P(b,B,Y,oe,pe,ce,I){I===!0?s.vertexAttribIPointer(b,B,Y,pe,ce):s.vertexAttribPointer(b,B,Y,oe,pe,ce)}function N(b,B,Y,oe){A();const pe=oe.attributes,ce=Y.getAttributes(),I=B.defaultAttributeValues;for(const Q in ce){const W=ce[Q];if(W.location>=0){let Se=pe[Q];if(Se===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),Se!==void 0){const O=Se.normalized,ne=Se.itemSize,ye=e.get(Se);if(ye===void 0)continue;const Me=ye.buffer,Ue=ye.type,Ge=ye.bytesPerElement,ae=Ue===s.INT||Ue===s.UNSIGNED_INT||Se.gpuType===kh;if(Se.isInterleavedBufferAttribute){const ve=Se.data,Ee=ve.stride,Ke=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)v(W.location+qe,ve.meshPerAttribute);b.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<W.locationSize;qe++)S(W.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let qe=0;qe<W.locationSize;qe++)P(W.location+qe,ne/W.locationSize,Ue,O,Ee*Ge,(Ke+ne/W.locationSize*qe)*Ge,ae)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)v(W.location+ve,Se.meshPerAttribute);b.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<W.locationSize;ve++)S(W.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ve=0;ve<W.locationSize;ve++)P(W.location+ve,ne/W.locationSize,Ue,O,ne*Ge,ne/W.locationSize*ve*Ge,ae)}}else if(I!==void 0){const O=I[Q];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(W.location,O);break;case 3:s.vertexAttrib3fv(W.location,O);break;case 4:s.vertexAttrib4fv(W.location,O);break;default:s.vertexAttrib1fv(W.location,O)}}}}L()}function F(){K();for(const b in r){const B=r[b];for(const Y in B){const oe=B[Y];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete B[Y]}delete r[b]}}function V(b){if(r[b.id]===void 0)return;const B=r[b.id];for(const Y in B){const oe=B[Y];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete B[Y]}delete r[b.id]}function G(b){for(const B in r){const Y=r[B];if(Y[b.id]===void 0)continue;const oe=Y[b.id];for(const pe in oe)g(oe[pe].object),delete oe[pe];delete Y[b.id]}}function K(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:V,releaseStatesOfProgram:G,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function CA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,r,1)}function m(p,g,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let T=0;for(let A=0;A<_;A++)T+=g[A]*x[A];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(G){return!(G!==ci&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const K=G===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==la&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ui&&!K)}function m(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:F,maxSamples:V}}function NA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new _r,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||T===null||T.length===0||c&&!S)c?g(null):p();else{const L=c?0:r,P=L*4;let N=v.clippingState||null;m.value=N,N=g(T,x,P,M);for(let F=0;F!==P;++F)N[F]=i[F];v.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,T){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,T!==!0||S===null){const v=M+A*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let P=0,N=M;P!==A;++P,N+=4)f.copy(_[P]).applyMatrix4(L,d),f.normal.toArray(S,N),S[N+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function UA(s){let e=new WeakMap;function i(f,d){return d===eh?f.mapping=Ts:d===th&&(f.mapping=As),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===eh||d===th)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new NE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ss=4,h0=[.125,.215,.35,.446,.526,.582],Sr=20,Pd=new VE,p0=new Ct;let Bd=null,Id=0,Fd=0,zd=!1;const xr=(1+Math.sqrt(5))/2,ys=1/xr,m0=[new ue(-xr,ys,0),new ue(xr,ys,0),new ue(-ys,0,xr),new ue(ys,0,xr),new ue(0,xr,-ys),new ue(0,xr,ys),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)],LA=new ue;class g0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=LA}=c;Bd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Id,Fd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ns,format:ci,colorSpace:Rs,depthBuffer:!1},l=v0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(c)),this._blurMaterial=PA(c,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,Pd)}_sceneToCubeUV(e,i,r,l,c){const m=new xi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(p0),_.toneMapping=Xa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new x_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),S=new ui(new Qo,A);let v=!1;const L=e.background;L?L.isColor&&(A.color.copy(L),e.background=null,v=!0):(A.color.copy(p0),v=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const F=this._cubeSize;Nc(l,N*F,P>2?F:0,F,F),_.setRenderTarget(l),v&&_.render(S,m),_.render(e,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=M,_.autoClear=x,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ui(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Nc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Pd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=m0[(l-c-1)%m0.length];this._blur(e,c-1,c,f,d)}i.autoClear=r}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ui(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),A=c/T,S=isFinite(c)?1+Math.floor(g*A):Sr;S>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Sr}`);const v=[];let L=0;for(let G=0;G<Sr;++G){const K=G/A,D=Math.exp(-K*K/2);v.push(D),G===0?L+=D:G<S&&(L+=2*D)}for(let G=0;G<v.length;G++)v[G]=v[G]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-r;const N=this._sizeLods[l],F=3*N*(l>P-Ss?l-P+Ss:0),V=4*(this._cubeSize-N);Nc(i,F,V,3*N,2*N),m.setRenderTarget(i),m.render(_,Pd)}}function OA(s){const e=[],i=[],r=[];let l=s;const c=s-Ss+1+h0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Ss?m=h0[f-s+Ss-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,A=3,S=2,v=1,L=new Float32Array(A*T*M),P=new Float32Array(S*T*M),N=new Float32Array(v*T*M);for(let V=0;V<M;V++){const G=V%3*2/3-1,K=V>2?0:-1,D=[G,K,0,G+2/3,K,0,G+2/3,K+1,0,G,K,0,G+2/3,K+1,0,G,K+1,0];L.set(D,A*T*V),P.set(x,S*T*V);const b=[V,V,V,V,V,V];N.set(b,v*T*V)}const F=new da;F.setAttribute("position",new Mi(L,A)),F.setAttribute("uv",new Mi(P,S)),F.setAttribute("faceIndex",new Mi(N,v)),e.push(F),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function v0(s,e,i){const r=new qa(s,e,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function PA(s,e,i){const r=new Float32Array(Sr),l=new ue(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function _0(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function x0(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function BA(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===eh||m===th,g=m===Ts||m===As;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new g0(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new g0(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function IA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ko("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function FA(s,e,i,r){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let P=0,N=L.length;P<N;P+=3){const F=L[P+0],V=L[P+1],G=L[P+2];x.push(F,V,V,G,G,F)}}else if(T!==void 0){const L=T.array;A=T.version;for(let P=0,N=L.length/3-1;P<N;P+=3){const F=P+0,V=P+1,G=P+2;x.push(F,V,V,G,G,F)}}else return;const S=new(p_(x)?S_:y_)(x,1);S.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function zA(s,e,i){let r;function l(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*f,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let S=0;for(let v=0;v<T;v++)S+=M[v];i.update(S,r,1)}function _(x,M,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,T);let v=0;for(let L=0;L<T;L++)v+=M[L]*A[L];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function HA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GA(s,e,i){const r=new WeakMap,l=new en;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let b=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;T===!0&&(N=1),A===!0&&(N=2),S===!0&&(N=3);let F=d.attributes.position.count*N,V=1;F>e.maxTextureSize&&(V=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const G=new Float32Array(F*V*4*_),K=new m_(G,F,V,_);K.type=Ui,K.needsUpdate=!0;const D=N*4;for(let B=0;B<_;B++){const Y=v[B],oe=L[B],pe=P[B],ce=F*V*4*B;for(let I=0;I<Y.count;I++){const Q=I*D;T===!0&&(l.fromBufferAttribute(Y,I),G[ce+Q+0]=l.x,G[ce+Q+1]=l.y,G[ce+Q+2]=l.z,G[ce+Q+3]=0),A===!0&&(l.fromBufferAttribute(oe,I),G[ce+Q+4]=l.x,G[ce+Q+5]=l.y,G[ce+Q+6]=l.z,G[ce+Q+7]=0),S===!0&&(l.fromBufferAttribute(pe,I),G[ce+Q+8]=l.x,G[ce+Q+9]=l.y,G[ce+Q+10]=l.z,G[ce+Q+11]=pe.itemSize===4?l.w:1)}}x={count:_,texture:K,size:new ct(F,V)},r.set(d,x),d.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function VA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const w_=new On,y0=new T_(1,1),C_=new m_,D_=new pE,N_=new E_,S0=[],M0=[],E0=new Float32Array(16),b0=new Float32Array(9),T0=new Float32Array(4);function Ls(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=S0[l];if(c===void 0&&(c=new Float32Array(l),S0[l]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function hn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function pn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Jc(s,e){let i=M0[e];i===void 0&&(i=new Int32Array(e),M0[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function kA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function jA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2fv(this.addr,e),pn(i,e)}}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;s.uniform3fv(this.addr,e),pn(i,e)}}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4fv(this.addr,e),pn(i,e)}}function qA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;T0.set(r),s.uniformMatrix2fv(this.addr,!1,T0),pn(i,r)}}function YA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;b0.set(r),s.uniformMatrix3fv(this.addr,!1,b0),pn(i,r)}}function ZA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;E0.set(r),s.uniformMatrix4fv(this.addr,!1,E0),pn(i,r)}}function KA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2iv(this.addr,e),pn(i,e)}}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3iv(this.addr,e),pn(i,e)}}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4iv(this.addr,e),pn(i,e)}}function e1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function t1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2uiv(this.addr,e),pn(i,e)}}function n1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3uiv(this.addr,e),pn(i,e)}}function i1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4uiv(this.addr,e),pn(i,e)}}function a1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(y0.compareFunction=h_,c=y0):c=w_,i.setTexture2D(e||c,l)}function r1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||D_,l)}function s1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||N_,l)}function o1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||C_,l)}function l1(s){switch(s){case 5126:return kA;case 35664:return jA;case 35665:return XA;case 35666:return WA;case 35674:return qA;case 35675:return YA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(s,e){s.uniform1fv(this.addr,e)}function u1(s,e){const i=Ls(e,this.size,2);s.uniform2fv(this.addr,i)}function f1(s,e){const i=Ls(e,this.size,3);s.uniform3fv(this.addr,i)}function d1(s,e){const i=Ls(e,this.size,4);s.uniform4fv(this.addr,i)}function h1(s,e){const i=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p1(s,e){const i=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m1(s,e){const i=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function g1(s,e){s.uniform1iv(this.addr,e)}function v1(s,e){s.uniform2iv(this.addr,e)}function _1(s,e){s.uniform3iv(this.addr,e)}function x1(s,e){s.uniform4iv(this.addr,e)}function y1(s,e){s.uniform1uiv(this.addr,e)}function S1(s,e){s.uniform2uiv(this.addr,e)}function M1(s,e){s.uniform3uiv(this.addr,e)}function E1(s,e){s.uniform4uiv(this.addr,e)}function b1(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||w_,c[f])}function T1(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||D_,c[f])}function A1(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||N_,c[f])}function R1(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||C_,c[f])}function w1(s){switch(s){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class C1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l1(i.type)}}class D1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function A0(s,e){s.seq.push(e),s.map[e.id]=e}function U1(s,e,i){const r=s.name,l=r.length;for(Hd.lastIndex=0;;){const c=Hd.exec(r),f=Hd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){A0(i,p===void 0?new C1(d,s,e):new D1(d,s,e));break}else{let _=i.map[d];_===void 0&&(_=new N1(d),A0(i,_)),i=_}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);U1(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function R0(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const L1=37297;let O1=0;function P1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const w0=new dt;function B1(s){Rt._getMatrix(w0,Rt.workingColorSpace,s);const e=`mat3( ${w0.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Vc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function C0(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+P1(s.getShaderSource(e),d)}else return c}function I1(s,e){const i=B1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function F1(s,e){let i;switch(e){case GM:i="Linear";break;case VM:i="Reinhard";break;case kM:i="Cineon";break;case jM:i="ACESFilmic";break;case WM:i="AgX";break;case qM:i="Neutral";break;case XM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new ue;function z1(){Rt.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function G1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function V1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function Io(s){return s!==""}function D0(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(s){return s.replace(k1,X1)}const j1=new Map;function X1(s,e){let i=mt[e];if(i===void 0){const r=j1.get(e);if(r!==void 0)i=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lh(i)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(s){return s.replace(W1,q1)}function q1(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function L0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function Z1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Q1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case i_:e="ENVMAP_BLENDING_MULTIPLY";break;case zM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function J1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $1(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=Y1(i),p=Z1(i),g=K1(i),_=Q1(i),x=J1(i),M=H1(i),T=G1(c),A=l.createProgram();let S,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Io).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(S=[L0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[L0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?mt.tonemapping_pars_fragment:"",i.toneMapping!==Xa?F1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,I1("linearToOutputTexel",i.outputColorSpace),z1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),f=Lh(f),f=D0(f,i),f=N0(f,i),d=Lh(d),d=D0(d,i),d=N0(d,i),f=U0(f),d=U0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+S+f,N=L+v+d,F=R0(l,l.VERTEX_SHADER,P),V=R0(l,l.FRAGMENT_SHADER,N);l.attachShader(A,F),l.attachShader(A,V),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function G(B){if(s.debug.checkShaderErrors){const Y=l.getProgramInfoLog(A)||"",oe=l.getShaderInfoLog(F)||"",pe=l.getShaderInfoLog(V)||"",ce=Y.trim(),I=oe.trim(),Q=pe.trim();let W=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,F,V);else{const O=C0(l,F,"vertex"),ne=C0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ce+`
`+O+`
`+ne)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(I===""||Q==="")&&(Se=!1);Se&&(B.diagnostics={runnable:W,programLog:ce,vertexShader:{log:I,prefix:S},fragmentShader:{log:Q,prefix:v}})}l.deleteShader(F),l.deleteShader(V),K=new Hc(l,A),D=V1(l,A)}let K;this.getUniforms=function(){return K===void 0&&G(this),K};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(A,L1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=V,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new nR(e),i.set(e,r)),r}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function iR(s,e,i,r,l,c,f){const d=new v_,m=new tR,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,b,B,Y,oe){const pe=Y.fog,ce=oe.geometry,I=D.isMeshStandardMaterial?Y.environment:null,Q=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),W=Q&&Q.mapping===Kc?Q.image.height:null,Se=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const O=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ne=O!==void 0?O.length:0;let ye=0;ce.morphAttributes.position!==void 0&&(ye=1),ce.morphAttributes.normal!==void 0&&(ye=2),ce.morphAttributes.color!==void 0&&(ye=3);let Me,Ue,Ge,ae;if(Se){const bt=Ni[Se];Me=bt.vertexShader,Ue=bt.fragmentShader}else Me=D.vertexShader,Ue=D.fragmentShader,m.update(D),Ge=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const ve=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ke=oe.isInstancedMesh===!0,qe=oe.isBatchedMesh===!0,ut=!!D.map,Zt=!!D.matcap,H=!!Q,Dt=!!D.aoMap,st=!!D.lightMap,et=!!D.bumpMap,Ie=!!D.normalMap,Mt=!!D.displacementMap,Ve=!!D.emissiveMap,ot=!!D.metalnessMap,Gt=!!D.roughnessMap,Vt=D.anisotropy>0,U=D.clearcoat>0,y=D.dispersion>0,k=D.iridescence>0,$=D.sheen>0,de=D.transmission>0,re=Vt&&!!D.anisotropyMap,Ce=U&&!!D.clearcoatMap,we=U&&!!D.clearcoatNormalMap,ze=U&&!!D.clearcoatRoughnessMap,je=k&&!!D.iridescenceMap,be=k&&!!D.iridescenceThicknessMap,Oe=$&&!!D.sheenColorMap,Qe=$&&!!D.sheenRoughnessMap,We=!!D.specularMap,Ne=!!D.specularColorMap,lt=!!D.specularIntensityMap,X=de&&!!D.transmissionMap,Re=de&&!!D.thicknessMap,De=!!D.gradientMap,Fe=!!D.alphaMap,Te=D.alphaTest>0,xe=!!D.alphaHash,Xe=!!D.extensions;let rt=Xa;D.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Nt={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:Ue,defines:D.defines,customVertexShaderID:Ge,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:qe,batchingColor:qe&&oe._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&oe.instanceColor!==null,instancingMorph:Ke&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:ut,matcap:Zt,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:W,aoMap:Dt,lightMap:st,bumpMap:et,normalMap:Ie,displacementMap:x&&Mt,emissiveMap:Ve,normalMapObjectSpace:Ie&&D.normalMapType===JM,normalMapTangentSpace:Ie&&D.normalMapType===QM,metalnessMap:ot,roughnessMap:Gt,anisotropy:Vt,anisotropyMap:re,clearcoat:U,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:y,iridescence:k,iridescenceMap:je,iridescenceThicknessMap:be,sheen:$,sheenColorMap:Oe,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:Ne,specularIntensityMap:lt,transmission:de,transmissionMap:X,thicknessMap:Re,gradientMap:De,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:xe,combine:D.combine,mapUv:ut&&A(D.map.channel),aoMapUv:Dt&&A(D.aoMap.channel),lightMapUv:st&&A(D.lightMap.channel),bumpMapUv:et&&A(D.bumpMap.channel),normalMapUv:Ie&&A(D.normalMap.channel),displacementMapUv:Mt&&A(D.displacementMap.channel),emissiveMapUv:Ve&&A(D.emissiveMap.channel),metalnessMapUv:ot&&A(D.metalnessMap.channel),roughnessMapUv:Gt&&A(D.roughnessMap.channel),anisotropyMapUv:re&&A(D.anisotropyMap.channel),clearcoatMapUv:Ce&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:be&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&A(D.sheenRoughnessMap.channel),specularMapUv:We&&A(D.specularMap.channel),specularColorMapUv:Ne&&A(D.specularColorMap.channel),specularIntensityMapUv:lt&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Re&&A(D.thicknessMap.channel),alphaMapUv:Fe&&A(D.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ie||Vt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ce.attributes.uv&&(ut||Fe),fog:!!pe,useFog:D.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ee,skinning:oe.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:ut&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===Ft,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ia,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&D.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Nt.vertexUv1s=p.has(1),Nt.vertexUv2s=p.has(2),Nt.vertexUv3s=p.has(3),p.clear(),Nt}function v(D){const b=[];if(D.shaderID?b.push(D.shaderID):(b.push(D.customVertexShaderID),b.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)b.push(B),b.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(L(b,D),P(b,D),b.push(s.outputColorSpace)),b.push(D.customProgramCacheKey),b.join()}function L(D,b){D.push(b.precision),D.push(b.outputColorSpace),D.push(b.envMapMode),D.push(b.envMapCubeUVHeight),D.push(b.mapUv),D.push(b.alphaMapUv),D.push(b.lightMapUv),D.push(b.aoMapUv),D.push(b.bumpMapUv),D.push(b.normalMapUv),D.push(b.displacementMapUv),D.push(b.emissiveMapUv),D.push(b.metalnessMapUv),D.push(b.roughnessMapUv),D.push(b.anisotropyMapUv),D.push(b.clearcoatMapUv),D.push(b.clearcoatNormalMapUv),D.push(b.clearcoatRoughnessMapUv),D.push(b.iridescenceMapUv),D.push(b.iridescenceThicknessMapUv),D.push(b.sheenColorMapUv),D.push(b.sheenRoughnessMapUv),D.push(b.specularMapUv),D.push(b.specularColorMapUv),D.push(b.specularIntensityMapUv),D.push(b.transmissionMapUv),D.push(b.thicknessMapUv),D.push(b.combine),D.push(b.fogExp2),D.push(b.sizeAttenuation),D.push(b.morphTargetsCount),D.push(b.morphAttributeCount),D.push(b.numDirLights),D.push(b.numPointLights),D.push(b.numSpotLights),D.push(b.numSpotLightMaps),D.push(b.numHemiLights),D.push(b.numRectAreaLights),D.push(b.numDirLightShadows),D.push(b.numPointLightShadows),D.push(b.numSpotLightShadows),D.push(b.numSpotLightShadowsWithMaps),D.push(b.numLightProbes),D.push(b.shadowMapType),D.push(b.toneMapping),D.push(b.numClippingPlanes),D.push(b.numClipIntersection),D.push(b.depthPacking)}function P(D,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),b.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reversedDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),D.push(d.mask)}function N(D){const b=T[D.type];let B;if(b){const Y=Ni[b];B=RE.clone(Y.uniforms)}else B=D.uniforms;return B}function F(D,b){let B;for(let Y=0,oe=g.length;Y<oe;Y++){const pe=g[Y];if(pe.cacheKey===b){B=pe,++B.usedTimes;break}}return B===void 0&&(B=new $1(s,b,D,c),g.push(B)),B}function V(D){if(--D.usedTimes===0){const b=g.indexOf(D);g[b]=g[g.length-1],g.pop(),D.destroy()}}function G(D){m.remove(D)}function K(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:N,acquireProgram:F,releaseProgram:V,releaseShaderCache:G,programs:g,dispose:K}}function aR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function rR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function O0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function P0(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_,x,M,T,A,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,x,M,T,A,S){const v=f(_,x,M,T,A,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,T,A,S){const v=f(_,x,M,T,A,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||rR),r.length>1&&r.sort(x||O0),l.length>1&&l.sort(x||O0)}function g(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function sR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new P0,s.set(r,[f])):l>=c.length?(f=new P0,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function oR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ue,color:new Ct};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[e.id]=i,i}}}function lR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let cR=0;function uR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fR(s){const e=new oR,i=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const l=new ue,c=new ln,f=new ln;function d(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,A=0,S=0,v=0,L=0,P=0,N=0,F=0,V=0,G=0;p.sort(uR);for(let D=0,b=p.length;D<b;D++){const B=p[D],Y=B.color,oe=B.intensity,pe=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=Y.r*oe,_+=Y.g*oe,x+=Y.b*oe;else if(B.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(B.sh.coefficients[I],oe);G++}else if(B.isDirectionalLight){const I=e.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,W=i.get(B);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=B.shadow.matrix,L++}r.directional[M]=I,M++}else if(B.isSpotLight){const I=e.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(Y).multiplyScalar(oe),I.distance=pe,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,r.spot[A]=I;const Q=B.shadow;if(B.map&&(r.spotLightMap[F]=B.map,F++,Q.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[A]=Q.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.spotShadow[A]=W,r.spotShadowMap[A]=ce,N++}A++}else if(B.isRectAreaLight){const I=e.get(B);I.color.copy(Y).multiplyScalar(oe),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=I,S++}else if(B.isPointLight){const I=e.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),I.distance=B.distance,I.decay=B.decay,B.castShadow){const Q=B.shadow,W=i.get(B);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=B.shadow.matrix,P++}r.point[T]=I,T++}else if(B.isHemisphereLight){const I=e.get(B);I.skyColor.copy(B.color).multiplyScalar(oe),I.groundColor.copy(B.groundColor).multiplyScalar(oe),r.hemi[v]=I,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==T||K.spotLength!==A||K.rectAreaLength!==S||K.hemiLength!==v||K.numDirectionalShadows!==L||K.numPointShadows!==P||K.numSpotShadows!==N||K.numSpotMaps!==F||K.numLightProbes!==G)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+F-V,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=G,K.directionalLength=M,K.pointLength=T,K.spotLength=A,K.rectAreaLength=S,K.hemiLength=v,K.numDirectionalShadows=L,K.numPointShadows=P,K.numSpotShadows=N,K.numSpotMaps=F,K.numLightProbes=G,r.version=cR++)}function m(p,g){let _=0,x=0,M=0,T=0,A=0;const S=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const P=p[v];if(P.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),_++}else if(P.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),f.identity(),c.copy(P.matrixWorld),c.premultiply(S),f.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function B0(s){const e=new fR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function dR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new B0(s),e.set(l,[d])):c>=f.length?(d=new B0(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
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
}`;function mR(s,e,i){let r=new b_;const l=new ct,c=new ct,f=new en,d=new HE({depthPacking:KM}),m=new GE,p={},g=i.maxTextureSize,_={[Wa]:Vn,[Vn]:Wa,[ia]:ia},x=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:hR,fragmentShader:pR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new da;T.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let v=this.type;this.render=function(V,G,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const D=s.getRenderTarget(),b=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(ja),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const oe=v!==na&&this.type===na,pe=v===na&&this.type!==na;for(let ce=0,I=V.length;ce<I;ce++){const Q=V[ce],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const Se=W.getFrameExtents();if(l.multiply(Se),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Se.x),l.x=c.x*Se.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Se.y),l.y=c.y*Se.y,W.mapSize.y=c.y)),W.map===null||oe===!0||pe===!0){const ne=this.type!==na?{minFilter:$n,magFilter:$n}:{};W.map!==null&&W.map.dispose(),W.map=new qa(l.x,l.y,ne),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const O=W.getViewportCount();for(let ne=0;ne<O;ne++){const ye=W.getViewport(ne);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),Y.viewport(f),W.updateMatrices(Q,ne),r=W.getFrustum(),N(G,K,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===na&&L(W,K),W.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(D,b,B)};function L(V,G){const K=e.update(A);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new qa(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(G,null,K,x,A,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(G,null,K,M,A,null)}function P(V,G,K,D){let b=null;const B=K.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)b=B;else if(b=K.isPointLight===!0?m:d,s.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const Y=b.uuid,oe=G.uuid;let pe=p[Y];pe===void 0&&(pe={},p[Y]=pe);let ce=pe[oe];ce===void 0&&(ce=b.clone(),pe[oe]=ce,G.addEventListener("dispose",F)),b=ce}if(b.visible=G.visible,b.wireframe=G.wireframe,D===na?b.side=G.shadowSide!==null?G.shadowSide:G.side:b.side=G.shadowSide!==null?G.shadowSide:_[G.side],b.alphaMap=G.alphaMap,b.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,b.map=G.map,b.clipShadows=G.clipShadows,b.clippingPlanes=G.clippingPlanes,b.clipIntersection=G.clipIntersection,b.displacementMap=G.displacementMap,b.displacementScale=G.displacementScale,b.displacementBias=G.displacementBias,b.wireframeLinewidth=G.wireframeLinewidth,b.linewidth=G.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=s.properties.get(b);Y.light=K}return b}function N(V,G,K,D,b){if(V.visible===!1)return;if(V.layers.test(G.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&b===na)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,V.matrixWorld);const oe=e.update(V),pe=V.material;if(Array.isArray(pe)){const ce=oe.groups;for(let I=0,Q=ce.length;I<Q;I++){const W=ce[I],Se=pe[W.materialIndex];if(Se&&Se.visible){const O=P(V,Se,D,b);V.onBeforeShadow(s,V,G,K,oe,O,W),s.renderBufferDirect(K,null,oe,O,V,W),V.onAfterShadow(s,V,G,K,oe,O,W)}}}else if(pe.visible){const ce=P(V,pe,D,b);V.onBeforeShadow(s,V,G,K,oe,ce,null),s.renderBufferDirect(K,null,oe,ce,V,null),V.onAfterShadow(s,V,G,K,oe,ce,null)}}const Y=V.children;for(let oe=0,pe=Y.length;oe<pe;oe++)N(Y[oe],G,K,D,b)}function F(V){V.target.removeEventListener("dispose",F);for(const K in p){const D=p[K],b=V.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}const gR={[qd]:Yd,[Zd]:Jd,[Kd]:$d,[bs]:Qd,[Yd]:qd,[Jd]:Zd,[$d]:Kd,[Qd]:bs};function vR(s,e){function i(){let X=!1;const Re=new en;let De=null;const Fe=new en(0,0,0,0);return{setMask:function(Te){De!==Te&&!X&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){X=Te},setClear:function(Te,xe,Xe,rt,Nt){Nt===!0&&(Te*=rt,xe*=rt,Xe*=rt),Re.set(Te,xe,Xe,rt),Fe.equals(Re)===!1&&(s.clearColor(Te,xe,Xe,rt),Fe.copy(Re))},reset:function(){X=!1,De=null,Fe.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,De=null,Fe=null,Te=null;return{setReversed:function(xe){if(Re!==xe){const Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Re},setTest:function(xe){xe?ve(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(xe){De!==xe&&!X&&(s.depthMask(xe),De=xe)},setFunc:function(xe){if(Re&&(xe=gR[xe]),Fe!==xe){switch(xe){case qd:s.depthFunc(s.NEVER);break;case Yd:s.depthFunc(s.ALWAYS);break;case Zd:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Kd:s.depthFunc(s.EQUAL);break;case Qd:s.depthFunc(s.GEQUAL);break;case Jd:s.depthFunc(s.GREATER);break;case $d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Te!==xe&&(Re&&(xe=1-xe),s.clearDepth(xe),Te=xe)},reset:function(){X=!1,De=null,Fe=null,Te=null,Re=!1}}}function l(){let X=!1,Re=null,De=null,Fe=null,Te=null,xe=null,Xe=null,rt=null,Nt=null;return{setTest:function(bt){X||(bt?ve(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!X&&(s.stencilMask(bt),Re=bt)},setFunc:function(bt,fi,cn){(De!==bt||Fe!==fi||Te!==cn)&&(s.stencilFunc(bt,fi,cn),De=bt,Fe=fi,Te=cn)},setOp:function(bt,fi,cn){(xe!==bt||Xe!==fi||rt!==cn)&&(s.stencilOp(bt,fi,cn),xe=bt,Xe=fi,rt=cn)},setLocked:function(bt){X=bt},setClear:function(bt){Nt!==bt&&(s.clearStencil(bt),Nt=bt)},reset:function(){X=!1,Re=null,De=null,Fe=null,Te=null,xe=null,Xe=null,rt=null,Nt=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,A=!1,S=null,v=null,L=null,P=null,N=null,F=null,V=null,G=new Ct(0,0,0),K=0,D=!1,b=null,B=null,Y=null,oe=null,pe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=Q>=2);let Se=null,O={};const ne=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new en().fromArray(ne),Ue=new en().fromArray(ye);function Ge(X,Re,De,Fe){const Te=new Uint8Array(4),xe=s.createTexture();s.bindTexture(X,xe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<De;Xe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Re+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return xe}const ae={};ae[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(bs),et(!1),Ie(Fv),ve(s.CULL_FACE),Dt(ja);function ve(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ee(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Ke(X,Re){return _[X]!==Re?(s.bindFramebuffer(X,Re),_[X]=Re,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function qe(X,Re){let De=M,Fe=!1;if(X){De=x.get(Re),De===void 0&&(De=[],x.set(Re,De));const Te=X.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Xe=Te.length;xe<Xe;xe++)De[xe]=s.COLOR_ATTACHMENT0+xe;De.length=Te.length,Fe=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(De)}function ut(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const Zt={[yr]:s.FUNC_ADD,[MM]:s.FUNC_SUBTRACT,[EM]:s.FUNC_REVERSE_SUBTRACT};Zt[bM]=s.MIN,Zt[TM]=s.MAX;const H={[AM]:s.ZERO,[RM]:s.ONE,[wM]:s.SRC_COLOR,[Xd]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[UM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[CM]:s.ONE_MINUS_SRC_COLOR,[Wd]:s.ONE_MINUS_SRC_ALPHA,[LM]:s.ONE_MINUS_DST_COLOR,[NM]:s.ONE_MINUS_DST_ALPHA,[PM]:s.CONSTANT_COLOR,[BM]:s.ONE_MINUS_CONSTANT_COLOR,[IM]:s.CONSTANT_ALPHA,[FM]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(X,Re,De,Fe,Te,xe,Xe,rt,Nt,bt){if(X===ja){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(ve(s.BLEND),A=!0),X!==SM){if(X!==S||bt!==D){if((v!==yr||N!==yr)&&(s.blendEquation(s.FUNC_ADD),v=yr,N=yr),bt)switch(X){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jd:s.blendFunc(s.ONE,s.ONE);break;case zv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,P=null,F=null,V=null,G.set(0,0,0),K=0,S=X,D=bt}return}Te=Te||Re,xe=xe||De,Xe=Xe||Fe,(Re!==v||Te!==N)&&(s.blendEquationSeparate(Zt[Re],Zt[Te]),v=Re,N=Te),(De!==L||Fe!==P||xe!==F||Xe!==V)&&(s.blendFuncSeparate(H[De],H[Fe],H[xe],H[Xe]),L=De,P=Fe,F=xe,V=Xe),(rt.equals(G)===!1||Nt!==K)&&(s.blendColor(rt.r,rt.g,rt.b,Nt),G.copy(rt),K=Nt),S=X,D=!1}function st(X,Re){X.side===ia?Ee(s.CULL_FACE):ve(s.CULL_FACE);let De=X.side===Vn;Re&&(De=!De),et(De),X.blending===Ms&&X.transparent===!1?Dt(ja):Dt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Fe=X.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ve(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(X){b!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),b=X)}function Ie(X){X!==_M?(ve(s.CULL_FACE),X!==B&&(X===Fv?s.cullFace(s.BACK):X===xM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),B=X}function Mt(X){X!==Y&&(I&&s.lineWidth(X),Y=X)}function Ve(X,Re,De){X?(ve(s.POLYGON_OFFSET_FILL),(oe!==Re||pe!==De)&&(s.polygonOffset(Re,De),oe=Re,pe=De)):Ee(s.POLYGON_OFFSET_FILL)}function ot(X){X?ve(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Gt(X){X===void 0&&(X=s.TEXTURE0+ce-1),Se!==X&&(s.activeTexture(X),Se=X)}function Vt(X,Re,De){De===void 0&&(Se===null?De=s.TEXTURE0+ce-1:De=Se);let Fe=O[De];Fe===void 0&&(Fe={type:void 0,texture:void 0},O[De]=Fe),(Fe.type!==X||Fe.texture!==Re)&&(Se!==De&&(s.activeTexture(De),Se=De),s.bindTexture(X,Re||ae[X]),Fe.type=X,Fe.texture=Re)}function U(){const X=O[Se];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(X){Me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Qe(X){Ue.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function We(X,Re){let De=p.get(Re);De===void 0&&(De=new WeakMap,p.set(Re,De));let Fe=De.get(X);Fe===void 0&&(Fe=s.getUniformBlockIndex(Re,X.name),De.set(X,Fe))}function Ne(X,Re){const Fe=p.get(Re).get(X);m.get(Re)!==Fe&&(s.uniformBlockBinding(Re,Fe,X.__bindingPointIndex),m.set(Re,Fe))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Se=null,O={},_={},x=new WeakMap,M=[],T=null,A=!1,S=null,v=null,L=null,P=null,N=null,F=null,V=null,G=new Ct(0,0,0),K=0,D=!1,b=null,B=null,Y=null,oe=null,pe=null,Me.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ve,disable:Ee,bindFramebuffer:Ke,drawBuffers:qe,useProgram:ut,setBlending:Dt,setMaterial:st,setFlipSided:et,setCullFace:Ie,setLineWidth:Mt,setPolygonOffset:Ve,setScissorTest:ot,activeTexture:Gt,bindTexture:Vt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:je,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:ze,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:re,compressedTexSubImage3D:Ce,scissor:Oe,viewport:Qe,reset:lt}}function _R(s,e,i,r,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,y){return M?new OffscreenCanvas(U,y):jc("canvas")}function A(U,y,k){let $=1;const de=Vt(U);if((de.width>k||de.height>k)&&($=k/Math.max(de.width,de.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const re=Math.floor($*de.width),Ce=Math.floor($*de.height);_===void 0&&(_=T(re,Ce));const we=y?T(re,Ce):_;return we.width=re,we.height=Ce,we.getContext("2d").drawImage(U,0,0,re,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+re+"x"+Ce+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(U,y,k,$,de=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let re=y;if(y===s.RED&&(k===s.FLOAT&&(re=s.R32F),k===s.HALF_FLOAT&&(re=s.R16F),k===s.UNSIGNED_BYTE&&(re=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(re=s.R8UI),k===s.UNSIGNED_SHORT&&(re=s.R16UI),k===s.UNSIGNED_INT&&(re=s.R32UI),k===s.BYTE&&(re=s.R8I),k===s.SHORT&&(re=s.R16I),k===s.INT&&(re=s.R32I)),y===s.RG&&(k===s.FLOAT&&(re=s.RG32F),k===s.HALF_FLOAT&&(re=s.RG16F),k===s.UNSIGNED_BYTE&&(re=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(re=s.RG8UI),k===s.UNSIGNED_SHORT&&(re=s.RG16UI),k===s.UNSIGNED_INT&&(re=s.RG32UI),k===s.BYTE&&(re=s.RG8I),k===s.SHORT&&(re=s.RG16I),k===s.INT&&(re=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(re=s.RGB8UI),k===s.UNSIGNED_SHORT&&(re=s.RGB16UI),k===s.UNSIGNED_INT&&(re=s.RGB32UI),k===s.BYTE&&(re=s.RGB8I),k===s.SHORT&&(re=s.RGB16I),k===s.INT&&(re=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),k===s.UNSIGNED_INT&&(re=s.RGBA32UI),k===s.BYTE&&(re=s.RGBA8I),k===s.SHORT&&(re=s.RGBA16I),k===s.INT&&(re=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),y===s.RGBA){const Ce=de?Vc:Rt.getTransfer($);k===s.FLOAT&&(re=s.RGBA32F),k===s.HALF_FLOAT&&(re=s.RGBA16F),k===s.UNSIGNED_BYTE&&(re=Ce===Ft?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function N(U,y){let k;return U?y===null||y===br||y===Ho?k=s.DEPTH24_STENCIL8:y===Ui?k=s.DEPTH32F_STENCIL8:y===zo&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===br||y===Ho?k=s.DEPTH_COMPONENT24:y===Ui?k=s.DEPTH_COMPONENT32F:y===zo&&(k=s.DEPTH_COMPONENT16),k}function F(U,y){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==$n&&U.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function V(U){const y=U.target;y.removeEventListener("dispose",V),K(y),y.isVideoTexture&&g.delete(y)}function G(U){const y=U.target;y.removeEventListener("dispose",G),b(y)}function K(U){const y=r.get(U);if(y.__webglInit===void 0)return;const k=U.source,$=x.get(k);if($){const de=$[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(U),Object.keys($).length===0&&x.delete(k)}r.remove(U)}function D(U){const y=r.get(U);s.deleteTexture(y.__webglTexture);const k=U.source,$=x.get(k);delete $[y.__cacheKey],f.memory.textures--}function b(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let de=0;de<y.__webglFramebuffer[$].length;de++)s.deleteFramebuffer(y.__webglFramebuffer[$][de]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=U.textures;for(let $=0,de=k.length;$<de;$++){const re=r.get(k[$]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),f.memory.textures--),r.remove(k[$])}r.remove(U)}let B=0;function Y(){B=0}function oe(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function pe(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function ce(U,y){const k=r.get(U);if(U.isVideoTexture&&ot(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&k.__version!==U.version){const $=U.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,U,y);return}}else U.isExternalTexture&&(k.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function I(U,y){const k=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){ae(k,U,y);return}i.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Q(U,y){const k=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&k.__version!==U.version){ae(k,U,y);return}i.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function W(U,y){const k=r.get(U);if(U.version>0&&k.__version!==U.version){ve(k,U,y);return}i.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const Se={[nh]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},O={[$n]:s.NEAREST,[YM]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[cd]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},ne={[$M]:s.NEVER,[rE]:s.ALWAYS,[eE]:s.LESS,[h_]:s.LEQUAL,[tE]:s.EQUAL,[aE]:s.GEQUAL,[nE]:s.GREATER,[iE]:s.NOTEQUAL};function ye(U,y){if(y.type===Ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===cd||y.magFilter===lc||y.magFilter===Mr||y.minFilter===Gn||y.minFilter===cd||y.minFilter===lc||y.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Se[y.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Se[y.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Se[y.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,O[y.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,O[y.minFilter]),y.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$n||y.minFilter!==lc&&y.minFilter!==Mr||y.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Me(U,y){let k=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",V));const $=y.source;let de=x.get($);de===void 0&&(de={},x.set($,de));const re=pe(y);if(re!==U.__cacheKey){de[re]===void 0&&(de[re]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,k=!0),de[re].usedTimes++;const Ce=de[U.__cacheKey];Ce!==void 0&&(de[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&D(y)),U.__cacheKey=re,U.__webglTexture=de[re].texture}return k}function Ue(U,y,k){return Math.floor(Math.floor(U/k)/y)}function Ge(U,y,k,$){const re=U.updateRanges;if(re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,$,y.data);else{re.sort((be,Oe)=>be.start-Oe.start);let Ce=0;for(let be=1;be<re.length;be++){const Oe=re[Ce],Qe=re[be],We=Oe.start+Oe.count,Ne=Ue(Qe.start,y.width,4),lt=Ue(Oe.start,y.width,4);Qe.start<=We+1&&Ne===lt&&Ue(Qe.start+Qe.count-1,y.width,4)===Ne?Oe.count=Math.max(Oe.count,Qe.start+Qe.count-Oe.start):(++Ce,re[Ce]=Qe)}re.length=Ce+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let be=0,Oe=re.length;be<Oe;be++){const Qe=re[be],We=Math.floor(Qe.start/4),Ne=Math.ceil(Qe.count/4),lt=We%y.width,X=Math.floor(We/y.width),Re=Ne,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,lt,X,Re,De,k,$,y.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ae(U,y,k){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const de=Me(U,y),re=y.source;i.bindTexture($,U.__webglTexture,s.TEXTURE0+k);const Ce=r.get(re);if(re.version!==Ce.__version||de===!0){i.activeTexture(s.TEXTURE0+k);const we=Rt.getPrimaries(Rt.workingColorSpace),ze=y.colorSpace===ka?null:Rt.getPrimaries(y.colorSpace),je=y.colorSpace===ka||we===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=A(y.image,!1,l.maxTextureSize);be=Gt(y,be);const Oe=c.convert(y.format,y.colorSpace),Qe=c.convert(y.type);let We=P(y.internalFormat,Oe,Qe,y.colorSpace,y.isVideoTexture);ye($,y);let Ne;const lt=y.mipmaps,X=y.isVideoTexture!==!0,Re=Ce.__version===void 0||de===!0,De=re.dataReady,Fe=F(y,be);if(y.isDepthTexture)We=N(y.format===Vo,y.type),Re&&(X?i.texStorage2D(s.TEXTURE_2D,1,We,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,We,be.width,be.height,0,Oe,Qe,null));else if(y.isDataTexture)if(lt.length>0){X&&Re&&i.texStorage2D(s.TEXTURE_2D,Fe,We,lt[0].width,lt[0].height);for(let Te=0,xe=lt.length;Te<xe;Te++)Ne=lt[Te],X?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Oe,Qe,Ne.data):i.texImage2D(s.TEXTURE_2D,Te,We,Ne.width,Ne.height,0,Oe,Qe,Ne.data);y.generateMipmaps=!1}else X?(Re&&i.texStorage2D(s.TEXTURE_2D,Fe,We,be.width,be.height),De&&Ge(y,be,Oe,Qe)):i.texImage2D(s.TEXTURE_2D,0,We,be.width,be.height,0,Oe,Qe,be.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&Re&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,We,lt[0].width,lt[0].height,be.depth);for(let Te=0,xe=lt.length;Te<xe;Te++)if(Ne=lt[Te],y.format!==ci)if(Oe!==null)if(X){if(De)if(y.layerUpdates.size>0){const Xe=d0(Ne.width,Ne.height,y.format,y.type);for(const rt of y.layerUpdates){const Nt=Ne.data.subarray(rt*Xe/Ne.data.BYTES_PER_ELEMENT,(rt+1)*Xe/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,rt,Ne.width,Ne.height,1,Oe,Nt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,be.depth,Oe,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,We,Ne.width,Ne.height,be.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,be.depth,Oe,Qe,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,We,Ne.width,Ne.height,be.depth,0,Oe,Qe,Ne.data)}else{X&&Re&&i.texStorage2D(s.TEXTURE_2D,Fe,We,lt[0].width,lt[0].height);for(let Te=0,xe=lt.length;Te<xe;Te++)Ne=lt[Te],y.format!==ci?Oe!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Oe,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,We,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Oe,Qe,Ne.data):i.texImage2D(s.TEXTURE_2D,Te,We,Ne.width,Ne.height,0,Oe,Qe,Ne.data)}else if(y.isDataArrayTexture)if(X){if(Re&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,We,be.width,be.height,be.depth),De)if(y.layerUpdates.size>0){const Te=d0(be.width,be.height,y.format,y.type);for(const xe of y.layerUpdates){const Xe=be.data.subarray(xe*Te/be.data.BYTES_PER_ELEMENT,(xe+1)*Te/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Oe,Qe,Xe)}y.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Oe,Qe,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,We,be.width,be.height,be.depth,0,Oe,Qe,be.data);else if(y.isData3DTexture)X?(Re&&i.texStorage3D(s.TEXTURE_3D,Fe,We,be.width,be.height,be.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Oe,Qe,be.data)):i.texImage3D(s.TEXTURE_3D,0,We,be.width,be.height,be.depth,0,Oe,Qe,be.data);else if(y.isFramebufferTexture){if(Re)if(X)i.texStorage2D(s.TEXTURE_2D,Fe,We,be.width,be.height);else{let Te=be.width,xe=be.height;for(let Xe=0;Xe<Fe;Xe++)i.texImage2D(s.TEXTURE_2D,Xe,We,Te,xe,0,Oe,Qe,null),Te>>=1,xe>>=1}}else if(lt.length>0){if(X&&Re){const Te=Vt(lt[0]);i.texStorage2D(s.TEXTURE_2D,Fe,We,Te.width,Te.height)}for(let Te=0,xe=lt.length;Te<xe;Te++)Ne=lt[Te],X?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Oe,Qe,Ne):i.texImage2D(s.TEXTURE_2D,Te,We,Oe,Qe,Ne);y.generateMipmaps=!1}else if(X){if(Re){const Te=Vt(be);i.texStorage2D(s.TEXTURE_2D,Fe,We,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,be)}else i.texImage2D(s.TEXTURE_2D,0,We,Oe,Qe,be);S(y)&&v($),Ce.__version=re.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function ve(U,y,k){if(y.image.length!==6)return;const $=Me(U,y),de=y.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+k);const re=r.get(de);if(de.version!==re.__version||$===!0){i.activeTexture(s.TEXTURE0+k);const Ce=Rt.getPrimaries(Rt.workingColorSpace),we=y.colorSpace===ka?null:Rt.getPrimaries(y.colorSpace),ze=y.colorSpace===ka||Ce===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,be=y.image[0]&&y.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!je&&!be?Oe[xe]=A(y.image[xe],!0,l.maxCubemapSize):Oe[xe]=be?y.image[xe].image:y.image[xe],Oe[xe]=Gt(y,Oe[xe]);const Qe=Oe[0],We=c.convert(y.format,y.colorSpace),Ne=c.convert(y.type),lt=P(y.internalFormat,We,Ne,y.colorSpace),X=y.isVideoTexture!==!0,Re=re.__version===void 0||$===!0,De=de.dataReady;let Fe=F(y,Qe);ye(s.TEXTURE_CUBE_MAP,y);let Te;if(je){X&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,lt,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){Te=Oe[xe].mipmaps;for(let Xe=0;Xe<Te.length;Xe++){const rt=Te[Xe];y.format!==ci?We!==null?X?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,rt.width,rt.height,We,rt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,rt.width,rt.height,We,Ne,rt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,lt,rt.width,rt.height,0,We,Ne,rt.data)}}}else{if(Te=y.mipmaps,X&&Re){Te.length>0&&Fe++;const xe=Vt(Oe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,We,Ne,Oe[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Oe[xe].width,Oe[xe].height,0,We,Ne,Oe[xe].data);for(let Xe=0;Xe<Te.length;Xe++){const Nt=Te[Xe].image[xe].image;X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,Nt.width,Nt.height,We,Ne,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,lt,Nt.width,Nt.height,0,We,Ne,Nt.data)}}else{X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We,Ne,Oe[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,We,Ne,Oe[xe]);for(let Xe=0;Xe<Te.length;Xe++){const rt=Te[Xe];X?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,We,Ne,rt.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,lt,We,Ne,rt.image[xe])}}}S(y)&&v(s.TEXTURE_CUBE_MAP),re.__version=de.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Ee(U,y,k,$,de,re){const Ce=c.convert(k.format,k.colorSpace),we=c.convert(k.type),ze=P(k.internalFormat,Ce,we,k.colorSpace),je=r.get(y),be=r.get(k);if(be.__renderTarget=y,!je.__hasExternalTextures){const Oe=Math.max(1,y.width>>re),Qe=Math.max(1,y.height>>re);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?i.texImage3D(de,re,ze,Oe,Qe,y.depth,0,Ce,we,null):i.texImage2D(de,re,ze,Oe,Qe,0,Ce,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Ve(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,de,be.__webglTexture,0,Mt(y)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,de,be.__webglTexture,re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(U,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,U),y.depthBuffer){const $=y.depthTexture,de=$&&$.isDepthTexture?$.type:null,re=N(y.stencilBuffer,de),Ce=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=Mt(y);Ve(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,re,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,re,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,re,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,U)}else{const $=y.textures;for(let de=0;de<$.length;de++){const re=$[de],Ce=c.convert(re.format,re.colorSpace),we=c.convert(re.type),ze=P(re.internalFormat,Ce,we,re.colorSpace),je=Mt(y);k&&Ve(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ze,y.width,y.height):Ve(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,ze,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ze,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(U,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce(y.depthTexture,0);const de=$.__webglTexture,re=Mt(y);if(y.depthTexture.format===Go)Ve(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(y.depthTexture.format===Vo)Ve(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ut(U){const y=r.get(U),k=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",de)};$.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=$}if(U.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=U.texture.mipmaps;$&&$.length>0?qe(y.__webglFramebuffer[0],U):qe(y.__webglFramebuffer,U)}else if(k){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),Ke(y.__webglDepthbuffer[$],U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,re)}}else{const $=U.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ke(y.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(U,y,k){const $=r.get(U);y!==void 0&&Ee($.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ut(U)}function H(U){const y=U.texture,k=r.get(U),$=r.get(y);U.addEventListener("dispose",G);const de=U.textures,re=U.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,f.memory.textures++),re){k.__webglFramebuffer=[];for(let we=0;we<6;we++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[we]=[];for(let ze=0;ze<y.mipmaps.length;ze++)k.__webglFramebuffer[we][ze]=s.createFramebuffer()}else k.__webglFramebuffer[we]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let we=0;we<y.mipmaps.length;we++)k.__webglFramebuffer[we]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let we=0,ze=de.length;we<ze;we++){const je=r.get(de[we]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&Ve(U)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let we=0;we<de.length;we++){const ze=de[we];k.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[we]);const je=c.convert(ze.format,ze.colorSpace),be=c.convert(ze.type),Oe=P(ze.internalFormat,je,be,ze.colorSpace,U.isXRRenderTarget===!0),Qe=Mt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,k.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(k.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ye(s.TEXTURE_CUBE_MAP,y);for(let we=0;we<6;we++)if(y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Ee(k.__webglFramebuffer[we][ze],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else Ee(k.__webglFramebuffer[we],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(y)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let we=0,ze=de.length;we<ze;we++){const je=de[we],be=r.get(je);let Oe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,be.__webglTexture),ye(Oe,je),Ee(k.__webglFramebuffer,U,je,s.COLOR_ATTACHMENT0+we,Oe,0),S(je)&&v(Oe)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,$.__webglTexture),ye(we,y),y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Ee(k.__webglFramebuffer[ze],U,y,s.COLOR_ATTACHMENT0,we,ze);else Ee(k.__webglFramebuffer,U,y,s.COLOR_ATTACHMENT0,we,0);S(y)&&v(we),i.unbindTexture()}U.depthBuffer&&ut(U)}function Dt(U){const y=U.textures;for(let k=0,$=y.length;k<$;k++){const de=y[k];if(S(de)){const re=L(U),Ce=r.get(de).__webglTexture;i.bindTexture(re,Ce),v(re),i.unbindTexture()}}}const st=[],et=[];function Ie(U){if(U.samples>0){if(Ve(U)===!1){const y=U.textures,k=U.width,$=U.height;let de=s.COLOR_BUFFER_BIT;const re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(U),we=y.length>1;if(we)for(let je=0;je<y.length;je++)i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ze=U.texture.mipmaps;ze&&ze.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let je=0;je<y.length;je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[je]);const be=r.get(y[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,de,s.NEAREST),m===!0&&(st.length=0,et.length=0,st.push(s.COLOR_ATTACHMENT0+je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(st.push(re),et.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let je=0;je<y.length;je++){i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[je]);const be=r.get(y[je]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Mt(U){return Math.min(l.maxSamples,U.samples)}function Ve(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ot(U){const y=f.render.frame;g.get(U)!==y&&(g.set(U,y),U.update())}function Gt(U,y){const k=U.colorSpace,$=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||k!==Rs&&k!==ka&&(Rt.getTransfer(k)===Ft?($!==ci||de!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=Y,this.setTexture2D=ce,this.setTexture2DArray=I,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ve}function xR(s,e){function i(r,l=ka){let c;const f=Rt.getTransfer(l);if(r===la)return s.UNSIGNED_BYTE;if(r===jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===o_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===l_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===r_)return s.BYTE;if(r===s_)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===kh)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Ns)return s.HALF_FLOAT;if(r===c_)return s.ALPHA;if(r===u_)return s.RGB;if(r===ci)return s.RGBA;if(r===Go)return s.DEPTH_COMPONENT;if(r===Vo)return s.DEPTH_STENCIL;if(r===f_)return s.RED;if(r===Wh)return s.RED_INTEGER;if(r===d_)return s.RG;if(r===qh)return s.RG_INTEGER;if(r===Yh)return s.RGBA_INTEGER;if(r===Bc||r===Ic||r===Fc||r===zc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===rh||r===sh||r===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===lh||r===ch)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===uh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Sh||r===Mh||r===Eh||r===bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Th||r===Ah||r===Rh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Th)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wh||r===Ch||r===Dh||r===Nh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===wh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
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

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new A_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ua({vertexShader:yR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Er(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Us{constructor(e,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",S=new MR,v={},L=i.getContextAttributes();let P=null,N=null;const F=[],V=[],G=new ct;let K=null;const D=new xi;D.viewport=new en;const b=new xi;b.viewport=new en;const B=[D,b],Y=new kE;let oe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=F[ae];return ve===void 0&&(ve=new Ud,F[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=F[ae];return ve===void 0&&(ve=new Ud,F[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=F[ae];return ve===void 0&&(ve=new Ud,F[ae]=ve),ve.getHandSpace()};function ce(ae){const ve=V.indexOf(ae.inputSource);if(ve===-1)return;const Ee=F[ve];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,p||f),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",Q);for(let ae=0;ae<F.length;ae++){const ve=V[ae];ve!==null&&(V[ae]=null,F[ae].disconnect(ve))}oe=null,pe=null,S.reset();for(const ae in v)delete v[ae];e.setRenderTarget(P),M=null,x=null,_=null,l=null,N=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",I),l.addEventListener("inputsourceschange",Q),L.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(G),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ke=null,qe=null;L.depth&&(qe=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=L.stencil?Vo:Go,Ke=L.stencil?Ho:br);const ut={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(ut),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new qa(x.textureWidth,x.textureHeight,{format:ci,type:la,depthTexture:new T_(x.textureWidth,x.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new qa(M.framebufferWidth,M.framebufferHeight,{format:ci,type:la,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(ae){for(let ve=0;ve<ae.removed.length;ve++){const Ee=ae.removed[ve],Ke=V.indexOf(Ee);Ke>=0&&(V[Ke]=null,F[Ke].disconnect(Ee))}for(let ve=0;ve<ae.added.length;ve++){const Ee=ae.added[ve];let Ke=V.indexOf(Ee);if(Ke===-1){for(let ut=0;ut<F.length;ut++)if(ut>=V.length){V.push(Ee),Ke=ut;break}else if(V[ut]===null){V[ut]=Ee,Ke=ut;break}if(Ke===-1)break}const qe=F[Ke];qe&&qe.connect(Ee)}}const W=new ue,Se=new ue;function O(ae,ve,Ee){W.setFromMatrixPosition(ve.matrixWorld),Se.setFromMatrixPosition(Ee.matrixWorld);const Ke=W.distanceTo(Se),qe=ve.projectionMatrix.elements,ut=Ee.projectionMatrix.elements,Zt=qe[14]/(qe[10]-1),H=qe[14]/(qe[10]+1),Dt=(qe[9]+1)/qe[5],st=(qe[9]-1)/qe[5],et=(qe[8]-1)/qe[0],Ie=(ut[8]+1)/ut[0],Mt=Zt*et,Ve=Zt*Ie,ot=Ke/(-et+Ie),Gt=ot*-et;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Gt),ae.translateZ(ot),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),qe[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Vt=Zt+ot,U=H+ot,y=Mt-Gt,k=Ve+(Ke-Gt),$=Dt*H/U*Vt,de=st*H/U*Vt;ae.projectionMatrix.makePerspective(y,k,$,de,Vt,U),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ne(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ve=ae.near,Ee=ae.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),Y.near=b.near=D.near=ve,Y.far=b.far=D.far=Ee,(oe!==Y.near||pe!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),oe=Y.near,pe=Y.far),Y.layers.mask=ae.layers.mask|6,D.layers.mask=Y.layers.mask&3,b.layers.mask=Y.layers.mask&5;const Ke=ae.parent,qe=Y.cameras;ne(Y,Ke);for(let ut=0;ut<qe.length;ut++)ne(qe[ut],Ke);qe.length===2?O(Y,D,b):Y.projectionMatrix.copy(D.projectionMatrix),ye(ae,Y,Ke)};function ye(ae,ve,Ee){Ee===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Uh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(ae){m=ae,x!==null&&(x.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ae){return v[ae]};let Me=null;function Ue(ae,ve){if(g=ve.getViewerPose(p||f),T=ve,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ke=!1;Ee.length!==Y.cameras.length&&(Y.cameras.length=0,Ke=!0);for(let H=0;H<Ee.length;H++){const Dt=Ee[H];let st=null;if(M!==null)st=M.getViewport(Dt);else{const Ie=_.getViewSubImage(x,Dt);st=Ie.viewport,H===0&&(e.setRenderTargetTextures(N,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(N))}let et=B[H];et===void 0&&(et=new xi,et.layers.enable(H),et.viewport=new en,B[H]=et),et.matrix.fromArray(Dt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Dt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),H===0&&(Y.matrix.copy(et.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ke===!0&&Y.cameras.push(et)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const H=_.getDepthInformation(Ee[0]);H&&H.isValid&&H.texture&&S.init(H,l.renderState)}if(qe&&qe.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let H=0;H<Ee.length;H++){const Dt=Ee[H].camera;if(Dt){let st=v[Dt];st||(st=new A_,v[Dt]=st);const et=_.getCameraImage(Dt);st.sourceTexture=et}}}}for(let Ee=0;Ee<F.length;Ee++){const Ke=V[Ee],qe=F[Ee];Ke!==null&&qe!==void 0&&qe.update(Ke,ve,p||f)}Me&&Me(ae,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),T=null}const Ge=new R_;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const gr=new ca,bR=new ln;function TR(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,M_(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,L,P,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,N)):v.isMeshMatcapMaterial?(c(S,v),T(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,L,P):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Vn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Vn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,N=L.envMapRotation;P&&(S.envMap.value=P,gr.copy(N),gr.x*=-1,gr.y*=-1,gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),S.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(gr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,P){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=P*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,e,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,P){const N=P.program;r.uniformBlockBinding(L,N)}function p(L,P){let N=l[L.id];N===void 0&&(T(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",S));const F=P.program;r.updateUBOMapping(L,F);const V=e.render.frame;c[L.id]!==V&&(x(L),c[L.id]=V)}function g(L){const P=_();L.__bindingPointIndex=P;const N=s.createBuffer(),F=L.__size,V=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,F,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const P=l[L.id],N=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let V=0,G=N.length;V<G;V++){const K=Array.isArray(N[V])?N[V]:[N[V]];for(let D=0,b=K.length;D<b;D++){const B=K[D];if(M(B,V,D,F)===!0){const Y=B.__offset,oe=Array.isArray(B.value)?B.value:[B.value];let pe=0;for(let ce=0;ce<oe.length;ce++){const I=oe[ce],Q=A(I);typeof I=="number"||typeof I=="boolean"?(B.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,Y+pe,B.__data)):I.isMatrix3?(B.__data[0]=I.elements[0],B.__data[1]=I.elements[1],B.__data[2]=I.elements[2],B.__data[3]=0,B.__data[4]=I.elements[3],B.__data[5]=I.elements[4],B.__data[6]=I.elements[5],B.__data[7]=0,B.__data[8]=I.elements[6],B.__data[9]=I.elements[7],B.__data[10]=I.elements[8],B.__data[11]=0):(I.toArray(B.__data,pe),pe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,P,N,F){const V=L.value,G=P+"_"+N;if(F[G]===void 0)return typeof V=="number"||typeof V=="boolean"?F[G]=V:F[G]=V.clone(),!0;{const K=F[G];if(typeof V=="number"||typeof V=="boolean"){if(K!==V)return F[G]=V,!0}else if(K.equals(V)===!1)return K.copy(V),!0}return!1}function T(L){const P=L.uniforms;let N=0;const F=16;for(let G=0,K=P.length;G<K;G++){const D=Array.isArray(P[G])?P[G]:[P[G]];for(let b=0,B=D.length;b<B;b++){const Y=D[b],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let pe=0,ce=oe.length;pe<ce;pe++){const I=oe[pe],Q=A(I),W=N%F,Se=W%Q.boundary,O=W+Se;N+=Se,O!==0&&F-O<Q.storage&&(N+=F-O),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=N,N+=Q.storage}}}const V=N%F;return V>0&&(N+=F-V),L.__size=N,L.__cache={},this}function A(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function v(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class RR{constructor(e={}){const{canvas:i=oE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const L=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=li;let V=0,G=0,K=null,D=-1,b=null;const B=new en,Y=new en;let oe=null;const pe=new Ct(0);let ce=0,I=i.width,Q=i.height,W=1,Se=null,O=null;const ne=new en(0,0,I,Q),ye=new en(0,0,I,Q);let Me=!1;const Ue=new b_;let Ge=!1,ae=!1;const ve=new ln,Ee=new ue,Ke=new en,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Zt(){return K===null?W:1}let H=r;function Dt(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vh}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),H===null){const q="webgl2";if(H=Dt(q,C),H===null)throw Dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let st,et,Ie,Mt,Ve,ot,Gt,Vt,U,y,k,$,de,re,Ce,we,ze,je,be,Oe,Qe,We,Ne,lt;function X(){st=new IA(H),st.init(),We=new xR(H,st),et=new DA(H,st,e,We),Ie=new vR(H,st),et.reversedDepthBuffer&&x&&Ie.buffers.depth.setReversed(!0),Mt=new HA(H),Ve=new aR,ot=new _R(H,st,Ie,Ve,et,We,Mt),Gt=new UA(N),Vt=new BA(N),U=new WE(H),Ne=new wA(H,U),y=new FA(H,U,Mt,Ne),k=new VA(H,y,U,Mt),be=new GA(H,et,ot),we=new NA(Ve),$=new iR(N,Gt,Vt,st,et,Ne,we),de=new TR(N,Ve),re=new sR,Ce=new dR(st),je=new RA(N,Gt,Vt,Ie,k,M,m),ze=new mR(N,k,et),lt=new AR(H,Mt,et,Ie),Oe=new CA(H,st,Mt),Qe=new zA(H,st,Mt),Mt.programs=$.programs,N.capabilities=et,N.extensions=st,N.properties=Ve,N.renderLists=re,N.shadowMap=ze,N.state=Ie,N.info=Mt}X();const Re=new ER(N,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(I,Q,!1))},this.getSize=function(C){return C.set(I,Q)},this.setSize=function(C,q,fe=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,Q=q,i.width=Math.floor(C*W),i.height=Math.floor(q*W),fe===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(I*W,Q*W).floor()},this.setDrawingBufferSize=function(C,q,fe){I=C,Q=q,W=fe,i.width=Math.floor(C*fe),i.height=Math.floor(q*fe),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,q,fe,he){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,q,fe,he),Ie.viewport(B.copy(ne).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,q,fe,he){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,q,fe,he),Ie.scissor(Y.copy(ye).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){Ie.setScissorTest(Me=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,fe=!0){let he=0;if(C){let J=!1;if(K!==null){const Ae=K.texture.format;J=Ae===Yh||Ae===qh||Ae===Wh}if(J){const Ae=K.texture.type,Le=Ae===la||Ae===br||Ae===zo||Ae===Ho||Ae===jh||Ae===Xh,He=je.getClearColor(),Pe=je.getClearAlpha(),$e=He.r,nt=He.g,Ye=He.b;Le?(T[0]=$e,T[1]=nt,T[2]=Ye,T[3]=Pe,H.clearBufferuiv(H.COLOR,0,T)):(A[0]=$e,A[1]=nt,A[2]=Ye,A[3]=Pe,H.clearBufferiv(H.COLOR,0,A))}else he|=H.COLOR_BUFFER_BIT}q&&(he|=H.DEPTH_BUFFER_BIT),fe&&(he|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),je.dispose(),re.dispose(),Ce.dispose(),Ve.dispose(),Gt.dispose(),Vt.dispose(),k.dispose(),Ne.dispose(),lt.dispose(),$.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",cn),Re.removeEventListener("sessionend",un),Kt.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Mt.autoReset,q=ze.enabled,fe=ze.autoUpdate,he=ze.needsUpdate,J=ze.type;X(),Mt.autoReset=C,ze.enabled=q,ze.autoUpdate=fe,ze.needsUpdate=he,ze.type=J}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const q=C.target;q.removeEventListener("dispose",xe),Xe(q)}function Xe(C){rt(C),Ve.remove(C)}function rt(C){const q=Ve.get(C).programs;q!==void 0&&(q.forEach(function(fe){$.releaseProgram(fe)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,fe,he,J,Ae){q===null&&(q=qe);const Le=J.isMesh&&J.matrixWorld.determinant()<0,He=ha(C,q,fe,he,J);Ie.setMaterial(he,Le);let Pe=fe.index,$e=1;if(he.wireframe===!0){if(Pe=y.getWireframeAttribute(fe),Pe===void 0)return;$e=2}const nt=fe.drawRange,Ye=fe.attributes.position;let ht=nt.start*$e,Tt=(nt.start+nt.count)*$e;Ae!==null&&(ht=Math.max(ht,Ae.start*$e),Tt=Math.min(Tt,(Ae.start+Ae.count)*$e)),Pe!==null?(ht=Math.max(ht,0),Tt=Math.min(Tt,Pe.count)):Ye!=null&&(ht=Math.max(ht,0),Tt=Math.min(Tt,Ye.count));const Xt=Tt-ht;if(Xt<0||Xt===1/0)return;Ne.setup(J,he,He,fe,Pe);let Ot,pt=Oe;if(Pe!==null&&(Ot=U.get(Pe),pt=Qe,pt.setIndex(Ot)),J.isMesh)he.wireframe===!0?(Ie.setLineWidth(he.wireframeLinewidth*Zt()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(J.isLine){let Je=he.linewidth;Je===void 0&&(Je=1),Ie.setLineWidth(Je*Zt()),J.isLineSegments?pt.setMode(H.LINES):J.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else J.isPoints?pt.setMode(H.POINTS):J.isSprite&&pt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Je=J._multiDrawStarts,jt=J._multiDrawCounts,_t=J._multiDrawCount,bn=Pe?U.get(Pe).bytesPerElement:1,di=Ve.get(he).currentProgram.getUniforms();for(let Dn=0;Dn<_t;Dn++)di.setValue(H,"_gl_DrawID",Dn),pt.render(Je[Dn]/bn,jt[Dn])}else if(J.isInstancedMesh)pt.renderInstances(ht,Xt,J.count);else if(fe.isInstancedBufferGeometry){const Je=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,jt=Math.min(fe.instanceCount,Je);pt.renderInstances(ht,Xt,jt)}else pt.render(ht,Xt)};function Nt(C,q,fe){C.transparent===!0&&C.side===ia&&C.forceSinglePass===!1?(C.side=Vn,C.needsUpdate=!0,Ti(C,q,fe),C.side=Wa,C.needsUpdate=!0,Ti(C,q,fe),C.side=ia):Ti(C,q,fe)}this.compile=function(C,q,fe=null){fe===null&&(fe=C),v=Ce.get(fe),v.init(q),P.push(v),fe.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),C!==fe&&C.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights();const he=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const He=Ae[Le];Nt(He,fe,J),he.add(He)}else Nt(Ae,fe,J),he.add(Ae)}),v=P.pop(),he},this.compileAsync=function(C,q,fe=null){const he=this.compile(C,q,fe);return new Promise(J=>{function Ae(){if(he.forEach(function(Le){Ve.get(Le).currentProgram.isReady()&&he.delete(Le)}),he.size===0){J(C);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let bt=null;function fi(C){bt&&bt(C)}function cn(){Kt.stop()}function un(){Kt.start()}const Kt=new R_;Kt.setAnimationLoop(fi),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){bt=C,Re.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},Re.addEventListener("sessionstart",cn),Re.addEventListener("sessionend",un),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,q,K),v=Ce.get(C,P.length),v.init(q),P.push(v),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ue.setFromProjectionMatrix(ve,Li,q.reversedDepth),ae=this.localClippingEnabled,Ge=we.init(this.clippingPlanes,ae),S=re.get(C,L.length),S.init(),L.push(S),Re.enabled===!0&&Re.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&bi(Ae,q,-1/0,N.sortObjects)}bi(C,q,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(Se,O),ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ut&&je.addToRenderList(S,C),this.info.render.frame++,Ge===!0&&we.beginShadows();const fe=v.state.shadowsArray;ze.render(fe,C,q),Ge===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=S.opaque,J=S.transmissive;if(v.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(J.length>0)for(let Le=0,He=Ae.length;Le<He;Le++){const Pe=Ae[Le];Jo(he,J,C,Pe)}ut&&je.render(C);for(let Le=0,He=Ae.length;Le<He;Le++){const Pe=Ae[Le];Ar(S,C,Pe,Pe.viewport)}}else J.length>0&&Jo(he,J,C,q),ut&&je.render(C),Ar(S,C,q);K!==null&&G===0&&(ot.updateMultisampleRenderTarget(K),ot.updateRenderTargetMipmap(K)),C.isScene===!0&&C.onAfterRender(N,C,q),Ne.resetDefaultState(),D=-1,b=null,P.pop(),P.length>0?(v=P[P.length-1],Ge===!0&&we.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function bi(C,q,fe,he){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ue.intersectsSprite(C)){he&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Le=k.update(C),He=C.material;He.visible&&S.push(C,Le,He,fe,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ue.intersectsObject(C))){const Le=k.update(C),He=C.material;if(he&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ke.copy(Le.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(He)){const Pe=Le.groups;for(let $e=0,nt=Pe.length;$e<nt;$e++){const Ye=Pe[$e],ht=He[Ye.materialIndex];ht&&ht.visible&&S.push(C,Le,ht,fe,Ke.z,Ye)}}else He.visible&&S.push(C,Le,He,fe,Ke.z,null)}}const Ae=C.children;for(let Le=0,He=Ae.length;Le<He;Le++)bi(Ae[Le],q,fe,he)}function Ar(C,q,fe,he){const J=C.opaque,Ae=C.transmissive,Le=C.transparent;v.setupLightsView(fe),Ge===!0&&we.setGlobalState(N.clippingPlanes,fe),he&&Ie.viewport(B.copy(he)),J.length>0&&Rr(J,q,fe),Ae.length>0&&Rr(Ae,q,fe),Le.length>0&&Rr(Le,q,fe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Jo(C,q,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[he.id]===void 0&&(v.state.transmissionRenderTarget[he.id]=new qa(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ns:la,minFilter:Mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[he.id],Le=he.viewport||B;Ae.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const He=N.getRenderTarget(),Pe=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(pe),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),ut&&je.render(fe);const nt=N.toneMapping;N.toneMapping=Xa;const Ye=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),v.setupLightsView(he),Ge===!0&&we.setGlobalState(N.clippingPlanes,he),Rr(C,fe,he),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Tt=0,Xt=q.length;Tt<Xt;Tt++){const Ot=q[Tt],pt=Ot.object,Je=Ot.geometry,jt=Ot.material,_t=Ot.group;if(jt.side===ia&&pt.layers.test(he.layers)){const bn=jt.side;jt.side=Vn,jt.needsUpdate=!0,Os(pt,fe,he,Je,jt,_t),jt.side=bn,jt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}N.setRenderTarget(He,Pe,$e),N.setClearColor(pe,ce),Ye!==void 0&&(he.viewport=Ye),N.toneMapping=nt}function Rr(C,q,fe){const he=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Ae=C.length;J<Ae;J++){const Le=C[J],He=Le.object,Pe=Le.geometry,$e=Le.group;let nt=Le.material;nt.allowOverride===!0&&he!==null&&(nt=he),He.layers.test(fe.layers)&&Os(He,q,fe,Pe,nt,$e)}}function Os(C,q,fe,he,J,Ae){C.onBeforeRender(N,q,fe,he,J,Ae),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(N,q,fe,he,C,Ae),J.transparent===!0&&J.side===ia&&J.forceSinglePass===!1?(J.side=Vn,J.needsUpdate=!0,N.renderBufferDirect(fe,q,he,J,C,Ae),J.side=Wa,J.needsUpdate=!0,N.renderBufferDirect(fe,q,he,J,C,Ae),J.side=ia):N.renderBufferDirect(fe,q,he,J,C,Ae),C.onAfterRender(N,q,fe,he,J,Ae)}function Ti(C,q,fe){q.isScene!==!0&&(q=qe);const he=Ve.get(C),J=v.state.lights,Ae=v.state.shadowsArray,Le=J.state.version,He=$.getParameters(C,J.state,Ae,q,fe),Pe=$.getProgramCacheKey(He);let $e=he.programs;he.environment=C.isMeshStandardMaterial?q.environment:null,he.fog=q.fog,he.envMap=(C.isMeshStandardMaterial?Vt:Gt).get(C.envMap||he.environment),he.envMapRotation=he.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",xe),$e=new Map,he.programs=$e);let nt=$e.get(Pe);if(nt!==void 0){if(he.currentProgram===nt&&he.lightsStateVersion===Le)return Bi(C,He),nt}else He.uniforms=$.getUniforms(C),C.onBeforeCompile(He,N),nt=$.acquireProgram(He,Pe),$e.set(Pe,nt),he.uniforms=He.uniforms;const Ye=he.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=we.uniform),Bi(C,He),he.needsLights=pa(C),he.lightsStateVersion=Le,he.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),he.currentProgram=nt,he.uniformsList=null,nt}function wr(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Bi(C,q){const fe=Ve.get(C);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function ha(C,q,fe,he,J){q.isScene!==!0&&(q=qe),ot.resetTextureUnits();const Ae=q.fog,Le=he.isMeshStandardMaterial?q.environment:null,He=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Rs,Pe=(he.isMeshStandardMaterial?Vt:Gt).get(he.envMap||Le),$e=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,nt=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ye=!!fe.morphAttributes.position,ht=!!fe.morphAttributes.normal,Tt=!!fe.morphAttributes.color;let Xt=Xa;he.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=N.toneMapping);const Ot=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,pt=Ot!==void 0?Ot.length:0,Je=Ve.get(he),jt=v.state.lights;if(Ge===!0&&(ae===!0||C!==b)){const Qt=C===b&&he.id===D;we.setState(he,C,Qt)}let _t=!1;he.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==jt.state.version||Je.outputColorSpace!==He||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isBatchedMesh&&Je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Je.instancingMorph===!1&&J.morphTexture!==null||Je.envMap!==Pe||he.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==nt||Je.morphTargets!==Ye||Je.morphNormals!==ht||Je.morphColors!==Tt||Je.toneMapping!==Xt||Je.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Je.__version=he.version);let bn=Je.currentProgram;_t===!0&&(bn=Ti(he,q,J));let di=!1,Dn=!1,mn=!1;const zt=bn.getUniforms(),Nn=Je.uniforms;if(Ie.useProgram(bn.program)&&(di=!0,Dn=!0,mn=!0),he.id!==D&&(D=he.id,Dn=!0),di||b!==C){Ie.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(H,"projectionMatrix",C.projectionMatrix),zt.setValue(H,"viewMatrix",C.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(H,Ee.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&zt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Dn=!0,mn=!0)}if(J.isSkinnedMesh){zt.setOptional(H,J,"bindMatrix"),zt.setOptional(H,J,"bindMatrixInverse");const Qt=J.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(H,"boneTexture",Qt.boneTexture,ot))}J.isBatchedMesh&&(zt.setOptional(H,J,"batchingTexture"),zt.setValue(H,"batchingTexture",J._matricesTexture,ot),zt.setOptional(H,J,"batchingIdTexture"),zt.setValue(H,"batchingIdTexture",J._indirectTexture,ot),zt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&zt.setValue(H,"batchingColorTexture",J._colorsTexture,ot));const Tn=fe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&be.update(J,fe,bn),(Dn||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,zt.setValue(H,"receiveShadow",J.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Nn.envMap.value=Pe,Nn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),Dn&&(zt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Ya(Nn,mn),Ae&&he.fog===!0&&de.refreshFogUniforms(Nn,Ae),de.refreshMaterialUniforms(Nn,he,W,Q,v.state.transmissionRenderTarget[C.id]),Hc.upload(H,wr(Je),Nn,ot)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Hc.upload(H,wr(Je),Nn,ot),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&zt.setValue(H,"center",J.center),zt.setValue(H,"modelViewMatrix",J.modelViewMatrix),zt.setValue(H,"normalMatrix",J.normalMatrix),zt.setValue(H,"modelMatrix",J.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Qt=he.uniformsGroups;for(let yn=0,Cr=Qt.length;yn<Cr;yn++){const Pn=Qt[yn];lt.update(Pn,bn),lt.bind(Pn,bn)}}return bn}function Ya(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function pa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,q,fe){const he=Ve.get(C);he.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),Ve.get(C.texture).__webglTexture=q,Ve.get(C.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:fe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const fe=Ve.get(C);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0};const an=H.createFramebuffer();this.setRenderTarget=function(C,q=0,fe=0){K=C,V=q,G=fe;let he=!0,J=null,Ae=!1,Le=!1;if(C){const Pe=Ve.get(C);if(Pe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(H.FRAMEBUFFER,null),he=!1;else if(Pe.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(Pe.__hasExternalTextures)ot.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(Pe.__boundDepthTexture!==Ye){if(Ye!==null&&Ve.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const nt=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?J=nt[q][fe]:J=nt[q],Ae=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?J=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?J=nt[fe]:J=nt,B.copy(C.viewport),Y.copy(C.scissor),oe=C.scissorTest}else B.copy(ne).multiplyScalar(W).floor(),Y.copy(ye).multiplyScalar(W).floor(),oe=Me;if(fe!==0&&(J=an),Ie.bindFramebuffer(H.FRAMEBUFFER,J)&&he&&Ie.drawBuffers(C,J),Ie.viewport(B),Ie.scissor(Y),Ie.setScissorTest(oe),Ae){const Pe=Ve.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,fe)}else if(Le){const Pe=q;for(let $e=0;$e<C.textures.length;$e++){const nt=Ve.get(C.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,nt.__webglTexture,fe,Pe)}}else if(C!==null&&fe!==0){const Pe=Ve.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,fe)}D=-1},this.readRenderTargetPixels=function(C,q,fe,he,J,Ae,Le,He=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){Ie.bindFramebuffer(H.FRAMEBUFFER,Pe);try{const $e=C.textures[He],nt=$e.format,Ye=$e.type;if(!et.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-he&&fe>=0&&fe<=C.height-J&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(q,fe,he,J,We.convert(nt),We.convert(Ye),Ae))}finally{const $e=K!==null?Ve.get(K).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,q,fe,he,J,Ae,Le,He=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe)if(q>=0&&q<=C.width-he&&fe>=0&&fe<=C.height-J){Ie.bindFramebuffer(H.FRAMEBUFFER,Pe);const $e=C.textures[He],nt=$e.format,Ye=$e.type;if(!et.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(q,fe,he,J,We.convert(nt),We.convert(Ye),0);const Tt=K!==null?Ve.get(K).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,Tt);const Xt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await lE(H,Xt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(ht),H.deleteSync(Xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,fe=0){const he=Math.pow(2,-fe),J=Math.floor(C.image.width*he),Ae=Math.floor(C.image.height*he),Le=q!==null?q.x:0,He=q!==null?q.y:0;ot.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Le,He,J,Ae),Ie.unbindTexture()};const $o=H.createFramebuffer(),el=H.createFramebuffer();this.copyTextureToTexture=function(C,q,fe=null,he=null,J=0,Ae=null){Ae===null&&(J!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=J,J=0):Ae=0);let Le,He,Pe,$e,nt,Ye,ht,Tt,Xt;const Ot=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(fe!==null)Le=fe.max.x-fe.min.x,He=fe.max.y-fe.min.y,Pe=fe.isBox3?fe.max.z-fe.min.z:1,$e=fe.min.x,nt=fe.min.y,Ye=fe.isBox3?fe.min.z:0;else{const Tn=Math.pow(2,-J);Le=Math.floor(Ot.width*Tn),He=Math.floor(Ot.height*Tn),C.isDataArrayTexture?Pe=Ot.depth:C.isData3DTexture?Pe=Math.floor(Ot.depth*Tn):Pe=1,$e=0,nt=0,Ye=0}he!==null?(ht=he.x,Tt=he.y,Xt=he.z):(ht=0,Tt=0,Xt=0);const pt=We.convert(q.format),Je=We.convert(q.type);let jt;q.isData3DTexture?(ot.setTexture3D(q,0),jt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),jt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),di=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const zt=C.isDataArrayTexture||C.isData3DTexture,Nn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Tn=Ve.get(C),Qt=Ve.get(q),yn=Ve.get(Tn.__renderTarget),Cr=Ve.get(Qt.__renderTarget);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Pn=0;Pn<Pe;Pn++)zt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,J,Ye+Pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Ae,Xt+Pn)),H.blitFramebuffer($e,nt,Le,He,ht,Tt,Le,He,H.DEPTH_BUFFER_BIT,H.NEAREST);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Ve.has(C)){const Tn=Ve.get(C),Qt=Ve.get(q);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,$o),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,el);for(let yn=0;yn<Pe;yn++)zt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Tn.__webglTexture,J,Ye+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tn.__webglTexture,J),Nn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qt.__webglTexture,Ae,Xt+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qt.__webglTexture,Ae),J!==0?H.blitFramebuffer($e,nt,Le,He,ht,Tt,Le,He,H.COLOR_BUFFER_BIT,H.NEAREST):Nn?H.copyTexSubImage3D(jt,Ae,ht,Tt,Xt+yn,$e,nt,Le,He):H.copyTexSubImage2D(jt,Ae,ht,Tt,$e,nt,Le,He);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(jt,Ae,ht,Tt,Xt,Le,He,Pe,pt,Je,Ot.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(jt,Ae,ht,Tt,Xt,Le,He,Pe,pt,Ot.data):H.texSubImage3D(jt,Ae,ht,Tt,Xt,Le,He,Pe,pt,Je,Ot):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,ht,Tt,Le,He,pt,Je,Ot.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,ht,Tt,Ot.width,Ot.height,pt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,Ae,ht,Tt,Le,He,pt,Je,Ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,di),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),Ae===0&&q.generateMipmaps&&H.generateMipmap(jt),Ie.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){V=0,G=0,K=null,Ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}function wR({mouseForce:s=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:m=.9,isBounce:p=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:x="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:S=.25,autoResumeDelay:v=1e3,autoRampDuration:L=.6}){const P=te.useRef(null),N=te.useRef(null),F=te.useRef(null),V=te.useRef(null),G=te.useRef(null),K=te.useRef(!0),D=te.useRef(null);return te.useEffect(()=>{if(!P.current)return;function b(U){let y;Array.isArray(U)&&U.length>0?U.length===1?y=[U[0],U[0]]:y=U:y=["#ffffff","#ffffff"];const k=y.length,$=new Uint8Array(k*4);for(let re=0;re<k;re++){const Ce=new Ct(y[re]);$[re*4+0]=Math.round(Ce.r*255),$[re*4+1]=Math.round(Ce.g*255),$[re*4+2]=Math.round(Ce.b*255),$[re*4+3]=255}const de=new LE($,k,1,ci);return de.magFilter=Gn,de.minFilter=Gn,de.wrapS=Si,de.wrapT=Si,de.generateMipmaps=!1,de.needsUpdate=!0,de}const B=b(g),Y=new en(0,0,0,0);class oe{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(y){this.container=y,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new RR({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ct(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new jE,this.clock.start()}resize(){if(!this.container)return;const y=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(y.width)),this.height=Math.max(1,Math.floor(y.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const pe=new oe;class ce{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null}init(y){this.container=y,y.addEventListener("mousemove",this._onMouseMove,!1),y.addEventListener("touchstart",this._onTouchStart,!1),y.addEventListener("touchmove",this._onTouchMove,!1),y.addEventListener("mouseenter",this._onMouseEnter,!1),y.addEventListener("mouseleave",this._onMouseLeave,!1),y.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(y,k){if(!this.container)return;this.timer&&clearTimeout(this.timer);const $=this.container.getBoundingClientRect(),de=(y-$.left)/$.width,re=(k-$.top)/$.height;this.coords.set(de*2-1,-(re*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(y,k){this.coords.set(y,k),this.mouseMoved=!0}onDocumentMouseMove(y){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const k=this.container.getBoundingClientRect(),$=(y.clientX-k.left)/k.width,de=(y.clientY-k.top)/k.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(de*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(y.clientX,y.clientY),this.hasUserControl=!0}onDocumentTouchStart(y){if(y.touches.length===1){const k=y.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY),this.hasUserControl=!0}}onDocumentTouchMove(y){if(y.touches.length===1){const k=y.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const y=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(y>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const k=y*y*(3-2*y);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,k)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new ce;class Q{constructor(y,k,$){this.mouse=y,this.manager=k,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const y=Math.random;this.target.set((y()*2-1)*(1-this.margin),(y()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const y=performance.now();if(y-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=y,this.activationTime=y),!this.active)return;this.mouse.isAutoActive=!0;let $=(y-this.lastTime)/1e3;this.lastTime=y,$>.2&&($=.016);const de=this._tmpDir.subVectors(this.target,this.current),re=de.length();if(re<.01){this.pickNewTarget();return}de.normalize();let Ce=1;if(this.rampDurationMs>0){const je=Math.min(1,(y-this.activationTime)/this.rampDurationMs);Ce=je*je*(3-2*je)}const we=this.speed*$*Ce,ze=Math.min(we,re);this.current.addScaledVector(de,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}`,Se=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}`,O=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}`,ne=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}`,ye=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}`,Me=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}`,Ue=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}`,Ge=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}`,ae=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}`,ve=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}`;class Ee{constructor(y){this.props=y||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new o0,this.camera=new Xc,this.uniforms&&(this.material=new Cc(this.props.material),this.geometry=new Er(2,2),this.plane=new ui(this.geometry,this.material),this.scene.add(this.plane))}update(){pe.renderer.setRenderTarget(this.props.output||null),pe.renderer.render(this.scene,this.camera),pe.renderer.setRenderTarget(null)}}class Ke extends Ee{constructor(y){super({material:{vertexShader:W,fragmentShader:ne,uniforms:{boundarySpace:{value:y.cellScale},px:{value:y.cellScale},fboSize:{value:y.fboSize},velocity:{value:y.src.texture},dt:{value:y.dt},isBFECC:{value:!0}}},output:y.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const y=new da,k=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);y.setAttribute("position",new Mi(k,3));const $=new Cc({vertexShader:Se,fragmentShader:ne,uniforms:this.uniforms});this.line=new zE(y,$),this.scene.add(this.line)}update({dt:y,isBounce:k,BFECC:$}){this.uniforms.dt.value=y,this.line.visible=k,this.uniforms.isBFECC.value=$,super.update()}}class qe extends Ee{constructor(y){super({output:y.dst}),this.init(y)}init(y){super.init();const k=new Er(1,1),$=new Cc({vertexShader:O,fragmentShader:Ue,blending:jd,depthWrite:!1,uniforms:{px:{value:y.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(y.cursor_size,y.cursor_size)}}});this.mouse=new ui(k,$),this.scene.add(this.mouse)}update(y){const k=I.diff.x/2*y.mouse_force,$=I.diff.y/2*y.mouse_force,de=y.cursor_size*y.cellScale.x,re=y.cursor_size*y.cellScale.y,Ce=Math.min(Math.max(I.coords.x,-1+de+y.cellScale.x*2),1-de-y.cellScale.x*2),we=Math.min(Math.max(I.coords.y,-1+re+y.cellScale.y*2),1-re-y.cellScale.y*2),ze=this.mouse.material.uniforms;ze.force.value.set(k,$),ze.center.value.set(Ce,we),ze.scale.value.set(y.cursor_size,y.cursor_size),super.update()}}class ut extends Ee{constructor(y){super({material:{vertexShader:W,fragmentShader:ve,uniforms:{boundarySpace:{value:y.boundarySpace},velocity:{value:y.src.texture},velocity_new:{value:y.dst_.texture},v:{value:y.viscous},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst,output0:y.dst_,output1:y.dst}),this.init()}update({viscous:y,iterations:k,dt:$}){let de,re;this.uniforms.v.value=y;for(let Ce=0;Ce<k;Ce++)Ce%2===0?(de=this.props.output0,re=this.props.output1):(de=this.props.output1,re=this.props.output0),this.uniforms.velocity_new.value=de.texture,this.props.output=re,this.uniforms.dt.value=$,super.update();return re}}class Zt extends Ee{constructor(y){super({material:{vertexShader:W,fragmentShader:Me,uniforms:{boundarySpace:{value:y.boundarySpace},velocity:{value:y.src.texture},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst}),this.init()}update({vel:y}){this.uniforms.velocity.value=y.texture,super.update()}}class H extends Ee{constructor(y){super({material:{vertexShader:W,fragmentShader:Ge,uniforms:{boundarySpace:{value:y.boundarySpace},pressure:{value:y.dst_.texture},divergence:{value:y.src.texture},px:{value:y.cellScale}}},output:y.dst,output0:y.dst_,output1:y.dst}),this.init()}update({iterations:y}){let k,$;for(let de=0;de<y;de++)de%2===0?(k=this.props.output0,$=this.props.output1):(k=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=k.texture,this.props.output=$,super.update();return $}}class Dt extends Ee{constructor(y){super({material:{vertexShader:W,fragmentShader:ae,uniforms:{boundarySpace:{value:y.boundarySpace},pressure:{value:y.src_p.texture},velocity:{value:y.src_v.texture},px:{value:y.cellScale},dt:{value:y.dt}}},output:y.dst}),this.init()}update({vel:y,pressure:k}){this.uniforms.velocity.value=y.texture,this.uniforms.pressure.value=k.texture,super.update()}}class st{constructor(y){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...y},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ns:Ui}createAllFBO(){const k={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Gn,magFilter:Gn,wrapS:Si,wrapT:Si};for(let $ in this.fbos)this.fbos[$]=new qa(this.fboSize.x,this.fboSize.y,k)}createShaderPass(){this.advection=new Ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ut({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Zt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new H({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const y=Math.max(1,Math.round(this.options.resolution*pe.width)),k=Math.max(1,Math.round(this.options.resolution*pe.height)),$=1/y,de=1/k;this.cellScale.set($,de),this.fboSize.set(y,k)}resize(){this.calcSize();for(let y in this.fbos)this.fbos[y].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let y=this.fbos.vel_1;this.options.isViscous&&(y=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:y});const k=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:y,pressure:k})}}class et{constructor(){this.init()}init(){this.simulation=new st,this.scene=new o0,this.camera=new Xc,this.output=new ui(new Er(2,2),new Cc({vertexShader:W,fragmentShader:ye,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:B},bgColor:{value:Y}}})),this.scene.add(this.output)}addScene(y){this.scene.add(y)}resize(){this.simulation.resize()}render(){pe.renderer.setRenderTarget(null),pe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ie{constructor(y){this.props=y,pe.init(y.$wrapper),I.init(y.$wrapper),I.autoIntensity=y.autoIntensity,I.takeoverDuration=y.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Q(I,this,{enabled:y.autoDemo,speed:y.autoSpeed,resumeDelay:y.autoResumeDelay,rampDuration:y.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():K.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(pe.renderer.domElement),this.output=new et}resize(){pe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),pe.update(),this.output.update()}loop(){this.running&&(this.render(),V.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,V.current&&(cancelAnimationFrame(V.current),V.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),pe.renderer){const y=pe.renderer.domElement;y&&y.parentNode&&y.parentNode.removeChild(y),pe.renderer.dispose()}}catch{}}}const Mt=P.current;Mt.style.position=Mt.style.position||"relative",Mt.style.overflow=Mt.style.overflow||"hidden";const Ve=new Ie({$wrapper:Mt,autoDemo:M,autoSpeed:T,autoIntensity:A,takeoverDuration:S,autoResumeDelay:v,autoRampDuration:L});N.current=Ve,(()=>{if(!N.current)return;const U=N.current.output?.simulation;if(!U)return;const y=U.options.resolution;Object.assign(U.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==y&&U.resize()})(),Ve.start();const Gt=new IntersectionObserver(U=>{const y=U[0],k=y.isIntersecting&&y.intersectionRatio>0;K.current=k,N.current&&(k&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});Gt.observe(Mt),G.current=Gt;const Vt=new ResizeObserver(()=>{N.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return Vt.observe(Mt),F.current=Vt,()=>{if(V.current&&cancelAnimationFrame(V.current),F.current)try{F.current.disconnect()}catch{}if(G.current)try{G.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[d,e,f,p,i,c,l,s,m,r,g,M,T,A,S,v,L]),te.useEffect(()=>{const b=N.current;if(!b)return;const B=b.output?.simulation;if(!B)return;const Y=B.options.resolution;Object.assign(B.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),b.autoDriver&&(b.autoDriver.enabled=M,b.autoDriver.speed=T,b.autoDriver.resumeDelay=v,b.autoDriver.rampDurationMs=L*1e3,b.autoDriver.mouse&&(b.autoDriver.mouse.autoIntensity=A,b.autoDriver.mouse.takeoverDuration=S)),m!==Y&&B.resize()},[s,e,i,r,l,c,f,d,m,p,M,T,A,S,v,L]),w.jsx("div",{ref:P,className:`liquid-ether-container ${x||""}`,style:{width:"100%",height:"100%",background:"linear-gradient(45deg, #1a1a2e, #16213e)",borderRadius:"12px",overflow:"hidden",..._}})}function CR(){const[s,e]=te.useState(!1),[i,r]=te.useState(!1),l=c=>{c.preventDefault();const f=document.getElementById("about");f&&f.scrollIntoView({behavior:"smooth"})};return te.useEffect(()=>{const c=setTimeout(()=>{e(!0),setTimeout(()=>r(!0),300)},800);return()=>clearTimeout(c)},[]),w.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950",children:[w.jsx("div",{className:"absolute inset-0",children:w.jsx(wR,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:15,cursorSize:160,autoDemo:!0,autoSpeed:.3,autoIntensity:1.5,resolution:.4})}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30"}),w.jsx("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12",children:w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-16 sm:py-20 lg:py-24",children:[w.jsxs("div",{className:`space-y-8 transition-all duration-1500 delay-300 ${i?"opacity-100 translate-x-0":"opacity-0 -translate-x-12"}`,children:[w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[w.jsx("div",{className:"w-14 sm:w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"}),w.jsx("span",{className:"text-purple-300 text-sm sm:text-base font-light tracking-[0.25em] uppercase",children:"Award Winning Design"})]}),w.jsxs("h1",{className:"space-y-2",children:[w.jsx("div",{className:"text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white tracking-tight leading-tight",children:"Luxury"}),w.jsx("div",{className:"text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extralight text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text tracking-tight leading-tight",children:"Interior Design"})]}),w.jsxs("div",{className:"max-w-lg",children:[w.jsx("p",{className:"text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-6",children:"Crafting bespoke environments where every detail tells a story of elegance, functionality, and timeless sophistication."}),w.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-purple-200",children:[w.jsxs("span",{className:"flex items-center",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full mr-2"}),"Offices"]}),w.jsxs("span",{className:"flex items-center",children:[w.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full mr-2"}),"Residences"]}),w.jsxs("span",{className:"flex items-center",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-300 rounded-full mr-2"}),"Hospitality"]})]})]})]}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:[w.jsxs(Ds,{to:"/projects",className:"group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm hover:bg-white/20 transition-all duration-500 overflow-hidden text-center",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"}),w.jsx("span",{className:"relative text-white font-light tracking-wide text-sm sm:text-base uppercase",children:"View Projects"})]}),w.jsx("a",{href:"#about",onClick:l,className:"group px-8 py-4 border border-purple-300/30 rounded-sm hover:border-purple-300/60 transition-all duration-500 backdrop-blur-sm text-center",children:w.jsx("span",{className:"text-purple-200 group-hover:text-white font-light tracking-wide text-sm sm:text-base uppercase transition-colors duration-300",children:"About Me"})})]})]}),w.jsx("div",{className:`flex items-center justify-center transition-all duration-1500 delay-700 ${i?"opacity-100 translate-x-0":"opacity-0 translate-x-12"}`,children:w.jsx("div",{className:"relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[460px]",children:w.jsxs("div",{className:"w-full h-full border border-purple-300/20 rounded-sm relative",children:[w.jsx("div",{className:"absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-5 h-5 sm:w-7 sm:h-7 border-l-2 border-t-2 border-purple-400"}),w.jsx("div",{className:"absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 border-r-2 border-t-2 border-pink-400"}),w.jsx("div",{className:"absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-7 sm:h-7 border-l-2 border-b-2 border-pink-400"}),w.jsx("div",{className:"absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 border-r-2 border-b-2 border-purple-400"}),w.jsx("div",{className:"absolute inset-4 sm:inset-5 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md flex items-center justify-center",children:w.jsxs("div",{className:"text-center space-y-3 sm:space-y-4",children:[w.jsx("div",{className:"text-5xl sm:text-6xl lg:text-7xl font-extralight text-purple-200",children:"6+"}),w.jsx("div",{className:"text-sm sm:text-base md:text-lg text-gray-300 tracking-[0.15em] uppercase",children:"Years of Experience"}),w.jsx("div",{className:"w-16 sm:w-20 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"}),w.jsx("div",{className:"text-sm sm:text-base md:text-lg text-gray-400",children:"Crafting luxury spaces"})]})})]})})})]})}),!s&&w.jsx("div",{className:"absolute inset-0 bg-slate-950 flex items-center justify-center",children:w.jsxs("div",{className:"text-center space-y-6",children:[w.jsxs("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24 mx-auto",children:[w.jsx("div",{className:"absolute inset-0 border-2 border-purple-300/20 rounded-full"}),w.jsx("div",{className:"absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("div",{className:"text-purple-200 text-sm sm:text-base font-light tracking-[0.25em] uppercase",children:"Loading Experience"}),w.jsxs("div",{className:"flex justify-center space-x-2",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-pulse"}),w.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full animate-pulse"}),w.jsx("div",{className:"w-2 h-2 bg-purple-300 rounded-full animate-pulse"})]})]})]})}),i&&w.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:w.jsx("div",{className:"w-6 h-10 border-2 border-purple-300/40 rounded-full flex justify-center",children:w.jsx("div",{className:"w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"})})})]})}var Oh=new Map,Lc=new WeakMap,I0=0,DR=void 0;function NR(s){return s?(Lc.has(s)||(I0+=1,Lc.set(s,I0.toString())),Lc.get(s)):"0"}function UR(s){return Object.keys(s).sort().filter(e=>s[e]!==void 0).map(e=>`${e}_${e==="root"?NR(s.root):s[e]}`).toString()}function LR(s){const e=UR(s);let i=Oh.get(e);if(!i){const r=new Map;let l;const c=new IntersectionObserver(f=>{f.forEach(d=>{var m;const p=d.isIntersecting&&l.some(g=>d.intersectionRatio>=g);s.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=p),(m=r.get(d.target))==null||m.forEach(g=>{g(p,d)})})},s);l=c.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),i={id:e,observer:c,elements:r},Oh.set(e,i)}return i}function OR(s,e,i={},r=DR){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const m=s.getBoundingClientRect();return e(r,{isIntersecting:r,target:s,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:l,observer:c,elements:f}=LR(i),d=f.get(s)||[];return f.has(s)||f.set(s,d),d.push(e),c.observe(s),function(){d.splice(d.indexOf(e),1),d.length===0&&(f.delete(s),c.unobserve(s)),f.size===0&&(c.disconnect(),Oh.delete(l))}}function U_({threshold:s,delay:e,trackVisibility:i,rootMargin:r,root:l,triggerOnce:c,skip:f,initialInView:d,fallbackInView:m,onChange:p}={}){var g;const[_,x]=te.useState(null),M=te.useRef(p),[T,A]=te.useState({inView:!!d,entry:void 0});M.current=p,te.useEffect(()=>{if(f||!_)return;let P;return P=OR(_,(N,F)=>{A({inView:N,entry:F}),M.current&&M.current(N,F),F.isIntersecting&&c&&P&&(P(),P=void 0)},{root:l,rootMargin:r,threshold:s,trackVisibility:i,delay:e},m),()=>{P&&P()}},[Array.isArray(s)?s.toString():s,_,l,r,c,f,i,m,e]);const S=(g=T.entry)==null?void 0:g.target,v=te.useRef(void 0);!_&&S&&!c&&!f&&v.current!==S&&(v.current=S,A({inView:!!d,entry:void 0}));const L=[x,T.inView,T.entry];return L.ref=L[0],L.inView=L[1],L.entry=L[2],L}const PR=({item:s})=>{const{ref:e,inView:i}=U_({triggerOnce:!0,threshold:.2}),r=l=>l?l.startsWith("http")?l:`https://interior-portfolio-api.onrender.com${l}`:null;return w.jsxs(Ds,{to:`/category/${s.id}`,ref:e,className:`min-w-[400px] md:min-w-[450px] lg:min-w-[500px] group relative rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 transition-transform duration-700 ease-out
        ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-2xl`,children:[w.jsx("div",{className:"aspect-[16/10] bg-center bg-cover group-hover:scale-110 transition-transform duration-500",style:{backgroundImage:`url(${s.cover_image?r(s.cover_image):"/placeholder.jpg"})`}}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),w.jsx("div",{className:"absolute bottom-4 left-4",children:w.jsx("h3",{className:"text-base md:text-lg font-medium group-hover:text-luxuryGold transition-colors duration-300",children:s.name})})]})},L_="https://interior-portfolio-api.onrender.com/api",O_=async(s,e={},i=6e4)=>{const r=new AbortController,l=setTimeout(()=>r.abort(),i);try{const c=await fetch(s,{...e,signal:r.signal});return clearTimeout(l),c}catch(c){throw clearTimeout(l),c.name==="AbortError"?new Error(`Request timed out after ${i/1e3} seconds`):c}},P_=async(s,e)=>{if(!s.ok){const i=await s.text();throw console.error(`${e} failed:`,s.status,i),new Error(`${e} failed: ${s.status} ${s.statusText}`)}return s.json()};async function BR(){console.log("🔄 Fetching categories...");const s=Date.now();try{const e=await O_(`${L_}/categories`,{},3e4),i=await P_(e,"Fetch categories"),r=Date.now()-s;return console.log(`✅ Categories fetched in ${r}ms`),i}catch(e){const i=Date.now()-s;throw console.error(`❌ Failed to fetch categories after ${i}ms:`,e.message),e}}async function IR(){console.log("🔄 Fetching all projects...");const s=Date.now();try{const e=await O_(`${L_}/projects`,{},15e3),i=await P_(e,"Fetch all projects"),r=Date.now()-s;return console.log(`✅ All projects fetched in ${r}ms. Found: ${i.length} projects`),i}catch(e){const i=Date.now()-s;throw console.error(`❌ Failed to fetch all projects after ${i}ms:`,e.message),e}}function FR(){const[s,e]=te.useState([]),[i,r]=te.useState(!0),[l,c]=te.useState(null),[f,d]=te.useState(!1),m=fa();return te.useEffect(()=>{if(!m.state?.scrollTo)return;const p=m.state.scrollTo;((_,x=1e3)=>{const M=Date.now(),T=()=>{const A=document.getElementById(_);if(A){const v=A.getBoundingClientRect().top+window.pageYOffset+-64;window.scrollTo({top:v,behavior:"smooth"}),window.history.replaceState({},document.title,window.location.pathname);return}if(Date.now()-M<x)requestAnimationFrame(T);else{const S=document.getElementById(_);if(S){const L=S.getBoundingClientRect().top+window.pageYOffset+-64;window.scrollTo({top:L,behavior:"smooth"})}window.history.replaceState({},document.title,window.location.pathname)}};T()})(p,1200)},[m]),te.useEffect(()=>{(async()=>{try{const p=await BR();e(p)}catch(p){c(p.message||"Failed to load categories")}finally{r(!1)}})()},[]),w.jsxs("div",{className:"bg-slate-950 min-h-screen",children:[w.jsx(CR,{}),w.jsxs("section",{id:"categories",className:"relative py-20",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"}),w.jsxs("div",{className:"relative max-w-6xl mx-auto px-4",children:[w.jsxs("div",{className:"text-center mb-12",children:[w.jsxs("div",{className:"flex items-center justify-center space-x-4 mb-4",children:[w.jsx("div",{className:"w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"}),w.jsx("span",{className:"text-purple-300 text-xs font-light tracking-[0.2em] uppercase",children:"Our Services"}),w.jsx("div",{className:"w-12 h-px bg-gradient-to-l from-pink-400 to-transparent"})]}),w.jsxs("h2",{className:"text-3xl md:text-4xl font-light text-white tracking-tight",children:["Design ",w.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight",children:"Categories"})]})]}),i&&w.jsx("div",{className:"flex justify-center items-center py-12",children:w.jsxs("div",{className:"relative w-16 h-16",children:[w.jsx("div",{className:"absolute inset-0 border-2 border-purple-300/20 rounded-full"}),w.jsx("div",{className:"absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"})]})}),l&&w.jsx("div",{className:"text-center py-8",children:w.jsx("p",{className:"text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-4 py-2 inline-block",children:l})}),w.jsx("div",{className:"flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide touch-pan-x",style:{overflowY:"hidden",WebkitOverflowScrolling:"touch"},onTouchStart:p=>{p.currentTarget.touchStartY=p.touches[0].clientY},onTouchMove:p=>{const g=p.touches[0].clientY,_=p.currentTarget.touchStartY,x=Math.abs(g-_);Math.abs(p.touches[0].clientX-(p.currentTarget.touchStartX||p.touches[0].clientX))>x&&p.preventDefault()},children:s.map(p=>w.jsx(PR,{item:p},p.id))})]})]}),w.jsxs("section",{id:"about",className:"relative py-20",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"}),w.jsx("div",{className:"relative max-w-6xl mx-auto px-4",children:w.jsxs("div",{className:"grid md:grid-cols-2 gap-12 lg:gap-16 items-center",children:[w.jsxs("div",{className:"relative group",children:[w.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"}),w.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-purple-300/20 backdrop-blur-sm min-h-[300px]",children:[!f&&w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-800 via-purple-900/20 to-slate-800 animate-pulse rounded-2xl",children:w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse",style:{animation:"shimmer 2s infinite"}})}),w.jsx("img",{src:"/interior-portfolio/hero-bg.png",alt:"About Me",className:`mx-auto rounded-2xl object-cover transition-opacity duration-700 ${f?"opacity-100":"opacity-0"}`,style:{maxHeight:"400px",width:"100%",objectFit:"cover"},loading:"eager",onLoad:()=>d(!0),onError:()=>{console.log("Image failed to load"),d(!0)}}),w.jsx("div",{className:"absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-purple-400"}),w.jsx("div",{className:"absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-pink-400"}),w.jsx("div",{className:"absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-pink-400"}),w.jsx("div",{className:"absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400"})]})]}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[w.jsx("div",{className:"w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"}),w.jsx("span",{className:"text-purple-300 text-xs font-light tracking-[0.2em] uppercase",children:"About Designer"})]}),w.jsxs("h2",{className:"text-3xl md:text-4xl font-light text-white tracking-tight",children:["About ",w.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight",children:"Me"})]}),w.jsx("p",{className:"text-gray-300 text-lg leading-relaxed font-light",children:"I'm a luxury interior designer focused on creating functional, warm, and timeless spaces. My process blends meticulous planning with material sensitivity to achieve designs that age beautifully."}),w.jsxs("a",{href:"#contact",onClick:p=>{p.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})},className:"group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm text-white font-light tracking-wide text-sm uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500",children:["Get in touch",w.jsx("svg",{className:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})})]}),w.jsxs("section",{id:"contact",className:"relative py-20",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"}),w.jsxs("div",{className:"relative max-w-6xl mx-auto px-4",children:[w.jsxs("div",{className:"text-center mb-12",children:[w.jsxs("div",{className:"flex items-center justify-center space-x-4 mb-4",children:[w.jsx("div",{className:"w-12 h-px bg-gradient-to-r from-purple-400 to-transparent"}),w.jsx("span",{className:"text-purple-300 text-xs font-light tracking-[0.2em] uppercase",children:"Get In Touch"}),w.jsx("div",{className:"w-12 h-px bg-gradient-to-l from-pink-400 to-transparent"})]}),w.jsxs("h2",{className:"text-3xl md:text-4xl font-light text-white tracking-tight",children:["Let's ",w.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight",children:"Connect"})]})]}),w.jsxs("div",{className:"relative group max-w-4xl mx-auto",children:[w.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"}),w.jsx("div",{className:"relative rounded-2xl p-8 lg:p-12 bg-slate-900/80 backdrop-blur-lg border border-purple-300/20",children:w.jsxs("div",{className:"flex flex-col lg:flex-row items-center lg:justify-between gap-8",children:[w.jsxs("div",{className:"text-center lg:text-left space-y-4",children:[w.jsx("h3",{className:"text-2xl font-light text-white mb-6",children:"Contact Information"}),w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{className:"flex items-center justify-center lg:justify-start space-x-3",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"}),w.jsx("span",{className:"text-gray-300",children:"Email:"}),w.jsx("a",{href:"mailto:shaimaaemad2020@gmail.com",className:"text-purple-300 hover:text-pink-300 transition-colors duration-300",children:"shaimaaemad2020@gmail.com"})]}),w.jsxs("div",{className:"flex items-center justify-center lg:justify-start space-x-3",children:[w.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full"}),w.jsx("span",{className:"text-gray-300",children:"Instagram:"}),w.jsx("a",{href:"https://www.instagram.com/shaimaa_alathwary",target:"_blank",rel:"noopener noreferrer",className:"text-purple-300 hover:text-pink-300 transition-colors duration-300",children:"@Shaimaa Al-athwary"})]})]})]}),w.jsxs("div",{className:"flex items-center gap-6",children:[w.jsxs("a",{href:"https://www.facebook.com/Shaimaa Al-athwary",target:"_blank",rel:"noopener noreferrer",className:"group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),w.jsx("i",{className:"fab fa-facebook-f text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"})]}),w.jsxs("a",{href:"https://www.instagram.com/shaimaa_alathwary",target:"_blank",rel:"noopener noreferrer",className:"group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),w.jsx("i",{className:"fab fa-instagram text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"})]}),w.jsxs("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"group relative p-4 bg-white/5 backdrop-blur-sm border border-purple-300/20 rounded-full hover:bg-white/10 hover:border-purple-300/40 transition-all duration-500",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),w.jsx("i",{className:"fab fa-linkedin-in text-xl text-purple-300 group-hover:text-white relative z-10 transition-colors duration-300"})]})]})]})})]})]})]})]})}function zR(){const{categoryId:s}=Y0(),[e,i]=te.useState(null),[r,l]=te.useState([]),[c,f]=te.useState(!0);return te.useEffect(()=>{async function d(){try{const m=await fetch(`https://interior-portfolio-api.onrender.com/api/categories/${s}`),p=await fetch(`https://interior-portfolio-api.onrender.com/api/projects/category/${s}`),g=await m.json(),_=await p.json();i(g),l(_)}catch(m){console.error("Error fetching category data:",m)}finally{f(!1)}}d()},[s]),c?w.jsx("p",{className:"text-center py-10",children:"Loading..."}):e?w.jsxs("section",{className:"max-w-6xl mx-auto px-4 pt-10",children:[w.jsx("h1",{className:"text-3xl font-bold mb-6",children:e.name}),r.length===0?w.jsx("p",{className:"text-white/60",children:"No projects found under this category."}):w.jsx("div",{className:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",children:r.map(d=>w.jsx(Ds,{to:`/projects/${d.id}`,children:w.jsxs("div",{className:"rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition",children:[d.images?.[0]&&w.jsx("img",{src:d.images[0].path,alt:d.title,className:"w-full h-48 object-cover"}),w.jsxs("div",{className:"p-4",children:[w.jsx("h3",{className:"font-medium",children:d.title}),w.jsx("p",{className:"text-sm text-white/60 line-clamp-2",children:d.description})]})]})},d.id))})]}):w.jsx("p",{className:"text-center py-10",children:"Category not found."})}function HR({project:s}){const{ref:e,inView:i}=U_({triggerOnce:!0,threshold:.2});return w.jsxs(Ds,{to:`/projects/${s.id}`,ref:e,className:`group relative rounded-2xl overflow-hidden transition-all duration-700 ease-out
        ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
        hover:scale-105`,children:[w.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"}),w.jsxs("div",{className:"relative bg-slate-900/80 backdrop-blur-lg border border-purple-300/20 rounded-2xl p-4 hover:border-purple-300/40 transition-all duration-500",children:[s.images?.[0]&&w.jsxs("div",{className:"relative mb-4 overflow-hidden rounded-xl",children:[w.jsx("img",{src:s.images[0].path,alt:s.title,className:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"}),w.jsx("span",{className:"text-xs text-purple-300 tracking-wide uppercase",children:s.category})]}),w.jsx("h3",{className:"font-light text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300",children:s.title}),w.jsx("p",{className:"text-sm text-gray-300 leading-relaxed line-clamp-3",children:s.description}),w.jsxs("div",{className:"flex items-center space-x-2 text-xs text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2",children:[w.jsx("span",{children:"View Project"}),w.jsx("svg",{className:"w-3 h-3 group-hover:translate-x-1 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})]})]})}function GR(){const[s,e]=te.useState([]),[i,r]=te.useState(!0),[l,c]=te.useState(null);return te.useEffect(()=>{(async()=>{try{const f=await IR();e(Array.isArray(f)?f:[])}catch(f){console.error(f),c(f.message||"Failed to load projects")}finally{r(!1)}})()},[]),i?w.jsx("div",{className:"min-h-screen bg-slate-950",children:w.jsx("div",{className:"max-w-6xl mx-auto px-4 pt-20",children:w.jsx("div",{className:"flex justify-center items-center py-20",children:w.jsxs("div",{className:"relative w-20 h-20",children:[w.jsx("div",{className:"absolute inset-0 border-2 border-purple-300/20 rounded-full"}),w.jsx("div",{className:"absolute inset-0 border-2 border-purple-400 rounded-full border-t-transparent animate-spin"})]})})})}):l?w.jsx("div",{className:"min-h-screen bg-slate-950",children:w.jsx("div",{className:"max-w-6xl mx-auto px-4 pt-20",children:w.jsx("div",{className:"text-center py-20",children:w.jsx("p",{className:"text-red-400 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-4 inline-block",children:l})})})}):s.length?w.jsxs("div",{className:"min-h-screen bg-slate-950",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5"}),w.jsx("div",{className:"relative",children:w.jsxs("section",{className:"max-w-6xl mx-auto px-4 pt-20 pb-16",children:[w.jsxs("div",{className:"text-center mb-16",children:[w.jsxs("div",{className:"flex items-center justify-center space-x-4 mb-6",children:[w.jsx("div",{className:"w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"}),w.jsx("span",{className:"text-purple-300 text-sm font-light tracking-[0.2em] uppercase",children:"Portfolio"}),w.jsx("div",{className:"w-16 h-px bg-gradient-to-l from-pink-400 to-transparent"})]}),w.jsxs("h1",{className:"text-4xl md:text-5xl font-light text-white tracking-tight mb-4",children:["Our ",w.jsx("span",{className:"text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-extralight",children:"Projects"})]}),w.jsx("p",{className:"text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed",children:"Discover our carefully curated collection of luxury interior designs, each project telling its own story of elegance and sophistication."})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map(f=>w.jsx(HR,{project:f},f.id))}),w.jsx("div",{className:"flex justify-center mt-16",children:w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-pulse"}),w.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full animate-pulse",style:{animationDelay:"0.2s"}}),w.jsx("div",{className:"w-2 h-2 bg-purple-300 rounded-full animate-pulse",style:{animationDelay:"0.4s"}})]})})]})})]}):w.jsx("div",{className:"min-h-screen bg-slate-950",children:w.jsx("div",{className:"max-w-6xl mx-auto px-4 pt-20",children:w.jsx("div",{className:"text-center py-20",children:w.jsx("p",{className:"text-gray-400 text-lg",children:"No projects found."})})})})}function VR(){const{id:s}=Y0(),[e,i]=te.useState(null),[r,l]=te.useState(!0),[c,f]=te.useState(null),[d,m]=te.useState(!1),[p,g]=te.useState(0);te.useEffect(()=>{(async()=>{try{const A=await fetch(`https://interior-portfolio-api.onrender.com/api/projects/${s}`);if(!A.ok)throw new Error("Failed to fetch project");const S=await A.json();i(S)}catch(A){console.error(A),f(A.message||"Failed to load project")}finally{l(!1)}})()},[s]),te.useEffect(()=>{const A=S=>{d&&(S.key==="Escape"?m(!1):S.key==="ArrowLeft"?T():S.key==="ArrowRight"&&M())};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[d,p]),te.useEffect(()=>(d?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[d]);const _=A=>{g(A),m(!0)},x=()=>{m(!1)},M=()=>{e?.images&&g(A=>A===e.images.length-1?0:A+1)},T=()=>{e?.images&&g(A=>A===0?e.images.length-1:A-1)};return r?w.jsx("p",{className:"text-center py-10 text-white/70",children:"Loading project…"}):c?w.jsx("p",{className:"text-center py-10 text-red-400",children:c}):e?w.jsxs(w.Fragment,{children:[w.jsxs("section",{className:"max-w-5xl mx-auto px-4 pt-10",children:[w.jsx("h1",{className:"text-3xl font-bold mb-4",children:e.title}),e.category&&w.jsx("p",{className:"text-white/60 mb-6",children:e.category}),e.description&&w.jsx("p",{className:"mb-6 leading-relaxed",children:e.description}),e.images?.[0]&&w.jsx("img",{src:e.images[0].path,alt:e.title,className:"w-full rounded-2xl shadow mb-6 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>_(0)}),e.images&&e.images.length>1&&w.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e.images.slice(1).map((A,S)=>w.jsx("img",{src:A.path,alt:`${e.title}-${S+2}`,className:"w-full h-48 object-cover rounded-xl border border-white/10 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300",onClick:()=>_(S+1)},S))})]}),d&&e.images&&w.jsxs("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:x,children:[w.jsx("button",{onClick:x,className:"absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10 p-2 rounded-full hover:bg-white/10 transition","aria-label":"Close lightbox",children:"✕"}),w.jsxs("div",{className:"absolute top-4 left-4 text-white/70 text-sm z-10",children:[p+1," / ",e.images.length]}),e.images.length>1&&w.jsx("button",{onClick:A=>{A.stopPropagation(),T()},className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-white/10 transition z-10","aria-label":"Previous image",children:"‹"}),e.images.length>1&&w.jsx("button",{onClick:A=>{A.stopPropagation(),M()},className:"absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-3 rounded-full hover:bg-white/10 transition z-10","aria-label":"Next image",children:"›"}),w.jsx("img",{src:e.images[p].path,alt:`${e.title}-${p+1}`,className:"max-w-full max-h-full object-contain rounded-lg shadow-2xl",onClick:A=>A.stopPropagation()}),w.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center",children:[w.jsx("p",{className:"hidden md:block",children:"Use arrow keys or click buttons to navigate • ESC to close"}),w.jsx("p",{className:"md:hidden",children:"Tap arrows to navigate • Tap outside to close"})]})]})]}):w.jsx("p",{className:"text-center py-10 text-white/60",children:"Project not found."})}function kR(){const[s,e]=te.useState({username:"",password:""}),[i,r]=te.useState(!1),[l,c]=te.useState(""),f=Ih(),d=p=>{e({...s,[p.target.name]:p.target.value})},m=async p=>{p.preventDefault(),r(!0),c("");try{const g=await fetch("https://interior-portfolio-api.onrender.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.username,password:s.password})}),_=await g.json();if(!g.ok)throw new Error(_.error||"Login failed");localStorage.setItem("adminToken",_.token),f("/admin/dashboard")}catch(g){c(g.message)}finally{r(!1)}};return w.jsx("div",{className:"min-h-screen flex items-center justify-center bg-luxuryBg px-4",children:w.jsx("div",{className:"max-w-md w-full",children:w.jsxs("div",{className:"rounded-2xl p-8 bg-luxurySurface border border-white/10",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("h1",{className:"font-display text-3xl text-white mb-2",children:"Admin Login"}),w.jsx("p",{className:"text-luxuryMuted",children:"Access your portfolio dashboard"})]}),l&&w.jsx("div",{className:"mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20",children:w.jsx("p",{className:"text-red-400 text-sm",children:l})}),w.jsxs("form",{onSubmit:m,className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Username"}),w.jsx("input",{type:"text",name:"username",value:s.username,onChange:d,required:!0,className:"w-full px-4 py-3 rounded-lg bg-luxuryBg border border-white/10 text-white placeholder-luxuryMuted focus:border-luxuryGold focus:outline-none transition",placeholder:"Enter your username"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Password"}),w.jsx("input",{type:"password",name:"password",value:s.password,onChange:d,required:!0,className:"w-full px-4 py-3 rounded-lg bg-luxuryBg border border-white/10 text-white placeholder-luxuryMuted focus:border-luxuryGold focus:outline-none transition",placeholder:"Enter your password"})]}),w.jsx("button",{type:"submit",disabled:i,className:"w-full py-3 px-4 rounded-lg bg-luxuryGold text-black font-medium hover:bg-luxuryGold/90 focus:outline-none focus:ring-2 focus:ring-luxuryGold/50 transition disabled:opacity-50 disabled:cursor-not-allowed",children:i?"Signing in...":"Sign In"})]}),w.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:w.jsx("p",{className:"text-xs text-luxuryMuted text-center",children:"This is a secure admin area. Only authorized users can access."})})]})})})}function jR(){if(!localStorage.getItem("adminToken"))return window.location.href="/admin",null;const[e,i]=te.useState(!1),r=b=>b?b.startsWith("http")?b:`https://interior-portfolio-api.onrender.com${b}`:null,[l,c]=te.useState("home"),[f,d]=te.useState([]),[m,p]=te.useState({id:null,name:"",cover:null,existingCover:null}),[g,_]=te.useState([]),[x,M]=te.useState({id:null,title:"",description:"",category_id:"",images:[],existingImages:[]}),T=async()=>{try{const Y=(await(await fetch("https://interior-portfolio-api.onrender.com/api/categories")).json()).map(oe=>({...oe,cover_image:oe.cover_image?oe.cover_image:null}));d(Y)}catch(b){console.error("fetchCategories err",b)}},A=async()=>{try{const Y=(await(await fetch("https://interior-portfolio-api.onrender.com/api/projects")).json()).map(oe=>{const pe=Array.isArray(oe.images)?oe.images.map(ce=>{if(!ce)return null;if(typeof ce=="string")return{id:null,path:r(ce)};{const I=ce.id??ce.image_id??null,Q=ce.path??ce.image_path??null;return{id:I,path:r(Q)}}}).filter(Boolean):[];return{...oe,images:pe}});_(Y)}catch(b){console.error("fetchProjects err",b)}};te.useEffect(()=>{T(),A()},[]);const S=async b=>{b.preventDefault(),i(!0);try{const B=new FormData;B.append("name",m.name),m.cover&&B.append("cover",m.cover);const Y=m.id?`https://interior-portfolio-api.onrender.com/api/categories/${m.id}`:"https://interior-portfolio-api.onrender.com/api/categories",oe=m.id?"PUT":"POST",pe=await fetch(Y,{method:oe,body:B});if(!pe.ok){const ce=await pe.json().catch(()=>({error:"failed"}));throw new Error(ce.error||"Failed to save category")}p({id:null,name:"",cover:null,existingCover:null}),await T(),alert("Category saved")}catch(B){console.error(B),alert(B.message||"Failed to save category")}finally{i(!1)}},v=b=>{p({id:b.id,name:b.name,cover:null,existingCover:b.cover_image?b.cover_image:null}),c("categories")},L=async b=>{if(window.confirm("Delete this category?")){i(!0);try{await fetch(`https://interior-portfolio-api.onrender.com/api/categories/${b}`,{method:"DELETE"}),await T()}catch(B){console.error(B),alert("Failed to delete category")}finally{i(!1)}}},P=async b=>{b.preventDefault(),i(!0);try{const B=new FormData;B.append("title",x.title),B.append("description",x.description),B.append("category_id",x.category_id),x.existingImages&&x.existingImages.length>0&&x.existingImages.forEach(ce=>{ce.id&&B.append("existingImages",ce.id)}),x.images&&x.images.length>0&&Array.from(x.images).forEach(ce=>B.append("images",ce));const Y=x.id?`https://interior-portfolio-api.onrender.com/api/projects/${x.id}`:"https://interior-portfolio-api.onrender.com/api/projects",oe=x.id?"PUT":"POST",pe=await fetch(Y,{method:oe,body:B});if(!pe.ok){const ce=await pe.json().catch(()=>({error:"failed"}));throw new Error(ce.error||"Failed to save project")}M({id:null,title:"",description:"",category_id:"",images:[],existingImages:[]}),await A(),alert("Project saved")}catch(B){console.error(B),alert(B.message||"Failed to save project")}finally{i(!1)}},N=b=>{const B=Array.isArray(b.images)?b.images.map(Y=>({id:Y.id??null,path:Y.path??r(Y.path)})):[];M({id:b.id,title:b.title||"",description:b.description||"",category_id:b.category_id||"",images:[],existingImages:B}),c("projects"),window.scrollTo({top:0,behavior:"smooth"})},F=async b=>{if(window.confirm("Delete this project?")){i(!0);try{await fetch(`https://interior-portfolio-api.onrender.com/api/projects/${b}`,{method:"DELETE"}),await A()}catch(B){console.error(B),alert("Failed to delete project")}finally{i(!1)}}},V=async(b,B=x.id)=>{if(window.confirm("Delete this image?")){i(!0);try{if(b.id&&!(await fetch(`https://interior-portfolio-api.onrender.com/api/projects/image/${b.id}`,{method:"DELETE"})).ok)throw new Error("Server failed to delete image");M(Y=>({...Y,existingImages:Y.existingImages.filter(oe=>oe.id&&b.id?oe.id!==b.id:oe.path!==b.path)})),_(Y=>Y.map(oe=>oe.id!==B?oe:{...oe,images:(oe.images||[]).filter(pe=>pe?typeof pe=="string"?r(pe)!==r(b.path):typeof pe=="object"?(pe.id??null)!==(b.id??null):!0:!1)}))}catch(Y){console.error("removeExistingProjectImage error:",Y),alert("Failed to delete image")}finally{i(!1)}}},G=b=>{const B=b.target.files?.[0]??null;p(Y=>({...Y,cover:B}))},K=b=>{const B=b.target.files?Array.from(b.target.files):[];M(Y=>({...Y,images:B}))},D=b=>{if(!b||!b.images||b.images.length===0)return null;const B=b.images[0];return B?typeof B=="string"?r(B):typeof B=="object"?B.path??r(B):null:null};return w.jsxs("div",{className:"flex min-h-screen bg-luxuryBg text-white",children:[w.jsxs("aside",{className:"w-60 bg-luxurySurface p-6 flex flex-col gap-4",children:[w.jsx("button",{onClick:()=>c("home"),className:`py-2 px-4 rounded-lg ${l==="home"?"bg-luxuryGold text-black":""}`,children:"Home"}),w.jsx("button",{onClick:()=>c("categories"),className:`py-2 px-4 rounded-lg ${l==="categories"?"bg-luxuryGold text-black":""}`,children:"Categories"}),w.jsx("button",{onClick:()=>c("projects"),className:`py-2 px-4 rounded-lg ${l==="projects"?"bg-luxuryGold text-black":""}`,children:"Projects"})]}),w.jsxs("main",{className:"flex-1 p-8 overflow-auto",children:[l==="home"&&w.jsxs("div",{className:"text-center mt-20",children:[w.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Welcome Admin!"}),w.jsx("p",{className:"text-lg text-white/70",children:"Use the buttons on the left to manage Categories and Projects."})]}),l==="categories"&&w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Categories"}),w.jsxs("form",{onSubmit:S,className:"mb-6 flex flex-col gap-3",children:[w.jsx("input",{type:"text",value:m.name,onChange:b=>p({...m,name:b.target.value}),placeholder:"Category Name",className:"px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"}),m.existingCover&&!m.cover&&w.jsx("img",{src:r(m.existingCover),alt:"cover",className:"w-48 h-32 object-cover rounded-lg"}),w.jsx("input",{type:"file",accept:"image/*",onChange:G,className:"text-white"}),m.cover&&w.jsx("img",{src:URL.createObjectURL(m.cover),alt:"preview",className:"w-48 h-32 object-cover rounded-lg"}),w.jsx("button",{className:"bg-luxuryGold text-black px-4 py-2 rounded-lg",children:m.id?"Save Category":"Add Category"})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:f.map(b=>w.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-white/10 bg-white/5",children:[b.cover_image&&w.jsx("img",{src:r(b.cover_image),alt:b.name,className:"w-full h-32 object-cover"}),w.jsxs("div",{className:"p-4 flex justify-between items-center",children:[w.jsx("span",{children:b.name}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>v(b),className:"bg-blue-600 px-2 py-1 rounded-lg text-sm",children:"Edit"}),w.jsx("button",{onClick:()=>L(b.id),className:"bg-red-600 px-2 py-1 rounded-lg text-sm",children:"Delete"})]})]})]},b.id))})]}),l==="projects"&&w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Projects"}),w.jsxs("form",{onSubmit:P,className:"mb-6 flex flex-col gap-3",children:[w.jsx("input",{type:"text",value:x.title,onChange:b=>M({...x,title:b.target.value}),placeholder:"Project Title",className:"px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"}),w.jsx("textarea",{value:x.description,onChange:b=>M({...x,description:b.target.value}),placeholder:"Project Description",className:"px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white"}),w.jsxs("select",{value:x.category_id,onChange:b=>M({...x,category_id:b.target.value}),className:"px-4 py-2 rounded-lg bg-luxuryBg border border-white/10 text-white",children:[w.jsx("option",{value:"",children:"Select Category"}),f.map(b=>w.jsx("option",{value:b.id,children:b.name},b.id))]}),x.existingImages.length>0&&w.jsx("div",{className:"flex gap-2 mb-2 flex-wrap",children:x.existingImages.map(b=>w.jsxs("div",{className:"relative",children:[w.jsx("img",{src:b.path,alt:"project",className:"w-20 h-20 object-cover rounded-lg"}),w.jsx("button",{type:"button",onClick:()=>V(b),className:"absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs",children:"×"})]},b.id??b.path))}),w.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:K,className:"text-white"}),x.images&&x.images.length>0&&w.jsx("div",{className:"flex gap-2 mt-2 flex-wrap",children:Array.from(x.images).map((b,B)=>w.jsx("img",{src:URL.createObjectURL(b),alt:`new-${B}`,className:"w-20 h-20 object-cover rounded-lg"},B))}),w.jsx("button",{className:"bg-luxuryGold text-black px-4 py-2 rounded-lg",children:x.id?"Save Project":"Add Project"})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:g.map(b=>w.jsxs("div",{className:"rounded-2xl overflow-hidden border border-white/10 bg-white/5",children:[D(b)&&w.jsx("img",{src:D(b),alt:b.title,className:"w-full h-48 object-cover"}),w.jsxs("div",{className:"p-4 flex justify-between items-center",children:[w.jsxs("div",{children:[w.jsx("h3",{children:b.title}),w.jsx("p",{className:"text-white/60",children:b.description})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>N(b),className:"bg-blue-600 px-2 py-1 rounded-lg text-sm",children:"Edit"}),w.jsx("button",{onClick:()=>F(b.id),className:"bg-red-600 px-2 py-1 rounded-lg text-sm",children:"Delete"})]})]})]},b.id))})]})]}),e&&w.jsxs("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50",children:[w.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-luxuryGold border-solid"}),w.jsx("span",{className:"ml-4 text-luxuryGold text-xl font-semibold",children:"Processing..."})]})]})}function XR(){const[s,e]=te.useState(!1),i=fa(),r=Ih(),l=d=>{const m=document.getElementById(d);if(!m)return!1;const p=document.querySelector("header"),x=-((p?p.offsetHeight:64)+20),M=m.getBoundingClientRect().top+window.pageYOffset+x;return window.scrollTo({top:M,behavior:"smooth"}),!0},c=d=>{if(e(!1),i.pathname==="/"){l(d);return}r("/",{state:{scrollTo:d}})},f=()=>{e(!1),i.pathname==="/"?window.scrollTo({top:0,behavior:"smooth"}):r("/")};return w.jsxs("header",{className:"sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-300/20",children:[w.jsxs("div",{className:"max-w-6xl mx-auto px-4 h-16 flex items-center justify-between",children:[w.jsxs("button",{onClick:f,className:"font-display text-xl tracking-wide text-left group","aria-label":"Go to home",children:[w.jsx("span",{className:"text-purple-400 group-hover:text-pink-400 transition-colors duration-300",children:"A."}),w.jsx("span",{className:"text-white group-hover:text-purple-200 transition-colors duration-300",children:"Interiors"})]}),w.jsxs("nav",{className:"hidden md:flex gap-6 text-sm items-center",children:[w.jsx("button",{onClick:f,className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Home"}),w.jsx("button",{onClick:()=>c("categories"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Categories"}),w.jsx(kd,{to:"/projects",className:({isActive:d})=>d?"text-purple-400 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-purple-400 after:to-pink-400":"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Projects"}),w.jsx("button",{onClick:()=>c("about"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"About"}),w.jsx("button",{onClick:()=>c("contact"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Contact"})]}),w.jsx("a",{href:"/cv.pdf",className:"hidden md:inline text-sm border border-purple-300/30 hover:border-purple-400/60 px-3 py-1.5 rounded-sm text-purple-200 hover:text-white hover:bg-purple-400/10 transition-all duration-300",download:!0,children:"Download CV"}),w.jsx("button",{className:"md:hidden text-2xl text-purple-300 hover:text-pink-400 transition-colors duration-300",onClick:()=>e(d=>!d),"aria-label":"Toggle menu",children:s?"✖":"☰"})]}),w.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${s?"max-h-[500px] opacity-100":"max-h-0 opacity-0"} bg-slate-950/95 backdrop-blur-md border-t border-purple-300/20`,children:w.jsxs("nav",{className:"flex flex-col items-center py-4 gap-4",children:[w.jsx("button",{onClick:()=>{e(!1),f()},className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Home"}),w.jsx(kd,{to:"/projects",className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",onClick:()=>e(!1),children:"Projects"}),w.jsx("button",{onClick:()=>c("categories"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Categories"}),w.jsx("button",{onClick:()=>c("about"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"About"}),w.jsx("button",{onClick:()=>c("contact"),className:"text-gray-300 hover:text-purple-300 transition-colors duration-300",children:"Contact"}),w.jsx("a",{href:"/cv.pdf",className:"text-sm border border-purple-300/30 hover:border-purple-400/60 px-3 py-1.5 rounded-sm text-purple-200 hover:text-white hover:bg-purple-400/10 transition-all duration-500",download:!0,onClick:()=>e(!1),children:"Download CV"})]})})]})}function WR(){return w.jsx("footer",{className:"border-t border-white/5 mt-12",children:w.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 text-sm text-luxuryMuted flex flex-col md:flex-row gap-2 justify-between",children:[w.jsxs("p",{children:["© ",new Date().getFullYear()," A. Interiors — All rights reserved."]}),w.jsx("p",{children:"DevSam."})]})})}function qR(){return w.jsxs("div",{className:"min-h-screen bg-luxuryBg text-white flex flex-col",children:[w.jsx(XR,{}),w.jsx("main",{className:"flex-1",children:w.jsxs(HS,{children:[w.jsx(vr,{path:"/",element:w.jsx(FR,{})}),w.jsx(vr,{path:"/category/:categoryId",element:w.jsx(zR,{})}),w.jsx(vr,{path:"/projects",element:w.jsx(GR,{})}),w.jsx(vr,{path:"/projects/:id",element:w.jsx(VR,{})}),w.jsx(vr,{path:"/admin",element:w.jsx(kR,{})}),w.jsx(vr,{path:"/admin/dashboard",element:w.jsx(jR,{})})]})}),w.jsx(WR,{})]})}Ky.createRoot(document.getElementById("root")).render(w.jsx(Vy.StrictMode,{children:w.jsx(cM,{children:w.jsx(qR,{})})}));
