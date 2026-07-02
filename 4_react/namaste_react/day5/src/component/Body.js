import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4700319&lng=78.3534174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
    const json = await data.json();
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
    return <h1>Looks like you're offline!! Please check your internet connection</h1>

  //Conditional Rendering
  // if(restList.length === 0) {
  //   return <Shimmer />
  // }


  return restList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button onClick= {() => {
              //Filter the restaurant cards and update the UI.
              const filteredRestaurant = restList.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setResList(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={
          ()=>{
            setResList(restList.filter((res) => res.info.avgRating > 4));
          }
          }>Top Rated Restaurant</button>
      </div>
      <div className="restaurant-container">
        {
          restList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;