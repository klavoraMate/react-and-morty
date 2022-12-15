import "../style/Home.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Home = () => {
  const navigate = useNavigate()
  const [descriptionVisibility, setDescriptionVisibility] = useState(true);

  const navigateTo = (urlEnd) => {
    setDescriptionVisibility(false);
    navigate(urlEnd);
  };


  return (
    <div className="Home">
      <img src="/images/Daco_4305710.png" alt="React And Morty" className="r-a-m" />
      <img src="/images/Daco_4407915.png" alt="Rect and Morty group" className="logo" />
      {descriptionVisibility && <p>Description: On this website you can see characters and locations of the famous series React and Morty!
      </p>}
      <div>
        <button
          className="characters"
          onClick={() => navigateTo('./characters/')}>Characters</button>
        <button
          className="locations"
          onClick={() => navigateTo('./locations/')}>Locations</button>
      </div>
    </div>
  )
}

export default Home
