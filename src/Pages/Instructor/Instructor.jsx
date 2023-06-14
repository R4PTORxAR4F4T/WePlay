import React,{ useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {

    const [Instractors, setInstractors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-12-server-jet-iota.vercel.app/allinstractor')
            .then(res => res.json())
            .then(data => {
                setInstractors(data);
                setLoading(false);
            });
    }, [])

    return (
        <div className='lg:w-4/6 mx-auto'>
            <Helmet>
                <title>WePlay | Instructors</title>
            </Helmet>
            <Header></Header>
            <div className='my-10'>
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white'>Instractor</p>
            
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {/* row */}
                {
                    Instractors.map((instractor,index)=>
                    <tr key={instractor._id}>
                    
                        <td>{index+1}</td>

                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar mask mask-squircle w-12 h-12">
                                <img src={instractor.image}/>
                            </div>  
                        </div>
                        </td>

                        <td>
                        {instractor.name}
                        </td>

                        <td>{instractor.email}</td>
                        
                    </tr>
                )}
                </tbody>
            </table>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructor;