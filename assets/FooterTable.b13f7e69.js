import{_ as i}from"./index.007296ab.js";import{getBasicColumns as e}from"./tableData.252346e9.js";import{d as t}from"./table.765456f1.js";import{d as o,h as s,o as r,i as m,j as d}from"./index.72961157.js";import{u as n}from"./useTable.f639279d.js";import"./index.af36237f.js";import"./SearchOutlined.b22e7653.js";import"./CheckOutlined.8d068b58.js";import"./DownOutlined.884ac450.js";import"./index.48e86f43.js";import"./index.3d443af7.js";import"./index.730c12b4.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d43a29e4.js";import"./isEqual.2bab8c16.js";import"./get.4975c5e2.js";import"./_baseProperty.74f89655.js";import"./toInteger.f9979050.js";import"./index.6b4825f2.js";import"./index.0630f2f2.js";import"./EyeOutlined.401aa8b7.js";import"./index.3d7a4aea.js";import"./index.921e8863.js";import"./UpOutlined.96ecf785.js";import"./index.af96b2ae.js";import"./RightOutlined.ba1a4c59.js";import"./RedoOutlined.27f739c9.js";import"./index.8b1e1205.js";import"./EllipsisOutlined.355a4652.js";import"./types.fa1dbe2e.js";import"./Tree.acd42032.js";import"./util.1c24ad6f.js";/* empty css              */import"./uuid.2e082eac.js";import"./index.f496c18c.js";import"./DeleteOutlined.6dc16ac6.js";import"./index.46ecc65f.js";import"./index.35af8c02.js";import"./useTimeout.3a4cc0a3.js";import"./useWindowSizeFn.048864be.js";import"./index.f458f5b1.js";import"./index.054c67b3.js";import"./domUtils.0adaad38.js";import"./_stringToArray.cf2e328f.js";import"./useScrollTo.2abae1df.js";import"./animation.a805db4d.js";import"./FullscreenOutlined.0333d80b.js";import"./index.36e82902.js";import"./index.7981f544.js";import"./index.d1603dcb.js";import"./LeftOutlined.282a7177.js";import"./download.06161254.js";import"./index.f48dd062.js";import"./DoubleLeftOutlined.630b0f11.js";import"./DoubleRightOutlined.8fd7917b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.df2cae6a.js";import"./CaretDownFilled.91550b18.js";import"./clickOutside.6847b077.js";import"./useSortable.68c47127.js";import"./SettingOutlined.127ce663.js";import"./useExpose.86a2b87b.js";import"./useForm.411a60fd.js";var p=o({components:{BasicTable:i},setup(){const[i]=n({title:"表尾行合计示例",api:t,rowSelection:{type:"checkbox"},columns:e(),showSummary:!0,summaryFunc:function(i){const e=i.reduce(((i,e)=>i+=e.no),0);return[{_row:"合计",_index:"平均值",no:e},{_row:"合计",_index:"平均值",no:e}]},scroll:{x:2e3},canResize:!1});return{registerTable:i}}});const a={class:"p-4"};p.render=function(i,e,t,o,n,p){const j=s("BasicTable");return r(),m("div",a,[d(j,{onRegister:i.registerTable},null,8,["onRegister"])])};export default p;
