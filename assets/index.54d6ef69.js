import{d as s,e as r,bK as t,bW as e,bk as n,dD as a,bZ as o}from"./index.8fd28b0b.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:o}){const{getPermissionMode:u}=n(),{hasPermission:i}=a();return()=>{const n=r(u);return n===t.ROLE?function(){const{value:r}=s;return r?i(r)?e(o):null:e(o)}():n===t.BACK?function(){const{value:r}=s;return r?i(r)?e(o):null:e(o)}():e(o)}}});o(u);export{u as _};