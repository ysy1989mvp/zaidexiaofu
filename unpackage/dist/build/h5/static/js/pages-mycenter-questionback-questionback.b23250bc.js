(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-questionback-questionback"],{"1c5f":function(t,e,n){"use strict";n.r(e);var a=n("d10d"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"224c":function(t,e,n){"use strict";var a=n("468d"),i=n.n(a);i.a},"468d":function(t,e,n){var a=n("dd02");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("cc68d2e8",a,!0,{sourceMap:!1,shadowMode:!1})},"8d63":function(t,e,n){"use strict";n.r(e);var a=n("baf2"),i=n("1c5f");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("224c");var o=n("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"cfbe86f4",null);e["default"]=u.exports},baf2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pt"},[n("v-uni-rich-text",{attrs:{nodes:t.data.content}})],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},d10d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{data:null}},onLoad:function(){var t=this,e={},n="/api/index/cjwt_content";this.util.request(n,"POST",e,function(e){console.log(JSON.stringify(e)),200==e.statusCode?1==e.data.code?t.data=e.data.data:t.util.showWindow(e.data.msg):t.util.showWindow("请求错误")})},methods:{}};e.default=a},dd02:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".pt[data-v-cfbe86f4]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.image1[data-v-cfbe86f4]{width:90%;height:200%;margin:%?0?% auto}",""])}}]);