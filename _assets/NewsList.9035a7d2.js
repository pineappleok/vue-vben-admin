let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,V as s,W as i,i as a,o as n,j as l,k as o,Y as r,aH as m,m as c,n as p,X as d}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import"./RightOutlined.a721f23a.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./LeftOutlined.670b6be7.js";import"./index.5c0386e3.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.52f5e17c.js";import{s as f,a as u}from"./index.ad3a3cba.js";import"./useTimeout.e40508cb.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./animation.91a87d89.js";import"./useScrollTo.8ee4efce.js";import"./index.c5e34609.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import{n as j}from"./data.edc06832.js";import{h as b}from"./header.817c2c65.js";var x=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:f,ScrollContainer:u},setup:()=>({newList:j})});const h=d("data-v-1006fc50");s("data-v-1006fc50");const w=o("img",{src:b,class:"news-list__item-avatar"},null,-1),v={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},y={class:"news-list__item-light"},C=p("申请迭代 "),I={class:"news-list__item-light"},T=p("发布 "),z={class:"news-list__item-cnte p-2"},S={class:"news-list__item-cnte__title"},k=o("br",null,null,-1),E=o("br",null,null,-1),M=o("br",null,null,-1);i();const O=h(((t,e,s,i,d,_)=>{const f=a("ListItemMeta"),u=a("ListItem"),j=a("List"),b=a("ScrollContainer"),x=a("CollapseContainer");return n(),l(x,{class:"news-list",title:"动态",canExpan:!1},{default:h((()=>[o(b,null,{default:h((()=>[o(j,null,{default:h((()=>[(n(!0),l(r,null,m(t.newList,(t=>(n(),l(u,{key:t.id,class:"news-list__item"},{default:h((()=>[o(f,null,{avatar:h((()=>[w])),description:h((()=>[o("div",v,[o("div",g,c(t.sendTime),1),o("div",L,[o("span",y,c(t.sender)+" ",1),C,o("span",I," "+c(t.title)+" ",1),T]),o("div",z,[o("span",S,c(t.cnteId),1),k,p(" Status: "+c(t.cnteStas)+" ",1),E,p(" Repository: "+c(t.cnteRepo)+" ",1),M])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));x.render=O,x.__scopeId="data-v-1006fc50";export default x;