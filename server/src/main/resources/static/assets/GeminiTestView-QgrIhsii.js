import{d as m,r as l,m as _,c as v,e,B as u,C as d,t as h,h as f,p as x,j as b,_ as B}from"./index-_11a-uGJ.js";import{G as w}from"./gemini-DwKNDCid.js";const g=t=>(x("data-v-188c01a8"),t=t(),b(),t),G={class:"flex items-center justify-between"},S={class:"relative w-full"},V={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},k=g(()=>e("p",null,"Submit",-1)),y=[k],I=m({__name:"GeminiTestView",setup(t){const s=l(""),o=l(""),i=l(null);_(async()=>{i.value=new w(p)});const p=c=>{o.value=c},r=()=>{i.value.generate(s.value)};return(c,a)=>(f(),v("div",G,[e("div",S,[u(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),class:"h-[calc(45vh)]"},null,512),[[d,s.value]]),e("p",V,h(s.value.length)+"/1000 ",1)]),e("button",{class:"btn-primary p-[10px]",onClick:r},y),u(e("textarea",{"onUpdate:modelValue":a[1]||(a[1]=n=>o.value=n),class:"h-[calc(50vh)]",disabled:""},null,512),[[d,o.value]])]))}}),j=B(I,[["__scopeId","data-v-188c01a8"]]);export{j as default};
