import{a as _}from"./auth-wfKwW2uC.js";import{d as x,u as b,r as m,k as V,l as L,c as y,b as e,e as n,w as f,m as k,f as E,g as A,h as v,p as I,i as S,_ as B}from"./index-DD4kE7Gc.js";import{_ as g}from"./CommonInput.vue_vue_type_script_setup_true_lang-CJwuk6Nh.js";const C="/images/login.svg",i=a=>(I("data-v-b97b9695"),a=a(),S(),a),R={class:"login-body"},T=i(()=>e("section",{class:"w-[40%] h-[calc(70vh)]"},[e("img",{src:C,alt:"sample-image",class:"w-full h-full object-cover rounded-l-[40px]"})],-1)),j={class:"w-[60%] flex flex-col items-center justify-center gap-[50px]"},z=i(()=>e("h1",{class:"text-5xl-bold"},"Login",-1)),M={class:"w-[50%] flex flex-col gap-[15px]"},N={class:"flex items-center"},P=i(()=>e("label",null,"Email",-1)),Z={class:"flex items-center"},F=i(()=>e("label",null,"Password",-1)),U=["disabled"],$={class:"w-full flex justify-end"},O=x({__name:"LoginView",setup(a){const r=k(),{addToast:t}=b(),s=m({email:"",password:""}),o=m(!1),d=V(()=>!s.value.email||!s.value.password),h=/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;L(async()=>{await _.checkLogin()&&(t({message:"로그인이 되어있습니다."}),r.push("/"))});const w=async()=>{if(o.value)return;if(o.value=!0,d.value){t({message:"모든 항목을 입력해주세요."}),o.value=!1;return}if(!h.test(s.value.email)){t({message:"이메일을 올바르게 입력해주세요."}),o.value=!1;return}await _.login(s.value)?r.push("/"):t({message:"로그인에 실패했습니다. 다시 시도해주세요."}),o.value=!1};return(u,l)=>{const p=E("RouterLink");return A(),y("div",R,[T,e("section",j,[z,e("article",M,[e("div",N,[P,n(g,{modelValue:s.value.email,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value.email=c),placeholder:"Enter Email"},null,8,["modelValue"])]),e("div",Z,[F,n(g,{modelValue:s.value.password,"onUpdate:modelValue":l[1]||(l[1]=c=>s.value.password=c),type:"password",placeholder:"Enter Password"},null,8,["modelValue"])]),e("button",{class:"btn-primary p-[10px]",onClick:w,disabled:o.value||d.value}," Login ",8,U),n(p,{to:"/sign-up",class:"btn-secondary p-[10px]"},{default:f(()=>[v("Sign up")]),_:1}),e("div",$,[n(p,{to:"/reset-password",class:"btn-line"},{default:f(()=>[v("Forget password")]),_:1})])])])])}}}),H=B(O,[["__scopeId","data-v-b97b9695"]]);export{H as default};