import useSWR from "swr";






export const handler = (web3, provider) => ()=> {


  const { data, mutate, ...rest} = useSWR( ()=>
    {
      return web3 ? "web3/accounts" : null 
    }, 

    async () => { 
      const accounts  = await web3.eth.getAccounts();
      const account = accounts[0];

      // if no account, throw an error
      if(!account) {
        throw new Error("Cannot Retrieve any Account, Please refresh Browser")
      }

      console.log(account)
      return account;
    }
  )



  return {
    data,
    mutate,
    ...rest
  }

}