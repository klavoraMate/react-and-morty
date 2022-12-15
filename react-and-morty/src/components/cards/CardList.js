import Card from "./Card"
import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";


const CardList = ({ identities, hasMore, loading, handleSetPageNumber , url,style}) => {
  const observer = useRef();
  const lastCardRef = useCallback(lastCard => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log(lastCard);
        handleSetPageNumber();
      }
    })
    if (lastCard) observer.current.observe(lastCard)
  }, [loading, hasMore, handleSetPageNumber])
  if (identities.length) {
    return (
      <>
      <Link to='/'>
          <button id="list-back-button">Back</button>
      </Link>
      <div className="character-list">
        {identities.map((identity, index) => {
          if (identities.length === index + 1) {
            return (
              <div className="card" key={identity.id} ref={lastCardRef} >
                <Card  img={identity.image} name={identity.name} style={identity.image?{}:createStyle()} url={url+identity.id}/>
              </div>
            )
          }
          return (
            <div className="card" key={identity.id} >
              <Card img={identity.image} name={identity.name} style={identity.image?{}:createStyle()} url={url+identity.id}/>
            </div>
          )
        })}
        {loading && <div>Loading...</div>}
      </div>
      </>
    )
  }
}
const createStyle = () => {
  const red = Math.floor(Math.random(255) * 1000);
  const green = Math.floor(Math.random(255) * 1000);
  const blue = Math.floor(Math.random(255) * 1000);
  const rgb = { red: red, green: green, blue: blue }
  return {
    filter: `opacity(0.4) drop-shadow(0 0 0 rgb(${rgb.red},${rgb.green},${rgb.blue}))`
  }
}


export default CardList

