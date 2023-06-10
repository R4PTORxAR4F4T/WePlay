import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../Pages/UserHome/UserHome";
import AdminHome from "../Pages/AdminHome/AdminHome";
import InstractorHome from "../Pages/InstractorHome/InstractorHome";



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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'userhome',
            element: <UserHome></UserHome>
          },
          // admin routes
          {
            path: 'adminhome',
            element: <AdminHome></AdminHome>
          },
          {
            path: 'instractorhome',
            element: <InstractorHome></InstractorHome>
          },      
        ]
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
