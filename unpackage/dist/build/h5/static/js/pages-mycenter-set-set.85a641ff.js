(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mycenter-set-set"],{"0d42":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{data:null}},onLoad:function(){var t=this,i={},e="/api/user";this.util.request(e,"POST",i,function(i){200==i.statusCode?1==i.data.code?t.data=i.data.data:t.util.showWindow(i.data.msg):t.util.showWindow("请求错误")})},methods:{zhanghuanquan:function(){uni.navigateTo({url:"../zhanghuanquan/zhanghuanquan"})},wentifankui:function(){uni.navigateTo({url:"../serveback/serveback"})},guanyuzaide:function(){uni.navigateTo({url:"../guanyuzaide/guanyuzaide"})},addresses:function(){uni.navigateTo({url:"../../order/addr_list/addr_list"})},edit:function(){uni.navigateTo({url:"../Edit-data/Edit-data"})},loginout:function(){var t=this,i={},e="/api/user/logout";this.util.request(e,"POST",i,function(i){200==i.statusCode?1==i.data.code?uni.navigateTo({url:"../login/login"}):t.util.showWindow(i.data.msg):t.util.showWindow("请求错误")})}}};i.default=a},1277:function(t,i,e){var a=e("f45d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7d99715b",a,!0,{sourceMap:!1,shadowMode:!1})},"1bfd":function(t,i,e){"use strict";e.r(i);var a=e("0d42"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},a3ce:function(t,i,e){"use strict";e.r(i);var a=e("b386"),n=e("1bfd");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("f3f5");var o=e("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"76af4b5e",null);i["default"]=c.exports},b386:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"part1"},[e("v-uni-view",{staticClass:"part1a"},[e("v-uni-image",{staticClass:"TXA",attrs:{src:t.data.avatar}}),e("v-uni-view",{staticClass:"zl"},[e("v-uni-view",{staticClass:"number"},[t._v(t._s(t.data.mobile))]),e("v-uni-view",{staticClass:"school"},[t._v(t._s(t.data.school_name))])],1),e("v-uni-view",{staticClass:"bj",on:{click:function(i){i=t.$handleEvent(i),t.edit(i)}}},[t._v("编辑")])],1),e("v-uni-view",{staticClass:"fw",on:{click:function(i){i=t.$handleEvent(i),t.addresses(i)}}},[e("v-uni-view",{staticClass:"ee"},[e("v-uni-view",{staticClass:"c1"},[t._v("我的收货地址")]),e("v-uni-view",{staticClass:"c2"},[t._v("〉")])],1)],1)],1),e("v-uni-view",{staticClass:"part2"},[e("v-uni-view",{staticClass:"fw",on:{click:function(i){i=t.$handleEvent(i),t.zhanghuanquan(i)}}},[e("v-uni-view",{staticClass:"ee"},[e("v-uni-view",{staticClass:"c1"},[t._v("账户与安全")]),e("v-uni-view",{staticClass:"c2"},[t._v("〉")])],1)],1),e("v-uni-view",{staticClass:"fw",on:{click:function(i){i=t.$handleEvent(i),t.wentifankui(i)}}},[e("v-uni-view",{staticClass:"ee"},[e("v-uni-view",{staticClass:"c1"},[t._v("问题反馈")]),e("v-uni-view",{staticClass:"c2"},[t._v("〉")])],1)],1),e("v-uni-view",{staticClass:"fw",on:{click:function(i){i=t.$handleEvent(i),t.guanyuzaide(i)}}},[e("v-uni-view",{staticClass:"ee"},[e("v-uni-view",{staticClass:"c1"},[t._v("关于载德")]),e("v-uni-view",{staticClass:"c2"},[t._v("〉")])],1)],1)],1),e("v-uni-view",{staticClass:"fw butn login",on:{click:function(i){i=t.$handleEvent(i),t.loginout(i)}}},[t._v("账号切换")])],1),e("v-uni-view",{staticClass:"fw butn",on:{click:function(i){i=t.$handleEvent(i),t.loginout(i)}}},[t._v("退出登录")])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},f3f5:function(t,i,e){"use strict";var a=e("1277"),n=e.n(a);n.a},f45d:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-76af4b5e]{background-color:#e4e7ed}.TXA[data-v-76af4b5e]{height:%?110?%;width:%?130?%}.zl[data-v-76af4b5e]{font-size:%?28?%;width:60%;line-height:%?40?%}.part1[data-v-76af4b5e]{\n\t/* display: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between; */font-size:%?28?%;\n\t/* margin: 20upx 30upx;\t */background-color:#fff}.part1a[data-v-76af4b5e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:%?0?% %?30?%;padding-top:%?20?%}.bj[data-v-76af4b5e]{border-radius:%?10?%;border:%?2?% solid #000;padding:%?0?% %?20?%}.ee[data-v-76af4b5e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-top:%?15?%;margin-bottom:%?15?%;height:%?80?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;width:90%}.fw[data-v-76af4b5e]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-bottom:%?2?% solid #a5a5a5}.dizhi1[data-v-76af4b5e]{margin-bottom:%?35?%}.butn[data-v-76af4b5e]{height:%?80?%;margin-top:%?30?%;font-size:%?30?%}body.?%PAGE?%[data-v-76af4b5e]{background-color:#e4e7ed}",""])}}]);