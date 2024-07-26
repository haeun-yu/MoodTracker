import{d as E,u as F,r as n,m as N,a as S,q as f,l as z,c as u,e,f as K,t as d,A as I,F as P,z as q,y as G,s as H,n as O,g as U,h as i,p as Y,j as J,_ as Q}from"./index-CPo2f3SM.js";import{d as $}from"./diary-60pDzgdd.js";import{_ as W}from"./CommonInput.vue_vue_type_script_setup_true_lang-DnsE1tmS.js";const T="/icons/page-nation-left.svg",p=_=>(Y("data-v-4a7b5322"),_=_(),J(),_),X={class:"w-full flex flex-col items-center justify-between border-b-[2px] border-black pb-[60px]"},Z=p(()=>e("h3",{class:"text-4xl-bold mb-[60px] text-[#222222]"},"SEARCH",-1)),ee={class:"flex item-center gap-[10px] w-[80%]"},te={class:"w-full flex flex-col items-center justify-between pt-[10px]"},se={key:0,class:"pt-[100px]"},ae=p(()=>e("p",{class:"text-xl-regular"},"검색 결과가 없습니다.",-1)),le=[ae],oe={key:1,class:"w-full flex flex-col gap-[20px]"},ne={class:"flex items-center justify-between"},ce={class:"text-lg-bold"},ie={class:"flex items-center gap-[10px]"},re=p(()=>e("span",{class:"w-[5px] h-[5px] bg-black rounded-full"},null,-1)),ue={class:"search-result-container"},de=["onClick"],pe={class:"w-[10%]"},_e=["src"],ve={class:"w-[80%] ellipsis"},ge={class:"w-full flex items-center justify-center gap-[10px]"},me=["disabled"],he=p(()=>e("img",{src:T,class:"w-[30px]"},null,-1)),xe=[he],fe=["disabled"],we=p(()=>e("img",{src:T,class:"w-[30px] -scale-x-100"},null,-1)),be=[we],w=10,ye=E({__name:"SearchView",setup(_){const b=O(),{addToast:y}=F(),c=n(!0),h=n(!1),x=n(null),r=n(""),a=n(1),v=n(1),g=n([]),l=n([]),k=n(null);N(async()=>{await S.checkLogin()||(y({message:"로그인이 필요합니다."}),b.push("/login"));const t=await S.getInformation();t||(y({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),b.push("/")),x.value=t;const m=await $.searchDiaryByKeyword(x.value.name,"");console.log(m),g.value=m,l.value=g.value,A()}),f(c,()=>{D()}),f(r,()=>{C()}),f([l,a],()=>{A()});const V=s=>{const t=new Date(s);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},D=()=>{l.value=c.value?l.value.sort((s,t)=>new Date(t.createdAt).getTime()-new Date(s.createdAt).getTime()):l.value.sort((s,t)=>new Date(s.createdAt).getTime()-new Date(t.createdAt).getTime())},C=async()=>{const s=await $.searchDiaryByKeyword(x.value.name,r.value);g.value=s,l.value=g.value.filter(t=>t.content.includes(r.value)),a.value=1,D()},A=()=>{v.value=Math.ceil(l.value.length/w)},B=z(()=>{const s=(a.value-1)*w;return l.value.slice(s,s+w)}),L=()=>{a.value>1&&(a.value-=1)},M=()=>{a.value<v.value&&(a.value+=1)},R=s=>{k.value=s,h.value=!0};return(s,t)=>{const m=U("DiaryModal");return i(),u(P,null,[e("div",null,[e("section",X,[Z,e("article",ee,[K(W,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o)},null,8,["modelValue"]),e("button",{class:"btn-primary px-[30px] py-[10px] text-xl-bold",onClick:C}," 검색 ")])]),e("section",te,[l.value.length<=0?(i(),u("article",se,le)):(i(),u("article",oe,[e("div",ne,[e("label",ce,"검색 결과("+d(l.value.length)+")",1),e("div",ie,[e("button",{class:I(c.value?"text-lg-bold":"text-lg-regular"),onClick:t[1]||(t[1]=o=>c.value=!0)}," 최신 순 ",2),re,e("button",{class:I(c.value?"text-lg-regular":"text-lg-bold"),onClick:t[2]||(t[2]=o=>c.value=!1)}," 오래된 순 ",2)])]),e("div",ue,[(i(!0),u(P,null,q(B.value,(o,j)=>(i(),u("div",{key:j,class:"search-result-list",onClick:ke=>R(o)},[e("p",pe,d(V(o.createdAt)),1),e("img",{src:`/icons/emotions/${o.emotion}.svg`,alt:"emotion",class:"w-[2%]"},null,8,_e),e("p",ve,d(o.content),1)],8,de))),128))]),e("div",ge,[e("button",{onClick:L,disabled:a.value<=1},xe,8,me),e("span",null,d(a.value)+" / "+d(v.value),1),e("button",{onClick:M,disabled:a.value>=v.value},be,8,fe)])]))])]),h.value?(i(),G(m,{key:0,diary:k.value,onClose:t[3]||(t[3]=o=>h.value=!1)},null,8,["diary"])):H("",!0)],64)}}}),Se=Q(ye,[["__scopeId","data-v-4a7b5322"]]);export{Se as default};
