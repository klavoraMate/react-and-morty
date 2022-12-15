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
        {locations.results.map((location) => (
          <div className="card" key={location.id} >
            <Card id={location.id} img={location.image} name={location.name} identity="location" />
          </div>
        ))}
      </div>
    )
  } */
//}

export default LocationList