import React from 'react'
import useFetch from '../../api/useFetchSingle';
import { mainUrls } from '../../api/dataRoutes';
import { useParams, Link } from 'react-router-dom';
import "../../style/description.css"
import LocationCharacterCard from '../cards/LocationCharacterCard';


const LocationDescription = () => {
  const { id } = useParams();
  const { data: location } = useFetch(mainUrls.location + id);
  if (location) {
    return (
      <div className='description'>
        <Link to='../../locations/'>
          <button>Back</button>
        </Link>
        <div className='main'>
          <h2>{location.name}</h2>
          <img id="planet" src={mainUrls.planetImg} alt="generic planet drawing" />
        </div>
        <div className='location_info'>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
        </div>
        <div className="character-list">
          {location.residents.map((character, index) => {
            return (
              <div className="card" key={index} >
                <LocationCharacterCard apiUrl={character} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default LocationDescription