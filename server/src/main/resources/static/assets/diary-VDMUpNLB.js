import{v as s}from"./index-J8-6Xeh-.js";const t=s.create({baseURL:"http://moodTracker.online:8081/api/diary",withCredentials:!0}),o=async(e,a)=>{try{const r=await t.get(`/searchByKeword/${e}`,{params:{searchWord:a}});return console.log("searchDiary response: ",r),r.data.data.resultCode!=="FAIL"?[]:r.data.data}catch(r){return console.log("searchDiary error: ",r),[]}},n=async(e,a)=>{try{const r=await t.get(`/searchByDate/${e}/date`,{params:{submitDate:a}});return console.log("searchDiaryByDate response: ",r),r.data.data.resultCode!=="FAIL"?null:r.data.data}catch(r){return console.log("searchDiaryByDate error: ",r),null}},c=async(e,a)=>{try{const r=await t.post(`/submit/${e}`,a);return console.log("writeDiary response: ",r),r.data.data.resultCode==="SUCCESS"}catch(r){return console.log("writeDiary error: ",r),!1}},l={searchDiaryByKeyword:o,searchDiaryByDate:n,createDiary:c};export{l as d};
