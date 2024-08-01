import{d as C,u as R,r,m as A,a as i,c as x,e,t as b,z as h,f,s as D,n as M,h as w,p as j,j as S,_ as L}from"./index-BFC-z5it.js";import{_ as m}from"./CommonInput.vue_vue_type_script_setup_true_lang-BNhgmBrK.js";const N="/images/delete-account.svg",c=u=>(j("data-v-2f1b5690"),u=u(),S(),u),B={class:"my-body"},U={class:"text-3xl-bold mb-[20px]"},E={class:"grid grid-cols-4"},$={class:"flex flex-col gap-[10px] pt-[20px]"},z={key:0,class:"function-box"},T={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},q=["src"],G={class:"flex border-b-[1.5px] border-black"},H=c(()=>e("label",{class:"w-[30%] text-[26px]"},"Name",-1)),K={class:"w-[70%]] text-[26px] font-light"},Y={class:"flex border-b-[1.5px] border-black"},F=c(()=>e("label",{class:"w-[30%] text-[26px]"},"Email",-1)),J={class:"w-[70%]] text-[26px] font-light"},O={key:1,class:"function-box"},Q={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},W={class:"flex flex-col gap-[30px]"},X={class:"flex flex-col gap-[10px]"},Z=c(()=>e("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),ee={class:"flex flex-col gap-[10px]"},se=c(()=>e("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),oe={class:"flex flex-col gap-[10px]"},te=c(()=>e("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),ae={key:2,class:"function-box"},le={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},ne={class:"flex flex-col gap-[10px]"},ce=c(()=>e("label",{class:"w-[50%] text-[20px]"},"Your Password",-1)),de={class:"flex items-end justify-between"},re=c(()=>e("img",{src:N},null,-1)),ie=["disabled"],ue=C({__name:"MyView",setup(u){const d=M(),{addToast:t}=R(),n=r("My Information"),p=r({name:"",email:"",password:""}),_=r(""),o=r({currentPassword:"",newPassword:"",confirmPassword:""}),v=r(!1);A(async()=>{await i.checkLogin()||(t({message:"로그인이 필요합니다."}),d.push("/login"));const s=await i.getInformation();s?p.value=s:(t({message:"사용자 정보를 가져올 수 없습니다. 다시 시도해주세요."}),d.back())});const P=["Happy","Angry","Sad","Proud","IDK","Excited","Panicked","Grateful","Exhausted","Blue","Peaceful","Upset"],y=a=>P[(a%12+12)%12],g=a=>{n.value=a},k=async()=>{await i.logout()?(t({message:"로그아웃 되었습니다."}),d.push("/login")):t({message:"로그아웃에 실패했습니다. 다시 시도해주세요."})},V=async()=>{if(!o.value.currentPassword||!o.value.newPassword||!o.value.confirmPassword){t({message:"비밀번호를 입력해주세요."});return}if(o.value.newPassword!==o.value.confirmPassword){t({message:"비밀번호가 일치하지 않습니다."});return}const a={currentPassword:o.value.currentPassword,newPassword:o.value.newPassword},s=await i.resetPassword(a);s===""?(t({message:"비밀번호가 변경되었습니다."}),d.push("/")):t({message:s})},I=async()=>{if(v.value)return;const a={password:_.value};await i.deleteAccount(a)?(t({message:"탈퇴가 완료되었습니다."}),d.push("/login")):t({message:"탈퇴에 실패했습니다. 다시 시도해주세요."}),v.value=!1};return(a,s)=>(w(),x("div",B,[e("h1",U,b(n.value),1),e("section",E,[e("article",$,[e("button",{onClick:s[0]||(s[0]=l=>g("My Information")),class:h(["btn-menu",{active:n.value==="My Information"}])}," 내 정보 ",2),e("button",{onClick:s[1]||(s[1]=l=>g("Reset Password")),class:h(["btn-menu",{active:n.value==="Reset Password"}])}," 비밀번호 수정 ",2),e("button",{onClick:s[2]||(s[2]=l=>g("Delete Account")),class:h(["btn-menu",{active:n.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),n.value==="My Information"?(w(),x("article",z,[e("div",T,[e("img",{src:"/images/"+y(p.value.userSeq)+".svg",alt:"sample-image",class:"w-[180px] h-[180px] rounded-[10px] border object-cover"},null,8,q),e("div",G,[H,e("p",K,b(p.value.name),1)]),e("div",Y,[F,e("p",J,b(p.value.email),1)]),e("div",{class:"w-full flex justify-end"},[e("button",{class:"btn-primary p-[10px]",onClick:k},"Logout")])])])):n.value==="Reset Password"?(w(),x("article",O,[e("div",Q,[e("div",W,[e("div",X,[Z,f(m,{type:"password",modelValue:o.value.currentPassword,"onUpdate:modelValue":s[3]||(s[3]=l=>o.value.currentPassword=l),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),e("div",ee,[se,f(m,{type:"password",modelValue:o.value.newPassword,"onUpdate:modelValue":s[4]||(s[4]=l=>o.value.newPassword=l),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),e("div",oe,[te,f(m,{type:"password",modelValue:o.value.confirmPassword,"onUpdate:modelValue":s[5]||(s[5]=l=>o.value.confirmPassword=l),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])])]),e("div",{class:"flex justify-end"},[e("button",{class:"btn-primary p-[10px]",onClick:V}," Reset Password ")])])])):n.value==="Delete Account"?(w(),x("article",ae,[e("div",le,[e("div",ne,[ce,f(m,{type:"password",modelValue:_.value,"onUpdate:modelValue":s[6]||(s[6]=l=>_.value=l),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),e("div",de,[re,e("button",{class:"btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none",onClick:I,disabled:v.value}," Delete Account ",8,ie)])])])):D("",!0)])]))}}),fe=L(ue,[["__scopeId","data-v-2f1b5690"]]);export{fe as default};