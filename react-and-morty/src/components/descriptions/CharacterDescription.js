import React from 'react'
import { useParams } from 'react-router-dom';

const CharacterDescription = ({character,IDChange}) => {
    const {id} = useParams();
    IDChange(id)
    console.log(character);
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>Origin: {character.origin.name}</h3>
      <p>Species: {character.species}</p>
      <p> Gender: {character.gender}</p>
      <h4>Location: {character.location.name}</h4>
      {character.type && <p>Type: {character.type}</p>}

    </div>
  )
}

export default CharacterDescription