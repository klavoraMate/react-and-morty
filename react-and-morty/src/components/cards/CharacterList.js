import "../../style/cards.css"
import CardList from './CardList';
import useFetch from "../../api/useFetch";
import { mainUrls } from "../../api/dataRoutes";
import { useState } from "react";

const CharacterList = () => {
  //const { id } = useParams();

  const [pageNumber, setPageNumber] = useState(1)
  const { data: characters, hasMore, loading } = useFetch(mainUrls.characters + pageNumber);

  const handleSetPageNumber = () => {
    setPageNumber(current => current + 1)
  }

  return (
    <CardList
      identities={characters}
      hasMore={hasMore}
      loading={loading}
      handleSetPageNumber={handleSetPageNumber}
    />
  )

}



export default CharacterList