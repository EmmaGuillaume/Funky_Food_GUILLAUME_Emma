import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import DetailsDish from "../pages/DetailsDish";
import Error from "../pages/404";


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
    ],
  },
]);

export default router;