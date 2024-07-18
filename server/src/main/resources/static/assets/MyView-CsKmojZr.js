import{a as w}from"./auth-CNAqI4To.js";import{e as y,u as k,f as r,h as I,o as d,c as p,a as s,t as v,q as b,b as x,l as C,i as P,p as M,j as N,_ as V}from"./index-CCkaNh0Q.js";import{_ as u}from"./CommonInput.vue_vue_type_script_setup_true_lang-Cn9mfXc_.js";const A="/images/sample-image.svg",D="/images/delete-account.svg",t=l=>(M("data-v-aad29ad5"),l=l(),N(),l),j={class:"my-body"},S={class:"text-3xl-bold mb-[20px]"},R={class:"grid grid-cols-4"},$={class:"flex flex-col gap-[10px] pt-[20px]"},B={key:0,class:"function-box"},q={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},E=t(()=>s("img",{src:A,alt:"sample-image",class:"w-[180px] h-[180px] rounded-[10px] border object-cover"},null,-1)),L={class:"flex border-b-[1.5px] border-black"},T=t(()=>s("label",{class:"w-[30%] text-[26px]"},"Name",-1)),z={class:"w-[70%]] text-[26px] font-light"},U={class:"flex border-b-[1.5px] border-black"},Y=t(()=>s("label",{class:"w-[30%] text-[26px]"},"Email",-1)),F={class:"w-[70%]] text-[26px] font-light"},G={key:1,class:"function-box"},H={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},J={class:"flex flex-col gap-[30px]"},K={class:"flex flex-col gap-[10px]"},O=t(()=>s("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),Q={class:"flex flex-col gap-[10px]"},W=t(()=>s("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),X={class:"flex flex-col gap-[10px]"},Z=t(()=>s("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),ss=t(()=>s("div",{class:"flex justify-end"},[s("button",{class:"btn-primary p-[10px]"},"Reset Password")],-1)),es={key:2,class:"function-box"},ts={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},os={class:"flex flex-col gap-[10px]"},as=t(()=>s("label",{class:"w-[50%] text-[20px]"},"Your Password",-1)),ls={class:"flex items-end justify-between"},cs=t(()=>s("img",{src:D},null,-1)),ns=["disabled"],is=y({__name:"MyView",setup(l){const c=P(),{addToast:n}=k(),o=r("My Information"),_=r({userName:"",email:"",password:""}),f=r(""),m=r(!1);I(async()=>{try{(await w.checkLogin()).userSeq===1?c.push("/"):(n({message:"로그인이 필요합니다."}),c.push("/login"))}catch(e){n({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(e)}try{const e=await w.getInformation();e&&(_.value=e)}catch(e){n({message:"사용자 정보를 가져올 수 없습니다. 다시 시도해주세요."}),console.error(e),c.back()}});const h=e=>{o.value=e},g=async()=>{if(!m.value)try{const e={password:f.value};await w.deleteAccount(e),c.push("/")}catch(e){n({message:"탈퇴에 실패했습니다. 다시 시도해주세요."}),console.error(e),m.value=!1}};return(e,a)=>(d(),p("div",j,[s("h1",S,v(o.value),1),s("section",R,[s("article",$,[s("button",{onClick:a[0]||(a[0]=i=>h("My Information")),class:b(["btn-menu",{active:o.value==="My Information"}])}," 내 정보 ",2),s("button",{onClick:a[1]||(a[1]=i=>h("Reset Password")),class:b(["btn-menu",{active:o.value==="Reset Password"}])}," 비밀번호 수정 ",2),s("button",{onClick:a[2]||(a[2]=i=>h("Delete Account")),class:b(["btn-menu",{active:o.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),o.value==="My Information"?(d(),p("article",B,[s("div",q,[E,s("div",L,[T,s("p",z,v(_.value.userName),1)]),s("div",U,[Y,s("p",F,v(_.value.email),1)])])])):o.value==="Reset Password"?(d(),p("article",G,[s("div",H,[s("div",J,[s("div",K,[O,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})]),s("div",Q,[W,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})]),s("div",X,[Z,x(u,{type:"password",class:"w-[50%] text-[20px] font-light"})])]),ss])])):o.value==="Delete Account"?(d(),p("article",es,[s("div",ts,[s("div",os,[as,x(u,{type:"password",modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=i=>f.value=i),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",ls,[cs,s("button",{class:"btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none",onClick:g,disabled:m.value}," Delete Account ",8,ns)])])])):C("",!0)])]))}}),xs=V(is,[["__scopeId","data-v-aad29ad5"]]);export{xs as default};