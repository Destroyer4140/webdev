
import { CDN_URL } from "../utils/constant";
const styleCard = {
  backgroundColor: "#f5f0e2ff"
}

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines,sla, avgRatingString} = resData?.info
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-img" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard;