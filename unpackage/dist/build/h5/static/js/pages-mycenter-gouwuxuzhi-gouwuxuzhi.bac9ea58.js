(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-gouwuxuzhi-gouwuxuzhi"],{1573:function(t,e,a){"use strict";a.r(e);var n=a("b875"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},1767:function(t,e,a){var n=a("fed5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("9dcc46da",n,!0,{sourceMap:!1,shadowMode:!1})},"9c66":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"gs",staticStyle:{width:"100vw"}},[a("v-uni-rich-text",{staticClass:"fuwenben",staticStyle:{width:"98%",margin:"0upx auto"},attrs:{type:"node",nodes:t.data.content}})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},b875:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data:null}},onShow:function(){var t=this,e={},a="/api/index/gwxz_content";this.util.request(a,"POST",e,function(e){if(200==e.statusCode)if(1==e.data.code){t.data=e.data.data;var a=new RegExp('style="',"gi"),n="";t.data.content.indexOf('style="')>-1?n=t.data.content.replace(a,'style="max-width: 100%;'):(a=new RegExp("<img","gi"),n=t.data.content.replace(a,'<img style="max-width: 100%;width:100%;"')),t.data.content=n}else t.util.showWindow(e.data.msg);else t.util.showWindow("请求错误")})},methods:{}};e.default=n},cbe7:function(t,e,a){"use strict";a.r(e);var n=a("9c66"),i=a("1573");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("f4ce");var c=a("2877"),o=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"211ab574",null);e["default"]=o.exports},f4ce:function(t,e,a){"use strict";var n=a("1767"),i=a.n(n);i.a},fed5:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".pt[data-v-211ab574]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.image1[data-v-211ab574]{width:90%;height:200%;margin:%?0?% auto}",""])}}]);