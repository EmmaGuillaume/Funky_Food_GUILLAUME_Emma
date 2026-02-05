import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import DetailsDish from "../pages/DetailsDish";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detailsDishes/:id",
        element: <DetailsDish />,
      },
    ],
  },
]);

export default router;