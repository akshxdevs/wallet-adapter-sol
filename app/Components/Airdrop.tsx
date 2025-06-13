"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RequestAirdrop() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const requestAirdrop = async () => {
    if (!publicKey) {
      alert("Connect your wallet first!");
      return;
    }
    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    try {
      const signature = await connection.requestAirdrop(publicKey, lamports);
      const latestBlockhash = await connection.getLatestBlockhash();
        await connection.confirmTransaction(
          {
            signature,
            blockhash: latestBlockhash.blockhash,
            lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
          },
          "confirmed"
        );
      alert(`Airdropped ${amount} SOL to ${publicKey.toBase58()}`);
      setTimeout(() => {
        router.refresh();
      }, 200);
    } catch (error) {
      console.error(error);
      alert("Airdrop failed: " + (error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10 ">
      <img src="./Screenshot From 2025-06-12 21-25-09.png" alt="" />
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (SOL)"
        className="px-4 py-2 border rounded-md bg-[#181818] text-[#999999] border-gray-700"
      />
      <button
        onClick={requestAirdrop}
        className="px-6 w-full py-2 bg rounded-md bg-[#ab9ff2] hover:bg-[#e2dffe] text-[#1f1f1f]"
      >
        Request Airdrop
      </button>
    </div>
  );
}
