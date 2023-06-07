import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 

      // Error page route for any unwanted paths
      // {
      //   path: '*', 
      //   element: <ErrorPage></ErrorPage>
      // }
    ]
  },
]);

export default router;
