import{a as t}from"./auth-wfKwW2uC.js";import{d as a,u as n,l as r,c,m as p,g as u}from"./index-DD4kE7Gc.js";const f=a({__name:"ReportView",setup(i){const e=p(),{addToast:o}=n();return r(async()=>{await t.checkLogin()||(o({message:"로그인이 필요합니다."}),e.push("/login"))}),(s,m)=>(u(),c("div",null,"Report"))}});export{f as default};