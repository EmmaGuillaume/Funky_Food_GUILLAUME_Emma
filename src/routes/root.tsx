import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import DetailsDish from "../pages/DetailsDish";
import Error from "../pages/404";
import AllDishes from "../pages/AllDishes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dish/:id",
        element: <DetailsDish />,
      },
      {
        path :"/all-dishes",
        element : <AllDishes />
      },
      {
        path :"/about",
        element : <AllDishes />
      }
    ],
  },
]);

export default router;