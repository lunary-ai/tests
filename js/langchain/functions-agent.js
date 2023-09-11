import { LLMonitorHandler } from "langchain/callbacks/handlers/llmonitor";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { Calculator } from "langchain/tools/calculator";

const tools = [new Calculator()];
const chat = new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 });

const executor = await initializeAgentExecutorWithOptions(tools, chat, {
  agentType: "openai-functions",
});

const result = await executor.run(
  "What is the approximate result of 78 to the power of 5?",
  {
    callbacks: [new LLMonitorHandler()], // <- Add the LLMonitor Callback Handler here
    metadata: { agentName: "SuperCalculator" }, // Give a name to your agent to track it in the dashboard
  }
);

console.log(result);
