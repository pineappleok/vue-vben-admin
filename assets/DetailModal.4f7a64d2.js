import{_ as s}from"./index.667a8f58.js";import{D as t}from"./index.9a21867f.js";import{u as i}from"./useDescription.69bc598c.js";import{d as e,u as o,h as r,o as a,i as d,w as n,j as c,aH as m}from"./index.8fd28b0b.js";import{getDescSchema as p}from"./data.e6ff58be.js";import"./useTimeout.3e07d977.js";import"./useAttrs.d25a5a28.js";import"./useWindowSizeFn.79029f3f.js";import"./index.c6402b08.js";import"./index.2cd632d7.js";import"./domUtils.a74b90a6.js";import"./_stringToArray.68c66cc2.js";import"./RightOutlined.c0b4e03a.js";import"./index.8d91dadc.js";import"./useScrollTo.df266baf.js";import"./animation.c383ac6d.js";import"./FullscreenOutlined.c3894478.js";import"./isEqual.db26dd53.js";import"./index.affbffdc.js";import"./responsiveObserve.c545f1cc.js";import"./index.1de42ecc.js";import"./colors.d7509804.js";var f=e({name:"ErrorLogDetailModal",components:{BasicModal:s,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:s}=o(),[t]=i({column:2,schema:p()});return{register:t,useI18n:o,t:s}}});f.render=function(s,t,i,e,o,p){const f=r("Description"),j=r("BasicModal");return a(),d(j,m({width:800,title:s.t("sys.errorLog.tableActionDesc")},s.$attrs),{default:n((()=>[c(f,{data:s.info,onRegister:s.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;