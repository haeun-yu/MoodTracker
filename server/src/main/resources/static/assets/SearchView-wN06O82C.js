import{d as j,u as E,r as n,m as F,a as S,q as x,l as N,c as u,e,f as z,t as d,z as A,F as I,x as K,y as q,s as G,n as H,h as i,p as O,j as U,_ as Y}from"./index-CDoyEkHj.js";import{d as P}from"./diary-CSx834h4.js";import{D as J}from"./DiaryModal-Bh6j6fR-.js";import{_ as Q}from"./CommonInput.vue_vue_type_script_setup_true_lang-AiG2_k2h.js";const $="/icons/page-nation-left.svg",p=_=>(O("data-v-0e4a8208"),_=_(),U(),_),W={class:"w-full flex flex-col items-center justify-between border-b-[2px] border-black pb-[60px]"},X=p(()=>e("h3",{class:"text-4xl-bold mb-[60px] text-[#222222]"},"SEARCH",-1)),Z={class:"flex item-center gap-[10px] w-[80%]"},ee={class:"w-full flex flex-col items-center justify-between pt-[10px]"},te={key:0,class:"pt-[100px]"},se=p(()=>e("p",{class:"text-xl-regular"},"검색 결과가 없습니다.",-1)),ae=[se],le={key:1,class:"w-full flex flex-col gap-[20px]"},oe={class:"flex items-center justify-between"},ne={class:"text-lg-bold"},ce={class:"flex items-center gap-[10px]"},ie=p(()=>e("span",{class:"w-[5px] h-[5px] bg-black rounded-full"},null,-1)),re={class:"search-result-container"},ue=["onClick"],de={class:"w-[10%]"},pe=["src"],_e={class:"w-[80%] ellipsis"},ve={class:"w-full flex items-center justify-center gap-[10px]"},ge=["disabled"],me=p(()=>e("img",{src:$,class:"w-[30px]"},null,-1)),he=[me],xe=["disabled"],fe=p(()=>e("img",{src:$,class:"w-[30px] -scale-x-100"},null,-1)),we=[fe],f=10,ye=j({__name:"SearchView",setup(_){const w=H(),{addToast:y}=E(),c=n(!1),m=n(!1),h=n(null),r=n(""),l=n(1),v=n(1),g=n([]),o=n([]),b=n(void 0);F(async()=>{await S.checkLogin()||(y({message:"로그인이 필요합니다."}),w.push("/login"));const t=await S.getInformation();t||(y({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),w.push("/")),h.value=t;const a=await P.searchDiaryByKeyword(h.value.name,"");console.log(a),g.value=a,o.value=g.value,C()}),x(c,()=>{k()}),x(r,()=>{D()}),x([o,l],()=>{C()});const T=s=>{const t=new Date(s);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},k=()=>{o.value=c.value?o.value.sort((s,t)=>new Date(t.createdAt).getTime()-new Date(s.createdAt).getTime()):o.value.sort((s,t)=>new Date(s.createdAt).getTime()-new Date(t.createdAt).getTime())},D=async()=>{const s=await P.searchDiaryByKeyword(h.value.name,r.value);g.value=s,o.value=g.value.filter(t=>t.content.includes(r.value)),l.value=1,k()},C=()=>{v.value=Math.ceil(o.value.length/f)},V=N(()=>{const s=(l.value-1)*f;return o.value.slice(s,s+f)}),B=()=>{l.value>1&&(l.value-=1)},L=()=>{l.value<v.value&&(l.value+=1)},R=s=>{b.value=s,m.value=!0};return(s,t)=>(i(),u(I,null,[e("div",null,[e("section",W,[X,e("article",Z,[z(Q,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a)},null,8,["modelValue"]),e("button",{class:"btn-primary px-[30px] py-[10px] text-xl-bold",onClick:D}," 검색 ")])]),e("section",ee,[o.value.length<=0?(i(),u("article",te,ae)):(i(),u("article",le,[e("div",oe,[e("label",ne,"검색 결과("+d(o.value.length)+")",1),e("div",ce,[e("button",{class:A(c.value?"text-lg-bold":"text-lg-regular"),onClick:t[1]||(t[1]=a=>c.value=!0)}," 최신 순 ",2),ie,e("button",{class:A(c.value?"text-lg-regular":"text-lg-bold"),onClick:t[2]||(t[2]=a=>c.value=!1)}," 오래된 순 ",2)])]),e("div",re,[(i(!0),u(I,null,K(V.value,(a,M)=>(i(),u("div",{key:M,class:"search-result-list cursor-pointer",onClick:be=>R(a)},[e("p",de,d(T(a.createdAt)),1),e("img",{src:`/icons/emotions/${a.emotion}.svg`,alt:"emotion",class:"w-[2%]"},null,8,pe),e("p",_e,d(a.content),1)],8,ue))),128))]),e("div",ve,[e("button",{onClick:B,disabled:l.value<=1},he,8,ge),e("span",null,d(l.value)+" / "+d(v.value),1),e("button",{onClick:L,disabled:l.value>=v.value},we,8,xe)])]))])]),m.value?(i(),q(J,{key:0,diary:b.value,onClose:t[3]||(t[3]=a=>m.value=!1)},null,8,["diary"])):G("",!0)],64))}}),Ae=Y(ye,[["__scopeId","data-v-0e4a8208"]]);export{Ae as default};
