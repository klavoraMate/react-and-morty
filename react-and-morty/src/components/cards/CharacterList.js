import Card from "./Card"
import { useParams } from 'react-router-dom';
import useFetch from "../../api/useFetch";
import { mainUrls } from "../../api/dataRoutes";
import "../../style/cards.css"

const CharacterList = () => {
  const { id } = useParams();
  const { data: characters } = useFetch(mainUrls.characters + id);
  if (characters) {
    return (
      <div className="character-list">
        {characters.results.map((character) => (
          <div className="card" key={character.id} >
            <Card url={"/character/" + character.id} img={character.image} name={character.name} style={{}} />
          </div>
        ))}
      </div>
    )
  }

}

export default CharacterList