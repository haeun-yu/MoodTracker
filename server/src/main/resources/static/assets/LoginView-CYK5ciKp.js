import{_ as i}from"./CommonInput.vue_vue_type_script_setup_true_lang-BXVkohp9.js";import{e as _,f as u,r as m,o as f,c as x,a as e,b as t,w as d,d as r,p as g,g as h,_ as w}from"./index-Bx0-7JIO.js";const v="/images/login.svg",a=o=>(g("data-v-41a9802a"),o=o(),h(),o),V={class:"login-body"},b=a(()=>e("section",{class:"w-[40%] h-[calc(70vh)]"},[e("img",{src:v,alt:"sample-image",class:"w-full h-full object-cover rounded-l-[40px]"})],-1)),L={class:"w-[60%] flex flex-col items-center justify-center gap-[50px]"},k=a(()=>e("h1",{class:"text-[34px] font-bold"},"Login",-1)),y={class:"w-[50%] flex flex-col gap-[15px]"},E={class:"flex items-center"},C=a(()=>e("label",null,"Email",-1)),I={class:"flex items-center"},S=a(()=>e("label",null,"Password",-1)),j={class:"w-full flex justify-end"},B=_({__name:"LoginView",setup(o){const s=u({email:"",password:""}),p=()=>{console.log(s.value)};return(N,l)=>{const c=m("RouterLink");return f(),x("div",V,[b,e("section",L,[k,e("article",y,[e("div",E,[C,t(i,{modelValue:s.value.email,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value.email=n),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",I,[S,t(i,{modelValue:s.value.password,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value.password=n),placeholder:"Enter Password"},null,8,["modelValue"])]),e("button",{class:"btn-primary p-[10px]",onClick:p},"Login"),t(c,{to:"/sign-up",class:"btn-secondary p-[10px]"},{default:d(()=>[r("Sign up")]),_:1}),e("div",j,[t(c,{to:"/reset-password",class:"btn-line"},{default:d(()=>[r("Forget password")]),_:1})])])])])}}}),U=w(B,[["__scopeId","data-v-41a9802a"]]);export{U as default};