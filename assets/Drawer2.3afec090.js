import{_ as r,a as t}from"./index.b4c1bfd5.js";import{d as s,h as e,o as i,i as a,w as o,j as d,aH as n,m as c}from"./index.8fd28b0b.js";import"./index.f3353602.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useTimeout.3e07d977.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./useAttrs.d25a5a28.js";import"./isEqual.db26dd53.js";var m=s({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:s}]=t();return{register:r,closeDrawer:s}}});const p=c(" Drawer Info. "),j=c("内部关闭drawer");m.render=function(r,t,s,c,m,l){const u=e("a-button"),f=e("BasicDrawer");return i(),a(f,n(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[p,d(u,{type:"primary",onClick:r.closeDrawer},{default:o((()=>[j])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default m;