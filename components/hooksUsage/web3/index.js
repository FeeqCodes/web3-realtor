import { useHooks } from "@components/providers";









// we use the enhance hook to wrap all our hooks
const enhanceHook = (swrRes) => {

  // const { data, error} = swrRes
  // const hasFirstResponse = (!!data || error)
  // const isEmpty = hasFirstResponse && _isEmpty(data)

  return {
    // hasInitialResponse: swrRes.data || swrRes.error,
    ...swrRes,
    // isEmpty,
    // hasFirstResponse
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