import{bx as e,b_ as n,b$ as t}from"./index.8fd28b0b.js";function i(i,s=150,r){let o=()=>{i()};const[d,a]=e(o,s,r);o=d;const b=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),a()};return n((()=>{b()})),t((()=>{m()})),[b,m]}export{i as u};