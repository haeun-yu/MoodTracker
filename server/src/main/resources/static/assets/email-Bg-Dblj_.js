import{b as t}from"./auth-wfKwW2uC.js";const a=t.create({baseURL:"http://moodTracker.online:8081/api/email",withCredentials:!0}),s=async r=>{try{return(await a.get("/mailSend",{params:r})).data.data.resultCode!=="SUCCESS"}catch(e){return console.log("sendVerificationEmail error: ",e),!1}},o=async r=>{try{return(await a.get("/mailCheck",{params:r})).data.data.resultCode!=="SUCCESS"}catch(e){return console.log("checkVerificationCode error: ",e),!1}},i={sendVerificationEmail:s,checkVerificationCode:o};export{i as e};
