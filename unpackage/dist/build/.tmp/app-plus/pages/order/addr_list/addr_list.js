(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/addr_list/addr_list"],{"208c":function(t,n,a){},"71db":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{addrs:[]}},onShow:function(){var t=this,n={},a="/api/address/lists";this.util.request(a,"POST",n,function(n){200==n.statusCode?1==n.data.code?t.addrs=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},methods:{addAddr:function(n,a){t.navigateTo({url:"../addr_list/addressManage?type="+n+"&addr_id="+a})},selected:function(n){t.navigateTo({url:"../confirm_order/confirm_order?type=2&addr_id="+n})}}};n.default=a}).call(this,a("6e42")["default"])},"94ff":function(t,n,a){"use strict";a.r(n);var e=a("71db"),d=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=d.a},b1ea:function(t,n,a){"use strict";var e=a("208c"),d=a.n(e);d.a},c5bb:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},d=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return d})},ef14:function(t,n,a){"use strict";a.r(n);var e=a("c5bb"),d=a("94ff");for(var r in d)"default"!==r&&function(t){a.d(n,t,function(){return d[t]})}(r);a("b1ea");var u=a("2877"),o=Object(u["a"])(d["default"],e["a"],e["b"],!1,null,null,null);n["default"]=o.exports}},[["5645","common/runtime","common/vendor"]]]);