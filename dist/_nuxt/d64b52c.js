(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(t,e,n){"use strict";var o=n(2),r=(n(40),n(33),n(39),n(14),n(62),n(35),n(63),n(24)),l=(n(140),n(49),n(79),n(201));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"KeenSlider",props:{controls:{default:function(){return!0},type:Boolean},dragSpeed:{default:function(){return 1},type:Number},initial:{default:function(){return 0},type:Number},vertical:{default:function(){return!1},type:Boolean},loop:{default:function(){return!1},type:Boolean},mode:{default:function(){return"snap"},type:String},duration:{default:function(){return 500},type:Number},resetSlide:{default:function(){return!1},type:Boolean},slidesPerView:{default:function(){return 1},type:Number},spacing:{default:function(){return 0},type:Number},rubberband:{default:function(){return!0},type:Boolean},centered:{type:Boolean,default:function(){return!1}},autoplay:{type:[Boolean,Number,String],default:function(){return!1}},breakpoints:{type:Object,default:function(){}}},data:function(){return{keenSlider:null,current:0,size:0,interval:null}},computed:{sliderOptions:function(){return{breakpoints:this.breakpoints,controls:this.controls,dragSpeed:this.dragSpeed,initial:this.initial,vertical:this.vertical,loop:this.loop,mode:this.mode,duration:this.duration,resetSlide:this.resetSlide,slidesPerView:this.slidesPerView,spacing:this.spacing,rubberband:this.rubberband,centered:this.centered}},isBeginning:function(){return 0===this.current},isEnd:function(){return this.current===this.size-1}},mounted:function(){var t=this;"undefined"!=typeof window&&this.$nextTick((function(){t.initialize()})),this.current=this.initial},methods:{initialize:function(){var t=this;this.keenSlider=new l.a(this.$refs.slider,this.getCombinedOptions()),this.initAutoplay(),this.$watch("$props",(function(){t.refresh()})),this.size=this.keenSlider.details().size},refresh:function(){this.keenSlider&&(this.keenSlider.refresh(this.getCombinedOptions()),this.initAutoplay())},initAutoplay:function(){var t=this;if(this.interval&&clearInterval(this.interval),this.autoplay){var time=3e3;if("number"==typeof this.autoplay)time=this.autoplay;else if("string"==typeof this.autoplay){var e=parseInt(this.autoplay);e>0&&(time=e)}this.interval=setInterval((function(){t.next()}),time)}},getCombinedOptions:function(){return d(d({},this.sliderOptions),this.generateEventHooks())},generateEventHooks:function(){for(var t=this,e={},n=function(){var n=r[o];e[n]="slideChanged"===n?function(){t.keenSlider&&(t.current=t.keenSlider.details().relativeSlide);for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.$emit.apply(t,[n].concat(o))}:function(){"dragStart"===n&&t.interval&&clearInterval(t.interval),"dragEnd"===n&&t.initAutoplay();for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.$emit.apply(t,[n].concat(o))}},o=0,r=["afterChange","beforeChange","mounted","created","slideChanged","dragEnd","dragStart","move"];o<r.length;o++)n();return e},moveToSlide:function(t,e){this.keenSlider&&this.keenSlider.moveToSlide(t,e)},moveToSlideRelative:function(t,e,n){this.keenSlider&&this.keenSlider.moveToSlideRelative(t,e,n)},next:function(){this.keenSlider&&this.keenSlider.next()},prev:function(){this.keenSlider&&this.keenSlider.prev()},resize:function(){this.keenSlider&&this.keenSlider.resize()}}},m=f,h=n(9),v=Object(h.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"slider",staticClass:"keen-slider"},[t._t("default",null,{current:t.current,size:t.size,isEnd:t.isEnd,isBeginning:t.isBeginning,next:t.next,prev:t.prev,moveToSlideRelative:t.moveToSlideRelative})],2)}),[],!1,null,null,null).exports,y={name:"KeenSlide"},C=Object(h.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",t._g({staticClass:"keen-slider__slide"},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports;n(287);o.a.component("Slider",v),o.a.component("Slide",C)},139:function(t,e,n){"use strict";var o=n(2);n(140),n(44),n(55),n(49);var r={name:"Modal",props:{active:Boolean,component:[Object,Function],content:String,programmatic:Boolean,props:Object,events:Object,width:{type:[String,Number],default:"auto"},hasModalCard:{type:Boolean,default:!1},animation:{type:String,default:"zoom-in"},canCancel:{type:[Array,Boolean],default:function(){return["escape","outside","button"]}},onCancel:{type:Function,default:function(){}},scroll:{type:String,default:function(){return"clip"},validator:function(t){return["clip","keep"].includes(t)}},fullScreen:Boolean,customClass:String,ariaRole:{type:String,validator:function(t){return["dialog","alertdialog"].includes(t)}},ariaModal:Boolean},data:function(){return{isActive:this.active||!1,savedScrollTop:null,newWidth:"number"==typeof this.width?this.width+"px":this.width,animating:!0}},computed:{cancelOptions:function(){return"boolean"==typeof this.canCancel?this.canCancel?["escape","outside","button"]:[]:this.canCancel},customStyle:function(){return this.fullScreen?null:{width:this.newWidth}}},watch:{active:function(t){this.isActive=t},isActive:function(){this.handleScroll()}},beforeMount:function(){this.programmatic&&document.body.appendChild(this.$el)},mounted:function(){this.programmatic?this.isActive=!0:this.isActive&&this.handleScroll(),document.addEventListener("keyup",this.keyPress)},beforeDestroy:function(){if("undefined"!=typeof window){document.removeEventListener("keyup",this.keyPress),document.documentElement.classList.remove("no-scroll");var t=this.savedScrollTop?this.savedScrollTop:document.documentElement.scrollTop;document.body.classList.remove("no-scroll"),document.documentElement.scrollTop=t,document.body.style.top=null}},methods:{handleScroll:function(){"undefined"!=typeof window&&("clip"!==this.scroll?(this.savedScrollTop=this.savedScrollTop?this.savedScrollTop:document.documentElement.scrollTop,this.isActive?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),this.isActive?document.body.style.top="-".concat(this.savedScrollTop,"px"):(document.documentElement.scrollTop=this.savedScrollTop,document.body.style.top=null,this.savedScrollTop=null)):this.isActive?document.documentElement.classList.add("no-scroll"):document.documentElement.classList.remove("no-scroll"))},cancel:function(t){this.cancelOptions.includes(t)&&(this.onCancel.apply(null,arguments),this.close())},close:function(){var t=this;this.$emit("close"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():void 0!==e.parentNode&&e.parentNode.removeChild(e)}),150))},keyPress:function(t){this.isActive&&27===t.keyCode&&this.cancel("escape")},afterEnter:function(){this.animating=!1},beforeLeave:function(){this.animating=!0}}},l=r,c=(n(289),n(9)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.animation},on:{"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[t.isActive?n("div",{staticClass:"modal is-active",class:[{"is-full-screen":t.fullScreen},t.customClass],attrs:{role:t.ariaRole,"aria-modal":t.ariaModal}},[n("div",{staticClass:"modal__background",on:{click:function(e){return t.cancel("outside")}}}),t._v(" "),n("div",{staticClass:"animation-content",class:{modal__content:!t.hasModalCard},style:t.customStyle},[t.component?n(t.component,t._g(t._b({tag:"component",on:{close:t.close}},"component",t.props,!1),t.events)):t.content?n("div",{domProps:{innerHTML:t._s(t.content)}}):t._t("default")],2)]):t._e()])}),[],!1,null,null,null).exports,f={open:function(t){var content,e;"string"==typeof t&&(content=t);var n={programmatic:!0,content:content};t.parent&&(e=t.parent,delete t.parent);var r=Object.assign(n,t);return new(("undefined"!=typeof window&&window.Vue?window.Vue:o.a).extend(d))({parent:e,el:document.createElement("div"),propsData:r})}};o.a.prototype.$modal=f,o.a.component("Modal",d)},179:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("56b15182",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("540ad432",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3423deb1",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("099de44d",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("53eb03a2",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n.r(e);var o={name:"MainLogo"},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 88 62",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M68.1163 53.2915C68.05 54.9242 68.1484 56.4288 68.4975 57.3558C68.5484 57.491 68.9029 58.4004 68.9442 57.793C69.1 55.4993 68.9264 54.2227 68.4628 53.3562C68.3733 53.1889 68.1807 53 68.0854 53C67.8316 53 68.2177 54.5925 68.2857 54.8783C68.4289 55.4806 68.5341 56.1785 68.6708 56.7891C68.7066 56.9492 68.6708 55.2733 68.6708 54.7488","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M19.5414 30.348C18.4706 30.5801 16.8572 30.791 15.2004 30.7487C9.99909 33.3075 3.35125 37.602 2.22587 44.0139C1.90695 45.8309 1.82174 48.9121 2.67608 50.4993C4.49217 53.8734 9.31919 54.7035 12.494 54.8423C18.4893 55.1044 24.9652 55.6022 29.8095 50.9433C32.7405 48.1245 35.1048 44.4829 38.0863 41.7748C38.3837 41.5047 40.1038 41.3543 40.1642 41.1186C41.0195 37.7816 45.8625 34.0017 41.8957 30.5411C38.7911 27.8326 35.0335 29.349 31.8354 30.8885C31.6784 30.964 31.5233 31.0476 31.3704 31.1382C30.7482 31.6849 30.082 32.2005 29.4266 32.7764C29.1722 33.0622 28.935 33.3618 28.7186 33.668C28.2112 34.3859 26.9921 35.3223 28.1991 33.9768C28.5944 33.5362 29.0083 33.144 29.4266 32.7764C30.0002 32.1323 30.6614 31.5586 31.3704 31.1382C31.5233 31.0476 31.6784 30.964 31.8354 30.8885C35.0335 29.349 38.7911 27.8326 41.8957 30.5411C45.8625 34.0017 41.0195 37.7816 40.1642 41.1186C40.1038 41.3543 38.3837 41.5047 38.0863 41.7748C35.1048 44.4829 32.7405 48.1245 29.8095 50.9433C24.9652 55.6022 18.4893 55.1044 12.494 54.8423C9.31919 54.7035 4.49217 53.8734 2.67608 50.4993C1.82174 48.9121 1.90695 45.8309 2.22587 44.0139C3.35125 37.602 9.99909 33.3075 15.2004 30.7487C15.6558 30.5247 16.1 30.3141 16.5285 30.1164C18.7639 29.0853 25.5792 26.7234 23.5932 28.2634C22.4538 29.1469 20.9008 30.0534 19.5414 30.348Z",fill:"#E5F774"}}),t._v(" "),n("path",{attrs:{d:"M37.3764 9.69487C27.4081 9.69487 7.93985 10.7535 8.71919 26.3911C8.97391 31.502 16.4783 31.012 19.5414 30.348C20.9008 30.0534 22.4538 29.147 23.5932 28.2634C25.5792 26.7234 18.7639 29.0853 16.5285 30.1164C11.2053 32.5718 3.44977 37.0407 2.22587 44.0139C1.90695 45.8309 1.82174 48.9121 2.67608 50.4993C4.49217 53.8734 9.31919 54.7035 12.494 54.8423C18.4893 55.1044 24.9652 55.6022 29.8095 50.9433C32.7405 48.1245 35.1048 44.4829 38.0863 41.7748C38.3837 41.5047 40.1038 41.3543 40.1642 41.1186C41.0195 37.7816 45.8625 34.0017 41.8957 30.5411C38.7911 27.8326 35.0335 29.349 31.8354 30.8885C30.6278 31.4698 29.5281 32.5227 28.7186 33.668C28.2112 34.3859 26.9921 35.3223 28.1991 33.9768C30.4237 31.497 33.2405 30.5497 34.1037 26.893C34.8894 23.5648 29.8298 20.781 27.4373 20.4847C26.9864 20.4289 24.4343 20.118 25.9828 20.118C28.8225 20.118 31.6622 20.118 34.502 20.118C38.2373 20.118 43.1218 20.5153 43.8524 15.1766C44.0333 13.8547 44.2838 12.4325 42.9866 12.0497C42.1053 11.7897 41.2294 11.613 40.3546 11.3548C39.892 11.2183 38.1155 10.7794 37.9305 10.3897C37.6039 9.70204 37.1004 9.24491 36.4413 9","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M34.6994 8.96504C32.4043 8.5319 27.4366 6.52303 31.6234 4.06932C34.4304 2.42432 37.3281 1.89026 40.4864 2.01814C43.3835 2.13545 46.0296 3.78022 48.7758 4.70789C55.0599 6.8307 61.9228 7.22348 68.4827 7.22348C70.6004 7.22348 72.7647 7.36641 74.8779 7.20413C76.2843 7.09613 77.57 6.52686 78.9792 6.52686C79.9871 6.52686 80.9951 6.52686 82.003 6.52686C83.3977 6.52686 83.8667 7.98289 84.7488 8.96504C85.4639 9.76139 86 10.9557 86 12.0999C86 13.8364 84.9965 13.8491 83.567 14.2671C76.7282 16.267 69.4484 15.583 62.4351 15.583C61.0564 15.583 59.6777 15.583 58.2991 15.583C56.8877 15.583 56.9983 15.5672 57.9167 16.5505C60.7775 19.6134 64.5594 21.5135 66.4321 25.684C67.9461 29.0558 67.5522 34.837 66.9882 38.4168C66.342 42.5182 65.3811 46.9482 63.7906 50.7432C62.5718 53.6512 60.1815 59.1106 56.9088 59.7413C52.4572 60.5992 48.3217 59.3626 45.4739 55.4454C43.5165 52.7531 44.1225 47.2098 44.7788 44.0672C45.7475 39.4291 47.6031 35.605 49.0886 31.257C50.0444 28.4594 49.9275 26.0204 48.3587 23.5748C47.2752 21.8857 45.0341 20.7824 43.684 19.279C43.2546 18.8009 43.4366 18.3576 42.8324 18.0212","stroke-width":"3","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M36.2325 53.2332C36.0999 54.5394 36.2968 55.743 36.995 56.4846C37.0968 56.5928 37.8058 57.3203 37.8883 56.8344C38.2 54.9994 37.8529 53.9781 36.9256 53.285C36.7466 53.1511 36.3615 53 36.1709 53C35.6631 53 36.4354 54.274 36.5714 54.5027C36.8578 54.9845 37.0682 55.5428 37.3415 56.0312C37.4132 56.1594 37.3415 54.8186 37.3415 54.399","stroke-width":"3","stroke-linecap":"round"}})])}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,n){"use strict";var o={name:"DefaultLayout"},r=(n(270),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("main-intro"),t._v(" "),n("main-header"),t._v(" "),n("Nuxt"),t._v(" "),n("main-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MainIntro:n(291).default,MainHeader:n(292).default,MainFooter:n(293).default})},207:function(t,e,n){n(208),t.exports=n(209)},253:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("9e203f6a",content,!0,{sourceMap:!1})},254:function(t,e,n){var o=n(17),r=n(255),l=n(256),c=n(257),d=o(!1),f=r(l),m=r(c);d.push([t.i,'@font-face{font-family:"GT America";src:url('+f+') format("woff2"),url('+m+') format("woff");font-weight:400;font-style:normal;font-display:swap}',""]),t.exports=d},256:function(t,e,n){t.exports=n.p+"fonts/GTAmerica-Regular.b49ca4f.woff2"},257:function(t,e,n){t.exports=n.p+"fonts/GTAmerica-Regular.c5f6b92.woff"},258:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("03649a47",content,!0,{sourceMap:!1})},259:function(t,e,n){var o=n(17)(!1);o.push([t.i,"/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}img,video{height:auto;max-width:100%;width:100%;display:block}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}a{color:inherit;text-decoration:none}",""]),t.exports=o},260:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("31d61236",content,!0,{sourceMap:!1})},261:function(t,e,n){var o=n(17)(!1);o.push([t.i,':root{--body-color:#0000fd;--body-bg:#fff;--spacer:1rem}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{font-family:"GT America",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-weight:600;color:#0000fd;color:var(--body-color);background-color:#fff;background-color:var(--body-bg)}',""]),t.exports=o},262:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("30170c1e",content,!0,{sourceMap:!1})},263:function(t,e,n){var o=n(17)(!1);o.push([t.i,".page-enter-active,.page-leave-active{transition:opacity .125s}.page-enter,.page-leave-to{opacity:0}",""]),t.exports=o},264:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3988d705",content,!0,{sourceMap:!1})},265:function(t,e,n){var o=n(17)(!1);o.push([t.i,".row{display:flex;justify-content:center;margin-left:calc(var(--spacer)/2*-1);margin-right:calc(var(--spacer)/2*-1);flex-wrap:wrap}.row-end{justify-content:flex-end}.row-start{justify-content:flex-start}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col{padding:0 calc(var(--spacer)/2)}@media screen and (max-width:600px){.col{width:100%}.col+.col{margin-top:var(--spacer)}}.center{display:flex;align-items:center}.bottom,.top{display:flex;align-items:flex-end}.pad-1{padding:calc(var(--spacer)*2)}.pad-2{padding:calc(var(--spacer)*4)}",""]),t.exports=o},266:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6a0921c5",content,!0,{sourceMap:!1})},267:function(t,e,n){var o=n(17)(!1);o.push([t.i,".aspect{position:relative;width:100%;padding-bottom:var(--aspect);overflow:hidden}.aspect img,.aspect video{position:absolute;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.aspect-16x10{--aspect:62.5%}.aspect-3x2{--aspect:66.66666%}.aspect-4x3{--aspect:75%}.aspect-2x3{--aspect:150%}.aspect-3x4{--aspect:133.33333%}.aspect-1x1{--aspect:100%}.contain img{-o-object-fit:contain;object-fit:contain}.iframe-container{position:relative;padding-bottom:56.25%;height:0}.iframe-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},270:function(t,e,n){"use strict";n(179)},271:function(t,e,n){var o=n(17)(!1);o.push([t.i,".page{min-height:100vh;display:flex;flex-direction:column}main{flex-grow:1}",""]),t.exports=o},272:function(t,e,n){"use strict";n(180)},273:function(t,e,n){var o=n(17)(!1);o.push([t.i,".intro{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;padding:1rem;display:flex;justify-content:center;align-items:center;background-color:var(--body-color);color:var(--body-bg);-webkit-animation-name:swipe-up;animation-name:swipe-up;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-animation-timing-function:cubic-bezier(.22,1,.36,1);animation-timing-function:cubic-bezier(.22,1,.36,1);transform:translateZ(0)}.intro__logo{position:relative;width:100%;text-align:center}.intro__logo svg{width:66%;max-height:50vh;-webkit-animation-name:fade-up;animation-name:fade-up;-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(.25,1,.5,1);animation-timing-function:cubic-bezier(.25,1,.5,1)}.intor__logo svg{display:inline-flex}@-webkit-keyframes swipe-up{0%{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}to{-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0);visibility:hidden}}@keyframes swipe-up{0%{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}to{-webkit-clip-path:inset(0 0 100% 0);clip-path:inset(0 0 100% 0);visibility:hidden}}@-webkit-keyframes fade-up{0%{opacity:0;transform:translateY(3vh)}to{opacity:1;transform:translateY(0)}}@keyframes fade-up{0%{opacity:0;transform:translateY(3vh)}to{opacity:1;transform:translateY(0)}}",""]),t.exports=o},274:function(t,e,n){"use strict";n(181)},275:function(t,e,n){var o=n(17)(!1);o.push([t.i,".main-header{display:flex;justify-content:space-between;padding:var(--spacer) var(--spacer) 0 var(--spacer)}.main-header__logo svg{fill:none;width:auto;height:50px}.main-header ul{display:inline-flex}.main-header ul li+li{margin-left:var(--spacer)}.main-header nav:first-child{flex-basis:50%}.main-header nav:last-child{flex-basis:50%;text-align:right}",""]),t.exports=o},276:function(t,e,n){"use strict";n(182)},277:function(t,e,n){var o=n(17)(!1);o.push([t.i,".main-footer{display:flex;justify-content:space-between;padding:0 var(--spacer);margin-top:calc(var(--spacer)*3);margin-bottom:var(--spacer)}.main-footer ul{display:flex}.main-footer ul li+li{margin-left:2rem}.main-footer__logo svg{height:30px;fill:none}",""]),t.exports=o},289:function(t,e,n){"use strict";n(195)},290:function(t,e,n){var o=n(17)(!1);o.push([t.i,".modal{position:fixed;bottom:0;left:0;right:0;top:0;align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;z-index:9999999}.modal.is-active{display:flex}.modal.is-full-screen>.animation-content{position:relative;width:100vw;height:100vh}.modal.is-full-screen>.modal__background{display:none}.animation-content{margin:0 2rem}.modal__background{position:absolute;bottom:0;left:0;right:0;top:0;background-color:rgba(0,0,0,.375)}.modal__content{position:relative;width:100%;margin:1rem}.no-scroll{overflow:hidden}.zoom-in-enter-active{transition:opacity .2s ease}.zoom-in-enter-active .animation-content{transition:transform .2s ease}.zoom-in-enter{opacity:0}.zoom-in-enter .animation-content{transform:scale(.95)}",""]),t.exports=o},291:function(t,e,n){"use strict";n.r(e);var o={},r=(n(272),n(9)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("div",{staticClass:"intro__logo"},[e("main-logo")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainLogo:n(196).default})},292:function(t,e,n){"use strict";n.r(e);var o={name:"MainHeader"},r=(n(274),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"main-header"},[n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v(" Projects ")])],1)])]),t._v(" "),n("div",{staticClass:"main-header__logo"},[n("nuxt-link",{attrs:{to:"/"}},[n("main-logo")],1)],1),t._v(" "),n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v(" About ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainLogo:n(196).default})},293:function(t,e,n){"use strict";n.r(e);var o={name:"MainFooter"},r=(n(276),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"main-footer"},[n("div",[t._v("\n    ©"+t._s((new Date).getFullYear())+", Thoma\n    "),n("nuxt-link",{attrs:{to:"/imprint"}},[t._v(" Imprint")])],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li"),t._v(" "),n("li",[n("a",{attrs:{href:"https://de.linkedin.com/in/elisabeth-thoma-758041221",target:"__blank"}},[t._v("\n          LinkedIn\n        ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.instagram.com/elisabethoma/?hl=de",target:"__blank"}},[t._v("\n          Instagram\n        ")])])])])}],!1,null,null,null);e.default=component.exports}},[[207,11,2,12]]]);