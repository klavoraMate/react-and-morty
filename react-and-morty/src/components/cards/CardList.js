import Card from "./Card"
import { useRef, useCallback } from "react";


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
      <div className="character-list">
        {identities.map((identity, index) => {
          if (identities.length === index + 1) {
            return (
              <div className="card" key={identity.id} ref={lastCardRef} >
                <Card  img={identity.img} name={identity.name} style={style} url={url+identity.id}/>
              </div>
            )
          }
          return (
            <div className="card" key={identity.id} >
              <Card img={identity.img} name={identity.name} style={style} url={url+identity.id}/>
            </div>
          )
        })}
        {loading && <div>Loading...</div>}
      </div>
    )
  }
}


export default CardList

