import{_ as i}from"./index.3ddc092b.js";import{getBasicColumns as e}from"./tableData.7aa0192c.js";import{d as t}from"./table.49df7db7.js";import{d as s,h as o,o as r,i as d,j as p,w as a,l as m}from"./index.8fd28b0b.js";import{u as n}from"./useTable.25a4d7cd.js";import"./index.5da02f72.js";import"./SearchOutlined.5b280909.js";import"./DownOutlined.638a8b23.js";import"./CheckOutlined.f38f1076.js";import"./index.e8917f9b.js";import"./index.4b221471.js";import"./responsiveObserve.c545f1cc.js";import"./index.dfa58fd0.js";import"./findIndex.46715178.js";import"./isEqual.db26dd53.js";import"./_baseProperty.74f89655.js";import"./toInteger.1d35047c.js";import"./index.ca52217c.js";import"./index.a0546b54.js";import"./index.a4305da9.js";import"./UpOutlined.91f278e8.js";import"./index.13c62466.js";import"./EyeOutlined.b3332bf0.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";import"./RightOutlined.aa47ea21.js";import"./index.e97590c0.js";import"./types.210fae75.js";import"./Tree.48b1d8ad.js";import"./util.3f60f4ff.js";import"./useAttrs.d25a5a28.js";import"./index.8d91dadc.js";import"./index.4169a005.js";import"./uuid.e90a529e.js";import"./index.81cfdddc.js";import"./index.667a8f58.js";import"./useTimeout.3e07d977.js";import"./useWindowSizeFn.79029f3f.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./FullscreenOutlined.c3894478.js";import"./index.af959341.js";import"./index.e632b98e.js";import"./index.c812d406.js";import"./LeftOutlined.71528b0c.js";import"./download.bd06191e.js";import"./index.952920f9.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.eb8b176e.js";import"./scrollTo.c9242ea7.js";import"./transButton.a82459aa.js";import"./clickOutside.a7ecebb7.js";import"./useSortable.c3a3cc08.js";import"./CheckOutlined.b6be9e12.js";import"./SettingOutlined.8ec5c339.js";import"./useExpose.1c7b7a84.js";import"./useForm.17daf63c.js";var j=s({components:{BasicTable:i},setup(){const[i]=n({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:e(),rowKey:"id",canResize:!1});return{registerTable:i}}});const c={class:"p-4"};j.render=function(i,e,t,s,n,j){const l=o("BasicTable");return r(),d("div",c,[p(l,{onRegister:i.registerTable},{expandedRowRender:a((({record:i})=>[p("span",null,"No: "+m(i.no),1)])),_:1},8,["onRegister"])])};export default j;