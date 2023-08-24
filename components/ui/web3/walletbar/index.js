

import { useAccount, useNetwork } from "@components/hooksUsage/web3";
import { useWeb3 } from "@components/providers";


export default function WalletBar() {
  const {account} = useAccount()
  const { network } = useNetwork()
  const {requireInstall} = useWeb3()


  return (
    <>
      {/* WalletBar */}
      <div className="h-[70%] bg-white px-[64px] py-8 flex justify-between items-center border border-black shadow-lg shadow-slate-500 rounded-[20px] rounded-bl-none">
        <div>
          <p className="font-bold">Hello, {` `}{account.data} </p>
          <p>How are you doing today?</p>
        </div>

        { !network.isEmpty && 
        
        <div className="flex flex-col justify-between gap-4">
          {/* show this when there is a network that is not supported */}
          { network.hasFirstResponse && !network.isSupported && (
            <div className="h-[78px] w-[300px] bg-indigo">
              <p className="py-4 px-4 font-medium text-myText bg-grey shadow-inner  shadow-inShadow">
                 wrong network please connect to: {network.target}
              </p>
            </div>
          )}

          {/* show this when there is no provider and a web3*/}
          {  requireInstall && (
            <div className="h-[78px] w-[292px] bg-indigo">
              <p className="py-4 px-6 font-medium text-myText bg-grey shadow-inner  shadow-inShadow">
                Cannot connect to network please install Metamask
              </p>
            </div>
          )}

          {/* show this when there is a network */}
          { network && (
            <div>
              <p className="text-[18px]">
                Currently on <span className="font-bold">{network.data}</span>
              </p>
            </div>
          )}
        </div>
        }

      </div>
      {/* WalletBar */}
    </>
  );
}
