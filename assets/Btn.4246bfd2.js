import{d as e,f as s,dz as t,K as a,dA as o,cp as r,cq as l,h as u,bA as n,o as i,i as m,bw as c,j as d,l as p,m as f,k as E,a3 as R}from"./index.72961157.js";import{A as S}from"./index.46ecc65f.js";import{D as _}from"./index.36e82902.js";import j from"./CurrentPermissionMode.13182b39.js";import{_ as x}from"./index.fe87bbee.js";import{_ as y}from"./index.ccb911a1.js";import"./vendor.3b1829c7.js";import"./index.eb04067c.js";import"./index.8b1e1205.js";import"./RightOutlined.ba1a4c59.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./isEqual.2bab8c16.js";import"./toInteger.f9979050.js";import"./DownOutlined.884ac450.js";/* empty css              */import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";var P=e({components:{Alert:S,PageWrapper:y,CurrentPermissionMode:j,Divider:_,Authority:x},setup(){const{changeRole:e,hasPermission:r}=o();return{userStore:s,RoleEnum:t,isSuper:a((()=>s.getRoleListState.includes(t.SUPER))),isTest:a((()=>s.getRoleListState.includes(t.TEST))),changeRole:e,hasPermission:r}}});const T=c("data-v-135f74ce");r("data-v-135f74ce");const b=f(" 当前角色: "),g={class:"mt-4"},h=f(" 权限切换(请先切换权限模式为前端角色权限模式): "),v=f("组件方式判断权限(有需要可以自行全局注册)"),U=f(" 拥有super角色权限可见 "),A=f(" 拥有test角色权限可见 "),k=f(" 拥有[test,super]角色权限可见 "),C=f("函数方式方式判断权限(适用于函数内部过滤)"),w=f(" 拥有super角色权限可见 "),D=f(" 拥有test角色权限可见 "),L=f(" 拥有[test,super]角色权限可见 "),O=f("指令方式方式判断权限(该方式不能动态修改权限.)"),M=f(" 拥有super角色权限可见 "),q=f(" 拥有test角色权限可见 "),B=f(" 拥有[test,super]角色权限可见 ");l();const I=T(((e,s,t,a,o,r)=>{const l=u("CurrentPermissionMode"),c=u("Alert"),S=u("a-button"),_=u("a-button-group"),j=u("Divider"),x=u("Authority"),y=u("PageWrapper"),P=n("auth");return i(),m(y,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:T((()=>[d(l),d("p",null,[b,d("a",null,p(e.userStore.getRoleListState),1)]),d(c,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),d("div",g,[h,d(_,null,{default:T((()=>[d(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:T((()=>[f(p(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),d(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:T((()=>[f(p(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),d(j,null,{default:T((()=>[v])),_:1}),d(x,{value:e.RoleEnum.SUPER},{default:T((()=>[d(S,{type:"primary",class:"mx-4"},{default:T((()=>[U])),_:1})])),_:1},8,["value"]),d(x,{value:e.RoleEnum.TEST},{default:T((()=>[d(S,{color:"success",class:"mx-4"},{default:T((()=>[A])),_:1})])),_:1},8,["value"]),d(x,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:T((()=>[d(S,{color:"error",class:"mx-4"},{default:T((()=>[k])),_:1})])),_:1},8,["value"]),d(j,null,{default:T((()=>[C])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(i(),m(S,{key:0,type:"primary",class:"mx-4"},{default:T((()=>[w])),_:1})):E("",!0),e.hasPermission(e.RoleEnum.TEST)?(i(),m(S,{key:1,color:"success",class:"mx-4"},{default:T((()=>[D])),_:1})):E("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(i(),m(S,{key:2,color:"error",class:"mx-4"},{default:T((()=>[L])),_:1})):E("",!0),d(j,null,{default:T((()=>[O])),_:1}),R(d(S,{type:"primary",class:"mx-4"},{default:T((()=>[M])),_:1},512),[[P,e.RoleEnum.SUPER]]),R(d(S,{color:"success",class:"mx-4"},{default:T((()=>[q])),_:1},512),[[P,e.RoleEnum.TEST]]),R(d(S,{color:"error",class:"mx-4"},{default:T((()=>[B])),_:1},512),[[P,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));P.render=I,P.__scopeId="data-v-135f74ce";export default P;
