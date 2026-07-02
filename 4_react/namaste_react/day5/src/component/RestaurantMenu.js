import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const resData = await fetch(MENU_URL);

    const json = await resData.json();
    setRestInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]);
  };
  if(restInfo === null) return <Shimmer/>


  return (
    <div>
      <h1>Restaurant List</h1>
      <h2>List of Top Restaurant</h2>
      {restInfo?.restaurants.map(item => <li key={item.info.id}>{item.info.name} - {item.info.costForTwo}</li>)}
    </div>
  );
};

export default RestaurantMenu;