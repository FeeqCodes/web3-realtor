

import Image from "next/image";

import { BaseLayout } from "@components/ui/layout";
import { Absolute, WalletBar } from "@components/ui/shared";
import { Hero } from "@components/ui/homepage";





/**Default Function */
export default function Home() {
  return <>
    <WalletBar />
    <Absolute />
    <Hero />
  </>
}


Home.Layout = BaseLayout