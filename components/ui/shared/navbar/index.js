import { useWeb3 } from "@components/providers/web3";
import Button from "../button";





export default function Navbar() {
  const {connect, isLoading} = useWeb3()
  
  return (
    <>
      <div className="m-auto bg-white w-full  py-6  ">
        <nav className=" flex items-center justify-between w-[90%] m-auto">
          <div className="text-xl  font-black">Realtor</div>
          <ul
            className={` font-changa flex flex-shrink gap-x-24 text-myTextLight text-base font-normal `}
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>

          { isLoading ? (
            <Button
              onClick={connect}
              className="text-white text-sm bg-indigo rounded-[20px] py-3 px-6"
            >
              Loading..
            </Button>

          ) : (
            <Button
              onClick={connect}
              className="text-white text-sm bg-indigo rounded-[20px] py-3 px-6"
            >
              Connect wallet
            </Button>
          )}
          
        </nav>
      </div>
    </>
  );
}