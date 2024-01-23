
export const getExplore = async () =>{
    try {
        const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
        const exploreData = await res.json();
        return exploreData;
    } catch (err){
        console.log(err);
    }
}