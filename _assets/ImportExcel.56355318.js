import{a as e,r as t,i,o as s,j as o,k as r,w as a,ad as d,aH as c,p as m}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.d5a12bb2.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import"./index.237a3252.js";import"./colors.519db886.js";import"./index.e75123ca.js";import"./RightOutlined.4dd7a895.js";import"./index.a900f8be.js";import"./types.a29b9594.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./_baseFor.f4e5f03f.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c95c2261.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./LeftOutlined.d639177e.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.4d9aa87b.js";import"./index.6f702cdb.js";import"./index.fd1fedbf.js";import"./zh_CN.0242bd16.js";import"./TableAction.a1f48a91.js";import"./index.b1e85ccd.js";import"./CaretDownFilled.98ae748f.js";import"./CheckOutlined.c52c5205.js";import"./CloseOutlined.dd293c60.js";import{s as n}from"./EditTableHeaderIcon.a7ed0a5d.js";import"./DownOutlined.ec5528f1.js";import"./FullscreenOutlined.f9d23297.js";import"./LeftOutlined.6d78c070.js";import"./functional.e82516cd.js";import"./RedoOutlined.e1c83ae4.js";import"./RightOutlined.c6f561c4.js";import"./SettingOutlined.582aab15.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import"./useForm.47a60267.js";import"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";import"./useFullScreen.250cf1f4.js";import"./uuid.40269c00.js";import"./useExpose.7ccc2771.js";import"./index.cf77ba7a.js";import{I as p}from"./index.4a46e67d.js";var j=e({components:{BasicTable:n,ImpExcel:p},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const l={class:"m-4"},u=m("导入Excel");j.render=function(e,t,m,n,p,j){const f=i("a-button"),b=i("ImpExcel"),x=i("BasicTable");return s(),o("div",l,[r(b,{onSuccess:e.loadDataSuccess},{default:a((()=>[r(f,{class:"m-3"},{default:a((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(s(!0),o(d,null,c(e.tableListRef,((e,t)=>(s(),o(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])};export default j;