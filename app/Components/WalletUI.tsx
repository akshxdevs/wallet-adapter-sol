import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { RequestAirdrop } from "./Airdrop";
import { SendTokens } from "./SendSol";
import { ShowSolBalance } from "./Balance";
import { SignMessage } from "./SignMessage";
import { useWallet } from "@solana/wallet-adapter-react";
import { Navbar } from "./Navbar";
import { OptionStack } from "./OptionStack";
import { BottomNavbar } from "./BottomNavbar";

export const WalletUI = () => {
  const { publicKey } = useWallet();
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-[#e3dbfb]">
        <div className="flex flex-col justify-center items-center border bg-[#201c1c] rounded-2xl">
          <div className="">
            {publicKey ? (
              <div className="">
                <div className="flex justify-between items-center gap-4">
                  <div className="pl-10 pt-10">
                    <h1 className="text-center text-xl font-semibold">Account - 1</h1>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-blue-600 text-sm break-all">
                        {publicKey ? `${publicKey.toBase58().slice(0, 15)}...` : ""}
                      </p>
                      <img width="18" height="18" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/restore-down.png" alt="restore-down"/>
                    </div>
                  </div>
                  <div className="pt-10 pr-10">
                    <WalletDisconnectButton>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                      </svg>
                    </WalletDisconnectButton>
                  </div>
                </div>
                <div className="pt-20">
                  <ShowSolBalance />
                </div>
                <OptionStack/>
                <div className="bg-[#2a2a2a] rounded-2xl">
                  <BottomNavbar/>
                </div>
              </div>
            ):(
              <div className="flex flex-col justify-center items-center p-3">
                <img src="./Screenshot From 2025-06-12 18-59-53.png" alt="logo" className="pt-32"/>
                <h1 className="text-gray-400 w-[400px] text-xl text-center pb-32">To get started, created a new wallet or import an existing one</h1>
                <WalletMultiButton>
                  Connect Wallet
                </WalletMultiButton>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
        {/* 
        <WalletDisconnectButton />
      </div>
      <RequestAirdrop />
      
      <SignMessage /> */}