import React from 'react'
import { useParams } from 'react-router-dom';

const LocationDescription = ({ locations }) => {
  const { id } = useParams();
  const location = locations[Number(id) - 1];
  return (
    <div>
      <h2>{location.name}</h2>
      <h3>Origin: {location.dimension}</h3>
      {location.type && <p>Type: {location.type}</p>}
    </div>
  )
}

export default LocationDescription