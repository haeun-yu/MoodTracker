import{a as S}from"./auth-C_aZBYfv.js";import{d as D}from"./diary-B0BJJVvr.js";import{d as E,u as L,r as n,l as R,n as f,k as j,c as r,b as e,e as A,t as u,y as I,F as N,x as $,m as M,g as d,p as F,i as K,_ as z}from"./index-DUDSh2eE.js";import{_ as G}from"./CommonInput.vue_vue_type_script_setup_true_lang-BRETWXvo.js";const P="/icons/page-nation-left.svg",p=_=>(F("data-v-accba212"),_=_(),K(),_),H={class:"w-full flex flex-col items-center justify-between border-b-[2px] border-black pb-[60px]"},U=p(()=>e("h3",{class:"text-4xl-bold mb-[60px] text-[#222222]"},"SEARCH",-1)),q={class:"flex item-center gap-[10px] w-[80%]"},J={class:"w-full flex flex-col items-center justify-between pt-[10px]"},O={key:0,class:"pt-[100px]"},Q=p(()=>e("p",{class:"text-xl-regular"},"검색 결과가 없습니다.",-1)),W=[Q],X={key:1,class:"w-full flex flex-col gap-[20px]"},Y={class:"flex items-center justify-between"},Z={class:"text-lg-bold"},ee={class:"flex items-center gap-[10px]"},se=p(()=>e("span",{class:"w-[5px] h-[5px] bg-black rounded-full"},null,-1)),te={class:"search-result-container"},ae={class:"w-[10%]"},le=["src"],oe={class:"w-[80%] ellipsis"},ne={class:"w-full flex items-center justify-center gap-[10px]"},ce=["disabled"],ie=p(()=>e("img",{src:P,class:"w-[30px]"},null,-1)),re=[ie],ue=["disabled"],de=p(()=>e("img",{src:P,class:"w-[30px] -scale-x-100"},null,-1)),pe=[de],b=10,_e=E({__name:"SearchView",setup(_){const x=M(),{addToast:g}=L(),c=n(!0),h=n(null),i=n(""),a=n(1),v=n(1),m=n([]),l=n([]);R(async()=>{try{(await S.checkLogin()).loggedIn||(g({message:"로그인이 필요합니다."}),x.push("/login"))}catch(o){g({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(o),x.push("/")}const t=await S.getInformation();t||(g({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),x.push("/")),h.value=t;const s=await D.searchDiaryByKeyword(h.value.userName,"");m.value=s,l.value=m.value,k()}),f(c,()=>{w()}),f(i,()=>{y()}),f([l,a],()=>{k()});const w=()=>{l.value=c.value?l.value.sort((t,s)=>new Date(s.date).getTime()-new Date(t.date).getTime()):l.value.sort((t,s)=>new Date(t.date).getTime()-new Date(s.date).getTime())},y=async()=>{const t=await D.searchDiaryByKeyword(h.value.userName,i.value);m.value=t,l.value=m.value.filter(s=>s.content.includes(i.value)),a.value=1,w()},k=()=>{v.value=Math.ceil(l.value.length/b)},C=j(()=>{const t=(a.value-1)*b;return l.value.slice(t,t+b)}),T=()=>{a.value>1&&(a.value-=1)},V=()=>{a.value<v.value&&(a.value+=1)};return(t,s)=>(d(),r("div",null,[e("section",H,[U,e("article",q,[A(G,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=o=>i.value=o)},null,8,["modelValue"]),e("button",{class:"btn-primary px-[30px] py-[10px] text-xl-bold",onClick:y}," 검색 ")])]),e("section",J,[l.value.length<=0?(d(),r("article",O,W)):(d(),r("article",X,[e("div",Y,[e("label",Z,"검색 결과("+u(l.value.length)+")",1),e("div",ee,[e("button",{class:I(c.value?"text-lg-bold":"text-lg-regular"),onClick:s[1]||(s[1]=o=>c.value=!0)}," 최신 순 ",2),se,e("button",{class:I(c.value?"text-lg-regular":"text-lg-bold"),onClick:s[2]||(s[2]=o=>c.value=!1)}," 오래된 순 ",2)])]),e("div",te,[(d(!0),r(N,null,$(C.value,(o,B)=>(d(),r("div",{key:B,class:"search-result-list"},[e("p",ae,u(o.date),1),e("img",{src:`/icons/emotions/${o.emotion}.svg`,alt:"emotion",class:"w-[2%]"},null,8,le),e("p",oe,u(o.content),1)]))),128))]),e("div",ne,[e("button",{onClick:T,disabled:a.value<=1},re,8,ce),e("span",null,u(a.value)+" / "+u(v.value),1),e("button",{onClick:V,disabled:a.value>=v.value},pe,8,ue)])]))])]))}}),he=z(_e,[["__scopeId","data-v-accba212"]]);export{he as default};
