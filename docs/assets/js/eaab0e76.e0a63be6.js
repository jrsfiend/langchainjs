"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4114],{5318:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(a),h=r,g=m["".concat(s,".").concat(h)]||m[h]||k[h]||l;return a?n.createElement(g,i(i({ref:t},o),{},{components:a})):n.createElement(g,i({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(5773),r=(a(7378),a(5318));const l={id:"agents.Agent",title:"Class: Agent",sidebar_label:"agents.Agent",custom_edit_url:null},i=void 0,p={unversionedId:"api/classes/agents.Agent",id:"api/classes/agents.Agent",title:"Class: Agent",description:"agents.Agent",source:"@site/docs/api/classes/agents.Agent.md",sourceDirName:"api/classes",slug:"/api/classes/agents.Agent",permalink:"/langchainjs/docs/api/classes/agents.Agent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents.Agent",title:"Class: Agent",sidebar_label:"agents.Agent",custom_edit_url:null},sidebar:"sidebar",previous:{title:"vectorstores",permalink:"/langchainjs/docs/api/modules/vectorstores"},next:{title:"agents.AgentExecutor",permalink:"/langchainjs/docs/api/classes/agents.AgentExecutor"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"allowedTools",id:"allowedtools",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"llmChain",id:"llmchain",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"returnValues",id:"returnvalues",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"inputKeys",id:"inputkeys",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"_agentType",id:"_agenttype",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"_stop",id:"_stop",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"constructScratchPad",id:"constructscratchpad",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"extractToolAndInput",id:"extracttoolandinput",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"finishToolName",id:"finishtoolname",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"llmPrefix",id:"llmprefix",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"observationPrefix",id:"observationprefix",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"plan",id:"plan",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"prepareForNewCall",id:"preparefornewcall",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"prepareForOutput",id:"prepareforoutput",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"returnStoppedResponse",id:"returnstoppedresponse",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"createPrompt",id:"createprompt",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"deserialize",id:"deserialize",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"fromLLMAndTools",id:"fromllmandtools",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"validateTools",id:"validatetools",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-19",level:4}],o={toc:d},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents"},"agents"),".Agent"),(0,r.kt)("p",null,"Class responsible for calling a language model and deciding an action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This is driven by an LLMChain. The prompt in the LLMChain ",(0,r.kt)("em",{parentName:"p"},"must"),'\ninclude a variable called "agent_scratchpad" where the agent can put its\nintermediary work.'),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Agent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ZeroShotAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ZeroShotAgent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ChatAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatAgent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.ChatConversationalAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatConversationalAgent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Agent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/agents.AgentInput"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentInput")))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L41"},"langchain/src/agents/agent.ts:41")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"allowedtools"},"allowedTools"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"allowedTools"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L33"},"langchain/src/agents/agent.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llmchain"},"llmChain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"llmChain"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.LLMChain"},(0,r.kt)("inlineCode",{parentName:"a"},"LLMChain"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L31"},"langchain/src/agents/agent.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returnvalues"},"returnValues"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"returnValues"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L35"},"langchain/src/agents/agent.ts:35")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"inputkeys"},"inputKeys"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"inputKeys"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L37"},"langchain/src/agents/agent.ts:37")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_agenttype"},"_","agentType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"_agentType"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Return the string type key uniquely identifying this class of agent."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L68"},"langchain/src/agents/agent.ts:68")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_stop"},"_","stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_stop"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L116"},"langchain/src/agents/agent.ts:116")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"constructscratchpad"},"constructScratchPad"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"constructScratchPad"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]"),(0,r.kt)("p",null,"Construct a scratchpad to let the agent continue its thought process"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L130"},"langchain/src/agents/agent.ts:130")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extracttoolandinput"},"extractToolAndInput"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"extractToolAndInput"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_input"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"tool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("p",null,"Extract tool and tool input from LLM output."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"tool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L49"},"langchain/src/agents/agent.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finishtoolname"},"finishToolName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"finishToolName"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name of tool to use to terminate the chain."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L123"},"langchain/src/agents/agent.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llmprefix"},"llmPrefix"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"llmPrefix"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Prefix to append the LLM call with."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L63"},"langchain/src/agents/agent.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"observationprefix"},"observationPrefix"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"observationPrefix"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Prefix to append the observation with."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L58"},"langchain/src/agents/agent.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plan"},"plan"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"plan"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentAction"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Decide what to do given some input."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Steps the LLM has taken so far, along with observations from each.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ChainValues"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"User inputs.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentAction"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Action specifying what tool to use."),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L182"},"langchain/src/agents/agent.ts:182")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preparefornewcall"},"prepareForNewCall"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareForNewCall"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Prepare the agent for a new call, if needed"),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L73"},"langchain/src/agents/agent.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepareforoutput"},"prepareForOutput"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareForOutput"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_returnValues"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_steps"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("p",null,"Prepare the agent for output, if needed"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_returnValues")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L78"},"langchain/src/agents/agent.ts:78")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returnstoppedresponse"},"returnStoppedResponse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"returnStoppedResponse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"earlyStoppingMethod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("p",null,"Return response when agent has been stopped due to max iterations"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"earlyStoppingMethod")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/agents#stoppingmethod"},(0,r.kt)("inlineCode",{parentName:"a"},"StoppingMethod")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#agentstep"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentStep")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#agentfinish"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentFinish")),">"),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L192"},"langchain/src/agents/agent.ts:192")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createprompt"},"createPrompt"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"createPrompt"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_tools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_fields?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BasePromptTemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"BasePromptTemplate"))),(0,r.kt)("p",null,"Create a prompt for this class"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_fields?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BasePromptTemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"BasePromptTemplate"))),(0,r.kt)("p",null,"A PromptTemplate assembled from the given tools and fields."),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L93"},"langchain/src/agents/agent.ts:93")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deserialize"},"deserialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},(0,r.kt)("inlineCode",{parentName:"a"},"Agent")),">"),(0,r.kt)("p",null,"Load an agent from a json-like object describing it."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},(0,r.kt)("inlineCode",{parentName:"a"},"Agent")),">"),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L230"},"langchain/src/agents/agent.ts:230")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromllmandtools"},"fromLLMAndTools"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromLLMAndTools"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_llm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_tools"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_args?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},(0,r.kt)("inlineCode",{parentName:"a"},"Agent"))),(0,r.kt)("p",null,"Construct an agent from an LLM and a list of tools"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_llm")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Agent"},(0,r.kt)("inlineCode",{parentName:"a"},"Agent"))),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L102"},"langchain/src/agents/agent.ts:102")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatetools"},"validateTools"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"validateTools"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_tools"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Validate that appropriate tools are passed in"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool")),"[]")))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/agent.ts#L114"},"langchain/src/agents/agent.ts:114")))}k.isMDXComponent=!0}}]);