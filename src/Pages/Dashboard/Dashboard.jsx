import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import useRole from '../../hooks/useRole';

const Dashboard = () => {

    const role = useRole();

    return (
        <div className='lg:w-4/6 mx-auto'>
            <Header></Header>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 h-full bg-base-300 text-base-content">
                
                {
                    role === "admin" ? (
                    <li>
                        <Link to="/dashboard/manageClasses">Manage Classes</Link>
                        <Link to="/dashboard/manageUser">Manage User</Link>
                    </li>
                    ) : (
                    
                    role === "instractor" ? 
                    <>
                        <li>
                            <Link to="/dashboard/addclass">Add Class</Link>
                            <Link to="/dashboard/myclasses">My Classes</Link>
                        </li>
                    </> : 
                    <>
                        <li>
                            <Link to="/dashboard/selectedClass">Selected Class</Link>
                            <Link to="/dashboard/enrollClasses">Enroll Classes</Link>
                        </li>
                    </>
                        
                )}


                </ul>
            
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;