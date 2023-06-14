import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog, FaClipboardList ,FaHistory } from "react-icons/fa";
import { BiBookAdd, BiSelectMultiple } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {

    const role = useRole();

    return (
        <div className='lg:w-4/6 mx-auto'>
            <Helmet>
                <title>WePlay | Dashboard</title>
            </Helmet>
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
                        <Link to="/dashboard/manageClasses"><SiGoogleclassroom></SiGoogleclassroom>Manage Classes</Link>
                        <Link to="/dashboard/manageUser"><FaUsersCog></FaUsersCog>Manage User</Link>
                    </li>
                    ) : (
                    
                    role === "instractor" ? 
                    <>
                        <li>
                            <Link to="/dashboard/addclass"><BiBookAdd></BiBookAdd>Add Class</Link>
                            <Link to="/dashboard/myclasses"><FaClipboardList></FaClipboardList>My Classes</Link>
                        </li>
                    </> : 
                    <>
                        <li>
                            <Link to="/dashboard/selectedClass"><BiSelectMultiple></BiSelectMultiple>Selected Class</Link>
                            <Link to="/dashboard/enrollClasses"><MdPayments></MdPayments>Enroll Classes</Link>
                            <Link to="/dashboard/paymenthistory"><FaHistory></FaHistory>Payment History</Link>
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