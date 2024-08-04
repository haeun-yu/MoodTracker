import{d as k,u as S,r as n,l as A,m as I,a as w,q as R,c as h,e,f as p,s as B,t as M,n as N,h as g,p as U,j as z,_ as L}from"./index-BL_WZjeS.js";import{e as V}from"./email-BuAG8BuB.js";import{_ as m}from"./CommonInput.vue_vue_type_script_setup_true_lang-DcccmccE.js";const f=d=>(U("data-v-1c4ae539"),d=d(),z(),d),T={class:"reset-password-body"},Z={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},j=f(()=>e("h1",{class:"text-3xl-bold"},"Reset Password",-1)),D={class:"w-full flex flex-col gap-[15px]"},$={class:"flex flex-col gap-[10px]"},q=f(()=>e("label",null,"Email",-1)),F={class:"flex items-center gap-[10px]"},O=["disabled"],G={key:0,class:"flex items-center gap-[10px]"},H=["disabled"],J={class:"flex flex-col gap-[10px]"},K=f(()=>e("label",null,"Password",-1)),Q={class:"flex flex-col gap-[10px]"},W=f(()=>e("label",null,"Confirm Password",-1)),X={class:"text-[14px] text-[#8E46BD]"},Y={class:"flex justify-end"},ee=["disabled"],se=k({__name:"ResetPasswordView",setup(d){const x=N(),{addToast:o}=S(),t=n({name:"",email:"",password:""}),r=n(""),_=n(""),i=n(""),c=n(!1),u=n(!1),v=n(!1),b=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,y=A(()=>!t.value.password||!r.value);I(async()=>{await w.checkLogin()&&(o({message:"로그인이 되어있습니다."}),x.push("/"))}),R(()=>r.value,s=>{s!==t.value.password&&(_.value="비밀번호가 일치하지 않습니다.")});const C=async()=>{if(!b.test(t.value.email)||!t.value.email){o({message:"이메일을 올바르게 입력해주세요."});return}c.value=!0;try{const s={mail:t.value.email};await V.sendVerificationEmail(s)&&o({message:"인증 코드가 발송되었습니다. 메일을 확인해주세요."})}catch(s){o({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(s),c.value=!1}},P=async()=>{if(!i.value){o({message:"인증 코드를 입력해주세요."});return}u.value=!0;try{const s={userNumber:i.value};await V.checkVerificationCode(s)&&o({message:"인증이 완료되었습니다."})}catch(s){o({message:"올바른 인증 번호를 입력해주세요."}),console.error(s),u.value=!1}},E=async()=>{if(!u.value){o({message:"이메일 인증을 진행해주세요."});return}if(y.value){o({message:"비밀번호를 입력해주세요."});return}if(t.value.password!==r.value){_.value="비밀번호가 일치하지 않습니다.";return}v.value=!0;const s={currentPassword:t.value.password,newPassword:r.value},a=await w.resetPassword(s);a===""?(o({message:"비밀번호가 변경되었습니다."}),x.push("/login")):o({message:a}),v.value=!1};return(s,a)=>(g(),h("div",T,[e("section",Z,[j,e("article",D,[e("div",$,[q,e("div",F,[p(m,{modelValue:t.value.email,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value.email=l),placeholder:"Enter Email"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:c.value,onClick:C}," Send ",8,O)]),c.value?(g(),h("div",G,[p(m,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),placeholder:"Enter Verification Code"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:u.value,onClick:P}," Confirm ",8,H)])):B("",!0)]),e("div",J,[K,p(m,{modelValue:t.value.password,"onUpdate:modelValue":a[2]||(a[2]=l=>t.value.password=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",Q,[W,p(m,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=l=>r.value=l),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",X,M(_.value),1)]),e("div",Y,[e("button",{class:"btn-primary p-[10px]",onClick:E,disabled:v.value}," Submit ",8,ee)])])])]))}}),le=L(se,[["__scopeId","data-v-1c4ae539"]]);export{le as default};