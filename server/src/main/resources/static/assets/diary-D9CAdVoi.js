import{v as s}from"./index-CmMBerzw.js";const t=s.create({baseURL:"https://moodTracker.online:443/api/diary",withCredentials:!0}),o=async(a,e)=>{try{const r=await t.get(`/searchByKeword/${a}`,{params:{searchWord:e}});return console.log("searchDiary response: ",r),r.data.data.resultCode&&r.data.data.resultCode!=="FAIL"?[]:r.data.data}catch(r){return console.log("searchDiary error: ",r),[]}},n=async(a,e)=>{try{const r=await t.get(`/searchByDate/${a}/date`,{params:{submitDate:e}});return console.log("searchDiaryByDate response: ",r),r.data.data.resultCode&&r.data.data.resultCode!=="FAIL"?null:r.data.data}catch(r){return console.log("searchDiaryByDate error: ",r),null}},c=async(a,e)=>{try{const r=await t.post(`/submit/${a}`,e);return console.log("writeDiary response: ",r),r.data.data.resultCode==="SUCCESS"}catch(r){return console.log("writeDiary error: ",r),!1}},d=async(a,e)=>{try{const r=await t.get(`/exists/${a}`,{params:{searchDate:e}});return console.log("hasDiary response: ",r),!(r.data.data.resultCode&&r.data.data.resultCode==="FAIL")}catch(r){return console.log("hasDiary error: ",r),!1}},l={searchDiaryByKeyword:o,searchDiaryByDate:n,createDiary:c,hasDiary:d};export{l as d};
