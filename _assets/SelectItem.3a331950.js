let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,au as a,s,i,o as n,j as l,k as d,n as r,v as o,aS as p}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import"./index.4d9aa87b.js";import"./index.59a86e6a.js";import"./LeftOutlined.6d78c070.js";import"./SettingOutlined.582aab15.js";import"./tsxHelper.f27b6047.js";import"./index.59e7dc66.js";import"./index.b86338b1.js";import"./useHeaderSetting.3b54e8be.js";import{b as c}from"./index.00578eb8.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=a("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const b=p("data-v-6110ac28")(((e,t,a,s,p,m)=>{const c=i("Select");return n(),l("div",{class:e.prefixCls},[d("span",null,r(e.title),1),d(c,o(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=b,u.__scopeId="data-v-6110ac28";export default u;