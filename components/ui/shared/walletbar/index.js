



export default function walletbar() {
  
  return (
    <>
       {/* WalletBar */}

          <div className="flex justify-end mt-5  z-10">
            <div className="flex flex-col h-[256px] w-[80%] bg-transparent  ">
              <div className="h-[70%] bg-white px-[64px] py-8 flex justify-between border border-black shadow-lg shadow-slate-500 rounded-[20px] rounded-bl-none">
                <div>
                  <p className="font-semibold">
                    Hello, 0x9D8899889EC353Ac95a8B...
                  </p>
                  <p>How are you doing today?</p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="h-[78px] w-[292px] bg-indigo">
                    <p className="py-4 px-6 font-medium text-myText bg-grey shadow-inner  shadow-inShadow">
                      connected to wrong network please connect to: GANACHE
                    </p>
                  </div>

                  <div>
                    <p className="text-[18px]">
                      Currently on{" "}
                      <span className="font-bold">Ropstern Network</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.25) inset",
                }}
                className="bg-white flex flex-col justify-center items-center w-[20%] h-[30%] bg-grey  p-[14px] border border-black  rounded-bl-[20px]"
              >
                <div className="flex m-auto gap-2">
                  <span>
                    <img
                      alt=""
                      src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                      width="30"
                      height="30"
                    ></img>
                  </span>
                  <span
                    className={` font-changa text-[18px]`}
                  >
                    1755.55$
                  </span>
                </div>

                <div className="text-sm">
                  <p>current Eth Price</p>
                </div>
              </div>
            </div>
          </div>
          {/* WalletBar */}
    </>
  )
};
