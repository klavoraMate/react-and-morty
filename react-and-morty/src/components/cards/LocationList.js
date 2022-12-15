import "../../style/cards.css"
import CardList from './CardList';
import useFetch from "../../api/useFetch";
import { mainUrls } from "../../api/dataRoutes";
import { useState } from "react";

const LocationList = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const { data: locations, hasMore, loading } = useFetch(mainUrls.locations + pageNumber);

  const handleSetPageNumber = () => {
    setPageNumber(current => current + 1)
  }

  return (
    <CardList
      identities={locations}
      hasMore={hasMore}
      loading={loading}
      handleSetPageNumber={handleSetPageNumber}
    />
  )

}

/*   const { id } = useParams();
  const { data: locations } = useFetch(mainUrls.locations + id);
  if (locations) {
    return (
      <div className="character-list">
        {locations.results.map((location) => {

          const style = createStyle();

          return (
            <div className="card" key={location.id} >
              <Card url={"/location/" + location.id} name={location.name} style={style} img={mainUrls.planetImg} />
            </div>
          )
        })}
      </div>
    )
  } */
//}

const createStyle = () => {
  const red = Math.floor(Math.random(255) * 1000);
  const green = Math.floor(Math.random(255) * 1000);
  const blue = Math.floor(Math.random(255) * 1000);
  const rgb = { red: red, green: green, blue: blue }
  return {
    filter: `opacity(0.5) drop-shadow(0 0 0 rgb(${rgb.red},${rgb.green},${rgb.blue}))`
  }
}

export default LocationList