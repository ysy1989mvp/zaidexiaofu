(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-questionback-questionback"],{"1c5f":function(t,e,a){"use strict";a.r(e);var n=a("d10d"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);e["default"]=i.a},"25b4":function(t,e,a){var n=a("285c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("31f67dc8",n,!0,{sourceMap:!1,shadowMode:!1})},"285c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".pt[data-v-d8154c94]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.image1[data-v-d8154c94]{width:90%;height:200%;margin:%?0?% auto}",""])},"8d63":function(t,e,a){"use strict";a.r(e);var n=a("9181"),i=a("1c5f");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);a("a667");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"d8154c94",null);e["default"]=d.exports},9181:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"gs",staticStyle:{width:"100vw"}},[a("v-uni-rich-text",{staticClass:"fuwenben",staticStyle:{width:"98%",margin:"0upx auto"},attrs:{type:"node",nodes:t.data.content}})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a667:function(t,e,a){"use strict";var n=a("25b4"),i=a.n(n);i.a},d10d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data:null}},onLoad:function(){var t=this,e={},a="/api/index/cjwt_content";this.util.request(a,"POST",e,function(e){if(200==e.statusCode)if(1==e.data.code){t.data=e.data.data;var a=new RegExp('style="',"gi"),n=t.data.content.replace(a,'style="max-width: 100%;width:100%;');t.data.content=n}else t.util.showWindow(e.data.msg);else t.util.showWindow("请求错误")})},methods:{}};e.default=n}}]);