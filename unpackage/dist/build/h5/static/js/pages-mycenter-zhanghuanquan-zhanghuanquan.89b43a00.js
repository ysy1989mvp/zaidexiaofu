(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-zhanghuanquan-zhanghuanquan"],{"01aa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data:null}},onShow:function(){var t=this,e={},a="/api/index/zhaq_content";this.util.request(a,"POST",e,function(e){if(200==e.statusCode)if(1==e.data.code){t.data=e.data.data;var a=new RegExp('style="',"gi"),n="";t.data.content.indexOf('style="')>-1?n=t.data.content.replace(a,'style="max-width: 100%;'):(a=new RegExp("<img","gi"),n=t.data.content.replace(a,'<img style="max-width: 100%;width:100%;"')),t.data.content=n}else t.util.showWindow(e.data.msg);else t.util.showWindow("请求错误")})},methods:{}};e.default=n},"18c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"gs",staticStyle:{width:"98vw",margin:"0upx auto"}},[a("v-uni-rich-text",{staticClass:"fuwenben",staticStyle:{width:"98%",margin:"0upx auto"},attrs:{type:"node",nodes:t.data.content}})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"1b5f":function(t,e,a){"use strict";a.r(e);var n=a("18c0"),i=a("65cd");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("fc5e");var d=a("2877"),o=Object(d["a"])(i["default"],n["a"],n["b"],!1,null,"379d2343",null);e["default"]=o.exports},"5eb4":function(t,e,a){var n=a("edde");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("26456e86",n,!0,{sourceMap:!1,shadowMode:!1})},"65cd":function(t,e,a){"use strict";a.r(e);var n=a("01aa"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},edde:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".image1[data-v-379d2343]{width:100%;height:200%}",""])},fc5e:function(t,e,a){"use strict";var n=a("5eb4"),i=a.n(n);i.a}}]);