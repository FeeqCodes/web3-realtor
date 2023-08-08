



export default function EthRates() {
  
  return (
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
        <span className={` font-changa text-[18px]`}>1755.55$</span>
      </div>

      <div className="text-sm">
        <p>current Eth Price</p>
      </div>
    </div>
  );
};
