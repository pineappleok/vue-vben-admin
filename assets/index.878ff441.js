import{M as e}from"./index.09e58486.js";import{_ as t}from"./index.ccb911a1.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as m,j as l,m as p}from"./index.72961157.js";import"./index.eb04067c.js";import"./index.8b1e1205.js";import"./RightOutlined.ba1a4c59.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./isEqual.2bab8c16.js";import"./toInteger.f9979050.js";import"./DownOutlined.884ac450.js";/* empty css              */import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";import"./vendor.3b1829c7.js";var d=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=p(" 黑暗主题 ");d.render=function(e,t,n,a,o,p){const d=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return i(),s(f,{title:"MarkDown组件示例"},{default:m((()=>[l(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:m((()=>[u])),_:1},8,["onClick"]),l(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default d;
