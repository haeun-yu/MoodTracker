import{d as C,u as M,r as i,m as R,a as r,c as p,e as s,t as b,z as h,f as x,s as A,n as D,h as f,p as j,j as S,_ as L}from"./index-Dg0cBFKx.js";import{_ as m}from"./CommonInput.vue_vue_type_script_setup_true_lang-C1IgsU2h.js";const N="/images/delete-account.svg",c=u=>(j("data-v-f1bb6508"),u=u(),S(),u),B={class:"my-body"},U={class:"text-3xl-bold mb-[20px]"},E={class:"grid grid-cols-4"},$={class:"flex flex-col gap-[10px] pt-[20px]"},z={key:0,class:"function-box"},T={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},q=["src"],G={class:"flex border-b-[1.5px] border-black"},H=c(()=>s("label",{class:"w-[30%] text-[26px]"},"Name",-1)),K={class:"w-[70%]] text-[26px] font-light"},Y={class:"flex border-b-[1.5px] border-black"},F=c(()=>s("label",{class:"w-[30%] text-[26px]"},"Email",-1)),J={class:"w-[70%]] text-[26px] font-light"},O={key:1,class:"function-box"},Q={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},W={class:"flex flex-col gap-[30px]"},X={class:"flex flex-col gap-[10px]"},Z=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),ss={class:"flex flex-col gap-[10px]"},es=c(()=>s("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),os={class:"flex flex-col gap-[10px]"},ts=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),as={key:2,class:"function-box"},ls={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},ns={class:"flex flex-col gap-[10px]"},cs=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Your Password",-1)),ds={class:"flex items-end justify-between"},is=c(()=>s("img",{src:N},null,-1)),rs=["disabled"],us=C({__name:"MyView",setup(u){const d=D(),{addToast:t}=M(),l=i("My Information"),w=i({name:"",email:"",password:"",userSeq:0}),_=i(""),o=i({currentPassword:"",newPassword:"",confirmPassword:""}),v=i(!1);R(async()=>{await r.checkLogin()||(t({message:"로그인이 필요합니다."}),d.push("/login"));const e=await r.getInformation();e?w.value=e:(t({message:"사용자 정보를 가져올 수 없습니다. 다시 시도해주세요."}),d.back())});const P=["Happy","Angry","Sad","Proud","IDK","Excited","Panicked","Grateful","Exhausted","Blue","Peaceful","Upset"],y=()=>P[Math.floor(Math.random()*P.length)],g=n=>{l.value=n},k=async()=>{await r.logout()?(t({message:"로그아웃 되었습니다."}),d.push("/login")):t({message:"로그아웃에 실패했습니다. 다시 시도해주세요."})},V=async()=>{if(!o.value.currentPassword||!o.value.newPassword||!o.value.confirmPassword){t({message:"비밀번호를 입력해주세요."});return}if(o.value.newPassword!==o.value.confirmPassword){t({message:"비밀번호가 일치하지 않습니다."});return}const n={currentPassword:o.value.currentPassword,newPassword:o.value.newPassword},e=await r.resetPassword(n);e===""?(t({message:"비밀번호가 변경되었습니다."}),d.push("/")):t({message:e})},I=async()=>{if(v.value)return;const n={password:_.value};await r.deleteAccount(n)?(t({message:"탈퇴가 완료되었습니다."}),d.push("/login")):t({message:"탈퇴에 실패했습니다. 다시 시도해주세요."}),v.value=!1};return(n,e)=>(f(),p("div",B,[s("h1",U,b(l.value),1),s("section",E,[s("article",$,[s("button",{onClick:e[0]||(e[0]=a=>g("My Information")),class:h(["btn-menu",{active:l.value==="My Information"}])}," 내 정보 ",2),s("button",{onClick:e[1]||(e[1]=a=>g("Reset Password")),class:h(["btn-menu",{active:l.value==="Reset Password"}])}," 비밀번호 수정 ",2),s("button",{onClick:e[2]||(e[2]=a=>g("Delete Account")),class:h(["btn-menu",{active:l.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),l.value==="My Information"?(f(),p("article",z,[s("div",T,[s("div",null,[s("img",{src:"/icons/emotions/"+y()+".svg",alt:"sample-image",class:"h-[180px] object-cover"},null,8,q)]),s("div",G,[H,s("p",K,b(w.value.name),1)]),s("div",Y,[F,s("p",J,b(w.value.email),1)]),s("div",{class:"w-full flex justify-end"},[s("button",{class:"btn-primary p-[10px]",onClick:k},"Logout")])])])):l.value==="Reset Password"?(f(),p("article",O,[s("div",Q,[s("div",W,[s("div",X,[Z,x(m,{type:"password",modelValue:o.value.currentPassword,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value.currentPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",ss,[es,x(m,{type:"password",modelValue:o.value.newPassword,"onUpdate:modelValue":e[4]||(e[4]=a=>o.value.newPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",os,[ts,x(m,{type:"password",modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[5]||(e[5]=a=>o.value.confirmPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])])]),s("div",{class:"flex justify-end"},[s("button",{class:"btn-primary p-[10px]",onClick:V}," Reset Password ")])])])):l.value==="Delete Account"?(f(),p("article",as,[s("div",ls,[s("div",ns,[cs,x(m,{type:"password",modelValue:_.value,"onUpdate:modelValue":e[6]||(e[6]=a=>_.value=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",ds,[is,s("button",{class:"btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none",onClick:I,disabled:v.value}," Delete Account ",8,rs)])])])):A("",!0)])]))}}),fs=L(us,[["__scopeId","data-v-f1bb6508"]]);export{fs as default};
