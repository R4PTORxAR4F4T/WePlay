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

    return (
        <div>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Manage All Classes</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Student</th>
                        <th>Status</th>
                        <th>Update</th>
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
                                    <button onClick={() => handleApproved(classitem._id)} className="btn btn-ghost btn-xs btn-outline" >
                                    Approved
                                    </button>
                                    <button className="btn btn-ghost btn-xs btn-outline" >
                                    Deny
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