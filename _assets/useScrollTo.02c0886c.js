import{r as a,cz as o,f as t,cA as r}from"./index.c162a79a.js";import{r as s}from"./animation.94d2142a.js";function n({el:n,to:c,duration:l=500,callback:i}){const e=a(!1),u=(a=>a.scrollTop)(n),f=c-u;let p=0;l=o(l)?500:l;const m=function(){if(!t(e))return;p+=20;const a=(o=p,c=u,d=f,(o/=l/2)<1?d/2*o*o+c:-d/2*(--o*(o-2)-1)+c);var o,c,d;((a,o)=>{a.scrollTop=o})(n,a),p<l&&t(e)?s(m):i&&r(i)&&i()};return{start:()=>{e.value=!0,m()},stop:()=>{e.value=!1}}}export{n as u};