var J=Object.defineProperty;var X=(t,n,e)=>n in t?J(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var p=(t,n,e)=>X(t,typeof n!="symbol"?n+"":n,e);var N;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(N||(N={}));/**
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
 */var T;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(T||(T={}));var w;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(w||(w={}));/**
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
 */const b=["user","model","function","system"];var M;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(M||(M={}));var x;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(x||(x={}));var L;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(L||(L={}));var G;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(G||(G={}));var v;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(v||(v={}));var D;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(D||(D={}));var U;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(U||(U={}));/**
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
 */class u extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class m extends u{constructor(n,e){super(n),this.response=e}}class Y extends u{constructor(n,e,s,o){super(n),this.status=e,this.statusText=s,this.errorDetails=o}}class C extends u{}/**
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
 */const W="https://generativelanguage.googleapis.com",Q="v1beta",z="0.14.1",Z="genai-js";var _;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_||(_={}));class tt{constructor(n,e,s,o,i){this.model=n,this.task=e,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,e;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Q;let i=`${((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||W}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function et(t){const n=[];return t!=null&&t.apiClient&&n.push(t.apiClient),n.push(`${Z}/${z}`),n.join(" ")}async function nt(t){var n;const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",et(t.requestOptions)),e.append("x-goog-api-key",t.apiKey);let s=(n=t.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new C(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new C(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new C(`Header name ${o} can only be set using the apiClient field`);e.append(o,i)}}return e}async function st(t,n,e,s,o,i){const a=new tt(t,n,e,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},rt(i)),{method:"POST",headers:await nt(a),body:o})}}async function I(t,n,e,s,o,i,a=fetch){const{url:r,fetchOptions:l}=await st(t,n,e,s,o,i);return ot(r,l,a)}async function ot(t,n,e=fetch){let s;try{s=await e(t,n)}catch(o){it(o,t)}return s.ok||await at(s,t),s}function it(t,n){let e=t;throw t instanceof Y||t instanceof C||(e=new u(`Error fetching from ${n.toString()}: ${t.message}`),e.stack=t.stack),e}async function at(t,n){let e="",s;try{const o=await t.json();e=o.error.message,o.error.details&&(e+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new Y(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${e}`,t.status,t.statusText,s)}function rt(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,s=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=s}return n}/**
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
 */function S(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new m(`${g(t)}`,t);return ct(t)}else if(t.promptFeedback)throw new m(`Text not available. ${g(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new m(`${g(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),P(t)[0]}else if(t.promptFeedback)throw new m(`Function call not available. ${g(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new m(`${g(t)}`,t);return P(t)}else if(t.promptFeedback)throw new m(`Function call not available. ${g(t)}`,t)},t}function ct(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```python\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function P(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const dt=[v.RECITATION,v.SAFETY];function y(t){return!!t.finishReason&&dt.includes(t.finishReason)}function g(t){var n,e,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];y(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function R(t){return this instanceof R?(this.v=t,this):new R(t)}function lt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(t,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(f){return new Promise(function(A,V){i.push([c,f,A,V])>1||r(c,f)})})}function r(c,f){try{l(s[c](f))}catch(A){d(i[0][3],A)}}function l(c){c.value instanceof R?Promise.resolve(c.value.v).then(h,E):d(i[0][2],c)}function h(c){r("next",c)}function E(c){r("throw",c)}function d(c,f){c(f),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const H=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ut(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=Et(n),[s,o]=e.tee();return{stream:ht(s),response:ft(o)}}async function ft(t){const n=[],e=t.getReader();for(;;){const{done:s,value:o}=await e.read();if(s)return S(gt(n));n.push(o)}}function ht(t){return lt(this,arguments,function*(){const e=t.getReader();for(;;){const{value:s,done:o}=yield R(e.read());if(o)break;yield yield R(S(s))}})}function Et(t){const n=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new u("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(H),h;for(;l;){try{h=JSON.parse(l[1])}catch{s.error(new u(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(h),o=o.substring(l[0].length),l=o.match(H)}return i()})}}})}function gt(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(e.candidates||(e.candidates=[]),e.candidates[i]||(e.candidates[i]={index:o.index}),e.candidates[i].citationMetadata=o.citationMetadata,e.candidates[i].finishReason=o.finishReason,e.candidates[i].finishMessage=o.finishMessage,e.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){e.candidates[i].content||(e.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),e.candidates[i].content.parts.push(a)}}s.usageMetadata&&(e.usageMetadata=s.usageMetadata)}return e}/**
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
 */async function k(t,n,e,s){const o=await I(n,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(e),s);return ut(o)}async function q(t,n,e,s){const i=await(await I(n,_.GENERATE_CONTENT,t,!1,JSON.stringify(e),s)).json();return{response:S(i)}}/**
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
 */function j(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function O(t){let n=[];if(typeof t=="string")n=[{text:t}];else for(const e of t)typeof e=="string"?n.push({text:e}):n.push(e);return Ct(n)}function Ct(t){const n={role:"user",parts:[]},e={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(e.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new u("No content is provided for sending chat message.");return s?n:e}function _t(t,n){let e={};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");e=Object.assign({},t)}else if(s)e=Object.assign({},t),e.generateContentRequest.model=n;else{const o=O(t);e.contents=[o]}return e}function F(t){let n;return t.contents?n=t:n={contents:[O(t)]},t.systemInstruction&&(n.systemInstruction=j(t.systemInstruction)),n}function mt(t){return typeof t=="string"||Array.isArray(t)?{content:O(t)}:t}/**
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
 */const $=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],pt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Rt(t){let n=!1;for(const e of t){const{role:s,parts:o}=e;if(!n&&s!=="user")throw new u(`First content should be with role 'user', got ${s}`);if(!b.includes(s))throw new u(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(b)}`);if(!Array.isArray(o))throw new u("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of $)l in r&&(i[l]+=1);const a=pt[s];for(const r of $)if(!a.includes(r)&&i[r]>0)throw new u(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
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
 */const K="SILENT_ERROR";class Ot{constructor(n,e,s,o){this.model=e,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(Rt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,s,o,i,a,r;await this._sendPromise;const l=O(n),h={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]};let E;return this._sendPromise=this._sendPromise.then(()=>q(this._apiKey,this.model,h,this.requestOptions)).then(d=>{var c;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(l);const f=Object.assign({parts:[],role:"model"},(c=d.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(f)}else{const f=g(d.response);f&&console.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`)}E=d}),await this._sendPromise,E}async sendMessageStream(n){var e,s,o,i,a,r;await this._sendPromise;const l=O(n),h={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,l]},E=k(this._apiKey,this.model,h,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>E).catch(d=>{throw new Error(K)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(l);const c=Object.assign({},d.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=g(d);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(d=>{d.message!==K&&console.error(d)}),E}}/**
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
 */async function It(t,n,e,s){return(await I(n,_.COUNT_TOKENS,t,!1,JSON.stringify(e),s)).json()}/**
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
 */async function yt(t,n,e,s){return(await I(n,_.EMBED_CONTENT,t,!1,JSON.stringify(e),s)).json()}async function vt(t,n,e,s){const o=e.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await I(n,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class B{constructor(n,e,s){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=j(e.systemInstruction),this.cachedContent=e.cachedContent,this.requestOptions=s||{}}async generateContent(n){var e;const s=F(n);return q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}async generateContentStream(n){var e;const s=F(n);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}startChat(n){var e;return new Ot(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},n),this.requestOptions)}async countTokens(n){const e=_t(n,this.model);return It(this.apiKey,this.model,e,this.requestOptions)}async embedContent(n){const e=mt(n);return yt(this.apiKey,this.model,e,this.requestOptions)}async batchEmbedContents(n){return vt(this.apiKey,this.model,n,this.requestOptions)}}/**
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
 */class At{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new B(this.apiKey,n,e)}getGenerativeModelFromCachedContent(n,e){if(!n.name)throw new C("Cached content must contain a `name` field.");if(!n.model)throw new C("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new B(this.apiKey,s,e)}}const St="AIzaSyCXpx3BdoALyxXrn2TTS629kOaOR0POmuI";class Tt{constructor(n){p(this,"genAI",null);p(this,"model",null);p(this,"handleResult",()=>{});p(this,"generate",async n=>{try{const o=(await this.model.generateContent(n)).response.text();this.handleResult(o)}catch(e){console.log(e.message)}});this.handleResult=n,this.genAI=new At(St),this.model=this.genAI.getGenerativeModel({model:"gemini-1.0-pro"})}}export{Tt as G};
