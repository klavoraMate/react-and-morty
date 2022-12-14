import Card from "./Card"
import { useParams } from 'react-router-dom';
import useFetch from "../../api/useFetch";
import { mainUrls } from "../../api/dataRoutes";

const CharacterList = () => {
  const { id } = useParams();
  const { data: characters } = useFetch(mainUrls.characters + id);
  if (characters) {
    return (
      <div>
        {characters.results.map((character) => (
          <div key={character.id} >
            <Card id={character.id} img={character.image} name={character.name} identity="character" />
          </div>
        ))}
      </div>
    )
  }

}

export default CharacterList