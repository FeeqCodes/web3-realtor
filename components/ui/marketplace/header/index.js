


import { WalletBar } from "@components/ui/web3";
import EthRates from "@components/ui/web3/ethrates";




export default function Header() {
  
  return(
    <div className="flex justify-end mt-5  z-10">
      <div className="flex flex-col h-[256px] w-[80%] bg-transparent  ">
        <WalletBar />
        <EthRates />
      </div>
    </div>
  )
};
