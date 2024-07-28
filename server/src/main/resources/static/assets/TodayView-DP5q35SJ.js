import{d as H,u as L,r as x,m as P,a as C,q as F,c as u,e as a,F as G,x as V,s as b,t as D,B as T,C as Y,n as j,h as m,z as O,p as R,j as U,i as B,_ as W}from"./index-CDoyEkHj.js";import{G as N}from"./gemini-CLcWnMFo.js";import{d as I}from"./diary-CSx834h4.js";import{c as z}from"./calendar-BTmOarwu.js";import"./index-BxK1Kcup.js";const K="/images/stamp.svg",q="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Q=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function X(s,p,c,g){let t=s<12?"AM":"PM";return g&&(t=t.split("").reduce((e,_)=>e+=`${_}.`,"")),c?t.toLowerCase():t}function v(s){const p=["th","st","nd","rd"],c=s%100;return s+(p[(c-20)%10]||p[c]||p[0])}function E(s,p,c={}){var g;const t=s.getFullYear(),e=s.getMonth(),_=s.getDate(),n=s.getHours(),l=s.getMinutes(),y=s.getSeconds(),$=s.getMilliseconds(),M=s.getDay(),f=(g=c.customMeridiem)!=null?g:X,w={Yo:()=>v(t),YY:()=>String(t).slice(-2),YYYY:()=>t,M:()=>e+1,Mo:()=>v(e+1),MM:()=>`${e+1}`.padStart(2,"0"),MMM:()=>s.toLocaleDateString(c.locales,{month:"short"}),MMMM:()=>s.toLocaleDateString(c.locales,{month:"long"}),D:()=>String(_),Do:()=>v(_),DD:()=>`${_}`.padStart(2,"0"),H:()=>String(n),Ho:()=>v(n),HH:()=>`${n}`.padStart(2,"0"),h:()=>`${n%12||12}`.padStart(1,"0"),ho:()=>v(n%12||12),hh:()=>`${n%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>v(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(y),so:()=>v(y),ss:()=>`${y}`.padStart(2,"0"),SSS:()=>`${$}`.padStart(3,"0"),d:()=>M,dd:()=>s.toLocaleDateString(c.locales,{weekday:"narrow"}),ddd:()=>s.toLocaleDateString(c.locales,{weekday:"short"}),dddd:()=>s.toLocaleDateString(c.locales,{weekday:"long"}),A:()=>f(n,l),AA:()=>f(n,l,!1,!0),a:()=>f(n,l,!0),aa:()=>f(n,l,!0,!0)};return p.replace(Q,(k,o)=>{var d,i;return(i=o??((d=w[k])==null?void 0:d.call(w)))!=null?i:k})}const S=s=>(R("data-v-b5408a6d"),s=s(),U(),s),Z={class:"flex items-center justify-between"},J={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},ee=S(()=>a("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),te={class:"grid grid-cols-3"},ae=["onClick"],se=["src"],oe=S(()=>a("article",null,null,-1)),ne={key:1,class:"w-[60%] fade-in relative"},le={class:"diary-container px-[40px] py-[30px]"},ce={class:"w-full flex items-end justify-between text-[#484848]"},ie={class:"flex flex-col gap-[20px]"},re={class:"text-lg-bold"},de=S(()=>a("p",{class:"text-lg-regular"},[B(" 오늘은 어떤 하루를 보내셨나요? "),a("br"),B(" 하루를 기록해보세요! ")],-1)),ue={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},me=["src"],pe={class:"relative w-full"},_e=["disable"],he={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},ve={key:0,class:"absolute top-[-80px] right-[-50px]"},ge=S(()=>a("img",{src:K,alt:"diary",class:"w-[200px]"},null,-1)),fe=[ge],ye={key:0,class:"flex justify-end mt-[20px]"},xe=["disabled"],be={key:0,src:q,class:"w-[30px] animate-spin"},Se={key:1},we={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},ke={class:"w-full"},De={class:"text-lg-regular"},$e=S(()=>a("div",{class:"w-full text-end"},[a("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),Me=H({__name:"TodayView",setup(s){const p=j(),{addToast:c}=L(),g=["Happy","Angry","Sad","Proud","IDK","Excited","Panicked","Grateful","Exhausted"],t=x(null),e=x({emotion:"",content:"",feedback:""}),_=x(null),n=x(!1),l=x(!1);P(async()=>{var i,r;if(await C.checkLogin()||(c({message:"로그인이 필요합니다."}),p.push("/login")),t.value=await C.getInformation(),await I.hasDiary((i=t.value)==null?void 0:i.name,E(new Date,"yyyy-m-d"))){l.value=!0;const h=await z.getDiary((r=t.value)==null?void 0:r.name,E(new Date,"yyyy-m-d"));h&&(e.value.emotion=h.emotion,e.value.content=h.content,e.value.feedback=h.feedback)}else _.value=new N(f)}),F(()=>e.value.content,o=>{o.length>1e3&&(e.value.content=o.slice(0,1e3))});const y=()=>{const o=new Date,d=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],i=o.getFullYear(),r=o.getMonth()+1,h=o.getDate(),A=d[o.getDay()];return`${i}년 ${r}월 ${h}일 ${A}`},$=o=>{e.value.emotion=o},M=()=>{n.value||(n.value=!0,w())},f=o=>{e.value.feedback=o,k()},w=()=>{const o=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘. 감정에 따라 아래와 같은 피드백을 출력해줘. 각 피드백은 사용자의 감정과 일기 내용을 바탕으로 특별하고 맞춤형으로 작성되어야 해.

사용자 정보:
- 사용자 이름: ${t.value.name}
- 일기의 내용: ${e.value.content}
- 선택한 감정: ${e.value.emotion}

감정에 따른 피드백 예시:

- Happy: "${t.value.name}, 오늘 정말 기쁜 하루를 보낸 것 같아 기뻐요! 당신의 긍정적인 에너지가 당신의 일기를 통해 전해졌어요. 오늘 하루도 너무 수고 많았고, 내일도 이 기운 그대로 멋진 하루가 될 거예요!"

- Angry: "${t.value.name}, 오늘 화가 나는 일이 있었군요. 당신의 일기를 읽으니 당신의 감정을 충분히 이해할 수 있어요. 때로는 화를 내는 것도 필요해요. 내일은 더 나은 날이 될 거예요. 당신을 항상 응원하고 있어요."

- Sad: "${t.value.name}, 오늘 슬픈 일이 있었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 슬픔도 우리가 느껴야 할 중요한 감정이에요. 충분히 쉬고, 당신이 소중한 존재라는 걸 잊지 마세요. 내일은 더 나은 날이 될 거예요."

- Exhausted: "${t.value.name}, 오늘 많이 피곤했나 봐요. 당신의 일기를 읽으니 정말 힘든 하루를 보낸 것 같아요. 충분히 쉬어야 해요. 당신의 건강이 가장 중요해요. 내일은 더 활기찬 하루가 되길 바랄게요."

- Panicked: "${t.value.name}, 오늘 두려움을 느낀 일이 있었군요. 당신의 일기를 보니 얼마나 힘들었을지 이해가 돼요. 두려움은 우리를 성장하게 하는 감정이에요. 당신이 이겨낼 수 있다는 걸 믿어요. 내일은 더 안정된 하루가 될 거예요."

- IDK: "${t.value.name}, 오늘 무기력한 하루를 보냈군요. 당신의 일기를 보니 모든 것이 귀찮게 느껴졌겠어요. 누구나 가끔은 이렇게 느낄 때가 있어요. 충분히 쉬고, 자신을 돌봐주세요. 내일은 더 활기찬 하루가 되길 바라요."

- Blue: "${t.value.name}, 오늘 우울한 기분이었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 우울함도 우리가 겪는 중요한 감정이에요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 되길 바랄게요."

- Upset: "${t.value.name}, 오늘 속상한 일이 있었군요. 당신의 일기를 보니 얼마나 마음이 아팠을지 이해가 돼요. 속상함을 느끼는 것도 중요해요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 될 거예요."

- Peaceful: "${t.value.name}, 오늘 평온한 하루를 보낸 것 같아 기뻐요. 당신의 일기를 읽으니 당신의 마음이 안정된 것 같아 좋네요. 평온한 하루를 보낸 만큼 내일도 이렇게 평온하길 바랄게요."

사용자가 선택한 감정에 따라 예시보다 좀 더 자세한 적절한 피드백을 보내줘`;_.value.generate(o)},k=async()=>{var i;const o={emotion:e.value.emotion,content:e.value.content,feedback:e.value.feedback,feedbackCode:"SUCCESS"};await I.createDiary((i=t.value)==null?void 0:i.name,o)&&(n.value=!1,l.value=!0)};return(o,d)=>{var i;return m(),u("div",Z,[l.value?b("",!0):(m(),u("section",J,[ee,a("article",te,[(m(),u(G,null,V(g,(r,h)=>a("button",{key:h,class:O(["emotion-box",e.value.emotion===r?"bg-[#D0A7EB]":"bg-white"]),onClick:A=>$(r)},[a("img",{src:`/icons/emotions/${r}.svg`,alt:"emotion",class:"w-[60px]"},null,8,se)],10,ae)),64))]),oe])),e.value.emotion?(m(),u("section",ne,[a("article",le,[a("div",ce,[a("div",ie,[a("label",re,D(y()),1),de]),a("span",ue,[a("img",{src:`/icons/emotions/${e.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,me),a("p",null,D(e.value.emotion),1)])]),a("div",pe,[T(a("textarea",{"onUpdate:modelValue":d[0]||(d[0]=r=>e.value.content=r),class:"h-[calc(45vh)]",disable:l.value},null,8,_e),[[Y,e.value.content]]),a("p",he,D(e.value.content.length)+"/1000 ",1)]),l.value?(m(),u("div",ve,fe)):b("",!0)]),l.value?b("",!0):(m(),u("div",ye,[a("button",{class:"btn-primary p-[10px]",onClick:M,disabled:n.value},[n.value?(m(),u("img",be)):(m(),u("p",Se,"Submit"))],8,xe)]))])):b("",!0),l.value?(m(),u("section",we,[a("div",ke,[a("p",De,"To. "+D((i=t.value)==null?void 0:i.name),1)]),T(a("textarea",{"onUpdate:modelValue":d[1]||(d[1]=r=>e.value.feedback=r),class:"h-[calc(50vh)]",disabled:""},null,512),[[Y,e.value.feedback]]),$e])):b("",!0)])}}}),Ie=W(Me,[["__scopeId","data-v-b5408a6d"]]);export{Ie as default};