import{d as k,u as N,r as n,l as U,m as A,a as g,q as I,c as V,e,f as d,s as P,t as B,n as M,h as b,p as z,j as L,_ as T}from"./index-BL_WZjeS.js";import{e as w}from"./email-BuAG8BuB.js";import{_ as r}from"./CommonInput.vue_vue_type_script_setup_true_lang-DcccmccE.js";const u=c=>(z("data-v-7782db88"),c=c(),L(),c),Z={class:"signup-body"},j={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},D=u(()=>e("h1",{class:"text-3xl-bold"},"Sign Up",-1)),R={class:"w-full flex flex-col gap-[15px]"},$={class:"flex flex-col gap-[10px]"},q=u(()=>e("label",null,"Name",-1)),F={class:"flex flex-col gap-[10px]"},O=u(()=>e("label",null,"Email",-1)),G={class:"flex items-center gap-[10px]"},H=["disabled"],J={key:0,class:"flex items-center gap-[10px]"},K=["disabled"],Q={class:"flex flex-col gap-[10px]"},W=u(()=>e("label",null,"Password",-1)),X={class:"flex flex-col gap-[10px]"},Y=u(()=>e("label",null,"Confirm Password",-1)),ee={class:"text-[14px] text-[#8E46BD]"},se={class:"flex justify-end"},ae=["disabled"],le=k({__name:"SignUpView",setup(c){const x=M(),{addToast:o}=N(),s=n({userName:"",email:"",password:""}),i=n(""),p=n(""),m=n(""),_=n(!1),f=n(!1),v=n(!1),h=U(()=>!s.value.userName||!s.value.email||!s.value.password||!i.value),y=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;A(async()=>{await g.checkLogin()&&(o({message:"로그인이 되어있습니다."}),x.push("/"))}),I(()=>i.value,a=>{a!==s.value.password?p.value="비밀번호가 일치하지 않습니다.":p.value=""});const C=async()=>{if(!y.test(s.value.email)||!s.value.email){o({message:"이메일을 올바르게 입력해주세요."});return}f.value=!0;try{const a={mail:s.value.email};await w.sendVerificationEmail(a)&&o({message:"인증 코드가 발송되었습니다. 메일을 확인해주세요."})}catch(a){o({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(a),f.value=!1}},S=async()=>{if(!m.value){o({message:"인증 코드를 입력해주세요."});return}v.value=!0;try{const a={userNumber:m.value};await w.checkVerificationCode(a)&&o({message:"인증이 완료되었습니다."})}catch(a){o({message:"올바른 인증 번호를 입력해주세요."}),console.error(a),v.value=!1}},E=async()=>{if(_.value)return;if(h.value){o({message:"모든 항목을 입력해주세요."});return}if(!v.value){o({message:"이메일 인증을 진행해주세요."});return}if(s.value.password!==i.value){p.value="비밀번호가 일치하지 않습니다.";return}_.value=!0,await g.signUp(s.value)?(o({message:"회원가입이 완료되었습니다."}),x.push("/login")):o({message:"회원가입에 실패했습니다. 다시 시도해주세요."})};return(a,l)=>(b(),V("div",Z,[e("section",j,[D,e("article",R,[e("div",$,[q,d(r,{modelValue:s.value.userName,"onUpdate:modelValue":l[0]||(l[0]=t=>s.value.userName=t),placeholder:"Enter Name"},null,8,["modelValue"])]),e("div",F,[O,e("div",G,[d(r,{modelValue:s.value.email,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.email=t),placeholder:"Enter Email"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:f.value,onClick:C}," Send ",8,H)]),f.value?(b(),V("div",J,[d(r,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=t=>m.value=t),placeholder:"Enter Verification Code"},null,8,["modelValue"]),e("button",{class:"btn-primary p-[10px] text-sm",disabled:v.value,onClick:S}," Confirm ",8,K)])):P("",!0)]),e("div",Q,[W,d(r,{modelValue:s.value.password,"onUpdate:modelValue":l[3]||(l[3]=t=>s.value.password=t),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",X,[Y,d(r,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=t=>i.value=t),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",ee,B(p.value),1)]),e("div",se,[e("button",{class:"btn-primary p-[10px]",onClick:E,disabled:_.value||h.value}," Submit ",8,ae)])])])]))}}),ie=T(le,[["__scopeId","data-v-7782db88"]]);export{ie as default};
