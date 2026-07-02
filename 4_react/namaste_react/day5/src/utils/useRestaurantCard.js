import {useEffect, useState} from 'react'
import { MENU_URL } from './constant';

const useRestaurantCard = () => {

  const[cardInfo, setCardInfo] = useState(null);

  //fetch the data
  useEffect(() => {
      fetchMenu();
    },[]);

    const fetchMenu = async () => {
      const resData = await fetch(MENU_URL);
      const json = await resData.json();
      setCardInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);
    }
  return cardInfo;
}

export default useRestaurantCard;