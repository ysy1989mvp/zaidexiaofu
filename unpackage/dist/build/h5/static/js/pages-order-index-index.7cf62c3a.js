(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-index-index"],{"1a03":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{currt:"3",tabCurrentIndex:0,data:[],navList:[{state:0,text:"全部",orderList:[]},{state:1,text:"待付款",orderList:[]},{state:2,text:"待发货",orderList:[]},{state:3,text:"待收货",orderList:[]},{state:4,text:"已完成",orderList:[]}]}},onShow:function(){var n=this;this.tabCurrentIndex=this.util.tabCurrentIndex;var t={},e="";switch(this.tabCurrentIndex){case 0:e="/api/order/all";break;case 1:e="/api/order/unpay";break;case 2:e="/api/order/unfreight";break;case 3:e="/api/order/unreceipt";break;case 4:e="/api/order/orderfinish";break}this.util.request(e,"GET",t,function(t){console.log(JSON.stringify(t)),200==t.statusCode?1==t.data.code?n.data=t.data.data:n.util.showWindow(t.data.msg):n.util.showWindow("请求错误")})},methods:{cancer:function(n){var t=this,e={id:n},i="/api/order/cancel";this.util.request(i,"GET",e,function(n){console.log(JSON.stringify(n)),200==n.statusCode?(n.data.code,t.util.showWindow(n.data.msg)):t.util.showWindow("请求错误")})},goPay:function(n){uni.navigateTo({url:"../orderdetail/orderdetail?id="+n})},confirmshouhuo:function(n){var t=this,e={id:n},i="/api/order/finish";this.util.request(i,"GET",e,function(n){console.log(JSON.stringify(n)),200==n.statusCode?(n.data.code,t.util.showWindow(n.data.msg)):t.util.showWindow("请求错误")})},goodsdetail:function(n){uni.navigateTo({url:"../../index/shop_detail/shop_detail?id="+n})},tabClick:function(n){var t=this;this.tabCurrentIndex=n,console.log("tabclick："+this.tabCurrentIndex);var e={},i="";switch(n){case 0:i="/api/order/all";break;case 1:i="/api/order/unpay";break;case 2:i="/api/order/unfreight";break;case 3:i="/api/order/unreceipt";break;case 4:i="/api/order/orderfinish";break}this.util.request(i,"GET",e,function(n){200==n.statusCode?1==n.data.code?t.data=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},detail:function(n){uni.navigateTo({url:"../orderdetail/orderdetail?id="+n})}}};t.default=i},3455:function(n,t,e){"use strict";var i=e("f097"),a=e.n(i);a.a},"413e":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"navbar"},n._l(n.navList,function(t,i){return e("v-uni-view",{key:i,staticClass:"nav-item",class:{current:n.tabCurrentIndex===i},on:{click:function(t){t=n.$handleEvent(t),n.tabClick(i)}}},[n._v(n._s(t.text))])}),1),e("v-uni-view",{staticClass:"center_content"},n._l(n.data,function(t,i){return e("v-uni-view",{key:i,staticClass:"item",on:{click:function(e){e=n.$handleEvent(e),n.detail(t.order_no)}}},[e("v-uni-view",{staticClass:"part1"},[e("v-uni-view",{staticClass:"order_no"},[n._v("订单号:"+n._s(t.order_no))]),e("v-uni-view",{staticClass:"status"},[n._v(n._s(t.order_status_txt))])],1),e("v-uni-view",{staticClass:"part2"},[e("v-uni-view",{staticClass:"image-view"},[e("v-uni-image",{attrs:{src:t.goods[0].image}})],1),e("v-uni-view",{staticClass:"neirong"},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(t.goods[0].goods_name))]),e("v-uni-view",[n._v("")])],1),e("v-uni-view",[e("v-uni-view",{staticClass:"status"},[n._v("￥"+n._s(t.pay_price))]),e("v-uni-view",{staticClass:"status huise"},[n._v("×"+n._s(t.goods[0].total_num))])],1)],1),e("v-uni-view",{staticClass:"part3"},[e("v-uni-view",{staticClass:"yunfei"})],1),10==t.paystatus?e("v-uni-view",{staticClass:"option"},[e("v-uni-view",{on:{click:function(e){e=n.$handleEvent(e),n.cancer(t.order_no)}}},[n._v("取消订单")]),e("v-uni-view",{on:{click:function(e){e=n.$handleEvent(e),n.goPay(t.order_no)}}},[n._v("订单付款")])],1):n._e(),20==t.paystatus&&10==t.freight?e("v-uni-view",{staticClass:"option"},[20==t.paystatus&&20==t.freight&&10==t.receipt_status?e("v-uni-view",{staticClass:"option"},[e("v-uni-view",{staticClass:"red",on:{click:function(e){e=n.$handleEvent(e),n.confirmshouhuo(t.order_no)}}},[n._v("确认收货")])],1):n._e(),30==t.order_status?e("v-uni-view",{staticClass:"option"},[e("v-uni-view",{on:{click:function(e){e=n.$handleEvent(e),n.goodsdetail(t.goods[0].goods_id)}}},[n._v("再买一件")])],1):n._e()],1):n._e()],1)}),1)],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},b266:function(n,t,e){"use strict";e.r(t);var i=e("413e"),a=e("f8b9");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("3455");var o=e("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"c8da6b4a",null);t["default"]=r.exports},d9aa:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* tab顶部切换 */.navbar[data-v-c8da6b4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.nav-item[data-v-c8da6b4a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:15px;color:#000;position:relative}.current[data-v-c8da6b4a]{color:#c505c5}.current[data-v-c8da6b4a]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #c5c5c5}.center_content[data-v-c8da6b4a]{width:100%;background-color:#fff\n\t/* \t\tdisplay: flex;\n\talign-items: center; */}.container[data-v-c8da6b4a],.content[data-v-c8da6b4a],uni-page-body[data-v-c8da6b4a]{background-color:#eee}.item[data-v-c8da6b4a]{width:90%;background-color:#fff;border-radius:%?20?%;margin-top:%?10?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:%?10?% auto;padding:%?0?% %?15?%;padding-bottom:%?35?%;border-bottom:%?2?% solid #eee}.part1[data-v-c8da6b4a]{width:96%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:%?20?%;margin-bottom:%?10?%}.part2[data-v-c8da6b4a]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.image-view>uni-image[data-v-c8da6b4a]{width:23vw;height:23vw}.order_no[data-v-c8da6b4a]{font-size:%?26?%}.status[data-v-c8da6b4a]{font-size:%?26?%;color:#6e0012;text-align:right}.name[data-v-c8da6b4a]{font-size:%?28?%;font-weight:700;-webkit-line-clamp:1;\n\t/* // 限制显示的文本的行数为3 */-webkit-box-orient:vertical;\n\t/* // 水平排列<p>，使其不纵向显示 */word-break:break-all;\n\t/* // 使<p>中的文字换行 */overflow:hidden;\n\t/* // 超出的文字部分隐藏 */-o-text-overflow:ellipsis;text-overflow:ellipsis;\n\t/* // 超出的文字部分用...来显示 */display:-webkit-box\n\t/* // 将<p>变成高度定死，宽度自适应的行内块元素 */}.neirong[data-v-c8da6b4a]{line-height:%?45?%;width:44vw;height:%?170?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.biaoqian[data-v-c8da6b4a],.daxiao[data-v-c8da6b4a]{font-size:%?20?%}.biaoqian[data-v-c8da6b4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.biaoqian>uni-view[data-v-c8da6b4a]{margin-right:%?10?%;color:#6e0012}.huise[data-v-c8da6b4a]{color:#e5e5e5}.part3[data-v-c8da6b4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?26?%;color:#656565;width:100%;line-height:%?50?%}.shangp[data-v-c8da6b4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.yijian[data-v-c8da6b4a]{margin-right:%?20?%}.option[data-v-c8da6b4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#656565;font-size:%?26?%;width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.option>uni-view[data-v-c8da6b4a]{\n\t/* width: 100upx; */border:%?2?% solid #aaa;margin:%?8?% %?10?%;width:%?150?%;border-radius:%?20?%;height:%?40?%;text-align:center;line-height:%?40?%}.red[data-v-c8da6b4a]{color:red}body.?%PAGE?%[data-v-c8da6b4a]{background-color:#eee}',""])},f097:function(n,t,e){var i=e("d9aa");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7e71fb52",i,!0,{sourceMap:!1,shadowMode:!1})},f8b9:function(n,t,e){"use strict";e.r(t);var i=e("1a03"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=a.a}}]);