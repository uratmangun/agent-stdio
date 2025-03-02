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
  await para.setUserShare("hdGVkQXQiOiIyMDI1LTAzLTAxVDAwOjI3OjQ1LjYyNloiLCJ1cGRhdGVkQXQiOiIyMDI1LTAzLTAxVDAwOjI3OjQ4LjY3OFoiLCJpZCI6Ijk5OGVlNTY1LTZjNDctNDE3NS1hZjM1LTAzN2I5OGViMWFjYSIsInVzZXJJZCI6bnVsbCwibmFtZSI6bnVsbCwia2V5R2VuQ29tcGxldGUiOnRydWUsImFkZHJlc3MiOiJEOFdXY0VzU3c3UjY4Wlh6OUR4b3NhZGE0ZDhUTjVjUHBrU2lMc2laNEJHeCIsImFkZHJlc3NTZWNvbmRhcnkiOm51bGwsInB1YmxpY0tleSI6IiIsImNvc21vc1ByZWZpeCI6bnVsbCwic2NoZW1lIjoiRUQyNTUxOSIsImlzUHJlZ2VuIjp0cnVlLCJ0eXBlIjoiU09MQU5BIiwicHJlZ2VuSWRlbnRpZmllciI6InBhbmRhcG9wQGdtYWlsLmNvbSIsInByZWdlbklkZW50aWZpZXJUeXBlIjoiRU1BSUwiLCJwYXJ0bmVySWQiOiJiOWZhNTM5YS1hMWUxLTRiOTYtOTg2NC03MWFhOGRlZTE4ZjYiLCJjdXN0b21BdXRoSWRJZCI6bnVsbCwibGFzdFVzZWRBdCI6bnVsbCwibGFzdFVzZWRQYXJ0bmVySWQiOm51bGwsImhhc0JlZW5Vc2VkQ3Jvc3NQYXJ0bmVyIjpmYWxzZSwicGFydG5lciI6eyJjcmVhdGVkQXQiOiIyMDI1LTAyLTI4VDAyOjQzOjQ2LjM3OVoiLCJ1cGRhdGVkQXQiOiIyMDI1LTAyLTI4VDAyOjQ5OjQwLjkyMloiLCJpZCI6ImI5ZmE1MzlhLWExZTEtNGI5Ni05ODY0LTcxYWE4ZGVlMThmNiIsIm5hbWUiOiJzb2xhbmEiLCJvcmdhbml6YXRpb25JZCI6IjAyYzNkYjg4LTk1MTktNGQ4NS05NjE5LWM1N2I4ZTAzZjdhNSIsInByb2plY3RJZCI6IjNhYTcwODVjLTcwMTYtNDExYS1iNTM5LTkyZDI0OWYwZDU2OCIsImRpc3BsYXlOYW1lIjoic29sYW5hIiwiYmFubmVySW1hZ2VVcmwiOm51bGwsInZlcmlmeVVybCI6bnVsbCwicG9ydGFsVXJsIjpudWxsLCJob21lcGFnZVVybCI6Imh0dHBzOi8vdXJhdG1hbmd1bi5vdmgiLCJwb3J0YWxIZWFkZXJMb2dvVXJsIjpudWxsLCJhcGlLZXkiOiI4ZGYyZmI5ZDVmMGQ4ZTE5MDk3M2YyYTgzMDg5Yzg3NCIsInBvbGljaWVzRW5hYmxlZCI6ZmFsc2UsIm9yaWdpbnMiOm51bGwsIm1peHBhbmVsVG9rZW4iOm51bGwsImxvZ29VcmwiOm51bGwsImVtYWlsQmFja3VwS2l0IjpmYWxzZSwiZW1haWxXZWxjb21lIjp0cnVlLCJlbWFpbEltYWdlVXJsIjpudWxsLCJlbWFpbEltYWdlTGluayI6bnVsbCwiYmFja2dyb3VuZENvbG9yIjpudWxsLCJmb3JlZ3JvdW5kQ29sb3IiOm51bGwsImZvbnQiOm51bGwsInR3aXR0ZXJVcmwiOm51bGwsImdpdGh1YlVybCI6bnVsbCwibGlua2VkaW5VcmwiOm51bGwsImFyY2hpdmVkIjpmYWxzZSwiaXNVc2VkIjp0cnVlLCJpc0luc3RhbGxlZCI6dHJ1ZSwic3VwcG9ydGVkV2FsbGV0VHlwZXMiOlt7InR5cGUiOiJFVk0iLCJvcHRpb25hbCI6ZmFsc2V9LHsidHlwZSI6IlNPTEFOQSIsIm9wdGlvbmFsIjpmYWxzZX1dLCJjb3Ntb3NQcmVmaXgiOiJjb3Ntb3MiLCJpc1dpdGhkcmF3RW5hYmxlZCI6dHJ1ZSwiaXNCdXlFbmFibGVkIjp0cnVlLCJpc1JlY2VpdmVFbmFibGVkIjp0cnVlLCJvblJhbXBQcm92aWRlcnMiOlsiU1RSSVBFIiwiTU9PTlBBWSJdLCJvblJhbXBBc3NldHMiOm51bGwsInRlYW1JZCI6bnVsbCwiYnVuZGxlSWRlbnRpZmllciI6bnVsbCwiYW5kcm9pZFBhY2thZ2VOYW1lIjpudWxsLCJhbmRyb2lkU2hhMjU2Q2VydEZpbmdlcnByaW50cyI6bnVsbCwiYWNjZW50Q29sb3IiOm51bGwsInRoZW1lTW9kZSI6IkxJR0hUIiwic3VwcG9ydGVkQXV0aE1ldGhvZHMiOlsiUEFTU0tFWSJdLCJpY29uVXJsIjpudWxsLCJyYW1wQXBpS2V5IjpudWxsLCJkZWZhdWx0T25SYW1wQXNzZXQiOm51bGwsImRlZmF1bHRPblJhbXBOZXR3b3JrIjpudWxsLCJkZWZhdWx0QnV5QW1vdW50IjpudWxsLCJkZWZhdWx0QnV5QW1vdW50Q3VycmVuY3kiOm51bGwsImRlZmF1bHRTZWxsQW1vdW50IjpudWxsLCJkZWZhdWx0U2VsbEFtb3VudEN1cnJlbmN5IjpudWxsLCJmb3JjZVRyYW5zYWN0aW9uUG9wdXBzIjpmYWxzZSwidHJhbnNhY3Rpb25Qb3B1cHNFbmFibGVkIjpmYWxzZX0sImxhc3RVc2VkUGFydG5lciI6bnVsbCwic2lnbmVyIjoiZXlKSlpDSTZJakVpTENKUGRHaGxja2xrSWpvaU1pSXNJazkxZEhCMWRDSTZleUpRZFdKc2FXTWlPbnNpZENJNk1Td2laM0p2ZFhCclpYa2lPaUpTUjNGc1VYUm1aV1kyTlVsQlpGUjZRV1ZITmtJelpsTmxNR3hpWW1kTloxTTNOVEJ3YmxwdFJIbFZQU0lzSW5Ob1lYSmxjeUk2ZXlJeElqb2lUbkZHT0hreVUxQnhWMFoxUms5MWFrNVBMM1p6YzJ4dVptczFSelp1UW1FNGJ6TmxRVWxxYlZwNFdUMGlMQ0l5SWpvaVFuTXdLM1kwUW5kU1VUVTNUMDF2UWpVMVFUTm5hMGRIYjJweFEyWkVObVJYTXpOMlZGaEpaVnBWVlQwaWZYMHNJbE5sWTNKbGRFdGxlU0k2ZXlKcFpDSTZNU3dpYzJWamNtVjBJam9pYTBzMEszaE1XR2RWZVM5VU1YVnFjbVoyTVVsNU1HbFpkMnRLWlVkWWMzb3lhRWRRVFRkalNtOW5WVDBpZlgwc0lsZGhiR3hsZEVsa0lqb2lPVGs0WldVMU5qVXRObU0wTnkwME1UYzFMV0ZtTXpVdE1ETTNZams0WldJeFlXTmhJaXdpU0c5emRDSTZJbmR6Y3pvdkwyMXdZeTF1WlhSM2IzSnJMbUpsZEdFdVoyVjBjR0Z5WVM1amIyMGlmUT09In0=")
  const address=await para.getAddress()
  console.log(address)
  const wallets=await para.getWallets()
  // const da = wallets.find(wallet => wallet.address === address);
  console.log(wallets["998ee565-6c47-4175-af35-037b98eb1aca"].pregenIdentifier)
  // const recoverySecret = await para.claimPregenWallets()
//     const timestamp = Math.floor(Date.now() / 1000);
// const emailParts = email.split('@');
// const uniqueEmail = `${emailParts[0]}+${timestamp}@${emailParts[1]}`;
// console.log(`Original email: ${email}`);
// console.log(`Unique email: ${uniqueEmail}`);
//     // const address = await para.getPregenWallets({
//     //   pregenIdentifier: email,
//     //   pregenIdentifierType: "EMAIL"
//     // })
//     await para.updatePregenWalletIdentifier({
//       walletId:"90d7f525-35d8-4c84-be7e-2cabd41aaa98",
//       newPregenIdentifier: uniqueEmail,
//       newPregenIdentifierType: 'EMAIL'
//     });
//     const recoverySecret = await para.claimPregenWallets({
//       pregenIdentifier: uniqueEmail,
//       pregenIdentifierType: 'EMAIL'
//     });
// Format email with datetime to make it unique

// console.log(recoverySecret);

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