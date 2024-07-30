import{v as o}from"./index-C27UcYoT.js";const a=o.create({baseURL:"https://moodTracker.online:443/api/calendar",withCredentials:!0}),n=async(t,r)=>{try{const e=await a.get(`/monthly/${t}`,{params:{requestYearMonth:r}});return console.log("getDiaryList response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data:[]}catch(e){return console.error(e),[]}},s=async(t,r)=>{try{const e=await a.get(`/date/${t}`,{params:{submitDate:r}});return console.log("getDiary response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data:null}catch(e){return console.error(e),null}},c=async(t,r)=>{try{const e=await a.get(`/monthly/top3-emotions/${t}`,{params:{requestYearMonth:r}});return console.log("getEmotionCount response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data:[]}catch(e){return console.error(e),[]}},l=async(t,r)=>{try{const e=await a.get(`/monthly/writing-count/${t}`,{params:{requestYearMonth:r}});return console.log("getMonthlyCount response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data.count:0}catch(e){return console.error(e),0}},u=async(t,r)=>{try{const e=await a.get(`/monthly/longest-streak/${t}`,{params:{requestYearMonth:r}});return console.log("getLongestConsecutive response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data.count:0}catch(e){return console.error(e),0}},d=async(t,r)=>{try{const e=await a.get(`/monthly/weekly-average/${t}`,{params:{requestYearMonth:r}});return console.log("getWeeklyAverage response: ",e),e.data.data.resultCode!=="FAIL"?e.data.data.message:0}catch(e){return console.error(e),0}},g={getDiaryList:n,getDiary:s,getEmotionCount:c,getMonthlyCount:l,getLongestConsecutive:u,getWeeklyAverage:d};export{g as c};
