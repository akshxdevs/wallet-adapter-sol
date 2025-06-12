"ue client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

export function SendTokens() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const sendTokens = async () => {
    if (!publicKey) {
      alert("Connect your wallet first!");
      return;
    }

    let lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    if (isNaN(lamports) || lamports <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(recipient),
          lamports,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      alert(`Sent ${amount} SOL to ${recipient}`);
    } catch (error) {
      console.error(error);
      alert("Transaction failed: " + (error as Error).message);
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-4 items-center">
        <img src="./Screenshot From 2025-06-12 21-25-09.png" alt="" />
        <input
          type="text"
          placeholder="Recipient Public Key"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="px-4 py-2 bg-[#181818] border rounded-md w-full max-w-md text-[#999999] border-gray-700"
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
          className="px-6 py-2 bg-[#ab9ff2] text-[#1f1f1f] w-full rounded-md hover:bg-[#e2dffe]"
        >
          Send Tokens
        </button>
      </div>
    </div>
  );
}
