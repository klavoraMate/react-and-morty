
const LocationList = ({ locations }) => {
    return (
      <div>
        {locations.map((location) => (
          <p key={location.name}>{location.name}</p>
        ))}
      </div>
    )
  }
  
  export default LocationList