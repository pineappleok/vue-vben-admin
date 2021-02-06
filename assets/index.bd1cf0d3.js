import{a as e}from"./index.f458f5b1.js";import{r as t,e as a,a1 as r,a$ as o,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.72961157.js";import{_ as p}from"./index.ccb911a1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./RightOutlined.ba1a4c59.js";/* empty css              */import"./useTimeout.3a4cc0a3.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./vendor.3b1829c7.js";import"./index.eb04067c.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./isEqual.2bab8c16.js";import"./toInteger.f9979050.js";import"./DownOutlined.884ac450.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const r=a(e);r&&r.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+r.toDataURL("image/png")+") left top repeat";const l=a(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&r((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),b=c(" Clear "),x=c(" Reset ");f.render=function(e,t,a,r,o,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[b])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[x])),_:1})])),_:1})])),_:1})};export default f;
