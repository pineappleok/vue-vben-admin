import{a as n,r as e,f as a,i as t,o,j as r,k as s,w as l,p as u}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import{M as c}from"./index.c6d15869.js";var i=n({components:{MarkDown:c},setup(){const n=e(null),t=e("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const e=a(n);if(!e)return;e.getVditor().setTheme("dark")},markDownRef:n,handleChange:function(n){t.value=n}}}});const m={class:"p-4"},f=u("黑暗主题");i.render=function(n,e,a,u,c,i){const d=t("a-button"),p=t("MarkDown");return o(),r("div",m,[s(d,{onClick:n.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[f])),_:1},8,["onClick"]),s(p,{value:n.value,onChange:n.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])};export default i;