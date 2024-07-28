import{d as h,r as s,u as S,o as y,a as w,b as k,c as I,e,f as m,w as g,g as V,h as j,i as v,p as L,j as B,k as N,_ as A}from"./index-BZfWT_vk.js";const C="/images/main/main-image.svg",E="/images/main/main1.svg",H="/images/main/main1-1.svg",M="/images/main/main1-2.svg",R="/images/main/main1-3.svg",T="/images/main/main2.svg",D="/images/main/main2-1.svg",O="/images/main/main2-2.svg",P="/images/main/main3.svg",a=l=>(L("data-v-d5a2bd68"),l=l(),B(),l),U={class:"h-full flex flex-col items-center justify-between gap-[150px]"},q={class:"flex flex-col items-center gap-[50px]"},z=a(()=>e("p",{class:"text-3xl-regular"},"Mood tracker와 감정을 기록하며 하루를 되새겨보세요.",-1)),F=a(()=>e("img",{src:C},null,-1)),G={class:"relative"},J=a(()=>e("img",{src:E},null,-1)),K=a(()=>e("article",{class:"flex flex-col gap-[15px]"},[e("p",{class:"text-3xl-bold"},"나만의 감정 다이어리"),e("p",{class:"text-2xl-regular text-[#363636]"},"하루의 감정을 다이어리에 적어보세요."),e("p",{class:"text-2xl-regular text-[#363636]"}," AI의 피드백으로 당신의 감정을 스마트하게 관리해드립니다. ")],-1)),Q=a(()=>e("article",{class:"flex flex-col gap-[15px]"},[e("p",{class:"text-3xl-bold"},"이번 달의 감정 점수는?"),e("p",{class:"text-2xl-regular text-[#363636]"},"감정을 분석해 달마다 종합 점수를 제공합니다."),e("p",{class:"text-2xl-regular text-[#363636]"}," 나의 감정 패턴을 이해하고 긍정적 변화를 이끌어내세요! ")],-1)),W={class:"relative"},X=a(()=>e("img",{src:T},null,-1)),Y=N('<img src="'+P+'" data-v-d5a2bd68><article class="flex flex-col gap-[15px]" data-v-d5a2bd68><p class="text-3xl-bold" data-v-d5a2bd68>캘린더로 한 눈에 확인하세요!</p><p class="text-2xl-regular text-[#363636]" data-v-d5a2bd68> 매일의 감정 기록을 통해 월간/주간 변화 추이를 확인하세요. </p><p class="text-2xl-regular text-[#363636]" data-v-d5a2bd68>감정 상태를 시각적으로 파악하기 쉬워</p><p class="text-2xl-regular text-[#363636]" data-v-d5a2bd68> 나의 감정을 더욱 잘 이해하고 관리할 수 있습니다. </p></article>',2),Z=[Y],$={class:"border-t-[3px] border-[#D0A7EB] w-full py-[100px] flex flex-col items-center gap-[30px]"},ee=a(()=>e("p",{class:"text-2xl-regular text-[#363636]"},"이제 저희와 함께 여정을 떠나 보실래요?",-1)),te=h({__name:"HomeView",setup(l){const i=s(!1);S();const n=s(null),r=s(null),d=s(null),f=s(null),p=s(null),_=s(null),u=s(null),x=s(null),b=(c,t)=>{c.forEach(o=>{o.isIntersecting&&o.target.classList.add("fade-up-visible")})};return y(async()=>{const c=await w.checkLogin();i.value=c;const t=new IntersectionObserver(b,{threshold:.1});n.value&&t.observe(n.value),r.value&&t.observe(r.value),d.value&&t.observe(d.value),f.value&&t.observe(f.value),p.value&&t.observe(p.value),_.value&&t.observe(_.value),u.value&&t.observe(u.value),x.value&&t.observe(x.value)}),k(()=>{}),(c,t)=>{const o=V("RouterLink");return j(),I("div",U,[e("section",q,[z,m(o,{to:i.value?"/today":"/login",class:"btn-tertiary py-[10px] px-[35px] text-[24px] font-semibold"},{default:g(()=>[v(" 기록 시작 ")]),_:1},8,["to"]),F]),e("section",{ref_key:"fadeSection1",ref:n,class:"flex items-center justify-between w-full fade-up"},[e("article",G,[J,e("img",{ref_key:"fadeSection1_1",ref:f,class:"absolute top-[-40px] right-[-30px] fade-up-1",src:H},null,512),e("img",{ref_key:"fadeSection1_2",ref:p,class:"absolute top-0 left-[-30px] fade-up-2",src:M},null,512),e("img",{ref_key:"fadeSection1_3",ref:_,class:"absolute bottom-[-15px] right-[80px] fade-up-3",src:R},null,512)]),K],512),e("section",{ref_key:"fadeSection2",ref:r,class:"flex items-center justify-between w-full fade-up"},[Q,e("article",W,[X,e("img",{ref_key:"fadeSection2_1",ref:u,class:"absolute top-[213px] left-[152px] fade-up-1",src:D},null,512),e("img",{ref_key:"fadeSection2_2",ref:x,class:"absolute bottom-[100px] right-[212px] fade-up-2",src:O},null,512)])],512),e("section",{ref_key:"fadeSection3",ref:d,class:"flex items-center justify-between w-full fade-up"},Z,512),e("section",$,[ee,m(o,{to:i.value?"/today":"/login",class:"btn-tertiary w-[calc(70vw)] p-[10px] text-[24px] font-semibold"},{default:g(()=>[v(" 기록하러 가기 ")]),_:1},8,["to"])])])}}}),ae=A(te,[["__scopeId","data-v-d5a2bd68"]]);export{ae as default};