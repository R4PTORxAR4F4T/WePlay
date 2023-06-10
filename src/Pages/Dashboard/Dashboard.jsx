import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const isAdmin = false;
    const isInstructor = false;

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
                <ul className="menu p-4 h-full bg-base-200 text-base-content">
                
                {
                    isAdmin ? (
                    <li>
                        <Link to="/dashboard/adminhome">Dashboard</Link>
                    </li>
                    ) : (
                    
                    isInstructor ? 
                    <>
                        <li>
                            <Link to="/dashboard/instractorhome">Dashboard</Link>
                        </li>
                    </> : 
                    <>
                        <li>
                            <Link to="/dashboard/userhome">Dashboard</Link>
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