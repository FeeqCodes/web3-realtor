import { Button } from "@components/ui/shared";



export default function Cards  ({house}) {

  return (
    <>
      
        {/* Cards */}
        <div
          style={{
            boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
          }}
          className="p-6 flex flex-col justify-between    w-[80%] h-auto  bg-white rounded-xl mx-auto"
        >
          <img
            alt=""
            src="/Rectangle 9 (1).png"
            className=" mb-6 w-[100%]  shadow-lg"
            style={{
              boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
            }}
          ></img>

          <div className="mb-2">
            <span className="flex items-center gap-2 mb-4">
              <img
                alt=""
                src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                width="30"
                height="30"
              ></img>
              <p
                className={` font-changa text-xl text-myText`}
              >
                2.5
              </p>
            </span>

            <p className="text-md whitespace-normal font-bold">
              {house.title}
            </p>
            <p className="mt-2 text-md whitespace-normal text-sm">
              {house.description}
            </p>
          </div>

          <div className="flex gap-4 w-full h-auto">

            <Button size="lg">Purchase</Button>
            <Button size="lg">Explore</Button>
            
          </div>
        </div>

       
     
    </>
  );
}

















//  {/* Card 2 */}
//         <div
//           style={{
//             boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
//           }}
//           className="p-6 flex flex-col justify-between    w-[40%] h-[70%]  bg-white rounded-xl"
//         >
//           <img
//             alt=""
//             src="/Rectangle 9 (2).png"
//             className=" mb-6 w-[100%]  shadow-lg"
//             style={{
//               boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
//             }}
//           ></img>

//           <div className="mb-6">
//             <span className="flex items-center gap-2 mb-6">
//               <img
//                 alt=""
//                 src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
//                 width="30"
//                 height="30"
//               ></img>
//               <p
//                 className={` font-changa text-xl text-myText`}
//               >
//                 2.5
//               </p>
//             </span>

//             <p className="text-md whitespace-normal ">
//               A fully furnished 5 bedroom Apartment, with a gym, swimming pool
//               and spacious car park
//             </p>
//           </div>

//           <div className="flex gap-4 w-full h-auto">
//             <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
//               Purchase
//             </button>
//             <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
//               Explore
//             </button>
//           </div>
//         </div>
//         {/* Card 2-ends */}