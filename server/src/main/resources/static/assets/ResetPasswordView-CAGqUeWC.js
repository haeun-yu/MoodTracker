import{a as E}from"./auth-CNAqI4To.js";import{e as x}from"./email-Ctx0UkLy.js";import{e as k,u as S,f as r,g as A,k as I,o as w,c as h,a as e,b as p,l as R,t as N,i as B,p as U,j as z,_ as M}from"./index-CCkaNh0Q.js";import{_ as m}from"./CommonInput.vue_vue_type_script_setup_true_lang-Cn9mfXc_.js";const f=d=>(U("data-v-02ba0969"),d=d(),z(),d),T={class:"reset-password-body"},Z={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},j=f(()=>e("h1",{class:"text-3xl-bold"},"Reset Password",-1)),D={class:"w-full flex flex-col gap-[15px]"},L={class:"flex flex-col gap-[10px]"},$=f(()=>e("label",null,"Email",-1)),F={class:"flex items-center gap-[10px]"},O=["disabled"],q={key:0,class:"flex items-center gap-[10px]"},G=["disabled"],H={class:"flex flex-col gap-[10px]"},J=f(()=>e("label",null,"Password",-1)),K={class:"flex flex-col gap-[10px]"},Q=f(()=>e("label",null,"Confirm Password",-1)),W={class:"text-[14px] text-[#8E46BD]"},X={class:"flex justify-end"},Y=["disabled"],ee=k({__name:"ResetPasswordView",setup(d){const b=B(),{addToast:t}=S(),a=r({userName:"",email:"",password:""}),n=r(""),_=r(""),i=r(""),c=r(!1),u=r(!1),v=r(!1),V=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,g=A(()=>!a.value.password||!n.value);I(()=>n.value,s=>{s!==a.value.password&&(_.value="비밀번호가 일치하지 않습니다.")});const y=async()=>{if(!V.test(a.value.email)||!a.value.email){t({message:"이메일을 올바르게 입력해주세요."});return}c.value=!0;try{const s={mail:a.value.email};await x.sendVerificationEmail(s)&&t({message:"인증 코드가 발송되었습니다. 메일을 확인해주세요."})}catch(s){t({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(s),c.value=!1}},C=async()=>{if(!i.value){t({message:"인증 코드를 입력해주세요."});return}u.value=!0;try{const s={userNumber:i.value};await x.checkVerificationCode(s)&&t({message:"인증이 완료되었습니다."})}catch(s){t({message:"올바른 인증 번호를 입력해주세요."}),console.error(s),u.value=!1}},P=async()=>{if(!u.value){t({message:"이메일 인증을 진행해주세요."});return}if(g.value){t({message:"비밀번호를 입력해주세요."});return}if(a.value.password!==n.value){_.value="비밀번호가 일치하지 않습니다.";return}v.value=!0;try{const s={currentPassword:a.value.password,newPassword:n.value};await E.resetPassword(s),b.push("/login")}catch(s){t({message:"비밀번호 변경에 실패했습니다. 다시 시도해주세요."}),console.error(s),v.value=!1}};return(s,o)=>(w(),h("div",T,[e("section",Z,[j,e("article",D,[e("div",L,[$,e("div",F,[p(m,{modelValue:a.value.email,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.email=l),placeholder:"Enter Email"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:c.value,onClick:y}," Send ",8,O)]),c.value?(w(),h("div",q,[p(m,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=l=>i.value=l),placeholder:"Enter Verification Code"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:u.value,onClick:C}," Confirm ",8,G)])):R("",!0)]),e("div",H,[J,p(m,{modelValue:a.value.password,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.password=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",K,[Q,p(m,{modelValue:a.value.password,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.password=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",W,N(_.value),1)]),e("div",X,[e("button",{class:"btn-primary p-[10px]",onClick:P,disabled:v.value}," Submit ",8,Y)])])])]))}}),le=M(ee,[["__scopeId","data-v-02ba0969"]]);export{le as default};
