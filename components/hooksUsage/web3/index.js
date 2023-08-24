import { useHooks } from "@components/providers";





// getting the state of our website when theres empty data
const _isEmpty = data => {

  return (
    data == null ||
    data === "" ||
    (Array.isArray(data) && data.length === 0) ||
    (data.constructor === Object && Object.keys(data).length === 0)
  )
}


// we use the enhance hook to wrap all our hooks
const enhanceHook = (swrRes) => {

  const { data, error} = swrRes
  const hasFirstResponse = (!!data || error)
  const isEmpty = hasFirstResponse && _isEmpty(data)

  return {
    ...swrRes,
    hasFirstResponse,
    isEmpty,
  };
};




/** Using the hooks from the provider
 * 
 * */ 
export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrRes,
  };
};


export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};