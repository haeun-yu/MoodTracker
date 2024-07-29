import{d as x,u as b,r as _,l as V,m as L,a as m,c as y,e,f as n,w as f,n as E,g as k,h as A,i as v,p as I,j as S,_ as j}from"./index-N3CHFhWn.js";import{_ as g}from"./CommonInput.vue_vue_type_script_setup_true_lang-CaBh5-wZ.js";const B="/images/login.svg",i=o=>(I("data-v-b97b9695"),o=o(),S(),o),C={class:"login-body"},R=i(()=>e("section",{class:"w-[40%] h-[calc(70vh)]"},[e("img",{src:B,alt:"sample-image",class:"w-full h-full object-cover rounded-l-[40px]"})],-1)),T={class:"w-[60%] flex flex-col items-center justify-center gap-[50px]"},z=i(()=>e("h1",{class:"text-5xl-bold"},"Login",-1)),M={class:"w-[50%] flex flex-col gap-[15px]"},N={class:"flex items-center"},P=i(()=>e("label",null,"Email",-1)),Z={class:"flex items-center"},F=i(()=>e("label",null,"Password",-1)),U=["disabled"],$={class:"w-full flex justify-end"},O=x({__name:"LoginView",setup(o){const r=E(),{addToast:t}=b(),s=_({email:"",password:""}),a=_(!1),d=V(()=>!s.value.email||!s.value.password),h=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;L(async()=>{await m.checkLogin()&&(t({message:"로그인이 되어있습니다."}),r.push("/"))});const w=async()=>{if(a.value)return;if(a.value=!0,d.value){t({message:"모든 항목을 입력해주세요."}),a.value=!1;return}if(!h.test(s.value.email)){t({message:"이메일을 올바르게 입력해주세요."}),a.value=!1;return}await m.login(s.value)?r.push("/"):t({message:"로그인에 실패했습니다. 다시 시도해주세요."}),a.value=!1};return(u,l)=>{const p=k("RouterLink");return A(),y("div",C,[R,e("section",T,[z,e("article",M,[e("div",N,[P,n(g,{modelValue:s.value.email,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value.email=c),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",Z,[F,n(g,{modelValue:s.value.password,"onUpdate:modelValue":l[1]||(l[1]=c=>s.value.password=c),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("button",{class:"btn-primary p-[10px]",onClick:w,disabled:a.value||d.value}," Login ",8,U),n(p,{to:"/sign-up",class:"btn-secondary p-[10px]"},{default:f(()=>[v("Sign up")]),_:1}),e("div",$,[n(p,{to:"/reset-password",class:"btn-line"},{default:f(()=>[v("Forget password")]),_:1})])])])])}}}),G=j(O,[["__scopeId","data-v-b97b9695"]]);export{G as default};
