import Card from "./Card"
const LocationList = ({ locations }) => {
    return (
      <div>
        {locations.map((location) => (
          <div key={location.id} >
           <Card id={location.id} img={location.image} name={location.name} identity="location"/>
         </div>
        ))}
      </div>
    )
  }
  
  export default LocationList