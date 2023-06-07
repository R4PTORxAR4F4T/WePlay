import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate,useLocation } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    if (!user?.email) {
      toast.error('Please log in to access this page');
    }
  }, [user]);

  if (loading) {
    return (
      <>
        <progress className="progress w-56 mx-auto"></progress>
      </>);
  }

  if (user?.email) {
    return children;
  }

  return (
    <>
      <Navigate state={{from:location}} to="/login" replace></Navigate>
    </>
  );
};

export default PrivateRoute;
