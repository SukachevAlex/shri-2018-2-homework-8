!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,c=[],l=n(3);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=p(t)),r=b.bind(null,n,c,!1),o=b.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return u(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&u(f(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,function(e,t,n){"use strict";n.r(t);const r=[];["http://www.streambox.fr/playlists/test_001/stream.m3u8","https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8","https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8","https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8"].forEach((e,t,n)=>{let o=document.createElement("video");o.className=`camera camera-${t+1}`,o.autoplay=!0,o.controls=!1,o.muted=!0,function(e,t){if(Hls.isSupported()){let n=new Hls;n.loadSource(t),n.attachMedia(e),n.on(Hls.Events.MANIFEST_PARSED,function(){e.play()})}else e.canPlayType("application/vnd.apple.mpegurl")&&(e.src=t,e.addEventListener("loadedmetadata",function(){e.play()}))}(o,e),r.push(o)});const o=document.querySelector(".volume-oscilloscope"),i=document.querySelector(".volume-bar"),a=2048,s=.5;let c=null,l=null,u=null,f=null,d=null,m=null,p=null,h=null,v=null,y=new Map;function b(){(function(){return Boolean(window.AudioContext||window.webkitAudioContext)})&&(c?c.resume():(c=new AudioContext,(l=c.createAnalyser()).smoothingTimeConstant=s,l.fftSize=a,u=c.createGain()))}function g(){o.classList.contains("volume-oscilloscope_visible")&&(requestAnimationFrame(g),f=l.frequencyBinCount,d=new Uint8Array(f),l.getByteTimeDomainData(d),function(){h.clearRect(0,0,m.width,m.height),h.fillStyle="rgba(255, 255, 255, .05)",h.fillRect(0,0,m.width,m.height),h.lineWidth=1,h.strokeStyle="rgb(0, 0, 0)",h.beginPath();let e=Number(m.width)/f,t=0;for(let n=0;n<f;n++){let r=d[n]/128,o=r*m.height/2;0===n?h.moveTo(t,o):h.lineTo(t,o),t+=e}h.lineTo(m.width,m.height/2),h.stroke()}(),function(){v.clearRect(0,0,p.width,p.height),v.fillStyle="rgba(0, 0, 0, .15)",v.fillRect(0,0,p.width,p.height),v.beginPath(),v.lineWidth=p.width,v.strokeStyle="#fafafa",v.moveTo(p.width/2,p.height);let e=0;d.forEach(t=>{t>e&&(e=t)});let t=128/e;v.lineTo(p.width/2,Math.round(p.height*t)),v.stroke()}())}function w(e,t){y.get(t)||y.set(t,c.createMediaElementSource(e)),y.get(t).connect(l),l.connect(u),u.connect(c.destination),g()}const _=[],S=document.querySelector(".camera__controlls"),L=document.querySelector(".volume__controll"),x=document.querySelector(".volume-oscilloscope"),E=document.querySelector(".volume-bar");function C(){const e=document.querySelector(".camera_open");e.classList.add("camera_muted"),e.classList.remove("camera_open"),S.classList.remove("camera__controlls_visible")}function q(){const e=document.querySelector(".camera_open").getContext("2d");e.filter=`${e.filter} contrast(${this.value/100})`}function A(){const e=document.querySelector(".camera_open").getContext("2d");e.filter=`${e.filter} brightness(${this.value/100})`}function T(){this.classList.toggle("volume__controll_inactive"),document.querySelector(".camera_open").classList.toggle("camera_muted")}!function(){for(let e=0;e<r.length;e++){const t=document.createElement("canvas"),n=t.getContext("2d");t.className=`camera camera-${e+1} camera_muted`,t.width=640,t.height=480,n.filter="\n            brightness(1)\n            contrast(1)\n        ",t.addEventListener("click",function(){if(t.classList.toggle("camera_open"),S.classList.toggle("camera__controlls_visible"),t.classList.add("camera_muted"),L.classList.add("volume__controll_inactive"),x.classList.toggle("volume-oscilloscope_visible"),E.classList.toggle("volume-bar_visible"),this.classList.contains("camera_open")){let e=this.className.replace(/\D/g,"");w(r[e-1],e)}});const o=()=>{n.drawImage(r[e],0,0,t.width,t.height),window.requestAnimationFrame(o),t.classList.contains("camera_muted")?r[e].muted=!0:r[e].muted=!1};o(),_.push(t)}}();n(0);const j=document.querySelector(".camera__list"),M=document.querySelector(".camera__btn"),O=document.querySelector(".range-controll_brightness"),U=document.querySelector(".range-controll_contrast"),R=document.querySelector(".volume__controll");!function(){for(let e=0;e<_.length;e++)j.appendChild(_[e]);M.addEventListener("click",C),U.addEventListener("input",q),O.addEventListener("input",A),R.addEventListener("click",T),b(),m=document.createElement("canvas"),h=m.getContext("2d"),m.width=200,m.height=50,o.appendChild(m),p=document.createElement("canvas"),v=p.getContext("2d"),p.width=50,p.height=200,i.appendChild(p)}()}]);