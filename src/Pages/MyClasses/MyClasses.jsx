import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {

    const {user, loading} = useAuth();
    const [classes, setClasses] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/myclasses?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClasses(data))
            
    }, [url,loading]);

    return (
        <div>
            <Helmet>
                <title>WePlay | My Classes</title>
            </Helmet>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>All Added Class</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Student</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Feedback</th>
                    </tr>
                    </thead>
                    <tbody>
                        {classes && classes.map((classitem, index) =>

                            <tr key={classitem._id} className="bg-base-200">
                                <td>{index+1}</td>
                                <td>{classitem.cName}</td>
                                <td>{classitem.enrollStudent}</td>
                                <td>{classitem.status}</td>
                                <td>
                                    <Link to={`/dashboard/myclasses/${classitem._id}`}>
                                    <button className="btn btn-ghost btn-xs">UPDATE</button>
                                    </Link>
                                </td>
                                <td>
                                    {classitem.status !== 'pending' && classitem.status !== 'approve' ? ('feedback') : ''}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;