"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4879],{8673:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(5773),o=(t(7378),t(5318)),s=t(6538);const i='import { ChatOpenAI } from "langchain/chat_models";\nimport { initializeAgentExecutor } from "langchain/agents";\nimport { SerpAPI, Calculator } from "langchain/tools";\nimport { BufferMemory } from "langchain/memory";\n\nexport const run = async () => {\n  process.env.LANGCHAIN_HANDLER = "langchain";\n  const model = new ChatOpenAI({ temperature: 0 });\n  const tools = [new SerpAPI(), new Calculator()];\n\n  const executor = await initializeAgentExecutor(\n    tools,\n    model,\n    "chat-conversational-react-description",\n    true\n  );\n  executor.memory = new BufferMemory({\n    returnMessages: true,\n    memoryKey: "chat_history",\n    inputKey: "input",\n  });\n  console.log("Loaded agent.");\n\n  const input0 = "hi, i am bob";\n\n  const result0 = await executor.call({ input: input0 });\n\n  console.log(`Got output ${result0.output}`);\n\n  const input1 = "whats my name?";\n\n  const result1 = await executor.call({ input: input1 });\n\n  console.log(`Got output ${result1.output}`);\n\n  const input2 = "whats the weather in pomfret?";\n\n  const result2 = await executor.call({ input: input2 });\n\n  console.log(`Got output ${result2.output}`);\n};\n',r={hide_table_of_contents:!0,sidebar_position:3},c="Conversational Agent",l={unversionedId:"modules/agents/agents/examples/conversational_agent",id:"modules/agents/agents/examples/conversational_agent",title:"Conversational Agent",description:"This example covers how to create a conversational agent for a chat model. It will utilize chat specific prompts.",source:"@site/docs/modules/agents/agents/examples/conversational_agent.mdx",sourceDirName:"modules/agents/agents/examples",slug:"/modules/agents/agents/examples/conversational_agent",permalink:"/langchainjs/docs/modules/agents/agents/examples/conversational_agent",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/agents/agents/examples/conversational_agent.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{hide_table_of_contents:!0,sidebar_position:3},sidebar:"sidebar",previous:{title:"MRKL Agent for Chat Models",permalink:"/langchainjs/docs/modules/agents/agents/examples/chat_mrkl"},next:{title:"Custom Agent, using Chat Models",permalink:"/langchainjs/docs/modules/agents/agents/examples/custom_agent_chat"}},u={},p=[],m={toc:p},h="wrapper";function g(n){let{components:e,...t}=n;return(0,o.kt)(h,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conversational-agent"},"Conversational Agent"),(0,o.kt)("p",null,"This example covers how to create a conversational agent for a chat model. It will utilize chat specific prompts."),(0,o.kt)(s.Z,{language:"typescript",mdxType:"CodeBlock"},i),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Loaded agent.\nEntering new agent_executor chain...\n{\n    "action": "Final Answer",\n    "action_input": "Hello Bob! How can I assist you today?"\n}\nFinished chain.\nGot output Hello Bob! How can I assist you today?\nEntering new agent_executor chain...\n{\n    "action": "Final Answer",\n    "action_input": "Your name is Bob."\n}\nFinished chain.\nGot output Your name is Bob.\nEntering new agent_executor chain...\n```json\n{\n    "action": "search",\n    "action_input": "weather in pomfret"\n}\n```\nA steady rain early...then remaining cloudy with a few showers. High 48F. Winds WNW at 10 to 15 mph. Chance of rain 80%.\n```json\n{\n    "action": "Final Answer",\n    "action_input": "The weather in Pomfret is a steady rain early...then remaining cloudy with a few showers. High 48F. Winds WNW at 10 to 15 mph. Chance of rain 80%."\n}\n```\nFinished chain.\nGot output The weather in Pomfret is a steady rain early...then remaining cloudy with a few showers. High 48F. Winds WNW at 10 to 15 mph. Chance of rain 80%.\n')))}g.isMDXComponent=!0}}]);