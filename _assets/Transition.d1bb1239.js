let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as o,o as a,j as s,k as i,w as r}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import{A as n}from"./index.d2cb24e8.js";import"./RightOutlined.a721f23a.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.8e563336.js";import"./UpOutlined.25f25eae.js";import"./LeftOutlined.670b6be7.js";import"./index.cf6e67e9.js";import{b as m,S as p}from"./index.ad3a3cba.js";import"./useTimeout.e40508cb.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./animation.91a87d89.js";import"./useScrollTo.8ee4efce.js";import"./index.c5e34609.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import c from"./TargetContent.32a05ce0.js";var d=t({components:{LazyContainer:m,TargetContent:c,Skeleton:p,Alert:n},setup:()=>({})});const l={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=i("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};d.render=function(e,t,n,m,p,c){const d=o("Alert"),x=o("TargetContent"),b=o("LazyContainer");return a(),s("div",l,[i(d,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),i("div",u,[f,i("div",j,[i(b,{transitionName:"custom"},{default:r((()=>[i(x)])),_:1})])])])};export default d;