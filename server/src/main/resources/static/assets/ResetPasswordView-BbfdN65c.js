import{a as x}from"./auth-CNAqI4To.js";import{e as h}from"./email-BHbQgSoV.js";import{d as E,u as S,r,k as I,l as A,n as R,c as g,b as s,e as p,q as B,t as N,m as M,g as V,p as U,i as z,_ as L}from"./index-qfDLPPBa.js";import{_ as m}from"./CommonInput.vue_vue_type_script_setup_true_lang-Dz3tzF8U.js";const f=n=>(U("data-v-f7ce05d7"),n=n(),z(),n),T={class:"reset-password-body"},Z={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},D=f(()=>s("h1",{class:"text-3xl-bold"},"Reset Password",-1)),$={class:"w-full flex flex-col gap-[15px]"},j={class:"flex flex-col gap-[10px]"},q=f(()=>s("label",null,"Email",-1)),F={class:"flex items-center gap-[10px]"},O=["disabled"],G={key:0,class:"flex items-center gap-[10px]"},H=["disabled"],J={class:"flex flex-col gap-[10px]"},K=f(()=>s("label",null,"Password",-1)),Q={class:"flex flex-col gap-[10px]"},W=f(()=>s("label",null,"Confirm Password",-1)),X={class:"text-[14px] text-[#8E46BD]"},Y={class:"flex justify-end"},ee=["disabled"],se=E({__name:"ResetPasswordView",setup(n){const w=M(),{addToast:o}=S(),a=r({userName:"",email:"",password:""}),d=r(""),_=r(""),i=r(""),c=r(!1),u=r(!1),v=r(!1),b=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,y=I(()=>!a.value.password||!d.value);A(async()=>{(await x.checkLogin()).loggedIn&&(o({message:"로그인이 되어있습니다."}),w.push("/"))}),R(()=>d.value,e=>{e!==a.value.password&&(_.value="비밀번호가 일치하지 않습니다.")});const C=async()=>{if(!b.test(a.value.email)||!a.value.email){o({message:"이메일을 올바르게 입력해주세요."});return}c.value=!0;try{const e={mail:a.value.email};await h.sendVerificationEmail(e)&&o({message:"인증 코드가 발송되었습니다. 메일을 확인해주세요."})}catch(e){o({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(e),c.value=!1}},P=async()=>{if(!i.value){o({message:"인증 코드를 입력해주세요."});return}u.value=!0;try{const e={userNumber:i.value};await h.checkVerificationCode(e)&&o({message:"인증이 완료되었습니다."})}catch(e){o({message:"올바른 인증 번호를 입력해주세요."}),console.error(e),u.value=!1}},k=async()=>{if(!u.value){o({message:"이메일 인증을 진행해주세요."});return}if(y.value){o({message:"비밀번호를 입력해주세요."});return}if(a.value.password!==d.value){_.value="비밀번호가 일치하지 않습니다.";return}v.value=!0;try{const e={currentPassword:a.value.password,newPassword:d.value};await x.resetPassword(e),w.push("/login")}catch(e){o({message:"비밀번호 변경에 실패했습니다. 다시 시도해주세요."}),console.error(e),v.value=!1}};return(e,t)=>(V(),g("div",T,[s("section",Z,[D,s("article",$,[s("div",j,[q,s("div",F,[p(m,{modelValue:a.value.email,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.email=l),placeholder:"Enter Email"},null,8,["modelValue"]),s("button",{class:"btn-primary p-[10px] text-sm",disabled:c.value,onClick:C}," Send ",8,O)]),c.value?(V(),g("div",G,[p(m,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),placeholder:"Enter Verification Code"},null,8,["modelValue"]),s("button",{class:"btn-primary p-[10px] text-sm",disabled:u.value,onClick:P}," Confirm ",8,H)])):B("",!0)]),s("div",J,[K,p(m,{modelValue:a.value.password,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.password=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),s("div",Q,[W,p(m,{modelValue:a.value.password,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.password=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),s("p",X,N(_.value),1)]),s("div",Y,[s("button",{class:"btn-primary p-[10px]",onClick:k,disabled:v.value}," Submit ",8,ee)])])])]))}}),re=L(se,[["__scopeId","data-v-f7ce05d7"]]);export{re as default};
