import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: "#f5f0e2ff"
}

const resObj = [
                  {
                    "info": {
                      "id": "11110",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/fc13a3e2-4319-4177-a669-bc2070a79afe_11110.JPG",
                      "locality": "Kukatpally",
                      "areaName": "Kukatpally",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Top-rated for Pizza, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Pizza, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹159"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "892"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-kukatpally-rest11110",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "68591",
                      "name": "Homely",
                      "cloudinaryImageId": "ul45t1h60hftkbida1vo",
                      "locality": "SR Nagar Main Rd",
                      "areaName": "Miyapur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Home Food",
                        "South Indian",
                        "Beverages",
                        "Desserts",
                        "Thalis"
                      ],
                      "avgRating": 3.5,
                      "parentId": "4043",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "87K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "Exclusively available on Swiggy — you won't find it elsewhere."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "C",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/homely-sr-nagar-main-rd-miyapur-rest68591",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "535833",
                      "name": "Barbeque Nation",
                      "cloudinaryImageId": "jeyftw9qlqqxteii4hgx",
                      "locality": "Miyapur",
                      "areaName": "Miyapur",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Kebabs",
                        "Biryani",
                        "Street Food",
                        "Snacks"
                      ],
                      "avgRating": 3.7,
                      "parentId": "2438",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 01:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/barbeque-nation-miyapur-rest535833",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "315029",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/ea9661a4-de63-4eae-9d3c-881254c37acb_315029.JPG",
                      "locality": "Kondapur",
                      "areaName": "Kondapur",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "11633",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "8.5K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹130"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.0",
                          "ratingCount": "626"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-kondapur-rest315029",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "337986",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/af9a5d1f-e376-4185-a3ca-93113f4d1b29_337986.jpg",
                      "locality": "Botanical Garden",
                      "areaName": "Kondapur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4,
                      "parentId": "2",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "7.6K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 06:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Meals with high protein, low calorie and no added sugar",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/subway-botanical-garden-kondapur-rest337986",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "685792",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
                      "locality": "Serlingampally",
                      "areaName": "DLF, Gachibowli",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "parentId": "4961",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "2.5K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 01:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹109"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/la-pinoz-pizza-serlingampally-dlf-gachibowli-rest685792",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "745132",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/18eb5fcb-4094-4158-a5ca-ad498d1bb6a3_745132.JPG",
                      "locality": "Shilpa layout road",
                      "areaName": "Kothaguda",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "6.2K+",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/kfc-shilpa-layout-road-kothaguda-rest745132",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "824472",
                      "name": "Seoul Burgers & Shakes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/25/1f8709ae-6f3b-4335-986c-ad7466878add_824472.jpg",
                      "locality": "Gachibowli",
                      "areaName": "Hi-Tech city",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burger",
                        "Bubble Tea",
                        "Fast Food",
                        "Beverages",
                        "Juice and shake"
                      ],
                      "avgRating": 4.3,
                      "parentId": "588706",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-28 00:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/seoul-burgers-and-shakes-gachibowli-hi-tech-city-rest824472",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "824471",
                      "name": "Boba Bhai - Bubble Tea & Korean Street Food",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/e64f748d-24c6-4349-aff4-24eb0620ac06_824471.jpg",
                      "locality": "Gachibowli",
                      "areaName": "Hi-Tech city",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bubble Tea",
                        "Burger",
                        "Korean",
                        "Beverages",
                        "Fast Food",
                        "Juice and shake"
                      ],
                      "avgRating": 4.2,
                      "parentId": "361235",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-28 00:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/boba-bhai-bubble-tea-and-korean-street-food-gachibowli-hi-tech-city-rest824471",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "647348",
                      "name": "Louis Burger",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/634b41d7-71ec-4653-ab57-3f5a12049e39_647348.JPG",
                      "locality": "Kondapur",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "parentId": "22485",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "98"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/louis-burger-kondapur-gachibowli-rest647348",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "322212",
                      "name": "100N",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/b025305d-fd5c-47fc-b04e-e541ed39646f_322212.jpg",
                      "locality": " Ravi Colony",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Barbecue",
                        "Juices",
                        "Healthy Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "22768",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "15K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Meals with high protein, low calorie and no added sugar",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/100n-ravi-colony-gachibowli-rest322212",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "1068",
                      "name": "Box Eat by Rice Bowl",
                      "cloudinaryImageId": "4b9596bf72e9f9934bdc6104f5fe7fb8",
                      "locality": "Kothaguda",
                      "areaName": "Kondapur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian"
                      ],
                      "avgRating": 4,
                      "parentId": "432849",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "44K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/box-eat-by-rice-bowl-kothaguda-kondapur-rest1068",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "837779",
                      "name": "The Pizza Project by Oven Story",
                      "cloudinaryImageId": "f1b907b0b8f86c62e4fc347c6b1434e6",
                      "locality": "Hanuman Nagar",
                      "areaName": "Shilpa Hills",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "parentId": "497031",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "164",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 02:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/the-pizza-project-by-oven-story-hanuman-nagar-shilpa-hills-rest837779",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "387958",
                      "name": "Crusto's - Cheese Burst Pizza By Olio",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/302d11c2-be8a-4576-af2a-fc53a3a6312f_387958.JPG",
                      "locality": "Near Boston Living",
                      "areaName": "Kondapur",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "268955",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "4.8K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 06:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹130"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/crustos-cheese-burst-pizza-by-olio-near-boston-living-kondapur-rest387958",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "574954",
                      "name": "Veg Darbar by Behrouz Biryani",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/3bf28dbd-23da-4841-8bc4-f101150c07d5_574954.JPG",
                      "locality": "Hanuman Nagar",
                      "areaName": "Shilpa Hills",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "344904",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "170",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/veg-darbar-by-behrouz-biryani-hanuman-nagar-shilpa-hills-rest574954",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "90080",
                      "name": "Ohri's Cake Nation",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/7/528ff6e2-18e6-4ae0-a294-6e1177f82ebc_90080.jpg",
                      "locality": "Begumpet",
                      "areaName": "Madhapur",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "233127",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.3K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 02:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹75 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.7",
                          "ratingCount": "31"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/ohris-cake-nation-begumpet-madhapur-rest90080",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "259986",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/9899d152-2718-4f95-9a5a-f52ef0afc554_259986.JPG",
                      "locality": "Gachibowli",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "fastfood",
                        "Asian",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "1776",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5.9K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Top-rated for Chinese, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Chinese, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.2",
                          "ratingCount": "76"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/wow-momo-gachibowli-rest259986",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639519",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                      "locality": "Miyapur",
                      "areaName": "GSM MALL",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "Kebabs",
                        "North Indian",
                        "barbeque"
                      ],
                      "avgRating": 3.5,
                      "parentId": "351013",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "934",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 5.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 01:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-miyapur-gsm-mall-rest639519",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "324362",
                      "name": "Tossin Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/3e48f6ac-eac5-448d-bcfc-34e19d41a42a_324362.jpg",
                      "locality": "Gachibowli",
                      "areaName": "Gachibowli",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1778",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "6.5K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-35 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "1.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/tossin-pizza-gachibowli-rest324362",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "566414",
                      "name": "Faasos Signature Wraps & Rolls",
                      "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                      "locality": "Madinaguda",
                      "areaName": "Hafeezpet",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "parentId": "340366",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "166",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-22 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                            "description": "Top-rated for Rolls, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Rolls, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹699",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7576355b-0005-491d-8718-86a0b2a80f31"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/faasos-signature-wraps-and-rolls-madinaguda-hafeezpet-rest566414",
                      "type": "WEBLINK"
                    }
                  }
                ]
const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines,sla, externalRatings} = resData?.info
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-img" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{externalRatings.aggregatedRating.rating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
          resObj.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)