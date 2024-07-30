import{d as z,r as o,o as Q,q as P,c as r,e,t as d,h as i,u as U,m as Z,a as F,F as b,x as C,f as $,w as N,y as ee,s as V,n as te,g as se,z as ae,A as le,i as W,p as ne,j as oe,_ as ce}from"./index-BA8WpGnf.js";import{c as w}from"./calendar-CNw868Ni.js";import{C as Y,D as ue,A as ie,p as re,a as de}from"./chart-CU4pDdqY.js";import{D as _e}from"./DiaryModal-Cbs_PBrS.js";const ve={class:"relative flex flex-col items-center justify-center h-full rounded-lg"},pe={class:"absolute flex flex-col items-center justify-center inset-0 text-white w-[130px]"},he={class:"text-2xl-bold"},xe=z({__name:"DoughnutChart",props:{monthlyCount:{},endOfDay:{}},setup(x){Y.register(ue,ie,re,de);const v=x,f=o(null);let p=null;const m=()=>{p&&p.destroy(),f.value&&(p=new Y(f.value,{type:"doughnut",data:{datasets:[{data:[v.monthlyCount,v.endOfDay-v.monthlyCount],backgroundColor:["#a78bfa","#e5e7eb"],borderWidth:0,borderRadius:5}]},options:{cutout:"80%",rotation:-150,circumference:300,plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}))};return Q(()=>{m()}),P([()=>v.monthlyCount,()=>v.endOfDay],m),(g,O)=>(i(),r("div",ve,[e("canvas",{ref_key:"doughnutChart",ref:f,class:"w-[130px]"},null,512),e("div",pe,[e("div",he,d(g.monthlyCount)+"/"+d(g.endOfDay),1)])]))}}),_=x=>(ne("data-v-443d88ec"),x=x(),oe(),x),fe=_(()=>e("h1",{class:"text-4xl-bold mb-[10px]"},"Calendar",-1)),me={class:"flex justify-between"},ge={class:"w-[70%] calendar-container"},ye={class:"calendar-box"},we={class:"text-center w-full"},be={class:"th"},Ce=["onClick"],De={class:"w-full h-full flex flex-col justify-between p-[5px]"},ke={class:"text-start text-sm-bold ml-[3px]"},$e={class:"w-full flex items-center justify-center"},Oe=["src"],Me=_(()=>e("span",null,null,-1)),Ae={class:"flex flex-col items-center gap-[20px] w-[27%]"},Ie={class:"boxs w-full text-2xl-bold items-center"},Se={class:"boxs text-base-medium"},je=_(()=>e("p",null,"최장 연속 기록",-1)),Ee={class:"text-center"},Re={class:"boxs text-base-medium"},Be=_(()=>e("p",null,"주간 평균 기록",-1)),Le={class:"text-center"},Te={class:"boxs2 text-base-medium"},Fe=_(()=>e("p",{class:"mb-[10px]"},"이달 작성 횟수",-1)),Ne={class:"flex items-end justify-center"},Ve=_(()=>e("p",null,"회",-1)),We={class:"w-[28%]"},Ye={class:"flex flex-col gap-[13px] py-[10px] border-b-[1.5px] border-black"},ze=_(()=>e("div",{class:"boxs text-2xl-bold text-center"},"이달의 감정",-1)),Pe={class:"boxs2 gap-[15px]"},qe=["src"],Ke={class:"w-full"},Xe={class:"w-full flex justify-end"},Ge={class:"mt-[10px] w-full shadow-md bg-white p-[20px] rounded-[20px]"},He={class:"bg-[#B49BC5] p-[20px] text-white rounded-[20px] flex flex-col items-center gap-[20px]"},Je=_(()=>e("p",{class:"text-xl-medium text-center"},"오늘의 감정을 기록하세요",-1)),Qe=2001,Ue=1,Ze=z({__name:"CalendarView",setup(x){const v=te(),{addToast:f}=U(),p=o(null),m=o([]),g=o(null),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=o(0),s=o(0),h=o(null),M=o([]),A=o(0),I=o(0),S=o(0),j=o([]),E=o(),D=o(!1);Z(async()=>{await F.checkLogin()||(f({message:"로그인이 필요합니다."}),v.push("/login")),h.value=await F.getInformation(),a.value=new Date().getFullYear(),s.value=new Date().getMonth()+1,B(),await R()}),P([a,s],async()=>{B(),await R()});const R=async()=>{M.value=await w.getDiaryList(h.value.name,`${a.value}-${s.value}`),j.value=await w.getEmotionCount(h.value.name,`${a.value}-${s.value}`),S.value=await w.getMonthlyCount(h.value.name,`${a.value}-${s.value}`),A.value=await w.getLongestConsecutive(h.value.name,`${a.value}-${s.value}`),I.value=await w.getWeeklyAverage(h.value.name,`${a.value}-${s.value}`)},B=()=>{g.value=K(a.value,s.value),p.value=k(a.value,s.value),q()},q=()=>{m.value=[];const l=Math.ceil((p.value+g.value)/7);let n=1;for(let c=0;c<l;c++){let t=[];for(let u=0;u<7;u++)c==0&&u<g.value?t.push(0):n<=p.value?(t.push(n),n++):t.push(0);m.value.push(t)}},k=(l,n)=>{switch(n){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 4:case 6:case 9:case 11:return 30;case 2:return l%4==0&&l%100!=0||l%400==0?29:28;default:return console.log("unknown month "+n),0}},K=(l,n)=>{let c=Qe,t=1,u=Ue;for(;c<l||c===l&&t<n;)u+=k(c,t),t++,t>12&&(t=1,c++);return u%7},X=()=>{s.value===1?(a.value--,s.value=12):s.value--},G=()=>{s.value===12?(a.value++,s.value=1):s.value++},L=l=>l===0?null:M.value.find(c=>{const t=new Date(c.createdAt);return t.getFullYear()===a.value&&t.getMonth()+1===s.value&&t.getDate()===l})||null,H=async l=>{if(l===0)return;const n=await w.getDiary(h.value.name,`${a.value}-${s.value}-${l}`);n?(E.value=n,D.value=!0):f({message:"작성된 일기가 없습니다."})};return(l,n)=>{const c=se("RouterLink");return i(),r(b,null,[e("div",null,[fe,e("div",me,[e("section",ge,[e("article",ye,[e("table",we,[e("thead",null,[e("tr",null,[(i(),r(b,null,C(O,(t,u)=>e("th",{key:u,class:"text-sm-bold"},[e("p",be,d(t),1)])),64))])]),e("tbody",null,[(i(!0),r(b,null,C(m.value,(t,u)=>(i(),r("tr",{key:u},[(i(!0),r(b,null,C(t,(y,J)=>{var T;return i(),r("td",{key:J,class:ae(["td",y===0?"bg-[#DDDDDD]":"bg-white cursor-pointer"]),onClick:et=>H(y)},[e("div",De,[e("p",ke,d(y!==0?y:""),1),e("div",$e,[L(y)?(i(),r("img",{key:0,class:"w-[40%]",src:"/icons/emotions/"+((T=L(y))==null?void 0:T.emotion)+".svg",alt:"emotion"},null,8,Oe)):V("",!0)]),Me])],10,Ce)}),128))]))),128))])])]),e("article",Ae,[e("div",Ie,d(a.value)+"/"+d(s.value),1),e("div",{class:"w-full flex items-center gap-[10px] text-base-medium"},[e("button",{class:"boxs items-center",onClick:X},"지난 달"),e("button",{class:"boxs items-center",onClick:G},"다음 달")]),e("div",Se,[je,e("p",Ee,d(A.value)+"일",1)]),e("div",Re,[Be,e("p",Le,d(I.value)+"일",1)]),e("div",Te,[Fe,e("div",Ne,[$(xe,{monthlyCount:S.value,endOfDay:k(a.value,s.value)},null,8,["monthlyCount","endOfDay"]),Ve])])])]),e("section",We,[e("article",Ye,[ze,e("div",Pe,[(i(!0),r(b,null,C(j.value,(t,u)=>(i(),r("div",{key:u,class:"flex items-center gap-[10px] px-[20px]"},[e("img",{class:"w-[40px]",src:"/icons/emotions/"+t.emotion+".svg",alt:"emotion"},null,8,qe),e("div",Ke,[e("div",{class:"bg-white h-[20px] rounded-r-[10px] mt-[5px]",style:le({width:t.count/30*100+"%"})},null,4),e("p",null,d(t.emotion)+"/"+d(t.count)+"회",1)])]))),128))]),e("div",Xe,[$(c,{to:"/report/"+a.value+"-"+s.value,class:"btn-route"},{default:N(()=>[W("그래프 보러 가기")]),_:1},8,["to"])])]),e("article",Ge,[e("div",He,[Je,$(c,{to:"/today",class:"bg-white text-[#826C90] py-[5px] px-[20px] rounded-[10px] text-center text-lg-medium"},{default:N(()=>[W(" 기록하러 가기 ")]),_:1})])])])])]),D.value?(i(),ee(_e,{key:0,diary:E.value,onClose:n[0]||(n[0]=t=>D.value=!1)},null,8,["diary"])):V("",!0)],64)}}}),nt=ce(Ze,[["__scopeId","data-v-443d88ec"]]);export{nt as default};
