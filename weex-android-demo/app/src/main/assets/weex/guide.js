// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("modal"),o=weex.requireModule("MyModule");weex.requireModule("event"),weex.requireModule("navigator");t.default={data:function(){return{nextUrl:"http://dotwe.org/raw/dist/6fe11640e8d25f2f98176e9643c08687.bundle.js",txt:"Start-DusanWeex",intervalValue:1500,isShowIndicators:"true",isAutoPlay:"true",posters:["http://weex-project.io/guide/images/weex-example-yo.png","http://weex-project.io/guide/images/vue-rax.png","https://duqian291902259.github.io/dusan/oair/bg1.png"]}},methods:{goNext:function(){console.log("hi,duqian"),r.toast({message:"next page",duration:1}),o.openPageByUrl(this.nextUrl)}}}},15:function(e,t){e.exports={wrap:{alignItems:"center",justifyContent:"center",backgroundColor:"#2b2d2f"},size:{width:720,height:960},indicator:{width:750,height:60,bottom:10,marginTop:10,marginBottom:10,alignItems:"center",justifyContent:"center"},btn:{width:300,paddingTop:20,paddingBottom:20,marginBottom:30,backgroundColor:"#0096ff",fontSize:25,fontWeight:"bold",alignItems:"center",justifyContent:"center",borderRadius:50,color:"#ffffff",textAlign:"center"}}},25:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrap"],on:{click:e.goNext}},[n("slider",{staticClass:["slider","size"],attrs:{autoPlay:"isAutoPlay",interval:"2000"},on:{click:e.goNext}},[e._l(e.posters,function(t){return n("div",[n("image",{staticClass:["size"],attrs:{resize:"contain",src:t},on:{click:e.goNext}})])}),n("indicator",{staticClass:["indicator"]})],2),n("button",{staticClass:["btn"],on:{click:e.goNext}},[e._v(e._s(e.txt))])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},36:function(e,t,n){var r,o,i=[];i.push(n(15)),r=n(0);var s=n(25);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/guide.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-28238b10",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)}});