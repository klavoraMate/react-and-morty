import React from 'react'
import { useParams } from 'react-router-dom';

const LocationDescription = ({location,IDChange}) => {
    const {id} = useParams();
    IDChange(id)
    console.log(location);
  return (
    <div>
      <h2>{location.name}</h2>
      <h3>Origin: {location.dimension}</h3>
      {location.type && <p>Type: {location.type}</p>}
    </div>
  )
}

export default LocationDescription