
import { useWeb3 } from "@components/providers";
import Button from "../button";
import { useAccount } from "@components/hooksUsage/web3";


export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()


  return (
    <>
      <div className="m-auto bg-white w-full  py-6  ">
        <nav className=" flex items-center justify-between w-[90%] m-auto">
          <div className="text-xl  font-black">Realtor</div>
          <ul
            className={` font-changa flex flex-shrink gap-x-24 text-myTextLight text-base `}
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

          { isLoading ?
            <Button 
              disabled={true}
              onClick={connect}>
             Loading...
            </Button> :

            account.data ?
            <Button onClick={connect} className="">
              Hi There
            </Button> :

            requireInstall ?
            <Button
              onClick={() => window.open("https://metamask.io/download.html", "_blank")}>Install Metamask
            </Button> :

            <Button
              onClick={connect}>
              Connect
            </Button> 

          }
          
        </nav>
      </div>
    </>
  );
}
