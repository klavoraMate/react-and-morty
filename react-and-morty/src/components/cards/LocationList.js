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
      style={createStyle()}
    />
  )

}
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