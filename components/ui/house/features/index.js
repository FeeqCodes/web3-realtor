

export default function Features() {
  
  return (
    <>
      <div className="bg-white w-[90%] mt-32 p-10 font-changa text-myText">
        <div className="text-3xl mb-7">
          <h2>Features</h2>
          <span className="block h-1 w-[7.5rem] -rotate-3  bg-black"></span>
        </div>
        <div className="grid grid-cols-2 gap-y-20 gap-32">
          <span className="flex items-center">
            <img
              alt=""
              src="/ic_baseline-security.png"
              className="w-[4rem]"
            ></img>
            <p>Very conducive and secure environment</p>
          </span>
          <span className="flex items-center">
            <img
              alt=""
              src="/ic_baseline-security.png"
              className="w-[4rem]"
            ></img>
            <p>Very conducive and secure environment</p>
          </span>
          <span className="flex items-center">
            <img
              alt=""
              src="/ic_baseline-security.png"
              className="w-[4rem]"
            ></img>
            <p>Very conducive and secure environment</p>
          </span>
          <span className="flex items-center">
            <img
              alt=""
              src="/ic_baseline-security.png"
              className="w-[4rem]"
            ></img>
            <p>Very conducive and secure environment</p>
          </span>
        </div>
      </div>
    </>
  );
};
