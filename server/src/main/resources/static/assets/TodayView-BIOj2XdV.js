import{d as V,u as E,r as m,m as M,a as y,q as j,c as l,e,F as G,x as N,s as p,t as h,B as b,C as w,n as K,h as c,z as L,p as U,j as z,i as k,_ as O}from"./index-N3CHFhWn.js";import{G as R}from"./gemini-CLcWnMFo.js";import{d as D}from"./diary-BhVAJ_MI.js";import{c as W}from"./calendar-BuHb1krb.js";import"./index-BxK1Kcup.js";const Y="/images/stamp.svg",q="/icons/loading.svg",_=v=>(U("data-v-5f5ba416"),v=v(),z(),v),H={class:"flex items-center justify-between"},Q={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},J=_(()=>e("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),X={class:"grid grid-cols-3"},Z=["onClick"],ee=["src"],te=_(()=>e("article",null,null,-1)),se={key:1,class:"w-[60%] fade-in relative"},oe={class:"diary-container px-[40px] py-[30px]"},ae={class:"w-full flex items-end justify-between text-[#484848]"},ne={class:"flex flex-col gap-[20px]"},le={class:"text-lg-bold"},ce=_(()=>e("p",{class:"text-lg-regular"},[k(" 오늘은 어떤 하루를 보내셨나요? "),e("br"),k(" 하루를 기록해보세요! ")],-1)),ie={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},re=["src"],de={class:"relative w-full"},ue=["disable"],me={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},pe={key:0,class:"absolute top-[-80px] right-[-50px]"},_e=_(()=>e("img",{src:Y,alt:"diary",class:"w-[200px]"},null,-1)),ve=[_e],he={key:0,class:"flex justify-end mt-[20px]"},fe=["disabled"],xe={key:0,src:q,class:"w-[30px] animate-spin"},ge={key:1},ye={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},be={class:"w-full"},we={class:"text-lg-regular"},ke=_(()=>e("div",{class:"w-full text-end"},[e("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),De=V({__name:"TodayView",setup(v){const S=K(),{addToast:$}=E(),I=["Happy","Angry","Sad","Proud","IDK","Excited","Panicked","Grateful","Exhausted"],d=m(null),t=m({emotion:"",content:"",feedback:""}),f=m(null),u=m(!1),r=m(!1);M(async()=>{var a,o;if(await y.checkLogin()||($({message:"로그인이 필요합니다."}),S.push("/login")),d.value=await y.getInformation(),await D.hasDiary((a=d.value)==null?void 0:a.name,x())){r.value=!0;const i=await W.getDiary((o=d.value)==null?void 0:o.name,x());i&&(t.value.emotion=i.emotion,t.value.content=i.content,t.value.feedback=i.feedback)}else f.value=new R(B)}),j(()=>t.value.content,s=>{s.length>1e3&&(t.value.content=s.slice(0,1e3))});const A=()=>{const s=new Date,n=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],a=s.getFullYear(),o=s.getMonth()+1,i=s.getDate(),g=n[s.getDay()];return`${a}년 ${o}월 ${i}일 ${g}`},x=()=>{const s=new Date,n=s.getFullYear(),a=s.getMonth()+1,o=s.getDate();return`${n}-${a}-${o}`},C=s=>{t.value.emotion=s},T=()=>{u.value||(u.value=!0,P())},B=s=>{t.value.feedback=s,F()},P=()=>{const s=`###프롬프트###
다음은 감정 기록 앱 사용자의 일간 기록 '데이터'입니다. 당신은 반드시 '사용자'가 '선택한 감정'과 '감정 기록'을 바탕으로, 사용자에게 맞춤형 피드백을 작성해야 합니다.
피드백:
###데이터###
* 사용자 이름: ${d.value.name}
* 일기의 내용: ${t.value.content}
* 선택한 감정: ${t.value.emotion}
###피드백 작성 지침###
think step by step
1. **감정 분석:**
   * 'IDK'와 같이 명확하지 않은 감정은 문맥을 분석하여 추정된 감정을 제시합니다. (예: '혼란스럽다', '복잡하다', '생각이 많다')
   * 다양한 감정이 혼재되어 있다면, 주된 감정과 부수적인 감정을 구분하여 표현합니다.
2. **맞춤형 격려:**
   * 사용자의 일기 내용에 등장하는 특정 단어나 문장을 활용하여 구체적인 격려 메시지를 전달합니다.
   * 사용자의 성장 가능성을 강조하고, 긍정적인 자아 이미지를 형성하도록 돕습니다.
3. **다양한 표현:**
   * 동일한 감정에 대해서도 다양한 표현 방식을 사용하여 피드백의 지루함을 해소합니다.
   * 예시: '힘든 시간을 보내고 있지만', '혼란스러운 감정이 드는군요', '마음이 복잡한 하루였네요' 등
4. **추가적인 제안:**
   * 사용자의 감정 상태에 따라 적절한 행동이나 활동을 제안합니다. (예: '명상을 해보는 것은 어떨까요?', '좋아하는 음악을 들어보세요')
5. **형식:**
   * 존댓말을 사용하여 친근하고 공감적인 어투로 작성합니다.
   * 최대 글자 수는 1000자를 넘지 않도록 합니다.
###예상되는 피드백 예시###
* userName: ASAP
* form.value.emotion: IDK(I don't know)
* form.value.content: 오늘은 영화 인사이드 아웃을 봤다. 인사이드 아웃은 라일리의 감정들이 등장하여 어떤식으로 감정이 표현되는지를 잘 다룬 영화라고 생각이 되면서, 나 자신 또한 돌아볼 수 있는 기회가 되었다. 아직 내 감정에 솔직하지 못하고 표현하는 방법도 잘 모르겠지만, 앞으로 일기를 작성하면서 나 자신을 돌이켜볼 수 있는 기회로 삼아야겠다.
ASAP님,
오늘 영화를 보며 자신을 돌아보는 시간을 가졌군요. 아직 자신의 감정을 명확하게 표현하기 어렵다고 느끼는 부분, 충분히 이해합니다.
하지만 영화를 통해 자신의 감정을 이해하려는 노력은 정말 멋진 일이에요.
혼란스러운 감정 속에서도 자신을 돌아보고 성장하려는 ASAP님의 모습에서 큰 용기를 얻었습니다. 앞으로도 일기를 통해 자신의 감정을 꾸준히 기록하고, 조금씩 변화해가는 자신을 발견해나가길 바랍니다.
혹시 혼자 해결하기 어려운 감정이 있다면,
주변 사람들에게 도움을 요청하거나 전문가의 도움을 받는 것도 좋은 방법이 될 수 있어요.
###참고###
위 예시는 일부분이며, 실제 피드백은 사용자의 데이터에 따라 더욱 다양하고 맞춤형으로 생성될 수 있습니다.
###추가적으로 고려해야 할 사항###
* **감정 사전:** 다양한 감정과 그에 따른 적절한 피드백을 연결하는 감정 사전을 구축하면 더욱 정교한 피드백 생성이 가능합니다.
* **문맥 분석:** 사용자의 일기 내용을 깊이 분석하여 숨겨진 의미나 감정을 파악하는 것이 중요합니다.
* **개인정보 보호:** 사용자의 개인정보를 보호하기 위해 민감한 정보는 노출하지 않도록 주의해야 합니다.`;f.value.generate(s)},F=async()=>{var a;const s={emotion:t.value.emotion,content:t.value.content,feedback:t.value.feedback,feedbackCode:"SUCCESS"};await D.createDiary((a=d.value)==null?void 0:a.name,s)&&(u.value=!1,r.value=!0)};return(s,n)=>{var a;return c(),l("div",H,[r.value?p("",!0):(c(),l("section",Q,[J,e("article",X,[(c(),l(G,null,N(I,(o,i)=>e("button",{key:i,class:L(["emotion-box",t.value.emotion===o?"bg-[#D0A7EB]":"bg-white"]),onClick:g=>C(o)},[e("img",{src:`/icons/emotions/${o}.svg`,alt:"emotion",class:"w-[60px]"},null,8,ee)],10,Z)),64))]),te])),t.value.emotion?(c(),l("section",se,[e("article",oe,[e("div",ae,[e("div",ne,[e("label",le,h(A()),1),ce]),e("span",ie,[e("img",{src:`/icons/emotions/${t.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,re),e("p",null,h(t.value.emotion),1)])]),e("div",de,[b(e("textarea",{"onUpdate:modelValue":n[0]||(n[0]=o=>t.value.content=o),class:"h-[calc(45vh)]",disable:r.value},null,8,ue),[[w,t.value.content]]),e("p",me,h(t.value.content.length)+"/1000 ",1)]),r.value?(c(),l("div",pe,ve)):p("",!0)]),r.value?p("",!0):(c(),l("div",he,[e("button",{class:"btn-primary p-[10px]",onClick:T,disabled:u.value},[u.value?(c(),l("img",xe)):(c(),l("p",ge,"Submit"))],8,fe)]))])):p("",!0),r.value?(c(),l("section",ye,[e("div",be,[e("p",we,"To. "+h((a=d.value)==null?void 0:a.name),1)]),b(e("textarea",{"onUpdate:modelValue":n[1]||(n[1]=o=>t.value.feedback=o),class:"h-[calc(50vh)]",disabled:""},null,512),[[w,t.value.feedback]]),ke])):p("",!0)])}}}),Te=O(De,[["__scopeId","data-v-5f5ba416"]]);export{Te as default};
