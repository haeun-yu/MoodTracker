import{a as T}from"./auth-CNAqI4To.js";import{d as F,u as R,r as p,l as B,n as W,c as u,b as e,F as w,s as b,t as h,m as A,g as r,v as N,p as V,i as Y,_ as j}from"./index-DUZP2jdm.js";const i=_=>(V("data-v-3abb75cc"),_=_(),Y(),_),H=i(()=>e("h1",{class:"text-4xl-bold"},"Calendar",-1)),L={class:"flex justify-between"},P={class:"w-[70%] calendar-container"},q={class:"calendar-box"},z={class:"text-center w-full"},K={class:"th"},X=["onClick"],$={class:"text-start text-sm-bold ml-[7px]"},G=i(()=>e("div",{class:"flex items-center mt-[5px] h-[30px]"},[e("p",{class:"text-base-heavy whitespace-nowrap pl-[10px]"}),e("div",{class:"w-full h-[10px]"})],-1)),J={class:"flex flex-col items-center gap-[20px] w-[27%]"},Q={class:"boxs"},U=i(()=>e("div",null,[e("p",null,"최장 연속 기록"),e("p",null,"몇일")],-1)),Z=i(()=>e("div",null,[e("p",null,"주간 평균 기록"),e("p",null,"몇일")],-1)),ee=i(()=>e("div",null,[e("p",null,"이달 작성 횟수"),e("p",null,"그래프")],-1)),te=i(()=>e("section",{class:"w-[28%]"},[e("article",null,[e("div",null,"이달의 감정"),e("div",null,"3개의 감정과 그래프"),e("div",null,[e("button",null,"그래프 보러 가기")])]),e("article",null,"오늘의 감정을 기록하세요")],-1)),se=2001,le=1,ne=F({__name:"CalendarView",setup(_){const D=A(),{addToast:k}=R(),v=p(null),f=p([]),x=p(null),C=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=p(0),a=p(0);B(async()=>{try{(await T.checkLogin()).userSeq!==1&&(k({message:"로그인이 필요합니다."}),D.push("/login"))}catch(s){k({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(s)}c.value=new Date().getFullYear(),a.value=new Date().getMonth()+1,g()}),W([c,a],()=>{g()});const g=()=>{x.value=y(c.value,a.value),v.value=m(c.value,a.value),S()},S=()=>{f.value=[];const s=Math.ceil((v.value+x.value)/7);let o=1;for(let l=0;l<s;l++){let t=[];for(let n=0;n<7;n++)l==0&&n<x.value?t.push(0):o<=v.value?(t.push(o),o++):t.push(0);f.value.push(t)}},m=(s,o)=>{switch(o){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 4:case 6:case 9:case 11:return 30;case 2:return s%4==0&&s%100!=0||s%400==0?29:28;default:return console.log("unknown month "+o),0}},y=(s,o)=>{let l=se,t=1,n=le;for(;;)if(s>l){for(let d=0;d<12;d++)n+=m(l,t+d);l++}else if(s==l){if(o>t)n+=m(l,t),t++;else if(o==t)return n%7}},M=()=>{a.value===1?(c.value--,a.value=12):a.value--},O=()=>{a.value===12?(c.value++,a.value=1):a.value++},I=(s,o,l)=>{const t=new Date;t.setHours(0,0,0,0);const n=new Date(s,o-1,l);return n.setHours(0,0,0,0),l===0?!1:n<t},E=s=>{};return(s,o)=>(r(),u("div",null,[H,e("div",L,[e("section",P,[e("article",q,[e("table",z,[e("thead",null,[e("tr",null,[(r(),u(w,null,b(C,(l,t)=>e("th",{key:t,class:"text-sm-bold"},[e("p",K,h(l),1)])),64))])]),e("tbody",null,[(r(!0),u(w,null,b(f.value,(l,t)=>(r(),u("tr",{key:t},[(r(!0),u(w,null,b(l,(n,d)=>(r(),u("td",{key:d,class:N(["cursor-pointer td",I(c.value,a.value,n)?"bg-gray-100":""]),onClick:ae=>E(n)},[e("p",$,h(n!==0?n:""),1),G],10,X))),128))]))),128))])])]),e("article",J,[e("div",Q,h(c.value)+"/"+h(a.value),1),e("div",{class:"flex items-center gap-[10px]"},[e("button",{class:"boxs",onClick:M},"지난 달"),e("button",{class:"boxs",onClick:O},"다음 달")]),U,Z,ee])]),te])]))}}),ue=j(ne,[["__scopeId","data-v-3abb75cc"]]);export{ue as default};