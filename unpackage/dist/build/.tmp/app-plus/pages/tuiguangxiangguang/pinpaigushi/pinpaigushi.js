(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuiguangxiangguang/pinpaigushi/pinpaigushi"],{2793:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return u})},5300:function(t,n,a){"use strict";a.r(n);var i=a("6453"),u=a.n(i);for(var e in i)"default"!==e&&function(t){a.d(n,t,function(){return i[t]})}(e);n["default"]=u.a},6453:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{data:"",homeSlide:["../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png","../../../static/ysy/gs.png"]}},onLoad:function(){var t=this,n={},a="/api/index/ppgs_content";this.util.request(a,"POST",n,function(n){console.log(JSON.stringify(n)," at pages\\tuiguangxiangguang\\pinpaigushi\\pinpaigushi.vue:35"),200==n.statusCode?1==n.data.code?t.data=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},methods:{}};n.default=i},b19f:function(t,n,a){},dd16:function(t,n,a){"use strict";a.r(n);var i=a("2793"),u=a("5300");for(var e in u)"default"!==e&&function(t){a.d(n,t,function(){return u[t]})}(e);a("deb7");var s=a("2877"),o=Object(s["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},deb7:function(t,n,a){"use strict";var i=a("b19f"),u=a.n(i);u.a}},[["5d41","common/runtime","common/vendor"]]]);