import{D as e}from"./index.9a21867f.js";import{u as a}from"./useDescription.69bc598c.js";import{_ as t}from"./index.2b50c9fa.js";import{d as s,h as i,o as r,i as o,w as n,j as m}from"./index.8fd28b0b.js";import"./index.affbffdc.js";import"./responsiveObserve.c545f1cc.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useTimeout.3e07d977.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./index.cfb9f88f.js";import"./index.e97590c0.js";import"./RightOutlined.aa47ea21.js";import"./types.210fae75.js";import"./isEqual.db26dd53.js";import"./toInteger.1d35047c.js";import"./DownOutlined.638a8b23.js";import"./index.cb16ae1c.js";import"./usePageContext.35102b69.js";import"./transButton.a82459aa.js";const c={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},l=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var d=s({components:{Description:e,PageWrapper:t},setup(){const[e]=a({title:"useDescription",data:c,schema:l}),[t]=a({title:"无边框",bordered:!1,data:c,schema:l});return{mockData:c,schema:l,register:e,register1:t}}});d.render=function(e,a,t,s,c,l){const d=i("Description"),p=i("PageWrapper");return r(),o(p,{title:"详情组件示例"},{default:n((()=>[m(d,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(d,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(d,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),m(d,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default d;