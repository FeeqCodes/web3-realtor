


import BreadCrumbs from "@components/ui/shared/breadcrumbs";
import { WalletBar } from "@components/ui/web3";
import EthRates from "@components/ui/web3/ethrates";






export default function Header() {
  
  return (
    <div className="flex justify-end mt-5 mb-40  z-10">
      <div className="flex flex-col h-[256px] w-[80%] bg-transparent  ">
        <WalletBar />
        <EthRates />

        <div className="w-full flex justify-end mt-10">
          <BreadCrumbs  />
        </div>

      </div>
    </div>
  );
};
