import "../../style/cards.css"
import CardList from './CardList';
import useFetch from "../../api/useFetchList";
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
      url={"/location/"}
    />
  )

}




export default LocationList