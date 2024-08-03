import{d as z,r as o,o as Q,q as P,c as r,e,t as d,h as i,u as U,m as Z,a as F,F as b,x as C,f as $,w as N,y as ee,s as V,n as te,g as se,z as ae,A as le,i as W,p as ne,j as oe,_ as ce}from"./index-zAt8kbVU.js";import{c as y}from"./calendar-BUcSV3jv.js";import{C as Y,D as ue,A as ie,p as re,a as de}from"./chart-CU4pDdqY.js";import{D as _e}from"./DiaryModal-D0gt5NKv.js";const ve={class:"relative flex flex-col items-center justify-center h-full rounded-lg"},he={class:"absolute flex flex-col items-center justify-center inset-0 text-white w-[130px]"},pe={class:"text-2xl-bold"},xe=z({__name:"DoughnutChart",props:{monthlyCount:{},endOfDay:{}},setup(x){Y.register(ue,ie,re,de);const v=x,f=o(null);let h=null;const m=()=>{h&&h.destroy(),f.value&&(h=new Y(f.value,{type:"doughnut",data:{datasets:[{data:[v.monthlyCount,v.endOfDay-v.monthlyCount],backgroundColor:["#a78bfa","#e5e7eb"],borderWidth:0,borderRadius:5}]},options:{cutout:"80%",rotation:-150,circumference:300,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}))};return Q(()=>{m()}),P([()=>v.monthlyCount,()=>v.endOfDay],m),(g,O)=>(i(),r("div",ve,[e("canvas",{ref_key:"doughnutChart",ref:f,class:"w-[130px]"},null,512),e("div",he,[e("div",pe,d(g.monthlyCount)+"/"+d(g.endOfDay),1)])]))}}),_=x=>(ne("data-v-db733340"),x=x(),oe(),x),fe=_(()=>e("h1",{class:"text-4xl-bold mb-[10px]"},"Calendar",-1)),me={class:"flex justify-between"},ge={class:"w-[70%] calendar-container"},we={class:"calendar-box"},ye={class:"text-center w-full"},be={class:"th"},Ce=["onClick"],De={class:"w-full h-full flex flex-col justify-between p-[5px]"},ke={class:"text-start text-sm-bold ml-[3px]"},$e={class:"w-full flex items-center justify-center"},Oe=["src"],Me=_(()=>e("span",null,null,-1)),je={class:"flex flex-col items-center gap-[20px] w-[27%]"},Ae={class:"boxs w-full text-2xl-bold items-center"},Ie={class:"boxs text-base-medium"},Se=_(()=>e("p",null,"최장 연속 기록",-1)),Be={class:"text-center"},Ee={class:"boxs text-base-medium"},Re=_(()=>e("p",null,"주간 평균 기록",-1)),Le={class:"text-center"},Te={class:"boxs2 text-base-medium"},Fe=_(()=>e("p",{class:"mb-[10px]"},"이달 작성 횟수",-1)),Ne={class:"flex items-end justify-center"},Ve=_(()=>e("p",null,"회",-1)),We={class:"w-[28%]"},Ye={class:"flex flex-col gap-[13px] py-[10px] border-b-[1.5px] border-black"},ze=_(()=>e("div",{class:"boxs text-2xl-bold text-center"},"이달의 감정",-1)),Pe={class:"boxs2 gap-[15px]"},qe=["src"],Ke={class:"w-full"},Xe={class:"mt-[10px] w-full flex flex-col items-start gap-[20px] bg-white shadow-md p-[20px] rounded-[20px]"},Ge=_(()=>e("p",{class:"w-full flex justify-end text-[#B49BC5] text-xl-medium"}," 이 달의 리포트 분석이에요 ",-1)),He={class:"mt-[10px] w-full flex flex-col items-start gap-[20px] bg-[#B49BC5] shadow-md p-[20px] rounded-[20px]"},Je=_(()=>e("p",{class:"w-full text-white text-xl-medium"},"오늘의 감정을 기록하세요",-1)),Qe={class:"w-full flex justify-end"},Ue=2001,Ze=1,et=z({__name:"CalendarView",setup(x){const v=te(),{addToast:f}=U(),h=o(null),m=o([]),g=o(null),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=o(0),s=o(0),p=o(null),M=o([]),j=o(0),A=o(0),I=o(0),S=o([]),B=o(),D=o(!1);Z(async()=>{await F.checkLogin()||(f({message:"로그인이 필요합니다."}),v.push("/login")),p.value=await F.getInformation(),a.value=new Date().getFullYear(),s.value=new Date().getMonth()+1,R(),await E()}),P([a,s],async()=>{R(),await E()});const E=async()=>{M.value=await y.getDiaryList(p.value.name,`${a.value}-${s.value}`),S.value=await y.getEmotionCount(p.value.name,`${a.value}-${s.value}`),I.value=await y.getMonthlyCount(p.value.name,`${a.value}-${s.value}`),j.value=await y.getLongestConsecutive(p.value.name,`${a.value}-${s.value}`),A.value=await y.getWeeklyAverage(p.value.name,`${a.value}-${s.value}`)},R=()=>{g.value=K(a.value,s.value),h.value=k(a.value,s.value),q()},q=()=>{m.value=[];const l=Math.ceil((h.value+g.value)/7);let n=1;for(let c=0;c<l;c++){let t=[];for(let u=0;u<7;u++)c==0&&u<g.value?t.push(0):n<=h.value?(t.push(n),n++):t.push(0);m.value.push(t)}},k=(l,n)=>{switch(n){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 4:case 6:case 9:case 11:return 30;case 2:return l%4==0&&l%100!=0||l%400==0?29:28;default:return console.log("unknown month "+n),0}},K=(l,n)=>{let c=Ue,t=1,u=Ze;for(;c<l||c===l&&t<n;)u+=k(c,t),t++,t>12&&(t=1,c++);return u%7},X=()=>{s.value===1?(a.value--,s.value=12):s.value--},G=()=>{s.value===12?(a.value++,s.value=1):s.value++},L=l=>l===0?null:M.value.find(c=>{const t=new Date(c.createdAt);return t.getFullYear()===a.value&&t.getMonth()+1===s.value&&t.getDate()===l})||null,H=async l=>{if(l===0)return;const n=await y.getDiary(p.value.name,`${a.value}-${s.value}-${l}`);n?(B.value=n,D.value=!0):f({message:"작성된 일기가 없습니다."})};return(l,n)=>{const c=se("RouterLink");return i(),r(b,null,[e("div",null,[fe,e("div",me,[e("section",ge,[e("article",we,[e("table",ye,[e("thead",null,[e("tr",null,[(i(),r(b,null,C(O,(t,u)=>e("th",{key:u,class:"text-sm-bold"},[e("p",be,d(t),1)])),64))])]),e("tbody",null,[(i(!0),r(b,null,C(m.value,(t,u)=>(i(),r("tr",{key:u},[(i(!0),r(b,null,C(t,(w,J)=>{var T;return i(),r("td",{key:J,class:ae(["td",w===0?"bg-[#DDDDDD]":"bg-white cursor-pointer"]),onClick:tt=>H(w)},[e("div",De,[e("p",ke,d(w!==0?w:""),1),e("div",$e,[L(w)?(i(),r("img",{key:0,class:"w-[40%]",src:"/icons/emotions/"+((T=L(w))==null?void 0:T.emotion)+".svg",alt:"emotion"},null,8,Oe)):V("",!0)]),Me])],10,Ce)}),128))]))),128))])])]),e("article",je,[e("div",Ae,d(a.value)+"/"+d(s.value),1),e("div",{class:"w-full flex items-center gap-[10px] text-base-medium"},[e("button",{class:"boxs items-center",onClick:X},"지난 달"),e("button",{class:"boxs items-center",onClick:G},"다음 달")]),e("div",Ie,[Se,e("p",Be,d(j.value)+"일",1)]),e("div",Ee,[Re,e("p",Le,d(A.value)+"일",1)]),e("div",Te,[Fe,e("div",Ne,[$(xe,{monthlyCount:I.value,endOfDay:k(a.value,s.value)},null,8,["monthlyCount","endOfDay"]),Ve])])])]),e("section",We,[e("article",Ye,[ze,e("div",Pe,[(i(!0),r(b,null,C(S.value,(t,u)=>(i(),r("div",{key:u,class:"flex items-center gap-[10px] px-[20px]"},[e("img",{class:"w-[40px]",src:"/icons/emotions/"+t.emotion+".svg",alt:"emotion"},null,8,qe),e("div",Ke,[e("div",{class:"bg-white h-[20px] rounded-r-[10px] mt-[5px]",style:le({width:t.count/30*100+"%"})},null,4),e("p",null,d(t.emotion)+"/"+d(t.count)+"회",1)])]))),128))])]),e("article",Xe,[Ge,$(c,{to:"/report/"+a.value+"-"+s.value,class:"btn-route"},{default:N(()=>[W("리포트 확인하기")]),_:1},8,["to"])]),e("article",He,[Je,e("div",Qe,[$(c,{to:"/today",class:"btn-route2"},{default:N(()=>[W("기록하러 가기")]),_:1})])])])])]),D.value?(i(),ee(_e,{key:0,diary:B.value,onClose:n[0]||(n[0]=t=>D.value=!1)},null,8,["diary"])):V("",!0)],64)}}}),ot=ce(et,[["__scopeId","data-v-db733340"]]);export{ot as default};
