"use client";
import { useState } from "react"
import { SendTokens } from "./SendSol"
import { RequestAirdrop } from "./Airdrop";
import { SignMessage } from "./SignMessage";

export const OptionStack = () => {
    const [showSendTokenModel,setShowSendTokenModel] = useState(false);
    const [showAirdropModel,setShowAirdropModel] = useState(false);
    const [showSignMessageModel,setShowSignMessageModel] = useState(false);
    return <div>
        <div className="flex justify-between p-8">
            {showSignMessageModel ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#2a2a2a] rounded-lg shadow-lg">
                        <button className="px-3 py-2" onClick={()=>setShowSignMessageModel(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <SignMessage />
                    </div>
                </div>
            ):(
                <div className="bg-[#2a2a2a] rounded-xl p-2">
                    <button className="flex justify-center items-center px-3" onClick={()=>setShowSignMessageModel(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                    </button>
                    <p className="text-sm font-semibold text-gray-400">Receive</p>
                </div>
            )}

            {showSendTokenModel ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#2a2a2a] rounded-lg shadow-lg">
                        <button className="px-3 py-2" onClick={()=>setShowSendTokenModel(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <SendTokens />
                    </div>
                </div>
            ):(
                <div className="bg-[#2a2a2a] rounded-xl p-2">
                    <button className="flex justify-center items-center px-3" onClick={()=>setShowSendTokenModel(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    </button>
                    <p className="text-sm font-semibold text-gray-400 px-2">send</p>
                </div>
            )}
            {showAirdropModel ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#2a2a2a] rounded-lg shadow-lg">
                        <button className="px-3 py-2" onClick={()=>setShowAirdropModel(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <RequestAirdrop />
                    </div>
                </div>
            ):(
                <div className="bg-[#2a2a2a] rounded-xl p-2">
                    <button className="flex justify-center items-center px-3" onClick={()=>setShowAirdropModel(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className="text-sm font-semibold text-gray-400">Airdrop</p>
                </div>
            )}

        </div>
    </div>
}