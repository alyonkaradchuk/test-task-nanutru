parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";setTimeout(function(){document.getElementById("popup").style.display="block"},2e4),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".popup__close").addEventListener("click",function(){document.querySelector("#popup").remove()})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#my-form");document.querySelector("#go-to-form-btn").addEventListener("click",function(t){t.preventDefault(),document.querySelector(".popup").style.display="none",e.scrollIntoView({behavior:"smooth"})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelector("body").addEventListener("mouseleave",function(e){e.clientY<=0&&(document.getElementById("popup").style.display="block")})}),window.onload=function(){var e=600,t=setInterval(function(){var n=Math.floor(e/60),o=e%60;o<10&&(o="0"+o),document.getElementById("timer").innerHTML=n+":"+o,(e-=1)<0&&(clearInterval(t),document.getElementById("timer").innerHTML="Час закінчився")},1e3)};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b9b0b26e.js.map