import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api"
import { ExploreCard } from "./ExploreCard";

export const Explore = async() => {
    const exploreData: ExploreData = await getExplore();
    console.log(exploreData);
  return (
    <section className="pt-6 container mx-auto">
        <div className="container">
            <h2 className="text-4xl font-semibold mb-5">Explore Nearby </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item)=>(
                <ExploreCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
            ))}
            </div>
        </div>

    </section>
  )
}
