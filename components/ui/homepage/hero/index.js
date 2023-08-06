





export default function Hero() {

  return (
    <>
      {/* Hero section */}
      <div className="mt-8 py-1">
        <div className="flex flex-col justify-end p-2 ">
          <h1
            className={` font-changa text-[5vw] leading-sm text-right  text-indigo`}
          >
            Revolutionizing Real Estate: <br /> Discover the power of <br />
            Decentralization
          </h1>
          <p className="mt-4 text-right text-[1.4vw]">
            Embrace luxury living: unveiling prestigious properties
            <br /> Indulge in the allure of luxury living as our marketplace
            <br /> showcases an exclusive collection of prestigious properties.
            <br /> from opulent penthouses with breathtaking views to palatial
            <br /> estates that redefine elegance, experience the epitome of
            <br /> refinement and sophistication through our premium listings.
          </p>
        </div>

        <div className="flex justify-end my-1">
          <button className="text-white text-lg bg-indigo rounded-[5px] py-3 px-8 ">
            Explore
          </button>
        </div>
      </div>

      {/* Hero section ends*/}
    </>
  );
}