(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-creation-creation"],{"4b79":function(t,n,e){"use strict";e.r(n);var a=e("7455"),i=e("f212");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("919c");var o=e("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"32365efe",null);n["default"]=l.exports},"4eec":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{page:1,xiaolei:null,fou:"0",currt:"3",tabCurrentIndex:0,navList:[{text:"全部",id:-1}],goodsData:null}},onLoad:function(){var t=this;this.tabCurrentIndex=0;var n={},e="/api/goods/category";this.util.request(e,"POST",n,function(n){if(console.log(JSON.stringify(n)),200==n.statusCode)if(1==n.data.code){t.data=n.data.data;for(var e=0;e<t.data.categorydata.length;e++){var a={text:t.data.categorydata[e].name,id:t.data.categorydata[e].id};t.navList.push(a)}}else t.util.showWindow(n.data.msg);else t.util.showWindow("请求错误")});var a={page:this.page},i="/api/goods";this.util.request(i,"POST",a,function(n){console.log(JSON.stringify(n)),200==n.statusCode?1==n.data.code?t.goodsData=n.data.data:t.util.showWindow(n.data.msg):t.util.showWindow("请求错误")})},methods:{changeTab:function(t){this.tabCurrentIndex=t.target.current},tabClick:function(t){var n=this;if(this.tabCurrentIndex=t,0!=t)this.fou=1,this.xiaolei=this.data.categorydata[t-1].childlist;else{this.fou=0;var e={page:this.page},a="/api/goods";this.util.request(a,"POST",e,function(t){console.log(JSON.stringify(t)),200==t.statusCode?1==t.data.code?n.goodsData=t.data.data:n.util.showWindow(t.data.msg):n.util.showWindow("请求错误")})}},cancer:function(){this.fou=0},select:function(t){var n=this,e={id:t,page:this.page},a="/api/goods";this.util.request(a,"POST",e,function(t){console.log(JSON.stringify(t)),200==t.statusCode?1==t.data.code?n.goodsData=t.data.data:n.util.showWindow(t.data.msg):n.util.showWindow("请求错误")})},goDetail:function(t){uni.navigateTo({url:"../shop_detail/shop_detail?id="+t})}}};n.default=a},7455:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"top_tag"},[e("v-uni-view",{staticClass:"navbar"},t._l(t.navList,function(n,a){return e("v-uni-view",{key:a,staticClass:"nav-item",class:{current:t.tabCurrentIndex===a},on:{click:function(n){n=t.$handleEvent(n),t.tabClick(a)}}},[t._v(t._s(n.text))])}),1),1==t.fou?e("v-uni-view",{staticClass:"zhengzhao",on:{click:function(n){n=t.$handleEvent(n),t.cancer(n)}}},[e("v-uni-view",{staticClass:"neirong"},t._l(t.xiaolei,function(n,a){return e("v-uni-view",{key:a,staticClass:"top_tag0",class:{xuanzhong:0==a},on:{click:function(e){e=t.$handleEvent(e),t.select(n.id)}}},[t._v(t._s(n.name))])}),1)],1):t._e()],1),e("v-uni-view",{staticClass:"center_content"},t._l(t.goodsData.pagedata.data,function(n,a){return e("v-uni-view",{key:a,staticClass:"row",on:{click:function(e){e=t.$handleEvent(e),t.goDetail(n.goods_id)}}},[e("v-uni-image",{staticClass:"goods_img",attrs:{src:n.image}}),e("v-uni-view",[e("v-uni-view",{staticClass:"title"},[t._v(t._s(n.goods_name))]),e("v-uni-view",{staticClass:"tags"},[e("v-uni-view",[t._v("修身")]),e("v-uni-view",[t._v("百搭")]),e("v-uni-view",[t._v("学院风")])],1),e("v-uni-view",{staticClass:"last"},[e("v-uni-view",{staticClass:"tag_price"},[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(n.goods_min_price))]),e("v-uni-view",{staticClass:"number"},[t._v(t._s(n.goods_sales)+"人付款")])],1),e("v-uni-view",{staticClass:"dingzhi"},[t._v("购买 〉")])],1)],1)],1)}),1)],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"919c":function(t,n,e){"use strict";var a=e("e8ba"),i=e.n(a);i.a},b9da:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* tab顶部切换 */.navbar[data-v-32365efe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.nav-item[data-v-32365efe]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:15px;color:#000;position:relative}.current[data-v-32365efe]{color:#c505c5}.current[data-v-32365efe]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #c5c5c5}*[data-v-32365efe]{\n\t/* border: 1px solid red; */}.top_tag[data-v-32365efe]{width:100%;position:fixed;z-index:100;top:%?0?%}.center_content[data-v-32365efe]{width:95vw;margin-left:5vw;margin-top:%?84?%}.row[data-v-32365efe]{float:left;width:43vw;height:37vh;margin-right:%?10?%;margin-top:%?20?%;margin-bottom:%?10?%}.goods_img[data-v-32365efe]{width:100%;height:75%}.title[data-v-32365efe]{font-size:%?28?%;-webkit-line-clamp:1;\n\t/* // 限制显示的文本的行数为3 */-webkit-box-orient:vertical;\n\t/* // 水平排列<p>，使其不纵向显示 */word-break:break-all;\n\t/* // 使<p>中的文字换行 */overflow:hidden;\n\t/* // 超出的文字部分隐藏 */-o-text-overflow:ellipsis;text-overflow:ellipsis;\n\t/* // 超出的文字部分用...来显示 */display:-webkit-box\n\t/* // 将<p>变成高度定死，宽度自适应的行内块元素 */}.tags[data-v-32365efe]{font-size:%?20?%;color:#a5a5a5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:%?40?%}.number[data-v-32365efe]{font-size:%?20?%;color:#a5a5a5}.tags>uni-view[data-v-32365efe]{padding:%?0?% %?10?%;border-right:%?2?% solid #a5a5a5}.last[data-v-32365efe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.price[data-v-32365efe]{font-size:%?28?%;color:#6e0012;margin-right:%?10?%}.tag_price[data-v-32365efe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?40?%}.dingzhi[data-v-32365efe]{font-size:%?24?%;color:#6e0012;line-height:%?46?%}.zhengzhao[data-v-32365efe]{\n\t/* float: left; */z-index:100;width:100%;height:100vh;background-color:rgba(65,65,65,.4);top:%?100?%}.neirong[data-v-32365efe]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-top:%?15?%}.top_tag0[data-v-32365efe]{width:%?100?%;border:%?2?% solid #aaa;border-radius:%?20?%;font-size:%?28?%;text-align:center;margin:%?10?% %?20?%}.xuanzhong[data-v-32365efe]{background-color:#061637;color:#fff}',""])},e8ba:function(t,n,e){var a=e("b9da");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("18023baa",a,!0,{sourceMap:!1,shadowMode:!1})},f212:function(t,n,e){"use strict";e.r(n);var a=e("4eec"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=i.a}}]);