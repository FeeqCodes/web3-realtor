export default function WalletBar() {
  return (
    <>
      {/* WalletBar */}

      <div className="h-[70%] bg-white px-[64px] py-8 flex justify-between border border-black shadow-lg shadow-slate-500 rounded-[20px] rounded-bl-none">
        <div>
          <p className="font-semibold">Hello, 0x9D8899889EC353Ac95a8B...</p>
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
              Currently on <span className="font-bold">Ropstern Network</span>
            </p>
          </div>
        </div>
      </div>

      {/* WalletBar */}
    </>
  );
}
