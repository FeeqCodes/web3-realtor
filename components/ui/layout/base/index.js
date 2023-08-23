


import { Web3Provider } from "@components/providers";
import { Navbar, Footer } from "@components/ui/shared";
import { Poppins, Changa_One } from "next/font/google";





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
// wrap the created providers around the whole layout- pages and components

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <div
        className={` ${poppins.variable} font-poppins ${changa_One.variable} relative max-w-7xl mx-auto px-5 bg-grey h-auto `}
      >
        <Navbar />
        <div className="fit">{children}</div>
        <Footer />
      </div>
    </Web3Provider>
  );
}
 