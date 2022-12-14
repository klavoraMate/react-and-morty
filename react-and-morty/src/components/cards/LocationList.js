import { useParams } from "react-router-dom"
import Card from "./Card"
import { mainUrls } from "../../api/dataRoutes";
import useFetch from "../../api/useFetch";

const LocationList = () => {
  const { id } = useParams();
  const { data: locations } = useFetch(mainUrls.locations + id);
  if (locations) {
    return (
      <div>
        {locations.results.map((location) => (
          <div key={location.id} >
            <Card id={location.id} img={location.image} name={location.name} identity="location" />
          </div>
        ))}
      </div>
    )
  }
}

export default LocationList