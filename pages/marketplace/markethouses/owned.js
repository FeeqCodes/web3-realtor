import OwnedHouseCard from "@components/ui/house/cards/OwnedHouseCard";
import { BaseLayout } from "@components/ui/layout";
import { Header } from "@components/ui/marketplace";
import BreadCrumbs from "@components/ui/shared/breadcrumbs";




export default function OwnedHouse() {
  

  return (
    <>
      <Header />
      <BreadCrumbs />
      <OwnedHouseCard />
    </>
  )
};


OwnedHouse.Layout = BaseLayout