



export default function OwnedHouseCard() {
  

  return (
    <>
      {/* Owned Card */}
      <div className=" flex gap-5 w-[100%] h-[30vw]  bg-white p-10  mt-32 mx-auto">
        {/* Card Image */}
        <img
          alt=""
          src="/Rectangle 9 (1).png"
          className=" w-[50%] h-[100%] shadow-lg"
          style={{
            boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
          }}
        ></img>
        {/* Card Image */}

        <div className="flex flex-col w-[50%] ">
          <div className="font-changa text-myTextLight flex flex-col items-start justify-between gap-5 w-[100%] h-full  ">
            <span
              style={{
                boxShadow: "8px 4px 10px rgba(0, 0, 0, 0.25) inset",
              }}
              className="block w-[100%] h-[2.5rem] bg-grey flex items-center"
            >
              <p className="ml-5">Title</p>
            </span>
            <span
              style={{
                boxShadow: "8px 4px 10px rgba(0, 0, 0, 0.25) inset",
              }}
              className="block w-[100%] h-[2.5rem] bg-grey flex items-center"
            >
              <p className="ml-5">ID</p>
            </span>
            <span
              style={{
                boxShadow: "8px 4px 10px rgba(0, 0, 0, 0.25) inset",
              }}
              className="block w-[100%] h-[2.5rem] bg-grey flex items-center"
            >
              <p className="ml-5">Proof</p>
            </span>
            <span
              style={{
                boxShadow: "8px 4px 10px rgba(0, 0, 0, 0.25) inset",
              }}
              className="block w-[100%] h-[2.5rem] bg-grey flex items-center"
            >
              <p className="ml-5">Amount</p>
            </span>

            {/* Button */}
            <button className="text-white text-md bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10rem] ">
              Get document
            </button>
          </div>
        </div>
      </div>
      {/* Owned Card */}
    </>
  );
};
