#!/usr/bin/env node
import { ACTIONS, SolanaAgentKit, startMcpServer } from "@uratmangun/solana-agent-kit-para";
import * as dotenv from "dotenv";

dotenv.config();

const agent = new SolanaAgentKit(
    process.env.SOLANA_PRIVATE_KEY!,
    process.env.RPC_URL!,
    {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    },
);

// Add your required actions here
const mcp_actions = {
   
    CREATE_PARA_PREGEN_WALLET: ACTIONS.CREATE_PARA_PREGEN_WALLET_ACTION,
    GET_PARA_PREGEN_WALLETS: ACTIONS.GET_PARA_PREGEN_WALLETS_ACTION,
    UPDATE_PARA_PREGEN_WALLET: ACTIONS.UPDATE_PARA_PREGEN_WALLET_ACTION,
    
}

startMcpServer(mcp_actions, agent, { name: "solana-agent", version: "0.0.1" });
