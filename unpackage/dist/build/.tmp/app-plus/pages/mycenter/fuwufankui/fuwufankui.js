(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mycenter/fuwufankui/fuwufankui"],{"00eb":function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return a})},"0482":function(t,n,u){"use strict";u.r(n);var e=u("42e4"),a=u.n(e);for(var o in e)"default"!==o&&function(t){u.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"1d8d":function(t,n,u){"use strict";u.r(n);var e=u("00eb"),a=u("0482");for(var o in a)"default"!==o&&function(t){u.d(n,t,function(){return a[t]})}(o);u("bed4");var i=u("2877"),r=Object(i["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},"42e4":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{data:null}},onLoad:function(){var t=this,n={},u="/api/index/fwfk_content";this.util.request(u,"POST",n,function(n){console.log(JSON.stringify(n)," at pages\\mycenter\\fuwufankui\\fuwufankui.vue:19"),200==n.statusCode?1==n.data.code?t.data=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},methods:{}};n.default=e},8234:function(t,n,u){},bed4:function(t,n,u){"use strict";var e=u("8234"),a=u.n(e);a.a}},[["e06b","common/runtime","common/vendor"]]]);