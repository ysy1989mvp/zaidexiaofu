(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-zhanghuanquan-zhanghuanquan"],{"01aa":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{data:null}},onLoad:function(){var t=this,a={},n="/api/index/zhaq_content";this.util.request(n,"POST",a,function(a){if(200==a.statusCode)if(1==a.data.code){t.data=a.data.data;var n=new RegExp('style="width:',"gi"),e=t.data.content.replace(n,'style="max-width: 100%;width:');t.data.content=e}else t.util.showWindow(a.data.msg);else t.util.showWindow("请求错误")})},methods:{}};a.default=e},"158d":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".image1[data-v-5ee018fb]{width:100%;height:200%}",""])},"1b5f":function(t,a,n){"use strict";n.r(a);var e=n("b39c"),i=n("65cd");for(var u in i)"default"!==u&&function(t){n.d(a,t,function(){return i[t]})}(u);n("4aeb");var o=n("2877"),s=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"5ee018fb",null);a["default"]=s.exports},"4aeb":function(t,a,n){"use strict";var e=n("5569"),i=n.n(e);i.a},5569:function(t,a,n){var e=n("158d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("775f7f2c",e,!0,{sourceMap:!1,shadowMode:!1})},"65cd":function(t,a,n){"use strict";n.r(a);var e=n("01aa"),i=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(a,t,function(){return e[t]})}(u);a["default"]=i.a},b39c:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"gs",staticStyle:{width:"100vw"}},[n("v-uni-rich-text",{staticClass:"fuwenben",staticStyle:{width:"98%",margin:"0upx auto"},attrs:{type:"node",nodes:t.data.content}})],1)},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})}}]);