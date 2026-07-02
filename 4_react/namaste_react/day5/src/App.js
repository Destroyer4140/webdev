import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/Shimmer";
// import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery")); // this is lazy loading, chunking, dynamic loading. Used to reduce loading latency by dividing module in small chunk.

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback= {<Shimmer/>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)