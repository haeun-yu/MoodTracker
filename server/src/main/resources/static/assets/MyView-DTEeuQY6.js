import{d as V,u as C,r as i,m as I,a as r,c as p,e as s,t as b,A as h,f as x,s as R,n as A,h as f,p as M,j,_ as D}from"./index-CPo2f3SM.js";import{_ as w}from"./CommonInput.vue_vue_type_script_setup_true_lang-DnsE1tmS.js";const L="/images/sample-image.svg",N="/images/delete-account.svg",c=u=>(M("data-v-801c04f3"),u=u(),j(),u),S={class:"my-body"},B={class:"text-3xl-bold mb-[20px]"},U={class:"grid grid-cols-4"},$={class:"flex flex-col gap-[10px] pt-[20px]"},E={key:0,class:"function-box"},T={class:"w-[80%] flex flex-col gap-[30px] p-[20px]"},z=c(()=>s("img",{src:L,alt:"sample-image",class:"w-[180px] h-[180px] rounded-[10px] border object-cover"},null,-1)),Y={class:"flex border-b-[1.5px] border-black"},q=c(()=>s("label",{class:"w-[30%] text-[26px]"},"Name",-1)),F={class:"w-[70%]] text-[26px] font-light"},G={class:"flex border-b-[1.5px] border-black"},H=c(()=>s("label",{class:"w-[30%] text-[26px]"},"Email",-1)),J={class:"w-[70%]] text-[26px] font-light"},K={key:1,class:"function-box"},O={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},Q={class:"flex flex-col gap-[30px]"},W={class:"flex flex-col gap-[10px]"},X=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Current Password",-1)),Z={class:"flex flex-col gap-[10px]"},ss=c(()=>s("label",{class:"w-[50%] text-[20px]"},"New Password",-1)),es={class:"flex flex-col gap-[10px]"},os=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Confirm New Password",-1)),ts={key:2,class:"function-box"},as={class:"w-full flex flex-col justify-between gap-[30px] p-[20px]"},ls={class:"flex flex-col gap-[10px]"},ns=c(()=>s("label",{class:"w-[50%] text-[20px]"},"Your Password",-1)),cs={class:"flex items-end justify-between"},ds=c(()=>s("img",{src:N},null,-1)),is=["disabled"],rs=V({__name:"MyView",setup(u){const d=A(),{addToast:t}=C(),l=i("My Information"),m=i({name:"",email:"",password:""}),_=i(""),o=i({currentPassword:"",newPassword:"",confirmPassword:""}),v=i(!1);I(async()=>{await r.checkLogin()||(t({message:"로그인이 필요합니다."}),d.push("/login"));const e=await r.getInformation();e?m.value=e:(t({message:"사용자 정보를 가져올 수 없습니다. 다시 시도해주세요."}),d.back())});const g=n=>{l.value=n},P=async()=>{await r.logout()?(t({message:"로그아웃 되었습니다."}),d.push("/login")):t({message:"로그아웃에 실패했습니다. 다시 시도해주세요."})},y=async()=>{if(!o.value.currentPassword||!o.value.newPassword||!o.value.confirmPassword){t({message:"비밀번호를 입력해주세요."});return}if(o.value.newPassword!==o.value.confirmPassword){t({message:"비밀번호가 일치하지 않습니다."});return}const n={currentPassword:o.value.currentPassword,newPassword:o.value.newPassword},e=await r.resetPassword(n);e===""?(t({message:"비밀번호가 변경되었습니다."}),d.push("/login")):t({message:e})},k=async()=>{if(v.value)return;const n={password:_.value};await r.deleteAccount(n)?(t({message:"탈퇴가 완료되었습니다."}),d.push("/login")):t({message:"탈퇴에 실패했습니다. 다시 시도해주세요."}),v.value=!1};return(n,e)=>(f(),p("div",S,[s("h1",B,b(l.value),1),s("section",U,[s("article",$,[s("button",{onClick:e[0]||(e[0]=a=>g("My Information")),class:h(["btn-menu",{active:l.value==="My Information"}])}," 내 정보 ",2),s("button",{onClick:e[1]||(e[1]=a=>g("Reset Password")),class:h(["btn-menu",{active:l.value==="Reset Password"}])}," 비밀번호 수정 ",2),s("button",{onClick:e[2]||(e[2]=a=>g("Delete Account")),class:h(["btn-menu",{active:l.value==="Delete Account"}])}," 회원 탈퇴하기 ",2)]),l.value==="My Information"?(f(),p("article",E,[s("div",T,[z,s("div",Y,[q,s("p",F,b(m.value.name),1)]),s("div",G,[H,s("p",J,b(m.value.email),1)]),s("div",{class:"w-full flex justify-end"},[s("button",{class:"btn-primary p-[10px]",onClick:P},"Logout")])])])):l.value==="Reset Password"?(f(),p("article",K,[s("div",O,[s("div",Q,[s("div",W,[X,x(w,{type:"password",modelValue:o.value.currentPassword,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value.currentPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",Z,[ss,x(w,{type:"password",modelValue:o.value.newPassword,"onUpdate:modelValue":e[4]||(e[4]=a=>o.value.newPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",es,[os,x(w,{type:"password",modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[5]||(e[5]=a=>o.value.confirmPassword=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])])]),s("div",{class:"flex justify-end"},[s("button",{class:"btn-primary p-[10px]",onClick:y}," Reset Password ")])])])):l.value==="Delete Account"?(f(),p("article",ts,[s("div",as,[s("div",ls,[ns,x(w,{type:"password",modelValue:_.value,"onUpdate:modelValue":e[6]||(e[6]=a=>_.value=a),class:"w-[50%] text-[20px] font-light"},null,8,["modelValue"])]),s("div",cs,[ds,s("button",{class:"btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none",onClick:k,disabled:v.value}," Delete Account ",8,is)])])])):R("",!0)])]))}}),xs=D(rs,[["__scopeId","data-v-801c04f3"]]);export{xs as default};
