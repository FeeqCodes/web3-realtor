import Image from "next/image";
import { Poppins, Changa_One } from "next/font/google";
import { BaseLayout } from "@components/ui/layout";

/**Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  variable: ["--font-poppins"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

const changa_One = Changa_One({
  subsets: ["latin"],
  variable: ["--font-changa_One"],
  weight: ["400"],
});

/**Default Function */
export default function Buildings() {
  return (
    <>
      <section
        className={` ${poppins.variable} font-sans bg-offWhite h-auto px-5`}
      >
        <div className="relative max-w-7xl mx-auto bg-offWhite  h-[100%]">
          <div className="m-auto bg-white w-full  py-6  ">
            <nav className=" flex items-center justify-between w-[90%] m-auto">
              <div className="text-xl  font-black">Realtor</div>
              <ul
                className={`${changa_One.variable} font-changa flex flex-shrink gap-x-24 text-myTextLight text-base font-normal `}
              >
                <li>Home</li>
                <li>Marketplace</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <button className="text-white text-sm bg-indigo rounded-[20px] py-3 px-6">
                Connect wallet
              </button>
            </nav>
          </div>

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
                className="bg-white w-[20%] h-[30%] bg-grey  p-[14px] border border-black  rounded-bl-[20px]"
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
                    className={`${changa_One.variable} font-changa text-[18px]`}
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

          {/* Absolute image */}
          <img
            src="/af2a7a8f-ebda-4adc-9f13-a44dceab447c.svg"
            alt=""
            width={350}
            height={300}
            className=" absolute bottom-0 z-[1]"
          ></img>
          {/* Absolute image */}

          {/* Hero section */}
          <div className="mt-8">
            <div className="flex flex-col justify-end p-2 ">
              <h1
                className={`${changa_One.variable} font-changa text-[5vw] leading-sm text-right  text-indigo`}
              >
                Revolutionizing Real Estate: <br /> Discover the power of <br />
                Decentralization
              </h1>
              <p className="mt-4 text-right text-[1.4vw]">
                Embrace luxury living: unveiling prestigious properties
                <br /> Indulge in the allure of luxury living as our marketplace
                <br /> showcases an exclusive collection of prestigious
                properties.
                <br /> from opulent penthouses with breathtaking views to
                palatial
                <br /> estates that redefine elegance, experience the epitome of
                <br /> refinement and sophistication through our premium
                listings.
              </p>
            </div>

            <div className="flex justify-end mt-3">
              <button className="text-white text-lg bg-indigo rounded-[5px] py-3 px-8 ">
                Explore
              </button>
            </div>
          </div>

          {/* Hero section ends*/}

          {/* Footer */}

          <div className={`${changa_One.variable} font-changa`}>
            <div className="mt-12 flex items-center justify-center p-6 bg-white relative bottom-0 z-10 ">
              <p className="text-black text-base font-normal ">
                FeeqCodes 2023
              </p>
            </div>
          </div>

          {/* Footer Ends*/}
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`${poppins.variable} font-sans mt-8  w-full h-[auto] relative bg-grey p-16`}
      >
        {/* Breadcrumbs */}
        <div className="w-full flex justify-end mb-16">
          <div
            style={{
              boxShadow: "8px 4px 10px 0px rgba(0, 0, 0, 0.25) inset",
            }}
            className="bg-white w-[463px] flex gap-8 justify-center items-center py-[24px] px-[62px] text-myText font-medium"
          >
            <h3>Market</h3>
            <h3>Purchased</h3>
            <h3>Admin</h3>
          </div>
        </div>
        {/* Breadcrumbs end */}
        {/* Cards wrapper */}
        <div className="flex gap-8 justify-between h-full  max-w-7xl mx-auto">
          {/* Cards */}
          <div
            style={{
              boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
            }}
            className="p-6 flex flex-col justify-between    w-[40%] h-[70%]  bg-white rounded-xl"
          >
            <img
              alt=""
              src="/Rectangle 9 (1).png"
              className=" mb-6 w-[100%]  shadow-lg"
              style={{
                boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
              }}
            ></img>

            <div className="mb-6">
              <span className="flex items-center gap-2 mb-6">
                <img
                  alt=""
                  src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                  width="30"
                  height="30"
                ></img>
                <p
                  className={`${changa_One.variable} font-changa text-xl text-myText`}
                >
                  2.5
                </p>
              </span>

              <p className="text-md whitespace-normal ">
                A fully furnished 5 bedroom Apartment, with a gym, swimming pool
                and spacious car park
              </p>
            </div>

            <div className="flex gap-4 w-full h-auto">
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Purchase
              </button>
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Explore
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
            }}
            className="p-6 flex flex-col justify-between    w-[40%] h-[70%]  bg-white rounded-xl"
          >
            <img
              alt=""
              src="/Rectangle 9 (2).png"
              className=" mb-6 w-[100%]  shadow-lg"
              style={{
                boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
              }}
            ></img>

            <div className="mb-6">
              <span className="flex items-center gap-2 mb-6">
                <img
                  alt=""
                  src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                  width="30"
                  height="30"
                ></img>
                <p
                  className={`${changa_One.variable} font-changa text-xl text-myText`}
                >
                  2.5
                </p>
              </span>

              <p className="text-md whitespace-normal ">
                A fully furnished 5 bedroom Apartment, with a gym, swimming pool
                and spacious car park
              </p>
            </div>

            <div className="flex gap-4 w-full h-auto">
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Purchase
              </button>
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Explore
              </button>
            </div>
          </div>
          {/* Card 2-ends */}
        </div>
        {/* Card-wrapper-1 ends */}

        {/* Cards wraper-2 */}
        <div className="flex gap-8 justify-between h-full  max-w-7xl mx-auto mt-16">
          {/* Cards */}
          <div
            style={{
              boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
            }}
            className="p-6 flex flex-col justify-between    w-[40%] h-[70%]  bg-white rounded-xl"
          >
            <img
              alt=""
              src="/Rectangle 9 (3).png"
              className=" mb-6 w-[100%]  shadow-lg"
              style={{
                boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
              }}
            ></img>

            <div className="mb-6">
              <span className="flex items-center gap-2 mb-6">
                <img
                  alt=""
                  src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                  width="30"
                  height="30"
                ></img>
                <p
                  className={`${changa_One.variable} font-changa text-xl text-myText`}
                >
                  2.5
                </p>
              </span>

              <p className="text-md whitespace-normal ">
                A fully furnished 5 bedroom Apartment, with a gym, swimming pool
                and spacious car park
              </p>
            </div>

            <div className="flex gap-4 w-full h-auto">
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Purchase
              </button>
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Explore
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              boxShadow: "10px 15px 20px 5px rgba(0, 0, 0, 0.25) inset",
            }}
            className="p-6 flex flex-col justify-between    w-[40%] h-[70%]  bg-white rounded-xl"
          >
            <img
              alt=""
              src="/Rectangle 9 (4).png"
              className=" mb-6 w-[100%]  shadow-lg"
              style={{
                boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25) ",
              }}
            ></img>

            <div className="mb-6">
              <span className="flex items-center gap-2 mb-6">
                <img
                  alt=""
                  src="/2cde3ee1-d6b5-4fcd-ba2c-ae00bf7f0125.svg"
                  width="30"
                  height="30"
                ></img>
                <p
                  className={`${changa_One.variable} font-changa text-xl text-myText`}
                >
                  2.5
                </p>
              </span>

              <p className="text-md whitespace-normal ">
                A fully furnished 5 bedroom Apartment, with a gym, swimming pool
                and spacious car park
              </p>
            </div>

            <div className="flex gap-4 w-full h-auto">
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Purchases
              </button>
              <button className="text-white text-lg bg-indigo rounded-[5px] py-[3%] px-[5%] w-[10vw] ">
                Explore
              </button>
            </div>
          </div>
          {/* Card 2-ends */}
        </div>
        {/* Card wrapper-2 ends */}
      </section>
    </>
  );
}


Buildings.Layout = BaseLayout;