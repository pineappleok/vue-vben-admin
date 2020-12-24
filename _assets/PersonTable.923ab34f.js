import{a as e,i as t,o as i,j as o,k as n,w as a,p as d}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.d5a12bb2.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import"./index.237a3252.js";import"./colors.519db886.js";import"./index.e75123ca.js";import"./RightOutlined.4dd7a895.js";import"./index.a900f8be.js";import"./types.a29b9594.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./_baseFor.f4e5f03f.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c95c2261.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./LeftOutlined.d639177e.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.4d9aa87b.js";import"./index.6f702cdb.js";import"./index.fd1fedbf.js";import"./zh_CN.0242bd16.js";import{T as s}from"./TableAction.a1f48a91.js";import"./index.b1e85ccd.js";import"./CaretDownFilled.98ae748f.js";import"./CheckOutlined.c52c5205.js";import"./CloseOutlined.dd293c60.js";import{s as r,b as c,c as l}from"./EditTableHeaderIcon.a7ed0a5d.js";import"./DownOutlined.ec5528f1.js";import"./FullscreenOutlined.f9d23297.js";import"./LeftOutlined.6d78c070.js";import"./functional.e82516cd.js";import"./RedoOutlined.e1c83ae4.js";import"./RightOutlined.c6f561c4.js";import"./SettingOutlined.582aab15.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import"./useForm.47a60267.js";import"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";import"./useFullScreen.250cf1f4.js";import"./uuid.40269c00.js";import"./useExpose.7ccc2771.js";import"./index.cf77ba7a.js";import{u as m}from"./useTable.4c65aec3.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:l({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:l({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:l({dataIndex:"dept",placeholder:"请输入所属部门"})}],j=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var u=e({components:{BasicTable:r,EditTableHeaderIcon:c,TableAction:s},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:j,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const b=d("新增成员");u.render=function(e,d,s,r,c,l){const m=t("TableAction"),p=t("BasicTable"),j=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[b])),_:1},8,["onClick"])])};export default u;