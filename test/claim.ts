import { Para as ParaServer, Environment, WalletType, OAuthMethod } from "@getpara/server-sdk";
import { ParaSolanaWeb3Signer } from "@getpara/solana-web3.js-v1-integration";
import { Connection, clusterApiUrl } from "@solana/web3.js";


export async function createParaPregenWallet(email: string): Promise<any> {
  try {
   
    if (!email) {
        throw new Error("Provide `email` in the request body to create a pre-generated wallet.");
    }

    const PARA_API_KEY = process.env.PARA_API_KEY;
    if (!PARA_API_KEY) {
      throw new Error("Set PARA_API_KEY in the environment before using this handler.");
    }

    const para = new ParaServer(Environment.BETA, PARA_API_KEY);
  
    // const walletExists = await para.hasPregenWallet({ pregenIdentifier: email, pregenIdentifierType: "EMAIL" });
    // if (walletExists) {
    //   throw new Error("A pre-generated wallet already exists for this user. Consider using that wallet or choose a different email.");
    // }

    // const wallet = await para.setEmail(email)
  await para.setUserShare("")
    // const recoverySecret = await para.claimPregenWallets()
    const timestamp = Math.floor(Date.now() / 1000);
const emailParts = email.split('@');
const uniqueEmail = `${emailParts[0]}+${timestamp}@${emailParts[1]}`;
console.log(`Original email: ${email}`);
console.log(`Unique email: ${uniqueEmail}`);
    // const address = await para.getPregenWallets({
    //   pregenIdentifier: email,
    //   pregenIdentifierType: "EMAIL"
    // })
    await para.updatePregenWalletIdentifier({
      walletId:"90d7f525-35d8-4c84-be7e-2cabd41aaa98",
      newPregenIdentifier: uniqueEmail,
      newPregenIdentifierType: 'EMAIL'
    });
    const recoverySecret = await para.claimPregenWallets({
      pregenIdentifier: uniqueEmail,
      pregenIdentifierType: 'EMAIL'
    });
// Format email with datetime to make it unique

console.log(recoverySecret);

    return{
      message: "Pre-generated wallet created successfully.",

        email,

 
//  recoverySecret
    };
  } catch (error: any) {
    throw new Error(`claim pregen wallet failed ${error.message}`);
  }
}

const popo=await createParaPregenWallet("chonky@gmail.com")
console.log(popo)