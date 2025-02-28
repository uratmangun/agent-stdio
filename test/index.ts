import { Para as ParaServer, Environment, WalletType } from "@getpara/server-sdk";
import type { WalletEntity } from "@getpara/server-sdk";
import * as dotenv from "dotenv";

dotenv.config();
interface WalletResponse {
  listAllPregenWallets: WalletEntity[];
}

export async function listAllParaPregenWallets(): Promise<any> {
  try {
   
  
    const PARA_API_KEY = process.env.PARA_API_KEY;
    if (!PARA_API_KEY) {
      throw new Error("Set PARA_API_KEY in the environment before using this handler.");
    }

    const para = new ParaServer(Environment.BETA, PARA_API_KEY);
    
    const listAllPregenWallets = await para.getPregenWallets({pregenIdentifier:"panda@panda.com",pregenIdentifierType:"EMAIL"});

  
   


    return{
      listAllPregenWallets
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
const response = await listAllParaPregenWallets();
console.log(response);