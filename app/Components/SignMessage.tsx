"use client";
import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import React, { useState } from "react";

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  const handleSign = async () => {
    if (!publicKey) {
      alert("Wallet not connected!");
      return;
    }
    if (!signMessage) {
      alert("This wallet does not support message signing.");
      return;
    }
    if (!message) {
      alert("Message is empty.");
      return;
    }

    const encoded = new TextEncoder().encode(message);

    try {
      const signature = await signMessage(encoded);
      const isValid = ed25519.verify(signature, encoded, publicKey.toBytes());

      if (!isValid) {
        alert("Signature verification failed.");
        return;
      }

      alert(`Signature: ${bs58.encode(signature)}`);
    } catch (err) {
      console.error(err);
      alert("Signing failed: " + (err as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center p-10">
      <img src="./Screenshot From 2025-06-12 21-25-09.png" alt="" />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message to sign"
        className="px-4 py-2 border rounded-md w-full max-w-md bg-[#181818] text-[#999999] border-gray-700"
      />
      <button
        onClick={handleSign}
        className="px-6 py-2 w-full rounded-md bg-[#ab9ff2] hover:bg-[#e2dffe] text-[#1f1f1f]"
      >
        Sign Message
      </button>
    </div>
  );
}
