import{a as e,h as s,i as o,o as n,j as a,k as r,w as c,n as l}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import{s as t}from"./index.ad3a3cba.js";import"./useTimeout.e40508cb.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./animation.91a87d89.js";import"./useScrollTo.8ee4efce.js";import"./index.c5e34609.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";var i=e({components:{CollapseContainer:t},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:n,createInfoModal:a,createErrorModal:r,createWarningModal:c,notification:l}=s(),{info:t,success:i,warning:d,error:m}=e;return{infoMsg:t,successMsg:i,warningMsg:d,errorMsg:m,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){n({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){c({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){l.success({message:"Tip",description:"content message..."})}}}});const d={class:"p-4"},m=l(" Info "),f=l(" Success "),u=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l("Info"),h=l("Warning"),M=l("Success"),k=l("Error"),_=l("Info"),j=l("Success"),w=l("Error"),b=l("Warning"),x=l("Success");i.render=function(e,s,l,t,i,T){const S=o("a-button"),E=o("CollapseContainer");return n(),a("div",d,[r(E,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:c((()=>[r(S,{onClick:s[1]||(s[1]=s=>e.infoMsg("Info message")),class:"mr-2"},{default:c((()=>[m])),_:1}),r(S,{onClick:s[2]||(s[2]=s=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:c((()=>[f])),_:1}),r(S,{onClick:s[3]||(s[3]=s=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:c((()=>[u])),_:1}),r(S,{onClick:s[4]||(s[4]=s=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:c((()=>[g])),_:1}),r(S,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:c((()=>[p])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:c((()=>[r(S,{onClick:s[5]||(s[5]=s=>e.handleConfirm("info")),class:"mr-2"},{default:c((()=>[C])),_:1}),r(S,{onClick:s[6]||(s[6]=s=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:c((()=>[h])),_:1}),r(S,{onClick:s[7]||(s[7]=s=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:c((()=>[M])),_:1}),r(S,{onClick:s[8]||(s[8]=s=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:c((()=>[k])),_:1})])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:c((()=>[r(S,{onClick:e.handleInfoModal,class:"mr-2"},{default:c((()=>[_])),_:1},8,["onClick"]),r(S,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),r(S,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:c((()=>[w])),_:1},8,["onClick"]),r(S,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:c((()=>[r(S,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"])])),_:1})])};export default i;