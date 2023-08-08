import { Cards } from "@components/ui/house";
import { BaseLayout } from "@components/ui/layout";
import { Header } from "@components/ui/marketplace";
import BreadCrumbs from "@components/ui/shared/breadcrumbs";





export default function Marketplace() {
  

  return (
    <>
      <Header />
      <BreadCrumbs/>
      <Cards />

    </>
  )
};


Marketplace.Layout = BaseLayout