import React from 'react'
import { useParams } from 'react-router-dom';

const LocationDescription = ({location,IDChange}) => {
    const {id} = useParams();
    IDChange(id)
    console.log(location);
  return (
    <div>LocationDescription</div>
  )
}

export default LocationDescription