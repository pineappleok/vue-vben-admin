let e=document.createElement("style");e.innerHTML=".demo[data-v-1de7c5b2]{background:#fff}",document.head.appendChild(e);import{a as t,g as s,dm as a,s as o,dn as n,c$ as r,d0 as d,i as l,o as i,j as u,k as c,n as m,p,aS as f}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import{A as R}from"./index.f69020fc.js";import"./index.4d9aa87b.js";import S from"./CurrentPermissionMode.b9f0fa0f.js";var g=t({components:{Alert:R,CurrentPermissionMode:S},setup(){const{changeRole:e}=n();return{userStore:s,RoleEnum:a,isSuper:o((()=>s.getRoleListState.includes(a.SUPER))),isTest:o((()=>s.getRoleListState.includes(a.TEST))),changeRole:e}}});const E=f("data-v-1de7c5b2");r("data-v-1de7c5b2");const b={class:"p-4 m-4 demo"},y=p(" 当前角色: "),T={class:"mt-4"},h=p(" 权限切换(请先切换权限模式为前端角色权限模式): ");d();const v=E(((e,t,s,a,o,n)=>{const r=l("Alert"),d=l("CurrentPermissionMode"),f=l("a-button"),R=l("a-button-group");return i(),u("div",b,[c(r,{message:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口","show-icon":""}),c(d),c("p",null,[y,c("a",null,m(e.userStore.getRoleListState),1)]),c(r,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",T,[h,c(R,null,{default:E((()=>[c(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[p(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),c(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[p(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])}));g.render=v,g.__scopeId="data-v-1de7c5b2";export default g;