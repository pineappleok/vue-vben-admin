import{cW as s,d as t,M as e,aN as a,q as i,g as o,cr as r,cs as d,h as n,o as m,i as p,bz as c,j as l,m as j}from"./index.8fd28b0b.js";import"./index.4b221471.js";import{U as u}from"./uuid.e90a529e.js";import"./index.81cfdddc.js";import"./index.8d91dadc.js";import{R as f,C as b}from"./index.ca52217c.js";import{_ as x}from"./index.e8917f9b.js";import{a as h}from"./index.c6402b08.js";import{h as g}from"./header.9f640cf1.js";import{b as O}from"./data.a32591d5.js";import{u as _}from"./useForm.17daf63c.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.46715178.js";import"./isEqual.db26dd53.js";import"./_baseProperty.74f89655.js";import"./toInteger.1d35047c.js";import"./util.3f60f4ff.js";import"./EyeOutlined.b3332bf0.js";import"./CheckOutlined.f38f1076.js";import"./types.210fae75.js";import"./index.dfa58fd0.js";import"./index.5da02f72.js";import"./SearchOutlined.5b280909.js";import"./DownOutlined.638a8b23.js";import"./index.a0546b54.js";import"./index.a4305da9.js";import"./UpOutlined.91f278e8.js";import"./index.13c62466.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";import"./RightOutlined.aa47ea21.js";import"./index.e97590c0.js";import"./Tree.48b1d8ad.js";import"./useAttrs.d25a5a28.js";import"./index.4169a005.js";import"./index.667a8f58.js";import"./useTimeout.3e07d977.js";import"./useWindowSizeFn.79029f3f.js";import"./FullscreenOutlined.c3894478.js";import"./index.af959341.js";import"./index.e632b98e.js";import"./index.c812d406.js";import"./LeftOutlined.71528b0c.js";import"./download.bd06191e.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./index.2cd632d7.js";import"./RightOutlined.c0b4e03a.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=t({components:{BasicForm:x,CollapseContainer:h,Button:e,Upload:u,Icon:a,[f.name]:f,[b.name]:b},setup(){const{createMessage:t}=o(),[e,{setFieldsValue:a}]=_({labelWidth:120,schemas:O,showActionButtonGroup:!1});return i((async()=>{const t=await s.request({url:C.ACCOUNT_INFO,method:"GET"});a(t)})),{headerImg:g,register:e,handleSubmit:()=>{t.success("更新成功！")}}}});const I=c("data-v-756d276a");r("data-v-756d276a");const w={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),F=j("更换头像 "),U=j("更新基本信息");d();const T=I(((s,t,e,a,i,o)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),j=n("Button"),u=n("Upload"),f=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:I((()=>[l(f,{gutter:24},{default:I((()=>[l(d,{span:14},{default:I((()=>[l(r,{onRegister:s.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:I((()=>[l("div",w,[y,l("img",{width:"140",src:s.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:I((()=>[l(j,{type:"ghost",class:"ml-5"},{default:I((()=>[l(c,{icon:"feather:upload"}),F])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:s.handleSubmit},{default:I((()=>[U])),_:1},8,["onClick"])])),_:1})}));v.render=T,v.__scopeId="data-v-756d276a";export default v;