import{a as _}from"./auth-C_aZBYfv.js";import{d as x,u as b,r as m,k as y,l as V,c as L,b as e,e as r,w as f,m as k,f as E,g as I,h as g,p as A,i as S,_ as B}from"./index-W-z7GMBR.js";import{_ as h}from"./CommonInput.vue_vue_type_script_setup_true_lang-w6U0Zi_F.js";const C="/images/login.svg",c=l=>(A("data-v-8a990c5e"),l=l(),S(),l),R={class:"login-body"},T=c(()=>e("section",{class:"w-[40%] h-[calc(70vh)]"},[e("img",{src:C,alt:"sample-image",class:"w-full h-full object-cover rounded-l-[40px]"})],-1)),j={class:"w-[60%] flex flex-col items-center justify-center gap-[50px]"},z=c(()=>e("h1",{class:"text-5xl-bold"},"Login",-1)),M={class:"w-[50%] flex flex-col gap-[15px]"},N={class:"flex items-center"},P=c(()=>e("label",null,"Email",-1)),Z={class:"flex items-center"},F=c(()=>e("label",null,"Password",-1)),U=["disabled"],$={class:"w-full flex justify-end"},O=x({__name:"LoginView",setup(l){const i=k(),{addToast:a}=b(),s=m({email:"",password:""}),o=m(!1),u=y(()=>!s.value.email||!s.value.password),v=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;V(async()=>{try{(await _.checkLogin()).loggedIn&&(a({message:"로그인이 되어있습니다."}),i.push("/"))}catch(t){a({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(t),i.push("/")}});const w=async()=>{if(!o.value){if(o.value=!0,u.value){a({message:"모든 항목을 입력해주세요."}),o.value=!1;return}if(!v.test(s.value.email)){a({message:"이메일을 올바르게 입력해주세요."}),o.value=!1;return}try{await _.login(s.value),i.push("/")}catch(t){a({message:"로그인에 실패했습니다. 다시 시도해주세요."}),console.error(t),o.value=!1}}};return(t,n)=>{const p=E("RouterLink");return I(),L("div",R,[T,e("section",j,[z,e("article",M,[e("div",N,[P,r(h,{modelValue:s.value.email,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value.email=d),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",Z,[F,r(h,{modelValue:s.value.password,"onUpdate:modelValue":n[1]||(n[1]=d=>s.value.password=d),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("button",{class:"btn-primary p-[10px]",onClick:w,disabled:o.value||u.value}," Login ",8,U),r(p,{to:"/sign-up",class:"btn-secondary p-[10px]"},{default:f(()=>[g("Sign up")]),_:1}),e("div",$,[r(p,{to:"/reset-password",class:"btn-line"},{default:f(()=>[g("Forget password")]),_:1})])])])])}}}),H=B(O,[["__scopeId","data-v-8a990c5e"]]);export{H as default};