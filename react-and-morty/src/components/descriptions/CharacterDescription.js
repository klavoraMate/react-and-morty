import React from 'react'
import { useParams } from 'react-router-dom';

const CharacterDescription = ({characters}) => {
    const {id} = useParams();
    console.log(characters[Number(id)-1]);
  return (
    <div>CharacterDescription</div>
  )
}

export default CharacterDescription