"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL,PublicKey,SystemProgram,Transaction,} from "@solana/web3.js";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function SendTokens() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();
  const sendTokens = async () => {
    if (!publicKey) return alert("Please connect your wallet first.");
    if (!recipient || !amount) return alert("Fill in all fields.");
    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    if (isNaN(lamports) || lamports <= 0)
      return alert("Enter a valid amount.");
    let toPubkey;
    try {
      toPubkey = new PublicKey(recipient);
    } catch {
      return alert("Invalid recipient public key.");
    }
    setIsSending(true);
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey,
          lamports,
        })
      );
      const latestBlockhash = await connection.getLatestBlockhash();
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(
        {
          signature,
          blockhash: latestBlockhash.blockhash,
          lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
        },
        "confirmed"
      );
      alert(`Sent ${amount} SOL to ${recipient}`);
      setRecipient("");
      setAmount("");
      setTimeout(() => {
        router.refresh();
      }, 200);
    } catch (err) {
      console.error(err);
      alert("Transaction failed. Check the console for details.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-4 items-center">
        <img src="./Screenshot From 2025-06-12 21-25-09.png" alt="Send SOL" />
        <input
          type="text"
          placeholder="Recipient Public Key"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-md bg-[#181818] text-[#999999] border-gray-700"
        />
        <input
          type="text"
          placeholder="Amount (SOL)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 bg-[#181818] border rounded-md w-full max-w-md text-[#999999] border-gray-700"
        />
        <button
          onClick={sendTokens}
          disabled={isSending}
          className={`px-6 py-2 w-full rounded-md font-semibold transition-colors duration-200 ${
            isSending
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#ab9ff2] hover:bg-[#e2dffe] text-[#1f1f1f]"
          }`}
        >
          {isSending ? "Sending..." : "Send Tokens"}
        </button>
      </div>
    </div>
  );
}
