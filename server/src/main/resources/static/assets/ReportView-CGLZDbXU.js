import{d as t,u as a,m as n,a as r,c,n as u,h as p}from"./index-Ci9_C7iA.js";const l=t({__name:"ReportView",setup(i){const e=u(),{addToast:o}=a();return n(async()=>{await r.checkLogin()||(o({message:"로그인이 필요합니다."}),e.push("/login"))}),(s,m)=>(p(),c("div",null,"Report"))}});export{l as default};
