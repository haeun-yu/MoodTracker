import{v as s}from"./index-D0f5n01o.js";const t=s.create({baseURL:"https://moodTracker.online:443/api/diary",withCredentials:!0}),o=async(r,e)=>{try{const a=await t.get(`/searchByKeword/${r}`,{params:{searchWord:e}});return console.log("searchDiary response: ",a),a.data.data.resultCode&&a.data.data.resultCode!=="FAIL"?[]:a.data.data}catch(a){return console.log("searchDiary error: ",a),[]}},n=async(r,e)=>{try{const a=await t.get(`/searchByDate/${r}/date`,{params:{submitDate:e}});return console.log("searchDiaryByDate response: ",a),a.data.data.resultCode&&a.data.data.resultCode!=="FAIL"?null:a.data.data}catch(a){return console.log("searchDiaryByDate error: ",a),null}},c=async(r,e)=>{try{const a=await t.post(`/submit/${r}`,e);return console.log("writeDiary response: ",a),a.data.data.resultCode==="SUCCESS"}catch(a){return console.log("writeDiary error: ",a),!1}},d=async(r,e)=>{try{const a=await t.get(`/exists/${r}`,{params:{searchDate:e}});return console.log("hasDiary response: ",a),!(a.data.data.resultCode&&a.data.data.resultCode==="FAIL"||a.data.data.message==="false")}catch(a){return console.log("hasDiary error: ",a),!1}},i={searchDiaryByKeyword:o,searchDiaryByDate:n,createDiary:c,hasDiary:d};export{i as d};
