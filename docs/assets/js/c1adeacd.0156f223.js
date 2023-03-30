"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6341],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const i={id:"agents_tools.internal.BaseParameters",title:"Interface: BaseParameters",sidebar_label:"agents/tools.internal.BaseParameters",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/agents_tools.internal.BaseParameters",id:"api/interfaces/agents_tools.internal.BaseParameters",title:"Interface: BaseParameters",description:"agents/tools.internal.BaseParameters",source:"@site/docs/api/interfaces/agents_tools.internal.BaseParameters.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/agents_tools.internal.BaseParameters",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.BaseParameters",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents_tools.internal.BaseParameters",title:"Interface: BaseParameters",sidebar_label:"agents/tools.internal.BaseParameters",custom_edit_url:null},sidebar:"sidebar",previous:{title:"agents/tools.internal.AIPluginToolParams",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.AIPluginToolParams"},next:{title:"agents/tools.internal.GoogleParameters",permalink:"/langchainjs/docs/api/interfaces/agents_tools.internal.GoogleParameters"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"device",id:"device",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"no_cache",id:"no_cache",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"timeout",id:"timeout",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools"},"agents/tools"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools.internal"},"internal"),".BaseParameters"),(0,r.kt)("p",null,"This does not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"serpapi")," package because it appears to cause issues\nwhen used in ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," tests. Part of the issue seems to be that the ",(0,r.kt)("inlineCode",{parentName:"p"},"serpapi"),"\npackage imports a wasm module to use instead of native ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),", which we\ndon't want anyway."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BaseParameters"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.GoogleParameters"},(0,r.kt)("inlineCode",{parentName:"a"},"GoogleParameters"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"device"},"device"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"device"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"desktop"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"tablet"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"mobile"')),(0,r.kt)("p",null,"Parameter defines the device to use to get the results. It can be set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"desktop")," (default) to use a regular browser, ",(0,r.kt)("inlineCode",{parentName:"p"},"tablet")," to use a tablet browser\n(currently using iPads), or ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile")," to use a mobile browser (currently\nusing iPhones)."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/serpapi.ts#L18"},"langchain/src/agents/tools/serpapi.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"no_cache"},"no","_","cache"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"no","_","cache"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Parameter will force SerpApi to fetch the Google results even if a cached\nversion is already present. A cache is served only if the query and all\nparameters are exactly the same. Cache expires after 1h. Cached searches\nare free, and are not counted towards your searches per month. It can be set\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (default) to allow results from the cache, or ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to disallow\nresults from the cache. ",(0,r.kt)("inlineCode",{parentName:"p"},"no_cache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," parameters should not be used together."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/serpapi.ts#L27"},"langchain/src/agents/tools/serpapi.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timeout"},"timeout"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"timeout"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Specify the client-side timeout of the request. In milliseconds."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/serpapi.ts#L31"},"langchain/src/agents/tools/serpapi.ts:31")))}u.isMDXComponent=!0}}]);