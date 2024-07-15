var ct=Object.defineProperty;var lt=(t,n,e)=>n in t?ct(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var A=(t,n,e)=>lt(t,typeof n!="symbol"?n+"":n,e);import{e as dt,f as D,i as ut,h as ft,o as m,c as C,a as u,F as ht,j as gt,k as T,t as L,l as k,v as U,n as _t,p as Et,g as pt,d as P,_ as mt}from"./index-BUPphU5p.js";const Ct="/images/stamp.svg",vt="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const yt=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Rt(t,n,e,s){let o=t<12?"AM":"PM";return s&&(o=o.split("").reduce((i,a)=>i+=`${a}.`,"")),e?o.toLowerCase():o}function y(t){const n=["th","st","nd","rd"],e=t%100;return t+(n[(e-20)%10]||n[e]||n[0])}function St(t,n,e={}){var s;const o=t.getFullYear(),i=t.getMonth(),a=t.getDate(),r=t.getHours(),d=t.getMinutes(),h=t.getSeconds(),p=t.getMilliseconds(),f=t.getDay(),c=(s=e.customMeridiem)!=null?s:Rt,l={Yo:()=>y(o),YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>i+1,Mo:()=>y(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(e.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(e.locales,{month:"long"}),D:()=>String(a),Do:()=>y(a),DD:()=>`${a}`.padStart(2,"0"),H:()=>String(r),Ho:()=>y(r),HH:()=>`${r}`.padStart(2,"0"),h:()=>`${r%12||12}`.padStart(1,"0"),ho:()=>y(r%12||12),hh:()=>`${r%12||12}`.padStart(2,"0"),m:()=>String(d),mo:()=>y(d),mm:()=>`${d}`.padStart(2,"0"),s:()=>String(h),so:()=>y(h),ss:()=>`${h}`.padStart(2,"0"),SSS:()=>`${p}`.padStart(3,"0"),d:()=>f,dd:()=>t.toLocaleDateString(e.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(e.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(e.locales,{weekday:"long"}),A:()=>c(r,d),AA:()=>c(r,d,!1,!0),a:()=>c(r,d,!0),aa:()=>c(r,d,!0,!0)};return n.replace(yt,(E,g)=>{var O,w;return(w=g??((O=l[E])==null?void 0:O.call(l)))!=null?w:E})}var F;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(F||(F={}));/**
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
 */var Y;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(Y||(Y={}));var B;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(B||(B={}));/**
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
 */const K=["user","model","function","system"];var j;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(j||(j={}));var q;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(q||(q={}));var V;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(V||(V={}));var J;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(J||(J={}));var $;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})($||($={}));var W;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(W||(W={}));var X;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(X||(X={}));/**
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
 */class _ extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class I extends _{constructor(n,e){super(n),this.response=e}}class st extends _{constructor(n,e,s,o){super(n),this.status=e,this.statusText=s,this.errorDetails=o}}class R extends _{}/**
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
 */const Ot="https://generativelanguage.googleapis.com",It="v1beta",wt="0.14.1",At="genai-js";var S;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(S||(S={}));class Tt{constructor(n,e,s,o,i){this.model=n,this.task=e,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,e;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||It;let i=`${((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||Ot}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Nt(t){const n=[];return t!=null&&t.apiClient&&n.push(t.apiClient),n.push(`${At}/${wt}`),n.join(" ")}async function bt(t){var n;const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",Nt(t.requestOptions)),e.append("x-goog-api-key",t.apiKey);let s=(n=t.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new R(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new R(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new R(`Header name ${o} can only be set using the apiClient field`);e.append(o,i)}}return e}async function xt(t,n,e,s,o,i){const a=new Tt(t,n,e,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Gt(i)),{method:"POST",headers:await bt(a),body:o})}}async function x(t,n,e,s,o,i,a=fetch){const{url:r,fetchOptions:d}=await xt(t,n,e,s,o,i);return Mt(r,d,a)}async function Mt(t,n,e=fetch){let s;try{s=await e(t,n)}catch(o){Dt(o,t)}return s.ok||await Lt(s,t),s}function Dt(t,n){let e=t;throw t instanceof st||t instanceof R||(e=new _(`Error fetching from ${n.toString()}: ${t.message}`),e.stack=t.stack),e}async function Lt(t,n){let e="",s;try{const o=await t.json();e=o.error.message,o.error.details&&(e+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new st(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${e}`,t.status,t.statusText,s)}function Gt(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,s=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=s}return n}/**
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
 */function H(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new I(`${v(t)}`,t);return $t(t)}else if(t.promptFeedback)throw new I(`Text not available. ${v(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new I(`${v(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Q(t)[0]}else if(t.promptFeedback)throw new I(`Function call not available. ${v(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new I(`${v(t)}`,t);return Q(t)}else if(t.promptFeedback)throw new I(`Function call not available. ${v(t)}`,t)},t}function $t(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```python\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Q(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Ht=[$.RECITATION,$.SAFETY];function G(t){return!!t.finishReason&&Ht.includes(t.finishReason)}function v(t){var n,e,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];G(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function N(t){return this instanceof N?(this.v=t,this):new N(t)}function kt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(t,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(l){return new Promise(function(E,g){i.push([c,l,E,g])>1||r(c,l)})})}function r(c,l){try{d(s[c](l))}catch(E){f(i[0][3],E)}}function d(c){c.value instanceof N?Promise.resolve(c.value.v).then(h,p):f(i[0][2],c)}function h(c){r("next",c)}function p(c){r("throw",c)}function f(c,l){c(l),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ut(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=Yt(n),[s,o]=e.tee();return{stream:Ft(s),response:Pt(o)}}async function Pt(t){const n=[],e=t.getReader();for(;;){const{done:s,value:o}=await e.read();if(s)return H(Bt(n));n.push(o)}}function Ft(t){return kt(this,arguments,function*(){const e=t.getReader();for(;;){const{value:s,done:o}=yield N(e.read());if(o)break;yield yield N(H(s))}})}function Yt(t){const n=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new _("Failed to parse stream"));return}s.close();return}o+=a;let d=o.match(z),h;for(;d;){try{h=JSON.parse(d[1])}catch{s.error(new _(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(h),o=o.substring(d[0].length),d=o.match(z)}return i()})}}})}function Bt(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(e.candidates||(e.candidates=[]),e.candidates[i]||(e.candidates[i]={index:o.index}),e.candidates[i].citationMetadata=o.citationMetadata,e.candidates[i].finishReason=o.finishReason,e.candidates[i].finishMessage=o.finishMessage,e.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){e.candidates[i].content||(e.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),e.candidates[i].content.parts.push(a)}}s.usageMetadata&&(e.usageMetadata=s.usageMetadata)}return e}/**
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
 */async function ot(t,n,e,s){const o=await x(n,S.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(e),s);return Ut(o)}async function it(t,n,e,s){const i=await(await x(n,S.GENERATE_CONTENT,t,!1,JSON.stringify(e),s)).json();return{response:H(i)}}/**
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
 */function at(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function b(t){let n=[];if(typeof t=="string")n=[{text:t}];else for(const e of t)typeof e=="string"?n.push({text:e}):n.push(e);return Kt(n)}function Kt(t){const n={role:"user",parts:[]},e={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(e.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new _("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new _("No content is provided for sending chat message.");return s?n:e}function jt(t,n){let e={};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new R("CountTokensRequest must have one of contents or generateContentRequest, not both.");e=Object.assign({},t)}else if(s)e=Object.assign({},t),e.generateContentRequest.model=n;else{const o=b(t);e.contents=[o]}return e}function Z(t){let n;return t.contents?n=t:n={contents:[b(t)]},t.systemInstruction&&(n.systemInstruction=at(t.systemInstruction)),n}function qt(t){return typeof t=="string"||Array.isArray(t)?{content:b(t)}:t}/**
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
 */const tt=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Vt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Jt(t){let n=!1;for(const e of t){const{role:s,parts:o}=e;if(!n&&s!=="user")throw new _(`First content should be with role 'user', got ${s}`);if(!K.includes(s))throw new _(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(K)}`);if(!Array.isArray(o))throw new _("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new _("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const d of tt)d in r&&(i[d]+=1);const a=Vt[s];for(const r of tt)if(!a.includes(r)&&i[r]>0)throw new _(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
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
 */const et="SILENT_ERROR";class Wt{constructor(n,e,s,o){this.model=e,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(Jt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,s,o,i,a,r;await this._sendPromise;const d=b(n),h={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]};let p;return this._sendPromise=this._sendPromise.then(()=>it(this._apiKey,this.model,h,this.requestOptions)).then(f=>{var c;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(d);const l=Object.assign({parts:[],role:"model"},(c=f.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(l)}else{const l=v(f.response);l&&console.warn(`sendMessage() was unsuccessful. ${l}. Inspect response object for details.`)}p=f}),await this._sendPromise,p}async sendMessageStream(n){var e,s,o,i,a,r;await this._sendPromise;const d=b(n),h={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]},p=ot(this._apiKey,this.model,h,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>p).catch(f=>{throw new Error(et)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(d);const c=Object.assign({},f.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=v(f);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(f=>{f.message!==et&&console.error(f)}),p}}/**
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
 */async function Xt(t,n,e,s){return(await x(n,S.COUNT_TOKENS,t,!1,JSON.stringify(e),s)).json()}/**
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
 */async function Qt(t,n,e,s){return(await x(n,S.EMBED_CONTENT,t,!1,JSON.stringify(e),s)).json()}async function zt(t,n,e,s){const o=e.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await x(n,S.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class nt{constructor(n,e,s){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=at(e.systemInstruction),this.cachedContent=e.cachedContent,this.requestOptions=s||{}}async generateContent(n){var e;const s=Z(n);return it(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}async generateContentStream(n){var e;const s=Z(n);return ot(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}startChat(n){var e;return new Wt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},n),this.requestOptions)}async countTokens(n){const e=jt(n,this.model);return Xt(this.apiKey,this.model,e,this.requestOptions)}async embedContent(n){const e=qt(n);return Qt(this.apiKey,this.model,e,this.requestOptions)}async batchEmbedContents(n){return zt(this.apiKey,this.model,n,this.requestOptions)}}/**
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
 */class Zt{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new nt(this.apiKey,n,e)}getGenerativeModelFromCachedContent(n,e){if(!n.name)throw new R("Cached content must contain a `name` field.");if(!n.model)throw new R("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new nt(this.apiKey,s,e)}}var te={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ee=te.VITE_GEMINI_KEY;class ne{constructor(n){A(this,"genAI",null);A(this,"model",null);A(this,"handleResult",()=>{});A(this,"generate",async n=>{try{const o=(await this.model.generateContent(n)).response.text();this.handleResult(o)}catch(e){console.log(e.message)}});this.handleResult=n,this.genAI=new Zt(ee),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}const M=t=>(Et("data-v-0cbd39c7"),t=t(),pt(),t),se={class:"flex items-center justify-between"},oe={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},ie=M(()=>u("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),ae={class:"grid grid-cols-3"},re=["onClick"],ce=["src"],le=M(()=>u("article",null,null,-1)),de={key:1,class:"w-[60%] fade-in relative"},ue={class:"diary-container px-[40px] py-[30px]"},fe={class:"w-full flex items-end justify-between text-[#484848]"},he={class:"flex flex-col gap-[20px]"},ge={class:"text-lg-bold"},_e=M(()=>u("p",{class:"text-lg-regular"},[P(" 오늘은 어떤 하루를 보내셨나요? "),u("br"),P(" 하루를 기록해보세요! ")],-1)),Ee={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},pe=["src"],me={class:"relative w-full"},Ce=["disable"],ve={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},ye={key:0,class:"absolute top-[-80px] right-[-50px]"},Re=M(()=>u("img",{src:Ct,alt:"diary",class:"w-full"},null,-1)),Se=[Re],Oe={key:0,class:"flex justify-end mt-[20px]"},Ie=["disabled"],we={key:0,src:vt,class:"w-[30px] animate-spin"},Ae={key:1},Te={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},Ne={class:"w-full"},be={class:"text-lg-regular"},xe=M(()=>u("div",{class:"w-full text-end"},[u("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),Me=dt({__name:"TodayView",setup(t){const n=["Happy","Angry","Sad","IDK","Exhausted","Panicked","Blue","Upset","Peaceful"],e={name:"아무개"},s=D({date:"",emotion:"",content:"",feedback:""}),o=D(null),i=D(!1),a=D(!1);ut(()=>{o.value=new ne(p),s.value.date=St(new Date,"YYYY-MM-DD")}),ft(()=>s.value.content,l=>{l.length>1e3&&(s.value.content=l.slice(0,1e3))});const r=()=>{const l=new Date,E=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],g=l.getFullYear(),O=l.getMonth()+1,w=l.getDate(),rt=E[l.getDay()];return`${g}년 ${O}월 ${w}일 ${rt}`},d=l=>{s.value.emotion=l},h=()=>{i.value||(i.value=!0,f())},p=l=>{s.value.feedback=l,c()},f=()=>{const l=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘.
  너가 준 내용 그대로 일기 작성자에게 보내줄거야.
  일기의 있는 내용으로 감정을 더 자세하게 분석해줘도 좋을 것 같아. (최대 1000자)
  선택한 감정: ${s.value.emotion}, 일기의 내용: ${s.value.content}`;o.value.generate(l)},c=()=>{console.log("Submit Diary: ",s.value),i.value=!1,a.value=!0};return(l,E)=>(m(),C("div",se,[a.value?T("",!0):(m(),C("section",oe,[ie,u("article",ae,[(m(),C(ht,null,gt(n,(g,O)=>u("button",{key:O,class:_t(["emotion-box",s.value.emotion===g?"bg-[#D0A7EB]":"bg-white"]),onClick:w=>d(g)},[u("img",{src:`/icons/emotions/${g}.svg`,alt:"emotion",class:"w-[60px]"},null,8,ce)],10,re)),64))]),le])),s.value.emotion?(m(),C("section",de,[u("article",ue,[u("div",fe,[u("div",he,[u("label",ge,L(r()),1),_e]),u("span",Ee,[u("img",{src:`/icons/emotions/${s.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,pe),u("p",null,L(s.value.emotion),1)])]),u("div",me,[k(u("textarea",{"onUpdate:modelValue":E[0]||(E[0]=g=>s.value.content=g),class:"h-[calc(45vh)]",disable:a.value},null,8,Ce),[[U,s.value.content]]),u("p",ve,L(s.value.content.length)+"/1000 ",1)]),a.value?(m(),C("div",ye,Se)):T("",!0)]),a.value?T("",!0):(m(),C("div",Oe,[u("button",{class:"btn-primary p-[10px]",onClick:h,disabled:i.value},[i.value?(m(),C("img",we)):(m(),C("p",Ae,"Submit"))],8,Ie)]))])):T("",!0),a.value?(m(),C("section",Te,[u("div",Ne,[u("p",be,"To. "+L(e.name),1)]),k(u("textarea",{"onUpdate:modelValue":E[1]||(E[1]=g=>s.value.feedback=g),class:"h-[calc(50vh)]",disabled:""},null,512),[[U,s.value.feedback]]),xe])):T("",!0)]))}}),Ge=mt(Me,[["__scopeId","data-v-0cbd39c7"]]);export{Ge as default};
