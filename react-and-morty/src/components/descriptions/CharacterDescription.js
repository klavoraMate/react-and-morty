import React from 'react'
import { useParams } from 'react-router-dom';

const CharacterDescription = ({character,IDChange}) => {
    const {id} = useParams();
    IDChange(id)
    console.log(character);
  return (
    <div>CharacterDescription</div>
  )
}

export default CharacterDescription