import { Features, HouseHero } from "@components/ui/house";
import { BaseLayout } from "@components/ui/layout";
import { Header } from "@components/ui/marketplace";

export default function House() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <HouseHero />
        <Features />
      </div>
    </>
  );
}

House.Layout = BaseLayout;
