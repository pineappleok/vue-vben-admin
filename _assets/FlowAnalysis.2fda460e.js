let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a as e,N as a,b1 as i,Y as l,b2 as n}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import"./RightOutlined.a721f23a.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import{T as t}from"./index.8e563336.js";import"./UpOutlined.25f25eae.js";import"./LeftOutlined.670b6be7.js";import{D as o}from"./index.f15549ef.js";import{P as r}from"./index.2ea1877e.js";import{s as p}from"./index.ad3a3cba.js";import"./useTimeout.e40508cb.js";import"./useECharts.f8c22312.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./props.c31746e0.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./animation.91a87d89.js";import"./useScrollTo.8ee4efce.js";import"./index.c5e34609.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import c from"./TrendLine.32dba6c1.js";const m="flow-analysis";var d=e({name:"AnalysisFLow",setup(){const s=()=>a(i,null,(()=>a(l,null,a(n,{md:24,lg:8},(()=>a(p,{title:"整体流量评分",canExpan:!1,class:`${m}__left`},(()=>a("div",null,a("div",{class:`${m}__score`},"86.2",a("span",null,"分")),a("div",{class:`${m}__rank`},"排名",a("span",null,"前20%")),a(r,{percent:70,showInfo:!1,status:"active"}),a(o,null),a("ul",{class:`${m}__rs`},a("li",null,a("span",null,"平均分"),a("span",null,"77.5")),a("li",null,a("span",null,"最高分"),a("span",null,"99.5")),a("li",null,a("span",null,"最低分"),a("span",null,"56.5")))))))),a(n,{md:24,lg:16},(()=>a(p,{title:"整体流量趋势",canExpan:!1},(()=>a(c,null))))))));return()=>a(t,{class:m,"default-active-key":"1"},(()=>[a(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),a(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),a(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default d;