var ft=Object.defineProperty;var ht=(t,n,e)=>n in t?ft(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var T=(t,n,e)=>ht(t,typeof n!="symbol"?n+"":n,e);import{d as gt,u as _t,r as N,l as pt,n as mt,c as y,b as u,F as Et,s as Ct,q as b,t as G,v as B,x as Y,m as yt,g as v,y as vt,p as Rt,i as St,h as K,_ as wt}from"./index-D4Uo8UMd.js";import{b as It,a as q}from"./auth-CNAqI4To.js";const Ot="/images/stamp.svg",At="/icons/loading.svg";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Tt=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Nt(t,n,e,s){let o=t<12?"AM":"PM";return s&&(o=o.split("").reduce((a,i)=>a+=`${i}.`,"")),e?o.toLowerCase():o}function w(t){const n=["th","st","nd","rd"],e=t%100;return t+(n[(e-20)%10]||n[e]||n[0])}function bt(t,n,e={}){var s;const o=t.getFullYear(),a=t.getMonth(),i=t.getDate(),r=t.getHours(),l=t.getMinutes(),g=t.getSeconds(),p=t.getMilliseconds(),f=t.getDay(),c=(s=e.customMeridiem)!=null?s:Nt,h={Yo:()=>w(o),YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>a+1,Mo:()=>w(a+1),MM:()=>`${a+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(e.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(e.locales,{month:"long"}),D:()=>String(i),Do:()=>w(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(r),Ho:()=>w(r),HH:()=>`${r}`.padStart(2,"0"),h:()=>`${r%12||12}`.padStart(1,"0"),ho:()=>w(r%12||12),hh:()=>`${r%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>w(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(g),so:()=>w(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${p}`.padStart(3,"0"),d:()=>f,dd:()=>t.toLocaleDateString(e.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(e.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(e.locales,{weekday:"long"}),A:()=>c(r,l),AA:()=>c(r,l,!1,!0),a:()=>c(r,l,!0),aa:()=>c(r,l,!0,!0)};return n.replace(Tt,(R,d)=>{var m,E;return(E=d??((m=h[R])==null?void 0:m.call(h)))!=null?E:R})}var j;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(j||(j={}));/**
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
 */var V;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(V||(V={}));var J;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(J||(J={}));/**
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
 */const W=["user","model","function","system"];var X;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(X||(X={}));var Q;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(Q||(Q={}));var z;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(z||(z={}));var Z;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Z||(Z={}));var k;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(k||(k={}));var tt;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(tt||(tt={}));var et;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(et||(et={}));/**
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
 */class _ extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class A extends _{constructor(n,e){super(n),this.response=e}}class ct extends _{constructor(n,e,s,o){super(n),this.status=e,this.statusText=s,this.errorDetails=o}}class I extends _{}/**
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
 */const xt="https://generativelanguage.googleapis.com",Mt="v1beta",Dt="0.14.1",Lt="genai-js";var O;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(O||(O={}));class Gt{constructor(n,e,s,o,a){this.model=n,this.task=e,this.apiKey=s,this.stream=o,this.requestOptions=a}toString(){var n,e;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Mt;let a=`${((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||xt}/${s}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function $t(t){const n=[];return t!=null&&t.apiClient&&n.push(t.apiClient),n.push(`${Lt}/${Dt}`),n.join(" ")}async function kt(t){var n;const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",$t(t.requestOptions)),e.append("x-goog-api-key",t.apiKey);let s=(n=t.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new I(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,a]of s.entries()){if(o==="x-goog-api-key")throw new I(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new I(`Header name ${o} can only be set using the apiClient field`);e.append(o,a)}}return e}async function Ht(t,n,e,s,o,a){const i=new Gt(t,n,e,s,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},Bt(a)),{method:"POST",headers:await kt(i),body:o})}}async function D(t,n,e,s,o,a,i=fetch){const{url:r,fetchOptions:l}=await Ht(t,n,e,s,o,a);return Ut(r,l,i)}async function Ut(t,n,e=fetch){let s;try{s=await e(t,n)}catch(o){Pt(o,t)}return s.ok||await Ft(s,t),s}function Pt(t,n){let e=t;throw t instanceof ct||t instanceof I||(e=new _(`Error fetching from ${n.toString()}: ${t.message}`),e.stack=t.stack),e}async function Ft(t,n){let e="",s;try{const o=await t.json();e=o.error.message,o.error.details&&(e+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new ct(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${e}`,t.status,t.statusText,s)}function Bt(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,s=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=s}return n}/**
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
 */function U(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),$(t.candidates[0]))throw new A(`${S(t)}`,t);return Yt(t)}else if(t.promptFeedback)throw new A(`Text not available. ${S(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(t.candidates[0]))throw new A(`${S(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),nt(t)[0]}else if(t.promptFeedback)throw new A(`Function call not available. ${S(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(t.candidates[0]))throw new A(`${S(t)}`,t);return nt(t)}else if(t.promptFeedback)throw new A(`Function call not available. ${S(t)}`,t)},t}function Yt(t){var n,e,s,o;const a=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const i of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```python\n"+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function nt(t){var n,e,s,o;const a=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const i of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)i.functionCall&&a.push(i.functionCall);if(a.length>0)return a}const Kt=[k.RECITATION,k.SAFETY];function $(t){return!!t.finishReason&&Kt.includes(t.finishReason)}function S(t){var n,e,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const a=t.candidates[0];$(a)&&(o+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(o+=`: ${a.finishMessage}`))}return o}function x(t){return this instanceof x?(this.v=t,this):new x(t)}function qt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(t,n||[]),o,a=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(c){s[c]&&(o[c]=function(h){return new Promise(function(R,d){a.push([c,h,R,d])>1||r(c,h)})})}function r(c,h){try{l(s[c](h))}catch(R){f(a[0][3],R)}}function l(c){c.value instanceof x?Promise.resolve(c.value.v).then(g,p):f(a[0][2],c)}function g(c){r("next",c)}function p(c){r("throw",c)}function f(c,h){c(h),a.shift(),a.length&&r(a[0][0],a[0][1])}}/**
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
 */const st=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function jt(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=Wt(n),[s,o]=e.tee();return{stream:Jt(s),response:Vt(o)}}async function Vt(t){const n=[],e=t.getReader();for(;;){const{done:s,value:o}=await e.read();if(s)return U(Xt(n));n.push(o)}}function Jt(t){return qt(this,arguments,function*(){const e=t.getReader();for(;;){const{value:s,done:o}=yield x(e.read());if(o)break;yield yield x(U(s))}})}function Wt(t){const n=t.getReader();return new ReadableStream({start(s){let o="";return a();function a(){return n.read().then(({value:i,done:r})=>{if(r){if(o.trim()){s.error(new _("Failed to parse stream"));return}s.close();return}o+=i;let l=o.match(st),g;for(;l;){try{g=JSON.parse(l[1])}catch{s.error(new _(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(g),o=o.substring(l[0].length),l=o.match(st)}return a()})}}})}function Xt(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const a=o.index;if(e.candidates||(e.candidates=[]),e.candidates[a]||(e.candidates[a]={index:o.index}),e.candidates[a].citationMetadata=o.citationMetadata,e.candidates[a].finishReason=o.finishReason,e.candidates[a].finishMessage=o.finishMessage,e.candidates[a].safetyRatings=o.safetyRatings,o.content&&o.content.parts){e.candidates[a].content||(e.candidates[a].content={role:o.content.role||"user",parts:[]});const i={};for(const r of o.content.parts)r.text&&(i.text=r.text),r.functionCall&&(i.functionCall=r.functionCall),r.executableCode&&(i.executableCode=r.executableCode),r.codeExecutionResult&&(i.codeExecutionResult=r.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),e.candidates[a].content.parts.push(i)}}s.usageMetadata&&(e.usageMetadata=s.usageMetadata)}return e}/**
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
 */async function lt(t,n,e,s){const o=await D(n,O.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(e),s);return jt(o)}async function dt(t,n,e,s){const a=await(await D(n,O.GENERATE_CONTENT,t,!1,JSON.stringify(e),s)).json();return{response:U(a)}}/**
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
 */function ut(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function M(t){let n=[];if(typeof t=="string")n=[{text:t}];else for(const e of t)typeof e=="string"?n.push({text:e}):n.push(e);return Qt(n)}function Qt(t){const n={role:"user",parts:[]},e={role:"function",parts:[]};let s=!1,o=!1;for(const a of t)"functionResponse"in a?(e.parts.push(a),o=!0):(n.parts.push(a),s=!0);if(s&&o)throw new _("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new _("No content is provided for sending chat message.");return s?n:e}function zt(t,n){let e={};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new I("CountTokensRequest must have one of contents or generateContentRequest, not both.");e=Object.assign({},t)}else if(s)e=Object.assign({},t),e.generateContentRequest.model=n;else{const o=M(t);e.contents=[o]}return e}function ot(t){let n;return t.contents?n=t:n={contents:[M(t)]},t.systemInstruction&&(n.systemInstruction=ut(t.systemInstruction)),n}function Zt(t){return typeof t=="string"||Array.isArray(t)?{content:M(t)}:t}/**
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
 */const at=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],te={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function ee(t){let n=!1;for(const e of t){const{role:s,parts:o}=e;if(!n&&s!=="user")throw new _(`First content should be with role 'user', got ${s}`);if(!W.includes(s))throw new _(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(W)}`);if(!Array.isArray(o))throw new _("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new _("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of at)l in r&&(a[l]+=1);const i=te[s];for(const r of at)if(!i.includes(r)&&a[r]>0)throw new _(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
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
 */const it="SILENT_ERROR";class ne{constructor(n,e,s,o){this.model=e,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(ee(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,s,o,a,i,r;await this._sendPromise;const l=M(n),g={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]};let p;return this._sendPromise=this._sendPromise.then(()=>dt(this._apiKey,this.model,g,this.requestOptions)).then(f=>{var c;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(l);const h=Object.assign({parts:[],role:"model"},(c=f.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(h)}else{const h=S(f.response);h&&console.warn(`sendMessage() was unsuccessful. ${h}. Inspect response object for details.`)}p=f}),await this._sendPromise,p}async sendMessageStream(n){var e,s,o,a,i,r;await this._sendPromise;const l=M(n),g={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]},p=lt(this._apiKey,this.model,g,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>p).catch(f=>{throw new Error(it)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(l);const c=Object.assign({},f.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=S(f);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(f=>{f.message!==it&&console.error(f)}),p}}/**
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
 */async function se(t,n,e,s){return(await D(n,O.COUNT_TOKENS,t,!1,JSON.stringify(e),s)).json()}/**
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
 */async function oe(t,n,e,s){return(await D(n,O.EMBED_CONTENT,t,!1,JSON.stringify(e),s)).json()}async function ae(t,n,e,s){const o=e.requests.map(i=>Object.assign(Object.assign({},i),{model:n}));return(await D(n,O.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class rt{constructor(n,e,s){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=ut(e.systemInstruction),this.cachedContent=e.cachedContent,this.requestOptions=s||{}}async generateContent(n){var e;const s=ot(n);return dt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}async generateContentStream(n){var e;const s=ot(n);return lt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}startChat(n){var e;return new ne(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},n),this.requestOptions)}async countTokens(n){const e=zt(n,this.model);return se(this.apiKey,this.model,e,this.requestOptions)}async embedContent(n){const e=Zt(n);return oe(this.apiKey,this.model,e,this.requestOptions)}async batchEmbedContents(n){return ae(this.apiKey,this.model,n,this.requestOptions)}}/**
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
 */class ie{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new rt(this.apiKey,n,e)}getGenerativeModelFromCachedContent(n,e){if(!n.name)throw new I("Cached content must contain a `name` field.");if(!n.model)throw new I("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new rt(this.apiKey,s,e)}}const re="AIzaSyCXpx3BdoALyxXrn2TTS629kOaOR0POmuI";class ce{constructor(n){T(this,"genAI",null);T(this,"model",null);T(this,"handleResult",()=>{});T(this,"generate",async n=>{try{const o=(await this.model.generateContent(n)).response.text();this.handleResult(o)}catch(e){console.log(e.message)}});this.handleResult=n,this.genAI=new ie(re),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}const P=It.create({baseURL:"http://moodTracker.online:8081/api/diary",withCredentials:!0}),le=async(t,n)=>{try{return(await P.get(`/searchByKeword/${t}`,{params:{searchWord:n}})).data}catch(e){throw console.log("searchDiary error: ",e),e}},de=async(t,n)=>{try{return(await P.get(`/searchByDate/${t}/date`,{params:{submitDate:n}})).data}catch(e){throw console.log("searchDiaryByDate error: ",e),e}},ue=async(t,n)=>{try{return(await P.post(`/submit/${t}`,n)).data}catch(e){throw console.log("writeDiary error: ",e),e}},fe={searchDiary:le,searchDiaryByDate:de,createDiary:ue},L=t=>(Rt("data-v-c0e28719"),t=t(),St(),t),he={class:"flex items-center justify-between"},ge={key:0,class:"diary-container px-[30px] py-[60px] w-[35%] fade-in"},_e=L(()=>u("h1",{class:"text-4xl-bold mb-[30px] text-[#222222]"},"오늘의 감정",-1)),pe={class:"grid grid-cols-3"},me=["onClick"],Ee=["src"],Ce=L(()=>u("article",null,null,-1)),ye={key:1,class:"w-[60%] fade-in relative"},ve={class:"diary-container px-[40px] py-[30px]"},Re={class:"w-full flex items-end justify-between text-[#484848]"},Se={class:"flex flex-col gap-[20px]"},we={class:"text-lg-bold"},Ie=L(()=>u("p",{class:"text-lg-regular"},[K(" 오늘은 어떤 하루를 보내셨나요? "),u("br"),K(" 하루를 기록해보세요! ")],-1)),Oe={class:"bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]"},Ae=["src"],Te={class:"relative w-full"},Ne=["disable"],be={class:"absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light"},xe={key:0,class:"absolute top-[-80px] right-[-50px]"},Me=L(()=>u("img",{src:Ot,alt:"diary",class:"w-[200px]"},null,-1)),De=[Me],Le={key:0,class:"flex justify-end mt-[20px]"},Ge=["disabled"],$e={key:0,src:At,class:"w-[30px] animate-spin"},ke={key:1},He={key:2,class:"diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"},Ue={class:"w-full"},Pe={class:"text-lg-regular"},Fe=L(()=>u("div",{class:"w-full text-end"},[u("p",{class:"text-lg-regular"},"From. Mood Tracker")],-1)),Be=gt({__name:"TodayView",setup(t){const n=yt(),{addToast:e}=_t(),s=["Happy","Angry","Sad","IDK","Exhausted","Panicked","Blue","Upset","Peaceful"],o=N(null),a=N({date:"",emotion:"",content:"",feedback:""}),i=N(null),r=N(!1),l=N(!1);pt(async()=>{try{(await q.checkLogin()).loggedIn||(e({message:"로그인이 필요합니다."}),n.push("/login"))}catch(d){e({message:"서버에 문제가 발생했습니다. 다시 시도해주세요."}),console.error(d),n.push("/")}o.value=await q.getInformation(),i.value=new ce(c),a.value.date=bt(new Date,"YYYY-MM-DD")}),mt(()=>a.value.content,d=>{d.length>1e3&&(a.value.content=d.slice(0,1e3))});const g=()=>{const d=new Date,m=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],E=d.getFullYear(),C=d.getMonth()+1,H=d.getDate(),F=m[d.getDay()];return`${E}년 ${C}월 ${H}일 ${F}`},p=d=>{a.value.emotion=d},f=()=>{r.value||(r.value=!0,h())},c=d=>{a.value.feedback=d,R()},h=()=>{const d=`사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘.
  너가 준 내용 그대로 일기 작성자에게 보내줄거야.
  일기의 있는 내용으로 감정을 더 자세하게 분석해줘도 좋을 것 같아. (최대 1000자)
  선택한 감정: ${a.value.emotion}, 일기의 내용: ${a.value.content}`;i.value.generate(d)},R=async()=>{var E;const d={emotion:a.value.emotion,content:a.value.content,feedback:a.value.feedback};await fe.createDiary((E=o.value)==null?void 0:E.userName,d)&&(r.value=!1,l.value=!0)};return(d,m)=>{var E;return v(),y("div",he,[l.value?b("",!0):(v(),y("section",ge,[_e,u("article",pe,[(v(),y(Et,null,Ct(s,(C,H)=>u("button",{key:H,class:vt(["emotion-box",a.value.emotion===C?"bg-[#D0A7EB]":"bg-white"]),onClick:F=>p(C)},[u("img",{src:`/icons/emotions/${C}.svg`,alt:"emotion",class:"w-[60px]"},null,8,Ee)],10,me)),64))]),Ce])),a.value.emotion?(v(),y("section",ye,[u("article",ve,[u("div",Re,[u("div",Se,[u("label",we,G(g()),1),Ie]),u("span",Oe,[u("img",{src:`/icons/emotions/${a.value.emotion}.svg`,alt:"emotion",class:"w-[30px]"},null,8,Ae),u("p",null,G(a.value.emotion),1)])]),u("div",Te,[B(u("textarea",{"onUpdate:modelValue":m[0]||(m[0]=C=>a.value.content=C),class:"h-[calc(45vh)]",disable:l.value},null,8,Ne),[[Y,a.value.content]]),u("p",be,G(a.value.content.length)+"/1000 ",1)]),l.value?(v(),y("div",xe,De)):b("",!0)]),l.value?b("",!0):(v(),y("div",Le,[u("button",{class:"btn-primary p-[10px]",onClick:f,disabled:r.value},[r.value?(v(),y("img",$e)):(v(),y("p",ke,"Submit"))],8,Ge)]))])):b("",!0),l.value?(v(),y("section",He,[u("div",Ue,[u("p",Pe,"To. "+G((E=o.value)==null?void 0:E.userName),1)]),B(u("textarea",{"onUpdate:modelValue":m[1]||(m[1]=C=>a.value.feedback=C),class:"h-[calc(50vh)]",disabled:""},null,512),[[Y,a.value.feedback]]),Fe])):b("",!0)])}}}),je=wt(Be,[["__scopeId","data-v-c0e28719"]]);export{je as default};
