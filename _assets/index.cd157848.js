import{a as s,i as t,o as i,j as e,k as a,ad as o,aH as n,w as c,p as l}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import{A as r}from"./index.f69020fc.js";import"./CloseOutlined.dd293c60.js";import"./LeftOutlined.6d78c070.js";import{c as m}from"./functional.e82516cd.js";import"./RightOutlined.c6f561c4.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var d=s({components:{Alert:r},setup:()=>({imgList:p,handleClick:function(s){m({imageList:[s]})},handlePreview:function(){m({imageList:p})}})});const u={class:"p-4"},f={class:"flex justify-center mt-4"},h=l("预览图片");d.render=function(s,l,r,m,p,d){const j=t("Alert"),g=t("a-button");return i(),e("div",u,[a(j,{message:"有预览图",type:"info"}),a("div",f,[(i(!0),e(o,null,n(s.imgList,(t=>(i(),e("img",{src:t,key:t,class:"mr-2",onClick:i=>s.handleClick(t)},null,8,["src","onClick"])))),128))]),a(j,{message:"无预览图",type:"info"}),a(g,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:c((()=>[h])),_:1},8,["onClick"])])};export default d;