import{_ as n}from"./CommonInput.vue_vue_type_script_setup_true_lang-BXVkohp9.js";import{e as m,f as i,h as _,o as f,c as x,a as e,b as d,t as v,p as w,g,_ as h}from"./index-Bx0-7JIO.js";const o=t=>(w("data-v-56a848b8"),t=t(),g(),t),V={class:"signup-body"},b={class:"w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]"},E=o(()=>e("h1",{class:"text-[34px] font-bold"},"Sign Up",-1)),S={class:"w-full flex flex-col gap-[15px]"},U={class:"flex flex-col gap-[10px]"},y=o(()=>e("label",null,"Name",-1)),P={class:"flex flex-col gap-[10px]"},B=o(()=>e("label",null,"Email",-1)),I={class:"flex flex-col gap-[10px]"},k=o(()=>e("label",null,"Password",-1)),C={class:"flex flex-col gap-[10px]"},N=o(()=>e("label",null,"Confirm Password",-1)),D={class:"text-[14px] text-[#8E46BD]"},M=m({__name:"SignUpView",setup(t){const l=i({name:"",email:"",password:""}),c=i(""),p=i("");_(()=>c.value,r=>{r!==l.value.password&&(p.value="비밀번호가 일치하지 않습니다.")});const u=()=>{if(l.value.password!==c.value){p.value="비밀번호가 일치하지 않습니다.";return}console.log(l.value)};return(r,s)=>(f(),x("div",V,[e("section",b,[E,e("article",S,[e("div",U,[y,d(n,{modelValue:l.value.name,"onUpdate:modelValue":s[0]||(s[0]=a=>l.value.name=a),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",P,[B,d(n,{modelValue:l.value.email,"onUpdate:modelValue":s[1]||(s[1]=a=>l.value.email=a),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",I,[k,d(n,{modelValue:l.value.password,"onUpdate:modelValue":s[2]||(s[2]=a=>l.value.password=a),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("div",C,[N,d(n,{modelValue:l.value.password,"onUpdate:modelValue":s[3]||(s[3]=a=>l.value.password=a),type:"password",placeholder:"Enter Password"},null,8,["modelValue"]),e("p",D,v(p.value),1)]),e("button",{class:"btn-primary p-[10px]",onClick:u},"Sign up")])])]))}}),q=h(M,[["__scopeId","data-v-56a848b8"]]);export{q as default};
