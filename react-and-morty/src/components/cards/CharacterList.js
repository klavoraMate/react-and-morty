import Card from "./Card"
import { useParams } from 'react-router-dom';
import { useState } from "react";
import useCharacters from "../hooks/usecharacters";

const CharacterList = ({ characters, IDChange }) => {

  const [pageNum, setPageNum] = useState(1);
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = useCharacters(pageNum)

  if (isError) return <p>{error.message}</p>

  const content = results

  const { id } = useParams();
  IDChange(id)
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} >
          <Card id={character.id} img={character.image} name={character.name} identity="character" />
        </div>
      ))}
    </div>
  )
}

export default CharacterList