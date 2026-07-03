
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines,sla, avgRatingString} = resData?.info
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-400 ">
      <img className="res-img rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="flex flex-wrap text-blue-700">{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard;