var dt=Object.defineProperty;var ut=(t,n,e)=>n in t?dt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var A=(t,n,e)=>ut(t,typeof n!="symbol"?n+"":n,e);import{d as ft,u as ht,r as D,l as gt,n as _t,c as C,b as d,F as pt,s as mt,q as T,t as L,x as P,y as F,m as Et,g as v,v as Ct,p as vt,i as yt,h as Y,_ as St}from"./index-DUZP2jdm.js";import{a as Rt}from"./auth-CNAqI4To.js";const Ot="/images/stamp.svg",It="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const wt=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function At(t,n,e,s){let o=t<12?"AM":"PM";return s&&(o=o.split("").reduce((i,a)=>i+=`${a}.`,"")),e?o.toLowerCase():o}function R(t){const n=["th","st","nd","rd"],e=t%100;return t+(n[(e-20)%10]||n[e]||n[0])}function Tt(t,n,e={}){var s;const o=t.getFullYear(),i=t.getMonth(),a=t.getDate(),r=t.getHours(),l=t.getMinutes(),g=t.getSeconds(),p=t.getMilliseconds(),u=t.getDay(),c=(s=e.customMeridiem)!=null?s:At,h={Yo:()=>R(o),YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>i+1,Mo:()=>R(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(e.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(e.locales,{month:"long"}),D:()=>String(a),Do:()=>R(a),DD:()=>`${a}`.padStart(2,"0"),H:()=>String(r),Ho:()=>R(r),HH:()=>`${r}`.padStart(2,"0"),h:()=>`${r%12||12}`.padStart(1,"0"),ho:()=>R(r%12||12),hh:()=>`${r%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>R(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(g),so:()=>R(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${p}`.padStart(3,"0"),d:()=>u,dd:()=>t.toLocaleDateString(e.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(e.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(e.locales,{weekday:"long"}),A:()=>c(r,l),AA:()=>c(r,l,!1,!0),a:()=>c(r,l,!0),aa:()=>c(r,l,!0,!0)};return n.replace(wt,(y,f)=>{var E,m;return(m=f??((E=h[y])==null?void 0:E.call(h)))!=null?m:y})}var B;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(B||(B={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(K||(K={}));var q;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(q||(q={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=["user","model","function","system"];var V;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(V||(V={}));var J;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(J||(J={}));var W;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(W||(W={}));var X;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(X||(X={}));var $;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})($||($={}));var Q;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Q||(Q={}));var z;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(z||(z={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class w extends _{constructor(n,e){super(n),this.response=e}}class it extends _{constructor(n,e,s,o){super(n),this.status=e,this.statusText=s,this.errorDetails=o}}class O extends _{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="https://generativelanguage.googleapis.com",xt="v1beta",bt="0.14.1",Mt="genai-js";var I;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(I||(I={}));class Dt{constructor(n,e,s,o,i){this.model=n,this.task=e,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,e;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||xt;let i=`${((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||Nt}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Lt(t){const n=[];return t!=null&&t.apiClient&&n.push(t.apiClient),n.push(`${Mt}/${bt}`),n.join(" ")}async function Gt(t){var n;const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",Lt(t.requestOptions)),e.append("x-goog-api-key",t.apiKey);let s=(n=t.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new O(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new O(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new O(`Header name ${o} can only be set using the apiClient field`);e.append(o,i)}}return e}async function $t(t,n,e,s,o,i){const a=new Dt(t,n,e,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Pt(i)),{method:"POST",headers:await Gt(a),body:o})}}async function b(t,n,e,s,o,i,a=fetch){const{url:r,fetchOptions:l}=await $t(t,n,e,s,o,i);return kt(r,l,a)}async function kt(t,n,e=fetch){let s;try{s=await e(t,n)}catch(o){Ht(o,t)}return s.ok||await Ut(s,t),s}function Ht(t,n){let e=t;throw t instanceof it||t instanceof O||(e=new _(`Error fetching from ${n.toString()}: ${t.message}`),e.stack=t.stack),e}async function Ut(t,n){let e="",s;try{const o=await t.json();e=o.error.message,o.error.details&&(e+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new it(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${e}`,t.status,t.statusText,s)}function Pt(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,s=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=s}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new w(`${S(t)}`,t);return Ft(t)}else if(t.promptFeedback)throw new w(`Text not available. ${S(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new w(`${S(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Z(t)[0]}else if(t.promptFeedback)throw new w(`Function call not available. ${S(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new w(`${S(t)}`,t);return Z(t)}else if(t.promptFeedback)throw new w(`Function call not available. ${S(t)}`,t)},t}function Ft(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```python\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Z(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Yt=[$.RECITATION,$.SAFETY];function G(t){return!!t.finishReason&&Yt.includes(t.finishReason)}function S(t){var n,e,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];G(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function N(t){return this instanceof N?(this.v=t,this):new N(t)}function Bt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(t,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(h){return new Promise(function(y,f){i.push([c,h,y,f])>1||r(c,h)})})}function r(c,h){try{l(s[c](h))}catch(y){u(i[0][3],y)}}function l(c){c.value instanceof N?Promise.resolve(c.value.v).then(g,p):u(i[0][2],c)}function g(c){r("next",c)}function p(c){r("throw",c)}function u(c,h){c(h),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Kt(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=Vt(n),[s,o]=e.tee();return{stream:jt(s),response:qt(o)}}async function qt(t){const n=[],e=t.getReader();for(;;){const{done:s,value:o}=await e.read();if(s)return H(Jt(n));n.push(o)}}function jt(t){return Bt(this,arguments,function*(){const e=t.getReader();for(;;){const{value:s,done:o}=yield N(e.read());if(o)break;yield yield N(H(s))}})}function Vt(t){const n=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new _("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(tt),g;for(;l;){try{g=JSON.parse(l[1])}catch{s.error(new _(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(g),o=o.substring(l[0].length),l=o.match(tt)}return i()})}}})}function Jt(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(e.candidates||(e.candidates=[]),e.candidates[i]||(e.candidates[i]={index:o.index}),e.candidates[i].citationMetadata=o.citationMetadata,e.candidates[i].finishReason=o.finishReason,e.candidates[i].finishMessage=o.finishMessage,e.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){e.candidates[i].content||(e.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),e.candidates[i].content.parts.push(a)}}s.usageMetadata&&(e.usageMetadata=s.usageMetadata)}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,n,e,s){const o=await b(n,I.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(e),s);return Kt(o)}async function rt(t,n,e,s){const i=await(await b(n,I.GENERATE_CONTENT,t,!1,JSON.stringify(e),s)).json();return{response:H(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function x(t){let n=[];if(typeof t=="string")n=[{text:t}];else for(const e of t)typeof e=="string"?n.push({text:e}):n.push(e);return Wt(n)}function Wt(t){const n={role:"user",parts:[]},e={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(e.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new _("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new _("No content is provided for sending chat message.");return s?n:e}function Xt(t,n){let e={};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new O("CountTokensRequest must have one of contents or generateContentRequest, not both.");e=Object.assign({},t)}else if(s)e=Object.assign({},t),e.generateContentRequest.model=n;else{const o=x(t);e.contents=[o]}return e}function et(t){let n;return t.contents?n=t:n={contents:[x(t)]},t.systemInstruction&&(n.systemInstruction=ct(t.systemInstruction)),n}function Qt(t){return typeof t=="string"||Array.isArray(t)?{content:x(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],zt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Zt(t){let n=!1;for(const e of t){const{role:s,parts:o}=e;if(!n&&s!=="user")throw new _(`First content should be with role 'user', got ${s}`);if(!j.includes(s))throw new _(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(j)}`);if(!Array.isArray(o))throw new _("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new _("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of nt)l in r&&(i[l]+=1);const a=zt[s];for(const r of nt)if(!a.includes(r)&&i[r]>0)throw new _(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="SILENT_ERROR";class te{constructor(n,e,s,o){this.model=e,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(Zt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,s,o,i,a,r;await this._sendPromise;const l=x(n),g={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]};let p;return this._sendPromise=this._sendPromise.then(()=>rt(this._apiKey,this.model,g,this.requestOptions)).then(u=>{var c;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(l);const h=Object.assign({parts:[],role:"model"},(c=u.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(h)}else{const h=S(u.response);h&&console.warn(`sendMessage() was unsuccessful. ${h}. Inspect response object for details.`)}p=u}),await this._sendPromise,p}async sendMessageStream(n){var e,s,o,i,a,r;await this._sendPromise;const l=x(n),g={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]},p=at(this._apiKey,this.model,g,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>p).catch(u=>{throw new Error(st)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(l);const c=Object.assign({},u.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=S(u);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(u=>{u.message!==st&&console.error(u)}),p}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,n,e,s){return(await b(n,I.COUNT_TOKENS,t,!1,JSON.stringify(e),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,n,e,s){return(await b(n,I.EMBED_CONTENT,t,!1,JSON.stringify(e),s)).json()}async function se(t,n,e,s){const o=e.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await b(n,I.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(n,e,s){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=ct(e.systemInstruction),this.cachedContent=e.cachedContent,this.requestOptions=s||{}}async generateContent(n){var e;const s=et(n);return rt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}async generateContentStream(n){var e;const s=et(n);return at(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}startChat(n){var e;return new te(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},n),this.requestOptions)}async countTokens(n){const e=Xt(n,this.model);return ee(this.apiKey,this.model,e,this.requestOptions)}async embedContent(n){const e=Qt(n);return ne(this.apiKey,this.model,e,this.requestOptions)}async batchEmbedContents(n){return se(this.apiKey,this.model,n,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ot(this.apiKey,n,e)}getGenerativeModelFromCachedContent(n,e){if(!n.name)throw new O("Cached content must contain a `name` field.");if(!n.model)throw new O("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new ot(this.apiKey,s,e)}}const ie="AIzaSyCXpx3BdoALyxXrn2TTS629kOaOR0POmuI";class ae{constructor(n){A(this,"genAI",null);A(this,"model",null);A(this,"handleResult",()=>{});A(this,"generate",async n=>{try{const o=(await this.model.generateContent(n)).response.text();this.handleResult(o)}catch(e){console.log(e.message)}});this.handleResult=n,this.genAI=new oe(ie),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}const M=t=>(vt("data-v-3e571926"),t=t(),yt(),t),re={class:"flex items-center justify-between"},ce={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},le=M(()=>d("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),de={class:"grid grid-cols-3"},ue=["onClick"],fe=["src"],he=M(()=>d("article",null,null,-1)),ge={key:1,class:"w-[60%] fade-in relative"},_e={class:"diary-container px-[40px] py-[30px]"},pe={class:"w-full flex items-end justify-between text-[#484848]"},me={class:"flex flex-col gap-[20px]"},Ee={class:"text-lg-bold"},Ce=M(()=>d("p",{class:"text-lg-regular"},[Y(" 오늘은 어떤 하루를 보내셨나요? "),d("br"),Y(" 하루를 기록해보세요! ")],-1)),ve={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},ye=["src"],Se={class:"relative w-full"},Re=["disable"],Oe={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},Ie={key:0,class:"absolute top-[-80px] right-[-50px]"},we=M(()=>d("img",{src:Ot,alt:"diary",class:"w-[200px]"},null,-1)),Ae=[we],Te={key:0,class:"flex justify-end mt-[20px]"},Ne=["disabled"],xe={key:0,src:It,class:"w-[30px] animate-spin"},be={key:1},Me={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},De={class:"w-full"},Le={class:"text-lg-regular"},Ge=M(()=>d("div",{class:"w-full text-end"},[d("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),$e=ft({__name:"TodayView",setup(t){const n=Et(),{addToast:e}=ht(),s=["Happy","Angry","Sad","IDK","Exhausted","Panicked","Blue","Upset","Peaceful"],o={name:"아무개"},i=D({date:"",emotion:"",content:"",feedback:""}),a=D(null),r=D(!1),l=D(!1);gt(async()=>{try{(await Rt.checkLogin()).userSeq!==1&&(e({message:"로그인이 필요합니다."}),n.push("/login"))}catch(f){e({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(f)}a.value=new ae(c),i.value.date=Tt(new Date,"YYYY-MM-DD")}),_t(()=>i.value.content,f=>{f.length>1e3&&(i.value.content=f.slice(0,1e3))});const g=()=>{const f=new Date,E=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],m=f.getFullYear(),k=f.getMonth()+1,U=f.getDate(),lt=E[f.getDay()];return`${m}년 ${k}월 ${U}일 ${lt}`},p=f=>{i.value.emotion=f},u=()=>{r.value||(r.value=!0,h())},c=f=>{i.value.feedback=f,y()},h=()=>{const f=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘.
  너가 준 내용 그대로 일기 작성자에게 보내줄거야.
  일기의 있는 내용으로 감정을 더 자세하게 분석해줘도 좋을 것 같아. (최대 1000자)
  선택한 감정: ${i.value.emotion}, 일기의 내용: ${i.value.content}`;a.value.generate(f)},y=()=>{console.log("Submit Diary: ",i.value),r.value=!1,l.value=!0};return(f,E)=>(v(),C("div",re,[l.value?T("",!0):(v(),C("section",ce,[le,d("article",de,[(v(),C(pt,null,mt(s,(m,k)=>d("button",{key:k,class:Ct(["emotion-box",i.value.emotion===m?"bg-[#D0A7EB]":"bg-white"]),onClick:U=>p(m)},[d("img",{src:`/icons/emotions/${m}.svg`,alt:"emotion",class:"w-[60px]"},null,8,fe)],10,ue)),64))]),he])),i.value.emotion?(v(),C("section",ge,[d("article",_e,[d("div",pe,[d("div",me,[d("label",Ee,L(g()),1),Ce]),d("span",ve,[d("img",{src:`/icons/emotions/${i.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,ye),d("p",null,L(i.value.emotion),1)])]),d("div",Se,[P(d("textarea",{"onUpdate:modelValue":E[0]||(E[0]=m=>i.value.content=m),class:"h-[calc(45vh)]",disable:l.value},null,8,Re),[[F,i.value.content]]),d("p",Oe,L(i.value.content.length)+"/1000 ",1)]),l.value?(v(),C("div",Ie,Ae)):T("",!0)]),l.value?T("",!0):(v(),C("div",Te,[d("button",{class:"btn-primary p-[10px]",onClick:u,disabled:r.value},[r.value?(v(),C("img",xe)):(v(),C("p",be,"Submit"))],8,Ne)]))])):T("",!0),l.value?(v(),C("section",Me,[d("div",De,[d("p",Le,"To. "+L(o.name),1)]),P(d("textarea",{"onUpdate:modelValue":E[1]||(E[1]=m=>i.value.feedback=m),class:"h-[calc(50vh)]",disabled:""},null,512),[[F,i.value.feedback]]),Ge])):T("",!0)]))}}),Pe=St($e,[["__scopeId","data-v-3e571926"]]);export{Pe as default};
