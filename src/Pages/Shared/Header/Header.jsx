import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext , useState } from 'react';
import useRole from '../../../hooks/useRole';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const role = useRole();

    return (
        <div className='z-10'>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='h-full' src="/logo.png" alt="" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10">
                            {
                                user ? 
                                <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src= {user.photoURL} alt="" />
                                </div>
                                </label>
                                </> : 
                                <></>
                            }
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/instructor">Instructors</Link>
                            </li>
                            <li>
                                <Link to="/classes">Classes</Link>
                            </li>
                            
                            {   
                                user ?
                                (
                                role==="admin" ? (
                                <li>
                                    <Link to="/dashboard/manageClasses">Dashboard</Link>
                                </li>
                                ) : (
                                
                                    role==="instractor" ? <>
                                    <li>
                                        <Link to="/dashboard/addclass">Dashboard</Link>
                                    </li>
                                </> : <>
                                    <li>
                                        <Link to="/dashboard/selectedClass">Dashboard</Link>
                                    </li>
                                </>)
                                    
                            ) : <></>}
                            
                            {
                                user ? <>
                                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                                </> : <>
                                    <li><Link to="/login">Login</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
