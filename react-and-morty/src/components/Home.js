import "./Home.css"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()
  const navigateTo = (urlEnd) => {
    // 👇️ navigate to /contacts
    navigate(urlEnd);
  };


  return (
    <div className="Home">
      <img src="/images/Daco_4305710.png" alt="React And Morty" />
      <img src="/images/Daco_4407915.png" alt="Rect and Morty group" />
      <p>Description:
        On this website you can see characters and locations of the famous series React and Morty!
      </p>
      <div>
        <button onClick={() => navigateTo('./characters')}>Characters</button>
        <button onClick={() => navigateTo('./locations')}>Locations</button>
      </div>
    </div>
  )
}

export default Home
