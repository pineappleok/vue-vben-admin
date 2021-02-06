import{d as e,h as o,o as i,i as t,w as r,j as s,m as a}from"./index.72961157.js";import{A as n}from"./index.46ecc65f.js";import{b as d}from"./index.35af8c02.js";import p from"./Modal1.f1ca558a.js";import m from"./Modal2.dc815524.js";import l from"./Modal3.bba006b7.js";import c from"./Modal4.7c552bb9.js";import{_ as j}from"./index.ccb911a1.js";import"./vendor.3b1829c7.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./RightOutlined.ba1a4c59.js";/* empty css              */import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./FullscreenOutlined.0333d80b.js";import"./isEqual.2bab8c16.js";import"./index.48e86f43.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d43a29e4.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./SearchOutlined.b22e7653.js";import"./EyeOutlined.401aa8b7.js";import"./index.af36237f.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./useForm.411a60fd.js";import"./index.eb04067c.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";var f=e({components:{Alert:n,Modal1:p,Modal2:m,Modal3:l,Modal4:c,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[t,{openModal:r}]=d(),[s,{openModal:a}]=d(),[n,{openModal:p}]=d();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:a,register4:n,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a(" 打开弹窗 默认可以拖动/全屏 "),b=a(" 打开弹窗 "),g=a(" 打开弹窗 "),M=a(" 打开弹窗并传递数据 ");f.render=function(e,a,n,d,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;
