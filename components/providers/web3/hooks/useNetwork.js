import useSWR  from "swr";




const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  5: "Goerli Test Network",
  11155111: "Sepolia Test Network",
  1337: "Ganache Network",
};



const targetNetwork = NETWORKS[1];
// const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const handler = (web3) => () => {

  const { data, ...rest} = useSWR( 
    ()=> (web3 ? "web3/network" : null),
    async () => {
      const chainId = Number(
        await window.ethereum.request({method: "eth_chainId"})
      );

      if (!chainId) {
        throw new Error(
          "cannot retrieve a network, please refresh the browser"
        )
      }

      return NETWORKS[chainId]
    }

  );
  // console.log(data);


  return {
    data,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest,
 
  }


  
}
