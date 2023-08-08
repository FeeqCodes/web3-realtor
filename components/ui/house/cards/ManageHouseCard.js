export default function ManagedHouseCard() {
  return (
    <>
      {/* Owned Card */}
      <div className="  gap-5 w-[80%] h-auto  bg-white p-10  mt-32 mx-auto">
        <div className="flex flex-col w-[100%] ">
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
            <button className="text-white text-md bg-indigo rounded-[5px] py-[1rem] px-[2rem]  ">
              Get document
            </button>
            {/* Button */}
          </div>
        </div>
      </div>
      {/* Owned Card */}
    </>
  );
}
