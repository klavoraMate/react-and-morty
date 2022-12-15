import { useParams } from "react-router-dom"
import Card from "./Card"
import { mainUrls } from "../../api/dataRoutes";
import useFetch from "../../api/useFetch";
import "../../style/cards.css"


const LocationList = () => {
  const { id } = useParams();
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
  }
}

export default LocationList