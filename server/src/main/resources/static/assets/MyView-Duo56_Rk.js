import{_ as l}from"./CommonInput.vue_vue_type_script_setup_true_lang-BXVkohp9.js";import{e as m,f as u,i as w,o as c,c as n,a as s,t as x,n as _,b as i,j as b,p as h,g as v,_ as g}from"./index-Bx0-7JIO.js";const y="/images/sample-image.svg",k={name:"John Doe",email:"test@gmail.com",password:"password"},e=a=>(h("data-v-50d7ec69"),a=a(),v(),a),I={class:"my-body"},C={class:"text-[28px] font-bold mb-[20px]"},M={class:"grid grid-cols-4"},P={class:"flex flex-col gap-[10px] pt-[20px]"},j={key:0,class:"function-box"},D={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},N=e(()=>s("img",{src:y,alt:"sample-image",class:"w-[180px] h-[180px] rounded-[10px] border object-cover"},null,-1)),V={class:"flex border-b-[1.5px] border-black"},A=e(()=>s("label",{class:"w-[30%] text-[26px]"},"Name",-1)),R={class:"w-[70%]] text-[26px] font-light"},S={class:"flex border-b-[1.5px] border-black"},$=e(()=>s("label",{class:"w-[30%] text-[26px]"},"Email",-1)),B={class:"w-[70%]] text-[26px] font-light"},E={key:1,class:"function-box"},z={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},J={class:"flex flex-col gap-[30px]"},q={class:"flex flex-col gap-[10px]"},F=e(()=>s("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),G={class:"flex flex-col gap-[10px]"},H=e(()=>s("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),K={class:"flex flex-col gap-[10px]"},L=e(()=>s("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),O=e(()=>s("div",{class:"flex justify-end"},[s("button",{class:"btn-primary p-[10px]"},"Reset Password")],-1)),Q={key:2,class:"function-box"},T={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},U={class:"flex flex-col gap-[10px]"},W=e(()=>s("label",{class:"w-[50%] text-[20px]"},"Password",-1)),X=e(()=>s("div",{class:"flex justify-end"},[s("button",{class:"btn-primary p-[10px]"},"Delete Account")],-1)),Y=m({__name:"MyView",setup(a){const t=u("My Information"),p=u({name:"",email:"",password:""});w(()=>{p.value=k});const d=r=>{t.value=r};return(r,o)=>(c(),n("div",I,[s("h1",C,x(t.value),1),s("section",M,[s("article",P,[s("button",{onClick:o[0]||(o[0]=f=>d("My Information")),class:_(["btn-menu",{active:t.value==="My Information"}])}," 내 정보 ",2),s("button",{onClick:o[1]||(o[1]=f=>d("Reset Password")),class:_(["btn-menu",{active:t.value==="Reset Password"}])}," 비밀번호 수정 ",2),s("button",{onClick:o[2]||(o[2]=f=>d("Delete Account")),class:_(["btn-menu",{active:t.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),t.value==="My Information"?(c(),n("article",j,[s("div",D,[N,s("div",V,[A,s("p",R,x(p.value.name),1)]),s("div",S,[$,s("p",B,x(p.value.email),1)])])])):t.value==="Reset Password"?(c(),n("article",E,[s("div",z,[s("div",J,[s("div",q,[F,i(l,{type:"password",class:"w-[50%] text-[20px] font-light"})]),s("div",G,[H,i(l,{type:"password",class:"w-[50%] text-[20px] font-light"})]),s("div",K,[L,i(l,{type:"password",class:"w-[50%] text-[20px] font-light"})])]),O])])):t.value==="Delete Account"?(c(),n("article",Q,[s("div",T,[s("div",U,[W,i(l,{type:"password",class:"w-[50%] text-[20px] font-light"})]),X])])):b("",!0)])]))}}),es=g(Y,[["__scopeId","data-v-50d7ec69"]]);export{es as default};