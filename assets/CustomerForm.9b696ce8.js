import{d as e,bS as i,g as t,h as s,o,i as r,w as a,j as n}from"./index.8fd28b0b.js";import{I as d}from"./index.13c62466.js";import{_ as p}from"./index.e8917f9b.js";import{a as m}from"./index.c6402b08.js";import{_ as l}from"./index.2b50c9fa.js";import{u as c}from"./useForm.17daf63c.js";import"./SearchOutlined.5b280909.js";import"./EyeOutlined.b3332bf0.js";import"./index.4b221471.js";import"./responsiveObserve.c545f1cc.js";import"./index.dfa58fd0.js";import"./findIndex.46715178.js";import"./isEqual.db26dd53.js";import"./_baseProperty.74f89655.js";import"./toInteger.1d35047c.js";import"./index.ca52217c.js";import"./index.5da02f72.js";import"./DownOutlined.638a8b23.js";import"./CheckOutlined.f38f1076.js";import"./index.a0546b54.js";import"./index.a4305da9.js";import"./UpOutlined.91f278e8.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";import"./RightOutlined.aa47ea21.js";import"./index.e97590c0.js";import"./types.210fae75.js";import"./Tree.48b1d8ad.js";import"./util.3f60f4ff.js";import"./useAttrs.d25a5a28.js";import"./index.8d91dadc.js";import"./index.4169a005.js";import"./uuid.e90a529e.js";import"./index.81cfdddc.js";import"./index.667a8f58.js";import"./useTimeout.3e07d977.js";import"./useWindowSizeFn.79029f3f.js";import"./FullscreenOutlined.c3894478.js";import"./index.af959341.js";import"./index.e632b98e.js";import"./index.c812d406.js";import"./LeftOutlined.71528b0c.js";import"./download.bd06191e.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./index.2cd632d7.js";import"./RightOutlined.c0b4e03a.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./index.cfb9f88f.js";import"./index.cb16ae1c.js";import"./usePageContext.35102b69.js";import"./transButton.a82459aa.js";const f=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(d,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:p,CollapseContainer:m,PageWrapper:l,[d.name]:d},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=c({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:i,schemas:f,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});u.render=function(e,i,t,d,p,m){const l=s("a-input"),c=s("BasicForm"),f=s("CollapseContainer"),u=s("PageWrapper");return o(),r(u,{title:"自定义组件示例"},{default:a((()=>[n(f,{title:"自定义表单"},{default:a((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:a((({model:e,field:i})=>[n(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;