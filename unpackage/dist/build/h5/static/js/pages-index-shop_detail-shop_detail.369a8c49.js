(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shop_detail-shop_detail"],{"2dd7":function(t,e,i){"use strict";i.r(e);var a=i("a0c6"),s=i("aed8");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("54be");var n=i("2877"),d=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"b5c62ade",null);e["default"]=d.exports},"54be":function(t,e,i){"use strict";var a=i("6b08"),s=i.n(a);s.a},6365:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{biaoji:[],goodsId:null,sld:!1,show_number:!1,bannerlist:[],goodsdata:"",canshulist:[],total_price:0,specData:[],selectGuiges:[],selectGuigesName_value:[]}},onLoad:function(t){this.goodsId=t.id},onShow:function(){var t=this,e={goodId:this.goodsId},i="/api/goods/detail";this.util.request(i,"GET",e,function(e){if(200==e.statusCode)if(1==e.data.code){t.bannerlist=e.data.data.detail.images,t.goodsdata=e.data.data.detail,t.canshulist=e.data.data.detail.spec,t.total_price=e.data.data.detail.price,t.specData=e.data.data.specData;for(var i=0;i<t.specData.length;i++)t.biaoji.push(-1);var a=new RegExp('style="',"g"),s="";t.goodsdata.content.indexOf('style="')>-1?s=t.goodsdata.content.replace(a,'style="max-width: 100%;'):(a=new RegExp("<img","g"),s=t.goodsdata.content.replace(a,'<img style="max-width: 100%;"')),t.goodsdata.content=s}else t.util.showWindow(e.data.msg);else t.util.showWindow("请求错误")})},methods:{selectGuige:function(t,e,i,a,s,o,n,d){var l=this,r=!0,c=!1,u=void 0;try{for(var b,f=d[Symbol.iterator]();!(r=(b=f.next()).done);r=!0){var w=b.value;w.item_id===e?this.$set(w,"selected",!0):this.$set(w,"selected",!1)}}catch(y){c=!0,u=y}finally{try{r||null==f.return||f.return()}finally{if(c)throw u}}for(var v=!1,p=0;p<this.selectGuiges.length;p++)this.selectGuiges[p].group_id==t&&(this.selectGuiges[p].item_id=e,this.selectGuigesName_value[p].item_value=a,v=!0);if(!v){var g={group_id:t,item_id:e},x={group_name:i,item_value:a};this.selectGuiges.push(g),this.selectGuigesName_value.push(x)}var h={goods_id:parseInt(this.goodsId),guige:this.selectGuiges,goods_num:1},m={paramsdata:JSON.stringify(h)},k="/api/order/calculationprice";this.util.request(k,"POST",m,function(t){200==t.statusCode?1==t.data.code?l.total_price=t.data.data.order_total_price:l.util.showWindow(t.data.msg):l.util.showWindow("请求错误")})},buy:function(){this.show_number=!0},bubuy:function(t){this.show_number=!1},confirmBuy:function(){var t={goods_id:this.goodsdata.goods_id,selectGuiges:this.selectGuiges,goods_name:this.goodsdata.goods_name,selectGuigesName_value:this.selectGuigesName_value,totalPrice:this.total_price,goodsimg:this.goodsdata.image};uni.navigateTo({url:"../../order/confirm_order/confirm_order?type=1&data="+JSON.stringify(t)})}}};e.default=a},"6b08":function(t,e,i){var a=i("6da8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("95e217f0",a,!0,{sourceMap:!1,shadowMode:!1})},"6da8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".title[data-v-b5c62ade]{font-size:%?36?%;color:#8f8f94}.swiper[data-v-b5c62ade]{height:%?500?%}.bannerImg[data-v-b5c62ade]{width:100%}\n\n/* // swiper-item 里面的图片高度\n.swiper-item image {\n\twidth: 100%;\n\theight: 350upx;\n} */.xf[data-v-b5c62ade]{background-color:#061637;color:#fff;\n\t/* width: 200upx; */font-size:%?25?%;padding:%?0?% %?10?%;margin-top:%?30?%;\n\t/* display: block; */\n\t/* display: flex;\n\tjustify-content: center; */border-radius:%?100?%\n\t/* -webkit-line-clamp: 1; */\n\t/* // 限制显示的文本的行数为3 */\n\t/* -webkit-box-orient: vertical; */\n\t/* // 水平排列<p>，使其不纵向显示 */\n\t/* word-break: break-all; */\n\t/* // 使<p>中的文字换行 */\n\t/* overflow: hidden; */\n\t/* // 超出的文字部分隐藏 */\n\t/* text-overflow: ellipsis; */\n\t/* // 超出的文字部分用...来显示 */\n\t/* display: -webkit-box; */\n\t/* // 将<p>变成高度定死，宽度自适应的行内块元素 */}.p[data-v-b5c62ade]{color:#6e0012;font-size:%?35?%}.w[data-v-b5c62ade]{color:#061637;font-size:%?28?%;margin-top:%?10?%}.tu[data-v-b5c62ade]{width:%?71?%;height:%?5?%;padding-top:%?12?%;padding-right:%?20?%}.jdtw[data-v-b5c62ade]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:%?30?%;color:#6e0012}.yy[data-v-b5c62ade]{font-size:%?16?%}.D[data-v-b5c62ade]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;\n\t/* align-items: center; */-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:fixed;bottom:%?0?%}.HJ[data-v-b5c62ade]{text-align:center;width:50%;color:#6e0012;height:%?80?%;line-height:%?80?%;background-color:#e5e5e5}.GM[data-v-b5c62ade]{text-align:center;width:50%;background-color:#6e0012;color:#fff;height:%?80?%;line-height:%?80?%}.see1[data-v-b5c62ade]{background-color:#f5f5f5;margin-bottom:%?81?%}.w1[data-v-b5c62ade]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:%?240?%;margin-top:%?20?%;margin-bottom:%?40?%}.t2[data-v-b5c62ade]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:left;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:55%;height:%?150?%;margin-top:%?25?%}.aa3[data-v-b5c62ade]{color:#6e0012;font-size:%?30?%}.aa4[data-v-b5c62ade]{font-size:%?25?%}.aa5[data-v-b5c62ade]{font-size:%?25?%}.tt[data-v-b5c62ade]{width:%?250?%;height:100%}.SZ[data-v-b5c62ade]{height:50%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;\n\t/* margin: -50upx 0; */margin-top:%?5?%}.t3[data-v-b5c62ade]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:%?50?%;font-size:%?25?%;border-top:%?2?% solid #e5e5e5;border-bottom:%?2?% solid #e5e5e5}.tex[data-v-b5c62ade]{width:15%;background-color:#e5e5e5;padding:%?6?% %?12?%;border-radius:%?10?%;margin:%?12?%;text-align:center;font-size:%?24?%}.l3a[data-v-b5c62ade]{width:90%;margin:%?0?% auto}.QR[data-v-b5c62ade]{text-align:center;background-color:#6e0012;color:#fff;height:%?80?%;line-height:%?80?%}.zhezhao[data-v-b5c62ade]{position:absolute;bottom:%?0?%;background-color:#fff;width:100%;height:100vh;background-color:rgba(55,55,55,.5);border-top:%?2?% solid #e5e5e5;border-bottom:%?2?% solid #e5e5e5;\n\t/* border: 2upx solid red; */display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.part3[data-v-b5c62ade]{\n\t/* border: 2upx solid red;\n\t */background-color:#fff}.t3a[data-v-b5c62ade],.t3b[data-v-b5c62ade]{line-height:%?60?%}.bianse[data-v-b5c62ade]{background-color:#1bcc8d}.part2[data-v-b5c62ade]{width:90%;margin:%?0?% auto}.yincang[data-v-b5c62ade]{display:none}",""])},a0c6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"false",interval:"50000000",duration:"1500"}},t._l(t.bannerlist,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-image",{staticClass:"bannerImg",attrs:{src:t,mode:"scaleToFill"}})],1)}),1)],1),i("v-uni-view",{staticClass:"part2"},[i("v-uni-view",[i("v-uni-text",{staticClass:"xf"},[t._v(t._s(t.goodsdata.goods_name))])],1),i("v-uni-view",{staticClass:"w"},[t._v(t._s(t.goodsdata.first_title))]),i("v-uni-view",{staticClass:"p"},[t._v("￥"+t._s(t.goodsdata.price))]),i("v-uni-view",{staticClass:"jdtw"},[i("v-uni-image",{staticClass:"tu",attrs:{src:"../../../static/ysy/jdt.png",mode:""}}),i("v-uni-view",{staticClass:"yy"},[t._v("已定制85%")])],1)],1),i("v-uni-view",{staticClass:"gs",staticStyle:{width:"90vw",margin:"0upx auto"}},[i("v-uni-rich-text",{attrs:{nodes:t.goodsdata.content}})],1),i("v-uni-view",{staticClass:"D"},[i("v-uni-view",{staticClass:"HJ"},[t._v("合计：￥"+t._s(t.total_price))]),i("v-uni-view",{staticClass:"GM",on:{click:function(e){e=t.$handleEvent(e),t.buy(e)}}},[t._v("立即购买")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show_number,expression:"show_number"}],staticClass:"zhezhao",on:{click:function(e){e=t.$handleEvent(e),t.bubuy(e)}}},[i("v-uni-view",{staticClass:"part3"},[i("v-uni-view",{staticClass:"l3a"},[i("v-uni-view",{staticClass:"w1"},[i("img",{staticClass:"tt",attrs:{src:t.goodsdata.image}}),i("v-uni-view",{staticClass:"t2"},[i("v-uni-view",{staticClass:"aa3"},[t._v("￥"+t._s(t.total_price))]),i("v-uni-view",{staticClass:"aa4"},[t._v("库存1236件")]),i("v-uni-view",{staticClass:"aa5"},[t._v("选择 需要的规格")])],1)],1),t._l(t.specData,function(e,a){return i("v-uni-view",{key:a},[i("v-uni-view",{staticClass:"t3"},[i("v-uni-view",{staticClass:"t3a"},[t._v(t._s(e.group_name))]),i("v-uni-view",{staticClass:"t3b"})],1),i("v-uni-view",{staticClass:"SZ"},t._l(e.spec_items,function(s,o){return i("v-uni-text",{key:o,staticClass:"tex",class:{bianse:s.selected},attrs:{"data-id":a},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.selectGuige(e.group_id,s.item_id,e.group_name,s.spec_value,o,i,a,e.spec_items)}}},[t._v(t._s(s.spec_value))])}),1)],1)})],2),i("v-uni-view",{staticClass:"QR",on:{click:function(e){e=t.$handleEvent(e),t.confirmBuy(e)}}},[t._v("确认")])],1)],1)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},aed8:function(t,e,i){"use strict";i.r(e);var a=i("6365"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a}}]);