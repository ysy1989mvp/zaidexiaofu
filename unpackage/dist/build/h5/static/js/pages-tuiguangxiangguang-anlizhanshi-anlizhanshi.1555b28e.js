(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tuiguangxiangguang-anlizhanshi-anlizhanshi"],{"2e16":function(t,i,e){var a=e("459a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("157041f8",a,!0,{sourceMap:!1,shadowMode:!1})},"459a":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".bannerImg[data-v-10076749]{width:100%}.banner[data-v-10076749]{width:100%}.swiper[data-v-10076749]{height:%?350?%}.tagimg[data-v-10076749]{width:50%;height:%?80?%\n\t/* margin: 30upx 180upx; */}.part2[data-v-10076749]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?150?%}.bt[data-v-10076749]{font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#061637}.q1[data-v-10076749],.q3[data-v-10076749]{border-bottom:%?1?% solid #b2b2b2;height:%?15?%;width:18%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.q2[data-v-10076749]{margin:%?0?% %?15?%;color:#061637}.image1[data-v-10076749]{width:100%;height:100%}.schoollist[data-v-10076749]{width:90%;margin:%?0?% auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:%?30?%;margin-bottom:%?30?%}.school[data-v-10076749]{width:%?150?%;height:%?160?%;\n\t/* border: 1upx solid red; */display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:%?20?%}.schooltagimg[data-v-10076749]{width:100%;height:%?120?%}.schoolname[data-v-10076749]{text-align:center;-webkit-line-clamp:1;\n\t/* // 限制显示的文本的行数为3 */-webkit-box-orient:vertical;\n\t/* // 水平排列<p>，使其不纵向显示 */word-break:break-all;\n\t/* // 使<p>中的文字换行 */overflow:hidden;\n\t/* // 超出的文字部分隐藏 */-o-text-overflow:ellipsis;text-overflow:ellipsis;\n\t/* // 超出的文字部分用...来显示 */display:-webkit-box\n\t/* // 将<p>变成高度定死，宽度自适应的行内块元素 */}",""])},5242:function(t,i,e){"use strict";var a=e("2e16"),n=e.n(a);n.a},"9bd5":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"banner"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"5000",duration:"1500"}},t._l(t.data.images,function(t,i){return e("v-uni-swiper-item",{key:i},[e("img",{staticClass:"bannerImg",attrs:{src:t.image}})])}),1)],1),e("v-uni-view",{staticClass:"part2"},[e("v-uni-image",{staticClass:"tagimg",attrs:{src:"../../../static/ysy/anli/zu10.png"}})],1),e("v-uni-view",{staticClass:"bt"},[e("v-uni-view",{staticClass:"q1"}),e("v-uni-view",{staticClass:"q2"},[t._v("合作学校")]),e("v-uni-view",{staticClass:"q3"})],1),e("v-uni-view",{staticClass:"schoollist"},t._l(t.schooldata,function(i,a){return e("v-uni-view",{key:a,staticClass:"school"},[e("v-uni-image",{staticClass:"schooltagimg",attrs:{src:i.image,mode:"widthFix"}}),e("v-uni-view",{staticClass:"schoolname"},[t._v(t._s(i.value))])],1)}),1),e("v-uni-view",{staticClass:"bt"},[e("v-uni-view",{staticClass:"q1"}),e("v-uni-view",{staticClass:"q2"},[t._v("效果展示")]),e("v-uni-view",{staticClass:"q3"})],1),e("v-uni-view",{staticClass:"part3"},[e("v-uni-rich-text",{attrs:{nodes:t.data.content}})],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},a4cf:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{data:null,schooldata:null,homeSlide:["../../../static/ysy/anli/a1.png","../../../static/ysy/anli/a1.png","../../../static/ysy/anli/a1.png","../../../static/ysy/anli/a1.png","../../../static/ysy/anli/a1.png"]}},methods:{onLoad:function(){var t=this,i={},e="/api/index/aljs_content";this.util.request(e,"POST",i,function(i){console.log(JSON.stringify(i)),200==i.statusCode?1==i.data.code?t.data=i.data.data:t.util.showWindow(i.data.msg):t.util.showWindow("请求错误")});var a={},n="/api/school";this.util.request(n,"POST",a,function(i){console.log(JSON.stringify(i)),200==i.statusCode?1==i.data.code?t.schooldata=i.data.data:t.util.showWindow(i.data.msg):t.util.showWindow("请求错误")})}}};i.default=a},cdd9:function(t,i,e){"use strict";e.r(i);var a=e("a4cf"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},e0aa:function(t,i,e){"use strict";e.r(i);var a=e("9bd5"),n=e("cdd9");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("5242");var o=e("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"10076749",null);i["default"]=l.exports}}]);