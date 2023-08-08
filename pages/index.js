

import Image from "next/image";

import { BaseLayout } from "@components/ui/layout";
import { Absolute } from "@components/ui/shared";
import { Hero } from "@components/ui/homepage";
import { Header } from "@components/ui/marketplace";





/**Default Function */
export default function Home() {
  return <>
    
    <Absolute />

    <Header />
    <Hero />
  </>
}


Home.Layout = BaseLayout