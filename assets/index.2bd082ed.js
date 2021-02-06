import{_ as e}from"./index.48e86f43.js";import{d as t,g as o,h as i,o as s,i as r,bw as n,j as a}from"./index.72961157.js";import{_ as p}from"./index.ccb911a1.js";import{u as l}from"./useForm.411a60fd.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./SearchOutlined.b22e7653.js";import"./EyeOutlined.401aa8b7.js";import"./index.af36237f.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";/* empty css              */import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.35af8c02.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./FullscreenOutlined.0333d80b.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./index.eb04067c.js";import"./index.7c158f23.js";import"./usePageContext.dd16cf21.js";import"./transButton.df2cae6a.js";import"./ArrowLeftOutlined.4b998873.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:p},setup(){const{createMessage:e}=o(),[t,{validate:i,setProps:s}]=l({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await i(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:t}}});const c=n("data-v-5cbaa0f1"),u=c(((e,t,o,n,p,l)=>{const d=i("BasicForm"),m=i("PageWrapper");return s(),r(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;
