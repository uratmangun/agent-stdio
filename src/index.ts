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
   GET_WALLET_ADDRESS: ACTIONS.WALLET_ADDRESS_ACTION,
    CREATE_PARA_PREGEN_WALLET: ACTIONS.CREATE_PARA_PREGEN_WALLET_ACTION,
    GET_PARA_PREGEN_WALLETS: ACTIONS.GET_PARA_PREGEN_WALLETS_ACTION,
    UPDATE_PARA_PREGEN_WALLET: ACTIONS.UPDATE_PARA_PREGEN_WALLET_ACTION,
    USE_PARA_PREGEN_WALLET: ACTIONS.USE_PARA_PREGEN_WALLET_ACTION,
    CLAIM_PARA_PREGEN_WALLET: ACTIONS.CLAIM_PARA_PREGEN_WALLET_ACTION,
    DEACTIVATE_PARA_PREGEN_WALLET: ACTIONS.DEACTIVATE_PARA_PREGEN_WALLET_ACTION,
    GET_BALANCE: ACTIONS.BALANCE_ACTION,
    TRANSFER_TOKENS: ACTIONS.TRANSFER_ACTION,
    REQUEST_FUNDS: ACTIONS.REQUEST_FUNDS_ACTION,
}

startMcpServer(mcp_actions, agent, { name: "solana-agent", version: "0.0.1" });
