"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  const requestAirdrop = async () => {
    if (!publicKey) {
      alert("Connect your wallet first!");
      return;
    }

    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

    try {
      const signature = await connection.requestAirdrop(publicKey, lamports);
      await connection.confirmTransaction(signature, "confirmed");

      alert(`Airdropped ${amount} SOL to ${publicKey.toBase58()}`);
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
        className="px-4 py-2 border rounded-md text-black"
      />
      <button
        onClick={requestAirdrop}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Request Airdrop
      </button>
    </div>
  );
}
