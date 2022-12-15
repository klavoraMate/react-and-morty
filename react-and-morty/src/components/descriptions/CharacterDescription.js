import React from 'react'
import useFetch from '../../api/useFetch';
import { mainUrls } from '../../api/dataRoutes';
import { useParams } from 'react-router-dom';
import "../../style/description.css"

const CharacterDescription = () => {
  const { id } = useParams();
  const { data: character } = useFetch(mainUrls.character + id);
  if (character) {
    return (
      <div className='description'>
        <div className='main'>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        <div className='info'>
          <div>
            <p>Species: {character.species}</p>
            <p> Gender: {character.gender}</p>
          </div>
          <div>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            {character.type && <p>Type: {character.type}</p>}
          </div>
        </div>
      </div>
    )
  }

}

export default CharacterDescription