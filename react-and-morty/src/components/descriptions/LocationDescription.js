import React from 'react'
import useFetch from '../../api/useFetch';
import { mainUrls } from '../../api/dataRoutes';
import { useParams } from 'react-router-dom';

const LocationDescription = () => {
    const {id} = useParams();
    const { data: location } = useFetch(mainUrls.location + id);
    if(location){
      return (
        <div>
          <h2>{location.name}</h2>
          <h3>Origin: {location.dimension}</h3>
          {location.type && <p>Type: {location.type}</p>}
        </div>
      )
    }

}

export default LocationDescription