"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const ShowSolBalance = ()=> {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number|null>(null);
  const fetchBalance = async () => {
    if (publicKey) {
      const lamports = await connection.getBalance(publicKey);
      setBalance(lamports / LAMPORTS_PER_SOL);
    }
  };
  useEffect(() => {
    fetchBalance();
  }, [publicKey, connection]);

  return (
    <div className="mt-4 text-center">
      <p className="text-5xl  font-bold">
        {balance !== null ? `${balance.toFixed(2)} SOL` : "Connect wallet"}
      </p>
      <div className="flex justify-center items-center gap-4">
        <p className="text-red-600 font-bold text-xl">-$1.20</p>
        <p className="text-red-600 font-bold text-xl bg-gray-900 rounded-lg ">-4.18%</p>
      </div>
    </div>
  );
};

ShowSolBalance.displayName = "showSolBalance";
