import{_ as p}from"./CommonInput.vue_vue_type_script_setup_true_lang-BXVkohp9.js";import{e as _,f as r,h as m,o as f,c as w,a as e,b as n,t as x,p as v,g as h,_ as V}from"./index-Bx0-7JIO.js";const t=l=>(v("data-v-05923a68"),l=l(),h(),l),P={class:"reset-password-body"},b={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},g=t(()=>e("h1",{class:"text-[34px] font-bold"},"Reset Password",-1)),E={class:"w-full flex flex-col gap-[15px]"},y={class:"flex flex-col gap-[10px]"},R=t(()=>e("label",null,"Email",-1)),B={class:"flex flex-col gap-[10px]"},I=t(()=>e("label",null,"Password",-1)),S={class:"flex flex-col gap-[10px]"},k=t(()=>e("label",null,"Confirm Password",-1)),C={class:"text-[14px] text-[#8E46BD]"},U=_({__name:"ResetPasswordView",setup(l){const s=r({name:"",email:"",password:""}),c=r(""),d=r("");m(()=>c.value,i=>{i!==s.value.password&&(d.value="비밀번호가 일치하지 않습니다.")});const u=()=>{if(s.value.password!==c.value){d.value="비밀번호가 일치하지 않습니다.";return}console.log(s.value)};return(i,o)=>(f(),w("div",P,[e("section",b,[g,e("article",E,[e("div",y,[R,n(p,{modelValue:s.value.email,"onUpdate:modelValue":o[0]||(o[0]=a=>s.value.email=a),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",B,[I,n(p,{modelValue:s.value.password,"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.password=a),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",S,[k,n(p,{modelValue:s.value.password,"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.password=a),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",C,x(d.value),1)]),e("button",{class:"btn-primary p-[10px]",onClick:u},"Reset Passwords")])])]))}}),M=V(U,[["__scopeId","data-v-05923a68"]]);export{M as default};