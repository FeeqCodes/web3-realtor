export default function HouseHero() {
  return (
    <>
      {/* Cards wrapper */}
      <div className="flex justify-center h-[36vw]   mt-32">
        {/* Cards */}
        <div
          style={{
            boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
          }}
          className="p-6 flex justify-between  w-[80%] h-[100%]  bg-white rounded-xl"
        >
          <div className="flex flex-col justify-end p-4 font-changa ">
            <p className="text-[2.4vw] whitespace-normal leading-sm text-myText mb-5 ">
              A fully furnished 5 bedroom Apartment, with a gym, swimming pool
              and spacious car park
            </p>

            {/* Price */}
            <span className="flex items-center gap-2 mb-6">
              <img
                alt=""
                src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                width="30"
                height="30"
              ></img>
              <p className={` font-changa text-xl text-myText `}>2.5</p>
            </span>
            {/* Price */}

            {/* Button */}
            <div className=" flex gap-4 w-full h-auto">
              <button className="text-white text-md bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Purchase
              </button>
              <button className="text-white text-md bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Explore
              </button>
            </div>
            {/* Button */}
          </div>

          <img
            alt=""
            src="/Rectangle 9 (1).png"
            className=" mb-6 w-[50%] h-full shadow-lg"
            style={{
              boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
            }}
          ></img>
        </div>
      </div>

      {/* Card-wrapper-1 ends */}
    </>
  );
}
