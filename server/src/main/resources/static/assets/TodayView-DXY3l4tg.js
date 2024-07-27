var G=Object.defineProperty;var H=(e,n,o)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var x=(e,n,o)=>H(e,typeof n!="symbol"?n+"":n,o);import{d as P,u as R,r as S,m as F,a as C,q as O,c as m,e as a,F as V,x as U,s as b,t as $,B as T,C as B,n as j,h as p,z as W,p as z,j as K,i as Y,_ as N}from"./index-CJnsoY01.js";import{G as X}from"./index-BxK1Kcup.js";import{d as L}from"./diary-BRsT9Dlm.js";import{c as q}from"./calendar-CXyv272e.js";const Q="/images/stamp.svg",Z="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function ee(e,n,o,v){let s=e<12?"AM":"PM";return v&&(s=s.split("").reduce((t,h)=>t+=`${h}.`,"")),o?s.toLowerCase():s}function _(e){const n=["th","st","nd","rd"],o=e%100;return e+(n[(o-20)%10]||n[o]||n[0])}function E(e,n,o={}){var v;const s=e.getFullYear(),t=e.getMonth(),h=e.getDate(),c=e.getHours(),i=e.getMinutes(),y=e.getSeconds(),M=e.getMilliseconds(),A=e.getDay(),f=(v=o.customMeridiem)!=null?v:ee,k={Yo:()=>_(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>t+1,Mo:()=>_(t+1),MM:()=>`${t+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(o.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(o.locales,{month:"long"}),D:()=>String(h),Do:()=>_(h),DD:()=>`${h}`.padStart(2,"0"),H:()=>String(c),Ho:()=>_(c),HH:()=>`${c}`.padStart(2,"0"),h:()=>`${c%12||12}`.padStart(1,"0"),ho:()=>_(c%12||12),hh:()=>`${c%12||12}`.padStart(2,"0"),m:()=>String(i),mo:()=>_(i),mm:()=>`${i}`.padStart(2,"0"),s:()=>String(y),so:()=>_(y),ss:()=>`${y}`.padStart(2,"0"),SSS:()=>`${M}`.padStart(3,"0"),d:()=>A,dd:()=>e.toLocaleDateString(o.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(o.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(o.locales,{weekday:"long"}),A:()=>f(c,i),AA:()=>f(c,i,!1,!0),a:()=>f(c,i,!0),aa:()=>f(c,i,!0,!0)};return n.replace(J,(D,l)=>{var u,r;return(r=l??((u=k[D])==null?void 0:u.call(k)))!=null?r:D})}const te="AIzaSyCXpx3BdoALyxXrn2TTS629kOaOR0POmuI";class se{constructor(n){x(this,"genAI",null);x(this,"model",null);x(this,"handleResult",()=>{});x(this,"generate",async n=>{try{const s=(await this.model.generateContent(n)).response.text();this.handleResult(s)}catch(o){console.log(o.message)}});this.handleResult=n,this.genAI=new X(te),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}const w=e=>(z("data-v-05552aea"),e=e(),K(),e),ae={class:"flex items-center justify-between"},oe={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},ne=w(()=>a("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),le={class:"grid grid-cols-3"},ce=["onClick"],ie=["src"],re=w(()=>a("article",null,null,-1)),de={key:1,class:"w-[60%] fade-in relative"},ue={class:"diary-container px-[40px] py-[30px]"},me={class:"w-full flex items-end justify-between text-[#484848]"},pe={class:"flex flex-col gap-[20px]"},he={class:"text-lg-bold"},ge=w(()=>a("p",{class:"text-lg-regular"},[Y(" 오늘은 어떤 하루를 보내셨나요? "),a("br"),Y(" 하루를 기록해보세요! ")],-1)),ve={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},_e=["src"],fe={class:"relative w-full"},ye=["disable"],xe={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},Se={key:0,class:"absolute top-[-80px] right-[-50px]"},be=w(()=>a("img",{src:Q,alt:"diary",class:"w-[200px]"},null,-1)),we=[be],ke={key:0,class:"flex justify-end mt-[20px]"},De=["disabled"],$e={key:0,src:Z,class:"w-[30px] animate-spin"},Me={key:1},Ae={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},Ie={class:"w-full"},Ce={class:"text-lg-regular"},Te=w(()=>a("div",{class:"w-full text-end"},[a("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),Be=P({__name:"TodayView",setup(e){const n=j(),{addToast:o}=R(),v=["Happy","Angry","Sad","IDK","Exhausted","Panicked","Blue","Upset","Peaceful"],s=S(null),t=S({emotion:"",content:"",feedback:""}),h=S(null),c=S(!1),i=S(!1);F(async()=>{var r,d;if(await C.checkLogin()||(o({message:"로그인이 필요합니다."}),n.push("/login")),s.value=await C.getInformation(),await L.hasDiary((r=s.value)==null?void 0:r.name,E(new Date,"yyyy-m-d"))){i.value=!0;const g=await q.getDiary((d=s.value)==null?void 0:d.name,E(new Date,"yyyy-m-d"));g&&(t.value.emotion=g.emotion,t.value.content=g.content,t.value.feedback=g.feedback)}else h.value=new se(f)}),O(()=>t.value.content,l=>{l.length>1e3&&(t.value.content=l.slice(0,1e3))});const y=()=>{const l=new Date,u=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],r=l.getFullYear(),d=l.getMonth()+1,g=l.getDate(),I=u[l.getDay()];return`${r}년 ${d}월 ${g}일 ${I}`},M=l=>{t.value.emotion=l},A=()=>{c.value||(c.value=!0,k())},f=l=>{t.value.feedback=l,D()},k=()=>{const l=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘. 감정에 따라 아래와 같은 피드백을 출력해줘. 각 피드백은 사용자의 감정과 일기 내용을 바탕으로 특별하고 맞춤형으로 작성되어야 해.

사용자 정보:
- 사용자 이름: ${s.value.name}
- 일기의 내용: ${t.value.content}
- 선택한 감정: ${t.value.emotion}

감정에 따른 피드백 예시:

- Happy: "${s.value.name}, 오늘 정말 기쁜 하루를 보낸 것 같아 기뻐요! 당신의 긍정적인 에너지가 당신의 일기를 통해 전해졌어요. 오늘 하루도 너무 수고 많았고, 내일도 이 기운 그대로 멋진 하루가 될 거예요!"

- Angry: "${s.value.name}, 오늘 화가 나는 일이 있었군요. 당신의 일기를 읽으니 당신의 감정을 충분히 이해할 수 있어요. 때로는 화를 내는 것도 필요해요. 내일은 더 나은 날이 될 거예요. 당신을 항상 응원하고 있어요."

- Sad: "${s.value.name}, 오늘 슬픈 일이 있었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 슬픔도 우리가 느껴야 할 중요한 감정이에요. 충분히 쉬고, 당신이 소중한 존재라는 걸 잊지 마세요. 내일은 더 나은 날이 될 거예요."

- Exhausted: "${s.value.name}, 오늘 많이 피곤했나 봐요. 당신의 일기를 읽으니 정말 힘든 하루를 보낸 것 같아요. 충분히 쉬어야 해요. 당신의 건강이 가장 중요해요. 내일은 더 활기찬 하루가 되길 바랄게요."

- Panicked: "${s.value.name}, 오늘 두려움을 느낀 일이 있었군요. 당신의 일기를 보니 얼마나 힘들었을지 이해가 돼요. 두려움은 우리를 성장하게 하는 감정이에요. 당신이 이겨낼 수 있다는 걸 믿어요. 내일은 더 안정된 하루가 될 거예요."

- IDK: "${s.value.name}, 오늘 무기력한 하루를 보냈군요. 당신의 일기를 보니 모든 것이 귀찮게 느껴졌겠어요. 누구나 가끔은 이렇게 느낄 때가 있어요. 충분히 쉬고, 자신을 돌봐주세요. 내일은 더 활기찬 하루가 되길 바라요."

- Blue: "${s.value.name}, 오늘 우울한 기분이었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 우울함도 우리가 겪는 중요한 감정이에요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 되길 바랄게요."

- Upset: "${s.value.name}, 오늘 속상한 일이 있었군요. 당신의 일기를 보니 얼마나 마음이 아팠을지 이해가 돼요. 속상함을 느끼는 것도 중요해요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 될 거예요."

- Peaceful: "${s.value.name}, 오늘 평온한 하루를 보낸 것 같아 기뻐요. 당신의 일기를 읽으니 당신의 마음이 안정된 것 같아 좋네요. 평온한 하루를 보낸 만큼 내일도 이렇게 평온하길 바랄게요."

사용자가 선택한 감정에 따라 예시보다 좀 더 자세한 적절한 피드백을 보내줘`;h.value.generate(l)},D=async()=>{var r;const l={emotion:t.value.emotion,content:t.value.content,feedback:t.value.feedback,feedbackCode:"SUCCESS"};await L.createDiary((r=s.value)==null?void 0:r.name,l)&&(c.value=!1,i.value=!0)};return(l,u)=>{var r;return p(),m("div",ae,[i.value?b("",!0):(p(),m("section",oe,[ne,a("article",le,[(p(),m(V,null,U(v,(d,g)=>a("button",{key:g,class:W(["emotion-box",t.value.emotion===d?"bg-[#D0A7EB]":"bg-white"]),onClick:I=>M(d)},[a("img",{src:`/icons/emotions/${d}.svg`,alt:"emotion",class:"w-[60px]"},null,8,ie)],10,ce)),64))]),re])),t.value.emotion?(p(),m("section",de,[a("article",ue,[a("div",me,[a("div",pe,[a("label",he,$(y()),1),ge]),a("span",ve,[a("img",{src:`/icons/emotions/${t.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,_e),a("p",null,$(t.value.emotion),1)])]),a("div",fe,[T(a("textarea",{"onUpdate:modelValue":u[0]||(u[0]=d=>t.value.content=d),class:"h-[calc(45vh)]",disable:i.value},null,8,ye),[[B,t.value.content]]),a("p",xe,$(t.value.content.length)+"/1000 ",1)]),i.value?(p(),m("div",Se,we)):b("",!0)]),i.value?b("",!0):(p(),m("div",ke,[a("button",{class:"btn-primary p-[10px]",onClick:A,disabled:c.value},[c.value?(p(),m("img",$e)):(p(),m("p",Me,"Submit"))],8,De)]))])):b("",!0),i.value?(p(),m("section",Ae,[a("div",Ie,[a("p",Ce,"To. "+$((r=s.value)==null?void 0:r.name),1)]),T(a("textarea",{"onUpdate:modelValue":u[1]||(u[1]=d=>t.value.feedback=d),class:"h-[calc(50vh)]",disabled:""},null,512),[[B,t.value.feedback]]),Te])):b("",!0)])}}}),Pe=N(Be,[["__scopeId","data-v-05552aea"]]);export{Pe as default};
