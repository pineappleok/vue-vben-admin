import{a as e,cw as s,ac as i,h as o,i as r,o as t,j as n,k as a,w as d}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import{s as l}from"./index.237a3252.js";import"./colors.519db886.js";import"./RightOutlined.4dd7a895.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.6f702cdb.js";import"./index.b1e85ccd.js";import{a as p}from"./index.444478fd.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.c638cd84.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./animation.94d2142a.js";import"./useScrollTo.02c0886c.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import{u as m}from"./useForm.47a60267.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:l,CollapseContainer:p},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const j={class:"m-4"};u.render=function(e,s,i,o,l,p){const m=r("a-input"),c=r("BasicForm"),u=r("CollapseContainer");return t(),n("div",j,[a(u,{title:"自定义表单"},{default:d((()=>[a(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:s})=>[a(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;