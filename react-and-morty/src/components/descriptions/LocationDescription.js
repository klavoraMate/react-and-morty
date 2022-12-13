import React from 'react'
import { useParams } from 'react-router-dom';

const LocationDescription = ({locations}) => {
    const {id} = useParams();
    console.log(locations[Number(id)-1]);
  return (
    <div>LocationDescription</div>
  )
}

export default LocationDescription