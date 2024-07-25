var ue=Object.defineProperty;var fe=(e,n,t)=>n in e?ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var N=(e,n,t)=>fe(e,typeof n!="symbol"?n+"":n,t);import{d as he,u as ge,r as T,l as _e,n as me,c as C,b as u,F as pe,x as Ee,q as x,t as L,A as F,B as Y,m as ve,g as y,y as Ce,p as ye,i as Se,h as B,_ as Re}from"./index-DUDSh2eE.js";import{a as K}from"./auth-C_aZBYfv.js";import{d as Ie}from"./diary-B0BJJVvr.js";const Oe="/images/stamp.svg",Ae="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const we=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Ne(e,n,t,o){let s=e<12?"AM":"PM";return o&&(s=s.split("").reduce((a,i)=>a+=`${i}.`,"")),t?s.toLowerCase():s}function I(e){const n=["th","st","nd","rd"],t=e%100;return e+(n[(t-20)%10]||n[t]||n[0])}function Te(e,n,t={}){var o;const s=e.getFullYear(),a=e.getMonth(),i=e.getDate(),r=e.getHours(),l=e.getMinutes(),g=e.getSeconds(),m=e.getMilliseconds(),f=e.getDay(),c=(o=t.customMeridiem)!=null?o:Ne,h={Yo:()=>I(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>a+1,Mo:()=>I(a+1),MM:()=>`${a+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(t.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(t.locales,{month:"long"}),D:()=>String(i),Do:()=>I(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(r),Ho:()=>I(r),HH:()=>`${r}`.padStart(2,"0"),h:()=>`${r%12||12}`.padStart(1,"0"),ho:()=>I(r%12||12),hh:()=>`${r%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>I(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(g),so:()=>I(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${m}`.padStart(3,"0"),d:()=>f,dd:()=>e.toLocaleDateString(t.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(t.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(t.locales,{weekday:"long"}),A:()=>c(r,l),AA:()=>c(r,l,!1,!0),a:()=>c(r,l,!0),aa:()=>c(r,l,!0,!0)};return n.replace(we,(S,d)=>{var p,E;return(E=d??((p=h[S])==null?void 0:p.call(h)))!=null?E:S})}var q;(function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"})(q||(q={}));/**
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
 */var j;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(j||(j={}));var V;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(V||(V={}));/**
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
 */const J=["user","model","function","system"];var W;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(W||(W={}));var X;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(X||(X={}));var Q;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Q||(Q={}));var z;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(z||(z={}));var k;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(k||(k={}));var Z;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Z||(Z={}));var ee;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ee||(ee={}));/**
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
 */class _ extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class w extends _{constructor(n,t){super(n),this.response=t}}class re extends _{constructor(n,t,o,s){super(n),this.status=t,this.statusText=o,this.errorDetails=s}}class O extends _{}/**
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
 */const xe="https://generativelanguage.googleapis.com",be="v1beta",Me="0.14.1",De="genai-js";var A;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(A||(A={}));class $e{constructor(n,t,o,s,a){this.model=n,this.task=t,this.apiKey=o,this.stream=s,this.requestOptions=a}toString(){var n,t;const o=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||be;let a=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||xe}/${o}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function Le(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${De}/${Me}`),n.join(" ")}async function Ge(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Le(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let o=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new O(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,a]of o.entries()){if(s==="x-goog-api-key")throw new O(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new O(`Header name ${s} can only be set using the apiClient field`);t.append(s,a)}}return t}async function ke(e,n,t,o,s,a){const i=new $e(e,n,t,o,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},Fe(a)),{method:"POST",headers:await Ge(i),body:s})}}async function D(e,n,t,o,s,a,i=fetch){const{url:r,fetchOptions:l}=await ke(e,n,t,o,s,a);return He(r,l,i)}async function He(e,n,t=fetch){let o;try{o=await t(e,n)}catch(s){Pe(s,e)}return o.ok||await Ue(o,e),o}function Pe(e,n){let t=e;throw e instanceof re||e instanceof O||(t=new _(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function Ue(e,n){let t="",o;try{const s=await e.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new re(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,o)}function Fe(e){const n={};if((e==null?void 0:e.timeout)>=0){const t=new AbortController,o=t.signal;setTimeout(()=>t.abort(),e.timeout),n.signal=o}return n}/**
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
 */function P(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),G(e.candidates[0]))throw new w(`${R(e)}`,e);return Ye(e)}else if(e.promptFeedback)throw new w(`Text not available. ${R(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(e.candidates[0]))throw new w(`${R(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),te(e)[0]}else if(e.promptFeedback)throw new w(`Function call not available. ${R(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),G(e.candidates[0]))throw new w(`${R(e)}`,e);return te(e)}else if(e.promptFeedback)throw new w(`Function call not available. ${R(e)}`,e)},e}function Ye(e){var n,t,o,s;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const i of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```python\n"+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function te(e){var n,t,o,s;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const i of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)i.functionCall&&a.push(i.functionCall);if(a.length>0)return a}const Be=[k.RECITATION,k.SAFETY];function G(e){return!!e.finishReason&&Be.includes(e.finishReason)}function R(e){var n,t,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const a=e.candidates[0];G(a)&&(s+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(s+=`: ${a.finishMessage}`))}return s}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function Ke(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),s,a=[];return s={},i("next"),i("throw"),i("return"),s[Symbol.asyncIterator]=function(){return this},s;function i(c){o[c]&&(s[c]=function(h){return new Promise(function(S,d){a.push([c,h,S,d])>1||r(c,h)})})}function r(c,h){try{l(o[c](h))}catch(S){f(a[0][3],S)}}function l(c){c.value instanceof b?Promise.resolve(c.value.v).then(g,m):f(a[0][2],c)}function g(c){r("next",c)}function m(c){r("throw",c)}function f(c,h){c(h),a.shift(),a.length&&r(a[0][0],a[0][1])}}/**
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
 */const ne=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function qe(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Je(n),[o,s]=t.tee();return{stream:Ve(o),response:je(s)}}async function je(e){const n=[],t=e.getReader();for(;;){const{done:o,value:s}=await t.read();if(o)return P(We(n));n.push(s)}}function Ve(e){return Ke(this,arguments,function*(){const t=e.getReader();for(;;){const{value:o,done:s}=yield b(t.read());if(s)break;yield yield b(P(o))}})}function Je(e){const n=e.getReader();return new ReadableStream({start(o){let s="";return a();function a(){return n.read().then(({value:i,done:r})=>{if(r){if(s.trim()){o.error(new _("Failed to parse stream"));return}o.close();return}s+=i;let l=s.match(ne),g;for(;l;){try{g=JSON.parse(l[1])}catch{o.error(new _(`Error parsing JSON response: "${l[1]}"`));return}o.enqueue(g),s=s.substring(l[0].length),l=s.match(ne)}return a()})}}})}function We(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const o of e){if(o.candidates)for(const s of o.candidates){const a=s.index;if(t.candidates||(t.candidates=[]),t.candidates[a]||(t.candidates[a]={index:s.index}),t.candidates[a].citationMetadata=s.citationMetadata,t.candidates[a].finishReason=s.finishReason,t.candidates[a].finishMessage=s.finishMessage,t.candidates[a].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[a].content||(t.candidates[a].content={role:s.content.role||"user",parts:[]});const i={};for(const r of s.content.parts)r.text&&(i.text=r.text),r.functionCall&&(i.functionCall=r.functionCall),r.executableCode&&(i.executableCode=r.executableCode),r.codeExecutionResult&&(i.codeExecutionResult=r.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),t.candidates[a].content.parts.push(i)}}o.usageMetadata&&(t.usageMetadata=o.usageMetadata)}return t}/**
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
 */async function ce(e,n,t,o){const s=await D(n,A.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),o);return qe(s)}async function le(e,n,t,o){const a=await(await D(n,A.GENERATE_CONTENT,e,!1,JSON.stringify(t),o)).json();return{response:P(a)}}/**
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
 */function de(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function M(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return Xe(n)}function Xe(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let o=!1,s=!1;for(const a of e)"functionResponse"in a?(t.parts.push(a),s=!0):(n.parts.push(a),o=!0);if(o&&s)throw new _("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new _("No content is provided for sending chat message.");return o?n:t}function Qe(e,n){let t={};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new O("CountTokensRequest must have one of contents or generateContentRequest, not both.");t=Object.assign({},e)}else if(o)t=Object.assign({},e),t.generateContentRequest.model=n;else{const s=M(e);t.contents=[s]}return t}function se(e){let n;return e.contents?n=e:n={contents:[M(e)]},e.systemInstruction&&(n.systemInstruction=de(e.systemInstruction)),n}function ze(e){return typeof e=="string"||Array.isArray(e)?{content:M(e)}:e}/**
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
 */const oe=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ze={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function et(e){let n=!1;for(const t of e){const{role:o,parts:s}=t;if(!n&&o!=="user")throw new _(`First content should be with role 'user', got ${o}`);if(!J.includes(o))throw new _(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(J)}`);if(!Array.isArray(s))throw new _("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new _("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of s)for(const l of oe)l in r&&(a[l]+=1);const i=Ze[o];for(const r of oe)if(!i.includes(r)&&a[r]>0)throw new _(`Content with role '${o}' can't contain '${r}' part`);n=!0}}/**
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
 */const ae="SILENT_ERROR";class tt{constructor(n,t,o,s){this.model=t,this.params=o,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,o!=null&&o.history&&(et(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var t,o,s,a,i,r;await this._sendPromise;const l=M(n),g={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]};let m;return this._sendPromise=this._sendPromise.then(()=>le(this._apiKey,this.model,g,this.requestOptions)).then(f=>{var c;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(l);const h=Object.assign({parts:[],role:"model"},(c=f.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(h)}else{const h=R(f.response);h&&console.warn(`sendMessage() was unsuccessful. ${h}. Inspect response object for details.`)}m=f}),await this._sendPromise,m}async sendMessageStream(n){var t,o,s,a,i,r;await this._sendPromise;const l=M(n),g={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]},m=ce(this._apiKey,this.model,g,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>m).catch(f=>{throw new Error(ae)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(l);const c=Object.assign({},f.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=R(f);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(f=>{f.message!==ae&&console.error(f)}),m}}/**
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
 */async function nt(e,n,t,o){return(await D(n,A.COUNT_TOKENS,e,!1,JSON.stringify(t),o)).json()}/**
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
 */async function st(e,n,t,o){return(await D(n,A.EMBED_CONTENT,e,!1,JSON.stringify(t),o)).json()}async function ot(e,n,t,o){const s=t.requests.map(i=>Object.assign(Object.assign({},i),{model:n}));return(await D(n,A.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class ie{constructor(n,t,o){this.apiKey=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=de(t.systemInstruction),this.cachedContent=t.cachedContent,this.requestOptions=o||{}}async generateContent(n){var t;const o=se(n);return le(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},o),this.requestOptions)}async generateContentStream(n){var t;const o=se(n);return ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},o),this.requestOptions)}startChat(n){var t;return new tt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this.requestOptions)}async countTokens(n){const t=Qe(n,this.model);return nt(this.apiKey,this.model,t,this.requestOptions)}async embedContent(n){const t=ze(n);return st(this.apiKey,this.model,t,this.requestOptions)}async batchEmbedContents(n){return ot(this.apiKey,this.model,n,this.requestOptions)}}/**
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
 */class at{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ie(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t){if(!n.name)throw new O("Cached content must contain a `name` field.");if(!n.model)throw new O("Cached content must contain a `model` field.");const o={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new ie(this.apiKey,o,t)}}const it="AIzaSyCXpx3BdoALyxXrn2TTS629kOaOR0POmuI";class rt{constructor(n){N(this,"genAI",null);N(this,"model",null);N(this,"handleResult",()=>{});N(this,"generate",async n=>{try{const s=(await this.model.generateContent(n)).response.text();this.handleResult(s)}catch(t){console.log(t.message)}});this.handleResult=n,this.genAI=new at(it),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}const $=e=>(ye("data-v-58e5e1d4"),e=e(),Se(),e),ct={class:"flex items-center justify-between"},lt={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},dt=$(()=>u("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),ut={class:"grid grid-cols-3"},ft=["onClick"],ht=["src"],gt=$(()=>u("article",null,null,-1)),_t={key:1,class:"w-[60%] fade-in relative"},mt={class:"diary-container px-[40px] py-[30px]"},pt={class:"w-full flex items-end justify-between text-[#484848]"},Et={class:"flex flex-col gap-[20px]"},vt={class:"text-lg-bold"},Ct=$(()=>u("p",{class:"text-lg-regular"},[B(" 오늘은 어떤 하루를 보내셨나요? "),u("br"),B(" 하루를 기록해보세요! ")],-1)),yt={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},St=["src"],Rt={class:"relative w-full"},It=["disable"],Ot={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},At={key:0,class:"absolute top-[-80px] right-[-50px]"},wt=$(()=>u("img",{src:Oe,alt:"diary",class:"w-[200px]"},null,-1)),Nt=[wt],Tt={key:0,class:"flex justify-end mt-[20px]"},xt=["disabled"],bt={key:0,src:Ae,class:"w-[30px] animate-spin"},Mt={key:1},Dt={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},$t={class:"w-full"},Lt={class:"text-lg-regular"},Gt=$(()=>u("div",{class:"w-full text-end"},[u("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),kt=he({__name:"TodayView",setup(e){const n=ve(),{addToast:t}=ge(),o=["Happy","Angry","Sad","IDK","Exhausted","Panicked","Blue","Upset","Peaceful"],s=T(null),a=T({date:"",emotion:"",content:"",feedback:""}),i=T(null),r=T(!1),l=T(!1);_e(async()=>{try{(await K.checkLogin()).loggedIn||(t({message:"로그인이 필요합니다."}),n.push("/login"))}catch(d){t({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(d),n.push("/")}s.value=await K.getInformation(),i.value=new rt(c),a.value.date=Te(new Date,"YYYY-MM-DD")}),me(()=>a.value.content,d=>{d.length>1e3&&(a.value.content=d.slice(0,1e3))});const g=()=>{const d=new Date,p=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],E=d.getFullYear(),v=d.getMonth()+1,H=d.getDate(),U=p[d.getDay()];return`${E}년 ${v}월 ${H}일 ${U}`},m=d=>{a.value.emotion=d},f=()=>{r.value||(r.value=!0,h())},c=d=>{a.value.feedback=d,S()},h=()=>{const d=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘. 감정에 따라 아래와 같은 피드백을 출력해줘. 각 피드백은 사용자의 감정과 일기 내용을 바탕으로 특별하고 맞춤형으로 작성되어야 해.

사용자 정보:
- 사용자 이름: ${s.value.userName}
- 일기의 내용: ${a.value.content}
- 선택한 감정: ${a.value.emotion}

감정에 따른 피드백 예시:

- Happy: "${s.value.userName}, 오늘 정말 기쁜 하루를 보낸 것 같아 기뻐요! 당신의 긍정적인 에너지가 ${a.value.content}을 통해 전해졌어요. 오늘 하루도 너무 수고 많았고, 내일도 이 기운 그대로 멋진 하루가 될 거예요!"

- Angry: "${s.value.userName}, 오늘 화가 나는 일이 있었군요. ${a.value.content}을 읽으니 당신의 감정을 충분히 이해할 수 있어요. 때로는 화를 내는 것도 필요해요. 내일은 더 나은 날이 될 거예요. 당신을 항상 응원하고 있어요."

- Sad: "${s.value.userName}, 오늘 슬픈 일이 있었군요. ${a.value.content}을 통해 당신의 마음이 느껴져요. 슬픔도 우리가 느껴야 할 중요한 감정이에요. 충분히 쉬고, 당신이 소중한 존재라는 걸 잊지 마세요. 내일은 더 나은 날이 될 거예요."

- Exhausted: "${s.value.userName}, 오늘 많이 피곤했나 봐요. ${a.value.content}을 읽으니 정말 힘든 하루를 보낸 것 같아요. 충분히 쉬어야 해요. 당신의 건강이 가장 중요해요. 내일은 더 활기찬 하루가 되길 바랄게요."

- Panicked: "${s.value.userName}, 오늘 두려움을 느낀 일이 있었군요. ${a.value.content}을 보니 얼마나 힘들었을지 이해가 돼요. 두려움은 우리를 성장하게 하는 감정이에요. 당신이 이겨낼 수 있다는 걸 믿어요. 내일은 더 안정된 하루가 될 거예요."

- IDK: "${s.value.userName}, 오늘 무기력한 하루를 보냈군요. ${a.value.content}을 보니 모든 것이 귀찮게 느껴졌겠어요. 누구나 가끔은 이렇게 느낄 때가 있어요. 충분히 쉬고, 자신을 돌봐주세요. 내일은 더 활기찬 하루가 되길 바라요."

- Blue: "${s.value.userName}, 오늘 우울한 기분이었군요. ${a.value.content}을 통해 당신의 마음이 느껴져요. 우울함도 우리가 겪는 중요한 감정이에요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 되길 바랄게요."

- Upset: "${s.value.userName}, 오늘 속상한 일이 있었군요. ${a.value.content}을 보니 얼마나 마음이 아팠을지 이해가 돼요. 속상함을 느끼는 것도 중요해요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 될 거예요."

- Peaceful: "${s.value.userName}, 오늘 평온한 하루를 보낸 것 같아 기뻐요. ${a.value.content}을 읽으니 당신의 마음이 안정된 것 같아 좋네요. 평온한 하루를 보낸 만큼 내일도 이렇게 평온하길 바랄게요."

출력 형식:

${s.value.userName}, 사용자가 선택한 감정에 따라 적절한 피드백을 여기에 삽입하세요.`;i.value.generate(d)},S=async()=>{var E;const d={emotion:a.value.emotion,content:a.value.content,feedback:a.value.feedback,feedbackCode:"SUCCESS"};await Ie.createDiary((E=s.value)==null?void 0:E.userName,d)&&(r.value=!1,l.value=!0)};return(d,p)=>{var E;return y(),C("div",ct,[l.value?x("",!0):(y(),C("section",lt,[dt,u("article",ut,[(y(),C(pe,null,Ee(o,(v,H)=>u("button",{key:H,class:Ce(["emotion-box",a.value.emotion===v?"bg-[#D0A7EB]":"bg-white"]),onClick:U=>m(v)},[u("img",{src:`/icons/emotions/${v}.svg`,alt:"emotion",class:"w-[60px]"},null,8,ht)],10,ft)),64))]),gt])),a.value.emotion?(y(),C("section",_t,[u("article",mt,[u("div",pt,[u("div",Et,[u("label",vt,L(g()),1),Ct]),u("span",yt,[u("img",{src:`/icons/emotions/${a.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,St),u("p",null,L(a.value.emotion),1)])]),u("div",Rt,[F(u("textarea",{"onUpdate:modelValue":p[0]||(p[0]=v=>a.value.content=v),class:"h-[calc(45vh)]",disable:l.value},null,8,It),[[Y,a.value.content]]),u("p",Ot,L(a.value.content.length)+"/1000 ",1)]),l.value?(y(),C("div",At,Nt)):x("",!0)]),l.value?x("",!0):(y(),C("div",Tt,[u("button",{class:"btn-primary p-[10px]",onClick:f,disabled:r.value},[r.value?(y(),C("img",bt)):(y(),C("p",Mt,"Submit"))],8,xt)]))])):x("",!0),l.value?(y(),C("section",Dt,[u("div",$t,[u("p",Lt,"To. "+L((E=s.value)==null?void 0:E.userName),1)]),F(u("textarea",{"onUpdate:modelValue":p[1]||(p[1]=v=>a.value.feedback=v),class:"h-[calc(50vh)]",disabled:""},null,512),[[Y,a.value.feedback]]),Gt])):x("",!0)])}}}),Yt=Re(kt,[["__scopeId","data-v-58e5e1d4"]]);export{Yt as default};
