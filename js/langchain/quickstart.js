import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

import { LLMonitorHandler } from "langchain/callbacks/handlers/llmonitor";

const chat = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  callbacks: [new LLMonitorHandler()],
});

const res = await chat.call([new HumanMessage("Hello!")]);

console.log(res);
