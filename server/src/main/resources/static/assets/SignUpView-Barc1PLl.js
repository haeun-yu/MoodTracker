import{a as g}from"./auth-CNAqI4To.js";import{e as V}from"./email-Ctx0UkLy.js";import{e as k,u as U,f as n,g as N,h as A,k as I,o as w,c as b,a as e,b as d,l as P,t as B,i as M,p as z,j as L,_ as T}from"./index-CCkaNh0Q.js";import{_ as u}from"./CommonInput.vue_vue_type_script_setup_true_lang-Cn9mfXc_.js";const c=p=>(z("data-v-3daea302"),p=p(),L(),p),Z={class:"signup-body"},j={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},D=c(()=>e("h1",{class:"text-3xl-bold"},"Sign Up",-1)),R={class:"w-full flex flex-col gap-[15px]"},$={class:"flex flex-col gap-[10px]"},F=c(()=>e("label",null,"Name",-1)),O={class:"flex flex-col gap-[10px]"},q=c(()=>e("label",null,"Email",-1)),G={class:"flex items-center gap-[10px]"},H=["disabled"],J={key:0,class:"flex items-center gap-[10px]"},K=["disabled"],Q={class:"flex flex-col gap-[10px]"},W=c(()=>e("label",null,"Password",-1)),X={class:"flex flex-col gap-[10px]"},Y=c(()=>e("label",null,"Confirm Password",-1)),ee={class:"text-[14px] text-[#8E46BD]"},se={class:"flex justify-end"},ae=["disabled"],le=k({__name:"SignUpView",setup(p){const x=M(),{addToast:o}=U(),s=n({userName:"",email:"",password:""}),r=n(""),m=n(""),f=n(""),i=n(!1),v=n(!1),_=n(!1),h=N(()=>!s.value.userName||!s.value.email||!s.value.password||!r.value),y=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;A(async()=>{try{await g.checkLogin()&&x.push("/")}catch(a){o({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(a),i.value=!1}}),I(()=>r.value,a=>{a!==s.value.password?m.value="비밀번호가 일치하지 않습니다.":m.value=""});const C=async()=>{if(!y.test(s.value.email)||!s.value.email){o({message:"이메일을 올바르게 입력해주세요."});return}v.value=!0;try{const a={mail:s.value.email};await V.sendVerificationEmail(a)&&o({message:"인증 코드가 발송되었습니다. 메일을 확인해주세요."})}catch(a){o({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(a),v.value=!1}},S=async()=>{if(!f.value){o({message:"인증 코드를 입력해주세요."});return}_.value=!0;try{const a={userNumber:f.value};await V.checkVerificationCode(a)&&o({message:"인증이 완료되었습니다."})}catch(a){o({message:"올바른 인증 번호를 입력해주세요."}),console.error(a),_.value=!1}},E=async()=>{if(!i.value){if(h.value){o({message:"모든 항목을 입력해주세요."});return}if(!_.value){o({message:"이메일 인증을 진행해주세요."});return}if(s.value.password!==r.value){m.value="비밀번호가 일치하지 않습니다.";return}i.value=!0;try{await g.signUp(s.value),x.push("/login")}catch(a){o({message:"회원가입에 실패했습니다. 다시 시도해주세요."}),console.error(a),i.value=!1}}};return(a,l)=>(w(),b("div",Z,[e("section",j,[D,e("article",R,[e("div",$,[F,d(u,{modelValue:s.value.userName,"onUpdate:modelValue":l[0]||(l[0]=t=>s.value.userName=t),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",O,[q,e("div",G,[d(u,{modelValue:s.value.email,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.email=t),placeholder:"Enter Email"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:v.value,onClick:C}," Send ",8,H)]),v.value?(w(),b("div",J,[d(u,{modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=t=>f.value=t),placeholder:"Enter Verification Code"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:_.value,onClick:S}," Confirm ",8,K)])):P("",!0)]),e("div",Q,[W,d(u,{modelValue:s.value.password,"onUpdate:modelValue":l[3]||(l[3]=t=>s.value.password=t),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",X,[Y,d(u,{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=t=>r.value=t),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",ee,B(m.value),1)]),e("div",se,[e("button",{class:"btn-primary p-[10px]",onClick:E,disabled:i.value||h.value}," Submit ",8,ae)])])])]))}}),ie=T(le,[["__scopeId","data-v-3daea302"]]);export{ie as default};
