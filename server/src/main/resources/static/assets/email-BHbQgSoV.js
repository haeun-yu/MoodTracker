import{b as o}from"./auth-CNAqI4To.js";const a=o.create({baseURL:"http://moodTracker.online:8081/api/email",withCredentials:!0}),t=async r=>{try{return(await a.get("/mailSend",{params:r})).data}catch(e){throw console.log("sendVerificationEmail error: ",e),e}},s=async r=>{try{return(await a.get("/mailCheck",{params:r})).data}catch(e){throw console.log("checkVerificationCode error: ",e),e}},i={sendVerificationEmail:t,checkVerificationCode:s};export{i as e};