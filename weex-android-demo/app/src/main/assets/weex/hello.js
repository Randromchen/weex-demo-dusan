// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=37)}({1:function(e,t,o){"use strict";var n=weex.requireModule("modal"),s=weex.requireModule("MyModule"),r=weex.requireModule("PhoneModule"),a=weex.requireModule("LogModule");e.exports={data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",target:"Weex"}},mounted:function(){console.log("mounted","mounted"),this.testSupports()},methods:{sendMessage:function(){console.log("sendMessage","sendMessage"),new BroadcastChannel("DuQian").postMessage("message from weex pageA")},testToast:function(){n.toast({message:"clicked,A send message to B ",duration:1}),this.target="Nono",this.sendMessage(),this.testSupports()},testEvent:function(){s.printLog("myModule from A");var e=this;r.getPhoneInfo(function(t){var o=JSON.stringify(t);a.log("weex-dq","getPhoneInfo:"+o);JSON.parse(t);e.target="getPhoneInfo="+t,n.toast({message:"getPhoneInfo "+e.target,duration:3})})},testSupports:function(){var e=weex.supports("@module/stream"),t=weex.supports("@module/MyMoudle"),o=weex.supports("@module/WeexDialogModule"),s=(weex.supports("@module/MyMoudle.duqian"),weex.supports("@module/duqian"));console.log("net",e),n.toast({message:"是否有MyMoudle="+t+",dialog="+o+",是否支持stream= "+e+",mytest="+s,duration:10})}}}},18:function(e,t){e.exports={wrapper:{alignItems:"center",paddingTop:20,backgroundColor:"#A9A9A9",justifyContent:"center"},title:{lineHeight:60,fontSize:28,alignItems:"center",textAlign:"center",color:"#0000FF",marginTop:15,marginBottom:15},btn:{width:350,backgroundColor:"#FAEBD7",alignItems:"center",textAlign:"center",fontSize:28,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,marginTop:15,marginBottom:15}}},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"]},[o("button",{staticClass:["btn"],on:{click:e.testToast}},[e._v("Hello weex")]),o("text",{staticClass:["title"],on:{click:e.testToast}},[e._v("Hello DuQian, "+e._s(e.target)+" Up!")]),o("button",{staticClass:["btn"],on:{click:e.testEvent}},[e._v("测试nono api")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},37:function(e,t,o){var n,s,r=[];r.push(o(18)),n=o(1);var a=o(28);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/hello.vue",s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-a1f38564",s.style=s.style||{},r.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,r),e.exports=n,e.exports.el="true",new Vue(e.exports)}});