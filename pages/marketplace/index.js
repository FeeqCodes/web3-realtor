import { Cards, HouseList } from "@components/ui/house";
import { BaseLayout } from "@components/ui/layout";
import { Header } from "@components/ui/marketplace";
import BreadCrumbs from "@components/ui/shared/breadcrumbs";

// content
import { getAllHouses } from "@content/houses/fetcher";





export default function Marketplace({houses}) {
  

  return (
    <>
      <div className="h-auto w-full mx-auto">
        <Header />
        {/* <BreadCrumbs/> */}

        {/* <Cards houses={houses} /> */}
        <HouseList houses={houses}>
          { (house) => {

            return( 
              <Cards 
                key={house.id}
                house={house} 

              />
            )
          }

          }
        </HouseList>
      </div>


    </>
  )
};



export function getStaticProps() {
  const {data} = getAllHouses()

  return {
    props: {
      houses: data,

    }
  }
}


Marketplace.Layout = BaseLayout