import{_ as i,a as e}from"./index.667a8f58.js";import{_ as o}from"./index.e8917f9b.js";import{d as t,r as s,h as r,o as d,i as a,w as n,j as m,aH as p}from"./index.8fd28b0b.js";import{u as j}from"./useForm.17daf63c.js";import"./useTimeout.3e07d977.js";import"./useAttrs.d25a5a28.js";import"./useWindowSizeFn.79029f3f.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./FullscreenOutlined.c3894478.js";import"./isEqual.db26dd53.js";import"./index.4b221471.js";import"./responsiveObserve.c545f1cc.js";import"./index.dfa58fd0.js";import"./findIndex.46715178.js";import"./_baseProperty.74f89655.js";import"./toInteger.1d35047c.js";import"./index.ca52217c.js";import"./index.5da02f72.js";import"./SearchOutlined.5b280909.js";import"./DownOutlined.638a8b23.js";import"./CheckOutlined.f38f1076.js";import"./index.a0546b54.js";import"./index.a4305da9.js";import"./UpOutlined.91f278e8.js";import"./index.13c62466.js";import"./EyeOutlined.b3332bf0.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";import"./RightOutlined.aa47ea21.js";import"./index.e97590c0.js";import"./types.210fae75.js";import"./Tree.48b1d8ad.js";import"./util.3f60f4ff.js";import"./index.4169a005.js";import"./uuid.e90a529e.js";import"./index.81cfdddc.js";import"./index.af959341.js";import"./index.e632b98e.js";import"./index.c812d406.js";import"./LeftOutlined.71528b0c.js";import"./download.bd06191e.js";const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=t({components:{BasicModal:i,BasicForm:o},setup(){const i=s({}),[o,{}]=j({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=e((e=>{i.value={field2:e.data,field1:e.info}}));return{register:t,schemas:l,registerForm:o,model:i}}});c.render=function(i,e,o,t,s,j){const l=r("BasicForm"),c=r("BasicModal");return d(),a(c,p(i.$attrs,{onRegister:i.register,title:"Modal Title"}),{default:n((()=>[m(l,{onRegister:i.registerForm,model:i.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default c;