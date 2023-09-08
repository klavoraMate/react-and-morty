import React, { useState } from 'react';
import '../../style/cards.css';
import CardList from './CardList';
import useFetch from '../../api/useFetchList';
import { mainUrls } from '../../api/dataRoutes';

const CharacterList: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data: characters, hasMore, loading } = useFetch(mainUrls.characters + pageNumber);

  const handleSetPageNumber = () => {
    setPageNumber((current) => current + 1);
  };

  return (
    <CardList
      identities={characters}
      hasMore={hasMore}
      loading={loading}
      handleSetPageNumber={handleSetPageNumber}
      url={'/character/'}
    />
  );
};

export default CharacterList;
