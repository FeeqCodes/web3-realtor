import { ManageHouseCard } from "@components/ui/house";
import { BaseLayout } from "@components/ui/layout";
import { Header } from "@components/ui/marketplace";
import BreadCrumbs from "@components/ui/shared/breadcrumbs";





export default function ManagedHouse() {

  return(
    <>
      <Header />
      <BreadCrumbs />
      <ManageHouseCard/ >
    </>
  )
}

ManagedHouse.Layout = BaseLayout
