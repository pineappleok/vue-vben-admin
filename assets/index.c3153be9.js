import{u as e}from"./useContextMenu.e6b3250d.js";import{a as t}from"./index.f458f5b1.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.72961157.js";import{_ as d}from"./index.ccb911a1.js";import"./index.8b1e1205.js";import"./RightOutlined.ba1a4c59.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./isEqual.2bab8c16.js";import"./toInteger.f9979050.js";/* empty css              */import"./index.36e82902.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useTimeout.3a4cc0a3.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./vendor.3b1829c7.js";import"./index.eb04067c.js";import"./DownOutlined.884ac450.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return s(),a(f,{title:"右键菜单示例"},{default:l((()=>[r(b,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;
