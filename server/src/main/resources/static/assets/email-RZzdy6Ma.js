import{v as o}from"./index-BJb9-PwR.js";const a=o.create({baseURL:"https://moodTracker.online:443/api/email",withCredentials:!0}),t=async r=>{try{const e=await a.get("/mailSend",{params:r});return console.log("sendVerificationEmail response: ",e),e.data.data.resultCode!=="SUCCESS"}catch(e){return console.log("sendVerificationEmail error: ",e),!1}},s=async r=>{try{const e=await a.get("/mailCheck",{params:r});return console.log("checkVerificationCode response: ",e),e.data.data.resultCode!=="SUCCESS"}catch(e){return console.log("checkVerificationCode error: ",e),!1}},i={sendVerificationEmail:t,checkVerificationCode:s};export{i as e};
