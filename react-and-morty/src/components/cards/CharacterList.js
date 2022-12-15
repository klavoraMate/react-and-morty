import Card from "./Card"
import { useParams } from 'react-router-dom';
import useFetch from "../../api/useFetch";
import { mainUrls } from "../../api/dataRoutes";
import "../../style/cards.css"
import { useState, useRef, useCallback } from "react";

const CharacterList = () => {

  //Not setting the pageNumber to 1 when changing the url
  //const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(1)
  const { data: characters, hasMore, loading } = useFetch(mainUrls.characters + pageNumber);

  const observer = useRef();
  const lastCardRef = useCallback(lastCard => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(lastCard);
        setPageNumber(current => current + 1)
      }
    })
    if (lastCard) observer.current.observe(lastCard)
  }, [loading, hasMore])

  if (characters.length) {
    console.log('RUN');
    return (

      <div className="character-list">
        {characters.map((character, index) => {
          if (characters.length === index + 1) {
            return (
              <div className="card" key={index} ref={lastCardRef} >
                <div>{character.id}</div>
                <Card id={character.id} img={character.image} name={character.name} identity="character" />
              </div>
            )
          }
          return (
            <div className="card" key={index} >
              <div>{character.id}</div>
              <Card id={character.id} img={character.image} name={character.name} identity="character" />
            </div>
          )
        })}
        {loading && <div>Loading...</div>}
      </div>
    )
  }

}



export default CharacterList