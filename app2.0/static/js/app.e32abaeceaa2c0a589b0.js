webpackJsonp([1],{178:function(t,e,n){"use strict";function s(){var t={inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp",channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:759768811},e={param:"jsonpCallback",prefix:"jp"};return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,e)}function i(t){var e={inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp",hostUin:0,needNewCode:0,order:"listen",platform:"yqq",begin:0,num:30,songstatus:1,singermid:t,g_tk:5381},s={param:"jsonpCallback",prefix:"jp"};return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,s)}e.b=s,e.a=i;var r=n(180)},179:function(t,e,n){"use strict";function s(t,e,n){return e="data-"+e,n?t.setAttribute(e,n):t.getAttribute(e)}function i(t){return!1!==a&&("standard"===a?t:a+t.charAt(0).toUpperCase()+t.substr(1))}e.a=s,e.b=i;var r=document.createElement("div").style,a=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==r[t[e]])return e;return!1}()},180:function(t,e,n){"use strict";function s(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+i(e),new a.a(function(e,s){c()(t,n,function(t,n){t?s(t):e(n)})})}function i(t){var e="";for(var n in t){var s=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(s)}return e?e.substring(1):""}e.a=s;var r=n(176),a=n.n(r),o=n(207),c=n.n(o)},181:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return l});var s="SET_DTLID",i="SET_PLAYING_STATE",r="SET_FULL_SCREEN",a="SET_PLAYLIST",o="SET_SEQUENCE_LIST",c="SET_PLAY_MODE",l="SET_CURRENT_INDEX"},183:function(t,e,n){function s(t){n(243)}var i=n(10)(n(510),n(225),s,"data-v-081d0e68",null);t.exports=i.exports},184:function(t,e){},186:function(t,e,n){"use strict";var s=n(82),i=n(498),r=n(218),a=n.n(r),o=n(215),c=n.n(o),l=n(214),u=n.n(l),f=n(219),d=n.n(f),p=n(220),h=n.n(p);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/page10"},{path:"/page10",component:a.a},{path:"/catalog",component:c.a,children:[{path:":id",component:u.a}]},{path:"/page30",component:d.a},{path:"/page40",component:h.a}]})},187:function(t,e,n){"use strict";var s=n(82),i=n(55),r=n(506),a=n(507),o=n(509),c=n(508),l=n(257);n.n(l);s.a.use(i.a);e.a=new i.a.Store({actions:r,getters:a,state:o.a,mutations:c.a,strict:!1,plugin:[]})},210:function(t,e,n){function s(t){n(251)}var i=n(10)(n(511),n(234),s,"data-v-7dde9356",null);t.exports=i.exports},211:function(t,e,n){function s(t){n(248)}var i=n(10)(n(512),n(230),s,"data-v-374acf54",null);t.exports=i.exports},212:function(t,e,n){function s(t){n(250)}var i=n(10)(n(514),n(232),s,"data-v-5e705416",null);t.exports=i.exports},213:function(t,e,n){function s(t){n(242)}var i=n(10)(n(515),n(224),s,"data-v-0033ce50",null);t.exports=i.exports},214:function(t,e,n){function s(t){n(245)}var i=n(10)(n(516),n(227),s,"data-v-185d7f1b",null);t.exports=i.exports},215:function(t,e,n){function s(t){n(247)}var i=n(10)(n(517),n(229),s,"data-v-18b022a2",null);t.exports=i.exports},216:function(t,e,n){function s(t){n(249)}var i=n(10)(n(518),n(231),s,null,null);t.exports=i.exports},217:function(t,e,n){function s(t){n(246)}var i=n(10)(n(519),n(228),s,"data-v-187ad35b",null);t.exports=i.exports},218:function(t,e,n){function s(t){n(252)}var i=n(10)(n(520),n(235),s,"data-v-8cb7ca8a",null);t.exports=i.exports},219:function(t,e,n){function s(t){n(254)}var i=n(10)(n(521),n(237),s,null,null);t.exports=i.exports},220:function(t,e,n){function s(t){n(256)}var i=n(10)(n(522),n(239),s,"data-v-eb688fca",null);t.exports=i.exports},221:function(t,e,n){function s(t){n(253)}var i=n(10)(n(523),n(236),s,"data-v-abcff3ca",null);t.exports=i.exports},222:function(t,e,n){function s(t){n(255)}var i=n(10)(n(524),n(238),s,"data-v-eb38364a",null);t.exports=i.exports},223:function(t,e,n){function s(t){n(244)}var i=n(10)(n(525),n(226),s,"data-v-10a10a0a",null);t.exports=i.exports},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sonlist"},[n("ul",t._l(t.sons,function(e,s){return n("li",{staticClass:"item",on:{click:function(e){t.selectItem(t.item,s)}}},[n("div",{staticClass:"content"},[n("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.getDesc(e)))])])])}))])},staticRenderFns:[]}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("x-header"),t._v(" "),n("tabLink"),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("player")],1)},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",[t._v("首页")])])}]}},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("dtl-list",{attrs:{sons:t.sons,title:t.title,"bg-image":t.bgImage}})],1)},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("normal title")]),t._v(" "),n("router-link",{staticClass:"mine",attrs:{tag:"div",to:"/user"}},[n("i",{staticClass:"icon-mine"})])],1)},staticRenderFns:[]}},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog"},[n("ListView",{attrs:{data:t.catalog},on:{select:t.selectSin}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar"},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchMove(e)},touchend:function(e){e.preventDefault(),t.progressTouchEnd(e)}}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dtl-list"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle}),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{data:t.sons,probeType:t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[n("div",{staticClass:"sonlist-wrapper"},[n("son-list",{attrs:{sons:t.sons},on:{select:t.selectItem}})],1)])],1)},staticRenderFns:[]}},232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===s}})}))])},staticRenderFns:[]}},233:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},234:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.getScrollPos}},[n("ul",t._l(t.data,function(e,s){return n("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e,s){return n("li",{staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{staticClass:"avatar",attrs:{src:e.avatar}}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),n("div",{staticClass:"list-shortcut",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)},touchend:function(t){t.stopPropagation()}}},[n("ul",t._l(t.shortcutList,function(e,s){return n("li",{staticClass:"item",class:{current:t.currentIndex===s},attrs:{"data-index":s}},[t._v("\n          "+t._s(e)+"\n       ")])}))])])},staticRenderFns:[]}},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page10"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[n("div",{staticClass:"slider-warpper opacity0"},[n("slider",t._l(t.recommend,function(t,e){return n("div",[n("a",{attrs:{href:t.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:t.picUrl}})])])}))],1),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门推荐")]),t._v(" "),n("ul",t._l(t.discList,function(e,s){return n("li",{staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e.imgurl,width:"60",height:"60"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name"},[t._v(t._s(e.creator.name))]),t._v(" "),n("p",{staticClass:"ddesc"},[t._v(t._s(e.dissname))])])])}))])])])],1)},staticRenderFns:[]}},236:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length,expression:"playlist.length"}],staticClass:"player"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[t._m(0,!1,!1),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.currentson.name))]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.currentson.singer))])]),t._v(" "),n("div",{staticClass:"middle"},[n("div",{ref:"middleL",staticClass:"middle-l"},[n("div",{ref:"cmgWrapper",staticClass:"cmg-wrapper"},[n("div",{staticClass:"cmgBox"},[n("img",{staticClass:"cmg",attrs:{src:t.currentson.image}})])]),t._v(" "),t._m(1,!1,!1)])]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentson.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[t._m(2,!1,!1),t._v(" "),t._m(3,!1,!1),t._v(" "),n("div",{staticClass:"icon i-center"},[n("i",{class:t.playIcon,on:{click:t.togglePlay}})]),t._v(" "),t._m(4,!1,!1),t._v(" "),t._m(5,!1,!1)])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"icon"},[n("img",{attrs:{width:"40",height:"40",src:t.currentson.image}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name"},[t._v(t._s(t.currentson.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.currentson.singer))])])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentson.url},on:{timeupdate:t.updateTime}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("img",{attrs:{width:"100%",height:"100%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gcWrapper"},[n("div",{staticClass:"rungc"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon i-left"},[n("i",{staticClass:"icon-loop"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon i-left"},[n("i",{staticClass:"icon-prev"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon-next"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon-loop"})])}]}},237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n   sorry,the page is no fond!\n   "),n("router-view")],1)},staticRenderFns:[]}},238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/page10"}},[n("span",{staticClass:"tabTxt"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/catalog"}},[n("span",{staticClass:"tabTxt"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/page30"}},[n("span",{staticClass:"tabTxt"},[t._v("排行")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/page40"}},[n("span",{staticClass:"tabTxt"},[t._v("我的")])])],1)},staticRenderFns:[]}},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n   sorry,the page is no fond!\n")])},staticRenderFns:[]}},242:function(t,e){},243:function(t,e){},244:function(t,e){},245:function(t,e){},246:function(t,e){},247:function(t,e){},248:function(t,e){},249:function(t,e){},250:function(t,e){},251:function(t,e){},252:function(t,e){},253:function(t,e){},254:function(t,e){},255:function(t,e){},256:function(t,e){},503:function(t,e,n){"use strict";function s(){var t={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp",platform:"h5",uin:0,needNewCode:1},e={param:"jsonpCallback",prefix:"jp"};return n.i(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,e)}function i(){var t={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"};return l.a.get("api/getDiscList",{params:t}).then(function(t){return a.a.resolve(t.data)})}e.a=s,e.b=i;var r=n(176),a=n.n(r),o=n(180),c=n(189),l=n.n(c)},504:function(t,e,n){"use strict";var s=n(177),i=n.n(s),r=function t(e){var n=e.id,s=e.name;i()(this,t),this.id=n,this.name=s,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"};e.a=r},505:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(185),i=(n.n(s),n(82)),r=n(183),a=n.n(r),o=n(186),c=n(182),l=n.n(c),u=n(184),f=(n.n(u),n(187));l.a.attach(document.body),new i.a({el:"#app",render:function(t){return t(a.a)},router:o.a,store:f.a})},506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"selectPlay",function(){return i});var s=n(181),i=function(t,e){var n=t.commit,i=(t.state,e.list),r=e.index;n(s.e,i),n(s.d,i),console.log(i),n(s.g,r),n(s.c,!0),n(s.b,!0)}},507:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"dtlId",function(){return s}),n.d(e,"playing",function(){return i}),n.d(e,"fullScreen",function(){return r}),n.d(e,"playlist",function(){return a}),n.d(e,"sequencelist",function(){return o}),n.d(e,"mode",function(){return c}),n.d(e,"currentIndex",function(){return l}),n.d(e,"currentson",function(){return u});var s=function(t){return t.dtlId},i=function(t){return t.playing},r=function(t){return t.fullScreen},a=function(t){return t.playlist},o=function(t){return t.sequenceList},c=function(t){return t.mode},l=function(t){return t.currentIndex},u=function(t){return t.playlist[t.currentIndex]||{}}},508:function(t,e,n){"use strict";var s,i=n(502),r=n.n(i),a=n(181),o=(s={},r()(s,a.a,function(t,e){t.dtlId=e}),r()(s,a.b,function(t,e){t.playing=e}),r()(s,a.c,function(t,e){t.fullScreen=e}),r()(s,a.d,function(t,e){t.playlist=e}),r()(s,a.e,function(t,e){t.sequenceList=e}),r()(s,a.f,function(t,e){t.mode=e}),r()(s,a.g,function(t,e){t.currentIndex=e}),s);e.a=o},509:function(t,e,n){"use strict";var s={dtlId:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:0,currentIndex:-1};e.a=s},510:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(223),i=n.n(s),r=n(217),a=n.n(r),o=n(222),c=n.n(o),l=n(221),u=n.n(l);e.default={components:{XHeader:i.a,MHeader:a.a,TabLink:c.a,player:u.a}}},511:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(85),i=n.n(s),r=n(179);e.default={data:function(){return{scrollY:-1,currentIndex:0}},created:function(){this.touch={},this.listenScroll=!0,this.probeType=3,this.listHeight=[]},props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})}},methods:{onShortcutTouchStart:function(t){var e=n.i(r.a)(t.target,"index");this.touch.y1=t.touches[0].pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){this.touch.y2=t.touches[0].pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},_scrollTo:function(t){this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0)},getScrollPos:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];for(var t=this.$refs.listGroup,e=0,n=0;n<t.length;n++){e+=t[n].clientHeight,this.listHeight.push(e)}},selectItem:function(t){this.$emit("select",t)}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){for(var e=this.listHeight,n=0;n<e.length-1;n++){var s=e[n],i=e[n+1];if(-t>=s&&-t<i)return void(this.currentIndex=n)}}},components:{Scroll:i.a}}},512:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(179),i=n.i(s.b)("transform");e.default={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[i]="translate3d("+t+"px, 0, 0)"},progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this._offset(n)}},progressTouchEnd:function(t){this.touch.initiated=!1,this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this._offset(n)}}}}},513:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(125),i=n.n(s);e.default={props:{data:{type:Array,default:null},probeType:{type:Number,default:1},listenScroll:{type:Boolean,default:!0},click:{type:Boolean,default:!0}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){if(console.log(this.$refs.wrapper),this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}},514:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(125),i=n.n(s);e.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initSlider(),t._initDots(),t.autoPlay&&t._play()},100),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{hasClass:function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},addClass:function(t,e){if(!this.hasClass(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}},_setSliderWidth:function(){this.children=this.$refs.sliderGroup.children;var t=0,e=this.$refs.slider.clientWidth;console.log(e);for(var n=0;n<this.children.length;n++){var s=this.children[n];s.style.width=e+"px",console.log(s),this.addClass(s,"slider-item"),t+=e}this.loop&&(t+=2*e),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var t=this;this.slider=new i.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:!0,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.currentPageIndex=e,t._play()})},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},2e3)},_initDots:function(){this.dots=new Array(this.children.length)}}}},515:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{sons:{type:Array,default:[]}},methods:{getDesc:function(t){return t.singer+" . "+t.album},selectItem:function(t,e){this.$emit("select",t,e)}}}},516:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(177),i=n.n(s),r=n(81),a=n.n(r),o=n(55),c=n(216),l=n.n(c),u=n(178);e.default={data:function(){return{sons:[]}},computed:a()({title:function(){return this.dtlId.name},bgImage:function(){return this.dtlId.avatar}},n.i(o.b)(["dtlId"])),mounted:function(){this._getDtl()},methods:{_getDtl:function(){var t=this;n.i(u.a)(this.dtlId.id).then(function(e){t.sons=t._normalizeSongs(e.data.list),console.log(t.sons),console.log("this.sons")})},_normalizeSongs:function(t){var e=this,n=[];return t.forEach(function(t){var s=t.musicData;s.songid&&s.albummid&&n.push(e.createSong(s))}),n},createSong:function(t){return new function t(e){var n=e.id,s=e.mid,r=e.singer,a=e.name,o=e.album,c=e.duration,l=e.image,u=e.url;i()(this,t),this.id=n,this.mid=s,this.singer=r,this.name=a,this.album=o,this.duration=c,this.image=l,this.url=u}({id:t.songid,mid:t.songmid,singer:this.filterSinger(t.singer),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://ws.stream.qqmusic.qq.com/"+t.songid+".m4a?fromtag=46"})},filterSinger:function(t){var e=[];return t?(t.forEach(function(t){e.push(t.name)}),e.join("/")):""}},components:{dtlList:l.a}}},517:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(81),i=n.n(s),r=n(178),a=n(504),o=n(210),c=n.n(o),l=n(55);e.default={data:function(){return{catalog:[]}},created:function(){this._getCatalog()},methods:i()({_getCatalog:function(){var t=this;n.i(r.b)().then(function(e){if(console.log("dd"),0===e.code){console.log("dd2");var n=t._normalizeCatalog(e.data.list);t.catalog=n,console.log(n)}})},_normalizeCatalog:function(t){var e={hot:{title:"rm",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new a.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(new a.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var n=[],s=[];for(var i in e){var r=e[i];r.title.match(/[a-zA-Z]/)?s.push(r):"rm"===r.title&&n.push(r)}return s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(s)},selectSin:function(t){this.$router.push({path:"/catalog/"+t.id}),this.setDtlId(t)}},n.i(l.d)({setDtlId:"SET_DTLID"})),components:{ListView:c.a}}},518:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(81),i=n.n(s),r=n(213),a=n.n(r),o=n(85),c=n.n(o),l=n(55);e.default={data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},title:{type:String,default:""},sons:{type:Array,default:[]}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:i()({scroll:function(t){this.scrollY=t.y},selectItem:function(t,e){this.selectPlay({list:this.sons,index:e})}},n.i(l.c)(["selectPlay"]),{prefixStyle:function(t){var e=document.createElement("div").style,n=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var n in t)if(void 0!==e[t[n]])return n;return!1}();return!1!==n&&("standard"===n?t:n+t.charAt(0).toUpperCase()+t.substr(1))}}),watch:{scrollY:function(t){var e=Math.max(-142,t),n=this.prefixStyle("transform");console.log("前缀"+n),this.$refs.layer.style[n]="translate3d(0,"+e+"px,0)"}},components:{Scroll:c.a,sonList:a.a}}},519:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},520:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(503),i=n(212),r=n.n(i),a=n(85),o=n.n(a);e.default={data:function(){return{recommend:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:{_getRecommend:function(){var t=this;n.i(s.a)().then(function(e){0===e.code&&(t.recommend=e.data.slider),console.log(e)})},_getDiscList:function(){var t=this;n.i(s.b)().then(function(e){0===e.code&&(console.log(e),t.discList=e.data.list)})}},components:{slider:r.a,scroll:o.a}}},521:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},522:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},523:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(81),i=n.n(s),r=n(55),a=n(211),o=n.n(a);e.default={computed:i()({},n.i(r.b)(["fullScreen","playlist","currentson","playing"]),{playIcon:function(){return this.playing?"icon-pause":"icon-play"},percent:function(){return this.currentTime/this.currentson.duration}}),mounted:function(){},data:function(){return{currentTime:0}},methods:i()({},n.i(r.d)({setFullScreen:"SET_FULL_SCREEN",setPlayingState:"SET_PLAYING_STATE"}),{back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlay:function(){this.setPlayingState(!this.playing)},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return((t|=0)/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t},onProgressBarChange:function(t){var e=this.currentson.duration*t;console.log(e),this.$refs.audio.currentTime=e}}),watch:{currentson:function(){var t=this;this.$nextTick(function(){t.$refs.audio.play()})},playing:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})}},components:{progressBar:o.a}}},524:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},85:function(t,e,n){var s=n(10)(n(513),n(233),null,null,null);t.exports=s.exports}},[505]);