(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-fuwufankui-fuwufankui"],{"0482":function(t,n,a){"use strict";a.r(n);var e=a("1888"),u=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=u.a},1888:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{data:null}},onLoad:function(){var t=this,n={},a="/api/index/fwfk_content";this.util.request(a,"POST",n,function(n){console.log(JSON.stringify(n)),200==n.statusCode?1==n.data.code?t.data=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},methods:{}};n.default=e},"1d8d":function(t,n,a){"use strict";a.r(n);var e=a("b082"),u=a("0482");for(var i in u)"default"!==i&&function(t){a.d(n,t,function(){return u[t]})}(i);a("61a2");var o=a("2877"),r=Object(o["a"])(u["default"],e["a"],e["b"],!1,null,"2520b696",null);n["default"]=r.exports},"61a2":function(t,n,a){"use strict";var e=a("b3cf"),u=a.n(e);u.a},"78ca":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,".image1[data-v-2520b696]{width:100%;height:200%}",""])},b082:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"gw"},[a("v-uni-rich-text",{attrs:{nodes:t.data.content}})],1)},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},b3cf:function(t,n,a){var e=a("78ca");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var u=a("4f06").default;u("14e1e0a0",e,!0,{sourceMap:!1,shadowMode:!1})}}]);