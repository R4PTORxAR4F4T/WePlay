import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
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
