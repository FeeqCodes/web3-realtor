const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require("react");

import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";




const Web3Context = createContext(null);



export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    providerIsLoading: true,
  });


  useEffect(() => {

    const loadProvider = async () => {

      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          providerIsLoading: false,
        });

      } else {
        setWeb3Api((api) => ({ ...api, providerIsLoading: false }));
        console.error("Please, install Metamask.");
      }
    };

    loadProvider();
  }, []);
  



  // main usage of abstractions
  const _web3Api = useMemo(() => {

    const {web3, provider, providerIsLoading} = web3Api
    
    return {
      ...web3Api,
      requireInstall: !providerIsLoading && !web3,
      hooks: setupHooks({ web3, provider }),

      connect: web3Api.provider
        ? async () => {
            try {
              await web3Api.provider.request({ method: "eth_requestAccounts" });
              
            } catch {
              location.reload();
            }
          }
        : () =>
            console.error(
              "Cannot connect to Metamask, try to reload your browser please."
            ),
    };
  }, [web3Api]);
  

  return (
    <Web3Context.Provider value={_web3Api}>        
      {children}
    </Web3Context.Provider>
  );

}

export function useWeb3() {
  return useContext(Web3Context);
}


export function useHooks(cb) {
  const {hooks} = useWeb3()
  return cb(hooks)
}