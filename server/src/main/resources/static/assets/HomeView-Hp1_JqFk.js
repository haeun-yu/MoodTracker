import{a as S}from"./auth-CNAqI4To.js";import{d as y,r as s,u as w,o as k,a as I,c as V,b as e,e as m,w as g,f as j,g as L,h as v,p as B,i as N,j as A,_ as C}from"./index-D4Uo8UMd.js";const E="/images/main/main-image.svg",T="/images/main/main1.svg",H="/images/main/main1-1.svg",M="/images/main/main1-2.svg",R="/images/main/main1-3.svg",D="/images/main/main2.svg",O="/images/main/main2-1.svg",P="/images/main/main2-2.svg",U="/images/main/main3.svg",a=c=>(B("data-v-f5bec0e0"),c=c(),N(),c),q={class:"h-full flex flex-col items-center justify-between gap-[150px]"},z={class:"flex flex-col items-center gap-[50px]"},F=a(()=>e("p",{class:"text-3xl-regular"},"Mood tracker와 감정을 기록하며 하루를 되새겨보세요.",-1)),G=a(()=>e("img",{src:E},null,-1)),J={class:"relative"},K=a(()=>e("img",{src:T},null,-1)),Q=a(()=>e("article",{class:"flex flex-col gap-[15px]"},[e("p",{class:"text-3xl-bold"},"나만의 감정 다이어리"),e("p",{class:"text-2xl-regular text-[#363636]"},"하루의 감정을 다이어리에 적어보세요."),e("p",{class:"text-2xl-regular text-[#363636]"}," AI의 피드백으로 당신의 감정을 스마트하게 관리해드립니다. ")],-1)),W=a(()=>e("article",{class:"flex flex-col gap-[15px]"},[e("p",{class:"text-3xl-bold"},"이번 달의 감정 점수는?"),e("p",{class:"text-2xl-regular text-[#363636]"},"감정을 분석해 달마다 종합 점수를 제공합니다."),e("p",{class:"text-2xl-regular text-[#363636]"}," 나의 감정 패턴을 이해하고 긍정적 변화를 이끌어내세요! ")],-1)),X={class:"relative"},Y=a(()=>e("img",{src:D},null,-1)),Z=A('<img src="'+U+'" data-v-f5bec0e0><article class="flex flex-col gap-[15px]" data-v-f5bec0e0><p class="text-3xl-bold" data-v-f5bec0e0>캘린더로 한 눈에 확인하세요!</p><p class="text-2xl-regular text-[#363636]" data-v-f5bec0e0> 매일의 감정 기록을 통해 월간/주간 변화 추이를 확인하세요. </p><p class="text-2xl-regular text-[#363636]" data-v-f5bec0e0>감정 상태를 시각적으로 파악하기 쉬워</p><p class="text-2xl-regular text-[#363636]" data-v-f5bec0e0> 나의 감정을 더욱 잘 이해하고 관리할 수 있습니다. </p></article>',2),$=[Z],ee={class:"border-t-[3px] border-[#D0A7EB] w-full py-[100px] flex flex-col items-center gap-[30px]"},te=a(()=>e("p",{class:"text-2xl-regular text-[#363636]"},"이제 저희와 함께 여정을 떠나 보실래요?",-1)),se=y({__name:"HomeView",setup(c){const n=s(!1),{addToast:b}=w(),i=s(null),r=s(null),f=s(null),p=s(null),_=s(null),d=s(null),u=s(null),x=s(null),h=(t,o)=>{t.forEach(l=>{l.isIntersecting&&l.target.classList.add("fade-up-visible")})};return k(async()=>{try{const o=await S.checkLogin();n.value=o.loggedIn}catch(o){b({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(o)}const t=new IntersectionObserver(h,{threshold:.1});i.value&&t.observe(i.value),r.value&&t.observe(r.value),f.value&&t.observe(f.value),p.value&&t.observe(p.value),_.value&&t.observe(_.value),d.value&&t.observe(d.value),u.value&&t.observe(u.value),x.value&&t.observe(x.value)}),I(()=>{}),(t,o)=>{const l=j("RouterLink");return L(),V("div",q,[e("section",z,[F,m(l,{to:n.value?"/today":"/login",class:"btn-tertiary py-[10px] px-[35px] text-[24px] font-semibold"},{default:g(()=>[v(" 기록 시작 ")]),_:1},8,["to"]),G]),e("section",{ref_key:"fadeSection1",ref:i,class:"flex items-center justify-between w-full fade-up"},[e("article",J,[K,e("img",{ref_key:"fadeSection1_1",ref:p,class:"absolute top-[-40px] right-[-30px] fade-up-1",src:H},null,512),e("img",{ref_key:"fadeSection1_2",ref:_,class:"absolute top-0 left-[-30px] fade-up-2",src:M},null,512),e("img",{ref_key:"fadeSection1_3",ref:d,class:"absolute bottom-[-15px] right-[80px] fade-up-3",src:R},null,512)]),Q],512),e("section",{ref_key:"fadeSection2",ref:r,class:"flex items-center justify-between w-full fade-up"},[W,e("article",X,[Y,e("img",{ref_key:"fadeSection2_1",ref:u,class:"absolute top-[213px] left-[152px] fade-up-1",src:O},null,512),e("img",{ref_key:"fadeSection2_2",ref:x,class:"absolute bottom-[100px] right-[212px] fade-up-2",src:P},null,512)])],512),e("section",{ref_key:"fadeSection3",ref:f,class:"flex items-center justify-between w-full fade-up"},$,512),e("section",ee,[te,m(l,{to:n.value?"/today":"/login",class:"btn-tertiary w-[calc(70vw)] p-[10px] text-[24px] font-semibold"},{default:g(()=>[v(" 기록하러 가기 ")]),_:1},8,["to"])])])}}}),le=C(se,[["__scopeId","data-v-f5bec0e0"]]);export{le as default};
