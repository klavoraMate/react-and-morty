import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

interface Identity {
  id: string;
  image: string;
  name: string;
}

interface CardListProps {
  identities: Identity[];
  hasMore: boolean;
  loading: boolean;
  handleSetPageNumber: () => void;
  url: string;
}

const CardList: React.FC<CardListProps> = ({ identities, hasMore, loading, handleSetPageNumber, url }) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCardRef = useCallback(
    (lastCard: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log(lastCard);
          handleSetPageNumber();
        }
      });

      if (lastCard) observer.current.observe(lastCard);
    },
    [loading, hasMore, handleSetPageNumber]
  );

  const createStyle = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = { red: red, green: green, blue: blue };
    console.log(rgb)
    return {
      filter: `opacity(0.4) drop-shadow(0 0 0 rgb(${rgb.red},${rgb.green},${rgb.blue}))`,
    };
  };

  if (identities.length) {
    return (
      <>
        <Link to='/'>
          <button id='list-back-button'>Back</button>
        </Link>
        <div className='list'>
          {identities.map((identity, index) => {
            if (identities.length === index + 1) {
              return (
                <div className='card' key={identity.id} ref={lastCardRef}>
                  <Card
                    img={identity.image}
                    name={identity.name}
                    style={identity.image ? {} : createStyle()}
                    url={url + identity.id}
                  />
                </div>
              );
            }
            return (
              <div className='card' key={identity.id}>
                <Card
                  img={identity.image}
                  name={identity.name}
                  style={identity.image ? {} : createStyle()}
                  url={url + identity.id}
                />
              </div>
            );
          })}
          {loading && <div>Loading...</div>}
        </div>
      </>
    );
  }
  return <div>No identities available.</div>;
};

export default CardList;


