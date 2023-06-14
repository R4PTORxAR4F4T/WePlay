import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    const {user, loading} = useAuth();
    const [classes, setClasses] = useState();

    const url = `http://localhost:5000/manageclasses`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClasses(data))
            
    }, [url,loading]);

    const handleApproved = id =>{
        fetch(`http://localhost:5000/manageclasses/approved?id=${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class Approved`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDeny = id =>{
        fetch(`http://localhost:5000/manageclasses/deny?id=${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class Deny`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Manage All Classes</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Class Name</th>
                        <th>Instractor</th>
                        <th>Seat</th>
                        <th>Price</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                        {classes && classes.map((classitem, index) =>

                            <tr key={classitem._id} className="bg-base-200">
                                <td>{index+1}</td>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={classitem.cImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{classitem.cName}</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    <div>
                                    <div className="font-bold">{classitem.iName}</div>
                                    <div className="text-sm opacity-50">{classitem.email}</div>
                                    </div>
                                </td>
                                <td>{classitem.seat}</td>
                                <td>{classitem.price}</td>
                                <td className='flex flex-col gap-2'>
                                    <button onClick={() => handleApproved(classitem._id)} className="btn btn-ghost btn-xs btn-outline" >
                                    Approved
                                    </button>
                                    <button onClick={() => handleDeny(classitem._id)} className="btn btn-ghost btn-xs btn-outline" >
                                    Deny
                                    </button>
                                    <button  className="btn btn-ghost btn-xs btn-outline" >
                                    Feedback
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;