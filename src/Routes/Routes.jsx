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
import AdminHome from "../Pages/ManageClasses/ManageClasses";
import InstractorHome from "../Pages/InstractorHome/InstractorHome";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from "../Pages/MyClasses/MyClasses";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import ManageUser from "../Pages/ManageUser/ManageUser";
import SelectedClass from "../Pages/SelectedClass/SelectedClass";
import EnrollClasses from "../Pages/EnrollClasses/EnrollClasses";
import UpdateClass from "../Pages/updateClass/updateClass";
import Payment from "../Pages/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";




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
            path: 'selectedClass',
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'enrollClasses',
            element: <EnrollClasses></EnrollClasses>
          },
          // admin routes
          {
            path: 'manageClasses',
            element: <ManageClasses></ManageClasses>
          },
          {
            path: 'manageUser',
            element:<ManageUser></ManageUser>
          },
          //instractor route
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          },
          {
            path: 'addclass',
            element: <AddClass></AddClass>
          },
          {
            path: 'myclasses/:id', 
            element: <UpdateClass></UpdateClass>,
            loader: ({params}) => fetch(`https://assignment-12-server-jet-iota.vercel.app/myclasses/${params.id}`)
          },
          {
            path: 'payment',
            element: <Payment></Payment>,
          },
          {
            path: 'paymenthistory',
            element: <PaymentHistory></PaymentHistory>
          },
        ]
      },
      {
        path: '*', 
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

export default router;
