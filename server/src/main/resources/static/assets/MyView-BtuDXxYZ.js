import{a as b}from"./auth-CNAqI4To.js";import{e as y,u as k,f as r,h as I,o as d,c as p,a as e,t as w,q as v,b as x,l as C,i as P,p as M,j as N,_ as V}from"./index-DMMAEzpU.js";import{_ as u}from"./CommonInput.vue_vue_type_script_setup_true_lang-BnevrDzh.js";const A="/images/sample-image.svg",D="/images/delete-account.svg",t=l=>(M("data-v-cbe9c481"),l=l(),N(),l),j={class:"my-body"},S={class:"text-3xl-bold mb-[20px]"},R={class:"grid grid-cols-4"},$={class:"flex flex-col gap-[10px] pt-[20px]"},B={key:0,class:"function-box"},q={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},E=t(()=>e("img",{src:A,alt:"sample-image",class:"w-[180px] h-[180px] rounded-[10px] border object-cover"},null,-1)),L={class:"flex border-b-[1.5px] border-black"},T=t(()=>e("label",{class:"w-[30%] text-[26px]"},"Name",-1)),z={class:"w-[70%]] text-[26px] font-light"},U={class:"flex border-b-[1.5px] border-black"},Y=t(()=>e("label",{class:"w-[30%] text-[26px]"},"Email",-1)),F={class:"w-[70%]] text-[26px] font-light"},G={key:1,class:"function-box"},H={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},J={class:"flex flex-col gap-[30px]"},K={class:"flex flex-col gap-[10px]"},O=t(()=>e("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),Q={class:"flex flex-col gap-[10px]"},W=t(()=>e("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),X={class:"flex flex-col gap-[10px]"},Z=t(()=>e("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),ee=t(()=>e("div",{class:"flex justify-end"},[e("button",{class:"btn-primary p-[10px]"},"Reset Password")],-1)),se={key:2,class:"function-box"},te={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},oe={class:"flex flex-col gap-[10px]"},ae=t(()=>e("label",{class:"w-[50%] text-[20px]"},"Your Password",-1)),le={class:"flex items-end justify-between"},ce=t(()=>e("img",{src:D},null,-1)),ne=["disabled"],ie=y({__name:"MyView",setup(l){const c=P(),{addToast:n}=k(),o=r("My Information"),_=r({userName:"",email:"",password:""}),f=r(""),m=r(!1);I(async()=>{try{(await b.checkLogin()).userSeq===1?c.push("/"):(n({message:"로그인이 필요합니다."}),c.push("/login"))}catch(s){n({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(s)}try{const s=await b.getInformation();s&&(_.value=s)}catch(s){n({message:"사용자 정보를 가져올 수 없습니다. 다시 시도해주세요."}),console.error(s),c.back()}});const h=s=>{o.value=s},g=async()=>{if(!m.value)try{const s={password:f.value};await b.deleteAccount(s),c.push("/")}catch(s){n({message:"탈퇴에 실패했습니다. 다시 시도해주세요."}),console.error(s),m.value=!1}};return(s,a)=>(d(),p("div",j,[e("h1",S,w(o.value),1),e("section",R,[e("article",$,[e("button",{onClick:a[0]||(a[0]=i=>h("My Information")),class:v(["btn-menu",{active:o.value==="My Information"}])}," 내 정보 ",2),e("button",{onClick:a[1]||(a[1]=i=>h("Reset Password")),class:v(["btn-menu",{active:o.value==="Reset Password"}])}," 비밀번호 수정 ",2),e("button",{onClick:a[2]||(a[2]=i=>h("Delete Account")),class:v(["btn-menu",{active:o.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),o.value==="My Information"?(d(),p("article",B,[e("div",q,[E,e("div",L,[T,e("p",z,w(_.value.userName),1)]),e("div",U,[Y,e("p",F,w(_.value.email),1)])])])):o.value==="Reset Password"?(d(),p("article",G,[e("div",H,[e("div",J,[e("div",K,[O,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})]),e("div",Q,[W,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})]),e("div",X,[Z,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})])]),ee])])):o.value==="Delete Account"?(d(),p("article",se,[e("div",te,[e("div",oe,[ae,x(u,{type:"password",modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=i=>f.value=i),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),e("div",le,[ce,e("button",{class:"btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none",onClick:g,disabled:m.value}," Delete Account ",8,ne)])])])):C("",!0)])]))}}),xe=V(ie,[["__scopeId","data-v-cbe9c481"]]);export{xe as default};