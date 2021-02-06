import{P as t,a9 as e,d as n,B as o,C as i,G as r,x as s,d8 as a,z as c,j as l,R as u,F as f,T as g,aV as d,aW as p,bg as h,h as v,o as m,i as T,k as b,aL as k}from"./index.72961157.js";import{s as y,g as S}from"./scrollTo.c1e0f75f.js";import"./vendor.3b1829c7.js";function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function j(){return window}var O=n({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:w(w({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:i("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||j;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||j)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;y(0,{getContainer:void 0===e?j:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=S((void 0===e?j:e)(),!0);this.setState({visible:n>t})}},render:function(){var t,e,n=this.prefixCls,o=this.$slots,i=(0,this.configProvider.getPrefixCls)("back-top",n),r=c(i,this.$attrs.class),s=l("div",{class:"".concat(i,"-content")},[l("div",{class:"".concat(i,"-icon")},null)]),a=w(w({},this.$attrs),{onClick:this.scrollToTop,class:r}),d=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,p=u("fade");return l(g,p,"function"==typeof(e=d)||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)?d:{default:function(){return[d]}})}}),B=n({name:"LayoutFeatures",components:{BackTop:e(O),LayoutLockPage:d((()=>p((()=>import("./index.703c8ed1.js")),["/assets/index.703c8ed1.js","/assets/LockPage.c735e36e.js","/assets/LockPage.d200c528.css","/assets/index.72961157.js","/assets/index.06ce6422.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.0630f2f2.js","/assets/index.97caa971.css","/assets/SearchOutlined.b22e7653.js","/assets/EyeOutlined.401aa8b7.js","/assets/header.d801b988.js","/assets/LockOutlined.c3f76843.js"]))),SettingDrawer:d((()=>p((()=>import("./index.17fea688.js").then((function(t){return t.i}))),["/assets/index.17fea688.js","/assets/index.5b72538f.css","/assets/index.72961157.js","/assets/index.06ce6422.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.36e82902.js","/assets/index.2b38113f.css","/assets/index.36488f10.js","/assets/index.ce7bd612.css","/assets/index.44d7a2e6.js","/assets/index.864ac48e.css","/assets/index.f458f5b1.js","/assets/index.aa7ae4c0.css","/assets/index.f8cd4764.css","/assets/index.054c67b3.js","/assets/index.121e7eba.css","/assets/domUtils.0adaad38.js","/assets/_stringToArray.cf2e328f.js","/assets/RightOutlined.ba1a4c59.js","/assets/useTimeout.3a4cc0a3.js","/assets/useScrollTo.2abae1df.js","/assets/animation.a805db4d.js","/assets/ArrowLeftOutlined.4b998873.js","/assets/isEqual.2bab8c16.js","/assets/useHeaderSetting.9f0159ac.js","/assets/SettingOutlined.127ce663.js"])))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=h();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});B.render=function(t,e,n,o,i,r){const s=v("LayoutLockPage"),a=v("BackTop"),c=v("SettingDrawer");return m(),T(k,null,[l(s),t.getUseOpenBackTop?(m(),T(a,{key:0,target:t.getTarget},null,8,["target"])):b("",!0),t.getShowSettingButton?(m(),T(c,{key:1})):b("",!0)],64)};export default B;
