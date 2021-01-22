import{d as e,h as o,o as i,i as t,w as r,j as s,m as a}from"./index.8fd28b0b.js";import{A as d}from"./index.4169a005.js";import{b as n}from"./index.667a8f58.js";import p from"./Modal1.244d3f5d.js";import m from"./Modal2.06d3e750.js";import l from"./Modal3.0580c50e.js";import c from"./Modal4.297e2cc3.js";import{_ as j}from"./index.2b50c9fa.js";import"./useTimeout.3e07d977.js";import"./useAttrs.d25a5a28.js";import"./useWindowSizeFn.79029f3f.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./FullscreenOutlined.c3894478.js";import"./isEqual.db26dd53.js";import"./index.e8917f9b.js";import"./index.4b221471.js";import"./responsiveObserve.c545f1cc.js";import"./index.dfa58fd0.js";import"./findIndex.46715178.js";import"./_baseProperty.74f89655.js";import"./toInteger.1d35047c.js";import"./index.ca52217c.js";import"./index.5da02f72.js";import"./SearchOutlined.5b280909.js";import"./DownOutlined.638a8b23.js";import"./CheckOutlined.f38f1076.js";import"./index.a0546b54.js";import"./index.a4305da9.js";import"./UpOutlined.91f278e8.js";import"./index.13c62466.js";import"./EyeOutlined.b3332bf0.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";import"./RightOutlined.aa47ea21.js";import"./index.e97590c0.js";import"./types.210fae75.js";import"./Tree.48b1d8ad.js";import"./util.3f60f4ff.js";import"./uuid.e90a529e.js";import"./index.81cfdddc.js";import"./index.af959341.js";import"./index.e632b98e.js";import"./index.c812d406.js";import"./LeftOutlined.71528b0c.js";import"./download.bd06191e.js";import"./useForm.17daf63c.js";import"./index.cfb9f88f.js";import"./index.cb16ae1c.js";import"./usePageContext.35102b69.js";import"./transButton.a82459aa.js";var f=e({components:{Alert:d,Modal1:p,Modal2:m,Modal3:l,Modal4:c,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=n(),[t,{openModal:r}]=n(),[s,{openModal:a}]=n(),[d,{openModal:p}]=n();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:a,register4:d,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),b=a("打开弹窗"),M=a("打开弹窗并传递数据");f.render=function(e,a,d,n,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),R=o("PageWrapper");return i(),t(R,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;