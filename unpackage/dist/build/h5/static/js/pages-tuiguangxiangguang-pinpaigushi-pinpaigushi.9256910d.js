(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tuiguangxiangguang-pinpaigushi-pinpaigushi"],{"017d":function(t,i,a){"use strict";var n=a("0665"),s=a.n(n);s.a},"0665":function(t,i,a){var n=a("88ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("d4131868",n,!0,{sourceMap:!1,shadowMode:!1})},2995:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"banner"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"5000",duration:"1500"}},t._l(t.data.images,function(t,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-image",{staticClass:"bannerImg",attrs:{src:t.image,mode:"scaleToFill"}})],1)}),1)],1),a("v-uni-view",{staticClass:"gs",staticStyle:{width:"100vw"}},[a("v-uni-rich-text",{staticClass:"fuwenben",staticStyle:{width:"98%",margin:"0upx auto"},attrs:{type:"node",nodes:t.data.content}})],1)],1)],1)},s=[];a.d(i,"a",function(){return n}),a.d(i,"b",function(){return s})},"483e":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{data:"",homeSlide:["../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png"]}},onLoad:function(){var t=this,i={},a="/api/index/ppgs_content";this.util.request(a,"POST",i,function(i){console.log(JSON.stringify(i)),200==i.statusCode?1==i.data.code?t.data=i.data.data:t.util.showWindow(i.data.msg):t.util.showWindow("请求错误")})},methods:{}};i.default=n},5300:function(t,i,a){"use strict";a.r(i);var n=a("483e"),s=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,function(){return n[t]})}(e);i["default"]=s.a},"88ed":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".swiper[data-v-697f4284]{height:%?400?%}uni-swiper-item>uni-image[data-v-697f4284]{width:100%}",""])},dd16:function(t,i,a){"use strict";a.r(i);var n=a("2995"),s=a("5300");for(var e in s)"default"!==e&&function(t){a.d(i,t,function(){return s[t]})}(e);a("017d");var u=a("2877"),r=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,"697f4284",null);i["default"]=r.exports}}]);