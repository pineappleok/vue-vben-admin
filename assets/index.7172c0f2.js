import{a as e}from"./index.c6402b08.js";import{r as t,e as a,s as r,b3 as o,d as n,h as s,o as i,i as l,w as d,j as c,m}from"./index.8fd28b0b.js";import{_ as p}from"./index.2b50c9fa.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useTimeout.3e07d977.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./index.cfb9f88f.js";import"./index.e97590c0.js";import"./RightOutlined.aa47ea21.js";import"./types.210fae75.js";import"./isEqual.db26dd53.js";import"./toInteger.1d35047c.js";import"./DownOutlined.638a8b23.js";import"./index.cb16ae1c.js";import"./usePageContext.35102b69.js";import"./transButton.a82459aa.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const r=a(e);r&&r.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+r.toDataURL("image/png")+") left top repeat";const l=a(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&r((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=m(" Create "),b=m("Clear"),g=m(" Reset ");f.render=function(e,t,a,r,o,n){const m=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[c(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[c(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),c(m,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[b])),_:1},8,["onClick"]),c(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[g])),_:1})])),_:1})])),_:1})};export default f;